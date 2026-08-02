/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Manajemen Guru di Sekolah Islam"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-manajemen-guru-sekolah-islam.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Analisis Faktor-Faktor Penyebab Kekurangan Guru Berkualitas</h2>
<p class="lede reveal">Sebelum merancang solusi, pimpinan sekolah Islam perlu memahami dengan jernih mengapa kekurangan guru berkualitas terus berulang — bukan sebagai satu penyebab tunggal, melainkan sebagai jalinan faktor internal sekolah, faktor eksternal di luar kendali sekolah, serta dampak nyata yang ditimbulkannya bila dibiarkan.</p>

<div class="card reveal">
  <h4>A. Faktor Internal Sekolah Islam</h4>
  <p>Penyebab pertama justru sering berasal dari dalam sekolah sendiri. Keterbatasan anggaran operasional adalah akar masalah yang paling sering muncul: dana yang minim membuat sekolah kesulitan menawarkan gaji yang kompetitif, sehingga banyak guru berpotensi memilih bekerja di tempat lain dengan imbalan lebih baik, sekaligus membuat sekolah tidak mampu mengalokasikan anggaran untuk pelatihan berkelanjutan maupun fasilitas pendukung seperti buku teks, alat bantu mengajar, dan perangkat teknologi. Ketika anggaran seret, sekolah perlu lebih kreatif mencari sumber daya tambahan — menjalin kemitraan dengan lembaga peduli pendidikan atau menggali potensi sumbangan dari masyarakat dan alumni.</p>
  <p>Persoalan kedua adalah manajemen yang tidak efektif dalam mengelola tenaga pendidik. Banyak sekolah Islam belum memiliki perencanaan sumber daya manusia yang matang — tidak jelas berapa guru yang dibutuhkan dan kualifikasi seperti apa — sehingga proses rekrutmen menjadi terburu-buru dan berujung pada pemilihan guru yang kurang tepat. Ditambah lagi minimnya program pengembangan profesional yang terstruktur, pengawasan kinerja yang lemah, serta komunikasi yang terbatas antara manajemen dan guru, kondisi ini membuat guru merasa terisolasi dan kurang termotivasi. Solusinya menuntut sekolah mengadopsi sistem manajerial yang lebih modern dan berbasis data, disertai budaya kolaborasi yang kuat antara guru dan pihak manajemen.</p>
  <p>Faktor ketiga, minimnya fasilitas pendukung pengajaran, turut menghambat proses belajar-mengajar yang efektif. Ruang kelas yang sempit dan kurang nyaman, alat bantu mengajar yang terbatas, akses teknologi pendidikan yang minim, serta ketiadaan fasilitas pendukung seperti laboratorium dan perpustakaan membuat guru kesulitan berkreasi dalam menyampaikan materi. Persoalan ini sering diperparah oleh keterbatasan dana untuk memelihara atau mengganti peralatan yang sudah rusak. Sekolah perlu mencari solusi kreatif seperti kerja sama dengan lembaga peduli pendidikan serta pengelolaan anggaran yang lebih efisien agar fasilitas belajar tetap memadai.</p>
  <p>Faktor internal keempat adalah tidak adanya sistem pelatihan berkelanjutan bagi guru. Program pengembangan profesional di banyak sekolah Islam hanya berlangsung sporadis, sering kali tidak relevan dengan kebutuhan konkret guru di kelas, dan terlalu bergantung pada pelatihan eksternal yang belum tentu memahami kekhasan nilai-nilai sekolah Islam. Ditambah keterbatasan waktu dan dana untuk pelatihan, serta minimnya evaluasi dan umpan balik terhadap kinerja guru, kompetensi mengajar pun cenderung stagnan dari waktu ke waktu tanpa ada upaya pembaruan yang konsisten.</p>

  <h4>B. Faktor Eksternal Sekolah Islam</h4>
  <p>Di luar sekolah, kebijakan pemerintah yang kurang mendukung sektor pendidikan Islam menjadi faktor eksternal pertama. Anggaran pendidikan nasional sering tidak merata menjangkau sekolah-sekolah Islam, terutama di daerah terpencil; guru pendidikan Islam pun jarang mendapat insentif khusus setara dengan guru sekolah umum, program pelatihan dan sertifikasi kurang didorong, kebijakan pendidikan cenderung tidak mempertimbangkan kebutuhan khusus sekolah Islam, dan birokrasi yang rumit memperlambat pengalokasian dana atau bantuan. Mengatasi hal ini menuntut pendekatan kebijakan yang lebih inklusif — lebih banyak dana, insentif yang lebih besar bagi guru, serta kebijakan yang mempertimbangkan karakteristik khas pendidikan Islam.</p>
  <p>Faktor eksternal kedua adalah minimnya akses terhadap pelatihan profesional berkualitas, yang disebabkan keterbatasan fasilitas dan dana sekolah, lokasi terpencil yang sulit menjangkau pusat pelatihan, biaya pelatihan berkualitas yang mahal, kurangnya sosialisasi informasi tentang pelatihan yang tersedia, serta pelatihan yang sering tidak relevan dengan konteks dan kebutuhan sekolah Islam. Solusi yang bisa ditempuh antara lain mengadakan pelatihan bersubsidi atau gratis, memanfaatkan pelatihan jarak jauh berbasis daring, menyesuaikan materi pelatihan dengan konteks nilai-nilai Islam, serta memperluas sosialisasi informasi peluang pengembangan profesional.</p>
  <p>Ketiga, stigma atau persepsi negatif terhadap profesi guru turut menyurutkan minat calon guru berkualitas. Gaji yang dianggap tidak sebanding dengan beban kerja, minimnya penghargaan dari masyarakat maupun pemerintah, anggapan bahwa guru adalah "pilihan karier terakhir", serta ketidakpastian jenjang karier membuat banyak generasi muda enggan memilih profesi ini — terutama di sekolah Islam yang keterbatasan dananya lebih terasa. Perbaikan citra ini memerlukan peningkatan penghargaan dan insentif, sosialisasi tentang pentingnya peran guru, peningkatan kualitas pendidikan guru itu sendiri, serta kejelasan jalur karier yang bisa ditempuh.</p>
  <p>Faktor eksternal keempat, pengaruh globalisasi, membawa perubahan kurikulum dan metode pengajaran modern yang kadang bertentangan dengan pendekatan tradisional di sekolah Islam, menuntut penguasaan teknologi yang belum tentu dimiliki semua guru, menghadirkan persaingan dengan sekolah-sekolah berkurikulum internasional, sekaligus membawa risiko pergeseran nilai dan identitas akibat pengaruh budaya asing melalui media dan internet. Globalisasi memperburuk kekurangan guru berkualitas karena banyak guru kesulitan beradaptasi dengan metode berbasis teknologi, sementara sekolah harus bersaing memperebutkan guru yang memiliki keterampilan global. Jalan keluarnya mencakup peningkatan pelatihan guru dalam penggunaan teknologi pendidikan, penyesuaian kurikulum yang tetap berpijak pada nilai-nilai Islam, serta investasi pada infrastruktur teknologi sekolah.</p>

  <h4>C. Dampak Kekurangan Guru Berkualitas</h4>
  <p>Bila dibiarkan, kekurangan guru berkualitas pertama-tama menggerus kualitas pembelajaran siswa: pemahaman materi menjadi terhambat karena guru kesulitan menjelaskan konsep secara efektif, pengembangan keterampilan abad ke-21 seperti berpikir kritis dan kolaborasi ikut terhambat, motivasi dan minat belajar siswa menurun, keragaman kebutuhan siswa sulit ditangani secara individual, dan yang tak kalah penting, siswa kehilangan teladan sikap serta dukungan bagi kesejahteraan emosionalnya di kelas.</p>
  <p>Dampak kedua terasa pada reputasi dan daya saing sekolah. Orang tua yang meragukan kualitas pengajaran cenderung mengurungkan niat mendaftarkan anaknya, sehingga jumlah pendaftar baru menurun, prestasi akademik siswa ikut merosot, dan sekolah kehilangan daya saing di pasar pendidikan yang makin kompetitif. Reputasi yang menurun juga mempersulit sekolah menarik donatur atau mitra pendukung, menciptakan dampak jangka panjang yang menghambat pertumbuhan sekolah secara keseluruhan.</p>
  <p>Dampak ketiga menjalar ke ranah sosial-ekonomi komunitas. Pendidikan yang buruk memperlebar kesenjangan sosial antara keluarga mampu dan kurang mampu, meningkatkan risiko pengangguran karena lulusan tidak memiliki keterampilan yang dibutuhkan pasar kerja, bahkan berpotensi menurunkan kemiskinan dari satu generasi ke generasi berikutnya. Selain itu, komunitas yang kekurangan guru berkualitas cenderung mengalami stagnasi sosial, semakin bergantung pada bantuan sosial, dan mengalami penurunan kualitas hidup secara kolektif — menegaskan bahwa manajemen guru bukan sekadar urusan internal sekolah, melainkan investasi bagi masa depan komunitas yang lebih luas.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga jenis faktor penyebab kekurangan guru berkualitas (internal sekolah, eksternal, dan dampaknya) yang dibahas di bab ini, faktor mana yang paling dominan terjadi di sekolah Anda saat ini — dan langkah kecil apa yang realistis untuk mulai ditangani bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 1, apa saja empat faktor internal sekolah Islam yang menyebabkan kekurangan guru berkualitas?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keterbatasan anggaran, manajemen yang tidak efektif, minimnya fasilitas, dan tidak adanya sistem pelatihan berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kebijakan pemerintah, stigma profesi, globalisasi, dan minimnya akses pelatihan eksternal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Reputasi sekolah, daya saing, kesenjangan sosial, dan pengangguran</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam memiliki anggaran yang cukup besar, tetapi tidak pernah melakukan perencanaan kebutuhan guru secara jelas, sehingga rekrutmen dilakukan tergesa-gesa setiap kali ada guru yang keluar. Berdasarkan Bab 1, akar masalah utama sekolah ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keterbatasan anggaran operasional, karena tanpa dana besar rekrutmen tidak akan pernah berjalan baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Manajemen yang tidak efektif dalam pengelolaan tenaga pendidik, karena tidak ada perencanaan SDM yang matang meskipun dana tersedia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pengaruh globalisasi, karena sekolah belum mengadopsi teknologi terbaru dalam rekrutmen</button>
  </div>
  <div class="quiz-q">
    <p>SDIT Nurul Hikmah berada di daerah yang cukup terpencil. Beberapa guru terbaiknya memilih pindah ke sekolah negeri karena gaji lebih tinggi dan status sosial guru negeri dianggap lebih terpandang di masyarakat sekitar. Berdasarkan Bab 1, kombinasi faktor eksternal yang paling menjelaskan situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Minimnya fasilitas pendukung pengajaran dan tidak adanya sistem pelatihan berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kebijakan pemerintah yang kurang mendukung insentif guru pendidikan Islam, dipadukan dengan stigma sosial terhadap profesi guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurangnya manajemen internal sekolah semata, tanpa kaitan dengan faktor di luar sekolah</button>
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
<h2 class="reveal">Strategi Rekrutmen, Retensi, dan Pengembangan Guru</h2>
<p class="lede reveal">Setelah memahami akar masalahnya, bab ini masuk ke inti solusi praktis: bagaimana merekrut guru yang tepat sejak awal, bagaimana mempertahankan mereka agar tidak mudah berpindah, dan bagaimana terus mengembangkan kompetensi guru meski sumber daya sekolah terbatas.</p>

