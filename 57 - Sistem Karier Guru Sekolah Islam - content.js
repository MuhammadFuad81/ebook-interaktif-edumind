/* Konten eBook Interaktif 57 — Sistem Karier Guru Sekolah Islam */
(() => {
  const section = ([heading, paragraphs, extra = ""]) =>
    "<h4>" + heading + "</h4>" + paragraphs.map(paragraph => "<p>" + paragraph + "</p>").join("") + extra;

  const note = (title, body) =>
    '<div style="margin:22px 0;padding:18px 20px;border-left:5px solid var(--accent);background:var(--accent-tint);border-radius:0 14px 14px 0">' +
    '<strong style="font-family:var(--font-display);color:var(--heading)">' + title + "</strong><p style=\"margin:8px 0 0\">" + body + "</p></div>";

  const miniQuiz = questions =>
    '<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>' +
    questions.map(question => '<div class="quiz-q"><p>' + question.q + "</p>" +
      question.o.map((option, index) => '<button class="quiz-opt" onclick="answerQuiz(this,' + (index === question.c) + ')">' + option + "</button>").join("") + "</div>").join("") + "</div>";

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
      title: "Loyalitas Membutuhkan Sistem",
      lede: "Guru yang baik tidak bertahan hanya karena diminta setia. Mereka lebih mungkin menetap ketika pekerjaan terasa bermakna, kepemimpinan dapat dipercaya, beban masuk akal, kontribusi diakui, dan masa depan profesional dapat dibayangkan.",
      visual: '<figure class="chapter-visual"><img src="https://media.edumind.id/ebook-edumind/057-sistem-karier-guru-sekolah-islam/chapter-01.webp?v=20260913-1" alt="Tiga guru perempuan berjilbab panjang menelaah peta karier dan portofolio pembelajaran" loading="lazy" decoding="async"><figcaption>Sistem karier mengubah janji pertumbuhan menjadi jalur, bukti, dukungan, dan keputusan yang dapat dipercaya.</figcaption></figure>',
      sections: [
        ["Turnover Bukan Sekadar Orang Pergi", [
          "Ketika seorang guru pergi, sekolah tidak hanya kehilangan satu nama dalam jadwal. Ada pengetahuan tentang murid, kebiasaan tim, hubungan dengan keluarga, rancangan pembelajaran, dan energi pendampingan yang ikut hilang. Guru pengganti membutuhkan waktu untuk memahami budaya; rekan kerja menanggung kelas tambahan; pimpinan kembali merekrut dan melatih. Jika pola ini berulang, mutu menjadi sulit konsisten.",
          "Namun tidak semua perpindahan harus dicegah. Ada orang yang menemukan panggilan lain, pindah domisili, atau memang tidak lagi sesuai dengan kebutuhan sekolah. Tujuan sistem karier bukan menahan setiap orang, melainkan mengurangi kepergian yang sebetulnya dapat dicegah dan memastikan peralihan terjadi secara tertib, bermartabat, serta tidak merusak pengalaman murid."
        ]],
        ["Membaca Penyebab, Bukan Menebak", [
          "Gaji dapat berpengaruh, tetapi keputusan bertahan biasanya terbentuk dari sekumpulan pengalaman: hubungan dengan atasan, kejelasan tugas, kesempatan belajar, rasa adil, jadwal, keamanan psikologis, beban administrasi, dukungan saat menghadapi kelas sulit, dan keyakinan bahwa kerja mereka berkembang. Survei singkat, percakapan berkala, <em>stay interview</em>, data absensi, serta wawancara keluar membantu sekolah melihat pola tanpa menyederhanakan manusia menjadi satu angka.",
          "Pisahkan alasan yang dapat dikendalikan sekolah dari yang tidak. Lalu bedakan gejala dengan akar masalah. Keluhan ‘terlalu sibuk’, misalnya, bisa bersumber dari pembagian jam yang tidak seimbang, rapat berulang, sistem digital yang rumit, peran wali kelas yang kabur, atau budaya selalu-siaga. Solusi yang tepat baru mungkin setelah penyebabnya jelas."
        ]],
        ["Kesetiaan sebagai Hubungan Timbal Balik", [
          "Sekolah Islam dapat memaknai kerja sebagai amanah, tetapi amanah berlaku bagi kedua pihak. Guru menjaga mutu, adab, dan tanggung jawab profesional; lembaga menghadirkan kepemimpinan yang adil, hak yang tertib, perlindungan, kesempatan tumbuh, serta keputusan yang dapat dijelaskan. Loyalitas yang sehat bukan kepatuhan buta, melainkan kemauan membangun tujuan bersama karena hubungan kerja layak dipercaya.",
          "Di sinilah sistem karier berperan. Ia memberi jawaban atas pertanyaan yang sering tidak terucap: apa yang diharapkan dari saya, bagaimana saya berkembang, siapa yang mendampingi, bukti apa yang dihargai, kapan saya dinilai siap, dan apa yang terjadi jika belum siap."
        ], note("Pertanyaan awal", "Jika tiga guru terbaik Anda ditawari pekerjaan lain minggu ini, bagian apa dari pengalaman kerja di sekolah yang paling kuat membuat mereka memilih bertahan?")]
      ],
      reflection: "Tuliskan dua alasan utama guru baik bertahan dan dua alasan mereka mungkin pergi dari sekolah Anda. Mana yang sudah didukung data, dan mana yang masih berupa dugaan?",
      quiz: [
        {q:"Tujuan realistis sistem retensi adalah…",o:["Menahan semua guru selamanya","Mengurangi kepergian yang dapat dicegah dan menjaga transisi","Menghapus proses evaluasi"],c:1},
        {q:"Cara terbaik membaca penyebab turnover adalah…",o:["Mengandalkan rumor","Menggabungkan data dan percakapan yang aman","Menyalahkan generasi muda"],c:1},
        {q:"Loyalitas yang sehat tumbuh dari…",o:["Hubungan kerja timbal balik yang adil","Slogan tanpa dukungan","Larangan menyampaikan masalah"],c:0}
      ]
    },
    {
      title: "Karier Lebih Luas daripada Kenaikan Jabatan",
      lede: "Karier adalah perjalanan bertambahnya kecakapan, dampak, otonomi, dan tanggung jawab. Jabatan hanyalah salah satu bentuknya—bukan satu-satunya tanda bahwa seorang guru sedang bertumbuh.",
      sections: [
        ["Enam Unsur yang Sering Tercampur", [
          "Pekerjaan menjelaskan hasil utama yang harus dihasilkan. Peran menjelaskan kontribusi seseorang dalam situasi tertentu. Kompetensi menggambarkan kemampuan yang diperlukan. Level menunjukkan kedalaman dan kemandirian. Jabatan struktural memberi kewenangan formal. Imbalan adalah penghargaan atas nilai pekerjaan, kemampuan, tanggung jawab, dan kinerja. Ketika keenamnya dicampur, sekolah mudah memberi gelar tanpa perubahan kerja atau menambah tugas tanpa pengakuan.",
          "Sebelum membuat tangga karier, rapikan arsitektur pekerjaan. Dua guru dengan judul sama dapat berada pada level penguasaan berbeda, tetapi keduanya tetap guru. Sebaliknya, koordinator mungkin memiliki tanggung jawab lintas kelas yang membutuhkan alokasi waktu dan tunjangan, bukan sekadar label tambahan."
        ]],
        ["Pertumbuhan Horizontal Sama Bermaknanya", [
          "Guru dapat berkembang dengan memperdalam pedagogi mata pelajaran, menjadi mentor, memimpin asesmen, membangun modul, meneliti praktik kelas, mendampingi inklusi, atau mengelola hubungan orang tua. Ini adalah mobilitas horizontal yang memperluas dampak tanpa mengubah seseorang menjadi manajer penuh waktu.",
          "Jalur horizontal penting karena kepemimpinan orang dan kepakaran mengajar membutuhkan kekuatan berbeda. Guru luar biasa belum tentu menikmati penganggaran, penjadwalan, konflik staf, atau evaluasi kinerja. Memaksa semua guru terbaik masuk manajemen justru dapat kehilangan pengajar hebat sekaligus menghasilkan pemimpin yang tidak bahagia."
        ]],
        ["Masa Kerja sebagai Konteks, Bukan Tiket", [
          "Pengalaman memberi kesempatan menghadapi lebih banyak situasi, tetapi lamanya bekerja tidak otomatis membuktikan kompetensi. Ada guru yang tumbuh cepat karena refleksi dan umpan balik; ada pula yang mengulang pola sama selama bertahun-tahun. Karena itu, rentang tahun pada peta karier sebaiknya bersifat ilustratif, bukan jaminan kenaikan.",
          "Keputusan perkembangan perlu melihat konsistensi kinerja, penguasaan kompetensi, perilaku sesuai nilai, dampak pada murid dan tim, kesiapan tanggung jawab baru, serta kebutuhan organisasi. Masa kerja dapat menjadi prasyarat minimum pada peran berisiko tinggi, tetapi tidak boleh berdiri sendiri."
        ]]
      ],
      reflection: "Siapa guru yang saat ini bertumbuh besar tanpa perubahan jabatan? Bentuk pengakuan, ruang kontribusi, atau level keahlian apa yang seharusnya tersedia baginya?",
      quiz: [
        {q:"Karier profesional paling tepat dipahami sebagai…",o:["Urutan gelar jabatan","Pertumbuhan kecakapan, dampak, otonomi, dan tanggung jawab","Lama bekerja saja"],c:1},
        {q:"Mobilitas horizontal berguna karena…",o:["Membuka pertumbuhan tanpa memaksa semua orang menjadi manajer","Menghapus kepakaran","Mengurangi tanggung jawab"],c:0},
        {q:"Masa kerja sebaiknya…",o:["Menjamin promosi otomatis","Diabaikan sepenuhnya","Menjadi konteks yang dilengkapi bukti kesiapan"],c:2}
      ]
    },
    {
      title: "Janji Kerja Sekolah Islam",
      lede: "Sistem karier akan terasa kosong bila pengalaman kerja sehari-hari bertentangan dengannya. Sekolah perlu merumuskan janji yang nyata tentang bagaimana orang dipimpin, dilindungi, dihargai, dan ditumbuhkan.",
      sections: [
        ["Dari Nilai ke Perilaku Organisasi", [
          "Amanah terlihat pada gaji yang dibayarkan tepat, keputusan yang terdokumentasi, informasi yang tidak disembunyikan, dan pimpinan yang menepati komitmen. Adab terlihat pada cara memberi umpan balik, menangani konflik, serta menjaga martabat orang yang sedang belajar. Keadilan tidak selalu berarti semua menerima hal sama; ia berarti kriteria jelas, kasus sebanding diperlakukan konsisten, dan perbedaan dapat dijelaskan.",
          "Tuliskan nilai dalam perilaku yang dapat diamati. ‘Kolaboratif’ dapat berarti berbagi rancangan, meminta bantuan sebelum masalah membesar, dan tidak mengambil kredit atas kerja tim. ‘Bertumbuh’ dapat berarti menetapkan sasaran, mencoba praktik baru, mengumpulkan bukti, dan merevisi. Ini membuat nilai dapat dilatih dan dibicarakan tanpa menjadi slogan."
        ]],
        ["Proposisi Nilai bagi Guru", [
          "Tanyakan mengapa guru yang sesuai misi memilih bergabung dan bertahan. Jawabannya dapat mencakup pekerjaan yang bermakna, komunitas yang sehat, pembinaan keislaman, kesempatan menguasai pedagogi, kepemimpinan yang dekat dengan kelas, jalur karier, imbalan yang layak, jadwal yang manusiawi, dan ruang memberi suara. Janji ini harus sesuai kemampuan sekolah; janji kecil yang ditepati lebih kuat daripada brosur yang berlebihan.",
          "Setiap tahap perjalanan pegawai perlu mencerminkan janji itu: iklan lowongan, seleksi, hari pertama, masa orientasi, penugasan, penilaian, promosi, hingga perpisahan. Ketidakselarasan paling cepat terbaca ketika pesan rekrutmen menjanjikan pengembangan, tetapi guru baru langsung diberi beban penuh tanpa mentor."
        ]],
        ["Keamanan untuk Berkata Jujur", [
          "Budaya belajar membutuhkan kemampuan mengakui kesalahan dan meminta dukungan. Ini bukan berarti kinerja buruk dibiarkan. Keamanan psikologis bekerja bersama akuntabilitas: orang dapat menyampaikan masalah tanpa dipermalukan, lalu tetap bertanggung jawab memperbaikinya.",
          "Sediakan jalur keluhan dan penanganan konflik yang jelas, termasuk ketika masalah melibatkan atasan. Lindungi kerahasiaan seperlunya, hindari pembalasan, catat keputusan, dan gunakan pola kasus sebagai bahan perbaikan sistem. Kepercayaan tumbuh ketika orang melihat proses bekerja secara konsisten."
        ]]
      ],
      reflection: "Janji apa yang secara tidak langsung dibuat sekolah kepada guru saat rekrutmen? Bagian mana yang paling konsisten ditepati, dan bagian mana yang paling berisiko mengecewakan?",
      quiz: [
        {q:"Nilai organisasi menjadi nyata ketika…",o:["Ditulis besar di dinding","Diterjemahkan menjadi perilaku dan keputusan yang konsisten","Hanya disampaikan saat orientasi"],c:1},
        {q:"Proposisi nilai guru harus…",o:["Menjanjikan semua hal","Realistis dan terlihat sepanjang perjalanan pegawai","Berbeda total dari praktik"],c:1},
        {q:"Keamanan psikologis berarti…",o:["Tidak ada standar kinerja","Jujur dan meminta bantuan tanpa dipermalukan, disertai akuntabilitas","Semua keputusan bebas"],c:1}
      ]
    },
    {
      title: "Jalur Karier yang Tidak Memaksa Semua Orang Menjadi Manajer",
      lede: "Arsitektur karier yang sehat menyediakan beberapa cara untuk memperbesar dampak. Guru dapat menjadi pendidik ahli, pendamping murid, spesialis kurikulum, atau pemimpin organisasi—dan tetap dihargai tanpa harus mengikuti satu tangga sempit.",
      sections: [
        ["Empat Jalur yang Dapat Disesuaikan", [
          "Jalur pendidik ahli berfokus pada mutu pengajaran, asesmen, riset praktik, dan pendampingan rekan. Jalur pendamping-pastoral memperkuat peran wali kelas, kesejahteraan, komunikasi keluarga, dan perlindungan murid. Jalur spesialis mencakup kurikulum, mata pelajaran, inklusi, teknologi belajar, bahasa, atau pengembangan profesional. Jalur kepemimpinan memikul arah, orang, sumber daya, risiko, dan akuntabilitas unit.",
          "Sekolah kecil tidak harus membuat banyak jabatan. Satu orang dapat memegang peran tambahan dalam porsi tertentu, selama hasil, kewenangan, waktu, durasi, dan pengakuannya jelas. Arsitektur berfungsi sebagai peta kontribusi, bukan alasan menambah birokrasi."
        ]],
        ["Level yang Sejajar, Bukan Kasta", [
          "Setiap jalur dapat memiliki tingkat awal, mandiri, mahir, dan strategis. Nama boleh disesuaikan dengan budaya sekolah, tetapi maknanya harus konsisten. Level lebih tinggi bukan berarti lebih mulia sebagai manusia; ia berarti masalah yang ditangani lebih kompleks, dampaknya lebih luas, keputusan lebih mandiri, dan tanggung jawab atas orang atau mutu lebih besar.",
          "Buat kesetaraan martabat dan, sejauh layak, peluang penghargaan antara jalur ahli dan struktural. Jika satu-satunya cara memperoleh imbalan lebih baik adalah meninggalkan kelas, sekolah mengirim pesan bahwa mengajar merupakan pekerjaan tingkat bawah."
        ]],
        ["Jembatan dan Pintu Kembali", [
          "Sediakan penugasan percobaan, proyek lintas fungsi, peran koordinator berjangka, atau posisi pelaksana tugas sebelum promosi permanen. Guru memperoleh kesempatan menguji minat dan kemampuan; sekolah melihat bukti dalam konteks nyata. Pada akhir masa tugas, keputusan dapat berupa pengangkatan, perpanjangan terarah, kembali ke jalur asal, atau rencana pengembangan.",
          "Perpindahan lateral dan kembali ke kelas tidak boleh diperlakukan sebagai kegagalan. Kadang seorang pemimpin memilih kembali menjadi pendidik ahli; kadang spesialis berpindah ke pendampingan murid. Sistem yang lentur mempertahankan talenta karena karier dapat mengikuti kekuatan dan fase hidup."
        ], note("Uji kesederhanaan", "Jika peta karier tidak dapat dijelaskan kepada guru baru dalam sepuluh menit, kemungkinan strukturnya terlalu rumit atau istilahnya belum jelas.")]
      ],
      reflection: "Gambarkan jalur yang saat ini tersedia. Di mana guru ahli dapat terus berkembang tanpa menjadi kepala sekolah, dan peran mana yang belum memiliki jembatan masuk yang aman?",
      quiz: [
        {q:"Jalur paralel dibutuhkan agar…",o:["Semua guru mendapat jabatan","Pertumbuhan sesuai kekuatan dan kebutuhan organisasi","Struktur semakin panjang"],c:1},
        {q:"Level lebih tinggi menunjukkan…",o:["Martabat manusia lebih tinggi","Kompleksitas, dampak, kemandirian, dan tanggung jawab lebih besar","Usia lebih tua"],c:1},
        {q:"Penugasan percobaan membantu…",o:["Menguji kesiapan sebelum keputusan permanen","Menghindari evaluasi","Memberi gelar tanpa waktu"],c:0}
      ]
    },
    {
      title: "Kamus Kompetensi dan Level Kematangan",
      lede: "Peta karier hanya dapat dipercaya bila sekolah mampu menjelaskan kemampuan apa yang harus tumbuh, seperti apa perilakunya, dan bukti apa yang menunjukkan bahwa kemampuan itu konsisten.",
      sections: [
        ["Kompetensi Inti dan Kompetensi Peran", [
          "Empat ranah—pedagogik, kepribadian, sosial, dan profesional—memberi fondasi yang kuat. Sekolah kemudian menambahkan kompetensi yang relevan dengan misi dan konteks, seperti keteladanan Islami, integrasi nilai, perlindungan anak, inklusi, literasi digital, kerja berbasis data, kolaborasi, dan komunikasi keluarga. Tidak semua peran membutuhkan kedalaman yang sama pada setiap ranah.",
          "Pisahkan kompetensi inti yang berlaku untuk semua pegawai dari kompetensi khusus peran. Kepala sekolah memerlukan pengambilan keputusan strategis dan pengelolaan orang; mentor memerlukan observasi serta coaching; spesialis kurikulum memerlukan desain dan moderasi; guru kelas memerlukan diagnosis belajar dan pengelolaan lingkungan."
        ]],
        ["Indikator yang Dapat Diamati", [
          "Hindari kata abstrak seperti ‘bagus’, ‘loyal’, atau ‘profesional’ tanpa penjelasan. Pada level awal, guru mungkin menggunakan contoh perencanaan dengan bimbingan. Pada level mandiri, ia merancang dan menyesuaikan berdasarkan bukti murid. Pada level mahir, ia menangani variasi kompleks dan membantu rekan. Pada level strategis, ia membangun sistem, standar, dan kapasitas lintas unit.",
          "Indikator ditulis sebagai perilaku dan hasil, bukan sifat pribadi. ‘Menyerahkan asesmen tepat waktu, memeriksa kualitasnya, menggunakan hasil untuk intervensi, dan membantu moderasi tim’ lebih adil daripada ‘memiliki komitmen tinggi’. Bahasa konkret mengurangi ruang suka-tidak-suka."
        ]],
        ["Bukti yang Berimbang", [
          "Gunakan beberapa sumber: perencanaan, observasi, karya dan kemajuan murid, refleksi guru, umpan balik peserta didik sesuai usia, kolaborasi, kontribusi proyek, serta catatan pengembangan. Tidak semua bukti memiliki bobot sama, dan hasil murid tidak boleh dipakai tanpa mempertimbangkan titik awal serta konteks kelas.",
          "Portofolio bukan gudang dokumen. Tentukan bukti minimum yang benar-benar menjawab indikator. Sampel yang sedikit tetapi dianalisis sering lebih berguna daripada ratusan berkas. Jaga privasi murid dan batasi akses sesuai kebutuhan."
        ]]
      ],
      reflection: "Pilih satu kompetensi penting. Apakah indikatornya sudah dapat diamati pada empat tingkat kematangan, atau masih bergantung pada kesan penilai?",
      quiz: [
        {q:"Kamus kompetensi yang baik berisi…",o:["Sifat abstrak","Perilaku dan hasil yang dapat diamati","Daftar sertifikat saja"],c:1},
        {q:"Portofolio sebaiknya…",o:["Memuat semua dokumen","Berisi bukti terpilih yang menjawab indikator","Mengabaikan privasi"],c:1},
        {q:"Hasil murid perlu dibaca dengan…",o:["Konteks titik awal dan beberapa sumber bukti","Satu nilai mentah","Perbandingan tanpa konteks"],c:0}
      ]
    },
    {
      title: "Gerbang Kenaikan yang Adil dan Dapat Dipertanggungjawabkan",
      lede: "Promosi yang kabur melahirkan prasangka. Gerbang kenaikan yang jelas membantu guru memahami proses, membantu penilai menjaga konsistensi, dan membantu sekolah menempatkan orang pada tanggung jawab yang tepat.",
      sections: [
        ["Empat Pertanyaan Sebelum Kenaikan", [
          "Apakah prasyarat minimum terpenuhi? Apakah kompetensi pada level berikutnya sudah tampak cukup konsisten? Apakah perilaku sejalan dengan nilai dan perlindungan murid? Apakah organisasi memiliki kebutuhan serta ruang tanggung jawab yang nyata? Keempat pertanyaan mencegah promosi hanya karena masa kerja, kedekatan, atau kekosongan mendadak.",
          "Kesiapan dan lowongan perlu dibedakan. Seorang guru dapat dinyatakan siap untuk peran tertentu meski posisi belum tersedia. Sekolah dapat memberi proyek pengembangan, daftar talenta, atau pengakuan level keahlian tanpa menjanjikan tanggal jabatan yang belum pasti."
        ]],
        ["Proses Keputusan yang Transparan", [
          "Siklus dapat dimulai dari nominasi diri atau atasan, pemeriksaan prasyarat, portofolio, observasi atau simulasi, wawancara berbasis bukti, panel kalibrasi, keputusan tertulis, lalu percakapan hasil. Untuk peran kepemimpinan, masa penugasan dengan sasaran dan dukungan memberi informasi lebih baik daripada wawancara saja.",
          "Panel kalibrasi tidak mencari kandidat kesayangan; ia membandingkan bukti dengan standar, memeriksa bias, dan memastikan kasus sebanding diperlakukan konsisten. Anggota yang memiliki konflik kepentingan perlu menyatakan dan, bila perlu, tidak ikut memutuskan."
        ]],
        ["Belum Siap Bukan Putusan Akhir", [
          "Guru yang belum memenuhi gerbang berhak menerima alasan spesifik: indikator mana yang belum konsisten, bukti apa yang kurang, pengalaman apa yang dibutuhkan, siapa yang mendampingi, dan kapan dapat ditinjau kembali. Jawaban ‘belum waktunya’ tanpa kriteria merusak kepercayaan.",
          "Sediakan mekanisme tinjau untuk kesalahan prosedur atau bukti yang terlewat, bukan jalur menawar standar. Dokumentasi secukupnya melindungi guru dan sekolah. Keputusan yang sulit lebih dapat diterima ketika prosesnya jelas, suara didengar, dan tindak lanjut tersedia."
        ]]
      ],
      reflection: "Ambil satu promosi terakhir di sekolah. Dapatkah alasan keputusan dijelaskan dengan empat pertanyaan, bukti, dan standar yang sama kepada kandidat lain?",
      quiz: [
        {q:"Kesiapan berbeda dari lowongan karena…",o:["Orang dapat siap meski posisi belum tersedia","Semua yang siap harus langsung diangkat","Lowongan tidak penting"],c:0},
        {q:"Fungsi panel kalibrasi adalah…",o:["Memilih berdasarkan kedekatan","Menguji konsistensi bukti dan mengurangi bias","Menghapus peran atasan"],c:1},
        {q:"Jika kandidat belum siap, sekolah perlu…",o:["Memberi alasan kabur","Menjelaskan celah, dukungan, bukti, dan waktu tinjau","Menutup peluang selamanya"],c:1}
      ]
    },
    {
      title: "Dua Tahun Pertama yang Menentukan",
      lede: "Retensi dimulai sebelum hari pertama. Rekrutmen yang jujur, orientasi yang terstruktur, mentor yang siap, dan beban yang bertahap membentuk pengalaman awal sekaligus mempercepat tumbuhnya kompetensi.",
      sections: [
        ["Rekrutmen dengan Gambaran Kerja yang Nyata", [
          "Jelaskan misi, jadwal, tanggung jawab mengajar dan nonmengajar, cara kinerja dinilai, imbalan, masa percobaan, budaya komunikasi, serta tantangan yang benar-benar ada. Gambaran realistis membantu kandidat memilih dengan sadar dan mengurangi kejutan setelah bergabung.",
          "Gunakan seleksi berbasis pekerjaan: simulasi mengajar, telaah rancangan, studi kasus komunikasi keluarga, refleksi, referensi, verifikasi dokumen, dan pemeriksaan keselamatan sesuai kebijakan. Jangan menilai ‘cocok budaya’ sebagai kesamaan kepribadian; nilai keselarasan perilaku dengan misi serta kemampuan belajar."
        ]],
        ["Onboarding sebagai Kurikulum", [
          "Susun hasil belajar 30, 60, 90 hari dan tahun pertama. Guru perlu memahami perlindungan murid, kurikulum, asesmen, sistem informasi, kebiasaan kelas, alur dukungan, komunikasi keluarga, serta siapa yang dapat dihubungi. Urutkan materi berdasarkan kebutuhan kerja; jangan membanjiri hari pertama dengan dokumen.",
          "Berikan beban bertahap bila memungkinkan. Lindungi waktu untuk observasi, perencanaan bersama, dan refleksi. Kepala sekolah tetap bertanggung jawab atas pengalaman guru baru; bagian SDM mengoordinasikan sistem, sedangkan mentor mendampingi praktik."
        ]],
        ["Mentoring yang Aman dan Terampil", [
          "Pilih mentor karena kemampuan mengajar, mendengar, memberi umpan balik, menjaga rahasia, dan memiliki waktu—bukan hanya karena paling senior. Bekali mereka dengan tujuan, batas peran, panduan pertemuan, cara mengeskalasi risiko, serta pengakuan beban.",
          "Pisahkan sejauh mungkin dukungan perkembangan dari keputusan formal. Mentor dapat memberi masukan, tetapi guru baru perlu ruang membicarakan kesulitan tanpa merasa setiap kalimat menjadi penilaian. Lakukan gerbang konfirmasi dengan bukti, percakapan, dan rencana lanjutan yang jelas."
        ]]
      ],
      reflection: "Jika seorang guru baru mulai Senin depan, pengalaman apa yang akan ia jalani pada 30 hari pertama? Mana yang benar-benar membantunya berhasil, dan mana yang hanya administratif?",
      quiz: [
        {q:"Gambaran kerja realistis berguna untuk…",o:["Menakut-nakuti kandidat","Membantu keputusan sadar dan mengurangi kejutan","Menyembunyikan tantangan"],c:1},
        {q:"Mentor sebaiknya dipilih berdasarkan…",o:["Senioritas saja","Kemampuan mendampingi dan waktu yang tersedia","Kedekatan pribadi"],c:1},
        {q:"Onboarding yang efektif…",o:["Menumpuk semua informasi di hari pertama","Disusun sebagai perjalanan belajar bertahap","Berhenti setelah orientasi"],c:1}
      ]
    },
    {
      title: "Belajar Profesional yang Menempel pada Pekerjaan",
      lede: "Pelatihan baru bernilai ketika mengubah keputusan guru di kelas. Pengembangan profesional perlu bergerak dari kebutuhan nyata, dipraktikkan, diberi umpan balik, dan dibuktikan melalui perubahan pengalaman murid.",
      sections: [
        ["Rencana Pengembangan yang Terarah", [
          "Setiap guru memilih satu atau dua sasaran yang terhubung dengan prioritas sekolah dan kebutuhannya. Sasaran menjelaskan praktik yang ingin berubah, alasan, tindakan, dukungan, bukti awal, indikator kemajuan, dan waktu tinjau. Terlalu banyak sasaran membuat energi tersebar dan sulit melihat dampak.",
          "Rencana bukan kontrak yang kaku. Jika bukti menunjukkan masalah berbeda, sasaran dapat disesuaikan melalui percakapan. Guru awal karier mungkin membutuhkan struktur lebih rapat; guru mahir dapat memimpin penyelidikan praktik atau mendampingi tim."
        ]],
        ["Siklus Belajar di Tempat Kerja", [
          "Gunakan siklus: pahami masalah, pelajari prinsip atau contoh, rancang, praktikkan, observasi, baca bukti murid, beri umpan balik, revisi, dan ulangi. Coaching, observasi sejawat, lesson study, demonstrasi kelas, serta komunitas mata pelajaran membuat belajar dekat dengan pekerjaan.",
          "Waktu kolaborasi harus benar-benar dilindungi. Pertemuan yang disebut komunitas belajar tetapi dipenuhi pengumuman administrasi tidak akan membangun kompetensi. Pisahkan agenda operasi dari agenda belajar dan tentukan keluaran setiap pertemuan."
        ]],
        ["Mengukur Transfer, Bukan Kehadiran", [
          "Evaluasi pengembangan pada beberapa lapis: relevansi pengalaman, pengetahuan atau keterampilan yang bertambah, perubahan praktik, dan dampak pada murid. Sertifikat hanya menunjukkan kehadiran. Bukti yang lebih kuat ialah rancangan yang berubah, kualitas pertanyaan, pola umpan balik, karya murid, atau konsistensi antarkelas.",
          "Jangan menuntut hasil murid instan dari setiap pelatihan. Sebagian perubahan membutuhkan waktu dan dipengaruhi banyak faktor. Gunakan rentang bukti, bandingkan titik awal, dan fokus pada kontribusi yang masuk akal, bukan klaim sebab-akibat yang berlebihan."
        ]]
      ],
      reflection: "Pilih satu pelatihan terakhir. Bukti apa yang menunjukkan materi tersebut berpindah ke praktik kelas dan memberi perbedaan bagi murid?",
      quiz: [
        {q:"Sasaran pengembangan yang baik…",o:["Banyak dan umum","Sedikit, spesifik, didukung, dan ditinjau","Tidak terhubung kebutuhan"],c:1},
        {q:"Komunitas belajar profesional perlu…",o:["Waktu terlindungi untuk memecahkan masalah praktik","Hanya pengumuman","Menghindari bukti murid"],c:0},
        {q:"Bukti transfer pelatihan yang lebih kuat adalah…",o:["Daftar hadir","Perubahan praktik dan bukti pengalaman murid","Foto acara"],c:1}
      ]
    },
    {
      title: "Penilaian Kinerja tanpa Budaya Takut",
      lede: "Penilaian yang sehat tidak memilih antara dukungan dan akuntabilitas. Ia memberi kejelasan, bukti yang wajar, percakapan jujur, bantuan untuk membaik, serta tindakan tegas ketika standar keselamatan atau kinerja terus tidak terpenuhi.",
      sections: [
        ["Ekspektasi sebelum Evaluasi", [
          "Orang tidak seharusnya terkejut oleh standar saat rapor kinerja dibuka. Pada awal siklus, sepakati hasil peran, kompetensi prioritas, perilaku nilai, bukti, dukungan, dan jadwal percakapan. Bedakan target yang berada dalam kendali guru dari hasil yang juga dipengaruhi konteks.",
          "Adakan percakapan singkat sepanjang tahun, bukan satu sidang tahunan. Masalah kecil dapat diperbaiki lebih cepat; kemajuan dapat dikenali; dukungan dapat disesuaikan. Catatan ringkas mengenai kesepakatan mengurangi perbedaan ingatan tanpa mengubah hubungan menjadi birokrasi."
        ]],
        ["Bukti yang Tidak Bergantung pada Satu Kunjungan", [
          "Observasi kelas adalah cuplikan, bukan keseluruhan film. Gabungkan beberapa kunjungan, perencanaan, asesmen, pekerjaan murid, refleksi, kontribusi tim, serta pencapaian sasaran. Umpan balik murid dan keluarga dapat memberi sinyal layanan, tetapi tidak boleh dipakai sebagai kontes popularitas.",
          "Latih penilai menggunakan rubrik, mencatat bukti deskriptif, membedakan fakta dari tafsir, dan mengenali bias. Kalibrasi sampel membantu pimpinan melihat apakah standar diterapkan konsisten di unit atau jenjang berbeda."
        ]],
        ["Ketika Kinerja Belum Memenuhi Harapan", [
          "Mulailah dengan diagnosis: apakah ekspektasi jelas, keterampilan belum cukup, sumber daya kurang, beban tidak masuk akal, dukungan tidak tersedia, atau ada masalah perilaku. Rencana perbaikan menyebutkan celah, standar, tindakan, dukungan, bukti, tenggat, dan konsekuensi secara proporsional.",
          "Pelanggaran keselamatan atau integritas memerlukan respons berbeda dari kekurangan keterampilan yang masih dapat dikembangkan. Ikuti kebijakan dan ketentuan ketenagakerjaan yang berlaku, dokumentasikan dengan tertib, jaga kerahasiaan, serta berikan kesempatan didengar. Martabat tidak menghapus akuntabilitas; akuntabilitas tidak membenarkan penghinaan."
        ]]
      ],
      reflection: "Apakah guru di sekolah dapat memprediksi bagaimana kinerjanya dinilai dan bukti apa yang digunakan? Bagian mana yang masih terlalu bergantung pada selera atasan?",
      quiz: [
        {q:"Penilaian yang adil dimulai dengan…",o:["Kejutan tahunan","Ekspektasi, bukti, dan dukungan yang jelas sejak awal","Rumor rekan"],c:1},
        {q:"Observasi kelas sebaiknya…",o:["Menjadi satu-satunya bukti","Digabung dengan bukti lain dan lebih dari satu cuplikan","Dihapus"],c:1},
        {q:"Rencana perbaikan perlu…",o:["Celah, dukungan, bukti, waktu, dan konsekuensi jelas","Ancaman umum","Tanpa tindak lanjut"],c:0}
      ]
    },
    {
      title: "Menghubungkan Karier, Imbalan, Pengakuan, dan Beban Kerja",
      lede: "Peta karier tidak akan dipercaya bila tanggung jawab bertambah tetapi waktu, dukungan, dan penghargaan tetap sama. Sistem imbalan perlu adil secara internal, cukup kompetitif, terjangkau, dan mudah dijelaskan.",
      sections: [
        ["Grade, Peran, dan Rentang Imbalan", [
          "Kelompokkan pekerjaan berdasarkan tingkat kompleksitas, dampak, kewenangan, keahlian, dan tanggung jawab—bukan nama orang. Setiap grade memiliki rentang imbalan agar ada ruang perkembangan tanpa harus mengganti jabatan setiap tahun. Gunakan data pasar yang relevan sebagai salah satu masukan, lalu uji kemampuan keuangan sekolah.",
          "Bedakan imbalan dasar, tunjangan tanggung jawab, insentif tertentu, dan fasilitas. Peran tambahan yang berjangka dapat memperoleh tunjangan selama amanah berlangsung. Struktur ini menghindari gelar permanen hanya untuk mengakui tugas sementara."
        ]],
        ["Keadilan yang Dapat Dijelaskan", [
          "Audit perbedaan untuk pekerjaan sebanding dan cari alasan yang sah: level, cakupan, kompetensi langka, kinerja, atau pengalaman relevan. Perbedaan yang tidak dapat dijelaskan perlu rencana koreksi bertahap. Kerahasiaan nominal pribadi tetap dijaga, tetapi prinsip, grade, rentang, dan proses keputusan sebaiknya cukup transparan.",
          "Jangan menjanjikan kenaikan yang tidak dapat dibiayai. Buat simulasi beberapa tahun, termasuk pertumbuhan jumlah guru, inflasi, manfaat, promosi, dan skenario pendapatan. Keberlanjutan merupakan bagian dari keadilan karena janji yang runtuh akan melukai seluruh tim."
        ]],
        ["Pengakuan dan Beban yang Manusiawi", [
          "Pengakuan nonfinansial dapat berupa waktu belajar, kesempatan memimpin proyek, akses sumber daya, publikasi karya, pilihan penugasan, fleksibilitas wajar, atau apresiasi yang spesifik. Pengakuan harus tulus dan tidak dipakai untuk menggantikan hak atau imbalan yang seharusnya.",
          "Lakukan audit beban: jam tatap muka, persiapan, asesmen, wali kelas, komunikasi keluarga, rapat, kegiatan, administrasi, dan pekerjaan emosional. Ketika tanggung jawab baru ditambahkan, putuskan pekerjaan apa yang dikurangi. Karier yang terlihat maju tetapi mengorbankan kesehatan tidak akan mempertahankan orang baik."
        ]]
      ],
      reflection: "Peran tambahan apa yang saat ini diberikan tanpa waktu, wewenang, atau pengakuan yang cukup? Perubahan apa yang paling mendesak dan tetap terjangkau?",
      quiz: [
        {q:"Grade pekerjaan sebaiknya ditentukan oleh…",o:["Kedekatan dengan pimpinan","Nilai dan kompleksitas pekerjaan","Nama orang"],c:1},
        {q:"Transparansi imbalan berarti…",o:["Membuka semua nominal pribadi","Menjelaskan prinsip, struktur, dan proses sambil menjaga privasi","Tidak menjelaskan apa pun"],c:1},
        {q:"Saat tugas baru ditambahkan, sekolah perlu…",o:["Menambah terus","Menilai waktu dan mengurangi atau menata ulang beban","Mengabaikan pekerjaan emosional"],c:1}
      ]
    },
    {
      title: "Mobilitas Internal dan Suksesi Kepemimpinan",
      lede: "Sekolah yang berkelanjutan tidak menunggu jabatan kosong untuk mencari pengganti. Ia mengenali talenta, memberi pengalaman pengembangan, dan menyiapkan lebih dari satu orang agar pengetahuan serta kepemimpinan tidak bergantung pada figur tunggal.",
      sections: [
        ["Talent Review yang Berbasis Bukti", [
          "Secara berkala, pimpinan meninjau kebutuhan peran, kinerja, potensi belajar, aspirasi, kesiapan, risiko kehilangan, dan dukungan setiap orang. Potensi bukan kesan ‘cerdas’ atau ‘dekat’, melainkan kapasitas mempelajari tuntutan lebih kompleks, menerima umpan balik, serta menunjukkan perilaku yang dibutuhkan.",
          "Peta seperti siap sekarang, siap satu-dua tahun, dan siap lebih lama hanyalah alat perencanaan. Label tidak perlu diumumkan sebagai identitas permanen. Aspirasi dapat berubah, bukti bertambah, dan orang berhak memilih jalur ahli tanpa dianggap kurang ambisius."
        ]],
        ["Pengalaman sebelum Jabatan", [
          "Kesiapan dibangun melalui tugas nyata: memimpin perbaikan asesmen, menjadi mentor, mengelola proyek, menggantikan pimpinan saat terbatas, menyelesaikan konflik, menyusun anggaran kecil, atau mempresentasikan hasil kepada yayasan. Setiap tugas memiliki tujuan belajar, kewenangan, sponsor, indikator, dan refleksi.",
          "Rotasi bukan sekadar memindahkan orang. Jangan memberi tugas ‘pengembangan’ tanpa dukungan lalu menggunakan kegagalannya sebagai bukti ketidakmampuan. Tantangan perlu cukup nyata untuk belajar, tetapi tetap aman bagi murid dan organisasi."
        ]],
        ["Rencana Pengganti dan Pengetahuan Kritis", [
          "Untuk peran penting, tentukan pengganti darurat, kandidat jangka menengah, celah kompetensi, dan tindakan pengembangan. Bedakan suksesi dari janji promosi: kandidat dipersiapkan, tetapi keputusan tetap mengikuti bukti, kebutuhan, dan proses yang adil saat posisi tersedia.",
          "Dokumentasikan keputusan, kalender, kontak, risiko, dan proses penting agar transisi tidak bergantung pada ingatan. Serah terima yang baik mencakup hubungan, isu yang belum selesai, alasan di balik pilihan, dan ruang bagi pemimpin baru untuk menata ulang."
        ]]
      ],
      reflection: "Jika kepala unit utama tidak tersedia selama tiga bulan, siapa yang dapat menjaga fungsi kritis? Bukti kesiapan dan pengalaman apa yang masih perlu dibangun?",
      quiz: [
        {q:"Talent review yang sehat menggunakan…",o:["Kesan pribadi saja","Bukti, aspirasi, kesiapan, kebutuhan, dan dukungan","Usia saja"],c:1},
        {q:"Penugasan pengembangan perlu memiliki…",o:["Tantangan tanpa dukungan","Tujuan, kewenangan, sponsor, indikator, dan refleksi","Gelar permanen"],c:1},
        {q:"Suksesi berbeda dari janji promosi karena…",o:["Persiapan tidak menjamin pengangkatan","Tidak membutuhkan kandidat","Hanya untuk keadaan darurat"],c:0}
      ]
    },
    {
      title: "Mengukur Retensi dan Menjalankan Roadmap 12 Bulan",
      lede: "Implementasi yang baik dimulai kecil tetapi dirancang utuh. Sekolah memilih sedikit indikator yang memicu tindakan, menguji sistem pada lingkup terkendali, lalu memperluas setelah bukti menunjukkan proses cukup adil dan dapat dijalankan.",
      sections: [
        ["Dashboard yang Membantu Keputusan", [
          "Ukur turnover keseluruhan dan yang disesalkan, kepergian pada dua tahun pertama, masa pengisian posisi, retensi per unit, mobilitas internal, keterisian jabatan dari talenta internal, waktu menuju kompetensi, partisipasi serta transfer pengembangan, beban, absensi, dan pengalaman kerja. Pilah data secukupnya untuk melihat pola tanpa membuka identitas kelompok kecil.",
          "Angka perlu ditemani percakapan. <em>Stay interview</em> menanyakan apa yang membuat orang bertahan, apa yang menghambat, dukungan yang dibutuhkan, dan perubahan yang mungkin mendorong mereka pergi. Wawancara keluar mencari pembelajaran, bukan pembelaan. Tema dilaporkan secara agregat dan ditindaklanjuti."
        ]],
        ["Empat Gelombang Implementasi", [
          "Bulan 1–3: bentuk sponsor dan tim kecil, dengarkan guru, petakan pekerjaan, data, risiko, serta prinsip desain. Bulan 4–6: susun jalur, level, kamus kompetensi, gerbang, tata kelola, dan simulasi biaya; uji bahasa dengan perwakilan guru. Bulan 7–9: pilot pada satu unit atau kelompok peran, latih penilai dan mentor, kumpulkan pertanyaan, serta koreksi proses.",
          "Bulan 10–12: evaluasi keadilan, beban, kualitas keputusan, pengalaman peserta, dan implikasi biaya; perbaiki dokumen; tetapkan rencana perluasan dan komunikasi. Kalender dapat disesuaikan. Gerbang setiap gelombang adalah bukti kesiapan, bukan keinginan mengumumkan program secepat mungkin."
        ]],
        ["Menjaga Sistem Tetap Hidup", [
          "Tetapkan pemilik arsitektur, pemilik data, forum kalibrasi, siklus tahunan, mekanisme perubahan, dan jalur pertanyaan. Selaraskan rekrutmen, onboarding, pengembangan, penilaian, promosi, imbalan, dan suksesi agar tidak memiliki definisi kompetensi yang berbeda-beda.",
          "Tinjau dampak yang tidak diinginkan: birokrasi berlebihan, kompetisi tidak sehat, beban portofolio, bias, inflasi jabatan, atau guru mengejar bukti yang tampak bagus tetapi tidak bermanfaat. Sistem karier bukan produk sekali jadi. Ia adalah kebiasaan organisasi belajar tentang cara menumbuhkan orang sambil menjaga amanah pendidikan."
        ], note("Mulai dengan satu keputusan", "Pilih satu proses yang paling menyakitkan—misalnya onboarding atau promosi koordinator—lalu uji arsitektur secara utuh pada lingkup tersebut sebelum memperluas.")]
      ],
      reflection: "Tentukan satu pilot 90 hari: masalah apa yang diselesaikan, siapa yang terlibat, bukti apa yang dikumpulkan, dan gerbang apa yang menentukan apakah sistem layak diperluas?",
      quiz: [
        {q:"Dashboard retensi yang berguna…",o:["Mengumpulkan semua angka","Memilih indikator yang memicu percakapan dan tindakan","Menampilkan data pribadi"],c:1},
        {q:"Pilot dilakukan agar…",o:["Program tampak selesai","Sekolah belajar dan memperbaiki sebelum perluasan","Semua unit berubah sekaligus"],c:1},
        {q:"Sistem karier perlu ditinjau karena…",o:["Desain awal selalu sempurna","Dapat menimbulkan beban, bias, dan perilaku tak diinginkan","Guru tidak perlu kepastian"],c:1}
      ]
    }
  ];

  const assessment = [
    ["Tiga guru baik keluar dalam satu semester. Langkah awal yang paling bertanggung jawab adalah…",["Menambah slogan loyalitas","Menggabungkan data, stay interview, dan tinjauan pengalaman kerja","Menahan surat pengalaman"],2],
    ["Tujuan retensi yang realistis adalah…",["Tidak ada orang boleh pergi","Mengurangi kepergian yang dapat dicegah dan menjaga transisi","Menghapus evaluasi"],2],
    ["Guru mahir ingin tetap mengajar. Sistem sebaiknya…",["Memaksanya menjadi wakil kepala sekolah","Menyediakan jalur pendidik ahli dengan dampak dan penghargaan lebih besar","Menghentikan perkembangannya"],2],
    ["Peran koordinator menambah kerja lintas kelas. Tindakan tepat adalah…",["Memberi gelar saja","Memperjelas hasil, wewenang, waktu, durasi, dan pengakuan","Menganggapnya sukarela selamanya"],2],
    ["Masa kerja sepuluh tahun menunjukkan…",["Promosi otomatis","Pengalaman yang tetap perlu dilengkapi bukti kompetensi dan kesiapan","Kepemimpinan pasti kuat"],2],
    ["Nilai amanah dalam pengalaman kerja tampak melalui…",["Janji yang ditepati dan hak yang tertib","Poster baru","Keputusan rahasia"],1],
    ["Sekolah kecil tidak memiliki banyak jabatan. Arsitektur karier tetap dapat dibuat dengan…",["Peran dan level kontribusi yang sederhana","Puluhan titel","Promosi tahunan"],1],
    ["Indikator kompetensi yang paling dapat dinilai adalah…",["Sangat profesional","Menggunakan bukti asesmen untuk menyesuaikan intervensi","Memiliki aura pemimpin"],2],
    ["Portofolio karier yang sehat berisi…",["Semua dokumen sejak awal bekerja","Bukti terpilih yang menjawab indikator dan menjaga privasi","Sertifikat saja"],2],
    ["Kandidat siap tetapi posisi belum tersedia. Sekolah sebaiknya…",["Menjanjikan tanggal palsu","Mengakui kesiapan dan memberi pengalaman tanpa menjamin jabatan","Menurunkan penilaian"],2],
    ["Panel promosi memiliki kerabat kandidat. Praktik tepat adalah…",["Mengabaikan hubungan","Menyatakan konflik dan tidak ikut memutuskan bila perlu","Memberi suara tambahan"],2],
    ["Guru baru langsung diberi beban penuh tanpa dukungan. Risiko utamanya adalah…",["Kompetensi dan retensi awal terganggu","Guru pasti lebih cepat mahir","Mentor tidak diperlukan"],1],
    ["Mentor terbaik dipilih karena…",["Paling lama bekerja","Mampu mengajar dan mendampingi serta memiliki waktu","Paling dekat dengan pimpinan"],2],
    ["Pelatihan dinilai berhasil hanya dari daftar hadir. Bukti yang hilang adalah…",["Foto tambahan","Transfer ke praktik dan pengalaman murid","Nama hotel"],2],
    ["Satu observasi dipakai untuk menentukan seluruh nilai kinerja. Perbaikannya…",["Tambah beberapa sumber dan kesempatan bukti","Hapus percakapan","Nilai berdasarkan kesan"],1],
    ["Guru belum mencapai standar karena belum pernah mendapat pelatihan wajib. Respons tepat adalah…",["Langsung menyalahkan","Perjelas standar, berikan dukungan, lalu tinjau bukti pada waktu yang disepakati","Abaikan selamanya"],2],
    ["Tunjangan peran tambahan paling logis diberikan…",["Selama tanggung jawab berlangsung","Selamanya meski tugas berhenti","Tanpa melihat cakupan"],1],
    ["Pengakuan nonfinansial sebaiknya…",["Menggantikan hak dasar","Melengkapi imbalan dan sesuai kontribusi","Selalu berupa piala"],2],
    ["Talent review yang adil memasukkan…",["Aspirasi, bukti, kesiapan, kebutuhan, dan dukungan","Popularitas","Usia saja"],1],
    ["Setelah pilot sistem karier, keputusan perlu didasarkan pada…",["Keinginan meluncurkan cepat","Keadilan proses, beban, kualitas keputusan, biaya, dan pengalaman peserta","Jumlah spanduk"],2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan merancang, menjalankan, dan memperbaiki sistem karier guru.</p><div class="card reveal">' +
    assessment.map(([question, options, correct]) => '<div class="assess-q" data-correct="' + correct + '"><p>' + question + "</p>" + options.map(option => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + option + "</button>").join("") + "</div>").join("") +
    '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => ["bab" + (index + 1), chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 57,
    title: "Sistem Karier Guru Sekolah Islam",
    subtitle: "Strategi Menumbuhkan Kompetensi, Loyalitas, dan Retensi Guru",
    chapterCount: chapters.length,
    videoId: "RmLQPAcvBG4"
  };
})();
