/**
 * Fix ảnh bị xoay sai: khôi phục từ git HEAD, áp dụng .rotate() để bake EXIF rotation vào pixel,
 * rồi nén lại (resize + quality 82).
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EVENTS_DIR = 'public/mividoor/images/events';
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 82;

function walk(dir) {
  const results = [];
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return results;
  for (const item of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = `${dir}/${item.name}`;
    if (item.isDirectory()) results.push(...walk(rel));
    else if (/\.(jpe?g)$/i.test(item.name)) results.push(rel);
  }
  return results;
}

// Lấy nội dung file từ git HEAD
function gitShow(relPath) {
  try {
    return execSync(`git show HEAD:"${relPath.replace(/\\/g, '/')}"`, {
      cwd: ROOT,
      maxBuffer: 50 * 1024 * 1024 // 50MB buffer
    });
  } catch {
    return null;
  }
}

const files = walk(EVENTS_DIR);
let fixed = 0;

for (const relPath of files) {
  const origBuf = gitShow(relPath);
  if (!origBuf) { console.log(`⚠  git không tìm thấy: ${relPath}`); continue; }

  const meta = await sharp(origBuf).metadata();
  if (!meta.orientation || meta.orientation === 1) continue;

  // File có EXIF rotation → khôi phục + fix
  const destPath = path.join(ROOT, relPath);
  console.log(`\n🔄 ${relPath}`);
  console.log(`   EXIF orientation=${meta.orientation}, gốc: ${meta.width}x${meta.height}`);

  let pipeline = sharp(origBuf).rotate(); // tự động áp dụng EXIF orientation

  // Resize nếu cần
  const rotatedMeta = await sharp(origBuf).rotate().metadata();
  if (rotatedMeta.width && rotatedMeta.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true, kernel: 'lanczos3' });
  }

  const buffer = await pipeline
    .jpeg({ quality: JPEG_QUALITY, progressive: true })
    .toBuffer();

  const origSize = fs.statSync(destPath).size;
  fs.writeFileSync(destPath, buffer);

  const newMeta = await sharp(buffer).metadata();
  console.log(`   ✓ Đã fix: ${newMeta.width}x${newMeta.height}, ${Math.round(origSize/1024)}KB → ${Math.round(buffer.length/1024)}KB`);
  fixed++;
}

console.log(`\n${'═'.repeat(50)}`);
console.log(`Đã fix ${fixed} ảnh bị xoay sai.`);
