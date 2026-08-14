/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Strategi Implementasi Deep Learning di Sekolah Islam"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-deep-learning-sekolah-islam.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Peran Pimpinan Sekolah dalam Transformasi Pembelajaran</h2>
<p class="lede reveal">Transformasi menuju pembelajaran berbasis pemahaman mendalam tidak akan berjalan tanpa arah yang jelas dari pucuk kepemimpinan sekolah. Bab ini membahas mengapa transformasi ini mendesak, bagaimana membedakan tiga pendekatan pembelajaran yang berbeda dampaknya, serta bagaimana visi-misi dan peran nyata pimpinan sekolah menjadi penggerak utama perubahan menuju Deep Learning.</p>

<div class="card reveal">
  <h4>A. Urgensi Transformasi Pembelajaran di Sekolah Islam</h4>
  <p>Sekolah Islam memiliki peran strategis dalam membentuk generasi Muslim yang berakhlak mulia, berilmu luas, dan siap menghadapi tantangan zaman. Namun di era modern, pembelajaran tidak bisa lagi hanya mengandalkan metode konvensional berbasis hafalan — siswa perlu dibekali kemampuan berpikir kritis, analitis, serta keterampilan abad ke-21 agar dapat bersaing di dunia yang terus berubah. Setidaknya ada empat alasan mengapa sekolah Islam harus segera beradaptasi: meningkatnya kebutuhan keterampilan abad ke-21 yang menuntut lebih dari sekadar transfer pengetahuan; pesatnya kemajuan teknologi dan digitalisasi yang mengubah cara siswa mengakses informasi; tantangan daya saing di tengah menjamurnya model pendidikan baru seperti sekolah berbasis STEAM dan sekolah internasional; serta kesesuaiannya dengan konsep pembelajaran dalam Islam itu sendiri, karena Rasulullah SAW selalu mengajarkan ilmu dengan cara praktis, mendalam, dan bermakna bagi para sahabatnya.</p>
  <p>Sistem pendidikan konvensional di banyak sekolah Islam masih menyisakan sejumlah tantangan: fokus berlebihan pada hafalan tanpa pemahaman mendalam, sehingga siswa mampu mengingat teks keagamaan namun kesulitan menghubungkannya dengan konteks sosial dan budaya saat ini; minimnya keterampilan berpikir kritis dan analitis akibat pola belajar yang pasif; kurangnya integrasi antara ilmu agama dan sains, padahal dalam sejarah Islam tokoh seperti Ibnu Sina, Al-Khawarizmi, dan Al-Biruni justru menguasai keduanya secara bersamaan; belum optimalnya pemanfaatan teknologi sebagai alat bantu pembelajaran; serta rendahnya keterlibatan siswa akibat model pembelajaran satu arah di mana guru menjelaskan dan siswa hanya mendengar.</p>
  <p>Untuk mengatasi tantangan-tantangan ini, sekolah Islam perlu menerapkan pembelajaran berbasis pemahaman mendalam, di mana siswa tidak hanya menghafal informasi tetapi juga memahami konsep, menganalisisnya, dan mampu menerapkannya dalam berbagai situasi. Pendekatan ini membantu siswa memahami ilmu dengan lebih baik — misalnya dalam fikih, siswa tidak sekadar menghafal hukum Islam tetapi juga menganalisis alasan di balik hukum tersebut; menanamkan nilai Islam secara lebih bermakna, karena siswa diajak menghubungkan ilmu dengan nilai-nilai keislaman, bukan sekadar mengetahuinya sebagai teori; serta menyiapkan siswa lebih matang menghadapi masa depan, karena dunia kerja saat ini membutuhkan lulusan yang mampu berpikir kreatif, bekerja dalam tim, dan menyelesaikan masalah secara mandiri.</p>

  <h4>B. Surface Learning, Achievement Learning, dan Deep Learning dalam Perspektif Kepemimpinan</h4>
  <p>Pimpinan sekolah memiliki peran sentral dalam menentukan arah kebijakan pendidikan, dan keputusan yang diambil akan berdampak langsung pada kualitas lulusan serta daya saing sekolah. Dalam dunia pendidikan terdapat tiga pendekatan utama yang perlu dipahami perbedaannya: Surface Learning adalah pembelajaran dangkal yang hanya berfokus pada hafalan dan pemenuhan tugas tanpa pemahaman mendalam; Achievement Learning adalah pembelajaran yang berorientasi pada pencapaian nilai akademik sebagai tolok ukur keberhasilan; sedangkan Deep Learning adalah pembelajaran berbasis pemahaman mendalam, refleksi, dan penerapan ilmu dalam kehidupan nyata, di mana siswa tidak hanya menghafal tetapi juga menganalisis, berpikir kritis, dan menghubungkan konsep-konsep ilmu, sementara guru berperan sebagai fasilitator, bukan sekadar pemberi informasi.</p>
  <p>Memahami perbedaan ketiga model ini sangat penting bagi pimpinan sekolah karena tiga alasan. Pertama, hal ini menentukan arah kebijakan sekolah — jika sekolah hanya menerapkan Surface Learning, lulusan akan lemah dalam berpikir kritis; jika hanya berfokus pada Achievement Learning, akan terjadi kesenjangan antara nilai akademik tinggi dan kemampuan berpikir nyata; sementara Deep Learning menciptakan generasi yang unggul secara akademik sekaligus memiliki keterampilan berpikir tingkat tinggi. Kedua, hal ini meningkatkan reputasi dan daya saing sekolah, karena sekolah yang menerapkan Deep Learning lebih diminati orang tua yang menginginkan pendidikan berkualitas. Ketiga, hal ini mempersiapkan lulusan menghadapi dunia nyata yang tidak hanya membutuhkan nilai akademik tinggi, tetapi juga kemampuan problem-solving, komunikasi, dan inovasi.</p>
  <p>Pimpinan sekolah dapat mengarahkan transisi menuju Deep Learning melalui tiga langkah utama: merancang kebijakan sekolah yang mendukung Deep Learning, termasuk memasukkannya ke dalam visi-misi sekolah dan mendorong kurikulum berbasis eksplorasi, bukan sekadar hafalan; melatih guru agar siap mengimplementasikan Deep Learning melalui workshop dan mentoring yang mengubah pola mengajar dari ceramah menjadi fasilitasi; serta menciptakan budaya pembelajaran yang mendukung pemikiran kritis, di mana evaluasi tidak hanya berbasis ujian tetapi juga proyek, portofolio, dan diskusi reflektif.</p>

  <h4>C. Membangun Visi dan Misi Sekolah Berbasis Deep Learning</h4>
  <p>Visi dan misi sekolah menentukan arah kebijakan pendidikan dan budaya akademik yang dikembangkan di dalamnya. Sekolah Islam yang ingin menerapkan Deep Learning perlu menyesuaikan visi dan misinya agar selaras dengan prinsip pembelajaran mendalam — berfokus pada pemahaman, bukan sekadar hafalan; mengembangkan keterampilan berpikir kritis, kreatif, dan inovatif; serta menekankan penerapan ilmu dalam kehidupan nyata, sesuai prinsip Islam yang mengajarkan ilmu untuk diamalkan. Langkah konkretnya mencakup merevisi visi sekolah agar lebih eksplisit mengusung Deep Learning (misalnya: "Menjadi sekolah Islam unggulan yang menanamkan pemahaman mendalam, kreativitas, dan akhlak mulia dalam setiap aspek pembelajaran"), mengomunikasikannya kepada seluruh pemangku kepentingan, serta mengintegrasikannya ke dalam kurikulum dan pengelolaan sekolah secara menyeluruh.</p>
  <p>Visi yang baik harus didukung budaya akademik yang mendorong eksplorasi, kreativitas, dan keterlibatan aktif siswa — melalui metode seperti Project-Based Learning, Inquiry-Based Learning, dan Collaborative Learning; kebijakan yang mendukung eksperimen dan inovasi; penyediaan fasilitas seperti laboratorium, ruang diskusi, dan perpustakaan digital; pelatihan bagi guru; serta pembudayaan diskusi reflektif setelah proses belajar. Sebagai lembaga pendidikan Islam, sekolah juga harus memastikan pembelajaran tidak hanya berorientasi akademik, tetapi menyelaraskan strategi pembelajaran dengan nilai-nilai Islam — mengembangkan pendekatan integrasi ilmu dan agama (Islamic Integrated Learning Approach), mendorong proyek berbasis nilai Islam seperti penelitian berbasis masjid, kewirausahaan syariah, dan studi sosial berbasis nilai Islam, serta memastikan setiap mata pelajaran mengandung muatan keislaman, misalnya matematika yang diajarkan lewat kontribusi Al-Khawarizmi atau sains yang dikaitkan dengan keajaiban penciptaan Allah.</p>

  <h4>D. Peran Pimpinan Sekolah dalam Implementasi Deep Learning</h4>
  <p>Pimpinan sekolah memiliki peran kunci sebagai penggerak perubahan dalam pembelajaran — mendorong sekolah meninggalkan pola pembelajaran pasif, memastikan pembelajaran tidak hanya berorientasi hafalan, mendorong guru menerapkan metode yang lebih interaktif seperti diskusi dan proyek kolaboratif, serta menginisiasi program pengajaran berbasis pemahaman mendalam melalui pembelajaran berbasis proyek dan workshop rutin bagi guru. Selain itu, pimpinan sekolah juga bertugas membangun budaya sekolah yang mendukung inovasi — menciptakan lingkungan yang kondusif bagi guru dan siswa untuk bereksplorasi, membentuk komunitas belajar antarguru, serta meningkatkan keterlibatan dalam riset dan praktik pembelajaran terbaru melalui kemitraan dengan universitas dan pusat penelitian.</p>
  <p>Tidak kalah penting, pimpinan sekolah harus menyediakan sumber daya dan dukungan bagi guru agar mereka siap menerapkan metode ini di kelas, serta melakukan perbaikan berkelanjutan berdasarkan evaluasi hasil belajar siswa — menganalisis tantangan dan hambatan, memberikan umpan balik kepada guru, dan mendorong budaya refleksi di sekolah. Dengan langkah-langkah ini, sekolah menjadi lebih dinamis, guru lebih termotivasi untuk berinovasi, dan siswa mendapatkan pengalaman belajar yang benar-benar bermakna, bukan sekadar mengejar nilai ujian.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pendekatan pembelajaran (Surface Learning, Achievement Learning, Deep Learning) yang dibahas di bab ini, pendekatan mana yang paling dominan di sekolah Anda saat ini — dan langkah kebijakan apa yang bisa mulai diambil pimpinan sekolah untuk mendorong transisi menuju Deep Learning?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa yang membedakan Deep Learning dari Surface Learning dan Achievement Learning?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Deep Learning menekankan pemahaman mendalam, refleksi, dan penerapan ilmu dalam kehidupan nyata, bukan sekadar hafalan atau nilai ujian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Deep Learning hanya berfokus pada pencapaian nilai akademik setinggi mungkin di setiap ujian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Deep Learning sama persis dengan Surface Learning, hanya berbeda nama saja</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam memiliki nilai ujian akademik yang tinggi di seluruh mata pelajaran, tetapi lulusannya kesulitan berpikir kritis dan gagap saat dihadapkan pada masalah nyata di dunia kerja. Berdasarkan Bab 1, pendekatan pembelajaran apa yang kemungkinan besar paling dominan diterapkan sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Deep Learning, karena nilai akademik yang tinggi sudah pasti menunjukkan pemahaman mendalam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Achievement Learning, karena keberhasilan hanya diukur dari pencapaian nilai tanpa membangun keterampilan berpikir tingkat tinggi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah ini sudah sepenuhnya menerapkan ketiga pendekatan secara seimbang</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah baru menyadari bahwa visi-misi sekolahnya masih berbunyi umum seperti "mencetak siswa berprestasi" tanpa menyebut pemahaman mendalam atau keterampilan berpikir kritis, sementara guru-guru masih terbiasa mengajar dengan ceramah satu arah. Berdasarkan Bab 1, langkah pertama yang paling tepat diambil kepala sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengganti seluruh guru tanpa memberi kesempatan pelatihan ulang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan visi-misi apa adanya karena dianggap sudah cukup baik selama nilai akademik tinggi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merevisi visi-misi agar eksplisit mengusung Deep Learning, mengomunikasikannya ke seluruh pemangku kepentingan, sembari melatih guru bertransisi dari ceramah ke fasilitasi pembelajaran</button>
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
<h2 class="reveal">Kerangka Pembelajaran Deep Learning</h2>
<p class="lede reveal">Setelah memahami mengapa transformasi pembelajaran mendesak, bab ini menguraikan empat elemen kerangka Deep Learning yang harus dibangun bersamaan: praktik pedagogis di dalam kelas, lingkungan pembelajaran yang mendukung, pemanfaatan teknologi digital secara strategis, serta kemitraan pembelajaran dengan pihak di luar sekolah.</p>

