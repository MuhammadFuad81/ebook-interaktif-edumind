/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Strategi Implementasi Pendidikan Karakter di Sekolah"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-pendidikan-karakter.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Dasar Teori Pendidikan Karakter</h2>
<p class="lede reveal">Sebelum menyusun program dan kegiatan, sekolah perlu berpijak pada pemahaman yang kokoh tentang apa itu pendidikan karakter, mengapa ia begitu mendesak di zaman ini, nilai-nilai apa saja yang perlu ditanamkan, dan pendekatan teoretis apa yang melandasinya.</p>

<div class="card reveal">
  <h4>A. Pengertian Pendidikan Karakter</h4>
  <p>Pendidikan karakter adalah proses membangun dan mengembangkan nilai-nilai karakter pada diri individu, sehingga ia tumbuh menjadi manusia yang bermoral, berbudi pekerti luhur, dan bertanggung jawab. Beberapa ahli memberi penekanan yang saling melengkapi tentang makna ini. Thomas Lickona memandangnya sebagai upaya membantu anak-anak dan remaja mengembangkan karakter yang baik. Mulyasa menegaskan bahwa pendidikan karakter bertujuan mengembangkan nilai-nilai karakter pada diri peserta didik. Sementara itu, Ki Hajar Dewantara meletakkannya dalam bingkai yang lebih luas: pendidikan karakter adalah pendidikan yang membentuk manusia merdeka, baik batin maupun lahirnya.</p>
  <p>Dari berbagai definisi ini, pendidikan karakter bukan sekadar mengajarkan nilai-nilai moral secara kognitif, melainkan membantu individu melalui empat tahap yang saling berurutan: memahami nilai karakter dan mampu membedakan yang benar dari yang salah, menghayati nilai tersebut hingga tumbuh rasa cinta dan komitmen terhadapnya, lalu akhirnya berperilaku dan bertindak berdasarkan nilai itu dalam keseharian. Nilai-nilai karakter yang ditanamkan di sekolah pun tidak boleh asal pilih — ia harus selaras dengan visi-misi sekolah serta kebutuhan dan tahap perkembangan peserta didik, dengan contoh umum seperti religius, jujur, tanggung jawab, toleransi, disiplin, kreatif, mandiri, dan peduli lingkungan.</p>
  <p>Untuk merancang program yang efektif, guru dan pendidik juga perlu memahami sejumlah teori yang mendasari pendidikan karakter. Teori kognitif berfokus pada bagaimana individu mempelajari dan memahami nilai; teori afektif menyoroti bagaimana individu merasakan dan menghayati nilai tersebut; sedangkan teori psikomotor menekankan bagaimana individu berperilaku dan bertindak sesuai nilai itu. Perkembangan lebih lanjut melahirkan teori pembelajaran sosial kognitif, yang menjelaskan bagaimana nilai karakter dipelajari melalui interaksi sosial, serta teori pembangunan moral, yang menjelaskan bagaimana moralitas seseorang berkembang seiring waktu. Ketiga teori dasar dan dua teori lanjutan ini kemudian bermuara pada tiga paradigma besar dalam praktik: pendekatan tradisional yang menanamkan nilai lewat aturan dan disiplin, pendekatan kontemporer yang mengembangkannya lewat pembelajaran dan pengalaman, serta pendekatan holistik yang mengembangkannya lewat seluruh aspek kehidupan sekolah — dan pendekatan holistik inilah yang umumnya dianggap paling menyeluruh dan tahan lama dampaknya.</p>

  <h4>B. Hakikat dan Urgensi Pendidikan Karakter</h4>
  <p>Secara hakikat, manusia adalah makhluk berakal budi yang memiliki potensi mengembangkan nilai-nilai karakter. Pendidikan karakter berperan membantu manusia memaksimalkan potensi tersebut agar menjadi manusia seutuhnya — baik secara fisik, mental, maupun spiritual — sekaligus membentuk kepribadian mulia yang mampu bertindak berdasarkan nilai-nilai karakter dalam kehidupan sehari-hari, bukan sekadar mengetahuinya secara teori.</p>
  <p>Urgensi pendidikan karakter semakin terasa nyata bila melihat data yang ada. Berdasarkan data UNICEF dan Kementerian Pemberdayaan Perempuan dan Perlindungan Anak tahun 2021, sekitar 15% remaja Indonesia pernah mengalami perundungan (bullying) di sekolah, dalam bentuk yang beragam mulai dari ejekan hingga kekerasan fisik dan verbal. Penelitian internal Kemendikbud pada tahun yang sama mencatat bahwa lebih dari 50% siswa SMP dan lebih dari 60% siswa SMA terindikasi melakukan tindakan ketidakjujuran, termasuk mencontek atau memanipulasi data tugas. Sementara itu, Badan Narkotika Nasional melaporkan prevalensi penyalahgunaan narkoba pada pelajar usia 15-17 tahun mencapai 3,6% — angka yang mengkhawatirkan dan menegaskan pentingnya penguatan karakter dalam pengambilan keputusan dan kontrol diri. Data-data ini menunjukkan bahwa persoalan karakter bukan hal sepele, melainkan sesuatu yang nyata dan menuntut penanganan sistematis dari sekolah dan seluruh ekosistem pendidikan.</p>
  <p>Di era globalisasi dan digitalisasi, urgensi ini kian meningkat karena tiga alasan yang saling berkelindan: tantangan baru seperti cyberbullying, radikalisme, dan penyalahgunaan narkoba yang lahir dari kemajuan teknologi; pergeseran nilai-nilai sosial dan budaya akibat arus globalisasi yang menuntut penguatan nilai-nilai positif; serta kebutuhan generasi muda akan bekal karakter agar mampu menghadapi berbagai tantangan tersebut dan tumbuh menjadi pemimpin yang berkarakter. Penting pula dipahami bahwa pendidikan karakter, pendidikan moral, dan pendidikan budi pekerti memiliki tujuan akhir yang sama namun cakupan yang berbeda. Pendidikan moral cenderung berfokus pada pengajaran nilai dan etika lewat ceramah serta nasihat, dengan tujuan sekadar membantu individu membedakan benar dan salah. Pendidikan budi pekerti berfokus pada nilai-nilai luhur bangsa Indonesia yang disampaikan lewat cerita rakyat dan legenda. Pendidikan karakter, sebaliknya, jauh lebih komprehensif dan holistik: ia melibatkan seluruh aspek kehidupan sekolah — pembelajaran, budaya sekolah, dan kegiatan ekstrakurikuler — dengan tujuan membangun karakter yang kuat dan tahan lama, bukan sekadar pengetahuan yang dihafal.</p>

  <h4>C. Nilai-nilai Karakter: Mulai dari Mana, Berakhir ke Mana, dan Apa Kurikulumnya</h4>
  <p>Nilai-nilai karakter dapat diklasifikasikan dari berbagai sudut. Berdasarkan sumbernya, ada nilai universal yang berlaku di seluruh dunia seperti religius, jujur, tanggung jawab, toleransi, dan disiplin, serta nilai kontekstual yang berlaku di budaya tertentu seperti gotong royong, musyawarah mufakat, dan kepedulian terhadap lingkungan. Berdasarkan ruang lingkupnya, ada nilai individual seperti mandiri, kreatif, dan percaya diri, serta nilai sosial seperti peduli, kerja sama, dan empati. Berdasarkan aspeknya, ada nilai moral (adil, berani, berintegritas), nilai spiritual (beriman, bertakwa, bersyukur), dan nilai emosional (sabar, tenang, optimis). Klasifikasi ini membantu sekolah memetakan nilai mana yang perlu ditekankan sesuai konteks dan kebutuhan peserta didiknya.</p>
  <p>Salah satu kerangka yang khas dalam buku ini adalah gagasan bahwa pembentukan karakter <strong>mulai dari diri sendiri dengan jujur (Sidik)</strong> dan <strong>berakhir pada kemampuan memimpin orang lain (Tablig)</strong>. Kejujuran adalah kunci membangun kepercayaan dan hubungan baik dengan orang lain — seseorang yang jujur akan selalu berkata dan bertindak sesuai kenyataan, memiliki rasa percaya diri yang tinggi, reputasi yang baik, serta terhindar dari masalah dan konflik. Penanaman kejujuran ini dilakukan lewat empat langkah yang berulang di rumah maupun di sekolah: mengajarkan anak untuk selalu berkata jujur, memberi contoh nyata kejujuran dalam keseharian, menciptakan lingkungan yang kondusif bagi kejujuran (misalnya tidak menghukum anak yang berkata jujur meski ia melakukan kesalahan), serta memberi penghargaan atas perilaku jujur. Di ujung proses ini, karakter yang matang bermuara pada kemampuan memimpin (Tablig) — hasil akhir dari pengembangan karakter yang komprehensif, di mana seseorang yang kuat dan terpercaya mampu memimpin orang lain dengan baik dan amanah untuk membangun kerja sama, mencapai tujuan bersama, dan menciptakan perubahan positif. Kemampuan ini dilatih lewat pemberian tanggung jawab sejak kecil di rumah (mengurus kamar, hewan peliharaan) hingga peran kepemimpinan di sekolah (ketua kelas, OSIS, memimpin proyek kelompok), disertai keteladanan nyata dari orang tua dan guru.</p>
  <p>Dari perjalanan "mulai dari Sidik, berakhir di Tablig" inilah disusun kurikulum pendidikan karakter yang komprehensif, terdiri dari empat pilar utama yang saling menopang: <strong>Sidik (Jujur)</strong> — membangun karakter yang jujur, adil, dan terpercaya; <strong>Amanah (Tanggung Jawab)</strong> — menumbuhkan rasa tanggung jawab dan komitmen; <strong>Fathonah (Kecerdasan)</strong> — mengembangkan kecerdasan intelektual, emosional, dan spiritual; serta <strong>Tablig (Memimpin Orang Lain)</strong> — membentuk kemampuan memimpin diri sendiri dan orang lain dengan baik. Keempat pilar ini bukan sekadar konsep di atas kertas — ia dapat diimplementasikan dalam pembelajaran di kelas, kegiatan ekstrakurikuler, pembiasaan harian di sekolah, maupun kegiatan di tengah masyarakat, sehingga karakter benar-benar tumbuh dari empat arah sekaligus.</p>

  <h4>D. Pendekatan Filosofis, Psikologis, dan Sosiologis dalam Pendidikan Karakter</h4>
  <p>Agar pendidikan karakter efektif dan bermakna, ia perlu didukung landasan teori yang kuat dari tiga pendekatan yang saling melengkapi. <strong>Pendekatan filosofis</strong> berangkat dari pertanyaan mendasar: apa arti menjadi manusia yang baik? Nilai-nilai seperti kejujuran, keadilan, kebijaksanaan, dan tanggung jawab bersumber dari pemikiran para filsuf seperti Socrates, Plato, dan Aristoteles, sekaligus relevan dengan nilai-nilai luhur Pancasila dan ajaran agama. Melalui pendekatan ini, siswa tidak hanya diajarkan "apa yang baik", tetapi juga "mengapa" sesuatu dianggap baik dan bagaimana membuat keputusan moral yang tepat — mendorong mereka berpikir kritis dan mengembangkan kesadaran moral yang dalam, bukan sekadar ikut-ikutan.</p>
  <p><strong>Pendekatan psikologis</strong> menekankan aspek perkembangan individu, terutama perkembangan moral dan emosional. Tokoh seperti Jean Piaget dan Lawrence Kohlberg menjelaskan bagaimana anak-anak tumbuh dan memahami nilai moral seiring bertambahnya usia, sehingga pendidikan karakter perlu memperhatikan tahapan perkembangan anak — apa yang sesuai diajarkan pada usia tertentu dan bagaimana cara menyampaikannya. Pendekatan ini juga mempertimbangkan faktor emosi dan motivasi, sebab karakter bukan hanya soal berpikir benar, tetapi juga merasakan dan bertindak dengan benar; karena itu membangun empati, mengelola emosi, dan membiasakan perilaku positif menjadi bagian penting di dalamnya. Sementara itu, <strong>pendekatan sosiologis</strong> memandang bahwa karakter seseorang tidak lahir dalam ruang hampa, melainkan dipengaruhi oleh lingkungan tempat ia tumbuh — keluarga, sekolah, teman sebaya, media, dan masyarakat. Karakter terbentuk melalui interaksi sosial dan pembiasaan nilai dalam kehidupan sehari-hari, sehingga pendidikan karakter menjadi tanggung jawab bersama, bukan hanya tugas guru di kelas.</p>
  <p>Ketiga pendekatan ini saling melengkapi: filosofis menguatkan pemahaman nilai, psikologis memastikan pendidikan sesuai tahap perkembangan anak, dan sosiologis menumbuhkan karakter lewat lingkungan dan interaksi sosial. Penerapannya menuntut peran aktif guru — dalam konteks filosofis, guru dapat mengajak siswa berdiskusi tentang dilema moral sehari-hari agar mereka berpikir kritis, bukan sekadar menerima nilai secara pasif. Dalam konteks psikologis, guru perlu mengenali karakteristik perkembangan tiap murid secara individual — anak usia dini lebih mudah menerima nilai lewat cerita dan teladan nyata, sementara remaja lebih tertarik pada diskusi dan refleksi diri. Dalam konteks sosiologis, sekolah perlu menciptakan budaya positif yang tercermin dalam setiap aspek kehidupan sehari-hari, sekaligus membangun kerja sama aktif dengan orang tua dan masyarakat — sebab keberhasilan pendidikan karakter bukan hanya soal apa yang diajarkan, melainkan apa yang dibiasakan dan dirasakan setiap hari oleh siswa di lingkungannya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pendekatan (filosofis, psikologis, sosiologis) yang dibahas di bab ini, pendekatan mana yang menurut Anda paling kurang dijalankan di sekolah Anda selama ini — dan langkah kecil apa yang bisa mulai diterapkan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan data yang dikutip pada bab ini (UNICEF dan Kementerian PPPA, 2021), berapa persen remaja Indonesia yang pernah mengalami perundungan (bullying) di sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekitar 15%</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekitar 40%</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekitar 60%</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru ingin menanamkan nilai kejujuran, tetapi hanya menyampaikannya lewat ceramah satu arah tanpa memberi contoh nyata atau menciptakan lingkungan yang mendukung kejujuran. Berdasarkan kerangka "mulai dari Sidik" pada bab ini, apa yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa mungkin memahami konsep jujur secara kognitif, tetapi nilai itu belum tentu terhayati dan terwujud dalam perilaku sehari-hari karena keteladanan dan pembiasaan tidak berjalan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa otomatis akan berperilaku jujur karena ceramah adalah metode paling efektif untuk semua nilai karakter</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Nilai kejujuran tidak perlu dilanjutkan dengan langkah lain karena satu ceramah sudah cukup membentuk karakter</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menghadapi remaja usia SMP yang mulai kritis dan gemar berdiskusi, namun guru masih mengajarkan nilai karakter dengan metode dongeng dan hafalan seperti untuk anak PAUD. Berdasarkan pendekatan psikologis pada bab ini, apa yang sebaiknya diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap mempertahankan metode dongeng karena sudah terbukti efektif untuk segala usia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyesuaikan metode dengan tahap perkembangan siswa, misalnya lewat diskusi dan refleksi diri yang lebih sesuai untuk usia remaja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh program pendidikan karakter karena siswa dianggap sudah terlalu kritis untuk dibimbing</button>
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
<h2 class="reveal">Peran Sekolah dalam Pendidikan Karakter</h2>
<p class="lede reveal">Sekolah bukan hanya tempat belajar mata pelajaran akademik, melainkan ruang pembentukan kepribadian — dan itu hanya mungkin terjadi bila visi-misi, budaya, serta kepemimpinan sekolah secara sengaja diarahkan untuk menumbuhkan karakter.</p>

