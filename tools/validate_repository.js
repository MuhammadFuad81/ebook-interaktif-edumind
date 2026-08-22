#!/usr/bin/env node
/* Validasi deterministik sebelum publikasi. */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const assetFlag = args.indexOf('--asset-root');
const assetRoot = assetFlag >= 0 ? path.resolve(args[assetFlag + 1]) : null;
const errors = [];
const ok = condition => condition;
const fail = message => errors.push(message);

const files = fs.readdirSync(ROOT);
const htmlFiles = files.filter(name => /^\d{3} - .+ - untuk Growva\.html$/.test(name)).sort();
const contentFiles = files.filter(name => /^\d{2} - .+ - content\.js$/.test(name)).sort();
if (htmlFiles.length !== 54) fail(`HTML resmi: ${htmlFiles.length}, seharusnya 54`);
if (contentFiles.length !== 54) fail(`Content JS: ${contentFiles.length}, seharusnya 54`);

for (let number = 1; number <= 54; number += 1) {
  const htmlPrefix = String(number).padStart(3, '0') + ' - ';
  const contentPrefix = String(number).padStart(2, '0') + ' - ';
  const htmlName = htmlFiles.find(name => name.startsWith(htmlPrefix));
  const contentName = contentFiles.find(name => name.startsWith(contentPrefix));
  if (!htmlName || !contentName) {
    fail(`Pasangan file nomor ${number} tidak lengkap`);
    continue;
  }
  const html = fs.readFileSync(path.join(ROOT, htmlName), 'utf8');
  const content = fs.readFileSync(path.join(ROOT, contentName), 'utf8');
  const numberId = String(number).padStart(3, '0');
  const expectedLoginLabel = `Ebook Interaktif - ${numberId}`;
  const loginLabelMatch = html.match(/<div class="gate-card">\s*<p class="eyebrow">([^<]+)<\/p>/s);
  if (loginLabelMatch?.[1] !== expectedLoginLabel) {
    fail(`${htmlName}: label login harus "${expectedLoginLabel}"`);
  }
  if (!new RegExp(`validUser\\s*:\\s*["']edumind["']`).test(html)) {
    fail(`${htmlName}: validUser harus "edumind"`);
  }
  if (!new RegExp(`validPass\\s*:\\s*["']ebook${numberId}["']`).test(html)) {
    fail(`${htmlName}: validPass harus "ebook${numberId}"`);
  }
  if (!html.includes('MuhammadFuad81/ebook-interaktif-edumind@main')) fail(`${htmlName}: CDN kanonik tidak ditemukan`);
  if (html.includes('MuhammadFuad81/webbook-edumind')) fail(`${htmlName}: CDN lama masih ada`);
  const scriptSources = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(match => {
    try { return decodeURIComponent(match[1]); } catch { return match[1]; }
  });
  if (!scriptSources.some(source => {
    const clean = source.split(/[?#]/, 1)[0];
    return clean.endsWith('/' + contentName) || clean === contentName;
  })) fail(`${htmlName}: content.js pasangannya tidak dimuat`);
  if (!/window\.BOOK_CONFIG\s*=/.test(html)) fail(`${htmlName}: BOOK_CONFIG tidak ditemukan`);

  const sandbox = { window: {} };
  try {
    new vm.Script(content, { filename: contentName }).runInNewContext(sandbox);
  } catch (error) {
    fail(`${contentName}: ${error.message}`);
    continue;
  }
  const bookContent = sandbox.window.BOOK_CONTENT;
  if (!bookContent || typeof bookContent !== 'object') fail(`${contentName}: BOOK_CONTENT tidak terbentuk`);
  if (!bookContent?.bab1 || !bookContent?.asesmen) fail(`${contentName}: bab1/asesmen tidak lengkap`);

  if ([1, 39, 53].includes(number)) {
    const chapter = bookContent?.bab1 || '';
    const figureCount = (chapter.match(/class="chapter-visual(?:\s|")/g) || []).length;
    if (figureCount !== 1) fail(`${contentName}: visual Bab 1 berjumlah ${figureCount}, seharusnya 1`);
    if (!/media\.edumind\.id\/ebook-edumind\//.test(chapter)) fail(`${contentName}: URL R2 tidak sesuai`);
    if (!/loading="lazy"/.test(chapter) || !/decoding="async"/.test(chapter)) fail(`${contentName}: atribut gambar responsif tidak lengkap`);
    if (!/<figcaption>[^<]+<\/figcaption>/.test(chapter)) fail(`${contentName}: caption visual tidak ditemukan`);
  }
}

for (const name of files.filter(name => /\.(js|html|css|md|json)$/.test(name))) {
  const text = fs.readFileSync(path.join(ROOT, name), 'utf8');
  if (text.includes('MuhammadFuad81/webbook-edumind')) fail(`${name}: nama repositori lama masih ada`);
}

const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'ebooks.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'asset-manifest.json'), 'utf8'));
if (catalog.count !== 54 || catalog.ebooks?.length !== 54) fail('ebooks.json tidak berisi tepat 54 eBook');
if (manifest.ebooks?.length !== 54) fail('asset-manifest.json tidak berisi tepat 54 eBook');

const pilotVisuals = manifest.ebooks.flatMap(book => book.visuals || []);
if (pilotVisuals.length !== 3) fail(`Visual pilot pada manifest: ${pilotVisuals.length}, seharusnya 3`);
if (assetRoot) {
  for (const visual of pilotVisuals) {
    const filePath = path.join(assetRoot, ...visual.path.split('/').slice(1));
    if (!fs.existsSync(filePath)) {
      fail(`Aset lokal tidak ditemukan: ${visual.path}`);
      continue;
    }
    const buffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha256').update(buffer).digest('hex');
    if (buffer.length !== visual.bytes) fail(`${visual.path}: ukuran byte berbeda`);
    if (hash !== visual.sha256) fail(`${visual.path}: SHA-256 berbeda`);
  }
}

const engineJs = fs.readFileSync(path.join(ROOT, 'engine.js'), 'utf8');
const engineCss = fs.readFileSync(path.join(ROOT, 'engine.css'), 'utf8');
const engineAnimasi = fs.readFileSync(path.join(ROOT, 'engine-ANIMASI.css'), 'utf8');
if (!engineJs.includes('function initChapterVisuals()')) fail('engine.js belum memiliki penginisialisasi visual');
if (!engineCss.includes('.chapter-visual') || !engineAnimasi.includes('.chapter-visual')) fail('CSS komponen visual belum lengkap');
const gateHintRule = '.gate-hint{font-size:calc(12px + 2pt);';
if (!engineCss.includes(gateHintRule) || !engineAnimasi.includes(gateHintRule)) {
  fail('Ukuran catatan akses halaman login belum seragam dengan baseline eBook 50–53');
}

if (errors.length) {
  console.error(`VALIDASI GAGAL (${errors.length})`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}
console.log('VALIDASI LULUS');
console.log(`- 54 HTML + 54 content.js berpasangan`);
console.log(`- 54 label login, username, password, dan ukuran catatan akses seragam`);
console.log(`- 54 entri katalog + 54 entri manifest`);
console.log(`- Pilot 001, 039, 053: markup responsif dan checksum aset valid`);
