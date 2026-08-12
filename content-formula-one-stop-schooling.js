/* Konten Web-Book 55 — Formula One Stop Schooling */
(() => {
  const section = ([heading, paragraphs, extra = ""]) => `
    <h4>${heading}</h4>
    ${paragraphs.map(p => `<p>${p}</p>`).join("")}
    ${extra}`;

  const miniQuiz = questions => `
    <div class="card reveal">
      <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
      ${questions.map(q => `
        <div class="quiz-q">
          <p>${q.q}</p>
          ${q.o.map((option, index) => `<button class="quiz-opt" onclick="answerQuiz(this,${index === q.c})">${option}</button>`).join("")}
        </div>`).join("")}
    </div>`;

  const chapter = (number, data) => `
    <p class="eyebrow reveal">Bab ${number}</p>
    <h2 class="reveal">${data.title}</h2>
    <p class="lede reveal">${data.lede}</p>
    <div class="card reveal">${data.sections.map(section).join("")}</div>
    <div class="reflect-box reveal">
      <h3>Refleksi</h3>
      <p>${data.reflection}</p>
      <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
    </div>
    ${miniQuiz(data.quiz)}
    <button class="done-btn" id="doneBtn-bab${number}" onclick="markDone('bab${number}')">✓ Tandai Bab Ini Selesai</button>
    <p class="seal" id="seal-bab${number}">✓ Bab ${number} selesai dibaca</p>
    <div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;

  const chapters = [
    {
      title: "Dari Banyak Unit Menjadi Satu Perjalanan Pendidikan",
      lede: "One Stop Schooling dimulai ketika yayasan berhenti melihat TK, SD, SMP, dan SMA sebagai pulau-pulau yang kebetulan berada di bawah nama yang sama. Pusat perhatiannya berpindah kepada perjalanan seorang murid: apa yang ia alami, kuasai, dan yakini dari pertama masuk sampai lulus.",
      sections: [
        ["Kepemilikan Unit Belum Sama dengan Kesinambungan", [
          "Sebuah yayasan dapat mempunyai banyak unit, gedung berdekatan, bahkan seragam dan logo yang mirip, tetapi belum tentu memiliki One Stop Schooling. Jika setiap unit menyusun sasaran, kurikulum, budaya layanan, kalender, dan promosi tanpa percakapan lintas jenjang, perjalanan murid tetap terputus. Orang tua merasakan bahwa setiap kenaikan jenjang adalah proses memilih sekolah dari awal lagi.",
          "One Stop Schooling bukan sekadar cara agar murid melanjutkan ke jenjang berikutnya dalam kompleks yang sama. Gagasan utamanya adalah pendidikan berkelanjutan. Yayasan perlu mampu menjelaskan hubungan yang masuk akal antara pengalaman di TK, fondasi di SD, penguatan identitas di SMP, dan kesiapan masa depan di SMA.",
          "Karena itu, pertanyaan pertama bukan berapa banyak unit yang dimiliki, melainkan apakah semua unit bekerja menuju gambaran lulusan yang sama. Bila kepala unit, guru, tenaga administrasi, murid, dan orang tua memberi jawaban yang berbeda, logo yang sama belum menjadi sistem yang sama."
        ]],
        ["Janji OSS kepada Murid dan Keluarga", [
          "Bagi murid, OSS menjanjikan kesinambungan tanpa kehilangan kesempatan untuk bertumbuh. Ia tidak harus mengulang proses adaptasi dari nol, tetapi tetap memperoleh lingkungan, tantangan, relasi, dan tanggung jawab yang sesuai usia. Data kekuatan, kebutuhan, minat, dan dukungan yang telah dikenali dapat diteruskan secara etis kepada pendidik berikutnya.",
          "Bagi orang tua, OSS mengurangi ketidakpastian. Keluarga mengetahui arah pendidikan jangka panjang, standar yang akan dijaga, dan siapa yang dapat diajak berdialog ketika anak berpindah jenjang. Kepercayaan ini tidak lahir dari slogan. Ia tumbuh dari bukti bahwa janji unit sebelumnya benar-benar diteruskan dan ditingkatkan pada unit berikutnya.",
          "Bagi yayasan, keberlanjutan murid memberi stabilitas perencanaan. Namun stabilitas finansial tidak boleh menjadi satu-satunya alasan. Retensi yang sehat adalah akibat dari mutu, relevansi, rasa memiliki, dan layanan yang konsisten—bukan akibat menutup pilihan atau menekan keluarga."
        ]],
        ["Titik Putus yang Sering Tidak Terlihat", [
          "Kehilangan murid biasanya terlihat pada akhir tahun, padahal sebabnya terbentuk jauh sebelumnya. Program yang berulang, komunikasi yang hanya muncul saat pendaftaran, keluhan yang tidak selesai, perbedaan mutu antarguru, atau ketidakjelasan keunggulan jenjang berikutnya perlahan menurunkan keyakinan. Ketika formulir dibuka, keluarga sebenarnya sudah membuat penilaian selama berbulan-bulan.",
          "Sekolah perlu membaca tiga jenis titik putus. Pertama, titik akademik: anak dan orang tua tidak melihat perkembangan yang lebih tinggi. Kedua, titik pengalaman: suasana jenjang berikutnya terasa sama, kurang menantang, atau tidak sesuai kebutuhan remaja. Ketiga, titik relasi: komunikasi dan kepercayaan melemah sehingga tawaran dari sekolah lain tampak lebih menarik.",
          "Audit awal dapat dilakukan dengan menelusuri satu kohor lulusan selama tiga tahun terakhir. Catat siapa yang melanjutkan, kapan keluarga mulai ragu, alasan yang mereka sampaikan, dan pengalaman apa yang paling sering disebut. Pola yang berulang adalah bahan desain sistem, bukan sekadar masalah tim penerimaan."
        ]],
        ["Prinsip Satu Visi, Satu Perjalanan", [
          "Satu visi tidak berarti semua unit harus seragam. TK membutuhkan pembelajaran melalui bermain; remaja SMA membutuhkan otonomi, pilihan, dan kesiapan pascasekolah. Kesatuan berada pada arah, nilai, dan standar pertumbuhan, sedangkan bentuk pengalaman perlu berubah mengikuti perkembangan anak.",
          "Kalimat kerja yang berguna untuk memulai adalah: setiap lulusan jenjang kami telah mencapai apa, dibuktikan dengan apa, dan siap memasuki tantangan apa berikutnya? Jawaban yang disepakati menjadi jembatan pertama antarsekolah. Dari sana, yayasan dapat menyusun peta kurikulum, layanan transisi, dan komunikasi keluarga secara terpadu."
        ]]
      ],
      reflection: "Jika nama dan lokasi yayasan dihapus, bukti apa yang masih menunjukkan bahwa unit-unit di lembaga Anda benar-benar merupakan satu perjalanan pendidikan?",
      quiz: [
        { q: "Apa pembeda utama OSS dari sekadar yayasan yang memiliki banyak unit?", o: ["Semua unit memakai gedung dan seragam yang sama", "Ada kesinambungan visi, kurikulum, pengalaman, dan layanan lintas jenjang", "Setiap unit melakukan promosi pada waktu yang sama"], c: 1 },
        { q: "Data menunjukkan banyak murid keluar setelah SD. Langkah analitis pertama yang paling tepat adalah…", o: ["Menambah diskon tanpa mencari sebab", "Mengganti seluruh materi promosi", "Menelusuri perjalanan kohor dan pola alasan keluarga sejak sebelum kelulusan"], c: 2 },
        { q: "Bagaimana menafsirkan prinsip satu visi dengan benar?", o: ["Arah dan nilai sama, sementara pengalaman disesuaikan dengan tahap perkembangan", "Semua jenjang harus menjalankan kegiatan yang identik", "Kepala unit tidak lagi perlu mengambil keputusan"], c: 0 }
      ]
    },
    {
      title: "Memilih Cakupan: OSS, OSE, atau OSA",
      lede: "Pendidikan berkelanjutan dapat dirancang pada tiga cakupan. Memilihnya bukan perlombaan untuk membuat visi paling panjang, melainkan keputusan tentang amanah yang benar-benar mampu dijaga oleh yayasan.",
      sections: [
        ["Tiga Bentuk Keberlanjutan", [
          "OSS atau One Stop Schooling menggambarkan perjalanan murid dari TK, SD, SMP, hingga SMA dalam lembaga atau yayasan yang sama. Fokusnya berada pada kesinambungan sekolah formal. Inilah cakupan paling konkret bagi yayasan yang telah memiliki beberapa unit pendidikan dasar dan menengah.",
          "OSE atau One Stop Education memperpanjang jalur itu hingga perguruan tinggi dan sarjana di bawah naungan yayasan yang sama. OSE menuntut kesiapan yang lebih besar: tata kelola pendidikan tinggi, mutu akademik, jejaring profesi, serta kemampuan menjaga relevansi program dari masa kanak-kanak sampai dewasa muda.",
          "OSA atau One Stop Alive membawa hubungan lebih jauh: murid belajar, berkuliah, bekerja, berkontribusi, dan tetap terhubung dengan ekosistem yayasan sepanjang hidup. Dalam bingkai sekolah Islam, gagasan ini dapat dibaca sebagai pendidikan sepanjang hayat dan pelayanan dunia–akhirat. OSA bukan berarti menguasai seluruh hidup alumni, melainkan menyediakan komunitas belajar, pengabdian, dan jejaring yang tetap bernilai ketika mereka telah dewasa."
        ]],
        ["Jangan Membesarkan Janji Melebihi Kapasitas", [
          "Visi yang panjang mudah memikat, tetapi setiap perluasan membawa konsekuensi. Yayasan perlu bertanya: apakah mutu unit yang ada sudah stabil, apakah terdapat jalur belajar yang koheren, apakah kepemimpinan lintas unit bekerja, dan apakah keluarga melihat manfaat nyata? Jika fondasi OSS belum kuat, membangun OSE atau OSA berisiko menambah kompleksitas tanpa meningkatkan pengalaman murid.",
          "Pilihan yang bijak dapat bersifat bertahap. Sebuah yayasan memulai dengan OSS yang kokoh, lalu membangun kemitraan perguruan tinggi sebagai jembatan menuju OSE. Komunitas alumni, kelas orang tua, mentoring karier, dan pengabdian dapat menjadi embrio OSA tanpa harus segera mendirikan semua lembaga sendiri.",
          "Kriteria pemilihan perlu mencakup mandat yayasan, kebutuhan masyarakat, proyeksi murid, kapasitas sumber daya manusia, kesehatan keuangan, kepatuhan regulasi, dan risiko mutu. Keputusan bukan hanya milik pendiri; ia memerlukan data serta percakapan dengan unit, keluarga, dan calon mitra."
        ]],
        ["Peta Nilai untuk Setiap Tahap", [
          "Pada OSS, nilai utama adalah transisi yang mulus dan kurikulum yang meningkat. Pada OSE, yayasan harus menambahkan kesiapan akademik, pilihan studi, pengalaman riset atau vokasi, dan jembatan ke pendidikan tinggi. Pada OSA, nilai bergeser lagi kepada jejaring alumni, pembelajaran sepanjang hayat, peluang berkarya, kepedulian sosial, dan kontribusi lintas generasi.",
          "Peta nilai mencegah yayasan menganggap semua tahap sebagai produk yang sama. Orang tua anak TK membutuhkan rasa aman dan kemampuan fondasi; siswa SMP membutuhkan rasa memiliki; siswa SMA membutuhkan arah masa depan; mahasiswa dan alumni membutuhkan relevansi, jaringan, dan kesempatan berkontribusi. Satu ekosistem harus mampu menghormati perbedaan kebutuhan ini.",
          "Bila yayasan belum mampu menjelaskan manfaat setiap tahap dalam satu kalimat yang spesifik, prioritasnya bukan menambah jenjang, tetapi memperjelas proposisi nilai dan memperbaiki mutu transisi yang sudah ada."
        ]],
        ["Matriks Keputusan Cakupan", [
          "Gunakan matriks sederhana untuk berdiskusi. Nilai setiap pilihan dari 1 sampai 5, lalu sertakan bukti, bukan hanya optimisme. Skor tidak otomatis menentukan keputusan, tetapi memaksa tim menguji asumsi dan melihat kesenjangan kesiapan.",
          "Setelah memilih cakupan, tuliskan batasnya secara jujur dalam komunikasi publik. Sekolah dapat menyampaikan bahwa saat ini fokusnya adalah kesinambungan TK–SMA dengan jejaring perguruan tinggi, misalnya, tanpa mengklaim OSE penuh. Kejujuran membuat kepercayaan lebih tahan lama daripada istilah besar yang belum dibuktikan."
        ], `<table><thead><tr><th>Dimensi</th><th>OSS</th><th>OSE</th><th>OSA</th></tr></thead><tbody><tr><td>Cakupan</td><td>TK–SMA</td><td>Sampai perguruan tinggi</td><td>Belajar dan berkontribusi sepanjang hayat</td></tr><tr><td>Fondasi utama</td><td>Kurikulum dan transisi</td><td>Jalur studi dan mutu akademik</td><td>Komunitas, karya, dan pengabdian</td></tr><tr><td>Risiko</td><td>Unit tetap terkotak</td><td>Kompleksitas mutu</td><td>Janji terlalu luas</td></tr></tbody></table>`]
      ],
      reflection: "Cakupan mana yang paling sesuai dengan amanah dan kapasitas yayasan Anda dalam tiga tahun ke depan, serta bukti apa yang mendukung pilihan itu?",
      quiz: [
        { q: "Apa cakupan utama One Stop Education?", o: ["Hanya TK sampai SMA", "Pendidikan sekolah sampai perguruan tinggi dan sarjana", "Program promosi tahunan"], c: 1 },
        { q: "Yayasan baru memiliki TK dan SD dengan mutu yang belum stabil. Keputusan paling sehat adalah…", o: ["Segera mengklaim OSA", "Mendirikan sebanyak mungkin unit", "Memperkuat kesinambungan dan mutu unit yang ada sambil menyiapkan tahap berikutnya"], c: 2 },
        { q: "Apa fungsi matriks keputusan cakupan?", o: ["Menguji kesiapan dengan bukti dan membuka asumsi tim", "Menggantikan seluruh pertimbangan pimpinan", "Menentukan pilihan hanya dari jumlah gedung"], c: 0 }
      ]
    },
    {
      title: "Memulai dari Akhir dengan Backward Design",
      lede: "Sekolah sering memulai perencanaan dari daftar program: kelas apa yang dibuat, lomba apa yang diikuti, dan acara apa yang dijalankan. Backward design membalik urutan itu—tentukan terlebih dahulu manusia seperti apa yang hendak diluluskan dan bukti apa yang menunjukkan bahwa tujuan tersebut tercapai.",
      sections: [
        ["Tiga Tahap Perancangan Mundur", [
          "Tahap pertama adalah menetapkan hasil akhir yang diinginkan. Dalam konteks OSS, hasil itu bukan hanya nilai ujian atau tujuan kampus, tetapi juga iman, akhlak, kecakapan akademik, bahasa, kepemimpinan, kemandirian, dan kesiapan berkontribusi. Rumusannya harus cukup jelas untuk memandu keputusan, tetapi tidak membatasi masa depan anak pada satu jalan saja.",
          "Tahap kedua adalah menentukan bukti yang dapat dipercaya. Jika sekolah menginginkan lulusan yang mampu berkomunikasi global, bukti tidak cukup berupa label bilingual; perlu ada performa berbicara, membaca, menulis, dan memahami pada tingkat yang disepakati. Jika sekolah menjanjikan kemandirian ibadah, buktinya perlu terlihat pada praktik dan keputusan sehari-hari, bukan hanya hafalan.",
          "Tahap ketiga adalah menyusun pengalaman belajar, pembiasaan, proyek, dukungan, dan asesmen yang membawa murid menuju bukti tersebut. Urutan ini menjaga sekolah dari dua jebakan: banyak kegiatan tanpa arah dan banyak materi tanpa transfer."
        ]],
        ["Tiga Horizon Masa Depan", [
          "Setelah SMA, setidaknya ada tiga horizon yang dapat dipersiapkan: kuliah di perguruan tinggi negeri atau kampus dalam negeri, melanjutkan studi ke luar negeri, dan belajar di kampus utama Timur Tengah. Setiap tujuan menuntut persiapan berbeda, tetapi sekolah tidak perlu memaksa semua anak memilih jalan yang sama.",
          "Tugas OSS adalah membangun fondasi dan sistem bimbingan agar pilihan itu terbuka. Jalur kampus dalam negeri memerlukan kesiapan akademik dan strategi seleksi; jalur luar negeri memerlukan bahasa, kemandirian, literasi lintas budaya, dan administrasi; jalur Timur Tengah memerlukan bahasa Arab, fondasi keislaman, dan informasi studi yang memadai. Sekolah dapat menambahkan jalur kewirausahaan, vokasi, tahfiz, atau pengabdian sesuai profil muridnya.",
          "Backward design yang berpihak pada murid tidak menjadikan visi yayasan sebagai satu cetakan. Ia menetapkan kompetensi inti bersama, lalu menyediakan jalur yang memungkinkan kekuatan dan aspirasi siswa berkembang."
        ]],
        ["Menurunkan Tujuan ke Tonggak Jenjang", [
          "Setelah profil lulusan disepakati, tim lintas unit memecahnya menjadi tonggak. Pertanyaan untuk SMA adalah kemampuan akhir apa yang harus mandiri. Untuk SMP: fondasi apa yang harus cukup kuat agar siswa siap memilih dan berlatih lebih serius. Untuk SD: kebiasaan dan konsep apa yang perlu tertanam. Untuk TK: pengalaman dasar apa yang menumbuhkan kesiapan, rasa aman, dan kegembiraan belajar.",
          "Tonggak sebaiknya menggunakan kata kerja yang dapat diamati: menjelaskan, mempraktikkan, merancang, mengambil keputusan, bekerja sama, merefleksikan, atau memimpin. Kata-kata seperti memahami dan berkarakter tetap penting, tetapi perlu diterjemahkan menjadi perilaku atau karya yang dapat ditinjau bersama.",
          "Pada tahap ini, sekolah akan menemukan dua masalah: pengulangan yang tidak menambah kedalaman dan kekosongan kompetensi yang diasumsikan telah diajarkan unit lain. Kedua masalah inilah yang membuat murid bosan sekaligus tidak siap."
        ]],
        ["Kalibrasi Tujuan, Bukti, dan Pengalaman", [
          "Setiap awal tahun, perwakilan jenjang perlu membawa contoh karya dan data murid, bukan hanya dokumen rencana. Tim memeriksa apakah bukti yang ada sesuai tujuan, apakah asesmen terlalu mudah atau terlalu berat, dan apakah pengalaman belajar benar-benar menyiapkan transisi. Kalibrasi ini menjadikan profil lulusan sebagai alat kerja, bukan poster dinding.",
          "Mulailah dari dua atau tiga domain prioritas. Menyelaraskan semua mata pelajaran dan nilai sekaligus sering membuat tim kelelahan. Pilih area yang paling menentukan identitas sekolah—misalnya ibadah, akhlak, bahasa, dan kepemimpinan—lalu bangun contoh yang baik sebelum memperluas."
        ]]
      ],
      reflection: "Jika satu lulusan ideal sekolah Anda hadir di depan tim hari ini, bukti nyata apa yang membuat semua orang sepakat bahwa visi sekolah telah tercapai?",
      quiz: [
        { q: "Apa urutan backward design yang tepat?", o: ["Kegiatan–bukti–tujuan", "Tujuan akhir–bukti–pengalaman belajar", "Jadwal–anggaran–promosi"], c: 1 },
        { q: "Sekolah ingin lulusan mampu berkomunikasi global. Bukti terbaik adalah…", o: ["Banyak poster berbahasa Inggris", "Nama program bilingual", "Performa komunikasi nyata pada tingkat yang disepakati"], c: 2 },
        { q: "Mengapa tujuan perlu diturunkan menjadi tonggak per jenjang?", o: ["Agar perkembangan bertahap dan celah antarkelas dapat terlihat", "Agar semua jenjang memakai tugas yang sama", "Agar kegiatan tahunan menjadi lebih banyak"], c: 0 }
      ]
    },
    {
      title: "Arsitektur Kurikulum yang Naik Kelas",
      lede: "Kurikulum berkelanjutan bukan kurikulum yang mengulang pesan yang sama setiap tahun. Ia mempertahankan nilai inti sambil menaikkan kedalaman pengetahuan, kemandirian, konteks penerapan, dan tanggung jawab murid.",
      sections: [
        ["Spiral, Bukan Lingkaran", [
          "Pengulangan dapat berguna jika setiap pertemuan menambah kedalaman. Murid mungkin mempelajari amanah di SD, SMP, dan SMA, tetapi bentuknya seharusnya tumbuh: menjaga barang pribadi, menyelesaikan tugas kelompok, mengelola proyek, lalu memegang tanggung jawab publik. Tema sama; tingkat tuntutan berbeda.",
          "Pengulangan menjadi masalah ketika materi, bahasa, contoh, dan aktivitas tetap sama. Siswa merasa tidak dipercaya untuk naik kelas secara psikologis. Guru pada jenjang berikutnya juga kehilangan kesempatan membangun di atas pengetahuan yang sudah dimiliki.",
          "Gunakan empat sumbu perkembangan: kompleksitas konsep, kemandirian, keluasan konteks, dan dampak kepada orang lain. Setiap kali kompetensi muncul kembali, setidaknya satu sumbu harus meningkat dan bukti barunya harus jelas."
        ]],
        ["Matriks Vertikal Lintas Jenjang", [
          "Matriks vertikal menyatukan satu kompetensi dari kelas awal sampai akhir. Baris memuat domain atau kompetensi; kolom memuat kelas target, indikator, pengalaman inti, bukti, dan penanggung jawab. Dokumen ini membantu guru melihat apa yang datang sebelum serta sesudah kelasnya.",
          "Matriks tidak perlu dimulai dari format rumit. Satu lokakarya dapat memetakan kartu-kartu program yang sudah ada, menandai duplikasi, kekosongan, dan lompatan yang terlalu jauh. Prioritaskan kesepakatan tentang perkembangan murid; aplikasi digital datang belakangan.",
          "Setelah peta awal terbentuk, uji dengan karya murid nyata. Bila indikator menyatakan siswa mandiri tetapi bukti menunjukkan guru masih memberi banyak bantuan, tonggak atau pengalaman belajar perlu diperbaiki."
        ], `<table><thead><tr><th>Unsur</th><th>Indikator</th><th>Kelas Target</th><th>Bukti</th></tr></thead><tbody><tr><td>Nilai/kompetensi</td><td>Perilaku atau kemampuan yang diamati</td><td>Kapan mulai, dikuatkan, dan mandiri</td><td>Karya, performa, keputusan, atau kebiasaan</td></tr><tr><td>Transisi</td><td>Kesiapan memasuki tahap baru</td><td>Kelas akhir jenjang</td><td>Portofolio dan percakapan serah terima</td></tr></tbody></table>`],
        ["Forum Kurikulum dan Serah Terima", [
          "OSS memerlukan forum kurikulum lintas unit yang bekerja secara berkala, bukan hanya menjelang akreditasi. Anggotanya membawa perspektif TK, SD, SMP, SMA, bimbingan konseling, keislaman, bahasa, dan layanan keluarga. Mandatnya adalah menjaga kesinambungan, bukan mengambil alih pekerjaan guru.",
          "Serah terima murid perlu lebih bermakna daripada daftar nilai. Dengan persetujuan dan perlindungan data yang memadai, guru berikutnya membutuhkan informasi tentang kekuatan, dukungan yang efektif, minat, kebiasaan belajar, dan area perkembangan. Informasi tidak boleh berubah menjadi label permanen; ia adalah titik awal untuk memahami, bukan alasan membatasi.",
          "Pertemuan lintas jenjang juga menciptakan saling menghargai. Guru mengetahui tuntutan tahap lain dan dapat menghentikan kebiasaan saling menyalahkan—TK dianggap kurang menyiapkan, SD dianggap terlalu memanjakan, atau SMP dianggap tidak disiplin—yang sering muncul ketika data dan dialog tidak tersedia."
        ]],
        ["Audit Tahunan: Hilangkan, Naikkan, Hubungkan", [
          "Pada akhir tahun, tandai setiap program dengan tiga keputusan. Hilangkan kegiatan yang tidak lagi memberi nilai atau hanya mengulang. Naikkan kegiatan yang penting dengan tantangan dan bukti lebih tinggi. Hubungkan program yang selama ini berdiri sendiri agar menjadi rangkaian perkembangan.",
          "Audit yang baik tidak selalu menambah beban. Sering kali hasil terbaik justru berasal dari mengurangi acara yang tersebar dan memusatkan energi pada pengalaman kunci. Kurikulum menjadi lebih ringan bagi organisasi, tetapi lebih bermakna bagi murid."
        ]]
      ],
      reflection: "Program apa yang paling sering diulang di beberapa jenjang tanpa kenaikan kedalaman, dan bagaimana Anda akan mengubahnya menjadi spiral perkembangan?",
      quiz: [
        { q: "Apa ciri pengulangan yang sehat dalam kurikulum spiral?", o: ["Tema muncul kembali dengan tuntutan yang lebih dalam atau mandiri", "Aktivitas disalin persis setiap tahun", "Semua guru memakai contoh yang sama"], c: 0 },
        { q: "Fungsi utama matriks vertikal adalah…", o: ["Menggantikan seluruh rencana mengajar", "Melihat hubungan kompetensi, target kelas, dan bukti lintas jenjang", "Menambah jumlah administrasi"], c: 1 },
        { q: "Saat serah terima, data murid seharusnya digunakan untuk…", o: ["Memberi label permanen", "Membandingkan guru antarunit", "Menentukan dukungan awal tanpa membatasi potensi murid"], c: 2 }
      ]
    },
    {
      title: "Kesinambungan Ibadah dan Identitas Keislaman",
      lede: "Kurikulum keislaman menjadi pembeda penting sekolah Islam, tetapi kekuatannya terletak pada perkembangan yang terencana: dari mengenal dan meniru menuju memahami, mandiri, konsisten, serta mampu menolong orang lain.",
      sections: [
        ["Dari Praktik Dasar ke Kemandirian", [
          "Peta ibadah lintas unit dapat dimulai dari wudu dan tayamum di TK; penguatan salat, zikir, bacaan, dan kemandirian di SD; puasa, iktikaf, zakat, serta haji atau umrah di SMP; lalu tanggung jawab yang lebih kompleks, seperti pengurusan jenazah, di SMA. Urutan ini menempatkan target sesuai perkembangan dan kesiapan murid.",
          "Pemetaan bukan berarti materi hanya boleh muncul sekali. Wudu dapat dikenalkan di TK, diperbaiki di SD, dipahami dalil dan variasinya di SMP, lalu diajarkan atau dipimpin dalam kegiatan sosial di SMA. Yang perlu dihindari adalah memulai dari nol setiap tahun seakan murid tidak memiliki pengalaman sebelumnya.",
          "Tiap target sebaiknya memuat empat lapis: pengetahuan, praktik, kebiasaan, dan pemaknaan. Murid tidak hanya mampu menyebutkan urutan, tetapi mempraktikkan dengan benar, menjaga konsistensi, dan memahami nilai yang membentuk hidupnya."
        ]],
        ["Bukti yang Otentik dan Manusiawi", [
          "Asesmen ibadah perlu menghormati kesakralan sekaligus memberi umpan balik yang membantu. Observasi praktik, jurnal refleksi, percakapan, dan tanggung jawab nyata dapat melengkapi tes pengetahuan. Sekolah perlu membedakan antara kesalahan belajar yang wajar dan sikap meremehkan; respons pendidik harus mendidik, bukan mempermalukan.",
          "Standar juga perlu memberi ruang bagi kondisi individual. Anak dengan kebutuhan khusus, perbedaan perkembangan, atau situasi keluarga membutuhkan dukungan yang adil. Kesetaraan tidak selalu berarti perlakuan identik; tujuannya adalah membantu setiap murid bertumbuh dalam kemampuan dan kedekatan kepada nilai ibadah.",
          "Bukti terbaik terlihat ketika kebiasaan bertahan tanpa pengawasan ketat dan ketika murid mampu menjelaskan alasan tindakannya. Karena itu, sekolah perlu memantau perkembangan dalam rentang waktu, bukan hanya pada satu ujian praktik."
        ]],
        ["Sekolah dan Keluarga sebagai Mitra", [
          "Pembiasaan mudah runtuh jika pesan sekolah dan rumah bertentangan. Komunikasi kepada orang tua harus praktis: apa yang sedang dilatih, mengapa penting, bentuk dukungan yang sesuai, dan bagaimana memberi teladan tanpa menjadikan rumah ruang ujian kedua.",
          "Pesan personal lebih bermanfaat daripada pengumuman umum yang bernada menyalahkan. Wali kelas dapat menyampaikan kemajuan spesifik dan satu kebiasaan yang dapat dikuatkan. Orang tua juga perlu ruang untuk menjelaskan kondisi rumah sehingga sekolah tidak membuat asumsi yang keliru.",
          "Kemitraan bukan pemindahan tanggung jawab kepada keluarga. Sekolah tetap menjamin kualitas pembelajaran; keluarga membantu konsistensi dan makna. Keduanya bertukar informasi untuk kepentingan anak."
        ]],
        ["Menjaga Ruh di Balik Target", [
          "Bahaya kurikulum berjenjang adalah berubah menjadi daftar cek yang kering. Pimpinan perlu memastikan bahwa indikator digunakan sebagai alat bimbingan, bukan untuk memamerkan angka. Keteladanan guru, suasana yang aman untuk bertanya, dan hubungan yang penuh kasih memberi ruh pada target teknis.",
          "Ukuran keberhasilan tidak hanya berapa banyak siswa lulus praktik, tetapi apakah mereka semakin sadar, bertanggung jawab, dan mampu menghubungkan ibadah dengan akhlak. Jika hasil teknis tinggi tetapi budaya saling merendahkan tetap ada, sistem perlu dievaluasi."
        ]]
      ],
      reflection: "Apakah peta ibadah di sekolah Anda menunjukkan pertumbuhan pengetahuan, praktik, kebiasaan, dan makna—atau baru berupa daftar materi per kelas?",
      quiz: [
        { q: "Apa empat lapis yang perlu ada pada target ibadah?", o: ["Nilai, ranking, lomba, dan sertifikat", "Pengetahuan, praktik, kebiasaan, dan pemaknaan", "Gedung, seragam, jadwal, dan promosi"], c: 1 },
        { q: "Murid SMA kembali mempelajari wudu. Kapan hal itu tetap sesuai kurikulum spiral?", o: ["Ketika materi dan tugas persis sama dengan SD", "Ketika guru mengabaikan kemampuan sebelumnya", "Ketika kedalaman meningkat, misalnya memahami variasi kasus dan mampu membimbing orang lain"], c: 2 },
        { q: "Kemitraan sekolah–keluarga yang sehat berarti…", o: ["Sekolah dan keluarga berbagi informasi serta peran tanpa saling memindahkan tanggung jawab", "Keluarga mengambil alih seluruh asesmen", "Sekolah hanya mengirim pengumuman umum"], c: 0 }
      ]
    },
    {
      title: "Tangga Akidah dan Akhlak yang Terukur",
      lede: "Akidah dan akhlak tidak cukup ditempatkan sebagai mata pelajaran. Dalam OSS, keduanya harus hadir sebagai perkembangan cara berpikir, keputusan, relasi, dan tanggung jawab yang semakin matang dari jenjang ke jenjang.",
      sections: [
        ["Akidah: dari Mengenal menuju Keteguhan", [
          "Pemetaan akidah dapat dimulai dari pengenalan yang dekat dengan pengalaman anak, berkembang menjadi kemampuan menjelaskan, menghubungkan keyakinan dengan kehidupan, menilai pertanyaan secara bertanggung jawab, dan mempertahankan sikap dengan adab. Setiap tahap menuntut bahasa dan pendekatan berbeda.",
          "Pada usia remaja, pertanyaan kritis bukan tanda kegagalan pendidikan. Sekolah justru perlu menyediakan ruang aman, guru yang siap mendengar, serta sumber yang dapat dipercaya. Jika jawaban hanya berupa larangan bertanya, murid mungkin tampak patuh tetapi mencari penjelasan dari sumber lain tanpa pendampingan.",
          "Indikator tidak menilai isi hati. Sekolah menilai kemampuan yang dapat diamati—cara menjelaskan, kualitas alasan, pilihan tindakan, dan kesiapan berdialog—sambil menyadari bahwa pertumbuhan iman adalah proses personal yang memerlukan keteladanan dan doa."
        ]],
        ["Akhlak: dari Peduli menuju Profesional", [
          "Tangga perkembangan akhlak dapat bergerak dari kepedulian dan amanah menuju kebiasaan belajar yang berakhlak, kemudian profesionalitas dan tabligh pada jenjang lebih tinggi. Semakin dewasa murid, semakin luas pula tanggung jawab sosial yang perlu dipikulnya.",
          "Anak kecil belajar merawat diri, barang, dan teman dekat. Siswa SD mengelola tugas serta kerja kelompok. Siswa SMP belajar menghadapi perbedaan, konflik, dan ruang digital. Siswa SMA memegang proyek, melayani masyarakat, menyampaikan gagasan, dan bertanggung jawab terhadap dampak keputusannya.",
          "Dengan alur ini, program akhlak tidak berhenti pada slogan pekanan. Setiap unit memilih situasi nyata tempat nilai dipraktikkan, kemudian guru memberi umpan balik terhadap proses dan dampaknya."
        ]],
        ["Budaya Organisasi adalah Kurikulum", [
          "Murid membaca perilaku orang dewasa lebih tajam daripada poster nilai. Jika sekolah mengajarkan amanah tetapi informasi sering terlambat, mengajarkan adab tetapi keluhan dibalas defensif, atau mengajarkan keadilan tetapi aturan diterapkan tidak konsisten, kurikulum tersembunyi akan mengalahkan materi resmi.",
          "Karena itu, standar akhlak perlu berlaku bagi pimpinan, guru, tenaga kependidikan, dan layanan administrasi. Rapat evaluasi tidak hanya membahas perilaku murid, tetapi juga pengalaman yang diciptakan orang dewasa. Pertanyaan pentingnya: nilai apa yang sedang dicontohkan oleh cara kita mengambil keputusan?",
          "Keselarasan lintas unit sangat menentukan OSS. Perbedaan wajar dalam gaya kepemimpinan, tetapi prinsip penghormatan, kepedulian, kejelasan, dan tanggung jawab harus terasa sejak gerbang TK sampai ruang SMA."
        ]],
        ["Asesmen Otentik dan Percakapan Reflektif", [
          "Akhlak dapat dinilai melalui catatan observasi, portofolio proyek, refleksi, umpan balik teman, dan konferensi guru–murid. Nilai angka tunggal sering tidak cukup menjelaskan konteks; komentar deskriptif membantu murid memahami kekuatan, dampak tindakannya, dan langkah perbaikan.",
          "Gunakan kejadian nyata sebagai bahan belajar tanpa mempermalukan pihak yang terlibat. Murid diajak melihat fakta, perasaan, kebutuhan, dampak, dan cara memulihkan. Pendekatan ini mengubah disiplin dari hukuman sesaat menjadi latihan tanggung jawab.",
          "Perkembangan lintas jenjang dapat didokumentasikan sebagai narasi singkat. Guru berikutnya menerima gambaran dukungan yang efektif, bukan cap seperti anak sulit atau tidak berkarakter. Bahasa profesional menjaga martabat sekaligus kesinambungan."
        ]]
      ],
      reflection: "Nilai apa yang paling sering diajarkan sekolah tetapi belum konsisten dicontohkan dalam layanan dan keputusan orang dewasa?",
      quiz: [
        { q: "Mengapa pertanyaan kritis remaja tentang keyakinan perlu didampingi?", o: ["Agar sekolah dapat menghentikan semua pertanyaan", "Agar murid memperoleh ruang aman, alasan yang bertanggung jawab, dan adab berdialog", "Agar materi dapat dipercepat"], c: 1 },
        { q: "Apa yang dimaksud budaya organisasi sebagai kurikulum?", o: ["Perilaku orang dewasa ikut mengajarkan nilai kepada murid", "Hanya mata pelajaran formal yang membentuk akhlak", "Budaya tidak berhubungan dengan layanan"], c: 0 },
        { q: "Catatan serah terima akhlak yang paling tepat adalah…", o: ["Cap permanen tentang sifat anak", "Daftar hukuman tanpa konteks", "Narasi profesional tentang perkembangan dan dukungan yang efektif"], c: 2 }
      ]
    },
    {
      title: "Bilingual Bertahap, Bukan Sekadar Label",
      lede: "Program bilingual menjadi daya tarik banyak sekolah, tetapi keberhasilannya tidak ditentukan oleh banyaknya dekorasi berbahasa asing. OSS memerlukan jalur kemampuan yang bertahap, guru yang siap, paparan bermakna, dan asesmen yang menunjukkan perkembangan nyata.",
      sections: [
        ["Mulai dari Tujuan Penggunaan Bahasa", [
          "Sekolah perlu menentukan untuk apa bahasa dipelajari. Apakah lulusan diharapkan mampu berkomunikasi sehari-hari, memahami literatur akademik, mengikuti program internasional, belajar di Timur Tengah, atau menggunakan bahasa untuk dakwah? Tujuan berbeda memerlukan alokasi waktu, materi, dan bukti yang berbeda.",
          "Tujuan yang jelas mencegah program menjadi campuran aktivitas tanpa prioritas. Sapaan harian dapat membangun keberanian, tetapi tidak cukup untuk membaca teks kompleks. Kelas bahasa intensif dapat menaikkan pengetahuan, tetapi tanpa praktik nyata kemampuan lisan sulit berkembang.",
          "Dalam sekolah Islam, bahasa Indonesia, bahasa Inggris, bahasa Arab, dan bahasa ibu tidak harus dipertentangkan. Masing-masing memiliki fungsi identitas, akses pengetahuan, komunikasi global, dan pemahaman sumber keislaman. Desain yang baik menjelaskan kapan serta bagaimana setiap bahasa digunakan."
        ]],
        ["Tangga Kemampuan yang Realistis", [
          "Tangga kemampuan bahasa dapat bergerak dari tahap awal menuju A1, A2, B1, B2, C1, dan C2. Kerangka seperti CEFR membantu sekolah memiliki bahasa bersama tentang kemampuan, tetapi target tetap perlu disesuaikan dengan usia, waktu paparan, kualitas pengajaran, dan titik awal murid.",
          "Setiap jenjang menetapkan capaian reseptif dan produktif: menyimak, membaca, berbicara, dan menulis. Murid dapat lebih maju pada satu keterampilan daripada yang lain. Karena itu, klaim satu level untuk seluruh kemampuan perlu digunakan secara hati-hati dan didukung asesmen.",
          "Peta lintas jenjang dapat memuat fungsi bahasa, bukan hanya struktur. TK mengenal bunyi dan merespons instruksi sederhana; SD membangun kosakata serta kalimat; SMP berdiskusi dan memahami teks; SMA mempresentasikan, menulis, dan menggunakan bahasa untuk tujuan akademik atau profesional.",
          "Pada jenjang TK, bahasa ibu perlu dikuatkan terlebih dahulu, terutama di TKA. Memasuki TKB, sekolah dapat menyepakati 30–50 instruksi kelas dalam bentuk kalimat—bukan hafalan kata lepas—lalu seluruh guru menggunakannya secara konsisten, misalnya ungkapan meminta izin, berbaris, berdiri, atau menanyakan waktu."
        ]],
        ["Empat Mesin Program: Guru, Paparan, Praktik, Asesmen", [
          "Guru adalah mesin pertama. Sekolah perlu memetakan kompetensi pengajar, menyediakan pengembangan profesional, dan membangun komunitas praktik. Memaksa semua guru mengajar penuh dalam bahasa asing tanpa dukungan dapat menurunkan pemahaman mata pelajaran dan kepercayaan diri guru.",
          "Mesin kedua dan ketiga adalah paparan serta praktik. Lingkungan bahasa harus memberi input yang dapat dipahami, contoh berkualitas, dan kesempatan menggunakan bahasa untuk tujuan nyata—proyek, korespondensi, klub, presentasi, pertukaran, atau karya media. Kuantitas tanpa pemahaman tidak cukup; praktik tanpa umpan balik juga mudah membeku pada kesalahan yang sama.",
          "Mesin keempat adalah asesmen. Gunakan tugas performa, portofolio, percakapan, dan tes yang selaras dengan tujuan. Data digunakan untuk mengatur dukungan dan target berikutnya, bukan sekadar bahan promosi.",
          "Program dapat dikembangkan melalui tiga tahap: <em>specify</em>, ketika orang atau area tertentu berkomitmen menggunakan bahasa; <em>satisfy</em>, ketika budaya dan pembelajaran bilingual meluas ke kelas serta mata pelajaran; dan <em>certify</em>, ketika sekolah bekerja sama dengan lembaga asesmen untuk menguji capaian. Urutan ini membantu sekolah tidak melompat langsung ke sertifikasi sebelum budaya dan praktiknya stabil."
        ]],
        ["Bilingual yang Inklusif", [
          "UNESCO menekankan pentingnya belajar dalam bahasa yang dipahami murid dan nilai pendidikan multilingual berbasis bahasa ibu. Artinya, ambisi bilingual perlu tetap melindungi pemahaman, partisipasi, dan rasa mampu. Murid tidak boleh dianggap kurang cerdas hanya karena sedang belajar mengekspresikan pengetahuan dalam bahasa baru.",
          "Sekolah dapat menggunakan strategi bertahap: penjelasan konsep dengan bahasa yang kuat, dukungan visual, pengenalan istilah, praktik terstruktur, lalu pelepasan bantuan. Asesmen mata pelajaran perlu membedakan kesulitan konsep dari keterbatasan bahasa agar keputusan dukungan lebih tepat.",
          "Tidak ada satu persentase universal untuk menentukan sejauh mana program bilingual harus diterapkan. Jawabannya ditentukan oleh tujuan, kesiapan guru, profil siswa, dan bukti pembelajaran. Lebih baik menjanjikan tahap yang jujur dan terus meningkat daripada memasang label besar yang tidak konsisten."
        ]]
      ],
      reflection: "Jika semua poster dan istilah asing dihapus, bukti performa apa yang masih menunjukkan bahwa program bilingual sekolah Anda benar-benar bekerja?",
      quiz: [
        { q: "Langkah pertama merancang program bilingual adalah…", o: ["Membeli dekorasi berbahasa asing", "Menetapkan tujuan penggunaan bahasa dan bukti kemampuan", "Mewajibkan semua guru mengajar penuh tanpa asesmen kesiapan"], c: 1 },
        { q: "Mengapa satu label level bahasa perlu digunakan hati-hati?", o: ["Karena kemampuan menyimak, berbicara, membaca, dan menulis dapat berkembang berbeda", "Karena level bahasa tidak pernah berguna", "Karena semua siswa selalu memiliki kemampuan sama"], c: 0 },
        { q: "Sekolah belum memiliki cukup guru bilingual. Respons paling tepat adalah…", o: ["Tetap mengklaim program penuh", "Menghapus bahasa ibu", "Menetapkan tahap realistis, mengembangkan guru, dan memperluas paparan secara bertahap"], c: 2 }
      ]
    },
    {
      title: "Berkelanjutan Tanpa Membuat Siswa Bosan",
      lede: "Kesinambungan tidak boleh berubah menjadi monoton. Saat siswa tumbuh, mereka membutuhkan identitas baru, tantangan yang lebih dewasa, ruang memilih, dan tanda bahwa sekolah melihat mereka sebagai pribadi yang berkembang—bukan anak yang sama di lingkungan yang sama.",
      sections: [
        ["Mengapa Murid Lama Dapat Jenuh", [
          "Sebagian siswa yang telah berada di yayasan sejak TK memilih tidak melanjutkan ke SMA dalam lembaga yang sama. Penyebabnya tidak selalu mutu yang buruk. Ada kalanya murid membutuhkan kebaruan sosial, ruang eksplorasi, atau simbol kedewasaan. Bisa juga mereka melihat program yang berulang dan belum memahami keunggulan khas SMA internal.",
          "Kebosanan juga muncul ketika semua keputusan masih berpusat pada orang tua. Saat remaja memasuki SMA, suara dan aspirasi anak menjadi lebih dominan. Strategi yang hanya meyakinkan orang tua akan kehilangan pihak yang paling menentukan pengalaman sehari-hari.",
          "Sekolah perlu membedakan kejenuhan terhadap rutinitas, kebutuhan akan tantangan, masalah relasi, ketidakcocokan arah studi, dan daya tarik sekolah pesaing. Satu kampanye tidak dapat menyelesaikan semua penyebab."
        ]],
        ["Nilai Tetap, Pengalaman Bertumbuh", [
          "OSS yang sehat menjaga nilai inti tetapi mengubah bentuk pengalaman. Jenjang baru perlu memiliki ritus transisi, ruang, tanggung jawab, guru, proyek, dan komunitas yang terasa lebih dewasa. Murid harus dapat menjawab: apa yang benar-benar baru dan mengapa tahap ini layak dijalani di sini?",
          "SMA dapat menawarkan jalur minat, proyek nyata, laboratorium, mentoring kampus, pertukaran, riset, kewirausahaan, kepemimpinan, dan pengabdian. SMP dapat memberi pengalaman eksplorasi yang mempersiapkan pilihan itu. Dengan demikian, keberlanjutan bukan sekadar tetap tinggal, tetapi naik ke panggung pertumbuhan berikutnya.",
          "Identitas unit boleh kuat selama tidak memutus visi yayasan. Perbedaan warna ruang, tradisi, struktur organisasi siswa, dan cara belajar dapat menandai perkembangan psikologis tanpa menghilangkan kesinambungan nilai."
        ]],
        ["Dengarkan Siswa sebelum Musim Pendaftaran", [
          "Mulailah percakapan aspirasi sejak kelas sebelum kelulusan. Survei singkat dapat memetakan minat, kekhawatiran, sekolah pembanding, program yang diinginkan, dan faktor keputusan. Lanjutkan dengan kelompok diskusi serta wawancara agar angka tidak kehilangan konteks.",
          "Siswa perlu melihat bahwa masukan mereka menghasilkan tindakan. Jika keluhan tentang pilihan kegiatan atau fasilitas hanya dikumpulkan tanpa kabar, survei justru menurunkan kepercayaan. Sekolah dapat mempublikasikan: kami mendengar, ini yang dapat dilakukan sekarang, ini yang memerlukan waktu, dan ini yang belum dapat dipenuhi beserta alasannya.",
          "Libatkan siswa SMA dan alumni sebagai pencerita yang jujur. Mereka lebih kredibel ketika tidak hanya memamerkan prestasi, tetapi menjelaskan tantangan, dukungan, dan pertumbuhan. Calon siswa membutuhkan gambaran pengalaman, bukan hanya brosur."
        ]],
        ["Rasa Memiliki sebagai Aset Retensi", [
          "Riset transisi sekolah menunjukkan bahwa keterlibatan dan rasa memiliki dapat menurun saat berpindah dari pendidikan dasar ke menengah. Hubungan dengan guru dan teman, dukungan sekolah serta rumah, dan pengalaman sebelumnya memengaruhi adaptasi. Ini memperkuat gagasan bahwa OSS harus merancang jembatan relasional, bukan hanya alur administrasi.",
          "Program bayangan satu hari, mentor kakak kelas, proyek bersama SMP–SMA, kunjungan laboratorium, dan perkenalan guru dapat mengurangi ketidakpastian. Namun tujuan akhirnya bukan membuat SMA terasa persis seperti SMP. Jembatan memberi cukup keakraban untuk merasa aman dan cukup kebaruan untuk merasa tertantang.",
          "Pantau rasa memiliki dengan pertanyaan sederhana dan berkala: apakah saya dikenal, didukung, memiliki teman, dapat meminta bantuan, dan punya ruang berkontribusi? Data ini menjadi indikator mutu transisi yang melengkapi angka pendaftaran."
        ]]
      ],
      reflection: "Apakah jenjang berikutnya di yayasan Anda menawarkan tahap pertumbuhan yang benar-benar baru bagi siswa, atau hanya mengganti kelas di lingkungan yang terasa sama?",
      quiz: [
        { q: "Mengapa strategi retensi menuju SMA harus melibatkan siswa secara langsung?", o: ["Karena pada usia remaja aspirasi dan pilihan siswa semakin menentukan", "Karena orang tua tidak lagi perlu memperoleh informasi", "Karena promosi hanya boleh dilakukan siswa"], c: 0 },
        { q: "Contoh kesinambungan yang tidak monoton adalah…", o: ["Mengulang kegiatan SMP di SMA", "Menjaga nilai inti sambil menambah pilihan, proyek, dan tanggung jawab yang lebih dewasa", "Menghapus semua tradisi yayasan"], c: 1 },
        { q: "Setelah survei siswa, sekolah sebaiknya…", o: ["Menyimpan hasil tanpa tindak lanjut", "Hanya mempublikasikan komentar positif", "Menjelaskan apa yang didengar, tindakan yang mungkin, dan batas yang ada"], c: 2 }
      ]
    },
    {
      title: "CAPTIVE: Mengubah Kepercayaan Menjadi Kelanjutan",
      lede: "Murid dan keluarga yang sudah berada di dalam yayasan adalah captive market dalam arti mereka telah mengenal pengalaman sekolah. Namun kedekatan ini bukan jaminan otomatis. Kepercayaan tetap harus dirawat melalui tim, jalur OSS, pelayanan, media, mitra, dan pertemuan yang manusiawi.",
      sections: [
        ["Enam Fondasi Strategi CAPTIVE", [
          "Strategi CAPTIVE dibangun di atas enam unsur: team captive; One Stop Schooling; pelayanan oleh pimpinan dan wali kelas; MEDIA; MITRA; serta MEET. Kerangka ini mengingatkan bahwa retensi bukan pekerjaan satu panitia. Seluruh pengalaman keluarga sejak awal menjadi promosi paling kuat bagi jenjang berikutnya.",
          "Team captive berarti setiap orang memahami janji OSS, mengetahui jalur rujukan, dan mampu memberi informasi dasar yang konsisten. Pimpinan memberi arah serta menyelesaikan hambatan lintas unit; wali kelas membangun komunikasi personal; guru menciptakan bukti mutu; administrasi menjaga kemudahan dan kejelasan.",
          "One Stop Schooling menjadi substansi yang dijanjikan. Tanpa kurikulum berkelanjutan dan pengalaman transisi yang nyata, strategi captive berubah menjadi kampanye penjualan kepada keluarga sendiri."
        ]],
        ["MEDIA: Juli sampai Oktober", [
          "Pada fase MEDIA, sekolah memahami dan memperlihatkan keunggulannya, menggunakan data murid internal, memaksimalkan media sosial serta media cetak, dan mengangkat kebersamaan siswa SMP/SMA. Waktu ini penting karena persepsi dibangun jauh sebelum keluarga diminta membuat keputusan.",
          "Konten perlu mengikuti perjalanan pertimbangan. Cerita proses belajar menjawab pertanyaan tentang mutu; profil guru menjawab pendampingan; karya dan perkembangan siswa memberi bukti; penjelasan jalur kurikulum menunjukkan kesinambungan; pengalaman alumni membantu murid membayangkan masa depan.",
          "Data internal digunakan untuk relevansi, bukan untuk membanjiri keluarga dengan pesan. Segmentasikan berdasarkan jenjang, minat, pertanyaan, dan kebutuhan dukungan. Pastikan komunikasi menghormati privasi serta memberi cara mudah untuk bertanya."
        ]],
        ["MITRA: November sampai Februari", [
          "Fase MITRA menekankan kedekatan dengan sekolah atau komunitas mitra, keterlibatan wali kelas, laga persahabatan, silaturahmi, serta pemahaman terhadap kelompok siswa dan orang tua. Hubungan ini memperluas jangkauan sekaligus memberi sekolah pemahaman tentang cara keputusan terbentuk dalam komunitas.",
          "Mitra tidak boleh diperlakukan hanya sebagai sumber calon murid. Sekolah perlu menawarkan nilai dua arah: berbagi pembelajaran, kegiatan siswa, kesempatan bertemu praktisi, pelayanan komunitas, atau program transisi. Ketika hubungan saling bermanfaat, rekomendasi muncul lebih alami.",
          "Untuk sekolah yang banyak menerima siswa dari luar unit internal, strategi mitra sama pentingnya dengan retensi. OSS bukan sistem tertutup. Murid eksternal perlu program penyetaraan, orientasi, dan pembentukan rasa memiliki agar dapat masuk ke jalur berkelanjutan tanpa dianggap warga kelas dua."
        ]],
        ["MEET: Maret sampai Juli", [
          "Fase MEET menggunakan pertemuan langsung—luring atau daring—untuk mendengar orang tua, berkunjung, memahami hal yang perlu diperbaiki, dan melakukan aksi cepat peduli. Pertemuan bukan panggung presentasi satu arah. Nilainya muncul ketika keluarga merasa didengar dan memperoleh tindak lanjut.",
          "Tim dapat menyiapkan daftar keluarga berdasarkan status: ingin tahu, tertarik, ragu, berkomitmen, atau memilih keluar. Setiap percakapan memiliki tujuan berbeda. Keluarga yang ragu memerlukan penjelasan atau pengalaman; keluarga yang memilih keluar tetap perlu dihormati dan dapat memberi pelajaran penting bagi mutu.",
          "Hindari teknik yang membuat orang tua merasa bersalah. Closing yang beretika membantu keluarga mengambil keputusan yang sadar, menyediakan informasi yang benar, menjelaskan batas waktu secara wajar, dan memudahkan administrasi. Kepercayaan jangka panjang lebih berharga daripada satu pendaftaran yang diperoleh melalui tekanan."
        ]]
      ],
      reflection: "Pada fase MEDIA, MITRA, atau MEET manakah sekolah Anda paling lemah, dan pengalaman keluarga apa yang perlu diperbaiki sebelum menambah promosi?",
      quiz: [
        { q: "Apa fondasi paling penting agar strategi captive tidak berubah menjadi sekadar penjualan?", o: ["Diskon besar", "Substansi OSS dan mutu pengalaman yang nyata", "Pesan promosi setiap hari"], c: 1 },
        { q: "Bagaimana memperlakukan sekolah atau komunitas mitra?", o: ["Sebagai sumber calon murid semata", "Sebagai pesaing yang harus dihindari", "Sebagai hubungan dua arah yang juga menerima nilai dan dukungan"], c: 2 },
        { q: "Prinsip closing yang beretika adalah…", o: ["Membantu keluarga mengambil keputusan sadar tanpa tekanan", "Menyembunyikan informasi yang menimbulkan pertanyaan", "Membuat keluarga merasa bersalah bila tidak melanjutkan"], c: 0 }
      ]
    },
    {
      title: "Tata Kelola, Indikator, dan Roadmap 12 Bulan",
      lede: "Formula OSS baru menjadi sistem ketika ada pemilik kerja, data yang dibaca, keputusan yang ditindaklanjuti, serta ritme perbaikan. Bab terakhir menerjemahkan gagasan menjadi struktur, ukuran, dan langkah yang dapat dimulai tanpa menunggu keadaan sempurna.",
      sections: [
        ["Dewan OSS dan Kepemilikan Lintas Unit", [
          "Bentuk tim kecil lintas unit yang bertanggung jawab kepada pimpinan yayasan. Anggotanya tidak harus banyak: wakil pimpinan, kurikulum, kesiswaan atau konseling, perwakilan kepala unit, layanan keluarga, dan penerimaan murid. Tim ini menjaga peta lulusan, kurikulum vertikal, pengalaman transisi, data kohor, serta komunikasi.",
          "Setiap alur memiliki satu pemilik yang jelas. Siapa memimpin serah terima data? Siapa memastikan kunjungan jenjang? Siapa menindaklanjuti keluarga ragu? Siapa mengompilasi alasan keluar? Kolaborasi tanpa kepemilikan mudah berubah menjadi tugas bersama yang tidak selesai.",
          "Sinergi guru dibangun melalui pekerjaan yang bermakna, bukan slogan. Libatkan guru dalam memetakan kompetensi, melihat karya siswa, menyusun pengalaman transisi, dan membaca dampak. Ketika peran mereka terlihat dalam hasil, OSS tidak terasa sebagai proyek pemasaran tambahan."
        ]],
        ["Dashboard Perjalanan Kohor", [
          "Indikator utama adalah internal progression rate: jumlah lulusan yang benar-benar mendaftar di unit berikutnya dibagi jumlah lulusan yang memenuhi syarat, dikali seratus persen. Angka ini perlu dibaca per jenjang dan per kohor, bukan digabung menjadi satu rata-rata yang menutupi titik lemah.",
          "Tambahkan indikator perjalanan: persentase yang mengenal program berikutnya, menghadiri pengalaman transisi, menyatakan minat, berkomitmen, mendaftar, dan hadir pada awal tahun. Catat pula alasan ragu atau keluar dalam kategori yang konsisten. Funnel ini menunjukkan di tahap mana kepercayaan hilang.",
          "Jangan menetapkan satu persentase ideal universal tanpa konteks. Target sebaiknya menggunakan baseline tiga tahun, kapasitas unit, komposisi murid internal–eksternal, variasi kebutuhan keluarga, dan mutu jenjang berikutnya. Kenaikan yang sehat harus tetap menghormati pilihan terbaik bagi anak."
        ], `<table><thead><tr><th>Indikator</th><th>Rumus/pertanyaan</th><th>Makna</th></tr></thead><tbody><tr><td>Progression rate</td><td>Pendaftar internal ÷ lulusan memenuhi syarat × 100%</td><td>Kelanjutan aktual</td></tr><tr><td>Intent rate</td><td>Murid yang menyatakan minat ÷ lulusan</td><td>Daya tarik awal</td></tr><tr><td>Transition participation</td><td>Peserta program transisi ÷ lulusan</td><td>Jangkauan pengalaman</td></tr><tr><td>Belonging pulse</td><td>Skor dikenal, didukung, berteman, berkontribusi</td><td>Kualitas relasional</td></tr></tbody></table>`],
        ["Klinik Enam Kasus Lapangan", [
          "Jika SD banyak menerima murid dari TK luar atau SMP menerima lulusan SD eksternal, jangan memaksa komposisi menjadi seratus persen internal. Tetapkan dua jalur: retensi yang sehat bagi murid internal dan onboarding bermutu bagi murid eksternal. Ukur keduanya terpisah agar keberhasilan akuisisi tidak menutupi kebocoran internal.",
          "Jika murid lama bosan dan keputusan SMA lebih dominan pada anak, desain ulang pengalaman remaja serta libatkan suara mereka sejak awal. Jika sekolah baru memiliki murid sedikit, tampilkan kualitas proses secara transparan: rasio pendampingan, karya, praktik guru, keselamatan, kemajuan murid, dan bukti layanan—bukan memalsukan kesan ramai.",
          "Jika sinergi guru lemah, mulai dari satu masalah kohor yang nyata dan satu proyek lintas unit dengan peran jelas. Jika TK menargetkan pertumbuhan dari 41 menjadi 60 murid, hitung funnel: berapa keluarga perlu mengenal, bertanya, berkunjung, dan mendaftar; lalu perbaiki pengalaman pada tahap dengan konversi terlemah. Jika sekolah ingin bilingual, tetapkan tahap berdasarkan kesiapan guru dan bukti performa, bukan persentase penggunaan bahasa semata."
        ]],
        ["Roadmap 30–60–90 Hari hingga Satu Tahun", [
          "Tiga puluh hari pertama digunakan untuk audit: data kohor, suara murid dan orang tua, peta program, serta titik putus. Hari ke-31 sampai 60 digunakan untuk menyepakati profil lulusan, dua domain kurikulum prioritas, indikator, dan pemilik alur. Hari ke-61 sampai 90 digunakan untuk menguji satu transisi—misalnya kelas akhir SD menuju SMP—dengan pengalaman, komunikasi, serta dashboard sederhana.",
          "Pada bulan keempat sampai keenam, tim meninjau bukti, memperbaiki desain, dan melatih personel yang terlibat. Bulan ketujuh sampai kesembilan memperluas ke transisi lain dan menyelaraskan kalender MEDIA–MITRA–MEET. Bulan kesepuluh sampai kedua belas digunakan untuk mengevaluasi satu kohor, mendokumentasikan praktik baik, dan menetapkan prioritas tahun berikutnya.",
          "Jaga jumlah prioritas. Sistem yang tahan lama lahir dari sedikit keputusan yang konsisten, bukan puluhan program serentak. Setiap rapat OSS harus berakhir dengan siapa melakukan apa, kapan selesai, bukti yang diharapkan, dan kapan ditinjau kembali."
        ]]
      ],
      reflection: "Dalam 30 hari ke depan, satu titik transisi mana yang akan Anda audit, data apa yang dikumpulkan, dan siapa pemilik tindak lanjutnya?",
      quiz: [
        { q: "Bagaimana menghitung internal progression rate?", o: ["Jumlah unggahan dibagi jumlah guru", "Pendaftar internal dibagi lulusan yang memenuhi syarat, lalu dikali 100%", "Jumlah semua pendaftar dibagi kapasitas gedung"], c: 1 },
        { q: "Mengapa murid internal dan eksternal perlu dianalisis terpisah?", o: ["Agar keberhasilan akuisisi tidak menutupi kebocoran retensi internal", "Agar murid eksternal diperlakukan lebih rendah", "Agar sekolah tidak perlu onboarding"], c: 0 },
        { q: "Apa fokus 30 hari pertama roadmap OSS?", o: ["Meluncurkan semua program sekaligus", "Membangun gedung baru", "Audit data kohor, suara pengguna, program, dan titik putus"], c: 2 }
      ]
    }
  ];

  const assessment = [
    ["Sebuah yayasan memiliki TK–SMA, tetapi tiap unit merancang program dan promosi sendiri. Diagnosis paling tepat adalah…", ["Sudah menjadi OSS penuh karena unitnya lengkap", "Belum menjadi OSS karena kesinambungan sistem belum terbentuk", "Cukup mengganti logo seluruh unit"], 2],
    ["Retensi yang sehat seharusnya merupakan akibat dari…", ["Mutu, relevansi, rasa memiliki, dan layanan", "Pembatasan pilihan keluarga", "Tekanan menjelang pendaftaran"], 1],
    ["Perbedaan OSE dari OSS terutama terletak pada…", ["Warna seragam", "Jalur yang diperluas sampai pendidikan tinggi", "Jumlah konten media sosial"], 2],
    ["Urutan tiga tahap backward design adalah…", ["Tujuan–bukti–pengalaman belajar", "Kegiatan–anggaran–tujuan", "Promosi–pendaftaran–evaluasi"], 1],
    ["Indikator profil lulusan yang baik menggunakan…", ["Kata kerja dan bukti yang dapat diamati", "Slogan yang sangat umum", "Daftar acara tahunan"], 1],
    ["Kurikulum spiral berarti…", ["Mengulang aktivitas persis sama", "Tema kembali dengan kedalaman atau kemandirian lebih tinggi", "Setiap jenjang tidak boleh terkait"], 2],
    ["Tujuan serah terima informasi murid adalah…", ["Memberi label permanen", "Membantu guru berikutnya merancang dukungan awal", "Membandingkan reputasi unit"], 2],
    ["Asesmen ibadah yang utuh memadukan…", ["Pengetahuan, praktik, kebiasaan, dan pemaknaan", "Hafalan dan ranking saja", "Kehadiran dan seragam"], 1],
    ["Pernyataan yang tepat tentang akhlak adalah…", ["Hanya diajarkan dalam mata pelajaran", "Budaya layanan orang dewasa juga mengajarkan akhlak", "Tidak dapat direfleksikan sama sekali"], 2],
    ["Program bilingual sebaiknya dimulai dari…", ["Tujuan penggunaan bahasa dan bukti kemampuan", "Dekorasi sebanyak mungkin", "Klaim level tertinggi"], 1],
    ["Pendekatan bilingual yang inklusif menjaga…", ["Pemahaman dan partisipasi murid sambil kemampuan baru bertumbuh", "Penghapusan bahasa yang sudah dikuasai", "Penggunaan satu bahasa tanpa melihat kesiapan"], 1],
    ["Untuk mencegah kebosanan siswa lama, jenjang baru perlu…", ["Mengulang program agar familiar", "Memberi tantangan, pilihan, dan identitas yang lebih dewasa", "Mengabaikan suara siswa"], 2],
    ["Rasa memiliki dapat dipantau melalui pertanyaan tentang…", ["Apakah murid dikenal, didukung, memiliki teman, dan dapat berkontribusi", "Berapa banyak brosur yang dicetak", "Berapa kali slogan dibacakan"], 1],
    ["Dalam strategi CAPTIVE, fase MEDIA berfokus pada…", ["Memahami keunggulan, menggunakan data, dan mengomunikasikan bukti", "Menekan keluarga agar segera membayar", "Menghentikan semua pertemuan"], 1],
    ["Hubungan dengan mitra yang sehat bersifat…", ["Satu arah sebagai sumber calon murid", "Dua arah dan memberi nilai bagi kedua pihak", "Rahasia dan tanpa tujuan"], 2],
    ["Fase MEET perlu digunakan terutama untuk…", ["Presentasi satu arah", "Mendengar, berdialog, dan menindaklanjuti kebutuhan", "Menghindari keluarga yang ragu"], 2],
    ["Internal progression rate mengukur…", ["Proporsi lulusan yang benar-benar mendaftar ke unit berikutnya", "Jumlah pengikut media sosial", "Jumlah seluruh kegiatan"], 1],
    ["Target progression rate sebaiknya ditetapkan berdasarkan…", ["Satu angka universal", "Baseline, kapasitas, komposisi murid, dan konteks mutu", "Keinginan promosi saja"], 2],
    ["Sekolah baru dengan murid sedikit dapat menunjukkan mutu melalui…", ["Bukti proses, karya, pendampingan, keamanan, dan kemajuan", "Foto yang dibuat seolah sangat ramai", "Janji tanpa data"], 1],
    ["Langkah terbaik setelah uji coba transisi 90 hari adalah…", ["Menambah semua program sekaligus", "Meninjau bukti, memperbaiki desain, lalu memperluas bertahap", "Menghentikan pengukuran"], 2]
  ];

  const assessmentHtml = `
    <p class="eyebrow reveal">Evaluasi Akhir</p>
    <h2 class="reveal">Asesmen Komprehensif</h2>
    <p class="lede reveal">Jawablah 20 soal berikut untuk menilai pemahaman Anda tentang visi, kurikulum, pengalaman transisi, strategi CAPTIVE, dan tata kelola One Stop Schooling.</p>
    <div class="card reveal">
      ${assessment.map(([question, options, correct]) => `<div class="assess-q" data-correct="${correct}"><p>${question}</p>${options.map(option => `<button class="quiz-opt" onclick="selectAssessAnswer(this)">${option}</button>`).join("")}</div>`).join("")}
      <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button>
      <div class="assess-result" id="asesmenResult"></div>
    </div>
    <div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => [`bab${index + 1}`, chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
})();
