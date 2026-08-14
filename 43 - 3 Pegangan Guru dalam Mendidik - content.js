/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "3 Pegangan Guru dalam Mendidik"
   File ini HANYA berisi data (HTML string per halaman), dimuat oleh engine.js
   lewat window.BOOK_CONTENT lalu disuntikkan ke #page-<key> saat aplikasi dibuka.

   KENAPA DIPISAH DARI HTML YANG DITEMPEL DI GROWVA:
   Field "Full Page" di growva punya batas jumlah karakter. Begitu isi bab
   diperpanjang (versi interaktif yang komprehensif), HTML jadi sangat panjang
   dan apa pun yang melebihi batas akan terpotong diam-diam -- termasuk tag
   <script src=".../engine.js"> di paling bawah, yang bikin SEMUA tombol
   (login, next/prev, asesmen) berhenti berfungsi tanpa pesan error yang jelas.
   Dengan isi bab dipindah ke sini (file terpisah di GitHub/jsDelivr), HTML yang
   ditempel ke growva jadi pendek & konstan, tidak peduli seberapa panjang buku.

   Setelah mengedit file ini di GitHub, jangan lupa purge cache jsDelivr:
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-pegangan-guru-mendidik.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Filosofi Guru Sepenuh Hati</h2>
<p class="lede reveal">Sebelum membahas tiga pegangan guru secara satu per satu, penting untuk berpijak pada fondasi filosofisnya terlebih dahulu — apa makna mengajar dalam perspektif Islam dan humanisme, apa arti "sepenuh hati" dalam mendidik, serta seluas apa sesungguhnya tanggung jawab sosial yang dipikul seorang guru.</p>

<div class="card reveal">
  <h4>A. Hakikat Mengajar dalam Perspektif Islam & Humanisme</h4>
  <p>Dalam tradisi Islam, pendidik ditempatkan pada derajat mulia sebagai pewaris tugas kenabian: menuntun manusia dari ketidaktahuan menuju pengetahuan yang membawa kebaikan. Warisan terbesar para nabi bukan harta benda, melainkan ilmu yang bermanfaat dan akhlak mulia — karena itu, mengajar bukan hanya urusan menyampaikan materi, tetapi melanjutkan misi mencerdaskan dan memuliakan manusia. Di sisi humanisme, setiap siswa dipandang sebagai pribadi yang bernilai, punya potensi, dan berhak dihormati martabatnya; guru menuntun bukan dengan memerintah semata, melainkan dengan menyadarkan, menginspirasi, dan memberdayakan. Empat nilai kenabian menjadi pedoman: <strong>Shidiq</strong> (jujur pada data, proses penilaian, dan pengakuan jika keliru), <strong>Amanah</strong> (dapat dipercaya menjaga rahasia siswa dan menepati janji), <strong>Tabligh</strong> (menyampaikan ilmu dengan bahasa yang bisa dipahami, bertahap, dan memotivasi), serta <strong>Fathanah</strong> (cerdas memahami karakter siswa dan kreatif berinovasi). Implikasinya di kelas terlihat sederhana namun nyata: menghargai perbedaan kemampuan siswa, membuka ruang dialog sebelum menghakimi, menggunakan contoh nyata agar ilmu terasa relevan, serta menepati janji-janji akademik seperti nilai dan remedial.</p>
  <p>Perspektif kedua yang tidak kalah penting adalah bahwa mengajar bukan sekadar profesi, melainkan ibadah. Pekerjaan yang diniatkan karena Allah dan dilaksanakan dengan cara yang benar bernilai ibadah, dan ibadah di sini tidak hanya berarti ritual, tetapi juga amal profesional yang menjaga niat, proses, dan hasil. Tiga pilar menjadikan mengajar sebagai ibadah: <em>niat yang lurus</em> — mengharap ridha Allah serta kemaslahatan siswa, yang meluruskan orientasi dari sekadar menggugurkan kewajiban menjadi melayani amanah; <em>proses yang benar</em> — mempersiapkan RPP, materi, asesmen, serta suasana kelas yang manusiawi, sehingga terhindar dari kesewenang-wenangan dan ketidakjujuran akademik; dan <em>hasil yang bermanfaat</em> — ilmu yang dipahami, karakter yang tumbuh, dan kebiasaan belajar yang sehat, yang tidak selalu berupa angka tinggi tetapi kemajuan yang nyata. Praktik hariannya bisa sesederhana check-in niat sebelum masuk kelas, doa singkat dan senyum sebagai pembuka hati, evaluasi diri lima menit setelah kelas, hingga jurnal syukur mingguan yang mencatat kemajuan kecil siswa dan satu perbaikan diri.</p>
  <p>Karakter siswa lebih sering ditangkap daripada diajarkan — inilah yang disebut kurikulum tersembunyi, yaitu nilai-nilai yang mengalir melalui perilaku keseharian guru: cara berbicara, menepati janji, menyelesaikan konflik, hingga merespons kesalahan. Lima teladan karakter yang paling berdampak adalah disiplin yang manusiawi (tepat waktu namun fleksibel pada kondisi khusus), kejujuran akademik (transparan pada kriteria penilaian, mengakui kekeliruan), keadilan (memberi kesempatan setara tanpa melabeli atau membandingkan), empati dan kesantunan (mendengar sebelum menilai, menegur tanpa mempermalukan), serta tanggung jawab sosial (mengaitkan pelajaran dengan kemaslahatan bersama). Strategi membangun keteladanan ini dirangkum dalam prinsip <strong>3K</strong>: Contoh (lakukan dulu sebelum meminta siswa melakukannya), Konsistensi (sedikit tetapi ajeg, karena ketidakajegan merusak wibawa), dan Konsekuensi (jelas dan mendidik, bukan menghukum yang melukai martabat). Ketika janji remedial terlewat, misalnya, guru yang mengakui, meminta maaf singkat, dan menjadwalkan ulang justru mengajarkan siswa tentang tanggung jawab jauh lebih kuat daripada ceramah panjang.</p>
</div>

<div class="card reveal">
  <h4>B. Arti "Sepenuh Hati" dalam Pendidikan</h4>
  <p>"Sepenuh hati" berarti hadir utuh — niat, pikiran, dan tindakan selaras untuk kebaikan murid. Ini bukan berarti bekerja berlebihan tanpa arah, melainkan bekerja dengan niat yang benar, cara yang tepat, dan batas yang sehat. Pilar pertamanya adalah mengajar dengan niat tulus: mengajar demi ridha Allah dan kemaslahatan murid, bukan sekadar menggugurkan kewajiban atau mengejar pujian dan angka. Niat yang benar menenangkan hati, menuntun pilihan metode, dan menahan guru dari cara-cara yang tidak jujur. Cirinya terlihat dari fokus pada kemajuan murid bukan hanya nilai rapor, konsistensi menepati janji akademik, keterbukaan mengakui kekeliruan, serta kesabaran saat menangani kesalahan murid. Penting untuk diluruskan: tulus bukan berarti mengorbankan diri tanpa batas — tulus justru menuntut disiplin dan batas sehat, seperti mengatur waktu dan berkolaborasi dengan rekan, agar pengabdian bisa berkelanjutan.</p>
  <p>Pilar kedua adalah transfer ilmu sekaligus transfer nilai. Ilmu memberi pengetahuan dan keterampilan, sementara nilai membentuk sikap dan kebiasaan — keduanya tidak dapat dipisahkan, karena cara guru berbicara, menilai, dan menyelesaikan konflik adalah "pelajaran" karakter paling kuat yang dilihat murid setiap hari. Nilai bisa disisipkan tanpa menggurui, misalnya lewat tujuan pelajaran ganda yang menyertakan tujuan sikap di samping tujuan kognitif, pertanyaan reflektif seperti "bagian mana dari tugas ini yang menuntut kejujuran", studi kasus dan bermain peran yang melatih empati, hingga rubrik sikap sederhana yang memberi umpan balik konkret. Bahkan pelajaran Matematika bisa menekankan kejujuran saat mengerjakan dan memeriksa jawaban, sementara IPA bisa mengaitkan eksperimen dengan tanggung jawab menjaga lingkungan.</p>
  <p>Pilar ketiga adalah dedikasi tanpa pamrih dan makna keberkahan — semangat melayani murid dengan konsisten, tidak mencari sorotan, dan siap melakukan perbaikan kecil setiap hari, di mana ukurannya bukan ramainya tepuk tangan melainkan dampak nyata pada kemajuan murid. Keberkahan adalah kebaikan yang bertambah luas dan tahan lama: ilmu yang diajarkan hari ini menumbuhkan murid, dan kelak menebar manfaat lewat perilaku mereka di keluarga dan masyarakat. Namun dedikasi yang sehat bukan dedikasi yang habis-habisan — ia membutuhkan ritme kerja berkelanjutan, kolaborasi dengan rekan, serta batas sehat seperti memasang batas waktu kerja harian, berani berkata "tidak dulu" pada tugas tambahan yang mengganggu kualitas mengajar inti, dan menjaga ruang pulih lewat tidur cukup, ibadah, dan hobi yang menyegarkan. Tanda keberkahan mulai terasa ketika kelas makin tertib tanpa banyak teriakan, murid menunjukkan kebiasaan baik meski tidak diawasi, dan guru sendiri merasa lebih tenang dan bermakna meski pekerjaan tetap menantang.</p>
</div>