<div class="card reveal">
  <h4>A. Praktek Pedagogis (Pedagogical Practices)</h4>
  <p>Pendekatan pedagogis memainkan peran utama dalam menentukan efektivitas pembelajaran berbasis Deep Learning. Sekolah Islam harus mampu menyeimbangkan metode tradisional seperti hafalan dengan pendekatan yang lebih eksploratif dan reflektif. Dalam mata pelajaran umum, guru perlu meninggalkan hafalan tanpa pemahaman dan beralih ke Problem-Based Learning (siswa menyelesaikan masalah nyata dengan konsep yang telah dipelajari), Inquiry-Based Learning (siswa mengeksplorasi konsep dan menarik kesimpulan sendiri), serta diskusi reflektif. Namun dalam ilmu-ilmu agama seperti Al-Qur'an, Hadis, doa, dan zikir, hafalan tetap memiliki peran utama yang tidak dapat dihilangkan — pimpinan sekolah perlu memastikan hafalan ini tidak dilakukan secara mekanis, melainkan disertai pemahaman, penghayatan, dan pengamalan, misalnya lewat diskusi tafsir yang membantu siswa memahami kandungan ayat yang mereka hafal.</p>
  <p>Untuk menyeimbangkan hafalan dengan pemahaman mendalam, pimpinan sekolah dapat menyusun kebijakan yang memastikan hafalan dalam pembelajaran agama didukung metode yang memperkuat refleksi, seperti kajian tematik yang menghubungkan beberapa ayat atau hadis dalam satu tema (misalnya "Adab dalam Islam" atau "Konsep Kepemimpinan dalam Al-Qur'an") dan studi kasus yang mengajak siswa melihat bagaimana suatu ayat atau hadis diterapkan dalam kehidupan nyata. Dengan pendekatan ini, hafalan dalam pendidikan Islam menjadi lebih bermakna, siswa lebih termotivasi mempelajari Islam dengan pemahaman yang lebih dalam, dan sekolah mampu mencetak lulusan yang tidak hanya memiliki hafalan kuat, tetapi juga wawasan luas dan daya analisis tinggi.</p>

  <h4>B. Lingkungan Pembelajaran (Learning Environment)</h4>
  <p>Lingkungan pembelajaran memiliki peran penting dalam menentukan keberhasilan Deep Learning. Sekolah tidak hanya berfungsi sebagai tempat mentransfer ilmu, tetapi juga sebagai ekosistem yang mendorong eksplorasi, inovasi, dan pengembangan keterampilan berpikir kritis. Pimpinan sekolah perlu menciptakan budaya sekolah yang mendukung kebebasan berpikir, diskusi terbuka, dan refleksi mendalam — melalui program inovasi seperti lomba penelitian dan eksperimen sains berbasis Islam, ruang diskusi terbuka bagi siswa dan guru, serta metode interdisciplinary learning yang menghubungkan berbagai disiplin ilmu dalam satu proyek pembelajaran.</p>
  <p>Selain budaya, pimpinan sekolah juga harus memastikan tersedianya fasilitas, teknologi, dan sumber belajar yang menunjang pengalaman pembelajaran mendalam — ruang kelas yang fleksibel, laboratorium eksperimen baik untuk sains maupun kajian Islam, zona eksplorasi seperti sudut baca interaktif, serta akses ke perangkat digital, Learning Management System (LMS), dan perpustakaan digital. Kemitraan dengan universitas dan pusat riset juga penting agar siswa memperoleh wawasan yang lebih luas. Dengan infrastruktur yang memadai, guru lebih mudah menerapkan metode berbasis eksplorasi, dan sekolah menjadi lebih modern serta menarik minat siswa untuk belajar dengan lebih antusias.</p>

  <h4>C. Pemanfaatan Digital (Leveraging Digital)</h4>
  <p>Pemanfaatan digital dalam pembelajaran harus lebih dari sekadar digitalisasi proses tradisional — teknologi harus digunakan untuk memperkuat Deep Learning itu sendiri. Sekolah perlu menyusun kebijakan digitalisasi yang jelas, seperti memilih Learning Management System yang sesuai kebutuhan (Moodle atau Google Classroom untuk manajemen tugas, Edmodo atau Microsoft Teams untuk komunikasi berbasis komunitas, Kahoot atau Quizizz untuk asesmen interaktif), menggunakan game edukatif berbasis Islam untuk mengajarkan sejarah Islam atau ekonomi syariah, serta mendorong platform kolaboratif untuk proyek berbasis tim.</p>
  <p>Transformasi digital tidak akan berhasil tanpa kesiapan guru dan siswa dalam memanfaatkan teknologi secara efektif. Karena itu, pimpinan sekolah perlu menyediakan pelatihan rutin bagi guru, membangun komunitas guru berbasis digital untuk berbagi pengalaman, serta membekali siswa dengan literasi digital agar mereka tidak hanya menjadi konsumen teknologi tetapi juga mampu menggunakannya untuk eksplorasi ilmu — misalnya lewat simulasi laboratorium virtual, eksperimen ekonomi syariah berbasis digital, atau platform pemetaan sejarah Islam yang interaktif. Dengan kebijakan digital yang tepat, sekolah Islam dapat menjadi institusi yang unggul dalam memanfaatkan teknologi untuk mencetak lulusan yang berpikir kritis, kreatif, dan tetap berpegang teguh pada nilai-nilai Islam.</p>

  <h4>D. Kemitraan Pembelajaran (Learning Partnership)</h4>
  <p>Penerapan Deep Learning tidak hanya bergantung pada guru dan kurikulum, tetapi juga pada dukungan ekosistem pembelajaran yang luas. Sekolah perlu membangun jaringan kolaborasi dengan universitas, dunia industri, dan komunitas lokal — misalnya siswa yang belajar ekonomi Islam berkunjung ke perusahaan berbasis syariah atau fintech halal, siswa yang tertarik teknologi berkolaborasi dengan startup Islami dalam proyek inovasi, atau sekolah bermitra dengan masjid dan yayasan sosial untuk melibatkan siswa dalam proyek berbasis solusi nyata seperti pengolahan sampah berbasis prinsip Islam atau program wakaf berbasis teknologi.</p>
  <p>Orang tua juga memiliki peran besar dalam menunjang keberhasilan Deep Learning, karena jika pembelajaran hanya terjadi di sekolah, penerapan ilmu yang diperoleh siswa akan terbatas. Sekolah perlu menyusun strategi komunikasi dengan orang tua — mengadakan seminar atau workshop tentang manfaat Deep Learning, membangun platform komunikasi digital, membuat buku panduan sederhana bagi orang tua, serta menyediakan forum diskusi orang tua dan guru — sekaligus mendorong keterlibatan aktif mereka dalam mendukung eksplorasi dan refleksi anak di rumah, misalnya lewat diskusi topik pelajaran atau proyek eksplorasi sederhana di luar sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat elemen kerangka Deep Learning (praktik pedagogis, lingkungan pembelajaran, pemanfaatan digital, kemitraan pembelajaran), elemen mana yang menurut Anda paling lemah di sekolah Anda saat ini — dan langkah kecil apa yang bisa mulai dijalankan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, bagaimana seharusnya sekolah Islam memperlakukan hafalan dalam ilmu-ilmu agama seperti Al-Qur'an dan Hadis dalam kerangka Deep Learning?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Hafalan tetap dipertahankan sebagai bagian penting, tetapi disertai pemahaman, penghayatan, dan pengamalan makna, misalnya lewat diskusi tafsir dan kajian tematik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hafalan harus dihapuskan sepenuhnya dan diganti total dengan diskusi bebas tanpa dalil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hafalan cukup dilakukan secara mekanis tanpa perlu dikaitkan dengan pemahaman apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam sudah membeli banyak perangkat digital dan memasang LMS canggih, tetapi guru-guru tidak pernah dilatih menggunakannya dan siswa hanya memakainya untuk menonton video hiburan. Berdasarkan Bab 2, apa yang paling perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena memiliki perangkat digital saja sudah cukup untuk menerapkan Deep Learning</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun kapasitas guru dan siswa lewat pelatihan dan literasi digital, agar teknologi benar-benar digunakan untuk memperkuat eksplorasi ilmu, bukan sekadar hiburan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menjual kembali seluruh perangkat digital karena teknologi terbukti tidak relevan dengan Deep Learning</button>
  </div>
  <div class="quiz-q">
    <p>SMA Islam Al-Furqon ingin siswa jurusan ekonomi memahami penerapan nyata ekonomi syariah, namun pembelajaran selama ini hanya berhenti di teori dalam buku teks. Berdasarkan Bab 2, langkah kemitraan pembelajaran yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah soal ujian tertulis tentang ekonomi syariah tanpa mengubah metode pembelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjalin kemitraan dengan lembaga keuangan syariah atau fintech halal agar siswa bisa berkunjung dan melihat langsung penerapan prinsip ekonomi Islam di dunia nyata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus mata pelajaran ekonomi syariah karena dianggap terlalu sulit dipahami siswa</button>
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
<h2 class="reveal">Strategi Pengembangan Kurikulum Berbasis Deep Learning</h2>
<p class="lede reveal">Kurikulum adalah pondasi yang menentukan arah pembelajaran, metode yang digunakan, serta hasil yang ingin dicapai. Bab ini membahas bagaimana pimpinan sekolah mengadaptasi kurikulum agar mendukung pembelajaran mendalam, menyusun rencana pembelajaran yang relevan dengan tantangan abad 21, dan memastikan pengalaman belajar siswa benar-benar mencerminkan prinsip Deep Learning.</p>

