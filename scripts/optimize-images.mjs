import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Max display width — đủ cho màn 4K, không cần lớn hơn
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 82;

let totalSaved = 0;
let totalFiles = 0;

function getAllImages(dir) {
  const results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getAllImages(full));
    } else {
      const ext = item.name.toLowerCase().slice(item.name.lastIndexOf('.'));
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        results.push(full);
      }
    }
  }
  return results;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;

  try {
    // Đọc vào buffer trước để tránh Windows file lock khi ghi đè
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer, { failOnError: false });
    const meta = await image.metadata();

    let pipeline = image;

    // Resize nếu chiều rộng quá lớn (giữ tỉ lệ)
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true, kernel: 'lanczos3' });
    }

    let buffer;
    if (ext === '.png') {
      if (meta.hasAlpha) {
        // Có alpha (transparent): giữ PNG, chỉ nén
        buffer = await pipeline
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();
      } else {
        // Không alpha: chuyển sang JPEG để tiết kiệm dung lượng đáng kể
        // Nhưng giữ extension .png → cần ghi đè bằng jpeg bytes
        // → Ta vẫn lưu dưới dạng png nén chứ không thể đổi format khi giữ tên file
        buffer = await pipeline
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();
      }
    } else {
      buffer = await pipeline
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: false })
        .toBuffer();
    }

    const newSize = buffer.length;
    const saved = originalSize - newSize;
    const rel = path.relative(PUBLIC_DIR, filePath);

    if (newSize < originalSize) {
      fs.writeFileSync(filePath, buffer);
      totalSaved += saved;
      totalFiles++;
      const pct = ((saved / originalSize) * 100).toFixed(0);
      console.log(`✓  ${rel}`);
      console.log(`   ${kb(originalSize)} → ${kb(newSize)} (tiết kiệm ${kb(saved)}, -${pct}%)`);
    } else {
      console.log(`—  ${rel} (${kb(originalSize)}, đã tối ưu)`);
    }
  } catch (e) {
    console.error(`✗  ${filePath}: ${e.message}`);
  }
}

function kb(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  return Math.round(bytes / 1024) + ' KB';
}

const files = getAllImages(PUBLIC_DIR);
console.log(`\nTìm thấy ${files.length} ảnh JPG/PNG để xử lý...\n`);

for (const f of files) {
  await optimizeImage(f);
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`Hoàn thành: tối ưu ${totalFiles} ảnh`);
console.log(`Tổng dung lượng tiết kiệm: ${kb(totalSaved)}`);
