# Uji Kompatibilitas Pilot — eBook 001, 039, dan 053

Tanggal uji: 21 Agustus 2026
Pilot dipilih untuk mewakili tiga generasi penyusunan konten: HTML-string lama,
struktur pertengahan, dan generator bab terbaru.

## Lingkup uji

- Engine, HTML, dan `content.js` lokal yang sedang disiapkan untuk publikasi.
- Gambar WebP staging asli berukuran 1600×900.
- Layar ponsel 390×844 dan layar desktop 1280 piksel.
- Muat ulang dengan sesi pembaca yang masih tersimpan.
- Header, navigasi bawah, gambar, overflow horizontal, dan fallback gambar.

## Hasil

| eBook | Ponsel | Desktop | Gambar | Overflow horizontal | Navigasi bawah | Status |
|---:|---|---|---|---|---|---|
| 001 | 390 px | 1280 px | 1/1 termuat, 1600 px | Tidak ada | Tetap terlihat | Lulus |
| 039 | 390 px | 1280 px | 1/1 termuat, 1600 px | Tidak ada | Tetap terlihat | Lulus |
| 053 | 390 px | 1280 px | 1/1 termuat, 1600 px | Tidak ada | Tetap terlihat | Lulus |

Pada lebar ponsel, ketiga komponen gambar berhenti pada lebar konten 339 piksel
dan tidak memperlebar halaman. Pada desktop, gambar mengikuti lebar area baca
masing-masing template. Tidak ada gambar yang masuk ke status gagal.

## Temuan dan perbaikan

Uji muat ulang awal menemukan urutan inisialisasi lama pada `engine.js` yang
dapat menjalankan katalog sebelum seluruh konstanta siap ketika sesi pembaca
masih tersimpan. Pemulihan sesi sudah dipindahkan ke akhir engine. Uji ulang
ketiga eBook pada ponsel dan desktop lulus tanpa halaman kosong.

## Verifikasi R2

Ketiga aset telah diunggah ke bucket `edumind-audio` pada prefix
`ebook-edumind/`. Domain produksi `media.edumind.id` aktif dan setiap URL
merespons `HTTP 200` dengan `Content-Type: image/webp`; ukuran byte seluruhnya
cocok dengan manifest lokal.