<div class="card reveal">
  <h4>A. Mengadaptasi Kurikulum untuk Mendukung Pembelajaran Mendalam</h4>
  <p>Pimpinan sekolah harus mengarahkan kebijakan kurikulum agar selaras dengan prinsip Deep Learning, bukan sekadar berorientasi pada hafalan dan nilai ujian. Kurikulum harus mengakomodasi keterampilan berpikir kritis, pemecahan masalah, kreativitas, dan eksplorasi ilmu secara lebih luas — dikembangkan berbasis kompetensi, di mana siswa tidak hanya menguasai materi tetapi juga mampu menerapkannya dalam kehidupan nyata, misalnya siswa yang belajar zakat dan wakaf juga melakukan proyek sosial berbasis ekonomi syariah di lingkungan sekitar. Kurikulum juga perlu dirancang agar siswa mengalami pembelajaran berbasis proyek (Project-Based Learning), berbasis masalah (Problem-Based Learning), dan berbasis riset (Inquiry-Based Learning), dengan mata pelajaran umum dan keislaman yang saling terhubung dengan kehidupan nyata.</p>
  <p>Transformasi kurikulum tidak akan berjalan efektif tanpa pengawasan dan evaluasi berkelanjutan. Pimpinan sekolah perlu menyusun standar pencapaian dan indikator keberhasilan yang mencerminkan pemahaman mendalam dan keterampilan eksplorasi ilmu, bukan hanya hasil ujian tertulis — misalnya dalam pelajaran fikih, keberhasilan siswa tidak hanya diukur dari seberapa banyak hukum Islam yang mereka hafal, tetapi juga dari kemampuan menganalisis kasus-kasus kontemporer. Supervisi dan evaluasi berkala melalui observasi kelas dan wawancara dengan guru perlu dilakukan secara rutin, sehingga kurikulum yang dihasilkan tidak hanya unggul dalam aspek akademik, tetapi juga selaras dengan nilai-nilai Islam dan mampu mencetak generasi yang berakhlak mulia dan berwawasan luas.</p>

  <h4>B. Menyusun Rencana Pembelajaran yang Relevan dengan Tantangan Abad 21</h4>
  <p>Pembelajaran yang inovatif tidak hanya sekadar mengganti metode mengajar dengan alat digital, tetapi juga mengubah cara siswa berpikir, memahami konsep, dan mengaplikasikan ilmunya. Pimpinan sekolah perlu memastikan guru merancang pembelajaran berbasis proyek dan problem-solving — misalnya siswa sains menganalisis dampak perubahan iklim dan mencari solusi berbasis Islam, atau siswa ekonomi Islam membuat simulasi bisnis syariah — serta menyediakan pedoman tertulis dan contoh Rencana Pelaksanaan Pembelajaran (RPP) berbasis Deep Learning yang bisa dijadikan referensi bagi guru.</p>
  <p>Agar strategi ini benar-benar terlaksana, guru membutuhkan bimbingan teknis, pelatihan, dan dukungan berkelanjutan dari pimpinan sekolah — mulai dari pelatihan berkala tentang penyusunan RPP berbasis proyek, mengundang pakar pendidikan untuk workshop, hingga mengadakan sesi refleksi dan mentoring personal bagi guru yang masih menghadapi kesulitan. Selain itu, kurikulum yang kaku akan sulit beradaptasi dengan perubahan zaman, sehingga sekolah Islam perlu membangun fleksibilitas kurikulum dengan mengintegrasikan teknologi, analisis data pembelajaran (learning analytics), dan bahkan kecerdasan buatan untuk mendukung personalisasi pembelajaran sesuai kecepatan dan gaya belajar masing-masing siswa.</p>

  <h4>C. Peran Pimpinan Sekolah dalam Memastikan Pengalaman Belajar Berbasis Deep Learning</h4>
  <p>Penerapan Deep Learning bukan hanya soal menyusun kurikulum yang tepat, tetapi juga memastikan bahwa pengalaman belajar siswa benar-benar mencerminkan prinsip pembelajaran mendalam. Pimpinan sekolah bertanggung jawab memastikan bahwa pengalaman belajar siswa tidak hanya berbasis teori, tetapi juga eksplorasi, diskusi, dan refleksi — mewajibkan setiap mata pelajaran memiliki unsur eksplorasi baik dalam bentuk diskusi, studi kasus, atau proyek berbasis riset, serta mengembangkan sistem pemantauan berbasis observasi kelas dan asesmen portofolio, bukan sekadar ujian tertulis.</p>
  <p>Deep Learning tidak hanya terjadi di dalam kelas — pimpinan sekolah perlu membangun sistem kolaboratif antara guru, siswa, dan pihak eksternal, mendorong setiap mata pelajaran memiliki elemen Project-Based Learning atau Problem-Based Learning, serta menjalin kerja sama dengan komunitas, industri, dan universitas untuk memperkaya pengalaman belajar siswa. Dengan cara ini, siswa tidak hanya belajar teori, tetapi mendapatkan pengalaman langsung dalam menerapkan ilmu, sehingga Deep Learning menjadi lebih relevan dengan tantangan kehidupan nyata dan mempersiapkan mereka menghadapi dunia kerja serta masyarakat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Sejauh mana kurikulum di sekolah Anda saat ini sudah mengakomodasi pembelajaran berbasis proyek dan pemecahan masalah, dibandingkan dengan pembelajaran yang masih berfokus pada hafalan dan ujian tertulis semata?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan Bab 3, bagaimana seharusnya keberhasilan siswa dalam pelajaran fikih diukur agar selaras dengan prinsip Deep Learning?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya dari seberapa banyak hukum-hukum Islam yang berhasil dihafal siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tidak hanya dari hafalan hukum Islam, tetapi juga dari kemampuan menganalisis kasus-kasus kontemporer dan mengaitkannya dengan prinsip syariah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya dari kerapian tulisan siswa saat mengerjakan ujian</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru IPA di sekolah Islam ingin mengajarkan konsep ekosistem, tetapi bingung bagaimana caranya agar tidak sekadar ceramah teori. Berdasarkan Bab 3, pendekatan yang paling sesuai dengan prinsip pengembangan kurikulum Deep Learning adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merancang proyek atau eksperimen nyata terkait ekosistem yang menghubungkan konsep sains dengan nilai-nilai Islam tentang menjaga alam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta siswa menghafal seluruh definisi ekosistem dari buku teks tanpa aktivitas tambahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti pelajaran IPA dengan pelajaran hafalan Al-Qur'an sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Pimpinan sebuah sekolah Islam sudah merancang kurikulum berbasis Deep Learning secara tertulis dengan rapi, tetapi tidak pernah melakukan observasi kelas atau evaluasi berkala terhadap penerapannya. Berdasarkan Bab 3, risiko utama dari situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena kurikulum yang sudah tertulis rapi otomatis akan berjalan dengan sendirinya di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tanpa pengawasan dan evaluasi berkelanjutan, tidak ada jaminan bahwa kurikulum benar-benar diterapkan dengan baik di kelas dan memberikan hasil optimal bagi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risiko hanya akan muncul jika kurikulum tersebut diubah setiap tahun</button>
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
<h2 class="reveal">Prinsip Pembelajaran Berbasis Deep Learning</h2>
<p class="lede reveal">Deep Learning dalam perspektif sekolah Islam bertumpu pada tiga prinsip utama yang saling menopang: Mindful (berhati-hati dan berkeseimbangan), Meaningful (bermakna dan relevan dengan nilai-nilai Islam), serta Joyful (menyenangkan dan memotivasi) — dilengkapi dengan penekanan pada kemandirian belajar sepanjang hayat sebagaimana diajarkan dalam Islam.</p>

