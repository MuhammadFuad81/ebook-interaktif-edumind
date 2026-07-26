/* ---------- KREDENSIAL (demo) ---------- */
const VALID_USER = "demo", VALID_PASS = "demo123";
const BOOK_ID = "strategi-sekolah-islam-ppdb"; // unik per judul agar progress tidak tercampur
const OWNER_PASSCODE = "edumind-owner-2026"; // ganti kode rahasia ini, jangan dibagikan ke peserta
const FREE_PREVIEW = true; // ganti false untuk menonaktifkan mode preview gratis sepenuhnya
const PREVIEW_ALLOWED = ['cover','pengantar','bab1'];

function openApp(){
  document.getElementById('gate').classList.add('hidden');
  document.getElementById('app').classList.add('active');
  initApp();
}
function tryLogin(){
  const u=document.getElementById('user').value.trim();
  const p=document.getElementById('pass').value.trim();
  if(u===VALID_USER && p===VALID_PASS){
    sessionStorage.setItem(BOOK_ID+'-session','full');
    openApp();
  } else {
    document.getElementById('gateErr').textContent = "Username atau password salah.";
  }
}
function startPreview(){
  sessionStorage.setItem(BOOK_ID+'-session','preview');
  openApp();
  go('bab1');
}
function logout(){
  sessionStorage.removeItem(BOOK_ID+'-session');
  location.hash = '';
  location.reload();
}
const existingSession = sessionStorage.getItem(BOOK_ID+'-session');
if(existingSession){ openApp(); }
if(!FREE_PREVIEW){ document.addEventListener('DOMContentLoaded', ()=>{ const b=document.getElementById('previewBtn'); if(b) b.style.display='none'; }); }

/* ---------- MODE GELAP ---------- */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = t==='dark' ? '☀️' : '🌙';
  localStorage.setItem(BOOK_ID+'-theme', t);
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme')==='dark' ? 'dark':'light';
  applyTheme(current==='dark' ? 'light':'dark');
}
(function initTheme(){
  const saved = localStorage.getItem(BOOK_ID+'-theme');
  const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  applyTheme(preferred);
})();

/* ---------- ROUTING ---------- */
const CHAPTERS = ['bab1','bab2','bab3','bab4','bab5','bab6','bab7','bab8'];
function go(id){ location.hash = id; }
function isOwner(){ return sessionStorage.getItem(BOOK_ID+'-isOwner')==='1'; }
function checkAdminAccess(){
  if(location.hash === '#katalog-admin'){
    if(!isOwner()){
      const code = prompt('Kode akses admin:');
      if(code === OWNER_PASSCODE){
        sessionStorage.setItem(BOOK_ID+'-isOwner','1');
      } else {
        alert('Kode salah.');
      }
    }
    location.hash = 'katalog';
    return true;
  }
  return false;
}
function renderRoute(){
  if(checkAdminAccess()) return;
  const id = (location.hash || '#cover').slice(1);
  const session = sessionStorage.getItem(BOOK_ID+'-session');
  const isLocked = session==='preview' && !PREVIEW_ALLOWED.includes(id) && id!=='katalog';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  if(isLocked){
    document.getElementById('page-locked').classList.add('active');
  } else {
    const target = document.getElementById('page-'+id);
    (target || document.getElementById('page-cover')).classList.add('active');
  }
  document.querySelectorAll('.toc a[data-nav]').forEach(a=>{
    const hid = a.getAttribute('href').slice(1);
    a.classList.toggle('active', hid===id && !isLocked);
    a.classList.toggle('locked', session==='preview' && !PREVIEW_ALLOWED.includes(hid) && hid!=='katalog');
  });
  const editorBtn = document.getElementById('editorToggleBtn');
  if(editorBtn) editorBtn.style.display = isOwner() ? 'inline-block' : 'none';
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  closeDrawer();
  window.scrollTo({top:0});
  checkChapterEnd();
}
window.addEventListener('hashchange', renderRoute);

