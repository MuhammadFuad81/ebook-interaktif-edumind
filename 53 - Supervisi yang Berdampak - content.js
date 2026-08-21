/* Konten eBook Interaktif 53 — Supervisi yang Berdampak */
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
    '<div class="card reveal">' + data.sections.map(section).join("") + "</div>" +
    '<div class="reflect-box reveal"><h3>Refleksi</h3><p>' + data.reflection +
    '</p><textarea placeholder="Tulis pengamatan atau rencana Anda di sini..."></textarea></div>' +
    miniQuiz(data.quiz) +
    '<button class="done-btn" id="doneBtn-bab' + number + '" onclick="markDone(\'bab' + number + '\')">✓ Tandai Bab Ini Selesai</button>' +
    '<p class="seal" id="seal-bab' + number + '">✓ Bab ' + number + " selesai dibaca</p>" +
    '<div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';

  const chapters = [];

  chapters.push(
    {
      title: "Dari Inspeksi ke Pembelajaran",
      lede: "Supervisi kehilangan daya ketika kunjungan kelas hanya menghasilkan skor, tanda tangan, dan kecemasan. Ia mulai berdampak ketika sekolah menggunakannya untuk menjawab satu pertanyaan yang lebih penting: perubahan apa pada praktik mengajar yang akan membuat murid belajar lebih baik?",
      sections: [
        ["Murid adalah Alasan Utama", [
          "Supervisi sering dibicarakan seolah-olah pusatnya adalah guru dan supervisor. Padahal keduanya sedang bekerja untuk pihak ketiga yang tidak boleh hilang dari pandangan: murid. Kehadiran observer, instrumen, dan percakapan setelah kelas baru bernilai jika membantu guru membuat keputusan pembelajaran yang lebih tepat.",
          "Karena itu, supervisi tidak cukup menanyakan apakah guru membuka pelajaran, menggunakan media, atau menutup dengan rangkuman. Ia juga perlu melihat siapa yang benar-benar berpikir, siapa yang hanya mengikuti, miskonsepsi apa yang muncul, seberapa merata kesempatan berpartisipasi, dan bukti apa yang menunjukkan tujuan belajar mulai tercapai.",
          "Perpindahan fokus ini mengubah bahasa percakapan. Alih-alih 'guru tidak aktif berkeliling', bukti dapat berbunyi 'tiga kelompok menunggu bantuan lebih dari enam menit dan dua kelompok berhenti bekerja'. Catatan kedua memberi jalan menuju tindakan; catatan pertama mudah terasa sebagai penilaian pribadi."
        ]],
        ["Tiga Fungsi yang Tidak Boleh Disamarkan", [
          "Sekolah dapat mengamati kelas untuk pengembangan profesional, penjaminan standar, atau keputusan kinerja formal. Ketiganya sah, tetapi tidak identik. Supervisi formatif membantu guru mencoba dan belajar; evaluasi sumatif membuat keputusan tentang pencapaian standar; pemeriksaan kepatuhan memastikan kewajiban penting dipenuhi.",
          "Masalah muncul ketika sekolah menyebut sebuah proses sebagai coaching, tetapi catatannya diam-diam dipakai untuk sanksi. Guru akan belajar bahwa keterbukaan berbahaya. Sebaliknya, masalah serius tidak boleh terus diperlakukan sebagai percakapan pengembangan tanpa batas. Tujuan, pihak yang mengakses data, dan kemungkinan konsekuensi perlu dijelaskan sejak awal.",
          "Satu sekolah boleh menghubungkan ketiga fungsi tersebut dalam sistem kinerja, namun jalur dan dokumennya dibuat terang. Ruang latihan sebaiknya memiliki perlindungan yang cukup agar orang berani mencoba; jalur formal perlu standar, bukti beragam, kesempatan menjelaskan konteks, dan keputusan yang adil."
        ], note("Pertanyaan pembuka", "Sebelum membuat jadwal, selesaikan kalimat ini: 'Siklus supervisi kali ini diperlukan karena kami ingin memperbaiki … pada pengalaman belajar murid.' Jika jawabannya hanya 'karena sudah masuk semester baru', tujuan belum cukup kuat.")],
        ["Dari Seremoni Menuju Dampak", [
          "Supervisi seremonial biasanya memiliki pola yang mudah dikenali: jadwal diumumkan, guru menyiapkan kelas terbaiknya, observer mengisi instrumen panjang, hasil disimpan, dan kehidupan kelas kembali seperti semula. Aktivitas selesai, tetapi tidak ada kebiasaan mengajar yang berubah.",
          "Penyebabnya sering bukan kurangnya niat. Fokus terlalu luas, supervisor kekurangan waktu, indikator tidak jelas, umpan balik tertunda, dukungan tidak tersedia, dan observasi ulang tidak dijadwalkan. Sistem mengukur kehadiran kegiatan, bukan mutu siklus.",
          "Dampak perlu ditelusuri sebagai rantai: apakah guru memahami temuan, mencoba strategi, menjalankannya dengan cukup baik, dan melihat perbedaan pada partisipasi, pemahaman, kualitas karya, atau kemandirian murid. Satu siklus kecil yang lengkap lebih bernilai daripada banyak kunjungan yang berhenti pada skor."
        ]]
      ],
      reflection: "Jika seluruh dokumen supervisi tahun lalu hilang, perubahan praktik apa yang tetap dapat Anda tunjukkan? Apa yang jawaban itu ungkapkan tentang dampak sistem saat ini?",
      quiz: [
        { q: "Pusat perhatian supervisi yang berdampak adalah…", o: ["Kelengkapan instrumen", "Hubungan antara praktik mengajar dan belajar murid", "Penampilan kelas saat dinilai"], c: 1 },
        { q: "Mengapa fungsi formatif dan sumatif perlu dijelaskan?", o: ["Agar guru memahami penggunaan bukti dan konsekuensinya", "Agar instrumen semakin panjang", "Agar semua observasi menjadi rahasia"], c: 0 },
        { q: "Tanda supervisi masih seremonial adalah…", o: ["Ada observasi ulang", "Kunjungan selesai tanpa dukungan dan perubahan praktik", "Fokus disepakati bersama"], c: 1 }
      ]
    },
    {
      title: "Kepercayaan Sebelum Instrumen",
      lede: "Instrumen terbaik tidak dapat menyelamatkan proses yang dipercaya sebagai jebakan. Sebelum meminta guru membuka pintu kelas, sekolah perlu membangun kepastian tentang tujuan, aturan main, kerahasiaan, dan cara memperlakukan orang ketika ditemukan kesenjangan.",
      sections: [
        ["Ancaman Mengubah Perilaku", [
          "Ketika observasi terasa mengancam, guru akan melakukan hal yang paling masuk akal untuk melindungi diri: memilih materi yang paling aman, melatih murid untuk tampil, menyembunyikan kesulitan, atau menunggu instruksi rinci. Supervisor kemudian melihat pertunjukan yang rapi, bukan praktik yang perlu dipahami.",
          "Kepercayaan bukan berarti semua temuan harus menyenangkan. Ia tumbuh ketika proses dapat diprediksi: kriteria diketahui, konteks didengar, data tidak disebarkan sembarangan, kekuatan diakui tanpa menutupi masalah, dan komitmen ditindaklanjuti oleh kedua pihak.",
          "Pemimpin dapat memulai dengan membuka kelasnya sendiri atau mendampingi observasi sejawat secara sukarela. Keteladanan tersebut memberi pesan bahwa dilihat saat bekerja bukan tanda kelemahan, melainkan bagian normal dari profesi yang terus belajar."
        ]],
        ["Protokol yang Menjaga Martabat", [
          "Tuliskan protokol singkat: siapa dapat menjadi observer, apa yang diamati, berapa lama, di mana catatan disimpan, siapa dapat membacanya, bagaimana guru merespons, dan kapan data dihapus atau diringkas. Untuk jalur formal, jelaskan juga proses keberatan dan tindak lanjut.",
          "Umpan balik individual diberikan secara privat. Pola sekolah dapat dibahas dalam forum bersama setelah diolah dan dianonimkan. Kalimat seperti 'banyak kelas membutuhkan penguatan pemeriksaan pemahaman' membangun agenda belajar; menyebut nama dan kekurangan seseorang di rapat umum mengubah supervisi menjadi peringatan sosial.",
          "Kerahasiaan bukan alasan menutupi risiko keselamatan, kekerasan, atau pelanggaran serius. Protokol perlu menyebut batasnya: informasi tertentu harus diteruskan melalui jalur perlindungan yang sah. Guru berhak mengetahui batas itu sebelum observasi berlangsung."
        ]],
        ["Adil, Konsisten, dan Kontekstual", [
          "Proses yang adil menggunakan standar inti yang konsisten, tetapi membaca konteks. Kelas awal, laboratorium, tahfiz, pendidikan jasmani, dan pembelajaran daring tidak harus tampak sama. Yang dicari adalah kualitas keputusan dan respons belajar dalam tujuan masing-masing.",
          "Keadilan juga berarti tidak menyimpulkan kinerja dari satu kunjungan. Hari tertentu dapat dipengaruhi gangguan teknis, kondisi murid, perubahan jadwal, atau materi yang memang sulit. Bukti dari perencanaan, observasi, karya murid, refleksi, dan pengamatan ulang membentuk gambaran yang lebih wajar.",
          "Supervisor perlu memeriksa biasnya sendiri. Gaya bicara yang mirip, kelas yang tenang, media yang menarik, atau guru yang percaya diri mudah dianggap sebagai mutu. Kalibrasi dengan contoh, catatan bersama, dan pembahasan perbedaan skor membantu mengurangi penilaian berdasarkan selera."
        ]],
        ["Kesepakatan Kerja Supervisi", [
          "Satu halaman dapat memuat tujuan siklus, peran, fokus, bukti, jadwal, cara memberi umpan balik, penggunaan data, dan bentuk dukungan. Tambahkan norma: deskripsikan sebelum menilai, tanyakan sebelum menyimpulkan, bahas pekerjaan bukan harga diri, akui ketidakpastian, dan akhiri dengan keputusan.",
          "Kepercayaan akhirnya diuji oleh tindakan. Jika supervisor berjanji mengirim contoh strategi, ia harus mengirimkannya. Jika guru menyepakati satu percobaan, ia perlu menjalankannya atau memberi kabar ketika terhambat. Konsistensi kecil membangun kredibilitas lebih kuat daripada slogan keterbukaan."
        ]]
      ],
      reflection: "Apa yang saat ini belum diketahui guru tentang penggunaan catatan supervisi? Ketidakjelasan mana yang paling mungkin membuat mereka memilih bermain aman?",
      quiz: [
        { q: "Guru menampilkan pelajaran yang sangat berbeda dari keseharian karena takut dinilai. Ini menunjukkan…", o: ["Observasi berhasil", "Ancaman membuat bukti kurang autentik", "Guru perlu instrumen lebih panjang"], c: 1 },
        { q: "Data individual supervisi sebaiknya…", o: ["Dibahas dengan nama di rapat", "Dijaga aksesnya; pola agregat dapat dipakai untuk belajar bersama", "Dikirim ke semua guru"], c: 1 },
        { q: "Kalibrasi observer berguna untuk…", o: ["Menyamakan semua gaya mengajar", "Mengurangi bias dan menyamakan pemaknaan kriteria", "Menghapus kebutuhan konteks"], c: 1 }
      ]
    },
    {
      title: "Menentukan Fokus dari Bukti Belajar",
      lede: "Supervisi yang mencoba melihat semuanya biasanya tidak benar-benar melihat apa pun. Fokus yang baik cukup sempit untuk diamati, cukup penting bagi murid, dan cukup mungkin diperbaiki dalam satu siklus.",
      sections: [
        ["Mulai dari Pertanyaan, Bukan Formulir", [
          "Instrumen seharusnya lahir setelah sekolah mengetahui apa yang ingin dipelajari. Mungkin murid dapat menjawab soal rutin tetapi sulit menjelaskan alasan; diskusi kelompok didominasi beberapa anak; atau umpan balik guru belum membantu revisi. Masalah nyata itu menjadi pintu masuk.",
          "Gunakan beberapa sumber: hasil asesmen, sampel karya, kehadiran, catatan perilaku, suara murid yang dikumpulkan secara aman, rencana pembelajaran, dan pengalaman guru. Satu angka memberi sinyal; gabungan bukti membantu menemukan pola dan menghindari diagnosis terburu-buru.",
          "Rumuskan fokus sebagai pertanyaan yang dapat diselidiki, misalnya: 'Bagaimana strategi pemeriksaan pemahaman membantu guru menemukan murid yang belum menguasai konsep sebelum latihan mandiri?' Pertanyaan seperti ini mengarahkan mata observer dan percakapan setelahnya."
        ]],
        ["Dokumen adalah Jejak Keputusan", [
          "Rencana pembelajaran, modul, asesmen, bahan ajar, dan catatan kemajuan penting karena memperlihatkan keputusan sebelum kelas. Namun kelengkapan administrasi tidak otomatis menjamin pembelajaran bermutu, dan dokumen sederhana tidak otomatis berarti guru mengajar buruk.",
          "Baca dokumen secara fungsional: tujuan apa yang diprioritaskan, bagaimana guru mengetahui pengetahuan awal, tugas apa yang menghasilkan bukti, dukungan apa yang disiapkan, dan bagaimana tindak lanjut direncanakan. Pertanyaan tersebut lebih bermakna daripada menghitung jumlah lampiran.",
          "Bandingkan rencana dengan kejadian kelas tanpa menuntut ketaatan buta. Guru yang responsif mungkin mengubah alur karena bukti menunjukkan murid belum siap. Yang penting adalah alasan profesional dan dampaknya, bukan sekadar kesamaan antara kertas dan pelaksanaan."
        ]],
        ["Prioritas Sekolah dan Kebutuhan Individu", [
          "Sekolah membutuhkan bahasa mutu bersama. Misi, kurikulum, kebutuhan murid, dan hasil evaluasi dapat menghasilkan dua atau tiga prioritas, misalnya literasi lintas mata pelajaran, pembelajaran inklusif, atau kualitas pertanyaan. Fokus bersama memudahkan pembelajaran kolektif.",
          "Di saat yang sama, guru memiliki tahap perkembangan dan konteks berbeda. Seorang guru baru mungkin perlu struktur pengelolaan transisi; guru berpengalaman ingin meneliti dialog bernalar; guru yang berpindah jenjang perlu memahami karakter murid. Sisakan ruang untuk tujuan individual.",
          "Dalam sekolah Islam, nilai lembaga dapat menjadi lensa jika diterjemahkan ke pengalaman belajar: adab dalam dialog, keadilan partisipasi, kejujuran intelektual, tanggung jawab, atau kepedulian. Hindari menjadikan integrasi nilai sekadar sisipan kutipan yang tidak memengaruhi cara murid berpikir dan bertindak."
        ]],
        ["Menguji Kualitas Fokus", [
          "Fokus yang layak memenuhi lima syarat: relevan bagi murid, berada dalam pengaruh guru, terlihat dalam bukti, dapat dipelajari dalam waktu tersedia, dan memiliki pilihan tindakan. 'Meningkatkan kualitas pembelajaran' terlalu luas; 'meningkatkan pemerataan respons melalui waktu berpikir dan cara memilih penjawab' lebih operasional.",
          "Jangan memilih fokus hanya karena mudah dihitung. Jumlah media atau variasi aktivitas dapat terlihat ramai tanpa memperdalam belajar. Tanyakan mekanismenya: mengapa perilaku ini diharapkan membantu murid, dan bukti apa yang akan membenarkan atau menggoyahkan dugaan itu?",
          "Catat kondisi awal sebelum intervensi. Baseline sederhana—misalnya distribusi penjawab, persentase murid yang dapat menjelaskan konsep, atau kualitas dua sampel karya—membantu sekolah membedakan perasaan kemajuan dari perubahan yang benar-benar dapat dilihat."
        ]]
      ],
      reflection: "Pilih satu masalah belajar murid yang sering Anda bicarakan. Bisakah masalah itu diubah menjadi pertanyaan observasi yang sempit, terlihat, dan berada dalam pengaruh guru?",
      quiz: [
        { q: "Fokus supervisi yang paling berguna adalah…", o: ["Meningkatkan pembelajaran secara umum", "Memeriksa bagaimana pertanyaan guru mengungkap pemahaman murid", "Mengisi seluruh indikator"], c: 1 },
        { q: "Dokumen perencanaan terutama dibaca sebagai…", o: ["Bukti jumlah pekerjaan", "Jejak keputusan pembelajaran yang perlu dibandingkan dengan kelas", "Pengganti observasi"], c: 1 },
        { q: "Mengapa kondisi awal perlu dicatat?", o: ["Agar laporan lebih tebal", "Agar perubahan dapat dibandingkan dengan bukti sebelumnya", "Agar semua guru memiliki skor sama"], c: 1 }
      ]
    },
    {
      title: "Instrumen yang Melihat Hal Penting",
      lede: "Instrumen bukan tujuan supervisi. Ia adalah alat untuk menjaga perhatian, merekam bukti, dan memberi bahasa bersama. Ketika terlalu panjang atau kabur, instrumen justru membuat observer sibuk mengisi sambil kehilangan kelas yang sedang berlangsung.",
      sections: [
        ["Dari Konsep ke Indikator Terlihat", [
          "Kata seperti 'aktif', 'menarik', 'menguasai kelas', atau 'berpusat pada murid' mudah disepakati tetapi sulit dinilai secara konsisten. Pecah menjadi perilaku dan bukti: guru memberi waktu berpikir, meminta alasan, memeriksa beberapa kelompok murid, menanggapi miskonsepsi, dan menyesuaikan langkah berikutnya.",
          "Tuliskan indikator dari hubungan tindakan dan respons. Bukan hanya 'guru memberi pertanyaan tingkat tinggi', melainkan 'pertanyaan mendorong murid menjelaskan alasan, membandingkan strategi, atau menggunakan bukti'. Dengan begitu, observer tidak menganggap pertanyaan rumit otomatis menghasilkan pemikiran bermutu.",
          "Batasi jumlah indikator inti. Lima sampai delapan indikator yang dipahami dan diamati dengan baik sering lebih berguna daripada puluhan butir yang semuanya diberi centang. Komponen lain dapat menjadi modul pilihan sesuai fokus."
        ]],
        ["Rubrik yang Memiliki Jangkar", [
          "Skala angka tanpa deskripsi hanya memindahkan subjektivitas ke dalam kotak. Setiap tingkat rubrik memerlukan jangkar yang menggambarkan kualitas berbeda. Bedakan misalnya: pemeriksaan hanya pada sukarelawan; pemeriksaan pada sampel murid; bukti digunakan untuk menyesuaikan pengajaran.",
          "Jangkar tidak harus menggambarkan satu gaya ideal. Ia menyebut fungsi dan mutu, sehingga guru dapat mencapainya melalui metode yang sesuai mata pelajaran dan murid. Hindari indikator yang menghargai kebisingan, teknologi, atau dekorasi tanpa hubungan dengan belajar.",
          "Sediakan pilihan 'tidak teramati' dan ruang konteks. Tidak semua indikator muncul pada setiap potongan pelajaran. Memaksa skor ketika bukti tidak ada membuat data terlihat lengkap tetapi menyesatkan."
        ]],
        ["Catatan Deskriptif Sebelum Skor", [
          "Catatan yang kuat menjawab apa, kapan, siapa, dan responsnya. Contoh: '08.17—guru bertanya mengapa penyebut harus sama; empat murid mengangkat tangan; penjawab memberi aturan tanpa alasan; guru melanjutkan ke soal berikutnya.' Catatan ini dapat dibahas dari berbagai sudut.",
          "Pisahkan kolom bukti dan tafsir. 'Dua murid berbicara selama instruksi' adalah deskripsi; 'murid tidak termotivasi' adalah tafsir. Tafsir boleh dibuat setelah bukti dikumpulkan dan diuji melalui refleksi guru atau sumber lain.",
          "Gunakan peta kelas, tally partisipasi, garis waktu, sampel pertanyaan, atau catatan kelompok terpilih sesuai fokus. Instrumen sederhana yang tepat sasaran mengurangi beban dan membuat percakapan lebih konkret."
        ]],
        ["Uji Coba dan Kalibrasi", [
          "Sebelum dipakai luas, dua observer dapat menonton cuplikan yang sama, mencatat sendiri, lalu membandingkan bukti dan alasan skor. Perbedaan menunjukkan indikator kabur, jangkar kurang jelas, atau bias yang perlu dibahas.",
          "Uji juga kegunaan bagi guru. Apakah bahasa mudah dipahami? Apakah catatan membantu memilih tindakan? Apakah proses menghasilkan beban tidak perlu? Revisi instrumen setelah beberapa siklus; jangan mempertahankan butir hanya karena sudah lama ada.",
          "Data observasi tidak lebih akurat dari kesiapan observer. Pelatihan perlu mencakup praktik mencatat, membedakan bukti dan tafsir, memahami konteks materi serta murid, mengelola percakapan, dan mengenali batas kewenangan."
        ], '<table><thead><tr><th>Komponen</th><th>Pertanyaan mutu</th></tr></thead><tbody><tr><td>Indikator</td><td>Apakah perilakunya dapat dilihat?</td></tr><tr><td>Jangkar</td><td>Apakah tingkat kualitas dapat dibedakan?</td></tr><tr><td>Bukti</td><td>Apakah catatan cukup spesifik untuk diuji?</td></tr><tr><td>Konteks</td><td>Apakah ada ruang untuk hal yang tidak teramati?</td></tr><tr><td>Tindakan</td><td>Apakah hasilnya membantu memilih langkah berikut?</td></tr></tbody></table>']
      ],
      reflection: "Ambil satu indikator dalam instrumen sekolah. Apakah dua observer akan memahami dan mencatatnya dengan cara yang sama? Bukti seperti apa yang seharusnya terlihat?",
      quiz: [
        { q: "Indikator 'pembelajaran menarik' lemah karena…", o: ["Terlalu pendek", "Tidak menjelaskan perilaku dan bukti yang dapat diamati", "Tidak memakai angka"], c: 1 },
        { q: "Pilihan 'tidak teramati' diperlukan agar…", o: ["Observer dapat menghindari pekerjaan", "Skor tidak dipaksakan saat bukti memang tidak muncul", "Guru selalu lulus"], c: 1 },
        { q: "Kalibrasi dilakukan dengan cara…", o: ["Menyamakan gaya mengajar", "Membandingkan catatan dan alasan skor pada bukti yang sama", "Menghapus semua perbedaan"], c: 1 }
      ]
    }
  );

  chapters.push(
    {
      title: "Program yang Dapat Dijalankan",
      lede: "Program supervisi bukan daftar tanggal kunjungan. Ia adalah arsitektur keputusan yang menghubungkan tujuan, orang, waktu, bukti, percakapan, dukungan, dan observasi ulang tanpa mengabaikan etika serta kapasitas sekolah.",
      sections: [
        ["Mulai dari Peta Siklus", [
          "Gambarkan satu siklus lengkap: diagnosis kebutuhan, penetapan fokus, praobservasi, observasi, analisis bukti, percakapan umpan balik, tindakan pengembangan, dan peninjauan ulang. Tentukan keluaran minimal pada setiap tahap agar proses tidak berhenti di tengah.",
          "Frekuensi mengikuti tujuan dan kapasitas, bukan angka yang dianggap berlaku untuk semua sekolah. Perubahan kecil mungkin memerlukan kunjungan singkat berulang; evaluasi formal memerlukan bukti lebih luas dan jadwal tertentu. Yang penting, setiap guru memperoleh perhatian yang wajar dan tindak lanjut yang nyata.",
          "Bangun kalender yang realistis terhadap ujian, rapor, penerimaan murid, hari besar, dan beban supervisor. Menumpuk semua observasi menjelang akhir semester membuat umpan balik terlambat dan tindak lanjut kehilangan ruang."
        ]],
        ["Peran, Wewenang, dan Kompetensi", [
          "Kepala sekolah tidak harus mengamati semua kelas sendirian. Wakil, koordinator, guru inti, dan rekan sejawat dapat terlibat jika perannya jelas, memiliki kompetensi, menjaga kerahasiaan, dan tidak berada dalam konflik kepentingan yang merusak proses.",
          "Bedakan siapa mengelola program, siapa mengobservasi, siapa memberi dukungan, siapa menyimpan data, dan siapa membuat keputusan formal. Satu orang dapat memegang beberapa peran di sekolah kecil, tetapi pergantian peran perlu disebutkan agar guru memahami jenis percakapannya.",
          "Supervisor pun memerlukan supervisi. Tinjau mutu catatan, keadilan skor, kualitas percakapan, ketepatan rekomendasi, dan kemampuan menutup siklus. Jabatan tidak otomatis membuat seseorang terampil mengembangkan praktik orang lain."
        ]],
        ["Data yang Cukup dan Aman", [
          "Kumpulkan hanya data yang diperlukan. Skor, catatan kelas, karya murid, dan rekaman dapat memuat informasi tentang guru serta anak. Tetapkan tujuan, dasar kewenangan, akses, penyimpanan, masa retensi, dan cara pemusnahan sebelum pengumpulan.",
          "Rekaman video bukan jalan pintas yang netral. Ia dapat membantu refleksi diri dan kalibrasi, tetapi membutuhkan keterbukaan kepada pihak terkait, pengamanan perangkat dan akun, pembatasan salinan, serta perlindungan identitas murid. Pertimbangkan sudut kamera atau penyamaran jika wajah dan suara anak tidak diperlukan.",
          "Jangan menggunakan grup percakapan umum sebagai arsip bukti sensitif. Sekolah perlu tempat penyimpanan resmi dengan akses berbasis peran. Ketika tujuan telah selesai, data mentah tidak disimpan tanpa batas hanya karena ruang digital masih tersedia."
        ], note("Batas penting", "Penggunaan rekaman dan data pribadi harus mengikuti kebijakan lembaga serta ketentuan pelindungan data yang berlaku. Jika kewenangan, persetujuan, atau risiko belum jelas, hentikan perekaman dan konsultasikan kepada pihak yang kompeten.")],
        ["Tindak Lanjut Disiapkan Sejak Awal", [
          "Program yang baik sudah memiliki menu dukungan: pemodelan, observasi kelas contoh, perencanaan bersama, latihan, microteaching, bahan belajar, coaching, komunitas praktisi, dan pendampingan intensif. Tanpa itu, rekomendasi mudah berakhir sebagai 'tingkatkan lagi'.",
          "Alokasikan waktu untuk dukungan dan observasi ulang saat kalender dibuat. Jika semua sumber daya habis untuk mengunjungi kelas, sekolah sebenarnya mendanai pengumpulan masalah tanpa mendanai penyelesaiannya.",
          "Pantau persentase siklus yang lengkap, ketepatan waktu umpan balik, tindakan yang dijalankan, perubahan praktik, persepsi keadilan, dan bukti belajar murid. Jumlah kunjungan hanya salah satu ukuran proses."
        ]]
      ],
      reflection: "Pada tahap mana siklus supervisi sekolah paling sering putus—persiapan, observasi, percakapan, dukungan, atau peninjauan ulang? Kondisi apa yang menyebabkannya?",
      quiz: [
        { q: "Kalender supervisi yang baik terutama menyediakan…", o: ["Tanggal kunjungan saja", "Waktu untuk seluruh siklus termasuk dukungan dan observasi ulang", "Observasi sebanyak mungkin"], c: 1 },
        { q: "Mengapa peran supervisor perlu dijelaskan?", o: ["Agar guru tahu apakah percakapan bersifat pengembangan atau formal", "Agar semua orang menjadi penilai", "Agar data dapat dibuka"], c: 0 },
        { q: "Prinsip pengumpulan data yang sehat adalah…", o: ["Simpan semua selamanya", "Kumpulkan yang diperlukan dengan akses dan masa simpan jelas", "Bagikan di grup agar mudah"], c: 1 }
      ]
    },
    {
      title: "Percakapan Praobservasi",
      lede: "Observasi yang tajam dimulai sebelum supervisor masuk kelas. Percakapan praobservasi membantu kedua pihak memahami tujuan pelajaran, karakter murid, keputusan yang sedang diuji, dan bukti apa yang perlu dikumpulkan.",
      sections: [
        ["Mendengar Rancangan dari Dalam", [
          "Guru mengetahui konteks yang tidak tampak di rencana tertulis: materi sebelumnya, dinamika kelompok, murid yang baru kembali, konsep yang sering keliru, dan alasan memilih strategi. Minta guru menceritakan perjalanan belajar yang diharapkan, bukan sekadar membacakan langkah kegiatan.",
          "Pertanyaan yang membantu antara lain: apa yang diharapkan dipahami murid, bagian mana yang paling menantang, bagaimana Anda akan mengetahui mereka paham, respons apa yang Anda perkirakan, dan keputusan apa yang mungkin berubah selama pelajaran?",
          "Supervisor tidak perlu mengambil alih perencanaan. Ia membantu memperjelas hubungan tujuan, aktivitas, bukti, dan respons guru. Jika menemukan risiko penting, sampaikan sebagai pertanyaan atau alternatif yang dapat dipertimbangkan sebelum kelas."
        ]],
        ["Menyusun Hipotesis Belajar", [
          "Hipotesis membuat observasi menjadi penyelidikan. Contohnya: jika murid diberi waktu berpikir sendiri sebelum diskusi pasangan, lebih banyak murid akan membawa gagasan ke diskusi kelas. Observer kemudian mencatat distribusi partisipasi dan kualitas respons.",
          "Hipotesis bukan janji bahwa strategi pasti berhasil. Ia adalah dugaan yang dapat diuji. Hasil yang berbeda tidak otomatis berarti guru gagal; mungkin asumsi tentang pengetahuan awal, waktu, instruksi, atau tingkat kesulitan perlu diperbaiki.",
          "Satu hipotesis yang jelas lebih bernilai daripada keinginan melihat seluruh kompetensi. Ia membantu guru dan supervisor menafsirkan data tanpa terseret oleh kejadian yang menarik tetapi tidak relevan."
        ]],
        ["Menyepakati Bukti dan Peran", [
          "Tentukan siapa atau apa yang akan diamati. Observer mungkin memetakan pertanyaan guru, mengikuti enam murid dengan profil berbeda, mencatat perpindahan antarkegiatan, atau mengumpulkan dua sampel karya. Pilihan mengikuti fokus.",
          "Sepakati posisi duduk, durasi, apakah observer boleh berinteraksi, dan bagaimana menangani kondisi darurat. Observer biasanya tidak ikut mengajar kecuali desainnya memang co-teaching. Peran yang kabur dapat mengubah perilaku kelas dan merusak bukti.",
          "Pastikan guru telah melihat instrumen dan memahami bahasa rubrik. Tidak ada manfaat edukatif dari menyembunyikan kriteria. Transparansi memungkinkan guru melakukan pemeriksaan diri dan memilih bukti tambahan."
        ]],
        ["Menutup dengan Kepastian", [
          "Ringkas kesepakatan: tujuan pelajaran, fokus, bukti, waktu, durasi, penggunaan data, dan jadwal percakapan pascaobservasi. Minta guru mengoreksi jika ringkasan tidak tepat.",
          "Percakapan pascaobservasi sebaiknya cukup dekat dengan kejadian agar detail masih hidup, tetapi memberi waktu bagi kedua pihak membaca catatan dan berefleksi. Hindari umpan balik panjang di ambang pintu ketika guru harus segera mengajar kelas berikutnya.",
          "Praobservasi yang baik sering berlangsung singkat karena fokusnya jelas. Nilainya bukan pada lama rapat, melainkan pada berkurangnya kejutan dan meningkatnya kualitas bukti."
        ], '<table><thead><tr><th>Disepakati</th><th>Contoh</th></tr></thead><tbody><tr><td>Tujuan</td><td>Murid membandingkan dua strategi</td></tr><tr><td>Fokus</td><td>Pemerataan kesempatan menjelaskan</td></tr><tr><td>Bukti</td><td>Peta penjawab dan sampel alasan</td></tr><tr><td>Peran</td><td>Observer tidak berinteraksi</td></tr><tr><td>Umpan balik</td><td>Besok, 30 menit, privat</td></tr></tbody></table>']
      ],
      reflection: "Dalam observasi berikutnya, hipotesis belajar apa yang ingin diuji dan bukti apa yang akan membuat percakapan setelah kelas menjadi lebih tajam?",
      quiz: [
        { q: "Tujuan utama praobservasi adalah…", o: ["Membocorkan nilai", "Menyepakati tujuan, fokus, bukti, peran, dan tindak lanjut", "Mengarahkan semua langkah guru"], c: 1 },
        { q: "Hipotesis belajar digunakan untuk…", o: ["Menjamin strategi berhasil", "Menyatakan dugaan hubungan strategi dan respons murid yang dapat diuji", "Mengganti tujuan pelajaran"], c: 1 },
        { q: "Kriteria observasi sebaiknya…", o: ["Dirahasiakan", "Dipahami guru sebelum kelas", "Diberikan setelah skor keluar"], c: 1 }
      ]
    },
    {
      title: "Mengamati Kelas secara Tajam",
      lede: "Di dalam kelas, tugas observer bukan menjadi kritikus pertunjukan. Ia menangkap jejak keputusan dan respons belajar secara disiplin—cukup kaya untuk dipahami, cukup terfokus untuk digunakan, dan cukup rendah hati untuk tidak menganggap satu sudut pandang sebagai keseluruhan kenyataan.",
      sections: [
        ["Datang untuk Melihat, Bukan Membuktikan", [
          "Observer membawa hipotesis, tetapi tidak boleh hanya mencari bukti yang membenarkannya. Catat kejadian yang mendukung, bertentangan, atau belum dapat dijelaskan. Sikap ini mencegah kesimpulan ditentukan sebelum pelajaran berlangsung.",
          "Masuk tepat waktu, pilih posisi yang tidak menghalangi, kecilkan gangguan, dan beri waktu kelas kembali alami. Ekspresi wajah, bisikan, atau perpindahan yang tidak perlu dapat memengaruhi guru dan murid.",
          "Jika terjadi insiden keselamatan atau perlindungan anak, prioritas berubah dari pengumpulan data menjadi tindakan sesuai prosedur. Protokol observasi tidak pernah mengalahkan kewajiban menjaga keselamatan."
        ]],
        ["Menangkap Pembelajaran Murid", [
          "Amati bukan hanya siapa yang patuh, tetapi apa yang dipikirkan. Dengarkan alasan, pertanyaan, miskonsepsi, cara murid menggunakan contoh, serta bagaimana mereka merevisi jawaban. Ketenangan kelas tidak selalu berarti memahami; keramaian tidak selalu berarti belajar aktif.",
          "Peta partisipasi menunjukkan siapa mendapat ruang. Tally sederhana dapat membedakan sukarelawan, murid yang dipilih, respons serentak, dan murid yang tidak pernah terlibat. Sampel kecil yang dipilih sengaja sering memberi informasi lebih baik daripada kesan umum.",
          "Lihat bagaimana guru menggunakan bukti. Apakah jawaban salah hanya dikoreksi, atau dijadikan bahan membongkar pemahaman? Apakah guru mengubah tempo, contoh, kelompok, atau tingkat dukungan ketika murid belum siap? Respons adaptif adalah inti mengajar."
        ]],
        ["Garis Waktu dan Titik Keputusan", [
          "Catatan waktu membantu melihat ritme: kapan tujuan menjadi jelas, berapa lama guru berbicara, kapan murid bekerja, berapa lama transisi, dan kapan pemahaman diperiksa. Data ini lebih dapat ditindaklanjuti daripada kesan 'tempo lambat'.",
          "Tandai titik keputusan guru. Setelah jawaban murid, apa yang terjadi? Setelah sebagian kelompok selesai, bagaimana perbedaan kebutuhan ditangani? Setelah kebingungan muncul, apakah instruksi diulang atau direpresentasikan dengan cara baru?",
          "Jangan mencoba menulis semuanya. Gunakan singkatan yang disepakati, tinggalkan ruang memperjelas catatan segera setelah kelas, dan pisahkan kutipan langsung dari ringkasan. Ingatan cepat berubah ketika observer berpindah ke tugas lain."
        ]],
        ["Rencana dan Pelaksanaan sebagai Satu Cerita", [
          "Bawa pertanyaan dari dokumen ke kelas: tujuan mana yang tampak, tugas apa yang menghasilkan bukti, dan dukungan apa yang benar-benar digunakan. Catat perbedaan tanpa otomatis menyebutnya ketidaksesuaian.",
          "Sesudah kelas, beri guru kesempatan menjelaskan keputusan spontan. Ia mungkin memotong aktivitas karena menemukan miskonsepsi atau memperpanjang diskusi karena muncul gagasan penting. Penjelasan tidak mengganti bukti, tetapi membantu memaknai konteks.",
          "Tutup catatan dengan dua daftar sementara: pola yang cukup didukung bukti dan pertanyaan yang masih perlu dijawab. Jangan menulis rekomendasi final sebelum refleksi guru dan analisis bersama."
        ]]
      ],
      reflection: "Ketika mengamati kelas, perhatian Anda lebih sering tertarik pada tindakan guru atau bukti berpikir murid? Catatan apa yang perlu diubah agar keduanya terhubung?",
      quiz: [
        { q: "Catatan observasi yang paling kuat adalah…", o: ["Guru kurang menarik", "Pukul 09.12, hanya 3 dari 24 murid menjawab dan tidak ada alasan diminta", "Kelas terasa biasa"], c: 1 },
        { q: "Kelas tenang selalu berarti…", o: ["Murid memahami", "Tidak dapat disimpulkan tanpa bukti belajar", "Guru berhasil"], c: 1 },
        { q: "Rekomendasi final sebaiknya dibuat…", o: ["Saat observasi baru dimulai", "Setelah bukti dianalisis dan refleksi guru didengar", "Tanpa konteks"], c: 1 }
      ]
    },
    {
      title: "Memilih Moda Supervisi",
      lede: "Tidak ada satu bentuk observasi yang paling unggul untuk semua kebutuhan. Sekolah memilih moda berdasarkan pertanyaan yang ingin dijawab, kesiapan hubungan, risiko keputusan, waktu, dan jenis pembelajaran yang ingin dikembangkan.",
      sections: [
        ["Supervisi Klinis sebagai Siklus Terfokus", [
          "Istilah klinis tidak berarti dingin, keras, atau mencari penyakit guru. Ia merujuk pada pemeriksaan praktik yang dekat, terencana, dan berbasis bukti melalui praobservasi, observasi, analisis, percakapan pascaobservasi, serta tindak lanjut.",
          "Moda ini cocok ketika guru dan supervisor ingin mempelajari bagian tertentu secara mendalam—misalnya pola pertanyaan, pengelolaan transisi, atau respons terhadap miskonsepsi. Fokus yang disepakati membuat data lebih kaya dan rekomendasi lebih presisi.",
          "Siklus klinis dapat bersifat formatif atau menjadi bagian evaluasi formal, tetapi tujuan dan penggunaannya harus jelas. Hubungan kolaboratif tidak menghapus tanggung jawab; ia membuat bukti dan keputusan dapat dibicarakan secara profesional."
        ]],
        ["Observasi Sejawat dan Rekaman Diri", [
          "Observasi sejawat menempatkan guru sebagai sumber belajar satu sama lain. Mulailah dengan fokus kecil, pasangan yang cukup aman, aturan kerahasiaan, dan pertanyaan yang dibawa observer untuk praktiknya sendiri. Ia tidak harus menghasilkan skor.",
          "Rekaman diri memungkinkan guru melihat pola yang sulit dirasakan saat mengajar: waktu bicara, posisi di kelas, siapa yang sering dipanggil, atau kualitas instruksi. Guru dapat menonton sendiri terlebih dahulu lalu memilih potongan untuk dibahas dengan mentor.",
          "Keduanya memerlukan batas data yang sama seriusnya. Kesukarelaan untuk kegiatan formatif, pengamanan file, identitas murid, tujuan penggunaan, dan penghapusan perlu disepakati. Teknologi tidak menghapus kewajiban etis."
        ]],
        ["Lesson Study: Meneliti Belajar", [
          "Dalam lesson study, tim memilih tujuan jangka panjang, mempelajari materi dan pemikiran murid, merancang satu research lesson, mengantisipasi respons, lalu menetapkan data yang akan dikumpulkan. Satu anggota mengajar sementara yang lain mengamati belajar murid.",
          "Diskusi setelah kelas membangun gambaran tentang apa yang dipahami murid, dukungan apa yang bekerja, dan hambatan apa yang muncul. Pusatnya bukan mencari guru model paling hebat, melainkan memperdalam pengetahuan kolektif tentang materi, murid, dan pengajaran.",
          "Hasil lesson study dapat berupa revisi rancangan, wawasan tentang pemikiran murid, dan kebiasaan kolaboratif. Ia membutuhkan waktu lebih banyak daripada kunjungan singkat, sehingga dipilih untuk persoalan yang layak diteliti bersama."
        ]],
        ["Co-Teaching dan Kunjungan Singkat", [
          "Co-teaching berguna ketika supervisor dan guru sengaja membagi peran untuk memodelkan, menguji, atau mendampingi strategi. Sebelum kelas, jelaskan siapa memimpin, siapa mengamati, kapan berpindah, dan apa yang akan dibahas. Tanpa desain, bantuan mudah terasa sebagai pengambilalihan.",
          "Kunjungan singkat dapat membaca pola sekolah dan menjaga kedekatan pemimpin dengan pembelajaran. Namun potongan beberapa menit tidak memadai untuk putusan besar tentang kinerja individual. Gunakan untuk pertanyaan terbatas atau menentukan area yang perlu dipelajari lebih dalam.",
          "Satu siklus dapat menggabungkan moda: observasi klinis menemukan kebutuhan, rekaman diri membantu kesadaran, perencanaan bersama menyiapkan strategi, dan kunjungan singkat memantau penerapan. Pilihan selalu mengikuti tujuan, bukan tren."
        ], '<table><thead><tr><th>Moda</th><th>Paling berguna untuk</th></tr></thead><tbody><tr><td>Klinis</td><td>Mendalami fokus individual</td></tr><tr><td>Sejawat</td><td>Pertukaran praktik dan refleksi aman</td></tr><tr><td>Lesson study</td><td>Penyelidikan kolektif atas belajar murid</td></tr><tr><td>Co-teaching</td><td>Pemodelan dan praktik bersama</td></tr><tr><td>Kunjungan singkat</td><td>Membaca pola atau fokus terbatas</td></tr></tbody></table>']
      ],
      reflection: "Masalah pembelajaran yang sedang Anda hadapi paling cocok dipelajari melalui moda apa? Mengapa moda itu memberi bukti atau dukungan yang lebih tepat?",
      quiz: [
        { q: "Supervisi klinis berarti…", o: ["Mencari kesalahan serius", "Siklus terfokus dari praobservasi sampai tindak lanjut", "Observasi tanpa percakapan"], c: 1 },
        { q: "Pusat lesson study adalah…", o: ["Menilai guru yang mengajar", "Mempelajari pemikiran dan belajar murid secara kolaboratif", "Mencari kelas terbaik"], c: 1 },
        { q: "Kunjungan singkat sebaiknya tidak digunakan sendirian untuk…", o: ["Membaca pola terbatas", "Membuat putusan besar tentang kinerja individual", "Menjaga kedekatan dengan kelas"], c: 1 }
      ]
    }
  );

  chapters.push(
    {
      title: "Umpan Balik yang Menggerakkan Praktik",
      lede: "Data observasi belum menjadi pembelajaran sampai guru dapat melihat maknanya, menghubungkannya dengan tujuan, dan memilih tindakan berikut. Percakapan yang baik cukup jujur untuk menyebut kesenjangan dan cukup aman untuk memungkinkan pemikiran.",
      sections: [
        ["Siapkan Percakapan, Jangan Membacakan Formulir", [
          "Segera setelah kelas, rapikan catatan, tandai pola, dan pilih bukti yang paling terkait fokus. Jangan membawa semua kejadian ke meja. Terlalu banyak poin membuat guru kewalahan dan mendorong percakapan menjadi pembelaan detail.",
          "Bandingkan bukti dengan tujuan, bukan dengan gaya pribadi supervisor. Siapkan pertanyaan untuk bagian yang belum jelas dan beberapa pilihan dukungan. Tunda kesimpulan yang hanya berdiri pada satu potongan.",
          "Pilih ruang privat dan waktu yang cukup. Umpan balik perlu dekat dengan observasi, tetapi tidak diberikan saat emosi tinggi atau guru harus berlari ke kelas lain. Kualitas perhatian lebih penting daripada kecepatan beberapa menit."
        ]],
        ["Guru Merefleksi Lebih Dulu", [
          "Mulailah dengan pengalaman guru: bagian mana yang sesuai rencana, bukti apa yang ia lihat, kejutan apa yang muncul, dan apa yang akan ia ubah. Refleksi ini bukan ujian menebak catatan supervisor; ia memberi informasi tentang penalaran di balik tindakan.",
          "Kemudian hadirkan bukti secara deskriptif dan beri ruang interpretasi. 'Pada tiga pertanyaan awal, delapan murid yang sama menjawab. Apa yang Anda perhatikan tentang pola itu?' Pertanyaan menjaga dialog tetap pada pekerjaan tanpa menyembunyikan fakta.",
          "Jika guru menafsirkan berbeda, uji kedua penjelasan dengan data tambahan. Supervisor tidak harus menyerahkan penilaian, tetapi bersedia memperbarui kesimpulan ketika konteks atau bukti baru lebih kuat."
        ]],
        ["Kekuatan, Kesenjangan, dan Satu Prioritas", [
          "Sebutkan kekuatan yang benar-benar membantu belajar, bukan pujian umum. Contoh: 'Ketika Anda meminta murid membandingkan dua jawaban, alasan mereka menjadi lebih lengkap.' Kekuatan dapat menjadi pijakan untuk memperbaiki bagian lain.",
          "Nyatakan kesenjangan dengan hubungan bukti dan dampak. Hindari sandwich pujian yang terasa manipulatif. Guru dewasa dapat menerima percakapan langsung jika prosesnya adil, bahasanya hormat, dan fokusnya pada hal yang dapat diubah.",
          "Pilih satu prioritas bernilai tinggi. Pertanyaan penentu: jika hanya satu hal dapat berubah sebelum observasi berikut, perubahan mana yang paling mungkin memperbaiki pengalaman murid? Prioritas lain dicatat, bukan dipaksakan sekaligus."
        ]],
        ["Dari Saran ke Percobaan", [
          "Akhiri dengan tindakan spesifik: strategi apa, pada pelajaran mana, dukungan siapa, bukti keberhasilan apa, dan kapan ditinjau. 'Lebih interaktif' bukan rencana; 'gunakan respons seluruh kelas pada dua titik dan tindak lanjuti miskonsepsi yang dominan' lebih dapat diuji.",
          "Minta guru merumuskan kembali komitmen dengan kata-katanya sendiri. Pastikan ia memiliki pengetahuan dan sumber daya untuk menjalankan. Jika belum, jadwalkan pemodelan atau latihan sebelum menuntut perubahan.",
          "Kirim ringkasan singkat yang disepakati. Dokumentasi bukan senjata, melainkan memori bersama: bukti utama, pemaknaan, tindakan, dukungan, indikator, dan tanggal kembali."
        ], note("Alur BUKTI", "Buka dengan refleksi; Uraikan bukti; Kaitkan dengan tujuan; Tetapkan satu prioritas; Ikat dengan tindakan dan peninjauan. Akronim ini adalah pengingat percakapan, bukan prosedur kaku.")]
      ],
      reflection: "Pikirkan umpan balik terakhir yang Anda berikan. Apakah guru pulang dengan pemahaman dan tindakan yang jelas, atau hanya dengan perasaan telah dinilai?",
      quiz: [
        { q: "Percakapan pascaobservasi sebaiknya dimulai dengan…", o: ["Membacakan skor", "Refleksi guru terhadap tujuan dan bukti", "Daftar seluruh kekurangan"], c: 1 },
        { q: "Umpan balik 'buat kelas lebih interaktif' lemah karena…", o: ["Terlalu ramah", "Tidak menentukan tindakan, konteks, dan bukti keberhasilan", "Tidak memakai skor"], c: 1 },
        { q: "Prioritas perbaikan dipilih berdasarkan…", o: ["Poin termudah dikomentari", "Perubahan yang paling bernilai bagi belajar dan dapat dijalankan", "Selera supervisor"], c: 1 }
      ]
    },
    {
      title: "Tindak Lanjut yang Dibedakan",
      lede: "Umpan balik tanpa dukungan memindahkan seluruh beban perubahan kepada guru. Dukungan yang sama untuk semua orang pun jarang efektif. Sekolah perlu membaca apa yang menghambat, memilih kadar arahan, dan meninjau apakah bantuan benar-benar mengubah praktik.",
      sections: [
        ["Diagnosis Sebelum Resep", [
          "Kesenjangan yang tampak sama dapat memiliki penyebab berbeda. Guru belum tahu strateginya, sudah tahu tetapi belum terampil, ragu mencobanya, tidak melihat manfaat, kekurangan bahan, menghadapi beban berlebih, atau bekerja dalam aturan yang bertentangan. Setiap penyebab memerlukan respons berbeda.",
          "Gunakan percakapan, contoh pekerjaan, observasi, dan percobaan kecil untuk menguji dugaan. Hindari label seperti malas, tidak kompeten, atau sulit dibina sebelum kondisi diperiksa. Label menjelaskan sedikit tetapi dapat menentukan perlakuan terlalu lama.",
          "Bedakan juga masalah individual dan sistemik. Jika banyak guru gagal melakukan hal yang sama, mungkin pelatihan, jadwal, kurikulum, ukuran kelas, instrumen, atau kepemimpinan perlu diperbaiki. Supervisi seharusnya membuat sistem ikut belajar."
        ]],
        ["Empat Kadar Dukungan", [
          "Ketika keterampilan dan keyakinan masih rendah, supervisor dapat lebih direktif: menjelaskan langkah, memodelkan, menyediakan contoh, dan membuat checkpoint dekat. Arahan tetap disertai alasan agar guru membangun pemahaman, bukan ketergantungan.",
          "Ketika motivasi tinggi tetapi keterampilan belum mantap, gabungkan instruksi, latihan, observasi contoh, dan umpan balik cepat. Ketika keterampilan ada tetapi penerapan rendah, gunakan dialog kolaboratif untuk membaca tujuan, beban, keyakinan, atau hambatan kerja.",
          "Ketika guru sudah kuat dan berkomitmen, pendekatan non-direktif dapat memperluas kepemilikan: guru memilih pertanyaan, meneliti praktik, memimpin lesson study, atau mendampingi rekan. Posisi ini bukan hadiah permanen; dukungan dapat berubah menurut tugas dan kondisi."
        ], '<table><thead><tr><th>Kondisi sementara</th><th>Dukungan awal</th></tr></thead><tbody><tr><td>Belum terampil, belum yakin</td><td>Arahan, pemodelan, langkah kecil</td></tr><tr><td>Belum terampil, ingin mencoba</td><td>Latihan terbimbing dan umpan balik cepat</td></tr><tr><td>Terampil, penerapan terhambat</td><td>Diagnosis kolaboratif dan perbaikan kondisi</td></tr><tr><td>Terampil, berkomitmen</td><td>Coaching, otonomi, kepemimpinan sejawat</td></tr></tbody></table>'],
        ["Rencana Pengembangan yang Hidup", [
          "Rencana tindak lanjut memuat satu tujuan perilaku, alasan bagi murid, kondisi awal, strategi, dukungan, jadwal praktik, bukti, dan tanggal tinjau. Ia cukup ringkas untuk dipakai, bukan dokumen yang hanya dibuka saat audit.",
          "Susun urutan belajar: pahami, lihat contoh, coba dalam situasi aman, terapkan di kelas, terima umpan balik, lalu ulangi. Pelatihan satu kali jarang mengubah kebiasaan jika tidak ada model, latihan, konteks penerapan, dan penguatan.",
          "Catat beban perubahan. Guru yang sedang menjalankan beberapa inisiatif mungkin perlu prioritas dihapus, bukan ditambah. Pemimpin menunjukkan keseriusan dengan melindungi waktu dan menyelaraskan permintaan dari berbagai unit."
        ]],
        ["Observasi Ulang dan Akuntabilitas", [
          "Observasi ulang bukan sidang kedua, melainkan cara memeriksa apakah strategi diterapkan dan bagaimana murid merespons. Gunakan fokus serta bukti yang sama agar perbandingan masuk akal, sambil mencatat perubahan konteks.",
          "Jika ada kemajuan, identifikasi apa yang membuatnya mungkin dan bagaimana menjaga kebiasaan. Jika belum, periksa mutu penerapan, kecocokan strategi, dukungan, waktu, dan diagnosis awal. Rencana dapat direvisi tanpa menurunkan standar.",
          "Untuk kesenjangan serius atau berulang, dukungan perlu berdampingan dengan akuntabilitas yang jelas: standar, bukti, perubahan yang diminta, dukungan, waktu, konsekuensi, dan proses formal sesuai kebijakan. Belas kasih tidak berarti membiarkan murid menanggung praktik yang tidak aman atau terus-menerus tidak memadai."
        ]]
      ],
      reflection: "Pilih satu guru yang sedang didampingi. Hambatan apa yang benar-benar didukung bukti, dan kadar dukungan apa yang paling sesuai—bukan yang paling mudah diberikan?",
      quiz: [
        { q: "Dua guru menunjukkan kesenjangan sama. Dukungan mereka…", o: ["Harus sama", "Dapat berbeda setelah penyebab dan konteks diperiksa", "Cukup berupa teguran"], c: 1 },
        { q: "Model kesiapan guru sebaiknya dipakai sebagai…", o: ["Label permanen", "Hipotesis sementara untuk memilih dukungan", "Ranking publik"], c: 1 },
        { q: "Fungsi observasi ulang adalah…", o: ["Mencari kesalahan baru", "Memeriksa penerapan strategi dan respons murid", "Mengulang skor tanpa perubahan"], c: 1 }
      ]
    },
    {
      title: "Menjadi Sistem Belajar Sekolah",
      lede: "Supervisi mencapai kematangan ketika tidak bergantung pada satu kepala sekolah, tidak terputus setelah formulir ditandatangani, dan tidak berhenti pada perbaikan individual. Temuan yang aman diolah menjadi kemampuan kolektif tanpa mengorbankan martabat orang.",
      sections: [
        ["Menghubungkan Kompetensi, Kinerja, dan Pengembangan", [
          "Sekolah perlu menjelaskan kompetensi mengajar yang dihargai, bukti kinerja yang adil, serta jalur pengembangan yang tersedia. Supervisi memberi salah satu jendela ke praktik, tetapi tidak boleh menjadi satu-satunya dasar semua keputusan tentang guru.",
          "Gabungkan observasi dengan rencana dan karya, kemajuan murid yang dibaca secara kontekstual, kontribusi profesional, refleksi, serta bukti penerapan umpan balik. Bobot dan penggunaan data dijelaskan sebelum periode penilaian.",
          "Kompensasi dan karier merupakan keputusan organisasi yang lebih luas. Jika dikaitkan dengan kinerja, gunakan kebijakan transparan, bukti beragam, kalibrasi, dan proses tinjau. Skor satu kunjungan tidak cukup untuk menentukan penghargaan atau masa depan seseorang."
        ]],
        ["Dari Data Individual ke Agenda Bersama", [
          "Catatan individual tetap terbatas, tetapi pola agregat dapat menjawab kebutuhan sekolah. Jika banyak kelas menunjukkan pemeriksaan pemahaman lemah, komunitas belajar dapat mempelajari strategi, melihat model, berlatih, dan saling mengobservasi.",
          "Laporkan pola tanpa membuat orang mudah ditebak, terutama di sekolah kecil. Gunakan rentang, tema, atau gabungan periode jika perlu. Tujuan agregasi adalah merancang dukungan, bukan membuat papan peringkat guru.",
          "Kumpulkan juga kekuatan. Sekolah dapat menemukan praktik yang layak dibagikan, lalu mengundang guru pemiliknya sebagai mitra belajar—dengan persetujuan dan pengakuan yang wajar. Sistem belajar tidak hanya bergerak dari kekurangan."
        ]],
        ["Mengukur Dampak dalam Empat Lapisan", [
          "Lapisan pertama adalah pelaksanaan: apakah praobservasi, observasi, umpan balik, dukungan, dan peninjauan selesai dengan mutu yang cukup. Lapisan kedua adalah pembelajaran guru: apakah ia memahami gagasan dan mampu menunjukkan strategi.",
          "Lapisan ketiga adalah perubahan praktik: apakah strategi benar-benar muncul secara konsisten di kelas. Lapisan keempat adalah respons murid: apakah partisipasi, pemahaman, kualitas karya, kemandirian, atau indikator relevan berubah. Rantai ini membantu sekolah menemukan di mana implementasi putus.",
          "Gunakan ukuran sesedikit mungkin tetapi bermakna. Kombinasikan angka dengan sampel karya, catatan, dan suara guru atau murid yang dikumpulkan secara aman. Dampak membutuhkan waktu; jangan menjanjikan bahwa satu observasi langsung menaikkan hasil akhir."
        ], '<table><thead><tr><th>Lapisan</th><th>Pertanyaan</th></tr></thead><tbody><tr><td>Pelaksanaan</td><td>Apakah siklus dijalankan dengan bermutu?</td></tr><tr><td>Belajar guru</td><td>Apakah pemahaman dan keterampilan bertambah?</td></tr><tr><td>Praktik</td><td>Apakah kebiasaan mengajar berubah?</td></tr><tr><td>Murid</td><td>Apakah pengalaman atau hasil belajar membaik?</td></tr></tbody></table>'],
        ["Peta Jalan 90 Hari", [
          "Hari 1–30 digunakan untuk mendengar dan memetakan. Audit siklus lama, wawancarai sampel guru, baca kualitas instrumen dan catatan, pilih satu prioritas belajar murid, sepakati protokol, serta latih tim kecil supervisor.",
          "Hari 31–60 adalah masa uji. Jalankan siklus lengkap pada kelompok terbatas: praobservasi, observasi, umpan balik, dukungan, dan observasi ulang. Pantau beban, rasa adil, kualitas bukti, serta kemampuan tindakan dijalankan.",
          "Hari 61–90 digunakan untuk menilai dan memperluas. Bandingkan kondisi awal, perbaiki instrumen dan alur, dokumentasikan cara kerja, tambah kapasitas observer, dan putuskan perluasan bertahap. Sampaikan hal yang berhasil, belum berhasil, dan akan diubah."
        ]],
        ["Warisan Supervisi", [
          "Budaya supervisi yang sehat terlihat ketika pintu kelas tidak lagi dibuka hanya menjelang penilaian. Guru terbiasa meminta mata kedua, membicarakan bukti murid, mencoba strategi, dan mengakui ketidakpastian tanpa kehilangan kehormatan.",
          "Pemimpin menjaga keseimbangan: percaya tanpa naif, tegas tanpa mempermalukan, menggunakan data tanpa memuja angka, serta menghargai otonomi profesional tanpa meninggalkan standar. Keseimbangan ini dirawat melalui keputusan sehari-hari.",
          "Pada akhirnya, supervisi bukan kegiatan untuk memastikan guru terlihat baik ketika diamati. Ia adalah kemampuan sekolah untuk melihat kenyataan, belajar darinya, dan memperbaiki pengalaman murid secara terus-menerus."
        ]]
      ],
      reflection: "Jika supervisi ingin menjadi kebiasaan belajar sekolah dalam 90 hari, satu bagian sistem apa yang harus diperbaiki lebih dahulu dan bukti apa yang akan menunjukkan kemajuan?",
      quiz: [
        { q: "Data agregat supervisi digunakan terutama untuk…", o: ["Membuat ranking guru", "Merancang agenda pengembangan sekolah sambil menjaga data individual", "Membuka semua catatan"], c: 1 },
        { q: "Urutan dampak yang logis adalah…", o: ["Nilai murid lalu pelaksanaan", "Pelaksanaan, belajar guru, perubahan praktik, respons murid", "Skor observasi saja"], c: 1 },
        { q: "Fokus hari 31–60 dalam peta jalan adalah…", o: ["Menguji satu siklus lengkap pada lingkup terbatas", "Mengganti seluruh sistem", "Mengumumkan keberhasilan"], c: 0 }
      ]
    }
  );


  const assessment = [
    ["Sekolah ingin memulai supervisi karena kalender semester mengharuskannya. Pertanyaan pertama yang paling penting adalah…", ["Berapa lembar instrumen yang dipakai?", "Perubahan belajar murid apa yang ingin dituju?", "Siapa guru yang paling lemah?"], 2],
    ["Observasi disebut coaching, tetapi catatannya dipakai diam-diam untuk sanksi. Risiko utamanya adalah…", ["Guru makin kreatif", "Kepercayaan rusak karena fungsi dan penggunaan data tidak jelas", "Instrumen terlalu singkat"], 2],
    ["Guru menyiapkan pertunjukan kelas yang tidak mewakili keseharian. Langkah sistemik terbaik adalah…", ["Datang diam-diam setiap hari", "Perjelas tujuan, protokol, penggunaan data, dan lakukan siklus berulang", "Beri hukuman"], 2],
    ["Fokus 'meningkatkan pembelajaran' sulit digunakan karena…", ["Tidak memakai istilah teknis", "Terlalu luas untuk menentukan bukti dan tindakan", "Terlalu berpusat pada murid"], 2],
    ["Dokumen pembelajaran lengkap, tetapi murid tidak memahami tujuan. Kesimpulan yang tepat adalah…", ["Administrasi cukup membuktikan mutu", "Dokumen perlu dibaca bersama bukti pelaksanaan dan belajar", "Dokumen tidak berguna sama sekali"], 2],
    ["Indikator 'guru menguasai kelas' ingin diperbaiki. Bentuk yang lebih kuat adalah…", ["Guru terlihat percaya diri", "Transisi memiliki instruksi jelas dan sebagian besar murid mulai bekerja dalam dua menit", "Kelas terasa tertib"], 2],
    ["Observer tidak melihat indikator tertentu dalam potongan pelajaran. Ia sebaiknya…", ["Memberi skor terendah", "Mencatat tidak teramati dan mencari bukti lain bila diperlukan", "Menebak dari reputasi guru"], 2],
    ["Dua observer memberi skor berbeda pada video yang sama. Tindakan terbaik adalah…", ["Merata-ratakan tanpa bicara", "Membandingkan bukti, tafsir, dan jangkar rubrik", "Memilih skor atasan"], 2],
    ["Semua observasi dijadwalkan pada pekan terakhir semester. Masalah desain utamanya adalah…", ["Guru terlalu siap", "Waktu umpan balik, dukungan, dan observasi ulang hampir tidak tersedia", "Jumlah observer terlalu banyak"], 2],
    ["Sekolah ingin merekam kelas untuk refleksi. Sebelum merekam, sekolah harus…", ["Langsung mengunggah ke cloud", "Menetapkan tujuan, kewenangan, keterbukaan, akses, keamanan, dan masa simpan", "Meminta observer membawa ponsel pribadi"], 2],
    ["Dalam praobservasi, guru memperkirakan diskusi pasangan meningkatkan pemerataan partisipasi. Ini adalah…", ["Nilai akhir", "Hipotesis belajar yang perlu dihubungkan dengan bukti", "Alasan menghapus observasi"], 2],
    ["Catatan 'murid tidak termotivasi' merupakan…", ["Deskripsi murni", "Tafsir yang perlu didukung perilaku dan konteks", "Bukti waktu"], 2],
    ["Kelas sangat tenang selama penjelasan. Observer sebaiknya…", ["Langsung memberi skor tinggi", "Mencari bukti tentang perhatian, pemahaman, dan respons murid", "Menyimpulkan guru efektif"], 2],
    ["Tujuan lesson study yang paling tepat adalah…", ["Menentukan guru terbaik", "Meneliti pembelajaran dan pemikiran murid melalui perencanaan, observasi, dan refleksi bersama", "Membuat kelas demonstrasi"], 2],
    ["Kunjungan lima menit menunjukkan satu masalah. Untuk keputusan formal besar, sekolah perlu…", ["Langsung memakai temuan", "Mengumpulkan bukti lebih luas dan memberi proses yang adil", "Mengabaikan semua observasi"], 2],
    ["Percakapan pascaobservasi paling produktif dimulai dengan…", ["Daftar skor", "Refleksi guru terhadap tujuan, kejadian, dan bukti", "Nasihat supervisor"], 2],
    ["Guru menerima sepuluh saran sekaligus dan tidak menjalankan satu pun. Perbaikan terbaik adalah…", ["Menambah tenggat", "Memilih satu prioritas bernilai tinggi dan merancang tindakan serta dukungan", "Mengulang semua saran"], 2],
    ["Guru ingin berubah tetapi belum mampu menjalankan strategi. Dukungan awal yang tepat adalah…", ["Coaching pertanyaan saja", "Pemodelan, latihan terbimbing, dan umpan balik cepat", "Menunggu motivasinya meningkat"], 2],
    ["Banyak guru gagal pada fokus yang sama. Sekolah sebaiknya…", ["Menganggap semuanya masalah individu", "Memeriksa pelatihan, jadwal, instrumen, kurikulum, dan dukungan sistem", "Mengumumkan nama mereka"], 2],
    ["Cara paling kuat menilai dampak supervisi adalah…", ["Menghitung jumlah kunjungan", "Menelusuri mutu siklus, belajar guru, perubahan praktik, dan respons murid", "Melihat kepuasan supervisor"], 2]
  ];

  const assessmentHtml =
    '<p class="eyebrow reveal">Evaluasi Akhir</p>' +
    '<h2 class="reveal">Asesmen Komprehensif</h2>' +
    '<p class="lede reveal">Jawablah 20 soal berbasis situasi berikut untuk menguji kemampuan merancang, menjalankan, dan menindaklanjuti supervisi yang berdampak.</p>' +
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
    number: 53,
    title: "Supervisi yang Berdampak",
    subtitle: "Perencanaan, Observasi Kelas, Umpan Balik, dan Tindak Lanjut",
    chapterCount: chapters.length,
    videoId: "LET-7pOcvuM"
  };
})();
