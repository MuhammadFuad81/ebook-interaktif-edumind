/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Manajemen Sekolah Islam di Era Digital"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-manajemen-sekolah-islam-digital.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Transformasi Digital dalam Pendidikan</h2>
<p class="lede reveal">Sebelum membahas manajemen sekolah Islam secara lebih mendalam, penting untuk memahami dulu apa itu transformasi digital, bagaimana dampaknya terhadap dunia pendidikan, mengapa hal ini menjadi kebutuhan mendesak bagi sekolah Islam, serta tantangan dan solusi apa saja yang menyertainya.</p>

<div class="card reveal">
  <h4>A. Pengertian Transformasi Digital</h4>
  <p>Transformasi digital adalah proses yang melibatkan penggunaan teknologi digital untuk mengubah berbagai aspek cara kerja, komunikasi, dan penyampaian layanan di dalam suatu organisasi, termasuk dalam dunia pendidikan. Pada dasarnya, transformasi digital bukan sekadar menggunakan teknologi, melainkan merombak seluruh sistem dan cara berpikir agar pemanfaatan teknologi itu benar-benar maksimal. Dalam konteks pendidikan, transformasi digital mencakup penggunaan berbagai teknologi untuk memperbaiki proses belajar-mengajar, manajemen sekolah, serta interaksi antara guru, siswa, dan orang tua. Salah satu contoh nyatanya adalah penerapan Learning Management System (LMS), platform yang memungkinkan siswa mengakses materi pelajaran, mengerjakan tugas, dan berkomunikasi dengan guru secara online — memberi fleksibilitas waktu dan tempat yang semakin relevan di tengah tantangan pembelajaran jarak jauh. Dengan transformasi digital, pendidikan tidak lagi terbatas oleh ruang kelas fisik atau metode pengajaran konvensional, sehingga prosesnya menjadi lebih interaktif, efisien, dan dapat diakses oleh lebih banyak orang, bahkan di daerah yang sebelumnya sulit terjangkau.</p>
  <p>Digitalisasi dan transformasi digital sering dianggap sama, padahal berbeda. Digitalisasi adalah langkah awal yang lebih sederhana — sekadar mengonversi data atau layanan fisik menjadi format digital, misalnya mengganti buku cetak dengan e-book atau mengubah catatan manual menjadi dokumen digital, tanpa mengubah cara kerja secara keseluruhan. Transformasi digital jauh lebih mendalam dan menyeluruh: selain mencakup digitalisasi, ia juga mengubah bagaimana organisasi bekerja dengan teknologi untuk meningkatkan proses, struktur, dan budaya kerja — dalam pendidikan, ini berarti pergeseran dari metode pengajaran tradisional ke pembelajaran berbasis teknologi seperti video konferensi, aplikasi berbasis AI, hingga digitalisasi administrasi sekolah. Agar transformasi digital benar-benar efektif, ada tiga ciri yang perlu dipenuhi: berfokus pada hasil belajar siswa (teknologi digunakan bukan sekadar demi gengsi, melainkan untuk membuat pembelajaran lebih efektif dan menyenangkan sesuai kecepatan belajar tiap siswa), meningkatkan efisiensi operasional sekolah (mempercepat dan mengakuratkan pengelolaan administrasi, mulai dari absensi hingga penilaian), serta mendorong kolaborasi antara guru, siswa, dan orang tua (lewat platform digital yang memudahkan pemberian materi, umpan balik, dan pemantauan perkembangan anak).</p>

  <h4>B. Dampak Digitalisasi pada Pendidikan</h4>
  <p>Digitalisasi membawa sejumlah dampak positif yang nyata. Pertama, kemudahan akses informasi — siswa dan guru dapat mengakses sumber belajar kapan saja dan di mana saja, baik dalam bentuk teks, video, maupun audio, termasuk lewat platform LMS yang menyediakan materi ajar secara online. Kedua, personalisasi pembelajaran — teknologi memungkinkan aplikasi memberi latihan tambahan bagi siswa yang butuh waktu lebih lama memahami materi, sementara siswa yang lebih cepat bisa langsung melanjutkan ke topik berikutnya. Ketiga, efisiensi administrasi — tugas seperti absensi, pengolahan nilai, dan data siswa menjadi jauh lebih cepat dan akurat lewat sistem digital seperti Sistem Informasi Manajemen Sekolah (SIMS), sehingga mengurangi beban kerja manual.</p>
  <p>Di sisi lain, digitalisasi juga membawa dampak negatif yang perlu diwaspadai: ketergantungan berlebihan pada teknologi yang dapat menurunkan kemampuan berpikir kritis dan kreativitas siswa serta mengurangi interaksi sosial langsung; kesenjangan digital karena tidak semua siswa memiliki akses yang sama terhadap teknologi, terutama di daerah terpencil yang minim komputer dan internet; serta distraksi dan overload informasi akibat notifikasi aplikasi dan media sosial yang mengganggu fokus belajar. Contoh nyatanya dapat dilihat dari dua sisi: beberapa sekolah berhasil memanfaatkan LMS untuk ujian online dan aplikasi berbasis AI untuk rekomendasi materi tambahan sehingga kualitas pembelajaran meningkat, sementara di wilayah terpencil siswa masih menghadapi tantangan besar karena minimnya akses internet, meski sebagian sekolah mulai menyiasatinya dengan aplikasi pembelajaran offline.</p>

  <h4>C. Urgensi Digitalisasi di Sekolah Islam</h4>
  <p>Digitalisasi di sekolah Islam bukan lagi sekadar pilihan, melainkan kebutuhan, karena setidaknya empat alasan. Pertama, relevansi dengan era digital — dunia pendidikan tengah mengalami revolusi digital yang menuntut sekolah terus berinovasi; bila sekolah Islam tidak beradaptasi, ia berisiko tertinggal. Teknologi seperti Artificial Intelligence (AI) memungkinkan pembelajaran yang lebih personal lewat rekomendasi materi sesuai kemampuan siswa, sementara Internet of Things (IoT) dapat mempermudah manajemen sekolah, misalnya pengelolaan fasilitas dan monitoring kehadiran siswa secara otomatis. Kedua, persaingan global — sekolah Islam tidak hanya bersaing dengan sekolah umum di dalam negeri, tetapi juga dengan sekolah internasional yang sudah lebih dulu memanfaatkan teknologi; digitalisasi membuka peluang bagi sekolah Islam untuk memperluas akses dan daya tariknya, misalnya lewat kelas online atau program pertukaran pelajar virtual yang menghubungkan siswa dari berbagai belahan dunia.</p>
  <p>Ketiga, peningkatan mutu pendidikan Islam — di zaman serba digital, menyampaikan nilai-nilai keislaman memerlukan pendekatan yang lebih menarik bagi generasi muda, misalnya lewat aplikasi pembelajaran Al-Qur'an interaktif yang dilengkapi fitur pengenalan tajwid dan hafalan, atau dakwah berbasis video dan podcast yang menjangkau audiens lebih luas. Keempat, peluang pengembangan potensi guru dan siswa — bagi guru, digitalisasi membuka akses ke pelatihan online, webinar, dan kursus dari lembaga pendidikan internasional untuk terus mengembangkan keterampilan profesional; bagi siswa, digitalisasi membuka kesempatan mengembangkan keterampilan abad ke-21 seperti literasi digital, berpikir kritis, komunikasi, dan kolaborasi — bekal penting untuk dunia kerja masa depan.</p>

  <h4>D. Tantangan dan Solusi Transformasi Digital</h4>
  <p>Di balik potensi besarnya, transformasi digital di sekolah Islam menghadapi tiga tantangan utama. Pertama, keterbatasan infrastruktur — kurangnya akses jaringan internet yang memadai dan perangkat keras pendukung, terutama di daerah pedesaan atau terpencil, membuat penerapan pembelajaran berbasis teknologi menjadi sulit. Kedua, resistensi perubahan — banyak guru yang sudah lama mengajar dengan metode tradisional merasa tidak nyaman dengan teknologi baru, sehingga tanpa dukungan penuh dari tenaga pendidik, teknologi yang diterapkan tidak akan memberi manfaat maksimal. Ketiga, kesenjangan keterampilan digital — tidak semua guru dan siswa memiliki tingkat kemampuan teknologi yang sama; ada yang sudah terampil, ada pula yang masih kesulitan menggunakan perangkat atau aplikasi pembelajaran.</p>
  <p>Untuk mengatasi tantangan-tantangan ini, sekolah dapat menjalankan dua solusi utama. Pertama, pelatihan rutin bagi guru dan staf — tidak hanya mengajarkan cara memakai perangkat dan aplikasi, tetapi juga membangun pemahaman tentang pentingnya teknologi dalam pendidikan, sehingga tenaga pendidik merasa lebih siap dan percaya diri mengimplementasikannya di kelas. Kedua, kerja sama dengan pihak ketiga — sekolah dapat menggandeng penyedia layanan internet, vendor perangkat, atau platform pembelajaran digital untuk mendapatkan akses teknologi dengan biaya lebih terjangkau sekaligus dukungan teknis yang berkelanjutan, sehingga keterbatasan infrastruktur maupun anggaran tidak lagi menjadi penghalang utama bagi sekolah Islam untuk terus melangkah maju di era digital.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tantangan transformasi digital yang dibahas di bab ini (keterbatasan infrastruktur, resistensi perubahan, kesenjangan keterampilan digital), tantangan mana yang paling terasa nyata di sekolah Anda saat ini — dan langkah kecil apa yang bisa mulai dijalankan bulan ini untuk mengatasinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa perbedaan mendasar antara digitalisasi dan transformasi digital?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Digitalisasi sekadar mengonversi data/layanan fisik menjadi format digital, sedangkan transformasi digital mengubah cara kerja, struktur, dan budaya organisasi secara menyeluruh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Digitalisasi dan transformasi digital adalah dua istilah yang sepenuhnya identik tanpa perbedaan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Transformasi digital hanya berlaku untuk perusahaan swasta, tidak relevan untuk sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam membeli banyak perangkat tablet dan memasang WiFi di seluruh kelas, tetapi guru tidak pernah dilatih menggunakannya dan tetap mengajar dengan metode ceramah seperti biasa. Berdasarkan bab ini, ciri transformasi digital yang efektif apa yang paling terabaikan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ketersediaan anggaran yang besar untuk membeli perangkat semahal mungkin</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Fokus pada hasil belajar siswa serta pelatihan guru agar teknologi benar-benar mengubah cara mengajar, bukan sekadar tersedia secara fisik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kecepatan koneksi internet semata, tanpa perlu memperhatikan aspek lain</button>
  </div>
  <div class="quiz-q">
    <p>SDIT Al-Hikmah berada di daerah terpencil dengan akses internet yang sangat terbatas, sehingga guru kesulitan menerapkan pembelajaran berbasis LMS. Berdasarkan solusi pada Bab 1, langkah paling realistis yang bisa diambil sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh rencana digitalisasi karena dianggap mustahil dilakukan di daerah terpencil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjalin kerja sama dengan pihak ketiga (penyedia internet/aplikasi) sembari mempertimbangkan solusi pembelajaran berbasis aplikasi offline sesuai kondisi setempat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksakan penggunaan LMS penuh tanpa mempertimbangkan keterbatasan infrastruktur yang ada</button>
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
<h2 class="reveal">Prinsip-Prinsip Manajemen Sekolah Islam</h2>
<p class="lede reveal">Setelah memahami urgensi transformasi digital, bab ini menyelami apa yang membuat manajemen sekolah Islam berbeda: pengertian dan fungsinya, nilai-nilai Islam yang menjadi pedomannya, prinsip amanah-ihsan-profesionalisme yang menjiwainya, hingga bagaimana semua itu dapat diperkuat lewat pengelolaan berbasis digital.</p>