<div class="card reveal">
  <h4>A. Visi dan Misi Sekolah Berbasis Pendidikan Karakter</h4>
  <p>Visi dan misi adalah titik tolak yang menentukan arah seluruh program karakter di sekolah. Agar benar-benar berfungsi, visi-misi berbasis pendidikan karakter perlu memenuhi empat syarat: jelas dan mudah dipahami oleh seluruh civitas akademika (siswa, guru, orang tua, dan masyarakat), terukur lewat indikator keberhasilan yang konkret, realistis dengan mempertimbangkan sumber daya dan kondisi sekolah, serta inspiratif sehingga mampu memotivasi semua pihak untuk bekerja sama mencapainya. Sebagai gambaran, sebuah visi bisa dirumuskan seperti "Menjadi sekolah yang unggul dalam prestasi dan berkarakter mulia, berlandaskan nilai-nilai agama dan budaya bangsa", yang kemudian diturunkan ke misi konkret seperti menyelenggarakan pembelajaran berkualitas berpusat pada peserta didik, mengembangkan nilai-nilai karakter lewat pembiasaan dan keteladanan, serta menjalin kerja sama dengan orang tua dan masyarakat dalam membangun karakter peserta didik.</p>
  <p>Visi dan misi ini tidak boleh berhenti sebagai slogan di dinding sekolah — ia harus diintegrasikan secara nyata ke dalam kurikulum dan program lewat lima jalur: pengembangan kurikulum yang mengintegrasikan nilai karakter ke dalam mata pelajaran dan kegiatan pembelajaran; pembiasaan lewat kegiatan rutin seperti upacara bendera, doa bersama, dan apel pagi; keteladanan dari seluruh warga sekolah dalam berperilaku dan bertindak; kegiatan ekstrakurikuler seperti pramuka, PMR, dan OSIS yang mendukung pengembangan karakter; serta kerja sama dengan orang tua dalam membangun karakter peserta didik di rumah. Sebagai contoh penerapan, nilai kejujuran bisa diintegrasikan bahkan ke pelajaran Matematika — misalnya lewat penekanan pada proses pengerjaan soal yang jujur, tanpa menyontek atau memanipulasi hasil.</p>

  <h4>B. Budaya Sekolah yang Mendukung Pendidikan Karakter</h4>
  <p>Budaya sekolah yang kondusif dan positif adalah kunci utama agar pendidikan karakter tidak berhenti sebagai teori. Budaya ini dibangun lewat empat langkah nyata: pertama, menciptakan atmosfer yang ramah dan mendukung — menyambut siswa dengan senyuman dan sapaan hangat, menciptakan suasana kelas yang aman dan nyaman, serta memberi penghargaan atas prestasi dan usaha siswa. Kedua, menerapkan aturan yang jelas dan konsisten — mudah dipahami, dipatuhi semua siswa, disertai konsekuensi yang tegas dan adil atas pelanggaran, sehingga siswa terbiasa mengikuti aturan dengan disiplin. Ketiga, mengembangkan budaya literasi lewat penyediaan buku dan bahan bacaan menarik serta kegiatan membaca-menulis yang kreatif. Keempat, menyelenggarakan kegiatan ekstrakurikuler yang positif, memberi ruang bagi siswa mengembangkan bakat sekaligus melatih nilai-nilai karakter dan kerja sama antarsiswa.</p>
  <p>Selain atmosfer umum sekolah, budaya disiplin, tanggung jawab, dan saling menghormati perlu dibangun secara khusus dan konsisten. Kebiasaan datang tepat waktu ditanamkan lewat keteladanan guru yang juga datang tepat waktu, disertai penghargaan bagi siswa yang disiplin waktu. Rasa tanggung jawab ditumbuhkan lewat pemberian tugas sesuai kemampuan siswa, dengan bimbingan agar tugas itu terselesaikan dengan baik. Nilai saling menghormati ditanamkan lewat pengajaran untuk menghormati guru, staf, dan teman sebaya, disertai suasana kelas yang saling menghargai dan toleran terhadap perbedaan. Ketiga kebiasaan ini, bila dijalankan konsisten, membuat siswa terbiasa berperilaku positif dan bertanggung jawab — bekal penting untuk menghadapi masa depan.</p>

  <h4>C. Kepemimpinan Sekolah dalam Mendorong Pendidikan Karakter</h4>
  <p>Kepemimpinan sekolah adalah elemen strategis dalam menumbuhkan dan menguatkan pendidikan karakter. Kepala sekolah, sebagai pemimpin tertinggi di lingkungan sekolah, memiliki tanggung jawab moral dan struktural untuk memastikan nilai-nilai karakter bukan sekadar slogan, melainkan menjadi budaya hidup sehari-hari. Langkah pertama yang perlu dilakukan adalah memiliki visi dan komitmen yang kuat — bukan sekadar di atas kertas, melainkan diwujudkan dalam rencana strategis sekolah, program kerja tahunan, dan indikator evaluasi keberhasilan pendidikan, sekaligus tercermin dalam cara pemimpin bertindak sebagai teladan utama integritas, empati, disiplin, dan tanggung jawab.</p>
  <p>Kepemimpinan yang efektif juga menuntut kemampuan membangun budaya sekolah yang kondusif — mendorong terbentuknya budaya saling menghargai, saling membantu, dan menghormati perbedaan, lewat aturan yang mendukung perilaku baik, kegiatan rutin bermuatan moral, serta program pembiasaan seperti salat berjamaah dan literasi pagi. Selain itu, kepala sekolah berperan sebagai motivator dan fasilitator bagi guru — memberikan pembinaan, pelatihan, dan ruang diskusi untuk pengembangan metode pembelajaran karakter, sekaligus mendorong guru menyisipkan nilai karakter di setiap mata pelajaran, tidak terbatas pada pelajaran agama atau PPKn saja. Tidak kalah penting, kepala sekolah harus membangun kemitraan dengan orang tua dan masyarakat, sebab pendidikan karakter tidak akan efektif jika hanya dilakukan di sekolah. Terakhir, kepemimpinan sekolah berperan mengukur dan mengevaluasi efektivitas pendidikan karakter lewat observasi langsung, asesmen non-kognitif, portofolio siswa, maupun umpan balik dari guru dan orang tua, sebagai dasar untuk terus menajamkan program yang dijalankan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga aspek Bab 2 — visi-misi, budaya sekolah, dan kepemimpinan — aspek mana yang menurut Anda paling lemah di sekolah Anda saat ini, dan langkah konkret apa yang bisa mulai dijalankan bulan ini untuk memperbaikinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa syarat yang harus dipenuhi agar visi-misi sekolah berbasis pendidikan karakter benar-benar berfungsi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empat syarat: jelas, terukur, realistis, dan inspiratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua syarat: singkat dan mudah dihafal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Enam syarat yang mencakup seluruh mata pelajaran</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memiliki aturan tata tertib yang lengkap tertulis di buku panduan, tetapi pelanggaran sering dibiarkan tanpa konsekuensi yang konsisten, tergantung suasana hati guru piket. Berdasarkan konsep budaya sekolah pada bab ini, apa akar masalah utamanya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Aturan tata tertib yang terlalu banyak dan rumit untuk diikuti</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Aturan tidak diterapkan secara konsisten dan adil, sehingga tidak membentuk kebiasaan disiplin yang nyata pada siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah tidak memiliki cukup ekstrakurikuler untuk menyalurkan energi siswa</button>
  </div>
  <div class="quiz-q">
    <p>Kepala Sekolah SDIT Cahaya Ilmi rutin mengikuti rapat dan aktif membuat kebijakan, tetapi jarang terlihat menyapa siswa atau menunjukkan sikap disiplin dalam kesehariannya di sekolah. Berdasarkan Bab 2, aspek kepemimpinan apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan administratif dalam menyusun laporan keuangan sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Peran sebagai teladan utama yang menunjukkan langsung nilai-nilai karakter seperti disiplin dan keramahan dalam keseharian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Frekuensi rapat dengan yayasan yang perlu ditambah</button>
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
<h2 class="reveal">Model dan Strategi Implementasi Pendidikan Karakter di Sekolah</h2>
<p class="lede reveal">Setelah memahami dasar teori dan peran sekolah, pertanyaan berikutnya adalah bagaimana mewujudkannya secara konkret — melalui model implementasi yang tepat, strategi pembelajaran yang sesuai jenjang, kurikulum yang terstruktur, dan integrasi yang menyeluruh ke mata pelajaran maupun ekstrakurikuler.</p>

