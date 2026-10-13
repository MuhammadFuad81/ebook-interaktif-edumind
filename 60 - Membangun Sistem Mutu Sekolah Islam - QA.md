# QA Produksi eBook Interaktif 060

Publikasi: eBook Interaktif Edumind 060 — Membangun Sistem Mutu Sekolah Islam.

## Pemeriksaan sebelum publikasi

- 13 bab, 22 halaman navigasi, 39 pertanyaan kuis mini, 20 soal asesmen.
- Alur pembaca: orientasi → sistem mutu → diagnosis dan sasaran → tim/dokumen → kurikulum/keunggulan/guru/supervisi → layanan/promosi → evaluasi/perbaikan.
- Audit seluruh 922 cue transkrip dan 111 slide tersedia di berkas audit sumber. Pengulangan serta logistik acara tidak dimasukkan ke prosa.
- Username `edumind`, password `ebook060`, label `Ebook Interaktif - 060`, ID penyimpanan unik.
- Baseline tipografi 051 (+2 pt), fixed header/footer, safe area, drawer, tabel dan gambar responsif.
- Tampilan diuji pada Chrome desktop 1366×900 dan ponsel 390×844.
- Pratinjau Bab 1 dan penguncian Bab 2 berhasil. Login penuh membuka seluruh bab.
- Semua halaman bab mengandung 3 kuis mini; jawaban benar diberi umpan balik.
- Asesmen menunggu tombol periksa dan menghasilkan 100/100 untuk 20 jawaban benar.
- Penandaan bab tersimpan dan rekap menunjukkan 1/13 dalam uji.
- Refleksi dan rencana aksi tersimpan lokal, pulih setelah reload; baris tambahan bekerja dan rekap menghitung rencana lengkap.
- Tidak ada luapan halaman horizontal; header/footer tetap fixed pada posisi viewport saat scroll; drawer ponsel dapat memilih bab.
- Proporsi cover 2:3, gambar bab 16:9 dengan lebar desktop dibatasi 680px.
- Tidak ada error JavaScript pada laporan akhir QA.

## R2 dan cache gambar

Bucket `edumind-audio`, prefix `ebook-edumind/060-sistem-mutu-sekolah-islam/`.

| Aset | Dimensi | Byte | HTTP/MIME |
|---|---|---:|---|
| cover.webp | 1200×1800 | 344724 | 200 / image/webp |
| chapter-01.webp | 1600×900 | 123850 | 200 / image/webp |
| chapter-07.webp | 1600×900 | 126564 | 200 / image/webp |
| chapter-11.webp | 1600×900 | 124144 | 200 / image/webp |

SHA-256 URL publik cocok dengan aset lokal dan asset-manifest.json. Semua tokoh perempuan/putri memakai jilbab panjang; tidak ada interaksi laki-laki dan perempuan. Purge Cloudflare untuk empat URL, masing-masing dengan dan tanpa versi query, terkonfirmasi pada daftar Recently Purged.

## Penyerahan

HTML disalin ke folder utama eBook Interaktif Edumind Academy agar siap ditempel pada WSP Growva. Isi panjang dimuat dari content.js; catatan.js menambahkan penyimpanan refleksi/rencana perangkat lokal tanpa mengubah engine bersama. Outline, prompt visual per bab, dan audit editorial menyertai konten di repositori. Transkrip lengkap VTT/SRT/JSON/Markdown dan PDF sumber disimpan pada arsip lokal 060.

Pemeriksaan terakhir memakai file JS publik setelah commit dan purge jsDelivr; bukti rinci disimpan dalam folder kerja lokal `qa-published`.
