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
  if (reply.result.exceptionDetails) throw new Error(reply.result.exceptionDetails.text);
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
  assert.equal(await evaluate('document.querySelector(".site-strip") === null'), true);
  assert.equal(await evaluate('document.querySelector("header .history") !== null'), true);
  assert.equal(await evaluate('document.querySelector("#proposalBar, #proposalMeta") === null'), true);
  assert.equal(await evaluate('[...document.querySelectorAll("#tableBody tr")].filter(r => !window.RELEASE_1151001.events.find(e => e.id === Number(r.dataset.eventId)).note).every(r => ![...r.querySelectorAll("button")].some(b => b.textContent === "紀要"))'), true);
  assert.equal(await evaluate(`document.querySelector("#tableBody tr[data-event-id='1'] .category-link").classList.contains("mini-btn")`), false);
  await evaluate('document.querySelector("#search").value="無相念佛"; document.querySelector("#search").dispatchEvent(new Event("input"))');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-event-id=\'1\'] .event-text .search-hit")?.textContent'), '無相念佛');
  assert.equal(await evaluate('(()=>{const x=document.querySelector(".search-hit"),s=getComputedStyle(x);return s.backgroundColor==="rgb(255, 243, 106)" && s.textDecorationLine.includes("underline")})()'), true);
  await evaluate('document.querySelector("#search").value="彰化"; document.querySelector("#search").dispatchEvent(new Event("input"))');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-event-id=\'1\'] .search-snippet .search-hit")?.textContent'), '彰化');
  await evaluate('document.querySelector("#tableBody tr[data-event-id=\'1\'] .row-actions button").click()');
  assert.equal(await evaluate('document.querySelector("#dialogBody .modal-note .search-hit")?.textContent'), '彰化');
  await evaluate('document.querySelector("#closeDialog").click(); document.querySelector("#search").value=""; document.querySelector("#search").dispatchEvent(new Event("input"))');
  assert.equal(await evaluate('document.querySelector("#tableBody .search-hit") === null'), true);
  await evaluate('document.querySelector("#tableHead .sort-date").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=ascending]") !== null'), true);
  await evaluate('document.querySelector("#tableHead .sort-date").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=descending]") !== null'), true);
  assert.equal(await evaluate('document.querySelector("#tableBody tr:first-child .serial").textContent !== "1"'), true);
  assert.equal(await evaluate('(()=>{const r=document.querySelector("#tableBody tr:first-child"),e=window.RELEASE_1151001.events.find(x=>x.id===Number(r.dataset.eventId));return r.querySelector(".serial").textContent==e.id && r.querySelector(".event-text").textContent===e.event && r.querySelector(".date").textContent===e.date})()'), true);
  await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("導師弘法")).click()');
  assert.equal(await evaluate(`document.querySelector("#tableBody tr[data-event-id='2'] .row-actions") === null`), true);
  await evaluate('document.querySelector("#tableHead .sort-date").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=ascending]") !== null'), true);
  assert.equal(await evaluate('(()=>{const r=document.querySelector("#tableBody tr:first-child");return r.dataset.eventId===r.querySelector(".serial").textContent})()'), true);

  await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("出版流通")).click()');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 132);
  assert.equal(await evaluate('[...document.querySelectorAll("#tableHead th")].map(x => x.textContent.replace(/[↕▲▼]/g, "")).join("|")'), '序號|出版品名稱|第一本出版日期|作者');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody .buy-btn, #tableBody .purchase-list").length'), 0);
  assert.equal(await evaluate('[...document.querySelectorAll("#tableBody tr")].every(r => r.querySelectorAll(".row-actions .intro-btn").length <= 1)'), true);
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'1\'] .intro-btn").textContent'), '介紹 / About');
  await evaluate('document.querySelector("#search").value="彰化"; document.querySelector("#search").dispatchEvent(new Event("input"))');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'1\'] .search-snippet .search-hit")?.textContent'), '彰化');
  await evaluate('document.querySelector("#search").value=""; document.querySelector("#search").dispatchEvent(new Event("input"))');
  await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'1\'] .intro-btn").click()');
  assert.equal(await evaluate('document.querySelector("#dialogTitle").textContent'), '出版品介紹 / About This Publication');
  assert.equal(await evaluate('document.querySelector("#dialogBody .modal-note") !== null'), true);
  assert.equal(await evaluate('document.querySelector("#dialogBody .more-info-heading").textContent'), '更多資訊');
  assert.equal(await evaluate('document.querySelectorAll("#detailDialog .more-info-list a").length'), 4);
  assert.equal(await evaluate('document.querySelector("#detailDialog .more-info-list a").textContent'), '中文版(無相念佛) ↗');
  assert.equal(await evaluate('[...document.querySelectorAll("#detailDialog .more-info-list a")].every(a => a.target === "_blank" && a.rel.includes("noopener"))'), true);
  assert.equal(await evaluate('document.querySelector("#dialogContext").textContent.includes("1、5、153")'), true);
  await evaluate('document.querySelector("#closeDialog").click()');
  await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'2\'] .intro-btn").click()');
  assert.equal(await evaluate('document.querySelector("#dialogTitle").textContent'), '出版品介紹');
  assert.equal(await evaluate('document.querySelector("#dialogBody .modal-note") !== null'), true);
  assert.equal(await evaluate('document.querySelector("#dialogBody .more-info a").textContent'), '更多資訊 ↗');
  assert.equal(await evaluate('document.querySelector("#dialogBody .more-info a").target'), '_blank');
  await evaluate('document.querySelector("#closeDialog").click()');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'25\'] .row-actions a.intro-btn[target=_blank]").textContent'), '介紹');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'25\'] .row-actions button") === null'), true);
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'100\'] .intro-btn").textContent'), '介紹 / About');
  await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'48\'] .intro-btn").click()');
  assert.equal(await evaluate('document.querySelector("#dialogTitle").textContent'), '出版品介紹 / About This Publication');
  assert.equal(await evaluate('document.querySelector("#dialogBody .modal-note") === null'), true);
  assert.equal(await evaluate('document.querySelectorAll("#dialogBody .more-info-list li").length'), 3);
  await evaluate('document.querySelector("#closeDialog").click()');
  await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'37\'] .intro-btn").click()');
  assert.equal(await evaluate('document.querySelector("#dialogBody .modal-note") !== null && document.querySelector("#dialogBody .more-info") === null'), true);
  await evaluate('document.querySelector("#closeDialog").click()');
  assert.equal(await evaluate('document.querySelector("#tableBody tr[data-publication-id=\'111\'] .row-actions") === null'), true);
  await evaluate('document.querySelector("#tableHead .sort-date").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=ascending]") !== null'), true);
  await evaluate('document.querySelector("#tableHead .sort-date").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=descending]") !== null'), true);

  await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("總表")).click()');
  await evaluate(`[...document.querySelectorAll("#tableBody tr[data-event-id='1'] .category-link")].find(x => x.textContent === "出版流通").click()`);
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 1);
  assert.equal(await evaluate('document.querySelector("#tableBody tr .serial").textContent'), '1');
  await evaluate('document.querySelector("#clearFocus").click()');
  assert.equal(await evaluate('document.querySelectorAll("#tableBody tr").length'), 132);
  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#tableBody tr")).display'), 'grid');
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#mobileSort")).display !== "none"'), true);
  assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true);
  assert.equal(await evaluate('[...document.querySelectorAll("header .history a")].every(a => a.getBoundingClientRect().right <= window.innerWidth)'), true);
  assert.equal(await evaluate('document.querySelector("#mobileSort").getBoundingClientRect().right <= window.innerWidth'), true);
  await evaluate('document.querySelector("#mobileSort").click()');
  assert.equal(await evaluate('document.querySelector("#tableHead th[aria-sort=ascending]") !== null'), true);
  if (process.env.CHRONOLOGY_SCREENSHOT_DIR) {
    const capture = async name => {
      const reply = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      await fs.writeFile(path.join(process.env.CHRONOLOGY_SCREENSHOT_DIR, name), Buffer.from(reply.result.data, 'base64'));
    };
    await capture('mobile-publications.png');
    await evaluate('[...document.querySelectorAll(".tab")].find(x => x.textContent.includes("總表")).click()');
    await pause(250);
    await evaluate('window.scrollTo(0, 0)');
    await pause(100);
    await capture('mobile-overview.png');
  }
  console.log('Browser smoke test passed: mobile layout, date sorting, cross-links, publication introductions, search highlighting.');
} finally {
  socket?.close();
  browser.kill();
}
