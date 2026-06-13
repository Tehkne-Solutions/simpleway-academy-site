import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const site = path.join(root, 'site');
const pub = path.join(root, 'public');

function rm(target) {
  if (fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true });
}

function cp(src, dst) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true });
    for (const file of fs.readdirSync(src)) cp(path.join(src, file), path.join(dst, file));
    return;
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}

rm(dist);
fs.mkdirSync(dist, { recursive: true });
cp(site, dist);
cp(pub, dist);

const pages = [];
function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const current = path.join(dir, file);
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      walk(current);
    } else if (file.endsWith('.html')) {
      let url = current.replace(dist, '').replace(/\\/g, '/');
      if (url.endsWith('/index.html')) url = url.slice(0, -10) + '/';
      if (url === '/index.html') url = '/';
      if (url === '/404.html') continue;
      pages.push('https://simplewayacademy.com.br' + url);
    }
  }
}
walk(dist);

fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`);

console.log('SWA_STATIC_LIGHT_V9_9_7_SIMPLEWAY_ENGLISH_CONVERSION build complete. Pages:', pages.length);