/* ---------- DRAWER MOBILE ---------- */
function toggleDrawer(){
  document.getElementById('toc').classList.toggle('open');
  document.getElementById('scrim').classList.toggle('show');
}
function closeDrawer(){
  document.getElementById('toc').classList.remove('open');
  document.getElementById('scrim').classList.remove('show');
}

/* ---------- SCROLL REVEAL ---------- */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.15});

/* ---------- PROGRESS (localStorage) ---------- */
function getProgress(){
  return JSON.parse(localStorage.getItem(BOOK_ID+'-progress') || '{}');
}
function markDone(chapterId){
  const prog = getProgress();
  prog[chapterId] = true;
  localStorage.setItem(BOOK_ID+'-progress', JSON.stringify(prog));
  document.getElementById('seal-'+chapterId).classList.add('show');
  document.getElementById('doneBtn-'+chapterId).classList.add('locked');
  document.getElementById('doneBtn-'+chapterId).textContent = '✓ Sudah Ditandai Selesai';
  updateProgressUI();
}
function updateProgressUI(){
  const prog = getProgress();
  const done = CHAPTERS.filter(c=>prog[c]).length;
  const pct = Math.round((done/CHAPTERS.length)*100);
  document.getElementById('ribbonFill').style.width = pct+'%';
  document.getElementById('ribbonPct').textContent = pct+'%';
  document.querySelectorAll('.toc a[data-chapter]').forEach(a=>{
    const id = a.getAttribute('href').slice(1);
    a.classList.toggle('done', !!prog[id]);
    a.querySelector('.toc-check').textContent = prog[id] ? '✓':'';
  });
  const sc = document.getElementById('sumChapters');
  if(sc) sc.textContent = done+'/'+CHAPTERS.length;
}

/* tombol "Tandai Selesai" hanya muncul setelah user mendekati akhir konten bab */
function checkChapterEnd(){
  const activePage = document.querySelector('.page.active');
  if(!activePage || !activePage.dataset.chapterPage) return;
  const chId = activePage.dataset.chapterPage;
  const btn = document.getElementById('doneBtn-'+chId);
  window.addEventListener('scroll', function onScroll(){
    if((window.innerHeight+window.scrollY) >= document.body.offsetHeight-260){
      btn.classList.add('show');
      window.removeEventListener('scroll', onScroll);
    }
  });
}

/* ---------- KUIS ---------- */
let quizCorrectCount = 0;
function answerQuiz(btn, isCorrect){
  const group = btn.parentElement.querySelectorAll('.quiz-opt');
  group.forEach(b=>b.disabled=true);
  btn.classList.add(isCorrect ? 'correct':'wrong');
  if(!isCorrect){
    group.forEach(b=>{ if(b.onclick.toString().includes('true')) b.classList.add('correct'); });
  } else {
    quizCorrectCount++;
  }
  const scoreEl = document.getElementById('asesmenScore');
  if(scoreEl && btn.closest('#page-asesmen')) scoreEl.textContent = 'Skor sementara: '+quizCorrectCount;
  const sq = document.getElementById('sumQuiz');
  if(sq) sq.textContent = quizCorrectCount;
}

/* ---------- FAQ ---------- */
function toggleFaq(btn){ btn.parentElement.classList.toggle('open'); }

/* ---------- RENCANA AKSI ---------- */
function addPlanRow(){
  const card = document.getElementById('planCard');
  const row = document.createElement('div');
  row.className='plan-row';
  row.innerHTML = `<input placeholder="Target"><input placeholder="Tanggal"><input placeholder="Indikator keberhasilan"><button onclick="this.parentElement.remove()">✕</button>`;
  card.appendChild(row);
}

/* ---------- UNDUH PDF ---------- */
function generatePDF(){
  document.body.classList.add('print-all');
  window.print();
}
window.addEventListener('afterprint', ()=>{ document.body.classList.remove('print-all'); });

/* ---------- KATALOG PRODUK (cross-sell) ---------- */
const PILAR_PROMPT_AI = [
  "Kurikulum & Pembelajaran","Kesiswaan & Karakter","SDM, Kepemimpinan & Pengembangan Organisasi",
  "Keuangan Sekolah","Marketing & SPMB","Humas & Branding Sekolah",
  "Administrasi Sekolah","Sarana Prasarana, Layanan Operasional & Keselamatan Sekolah",
].map((t,i)=>({title:t, category:"promptai", cover:`https://placehold.co/400x500/8A6B2A/F7F5EF?text=Pilar+${i+1}`, url:"#"}));