<div class="card reveal">
  <h4>C. Guru & Tanggung Jawab Sosial</h4>
  <p>Guru tidak hanya bekerja di dalam kelas — dampak pekerjaannya menyebar ke rumah, lingkungan, bahkan arah bangsa. Dampak ini bersifat antargenerasi dan berlapis tiga: dalam jangka pendek, terlihat pada meningkatnya minat belajar dan kebiasaan tertib di kelas; dalam jangka menengah, terbentuk karakter belajar mandiri dan kebiasaan jujur pada tugas maupun ujian; dan dalam jangka panjang, lahir pribadi berintegritas yang memberi manfaat di keluarga, tempat kerja, dan masyarakat. Kebiasaan kecil di kelas hari ini — membiasakan antre, menyapa, merapikan kelas, menentukan aturan bersama siswa, atau menghentikan budaya mempermalukan — menjadi budaya anak esok hari, sebab cara guru memuji, menegur, dan menepati janji akan direkam siswa, dibawa pulang, bahkan kelak memengaruhi pola asuh mereka sebagai orang tua. Sebaliknya, bila peran ini diabaikan, risikonya adalah budaya instan, ketidakjujuran, dan siswa yang pandai secara kognitif tetapi rapuh secara karakter.</p>
  <p>Sekolah juga tidak berdiri sendiri — ekosistem belajar melibatkan rumah, tempat ibadah, komunitas lokal, dan pemerintah setempat, dan guru menjadi jembatan yang memperkuat kolaborasi itu. Sebagai jembatan rumah-sekolah, guru berkomunikasi secara teratur dan saling menghormati, fokus pada kemajuan anak bukan menyalahkan; sebagai penyejuk informasi, guru membantu orang tua memilah informasi dan hoaks; dan sebagai model kewargaan, guru menumbuhkan sikap gotong royong, toleransi, dan taat aturan. Protokol komunikasi yang menenangkan mencakup penggunaan kanal resmi sekolah dengan ekspektasi waktu respons yang jelas, penyertaan data singkat dan rencana tindak lanjut saat menyampaikan masalah, serta menghindari diskusi emosional di grup. Kontribusi guru bagi bangsa pun nyata: mencetak warga yang beriman, berakhlak, dan cakap, melatih literasi digital dan lingkungan, serta menegakkan etika publik dengan tidak menyebar data siswa atau merendahkan kelompok tertentu.</p>
  <p>Perubahan besar sesungguhnya dimulai dari ruang kelas, lalu menyebar — dan guru sebagai agen perubahan sosial tidak harus bekerja dengan cara yang besar dan bising, melainkan terukur, berkelanjutan, dan berorientasi kemaslahatan. Lima tuas perubahan sosial di tangan guru adalah teladan pribadi, kurikulum yang dikaitkan dengan problem nyata, kolaborasi lintas pihak, komunitas praktik sesama guru, serta narasi publik lewat buletin atau seminar lokal. Agar terarah, buku ini menawarkan kerangka <strong>"6T"</strong>: Temukan masalah prioritas yang dekat dan terjangkau, Telusuri akar masalahnya, Tetapkan target kecil yang terukur dalam empat hingga delapan minggu, Terapkan solusi sederhana bersama tim kecil dan siswa, Tinjau hasilnya memakai data ringan, lalu Tumbuhkan skala jika berhasil atau ubah pendekatan bila belum efektif. Contoh program yang realistis misalnya "Satu Kelas Satu Proyek Sosial" yang bekerja sama dengan RT atau masjid setempat, atau "Jumat Tanpa Plastik" yang dijalankan konsisten selama delapan minggu — semuanya tetap menjaga etika dengan meminta izin resmi, memastikan keamanan siswa, dan menghindari agenda politik praktis.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga sisi hakikat mengajar yang dibahas di bab ini — sebagai warisan kenabian, sebagai ibadah, dan sebagai keteladanan karakter — sisi mana yang selama ini paling jarang Anda sadari saat berdiri di depan kelas, dan bagaimana Anda bisa menghadirkannya kembali mulai pekan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 1, empat nilai kenabian yang menjadi pedoman guru dalam perspektif Islam adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Shidiq, Amanah, Tabligh, dan Fathanah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Iman, Islam, Ihsan, dan Taqwa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Disiplin, Kreatif, Mandiri, dan Peduli</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru berjanji memberi remedial hari Jumat, tetapi karena agenda sekolah padat ia lupa dan baru menyadarinya hari Senin. Berdasarkan prinsip 3K (Contoh–Konsistensi–Konsekuensi) pada Bab 1, respons paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Berpura-pura tidak pernah berjanji agar tidak terlihat lalai di depan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengakui secara terbuka, meminta maaf singkat, dan segera menjadwalkan ulang remedial — sehingga siswa justru belajar tentang tanggung jawab</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan remedial secara permanen karena keterlambatan sudah terjadi</button>
  </div>
  <div class="quiz-q">
    <p>Pak Doni ingin memulai sebuah gerakan kecil "Jumat Tanpa Plastik" di kelasnya tetapi bingung harus mulai dari mana agar programnya terarah dan tidak layu di tengah jalan. Berdasarkan kerangka "6T" pada Bab 1, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menumbuhkan skala program ke seluruh sekolah tanpa uji coba lebih dulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu izin resmi dari dinas pendidikan pusat sebelum melakukan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menemukan masalah prioritas yang dekat dan dapat dijangkau, lalu menelusuri akar masalahnya sebelum menetapkan target kecil yang terukur</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab1" onclick="markDone('bab1')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab1">✓ Bab 1 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab2: `
<p class="eyebrow reveal">Bab 2</p>
<h2 class="reveal">Pegangan #1: Kesadaran Diri</h2>
<p class="lede reveal">Pegangan pertama dari tiga pegangan guru adalah kesadaran diri — kemampuan mengenali dan memahami diri sendiri secara jujur, sehingga menjadi kompas yang menuntun pilihan metode, cara berkomunikasi, dan keputusan-keputusan penting di kelas.</p>

<div class="card reveal">
  <h4>A. Definisi & Ruang Lingkup Kesadaran Diri</h4>
  <p>Kesadaran diri mencakup bagaimana kita berpikir, merasa, dan bertindak, nilai apa yang kita pegang, tujuan apa yang kita kejar, serta di mana letak kekuatan dan kelemahan kita. Titik awalnya adalah mengenali tiga elemen yang saling memengaruhi: pikiran (isi kepala saat mengajar, misalnya "kelas ini sulit diatur"), emosi (rasa yang menyertai, seperti jengkel atau cemas), dan perilaku (tindakan yang terlihat, seperti menaikkan suara). Ketiganya membentuk sebuah "segitiga" — pikiran tertentu memicu emosi tertentu, lalu mendorong perilaku tertentu, sehingga mengubah salah satunya akan membantu menata dua sisi lainnya. Keterampilan intinya adalah memberi label pada emosi agar intensitasnya menurun, mengambil jarak aman dari pikiran (mengubah "siswa ini pemalas" menjadi "saya sedang berpikir siswa ini tidak bersemangat"), menyadari sinyal tubuh sebagai alarm untuk jeda, dan menggunakan jeda sadar singkat yang dikenal sebagai teknik <strong>STOP</strong> — Stop, Take a breath, Observe, Proceed — selama sekitar tiga puluh hingga enam puluh detik sebelum merespons.</p>
  <p>Selain mengenali pikiran dan emosi, kesadaran diri juga berarti memahami nilai dan tujuan hidup sebagai guru. Nilai adalah keyakinan inti yang kita pegang — kejujuran, adil, ihsan, tanggung jawab — yang menuntun "mengapa" kita mengajar sekaligus menjadi standar dalam memilih "bagaimana" kita mengajar; tanpa nilai yang jelas, keputusan mudah ikut arus. Guru dapat menemukan nilai intinya lewat latihan sederhana seperti memilih dan mengurutkan lima nilai terpenting, mengingat satu momen terbaik sebagai guru dan menilai nilai apa yang tampak saat itu, atau sebaliknya mengingat momen tersulit untuk melihat nilai apa yang saat itu terabaikan. Nilai ini kemudian perlu diterjemahkan menjadi tujuan yang berpihak pada murid dan aksi nyata mingguan — misalnya nilai kejujuran diterjemahkan menjadi transparansi rubrik tanpa nilai "bonus" tanpa bukti, dan nilai kasih sayang diterjemahkan menjadi teguran empat mata, bukan di depan umum.</p>
  <p>Aspek terakhir adalah memetakan kekuatan dan kelemahan pribadi. Mengetahui kekuatan membantu guru mempercepat dampak, sementara menyadari kelemahan membantu mencegah risiko dan merancang perbaikan yang tepat — guru yang sadar diri tidak alergi kritik, melainkan menjadikannya bahan bakar belajar. Cara sederhana memetakan diri antara lain lewat swadiagnosis kompetensi pada skala satu sampai lima, meminta umpan balik mini dari rekan sejawat dan siswa, atau mencatat pola situasi yang berulang membuat kesulitan untuk dicari akarnya. Kekuatan dapat dimaksimalkan dengan memproduksinya menjadi alat bantu yang bisa dipakai tim, sementara kelemahan dikelola lewat penggunaan template, belajar terarah pada satu topik per bulan, atau meminta dukungan lewat observasi silang dan mentoring singkat.</p>
</div>

<div class="card reveal">
  <h4>B. Manfaat Kesadaran Diri bagi Guru</h4>
  <p>Kesadaran diri membuat guru lebih tenang, lebih jernih, dan lebih tepat langkah, lewat empat manfaat yang saling menguatkan. Manfaat pertama adalah mengelola stres dan emosi — kesadaran diri membantu guru membedakan antara pemicu (stressor) seperti kelas gaduh atau deadline dengan reaksi tubuh dan pikiran (stres) seperti tegang atau cemas, sehingga guru dapat mengatur yang bisa dikendalikan. Teknik singkat seperti "4S" (Sadar, Stop, Setel napas, Susun respon) yang dilakukan dalam waktu kurang dari satu menit dapat membantu menenangkan diri, dilengkapi alat bantu seperti skala emosi 0–10 di meja guru atau ritual mikro berupa peregangan singkat dan doa. Membangun batas sehat — menetapkan waktu mengajar, membalas pesan, dan istirahat yang jelas — juga penting agar dedikasi tidak berubah menjadi kelelahan berkepanjangan.</p>
  <p>Manfaat kedua adalah membuat keputusan yang bijak, yang lahir dari data yang cukup, nilai yang jelas, dan pikiran yang tenang — dirangkum dalam kerangka cepat "3D + 2N": Data (fakta singkat), Dampak (pada murid, hari ini dan beberapa minggu ke depan), Doa (jeda hening untuk menenangkan hati), Nilai (mana yang paling relevan), dan Niat (meluruskan tujuan pada kemajuan murid). Guru yang sadar diri juga lebih waspada terhadap bias sederhana seperti label cepat atau efek halo, dan menerapkan prinsip "80% cukup" — keputusan tidak harus sempurna, cukup diuji dulu pada skala kecil lalu dievaluasi. Manfaat ketiga adalah komunikasi yang sehat, yang dibangun lewat mendengar aktif dengan pola <strong>RASA</strong> (Receive, Appreciate, Summarize, Ask), penyampaian pesan dengan <strong>I-Message</strong> yang berbasis observasi-perasaan-kebutuhan-permintaan alih-alih melabeli, serta pemberian umpan balik dengan kerangka <strong>SBI</strong> (Situation, Behavior, Impact) yang disertai langkah perbaikan konkret.</p>
  <p>Manfaat keempat, dan yang paling terasa dampaknya jangka panjang, adalah menjadi teladan yang hidup bagi siswa — sebab karakter siswa lebih banyak ditangkap daripada diajarkan, dan kesadaran diri memastikan yang tertangkap adalah hal baik. Teladan harian yang kuat pengaruhnya mencakup disiplin (tepat waktu, janji ditepati), kejujuran (mengakui salah, mengoreksi secara terbuka), keadilan (giliran dan konsekuensi yang konsisten), serta sikap santun-empatik. Kerentanan yang mendewasakan juga penting — mengakui keterbatasan di depan siswa, misalnya saat guru keliru menjelaskan rumus, justru melatih kejujuran intelektual siswa itu sendiri. Ketika keempat manfaat ini hidup bersamaan, tandanya jelas: partisipasi meningkat, konflik berkurang, dan siswa mulai meniru kebiasaan baik tanpa diawasi.</p>
</div>

