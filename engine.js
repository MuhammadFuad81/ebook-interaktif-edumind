/* ==========================================================================
   EDUMIND ACADEMY — WEB-BOOK SHARED ENGINE (JS)
   Dipakai bersama oleh SEMUA judul web-book. Jangan taruh data spesifik
   1 buku di sini (judul, bab, kredensial) — itu diisi lewat window.BOOK_CONFIG
   di file HTML masing-masing buku, SEBELUM file ini dimuat.

   Contoh config per-buku (taruh di <head> atau sebelum </body>, sebelum
   <script src=".../engine.js">):

   <script>
     window.BOOK_CONFIG = {
       id: "strategi-sekolah-islam-ppdb",   // unik per judul, wajib diisi
       chapters: ["bab1","bab2","bab3","bab4","bab5","bab6","bab7","bab8"],
       previewAllowed: ["cover","pengantar","bab1"],
       validUser: "demo",
       validPass: "demo123",
       freePreview: true,
       waNumber: "6281385841500"
     };
   </script>
   ========================================================================== */

const CFG = window.BOOK_CONFIG || {};
const VALID_USER = CFG.validUser || "demo";
const VALID_PASS = CFG.validPass || "demo123";
const BOOK_ID = CFG.id || ("buku-" + Date.now()); // WAJIB unik per judul di config
const FREE_PREVIEW = CFG.freePreview !== false;
const PREVIEW_ALLOWED = CFG.previewAllowed || ['cover'];
const CHAPTERS = CFG.chapters || [];
/* urutan halaman untuk tombol navigasi Selanjutnya/Sebelumnya di setiap bab */
const PAGE_ORDER = ['cover','pengantar', ...CHAPTERS, 'video','asesmen','rencana','ringkasan','faq','cta'];

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
  go(PREVIEW_ALLOWED[PREVIEW_ALLOWED.length-1] || 'cover');
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
  const btn = document.getElementById('themeBtn');
  if(btn) btn.textContent = t==='dark' ? '☀️' : '🌙';
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
function go(id){ location.hash = id; }
function renderRoute(){
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
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  closeDrawer();
  window.scrollTo({top:0});
  checkChapterEnd();
}
window.addEventListener('hashchange', renderRoute);

/* ---------- NAVIGASI SELANJUTNYA / SEBELUMNYA ---------- */
function currentPageId(){ return (location.hash || '#cover').slice(1); }
function goNext(){
  const idx = PAGE_ORDER.indexOf(currentPageId());
  if(idx > -1 && idx < PAGE_ORDER.length - 1) go(PAGE_ORDER[idx + 1]);
}
function goPrev(){
  const idx = PAGE_ORDER.indexOf(currentPageId());
  if(idx > 0) go(PAGE_ORDER[idx - 1]);
}

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
  const pct = CHAPTERS.length ? Math.round((done/CHAPTERS.length)*100) : 0;
  const fill = document.getElementById('ribbonFill');
  const pctEl = document.getElementById('ribbonPct');
  if(fill) fill.style.width = pct+'%';
  if(pctEl) pctEl.textContent = pct+'%';
  document.querySelectorAll('.toc a[data-chapter]').forEach(a=>{
    const id = a.getAttribute('href').slice(1);
    a.classList.toggle('done', !!prog[id]);
    a.querySelector('.toc-check').textContent = prog[id] ? '✓':'';
  });
  const sc = document.getElementById('sumChapters');
  if(sc) sc.textContent = done+'/'+CHAPTERS.length;
  const sa = document.getElementById('sumAssessScore');
  if(sa){
    const savedScore = localStorage.getItem(BOOK_ID+'-assessScore');
    sa.textContent = savedScore!==null ? savedScore : '–';
  }
}

