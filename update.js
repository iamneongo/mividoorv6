const fs = require('fs');
const path = require('path');

// 1. Update content.ts
let contentTsPath = 'c:/CongViec/Mividoor/ai-website-cloner-template/src/lib/content.ts';
let contentTs = fs.readFileSync(contentTsPath, 'utf8');
contentTs = contentTs.replace(/phong cách tân cổ điển Châu Âu/g, 'phong cách tân cổ điển');
fs.writeFileSync(contentTsPath, contentTs, 'utf8');

// 2. Update page.tsx files
const dir = 'c:/CongViec/Mividoor/ai-website-cloner-template/src/app';
const files = [
  'mau-2-canh/page.tsx',
  'mau-di-epoxy/page.tsx',
  'mau-di-nep/page.tsx',
  'mau-lua/page.tsx',
  'mau-o-fix/page.tsx',
  'mau-o-kinh-la-sach/page.tsx',
  'mau-phang/page.tsx',
  'mau-phao-chi-noi/page.tsx',
  'mau-soi-huynh/page.tsx',
  'mau-vom/page.tsx',
  'san-pham/page.tsx'
];

const nameMap = {
  'mau-2-canh': 'Cửa 2 Cánh',
  'mau-di-epoxy': 'Cửa Epoxy',
  'mau-di-nep': 'Cửa Nẹp',
  'mau-lua': 'Cửa Lùa',
  'mau-o-fix': 'Cửa Ô Fix',
  'mau-o-kinh-la-sach': 'Cửa Ô Kính Lá Sách',
  'mau-phang': 'Cửa Phẳng',
  'mau-phao-chi-noi': 'Cửa Phào Chỉ Nổi',
  'mau-soi-huynh': 'Cửa Soi Huỳnh',
  'mau-vom': 'Cửa Vòm',
  'san-pham': 'Sản Phẩm'
};

for (const file of files) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  
  let content = fs.readFileSync(p, 'utf8');
  
  // Replace heading
  const folder = file.split('/')[0];
  const newName = nameMap[folder];
  
  content = content.replace(/<h1 className="text-4xl font-medium tracking-tighter text-ink md:text-\[56px\] leading-\[1\]">\s*Mẫu[^\n]+<br \/>/i, `<h1 className="text-4xl font-medium tracking-tighter text-ink md:text-[56px] leading-[1]">\n                ${newName} <br />`);
  content = content.replace(/<h1 className="text-4xl font-medium tracking-tighter text-ink md:text-\[56px\] leading-\[1\]">\s*Sản phẩm\s*<br \/>/i, `<h1 className="text-4xl font-medium tracking-tighter text-ink md:text-[56px] leading-[1]">\n                ${newName} <br />`);

  // Remove the product.code block
  content = content.replace(/\s*<p className="text-\[12px\] font-bold uppercase tracking-\[0\.12em\] text-\[#818181\]">\s*\{product\.code\}\s*<\/p>/g, '');
  
  // Remove the mt-1.5 from product.name
  content = content.replace(/<p className="mt-1\.5 text-\[20px\] font-medium leading-\[1\.2\] tracking-tight text-ink">/g, '<p className="text-[20px] font-medium leading-[1.2] tracking-tight text-ink">');

  fs.writeFileSync(p, content, 'utf8');
}
console.log('Done');