<div class="card reveal">
  <h4>A. Mindful (Berhati-hati & Berkeseimbangan dalam Pembelajaran Islam)</h4>
  <p>Prinsip mindful menekankan bahwa siswa harus belajar dengan kesadaran penuh, bukan sekadar menghafal atau mengumpulkan nilai akademik. Guru dapat mendorong siswa berlatih berpikir reflektif setelah setiap sesi pembelajaran, misalnya menuliskan jurnal refleksi tentang pelajaran yang mereka dapatkan dan bagaimana hal itu dapat diterapkan dalam kehidupan, serta menggunakan metode pertanyaan terbuka sehingga siswa tidak hanya menjawab benar-salah tetapi juga menganalisis dan merefleksikan konsep dalam kehidupan nyata — misalnya setelah mempelajari kisah dakwah Nabi Muhammad SAW, siswa diajak membandingkan tantangan dakwah masa lalu dengan tantangan dakwah di era digital.</p>
  <p>Pembelajaran yang mendalam tidak boleh hanya berfokus pada kecerdasan intelektual, tetapi juga harus memperhatikan keseimbangan antara aspek akademik, spiritual, dan sosial — sebab dalam Islam, ilmu yang tidak diamalkan atau tidak memiliki nilai keberkahan tidak akan membawa manfaat bagi kehidupan manusia. Pimpinan sekolah perlu mendorong keseimbangan ini dalam kurikulum, misalnya lewat program pembelajaran berbasis layanan masyarakat (Service Learning) atau simulasi distribusi zakat, serta menyusun sistem evaluasi berbasis akhlak, di mana keberhasilan siswa tidak hanya diukur dari nilai akademik, tetapi juga dari perilaku, etika, dan kontribusi sosial mereka.</p>

  <h4>B. Kemandirian Belajar dalam Islam: Menuntut Ilmu Sepanjang Hayat</h4>
  <p>Dalam Islam, menuntut ilmu adalah kewajiban yang tidak terbatas oleh usia atau jenjang pendidikan. Rasulullah SAW bersabda, "Menuntut ilmu adalah kewajiban bagi setiap Muslim" (HR. Ibnu Majah) — sebuah hadis yang menegaskan bahwa belajar tidak boleh berhenti di jenjang sekolah atau perguruan tinggi, melainkan harus menjadi bagian dari kehidupan sehari-hari. Sekolah dapat mengaitkan pemahaman ini dengan teladan ilmuwan Muslim seperti Ibnu Sina, Al-Khawarizmi, dan Al-Farabi yang terus belajar sepanjang hidup mereka untuk menemukan berbagai teori ilmiah.</p>
  <p>Salah satu tantangan dalam dunia pendidikan adalah pola pikir bahwa belajar hanya terjadi jika ada guru atau di dalam kelas — padahal Deep Learning menuntut siswa memiliki kesadaran untuk mengeksplorasi ilmu sendiri, bertanya, dan berpikir kritis tanpa selalu bergantung pada instruksi. Pimpinan sekolah dapat menanamkan budaya ini melalui kebijakan seperti program mentoring di mana siswa bebas menentukan topik yang ingin dipelajari lebih dalam, atau program "Satu Siswa, Satu Riset" yang mewajibkan setiap siswa melakukan penelitian atau eksplorasi ilmu di luar kelas setiap semester, didukung fasilitas perpustakaan digital dan platform e-learning yang mudah diakses.</p>

  <h4>C. Meaningful (Bermakna dan Relevan dengan Nilai-Nilai Islam dan Kehidupan Siswa)</h4>
  <p>Pembelajaran yang bermakna adalah pembelajaran yang membantu siswa memahami hubungan antara ilmu yang mereka pelajari dengan kehidupan nyata serta nilai-nilai Islam. Jika pembelajaran hanya berfokus pada hafalan dan teori tanpa konteks yang relevan, siswa akan kesulitan menghubungkan ilmu tersebut dengan dunia nyata. Guru perlu diberikan panduan untuk mengontekstualisasikan setiap mata pelajaran — misalnya matematika dikaitkan dengan konsep keadilan dalam distribusi zakat sebagai contoh proporsi dan persentase, sains dikaitkan dengan hukum keseimbangan ekosistem dalam Al-Qur'an, atau sejarah menggunakan kisah para nabi dan strategi kepemimpinan Rasulullah sebagai bahan analisis yang relevan dengan dunia modern.</p>
  <p>Untuk memastikan pembelajaran benar-benar bermakna, pimpinan sekolah perlu menyusun kebijakan yang menjamin bahwa setiap mata pelajaran memiliki unsur aplikasi nyata dalam kehidupan siswa, baik di dunia maupun akhirat — melalui proyek, studi kasus, atau diskusi reflektif, serta rubrik asesmen yang menilai seberapa baik siswa dapat menghubungkan ilmu dengan pengamalannya. Dengan strategi ini, ilmu yang dipelajari siswa tidak hanya bermanfaat secara akademik, tetapi juga memiliki nilai ibadah dan pengamalan dalam keseharian.</p>

  <h4>D. Joyful (Menyenangkan dan Mendorong Motivasi Belajar Berdasarkan Prinsip Islam)</h4>
  <p>Jika pembelajaran terasa membosankan dan kaku, siswa akan kehilangan minat dan hanya belajar untuk memenuhi kewajiban akademik. Dalam Islam, belajar adalah ibadah yang seharusnya dilakukan dengan penuh semangat dan kecintaan terhadap ilmu, sebagaimana dicontohkan Rasulullah SAW yang mengajarkan ilmu dengan cara yang menyenangkan dan interaktif. Guru dapat menerapkan metode gamifikasi (kuis interaktif dan sistem reward), role-playing (siswa berperan sebagai tokoh sejarah Islam), proyek eksplorasi, serta pendekatan storytelling yang sudah menjadi tradisi lisan dalam Islam untuk menyampaikan konsep agama maupun sains — misalnya mengaitkan penemuan Al-Khawarizmi dan Ibnu Sina dengan fondasi ilmu modern.</p>
  <p>Agar pembelajaran yang menyenangkan menjadi budaya sekolah, pimpinan sekolah perlu memastikan kebijakan sekolah mendukung inovasi metode pembelajaran, menyediakan ruang eksplorasi seperti perpustakaan digital dan laboratorium eksperimen, serta menerapkan penilaian berbasis portofolio dan proyek. Pengembangan karakter berbasis Islam juga perlu diperkuat lewat program mentoring spiritual, penghargaan berbasis akhlak bagi siswa yang menunjukkan empati dan kontribusi sosial, serta program refleksi harian sebelum pulang sekolah — sehingga siswa merasa dihargai, didukung, dan terus termotivasi untuk mencintai ilmu sepanjang hayat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga prinsip Deep Learning (Mindful, Meaningful, Joyful) yang dibahas di bab ini, prinsip mana yang menurut Anda paling belum diterapkan secara konsisten di kelas-kelas sekolah Anda — dan langkah kecil apa yang bisa mulai dicoba bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut hadis yang dikutip pada Bab 4 (HR. Ibnu Majah), bagaimana kedudukan menuntut ilmu bagi setiap Muslim?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menuntut ilmu adalah kewajiban bagi setiap Muslim, tanpa batas usia atau jenjang pendidikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menuntut ilmu hanya dianjurkan bagi siswa yang masih bersekolah formal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menuntut ilmu adalah pilihan yang boleh ditinggalkan setelah lulus dari perguruan tinggi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa mampu menghafal dalil tentang zakat dengan sangat lancar, tetapi tidak pernah diajak memahami bagaimana konsep proporsi zakat berkaitan dengan matematika atau bagaimana zakat diterapkan nyata di masyarakat. Berdasarkan prinsip Meaningful pada Bab 4, apa yang kurang dari pembelajaran ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena hafalan dalil saja sudah cukup memenuhi prinsip Meaningful</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pembelajaran belum mengontekstualisasikan ilmu dengan kehidupan nyata dan lintas mata pelajaran, sehingga belum benar-benar bermakna bagi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa tersebut seharusnya berhenti mempelajari zakat karena topiknya dianggap terlalu sulit</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sejarah Islam merasa kelasnya selalu sepi dan siswa mengantuk saat mendengarkan ceramah tentang Perang Badar. Berdasarkan prinsip Joyful pada Bab 4, langkah paling tepat yang bisa dicoba guru tersebut adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah durasi ceramah agar materi tersampaikan lebih lengkap meski siswa tetap mengantuk</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan metode role-playing atau storytelling, di mana siswa berperan sebagai tokoh dalam peristiwa tersebut dan menganalisisnya dari berbagai sudut pandang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus pelajaran sejarah Islam karena dianggap tidak menarik bagi siswa</button>
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
<h2 class="reveal">Memimpin Guru dalam Penerapan Deep Learning</h2>
<p class="lede reveal">Keberhasilan Deep Learning sangat bergantung pada kesiapan guru sebagai fasilitator pembelajaran. Bab ini membahas bagaimana pimpinan sekolah membangun kompetensi guru, menjalankan mentorship dan coaching yang berkelanjutan, serta membangun komunitas belajar yang membuat guru tidak berjuang sendirian dalam bertransformasi.</p>