<div class="card reveal">
  <h4>A. Model-Model Implementasi Pendidikan Karakter</h4>
  <p>Pemilihan model implementasi harus didasarkan pada visi-misi sekolah, karakteristik peserta didik, serta kondisi lingkungan sosial-budaya sekitar. Model yang paling menyeluruh adalah <strong>Model Terintegrasi, Inklusif, dan Holistik</strong>, di mana nilai karakter tidak diajarkan sebagai mata pelajaran tersendiri, melainkan diintegrasikan ke seluruh aspek pembelajaran dan kehidupan sekolah lewat tiga cara utama: keteladanan, pembiasaan, dan budaya sekolah. Semangat ini sejalan dengan falsafah Ki Hajar Dewantara, "Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani" — pendidik sejati adalah mereka yang mampu memberi teladan di depan, membangkitkan semangat di tengah, dan mendukung dari belakang. Model ini diwujudkan lewat lima elemen yang saling memperkuat: kurikulum terintegrasi (setiap mata pelajaran memuat unsur nilai karakter), kegiatan belajar mengajar yang berkarakter (guru menyelipkan nilai dalam proses mengajar, bukan hanya menyampaikan materi), pembiasaan positif (rutinitas harian seperti salam-sapa dan doa bersama), keteladanan dari seluruh warga sekolah, serta budaya sekolah yang positif dan bebas dari perundungan.</p>
  <p>Alternatif lain adalah <strong>Model Pengembangan Nilai-Nilai Karakter Tertentu</strong>, di mana sekolah tidak menanamkan semua nilai sekaligus, melainkan memilih fokus pada nilai yang dianggap paling relevan dengan visinya — misalnya religiusitas lewat salat berjamaah dan tilawah Al-Qur'an, kepemimpinan lewat OSIS dan pramuka, atau kepedulian lingkungan lewat program bank sampah dan penghijauan. Pendekatan ini memungkinkan strategi yang lebih terarah dan mendalam dibanding mencoba menanamkan terlalu banyak nilai sekaligus secara dangkal. Model ketiga, <strong>Pembelajaran Kooperatif dan Service Learning</strong>, menekankan pengalaman langsung dan interaksi sosial sebagai sarana pembentukan karakter — siswa belajar nilai bukan dari penjelasan guru semata, melainkan dari pengalaman nyata bekerja sama dan melayani orang lain. Ketiga model ini tidak saling meniadakan; sekolah dapat memadukan model terintegrasi sebagai fondasi umum, sembari tetap memiliki nilai unggulan spesifik yang menjadi ciri khasnya.</p>

  <h4>B. Strategi Implementasi Pendidikan Karakter</h4>
  <p>Implementasi pendidikan karakter tidak boleh parsial atau seremonial — ia harus menyeluruh dan terencana, mencakup suasana sekolah, interaksi sosial, penggunaan teknologi, hingga keterlibatan aktif seluruh warga sekolah. Ada tiga strategi utama yang saling terkait. Pertama, <strong>pendekatan pedagogis dan andragogis</strong> yang disesuaikan tahap perkembangan siswa: pendekatan pedagogis untuk usia dini hingga menengah (PAUD, SD, SMP) menempatkan guru sebagai pengarah dan model nilai lewat ceramah bernuansa cerita, diskusi kelompok, bermain peran, dan simulasi kehidupan nyata; sedangkan pendekatan andragogis untuk remaja (SMA/SMK) menempatkan guru sebagai fasilitator yang membantu siswa menemukan dan membentuk karakternya sendiri lewat diskusi terbuka tentang isu aktual, proyek sosial, penelitian sederhana, dan pembelajaran kontekstual yang mengaitkan materi dengan kehidupan nyata.</p>
  <p>Kedua, <strong>penerapan metode pembelajaran yang inovatif dan kreatif</strong>, mencakup metode kooperatif (siswa bekerja dalam kelompok lewat teknik seperti Jigsaw, Think-Pair-Share, atau Group Investigation, sehingga belajar tanggung jawab, empati, dan menghargai perbedaan pendapat), metode berbasis proyek (siswa belajar lewat pengalaman langsung mengerjakan proyek nyata seperti karya seni bertema kejujuran, bakti sosial, atau kampanye anti-bullying), dan metode kontekstual (mengaitkan materi dengan situasi nyata yang dialami siswa, misalnya membahas kasus mencontek yang benar-benar terjadi saat mendiskusikan nilai kejujuran). Ketiga, <strong>pemanfaatan teknologi informasi dan komunikasi</strong> lewat pembelajaran daring yang memungkinkan akses materi karakter kapan saja (via Moodle, Schoology, atau Google Classroom), media sosial sebagai saluran penyebaran konten edukatif dan inspiratif (siswa membuat video singkat tentang nilai kejujuran, sekolah mengunggah dokumentasi bakti sosial), serta aplikasi edukasi bergaya permainan yang membuat siswa lebih mudah memahami dan termotivasi menerapkan nilai karakter.</p>

  <h4>C. Implementasi Pendidikan Karakter di Setiap Jenjang Pendidikan</h4>
  <p>Karena anak usia dini berada dalam fase meniru dan menyerap, implementasi di jenjang <strong>PAUD</strong> berfokus pada nilai dasar seperti kejujuran, disiplin, rasa hormat, dan kerja sama, lewat metode yang menyenangkan dan konkret: bermain dan bernyanyi lagu bertema kebaikan, menceritakan kisah bergambar tentang tokoh baik, memberi contoh dan teladan langsung dari guru dan orang tua, serta menciptakan lingkungan yang aman dan penuh kasih. Contoh kegiatannya bisa berupa bermain peran tentang antre di kantin atau menanam tanaman bersama sebagai bentuk cinta lingkungan.</p>
  <p>Pada jenjang <strong>SD/MI</strong>, anak mulai memahami konsep moral dasar dan siap diajak berpikir tentang konsekuensi tindakan, sehingga fokus nilainya meluas ke tanggung jawab, toleransi, kemandirian, dan kepedulian. Metode yang digunakan mencakup cerita, permainan, dan simulasi situasi nyata; pembelajaran tematik yang menyisipkan nilai ke dalam mata pelajaran; proyek dan kegiatan kelompok yang melatih kerja sama; serta penghargaan atas perilaku positif seperti predikat "Bintang Kejujuran". Sementara itu, pada jenjang <strong>SMP/MTs</strong>, anak memasuki masa remaja dan mulai mengalami krisis identitas, sehingga fokus nilai bergeser ke empati, integritas, tanggung jawab sosial, dan kepemimpinan. Metode yang lebih tepat adalah diskusi dan debat yang memberi ruang berpikir kritis, proyek dan penelitian kecil yang mengajak belajar dari pengalaman nyata, keteladanan guru yang terbuka dan adil, serta kegiatan sosial dan peran sebagai mentor bagi adik kelas yang melatih tanggung jawab sosial secara langsung. Untuk jenjang SMA/SMK yang lebih matang, pendekatan andragogis pada bagian B di atas — diskusi terbuka, proyek sosial, dan pembelajaran kontekstual — menjadi pijakan utama, karena siswa di usia ini sudah mampu merefleksikan nilai secara mandiri.</p>

  <h4>D. Dua Desain Kurikulum Karakter di Sekolah</h4>
  <p>Kurikulum karakter dapat dirancang dalam dua desain yang saling melengkapi. <strong>Kurikulum Karakter Global</strong> menerapkan keempat pilar Sidik-Amanah-Fathonah-Tablig secara bertahap di sepanjang jenjang kelas, dengan indikator yang makin kompleks seiring bertambahnya usia — misalnya nilai Sidik (integritas/jujur) dimulai dari tauhid dan kejujuran sederhana di kelas awal, berkembang menjadi ketangguhan dan istikamah di kelas menengah; nilai Amanah (peduli) berkembang dari sopan-santun sederhana menjadi tanggung jawab sosial yang lebih besar; nilai Fathonah (pembelajar) berkembang dari rasa ingin tahu menjadi kemampuan berpikir strategis dan perbaikan berkelanjutan; dan nilai Tablig (profesional/kepemimpinan) berkembang dari kerja sama sederhana menjadi kompetensi memimpin, visioner, dan rela berkorban di jenjang akhir. Desain ini memastikan penguatan karakter berjalan progresif, bukan diulang-ulang secara identik dari tahun ke tahun.</p>
  <p><strong>Kurikulum Karakter Spesifik</strong>, di sisi lain, disusun berdasarkan nilai-nilai unggulan khusus yang dipilih sekolah sesuai visi-misi dan kekhasannya sendiri — bukan mengikuti kerangka global yang seragam. Sekolah yang ingin dikenal unggul dalam kedisiplinan, misalnya, dapat menyusun kurikulum karakter spesifik yang menempatkan kedisiplinan sebagai nilai inti di setiap jenjang, lengkap dengan indikator dan kegiatan pendukungnya sendiri. Kombinasi kedua desain ini memberi sekolah fleksibilitas: kurikulum global menjamin fondasi karakter yang menyeluruh dan bertahap, sementara kurikulum spesifik memungkinkan sekolah menonjolkan keunikan dan keunggulan karakter yang menjadi ciri khasnya.</p>

  <h4>E. Integrasi Pendidikan Karakter dalam Mata Pelajaran dan Kegiatan Ekstrakurikuler</h4>
  <p>Karakter tidak boleh berdiri sendiri sebagai mata pelajaran khusus — ia harus terintegrasi menyeluruh lewat dua jalur utama. Dalam <strong>integrasi ke mata pelajaran</strong>, setiap pelajaran punya potensi besar menanamkan nilai: Bahasa Indonesia lewat diskusi nilai kejujuran dan keberanian dalam cerpen atau puisi; Matematika lewat penekanan ketelitian, kerja keras, dan kejujuran dalam mengerjakan soal serta proyek kelompok yang melatih kerja sama; IPA lewat topik lingkungan yang menumbuhkan kepedulian; Pendidikan Agama sebagai ruang utama memperkuat iman, adab, dan kasih sayang; serta PJOK yang kaya mengajarkan sportivitas, disiplin, dan menghargai lawan. Guru dapat menjalankan strategi ini dengan menyisipkan pertanyaan reflektif terkait nilai karakter dalam diskusi kelas, memberi tugas proyek berbasis nilai, serta menjadikan penilaian karakter sebagai bagian dari penilaian sikap dalam rapor.</p>
  <p>Dalam <strong>integrasi ke kegiatan ekstrakurikuler</strong>, setiap jenis kegiatan membawa nilai karakter yang khas: Pramuka melatih disiplin, kemandirian, kerja sama, dan kepemimpinan; PMR menanamkan kepedulian sosial dan empati; OSIS/MPK melatih amanah dan tanggung jawab kepemimpinan; kegiatan seni dan musik membentuk kreativitas dan kepercayaan diri; olahraga membangun sportivitas dan semangat juang; ekskul literasi/jurnalistik menumbuhkan sikap kritis dan integritas; sedangkan kegiatan rohani memperkuat spiritualitas dan akhlak mulia. Sekolah dapat mendorong integrasi ini lewat penyusunan program ekstrakurikuler yang berfokus pada penguatan karakter, pelatihan bagi pembina agar mereka juga menjadi teladan, serta ruang refleksi atau jurnal kegiatan bagi siswa. Agar semua ini berhasil, dibutuhkan konsistensi antar-guru mata pelajaran dan pembina ekstrakurikuler yang sepakat bahwa pembentukan karakter adalah tugas bersama, sekaligus kolaborasi aktif dengan orang tua lewat pertemuan rutin dan laporan perkembangan karakter siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari ketiga model implementasi (Terintegrasi-Holistik, Nilai Tertentu, Kooperatif/Service Learning) yang dibahas di bab ini, model mana yang paling mendekati praktik di sekolah Anda saat ini — dan apakah kombinasi dengan model lain bisa memperkuat hasil yang sudah dicapai?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Pendekatan pembelajaran karakter yang menempatkan guru sebagai fasilitator (bukan satu-satunya sumber informasi) dan lebih menekankan kemandirian serta refleksi diri paling sesuai digunakan untuk jenjang...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">PAUD, karena anak usia dini membutuhkan kebebasan penuh tanpa bimbingan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">SMA/SMK, sesuai pendekatan andragogis untuk remaja yang mulai berpikir kritis dan membangun identitas diri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Semua jenjang secara identik tanpa perlu penyesuaian usia</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah SD ingin menanamkan nilai karakter lewat pelajaran Matematika tanpa mengubahnya menjadi pelajaran agama atau moral. Berdasarkan Bab 3, pendekatan mana yang paling tepat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menekankan ketelitian, kejujuran dalam proses mengerjakan soal (tidak mencontek), dan memberi proyek kelompok untuk melatih kerja sama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh soal matematika dengan soal-soal tentang kejujuran secara verbal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus pelajaran Matematika karena dianggap tidak relevan dengan pendidikan karakter</button>
  </div>
  <div class="quiz-q">
    <p>SMP Nurul Falah memiliki program ekstrakurikuler Pramuka dan OSIS yang aktif, tetapi guru mata pelajaran umum sama sekali tidak menyisipkan nilai karakter dalam pembelajaran di kelas, sehingga penguatan karakter terasa terpisah dari kegiatan akademik. Berdasarkan Bab 3, langkah paling tepat untuk mengatasi hal ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan Pramuka dan OSIS karena dianggap tidak sejalan dengan akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendorong konsistensi dan kolaborasi antara guru mata pelajaran dan pembina ekstrakurikuler agar penguatan karakter berjalan menyeluruh, tidak hanya di satu jalur</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena ekstrakurikuler sudah cukup untuk membentuk karakter siswa</button>
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
<h2 class="reveal">Evaluasi dan Target Pendidikan Karakter</h2>
<p class="lede reveal">Program karakter yang tidak dievaluasi berisiko berjalan tanpa arah — bab ini membahas bagaimana mengukur keberhasilannya lewat indikator yang jelas, proses evaluasi dan monitoring yang tepat, target yang terukur bagi setiap pihak, serta instrumen penilaian yang adil.</p>

