/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Komunikasi Efektif dan Manajemen Kelas"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-komunikasi-efektif-manajemen-kelas.js
   ========================================================================== */
window.BOOK_CONTENT = {

pengantar: `
<p class="eyebrow reveal">Kata Pengantar</p>
<h2 class="reveal">Prakata dari Tim Edumind Academy</h2>
<div class="card reveal">
  <p>Puji syukur kami panjatkan ke hadirat Allah SWT yang telah memberikan kemudahan sehingga buku ini dapat tersusun dengan baik. Buku yang ada di hadapan Anda ini, <em>Komunikasi Efektif dan Manajemen Kelas</em>, hadir sebagai panduan praktis bagi para pendidik dalam menciptakan lingkungan belajar yang kondusif dan interaktif. Sebagai seorang pendidik, komunikasi yang baik dan manajemen kelas yang efektif merupakan dua keterampilan yang sangat menentukan keberhasilan pembelajaran — guru tidak hanya dituntut menyampaikan materi dengan jelas, tetapi juga harus mampu membangun hubungan yang positif dengan siswa, orang tua, serta rekan kerja, sementara pengelolaan kelas yang baik menciptakan suasana belajar yang nyaman, tertib, dan penuh semangat.</p>
  <p>Dalam buku ini, kami membahas berbagai aspek komunikasi dalam dunia pendidikan, mulai dari strategi komunikasi dengan siswa, orang tua, hingga rekan kerja dan pimpinan sekolah. Kami juga mengulas prinsip-prinsip dasar manajemen kelas serta strategi proaktif dan intervensi yang dapat dilakukan untuk menciptakan suasana belajar yang produktif, termasuk pemanfaatan teknologi sebagai alat bantu dalam meningkatkan efektivitas komunikasi dan pengelolaan kelas. Tak lupa, bagian akhir buku ini menyoroti pentingnya pengembangan profesional bagi para pendidik agar terus meningkatkan kompetensi dalam berkomunikasi dan mengelola kelas.</p>
  <p>Beberapa hal penting yang dibahas dalam buku ini:</p>
  <ul>
    <li>Dasar-dasar komunikasi efektif dalam pendidikan: definisi, elemen, dan hambatan yang perlu diatasi.</li>
    <li>Strategi komunikasi khusus dengan siswa — mendengarkan aktif, teknik bertanya, umpan balik, pengelolaan emosi, bahasa tubuh, hingga penyesuaian gaya komunikasi.</li>
    <li>Komunikasi dengan orang tua siswa dan dengan rekan kerja maupun pimpinan sekolah.</li>
    <li>Dasar, strategi proaktif, dan strategi intervensi dalam manajemen kelas.</li>
    <li>Pemanfaatan teknologi dalam komunikasi dan pengelolaan kelas.</li>
    <li>Pengembangan profesional berkelanjutan bagi guru.</li>
  </ul>
  <p>Kami berharap buku ini dapat menjadi referensi yang bermanfaat bagi para guru, pendidik, dan siapa saja yang ingin meningkatkan keterampilan komunikasi serta manajemen kelas. Membaca buku ini akan memberikan berbagai manfaat praktis: mulai dari peningkatan hubungan dengan siswa (membangun kepercayaan, memahami kebutuhan siswa, meningkatkan keterlibatan), peningkatan hubungan dengan orang tua (kolaborasi yang lebih baik, transparansi, penyelesaian masalah yang lebih cepat), pengelolaan kelas yang lebih efektif (lingkungan kondusif, penanganan perilaku mengganggu, pemanfaatan teknologi yang tepat), hingga pengembangan profesional dan peningkatan kepuasan serta kesejahteraan guru itu sendiri melalui berkurangnya stres dan meningkatnya motivasi kerja.</p>
  <p>Akhir kata, kami mengucapkan terima kasih kepada semua pihak yang telah mendukung penyusunan buku ini. Kami menyadari bahwa buku ini masih jauh dari sempurna, oleh karena itu kami sangat terbuka terhadap masukan dan saran untuk perbaikan di masa mendatang. Selamat membaca dan semoga menginspirasi.</p>
  <p>Salam hangat,<br><strong>Tim Edumind Academy</strong></p>
</div>
<div class="card reveal" style="font-size:14px;color:var(--slate)">
  Edumind Academy · Revisi Maret 2025 · Tim Edumind Academy · © Edumind Academy
</div>
`,

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Dasar-dasar Komunikasi Efektif dalam Pendidikan</h2>
<p class="lede reveal">Sebelum mempelajari teknik komunikasi untuk konteks yang berbeda-beda — dengan siswa, orang tua, maupun rekan kerja — guru perlu terlebih dahulu memahami mengapa komunikasi efektif begitu penting, elemen-elemen apa saja yang membentuknya, dan hambatan umum apa yang biasa menghalanginya di lingkungan sekolah.</p>

<div class="card reveal">
  <h4>A. Definisi dan Pentingnya Komunikasi Efektif</h4>
  <p>Komunikasi efektif adalah dasar dari setiap hubungan yang sukses, termasuk dalam konteks pendidikan. Di dalam kelas, komunikasi yang baik antara guru dan siswa, serta antara guru dan orang tua, sangat penting untuk menciptakan lingkungan belajar yang positif. Ada tiga alasan utama mengapa komunikasi efektif begitu krusial dalam pendidikan: pertama, ia membangun kepercayaan — komunikasi yang jujur dan terbuka membuat siswa merasa bisa berbicara dengan guru tanpa takut dihakimi atau dihukum, sehingga mereka lebih cenderung terlibat dalam proses belajar. Kedua, ia meningkatkan pemahaman — komunikasi yang jelas memastikan siswa memahami materi yang diajarkan, terutama ketika guru menggunakan bahasa yang mudah dimengerti dan mengajukan pertanyaan yang memancing pemikiran. Ketiga, ia membantu guru mengatasi masalah secara efektif, misalnya mengidentifikasi kesulitan belajar atau masalah perilaku siswa dengan cara yang konstruktif sebelum masalah itu membesar.</p>
  <p>Sejalan dengan itu, manajemen kelas yang efektif juga tidak bisa dipisahkan dari komunikasi. Tanpa manajemen kelas yang baik, proses belajar mengajar bisa terganggu oleh perilaku siswa yang tidak terkontrol atau lingkungan kelas yang tidak mendukung. Manajemen kelas yang baik menciptakan suasana tenang dan teratur sehingga siswa merasa aman dan tahu apa yang diharapkan dari mereka, menjaga perhatian dan keterlibatan siswa lewat strategi pengajaran yang bervariasi, serta meminimalkan gangguan sehingga guru bisa menghabiskan lebih banyak waktu untuk mengajar dibanding mengelola perilaku bermasalah.</p>
  <p>Meski penting, komunikasi efektif dan manajemen kelas sering menghadirkan tantangan nyata bagi guru: beragamnya kebutuhan, kemampuan, dan latar belakang siswa yang menuntut penyesuaian metode terus-menerus; masalah perilaku siswa yang sulit dikelola; kurangnya dukungan dari sebagian orang tua; tantangan teknologi dan media sosial yang bisa menimbulkan gangguan digital; hingga stres dan kelelahan (burnout) akibat beban kerja yang berat, yang pada akhirnya bisa memengaruhi kemampuan guru berkomunikasi dan mengelola kelas secara efektif. Menyadari tantangan-tantangan ini adalah langkah awal sebelum mempelajari strategi mengatasinya.</p>

  <h4>B. Elemen Komunikasi yang Efektif</h4>
  <p>Ada empat elemen inti yang membentuk komunikasi efektif di lingkungan pendidikan. <strong>Keterbukaan</strong> berarti kesediaan guru untuk berbagi informasi secara jujur dan transparan kepada siswa maupun orang tua, tanpa menyembunyikan hal-hal penting yang perlu mereka ketahui demi mendukung proses belajar. <strong>Empati</strong> adalah kemampuan guru menempatkan diri pada posisi siswa, sehingga mampu merespons kebutuhan emosional dan sosial mereka dengan lebih baik — misalnya, dengan menunjukkan empati terhadap kekhawatiran atau masalah yang dihadapi siswa, guru dapat memberikan dukungan yang sesuai dan membantu mereka mengatasi kesulitan belajar. <strong>Kejelasan</strong> berarti menyampaikan pesan dengan cara yang mudah dimengerti, menggunakan bahasa sederhana yang sesuai tingkat pemahaman siswa, sehingga instruksi, aturan kelas, dan penjelasan materi tidak menimbulkan ambiguitas. Terakhir, <strong>keterampilan mendengarkan</strong> memungkinkan guru fokus sepenuhnya pada apa yang disampaikan siswa atau orang tua, memahami maksud di balik kata-kata mereka, dan memberikan respons yang sesuai.</p>
  <p>Keempat elemen ini, ketika terintegrasi dalam interaksi sehari-hari, membawa manfaat luas: membangun hubungan yang positif antara guru dengan siswa maupun orang tua sehingga hubungan tersebut menjadi lebih kuat dan harmonis; meningkatkan pemahaman dan prestasi siswa karena kejelasan penyampaian informasi dan empati terhadap kesulitan siswa memfasilitasi belajar yang lebih efektif; mengelola kelas dengan lebih efektif karena guru yang terbuka dan jelas dalam aturan kelas menciptakan lingkungan belajar yang teratur; serta mendukung pengembangan profesional guru itu sendiri secara berkelanjutan dalam mengajar dan berinteraksi dengan siswa, orang tua, dan kolega.</p>

  <h4>C. Hambatan Komunikasi dan Cara Mengatasinya</h4>
  <p>Dalam praktiknya, ada beberapa hambatan umum yang sering mengganggu komunikasi efektif antara guru, siswa, dan orang tua: kurangnya keterbukaan dan transparansi yang menyebabkan ketidakpercayaan dan mispersepsi; ketidakjelasan dalam penyampaian informasi yang membuat siswa kebingungan; kurangnya keterampilan mendengarkan sehingga guru tidak memahami dengan baik perasaan atau masalah yang diungkapkan siswa maupun orang tua; perbedaan bahasa dan budaya yang bisa memicu kesalahpahaman; serta masalah teknologi atau infrastruktur, seperti koneksi internet yang buruk atau perangkat yang tidak kompatibel, yang menghambat penyampaian informasi.</p>
  <p>Untuk mengatasi hambatan-hambatan ini, guru dapat menerapkan lima strategi: menjaga keterbukaan dan transparansi dengan aktif berkomunikasi tentang tujuan, harapan, dan perkembangan siswa, serta berani membicarakan masalah secara terbuka; memastikan kejelasan penyampaian informasi dengan bahasa sederhana dan mengecek pemahaman siswa; melatih keterampilan mendengarkan aktif dengan memberi perhatian penuh dan memahami pesan sebelum merespons; menggunakan bahasa dan pendekatan budaya yang tepat, tidak ragu meminta klarifikasi bila ada ketidakjelasan; serta memastikan teknologi yang digunakan untuk komunikasi berfungsi baik dan mudah diakses semua pihak, disertai bantuan teknis bila diperlukan. Dengan mengatasi hambatan-hambatan ini secara konsisten, guru dapat meningkatkan keterlibatan siswa dan orang tua, meningkatkan efektivitas pengajaran, mengurangi konflik dan kesalahpahaman, serta mendukung terciptanya lingkungan belajar yang positif dan inklusif di seluruh komunitas sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat elemen komunikasi efektif (keterbukaan, empati, kejelasan, keterampilan mendengarkan) yang dibahas di bab ini, elemen mana yang menurut Anda paling perlu diperkuat dalam interaksi Anda sehari-hari di sekolah — dan langkah kecil apa yang bisa mulai Anda terapkan minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa elemen inti yang membentuk komunikasi efektif dalam pendidikan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empat elemen: keterbukaan, empati, kejelasan, dan keterampilan mendengarkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua elemen: kecepatan bicara dan volume suara</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Enam elemen yang mencakup seluruh gaya belajar siswa</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu menyampaikan materi dengan lancar, tetapi jarang mengecek apakah siswa benar-benar memahami penjelasannya dan hampir tidak pernah memberi kesempatan siswa bertanya balik. Berdasarkan elemen komunikasi pada bab ini, elemen apa yang paling lemah pada guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Empati, karena guru tersebut terlalu banyak berbicara tentang perasaannya sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keterampilan mendengarkan dan kejelasan, karena tidak ada pengecekan pemahaman maupun ruang dialog dua arah dengan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keterbukaan, karena guru tersebut menyembunyikan materi pelajaran dari siswa</button>
  </div>
  <div class="quiz-q">
    <p>SD Nurul Hikmah memiliki koneksi internet yang sering putus-putus sehingga informasi penting dari sekolah ke orang tua lewat grup daring sering tidak sampai tepat waktu, menimbulkan kesalahpahaman berulang. Berdasarkan bab ini, langkah paling tepat untuk mengatasi hambatan tersebut adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh komunikasi dengan orang tua karena teknologi dianggap tidak bisa diandalkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena hambatan teknologi tidak bisa diatasi oleh pihak sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memastikan teknologi yang digunakan berfungsi baik dan mudah diakses semua pihak, serta menyediakan jalur komunikasi cadangan bila teknologi utama bermasalah</button>
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
<h2 class="reveal">Strategi Komunikasi dengan Siswa</h2>
<p class="lede reveal">Bab ini masuk lebih dalam ke praktik komunikasi guru-siswa sehari-hari — mulai dari cara mendengarkan dan bertanya yang efektif, memberi umpan balik yang membangun, mengelola emosi dan bahasa tubuh, hingga menyesuaikan gaya komunikasi dengan karakter tiap siswa dan mengatasi hambatan yang muncul di lapangan.</p>

<div class="card reveal">
  <h4>A. Mendengarkan Aktif</h4>
  <p>Mendengarkan aktif adalah keterampilan mendasar dalam komunikasi efektif antara guru dan siswa — bukan sekadar mendengar kata-kata, melainkan memahami makna, emosi, dan maksud di baliknya. Untuk menjadi pendengar yang baik, guru perlu menunjukkan perhatian penuh lewat kontak mata yang wajar (tidak terlalu intens agar siswa tidak merasa terintimidasi), bahasa tubuh yang positif seperti mengangguk dan sedikit condong ke depan, serta menghindari gangguan seperti mengecek ponsel saat siswa berbicara. Guru juga perlu mendengarkan dengan penuh perhatian — tidak memotong pembicaraan, memberi jeda setelah siswa selesai bicara, dan menggunakan umpan balik relevan seperti "Saya mengerti, ceritakan lebih lanjut" — lalu memberikan respons yang tepat dengan memvalidasi perasaan siswa dan mengajukan pertanyaan terbuka yang mendorong mereka bicara lebih banyak. Ketika diterapkan konsisten, mendengarkan aktif membangun kepercayaan dan hubungan yang baik, meningkatkan pemahaman dan empati guru terhadap kebutuhan siswa, serta menciptakan lingkungan belajar yang inklusif di mana siswa merasa dihargai dan lebih percaya diri berpartisipasi.</p>

  <h4>B. Teknik Bertanya yang Efektif</h4>
  <p>Pertanyaan yang dirancang dengan baik tidak sekadar mencari jawaban, tetapi mendorong siswa berpikir kritis, merangsang diskusi bermakna, menggali pemahaman lebih dalam, dan membantu siswa mengekspresikan ide dengan lebih jelas. Ada tiga jenis pertanyaan yang perlu dikuasai guru: pertanyaan terbuka yang memungkinkan jawaban lebih luas dari sekadar "ya" atau "tidak" (misalnya, "Bagaimana kamu menyimpulkan hasil percobaan ini?"), yang melatih keterampilan berpikir kritis dan menyusun pendapat; pertanyaan penyelidikan yang menantang siswa menggali lebih dalam suatu konsep, misalnya "Mengapa solusi yang kamu usulkan lebih efektif dibanding yang lain?", yang memotivasi eksplorasi berbagai sudut pandang; serta pertanyaan reflektif yang mengajak siswa mengevaluasi pengalaman atau pemahamannya sendiri, seperti "Apa yang kamu pelajari dari pengalaman ini?", yang memupuk kesadaran diri dan sikap reflektif dalam belajar.</p>
  <p>Agar pertanyaan benar-benar berdampak, guru perlu menerapkan strategi tambahan: memberi waktu berpikir sejenak setelah bertanya tanpa buru-buru berpindah ke siswa lain, mendorong diskusi dan interaksi dengan mengajukan pertanyaan lanjutan ke siswa lain ("Apakah kamu setuju dengan pendapat temanmu? Mengapa?"), memvariasikan tingkat kesulitan pertanyaan dari sederhana ke kompleks secara bertahap, serta mengaitkan pertanyaan dengan pengalaman nyata siswa agar mereka lebih mudah terlibat. Teknik bertanya yang efektif pada akhirnya mengembangkan keterampilan berpikir kritis siswa (menganalisis informasi, mengevaluasi sudut pandang, merumuskan argumen), meningkatkan partisipasi dan motivasi mereka di kelas, serta memperdalam pemahaman materi karena siswa mengeksplorasi ide sendiri, bukan sekadar menghafal.</p>

  <h4>C. Memberikan Umpan Balik yang Konstruktif</h4>
  <p>Umpan balik yang konstruktif adalah salah satu alat paling ampuh untuk mendorong pertumbuhan siswa, tetapi hanya efektif bila disampaikan dengan cara yang tepat. Umpan balik yang baik bersifat spesifik dan jelas — bukan sekadar "bagus" atau "kurang", melainkan menjelaskan secara konkret bagian mana yang sudah tepat dan bagian mana yang masih perlu diperbaiki, disertai contoh nyata dari pekerjaan siswa. Umpan balik juga perlu diberikan tepat waktu, sesegera mungkin setelah tugas atau perilaku yang bersangkutan, agar siswa masih ingat konteksnya dan dapat langsung memperbaiki diri, serta berimbang antara mengapresiasi usaha dan pencapaian siswa sekaligus mengarahkan area yang perlu ditingkatkan, sehingga siswa tidak merasa hanya dikritik.</p>
  <p>Selain itu, umpan balik yang membangun lebih menekankan proses dan usaha ketimbang sekadar hasil akhir — memuji kerja keras dan strategi belajar siswa, bukan hanya nilai yang diperoleh — agar siswa termotivasi secara intrinsik untuk terus berkembang, bukan hanya mengejar angka. Umpan balik yang bersifat mengoreksi kesalahan sebaiknya disampaikan secara pribadi, bukan di depan seluruh kelas, agar siswa tidak merasa dipermalukan, dan idealnya diakhiri dengan mengajak siswa berdialog tentang langkah perbaikan berikutnya, sehingga umpan balik menjadi percakapan dua arah, bukan penilaian satu arah dari guru.</p>

  <h4>D. Mengelola Emosi dalam Komunikasi</h4>
  <p>Guru yang mampu mengendalikan emosinya menciptakan suasana kelas yang lebih kondusif, penuh rasa hormat, dan mendukung pembelajaran positif; sebaliknya, emosi yang tidak dikelola dengan baik bisa membuat interaksi kurang efektif bahkan menimbulkan ketegangan. Ada empat teknik mengelola emosi yang bisa diterapkan guru. Pertama, meningkatkan kesadaran diri — mengenali emosi yang sedang dirasakan lewat refleksi rutin ("Apa yang membuat saya merasa marah atau frustrasi di kelas?") membantu menghindari reaksi impulsif dan mengambil keputusan yang lebih rasional. Kedua, menggunakan teknik pernapasan dan relaksasi, misalnya menarik napas dalam selama 4 detik, menahan 4 detik, lalu menghembuskan perlahan 6 detik, untuk mengurangi ketegangan dan menjaga kejernihan berpikir sebelum merespons siswa.</p>
  <p>Ketiga, menerapkan pendekatan pemecahan masalah — alih-alih bereaksi emosional, guru mengidentifikasi masalah secara objektif, memikirkan beberapa solusi, lalu menggunakan komunikasi asertif untuk mencari solusi bersama siswa. Keempat, mempraktikkan empati dalam komunikasi dengan mendengarkan siswa tanpa langsung menghakimi dan mencoba melihat situasi dari sudut pandang mereka. Ketika keempat teknik ini diterapkan konsisten, guru dapat membangun hubungan yang lebih positif dengan siswa karena mampu menghindari konflik yang tidak perlu, menjaga profesionalisme sekaligus menjadi teladan pengelolaan emosi bagi siswa, dan menciptakan lingkungan belajar yang nyaman di mana siswa merasa lebih aman dan termotivasi berpartisipasi.</p>

  <h4>E. Membangun Bahasa Tubuh yang Mendukung Komunikasi</h4>
  <p>Komunikasi tidak hanya dilakukan lewat kata-kata, tetapi juga lewat gerakan tubuh, ekspresi wajah, dan cara seseorang membawa dirinya dalam percakapan — bahasa tubuh yang positif dan terbuka membantu guru menarik perhatian siswa, menciptakan suasana kelas yang ramah, dan membangun rasa percaya diri dalam mengajar, sementara bahasa tubuh negatif seperti sikap kaku atau gestur tertutup bisa membuat siswa enggan berkomunikasi. Ada empat aspek bahasa tubuh yang perlu diperhatikan guru: kontak mata yang seimbang (menatap wajar ke seluruh kelas, tidak terlalu lama ke satu siswa agar tidak terasa mengintimidasi), gestur yang terbuka dan ramah (telapak tangan terbuka saat berbicara, menghindari menyilangkan tangan di dada atau menunjuk dengan jari telunjuk yang terasa menghakimi), ekspresi wajah yang sesuai konteks (tersenyum saat menyapa, antusias saat menjelaskan, tetapi tetap serius tanpa terkesan menakutkan saat membahas hal penting), serta postur tubuh yang terbuka (berdiri tegap namun santai, menghadap siswa, tidak membungkuk atau bersedekap terus-menerus). Intinya, komunikasi bukan hanya soal apa yang dikatakan, tetapi juga bagaimana cara menyampaikannya lewat tubuh.</p>

  <h4>F. Menyesuaikan Gaya Komunikasi dengan Karakter Siswa</h4>
  <p>Setiap siswa memiliki karakter, gaya belajar, dan tingkat pemahaman yang berbeda, sehingga cara berkomunikasi yang cocok untuk satu siswa mungkin kurang efektif bagi siswa lain. Menyesuaikan gaya komunikasi bukan berarti mengubah isi materi, melainkan menyesuaikan cara penyampaiannya. Langkah pertama adalah mengenali perbedaan individu dengan mengamati respons siswa saat dijelaskan materi dan menyesuaikan metode dengan gaya belajar mereka: siswa auditori lebih terbantu lewat cerita, diskusi, dan penjelasan verbal; siswa visual lebih terbantu lewat gambar, diagram, dan video; sedangkan siswa kinestetik membutuhkan kesempatan praktik langsung atau demonstrasi. Langkah kedua adalah menggunakan pendekatan personal sesuai kepribadian siswa — siswa ekstrovert dapat diajak berdiskusi terbuka atau berbicara di depan kelas, sementara siswa introvert lebih nyaman diberi kesempatan berbicara dalam kelompok kecil atau lewat tulisan seperti refleksi harian, disertai perhatian individu sesekali agar mereka tetap merasa dihargai tanpa dipaksa tampil di luar zona nyamannya.</p>

  <h4>G. Mengatasi Hambatan dalam Komunikasi</h4>
  <p>Ada empat jenis hambatan komunikasi dengan siswa yang perlu dikenali dan diatasi guru secara berbeda-beda. Hambatan bahasa, ketika guru menggunakan istilah terlalu akademis tanpa penjelasan, diatasi dengan bahasa sederhana, menjelaskan istilah sulit lewat contoh nyata dan analogi, serta mengecek pemahaman siswa secara berkala. Hambatan psikologis, berupa ketakutan atau kurangnya percaya diri siswa untuk berbicara di depan kelas, diatasi dengan menciptakan lingkungan belajar yang aman dan bebas ejekan, memberi apresiasi atas setiap usaha (bukan hanya jawaban benar), serta melatih siswa berbicara secara bertahap mulai dari kelompok kecil. Hambatan emosional, ketika siswa sedang marah, stres, atau tidak fokus, diatasi dengan mengenali tanda-tanda emosional mereka, memberi ruang untuk menenangkan diri, dan menggunakan pendekatan yang lebih empati serta sabar alih-alih langsung menegur. Hambatan lingkungan, seperti kebisingan atau tata letak ruangan yang tidak mendukung, diatasi dengan memastikan kelas kondusif, menggunakan suara yang jelas, mengatur tempat duduk agar mendukung komunikasi, serta menetapkan aturan kelas yang jelas. Kunci utamanya: kesabaran, fleksibilitas, dan kepekaan terhadap kondisi siswa sangat diperlukan agar komunikasi tetap berjalan lancar dan pembelajaran menjadi lebih bermakna.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari ketujuh strategi komunikasi dengan siswa pada bab ini (mendengarkan aktif, teknik bertanya, umpan balik, pengelolaan emosi, bahasa tubuh, penyesuaian gaya, dan mengatasi hambatan), mana yang paling jarang Anda terapkan secara sadar selama ini — dan apa satu langkah kecil yang bisa mulai Anda coba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, jenis pertanyaan yang mengajak siswa mengevaluasi pengalaman atau pemahaman mereka sendiri, misalnya "Apa yang kamu pelajari dari pengalaman ini?", disebut pertanyaan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pertanyaan tertutup</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pertanyaan penyelidikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pertanyaan reflektif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru memuji seluruh siswa dengan kata "bagus" pada setiap tugas yang dikumpulkan, tanpa menjelaskan bagian mana yang sudah tepat dan mana yang masih perlu diperbaiki. Berdasarkan prinsip umpan balik konstruktif pada bab ini, apa kelemahan utama pendekatan tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kelemahan, karena pujian selalu meningkatkan motivasi siswa apa pun bentuknya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Umpan balik tidak spesifik sehingga siswa tidak tahu persis apa yang sudah benar dan apa yang perlu ditingkatkan untuk berkembang lebih jauh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru seharusnya berhenti memberi umpan balik sama sekali agar siswa belajar mandiri</button>
  </div>
  <div class="quiz-q">
    <p>Rani, siswa kelas 5, dikenal pendiam dan selalu menghindari kontak mata saat diminta berbicara di depan kelas, sementara Dimas, teman sekelasnya, justru sangat percaya diri dan senang berdiskusi terbuka. Berdasarkan Bab 2, pendekatan komunikasi yang paling tepat untuk Rani adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa Rani berbicara di depan kelas tanpa persiapan agar ia terbiasa seperti Dimas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberi Rani kesempatan berbicara dalam kelompok kecil atau lewat tulisan seperti refleksi harian, sambil sesekali memberi perhatian personal agar ia merasa dihargai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan Rani sepenuhnya karena siswa introvert dianggap tidak perlu dilibatkan dalam diskusi kelas</button>
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
<h2 class="reveal">Komunikasi dengan Orang Tua Siswa</h2>
<p class="lede reveal">Keberhasilan pendidikan tidak berhenti di pintu kelas — ia bergantung juga pada kualitas hubungan antara guru dan orang tua. Bab ini membahas cara membangun hubungan positif dengan orang tua, teknik komunikasi dalam pertemuan tatap muka maupun virtual, cara menyampaikan berita baik dan buruk, serta strategi berkolaborasi untuk mendukung pembelajaran siswa.</p>

<div class="card reveal">
  <h4>A. Membangun Hubungan Positif dengan Orang Tua</h4>
  <p>Membangun hubungan baik dengan orang tua siswa adalah kunci pendidikan yang sukses, karena ketika guru dan orang tua bekerja sama, mereka dapat saling mendukung memajukan perkembangan akademik dan sosial-emosional siswa. Ada empat strategi utama untuk membangunnya. Pertama, komunikasi terbuka dan jujur — berbicara secara transparan dengan orang tua tentang perkembangan akademik dan perilaku siswa, yang membangun kepercayaan dan memungkinkan kerja sama dalam mendukung kebutuhan siswa. Kedua, sering berkomunikasi secara konsisten lewat email, telepon, atau pertemuan tatap muka, dengan membagikan informasi relevan tentang kemajuan siswa secara teratur, bukan hanya saat ada masalah. Ketiga, mendengarkan dan menyambut masukan orang tua secara aktif serta menanggapinya secara konstruktif — misalnya menjelaskan langkah-langkah yang telah diambil bila ada keprihatinan tentang kinerja siswa. Keempat, melibatkan orang tua dalam pendidikan dengan mengundang mereka berpartisipasi dalam kegiatan kelas atau acara sekolah, serta mengajak mereka berkolaborasi mencari solusi saat menghadapi tantangan tertentu.</p>
  <p>Ketika hubungan ini terjalin baik, manfaatnya nyata: orang tua yang merasa didengar dan terlibat cenderung memberikan dukungan yang lebih konsisten dalam pendidikan anak mereka, kolaborasi antara guru dan orang tua membantu mengidentifikasi dan mengatasi hambatan belajar sehingga berpotensi meningkatkan prestasi akademik siswa, serta tercipta lingkungan belajar yang mendukung baik di sekolah maupun di rumah.</p>

  <h4>B. Teknik Komunikasi dalam Pertemuan Tatap Muka dan Virtual</h4>
  <p>Komunikasi dengan orang tua bisa terjadi lewat pertemuan tatap muka di sekolah maupun pertemuan virtual melalui platform daring, dan keduanya menuntut persiapan yang berbeda. Untuk pertemuan tatap muka, guru perlu mempersiapkan jadwal dan agenda yang jelas serta dokumen relevan sebelum pertemuan, menunjukkan keterbukaan dan profesionalisme lewat sambutan yang hangat dan bahasa tubuh yang ramah, serta mempraktikkan mendengarkan aktif dengan mengonfirmasi pemahaman dan mencatat hal-hal penting yang dibahas. Untuk pertemuan virtual, guru perlu mempersiapkan teknologi dengan baik — menguji koneksi internet dan platform sebelum pertemuan dimulai serta memanfaatkan fitur seperti berbagi layar — sekaligus menjaga profesionalisme lewat pakaian dan latar belakang yang sesuai serta kontrol suara yang jelas, dan menyediakan ruang bagi orang tua untuk berpartisipasi dalam diskusi dan pengambilan keputusan bersama.</p>
  <p>Ketika teknik ini diterapkan dengan baik pada kedua jenis pertemuan, hasilnya adalah peningkatan keterlibatan orang tua dalam mendukung pendidikan anak mereka, pemahaman yang lebih baik karena pesan tersampaikan dengan jelas dan akurat, serta peningkatan kolaborasi karena saluran komunikasi yang terbuka memungkinkan guru dan orang tua bekerja sama menciptakan lingkungan belajar yang produktif bagi siswa.</p>

  <h4>C. Menyampaikan Berita Positif dan Negatif</h4>
  <p>Cara guru menyampaikan berita baik maupun buruk kepada orang tua sangat memengaruhi persepsi mereka terhadap perkembangan anak dan kualitas pendidikan yang diberikan sekolah. Saat menyampaikan berita positif, guru sebaiknya menyambut dengan hangat — menyampaikan pujian atas prestasi atau perilaku baik siswa secara langsung disertai apresiasi atas usaha mereka — lalu memberikan rincian spesifik tentang apa yang siswa lakukan untuk mencapainya, misalnya lewat dokumentasi atau contoh pekerjaan konkret, serta mendorong keterlibatan orang tua dengan mengajak mereka merayakan bersama dan mendiskusikan cara mendukung perkembangan positif tersebut lebih lanjut di rumah.</p>
  <p>Sebaliknya, saat menyampaikan berita negatif, guru perlu menyampaikannya dengan empati — memilih kata-kata bijaksana, tidak menyalahkan atau mengejek, serta memberi waktu bagi orang tua menyerap informasi — kemudian tetap fokus pada solusi dengan mengusulkan langkah konstruktif seperti program tutor atau strategi belajar tambahan, dan mengajak orang tua berkolaborasi dalam upaya perbaikan. Guru juga perlu menjaga komunikasi tetap terbuka dengan mendorong orang tua berbicara jujur tentang masalah yang dihadapi anak serta menyediakan informasi tambahan yang membantu mereka memahami situasi. Menyampaikan berita dengan cara yang tepat, baik positif maupun negatif, membangun keterpercayaan antara sekolah dan orang tua, mendorong perbaikan berkelanjutan, dan memperkuat keterlibatan orang tua dalam mendukung pendidikan anak di rumah.</p>

  <h4>D. Kolaborasi dengan Orang Tua untuk Mendukung Pembelajaran Siswa</h4>
  <p>Kolaborasi antara guru dan orang tua adalah faktor kunci pendidikan yang sukses, karena ketika kedua pihak bekerja sama, mereka saling melengkapi dalam mendukung perkembangan siswa di sekolah maupun di rumah. Langkah pertama adalah menjaga komunikasi terbuka dan rutin lewat saluran seperti email, aplikasi pesan, atau pertemuan berkala, disertai update rutin mengenai perkembangan akademik dan perilaku siswa serta informasi kegiatan sekolah. Langkah berikutnya adalah mengajak orang tua terlibat dalam keputusan pendidikan, misalnya berpartisipasi dalam perencanaan pembelajaran siswa dengan turut menyusun tujuan akademik dan strategi pengembangan bersama guru.</p>
  <p>Kolaborasi ini juga bisa diperluas lewat kegiatan yang lebih konkret, seperti mengundang orang tua menjadi relawan pendamping kegiatan kelas, memberikan panduan sederhana tentang cara mendampingi belajar anak di rumah yang selaras dengan pendekatan di sekolah, serta membuka forum diskusi rutin antara guru dan paguyuban orang tua untuk membahas tantangan bersama. Dengan kolaborasi yang konsisten seperti ini, orang tua tidak lagi sekadar menjadi penerima laporan, tetapi mitra aktif yang turut bertanggung jawab atas keberhasilan belajar anak.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek Bab 3 (membangun hubungan, teknik pertemuan, menyampaikan berita, dan kolaborasi), mana yang paling jarang berjalan baik dalam interaksi Anda dengan orang tua siswa selama ini — dan langkah konkret apa yang bisa Anda coba pada pertemuan orang tua berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, saat menyampaikan berita negatif kepada orang tua, langkah yang perlu dilakukan setelah menyampaikan dengan empati adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Fokus pada solusi, dengan mengusulkan langkah konstruktif dan mengajak orang tua berkolaborasi dalam upaya perbaikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera mengakhiri pertemuan tanpa membahas langkah selanjutnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyalahkan orang tua atas masalah yang terjadi pada anaknya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru mengadakan pertemuan virtual dengan orang tua, tetapi tidak menguji koneksi internet maupun platform sebelumnya, sehingga pertemuan terganggu masalah teknis berulang kali dan orang tua kesulitan mendengar penjelasan guru. Berdasarkan Bab 3, apa yang seharusnya dilakukan guru tersebut sebelum pertemuan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu persiapan khusus, karena pertemuan virtual dianggap selalu berjalan lancar dengan sendirinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mempersiapkan teknologi dengan baik — menguji koneksi internet dan platform virtual, serta menyiapkan fitur pendukung seperti berbagi layar sebelum pertemuan dimulai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh pertemuan menjadi surat tertulis tanpa interaksi langsung</button>
  </div>
  <div class="quiz-q">
    <p>SMP Cahaya Bangsa memiliki kurikulum karakter yang baik di sekolah, tetapi orang tua jarang hadir dalam pertemuan dan pola asuh di rumah sering tidak selaras dengan nilai yang diajarkan di sekolah. Berdasarkan Bab 3, langkah paling tepat untuk mengatasi hal ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena keterlibatan orang tua bukan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh program karakter karena dianggap gagal tanpa dukungan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memperkuat komunikasi terbuka dan rutin serta mengajak orang tua terlibat langsung dalam keputusan dan kegiatan pendidikan anak, sehingga kolaborasi rumah dan sekolah lebih selaras</button>
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
<h2 class="reveal">Komunikasi dengan Rekan Kerja dan Pimpinan</h2>
<p class="lede reveal">Guru tidak bekerja sendirian — keberhasilan sekolah bergantung pada kerja sama tim yang solid antar-guru, komunikasi yang efektif dalam rapat, kemampuan menyelesaikan konflik secara konstruktif, dan kemampuan melaporkan kemajuan maupun masalah kepada pimpinan sekolah dengan tepat.</p>

<div class="card reveal">
  <h4>A. Membangun Kerjasama Tim yang Solid</h4>
  <p>Sekolah yang efektif dibangun oleh guru-guru yang mampu bekerja sama sebagai satu tim, bukan bekerja secara terisolasi masing-masing di kelasnya sendiri. Kerja sama tim yang solid dimulai dari komunikasi yang terbuka antar-rekan kerja, kesediaan saling membantu ketika salah satu menghadapi tantangan di kelas, serta budaya saling menghargai kontribusi masing-masing anggota tim, termasuk merayakan bersama setiap kesuksesan dalam mencapai tujuan-tujuan sekolah. Guru yang terbiasa berbagi materi ajar, strategi mengelola kelas, atau sekadar bertukar pengalaman dengan rekan sejawat akan lebih cepat berkembang dibanding yang bekerja sendirian.</p>
  <p>Manfaat dari kerja sama tim yang solid sangat terasa dalam operasional sekolah sehari-hari: penggunaan sumber daya menjadi lebih efisien dan penyelesaian masalah menjadi lebih cepat karena beban tidak ditanggung satu orang saja, kolaborasi membuka pintu bagi ide-ide baru dan inovatif dalam pengajaran dan pembelajaran, serta dengan saling mendukung, guru dapat meningkatkan kualitas pengajaran dan hasil belajar siswa secara keseluruhan — sesuatu yang sulit dicapai bila setiap guru bekerja dalam ruang hampa tanpa dukungan tim.</p>

  <h4>B. Komunikasi dalam Rapat dan Diskusi</h4>
  <p>Komunikasi yang efektif dalam rapat dan diskusi kelompok sangat penting agar ide dan keputusan dapat dipahami dengan jelas dan diterima oleh semua pihak. Sebelum rapat, agenda perlu disusun jelas dan terinci serta materi terkait dibagikan lebih dulu agar peserta bisa mempersiapkan diri. Selama rapat, fasilitator perlu memastikan semua peserta mendapat kesempatan berbicara dan menyampaikan pendapat, mendengarkan dengan seksama serta menunjukkan empati terhadap pandangan berbeda, dan menggunakan teknik moderasi yang menjaga diskusi tetap fokus pada topik sekaligus meringkas poin-poin penting secara periodik agar semua peserta memahami kesepakatan yang dicapai.</p>
  <p>Rapat yang produktif juga perlu ditutup dengan baik: merencanakan tindak lanjut dengan menentukan langkah selanjutnya dan penanggung jawab masing-masing tindakan secara tertulis agar tidak terjadi kebingungan di kemudian hari, serta mengevaluasi proses komunikasi itu sendiri dengan meminta umpan balik dari peserta tentang bagaimana rapat berikutnya bisa berjalan lebih baik. Rapat yang dikelola dengan cara ini menghasilkan keputusan yang lebih baik karena didasarkan pada pemahaman komprehensif dari semua pihak, meningkatkan kolaborasi lewat diskusi terbuka yang memunculkan ide-ide inovatif, serta membuat waktu dan sumber daya digunakan lebih efisien karena meminimalkan kebingungan.</p>

  <h4>C. Penyelesaian Konflik di Lingkungan Kerja</h4>
  <p>Konflik antar rekan kerja adalah hal wajar di lingkungan mana pun, termasuk sekolah, namun penyelesaian yang baik penting untuk menjaga hubungan yang harmonis dan produktif di antara staf dan pimpinan. Pendekatan berbasis komunikasi menjadi kunci pertama: mendengarkan dengan empati perspektif dan perasaan semua pihak yang terlibat, serta menghindari berspekulasi atau menyimpulkan tanpa memahami posisi dan alasan setiap pihak terlebih dahulu. Setelah itu, temukan titik temu dengan mengidentifikasi area kepentingan yang sama dan berpikir jangka panjang tentang solusi yang memperbaiki hubungan ke depan, lalu gunakan pendekatan win-win dengan mengajukan solusi kreatif atau kompromi yang memenuhi kepentingan semua pihak, disertai kesediaan memberi dan menerima umpan balik secara terbuka.</p>
  <p>Penanganan konflik juga menuntut etika profesional — menjaga kepercayaan dan privasi dengan tidak menyebarkan informasi pribadi atau rahasia pihak yang berkonflik, serta mempertimbangkan dampak setiap tindakan terhadap hubungan dan reputasi sebelum bertindak. Bila konflik tidak bisa diselesaikan secara langsung, melibatkan pihak ketiga yang netral dan berpengalaman dalam mediasi menjadi opsi yang perlu dipertimbangkan, diikuti evaluasi proses setelah konflik selesai untuk memetik pelajaran. Penyelesaian konflik yang konstruktif pada akhirnya memperkuat hubungan kerja dan kepercayaan, meningkatkan kesejahteraan psikologis staf, serta membuat sekolah bisa lebih fokus mencapai tujuan pendidikan yang lebih besar.</p>

  <h4>D. Berkomunikasi dengan Pimpinan: Melaporkan Kemajuan dan Masalah</h4>
  <p>Keterbukaan dan transparansi dalam berkomunikasi dengan pimpinan sekolah penting agar kemajuan dan tantangan dalam proses pengajaran dapat diatasi tepat waktu, sekaligus membangun hubungan yang kuat antara guru dan pimpinan. Sebelum bertemu pimpinan, guru perlu mempersiapkan data terkait kemajuan siswa, hasil evaluasi, atau masalah tertentu yang perlu dibahas, sekaligus menyiapkan solusi alternatif yang bisa diajukan bila ada tantangan. Saat menyampaikan, gunakan bahasa yang jelas dan sederhana tanpa jargon teknis yang sulit dipahami, fokus pada poin-poin utama, dan sampaikan informasi disertai konteks atau latar belakang agar pimpinan memahami situasi secara utuh, sambil memberi ruang bagi pimpinan untuk bertanya atau memberi masukan.</p>
  <p>Saat mengatasi masalah, guru sebaiknya tidak sekadar melaporkan persoalan, tetapi juga mengajukan solusi atau rekomendasi yang dapat diimplementasikan, serta mengajak pimpinan berkolaborasi mencari solusi yang tepat untuk diterapkan di lapangan. Guru juga perlu menerima umpan balik dari pimpinan dengan sikap terbuka dan menjadikannya pembelajaran untuk terus meningkatkan kinerja. Komunikasi yang efektif dengan pimpinan seperti ini mempercepat pemecahan masalah karena persoalan diidentifikasi lebih awal, memastikan dukungan dan bantuan datang tepat waktu, serta pada akhirnya meningkatkan kualitas pengajaran secara keseluruhan lewat arahan dan saran yang diberikan pimpinan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari keempat aspek Bab 4 (kerja sama tim, rapat, penyelesaian konflik, dan komunikasi dengan pimpinan), aspek mana yang paling perlu diperkuat di lingkungan kerja Anda saat ini — dan siapa yang bisa Anda ajak bicara lebih dulu untuk memperbaikinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa langkah pertama yang perlu dilakukan saat menyelesaikan konflik dengan rekan kerja secara konstruktif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendengarkan dengan empati perspektif dan perasaan semua pihak yang terlibat, tanpa berspekulasi terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera melibatkan pihak ketiga sebelum mencoba membicarakannya langsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyebarkan informasi konflik kepada rekan kerja lain agar mendapat dukungan</button>
  </div>
  <div class="quiz-q">
    <p>Dalam sebuah rapat guru, agenda tidak dibagikan sebelumnya, diskusi sering melebar ke topik yang tidak relevan, dan di akhir rapat tidak ada kejelasan siapa bertanggung jawab atas tindak lanjut apa. Berdasarkan Bab 4, apa akar masalah utama dari rapat ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Rapat terlalu singkat sehingga semua topik tidak sempat dibahas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurangnya persiapan agenda yang jelas, moderasi yang menjaga fokus diskusi, dan perencanaan tindak lanjut yang tertulis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Terlalu banyak peserta yang hadir dalam rapat tersebut</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru mendapati banyak siswanya kesulitan memahami satu topik matematika tertentu setelah ujian tengah semester. Ia ingin melaporkan hal ini kepada kepala sekolah. Berdasarkan Bab 4, pendekatan paling tepat sebelum bertemu kepala sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengeluh tentang siswa tanpa membawa data pendukung apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mempersiapkan data hasil evaluasi terkait serta menyiapkan solusi atau rekomendasi alternatif yang bisa diajukan dan didiskusikan bersama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu kepala sekolah menyadari masalah tersebut dengan sendirinya tanpa melaporkannya</button>
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
<h2 class="reveal">Dasar-dasar Manajemen Kelas</h2>
<p class="lede reveal">Setelah membahas komunikasi secara mendalam, bab ini beralih ke pilar kedua buku ini: manajemen kelas. Sebelum membahas strategi proaktif dan intervensi pada bab-bab berikutnya, guru perlu memahami dulu apa itu manajemen kelas, komponen apa saja yang membentuknya, dan prinsip dasar apa yang melandasinya.</p>

<div class="card reveal">
  <h4>A. Definisi dan Tujuan Manajemen Kelas</h4>
  <p>Manajemen kelas adalah serangkaian praktik dan strategi yang dilakukan guru untuk menciptakan lingkungan belajar yang kondusif, mengelola perilaku siswa secara efektif, dan memfasilitasi proses pembelajaran yang optimal di dalam kelas. Manajemen kelas memiliki empat tujuan utama: menciptakan lingkungan belajar yang aman dan positif di mana siswa merasa nyaman dan termotivasi untuk belajar; mengelola perilaku siswa agar sesuai norma yang ditetapkan sehingga tidak mengganggu proses pembelajaran; meningkatkan efisiensi pembelajaran dengan mengoptimalkan penggunaan waktu dan sumber daya di kelas; serta membangun hubungan yang positif antara guru dan siswa yang memperkuat rasa saling menghormati dan interaksi sosial di antara mereka.</p>
  <p>Untuk mencapai tujuan-tujuan ini, ada empat strategi utama yang perlu diterapkan: penataan ruang kelas yang memungkinkan interaksi efektif antara guru-siswa maupun antar-siswa; pengaturan rutinitas harian yang jelas untuk memfasilitasi transisi yang mulus antar-aktivitas belajar; penerapan aturan dan prosedur yang jelas disertai konsekuensi yang konsisten; serta pembinaan hubungan lewat komunikasi yang efektif, empati, dan dukungan terhadap kebutuhan individu siswa. Ketika manajemen kelas dijalankan dengan baik, manfaatnya nyata: peningkatan prestasi akademik karena siswa lebih fokus dalam lingkungan yang terstruktur, pencegahan masalah disiplin karena insiden perilaku mengganggu berkurang, serta peningkatan kesejahteraan siswa karena lingkungan kelas yang aman dan positif memberikan dukungan emosional dan sosial bagi mereka.</p>

  <h4>B. Komponen Manajemen Kelas yang Efektif</h4>
  <p>Ada enam komponen yang bersama-sama membentuk manajemen kelas yang efektif. <strong>Aturan kelas yang jelas</strong> menjadi pedoman perilaku yang disusun dengan jelas dan dipahami semua siswa, mencakup misalnya ketertiban penggunaan waktu, penggunaan teknologi, dan etika berkomunikasi. <strong>Rutinitas harian yang teratur</strong> membantu menciptakan struktur dalam pembelajaran dan mengurangi kebingungan siswa tentang apa yang diharapkan dari mereka, meliputi pengaturan awal kelas, peralihan antar-mata pelajaran, istirahat, dan pengakhiran kelas. <strong>Lingkungan fisik yang mendukung</strong> — mulai dari penataan meja-kursi, pencahayaan, suhu ruangan, hingga kebersihan — memengaruhi kenyamanan dan konsentrasi siswa secara langsung.</p>
  <p><strong>Komunikasi yang terbuka dan efektif</strong> antara guru-siswa maupun antar-siswa perlu didukung suasana yang menghargai pendapat setiap individu serta umpan balik yang konstruktif. <strong>Konsistensi dan penerapan yang adil</strong> dalam menjalankan aturan, rutinitas, dan ekspektasi membantu siswa merasa aman dan memahami batas-batas perilaku yang diterima. Terakhir, <strong>evaluasi dan penyesuaian</strong> yang terus-menerus terhadap kelima komponen di atas memastikan pendekatan guru tetap relevan dengan respons siswa dan hasil belajar yang dicapai. Keenam komponen ini secara bersamaan meningkatkan konsentrasi dan fokus belajar siswa, meningkatkan rasa tanggung jawab mereka, serta membangun hubungan yang positif antara guru dan siswa maupun di antara siswa sendiri.</p>

  <h4>C. Prinsip-prinsip Manajemen Kelas</h4>
  <p>Di balik seluruh komponen manajemen kelas, ada tiga prinsip dasar yang harus dipegang guru. <strong>Konsistensi</strong> adalah prinsip utama — menerapkan aturan dan konsekuensi dengan cara yang sama untuk setiap situasi yang serupa, sehingga siswa memahami harapan dan batas-batas yang ada dan lebih mudah beradaptasi mengatur perilaku mereka sendiri. <strong>Keadilan</strong> menekankan perlakuan yang sama terhadap semua siswa tanpa preferensi atau diskriminasi, memastikan setiap siswa mendapat kesempatan setara untuk belajar dan berkembang. <strong>Transparansi</strong> mengacu pada komunikasi yang jelas dan terbuka mengenai aturan, harapan, dan evaluasi — guru perlu menjelaskan secara terperinci mengapa suatu aturan dibuat dan apa konsekuensinya bila dilanggar, sehingga siswa memahami tujuan aturan tersebut dan tidak sekadar merasa dikekang tanpa alasan yang jelas.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga prinsip manajemen kelas (konsistensi, keadilan, transparansi) yang dibahas di bab ini, prinsip mana yang menurut Anda paling sering luput dijalankan secara konsisten di kelas Anda — dan apa yang membuatnya sulit dijaga?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa tujuan utama dari manajemen kelas?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empat tujuan: lingkungan aman & positif, mengelola perilaku, meningkatkan efisiensi, dan membangun hubungan positif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu tujuan tunggal, yaitu menegakkan kedisiplinan dengan hukuman</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tujuh tujuan yang mencakup seluruh mata pelajaran di sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menerapkan aturan "tidak boleh terlambat" secara ketat kepada sebagian siswa, tetapi membiarkan siswa favoritnya terlambat tanpa konsekuensi apa pun. Berdasarkan prinsip manajemen kelas pada bab ini, prinsip apa yang paling jelas dilanggar oleh guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Transparansi, karena guru tidak menjelaskan alasan aturan tersebut dibuat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keadilan dan konsistensi, karena aturan tidak diterapkan secara sama dan setara kepada semua siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada prinsip yang dilanggar karena guru berhak memberi pengecualian</button>
  </div>
  <div class="quiz-q">
    <p>SD Harapan Bangsa memiliki aturan kelas yang lengkap tertulis di papan pengumuman, tetapi guru tidak pernah menjelaskan kepada siswa mengapa aturan itu dibuat maupun apa konsekuensi konkretnya bila dilanggar. Berdasarkan Bab 5, prinsip apa yang paling perlu diperkuat di kelas tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Efisiensi penggunaan waktu pembelajaran semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Transparansi, dengan menjelaskan secara terperinci alasan dan konsekuensi dari setiap aturan agar siswa memahami tujuannya, bukan sekadar mematuhinya tanpa penjelasan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penambahan jumlah aturan tertulis di papan pengumuman</button>
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
<h2 class="reveal">Strategi Proaktif dalam Manajemen Kelas</h2>
<p class="lede reveal">Manajemen kelas yang baik dimulai jauh sebelum masalah perilaku muncul. Bab ini membahas strategi proaktif — menciptakan lingkungan belajar yang kondusif, mengatur tata letak kelas, menetapkan aturan dan harapan bersama siswa, serta mengembangkan rutinitas kelas — yang bersama-sama mencegah gangguan sebelum terjadi.</p>

<div class="card reveal">
  <h4>A. Menciptakan Lingkungan Belajar yang Kondusif</h4>
  <p>Lingkungan belajar yang kondusif dibangun dari lima elemen yang saling menopang. Pertama, penataan fisik kelas yang tepat — susunan tempat duduk yang mendukung interaksi, pencahayaan dan ventilasi yang cukup agar siswa tidak cepat lelah, serta kebersihan dan kerapihan yang menciptakan suasana nyaman dan meningkatkan fokus. Kedua, pengaturan norma dan aturan kelas sejak awal, dibuat jelas, spesifik, realistis, menggunakan bahasa positif (misalnya "tolong berjalan dengan tenang" alih-alih "jangan berlari"), serta diterapkan secara konsisten agar siswa tidak bingung. Ketiga, rutinitas yang teratur — pembukaan kelas yang jelas seperti doa bersama atau refleksi singkat, transisi antar-aktivitas yang teratur, dan penutupan pelajaran dengan kesimpulan atau refleksi singkat — yang membantu siswa merasa aman karena tahu apa yang akan terjadi selanjutnya.</p>
  <p>Keempat, memfasilitasi kolaborasi dan interaksi sosial lewat diskusi kelompok, proyek berbasis tim, atau metode "think-pair-share" (siswa berpikir sendiri, berdiskusi dengan teman, lalu berbagi di depan kelas), yang mengembangkan keterampilan sosial dan rasa percaya diri siswa. Kelima, mendukung kebutuhan individu siswa dengan mengidentifikasi gaya belajar masing-masing, memberikan diferensiasi pembelajaran sesuai kemampuan, menyediakan bimbingan tambahan bila diperlukan, serta memperhatikan kesejahteraan emosional siswa yang mungkin menghadapi tekanan di luar kelas. Guru yang mampu memadukan kelima elemen ini menciptakan suasana kelas yang nyaman, tertib, dan mendukung pembelajaran, sekaligus membuat siswa merasa lebih percaya diri dan termotivasi untuk berkembang.</p>

  <h4>B. Mengatur Tata Letak Kelas</h4>
  <p>Tata letak kelas berpengaruh langsung pada kenyamanan siswa dan efektivitas pembelajaran. Guru perlu memastikan ruang terbuka dan akses mudah — tidak ada perabotan yang menghalangi jalur keluar-masuk, ruang cukup di antara meja-kursi untuk memudahkan perpindahan saat diskusi kelompok, serta tidak ada benda besar di tengah kelas yang menghambat visibilitas. Penempatan meja dan kursi juga perlu disesuaikan dengan metode pembelajaran: tata letak berkelompok cocok untuk kerja sama dan diskusi, tata letak melingkar atau U-shape memungkinkan setiap siswa melihat guru dan teman dengan jelas sehingga meningkatkan partisipasi, sementara tata letak tradisional berbaris cocok untuk pembelajaran terstruktur namun perlu diselingi metode lain agar tidak membosankan.</p>
  <p>Kelas yang baik juga bisa dibagi menjadi zona-zona khusus sesuai kebutuhan belajar siswa — sudut baca untuk meningkatkan minat literasi, zona kreatif dengan alat seni dan papan ide, stasiun kerja kelompok untuk siswa yang bekerja dalam tim, dan zona refleksi yang lebih tenang bagi siswa yang butuh waktu berpikir mandiri. Selain itu, guru perlu memastikan fasilitas teknologi tertata rapi dan mudah diakses tanpa mengganggu jalannya pelajaran, serta memperhatikan keamanan dan kelancaran lalu lintas di dalam kelas — jalur evakuasi yang jelas, tidak ada barang berat berisiko jatuh, dan lingkungan yang aman secara psikologis di mana siswa tidak takut bertanya atau berpendapat.</p>

  <h4>C. Menetapkan Aturan dan Harapan</h4>
  <p>Menetapkan aturan yang jelas dan harapan yang realistis membantu siswa memahami batasan sekaligus mendorong mereka berperilaku sesuai norma yang disepakati. Langkah pertama adalah kolaborasi dengan siswa dalam menyusun aturan lewat diskusi bersama — misalnya bertanya "Menurut kalian, aturan apa saja yang penting agar kelas ini tetap nyaman?" — karena siswa yang dilibatkan dalam pembuatan aturan cenderung lebih patuh, lebih memahami tanggung jawab, dan merasa suaranya dihargai. Langkah kedua adalah klarifikasi aturan dan konsekuensi secara spesifik dan mudah dipahami, menggunakan bahasa sederhana dan lugas, relevan dengan kondisi kelas, serta konsekuensi yang adil dan proporsional — misalnya, keterlambatan dikonsekuensikan dengan mengisi jurnal refleksi tentang disiplin waktu, bukan hukuman yang tidak berkaitan dengan pelanggarannya.</p>
  <p>Langkah ketiga, dan mungkin yang paling menentukan, adalah konsistensi dalam penegakan aturan. Jika aturan diterapkan secara tidak merata — misalnya hanya berlaku untuk sebagian siswa atau hanya ditegakkan sesekali — siswa akan bingung dan kehilangan motivasi untuk mematuhinya. Penting bagi guru untuk menjelaskan kepada siswa bahwa aturan dan konsekuensi dibuat bukan untuk menghukum, melainkan untuk menjaga suasana belajar yang nyaman dan mendukung perkembangan mereka bersama.</p>

  <h4>D. Pengembangan Rutinitas Kelas</h4>
  <p>Rutinitas kelas yang efektif membuat siswa merasa lebih aman dan nyaman karena mereka tahu apa yang akan terjadi selanjutnya, sekaligus membuat pembelajaran lebih efisien. Untuk mengembangkannya, guru perlu menentukan aktivitas yang membutuhkan rutinitas — seperti cara memulai dan mengakhiri pelajaran, prosedur bertanya, cara mengumpulkan tugas, dan transisi antaraktivitas — lalu menjelaskannya dengan bahasa sederhana, bila perlu disertai panduan tertulis atau visual. Rutinitas kemudian perlu dilatih dan diterapkan secara konsisten hingga siswa terbiasa menjalankannya secara otomatis, disertai waktu adaptasi yang cukup karena siswa membutuhkan waktu menyesuaikan diri dengan rutinitas baru tanpa merasa terbebani.</p>
  <p>Guru juga perlu melibatkan siswa dalam menyusun dan mengevaluasi rutinitas, serta melakukan evaluasi dan penyesuaian berkala karena tidak semua rutinitas langsung berjalan sempurna. Ketika rutinitas kelas diterapkan dengan baik, manfaatnya luas: meningkatkan efisiensi waktu pembelajaran karena waktu tidak terbuang sia-sia, menciptakan suasana belajar yang tertib dan kondusif, menumbuhkan disiplin dan tanggung jawab siswa, membantu mereka lebih fokus karena tidak perlu menebak-nebak harus berbuat apa selanjutnya, serta mengurangi stres dan meningkatkan rasa percaya diri siswa karena mereka tahu apa yang akan dihadapi setiap harinya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat strategi proaktif pada bab ini (lingkungan kondusif, tata letak kelas, aturan & harapan, rutinitas kelas), mana yang paling belum optimal diterapkan di kelas Anda — dan apa satu perubahan kecil yang bisa Anda coba minggu depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, tata letak kelas yang memungkinkan setiap siswa melihat guru dan teman-temannya dengan jelas sehingga meningkatkan partisipasi dalam diskusi disebut tata letak...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tradisional berbaris menghadap ke depan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melingkar atau U-shape</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Zona bebas tanpa pengaturan meja-kursi sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menetapkan aturan kelas sendirian tanpa melibatkan siswa sama sekali, lalu menegakkannya secara ketat hanya pada minggu pertama sebelum akhirnya berhenti menindaklanjuti pelanggaran. Berdasarkan Bab 6, dua kelemahan utama pendekatan guru tersebut adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Aturan terlalu banyak melibatkan siswa dan terlalu konsisten diterapkan sepanjang semester</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurangnya kolaborasi dengan siswa dalam menyusun aturan, serta tidak adanya konsistensi dalam penegakannya sepanjang waktu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru terlalu sering menjelaskan konsekuensi aturan kepada siswa</button>
  </div>
  <div class="quiz-q">
    <p>SMP Tunas Mulia memindahkan siswa ke kelas baru dengan ruang yang lebih sempit, meja-kursi disusun rapat tanpa celah, dan tidak ada zona khusus untuk kegiatan kelompok maupun refleksi individu. Berdasarkan Bab 6, dampak paling mungkin dari kondisi ini terhadap pembelajaran adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena tata letak kelas tidak memengaruhi pembelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mobilitas dan fleksibilitas siswa terhambat, sehingga kolaborasi, diskusi kelompok, dan variasi metode belajar menjadi lebih sulit dilakukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan otomatis menjadi lebih disiplin karena ruang yang sempit memaksa mereka diam</button>
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
<h2 class="reveal">Strategi Intervensi dalam Manajemen Kelas</h2>
<p class="lede reveal">Sebaik apa pun strategi proaktif diterapkan, perilaku mengganggu dan konflik tetap mungkin muncul. Bab ini membahas cara mengatasi perilaku mengganggu, memadukan pendekatan preventif dan kuratif, menggunakan hukuman-penghargaan secara efektif, serta menangani konflik antar siswa dengan konstruktif.</p>

<div class="card reveal">
  <h4>A. Teknik Mengatasi Perilaku Mengganggu</h4>
  <p>Perilaku mengganggu mencakup berbagai tindakan yang menghambat proses belajar mengajar — mulai dari gangguan verbal, ketidakpatuhan terhadap aturan, hingga perilaku yang mengganggu perhatian siswa lain. Langkah pertama menghadapinya adalah pendekatan proaktif dengan menetapkan aturan dan harapan yang jelas sejak awal, memastikan siswa memahami konsekuensi dari perilaku mengganggu. Ketika perilaku tidak diharapkan terjadi, guru harus tetap tenang dan profesional, memberi reaksi yang cepat namun konsisten agar aturan kelas tetap dipatuhi tanpa menimbulkan gangguan lebih lanjut — teknik pernapasan dalam atau mengambil waktu sejenak sebelum merespons sangat membantu di sini.</p>
  <p>Setelah insiden mereda, penting untuk berkomunikasi secara terbuka dengan siswa secara individual — menjelaskan dampak perilaku mereka terhadap pembelajaran dan mendiskusikan cara mencegah perilaku serupa, sambil memberi siswa kesempatan menyampaikan pendapatnya. Bila perilaku mengganggu terus berlanjut, melibatkan orang tua menjadi langkah lanjutan yang penting, didiskusikan secara objektif dengan solusi bersama. Guru juga perlu mengevaluasi efektivitas strategi yang telah diterapkan secara berkala dan menyesuaikannya bila diperlukan.</p>

  <h4>B. Pendekatan Preventif dan Kuratif</h4>
  <p>Manajemen kelas yang efektif memadukan dua pendekatan yang saling melengkapi. Pendekatan preventif bertujuan mencegah masalah perilaku sebelum muncul: menetapkan aturan dan harapan yang jelas sejak awal, membangun hubungan yang positif antara guru dan siswa (siswa yang merasa didengarkan dan didukung cenderung lebih terlibat dan kurang menunjukkan perilaku mengganggu), mengembangkan rutinitas yang stabil untuk menciptakan prediktabilitas di kelas, serta menyediakan pembelajaran yang menarik dan relevan untuk mengurangi kebosanan yang sering memicu gangguan.</p>
  <p>Sementara itu, pendekatan kuratif berkaitan dengan cara menangani masalah perilaku yang sudah muncul: memberi reaksi yang tepat dan konsisten dengan memberlakukan konsekuensi yang telah disepakati sebelumnya secara jelas, melakukan intervensi individu lewat percakapan pribadi untuk mengidentifikasi penyebab perilaku dan mencari solusi bersama, serta berkolaborasi dengan orang tua untuk memperkuat konsistensi antara lingkungan sekolah dan rumah. Guru yang efektif tidak memilih salah satu pendekatan saja, melainkan menerapkan keduanya secara seimbang — preventif sebagai fondasi utama, kuratif sebagai respons ketika pencegahan belum sepenuhnya berhasil.</p>

  <h4>C. Penggunaan Hukuman dan Penghargaan secara Efektif</h4>
  <p>Hukuman dan penghargaan adalah dua strategi untuk mengelola perilaku siswa, dan keduanya perlu digunakan secara hati-hati agar benar-benar efektif. Hukuman yang efektif memiliki tujuan mengajarkan konsekuensi dari perilaku, bukan untuk menakut-nakuti siswa; diberikan secara konsisten dan adil dengan aturan yang dijelaskan sejak awal; proporsional dengan tingkat pelanggaran agar tidak terlalu keras atau terlalu ringan; dan disertai kesempatan bagi siswa untuk merenungkan tindakannya sebagai bagian dari proses belajar, bukan sekadar hukuman semata.</p>
  <p>Penghargaan yang efektif berfungsi sebagai penguatan positif — bisa berupa pujian, pengakuan, atau hadiah kecil — yang diberikan secara spesifik dan jelas sehingga siswa tahu persis apa yang mereka lakukan dengan baik, serta diberikan secara konsisten untuk membangun motivasi intrinsik. Kunci utamanya adalah menyeimbangkan keduanya: terlalu banyak hukuman menciptakan lingkungan negatif yang menurunkan motivasi, sementara terlalu banyak penghargaan mengurangi nilai dari penguatan positif itu sendiri, sehingga guru perlu memperhatikan konteks kelas dan karakteristik individu siswa saat menerapkan strategi ini. Ketika diterapkan secara seimbang, hukuman dan penghargaan membantu membentuk disiplin, meningkatkan motivasi dan partisipasi siswa, serta membangun hubungan yang positif antara guru dan siswa lewat nilai tanggung jawab dan penghargaan terhadap usaha.</p>

  <h4>D. Menangani Konflik Antar Siswa</h4>
  <p>Konflik antar siswa adalah bagian alami dari interaksi sosial di kelas, muncul karena perbedaan pendapat, mispersepsi, atau masalah interpersonal lainnya. Guru dapat menanganinya lewat enam langkah: intervensi awal dengan segera menanggapi konflik saat pertama kali muncul dan mengajak siswa yang terlibat duduk bersama membicarakannya dengan tenang; mendengarkan aktif semua pihak tanpa memihak, membiarkan setiap siswa mengungkapkan pendapatnya tanpa interupsi; mengajak siswa bekerja sama mencari solusi yang bisa diterima semua pihak; memfasilitasi dialog dengan berperan sebagai mediator netral, tidak menyalahkan atau memihak salah satu siswa.</p>
  <p>Bila diperlukan, guru dapat menerapkan aturan atau konsekuensi yang telah ditetapkan sebelumnya terkait penyelesaian konflik, diberlakukan secara adil dan konsisten. Setelah konflik terselesaikan, guru perlu memantau secara rutin hubungan antara siswa yang terlibat untuk memastikan tidak ada konflik yang muncul kembali, disertai dukungan tambahan bila diperlukan. Menangani konflik dengan tepat bukan hanya menyelesaikan masalah saat itu, tetapi juga mengajarkan siswa keterampilan resolusi konflik yang akan mereka bawa sepanjang hidup.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat strategi intervensi pada bab ini (mengatasi perilaku mengganggu, preventif-kuratif, hukuman-penghargaan, dan menangani konflik antar siswa), mana yang paling sering Anda hadapi di kelas — dan apakah pendekatan yang selama ini Anda pakai sudah sesuai dengan prinsip pada bab ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, pendekatan yang bertujuan mencegah masalah perilaku sebelum muncul, misalnya lewat aturan jelas dan hubungan positif dengan siswa, disebut pendekatan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Preventif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kuratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Punitif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru memberi hukuman yang sama beratnya untuk siswa yang lupa membawa buku dan siswa yang berkelahi di kelas, tanpa mempertimbangkan tingkat pelanggarannya. Berdasarkan Bab 7, prinsip penggunaan hukuman apa yang dilanggar guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Konsistensi, karena hukuman diberikan kepada dua siswa berbeda</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Proporsionalitas, karena hukuman tidak disesuaikan dengan tingkat pelanggaran atau perilaku yang tidak diinginkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penguatan positif, karena hukuman seharusnya diganti dengan pujian</button>
  </div>
  <div class="quiz-q">
    <p>Dua siswa di kelas 8 terlibat perselisihan karena salah paham soal pembagian tugas kelompok, dan suasana kelas mulai tegang. Berdasarkan Bab 7, langkah pertama yang paling tepat diambil guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan kedua siswa menyelesaikannya sendiri tanpa keterlibatan guru sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Segera melakukan intervensi awal dengan mengajak kedua siswa duduk bersama dan mendengarkan kedua sisi cerita secara tenang tanpa memihak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menghukum kedua siswa tanpa mendengarkan penjelasan mereka terlebih dahulu</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab7" onclick="markDone('bab7')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab7">✓ Bab 7 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab8: `
<p class="eyebrow reveal">Bab 8</p>
<h2 class="reveal">Penggunaan Teknologi dalam Komunikasi dan Manajemen Kelas</h2>
<p class="lede reveal">Teknologi telah menjadi bagian tak terpisahkan dari dunia pendidikan modern. Bab ini membahas alat teknologi yang dapat memperkuat komunikasi, platform pembelajaran online untuk pengelolaan kelas, serta tantangan yang perlu diantisipasi saat teknologi diintegrasikan ke dalam praktik sehari-hari guru.</p>

<div class="card reveal">
  <h4>A. Alat Teknologi untuk Meningkatkan Komunikasi</h4>
  <p>Berbagai alat teknologi kini tersedia untuk memperkuat komunikasi antara guru, siswa, dan orang tua. Email dan aplikasi pesan instan memungkinkan guru membagikan informasi penting secara cepat dan terdokumentasi, sementara grup komunikasi kelas (misalnya lewat aplikasi pesan) memudahkan pengumuman rutin dan koordinasi kegiatan tanpa harus menunggu pertemuan tatap muka. Platform pembelajaran daring seperti Google Classroom, Moodle, atau Schoology memungkinkan guru membagikan materi, tugas, dan umpan balik kapan saja, sementara media sosial dapat dimanfaatkan sebagai saluran berbagi konten edukatif dan dokumentasi kegiatan sekolah yang membangun keterlibatan komunitas.</p>
  <p>Yang perlu diingat, alat teknologi ini hanyalah sarana, bukan pengganti keteladanan dan interaksi personal guru. Penggunaan yang efektif adalah memadukan kemudahan teknologi — kecepatan, dokumentasi, jangkauan luas — dengan sentuhan manusiawi yang tetap hadir lewat percakapan langsung, empati, dan perhatian personal terhadap kebutuhan setiap siswa dan orang tua.</p>

  <h4>B. Platform Pembelajaran Online dan Pengelolaan Kelas</h4>
  <p>Platform pembelajaran online tidak hanya membantu penyampaian materi, tetapi juga pengelolaan kelas secara keseluruhan. Banyak platform kini menyediakan akses khusus untuk orang tua, di mana mereka dapat melihat jadwal pelajaran, hasil ujian, dan catatan kehadiran siswa secara langsung — hal ini memperkuat kolaborasi antara rumah dan sekolah dalam mendukung pembelajaran siswa, karena orang tua tidak lagi bergantung sepenuhnya pada laporan berkala yang terbatas. Fitur kehadiran digital juga memudahkan guru mengelola dan melacak kehadiran siswa secara <em>real-time</em>, sehingga laporan kehadiran kepada orang tua dapat diberikan lebih cepat dan pola kehadiran yang perlu diperhatikan — misalnya ketidakhadiran berulang — dapat diidentifikasi lebih dini sebelum menjadi masalah yang lebih besar.</p>

  <h4>C. Mengatasi Tantangan Teknologi dalam Pendidikan</h4>
  <p>Penggunaan teknologi membawa banyak manfaat, tetapi juga menghadirkan tantangan nyata yang perlu diantisipasi. Pertama, aksesibilitas dan infrastruktur — tidak semua siswa memiliki akses internet stabil atau perangkat memadai di rumah — dapat diatasi lewat kolaborasi sekolah dengan pemerintah atau komunitas untuk menyediakan akses, serta menyediakan alternatif pembelajaran hybrid atau luring bagi siswa yang aksesnya terbatas. Kedua, keterbatasan keterampilan teknologi guru dapat diatasi lewat pelatihan rutin, dukungan teknis, dan kolaborasi antar-guru untuk saling berbagi pengetahuan.</p>
  <p>Ketiga, keamanan dan privasi data siswa perlu dijaga lewat kebijakan yang jelas tentang penggunaan teknologi serta pelatihan kesadaran privasi data bagi siswa dan orang tua. Keempat, integrasi teknologi dengan kurikulum tradisional membutuhkan pengembangan kurikulum terpadu yang mencakup penggunaan teknologi secara menyatu, bukan sebagai tambahan terpisah, disertai evaluasi rutin agar pengintegrasian tetap sesuai tujuan pembelajaran. Kelima, kesetaraan dan keadilan dalam pembelajaran — teknologi berpotensi memperbesar kesenjangan antara siswa yang memiliki akses dan yang tidak — perlu diatasi dengan pendekatan fleksibel yang mempertimbangkan keterbatasan siswa serta monitoring dan dukungan tambahan bagi mereka yang membutuhkan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima tantangan teknologi pada bab ini (aksesibilitas, keterampilan guru, keamanan data, integrasi kurikulum, kesetaraan), tantangan mana yang paling terasa di sekolah Anda saat ini — dan solusi mana yang paling realistis untuk mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, fitur kehadiran digital pada platform pembelajaran online bermanfaat untuk...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengelola dan melacak kehadiran siswa secara real-time, memudahkan pelaporan kepada orang tua serta mengidentifikasi pola kehadiran yang perlu diperhatikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan seluruh interaksi tatap muka antara guru dan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus kebutuhan akan aturan dan rutinitas kelas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memasang banyak aplikasi pemantauan dan rutin mengirim pesan otomatis berisi pengumuman, tetapi guru jarang menunjukkan keteladanan langsung dan interaksi personal dengan siswa semakin berkurang. Berdasarkan Bab 8, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang salah, karena teknologi sepenuhnya bisa menggantikan peran guru dalam berkomunikasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Teknologi diperlakukan sebagai pengganti, bukan alat bantu — padahal keteladanan dan interaksi personal tetap menjadi inti komunikasi yang efektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya menghapus semua teknologi karena terbukti tidak berguna sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>SMP Cendekia memiliki sejumlah siswa dari keluarga kurang mampu yang tidak memiliki akses internet stabil di rumah, sehingga mereka tertinggal saat sekolah beralih ke tugas berbasis platform online. Berdasarkan Bab 8, solusi paling tepat untuk situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap mewajibkan seluruh tugas berbasis online tanpa pengecualian bagi siapa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berkolaborasi dengan pemerintah atau komunitas untuk membantu akses, serta menyediakan alternatif pembelajaran hybrid atau luring bagi siswa yang belum memiliki akses memadai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengeluarkan siswa yang tidak memiliki akses internet dari kegiatan pembelajaran</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab8" onclick="markDone('bab8')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab8">✓ Bab 8 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab9: `
<p class="eyebrow reveal">Bab 9</p>
<h2 class="reveal">Pengembangan Profesional dalam Komunikasi dan Manajemen Kelas</h2>
<p class="lede reveal">Keterampilan komunikasi dan manajemen kelas bukan sesuatu yang sekali dipelajari lalu selesai — ia perlu terus diasah. Bab penutup ini membahas cara guru mengembangkan diri secara berkelanjutan lewat pelatihan, literatur, umpan balik dan evaluasi diri, serta bagaimana mengubah pengalaman menjadi pembelajaran nyata.</p>

<div class="card reveal">
  <h4>A. Mengikuti Pelatihan dan Workshop</h4>
  <p>Pelatihan dan workshop adalah bagian integral dari pengembangan profesional guru, membawa manfaat baik dari sisi teknis maupun personal. Pelatihan memberi kesempatan memperbarui pengetahuan terbaru dalam pendidikan dan teknologi — metode pengajaran baru, strategi manajemen kelas terkini, serta aplikasi teknologi yang dapat meningkatkan efektivitas pembelajaran. Pelatihan juga membuka ruang pembelajaran kolaboratif, di mana guru berinteraksi dengan sesama pendidik dari berbagai latar belakang untuk berbagi pengalaman dan praktik terbaik, sekaligus memperluas jaringan profesional.</p>
  <p>Selain manfaat teknis, mengikuti pelatihan memberi dorongan motivasi yang besar — guru merasa dihargai atas investasi waktu dan upaya pengembangan dirinya, yang pada gilirannya meningkatkan kepuasan kerja karena merasa lebih siap menghadapi tantangan profesi. Pelatihan sering menekankan praktik terbaik yang telah terbukti efektif, yang bisa diadaptasi guru sesuai kebutuhan dan konteks kelasnya sendiri. Pada akhirnya, mengikuti pelatihan dan workshop adalah bentuk komitmen terhadap pengembangan profesional yang berkelanjutan, yang tidak hanya memperkaya pengalaman belajar siswa tetapi juga turut membentuk masa depan pendidikan yang lebih baik.</p>

  <h4>B. Membaca Literatur Terkait</h4>
  <p>Membaca literatur terkait adalah cara efektif lain bagi guru untuk terus mengembangkan keterampilan komunikasi dan manajemen kelas mereka. Ada empat kategori literatur yang direkomendasikan: buku tentang komunikasi efektif yang membahas dasar-dasar seperti keterbukaan, empati, dan kejelasan dalam konteks pendidikan, termasuk teknik-teknik praktis mendengarkan aktif; literatur tentang manajemen kelas yang membahas pembentukan aturan, pengaturan lingkungan fisik, dan strategi mengelola rutinitas harian; buku tentang komunikasi dengan orang tua yang memberi tips membangun hubungan baik dan menyampaikan berita baik-buruk secara efektif; serta literatur tentang penggunaan teknologi dalam pendidikan yang memperkenalkan berbagai platform pembelajaran online dan strategi mengatasi tantangannya. Dengan membaca secara rutin di keempat kategori ini, guru memiliki basis pengetahuan yang terus diperbarui untuk mendukung praktik mengajarnya.</p>

  <h4>C. Mencari Umpan Balik dan Evaluasi Diri</h4>
  <p>Mencari umpan balik dan melakukan evaluasi diri membantu guru memahami kekuatan mereka, mengidentifikasi area yang perlu ditingkatkan, dan terus memperbaiki praktik pengajaran. Umpan balik bisa digali dari tiga sumber: dari siswa lewat pertanyaan terbuka seperti "Apa yang Anda sukai dari kelas ini?"; dari orang tua lewat pertemuan atau survei tentang pengalaman mereka dengan komunikasi dan manajemen kelas guru; serta dari rekan kerja lewat diskusi tim tentang strategi yang digunakan, yang dapat membuka pandangan baru dan memperkaya praktik pengajaran.</p>
  <p>Selain mencari umpan balik dari luar, guru juga perlu melakukan evaluasi diri secara rutin: merefleksikan pengalaman pengajaran dengan bertanya "Apa yang berhasil dalam pengajaran saya?" dan "Apa yang bisa ditingkatkan?"; menganalisis data hasil belajar siswa untuk mengevaluasi efektivitas strategi komunikasi dan manajemen kelas yang diterapkan serta mengidentifikasi pola atau tren yang memberi wawasan; dan berdasarkan semua itu, menyusun rencana perbaikan yang spesifik dan terukur dengan tujuan jangka pendek maupun jangka panjang.</p>

  <h4>D. Mengimplementasikan Pembelajaran dari Pengalaman</h4>
  <p>Langkah terakhir dan mungkin paling penting adalah mengubah pengalaman mengajar menjadi pembelajaran nyata yang diterapkan kembali. Ini dimulai dari refleksi terhadap pengalaman — menganalisis setiap sesi pengajaran dengan mempertimbangkan tanggapan siswa, hasil belajar, dan dinamika kelas secara keseluruhan; mengidentifikasi tantangan dan keberhasilan yang dialami dalam mengelola kelas maupun berkomunikasi dengan siswa dan orang tua; serta mencari penyebab dan solusi dari setiap tantangan yang dihadapi.</p>
  <p>Dari proses refleksi ini, guru dapat memetik pelajaran — memperhatikan teknik yang berhasil meningkatkan kualitas pengajaran atau memperbaiki hubungan dengan siswa dan orang tua (pengalaman positif), serta mengambil pelajaran dari pengalaman yang kurang berhasil dengan mempertimbangkan strategi alternatif untuk menghindari masalah serupa (pengalaman negatif). Langkah terakhir adalah benar-benar mengimplementasikan pembelajaran itu: menyusun rencana tindakan yang konkret dan terukur dengan tujuan perbaikan yang spesifik, lalu mempraktikkan perubahan tersebut secara konsisten dalam mengajar, memberi waktu untuk mengevaluasi efektivitasnya, dan menyesuaikannya kembali bila diperlukan. Siklus refleksi-implementasi-evaluasi inilah yang membuat seorang guru terus bertumbuh sepanjang kariernya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari keempat cara pengembangan profesional pada bab ini (pelatihan, literatur, umpan balik & evaluasi diri, implementasi pembelajaran dari pengalaman), mana yang paling jarang Anda lakukan secara rutin selama ini — dan apa komitmen kecil yang bisa Anda mulai bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, dari sumber mana saja seorang guru dapat mencari umpan balik untuk pengembangan profesionalnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Dari siswa, orang tua, dan rekan kerja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya dari kepala sekolah semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu mencari umpan balik dari pihak mana pun</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru rajin mengikuti pelatihan dan membaca banyak buku tentang manajemen kelas, tetapi tidak pernah merefleksikan hasil mengajarnya sendiri maupun mencoba menerapkan hal baru yang dipelajari ke dalam kelasnya. Berdasarkan Bab 9, apa yang masih kurang dari upaya pengembangan profesional guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena mengikuti pelatihan dan membaca buku saja sudah cukup untuk berkembang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Langkah refleksi dan implementasi nyata dari apa yang dipelajari — pengetahuan baru perlu dipraktikkan, dievaluasi, dan disesuaikan di kelas, bukan berhenti sebagai teori</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut seharusnya berhenti mengikuti pelatihan karena dianggap tidak berguna</button>
  </div>
  <div class="quiz-q">
    <p>Setelah menerapkan metode diskusi kelompok baru, seorang guru mendapati sebagian siswa justru semakin pasif dan hanya mengandalkan satu-dua anggota kelompok saja. Berdasarkan Bab 9, langkah paling tepat yang sebaiknya diambil guru tersebut adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menghentikan seluruh metode diskusi kelompok secara permanen tanpa evaluasi lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan hasil pengamatan tersebut karena metode baru dianggap selalu lebih baik dari metode lama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merefleksikan penyebab ketidakefektifan metode tersebut, mencari solusi seperti pembagian peran yang lebih jelas dalam kelompok, lalu mencoba kembali dan mengevaluasi hasilnya</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab9" onclick="markDone('bab9')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab9">✓ Bab 9 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

asesmen: `
<p class="eyebrow reveal">Evaluasi</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab. Jawaban tidak akan langsung diperlihatkan — jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="2">
    <p>Seorang guru selalu menyampaikan materi dengan lancar, tetapi tidak pernah mengecek pemahaman siswa maupun memberi ruang bertanya. Berdasarkan Bab 1, elemen komunikasi efektif apa yang paling lemah pada guru tersebut?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati semata, karena guru tidak menunjukkan perasaannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterampilan mendengarkan dan kejelasan, karena tidak ada pengecekan pemahaman maupun dialog dua arah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterbukaan, karena guru menyembunyikan materi dari siswa</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah memiliki koneksi internet yang sering bermasalah sehingga informasi penting dari sekolah ke orang tua sering terlambat sampai. Berdasarkan Bab 1, langkah paling tepat mengatasi hambatan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh komunikasi dengan orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena dianggap tidak bisa diatasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memastikan teknologi yang digunakan berfungsi baik dan mudah diakses, serta menyediakan jalur komunikasi cadangan</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Rani, siswa yang pendiam dan cenderung menghindar bila diminta berbicara di depan kelas. Berdasarkan Bab 2, pendekatan komunikasi paling tepat untuk Rani adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksanya berbicara di depan kelas tanpa persiapan agar terbiasa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikannya karena siswa introvert dianggap tidak perlu dilibatkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberinya kesempatan berbicara dalam kelompok kecil atau lewat tulisan, disertai perhatian personal agar ia merasa dihargai</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru memuji semua tugas siswa dengan kata "bagus" tanpa menjelaskan bagian mana yang tepat dan mana yang perlu diperbaiki. Berdasarkan Bab 2, apa kelemahan utama pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada kelemahan, karena pujian selalu meningkatkan motivasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Umpan balik tidak spesifik sehingga siswa tidak tahu apa yang perlu ditingkatkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru seharusnya berhenti memberi umpan balik sama sekali</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa terlihat lesu, tidak fokus, dan enggan menjawab pertanyaan di kelas karena baru saja mengalami masalah pribadi di rumah. Berdasarkan hambatan emosional pada Bab 2, pendekatan paling tepat dari guru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menegur siswa tersebut agar segera fokus kembali ke pelajaran tanpa basa-basi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali tanda-tanda emosionalnya, memberi ruang untuk menenangkan diri, dan menggunakan pendekatan yang lebih empati serta sabar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan kondisi siswa dan tetap melanjutkan pelajaran seperti biasa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 3, saat menyampaikan berita negatif kepada orang tua, setelah menyampaikannya dengan empati, langkah berikutnya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Fokus pada solusi, dengan mengusulkan langkah konstruktif dan mengajak orang tua berkolaborasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Segera mengakhiri pertemuan tanpa membahas langkah selanjutnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyalahkan orang tua atas masalah yang terjadi</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah memiliki kurikulum yang baik, tetapi orang tua jarang hadir dalam pertemuan dan pola asuh di rumah tidak selaras dengan sekolah. Berdasarkan Bab 3, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena bukan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh program karena dianggap gagal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memperkuat komunikasi terbuka dan rutin serta mengajak orang tua terlibat langsung dalam keputusan dan kegiatan pendidikan anak</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, apa langkah pertama dalam menyelesaikan konflik dengan rekan kerja secara konstruktif?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendengarkan dengan empati perspektif semua pihak tanpa berspekulasi lebih dulu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Segera melibatkan pihak ketiga sebelum membicarakannya langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyebarkan informasi konflik kepada rekan kerja lain</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Dalam sebuah rapat guru, agenda tidak dibagikan sebelumnya, diskusi sering melebar ke topik tidak relevan, dan tidak ada kejelasan penanggung jawab tindak lanjut. Berdasarkan Bab 4, akar masalah utamanya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Rapat terlalu singkat sehingga semua topik tidak sempat dibahas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurangnya persiapan agenda, moderasi yang menjaga fokus, dan perencanaan tindak lanjut yang tertulis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terlalu banyak peserta yang hadir dalam rapat tersebut</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, ada berapa tujuan utama dari manajemen kelas?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empat tujuan: lingkungan aman & positif, mengelola perilaku, meningkatkan efisiensi, dan membangun hubungan positif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Satu tujuan tunggal, yaitu menegakkan kedisiplinan dengan hukuman</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tujuh tujuan yang mencakup seluruh mata pelajaran</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru menerapkan aturan "tidak boleh terlambat" secara ketat pada sebagian siswa, tetapi membiarkan siswa favoritnya tanpa konsekuensi. Berdasarkan Bab 5, prinsip apa yang dilanggar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Transparansi semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keadilan dan konsistensi, karena aturan tidak diterapkan sama kepada semua siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada prinsip yang dilanggar</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 6, tata letak kelas yang memungkinkan setiap siswa melihat guru dan teman-temannya dengan jelas sehingga meningkatkan partisipasi disebut tata letak...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tradisional berbaris menghadap ke depan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melingkar atau U-shape</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Zona bebas tanpa pengaturan meja-kursi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru menetapkan aturan kelas sendirian tanpa melibatkan siswa, lalu hanya menegakkannya ketat pada minggu pertama. Berdasarkan Bab 6, dua kelemahan utama pendekatan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aturan terlalu melibatkan siswa dan terlalu konsisten diterapkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurangnya kolaborasi dengan siswa dalam menyusun aturan serta tidak adanya konsistensi dalam penegakannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru terlalu sering menjelaskan konsekuensi aturan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 7, pendekatan yang bertujuan mencegah masalah perilaku sebelum muncul, misalnya lewat aturan jelas dan hubungan positif, disebut pendekatan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Preventif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kuratif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Punitif</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru memberi hukuman yang sama beratnya untuk siswa yang lupa membawa buku dan siswa yang berkelahi. Berdasarkan Bab 7, prinsip penggunaan hukuman apa yang dilanggar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Konsistensi semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Proporsionalitas, karena hukuman tidak disesuaikan dengan tingkat pelanggaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penguatan positif</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 8, fitur kehadiran digital pada platform pembelajaran online bermanfaat untuk...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengelola dan melacak kehadiran siswa secara real-time serta memudahkan pelaporan kepada orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan seluruh interaksi tatap muka guru-siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus kebutuhan akan aturan dan rutinitas kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah memasang banyak aplikasi pemantauan dan pesan otomatis, tetapi guru jarang menunjukkan keteladanan dan interaksi personal berkurang. Berdasarkan Bab 8, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah, karena teknologi bisa menggantikan peran guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Teknologi diperlakukan sebagai pengganti, bukan alat bantu, padahal keteladanan manusia tetap menjadi inti komunikasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah seharusnya menghapus semua teknologi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 9, dari sumber mana saja seorang guru dapat mencari umpan balik untuk pengembangan profesionalnya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dari siswa, orang tua, dan rekan kerja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya dari kepala sekolah semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu mencari umpan balik dari pihak mana pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru rajin mengikuti pelatihan dan membaca buku, tetapi tidak pernah merefleksikan hasil mengajarnya sendiri maupun mencoba menerapkan hal baru yang dipelajari. Berdasarkan Bab 9, apa yang masih kurang?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang kurang, karena pelatihan dan membaca buku saja sudah cukup</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langkah refleksi dan implementasi nyata dari apa yang dipelajari ke dalam praktik mengajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru tersebut seharusnya berhenti mengikuti pelatihan</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin memulai perbaikan komunikasi dan manajemen kelas secara menyeluruh, tetapi bingung harus mulai dari mana. Berdasarkan keseluruhan isi buku ini, fondasi apa yang paling perlu dipastikan lebih dulu sebelum strategi-strategi lain diterapkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi pemantauan kelas tercanggih yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun asesmen 20 soal terlebih dahulu sebelum program apa pun dijalankan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Elemen komunikasi dasar (keterbukaan, empati, kejelasan, mendengarkan aktif) dan prinsip manajemen kelas (konsistensi, keadilan, transparansi) yang dijalankan konsisten setiap hari</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
