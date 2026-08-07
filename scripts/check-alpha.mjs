import sharp from 'sharp';
import fs from 'fs';

const files = [
  'public/mividoor/images/products/cua-phang/cua-phang-01.png',
  'public/mividoor/images/banner-new-2.png',
  'public/mividoor/images/products-banner-v2.png',
  'public/mividoor/images/three-doors-showcase.png',
  'public/mividoor/images/logo.png',
  'public/mividoor/images/about-banner.png',
  'public/mividoor/images/mau-o-la-sach.png',
];

for (const f of files) {
  const m = await sharp(fs.readFileSync(f)).metadata();
  console.log(f.split('/').pop(), '→ alpha:', m.hasAlpha, 'size:', m.width + 'x' + m.height);
}
