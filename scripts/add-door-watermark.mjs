/**
 * Adds a semi-transparent white Mividoor watermark to every published door image.
 *
 * The first run copies each original into private-assets/watermark-originals/.
 * Watermarked files are published under public/mividoor/images/watermarked-detail/;
 * the site only uses those files. Future runs always render from the backup to
 * avoid stacking watermark layers.
 *
 * Usage:
 *   npm run watermark:products:dry  # report what would change
 *   npm run watermark:products      # back up + watermark the published files
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicImages = path.join(root, "public", "mividoor", "images");
const originalsRoot = path.join(root, "private-assets", "watermark-originals");
const watermarkedRoot = path.join(publicImages, "watermarked-detail");
const logoPath = path.join(root, "assets", "watermark", "mividoor-logo.png");
const writeChanges = process.argv.includes("--write");
const forceWrite = process.argv.includes("--force");
const onlyIndex = process.argv.indexOf("--only");
const onlyPath = onlyIndex >= 0 ? process.argv[onlyIndex + 1]?.replaceAll("/", path.sep) : undefined;

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const targetDirectories = [
  path.join(publicImages, "products"),
  path.join(publicImages, "luxury"),
];
const categoryDoorImages = [
  "mau-cua-lua.webp",
  "mau-cua-phang.webp",
  "mau-cua-vom.webp",
  "mau-hoa-van-cnc.webp",
  "mau-nep-nhom-inox.webp",
  "mau-o-fix.webp",
  "mau-o-kinh.webp",
  "mau-o-la-sach.webp",
  "mau-phao-chi-noi.webp",
].map((file) => path.join(publicImages, file));

async function filesIn(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return filesIn(entryPath);
    return imageExtensions.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
  }));
  return files.flat();
}

function relativeImagePath(filePath) {
  return path.relative(path.join(root, "public"), filePath);
}

async function ensureWatermark() {
  const { data, info } = await sharp(logoPath)
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Recolour the brand mark white while preserving its original white details
  // as transparent cut-outs. This keeps the M icon readable inside the circle.
  for (let offset = 0; offset < data.length; offset += 4) {
    const isOriginalWhiteDetail = data[offset] > 235 && data[offset + 1] > 235 && data[offset + 2] > 235;
    data[offset] = 255;
    data[offset + 1] = 255;
    data[offset + 2] = 255;
    data[offset + 3] = isOriginalWhiteDetail ? 0 : Math.round(data[offset + 3] * 0.32);
  }
  return { data, info };
}

function encoder(image, extension) {
  if (extension === ".webp") return image.webp({ quality: 88, effort: 5 });
  if (extension === ".png") return image.png({ compressionLevel: 9, palette: false });
  return image.jpeg({ quality: 88, mozjpeg: true });
}

async function watermarkImage(targetPath, watermark) {
  const relativePath = relativeImagePath(targetPath);
  const originalPath = path.join(originalsRoot, relativePath);
  const publishedPath = path.join(watermarkedRoot, path.relative(publicImages, targetPath));
  const backupExists = await fs.access(originalPath).then(() => true).catch(() => false);
  const sourcePath = backupExists ? originalPath : targetPath;
  const watermarkExists = await fs.access(publishedPath).then(() => true).catch(() => false);
  const metadata = await sharp(sourcePath).rotate().metadata();
  const width = metadata.width;
  const height = metadata.height;
  if (!width || !height) throw new Error(`Could not determine dimensions: ${targetPath}`);

  const watermarkWidth = Math.max(150, Math.min(Math.round(width * 0.34), 460));
  const watermarkHeight = Math.round(watermark.info.height * (watermarkWidth / watermark.info.width));
  const left = Math.round((width - watermarkWidth) / 2);
  const top = Math.round((height * 0.55) - (watermarkHeight / 2));
  const overlay = await sharp(watermark.data, {
    raw: { width: watermark.info.width, height: watermark.info.height, channels: 4 },
  }).resize({ width: watermarkWidth }).png().toBuffer();

  if (!writeChanges) {
    return { relativePath, status: watermarkExists ? "already watermarked" : backupExists ? "would watermark" : "would back up + watermark" };
  }

  if (!backupExists) {
    await fs.mkdir(path.dirname(originalPath), { recursive: true });
    await fs.copyFile(targetPath, originalPath);
  }
  if (watermarkExists && !forceWrite) return { relativePath, status: "already watermarked" };

  const output = sharp(sourcePath).rotate().composite([{ input: overlay, left, top }]);
  await fs.mkdir(path.dirname(publishedPath), { recursive: true });
  await encoder(output, path.extname(targetPath).toLowerCase()).toFile(publishedPath);
  return { relativePath, status: forceWrite && watermarkExists ? "watermark refreshed" : backupExists ? "watermarked" : "backed up + watermarked" };
}

async function main() {
  await fs.access(logoPath).catch(() => {
    throw new Error(`Watermark logo not found: ${logoPath}`);
  });
  const productFiles = (await Promise.all(targetDirectories.map(filesIn))).flat();
  const allTargets = [...new Set([...productFiles, ...categoryDoorImages])];
  const targets = onlyPath
    ? allTargets.filter((filePath) => relativeImagePath(filePath) === onlyPath)
    : allTargets;
  if (onlyPath && targets.length === 0) throw new Error(`No configured door image matches: ${onlyPath}`);
  const watermark = await ensureWatermark();
  const results = [];
  for (const targetPath of targets) results.push(await watermarkImage(targetPath, watermark));

  console.log(`${writeChanges ? "Watermarked" : "Dry run:"} ${results.length} door images.`);
  for (const result of results) console.log(`- ${result.status}: ${result.relativePath}`);
  if (!writeChanges) console.log("Run npm run watermark:products to apply the changes.");
}

main().catch((error) => {
  console.error(`Watermark failed: ${error.message}`);
  process.exitCode = 1;
});
