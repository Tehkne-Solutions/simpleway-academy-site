
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const dist = path.join(root, 'dist');
const site = path.join(root, 'site');
const pub = path.join(root, 'public');
function rm(p){ if(fs.existsSync(p)) fs.rmSync(p,{recursive:true,force:true}); }
function cp(src,dst){ if(!fs.existsSync(src)) return; const st=fs.statSync(src); if(st.isDirectory()){ fs.mkdirSync(dst,{recursive:true}); for(const f of fs.readdirSync(src)) cp(path.join(src,f), path.join(dst,f)); } else { fs.mkdirSync(path.dirname(dst),{recursive:true}); fs.copyFileSync(src,dst); } }
rm(dist); fs.mkdirSync(dist,{recursive:true}); cp(site, dist); cp(pub, dist);
const pages=[]; function walk(dir){ for(const f of fs.readdirSync(dir)){ const p=path.join(dir,f); const s=fs.statSync(p); if(s.isDirectory()) walk(p); else if(f.endsWith('.html')){ let url=p.replace(dist,'').replace(/\\/g,'/'); if(url.endsWith('/index.html')) url=url.slice(0,-10); if(url==='/index.html') url='/'; if(url==='/404.html') continue; pages.push('https://simplewayacademy.com.br'+url); } } } walk(dist);
fs.writeFileSync(path.join(dist,'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(u=>`  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>`);
console.log('SWA_STATIC_LIGHT_V4 build complete. Pages:', pages.length);
