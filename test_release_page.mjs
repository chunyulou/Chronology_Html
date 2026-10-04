// Browser smoke test for the static 1151001 page; no npm dependencies.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const chrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profile = await fs.mkdtemp(path.join(os.tmpdir(), 'chronology-test-'));
const browser = spawn(chrome, [
  '--headless=new', '--disable-gpu', '--disable-software-rasterizer',
  '--no-sandbox', '--disable-dev-shm-usage', '--no-first-run',
  `--user-data-dir=${profile}`, '--remote-debugging-port=0', 'about:blank',
], { stdio: 'ignore', windowsHide: true });

let socket;
let sequence = 0;
const pending = new Map();
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForPort() {
  for (let i = 0; i < 100; i++) {
    try { return Number((await fs.readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0]); }
    catch { await pause(100); }
  }
  throw new Error('Chrome debugging port did not start');
}
function call(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const reply = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (reply.exceptionDetails) throw new Error(reply.exceptionDetails.text);
  return reply.result.result.value;
}
async function until(expression, expected) {
  for (let i = 0; i < 100; i++) {
    if (await evaluate(expression) === expected) return;
    await pause(100);
  }
  throw new Error(`Timed out: ${expression}`);
}

try {
  const port = await waitForPort();
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const page = targets.find(target => target.type === 'page');
  socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  socket.onmessage = event => {
    const result = JSON.parse(event.data);
    if (!result.id || !pending.has(result.id)) return;
    const { resolve, reject } = pending.get(result.id);
    pending.delete(result.id);
    result.error ? reject(new Error(result.error.message)) : resolve(result);
  };
  await call('Page.navigate', { url: pathToFileURL(path.join(process.cwd(), 'event-table.html')).href });
  await until('document.querySelectorAll("#tableBody tr").length', 193);
  assert.equal(await evaluate('document.querySelectorAll(".history a").length'), 2);
  assert.equal(await evaluate('document.querySelector("#proposalBar, #proposalMeta") === null'), true);

  await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("出版流通")).click()');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 132);
  assert.equal(await evaluate('[...document.querySelectorAll("#tableHead th")].map(x => x.textContent).join("|")'), '序號|出版品名稱|第一本出版日期|作者');
  await evaluate('document.querySelector("#tableBody tr:first-child .row-actions button:last-child").click()');
  assert.equal(await evaluate('document.querySelectorAll("#detailDialog .purchase-list a").length'), 4);
  assert.equal(await evaluate('document.querySelector("#detailDialog .purchase-list a").textContent'), '中文版(無相念佛)');
  await evaluate('document.querySelector("#closeDialog").click()');
  await evaluate('document.querySelector("#tableBody tr:first-child .row-actions button:first-child").click()');
  assert.equal(await evaluate('document.querySelector("#dialogContext").textContent.includes("1、5、153")'), true);
  await evaluate('document.querySelector("#closeDialog").click()');
  assert.equal(await evaluate('document.querySelector("#tableBody tr:nth-child(2) .row-actions a[target=_blank]") !== null'), true);

  await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("總表")).click()');
  await evaluate('[...document.querySelectorAll("#tableBody tr:first-child .category-link")].find(x => x.textContent === "出版流通").click()');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 1);
  assert.equal(await evaluate('document.querySelector("#tableBody tr .serial").textContent'), '1');
  await evaluate('document.querySelector("#clearFocus").click()');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 132);
  console.log('Browser smoke test passed: tabs, cross-links, notes, purchase links.');
} finally {
  socket?.close();
  browser.kill();
}