<div class="card reveal">
  <h4>C. Aspek-Aspek Kesadaran Diri</h4>
  <p>Kesadaran diri bukan sekadar "tahu diri", tetapi memahami siapa diri kita, apa yang kita yakini, bagaimana kita bereaksi, dan peran apa yang kita jalankan — empat aspek yang saling menguatkan. Aspek pertama adalah konsep diri, yakni gambaran menyeluruh tentang "siapa saya" yang terbentuk dari pengalaman, keyakinan, dan umpan balik orang lain. Konsep diri yang sehat membuat guru mantap melangkah dan tidak mudah goyah oleh penilaian sesaat — tampak dari ketenangan saat menegur dan konsistensi pada aturan — sementara konsep diri yang rapuh membuat guru mudah tersinggung dan ragu mengambil keputusan. Cara menata konsep diri antara lain lewat kalimat identitas satu baris yang ditempel di meja, audit narasi diri (mengubah "saya gagal" menjadi "metode hari ini kurang pas, besok saya coba variasi diskusi"), serta portofolio kecil berisi bukti kemajuan murid yang bisa dibuka saat semangat menurun.</p>
  <p>Aspek kedua adalah <em>self-esteem</em> dan penghargaan diri, yang perlu dibedakan dari <em>self-efficacy</em> (keyakinan mampu menyelesaikan tugas tertentu) dan <em>self-compassion</em> (welas asih pada diri saat gagal, sambil tetap bertanggung jawab). Sikap yang sehat mengakui kelebihan tanpa sombong dan kekurangan tanpa merendahkan diri, sementara kesalahan umum yang perlu dihindari adalah mengejar pujian sebagai sumber harga diri atau mengukur nilai diri hanya dari nilai siswa. Latihan memperkuatnya bisa berupa "bank bukti" yang mencatat tiga hal kecil yang berjalan baik setiap hari, serta memisahkan antara orang dan perbuatan — bukan "saya guru buruk", melainkan "strategi hari ini belum efektif". Aspek ketiga adalah peran ganda yang dijalankan guru sekaligus sebagai pengajar, pembimbing, dan orang tua kedua, yang jika tidak dikelola bisa membuat benturan peran dan kelelahan. Rambu "4M" — Mandat (kewenangan saya apa), Makna (tujuan saya apa), Mitra (siapa diajak kerja sama), dan Mekanisme (alur rujukan yang jelas) — membantu menata batas, misalnya kapan sebuah kasus siswa perlu dirujuk ke BK/psikolog alih-alih ditangani sendiri.</p>
  <p>Aspek keempat adalah indikator guru sadar diri, yang bisa digunakan sebagai cermin mingguan mencakup regulasi emosi, kejelasan nilai dan tujuan, refleksi dan belajar, komunikasi dan relasi, peran dan batas sehat, hingga dampak nyata di kelas seperti meningkatnya partisipasi dan menurunnya konflik. Keempat aspek ini — konsep diri, penghargaan diri, peran ganda yang tertata, dan indikator yang terpantau — bersama-sama membentuk fondasi kesadaran diri yang kokoh, yang pada gilirannya menjadi bekal utama sebelum guru melangkah ke pegangan kedua: profesionalisme.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek kesadaran diri (konsep diri, self-esteem, peran ganda, dan indikator sadar diri) yang dibahas di bab ini, aspek mana yang menurut Anda paling perlu diperkuat dalam keseharian mengajar Anda, dan satu langkah kecil apa yang bisa Anda coba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Teknik jeda sadar singkat (30–60 detik) yang digunakan untuk menenangkan sistem emosi sebelum merespons, sebagaimana disebut pada Bab 2, dikenal dengan singkatan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">STOP (Stop, Take a breath, Observe, Proceed)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">RASA (Receive, Appreciate, Summarize, Ask)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">SBI (Situation, Behavior, Impact)</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu berpikir "siswa ini pemalas" setiap kali muridnya terlambat mengumpulkan tugas, dan pikiran itu langsung memicu kemarahan yang meledak di depan kelas. Berdasarkan konsep "segitiga" pikiran-emosi-perilaku pada Bab 2, langkah paling tepat untuk memutus pola ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan pola ini terus terjadi karena emosi guru adalah hal yang wajar dan tidak bisa diubah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengambil jarak aman dari pikiran otomatis, misalnya mengubahnya menjadi "saya sedang berpikir siswa ini tidak bersemangat", sehingga emosi dan perilaku yang mengikutinya pun berubah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari siswa yang sering terlambat agar guru tidak perlu mengelola emosinya sendiri</button>
  </div>
  <div class="quiz-q">
    <p>Bu Sinta baru saja ditegur kepala sekolah karena satu kesalahan kecil, lalu ia terus-menerus membatin "saya memang guru yang buruk" sepanjang hari sehingga sulit fokus mengajar. Berdasarkan konsep self-esteem dan self-compassion pada Bab 2, langkah yang paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Terus mengulang kalimat "saya guru yang buruk" agar ia semakin waspada dan tidak mengulangi kesalahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyalahkan kepala sekolah karena telah membuatnya kehilangan rasa percaya diri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memisahkan diri dari perbuatan — mengganti "saya guru yang buruk" menjadi "strategi hari ini belum efektif" — sambil tetap bertanggung jawab memperbaikinya</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab2" onclick="markDone('bab2')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab2">✓ Bab 2 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab3: `
<p class="eyebrow reveal">Bab 3</p>
<h2 class="reveal">Pegangan #2: Profesionalisme</h2>
<p class="lede reveal">Setelah kesadaran diri, pegangan kedua adalah profesionalisme — kompetensi yang terus diperbarui dan diwujudkan dalam perencanaan yang jelas, metode yang relevan, asesmen yang adil, dan kemauan untuk terus belajar di tengah tantangan zaman yang terus berubah.</p>

<div class="card reveal">
  <h4>A. Kompetensi Inti Guru</h4>
  <p>Empat kompetensi inti menjadi fondasi profesionalisme guru, dan keempatnya saling menguatkan. <strong>Pedagogik</strong> adalah kemampuan merancang, melaksanakan, menilai, dan memperbaiki pembelajaran sesuai tahap perkembangan siswa — mencakup perencanaan yang jelas, diferensiasi konten-proses-produk, pengelolaan kelas yang rapi, asesmen formatif yang rutin, serta umpan balik yang spesifik dan tepat waktu. Praktiknya bisa sesederhana RPP ringkas satu halaman, teknik <em>Think-Pair-Share</em>, <em>exit ticket</em> berupa satu pertanyaan kunci di akhir sesi, dan rubrik sederhana dengan tiga kriteria saja agar penilaian adil dan transparan. <strong>Profesional</strong> berarti penguasaan substansi mata pelajaran dan komitmen belajar berkelanjutan — memiliki peta konsep materi, daftar miskonsepsi umum beserta cara meluruskannya, serta keberanian melakukan riset kelas sederhana yang menguji satu strategi mengajar dan mendokumentasikan hasilnya.</p>
  <p><strong>Kepribadian</strong> adalah karakter yang mencerminkan integritas, kedewasaan emosi, dan keteladanan moral, sehingga guru dipercaya dan dihormati — tampak dari konsistensi ucapan dan tindakan, kemampuan jeda sebelum merespons situasi panas, kedisiplinan administratif, serta kerendahan hati untuk terus belajar. Praktik sederhananya termasuk pernyataan nilai pribadi satu kalimat yang ditempel di meja kerja, ritual jeda enam puluh detik sebelum merespons situasi memicu, dan jurnal refleksi tiga baris setiap hari. Kesalahan yang perlu dihindari adalah favoritisme, sarkasme yang mempermalukan, dan membawa masalah pribadi ke kelas. Sementara itu, kompetensi <strong>sosial</strong> adalah kemampuan membangun komunikasi efektif, kerja sama, dan kemitraan yang sehat dengan siswa, rekan, orang tua, serta masyarakat — diwujudkan lewat protokol mendengar RASA, penyampaian I-Message dan NVC saat menegur, komunitas praktik guru yang bertemu dua mingguan, serta rapat orang tua singkat namun efektif berisi data, contoh karya, dan rencana dukungan di rumah.</p>
  <p>Keempat kompetensi ini saling menopang: pedagogik memastikan proses belajar bermakna dan efektif, profesional menjaga kekuatan substansi, kepribadian menegakkan integritas yang menumbuhkan kepercayaan, dan sosial membangun jejaring kolaborasi yang memperluas dampak. Dengan keempatnya hidup dalam praktik sehari-hari — bukan sekadar teori di atas kertas — guru siap menghadapi tantangan era global dan melayani belajar siswa dengan mutu yang terus meningkat.</p>
</div>

<div class="card reveal">
  <h4>B. Guru Abad 21</h4>
  <p>Guru abad 21 adalah guru yang berpikir jernih, bekerja cerdas, dan berakhlak kuat. Ia menghidupkan yang dikenal sebagai <strong>4C</strong>: <em>kritis</em> (menguji informasi sebelum percaya, memakai pertanyaan pemantik tingkat tinggi seperti "mengapa" dan "bagaimana jika"), <em>kreatif</em> (menggabungkan yang ada menjadi solusi lebih baik, misalnya lewat teknik divergen-konvergen atau SCAMPER), <em>komunikatif</em> (jelas, singkat, dan menghormati lawan bicara lewat pola RASA dan SBI), serta <em>kolaboratif</em> (bekerja bersama dengan peran dan tujuan yang jelas, misalnya lewat teknik Jigsaw atau Gallery Walk). Ketika 4C mulai hidup di kelas, tandanya terlihat dari banyaknya pertanyaan "mengapa/bagaimana jika" yang muncul dari siswa sendiri, dan diskusi yang tidak lagi didominasi satu-dua orang.</p>
  <p>Guru abad 21 juga perlu memiliki literasi digital dan mengelola teknologi pendidikan secara bijak — bukan hanya bisa memakai gawai, tetapi paham, kritis, etis, dan aman: mengecek sumber dan bias informasi, menjaga privasi dan jejak digital, serta menggunakan kata sandi yang kuat. Prinsip utamanya adalah tujuan belajar dulu, alat menyusul — sebelum memilih aplikasi, guru perlu bertanya apa tujuannya, fitur mana yang benar-benar membantu, dan bagaimana proteksi datanya, dengan bantuan kerangka seperti <strong>SAMR</strong> (Substitution, Augmentation, Modification, Redefinition) atau <strong>TPACK</strong> yang menyeimbangkan konten, pedagogi, dan teknologi agar teknologi tidak menenggelamkan esensi mengajar. Etika penggunaan AI di kelas juga perlu ditegaskan: boleh digunakan untuk ide awal atau perbaikan draf, tetapi tidak boleh menjadi pengganti usaha siswa — karenanya siswa perlu dilatih membedakan antara "bantuan" dan "pengganti usaha", serta selalu menyertakan sumber dan mengedit ulang dengan kata sendiri.</p>
  <p>Pilar ketiga guru abad 21 adalah menjadi pembelajar sepanjang hayat, dengan sikap dasar rendah hati untuk belajar dan menjadikan umpan balik sebagai bahan bakar, bukan ancaman. Siklus peningkatan yang realistis berlangsung selama empat sampai delapan minggu: memilih fokus kecil (misalnya partisipasi diskusi), menentukan target yang terukur, merancang strategi, mengumpulkan data ringan, lalu merefleksikan dan merevisi secara berkala. Cara belajar yang efisien mencakup <em>microlearning</em> sepuluh hingga lima belas menit sehari, observasi sejawat, riset tindakan kelas mini, serta menjaga jadwal belajar tetap agar tidak membebani — misalnya satu peningkatan kecil per minggu, bukan banyak hal sekaligus, didukung komunitas praktik yang fokus pada data, bukan sekadar berkumpul.</p>
</div>

