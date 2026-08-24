# -*- coding: utf-8 -*-
"""輸出「各提案有差異者」的分類比對 Excel（含現場操作分類欄）。

輸出內容與網頁上「各案比對＋現場操作」勾選「僅匯出有差異者」時完全一致：
只收錄至少有一位菩薩的分類與 1150810 定案不同的則次。

欄位：
  序號／日期／大事／紀要／現場操作分類／1150810 定案初版／各提案分類／
  各提案說明（照錄原文）／提出調整人數

「現場操作分類」的預設值即為定案分類；網頁上的現場調整存在瀏覽器本機
（localStorage），本腳本讀不到，因此輸出的是預設值。若要帶入現場調整結果，
請在網頁上按「備份 JSON」，再把該檔路徑當第二個參數傳進來。

用法：
  python export_diff_excel.py [輸出資料夾] [現場調整JSON]
"""
import json
import os
import re
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

BASE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_OUT = os.path.join(
    os.path.expanduser('~'),
    'OneDrive', '正覺', '大事紀', '04編寫', '14分頁籤', '第二次分類')

HEADER_FILL = PatternFill('solid', fgColor='793C01')
DIFF_FILL = PatternFill('solid', fgColor='FDECC8')
BASE_FILL = PatternFill('solid', fgColor='E8F3EA')


def read_js_array(path, marker):
    """從 js 檔中取出指定變數的 JSON 陣列／物件。"""
    src = open(os.path.join(BASE, path), encoding='utf-8').read()
    i = src.index(marker) + len(marker)
    opener = src[i]
    closer = {'[': ']', '{': '}'}[opener]
    depth, in_str, esc = 0, False, False
    for j in range(i, len(src)):
        ch = src[j]
        if in_str:
            if esc:
                esc = False
            elif ch == '\\':
                esc = True
            elif ch == '"':
                in_str = False
            continue
        if ch == '"':
            in_str = True
        elif ch == opener:
            depth += 1
        elif ch == closer:
            depth -= 1
            if depth == 0:
                return json.loads(src[i:j + 1])
    raise ValueError('無法解析 %s 中的 %s' % (path, marker))


def load_data():
    events = read_js_array('table_data.js', 'const tableData = ')
    proposals = read_js_array('meeting2_data.js', 'const proposals = ')
    categories = read_js_array('meeting2_data.js', 'const eventProposalCategories = ')
    notes = read_js_array('meeting2_data.js', 'const eventProposalNotes = ')
    aliases = read_js_array('meeting2_data.js', 'const tagAliases = ')
    return events, proposals, categories, notes, aliases


def canon_key(tags, aliases):
    """比對用的正規化字串（等價分類視為相同，順序不影響）。"""
    out = []
    for t in tags:
        c = aliases.get(t, t)
        if c not in out:
            out.append(c)
    return '｜'.join(sorted(out))


def build(out_dir, working_json=None):
    events, proposals, categories, notes, aliases = load_data()
    baseline = 'D0'
    others = [p for p in proposals if p['id'] != baseline]

    # 現場操作分類：預設同定案；有備份 JSON 時以其中的調整為準
    working = {}
    if working_json:
        data = json.load(open(working_json, encoding='utf-8'))
        restore = data.get('還原用', data)
        working = {int(k): v for k, v in (restore.get('tags') or {}).items()}

    def tags_of(sid, pid):
        return (categories.get(str(sid), {}) or {}).get(pid, [])

    def suggesters(sid):
        base = canon_key(tags_of(sid, baseline), aliases)
        return [p['id'] for p in others
                if canon_key(tags_of(sid, p['id']), aliases) != base]

    rows = [e for e in events if suggesters(int(e['id']))]

    wb = Workbook()
    ws = wb.active
    ws.title = '各案有差異者'

    header = ['序號', '日期', '大事', '紀要', '現場操作分類', '1150810 定案初版']
    header += [p['name'] for p in others]
    header += ['%s說明' % p['short'] for p in others]
    header += ['提出調整人數', '提出調整者']
    ws.append(header)

    for e in rows:
        sid = int(e['id'])
        changed = suggesters(sid)
        live = working.get(sid, tags_of(sid, baseline))
        row = [sid, e.get('column2', ''), e.get('column3', ''), e.get('column4', ''),
               '、'.join(live), '、'.join(tags_of(sid, baseline))]
        row += ['、'.join(tags_of(sid, p['id'])) for p in others]
        row += [((notes.get(str(sid), {}) or {}).get(p['id']) or {}).get('raw', '')
                for p in others]
        row += [len(changed),
                '、'.join(p['short'] for p in others if p['id'] in changed)]
        ws.append(row)

    # 版面：表頭固定、欄寬、換行；與定案不同的儲存格上底色
    ws.freeze_panes = 'C2'
    widths = [6, 12, 42, 60, 18, 18] + [16] * len(others) + [34] * len(others) + [10, 22]
    for i, w in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(i)].width = w
    for c in ws[1]:
        c.fill = HEADER_FILL
        c.font = Font(color='FFFFFF', bold=True)
        c.alignment = Alignment(vertical='center', wrap_text=True)
    ws.row_dimensions[1].height = 30

    first_prop = 7                       # 各提案分類欄的起始欄號
    for r, e in enumerate(rows, start=2):
        sid = int(e['id'])
        changed = set(suggesters(sid))
        for cell in ws[r]:
            cell.alignment = Alignment(vertical='top', wrap_text=True)
        ws.cell(row=r, column=6).fill = BASE_FILL
        for k, p in enumerate(others):
            if p['id'] in changed:
                ws.cell(row=r, column=first_prop + k).fill = DIFF_FILL

    # 說明頁
    info = wb.create_sheet('說明')
    for line in [
        ['正覺大事紀　各案分類有差異者一覽'],
        [],
        ['收錄範圍', '至少有一位菩薩的分類與「1150810 會議分頁籤定案-初版」不同的則次'],
        ['則數', '%d 則（全部 %d 則）' % (len(rows), len(events))],
        ['大事／日期／紀要', '照錄原始資料，未做任何更動'],
        ['各提案說明', '照錄各人作業檔原文，未改寫、未補述'],
        ['現場操作分類',
         '網頁上「現場操作」欄的分類；未經現場調整者即為定案分類'
         + ('（本檔已帶入指定的現場調整備份）' if working else
            '（本檔為預設值，未帶入任何現場調整）')],
        ['底色', '綠＝定案；橘＝該案與定案不同'],
        [],
        ['資料來源', '正覺大事紀_1150810會議分頁籤定案.xlsx'],
        ['', '正覺大事紀_總表分類二次作業檔-淳渝.xlsx（淳渝菩薩之分類與說明以此為準）'],
    ]:
        info.append(line)
    info.column_dimensions['A'].width = 18
    info.column_dimensions['B'].width = 76
    info['A1'].font = Font(bold=True, size=14)
    for r in range(3, info.max_row + 1):
        info.cell(row=r, column=1).font = Font(bold=True)
        info.cell(row=r, column=2).alignment = Alignment(wrap_text=True, vertical='top')

    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, '正覺大事紀_各案分類差異對照_含現場操作.xlsx')
    wb.save(path)
    return path, len(rows), len(events)


def main():
    out_dir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUT
    working_json = sys.argv[2] if len(sys.argv) > 2 else None
    path, n, total = build(out_dir, working_json)
    print('已輸出：%s' % path)
    print('有差異者 %d 則（全部 %d 則）' % (n, total))


if __name__ == '__main__':
    main()