<div class="card reveal">
  <h4>A. Indikator Keberhasilan Pendidikan Karakter</h4>
  <p>Keberhasilan pendidikan karakter dapat diukur lewat tiga domain utama yang saling melengkapi. <strong>Indikator kognitif</strong> mengukur sejauh mana siswa memahami nilai karakter dan mampu menjelaskan maknanya, menganalisis situasi dan mengambil keputusan berdasarkan nilai tersebut, serta menerapkannya dalam kehidupan sehari-hari — misalnya siswa dapat menyebutkan nilai-nilai karakter utama dan menjelaskan mengapa nilai itu penting. <strong>Indikator afektif</strong> mengukur perasaan, sikap, dan minat siswa terhadap nilai karakter — apakah mereka menunjukkan rasa senang dan bangga saat melakukan tindakan yang mencerminkan nilai tersebut, memiliki sikap positif terhadap orang lain, dan berminat mempelajarinya lebih lanjut. <strong>Indikator psikomotorik</strong> mengukur keterampilan, kebiasaan, dan keteladanan nyata — apakah siswa berperilaku sopan, menyelesaikan tanggung jawabnya dengan baik, dan membantu orang lain yang membutuhkan, secara konsisten bukan sesekali.</p>
  <p>Untuk mengukur ketiga domain ini, sekolah dapat menggunakan lima metode dengan kelebihan dan kekurangan masing-masing. <strong>Observasi</strong> memberi informasi yang kaya dan detail karena dilakukan langsung, namun memakan waktu dan berisiko subjektif. <strong>Tes</strong> (tertulis, lisan, atau kinerja) menghasilkan data kuantitatif yang mudah dianalisis, tetapi tidak selalu menangkap aspek internal seperti nilai dan keyakinan, serta berisiko membuat siswa stres. <strong>Kuesioner</strong> — baik self-assessment, peer-assessment, maupun parent-assessment — efisien mengumpulkan data dari banyak responden sekaligus, namun jawabannya bisa saja tidak jujur. <strong>Wawancara</strong> memberi pemahaman yang personal dan kontekstual tentang motivasi di balik perilaku siswa, tetapi memakan waktu dan rentan bias pewawancara. <strong>Portofolio</strong> — kumpulan karya siswa seperti jurnal, foto kegiatan, atau proyek kolaboratif — memberi gambaran holistik dan melibatkan siswa dalam proses penilaian, meski juga memakan waktu dan berisiko subjektif. Karena masing-masing metode punya kekurangan, kombinasi beberapa instrumen sekaligus akan menghasilkan penilaian yang jauh lebih adil dan komprehensif dibanding mengandalkan satu metode saja.</p>

  <h4>B. Evaluasi dan Monitoring Implementasi</h4>
  <p>Evaluasi implementasi pendidikan karakter mencakup tiga lapisan: evaluasi program (menilai apakah kurikulum dan silabus telah dirancang sesuai tujuan pendidikan karakter, lewat analisis dokumen, observasi, dan wawancara pemangku kepentingan), evaluasi kegiatan (menilai apakah kegiatan yang dijalankan mencapai tujuan pembelajaran, lewat analisis hasil belajar dan umpan balik), serta evaluasi hasil belajar (menilai apakah siswa benar-benar mengembangkan karakter yang diharapkan, lewat tes, observasi perilaku, dan portofolio).</p>
  <p>Berdampingan dengan evaluasi, sekolah juga perlu menjalankan dua jenis monitoring yang sering tertukar namun sebetulnya berbeda fokus. <strong>Monitoring implementasi pendidikan karakter</strong> lebih berfokus pada proses — memantau bagaimana program dan kegiatan dijalankan secara keseluruhan, lewat observasi (misalnya mengamati apakah guru menggunakan metode yang tepat), wawancara siswa tentang pengalaman mereka, dan analisis dokumen seperti silabus. Sementara itu, <strong>monitoring pengukuran indikator keberhasilan</strong> lebih berfokus pada hasil — memantau capaian siswa terhadap indikator spesifik yang telah ditetapkan, lewat tes pengetahuan, penilaian portofolio, dan observasi perilaku konkret. Perbedaan fokus ini penting dipahami sekolah: monitoring implementasi menjawab pertanyaan "apakah program berjalan sesuai rencana?", sedangkan monitoring indikator menjawab "seberapa jauh karakter siswa benar-benar berkembang?" — keduanya perlu dijalankan berdampingan, bukan dipilih salah satu, dan hasilnya ditindaklanjuti lewat perbaikan program, pemberian pelatihan tambahan bagi guru, atau pengembangan sumber daya baru seperti buku dan modul.</p>

  <h4>C. Target Pendidikan Karakter</h4>
  <p>Target pendidikan karakter dapat dirumuskan berdasarkan nilai-nilai universal seperti religius (taat menjalankan ibadah), jujur (berkata dan bertindak sesuai kebenaran), tanggung jawab (mampu menyelesaikan tugas dengan baik dan dapat diandalkan), toleransi (menghormati perbedaan dan hidup damai), serta peduli sosial (berempati dan aktif membantu orang lain). Namun buku ini menawarkan kerangka yang lebih terstruktur lewat <strong>target berbasis adab</strong>, yang merumuskan setiap target dalam empat lapis: pengetahuan, sikap, perilaku, dan contoh nyata — bagi tiga kelompok sekaligus: siswa, guru, dan pimpinan sekolah.</p>
  <p>Bagi <strong>siswa</strong>, target adab mencakup lima relasi: adab kepada Allah (memahami dasar keimanan, bersyukur dan taat, menjalankan ibadah serta berdoa sebelum-sesudah belajar), adab kepada guru/pimpinan (menghormati mereka sebagai pendidik, bersikap sopan dan patuh, memberi salam dan menjalankan instruksi dengan baik), adab kepada sesama siswa (memahami pentingnya tolong-menolong, bersikap toleran dan empati, saling membantu dan tidak melakukan perundungan), adab kepada orang tua (memahami kewajiban berbakti, bersikap sayang dan hormat, membantu pekerjaan rumah dan meminta restu), serta adab kepada tamu (memahami pentingnya keramahan, menyambut tamu dengan baik dan membantu bila diperlukan). Bagi <strong>guru</strong>, target serupa dirumuskan dalam relasi kepada Allah (mengajar dengan niat ibadah dan penuh dedikasi), kepada siswa (memahami kebutuhan individual, bersikap sabar dan adil, menggunakan metode pembelajaran yang efektif), kepada pimpinan (menghormati dan patuh terhadap kebijakan sekolah secara profesional), serta kepada orang tua siswa (menjalin komunikasi terbuka dan transparan tentang perkembangan anak). Bagi <strong>pimpinan sekolah</strong>, target mencakup adab kepada Allah (menjalankan amanah kepemimpinan berlandaskan nilai agama), kepada guru (menghargai dan mendukung kinerja mereka lewat penghargaan dan kesempatan pengembangan diri), serta kepada siswa (menciptakan lingkungan belajar yang aman dan menerapkan aturan yang adil bagi semua). Kerangka berbasis adab ini membuat target pendidikan karakter jauh lebih konkret dan bisa diamati sehari-hari, dibanding sekadar daftar nilai abstrak.</p>

  <h4>D. Instrumen dan Alat Ukur Pendidikan Karakter</h4>
  <p>Agar penilaian karakter adil dan bermakna, instrumen yang digunakan sebaiknya memenuhi empat ciri: bersifat kualitatif sekaligus kuantitatif (tidak hanya angka, tapi juga deskripsi perilaku), berbasis pengamatan nyata (bukan asumsi), dilakukan secara berkelanjutan (bukan sesekali), serta melibatkan berbagai pihak — guru, teman sebaya, dan orang tua — sebagai penilai. Berdasarkan prinsip ini, sekolah dapat menggunakan beragam jenis instrumen: observasi langsung dengan lembar indikator karakter tertentu (misalnya mencatat apakah siswa datang tepat waktu atau menjaga kebersihan kelas), jurnal refleksi guru yang mencatat perkembangan perilaku siswa dari waktu ke waktu, angket atau kuesioner dalam bentuk self-assessment, peer-assessment, maupun parent-assessment dengan skala Likert, penilaian portofolio berupa kumpulan catatan harian, foto kegiatan sosial, atau proyek kolaboratif, wawancara untuk pemahaman yang lebih personal dan kontekstual, serta penilaian tematik dalam proyek atau kegiatan ekstrakurikuler yang menilai tanggung jawab, kepedulian sosial, kerja sama, dan kepemimpinan lewat rubrik berbasis karakter.</p>
  <p>Sebagai contoh format sederhana, lembar observasi bisa disusun dalam bentuk tabel yang mencatat skor 1-4 untuk aspek disiplin, tanggung jawab, dan kejujuran tiap siswa (1=tidak pernah, 2=kadang-kadang, 3=sering, 4=selalu), disertai kolom catatan khusus. Yang perlu selalu diperhatikan: gunakan indikator yang spesifik dan terukur, jangan terlalu umum; hindari penilaian yang terlalu subjektif dengan mengombinasikan beberapa instrumen sekaligus; dan yang terpenting, ingat bahwa penilaian karakter bukan untuk menghakimi siswa, melainkan untuk membina dan mengarahkan mereka menjadi pribadi yang lebih baik. Dengan instrumen yang tepat, sekolah tidak hanya menilai, tetapi juga mendampingi dan memperbaiki karakter siswa secara terus-menerus.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima metode pengukuran karakter (observasi, tes, kuesioner, wawancara, portofolio) yang dibahas di bab ini, kombinasi mana yang paling realistis untuk mulai diterapkan di sekolah Anda dengan sumber daya yang ada saat ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, keberhasilan pendidikan karakter dapat diukur melalui tiga domain utama, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kognitif, afektif, dan psikomotorik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Akademik, finansial, dan administratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum, sarana, dan prasarana</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin menilai perkembangan karakter siswa secara adil, namun hanya mengandalkan satu kali tes tertulis di akhir semester. Berdasarkan Bab 4, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tes tertulis tidak selalu bisa mengukur aspek internal seperti nilai dan keyakinan, maupun perilaku nyata siswa sehari-hari, sehingga perlu dikombinasikan dengan metode lain seperti observasi dan portofolio</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tes tertulis adalah satu-satunya metode yang valid untuk menilai karakter sehingga tidak ada risiko</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tes tertulis harus dihapus sepenuhnya dan diganti observasi saja</button>
  </div>
  <div class="quiz-q">
    <p>SD Islam Ar-Rahman ingin merumuskan target karakter yang lebih konkret daripada sekadar "siswa harus jujur dan disiplin". Berdasarkan kerangka target berbasis adab pada Bab 4, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup menempelkan poster nilai-nilai karakter di dinding kelas tanpa penjabaran lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merumuskan target dalam empat lapis (pengetahuan, sikap, perilaku, contoh nyata) untuk setiap relasi adab, misalnya adab kepada guru, sesama siswa, dan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh mata pelajaran dengan pelajaran adab tanpa mata pelajaran umum</button>
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
<h2 class="reveal">Tantangan dan Solusi dalam Implementasi</h2>
<p class="lede reveal">Betapa pun matang sebuah program dirancang, implementasi pendidikan karakter di lapangan selalu berhadapan dengan kendala nyata — bab ini memetakan tantangan itu dari akarnya, sekaligus menawarkan solusi dan rekomendasi konkret bagi setiap pemangku kepentingan.</p>

