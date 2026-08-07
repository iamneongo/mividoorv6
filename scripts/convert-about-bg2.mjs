import sharp from 'sharp';
import fs from 'fs';

const src = 'C:\\Users\\Asus\\Downloads\\ChatGPT Image Aug 7, 2026, 04_01_05 PM.png';
const dest = 'public/mividoor/images/about-bg-showroom.webp';

const buf = fs.readFileSync(src);
const meta = await sharp(buf).metadata();
console.log(`Original: ${meta.width}x${meta.height}, format: ${meta.format}`);

await sharp(buf)
  .rotate()
  .resize(2400, null, { withoutEnlargement: true, kernel: 'lanczos3' })
  .webp({ quality: 85 })
  .toFile(dest);

const stat = fs.statSync(dest);
console.log(`Saved: ${dest} (${Math.round(stat.size / 1024)}KB)`);
