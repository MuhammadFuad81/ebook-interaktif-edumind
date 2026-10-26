# Error Log Produksi eBook Interaktif Edumind

Log ini mencatat kegagalan yang memerlukan tindakan, bukan peringatan kosmetik.
Gunakan satu baris per kejadian dan jangan menghapus riwayat yang sudah selesai.

| Waktu (UTC+7) | eBook | Tahap | Tingkat | Pesan | Tindakan | Status |
|---|---:|---|---|---|---|---|
| 2026-08-21 | 001, 039, 053 | Runtime/reload | ERROR | Sesi tersimpan memanggil katalog sebelum konstanta engine selesai diinisialisasi. | Pemulihan sesi dipindahkan ke akhir engine; uji ulang mobile dan desktop lulus. | Selesai |
| 2026-08-21 | 001, 039, 053 | Unggah R2 | BLOCKER | Dashboard Cloudflare meminta otorisasi dan login sebelum bucket dapat diakses. | Pengguna menyelesaikan login; tiga WebP berhasil diunggah dan URL publik terverifikasi. | Selesai |
| 2026-10-14 | 060 | Purge R2 CDN | ERROR | Token OAuth Wrangler dapat mengunggah R2 tetapi tidak memiliki izin purge cache domain. | Purge URL khusus melalui sesi dashboard Cloudflare yang telah login; delapan URL terkonfirmasi pada Recently Purged. | Selesai |
| 2026-10-14 | 060 | Visual QA | ERROR | Atribut tinggi intrinsik cover membuat gambar memanjang pada lebar CSS 320px. | Terapkan height:auto dan aspect-ratio:2/3; batasi visual bab 680px; verifikasi desktop/mobile. | Selesai |
| 2026-10-23 | 061 | Cetak/PDF | ERROR | Pola cetak bersama dapat menyertakan halaman terkunci dan mempertahankan transparansi elemen animasi yang belum dibuka. Gambar lazy juga perlu dimuat sebelum cetak. | Perbaikan khusus HTML/catatan.js 061: tampilkan elemen cetak, sembunyikan halaman terkunci/katalog saat cetak, muat gambar sebelum dialog; engine bersama tidak diubah. | Selesai |
| 2026-10-23 | 061 | Cache jsDelivr | ERROR | Alias @main masih mengembalikan versi sebelumnya setelah purge finished; GitHub raw dan URL commit sudah benar. | HTML 061 memanggil JS khusus buku pada commit final teruji. Purge @main tetap dilakukan; pengiriman rilis dicocokkan checksum dan diuji melalui URL commit. | Selesai |
| 2026-10-26 | 062 | Enter pada login WSP | ERROR | Pada Growva aktual, marker handler ada tetapi Enter tidak memicu login; pengujian lokal sebelumnya belum mewakili WSP. | Delegasi window capture yang khusus dua input login memanggil tombol mouse yang sama; uji WSP aktual, gate diganti, desktop/ponsel, kedua kolom, numpad, kredensial salah dan anti-duplikasi lulus. Penerapan WSP memerlukan tempel ulang HTML terbaru. | Kode diperbaiki; menunggu pengguna memasang HTML WSP |

## Tingkat masalah

- `BLOCKER`: menghentikan publikasi atau membuat eBook tidak dapat digunakan.
- `ERROR`: satu aset/fitur gagal, tetapi proses lain masih dapat berjalan.
- `WARNING`: perlu ditinjau sebelum batch berikutnya, tidak memblokir pilot.