<div class="card reveal">
  <h4>C. Tantangan Global yang Dihadapi Guru</h4>
  <p>Guru hari ini tidak hanya berhadapan dengan buku dan kurikulum, melainkan juga perubahan besar di wajah murid, arus media sosial, kegelisahan nilai, dan beragam tekanan sosial. Tantangan pertama adalah <em>perubahan karakter siswa</em> yang kini jauh lebih beragam — ada yang cepat menyerap informasi, ada yang butuh langkah kecil berulang, ada yang membawa beban emosi dari rumah. Dampaknya di kelas terlihat pada kesenjangan partisipasi dan siswa yang cepat bosan. Strategi yang bisa diterapkan meliputi diferensiasi konten-proses-produk, ritme belajar yang jelas dengan rutinitas awal dan penutup refleksi, pendekatan <em>Universal Design for Learning</em> yang menyediakan beberapa cara mengakses materi, serta pendekatan peka-trauma yang menegur empat mata alih-alih mempermalukan.</p>
  <p>Tantangan kedua adalah pengaruh media sosial dan budaya instan — mendorong siswa serba cepat, mudah terdistraksi, dan ingin hasil tanpa proses, sehingga muncul dorongan "mencontek pintar" atau konflik akibat gosip di grup daring. Solusinya mencakup aturan gawai yang jelas dan konsisten, literasi digital untuk menilai sumber informasi, tugas yang mendorong kreasi ketimbang sekadar konsumsi konten, serta latihan "fokus bertahap" lewat sesi kerja hening yang durasinya dinaikkan perlahan. Tantangan ketiga adalah rendahnya kesadaran diri siswa itu sendiri — sulit menamai emosi, mudah bereaksi, dan enggan bertanggung jawab. Di sinilah guru dapat mengajarkan <em>check-in</em> emosi singkat di awal pelajaran, melatih teknik STOP bersama siswa saat suasana memanas, jurnal refleksi mingguan, serta I-Message agar siswa belajar mengungkapkan kebutuhan tanpa menyerang.</p>
  <p>Tantangan keempat, dan yang paling mendasar, adalah krisis moral di masyarakat — polarisasi, ujaran kebencian, dan budaya jalan pintas yang membuat siswa menyaksikan contoh yang saling bertentangan: di satu sisi diajari jujur, di sisi lain melihat ketidakjujuran dianggap biasa. Dampaknya adalah sikap sinis terhadap aturan dan rendahnya empati. Strategi menghadapinya meliputi penanaman nilai terintegrasi lewat rutinitas kelas, <em>honor code</em> disertai konsekuensi logis saat dilanggar, proyek <em>service learning</em> yang nyata seperti bank sampah atau literasi untuk adik kelas, dialog perbedaan yang aman dengan fokus pada ide bukan pribadi, serta yang terpenting — keteladanan guru yang konsisten pada janji, etika, dan keadilan, bahkan saat tidak ada yang melihat. Dengan langkah-langkah kecil yang konsisten ini, guru dapat mengubah keempat tantangan global tersebut menjadi kesempatan membentuk karakter dan cara belajar yang lebih kuat dan tahan uji.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat kompetensi inti (pedagogik, profesional, kepribadian, sosial) yang dibahas di bab ini, kompetensi mana yang paling perlu Anda kuatkan saat ini untuk menghadapi tantangan global di kelas Anda — dan langkah kecil apa yang bisa mulai dicoba pekan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Empat kompetensi inti yang menjadi fondasi profesionalisme guru menurut Bab 3 adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pedagogik, profesional, kepribadian, dan sosial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kritis, kreatif, komunikatif, dan kolaboratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Shidiq, Amanah, Tabligh, dan Fathanah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru ingin memakai aplikasi pembelajaran baru hanya karena aplikasi itu sedang tren di media sosial guru, tanpa mempertimbangkan apakah aplikasi tersebut benar-benar menjawab kebutuhan kelasnya. Berdasarkan prinsip literasi digital dan kerangka TPACK/SAMR pada Bab 3, apa yang keliru dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang keliru, karena mengikuti tren teknologi selalu menjamin pembelajaran menjadi lebih baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru seharusnya menentukan tujuan belajar terlebih dahulu sebelum memilih alat, agar teknologi tidak menenggelamkan pedagogi dan benar-benar menjawab kebutuhan kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru sebaiknya menghindari semua teknologi baru tanpa terkecuali demi keamanan</button>
  </div>
  <div class="quiz-q">
    <p>SMP Bina Bangsa mendapati banyak siswanya menyaksikan orang dewasa di sekitar mereka menormalisasi ketidakjujuran kecil, sehingga sebagian siswa mulai bersikap sinis terhadap aturan sekolah dan menganggap "asal nilai bagus". Berdasarkan Bab 3, kombinasi strategi paling tepat untuk menghadapi krisis moral semacam ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena krisis moral di masyarakat berada di luar kendali dan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah hukuman fisik yang lebih berat agar siswa jera dan tidak berani melanggar aturan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menanamkan nilai secara terintegrasi lewat rutinitas kelas, menerapkan honor code dengan konsekuensi logis, mengadakan service learning, serta menjaga keteladanan guru yang konsisten meski tidak ada yang mengawasi</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab3" onclick="markDone('bab3')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab3">✓ Bab 3 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab4: `
<p class="eyebrow reveal">Bab 4</p>
<h2 class="reveal">Pegangan #3: Integritas</h2>
<p class="lede reveal">Pegangan ketiga, sekaligus penopang dua pegangan sebelumnya, adalah integritas — keselarasan antara keyakinan, kata, dan tindakan yang menjadi sumber kepercayaan dari siswa, rekan guru, orang tua, dan lingkungan sekolah.</p>

<div class="card reveal">
  <h4>A. Makna Integritas dalam Dunia Pendidikan</h4>
  <p>Integritas adalah kesatuan antara yang diyakini, diucapkan, dan dilakukan. Bagi guru, integritas bukan sekadar citra baik, melainkan modal kepercayaan — tanpa kepercayaan, metode pengajaran terbaik sekalipun sulit berbuah. Pilar pertamanya adalah konsistensi antara ucapan dan perbuatan: integritas tampak saat janji ditepati dan aturan berlaku untuk semua, meski tidak ada yang melihat, karena siswa menilai "yang nyata", bukan "yang dikatakan", dan kepercayaan tumbuh pelan namun runtuh cepat. Contohnya sederhana — janji remedial yang dilaksanakan walau agenda padat, rubrik penilaian yang dibagikan sejak awal tanpa nilai "ditambah" tanpa bukti, atau tugas yang dikembalikan tepat waktu disertai umpan balik. Guru dapat menjaga konsistensi ini dengan alat bantu sederhana seperti <em>Service Level Agreement</em> akademik mini yang menetapkan jadwal pengembalian tugas dan waktu respons pesan orang tua.</p>
  <p>Pilar kedua adalah keteladanan di dalam dan di luar kelas — integritas bukan "peran" yang hanya dijalankan saat mengajar, sebab gaya bicara, jejak digital, dan cara menyelesaikan konflik di luar kelas turut mencerminkan nilai yang dipegang. Di dalam kelas, teladan tampak dari disiplin yang menenangkan dan bahasa yang memuliakan; di luar kelas, teladan tampak dari higiene digital seperti tidak menyebar data siswa atau mengeluh kasar di media sosial, serta etika saat bertemu orang tua. Guru tetap perlu menjaga batas sehat — ramah namun bukan "teman sebaya" tanpa batas, dan menghindari konflik kepentingan seperti mempromosikan usaha pribadi kepada siswa. Pilar ketiga adalah akhlak dan etika guru: akhlak menata niat dan sikap batin seperti jujur dan amanah, sementara etika menata aturan perilaku agar aman dan profesional — mencakup sepuluh butir kode etik praktis, mulai dari kejujuran akademik, amanah menjaga data, keadilan tanpa favoritisme, hingga etika digital yang tidak menyebar hoaks. Saat pelanggaran terjadi, langkah yang tepat adalah mengakui secara singkat, menjelaskan perbaikan, dan memulihkan dampaknya, bukan menutupinya.</p>
</div>

<div class="card reveal">
  <h4>B. Pilar-Pilar Integritas Guru</h4>
  <p>Integritas guru tampak dari empat pilar yang saling menguatkan. Pilar pertama, <strong>kejujuran akademik</strong>, berarti menilai berdasarkan bukti yang sah dan menolak kecurangan meski ada tekanan — diwujudkan lewat rubrik dan kriteria yang dibagikan sejak awal, asesmen berintegritas dengan soal bervariasi, transparansi nilai yang bisa dilacak ke bukti, serta anti-plagiarisme termasuk etika penggunaan AI. Jika kecurangan terjadi, SOP singkatnya adalah mengumpulkan fakta, berdialog empat mata, memberi konsekuensi logis seperti mengulang tugas disertai refleksi tertulis, dan mendidik ulang cara mengutip serta manajemen waktu — bukan sekadar menghukum. Pilar kedua, <strong>tanggung jawab dan disiplin</strong>, berarti menepati janji dan mengelola waktu tanpa mengorbankan kesehatan, lewat ritme kerja sehat seperti SLA akademik mini, RPP satu halaman, dan blok waktu yang jelas untuk <em>grading</em>, mengajar, dan istirahat — sembari menghindari jebakan seperti <em>overcommitment</em> dan perfeksionisme yang justru menguras energi.</p>
  <p>Pilar ketiga, <strong>sikap adil terhadap siswa</strong>, berarti memberi yang dibutuhkan agar semua bisa maju (<em>equity</em>), bukan sekadar memberi sama persis untuk semua (<em>equality</em>) — diwujudkan lewat diferensiasi, prinsip <em>Universal Design for Learning</em>, pengaturan giliran dan waktu tunggu bagi siswa pemalu, serta kewaspadaan terhadap bias seperti efek halo yang bisa diatasi dengan rubrik dan moderasi rekan saat ragu. Penegakan aturan pun harus konsisten dan proporsional, dengan pendekatan restoratif yang memulihkan dampak alih-alih sekadar menghukum. Pilar keempat, <strong>komitmen pada nilai Islam dan Pancasila</strong>, menjadikan nilai-nilai seperti iman, ihsan, amanah, dan adab berdampingan dengan sila-sila Pancasila — Ketuhanan, Kemanusiaan yang adil dan beradab, Persatuan, Musyawarah, dan Keadilan sosial — sebagai kompas moral dalam mengajar dan bermasyarakat. Wujudnya konkret: memulai pelajaran dengan salam dan doa singkat, menghormati martabat semua siswa tanpa diskriminasi, melibatkan siswa menyusun aturan kelas lewat musyawarah, serta mendorong proyek layanan masyarakat sebagai bentuk keadilan sosial. Dengan keempat pilar ini hidup dalam praktik harian, integritas bukan lagi slogan, melainkan menjadi nafas kerja guru yang menenangkan dan dipercaya.</p>
</div>