<div class="card reveal">
  <h4>A. Tantangan-Tantangan dalam Implementasi</h4>
  <p>Tantangan implementasi pendidikan karakter dapat dipetakan dari dua sumber utama. Dari <strong>faktor internal sekolah</strong>, persoalan muncul di tiga lini: pada kurikulum, berupa kurangnya fokus pada pendidikan karakter, beban belajar yang padat sehingga menyisakan sedikit waktu untuknya, serta kurangnya integrasi dengan mata pelajaran lain; pada guru, berupa kurangnya kompetensi dan pelatihan, beban kerja yang berat sehingga sulit fokus pada karakter, serta kurangnya motivasi dan penghargaan bagi guru yang aktif menjalankannya; dan pada siswa sendiri, berupa kurangnya kesadaran dan motivasi, pengaruh negatif dari lingkungan luar sekolah, serta budaya sekolah yang belum sepenuhnya mendukung.</p>
  <p>Dari <strong>faktor eksternal sekolah</strong>, tantangan datang dari keluarga — kurangnya pemahaman dan peran orang tua, minimnya komunikasi dan kerja sama dengan sekolah, serta budaya keluarga yang kurang mendukung — dan dari masyarakat, berupa pengaruh negatif media sosial dan budaya populer, kurangnya figur teladan di lingkungan sekitar, serta minimnya kerja sama antara sekolah dan masyarakat. Di luar dua sumber ini, ada tiga tantangan lintas-pihak yang juga krusial: kurangnya komitmen (baik dari pemerintah dalam mengalokasikan anggaran dan kebijakan, dari sekolah dalam mengalokasikan waktu dan sumber daya, maupun dari guru dan orang tua dalam mendukung penuh), kurangnya sumber daya (minimnya buku ajar dan materi pembelajaran, infrastruktur yang belum memadai, serta tenaga ahli dan pelatihan bagi guru), dan kurangnya budaya yang mendukung (baik di sekolah maupun di masyarakat luas, termasuk minimnya penghargaan bagi siswa yang berkarakter baik). Memahami peta tantangan ini penting agar sekolah tidak salah sasaran ketika mencari solusi — sebab akar masalah yang berbeda menuntut solusi yang berbeda pula.</p>

  <h4>B. Solusi dan Rekomendasi</h4>
  <p>Untuk mengatasi tantangan-tantangan tersebut, ada empat strategi utama yang saling menopang. Pertama, <strong>memperkuat kurikulum</strong> — mengembangkan kurikulum yang lebih fokus pada pendidikan karakter, mengintegrasikannya dengan semua mata pelajaran, serta menyediakan waktu yang cukup untuknya dalam struktur kurikulum, bukan sekadar tempelan di sela jam pelajaran. Kedua, <strong>meningkatkan kompetensi guru</strong> — memberikan pelatihan tentang pendidikan karakter, menyediakan materi dan panduan pembelajaran yang mudah digunakan, serta memberi penghargaan dan motivasi bagi guru yang aktif menjalankannya, sehingga upaya mereka tidak terasa sia-sia atau tidak dihargai.</p>
  <p>Ketiga, <strong>meningkatkan kesadaran dan motivasi siswa</strong> — menanamkan nilai karakter lewat kegiatan belajar yang menarik dan interaktif (bukan ceramah monoton), memberi contoh dan teladan yang baik dari seluruh warga sekolah, serta memberi penghargaan dan apresiasi bagi siswa yang berkarakter baik agar perilaku positif terus berulang. Keempat, <strong>memperkuat peran keluarga dan masyarakat</strong> — memberikan edukasi kepada keluarga tentang pentingnya pendidikan karakter, membangun komunikasi dan kerja sama yang baik antara sekolah dan keluarga, serta menciptakan lingkungan yang mendukung baik di sekolah maupun di masyarakat sekitar. Keempat solusi ini kemudian diterjemahkan menjadi rekomendasi spesifik bagi tiga pemangku kepentingan: <strong>sekolah</strong> perlu membuat kebijakan dan program yang mendukung, menyediakan sumber daya yang dibutuhkan, memberikan pelatihan bagi guru, dan membangun budaya sekolah yang mendukung nilai karakter; <strong>pemerintah</strong> perlu mengalokasikan anggaran yang cukup, mengembangkan kebijakan pendukung, menyediakan pelatihan dan materi pembelajaran bagi guru, serta bekerja sama dengan sekolah dan masyarakat; sementara <strong>orang tua</strong> perlu menanamkan nilai karakter sejak dini di rumah, memberi contoh dan teladan yang baik, berkomunikasi aktif dengan sekolah, serta mendukung penuh kegiatan pendidikan karakter yang diselenggarakan sekolah. Ketika ketiga pihak ini bergerak selaras, tantangan yang tadinya terasa berat dapat diurai satu demi satu secara sistematis.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari seluruh tantangan yang dipetakan di bab ini (kurikulum, guru, siswa, keluarga, masyarakat, komitmen, sumber daya, budaya), tantangan mana yang paling terasa nyata di lingkungan sekolah Anda — dan solusi mana dari Bab 5 yang paling mungkin mulai dijalankan dalam waktu dekat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, kurangnya kompetensi dan pelatihan guru dalam pendidikan karakter termasuk ke dalam kategori tantangan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Faktor internal sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Faktor eksternal dari masyarakat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Faktor eksternal dari pemerintah pusat</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah sudah memiliki kurikulum karakter yang baik dan guru yang terlatih, tetapi banyak orang tua siswa jarang hadir dalam pertemuan sekolah dan tidak konsisten menerapkan nilai yang sama di rumah. Berdasarkan Bab 5, solusi mana yang paling relevan untuk situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah lebih banyak pelatihan guru karena guru dianggap sebagai satu-satunya penentu keberhasilan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memperkuat peran keluarga lewat edukasi kepada orang tua dan membangun komunikasi-kerja sama yang lebih aktif antara sekolah dan keluarga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan keterlibatan orang tua karena pendidikan karakter cukup dilakukan di sekolah saja</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan sebuah sekolah mengeluhkan bahwa program pendidikan karakter tidak berjalan maksimal karena minim anggaran, tidak ada buku ajar khusus, dan guru belum pernah mengikuti pelatihan terkait. Berdasarkan Bab 5, kombinasi rekomendasi paling tepat untuk mengatasi hal ini melibatkan peran...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa semata, karena merekalah yang harus lebih giat belajar karakter secara mandiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah dan pemerintah bersama-sama, mencakup penyediaan sumber daya, pelatihan guru, serta alokasi anggaran dan kebijakan pendukung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Media sosial semata, karena teknologi dianggap bisa menggantikan seluruh kebutuhan sumber daya sekolah</button>
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
<h2 class="reveal">Mendukung Keluarga dalam Pendidikan Karakter</h2>
<p class="lede reveal">Keluarga adalah tempat pertama dan utama bagi anak belajar tentang kehidupan — pendidikan karakter tidak akan tumbuh utuh jika hanya mengandalkan sekolah, sehingga kemitraan yang aktif antara sekolah dan orang tua menjadi kunci keberlanjutannya.</p>

