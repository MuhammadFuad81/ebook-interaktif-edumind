# QA Produksi — eBook Interaktif 061

Tanggal: 23 Oktober 2026. Naskah sekitar 9.000 kata, 11 bab, 20 halaman navigasi, 33 pertanyaan kuis mini, 20 pertanyaan asesmen pemahaman pendidik.

## Materi dan batas penggunaan

- Seluruh 21 slide dan 514 segmen transkrip hingga 01:32:02 ditelaah. Peta materi dan semua kasus substantif tersedia dalam audit sumber.
- Gaya buku, bukan laporan webinar; tanpa identitas pembicara/peserta dalam prosa pembaca.
- Pustaka Video memakai `xGg1_VjBF40`; tidak ada rujukan pendukung per bab.
- Klaim diagnosis singkat, diet universal, prognosis ADHD, dan inferensi hormon/identitas diluruskan. Batas edukasi/asesmen/diagnosis dan jalur keselamatan dijelaskan.
- Refleksi/rencana aksi meminta data samaran. Penyimpanan browser tidak dipromosikan sebagai sistem berkas klinis.

## Uji pra-publikasi — lulus

Chrome desktop 1366×900 dan ponsel 390×844, browser pengujian terpisah.

- Label `Ebook Interaktif - 061`, username `edumind`, password `ebook061`, identitas penyimpanan unik.
- Password salah ditolak. Pratinjau Bab 1 bekerja, Bab 2 terkunci, login resmi membuka seluruh bab.
- Setiap bab memuat pengantar, pembahasan, refleksi, 3 kuis mini, dan tombol penyelesaian.
- Jawaban kuis mendapat umpan balik; penandaan bab dan ringkasan tersimpan.
- Asesmen memuat 20 soal. Skor tidak muncul sebelum tombol pemeriksaan ditekan; semua jawaban benar menghasilkan 100.
- Refleksi dan rencana pulih setelah reload; penambahan baris dan jumlah rencana lengkap bekerja.
- Tidak ada luapan horizontal pada sebelas bab. Tabel mempunyai wadah gulir sendiri.
- Header/footer fixed pada viewport saat gulir; drawer ponsel dapat memilih bab.
- Cover mempertahankan proporsi 2:3, ilustrasi 16:9 dan lebar maksimal 680px.
- Tidak ada error JavaScript dalam laporan akhir uji.
- Tipografi memakai baseline 051 (+2pt), safe area dan viewport zoom terbatas tetap dipertahankan.

## Aset R2 — terverifikasi

Bucket `edumind-audio`; prefix `ebook-edumind/061-akar-psikologis-anak/`; domain `media.edumind.id`.

| Berkas | Dimensi | Byte | Hasil |
|---|---|---:|---|
| cover.webp | 1200×1800 | 237636 | HTTP200, image/webp, SHA-256 cocok |
| chapter-01.webp | 1600×900 | 106962 | HTTP200, image/webp, SHA-256 cocok |
| chapter-04.webp | 1600×900 | 124406 | HTTP200, image/webp, SHA-256 cocok |
| chapter-07.webp | 1600×900 | 147974 | HTTP200, image/webp, SHA-256 cocok |
| chapter-08.webp | 1600×900 | 124284 | HTTP200, image/webp, SHA-256 cocok |

Ilustrasi dibuat dengan ImageGen bawaan dan disimpan lokal sebelum diunggah. Adegan hanya satu gender; seluruh tokoh perempuan/putri memakai jilbab panjang. Pemeriksaan visual dilakukan pada kelima hasil. Tidak ada gambar yang menjadi diagnosis atau mempermalukan anak.

Purge Cloudflare dilakukan hanya terhadap lima URL gambar, masing-masing dengan dan tanpa query versi, bukan purge seluruh domain. Sepuluh URL terlihat dalam Recently Purged setelah operasi selesai. Bukti disimpan lokal.

## Publikasi

HTML dan JS telah diterbitkan ke GitHub, kemudian purge jsDelivr berstatus finished (provider CF dan FY). HTML, content.js, catatan.js, katalog, dan manifest publik HTTP200 serta cocok dengan versi lokal setelah normalisasi akhir baris. Uji pembaca dengan JS/gambar publik telah lulus pada desktop 1366×900 dan ponsel 390×844.

Uji tambahan lokal pada lebar 320, 768, dan 1920 piksel lulus untuk seluruh 20 halaman, tidak ada luapan, FAQ, persistensi mode gelap, penolakan pemeriksaan asesmen belum lengkap, dan umpan balik kuis salah. Semua bab terlihat saat cetak, seluruh gambar dimuat sebelum dialog cetak, serta halaman terkunci/katalog tidak ikut dicetak. Tautan buka langsung YouTube disediakan bila embed tidak dapat diputar. Perbaikan cetak khusus 061 akan diverifikasi kembali dari versi publik terakhir.

HTML harus ditempel pengguna ke WSP Growva; tidak ada klaim bahwa halaman WSP telah diperbarui otomatis.

Transkrip mentah dan slide asli hanya diarsipkan lokal, tidak dikirim ke repositori publik. Perubahan lokal terdahulu pada nama HTML 060 tidak diikutkan ke commit 061. Engine bersama tidak diubah.