<div class="card reveal">
  <h4>C. Dampak Guru yang Berintegritas</h4>
  <p>Integritas guru bukan hanya urusan pribadi — ia menular menjadi kepercayaan orang tua dan masyarakat, hubungan yang hangat dengan siswa, dan lingkungan sekolah yang sehat. Kepercayaan orang tua tumbuh ketika mereka melihat guru konsisten, adil, dan transparan: rubrik dibagikan sejak awal, janji ditepati, dan komunikasi bersifat konstruktif — fakta singkat, apresiasi, tantangan yang terlihat, dan rencana tindak lanjut, bukan sekadar menyalahkan. Ketika kepercayaan ini tumbuh, kehadiran orang tua dalam pertemuan meningkat, keluhan menurun, dan orang tua bahkan menjadi advokat sukarela bagi sekolah.</p>
  <p>Hubungan yang harmonis dengan siswa juga lahir dari integritas guru, sebab belajar membutuhkan rasa aman — dan guru yang jujur, adil, serta menepati janji menciptakan rasa aman itu, sehingga siswa berani bertanya dan tidak takut salah. Cirinya tampak dari aturan yang jelas dan manusiawi, bahasa yang memuliakan yang mengkritik perilaku bukan pribadi, konsistensi keputusan untuk kasus yang sama, dan keterlibatan siswa lewat ruang bersuara. Terakhir, integritas guru menular menjadi budaya lingkungan sekolah yang sehat — aman secara psikologis, memiliki etika kerja yang jelas, kolaborasi nyata antarguru lewat komunitas praktik, serta <em>honor code</em> anti-plagiarisme yang ditandatangani bersama. Dampak sistemiknya luas: pengambilan keputusan menjadi lebih cepat karena berpijak pada nilai dan data, konflik internal menurun, dan sekolah dikenal publik karena keteladanan, bukan karena sensasi. Dengan integritas yang konsisten, guru tidak hanya mengubah kelasnya sendiri, tetapi ikut menyehatkan seluruh ekosistem pendidikan di sekitarnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pilar utama integritas (konsistensi ucapan-perbuatan, keteladanan di dalam & luar kelas, akhlak & etika) yang dibahas di bab ini, pilar mana yang menurut Anda paling sering diuji dalam keseharian mengajar Anda — dan bagaimana Anda biasanya menjaganya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4, empat pilar integritas guru yang saling menguatkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kejujuran akademik, tanggung jawab & disiplin, sikap adil, dan komitmen pada nilai Islam & Pancasila</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pedagogik, profesional, kepribadian, dan sosial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Refleksi, journaling, evaluasi diri, dan teknik STOP</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru memberi perlakuan yang sama persis kepada seluruh siswa tanpa mempertimbangkan bahwa sebagian siswa membutuhkan pendampingan ekstra untuk bisa mengejar ketertinggalan. Berdasarkan konsep keadilan (equity vs equality) pada Bab 4, apa yang perlu diperbaiki dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena memperlakukan semua siswa persis sama sudah otomatis adil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru perlu menerapkan equity — memberi yang dibutuhkan tiap siswa agar semua bisa maju, misalnya lewat diferensiasi dan pendampingan tambahan bagi yang tertinggal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru sebaiknya hanya fokus pada siswa yang sudah unggul agar prestasi sekolah meningkat</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah mendapati bahwa orang tua semakin jarang hadir dalam pertemuan dan sering mengeluh karena merasa tidak pernah diberi tahu perkembangan anak mereka secara jujur. Berdasarkan Bab 4 tentang dampak guru berintegritas, langkah paling tepat untuk memulihkan situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi komunikasi dengan orang tua agar keluhan tidak terus bertambah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun kembali transparansi dan konsistensi — rubrik dibagikan sejak awal, janji ditepati, dan komunikasi berisi fakta, apresiasi, serta rencana tindak lanjut yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menutupi tantangan yang dihadapi siswa agar orang tua tidak semakin kecewa</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab4" onclick="markDone('bab4')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab4">✓ Bab 4 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab5: `
<p class="eyebrow reveal">Bab 5</p>
<h2 class="reveal">Strategi Menumbuhkan Kesadaran Diri</h2>
<p class="lede reveal">Setelah memahami ketiga pegangan, pertanyaan berikutnya adalah bagaimana menumbuhkan kesadaran diri secara nyata dan berkelanjutan — lewat refleksi dan muhasabah, teknik STOP, latihan empati dan komunikasi positif, semangat belajar sepanjang hayat, serta latihan keterampilan sosial.</p>

<div class="card reveal">
  <h4>A. Refleksi & Muhasabah</h4>
  <p>Refleksi dan muhasabah berfungsi sebagai rem agar guru tidak bereaksi berlebihan, kompas agar keputusan sejalan dengan nilai, dan cermin agar guru belajar dari pengalaman alih-alih mengulang kesalahan. Praktik pertama adalah doa dan ibadah sebagai sumber kekuatan — ritual mikro seperti niat, syukur, dan doa singkat sebelum kelas selama tiga kali sepuluh detik, serta istighfar dan doa penutup di akhir pelajaran, membantu menata hati agar lebih sabar dan adil. Praktik kedua adalah <em>journaling</em> pikiran dan perasaan, sebab menulis membuat yang samar menjadi terlihat — formatnya bisa berupa <strong>PEKA</strong> (Peristiwa, Emosi, Kalimat pikiran, Aksi perbaikan) yang dikerjakan dalam tiga sampai lima menit, misalnya mencatat peristiwa tujuh siswa yang tidak mengumpulkan tugas, menamai emosi kesal pada skala enam dari sepuluh, mengenali pikiran otomatis "mereka malas" lalu mengubahnya (<em>reframing</em>) menjadi "mereka belum paham langkah dua", dan merancang aksi perbaikan esok hari.</p>
  <p>Praktik ketiga adalah evaluasi diri setelah mengajar, yang bertujuan bukan untuk menyalahkan melainkan belajar dari data, lewat kerangka <strong>3R</strong>: Rekam (data ringan seperti hasil <em>exit ticket</em> dan persentase tugas terkumpul), Renungkan (mengapa hal itu terjadi — apakah instruksi cukup jelas), dan Rencanakan (satu perubahan kecil untuk pertemuan berikutnya). Sebagai contoh, jika data menunjukkan partisipasi hanya 32% dan banyak kesalahan di "langkah 2", guru bisa merencanakan pembukaan dengan modeling singkat dan latihan berpasangan sebelum latihan mandiri, dengan target partisipasi naik menjadi 60%. Ketiga praktik ini — doa, jurnal, dan evaluasi pasca-mengajar — bila dilakukan secara sedikit namun konsisten, mengubah kesadaran diri dari sesuatu yang abstrak menjadi ritual harian yang menenangkan hati dan memperbaiki praktik mengajar secara berkelanjutan.</p>
</div>

<div class="card reveal">
  <h4>B. Teknik STOP (Stop, Take a Breath, Observe, Proceed)</h4>
  <p>STOP adalah tombol jeda sadar selama sekitar tiga puluh hingga sembilan puluh detik yang sangat kuat untuk menjaga wibawa dan kejernihan di kelas. Empat langkahnya sederhana: <em>Stop</em> (menghentikan ucapan atau gerak sejenak), <em>Take a Breath</em> (menarik napas empat hitungan, menahan dua, menghembuskan enam, diulang tiga sampai lima kali), <em>Observe</em> (mengamati cepat kondisi tubuh, emosi, pikiran, dan konteks fakta), dan <em>Proceed</em> (memilih langkah kecil terbaik dengan suara rendah dan kalimat pendek). Guru dapat membawa "<em>toolkit</em> emosi" sederhana setiap hari — jam tangan untuk mengukur jeda, air minum, kartu skala emosi, dan frasa jangkar di sticky note seperti "Pelan. Data. Solusi." — serta menerapkan protokol sebelum-saat-sesudah: mengenali pemicu pribadi sebelum kondisi memanas, melakukan STOP saat momen panas terjadi, dan mencatat tiga kolom peristiwa-emosi-respon sesudahnya untuk pembelajaran ke depan.</p>
  <p>Teknik STOP menjadi jauh lebih efektif ketika digabungkan dengan interaksi guru-siswa lewat pola tiga langkah: STOP, lalu I-Message (observasi-perasaan-kebutuhan-permintaan), lalu mengarahkan ke solusi dengan pilihan yang jelas dan konsekuensi logis. Guru bahkan dapat melatih siswa memakai STOP sendiri lewat poster empat langkah di kelas, <em>drill</em> singkat di awal pekan, kartu saku berisi kalimat pandu, atau kode tangan sebagai sinyal jeda saat diskusi memanas. STOP juga bisa diterapkan dalam berbagai konteks — sebelum ujian untuk mengatur napas, sebelum presentasi untuk menenangkan diri, bahkan di kelas daring dengan mengetik "PAUSE 60s" di kolom obrolan. Yang penting diingat, STOP bukan berarti menunda tanggung jawab — konsekuensi tetap ada, hanya saja disampaikan tanpa ledakan emosi, dan bila emosi sudah di atas delapan dari sepuluh, guru boleh meminta rekan menjaga kelas sejenak sebelum kembali dengan kepala dingin.</p>
</div>

<div class="card reveal">
  <h4>C. Latihan Empati & Komunikasi Positif</h4>
  <p>Empati membantu guru melihat dari sudut pandang siswa, sedangkan komunikasi positif memastikan pesan tersampaikan tanpa melukai martabat. Memahami sudut pandang siswa berarti mencoba memahami perasaan dan kebutuhan mereka tanpa harus setuju, apalagi membenarkan pelanggaran — memvalidasi emosi, lalu tetap menetapkan batas perilaku. Langkah praktisnya mencakup mendengar utuh dengan pola RASA, memisahkan orang dari perilaku ("kamu anak baik, perilakumu barusan yang perlu kita perbaiki"), mencari kebutuhan di balik perilaku, serta menawarkan pilihan kecil yang sama-sama aman dan mendidik. Setelah empati, <strong>I-Message</strong> menjaga kejelasan tanpa menyalahkan lewat struktur observasi-perasaan/kebutuhan-permintaan, misalnya "Tugas kelompokmu belum terkumpul. Ibu khawatir karena kita butuh latihan konsisten. Kumpulkan besok jam 10." Kesalahan umum yang perlu dihindari adalah kalimat generalisasi seperti "kamu selalu...", khotbah panjang, dan nada sarkastik — ganti dengan fakta spesifik, kalimat pendek, dan nada netral namun tegas.</p>
  <p>Relasi yang harmonis di kelas ibarat rekening kepercayaan yang membutuhkan setoran kecil rutin: sapaan dengan kontak mata, rasio apresiasi yang lebih besar dari koreksi (misalnya tiga banding satu), aturan bersama yang dievaluasi mingguan, serta ritual adil seperti giliran bicara dan waktu tunggu bagi siswa pemalu. Guru juga perlu membangun kanal suara siswa lewat kotak saran anonim atau survei mikro bulanan, serta menerapkan pendekatan restoratif ketika pelanggaran terjadi — memulihkan hubungan lewat permintaan maaf yang tulus dan rencana perbaikan tertulis, bukan sekadar menghukum. Ketika empati, I-Message, dan relasi yang dibangun secara konsisten ini berjalan bersamaan, kelas menjadi lebih tenang dengan instruksi minimal, konflik lebih cepat selesai, dan siswa merasa lebih aman untuk bersuara.</p>
</div>

