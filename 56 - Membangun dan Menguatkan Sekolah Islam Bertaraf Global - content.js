/* Konten eBook Interaktif 56 — Membangun dan Menguatkan Sekolah Islam Bertaraf Global */
(() => {
  const section = ([heading, paragraphs, extra = ""]) =>
    "<h4>" + heading + "</h4>" +
    paragraphs.map(paragraph => "<p>" + paragraph + "</p>").join("") + extra;

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
      title: "Mutu Global Bukan Label",
      lede: "Sekolah bertaraf global bukan sekolah yang paling banyak memakai istilah asing. Ia adalah sekolah yang berani membuat janji mutu yang jelas, membuktikannya melalui pengalaman murid, dan terus memperbaiki diri ketika bukti menunjukkan hasil yang belum memadai.",
      visual: '<figure class="chapter-visual"><img src="https://media.edumind.id/ebook-edumind/056-sekolah-islam-bertaraf-global/chapter-01.webp?v=20260901-1" alt="Tim pemimpin perempuan sekolah Islam menelaah bukti mutu dan roadmap global" loading="lazy" decoding="async"><figcaption>Mutu global tumbuh ketika visi diterjemahkan menjadi pengalaman belajar, bukti hasil murid, dan keputusan perbaikan yang konsisten.</figcaption></figure>',
      sections: [
        ["Dari Slogan ke Janji Mutu", [
          "Kata <em>global</em> mudah ditempelkan pada brosur: bahasa Inggris, gedung modern, kunjungan luar negeri, atau kurikulum berlisensi. Semua itu dapat berguna, tetapi tidak otomatis menghasilkan pendidikan bermutu. Ukuran yang lebih jujur adalah apa yang mampu dipahami, dilakukan, dan dipertanggungjawabkan murid; seberapa aman mereka belajar; serta apakah sekolah dapat menunjukkan proses yang membuat hasil itu terjadi.",
          "Karena itu, sekolah perlu menulis definisi operasionalnya sendiri. Misalnya: lulusan berakidah kokoh, beradab, mampu bernalar dan berkomunikasi lintas budaya, memiliki literasi akademik yang kuat, serta siap berkontribusi pada persoalan lokal maupun global. Setiap frasa kemudian diterjemahkan menjadi indikator, pengalaman belajar, asesmen, dan bukti."
        ]],
        ["Empat Dimensi Kompetensi Global", [
          "Kompetensi global dapat dibaca melalui empat kemampuan yang saling terkait: menelaah isu lokal dan dunia, memahami sudut pandang orang lain, berinteraksi secara terbuka dan tepat, serta bertindak untuk kemaslahatan bersama dan keberlanjutan. Ini bukan mata pelajaran tambahan. Dimensi tersebut dapat hidup dalam sains, bahasa, studi Islam, proyek sosial, sejarah, dan keseharian sekolah.",
          "Murid yang fasih berbahasa asing tetapi mudah merendahkan budaya lain belum menunjukkan kompetensi global. Sebaliknya, murid yang mampu membaca persoalan air di kampungnya, membandingkannya dengan isu dunia, berdialog secara santun, lalu merancang tindakan yang bermanfaat sedang menjalani pendidikan global dalam arti yang lebih utuh."
        ]],
        ["Bukti yang Layak Dipercaya", [
          "Bukti mutu tidak berhenti pada nilai ujian. Sekolah dapat menggabungkan kemajuan akademik, portofolio proyek, kualitas karya, kemampuan bahasa, kesejahteraan, karakter, partisipasi, tujuan studi lanjut, dan suara murid. Data perlu dipilah agar kelompok yang tertinggal tidak tertutup oleh rata-rata yang tampak baik.",
          "Label menjadi kredibel ketika ada kesesuaian antara janji, praktik, dan hasil. Jika sekolah mengaku berpusat pada murid, observasi kelas seharusnya memperlihatkan murid berpikir dan mendapat umpan balik. Jika mengaku inklusif, dukungan belajar harus terlihat. Jika mengaku Islami, adab dan amanah hadir dalam keputusan, bukan hanya di dinding."
        ], note("Pertanyaan penguji", "Jika seluruh istilah internasional dihapus dari brosur, bukti apa yang masih membuat orang tua dan mitra menyimpulkan bahwa sekolah ini bermutu global?")]
      ],
      reflection: "Tuliskan satu kalimat definisi ‘bertaraf global’ untuk sekolah Anda. Bukti apa yang sudah tersedia, dan bagian mana yang masih sebatas aspirasi?",
      quiz: [
        { q: "Indikator paling kuat dari sekolah bertaraf global adalah…", o: ["Banyak istilah asing pada promosi", "Keselarasan antara janji mutu, pengalaman belajar, dan bukti hasil", "Gedung yang paling mahal"], c: 1 },
        { q: "Kompetensi global paling tepat diperlakukan sebagai…", o: ["Satu kegiatan wisata", "Kemampuan lintas mata pelajaran untuk memahami perspektif dan bertindak bertanggung jawab", "Pengganti identitas lokal"], c: 1 },
        { q: "Mengapa rata-rata nilai saja tidak cukup?", o: ["Karena nilai tidak boleh dipakai", "Karena mutu juga mencakup proses, kesejahteraan, karakter, dan kesenjangan antarkelompok", "Karena semua murid harus bernilai sama"], c: 1 }
      ]
    },
    {
      title: "Jati Diri Sebelum Internasionalisasi",
      lede: "Sekolah Islam tidak perlu menukar akarnya untuk menjangkau dunia. Justru identitas yang jernih membuat sekolah mampu memilih, menyaring, dan mengolah praktik global tanpa kehilangan arah.",
      sections: [
        ["Kompas yang Mendahului Program", [
          "Internasionalisasi sebaiknya dimulai dari pertanyaan tentang manusia seperti apa yang ingin ditumbuhkan. Tauhid memberi arah pengabdian; adab mengatur hubungan dengan ilmu dan sesama; amanah menuntut mutu serta akuntabilitas; rahmah menjaga martabat; kemaslahatan menghubungkan kecakapan dengan kontribusi. Nilai ini menjadi kriteria keputusan, bukan tambahan setelah program selesai dirancang.",
          "Ketika sekolah menilai kurikulum, kemitraan, teknologi, atau kebijakan bahasa, kompas tersebut membantu membedakan hal yang mendukung misi dari hal yang hanya tampak modern. Sekolah dapat terbuka terhadap ilmu dan praktik terbaik sambil tetap kritis terhadap asumsi yang tidak sesuai dengan tujuan pendidikannya."
        ]],
        ["Integrasi yang Terlihat dalam Kehidupan", [
          "Pendidikan Islam menjadi kuat ketika nilai menjiwai cara murid bertanya, meneliti, berdiskusi, menggunakan teknologi, menjaga lingkungan, dan memperlakukan perbedaan. Integrasi bukan menyisipkan ayat tanpa hubungan yang bermakna, melainkan mempertemukan pengetahuan dengan tanggung jawab moral dan tindakan.",
          "Guru perlu ruang untuk merancang koneksi yang autentik. Proyek tentang air, misalnya, dapat menggabungkan sains, matematika, kebijakan publik, bahasa, fikih, amanah penggunaan sumber daya, dan aksi pelayanan. Murid belajar bahwa agama tidak memisahkan kecakapan dari akhlak."
        ]],
        ["Keterbukaan tanpa Kehilangan Diri", [
          "Kecakapan lintas budaya meminta rasa ingin tahu dan kerendahan hati. Murid belajar memahami latar orang lain tanpa harus menyetujui semua pandangan. Mereka juga mampu menjelaskan keyakinan secara beradab, menghindari stereotip, dan bekerja sama untuk kebaikan yang dapat dibagi.",
          "Sekolah perlu melibatkan orang tua dalam percakapan ini. Kekhawatiran tentang budaya, bahasa, dan identitas tidak diselesaikan dengan slogan. Jelaskan tujuan, batas, contoh pengalaman belajar, mekanisme perlindungan, serta cara sekolah mengevaluasi dampaknya."
        ]]
      ],
      reflection: "Ambil satu program internasional yang sedang dipertimbangkan. Nilai Islam apa yang diperkuat, risiko nilai apa yang perlu dijaga, dan bukti apa yang akan digunakan untuk menilai dampaknya?",
      quiz: [
        { q: "Peran utama identitas sekolah dalam internasionalisasi adalah…", o: ["Menutup diri dari praktik luar", "Menjadi kompas untuk memilih dan mengolah praktik global", "Menggantikan standar akademik"], c: 1 },
        { q: "Contoh integrasi nilai yang paling kuat adalah…", o: ["Menempelkan kutipan tanpa mengubah pembelajaran", "Menghubungkan pengetahuan, pertimbangan moral, dan tindakan nyata", "Menambah tugas hafalan pada semua proyek"], c: 1 },
        { q: "Keterbukaan lintas budaya berarti…", o: ["Menerima semua pandangan", "Memahami secara hormat sambil tetap mampu menjelaskan keyakinan", "Melepaskan identitas"], c: 1 }
      ]
    },
    {
      title: "Memilih Jalur Global yang Tepat",
      lede: "Tidak ada satu stempel yang otomatis membuat sekolah menjadi internasional. Setiap kerangka menjawab kebutuhan berbeda. Keputusan yang baik dimulai dari hasil yang dibutuhkan sekolah, bukan dari nama yang paling terkenal.",
      sections: [
        ["Empat Jalur yang Sering Tercampur", [
          "Cambridge International menyediakan program, kurikulum, asesmen, dan kualifikasi tertentu; sekolah melewati proses registrasi dan memenuhi standar kualitas. IB mengotorisasi sekolah untuk menyelenggarakan program tertentu setelah tahap pertimbangan, kandidat, pengembangan profesional, dan verifikasi kesiapan. Keduanya berhubungan erat dengan program belajar, tetapi bukan hal yang sama.",
          "CIS menilai sekolah secara institusional melalui akreditasi yang menekankan tujuan, pembelajaran, kesejahteraan, perlindungan, dan perbaikan berkelanjutan. ISO 21001 adalah sistem manajemen organisasi pendidikan; sertifikasi menilai apakah sistem pengelolaan memenuhi persyaratan standar. Kurikulum, otorisasi program, akreditasi institusi, dan sertifikasi sistem manajemen tidak boleh dipertukarkan istilahnya."
        ]],
        ["Mulai dari Kebutuhan, Bukan Gengsi", [
          "Sekolah yang ingin menyediakan kualifikasi internasional mungkin menilai jalur berbeda dari sekolah yang membutuhkan penguatan budaya belajar atau tata kelola. Tanyakan: masalah apa yang ingin diselesaikan, hasil apa yang dibutuhkan murid, pengakuan apa yang relevan bagi tujuan studi, dan kemampuan apa yang harus dibangun di dalam organisasi.",
          "Hitung biaya penuh: pendaftaran, pelatihan, asesmen, teknologi, konsultasi, waktu staf, pengembangan bahasa, fasilitas, audit atau kunjungan, dan pemeliharaan setelah pengakuan. Biaya terbesar sering bukan formulir awal, melainkan kapasitas yang harus terus hidup setiap tahun."
        ]],
        ["Uji Kesesuaian dan Kesiapan", [
          "Gunakan matriks keputusan yang membandingkan kesesuaian misi, kebutuhan murid, pengakuan tujuan, dampak kurikulum, tuntutan guru, perlindungan murid, data, biaya lima tahun, risiko ketergantungan, dan dukungan orang tua. Beri bobot sesuai konteks, lalu dokumentasikan asumsi.",
          "Hubungi lembaga resmi dan baca persyaratan mutakhir sebelum menjanjikan jadwal. Tidak ada durasi universal untuk semua sekolah. Status kandidat atau sedang berproses juga tidak boleh dipromosikan seolah-olah sudah diotorisasi, terakreditasi, atau tersertifikasi."
        ], note("Bahasa yang presisi", "Sebutkan status sesuai kenyataannya: menggunakan sumber belajar tertentu, terdaftar, kandidat, diotorisasi, terakreditasi, atau tersertifikasi. Ketepatan istilah adalah bagian dari integritas reputasi.")]
      ],
      reflection: "Jalur pengakuan apa yang sedang dipertimbangkan sekolah? Tulis kebutuhan yang ingin dijawab, biaya pemeliharaan, dan kondisi yang membuat sekolah berani menunda keputusan.",
      quiz: [
        { q: "Cara terbaik memilih kerangka global adalah…", o: ["Mengikuti sekolah tetangga", "Mencocokkan tujuan, kebutuhan murid, kapasitas, dan biaya berkelanjutan", "Memilih logo paling dikenal"], c: 1 },
        { q: "CIS dan ISO 21001 sebaiknya dipahami sebagai…", o: ["Nama lain dari kurikulum yang sama", "Jalur berbeda: akreditasi institusi dan sistem manajemen pendidikan", "Ujian bahasa"], c: 1 },
        { q: "Sekolah berstatus kandidat. Promosi yang bertanggung jawab adalah…", o: ["Mengaku sudah terakreditasi", "Menyebut status kandidat secara tepat beserta batasnya", "Menyembunyikan seluruh proses"], c: 1 }
      ]
    },
    {
      title: "Membaca Kesiapan Sekolah dengan Jujur",
      lede: "Roadmap yang baik tidak dimulai dari kalender, melainkan dari gambaran titik awal. Audit kesiapan membantu sekolah memilih ukuran langkah yang dapat dipertanggungjawabkan dan menghindari transformasi yang lebih cepat di brosur daripada di kelas.",
      sections: [
        ["Sepuluh Lensa Kesiapan", [
          "Pemeriksaan awal setidaknya mencakup tujuan dan identitas; kepemimpinan; kompetensi guru; kurikulum dan asesmen; bahasa pembelajaran; perlindungan, inklusi, dan kesejahteraan murid; tata kelola data; fasilitas dan teknologi; keuangan; serta dukungan keluarga dan mitra. Setiap lensa dinilai melalui bukti, bukan kesan.",
          "Skala sederhana dapat memakai tingkat: belum ada, mulai dibangun, berjalan tidak konsisten, berjalan konsisten, dan terukur dampaknya. Sertakan variasi antarkelas atau unit. Sekolah tidak dianggap matang hanya karena satu kelas unggulan bekerja sangat baik."
        ]],
        ["Mendengar Lebih dari Suara Pimpinan", [
          "Wawancara pimpinan perlu dipertemukan dengan observasi kelas, telaah pekerjaan murid, data hasil, kebijakan, log pelatihan, catatan perlindungan, anggaran, serta suara guru, murid, dan orang tua. Perbedaan antara dokumen dan pengalaman sehari-hari adalah data penting, bukan sesuatu yang harus disembunyikan.",
          "Audit tidak bertujuan mempermalukan. Ia membangun bahasa bersama tentang kekuatan, risiko, dan prioritas. Temuan perlu cukup spesifik untuk ditindaklanjuti: siapa terdampak, seberapa sering, bukti apa, penyebab yang mungkin, dan keputusan apa yang dibutuhkan."
        ]],
        ["Menentukan Cakupan Transformasi", [
          "Sekolah dapat memulai dari satu jenjang, satu program, atau beberapa praktik inti sebelum memperluas. Pilot yang baik memiliki tujuan, batas waktu, tim, dukungan, indikator, dan keputusan setelah evaluasi. Pilot bukan alasan memberikan pengalaman bermutu hanya kepada kelompok tertentu tanpa rencana pemerataan.",
          "Tetapkan prasyarat yang tidak boleh ditawar: kepatuhan hukum, perlindungan anak, kemampuan keuangan minimum, kepemimpinan yang stabil, serta waktu guru untuk belajar. Jika fondasi ini lemah, menunda pengakuan eksternal sambil memperkuat sistem adalah keputusan strategis, bukan kegagalan."
        ]]
      ],
      reflection: "Dimensi kesiapan mana yang paling kuat dan paling rapuh di sekolah Anda? Bukti apa yang mendukung penilaian tersebut, dan siapa yang perlu ikut memvalidasinya?",
      quiz: [
        { q: "Audit kesiapan yang kredibel menggunakan…", o: ["Kesan pimpinan saja", "Gabungan data, dokumen, observasi, dan suara pemangku kepentingan", "Jumlah pengikut media sosial"], c: 1 },
        { q: "Pilot yang sehat harus memiliki…", o: ["Tujuan, indikator, dukungan, dan keputusan setelah evaluasi", "Nama internasional", "Durasi tanpa batas"], c: 0 },
        { q: "Jika safeguarding belum kuat, prioritas sekolah adalah…", o: ["Mempercepat promosi", "Menguatkan fondasi perlindungan sebelum memperluas program", "Menghapus audit"], c: 1 }
      ]
    },
    {
      title: "Menyatukan Tiga Lapisan Kurikulum",
      lede: "Murid tidak seharusnya memikul tiga kurikulum sebagai tiga tumpukan. Tugas sekolah adalah merancang satu perjalanan belajar yang menghubungkan kewajiban nasional, pendidikan Islam, dan benchmark global secara koheren.",
      sections: [
        ["Mulai dari Profil Lulusan", [
          "Petakan kompetensi akhir: keislaman dan adab, literasi, numerasi, penalaran ilmiah, komunikasi, bahasa, kreativitas, kolaborasi, kemandirian, kesehatan, kewargaan, dan kontribusi. Hubungkan setiap kompetensi dengan tahapan perkembangan dari jenjang awal sampai akhir.",
          "Setelah itu, petakan capaian nasional, capaian diniyah, dan benchmark internasional ke dalam profil yang sama. Tandai tumpang tindih, celah, dan konflik beban. Banyak konten dapat diintegrasikan; tidak semua standar membutuhkan jam pelajaran baru."
        ]],
        ["Keselarasan Tujuan, Belajar, dan Asesmen", [
          "Sebuah unit yang baik menjawab tiga hal: apa yang harus dipahami murid, pengalaman apa yang memungkinkan pemahaman itu tumbuh, dan bukti apa yang menunjukkan keberhasilan. Jika asesmen hanya menguji hafalan, pembelajaran tidak akan menghasilkan penalaran meskipun dokumen kurikulum memakai kata berpikir kritis.",
          "Gunakan asesmen formatif untuk memberi umpan balik selama belajar dan asesmen sumatif untuk menilai capaian pada waktu tertentu. Moderasi pekerjaan murid membantu guru menyamakan ekspektasi. Data dipakai untuk memperbaiki pengajaran, bukan sekadar mengurutkan anak."
        ]],
        ["Bahasa sebagai Jembatan", [
          "Kebijakan bahasa menjelaskan bahasa pengantar, tujuan kemampuan tiap tahap, dukungan bagi murid yang belum siap, pengembangan guru, komunikasi dengan orang tua, dan cara menjaga bahasa Indonesia serta literasi Arab sesuai misi. Pergantian bahasa tanpa dukungan dapat menurunkan pemahaman konsep.",
          "Pendekatan bertahap lebih aman: perkuat literasi dasar, pilih mata pelajaran atau aktivitas yang tepat, sediakan scaffolding, pantau pemahaman, lalu perluas berdasarkan bukti. Kefasihan guru dan murid tidak dibangun melalui slogan bilingual."
        ], note("Uji beban", "Jika penambahan satu standar membuat waktu belajar padat, jangan langsung menambah jam. Cari tumpang tindih, hilangkan pengulangan, dan desain pengalaman yang mencapai beberapa tujuan secara bermakna.")]
      ],
      reflection: "Pilih satu unit belajar. Capaian nasional, nilai Islam, dan kompetensi global apa yang dapat dipertemukan tanpa menambah beban yang tidak perlu?",
      quiz: [
        { q: "Langkah awal menyatukan kurikulum adalah…", o: ["Menambah semua mata pelajaran", "Menetapkan profil lulusan dan memetakan capaian", "Menerjemahkan buku teks"], c: 1 },
        { q: "Asesmen formatif terutama digunakan untuk…", o: ["Memberi umpan balik dan menyesuaikan pembelajaran", "Menentukan biaya sekolah", "Mengganti seluruh ujian"], c: 0 },
        { q: "Kebijakan bahasa yang bertanggung jawab…", o: ["Memaksa transisi tanpa dukungan", "Menetapkan tujuan, dukungan, dan pemantauan pemahaman", "Menghapus bahasa Indonesia"], c: 1 }
      ]
    },
    {
      title: "Merancang Jalur Tumbuh Setiap Murid",
      lede: "Sekolah global tidak menghasilkan satu cetakan lulusan. Ia membangun fondasi bersama lalu menyediakan jalur yang membantu murid mengenali kekuatan, pilihan studi, panggilan kontribusi, dan tuntutan nyata masa depan.",
      sections: [
        ["Fondasi Bersama, Pilihan yang Lentur", [
          "Semua murid membutuhkan fondasi keislaman, literasi, numerasi, sains, kesehatan, bahasa, kewargaan, kecakapan digital, dan kemampuan belajar. Di atas fondasi itu, sekolah dapat menyediakan pendalaman pada sains-teknologi, kesehatan, sosial-humaniora, kewirausahaan, seni-kreatif, studi Islam, atau bidang lain sesuai kapasitas.",
          "Jalur tidak boleh mengunci anak terlalu dini. Sediakan masa eksplorasi, konseling, data minat dan capaian, kesempatan berpindah, serta prasyarat yang transparan. Label ‘unggulan’ tidak boleh membuat jalur lain dianggap kurang berharga."
        ]],
        ["Membaca Tujuan Studi secara Nyata", [
          "Persyaratan universitas dan program berbeda menurut negara, bidang, tahun, kualifikasi, bahasa, portofolio, dan kebijakan imigrasi. Sekolah perlu memverifikasi sumber resmi secara berkala, bukan mengandalkan satu angka tes atau daftar universitas yang tidak pernah diperbarui.",
          "Bangun layanan bimbingan yang menyatukan perencanaan mata pelajaran, rekam capaian, portofolio, kegiatan bermakna, kemampuan bahasa, kesiapan finansial, dan alternatif jalur. Tujuan utamanya adalah keputusan yang matang, bukan sekadar jumlah penerimaan luar negeri."
        ]],
        ["Portofolio Kontribusi", [
          "Murid perlu kesempatan menghasilkan karya yang berharga bagi orang lain: penelitian, prototipe, tulisan, seni, layanan masyarakat, kewirausahaan sosial, atau kepemimpinan. Portofolio memperlihatkan proses, revisi, kolaborasi, etika, dan dampak—bukan hanya foto kegiatan.",
          "Sekolah menjaga keseimbangan antara ambisi dan kesejahteraan. Jadwal, beban kompetisi, kegiatan tambahan, dan tuntutan sertifikat perlu ditinjau agar tidak mengubah masa belajar menjadi perlombaan tanpa makna."
        ]]
      ],
      reflection: "Apakah pilihan jalur di sekolah benar-benar berdasarkan kebutuhan dan potensi murid, atau lebih banyak berdasarkan citra? Bukti apa yang digunakan untuk membantu anak memilih?",
      quiz: [
        { q: "Jalur murid yang baik bersifat…", o: ["Kaku sejak usia dini", "Lentur, berbasis fondasi bersama dan konseling", "Hanya untuk murid nilai tertinggi"], c: 1 },
        { q: "Target studi lanjut perlu…", o: ["Menggunakan satu skor untuk semua negara", "Diverifikasi rutin pada sumber resmi sesuai program tujuan", "Ditentukan dari brosur lama"], c: 1 },
        { q: "Portofolio yang bermakna menunjukkan…", o: ["Banyak foto", "Proses, kualitas karya, refleksi, dan kontribusi", "Jumlah sertifikat saja"], c: 1 }
      ]
    },
    {
      title: "Guru dan Pemimpin sebagai Mesin Mutu",
      lede: "Kurikulum tidak mengajar; guru yang menghidupkannya. Transformasi hanya bertahan ketika sekolah membangun kompetensi, waktu belajar profesional, kepemimpinan instruksional, dan lingkungan kerja yang membuat orang baik ingin terus bertumbuh.",
      sections: [
        ["Profil Kompetensi yang Jelas", [
          "Tetapkan kompetensi per peran: penguasaan bidang, pedagogi, asesmen, bahasa, teknologi, inklusi, perlindungan anak, integrasi nilai Islam, kolaborasi, dan penggunaan data. Bedakan kompetensi wajib saat masuk dari kompetensi yang dapat dikembangkan setelah bergabung.",
          "Rekrutmen menggunakan simulasi mengajar, telaah perencanaan, studi kasus, pemeriksaan referensi, serta verifikasi kualifikasi dan keamanan. Sekolah tidak sekadar mencari orang yang fasih berbahasa asing, melainkan pendidik yang dapat membuat murid belajar dengan aman dan bermakna."
        ]],
        ["Belajar Profesional yang Menempel pada Kelas", [
          "Pelatihan satu hari jarang mengubah praktik tanpa tindak lanjut. Susun siklus: tetapkan fokus, pelajari contoh, rancang bersama, praktikkan, observasi, lihat bukti murid, beri umpan balik, lalu ulangi. Coaching dan lesson study membuat pengetahuan baru menjadi kebiasaan.",
          "Ukur keberhasilan pengembangan profesional dari perubahan perencanaan, interaksi kelas, kualitas asesmen, pekerjaan murid, dan konsistensi antarkelas. Sertifikat kehadiran hanya membuktikan guru datang, bukan membuktikan murid memperoleh pengalaman yang lebih baik."
        ]],
        ["Kepemimpinan dan Retensi", [
          "Yayasan menjaga misi, mandat, sumber daya, dan akuntabilitas. Kepala sekolah memimpin pembelajaran dan budaya. Tim transformasi mengoordinasikan lintas fungsi tanpa mengambil alih tanggung jawab pemilik proses. Keputusan perlu cepat, tetapi tidak bergantung pada satu tokoh.",
          "Retensi tumbuh dari beban kerja yang masuk akal, kejelasan peran, keadilan, dukungan atasan, kesempatan berkembang, suara profesional, dan penghargaan yang layak. Sekolah yang terus kehilangan guru akan membayar biaya transformasi berulang kali dan sulit menjaga mutu."
        ]]
      ],
      reflection: "Perubahan praktik guru apa yang paling menentukan keberhasilan roadmap? Dukungan, waktu, dan bukti apa yang akan membuat perubahan itu bertahan?",
      quiz: [
        { q: "Indikator terbaik keberhasilan pelatihan guru adalah…", o: ["Jumlah sertifikat", "Perubahan praktik dan bukti belajar murid", "Durasi presentasi"], c: 1 },
        { q: "Rekrutmen guru global sebaiknya menilai…", o: ["Bahasa asing saja", "Pedagogi, bidang, nilai, keamanan, dan kemampuan berkembang", "Popularitas media sosial"], c: 1 },
        { q: "Retensi guru terutama diperkuat melalui…", o: ["Slogan loyalitas", "Lingkungan kerja adil, jelas, suportif, dan berkembang", "Beban kerja tanpa batas"], c: 1 }
      ]
    },
    {
      title: "Tata Kelola yang Menghasilkan Bukti",
      lede: "Sekolah yang matang tidak sibuk mengumpulkan dokumen untuk kunjungan sesaat. Ia membangun cara kerja yang jelas, menghasilkan bukti sebagai akibat dari praktik yang baik, dan menggunakan bukti itu untuk membuat keputusan.",
      sections: [
        ["Mandat dan Akuntabilitas", [
          "Pisahkan pengawasan, pengelolaan, dan pelaksanaan. Yayasan menetapkan arah dan mengawasi risiko; pimpinan sekolah mengelola strategi serta pembelajaran; pemilik proses menjalankan dan memperbaiki pekerjaan. Matriks tanggung jawab menjelaskan siapa memutuskan, mengerjakan, dimintai pertimbangan, dan menerima informasi.",
          "Tim transformasi membutuhkan mandat, ruang lingkup, kewenangan, anggaran, ritme rapat, serta jalur eskalasi. Tanpa itu, tim menjadi panitia acara. Dengan mandat yang terlalu luas, ia justru menggantikan struktur sekolah dan menimbulkan kebingungan."
        ]],
        ["Kebijakan yang Hidup", [
          "Prioritaskan kebijakan yang menjaga mutu dan keselamatan: pembelajaran dan asesmen, bahasa, perlindungan anak, inklusi, perilaku, rekrutmen aman, data dan privasi, pengaduan, kesehatan, perjalanan, teknologi, serta kesinambungan layanan. Kebijakan harus mudah ditemukan dan dipahami oleh pelaksana.",
          "Setiap kebijakan memiliki pemilik, tanggal berlaku, jadwal tinjau, pelatihan, bukti pelaksanaan, dan mekanisme pengecualian. Dokumen yang indah tetapi tidak dikenal guru adalah risiko, bukan bukti kematangan."
        ]],
        ["Siklus Mutu dan Sumber Kebenaran", [
          "Bangun siklus sederhana: tetapkan tujuan, jalankan, kumpulkan bukti, tinjau, putuskan, dan perbaiki. Data murid, observasi, survei, insiden, keuangan, serta kemajuan proyek harus memiliki definisi dan pemilik. Hindari beberapa spreadsheet yang menghasilkan angka berbeda untuk pertanyaan yang sama.",
          "Rapat mutu berfokus pada keputusan: apa yang berubah, siapa terdampak, mengapa, tindakan apa, pemiliknya, tenggat, dan cara memeriksa hasil. Dokumentasi secukupnya menjaga kesinambungan tanpa mengubah guru menjadi pengarsip."
        ]]
      ],
      reflection: "Satu keputusan penting apa yang saat ini bergantung pada ingatan atau figur tertentu? Proses dan bukti apa yang perlu dibangun agar keputusan tetap berkualitas ketika orang berganti?",
      quiz: [
        { q: "Fungsi utama matriks tanggung jawab adalah…", o: ["Menambah jabatan", "Memperjelas keputusan, pelaksanaan, konsultasi, dan informasi", "Menghapus akuntabilitas"], c: 1 },
        { q: "Kebijakan dianggap hidup ketika…", o: ["Disimpan rapi", "Dipahami, dijalankan, ditinjau, dan meninggalkan bukti", "Memiliki banyak halaman"], c: 1 },
        { q: "Rapat mutu yang efektif menghasilkan…", o: ["Notulen panjang tanpa pemilik", "Keputusan, tindakan, pemilik, tenggat, dan ukuran hasil", "Lebih banyak slogan"], c: 1 }
      ]
    },
    {
      title: "Lingkungan Belajar yang Aman, Inklusif, dan Siap Masa Depan",
      lede: "Fasilitas bukan etalase. Nilainya terletak pada pengalaman belajar yang dimungkinkan, risiko yang dikurangi, dan akses yang dibuka bagi setiap murid.",
      sections: [
        ["Perlindungan dan Kesejahteraan sebagai Fondasi", [
          "Safeguarding mencakup kebijakan, kode perilaku, rekrutmen aman, pelatihan, pelaporan, respons, pencatatan, rujukan, serta tata kelola kegiatan daring dan luring. Murid perlu mengetahui orang aman yang dapat dihubungi dan yakin bahwa laporan ditangani dengan menjaga martabat serta keselamatan.",
          "Kesejahteraan bukan sekadar ruang konseling. Jadwal, beban, relasi guru-murid, disiplin, perundungan, transisi, penggunaan teknologi, dan tekanan prestasi semuanya memengaruhi kemampuan belajar. Data absensi, insiden, survei, dan rujukan dibaca bersama, dengan perlindungan privasi."
        ]],
        ["Inklusi dan Akses", [
          "Sekolah mengenali keragaman bahasa, kemampuan, kondisi fisik, kebutuhan belajar, latar sosial, dan pengalaman keluarga. Dukungan dapat berupa desain pembelajaran universal, diferensiasi, akomodasi yang wajar, intervensi bertahap, teknologi bantu, serta kolaborasi dengan keluarga dan profesional.",
          "Inklusi tidak menurunkan ekspektasi; ia memperbaiki jalan agar murid dapat mencapai tujuan yang bermakna. Data perlu menunjukkan siapa yang ikut, siapa yang berhasil, siapa yang sering absen, dan siapa yang tidak terdengar suaranya."
        ]],
        ["Sarana dan Teknologi yang Berfungsi", [
          "Prioritaskan ruang dan alat berdasarkan kurikulum: perpustakaan yang hidup, laboratorium aman, ruang kolaborasi, olahraga, seni, akses sanitasi, area ibadah, konektivitas, serta lingkungan yang nyaman dan berkelanjutan. Setiap investasi memiliki rencana penggunaan, pelatihan, pemeliharaan, dan indikator pemanfaatan.",
          "Teknologi memerlukan keamanan akun, privasi data, pencadangan, penyaringan yang proporsional, literasi media, etika kecerdasan buatan, dan dukungan ketika sistem gagal. Perangkat yang banyak tetapi jarang digunakan bukan bukti kesiapan masa depan."
        ]]
      ],
      reflection: "Fasilitas atau teknologi apa yang paling banyak dibanggakan tetapi belum memberi dampak belajar yang jelas? Apa perubahan penggunaan, pelatihan, atau pemeliharaan yang dibutuhkan?",
      quiz: [
        { q: "Safeguarding yang kuat mencakup…", o: ["Poster saja", "Pencegahan, pelaporan, respons, pencatatan, dan tata kelola", "Tanggung jawab konselor saja"], c: 1 },
        { q: "Inklusi berarti…", o: ["Menurunkan semua target", "Membuka akses dan dukungan agar murid mencapai tujuan bermakna", "Memisahkan semua murid"], c: 1 },
        { q: "Investasi teknologi dinilai berhasil ketika…", o: ["Perangkat terbeli", "Digunakan aman dan meningkatkan pengalaman serta hasil belajar", "Jumlah merek bertambah"], c: 1 }
      ]
    },
    {
      title: "Membiayai Mutu, Membangun Kemitraan, Menjaga Reputasi",
      lede: "Transformasi global membutuhkan sumber daya dan kepercayaan. Keduanya hanya bertahan ketika sekolah menghitung biaya secara jujur, memilih kemitraan yang menghasilkan kapasitas, serta berkomunikasi setepat bukti yang dimiliki.",
      sections: [
        ["Biaya Penuh dan Pilihan Prioritas", [
          "Susun model biaya lima tahun yang mencakup pengembangan guru, lisensi atau biaya lembaga, asesmen, bahasa, teknologi, fasilitas, keselamatan, data, konsultasi, kunjungan, pemasaran, dan penggantian staf. Bedakan biaya awal, berulang, dan kontingensi. Uji skenario jumlah murid, inflasi, kurs, dan keterlambatan jadwal.",
          "Prioritaskan investasi yang memperbaiki pengalaman murid dan kapasitas internal. Ruang belajar sederhana dengan guru yang kuat sering lebih bernilai daripada fasilitas mahal tanpa program. Tetapkan batas keterjangkauan agar ambisi tidak merusak keberlanjutan atau akses keluarga."
        ]],
        ["Kemitraan yang Meninggalkan Kapasitas", [
          "Mitra dapat berupa sekolah lain, universitas, komunitas, lembaga profesional, penyedia teknologi, alumni, atau organisasi sosial. Mulai dari kebutuhan dan hasil yang diharapkan. Perjanjian menjelaskan peran, keselamatan, data, biaya, hak kekayaan intelektual, mutu, evaluasi, serta cara mengakhiri kerja sama.",
          "Kemitraan yang baik membuat guru dan sistem sekolah semakin mampu, bukan semakin bergantung. Ukur keluaran dan dampak: praktik baru yang bertahan, akses murid, kualitas proyek, jejaring studi lanjut, atau efisiensi yang nyata—bukan hanya foto penandatanganan."
        ]],
        ["Reputasi Berbasis Bukti", [
          "Komunikasikan apa yang sudah ada, sedang dibangun, dan belum dicapai. Gunakan contoh karya murid, data yang diberi konteks, praktik perlindungan, pengembangan guru, serta cerita perubahan yang dapat diverifikasi. Hindari klaim ‘internasional’ yang kabur atau penggunaan logo tanpa izin.",
          "Reputasi dibentuk oleh pengalaman harian: respons terhadap keluhan, kejelasan biaya, konsistensi kelas, keamanan, komunikasi, dan kejujuran ketika terjadi masalah. Krisis ditangani dengan fakta, empati, tindakan, serta pembelajaran—bukan dengan menutupi informasi."
        ]]
      ],
      reflection: "Dari seluruh biaya transformasi, mana yang membangun kapasitas jangka panjang dan mana yang terutama membeli tampilan? Kemitraan apa yang meninggalkan kemampuan setelah kontrak selesai?",
      quiz: [
        { q: "Model biaya transformasi sebaiknya mencakup…", o: ["Biaya pendaftaran saja", "Biaya awal, berulang, risiko, dan pemeliharaan beberapa tahun", "Biaya gedung saja"], c: 1 },
        { q: "Kemitraan strategis yang baik…", o: ["Menghasilkan foto", "Meninggalkan kapasitas dan dampak yang dapat dievaluasi", "Membuat sekolah bergantung selamanya"], c: 1 },
        { q: "Reputasi yang berkelanjutan tumbuh dari…", o: ["Klaim terbesar", "Pengalaman konsisten dan komunikasi berbasis bukti", "Logo terbanyak"], c: 1 }
      ]
    },
    {
      title: "Roadmap Berbasis Kesiapan",
      lede: "Roadmap bukan janji bahwa semua sekolah akan tiba pada waktu yang sama. Ia adalah urutan membangun kemampuan, dengan gerbang keputusan yang mencegah sekolah melaju ketika fondasinya belum siap.",
      sections: [
        ["Fase, Bukan Kalender Kaku", [
          "Fase fondasi memperjelas misi, profil lulusan, tata kelola, perlindungan, audit kesiapan, dan prioritas. Fase standardisasi menguatkan kurikulum, asesmen, kompetensi guru, kebijakan, data, serta konsistensi antarkelas. Fase pengakuan menyiapkan persyaratan eksternal setelah praktik internal cukup matang. Fase perluasan dan penguatan menjaga mutu ketika skala bertambah.",
          "Setiap fase memiliki gerbang: bukti apa yang harus ada, risiko apa yang harus terkendali, sumber daya apa yang tersedia, dan siapa yang menyetujui perpindahan. Tahun ke-1, ke-2, atau ke-4 hanya ilustrasi; kesiapan lebih penting daripada mengejar tanggal promosi."
        ]],
        ["Portofolio Inisiatif", [
          "Kelompokkan pekerjaan menjadi operasi wajib, penguatan fondasi, eksperimen, dan persiapan pengakuan. Batasi jumlah prioritas aktif agar guru tidak menerima terlalu banyak perubahan sekaligus. Setiap inisiatif memiliki masalah, hasil, pemilik, sumber daya, ketergantungan, risiko, indikator, dan keputusan setelah tinjauan.",
          "Gunakan pilot untuk belajar cepat pada lingkup aman. Pilih area yang cukup penting tetapi dapat dikelola, beri dukungan, kumpulkan bukti, dan dokumentasikan penyesuaian. Setelah berhasil, rencanakan pemerataan; jangan menyalin bentuk tanpa memahami kondisi yang membuat pilot bekerja."
        ]],
        ["Mengelola Sisi Manusia", [
          "Perubahan gagal ketika orang hanya menerima tugas tanpa memahami alasan, kehilangan waktu, atau tidak merasa aman mengakui kesulitan. Petakan kelompok terdampak, dengarkan kekhawatiran, jelaskan keputusan, siapkan pelatihan dan coaching, serta hentikan pekerjaan lama yang tidak lagi bernilai.",
          "Quick wins berguna jika membuktikan arah baru: moderasi asesmen yang memperjelas standar, kebijakan safeguarding yang benar-benar dipahami, atau satu unit terintegrasi yang mengurangi beban. Jangan mengejar kemenangan kosmetik yang menghabiskan energi tanpa memperbaiki pengalaman murid."
        ]]
      ],
      reflection: "Apa gerbang keputusan terdekat dalam roadmap sekolah? Bukti apa yang harus tersedia sebelum melangkah, dan apa yang akan dilakukan jika bukti belum cukup?",
      quiz: [
        { q: "Perpindahan fase roadmap sebaiknya ditentukan oleh…", o: ["Tanggal promosi", "Bukti kesiapan dan risiko yang terkendali", "Tekanan pesaing"], c: 1 },
        { q: "Mengapa prioritas aktif perlu dibatasi?", o: ["Agar tidak ada perubahan", "Agar kapasitas dan perhatian cukup untuk menghasilkan mutu", "Agar rapat lebih lama"], c: 1 },
        { q: "Quick win yang sehat adalah…", o: ["Perubahan kosmetik", "Perbaikan kecil yang membuktikan arah dan memberi dampak nyata", "Janji tanpa data"], c: 1 }
      ]
    },
    {
      title: "Mengukur Kematangan dan Menjaga Perbaikan",
      lede: "Sertifikat, otorisasi, atau akreditasi bukan garis akhir. Sekolah bertaraf global tetap layak dipercaya hanya jika mampu membaca dampak, mengelola risiko, dan memperbarui sistem ketika murid serta dunia berubah.",
      sections: [
        ["Dashboard yang Seimbang", [
          "Gabungkan indikator hasil murid, kemajuan belajar, karakter dan kontribusi, kesejahteraan, kehadiran, safeguarding, kualitas pengajaran, kapasitas guru, retensi, kepatuhan, keuangan, kemitraan, dan pengalaman keluarga. Tetapkan definisi, sumber, frekuensi, pemilik, target, serta batas yang memicu tindakan.",
          "Hindari dua jebakan: terlalu sedikit indikator hingga risiko tidak terlihat, atau terlalu banyak hingga tak ada yang dibaca. Dashboard pimpinan berisi ukuran strategis; tim proses boleh memiliki ukuran operasional lebih rinci. Data kuantitatif dipertemukan dengan karya, observasi, dan suara manusia."
        ]],
        ["Maturity Review dan Risiko", [
          "Tinjau kematangan secara berkala: apakah praktik hanya bergantung pada individu, sudah terdokumentasi, konsisten, diukur, dan diperbaiki. Nilai variasi antarkelas serta antarkelompok murid. Kematangan organisasi terlihat ketika mutu tetap terjaga saat orang, kurikulum, atau teknologi berubah.",
          "Daftar risiko mencakup label kosong, beban kurikulum, resistensi, kehilangan guru, pembiayaan, kurs, keamanan anak, data, ketergantungan vendor, ketimpangan akses, dan penurunan identitas. Setiap risiko memiliki pemilik, sinyal awal, pencegahan, respons, dan frekuensi tinjau."
        ]],
        ["Belajar Setelah Pengakuan", [
          "Setelah pengakuan diperoleh, alihkan fokus dari persiapan kunjungan menuju pemeliharaan praktik. Jadwalkan self-review, tindak lanjut rekomendasi, pengembangan staf baru, pembaruan kebijakan, pemantauan hasil, dan anggaran siklus berikutnya. Bukti disimpan sebagai bagian kerja harian, bukan dibangun mendadak.",
          "Sekolah yang matang berani mengubah target ketika data dan konteks menuntutnya, tanpa mengubah misi secara impulsif. Ia merayakan kemajuan, mengakui celah, mendengar murid, dan menjaga budaya bahwa mutu adalah amanah bersama."
        ], note("Garis akhir yang baru", "Keberhasilan bukan ‘menjadi internasional’, melainkan mampu terus memberi pendidikan Islam bermutu tinggi yang relevan, aman, inklusif, dan dapat dipercaya dalam dunia yang berubah.")]
      ],
      reflection: "Jika sekolah memperoleh pengakuan eksternal besok, sistem apa yang memastikan mutu tidak menurun setahun kemudian? Indikator mana yang memberi peringatan paling awal?",
      quiz: [
        { q: "Dashboard strategis yang baik…", o: ["Berisi semua data", "Seimbang, terdefinisi, memiliki pemilik, dan memicu tindakan", "Hanya berisi nilai ujian"], c: 1 },
        { q: "Kematangan organisasi terlihat ketika…", o: ["Mutu hanya bergantung pada satu tokoh", "Praktik konsisten, terukur, dan tetap bekerja saat kondisi berubah", "Dokumen semakin tebal"], c: 1 },
        { q: "Setelah akreditasi, prioritas utama adalah…", o: ["Berhenti mengevaluasi", "Memelihara praktik, menindaklanjuti rekomendasi, dan terus memperbaiki", "Menghapus anggaran mutu"], c: 1 }
      ]
    }
  ];

  const assessment = [
    ["Sekolah menampilkan banyak istilah internasional, tetapi tidak dapat menunjukkan perubahan pengalaman murid. Penilaian paling tepat adalah…", ["Label sudah cukup", "Janji global belum didukung bukti mutu", "Sekolah pasti gagal"], 2],
    ["Definisi operasional ‘global’ sebaiknya berisi…", ["Nama program saja", "Kompetensi lulusan, pengalaman belajar, indikator, dan bukti", "Daftar gedung"], 2],
    ["Cara menjaga identitas Islam dalam program global adalah…", ["Memisahkannya dari semua pelajaran", "Menjadikannya kompas keputusan, relasi, pedagogi, dan kontribusi", "Menghindari semua perspektif luar"], 2],
    ["Sekolah membutuhkan kualifikasi akademik internasional. Tindakan awal yang tepat adalah…", ["Menganggap semua lembaga sama", "Membandingkan jalur resmi berdasarkan tujuan, kebutuhan, persyaratan, dan biaya", "Langsung mengaku terakreditasi"], 2],
    ["Pernyataan yang benar adalah…", ["Otorisasi program, akreditasi institusi, dan sertifikasi sistem manajemen adalah hal berbeda", "Semua istilah dapat dipakai bergantian", "Kurikulum otomatis mengakreditasi sekolah"], 1],
    ["Audit kesiapan paling kredibel jika…", ["Hanya memakai presentasi pimpinan", "Memadukan dokumen, data, observasi, dan suara pemangku kepentingan", "Dilakukan tanpa bukti"], 2],
    ["Safeguarding masih lemah sementara target pendaftaran eksternal sudah dekat. Keputusan terbaik adalah…", ["Tetap mengejar tanggal", "Perkuat fondasi perlindungan dan sesuaikan jadwal", "Sembunyikan temuan"], 2],
    ["Tiga kurikulum membuat jadwal terlalu padat. Perbaikan terbaik adalah…", ["Tambah jam terus", "Petakan profil lulusan, tumpang tindih, celah, lalu integrasikan pengalaman belajar", "Hapus pendidikan Islam"], 2],
    ["Sekolah menjadi bilingual tetapi pemahaman sains murid turun. Respons tepat adalah…", ["Abaikan", "Perkuat kebijakan bahasa, scaffolding, kompetensi guru, dan pantau pemahaman", "Ganti semua guru segera"], 2],
    ["Jalur murid dirancang dengan baik ketika…", ["Mengunci pilihan sejak dini", "Memberi fondasi bersama, eksplorasi, konseling, dan kesempatan berpindah", "Hanya melayani satu tujuan studi"], 2],
    ["Sekolah memakai satu skor bahasa lama untuk semua universitas. Risiko utamanya adalah…", ["Informasi tujuan tidak akurat karena persyaratan berbeda dan berubah", "Murid terlalu banyak membaca", "Portofolio menjadi pendek"], 1],
    ["Pelatihan guru dinyatakan berhasil karena seluruh peserta hadir. Bukti yang masih dibutuhkan adalah…", ["Foto tambahan", "Perubahan praktik dan dampaknya pada belajar murid", "Sertifikat lebih besar"], 2],
    ["Tim transformasi tidak memiliki mandat dan pemilik keputusan. Akibat paling mungkin adalah…", ["Koordinasi dan akuntabilitas kabur", "Mutu otomatis naik", "Biaya menurun"], 1],
    ["Kebijakan safeguarding tersimpan tetapi tidak dikenal guru. Statusnya adalah…", ["Sudah matang", "Belum menjadi praktik hidup dan menimbulkan risiko", "Tidak perlu dilatih"], 2],
    ["Sekolah membeli perangkat mahal yang jarang digunakan. Pelajaran strategisnya adalah…", ["Tambah perangkat", "Investasi harus dihubungkan dengan kurikulum, pelatihan, penggunaan, dan pemeliharaan", "Fasilitas tidak penting"], 2],
    ["Kemitraan selesai dan sekolah tidak dapat melanjutkan praktik tanpa konsultan. Ini menunjukkan…", ["Kapasitas internal belum terbentuk", "Kemitraan pasti berhasil", "Sekolah sudah mandiri"], 1],
    ["Promosi menyebut sekolah ‘terakreditasi’ padahal baru kandidat. Perbaikan yang tepat adalah…", ["Pertahankan demi pemasaran", "Gunakan status resmi secara presisi", "Hapus semua komunikasi"], 2],
    ["Roadmap menetapkan pindah fase pada Januari meskipun guru belum siap. Prinsip yang seharusnya digunakan adalah…", ["Kalender mengalahkan bukti", "Gerbang keputusan berbasis kesiapan dan risiko", "Promosi mengalahkan perlindungan"], 2],
    ["Dashboard berisi 120 indikator tetapi tidak menghasilkan keputusan. Perbaikan terbaik adalah…", ["Tambah indikator", "Pilih ukuran strategis, definisikan pemilik dan ambang tindakan", "Hapus semua data"], 2],
    ["Sekolah baru memperoleh pengakuan eksternal. Langkah berkelanjutan adalah…", ["Menghentikan self-review", "Memelihara praktik, menindaklanjuti rekomendasi, dan memantau dampak", "Fokus pada logo"], 2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p>' +
    '<h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan merancang dan menjaga transformasi sekolah Islam bertaraf global.</p>' +
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
    number: 56,
    title: "Membangun dan Menguatkan Sekolah Islam Bertaraf Global",
    subtitle: "Roadmap Strategis bagi Sekolah Islam yang Sedang Menuju maupun Telah Berstandar Internasional",
    chapterCount: chapters.length,
    videoId: "WBD92H_-kPM"
  };
})();