<div class="card reveal">
  <h4>A. Membangun Kompetensi Guru untuk Menerapkan Deep Learning</h4>
  <p>Guru bukan lagi sekadar penyampai materi, tetapi harus membimbing siswa berpikir kritis, melakukan eksplorasi, dan menemukan solusi atas permasalahan nyata. Pimpinan sekolah perlu mendorong perubahan mindset guru dari pengajar tradisional menjadi fasilitator pembelajaran mendalam — dari "saya harus menyampaikan seluruh materi dalam silabus" menjadi "saya harus membantu siswa memahami konsep dengan cara yang lebih bermakna". Kebijakan pengembangan profesional berkelanjutan juga perlu disusun, misalnya lewat "Learning Lab" di mana guru bisa menguji pendekatan baru dan berbagi pengalaman dengan rekan sejawat tanpa takut gagal.</p>
  <p>Pelatihan yang diberikan sebaiknya berbasis pengalaman langsung (experiential training), seperti simulasi kelas dengan metode Project-Based Learning atau lesson study di mana guru merancang, menerapkan, dan mengevaluasi metode pengajaran secara kolaboratif, dilengkapi lokakarya berbasis studi kasus nyata dan jejaring dengan lembaga pendidikan lain untuk pertukaran metode inovatif. Selain itu, guru perlu didorong mengadaptasi metode pengajaran yang lebih interaktif — memberikan pertanyaan terbuka, mengembangkan strategi evaluasi berbasis proses (bukan hanya hasil akhir) seperti rubrik penilaian eksplorasi dan portofolio pembelajaran, serta memanfaatkan teknologi dan sumber belajar interaktif dalam kelas.</p>

  <h4>B. Mentorship dan Coaching bagi Guru</h4>
  <p>Tidak semua guru secara otomatis siap mengadopsi Deep Learning, sehingga pembinaan berkelanjutan dalam bentuk mentorship dan coaching menjadi strategi yang sangat efektif. Mentorship memberi guru ruang untuk bertanya dan berbagi pengalaman, sehingga mereka tidak merasa sendirian dalam menghadapi tantangan, sementara coaching berfokus pada pemberian umpan balik dan bimbingan personal berdasarkan pengalaman nyata di kelas. Sesi coaching sebaiknya dilakukan secara berkala, bukan hanya pelatihan satu kali, dengan pendekatan reflektif — misalnya guru diminta merenungkan pertanyaan seperti "apa yang berhasil dalam pembelajaran saya?" atau "bagaimana saya bisa meningkatkan eksplorasi dan refleksi dalam pembelajaran?".</p>
  <p>Agar program mentorship dan coaching berjalan efektif, pimpinan sekolah harus terlibat aktif — melakukan observasi kelas secara langsung, misalnya mengikuti satu sesi pembelajaran di setiap kelas per bulan, kemudian memberikan masukan dan apresiasi kepada guru. Sistem evaluasi guru juga perlu dikembangkan berbasis diskusi dan observasi kelas, bukan hanya hasil ujian siswa, sehingga evaluasi menjadi sarana pengembangan, bukan sekadar penilaian. Dengan keterlibatan aktif ini, guru merasa lebih didukung dan sekolah memiliki budaya reflektif yang berkelanjutan.</p>

  <h4>C. Membangun Komunitas Belajar bagi Guru</h4>
  <p>Agar penerapan Deep Learning berjalan berkelanjutan dan efektif, guru tidak boleh bekerja sendiri, melainkan berada dalam komunitas yang mendukung pengembangan profesional mereka. Pimpinan sekolah perlu menciptakan budaya berbagi pengetahuan antarguru — misalnya lewat sesi lesson study di mana guru saling mengamati dan memberikan umpan balik, sistem peer review sebelum menerapkan strategi tertentu, serta memanfaatkan platform digital seperti grup diskusi daring untuk bertukar ide dan mengakses modul pelatihan kapan saja.</p>
  <p>Komunitas belajar juga perlu memiliki struktur yang jelas, misalnya membentuk kelompok kerja atau tim inovasi pembelajaran yang fokus mengembangkan Deep Learning, mengadakan pertemuan rutin untuk mengevaluasi dan memperbaiki metode pengajaran, serta mendorong guru terlibat dalam penelitian tindakan kelas (PTK) dan mempublikasikan temuan mereka dalam forum diskusi internal maupun jurnal pendidikan Islam. Dengan komunitas belajar yang solid, guru menjadi lebih terampil mengevaluasi dan mengembangkan strategi pembelajaran mereka, sementara sekolah memiliki reputasi akademik yang lebih baik karena mendukung inovasi berbasis penelitian.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Sejauh mana program pembinaan guru di sekolah Anda saat ini sudah mencakup mentorship, coaching, dan komunitas belajar secara berkelanjutan — bukan hanya pelatihan satu kali yang berhenti begitu saja setelah sesi selesai?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, apa perbedaan mendasar antara mentorship dan coaching bagi guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mentorship memberi ruang berbagi pengalaman dengan rekan sejawat, sementara coaching berfokus pada umpan balik dan bimbingan personal berdasarkan pengalaman nyata di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mentorship dan coaching adalah dua istilah yang persis sama tanpa perbedaan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Coaching hanya boleh dilakukan satu kali dalam setahun, sedangkan mentorship dilakukan setiap hari</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru merasa kesulitan menerapkan metode pembelajaran berbasis proyek dan tidak tahu harus bertanya kepada siapa, sehingga akhirnya kembali ke metode ceramah lama yang dianggap lebih aman. Berdasarkan Bab 5, akar masalah yang paling mungkin terjadi adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut memang tidak berbakat mengajar dan sebaiknya berhenti menjadi guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah belum membangun sistem mentorship, coaching, dan komunitas belajar yang memadai untuk mendampingi guru dalam bertransisi ke metode baru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metode pembelajaran berbasis proyek memang tidak pernah bisa diterapkan di sekolah manapun</button>
  </div>
  <div class="quiz-q">
    <p>Kepala sekolah SMP Islam Nurul Hikmah ingin memastikan bahwa evaluasi terhadap guru bukan sekadar formalitas administratif, tetapi benar-benar membantu guru berkembang dalam menerapkan Deep Learning. Berdasarkan Bab 5, langkah yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menilai guru hanya berdasarkan nilai ujian akhir siswa tanpa observasi kelas sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan observasi kelas dan diskusi reflektif secara rutin, lalu memberikan umpan balik yang membangun sebagai bagian dari pengembangan profesional guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan seluruh proses evaluasi kepada pihak luar sekolah tanpa keterlibatan pimpinan sekolah</button>
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
<h2 class="reveal">Profil Lulusan Sekolah Islam</h2>
<p class="lede reveal">Tujuan akhir dari seluruh strategi Deep Learning adalah mencetak lulusan yang unggul secara akademik sekaligus berkarakter Islami yang kuat. Bab ini menguraikan delapan dimensi profil lulusan berbasis Deep Learning, bagaimana keseluruhan dimensi itu berakar pada empat karakter utama Nabi Muhammad SAW, serta korelasi di antara keduanya.</p>

