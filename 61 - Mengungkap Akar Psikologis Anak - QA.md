# QA Produksi — eBook Interaktif 061

Tanggal: 23 Oktober 2026. Naskah sekitar 9.000 kata, 11 bab, 20 halaman navigasi, 33 pertanyaan kuis mini, 20 pertanyaan asesmen pemahaman pendidik.

## Revisi visual lengkap — versi 20261023-2

Seluruh Bab 1–11 kini mempunyai tepat satu gambar berbeda. Tujuh aset ditambahkan pada Bab 2, 3, 5, 6, 9, 10, dan 11; empat gambar bab sebelumnya serta cover dipertahankan tanpa perubahan piksel. Total 12 aset: cover, sembilan ilustrasi adegan, dan dua infografis. Perbandingan seluruh BOOK_CONTENT setelah menghapus markup figure membuktikan prosa, kuis, refleksi, dan bagian pendamping tidak berubah.

Semua gambar bab teruji berproporsi 16:9, lebar maksimal 680px, alt/caption tersedia, loading lazy dan decoding async. Uji publik menelusuri seluruh 11 gambar pada desktop 1366×900 dan ponsel 390×844. Uji tambahan 320/768/1920 lulus, termasuk cetak yang memuat seluruh gambar. Tidak ada error JavaScript, luapan halaman, atau kegagalan dekode gambar dalam laporan akhir.

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
| chapter-02.webp | 1600×900 | 155782 | HTTP200, image/webp, SHA-256 cocok |
| chapter-03.webp | 1600×900 | 148834 | HTTP200, image/webp, SHA-256 cocok |
| chapter-04.webp | 1600×900 | 124406 | HTTP200, image/webp, SHA-256 cocok |
| chapter-05.webp | 1600×900 | 136468 | HTTP200, image/webp, SHA-256 cocok |
| chapter-06.webp | 1600×900 | 174424 | HTTP200, image/webp, SHA-256 cocok |
| chapter-07.webp | 1600×900 | 147974 | HTTP200, image/webp, SHA-256 cocok |
| chapter-08.webp | 1600×900 | 124284 | HTTP200, image/webp, SHA-256 cocok |
| chapter-09.webp | 1600×900 | 115784 | HTTP200, image/webp, SHA-256 cocok |
| chapter-10.webp | 1600×900 | 136632 | HTTP200, image/webp, SHA-256 cocok |
| chapter-11.webp | 1600×900 | 144646 | HTTP200, image/webp, SHA-256 cocok |

Ilustrasi dibuat dengan ImageGen bawaan dan disimpan lokal sebelum diunggah. Adegan hanya satu gender; seluruh tokoh perempuan/putri memakai jilbab panjang. Pemeriksaan visual dilakukan pada seluruh hasil, termasuk tujuh tambahan. Tidak ada gambar yang menjadi diagnosis atau mempermalukan anak. Label kedua infografis diperiksa terhadap materi bab; tidak ada data atau skor klinis rekaan.

Purge Cloudflare revisi lengkap mengirimkan 24 URL: cover dan 11 gambar bab, masing-masing dengan dan tanpa query versi 20261023-2. Bukan purge seluruh domain dan tidak menghapus objek R2. Operasi selesai, dialog menutup, serta 10 entri terakhir terlihat dalam Recently Purged (riwayat UI dibatasi). Daftar 24 URL dan bukti tangkapan layar disimpan lokal.

## Publikasi

HTML dan JS telah diterbitkan ke GitHub, kemudian purge jsDelivr berstatus finished (provider CF dan FY). HTML, content.js, catatan.js, katalog, dan manifest publik HTTP200 serta cocok dengan versi lokal setelah normalisasi akhir baris. Uji pembaca dengan JS/gambar publik telah lulus pada desktop 1366×900 dan ponsel 390×844.

Uji tambahan lokal pada lebar 320, 768, dan 1920 piksel lulus untuk seluruh 20 halaman, tidak ada luapan, FAQ, persistensi mode gelap, penolakan pemeriksaan asesmen belum lengkap, dan umpan balik kuis salah. Semua bab terlihat saat cetak, seluruh gambar dimuat sebelum dialog cetak, serta halaman terkunci/katalog tidak ikut dicetak. Tautan buka langsung YouTube disediakan bila embed tidak dapat diputar.

Alias jsDelivr @main sempat mempertahankan rilis sebelumnya meskipun purge finished. Karena itu, pemanggilan content.js dan catatan.js khusus 061 dipatok ke commit rilis gambar lengkap `2f0e37a9db0bfc5660bc82fecbc5333fbd347f9d` pada repositori yang sama, dengan query versi 20261023-2. Ref HTML pengiriman dicatat pada ebooks.json setelah shell diterbitkan. Engine bersama tetap @main. Sumber utama tetap repositori ebook-interaktif-edumind; pembaruan JS khusus buku berikutnya harus sekaligus memperbarui ref pengiriman pada HTML. Ini penetapan versi berkas, bukan penggantian engine atau hosting.

Uji akhir menggunakan HTML final dan URL JS publik yang benar-benar dipanggil HTML: pengujian penuh desktop 1366×900 dan ponsel 390×844 lulus, serta pengujian tambahan 320/768/1920 lulus untuk seluruh 20 halaman, mode gelap, FAQ, validasi asesmen belum lengkap, umpan balik jawaban salah, dan kesiapan cetak. URL rilis CDN dan pemuat JS HTTP200 serta checksum cocok. Tidak mengklaim alias @main sudah propagasi penuh saat penyerahan; HTML siap tempel tidak bergantung pada alias tersebut untuk JS khusus buku.

HTML terbaru harus menggantikan seluruh HTML lama pada WSP Growva agar halaman memanggil JS dengan 11 gambar. Kredensial tetap edumind / ebook061. Tidak ada klaim bahwa halaman WSP telah diperbarui otomatis.

Transkrip mentah dan slide asli hanya diarsipkan lokal, tidak dikirim ke repositori publik. Perubahan lokal terdahulu pada nama HTML 060 tidak diikutkan ke commit 061. Engine bersama tidak diubah.

## Perbaikan login dengan Enter — 23 Oktober 2026

HTML 061 kini menangani Enter pada kolom username maupun password melalui fungsi login yang sama dengan tombol masuk. Penanganan hanya berlaku pada gerbang login 061 yang terlihat; penekanan berulang dan komposisi teks diabaikan. Engine bersama, kredensial, isi buku, serta seluruh 11 gambar bab tidak diubah.

Uji file lokal dan HTTP pada desktop 1366×900 serta ponsel 390×844 lulus: Enter dari kedua kolom membuka buku dengan kredensial benar, password salah tetap ditolak, dan login melalui klik mouse tetap bekerja. Tidak ditemukan error JavaScript. HTML Growva harus ditempel ulang untuk menerapkan perbaikan ini pada halaman WSP.