<div class="card reveal">
  <h4>A. Langkah-Langkah Rekrutmen Guru yang Tepat</h4>
  <p>Rekrutmen yang baik dimulai dari kejelasan kriteria. Guru di sekolah Islam idealnya memiliki akhlak dan kepribadian Islami yang tercermin dalam kejujuran, kedisiplinan, kesabaran, dan kepedulian; memahami serta mengamalkan ajaran Islam sehingga mampu mengintegrasikan nilai-nilai keislaman secara alami ke dalam pelajaran apa pun yang diampu; memiliki kompetensi profesional dan kemampuan pedagogis di bidangnya; sanggup menjadi teladan nyata dalam ibadah maupun interaksi sosial; memiliki motivasi dan komitmen yang kuat karena memandang mengajar sebagai bagian dari ibadah; terampil membangun hubungan dengan siswa dan orang tua; serta mampu beradaptasi dengan perkembangan zaman tanpa mengorbankan prinsip-prinsip Islam.</p>
  <p>Setelah kriteria jelas, proses rekrutmen perlu berjalan sistematis lewat delapan tahap: menentukan kebutuhan guru (jumlah, bidang keahlian, dan kriteria kepribadian yang diperlukan); menyusun kualifikasi dan kriteria seleksi yang mencakup latar belakang pendidikan, pengalaman mengajar, keterampilan pribadi, hingga pemahaman nilai Islam; mengumumkan lowongan secara jelas lewat berbagai media termasuk komunitas pendidikan Islam; menyeleksi dokumen lamaran yang masuk; mengadakan tes kompetensi dan wawancara kepribadian-keislaman; meminta calon guru melakukan simulasi mengajar (microteaching) agar keterampilan mengajarnya bisa dinilai langsung; melakukan evaluasi menyeluruh sebelum keputusan akhir; hingga akhirnya menjalankan proses penerimaan dan orientasi guru baru lewat penandatanganan kontrak, masa percobaan, dan pengenalan budaya sekolah.</p>
  <p>Di luar proses internal, sekolah juga bisa memperkuat rekrutmen lewat kemitraan dengan lembaga pendidikan tinggi. Kerja sama dengan universitas membuka akses pendidikan lanjutan bagi guru yang sudah mengajar, memberi sekolah jalur langsung merekrut lulusan terbaik lewat program magang atau beasiswa, memungkinkan pelatihan bersama dan pengembangan kurikulum berbasis riset, serta membuka peluang pengembangan profesionalisme lewat seminar dan diskusi akademik — dengan syarat kemitraan ini dibangun atas hubungan yang saling menguntungkan, disertai evaluasi berkala agar programnya tetap relevan.</p>
  <p>Strategi rekrutmen lain yang efektif adalah program beasiswa untuk calon guru berbakat, yang membuka akses pendidikan tinggi bagi individu berpotensi namun terkendala biaya, membantu sekolah mengurangi kesenjangan kualitas pendidikan, sekaligus meningkatkan retensi karena penerima beasiswa cenderung merasa terikat secara emosional untuk mengabdi di sekolah pemberi beasiswa. Pelaksanaannya membutuhkan kriteria seleksi yang jelas dan transparan, kemitraan dengan perguruan tinggi, penentuan skema pemberian berdasarkan kebutuhan finansial maupun potensi akademik, pendampingan selama masa pendidikan, serta sistem penilaian dan penghargaan yang memotivasi penerima beasiswa untuk terus berprestasi.</p>
  <p>Terakhir, kebijakan rekrutmen perlu disesuaikan dengan kebutuhan lokal, mengingat setiap sekolah memiliki karakteristik lingkungan dan budaya yang berbeda. Penyesuaian ini dilakukan lewat analisis mendalam terhadap kebutuhan pendidikan setempat, kolaborasi dengan lembaga pendidikan tinggi di wilayah tersebut, pengembangan program pelatihan berbasis konteks lokal, pemberian insentif khusus bagi guru yang bersedia mengajar di daerah kurang diminati, serta evaluasi berkala agar kebijakan terus relevan dengan tantangan yang berkembang — pendekatan ini pada akhirnya juga meningkatkan retensi karena guru merasa keterampilannya benar-benar dihargai sesuai konteks tempat ia mengabdi.</p>

  <h4>B. Strategi Mempertahankan Guru Berkualitas</h4>
  <p>Merekrut guru baik hanyalah separuh perjalanan — tantangan berikutnya adalah mempertahankan mereka. Turnover guru yang tinggi dapat ditekan lewat lima langkah: membangun budaya sekolah yang positif dan Islami dengan menumbuhkan ukhuwah antar-guru, keteladanan nyata dari pimpinan sekolah, serta penanaman nilai keikhlasan dalam bekerja; menyediakan sistem kompensasi yang adil dan kompetitif lewat gaji yang layak, insentif berbasis kinerja, dan fasilitas pendukung seperti tunjangan kesehatan; membuka kesempatan pengembangan karier lewat pelatihan berkala, dukungan pendidikan lanjutan, dan jenjang karier yang jelas dari guru junior hingga kepala sekolah; membangun sistem manajemen yang transparan dan profesional dengan melibatkan guru dalam pengambilan keputusan serta menyediakan mekanisme penyelesaian konflik yang efektif; dan mengelola beban kerja secara adil disertai kebijakan work-life balance yang menghargai waktu pribadi guru.</p>
  <p>Insentif bagi guru perlu mencakup dua dimensi sekaligus. Insentif finansial berupa gaji yang memadai, tunjangan dan bonus berbasis kinerja, fasilitas kesehatan, serta program pensiun atau tabungan hari tua memberi rasa aman jangka panjang. Sementara insentif non-finansial — penghargaan dan apresiasi atas dedikasi, peluang pengembangan karier, lingkungan kerja yang mendukung, akses ke fasilitas dan sumber belajar yang memadai, serta pelibatan guru dalam pengambilan keputusan sekolah — sama pentingnya karena menumbuhkan rasa dihargai dan rasa memiliki terhadap sekolah, dua hal yang sulit digantikan oleh uang semata.</p>
  <p>Sistem penghargaan dan apresiasi formal juga perlu dirancang secara transparan dan adil, mulai dari penghargaan finansial berupa bonus atas pencapaian tertentu (misalnya peningkatan hasil ujian atau keberhasilan pengembangan kurikulum) hingga penghargaan simbolis seperti sertifikat dan pengakuan publik. Penghargaan yang konsisten dan jelas kriterianya akan mendorong guru untuk terus berinovasi, bukan sekadar bekerja rutin tanpa motivasi tambahan.</p>
  <p>Pada akhirnya, semua strategi ini bermuara pada satu hal: budaya kerja yang positif. Budaya ini dibangun lewat penanaman nilai-nilai Islam dalam keseharian kerja (niat yang lurus, etika amanah, kajian keislaman rutin), hubungan yang harmonis dan saling mendukung antar-warga sekolah, dukungan serta apresiasi yang konsisten kepada guru, sistem manajemen yang profesional dan adil tanpa favoritisme, serta lingkungan kerja yang nyaman dengan keseimbangan yang sehat antara pekerjaan dan kehidupan pribadi. Sekolah yang berhasil membangun budaya semacam ini akan jauh lebih mudah mempertahankan guru-guru terbaiknya dalam jangka panjang.</p>

  <h4>C. Pengembangan Guru dengan Sumber Daya Terbatas</h4>
  <p>Keterbatasan anggaran bukan alasan untuk berhenti mengembangkan guru. Ada banyak teknik pengembangan tanpa biaya besar: pembelajaran berbasis komunitas lewat lesson study, diskusi studi kasus, dan kelompok belajar guru; program mentoring dan coaching antar-guru lewat observasi kelas, bimbingan individu, dan co-teaching; pelatihan internal oleh guru yang sudah kompeten di bidang tertentu, workshop mandiri, dan sesi microteaching; pemanfaatan sumber belajar daring gratis seperti MOOC, platform pelatihan guru, video tutorial, dan jurnal pendidikan yang dapat diakses bebas; program magang dan kolaborasi dengan sekolah lain lewat pertukaran guru, observasi lintas sekolah, atau studi banding virtual; serta membiasakan budaya refleksi dan evaluasi mandiri lewat jurnal mengajar dan analisis hasil evaluasi siswa.</p>
  <p>Selain teknik-teknik hemat biaya tersebut, sekolah perlu menyusun program pengembangan karier yang berkelanjutan agar guru tidak merasa stagnan. Program ini bisa berbentuk pelatihan dan workshop berkala, program sertifikasi dan kualifikasi profesional (seperti studi lanjut S2 atau sertifikasi keguruan), pembelajaran kolaboratif dan mentoring antar sesama guru, hingga kesempatan mengikuti konferensi dan seminar yang memperluas wawasan sekaligus memberi motivasi baru bagi guru untuk terus berkembang.</p>
  <p>Pemanfaatan teknologi pendidikan turut membuka peluang pelatihan yang lebih murah dan fleksibel, misalnya lewat platform pembelajaran daring seperti Moodle dan Google Classroom, webinar dan video conference, modul e-learning interaktif, hingga aplikasi mobile untuk kuis dan evaluasi. Namun sekolah perlu menyadari tantangannya — keterbatasan akses internet di daerah terpencil, minimnya keterampilan teknologi sebagian guru, dan keterbatasan waktu guru yang padat jadwal — sehingga pelatihan berbasis teknologi perlu dirancang fleksibel dan didahului pelatihan dasar penggunaan perangkat.</p>
  <p>Pendekatan yang lebih terstruktur lagi adalah pengembangan modul pelatihan berbasis kompetensi, yakni paket pembelajaran yang secara spesifik menyasar kompetensi pedagogik, profesional, sosial, dan kepribadian guru. Modul semacam ini disusun lewat identifikasi kompetensi yang dibutuhkan, perumusan tujuan pembelajaran yang terukur, penyusunan materi yang aplikatif, penentuan metode dan media yang sesuai, hingga evaluasi dan umpan balik di akhir pelatihan — pendekatan ini membuat pelatihan lebih terarah, meningkatkan kepuasan kerja guru, dan menghasilkan keterampilan yang benar-benar dapat diterapkan di kelas, meski tetap menghadapi tantangan keterbatasan sumber daya dan pemerataan akses teknologi.</p>
  <p>Dua strategi terakhir saling melengkapi: penyediaan akses ke sumber belajar dan jejaring profesional memastikan guru tidak belajar sendirian, melainkan terhubung dengan komunitas pendidik yang lebih luas untuk saling berbagi pengetahuan; sementara program mentoring dan pendampingan untuk guru baru — lewat penunjukan mentor berpengalaman, sesi observasi dan refleksi, pembinaan berkala, pelatihan khusus, hingga dukungan psikologis — membantu guru baru beradaptasi dengan budaya sekolah, mengurangi stres awal masa kerja, dan pada akhirnya meningkatkan retensi karena guru baru merasa didampingi, bukan dilepas sendirian menghadapi tantangan profesinya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga strategi besar Bab 2 — rekrutmen, retensi, dan pengembangan dengan sumber daya terbatas — strategi mana yang paling mendesak diperbaiki di sekolah Anda saat ini, dan langkah pertama apa yang bisa mulai dijalankan tanpa menunggu tambahan anggaran?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, apa tujuan utama dari tahap microteaching dalam proses rekrutmen guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menilai keterampilan mengajar calon guru secara langsung, termasuk cara berinteraksi dengan siswa dan menyampaikan materi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menentukan besaran gaji yang akan diterima calon guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan sepenuhnya tahap wawancara kepribadian dan keislaman</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam berhasil merekrut guru-guru berkualitas lewat proses seleksi yang ketat, tetapi dalam dua tahun terakhir banyak dari mereka mengundurkan diri karena merasa gaji tidak berkembang dan tidak ada kejelasan jenjang karier. Berdasarkan Bab 2, akar masalah yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kriteria rekrutmen yang terlalu longgar sehingga guru yang direkrut sebenarnya tidak berkualitas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Strategi retensi yang lemah, khususnya pada sistem kompensasi kompetitif dan kejelasan jenjang pengembangan karier</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurangnya program beasiswa untuk calon guru berbakat</button>
  </div>
  <div class="quiz-q">
    <p>MTs Al-Amin berada di pelosok dengan anggaran pelatihan yang sangat terbatas, namun kepala sekolahnya ingin tetap meningkatkan kompetensi mengajar para gurunya tanpa mengeluarkan biaya besar. Berdasarkan Bab 2, kombinasi langkah paling realistis untuk sekolah ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh pengembangan guru sampai anggaran pelatihan formal tersedia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan lesson study, mentoring antar-guru, dan memanfaatkan sumber belajar daring gratis seperti MOOC dan video tutorial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh guru dengan guru baru yang dianggap sudah lebih terlatih</button>
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
<h2 class="reveal">Implementasi dan Evaluasi Solusi</h2>
<p class="lede reveal">Strategi terbaik pun tidak akan berdampak tanpa implementasi yang terencana — bab penutup ini membahas bagaimana menjalankan solusi manajemen guru secara praktis, tantangan apa saja yang lazim muncul di lapangan, serta faktor-faktor kunci yang menentukan keberhasilan jangka panjangnya.</p>