<div class="card reveal">
  <h4>D. Menjadi Guru Pembelajar Sepanjang Hayat</h4>
  <p>Guru yang terus belajar akan lebih tenang, jernih, dan berdampak — kuncinya adalah memilih belajar yang relevan, menguji satu perubahan kecil di kelas, lalu merefleksikan datanya. Mengikuti pelatihan dan seminar sebaiknya didasari kebutuhan kelas, bukan sekadar mengejar sertifikat, dan idealnya mengikuti siklus tujuh puluh dua jam hingga empat minggu: menulis pertanyaan sebelum ikut pelatihan, mengambil maksimal tiga ide inti saat pelatihan, mengujinya pada satu kelas dalam waktu tujuh puluh dua jam, lalu mengumpulkan data ringan selama beberapa minggu berikutnya. Membaca dan berdiskusi juga penting, dengan prinsip membaca sedikit tapi ajeg dan menerjemahkannya ke tindakan — misalnya sepuluh hingga lima belas menit membaca setiap hari, satu artikel per minggu, dan lingkar diskusi dua mingguan yang selalu menghasilkan satu praktik nyata untuk diuji.</p>
  <p>Jalur ketiga adalah kolaborasi antarguru, yang efektif bila aman, terarah, dan berbasis data ringan — bukan sekadar berkumpul. Bentuknya bisa berupa <em>Professional Learning Community</em> (PLC) dua mingguan dengan satu fokus tertentu, <em>Lesson Study</em> dengan siklus Plan-Do-See di mana satu pelajaran diamati bersama dan refleksinya difokuskan pada belajar siswa bukan menghakimi guru, observasi sejawat dua puluh menit disertai sepuluh menit umpan balik, atau siklus <strong>PDSA</strong> (Plan, Do, Study, Act) selama empat sampai enam minggu untuk menguji satu perubahan kecil seperti mempercepat transisi antarkegiatan. Aturan mainnya menjaga keselamatan psikologis: fokus pada perilaku dan data bukan pribadi, kerahasiaan dijaga, dan umpan balik memakai kerangka SBI. Ketiga jalur belajar sepanjang hayat ini — pelatihan, bacaan, dan kolaborasi — akan optimal bila selalu berakhir pada satu praktik nyata yang diuji dan didokumentasikan, bukan sekadar catatan yang tersimpan tanpa tindak lanjut.</p>
</div>

<div class="card reveal">
  <h4>E. Latihan Keterampilan Sosial</h4>
  <p>Keterampilan sosial bisa dilatih, dan tiga kemampuan berikut akan membuat kelas lebih tenang serta hubungan lebih kuat. <strong>Mendengarkan aktif</strong> berarti hadir sepenuhnya untuk memahami isi dan rasa lawan bicara sebelum merespons — perilaku intinya mencakup sikap tubuh yang terbuka (dikenal dengan akronim SOLER), pola RASA, jeda tiga sampai lima detik sebelum merespons, dan parafrasa singkat seperti "jadi, yang kamu rasakan... karena... betul?". <strong>Komunikasi efektif</strong> berarti jelas, singkat, sopan, dan menggerakkan tindakan — kerangka praktisnya adalah "3C + CC": Context (konteks singkat), Command (perintah jelas), Check (cek pemahaman dengan meminta siswa mengulang), Chunk (memecah instruksi jadi langkah kecil), dan <em>Cold call</em> yang hangat, dilengkapi umpan balik SBI yang selalu disertai langkah berikutnya.</p>
  <p>Keterampilan ketiga adalah merespons kritik secara positif — kritik adalah informasi, dan tugas guru adalah memilah yang berguna sambil menjaga martabat, tanpa bersikap defensif. Kerangkanya dikenal sebagai <strong>4R</strong>: Receive (mendengar sampai tuntas), Reflect (mengulang singkat apa yang didengar), Reframe (mencari niat baik di balik kritik), dan Respond (mengucap terima kasih disertai langkah kecil dan waktu tindak lanjut). Ketika kritik datang dengan nada tinggi atau kurang akurat, guru tetap bisa memvalidasi perasaan sambil meluruskan fakta, memberi batas yang sopan, bahkan menunda percakapan bila emosi sedang tinggi. Guru yang mampu menerima kritik dengan kerangka ini biasanya bisa menyebut satu atau dua perbaikan nyata yang lahir dari masukan tersebut setiap bulan, dan rekan maupun orang tua pun menjadi semakin nyaman memberi masukan karena tahu akan ditangani dengan hormat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima strategi menumbuhkan kesadaran diri (refleksi & muhasabah, teknik STOP, empati & komunikasi positif, belajar sepanjang hayat, keterampilan sosial) yang dibahas di bab ini, strategi mana yang paling belum menjadi kebiasaan Anda — dan bagaimana Anda akan mulai melatihnya dalam dua minggu ke depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Format jurnal singkat "Peristiwa – Emosi – Kalimat pikiran – Aksi perbaikan" yang disebut pada Bab 5 dikenal dengan singkatan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">PEKA</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">SOLER</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">PDSA</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu langsung membalas dan berdebat setiap kali menerima kritik dari orang tua, sehingga percakapan sering memanas dan tidak pernah berujung solusi. Berdasarkan kerangka 4R pada Bab 5, langkah pertama yang seharusnya dilakukan sebelum merespons adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera membela diri dengan data agar orang tua tidak salah paham</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendengarkan kritik itu sampai tuntas (Receive) sebelum mengulang dan mencari niat baik di baliknya, baru kemudian merespons dengan langkah kecil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan kritik tersebut karena orang tua dianggap tidak memahami proses belajar di kelas</button>
  </div>
  <div class="quiz-q">
    <p>Bu Wati merasa dua siswanya sering menyela diskusi kelompok, dan ia ingin menegur tanpa membuat mereka defensif atau mempermalukan di depan teman-temannya. Berdasarkan pola I-Message pada Bab 5, kalimat yang paling tepat digunakannya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">"Kalian berdua memang selalu tidak sopan dan tidak menghargai teman!"</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">"Ketika kalian menyela, Ibu sulit mendengar ide teman kalian. Ibu butuh semua merasa aman bicara. Tunggu giliran, ya."</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mendiamkan kedua siswa tersebut sepanjang sisa pelajaran tanpa penjelasan apa pun</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab5" onclick="markDone('bab5')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab5">✓ Bab 5 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab6: `
<p class="eyebrow reveal">Bab 6</p>
<h2 class="reveal">Dampak Guru Sadar Diri & Berintegritas</h2>
<p class="lede reveal">Ketika kesadaran diri, profesionalisme, dan integritas hidup bersamaan dalam praktik harian, dampaknya tidak berhenti pada guru itu sendiri — ia merembes menjadi kebaikan bagi siswa, sekolah, hingga masyarakat luas.</p>

<div class="card reveal">
  <h4>A. Dampak Positif bagi Guru</h4>
  <p>Guru yang sadar diri dan berintegritas biasanya lebih tenang, lebih percaya diri, dan lebih sejahtera secara psikologis. Ketenangan lahir dari jeda sadar seperti teknik STOP, ritme dan rencana yang jelas seperti RPP satu halaman dan rubrik sederhana, serta nilai yang menjadi kompas pengambilan keputusan. Kepercayaan diri tumbuh dari pengalaman berhasil yang diulang (<em>small wins</em>), umpan balik yang spesifik, dan portofolio bukti — ketika guru melihat data kecil yang membaik, seperti partisipasi yang naik atau miskonsepsi yang turun, keyakinan bertambah bukan karena pujian, melainkan karena bukti nyata. Praktik harian yang menumbuhkan ketenangan ini termasuk pra-kelas singkat berisi niat dan tiga napas panjang, penerapan STOP saat kelas memanas, serta kebiasaan mencatat dua "kemenangan kecil" setiap hari.</p>
  <p>Selain tenang dan percaya diri, kesadaran diri dan integritas juga meningkatkan kesejahteraan psikologis (<em>well-being</em>) — kondisi saat guru merasa bermakna, terhubung, berdaya, dan bugar, bukan berarti bebas masalah, melainkan memiliki cadangan tenaga untuk mengelola masalah secara sehat. Lima pilarnya dirangkum dalam istilah "MAKMU": Makna (niat mengajar dan dampak pada murid), Autonomi (batas kerja-istirahat yang jelas), Kompetensi (satu peningkatan kecil per minggu), Mitra (teman seperjalanan lewat komunitas praktik), dan Urutkan energi (tidur cukup, gerak ringan, jeda singkat). Kebiasaan mingguan yang realistis mencakup <em>pulse check</em> lima butir untuk memantau energi dan emosi, blok waktu pulih tanpa gawai, refleksi Jumat singkat, serta higiene digital seperti jam sunyi malam hari. Tanda kesejahteraan yang membaik terlihat dari tidur yang lebih nyenyak, kesabaran dan humor yang kembali hadir di kelas, serta siklus negatif marah-menyesal-lelah yang makin jarang terjadi — sebaliknya, bila kelelahan tak kunjung hilang meski sudah istirahat, itu tanda peringatan untuk segera mengurangi beban dan mencari dukungan.</p>
</div>

<div class="card reveal">
  <h4>B. Dampak Positif bagi Siswa</h4>
  <p>Guru yang sadar diri dan berintegritas menghadirkan kelas yang aman, hangat, dan jelas arahnya, dengan dampak yang langsung terasa pada siswa. Dampak pertama adalah hubungan yang harmonis — sebab belajar membutuhkan rasa aman, dan ketika guru konsisten, adil, serta berbahasa yang memuliakan, siswa berani bertanya dan tidak takut salah. Pilarnya adalah rasa hormat dua arah, kejelasan harapan tentang aturan dan konsekuensi, serta bahasa yang menenangkan lewat I-Message dan SBI. Kebiasaan harian sederhana seperti menyapa dengan kontak mata, rasio apresiasi yang lebih besar dari koreksi, dan kotak saran untuk mendengar suara siswa membuat mereka lebih mudah bercerita sebelum masalah membesar, sehingga konflik kecil jarang melebar.</p>
  <p>Dampak kedua adalah lingkungan belajar yang kondusif — kelas yang aman secara psikologis, memiliki rutinitas dan ritme yang jelas, struktur instruksi yang membantu lewat "3C + CC", serta proses yang adil dan transparan lewat rubrik dan <em>honor code</em>. Ketika lingkungan seperti ini terbangun, siswa lebih fokus, lebih cepat memulai kerja, dan lebih lama bertahan pada tugas, sementara miskonsepsi menurun karena ada pengecekan pemahaman secara berkala. Dampak ketiga adalah tumbuhnya kemandirian dan prestasi siswa, yakni kemampuan merencanakan, memantau, dan mengevaluasi belajarnya sendiri (<em>self-regulated learning</em>). Ini dibangun lewat penulisan tujuan belajar dengan bahasa siswa sendiri, <em>scaffolding</em> yang dilepas bertahap dari modeling menuju latihan mandiri, checklist sederhana untuk mengecek diri sebelum mengumpulkan tugas, serta refleksi singkat di akhir pelajaran. Hasilnya, nilai meningkat seiring dengan pemahaman — bukan sekadar hafalan — dan siswa mulai berani merevisi karyanya sendiri karena bangga pada proses, bukan hanya pada hasil akhir.</p>
</div>