const KELAS_BANK_SOAL = Array.from({length:12},(_,i)=>({
  title:`Kelas ${i+1}`, category:"banksoal", cover:`https://placehold.co/400x500/8A6B2A/F7F5EF?text=Kelas+${i+1}`, url:"#"
}));

const PRODUCTS = [
  ...PILAR_PROMPT_AI,
  ...KELAS_BANK_SOAL,
  {title:"Program IHT & Pendampingan Sekolah Islam", category:"iht", cover:"https://placehold.co/400x500/2F7D5A/F7F5EF?text=IHT", url:"#"},
  {title:"Jasa Website Sekolah", category:"jasa", cover:"https://placehold.co/400x500/5F5E5A/F7F5EF?text=Website", url:"#"},
  {title:"Jasa Landing Page SPMB", category:"jasa", cover:"https://placehold.co/400x500/5F5E5A/F7F5EF?text=LP+SPMB", url:"#"},
  {title:"Jasa Aplikasi Sekolah", category:"jasa", cover:"https://placehold.co/400x500/5F5E5A/F7F5EF?text=App+Sekolah", url:"#"},
  {title:"Template SOP Sekolah", category:"jasa", cover:"https://placehold.co/400x500/5F5E5A/F7F5EF?text=SOP", url:"#"},
];
const CATEGORIES = [
  {key:"semua", label:"Semua"},
  {key:"promptai", label:"Prompt Generator AI"},
  {key:"banksoal", label:"Bank Soal"},
  {key:"iht", label:"IHT & Pendampingan"},
  {key:"jasa", label:"Jasa & Template"},
];
const PAGE_SIZE = 8;
let activeCategory = "semua";
let visibleCount = PAGE_SIZE;
let searchQuery = "";

/* --- penyimpanan lokal untuk mode editor (belum permanen, lihat catatan panel) --- */
let customCategories = JSON.parse(localStorage.getItem(BOOK_ID+'-customCategories') || '[]');
let customProducts = JSON.parse(localStorage.getItem(BOOK_ID+'-customProducts') || '[]');
function getAllCategories(){ return [...CATEGORIES, ...customCategories]; }
function getAllProducts(){ return [...PRODUCTS, ...customProducts]; }
function saveCustomCatalog(){
  localStorage.setItem(BOOK_ID+'-customCategories', JSON.stringify(customCategories));
  localStorage.setItem(BOOK_ID+'-customProducts', JSON.stringify(customProducts));
}

function setSearch(v){
  searchQuery = v.toLowerCase().trim();
  visibleCount = PAGE_SIZE;
  renderCatalog();
}
function renderChips(){
  const wrap = document.getElementById('filterChips');
  wrap.innerHTML = getAllCategories().map(c=>
    `<button class="chip${c.key===activeCategory?' active':''}" onclick="setCategory('${c.key}')">${c.label}</button>`
  ).join('');
  const sel = document.getElementById('newProdCategory');
  if(sel) sel.innerHTML = getAllCategories().filter(c=>c.key!=='semua').map(c=>`<option value="${c.key}">${c.label}</option>`).join('');
}
function setCategory(key){
  activeCategory = key; visibleCount = PAGE_SIZE;
  renderChips(); renderCatalog();
}
function loadMoreProducts(){
  visibleCount += PAGE_SIZE;
  renderCatalog();
}
function renderCatalog(){
  const all = getAllProducts();
  let filtered = activeCategory==='semua' ? all : all.filter(p=>p.category===activeCategory);
  if(searchQuery) filtered = filtered.filter(p=>p.title.toLowerCase().includes(searchQuery));
  const shown = filtered.slice(0, visibleCount);
  document.getElementById('catalogGrid').innerHTML = shown.map(p=>{
    const catLabel = getAllCategories().find(c=>c.key===p.category)?.label || p.category;
    return `<a class="product-card" href="${p.url}" target="_blank" rel="noopener">
      <img class="product-cover" src="${p.cover}" alt="${p.title}" loading="lazy">
      <div class="product-info"><p class="product-cat">${catLabel}</p><p class="product-title">${p.title}</p></div>
    </a>`;
  }).join('');
  document.getElementById('loadMoreBtn').style.display = visibleCount < filtered.length ? 'block':'none';
}

