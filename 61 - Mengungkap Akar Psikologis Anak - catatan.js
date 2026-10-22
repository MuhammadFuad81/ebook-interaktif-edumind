/* Catatan perangkat lokal eBook 061; tidak mengubah engine bersama. */
(() => {
  const key = 'akar-psikologis-anak-061-catatan-v1';
  const card = document.getElementById('planCard');
  const placeholders = ['Kebutuhan • tindakan (samaran)', 'PIC • tenggat', 'Bukti awal → kemajuan • tinjau'];
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) { saved = {}; }
  const newRow = (values = []) => {
    const row = document.createElement('div'); row.className = 'plan-row';
    placeholders.forEach((label,i) => { const input = document.createElement('input'); input.placeholder=label; input.setAttribute('aria-label',label); input.value=String(values[i] || ''); row.appendChild(input); });
    const button = document.createElement('button'); button.type='button'; button.textContent='✕'; button.setAttribute('aria-label','Hapus baris rencana');
    button.addEventListener('click',()=>{row.remove();persist();}); row.appendChild(button); return row;
  };
  const update = () => { const n=document.getElementById('sumPlan'); if(n && card) n.textContent=Array.from(card.querySelectorAll('.plan-row')).filter(r=>Array.from(r.querySelectorAll('input')).every(i=>i.value.trim())).length; };
  const persist = () => {
    const reflections={}; document.querySelectorAll('[data-chapter-page] textarea').forEach(el=>{reflections[el.closest('[data-chapter-page]').id]=el.value;});
    const rows=card ? Array.from(card.querySelectorAll('.plan-row')).map(row=>Array.from(row.querySelectorAll('input')).map(i=>i.value)) : [];
    try { localStorage.setItem(key,JSON.stringify({reflections,rows})); } catch (_) { /* Catatan tetap dapat dibaca bila penyimpanan browser tidak tersedia. */ }
    update();
  };
  if(card){ card.replaceChildren(); (saved.rows?.length ? saved.rows : [[]]).forEach(values=>card.appendChild(newRow(values))); }
  document.querySelectorAll('[data-chapter-page] textarea').forEach(el=>{el.value=saved.reflections?.[el.closest('[data-chapter-page]').id] || '';});
  window.addPlanRow = () => { if(card){card.appendChild(newRow());persist();} };
  document.getElementById('app')?.addEventListener('input', event=>{if(event.target.matches('[data-chapter-page] textarea,#planCard input'))persist();});
  update();
})();

/* Muat seluruh gambar buku sebelum dialog cetak; tidak menyentuh engine bersama. */
(() => {const original=window.generatePDF;window.generatePDF=async()=>{const images=Array.from(document.querySelectorAll("#app .cover-img,#app .chapter-visual img"));images.forEach(img=>{img.loading="eager";});await Promise.all(images.map(img=>img.decode().catch(()=>{})));original();};})();