<div class="card reveal">
  <h4>C. Dampak Positif bagi Sekolah & Masyarakat</h4>
  <p>Ketika banyak guru menjaga kesadaran diri dan integritas, dampaknya tidak berhenti di kelas — ia merembes menjadi budaya sekolah yang positif. Budaya ini dirangkum dalam lima pilar yang disebut "5A": Aman secara psikologis, Adil dan transparan, Apresiatif dengan rasio apresiasi lebih besar dari koreksi, Akuntabel di mana janji ditepati dan data dipakai untuk perbaikan, serta Antikolusi yang menolak jalan pintas seperti nilai "titipan". Program sederhana yang memperkuat budaya ini antara lain komunitas praktik guru dua mingguan, <em>Lesson Study</em>, ritual sekolah seperti salam-senyum-sapa, serta <em>honor code</em> yang disertai pendekatan restoratif saat pelanggaran terjadi.</p>
  <p>Budaya positif ini pada gilirannya menumbuhkan kepercayaan orang tua — sebab orang tua adalah mitra utama, dan ketika mereka melihat ketegasan yang adil serta komunikasi yang rapi, kepercayaan tumbuh dan mempermudah kerja sama. Praktiknya mencakup transparansi nilai, protokol komunikasi lima sampai tujuh kalimat yang berisi fakta, apresiasi, tantangan, dan rencana bersama, pertemuan orang tua yang efektif dan singkat, serta pesan positif berkala yang tidak hanya dikirim saat ada masalah. Pada akhirnya, dampak ini bermuara pada kontribusi bagi bangsa — sekolah adalah "pabrik nilai" bangsa, dan guru yang berintegritas melahirkan warga yang jujur, tangguh, cakap bekerja sama, dan cinta lingkungan, sejalan dengan profil pelajar Pancasila. Empat jalur kontribusinya adalah penguatan karakter dan etika publik sebagai vaksin terhadap budaya korupsi kecil-kecilan, literasi dan numerasi yang bermakna agar siswa tidak mudah termakan hoaks, gotong royong dan kepedulian lingkungan lewat proyek nyata, serta kewargaan digital yang beretika. Dengan langkah kecil yang konsisten dari setiap guru, sekolah menjadi tempat yang sehat dan dipercaya, sekaligus menyumbang kualitas manusia Indonesia yang berkarakter dan kolaboratif.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga lapis dampak (bagi guru, bagi siswa, bagi sekolah & masyarakat) yang dibahas di bab ini, dampak mana yang paling ingin Anda perkuat di lingkungan kerja Anda saat ini — dan siapa yang bisa Anda ajak berkolaborasi untuk mewujudkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Lima pilar kesejahteraan psikologis guru yang dirangkum dalam istilah "MAKMU" pada Bab 6 mencakup Makna, Autonomi, Kompetensi, Mitra, dan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Urutkan energi (tidur cukup, gerak ringan, jeda singkat)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Uang tambahan dari kerja sampingan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ujian rutin bagi siswa setiap minggu</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa lelah terus-menerus meski sudah cukup tidur, mulai sinis terhadap pekerjaannya, dan sulit merasa bangga atas kemajuan kecil siswanya. Berdasarkan Bab 6 tentang tanda peringatan kesejahteraan psikologis, langkah paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jam kerja agar semua tugas selesai lebih cepat dan rasa lelah hilang dengan sendirinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membicarakannya dengan atasan atau rekan, mengurangi komitmen non-esensial untuk sementara, dan mempertimbangkan dukungan profesional bila berlanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan tanda-tanda ini karena kelelahan adalah bagian normal dari profesi guru yang tidak perlu ditangani</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin menumbuhkan budaya "5A" (Aman, Adil, Apresiatif, Akuntabel, Antikolusi) tetapi bingung memulai dari mana karena guru-gurunya bekerja sendiri-sendiri tanpa forum berbagi praktik. Berdasarkan Bab 6, langkah awal paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu seluruh guru menguasai teori terlebih dahulu sebelum mempraktikkan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membentuk komunitas praktik guru (PLC) dua mingguan dengan fokus satu topik, disertai ritual sekolah sederhana seperti salam-senyum-sapa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberi sanksi kepada guru yang belum menerapkan kelima pilar budaya secara sempurna</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab6" onclick="markDone('bab6')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab6">✓ Bab 6 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab7: `
<p class="eyebrow reveal">Bab 7</p>
<h2 class="reveal">Tips Praktis Untuk Guru Sepenuh Hati</h2>
<p class="lede reveal">Sebagai penutup dari perjalanan buku ini, bab terakhir menawarkan rutinitas sederhana yang bisa langsung dipraktikkan, checklist harian sebagai cermin kesadaran diri, serta kisah nyata guru-guru yang berhasil menghidupkan tiga pegangan dalam keseharian mereka.</p>

<div class="card reveal">
  <h4>A. Rutinitas Sederhana</h4>
  <p>Rutinitas kecil yang dilakukan ajeg lebih kuat daripada perubahan besar yang hanya sesaat. Kebiasaan pertama adalah refleksi lima menit setiap hari, memakai format <strong>3R</strong> — Rekam fakta singkat yang terjadi, Renungkan makna dan emosi yang menyertainya, lalu Rencanakan satu langkah kecil untuk esok hari. Refleksi ini sebaiknya dilakukan di waktu dan tempat yang tetap, misalnya setelah jam terakhir di meja guru, dengan media bebas berupa buku kecil atau catatan digital, dan dibatasi maksimal lima baris agar tidak melelahkan. Kebiasaan kedua adalah mengucapkan tiga hal positif tentang diri sendiri setiap hari, mengikuti pola "3P": Proses (apa yang dilakukan dengan benar), Progres (apa yang membaik walau kecil), dan Prinsip (nilai yang dipegang hari itu) — ini bukan narsisme, melainkan kejujuran pada kebaikan yang sudah dikerjakan, dan terbukti membuat guru lebih tenang serta percaya diri tanpa harus menunggu pujian orang lain.</p>
  <p>Kebiasaan ketiga adalah mendengarkan sebelum berbicara, sebab sebagian besar konflik di kelas selesai ketika lawan bicara merasa dipahami lebih dulu. Teknik RASA — Receive, Appreciate, Summarize, Ask — dapat dipraktikkan dalam waktu sekitar enam puluh detik: hadir penuh, memberi tanda kecil seperti anggukan, meringkas balik dalam satu kalimat, lalu mengajukan satu pertanyaan klarifikasi. Ketiga rutinitas ini — refleksi 3R, tiga hal positif, dan mendengarkan RASA — dirancang untuk dijalankan secara konsisten selama empat belas hari pertama: tujuh hari pertama fokus pada konsistensi tanpa perlu sempurna, tujuh hari berikutnya mulai mengukur dampaknya lewat data sederhana seperti partisipasi atau suasana kelas, dan pada hari keempat belas dilakukan evaluasi singkat untuk mempertahankan yang berhasil dan menyederhanakan yang merepotkan.</p>
</div>

<div class="card reveal">
  <h4>B. Checklist Kesadaran Diri Guru</h4>
  <p>Checklist ini berfungsi sebagai cermin harian yang singkat dan jujur, dibangun dari tiga pertanyaan inti. Pertanyaan pertama, "Apakah saya sudah reflektif hari ini?", ditandai dengan menuliskan refleksi 3R, menetapkan satu keputusan kecil untuk besok, menyimpan data mini seperti hasil <em>exit ticket</em>, dan mencatat dua "kemenangan kecil" yang layak disyukuri. Pertanyaan kedua, "Apakah saya sudah mengelola emosi dengan baik?", ditandai dengan penggunaan teknik STOP sebelum menegur, nada suara yang tetap rendah, teguran yang fokus pada perilaku bukan label pribadi, serta adanya batas sehat seperti waktu respons pesan dan waktu pulih. Bila jawabannya belum, guru bisa segera melakukan STOP dalam enam puluh hingga sembilan puluh detik dan mencatat tiga kolom peristiwa-emosi-respon setelahnya.</p>
  <p>Pertanyaan ketiga, "Apakah saya sudah memberi keteladanan?", ditandai dengan janji yang ditepati, aturan yang berlaku konsisten untuk semua, transparansi rubrik sejak awal, dan higiene digital yang menjaga privasi siswa. Ketiga pertanyaan ini dirangkum dalam checklist harian dua belas butir yang bisa diberi skor nol hingga empat per butir, dengan total maksimal empat puluh delapan — skor tiga puluh enam ke atas berarti mantap dan tinggal mempertahankan sambil memilih satu fokus unggulan, skor dua puluh empat hingga tiga puluh lima berarti perlu menstabilkan tiga butir prioritas selama dua minggu, dan skor di bawah dua puluh empat berarti perlu meminta dukungan mentor atau rekan sambil memulai dari satu atau dua kebiasaan inti. Dengan checklist sederhana ini digunakan secara rutin, guru memiliki cara nyata dan terukur untuk memantau kemajuan kesadaran diri, pengelolaan emosi, dan keteladanannya dari hari ke hari.</p>
</div>

<div class="card reveal">
  <h4>C. Studi Kasus & Inspirasi Guru</h4>
  <p>Cerita nyata membantu melihat bagaimana prinsip berubah menjadi praktik. Bu Rani, guru kelas 4 SD, berhasil mengubah kelasnya dari gaduh menjadi fokus dalam enam minggu lewat kombinasi STOP saat emosi naik, rutinitas transisi yang jelas, instruksi terstruktur, dan rasio apresiasi tiga banding satu — hasilnya, rata-rata waktu transisi turun drastis dan tugas yang tepat waktu naik dari sekitar 60% menjadi 90%. Pak Andi, guru Matematika SMP, mengubah kelas yang penuh rasa takut dan kebiasaan "menyontek cerdas" menjadi kelas yang berani mencoba lewat peta miskonsepsi, rubrik tiga kriteria yang dibagikan sejak awal, dan <em>honor code</em> disertai literasi etika AI — skor formatif rata-rata naik dan kasus mencontek turun tajam. Bu Laila, guru Bahasa Indonesia SMA yang sempat kelelahan dan mudah kesal karena lembur tanpa arah, pulih dan kembali berdampak lewat SLA akademik mini, refleksi 3R harian, serta delegasi dan kolaborasi dengan rekan sejawat. Sementara itu, Ustadz Farhan di sebuah Madrasah Aliyah berhasil menata etika digital kelasnya yang sering terdistraksi gawai lewat aturan gawai yang jelas, kelas literasi digital, dan poster STOP untuk meredakan diskusi yang memanas.</p>
  <p>Selain kisah individual, ada pula lima praktik baik di tingkat sekolah yang mudah direplikasi: <strong>PLC dua mingguan disertai Lesson Study</strong> dengan siklus Plan-Do-See untuk memperbaiki satu aspek pengajaran secara kolektif; <strong>Honor Code dan pendekatan restoratif</strong> untuk menumbuhkan kejujuran akademik tanpa mempermalukan; <strong>pojok refleksi dan STOP sembilan puluh detik</strong> untuk menenangkan kelas dan membiasakan muhasabah; <strong>laporan progres lima sampai tujuh kalimat</strong> kepada orang tua secara berkala untuk membangun kepercayaan; serta <strong>Service Learning enam minggu</strong> yang melatih karakter dan kepedulian sosial siswa lewat proyek nyata bersama komunitas. Kisah-kisah dan praktik-praktik ini menunjukkan satu benang merah yang sama: langkah kecil yang konsisten, berbasis nilai dan data ringan, mampu mengubah suasana kelas dan energi guru secara nyata — sebagaimana ditegaskan di penutup buku ini, guru sepenuh hati adalah guru yang sadar diri, profesional, dan berintegritas, dan dari guru seperti itulah lahir generasi emas yang berpikir kritis, berempati, jujur, dan siap bekerja sama membangun masa depan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat kisah guru (Bu Rani, Pak Andi, Bu Laila, Ustadz Farhan) yang dibahas di bab ini, kisah siapa yang paling mendekati tantangan yang sedang Anda hadapi saat ini — dan langkah konkret apa dari kisah tersebut yang ingin Anda coba terapkan mulai minggu depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Pola "3P" yang digunakan untuk mengucapkan tiga hal positif tentang diri sendiri pada Bab 7 terdiri dari Proses, Progres, dan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prestasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Presentasi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru merasa kewalahan karena mencoba menerapkan seluruh rutinitas dan checklist dari Bab 7 sekaligus sejak hari pertama, sehingga ia justru merasa gagal dan berhenti di hari ketiga. Berdasarkan pendekatan "Rencana 14 Hari" pada Bab 7, apa yang seharusnya ia lakukan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap memaksakan semua rutinitas sekaligus karena perubahan besar harus dilakukan secara instan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Fokus konsisten pada kebiasaan inti selama tujuh hari pertama tanpa perlu sempurna, baru mulai mengukur dampaknya secara bertahap pada hari kedelapan hingga empat belas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Berhenti total mencoba rutinitas apa pun karena dianggap terlalu rumit untuk guru baru</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah terinspirasi oleh kisah Pak Andi (guru Matematika SMP) yang berhasil menurunkan kasus mencontek lewat rubrik transparan dan honor code, dan ingin mereplikasi keberhasilan itu ke skala sekolah. Berdasarkan lima praktik baik pada Bab 7, langkah yang paling sesuai untuk direplikasi secara kelembagaan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menugaskan hanya Pak Andi sendirian untuk mengawasi kejujuran akademik seluruh siswa di sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan Honor Code & pendekatan restoratif secara kelembagaan, disertai PLC dua mingguan agar praktik baik ini dibagikan dan diperkuat lintas guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah ujian tertulis sebagai satu-satunya cara memastikan kejujuran akademik</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab7" onclick="markDone('bab7')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab7">✓ Bab 7 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

