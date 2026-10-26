# Verifikasi eBook 062 — Laporan Keuangan ISAK 335

## Status prapublikasi

Naskah, struktur, jurnal dan keterhubungan lima komponen laporan sudah diperiksa. Uji awal Chrome 1366×900 dan 390×844 lulus: 14 bab, satu gambar per bab, 42 kuis mini, 20 soal asesmen, skor tertahan sampai jawaban lengkap, pratinjau Bab 1, penguncian akses bab berikutnya, progres, catatan dan rencana tersimpan, tanpa overflow horizontal, serta header/footer fixed. Pengujian tambahan dan versi CDN dilakukan pada tahap publikasi; hasil final ditambahkan setelah selesai.

## Verifikasi angka

Pemeriksaan otomatis independen menggunakan rupiah bulat, mencakup keseimbangan seluruh jurnal, trial balance, persamaan posisi keuangan, perubahan aset neto, register donor, arus kas langsung dan tidak langsung, saldo akhir kas, serta kasus perpustakaan terpisah. Seluruhnya lulus.

- Aset akhir Rp125.600.000 = liabilitas Rp33.000.000 + aset neto Rp92.600.000.
- Surplus Rp42.600.000; arus operasi Rp65.800.000; investasi keluar Rp8.000.000; kenaikan kas Rp57.800.000; bank akhir Rp77.800.000.
- Pelepasan pembatasan Rp15.000.000 neto nol pada total dua kelas.
- Penyusutan Rp8.000.000 / 40 bulan = Rp200.000 per bulan. Asumsi lima tahun diperlihatkan terpisah, bukan dicampur.

## Visual dan pengiriman

Cover 2:3, 14 ilustrasi 16:9; WebP asli tersimpan lokal dan di R2. Bab ganjil putra, genap putri; seluruh perempuan berjilbab panjang; tidak ada percakapan dekat lintas gender. Ukuran tampil gambar bab dibatasi 680px. Prompt, dimensi, URL dan hash tersedia pada dokumen visual serta manifest per buku.

Purge Cloudflare khusus 30 URL aset 062 selesai; bukan purge seluruh zona. Bukti disimpan lokal di `.ebook062-work/cloudflare-purge.jpg`. Purge jsDelivr dan pemeriksaan berkas publik dicatat setelah publikasi.

## Batas klaim

Ini panduan pendidikan, bukan opini audit atau nasihat pajak entitas tertentu. Sumber resmi dan cakupan transkrip dicatat dalam audit-sumber terpisah. Tidak mengklaim menonton seluruh video; materi utama ditelaah melalui transkrip lengkap serta slide pengguna.

HTML siap ditempel ke WSP Growva, tetapi halaman WSP milik pengguna tidak diubah otomatis. Login mengikuti pola koleksi: `edumind` / `ebook062`. Gerbang login sisi klien mengikuti arsitektur yang sudah ada, bukan pengamanan server untuk dokumen rahasia. Refleksi dan rencana hanya disimpan pada browser.

Perubahan naming koleksi ditunda; berkas, konten, engine bersama, katalog induk dan aset buku lama tidak dirombak.
