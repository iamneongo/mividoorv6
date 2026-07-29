// Downloads all Tilda CDN assets referenced by arsenijsfabrica.com into public/.
// Fetches the rendered HTML + linked CSS, regexes every static.tildacdn.net asset URL,
// dedupes, and downloads in batches of 4. SVGs -> public/icons, raster -> public/images,
// video -> public/videos.
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PAGE = "https://www.arsenijsfabrica.com/";
const OUT = path.resolve("public");

async function text(url) {
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}

function extractUrls(str) {
  const re = /https:\/\/static\.tildacdn\.[a-z]+\/[^\s"'\)\\]+\.(?:png|jpe?g|webp|svg|gif|mp4|webm|ico|avif)/gi;
  return str.match(re) || [];
}

// Tilda often serves "-resize", "empty.gif" placeholders; strip resize suffix to get original.
function normalize(u) {
  return u.replace(/\/-\/resize\/\d+x\/?/, "/").replace(/\/-\/format\/webp\//, "/");
}

function localName(u) {
  // .../tildXXXX-...-hash/filename.ext  -> hash8_filename.ext
  const parts = u.split("/");
  const file = parts.pop();
  const hashDir = parts.pop() || "";
  const hash = hashDir.replace(/^tild/, "").slice(0, 8);
  const safe = decodeURIComponent(file).replace(/[^a-zA-Z0-9._-]/g, "_");
  return `${hash}_${safe}`;
}

function subdir(u) {
  if (/\.svg(\?|$)/i.test(u)) return "icons";
  if (/\.(mp4|webm)(\?|$)/i.test(u)) return "videos";
  return "images";
}

async function download(u) {
  const dir = path.join(OUT, subdir(u));
  const dest = path.join(dir, localName(u));
  if (existsSync(dest)) return { u, dest, skipped: true };
  const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) return { u, error: `${r.status}` };
  const buf = Buffer.from(await r.arrayBuffer());
  await mkdir(dir, { recursive: true });
  await writeFile(dest, buf);
  return { u, dest, size: buf.length };
}

async function main() {
  const html = await text(PAGE);
  // linked CSS files may hold background-image urls
  const cssLinks = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => m[1]);
  let all = extractUrls(html);
  for (const href of cssLinks.slice(0, 25)) {
    const abs = href.startsWith("http") ? href : new URL(href, PAGE).href;
    try { all = all.concat(extractUrls(await text(abs))); } catch {}
  }
  const urls = [...new Set(all.map(normalize))].filter((u) => !/empty\.gif|1x1|spacer/.test(u));
  console.log(`Found ${urls.length} unique assets`);

  const results = [];
  for (let i = 0; i < urls.length; i += 4) {
    const batch = urls.slice(i, i + 4);
    results.push(...(await Promise.all(batch.map((u) => download(u).catch((e) => ({ u, error: String(e) }))))));
  }
  const ok = results.filter((r) => r.dest && !r.skipped).length;
  const skip = results.filter((r) => r.skipped).length;
  const err = results.filter((r) => r.error);
  console.log(`Downloaded ${ok}, skipped ${skip}, errors ${err.length}`);
  err.forEach((e) => console.log("  ERR", e.error, e.u));
}

main().catch((e) => { console.error(e); process.exit(1); });
