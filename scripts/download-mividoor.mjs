import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://mividoorv5.vercel.app";
const OUT = path.resolve("public/mividoor");

const paths = [
  "/logo.png", "/w40/de.png",
  "/images/phoi-pvc.webp","/images/keo-jowat.webp","/images/phim-pvc.webp",
  "/images/burkle-machine.webp","/images/wpb-plastic.webp","/images/factory-video.webp",
  "/images/tho-mividoor-new.webp","/images/cau-tao-cua.webp",
  // product models
  "/images/mau-cua-phang.webp","/images/mau-nep-nhom-inox.webp","/images/mau-phao-chi-noi.webp",
  "/images/mau-cua-lua.webp","/images/mau-cua-vom.webp","/images/mau-hoa-van-cnc.webp",
  "/images/mau-o-kinh.webp","/images/mau-o-la-sach.webp","/images/mau-o-fix.webp",
  // luxury
  "/images/luxury-1.webp","/images/luxury-2.webp","/images/luxury-4.webp","/images/luxury-8.webp",
  "/images/luxury-9.webp","/images/luxury-10.webp","/images/luxury-11.webp","/images/luxury-12.webp",
  "/images/luxury-13.webp","/images/luxury-14.webp","/images/luxury-15.webp","/images/luxury-16.webp",
  // color swatches
  "/images/mamauu/298cb06f5192d0cc8983.webp","/images/mamauu/2d2bfdd41c299d77c438.webp",
  "/images/mamauu/ef061ae4fb197a472308.webp","/images/mamauu/m04.webp",
  "/images/mamauu/6bb4095ee8a369fd30b2.webp","/images/mamauu/e97cf39a12679339ca76.webp",
  "/images/mamauu/744cffb11e4c9f12c65d.webp","/images/mamauu/332761c5803801665829.webp",
  "/images/mamauu/eaddd33f32c2b39cead3.webp","/images/mamauu/774a59a8b855390b6044.webp",
  "/images/mamauu/2c8d9a1d7be0fabea3f1.webp","/images/mamauu/c25d2ebfcf424e1c1753.webp",
  "/images/mamauu/m13.webp","/images/mamauu/1de54807a9fa28a471eb.webp",
  "/images/mamauu/113c94df7522f47cad33.webp","/images/mamauu/edf75714b6e937b76ef8.webp",
  "/images/mamauu/m17.webp","/images/mamauu/m18.webp",
];

async function dl(p) {
  const dest = path.join(OUT, p.replace(/^\//, ""));
  await mkdir(path.dirname(dest), { recursive: true });
  const r = await fetch(BASE + p, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) return console.log("ERR", r.status, p);
  await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  return true;
}

let ok = 0;
for (let i = 0; i < paths.length; i += 4) {
  const res = await Promise.all(paths.slice(i, i + 4).map((p) => dl(p).catch((e) => console.log("ERR", p, String(e)))));
  ok += res.filter(Boolean).length;
}
console.log(`Downloaded ${ok}/${paths.length}`);