asesmen: `
<p class="eyebrow reveal">Asesmen</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku ini lewat 20 soal berikut. Skor Anda (0–100) akan muncul setelah menekan tombol "Periksa Jawaban Saya" di bagian akhir.</p>

<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, empat nilai kenabian yang menjadi pedoman guru dalam perspektif Islam adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Shidiq, Amanah, Tabligh, dan Fathanah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Iman, Islam, Ihsan, dan Taqwa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Disiplin, Kreatif, Mandiri, dan Peduli</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin menjalankan gerakan sosial kecil di kelas namun bingung memulainya agar terarah dan tidak layu di tengah jalan. Berdasarkan kerangka "6T" pada Bab 1, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menumbuhkan skala program ke seluruh sekolah tanpa uji coba</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menemukan masalah prioritas yang dekat dan dapat dijangkau, lalu menelusuri akar masalahnya sebelum menetapkan target kecil yang terukur</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu izin resmi dari pihak luar sebelum melakukan apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Teknik jeda sadar singkat (30–90 detik) untuk menenangkan sistem emosi sebelum merespons, sebagaimana dibahas pada Bab 2 dan Bab 5, dikenal dengan singkatan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">RASA</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">STOP (Stop, Take a breath, Observe, Proceed)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">SBI</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru selalu berpikir "siswa ini pemalas" setiap kali muridnya terlambat mengumpulkan tugas, dan pikiran itu langsung memicu kemarahan. Berdasarkan konsep "segitiga" pikiran-emosi-perilaku pada Bab 2, langkah paling tepat untuk memutus pola ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan pola ini terus terjadi karena emosi guru adalah hal yang wajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengambil jarak aman dari pikiran otomatis, misalnya mengubahnya menjadi "saya sedang berpikir siswa ini tidak bersemangat"</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari siswa yang sering terlambat agar guru tidak perlu mengelola emosinya</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Bu Sinta terus-menerus membatin "saya guru yang buruk" setelah satu kesalahan kecil. Berdasarkan konsep self-esteem dan self-compassion pada Bab 2, langkah paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terus mengulang kalimat negatif tersebut agar semakin waspada</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyalahkan pihak lain atas hilangnya rasa percaya dirinya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memisahkan diri dari perbuatan — mengganti "saya guru yang buruk" menjadi "strategi hari ini belum efektif" — sambil tetap bertanggung jawab memperbaikinya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, empat kompetensi inti yang menjadi fondasi profesionalisme guru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pedagogik, profesional, kepribadian, dan sosial</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kritis, kreatif, komunikatif, dan kolaboratif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Shidiq, Amanah, Tabligh, dan Fathanah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru ingin memakai aplikasi pembelajaran baru hanya karena sedang tren, tanpa mempertimbangkan kebutuhan kelasnya. Berdasarkan prinsip literasi digital pada Bab 3, apa yang keliru dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang keliru, karena mengikuti tren selalu menjamin pembelajaran lebih baik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru seharusnya menentukan tujuan belajar terlebih dahulu sebelum memilih alat, agar teknologi tidak menenggelamkan pedagogi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru sebaiknya menghindari semua teknologi baru tanpa terkecuali</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebagian siswa di sebuah SMP mulai bersikap sinis terhadap aturan sekolah karena sering menyaksikan ketidakjujuran kecil dianggap biasa oleh orang dewasa di sekitar mereka. Berdasarkan Bab 3, kombinasi strategi paling tepat menghadapi krisis moral semacam ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena berada di luar kendali sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah hukuman fisik yang lebih berat agar siswa jera</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menanamkan nilai secara terintegrasi lewat rutinitas kelas, menerapkan honor code, mengadakan service learning, serta menjaga keteladanan guru yang konsisten</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, empat pilar integritas guru yang saling menguatkan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kejujuran akademik, tanggung jawab & disiplin, sikap adil, dan komitmen pada nilai Islam & Pancasila</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pedagogik, profesional, kepribadian, dan sosial</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Refleksi, journaling, evaluasi diri, dan teknik STOP</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru memperlakukan seluruh siswa persis sama tanpa mempertimbangkan bahwa sebagian membutuhkan pendampingan ekstra untuk mengejar ketertinggalan. Berdasarkan konsep keadilan (equity vs equality) pada Bab 4, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki, karena perlakuan yang sama persis sudah otomatis adil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru perlu menerapkan equity — memberi yang dibutuhkan tiap siswa agar semua bisa maju</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru sebaiknya hanya fokus pada siswa yang sudah unggul</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Orang tua semakin jarang hadir dalam pertemuan sekolah dan mengeluh tidak pernah diberi tahu perkembangan anak secara jujur. Berdasarkan Bab 4 tentang dampak guru berintegritas, langkah paling tepat untuk memulihkan situasi ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengurangi komunikasi dengan orang tua agar keluhan tidak bertambah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun kembali transparansi dan konsistensi — rubrik dibagikan sejak awal, janji ditepati, komunikasi berisi fakta dan rencana tindak lanjut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menutupi tantangan yang dihadapi siswa agar orang tua tidak kecewa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Format jurnal singkat "Peristiwa – Emosi – Kalimat pikiran – Aksi perbaikan" yang dibahas pada Bab 5 dikenal dengan singkatan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">PEKA</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">SOLER</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">PDSA</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru selalu langsung membalas dan berdebat setiap kali menerima kritik dari orang tua sehingga percakapan sering memanas. Berdasarkan kerangka 4R pada Bab 5, langkah pertama yang seharusnya dilakukan sebelum merespons adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Segera membela diri dengan data agar orang tua tidak salah paham</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendengarkan kritik sampai tuntas (Receive), lalu mengulang dan mencari niat baik di baliknya sebelum merespons</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan kritik tersebut karena dianggap tidak memahami proses belajar</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Bu Wati ingin menegur dua siswa yang sering menyela diskusi kelompok tanpa membuat mereka defensif atau mempermalukan di depan teman. Berdasarkan pola I-Message pada Bab 5, kalimat paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">"Kalian berdua memang selalu tidak sopan dan tidak menghargai teman!"</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">"Ketika kalian menyela, Ibu sulit mendengar ide teman kalian. Ibu butuh semua merasa aman bicara. Tunggu giliran, ya."</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendiamkan kedua siswa tersebut sepanjang sisa pelajaran</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Lima pilar kesejahteraan psikologis guru yang dirangkum dalam istilah "MAKMU" pada Bab 6 mencakup Makna, Autonomi, Kompetensi, Mitra, dan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Urutkan energi (tidur cukup, gerak ringan, jeda singkat)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Uang tambahan dari kerja sampingan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ujian rutin bagi siswa setiap minggu</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru merasa lelah terus-menerus meski sudah cukup tidur, mulai sinis terhadap pekerjaannya, dan sulit merasa bangga atas kemajuan kecil siswanya. Berdasarkan Bab 6 tentang tanda peringatan kesejahteraan psikologis, langkah paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jam kerja agar semua tugas selesai lebih cepat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membicarakannya dengan atasan/rekan, mengurangi komitmen non-esensial, dan mempertimbangkan dukungan profesional bila berlanjut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan tanda-tanda ini karena dianggap normal bagi profesi guru</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin menumbuhkan budaya "5A" (Aman, Adil, Apresiatif, Akuntabel, Antikolusi) namun guru-gurunya masih bekerja sendiri-sendiri tanpa forum berbagi praktik. Berdasarkan Bab 6, langkah awal paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu seluruh guru menguasai teori sebelum mempraktikkan apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membentuk komunitas praktik guru (PLC) dua mingguan dengan fokus satu topik, disertai ritual sekolah sederhana</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi sanksi kepada guru yang belum menerapkan kelima pilar secara sempurna</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Pola "3P" yang digunakan untuk mengucapkan tiga hal positif tentang diri sendiri pada Bab 7 terdiri dari Proses, Progres, dan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prestasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Presentasi</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah terinspirasi kisah Pak Andi (Bab 7) yang menurunkan kasus mencontek lewat rubrik transparan dan honor code, dan ingin mereplikasi keberhasilan itu ke skala sekolah. Langkah paling sesuai untuk direplikasi secara kelembagaan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menugaskan hanya satu guru untuk mengawasi kejujuran akademik seluruh siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah ujian tertulis sebagai satu-satunya cara memastikan kejujuran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan Honor Code & pendekatan restoratif secara kelembagaan, disertai PLC dua mingguan agar praktik baik dibagikan lintas guru</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru baru merasa yakin bahwa integritas cukup dibangun sendiri tanpa perlu kesadaran diri atau profesionalisme, karena baginya "yang penting jujur". Berdasarkan hubungan antar tiga pegangan yang ditegaskan sejak Bab 1 hingga Bab 4, mengapa pandangan ini kurang tepat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena integritas sebenarnya tidak penting dibandingkan dua pegangan lainnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena ketiga pegangan saling menguatkan — tanpa kesadaran diri, profesionalisme menjadi kaku, dan tanpa profesionalisme, integritas tidak punya bentuk tindakan nyata di kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena kesadaran diri dan profesionalisme hanya relevan bagi guru baru, bukan guru yang sudah berintegritas</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
