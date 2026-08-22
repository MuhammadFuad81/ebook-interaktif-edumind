#!/usr/bin/env node
/* Membuat salinan uji lokal yang memuat engine, konten, dan aset dari staging. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '.qa-pilot');
const args = process.argv.slice(2);
const assetFlag = args.indexOf('--asset-root');
if (assetFlag < 0 || !args[assetFlag + 1]) throw new Error('Gunakan --asset-root <folder ebook-edumind>');
const assetRoot = path.resolve(args[assetFlag + 1]);
const pilots = [1, 39, 53];
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'asset-manifest.json'), 'utf8'));

fs.mkdirSync(OUT, { recursive: true });

for (const number of pilots) {
  const htmlPrefix = String(number).padStart(3, '0') + ' - ';
  const contentPrefix = String(number).padStart(2, '0') + ' - ';
  const htmlName = fs.readdirSync(ROOT).find(name => name.startsWith(htmlPrefix) && name.endsWith(' - untuk Growva.html'));
  const contentName = fs.readdirSync(ROOT).find(name => name.startsWith(contentPrefix) && name.endsWith(' - content.js'));
  if (!htmlName || !contentName) throw new Error(`File pilot ${number} tidak lengkap`);

  let html = fs.readFileSync(path.join(ROOT, htmlName), 'utf8');
  let content = fs.readFileSync(path.join(ROOT, contentName), 'utf8');
  html = html
    .replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/MuhammadFuad81\/ebook-interaktif-edumind@main\/engine-ANIMASI\.css(?:\?[^"']*)?/g, '/engine-ANIMASI.css')
    .replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/MuhammadFuad81\/ebook-interaktif-edumind@main\/engine\.css(?:\?[^"']*)?/g, '/engine.css')
    .replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/MuhammadFuad81\/ebook-interaktif-edumind@main\/[^"']+content\.js(?:\?[^"']*)?/g, `/.qa-pilot/${String(number).padStart(3, '0')}-content.js`)
    .replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/MuhammadFuad81\/ebook-interaktif-edumind@main\/engine\.js(?:\?[^"']*)?/g, '/engine.js');
  content = content.replaceAll('https://media.edumind.id/ebook-edumind/', '/.qa-pilot/assets/');

  fs.writeFileSync(path.join(OUT, `${String(number).padStart(3, '0')}.html`), html);
  fs.writeFileSync(path.join(OUT, `${String(number).padStart(3, '0')}-content.js`), content);

  const bookAssets = manifest.ebooks.find(book => book.number === number);
  for (const visual of bookAssets?.visuals || []) {
    const relative = visual.path.split('/').slice(1).join('/');
    const source = path.join(assetRoot, relative);
    const destination = path.join(OUT, 'assets', relative);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
  }
}
console.log(`Harness siap: ${OUT}`);
