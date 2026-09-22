/* Konten eBook Interaktif 59 — Memahami Gangguan Perilaku Anak dan Cara Meresponnya */
(() => {
  const section = ([heading, paragraphs, extra = ""]) =>
    "<h4>" + heading + "</h4>" +
    paragraphs.map(paragraph => "<p>" + paragraph + "</p>").join("") +
    extra;

  const note = (title, body) =>
    '<div style="margin:22px 0;padding:18px 20px;border-left:5px solid var(--accent);background:var(--accent-tint);border-radius:0 14px 14px 0">' +
    '<strong style="font-family:var(--font-display);color:var(--heading)">' + title + '</strong><p style="margin:8px 0 0">' + body + '</p></div>';

  const miniQuiz = questions =>
    '<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>' +
    questions.map(question =>
      '<div class="quiz-q"><p>' + question.q + '</p>' +
      question.o.map((option, index) =>
        '<button class="quiz-opt" onclick="answerQuiz(this,' + (index === question.c) + ')">' + option + '</button>'
      ).join('') + '</div>'
    ).join('') + '</div>';

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
      title: "Bukan Sekadar Anak Malas: Membaca Perilaku dari Akar Kesulitannya",
      lede: "Ketika anak lambat membaca, sulit menulis, tidak menyelesaikan tugas, atau terus bergerak, orang dewasa mudah menilai perilakunya. Padahal sebagian anak sedang berjuang dengan proses belajar yang memang lebih berat.",
      sections: [
        ["Perilaku Adalah Sinyal, Bukan Kesimpulan", [
          "Materi narasumber menempatkan disleksia, diskalkulia, dan ADHD sebagai kondisi yang banyak terlihat pada usia sekolah, terutama ketika tuntutan membaca, menulis, berhitung, mengikuti instruksi, dan duduk terarah mulai meningkat. Kesulitannya tidak selalu langsung dikenali sebagai kebutuhan belajar; sering kali yang pertama terlihat justru nilai turun, tugas tidak selesai, emosi meningkat, atau anak menghindari pelajaran.",
          "Karena itu, respons pertama bukan memberi label ‘malas’, ‘nakal’, ‘tidak serius’, atau ‘tidak mampu’. Respons pertama adalah mengamati apa yang sulit dilakukan anak: mengenali huruf, menghubungkan huruf-bunyi, memahami urutan angka, mempertahankan perhatian, mengikuti beberapa instruksi, menyusun kata, atau mengendalikan impuls."
        ]],
        ["Kemampuan Anak Tidak Boleh Diukur dari Satu Kesulitan", [
          "Narasumber menekankan bahwa anak dengan disleksia, diskalkulia, maupun ADHD dapat memiliki kapasitas intelektual yang baik. Kesulitan pada satu area tidak otomatis berarti kemampuan anak rendah secara keseluruhan. Anak dapat kuat pada gambar, penalaran lisan, kreativitas, pengetahuan tertentu, olahraga, keterampilan sosial, atau minat yang sangat spesifik.",
          "Pendampingan yang tepat berusaha menemukan dua hal sekaligus: bagian yang memerlukan dukungan dan bagian yang menjadi kekuatan. Kekuatan anak bukan sekadar hadiah tambahan; ia dapat menjadi jembatan agar latihan akademik terasa lebih bermakna."
        ]],
        ["Tiga Kelompok Gejala Penyerta", [
          "Dalam materi, kesulitan belajar spesifik dibahas bersama tiga kelompok gejala yang dapat menyertai: gangguan bahasa, gangguan perilaku, dan dampak psikologis atau afektif. Ketiganya saling memengaruhi. Anak yang berkali-kali gagal membaca dapat menjadi cemas. Anak yang kesulitan mengekspresikan kalimat dapat menjawab sangat pendek. Anak yang terus dikoreksi dapat menjadi mudah marah atau menghindari tugas.",
          "Keterkaitan ini penting karena intervensi yang hanya menyuruh anak ‘berperilaku baik’ dapat kehilangan akar masalah. Sebaliknya, ketika hambatan belajar mulai dibantu, sebagian perilaku sekunder dapat berkurang karena anak merasa lebih mampu dan lebih dipahami."
        ], note("Prinsip bab ini", "Jangan mulai dari pertanyaan “Kenapa anak ini nakal?” Mulailah dari “Apa yang sedang sulit ia lakukan, dan dukungan apa yang belum ia dapatkan?”")]
      ],
      reflection: "Pikirkan satu anak yang sering dianggap tidak fokus, malas, atau mudah marah. Perilaku apa yang benar-benar Anda lihat? Tugas atau situasi apa yang biasanya mendahuluinya?",
      quiz: [
        {q:"Respons awal yang paling tepat ketika anak berulang kali gagal menyelesaikan tugas adalah…",o:["Langsung memberi label malas","Mengamati pola kesulitan dan konteks tugas","Menambah hukuman"],c:1},
        {q:"Kesulitan membaca otomatis berarti kemampuan intelektual anak rendah.",o:["Benar","Salah","Selalu benar pada kelas awal"],c:1},
        {q:"Materi membahas gejala penyerta dalam tiga kelompok, yaitu…",o:["Bahasa, perilaku, dan psikologis","Motorik, olahraga, dan seni","Kedisiplinan, seragam, dan kehadiran"],c:0}
      ]
    },
    {
      title: "Memahami Disleksia: Ketika Membaca, Menulis, dan Mengeja Tidak Otomatis",
      lede: "Disleksia bukan sekadar ‘belum lancar membaca’. Kesulitan dapat muncul pada akurasi membaca kata, kelancaran, ejaan, pengenalan pola bunyi, dan pengalaman literasi yang membutuhkan usaha lebih besar.",
      sections: [
        ["Apa yang Terlihat di Kelas", [
          "Pada materi slide, disleksia dijelaskan sebagai kesulitan belajar spesifik yang berkaitan dengan membaca, menulis, dan mengeja. Dalam praktik kelas, guru dapat melihat anak membaca sangat lambat, menebak kata, melewatkan suku kata, menukar bentuk huruf, kesulitan mengeja, atau menghindari membaca keras karena takut salah.",
          "Kesulitan sering makin tampak setelah anak memasuki fase belajar membaca secara formal. Namun satu atau dua kesalahan huruf tidak cukup untuk menyimpulkan disleksia. Yang lebih penting adalah pola yang menetap, intensitasnya, dampaknya terhadap belajar, dan respons anak terhadap pengajaran yang terstruktur."
        ]],
        ["Kesalahan Bukan Bukti Kurang Usaha", [
          "Anak dapat berusaha keras tetapi tetap membutuhkan waktu lebih lama. Bila orang dewasa hanya membandingkan hasil akhirnya dengan teman sebaya, anak berisiko menerima koreksi terus-menerus tanpa memahami strategi yang bisa membantunya. Pengalaman seperti ini dapat mengurangi kepercayaan diri dan motivasi membaca.",
          "Fokuskan umpan balik pada proses: huruf apa yang sudah konsisten dikenali, bunyi mana yang masih tertukar, suku kata apa yang sudah lancar, dan langkah kecil apa yang akan dilatih berikutnya. Dengan cara ini, anak melihat bahwa belajar adalah kemajuan bertahap, bukan ujian harga diri."
        ]],
        ["Target Dukungan yang Konkret", [
          "Untuk anak yang masih kesulitan dasar, target perlu diperkecil. Jangan sekaligus menuntut membaca paragraf jika pengenalan huruf belum stabil. Petakan huruf yang belum dikuasai, lanjutkan ke hubungan huruf-bunyi, suku kata, kata, lalu kalimat sederhana.",
          "Gunakan materi yang menarik bagi anak. Bila ia menyukai gambar, jadikan gambar sebagai pintu masuk untuk menyebut nama benda, menulis huruf awal, menyusun kata, lalu membuat kalimat. Minat anak dapat mengurangi rasa tertekan saat latihan."
        ], note("Catatan penting", "Disleksia adalah kondisi belajar spesifik. Identifikasi formal memerlukan asesmen yang memadai; eBook ini tidak digunakan untuk mendiagnosis.")]
      ],
      reflection: "Jika ada anak yang sulit membaca, apakah target latihan Anda sudah sesuai dengan kemampuan dasar yang ia kuasai, atau masih terlalu jauh?",
      quiz: [
        {q:"Langkah yang paling masuk akal ketika anak belum mengenal sejumlah huruf adalah…",o:["Langsung memberi bacaan panjang","Memetakan huruf yang sudah dan belum dikuasai","Meminta menghafal paragraf"],c:1},
        {q:"Kesalahan membaca pada disleksia sebaiknya diperlakukan sebagai…",o:["Bukti anak tidak berusaha","Data untuk menentukan latihan berikutnya","Alasan mempermalukan anak"],c:1},
        {q:"Urutan latihan dasar yang sesuai adalah…",o:["Paragraf → kalimat → huruf","Huruf → suku kata → kata","Kata → angka → paragraf"],c:1}
      ]
    },
    {
      title: "Memahami Diskalkulia: Ketika Angka dan Urutan Menjadi Berat",
      lede: "Sebagian anak memahami percakapan dengan baik tetapi kesulitan ketika harus memaknai jumlah, urutan, operasi hitung, atau hubungan angka. Kesulitan matematika perlu dipetakan secara spesifik, bukan disederhanakan menjadi ‘tidak berbakat’ atau ‘kurang latihan’.",
      sections: [
        ["Bukan Hanya Salah Menghitung", [
          "Dalam materi, diskalkulia dijelaskan melalui kesulitan memahami konsep berhitung seperti penjumlahan, pengurangan, perkalian, pembagian, serta konsep angka sebelum dan sesudah. Di kelas, bentuknya dapat terlihat berbeda-beda: anak lambat mengenali jumlah, bingung dengan simbol, sering tertukar urutan, atau hafal prosedur tetapi tidak memahami maknanya.",
          "Karena profil kesulitan berbeda, guru perlu bertanya: bagian mana yang sebenarnya sulit? Apakah mengenali lambang angka, memahami kuantitas, mengingat fakta hitung, mengikuti langkah, membaca soal cerita, atau mempertahankan informasi saat menghitung?"
        ]],
        ["Gunakan Benda Konkret sebelum Abstraksi", [
          "Untuk konsep jumlah dan operasi dasar, benda nyata dapat membantu. Gunakan kancing, stik, balok, kartu angka, garis bilangan, atau benda sehari-hari. Tujuannya bukan membuat pembelajaran ‘kekanak-kanakan’, melainkan memberi representasi yang dapat dilihat dan disentuh sebelum berpindah ke simbol.",
          "Ketika anak memahami bahwa 7 bukan sekadar bentuk angka tetapi mewakili jumlah tertentu, operasi menjadi lebih bermakna. Setelah konsep cukup stabil, barulah perlahan pindah ke gambar, simbol, dan latihan tertulis."
        ]],
        ["Jaga Beban Kognitif", [
          "Soal yang terlalu panjang dapat membuat anak kehilangan langkah, meskipun ia sebenarnya memahami konsep awal. Pecah tugas menjadi bagian kecil, tampilkan satu jenis operasi dalam satu sesi, dan beri ruang kerja yang rapi. Untuk soal cerita, bantu anak menandai informasi penting dan pertanyaan utama.",
          "Kesalahan yang berulang perlu dicatat. Pola salah lebih berguna daripada jumlah salah. Dari pola itulah guru mengetahui apakah anak perlu bantuan pada konsep, bahasa soal, urutan langkah, memori kerja, atau perhatian."
        ]]
      ],
      reflection: "Ambil satu jenis soal matematika yang sering salah. Apakah kesulitannya ada pada konsep jumlah, simbol, urutan, bahasa soal, atau langkah pengerjaan?",
      quiz: [
        {q:"Diskalkulia hanya berarti anak sering salah menjumlah.",o:["Benar","Salah","Benar bila kelas rendah"],c:1},
        {q:"Pendekatan awal yang membantu konsep jumlah adalah…",o:["Benda konkret dan visual","Menambah 100 soal sekaligus","Menghafal tanpa memahami"],c:0},
        {q:"Data paling berguna dari kesalahan matematika adalah…",o:["Pola kesalahannya","Warna pensil anak","Jumlah halaman buku"],c:0}
      ]
    },
    {
      title: "Memahami ADHD: Aktif, Hiperaktif, dan Sulit Memusatkan Perhatian",
      lede: "Anak yang aktif belum tentu ADHD. ADHD berkaitan dengan pola inatensi dan/atau hiperaktivitas-impulsivitas yang menetap dan mengganggu fungsi di lebih dari satu situasi.",
      sections: [
        ["Aktif Tidak Sama dengan ADHD", [
          "Materi narasumber membedakan anak aktif dengan anak yang memiliki kesulitan perhatian dan kontrol perilaku. Anak aktif dapat memiliki energi tinggi tetapi masih mampu menyesuaikan perilaku ketika situasi menuntut. Pada ADHD, kesulitan perhatian, impulsivitas, atau hiperaktivitas lebih konsisten dan berdampak pada belajar, hubungan sosial, dan aktivitas sehari-hari.",
          "Guru sebaiknya tidak mendiagnosis dari satu perilaku seperti sering berdiri dari kursi. Catat frekuensi, situasi, durasi, jenis tugas, apakah perilaku muncul juga di tempat lain, dan seberapa besar mengganggu fungsi. Data observasi sekolah dapat menjadi informasi penting ketika keluarga berkonsultasi dengan tenaga kesehatan."
        ]],
        ["Kesulitan Kontrol dan Pemusatan Perhatian", [
          "Dalam slide, karakteristik yang ditekankan antara lain kesulitan mengontrol perilaku, kesulitan konsentrasi, pemusatan perhatian yang mudah terpecah, sensitif, dan mudah emosi. Perilaku ini dapat membuat anak tampak menentang meskipun sebagian masalahnya adalah kesulitan menghambat respons atau mengelola perhatian.",
          "Respons kelas dapat berupa instruksi singkat, kontak mata yang wajar, satu tugas pada satu waktu, penanda visual, pengingat sebelum transisi, waktu kerja lebih pendek, jeda gerak yang terencana, dan posisi duduk yang mengurangi distraksi."
        ]],
        ["Gejala Dapat Berubah Seiring Usia", [
          "Gejala ADHD dapat berubah seiring usia; hiperaktivitas yang sangat terlihat pada masa kecil dapat menjadi lebih ringan atau berubah bentuk. Namun ADHD tidak boleh dianggap pasti hilang pada kelas tertentu. Sebagian orang tetap mengalami gejala hingga remaja dan dewasa.",
          "Karena itu, fokus bukan menunggu anak ‘hilang gejalanya sendiri’, tetapi membantu fungsi sehari-hari: belajar, organisasi, regulasi perilaku, relasi, dan kemandirian. Bila dampaknya besar atau menetap, keluarga perlu berkonsultasi dengan tenaga kesehatan yang kompeten."
        ], note("Tentang diet dan obat", "Materi webinar menyebut pembatasan beberapa makanan dan rujukan medis. Dalam eBook ini, perubahan diet tidak ditempatkan sebagai terapi utama ADHD dan obat tidak dipahami sekadar sebagai “obat penenang”. Evaluasi dan terapi perlu mengikuti rekomendasi tenaga kesehatan yang kompeten.")]
      ],
      reflection: "Pilih satu perilaku yang sering disebut ‘tidak fokus’. Apa yang terjadi sebelum perilaku itu? Berapa lama anak mampu bertahan? Apa yang membantu ia kembali pada tugas?",
      quiz: [
        {q:"Anak yang banyak bergerak pasti ADHD.",o:["Benar","Salah","Benar jika di kelas"],c:1},
        {q:"Observasi guru yang baik memuat…",o:["Label dan dugaan","Frekuensi, situasi, durasi, dan dampak fungsi","Diagnosis"],c:1},
        {q:"Instruksi untuk anak yang mudah terdistraksi sebaiknya…",o:["Panjang dan sekaligus banyak","Singkat, bertahap, dan jelas","Disampaikan sambil memarahi"],c:1}
      ]
    },
    {
      title: "Gangguan Bahasa: Speech Delay, Parafasia, dan Kesulitan Mengekspresikan Diri",
      lede: "Sebagian perilaku ‘diam’, jawaban sangat singkat, atau tampak tidak nyambung dapat berhubungan dengan kesulitan bahasa. Anak mungkin memahami lebih banyak daripada yang mampu ia ungkapkan.",
      sections: [
        ["Riwayat Keterlambatan Bicara sebagai Informasi, Bukan Vonis", [
          "Materi membahas speech delay atau keterlambatan bicara sebagai salah satu riwayat yang dapat ditemukan pada sebagian anak dengan kesulitan belajar. Riwayat ini berguna sebagai informasi perkembangan, tetapi tidak dapat digunakan sendirian untuk menyimpulkan disleksia, diskalkulia, atau ADHD.",
          "Guru dapat menanyakan riwayat perkembangan secara wajar kepada keluarga ketika memang relevan. Fokuskan pada dukungan saat ini: bagaimana anak memahami instruksi, mengungkapkan kebutuhan, menyebut kata, menyusun kalimat, dan mengikuti percakapan."
        ]],
        ["Ketika Kata yang Keluar Bukan Kata yang Dimaksud", [
          "Pada slide, parafasia dijelaskan sebagai keadaan ketika seseorang memahami maksud tetapi menghasilkan kata yang keliru. Contoh yang dibahas meliputi pertukaran kata yang berkaitan makna, pertukaran bunyi, atau bentuk kata yang berubah. Dalam pembelajaran, kesalahan seperti ini dapat membuat anak malu atau enggan bicara.",
          "Jangan buru-buru memotong dan membetulkan setiap kata. Beri waktu, bantu dengan pilihan kata bila diperlukan, ulangi kalimat yang benar secara alami, dan pastikan anak tetap merasa aman untuk berbicara."
        ]],
        ["Kurangi Beban Bahasa", [
          "Jika anak kesulitan memproses instruksi panjang, pecah menjadi satu atau dua langkah. Setelah satu langkah selesai, berikan langkah berikutnya. Gunakan dukungan visual seperti gambar, daftar kecil, atau contoh hasil. Minta anak mengulang instruksi dengan kata-katanya sendiri tanpa nada menguji.",
          "Bila kesulitan bicara, bahasa, atau pemahaman menetap dan mengganggu fungsi, keluarga dapat diarahkan untuk berkonsultasi dengan tenaga yang sesuai, misalnya dokter anak, psikolog, atau terapis wicara sesuai kebutuhan."
        ]]
      ],
      reflection: "Adakah anak yang sering menjawab ‘ya/tidak’ atau tampak sulit menjelaskan? Apakah Anda sudah memberi waktu cukup dan mengurangi panjang instruksi?",
      quiz: [
        {q:"Riwayat speech delay otomatis berarti anak disleksia.",o:["Benar","Salah","Selalu benar bila terlambat bicara"],c:1},
        {q:"Jika anak sulit mengikuti instruksi panjang, guru sebaiknya…",o:["Menambah volume suara","Memecah instruksi menjadi langkah kecil","Memberi hukuman"],c:1},
        {q:"Saat anak salah mengucapkan kata, respons yang lebih aman adalah…",o:["Menertawakan","Memberi waktu dan memodelkan kata secara alami","Menyuruh diam"],c:1}
      ]
    },
    {
      title: "Perilaku Sehari-hari: Arah, Urutan, Waktu, dan Kemandirian",
      lede: "Kesulitan anak tidak selalu muncul dalam buku pelajaran. Ia dapat terlihat ketika membedakan kanan-kiri, memakai sepatu, mengingat arah, mengelola waktu, atau mengikuti rutinitas.",
      sections: [
        ["Kanan–Kiri dan Orientasi", [
          "Materi slide menyebut kesulitan membedakan kanan dan kiri, memakai sandal atau sepatu, serta mengingat arah jalan sebagai perilaku yang dapat ditemukan pada sebagian anak. Gejala ini tidak spesifik untuk satu diagnosis, tetapi dapat menjadi petunjuk bahwa anak memerlukan latihan orientasi dan rutinitas yang lebih eksplisit.",
          "Untuk kanan-kiri, gunakan penanda yang konsisten. Salah satu contoh dari sesi tanya jawab adalah gelang di tangan kanan. Tujuannya bukan membuat anak bergantung selamanya pada gelang, tetapi memberi jangkar visual sementara sampai konsep lebih otomatis."
        ]],
        ["Rutinitas Pagi dan Manajemen Waktu", [
          "Kesulitan memulai tugas, berpindah aktivitas, menyiapkan barang, atau memperkirakan waktu dapat membuat rutinitas pagi penuh konflik. Orang dewasa lalu memberi banyak perintah secara beruntun, sementara anak semakin kehilangan langkah.",
          "Ubah rutinitas menjadi urutan visual: bangun, mandi, pakaian, sarapan, tas, sepatu. Beri satu pengingat pada satu tahap. Gunakan timer visual bila membantu. Semakin banyak proses yang dibuat terlihat, semakin kecil kebutuhan untuk mengulang teguran."
        ]],
        ["Jangan Menjadikan Kemandirian sebagai Arena Pertengkaran", [
          "Kemandirian tumbuh dari latihan, bukan dari rasa malu. Jika anak salah memakai sepatu atau lupa barang, bantu ia menemukan sistem: tanda pada sepatu kanan-kiri, tempat khusus barang, checklist, atau foto isi tas. Setelah beberapa minggu, kurangi bantuan secara bertahap.",
          "Tujuannya bukan membuat orang dewasa melakukan semuanya, tetapi memindahkan fungsi pengingat dari kepala orang dewasa ke alat bantu yang dapat digunakan anak sendiri."
        ]]
      ],
      reflection: "Pilih satu rutinitas harian yang sering memicu konflik. Bagaimana Anda bisa mengubahnya menjadi urutan visual yang lebih mudah diikuti?",
      quiz: [
        {q:"Kesulitan kanan-kiri otomatis memastikan satu diagnosis tertentu.",o:["Benar","Salah","Selalu berarti disleksia"],c:1},
        {q:"Untuk rutinitas yang sering kacau, strategi yang membantu adalah…",o:["Checklist visual dan urutan tetap","Menambah ceramah panjang","Mengganti aturan setiap hari"],c:0},
        {q:"Tujuan alat bantu visual adalah…",o:["Membuat anak bergantung selamanya","Membantu sampai rutinitas lebih otomatis","Menggantikan semua pembelajaran"],c:1}
      ]
    },
    {
      title: "Dampak Emosional: Ketika Kegagalan Belajar Berulang Menjadi Luka",
      lede: "Anak yang berkali-kali merasa tertinggal dapat membentuk keyakinan ‘saya memang tidak bisa’. Di sinilah kesulitan akademik dapat berkembang menjadi masalah motivasi, kecemasan, kemarahan, dan harga diri.",
      sections: [
        ["Siklus Kegagalan dan Rendah Diri", [
          "Materi membahas gagasan bahwa kegagalan akademik yang berulang dapat memicu perasaan rendah diri dan tidak berdaya. Anak kemudian menghindari tugas, kehilangan motivasi, atau bereaksi emosional. Penghindaran membuat latihan berkurang dan kesenjangan belajar dapat semakin lebar.",
          "Perilaku menolak tugas tidak selalu berarti anak tidak peduli. Bisa jadi ia sedang melindungi diri dari pengalaman gagal yang berulang. Pertanyaan yang berguna adalah: ‘Bagian mana yang paling membuatmu susah?’ dan ‘Kalau kita kecilkan tugasnya, kamu mau mulai dari mana?’"
        ]],
        ["Sensitif dan Mudah Marah", [
          "Dalam materi, anak dengan kesulitan perhatian atau pengalaman akademik yang berat dapat terlihat sensitif, mudah emosi, memukul, melempar, atau cepat tersinggung. Perilaku yang berbahaya tetap perlu dibatasi, tetapi batas dapat diberikan tanpa mempermalukan.",
          "Gunakan urutan: amankan situasi, tenangkan intensitas, validasi perasaan tanpa membenarkan tindakan, lalu bahas pilihan perilaku setelah anak lebih siap. Kalimat seperti ‘Kamu boleh marah, tetapi tidak boleh memukul’ memisahkan emosi dari tindakan."
        ]],
        ["Bangun Pengalaman Berhasil yang Nyata", [
          "Pujian umum seperti ‘kamu hebat’ dapat membantu sesaat, tetapi pengalaman berhasil lebih kuat. Atur tugas pada tingkat yang menantang namun mungkin dicapai. Tunjukkan kemajuan konkret: kemarin mengenal 8 huruf, hari ini 11; minggu lalu butuh 6 pengingat, hari ini 3.",
          "Kemajuan kecil yang terlihat membantu anak membangun ulang keyakinan bahwa usaha dapat menghasilkan perubahan. Ini penting untuk motivasi, harga diri, dan keberanian mencoba kembali."
        ], note("Waspadai perubahan berat", "Jika muncul kesedihan mendalam, menarik diri berat, pernyataan ingin menyakiti diri, agresi berbahaya, atau perubahan fungsi yang signifikan, sekolah dan keluarga perlu segera melibatkan tenaga kesehatan/layanan darurat yang sesuai.")]
      ],
      reflection: "Apakah ada anak yang tampak ‘tidak mau mencoba’ karena terlalu sering gagal? Pengalaman berhasil kecil apa yang bisa Anda rancang minggu ini?",
      quiz: [
        {q:"Menolak tugas selalu berarti anak malas.",o:["Benar","Salah","Benar jika tugas mudah"],c:1},
        {q:"Saat anak marah dan mulai memukul, respons awal adalah…",o:["Mempermalukan di depan kelas","Mengamankan situasi dan menurunkan intensitas","Membiarkan"],c:1},
        {q:"Cara membantu harga diri yang lebih kuat adalah…",o:["Menciptakan pengalaman berhasil yang nyata","Memberi label pintar setiap hari","Membandingkan dengan teman"],c:0}
      ]
    },
    {
      title: "Respons Guru di Kelas: Dari Observasi ke Dukungan yang Tepat",
      lede: "Guru bukan diagnostician, tetapi guru memiliki posisi sangat penting untuk melihat pola, menyesuaikan pembelajaran, dan memberikan data observasi yang berguna bagi keluarga maupun tenaga profesional.",
      sections: [
        ["Catat yang Terlihat, Bukan Label", [
          "Ganti catatan ‘tidak fokus’ menjadi ‘berpindah dari kursi 6 kali selama tugas menyalin 15 menit’. Ganti ‘malas membaca’ menjadi ‘berhenti setelah dua baris dan menolak melanjutkan ketika diminta membaca keras’. Deskripsi faktual membuat masalah lebih mudah dianalisis.",
          "Catatan sebaiknya memuat konteks: waktu, jenis tugas, panjang instruksi, kondisi kelas, apa yang terjadi sebelumnya, respons guru, serta apa yang membantu. Dengan data ini, sekolah dapat melihat apakah perilaku dipicu tuntutan tertentu atau muncul di berbagai situasi."
        ]],
        ["Sederhanakan Instruksi dan Lingkungan", [
          "Berikan satu atau dua instruksi pada satu waktu. Gunakan kalimat pendek dan konkret. Tulis urutan di papan. Pastikan anak memahami tugas sebelum mulai. Bagi lembar kerja menjadi bagian kecil bila tampilan terlalu penuh.",
          "Untuk anak yang mudah terdistraksi, kurangi distraksi yang tidak perlu. Tempat duduk tidak harus selalu paling depan; pilih posisi yang membuat anak lebih mudah melihat guru, tetap terhubung dengan teman, dan tidak dikelilingi banyak rangsangan."
        ]],
        ["Berikan Waktu dan Cara Respons yang Beragam", [
          "Sebagian anak membutuhkan waktu lebih lama untuk membaca, menulis, atau merumuskan jawaban. Beri jeda sebelum meminta jawaban. Jika tujuan pelajaran bukan menguji kecepatan menulis, izinkan bentuk respons lain seperti menunjuk, memilih, menjawab lisan, atau menggunakan alat bantu.",
          "Akomodasi bukan berarti menurunkan harapan belajar. Akomodasi mengubah jalur agar anak memiliki kesempatan menunjukkan pemahaman tanpa hambatan yang tidak relevan dengan tujuan belajar."
        ]]
      ],
      reflection: "Ambil satu catatan perilaku yang biasa ditulis guru. Bisakah Anda mengubahnya menjadi deskripsi yang terukur dan bebas label?",
      quiz: [
        {q:"Catatan observasi yang paling berguna adalah…",o:["Anak malas","Anak berdiri 6 kali selama tugas 15 menit","Anak bermasalah"],c:1},
        {q:"Akomodasi berarti…",o:["Menurunkan semua target","Mengubah cara akses/respons tanpa menghapus tujuan belajar","Membiarkan anak tanpa tugas"],c:1},
        {q:"Instruksi yang membantu adalah…",o:["Singkat dan bertahap","Panjang agar lengkap","Beberapa perintah sekaligus"],c:0}
      ]
    },
    {
      title: "Remedial Teaching: Sedikit Target, Banyak Pengulangan, Tetap Bermakna",
      lede: "Narasumber menekankan remedial teaching sebagai inti pendampingan disleksia dan diskalkulia: latihan keterampilan dasar secara bertahap, sabar, dan konsisten.",
      sections: [
        ["Mulai dari Titik yang Benar", [
          "Dalam sesi tanya jawab, ketika anak kelas 3 belum mengenal huruf, langkah pertama bukan mengejar buku kelas 3, tetapi memetakan huruf A–Z yang sudah dan belum dikuasai. Setelah itu latihan bergerak dari huruf, bunyi, suku kata, kata, lalu kalimat. Prinsip yang sama berlaku pada matematika: mulai dari konsep yang benar-benar dikuasai, bukan sekadar mengikuti halaman buku.",
          "Remedial yang terlalu jauh dari kemampuan awal akan menghasilkan kegagalan baru. Remedial yang tepat dimulai pada titik yang membuat anak dapat berhasil dengan bantuan, kemudian bantuan dikurangi perlahan."
        ]],
        ["Gunakan Media dan Minat", [
          "Narasumber menyarankan flashcard dan puzzle huruf agar latihan tidak monoton. Media bukan tujuan, tetapi alat untuk meningkatkan keterlibatan dan memberi representasi yang lebih jelas. Gunakan kartu suku kata, huruf magnet, papan tulis kecil, gambar, balok angka, atau permainan sederhana.",
          "Minat anak dapat menjadi pintu masuk. Jika anak suka menggambar, biarkan ia menggambar lalu gunakan hasilnya untuk latihan kata dan kalimat. Jika menyukai kendaraan, gunakan nama kendaraan untuk latihan bunyi dan ejaan. Konten yang dekat dengan anak membantu latihan terasa lebih relevan."
        ]],
        ["Pengulangan Tanpa Membuat Anak Merasa Gagal", [
          "Sebagian keterampilan memerlukan pengulangan berbulan-bulan. Lama proses berbeda pada setiap anak. Karena itu, hindari janji waktu yang kaku. Ukur kemajuan dalam langkah kecil dan konsistensi, bukan hanya kecepatan mencapai standar kelas.",
          "Sesi singkat 10–20 menit yang konsisten sering lebih efektif daripada latihan panjang saat anak sudah lelah. Akhiri dengan keberhasilan yang dapat dirasakan: satu kata yang kini terbaca, satu huruf yang tidak lagi terbalik, atau satu operasi yang sudah dipahami."
        ], note("Formula praktis", "Petakan → pilih satu target → beri contoh → latihan singkat → umpan balik → ulangi → catat kemajuan → naikkan target secara bertahap.")]
      ],
      reflection: "Keterampilan dasar apa yang paling perlu diremedial? Tentukan satu target kecil untuk dua minggu, bukan sepuluh target sekaligus.",
      quiz: [
        {q:"Jika anak belum menguasai huruf dasar, remedial sebaiknya…",o:["Memulai dari pemetaan huruf","Memaksa paragraf kelasnya","Mengulang hukuman"],c:0},
        {q:"Remedial yang baik…",o:["Selalu panjang","Singkat, terstruktur, berulang, dan bertahap","Berbasis rasa malu"],c:1},
        {q:"Minat anak dapat digunakan untuk…",o:["Menjauh dari akademik","Menjadi pintu masuk latihan akademik","Menghapus target belajar"],c:1}
      ]
    },
    {
      title: "Kolaborasi dan Rujukan: Tahu Kapan Membantu, Tahu Kapan Meminta Bantuan",
      lede: "Pendampingan yang baik tidak menuntut guru atau orang tua menjadi ahli untuk semua hal. Yang dibutuhkan adalah pembagian peran, komunikasi yang jelas, data yang berguna, dan keberanian merujuk ketika kebutuhan anak melampaui kompetensi kita.",
      sections: [
        ["Guru, Orang Tua, dan Anak dalam Satu Arah", [
          "Sekolah membawa data dari situasi belajar; keluarga membawa informasi rutinitas rumah, riwayat perkembangan, tidur, kebiasaan, dan respons anak di luar sekolah. Anak sendiri membawa pengalaman yang sering tidak terlihat oleh orang dewasa. Ketiga sumber ini perlu didengar sebelum mengambil keputusan.",
          "Pertemuan sebaiknya dimulai dari kekuatan dan observasi, bukan tuduhan. Contoh: ‘Kami melihat Dika memahami cerita lisan dengan baik, tetapi masih kesulitan membaca suku kata tertentu. Kami ingin menyusun latihan yang sama di sekolah dan rumah.’ Bahasa seperti ini membuat kerja sama lebih mungkin."
        ]],
        ["Kapan Perlu Penilaian Profesional", [
          "Pertimbangkan rujukan ketika kesulitan belajar menetap meski dukungan terstruktur sudah diberikan, dampaknya besar pada fungsi, ada dugaan gangguan bahasa/perkembangan, perhatian dan impulsivitas sangat mengganggu, atau muncul masalah emosi yang berat.",
          "Rujukan dapat menuju dokter anak, psikolog, psikiater anak dan remaja, terapis wicara, terapis okupasi, atau profesional lain sesuai kebutuhan. Pemilihan profesional bergantung pada masalah yang hendak dinilai, bukan karena satu profesi menangani semua kondisi."
        ]],
        ["Sekolah Tetap Punya Peran Setelah Rujukan", [
          "Diagnosis atau terapi di luar sekolah tidak otomatis menyelesaikan masalah belajar di kelas. Sekolah tetap perlu menerjemahkan rekomendasi menjadi dukungan konkret: bentuk instruksi, beban tugas, cara evaluasi, strategi membaca, rutinitas, penguatan perilaku, atau monitoring.",
          "Tinjau dukungan secara berkala. Pertanyaan utamanya bukan ‘apakah anak sudah normal?’, tetapi ‘apakah akses belajarnya membaik, partisipasinya meningkat, emosinya lebih stabil, dan ia semakin mandiri?’"
        ], note("Batas penting", "Jangan menunda bantuan profesional ketika ada risiko keselamatan, agresi berat, penarikan diri ekstrem, kehilangan fungsi yang nyata, atau indikasi anak ingin menyakiti diri/orang lain.")]
      ],
      reflection: "Apakah sekolah Anda sudah memiliki alur sederhana: observasi → dukungan kelas → komunikasi keluarga → monitoring → rujukan bila diperlukan → tindak lanjut sekolah?",
      quiz: [
        {q:"Rujukan berarti sekolah sudah selesai bertanggung jawab.",o:["Benar","Salah","Benar jika ada diagnosis"],c:1},
        {q:"Pertemuan dengan keluarga sebaiknya dimulai dengan…",o:["Label dan ancaman","Kekuatan, observasi, dan tujuan kolaborasi","Daftar kesalahan anak"],c:1},
        {q:"Setelah rujukan, sekolah tetap perlu…",o:["Menerjemahkan rekomendasi menjadi dukungan kelas","Menunggu saja","Menyebarkan diagnosis"],c:0}
      ]
    }
  ];

  const assessment = [
    ["Anak kelas 2 sering menghindari membaca keras dan menebak-nebak kata. Respons awal guru adalah…",["Mempermalukan agar mau berusaha","Memetakan pola membaca dan keterampilan dasar","Langsung mendiagnosis disleksia"],2],
    ["Kesulitan membaca otomatis menunjukkan kecerdasan rendah.",["Benar","Salah","Hanya benar di SD"],2],
    ["Saat anak belum mengenal beberapa huruf, langkah remedial pertama adalah…",["Paragraf panjang","Pemetaan huruf yang dikuasai dan belum","Menambah PR"],2],
    ["Diskalkulia dapat melibatkan kesulitan…",["Konsep jumlah, angka, urutan, dan operasi","Warna seragam","Kemampuan olahraga"],1],
    ["Benda konkret pada pembelajaran matematika digunakan untuk…",["Membuat anak bergantung","Menghubungkan jumlah nyata dengan simbol","Menggantikan semua simbol selamanya"],2],
    ["Anak yang sangat aktif pasti ADHD.",["Benar","Salah","Benar jika laki-laki"],2],
    ["Observasi ADHD oleh guru yang berguna mencatat…",["Label","Situasi, frekuensi, durasi, dan dampak","Diagnosis klinis"],2],
    ["Instruksi untuk anak yang mudah terdistraksi sebaiknya…",["Singkat dan bertahap","Sekaligus lima perintah","Diberikan saat guru membelakangi anak"],1],
    ["Speech delay merupakan…",["Diagnosis pasti disleksia","Riwayat perkembangan yang dapat menjadi informasi tambahan","Bukti ADHD"],2],
    ["Jika anak kesulitan mengucapkan kata dengan benar, guru sebaiknya…",["Menertawakan","Memberi waktu dan memodelkan secara alami","Melarang bicara"],2],
    ["Kesulitan membedakan kanan-kiri…",["Dapat menjadi petunjuk kebutuhan latihan tetapi tidak spesifik satu diagnosis","Pasti disleksia","Pasti ADHD"],1],
    ["Rutinitas pagi yang sering kacau dapat dibantu dengan…",["Checklist visual","Ceramah panjang","Aturan yang berubah-ubah"],1],
    ["Menolak tugas selalu berarti malas.",["Benar","Salah","Benar jika tugas mudah"],2],
    ["Ketika anak marah dan memukul, urutan awal adalah…",["Amankan, turunkan intensitas, lalu bahas setelah tenang","Langsung ceramah panjang","Biarkan karena sedang emosi"],1],
    ["Catatan guru ‘malas’ sebaiknya diganti dengan…",["Deskripsi perilaku yang teramati","Label yang lebih keras","Diagnosis"],1],
    ["Akomodasi pembelajaran berarti…",["Menghapus semua target","Mengubah akses/respons agar tujuan dapat dicapai","Membiarkan tanpa tugas"],2],
    ["Remedial teaching yang baik umumnya…",["Bertahap, eksplisit, berulang, dan terukur","Selalu satu jam penuh","Berbasis hukuman"],1],
    ["Jika anak suka menggambar, minat itu dapat…",["Menjadi jembatan latihan membaca/menulis","Dilarang sampai lancar membaca","Tidak ada hubungan dengan belajar"],1],
    ["Kesulitan menetap meski dukungan kelas terstruktur sudah dilakukan. Langkah berikutnya…",["Pertimbangkan konsultasi/rujukan sesuai kebutuhan","Tambah hukuman","Abaikan"],1],
    ["Setelah anak dirujuk ke profesional, sekolah…",["Tetap memberikan dukungan pendidikan dan memonitor","Tidak perlu terlibat","Boleh menyebarkan hasil asesmen"],1]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi untuk menguji kemampuan membedakan gejala, menghindari label, serta memilih respons pembelajaran dan rujukan yang lebih tepat.</p><div class="card reveal">' +
    assessment.map(([question, options, correct]) =>
      '<div class="assess-q" data-correct="' + correct + '"><p>' + question + '</p>' +
      options.map(option => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + option + '</button>').join('') +
      '</div>'
    ).join('') +
    '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div>' +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => ["bab" + (index + 1), chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;

  window.BOOK_META = {
    number: 59,
    title: "Memahami Gangguan Perilaku Anak dan Cara Meresponnya",
    subtitle: "Mengenali Disleksia, Diskalkulia, ADHD, dan Cara Mendampingi Anak",
    chapterCount: chapters.length,
    videoId: ""
  };
})();
