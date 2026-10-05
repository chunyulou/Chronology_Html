"""Build the public 1151001 chronology data from the supplied workbook.

Usage: python build_release_data.py input.xlsx
The source workbook is read only and is not copied into the website.
"""

from __future__ import annotations

import json
import io
import re
import sys
from collections import defaultdict
from datetime import date, datetime
from pathlib import Path

from openpyxl import load_workbook


ROOT = Path(__file__).parent
CATEGORIES = ("導師弘法", "組織發展", "共修紀事", "摧邪顯正", "公益推廣", "出版流通")
RESTRICTED = ("香港月光講堂", "出版《佛法概論—三乘菩提概說》簡體中文版")

# These publication notes combine/adjust more than one overview entry, or add a
# heading not present in the overview note. The overview is the text authority.
COMBINED_PUBLICATIONS = {
    "無相念佛": [1, 5, 153],
    "念佛三昧修學次第": [6],
    "燈影": [56],
    "第七意識與第八意識?──穿越時空「超意識」": [84, 114],
    "人間佛教": [65, 93],
    "成唯識論釋(共十輯)": [13, 177],
    "解深密經講義(共六輯)": [32, 174],
}
# The workbook's 定案 column does not yet link event 71 to these three books.
ADDITIONAL_PUBLICATION_EVENTS = {
    "禪淨圓融": [71],
    "佛子之省思  真假開悟之簡易辨正法": [16],
    "禪─悟前與悟後 (上下冊)(繁體中文版)": [71],
    "真實如來藏(繁體中文版)": [71],
}


def value(cell):
    if cell is None:
        return ""
    if isinstance(cell, (datetime, date)):
        return cell.strftime("%Y/%m/%d")
    return str(cell).strip()


def key(text):
    return re.sub(r"\s+", "", value(text))


def external_links(cell):
    """Parse one URL or newline-separated, labelled URLs from Excel."""
    entries = []
    for line in value(cell).splitlines():
        line = line.strip()
        if not line:
            continue
        match = re.search(r"https?://[^\s]+", line)
        if not match:
            continue
        url = match.group().rstrip("，,；;。")
        label = line[: match.start()].strip().rstrip("：:").strip()
        entries.append({"label": label or "購書", "url": url})
    return entries


def main(source):
    book = load_workbook(io.BytesIO(Path(source).read_bytes()), read_only=True, data_only=True)
    overview_rows = list(book.worksheets[0].values)
    if overview_rows[0][:5] != ("序號", "日期", "大事", "紀要", "定案"):
        raise ValueError("總表欄位與預期不符")
    publication_rows = list(book.worksheets[-1].values)
    if not all("介紹" in value(header) for header in publication_rows[0][4:6]):
        raise ValueError("出版流通分頁不是新版介紹欄位，請確認來源檔版本")

    events = []
    by_title = {}
    by_id = {}
    for row in overview_rows[1:]:
        if row[0] is None:
            continue
        item = {
            "id": int(row[0]),
            "date": value(row[1]),
            "event": value(row[2]),
            "note": value(row[3]),
            "categories": [],
            "publications": [],
        }
        if key(item["event"]) in by_title:
            raise ValueError(f"總表大事名稱重複：{item['event']}")
        by_title[key(item["event"])] = item
        by_id[item["id"]] = item
        events.append(item)

    tabs = []
    for sheet in book.worksheets[1:-1]:
        category = re.sub(r"\([^)]*\)$", "", sheet.title)
        if category not in CATEGORIES:
            raise ValueError(f"未知分頁：{sheet.title}")
        ids = []
        for row in list(sheet.values)[1:]:
            if not value(row[2]):
                continue
            event = by_title.get(key(row[2]))
            if event is None:
                raise ValueError(f"{sheet.title} 無法對回總表：{row[2]}")
            event["categories"].append(category)
            ids.append(event["id"])
        tabs.append({"name": category, "eventIds": ids})

    publications = []
    unmatched_notes = []
    combined_by_name = {key(name): ids for name, ids in COMBINED_PUBLICATIONS.items()}
    additional_by_name = {key(name): ids for name, ids in ADDITIONAL_PUBLICATION_EVENTS.items()}
    for row in publication_rows[1:]:
        if row[0] is None:
            continue
        number = int(row[0])
        name = value(row[1])
        name_key = key(name)
        note = value(row[4])
        matches = [event["id"] for event in events if note and key(note) in key(event["note"])]
        if name_key in combined_by_name:
            matches = combined_by_name[name_key][:]
        elif note and len(matches) != 1:
            unmatched_notes.append(number)
        note_sources = matches[:]
        matches.extend(additional_by_name.get(name_key, []))
        matches = list(dict.fromkeys(matches))
        for event_id in matches:
            if event_id not in by_id:
                raise ValueError(f"出版品 {number} 對應不存在的總表序號 {event_id}")
            by_id[event_id]["publications"].append(number)
            if "出版流通" not in by_id[event_id]["categories"]:
                by_id[event_id]["categories"].append("出版流通")
        # Do not copy editorial remarks or amended publication-note text. Join
        # only the overview's original summaries, in total-table order.
        summary = "\n\n".join(by_id[i]["note"] for i in sorted(note_sources) if by_id[i]["note"])
        publications.append({
            "id": number,
            "name": name,
            "date": value(row[2]),
            "author": value(row[3]),
            "note": summary,
            "eventIds": matches,
            "links": external_links(row[5]),
        })

    if unmatched_notes:
        raise ValueError(f"出版品紀要尚未對回總表：{unmatched_notes}")
    # The category decision is incomplete for a few entries, but an existing
    # 出版流通 tag must still navigate to its sheet even without a book row.
    for event, source_row in zip(events, overview_rows[1:]):
        if "出版流通" in value(source_row[4]) and "出版流通" not in event["categories"]:
            event["categories"].append("出版流通")
        event["categories"] = [name for name in CATEGORIES if name in event["categories"]]

    data = {"version": "1151001", "categories": list(CATEGORIES), "events": events,
            "tabs": tabs, "publications": publications}
    serialized = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    if any(term in serialized for term in RESTRICTED):
        raise ValueError("公開資料含先前要求移除的內容")
    out = ROOT / "release_1151001_data.js"
    out.write_text("window.RELEASE_1151001 = " + serialized + ";\n", encoding="utf-8")
    linked = sum(bool(item["eventIds"]) for item in publications)
    print(f"{out.name}: {len(events)} 則大事、{len(tabs)} 張分類表、"
          f"{len(publications)} 筆出版品（{linked} 筆可對回總表）")
    print("分類則數：" + "、".join(f"{tab['name']} {len(tab['eventIds'])}" for tab in tabs))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("用法：python build_release_data.py input.xlsx")
    main(sys.argv[1])