/* tombol "Tandai Selesai" hanya muncul setelah user mendekati akhir konten bab */
function checkChapterEnd(){
  const activePage = document.querySelector('.page.active');
  if(!activePage || !activePage.dataset.chapterPage) return;
  const chId = activePage.dataset.chapterPage;
  const btn = document.getElementById('doneBtn-'+chId);
  if(!btn) return;
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

/* ---------- ASESMEN KOMPREHENSIF (skor tertunda, skala 0-100) ---------- */
function selectAssessAnswer(btn){
  const group = btn.parentElement.querySelectorAll('.quiz-opt');
  group.forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}
function checkAssessment(){
  const questions = document.querySelectorAll('#page-asesmen .assess-q');
  if(!questions.length) return;
  const belumDijawab = [...questions].some(q=>!q.querySelector('.quiz-opt.selected'));
  if(belumDijawab){
    alert('Mohon jawab semua soal terlebih dahulu, baru klik "Periksa Jawaban Saya".');
    return;
  }
  let correct = 0;
  questions.forEach(q=>{
    const opts = q.querySelectorAll('.quiz-opt');
    const correctIdx = parseInt(q.dataset.correct, 10) - 1;
    let gotItRight = false;
    opts.forEach((b,i)=>{
      b.disabled = true;
      if(b.classList.contains('selected') && i===correctIdx){ gotItRight = true; }
    });
    if(gotItRight){
      correct++;
      opts[correctIdx].classList.add('correct');
    } else {
      opts.forEach(b=>{ if(b.classList.contains('selected')) b.classList.add('wrong'); });
      opts[correctIdx].classList.add('correct');
    }
  });
  const total = questions.length;
  const score = total ? Math.round((correct/total)*100) : 0;
  localStorage.setItem(BOOK_ID+'-assessScore', score);
  const resultEl = document.getElementById('asesmenResult');
  if(resultEl){
    resultEl.innerHTML = `Skor Anda: <strong>${score}</strong> / 100 &nbsp;(${correct} dari ${total} jawaban benar)`;
    resultEl.classList.add('show');
  }
  const checkBtn = document.getElementById('checkAssessBtn');
  if(checkBtn){ checkBtn.disabled = true; checkBtn.textContent = '✓ Sudah Diperiksa'; }
  updateProgressUI();
  if(resultEl) resultEl.scrollIntoView({behavior:'smooth', block:'center'});
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

/* ==========================================================================
   KATALOG PRODUK (cross-sell) — SUMBER TUNGGAL untuk SEMUA web-book.
   Edit array PILAR_PROMPT_AI / KELAS_BANK_SOAL / PRODUCTS / CATEGORIES di
   bawah ini untuk mengubah katalog di >40 buku sekaligus. Setelah commit
   di GitHub, jangan lupa purge cache jsDelivr agar perubahan langsung
   tayang: https://purge.jsdelivr.net/gh/USER/REPO@main/engine.js
   ========================================================================== */
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

function setSearch(v){
  searchQuery = v.toLowerCase().trim();
  visibleCount = PAGE_SIZE;
  renderCatalog();
}
function renderChips(){
  const wrap = document.getElementById('filterChips');
  if(!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c=>
    `<button class="chip${c.key===activeCategory?' active':''}" onclick="setCategory('${c.key}')">${c.label}</button>`
  ).join('');
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
  let filtered = activeCategory==='semua' ? PRODUCTS : PRODUCTS.filter(p=>p.category===activeCategory);
  if(searchQuery) filtered = filtered.filter(p=>p.title.toLowerCase().includes(searchQuery));
  const shown = filtered.slice(0, visibleCount);
  const grid = document.getElementById('catalogGrid');
  if(!grid) return;
  grid.innerHTML = shown.map(p=>{
    const catLabel = CATEGORIES.find(c=>c.key===p.category)?.label || p.category;
    return `<a class="product-card" href="${p.url}" target="_blank" rel="noopener">
      <img class="product-cover" src="${p.cover}" alt="${p.title}" loading="lazy">
      <div class="product-info"><p class="product-cat">${catLabel}</p><p class="product-title">${p.title}</p></div>
    </a>`;
  }).join('');
  const btn = document.getElementById('loadMoreBtn');
  if(btn) btn.style.display = visibleCount < filtered.length ? 'block':'none';
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

/* ---------- WHATSAPP FAB (nomor bisa di-override lewat config) ---------- */
(function setupWaFab(){
  const fab = document.querySelector('.wa-fab');
  if(fab && CFG.waNumber){ fab.href = `https://wa.me/${CFG.waNumber}`; }
})();

/* ---------- INIT ---------- */
function initApp(){
  updateProgressUI();
  renderChips();
  renderCatalog();
  renderRoute();
}
if(document.getElementById('app') && document.getElementById('app').classList.contains('active')) initApp();