<div class="card reveal">
  <h4>A. Profil Lulusan Berbasis Deep Learning</h4>
  <p>Setiap lulusan sekolah Islam yang menerapkan Deep Learning diharapkan memiliki delapan dimensi utama. Pertama, keimanan yang kuat — lulusan tidak sekadar menghafal ayat atau hadis, tetapi memahami maknanya dan mampu mengaplikasikannya dalam kehidupan sehari-hari. Kedua, jiwa kewargaan dan kepedulian sosial — lulusan memahami peran mereka di masyarakat lewat pembelajaran berbasis proyek sosial, misalnya program filantropi Islam di mana siswa meneliti, menggalang dana, dan mendistribusikan bantuan bagi komunitas yang membutuhkan. Ketiga, kemampuan berpikir kritis dan analitis, agar lulusan tidak mudah terpengaruh informasi yang salah (hoaks) dan mampu mengambil keputusan berbasis data dan logika — misalnya dalam sejarah Islam, siswa tidak hanya menghafal peristiwa tetapi juga menganalisis penyebab dan dampaknya. Keempat, kreativitas dan inovasi, sejalan dengan semangat ijtihad dalam Islam yang berarti pemikiran kreatif untuk menyelesaikan tantangan baru, misalnya siswa merancang model bisnis syariah yang inovatif dan berkelanjutan.</p>
  <p>Kelima, keterampilan kolaborasi — lulusan mampu bekerja dalam tim baik dalam skala kecil maupun besar, misalnya lewat proyek kolaboratif antarkelas untuk memecahkan masalah lingkungan dengan pendekatan ilmiah dan Islam. Keenam, kemampuan komunikasi yang baik, baik lisan maupun tulisan, agar lulusan mampu menyampaikan gagasan dan berdakwah secara efektif, misalnya lewat artikel atau vlog edukatif tentang nilai-nilai Islam. Ketujuh, kemandirian dalam belajar, sejalan dengan prinsip pembelajaran sepanjang hayat, di mana siswa memiliki inisiatif untuk terus belajar tanpa selalu bergantung pada guru. Kedelapan, kesadaran akan pentingnya kesehatan fisik, mental, dan spiritual, sejalan dengan ajaran Islam tentang pola hidup sehat dan seimbang, misalnya lewat pembelajaran tentang makanan halal dan thayyib dalam kajian fikih dan sains.</p>

  <h4>B. Profil Lulusan dalam Perspektif Islam: Meneladani Karakter Nabi Muhammad SAW</h4>
  <p>Sebagai umat Islam, kita memiliki teladan utama dalam membangun karakter, yaitu Nabi Muhammad SAW, yang menunjukkan empat karakter utama: Sidik (Jujur), Amanah (Bertanggung Jawab), Fatanah (Cerdas), dan Tablig (Memimpin dan Menginspirasi). <strong>Sidik</strong> berarti jujur dan benar dalam perkataan maupun perbuatan — Nabi Muhammad SAW mendapat gelar Al-Amin (yang terpercaya) karena kejujurannya. Sekolah perlu membangun budaya zero tolerance terhadap kecurangan akademik seperti menyontek dan plagiarisme, serta memberi apresiasi bagi siswa yang menunjukkan kejujuran dalam tugas dan ujian, sehingga lulusan memiliki integritas tinggi dalam kehidupan akademik dan profesional.</p>
  <p><strong>Amanah</strong> berarti dapat dipercaya dalam menjalankan tugas dan bertanggung jawab atas ilmu yang dimiliki — lulusan harus memahami bahwa ilmu bukan hanya untuk dikuasai, tetapi juga dimanfaatkan untuk kemaslahatan umat, misalnya lewat kebiasaan menghargai waktu dan menyelesaikan tugas tepat waktu. <strong>Fatanah</strong> berarti cerdas dan berwawasan luas, mencakup kecerdasan akademik, emosional, dan spiritual sekaligus — sekolah perlu menanamkan keterampilan problem-solving dan eksplorasi ilmu lewat pembelajaran berbasis proyek, sehingga lulusan mampu menyikapi informasi dengan bijak dan analitis. <strong>Tablig</strong> berarti menyampaikan kebenaran dengan cara yang bijak dan penuh hikmah — setiap Muslim bertanggung jawab menjadi pemimpin minimal bagi dirinya sendiri, dilatih lewat public speaking, debat Islami, dan program leadership camp berbasis nilai-nilai Islam, sehingga lulusan mampu menjadi pemimpin yang amanah, berintegritas, dan menginspirasi orang lain.</p>

  <h4>C. Korelasi antara 8 Profil Lulusan dengan 4 Karakter Nabi Muhammad SAW</h4>
  <p>Agar profil lulusan sekolah Islam tetap berlandaskan nilai-nilai Islam, kedelapan dimensi profil lulusan berbasis Deep Learning dapat dikaitkan dengan empat sifat utama Rasulullah SAW. Keimanan dan kemandirian termasuk dalam <strong>Amanah</strong>, karena menjaga keimanan dan bersikap mandiri adalah bentuk amanah yang harus dipegang setiap Muslim dalam setiap tindakan; demikian pula kesehatan, karena menjaga kesehatan fisik, mental, dan spiritual juga merupakan amanah yang dicontohkan Rasulullah SAW lewat pola hidup sehat dan seimbang. Kewargaan, kolaborasi, dan komunikasi termasuk dalam <strong>Tablig</strong>, karena Nabi Muhammad SAW membangun kepemimpinan lewat kepedulian terhadap masyarakat, kerja sama serta musyawarah bersama para sahabat, dan menyampaikan risalah Islam secara efektif dan persuasif. Sementara penalaran kritis dan kreativitas termasuk dalam <strong>Fatanah</strong>, karena Nabi Muhammad SAW dikenal bijaksana dalam berpikir strategis sekaligus memiliki kecerdasan luar biasa dalam mencari solusi inovatif atas berbagai tantangan.</p>
  <p>Dengan pemetaan ini, sekolah Islam memiliki kerangka yang jelas: setiap dimensi profil lulusan berbasis Deep Learning bukanlah konsep pendidikan modern yang lepas dari akar keislaman, melainkan senantiasa dapat ditelusuri kembali pada keteladanan Nabi Muhammad SAW. Dengan meneladani sifat-sifat beliau, sekolah Islam dapat mencetak lulusan yang tidak hanya cerdas dan kompetitif secara global, tetapi juga berakhlak mulia dan siap berkontribusi bagi umat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat karakter Nabi Muhammad SAW (Sidik, Amanah, Fatanah, Tablig), karakter mana yang menurut Anda paling perlu diperkuat dalam profil lulusan sekolah Anda saat ini — dan program konkret apa yang bisa mulai dirancang untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, gelar apa yang diberikan kepada Nabi Muhammad SAW karena kejujurannya yang tidak diragukan, dan karakter apa yang dilambangkannya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Al-Amin (yang terpercaya), melambangkan karakter Sidik (Jujur)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Al-Fatih (sang pembuka), melambangkan karakter Tablig (Memimpin)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Al-Hakim (yang bijaksana), melambangkan karakter Fatanah (Cerdas)</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa selalu mendapat nilai akademik tertinggi di kelas, tetapi diketahui beberapa kali menyontek saat ujian dan memanipulasi data laporan proyek kelompok. Berdasarkan Bab 6, dimensi profil lulusan apa yang paling jelas belum terbentuk pada siswa ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan komunikasi, karena nilai akademiknya sudah cukup tinggi untuk membuktikan hal itu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keimanan dan karakter Sidik (kejujuran), karena pencapaian akademik yang diperoleh dengan cara tidak jujur bertentangan dengan integritas yang seharusnya dibangun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kesehatan fisik, karena kecurangan akademik tidak ada hubungannya dengan kesehatan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam ingin merancang program yang melatih siswa berbicara di depan umum dan menyampaikan gagasan secara persuasif, sekaligus menumbuhkan jiwa kepemimpinan sejak dini. Berdasarkan korelasi pada Bab 6, program ini paling tepat dikaitkan dengan karakter Nabi Muhammad SAW yang mana?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sidik (Jujur), karena semua program sekolah otomatis termasuk dalam kategori ini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Amanah (Bertanggung Jawab), karena berbicara di depan umum dianggap sebagai bentuk tanggung jawab administratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tablig (Memimpin dan Menginspirasi), karena erat kaitannya dengan komunikasi, kolaborasi, dan kepemimpinan yang menginspirasi orang lain</button>
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
<h2 class="reveal">Strategi Evaluasi & Monitoring Implementasi Deep Learning</h2>
<p class="lede reveal">Penerapan Deep Learning tidak cukup berhenti pada tahap implementasi kurikulum dan strategi pembelajaran. Bab penutup ini membahas indikator keberhasilan yang tepat serta metode evaluasi yang benar-benar mampu mengukur dampak Deep Learning secara menyeluruh — akademik, karakter, dan spiritualitas siswa sekaligus.</p>

