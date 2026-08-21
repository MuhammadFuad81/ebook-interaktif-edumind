/* Konten eBook Interaktif 52 — Leadership Sekolah Islam */
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
      title: "Dari Tokoh Kuat Menuju Sistem yang Kuat",
      lede: "Sekolah yang sehat tidak lumpuh ketika kepala sekolah tidak berada di tempat. Arah tetap dipahami, keputusan rutin tetap berjalan, masalah tetap dilaporkan, dan mutu tetap dijaga. Inilah pergeseran pertama dalam leadership: dari menjadi pusat semua jawaban menuju membangun sistem yang membuat banyak orang mampu bertanggung jawab.",
      sections: [
        ["Tiga Hasil yang Harus Hadir Bersamaan", [
          "Tim yang solid memiliki rasa percaya, identitas bersama, serta kemampuan membicarakan perbedaan tanpa merusak hubungan. Namun keakraban saja tidak cukup. Sekolah dapat terasa seperti keluarga tetapi target pembelajaran terlambat, layanan tidak konsisten, dan keputusan selalu menunggu satu orang.",
          "Tim yang produktif mengubah waktu, tenaga, dan anggaran menjadi hasil yang bernilai bagi murid. Produktif bukan berarti agenda padat atau grup pesan selalu ramai. Ukurannya adalah prioritas selesai, mutu terjaga, kesalahan berkurang, dan pekerjaan penting tidak tenggelam oleh urusan mendesak.",
          "Tim yang bertahan lama tidak berarti semua orang harus menetap selamanya. Keberlanjutan terlihat ketika orang baik ingin tinggal, orang yang harus pergi meninggalkan alih tugas yang rapi, pengetahuan tidak hilang, dan muncul calon pemimpin baru. Solid, produktif, dan berkelanjutan adalah tiga sisi dari satu bangunan."
        ], note("Uji sederhana", "Jika hubungan hangat tetapi hasil lemah, tim belum produktif. Jika hasil tinggi tetapi orang kelelahan dan cepat pergi, tim belum berkelanjutan. Jika semuanya bergantung pada satu tokoh, organisasi belum menjadi sistem.")],
        ["Tim Bukan Sekadar Kumpulan Orang Hebat", [
          "Sekolah dapat merekrut guru berpengalaman, staf administrasi cekatan, dan koordinator yang cerdas, lalu tetap mengalami gesekan. Kinerja kolektif dipengaruhi oleh cara informasi bergerak, bagaimana keputusan dibuat, apakah peran saling bertabrakan, serta bagaimana tim merespons kesalahan dan ketidakpastian.",
          "Karena itu, pertanyaan pemimpin bukan hanya ‘siapa yang lemah?’, tetapi juga ‘sistem apa yang membuat orang baik sulit bekerja?’. Formulir ganda, rapat tanpa keputusan, instruksi yang berubah, persetujuan bertingkat, dan prioritas yang terlalu banyak dapat menurunkan kinerja tanpa ada satu orang pun yang malas.",
          "Budaya pun bukan slogan di dinding. Budaya adalah pola yang dipelajari tim dari kejadian berulang: siapa yang didengar, perilaku apa yang dibiarkan, apa yang terjadi ketika seseorang jujur tentang masalah, dan apakah pemimpin menjalankan standar yang ia tuntut dari orang lain."
        ]],
        ["Peran Pemimpin: Memberi Arah, Kondisi, dan Akuntabilitas", [
          "Pemimpin memberi arah dengan memilih sedikit prioritas dan menjelaskan alasan di baliknya. Ia membangun kondisi melalui struktur, sumber daya, ritme komunikasi, dan hubungan kerja yang memungkinkan orang menjalankan peran. Ia menjaga akuntabilitas dengan mengukur hasil, memberi umpan balik, serta mengambil keputusan ketika dukungan tidak menghasilkan perubahan.",
          "Ketiganya harus seimbang. Arah tanpa kondisi hanya menjadi tuntutan. Kondisi tanpa akuntabilitas melahirkan kenyamanan tanpa kemajuan. Akuntabilitas tanpa arah membuat orang sibuk mengejar angka yang tidak jelas manfaatnya.",
          "Dalam sekolah Islam, amanah kepemimpinan juga menuntut keadilan dan keteladanan. Nilai tersebut bukan tambahan setelah sistem selesai dibuat; ia menjadi cara sistem dirancang, dijalankan, dan dikoreksi."
        ]],
        ["Memulai dari Diagnosis Organisasi", [
          "Jangan memulai transformasi dengan daftar program. Mulailah dengan membaca kenyataan: keputusan apa yang selalu tersendat, peran mana yang kabur, pekerjaan apa yang terus diulang, siapa yang memikul beban tak terlihat, dan pada titik mana guru atau staf kehilangan energi.",
          "Kumpulkan bukti dari beberapa arah: data keterlambatan dan ketidakhadiran, penyelesaian program, mutu layanan, pergantian pegawai, survei singkat, wawancara individual, serta contoh alur kerja. Dengarkan suara orang yang biasanya diam, bukan hanya koordinator yang paling lancar berbicara.",
          "Diagnosis berakhir pada satu atau dua hambatan utama. Sekolah yang mencoba memperbaiki budaya, struktur, KPI, rekrutmen, rapat, dan kesejahteraan sekaligus biasanya hanya memindahkan kelelahan ke proyek perubahan."
        ]]
      ],
      reflection: "Jika Anda tidak hadir selama dua minggu, keputusan dan pekerjaan apa yang paling mungkin berhenti? Apa yang hal itu ungkapkan tentang ketergantungan tim pada satu orang?",
      quiz: [
        { q: "Tanda utama organisasi mulai menjadi sistem adalah…", o: ["Semua keputusan tetap menunggu pimpinan", "Arah, keputusan rutin, dan mutu tetap terjaga tanpa bergantung pada satu orang", "Rapat semakin banyak"], c: 1 },
        { q: "Tim sangat akrab tetapi prioritas sering tidak selesai. Kondisi ini menunjukkan…", o: ["Solid sudah cukup", "Keakraban belum berubah menjadi produktivitas", "Standar tidak diperlukan"], c: 1 },
        { q: "Diagnosis organisasi sebaiknya berakhir pada…", o: ["Semua masalah diperbaiki bersamaan", "Satu atau dua hambatan utama yang didukung data", "Program baru sebanyak mungkin"], c: 1 }
      ]
    },
    {
      title: "Mengubah Nilai Menjadi Perilaku Tim",
      lede: "Nilai sekolah baru hidup ketika orang dapat melihat bentuknya dalam keputusan sehari-hari. Amanah, adil, ihsan, musyawarah, dan saling menolong perlu diterjemahkan menjadi perilaku yang dapat dipelajari, diamati, dihargai, serta dikoreksi.",
      sections: [
        ["Dari Kata Besar ke Perilaku Kecil", [
          "‘Profesional’ terlalu luas jika setiap orang menafsirkannya sendiri. Terjemahkan menjadi contoh: hadir sebelum tugas dimulai, memberi kabar ketika terhambat, menyiapkan data sebelum rapat, menjaga kerahasiaan murid, serta menyelesaikan tindak lanjut pada waktu yang disepakati.",
          "Nilai amanah dapat berarti tidak menyembunyikan masalah, tidak mengubah data agar terlihat baik, dan menjaga barang serta waktu lembaga. Adil berarti standar berlaku konsisten, orang memahami alasan keputusan, dan ada ruang menyampaikan informasi sebelum kesimpulan dibuat.",
          "Semakin konkret perilakunya, semakin mudah tim melakukan pemeriksaan diri. Nilai tidak lagi menjadi bahan ceramah yang muncul ketika terjadi pelanggaran, melainkan bahasa kerja yang digunakan sebelum masalah terjadi."
        ], `<table><thead><tr><th>Nilai</th><th>Perilaku yang terlihat</th></tr></thead><tbody><tr><td>Amanah</td><td>Melaporkan risiko lebih awal dan menuntaskan komitmen</td></tr><tr><td>Adil</td><td>Menggunakan kriteria yang sama dan mendengar konteks</td></tr><tr><td>Ihsan</td><td>Memperbaiki mutu, bukan sekadar menggugurkan tugas</td></tr><tr><td>Musyawarah</td><td>Mengundang informasi sebelum keputusan, lalu jelas siapa yang memutuskan</td></tr><tr><td>Ta'awun</td><td>Membantu tanpa mengambil alih tanggung jawab orang lain</td></tr></tbody></table>`],
        ["Norma Tim yang Sedikit tetapi Dijaga", [
          "Tim tidak memerlukan puluhan aturan percakapan. Pilih norma yang paling menentukan, misalnya: kritik membahas pekerjaan, bukan pribadi; masalah disertai data awal; keputusan dicatat; ketidaksetujuan disampaikan di ruang yang tepat; dan orang yang berjanji memberi kabar jika tenggat terancam.",
          "Norma harus dilatih pada situasi nyata. Ketika rapat memanas, fasilitator mengingatkan cara berbeda pendapat. Ketika ada keputusan tanpa pemilik, seseorang bertanya siapa melakukan apa dan kapan. Kebiasaan kecil yang diulang membangun budaya lebih kuat daripada satu kegiatan kebersamaan tahunan.",
          "Pelanggaran norma tidak boleh hanya ditegur pada staf junior. Sekali pemimpin membiarkan orang berpengaruh mempermalukan kolega atau mengabaikan keputusan, tim mempelajari bahwa status lebih kuat daripada nilai."
        ]],
        ["Identitas Bersama tanpa Menyeragamkan", [
          "Rasa ‘kami’ tumbuh ketika orang memahami untuk siapa mereka bekerja dan bagaimana perannya berkontribusi. Guru, petugas kebersihan, administrasi, keamanan, pustakawan, dan pimpinan memiliki pekerjaan berbeda, tetapi semuanya membentuk pengalaman belajar murid.",
          "Identitas bersama tidak menuntut semua orang memiliki karakter, usia, atau cara berpikir yang sama. Perbedaan keahlian justru perlu agar tim tidak memiliki titik buta. Yang disatukan adalah tujuan, prinsip, dan aturan kerja—bukan selera pribadi.",
          "Tiga pengingat dapat membantu: identitas bersama, interaksi bermakna, dan investasi pada sesama. Forum lintas unit, pasangan belajar senior–junior, serta proyek kecil antarbagian membuat orang mengenal kontribusi kolega di luar stereotip jabatan."
        ]],
        ["Keteladanan adalah Pesan yang Paling Dipercaya", [
          "Tim memperhatikan bagaimana pemimpin menggunakan waktu, menanggapi kritik, mengakui kesalahan, dan memperlakukan orang yang tidak memiliki kuasa. Ketika ucapan dan tindakan bertentangan, tindakan selalu menjadi kurikulum budaya yang lebih kuat.",
          "Mengakui kesalahan tidak menghilangkan wibawa. Kalimat ‘keputusan saya kemarin membuat alur kerja tidak jelas; ini perbaikannya’ menunjukkan standar kejujuran dan memudahkan orang lain melaporkan kesalahan lebih awal.",
          "Namun keteladanan bukan tuntutan menjadi sempurna. Pemimpin yang sehat memiliki mekanisme umpan balik, batas kerja, dan tim yang dapat mengingatkan. Dengan begitu, nilai tidak bergantung pada suasana hati satu tokoh."
        ]]
      ],
      reflection: "Pilih satu nilai utama sekolah. Perilaku apa yang seharusnya terlihat ketika nilai itu benar-benar hidup, dan perilaku apa yang saat ini justru diberi toleransi?",
      quiz: [
        { q: "Cara paling kuat membuat nilai dapat diterapkan adalah…", o: ["Menambah slogan", "Menerjemahkannya menjadi perilaku yang dapat diamati", "Membiarkannya ditafsirkan sendiri"], c: 1 },
        { q: "Identitas bersama yang sehat berarti…", o: ["Semua orang harus sama", "Tujuan dan prinsip disatukan sambil keahlian tetap beragam", "Perbedaan harus dihindari"], c: 1 },
        { q: "Apa yang dipelajari tim ketika pelanggaran pemimpin dibiarkan?", o: ["Nilai berlaku konsisten", "Status lebih kuat daripada nilai", "Kesalahan tidak berpengaruh"], c: 1 }
      ]
    },
    {
      title: "Membangun Rasa Aman yang Tetap Tegas",
      lede: "Rasa aman psikologis adalah keyakinan bahwa seseorang dapat bertanya, mengakui kesalahan, meminta bantuan, atau menyampaikan ide tanpa dipermalukan. Ia bukan kebebasan dari standar, konsekuensi, atau percakapan sulit. Justru kejelasan dan keadilan membuat keberanian berbicara menjadi mungkin.",
      sections: [
        ["Mengapa Orang Memilih Diam", [
          "Dalam situasi sosial yang terasa mengancam, orang dapat melawan, menghindar, atau membeku. Di sekolah, bentuknya tidak selalu dramatis: membantah setiap instruksi, setuju di rapat tetapi tidak menjalankan, menunggu perintah sangat rinci, menyembunyikan kesalahan, atau berhenti mengusulkan ide.",
          "Penjelasan tentang otak dapat membantu mengingat bahwa ancaman sosial memengaruhi perhatian dan pengambilan keputusan. Namun kepemimpinan tidak perlu menyederhanakan semua perilaku menjadi satu bagian otak atau satu hormon. Yang dapat dikelola pemimpin adalah kondisi kerja: kejelasan, cara bicara, keadilan, beban, dan konsekuensi.",
          "Rasa aman penting karena masalah sekolah jarang membesar dalam satu malam. Ia membesar ketika tanda awal tidak dilaporkan. Tim yang berani berkata ‘data ini belum valid’, ‘saya belum paham’, atau ‘rencana ini berisiko’ memberi sekolah kesempatan memperbaiki sebelum dampaknya mengenai murid."
        ]],
        ["Formula S.A.F.E. sebagai Pemeriksaan Praktis", [
          "<strong>Standar jelas</strong>: orang mengetahui hasil, batas kewenangan, tenggat, dan definisi selesai. <strong>Adil dalam proses</strong>: kriteria konsisten, konteks didengar, dan keputusan dapat dijelaskan. Dua unsur ini membentuk ketegasan sistem.",
          "<strong>Fokus pada solusi</strong>: setelah fakta diamankan, energi diarahkan pada perbaikan saat ini dan pencegahan pengulangan. <strong>Empati</strong>: manusia di balik kesalahan didengar, tanpa menghapus dampak atau tanggung jawab. Dua unsur ini menjaga kemanusiaan.",
          "SAFE bukan teori ilmiah baku, melainkan alat bantu mengingat. Gunakan untuk memeriksa respons pemimpin: apakah standar sudah jelas, prosesnya adil, percakapan berorientasi solusi, dan orang tetap diperlakukan dengan hormat?"
        ], note("Bukan serba nyaman", "Jika hanya empati tanpa standar, tim dapat harmonis tetapi berkinerja rendah. Jika hanya standar tanpa empati dan keadilan, orang patuh di permukaan tetapi masalah tersembunyi. Rasa aman yang sehat menggabungkan keberanian bicara dengan akuntabilitas.")],
        ["Merespons Kesalahan tanpa Memburu Kambing Hitam", [
          "Pisahkan tiga jenis kejadian. Kesalahan manusia yang wajar memerlukan perbaikan sistem dan pembelajaran. Perilaku berisiko karena prosedur sulit dipakai memerlukan desain ulang serta coaching. Pelanggaran sadar atau berulang setelah dukungan memerlukan konsekuensi yang jelas. Menyamakan semuanya sebagai ‘kelalaian’ membuat respons tidak adil.",
          "Mulai percakapan dari fakta: apa yang terjadi, apa dampaknya, apa kondisi yang menyertai, dan apa yang sudah dilakukan. Hindari mempermalukan di grup atau rapat umum. Koreksi pribadi menjaga martabat; pembelajaran sistem dapat dibagikan tanpa membuka identitas yang tidak perlu.",
          "Setiap insiden perlu menghasilkan satu keputusan pencegahan: daftar cek, perubahan alur persetujuan, pelatihan, batas kewenangan, atau titik verifikasi baru. Jika kesalahan hanya diakhiri dengan nasihat, sekolah kehilangan kesempatan belajar."
        ]],
        ["Membuka Suara yang Tidak Terdengar", [
          "Pertanyaan umum ‘ada masukan?’ sering dijawab diam karena biaya sosial berbicara tidak merata. Gunakan putaran pendapat, pengumpulan ide tertulis, percakapan satu-satu, dan kesempatan memberi masukan sebelum rapat. Pemimpin menyampaikan pendapat terakhir agar tidak menjadi jangkar.",
          "Ketika seseorang mengangkat risiko, tanggapi dulu informasinya sebelum menilai orangnya: ‘Terima kasih, mari kita lihat datanya.’ Jika setiap pembawa masalah langsung mendapat tambahan pekerjaan atau dicap negatif, saluran laporan akan segera mati.",
          "Ukur rasa aman melalui perilaku, bukan perasaan nyaman semata: apakah masalah dilaporkan lebih dini, bantuan diminta, perbedaan muncul dalam rapat, kesalahan dipelajari, dan tindak lanjut benar-benar terjadi."
        ]]
      ],
      reflection: "Masalah apa yang kemungkinan diketahui anggota tim tetapi belum berani dibicarakan? Respons pemimpin seperti apa yang membuat mereka memilih diam?",
      quiz: [
        { q: "Rasa aman psikologis berarti…", o: ["Bebas dari standar", "Aman mengambil risiko interpersonal sambil tetap bertanggung jawab", "Semua ide harus diterima"], c: 1 },
        { q: "Respons pertama yang sehat saat risiko dilaporkan adalah…", o: ["Mencari siapa yang salah", "Mengamankan fakta dan menghargai keterbukaan", "Mengumumkan pelaku di grup"], c: 1 },
        { q: "Formula SAFE digunakan sebagai…", o: ["Hukum neurosains", "Alat bantu memeriksa kejelasan, keadilan, solusi, dan empati", "Pengganti prosedur disiplin"], c: 1 }
      ]
    },
    {
      title: "Merancang Struktur, Peran, dan Hak Keputusan",
      lede: "Banyak konflik yang tampak personal sebenarnya lahir dari arsitektur kerja yang kabur. Dua orang mengerjakan hal yang sama, pekerjaan penting tidak memiliki pemilik, dan keputusan berpindah-pindah karena wewenangnya tidak pernah dijelaskan.",
      sections: [
        ["Mulai dari Pekerjaan, Bukan Kotak Jabatan", [
          "Petakan alur penting sekolah: penerimaan murid, penyusunan jadwal, pembelajaran, penanganan keluhan, asesmen, keuangan, kegiatan, sarana, dan komunikasi orang tua. Untuk setiap alur, tanyakan siapa memulai, siapa mengerjakan, siapa memeriksa, siapa memutuskan, serta informasi apa yang harus berpindah.",
          "Struktur organisasi baru berguna jika mencerminkan pekerjaan nyata. Gelar koordinator tanpa waktu, wewenang, sumber daya, atau indikator hanya menambah lapisan. Sebaliknya, pekerjaan tak terlihat—mengingatkan, menyambungkan informasi, menenangkan konflik—perlu diakui dan dibagi.",
          "Perbarui deskripsi peran ketika proses berubah. Dokumen yang ditandatangani saat masuk kerja tetapi tidak pernah dipakai tidak memberi kejelasan. Ringkasan satu halaman yang hidup sering lebih berguna daripada uraian panjang yang tersimpan."
        ]],
        ["Empat Pertanyaan pada Setiap Keputusan", [
          "Siapa memberi masukan? Siapa membuat rekomendasi? Siapa memutuskan? Siapa menjalankan dan memantau? Empat pertanyaan ini mencegah musyawarah berubah menjadi rapat tanpa ujung atau keputusan sepihak tanpa informasi lapangan.",
          "Tidak semua keputusan perlu kolektif. Keputusan operasional yang berulang dapat didelegasikan dalam batas tertentu. Keputusan strategis, berisiko tinggi, menyangkut keselamatan, keuangan besar, atau reputasi memerlukan tingkat persetujuan berbeda. Batas tersebut ditulis sebelum krisis.",
          "Delegasi berarti memberi hasil yang diharapkan, ruang keputusan, sumber daya, titik pemeriksaan, dan konsekuensi. Menyerahkan tugas tanpa wewenang hanyalah memindahkan beban; menyerahkan wewenang tanpa batas dan pemantauan adalah pengabaian."
        ], `<table><thead><tr><th>Unsur delegasi</th><th>Pertanyaan</th></tr></thead><tbody><tr><td>Hasil</td><td>Apa yang harus berubah atau selesai?</td></tr><tr><td>Batas</td><td>Keputusan apa yang boleh dan tidak boleh diambil?</td></tr><tr><td>Sumber daya</td><td>Waktu, data, orang, dan anggaran apa yang tersedia?</td></tr><tr><td>Titik cek</td><td>Kapan kemajuan atau risiko ditinjau?</td></tr><tr><td>Akuntabilitas</td><td>Bagaimana mutu dan hasil dievaluasi?</td></tr></tbody></table>`],
        ["Kepercayaan Dibangun melalui Bukti Berulang", [
          "Kepercayaan tidak tumbuh dari slogan ‘kita keluarga’. Ia lahir dari transparansi, reliabilitas, usaha yang terlihat, kesabaran saat belajar, dan hubungan timbal balik. Akronim TRUST dapat dipakai sebagai pengingat, tetapi buktinya tetap perilaku sehari-hari.",
          "Transparansi berarti informasi penting tidak ditahan sebagai alat kuasa. Reliabilitas berarti janji kecil dipenuhi. Usaha terlihat melalui persiapan dan tindak lanjut. Kesabaran memberi ruang belajar tanpa menurunkan standar. Timbal balik berarti bantuan dan keterbukaan tidak hanya dituntut dari bawahan.",
          "Pimpinan tidak harus mempercayakan semua hal sekaligus. Berikan ruang bertahap, ukur, lalu perluas. Kepercayaan yang matang bukan buta; ia memiliki bukti, batas, dan mekanisme koreksi."
        ]],
        ["Menghubungkan Senior dan Junior", [
          "Guru senior membawa memori organisasi, kebijaksanaan konteks, dan pola yang telah teruji. Guru baru dapat membawa metode, teknologi, dan pertanyaan segar. Ketegangan muncul ketika senior takut tersisih dan junior takut dinilai belum pantas berbicara.",
          "Bangun pertukaran dua arah. Senior tidak hanya menjadi pengawas, melainkan mentor yang menjelaskan alasan di balik praktik. Junior tidak ditempatkan sebagai murid pasif, melainkan mitra yang membagikan keahlian baru. Tetapkan proyek atau observasi bersama dengan hasil yang konkret.",
          "Pimpinan menjaga agar penghormatan tidak berubah menjadi kekebalan dari evaluasi, dan semangat baru tidak berubah menjadi penolakan terhadap pengalaman. Martabat keduanya dijaga; gagasan dinilai dari manfaat dan bukti."
        ]]
      ],
      reflection: "Pilih satu keputusan yang sering terlambat. Siapa seharusnya memberi masukan, merekomendasikan, memutuskan, menjalankan, dan memantau?",
      quiz: [
        { q: "Struktur organisasi yang berguna dimulai dari…", o: ["Menambah gelar", "Memetakan pekerjaan dan alur keputusan nyata", "Menyalin bagan sekolah lain"], c: 1 },
        { q: "Delegasi yang benar mencakup…", o: ["Tugas tanpa wewenang", "Hasil, batas, sumber daya, titik cek, dan akuntabilitas", "Wewenang tanpa pemantauan"], c: 1 },
        { q: "Cara sehat menghubungkan senior dan junior adalah…", o: ["Membuat junior selalu diam", "Pertukaran keahlian dua arah dengan tujuan konkret", "Mengabaikan pengalaman senior"], c: 1 }
      ]
    },
    {
      title: "Merekrut Orang yang Tepat untuk Pekerjaan yang Nyata",
      lede: "Retensi dimulai sebelum seseorang bergabung. Rekrutmen yang tergesa, berbasis kesan, atau menjanjikan kenyataan yang tidak ada menghasilkan ketidakcocokan yang kemudian dibayar melalui konflik, beban tim, dan pergantian pegawai.",
      sections: [
        ["Rencana Tenaga Kerja sebelum Lowongan", [
          "Jangan otomatis mengganti orang dengan jabatan yang sama. Tinjau kebutuhan murid, rencana sekolah, beban aktual, kompetensi yang hilang, dan pekerjaan yang dapat disederhanakan. Kadang masalah bukan kekurangan orang, melainkan proses buruk yang menyerap waktu.",
          "Buat kartu peran: tujuan jabatan, lima sampai tujuh hasil utama, tugas penting, relasi kerja, jam dan kondisi, wewenang, kompetensi, serta ukuran keberhasilan enam bulan pertama. Pisahkan syarat wajib dari hal yang dapat dipelajari.",
          "Nilai kesesuaian terhadap pekerjaan dan nilai organisasi, bukan kesamaan latar atau gaya pribadi. ‘Cocok dengan budaya’ mudah menjadi alasan memilih orang yang mirip pewawancara. Yang dicari adalah perilaku amanah, mau belajar, dapat bekerja sama, dan mampu menjalankan tuntutan peran."
        ]],
        ["Seleksi yang Terstruktur dan Adil", [
          "Ajukan pertanyaan yang sama kepada kandidat untuk kompetensi yang sama, lalu gunakan rubrik jawaban. Pertanyaan perilaku meminta contoh masa lalu: ‘Ceritakan saat Anda harus mengakui kesalahan kepada tim.’ Pertanyaan situasional memberi kasus kerja: ‘Apa yang Anda lakukan jika orang tua menuntut jawaban sebelum data lengkap?’",
          "Gunakan lebih dari satu penilai bila memungkinkan, catat bukti sebelum berdiskusi, dan bedakan fakta dari kesan. Wawancara terstruktur meningkatkan konsistensi dibanding percakapan bebas yang mudah dipengaruhi kemiripan, kefasihan, atau kesan pertama.",
          "Tambahkan simulasi kerja yang singkat dan relevan: mengajar sebagian pelajaran, menyusun respons layanan, mengolah data sederhana, atau memprioritaskan beberapa kasus. Beri instruksi, waktu, dan kriteria yang sama. Jangan meminta pekerjaan besar yang sebenarnya bernilai komersial tanpa imbalan."
        ]],
        ["Menilai Kompetensi, Karakter Kerja, dan Potensi Tumbuh", [
          "Kompetensi teknis penting, tetapi sekolah juga membutuhkan cara kerja. Nilai kemampuan menerima umpan balik, kejujuran tentang batas diri, pengambilan keputusan, komunikasi, dan kolaborasi. Hindari mencoba ‘membaca kepribadian’ dari satu jawaban; cari bukti dari beberapa metode.",
          "Potensi tumbuh tampak dari cara kandidat belajar, bukan hanya jumlah sertifikat. Tanyakan keterampilan apa yang baru dipelajari, bagaimana memperoleh umpan balik, serta apa yang berubah dalam praktiknya. Jawaban yang baik memiliki contoh, proses, dan hasil.",
          "Pemeriksaan referensi dilakukan dengan persetujuan dan pertanyaan terkait pekerjaan. Verifikasi tanggung jawab, kekuatan, kebutuhan dukungan, serta kemungkinan direkrut kembali. Hindari pertanyaan pribadi yang tidak relevan atau berisiko diskriminatif."
        ]],
        ["Tampilkan Kenyataan, Bukan Hanya Daya Tarik", [
          "Kandidat perlu mengetahui gaji dan manfaat, jadwal, beban, masa percobaan, jalur pelaporan, standar, budaya komunikasi, serta tantangan nyata. Gambaran pekerjaan yang realistis dapat mengurangi kejutan setelah bergabung dan memberi kesempatan kandidat membuat keputusan bermartabat.",
          "Jangan menjual misi sebagai pengganti hak kerja yang wajar. Panggilan mendidik dan kompensasi bukan dua hal yang saling meniadakan. Keadilan, kejelasan, dan kemampuan lembaga memenuhi janji adalah bagian dari amanah.",
          "Keputusan akhir didokumentasikan berdasarkan kriteria. Jika kandidat kuat tidak dipilih, simpan alasan yang terkait peran. Rekrutmen yang tertib melindungi sekolah dari keputusan emosional dan membantu memperbaiki proses pada gelombang berikutnya."
        ]]
      ],
      reflection: "Pada rekrutmen terakhir, kriteria apa yang benar-benar memprediksi keberhasilan kerja dan bagian mana yang hanya berdasarkan kesan?",
      quiz: [
        { q: "Sebelum membuka lowongan, sekolah perlu…", o: ["Langsung menyalin iklan lama", "Meninjau pekerjaan, beban, dan kompetensi yang benar-benar dibutuhkan", "Menambah syarat sebanyak mungkin"], c: 1 },
        { q: "Keunggulan wawancara terstruktur adalah…", o: ["Semua kandidat dinilai dengan pertanyaan dan rubrik yang sebanding", "Pewawancara bebas menilai perasaan", "Tidak memerlukan bukti"], c: 0 },
        { q: "Gambaran pekerjaan realistis bertujuan untuk…", o: ["Menakuti kandidat", "Menyamakan harapan sebelum bergabung", "Menyembunyikan tantangan"], c: 1 }
      ]
    },
    {
      title: "Sembilan Puluh Hari Pertama yang Menentukan",
      lede: "Orang baru tidak cukup diberi seragam, jadwal, dan grup pesan. Ia perlu memahami tujuan, pekerjaan, relasi, cara meminta bantuan, dan ukuran keberhasilan. Orientasi yang baik mempercepat kontribusi sekaligus mencegah kebiasaan salah menjadi permanen.",
      sections: [
        ["Sebelum Hari Pertama", [
          "Siapkan kontrak dan administrasi, perangkat, akun, ruang kerja, jadwal, kontak penting, serta agenda minggu pertama. Beri informasi praktis tentang waktu hadir, pakaian, parkir, ibadah, makan, dan siapa yang menyambut. Ketidakjelasan kecil dapat menghabiskan energi orang baru.",
          "Tim menerima penjelasan tentang peran orang baru dan bagaimana pekerjaan akan beririsan. Hal ini mencegah dua ekstrem: orang baru dibiarkan mencari jalan sendiri atau justru segera dibebani semua pekerjaan yang lama tertunda.",
          "Tentukan pendamping yang memiliki waktu dan kecakapan membimbing. Mentor bukan polisi masa percobaan. Ia membantu memahami konteks, menjawab pertanyaan, menunjukkan praktik, dan menghubungkan orang baru dengan sumber bantuan."
        ]],
        ["Peta 30–60–90 Hari", [
          "Hari 1–30 berfokus pada memahami: tujuan sekolah, murid, peran, standar, sistem keselamatan, alur komunikasi, dan tugas inti. Orang baru mengamati, berlatih, serta menghasilkan beberapa kemenangan kecil dengan dukungan dekat.",
          "Hari 31–60 berfokus pada menjalankan: tanggung jawab meningkat, umpan balik lebih teratur, dan satu proyek kecil dimiliki. Kesenjangan kompetensi sudah dipetakan sehingga pelatihan tidak bersifat umum.",
          "Hari 61–90 berfokus pada memantapkan: orang bekerja lebih mandiri, meninjau hasil, menyampaikan usulan, dan menyepakati rencana pengembangan berikutnya. Keputusan akhir masa percobaan tidak boleh menjadi kejutan karena data dan percakapan telah berlangsung sejak awal."
        ], `<table><thead><tr><th>Fase</th><th>Fokus</th><th>Bukti kemajuan</th></tr></thead><tbody><tr><td>1–30</td><td>Memahami</td><td>Dapat menjelaskan peran, alur, dan standar</td></tr><tr><td>31–60</td><td>Menjalankan</td><td>Tugas inti selesai dengan umpan balik</td></tr><tr><td>61–90</td><td>Memantapkan</td><td>Lebih mandiri dan memiliki rencana tumbuh</td></tr></tbody></table>`],
        ["Ajarkan Budaya melalui Situasi", [
          "Jangan hanya memaparkan sejarah dan nilai. Gunakan kasus nyata: bagaimana melaporkan kesalahan data, merespons orang tua yang marah, meminta izin pembelian, menangani informasi rahasia, atau berbeda pendapat dengan koordinator.",
          "Orang baru perlu tahu aturan tertulis dan kebiasaan tak tertulis yang sehat. Jika praktik lapangan bertentangan dengan kebijakan, jangan sekadar berkata ‘nanti juga paham’. Perbaiki ketidaksesuaian agar ia tidak belajar bahwa aturan hanya formalitas.",
          "Pasangkan guru senior dan baru untuk pertukaran keahlian. Observasi berlangsung dua arah: satu pihak menunjukkan konteks dan praktik teruji, pihak lain membawa pertanyaan atau pendekatan baru. Hasilnya dicatat sebagai pembelajaran, bukan kompetisi generasi."
        ]],
        ["Percakapan Awal yang Tidak Ditunda", [
          "Lakukan check-in singkat setiap minggu pada bulan pertama: apa yang sudah jelas, apa yang membingungkan, dukungan apa yang kurang, dan risiko apa yang terlihat. Pertanyaan tersebut juga menguji kualitas sistem orientasi, bukan hanya kemampuan orang baru.",
          "Jika ada masalah kinerja, sebutkan sedini mungkin dengan contoh dan harapan. Menunggu sampai akhir masa percobaan dianggap ‘memberi kesempatan’, padahal orang kehilangan waktu untuk memperbaiki. Dukungan dan batas waktu dibuat eksplisit.",
          "Jika ketidakcocokan tetap besar setelah dukungan yang wajar, keputusan dilakukan tegas dan bermartabat. Menunda keputusan hanya memindahkan beban kepada murid dan kolega serta membuat standar organisasi kehilangan makna."
        ]]
      ],
      reflection: "Jika guru baru bergabung Senin depan, apa yang sudah siap dan apa yang saat ini masih bergantung pada inisiatif pribadinya?",
      quiz: [
        { q: "Fokus utama 30 hari pertama adalah…", o: ["Langsung bekerja sepenuhnya mandiri", "Memahami tujuan, peran, alur, dan standar", "Menilai rekan kerja"], c: 1 },
        { q: "Mengapa masalah kinerja perlu dibahas dini?", o: ["Agar orang dipermalukan", "Agar tersedia waktu dan dukungan untuk memperbaiki", "Agar masa percobaan dipercepat"], c: 1 },
        { q: "Mentor onboarding berperan sebagai…", o: ["Polisi masa percobaan", "Pendamping konteks, praktik, dan akses bantuan", "Pengganti atasan"], c: 1 }
      ]
    },
    {
      title: "Membangun Kinerja yang Jelas dan Adil",
      lede: "Orang sulit bertanggung jawab atas ukuran yang tidak mereka pahami. Sistem kinerja yang sehat menjelaskan hasil, proses, perilaku, dan pertumbuhan; menghubungkannya dengan peran; lalu menggunakan data untuk percakapan dan keputusan, bukan sekadar menghasilkan skor.",
      sections: [
        ["Empat Dimensi Kinerja", [
          "<strong>Hasil</strong> menjawab apa yang dicapai: kemajuan murid, ketuntasan program, ketepatan layanan, atau mutu dokumen. <strong>Proses</strong> melihat bagaimana pekerjaan dijalankan: perencanaan, disiplin, penggunaan waktu, keselamatan, dan kepatuhan pada prosedur penting.",
          "<strong>Perilaku dan kontribusi</strong> mencakup kejujuran, kolaborasi, komunikasi, inisiatif, serta dukungan kepada tim. <strong>Pertumbuhan</strong> melihat bagaimana seseorang belajar, menerapkan umpan balik, dan meningkatkan kapasitas.",
          "Bobot berbeda menurut peran. Guru tidak dinilai hanya dari dokumen administrasi atau nilai ujian; staf layanan tidak dinilai hanya dari kecepatan jika ketelitian dan keramahan hilang. Ukuran harus berada dalam pengaruh orang yang dinilai."
        ]],
        ["Sasaran yang Memiliki Makna", [
          "Hubungkan tugas dengan penerima manfaat dan dampak. Laporan kehadiran bukan sekadar berkas bulanan; ia membantu sekolah menemukan murid yang mulai kehilangan akses belajar. Rencana pelajaran bukan tumpukan format; ia membantu guru membuat keputusan pengajaran.",
          "Gunakan urutan NIAT sebagai pengingat: jelaskan <strong>niat</strong> atau tujuan, <strong>ikat</strong> pekerjaan dengan dampak, <strong>akui</strong> kemajuan dan kontribusi, lalu jalankan secara <strong>teratur</strong>. Ini alat komunikasi, bukan pengganti target dan data.",
          "Pecah sasaran besar menjadi sasaran kecil, sinyal kemajuan, dan sambutan tepat waktu—tiga unsur yang membantu orang melihat gerak. Kemajuan dekat menjaga perhatian, tetapi jangan mengubah pekerjaan bermakna menjadi permainan hadiah semata."
        ]],
        ["Indikator tanpa Perangkap Angka", [
          "Setiap indikator dapat mengubah perilaku. Jika guru hanya dihargai karena nilai tinggi, muncul risiko mengajar demi tes atau melonggarkan penilaian. Jika layanan hanya diukur dari kecepatan, kasus sulit dapat dihindari. Pasangkan ukuran kuantitas, kualitas, proses, dan umpan balik pengguna.",
          "Tetapkan sumber data, frekuensi, pemilik, dan ambang yang memicu tindakan. Bedakan indikator awal—misalnya kehadiran pelatihan dan observasi—dari hasil akhir seperti perubahan praktik atau pengalaman murid. Data yang tidak pernah digunakan sebaiknya tidak dikumpulkan.",
          "Sertakan ruang konteks. Angka memberi sinyal, bukan putusan otomatis. Kalibrasi antarpenilai diperlukan agar standar tidak berubah menurut kedekatan, gaya komunikasi, atau unit kerja."
        ], `<table><thead><tr><th>Dimensi</th><th>Contoh bukti</th></tr></thead><tbody><tr><td>Hasil</td><td>Perubahan belajar atau ketuntasan layanan</td></tr><tr><td>Proses</td><td>Perencanaan, ketepatan, keselamatan</td></tr><tr><td>Perilaku</td><td>Kejujuran, kolaborasi, kontribusi</td></tr><tr><td>Pertumbuhan</td><td>Penerapan umpan balik dan kompetensi baru</td></tr></tbody></table>`],
        ["Siklus Kinerja, Bukan Sidang Tahunan", [
          "Awal periode digunakan untuk menyepakati prioritas dan bukti. Check-in singkat membahas kemajuan, hambatan, dukungan, dan keputusan. Tinjauan tengah periode mengoreksi sasaran bila konteks berubah. Tinjauan akhir merangkum hasil dan langkah berikutnya.",
          "Orang yang dinilai membawa bukti dan refleksi. Atasan membawa observasi, data, serta contoh. Perbedaan persepsi dibahas berdasarkan pekerjaan. Hasil pertemuan adalah keputusan: pertahankan, kembangkan, koreksi, ubah beban, atau jalankan proses akuntabilitas.",
          "Sistem kinerja harus terhubung dengan pengembangan, pengakuan, promosi, dan bila perlu konsekuensi. Jika skor tidak pernah memengaruhi dukungan atau keputusan, tim segera menganggapnya ritual administrasi."
        ]]
      ],
      reflection: "Apakah ukuran kinerja di sekolah Anda benar-benar mewakili mutu dan dampak, atau justru mendorong orang mengejar aktivitas yang mudah dihitung?",
      quiz: [
        { q: "Sistem kinerja yang seimbang menilai…", o: ["Hasil saja", "Hasil, proses, perilaku, dan pertumbuhan", "Kedekatan dengan pimpinan"], c: 1 },
        { q: "Mengapa indikator perlu dipasangkan?", o: ["Agar formulir lebih panjang", "Agar satu angka tidak mendorong perilaku yang merusak mutu", "Agar semua peran sama"], c: 1 },
        { q: "Tinjauan kinerja yang baik berakhir pada…", o: ["Skor tanpa tindak lanjut", "Keputusan dan langkah berikutnya", "Perdebatan tentang kepribadian"], c: 1 }
      ]
    },
    {
      title: "Umpan Balik, Coaching, dan Akuntabilitas",
      lede: "Umpan balik yang baik tidak membuat orang menebak-nebak apakah dirinya dihargai atau sedang dihukum. Ia spesifik pada pekerjaan, dekat dengan kejadian, membuka dialog, dan berakhir pada langkah yang dapat dilakukan.",
      sections: [
        ["Bedakan Apresiasi, Umpan Balik, dan Evaluasi", [
          "Apresiasi mengakui kontribusi dan memperkuat perilaku bernilai. Umpan balik memberi informasi agar pekerjaan berikutnya lebih baik. Coaching membantu seseorang berpikir, mencoba, dan membangun kapasitas. Evaluasi membandingkan kinerja dengan standar untuk keputusan formal.",
          "Mencampur semuanya membuat percakapan kabur. Orang mengira sedang berdiskusi santai, lalu mendapati keputusan disiplin. Atau sebaliknya, masalah berulang terus dibahas sebagai coaching tanpa batas. Jelaskan tujuan percakapan sejak awal.",
          "Gunakan data yang cukup tetapi tidak menunggu sempurna. Observasi kelas, produk kerja, tenggat, umpan balik pengguna, dan refleksi pegawai dapat saling melengkapi. Hindari kesimpulan karakter dari satu kejadian."
        ]],
        ["Percakapan yang Spesifik dan Dua Arah", [
          "Mulai dari situasi dan perilaku yang dapat diamati, lalu jelaskan dampaknya: ‘Pada rapat Senin, data dikirim setelah keputusan dibuat sehingga jadwal harus diulang.’ Setelah itu dengarkan konteks dan sepakati perilaku berikutnya.",
          "Apresiasi tidak perlu dijadikan lapisan manis untuk menyamarkan kritik. Pujian yang tidak terkait dapat terasa manipulatif. Lebih baik jujur dan hormat: akui hal yang memang baik, sebutkan kesenjangan secara langsung, lalu bicarakan dukungan dan ekspektasi.",
          "Pertanyaan coaching membantu menemukan penyebab: hasil apa yang Anda inginkan, apa yang sudah dicoba, bagian mana yang berada dalam kendali Anda, dukungan apa yang diperlukan, dan tindakan pertama apa yang akan dilakukan? Pemimpin tetap boleh memberi arahan ketika risiko atau standar menuntut."
        ]],
        ["Pengakuan 3T: Tepat Waktu, Tepat Sasaran, Tepat Cara", [
          "Pengakuan paling kuat diberikan dekat dengan kontribusi, menyebutkan perilaku atau dampak, dan menggunakan cara yang sesuai. Ada orang yang menghargai ucapan pribadi, kesempatan belajar, tanggung jawab baru, waktu, atau pengakuan publik. Jangan menganggap semua orang menginginkan panggung.",
          "Hargai kontribusi yang tidak terlihat: administrasi rapi, ruang aman, sistem yang jarang gagal, pendampingan kolega, dan pencegahan masalah. Jika hanya pencapaian yang terlihat di depan umum yang dihargai, kerja fondasi kehilangan nilai.",
          "Pengakuan tidak menggantikan kompensasi yang adil, beban yang wajar, atau peluang karier. Ia menegaskan makna dan perilaku, bukan menutupi masalah struktural dengan sertifikat."
        ]],
        ["Ketika Dukungan Tidak Menghasilkan Perubahan", [
          "Definisikan kesenjangan, bukti, standar, dampak, dukungan yang telah diberikan, perubahan yang diminta, waktu, dan cara menilai. Dokumentasi melindungi semua pihak serta mencegah cerita berubah menurut ingatan.",
          "Periksa apakah masalah berasal dari keterampilan, kemauan, sumber daya, peran, kesehatan, atau desain kerja. Solusinya berbeda: pelatihan untuk kesenjangan keterampilan, kejelasan untuk peran kabur, penyesuaian untuk sumber daya, dan konsekuensi untuk pelanggaran sadar.",
          "Akuntabilitas bertahap harus konsisten dengan kebijakan dan ketentuan kerja yang berlaku. Jika setelah dukungan wajar dan kesempatan memperbaiki kinerja tetap tidak memadai, keputusan penempatan atau pemisahan dapat menjadi tindakan yang lebih adil daripada membiarkan murid dan tim menanggung akibat tanpa batas."
        ]]
      ],
      reflection: "Percakapan kinerja apa yang sedang Anda tunda? Fakta, dampak, harapan, dukungan, dan batas waktu apa yang perlu disiapkan?",
      quiz: [
        { q: "Umpan balik yang berguna terutama membahas…", o: ["Kepribadian", "Situasi, perilaku, dampak, dan langkah berikutnya", "Rumor tim"], c: 1 },
        { q: "Pengakuan 3T berarti…", o: ["Tepat waktu, sasaran, dan cara", "Tinggi, tegas, terus", "Terbuka, tertulis, tahunan"], c: 0 },
        { q: "Jika dukungan tidak menghasilkan perubahan, pemimpin perlu…", o: ["Mengabaikan agar harmonis", "Menjalankan akuntabilitas yang jelas dan terdokumentasi", "Mempermalukan di depan tim"], c: 1 }
      ]
    },
    {
      title: "Menciptakan Ritme Kolaborasi yang Produktif",
      lede: "Kolaborasi bukan banyaknya rapat, melainkan kualitas koordinasi dan pembelajaran bersama. Tim perlu ritme yang membedakan informasi, keputusan, pemecahan masalah, dan pengembangan praktik agar waktu pertemuan menghasilkan gerak.",
      sections: [
        ["Empat Jenis Pertemuan, Empat Tujuan", [
          "Pertemuan informasi menyamakan kabar dan sebaiknya banyak diganti dengan pembaruan tertulis. Pertemuan keputusan memilih arah setelah opsi dan data tersedia. Pertemuan pemecahan masalah mencari penyebab serta menguji solusi. Pertemuan belajar mengembangkan praktik melalui contoh, observasi, dan latihan.",
          "Satu rapat yang mencoba melakukan semuanya akan melompat-lompat. Tulis tujuan, keputusan yang dibutuhkan, peserta yang benar-benar relevan, bahan sebelum rapat, waktu tiap agenda, dan pemilik tindak lanjut.",
          "Akhiri dengan pembacaan keputusan: apa yang diputuskan, siapa mengerjakan, kapan selesai, siapa perlu tahu, dan kapan ditinjau. Notulen yang panjang tidak menggantikan daftar keputusan yang jelas."
        ]],
        ["Ruang untuk Kerja Fokus", [
          "Produktivitas menurun ketika hari terpecah oleh pesan, rapat, pergantian tugas, dan interupsi. Apa yang disebut multitasking sering kali adalah perpindahan perhatian yang memiliki biaya. Sekolah perlu melindungi blok waktu untuk perencanaan, penilaian, analisis, dan pekerjaan mendalam.",
          "Akronim ALIR dapat menjadi pemeriksaan: <strong>atur waktu</strong>, sesuaikan <strong>level tantangan</strong>, kurangi <strong>informasi</strong> yang tidak perlu, dan sediakan <strong>ruang</strong> tanpa gangguan. Ini bukan resep otak, melainkan desain kerja yang masuk akal.",
          "Tetapkan norma kanal: hal darurat melalui jalur tertentu, informasi rutin pada pembaruan terjadwal, keputusan di catatan resmi, dan pesan malam tidak menuntut jawaban kecuali telah disepakati. Keheningan digital adalah bagian dari kualitas kerja."
        ]],
        ["Komunitas Belajar yang Mengubah Praktik", [
          "Pelatihan satu kali jarang cukup. Pengembangan profesional yang kuat menghubungkan kebutuhan murid, pengetahuan baru, model praktik, latihan, umpan balik, penerapan, dan penguatan. Waktu kolaborasi guru digunakan untuk memeriksa karya murid dan keputusan pengajaran, bukan hanya agenda administrasi.",
          "Pilih fokus yang sempit dan cukup lama, misalnya kualitas pertanyaan kelas atau umpan balik tulisan. Guru melihat contoh, mencoba, saling mengobservasi dengan aturan aman, membawa bukti, lalu menyesuaikan. Tujuannya perbaikan praktik, bukan pertunjukan guru terbaik.",
          "Pemimpin memastikan jadwal, fasilitator, materi, dan tindak lanjut tersedia. Mengirim guru ke pelatihan tanpa kesempatan menerapkan hanya memindahkan tanggung jawab perubahan kepada individu."
        ]],
        ["Keputusan yang Tidak Hilang setelah Rapat", [
          "Gunakan log keputusan singkat: tanggal, keputusan, alasan, pemilik, pihak terdampak, dan waktu tinjau. Ketika konteks berubah, keputusan boleh diperbarui dengan jejak yang jelas. Hal ini mencegah tim mengulang perdebatan yang sama.",
          "Pantau sedikit komitmen penting. Papan tindak lanjut yang terlihat membuat hambatan muncul lebih dini. Status tidak hanya ‘selesai’ atau ‘belum’; gunakan ‘sesuai jalur’, ‘berisiko’, dan ‘terhambat’ agar bantuan dapat diberikan sebelum tenggat lewat.",
          "Jika tugas berulang tidak pernah selesai, periksa kapasitas, prioritas, dan kewenangan sebelum menyimpulkan kurang disiplin. Terkadang solusi terbaik adalah menghentikan pekerjaan yang nilainya rendah."
        ]]
      ],
      reflection: "Rapat mana yang dapat dihapus, dipersingkat, atau diubah menjadi pembaruan tertulis? Pertemuan mana yang justru perlu dilindungi untuk belajar dan memecahkan masalah?",
      quiz: [
        { q: "Rapat keputusan yang baik berakhir dengan…", o: ["Diskusi panjang", "Keputusan, pemilik, tenggat, komunikasi, dan waktu tinjau", "Notulen tanpa tindakan"], c: 1 },
        { q: "Mengapa blok kerja fokus diperlukan?", o: ["Karena perpindahan tugas berulang menghabiskan perhatian", "Agar komunikasi berhenti total", "Agar guru tidak berkolaborasi"], c: 0 },
        { q: "Pengembangan profesional yang kuat mencakup…", o: ["Seminar satu kali saja", "Model, latihan, penerapan, umpan balik, dan penguatan", "Sertifikat tanpa praktik"], c: 1 }
      ]
    },
    {
      title: "Mengelola Beban, Konflik, dan Pemulihan",
      lede: "Tim tidak bertahan karena diminta lebih tangguh menghadapi sistem yang melelahkan. Pemimpin perlu mengelola tuntutan, sumber daya, konflik, dan pemulihan sebagai bagian dari desain kerja—bukan menyerahkannya sepenuhnya kepada daya tahan pribadi.",
      sections: [
        ["Membaca Beban Kerja yang Sebenarnya", [
          "Beban bukan hanya jumlah jam. Ia mencakup volume, kerumitan, pergantian tugas, tuntutan emosi, ketidakpastian, pekerjaan tak terlihat, dan kurangnya kendali. Dua guru dengan jam sama dapat mengalami beban sangat berbeda karena komposisi kelas, tanggung jawab tambahan, atau kualitas dukungan.",
          "Lakukan audit musiman: tugas apa yang wajib, bernilai, dapat disederhanakan, didelegasikan, dijadwalkan ulang, atau dihentikan. Periksa puncak beban seperti penerimaan rapor, akreditasi, kegiatan besar, dan penerimaan murid agar sumber daya disiapkan lebih awal.",
          "Jangan mengobati beban struktural hanya dengan seminar manajemen stres. Pelatihan individu dapat membantu, tetapi organisasi tetap perlu memperbaiki pekerjaan, jadwal, staffing, peran, dan dukungan manajer."
        ]],
        ["PULIH sebagai Kebiasaan Organisasi", [
          "Gunakan PULIH sebagai pengingat praktis: <strong>penyeimbangan beban</strong>, <strong>usaha menjadwalkan istirahat</strong>, <strong>lingkungan yang mendukung</strong>, <strong>ikatan dan tawakal</strong>, serta <strong>harapan untuk terus bertumbuh</strong>. Akronim ini bukan alat diagnosis kesehatan mental.",
          "Istirahat adalah bagian dari sistem kinerja. Lindungi jeda, batasi pertemuan di luar jam, atur pengganti, dan cegah budaya membanggakan kelelahan. Waktu pemulihan yang teratur membantu mutu keputusan dan keberlanjutan usaha.",
          "Jika seseorang menunjukkan perubahan fungsi yang mengkhawatirkan, pemimpin mendengar, menjaga kerahasiaan, meninjau penyesuaian yang mungkin, dan mengarahkan pada bantuan yang kompeten. Pemimpin bukan terapis dan tidak mendiagnosis."
        ]],
        ["Konflik sebagai Data", [
          "Konflik tugas dapat memperbaiki keputusan jika orang membahas data dan pilihan. Konflik relasi menjadi merusak ketika serangan pribadi, koalisi, sindiran, atau pengucilan menggantikan pembahasan pekerjaan. Pemimpin perlu membedakan keduanya.",
          "Mulai dengan percakapan terpisah untuk memahami fakta dan kepentingan, lalu pertemukan pihak jika aman. Sepakati masalah yang hendak diselesaikan, dampak, kebutuhan kerja, pilihan, komitmen, dan waktu tinjau. Jangan memaksa rekonsiliasi semu demi terlihat harmonis.",
          "Perilaku perundungan, pelecehan, diskriminasi, ancaman, atau risiko keselamatan mengikuti prosedur formal; bukan diselesaikan sebagai salah paham biasa. Rasa aman juga berarti organisasi berani memberi batas."
        ]],
        ["Disiplin yang Adil dan Bermartabat", [
          "Proses disiplin memerlukan standar yang telah diketahui, fakta yang diperiksa, kesempatan memberi penjelasan, konsistensi, proporsionalitas, dokumentasi, serta jalur tindak lanjut. Keputusan tidak boleh bergantung pada kedekatan atau reputasi lama saja.",
          "Bedakan niat, dampak, frekuensi, dan respons setelah koreksi. Kesalahan pertama yang diakui berbeda dari pelanggaran berulang yang disembunyikan. Namun dampak serius tetap perlu ditangani walau niatnya baik.",
          "Pemulihan hubungan dapat dilakukan setelah akuntabilitas, bukan sebagai pengganti. Permintaan maaf, perbaikan kerugian, perubahan alur, dan kesepakatan perilaku membantu tim kembali bekerja tanpa menutup-nutupi kejadian."
        ]]
      ],
      reflection: "Tugas atau kebiasaan organisasi apa yang paling banyak menyerap energi tetapi paling sedikit memberi nilai? Apa yang dapat dihentikan atau didesain ulang?",
      quiz: [
        { q: "Beban kerja mencakup…", o: ["Jam kerja saja", "Volume, kompleksitas, emosi, interupsi, kendali, dan dukungan", "Jumlah rapat saja"], c: 1 },
        { q: "Respons organisasi terhadap kelelahan sebaiknya…", o: ["Hanya meminta individu lebih tangguh", "Memperbaiki desain kerja sekaligus menyediakan dukungan", "Mengabaikan karena bagian profesi"], c: 1 },
        { q: "Kasus ancaman atau pelecehan harus…", o: ["Dianggap salah paham", "Mengikuti prosedur formal dan keselamatan", "Diselesaikan lewat rekreasi tim"], c: 1 }
      ]
    },
    {
      title: "Membangun Karier, Pengakuan, dan Retensi",
      lede: "Orang bertahan karena gabungan faktor: pekerjaan bermakna, kepemimpinan yang dapat dipercaya, kondisi dan kompensasi yang adil, relasi profesional, kemampuan mengendalikan sebagian pekerjaannya, serta masa depan yang dapat dibayangkan.",
      sections: [
        ["Retensi Bukan Menahan Semua Orang", [
          "Tujuan retensi adalah menjaga orang yang berkinerja dan selaras, memperbaiki kondisi yang mendorong kepergian yang dapat dicegah, serta membangun alih pengetahuan. Pergantian tertentu sehat; menahan orang yang terus merusak standar juga memiliki biaya besar.",
          "Pisahkan pergantian sukarela dan tidak sukarela, orang berprestasi dan berkinerja rendah, masa kerja, unit, manajer, alasan, serta waktu kejadian. Angka rata-rata dapat menyembunyikan bahwa guru baru pergi pada tahun pertama atau satu unit kehilangan orang baik berulang kali.",
          "Pantau sinyal awal: ketidakhadiran meningkat, kontribusi menurun, konflik tak selesai, permintaan pindah, penolakan peluang tumbuh, atau komentar bahwa masa depan tidak jelas. Sinyal mengundang percakapan, bukan tuduhan tidak loyal."
        ]],
        ["Stay Interview sebelum Exit Interview", [
          "Lakukan percakapan bertahan secara berkala: bagian pekerjaan apa yang membuat Anda ingin tinggal, apa yang menguras energi, kapan terakhir kali Anda mempertimbangkan pergi, kemampuan apa yang ingin dikembangkan, dan satu perubahan realistis apa yang paling membantu.",
          "Jangan menjanjikan hal yang tidak dapat dipenuhi. Catat pola, bedakan kebutuhan individual dan sistemik, lalu beri kabar tindak lanjut. Meminta masukan tanpa perubahan atau penjelasan justru menurunkan kepercayaan.",
          "Exit interview tetap berguna bila aman dan rahasia. Bandingkan jawaban dengan data lain karena orang yang pergi mungkin menahan kritik atau sebaliknya sedang sangat kecewa. Cari pola lintas kasus."
        ]],
        ["Karier Tidak Harus Selalu Menjadi Jabatan", [
          "Guru unggul tidak harus meninggalkan kelas untuk bertumbuh. Sediakan jalur keahlian: mentor, perancang kurikulum, fasilitator belajar, pemimpin proyek, peneliti praktik, atau koordinator bidang dengan waktu dan pengakuan yang jelas.",
          "Buat percakapan karier tahunan yang membahas aspirasi, kekuatan, bukti kesiapan, pengalaman yang diperlukan, dan dukungan. Promosi berdasarkan kedekatan atau sekadar masa kerja melemahkan keadilan; promosi hanya berdasarkan kinerja teknis juga berisiko jika kemampuan memimpin belum diuji.",
          "Kesempatan belajar dibagi secara transparan. Pelatihan, proyek strategis, dan akses pimpinan adalah sumber daya karier. Jika selalu diberikan kepada orang yang sama, sekolah menciptakan lingkaran ketimpangan potensi."
        ]],
        ["Kompensasi, Pengakuan, dan Keadilan", [
          "Kompensasi harus dipandang serius sesuai kemampuan dan tata kelola lembaga. Bandingkan peran, beban, kompetensi, masa kerja, dan kondisi pasar; jelaskan struktur serta proses peninjauan. Misi tidak boleh dipakai untuk menutup ketidakjelasan atau ketidakadilan.",
          "Manfaat nonfinansial—fleksibilitas, pengembangan, dukungan, otonomi, jadwal, pengakuan—bernilai, tetapi tidak otomatis menggantikan kebutuhan ekonomi. Dengarkan kelompok pegawai yang berbeda karena prioritas hidup tidak sama.",
          "Pengakuan diberikan tepat waktu, tepat sasaran, dan tepat cara. Rayakan hasil sekaligus proses etis, kolaborasi, perbaikan, dan kontribusi tak terlihat. Tim belajar dari apa yang secara konsisten dihargai."
        ], `<table><thead><tr><th>Pendorong bertahan</th><th>Pertanyaan audit</th></tr></thead><tbody><tr><td>Kepemimpinan</td><td>Apakah atasan adil, jelas, dan mendukung?</td></tr><tr><td>Pekerjaan</td><td>Apakah beban, otonomi, dan alatnya masuk akal?</td></tr><tr><td>Pertumbuhan</td><td>Apakah masa depan profesional terlihat?</td></tr><tr><td>Penghargaan</td><td>Apakah kontribusi dan kompensasi diperlakukan adil?</td></tr><tr><td>Keterikatan</td><td>Apakah orang merasa memiliki suara dan tempat?</td></tr></tbody></table>`]
      ],
      reflection: "Siapa orang baik yang paling berisiko pergi dalam dua belas bulan ke depan? Apa buktinya, dan percakapan apa yang perlu dilakukan sekarang?",
      quiz: [
        { q: "Retensi yang sehat bertujuan untuk…", o: ["Menahan semua orang", "Menjaga orang baik, memperbaiki kondisi, dan memastikan alih pengetahuan", "Menghapus semua pergantian"], c: 1 },
        { q: "Stay interview dilakukan untuk…", o: ["Menginterogasi loyalitas", "Memahami alasan bertahan, penguras energi, aspirasi, dan perubahan yang membantu", "Menunda kenaikan gaji"], c: 1 },
        { q: "Jalur karier guru sebaiknya…", o: ["Hanya menjadi kepala sekolah", "Juga menyediakan jalur keahlian dan kepemimpinan praktik", "Ditentukan kedekatan"], c: 1 }
      ]
    },
    {
      title: "Regenerasi dan Peta Jalan Sembilan Puluh Hari",
      lede: "Kepemimpinan selesai bukan ketika pemimpin memiliki banyak pengikut, tetapi ketika organisasi memiliki lebih banyak orang yang mampu memimpin. Regenerasi mengubah pengetahuan pribadi menjadi kapasitas bersama dan membuat pergantian tidak menjadi krisis.",
      sections: [
        ["TUMBUH: Membangun Kader melalui Pekerjaan", [
          "Gunakan TUMBUH sebagai pengingat: beri <strong>tantangan bertahap</strong>, <strong>umpan balik</strong>, <strong>mentoring</strong>, <strong>budaya evaluasi</strong>, <strong>uswah atau keteladanan</strong>, dan <strong>harapan</strong> berupa ruang kontribusi berikutnya. Regenerasi terjadi dalam pekerjaan, bukan menunggu jabatan kosong.",
          "Petakan peran kritis dan minimal dua calon yang dapat dikembangkan. Kesiapan bukan label permanen; ia dibuktikan melalui proyek, simulasi keputusan, fasilitasi rapat, pendampingan orang, dan hasil yang dapat ditinjau.",
          "Calon pemimpin perlu belajar mengelola konflik, data, prioritas, anggaran, komunikasi, dan perubahan—bukan hanya unggul mengajar. Beri ruang keputusan bertahap serta umpan balik dari orang yang dipimpinnya."
        ]],
        ["Dokumentasi yang Menjaga Memori", [
          "Identifikasi pengetahuan yang hanya berada di kepala satu orang: kontak, jadwal, alasan keputusan, trik sistem, risiko musiman, atau hubungan penting. Ubah menjadi peta proses, daftar cek, templat, log keputusan, dan catatan pembelajaran.",
          "Dokumentasi harus dipakai dalam pekerjaan. Dokumen yang tidak pernah diuji dapat terasa lengkap tetapi gagal saat dibutuhkan. Minta orang lain menjalankan proses dari panduan, lalu perbaiki bagian yang masih bergantung pada penjelasan lisan.",
          "Lakukan alih peran sebelum orang pergi melalui shadowing, kerja bersama, dan reverse shadowing—pengganti menjalankan sementara pemegang lama mengamati. Jaga akses dan keamanan data ketika peran berubah."
        ]],
        ["Audit Kesehatan Tim", [
          "Gunakan sembilan lensa materi sebagai papan pemeriksaan, bukan skor ilmiah: SAFE untuk rasa aman, TRUST untuk kepercayaan, 3I untuk keterikatan, NIAT untuk makna, 3S untuk kemajuan, ALIR untuk fokus, 3T untuk pengakuan, PULIH untuk resiliensi, dan TUMBUH untuk regenerasi.",
          "Pilih beberapa pernyataan perilaku untuk setiap lensa dan minta tim menilai secara anonim disertai contoh. Bandingkan persepsi pimpinan, guru, dan tenaga kependidikan. Selisih besar sering lebih informatif daripada rata-rata.",
          "Jangan mengubah audit menjadi survei tahunan tanpa tindak lanjut. Bagikan temuan utama, pilih prioritas, jelaskan apa yang dapat dan belum dapat dilakukan, tetapkan pemilik, serta ukur perubahan."
        ], `<table><thead><tr><th>Lensa</th><th>Pertanyaan inti</th></tr></thead><tbody><tr><td>SAFE</td><td>Beranikah orang menyampaikan masalah?</td></tr><tr><td>TRUST &amp; 3I</td><td>Apakah janji, hubungan, dan identitas bersama kuat?</td></tr><tr><td>NIAT, 3S, ALIR</td><td>Apakah kerja bermakna, terarah, dan fokus?</td></tr><tr><td>3T &amp; PULIH</td><td>Apakah kontribusi diakui dan beban dapat dipulihkan?</td></tr><tr><td>TUMBUH</td><td>Apakah orang dan calon pemimpin berkembang?</td></tr></tbody></table>`],
        ["Rencana Aksi 30–60–90 Hari", [
          "Hari 1–30: dengarkan dan petakan. Kumpulkan data tim, pilih satu hambatan, definisikan perilaku dan hasil yang ingin berubah, serta bentuk kelompok kecil yang mewakili pihak terdampak. Jangan menjanjikan transformasi sebelum memahami alur kerja.",
          "Hari 31–60: uji dan belajar. Terapkan perubahan pada lingkup terbatas—misalnya log keputusan, check-in onboarding, satu siklus kinerja, atau blok kerja fokus. Pantau mutu pelaksanaan, beban tambahan, hambatan, dan pengalaman tim.",
          "Hari 61–90: tetapkan dan perluas. Bandingkan data awal, perbaiki desain, dokumentasikan cara kerja, tetapkan pemilik sistem, dan putuskan apakah dihentikan, diulang, atau diperluas. Sampaikan hasil dengan jujur, termasuk hal yang belum berhasil."
        ]],
        ["Warisan Pemimpin", [
          "Pemimpin yang membangun sistem tidak membuat dirinya tidak penting. Ia mengalihkan nilai kepemimpinan dari menjadi pemadam semua masalah menjadi perancang konteks, pengembang orang, penjaga nilai, dan pengambil keputusan yang memang tidak dapat didelegasikan.",
          "Tanda warisan kepemimpinan adalah tim mampu belajar tanpa takut, menjaga standar tanpa diawasi terus-menerus, menyelesaikan konflik tanpa merusak martabat, serta melahirkan pemimpin yang lebih baik—bahkan jika gaya mereka berbeda.",
          "Dream team bukan tujuan yang sekali dicapai. Ia perjalanan pemeliharaan: membaca kondisi, memperbaiki sistem, menguatkan hubungan, dan menyiapkan generasi berikutnya."
        ]]
      ],
      reflection: "Jika Anda meninggalkan peran enam bulan lagi, pengetahuan, keputusan, dan hubungan apa yang paling berisiko hilang? Siapa yang perlu mulai dilibatkan sekarang?",
      quiz: [
        { q: "Regenerasi paling efektif terjadi melalui…", o: ["Menunggu jabatan kosong", "Tantangan bertahap, mentoring, umpan balik, dan ruang keputusan", "Menunjuk tanpa persiapan"], c: 1 },
        { q: "Dokumentasi proses dianggap teruji ketika…", o: ["Dokumennya panjang", "Orang lain dapat menjalankan proses dan memberi umpan balik", "Disimpan oleh pimpinan"], c: 1 },
        { q: "Fokus hari 31–60 dalam peta jalan adalah…", o: ["Menguji perubahan pada lingkup terbatas dan belajar", "Mengumumkan keberhasilan", "Mengganti semua sistem"], c: 0 }
      ]
    }
  ];

  const assessment = [
    ["Sekolah berjalan baik hanya ketika kepala sekolah hadir. Masalah inti paling mungkin adalah…", ["Tim terlalu akrab", "Keputusan dan pengetahuan belum menjadi sistem", "Guru kurang mengikuti seminar"], 2],
    ["Tim kompak dan saling membantu, tetapi program prioritas sering tidak selesai. Apa diagnosis paling tepat?", ["Tim solid tetapi belum produktif", "Tim harus dibuat kurang akrab", "Retensi sudah cukup"], 1],
    ["Cara terbaik membuat nilai amanah dapat dikelola adalah…", ["Menambah slogan", "Mendefinisikan perilaku seperti melaporkan risiko dan menuntaskan komitmen", "Menyerahkan maknanya pada tiap orang"], 2],
    ["Guru mengakui kesalahan data sebelum rapor dibagikan. Respons awal pemimpin sebaiknya…", ["Mempermalukan agar jera", "Mengamankan fakta, menghargai keterbukaan, lalu memperbaiki dan mencegah", "Mengabaikan karena sudah jujur"], 2],
    ["Rasa aman psikologis yang sehat ditandai oleh…", ["Tidak ada konsekuensi", "Orang berani bicara dan standar tetap jelas", "Semua keputusan dibuat bersama"], 2],
    ["Dua koordinator saling menyalahkan karena satu tugas terlewat. Pemeriksaan sistem pertama adalah…", ["Siapa yang lebih senior", "Pemilik tugas, alur informasi, dan hak keputusan", "Siapa yang paling emosional"], 2],
    ["Delegasi sudah diberikan, tetapi pegawai tetap meminta izin pada setiap langkah. Apa yang mungkin kurang?", ["Hasil, batas wewenang, dan titik pemeriksaan belum jelas", "Pegawai harus dibiarkan tanpa arahan", "Semua keputusan harus kembali ke pimpinan"], 1],
    ["Dalam seleksi, sekolah ingin mengurangi bias kesan pertama. Praktik terbaik adalah…", ["Wawancara bebas", "Pertanyaan terstruktur, rubrik, lebih dari satu bukti", "Memilih kandidat yang paling mirip tim"], 2],
    ["Kandidat guru pandai berbicara tetapi belum menunjukkan kemampuan mengajar. Tambahan bukti terbaik adalah…", ["Jumlah pengikut media sosial", "Simulasi mengajar dengan kriteria yang sama", "Kesan pewawancara"], 2],
    ["Pada hari ke-20, pegawai baru masih tidak memahami alur pelaporan. Respons paling tepat adalah…", ["Menunggu evaluasi hari ke-90", "Perjelas alur, praktikkan, dan cek pemahaman sekarang", "Menyimpulkan tidak cocok"], 2],
    ["Sistem kinerja guru hanya mengukur kelengkapan dokumen. Risiko utamanya adalah…", ["Dokumen terlalu rapi", "Ukuran tidak mewakili mutu pembelajaran, perilaku, dan pertumbuhan", "Guru menjadi terlalu mandiri"], 2],
    ["Indikator kecepatan layanan meningkat tetapi kesalahan data juga meningkat. Langkah yang tepat adalah…", ["Menaikkan target kecepatan", "Memasangkan ukuran kecepatan dengan kualitas dan meninjau proses", "Menghapus semua indikator"], 2],
    ["Umpan balik ‘Anda kurang profesional’ lemah karena…", ["Terlalu singkat", "Tidak menyebut situasi, perilaku, dampak, dan langkah berikutnya", "Tidak diberikan di depan umum"], 2],
    ["Masalah kinerja berulang setelah standar, dukungan, dan waktu perbaikan jelas. Pemimpin perlu…", ["Terus coaching tanpa batas", "Menjalankan proses akuntabilitas yang konsisten dan terdokumentasi", "Memindahkan masalah diam-diam"], 2],
    ["Rapat mingguan dipenuhi pembacaan informasi yang sudah tertulis. Perbaikan terbaik adalah…", ["Memperpanjang rapat", "Pindahkan informasi ke pembaruan tertulis dan gunakan rapat untuk keputusan atau masalah", "Menambah peserta"], 2],
    ["Guru kesulitan menyelesaikan perencanaan karena pesan dan rapat memecah hari. Solusi sistemik adalah…", ["Meminta guru multitasking", "Melindungi blok fokus dan menata kanal komunikasi", "Menambah pengingat"], 2],
    ["Tim lelah menjelang akreditasi. Respons organisasi yang utuh adalah…", ["Seminar motivasi saja", "Audit beban, prioritas, sumber daya, jadwal pemulihan, dan dukungan", "Menyebut kelelahan sebagai kurang ikhlas"], 2],
    ["Konflik melibatkan ancaman dan perundungan. Cara penanganan yang tepat adalah…", ["Mediasi informal saja", "Prosedur formal, keselamatan, fakta, dan perlindungan pihak terdampak", "Kegiatan kebersamaan"], 2],
    ["Guru unggul ingin bertumbuh tetapi tidak ingin menjadi kepala sekolah. Sekolah dapat…", ["Menganggapnya tidak ambisius", "Menyediakan jalur mentor, fasilitator, perancang, atau pemimpin proyek", "Menambah tugas tanpa pengakuan"], 2],
    ["Tujuan utama regenerasi adalah…", ["Membuat pemimpin lama tidak diperlukan", "Membangun kapasitas, alih pengetahuan, dan kesiapan pemimpin baru", "Menunjuk penerus berdasarkan kedekatan"], 2]
  ];

  const assessmentHtml = `
    <p class="eyebrow reveal">Evaluasi Akhir</p>
    <h2 class="reveal">Asesmen Komprehensif</h2>
    <p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan membaca sistem, membangun rasa aman, mengelola kinerja, serta menjaga keberlanjutan tim.</p>
    <div class="card reveal">
      ${assessment.map(([question, options, correct]) => `<div class="assess-q" data-correct="${correct}"><p>${question}</p>${options.map(option => `<button class="quiz-opt" onclick="selectAssessAnswer(this)">${option}</button>`).join("")}</div>`).join("")}
      <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button>
      <div class="assess-result" id="asesmenResult"></div>
    </div>
    <div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;

  window.BOOK_CONTENT = Object.fromEntries(chapters.map((data, index) => [`bab${index + 1}`, chapter(index + 1, data)]));
  window.BOOK_CONTENT.asesmen = assessmentHtml;
  window.BOOK_META = {
    number: 52,
    title: "Leadership Sekolah Islam",
    subtitle: "Membangun Tim Guru dan Tenaga Kependidikan yang Solid, Produktif, dan Bertahan Lama",
    chapterCount: chapters.length,
    videoId: "B4IjjEkImbg"
  };
})();