<div class="card reveal">
  <h4>A. Panduan Praktis Implementasi Solusi</h4>
  <p>Perencanaan solusi yang efektif berjalan melalui tujuh tahapan berurutan. Diawali dengan identifikasi masalah dan kebutuhan secara jujur — apakah kekurangan guru berkualitas disebabkan dana, minimnya pelatihan, atau lokasi yang sulit dijangkau — lewat diskusi dengan manajemen, guru, wali murid, dan komite sekolah. Tahap berikutnya adalah menyusun tujuan yang spesifik, terukur, realistis, dan relevan, misalnya meningkatkan jumlah guru berkualifikasi tertentu dalam dua tahun. Tujuan ini kemudian diterjemahkan menjadi rencana tindakan konkret — kemitraan dengan universitas, program pelatihan, atau insentif kesejahteraan — lengkap dengan penentuan sumber daya dan anggaran yang realistis. Barulah solusi dilaksanakan secara terkoordinasi antar semua pihak, terus dipantau dan diawasi agar tetap sesuai rencana, dan diakhiri dengan evaluasi hasil yang objektif untuk melihat apakah tujuan tercapai serta menyesuaikan pendekatan bila ada celah yang perlu diperbaiki.</p>
  <p>Pelaksanaan solusi juga perlu berbasis prioritas kebutuhan — sekolah tidak mungkin mengerjakan semua hal sekaligus, sehingga penting memahami mana persoalan yang paling mendesak dan berdampak besar untuk didahulukan, baru kemudian melangkah ke prioritas berikutnya secara bertahap dan terukur.</p>
  <p>Agar implementasi tetap terkendali, sekolah memerlukan sistem supervisi dan evaluasi yang jelas, mencakup pelaporan dan transparansi hasil evaluasi kepada pemangku kepentingan seperti yayasan dan komite pendidikan — memuat temuan supervisi, evaluasi program berdasarkan indikator yang telah ditetapkan, serta rekomendasi perbaikan — hingga evaluasi akhir yang menilai dampak jangka panjang, mencakup analisis tren peningkatan kualitas guru dari tahun ke tahun, dampaknya terhadap hasil belajar siswa, dan efektivitas kebijakan sekolah dalam mempertahankan guru berkualitas. Transparansi dalam pelaporan ini memastikan seluruh pihak memahami perkembangan implementasi dan dapat ikut berkontribusi pada perbaikan berkelanjutan.</p>

  <h4>B. Tantangan dan Strategi Mengatasinya</h4>
  <p>Tantangan pertama yang hampir selalu muncul adalah resistensi perubahan di lingkungan sekolah, yang bersumber dari kenyamanan terhadap kebiasaan lama, kurangnya pemahaman tentang manfaat perubahan, kekhawatiran akan dampak pribadi seperti bertambahnya beban kerja, serta ketidakpastian tentang proses dan hasil. Bila dibiarkan, resistensi ini menunda implementasi, menurunkan semangat kerja guru dan staf, bahkan menggagalkan perubahan yang sebenarnya dibutuhkan. Cara mengatasinya adalah membangun pemahaman lewat komunikasi yang jelas tentang tujuan dan manfaat perubahan, melibatkan semua pihak dalam proses perencanaan agar mereka merasa memiliki, memberikan pelatihan dan dukungan yang cukup, menerapkan perubahan secara bertahap alih-alih mendadak, memberikan apresiasi bagi yang mendukung perubahan, serta menyertakan data dan bukti nyata bahwa perubahan tersebut membawa dampak positif.</p>
  <p>Tantangan kedua, keterbatasan anggaran untuk pelaksanaan solusi, muncul karena anggaran pendidikan yang harus dibagi dengan banyak kebutuhan lain, minimnya akses ke sumber daya eksternal seperti hibah atau sponsor, serta pengelolaan anggaran yang kadang belum efisien. Dampaknya nyata: pelatihan dan pengembangan guru menjadi terbatas, sehingga sekolah perlu mencari alternatif seperti menggalang kemitraan dan sumbangan sukarela dari komunitas alih-alih hanya bergantung pada dana pemerintah semata.</p>
  <p>Tantangan ketiga adalah kondisi geografis di wilayah terpencil, yang mempersulit distribusi guru berkualitas, akses ke pelatihan, maupun mobilitas antara sekolah dan pusat-pusat pendidikan. Sekolah di wilayah semacam ini perlu strategi khusus — memanfaatkan pelatihan daring, menjalin kemitraan lintas wilayah, serta memberi insentif tambahan bagi guru yang bersedia mengajar di lokasi yang kurang diminati — agar kesenjangan kualitas pendidikan antara daerah perkotaan dan pedesaan tidak semakin melebar.</p>

  <h4>C. Kunci Sukses Implementasi Solusi</h4>
  <p>Faktor kunci pertama adalah kepemimpinan visioner dan kolaboratif. Kepemimpinan visioner berarti kepala sekolah mampu merumuskan tujuan jangka panjang yang jelas mengenai pendidikan berkualitas, sementara kepemimpinan kolaboratif berarti mengutamakan kerja sama, dialog terbuka, dan pelibatan seluruh warga sekolah dalam pengambilan keputusan. Kombinasi keduanya menciptakan tujuan bersama yang jelas, memperkuat komitmen dan dukungan stakeholder, mengurangi hambatan resistensi lewat rasa saling percaya, mendorong inovasi dalam metode pengajaran, serta memberdayakan setiap guru dan staf untuk berperan aktif — diwujudkan lewat membangun visi bersama, komunikasi terbuka, partisipasi aktif semua pihak, dan pelatihan kepemimpinan yang berkelanjutan.</p>
  <p>Faktor kedua adalah keterlibatan komunitas dan orang tua siswa sebagai mitra aktif, bukan sekadar penonton. Keterlibatan mereka membangun dukungan yang kuat bagi keberlanjutan program, membantu sekolah memahami kebutuhan dan harapan yang lebih tepat sasaran, memperkuat kualitas pendidikan lewat kolaborasi nyata seperti workshop dan kegiatan bersama, serta mengurangi ketergantungan sekolah pada solusi instan yang sifatnya sementara. Strategi meningkatkannya mencakup membangun komunikasi yang efektif dan terbuka lewat berbagai kanal (pertemuan rutin, grup komunikasi, aplikasi sekolah) serta mengadakan forum diskusi rutin yang mempererat hubungan sekolah dengan orang tua dan masyarakat sekitar.</p>
  <p>Faktor ketiga adalah dukungan berkelanjutan dari pemerintah dan pemangku kepentingan lainnya. Betapapun kuatnya kepemimpinan sekolah dan keterlibatan komunitas, keberhasilan jangka panjang tetap memerlukan sokongan kebijakan, pendanaan, dan program dari pemerintah serta lembaga-lembaga pendukung pendidikan Islam. Sinergi antara kepemimpinan visioner di tingkat sekolah, partisipasi aktif komunitas, dan dukungan struktural dari luar sekolah inilah yang pada akhirnya menentukan apakah solusi manajemen guru dapat bertahan dan terus berkembang, bukan sekadar menjadi program jangka pendek yang layu begitu proyek awal selesai.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga kunci sukses implementasi pada Bab 3 — kepemimpinan visioner-kolaboratif, keterlibatan komunitas/orang tua, dan dukungan pemangku kepentingan eksternal — mana yang paling lemah di sekolah Anda saat ini, dan siapa pihak pertama yang perlu diajak bicara untuk mulai memperbaikinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, apa tahap pertama yang harus dilakukan dalam perencanaan solusi mengatasi kekurangan guru berkualitas di sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Identifikasi masalah dan kebutuhan secara jelas sebelum menyusun tujuan atau rencana tindakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menetapkan anggaran pelatihan tanpa melakukan analisis kebutuhan terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh kepala sekolah dan tim manajemen yang menjabat saat ini</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan memutuskan mengubah total sistem penggajian dan jam kerja guru secara mendadak tanpa penjelasan sebelumnya. Dalam sebulan, banyak guru mengeluh dan sebagian mengancam mengundurkan diri. Berdasarkan Bab 3, kesalahan utama dalam proses ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Yayasan seharusnya tidak pernah mengubah sistem penggajian sama sekali, dalam kondisi apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Perubahan dilakukan secara mendadak dan tanpa komunikasi terbuka, sehingga memicu resistensi yang seharusnya bisa dikurangi lewat pendekatan bertahap dan penjelasan yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru yang mengancam mengundurkan diri adalah pihak yang sepenuhnya salah karena menolak perubahan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam di daerah terpencil memiliki kepala sekolah yang visioner dan orang tua yang cukup aktif, tetapi program pengembangan gurunya tetap mandek karena tidak pernah mendapat dukungan pendanaan atau kebijakan dari pemerintah daerah maupun lembaga terkait. Berdasarkan Bab 3, apa yang paling menjelaskan kegagalan keberlanjutan program ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kepemimpinan kepala sekolah tidak relevan sama sekali dengan keberhasilan program semacam ini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keterlibatan orang tua yang aktif sebenarnya tidak dibutuhkan jika kepala sekolah sudah visioner</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kepemimpinan sekolah dan keterlibatan komunitas saja tidak cukup tanpa dukungan berkelanjutan dari pemerintah dan pemangku kepentingan eksternal</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab3" onclick="markDone('bab3')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab3">✓ Bab 3 selesai dibaca</p>
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
    <p>Sebuah sekolah Islam memiliki anggaran cukup besar, namun tidak pernah menyusun perencanaan kebutuhan guru secara jelas sehingga rekrutmen selalu dilakukan tergesa-gesa. Berdasarkan Bab 1, akar masalah utamanya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterbatasan anggaran operasional sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Manajemen yang tidak efektif dalam pengelolaan tenaga pendidik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengaruh globalisasi terhadap sistem pendidikan tradisional</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, mengapa minimnya fasilitas pendukung pengajaran dapat menghambat kualitas mengajar guru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena guru kesulitan menyampaikan materi secara efektif dan menarik tanpa ruang kelas, alat bantu, dan akses teknologi yang memadai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena fasilitas sama sekali tidak berkaitan dengan kualitas pengajaran guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena fasilitas hanya memengaruhi nilai jual sekolah, bukan proses belajar-mengajar</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah di daerah terpencil kesulitan mengirim gurunya mengikuti pelatihan berkualitas karena biaya dan jarak yang jauh dari pusat pelatihan. Berdasarkan Bab 1, faktor eksternal apa yang paling relevan dengan situasi ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Stigma atau persepsi negatif terhadap profesi guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengaruh globalisasi terhadap sistem pendidikan tradisional</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Minimnya akses terhadap pelatihan profesional berkualitas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang lulusan terbaik jurusan pendidikan justru memilih bekerja di bidang lain karena menganggap profesi guru "pilihan karier terakhir" dengan penghargaan sosial yang rendah. Berdasarkan Bab 1, ini adalah contoh nyata dari...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Stigma atau persepsi negatif terhadap profesi guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterbatasan anggaran operasional sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Implikasi sosial-ekonomi terhadap komunitas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah mengalami penurunan jumlah pendaftar baru setelah beberapa tahun kekurangan guru berkualitas, karena orang tua meragukan kemampuan sekolah memberikan pendidikan optimal. Berdasarkan Bab 1, ini adalah dampak dari kekurangan guru berkualitas terhadap...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kualitas pembelajaran siswa secara langsung di dalam kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Reputasi dan daya saing sekolah di mata masyarakat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebijakan pemerintah terhadap pendidikan Islam</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 1, mengapa kekurangan guru berkualitas dapat berdampak pada tingkat pengangguran dan kemiskinan di suatu komunitas?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena siswa yang tidak mendapatkan pendidikan berkualitas akan kesulitan bersaing di dunia kerja, sehingga risiko pengangguran dan kemiskinan meningkat dari generasi ke generasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena pengangguran hanya dipengaruhi oleh kondisi ekonomi makro, tidak ada kaitannya dengan kualitas guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena kekurangan guru selalu diselesaikan otomatis oleh pasar tenaga kerja tanpa intervensi sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Dalam proses rekrutmen di Bab 2, tahap microteaching dilakukan dengan tujuan utama untuk...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menilai kemampuan finansial calon guru dalam bernegosiasi gaji</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menilai keterampilan mengajar calon guru secara langsung, termasuk cara berinteraksi dengan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan seluruh proses wawancara dan seleksi administrasi</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah menjalin kerja sama dengan universitas untuk membuka akses pendidikan lanjutan bagi guru sekaligus merekrut lulusan terbaik lewat program magang. Berdasarkan Bab 2, strategi ini disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penyesuaian kebijakan rekrutmen berbasis kebutuhan lokal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program beasiswa untuk calon guru berbakat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemitraan dengan lembaga pendidikan tinggi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sekolah berhasil merekrut guru-guru berkualitas lewat seleksi ketat, namun banyak dari mereka mengundurkan diri dalam dua tahun karena gaji stagnan dan tidak ada kejelasan jenjang karier. Berdasarkan Bab 2, akar masalah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Strategi retensi yang lemah, khususnya pada kompensasi kompetitif dan kejelasan jenjang karier</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kriteria rekrutmen yang terlalu longgar sejak awal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurangnya program mentoring bagi guru baru semata</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 2, apa perbedaan mendasar antara insentif finansial dan insentif non-finansial bagi guru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Insentif non-finansial selalu lebih penting dan bisa sepenuhnya menggantikan insentif finansial</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Insentif finansial berupa gaji, tunjangan, dan bonus; insentif non-finansial berupa penghargaan, peluang pengembangan karier, dan lingkungan kerja yang mendukung — keduanya sama pentingnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Insentif finansial hanya relevan untuk guru baru, sedangkan non-finansial hanya untuk guru senior</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>MTs Al-Amin berada di pelosok dengan anggaran pelatihan sangat terbatas, namun kepala sekolah ingin tetap meningkatkan kompetensi guru tanpa biaya besar. Berdasarkan Bab 2, kombinasi langkah paling realistis adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunda seluruh pengembangan guru sampai ada anggaran pelatihan formal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh guru dengan guru baru yang dianggap lebih terlatih</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan lesson study, mentoring antar-guru, dan memanfaatkan sumber belajar daring gratis</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 2, apa manfaat utama program mentoring dan pendampingan bagi guru baru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membantu guru baru beradaptasi dengan budaya sekolah, mengurangi stres awal kerja, dan meningkatkan retensi jangka panjang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan kebutuhan gaji yang layak bagi guru baru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya relevan bagi guru yang berencana pindah ke sekolah lain dalam waktu dekat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 3, tahap pertama yang harus dilakukan dalam perencanaan solusi mengatasi kekurangan guru berkualitas adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menetapkan anggaran pelatihan tanpa analisis kebutuhan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Identifikasi masalah dan kebutuhan secara jelas sebelum menyusun tujuan atau rencana tindakan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh kepala sekolah dan tim manajemen yang menjabat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah yayasan mengubah total sistem penggajian dan jam kerja guru secara mendadak tanpa penjelasan sebelumnya, sehingga memicu banyak keluhan dan ancaman pengunduran diri. Berdasarkan Bab 3, kesalahan utamanya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Yayasan seharusnya tidak pernah mengubah sistem penggajian dalam kondisi apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Perubahan dilakukan secara mendadak tanpa komunikasi terbuka, sehingga memicu resistensi yang bisa dikurangi lewat pendekatan bertahap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru yang mengancam mengundurkan diri sepenuhnya salah karena menolak perubahan</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Berdasarkan Bab 3, mengapa keterbatasan anggaran tetap bisa diatasi meski dana pemerintah minim?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena sekolah sebaiknya berhenti menjalankan solusi apa pun sampai dana pemerintah tersedia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena anggaran pendidikan sebenarnya tidak pernah menjadi kendala nyata bagi sekolah manapun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena sekolah bisa menggalang kemitraan dan sumbangan sukarela dari komunitas, tidak hanya bergantung pada dana pemerintah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah Islam di daerah terpencil memiliki kepala sekolah yang visioner dan orang tua yang aktif, tetapi program pengembangan gurunya tetap mandek karena tidak pernah mendapat dukungan kebijakan atau pendanaan dari pemerintah daerah. Berdasarkan Bab 3, penjelasan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepemimpinan sekolah dan keterlibatan komunitas saja tidak cukup tanpa dukungan berkelanjutan dari pemerintah dan pemangku kepentingan eksternal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepemimpinan kepala sekolah tidak relevan sama sekali dengan keberhasilan program semacam ini</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterlibatan orang tua sebenarnya tidak dibutuhkan jika kepala sekolah sudah visioner</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 3, apa perbedaan mendasar antara kepemimpinan visioner dan kepemimpinan kolaboratif di sekolah Islam?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepemimpinan visioner hanya relevan bagi yayasan, sedangkan kolaboratif hanya relevan bagi guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepemimpinan visioner berfokus pada perumusan tujuan jangka panjang yang jelas, sedangkan kepemimpinan kolaboratif berfokus pada kerja sama dan pelibatan semua pihak dalam pengambilan keputusan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keduanya adalah istilah yang sama persis tanpa perbedaan makna</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah di wilayah geografis terpencil kesulitan mendistribusikan guru berkualitas secara merata dan sulit mengirim guru mengikuti pelatihan di kota. Berdasarkan Bab 3, kombinasi strategi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menutup sekolah karena kondisi geografis dianggap tidak mungkin diatasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu pemerintah pusat menyelesaikan seluruh masalah tanpa inisiatif dari sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memanfaatkan pelatihan daring, menjalin kemitraan lintas wilayah, serta memberi insentif tambahan bagi guru yang bersedia mengajar di lokasi tersebut</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan keseluruhan isi buku ini, mengapa manajemen guru di sekolah Islam perlu dipandang sebagai satu rangkaian utuh — rekrutmen, retensi, dan pengembangan — bukan sebagai program yang berdiri sendiri-sendiri?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena merekrut guru berkualitas tanpa strategi mempertahankan dan mengembangkannya hanya akan menghasilkan turnover tinggi dan investasi rekrutmen yang sia-sia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena rekrutmen adalah satu-satunya tahap yang benar-benar memengaruhi kualitas pendidikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena retensi dan pengembangan guru sebenarnya tidak berkaitan dengan kualitas rekrutmen di awal</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin memulai perbaikan manajemen guru namun bingung harus mulai dari mana. Berdasarkan keseluruhan isi buku ini, urutan paling logis untuk memulai adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menyusun asesmen 20 soal sebelum memahami akar masalah sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengidentifikasi dulu faktor penyebab kekurangan guru (Bab 1), menyusun strategi rekrutmen-retensi-pengembangan yang relevan (Bab 2), lalu mengimplementasikannya secara bertahap dengan pemantauan dan dukungan pemangku kepentingan (Bab 3)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh tenaga pendidik tanpa mengevaluasi penyebab masalah yang sebenarnya</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
