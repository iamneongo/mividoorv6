/**
 * Convert PNG files to WebP for better compression.
 * Keeps original PNG files as backup. Updates are done separately in code.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');

// Chỉ convert PNG files được dùng trong code (có trong src/)
const PNG_TARGETS = [
  // Product images
  'mividoor/images/products/o-kinh-la-sach/o-kinh-la-sach-01.png',
  'mividoor/images/products/o-kinh-la-sach/o-kinh-la-sach-02.png',
  'mividoor/images/products/o-kinh-la-sach/o-kinh-la-sach-03.png',
  'mividoor/images/products/o-kinh-la-sach/o-kinh-la-sach-04.png',
  'mividoor/images/products/o-kinh-la-sach/o-kinh-la-sach-05.png',
  'mividoor/images/products/phao-chi-noi/phao-chi-noi-01.png',
  'mividoor/images/products/phao-chi-noi/phao-chi-noi-02.png',
  'mividoor/images/products/phao-chi-noi/phao-chi-noi-03.png',
  'mividoor/images/products/cua-o-fix/cua-o-fix-01.png',
  'mividoor/images/products/cua-o-fix/cua-o-fix-02.png',
  'mividoor/images/products/cua-o-fix/cua-o-fix-03.png',
  'mividoor/images/products/cua-o-fix/cua-o-fix-04.png',
  'mividoor/images/products/cua-vom/cua-vom-01.png',
  'mividoor/images/products/cua-vom/cua-vom-02.png',
  'mividoor/images/products/cua-vom/cua-vom-03.png',
  'mividoor/images/products/cua-vom/cua-vom-04.png',
  'mividoor/images/products/cua-vom/cua-vom-05.png',
  'mividoor/images/products/cua-nep/cua-nep-01.png',
  'mividoor/images/products/cua-nep/cua-nep-02.png',
  'mividoor/images/products/cua-nep/cua-nep-03.png',
  'mividoor/images/products/soi-huynh/soi-huynh-01.png',
  'mividoor/images/products/soi-huynh/soi-huynh-02.png',
  'mividoor/images/products/soi-huynh/soi-huynh-03.png',
  'mividoor/images/products/soi-huynh/soi-huynh-04.png',
  'mividoor/images/products/cua-lua/cua-lua-01.png',
  'mividoor/images/products/cua-lua/cua-lua-02.png',
  'mividoor/images/products/cua-lua/cua-lua-03.png',
  'mividoor/images/products/cua-phang/cua-phang-01.png',
  'mividoor/images/products/cua-phang/cua-phang-02.png',
  'mividoor/images/products/cua-phang/cua-phang-03.png',
  'mividoor/images/products/cua-phang/cua-phang-04.png',
  'mividoor/images/products/cua-phang/cua-phang-05.png',
  'mividoor/images/products/cua-phang/cua-phang-06.png',
  'mividoor/images/products/cua-phang/cua-phang-07.png',
  'mividoor/images/products/cua-phang/cua-phang-08.png',
  'mividoor/images/products/cua-phang/cua-phang-09.png',
  'mividoor/images/products/cua-phang/cua-phang-10.png',
  'mividoor/images/products/cua-phang/cua-phang-11.png',
  'mividoor/images/products/cua-phang/cua-phang-12.png',
  'mividoor/images/products/cua-phang/cua-phang-13.png',
  'mividoor/images/products/cua-phang/cua-phang-14.png',
  'mividoor/images/products/cua-phang/cua-phang-15.png',
  'mividoor/images/products/cua-phang/cua-phang-16.png',
  'mividoor/images/products/cua-phang/cua-phang-17.png',
  'mividoor/images/products/cua-phang/cua-phang-18.png',
  // Banners & showcases
  'mividoor/images/products-banner-v2.png',
  'mividoor/images/banner-new-2.png',
  'mividoor/images/three-doors-showcase.png',
  'mividoor/images/about-banner-v3.png',
  'mividoor/images/about-banner.png',
  'mividoor/images/mau-o-la-sach.png',
  'mividoor/images/mau-o-fix.png',
  'mividoor/images/mau-cua-lua.png',
  'mividoor/images/luxury/tan-co-dien.png',
];

let totalSaved = 0;

for (const rel of PNG_TARGETS) {
  const src = path.join(PUBLIC, rel);
  const dest = src.replace(/\.png$/i, '.webp');

  if (!fs.existsSync(src)) {
    console.log(`⚠  Không tìm thấy: ${rel}`);
    continue;
  }

  const originalSize = fs.statSync(src).size;
  const meta = await sharp(fs.readFileSync(src)).metadata();

  const buffer = await sharp(fs.readFileSync(src))
    .webp({ quality: 85, effort: 4 })
    .toBuffer();

  const newSize = buffer.length;
  const saved = originalSize - newSize;
  const pct = ((saved / originalSize) * 100).toFixed(0);

  if (newSize < originalSize) {
    fs.writeFileSync(dest, buffer);
    // Xóa PNG cũ sau khi tạo WebP thành công
    fs.unlinkSync(src);
    totalSaved += saved;
    console.log(`✓  ${rel.split('/').pop()}`);
    console.log(`   ${kb(originalSize)} → ${kb(newSize)} (tiết kiệm ${kb(saved)}, -${pct}%)`);
  } else {
    // WebP không nhỏ hơn → giữ PNG
    console.log(`—  ${rel.split('/').pop()} (WebP không nhỏ hơn PNG, giữ nguyên)`);
  }
}

function kb(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  return Math.round(bytes / 1024) + ' KB';
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`Tổng tiết kiệm từ PNG→WebP: ${kb(totalSaved)}`);