<div class="card reveal">
  <h4>A. Pengertian Manajemen Sekolah Islam</h4>
  <p>Manajemen sekolah Islam adalah proses perencanaan, pengorganisasian, pelaksanaan, dan pengawasan terhadap berbagai sumber daya sekolah, dengan tujuan mencapai visi dan misi pendidikan yang sejalan dengan ajaran Islam. Prosesnya mencakup pengelolaan tenaga pengajar, kurikulum, fasilitas, hingga hubungan dengan masyarakat dan orang tua siswa, dengan setiap kebijakan yang diambil selalu mencerminkan nilai-nilai Islam. Yang membedakannya dari manajemen sekolah umum adalah integrasi ajaran Islam di semua aspek pengelolaan — dalam kurikulum, misalnya, sekolah Islam menyisipkan pembelajaran Al-Qur'an, Hadis, dan fiqh yang mendalam, sementara hubungan antarindividu di sekolah didasarkan pada nilai saling menghormati, kerja sama, dan empati. Dengan demikian, manajemen sekolah Islam tidak hanya mengejar target akademik, tetapi juga membentuk karakter siswa yang jujur dan berakhlak mulia — menjadikannya lebih holistik dibanding manajemen sekolah pada umumnya.</p>
  <p>Tujuan utama manajemen sekolah Islam adalah membentuk generasi yang cerdas secara intelektual sekaligus memiliki karakter islami yang kuat, mampu mengimbangi tuntutan dunia modern tanpa mengabaikan nilai agama. Untuk mencapainya, manajemen sekolah Islam menjalankan empat fungsi utama: pengelolaan sumber daya manusia (rekrutmen, pelatihan, dan evaluasi kinerja guru serta staf agar memiliki pemahaman agama yang baik sekaligus keterampilan mengajar yang mumpuni), pengelolaan sarana dan prasarana (memastikan gedung dan fasilitas belajar mendukung proses belajar-mengajar sekaligus mencerminkan prinsip Islam seperti kebersihan dan kenyamanan), pengelolaan keuangan (dikelola secara transparan dan sesuai syariat, digunakan efisien untuk kebutuhan pendidikan termasuk membantu siswa kurang mampu), serta hubungan dengan masyarakat dan orang tua siswa (menjalin komunikasi dan kerja sama aktif agar nilai-nilai Islam diterapkan konsisten baik di sekolah maupun di rumah).</p>

  <h4>B. Nilai-Nilai Islam dalam Manajemen</h4>
  <p>Manajemen yang berlandaskan nilai-nilai Islam memberi landasan moral dan spiritual pada setiap kebijakan sekolah, memastikan bahwa keputusan yang diambil tidak semata mengejar hasil akademik, tetapi juga memperhatikan sisi moral dan etika. Setidaknya ada empat nilai inti yang ditekankan: tawhid (keyakinan kepada Allah SWT) yang menuntun setiap keputusan pengelola sekolah untuk senantiasa mengingat tujuan akhir kehidupan, yaitu meraih rida Allah, bukan sekadar pertimbangan duniawi; adil, yaitu memberikan hak kepada setiap individu — siswa, guru, orang tua, staf — sesuai porsinya tanpa diskriminasi, termasuk kesempatan yang sama untuk berkembang; ikhlas, yaitu mengelola sekolah dengan niat tulus memberi manfaat bagi umat, bangsa, dan agama, tanpa pamrih pribadi; serta tanggung jawab, yaitu menjalankan tugas dan kewajiban — baik akademik maupun moral — dengan sepenuh hati oleh setiap pihak yang terlibat dalam pengelolaan sekolah.</p>
  <p>Nilai-nilai ini kemudian diwujudkan lewat empat langkah konkret dalam kebijakan dan praktik manajerial sehari-hari. Pertama, pengembangan kurikulum berbasis Islam yang mengintegrasikan pembelajaran agama mendalam (Al-Qur'an, Hadis, fiqh, akhlak) dengan ilmu pengetahuan umum. Kedua, tata kelola sekolah yang transparan dan akuntabel, di mana setiap kebijakan — mulai dari keuangan hingga sumber daya manusia — diumumkan dan dipertanggungjawabkan kepada seluruh pihak terkait, sehingga membangun kepercayaan bersama. Ketiga, evaluasi yang berbasis akhlak dan prestasi, yang tidak hanya menilai capaian akademik lewat ujian dan tes, tetapi juga sikap dan perilaku siswa lewat pengamatan, wawancara, dan refleksi diri. Keempat, pelatihan rutin bagi guru dan staf agar mereka memiliki pemahaman kuat tentang prinsip-prinsip Islam sekaligus mampu menanamkannya kepada siswa secara konsisten.</p>

  <h4>C. Prinsip Amanah, Ihsan, dan Profesionalisme</h4>
  <p>Tiga prinsip dasar menjadi pedoman penting dalam mengelola sekolah Islam. Amanah adalah tanggung jawab menjaga kepercayaan dan melaksanakan tugas dengan jujur serta penuh integritas — dalam manajemen sekolah, ini berarti pengelola harus bertanggung jawab atas setiap keputusan dan sumber daya yang dikelola (dana, fasilitas, sumber daya manusia), bekerja dengan transparansi, tidak menyalahgunakan wewenang, dan selalu menjaga kepercayaan yang diberikan orang tua siswa serta masyarakat. Secara konkret, amanah menuntut dana sekolah digunakan sebaik-baiknya untuk kepentingan bersama (bukan pribadi), kebijakan yang diambil mempertimbangkan kepentingan siswa dan masyarakat secara jangka panjang, serta lingkungan belajar yang aman dan nyaman benar-benar terjamin bagi setiap siswa.</p>
  <p>Ihsan adalah melaksanakan setiap tugas dengan sebaik-baiknya, dilandasi niat meraih rida Allah SWT — bukan sekadar memenuhi standar minimal, melainkan terus-menerus memberikan yang terbaik bagi siswa, rekan kerja, dan sekolah secara keseluruhan, sehingga budaya kerja yang terbentuk adalah budaya perbaikan berkelanjutan, bukan sekadar rutinitas. Prinsip ini berjalan beriringan dengan profesionalisme, yaitu kompetensi dan kesungguhan dalam menjalankan tugas sesuai standar keahlian masing-masing — guru dan staf dituntut terus mengembangkan kemampuan lewat pelatihan berkelanjutan, disiplin dalam menjalankan tanggung jawab, serta menjunjung etika kerja yang tinggi. Ketika amanah menjaga integritas, ihsan mendorong kualitas, dan profesionalisme memastikan kompetensi, ketiganya bersama-sama membentuk fondasi pengelolaan sekolah Islam yang kuat, dapat dipercaya, sekaligus unggul secara mutu.</p>

  <h4>D. Manajemen Sekolah Islam yang Berbasis Digital</h4>
  <p>Manajemen sekolah berbasis digital adalah penerapan teknologi informasi untuk mengelola berbagai aspek operasional sekolah — data siswa, keuangan, absensi, hingga jadwal pembelajaran — secara lebih terstruktur dan mudah diakses. Sekolah Islam, yang mengemban misi ganda (akademik dan pembinaan karakter/iman), dapat memanfaatkan teknologi ini untuk menyampaikan nilai-nilai keislaman secara lebih efektif, misalnya lewat pembelajaran jarak jauh, materi dakwah digital, atau pemantauan perkembangan spiritual dan akademik siswa yang lebih mudah. Manfaatnya mencakup tiga hal utama: efisiensi administrasi (absensi dan pembayaran sekolah yang tadinya manual kini dapat dilakukan online, menghemat waktu dan tenaga staf), pemantauan dan evaluasi yang lebih cepat (guru dapat langsung mengakses hasil ujian dan memberi umpan balik tepat waktu), serta peningkatan keterlibatan orang tua (lewat aplikasi yang memungkinkan mereka memantau nilai, kehadiran, dan berkomunikasi langsung dengan guru).</p>
  <p>Ada tiga jenis teknologi utama yang lazim diterapkan: Sistem Informasi Manajemen Sekolah (SIMS) untuk mengelola data siswa, guru, dan operasional secara terintegrasi; Learning Management System (LMS) untuk mengelola pembelajaran online, mulai dari materi ajar hingga ujian; serta aplikasi komunikasi seperti WhatsApp dan email untuk memudahkan koordinasi antara sekolah, guru, siswa, dan orang tua. Penerapannya tentu tidak lepas dari tantangan — keterbatasan infrastruktur teknologi (perangkat dan internet yang belum memadai), ketimpangan digitalisasi (tidak semua guru, staf, dan siswa punya kemampuan setara), serta resistensi terhadap perubahan (kenyamanan dengan cara tradisional). Solusinya dapat dijalankan lewat tiga langkah: pelatihan dan peningkatan keterampilan digital secara rutin bagi guru dan staf, kerja sama dengan pihak ketiga (perusahaan teknologi atau lembaga pendukung) untuk memperoleh perangkat dan dukungan teknis, serta penerapan bertahap — memulai dari sistem sederhana seperti absensi digital sebelum melangkah ke SIMS atau LMS yang lebih kompleks, sesuai kesiapan sekolah masing-masing.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga prinsip yang dibahas di bab ini (amanah, ihsan, profesionalisme), prinsip mana yang menurut Anda paling perlu diperkuat dalam pengelolaan sekolah Anda saat ini — dan langkah konkret apa yang bisa mulai dijalankan untuk menguatkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa yang membedakan manajemen sekolah Islam dari manajemen sekolah umum secara paling mendasar?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Integrasi ajaran Islam di semua aspek manajemen, termasuk kurikulum, hubungan antarindividu, dan pembinaan karakter, tidak hanya fokus pada capaian akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Manajemen sekolah Islam sama sekali tidak memerlukan perencanaan dan pengorganisasian seperti sekolah umum</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Manajemen sekolah Islam hanya berlaku untuk pengelolaan keuangan semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah menggunakan dana BOS untuk keperluan pribadi tanpa sepengetahuan yayasan, meskipun laporan yang ia buat terlihat rapi di atas kertas. Berdasarkan Bab 2, prinsip apa yang paling jelas dilanggar dalam kasus ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Profesionalisme, karena laporannya tidak rapi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Amanah, karena menyalahgunakan kepercayaan dan sumber daya yang seharusnya dikelola untuk kepentingan bersama, bukan pribadi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ikhlas, karena terlalu banyak bekerja tanpa pamrih</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam ingin mulai menerapkan manajemen berbasis digital, tetapi anggaran terbatas dan sebagian guru belum terbiasa dengan teknologi. Berdasarkan Bab 2, strategi penerapan yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menerapkan SIMS dan LMS secara penuh dalam satu semester tanpa pelatihan tambahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan teknologi secara bertahap dimulai dari sistem sederhana seperti absensi digital, disertai pelatihan rutin dan kerja sama dengan pihak ketiga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh rencana digitalisasi tanpa batas waktu karena dianggap terlalu berisiko</button>
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
<h2 class="reveal">Perumusan Visi dan Misi Sekolah Islam</h2>
<p class="lede reveal">Visi dan misi adalah fondasi arah sebuah sekolah Islam — bab ini membahas apa yang membedakan keduanya, bagaimana proses merumuskannya secara relevan dan partisipatif, hingga bagaimana teknologi digital dapat mempermudah setiap tahap perumusan tersebut.</p>

<div class="card reveal">
  <h4>A. Pengertian Visi dan Misi</h4>
  <p>Visi adalah gambaran masa depan yang ingin dicapai sebuah sekolah — arah dan tujuan jangka panjang yang menjadi pedoman seluruh aktivitas sekolah, bukan sekadar harapan melainkan cita-cita yang jelas dan terarah. Pada sekolah Islam, visi tidak hanya berfokus pada capaian akademik, tetapi juga pembentukan karakter siswa sesuai ajaran Islam, misalnya "Mewujudkan generasi yang cerdas, berakhlak mulia, dan siap berkontribusi bagi masyarakat berdasarkan nilai-nilai Islam." Misi, di sisi lain, adalah langkah-langkah konkret untuk mencapai visi tersebut — jika visi adalah tujuan jangka panjang, misi adalah cara mencapainya, mencakup aspek pendidikan akademik, pembinaan akhlak, dan pengembangan potensi siswa, misalnya "Mengembangkan kurikulum yang seimbang antara ilmu pengetahuan dan nilai-nilai Islam."</p>
  <p>Perbedaan keduanya cukup jelas: visi bersifat umum dan menggambarkan tujuan akhir jangka panjang, sementara misi berfokus pada langkah-langkah terperinci dan terukur untuk mencapainya — visi adalah arah yang ingin ditempuh, misi adalah cara sampai ke sana. Keduanya saling terkait erat dalam pengelolaan sekolah: sekolah dengan visi-misi yang jelas akan lebih mudah merancang program dan kebijakan yang selaras, karena semua keputusan manajerial — baik pendidikan maupun administratif — mengacu pada keduanya. Misalnya, jika visi sekolah adalah menghasilkan lulusan cerdas sekaligus berakhlak mulia, maka misinya bisa mencakup mengintegrasikan nilai-nilai Islami dalam setiap mata pelajaran dan menyediakan pelatihan karakter, sehingga seluruh kegiatan sekolah — dari pengajaran hingga pengelolaan sumber daya — bergerak selaras menuju tujuan yang sama.</p>

  <h4>B. Proses Merumuskan Visi dan Misi yang Relevan</h4>
  <p>Merumuskan visi yang tepat diawali dengan empat langkah: mengidentifikasi tujuan pendidikan (nilai-nilai yang ingin ditanamkan, tidak hanya capaian akademik tetapi juga pembentukan karakter islami), menganalisis kebutuhan sekolah (sumber daya manusia, fasilitas, dan kebutuhan siswa yang ada, agar visi tetap realistis), menyesuaikan dengan nilai-nilai Islam (menekankan keimanan, ketakwaan, dan akhlak mulia), serta membuat pernyataan visi yang inspiratif dan jelas — singkat, mudah dipahami seluruh warga sekolah, dan mampu memotivasi komitmen bersama. Setelah visi dirumuskan, misi disusun lewat tiga langkah: menentukan fokus utama (pengajaran agama, pembinaan karakter, pengembangan intelektual), mengidentifikasi langkah-langkah konkret yang terukur (penyusunan kurikulum berbasis Islam, pelatihan guru, kegiatan ekstrakurikuler pendukung karakter), serta melibatkan stakeholder (guru, orang tua, perwakilan masyarakat) agar misi yang dihasilkan komprehensif dan memperkuat komitmen bersama.</p>
  <p>Visi dan misi yang telah dirumuskan tidak boleh dibiarkan statis — keduanya perlu dievaluasi secara berkala untuk memastikan tetap relevan dengan perkembangan zaman, tantangan, dan kebutuhan siswa, dengan melibatkan masukan dari guru, orang tua, dan pihak terkait lainnya sebagai bahan penyempurnaan. Langkah terakhir yang tak kalah penting adalah mengomunikasikan visi dan misi kepada seluruh pihak — siswa, guru, orang tua, dan masyarakat — lewat pertemuan umum, poster di lingkungan sekolah, maupun situs web dan media sosial sekolah. Komunikasi yang jelas dan terbuka akan membuat semua pihak lebih mudah berkomitmen dan berpartisipasi, menciptakan suasana yang harmonis dan selaras di mana seluruh warga sekolah bergerak bersama menuju tujuan yang sama.</p>

  <h4>C. Panduan Digitalisasi dalam Merumuskan Visi dan Misi</h4>
  <p>Teknologi dapat mempermudah setiap tahap perumusan visi-misi. Pada tahap pengumpulan data, survei online lewat Google Forms atau SurveyMonkey memungkinkan sekolah menjaring pendapat guru, orang tua, siswa, dan masyarakat secara efisien dan terorganisir, sementara analisis data digital dengan perangkat seperti Excel, SPSS, atau alat berbasis AI membantu mengolah hasil survei menjadi wawasan yang mendalam tentang harapan stakeholder. Pada tahap penyusunan, tools kolaboratif seperti Google Docs, Microsoft Teams, atau Notion memungkinkan berbagai pihak menyunting dan mendiskusikan rumusan visi-misi secara bersamaan meski berada di lokasi berbeda, sementara sesi diskusi dan brainstorming virtual lewat Zoom atau Google Meet memberi ruang bagi guru, pengurus yayasan, orang tua, bahkan siswa untuk berbagi perspektif secara inklusif.</p>
  <p>Agar visi-misi tetap sesuai perkembangan zaman, sekolah juga dapat menerapkan analitik untuk menilai data siswa (nilai akademik, hasil ujian, keterlibatan ekstrakurikuler) sekaligus memantau perubahan sosial dan teknologi yang memengaruhi arah pendidikan di masa depan, misalnya kebutuhan keterampilan abad ke-21. Setelah dirumuskan, visi-misi perlu disosialisasikan lewat website sekolah sebagai pusat informasi resmi dan media sosial seperti Instagram atau Facebook untuk menjangkau audiens lebih luas termasuk calon siswa. Terakhir, monitoring dan evaluasi berbasis digital — lewat platform evaluasi online dan umpan balik (feedback) dari siswa, orang tua, dan guru — memungkinkan sekolah terus mengukur sejauh mana visi-misi benar-benar diterapkan, sehingga perumusannya bukan proses satu kali jadi, melainkan siklus yang terus disempurnakan seiring waktu.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah visi dan misi di sekolah Anda saat ini sudah dirumuskan lewat proses partisipatif yang melibatkan guru, orang tua, dan siswa seperti dibahas di bab ini — atau masih sekadar teks formal yang jarang dikomunikasikan ulang? Langkah apa yang bisa mulai diambil untuk menghidupkannya kembali?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa perbedaan mendasar antara visi dan misi sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Visi adalah gambaran tujuan jangka panjang yang bersifat umum, sedangkan misi adalah langkah-langkah konkret dan terukur untuk mencapainya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Visi dan misi adalah dua istilah yang maknanya persis sama dan bisa saling menggantikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Misi hanya dibuat oleh kepala sekolah tanpa perlu mengacu pada visi sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan merumuskan visi-misi sekolah hanya lewat rapat tertutup pengurus, tanpa melibatkan guru maupun orang tua, lalu langsung mencetaknya di banner sekolah. Berdasarkan Bab 3, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena visi-misi cukup ditentukan oleh pengurus yayasan saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Visi-misi berisiko kurang mencerminkan kebutuhan nyata seluruh warga sekolah dan lemah dari sisi komitmen bersama, karena proses perumusannya tidak melibatkan stakeholder seperti guru dan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Visi-misi otomatis menjadi lebih inspiratif karena dirumuskan secara tertutup dan cepat</button>
  </div>
  <div class="quiz-q">
    <p>SMP Islam Nurul Hikmah ingin merumuskan ulang visi-misinya agar lebih relevan dengan kebutuhan zaman, namun kesulitan menjangkau pendapat dari ratusan orang tua siswa yang tersebar di berbagai lokasi. Berdasarkan Bab 3, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan rencana perumusan ulang karena dianggap terlalu merepotkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan survei online untuk menjaring pendapat secara efisien dari berbagai pihak, lalu menganalisis hasilnya secara digital sebagai dasar perumusan visi-misi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya menanyakan pendapat guru yang kebetulan hadir di sekolah pada hari itu</button>
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
<h2 class="reveal">Penyusunan Rencana Strategis (Renstra)</h2>
<p class="lede reveal">Visi dan misi yang telah dirumuskan perlu diterjemahkan menjadi peta jalan yang konkret — bab ini membahas apa itu Rencana Strategis (Renstra), tahapan menyusunnya secara komprehensif, contoh penerapannya di berbagai bidang sekolah, serta bagaimana teknologi dapat memperkuat penyusunan dan pemantauannya.</p>

<div class="card reveal">
  <h4>A. Definisi dan Tujuan Rencana Strategis</h4>
  <p>Rencana Strategis (Renstra) adalah dokumen perencanaan jangka panjang yang memuat visi, misi, tujuan, dan strategi utama sebuah organisasi, termasuk sekolah Islam, untuk menjawab pertanyaan mendasar: "Ke mana sekolah ingin menuju dalam tiga hingga lima tahun mendatang, dan bagaimana caranya?" Renstra bukan sekadar dokumen formal, melainkan alat pengelolaan yang berfungsi mengarahkan perencanaan (memberi pedoman jelas dalam merumuskan kebijakan, mulai dari kurikulum hingga fasilitas, agar pengelolaan sekolah tidak reaktif dan tidak terkoordinasi), mencapai tujuan jangka panjang (menopang visi-misi lewat langkah konkret seperti peningkatan kompetensi guru dan integrasi teknologi), mengoptimalkan sumber daya (membantu sekolah menentukan prioritas di tengah keterbatasan dana, waktu, dan tenaga), serta meningkatkan akuntabilitas dan transparansi (menunjukkan kepada siswa, orang tua, dan masyarakat sejauh mana target yang ditetapkan telah dicapai).</p>
  <p>Di era digital, penyusunan Renstra menjadi semakin penting karena lingkungan pendidikan terus berkembang cepat — sekolah Islam tidak hanya menghadapi tantangan pendidikan, tetapi juga harus beradaptasi dengan teknologi dan dinamika sosial. Renstra yang baik perlu memasukkan langkah-langkah seperti mengintegrasikan platform digital dalam pembelajaran, melibatkan stakeholder lewat survei online, dan memanfaatkan data analitik untuk merancang kebijakan berbasis bukti, sehingga sekolah tidak hanya merespons perubahan tetapi juga mengambil peran aktif dalam berinovasi. Renstra yang terukur, realistis, dan berbasis kebutuhan stakeholder akan menjadi pondasi kuat bagi sekolah Islam untuk melangkah maju meraih visinya.</p>

  <h4>B. Tahapan Menyusun Renstra yang Komprehensif</h4>
  <p>Penyusunan Renstra yang matang diawali dengan analisis situasi sekolah secara menyeluruh — memetakan kekuatan, kelemahan, peluang, dan ancaman (SWOT) yang dihadapi — dilanjutkan dengan penetapan tujuan dan sasaran strategis yang diturunkan langsung dari visi-misi sekolah. Barulah kemudian dirumuskan strategi utama, yaitu langkah-langkah besar seperti pengembangan kurikulum berbasis digital, peningkatan pelatihan guru, atau modernisasi sarana-prasarana, yang kemudian dirinci lagi menjadi langkah taktis yang lebih spesifik — misalnya untuk strategi kurikulum digital, langkah taktisnya bisa berupa pembelian perangkat lunak pembelajaran, penyelenggaraan workshop guru, dan pelibatan siswa dalam uji coba kurikulum baru. Setiap langkah taktis ini wajib disertai indikator keberhasilan yang jelas dan terukur, misalnya jumlah guru yang benar-benar menggunakan perangkat digital dalam pembelajaran.</p>
  <p>Tahap berikutnya adalah menyusun rencana aksi — langkah spesifik dengan penjadwalan dan prioritas yang jelas — sekaligus mengalokasikan sumber daya yang dibutuhkan, mencakup anggaran (perencanaan biaya tiap langkah aksi), fasilitas (pengadaan perangkat teknologi, buku, atau ruang kelas tambahan), dan SDM (penugasan guru atau staf yang kompeten). Renstra kemudian perlu dievaluasi secara berkala, misalnya tiap enam bulan atau setahun sekali, untuk menilai apakah pelaksanaannya berjalan sesuai rencana, dan disempurnakan bila ada perubahan kondisi internal maupun eksternal — misalnya kebijakan pendidikan baru — agar Renstra tetap menjadi panduan strategis yang relevan menghadapi tantangan zaman.</p>

  <h4>C. Contoh Renstra di Sekolah Islam</h4>
  <p>Renstra dapat diterapkan di berbagai bidang sekolah dengan penyesuaian sesuai kebutuhan masing-masing. Dalam pengembangan kurikulum, Renstra dapat mencakup kurikulum berbasis karakter Islam dan teknologi (mengintegrasikan nilai Islam seperti adab bermedia sosial ke dalam pembelajaran sekaligus memanfaatkan teknologi sebagai alat bantu), penambahan mata pelajaran relevan seperti literasi digital/coding dan kewirausahaan berbasis syariah, serta metode pembelajaran interaktif lewat platform e-learning, kuis digital, dan pembelajaran berbasis proyek. Dalam pengembangan sumber daya manusia, Renstra mencakup pelatihan rutin bagi guru dan staf (penguasaan LMS, metode pengajaran interaktif), peningkatan kesejahteraan guru (insentif bagi guru yang berhasil menerapkan teknologi, kesempatan melanjutkan pendidikan atau sertifikasi), serta rekrutmen berbasis kompetensi yang mempertimbangkan keilmuan Islam sekaligus penguasaan teknologi.</p>
  <p>Dalam peningkatan sarana dan prasarana, Renstra mencakup pengadaan peralatan digital (proyektor, komputer, laboratorium komputer), perpustakaan digital yang memudahkan akses buku dan jurnal kapan saja, serta peningkatan infrastruktur fisik seperti renovasi ruang kelas dan pembangunan fasilitas tambahan. Dalam pengelolaan keuangan, Renstra menekankan transparansi dan efisiensi (pelaporan anggaran berkala kepada yayasan atau komite sekolah), alokasi anggaran berbasis prioritas (alat pembelajaran, pelatihan guru, perbaikan fasilitas), serta penggalangan dana dan kemitraan lewat donatur individu, lembaga zakat, maupun kerja sama dengan dunia usaha — semuanya dirancang agar program strategis sekolah dapat berjalan berkelanjutan tanpa terkendala keterbatasan dana.</p>

  <h4>D. Integrasi Teknologi dalam Penyusunan dan Monitoring Renstra</h4>
  <p>Teknologi dapat memperkuat penyusunan dan pemantauan Renstra lewat beberapa cara. Sistem Informasi Manajemen Sekolah (SIMS) mengintegrasikan data keuangan, akademik, dan siswa dalam satu platform, memungkinkan sekolah memantau perkembangan siswa secara individual sekaligus memonitor pelaksanaan Renstra secara real-time. Monitoring berbasis digital juga dapat memanfaatkan aplikasi manajemen proyek seperti Trello atau Asana untuk memecah setiap program Renstra menjadi tugas-tugas yang jelas dan terpantau, dilengkapi dashboard digital yang menampilkan persentase pencapaian target secara otomatis. Aplikasi pengelolaan keuangan berbasis digital pun membantu melacak pengeluaran dan pendapatan secara otomatis serta mengelompokkan anggaran ke tiap program, sehingga laporan keuangan kepada yayasan atau orang tua menjadi lebih transparan dan tepercaya.</p>
  <p>Selain itu, e-reporting dan e-documentation lewat platform seperti Google Workspace atau Microsoft Office 365 membuat penyusunan laporan lebih cepat dan akurat, sekaligus meminimalkan risiko kehilangan dokumen karena tersimpan aman secara digital dan dapat diakses kapan saja oleh pihak berwenang. Pada level yang lebih canggih, kecerdasan buatan (AI) dan Big Data membuka peluang analisis data yang kompleks — misalnya tren pencapaian siswa per mata pelajaran atau preferensi metode pembelajaran — sekaligus analitik prediktif untuk memproyeksikan kebutuhan sarana-prasarana berdasarkan pertumbuhan jumlah siswa maupun merancang kebijakan berdasarkan tren global pendidikan. Dengan dukungan teknologi ini, sekolah Islam dapat mengambil keputusan strategis yang lebih tepat, baik untuk kebutuhan jangka pendek maupun jangka panjang.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda sudah memiliki Renstra tertulis dengan indikator keberhasilan yang jelas untuk setiap langkah taktisnya, atau masih berjalan tanpa peta jalan jangka panjang yang terukur? Bidang mana (kurikulum, SDM, sarana-prasarana, atau keuangan) yang paling mendesak untuk mulai disusun Renstra-nya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, Rencana Strategis (Renstra) pada dasarnya menjawab pertanyaan mendasar tentang...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Ke mana sekolah ingin menuju dalam 3-5 tahun mendatang dan bagaimana caranya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Berapa jumlah siswa yang harus lulus ujian setiap tahunnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siapa saja guru yang harus diberhentikan dari sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menetapkan strategi utama "pengembangan kurikulum berbasis digital" dalam Renstra-nya, tetapi tidak pernah merinci langkah taktis maupun indikator keberhasilannya. Berdasarkan Bab 4, apa dampak paling mungkin dari kekurangan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak berdampak apa pun karena strategi utama saja sudah cukup tanpa perlu dirinci lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pelaksanaan strategi menjadi sulit dipantau dan diukur keberhasilannya, karena tidak ada langkah konkret maupun tolok ukur yang jelas untuk dievaluasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah otomatis akan mencapai tujuannya tanpa perlu evaluasi berkala</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan sebuah sekolah Islam ingin memantau pelaksanaan Renstra secara real-time tanpa harus menunggu laporan manual yang sering terlambat dan rawan kesalahan. Berdasarkan Bab 4, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap menggunakan laporan kertas manual karena dianggap lebih akurat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan SIMS dan dashboard digital untuk memantau pencapaian target program secara otomatis dan real-time</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan seluruh proses monitoring karena dianggap tidak penting</button>
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
<h2 class="reveal">Manajemen Kurikulum</h2>
<p class="lede reveal">Kurikulum adalah jantung proses pendidikan — bab ini membahas prinsip-prinsip manajemen kurikulum di sekolah Islam, bagaimana menyusun kurikulum berbasis karakter dan digital, cara mengevaluasi serta mengembangkannya secara berkelanjutan, hingga bagaimana kecerdasan buatan (AI) dapat memperkuat pengelolaannya.</p>

<div class="card reveal">
  <h4>A. Prinsip-Prinsip Manajemen Kurikulum di Sekolah Islam</h4>
  <p>Manajemen kurikulum adalah proses perencanaan, pelaksanaan, evaluasi, dan pengembangan kurikulum untuk mencapai tujuan pendidikan. Di sekolah Islam, manajemen kurikulum menitikberatkan pada dua hal: transfer ilmu (memberi pengetahuan sesuai kebutuhan zaman) dan pembentukan akhlak (menanamkan nilai-nilai Islam dalam setiap aktivitas pembelajaran) — misalnya pada mata pelajaran sains, guru dapat menambahkan diskusi tentang kebesaran Allah lewat keajaiban ciptaan-Nya seperti sistem tata surya, sehingga siswa memahami ilmu pengetahuan sekaligus memperkuat iman. Untuk mewujudkan hal ini, ada empat prinsip utama yang perlu dipegang: integrasi ilmu dan akhlak (setiap mata pelajaran tidak hanya mengasah kecerdasan intelektual tetapi juga membangun karakter, misalnya nilai kejujuran disisipkan dalam pelajaran matematika), keterkaitan dengan kebutuhan masyarakat (kurikulum mencakup literasi digital dan keterampilan kewirausahaan berbasis syariah agar relevan dengan masa depan siswa), fleksibilitas dan inovasi (kurikulum dapat menyesuaikan diri lewat metode seperti pembelajaran berbasis proyek atau adaptasi pembelajaran online/hybrid), serta keterlibatan semua pihak (guru, siswa, orang tua, dan yayasan dilibatkan lewat forum diskusi agar kurikulum benar-benar sesuai kebutuhan bersama).</p>
  <p>Kurikulum sekolah Islam juga harus berlandaskan nilai-nilai Islam secara konsisten — kejujuran, disiplin, kerja keras, dan tanggung jawab menjadi inti dari setiap pelajaran dan aktivitas, misalnya lewat pelajaran sejarah yang mengambil hikmah dari kisah para nabi, atau mata pelajaran seni yang mengajarkan kaligrafi dan nasyid sesuai syariat. Nilai-nilai ini tidak berhenti di ruang kelas, tetapi juga tercermin lewat aktivitas ekstrakurikuler dan pelatihan khusus bagi guru agar mampu mengimplementasikan kurikulum berbasis karakter, disertai keterlibatan aktif orang tua di rumah — sebab pembinaan karakter perlu dilanjutkan secara konsisten di luar jam sekolah, tidak berhenti begitu siswa pulang ke rumah.</p>

  <h4>B. Penyusunan Kurikulum Berbasis Karakter dan Digital</h4>
  <p>Di era digital, sekolah Islam perlu merancang kurikulum yang memanfaatkan teknologi sebagai alat pembelajaran sekaligus memperkuat kompetensi digital siswa. Ini dapat dilakukan lewat integrasi teknologi dalam pembelajaran — perangkat lunak pendidikan untuk membuat pembelajaran lebih interaktif, platform daring untuk memperluas akses materi, atau media sosial untuk mendukung kolaborasi antarsiswa — serta model blended learning yang menggabungkan pembelajaran tatap muka dan daring, memberi siswa fleksibilitas belajar sekaligus melatih keterampilan digital yang dibutuhkan di masa depan.</p>
  <p>Agar kurikulum digital berjalan efektif, ada tiga langkah penting: menyusun tujuan pembelajaran berbasis teknologi (misalnya kemampuan mencari informasi secara kritis di internet atau berkolaborasi lewat platform daring), memilih alat dan media pembelajaran yang tepat sesuai kebutuhan siswa (LMS seperti Google Classroom, aplikasi latihan soal interaktif, video pembelajaran), serta melakukan evaluasi dan pengembangan berkala terhadap efektivitas kurikulum digital — memperbarui materi atau mengganti platform yang kurang efektif agar kurikulum tetap relevan dengan perkembangan zaman.</p>

  <h4>C. Evaluasi dan Pengembangan Kurikulum</h4>
  <p>Evaluasi kurikulum adalah langkah krusial untuk memastikan kurikulum mampu mencapai tujuan pendidikan yang ditetapkan, mulai dari penguasaan materi hingga pembentukan karakter siswa. Tanpa evaluasi yang baik, sekolah akan kesulitan memastikan apakah metode yang digunakan benar-benar efektif. Ada tiga metode evaluasi yang saling melengkapi: evaluasi proses (menilai bagaimana guru menyampaikan materi dan bagaimana siswa memahami serta mempraktikkannya di kelas sehari-hari), evaluasi hasil (mengukur sejauh mana tujuan pembelajaran tercapai lewat hasil ujian, penilaian tugas, dan observasi perkembangan siswa), serta evaluasi berbasis data (memanfaatkan data yang lebih luas — hasil penilaian keseluruhan, umpan balik guru dan orang tua — untuk mengambil keputusan yang lebih objektif).</p>
  <p>Berdasarkan hasil evaluasi, kurikulum kemudian dikembangkan lewat revisi dan penyesuaian (mengganti metode yang kurang efektif, menambahkan materi yang lebih sesuai kebutuhan siswa di era digital) serta pembaruan materi (mengintegrasikan literasi digital dan perkembangan sosial-budaya terbaru tanpa mengabaikan nilai karakter sebagai landasan utama). Pengembangan kurikulum bukan tugas sekali jadi, melainkan proses berkelanjutan yang harus terus dijalankan seiring munculnya teknologi dan kebutuhan baru, dengan melibatkan seluruh stakeholder — guru sebagai pelaksana yang memberi masukan dari pengalaman kelas, siswa lewat umpan balik tentang cara belajar mereka, orang tua sebagai pendukung di rumah, serta yayasan yang memastikan kurikulum tetap selaras dengan visi-misi dan karakter islami sekolah.</p>

  <h4>D. Pemanfaatan AI dalam Pengelolaan Kurikulum</h4>
  <p>Kecerdasan buatan (AI) kini berperan besar dalam menciptakan pengalaman belajar yang lebih personal dan adaptif. AI dapat menganalisis data siswa secara mendalam — hasil penilaian, pola kehadiran, tingkat partisipasi, dan gaya belajar — untuk mengidentifikasi kekuatan dan kelemahan tiap siswa, misalnya memberi laporan kepada guru bila seorang siswa kesulitan memahami materi tertentu, atau merekomendasikan materi yang lebih menantang bagi siswa yang unggul di bidang tertentu. Berdasarkan data ini, AI juga dapat membantu menyusun kurikulum yang lebih personal — bila seorang siswa lebih menyukai belajar lewat video dibanding teks, AI dapat menyusun materi berbentuk video yang relevan, membuat pembelajaran lebih efektif dan menyenangkan.</p>
  <p>Dalam hal evaluasi dan pengembangan kurikulum, AI dapat memantau perkembangan siswa secara real-time dan memberi sinyal kepada guru untuk segera melakukan intervensi bila ada siswa yang kesulitan, tanpa harus menunggu hasil evaluasi formal, sekaligus memberi rekomendasi pembaruan kurikulum berdasarkan pola kesulitan yang terdeteksi di seluruh kelas. AI juga mendukung platform pembelajaran modern lewat dua cara: platform interaktif yang memberi kuis dan umpan balik sesuai kemampuan siswa (menawarkan materi lebih menantang bila siswa menjawab benar, atau materi lebih mudah bila siswa kesulitan), serta sistem pembelajaran adaptif yang menyesuaikan tingkat kesulitan dan kecepatan belajar tiap siswa. Meski demikian, AI tetap berperan sebagai alat bantu bagi guru, bukan pengganti peran mereka dalam mendidik dan membina karakter siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat prinsip manajemen kurikulum (integrasi ilmu-akhlak, keterkaitan kebutuhan masyarakat, fleksibilitas-inovasi, keterlibatan semua pihak) yang dibahas di bab ini, prinsip mana yang paling lemah diterapkan di kurikulum sekolah Anda saat ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, manajemen kurikulum di sekolah Islam menitikberatkan pada dua hal utama, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Transfer ilmu dan pembentukan akhlak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pengadaan gedung dan seragam sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penjualan buku dan alat tulis sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru matematika hanya fokus mengajarkan rumus dan latihan soal tanpa pernah menyisipkan nilai karakter apa pun dalam pembelajarannya. Berdasarkan prinsip manajemen kurikulum pada Bab 5, prinsip apa yang paling terabaikan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Fleksibilitas dan inovasi metode pengajaran semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Integrasi ilmu dan akhlak, karena mata pelajaran seharusnya tidak hanya mengasah kecerdasan intelektual tetapi juga membangun karakter siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keterkaitan dengan kebutuhan masyarakat semata</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menemukan lewat evaluasi hasil bahwa banyak siswa kesulitan memahami satu topik tertentu di semester ini. Berdasarkan Bab 5, langkah paling tepat yang seharusnya diambil sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan hasil evaluasi karena dianggap tidak penting bagi pengembangan kurikulum</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merevisi metode pengajaran topik tersebut atau menambahkan materi pendukung yang lebih sesuai, sebagai bagian dari pengembangan kurikulum berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus topik tersebut secara permanen dari kurikulum tanpa evaluasi lebih lanjut</button>
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
<h2 class="reveal">Manajemen Kesiswaan</h2>
<p class="lede reveal">Siswa adalah inti dari seluruh proses pendidikan — bab ini membahas bagaimana administrasi kesiswaan dikelola secara rapi, bagaimana karakter siswa dibina secara sungguh-sungguh, serta bagaimana teknologi digital dapat memperkuat pengelolaan berbagai kegiatan siswa di sekolah Islam.</p>

<div class="card reveal">
  <h4>A. Pengelolaan Administrasi Kesiswaan</h4>
  <p>Administrasi kesiswaan adalah proses pengelolaan data dan informasi siswa secara sistematis, mulai dari pendaftaran hingga kelulusan, yang menjadi dasar bagi banyak keputusan penting di sekolah. Pengelolaan ini memiliki tiga tujuan utama: menyusun data yang akurat dan terkini (dasar pengambilan keputusan yang tepat, baik untuk keperluan akademik, bimbingan siswa, maupun evaluasi sekolah), memastikan kelancaran alur informasi (membantu guru, orang tua, dan pengurus yayasan memperoleh informasi terkait siswa secara mudah dan cepat), serta mendukung evaluasi dan pengembangan siswa (data administrasi memberi gambaran lengkap tentang prestasi akademik dan perkembangan karakter siswa, menjadi dasar arahan yang lebih tepat guna).</p>
  <p>Administrasi kesiswaan mencakup beberapa komponen utama: pendaftaran siswa baru (pengelolaan data seperti nama, alamat, dan latar belakang pendidikan beserta dokumen pendukung), pencatatan data akademik dan kehadiran (nilai, prestasi, serta rekam jejak kehadiran siswa dari waktu ke waktu), hingga pengelolaan mutasi dan kelulusan siswa. Ketika seluruh komponen ini dikelola secara rapi dan terintegrasi, sekolah memiliki fondasi data yang kuat untuk mendukung setiap keputusan strategis terkait kesiswaan, mulai dari penempatan kelas hingga program pembinaan yang paling sesuai bagi tiap siswa.</p>

  <h4>B. Program Pembinaan Karakter Siswa</h4>
  <p>Pembinaan karakter adalah inti dari pendidikan Islam — tidak sekadar mengajarkan ilmu pengetahuan, tetapi membentuk akhlak siswa agar menjadi pribadi yang bertanggung jawab, berintegritas, dan bermanfaat bagi orang lain. Nilai-nilai seperti kejujuran, kedisiplinan, tanggung jawab, dan empati tidak hanya diajarkan secara teoretis, tetapi diintegrasikan dalam keseharian siswa — lewat pembelajaran di kelas, kegiatan ekstrakurikuler, maupun interaksi sosial di sekolah. Program pembinaan karakter memiliki tiga tujuan utama: menumbuhkan nilai-nilai moral dan spiritual yang kuat (membentuk siswa yang cerdas sekaligus berhati baik), membekali siswa dengan sikap positif (misalnya sabar dan tetap berusaha saat menghadapi kegagalan, sesuai ajaran tawakal), serta mengembangkan kecerdasan emosional dan sosial agar siswa mampu membangun hubungan yang harmonis dengan lingkungannya.</p>
  <p>Untuk mencapai tujuan ini, sekolah Islam menjalankan tiga strategi utama: pendekatan melalui teladan (guru dan staf menunjukkan langsung penerapan nilai karakter dalam keseharian, bukan sekadar mengajarkannya secara lisan), pembinaan lewat kegiatan ekstrakurikuler seperti pramuka, organisasi siswa, dan pengabdian masyarakat (melatih kerja sama, kepemimpinan, dan kepedulian sosial), serta pendidikan moral dan agama yang mengangkat kisah-kisah teladan dari Al-Qur'an dan Hadis untuk memperkuat pemahaman siswa. Keberhasilan program ini kemudian diukur lewat observasi dan evaluasi perilaku siswa sehari-hari (kesopanan, kemampuan menyelesaikan konflik) serta umpan balik dari orang tua dan masyarakat — misalnya, siswa yang rajin membantu orang tua di rumah menunjukkan bahwa nilai tanggung jawab yang diajarkan di sekolah benar-benar terinternalisasi dalam kehidupan sehari-hari.</p>

  <h4>C. Pengelolaan Kegiatan Siswa dengan Teknologi Digital</h4>
  <p>Pengelolaan kegiatan siswa tidak terbatas pada pembelajaran di kelas, tetapi juga mencakup kegiatan ekstrakurikuler, sosial, seni, olahraga, dan pengabdian masyarakat yang membentuk siswa menjadi individu yang seimbang secara fisik, sosial, dan mental — memberi ruang bagi mereka belajar berorganisasi, berkomunikasi, bekerja dalam tim, dan menunjukkan kepemimpinan. Teknologi dapat memperkuat pengelolaan ini lewat sistem manajemen kegiatan berbasis digital (mencatat kehadiran dan partisipasi siswa secara real-time, transparan bagi guru maupun orang tua) serta aplikasi khusus ekstrakurikuler yang memuat jadwal, daftar kegiatan, dan pendaftaran daring, sehingga proses administrasi menjadi lebih mudah dan orang tua dapat memantau kegiatan yang diikuti anaknya.</p>
  <p>Teknologi juga membuka peluang pengembangan keterampilan digital siswa lewat kegiatan ekstrakurikuler yang berfokus pada teknologi (coding, desain grafis, video editing) maupun pelatihan dan kursus online yang bisa diakses secara mandiri dan fleksibel di luar jam pelajaran. Untuk komunikasi dan kolaborasi, sekolah dapat memanfaatkan platform pembelajaran daring seperti Google Classroom untuk diskusi dan penyampaian tugas, serta sistem pengumuman digital agar informasi kegiatan seperti lomba atau perubahan jadwal dapat diakses kapan saja oleh siswa dan orang tua. Namun, pemanfaatan teknologi ini harus disertai edukasi keamanan dan etika digital — pedoman menjaga privasi dan kata sandi yang kuat, serta pemahaman tentang bahaya cyberbullying — agar siswa dapat memanfaatkan teknologi secara bijak, aman, dan bertanggung jawab.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga strategi pembinaan karakter (teladan, ekstrakurikuler, pendidikan moral-agama) yang dibahas di bab ini, strategi mana yang paling konsisten dijalankan di sekolah Anda — dan mana yang masih perlu diperkuat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja tiga tujuan utama administrasi kesiswaan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyusun data akurat, memastikan kelancaran alur informasi, dan mendukung evaluasi-pengembangan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meningkatkan jumlah pendaftar siswa baru sebanyak mungkin tanpa memperhatikan kualitas data</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh guru dengan sistem otomatis berbasis komputer</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru rutin mengajarkan nilai kejujuran secara lisan di kelas, tetapi sering terlambat datang mengajar dan pernah ketahuan memanipulasi laporan kehadirannya sendiri. Berdasarkan strategi pembinaan karakter pada Bab 6, apa yang paling bermasalah dari situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada masalah, karena yang penting guru sudah menyampaikan materi kejujuran secara lisan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendekatan melalui teladan gagal dijalankan, karena tindakan guru bertentangan dengan nilai yang diajarkannya secara lisan, sehingga sulit menjadi contoh nyata bagi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut seharusnya berhenti mengajarkan nilai kejujuran sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memudahkan orang tua memantau kegiatan ekstrakurikuler anak mereka tanpa harus datang langsung bertanya ke sekolah setiap saat. Berdasarkan Bab 6, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang siswa mengikuti kegiatan ekstrakurikuler apa pun agar mudah dipantau</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan sistem manajemen kegiatan siswa berbasis digital atau aplikasi ekstrakurikuler yang memuat jadwal dan partisipasi secara transparan dan real-time</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta orang tua menelepon sekolah setiap hari untuk menanyakan perkembangan anaknya</button>
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
<h2 class="reveal">Manajemen Guru dan Tenaga Kependidikan</h2>
<p class="lede reveal">Guru adalah ujung tombak keberhasilan pendidikan — bab ini membahas bagaimana merekrut dan mengembangkan guru secara profesional, bagaimana menilai kinerja mereka secara adil dan bermakna, serta bagaimana platform digital dapat memperkuat proses supervisi dan evaluasi guru di sekolah Islam.</p>

<div class="card reveal">
  <h4>A. Rekrutmen dan Pengembangan Profesional Guru</h4>
  <p>Rekrutmen guru di sekolah Islam bukan sekadar mencari orang yang ahli mengajar, melainkan juga memperhatikan nilai-nilai agama Islam sebagai dasar pembentukan karakter siswa — guru harus mampu menjadi teladan yang baik, tidak hanya dalam menyampaikan materi tetapi juga dalam berperilaku sesuai akhlak Islam, karena perannya sangat besar dalam memengaruhi perkembangan spiritual dan moral siswa. Proses rekrutmen perlu memperhatikan tiga kualifikasi utama: kualifikasi akademik (latar belakang pendidikan yang memadai sesuai bidang yang diajarkan, misalnya pemahaman mendalam ilmu agama bagi calon guru pendidikan agama Islam), pengalaman mengajar (rekam jejak dalam mengelola kelas dan menyampaikan materi secara efektif), serta kompetensi kepribadian dan sosial (kemampuan menjadi teladan dan membangun hubungan yang positif dengan siswa maupun rekan kerja).</p>
  <p>Setelah direkrut, guru perlu terus dikembangkan lewat tiga langkah berkelanjutan: pelatihan dan workshop rutin yang mencakup topik seperti teknologi pembelajaran terbaru, pengelolaan kelas, hingga pendidikan karakter Islam; mentoring dan pembinaan, di mana guru baru mendapat bimbingan langsung dari guru senior dalam mengatasi tantangan kelas seperti disiplin siswa; serta dukungan pendidikan lanjutan, misalnya beasiswa untuk melanjutkan studi ke jenjang magister pendidikan Islam. Dengan program pengembangan profesional yang berkelanjutan, guru tidak hanya semakin kompeten dalam mengajar, tetapi juga semakin mendalam dalam memahami dan menerapkan nilai-nilai Islam, menciptakan lingkungan pendidikan yang berkualitas dan mendukung perkembangan siswa secara holistik.</p>

  <h4>B. Sistem Penilaian Kinerja Guru</h4>
  <p>Penilaian kinerja guru memiliki dua tujuan utama: meningkatkan kualitas pengajaran (mengidentifikasi area yang perlu diperbaiki lewat umpan balik konstruktif) dan mendukung pengembangan karir guru (menjadi dasar bagi kesempatan pelatihan, pendidikan lanjutan, atau jenjang jabatan yang lebih tinggi). Penilaian ini dilakukan lewat empat indikator utama: kualitas pengajaran (cara menyampaikan materi dan mengelola kelas), pencapaian akademik siswa yang diajar, kompetensi sosial dan kepribadian (interaksi dengan siswa, orang tua, dan rekan sejawat), serta penerapan nilai Islam dalam pengajaran dan keseharian — termasuk akhlak, kejujuran, kedisiplinan, dan keteladanan yang tidak terbatas pada pelajaran agama semata.</p>
  <p>Untuk mendapatkan gambaran yang komprehensif, penilaian dilakukan lewat empat metode: observasi langsung ke dalam kelas oleh kepala sekolah atau supervisor, penilaian diri (self-assessment) yang mendorong guru merefleksikan kekuatan dan area yang perlu ditingkatkan, umpan balik dari siswa dan orang tua tentang kualitas pengajaran dan hubungan yang dibangun, serta evaluasi oleh rekan sejawat yang mendorong kolaborasi dan berbagi strategi mengajar. Hasil penilaian ini kemudian dimanfaatkan secara positif — merancang pelatihan yang spesifik sesuai kebutuhan tiap guru (misalnya pelatihan teknologi pembelajaran bila diperlukan) serta menyusun rencana pengembangan karir yang jelas, sehingga penilaian kinerja bukan sekadar evaluasi, melainkan kesempatan nyata bagi guru untuk terus berkembang.</p>

  <h4>C. Platform Digital untuk Supervisi dan Evaluasi Guru</h4>
  <p>Platform digital membawa tiga keuntungan utama dalam supervisi guru: aksesibilitas dan efisiensi (kepala sekolah dapat memantau kinerja guru kapan saja dan dari mana saja tanpa mengganggu jadwal belajar-mengajar), pemantauan kinerja secara real-time (data kinerja diperbarui langsung sehingga gambaran yang diperoleh lebih akurat), serta transparansi dan akuntabilitas (hasil evaluasi dapat diakses oleh pengurus yayasan, orang tua, dan guru itu sendiri, meningkatkan rasa saling percaya). Fitur utamanya mencakup penilaian berbasis kinerja dengan indikator objektif, integrasi dengan sistem pembelajaran seperti LMS untuk memantau keefektifan metode pengajaran, serta fitur umpan balik digital dari siswa, orang tua, dan rekan sejawat guru.</p>
  <p>Dalam praktiknya, platform digital juga mendukung supervisi pembelajaran daring (memantau bagaimana guru menyampaikan materi dan berinteraksi lewat video conference), pengawasan kegiatan ekstrakurikuler secara digital (pengelolaan data kehadiran dan dokumentasi kegiatan), serta pembuatan laporan otomatis dan statistik kinerja guru yang membantu perencanaan pengembangan profesional. Tentu ada tantangan yang perlu diantisipasi — keterbatasan infrastruktur dan keterampilan teknologi guru (diatasi lewat pelatihan berkala) serta risiko keamanan data pribadi dan akademik (diatasi dengan memilih platform bersistem pengamanan kuat dan kebijakan pengelolaan data yang jelas) — agar pemanfaatan teknologi dalam supervisi guru benar-benar membawa manfaat tanpa menimbulkan risiko baru.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat metode penilaian kinerja guru (observasi langsung, penilaian diri, umpan balik siswa-orang tua, evaluasi rekan sejawat) yang dibahas di bab ini, metode mana yang sudah dijalankan di sekolah Anda, dan metode mana yang paling mungkin mulai diterapkan tahun ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, selain kualifikasi akademik dan pengalaman mengajar, apa kualifikasi penting lain yang harus diperhatikan dalam rekrutmen guru sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kompetensi kepribadian dan sosial, termasuk kemampuan menjadi teladan akhlak bagi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Jumlah mengikuti seminar tanpa memperhatikan kualitasnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kepemilikan kendaraan pribadi untuk mempermudah mobilitas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya menilai kinerja guru dari nilai ujian siswa semata, tanpa memperhatikan cara guru mengajar, interaksi dengan siswa, atau penerapan nilai Islam dalam kesehariannya. Berdasarkan Bab 7, apa kelemahan utama dari pendekatan penilaian ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kelemahan, karena nilai ujian siswa adalah satu-satunya indikator kinerja guru yang valid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penilaian menjadi tidak komprehensif karena mengabaikan indikator penting lain seperti kualitas pengajaran, kompetensi sosial, dan penerapan nilai Islam yang juga menjadi bagian dari kinerja guru yang utuh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian menjadi terlalu rumit dan sebaiknya dihapuskan sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan sebuah sekolah ingin memantau kinerja guru secara berkelanjutan tanpa harus selalu hadir langsung di kelas setiap hari, sekaligus menjaga transparansi hasil evaluasi bagi semua pihak terkait. Berdasarkan Bab 7, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses supervisi karena dianggap merepotkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan platform digital untuk supervisi dan evaluasi guru, yang memungkinkan pemantauan real-time serta transparansi hasil bagi yayasan, guru, dan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengandalkan gosip antarwali murid sebagai satu-satunya sumber informasi kinerja guru</button>
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
<h2 class="reveal">Manajemen Sarana dan Prasarana</h2>
<p class="lede reveal">Fasilitas yang terawat baik adalah penopang penting proses belajar-mengajar — bab ini membahas bagaimana inventarisasi dan pemeliharaan sarana-prasarana dikelola, bagaimana teknologi digital dan IoT memperkuat pengelolaannya, serta inovasi apa saja yang dapat diterapkan untuk membuat pengelolaan aset sekolah semakin efisien dan transparan.</p>

<div class="card reveal">
  <h4>A. Inventarisasi dan Pemeliharaan Sarana Prasarana</h4>
  <p>Inventarisasi sarana dan prasarana adalah proses pencatatan sistematis atas seluruh aset sekolah — mulai dari gedung, ruang kelas, hingga peralatan belajar — agar kondisi dan keberadaannya selalu diketahui secara jelas, sehingga mendukung proses belajar-mengajar berjalan lancar tanpa terganggu fasilitas yang rusak atau hilang. Salah satu pilar pentingnya adalah pemeliharaan preventif, yaitu mengganti atau memperbaiki komponen yang sudah aus sebelum menyebabkan kerusakan yang lebih besar, sehingga mengurangi biaya perbaikan di masa depan. Untuk itu, sekolah perlu merencanakan anggaran pemeliharaan yang cukup, mencakup biaya perbaikan fasilitas rusak, penggantian peralatan usang, dan perawatan rutin lainnya, agar proses pemeliharaan berjalan optimal tanpa mengganggu kegiatan sekolah.</p>
  <p>Pengelolaan sarana-prasarana tidak lepas dari dua tantangan utama. Pertama, keterbatasan sumber daya — anggaran dan tenaga yang terbatas membuat banyak sekolah kesulitan melakukan pemeliharaan dan audit aset secara rutin; solusinya, sekolah dapat merencanakan anggaran secara efisien dan melibatkan komunitas sekolah, seperti siswa dan orang tua, dalam kegiatan pemeliharaan secara sukarela. Kedua, pencatatan manual yang rawan kesalahan penulisan maupun pembaruan data, sehingga memengaruhi keakuratan informasi aset; solusinya adalah beralih ke sistem digital atau perangkat lunak manajemen aset yang membantu mencatat dan mengelola data dengan lebih akurat serta memudahkan akses kapan saja.</p>

  <h4>B. Pemanfaatan Teknologi dalam Pengelolaan Sarana Prasarana</h4>
  <p>Sejumlah teknologi dapat meningkatkan efisiensi, akurasi, dan efektivitas pengelolaan sarana-prasarana. Digitalisasi inventarisasi aset memungkinkan setiap item — meja, kursi, proyektor — dicatat detail lewat sistem manajemen aset digital lengkap dengan kode QR atau RFID untuk identifikasi dan pelacakan real-time, disertai automatisasi pencatatan yang meminimalkan kesalahan manusia. Internet of Things (IoT) turut berperan lewat sistem pengawasan cerdas — sensor suhu dan kelembapan di ruang kelas atau laboratorium yang otomatis memberi peringatan bila kondisi tidak normal — serta kendali jarak jauh yang memungkinkan pengaturan AC, pencahayaan, dan sistem suara dari satu aplikasi, menghemat waktu dan biaya operasional.</p>
  <p>Selain itu, platform digital berbasis cloud memudahkan staf mengelola seluruh inventaris — status barang, jadwal pemeliharaan, biaya operasional — dari mana saja, sekaligus menyediakan analisis data untuk mengetahui kapan peralatan tertentu perlu diganti atau diperbaiki. Sekolah juga dapat menerapkan sistem pengingat dan pemantauan otomatis: reminder pemeliharaan yang mengingatkan petugas akan jadwal pengecekan rutin (AC, proyektor), serta pelaporan kerusakan otomatis lewat aplikasi terintegrasi yang langsung memberi notifikasi ke petugas pemeliharaan begitu ada laporan masuk, sehingga perbaikan dapat dilakukan lebih cepat dan downtime fasilitas berkurang.</p>

  <h4>C. Inovasi Pengelolaan Aset Sekolah Berbasis Digital</h4>
  <p>Di luar pengelolaan dasar, beberapa inovasi digital dapat diterapkan sekolah Islam untuk mengelola asetnya lebih efisien dan aman. Pengelolaan aset berbasis cloud memberi akses data yang fleksibel — kepala sekolah, staf, maupun petugas pemeliharaan dapat memeriksa kondisi aset kapan saja meski sedang berada di luar sekolah — sekaligus pengelolaan berbasis web yang memudahkan koordinasi dan transparansi antarpihak. Sistem manajemen pemeliharaan terintegrasi memusatkan data pemeliharaan dan inventaris dalam satu sistem yang otomatis memberi peringatan saat fasilitas memerlukan perbaikan, sekaligus mendukung perencanaan anggaran digital yang lebih realistis berdasarkan riwayat kerusakan.</p>
  <p>Teknologi Augmented Reality (AR) dapat dimanfaatkan untuk memandu teknisi melakukan perbaikan secara lebih terstruktur lewat panduan visual, sekaligus mensimulasikan perubahan tata letak ruang sebelum benar-benar dilakukan secara fisik — membantu sekolah menghindari pemborosan. Sementara itu, sistem pengelolaan aset berbasis blockchain menjamin keamanan data aset lewat pencatatan yang tidak dapat diubah atau dimanipulasi, sekaligus memastikan transparansi proses pembelian dan pemeliharaan sehingga setiap transaksi dapat dilacak dan dipertanggungjawabkan, mengurangi potensi penyalahgunaan dana. Dengan berbagai inovasi ini, pengelolaan aset sekolah menjadi lebih efisien, transparan, dan tepercaya bagi seluruh pemangku kepentingan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda masih mencatat inventaris sarana-prasarana secara manual, atau sudah mulai beralih ke sistem digital seperti dibahas di bab ini? Fasilitas apa yang paling mendesak untuk mulai dikelola secara digital?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa tujuan utama dari pemeliharaan preventif sarana dan prasarana sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengganti atau memperbaiki komponen yang sudah aus sebelum menyebabkan kerusakan lebih besar, sehingga mengurangi biaya perbaikan di masa depan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu fasilitas benar-benar rusak total sebelum melakukan tindakan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi jumlah fasilitas sekolah sebanyak mungkin agar tidak perlu dirawat</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah masih mencatat seluruh inventaris di buku tulis manual, sehingga sering terjadi data ganda dan sulit melacak kondisi aset terkini. Berdasarkan Bab 8, solusi paling tepat untuk masalah ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah buku catatan manual agar pencatatan lebih lengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Beralih ke sistem manajemen aset digital dengan kode QR/RFID yang memungkinkan pencatatan dan pelacakan lebih akurat serta real-time</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses pencatatan inventaris karena dianggap tidak penting</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memastikan setiap transaksi pembelian dan pemeliharaan sarana-prasarana tercatat secara transparan dan tidak dapat dimanipulasi oleh pihak mana pun. Berdasarkan Bab 8, teknologi yang paling sesuai untuk kebutuhan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Augmented Reality (AR), karena hanya digunakan untuk simulasi tata letak ruang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Blockchain, karena mencatat setiap transaksi dalam bentuk yang tidak dapat diubah sehingga menjamin transparansi dan keamanan data</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Internet of Things (IoT), karena hanya berfungsi untuk mengatur suhu ruangan</button>
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
<h2 class="reveal">Manajemen Keuangan</h2>
<p class="lede reveal">Pengelolaan dana yang amanah dan sesuai syariah menjadi penopang keberlangsungan sekolah Islam — bab ini membahas prinsip pengelolaan anggaran, pentingnya laporan keuangan yang transparan, serta bagaimana aplikasi keuangan digital dapat meningkatkan efisiensi pengelolaan dana sekolah.</p>

<div class="card reveal">
  <h4>A. Pengelolaan Anggaran Sekolah Islam</h4>
  <p>Pengelolaan anggaran di sekolah Islam tidak sekadar soal mencatat pemasukan dan pengeluaran, tetapi juga wajib memperhatikan prinsip syariah — memastikan bahwa pengeluaran dana tidak melanggar ketentuan hukum Islam, seperti penghindaran riba dan penggunaan dana untuk kegiatan yang tidak bermanfaat. Dengan demikian, pengelolaan anggaran berfungsi ganda: menjaga kelancaran operasional sekolah sekaligus memastikan keuangan dikelola sesuai ajaran Islam, sehingga dana yang dikelola benar-benar membawa manfaat, tidak hanya bagi sekolah tetapi juga bagi pengembangan karakter dan keimanan siswa.</p>
  <p>Anggaran sekolah tersusun dari tiga komponen utama. Pemasukan berasal dari biaya pendidikan (SPP) yang dibayar orang tua siswa, serta donasi, dana zakat, infaq, dan sumbangan dari masyarakat atau alumni sebagai sumber pendukung. Pengeluaran mencakup kebutuhan operasional sekolah seperti gaji guru dan staf, biaya pemeliharaan fasilitas, serta pembiayaan kegiatan belajar-mengajar dan ekstrakurikuler. Sementara itu, cadangan anggaran perlu disisihkan sebagai dana darurat untuk kebutuhan mendesak yang tidak terduga, sehingga operasional sekolah tetap dapat berjalan stabil bahkan ketika menghadapi situasi tak terduga.</p>

  <h4>B. Laporan Keuangan yang Transparan</h4>
  <p>Laporan keuangan yang transparan memberi gambaran jelas dan terbuka tentang bagaimana dana digunakan, memastikan setiap transaksi dicatat dengan tepat dan akurat, sehingga yayasan, pengurus sekolah, dan orang tua siswa dapat merasa tenang dan yakin bahwa dana dikelola dengan benar dan sesuai prinsip syariah. Laporan keuangan sekolah Islam umumnya terdiri dari tiga komponen: laporan penerimaan dan pengeluaran (menggambarkan seluruh aliran dana masuk-keluar dalam periode tertentu), neraca keuangan (posisi aset, kewajiban, dan ekuitas sekolah pada waktu tertentu, menunjukkan solvabilitas sekolah), serta laporan arus kas (memastikan sekolah memiliki likuiditas cukup untuk memenuhi kewajiban jangka pendek seperti gaji guru).</p>
  <p>Penyusunan laporan keuangan yang baik mengikuti standar akuntansi yang berlaku umum maupun prinsip akuntansi syariah, disertai pencatatan transaksi yang rinci (tanggal, jumlah, kategori) agar memudahkan proses audit, serta penyajian yang mudah dipahami baik oleh pihak internal maupun orang tua dan masyarakat umum. Untuk memastikan akurasi dan akuntabilitasnya, laporan keuangan perlu diaudit secara berkala — audit internal oleh tim di dalam sekolah/yayasan untuk mendeteksi kesalahan pengelolaan, serta audit eksternal oleh auditor independen yang memberi opini objektif atas kewajaran laporan, sehingga donatur dan orang tua siswa mendapat jaminan bahwa dana sekolah dikelola dengan baik dan sesuai ketentuan yang berlaku.</p>

  <h4>C. Aplikasi Keuangan untuk Efisiensi Pengelolaan Dana Sekolah</h4>
  <p>Aplikasi keuangan digital membawa tiga keuntungan utama: efisiensi dan akurasi (mencatat transaksi secara otomatis, mengurangi risiko kesalahan manusia dibanding pencatatan manual), pemantauan real-time (pengelola dapat segera mengetahui status keuangan sekolah tanpa menunggu laporan bulanan), serta transparansi dan aksesibilitas (laporan dapat diakses pengurus yayasan atau komite sekolah kapan saja, meningkatkan kepercayaan orang tua dan donatur). Fitur-fitur utamanya mencakup pencatatan dan pengelompokan pengeluaran sesuai kategori (operasional, ekstrakurikuler, penggajian), pembuatan laporan keuangan otomatis (laba-rugi, neraca, arus kas dalam hitungan detik), pengelolaan anggaran yang membantu memantau kesesuaian pengeluaran dengan rencana, serta integrasi pembayaran yang memudahkan orang tua atau donatur membayar SPP dan donasi langsung lewat aplikasi.</p>
  <p>Banyak aplikasi keuangan kini beralih ke sistem berbasis cloud, menawarkan akses jarak jauh (pengelola dapat memantau laporan dari mana saja, sangat berguna dalam situasi darurat) serta keamanan data yang lebih tinggi lewat sistem enkripsi yang melindungi data sensitif dari akses tidak sah. Sekolah dapat memilih dari berbagai software keuangan khusus lembaga pendidikan yang menawarkan fitur lengkap — mulai pencatatan transaksi, penggajian, hingga laporan pajak — maupun aplikasi berbasis mobile yang memudahkan pengelola memantau keuangan sekolah kapan saja di tengah kesibukan harian. Dengan aplikasi yang tepat, pengelola sekolah dapat lebih fokus pada hal-hal strategis untuk meningkatkan kualitas pendidikan, karena beban administratif keuangan menjadi jauh lebih ringan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah laporan keuangan di sekolah Anda saat ini sudah disusun secara transparan dan dapat diakses oleh orang tua maupun donatur, atau masih tertutup hanya untuk kalangan internal? Langkah apa yang bisa mulai diambil untuk meningkatkan transparansinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, selain menjaga kelancaran operasional, pengelolaan anggaran di sekolah Islam juga harus memperhatikan prinsip apa?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip syariah, termasuk penghindaran riba dan penggunaan dana untuk kegiatan yang bermanfaat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip mengejar keuntungan maksimal seperti perusahaan komersial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip mengabaikan pencatatan selama dana masih tersedia</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan sekolah hanya membuat laporan keuangan untuk kalangan internal dan menolak menunjukkannya kepada orang tua siswa maupun donatur meski diminta. Berdasarkan Bab 9, apa dampak paling mungkin dari sikap ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak, karena laporan keuangan memang seharusnya dirahasiakan dari semua pihak eksternal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menurunkan kepercayaan orang tua dan donatur, karena transparansi laporan keuangan adalah kunci membangun rasa aman dan kepercayaan terhadap pengelolaan dana sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meningkatkan kepercayaan masyarakat karena dianggap menjaga privasi yayasan</button>
  </div>
  <div class="quiz-q">
    <p>Bendahara sebuah sekolah kewalahan membuat laporan laba-rugi dan arus kas secara manual setiap bulan, sehingga sering terlambat dan rawan kesalahan hitung. Berdasarkan Bab 9, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan pembuatan laporan keuangan sampai bendahara baru direkrut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan aplikasi keuangan digital yang dapat membuat laporan laba-rugi, neraca, dan arus kas secara otomatis dan lebih akurat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta orang tua siswa yang menyusun laporan keuangan sekolah</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab9" onclick="markDone('bab9')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab9">✓ Bab 9 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab10: `
<p class="eyebrow reveal">Bab 10</p>
<h2 class="reveal">Manajemen Konflik</h2>
<p class="lede reveal">Konflik adalah bagian tak terhindarkan dari kehidupan sekolah — bab ini membahas bagaimana mengidentifikasi jenis konflik yang muncul, bagaimana prinsip-prinsip Islam menuntun penyelesaiannya secara adil dan damai, serta bagaimana teknologi dapat mendukung proses mediasi secara lebih efisien.</p>

<div class="card reveal">
  <h4>A. Identifikasi dan Kategori Konflik di Sekolah</h4>
  <p>Konflik di lingkungan sekolah dapat muncul dari berbagai sumber — perbedaan pendapat antarsiswa, ketegangan antara guru dan siswa terkait kebijakan atau aturan, gesekan antara manajemen dan staf pengajar, hingga perselisihan antara orang tua dan pihak sekolah terkait metode pengajaran. Bila tidak dikelola dengan baik, konflik dapat memperburuk hubungan antarpihak di sekolah — menciptakan ketegangan yang mengganggu keharmonisan lingkungan belajar dan menghambat perkembangan positif bagi semua pihak yang terlibat.</p>
  <p>Namun penting dicatat bahwa konflik yang ditangani dengan bijaksana justru dapat membawa manfaat: menjadi sarana meningkatkan komunikasi, memperjelas tujuan bersama, dan mendorong lahirnya solusi yang lebih baik atas masalah yang ada. Karena itu, manajemen konflik di sekolah harus dilakukan dengan penuh perhatian dan keterampilan, agar dampak negatifnya dapat diminimalkan sementara manfaatnya justru dimaksimalkan bagi seluruh warga sekolah.</p>

  <h4>B. Strategi Penyelesaian Konflik Berdasarkan Prinsip Islam</h4>
  <p>Islam mengajarkan empat prinsip dasar dalam menyelesaikan konflik secara adil dan bijaksana. Keadilan (‘Adl) menuntut semua pihak yang berkonflik diperlakukan setara tanpa memihak, diberi kesempatan yang sama untuk menyampaikan pendapat. Musyawarah mengajak semua pihak berdialog terbuka, bukan hanya untuk mencari solusi tetapi juga saling memahami dan menghormati perbedaan pendapat. Kesabaran (Sabr) mengajarkan untuk tidak terburu-buru mengambil tindakan yang bisa memperburuk keadaan, melainkan menahan diri dan berpikir matang sebelum bertindak. Sementara perdamaian (Sulh) menjadi inti penyelesaian konflik dalam Islam — selalu mencari jalan yang menguntungkan semua pihak, menghindari kekerasan atau permusuhan yang dapat merusak hubungan.</p>
  <p>Keempat prinsip ini diterapkan lewat proses konkret: penyelesaian dengan dialog terbuka dan jujur agar setiap pihak dipahami, musyawarah dan konsultasi yang melibatkan semua pihak terkait untuk menciptakan rasa tanggung jawab bersama, perdamaian dengan jalan tengah yang tidak merugikan salah satu pihak, serta menjaga sikap menghindari permusuhan agar ketegangan tidak berkembang menjadi perselisihan berkepanjangan. Sebagai contoh nyata, konflik antara guru dan siswa terkait kebijakan tertentu dapat diselesaikan lewat pertemuan musyawarah yang membuka ruang bagi kedua pihak menyampaikan pendapat secara terbuka, sementara perselisihan antara orang tua dan guru soal metode pengajaran dapat diselesaikan lewat pertemuan yang menerapkan keadilan, musyawarah, dan perdamaian sekaligus, sehingga solusi yang dihasilkan benar-benar menguntungkan perkembangan siswa.</p>

  <h4>C. Teknologi untuk Mendukung Mediasi dan Resolusi Konflik</h4>
  <p>Teknologi dapat mendukung penyelesaian konflik lewat komunikasi yang lebih mudah dan transparan — platform manajemen sekolah digital membantu pihak-pihak yang berkonflik mengakses informasi relevan secara langsung dan terorganisir, sementara aplikasi mediasi online membantu komunikasi menjadi lebih terstruktur dan fokus pada solusi tanpa terganggu emosi berlebihan. Beberapa tools yang dapat digunakan antara lain video conference (Zoom, Google Meet) untuk mediasi virtual saat pertemuan tatap muka sulit dilakukan, platform diskusi online seperti forum atau grup WhatsApp yang memberi ruang menyampaikan pendapat secara lebih tenang, serta sistem manajemen konflik digital yang mencatat, melaporkan, dan memantau penyelesaian konflik secara sistematis.</p>
  <p>Pemanfaatan teknologi dalam mediasi membawa tiga keuntungan: fleksibilitas waktu dan lokasi (mediasi dapat dilakukan kapan saja tanpa harus bertemu di tempat yang sama), keterbukaan dan transparansi (seluruh komunikasi terdokumentasi dan dapat diakses semua pihak, memastikan proses berlangsung adil), serta pengurangan ketegangan emosional (komunikasi lewat platform digital cenderung lebih tenang dan objektif dibanding tatap muka langsung). Pada level yang lebih canggih, kecerdasan buatan (AI) kini juga dapat menganalisis pola komunikasi antarpihak, memberikan rekomendasi pendekatan penyelesaian yang efektif, bahkan memprediksi hasil dari berbagai pendekatan — menjadikan proses mediasi lebih berbasis data dan tidak terpengaruh bias pribadi, sehingga hasilnya berpotensi lebih objektif dan adil bagi semua pihak yang terlibat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat prinsip penyelesaian konflik dalam Islam (keadilan, musyawarah, kesabaran, perdamaian) yang dibahas di bab ini, prinsip mana yang paling sering terlupakan saat konflik muncul di sekolah Anda?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja empat prinsip Islam dalam penyelesaian konflik?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keadilan (‘Adl), musyawarah, kesabaran (Sabr), dan perdamaian (Sulh)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kecepatan, kekuasaan, dominasi, dan kemenangan sepihak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Diam, menghindar, membiarkan, dan melupakan masalah sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah langsung memutuskan sanksi bagi seorang siswa tanpa mendengarkan penjelasan siswa tersebut maupun pihak guru yang terlibat, hanya berdasarkan laporan sepihak. Berdasarkan Bab 10, prinsip Islam apa yang paling jelas dilanggar dalam kasus ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kesabaran, karena keputusan diambil dengan sangat cepat sehingga dianggap efisien</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keadilan dan musyawarah, karena tidak semua pihak diberi kesempatan yang sama untuk menyampaikan pendapat sebelum keputusan diambil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Perdamaian, karena sanksi yang tegas selalu identik dengan penyelesaian damai</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali murid yang tinggal di luar kota kesulitan hadir langsung ke sekolah untuk membahas konflik terkait metode pengajaran anaknya. Berdasarkan Bab 10, solusi paling tepat yang bisa ditawarkan sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan proses mediasi karena wali murid tidak bisa hadir secara fisik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menawarkan mediasi lewat video conference atau platform diskusi online, memanfaatkan fleksibilitas waktu dan lokasi yang ditawarkan teknologi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan keluhan wali murid tersebut karena dianggap tidak serius menghadiri pertemuan</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab10" onclick="markDone('bab10')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab10">✓ Bab 10 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab11: `
<p class="eyebrow reveal">Bab 11</p>
<h2 class="reveal">Tantangan dan Strategi Menghadapi Era Digital</h2>
<p class="lede reveal">Adopsi teknologi di sekolah Islam tidak pernah lepas dari hambatan nyata — bab ini memetakan hambatan tersebut, menawarkan solusi konkret untuk mengatasinya, serta membahas bagaimana risiko keamanan digital dapat dikelola agar transformasi teknologi berjalan aman dan berkelanjutan.</p>

<div class="card reveal">
  <h4>A. Hambatan dalam Adopsi Teknologi di Sekolah Islam</h4>
  <p>Sekolah Islam kerap menghadapi empat hambatan utama dalam mengadopsi teknologi. Pertama, keterbatasan infrastruktur — banyak sekolah belum memiliki jaringan internet yang stabil, perangkat keras yang memadai, atau ruang laboratorium komputer yang layak. Kedua, kesenjangan keterampilan digital di kalangan guru dan staf, yang membuat penggunaan teknologi baru terasa asing dan menakutkan bagi sebagian tenaga pendidik. Ketiga, resistensi terhadap perubahan — budaya sekolah yang lebih tradisional membuat sebagian guru dan orang tua merasa cemas bahwa teknologi akan mengubah nilai-nilai pendidikan yang sudah mapan.</p>
  <p>Keempat, keterbatasan anggaran untuk pengadaan perangkat dan infrastruktur teknologi, yang menjadi kendala terbesar terutama bagi sekolah dengan sumber daya terbatas. Untuk mengatasi kendala biaya ini, sekolah dapat mulai menjajaki bantuan dalam bentuk sponsor atau hibah dari berbagai pihak, sekaligus memanfaatkan perangkat dan aplikasi berbasis cloud atau open-source yang jauh lebih terjangkau dibanding investasi perangkat keras penuh, sehingga keterbatasan dana tidak lantas menghentikan langkah sekolah untuk beradaptasi dengan era digital.</p>

  <h4>B. Solusi untuk Mengatasi Hambatan Digital</h4>
  <p>Untuk mengatasi keterbatasan infrastruktur, sekolah dapat berkolaborasi dengan pemerintah, lembaga pendidikan, atau organisasi non-profit untuk memperoleh bantuan dana atau perangkat, sekaligus berinvestasi pada teknologi yang lebih terjangkau seperti platform pembelajaran berbasis cloud yang tidak memerlukan perangkat keras mahal. Untuk mengatasi kesenjangan keterampilan digital, sekolah perlu menyelenggarakan pelatihan rutin bagi guru dan staf — mencakup penggunaan alat pembelajaran digital, manajemen kurikulum berbasis teknologi, hingga keamanan digital — idealnya dengan mengundang ahli teknologi pendidikan untuk memberikan workshop khusus. Untuk mengatasi resistensi terhadap perubahan, sekolah perlu membangun budaya digital yang terbuka lewat seminar dan diskusi yang menjelaskan bagaimana teknologi dapat meningkatkan pengalaman belajar tanpa mengorbankan nilai-nilai agama, sehingga teknologi dipandang sebagai alat pendukung, bukan ancaman.</p>
  <p>Untuk mengatasi keterbatasan anggaran, sekolah dapat mengoptimalkan sumber daya yang ada — memanfaatkan perangkat bekas yang masih layak pakai atau aplikasi berbasis cloud yang gratis maupun berbiaya rendah — serta menjalin kolaborasi dengan pihak luar seperti lembaga pendidikan lain atau perusahaan teknologi yang kerap menawarkan diskon khusus atau paket edukasi bagi sekolah. Kolaborasi jangka panjang semacam ini bisa saling menguntungkan: sekolah mendapat dukungan teknologi, sementara pihak luar memperoleh kesempatan riset atau pengembangan produk di lingkungan pendidikan nyata.</p>

  <h4>C. Manajemen Risiko Keamanan Digital di Sekolah</h4>
  <p>Adopsi teknologi membawa tanggung jawab baru: melindungi data pribadi siswa dan staf (nama, alamat, nilai akademik) dari kebocoran, dengan mematuhi standar perlindungan data yang berlaku, menggunakan enkripsi, membatasi akses hanya untuk pihak berwenang, serta menerapkan kebijakan privasi yang ketat. Sekolah juga perlu mewaspadai ancaman keamanan siber seperti peretasan data, dengan memasang perangkat lunak keamanan seperti firewall (melindungi jaringan dari akses tidak sah), antivirus (mendeteksi dan menghapus virus), serta enkripsi data, disertai edukasi bagi siswa dan staf tentang bahaya phishing dan malware agar mereka lebih waspada saat menggunakan perangkat digital.</p>
  <p>Sekolah perlu menyusun kebijakan penggunaan teknologi yang aman — mengatur penggunaan perangkat pribadi (BYOD), cara pengamanan data di sistem sekolah, serta pengawasan aktivitas online siswa agar terhindar dari akses berbahaya — disertai pelatihan rutin tentang keamanan digital seperti mengenali situs aman, menjaga kerahasiaan kata sandi, dan mewaspadai pesan mencurigakan. Yang tak kalah penting, sekolah perlu memiliki rencana pemulihan data dan sistem (disaster recovery plan) untuk mengantisipasi kegagalan sistem atau serangan siber, mencakup pencadangan data secara teratur, pemanfaatan cloud backup yang bisa dipulihkan dengan cepat, serta pemeliharaan infrastruktur jaringan yang andal — sehingga proses belajar-mengajar tetap berjalan meski terjadi masalah teknis.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat hambatan adopsi teknologi (infrastruktur, keterampilan digital, resistensi perubahan, keterbatasan anggaran) yang dibahas di bab ini, hambatan mana yang paling besar dihadapi sekolah Anda — dan solusi mana dari Bab 11 yang paling realistis mulai dijalankan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja empat hambatan utama yang dihadapi sekolah Islam dalam mengadopsi teknologi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keterbatasan infrastruktur, kesenjangan keterampilan digital, resistensi terhadap perubahan, dan keterbatasan anggaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kelebihan dana, terlalu banyak guru, dan siswa yang terlalu ahli teknologi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak adanya hambatan sama sekali karena teknologi selalu mudah diadopsi</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah dengan anggaran terbatas ingin mulai menerapkan pembelajaran berbasis digital tanpa harus membeli perangkat keras baru yang mahal. Berdasarkan Bab 11, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda rencana digitalisasi tanpa batas waktu sampai anggaran mencukupi untuk membeli semua perangkat baru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan platform pembelajaran berbasis cloud atau open-source yang terjangkau, serta menjajaki kolaborasi dengan pihak luar untuk dukungan perangkat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksakan pembelian perangkat keras mahal meski harus mengorbankan anggaran operasional lain</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru saja mulai menyimpan data siswa secara digital, tetapi belum memiliki kebijakan keamanan data maupun rencana pemulihan jika terjadi serangan siber. Berdasarkan Bab 11, langkah paling mendesak yang harus segera diambil sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena serangan siber dianggap tidak mungkin menimpa sekolah kecil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan perlindungan data (enkripsi, kebijakan privasi, firewall) sekaligus menyusun rencana pemulihan data dan sistem seperti backup rutin dan cloud backup</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh penyimpanan data digital dan kembali sepenuhnya ke pencatatan manual</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab11" onclick="markDone('bab11')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab11">✓ Bab 11 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab12: `
<p class="eyebrow reveal">Bab 12</p>
<h2 class="reveal">Manajemen Hubungan Masyarakat (Humas)</h2>
<p class="lede reveal">Bagian kedua buku ini beralih fokus dari pengelolaan internal ke penguatan citra dan keberlanjutan sekolah — diawali dengan bab tentang Humas: apa peran dan tugasnya, bagaimana strategi komunikasi yang efektif dibangun, bagaimana media sosial dimanfaatkan, hingga bagaimana krisis dan reputasi sekolah dikelola secara profesional.</p>

<div class="card reveal">
  <h4>A. Pengertian dan Peran Humas di Sekolah Islam</h4>
  <p>Hubungan Masyarakat (Humas) di sekolah Islam berperan penting dalam membangun citra dan mendukung keberhasilan operasional sekolah, dengan tanggung jawab utama menciptakan dan memelihara komunikasi yang baik antara sekolah dengan orang tua siswa, masyarakat, pemerintah, dan media. Humas menjalankan empat tugas utama: menyampaikan informasi kepada publik secara jelas, akurat, dan tepat waktu (pengumuman pendaftaran, prestasi, kegiatan sekolah), membangun hubungan yang baik dengan masyarakat sekitar untuk memperoleh dukungan finansial maupun moral, mengelola krisis dan isu negatif dengan klarifikasi yang cepat dan tepat agar kepercayaan publik tidak menurun, serta mempromosikan identitas dan nilai-nilai Islam sekolah lewat penyampaian visi-misi dan kegiatan yang mendukung pengembangan karakter siswa.</p>

  <h4>B. Strategi Komunikasi yang Efektif untuk Humas</h4>
  <p>Membangun kepercayaan publik adalah inti dari strategi komunikasi Humas, yang dapat dicapai lewat keterbukaan dan transparansi (laporan tahunan tentang pencapaian dan rencana sekolah), konsistensi dalam pesan (memastikan apa yang dikomunikasikan di media sosial, surat kabar, dan acara sekolah selaras dengan nilai dan tujuan sekolah), serta menunjukkan kepedulian nyata terhadap masyarakat lewat kegiatan sosial dan program yang membantu orang tua mendukung pendidikan anak. Pengelolaan komunikasi yang efektif juga menuntut respons cepat terhadap setiap pertanyaan atau keluhan masyarakat, sehingga komunikasi dua arah dapat terjalin dan memperkuat hubungan sekolah dengan berbagai pihak.</p>
  <p>Strategi ini diperkuat lewat membangun kemitraan dengan masyarakat — bakti sosial, seminar pendidikan, atau kegiatan olahraga terbuka untuk umum — yang membuat sekolah dikenal lebih dekat dan mendapat dukungan lebih besar, serta mengelola hubungan baik dengan media lewat press release tentang prestasi dan inisiatif sekolah, sehingga media dapat membantu mempublikasikan informasi positif. Ketika muncul krisis komunikasi seperti kontroversi atau isu negatif, Humas harus segera merespons dengan klarifikasi yang jujur dan transparan lewat media sosial, situs web, atau konferensi pers — penanganan krisis yang baik justru dapat mengubah persepsi publik dan menunjukkan profesionalisme serta integritas sekolah.</p>

  <h4>C. Pemanfaatan Media Sosial dalam Humas Sekolah Islam</h4>
  <p>Pemilihan platform media sosial yang tepat menentukan efektivitas jangkauan pesan Humas. Facebook cocok untuk menjangkau orang tua dan masyarakat umum lewat pengumuman dan interaksi komentar; Instagram unggul untuk konten visual seperti foto kegiatan dan karya siswa lewat fitur stories dan reels; Twitter efektif untuk informasi singkat dan cepat dengan hashtag yang relevan; YouTube ideal untuk konten video mendalam seperti dokumentasi acara atau wawancara alumni; sementara WhatsApp sangat berguna untuk komunikasi internal cepat dengan orang tua, siswa, dan guru lewat grup.</p>
  <p>Untuk meningkatkan keterlibatan audiens, Humas dapat membuat konten yang relevan dan menarik (prestasi siswa, tips parenting, kegiatan keagamaan), mengadakan kuis atau giveaway berhadiah menarik, menggunakan hashtag khas sekolah agar mudah ditemukan, menanggapi komentar dan pesan secara aktif dan ramah, mengadakan live streaming atau webinar untuk interaksi langsung, serta mendorong partisipasi siswa dan alumni lewat program "Testimoni Alumni" atau "Cerita Siswa" yang menumbuhkan rasa kebanggaan dan keterlibatan komunitas sekolah.</p>

  <h4>D. Manajemen Krisis dan Reputasi Sekolah</h4>
  <p>Krisis dapat muncul dalam berbagai bentuk — masalah tenaga pendidik, kebijakan sekolah, insiden siswa, atau isu organisasi — dan menuntut respons yang cepat serta profesional lewat lima langkah: memahami masalah secara jelas sebelum merespons (kronologi, pihak terlibat, dampak), komunikasi internal yang efektif kepada staf dan guru agar tidak ada informasi simpang siur, memberikan klarifikasi terbuka kepada publik lewat kanal resmi sekolah, menjaga profesionalisme dan tidak bersikap defensif saat menghadapi kritik, serta berkomunikasi dengan media secara transparan agar opini publik terbentuk berdasarkan informasi yang akurat.</p>
  <p>Setelah krisis mereda, sekolah perlu membangun kembali citra positifnya lewat lima langkah: menunjukkan komitmen nyata untuk perbaikan (kebijakan atau prosedur baru agar kejadian serupa tidak terulang), melibatkan komunitas — orang tua, siswa, alumni — dalam proses pemulihan lewat forum diskusi bersama, memanfaatkan media sosial untuk menyebarkan konten positif dan kisah inspiratif, memberikan penghargaan bagi mereka yang berkontribusi memulihkan reputasi sekolah, serta mengadakan acara yang menonjolkan nilai-nilai positif seperti kegiatan sosial atau keagamaan. Di era digital yang serba terbuka dan terkoneksi, kesigapan dan kehati-hatian dalam menangani krisis menjadi kunci menjaga reputasi yang telah dibangun bertahun-tahun.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima platform media sosial (Facebook, Instagram, Twitter, YouTube, WhatsApp) yang dibahas di bab ini, platform mana yang paling efektif digunakan sekolah Anda saat ini — dan platform mana yang masih belum dimanfaatkan secara optimal?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja empat tugas utama Humas di sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyampaikan informasi kepada publik, membangun hubungan baik dengan masyarakat, mengelola krisis, dan mempromosikan identitas nilai-nilai Islam sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyusun jadwal ujian dan mengoreksi hasil ujian seluruh siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengelola gaji guru dan menyusun laporan keuangan bulanan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menghadapi isu negatif yang beredar di media sosial, namun pihak Humas hanya diam tanpa memberikan klarifikasi apa pun selama berhari-hari. Berdasarkan Bab 12, apa risiko utama dari sikap ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena isu negatif akan otomatis hilang dengan sendirinya tanpa perlu direspons</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Isu tersebut berisiko berkembang lebih besar dan merusak kepercayaan publik, karena kecepatan dan ketepatan merespons adalah prinsip utama manajemen krisis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah akan otomatis mendapat simpati publik karena terlihat tenang menghadapi masalah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin membagikan dokumentasi acara wisuda yang berdurasi panjang beserta wawancara alumni secara mendalam. Berdasarkan Bab 12, platform media sosial yang paling sesuai untuk kebutuhan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Twitter, karena hanya cocok untuk pesan singkat dan cepat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">YouTube, karena platform ini ideal untuk konten video yang lebih mendalam seperti dokumentasi acara dan wawancara</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">WhatsApp, karena hanya dirancang untuk komunikasi internal singkat antaranggota grup</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab12" onclick="markDone('bab12')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab12">✓ Bab 12 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab13: `
<p class="eyebrow reveal">Bab 13</p>
<h2 class="reveal">Manajemen Branding Sekolah Islam</h2>
<p class="lede reveal">Branding yang kuat membuat sekolah Islam mudah dikenali dan dipercaya masyarakat — bab ini membahas mengapa branding penting, bagaimana identitas visual dibangun, strategi pemasaran untuk memperkenalkan sekolah, serta cara mengukur keberhasilan upaya branding yang telah dijalankan.</p>

<div class="card reveal">
  <h4>A. Pentingnya Branding Sekolah Islam</h4>
  <p>Branding adalah upaya membangun citra dan identitas khas yang membedakan sebuah sekolah dari sekolah lain, sekaligus menjadi dasar kepercayaan masyarakat terhadap kualitas pendidikan yang ditawarkan. Bagi sekolah Islam, branding yang kuat dapat ditunjukkan lewat program pengabdian masyarakat atau kegiatan sosial yang melibatkan siswa — mencerminkan bahwa sekolah tidak hanya berfokus pada akademik, tetapi juga pembentukan pribadi yang peduli terhadap sesama sesuai prinsip Islam — serta lewat prestasi akademik dan non-akademik (olahraga, seni, kepemimpinan) yang menambah kepercayaan masyarakat terhadap kualitas pendidikan yang diberikan.</p>
  <p>Ciri khas sekolah Islam dalam branding harus dikomunikasikan secara konsisten kepada publik lewat berbagai media — memastikan bahwa pesan yang disampaikan lewat media sosial, website, iklan, maupun kegiatan sekolah selalu selaras dengan nilai-nilai dan identitas yang ingin diperkenalkan, sehingga masyarakat memperoleh kesan yang utuh dan konsisten tentang siapa sekolah tersebut sebenarnya.</p>

  <h4>B. Membangun Identitas Visual Sekolah</h4>
  <p>Identitas visual mencerminkan kesan pertama yang ditangkap masyarakat, orang tua, dan siswa, sehingga perlu dirancang dengan konsisten dan kuat agar sekolah mudah dikenali. Logo sebagai simbol utama harus sederhana, mudah dikenali, dan mencerminkan nilai-nilai Islam — misalnya lewat elemen bulan sabit, bintang, atau bentuk geometris yang mencerminkan disiplin dan keteguhan. Pemilihan warna juga berperan penting secara psikologis: biru melambangkan ketenangan dan kebijaksanaan, hijau melambangkan kedamaian dan kesuburan yang berkaitan dengan ajaran Islam — warna-warna ini perlu digunakan konsisten di seluruh media sekolah. Desain visual yang konsisten, mencakup tipografi dan elemen grafis lainnya, akan memberikan kesan profesional dan terorganisir pada setiap materi yang dikeluarkan sekolah, baik fisik maupun digital.</p>
  <p>Selain elemen visual, slogan dan misi sekolah juga menjadi alat branding yang kuat. Slogan yang baik menggambarkan visi-misi sekolah secara jelas dan singkat, misalnya "Menjadi Generasi Cerdas dan Berakhlak Mulia", memberi kesan langsung bahwa sekolah mengutamakan pendidikan berkualitas berlandaskan nilai Islam. Misi sekolah, seperti "Memberikan pendidikan terbaik yang mengintegrasikan ilmu agama dan sains", memperkuat citra sekolah sebagai lembaga yang fokus pada pengembangan siswa secara menyeluruh — dan akan lebih efektif bila dikomunikasikan secara konsisten lewat materi pemasaran, website, dan media sosial.</p>

  <h4>C. Strategi Pemasaran untuk Memperkenalkan Sekolah</h4>
  <p>Website adalah "wajah digital" sekolah yang perlu memiliki desain menarik dan mudah digunakan (user-friendly), mobile-friendly, serta memuat informasi penting seperti visi-misi, program akademik, kegiatan ekstrakurikuler, dan fasilitas, dilengkapi kontak yang jelas dan fitur pendaftaran online. Konten yang dipublikasikan harus berkualitas dan relevan — artikel tentang kegiatan dan prestasi siswa, tulisan bermanfaat seputar pendidikan Islam, hingga foto dan video kegiatan sekolah yang memperkuat citra sekolah Islam yang berkualitas.</p>
  <p>Video promosi menjadi alat pemasaran yang sangat efektif karena mampu menyampaikan pesan secara visual dan emosional — menampilkan keunggulan kurikulum berbasis Islam, kegiatan ekstrakurikuler, fasilitas, dan prestasi, dilengkapi wawancara guru, siswa, atau kepala sekolah untuk memperkuat pesan. Testimoni siswa dan orang tua melengkapi strategi ini dengan memberi gambaran autentik tentang kualitas pendidikan lewat pengalaman langsung mereka — menambah kredibilitas sekolah di mata calon siswa dan orang tua, sekaligus menunjukkan bahwa sekolah peduli pada perkembangan karakter, bukan sekadar hasil akademis semata.</p>

  <h4>D. Mengukur Keberhasilan Branding Sekolah</h4>
  <p>Keberhasilan branding tidak hanya diukur dari seberapa dikenal sekolah, tetapi juga seberapa efektif nilai dan pesan yang disampaikan diterima oleh audiens. Salah satu caranya adalah mengumpulkan feedback dari berbagai stakeholder: siswa dan orang tua (lewat survei atau wawancara tentang apakah sekolah mencerminkan nilai yang dijanjikan), guru dan tenaga kependidikan (pandangan objektif tentang bagaimana branding memengaruhi atmosfer kelas), serta masyarakat dan alumni (perspektif dari luar komunitas internal lewat forum diskusi atau reuni). Feedback dari berbagai pihak ini membantu sekolah mengidentifikasi kekuatan dan kelemahan branding yang telah dijalankan.</p>
  <p>Cara kedua adalah menganalisis data media sosial dan website secara sistematis — metrik seperti jumlah pengikut, interaksi (like, komentar, share), dan jangkauan konten di media sosial, serta jumlah pengunjung unik, waktu yang dihabiskan di website, dan tingkat konversi (misalnya jumlah pengisian formulir pendaftaran) di website sekolah. Bila banyak pengunjung datang dan menghabiskan waktu lama menjelajahi halaman sekolah, itu menandakan branding sekolah telah berhasil menarik perhatian audiens yang dituju, dan sekolah dapat terus menyempurnakan strategi branding berdasarkan data nyata ini, bukan sekadar asumsi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah identitas visual sekolah Anda (logo, warna, slogan) sudah konsisten digunakan di semua kanal komunikasi — website, media sosial, brosur, dan lingkungan fisik sekolah? Elemen mana yang paling perlu dirapikan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa fungsi utama identitas visual (logo, warna, desain) dalam branding sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mencerminkan kesan pertama yang ditangkap masyarakat dan mempermudah sekolah dikenali serta dibedakan dari sekolah lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan seluruh kebutuhan kurikulum dan pembelajaran di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya berguna untuk keperluan cetak brosur tanpa relevansi digital</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menggunakan warna dan logo yang berbeda-beda di website, brosur, dan akun media sosialnya, tanpa mengikuti panduan desain yang seragam. Berdasarkan Bab 13, apa dampak paling mungkin dari situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak, karena variasi desain justru dianggap lebih kreatif dan menarik perhatian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kesan profesional dan keseragaman identitas sekolah menjadi lemah, sehingga sekolah lebih sulit dikenali secara konsisten oleh masyarakat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah otomatis akan lebih dipercaya karena terlihat fleksibel dalam desain</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin mengetahui secara objektif apakah upaya branding yang telah dilakukan berhasil menjangkau dan meyakinkan calon siswa serta orang tua. Berdasarkan Bab 13, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengandalkan asumsi pribadi kepala sekolah tanpa perlu data atau masukan pihak lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengumpulkan feedback dari stakeholder (siswa, orang tua, guru, alumni) serta menganalisis data media sosial dan website secara sistematis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan branding berjalan tanpa evaluasi karena logo dan slogan sudah dianggap cukup</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab13" onclick="markDone('bab13')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab13">✓ Bab 13 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab14: `
<p class="eyebrow reveal">Bab 14</p>
<h2 class="reveal">Strategi Pemasaran Sekolah di Era Digital</h2>
<p class="lede reveal">Branding yang kuat perlu ditopang oleh strategi pemasaran yang tepat sasaran — bab ini membahas mengapa pemasaran digital penting, teknik SEO untuk meningkatkan visibilitas, iklan berbayar, pemanfaatan media sosial, hingga cara merancang kampanye pemasaran yang efektif bagi sekolah Islam.</p>

<div class="card reveal">
  <h4>A. Pemasaran Digital dan Pentingnya di Dunia Pendidikan</h4>
  <p>Pemasaran digital menjadi kebutuhan mendesak bagi sekolah Islam karena masyarakat masa kini mencari informasi pendidikan lewat internet, bukan lagi semata metode konvensional. Lewat konten digital yang menampilkan kegiatan dan program unggulan, sekolah dapat menunjukkan nilai-nilai yang diusung dan memperkuat reputasinya di mata orang tua dan calon siswa. Dibanding metode tradisional seperti iklan cetak atau billboard yang mahal, pemasaran digital jauh lebih efisien dari sisi biaya dan waktu, sekaligus fleksibel karena hasilnya dapat dipantau secara real-time lewat alat seperti Google Analytics. Pemasaran digital juga memungkinkan interaksi langsung dengan calon siswa dan orang tua lewat komentar atau pesan pribadi, sekaligus membantu sekolah tetap relevan mengikuti perkembangan zaman dan bersaing di tengah persaingan antar-lembaga pendidikan yang semakin ketat.</p>

  <h4>B. Teknik SEO untuk Meningkatkan Visibilitas Sekolah</h4>
  <p>Search Engine Optimization (SEO) adalah serangkaian praktik untuk meningkatkan peringkat website di mesin pencari seperti Google, sehingga sekolah lebih mudah ditemukan calon siswa dan orang tua. Penerapan SEO di website sekolah mencakup penelitian kata kunci (memahami frasa yang sering dicari, misalnya "sekolah islam di [nama kota]"), optimasi on-page (judul halaman relevan, deskripsi meta menarik, struktur heading H1-H3 yang rapi, konten berkualitas dan selalu diperbarui), optimasi kecepatan website (mengompres gambar, memakai server andal), serta tautan internal dan eksternal (backlink dari situs tepercaya) yang meningkatkan kredibilitas website di mata Google.</p>
  <p>Selain optimasi website, sekolah juga perlu mengoptimalkan Google My Business (GMB) untuk pencarian lokal seperti "sekolah islam terbaik di [nama kota]" — mendaftar dan memverifikasi profil, mengisi informasi lengkap (alamat, telepon, jam operasional), menambahkan foto dan video suasana sekolah, mengelola ulasan dan rating secara aktif (meminta ulasan positif dan menanggapi semua masukan dengan baik), serta rutin memposting pengumuman lewat fitur posting GMB. Dengan GMB yang teroptimasi, sekolah akan lebih sering muncul di pencarian lokal dan peta, memudahkan orang tua menemukan sekolah yang dekat dengan lokasi mereka.</p>

  <h4>C. Iklan Berbayar: Google Ads dan Facebook Ads</h4>
  <p>Iklan berbayar seperti Google Ads dan Facebook Ads menawarkan kesempatan menampilkan iklan sekolah di tempat dan waktu yang tepat kepada audiens yang relevan. Sebelum memulai kampanye, sekolah perlu menentukan anggaran (harian atau total kampanye, disesuaikan tujuan) serta menetapkan sasaran audiens secara spesifik — berdasarkan lokasi geografis, demografi (usia, status pernikahan orang tua), minat dan perilaku (ketertarikan pada pendidikan agama), maupun kata kunci pencarian spesifik seperti "sekolah islam terbaik di [nama kota]".</p>
  <p>Setelah iklan berjalan, hasilnya perlu terus dianalisis. Di Google Ads, metrik pentingnya mencakup impressions (jumlah tayangan), click-through rate/CTR (persentase klik), cost per click/CPC (biaya per klik), dan conversion rate (persentase pengunjung yang mengisi formulir pendaftaran). Di Facebook Ads, metrik pentingnya mencakup reach dan impressions (jangkauan dan tayangan), engagement (interaksi seperti like dan komentar), lead generation (pengumpulan data kontak calon siswa), serta return on ad spend/ROAS (perbandingan pendapatan dengan biaya iklan). Berdasarkan hasil analisis ini, sekolah dapat mengoptimalkan iklan — mengganti gambar, menyesuaikan kata kunci, atau mengubah penargetan audiens — agar kampanye semakin efektif.</p>

  <h4>D. Media Sosial sebagai Sarana Promosi Sekolah</h4>
  <p>Setiap platform media sosial memiliki karakteristik dan audiens berbeda yang perlu dipilih sesuai tujuan pemasaran sekolah — Instagram unggul untuk konten visual, Facebook efektif untuk membangun komunitas dan diskusi mendalam dengan orang tua, sementara YouTube sangat efektif untuk konten audiovisual seperti video profil sekolah, testimoni, dan rekaman acara wisuda atau seminar yang menggambarkan suasana dan budaya sekolah secara lebih mendalam. Agar promosi berhasil, konten yang dibagikan harus mengundang keterlibatan dan partisipasi audiens — konten visual berupa foto dan video kegiatan nyata di sekolah umumnya paling efektif menarik perhatian, dilengkapi elemen interaktif seperti polling atau tanya jawab yang mendorong audiens untuk terlibat aktif, bukan hanya menjadi penonton pasif.</p>

  <h4>E. Membuat Kampanye Pemasaran yang Efektif</h4>
  <p>Kampanye pemasaran yang terencana baik sering memanfaatkan momentum tertentu. Kampanye berdasarkan musim, seperti menjelang tahun ajaran baru atau hari besar keagamaan, bisa menjadi momen tepat meluncurkan promosi "Pendaftaran Siswa Baru" lengkap dengan penawaran menarik. Kampanye berdasarkan event sekolah, seperti lomba akademik, wisuda, atau ulang tahun sekolah, juga membuka kesempatan mengajak audiens berpartisipasi lewat promosi di berbagai kanal. Strategi lain yang efektif adalah berkolaborasi dengan influencer atau tokoh pendidikan — guru atau alumni sukses dapat memperluas eksposur dan membangun kepercayaan lewat testimoni atau konten bersama, sementara mengundang tokoh pendidikan sebagai narasumber seminar dapat memperkuat citra sekolah sekaligus membuka peluang perhatian media dan peningkatan jumlah pendaftar.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari berbagai strategi pemasaran digital (SEO, Google My Business, iklan berbayar, media sosial, kampanye musiman) yang dibahas di bab ini, strategi mana yang sudah dijalankan sekolah Anda, dan mana yang paling berpotensi mendatangkan hasil signifikan bila mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa yang dimaksud dengan SEO (Search Engine Optimization)?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Serangkaian praktik untuk meningkatkan peringkat website di mesin pencari seperti Google agar lebih mudah ditemukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sebuah aplikasi untuk mencatat kehadiran siswa secara otomatis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metode pembayaran SPP secara online melalui bank</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menjalankan iklan Google Ads namun tidak pernah memeriksa metrik seperti click-through rate atau conversion rate setelah iklan berjalan. Berdasarkan Bab 14, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena iklan berbayar otomatis berhasil tanpa perlu dipantau</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah kehilangan kesempatan untuk mengoptimalkan iklan berdasarkan data nyata, sehingga sulit mengetahui apakah anggaran iklan digunakan secara efektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metrik iklan hanya relevan untuk perusahaan besar, bukan untuk sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memanfaatkan momentum menjelang tahun ajaran baru untuk menarik pendaftar sebanyak mungkin. Berdasarkan Bab 14, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu tanpa melakukan promosi apa pun karena calon siswa pasti akan datang dengan sendirinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merancang kampanye pemasaran bertema "Pendaftaran Siswa Baru" yang memanfaatkan momentum musiman, dipadukan dengan promosi di media sosial dan SEO</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh promosi sampai tahun ajaran baru benar-benar dimulai</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab14" onclick="markDone('bab14')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab14">✓ Bab 14 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab15: `
<p class="eyebrow reveal">Bab 15</p>
<h2 class="reveal">Kemitraan dan Jaringan Kerjasama</h2>
<p class="lede reveal">Sekolah Islam tidak bisa berkembang sendirian — bab ini membahas pentingnya kemitraan bagi citra sekolah, bagaimana kerja sama dengan lembaga pendidikan lain dijalin, bagaimana kemitraan dengan dunia usaha dan komunitas dibangun, serta bagaimana jaringan dengan pemerintah dapat memperkuat keberlanjutan sekolah.</p>

<div class="card reveal">
  <h4>A. Pentingnya Kemitraan dalam Meningkatkan Citra Sekolah</h4>
  <p>Kemitraan yang dijalin dengan pihak yang memiliki visi sejalan akan memberi manfaat jangka panjang, tidak hanya bagi sekolah tetapi juga siswa, guru, dan masyarakat. Sekolah Islam dapat membangun empat jenis kemitraan: dengan lembaga pendidikan lain (berbagi sumber daya lewat pelatihan guru dan seminar), dengan organisasi keagamaan seperti ormas Islam atau pesantren (memperkuat nilai keislaman lewat pelatihan spiritual dan program dakwah), dengan pemerintah (dukungan regulasi, dana, beasiswa), serta dengan dunia usaha (sponsorship acara, pengembangan fasilitas, program magang siswa).</p>
  <p>Kemitraan yang baik membawa empat manfaat jangka panjang: meningkatkan reputasi sekolah (kerja sama dengan lembaga bereputasi membuat sekolah lebih mudah menarik calon siswa dan kepercayaan masyarakat), memperluas jaringan dan sumber daya (akses ke fasilitas, pelatihan, dan beasiswa), mendukung program sekolah (kurikulum, ekstrakurikuler, kegiatan sosial lebih mudah terwujud), serta meningkatkan kepercayaan orang tua terhadap kualitas pendidikan yang diberikan sekolah.</p>

  <h4>B. Menjalin Kerjasama dengan Lembaga Pendidikan Lain</h4>
  <p>Kolaborasi dengan universitas atau lembaga pelatihan adalah langkah strategis meningkatkan kualitas pendidikan, mencakup pelatihan guru (metode pengajaran modern, penggunaan teknologi, manajemen kelas) serta pengembangan kurikulum bersama ahli akademik agar tetap relevan dengan kebutuhan zaman, termasuk pembelajaran berbasis teknologi. Kolaborasi ini juga dapat diwujudkan lewat program kunjungan ke universitas yang memberi siswa wawasan tentang dunia perguruan tinggi sekaligus memotivasi mereka melanjutkan pendidikan, serta program magang yang membekali siswa pengalaman kerja langsung, keterampilan praktis, dan jejaring profesional untuk masa depan.</p>

  <h4>C. Kemitraan dengan Perusahaan dan Komunitas</h4>
  <p>Kemitraan dengan dunia usaha dapat berupa sponsor dan donasi yang meningkatkan fasilitas sekolah (perbaikan gedung, alat belajar modern, laboratorium), mendukung pembelajaran (bahan ajar terbaru, software pendidikan), serta menyediakan beasiswa bagi siswa berprestasi dari keluarga kurang mampu untuk mendukung pemerataan pendidikan. Selain itu, program Corporate Social Responsibility (CSR) perusahaan dapat dimanfaatkan sekolah untuk pendanaan pengembangan kurikulum dan pelatihan guru, kegiatan sosial seperti bantuan bagi keluarga kurang mampu, hingga kemitraan jangka panjang seperti pelatihan keterampilan siswa dan seminar pengembangan karier — kerja sama yang tidak hanya meningkatkan kualitas pendidikan tetapi juga mempererat hubungan sekolah dengan dunia usaha dan masyarakat sekitar.</p>

  <h4>D. Membangun Jaringan dengan Pemerintah dan Lembaga Pendidikan Nasional</h4>
  <p>Hubungan dengan pemerintah membuka peluang dukungan pendanaan, pelatihan, dan akses kebijakan terkini. Sekolah dapat memanfaatkan dana bantuan dan subsidi seperti BOS untuk meringankan beban operasional dan mendukung transformasi digital, mengikuti pelatihan guru dari program pemerintah, terlibat dalam proyek pendidikan nasional seperti pengembangan kurikulum berbasis teknologi, serta memperoleh bantuan pengembangan infrastruktur seperti renovasi bangunan dan peningkatan jaringan internet.</p>
  <p>Sekolah juga perlu menjaga komunikasi aktif dengan dinas pendidikan setempat — memastikan akses informasi kebijakan terbaru seperti kurikulum merdeka, berpartisipasi dalam forum dan workshop yang memperluas jaringan dan pengetahuan, serta membangun dukungan dan reputasi yang memudahkan sekolah memperoleh solusi atas masalah operasional dan akses pada berbagai bantuan serta fasilitas dari pemerintah di masa mendatang.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat jenis kemitraan (lembaga pendidikan lain, organisasi keagamaan, pemerintah, dunia usaha) yang dibahas di bab ini, kemitraan mana yang paling belum dijajaki sekolah Anda — dan langkah awal apa yang bisa mulai diambil untuk merintisnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja empat jenis kemitraan yang dapat dibangun sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Lembaga pendidikan lain, organisasi keagamaan, pemerintah, dan dunia usaha</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya kemitraan dengan sekolah lain yang berlokasi persis bersebelahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemitraan tidak diperlukan sama sekali karena sekolah harus mandiri sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin membekali siswa dengan pengalaman kerja nyata dan jejaring profesional sebelum lulus, sekaligus memotivasi mereka melanjutkan ke perguruan tinggi. Berdasarkan Bab 15, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang siswa berinteraksi dengan pihak luar sekolah sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjalin kerja sama dengan universitas atau lembaga pelatihan lewat program kunjungan kampus dan program magang siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu siswa lulus terlebih dahulu baru memikirkan pengalaman kerja</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah swasta kesulitan membiayai renovasi gedung dan peningkatan jaringan internet untuk mendukung pembelajaran digital. Berdasarkan Bab 15, sumber dukungan yang paling relevan untuk kebutuhan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan kebutuhan tersebut karena dianggap tidak mungkin diatasi tanpa dana pribadi yayasan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan program bantuan dan subsidi pemerintah seperti BOS serta bantuan pengembangan infrastruktur yang tersedia bagi sekolah swasta</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menaikkan SPP siswa secara drastis tanpa mempertimbangkan sumber dukungan lain</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab15" onclick="markDone('bab15')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab15">✓ Bab 15 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab16: `
<p class="eyebrow reveal">Bab 16</p>
<h2 class="reveal">Peran Alumni dalam Memperkuat Citra Sekolah</h2>
<p class="lede reveal">Alumni adalah aset yang sering terlupakan padahal sangat berharga — bab ini membahas mengapa komunitas alumni penting bagi sekolah Islam, bagaimana reuni dan acara alumni dirancang, bagaimana kisah sukses mereka dimanfaatkan sebagai alat pemasaran, serta bagaimana jaringan alumni dibangun secara solid dan berkelanjutan.</p>

<div class="card reveal">
  <h4>A. Pentingnya Komunitas Alumni untuk Sekolah Islam</h4>
  <p>Alumni bukan sekadar bagian dari sejarah sekolah, tetapi berpotensi memberi dukungan nyata berupa ide, materi, dan pengaruh sosial. Sebagai duta sekolah, alumni yang sukses dapat mempromosikan sekolah lewat cerita inspiratif, berperan dalam kegiatan sekolah sebagai pembicara seminar atau pelatihan, serta membuka jaringan yang membawa peluang kerja sama, dukungan dana, atau program magang bagi siswa. Hubungan ini perlu dijaga berkelanjutan lewat platform komunikasi (grup media sosial, website alumni, newsletter), reuni dan kegiatan rutin yang mempererat hubungan, program mentoring di mana alumni membantu siswa merencanakan karier, penghargaan bagi alumni berprestasi untuk memperkuat ikatan emosional, serta pelibatan alumni dalam penggalangan dana untuk pembangunan sekolah.</p>

  <h4>B. Mengadakan Reuni dan Acara Khusus Alumni</h4>
  <p>Reuni yang menarik dapat dirancang lewat tema relevan (misalnya "Alumni Berbagi Pengalaman di Dunia Kerja"), mengundang pembicara inspiratif dari kalangan alumni sukses, menyediakan program menarik seperti pertunjukan seni atau pameran karya, menyusun jadwal yang efisien agar ada cukup waktu bersosialisasi, serta memilih lokasi yang nyaman dan mudah diakses. Selain reuni, sekolah dapat mengadakan seminar atau diskusi bersama alumni dengan topik relevan seperti "Pengembangan Karir di Era Digital", melibatkan alumni sebagai pembicara dan siswa sebagai peserta aktif lewat sesi tanya jawab, dipromosikan luas lewat media sosial dan grup alumni, serta idealnya digandengkan dengan kemitraan strategis bersama lembaga lain untuk menambah nilai acara.</p>

  <h4>C. Memanfaatkan Kisah Sukses Alumni sebagai Alat Pemasaran</h4>
  <p>Kisah sukses alumni mampu menginspirasi sekaligus membuktikan kualitas pendidikan sekolah secara nyata. Sekolah dapat menghubungkan siswa dengan alumni sebagai mentor untuk bimbingan karier, mengadakan pertemuan alumni dengan orang tua calon siswa untuk meyakinkan mereka tentang kualitas sekolah, memasukkan kisah alumni ke dalam materi pemasaran seperti brosur dan video promosi, serta menyelenggarakan "Alumni Day" sebagai acara khusus berbagi cerita dengan siswa dan orang tua. Cara ini tidak hanya meningkatkan reputasi sekolah, tetapi juga membuat alumni yang terlibat merasa dihargai dan semakin peduli terhadap perkembangan sekolah.</p>

  <h4>D. Membangun Jaringan Alumni yang Solid dan Terorganisir</h4>
  <p>Jaringan alumni yang kuat dapat dibangun lewat komunitas digital di platform seperti Facebook Groups, LinkedIn, atau WhatsApp — mengundang alumni lewat email dan media sosial, mengadakan kegiatan rutin seperti webinar atau sesi berbagi pengalaman, menjaga komunikasi teratur lewat newsletter, serta menciptakan suasana kebersamaan yang mendorong alumni tetap aktif berkontribusi. Sekolah juga dapat mengembangkan program beasiswa dan donasi alumni — mengidentifikasi alumni potensial lewat survei, merancang program beasiswa yang transparan dengan kriteria jelas, membangun dana abadi untuk kebutuhan berkelanjutan, menyediakan opsi donasi terstruktur (sekali bayar atau berkala), serta menghargai kontribusi alumni lewat sertifikat atau pencantuman nama di papan penghargaan — sehingga hubungan sekolah dan alumni tumbuh menjadi kemitraan jangka panjang yang saling menguntungkan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda sudah memiliki komunitas alumni yang aktif dan terorganisir seperti dibahas di bab ini, atau hubungan dengan alumni masih terputus setelah mereka lulus? Langkah pertama apa yang bisa mulai diambil untuk merintis atau menghidupkan kembali jaringan alumni?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa peran alumni sebagai "duta sekolah"?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mempromosikan sekolah lewat cerita inspiratif, berperan dalam kegiatan sekolah, dan membuka jaringan bagi sekolah dan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan tugas kepala sekolah dalam mengelola operasional sehari-hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya berkewajiban membayar iuran alumni tanpa keterlibatan lain</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin meyakinkan calon orang tua siswa tentang kualitas pendidikannya, tetapi hanya mengandalkan brosur berisi data akademik tanpa cerita nyata dari lulusannya. Berdasarkan Bab 16, apa yang sebaiknya ditambahkan untuk memperkuat strategi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu ditambahkan apa pun karena data akademik sudah cukup meyakinkan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan kisah sukses dan testimoni alumni sebagai bukti nyata kualitas pendidikan, baik dalam materi pemasaran maupun pertemuan langsung dengan calon orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi jumlah data akademik dalam brosur agar terlihat lebih sederhana</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin membangun dana abadi untuk mendukung siswa kurang mampu secara berkelanjutan, dengan melibatkan para lulusannya. Berdasarkan Bab 16, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu alumni datang dengan sendirinya menawarkan donasi tanpa upaya apa pun dari sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengidentifikasi alumni potensial, merancang program beasiswa dan donasi yang transparan, serta menghargai kontribusi mereka secara terbuka</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa seluruh alumni untuk membayar iuran wajib tanpa transparansi penggunaan dana</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab16" onclick="markDone('bab16')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab16">✓ Bab 16 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab17: `
<p class="eyebrow reveal">Bab 17</p>
<h2 class="reveal">Event dan Aktivitas Sekolah yang Menarik Publik</h2>
<p class="lede reveal">Acara sekolah yang dikemas baik bukan hanya hiburan, melainkan sarana strategis membangun citra — bab ini membahas bagaimana mengorganisir acara yang menarik daya tarik, bagaimana mempromosikannya lewat media sosial dan website, serta bagaimana mengevaluasi dampaknya terhadap citra sekolah.</p>

<div class="card reveal">
  <h4>A. Mengorganisir Acara Sekolah yang Dapat Meningkatkan Daya Tarik</h4>
  <p>Open house dan penerimaan siswa baru perlu direncanakan matang: memilih waktu yang tepat (akhir pekan atau libur sekolah, bertepatan jadwal PPDB), menyiapkan informasi menarik tentang visi-misi dan keunggulan sekolah, menampilkan kegiatan sekolah lewat pertunjukan seni atau pameran karya siswa, menyediakan sesi tanya jawab langsung dengan guru dan staf, serta mempromosikannya lewat media sosial dan website agar jangkauannya lebih luas.</p>
  <p>Selain open house, sekolah dapat mengadakan kompetisi atau pameran potensi siswa di berbagai bidang — seni, sains, olahraga, atau debat — untuk menampilkan bakat siswa kepada publik, melibatkan media dan tokoh masyarakat untuk meningkatkan eksposur, memberikan penghargaan yang memotivasi siswa, serta menciptakan suasana yang inklusif dan menyenangkan bagi semua peserta. Acara semacam ini tidak hanya menggali potensi siswa, tetapi juga memperluas jangkauan citra sekolah lewat promosi media sosial dan menarik perhatian calon siswa baru.</p>

  <h4>B. Mempromosikan Event Melalui Media Sosial dan Website</h4>
  <p>Promosi event yang efektif memerlukan konten visual menarik (poster, video, infografis yang mencerminkan tema acara dan identitas sekolah), hashtag relevan yang meningkatkan jangkauan (misalnya #OpenHouseSekolahIslam), countdown acara untuk menciptakan rasa urgensi, link pendaftaran online langsung di setiap postingan, serta giveaway bagi pendaftar awal untuk mendorong partisipasi lebih cepat.</p>
  <p>Kolaborasi dengan influencer juga dapat memperkuat promosi — memilih influencer yang relevan dengan citra sekolah (pendidikan atau parenting), mengundang mereka hadir langsung di acara dan berbagi pengalaman, memanfaatkan testimoni mereka untuk meningkatkan kepercayaan audiens, membuat konten bersama seperti live streaming atau wawancara, serta memberikan insentif khusus bagi pengikut influencer untuk mendorong partisipasi lebih luas. Dengan strategi ini, promosi acara sekolah dapat menjangkau audiens yang jauh lebih luas dibanding metode konvensional.</p>

  <h4>C. Evaluasi Kegiatan dan Dampaknya terhadap Citra Sekolah</h4>
  <p>Keberhasilan sebuah acara perlu diukur lewat survei kepuasan peserta (materi, fasilitas, pengalaman keseluruhan), wawancara langsung untuk wawasan yang lebih mendalam, analisis tingkat partisipasi sebagai indikator keberhasilan, serta pemantauan ulasan di media sosial untuk melihat bagaimana acara diterima publik. Evaluasi ini perlu dilanjutkan dengan menganalisis dampak jangka panjangnya — memantau apakah ada peningkatan pendaftaran siswa baru setelah acara, mengecek peningkatan interaksi di media sosial dan website, mengevaluasi peningkatan citra dan kepercayaan publik, serta memperhatikan feedback dari media atau mitra acara yang memberi gambaran dampak secara lebih luas. Evaluasi yang tepat memberikan wawasan berharga bagi sekolah untuk terus meningkatkan kualitas acara berikutnya dan memperkuat citra sekolah secara berkelanjutan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda sudah rutin mengevaluasi dampak acara-acara yang diselenggarakan terhadap citra dan jumlah pendaftaran siswa baru, atau acara hanya diadakan sekali jalan tanpa evaluasi lanjutan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa saja elemen penting dalam merancang open house dan penerimaan siswa baru yang efektif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memilih waktu yang tepat, menyiapkan informasi menarik, menampilkan kegiatan sekolah, menyediakan sesi tanya jawab, dan mempromosikan lewat media sosial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengadakan acara secara mendadak tanpa promosi apa pun agar terkesan eksklusif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatasi acara hanya untuk siswa yang sudah terdaftar, tanpa mengundang calon siswa baru</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah mengadakan kompetisi sains yang meriah, tetapi setelah acara selesai tidak pernah memeriksa apakah acara tersebut berdampak pada jumlah pendaftaran siswa baru atau persepsi publik terhadap sekolah. Berdasarkan Bab 17, apa yang terlewat dari proses ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang terlewat, karena acara yang meriah sudah pasti berhasil tanpa perlu evaluasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Evaluasi dampak jangka panjang, seperti pemantauan pendaftaran siswa baru, interaksi media sosial, dan peningkatan citra sekolah setelah acara berlangsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pemilihan hadiah kompetisi yang dianggap kurang mahal</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memperluas jangkauan promosi acara open house-nya melampaui lingkaran orang tua siswa yang sudah ada. Berdasarkan Bab 17, strategi paling tepat yang bisa dicoba adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya menempelkan pengumuman di papan mading sekolah tanpa promosi digital</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan konten visual menarik, hashtag relevan, dan kolaborasi dengan influencer pendidikan/parenting untuk menjangkau audiens yang lebih luas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan promosi digital karena dianggap tidak efektif untuk acara sekolah</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab17" onclick="markDone('bab17')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab17">✓ Bab 17 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab18: `
<p class="eyebrow reveal">Bab 18</p>
<h2 class="reveal">Peluang dan Inovasi dalam Manajemen Sekolah Islam</h2>
<p class="lede reveal">Sebagai penutup bagian isi, bab ini mengajak melihat ke depan — mengenali tren pendidikan dan teknologi terbaru, menjajaki peluang bisnis dan kerja sama yang dapat dijalankan sekolah Islam, serta merancang inovasi dalam pelayanan siswa dan orang tua agar sekolah terus relevan dan berkembang di era digital.</p>

<div class="card reveal">
  <h4>A. Mengenal Tren Pendidikan dan Teknologi Terbaru</h4>
  <p>Untuk menarik minat publik, sekolah Islam dapat memanfaatkan platform pembelajaran digital seperti Google Classroom atau Moodle untuk materi yang fleksibel, video pembelajaran yang menjelaskan materi secara lebih menarik, aplikasi interaktif seperti Kahoot atau Quizizz yang membuat pembelajaran lebih menyenangkan, serta pembelajaran berbasis proyek yang mendorong kolaborasi siswa lewat media digital.</p>
  <p>Di sisi pengelolaan, tren inovasi mencakup pembelajaran personalisasi yang menyesuaikan materi dengan kebutuhan tiap siswa, sistem manajemen sekolah digital untuk mengelola data, absensi, dan laporan perkembangan siswa, edukasi berbasis AI untuk analisis data dan rekomendasi materi, pembelajaran jarak jauh dan hybrid untuk memperluas akses, aplikasi mobile yang memudahkan komunikasi sekolah-guru-siswa-orang tua, serta program pengembangan profesional guru lewat pelatihan online. Dengan menerapkan tren ini, sekolah Islam dapat menciptakan lingkungan belajar yang lebih menarik, efisien, dan tetap kompetitif di era digital.</p>

  <h4>B. Peluang Bisnis dan Kerja Sama yang Dapat Dijalankan oleh Sekolah Islam</h4>
  <p>Sekolah Islam dapat membuka layanan pendidikan tambahan berbasis digital, seperti kelas online untuk bahasa Arab atau Tahfiz Al-Qur'an yang dapat diikuti siswa dari dalam maupun luar negeri, pelatihan keterampilan digital bagi guru dan siswa, webinar dan kelas terbuka tentang manajemen sekolah Islam atau parenting Islami bagi masyarakat umum, serta e-learning berbasis LMS bagi siswa yang tinggal di daerah terpencil atau kesulitan hadir secara fisik.</p>
  <p>Selain itu, sekolah dapat menjalin kerja sama dengan lembaga sosial untuk memperluas dampak pendidikan — menyediakan program pendidikan gratis bagi anak kurang mampu, pelatihan keterampilan seperti komputer dan kewirausahaan bagi masyarakat, program pengabdian masyarakat untuk memperbaiki fasilitas umum, edukasi kesehatan dan kesadaran sosial lewat seminar, serta pemberdayaan ekonomi lewat bazar amal. Lewat kedua peluang ini, sekolah Islam tidak hanya menciptakan manfaat bagi siswanya, tetapi juga memperkuat posisinya sebagai lembaga yang peduli dan berkontribusi nyata bagi kemajuan umat.</p>

  <h4>C. Inovasi dalam Pelayanan Siswa dan Orang Tua</h4>
  <p>Pelayanan yang baik menjadi kunci lingkungan sekolah yang harmonis dan produktif. Sekolah dapat menghadirkan portal informasi akademik digital yang memudahkan siswa dan orang tua memantau nilai, jadwal, dan kehadiran secara real-time, dilengkapi program pengembangan bakat dan ekstrakurikuler digital yang mengasah kemampuan siswa di luar pelajaran akademik, termasuk melatih jiwa kepemimpinan mereka.</p>
  <p>Bagi orang tua, sekolah dapat mengadakan pelatihan dan seminar untuk membantu mereka mendukung belajar anak di rumah, menangani perilaku anak, dan memahami pentingnya pendidikan karakter, dilengkapi sesi konsultasi digital di mana orang tua bisa berdiskusi langsung dengan guru atau konselor sekolah tentang kondisi akademik maupun sosial anak mereka. Sekolah juga dapat menghadirkan program mentoring dan pendampingan, di mana seorang mentor — guru atau alumni — mendampingi siswa yang memerlukan perhatian lebih dalam proses belajar sekaligus membangun karakter dan motivasi mereka mencapai tujuan. Dengan seluruh inovasi ini, sekolah Islam benar-benar siap melangkah maju sebagai lembaga pendidikan yang unggul secara akademik, kuat secara karakter, dan adaptif terhadap perkembangan zaman.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari seluruh tren dan peluang yang dibahas di bab penutup ini (teknologi pembelajaran, layanan e-learning, kerja sama sosial, inovasi pelayanan), peluang mana yang paling realistis mulai dijajaki sekolah Anda dalam satu tahun ke depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa contoh peluang bisnis dan kerja sama yang bisa dijalankan sekolah Islam di era digital?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Layanan pendidikan tambahan/e-learning dan kerja sama dengan lembaga sosial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menutup seluruh program ekstrakurikuler untuk menghemat anggaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi jumlah guru untuk meningkatkan efisiensi biaya operasional</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam di daerah terpencil ingin menawarkan kelas Tahfiz Al-Qur'an kepada siswa dari luar kota yang tidak bisa hadir secara fisik. Berdasarkan Bab 18, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menolak calon siswa dari luar kota karena dianggap merepotkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membuka kelas online atau e-learning berbasis LMS untuk Tahfiz Al-Qur'an yang dapat diakses siswa dari berbagai lokasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan program Tahfiz sepenuhnya karena dianggap sulit dijangkau semua siswa</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menerima banyak keluhan orang tua yang kesulitan berdiskusi dengan guru tentang perkembangan akademik dan sosial anak mereka karena keterbatasan waktu tatap muka. Berdasarkan Bab 18, solusi inovatif yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan keluhan tersebut karena dianggap bukan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyediakan sesi konsultasi digital yang memungkinkan orang tua berdiskusi dengan guru atau konselor sekolah kapan saja tanpa harus selalu bertemu langsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang orang tua menghubungi sekolah untuk urusan apa pun di luar jam sekolah</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab18" onclick="markDone('bab18')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab18">✓ Bab 18 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

asesmen: `
<p class="eyebrow reveal">Evaluasi</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab, dari transformasi digital hingga inovasi manajemen sekolah Islam. Jawaban tidak akan langsung diperlihatkan — jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah membeli banyak tablet dan memasang WiFi di seluruh kelas, namun guru tidak pernah dilatih menggunakannya dan tetap mengajar dengan metode ceramah seperti biasa. Berdasarkan Bab 1, apa yang paling terabaikan dari proses ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Fokus pada hasil belajar siswa dan pelatihan guru, agar teknologi benar-benar mengubah cara mengajar, bukan sekadar tersedia secara fisik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketersediaan anggaran yang besar untuk membeli perangkat semahal mungkin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kecepatan koneksi internet semata, tanpa perlu memperhatikan aspek lain</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang kepala sekolah menggunakan dana BOS untuk keperluan pribadi tanpa sepengetahuan yayasan, meski laporannya terlihat rapi di atas kertas. Berdasarkan Bab 2, prinsip apa yang paling jelas dilanggar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Profesionalisme, karena laporannya kurang rapi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Amanah, karena menyalahgunakan kepercayaan dan sumber daya yang seharusnya dikelola untuk kepentingan bersama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ikhlas, karena terlalu banyak bekerja tanpa pamrih</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah yayasan merumuskan visi-misi sekolah hanya lewat rapat tertutup pengurus, tanpa melibatkan guru maupun orang tua. Berdasarkan Bab 3, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena visi-misi cukup ditentukan pengurus yayasan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi berisiko kurang mencerminkan kebutuhan nyata seluruh warga sekolah dan lemah dari sisi komitmen bersama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi otomatis menjadi lebih inspiratif karena dirumuskan secara tertutup</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menetapkan strategi utama "pengembangan kurikulum berbasis digital" dalam Renstra-nya, tetapi tidak pernah merinci langkah taktis maupun indikator keberhasilannya. Berdasarkan Bab 4, apa dampaknya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak berdampak apa pun karena strategi utama saja sudah cukup</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelaksanaan strategi menjadi sulit dipantau dan diukur keberhasilannya karena tidak ada langkah konkret maupun tolok ukur yang jelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah otomatis akan mencapai tujuannya tanpa perlu evaluasi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru matematika hanya fokus mengajarkan rumus dan latihan soal tanpa pernah menyisipkan nilai karakter apa pun. Berdasarkan Bab 5, prinsip manajemen kurikulum apa yang paling terabaikan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Fleksibilitas dan inovasi metode pengajaran semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Integrasi ilmu dan akhlak, karena mata pelajaran seharusnya tidak hanya mengasah kecerdasan intelektual tetapi juga membangun karakter</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterkaitan dengan kebutuhan masyarakat semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin memudahkan orang tua memantau kegiatan ekstrakurikuler anak mereka tanpa harus datang langsung setiap saat. Berdasarkan Bab 6, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan sistem manajemen kegiatan siswa berbasis digital yang memuat jadwal dan partisipasi secara transparan dan real-time</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melarang siswa mengikuti kegiatan ekstrakurikuler apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meminta orang tua menelepon sekolah setiap hari</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah hanya menilai kinerja guru dari nilai ujian siswa semata, tanpa memperhatikan cara mengajar atau penerapan nilai Islam dalam kesehariannya. Berdasarkan Bab 7, apa kelemahan pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada kelemahan, karena nilai ujian siswa adalah satu-satunya indikator yang valid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian menjadi tidak komprehensif karena mengabaikan indikator penting lain seperti kualitas pengajaran, kompetensi sosial, dan penerapan nilai Islam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian menjadi terlalu rumit dan sebaiknya dihapuskan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah masih mencatat seluruh inventaris di buku tulis manual, sehingga sering terjadi data ganda dan sulit melacak kondisi aset terkini. Berdasarkan Bab 8, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah buku catatan manual agar lebih lengkap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Beralih ke sistem manajemen aset digital dengan kode QR/RFID yang memungkinkan pencatatan dan pelacakan lebih akurat serta real-time</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh proses pencatatan inventaris</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Bendahara sebuah sekolah kewalahan membuat laporan laba-rugi dan arus kas secara manual setiap bulan, sehingga sering terlambat dan rawan kesalahan hitung. Berdasarkan Bab 9, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan pembuatan laporan keuangan sampai bendahara baru direkrut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan aplikasi keuangan digital yang dapat membuat laporan laba-rugi, neraca, dan arus kas secara otomatis dan lebih akurat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meminta orang tua siswa menyusun laporan keuangan sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang kepala sekolah langsung memutuskan sanksi bagi seorang siswa tanpa mendengarkan penjelasan siswa maupun guru yang terlibat, hanya berdasarkan laporan sepihak. Berdasarkan Bab 10, prinsip Islam apa yang paling jelas dilanggar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesabaran, karena keputusan diambil dengan sangat cepat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keadilan dan musyawarah, karena tidak semua pihak diberi kesempatan yang sama untuk menyampaikan pendapat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Perdamaian, karena sanksi tegas selalu identik dengan penyelesaian damai</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah dengan anggaran terbatas ingin mulai menerapkan pembelajaran berbasis digital tanpa harus membeli perangkat keras baru yang mahal. Berdasarkan Bab 11, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunda rencana digitalisasi tanpa batas waktu sampai anggaran mencukupi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memanfaatkan platform pembelajaran berbasis cloud atau open-source yang terjangkau, serta menjajaki kolaborasi dengan pihak luar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksakan pembelian perangkat keras mahal meski mengorbankan anggaran operasional lain</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menghadapi isu negatif yang beredar di media sosial, namun pihak Humas hanya diam tanpa klarifikasi selama berhari-hari. Berdasarkan Bab 12, apa risiko utama dari sikap ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena isu negatif akan hilang dengan sendirinya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Isu berisiko berkembang lebih besar dan merusak kepercayaan publik, karena kecepatan merespons adalah prinsip utama manajemen krisis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah otomatis akan mendapat simpati publik karena terlihat tenang</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menggunakan warna dan logo yang berbeda-beda di website, brosur, dan media sosialnya tanpa panduan desain yang seragam. Berdasarkan Bab 13, apa dampak paling mungkin dari situasi ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak, karena variasi desain dianggap lebih kreatif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesan profesional dan keseragaman identitas sekolah menjadi lemah, sehingga sekolah lebih sulit dikenali secara konsisten</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah otomatis akan lebih dipercaya karena terlihat fleksibel</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menjalankan iklan Google Ads namun tidak pernah memeriksa metrik seperti click-through rate atau conversion rate. Berdasarkan Bab 14, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena iklan berbayar otomatis berhasil tanpa perlu dipantau</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah kehilangan kesempatan mengoptimalkan iklan berdasarkan data nyata, sehingga sulit mengetahui efektivitas anggaran iklan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metrik iklan hanya relevan untuk perusahaan besar, bukan sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah swasta kesulitan membiayai renovasi gedung dan peningkatan jaringan internet untuk pembelajaran digital. Berdasarkan Bab 15, sumber dukungan yang paling relevan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan kebutuhan tersebut karena dianggap tidak mungkin diatasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memanfaatkan program bantuan dan subsidi pemerintah seperti BOS serta bantuan pengembangan infrastruktur bagi sekolah swasta</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menaikkan SPP siswa secara drastis tanpa pertimbangan lain</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin membangun dana abadi untuk mendukung siswa kurang mampu secara berkelanjutan, dengan melibatkan para lulusannya. Berdasarkan Bab 16, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu alumni datang dengan sendirinya menawarkan donasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengidentifikasi alumni potensial, merancang program beasiswa dan donasi yang transparan, serta menghargai kontribusi mereka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksa seluruh alumni membayar iuran wajib tanpa transparansi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah mengadakan kompetisi sains yang meriah, tetapi tidak pernah memeriksa apakah acara tersebut berdampak pada pendaftaran siswa baru atau persepsi publik. Berdasarkan Bab 17, apa yang terlewat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang terlewat, karena acara meriah sudah pasti berhasil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi dampak jangka panjang, seperti pemantauan pendaftaran siswa baru dan peningkatan citra sekolah setelah acara</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pemilihan hadiah kompetisi yang dianggap kurang mahal</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam di daerah terpencil ingin menawarkan kelas Tahfiz Al-Qur'an kepada siswa dari luar kota yang tidak bisa hadir secara fisik. Berdasarkan Bab 18, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menolak calon siswa dari luar kota karena dianggap merepotkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membuka kelas online atau e-learning berbasis LMS untuk Tahfiz Al-Qur'an yang dapat diakses dari berbagai lokasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan program Tahfiz sepenuhnya</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah Islam baru merintis transformasi digital dan ingin memulai dari langkah paling mendasar sebelum memikirkan teknologi canggih. Berdasarkan keseluruhan isi buku ini, fondasi apa yang paling perlu dipastikan lebih dulu?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi manajemen sekolah tercanggih yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun asesmen 20 soal terlebih dahulu sebelum program apa pun dijalankan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi yang jelas berlandaskan nilai Islam, prinsip amanah-ihsan-profesionalisme dalam pengelolaannya, serta kesiapan SDM sebelum investasi teknologi besar-besaran</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah yayasan ingin memperkuat citra sekolahnya secara menyeluruh — mulai dari hubungan masyarakat, branding, pemasaran digital, kemitraan, hingga peran alumni. Berdasarkan keseluruhan Bab 12-16 dalam buku ini, benang merah yang menghubungkan semua bagian "GROOMING" tersebut adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun komunikasi yang konsisten, transparan, dan bernilai Islami kepada seluruh pemangku kepentingan agar citra dan kepercayaan publik terhadap sekolah terus menguat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengejar jumlah pengikut media sosial sebanyak mungkin tanpa memperhatikan kualitas konten atau nilai yang disampaikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghabiskan seluruh anggaran sekolah untuk iklan berbayar tanpa mempertimbangkan strategi lain</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