<div class="card reveal">
  <h4>A. Peran Orang Tua dalam Pendidikan Karakter</h4>
  <p>Peran orang tua dalam pendidikan karakter anak sangat besar dan tidak bisa digantikan siapa pun, termasuk sekolah, karena merekalah pendidik pertama dan utama sejak anak lahir. Ada empat bentuk peran penting yang, jika dijalankan sungguh-sungguh, memberi dampak besar pada pembentukan kepribadian anak. Pertama, <strong>sebagai teladan sehari-hari</strong> — anak belajar paling kuat lewat contoh nyata yang dilihatnya setiap hari, sehingga orang tua perlu menjadi teladan dalam kejujuran (berbicara apa adanya), kedisiplinan (konsisten terhadap aturan dan janji), kesabaran (terutama saat menghadapi kesalahan anak), dan sikap hormat terhadap pasangan maupun lingkungan sekitar. Kedua, <strong>sebagai pendidik utama di rumah</strong> — mengajarkan tanggung jawab lewat tugas sesuai usia anak (membereskan mainan, menyiram tanaman), kemandirian dengan mendorong anak mencoba sendiri sebelum dibantu, kepedulian lewat ajakan berbagi dan membantu orang lain, serta kedisiplinan lewat rutinitas harian yang teratur.</p>
  <p>Ketiga, <strong>sebagai pendamping emosi dan moral</strong> — anak tidak hanya butuh pendidikan kognitif, tetapi juga bimbingan mengelola perasaan saat marah, kecewa, atau sedih, misalnya dengan mengakui bahwa "kamu boleh merasa kecewa, itu wajar, tapi yuk kita lihat kamu sudah berusaha keras dan itu luar biasa" — pendekatan yang mengajarkan anak memahami emosinya sendiri sekaligus tumbuh menjadi pribadi yang tangguh. Keempat, <strong>sebagai penghubung dan mitra sekolah</strong> — menjalin komunikasi aktif dengan guru untuk mengetahui perkembangan anak, menyampaikan kebiasaan atau tantangan anak di rumah yang mungkin memengaruhi perilakunya di sekolah, serta menyesuaikan pendekatan agar nilai yang diajarkan selaras antara rumah dan sekolah — misalnya bila sekolah sedang menekankan disiplin waktu, orang tua ikut membuat jadwal belajar yang teratur di rumah. Orang tua juga dapat dilibatkan langsung lewat seminar parenting, menjadi relawan kegiatan bakti sosial, atau menjadi narasumber sederhana dalam acara bertema keluarga di sekolah.</p>

  <h4>B. Program Kemitraan dengan Orang Tua</h4>
  <p>Karena membangun karakter anak bukan tanggung jawab sekolah semata, kemitraan aktif dan harmonis dengan orang tua perlu diwujudkan lewat sejumlah program konkret. Sosialisasi program pendidikan karakter dapat dilakukan lewat pertemuan rutin wali murid — bukan sekadar laporan akademik, melainkan wadah menyamakan visi dan berbagi strategi membentuk karakter anak — serta penyebaran informasi lewat brosur dan media komunikasi sekolah lainnya, sehingga orang tua senantiasa mengetahui program yang sedang berjalan dan bagaimana mereka bisa mendukungnya dari rumah.</p>
  <p>Selain sosialisasi rutin, sekolah dapat menghadirkan narasumber tamu dari berbagai profesi untuk berbagi kisah inspiratif kepada siswa dan orang tua sekaligus — misalnya seorang dokter yang bercerita tentang pentingnya kebersihan, atau seorang pengusaha yang berbagi kisah kerja keras dan tanggung jawab — memberi anak inspirasi langsung dari dunia nyata sekaligus memperkuat peran orang tua sebagai teladan. Sekolah juga dapat menyediakan "pojok konsultasi parenting", yaitu waktu tertentu bagi guru dan orang tua berdiskusi lebih dalam, terutama jika ada tantangan perilaku pada anak — bukan untuk menghakimi, melainkan untuk saling mendukung dan mencari solusi terbaik bagi perkembangan karakter anak. Prinsip pentingnya, kemitraan sekolah dan orang tua harus bersifat dua arah, saling terbuka, dan saling mendukung — sebab ketika keduanya berjalan beriringan, karakter anak akan tumbuh kuat dari dua sisi sekaligus: rumah dan sekolah.</p>

  <h4>C. Edukasi Parenting tentang Nilai-Nilai Karakter</h4>
  <p>Mendidik anak agar berkarakter baik adalah proses panjang yang perlu dijalankan konsisten di dua tempat utama: rumah dan sekolah. Karena itu, sekolah perlu membekali orang tua lewat lima langkah edukasi parenting. Pertama, <strong>memberi pemahaman tentang nilai-nilai inti</strong> — memastikan orang tua memahami dengan jelas nilai apa saja yang ingin ditanamkan (jujur, disiplin, tanggung jawab, peduli, sopan santun, kerja sama) beserta alasannya, misalnya mengapa kejujuran penting (karena hidup damai dan penuh kepercayaan hanya bisa dibangun lewat kejujuran) — disampaikan lewat brosur, video pendek, artikel bulanan, atau sesi pengantar dalam pertemuan wali murid. Kedua, <strong>memberikan contoh praktik nyata di rumah</strong> — membimbing orang tua tentang cara menanamkan nilai dalam keseharian, misalnya mengajak anak mengatur jadwal harian untuk melatih tanggung jawab, atau membiasakan anak melihat orang tua menyapa tetangga dan bersedekah untuk melatih kepedulian — dengan penekanan bahwa hal-hal kecil yang konsisten jauh lebih berpengaruh daripada satu ceramah panjang.</p>
  <p>Ketiga, <strong>mengadakan kelas atau sesi edukasi parenting secara berkala</strong>, baik langsung maupun daring, dengan topik ringan dan aplikatif seperti "Cara Menumbuhkan Disiplin Tanpa Marah-Marah" atau "Menjadi Teladan yang Konsisten bagi Anak" — akan lebih bermakna bila disampaikan lewat kisah nyata dan diskusi antarorang tua, bukan ceramah teoretis semata. Keempat, <strong>mendorong refleksi dan evaluasi orang tua</strong> sendiri — sebab terkadang orang tua tidak sadar bahwa gaya pengasuhannya justru bertentangan dengan nilai yang ingin ditanamkan (mengharapkan anak jujur tapi sering membohongi anak, misalnya) — sekolah dapat menyediakan jurnal refleksi parenting, kuesioner gaya pengasuhan, atau forum diskusi kelompok kecil sebagai alat bantu. Kelima, <strong>membangun komunitas parenting sekolah</strong> agar pembelajaran tidak berhenti di satu sesi — dalam komunitas ini orang tua bisa bertukar pengalaman sukses dan tantangan, menyusun kegiatan keluarga bersama, serta menjadi agen perubahan kecil di lingkungan masing-masing, sehingga tercipta budaya sekolah yang ramah keluarga dan mendorong keterlibatan orang tua secara berkelanjutan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat peran orang tua (teladan, pendidik, pendamping emosi, mitra sekolah) yang dibahas di bab ini, peran mana yang menurut Anda paling sering luput diperhatikan oleh orang tua siswa di sekolah Anda — dan program kemitraan apa yang bisa mulai ditawarkan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, peran orang tua yang berkaitan langsung dengan membantu anak memahami dan mengelola perasaannya saat marah atau kecewa disebut peran sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendamping emosi dan moral</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penghubung dan mitra sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pengawas akademik semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ayah selalu menasihati anaknya untuk jujur, tetapi sering terdengar berbohong kepada tamu di depan anaknya sendiri. Berdasarkan Bab 6, apa akar masalah dari situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak tersebut yang bermasalah karena tidak mendengarkan nasihat orang tuanya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Orang tua belum konsisten menjadi teladan sehari-hari, sehingga perilakunya bertentangan dengan nilai yang ingin ditanamkan lewat nasihat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah yang harus disalahkan karena tidak mengawasi perilaku orang tua di rumah</button>
  </div>
  <div class="quiz-q">
    <p>SD Islam Baiturrahim ingin membangun kemitraan yang lebih erat dengan orang tua, namun kehadiran wali murid di setiap pertemuan sekolah selalu rendah dan sebagian orang tua merasa program sekolah "tidak nyambung" dengan pola asuh mereka di rumah. Berdasarkan Bab 6, kombinasi solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena kehadiran orang tua bukan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggabungkan edukasi parenting yang aplikatif dan berbasis kisah nyata dengan program kemitraan dua arah, seperti pojok konsultasi dan komunitas parenting, agar orang tua merasa dilibatkan bukan sekadar diundang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh program karakter di sekolah karena dianggap gagal total</button>
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
<h2 class="reveal">Masa Depan Pendidikan Karakter</h2>
<p class="lede reveal">Pendidikan karakter tidak boleh berhenti pada metode lama — bab penutup ini melihat ke depan: bagaimana inovasi, kompetensi abad ke-21, dan teknologi dapat dirangkul secara bijak untuk memperkuat, bukan menggantikan, sentuhan manusia dalam membentuk karakter.</p>