<div class="card reveal">
  <h4>A. Indikator Keberhasilan Implementasi Deep Learning</h4>
  <p>Keberhasilan pendidikan Islam tidak hanya terletak pada pencapaian akademik, tetapi juga bagaimana siswa berkembang dalam aspek keimanan, akhlak, dan keterampilan berpikir mendalam. Karena itu, indikator keberhasilan Deep Learning di sekolah Islam harus mencakup aspek akademik dan non-akademik secara seimbang: indikator akademik mengukur sejauh mana siswa memahami, mengaplikasikan, dan mengevaluasi ilmu yang dipelajari; indikator karakter dan spiritual mengukur bagaimana siswa menunjukkan kejujuran, tanggung jawab, kemandirian, dan pemahaman nilai-nilai Islam dalam kehidupan sehari-hari; sementara indikator berpikir kritis dan kompetensi abad 21 mengukur sejauh mana siswa dapat memecahkan masalah, berkolaborasi, dan berkomunikasi secara efektif.</p>
  <p>Pimpinan sekolah harus memastikan bahwa standar evaluasi yang diterapkan benar-benar mencerminkan tujuan pembelajaran berbasis Deep Learning, mencakup aspek akademik, keterampilan berpikir kritis, refleksi, dan nilai-nilai Islam — misalnya lewat rubrik asesmen yang menilai pemahaman mendalam dan keterampilan reflektif siswa, serta standar asesmen berbasis proyek untuk setiap mata pelajaran. Sekolah juga perlu mengembangkan sistem evaluasi berbasis data, menggunakan hasil asesmen proyek dan portofolio siswa untuk melihat apakah metode pembelajaran yang diterapkan sudah efektif, sehingga keputusan perbaikan dapat diambil secara objektif dan tepat sasaran, bukan berdasarkan asumsi semata.</p>

  <h4>B. Metode Evaluasi yang Efektif bagi Sekolah Islam</h4>
  <p>Evaluasi yang efektif harus dilakukan secara berkelanjutan lewat kombinasi asesmen formatif dan sumatif. Evaluasi formatif bertujuan memantau perkembangan siswa secara berkala selama pembelajaran berlangsung — misalnya lewat diskusi reflektif di kelompok kecil, jurnal belajar mingguan, atau kuis tanpa nilai sebelum topik baru diperkenalkan — sehingga guru dapat memberikan umpan balik langsung sebelum siswa mencapai tahap evaluasi akhir. Sementara itu, evaluasi sumatif tetap diperlukan namun tidak hanya berbentuk ujian tertulis, melainkan juga presentasi proyek, laporan reflektif, dan demonstrasi keterampilan, misalnya proyek berbasis masalah yang menyelesaikan studi kasus nyata terkait nilai-nilai Islam dalam sains, ekonomi, atau sosial.</p>
  <p>Data hasil evaluasi tidak boleh berhenti sebagai angka semata, tetapi harus dimanfaatkan untuk memperbaiki strategi pembelajaran — menganalisis tren hasil belajar dari semester ke semester, mengevaluasi efektivitas metode pembelajaran tertentu dibandingkan metode lain, serta menyusun program pengembangan guru jika data menunjukkan ada kesulitan dalam penerapan Deep Learning. Evaluasi juga tidak boleh menjadi tanggung jawab pimpinan sekolah semata, melainkan harus melibatkan guru lewat forum evaluasi rutin dan pendekatan berbasis tim seperti "Lesson Study", di mana guru saling mengamati pembelajaran dan memberikan umpan balik untuk peningkatan metode mengajar secara kolektif dan berkelanjutan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Sejauh mana sistem evaluasi di sekolah Anda saat ini sudah melampaui ujian tertulis untuk benar-benar mengukur pemahaman mendalam, karakter, dan spiritualitas siswa — dan bentuk asesmen formatif atau sumatif apa yang bisa mulai ditambahkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, mengapa indikator keberhasilan Deep Learning di sekolah Islam tidak boleh hanya berdasarkan nilai akademik?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena keberhasilan pendidikan Islam juga harus mencakup perkembangan karakter, keimanan, dan keterampilan berpikir mendalam siswa, bukan hanya capaian akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena nilai akademik dianggap tidak penting sama sekali dalam pendidikan Islam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena ujian tertulis sudah dilarang sepenuhnya dalam sistem pendidikan Islam</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam hanya mengevaluasi siswa lewat satu kali ujian tertulis di akhir semester, tanpa ada diskusi reflektif, jurnal belajar, atau proyek sepanjang semester. Berdasarkan Bab 7, risiko utama dari pendekatan evaluasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena ujian tertulis di akhir semester sudah cukup mewakili seluruh proses belajar siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru kehilangan kesempatan memantau progres siswa secara berkala dan memberi umpan balik lebih awal, sehingga kesulitan belajar baru diketahui setelah terlambat diperbaiki</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Evaluasi formatif menjadi satu-satunya metode yang sah digunakan sekolah Islam</button>
  </div>
  <div class="quiz-q">
    <p>Setelah satu tahun menerapkan Deep Learning, seorang kepala sekolah memiliki banyak data hasil asesmen proyek dan portofolio siswa, tetapi data tersebut hanya disimpan sebagai arsip tanpa pernah dianalisis lebih lanjut. Berdasarkan Bab 7, langkah yang seharusnya dilakukan kepala sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan data tersebut tersimpan sebagai arsip karena data hasil asesmen tidak memiliki fungsi lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menganalisis data tersebut secara berkala untuk menilai efektivitas metode pembelajaran dan mengambil keputusan perbaikan berbasis bukti, termasuk merancang program pengembangan guru bila diperlukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh data karena dianggap tidak lagi relevan setelah satu tahun</button>
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

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam memiliki nilai ujian akademik tinggi di seluruh mata pelajaran, tetapi lulusannya kesulitan berpikir kritis dan gagap saat dihadapkan pada masalah nyata. Berdasarkan Bab 1, pendekatan pembelajaran apa yang kemungkinan besar paling dominan di sekolah ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deep Learning, karena nilai tinggi sudah pasti menunjukkan pemahaman mendalam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Achievement Learning, karena keberhasilan hanya diukur dari nilai tanpa membangun keterampilan berpikir tingkat tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah ini sudah menerapkan ketiga pendekatan secara seimbang</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang kepala sekolah menyadari visi-misinya masih umum tanpa menyebut pemahaman mendalam, sementara guru masih terbiasa ceramah satu arah. Berdasarkan Bab 1, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung mengganti seluruh guru tanpa pelatihan ulang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan visi-misi apa adanya karena nilai akademik sudah tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merevisi visi-misi agar eksplisit mengusung Deep Learning sembari melatih guru bertransisi ke fasilitasi pembelajaran</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah sudah membeli banyak perangkat digital dan LMS canggih, tetapi guru tidak pernah dilatih menggunakannya. Berdasarkan Bab 2, apa yang paling perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki, memiliki perangkat saja sudah cukup</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun kapasitas guru dan siswa lewat pelatihan dan literasi digital agar teknologi memperkuat eksplorasi ilmu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menjual kembali seluruh perangkat karena terbukti tidak relevan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 2, bagaimana seharusnya sekolah Islam memperlakukan hafalan dalam ilmu-ilmu agama dalam kerangka Deep Learning?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dihapuskan sepenuhnya dan diganti diskusi bebas tanpa dalil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap dipertahankan sebagai bagian penting, tetapi disertai pemahaman, penghayatan, dan pengamalan makna</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dilakukan secara mekanis tanpa perlu dikaitkan dengan pemahaman apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>SMA Islam ingin siswa jurusan ekonomi memahami penerapan nyata ekonomi syariah, namun pembelajaran selama ini hanya berhenti di teori buku teks. Berdasarkan Bab 2, langkah kemitraan pembelajaran yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menjalin kemitraan dengan lembaga keuangan syariah agar siswa melihat langsung penerapan ekonomi Islam di dunia nyata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah soal ujian tertulis tanpa mengubah metode pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus mata pelajaran ekonomi syariah karena dianggap sulit</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 3, bagaimana seharusnya keberhasilan siswa dalam pelajaran fikih diukur agar selaras dengan Deep Learning?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya dari seberapa banyak hukum Islam yang dihafal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak hanya dari hafalan, tetapi juga dari kemampuan menganalisis kasus kontemporer dan mengaitkannya dengan prinsip syariah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya dari kerapian tulisan saat ujian</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Pimpinan sebuah sekolah Islam sudah merancang kurikulum berbasis Deep Learning secara tertulis, tetapi tidak pernah melakukan observasi kelas atau evaluasi berkala. Berdasarkan Bab 3, risiko utamanya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, kurikulum tertulis rapi otomatis berjalan sendiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tanpa pengawasan berkelanjutan, tidak ada jaminan kurikulum benar-benar diterapkan dan memberi hasil optimal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risiko hanya muncul jika kurikulum diubah setiap tahun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, apa tujuan utama merancang kurikulum berbasis kompetensi dalam kerangka Deep Learning?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar siswa tidak hanya menguasai materi, tetapi juga mampu menerapkannya dalam kehidupan nyata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar siswa menghafal sebanyak mungkin materi dalam waktu sesingkat mungkin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar sekolah bisa mengurangi jumlah mata pelajaran yang diajarkan setiap semester</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut hadis yang dikutip pada Bab 4 (HR. Ibnu Majah), bagaimana kedudukan menuntut ilmu bagi setiap Muslim?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kewajiban bagi setiap Muslim, tanpa batas usia atau jenjang pendidikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya dianjurkan bagi siswa yang masih bersekolah formal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pilihan yang boleh ditinggalkan setelah lulus perguruan tinggi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa hafal dalil tentang zakat dengan lancar, tetapi tidak pernah diajak memahami keterkaitannya dengan matematika atau penerapannya di masyarakat. Berdasarkan prinsip Meaningful pada Bab 4, apa yang kurang?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang kurang, hafalan dalil saja sudah cukup</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pembelajaran belum mengontekstualisasikan ilmu dengan kehidupan nyata dan lintas mata pelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa tersebut seharusnya berhenti mempelajari zakat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru sejarah Islam merasa kelasnya selalu sepi dan siswa mengantuk saat ceramah tentang Perang Badar. Berdasarkan prinsip Joyful pada Bab 4, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah durasi ceramah agar materi tersampaikan lengkap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan role-playing atau storytelling agar siswa menganalisis peristiwa dari berbagai sudut pandang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus pelajaran sejarah Islam</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, apa perbedaan mendasar antara mentorship dan coaching bagi guru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mentorship memberi ruang berbagi pengalaman dengan rekan sejawat, coaching berfokus pada umpan balik personal berdasarkan pengalaman nyata di kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keduanya adalah istilah yang persis sama tanpa perbedaan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Coaching hanya boleh dilakukan satu kali setahun, mentorship setiap hari</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru baru kesulitan menerapkan pembelajaran berbasis proyek dan tidak tahu harus bertanya kepada siapa, sehingga kembali ke metode ceramah lama. Berdasarkan Bab 5, akar masalah yang paling mungkin adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru tersebut memang tidak berbakat mengajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah belum membangun sistem mentorship, coaching, dan komunitas belajar yang memadai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metode berbasis proyek memang tidak pernah bisa diterapkan di sekolah manapun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang kepala sekolah ingin membangun budaya berbagi antarguru agar metode Deep Learning tidak hanya dikuasai segelintir guru saja. Berdasarkan Bab 5, langkah yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan setiap guru bekerja sendiri-sendiri tanpa perlu berkoordinasi dengan rekan sejawat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membentuk komunitas belajar bagi guru, misalnya lewat lesson study dan forum diskusi rutin, agar guru saling belajar dan berbagi pengalaman</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya mengandalkan satu guru senior untuk mengajar seluruh kelas di sekolah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, gelar apa yang diberikan kepada Nabi Muhammad SAW karena kejujurannya, dan karakter apa yang dilambangkannya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Al-Amin (yang terpercaya), melambangkan karakter Sidik (Jujur)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Al-Fatih (sang pembuka), melambangkan karakter Tablig</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Al-Hakim (yang bijaksana), melambangkan karakter Fatanah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa selalu mendapat nilai akademik tertinggi, tetapi diketahui beberapa kali menyontek dan memanipulasi data laporan kelompok. Berdasarkan Bab 6, dimensi profil lulusan apa yang paling jelas belum terbentuk?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemampuan komunikasi, karena nilai akademiknya sudah tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keimanan dan karakter Sidik (kejujuran), karena pencapaian dengan cara tidak jujur bertentangan dengan integritas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesehatan fisik, karena tidak ada hubungannya dengan kecurangan</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin merancang program yang melatih siswa berbicara di depan umum dan menumbuhkan jiwa kepemimpinan. Berdasarkan korelasi pada Bab 6, program ini paling tepat dikaitkan dengan karakter Nabi Muhammad SAW yang mana?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sidik (Jujur)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Amanah (Bertanggung Jawab)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tablig (Memimpin dan Menginspirasi), erat kaitannya dengan komunikasi, kolaborasi, dan kepemimpinan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, mengapa indikator keberhasilan Deep Learning di sekolah Islam tidak boleh hanya berdasarkan nilai akademik?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena keberhasilan pendidikan Islam juga mencakup perkembangan karakter, keimanan, dan keterampilan berpikir mendalam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena nilai akademik dianggap tidak penting sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena ujian tertulis sudah dilarang sepenuhnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah hanya mengevaluasi siswa lewat satu kali ujian tertulis di akhir semester, tanpa diskusi reflektif atau proyek sepanjang semester. Berdasarkan Bab 7, risiko utamanya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, ujian akhir semester sudah cukup mewakili proses belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru kehilangan kesempatan memantau progres siswa secara berkala, sehingga kesulitan belajar baru diketahui setelah terlambat diperbaiki</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi formatif menjadi satu-satunya metode yang sah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam ingin mencetak lulusan yang tidak hanya unggul akademik, tetapi juga berkarakter Sidik, Amanah, Fatanah, dan Tablig sekaligus siap menghadapi tantangan global. Berdasarkan keseluruhan isi buku ini, fondasi utama yang harus dipastikan lebih dulu oleh pimpinan sekolah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli LMS dan perangkat digital tercanggih tanpa mengubah kebijakan atau melatih guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi yang jelas berbasis Deep Learning, kesiapan dan pembinaan guru berkelanjutan, kurikulum yang selaras nilai Islam, serta sistem evaluasi yang menyeluruh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh metode hafalan dalam pembelajaran agama secara total</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
