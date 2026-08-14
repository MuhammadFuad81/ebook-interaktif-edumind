# Standar eBook Interaktif Edumind

Dokumen ini menjadi acuan tetap untuk eBook interaktif Edumind mulai nomor 56. Jika ada perbedaan dengan briefing lama, standar ini yang dipakai.

## Identitas dan penamaan

- Istilah resmi adalah **eBook interaktif**. Jangan gunakan istilah webbook, web-book, atau variasinya pada materi yang terlihat pembaca.
- Nama berkas baru diawali angka urut agar mudah diurutkan, misalnya `56-judul-ebook-untuk-growva.html` dan `56-content-judul-ebook.js`.
- Nomor eBook ditampilkan pada cover dan metadata halaman.
- Sumber media ditempatkan sebagai **Pustaka Video**, bukan daftar narasumber, laporan kegiatan, sumber dan rujukan, atau rujukan pendukung per bab.

## Prinsip editorial

- Video, audio, transkrip, dan slide adalah bahan baku isi, bukan urutan baku bab.
- Arsitektur buku mengikuti perjalanan logis pembaca: memahami masalah, membedakan konsep, mengambil keputusan, menerapkan, lalu mengevaluasi.
- Gaya bahasa semi-formal, mengalir, hangat, mudah dipahami, dan tetap presisi. Naskah tidak boleh terasa seperti transkrip, laporan acara, promosi narasumber, atau keluaran AI.
- Jangan menyebut nama pembicara atau menggantungkan argumen pada otoritas pembicara di dalam bab.
- Hindari pola mekanis: jumlah subbab seragam, paragraf dengan panjang identik, daftar berulang, pembuka klise, dan simpulan yang hanya mengulang isi.
- Panjang pembahasan mengikuti kebutuhan materi. Keterbatasan WSP tidak boleh memotong penjelasan penting; konten utama disimpan dalam JavaScript di GitHub.
- Klaim ilmiah, kesehatan, hukum, dan kebijakan harus diperiksa ulang pada sumber primer atau lembaga resmi yang mutakhir. Bahan sumber yang keliru atau terlalu menyederhanakan harus diluruskan.
- Jangan menampilkan frasa “rujukan pendukung” atau tautan referensi di setiap bab. Referensi digunakan dalam proses editorial; halaman pembaca hanya memuat Pustaka Video kecuali pengguna meminta bentuk lain.
- Pada topik kesehatan atau psikologi, bedakan edukasi, skrining, asesmen, dan diagnosis. Sertakan batas kewenangan serta anjuran rujukan yang bertanggung jawab.

## Struktur pengalaman membaca

- Cover, kata pengantar, bagian dan bab, Pustaka Video, asesmen komprehensif, rencana aksi, ringkasan pencapaian, FAQ, penutup, dan katalog.
- Setiap bab idealnya memiliki pengantar, beberapa subpembahasan yang koheren, refleksi, kuis mini, dan tombol penyelesaian.
- Jumlah bab ditentukan oleh kebutuhan substansi, bukan target angka bulat.
- Pertanyaan kuis menguji pemahaman dan pengambilan keputusan, bukan hafalan istilah saja.
- Rencana aksi harus spesifik terhadap topik buku dan dapat dikerjakan pembaca.
- Siapkan berkas prompt visual terpisah untuk ilustrasi atau infografis setiap bab.
- Simpan transkrip lengkap dan outline editorial sebagai artefak proyek bila sumbernya berupa audio atau video.

## UI/UX dan teknis

- Gunakan engine bersama dari repositori `MuhammadFuad81/ebook-interaktif-edumind`.
- HTML Growva dibuat ramping; konten panjang dimuat dari berkas JavaScript melalui jsDelivr.
- Header dan navigasi bawah harus `fixed`, selalu terlihat saat gulir, serta menghormati safe area perangkat.
- Cegah luapan horizontal dan pastikan tabel, kartu, gambar, video, serta judul panjang tetap rapi pada layar sempit.
- Pertahankan batas zoom responsif yang telah dipakai mulai eBook 55: viewport dapat diperbesar secara terbatas tanpa merusak tata letak.
- Baseline tipografi adalah ukuran eBook 55 setelah kenaikan total **2 pt** dari engine bersama. Terapkan ke judul, subjudul, isi, tombol, tabel, label, dan komponen interaktif.
- Uji jumlah bab, navigasi, ID halaman, kuis, asesmen, tautan CDN, Pustaka Video, istilah terlarang, dan sintaks JavaScript sebelum publikasi.
- Setelah publikasi, lakukan purge cache jsDelivr untuk setiap berkas baru atau berubah dan gunakan versi query pada pemanggilan konten.

## Hasil akhir minimum

1. HTML bernomor yang siap ditempel ke WSP Single Full Page Growva.
2. JavaScript konten lengkap bernomor di GitHub.
3. Transkrip sumber lengkap.
4. Outline editorial final.
5. Prompt visual per bab.
6. Verifikasi lokal, commit, push, dan purge CDN.