<div class="card reveal">
  <h4>A. Inovasi dan Adaptasi dalam Pendidikan Karakter</h4>
  <p>Agar tetap relevan, pendidikan karakter perlu terus berinovasi lewat tiga jalur. Pertama, <strong>mengikuti perkembangan teknologi dan tren terbaru</strong> — memanfaatkan media sosial untuk menyebarkan informasi nilai karakter dan membangun komunitas online pendukungnya, mengembangkan game edukasi sebagai media pembelajaran yang menarik dan interaktif, serta memanfaatkan Virtual Reality (VR) dan Augmented Reality (AR) untuk menciptakan pengalaman belajar yang imersif dan menyentuh emosi. Kedua, <strong>mengembangkan model pembelajaran yang inovatif</strong> — pembelajaran berbasis proyek yang melatih kerja sama dan tanggung jawab, pembelajaran kontekstual yang membantu siswa memahami nilai karakter dalam konteks kehidupan nyata, serta pembelajaran experiential yang mengajarkan nilai lewat pengalaman langsung, bukan sekadar teori di kelas.</p>
  <p>Ketiga, <strong>memanfaatkan teknologi edukasi</strong> secara terarah — platform pembelajaran online yang menyediakan akses ke berbagai materi tentang nilai karakter kapan saja, aplikasi edukasi yang membantu anak belajar dengan cara yang menyenangkan dan interaktif, serta sistem penilaian online untuk memantau perkembangan karakter anak secara berkelanjutan. Sebagai gambaran penerapannya, sekolah dapat membuat akun media sosial khusus untuk menyebarkan program pendidikan karakter dan membangun komunitas online pendukungnya, sementara guru dapat memakai game edukasi dalam pembelajaran agar nilai karakter tersampaikan dengan cara yang menyenangkan, bukan menggurui.</p>

  <h4>B. Membangun Generasi yang Berkarakter dan Berkompetensi</h4>
  <p>Membangun generasi muda yang berkarakter sekaligus berkompetensi adalah kunci mencapai masa depan bangsa yang gemilang. Untuk mempersiapkan mereka menghadapi tantangan zaman, tiga hal perlu berjalan beriringan: pendidikan karakter sebagai fondasi utama (menanamkan kejujuran, tanggung jawab, kerja sama, dan toleransi sejak dini), keterampilan abad ke-21 seperti berpikir kritis, memecahkan masalah, berkomunikasi, berkolaborasi, dan berkreasi (agar mampu beradaptasi dengan perubahan dan menjadi individu yang produktif), serta kesadaran global yang memahami berbagai budaya dan bahasa (agar mampu bekerja sama dengan orang dari berbagai negara dan membangun dunia yang lebih baik).</p>
  <p>Secara lebih rinci, karakter yang perlu dimiliki generasi muda mencakup sikap jujur dan berintegritas, tanggung jawab dan disiplin, kemampuan bekerja sama dan bersikap toleran, kreatif dan inovatif, serta berani dan pantang menyerah. Ini perlu dipadukan dengan kompetensi abad ke-21 seperti kemampuan berpikir kritis dan menyelesaikan masalah, berkomunikasi dan berkolaborasi, menggunakan teknologi dan informasi secara bijak, serta beradaptasi dan belajar sepanjang hayat. Poin pentingnya: karakter tanpa kompetensi membuat generasi muda kesulitan bersaing secara nyata, sementara kompetensi tanpa karakter berisiko disalahgunakan — keduanya harus tumbuh berdampingan, bukan dipilih salah satu.</p>

  <h4>C. Peran Teknologi dalam Pendidikan Karakter</h4>
  <p>Jika digunakan secara tepat dan bijak, teknologi bisa menjadi alat yang sangat efektif mendukung pendidikan karakter lewat lima peran. Pertama, sebagai <strong>media edukasi yang memperkuat nilai karakter</strong> — video inspiratif, animasi cerita, film pendek, game edukatif, e-book, dan podcast bisa lebih mudah menyentuh sisi emosional siswa dibanding penjelasan verbal semata, apalagi generasi sekarang sudah sangat akrab dengan media-media ini. Kedua, sebagai <strong>alat monitoring dan refleksi diri</strong> — aplikasi yang mencatat perilaku positif siswa harian dan bisa dilihat orang tua, atau aplikasi yang membantu siswa mencatat kebaikan yang dilakukan dan menuliskan jurnal syukur harian, sehingga memperkuat kesadaran diri dan pembentukan karakter yang lebih dalam.</p>
  <p>Ketiga, sebagai <strong>penguat kolaborasi antara sekolah dan orang tua</strong> — lewat grup WhatsApp, aplikasi sekolah, atau media sosial tertutup, guru dapat berbagi informasi dan pesan penguatan nilai, sementara orang tua bisa memberi umpan balik tentang perilaku anak di rumah, menjadikan pendidikan karakter gerakan bersama, bukan tugas sekolah semata. Keempat, sebagai sarana menanamkan <strong>teladan digital</strong> — mengajarkan siswa etika dan tanggung jawab dalam berteknologi: berkomentar sopan di media sosial, menghargai karya orang lain, tidak menyebar berita bohong, dan menjaga privasi, karena karakter sejati tidak hanya terlihat di dunia nyata, tetapi juga di dunia maya. Kelima, sebagai sarana <strong>mengembangkan empati dan kepedulian</strong> — mengajak siswa mengikuti program virtual untuk melihat kehidupan anak-anak di daerah lain atau mengikuti penggalangan dana online bagi korban bencana, sehingga mereka belajar memahami perasaan orang lain dan terdorong untuk peduli. Namun perlu selalu diingat: teknologi bukan pengganti sentuhan manusia dalam pendidikan karakter, melainkan alat bantu yang kuat bila digunakan dengan bijak — kuncinya tetap menghadirkan nilai, keteladanan, dan pendampingan personal, sambil memanfaatkan teknologi untuk memperluas jangkauan dan memperdalam dampaknya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima peran teknologi dalam pendidikan karakter (media edukasi, monitoring diri, kolaborasi ortu-sekolah, teladan digital, empati) yang dibahas di bab ini, peran mana yang paling belum dimanfaatkan di sekolah Anda — dan langkah kecil apa yang bisa mulai dicoba dalam satu semester ke depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, agar generasi muda siap menghadapi masa depan, karakter perlu dipadukan dengan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keterampilan abad ke-21 dan kesadaran global</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hafalan mata pelajaran sebanyak mungkin tanpa keterampilan praktis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penghindaran total terhadap teknologi digital</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memasang banyak aplikasi pemantauan karakter dan rutin mengirim pesan otomatis berisi kata-kata bijak kepada siswa, tetapi guru jarang menunjukkan keteladanan langsung dan interaksi personal dengan siswa semakin berkurang. Berdasarkan Bab 7, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang salah, karena teknologi sepenuhnya bisa menggantikan peran guru dalam pendidikan karakter</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Teknologi diperlakukan sebagai pengganti, bukan alat bantu — padahal keteladanan dan pendampingan personal dari manusia tetap menjadi inti pendidikan karakter</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya menghapus semua teknologi karena terbukti tidak berguna sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>SMP Cendekia Mulia ingin memanfaatkan teknologi untuk memperkuat karakter siswa sekaligus menjaga keterlibatan orang tua, tanpa kehilangan sentuhan personal dari guru. Berdasarkan Bab 7, strategi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan teknologi sebagai alat bantu — misalnya media edukasi interaktif dan grup komunikasi guru-orang tua — sambil tetap menghadirkan keteladanan dan pendampingan langsung dari guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh interaksi guru-siswa dengan aplikasi otomatis agar lebih efisien</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang penggunaan gawai sepenuhnya di lingkungan sekolah tanpa kecuali</button>
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
<p class="eyebrow reveal">Evaluasi</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab. Jawaban tidak akan langsung diperlihatkan — jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah hanya mengajarkan nilai kejujuran lewat ceramah satu arah tanpa keteladanan maupun pembiasaan nyata. Berdasarkan Bab 1, apa yang paling mungkin terjadi pada siswa?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa mungkin memahami konsep jujur secara kognitif, tetapi belum tentu menghayati dan mempraktikkannya dalam keseharian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa otomatis akan jujur karena ceramah adalah metode paling ampuh untuk semua nilai karakter</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ceramah sudah cukup dan tidak perlu ditindaklanjuti dengan cara lain</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Guru menyadari bahwa siswa SMP di kelasnya sudah mulai kritis dan senang berdiskusi, namun metode yang dipakai masih berupa dongeng seperti untuk anak PAUD. Berdasarkan pendekatan psikologis pada Bab 1, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap memakai dongeng karena dianggap universal untuk semua usia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyesuaikan metode dengan tahap perkembangan siswa, misalnya lewat diskusi dan refleksi diri yang lebih relevan untuk usia remaja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh pembelajaran karakter untuk siswa SMP</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah memiliki tata tertib lengkap tertulis di buku panduan, tetapi pelanggaran sering dibiarkan tanpa konsekuensi konsisten. Berdasarkan Bab 2, apa akar masalah utamanya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aturan tidak diterapkan secara konsisten dan adil, sehingga tidak membentuk kebiasaan disiplin yang nyata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aturan tata tertib yang terlalu banyak dan rumit</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah kekurangan ekstrakurikuler untuk menyalurkan energi siswa</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang kepala sekolah aktif membuat kebijakan dan mengikuti rapat, tetapi jarang menunjukkan keteladanan langsung seperti disiplin dan keramahan dalam kesehariannya di sekolah. Berdasarkan Bab 2, aspek kepemimpinan apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemampuan administratif dalam menyusun laporan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Frekuensi rapat dengan yayasan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Peran sebagai teladan utama yang menunjukkan langsung nilai-nilai karakter dalam keseharian</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SD ingin menanamkan nilai karakter lewat pelajaran Matematika tanpa mengubahnya menjadi pelajaran moral. Berdasarkan Bab 3, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh soal matematika dengan soal tentang kejujuran secara verbal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menekankan ketelitian dan kejujuran dalam proses mengerjakan soal, serta memberi proyek kelompok untuk melatih kerja sama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus pelajaran Matematika karena dianggap tidak relevan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Pendekatan pembelajaran yang menempatkan guru sebagai fasilitator dan menekankan kemandirian serta refleksi diri, berdasarkan Bab 3, paling sesuai untuk jenjang...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">SMA/SMK, sesuai pendekatan andragogis untuk remaja yang mulai berpikir kritis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">PAUD, karena anak usia dini membutuhkan kebebasan penuh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Semua jenjang secara identik tanpa penyesuaian usia</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SMP memiliki ekstrakurikuler Pramuka dan OSIS yang aktif, tetapi guru mata pelajaran umum sama sekali tidak menyisipkan nilai karakter di kelas. Berdasarkan Bab 3, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan Pramuka dan OSIS karena dianggap tidak sejalan dengan akademik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendorong konsistensi dan kolaborasi antara guru mata pelajaran dan pembina ekstrakurikuler agar penguatan karakter berjalan menyeluruh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena ekstrakurikuler sudah cukup untuk membentuk karakter</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin menilai perkembangan karakter siswa secara adil, namun hanya mengandalkan satu kali tes tertulis di akhir semester. Berdasarkan Bab 4, apa risiko utama pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tes tertulis tidak selalu mengukur aspek internal dan perilaku nyata siswa, sehingga perlu dikombinasikan dengan metode lain seperti observasi dan portofolio</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tes tertulis adalah satu-satunya metode valid sehingga tidak ada risiko</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tes tertulis harus dihapus sepenuhnya dan diganti observasi saja</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin merumuskan target karakter yang lebih konkret daripada sekadar "siswa harus jujur dan disiplin". Berdasarkan kerangka target berbasis adab pada Bab 4, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Cukup menempelkan poster nilai-nilai karakter di dinding kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merumuskan target dalam empat lapis (pengetahuan, sikap, perilaku, contoh nyata) untuk setiap relasi adab</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh mata pelajaran dengan pelajaran adab semata</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah yayasan mengeluhkan program karakter tidak berjalan maksimal karena minim anggaran, tidak ada buku ajar khusus, dan guru belum pernah dilatih. Berdasarkan Bab 5, kombinasi rekomendasi paling tepat melibatkan peran...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa semata, karena mereka harus lebih giat belajar karakter secara mandiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Media sosial semata, karena teknologi bisa menggantikan seluruh kebutuhan sumber daya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah dan pemerintah bersama-sama, mencakup penyediaan sumber daya, pelatihan guru, serta anggaran dan kebijakan pendukung</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah sudah memiliki kurikulum karakter yang baik, tetapi orang tua jarang hadir dalam pertemuan dan tidak konsisten menerapkan nilai yang sama di rumah. Berdasarkan Bab 5, solusi paling relevan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah pelatihan guru karena guru dianggap satu-satunya penentu keberhasilan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memperkuat peran keluarga lewat edukasi orang tua dan membangun komunikasi-kerja sama yang lebih aktif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan keterlibatan orang tua karena pendidikan karakter cukup dilakukan di sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang ayah selalu menasihati anaknya untuk jujur, tetapi sering terdengar berbohong kepada tamu di depan anaknya. Berdasarkan Bab 6, apa akar masalah situasi ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak tersebut yang bermasalah karena tidak mendengarkan nasihat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Orang tua belum konsisten menjadi teladan sehari-hari, sehingga perilakunya bertentangan dengan nilai yang diajarkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah yang harus disalahkan karena tidak mengawasi perilaku orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 6, peran orang tua yang berkaitan langsung dengan membantu anak mengelola perasaan saat marah atau kecewa disebut peran sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendamping emosi dan moral</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penghubung dan mitra sekolah semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengawas akademik semata</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin membangun kemitraan lebih erat dengan orang tua, namun kehadiran wali murid di setiap pertemuan selalu rendah dan sebagian merasa program sekolah "tidak nyambung" dengan pola asuh di rumah. Berdasarkan Bab 6, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena kehadiran orang tua bukan tanggung jawab sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggabungkan edukasi parenting aplikatif dengan program kemitraan dua arah seperti pojok konsultasi dan komunitas parenting</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh program karakter di sekolah karena dianggap gagal total</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, agar generasi muda siap menghadapi masa depan, karakter perlu dipadukan dengan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterampilan abad ke-21 dan kesadaran global</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hafalan mata pelajaran sebanyak mungkin tanpa keterampilan praktis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penghindaran total terhadap teknologi digital</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah memasang banyak aplikasi pemantauan karakter dan rutin mengirim pesan otomatis, tetapi guru jarang menunjukkan keteladanan langsung dan interaksi personal semakin berkurang. Berdasarkan Bab 7, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah, karena teknologi sepenuhnya bisa menggantikan peran guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Teknologi diperlakukan sebagai pengganti, bukan alat bantu, padahal keteladanan manusia tetap menjadi inti pendidikan karakter</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah seharusnya menghapus semua teknologi tanpa kecuali</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin memanfaatkan teknologi untuk memperkuat karakter siswa sekaligus menjaga keterlibatan orang tua, tanpa kehilangan sentuhan personal guru. Berdasarkan Bab 7, strategi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan teknologi sebagai alat bantu (media edukasi, grup komunikasi guru-orang tua) sambil tetap menghadirkan keteladanan dan pendampingan langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh interaksi guru-siswa dengan aplikasi otomatis agar lebih efisien</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melarang penggunaan gawai sepenuhnya di lingkungan sekolah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut kerangka empat pilar pada Bab 1, karakter yang menekankan pengembangan kecerdasan intelektual, emosional, dan spiritual disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Fathonah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Amanah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tablig</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah baru merintis program karakter dan ingin memulai dari langkah paling mendasar sebelum memikirkan teknologi atau kurikulum canggih. Berdasarkan keseluruhan isi buku ini, fondasi apa yang paling perlu dipastikan lebih dulu?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi pemantauan karakter tercanggih yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun asesmen 20 soal terlebih dahulu sebelum program apa pun dijalankan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi yang jelas, keteladanan nyata dari guru dan pimpinan, serta komitmen kerja sama antara sekolah, keluarga, dan masyarakat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin dikenal unggul secara khusus dalam kedisiplinan sebagai ciri khasnya, di luar kerangka karakter umum yang berlaku bertahap dari kelas 1 hingga 12. Berdasarkan Bab 3, desain kurikulum karakter yang paling sesuai untuk kebutuhan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum Karakter Global, karena wajib diterapkan seragam di semua sekolah tanpa pengecualian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum Karakter Spesifik, karena disusun berdasarkan nilai unggulan khusus sesuai visi-misi dan kekhasan sekolah itu sendiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu kurikulum karakter apa pun, cukup mengandalkan slogan sekolah</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
