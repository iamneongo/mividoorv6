import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EVENTS_DIR = path.join(__dirname, '..', 'public', 'mividoor', 'images', 'events');

function walk(dir) {
  const results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) results.push(...walk(full));
    else if (/\.(jpe?g)$/i.test(item.name)) results.push(full);
  }
  return results;
}

const files = walk(EVENTS_DIR);
console.log(`Checking ${files.length} event images...\n`);

for (const f of files) {
  const buf = fs.readFileSync(f);
  const meta = await sharp(buf).metadata();
  const rel = path.relative(path.join(__dirname, '..', 'public'), f);
  // orientation > 1 means EXIF rotation needed
  if (meta.orientation && meta.orientation > 1) {
    console.log(`⚠  EXIF rotation ${meta.orientation}: ${rel} (${meta.width}x${meta.height})`);
  }
}
console.log('\nDone. Files without ⚠ are fine.');
