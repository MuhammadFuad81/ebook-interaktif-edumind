#!/usr/bin/env node
/* Membangun katalog produksi dari 54 HTML resmi. Jalankan dari root repositori. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main';
const R2_BASE = 'https://media.edumind.id/ebook-edumind';
const htmlPattern = /^(\d{2}) - (.+) - untuk Growva\.html$/;

function slugify(value) {
  return value
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/&/g, ' dan ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function encodeFile(name) {
  return name.split('/').map(encodeURIComponent).join('/');
}

function firstMatch(text, expressions) {
  for (const expression of expressions) {
    const match = text.match(expression);
    if (match) return match[1].trim();
  }
  return null;
}

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const pilotRegistryPath = path.join(ROOT, 'pilot-visuals.json');
const pilotRegistry = fs.existsSync(pilotRegistryPath)
  ? JSON.parse(fs.readFileSync(pilotRegistryPath, 'utf8'))
  : { visuals: [] };
const pilotByNumber = new Map((pilotRegistry.visuals || []).map(item => [Number(item.number), item]));

const contentByNumber = new Map(
  fs.readdirSync(ROOT)
    .filter(name => /^\d{2} - .+ - content\.js$/.test(name))
    .map(name => [Number(name.slice(0, 2)), name])
);

const ebooks = fs.readdirSync(ROOT)
  .map(name => ({ name, match: name.match(htmlPattern) }))
  .filter(item => item.match)
  .map(({ name, match }) => {
    const number = Number(match[1]);
    const title = match[2];
    const html = fs.readFileSync(path.join(ROOT, name), 'utf8');
    const chapterBlock = firstMatch(html, [/chapters\s*:\s*\[([^\]]*)\]/s]) || '';
    const chapterCount = (chapterBlock.match(/["']bab\d+["']/g) || []).length;
    const cover = firstMatch(html, [
      /class=["'][^"']*cover-img[^"']*["'][^>]*src=["']([^"']+)/i,
      /property=["']og:image["'][^>]*content=["']([^"']+)/i
    ]);
    const videoId = firstMatch(html, [
      /youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{6,})/i,
      /youtu\.be\/([A-Za-z0-9_-]{6,})/i
    ]);
    const id = String(number).padStart(3, '0');
    const slug = slugify(title);
    const contentFile = contentByNumber.get(number);
    if (!contentFile) throw new Error(`Content JS tidak ditemukan untuk nomor ${number}`);
    if (!chapterCount) throw new Error(`Daftar bab tidak terbaca pada ${name}`);
    return {
      number,
      id,
      title,
      slug,
      htmlFile: name,
      contentFile,
      chapterCount,
      coverUrl: cover,
      videoId,
      htmlUrl: `${CDN_BASE}/${encodeFile(name)}`,
      contentUrl: `${CDN_BASE}/${encodeFile(contentFile)}`,
      assetPrefix: `ebook-edumind/${id}-${slug}`,
      status: 'published'
    };
  })
  .sort((a, b) => a.number - b.number);

if (ebooks.length !== 54) throw new Error(`Jumlah resmi harus 54, ditemukan ${ebooks.length}`);
ebooks.forEach((book, index) => {
  if (book.number !== index + 1) throw new Error(`Nomor tidak berurutan pada posisi ${index + 1}`);
});

const generatedAt = new Date().toISOString();
const catalog = {
  schemaVersion: '1.0.0',
  generatedAt,
  count: ebooks.length,
  canonicalRepository: 'https://github.com/MuhammadFuad81/ebook-interaktif-edumind',
  canonicalBranch: 'main',
  cdnBaseUrl: CDN_BASE,
  assetBaseUrl: R2_BASE,
  ebooks
};

const assetManifest = {
  schemaVersion: '1.0.0',
  generatedAt,
  assetBaseUrl: R2_BASE,
  rootPrefix: 'ebook-edumind/',
  folderPattern: 'ebook-edumind/{id}-{slug}/',
  defaults: { format: 'webp', loading: 'lazy', decoding: 'async', aspectRatio: '16/9' },
  ebooks: ebooks.map(book => {
    const pilot = pilotByNumber.get(book.number);
    return {
      number: book.number,
      id: book.id,
      slug: book.slug,
      prefix: book.assetPrefix,
      cover: book.coverUrl
        ? { status: 'legacy-external', sourceUrl: book.coverUrl, r2Url: null }
        : { status: 'missing', sourceUrl: null, r2Url: null },
      visuals: pilot ? [pilot] : []
    };
  })
};

const trackerHeaders = [
  'number','title','slug','batch','inventory','html_github','cdn_normalized',
  'visual','r2_upload','integration','qa','publish','notes'
];
const trackerRows = ebooks.map(book => {
  const pilot = pilotByNumber.get(book.number);
  return {
    number: book.number,
    title: book.title,
    slug: book.slug,
    batch: pilot ? 'pilot-01' : 'backlog',
    inventory: 'complete',
    html_github: 'complete',
    cdn_normalized: 'complete',
    visual: pilot?.status || 'not-started',
    r2_upload: pilot?.r2Status || 'not-started',
    integration: pilot?.integrationStatus || 'not-started',
    qa: pilot?.qaStatus || 'pending',
    publish: pilot?.publishStatus || 'pending',
    notes: pilot?.notes || ''
  };
});
const trackerCsv = [
  trackerHeaders.join(','),
  ...trackerRows.map(row => trackerHeaders.map(key => csvCell(row[key])).join(','))
].join('\n') + '\n';

fs.writeFileSync(path.join(ROOT, 'ebooks.json'), JSON.stringify(catalog, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'asset-manifest.json'), JSON.stringify(assetManifest, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'PRODUCTION-TRACKER.csv'), trackerCsv);
console.log(`Katalog selesai: ${ebooks.length} eBook, ${pilotByNumber.size} visual pilot.`);