/* --- mode editor: tambah kategori/produk tanpa perlu ubah kode setiap saat --- */
function toggleEditor(){
  if(!isOwner()) return;
  document.getElementById('editorPanel').classList.toggle('open');
}
function slugify(s){ return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function addCategoryFromForm(){
  const label = document.getElementById('newCatLabel').value.trim();
  if(!label) return;
  const key = slugify(label) || ('kat-'+Date.now());
  customCategories.push({key, label});
  saveCustomCatalog(); renderChips(); renderCatalog();
  document.getElementById('newCatLabel').value='';
  showEditorStatus(`Kategori "${label}" ditambahkan (lokal).`);
}
function addProductFromForm(){
  const title = document.getElementById('newProdTitle').value.trim();
  const category = document.getElementById('newProdCategory').value;
  const cover = document.getElementById('newProdCover').value.trim() || 'https://placehold.co/400x500/1B2A4A/F7F5EF?text=Cover';
  const url = document.getElementById('newProdUrl').value.trim() || '#';
  if(!title || !category) return;
  customProducts.push({title, category, cover, url});
  saveCustomCatalog(); renderCatalog();
  document.getElementById('newProdTitle').value='';
  document.getElementById('newProdCover').value='';
  document.getElementById('newProdUrl').value='';
  showEditorStatus(`Produk "${title}" ditambahkan (lokal).`);
}
function showEditorStatus(msg){
  const el = document.getElementById('editorStatus');
  el.textContent = msg;
  setTimeout(()=>{ if(el.textContent===msg) el.textContent=''; }, 4000);
}
function exportCatalogCode(){
  const catCode = customCategories.map(c=>`  {key:"${c.key}", label:"${c.label}"},`).join('\n');
  const prodCode = customProducts.map(p=>`  {title:"${p.title.replace(/"/g,'\\"')}", category:"${p.category}", cover:"${p.cover}", url:"${p.url}"},`).join('\n');
  const code = `// --- Tempel kategori baru ke dalam array CATEGORIES ---\n${catCode || '  // (tidak ada kategori baru)'}\n\n// --- Tempel produk baru ke dalam array PRODUCTS ---\n${prodCode || '  // (tidak ada produk baru)'}`;
  const fallbackCopy = ()=>{
    const ta = document.createElement('textarea');
    ta.value = code; document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).then(()=>showEditorStatus('Kode disalin ke clipboard!')).catch(fallbackCopy);
  } else { fallbackCopy(); showEditorStatus('Kode disalin ke clipboard!'); }
}
function resetCatalogLocal(){
  if(!confirm('Hapus semua kategori & produk yang ditambahkan lewat mode editor di browser ini?')) return;
  customCategories = []; customProducts = [];
  saveCustomCatalog(); renderChips(); renderCatalog();
  showEditorStatus('Perubahan lokal dihapus.');
}

/* ---------- KEAMANAN RINGAN (deterrent, bukan proteksi mutlak) ---------- */
document.addEventListener('contextmenu', e=>{
  if(!e.target.closest('input,textarea')) e.preventDefault();
});
document.addEventListener('keydown', e=>{
  const k = e.key.toLowerCase();
  const ctrlCombo = (e.ctrlKey||e.metaKey) && ['u','s'].includes(k);
  const devtoolsCombo = (e.ctrlKey||e.metaKey) && e.shiftKey && ['i','j','c'].includes(k);
  if(e.key==='F12' || ctrlCombo || devtoolsCombo) e.preventDefault();
});

/* ---------- INIT ---------- */
function initApp(){
  updateProgressUI();
  renderChips();
  renderCatalog();
  renderRoute();
}
if(document.getElementById('app').classList.contains('active')) initApp();
