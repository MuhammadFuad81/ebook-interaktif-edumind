/* Konten eBook Interaktif 59 — SPP, BOS, DONASI */
(() => {
  const section = ([heading, paragraphs, extra = ""]) =>
    "<h4>" + heading + "</h4>" + paragraphs.map(paragraph => "<p>" + paragraph + "</p>").join("") + extra;

  const note = (title, body) =>
    '<div style="margin:22px 0;padding:18px 20px;border-left:5px solid var(--accent);background:var(--accent-tint);border-radius:0 14px 14px 0">' +
    '<strong style="font-family:var(--font-display);color:var(--heading)">' + title + '</strong><p style="margin:8px 0 0">' + body + '</p></div>';

  const miniQuiz = questions =>
    '<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>' +
    questions.map(question => '<div class="quiz-q"><p>' + question.q + '</p>' +
      question.o.map((option, index) => '<button class="quiz-opt" onclick="answerQuiz(this,' + (index === question.c) + ')">' + option + '</button>').join('') + '</div>').join('') + '</div>';

  const chapter = (number, data) =>
    '<p class="eyebrow reveal">Bab ' + number + '</p>' +
    '<h2 class="reveal">' + data.title + '</h2>' +
    '<p class="lede reveal">' + data.lede + '</p>' +
    (data.visual || '') +
    '<div class="card reveal">' + data.sections.map(section).join('') + '</div>' +
    '<div class="reflect-box reveal"><h3>Refleksi</h3><p>' + data.reflection +
    '</p><textarea placeholder="Tulis pengamatan atau rencana Anda di sini..."></textarea></div>' +
    miniQuiz(data.quiz) +
    '<button class="done-btn" id="doneBtn-bab' + number + '" onclick="markDone(\'bab' + number + '\')">✓ Tandai Bab Ini Selesai</button>' +
    '<p class="seal" id="seal-bab' + number + '">✓ Bab ' + number + ' selesai dibaca</p>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  const chapters = [
    {
      title: "Satu Misi, Tiga Aliran Dana",
      lede: "BOS, SPP, dan donasi sama-sama menopang pendidikan, tetapi masing-masing membawa sumber, batas penggunaan, bukti, dan pihak yang berhak meminta pertanggungjawaban. Pemisahan membuat satu misi sekolah tetap utuh tanpa mengaburkan amanah setiap dana.",
      visual: '<figure class="chapter-visual"><img src="https://media.edumind.id/ebook-edumind/059-spp-bos-donasi/chapter-01.webp?v=20260929-1" alt="Tim keuangan perempuan berjilbab panjang menata tiga kelompok dokumen BOS, SPP, dan donasi secara terpisah" loading="lazy" decoding="async"><figcaption>Transparansi dimulai ketika BOS, SPP, dan donasi dapat ditelusuri sebagai tiga aliran yang berbeda dalam satu sistem keuangan sekolah.</figcaption></figure>',
      sections: [
        ["Kolam Keruh dan Saldo Semu", [
          "Pencampuran dana sering terasa praktis pada awalnya. Satu rekening mudah dipantau dan pengeluaran tampak dapat dibayar dari saldo yang tersedia. Namun angka saldo tidak lagi menjawab pertanyaan paling penting: berapa kas yang bebas untuk operasional, berapa dana pemerintah yang hanya boleh digunakan menurut petunjuk teknis, dan berapa donasi yang masih terikat pada beasiswa atau pembangunan.",
          "Dari sinilah muncul defisit semu dan surplus semu. Rekening terlihat besar karena menyimpan dana proyek, sementara SPP sebenarnya tertahan sebagai piutang. Sebaliknya, sekolah merasa kekurangan padahal sebagian dana berada di rekening lain yang memang belum boleh digunakan. Laporan menjadi ambigu, keputusan program keliru, dan jejak audit sulit diikuti."
        ]],
        ["Pemisahan Bukan Sekadar Tiga Rekening", [
          "Rekening terpisah penting, tetapi hanya memisahkan tempat kas. Sistem yang sehat juga membedakan akun, sumber dana, program atau unit, pembatasan pemberi dana, bukti, alur persetujuan, serta laporan. Sebuah pembelian komputer, misalnya, dapat masuk akun aset yang sama tetapi dibiayai oleh sumber berbeda dan memiliki kewajiban pelaporan berbeda.",
          "Karena itu, setiap transaksi perlu menjawab lima pertanyaan: uang berasal dari mana, untuk tujuan apa, masuk ke akun apa, program atau unit mana yang menerima manfaat, dan siapa yang menyetujui. Ketika jawaban ini tertanam dalam dokumen dan sistem, pemisahan tidak bergantung pada ingatan bendahara."
        ]],
        ["Amanah sebagai Arsitektur", [
          "Dalam sekolah Islam, amanah keuangan bukan hanya sikap pribadi. Ia perlu diterjemahkan menjadi struktur: wewenang yang terpisah, bukti yang dapat diperiksa, rekonsiliasi, dan pelaporan yang jujur. Niat baik tidak cukup untuk mencegah kesalahan input, duplikasi pembayaran, penggunaan di luar akad, atau keputusan yang tidak memiliki dasar.",
          "Tujuan akhirnya bukan membuat administrasi rumit. Sistem yang baik justru mengurangi kebingungan karena setiap dana memiliki jalur yang jelas sejak diterima, disimpan, dibelanjakan, dicatat, diperiksa, hingga dilaporkan."
        ], note("Uji cepat", "Ambil satu saldo bank hari ini. Dapatkah tim menjelaskan bagian yang berasal dari BOS, SPP, dan donasi; kewajiban yang belum dibayar; serta saldo yang benar-benar tersedia untuk keputusan baru?")]
      ],
      reflection: "Di titik mana pencampuran dana paling mungkin terjadi di sekolah Anda: rekening, bukti, kode akun, pengadaan, kas kecil, atau laporan? Tuliskan satu contoh nyata.",
      quiz: [
        {q:"Saldo bank besar selalu berarti sekolah memiliki banyak dana bebas?",o:["Ya","Tidak, saldo dapat memuat dana terikat dan kewajiban","Ya, jika rekening atas nama sekolah"],c:1},
        {q:"Pemisahan dana yang utuh mencakup…",o:["Rekening saja","Rekening, kode, dokumen, otorisasi, dan laporan","Warna map saja"],c:1},
        {q:"Tujuan utama segregasi adalah…",o:["Memperbanyak administrasi","Menjaga tujuan, kepatuhan, dan keterlacakan setiap dana","Menghapus kebutuhan audit"],c:1}
      ]
    },
    {
      title: "Empat Dimensi Pencatatan yang Tidak Boleh Tertukar",
      lede: "Akun menjelaskan apa yang terjadi; sumber dana menjelaskan uang siapa yang membiayai; program menjelaskan untuk kegiatan apa; dan unit menjelaskan di mana manfaat terjadi. Satu nomor akun tidak perlu dipaksa memikul seluruh informasi.",
      sections: [
        ["Akun Menjawab Jenis Transaksi", [
          "Bagan akun mengelompokkan aset, kewajiban, aset neto, pendapatan, dan beban. Kas di bank, piutang SPP, utang pajak, pendapatan donasi, dan beban pembelajaran memiliki sifat yang berbeda sehingga memerlukan akun berbeda. Struktur ini membantu transaksi bermuara pada laporan posisi keuangan, laporan penghasilan komprehensif atau aktivitas, perubahan aset neto, dan arus kas sesuai kerangka pelaporan yang diterapkan yayasan.",
          "Kesalahan umum adalah membuat akun terlalu rinci hingga setiap program, unit, dan sumber dana dijadikan nomor akun baru. Hasilnya ribuan kode sulit dipelihara. Sebaliknya, akun yang terlalu umum membuat biaya gaji, buku, dan kegiatan bercampur. Prinsipnya: akun perlu cukup stabil untuk menjelaskan sifat ekonomi transaksi."
        ]],
        ["Sumber Dana dan Pembatasan Menjawab Amanah", [
          "Kode sumber dana membedakan BOS, SPP, donasi, hibah, atau sumber lain. Kode pembatasan membedakan dana tanpa pembatasan dari pemberi sumber daya dan dana dengan pembatasan, misalnya hanya untuk beasiswa atau pembangunan. Donasi tidak otomatis selalu terikat; penentuannya adalah akad atau komunikasi yang dapat dibuktikan.",
          "Sekolah juga perlu membedakan pembatasan eksternal dari keputusan internal. Yayasan dapat mengalokasikan dana umum untuk laboratorium, tetapi alokasi internal itu dapat diubah melalui otorisasi yang sah. Pembatasan donatur tidak boleh diubah sepihak."
        ]],
        ["Program, Unit, dan Proyek Menjawab Manfaat", [
          "Dimensi program menghubungkan transaksi dengan kegiatan seperti pembelajaran, kesiswaan, sarana, atau beasiswa. Dimensi unit membedakan TK, SD, SMP, SMA, pesantren, atau kantor yayasan. Dimensi proyek diperlukan untuk pembangunan gedung, pengadaan laboratorium, atau kampanye donasi yang memiliki awal, anggaran, dan hasil tersendiri.",
          "Dengan desain multidimensi, satu transaksi gaji dapat dicatat pada akun beban personalia, sumber SPP, program pembelajaran, dan unit SMP—tanpa membuat akun baru bernama ‘gaji guru SMP dari SPP’. Sistem sederhana dapat memakai kolom tambahan; perangkat lunak akuntansi dapat memakai kelas, proyek, cost center, atau tag."
        ], note("Kamus kode", "Buat satu kamus yang memuat kode, nama, definisi, contoh penggunaan, pemilik data, dan status aktif. Perubahan kode harus disetujui dan diberlakukan pada tanggal yang jelas.")]
      ],
      reflection: "Ambil satu transaksi bulan lalu dan tuliskan akun, sumber dana, program, unit, serta pembatasannya. Apakah sistem Anda menyimpan seluruh jawaban itu?",
      quiz: [
        {q:"Akun terutama menjelaskan…",o:["Jenis ekonomi transaksi","Nama petugas","Warna rekening"],c:0},
        {q:"Pembatasan donasi ditentukan oleh…",o:["Keinginan bendahara","Akad atau ketentuan pemberi dana","Saldo kas"],c:1},
        {q:"Dimensi unit membantu sekolah melihat…",o:["Lokasi atau jenjang penerima manfaat","Nomor kuitansi","Password bank"],c:0}
      ]
    },
    {
      title: "Membangun Bagan Akun yang Stabil dan Dapat Dipakai",
      lede: "Chart of Accounts yang baik tidak dinilai dari banyaknya kode, melainkan dari kemampuannya menampung transaksi nyata, menghasilkan laporan yang diperlukan, dan tetap konsisten ketika program berubah.",
      sections: [
        ["Mulai dari Laporan yang Ingin Dihasilkan", [
          "Sebelum menyusun nomor akun, tetapkan laporan yang dibutuhkan pengurus, kepala sekolah, regulator, dan pemberi dana. Dari sana tentukan kelompok utama: kas dan bank, piutang, persediaan, aset tetap, utang, pendapatan diterima di muka, aset neto, pendapatan, serta beban. Nomor hanyalah alat urut; definisi dan konsistensi lebih penting.",
          "Contoh sederhana dapat memakai 1xxx untuk aset, 2xxx untuk kewajiban, 3xxx untuk aset neto, 4xxx untuk pendapatan, dan 5xxx–6xxx untuk beban. Sekolah boleh memakai pola lain selama tidak tumpang tindih dan dipahami semua pengguna."
        ]],
        ["Akun Inti dan Akun Pembantu", [
          "Kas dan bank sebaiknya memiliki akun terpisah sesuai rekening nyata. Piutang SPP perlu buku pembantu per siswa, sedangkan akun kontrol di buku besar menampilkan totalnya. Donasi proyek perlu buku pembantu atau subledger yang menunjukkan penerimaan, penggunaan, sisa, dan komitmen. Aset tetap membutuhkan daftar rinci meskipun buku besar hanya menampilkan kelompok aset.",
          "Pemisahan buku pembantu mencegah COA membengkak. Nama setiap siswa, donatur, vendor, atau barang inventaris tidak perlu menjadi nomor akun. Identitas itu disimpan pada subledger dan direkonsiliasi dengan akun kontrol."
        ]],
        ["Tata Kelola Perubahan COA", [
          "Tetapkan siapa yang boleh membuat, menonaktifkan, atau menggabungkan akun. Larang penggunaan akun ‘lain-lain’ sebagai tempat sementara tanpa batas waktu. Setiap akun memiliki nama yang jelas, sifat saldo normal, laporan tujuan, sumber dana yang diizinkan, dan contoh transaksi.",
          "Saat mengganti sistem atau struktur, siapkan tabel pemetaan dari akun lama ke akun baru dan uji satu bulan transaksi. Jangan menghapus riwayat; nonaktifkan akun lama setelah saldo dipindahkan dengan jurnal yang disetujui."
        ], note("Contoh inti", "1.111 Bank BOS; 1.112 Bank Operasional/SPP; 1.113 Bank Donasi; 1.121 Piutang SPP; 2.102 Pendapatan Diterima di Muka; 2.103 Dana Titipan; 4.101 Pendapatan BOS; 4.102 Pendapatan SPP; 4.103 Donasi. Kode ini contoh, bukan format wajib.")]
      ],
      reflection: "Daftar tiga akun yang paling sering menjadi tempat ‘sementara’ atau ‘lain-lain’. Keputusan apa yang diperlukan agar transaksi tidak terus bersembunyi di sana?",
      quiz: [
        {q:"COA sebaiknya dirancang dari…",o:["Laporan dan transaksi yang diperlukan","Jumlah staf","Nama vendor"],c:0},
        {q:"Rincian piutang per siswa disimpan dalam…",o:["Akun baru per siswa","Buku pembantu yang direkonsiliasi ke akun kontrol","Catatan pribadi"],c:1},
        {q:"Saat akun tidak lagi dipakai…",o:["Hapus seluruh riwayat","Nonaktifkan setelah saldo dan pemetaan diselesaikan","Biarkan dipakai bebas"],c:1}
      ]
    },
    {
      title: "BOS: Patuh, Terlacak, dan Selaras dengan Rencana",
      lede: "Dana BOS bukan kas umum sekolah. Setiap rupiah bergerak di dalam kerangka perencanaan, komponen penggunaan, penatausahaan, pelaporan, dan pengawasan yang ditetapkan pemerintah serta diperbarui dari waktu ke waktu.",
      sections: [
        ["Mulai dari Regulasi dan ARKAS yang Berlaku", [
          "Untuk tahun anggaran 2026, pengelolaan BOSP mengacu pada regulasi terbaru dan ARKAS. Ketentuan mencakup komponen yang diizinkan, pengembangan perpustakaan atau buku, batas pembayaran honor menurut bentuk dan status satuan pendidikan, pemeliharaan sarana, jadwal penyaluran, serta pelaporan. Angka persentase tidak boleh disalin dari materi lama tanpa memeriksa juknis yang berlaku.",
          "Anggaran BOS perlu lahir dari kebutuhan dan rencana sekolah, kemudian diterjemahkan ke kegiatan serta rekening belanja yang sesuai. Belanja yang tidak direncanakan atau tidak memenuhi ketentuan bukan menjadi sah hanya karena barangnya bermanfaat."
        ]],
        ["Rekening dan Buku Pembantu BOS", [
          "Rekening BOS harus diperlakukan sebagai jalur khusus sesuai ketentuan. Penerimaan dicatat ketika masuk ke rekening untuk kebutuhan penatausahaan kas, sementara pengakuan dalam laporan keuangan yayasan mengikuti kebijakan akuntansi dan standar yang diterapkan. Perbedaan basis administrasi dan basis pelaporan harus direkonsiliasi, bukan dicampur.",
          "Buku Kas Umum, buku pembantu bank, kas tunai bila diizinkan, pajak, dan dokumen pendukung harus saling cocok. Nomor bukti, tanggal, vendor, kegiatan, rekening belanja, nilai, pajak, dan status pelaporan perlu dapat ditelusuri dari ARKAS ke rekening koran dan berkas fisik atau digital."
        ]],
        ["Pengadaan dan Jejak Audit", [
          "Setiap pembelian memiliki dasar kebutuhan, persetujuan, proses pengadaan sesuai ketentuan, bukti penerimaan barang atau jasa, invoice, pembayaran, perlakuan pajak, pencatatan aset bila relevan, dan dokumentasi penggunaan. Transaksi melalui sistem resmi tidak menghapus kewajiban memeriksa barang, kuantitas, kualitas, dan kewajaran harga.",
          "Lakukan tinjauan bulanan antara anggaran, realisasi, sisa dana, komitmen yang belum dibayar, dan tenggat pelaporan. Temuan kecil yang diselesaikan setiap bulan jauh lebih aman daripada koreksi besar menjelang audit."
        ], note("Jangan membekukan aturan", "eBook ini memberi arsitektur pengelolaan, bukan menggantikan juknis. Tetapkan satu pemilik proses yang wajib memeriksa regulasi, panduan ARKAS, dan ketentuan perpajakan terbaru sebelum anggaran atau transaksi dijalankan.")]
      ],
      reflection: "Pilih satu transaksi BOS. Dapatkah tim menelusurinya dari rencana dan kegiatan, ke bukti, rekening koran, buku kas, pajak, aset, dan pelaporan tanpa lompatan?",
      quiz: [
        {q:"Persentase penggunaan BOS sebaiknya diambil dari…",o:["Materi lama","Juknis dan panduan terbaru yang berlaku","Kebiasaan tahun lalu"],c:1},
        {q:"Transaksi BOS yang bermanfaat tetapi di luar ketentuan…",o:["Otomatis boleh","Tetap perlu dinilai terhadap rencana dan regulasi","Boleh jika saldo cukup"],c:1},
        {q:"Jejak audit menghubungkan…",o:["Rencana, bukti, pembayaran, pencatatan, dan laporan","Hanya kuitansi","Hanya mutasi bank"],c:0}
      ]
    },
    {
      title: "SPP: Menata Hak Tagih tanpa Kehilangan Empati",
      lede: "SPP membiayai denyut operasional sekolah, tetapi kas yang diterima tidak sama dengan pendapatan periode berjalan dan tagihan tidak sama dengan uang yang sudah tersedia. Sistem perlu menghubungkan data siswa, billing, piutang, penerimaan, keringanan, dan layanan keluarga.",
      sections: [
        ["Dari Tagihan hingga Penerimaan", [
          "Tetapkan matriks tarif berdasarkan jenjang, program, beasiswa, potongan saudara, atau kebijakan lain yang disetujui. Tagihan dibuat dari data siswa aktif dan tanggal efektif. Setiap perubahan tarif atau status memiliki dokumen persetujuan. Virtual Account membantu mengidentifikasi pembayar secara otomatis, tetapi transaksi tetap perlu dipadankan dengan tagihan dan akun siswa.",
          "Pembayaran untuk beberapa bulan, uang pangkal sebelum tahun ajaran, atau penerimaan di muka tidak otomatis menjadi pendapatan seluruhnya pada hari kas masuk. Perlakuannya mengikuti kebijakan akuntansi dan kewajiban layanan yang masih harus dipenuhi. Pisahkan kas diterima, pendapatan periode, dan liabilitas pendapatan diterima di muka."
        ]],
        ["Piutang, Cadangan, dan Hapus Buku", [
          "Buku pembantu piutang menampilkan saldo per siswa, umur tagihan, janji bayar, keringanan, dan tindakan penagihan. Totalnya direkonsiliasi dengan akun kontrol piutang. Sekolah menetapkan kebijakan penyisihan berdasarkan pengalaman historis dan kondisi kini, bukan persentase asal. Hapus buku membutuhkan otorisasi dan dokumentasi; penghapusan akuntansi tidak selalu menghapus hak tagih hukum.",
          "Jika piutang yang telah dihapus kemudian dibayar, pencatatan pemulihan harus mengikuti kebijakan akuntansi yang konsisten. Jangan menyembunyikan tunggakan dengan terus membawa angka bruto tanpa menilai keterpulihan, dan jangan pula menghapusnya hanya untuk memperindah laporan."
        ]],
        ["Penagihan Humanis dan Solusi", [
          "Pengingat dikirim secara pribadi, jelas, dan sopan. Jika belum ada respons, lakukan percakapan untuk memahami kendala, bukan mempermalukan murid. Kunjungan rumah dapat menjadi sarana silaturahmi dan asesmen kemampuan bayar bila dilakukan dengan adab, privasi, dan batas peran yang tepat.",
          "Keluarga yang sungguh membutuhkan dapat diarahkan pada skema cicilan, keringanan, atau beasiswa dari dana yang memang dialokasikan untuk tujuan itu. Keputusan bantuan tidak boleh dilakukan diam-diam melalui penghapusan tagihan; perlu kriteria, persetujuan, dan pencatatan yang melindungi martabat sekaligus keadilan."
        ], note("Pisahkan fungsi", "Petugas yang mengubah tarif atau potongan sebaiknya berbeda dari penerima kas dan pencatat. Laporan perubahan tarif, pembatalan tagihan, dan penerimaan tanpa pasangan ditinjau oleh atasan secara berkala.")]
      ],
      reflection: "Apakah saldo piutang SPP dapat direkonsiliasi sampai ke masing-masing siswa? Berapa penerimaan tanpa identitas, potongan tanpa persetujuan, dan tagihan lama yang belum dinilai keterpulihannya?",
      quiz: [
        {q:"Uang pangkal diterima sebelum layanan dimulai selalu langsung menjadi pendapatan?",o:["Ya","Tidak, perlu melihat kewajiban layanan dan kebijakan akuntansi","Ya, jika tunai"],c:1},
        {q:"Virtual Account membantu terutama dalam…",o:["Mengidentifikasi pembayaran","Menghapus piutang","Mengganti rekonsiliasi"],c:0},
        {q:"Penagihan humanis berarti…",o:["Tidak pernah menagih","Menjaga privasi, memahami kondisi, dan menawarkan solusi yang terdokumentasi","Menagih melalui murid"],c:1}
      ]
    },
    {
      title: "Donasi: Menjaga Akad dari Penerimaan hingga Dampak",
      lede: "Donasi membawa kepercayaan. Sekolah perlu membedakan dana dengan dan tanpa pembatasan, mendokumentasikan akad, serta melaporkan penggunaan dan hasil tanpa mengubah tujuan secara sepihak.",
      sections: [
        ["Akad Menjadi Sumber Kebenaran", [
          "Formulir, surat, proposal, pesan tertulis, perjanjian, atau ketentuan kampanye perlu menjelaskan tujuan, periode, biaya yang boleh dibebankan, mekanisme perubahan, perlakuan sisa, dan bentuk pelaporan. Istilah umum seperti ‘untuk sekolah’ berbeda dari ‘khusus beasiswa kelas VII’ atau ‘pembangunan laboratorium’. Ketidakjelasan harus diselesaikan sebelum dana digunakan.",
          "Donasi tanpa pembatasan memberi ruang lebih luas, tetapi tetap digunakan untuk tujuan yayasan dan melalui anggaran. Donasi dengan pembatasan dicatat serta dilaporkan terpisah sampai syarat terpenuhi. Ketika pembatasan dipenuhi, pelepasannya dalam laporan mengikuti kebijakan dan standar pelaporan yang diterapkan."
        ]],
        ["Kas, Barang, dan Janji", [
          "Donasi dapat berupa kas, barang, jasa, atau janji. Barang seperti komputer, buku, atau material bangunan memerlukan berita acara penerimaan, penilaian yang andal bila akan diakui, pencatatan persediaan atau aset, dan dokumentasi penyaluran. Jasa sukarela tidak otomatis diakui seperti kas; perlakuannya perlu mengikuti standar dan kebijakan yang berlaku.",
          "Janji donasi tidak selalu sama dengan kas yang sudah diterima. Jangan membelanjakan komitmen yang belum pasti seolah-olah saldo telah tersedia. Dashboard proyek perlu membedakan target, janji, kas diterima, belanja, komitmen vendor, sisa kas, dan sisa anggaran."
        ]],
        ["Laporan yang Menjaga Kepercayaan", [
          "Laporan donatur tidak hanya memuat foto. Sajikan penerimaan, penggunaan per kategori, saldo, progres hasil, perubahan, masalah, dan langkah berikutnya. Bukti rinci disimpan untuk pemeriksaan, sedangkan laporan publik memperhatikan privasi penerima manfaat dan keamanan data.",
          "Jika proyek berubah, hentikan pengeluaran yang tidak sesuai dan minta persetujuan tertulis dari pihak yang berhak. Sisa dana diperlakukan sesuai akad. Kepercayaan tumbuh bukan karena laporan selalu sempurna, melainkan karena sekolah terbuka terhadap deviasi dan memperbaikinya sebelum menjadi penyimpangan."
        ], note("Friendraising, bukan sekadar fundraising", "Hubungan donatur dijaga melalui kejelasan tujuan, pembaruan yang jujur, bukti penggunaan, dan penghormatan terhadap akad—bukan hanya ketika sekolah membutuhkan dana baru.")]
      ],
      reflection: "Ambil satu program donasi aktif. Apakah akad, kas diterima, komitmen, belanja, sisa, hasil, dan aturan perubahan dapat dibaca dalam satu paket dokumen?",
      quiz: [
        {q:"Penentu donasi terikat adalah…",o:["Jumlahnya","Akad atau ketentuan pemberi dana","Nama rekening"],c:1},
        {q:"Janji donasi sebaiknya…",o:["Disamakan dengan kas","Dibedakan dari kas yang telah diterima","Langsung dibelanjakan"],c:1},
        {q:"Perubahan tujuan donasi terikat memerlukan…",o:["Keputusan bendahara","Persetujuan tertulis sesuai akad","Saldo besar"],c:1}
      ]
    },
    {
      title: "Rekening, Kas Kecil, dan Dana Titipan",
      lede: "Tempat menyimpan uang harus mengikuti tujuan pengelolaannya. Rekening bank, kas kecil, uang muka, dan dana titipan memerlukan aturan berbeda agar saldo fisik, buku kas, dan kewajiban sekolah tidak saling menutupi.",
      sections: [
        ["Arsitektur Rekening", [
          "Buat daftar seluruh rekening beserta nama bank, pemilik legal, tujuan, sumber dana yang diizinkan, pengguna internet banking, limit, otorisator, dan status aktif. Pisahkan rekening BOS sesuai ketentuan, rekening operasional atau SPP, serta rekening donasi proyek ketika material dan diperlukan. Terlalu banyak rekening juga berisiko; setiap rekening harus memiliki alasan dan pemilik proses.",
          "Hindari rekening pribadi pengurus atau pegawai untuk menampung dana sekolah. Perubahan akses ketika staf pindah, perangkat hilang, atau pengurus berganti dilakukan segera. Mutasi bank diunduh secara rutin dan disimpan sebagai dokumen sumber, bukan sekadar dilihat melalui aplikasi."
        ]],
        ["Kas Kecil dan Uang Muka", [
          "Kas kecil digunakan untuk pengeluaran bernilai rendah yang memang sulit dibayar nontunai. Tetapkan plafon, jenis pengeluaran, metode imprest bila sesuai, pemegang kas, penyimpanan, bukti, frekuensi pengisian kembali, dan pemeriksaan mendadak. Dilarang memecah transaksi besar agar masuk batas kas kecil.",
          "Uang muka kegiatan bukan beban saat diserahkan. Catat sebagai uang muka, tetapkan penanggung jawab dan tenggat pertanggungjawaban, lalu pindahkan ke beban ketika bukti lengkap diterima. Sisa dikembalikan; uang muka baru tidak diberikan sebelum uang muka lama diselesaikan, kecuali ada persetujuan khusus."
        ]],
        ["Dana Titipan Bukan Pendapatan", [
          "Uang yang dikumpulkan untuk pembelian buku atau seragam atas nama siswa dapat merupakan dana titipan, bukan pendapatan sekolah. Ketika diterima, catat sebagai kewajiban. Ketika dibayarkan kepada pemasok, kewajiban berkurang. Selisih atau rabat diperlakukan berdasarkan kebijakan yang telah diinformasikan dan disetujui, bukan otomatis menjadi keuntungan tersembunyi.",
          "Buku pembantu titipan memuat penerima, tujuan, penerimaan, pembayaran, sisa, dan penyelesaian. Saldo titipan tidak boleh digunakan untuk menutup kebutuhan operasional meskipun kas secara fisik berada di rekening yang sama."
        ], note("Rekening sama, buku tetap terpisah", "Jika kondisi operasional belum memungkinkan rekening terpisah untuk setiap dana non-BOS, gunakan subledger dan rekonsiliasi yang kuat. Namun jangan menjadikan keterbatasan itu alasan permanen untuk mengabaikan risiko dan akad.")]
      ],
      reflection: "Susun inventaris seluruh rekening, kas kecil, uang muka, dan dana titipan. Saldo mana yang belum memiliki tujuan, pemilik, buku pembantu, atau rekonsiliasi yang jelas?",
      quiz: [
        {q:"Dana titipan buku saat diterima umumnya dicatat sebagai…",o:["Pendapatan","Kewajiban","Aset tetap"],c:1},
        {q:"Uang muka kegiatan menjadi beban ketika…",o:["Diserahkan","Bukti dan pertanggungjawaban disetujui","Diminta"],c:1},
        {q:"Rekening pribadi untuk dana sekolah…",o:["Sebaiknya dihindari","Wajib digunakan","Tidak menimbulkan risiko"],c:0}
      ]
    },
    {
      title: "Bukti, Otorisasi, dan Jurnal yang Saling Mengunci",
      lede: "Kuitansi bukan satu-satunya bukti, dan tanda tangan bukan satu-satunya kontrol. Transaksi yang akuntabel mempertemukan kebutuhan, anggaran, persetujuan, penerimaan barang, pembayaran, pajak, dan pencatatan.",
      sections: [
        ["Paket Bukti Transaksi", [
          "Paket pengeluaran dapat memuat permintaan, verifikasi anggaran, persetujuan, pembandingan penawaran bila diperlukan, pesanan, invoice, bukti penerimaan barang atau jasa, bukti bayar, dokumen pajak, dan identitas aset. Tidak semua transaksi memerlukan dokumen sama, tetapi matriks bukti harus ditetapkan menurut jenis dan nilai transaksi.",
          "Nomor bukti unik menghubungkan map digital atau fisik dengan jurnal dan mutasi bank. Koreksi tidak dilakukan dengan menghapus jejak; gunakan pembatalan, nota koreksi, atau jurnal balik yang menyebut alasan dan persetujuan."
        ]],
        ["Pemisahan Wewenang", [
          "Idealnya pemohon, penyetuju, penerima barang, pembuat pembayaran, pencatat, dan perekomsiliasi bukan satu orang. Sekolah kecil mungkin tidak memiliki banyak staf, sehingga kontrol kompensasi diperlukan: persetujuan ganda, tinjauan pengurus, laporan pengecualian, rotasi, atau pemeriksaan berkala oleh pihak yang tidak memegang kas.",
          "Akses perbankan menggunakan akun individual, bukan kata sandi bersama. Limit transaksi, daftar penerima baru, perubahan rekening vendor, pembayaran di luar jam, dan transaksi bulat bernilai besar ditinjau sebagai indikator risiko—bukan otomatis dianggap fraud."
        ]],
        ["Double Entry yang Sederhana", [
          "Buku kas menunjukkan masuk, keluar, dan saldo. Akuntansi berpasangan menunjukkan dua sisi ekonomi transaksi. Pembelian ATK tunai mendebit beban atau persediaan dan mengkredit kas; penerimaan SPP dapat mendebit bank dan mengkredit piutang atau pendapatan/pendapatan diterima di muka sesuai kondisi. Saldo jurnal harus seimbang, tetapi keseimbangan matematis belum menjamin akun dan sumber dana benar.",
          "Jurnal standar untuk transaksi berulang mengurangi variasi, sementara jurnal manual dibatasi dan ditinjau. Deskripsi jurnal menyebut tujuan, periode, sumber dana, dan nomor bukti agar pembaca tidak perlu menebak beberapa bulan kemudian."
        ], note("Tiga pencocokan", "Sebelum membayar pengadaan, cocokkan pesanan, bukti penerimaan, dan invoice. Perbedaan kuantitas, harga, atau rekening vendor harus diselesaikan sebelum pembayaran.")]
      ],
      reflection: "Pilih satu pembayaran terakhir. Apakah orang yang meminta, menyetujui, menerima, membayar, mencatat, dan merekonsiliasi terlalu terkonsentrasi pada satu orang?",
      quiz: [
        {q:"Kuitansi saja selalu cukup?",o:["Ya","Tidak, bukti mengikuti jenis dan risiko transaksi","Ya, jika distempel"],c:1},
        {q:"Jika staf terbatas, pemisahan tugas diperkuat dengan…",o:["Mengabaikan kontrol","Kontrol kompensasi dan tinjauan independen","Satu password bersama"],c:1},
        {q:"Jurnal seimbang berarti transaksi pasti benar?",o:["Ya","Tidak, akun atau sumber dana masih dapat salah","Ya, jika dibuat aplikasi"],c:1}
      ]
    },
    {
      title: "Transaksi Campuran, Transfer Antar-Dana, dan Unit Usaha",
      lede: "Area abu-abu muncul ketika satu pengadaan dibiayai beberapa sumber, kas dipinjam sementara, atau sekolah menjual buku dan seragam. Di sinilah aturan sebelum transaksi lebih penting daripada koreksi setelahnya.",
      sections: [
        ["Satu Kebutuhan, Lebih dari Satu Sumber", [
          "Jika sepuluh laptop dibiayai lima dari BOS dan lima dari SPP, tetapkan porsi sebelum memesan. Dokumen pengadaan, invoice atau rincian, pembayaran, kode aset, dan laporan harus menunjukkan bagian masing-masing sesuai ketentuan. Jangan membayar seluruh invoice dari satu dana lalu mengoreksinya tanpa dokumen karena cara itu memutus jejak audit.",
          "Biaya bersama seperti internet, keamanan, atau listrik dapat dialokasikan berdasarkan dasar yang wajar dan konsisten—misalnya jumlah murid, luas, pemakaian, atau waktu. Dasar alokasi didokumentasikan, ditinjau berkala, dan tidak diubah untuk mencapai hasil yang diinginkan."
        ]],
        ["Transfer Antar-Dana Bukan Pendapatan Baru", [
          "Pemindahan kas antar rekening milik entitas yang sama tidak otomatis menciptakan pendapatan atau beban. Namun transfer dari dana terikat ke operasional mungkin dilarang atau memerlukan syarat. Catat akun antar-dana atau clearing bila diperlukan, sertakan alasan, persetujuan, tanggal pengembalian jika pinjaman internal diizinkan, dan rekonsiliasi kedua sisi.",
          "Jangan menggunakan donasi terikat sebagai talangan hanya karena pembayaran SPP terlambat. Jika pemberi dana mengizinkan perubahan, dokumentasikan persetujuan sebelum transfer. Kebutuhan likuiditas sebaiknya terlihat sebagai masalah yang harus dikelola, bukan disembunyikan melalui pencampuran."
        ]],
        ["Buku, Seragam, dan Kegiatan Komersial", [
          "Jika sekolah hanya menghimpun dana titipan untuk membeli buku, perlakuannya berbeda dari kegiatan membeli persediaan lalu menjual dengan margin. Penjualan membutuhkan pencatatan kas atau piutang, pendapatan penjualan, harga pokok penjualan, dan persediaan. Stok fisik direkonsiliasi dengan kartu persediaan.",
          "Kegiatan komersial yang material perlu ditinjau dari sisi struktur hukum, pajak, tata kelola, dan risiko. Unit usaha terpisah dapat membuat batas lebih jelas, tetapi keputusan tidak boleh diambil hanya berdasarkan kenyamanan. Dapatkan nasihat profesional agar hubungan dengan yayasan, harga transfer, keuntungan, dan pajak tertata."
        ], note("Pajak mengikuti substansi", "Sumber dana gaji tidak menghilangkan kewajiban perpajakan. Penghasilan, status penerima, pihak pemotong, masa pajak, bukti potong, dan pelaporan perlu ditelaah berdasarkan aturan terkini; jangan hanya mengikuti rumus lama dari materi pelatihan.")]
      ],
      reflection: "Daftar transaksi campuran atau antar-dana dalam tiga bulan terakhir. Apakah porsi, dasar alokasi, izin, dan kedua sisi pencatatan dapat dibuktikan?",
      quiz: [
        {q:"Pembelian gabungan sebaiknya dipisahkan sejak…",o:["Setelah audit","Perencanaan dan dokumen transaksi","Saat laporan tahunan"],c:1},
        {q:"Transfer antar rekening entitas yang sama otomatis pendapatan?",o:["Ya","Tidak","Hanya jika nominal besar"],c:1},
        {q:"Penjualan buku dengan persediaan memerlukan…",o:["Kas saja","Pendapatan, HPP, persediaan, dan rekonsiliasi stok","Buku titipan saja"],c:1}
      ]
    },
    {
      title: "Rekonsiliasi dan Tutup Buku: Mengubah Catatan Menjadi Kepastian",
      lede: "Pencatatan harian menghasilkan data mentah. Rekonsiliasi membuktikan bahwa catatan itu cocok dengan dunia nyata; tutup buku memastikan seluruh periode dinilai secara lengkap dan konsisten.",
      sections: [
        ["Rekonsiliasi Bank dan Kas", [
          "Setiap rekening dicocokkan dengan buku besar: saldo awal, penerimaan, pembayaran, biaya bank, bunga, transfer dalam perjalanan, dan transaksi yang belum tercatat. Perbedaan diberi pemilik dan tenggat penyelesaian. Rekonsiliasi disusun oleh pihak yang tidak membuat pembayaran sejauh mungkin, lalu ditinjau dan disetujui.",
          "Kas kecil dihitung dan dicocokkan dengan bukti serta buku kas. Penerimaan tanpa identitas, cek atau transfer tertunda, transaksi ganda, dan saldo negatif tidak dibiarkan menumpuk. Rekonsiliasi mingguan untuk arus tinggi dapat mencegah beban besar di akhir bulan."
        ]],
        ["Rekonsiliasi Buku Pembantu", [
          "Total piutang per siswa harus sama dengan akun kontrol piutang. Daftar aset sama dengan saldo aset tetap dan akumulasi penyusutan. Dana donasi per proyek sama dengan akun serta kas terkait. Utang vendor, pajak, uang muka, dan dana titipan juga dicocokkan dengan rincian pendukung.",
          "Ketika selisih muncul, jangan membuat jurnal penyeimbang tanpa memahami penyebab. Telusuri transaksi hilang, salah periode, salah sumber dana, duplikasi, atau perbedaan definisi. Jurnal koreksi menyebut akar masalah dan tindakan pencegahan."
        ]],
        ["Checklist Tutup Buku", [
          "Tetapkan kalender penutupan: batas dokumen, pencatatan akhir, rekonsiliasi, review, dan penerbitan laporan. Periksa penerimaan dan pengeluaran yang belum dicatat, akrual atau pembayaran di muka sesuai kebijakan, penyusutan, penyisihan piutang, persediaan, pembatasan donasi, komitmen, pajak, serta klasifikasi sumber dana.",
          "Setelah ditutup, periode dikunci. Perubahan hanya melalui jurnal penyesuaian yang disetujui dan memiliki jejak. Laporan awal dibahas bersama pemilik anggaran untuk menguji kewajaran, bukan sekadar diserahkan sebagai produk bagian keuangan."
        ], note("Target layanan", "Sekolah dapat memulai dengan tutup buku 15 hari setelah akhir bulan, lalu memperpendek menjadi 10 atau 7 hari setelah proses stabil. Kecepatan tidak boleh mengorbankan rekonsiliasi.")]
      ],
      reflection: "Berapa hari setelah akhir bulan laporan dapat dipercaya tersedia? Pilih tiga hambatan terbesar dan tentukan pemilik perbaikannya.",
      quiz: [
        {q:"Tujuan rekonsiliasi adalah…",o:["Membuat saldo tampak sama","Menjelaskan dan menyelesaikan perbedaan antara catatan dan bukti","Menghapus transaksi lama"],c:1},
        {q:"Selisih buku pembantu diselesaikan dengan…",o:["Jurnal penyeimbang tanpa analisis","Penelusuran akar masalah dan koreksi terdokumentasi","Mengubah saldo bank"],c:1},
        {q:"Periode yang telah ditutup…",o:["Dapat diedit bebas","Diubah hanya melalui proses penyesuaian berjejak","Tidak perlu disimpan"],c:1}
      ]
    },
    {
      title: "Laporan yang Menjawab Keputusan dan Roadmap 90 Hari",
      lede: "Laporan yang baik tidak berhenti pada angka total. Ia memperlihatkan posisi dana, realisasi anggaran, pembatasan, risiko likuiditas, dan tindakan yang perlu diambil—tanpa menenggelamkan pembaca dalam rincian yang tidak relevan.",
      sections: [
        ["Paket Laporan Berlapis", [
          "Pengurus membutuhkan laporan posisi keuangan, aktivitas atau kinerja, perubahan aset neto, dan arus kas sesuai standar yang diterapkan. Pimpinan sekolah juga memerlukan realisasi anggaran per sumber dan program, umur piutang SPP, posisi donasi terikat, saldo dan komitmen BOS, serta proyeksi kas. Donatur menerima laporan sesuai akad; orang tua dan publik menerima informasi yang proporsional tanpa membuka data pribadi.",
          "Laporan aset neto membedakan dana dengan pembatasan dan tanpa pembatasan dari pemberi sumber daya. Bahasa ‘laba rugi’ dapat disesuaikan untuk entitas nonlaba, tetapi substansinya tetap menunjukkan pendapatan, beban, surplus atau defisit, dan perubahan sumber daya. Yayasan perlu mengikuti SAK yang relevan dan kebijakan yang ditetapkan."
        ]],
        ["Dashboard Pengecualian", [
          "Dashboard bulanan sebaiknya menyoroti hal yang memerlukan keputusan: kas bebas, dana terikat belum terpakai, piutang menua, penerimaan tanpa pasangan, anggaran BOS berisiko tidak terserap, rekening belum direkonsiliasi, uang muka lewat jatuh tempo, pajak belum disetor, atau proyek donasi menyimpang dari jadwal.",
          "Indikator diberi definisi, sumber, pemilik, ambang, dan tindakan. Warna merah tidak cukup; setiap pengecualian perlu keputusan, penanggung jawab, dan tanggal tindak lanjut. Hindari dashboard yang tampak canggih tetapi angkanya tidak dapat direkonsiliasi ke buku besar."
        ]],
        ["Roadmap 90 Hari", [
          "Hari 1–30: inventaris rekening, sumber dana, akad, COA, buku pembantu, akses, dan selisih; hentikan praktik paling berisiko; tetapkan tim dan kamus kode. Hari 31–60: rapikan saldo awal, migrasikan kode, perbaiki bukti dan otorisasi, rekonsiliasi bank serta subledger, dan uji laporan satu bulan.",
          "Hari 61–90: jalankan tutup buku penuh, terbitkan paket laporan per dana, uji penelusuran sampel transaksi, latih pengguna, dan tetapkan kalender review. Setelah itu, perbaikan berlanjut melalui audit internal berbasis risiko, pembaruan kebijakan, pencadangan data, serta evaluasi regulasi."
        ], note("Ukuran keberhasilan", "Keberhasilan bukan jumlah rekening atau kode. Ukur persentase rekening yang direkonsiliasi tepat waktu, umur selisih, uang muka lewat jatuh tempo, transaksi tanpa bukti, ketepatan laporan, temuan berulang, dan waktu menelusuri satu transaksi dari laporan ke dokumen.")]
      ],
      reflection: "Pilih satu hasil 90 hari yang paling bernilai: saldo awal bersih, piutang akurat, donasi terlacak, BOS siap audit, atau tutup buku tepat waktu. Bukti keberhasilannya apa?",
      quiz: [
        {q:"Laporan manajemen yang berguna terutama…",o:["Menampilkan semua transaksi","Menyoroti posisi, deviasi, risiko, dan keputusan","Menggantikan buku besar"],c:1},
        {q:"Dashboard yang dapat dipercaya harus…",o:["Dapat direkonsiliasi ke sumber data","Berwarna-warni","Hanya dibaca bendahara"],c:0},
        {q:"Roadmap 90 hari dimulai dengan…",o:["Membeli aplikasi","Inventaris, risiko, tim, dan kamus kode","Mencetak laporan tahunan"],c:1}
      ]
    }
  ];

  const assessment = [
    ["Saldo rekening operasional besar karena menyimpan donasi pembangunan. Risiko utamanya adalah…",["Saldo semu yang dianggap dana bebas","Bunga bank terlalu tinggi","COA terlalu pendek"],1],
    ["Empat dimensi yang perlu dibedakan adalah…",["Akun, sumber dana, program/unit, pembatasan","Tanggal, warna, font, map","Bank, kasir, vendor, siswa"],1],
    ["Nama setiap siswa sebaiknya menjadi akun COA?",["Ya","Tidak, gunakan buku pembantu piutang","Hanya untuk siswa lama"],2],
    ["Batas penggunaan BOS ditentukan oleh…",["Saldo rekening","Juknis dan sistem resmi yang berlaku","Kebiasaan sekolah"],2],
    ["Penerimaan BOS untuk buku kas administratif dan pengakuan laporan yayasan…",["Selalu identik tanpa rekonsiliasi","Dapat memakai basis berbeda dan harus direkonsiliasi","Tidak perlu dicatat"],2],
    ["Uang pangkal diterima sebelum layanan dimulai…",["Selalu pendapatan penuh","Dinilai terhadap kewajiban layanan dan kebijakan akuntansi","Selalu donasi"],2],
    ["Total piutang per siswa harus cocok dengan…",["Saldo kas kecil","Akun kontrol piutang","Anggaran donasi"],2],
    ["Penagihan SPP yang humanis…",["Dilakukan melalui murid","Menjaga privasi dan menawarkan solusi terdokumentasi","Menghapus semua tagihan"],2],
    ["Donasi terikat boleh dialihkan sepihak?",["Ya","Tidak, ikuti akad dan persetujuan yang sah","Boleh jika mendesak"],2],
    ["Janji donasi sama dengan kas tersedia?",["Ya","Tidak","Jika disampaikan lisan"],2],
    ["Dana titipan buku saat diterima adalah…",["Kewajiban","Pendapatan SPP","Aset tetap"],1],
    ["Uang muka kegiatan menjadi beban saat…",["Diberikan","Pertanggungjawaban lengkap disetujui","Diminta"],2],
    ["Pemisahan tugas sulit karena staf sedikit. Solusinya…",["Menghapus kontrol","Menambah kontrol kompensasi dan tinjauan","Berbagi password"],2],
    ["Jurnal seimbang berarti klasifikasi sumber dana pasti benar?",["Ya","Tidak","Hanya di akhir tahun"],2],
    ["Pembelian laptop dari BOS dan SPP sebaiknya…",["Dipisahkan sejak rencana, dokumen, pembayaran, dan pencatatan","Dibayar dulu lalu ditebak","Dicatat seluruhnya sebagai SPP"],1],
    ["Transfer antar rekening entitas yang sama…",["Selalu pendapatan","Tidak otomatis pendapatan atau beban","Selalu donasi"],2],
    ["Selisih rekonsiliasi sebaiknya…",["Ditutup dengan jurnal asal seimbang","Ditelusuri akar masalah dan dikoreksi berjejak","Dibiarkan"],2],
    ["Periode yang telah ditutup diubah melalui…",["Edit langsung","Jurnal penyesuaian berotorisasi","Hapus database"],2],
    ["Dashboard keuangan yang baik menampilkan…",["Pengecualian yang memiliki pemilik dan tindak lanjut","Hanya saldo total","Semua bukti sebagai gambar"],1],
    ["Tahap pertama roadmap 90 hari adalah…",["Membeli aplikasi baru","Inventaris sistem, risiko, dan saldo","Membuka unit usaha"],2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji pemahaman tentang pemisahan sumber dana, pencatatan, kontrol, dan pelaporan sekolah.</p><div class="card reveal">' +
    assessment.map(([question, options, correct]) => '<div class="assess-q" data-correct="' + correct + '"><p>' + question + '</p>' + options.map(option => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + option + '</button>').join('') + '</div>').join('') +
    '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => ["bab" + (index + 1), chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 59,
    title: "SPP, BOS, DONASI",
    subtitle: "Cara Tepat Menata Akun & Memisahkan Sumber Dana Sekolah",
    chapterCount: chapters.length,
    videoId: "DcKkSbU5Ohc"
  };
})();
