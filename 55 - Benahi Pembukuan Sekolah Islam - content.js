/* Konten eBook Interaktif 55 — Benahi Pembukuan Sekolah Islam */
(() => {
  const section = ([heading, paragraphs, extra = ""]) =>
    "<h4>" + heading + "</h4>" +
    paragraphs.map(paragraph => "<p>" + paragraph + "</p>").join("") +
    extra;

  const note = (title, body) =>
    '<div style="margin:22px 0;padding:18px 20px;border-left:5px solid var(--accent);background:var(--accent-tint);border-radius:0 14px 14px 0">' +
    '<strong style="font-family:var(--font-display);color:var(--heading)">' + title + "</strong>" +
    '<p style="margin:8px 0 0">' + body + "</p></div>";

  const miniQuiz = questions =>
    '<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>' +
    questions.map(question =>
      '<div class="quiz-q"><p>' + question.q + "</p>" +
      question.o.map((option, index) =>
        '<button class="quiz-opt" onclick="answerQuiz(this,' + (index === question.c) + ')">' + option + "</button>"
      ).join("") + "</div>"
    ).join("") + "</div>";

  const chapter = (number, data) =>
    '<p class="eyebrow reveal">Bab ' + number + "</p>" +
    '<h2 class="reveal">' + data.title + "</h2>" +
    '<p class="lede reveal">' + data.lede + "</p>" +
    (data.visual || "") +
    '<div class="card reveal">' + data.sections.map(section).join("") + "</div>" +
    '<div class="reflect-box reveal"><h3>Refleksi</h3><p>' + data.reflection +
    '</p><textarea placeholder="Tulis pengamatan atau rencana Anda di sini..."></textarea></div>' +
    miniQuiz(data.quiz) +
    '<button class="done-btn" id="doneBtn-bab' + number + '" onclick="markDone(\'bab' + number + '\')">✓ Tandai Bab Ini Selesai</button>' +
    '<p class="seal" id="seal-bab' + number + '">✓ Bab ' + number + " selesai dibaca</p>" +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  const chapters = [
    {
      title: "Ketika Kepercayaan Membutuhkan Angka",
      lede: "Sekolah dapat menjalankan banyak program baik, tetapi kepercayaan akan rapuh jika tidak mampu menjelaskan dari mana uang datang, untuk apa digunakan, siapa yang menyetujui, dan mengapa saldo akhirnya demikian. Pembukuan menjadikan amanah itu dapat dilihat, ditelusuri, dan diperbaiki.",
      visual: '<figure class="chapter-visual reveal" data-asset-id="chapter-01"><div class="chapter-visual-frame"><img src="https://media.edumind.id/ebook-edumind/055-benahi-pembukuan-sekolah-islam/chapter-01.webp?v=20260831-1" alt="Staf keuangan dan pimpinan sekolah menelaah bukti transaksi, buku kas, rekening bank, dan ringkasan laporan secara bersama" loading="lazy" decoding="async"></div><figcaption>Akuntabilitas tumbuh ketika bukti, catatan, saldo, dan laporan membentuk satu jejak yang dapat dibaca bersama—bukan tersimpan sebagai pengetahuan satu orang.</figcaption></figure>',
      sections: [
        ["Pembukuan adalah Infrastruktur Kepercayaan", [
          "Orang tua, donatur, pemerintah, pengurus yayasan, dan warga sekolah tidak selalu membutuhkan seluruh rincian transaksi. Namun mereka berhak memperoleh keyakinan bahwa dana dikelola sesuai tujuan. Keyakinan tersebut tidak cukup dibangun oleh niat baik. Ia membutuhkan catatan yang konsisten, bukti yang utuh, saldo yang dapat dijelaskan, dan keputusan yang memiliki penanggung jawab.",
          "Pembukuan yang baik juga melindungi orang yang bekerja dengan jujur. Ketika setiap penerimaan dan pengeluaran memiliki jejak, kesalahpahaman dapat diselesaikan dengan fakta. Pergantian bendahara tidak membuat sejarah keuangan ikut hilang, dan pimpinan tidak perlu bergantung pada ingatan atau pesan pribadi untuk mengetahui keadaan kas.",
          "Dalam konteks sekolah Islam, amanah bukan alasan untuk mengurangi ketelitian. Justru nilai amanah diterjemahkan ke dalam kebiasaan yang dapat diuji: tidak mencampur uang pribadi, tidak memakai dana terikat untuk kebutuhan lain, tidak menunda bukti, dan bersedia menjelaskan keputusan kepada pihak yang berwenang."
        ]],
        ["Lima Pekerjaan yang Sering Tercampur", [
          "Anggaran merencanakan apa yang ingin dilakukan dan berapa sumber daya yang disediakan. Pembukuan menangkap apa yang benar-benar terjadi. Akuntansi mengelompokkan, mengukur, menyesuaikan, dan menafsirkan transaksi. Pelaporan menyajikan hasilnya untuk kebutuhan pengguna. Audit memberi keyakinan melalui pemeriksaan independen atau internal sesuai ruang lingkupnya.",
          "Kelima pekerjaan itu saling berhubungan tetapi tidak dapat saling menggantikan. Anggaran yang disetujui bukan bukti bahwa pengeluaran benar-benar terjadi. Tumpukan kuitansi bukan buku kas. Buku kas yang seimbang belum tentu memperlihatkan utang, piutang, aset, atau dana dengan pembatasan. Audit pun tidak dapat menciptakan catatan yang tidak pernah dibuat.",
          "Urutan yang sehat dimulai dari transaksi yang sah, dokumen yang memadai, pencatatan tepat waktu, pemeriksaan saldo, penyesuaian, pelaporan, lalu tinjauan. Ketika fondasi awal lemah, pekerjaan di akhir periode menjadi mahal dan melelahkan karena tim harus menyusun ulang cerita dari potongan bukti."
        ], note("Uji satu transaksi", "Ambil satu pengeluaran bulan lalu. Bisakah tim menunjukkan kebutuhan yang mendasarinya, persetujuan, bukti barang atau jasa diterima, bukti pembayaran, akun yang digunakan, dan kemunculannya dalam laporan? Jika satu mata rantai hilang, di situlah pembenahan dimulai.")],
        ["Tertib Proses dan Akuntabel Hasil", [
          "Tertib berarti setiap jenis transaksi mengikuti alur yang telah disepakati: permintaan, pemeriksaan anggaran, persetujuan, pelaksanaan, pembayaran, pencatatan, dan pengarsipan. Akuntabel berarti hasil akhirnya dapat dijelaskan: saldo cocok dengan kenyataan, dana digunakan sesuai batasnya, dan laporan membantu pengambilan keputusan.",
          "Sekolah dapat tertib secara administratif tetapi belum akuntabel jika formulir lengkap namun angka tidak direkonsiliasi. Sebaliknya, saldo mungkin kebetulan cocok meskipun prosesnya berisiko karena satu orang menerima uang, mencatat, menyimpan, dan memeriksa sendiri. Sistem yang sehat mengejar keduanya sekaligus.",
          "Ukuran awalnya sederhana: kelengkapan bukti, ketepatan waktu pencatatan, jumlah selisih yang belum dijelaskan, usia uang muka, usia piutang, dan ketepatan waktu tutup buku. Indikator tersebut lebih berguna daripada kesan umum bahwa bagian keuangan sedang sibuk."
        ]],
        ["Membaca Gejala Sistem yang Lemah", [
          "Gejala yang sering dianggap biasa sesungguhnya memberi peringatan: saldo kas baru diketahui ketika diminta, dokumen disimpan di percakapan pribadi, nomor bukti meloncat tanpa penjelasan, rekening pribadi dipakai untuk menerima pembayaran, transaksi lama diubah tanpa catatan koreksi, atau laporan hanya berisi total masuk dan keluar.",
          "Jangan langsung menyimpulkan ada kecurangan. Banyak masalah lahir dari kapasitas yang terbatas, pembagian peran yang tidak jelas, alat yang tidak cocok, atau tenggat yang tidak realistis. Namun gejala tersebut tetap perlu ditangani karena sistem yang tidak rapi membuka ruang bagi kesalahan dan penyalahgunaan.",
          "Pembenahan dimulai dari kondisi nyata. Sekolah tidak harus membeli perangkat lunak mahal pada hari pertama. Buku kerja yang terkendali, kode bukti yang konsisten, rekening yang tepat, dan rekonsiliasi bulanan dapat memberi lompatan besar jika dijalankan dengan disiplin."
        ]]
      ],
      reflection: "Bagian mana dari alur keuangan sekolah Anda yang saat ini paling bergantung pada ingatan atau satu orang? Risiko apa yang muncul jika orang tersebut tidak tersedia selama satu bulan?",
      quiz: [
        { q: "Mengapa pembukuan disebut infrastruktur kepercayaan?", o: ["Karena menggantikan seluruh pengawasan", "Karena membuat penggunaan dana dapat ditelusuri dan dijelaskan", "Karena menjamin tidak pernah ada kesalahan"], c: 1 },
        { q: "Sekolah memiliki anggaran yang rinci tetapi bukti transaksi dan buku kas tertinggal. Kesimpulan yang tepat adalah…", o: ["Anggaran sudah cukup sebagai laporan", "Realisasi belum dapat dipertanggungjawabkan hanya dari anggaran", "Audit tidak lagi diperlukan"], c: 1 },
        { q: "Satu orang menerima kas, mencatat, menyimpan, dan memeriksa saldo sendiri. Risiko utamanya adalah…", o: ["Proses terlalu cepat", "Kesalahan atau penyalahgunaan sulit terdeteksi karena tidak ada pemeriksaan silang", "Jumlah akun menjadi terlalu sedikit"], c: 1 }
      ]
    },
    {
      title: "Peta Dana dan Batas Penggunaannya",
      lede: "Tidak semua uang yang masuk dapat diperlakukan sebagai kas bebas. Ada dana yang menjadi pendapatan operasional, ada yang harus dipakai untuk tujuan tertentu, ada yang masih merupakan titipan, dan ada yang diterima sebelum layanan diberikan. Peta dana mencegah satu saldo bank menutupi banyak kewajiban yang berbeda.",
      sections: [
        ["Mulai dari Sumber dan Janji", [
          "Daftar seluruh arus dana yang dikelola yayasan dan unit sekolah: SPP, uang pangkal, pendaftaran, kegiatan siswa, BOS atau BOP, hibah pembangunan, donasi beasiswa, zakat atau infak bila dikelola, unit usaha, sewa, dan penerimaan lain. Untuk setiap sumber, catat siapa pemberinya, dokumen yang mengatur, tujuan, periode penggunaan, kewajiban pelaporan, serta pihak yang boleh menyetujui.",
          "Nama yang sama tidak selalu berarti sifat yang sama. Uang pengembangan dapat menjadi penerimaan untuk program tertentu, pendapatan diterima di muka, atau dana yang penggunaannya dibatasi, bergantung pada perjanjian, kebijakan sekolah, dan layanan yang dijanjikan. Karena itu, klasifikasi tidak boleh hanya mengikuti kebiasaan nama di loket.",
          "Peta ini menjawab dua pertanyaan: berapa uang yang tersedia secara fisik, dan berapa bagian yang benar-benar dapat dipakai untuk kebutuhan umum. Keduanya sering berbeda. Kas bank yang besar dapat disertai kewajiban kegiatan, dana bantuan yang belum direalisasikan, atau uang muka yang harus dipertanggungjawabkan."
        ]],
        ["Dengan dan Tanpa Pembatasan", [
          "Dalam penyajian entitas berorientasi nonlaba, sumber daya dapat dibedakan antara yang penggunaannya tidak dibatasi oleh pemberi sumber daya dan yang dibatasi oleh tujuan atau waktu tertentu. Pembatasan berasal dari pihak eksternal atau ketentuan yang mengikat, bukan semata-mata keputusan internal untuk menyisihkan uang.",
          "Dana hibah laboratorium, misalnya, tidak boleh dipakai menutup gaji hanya karena kas operasional sedang tipis. Dana beasiswa tidak boleh dialihkan ke promosi tanpa dasar yang sah. Ketika pembatasan telah dipenuhi sesuai ketentuannya, pencatatan perlu menunjukkan pelepasan atau realisasi pembatasan melalui prosedur yang konsisten.",
          "Keputusan internal tetap penting untuk pengendalian, tetapi perlu diberi label berbeda. Pimpinan mungkin menetapkan cadangan pemeliharaan gedung dari dana bebas. Cadangan internal itu dapat diubah melalui kewenangan yang tepat; pembatasan donor tidak dapat diubah sepihak."
        ]],
        ["Titipan, Uang Muka, dan Pendapatan", [
          "Kas masuk tidak otomatis menjadi pendapatan. Dana study tour yang dikumpulkan lalu dibayarkan kepada penyedia dapat memiliki unsur titipan. SPP yang dibayar untuk beberapa bulan ke depan mungkin perlu diakui sesuai periode layanan berdasarkan kebijakan akuntansi yang berlaku. Uang jaminan yang dapat dikembalikan merupakan kewajiban, bukan pendapatan.",
          "Kesalahan menganggap semua penerimaan sebagai pendapatan membuat kinerja terlihat lebih baik dari keadaan sebenarnya dan menyembunyikan kewajiban. Kesalahan sebaliknya juga dapat terjadi: pendapatan yang telah menjadi hak sekolah tetap ditahan sebagai titipan sehingga laporan tidak mencerminkan layanan yang sudah diberikan.",
          "Buat matriks keputusan sederhana untuk setiap jenis penerimaan: kondisi pengakuan, akun awal, dokumen pendukung, kapan direklasifikasi, dan siapa yang meninjau. Matriks ini membantu staf loket, bendahara, dan akuntan memakai perlakuan yang sama."
        ]],
        ["Unit, Program, dan Pusat Tanggung Jawab", [
          "Yayasan yang mengelola beberapa jenjang membutuhkan dimensi selain akun. Satu akun listrik, misalnya, mungkin dipakai oleh TK, SD, SMP, dan kantor yayasan. Sistem perlu merekam unit, program, sumber dana, dan bila perlu lokasi agar biaya dapat ditelusuri tanpa membuat ribuan akun.",
          "Tetapkan siapa pemilik anggaran dan siapa pemilik proses. Kepala unit bertanggung jawab atas tujuan dan kewajaran program; bagian keuangan menjaga kepatuhan, pencatatan, dan saldo; pimpinan yayasan meninjau keputusan lintas unit. Tanggung jawab program tidak boleh dialihkan seluruhnya kepada bendahara hanya karena transaksi melewati meja keuangan.",
          "Pemisahan dimensi juga membuat laporan manajemen lebih berguna. Pimpinan dapat melihat biaya program pendidikan, biaya pendukung, realisasi dana terikat, dan posisi setiap unit tanpa kehilangan gambaran yayasan secara keseluruhan."
        ]]
      ],
      reflection: "Penerimaan apa yang saat ini masuk ke rekening sekolah tetapi belum jelas apakah merupakan pendapatan, titipan, uang muka, atau dana dengan pembatasan? Dokumen apa yang perlu dibaca untuk menentukannya?",
      quiz: [
        { q: "Kas bank besar belum tentu bebas digunakan karena…", o: ["Semua kas harus disimpan", "Sebagiannya mungkin terkait pembatasan, titipan, atau kewajiban", "Saldo bank tidak perlu dicatat"], c: 1 },
        { q: "Pembatasan donor berbeda dari cadangan internal karena…", o: ["Pembatasan donor tidak dapat diubah sepihak oleh sekolah", "Cadangan internal selalu merupakan utang", "Pembatasan donor tidak perlu dilaporkan"], c: 0 },
        { q: "Orang tua membayar kegiatan yang akan diselenggarakan pihak ketiga. Langkah awal yang tepat adalah…", o: ["Langsung mengakuinya sebagai pendapatan bebas", "Menganalisis perjanjian, kewajiban sekolah, dan sifat titipan sebelum menentukan akun", "Tidak mencatat sampai kegiatan selesai"], c: 1 }
      ]
    },
    {
      title: "Bahasa Bersama melalui Bagan Akun",
      lede: "Bagan akun atau chart of accounts bukan daftar kode untuk bagian keuangan saja. Ia adalah tata bahasa yang membuat yayasan dan sekolah menyebut kejadian yang sama dengan nama yang sama, sehingga transaksi dapat digabung, dibandingkan, dan dijelaskan tanpa menerjemahkan ulang setiap bulan.",
      sections: [
        ["Struktur yang Mengikuti Laporan", [
          "Bangun kelompok utama yang dapat mengalir ke laporan: aset, liabilitas, aset neto, pendapatan, beban program, dan beban pendukung. Di bawahnya, buat akun yang mencerminkan kegiatan nyata seperti kas operasional, rekening dana terikat, piutang SPP, uang muka kegiatan, aset tetap, utang vendor, pendapatan pendidikan, beban pembelajaran, serta administrasi umum.",
          "Kode membantu pengurutan, tetapi makna lebih penting daripada jumlah digit. Struktur 1 untuk aset, 2 untuk liabilitas, 3 untuk aset neto, 4 untuk pendapatan, 5 untuk beban program, dan 6 untuk beban pendukung dapat menjadi titik awal. Sekolah boleh menyesuaikan selama setiap kode unik, konsisten, dan mempunyai definisi.",
          "Hubungkan setiap akun dengan kelompok laporan dan sifat normalnya. Dokumentasi tersebut memudahkan pemeriksaan saldo yang tidak wajar, misalnya akun kas bersaldo kredit atau akun utang tanpa daftar pihak yang harus dibayar."
        ]],
        ["Cukup Rinci, Tidak Meledak", [
          "COA terlalu ringkas membuat informasi penting hilang; semua pengeluaran masuk ke “biaya lain-lain”. COA terlalu rinci membuat staf bingung dan transaksi serupa tersebar ke banyak akun. Gunakan prinsip keputusan: buat akun terpisah bila nilainya material, dibutuhkan oleh kebijakan atau donor, dikelola oleh penanggung jawab berbeda, atau perlu dilaporkan secara rutin.",
          "Jangan menjadikan nama kegiatan tahunan sebagai akun permanen jika dimensi program dapat menampungnya. Akun menjelaskan sifat transaksi; dimensi menjelaskan di mana, untuk siapa, dari sumber apa, atau dalam program apa transaksi terjadi. Pemisahan ini membuat sistem tetap ramping ketika kegiatan bertambah.",
          "Sediakan akun penampung hanya untuk kasus sementara dan tetapkan tenggat penyelesaiannya. Akun “belum teridentifikasi” yang dibiarkan berbulan-bulan berubah menjadi gudang masalah dan melemahkan laporan."
        ]],
        ["Tata Kelola Perubahan Akun", [
          "Tetapkan satu pengelola COA dan jalur permintaan akun baru. Permintaan menjelaskan transaksi, alasan akun yang ada tidak memadai, dampak laporan, serta tanggal berlaku. Hindari staf membuat variasi nama sendiri seperti “ATK”, “alat tulis”, dan “perlengkapan kantor” untuk kejadian yang sama.",
          "Tinjau akun setidaknya setahun sekali: akun yang tidak pernah dipakai, duplikat, saldo menggantung, dan klasifikasi yang tidak lagi sesuai. Akun lama sebaiknya dinonaktifkan setelah saldo diselesaikan, bukan dihapus bersama riwayatnya.",
          "Buat kamus akun singkat berisi kode, nama, definisi, contoh yang termasuk, contoh yang tidak termasuk, dimensi wajib, dan penanggung jawab. Kamus inilah yang mengubah daftar kode menjadi pedoman kerja."
        ]]
      ],
      reflection: "Akun mana yang paling sering dipakai sebagai tempat menampung transaksi yang sebenarnya berbeda? Informasi keputusan apa yang hilang akibat penggabungan tersebut?",
      quiz: [
        { q: "Fungsi utama COA adalah…", o: ["Membuat sebanyak mungkin kode", "Menyediakan bahasa klasifikasi yang konsisten dan terhubung ke laporan", "Menggantikan bukti transaksi"], c: 1 },
        { q: "Kegiatan berbeda dengan sifat biaya yang sama sebaiknya…", o: ["Selalu dibuat akun baru", "Dibedakan melalui dimensi program bila sistem mendukung", "Dicatat sebagai kas"], c: 1 },
        { q: "Staf meminta akun baru karena tidak menemukan nama kegiatan. Respons terbaik adalah…", o: ["Langsung membuat akun", "Analisis apakah akun sifat transaksi sudah ada dan gunakan dimensi kegiatan bila tepat", "Catat di biaya lain-lain selamanya"], c: 1 }
      ]
    },
    {
      title: "Dari Kejadian Ekonomi ke Catatan",
      lede: "Transaksi tidak dimulai dari jurnal. Ia dimulai ketika sekolah menerima hak, menyerahkan sumber daya, memperoleh barang atau jasa, memikul kewajiban, atau memenuhi pembatasan. Pencatatan yang tepat lahir dari membaca substansi kejadian sebelum memilih akun.",
      sections: [
        ["Enam Pertanyaan sebelum Mencatat", [
          "Tanyakan tanggal kejadian, pihak yang terlibat, nilai yang dapat diukur, apa yang diterima atau diserahkan, sumber dana, serta hak atau kewajiban yang berubah. Tambahkan unit dan program bila diperlukan. Enam pertanyaan ini mencegah pencatat hanya menyalin nama pada kuitansi.",
          "Tanggal bukti tidak selalu sama dengan tanggal pengakuan. Barang mungkin diterima sebelum faktur datang, pembayaran mungkin dilakukan setelah jasa selesai, dan dana mungkin diterima sebelum kegiatan berlangsung. Kebijakan basis pencatatan dan cut-off menentukan periode yang tepat.",
          "Bila fakta belum lengkap, jangan menebak secara diam-diam. Catat sebagai item terbuka dengan penanggung jawab dan tenggat, atau gunakan akun sementara yang diawasi. Ketidakpastian yang terlihat lebih aman daripada kepastian palsu."
        ]],
        ["Debit dan Kredit sebagai Keseimbangan", [
          "Debit dan kredit bukan sinonim uang masuk dan uang keluar. Keduanya adalah sisi pencatatan berpasangan. Penerimaan SPP dapat menambah kas di sisi debit dan menambah pendapatan atau kewajiban di sisi kredit, bergantung pada apakah layanan telah menjadi hak sekolah. Pembayaran utang mengurangi kas dan mengurangi kewajiban; ia tidak selalu menjadi beban baru.",
          "Gunakan persamaan dasar: aset sama dengan liabilitas ditambah aset neto. Pendapatan meningkatkan aset neto, sedangkan beban menguranginya. Setiap jurnal perlu menjaga keseimbangan sekaligus mencerminkan substansi. Keseimbangan matematis saja belum menjamin akun yang dipilih benar.",
          "Latihan terbaik menggunakan transaksi nyata sekolah. Minta staf menjelaskan cerita di balik jurnal dengan bahasa biasa. Jika jurnal tidak dapat diterjemahkan kembali menjadi kejadian yang masuk akal, analisisnya perlu diperiksa."
        ]],
        ["Penerimaan yang Tampak Serupa", [
          "SPP rutin, dana pembangunan, hibah laboratorium, BOS, dan donasi komputer semuanya meningkatkan sumber daya, tetapi dampak pencatatannya tidak sama. Dana laboratorium membawa pembatasan tujuan; BOS mengikuti ketentuan program; komputer menambah aset nonkas; pembayaran di muka dapat menimbulkan kewajiban sebelum layanan diberikan.",
          "Untuk donasi barang, sekolah memerlukan bukti penerimaan, spesifikasi, nilai yang dapat dipertanggungjawabkan, kondisi, lokasi, penanggung jawab, serta kebijakan pengakuan aset. Mengabaikannya membuat aset sekolah tidak lengkap dan biaya penyusutan atau pemeliharaan sulit direncanakan.",
          "Untuk dana pemerintah dan donor, pencatatan akuntansi tidak menggantikan pelaporan khusus. Kode akun dan dimensi perlu dirancang agar laporan program dapat direkonsiliasi dengan buku besar tanpa membuat pembukuan kedua yang terpisah dan tidak pernah cocok."
        ]],
        ["Pengeluaran yang Sering Salah Baca", [
          "Pembelian komputer bukan selalu beban sekaligus; ia dapat menjadi aset yang digunakan beberapa periode. Uang muka panitia bukan beban sampai dokumen pertanggungjawaban menunjukkan penggunaan. Pembayaran sewa untuk periode mendatang mungkin memerlukan alokasi. Setoran pajak mengurangi utang pajak yang sebelumnya diakui, bukan selalu menambah beban saat dibayar.",
          "Tentukan batas kapitalisasi aset, kebijakan masa manfaat, perlakuan uang muka, akrual, dan pembayaran di muka secara tertulis. Kebijakan tidak harus panjang, tetapi harus konsisten dan ditinjau ketika kondisi berubah.",
          "Kesalahan klasifikasi dapat dikoreksi melalui jurnal yang menyebut referensi transaksi awal, alasan, pembuat, penyetuju, dan tanggal koreksi. Jangan menghapus jejak agar laporan tampak rapi."
        ]],
        ["Buku Harian dan Buku Pembantu", [
          "Jurnal umum mencatat kejadian berpasangan, sedangkan jurnal khusus dapat mempercepat transaksi berulang seperti penerimaan SPP atau pengeluaran kas. Buku besar merangkum per akun. Buku pembantu menjelaskan rincian saldo, misalnya piutang per siswa, utang per vendor, atau uang muka per penanggung jawab.",
          "Hubungan antarcatatan harus dapat diuji. Total piutang per siswa sama dengan saldo akun piutang; total uang muka per kegiatan sama dengan akun uang muka; saldo rekening bank per buku sama dengan buku besar setelah memperhitungkan transaksi yang belum dicatat. Ketika rincian dan kontrol tidak cocok, laporan belum siap."
        ]]
      ],
      reflection: "Pilih tiga transaksi yang sering terjadi. Apakah staf dapat menjelaskan kapan transaksi diakui, akun yang digunakan, dimensi wajib, dan dokumen yang harus menyertainya tanpa bertanya kepada satu orang tertentu?",
      quiz: [
        { q: "Mengapa debit tidak selalu berarti uang masuk?", o: ["Karena debit adalah sisi pencatatan yang bergantung pada jenis akun", "Karena debit hanya dipakai bank", "Karena semua transaksi dicatat satu sisi"], c: 0 },
        { q: "Panitia menerima uang muka kegiatan. Perlakuan awal yang paling tepat adalah…", o: ["Langsung seluruhnya menjadi beban", "Dicatat sebagai uang muka sampai dipertanggungjawabkan", "Tidak perlu dicatat"], c: 1 },
        { q: "Donasi 20 komputer diterima tanpa kas. Sekolah sebaiknya…", o: ["Mengabaikan karena tidak ada uang", "Mendokumentasikan penerimaan dan menilai perlakuan aset sesuai kebijakan", "Mencatat sebagai piutang SPP"], c: 1 }
      ]
    },
    {
      title: "Bukti Transaksi dan Jejak Dokumen",
      lede: "Angka yang benar tanpa jejak masih sulit dipercaya. Bukti transaksi menghubungkan catatan dengan kejadian, sedangkan rangkaian dokumen menunjukkan bahwa kebutuhan diperiksa, kewenangan dijalankan, barang atau jasa diterima, dan pembayaran sampai kepada pihak yang tepat.",
      sections: [
        ["Bukti yang Memadai, Bukan Sekadar Ada", [
          "Dokumen yang memadai menjawab tanggal, pihak, nominal, tujuan, barang atau jasa, sumber dana, otorisasi, serta hubungan dengan kegiatan. Kuitansi bertuliskan “keperluan sekolah” terlalu umum. Bukti pembayaran tanpa faktur tidak menjelaskan apa yang dibeli. Foto barang tanpa pesanan dan penerimaan tidak membuktikan siapa yang menyetujui.",
          "Kekuatan bukti bergantung pada transaksi. Pembelian dapat memerlukan permintaan, pemeriksaan anggaran, perbandingan penawaran sesuai batas, pesanan, berita penerimaan, faktur, persetujuan pembayaran, dan bukti transfer. Honor membutuhkan dasar penugasan, daftar penerima, perhitungan, pajak bila relevan, dan bukti pembayaran.",
          "Dokumen digital sah sebagai jejak kerja bila keaslian, kelengkapan, akses, serta masa simpannya dijaga. Tangkapan layar yang mudah diubah sebaiknya dilengkapi dokumen dari sistem atau konfirmasi pihak terkait."
        ]],
        ["Nomor Bukti dan Hubungan Antar Dokumen", [
          "Berikan nomor unik berdasarkan jenis dan periode, misalnya penerimaan, pengeluaran, jurnal umum, atau memorial. Nomor yang meloncat tidak selalu salah, tetapi harus dapat dijelaskan sebagai batal, belum dipakai, atau salah cetak. Bukti yang dibatalkan tetap disimpan dengan tanda batal agar urutan tidak putus.",
          "Gunakan nomor referensi untuk menghubungkan permintaan, pembayaran, jurnal, dan arsip. Nama file seperti “IMG-2026-final-revisi” sulit dicari. Nama terstruktur—tanggal, nomor bukti, vendor, dan jenis—memudahkan penelusuran tanpa membuka semua berkas.",
          "Satu transaksi dapat memiliki banyak lampiran; satu dokumen juga dapat mendukung beberapa pembayaran bertahap. Buat indeks yang menunjukkan hubungan tersebut sehingga tidak ada faktur yang dibayar dua kali atau bukti yang dipakai ulang."
        ]],
        ["Alur Persetujuan yang Proporsional", [
          "Matriks kewenangan menetapkan siapa boleh meminta, memeriksa anggaran, menyetujui, menerima barang, membayar, dan mencatat berdasarkan jenis serta nilai transaksi. Batas yang terlalu rendah membuat pimpinan menyetujui ratusan transaksi kecil; batas terlalu tinggi memberi kewenangan besar tanpa tinjauan.",
          "Persetujuan bukan tanda tangan otomatis. Penyetuju memeriksa kebutuhan, ketersediaan anggaran, kewajaran, konflik kepentingan, kelengkapan, dan sumber dana. Bukti persetujuan memuat waktu serta identitas pihak, bukan gambar tanda tangan yang ditempel tanpa kontrol.",
          "Transaksi darurat memerlukan jalur khusus, bukan alasan menghapus prosedur. Tentukan siapa dapat menyetujui, batas nilai, dokumen minimum, dan batas waktu melengkapi pertanggungjawaban setelah keadaan terkendali."
        ]],
        ["Jika Bukti Terlambat atau Kurang", [
          "Kekurangan dokumen dicatat melalui daftar pengecualian dengan nilai, pihak, alasan, risiko, penanggung jawab, dan tenggat. Gunakan surat pernyataan hanya bila memang diperbolehkan dan proporsional; ia bukan pengganti rutin untuk faktur atau kuitansi yang seharusnya tersedia.",
          "Jangan membuat kuitansi mundur, mengubah nominal, atau meminta vendor menulis keterangan yang tidak sesuai kejadian. Perbaikan yang jujur mungkin tampak tidak sempurna, tetapi tetap menjaga integritas jejak.",
          "Analisis pola pengecualian setiap bulan. Jika unit yang sama terus terlambat, masalahnya mungkin pada desain proses, jarak waktu, atau pelatihan—bukan sekadar kedisiplinan individu. Perbaikan sistem perlu mengikuti temuan."
        ]]
      ],
      reflection: "Ambil satu berkas pembayaran bernilai besar dan satu pembayaran rutin. Apakah pihak yang tidak terlibat dapat memahami kebutuhan, kewenangan, penerimaan manfaat, pembayaran, dan pencatatannya hanya dari berkas tersebut?",
      quiz: [
        { q: "Bukti pembayaran transfer saja belum selalu memadai karena…", o: ["Transfer tidak pernah sah", "Belum menjelaskan kebutuhan, barang/jasa, dan persetujuan", "Harus selalu diganti tunai"], c: 1 },
        { q: "Nomor bukti yang batal sebaiknya…", o: ["Dihapus dari urutan", "Disimpan dan diberi tanda batal", "Dipakai untuk transaksi lain tanpa catatan"], c: 1 },
        { q: "Dokumen terlambat berulang dari satu unit. Tindakan terbaik adalah…", o: ["Membuat bukti pengganti diam-diam", "Mencatat pengecualian, menyelesaikan dokumen, dan memperbaiki penyebab proses", "Mengabaikannya karena kegiatan selesai"], c: 1 }
      ]
    },
    {
      title: "Menjaga Kas dan Bank Setiap Hari",
      lede: "Kas adalah aset yang paling mudah berpindah dan paling cepat menimbulkan persoalan. Pengendalian yang baik tidak dibangun dari kecurigaan kepada orang, melainkan dari desain kerja yang membuat setiap orang terlindungi oleh batas kewenangan, pemeriksaan silang, dan catatan yang tepat waktu.",
      sections: [
        ["Satu Hari, Satu Jejak", [
          "Penerimaan dicatat saat diterima, diberikan tanda terima bernomor, dan disetorkan secara utuh sesuai jadwal. Jangan menggunakan penerimaan hari ini langsung untuk membayar kebutuhan sebelum dicatat dan disetor. Praktik itu membuat total penerimaan sulit diverifikasi serta membuka ruang pencampuran.",
          "Pengeluaran kas hanya dilakukan berdasarkan dokumen yang telah disetujui. Buku kas mencatat tanggal, nomor bukti, uraian, akun, unit, sumber dana, masuk, keluar, dan saldo. Saldo berjalan membantu mendeteksi angka yang tidak masuk akal sebelum akhir bulan.",
          "Pada akhir hari atau giliran, petugas menghitung uang, mencocokkan tanda terima, buku kas, sistem penerimaan, dan setoran. Selisih sekecil apa pun dicatat dan ditelusuri; jangan langsung ditutup dengan uang pribadi agar saldo tampak sama."
        ]],
        ["Kas Kecil dengan Sistem Imprest", [
          "Kas kecil digunakan untuk pengeluaran bernilai rendah yang tidak efisien melalui bank. Tentukan nilai dana tetap, batas per transaksi, jenis pengeluaran yang diperbolehkan, pihak pemegang, serta frekuensi pengisian kembali. Pengisian didasarkan pada bukti yang telah diperiksa, bukan sekadar mengembalikan kotak ke nominal awal.",
          "Sewaktu-waktu, uang fisik ditambah bukti yang belum diganti harus sama dengan dana tetap. Pemeriksaan mendadak dilakukan oleh pihak selain pemegang kas dan didokumentasikan. Kekurangan atau kelebihan tidak disembunyikan sebagai “selisih kecil”.",
          "Kas kecil bukan jalan pintas untuk memecah pembelian besar agar melewati batas persetujuan. Sistem perlu menandai transaksi berulang kepada vendor atau tujuan yang sama dalam waktu berdekatan."
        ]],
        ["Rekening dan Pembayaran Nontunai", [
          "Gunakan rekening atas nama entitas sesuai kewenangan, bukan rekening pribadi pengurus atau staf. Pisahkan rekening bila diwajibkan oleh program atau membantu pengendalian dana terikat, tetapi hindari terlalu banyak rekening tanpa tujuan karena rekonsiliasi menjadi berat.",
          "Pembayaran elektronik idealnya memakai pembuat dan penyetuju yang berbeda. Perubahan rekening vendor diverifikasi melalui kanal yang independen, bukan hanya pesan dari alamat yang sama. Daftar penerima, limit, token, perangkat, dan akses ditinjau ketika peran pegawai berubah.",
          "Biaya bank, bunga, transfer tertunda, dan transaksi otomatis sering tidak masuk buku sampai rekening koran diperiksa. Karena itu, rekening bank tetap memerlukan rekonsiliasi meskipun semua pembayaran dilakukan secara digital."
        ]],
        ["Pemisahan Tugas di Tim Kecil", [
          "Idealnya penerima kas, pencatat, penyimpan, penyetuju, dan pemeriksa adalah orang berbeda. Sekolah kecil mungkin tidak memiliki cukup staf. Jangan menyerah; gunakan kontrol pengganti seperti persetujuan pimpinan, laporan harian otomatis, akses baca bagi peninjau, pemeriksaan kas mendadak, dan rekonsiliasi oleh pihak yang tidak memegang uang.",
          "Rotasi terbatas dan cuti wajib dapat membuka ketergantungan tersembunyi. Serah terima menyebut saldo, kunci, token, cek, dokumen terbuka, uang muka, dan transaksi yang belum selesai. Hindari berbagi kata sandi karena jejak pengguna menjadi tidak bermakna.",
          "Tinjau desain setelah insiden atau perubahan organisasi. Kontrol yang efektif ketika transaksi sedikit dapat tidak memadai setelah sekolah membuka unit baru atau menerima lebih banyak pembayaran digital."
        ]]
      ],
      reflection: "Jika hari ini dilakukan hitung kas mendadak dan rekonsiliasi seluruh rekening, saldo mana yang paling mungkin membutuhkan penjelasan? Kontrol apa yang dapat mencegah masalah itu berulang?",
      quiz: [
        { q: "Mengapa penerimaan tidak sebaiknya langsung dipakai untuk pengeluaran?", o: ["Karena semua pembayaran harus bulanan", "Karena total penerimaan dan jejak setoran menjadi sulit diverifikasi", "Karena uang tunai tidak boleh diterima"], c: 1 },
        { q: "Dalam sistem imprest, uang fisik ditambah bukti yang belum diganti harus…", o: ["Sama dengan dana tetap", "Sama dengan anggaran tahunan", "Selalu nol"], c: 0 },
        { q: "Sekolah kecil tidak dapat memisahkan seluruh tugas. Solusi terbaik adalah…", o: ["Menghapus pemeriksaan", "Menambah kontrol pengganti dan tinjauan independen", "Memberikan semua akses kepada satu orang"], c: 1 }
      ]
    },
    {
      title: "Piutang, Utang, Uang Muka, dan Transaksi Nonkas",
      lede: "Laporan kas hanya memperlihatkan uang yang sudah bergerak. Padahal sekolah juga memiliki hak yang belum diterima, kewajiban yang belum dibayar, dana yang masih berada pada penanggung jawab kegiatan, dan aset yang diterima tanpa pembayaran. Saldo pembantu membuat bagian yang tidak terlihat itu dapat dijelaskan.",
      sections: [
        ["Piutang Pendidikan tanpa Menghilangkan Martabat", [
          "Daftar piutang per siswa memuat tagihan, potongan atau beasiswa, pembayaran, saldo, usia, dan status tindak lanjut. Totalnya harus sama dengan akun kontrol piutang. Perbedaan antara sistem akademik dan buku besar ditelusuri setiap bulan, bukan dibiarkan sampai akhir tahun.",
          "Kebijakan penagihan perlu tegas sekaligus beradab: jadwal komunikasi, kanal, pihak yang boleh mengakses, mekanisme keringanan, dan kewenangan menghapus atau menyesuaikan piutang. Informasi tunggakan tidak diumumkan atau dipakai mempermalukan anak.",
          "Piutang lama dinilai kemungkinan tertagihnya sesuai kebijakan akuntansi. Penghapusan bukan berarti berhenti menagih secara otomatis, dan tidak boleh dilakukan hanya untuk membuat laporan tampak bersih. Keputusan memerlukan dasar serta persetujuan."
        ]],
        ["Utang dan Kewajiban yang Belum Dibayar", [
          "Barang atau jasa yang telah diterima dapat menimbulkan utang meskipun faktur belum dibayar. Daftar utang per vendor memuat nomor dokumen, tanggal jatuh tempo, unit, sumber dana, pajak, pembayaran, dan saldo. Ini mencegah faktur hilang atau dibayar dua kali.",
          "Pada tutup buku, cari kewajiban yang belum tercatat melalui dokumen penerimaan barang, kontrak, tagihan setelah tanggal laporan, serta konfirmasi unit. Pembayaran setelah bulan berakhir dapat menjadi petunjuk bahwa beban atau utang seharusnya diakui sebelumnya.",
          "Prioritas pembayaran tidak hanya mengikuti siapa yang paling keras menagih. Pertimbangkan jatuh tempo, konsekuensi layanan, batas dana, kewajiban pajak, dan persetujuan. Keputusan penundaan material perlu dilaporkan kepada pimpinan."
        ]],
        ["Uang Muka yang Harus Kembali Menjadi Bukti", [
          "Setiap uang muka memiliki nama penanggung jawab, kegiatan, nilai, tanggal, sumber dana, tenggat pertanggungjawaban, dan sisa yang harus dikembalikan. Orang yang belum menyelesaikan uang muka tidak otomatis menerima uang muka baru tanpa persetujuan pengecualian.",
          "Pertanggungjawaban memisahkan pengeluaran sah, sisa kas, dan kelebihan yang perlu diganti sesuai kebijakan. Bagian keuangan memeriksa bukti serta akun; pemilik program memeriksa bahwa kegiatan dan manfaat benar-benar terjadi.",
          "Laporan usia uang muka membantu pimpinan melihat item yang tertahan. Saldo lama sering menyembunyikan kegiatan yang batal, bukti hilang, sisa yang belum kembali, atau pengeluaran yang belum mendapat persetujuan."
        ]],
        ["Aset Tetap dan Donasi Barang", [
          "Aset tetap memerlukan daftar register berisi kode, deskripsi, nilai, tanggal perolehan, sumber dana, lokasi, penanggung jawab, kondisi, masa manfaat, penyusutan, dan status pembatasan. Label fisik serta inventarisasi berkala menghubungkan catatan dengan barang.",
          "Donasi barang tidak boleh hilang dari pembukuan hanya karena tidak melewati kas. Dokumentasikan pihak pemberi, tujuan, kondisi, jumlah, nilai yang dapat didukung, dan penerimaan oleh sekolah. Tentukan apakah memenuhi kebijakan aset atau dicatat sebagai perlengkapan sesuai sifatnya.",
          "Pemindahan, perbaikan besar, kehilangan, dan pelepasan aset memerlukan dokumen serta persetujuan. Hasil penjualan aset terikat mungkin tetap membawa konsekuensi pembatasan; jangan langsung dianggap dana bebas tanpa menelaah ketentuannya."
        ]]
      ],
      reflection: "Saldo pembantu mana yang belum tersedia atau belum pernah dicocokkan dengan buku besar: piutang, utang, uang muka, titipan, atau aset? Apa keputusan yang saat ini terhambat karena rincian itu tidak ada?",
      quiz: [
        { q: "Total daftar piutang per siswa seharusnya…", o: ["Sama dengan akun kontrol piutang di buku besar", "Sama dengan kas bank", "Sama dengan anggaran"], c: 0 },
        { q: "Barang telah diterima sebelum faktur dibayar. Ini dapat berarti…", o: ["Tidak ada transaksi", "Sekolah memiliki beban atau aset dan kewajiban yang perlu dicatat", "Kas harus bertambah"], c: 1 },
        { q: "Donasi komputer tidak melewati kas. Tindakan yang tepat adalah…", o: ["Tidak mencatat", "Mendokumentasikan, menilai, dan memasukkannya ke register serta akun sesuai kebijakan", "Mencatat sebagai utang vendor"], c: 1 }
      ]
    },
    {
      title: "Rekonsiliasi: Mempertemukan Catatan dengan Kenyataan",
      lede: "Rekonsiliasi bukan kegiatan membuat angka menjadi sama. Ia adalah penyelidikan teratur terhadap perbedaan antara dua sumber yang seharusnya berhubungan. Hasil terbaiknya bukan hanya saldo cocok, melainkan penjelasan yang masuk akal dan perbaikan yang mencegah selisih berulang.",
      sections: [
        ["Rekonsiliasi Bank Langkah demi Langkah", [
          "Mulai dari saldo buku dan saldo rekening koran pada tanggal yang sama. Cocokkan transaksi satu per satu, tandai setoran yang belum muncul, pembayaran yang belum dicairkan, biaya bank, bunga, transfer otomatis, salah catat, transaksi ganda, atau transaksi yang tidak dikenal.",
          "Perbedaan waktu yang sah dicatat sebagai item rekonsiliasi dan dipantau sampai selesai. Transaksi bank yang belum ada di buku memerlukan jurnal. Kesalahan buku diperbaiki dengan jejak. Transaksi yang tidak dikenal segera dilaporkan melalui prosedur keamanan bank, bukan ditunggu bulan depan.",
          "Rekonsiliasi disiapkan oleh orang yang tidak menguasai seluruh proses pembayaran bila memungkinkan, lalu ditinjau dan ditandatangani. Lampirkan rekening koran, daftar item terbuka, jurnal koreksi, serta bukti tindak lanjut."
        ]],
        ["Kas Fisik dan Penerimaan", [
          "Hitung uang menurut pecahan, cocokkan dengan buku kas, tanda terima, sistem pembayaran, dan setoran. Hitung dilakukan bersama atau disaksikan, lalu hasilnya ditandatangani. Selisih dicatat saat ditemukan dan dianalisis berdasarkan waktu, petugas, serta jenis transaksi.",
          "Rekonsiliasi penerimaan memastikan jumlah tagihan, pembayaran yang diakui sistem akademik, kas atau bank yang diterima, potongan, pengembalian, dan piutang bergerak secara konsisten. Tanpa ini, pembayaran orang tua dapat masuk bank tetapi belum mengurangi tagihan siswa.",
          "Jangan membiarkan saldo negatif atau penerimaan tanpa identitas terlalu lama. Buat daftar penerimaan belum teridentifikasi dan mekanisme konfirmasi agar dana tidak salah ditempelkan pada siswa atau program."
        ]],
        ["Rekonsiliasi Akun Kontrol", [
          "Bukan hanya bank yang perlu direkonsiliasi. Total piutang, utang, uang muka, aset tetap, titipan, pajak, dan dana terikat pada daftar pembantu harus sama dengan akun kontrol. Perbedaan menunjukkan transaksi terlewat, salah unit, salah akun, atau perubahan yang hanya dilakukan pada satu sistem.",
          "Buat jadwal berdasarkan risiko. Bank dan kas direkonsiliasi paling sedikit bulanan, penerimaan tinggi dapat harian, akun pembantu bulanan, sedangkan inventaris fisik mengikuti kebijakan dengan pemeriksaan berkala. Akun berisiko tinggi mendapat frekuensi lebih rapat.",
          "Satu lembar kontrol dapat memuat nama akun, periode, saldo buku besar, saldo sumber pembanding, selisih, item terbuka, umur, penanggung jawab, tenggat, penyusun, dan peninjau."
        ]],
        ["Selisih adalah Informasi", [
          "Selisih tidak selalu berarti kecurangan. Ia dapat berasal dari waktu, salah angka, bukti terlambat, pemetaan akun, atau antarmuka sistem. Namun setiap selisih perlu kategori, bukti, dan penyelesaian. Label “akan disesuaikan” tanpa dasar bukan jawaban.",
          "Analisis akar penyebab setelah koreksi. Jika biaya bank selalu terlewat, buat jurnal otomatis atau checklist. Jika setoran sering terlambat, ubah jadwal dan pengawasan. Jika pembayaran siswa salah identitas, perbaiki format berita transfer serta proses konfirmasi.",
          "Pantau item rekonsiliasi lama. Setoran dalam perjalanan selama beberapa hari mungkin wajar; setoran yang belum muncul selama berbulan-bulan bukan lagi perbedaan waktu biasa. Usia item membantu pimpinan memusatkan perhatian."
        ]]
      ],
      reflection: "Rekonsiliasi apa yang sudah rutin dilakukan, dan apa yang sebenarnya hanya berupa pengecekan saldo akhir? Item terbuka tertua apa yang belum memperoleh penjelasan?",
      quiz: [
        { q: "Tujuan rekonsiliasi adalah…", o: ["Memaksa dua angka sama", "Menjelaskan perbedaan dan memastikan catatan sesuai sumber pembanding", "Menghapus transaksi lama"], c: 1 },
        { q: "Biaya bank muncul di rekening koran tetapi belum ada di buku. Tindakan tepat adalah…", o: ["Menambahkannya sebagai item waktu selamanya", "Mencatat jurnal berdasarkan bukti rekening koran", "Mengubah rekening koran"], c: 1 },
        { q: "Item setoran dalam perjalanan berumur tiga bulan. Respons yang tepat adalah…", o: ["Menganggapnya normal", "Menelusuri bukti setoran dan status bank serta mengeskalasi jika tidak ditemukan", "Menghapus tanpa persetujuan"], c: 1 }
      ]
    },
    {
      title: "Tutup Buku Bulanan yang Tidak Menumpuk Masalah",
      lede: "Tutup buku bukan acara tahunan ketika auditor datang. Ia adalah ritme bulanan untuk memastikan periode telah lengkap, saldo utama telah diperiksa, penyesuaian didukung, dan laporan siap dibaca. Ketika dilakukan rutin, akhir tahun berubah dari operasi penyelamatan menjadi konsolidasi yang terkendali.",
      sections: [
        ["Kalender dan Cut-off", [
          "Tetapkan kalender: batas penyerahan dokumen unit, pencatatan transaksi, rekonsiliasi, pemeriksaan saldo pembantu, jurnal penyesuaian, tinjauan, penguncian periode, dan penerbitan laporan. Setiap langkah memiliki pemilik serta pengganti bila orang utama tidak tersedia.",
          "Cut-off memastikan transaksi masuk periode yang tepat. Barang diterima akhir bulan tetapi faktur datang bulan berikutnya tetap perlu dipertimbangkan sebagai kewajiban. SPP diterima di muka tidak otomatis seluruhnya menjadi pendapatan bulan penerimaan. Pengeluaran setelah tanggal laporan ditelaah untuk menemukan kewajiban yang terlewat.",
          "Transaksi terlambat tidak disisipkan diam-diam ke periode yang sudah ditutup. Gunakan prosedur pembukaan kembali dengan kewenangan terbatas atau catat pada periode berjalan dengan penjelasan serta evaluasi materialitas sesuai kebijakan."
        ]],
        ["Checklist Saldo dan Penyesuaian", [
          "Periksa kas, bank, piutang, utang, uang muka, pendapatan diterima di muka, titipan, pajak, aset tetap, penyusutan, serta dana dengan pembatasan. Cari saldo negatif, akun penampung, angka bulat yang tidak biasa, perubahan besar, dan akun yang tidak bergerak padahal seharusnya aktif.",
          "Jurnal penyesuaian memiliki perhitungan, sumber data, periode, pembuat, dan penyetuju. Contohnya penyusutan, alokasi biaya dibayar di muka, akrual tagihan, penyisihan piutang, koreksi klasifikasi, dan realisasi pembatasan. Jurnal tanpa narasi memadai menyulitkan peninjauan berikutnya.",
          "Gunakan daftar jurnal manual sebagai area risiko tersendiri. Tinjau siapa yang membuat, kapan, akun apa, dan apakah dilakukan setelah periode ditutup. Akses jurnal manual tidak seharusnya terbuka bagi semua pengguna."
        ]],
        ["Tinjauan Analitis", [
          "Bandingkan realisasi dengan anggaran, bulan lalu, periode yang sama tahun sebelumnya, jumlah siswa, serta indikator operasional. Kenaikan listrik, penurunan penerimaan SPP, biaya program tanpa kegiatan, atau saldo kas tinggi sementara utang menumpuk membutuhkan penjelasan.",
          "Analisis bukan mencari alasan agar angka dianggap benar. Ia menguji kewajaran dan menemukan kemungkinan transaksi hilang atau salah klasifikasi. Penjelasan yang baik menyebut sebab, dampak, tindakan, dan apakah masalah diperkirakan berulang.",
          "Pimpinan membutuhkan laporan pengecualian, bukan hanya ratusan baris. Sorot selisih anggaran material, dana terikat yang mendekati batas waktu, piutang menua, uang muka terlambat, posisi kas, kewajiban jatuh tempo, dan isu kontrol."
        ]],
        ["Mengunci tanpa Kehilangan Kemampuan Koreksi", [
          "Setelah disetujui, periode dikunci untuk mencegah perubahan biasa. Koreksi tetap mungkin, tetapi melalui jurnal yang dapat ditelusuri dan kewenangan khusus. Log perubahan menunjukkan pengguna, waktu, nilai sebelum dan sesudah, serta alasan.",
          "Simpan paket tutup buku: neraca saldo, rekonsiliasi, daftar pembantu, jurnal penyesuaian, analisis, laporan, checklist, dan bukti tinjauan. Paket ini mempercepat audit serta menjaga kesinambungan ketika staf berganti.",
          "Evaluasi durasi serta hambatan setiap siklus. Target bukan sekadar tutup lebih cepat, melainkan tutup tepat waktu dengan mutu yang dapat dipertahankan. Mengorbankan rekonsiliasi demi tanggal laporan hanya memindahkan risiko."
        ]]
      ],
      reflection: "Berapa hari setelah akhir bulan sekolah dapat menerbitkan laporan yang telah direkonsiliasi? Langkah apa yang paling sering menunda, dan apakah penyebabnya berada di bagian keuangan atau unit lain?",
      quiz: [
        { q: "Cut-off digunakan untuk…", o: ["Menghapus transaksi kecil", "Menempatkan transaksi pada periode yang tepat", "Menentukan siapa auditor"], c: 1 },
        { q: "Periode sudah dikunci dan ditemukan kesalahan material. Tindakan yang tepat adalah…", o: ["Mengubah diam-diam", "Mengikuti prosedur koreksi dengan kewenangan dan jejak perubahan", "Membiarkannya selalu"], c: 1 },
        { q: "Laporan selesai cepat tetapi bank belum direkonsiliasi. Kesimpulan yang tepat adalah…", o: ["Tutup buku berhasil", "Kecepatan belum mencerminkan mutu; saldo kas belum cukup teruji", "Rekonsiliasi hanya diperlukan auditor"], c: 1 }
      ]
    },
    {
      title: "Mengubah Pembukuan Menjadi Laporan Keuangan",
      lede: "Laporan keuangan bukan kumpulan angka baru yang dibuat di akhir tahun. Ia adalah bentuk terstruktur dari saldo yang sudah dibangun sepanjang periode. Jika jurnal, buku besar, saldo pembantu, dan rekonsiliasi kuat, proses penyajian menjadi penjelasan—bukan pencarian angka yang hilang.",
      sections: [
        ["Tentukan Kerangka yang Berlaku", [
          "Materi sumber menggunakan istilah ISAK 35. Dalam penomoran SAK Indonesia mutakhir, rujukan tersebut dikenal sebagai ISAK 335 tentang penyajian laporan keuangan entitas berorientasi nonlaba. Interpretasi ini membantu penyesuaian deskripsi dan penyajian bagi entitas nonlaba yang menerapkan SAK Indonesia.",
          "Tidak semua sekolah otomatis memakai kerangka yang sama. Bentuk hukum, ukuran, akuntabilitas publik, kebutuhan pemberi dana, kebijakan yayasan, dan ketentuan regulator perlu dipertimbangkan. Penetapan kerangka serta kebijakan material sebaiknya dibahas dengan akuntan yang kompeten, terutama untuk laporan bertujuan umum dan audit.",
          "Perubahan standar juga perlu dipantau. Format dan istilah dapat diperbarui, sementara prinsip pembukuan tetap: transaksi lengkap, saldo dapat direkonsiliasi, pembatasan dapat ditelusuri, dan kebijakan diterapkan konsisten."
        ], note("Batas penting", "eBook interaktif ini memberi kerangka pengelolaan dan pembukuan, bukan opini akuntansi atau audit. Untuk penyajian final, pajak, transaksi kompleks, dan penerapan standar terbaru, yayasan perlu memperoleh pertimbangan profesional sesuai kondisinya.")],
        ["Laporan Posisi Keuangan", [
          "Laporan posisi keuangan menunjukkan aset yang dikuasai, kewajiban yang harus dipenuhi, dan aset neto pada tanggal tertentu. Kas perlu dibaca bersama pembatasannya; piutang bersama kualitas penagihan; aset tetap bersama penyusutan dan kondisi; utang bersama jatuh tempo.",
          "Klasifikasi lancar dan tidak lancar membantu pengguna memahami likuiditas, tetapi tidak menggantikan catatan. Kas dengan pembatasan pembangunan mungkin tidak tersedia untuk gaji. Pendapatan diterima di muka menunjukkan kewajiban layanan. Titipan kegiatan tidak sama dengan kekayaan bebas yayasan.",
          "Setiap saldo material harus memiliki daftar atau dokumen yang mendukung. Jika angka posisi keuangan tidak dapat diuraikan menjadi pihak, aset, atau transaksi, penyajian belum selesai."
        ]],
        ["Kinerja dan Perubahan Aset Neto", [
          "Laporan kinerja atau penghasilan komprehensif memperlihatkan pendapatan dan beban selama periode sesuai kerangka yang diterapkan. Untuk entitas nonlaba, pengguna ingin mengetahui bagaimana sumber daya mendukung misi, bukan hanya apakah terjadi surplus atau defisit.",
          "Beban program, administrasi umum, dan penggalangan dana perlu diklasifikasikan secara konsisten. Alokasi biaya bersama memiliki dasar yang rasional dan terdokumentasi, misalnya luas, waktu kerja, pemakaian, atau jumlah penerima manfaat. Jangan memindahkan biaya ke program hanya untuk membuat rasio terlihat baik.",
          "Laporan perubahan aset neto menjelaskan gerak saldo awal ke saldo akhir, termasuk kinerja periode dan perubahan terkait pembatasan. Hubungannya dengan posisi keuangan harus dapat direkonsiliasi."
        ]],
        ["Laporan Arus Kas", [
          "Arus kas menjelaskan mengapa saldo kas berubah melalui aktivitas operasi, investasi, dan pendanaan sesuai kerangka yang diterapkan. Surplus tidak selalu berarti kas bertambah: pendapatan dapat belum tertagih, biaya dapat belum dibayar, atau kas digunakan membeli aset.",
          "Sebaliknya, kas dapat bertambah karena pinjaman atau dana terikat yang belum boleh dipakai untuk operasi. Karena itu, pimpinan perlu membaca arus kas bersama posisi keuangan, kinerja, pembatasan, dan proyeksi kebutuhan mendatang.",
          "Rekonsiliasi arus kas dengan perubahan saldo kas adalah pemeriksaan penting. Komponen nonkas seperti donasi aset dan penyusutan tidak boleh dipaksa menjadi arus kas."
        ]],
        ["Catatan Membuat Angka Dapat Dipahami", [
          "Catatan laporan keuangan menjelaskan dasar penyusunan, kebijakan penting, rincian saldo, pembatasan, komitmen, risiko, transaksi pihak berelasi, dan informasi lain yang diperlukan. Ia bukan tempat menyembunyikan kelemahan, melainkan konteks yang membuat angka tidak disalahartikan.",
          "Daftar catatan dibangun sepanjang tahun dari kontrak, keputusan pembina, pembatasan donor, kebijakan, register aset, dan kejadian penting. Menyusun semuanya pada akhir tahun dari ingatan meningkatkan risiko informasi hilang.",
          "Laporan manajemen bulanan boleh lebih sederhana dan berorientasi keputusan, tetapi harus direkonsiliasi dengan buku besar. Jangan membangun dua kebenaran: satu untuk rapat dan satu untuk akuntansi."
        ]]
      ],
      reflection: "Laporan apa yang saat ini dibaca pimpinan setiap bulan? Apakah ia dapat dihubungkan ke buku besar dan menjawab posisi kas bebas, dana terikat, piutang, utang, serta kinerja program?",
      quiz: [
        { q: "ISAK 335 terutama berkaitan dengan…", o: ["Penyajian laporan keuangan entitas berorientasi nonlaba", "Penentuan tarif SPP", "Pengelolaan kelas"], c: 0 },
        { q: "Surplus tidak selalu berarti kas bertambah karena…", o: ["Laporan kas tidak memakai angka", "Pendapatan dan beban dapat berbeda waktunya dari penerimaan dan pembayaran", "Surplus selalu merupakan utang"], c: 1 },
        { q: "Laporan manajemen bulanan dibuat di spreadsheet terpisah dan tidak cocok dengan buku besar. Risiko utamanya adalah…", o: ["Terlalu banyak warna", "Pimpinan mengambil keputusan dari angka yang tidak memiliki sumber kebenaran yang sama", "Laporan menjadi terlalu singkat"], c: 1 }
      ]
    },
    {
      title: "Pengendalian, Audit, dan Peta Jalan 90 Hari",
      lede: "Sistem pembukuan menjadi matang ketika tidak bergantung pada heroisme bendahara. Peran, akses, pemeriksaan, dan tindak lanjut bekerja sebagai kebiasaan organisasi. Audit kemudian tidak lagi dipandang sebagai ancaman, melainkan kesempatan menguji apakah sistem menjaga amanah sebagaimana dirancang.",
      sections: [
        ["Pengendalian yang Mengikuti Risiko", [
          "Mulai dari risiko nyata: penerimaan tidak tercatat, pembayaran tanpa kewenangan, vendor fiktif, akun salah, dana terikat terpakai, akses mantan pegawai, bukti ganda, atau laporan terlambat. Untuk setiap risiko, tentukan pencegahan, deteksi, penanggung jawab, bukti pelaksanaan, dan tindakan jika gagal.",
          "Kontrol penting meliputi matriks kewenangan, pemisahan tugas, verifikasi vendor, limit transaksi, rekonsiliasi, tinjauan jurnal, inventarisasi aset, pencadangan, pengelolaan akses, serta pelaporan konflik kepentingan. Tidak semua kontrol harus manual; sistem dapat membantu selama konfigurasi dan aksesnya diperiksa.",
          "Kontrol yang hanya tertulis tetapi tidak meninggalkan bukti sulit dinilai. Tanda tinjauan menyebut siapa, kapan, apa yang diperiksa, masalah yang ditemukan, dan tindak lanjut. Centang kosong tanpa isi tidak menunjukkan kualitas pemeriksaan."
        ]],
        ["Audit Internal, Eksternal, dan Tindak Lanjut", [
          "Tinjauan internal mengecek kepatuhan serta efektivitas proses secara berkala. Orang yang meninjau menjaga independensi dari pekerjaan yang diperiksa. Ruang lingkup dapat bergilir: kas, penerimaan, pengadaan, uang muka, penggajian, aset, atau dana program.",
          "Audit eksternal memberi keyakinan sesuai standar dan ruang lingkup penugasan. Kewajiban audit yayasan dapat dipengaruhi oleh kriteria hukum dan ketentuan pemberi dana. Yayasan perlu menilai kewajibannya secara spesifik, bukan menganggap semua sekolah sama.",
          "Nilai audit terletak pada tindak lanjut. Setiap temuan memiliki akar penyebab, risiko, rencana, pemilik, tenggat, status, dan bukti penyelesaian. Menutup temuan hanya karena prosedur baru ditulis belum cukup; uji apakah prosedur benar-benar dijalankan."
        ]],
        ["Tiga Puluh Hari Pertama", [
          "Pada 30 hari pertama, inventarisasi rekening, kotak kas, sistem, pengguna, sumber dana, COA, dokumen, saldo pembantu, dan laporan. Hentikan risiko kritis seperti rekening pribadi, akses bersama, pembayaran tanpa persetujuan, atau setoran yang tertunda.",
          "Pilih satu periode terakhir dan lakukan diagnosis transaksi dari awal sampai laporan. Susun daftar selisih serta dokumen kurang. Tetapkan nomor bukti, struktur arsip, buku kas, matriks kewenangan sementara, dan jadwal rekonsiliasi.",
          "Jangan mencoba memperbaiki seluruh sejarah sekaligus. Tetapkan tanggal mulai sistem baru sambil membuat rencana terpisah untuk saldo lama. Operasi berjalan tidak boleh terus menghasilkan masalah baru ketika tim sedang membersihkan masa lalu."
        ]],
        ["Hari ke-31 sampai ke-90", [
          "Pada hari ke-31 hingga 60, selesaikan rekonsiliasi bank dan kas, bangun daftar piutang, utang, uang muka, serta aset, lalu cocokkan dengan buku besar. Rapikan COA dan kamus akun. Latih unit tentang dokumen serta tenggat, bukan hanya staf keuangan.",
          "Pada hari ke-61 hingga 90, jalankan tutup buku lengkap, terbitkan laporan manajemen, lakukan tinjauan internal pertama, dan rapatkan temuan dengan pimpinan. Ukur ketepatan waktu, item belum selesai, selisih, dan kualitas bukti.",
          "Peta jalan berakhir dengan ritme, bukan proyek sekali selesai: rekonsiliasi bulanan, tinjauan akses triwulanan, inventarisasi, evaluasi COA, pemantauan temuan, dan pembaruan kebijakan. Sistem tetap sehat karena dipelihara."
        ]]
      ],
      reflection: "Jika hanya tiga perbaikan boleh dilakukan dalam 90 hari, mana yang paling menurunkan risiko sekaligus meningkatkan mutu laporan? Siapa pemiliknya, bukti keberhasilannya, dan kapan ditinjau?",
      quiz: [
        { q: "Pengendalian yang baik dirancang berdasarkan…", o: ["Jumlah formulir", "Risiko, tanggung jawab, dan bukti pelaksanaan", "Kebiasaan satu orang"], c: 1 },
        { q: "Temuan audit dianggap selesai ketika…", o: ["Rapat berakhir", "Tindakan dijalankan dan efektivitasnya dibuktikan", "Kebijakan baru diberi judul"], c: 1 },
        { q: "Pada 30 hari pertama pembenahan, prioritas terbaik adalah…", o: ["Mengganti semua perangkat lunak", "Memetakan kondisi, menghentikan risiko kritis, dan menetapkan kontrol dasar", "Menunggu audit tahunan"], c: 1 }
      ]
    }
  ];

  const assessment = [
    ["Yayasan memiliki banyak kuitansi tetapi tidak dapat menunjukkan saldo piutang dan utang. Kesimpulan yang paling tepat adalah…", ["Pembukuan sudah lengkap", "Bukti transaksi penting, tetapi saldo pembantu dan buku besar tetap diperlukan", "Kuitansi harus dibuang"], 2],
    ["Saldo bank Rp500 juta terdiri atas dana pembangunan Rp400 juta dan kas operasional Rp100 juta. Jumlah yang dapat dianggap bebas untuk operasi rutin adalah…", ["Seluruh Rp500 juta", "Ditentukan setelah memperhatikan pembatasan; secara sederhana hanya bagian operasional yang bebas", "Tidak ada kas sama sekali"], 2],
    ["Sekolah memutuskan menyisihkan dana bebas untuk pemeliharaan. Ini berbeda dari pembatasan donor karena…", ["Dapat diubah melalui kewenangan internal yang tepat", "Selalu menjadi utang", "Tidak boleh dicatat"], 1],
    ["COA memiliki 40 akun berbeda untuk nama kegiatan, tetapi sifat bebannya sama. Perbaikan terbaik adalah…", ["Tambah lebih banyak akun", "Gunakan akun berdasarkan sifat dan dimensi program untuk kegiatan", "Gabungkan semua sebagai biaya lain-lain"], 2],
    ["Pembayaran SPP untuk semester depan langsung seluruhnya dicatat sebagai pendapatan. Sebelum menerima perlakuan itu, tim perlu…", ["Memeriksa kapan hak layanan timbul dan kebijakan pengakuan", "Menghapus bukti", "Memindahkan ke kas kecil"], 1],
    ["Komputer senilai material diterima sebagai donasi. Pencatatan yang paling bertanggung jawab adalah…", ["Tidak mencatat karena nonkas", "Dokumentasikan, nilai secara dapat dipertanggungjawabkan, dan catat sesuai kebijakan aset serta pembatasan", "Catat sebagai utang bank"], 2],
    ["Bukti transfer ada, tetapi tidak ada faktur atau penerimaan barang. Status transaksi sebaiknya…", ["Dianggap lengkap", "Diproses sebagai pengecualian dan dilengkapi jejak kebutuhan serta penerimaan", "Dihapus dari bank"], 2],
    ["Nomor bukti pengeluaran 018 dibatalkan. Tindakan yang tepat adalah…", ["Hapus agar urutan rapi", "Simpan dengan tanda batal dan alasan", "Gunakan untuk dua transaksi"], 2],
    ["Petugas memakai penerimaan SPP tunai untuk membeli ATK sebelum menyetor sisanya. Risiko utama adalah…", ["Penerimaan dan pengeluaran tidak dapat diverifikasi secara utuh", "Kas menjadi terlalu sedikit digit", "COA otomatis berubah"], 1],
    ["Sekolah kecil hanya memiliki dua staf keuangan. Cara memperkuat pemisahan tugas adalah…", ["Berbagi satu kata sandi", "Tambahkan tinjauan pimpinan, rekonsiliasi independen, dan bukti persetujuan", "Hentikan pencatatan"], 2],
    ["Total piutang pada daftar siswa Rp120 juta, sedangkan buku besar Rp135 juta. Laporan sebaiknya…", ["Diterbitkan tanpa catatan", "Ditahan untuk rekonsiliasi dan penjelasan selisih material", "Pilih angka yang lebih kecil"], 2],
    ["Panitia belum mempertanggungjawabkan uang muka selama 90 hari. Respons terbaik adalah…", ["Ubah menjadi beban tanpa bukti", "Tindak lanjuti penanggung jawab, nilai status kegiatan, dan selesaikan melalui prosedur", "Berikan uang muka baru tanpa syarat"], 2],
    ["Rekening koran memuat biaya bank yang tidak ada di buku. Pada rekonsiliasi, transaksi itu…", ["Menjadi jurnal di buku berdasarkan bukti bank", "Dianggap setoran dalam perjalanan", "Dihapus dari rekening koran"], 1],
    ["Setoran dalam perjalanan belum muncul selama tiga bulan. Tim seharusnya…", ["Terus membawanya tanpa batas", "Menelusuri bukti, konfirmasi bank, dan mengeskalasi", "Mengganti dengan pendapatan baru"], 2],
    ["Barang diterima 29 Agustus, faktur dan pembayaran terjadi 5 September. Pada tutup buku Agustus, tim perlu…", ["Mengabaikan karena belum dibayar", "Menilai pengakuan aset/beban dan utang pada Agustus sesuai kebijakan", "Mencatat sebagai penerimaan kas"], 2],
    ["Periode telah dikunci tetapi jurnal lama diubah tanpa log. Kelemahan utamanya adalah…", ["Ukuran file membesar", "Audit trail dan integritas periode hilang", "Laporan menjadi terlalu singkat"], 2],
    ["Laporan menunjukkan surplus, tetapi kas turun karena membeli gedung. Penjelasan yang tepat adalah…", ["Surplus dan arus kas mengukur hal yang berbeda", "Gedung bukan transaksi", "Kas pasti salah"], 1],
    ["Pimpinan memakai laporan spreadsheet yang tidak cocok dengan buku besar. Tindakan terbaik adalah…", ["Pertahankan dua angka", "Rekonsiliasi dan tetapkan sumber data serta definisi yang sama", "Hapus buku besar"], 2],
    ["Auditor memberi temuan tentang akses mantan pegawai. Temuan baru layak ditutup setelah…", ["Kata sandi diganti sekali", "Akses dicabut, proses keluar diperbaiki, dan efektivitasnya diuji", "Temuan dipindah ke tahun depan"], 2],
    ["Langkah 90 hari yang paling berkelanjutan adalah…", ["Merapikan dokumen sekali lalu berhenti", "Membangun ritme rekonsiliasi, tutup buku, tinjauan, dan tindak lanjut", "Membeli sistem sebelum memetakan proses"], 2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p>' +
    '<h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan menata transaksi, dokumen, saldo, dan pengendalian pembukuan sekolah.</p>' +
    '<div class="card reveal">' +
    assessment.map(([question, options, correct]) =>
      '<div class="assess-q" data-correct="' + correct + '"><p>' + question + "</p>" +
      options.map(option => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + option + "</button>").join("") +
      "</div>"
    ).join("") +
    '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button>' +
    '<div class="assess-result" id="asesmenResult"></div></div>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => ["bab" + (index + 1), chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 55,
    title: "Benahi Pembukuan Sekolah Islam",
    subtitle: "Cara menata transaksi, dokumen, dan saldo kas sebagai dasar laporan keuangan yang akuntabel",
    chapterCount: chapters.length,
    videoId: "0sylbsaJrn8"
  };
})();
