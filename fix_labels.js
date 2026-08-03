/* eslint-disable */
const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf-8');
  let orig = content;
  content = content.replace(/className="([^"]*)accent-serif\s+text-\[26px\]\s+([^"]*)"/g, (m, p1, p2) => `className="${p1}text-[13px] font-semibold uppercase tracking-[0.16em] ${p2}"`);
  if (orig !== content) {
    fs.writeFileSync(p, content);
    console.log('Updated ' + f);
  }
});
