/* Konten eBook Interaktif 56 — Mengenali dan Mengatasi Kesulitan Belajar Anak */
(() => {
  const section = ([heading, paragraphs, extra = ""]) => `
    <h4>${heading}</h4>
    ${paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
    ${extra}`;

  const note = (title, body) => `<div style="margin:22px 0;padding:18px 20px;border-left:5px solid var(--accent);background:var(--accent-tint);border-radius:0 14px 14px 0"><strong style="font-family:var(--font-display);color:var(--heading)">${title}</strong><p style="margin:8px 0 0">${body}</p></div>`;

  const miniQuiz = questions => `
    <div class="card reveal">
      <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
      ${questions.map(question => `
        <div class="quiz-q">
          <p>${question.q}</p>
          ${question.o.map((option, index) => `<button class="quiz-opt" onclick="answerQuiz(this,${index === question.c})">${option}</button>`).join("")}
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
      <textarea placeholder="Tulis pengamatan atau rencana Anda di sini..."></textarea>
    </div>
    ${miniQuiz(data.quiz)}
    <button class="done-btn" id="doneBtn-bab${number}" onclick="markDone('bab${number}')">✓ Tandai Bab Ini Selesai</button>
    <p class="seal" id="seal-bab${number}">✓ Bab ${number} selesai dibaca</p>
    <div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;

  const chapters = [
    {
      title: "Kesulitan Belajar Bukan Ukuran Kemampuan",
      lede: "Seorang anak dapat memahami percakapan, membangun benda yang rumit, mengingat cerita, atau memiliki rasa ingin tahu yang besar—namun tetap tersendat ketika harus membaca, menulis, berhitung, atau menyelesaikan tugas. Kesenjangan itu bukan alasan untuk merendahkan kemampuan; ia adalah undangan untuk mencari hambatan yang belum terlihat.",
      sections: [
        ["Ketika Hasil Tidak Mewakili Potensi", [
          "Nilai sekolah hanya menangkap sebagian kecil dari kemampuan anak. Tugas membaca menuntut pengenalan kata, kelancaran, kosakata, perhatian, dan pemahaman sekaligus. Menulis menuntut gagasan, bahasa, ejaan, gerak tangan, ingatan kerja, dan pengaturan urutan. Matematika juga memerlukan makna bilangan, simbol, bahasa, strategi, dan ketelitian. Kegagalan pada satu mata rantai dapat menutupi kekuatan pada mata rantai lain.",
          "Itulah sebabnya anak yang mampu menjawab dengan baik ketika soal dibacakan dapat tampak jauh lebih lemah ketika harus membaca soal sendiri. Anak yang dapat bercerita panjang mungkin menghasilkan tulisan dua kalimat karena seluruh energinya habis untuk membentuk huruf dan mengeja. Perbedaan antara kemampuan lisan dan hasil tertulis adalah data penting, bukan bukti bahwa anak sedang mencari alasan.",
          "Kita perlu mengganti pertanyaan ‘mengapa ia tidak mau?’ menjadi ‘bagian mana yang membuat tugas ini jauh lebih berat baginya?’ Perubahan kecil dalam pertanyaan mengubah cara orang dewasa melihat anak: dari pelaku masalah menjadi pembelajar yang membutuhkan jalan masuk berbeda."
        ]],
        ["Empat Sumber Hambatan yang Perlu Dibedakan", [
          "Kesulitan belajar sehari-hari dapat muncul karena materi baru, latihan belum cukup, kelelahan, sakit, kecemasan, konflik, absensi, bahasa pengantar, atau pengajaran yang belum sesuai. Hambatan seperti ini sering membaik setelah penyebabnya diatasi dan anak memperoleh pengajaran yang jelas serta kesempatan berlatih.",
          "Gangguan belajar spesifik mengacu pada kesulitan yang menetap pada keterampilan akademik tertentu—membaca, menulis, atau matematika—meskipun anak telah memperoleh kesempatan belajar. Profilnya tidak harus sama pada setiap anak dan tidak ditentukan oleh satu skor kecerdasan. Sementara itu, hambatan intelektual bersifat lebih luas dan juga menyangkut fungsi adaptif dalam kehidupan sehari-hari; keduanya tidak boleh disimpulkan hanya dari rapor.",
          "Ada pula kondisi perkembangan, bahasa, sensorik, kesehatan, perhatian, tidur, dan emosi yang dapat berdiri sendiri atau hadir bersamaan. Karena banyak gejala tampak mirip dari luar, kesimpulan yang tergesa-gesa mudah mengarahkan bantuan ke sasaran yang salah."
        ], note("Prinsip dasar", "Satu perilaku dapat memiliki banyak penyebab. Anak yang tidak menyelesaikan tugas bisa belum memahami instruksi, kehilangan perhatian, kehabisan tenaga untuk menulis, cemas membuat kesalahan, atau memang belum menguasai keterampilan dasarnya.")],
        ["Bukan Malas, Bukan Bodoh, Bukan Kurang Disiplin", [
          "Label ‘malas’ sering diberikan ketika orang dewasa hanya melihat hasil akhir. Padahal menghindar, bercanda, berjalan-jalan, menghapus berulang kali, atau marah dapat menjadi cara anak melindungi diri dari tugas yang terus mempermalukannya. Perilaku tetap perlu diarahkan, tetapi arahannya akan lebih efektif jika fungsi perilakunya dipahami.",
          "Pengulangan tanpa strategi juga dapat menambah luka. Meminta anak membaca halaman yang sama berkali-kali tidak otomatis membangun keterampilan apabila ia belum memahami hubungan bunyi dan huruf. Menambah soal matematika tidak menyelesaikan kebingungan jika makna kuantitas belum terbentuk. Lebih banyak tekanan bukan pengganti diagnosis pembelajaran yang baik.",
          "Bahasa orang dewasa perlu menjaga martabat: ‘Bagian ini masih berat, mari kita pecah,’ lebih menolong daripada ‘Kamu sebenarnya bisa kalau mau.’ Kalimat pertama mengakui hambatan sekaligus menawarkan dukungan; kalimat kedua menjadikan kesulitan sebagai kesalahan moral."
        ]],
        ["Kekuatan Tidak Membatalkan Kesulitan", [
          "Anak dengan kesulitan belajar dapat memiliki kemampuan rata-rata, tinggi, atau sangat tinggi. Sebagian mampu mengompensasi kelemahannya melalui ingatan, penalaran, kreativitas, dukungan keluarga, atau kerja keras sehingga masalah baru tampak ketika teks semakin panjang dan tuntutan organisasi meningkat. Prestasi yang baik pada beberapa bidang tidak otomatis meniadakan kebutuhan dukungan pada bidang lain.",
          "Sebaliknya, kita juga tidak perlu membangun stereotip bahwa setiap anak dengan disleksia pasti sangat kreatif atau setiap anak dengan ADHD pasti memiliki energi luar biasa. Kekuatan harus ditemukan pada pribadi yang nyata, bukan ditentukan oleh label. Tujuan dukungan adalah memperluas akses anak terhadap belajar sambil tetap mengembangkan minat, relasi, dan identitas yang sehat.",
          "Titik berangkat yang adil adalah profil: apa yang sudah dikuasai, kapan anak berhasil, bagian mana yang menghambat, dukungan apa yang membantu, dan bagaimana kemajuannya. Profil jauh lebih berguna daripada satu kata yang mencoba menjelaskan seluruh diri anak."
        ]]
      ],
      reflection: "Pikirkan satu anak yang sering dianggap kurang berusaha. Bukti apa yang menunjukkan adanya hambatan keterampilan, perhatian, bahasa, emosi, atau desain tugas di balik perilakunya?",
      quiz: [
        { q: "Seorang anak mampu menjawab soal saat dibacakan, tetapi gagal saat membaca sendiri. Data ini paling tepat menunjukkan…", o: ["Ia sengaja memilih tugas mudah", "Ada kemungkinan hambatan pada akses membaca yang menutupi pemahamannya", "Kemampuan lisannya tidak relevan"], c: 1 },
        { q: "Apa langkah berpikir paling sehat ketika anak tidak menyelesaikan tugas?", o: ["Langsung menyimpulkan malas", "Mencari bagian tugas dan kondisi yang menjadi hambatan", "Menambah hukuman agar terbiasa"], c: 1 },
        { q: "Apakah kekuatan akademik pada satu bidang meniadakan kesulitan belajar pada bidang lain?", o: ["Ya, selalu", "Tidak; anak dapat memiliki profil kekuatan dan hambatan yang tidak merata", "Hanya jika nilainya tinggi"], c: 1 }
      ]
    },
    {
      title: "Membaca Pola Sebelum Memberi Nama",
      lede: "Kesalahan sesaat adalah bagian dari belajar. Yang perlu diperhatikan adalah pola: muncul berulang, bertahan setelah pengajaran, membutuhkan usaha yang tidak sebanding, terjadi pada situasi yang relevan, dan mulai mengganggu kemajuan atau kesejahteraan anak.",
      sections: [
        ["Lima Lensa Pengamatan", [
          "Lensa pertama adalah ketepatan: jenis kesalahan apa yang berulang? Lensa kedua adalah kelancaran: apakah keterampilan yang seharusnya mulai otomatis masih sangat lambat dan terputus-putus? Lensa ketiga adalah usaha: berapa banyak energi, bantuan, dan waktu yang dibutuhkan dibanding tuntutan tugas?",
          "Lensa keempat adalah kemandirian. Anak mungkin tampak berhasil, tetapi hanya setelah instruksi diulang, soal dibacakan, langkah terus diingatkan, atau orang dewasa berada di sampingnya. Lensa kelima adalah dampak: apakah masalah memengaruhi nilai, partisipasi, emosi, hubungan teman, kehadiran, atau kemauan datang ke sekolah?",
          "Kelima lensa harus dibaca bersama. Tulisan yang kurang rapi tetapi cepat, dapat dibaca, dan tidak menghambat penyampaian gagasan mungkin hanya memerlukan latihan. Tulisan yang menyakitkan, sangat lambat, sulit dibaca, dan membuat anak tidak mampu menuangkan pengetahuan memerlukan perhatian lebih serius."
        ]],
        ["Tanda pada Masa Prasekolah", [
          "Pada usia dini, tujuan utama bukan memberi label akademik, melainkan memantau perkembangan bahasa, bunyi ujaran, koordinasi, perhatian, permainan, dan kesiapan belajar. Riwayat keluarga dengan kesulitan membaca atau matematika dapat meningkatkan kewaspadaan, tetapi tidak memastikan anak akan mengalami kondisi yang sama.",
          "Tanda yang layak dibicarakan antara lain kesulitan yang menetap dalam memahami atau menghasilkan bahasa, mengenali rima dan suku kata setelah mendapat stimulasi, mengingat urutan sederhana, mempelajari nama huruf, mengikuti instruksi sesuai usia, atau mengembangkan keterampilan motorik halus. Tanda tunggal tidak cukup; kualitas stimulasi, bahasa rumah, pendengaran, penglihatan, dan perkembangan umum tetap diperiksa.",
          "Deteksi dini bukan perlombaan membuat anak cepat membaca. Tekanan akademik yang terlalu dini dapat menghasilkan banyak kesalahan yang sebenarnya sesuai perkembangan. Dukungan terbaik pada tahap ini adalah bahasa yang kaya, permainan bunyi, buku bersama, gerak, eksplorasi jumlah, rutinitas, dan pemantauan perkembangan."
        ]],
        ["Kelas Awal: Ketika Keterampilan Dasar Dibangun", [
          "Pada kelas awal, perhatikan kemajuan setelah pengajaran yang eksplisit. Dalam membaca: pengenalan bunyi-huruf, penggabungan bunyi menjadi kata, akurasi, ejaan, dan kelancaran. Dalam menulis: pembentukan huruf, jarak, kecepatan, ejaan, serta kemampuan mengubah ide lisan menjadi kalimat. Dalam matematika: makna jumlah, perbandingan besaran, urutan bilangan, strategi hitung, dan penggunaan simbol.",
          "Pembalikan huruf dapat terjadi pada banyak anak yang baru belajar menulis. Ia menjadi bermakna bila menetap, sering, hadir bersama kesulitan lain, dan mengganggu fungsi—bukan karena satu huruf terbalik pada satu halaman. Demikian pula, anak yang bergerak banyak tidak otomatis ADHD; perilaku perlu dibandingkan dengan tahap perkembangan, situasi, dan anak sebaya.",
          "Jangan menunggu kegagalan bertahun-tahun untuk mulai membantu. Sekolah dapat memberi pengajaran tambahan segera sambil mengumpulkan data kemajuan. Respons anak terhadap pengajaran yang tepat justru memberi informasi penting bagi keputusan berikutnya."
        ]],
        ["Kelas Tinggi dan Remaja: Gejalanya Berubah Bentuk", [
          "Pada kelas tinggi, anak mungkin sudah dapat membaca tetapi sangat lambat, menghindari membaca keras, kesulitan mengeja kata baru, atau tidak sanggup mempertahankan pemahaman pada teks panjang. Masalah menulis tampak pada perencanaan, struktur paragraf, sintaksis, revisi, dan waktu pengerjaan. Kesulitan matematika bergeser ke pecahan, nilai tempat, operasi bertingkat, soal cerita, dan penerapan sehari-hari.",
          "Tuntutan fungsi eksekutif juga meningkat. Jadwal berpindah, banyak guru, tugas jangka panjang, tenggat, catatan, dan bahan belajar membuat kesulitan organisasi terlihat lebih jelas. Anak yang sebelumnya mengandalkan dukungan orang tua dapat mulai tertinggal ketika harus mengelola semuanya sendiri.",
          "Remaja sering datang dengan masalah sekunder: rasa malu, kelelahan, penolakan sekolah, kecemasan ujian, konflik, atau keyakinan bahwa dirinya bodoh. Pada tahap ini, intervensi akademik harus berjalan bersama pemulihan kepercayaan diri dan keterampilan advokasi diri."
        ], `<table><thead><tr><th>Yang diamati</th><th>Pertanyaan kunci</th></tr></thead><tbody><tr><td>Ketepatan</td><td>Kesalahan apa yang berulang?</td></tr><tr><td>Kelancaran</td><td>Apakah keterampilan masih lambat dan tersendat?</td></tr><tr><td>Usaha</td><td>Seberapa besar energi dan waktu yang diperlukan?</td></tr><tr><td>Kemandirian</td><td>Bantuan apa yang selalu dibutuhkan?</td></tr><tr><td>Dampak</td><td>Bagaimana pengaruhnya terhadap belajar dan kesejahteraan?</td></tr></tbody></table>`]
      ],
      reflection: "Ambil satu sampel tugas anak. Catat pola menurut lima lensa—ketepatan, kelancaran, usaha, kemandirian, dan dampak—tanpa menuliskan diagnosis.",
      quiz: [
        { q: "Mengapa satu huruf yang terbalik belum cukup untuk menyimpulkan disleksia?", o: ["Karena pembalikan tidak pernah penting", "Karena perlu melihat frekuensi, persistensi, gejala lain, dan dampaknya", "Karena disleksia hanya terjadi pada remaja"], c: 1 },
        { q: "Anak berhasil hanya jika soal terus dibacakan. Lensa mana yang terutama memberi informasi?", o: ["Kemandirian", "Warna tulisan", "Popularitas"], c: 0 },
        { q: "Apa prinsip deteksi pada kelas awal?", o: ["Menunggu bertahun-tahun sebelum membantu", "Memberi dukungan terarah sambil memantau respons", "Memberi label dari satu kesalahan"], c: 1 }
      ]
    },
    {
      title: "Deteksi Dini yang Aman dan Bertanggung Jawab",
      lede: "Deteksi dini yang baik mempercepat bantuan tanpa mempercepat label. Guru dan orang tua dapat mengenali kekhawatiran, mencatat pola, serta mencoba dukungan awal; diagnosis tetap memerlukan asesmen profesional yang menilai anak secara utuh.",
      sections: [
        ["Enam Langkah dari Kekhawatiran ke Keputusan", [
          "Mulailah dengan mendefinisikan masalah secara operasional: ‘membaca 35 kata dalam dua menit dengan delapan kesalahan’ lebih berguna daripada ‘lemah membaca’. Kumpulkan dua atau tiga sampel nyata, catat jenis bantuan yang diberikan, dan bandingkan performa pada tugas lisan, visual, praktik, serta tertulis.",
          "Berikan dukungan yang sesuai selama periode yang cukup untuk melihat respons. Tetapkan keterampilan sasaran, frekuensi, durasi, pelaksana, dan indikator kemajuan. Tinjau data secara berkala bersama guru terkait. Jika kemajuan memadai, dukungan dapat dilanjutkan dan disesuaikan; jika tidak, intensitas ditingkatkan dan rujukan dipertimbangkan.",
          "Libatkan keluarga sejak awal dengan bahasa deskriptif. Sampaikan kekuatan anak, pola yang terlihat, dukungan yang sudah dicoba, hasilnya, dan pertanyaan yang masih perlu dijawab. Percakapan yang jernih lebih membangun kerja sama daripada menyampaikan dugaan diagnosis sebagai fakta."
        ]],
        ["Skrining, Asesmen, dan Diagnosis Bukan Hal yang Sama", [
          "Skrining menjawab pertanyaan: siapa yang mungkin berisiko dan perlu diperiksa atau didukung lebih lanjut? Alat skrining cenderung singkat dan sengaja lebih peka agar anak yang berisiko tidak terlewat. Hasil positif bukan diagnosis, sedangkan hasil negatif tidak boleh menghapus kekhawatiran kuat dari fungsi sehari-hari.",
          "Asesmen pendidikan memetakan keterampilan, kesalahan, kondisi belajar, dan kebutuhan instruksional. Guru dapat melakukan asesmen formatif, analisis karya, serta pemantauan kemajuan. Diagnosis klinis atau psikologis menjawab pertanyaan yang lebih luas melalui riwayat perkembangan, data dari beberapa situasi, alat baku, pemeriksaan kondisi lain, dan pertimbangan profesional.",
          "Tidak ada satu tes tunggal untuk ADHD, disleksia, disgrafia, atau diskalkulia. Tes kecerdasan, EEG, pemindaian otak, sampel tulisan, atau daftar gejala tidak berdiri sendiri sebagai penentu. Asesmen yang bertanggung jawab menyatukan banyak sumber data dan menjelaskan batas kesimpulannya."
        ], note("Batas kewenangan", "Guru mengidentifikasi kebutuhan belajar dan memberi dukungan pendidikan. Psikolog, dokter, psikiater, terapis, atau tenaga lain bekerja sesuai kompetensi dan regulasi. Peran-peran ini saling melengkapi, bukan saling menggantikan.")],
        ["Apa yang Perlu Disingkirkan atau Dipertimbangkan", [
          "Kesulitan akademik dan perhatian dapat dipengaruhi gangguan pendengaran atau penglihatan, tidur yang buruk, kejang, efek obat, sakit kronis, kecemasan, depresi, trauma, perundungan, hambatan bahasa, absensi, perubahan keluarga, atau pengajaran yang tidak konsisten. Kondisi-kondisi ini dapat meniru, memperberat, atau hadir bersama gangguan perkembangan.",
          "Riwayat yang ditanyakan bukan untuk mencari pihak yang bersalah. Informasi kehamilan dan kelahiran, perkembangan bahasa dan motorik, kesehatan, tidur, pendidikan, intervensi, riwayat keluarga, serta perubahan perilaku membantu melihat urutan kejadian. Data dari rumah dan sekolah penting karena tuntutan serta dukungan di kedua lingkungan berbeda.",
          "Periksa pula apakah tugas dan asesmen benar-benar aksesibel. Anak yang belajar dalam bahasa kedua, tidak memahami kosakata soal, atau belum pernah memperoleh pengajaran eksplisit dapat menghasilkan performa rendah tanpa memiliki gangguan belajar spesifik."
        ]],
        ["Kapan Tidak Boleh Menunggu", [
          "Rujukan segera diperlukan bila terjadi kehilangan kemampuan yang sebelumnya sudah dikuasai, perubahan perilaku mendadak, kejang atau pingsan, sakit kepala berat berulang, gangguan penglihatan atau pendengaran yang nyata, kelemahan motorik baru, cedera kepala, efek obat yang mengkhawatirkan, atau penurunan kesadaran. Ini bukan wilayah ‘tunggu dan lihat’ di kelas.",
          "Keselamatan psikologis juga mendesak. Pernyataan ingin mati atau menyakiti diri, melukai diri, ancaman serius terhadap orang lain, kekerasan, penolakan makan yang berat, serangan panik berulang, atau penolakan sekolah yang cepat memburuk membutuhkan respons perlindungan dan bantuan profesional sesuai prosedur setempat.",
          "Deteksi dini yang aman memegang dua hal sekaligus: tidak mengabaikan tanda, tetapi juga tidak mengubah setiap perbedaan menjadi gangguan. Keputusan terbaik lahir dari data yang cukup, dukungan yang segera, dan kerendahan hati untuk bekerja lintas profesi."
        ]],
        ["Format Catatan yang Berguna", [
          "Catatan singkat dapat memuat tanggal, konteks tugas, instruksi, tingkat kesulitan, respons anak, jenis kesalahan, bantuan, durasi, hasil, dan reaksi emosi. Hindari kalimat yang menilai karakter seperti ‘seenaknya’ atau ‘tidak peduli’. Tuliskan perilaku yang dapat diamati.",
          "Data tidak perlu rumit. Grafik satu keterampilan selama enam sampai delapan titik pengukuran sering lebih berguna daripada tumpukan komentar. Simpan hanya informasi yang relevan, batasi akses, dan jangan membagikan diagnosis atau kondisi anak melalui grup yang tidak berwenang.",
          "Tujuan dokumentasi bukan membangun berkas kesalahan anak, melainkan memastikan dukungan tidak diulang dari nol setiap kali guru berganti. Catatan terbaik selalu berakhir pada keputusan: apa yang dilanjutkan, diubah, dihentikan, atau dirujuk."
        ]]
      ],
      reflection: "Jika kekhawatiran tentang seorang anak harus dirujuk besok, data apa yang sudah Anda miliki dan data apa yang masih perlu dikumpulkan agar rujukan tersebut bermakna?",
      quiz: [
        { q: "Apa arti hasil skrining positif?", o: ["Diagnosis sudah pasti", "Anak perlu pemeriksaan atau dukungan lebih lanjut", "Sekolah boleh memberi obat"], c: 1 },
        { q: "Catatan mana yang paling berguna?", o: ["Anak malas dan seenaknya", "Pada tugas dikte 20 kata, 7 bunyi akhir terlewat meski instruksi diulang", "Anak bermasalah"], c: 1 },
        { q: "Kondisi mana yang memerlukan rujukan segera?", o: ["Satu huruf terbalik", "Kehilangan mendadak kemampuan yang sebelumnya dikuasai", "Belum hafal perkalian setelah satu pelajaran"], c: 1 }
      ]
    },
    {
      title: "Disleksia: Ketika Membaca Tidak Menjadi Otomatis",
      lede: "Disleksia terutama berkaitan dengan kesulitan membaca kata secara akurat atau lancar dan sering disertai masalah ejaan. Anak melihat huruf yang sama dengan orang lain; tantangannya terletak pada proses bahasa tertulis yang belum menjadi efisien dan otomatis.",
      sections: [
        ["Apa yang Sebenarnya Sulit", [
          "Membaca kata membutuhkan hubungan cepat antara bunyi bahasa dan simbol tertulis. Anak perlu membedakan bunyi, mengingat urutannya, menghubungkannya dengan huruf, menggabungkannya menjadi kata, lalu mengenali kata itu secara otomatis. Jika proses dasar ini rapuh, sebagian besar perhatian habis untuk mengurai kata sehingga sedikit kapasitas tersisa untuk memahami isi.",
          "Disleksia tidak didefinisikan oleh huruf yang tampak bergerak, penglihatan terbalik, kebingungan kiri–kanan, atau dominasi belahan otak tertentu. Pembalikan huruf dapat menjadi salah satu kesalahan tulisan, tetapi bukan ciri yang wajib dan bukan bukti tunggal. Anak juga tidak harus memiliki IQ tinggi untuk memenuhi kebutuhan dukungan membaca.",
          "Istilah disleksia sering dipakai dalam praktik untuk profil kesulitan membaca yang bermakna. Asesmen tetap perlu menentukan komponen mana yang lemah—kesadaran fonologis, decoding, pengenalan kata, kelancaran, ejaan, bahasa, atau pemahaman—karena intervensinya mengikuti keterampilan, bukan label saja."
        ]],
        ["Tanda yang Lebih Bermakna daripada Stereotip", [
          "Tanda awal dapat berupa sulit memecah dan menggabungkan bunyi, lambat mempelajari hubungan bunyi-huruf, menebak kata dari gambar atau huruf awal, menghilangkan atau menambah bunyi, serta kesulitan membaca kata baru. Setelah dapat membaca, anak mungkin tetap lambat, tidak ekspresif, cepat lelah, atau menghindari teks panjang.",
          "Ejaan sering memperlihatkan pola: bunyi tertinggal, urutan berubah, kata yang sama ditulis berbeda dalam satu halaman, atau pola ejaan tidak bertahan meski sudah diajarkan. Namun kesalahan harus dianalisis sesuai sistem bahasa dan tulisan yang sedang dipelajari. Kesulitan pada huruf Latin tidak otomatis identik dengan kesulitan pada aksara lain, dan sebaliknya.",
          "Pada remaja, tanda dapat tersembunyi di balik kerja sangat keras, hafalan, audio, atau bantuan keluarga. Mereka mungkin membaca cukup akurat tetapi lambat, sulit mencatat sambil menyimak, kesulitan mengeja, dan membutuhkan waktu berlebih untuk ujian atau bacaan akademik."
        ]],
        ["Pemahaman Bisa Kuat, tetapi Tetap Terdampak", [
          "Anak dapat memahami cerita yang dibacakan jauh lebih baik daripada teks yang dibaca sendiri. Perbedaan ini menunjukkan bahwa pengetahuan dan penalarannya lebih kuat daripada akses membaca. Memberikan audio atau membacakan soal memungkinkan anak belajar isi sambil keterampilan membaca tetap dilatih secara terpisah.",
          "Pemahaman bacaan bukan satu kemampuan tunggal. Anak dapat gagal memahami karena kata-kata tidak berhasil diurai, karena kosakatanya terbatas, karena struktur kalimat kompleks, karena perhatian berpindah, atau karena ia belum memiliki strategi memahami teks. Membaca lebih keras tidak selalu menyelesaikan penyebab yang berbeda-beda itu.",
          "Karena tugas di hampir semua mata pelajaran bergantung pada teks, kesulitan membaca mudah tampak sebagai masalah pengetahuan umum. Guru perlu membedakan apa yang sedang dinilai: penguasaan isi pelajaran atau kemampuan membaca. Jika tujuannya menilai konsep sains, dukungan akses membaca tidak otomatis mengubah standar konsep."
        ]],
        ["Dukungan yang Mengubah Arah", [
          "Intervensi membaca yang kuat bersifat eksplisit, sistematis, berurutan, kumulatif, dan responsif terhadap kesalahan. Anak tidak diminta menebak kata dari gambar atau konteks ketika tujuan pelajaran adalah decoding. Ia diajari komponen bahasa tertulis secara langsung, berlatih dengan contoh yang terpilih, menerima umpan balik cepat, dan meninjau kembali keterampilan lama.",
          "Akomodasi dapat mencakup waktu tambahan, teks digital yang dapat dibacakan, soal yang dibacakan jika decoding bukan sasaran, materi lebih awal, pengurangan salin, serta cara lain menunjukkan pengetahuan. Intervensi dan akomodasi bukan pilihan salah satu: intervensi membangun keterampilan, sementara akomodasi menjaga akses terhadap kurikulum hari ini.",
          "Disleksia sering bertahan sebagai profil perkembangan, tetapi hasil belajar dapat berubah besar. Dengan pengajaran tepat, latihan terarah, teknologi bantu, dan perlindungan harga diri, anak dapat menjadi pembaca yang jauh lebih terampil. Tujuannya bukan menjanjikan ‘sembuh’ dalam tanggal tertentu, melainkan membangun kemampuan dan kemandirian yang terus berkembang."
        ], `<table><thead><tr><th>Mitos</th><th>Penjelasan yang lebih tepat</th></tr></thead><tbody><tr><td>Disleksia berarti melihat huruf terbalik</td><td>Masalah utamanya berada pada proses bahasa tertulis; pembalikan bukan penentu tunggal.</td></tr><tr><td>Anak cukup membaca lebih sering</td><td>Latihan perlu mengikuti pengajaran eksplisit pada keterampilan yang lemah.</td></tr><tr><td>Audio membuat anak malas membaca</td><td>Audio dapat menjaga akses isi sambil decoding dilatih secara terpisah.</td></tr></tbody></table>`]
      ],
      reflection: "Pada anak yang Anda dampingi, apakah hambatan terbesar berada pada akurasi, kelancaran, ejaan, bahasa, atau pemahaman? Bukti tugas apa yang mendukung jawaban Anda?",
      quiz: [
        { q: "Apa yang paling tepat menggambarkan disleksia?", o: ["Gangguan penglihatan yang membuat semua huruf terbalik", "Kesulitan bermakna pada membaca kata secara akurat atau lancar, sering bersama masalah ejaan", "Kurangnya minat pada semua buku"], c: 1 },
        { q: "Mengapa soal dapat dibacakan pada pelajaran sains?", o: ["Agar standar konsep diturunkan", "Agar akses membaca tidak menutupi pengetahuan sains ketika decoding bukan sasaran", "Agar anak tidak perlu belajar membaca lagi"], c: 1 },
        { q: "Apa hubungan intervensi dan akomodasi?", o: ["Intervensi membangun keterampilan; akomodasi menjaga akses", "Keduanya sama persis", "Akomodasi hanya boleh setelah anak lulus"], c: 0 }
      ]
    },
    {
      title: "Disgrafia: Ketika Pikiran Tersendat di Ujung Pena",
      lede: "Kesulitan menulis tidak selalu berarti anak kekurangan ide. Pada sebagian anak, proses membentuk huruf, mengingat ejaan, menyusun kalimat, dan mempertahankan gagasan dalam ingatan kerja begitu berat sehingga hasil di kertas jauh lebih miskin daripada pengetahuan yang sebenarnya dimiliki.",
      sections: [
        ["Menulis Adalah Rangkaian Banyak Keterampilan", [
          "Tulisan tangan membutuhkan postur, kestabilan bahu dan pergelangan, pegangan alat tulis, kontrol gerak halus, arah pembentukan huruf, ukuran, jarak, penempatan pada garis, serta kecepatan. Transkripsi menambahkan kemampuan mengingat bentuk huruf dan ejaan sambil mempertahankan kata yang hendak ditulis.",
          "Ekspresi tertulis bergerak lebih jauh: menghasilkan ide, memilih kata, menyusun kalimat, mengurutkan informasi, membangun paragraf, memperhatikan pembaca, lalu merevisi. Anak dapat mengalami hambatan pada satu atau beberapa lapisan. Karena itu, kata disgrafia sebaiknya tidak dipakai sebagai keranjang untuk semua tulisan yang kurang rapi.",
          "Pertanyaan yang lebih berguna adalah: apakah masalah terutama pada keterbacaan dan kecepatan, ejaan, tata bahasa, organisasi gagasan, atau kombinasi? Jawaban ini menentukan apakah anak memerlukan latihan motorik dan tulisan tangan, pengajaran ejaan, strategi menulis, teknologi bantu, asesmen bahasa, atau rujukan lain."
        ]],
        ["Membaca Sampel Tulisan dengan Lebih Cermat", [
          "Bandingkan beberapa jenis tugas: menyalin, dikte, menulis spontan, menjawab pertanyaan, dan mengetik. Anak yang rapi saat menyalin tetapi kehilangan banyak bunyi saat dikte mungkin memiliki masalah ejaan atau transkripsi. Anak yang dapat mendiktekan cerita terstruktur tetapi hanya menulis beberapa kata mungkin kehabisan kapasitas pada produksi tulisan.",
          "Perhatikan waktu mulai, kecepatan, kelelahan, rasa sakit, tekanan pensil, frekuensi menghapus, keterbacaan, konsistensi ukuran dan jarak, kelengkapan kata, kualitas kalimat, dan kemampuan merevisi. Satu tulisan terbaik atau terburuk tidak mewakili keseluruhan profil.",
          "Campuran huruf besar-kecil, spasi tidak konsisten, arah huruf terbalik, atau garis yang tidak stabil dapat menjadi data, tetapi harus dibaca sesuai usia, pengalaman belajar, dan dampaknya. Diagnosis tidak dibuat dari penampilan tulisan saja."
        ], `<table><thead><tr><th>Tugas pembanding</th><th>Informasi yang mungkin terlihat</th></tr></thead><tbody><tr><td>Menyalin</td><td>Kontrol bentuk, kecepatan, dan perhatian visual</td></tr><tr><td>Dikte</td><td>Hubungan bunyi-huruf, ejaan, dan ingatan kerja</td></tr><tr><td>Menulis spontan</td><td>Ide, bahasa, organisasi, serta transkripsi sekaligus</td></tr><tr><td>Mengetik</td><td>Apakah hambatan motorik tulisan tangan menutupi ekspresi</td></tr></tbody></table>`],
        ["Latihan Tulisan Tangan yang Bermakna", [
          "Latihan efektif berfokus pada sasaran kecil: arah satu kelompok huruf, ukuran, jarak antarkata, atau kelancaran pola gerak. Guru memberi contoh yang jelas, petunjuk singkat, kesempatan meniru, praktik dari ingatan, dan umpan balik langsung. Menyalin satu halaman penuh dengan bentuk yang salah hanya memperkuat pola yang salah dan menambah lelah.",
          "Postur, posisi kertas, jenis pensil, dan tinggi meja dapat diuji untuk meningkatkan kenyamanan. Bila ada nyeri, kelemahan, koordinasi yang sangat sulit, atau masalah aktivitas sehari-hari lain, konsultasi dengan tenaga yang kompeten dapat membantu menilai kebutuhan motorik dan okupasional.",
          "Tulisan tangan tetap penting untuk berbagai kegiatan sekolah dan kehidupan, tetapi dosis latihan harus masuk akal. Targetnya adalah tulisan yang cukup terbaca, efisien, dan dapat digunakan—bukan menjadikan bentuk tulisan setiap anak seragam."
        ]],
        ["Mengetik Bukan Jalan Pintas yang Curang", [
          "Teknologi bantu mengurangi beban transkripsi agar anak dapat menunjukkan pengetahuan dan mengembangkan tulisan lebih panjang. Mengetik, prediksi kata, pemeriksa ejaan, dikte suara, template perencanaan, dan audio dapat digunakan sesuai tujuan tugas. Jika tujuan pelajaran adalah menyusun argumen, cara memasukkan teks tidak harus menjadi hambatan utama.",
          "Pilihan terbaik sering berupa dua jalur. Jalur pertama melatih keterampilan tulisan tangan dan ejaan secara eksplisit dalam sesi terarah. Jalur kedua memberi akses mengetik atau teknologi bantu pada tugas yang panjang dan berorientasi isi. Memaksa semua tugas dengan tangan dapat menurunkan volume belajar; menghapus semua latihan tangan juga dapat menghilangkan kesempatan membangun keterampilan fungsional.",
          "Ajarkan teknologi, jangan hanya menyerahkan perangkat. Anak perlu belajar posisi jari, penyimpanan berkas, revisi, penggunaan fitur secara etis, dan kapan alat tertentu tepat. Kemajuan diukur dari keterbacaan, kelancaran, kualitas isi, kemandirian, dan berkurangnya kelelahan."
        ]],
        ["Dari Gagasan Menuju Teks", [
          "Anak yang kesulitan ekspresi tertulis membutuhkan model proses: memahami tujuan, mengumpulkan ide, mengelompokkan, menyusun kerangka, membuat draf, membaca ulang, merevisi isi, lalu menyunting ejaan dan tanda baca. Menuntut hasil akhir sekaligus membuat semua beban muncul pada saat yang sama.",
          "Pisahkan umpan balik. Pada draf pertama, fokuskan pada ide dan struktur; pada putaran berikutnya, pilih satu atau dua sasaran bahasa dan ejaan. Kode warna, peta gagasan, kalimat awal, bank kata, dan contoh teks dapat menjadi perancah yang dikurangi ketika anak semakin mandiri.",
          "Menulis berkembang melalui waktu yang cukup, tujuan yang nyata, serta komunitas yang aman untuk membuat kesalahan. Anak perlu mengalami bahwa tulisannya membawa pesan, bukan hanya menjadi tempat guru mencari kekurangan."
        ]]
      ],
      reflection: "Bandingkan kemampuan seorang anak saat bercerita, menyalin, menulis dari dikte, menulis spontan, dan mengetik. Di tahap mana gagasannya paling banyak hilang?",
      quiz: [
        { q: "Mengapa tulisan yang buruk tidak langsung berarti disgrafia?", o: ["Karena tulisan tidak pernah penting", "Karena menulis terdiri dari banyak komponen yang perlu dipetakan dan dibandingkan", "Karena hanya dokter boleh melihat tulisan"], c: 1 },
        { q: "Kapan mengetik paling tepat dipakai sebagai akomodasi?", o: ["Saat tujuan tugas adalah menunjukkan isi dan tulisan tangan menjadi hambatan besar", "Untuk menghapus semua latihan menulis", "Hanya setelah kuliah"], c: 0 },
        { q: "Umpan balik draf pertama sebaiknya terutama berfokus pada…", o: ["Semua kesalahan sekaligus", "Ide dan struktur sesuai tujuan tulisan", "Keindahan bentuk huruf saja"], c: 1 }
      ]
    },
    {
      title: "Diskalkulia: Ketika Bilangan Kehilangan Makna",
      lede: "Matematika bukan sekadar menghafal hasil hitung. Anak perlu memahami bahwa simbol mewakili jumlah, hubungan, posisi, perubahan, dan pola. Ketika fondasi makna bilangan rapuh, prosedur yang dihafal mudah runtuh begitu bentuk soal berubah.",
      sections: [
        ["Lebih Dalam daripada Nilai Matematika Rendah", [
          "Kesulitan matematika dapat muncul pada kepekaan bilangan, perbandingan besaran, hubungan bagian-keseluruhan, nilai tempat, urutan, fakta aritmetika, prosedur, pengukuran, waktu, uang, ruang, atau pemecahan masalah. Dua anak dengan nilai sama dapat membutuhkan dukungan yang sangat berbeda.",
          "Diskalkulia digunakan untuk menggambarkan kesulitan belajar matematika yang bermakna dan menetap. Diagnosis tidak diberikan hanya karena anak belum hafal perkalian atau mendapat nilai buruk pada satu semester. Pengajaran, kesempatan latihan, bahasa, kecemasan, perhatian, memori, dan keterampilan membaca harus ikut dipertimbangkan.",
          "Sebagian anak memahami konsep tetapi lambat mengambil fakta dari ingatan. Sebagian menghafal prosedur tanpa mengetahui mengapa. Sebagian lagi kehilangan urutan langkah atau salah membaca simbol. Pemetaan komponen lebih penting daripada menyebut anak ‘tidak berbakat matematika’."
        ]],
        ["Tanda yang Berubah Sesuai Usia", [
          "Pada usia dini, kekhawatiran dapat tampak pada sulit mencocokkan satu benda dengan satu hitungan, membandingkan mana lebih banyak, mengenali pola kecil tanpa menghitung satu per satu, atau memahami urutan. Pada kelas awal, anak mungkin terus mengandalkan jari tanpa perkembangan strategi, keliru pada nilai tempat, atau tidak melihat hubungan antara penjumlahan dan pengurangan.",
          "Di kelas tinggi, kesulitan muncul pada pecahan, desimal, rasio, operasi bertingkat, garis bilangan, estimasi, fakta dasar, dan soal cerita. Remaja dapat bermasalah mengelola waktu, uang, jarak, jadwal, atau membaca data, walaupun beberapa aspek matematika lain dikuasai.",
          "Kecepatan sendiri bukan diagnosis. Ada anak yang akurat tetapi lambat, ada yang cepat tetapi hanya menebak, dan ada yang memahami ketika memakai benda konkret namun tersesat pada simbol. Data perlu memisahkan akurasi, strategi, kelancaran, dan pemahaman."
        ]],
        ["Membedakan Kesulitan Matematika dari Hambatan Lain", [
          "Soal cerita dapat gagal karena membaca, kosakata, atau bahasa—bukan konsep matematika. Kesalahan panjang dapat berasal dari perhatian dan ingatan kerja. Kecemasan matematika membuat pikiran dipenuhi ancaman sehingga kapasitas untuk menyelesaikan soal berkurang. Absensi atau perpindahan kurikulum dapat meninggalkan fondasi yang belum diajarkan.",
          "Uji konsep dalam beberapa bentuk. Minta anak menunjukkan dengan benda, menggambar, menjelaskan secara lisan, menunjuk pada garis bilangan, lalu menulis simbol. Jika pemahaman muncul pada satu representasi tetapi tidak pada yang lain, jembatan antarrepresentasi perlu diajarkan.",
          "Bandingkan kesalahan pada soal yang sudah dikenal dan soal baru. Tanyakan strategi yang dipakai, bukan hanya jawaban. Penjelasan anak sering memperlihatkan miskonsepsi yang tidak terlihat dari tanda silang di lembar kerja."
        ]],
        ["Pengajaran dari Makna ke Simbol", [
          "Mulailah dari ide matematika dan gunakan representasi konkret atau semi-konkret yang dipilih dengan sengaja. Balok nilai tempat, kelompok benda, diagram, garis bilangan, atau area pecahan bukan sekadar permainan; guru harus menghubungkan setiap tindakan dan gambar dengan bahasa serta simbol matematika.",
          "Instruksi yang efektif bersifat sistematis: guru memodelkan, berpikir keras, menunjukkan contoh dan bukan contoh, membimbing latihan, memberi umpan balik, lalu mengurangi bantuan. Bahasa matematika diajarkan secara eksplisit agar kata seperti selisih, lebih dari, faktor, atau seperempat tidak menjadi teka-teki tambahan.",
          "Soal cerita sebaiknya dikelompokkan berdasarkan struktur hubungan—misalnya perubahan, perbandingan, gabungan, atau bagian-keseluruhan—bukan hanya kata kunci. Kata ‘lebih’ tidak selalu berarti menjumlah; memahami situasi lebih kuat daripada berburu kata tertentu."
        ]],
        ["Kelancaran tanpa Mempermalukan", [
          "Fakta dasar perlu menjadi lebih mudah diambil agar kapasitas pikiran tersedia untuk soal kompleks. Namun kelancaran dibangun melalui strategi, hubungan angka, latihan singkat, pengulangan terjadwal, dan pemantauan—bukan tes cepat yang berulang tanpa pengajaran.",
          "Aktivitas berwaktu dapat dipakai secara hati-hati untuk mengukur pertumbuhan diri setelah anak memahami strategi, bukan sebagai perlombaan publik. Jika waktu memperburuk kecemasan dan menghapus akurasi, guru perlu menyesuaikan cara latihan. Kecepatan adalah salah satu dimensi, bukan tujuan tunggal matematika.",
          "Kemajuan dipantau pada keterampilan kecil: membandingkan bilangan, menemukan angka pada garis bilangan, menjelaskan strategi, menggunakan nilai tempat, atau menyelesaikan satu struktur soal cerita. Grafik pertumbuhan yang spesifik memberi arah lebih jelas daripada satu nilai ujian."
        ]]
      ],
      reflection: "Pilih satu kesalahan matematika yang sering berulang. Apakah sumbernya lebih mungkin pada makna bilangan, simbol, bahasa, langkah, ingatan fakta, perhatian, atau kecemasan? Bagaimana Anda akan mengujinya?",
      quiz: [
        { q: "Apa yang membedakan diskalkulia dari sekadar belum hafal perkalian?", o: ["Diskalkulia adalah pola kesulitan matematika yang bermakna dan menetap setelah kesempatan belajar", "Diskalkulia berarti tidak menyukai angka", "Tidak ada perbedaan"], c: 0 },
        { q: "Mengapa konsep perlu diuji dengan benda, gambar, lisan, dan simbol?", o: ["Agar tugas lebih panjang", "Untuk melihat di mana hubungan antarrepresentasi terputus", "Karena simbol tidak perlu dipelajari"], c: 1 },
        { q: "Apa penggunaan aktivitas berwaktu yang lebih sehat?", o: ["Mempermalukan anak yang lambat", "Mengukur pertumbuhan diri setelah strategi dipahami", "Menggantikan pengajaran konsep"], c: 1 }
      ]
    },
    {
      title: "ADHD: Perhatian, Impuls, dan Kendali Diri",
      lede: "ADHD adalah gangguan perkembangan yang ditandai pola kurang perhatian dan/atau hiperaktivitas-impulsivitas yang menetap serta mengganggu fungsi. Tidak semua anak dengan ADHD tampak berlari-lari, dan tidak setiap anak aktif, bosan, atau sulit fokus berarti memiliki ADHD.",
      sections: [
        ["Tiga Presentasi, Banyak Wajah", [
          "Pada presentasi dominan kurang perhatian, anak dapat tampak melamun, kehilangan alur, lupa tugas, tidak teliti, lambat memulai, kesulitan mengatur bahan, atau tidak menyelesaikan pekerjaan. Karena tidak mengganggu kelas, profil ini sering terlambat dikenali, terutama pada anak yang patuh dan memiliki kemampuan kompensasi.",
          "Pada presentasi dominan hiperaktif-impulsif, tantangan lebih tampak: bergerak saat tidak sesuai, sulit menunggu, berbicara atau menjawab sebelum waktunya, menyela, dan bertindak tanpa cukup mempertimbangkan akibat. Presentasi kombinasi memuat pola berarti dari kedua kelompok.",
          "Presentasi dapat berubah seiring perkembangan dan tuntutan. Hiperaktivitas fisik pada anak kecil dapat menjadi kegelisahan batin pada remaja. Diagnosis memerlukan gejala yang menetap setidaknya enam bulan, muncul sejak masa kanak-kanak, hadir di dua atau lebih situasi, tidak sesuai tahap perkembangan, serta nyata mengganggu fungsi."
        ]],
        ["Perhatian Bukan Tombol Hidup–Mati", [
          "Anak dengan ADHD tidak selalu kekurangan perhatian; ia kesulitan mengatur ke mana perhatian diarahkan, kapan dipertahankan, dan bagaimana berpindah sesuai tujuan. Tugas baru, menarik, mendesak, atau memberi umpan balik cepat dapat menahan perhatian jauh lebih lama daripada tugas rutin yang hasilnya tertunda.",
          "Karena itu, kemampuan bermain gim, menggambar, atau merakit berjam-jam tidak otomatis meniadakan ADHD. Sebaliknya, kebosanan pada satu pelajaran juga tidak membuktikannya. Pola harus terlihat pada tugas dan situasi yang relevan, dibandingkan dengan tuntutan usia, serta dikonfirmasi dari lebih dari satu pengamat.",
          "Perhatian juga dipengaruhi tidur, kecemasan, depresi, trauma, rasa sakit, gangguan bahasa, kesulitan membaca, obat, lingkungan bising, konflik, dan desain tugas. Evaluasi yang baik mencari penjelasan alternatif serta kondisi yang hadir bersama."
        ]],
        ["Fungsi Eksekutif dalam Kehidupan Sekolah", [
          "Fungsi eksekutif membantu memulai tugas, menahan dorongan, menyimpan langkah dalam ingatan kerja, memperkirakan waktu, mengatur bahan, memantau kesalahan, mengubah strategi, dan bertahan sampai selesai. Kesulitan pada fungsi ini membuat anak tahu apa yang harus dilakukan tetapi gagal melakukannya secara konsisten.",
          "Nasihat ‘lebih fokus’ tidak menyediakan mekanisme. Anak memerlukan tujuan yang terlihat, langkah yang pendek, batas waktu yang konkret, sinyal mulai, umpan balik dekat, serta bantuan mengembalikan perhatian tanpa mempermalukan. Penyangga eksternal bukan memanjakan; ia menggantikan fungsi yang belum stabil sambil melatih kemandirian.",
          "Perilaku juga perlu dibaca dalam urutan sebelum–perilaku–sesudah. Tugas yang terlalu panjang, transisi mendadak, instruksi abstrak, atau kegagalan berulang dapat memicu penghindaran. Respons orang dewasa yang hanya datang setelah perilaku besar tanpa sengaja dapat memperkuat pola tersebut."
        ]],
        ["Anak Aktif atau ADHD?", [
          "Anak aktif biasanya dapat mengatur perilakunya ketika situasi sangat memerlukan, menunjukkan pola yang relatif sesuai usia, dan tidak mengalami gangguan fungsi luas. Anak dengan ADHD menunjukkan frekuensi, intensitas, persistensi, serta dampak yang lebih besar daripada anak sebaya dalam konteks yang sebanding.",
          "Tidak ada batas ‘mampu duduk sepuluh menit’ yang berlaku untuk semua usia dan situasi. Lama perhatian berubah menurut usia, jenis tugas, dukungan, tidur, minat, ukuran kelompok, dan lingkungan. Pengamatan perlu menggunakan tugas nyata serta perbandingan yang adil.",
          "Daftar gejala dari internet tidak menggantikan evaluasi. Laporan orang tua dan sekolah, riwayat perkembangan, skala baku, wawancara, pemeriksaan kesehatan, dan penilaian kondisi lain digunakan bersama. EEG atau pemindaian otak bukan tes rutin tunggal untuk menegakkan ADHD."
        ]],
        ["Penanganan yang Menyeluruh", [
          "Dukungan ADHD dapat mencakup pelatihan orang tua dalam pengelolaan perilaku, strategi kelas, rutinitas, penguatan positif, pengembangan organisasi, penyesuaian lingkungan, terapi psikologis untuk kebutuhan tertentu, dan pengobatan yang diresepkan serta dipantau tenaga kesehatan. Pilihan dipertimbangkan menurut usia, tingkat gangguan, kondisi penyerta, respons, serta preferensi keluarga.",
          "Obat bukan hukuman dan bukan keputusan sekolah. Ia juga bukan satu-satunya intervensi. Manfaat dan efek samping dipantau oleh klinisi bersama keluarga, sementara sekolah memberi data fungsi sehari-hari. Pola makan seimbang, tidur cukup, gerak, dan kesehatan umum penting, tetapi menghilangkan MSG atau satu bahan makanan bukan terapi universal yang terbukti untuk semua anak dengan ADHD.",
          "Tujuan penanganan bukan membuat anak diam demi kenyamanan orang dewasa. Sasaran yang bermakna adalah belajar, relasi, keselamatan, kendali diri, penyelesaian tugas, kepercayaan diri, serta kemampuan mengatur kehidupan sesuai tahap perkembangannya."
        ]]
      ],
      reflection: "Pada perilaku yang Anda khawatirkan, apakah pola muncul di lebih dari satu situasi dan benar-benar mengganggu fungsi? Faktor tidur, tugas, bahasa, emosi, atau kesulitan akademik apa yang juga perlu diperiksa?",
      quiz: [
        { q: "Apakah anak yang dapat fokus lama pada gim otomatis tidak mungkin ADHD?", o: ["Ya", "Tidak; pengaturan perhatian dapat berbeda menurut minat, kebaruan, dan umpan balik", "Hanya jika gim pendidikan"], c: 1 },
        { q: "Syarat penting pola ADHD adalah…", o: ["Muncul hanya pada satu pelajaran", "Menetap, hadir di lebih dari satu situasi, dan mengganggu fungsi", "Selalu disertai berlari-lari"], c: 1 },
        { q: "Siapa yang memutuskan dan memantau pengobatan ADHD?", o: ["Wali kelas", "Tenaga kesehatan yang berwenang bersama keluarga", "Teman sebaya"], c: 1 }
      ]
    },
    {
      title: "Ketika Profil Tumpang Tindih",
      lede: "Anak tidak datang dalam kotak diagnosis yang rapi. Kesulitan membaca dapat hadir bersama ADHD; hambatan menulis dapat dipengaruhi bahasa dan motorik; kecemasan dapat memperburuk matematika. Tugas kita bukan menentukan label yang paling dominan, melainkan memahami bagaimana setiap hambatan bekerja dalam kehidupan nyata.",
      sections: [
        ["Koeksistensi Bukan Hubungan Sebab–Akibat Sederhana", [
          "Gangguan belajar spesifik dan ADHD dapat hadir bersamaan. Ini tidak otomatis berarti yang satu menyebabkan yang lain. Anak dengan ADHD dapat tertinggal membaca karena perhatian pada pengajaran tidak stabil; anak yang juga memiliki disleksia tetap menunjukkan kelemahan khusus pada proses membaca meskipun perhatian ditopang.",
          "Pertanyaan praktisnya adalah apa yang terjadi ketika satu hambatan dibantu. Jika tugas dipecah dan gangguan lingkungan dikurangi, apakah decoding tetap sangat lemah? Jika teks dibacakan, apakah anak tetap kehilangan langkah karena ingatan kerja? Respons terhadap dukungan membantu memisahkan kontribusi setiap komponen.",
          "Penanganan tidak perlu menunggu perdebatan tentang kondisi mana yang ‘utama’. Kebutuhan membaca, menulis, matematika, perhatian, emosi, dan akses dapat ditangani paralel dengan sasaran serta pemantauan yang jelas."
        ]],
        ["Kondisi yang Dapat Menyerupai atau Menyertai", [
          "Gangguan bahasa dapat tampak sebagai pemahaman instruksi yang lemah, jawaban tidak terorganisasi, atau kesulitan belajar membaca. Gangguan penglihatan dan pendengaran menghambat akses. Gangguan tidur, kecemasan, depresi, trauma, efek obat, kejang, serta sakit kronis dapat mengubah perhatian dan prestasi.",
          "Autisme, gangguan koordinasi perkembangan, hambatan intelektual, dan kondisi perkembangan lain juga dapat hadir bersama atau memiliki gejala yang beririsan. Kemampuan membaca lancar tidak meniadakan autisme; tidak semua kesulitan kontak mata atau interaksi berasal dari disleksia. Setiap kondisi dinilai berdasarkan kriterianya sendiri.",
          "Karena itu, kesimpulan seperti ‘bukan autisme karena sudah bisa membaca’ atau ‘ADHD pasti hilang jika kemampuan membaca membaik’ tidak aman. Asesmen lintas disiplin diperlukan ketika pola kompleks, dampak luas, atau intervensi tidak menghasilkan perubahan yang diharapkan."
        ]],
        ["Potensi Tinggi Dapat Menutupi Kesulitan", [
          "Anak dengan penalaran atau kemampuan tertentu yang sangat tinggi dapat mengompensasi kesulitan melalui hafalan, tebakan berbasis konteks, bahasa lisan, atau kerja ekstra. Prestasinya mungkin berada pada rata-rata sehingga kebutuhan tidak terlihat, padahal ada jarak besar antara potensi dan efisiensi belajar.",
          "Sebaliknya, kesulitan belajar dapat menutupi potensi karena hampir semua tugas menuntut membaca, menulis, organisasi, dan kecepatan. Penilaian perlu memberi beberapa cara bagi anak untuk menunjukkan pengetahuan. Profil yang kadang disebut dua kali istimewa menuntut dua komitmen sekaligus: mengembangkan kekuatan dan memberi dukungan pada hambatan.",
          "Skor kecerdasan tidak boleh dipakai sendirian untuk menerima atau menolak diagnosis. Kondisi perhatian, bahasa, kecepatan pemrosesan, kecemasan, dan akses tes dapat memengaruhi hasil. Interpretasi lebih penting daripada angka tunggal."
        ]],
        ["Membangun Profil Fungsional", [
          "Tuliskan kekuatan, aktivitas yang memunculkan keberhasilan, hambatan pada tugas nyata, pemicu, dukungan yang efektif, dan dampak pada fungsi. Bedakan apa yang anak tidak tahu, belum otomatis, tidak dapat mengakses, sulit memulai, atau tidak mampu mempertahankan. Perbedaan ini mengubah pilihan intervensi.",
          "Gunakan hipotesis kerja yang dapat diuji: ‘Jika instruksi dipotong menjadi satu langkah dan ditampilkan visual, kemandirian akan meningkat.’ Lakukan, ukur, lalu perbarui pemahaman. Profil hidup berkembang mengikuti data; ia tidak membekukan anak pada kesan pertama.",
          "Dalam rapat, hindari lomba label. Mulailah dari tujuan anak dan keluarga, lalu pilih sedikit sasaran yang paling mengubah fungsi. Terlalu banyak program sekaligus membuat tim tidak tahu dukungan mana yang sebenarnya bekerja."
        ], `<table><thead><tr><th>Pola terlihat</th><th>Pertanyaan pembeda</th></tr></thead><tbody><tr><td>Tidak menyelesaikan bacaan</td><td>Apakah tersendat pada kata, kehilangan perhatian, atau tidak memahami bahasa?</td></tr><tr><td>Tulisan sangat pendek</td><td>Apakah ide kurang, transkripsi lambat, ejaan berat, atau organisasi belum terbentuk?</td></tr><tr><td>Gagal soal cerita</td><td>Apakah konsep matematika, membaca, kosakata, atau ingatan langkah yang menghambat?</td></tr><tr><td>Diam saat ditanya</td><td>Apakah tidak paham, membutuhkan waktu proses, cemas, atau sulit mengekspresikan bahasa?</td></tr></tbody></table>`],
        ["Jangan Menunggu Profil Menjadi Sempurna", [
          "Asesmen yang lengkap penting, tetapi anak tetap belajar setiap hari. Sekolah dapat mulai dengan dukungan berisiko rendah: instruksi jelas, contoh, pengurangan salin, waktu pemrosesan, materi aksesibel, pilihan respons, dan umpan balik. Data dari dukungan ini memperkaya asesmen.",
          "Bila beberapa profesi terlibat, keluarga tidak seharusnya menjadi kurir yang menyatukan semua informasi sendirian. Dengan persetujuan, tim menyepakati sasaran, bahasa yang sama, peran, indikator, dan tanggal tinjau. Informasi sensitif dibagikan hanya sesuai kebutuhan.",
          "Profil yang baik menghasilkan tindakan yang koheren. Jika laporan berisi banyak istilah tetapi guru tidak tahu apa yang harus dilakukan pada pelajaran berikutnya, jembatan dari asesmen ke pembelajaran belum selesai."
        ]]
      ],
      reflection: "Untuk satu anak dengan profil kompleks, tuliskan dua hipotesis berbeda yang dapat menjelaskan perilaku yang sama. Dukungan apa yang dapat membantu menguji keduanya secara aman?",
      quiz: [
        { q: "Apa arti ADHD dan disleksia hadir bersamaan?", o: ["Pasti salah satu menyebabkan yang lain", "Keduanya dapat berkontribusi berbeda dan perlu dipetakan", "Tidak mungkin terjadi"], c: 1 },
        { q: "Apakah kemampuan membaca lancar otomatis meniadakan autisme?", o: ["Ya", "Tidak; setiap kondisi dinilai dengan kriterianya sendiri", "Hanya pada kelas satu"], c: 1 },
        { q: "Apa ciri profil fungsional yang berguna?", o: ["Berisi label sebanyak mungkin", "Menghubungkan kekuatan, hambatan, dukungan, dan dampak pada tugas nyata", "Tidak boleh berubah"], c: 1 }
      ]
    },
    {
      title: "Respons Pertama yang Mengurangi Hambatan",
      lede: "Dukungan tidak harus menunggu diagnosis. Ketika pola kesulitan sudah terlihat, sekolah dapat memperbaiki akses, memperjelas instruksi, dan mengurangi beban yang tidak relevan—sambil tetap mengajarkan keterampilan inti dan memantau kemajuan.",
      sections: [
        ["Mulai dari Hambatan, Bukan dari Label", [
          "Tanyakan tiga hal: apa tujuan belajar, hambatan apa yang mencegah anak mencapai tujuan, dan penyesuaian apa yang memberi akses tanpa menghapus tujuan? Jika tujuan pelajaran adalah memahami siklus air, kemampuan menyalin satu halaman bukan sasaran utama. Ringkasan tercetak atau foto papan tulis dapat menghemat tenaga untuk belajar konsep.",
          "Jika tujuan pelajaran memang membaca kata, teks tidak selalu dibacakan karena decoding sedang dilatih. Namun isi lain dapat tetap diakses melalui audio agar keterlambatan membaca tidak menghentikan belajar sains, agama, atau pengetahuan sosial. Kejelasan tujuan mencegah bantuan menjadi terlalu sedikit atau justru menghilangkan kesempatan berlatih.",
          "Dukungan awal berisiko rendah mencakup instruksi singkat, contoh jadi, pemeriksaan pemahaman, waktu proses, tugas yang dipecah, materi yang tidak terlalu padat, pengurangan salin, serta kesempatan menunjukkan jawaban secara lisan atau digital. Semua dapat dimulai berdasarkan kebutuhan yang terlihat."
        ]],
        ["Akomodasi Bukan Penurunan Harapan", [
          "Akomodasi mengubah cara anak mengakses materi, terlibat dalam proses, mengatur waktu, atau menunjukkan pengetahuan. Modifikasi mengubah apa yang diharapkan untuk dikuasai. Keduanya dapat diperlukan, tetapi keputusan harus sadar dan terdokumentasi agar sekolah tidak tanpa sengaja menurunkan kurikulum hanya karena cara respons anak berbeda.",
          "Contoh akomodasi adalah waktu tambahan, ruang lebih tenang, teks-ke-suara, jumlah soal representatif, jeda, petunjuk langkah, mengetik, atau jawaban lisan. Contoh modifikasi adalah mengubah tingkat kompleksitas konsep atau capaian. Akomodasi tidak menjamin nilai; ia membuat penilaian lebih dekat pada kemampuan yang memang hendak diukur.",
          "Keadilan bukan memberi hal yang sama kepada semua anak, melainkan menyediakan kondisi yang memungkinkan setiap anak mengakses tujuan secara layak. Penyesuaian tetap dievaluasi: apakah membantu, menimbulkan ketergantungan, atau perlu dikurangi seiring kemandirian tumbuh."
        ]],
        ["Lima Pintu Penyesuaian Kelas", [
          "Pada input, sederhanakan tampilan, ajarkan kosakata, gunakan contoh dan representasi, sediakan audio, serta beri materi lebih awal. Pada proses, pecah langkah, modelkan strategi, berikan latihan terpandu, izinkan jeda gerak, dan kurangi distraksi yang dapat dikendalikan.",
          "Pada output, izinkan kombinasi tulisan, ketikan, lisan, gambar, manipulatif, atau demonstrasi sesuai tujuan. Pada waktu, tambahkan durasi, beri jeda, atau bagi ujian menjadi beberapa bagian. Pada lingkungan, atur posisi duduk, akses guru, pencahayaan, kebisingan, serta lokasi penyimpanan bahan.",
          "Pilihan bukan berarti tanpa batas. Guru dapat menawarkan dua cara yang sama-sama mencapai tujuan. Struktur yang jelas justru membantu anak dengan fungsi eksekutif lemah karena ia tidak perlu memilih dari terlalu banyak kemungkinan."
        ], `<table><thead><tr><th>Pintu</th><th>Contoh penyesuaian</th></tr></thead><tbody><tr><td>Input</td><td>Audio, contoh, kosakata, tampilan bersih</td></tr><tr><td>Proses</td><td>Langkah pendek, latihan terpandu, jeda</td></tr><tr><td>Output</td><td>Mengetik, lisan, manipulatif, tulisan</td></tr><tr><td>Waktu</td><td>Tambahan waktu, tugas dibagi, jeda</td></tr><tr><td>Lingkungan</td><td>Tempat tenang, akses guru, bahan teratur</td></tr></tbody></table>`],
        ["Rencana Tujuh Hari", [
          "Hari pertama, pilih satu tugas yang paling sering gagal dan tetapkan perilaku atau keterampilan sasaran. Hari kedua, ukur kondisi awal sederhana. Hari ketiga sampai keenam, gunakan satu atau dua dukungan secara konsisten. Hari ketujuh, bandingkan hasil dan pengalaman anak dengan kondisi awal.",
          "Jangan mengubah lima hal sekaligus. Jika instruksi dipendekkan, contoh diberikan, tempat duduk dipindah, waktu ditambah, tugas dikurangi, dan hadiah diperbesar dalam satu hari, tim tidak mengetahui komponen yang membantu. Dukungan dapat dikombinasikan, tetapi dokumentasikan dengan cukup jelas.",
          "Tanyakan juga suara anak: bagian mana yang paling melelahkan, bantuan mana yang benar-benar berguna, dan apa yang membuatnya merasa malu. Anak bukan satu-satunya pengambil keputusan, tetapi pengalamannya adalah data yang tidak dapat digantikan."
        ]],
        ["Menjaga Dukungan Tetap Bermartabat", [
          "Hindari mengumumkan kondisi anak, memberi lembar yang tampak sangat berbeda tanpa percakapan, atau mengirimnya keluar kelas setiap kali tugas sulit. Dukungan yang efektif tetapi mempermalukan akan ditolak. Banyak penyesuaian dapat dijadikan pilihan umum sehingga tidak menandai satu anak.",
          "Umpan balik diberikan secara pribadi, spesifik, dan dekat dengan perilaku. ‘Kamu memeriksa dua langkah sebelum menjawab’ lebih membangun daripada pujian umum atau perbandingan dengan teman. Fokus pada strategi dan kemajuan, bukan identitas tetap seperti ‘anak pintar’ atau ‘anak lambat’.",
          "Kelas yang aksesibel tetap memiliki struktur, batas, dan tanggung jawab. Dukungan terbaik membantu anak berpartisipasi, belajar memperbaiki kesalahan, serta sedikit demi sedikit mengambil alih alat yang sebelumnya disediakan orang dewasa."
        ]]
      ],
      reflection: "Pilih satu tujuan pembelajaran minggu ini. Hambatan apa yang tidak relevan dengan tujuan tersebut, dan akomodasi apa yang dapat menguranginya tanpa menurunkan standar?",
      quiz: [
        { q: "Apa perbedaan utama akomodasi dan modifikasi?", o: ["Akomodasi mengubah akses atau respons; modifikasi mengubah capaian", "Tidak ada perbedaan", "Akomodasi selalu menurunkan nilai"], c: 0 },
        { q: "Mengapa dukungan awal sebaiknya tidak mengubah terlalu banyak hal sekaligus?", o: ["Agar anak tetap kesulitan", "Agar tim dapat mengetahui dukungan mana yang bekerja", "Karena guru tidak boleh menyesuaikan"], c: 1 },
        { q: "Jika tujuan sains adalah memahami konsep, pengurangan salin dapat…", o: ["Menjaga tenaga untuk belajar konsep tanpa otomatis menurunkan standar", "Menghapus pelajaran", "Menjadi diagnosis"], c: 0 }
      ]
    },
    {
      title: "Mengajarkan Membaca dan Menulis Secara Terstruktur",
      lede: "Anak yang kesulitan literasi membutuhkan pengajaran yang lebih jelas, bukan sekadar lebih banyak. Keterampilan dipecah, diajarkan dalam urutan yang masuk akal, ditinjau kembali secara kumulatif, dan disesuaikan berdasarkan kesalahan nyata anak.",
      sections: [
        ["Eksplisit, Sistematis, dan Kumulatif", [
          "Eksplisit berarti guru menyatakan sasaran, memodelkan proses berpikir, menunjukkan bagaimana dan mengapa, lalu memeriksa pemahaman. Anak tidak diharapkan menemukan pola penting sendirian. Sistematis berarti urutan bergerak dari dasar ke kompleks dan setiap langkah memiliki prasyarat yang jelas.",
          "Kumulatif berarti keterampilan lama terus muncul dalam latihan baru sehingga tidak hilang setelah satu pertemuan. Responsif atau diagnostik berarti guru menggunakan kesalahan untuk menentukan langkah berikutnya. Jika anak belum stabil menggabungkan bunyi sederhana, menambah teks panjang bukan jawaban.",
          "Penggunaan suara, gerak artikulasi, kartu huruf, ubin bunyi, tulisan, dan sentuhan dapat memperjelas hubungan—tetapi bukan karena anak telah ditetapkan sebagai tipe visual, auditori, atau kinestetik. Representasi dipilih sesuai isi yang diajarkan dan digunakan secara terpadu."
        ]],
        ["Isi Pengajaran Membaca", [
          "Fondasi mencakup kesadaran terhadap bunyi bahasa, hubungan bunyi dan huruf, penggabungan serta pemisahan bunyi, dan decoding kata. Setelah itu, pengajaran berkembang pada pola suku kata, bagian kata bermakna, ejaan, kosakata, struktur kalimat, kelancaran, pengetahuan latar, dan strategi memahami teks.",
          "Bahasa Indonesia memiliki pola yang berbeda dari bahasa Inggris, sehingga urutan dan contoh harus mengikuti struktur bahasa yang dipakai anak. Kesulitan membaca aksara Arab atau aksara lain juga perlu dipetakan berdasarkan bunyi, simbol, tanda, arah, dan aturan aksara tersebut; satu kesalahan pada aksara tertentu tidak otomatis menjadi bukti diagnosis umum.",
          "Teks latihan decoding dipilih agar sebagian besar sesuai dengan pola yang sudah diajarkan. Gambar dan konteks tetap berguna untuk membangun makna, tetapi tidak menggantikan perhatian pada huruf ketika sasaran pelajaran adalah membaca kata dengan akurat."
        ]],
        ["Kelancaran dan Pemahaman Berjalan Bersama", [
          "Kelancaran tumbuh dari akurasi, pengenalan kata yang makin otomatis, frasa, intonasi, serta banyak pengalaman membaca yang berhasil. Latihan baca berulang dapat dipakai pada teks singkat dengan tujuan jelas dan umpan balik, bukan meminta anak mengulang halaman sulit tanpa perbaikan.",
          "Pemahaman diajarkan melalui kosakata, pengetahuan topik, struktur teks, hubungan antarkalimat, pertanyaan, rangkuman, inferensi, dan pemantauan diri. Guru perlu memisahkan apakah jawaban salah karena teks tidak terurai atau karena makna belum dipahami.",
          "Bacaan audio dan kegiatan membaca bersama memperkaya bahasa serta pengetahuan bahkan ketika decoding tertinggal. Anak tetap berhak bertemu ide yang sesuai usianya; materi tidak harus selalu disederhanakan sampai tingkat keterampilan baca mandiri."
        ]],
        ["Ejaan, Tulisan Tangan, dan Proses Menulis", [
          "Ejaan dikaitkan dengan bunyi, pola, bagian kata, dan makna; bukan hanya daftar kata untuk dihafal. Dikte singkat memberi kesempatan menerapkan pola, melihat kesalahan, memperbaiki, dan menjelaskan alasan. Latihan tulisan tangan fokus pada pembentukan yang efisien dan otomatis agar tidak terus menyita perhatian.",
          "Untuk ekspresi tertulis, ajarkan strategi perencanaan, penyusunan draf, revisi isi, penyuntingan, dan publikasi. Beri model teks, kerangka, daftar cek, serta kesempatan berbicara sebelum menulis. Perancah dikurangi berdasarkan kemajuan, bukan karena kalender berganti.",
          "Mengetik diajarkan sebagai keterampilan literasi modern. Anak belajar kelancaran papan ketik, organisasi berkas, revisi, dan penggunaan pemeriksa ejaan secara kritis. Teknologi melayani tujuan bahasa; ia tidak menggantikan pengajaran."
        ]],
        ["Intensitas dan Pemantauan", [
          "Intervensi perlu cukup sering, cukup terarah, dan diberikan oleh orang yang memahami keterampilannya. Kelompok kecil bermanfaat bila anak memiliki sasaran serupa; dukungan individual diperlukan ketika profil atau intensitas kebutuhan berbeda. Nama program tidak lebih penting daripada mutu pelaksanaan.",
          "Pilih ukuran kemajuan yang dekat dengan sasaran: akurasi hubungan bunyi-huruf, jumlah kata yang dapat diurai, ejaan pola tertentu, kelancaran pada teks setara, kualitas kalimat, atau kemandirian menggunakan strategi. Ukur berkala dengan tugas yang sebanding.",
          "Jika kemajuan tidak cukup, periksa kehadiran, dosis, kesetiaan pelaksanaan, kecocokan sasaran, tingkat kesulitan, bahasa, kondisi penyerta, dan kualitas pengajaran sebelum menyimpulkan bahwa anak ‘tidak responsif’. Data digunakan untuk memperbaiki intervensi, bukan menyalahkan."
        ]]
      ],
      reflection: "Apakah latihan literasi yang sedang diberikan benar-benar mengajarkan keterampilan yang lemah, atau hanya menambah jumlah bacaan dan tulisan? Apa satu perubahan paling penting?",
      quiz: [
        { q: "Apa arti pengajaran membaca yang eksplisit?", o: ["Anak menemukan semua pola sendiri", "Guru memodelkan dan mengajarkan proses secara langsung", "Guru hanya memberi lebih banyak buku"], c: 1 },
        { q: "Mengapa audio tetap berguna saat decoding dilatih?", o: ["Agar decoding dihentikan", "Untuk menjaga akses pada bahasa, pengetahuan, dan isi sesuai usia", "Agar semua ujian dihapus"], c: 1 },
        { q: "Apa yang harus diperiksa jika intervensi tidak menghasilkan kemajuan?", o: ["Dosis, pelaksanaan, sasaran, kesulitan, bahasa, dan kondisi lain", "Watak anak saja", "Jumlah hukuman"], c: 0 }
      ]
    },
    {
      title: "Mengajarkan Matematika dari Makna ke Simbol",
      lede: "Intervensi matematika yang baik membuat hubungan terlihat. Anak memegang, menggambar, menyebutkan, membandingkan, dan menjelaskan sebelum simbol dipadatkan menjadi prosedur. Setiap representasi menjadi jembatan menuju ide yang sama.",
      sections: [
        ["Satu Ide, Beberapa Representasi", [
          "Untuk mengajarkan 8 − 3, anak dapat memindahkan tiga benda dari delapan, menggambar delapan titik lalu mencoret tiga, melompat mundur pada garis bilangan, menceritakan situasi pengurangan, dan menuliskan simbol. Guru secara eksplisit menunjukkan bahwa semua bentuk itu mewakili hubungan yang sama.",
          "Benda konkret tidak otomatis menghasilkan pemahaman. Jika anak hanya memindahkan balok mengikuti instruksi tanpa menghubungkannya dengan jumlah dan simbol, aktivitas menjadi ritual. Pertanyaan ‘apa yang berubah, apa yang tetap, dan bagaimana gambar ini menunjukkan operasi?’ membuat representasi bermakna.",
          "Gunakan sedikit representasi yang dipilih baik dan konsisten sebelum menambah variasi. Terlalu banyak alat dengan aturan berbeda dapat menambah beban. Seiring pemahaman tumbuh, bantuan konkret dikurangi tetapi selalu dapat digunakan kembali ketika konsep baru diperkenalkan."
        ]],
        ["Bahasa Matematika Harus Diajarkan", [
          "Kata sehari-hari dapat memiliki makna khusus dalam matematika. ‘Selisih’, ‘hasil kali’, ‘setidaknya’, ‘lebih sedikit’, ‘per’, ‘sisa’, atau ‘nilai tempat’ perlu dimodelkan dalam kalimat, simbol, gambar, dan contoh. Anak juga perlu belajar menyatakan alasan, bukan hanya menyebut jawaban.",
          "Soal cerita dibaca untuk memahami situasi: apa yang diketahui, apa yang ditanyakan, hubungan apa yang terjadi, dan representasi apa yang cocok. Kata kunci sering menyesatkan karena satu kata dapat muncul dalam struktur berbeda. Diagram sederhana membantu anak melihat hubungan sebelum memilih operasi.",
          "Jika membaca menjadi hambatan, soal dapat dibacakan saat sasaran utamanya matematika. Namun kosakata dan struktur bahasa matematika tetap diajarkan agar anak makin mandiri. Akses dan pengajaran bahasa berjalan bersama."
        ]],
        ["Garis Bilangan dan Nilai Tempat", [
          "Garis bilangan membangun hubungan antara posisi, urutan, jarak, dan besaran. Anak belajar bahwa 8 bukan sekadar simbol setelah 7, melainkan lokasi dan kuantitas dengan jarak tertentu dari nol. Garis bilangan dapat berkembang dari bilangan bulat ke pecahan, desimal, dan bilangan negatif.",
          "Nilai tempat diajarkan melalui pengelompokan dan pertukaran, bukan nama digit semata. Sepuluh satuan menjadi satu puluhan; sepuluh puluhan menjadi satu ratusan. Kesalahan prosedur penjumlahan atau pengurangan sering berakar pada hubungan ini yang belum kokoh.",
          "Estimasi digunakan sebelum hitung untuk membangun rasa masuk akal. Jika hasil 48 + 31 ditulis 709, anak belajar memeriksa besaran, bukan hanya menelusuri langkah. Kebiasaan memprediksi dan memeriksa memperkuat pemantauan diri."
        ]],
        ["Fakta Dasar dan Prosedur dengan Pengertian", [
          "Fakta dasar dibangun melalui strategi hubungan: membuat sepuluh, pasangan angka, dua kali lipat, hampir dua kali lipat, komutatif, dan hubungan operasi. Setelah strategi dipahami, latihan pengambilan kembali dibuat singkat, sering, dan disesuaikan agar fakta menjadi lebih otomatis.",
          "Prosedur ditautkan pada makna setiap langkah. Anak menjelaskan mengapa menyimpan, meminjam, menyamakan penyebut, atau memindahkan nilai. Contoh salah yang dipilih dengan baik membantu membedakan aturan yang tampak mirip.",
          "Kalkulator dapat menjadi akomodasi ketika sasaran adalah pemecahan masalah kompleks dan perhitungan dasar menjadi hambatan, tetapi tidak digunakan menggantikan pengajaran konsep yang sedang dinilai. Keputusan alat selalu kembali pada tujuan."
        ]],
        ["Pemantauan yang Menunjukkan Cara Berpikir", [
          "Jangan hanya menghitung jawaban benar. Catat strategi, representasi yang dipilih, jenis prompt, akurasi langkah, kemampuan menjelaskan, kecepatan, dan pemeriksaan hasil. Dua jawaban salah dapat menunjukkan pemahaman yang sangat berbeda.",
          "Gunakan soal singkat yang sebanding dari waktu ke waktu, wawancara klinis sederhana, dan analisis kesalahan. Minta anak berpikir keras pada beberapa soal agar guru melihat logika yang digunakan. Hindari membuat semua sesi menjadi tes; pemantauan harus ringkas dan memberi arah.",
          "Kemajuan matematika dapat tidak rata. Anak mungkin cepat pada bilangan bulat tetapi kembali membutuhkan representasi saat pecahan diperkenalkan. Kembali ke konkret bukan kemunduran; itu cara membangun jembatan untuk ide baru."
        ]]
      ],
      reflection: "Ambil satu konsep yang sulit. Bagaimana Anda akan menampilkannya dalam benda, gambar, bahasa, garis bilangan, dan simbol—serta memastikan anak melihat hubungan di antaranya?",
      quiz: [
        { q: "Mengapa manipulatif tidak otomatis membuat anak paham?", o: ["Karena benda konkret harus dihubungkan secara eksplisit dengan ide dan simbol", "Karena semua benda harus dihapus", "Karena matematika hanya hafalan"], c: 0 },
        { q: "Apa kelemahan strategi kata kunci pada soal cerita?", o: ["Kata yang sama dapat muncul pada struktur hubungan yang berbeda", "Anak tidak boleh membaca", "Semua soal memiliki operasi sama"], c: 0 },
        { q: "Kapan kalkulator dapat menjadi akomodasi?", o: ["Saat tujuan adalah pemecahan masalah kompleks dan hitung dasar bukan sasaran", "Untuk mengganti semua konsep", "Hanya saat tidak ada guru"], c: 0 }
      ]
    },
    {
      title: "Menjaga Fungsi Eksekutif, Emosi, dan Harga Diri",
      lede: "Anak tidak belajar hanya dengan keterampilan akademik. Ia juga harus memulai, mengingat langkah, mengatur waktu, menahan dorongan, menghadapi kesalahan, meminta bantuan, dan tetap percaya bahwa dirinya layak belajar. Dukungan yang baik menjaga seluruh ekosistem ini.",
      sections: [
        ["Membuat yang Abstrak Menjadi Terlihat", [
          "‘Kerjakan nanti’, ‘jangan lama-lama’, atau ‘rapikan tugasmu’ menuntut anak membayangkan waktu, urutan, dan standar yang tidak terlihat. Ubah menjadi petunjuk konkret: mulai ketika timer berbunyi, selesaikan tiga soal, tandai daftar cek, masukkan lembar ke map biru, lalu minta pemeriksaan.",
          "Gunakan jadwal visual, contoh produk selesai, daftar langkah, kode warna bahan, timer, alarm transisi, dan tempat penyimpanan tetap. Satu sistem sederhana yang dipakai konsisten lebih baik daripada banyak aplikasi yang cepat ditinggalkan. Anak dilatih menyiapkan sistem bersama, bukan sekadar diawasi.",
          "Tugas panjang dipecah menjadi unit dengan umpan balik dekat. Tenggat antara digunakan untuk proyek. Guru memeriksa perencanaan sebelum memeriksa produk. Ketika kemandirian meningkat, prompt dikurangi satu demi satu dan anak belajar melakukan pemeriksaan diri."
        ]],
        ["Dukungan Perilaku yang Mengajarkan Keterampilan", [
          "Definisikan perilaku yang diharapkan secara positif dan dapat diamati: ‘mulai dalam dua menit’, ‘angkat kartu jeda’, atau ‘kembali setelah tiga menit’, bukan ‘bersikap baik’. Ajarkan, modelkan, latih pada saat tenang, lalu beri penguatan yang dekat dengan perilaku.",
          "Penguatan positif tidak sama dengan menyuap. Ia membantu perilaku baru cukup sering terjadi sampai manfaat alami dapat dirasakan. Pilih penguat yang wajar—perhatian, pilihan, aktivitas singkat, tanggung jawab, atau sistem poin—dan tinjau agar tidak menjadi rumit atau tidak adil.",
          "Konsekuensi tetap ada, tetapi harus dapat diprediksi, proporsional, dan mengajarkan perbaikan. Mempermalukan, mengeluarkan anak terus-menerus, atau mengambil semua waktu istirahat dapat memperburuk regulasi. Setelah ledakan, lakukan pemulihan dan analisis pemicu, bukan ceramah panjang saat sistem saraf masih tinggi."
        ]],
        ["Rasa Malu Menghabiskan Kapasitas Belajar", [
          "Kegagalan berulang membentuk cerita diri: ‘aku bodoh’, ‘matematika bukan untukku’, atau ‘lebih aman tidak mencoba’. Anak dapat menolak, melawak, menyerang, menyalin, atau menyembunyikan tugas untuk menghindari bukti baru yang menguatkan cerita tersebut.",
          "Bangun pengalaman berhasil yang nyata, bukan pujian kosong. Sasaran cukup menantang tetapi dapat dicapai dengan strategi; kemajuan ditunjukkan melalui data diri; kekuatan digunakan dalam tugas; dan kesalahan diperlakukan sebagai informasi. Guru meminta maaf bila responsnya melukai—otoritas tidak berkurang karena memperbaiki relasi.",
          "Perundungan dan ejekan tentang membaca, tulisan, nilai, atau perilaku harus ditangani sebagai masalah keselamatan, bukan harga yang harus dibayar anak agar ‘tangguh’. Dukungan teman sebaya dirancang tanpa membuka informasi pribadi."
        ]],
        ["Rumah dan Sekolah: Konsisten pada Prinsip, Fleksibel pada Bentuk", [
          "Keluarga dan sekolah menyepakati sedikit sasaran yang sama, misalnya memulai tugas, membawa bahan, dan menggunakan strategi saat buntu. Cara penerapan boleh menyesuaikan lingkungan. Mengirim semua pekerjaan yang tidak selesai di sekolah ke rumah dapat mengubah malam keluarga menjadi perpanjangan hukuman.",
          "Rutinitas rumah mempertimbangkan makan, ibadah, istirahat, gerak, tidur, dan hubungan—bukan hanya pekerjaan akademik. Anak yang lelah tidak belajar regulasi melalui konflik berkepanjangan. Tugas diprioritaskan berdasarkan nilai belajar, bukan jumlah halaman.",
          "Komunikasi dua arah perlu ringkas dan terjadwal. Catatan harian yang hanya berisi kesalahan membuat keluarga cemas dan guru lelah. Gunakan ringkasan pola, satu keberhasilan, satu kebutuhan, dan tindakan berikutnya."
        ]],
        ["Terapi, Pengobatan, dan Kesehatan Umum", [
          "Pilihan penanganan mengikuti kebutuhan. Untuk ADHD, pelatihan orang tua, dukungan kelas, intervensi perilaku, keterampilan organisasi, psikoterapi untuk masalah penyerta, dan pengobatan dapat menjadi bagian rencana. Usia, tingkat gangguan, kondisi lain, manfaat, efek samping, dan preferensi keluarga dipertimbangkan oleh tenaga yang berwenang.",
          "Sekolah menyumbang data tentang perhatian, penyelesaian tugas, relasi, makan, tidur di kelas, dan perubahan fungsi—bukan mengatur dosis. Bila anak sangat mengantuk, gelisah, kehilangan nafsu makan, atau menunjukkan perubahan mengkhawatirkan setelah pengobatan, keluarga perlu berkomunikasi dengan klinisi; obat tidak dihentikan atau diubah atas inisiatif sekolah.",
          "Tidur cukup, aktivitas fisik, pola makan seimbang, dan penanganan masalah kesehatan mendukung semua anak. Hindari menjanjikan diet, suplemen, latihan otak, atau terapi tunggal sebagai penyembuh. Tanyakan bukti, risiko, biaya, kualifikasi penyedia, tujuan, serta cara mengukur hasil."
        ]],
        ["Menuju Advokasi Diri", [
          "Seiring usia, anak perlu memahami profilnya dengan bahasa yang tidak memalukan: apa yang mudah, apa yang berat, alat apa yang membantu, dan bagaimana meminta bantuan. Ia belajar mengatakan ‘Saya memahami jika instruksi ditulis,’ atau ‘Saya perlu membagi tugas ini menjadi tiga tenggat.’",
          "Advokasi diri bukan membebaskan anak dari tanggung jawab. Ia membantu memilih strategi, merencanakan, mengomunikasikan kebutuhan, dan menilai hasil. Pada remaja, keterampilan ini penting untuk transisi jenjang, pesantren, perguruan tinggi, kerja, dan kehidupan mandiri.",
          "Tujuan akhir dukungan adalah anak semakin memiliki alatnya sendiri. Orang dewasa tidak selalu berada di sampingnya, tetapi pengalaman dihormati, diajari, dan dipercaya dapat menjadi suara batin yang bertahan lama."
        ]]
      ],
      reflection: "Dari semua tuntutan fungsi eksekutif—memulai, mengingat, mengatur waktu, menahan impuls, memantau, atau beralih—mana yang paling menghambat anak, dan penyangga eksternal apa yang dapat diajarkan?",
      quiz: [
        { q: "Mengapa instruksi ‘lebih rapi’ sering tidak cukup?", o: ["Karena standar dan langkahnya tidak terlihat", "Karena anak tidak perlu belajar", "Karena hanya keluarga yang boleh membantu"], c: 0 },
        { q: "Penguatan positif yang sehat bertujuan untuk…", o: ["Membeli kepatuhan selamanya", "Membantu perilaku baru cukup sering terjadi dan kemudian membangun kemandirian", "Menghapus konsekuensi"], c: 1 },
        { q: "Apa peran sekolah terkait pengobatan?", o: ["Mengubah dosis", "Memberi data fungsi dan mengomunikasikan perubahan kepada keluarga", "Menyarankan penghentian mendadak"], c: 1 }
      ]
    },
    {
      title: "Dari Dukungan Individual Menjadi Sistem Sekolah",
      lede: "Sekolah yang inklusif tidak menunggu satu guru luar biasa menyelamatkan setiap kasus. Ia membangun pengajaran inti yang kuat, menemukan risiko lebih awal, memberi dukungan bertingkat, memantau respons, berkolaborasi dengan keluarga, dan merujuk secara bertanggung jawab.",
      sections: [
        ["Tiga Tingkat Dukungan yang Saling Terhubung", [
          "Tingkat pertama adalah pembelajaran bermutu dan aksesibel untuk semua: kurikulum jelas, pengajaran eksplisit, asesmen formatif, rutinitas, pilihan respons, dan skrining yang tepat. Jika banyak anak gagal pada keterampilan yang sama, sekolah pertama-tama memeriksa mutu dan kecukupan pengajaran inti.",
          "Tingkat kedua memberi intervensi tambahan dalam kelompok kecil kepada anak yang belum berkembang cukup. Sasaran spesifik, frekuensi, durasi, metode, dan ukuran kemajuan ditetapkan. Tingkat ketiga lebih intensif, individual, dan sering melibatkan tenaga dengan keahlian khusus.",
          "Tingkatan bukan ruang permanen atau urutan birokrasi. Anak dapat menerima dukungan berbeda pada bidang berbeda; misalnya tingkat pertama pada pemahaman sains dan tingkat ketiga pada decoding. Rujukan profesional tidak harus ditunda bila tanda berat, kompleks, atau keselamatan terlibat."
        ]],
        ["Rencana Dukungan Individual yang Dapat Dipakai", [
          "Rencana satu atau dua halaman sering lebih berguna daripada laporan panjang yang tidak dibaca. Isinya: kekuatan dan minat, hambatan fungsional, data awal, dua atau tiga sasaran terukur, intervensi, akomodasi, pelaksana, frekuensi, indikator, cara mengumpulkan data, suara anak dan keluarga, serta tanggal tinjau.",
          "Pisahkan intervensi dan akomodasi. Intervensi literasi mungkin empat kali seminggu selama 30 menit; akomodasinya adalah audio pada materi sains. Cantumkan pula kondisi penerapan agar dukungan tidak bergantung pada ingatan guru atau suasana hati.",
          "Tinjauan berakhir pada keputusan: sasaran tercapai dan bantuan dikurangi; kemajuan ada dan dukungan dilanjutkan; kemajuan kurang sehingga intensitas atau metode diubah; atau data menunjukkan perlunya asesmen dan rujukan lebih lanjut."
        ], `<table><thead><tr><th>Komponen rencana</th><th>Contoh ringkas</th></tr></thead><tbody><tr><td>Data awal</td><td>Akurasi 62% pada kata pola yang sudah diajarkan</td></tr><tr><td>Sasaran</td><td>Mencapai 85% pada tiga pengukuran berurutan</td></tr><tr><td>Intervensi</td><td>Pengajaran eksplisit 4 × 30 menit per minggu</td></tr><tr><td>Akomodasi</td><td>Teks-ke-suara untuk materi isi</td></tr><tr><td>Tinjau</td><td>Setiap dua minggu; keputusan pada minggu kedelapan</td></tr></tbody></table>`],
        ["Rapat Data yang Tidak Menjadi Sidang Anak", [
          "Rapat dimulai dari kekuatan dan tujuan, lalu melihat data, strategi yang telah dilakukan, kualitas pelaksanaan, respons, dan hipotesis. Hindari daftar keluhan dari setiap guru tanpa keputusan. Pilih satu fasilitator, pencatat, pemilik tindakan, dan tanggal tinjau.",
          "Keluarga diperlakukan sebagai mitra pengetahuan, bukan pihak yang dipanggil setelah sekolah kehabisan cara. Mereka menjelaskan riwayat, fungsi di rumah, prioritas, dan respons terhadap dukungan. Anak dilibatkan sesuai usia—setidaknya untuk menyampaikan apa yang membantu dan apa yang menghambat.",
          "Jaga kerahasiaan. Diagnosis tidak dibahas di ruang umum, grup orang tua, atau dokumen yang dapat diakses tanpa kebutuhan. Informasi yang diteruskan ke guru berikutnya harus relevan, faktual, berorientasi dukungan, dan mengikuti kebijakan serta persetujuan yang berlaku."
        ]],
        ["Jejaring Rujukan dan Akomodasi yang Layak", [
          "Sekolah memetakan psikolog, dokter anak atau tumbuh kembang, psikiater anak dan remaja, terapis wicara, terapis okupasi, audiolog, dokter mata, konselor, serta layanan pemerintah atau komunitas yang dapat dijangkau. Daftar memuat kompetensi, prosedur, biaya, waktu tunggu, dan jalur komunikasi—bukan sekadar nomor telepon.",
          "Di Indonesia, penyelenggaraan pendidikan inklusif dan akomodasi yang layak memiliki dasar kebijakan. Sekolah perlu memahami perannya, berkoordinasi dengan dinas atau Unit Layanan Disabilitas, menyiapkan pendidik, kurikulum, sarana, serta prosedur dukungan sesuai kebutuhan dan ketentuan yang berlaku.",
          "Keterbatasan biaya keluarga tidak boleh berakhir pada ‘tidak bisa apa-apa’. Sekolah tetap dapat memperbaiki pengajaran, mengumpulkan data, memberi akomodasi, mencari layanan publik, menghubungi ULD, menyusun prioritas, dan menghindari praktik komersial yang tidak terbukti."
        ]],
        ["Peta Kerja 90 Hari", [
          "Hari 1–30: audit. Petakan data kelas, kualitas pengajaran inti, proses rujukan, dukungan yang tersedia, serta pengalaman keluarga. Pilih satu prioritas—misalnya membaca kelas awal atau fungsi eksekutif kelas tujuh—agar perbaikan tidak menyebar terlalu tipis.",
          "Hari 31–60: uji sistem. Tetapkan alat skrining atau asesmen formatif, protokol dukungan, jadwal intervensi, format rencana individual, cara menjaga data, dan rapat tinjau. Latih tim pada keterampilan yang benar-benar akan digunakan, lalu mulai pada kelompok kecil.",
          "Hari 61–90: baca hasil. Periksa jangkauan, kesetiaan pelaksanaan, kemajuan anak, beban guru, pengalaman keluarga, dan hambatan. Lanjutkan yang bekerja, perbaiki yang lemah, hentikan yang tidak bernilai, lalu dokumentasikan agar praktik tidak hilang ketika personel berganti."
        ]],
        ["Anak Tetap Lebih Besar daripada Sistem", [
          "Sistem dibangun agar anak lebih cepat dipahami, bukan lebih cepat dikategorikan. Data berfungsi membuka akses, bukan menentukan batas masa depan. Diagnosis dapat membantu memberi nama dan layanan, tetapi tidak merangkum karakter, iman, humor, relasi, minat, atau cita-cita.",
          "Keberhasilan bukan ketika semua anak menghasilkan cara kerja yang sama. Keberhasilan terlihat ketika keterampilan bertumbuh, hambatan berkurang, partisipasi meningkat, bantuan menjadi lebih tepat, dan anak dapat mengatakan apa yang ia butuhkan tanpa merasa rendah.",
          "Deteksi dini memperoleh maknanya ketika diikuti tindakan dini yang bermutu. Melihat lebih cepat hanya berguna jika sekolah dan keluarga bersedia mengajar lebih jelas, mendengar lebih baik, bekerja bersama, dan menjaga martabat anak sepanjang proses."
        ]]
      ],
      reflection: "Jika sekolah hanya boleh memperbaiki satu komponen sistem dalam 90 hari—pengajaran inti, deteksi, intervensi, dokumentasi, rapat data, atau jejaring rujukan—mana yang paling mendesak dan apa buktinya?",
      quiz: [
        { q: "Jika banyak anak gagal pada keterampilan yang sama, apa yang perlu diperiksa lebih dulu?", o: ["Watak seluruh kelas", "Mutu dan kecukupan pengajaran inti", "Jumlah label diagnosis"], c: 1 },
        { q: "Apa isi penting rencana dukungan individual?", o: ["Hanya diagnosis", "Kekuatan, hambatan, data awal, sasaran, intervensi, akomodasi, peran, dan tinjau", "Daftar hukuman"], c: 1 },
        { q: "Apa makna deteksi dini yang utuh?", o: ["Memberi label secepat mungkin", "Menghubungkan pengenalan pola dengan tindakan bermutu dan bermartabat", "Menunggu kegagalan berat"], c: 1 }
      ]
    },
  ];

  const assessment = [
    ["Anak dapat menjelaskan pelajaran secara lisan, tetapi hasil tertulisnya sangat pendek. Kesimpulan awal paling tepat adalah…", ["Kemampuan anak pasti rendah", "Perlu memetakan apakah transkripsi atau ekspresi tertulis menutupi pengetahuannya", "Anak sengaja menolak semua tugas"], 2],
    ["Satu huruf terbalik ditemukan pada tulisan anak kelas satu. Respons yang paling bertanggung jawab adalah…", ["Langsung mendiagnosis disleksia", "Mengabaikan semua perkembangan", "Melihat frekuensi, persistensi, gejala lain, pengajaran, dan dampaknya"], 3],
    ["Apa yang paling membedakan deteksi dini dari diagnosis?", ["Deteksi dini mengenali risiko dan kebutuhan dukungan; diagnosis memerlukan evaluasi profesional", "Keduanya sama", "Diagnosis dapat dibuat dari satu sampel"], 1],
    ["Skrining membaca menunjukkan risiko. Apa arti hasil tersebut?", ["Anak sudah pasti disleksia", "Perlu dukungan dan pemeriksaan lebih lanjut", "Sekolah harus menunggu tanpa tindakan"], 2],
    ["Seorang anak membaca lambat tetapi memahami sangat baik saat teks dibacakan. Dukungan paling seimbang adalah…", ["Hentikan semua bacaan", "Berikan akses audio untuk isi sambil decoding tetap diajarkan terstruktur", "Nilai semua mata pelajaran hanya dari kecepatan baca"], 2],
    ["Manakah yang paling tepat tentang disleksia?", ["Selalu disebabkan huruf terlihat bergerak", "Utamanya terkait akurasi atau kelancaran membaca kata dan sering ejaan", "Hanya terjadi pada anak ber-IQ tinggi"], 2],
    ["Anak mampu bercerita panjang tetapi menulis dua kalimat dengan sangat lelah. Data pembanding yang paling berguna adalah…", ["Menyalin, dikte, menulis spontan, dan mengetik", "Warna pensil favorit", "Jumlah teman di kelas"], 1],
    ["Apa strategi terbaik terkait tulisan tangan dan mengetik?", ["Pilih salah satu untuk selamanya", "Latih keterampilan tulisan tangan secara terarah dan gunakan mengetik untuk akses tugas panjang sesuai tujuan", "Larang teknologi bantu"], 2],
    ["Anak gagal soal cerita matematika tetapi berhasil saat situasi digambar. Apa yang perlu diajarkan?", ["Hubungan antara bahasa, representasi, dan simbol", "Lebih banyak hukuman", "Hanya hafalan jawaban"], 1],
    ["Mengapa kata kunci bukan satu-satunya strategi soal cerita?", ["Karena satu kata dapat muncul dalam hubungan matematika yang berbeda", "Karena bahasa tidak penting", "Karena semua soal harus dibaca guru"], 1],
    ["Anak tenang, sering melamun, kehilangan tugas, dan tidak terorganisasi. Apakah ADHD mungkin?", ["Tidak, karena ADHD selalu hiperaktif", "Mungkin; presentasi dominan kurang perhatian perlu dinilai bersama pola lintas situasi dan dampak", "Pasti ADHD tanpa asesmen"], 2],
    ["Anak dapat fokus lama pada aktivitas yang sangat disukai. Apa kesimpulan yang benar?", ["ADHD otomatis gugur", "Kemampuan fokus pada minat tidak cukup untuk menerima atau menolak ADHD", "Anak hanya perlu aktivitas favorit"], 2],
    ["Apa syarat penting diagnosis ADHD?", ["Gejala hanya saat ujian", "Pola menetap, tidak sesuai perkembangan, hadir di dua atau lebih situasi, dan mengganggu fungsi", "Harus selalu berlari-lari"], 2],
    ["Anak memiliki kesulitan membaca dan ADHD. Pendekatan paling tepat adalah…", ["Memilih satu label dan mengabaikan yang lain", "Memetakan kontribusi masing-masing serta menangani kebutuhan secara paralel", "Menunggu sampai salah satunya hilang"], 2],
    ["Apa yang dimaksud akomodasi?", ["Mengubah cara akses atau respons tanpa otomatis mengubah capaian", "Menghapus semua target", "Memberi jawaban benar"], 1],
    ["Jika tujuan pelajaran sains adalah memahami konsep, dukungan yang layak bagi anak dengan hambatan menulis dapat berupa…", ["Meminta menyalin dua kali lebih banyak", "Memberi pilihan jawaban lisan atau mengetik", "Menghapus pelajaran sains"], 2],
    ["Pengajaran membaca yang terstruktur ditandai oleh…", ["Tebakan dari gambar sebagai strategi utama", "Pengajaran eksplisit, sistematis, berurutan, kumulatif, dan responsif terhadap kesalahan", "Teks sulit tanpa model"], 2],
    ["Apa fungsi penyangga eksternal seperti timer dan daftar cek?", ["Menggantikan fungsi yang belum stabil sambil melatih kemandirian", "Membuat anak bergantung selamanya", "Menentukan diagnosis"], 1],
    ["Banyak anak satu kelas gagal pada keterampilan yang sama. Langkah sistemik pertama adalah…", ["Mendiagnosis semuanya", "Memeriksa kualitas dan kecukupan pengajaran inti", "Mengeluarkan semua anak dari kelas"], 2],
    ["Kapan rencana dukungan individual ditinjau?", ["Tidak perlu ditinjau", "Pada tanggal yang disepakati menggunakan data untuk melanjutkan, mengubah, mengurangi, atau merujuk", "Hanya setelah anak lulus"], 2]
  ];

  const assessmentHtml = `
    <p class="eyebrow reveal">Evaluasi Akhir</p>
    <h2 class="reveal">Asesmen Komprehensif</h2>
    <p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan membedakan tanda, menentukan batas kewenangan, memilih dukungan, dan membangun sistem sekolah yang aman.</p>
    <div class="card reveal">
      ${assessment.map(([question, options, correct]) => `<div class="assess-q" data-correct="${correct}"><p>${question}</p>${options.map(option => `<button class="quiz-opt" onclick="selectAssessAnswer(this)">${option}</button>`).join("")}</div>`).join("")}
      <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button>
      <div class="assess-result" id="asesmenResult"></div>
    </div>
    <div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => [`bab${index + 1}`, chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 56,
    title: "Mengenali dan Mengatasi Kesulitan Belajar Anak",
    subtitle: "Deteksi Dini Disleksia, Disgrafia, Diskalkulia, dan ADHD",
    chapterCount: chapters.length,
    videoId: "mDlqIXOs_qw"
  };
})();
