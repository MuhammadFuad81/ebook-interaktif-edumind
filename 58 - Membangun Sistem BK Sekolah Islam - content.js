/* Konten eBook Interaktif 58 — Membangun Sistem BK Sekolah Islam */
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
      title: "Dari Ruang Masalah Menjadi Sistem Pertumbuhan",
      lede: "BK yang kuat tidak menunggu murid melakukan pelanggaran. Ia hadir sejak murid memasuki sekolah, membantu mereka mengenal diri, membangun relasi, belajar lebih efektif, merencanakan masa depan, dan memperoleh pertolongan ketika menghadapi kesulitan.",
      visual: '<figure class="chapter-visual"><img src="https://media.edumind.id/ebook-edumind/058-sistem-bk-sekolah-islam/chapter-01.webp?v=20260916-1" alt="Konselor dan guru perempuan berjilbab panjang menelaah peta dukungan murid di sekolah Islam" loading="lazy" decoding="async"><figcaption>Sistem BK dimulai dari kepedulian yang terencana: mengenal kebutuhan, menghadirkan dukungan, dan menjaga martabat setiap murid.</figcaption></figure>',
      sections: [
        ["Meninggalkan Bayangan Polisi Sekolah", [
          "Banyak murid mengenal BK melalui pengalaman dipanggil setelah terlambat, berkonflik, atau melanggar aturan. Ketika ruang BK identik dengan hukuman, murid belajar menyembunyikan kesulitan sampai masalah menjadi besar. Guru pun melihat konselor sebagai petugas penertiban, bukan mitra perkembangan. Akibatnya, energi layanan terserap untuk memadamkan kejadian dan sedikit waktu tersisa untuk mencegahnya.",
          "Perubahan dimulai dari bahasa dan pengalaman. Undangan ke ruang BK tidak selalu berarti ada masalah. Konselor hadir di kelas, orientasi, pertemuan keluarga, perencanaan belajar, dan transisi jenjang. Murid dapat datang untuk mengenal kekuatan, meminta strategi belajar, mendiskusikan pertemanan, atau menimbang pilihan pendidikan. Disiplin tetap penting, tetapi proses penegakan aturan perlu dibedakan dari konseling agar kepercayaan tidak rusak."
        ]],
        ["Sistem, Bukan Pekerjaan Satu Orang", [
          "Layanan BK adalah rangkaian keputusan sekolah: visi, pembagian peran, kalender program, jalur akses, ruang aman, data, dokumentasi, konsultasi, rujukan, evaluasi, dan anggaran. Guru BK menjadi penggerak profesional, tetapi tidak mungkin mengamati seluruh kehidupan murid sendirian. Wali kelas melihat dinamika belajar, musyrif atau musyrifah melihat kehidupan asrama, keluarga memahami konteks rumah, dan pimpinan mengendalikan kebijakan serta sumber daya.",
          "Sistem yang baik membuat informasi penting bergerak secukupnya kepada orang yang tepat, bukan tersebar kepada semua orang. Ia juga memastikan bahwa murid tidak perlu menceritakan ulang pengalaman sensitif kepada banyak pihak. Setiap orang tahu kapan mendengar, kapan mencatat, kapan berkonsultasi, dan kapan menghubungkan murid dengan bantuan yang lebih kompeten."
        ]],
        ["Rahmah, Amanah, dan Martabat", [
          "Sekolah Islam memiliki sumber nilai yang kuat untuk membangun layanan. Rahmah mengarahkan orang dewasa memahami sebelum menghakimi. Amanah menuntut kompetensi, kerahasiaan, dan tindak lanjut. Adab menjaga cara bertanya, menyampaikan kekhawatiran, dan mengambil keputusan. Keadilan menolak pelabelan serta perlakuan berbeda karena latar keluarga, prestasi, gender, atau kedekatan dengan sekolah.",
          "Nilai agama tidak boleh dipakai untuk menyederhanakan kesulitan psikologis menjadi kelemahan iman atau untuk mempermalukan murid. Ibadah, doa, refleksi, hubungan dengan Allah, dan kebiasaan baik dapat menjadi sumber ketenangan serta makna, tetapi dukungan spiritual tidak menggantikan asesmen dan pertolongan profesional ketika diperlukan."
        ], note("Tanda pergeseran", "Murid mengenal BK sebelum mengalami masalah; guru meminta konsultasi sebelum memberi label; program menjangkau semua murid; dan data dipakai untuk memperbaiki lingkungan, bukan hanya mencari siapa yang salah.")]
      ],
      reflection: "Jika murid mendengar kata ‘BK’ hari ini, tiga pengalaman apa yang kemungkinan muncul di benak mereka? Pengalaman baru apa yang ingin sekolah bangun dalam satu semester?",
      quiz: [
        {q:"BK komprehensif terutama berfungsi untuk…",o:["Menghukum pelanggaran","Mendukung perkembangan semua murid dan merespons kebutuhan","Menggantikan wali kelas"],c:1},
        {q:"Nilai rahmah dalam layanan tampak ketika sekolah…",o:["Memahami sebelum menghakimi","Menutupi semua masalah","Menghapus batas profesional"],c:0},
        {q:"Sistem BK yang sehat…",o:["Bergantung pada satu konselor","Menghubungkan peran, proses, data, dan rujukan","Menyebarkan semua informasi"],c:1}
      ]
    },
    {
      title: "Membaca Kebutuhan, Bukan Memberi Label",
      lede: "Data BK bukan mesin penentu siapa yang ‘bermasalah’. Data adalah kumpulan petunjuk yang membantu sekolah mengajukan pertanyaan lebih baik, mendengar pengalaman murid, menemukan kekuatan, dan memilih dukungan yang masuk akal.",
      sections: [
        ["Mulai dari Pertanyaan yang Berguna", [
          "Asesmen kebutuhan dimulai bukan dari instrumen, melainkan dari keputusan yang hendak diperbaiki. Apakah sekolah ingin memahami transisi murid baru, beban belajar, relasi teman sebaya, kesiapan karier, atau akses terhadap orang dewasa yang dipercaya? Pertanyaan yang jelas mencegah sekolah mengumpulkan data hanya karena mudah tersedia.",
          "Tentukan siapa yang akan menggunakan hasil, tindakan apa yang mungkin dilakukan, dan kapan data tidak perlu dikumpulkan. Jika sekolah tidak memiliki kapasitas menindaklanjuti temuan berisiko, skrining massal dapat menimbulkan janji palsu. Bangun dahulu jalur respons, penanggung jawab, serta jejaring rujukan."
        ]],
        ["Menggabungkan Sumber tanpa Menganggapnya Kebenaran Tunggal", [
          "Sumber dapat mencakup suara murid, percakapan keluarga, observasi, kehadiran, hasil belajar, perpindahan kelas, catatan dukungan, iklim sekolah, dan karya reflektif. Data terstruktur memberi pola; catatan anekdot memberi konteks. Keduanya dapat keliru atau bias, sehingga temuan penting perlu diklarifikasi melalui percakapan dan perbandingan beberapa sumber.",
          "Nilai rendah tidak otomatis berarti kurang motivasi. Ketidakhadiran tidak selalu berarti menolak sekolah. Perubahan perilaku dapat terkait kesehatan, beban keluarga, perundungan, kebutuhan belajar, adaptasi asrama, atau banyak sebab lain. Data sebaiknya membuka penyelidikan yang berbelas kasih, bukan menutupnya dengan label."
        ]],
        ["Menemukan Kekuatan dan Faktor Pelindung", [
          "Asesmen yang hanya mencari masalah menghasilkan potret timpang. Tanyakan pula siapa orang dewasa yang dipercaya murid, kegiatan yang membuatnya hidup, strategi yang pernah berhasil, kekuatan belajar, nilai yang penting, teman yang mendukung, dan harapan masa depan. Kekuatan ini sering menjadi pintu masuk intervensi.",
          "Hasil dibaca pada dua tingkat. Tingkat individu membantu menyesuaikan dukungan. Tingkat kelompok membantu sekolah melihat pola: kelas yang membutuhkan orientasi relasi, jenjang dengan beban tidak seimbang, kelompok yang kurang terjangkau, atau waktu tertentu ketika krisis meningkat. Jangan menampilkan identitas ketika tujuan cukup dicapai dengan data agregat."
        ]]
      ],
      reflection: "Sebutkan satu data yang sering dipakai sekolah. Keputusan apa yang hendak diperbaiki, bias apa yang mungkin terkandung, dan sumber apa yang perlu ditambahkan untuk memberi konteks?",
      quiz: [
        {q:"Sebelum mengumpulkan data, sekolah perlu menetapkan…",o:["Aplikasi paling mahal","Keputusan dan tindak lanjut yang akan didukung","Semua indikator yang mungkin"],c:1},
        {q:"Nilai rendah sebaiknya dipahami sebagai…",o:["Diagnosis pasti","Sinyal yang perlu diklarifikasi dengan konteks","Bukti kemalasan"],c:1},
        {q:"Asesmen kebutuhan yang utuh juga mencari…",o:["Kekuatan dan faktor pelindung","Kesalahan murid saja","Informasi sebanyak mungkin"],c:0}
      ]
    },
    {
      title: "Empat Bidang yang Menyatu dalam Perjalanan Murid",
      lede: "Perkembangan pribadi, sosial, belajar, dan karier bukan empat kotak terpisah. Kecemasan dapat memengaruhi konsentrasi; konflik pertemanan dapat menurunkan kehadiran; pengenalan diri dapat menguatkan pilihan belajar dan masa depan.",
      sections: [
        ["Pribadi dan Sosial: Mengenal Diri dalam Hubungan", [
          "Bidang pribadi membantu murid mengenali emosi, nilai, kekuatan, batas, cara mengambil keputusan, dan strategi meminta pertolongan. Bidang sosial membantu mereka berkomunikasi, berempati, menyelesaikan konflik, menghormati perbedaan, menjaga pergaulan, dan berpartisipasi dalam komunitas. Keduanya dibangun melalui pengalaman sehari-hari, bukan ceramah satu kali.",
          "Dalam kerangka Islam, latihan dapat menghubungkan muhasabah, tanggung jawab, pengendalian diri, prasangka baik, keberanian berkata benar, dan perbaikan hubungan. Namun pendampingan tetap perlu peka terhadap tahap perkembangan. Bahasa untuk siswa kelas awal berbeda dari remaja yang sedang membangun identitas dan otonomi."
        ]],
        ["Belajar: Menata Beban dan Strategi", [
          "Layanan belajar tidak berhenti pada nasihat ‘lebih rajin’. Konselor dan guru memeriksa kebiasaan, tujuan, fungsi eksekutif, lingkungan, pola tidur, transisi kurikulum, tuntutan ganda, kesulitan mata pelajaran, serta dukungan yang tersedia. Solusi dapat berupa perencanaan tugas, pengaturan waktu, penyesuaian lingkungan, konsultasi guru, dukungan kelompok, atau rujukan asesmen lebih lanjut.",
          "Sekolah Islam berasrama perlu peka terhadap jadwal panjang, waktu pemulihan, tuntutan akademik dan keagamaan, serta jarak dari keluarga. Ketangguhan tidak dibangun dengan menormalisasi kelelahan terus-menerus. Jadwal dan kebijakan sekolah juga harus bersedia berubah ketika data menunjukkan beban sistemik."
        ]],
        ["Karier: Membuka Kemungkinan secara Bertahap", [
          "Karier bukan topik kelas akhir saja. Pada usia dini, murid mengenal minat, kontribusi, ragam pekerjaan, dan hubungan antara belajar dengan kehidupan. Pada jenjang berikutnya, eksplorasi diperdalam melalui pengalaman, percakapan, portofolio, informasi jalur pendidikan, dan pengambilan keputusan. Tujuannya bukan menentukan satu profesi terlalu cepat, melainkan memperluas wawasan dan kemampuan memilih.",
          "Peta layanan tahunan perlu menunjukkan bagaimana keempat bidang muncul pada setiap jenjang. Tema dapat berulang dengan kedalaman yang bertambah: mengenal emosi, lalu regulasi; bekerja sama, lalu menyelesaikan konflik; kebiasaan belajar, lalu strategi mandiri; mengenal pekerjaan, lalu menimbang jalur pendidikan."
        ], note("Uji integrasi", "Ketika sekolah menemukan masalah belajar, periksa juga ranah pribadi, sosial, lingkungan, dan harapan masa depan. Intervensi yang hanya menyasar gejala sering kehilangan akar atau kekuatan yang dapat membantu.")]
      ],
      reflection: "Pilih satu jenjang. Apakah program BK sudah menyeimbangkan ranah pribadi, sosial, belajar, dan karier, atau masih menumpuk pada penanganan perilaku?",
      quiz: [
        {q:"Empat bidang layanan sebaiknya…",o:["Berjalan terpisah","Dihubungkan sesuai perjalanan murid","Hanya diberikan di SMA"],c:1},
        {q:"Dukungan belajar yang tepat dimulai dengan…",o:["Nasihat rajin","Memahami kebiasaan, beban, lingkungan, dan kebutuhan","Hukuman tambahan"],c:1},
        {q:"Pendidikan karier dimulai…",o:["Bertahap sejak dini","Setelah lulus saja","Hanya untuk murid berprestasi"],c:0}
      ]
    },
    {
      title: "Layanan Bertingkat: Universal, Terarah, dan Intensif",
      lede: "Tidak semua kebutuhan memerlukan layanan yang sama. Sistem bertingkat menyediakan fondasi bagi semua murid, dukungan tambahan bagi sebagian, dan koordinasi intensif bagi sedikit murid—dengan gerbang masuk, tinjau, serta keluar yang jelas.",
      sections: [
        ["Lapisan Universal untuk Semua", [
          "Lapisan pertama membangun iklim aman dan keterampilan dasar: orientasi, relasi sehat, anti-perundungan, regulasi emosi, strategi belajar, literasi digital, keselamatan, perencanaan karier, serta cara mencari bantuan. Layanan diberikan secara sistematis melalui kelas, kelompok besar, materi keluarga, konsultasi guru, dan kebijakan sekolah.",
          "Kualitas lapisan universal menentukan banyaknya kebutuhan pada lapisan berikutnya. Jika transisi murid baru buruk atau aturan tidak konsisten, konselor akan menerima banyak kasus yang sebenarnya bersumber dari desain lingkungan. Karena itu, perbaikan sistem sering lebih berdampak daripada menambah sesi individual."
        ]],
        ["Dukungan Terarah bagi Sebagian Murid", [
          "Sebagian murid membutuhkan intervensi lebih fokus dalam waktu terbatas: kelompok keterampilan belajar, dukungan adaptasi asrama, kelompok relasi, pendampingan transisi, konsultasi keluarga, atau check-in berkala. Murid dipilih berdasarkan kebutuhan yang diklarifikasi, bukan stereotip atau label permanen.",
          "Setiap intervensi memiliki sasaran sederhana, durasi, penanggung jawab, indikator perkembangan, dan tanggal tinjau. Jika membaik, dukungan dapat dikurangi sambil menjaga akses. Jika tidak, tim menilai ulang kesesuaian, intensitas, hambatan lingkungan, dan kebutuhan rujukan."
        ]],
        ["Dukungan Intensif dan Jejaring Profesional", [
          "Sedikit murid mungkin memerlukan koordinasi kasus, penyesuaian sekolah, konsultasi multidisiplin, atau layanan kesehatan dan perlindungan di luar sekolah. Guru BK membantu navigasi dan kesinambungan dukungan pendidikan, tetapi tidak mengambil alih diagnosis atau terapi di luar kompetensi serta kewenangannya.",
          "Tingkatan bukan ukuran nilai anak dan bukan tangga hukuman. Murid dapat berpindah intensitas sesuai respons dan situasi. Keputusan didasarkan pada kebutuhan, risiko, kekuatan, preferensi, serta bukti perkembangan—bukan algoritma yang bekerja tanpa penilaian manusia."
        ]]
      ],
      reflection: "Petakan program yang ada ke tiga lapisan. Apakah sekolah terlalu berat pada kasus individual karena fondasi universal dan dukungan kelompok belum berkembang?",
      quiz: [
        {q:"Lapisan universal ditujukan untuk…",o:["Semua murid","Murid yang melanggar saja","Kelas akhir saja"],c:0},
        {q:"Dukungan terarah perlu memiliki…",o:["Durasi tanpa batas","Sasaran dan tanggal tinjau","Label permanen"],c:1},
        {q:"Pada kebutuhan intensif, guru BK…",o:["Melakukan semua terapi","Mengoordinasikan dukungan dan rujukan sesuai batas kompetensi","Menunggu masalah hilang"],c:1}
      ]
    },
    {
      title: "Ekosistem Peran yang Tidak Saling Menggantikan",
      lede: "Kolaborasi bukan berarti semua orang menjadi konselor. Kolaborasi berarti setiap pihak memahami perannya, berbagi informasi seperlunya, dan bergerak melalui jalur yang sama ketika murid membutuhkan bantuan.",
      sections: [
        ["Guru BK sebagai Arsitek Program dan Praktisi", [
          "Guru BK memimpin asesmen kebutuhan, perencanaan program, layanan langsung, konsultasi, koordinasi kasus, rujukan, dokumentasi, evaluasi, dan advokasi hambatan sistemik. Waktu kerjanya perlu dilindungi dari tugas administratif atau disiplin yang tidak selaras, karena tugas tambahan yang berlebihan mengurangi jangkauan layanan kepada murid.",
          "Pimpinan menyediakan mandat, kebijakan, ruang, anggaran, rasio kerja yang masuk akal, akses pengembangan profesional, dan pengawasan mutu. Ia juga menjaga agar keputusan kasus tidak dipengaruhi kepentingan reputasi sekolah atau tekanan pihak yang lebih kuat."
        ]],
        ["Guru, Wali Kelas, Asrama, dan Keluarga", [
          "Guru dan wali kelas mengamati perubahan belajar, kehadiran, relasi, serta perilaku. Mereka dapat melakukan dukungan kelas, percakapan awal, dan rujukan internal, tetapi tidak menyelidiki pengalaman sensitif secara mendalam. Musyrif atau musyrifah memiliki pandangan penting tentang rutinitas, tidur, adaptasi, dan dinamika asrama; pelatihan mendengar, batas peran, serta alur eskalasi sangat diperlukan.",
          "Keluarga adalah mitra utama, tetapi keterlibatannya perlu mempertimbangkan usia, kapasitas murid, konteks keselamatan, dan ketentuan yang berlaku. Sekolah menjelaskan tujuan, pilihan, batas kerahasiaan, serta tindakan yang diusulkan dengan bahasa yang tidak menyalahkan."
        ]],
        ["Teman Sebaya dan Jejaring Eksternal", [
          "Program teman sebaya dapat memperluas rasa keterhubungan, asalkan perannya sempit dan aman: menyambut, mendengar secara dasar, mengajak pada kegiatan positif, dan menghubungkan teman kepada orang dewasa. Mereka tidak memegang kasus, tidak menjanjikan rahasia absolut, dan tidak menangani risiko keselamatan.",
          "Sekolah memetakan jejaring sebelum keadaan mendesak: puskesmas, psikolog, psikiater, rumah sakit, layanan perlindungan anak, lembaga disabilitas, dan pihak berwenang. Catat cakupan, kontak, jam layanan, biaya, mekanisme persetujuan, serta prosedur keadaan darurat."
        ], note("Rapat kasus yang tertib", "Hadirkan hanya pihak yang diperlukan, jelaskan tujuan, gunakan informasi minimum, pisahkan fakta dari dugaan, tetapkan tindakan dan penanggung jawab, lalu simpan catatan di tempat yang aman.")]
      ],
      reflection: "Siapa saja yang saat ini menerima informasi kasus di sekolah? Apakah setiap orang benar-benar membutuhkan informasi tersebut untuk menjalankan tindakannya?",
      quiz: [
        {q:"Kolaborasi yang aman berarti…",o:["Semua orang mengetahui detail","Peran jelas dan informasi dibagi seperlunya","Wali kelas menjadi terapis"],c:1},
        {q:"Teman sebaya sebaiknya…",o:["Menangani krisis sendiri","Menjadi pendengar awal dan penghubung ke orang dewasa","Menyimpan semua rahasia"],c:1},
        {q:"Jejaring rujukan sebaiknya dipetakan…",o:["Sebelum keadaan mendesak","Setelah kasus berat terjadi","Hanya bila orang tua meminta"],c:0}
      ]
    },
    {
      title: "Kepercayaan, Kerahasiaan, dan Perlindungan Anak",
      lede: "Murid akan lebih mungkin mencari bantuan ketika mereka tahu apa yang terjadi terhadap ceritanya. Kepercayaan dibangun melalui ruang yang layak, penjelasan yang jujur, pilihan yang bermakna, dan tindakan yang konsisten.",
      sections: [
        ["Menjelaskan Kerahasiaan Sejak Awal", [
          "Sebelum percakapan sensitif, jelaskan siapa konselor, tujuan layanan, cara catatan digunakan, siapa yang mungkin menerima informasi, serta batas kerahasiaan. Gunakan bahasa sesuai usia. Jangan menjanjikan ‘apa pun tidak akan saya ceritakan’, karena sekolah perlu bertindak ketika ada risiko serius terhadap keselamatan murid atau orang lain, dugaan kekerasan, atau kewajiban hukum.",
          "Jika informasi perlu dibagikan, sampaikan kepada murid sejauh aman: apa yang akan dibagikan, kepada siapa, dan mengapa. Libatkan murid dalam merencanakan cara penyampaian. Pengalaman tetap memiliki suara ketika bantuan diaktifkan dapat mengurangi rasa kehilangan kendali."
        ]],
        ["Ruang dan Prosedur yang Menjaga Martabat", [
          "Ruang konseling perlu privat tetapi tetap memenuhi keselamatan: suara tidak mudah terdengar, akses tidak memberi stigma, tata kursi nyaman, jalur keluar jelas, dan prosedur pertemuan satu lawan satu sesuai kebijakan perlindungan anak. Pertemuan daring memerlukan ruang, perangkat, dan platform yang aman.",
          "Catatan konseling tidak diletakkan dalam berkas umum yang dapat dibaca banyak pihak. Informasi untuk guru difokuskan pada dukungan yang harus dilakukan, bukan seluruh cerita. Percakapan kasus tidak dilakukan di koridor, grup pesan umum, atau ruang rapat yang pesertanya tidak relevan."
        ]],
        ["Safeguarding Lebih Utama daripada Reputasi", [
          "Setiap sekolah memerlukan penanggung jawab perlindungan anak, alur pelaporan, daftar risiko segera, panduan dokumentasi, mekanisme komunikasi keluarga, rujukan, dan eskalasi. Staf berlatih melalui skenario agar tidak panik, melakukan pemeriksaan berulang, atau meminta murid membuktikan ceritanya.",
          "Tugas pendengar awal adalah tetap tenang, menerima cerita, tidak menyalahkan, tidak menjanjikan hasil, mencatat fakta penting, dan segera mengikuti jalur perlindungan. Penyelidikan formal dilakukan oleh pihak yang berwenang dan kompeten."
        ]]
      ],
      reflection: "Apakah penjelasan kerahasiaan sekolah dapat dipahami murid usia termuda dan tertua? Tuliskan satu kalimat pembuka yang jujur tentang manfaat serta batas kerahasiaan.",
      quiz: [
        {q:"Kerahasiaan dalam BK…",o:["Selalu mutlak","Dijaga dengan batas keselamatan dan kewajiban perlindungan","Tidak penting"],c:1},
        {q:"Informasi kepada guru sebaiknya…",o:["Seluruh cerita murid","Hanya yang diperlukan untuk menjalankan dukungan","Disebar di grup"],c:1},
        {q:"Jika ada dugaan kekerasan, pendengar awal perlu…",o:["Menyelidiki sendiri","Mengikuti jalur perlindungan dan dokumentasi faktual","Menunggu bukti sempurna"],c:1}
      ]
    },
    {
      title: "Program Preventif yang Hadir dalam Kehidupan Sekolah",
      lede: "Pencegahan bukan satu seminar motivasi. Ia adalah kurikulum perkembangan, lingkungan yang mendukung, kapasitas orang dewasa, dan kebiasaan harian yang mengurangi risiko sekaligus menguatkan kemampuan murid.",
      sections: [
        ["Dari Tema Tahunan ke Pengalaman Belajar", [
          "Gunakan asesmen kebutuhan untuk memilih sedikit prioritas. Uraikan menjadi kompetensi, indikator, urutan pelajaran, aktivitas, dan cara melihat perubahan. Topik dapat meliputi adaptasi sekolah, emosi, pertemanan, perundungan, keselamatan digital, belajar efektif, komunikasi keluarga, pubertas, keputusan, dan eksplorasi karier.",
          "Metode perlu memberi latihan: skenario, permainan peran, jurnal, diskusi terstruktur, proyek, simulasi meminta bantuan, dan refleksi. Ceramah dapat memberi informasi, tetapi keterampilan tumbuh melalui praktik, umpan balik, dan pengulangan dalam konteks nyata."
        ]],
        ["Momen Transisi sebagai Titik Penting", [
          "Masuk sekolah baru, berpindah jenjang, tinggal di asrama, kembali setelah sakit, perubahan keluarga, atau menjelang kelulusan adalah momen yang membutuhkan dukungan lebih terencana. Sekolah dapat menyediakan orientasi bertahap, teman pendamping, check-in, panduan keluarga, kelompok adaptasi, dan akses mudah ke konselor.",
          "Program One Day One Student dapat digunakan sebagai strategi mengenal murid secara bergilir, bukan pemanggilan berbasis masalah. Percakapan singkat berfokus pada kekuatan, pengalaman sekolah, orang yang dipercaya, tujuan, dan bantuan yang diharapkan. Cakupan, durasi, serta pencatatan disesuaikan dengan kapasitas dan privasi."
        ]],
        ["Pencegahan Juga Memperbaiki Lingkungan", [
          "Jika banyak murid lelah, cemas, atau tertinggal, jangan hanya mengajarkan regulasi diri. Tinjau jadwal, waktu tidur, beban tugas, pola penilaian, budaya kompetisi, akses istirahat, cara guru memberi umpan balik, keamanan relasi, dan dukungan bagi kebutuhan beragam. Masalah yang berulang dapat menjadi sinyal desain sistem.",
          "Kalender program mempertemukan layanan murid dengan konsultasi guru, edukasi keluarga, kampanye iklim sekolah, dan evaluasi kebijakan. Dengan demikian, pencegahan tidak dibebankan seluruhnya kepada kemampuan anak bertahan dalam lingkungan yang belum sehat."
        ]]
      ],
      reflection: "Pilih satu masalah yang sering berulang. Intervensi apa yang ditujukan kepada murid, dan perubahan lingkungan apa yang harus dilakukan sekolah secara bersamaan?",
      quiz: [
        {q:"Program preventif yang kuat…",o:["Berupa seminar satu kali","Menggabungkan kurikulum, latihan, lingkungan, dan kapasitas orang dewasa","Menunggu pelanggaran"],c:1},
        {q:"One Day One Student sebaiknya…",o:["Menjadi pemanggilan hukuman","Mengenal kekuatan dan kebutuhan murid secara bergilir","Menghasilkan diagnosis cepat"],c:1},
        {q:"Jika kelelahan terjadi pada banyak murid, sekolah perlu…",o:["Menambah nasihat","Meninjau desain jadwal dan beban selain mendukung murid","Menyalahkan keluarga"],c:1}
      ]
    },
    {
      title: "Deteksi Dini dan Respons yang Proporsional",
      lede: "Deteksi dini bukan mencari kesalahan tersembunyi. Ia adalah kemampuan melihat perubahan, bertanya dengan aman, memeriksa konteks, dan memberi dukungan sedini mungkin sebelum kesulitan mengeras.",
      sections: [
        ["Sinyal Bukan Diagnosis", [
          "Perubahan kehadiran, prestasi, interaksi, penampilan, emosi, tidur, atau partisipasi dapat menjadi sinyal. Satu kejadian jarang cukup. Perhatikan perubahan dari kebiasaan, durasi, intensitas, dampak pada fungsi, serta munculnya beberapa sinyal sekaligus. Hindari daftar cek yang menjadikan variasi normal sebagai gangguan.",
          "Guru menyampaikan observasi faktual: ‘tiga tugas tidak terkumpul dan dua kali tertidur’, bukan ‘malas dan tidak punya motivasi’. Bahasa faktual memudahkan klarifikasi dan mengurangi stigma. Segera utamakan keselamatan jika sinyal menunjukkan risiko mendesak."
        ]],
        ["Percakapan Awal yang Membuka Pintu", [
          "Pilih waktu dan ruang yang layak. Sampaikan pengamatan tanpa tuduhan, tanyakan apa yang terjadi, dengarkan, akui pengalaman, lalu tanyakan bantuan yang diinginkan. Jangan memaksa murid mengungkap seluruh cerita. Beri pilihan yang realistis dan jelaskan langkah berikutnya.",
          "Triase bukan alat memberi cap, melainkan proses menentukan urgensi, jenis kebutuhan, kekuatan, risiko, dukungan yang sudah ada, dan pihak yang perlu dilibatkan. Keputusan penting sebaiknya dibahas oleh tim kecil yang relevan, bukan diserahkan pada skor aplikasi."
        ]],
        ["Rencana Dukungan dan Tinjau Ulang", [
          "Rencana sederhana memuat sasaran yang bermakna bagi murid, tindakan murid dan orang dewasa, penyesuaian sekolah, penanggung jawab, tanggal tinjau, serta tanda bahwa dukungan perlu ditingkatkan. Contohnya: check-in dua kali seminggu, pengaturan tenggat, kelompok belajar, ruang tenang, komunikasi keluarga, dan pemantauan kehadiran.",
          "Pada tanggal tinjau, tanyakan apakah pengalaman murid membaik, apakah indikator berubah, apakah tindakan dijalankan, dan apakah ada dampak yang tidak diinginkan. Jika tidak membaik, jangan langsung menyimpulkan murid tidak kooperatif; periksa kesesuaian intervensi, hambatan, hubungan, dan kebutuhan rujukan."
        ]]
      ],
      reflection: "Ambil satu bentuk rujukan internal yang umum. Apakah formulir meminta observasi faktual, kekuatan, dukungan yang sudah dicoba, urgensi, dan harapan—atau hanya label masalah?",
      quiz: [
        {q:"Sinyal awal sebaiknya dipahami sebagai…",o:["Diagnosis","Petunjuk untuk klarifikasi dan dukungan","Bukti pelanggaran"],c:1},
        {q:"Catatan observasi yang baik adalah…",o:["Murid malas","Tiga tugas belum terkumpul dalam dua pekan","Tidak punya masa depan"],c:1},
        {q:"Jika intervensi belum berhasil, langkah tepat adalah…",o:["Menyalahkan murid","Menilai ulang kesesuaian, hambatan, dan intensitas","Menghapus catatan"],c:1}
      ]
    },
    {
      title: "Konseling, Rujukan, dan Respons Krisis",
      lede: "Layanan responsif memerlukan ketenangan, batas profesional, dan jalur keputusan yang telah disiapkan. Sekolah membantu sejauh kompetensinya, menjaga kesinambungan belajar, dan menghubungkan murid dengan pertolongan yang tepat.",
      sections: [
        ["Konseling Sekolah yang Terarah", [
          "Konseling sekolah umumnya bersifat singkat, berorientasi perkembangan dan fungsi pendidikan. Konselor menyepakati tujuan, menggunakan pendekatan yang dikuasai, memantau perubahan, dan mengevaluasi apakah layanan membantu. Teknik tidak dipilih karena sedang populer, tetapi karena sesuai kebutuhan, usia, budaya, bukti, dan kompetensi praktisi.",
          "Kasus yang kompleks, menetap, membutuhkan diagnosis, terapi klinis, pengobatan, atau penanganan khusus berada di luar ruang lingkup sekolah. Merujuk bukan berarti menyerahkan anak; sekolah tetap menyiapkan dukungan pendidikan, komunikasi yang disepakati, dan rencana kembali ke rutinitas."
        ]],
        ["Rujukan sebagai Proses yang Ditemani", [
          "Rujukan yang baik menjelaskan alasan, pilihan layanan, biaya dan akses bila diketahui, informasi yang akan dibagi, cara memperoleh persetujuan, serta apa yang tetap dilakukan sekolah. Dengan izin yang sesuai, konselor dapat memberi ringkasan relevan kepada profesional dan menerima rekomendasi yang dapat diterapkan di lingkungan pendidikan.",
          "Buat daftar rujukan yang diperbarui, bukan sekadar nomor telepon lama. Sekolah perlu mengetahui layanan, kualifikasi, wilayah, waktu tunggu, prosedur darurat, serta alternatif ketika keluarga memiliki keterbatasan. Hindari menjanjikan hasil atau menjadikan satu penyedia sebagai satu-satunya pilihan tanpa alasan yang transparan."
        ]],
        ["Krisis: Keselamatan Didahulukan", [
          "Situasi krisis dapat mencakup risiko menyakiti diri atau orang lain, kekerasan, eksploitasi, kehilangan mendadak, bencana, atau kondisi kesehatan yang memerlukan tindakan segera. Sekolah mengikuti protokol: memastikan pengawasan dan keselamatan, mengaktifkan penanggung jawab, menghubungi layanan darurat atau profesional sesuai kebutuhan, melibatkan keluarga sejauh aman, dan mendokumentasikan tindakan.",
          "Jangan meninggalkan murid yang berisiko tinggi sendirian, jangan berdebat tentang moralitas pada saat krisis, dan jangan menjadikan percakapan sebagai interogasi. Setelah keadaan stabil, sediakan rencana pemulihan, penyesuaian belajar, dukungan kepada pihak terdampak, komunikasi yang menjaga privasi, dan evaluasi respons sekolah."
        ], note("Batas penting", "eBook ini tidak menggantikan pelatihan penanganan krisis, protokol perlindungan anak, atau layanan kesehatan profesional. Sekolah harus menyesuaikan prosedur dengan ketentuan dan sumber daya setempat.")]
      ],
      reflection: "Dapatkah staf menemukan nomor dan alur bantuan dalam dua menit? Siapa mengambil alih, siapa mendampingi murid, siapa menghubungi keluarga, dan siapa mencatat keputusan?",
      quiz: [
        {q:"Rujukan diperlukan ketika…",o:["Kebutuhan melampaui kompetensi dan ruang lingkup sekolah","Konselor tidak menyukai murid","Sekolah ingin melepas tanggung jawab"],c:0},
        {q:"Dalam krisis keselamatan, prioritas pertama adalah…",o:["Mengumpulkan cerita lengkap","Mengamankan murid dan mengaktifkan protokol","Menjaga reputasi"],c:1},
        {q:"Setelah rujukan, sekolah…",o:["Tidak lagi terlibat","Tetap mendukung fungsi pendidikan dan koordinasi yang disepakati","Membagikan diagnosis"],c:1}
      ]
    },
    {
      title: "Catatan yang Berguna, Data yang Terlindungi",
      lede: "Data BK adalah amanah. Sekolah perlu menyimpan cukup informasi untuk kesinambungan layanan dan akuntabilitas, tetapi tidak boleh mengumpulkan, membuka, atau mempertahankan data sensitif tanpa tujuan yang jelas.",
      sections: [
        ["Minimalkan Sejak Awal", [
          "Untuk setiap kolom data, tanyakan: keputusan apa yang didukung, siapa yang memerlukan, seberapa akurat, berapa lama disimpan, dan apa risikonya jika bocor. Hindari menyimpan cerita lengkap ketika ringkasan tindakan sudah cukup. Pisahkan catatan layanan umum dari catatan konseling sensitif dan dokumen pihak luar.",
          "Data anak, kesehatan, kondisi psikologis, keluarga, serta perlindungan memerlukan pengamanan lebih kuat. Sekolah menetapkan dasar pemrosesan, pemberitahuan yang mudah dipahami, prosedur koreksi, jadwal retensi, penghapusan yang aman, dan penanganan insiden. Kebijakan tidak cukup; praktik staf, perangkat, serta vendor juga perlu diperiksa."
        ]],
        ["Akses Berdasarkan Peran", [
          "Guru mata pelajaran mungkin perlu mengetahui penyesuaian belajar, tetapi tidak memerlukan riwayat konseling. Pimpinan membutuhkan gambaran risiko dan dukungan, tetapi tidak otomatis membaca seluruh catatan sesi. Administrator sistem dapat menjaga teknis tanpa memiliki kewenangan menggunakan isi data. Hak akses mengikuti tugas dan ditinjau saat peran berubah.",
          "Gunakan akun individual, autentikasi yang layak, perangkat terkunci, pencadangan aman, serta catatan akses bila memungkinkan. Hindari pengiriman berkas sensitif melalui grup pesan, surel pribadi, atau tautan terbuka. Dokumen kertas disimpan dalam lemari terkunci dengan daftar pemegang akses."
        ]],
        ["Dashboard untuk Tindakan, Bukan Pengawasan", [
          "Dashboard program dapat memuat jangkauan layanan, waktu respons, kebutuhan per jenjang, keterlaksanaan program, perubahan indikator, rujukan, dan kesenjangan akses. Gunakan data agregat dan sembunyikan kelompok yang terlalu kecil agar identitas tidak mudah ditebak.",
          "Warna risiko tidak boleh menjadi vonis otomatis. Setiap indikator memiliki definisi, sumber, tanggal, penanggung jawab, dan aturan tindak lanjut. Sistem digital membantu mengingat dan melihat pola, tetapi keputusan tetap memerlukan pertimbangan profesional, suara murid, dan konteks."
        ]]
      ],
      reflection: "Pilih satu formulir atau spreadsheet BK. Kolom mana yang benar-benar dibutuhkan, siapa yang dapat melihatnya, kapan dihapus, dan apa yang terjadi bila data bocor?",
      quiz: [
        {q:"Prinsip minimisasi data berarti…",o:["Tidak mencatat apa pun","Mengumpulkan data yang perlu untuk tujuan jelas","Menyimpan semua kemungkinan"],c:1},
        {q:"Guru mata pelajaran umumnya memerlukan…",o:["Seluruh catatan konseling","Informasi tindakan dan penyesuaian yang relevan","Diagnosis keluarga"],c:1},
        {q:"Dashboard yang aman…",o:["Menampilkan nama murid berisiko","Mengutamakan agregasi, konteks, dan tindakan","Mengambil keputusan otomatis"],c:1}
      ]
    },
    {
      title: "Mutu yang Bertumbuh: Evaluasi dan Roadmap 12 Bulan",
      lede: "Program BK tidak dinilai dari banyaknya kegiatan atau tebalnya laporan. Mutu terlihat dari siapa yang terjangkau, bagaimana layanan dialami, perubahan apa yang masuk akal, kesenjangan apa yang berkurang, dan bagaimana sekolah belajar dari bukti.",
      sections: [
        ["Empat Lapis Bukti", [
          "Pertama, data keterlaksanaan: kegiatan, waktu, jangkauan, kehadiran, dan akses. Kedua, pengalaman: rasa aman, kemudahan mencari bantuan, relevansi, dan penghormatan. Ketiga, perubahan dekat: pengetahuan, keterampilan, sikap, atau perilaku yang memang menjadi sasaran. Keempat, hasil pendidikan dan kesejahteraan yang lebih jauh, dibaca hati-hati karena dipengaruhi banyak faktor.",
          "Satu angka tidak cukup. Kenaikan rujukan dapat berarti masalah meningkat, tetapi juga dapat berarti kepercayaan dan deteksi membaik. Penurunan kasus dapat berarti pencegahan berhasil, atau justru akses tertutup. Gabungkan tren, suara murid, kualitas proses, dan konteks sebelum menyimpulkan."
        ]],
        ["Roadmap Empat Fase", [
          "Bulan 1–3: bentuk tim, tetapkan mandat, petakan layanan dan risiko, dengarkan murid serta keluarga, audit perlindungan data, dan pilih dua prioritas. Bulan 4–6: susun kalender, alur rujukan, protokol kerahasiaan, jejaring eksternal, perangkat catatan, serta pelatihan peran dasar.",
          "Bulan 7–9: jalankan pilot pada satu jenjang atau kebutuhan, pantau keterlaksanaan, pengalaman, waktu respons, dan beban kerja. Bulan 10–12: evaluasi hasil, perbaiki prosedur, tetapkan sumber daya, perluas bagian yang terbukti layak, dan hentikan aktivitas yang tidak memberi nilai."
        ]],
        ["Perbaikan Berkelanjutan dan Akuntabilitas", [
          "Gunakan siklus rencanakan–jalankan–periksa–perbaiki. Libatkan dewan penasihat kecil yang dapat mencakup pimpinan, guru BK, guru, keluarga, dan suara murid sesuai usia. Tinjau apakah kelompok tertentu kurang terjangkau, apakah proses menimbulkan stigma, dan apakah data serta rujukan benar-benar aman.",
          "Laporan program berisi keputusan, bukan parade kegiatan. Jelaskan kebutuhan awal, tindakan, jangkauan, bukti perubahan, keterbatasan, pelajaran, risiko, dan langkah berikutnya. Sekolah yang akuntabel tidak mengklaim semua perubahan sebagai hasil BK; ia menyatakan kontribusi secara jujur dan terus memperbaiki desain."
        ], note("Mulai kecil, rancang utuh", "Pilot yang baik tidak berarti sistem setengah jadi. Prinsip perlindungan, peran, data, rujukan, dan evaluasi tetap lengkap; yang diperkecil adalah cakupan agar sekolah dapat belajar sebelum memperluas.")]
      ],
      reflection: "Tentukan satu pilot 90 hari. Kebutuhan apa yang disasar, siapa yang terlibat, perlindungan apa yang wajib tersedia, bukti apa yang dikumpulkan, dan keputusan apa yang diambil pada akhir pilot?",
      quiz: [
        {q:"Mutu program BK dinilai dari…",o:["Jumlah kegiatan saja","Keterlaksanaan, pengalaman, perubahan, dan kesenjangan","Ketebalan laporan"],c:1},
        {q:"Kenaikan rujukan selalu berarti…",o:["Program gagal","Perlu dibaca bersama akses, kepercayaan, dan konteks","Murid memburuk"],c:1},
        {q:"Pilot yang aman…",o:["Mengabaikan perlindungan karena kecil","Memperkecil cakupan sambil menjaga prinsip sistem utuh","Tidak perlu evaluasi"],c:1}
      ]
    }
  ];

  const assessment = [
    ["Murid hanya mengenal BK setelah pelanggaran. Prioritas perubahan adalah…",["Mengganti nama ruangan","Membangun layanan universal dan akses sebelum masalah","Menambah surat panggilan"],2],
    ["Banyak murid lelah pada jenjang yang sama. Respons sistemik adalah…",["Memberi motivasi individual saja","Meninjau jadwal, beban, tidur, dan dukungan sekaligus","Menganggap mereka manja"],2],
    ["Data kehadiran menurun. Kesimpulan paling aman adalah…",["Murid tidak disiplin","Ini sinyal yang perlu klarifikasi dan konteks","Harus langsung diskors"],2],
    ["Sekolah ingin melakukan skrining massal. Syarat awal terpenting adalah…",["Aplikasi populer","Tujuan, persetujuan, kapasitas tindak lanjut, data aman, dan rujukan","Hadiah peserta"],2],
    ["Program karier sebaiknya dimulai…",["Bertahap sejak dini","Saat kelas akhir saja","Setelah murid gagal"],1],
    ["Lapisan universal BK diberikan kepada…",["Semua murid","Murid rujukan saja","Pengurus organisasi"],1],
    ["Dukungan kelompok terarah perlu…",["Sasaran, durasi, dan tanggal tinjau","Label permanen","Kerahasiaan nol"],1],
    ["Guru menemukan perubahan perilaku. Catatan terbaik adalah…",["Anak bermasalah","Frekuensi dan situasi perilaku yang teramati","Diagnosis pribadi"],2],
    ["Teman sebaya mendengar risiko keselamatan. Ia perlu…",["Menjaga rahasia mutlak","Segera menghubungkan ke orang dewasa sesuai jalur","Menangani sendiri"],2],
    ["Guru meminta seluruh catatan konseling. Respons tepat adalah…",["Memberikan semuanya","Membagikan informasi minimum yang diperlukan untuk dukungan","Mengirim ke grup staf"],2],
    ["Kerahasiaan dijelaskan kepada murid sebagai…",["Janji absolut","Privasi yang dijaga dengan batas keselamatan dan hukum","Tidak ada privasi"],2],
    ["Kebutuhan memerlukan terapi klinis. Guru BK sebaiknya…",["Mencoba tanpa kompetensi","Merujuk dan menjaga dukungan pendidikan","Menghentikan semua bantuan"],2],
    ["Dalam risiko keselamatan segera, sekolah pertama-tama…",["Menunggu rapat bulanan","Mengamankan murid dan mengaktifkan protokol","Menulis laporan promosi"],2],
    ["Catatan sensitif sebaiknya…",["Disatukan dengan berkas umum","Dipisahkan dan dibatasi sesuai peran","Disimpan di ponsel pribadi"],2],
    ["Dashboard menandai risiko tinggi. Keputusan berikutnya…",["Otomatis menghukum","Diklarifikasi oleh manusia dengan konteks dan suara murid","Diumumkan"],2],
    ["Kenaikan jumlah rujukan dapat berarti…",["Selalu kegagalan","Masalah meningkat atau akses dan kepercayaan membaik","Data tidak berguna"],2],
    ["Nilai Islam dalam BK paling tepat tampak melalui…",["Mempermalukan kesalahan","Rahmah, amanah, adab, keadilan, dan bantuan kompeten","Mengganti terapi dengan nasihat"],2],
    ["Program One Day One Student digunakan untuk…",["Mengenal kekuatan dan kebutuhan secara bergilir","Memanggil pelanggar","Menentukan diagnosis"],1],
    ["Pilot 90 hari yang baik…",["Mengabaikan tata kelola","Menjaga prinsip utuh dengan cakupan terbatas","Tidak memiliki indikator"],2],
    ["Laporan BK yang akuntabel berisi…",["Daftar kegiatan saja","Kebutuhan, tindakan, bukti, keterbatasan, risiko, dan perbaikan","Nama semua kasus"],2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan merancang layanan BK yang aman, komprehensif, dan dapat dipertanggungjawabkan.</p><div class="card reveal">' +
    assessment.map(([question, options, correct]) => '<div class="assess-q" data-correct="' + correct + '"><p>' + question + '</p>' + options.map(option => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + option + '</button>').join('') + '</div>').join('') +
    '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => ["bab" + (index + 1), chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 58,
    title: "Membangun Sistem BK Sekolah Islam",
    subtitle: "Preventif, Responsif, Berbasis Data, dan Tepat Sasaran",
    chapterCount: chapters.length,
    videoId: "yDMqp4Tzuu8"
  };
})();
