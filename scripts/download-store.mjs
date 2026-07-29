import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
const P = "https://optim.tildacdn.one/{h}/-/cover/690x690/center/center/-/format/webp/{f}";
const toks = `stor3538-3264-4632-b066-636162653334|8986f3c40d6ca4c5c095a595c3540493.png.webp
stor3766-6133-4961-a266-666430626538|72785855.png.webp
stor6462-3732-4466-a166-613235353637|49477804.png.webp
stor3830-6533-4464-b630-393761653065|5aed520b4915029366e693140d22495d.png.webp
stor6139-3066-4861-a462-373963663435|fee7a51d77ba3cb0184567cd83974cb4.png.webp
stor3034-3530-4536-b933-626364613737|696065710e7830e95009e19933373233.png.webp
stor3861-3237-4334-b664-643035313438|be6b79dff6e4ebfe4be9223fca5785ab.png.webp
stor6434-3137-4639-a433-306232333066|752114fd277a54a225790792ad8790a5.png.webp
stor3333-6565-4434-b530-313034376230|1a3a6c4e4767e0cb6cd28cfaf06c5549.png.webp
stor6536-3264-4336-a262-353063636664|4eca737a9b3d7210596a2c1fbf672003.png.webp`.trim().split("\n");
const dir = path.resolve("public/products");
await mkdir(dir, { recursive: true });
for (const t of toks) {
  const [h, f] = t.split("|");
  const u = P.replace("{h}", h).replace("{f}", f);
  const dest = path.join(dir, f.replace(".png.webp", ".webp"));
  if (existsSync(dest)) continue;
  const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) { console.log("ERR", r.status, u); continue; }
  await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  console.log("ok", path.basename(dest));
}
