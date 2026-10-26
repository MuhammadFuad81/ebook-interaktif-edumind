# QA Produksi — eBook Interaktif 056

Formula Tes Diagnostik Kolektif untuk Memetakan Gaya Belajar & Potensi Siswa.

## Struktur dan materi

- 13 bab dalam tiga bagian, urutan mengikuti kebutuhan pembaca; 39 kuis mini dan 20 soal asesmen pemahaman pendidik.
- Cover, kata pengantar, Pustaka Video, rencana pilot 30 hari, ringkasan, FAQ, penutup, dan katalog generik engine. Total 22 halaman navigasi.
- 13 halaman slide dan 693 segmen VTT lengkap hingga 01:50:10.950 dipetakan pada audit sumber. Pengulangan, salam, gangguan audio, identitas dan promosi peserta/pembicara tidak menjadi prosa buku.
- VAK tidak mengunci metode; bobot, persentase, dan contoh tugas tidak diklaim baku. Diagnosis, penggunaan alat psikologi, privasi, serta akses inklusif diberi batas jelas.
- Transkrip serta PDF asli diarsipkan lokal; tidak dikirim sebagai data peserta ke repositori publik.

## Uji lokal yang telah lulus

Chrome desktop 1366×900 dan ponsel 390×844 dengan JS buku dan gambar lokal serta engine bersama dari CDN.

- Label `Ebook Interaktif - 056`, kredensial mengikuti permintaan pengguna, ID penyimpanan `tes-diagnostik-kolektif-056` tidak berbenturan dengan buku Bertaraf Global.
- Password salah ditolak; pratinjau Bab 1 berjalan dan Bab 2 terkunci; login dengan Enter membuka akses penuh.
- Tiga kuis per bab, umpan balik benar/salah, penandaan selesai dan ringkasan.
- Refleksi dan dua baris rencana pulih setelah reload; baris lengkap dihitung.
- Asesmen 20 soal; skor baru tampil setelah pemeriksaan dan seluruh jawaban benar menghasilkan 100.
- Tepat satu ilustrasi per bab; proporsi 16:9 dan lebar maksimal 680px. Cover 2:3. Alt, caption, lazy loading dan decoding async tersedia.
- Header dan footer fixed saat gulir; daftar isi ponsel memilih bab; tidak ada luapan halaman atau error JavaScript.
- Baseline font +2pt dari engine, sama dengan shell 061; catatan akses login mengikuti ukuran baku terbaru. Batas viewport zoom 1.25 dipertahankan.

Uji tambahan 320/768/1920 piksel telah lulus untuk semua 22 halaman: tidak ada halaman kosong/luapan, FAQ, persistensi mode gelap, penolakan pemeriksaan asesmen belum lengkap, umpan balik kuis salah, serta kesiapan cetak. Semua 13 bab terlihat dalam mode cetak dan seluruh gambar dimuat sebelum dialog; halaman terkunci dan katalog tidak ikut dicetak.

## Aset

Cover + 13 ilustrasi berbeda dibuat dengan ImageGen bawaan, diperiksa visual, disalin ke workspace, lalu dioptimalkan menjadi WebP. Bab ganjil hanya tokoh laki-laki; bab genap hanya tokoh perempuan, seluruhnya berjilbab panjang. Tidak ada adegan percakapan dekat lintas gender. Cover tanpa tokoh. Tidak ada foto siswa nyata atau identitas pada berkas contoh.

14 aset terunggah ke `edumind-audio/ebook-edumind/056-tes-diagnostik-kolektif/`; seluruh URL `media.edumind.id` HTTP200, MIME image/webp, dan SHA-256 cocok dengan berkas lokal. Rincian dimensi dan checksum disimpan pada manifest khusus buku.

Purge Cloudflare selesai melalui dashboard Custom Purge untuk 28 URL: 14 aset dengan dan tanpa query `v=20261026-1`. Dialog selesai dan Recently Purged menampilkan sepuluh URL terakhir buku 056. Tidak menggunakan Purge Everything, tidak menghapus objek, dan tidak mengubah izin/pengaturan domain. Percobaan API cache sebelumnya ditolak HTTP401; upload R2 tetap berhasil. Bukti layar disimpan lokal.

## Penomoran dan lingkup

Buku baru memakai 056 atas keputusan pengguna. Berkas, entri katalog, dan aset eBook Bertaraf Global lama tidak ditimpa atau diganti nomor dalam pekerjaan ini. Normalisasi naming seluruh koleksi ditunda ke tahap berikutnya; katalog induk masih menampilkan pemetaan lama. Manifest khusus 056 menjadi inventaris rilis baru sementara. Validator koleksi lama yang mengunci 61 berkas/nomor bukan sertifikasi untuk keadaan transisi ini; buku baru diuji dengan validator khusus dan uji browser. Engine bersama tidak diubah. Perubahan nama HTML 060 yang sudah ada sebelumnya tidak dimasukkan ke commit.

## Publikasi

Status pada catatan awal ini: uji lokal dan R2 lulus; penerbitan JS/HTML, purge jsDelivr, dan pengujian pemuat publik dilakukan pada tahap final berikutnya. Halaman WSP tidak diperbarui otomatis: pengguna menerima HTML siap tempel.
