/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Membangun Sekolah Islam Bilingual"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-sekolah-islam-bilingual.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Pendahuluan</h2>
<p class="lede reveal">Sebelum masuk ke langkah-langkah teknis membangun sekolah Islam bilingual, penting memahami dulu mengapa pendidikan dua bahasa begitu relevan bagi sekolah Islam di era ini, apa yang ingin dicapai buku ini, dan siapa saja pembaca yang paling akan terbantu oleh panduan di dalamnya.</p>

<div class="card reveal">
  <h4>A. Latar Belakang</h4>
  <p>Di era globalisasi yang terus berkembang, pendidikan dituntut membentuk individu yang tidak hanya berpengetahuan akademis, tetapi juga mampu beradaptasi dengan perubahan dunia yang cepat. Salah satu kemampuan penting dalam pendidikan modern adalah kemampuan berkomunikasi dalam lebih dari satu bahasa, yang dikenal sebagai pendidikan bilingual. Pendidikan bilingual tidak hanya membantu siswa menguasai dua bahasa, tetapi juga membuka pintu untuk memahami berbagai budaya, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Bagi sekolah Islam, pendidikan bilingual memiliki nilai tambah yang signifikan: dengan mengadopsi pendekatan ini, sekolah Islam dapat memperluas cakupan pembelajarannya, memungkinkan siswa mengakses sumber daya pendidikan global tanpa meninggalkan akar keislaman mereka.</p>
  <p>Pendidikan bilingual di sekolah Islam membantu siswa menguasai bahasa internasional seperti Bahasa Inggris atau Arab, yang sering menjadi bahasa pengantar di berbagai institusi pendidikan tinggi dunia — memberi akses lebih luas ke sumber informasi global sekaligus mempersiapkan mereka bersaing di kancah internasional. Dalam konteks keislaman, penguasaan bahasa Arab sangat penting karena Al-Qur'an diturunkan dalam bahasa tersebut; dengan kemampuan bilingual, siswa dapat memahami dan menghayati ajaran Islam langsung dari sumbernya, sambil tetap mampu berkontribusi dalam masyarakat global yang semakin terhubung.</p>
  <p>Namun, tantangan dalam mengimplementasikan pendidikan bilingual di sekolah Islam tidaklah kecil — diperlukan perencanaan matang, kurikulum terintegrasi, dan tenaga pengajar yang kompeten. Meski demikian, manfaat jangka panjangnya bagi siswa, sekolah, dan masyarakat luas jauh lebih besar daripada tantangan yang harus dihadapi. Dengan latar belakang inilah penting bagi sekolah Islam mempertimbangkan pendidikan bilingual sebagai salah satu strategi utama membekali siswa dengan kemampuan yang relevan di abad ke-21, sekaligus mempertahankan dan memperkuat identitas keislaman mereka.</p>

  <h4>B. Tujuan Buku</h4>
  <p>Buku ini disusun sebagai panduan praktis yang komprehensif bagi pengelola sekolah, pendidik, dan pemangku kepentingan lain yang terlibat dalam pengembangan sekolah Islam bilingual. Tujuan pertamanya adalah memberi pemahaman mendalam tentang konsep dasar pendidikan bilingual di sekolah Islam — apa itu, mengapa penting, dan bagaimana penerapannya — sekaligus menjadi panduan perencanaan strategis: menyusun visi-misi yang sesuai nilai Islam dan kebutuhan bilingual, melakukan riset kebutuhan, serta mengembangkan kurikulum yang seimbang antara mata pelajaran umum dan pendidikan agama.</p>
  <p>Setelah perencanaan, buku ini memandu langkah implementasi program bilingual: mendesain program, memilih bahasa pengantar, mengintegrasikan nilai-nilai Islam dalam pembelajaran, hingga strategi rekrutmen dan pengembangan guru bilingual yang kompeten. Buku ini juga memberi strategi praktis untuk pengelolaan kelas dan lingkungan belajar bilingual, metode evaluasi dan pengembangan program dari waktu ke waktu, serta cara mendorong pelibatan orang tua dan komunitas agar dukungan terhadap program bilingual berjalan efektif.</p>
  <p>Sebagai penutup lingkup pembahasannya, buku ini mengupas cara menerapkan kendali mutu yang konsisten di setiap lapisan sekolah — mulai dari pimpinan hingga siswa dan orang tua — serta menutup dengan rekomendasi strategis berdasarkan pengalaman praktis dan praktik terbaik, agar sekolah Islam bilingual yang dibangun tidak hanya bertahan tetapi terus berkembang dan unggul di masa depan.</p>

  <h4>C. Sasaran Pembaca</h4>
  <p>Buku ini disusun dengan fokus utama membantu mereka yang terlibat langsung dalam dunia pendidikan, khususnya di lingkungan sekolah Islam yang bercita-cita menerapkan program bilingual. Tiga kelompok pembaca utamanya adalah kepala sekolah, pengelola yayasan pendidikan, dan para pendidik — masing-masing memiliki peran penting dan kebutuhan panduan yang berbeda.</p>
  <p>Bagi <strong>kepala sekolah</strong> sebagai pemimpin tertinggi yang memegang kendali kebijakan dan operasional sehari-hari, buku ini membantu menyusun visi-misi yang sejalan dengan nilai Islam dan kebutuhan bilingual, mengambil keputusan tepat soal kurikulum dan rekrutmen guru, serta mengawasi dan mengevaluasi pelaksanaan program agar berjalan lancar mencapai tujuannya. Bagi <strong>pengelola yayasan pendidikan</strong> yang bertanggung jawab atas pendanaan, infrastruktur, dan sumber daya manusia, buku ini membantu merencanakan alokasi sumber daya, menyusun kebijakan pendukung keberlanjutan program, menjalin kerja sama dengan lembaga sertifikasi internasional, serta memantau kinerja sekolah secara berkala.</p>
  <p>Bagi <strong>para pendidik</strong> — guru dan tenaga pendukung yang berinteraksi langsung dengan siswa setiap hari — buku ini membantu memahami konsep dan metode pengajaran bilingual yang efektif, mengembangkan keterampilan pedagogi untuk mengajar dua bahasa sambil menjaga keseimbangan mata pelajaran umum dan agama, menerapkan teknik pengelolaan kelas yang mendukung lingkungan bilingual, serta mengukur dan mengevaluasi kemajuan siswa dalam penguasaan kedua bahasa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari latar belakang yang dibahas di bab ini, tantangan apa yang menurut Anda paling nyata dihadapi sekolah Anda dalam mempertimbangkan pendidikan bilingual — dan langkah kecil apa yang bisa mulai dijajaki untuk menghadapinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 1, dua bahasa apa yang umumnya dipadukan dalam pendidikan bilingual di sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bahasa Arab sebagai bahasa utama agama, dan bahasa internasional seperti Bahasa Inggris</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Bahasa daerah dan Bahasa Indonesia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Bahasa Mandarin dan Bahasa Indonesia</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan menunjuk kepala sekolah baru untuk memimpin program bilingual, tetapi kepala sekolah tersebut hanya dilibatkan dalam urusan administratif dan tidak diajak menyusun visi program bilingual sejak awal. Berdasarkan Bab 1, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah kehilangan peran krusial kepala sekolah dalam menentukan arah dan strategi program, sehingga program berisiko berjalan tanpa arah yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena kepala sekolah memang tidak perlu dilibatkan dalam penyusunan visi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal anggaran, tidak berkaitan dengan arah program</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah madrasah kecil ingin mulai menjajaki pendidikan bilingual, tetapi ragu karena sumber daya terbatas dan guru belum terlatih dalam pengajaran dua bahasa. Berdasarkan Bab 1, sikap paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda sepenuhnya rencana bilingual sampai semua sumber daya sempurna, karena tantangan dianggap terlalu besar untuk dihadapi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyadari bahwa tantangan implementasi memang nyata, namun manfaat jangka panjangnya lebih besar — sehingga perlu perencanaan matang bertahap, bukan menunda tanpa batas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menerapkan bilingual secara penuh di semua mata pelajaran tanpa perencanaan, karena keterlambatan dianggap lebih berisiko daripada perencanaan yang matang</button>
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
<h2 class="reveal">Konsep Dasar Pendidikan Bilingual di Sekolah Islam</h2>
<p class="lede reveal">Sebelum merencanakan dan mengimplementasikan program bilingual, sekolah perlu memahami dulu apa sebenarnya pendidikan bilingual, manfaat nyata yang bisa dipetik darinya, tantangan yang biasanya menyertainya, dan tiga tingkatan model sekolah bilingual yang bisa dipilih sesuai kesiapan masing-masing sekolah.</p>

<div class="card reveal">
  <h4>A. Definisi Pendidikan Bilingual</h4>
  <p>Pendidikan bilingual adalah sistem pendidikan di mana dua bahasa digunakan secara bersamaan dalam proses pembelajaran — bukan hanya diajarkan sebagai dua mata pelajaran terpisah, melainkan diterapkan dalam berbagai aspek kehidupan sekolah, termasuk pengajaran, komunikasi, dan interaksi sehari-hari. Di sekolah Islam, pendidikan bilingual bertujuan memadukan manfaat dari dua bahasa — biasanya bahasa Arab sebagai bahasa utama agama dan bahasa internasional seperti Bahasa Inggris — dengan nilai-nilai dan ajaran Islam, sehingga siswa dapat menguasai kedua bahasa dengan baik dalam keterampilan berbicara, mendengar, membaca, maupun menulis.</p>
  <p>Ada beberapa prinsip dasar yang menopang pendidikan bilingual yang sehat. Pertama, keseimbangan bahasa: kedua bahasa harus menjadi bagian integral pembelajaran sehari-hari, bukan sekadar pelajaran tambahan. Kedua, integrasi bahasa dalam kurikulum, misalnya matematika dan sains diajarkan dalam Bahasa Inggris sementara pelajaran agama dan budaya dalam bahasa Arab. Ketiga, penggunaan bahasa yang kontekstual — bahasa Arab untuk materi keislaman, bahasa internasional untuk materi akademik dan komunikasi global. Keempat, pengembangan kemampuan linguistik secara menyeluruh mencakup empat keterampilan bahasa. Kelima, penerapan nilai-nilai budaya dan agama dalam kedua bahasa, sehingga siswa belajar menerapkan nilai Islam baik dalam konteks lokal maupun global. Dan keenam, dukungan memadai bagi siswa berupa materi ajar yang sesuai, guru yang terlatih mengajar dua bahasa, serta lingkungan yang aktif mendukung penggunaan kedua bahasa.</p>

  <h4>B. Manfaat Pendidikan Bilingual</h4>
  <p>Pendidikan bilingual menawarkan manfaat yang signifikan di tiga ranah utama. Dari sisi <strong>akademik</strong>, siswa bilingual cenderung memiliki kemampuan kognitif yang lebih baik — lebih terampil memecahkan masalah dan berpikir kritis karena otak mereka terlatih berpindah antar bahasa secara fleksibel. Mereka juga menguasai kedua bahasa secara aktif (bukan sekadar pasif), lebih siap melanjutkan pendidikan tinggi termasuk ke universitas luar negeri, dan beberapa studi menunjukkan prestasi akademik yang lebih baik pula pada mata pelajaran non-bahasa.</p>
  <p>Dari sisi <strong>budaya</strong>, pendidikan bilingual memberi siswa kesempatan memahami dan menghargai berbagai budaya, meningkatkan toleransi dan empati terhadap latar belakang yang berbeda. Di sekolah Islam khususnya, siswa terhubung dengan komunitas internasional sambil tetap memelihara identitas dan nilai-nilai Islam mereka, serta menjadi lebih sadar akan perbedaan dan kesamaan antarbudaya. Dari sisi <strong>sosial</strong>, kemampuan berkomunikasi dalam dua bahasa memperluas peluang bergaul dan bekerja dengan orang dari berbagai latar belakang, meningkatkan rasa percaya diri, serta membuka akses ke kesempatan global seperti program pertukaran pelajar dan peluang kerja internasional.</p>

  <h4>C. Tantangan dalam Pendidikan Bilingual</h4>
  <p>Di balik manfaatnya, pendidikan bilingual di sekolah Islam juga menghadapi sejumlah tantangan nyata. Ketersediaan sumber daya sering menjadi kendala besar — materi ajar dan buku teks dalam dua bahasa tidak selalu tersedia, apalagi dalam konteks pendidikan Islam. Solusinya, sekolah dapat mengembangkan materi ajar sendiri atau berkolaborasi dengan penerbit, memanfaatkan sumber daya digital dan platform e-learning, serta menjalin kerja sama dengan sekolah lain yang sudah berpengalaman. Tantangan kedua adalah kualifikasi dan pelatihan guru: tidak semua guru fasih mengajar dalam dua bahasa, sehingga diperlukan pelatihan berkelanjutan, rekrutmen yang selektif, dan program mentoring bagi guru baru.</p>
  <p>Tantangan ketiga adalah kesenjangan bahasa di kalangan siswa — mereka yang belum fasih dalam salah satu bahasa pengantar bisa kesulitan mengikuti pelajaran, yang dapat diatasi lewat program dukungan bahasa tambahan, pengajaran diferensiasi sesuai kebutuhan siswa, dan pembelajaran terintegrasi yang konsisten menggunakan kedua bahasa. Tantangan keempat adalah keterlibatan orang tua dan komunitas yang belum tentu memahami atau mendukung pendidikan bilingual; sekolah perlu menyediakan edukasi dan komunikasi rutin, membangun kemitraan dengan komunitas lokal, serta secara aktif mengumpulkan umpan balik untuk menyesuaikan program dengan kebutuhan mereka.</p>

  <h4>D. Tiga Macam Sekolah Bilingual</h4>
  <p>Dalam praktiknya, sekolah bilingual dapat dikelompokkan ke dalam tiga kategori bertingkat. Kategori pertama, <strong>Specified</strong>, adalah sekolah yang berada dalam lingkungan bilingual namun tidak secara khusus mengintegrasikan bahasa kedua dalam kurikulum formal dan belum memiliki sertifikasi resmi — penggunaan bahasa kedua lebih bersifat situasional, misalnya di beberapa pesantren modern yang menggunakan bahasa asing dalam komunikasi sehari-hari sambil tetap berfokus pada pendidikan agama. Kelebihannya adalah biaya implementasi yang lebih rendah, namun kekurangannya penguasaan bahasa kedua siswa tidak sekomprehensif sistem yang benar-benar bilingual.</p>
  <p>Kategori kedua, <strong>Satisfied</strong>, adalah sekolah yang sudah mengintegrasikan bilingualisme baik dalam lingkungan maupun kurikulum — bahasa kedua digunakan dalam pembelajaran dan kegiatan akademik sehari-hari — namun belum memiliki sertifikasi internasional. Kategori ketiga, <strong>Certified</strong>, adalah sekolah yang paling matang: memiliki lingkungan bilingual, kurikulum terintegrasi, dan telah memperoleh sertifikasi resmi dari badan internasional yang mengakui standar tinggi programnya, sehingga memberi siswa keunggulan kompetitif global — meski menuntut investasi besar dalam sumber daya, pelatihan, dan proses sertifikasi yang tidak singkat. Ketiga kategori ini bukan hierarki wajib yang harus dilalui berurutan, melainkan pilihan yang disesuaikan dengan tujuan, sumber daya, dan kebutuhan spesifik masing-masing sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga kategori sekolah bilingual (Specified, Satisfied, Certified) pada bab ini, di posisi mana sekolah Anda saat ini paling mendekati — dan langkah apa yang realistis untuk naik ke tingkat berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, apa perbedaan utama antara sekolah bilingual kategori "Satisfied" dan "Certified"?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah "Certified" telah memperoleh sertifikasi resmi dari badan internasional, sementara "Satisfied" sudah mengintegrasikan bilingualisme dalam kurikulum tetapi belum bersertifikasi internasional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keduanya sama persis, hanya berbeda nama saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">"Satisfied" adalah sekolah yang tidak menggunakan bahasa kedua sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam menerapkan pendidikan bilingual dengan hanya mengganti nama mata pelajaran ke Bahasa Inggris tanpa benar-benar mengintegrasikan bahasa kedua ke dalam proses belajar dan budaya sekolah sehari-hari. Berdasarkan definisi Bab 2, apa yang keliru dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendidikan bilingual seharusnya menerapkan dua bahasa secara menyeluruh dalam pembelajaran, komunikasi, dan interaksi sehari-hari, bukan sekadar mengubah nama mata pelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang keliru, karena mengganti nama mata pelajaran sudah cukup untuk disebut bilingual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pendekatan ini justru ideal karena tidak memerlukan perubahan apa pun dari sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru merintis program bilingual namun orang tua siswa banyak yang skeptis dan enggan mendukung program tersebut karena minim informasi. Berdasarkan tantangan pada Bab 2, langkah paling tepat untuk mengatasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan orang tua karena dukungan mereka dianggap tidak penting bagi keberhasilan program</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyediakan edukasi dan komunikasi rutin kepada orang tua tentang manfaat dan cara mendukung pendidikan bilingual, serta melibatkan komunitas secara aktif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan program bilingual sepenuhnya karena orang tua belum sepenuhnya mendukung</button>
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
<h2 class="reveal">Perencanaan Strategis Sekolah Bilingual</h2>
<p class="lede reveal">Setelah memahami konsep dasarnya, langkah berikutnya adalah merencanakan sekolah bilingual secara strategis: menetapkan visi-misi yang jelas, melakukan riset kebutuhan yang matang, menyusun kurikulum yang seimbang, dan memastikan kebutuhan sumber daya manusianya terpenuhi.</p>

<div class="card reveal">
  <h4>A. Penentuan Visi dan Misi</h4>
  <p>Penentuan visi dan misi adalah langkah awal yang krusial dalam perencanaan strategis sekolah bilingual, karena keduanya akan membimbing seluruh pengembangan dan implementasi program. <strong>Visi</strong> adalah gambaran masa depan ideal yang ingin dicapai sekolah — harus inspiratif dan mencerminkan tujuan jangka panjang, dirumuskan dengan mengidentifikasi tujuan jangka panjang, melibatkan kolaborasi dengan seluruh pemangku kepentingan (kepala sekolah, yayasan, guru, komunitas), serta berfokus pada kualitas dan identitas keislaman-bilingual. <strong>Misi</strong> adalah pernyataan yang menjelaskan tujuan dan fokus operasional sekolah dalam mencapai visinya — harus jelas, terukur, dan mencakup strategi implementasi konkret, seperti mengembangkan kurikulum seimbang antara bahasa Arab dan Inggris dengan integrasi ajaran Islam di setiap mata pelajaran.</p>
  <p>Setelah visi-misi dirumuskan, nilai-nilai Islam perlu diintegrasikan secara nyata ke dalam konsep bilingual — melalui kurikulum yang memadukan pembelajaran dua bahasa dengan ajaran Islam, pengajaran yang melatih guru menyisipkan nilai Islam dalam materi bilingual, kegiatan sekolah yang mendukung pengembangan karakter Islami dalam konteks bilingual, serta lingkungan sekolah yang mendukung, misalnya memasang kutipan ayat Al-Qur'an atau hadis dalam dua bahasa. Visi dan misi ini bukan dokumen statis — perlu dievaluasi secara berkala dan disesuaikan berdasarkan umpan balik pemangku kepentingan serta perubahan lingkungan pendidikan, agar tetap relevan dan menjadi fondasi yang kokoh bagi seluruh program bilingual sekolah.</p>

  <h4>B. Riset dan Analisis Kebutuhan</h4>
  <p>Riset dan analisis kebutuhan membantu pengelola sekolah memahami lingkungan sekitar, kebutuhan calon siswa, dan tren yang memengaruhi pendidikan bilingual. Langkah pertama adalah mengidentifikasi kebutuhan pasar, melalui studi demografis wilayah untuk memahami profil populasi dan ukuran pasar potensial, survei dan kuesioner kepada orang tua serta masyarakat untuk memahami minat dan preferensi mereka, dan analisis kompetitor untuk memahami kekuatan-kelemahan sekolah bilingual lain di wilayah yang sama serta kekosongan layanan yang dapat diisi.</p>
  <p>Langkah kedua adalah mengidentifikasi kebutuhan target siswa — membuat profil siswa berdasarkan usia, latar belakang pendidikan, dan kebutuhan bahasa, berdiskusi dengan orang tua calon siswa untuk memahami harapan mereka, serta bila memungkinkan melakukan uji coba kurikulum dengan kelompok kecil siswa untuk mendapat umpan balik langsung. Temuan dari riset ini kemudian digunakan untuk menyusun rencana strategis yang konkret — merancang kurikulum sesuai kebutuhan bahasa yang teridentifikasi, mengatasi kesenjangan seperti kurangnya fasilitas atau pelatihan guru, dan terus dievaluasi serta disesuaikan seiring waktu agar sekolah dapat memenuhi harapan komunitas secara berkelanjutan.</p>

  <h4>C. Pengembangan Kurikulum Bilingual</h4>
  <p>Kurikulum bilingual yang baik harus memastikan siswa mendapat pendidikan yang seimbang antara pendidikan agama dan mata pelajaran umum dalam dua bahasa. Langkah pertama adalah menentukan struktur kurikulum: mengidentifikasi mata pelajaran utama yang akan diajarkan dalam dua bahasa, mengalokasikan pembagian waktu yang cukup untuk masing-masing bahasa dan pendidikan agama, serta merancang integrasi kurikulum sehingga nilai-nilai Islam turut hadir bahkan dalam pelajaran bahasa Inggris atau sains.</p>
  <p>Langkah selanjutnya adalah mengembangkan kurikulum pendidikan agama secara khusus (memilih materi sesuai tingkat usia, menggunakan metode interaktif seperti diskusi dan studi kasus, serta mengintegrasikannya dengan mata pelajaran umum) dan kurikulum mata pelajaran umum (mengatur bahasa pengantar per mata pelajaran, memilih sumber belajar berkualitas dalam kedua bahasa, dan menyesuaikan tingkat kesulitan dengan kemampuan bilingual siswa). Rencana pembelajaran dan sistem penilaian yang komprehensif — yang menilai kompetensi siswa dalam kedua bahasa sekaligus pemahaman materi agama dan akademik — perlu disusun bersamaan, dan seluruh kurikulum ini harus dievaluasi secara berkala serta disesuaikan berdasarkan umpan balik siswa, orang tua, dan guru agar terus relevan dan berkualitas.</p>

  <h4>D. Kebutuhan Sumber Daya Manusia</h4>
  <p>Sumber daya manusia adalah elemen kunci keberhasilan sekolah bilingual. Guru bilingual idealnya memenuhi empat kriteria utama: kemampuan bahasa yang baik dalam bahasa pengantar utama dan kedua (didukung sertifikasi seperti TOEFL/IELTS), kualifikasi akademik yang relevan disertai pengalaman mengajar di lingkungan bilingual atau internasional, kemampuan pedagogi untuk menerapkan metode pengajaran bilingual yang efektif serta mengelola kelas dengan latar belakang bahasa siswa yang beragam, dan keterampilan sosial-budaya berupa komunikasi yang baik dalam dua bahasa serta kepedulian terhadap keberagaman budaya siswa.</p>
  <p>Selain guru, sekolah juga membutuhkan staf pendukung yang mumpuni: kepala sekolah dan pimpinan dengan visi kepemimpinan yang kuat dan pengalaman manajerial, staf administrasi dengan kemampuan organisasi dan bahasa yang baik, konselor dengan keterampilan mendukung kesejahteraan siswa bilingual, serta staf teknologi dan media yang mampu mengembangkan konten pembelajaran dalam dua bahasa. Seluruh sumber daya manusia ini perlu mendapat pelatihan awal saat bergabung, pelatihan berkelanjutan untuk memperbarui keterampilan, sistem pendampingan bagi yang baru atau mengalami kesulitan, serta evaluasi kinerja berkala agar kebutuhan pelatihan lanjutan dapat teridentifikasi dan disesuaikan seiring perkembangan sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek perencanaan strategis (visi-misi, riset kebutuhan, kurikulum, SDM) pada bab ini, aspek mana yang paling belum matang di sekolah Anda — dan langkah riset atau perencanaan kecil apa yang bisa mulai dilakukan bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, apa perbedaan mendasar antara visi dan misi sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Visi adalah gambaran masa depan ideal yang ingin dicapai, sedangkan misi adalah pernyataan operasional yang menjelaskan cara mencapainya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Visi dan misi adalah istilah yang sama persis dan bisa dipertukarkan bebas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Visi hanya untuk yayasan, sedangkan misi hanya untuk guru</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menyusun kurikulum bilingual dengan hanya menerjemahkan buku teks bahasa Indonesia ke Bahasa Inggris tanpa menyisipkan nilai-nilai Islam maupun menyesuaikan tingkat kesulitan dengan kemampuan bahasa siswa. Berdasarkan Bab 3, apa yang paling perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurikulum perlu mengintegrasikan nilai-nilai Islam secara nyata dan menyesuaikan tingkat kesulitan materi dengan kemampuan bilingual siswa, bukan sekadar menerjemahkan teks</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena menerjemahkan buku teks sudah cukup untuk kurikulum bilingual yang baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya menghapus seluruh pelajaran agama agar kurikulum lebih sederhana</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan ingin membuka sekolah bilingual baru langsung dalam waktu satu bulan tanpa riset kebutuhan pasar maupun profil calon siswa, hanya berdasarkan asumsi bahwa program bilingual pasti diminati. Berdasarkan Bab 3, risiko apa yang paling mungkin muncul?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena riset kebutuhan hanyalah langkah formalitas yang tidak memengaruhi keberhasilan program</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Program berisiko tidak sesuai dengan kebutuhan nyata pasar dan siswa, karena keputusan diambil tanpa data demografis, preferensi orang tua, atau analisis kompetitor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal desain logo sekolah, tidak berkaitan dengan program bilingual itu sendiri</button>
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
<h2 class="reveal">Desain & Implementasi Program Bilingual</h2>
<p class="lede reveal">Setelah perencanaan strategis matang, saatnya mendesain program secara konkret — mulai dari struktur programnya, pemilihan bahasa pengantar, metode pengajaran, cara mengintegrasikan nilai-nilai Islam, hingga elemen-elemen penggerak yang membuat sekolah Islam bilingual benar-benar hidup dan berjalan.</p>

<div class="card reveal">
  <h4>A. Struktur Program Bilingual</h4>
  <p>Struktur program bilingual mencakup desain pembelajaran dalam dua bahasa, alokasi waktu, dan pengaturan materi. Sekolah perlu menentukan tujuan program (misalnya meningkatkan kemampuan berbahasa kedua sekaligus menyelaraskan pendidikan agama dengan pembelajaran umum), memilih bahasa pengantar (biasanya satu bahasa lokal seperti Arab dan satu bahasa internasional seperti Inggris), dan menentukan keseimbangan penggunaan masing-masing bahasa dalam proses pembelajaran sehari-hari. Pembagian waktu perlu disusun dalam jadwal harian, mingguan, dan bulanan yang konsisten namun tetap fleksibel menyesuaikan kebutuhan siswa dan kegiatan sekolah lainnya.</p>
  <p>Pengaturan materi mencakup penentuan mata pelajaran yang diajarkan dalam masing-masing bahasa serta integrasi materi antarbahasa, misalnya konsep sains diajarkan dalam Bahasa Inggris sementara diskusinya dikaitkan dengan konteks budaya Islam dalam bahasa Arab. Metode pengajaran yang digunakan sebaiknya memadukan pendekatan terpadu seperti pembelajaran berbasis proyek dan pembelajaran berbasis konten, disesuaikan dengan kebutuhan dan kemampuan siswa. Seluruh struktur ini perlu dievaluasi secara berkala berdasarkan hasil belajar dan kepuasan siswa-orang tua, lalu diimplementasikan dengan monitoring berkelanjutan agar masalah yang muncul dapat segera diatasi.</p>

  <h4>B. Pemilihan Bahasa Pengantar</h4>
  <p>Pemilihan bahasa pengantar sangat memengaruhi efektivitas program bilingual. Bahasa utama sebaiknya dipilih berdasarkan konteks lokal dan kebutuhan masyarakat, kebutuhan akademik siswa, serta ketersediaan sumber daya pendidikan yang memadai. Bahasa kedua biasanya adalah bahasa internasional seperti Bahasa Inggris yang penting secara global, dipilih berdasarkan relevansinya dengan tujuan siswa (misalnya studi lanjut atau karier internasional) dan ketersediaan materi pembelajarannya.</p>
  <p>Kriteria pemilihan bahasa mencakup tujuan pendidikan (keterampilan bahasa yang paling bermanfaat bagi masa depan siswa dan kesesuaiannya dengan kurikulum), profil siswa (latar belakang bahasa yang sudah dikuasai dan kebutuhan khusus mereka), serta sumber daya dan dukungan yang tersedia (guru kompeten dan materi pembelajaran berkualitas dalam kedua bahasa). Setelah bahasa ditentukan, strategi implementasinya meliputi jadwal pembelajaran yang seimbang dan fleksibel, integrasi materi lewat pengajaran terpadu dan proyek yang melibatkan kedua bahasa, serta evaluasi berkelanjutan berdasarkan umpan balik siswa dan guru untuk memastikan keseimbangan penggunaan kedua bahasa tetap terjaga.</p>

  <h4>C. Metode Pengajaran Bilingual</h4>
  <p>Ada beberapa metode utama pengajaran bilingual yang bisa dipilih sesuai kondisi sekolah. <strong>Metode imersi</strong> membuat siswa "terbenam" dalam bahasa target secara intensif di sebagian besar mata pelajaran, mempercepat penguasaan bahasa kedua. <strong>Metode dua bahasa (two-way immersion)</strong> mempertemukan siswa penutur asli kedua bahasa untuk belajar bersama, mendorong interaksi lintas bahasa. <strong>Metode seimbang</strong> mengalokasikan mata pelajaran tertentu ke masing-masing bahasa secara proporsional, sementara <strong>metode konten dan bahasa terpadu (CLIL)</strong> mengintegrasikan pengajaran bahasa dengan konten akademik sekaligus, misalnya siswa mempelajari geografi dalam Bahasa Inggris sambil memperkuat kemampuan bahasanya.</p>
  <p>Selain metode, sekolah juga perlu memilih pendekatan pengajaran yang sesuai: pendekatan langsung yang fokus pada latihan kosakata dan tata bahasa terstruktur, pendekatan kontekstual yang mengajarkan bahasa lewat situasi nyata dan bermakna, pendekatan komunikatif yang menekankan interaksi nyata lewat diskusi dan role-play, serta pendekatan multisensori yang memanfaatkan berbagai indera untuk memperkuat ingatan bahasa. Apa pun metode dan pendekatannya, integrasi nilai-nilai Islam tetap harus disisipkan — misalnya lewat teks dan materi yang mengandung ajaran Islam dalam bahasa target — agar pendidikan bilingual tidak hanya berfokus pada bahasa, tetapi juga pada pengembangan karakter siswa sesuai ajaran Islam.</p>

  <h4>D. Integrasi Nilai-Nilai Islam dalam Pembelajaran</h4>
  <p>Integrasi nilai-nilai Islam bertujuan memastikan pendidikan bilingual tidak hanya fokus pada penguasaan bahasa, tetapi juga penerapan prinsip ajaran Islam. Ini dimulai dari penyusunan kurikulum yang menyelaraskan pendidikan bilingual dengan ajaran Islam — misalnya silabus agama Islam yang disampaikan dalam bahasa target, atau integrasi tematik di mana pelajaran sains dikaitkan dengan ciptaan Allah dan pelajaran sejarah membahas peradaban Islam. Pemilihan buku dan sumber ajar juga perlu cermat, memastikan materi tidak hanya sesuai standar akademik tetapi juga memuat kisah inspiratif dan nilai moral Islami, disertai penerapan etika Islam seperti kejujuran dan saling menghormati dalam interaksi kelas sehari-hari.</p>
  <p>Integrasi ini diperkuat lewat kegiatan ekstrakurikuler yang mendukung karakter Islami (klub keagamaan, diskusi ajaran Islam, proyek amal) dan proyek kelas yang menggabungkan bahasa dengan ajaran Islam, seperti riset tentang kontribusi ilmuwan Muslim dalam sejarah. Guru sendiri perlu mendapat pelatihan khusus agar mampu mengintegrasikan nilai Islam dalam pengajaran bilingual mereka, didukung sumber daya tambahan berupa buku dan panduan yang relevan — sehingga pendidikan yang dihasilkan benar-benar mendukung perkembangan akademik dan spiritual siswa secara bersamaan.</p>

  <h4>E. Elemen Sekolah Islam Bilingual</h4>
  <p>Keberhasilan sekolah Islam bilingual ditopang oleh enam elemen yang saling terkait. <strong>Pimpinan sekolah</strong> harus berkomitmen penuh — menetapkan arah strategis, mengalokasikan sumber daya dan anggaran, serta memotivasi seluruh warga sekolah — didukung <strong>team penggerak</strong> yang terdiri dari koordinator program, pengembang kurikulum, pelatih guru, dan pengelola sumber daya yang bekerja secara terkoordinasi. <strong>Guru dan karyawan</strong> idealnya mencakup native lokal (penutur asli bahasa target) yang membawa otentisitas bahasa dan pemahaman budaya, didukung pelatihan SDM berkelanjutan mencakup pelatihan bahasa, pedagogi, budaya, dan teknologi.</p>
  <p><strong>Kurikulum</strong> harus memiliki struktur yang jelas (pembagian waktu, integrasi mata pelajaran, evaluasi berkala) serta mata pelajaran bilingual yang mengajarkan konsep akademik sekaligus bahasa secara bersamaan. <strong>Kesiswaan</strong> diperkaya lewat kegiatan dan event bertema bahasa serta peran <em>duta bilingual</em> — siswa yang ditunjuk mempromosikan penggunaan bahasa kedua dan memotivasi teman sebaya. <strong>Sertifikasi</strong>, baik bagi guru (mengakui kompetensi mengajar bilingual) maupun siswa (mengakui capaian kemampuan bahasa), menambah kredibilitas dan motivasi. Terakhir, <strong>bagian umum sekolah</strong> mencakup tampilan fisik (signage dan dekorasi bilingual yang menciptakan lingkungan menyambut) serta budaya sekolah yang memadukan nilai-nilai Islam dengan kebiasaan penggunaan dua bahasa sehari-hari, sehingga seluruh elemen ini bersinergi membentuk identitas sekolah Islam bilingual yang utuh.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima aspek desain dan implementasi (struktur program, bahasa pengantar, metode pengajaran, integrasi nilai Islam, elemen sekolah) pada bab ini, elemen mana yang paling siap di sekolah Anda saat ini, dan elemen mana yang perlu dibangun dari nol?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4, apa yang dimaksud dengan metode Content and Language Integrated Learning (CLIL)?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Metode yang mengintegrasikan pengajaran bahasa dengan pengajaran konten akademik secara bersamaan, misalnya belajar geografi dalam bahasa target</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metode yang hanya mengajarkan bahasa tanpa kaitan dengan mata pelajaran lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metode yang melarang penggunaan bahasa kedua sama sekali di kelas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menerapkan program bilingual dengan jadwal yang kaku dan tidak pernah disesuaikan meski hasil evaluasi menunjukkan siswa kesulitan mengikuti pelajaran sains dalam bahasa kedua. Berdasarkan Bab 4, apa yang seharusnya dilakukan sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan evaluasi dan penyesuaian pada struktur program, alokasi waktu, atau metode pengajaran berdasarkan hasil evaluasi, karena fleksibilitas adalah bagian penting dari struktur program bilingual yang baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mempertahankan jadwal apa adanya karena perubahan dianggap mengganggu struktur kurikulum</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan pengajaran sains sepenuhnya karena dianggap tidak cocok dengan program bilingual</button>
  </div>
  <div class="quiz-q">
    <p>Sekolah Islam Terpadu Cahaya Bahasa ingin memperkuat integrasi nilai-nilai Islam dalam pelajaran sains berbahasa Inggris, namun guru sains hanya menerjemahkan buku teks tanpa mengaitkannya dengan ajaran Islam. Berdasarkan Bab 4, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena pelajaran sains dianggap tidak perlu dikaitkan dengan nilai agama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan integrasi tematik, misalnya mengaitkan topik sains dengan penciptaan Allah, serta memberi pelatihan kepada guru agar mampu menyisipkan nilai Islam dalam pengajaran bilingual mereka</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh pelajaran sains dengan pelajaran agama semata</button>
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
<h2 class="reveal">Rekrutmen dan Pelatihan Guru Bilingual</h2>
<p class="lede reveal">Guru adalah penentu utama keberhasilan program bilingual. Bab ini membahas kriteria memilih guru yang tepat, cara melatih dan mengembangkan kompetensinya secara berkelanjutan, serta sistem pendampingan dan evaluasi yang menjaga kualitas pengajaran tetap tinggi dari waktu ke waktu.</p>

<div class="card reveal">
  <h4>A. Kriteria Rekrutmen Guru</h4>
  <p>Guru bilingual idealnya memenuhi enam kriteria utama. Dari sisi <strong>kualifikasi akademik</strong>, mereka perlu latar belakang pendidikan yang sesuai (gelar sarjana di bidang pendidikan, linguistik, atau bidang terkait) disertai kualifikasi bahasa yang kuat dalam kedua bahasa pengantar, dibuktikan lewat sertifikasi seperti TOEFL atau IELTS. Dari sisi <strong>kompetensi pedagogis</strong>, guru harus mampu menjelaskan konsep dalam dua bahasa dan menguasai berbagai metode pengajaran bilingual seperti pendekatan dua bahasa, imersi, atau pembelajaran berbasis proyek, serta tahu kapan dan bagaimana menerapkannya.</p>
  <p>Pengalaman mengajar di lingkungan bilingual atau multibahasa menjadi nilai tambah penting, didukung kemampuan interpersonal yang baik untuk berkomunikasi dengan siswa, orang tua, dan rekan kerja dalam dua bahasa. Guru juga perlu memiliki kemampuan adaptasi dan inovasi — fleksibel menghadapi tantangan, kreatif menyusun materi, serta terampil memanfaatkan teknologi pendidikan. Pemahaman budaya dari kedua bahasa yang diajarkan turut penting agar guru dapat mengintegrasikan konteks budaya dalam pembelajaran dan membantu siswa membentuk identitas bikultural yang positif. Terakhir, sertifikasi profesional tambahan dalam pengajaran bilingual serta komitmen mengikuti pelatihan berkelanjutan akan meningkatkan kredibilitas dan menjaga guru tetap mengikuti perkembangan terbaru dalam pendidikan bilingual.</p>

  <h4>B. Pelatihan dan Pengembangan Guru</h4>
  <p>Pelatihan guru bilingual bertujuan memastikan mereka memiliki keterampilan bahasa, teknik pengajaran, dan pemahaman budaya yang memadai untuk mengajar secara efektif. Pada tahap awal, guru baru mengikuti pelatihan dasar mencakup metode pengajaran bilingual dan pemahaman kurikulum, sering disertai sertifikasi bilingual formal. Pelatihan lanjutan kemudian mengembangkan keterampilan pedagogis melalui teknik pengajaran terbaru dan pemanfaatan teknologi pendidikan, sekaligus memperdalam kompetensi bahasa lewat kursus tambahan dan latihan praktis seperti berbicara dengan penutur asli.</p>
  <p>Pelatihan kultural juga penting agar guru memahami konteks sosial-budaya dari bahasa yang diajarkan dan mampu mengintegrasikannya dalam materi ajar. Semua ini perlu dilengkapi program pengembangan profesional berkelanjutan — seminar, workshop, dan konferensi rutin — disertai penilaian dan umpan balik berkala untuk mengidentifikasi area yang perlu diperbaiki. Dukungan dan mentoring, baik lewat program mentoring formal maupun komunitas praktisi tempat guru saling berbagi pengalaman dan solusi, melengkapi proses pelatihan yang berkelanjutan dan multifaset ini.</p>

  <h4>C. Pendampingan dan Evaluasi Guru</h4>
  <p>Pendampingan dan evaluasi guru bertujuan mendukung mereka meningkatkan keterampilan, memastikan standar pendidikan terpenuhi, dan membantu menghadapi tantangan mengajar dua bahasa. Sistem pendampingan biasanya melibatkan mentor berpengalaman yang membimbing guru baru atau yang mengalami kesulitan, observasi kelas rutin untuk memantau metode pengajaran secara langsung, serta sesi refleksi setelah observasi untuk mendiskusikan temuan dan merencanakan langkah perbaikan bersama.</p>
  <p>Sistem evaluasi guru mencakup penilaian kinerja berkala terhadap pemahaman bahasa, integrasi kurikulum, dan keterampilan pedagogis; umpan balik dari siswa lewat survei atau diskusi kelompok; serta penilaian diri di mana guru merefleksikan kekuatan dan kelemahan mereka sendiri. Berdasarkan hasil evaluasi ini, sekolah dapat menyusun program peningkatan kualitas dan rencana pengembangan individu bagi setiap guru, didukung dukungan berkelanjutan berupa sesi pelatihan berkala dan komunitas belajar antar-guru bilingual — sehingga kompetensi guru terus meningkat secara konsisten dan siswa mendapat pendidikan terbaik dalam lingkungan bilingual.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kriteria rekrutmen, pelatihan, dan sistem pendampingan guru pada bab ini, area mana yang paling perlu diperkuat di sekolah Anda saat ini — dan siapa yang paling tepat memulai langkah perbaikan tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, selain kualifikasi akademik dan kompetensi pedagogis, aspek apa lagi yang penting dimiliki guru bilingual agar mampu membantu siswa membentuk identitas bikultural yang positif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pemahaman dan kemampuan mengintegrasikan budaya dari kedua bahasa yang diajarkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan mengoperasikan mesin fotokopi sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kepemilikan kendaraan pribadi untuk mobilitas ke sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru direkrut karena nilai TOEFL-nya tinggi, tetapi ia belum pernah dilatih metode pengajaran bilingual dan tidak didampingi mentor sejak awal bertugas. Berdasarkan Bab 5, apa risiko dari situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kemampuan bahasa saja tidak cukup — tanpa pelatihan pedagogis dan pendampingan, guru berisiko kesulitan menerapkan metode pengajaran bilingual yang efektif di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena nilai TOEFL tinggi sudah menjamin keberhasilan mengajar bilingual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal gaji, tidak berkaitan dengan kualitas pengajaran</button>
  </div>
  <div class="quiz-q">
    <p>Kepala sekolah SDIT Bahasa Nusantara menerima laporan bahwa beberapa siswa kesulitan memahami pelajaran matematika berbahasa Inggris, namun belum ada observasi kelas maupun umpan balik siswa yang dikumpulkan secara sistematis dari guru terkait. Berdasarkan Bab 5, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memberhentikan guru tersebut tanpa proses evaluasi lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan observasi kelas, mengumpulkan umpan balik siswa, serta mengadakan sesi refleksi dan rencana perbaikan bersama guru sebagai bagian dari sistem pendampingan dan evaluasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan laporan tersebut karena dianggap tidak signifikan</button>
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
<h2 class="reveal">Pengelolaan Kelas & Lingkungan Belajar Bilingual</h2>
<p class="lede reveal">Kurikulum dan guru yang baik perlu didukung pengelolaan kelas dan lingkungan belajar yang tepat. Bab ini membahas cara mengelola kelas bilingual sehari-hari, memanfaatkan media dan teknologi, menciptakan lingkungan sekolah yang mendukung, serta menata tampilan dan budaya sekolah secara umum.</p>

<div class="card reveal">
  <h4>A. Manajemen Kelas Bilingual</h4>
  <p>Manajemen kelas bilingual bertujuan menciptakan lingkungan belajar yang mendukung siswa menguasai dua bahasa sekaligus. Pengaturan ruang kelas mencakup penataan tempat duduk yang mempertimbangkan kebutuhan interaksi siswa, area aktivitas khusus untuk kegiatan berbahasa seperti sudut bacaan, serta materi visual dwibahasa (poster, grafik) yang membantu siswa mengaitkan kosakata dengan gambar. Dari sisi teknik pengajaran, pendekatan diferensiasi diperlukan untuk menyesuaikan materi dengan tingkat kemampuan bahasa siswa yang berbeda-beda, dipadukan dengan penggunaan bahasa yang konsisten — misalnya bahasa Inggris khusus untuk matematika dan bahasa Arab untuk pelajaran agama — agar siswa terbiasa dan tidak bingung berpindah konteks.</p>
  <p>Pengelolaan interaksi siswa dapat dilakukan lewat kegiatan kolaboratif seperti kerja kelompok dan pasangan berbicara yang mendorong siswa saling membantu lintas kemampuan bahasa, disertai umpan balik positif dan penghargaan atas kemajuan penggunaan bahasa. Tantangan seperti kendala bahasa dapat diatasi dengan sumber daya tambahan (tutor bahasa, materi ekstra) dan strategi pembelajaran berbasis proyek atau masalah nyata, sementara konflik akibat perbedaan bahasa perlu ditangani dengan teknik resolusi masalah yang mengajarkan siswa berkomunikasi baik dan menghargai perbedaan.</p>

  <h4>B. Penggunaan Media dan Teknologi</h4>
  <p>Media dan teknologi berperan penting mendukung pembelajaran bilingual dengan cara yang menarik dan interaktif. Alat bantu cetak seperti buku bilingual, kartu kosakata, poster edukasi, dan flashcard membantu siswa mempraktikkan kosakata dalam konteks berbeda. Teknologi pembelajaran seperti aplikasi latihan bahasa, program e-learning, website pendidikan, forum diskusi online, serta video dan audio dwibahasa memperkaya cara siswa berlatih dan menggunakan bahasa kedua dalam berbagai konteks.</p>
  <p>Di dalam kelas, perangkat seperti smartboard dan proyektor memungkinkan penyampaian materi dwibahasa yang interaktif, sementara tablet dan komputer mendukung akses materi, latihan individual, hingga proyek kelompok berbasis riset online. Kunci pemanfaatan media dan teknologi yang efektif adalah mengintegrasikannya secara terencana dalam rencana pembelajaran — mengombinasikan berbagai alat bantu, merancang kegiatan berbasis teknologi, lalu mengevaluasi efektivitasnya dan menyesuaikan berdasarkan umpan balik siswa agar keterlibatan dan hasil belajar terus meningkat.</p>

  <h4>C. Penciptaan Lingkungan Sekolah yang Mendukung</h4>
  <p>Lingkungan sekolah yang mendukung penggunaan dua bahasa mencakup fasilitas fisik sekaligus suasana dan budaya yang memotivasi siswa aktif berbahasa. Dari sisi ruang kelas, label bilingual di berbagai area, sudut bahasa khusus, poster edukasi dwibahasa, dan kalender kegiatan dalam dua bahasa membantu siswa terbiasa dengan bahasa kedua dalam konteks sehari-hari. Budaya dan atmosfer sekolah diperkuat lewat kebiasaan penggunaan bahasa kedua di waktu-waktu tertentu, sistem penghargaan bagi siswa yang aktif berbahasa, serta kegiatan sekolah seperti festival bahasa dan klub diskusi yang memberi ruang praktik nyata di luar pelajaran formal.</p>
  <p>Partisipasi orang tua dan komunitas turut memperkuat lingkungan ini — lewat workshop edukasi orang tua, keterlibatan mereka dalam kegiatan bilingual sekolah, kolaborasi dengan organisasi lokal, dan jaringan dengan sekolah bilingual lain untuk berbagi sumber daya dan praktik terbaik. Dukungan teknologi dan media digital, seperti aplikasi pembelajaran dan platform online dwibahasa, melengkapi ekosistem ini sehingga siswa dapat mengakses sumber belajar kapan saja, baik di sekolah maupun di rumah.</p>

  <h4>D. Bagian Umum Sekolah Bilingual</h4>
  <p>Tampilan dan budaya sekolah secara keseluruhan turut menentukan kesuksesan program bilingual. Dari sisi tampilan, informasi penting seperti jadwal, petunjuk arah, dan pengumuman sebaiknya tersedia dalam kedua bahasa di seluruh area sekolah, dengan dekorasi ruang kelas dan area umum yang mencerminkan keberagaman bahasa lewat poster dan artwork dwibahasa. Dari sisi budaya, nilai-nilai bilingual perlu diintegrasikan sebagai bagian dari identitas dan kebanggaan komunitas sekolah, diperkuat lewat perayaan dan tradisi seperti festival bahasa serta kegiatan kesiswaan seperti klub bahasa dan debat bilingual.</p>
  <p>Dukungan sosial yang positif — hubungan yang nyaman antara siswa, guru, dan staf dalam menggunakan kedua bahasa, disertai mekanisme penanganan konflik terkait bahasa — melengkapi budaya sekolah yang sehat. Pelibatan orang tua dan komunitas tetap menjadi bagian penting: komunikasi dwibahasa yang jelas kepada orang tua, partisipasi aktif mereka dalam kegiatan sekolah, serta kemitraan dengan organisasi lokal memperluas jangkauan dan dampak program bilingual jauh melampaui tembok kelas.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek pengelolaan kelas dan lingkungan (manajemen kelas, media-teknologi, lingkungan sekolah, tampilan-budaya umum) pada bab ini, aspek mana yang paling mudah diperbaiki dalam waktu dekat di sekolah Anda?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, apa manfaat utama menempatkan label dan poster dalam dua bahasa di ruang kelas?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membantu siswa mengaitkan kosakata dengan konteks visual dan terbiasa menggunakan bahasa kedua dalam keseharian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya sebagai hiasan tanpa manfaat pembelajaran apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Untuk menggantikan kebutuhan buku pelajaran sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah kelas bilingual memiliki siswa dengan kemampuan bahasa kedua yang sangat beragam — sebagian sudah fasih, sebagian masih dasar — namun guru mengajar dengan satu metode dan kecepatan yang sama untuk semua siswa. Berdasarkan Bab 6, apa yang seharusnya diterapkan guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan pendekatan diferensiasi, menyesuaikan materi dan dukungan sesuai tingkat kemampuan bahasa masing-masing siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap menggunakan satu metode yang sama karena diferensiasi dianggap tidak perlu dalam kelas bilingual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengeluarkan siswa yang belum fasih dari kelas bilingual</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memasang banyak poster dan label dwibahasa di kelas, tetapi jarang mengadakan kegiatan seperti festival bahasa atau klub diskusi yang memberi siswa kesempatan praktik nyata, dan komunikasi dengan orang tua pun jarang dilakukan dalam dua bahasa. Berdasarkan Bab 6, apa yang masih kurang dari upaya sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena label dan poster sudah cukup untuk menciptakan lingkungan bilingual yang mendukung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah masih perlu memperkuat budaya dan atmosfer lewat kegiatan praktik nyata serta pelibatan orang tua dan komunitas, tidak hanya mengandalkan elemen visual di ruang kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya melepas semua label dan poster karena dianggap tidak berguna</button>
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
<h2 class="reveal">Evaluasi dan Pengembangan Program Bilingual</h2>
<p class="lede reveal">Program bilingual yang sudah berjalan perlu terus dievaluasi agar tetap efektif. Bab ini membahas cara menilai kompetensi siswa, mengukur keberhasilan program secara keseluruhan, dan strategi mengembangkan program agar terus relevan dari tahun ke tahun.</p>

<div class="card reveal">
  <h4>A. Sistem Evaluasi Siswa</h4>
  <p>Evaluasi siswa memastikan tujuan pendidikan bilingual tercapai. Penilaian keterampilan bahasa dilakukan lewat tes lisan (percakapan, presentasi), tes tertulis (pemahaman membaca dan menulis), serta tes mendengarkan, dilengkapi portofolio bahasa berupa kumpulan karya siswa dan refleksi diri yang memungkinkan penilaian perkembangan secara komprehensif dari waktu ke waktu. Penilaian kinerja kelas dilakukan lewat tugas dan proyek bilingual yang mengevaluasi penerapan bahasa dalam konteks praktis, serta observasi kelas yang mencatat penggunaan bahasa dan partisipasi siswa dalam interaksi sehari-hari.</p>
  <p>Evaluasi kemajuan menggunakan rubrik yang jelas untuk menilai kefasihan berbicara, pemahaman bacaan, dan kemampuan menulis berdasarkan standar kemampuan bahasa per tingkat kelas, dilengkapi umpan balik teratur dan rencana perbaikan individual bagi siswa yang mengalami kesulitan. Penilaian formatif berupa kuis dan tes kecil rutin membantu memantau kemajuan secara berkelanjutan, sementara penilaian sumatif berupa ujian akhir mengevaluasi keseluruhan kompetensi bilingual siswa pada periode tertentu.</p>

  <h4>B. Penilaian Keberhasilan Program</h4>
  <p>Menilai keberhasilan program bilingual secara menyeluruh memerlukan beberapa indikator utama: pencapaian akademik siswa (kemampuan bahasa dan prestasi dibandingkan dengan program non-bilingual), kepuasan siswa dan orang tua (lewat survei dan wawancara mendalam), kualitas pengajaran (evaluasi kinerja guru dan efektivitas pelatihan yang mereka terima), serta integrasi nilai-nilai Islam (apakah kurikulum dan kegiatan sekolah benar-benar mencerminkan ajaran Islam dan mendukung karakter siswa).</p>
  <p>Metode evaluasi program secara keseluruhan mencakup analisis data akademik dan laporan evaluasi berkala, penilaian kualitatif lewat observasi kelas dan umpan balik dari berbagai pemangku kepentingan, penilaian kinerja program yang meninjau struktur kurikulum dan dukungan sumber daya, hingga audit independen untuk penilaian objektif. Hasil evaluasi ini kemudian ditindaklanjuti lewat rencana perbaikan dengan langkah spesifik dan tenggat waktu, serta dievaluasi ulang secara periodik agar program terus berkembang sesuai kebutuhan siswa.</p>

  <h4>C. Pengembangan Program</h4>
  <p>Pengembangan program bilingual adalah proses berkelanjutan agar program tetap relevan dan efektif. Ini dimulai dari evaluasi tahunan menyeluruh dan pengumpulan umpan balik rutin dari seluruh pemangku kepentingan, yang kemudian menjadi dasar revisi kurikulum dan pembaruan metode pengajaran mengikuti tren dan inovasi terbaru. Peningkatan kualitas pengajaran didukung program pengembangan profesional berkelanjutan bagi guru serta mentoring dan coaching yang membantu mereka menerapkan hasil pelatihan di kelas.</p>
  <p>Pengembangan juga mencakup penguatan infrastruktur dan sumber daya (fasilitas, buku teks, teknologi), perluasan kegiatan ekstrakurikuler dan program khusus yang menyoroti keberagaman bahasa-budaya, serta kemitraan dan kolaborasi dengan sekolah bilingual lain maupun organisasi pendidikan untuk bertukar pengalaman dan memastikan standar internasional terpenuhi. Terakhir, strategi komunikasi yang baik dengan orang tua serta pemasaran program yang tepat membantu meningkatkan reputasi sekolah, sementara penetapan tujuan tahunan yang spesifik dan perencanaan jangka panjang memastikan pengembangan program berjalan terarah, bukan sekadar reaktif terhadap masalah yang muncul.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari sistem evaluasi siswa, penilaian keberhasilan program, dan strategi pengembangan pada bab ini, indikator mana yang paling jarang diukur secara rutin di sekolah Anda — dan bagaimana cara sederhana untuk mulai mengukurnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, apa perbedaan antara penilaian formatif dan penilaian sumatif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penilaian formatif dilakukan rutin (kuis/tes kecil) untuk memantau kemajuan berkelanjutan, sedangkan penilaian sumatif adalah evaluasi menyeluruh di akhir periode seperti ujian akhir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keduanya adalah istilah yang sama dan bisa dipakai bergantian tanpa perbedaan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian formatif hanya untuk guru, sedangkan sumatif hanya untuk kepala sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menilai keberhasilan program bilingualnya hanya dari nilai ujian akademik siswa, tanpa memperhatikan kepuasan orang tua, kualitas pengajaran guru, atau sejauh mana nilai-nilai Islam benar-benar terintegrasi. Berdasarkan Bab 7, apa kelemahan dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penilaian keberhasilan program seharusnya menyeluruh, mencakup pencapaian akademik, kepuasan siswa-orang tua, kualitas pengajaran, dan integrasi nilai Islam — bukan hanya satu indikator saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kelemahan, karena nilai ujian akademik adalah satu-satunya indikator yang relevan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya berhenti menilai ujian akademik sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Setelah evaluasi tahunan, sebuah sekolah menemukan bahwa metode pengajaran bilingualnya sudah tertinggal dan guru jarang mengikuti pelatihan pembaruan. Berdasarkan Bab 7, langkah pengembangan program yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan metode lama tetap dipakai karena perubahan dianggap terlalu merepotkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merevisi kurikulum dan metode pengajaran berdasarkan tren terbaru, serta menyediakan program pengembangan profesional berkelanjutan bagi guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh program bilingual karena dianggap sudah gagal total</button>
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
<h2 class="reveal">Pelibatan Orang Tua dan Komunitas</h2>
<p class="lede reveal">Program bilingual tidak bisa berhasil hanya dengan usaha sekolah semata. Bab ini membahas cara mengedukasi dan melibatkan orang tua, menggalang dukungan dari komunitas sekitar, serta membangun jaringan dengan sekolah bilingual lain untuk saling memperkuat.</p>

<div class="card reveal">
  <h4>A. Pendidikan dan Partisipasi Orang Tua</h4>
  <p>Mengedukasi orang tua tentang manfaat pendidikan bilingual sangat penting untuk memastikan dukungan yang efektif. Sosialisasi dapat dilakukan lewat seminar dan workshop berkala yang memaparkan manfaat kognitif, sosial, dan akademik dari kemampuan dua bahasa, serta sesi informasi di awal tahun ajaran tentang kurikulum dan harapan sekolah terhadap peran orang tua. Komunikasi yang terbuka dan teratur — lewat buletin, newsletter, dan grup komunikasi digital — menjaga orang tua tetap mendapat informasi terkini tentang perkembangan program dan kegiatan sekolah.</p>
  <p>Keterlibatan nyata orang tua dapat didorong lewat partisipasi dalam kegiatan sekolah seperti festival bahasa, serta panduan konkret tentang cara mendukung pembelajaran bilingual di rumah, misalnya membaca buku atau berbicara dalam bahasa target bersama anak. Menekankan peran aktif orang tua — termasuk melibatkan mereka dalam pengambilan keputusan lewat kelompok konsultatif — memberi rasa memiliki dan tanggung jawab terhadap keberhasilan program, dilengkapi penyediaan sumber daya edukasi dan dukungan bagi orang tua yang mungkin merasa cemas, serta pemantauan keterlibatan mereka secara berkala lewat survei dan penilaian periodik.</p>

  <h4>B. Kerjasama dengan Komunitas</h4>
  <p>Dukungan komunitas memperkuat dan mempromosikan program bilingual di luar lingkup sekolah. Langkah awalnya adalah membangun hubungan dengan tokoh masyarakat, organisasi lokal, dan bisnis lewat kemitraan yang saling menguntungkan, disertai komunikasi terbuka lewat buletin komunitas dan pertemuan rutin. Komunitas dapat dilibatkan langsung lewat acara sekolah seperti festival budaya dan seminar, serta kunjungan dan presentasi dari anggota komunitas yang berbagi pengetahuan relevan dengan program bilingual.</p>
  <p>Dukungan finansial dan sumber daya dapat digalang lewat kegiatan penggalangan dana serta donasi barang atau layanan dari komunitas, dilengkapi kampanye kesadaran dan forum diskusi terbuka untuk mengedukasi masyarakat tentang manfaat pendidikan bilingual. Menjalin hubungan dengan media lokal untuk meliput keberhasilan sekolah turut meningkatkan visibilitas program, sementara jaringan dengan sekolah lain dan organisasi pendidikan memberi akses ke sumber daya, pelatihan, dan wawasan tambahan — semua diperkuat dengan menerima dan menindaklanjuti umpan balik komunitas secara terbuka.</p>

  <h4>C. Membangun Jaringan dengan Sekolah Bilingual Lain</h4>
  <p>Kolaborasi antar sekolah bilingual memungkinkan pertukaran ide, pengalaman, dan praktik terbaik yang memperkaya program masing-masing. Langkah awalnya adalah mengidentifikasi sekolah bilingual lain yang relevan berdasarkan kesamaan tujuan dan visi, lalu menjalin kontak awal untuk memperkenalkan diri dan mengungkapkan minat berkolaborasi. Pertukaran pengalaman dapat difasilitasi lewat kunjungan bersama untuk mempelajari praktik sekolah mitra, serta pertemuan rutin baik fisik maupun virtual untuk mendiskusikan tantangan dan solusi bersama.</p>
  <p>Kolaborasi dapat diperdalam lewat penyusunan kurikulum bersama dan proyek pendidikan lintas sekolah seperti program pertukaran siswa, diperkaya dengan kegiatan bersama seperti festival, kompetisi, webinar, dan workshop lintas sekolah. Pembagian sumber daya lewat platform online dan dokumentasi praktik terbaik memastikan pengetahuan tersebar luas, sementara evaluasi berkala terhadap efektivitas kolaborasi membantu penyesuaian yang diperlukan. Membangun kemitraan jangka panjang, disertai perayaan atas pencapaian bersama, memastikan kolaborasi ini berkelanjutan dan terus memberi manfaat nyata bagi semua sekolah yang terlibat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bentuk pelibatan (orang tua, komunitas, jaringan antar sekolah) pada bab ini, bentuk mana yang paling belum dijalankan secara aktif oleh sekolah Anda — dan langkah pertama apa yang bisa diambil bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 8, apa salah satu cara konkret bagi orang tua untuk mendukung pembelajaran bilingual anak di rumah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membaca buku atau berbicara dalam bahasa target bersama anak di rumah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang anak menggunakan bahasa kedua sama sekali di luar sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan sepenuhnya urusan bahasa kedua kepada sekolah tanpa keterlibatan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah bilingual rutin mengirim newsletter kepada orang tua, tetapi tidak pernah melibatkan mereka dalam kegiatan sekolah maupun pengambilan keputusan terkait program. Berdasarkan Bab 8, apa yang masih kurang dari pendekatan pelibatan orang tua di sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Komunikasi satu arah lewat newsletter saja belum cukup — orang tua juga perlu dilibatkan aktif dalam kegiatan sekolah dan diberi rasa memiliki lewat keterlibatan dalam pengambilan keputusan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena newsletter sudah merupakan bentuk pelibatan yang paling lengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya berhenti mengirim newsletter karena dianggap tidak efektif</button>
  </div>
  <div class="quiz-q">
    <p>Dua sekolah Islam bilingual di kota yang sama ingin saling berkolaborasi, tetapi masing-masing khawatir dianggap sebagai kompetitor sehingga enggan berbagi materi ajar atau pengalaman. Berdasarkan Bab 8, sudut pandang apa yang sebaiknya dibangun agar kolaborasi tetap bisa berjalan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kedua sekolah sebaiknya tetap saling menutup diri karena persaingan dianggap lebih penting daripada kolaborasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun kemitraan yang saling menguntungkan, di mana pertukaran pengalaman dan praktik terbaik justru memperkaya program masing-masing sekolah tanpa mengurangi keunikan masing-masing</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Salah satu sekolah harus menutup program bilingualnya agar tidak ada persaingan sama sekali</button>
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
<h2 class="reveal">Kendali Mutu dalam Sekolah Bilingual</h2>
<p class="lede reveal">Agar kualitas pendidikan bilingual tetap terjaga secara konsisten, kendali mutu perlu diterapkan pada setiap lapisan sekolah — dari pimpinan tertinggi hingga orang tua siswa. Bab ini menguraikan sepuluh titik kendali mutu yang saling melengkapi dalam ekosistem sekolah Islam bilingual.</p>

<div class="card reveal">
  <h4>A. Kendali Mutu Pimpinan</h4>
  <p>Pimpinan sekolah — kepala sekolah dan pengelola yayasan — memegang peran kunci menetapkan visi dan standar mutu yang jelas, menyusun kebijakan dan perencanaan strategis, serta melakukan pengawasan dan evaluasi berkala terhadap pelaksanaan program bilingual. Mereka juga bertanggung jawab memberi dukungan dan pengembangan profesional bagi staf, menjaga komunikasi dan koordinasi antar-tim, menangani masalah dan konflik yang muncul secara cepat, memberikan penilaian dan umpan balik yang konstruktif, serta mendorong inovasi dan keterbukaan terhadap metode dan teknologi baru agar program tetap relevan.</p>

  <h4>B. Kendali Mutu Team Penggerak</h4>
  <p>Team penggerak — kelompok staf dengan tanggung jawab khusus mengelola program bilingual — perlu memiliki tugas yang jelas dan terkoordinasi, melakukan pengawasan dan evaluasi rutin, serta mengatur pelatihan dan dukungan berkelanjutan bagi guru dan staf. Mereka juga menyusun dan menerapkan kebijakan mutu, mengelola sumber daya dan anggaran secara efektif, menjaga komunikasi dan kolaborasi dengan semua pihak, menangani masalah yang muncul, mengumpulkan penilaian dan umpan balik, mendorong inovasi berkelanjutan, serta mendokumentasikan dan melaporkan kemajuan program secara berkala kepada pimpinan.</p>

  <h4>C. Kendali Mutu Native (Lokal)</h4>
  <p>Pengajar native atau penutur asli bahasa target berperan penting membangun otentisitas dan mutu pengajaran bahasa. Kendali mutunya mencakup verifikasi kualifikasi pendidikan dan kemampuan berbahasa yang tinggi, pelatihan khusus untuk memahami kurikulum dan metodologi sekolah, pengembangan profesional berkelanjutan, evaluasi rutin lewat observasi kelas dan penilaian kompetensi bahasa berkala, serta dukungan dan bimbingan dari tim penggerak maupun mentor berpengalaman agar mereka dapat beradaptasi dan terus berkembang dalam sistem pengajaran bilingual sekolah.</p>

  <h4>D. Kendali Mutu Wali Kelas</h4>
  <p>Wali kelas bertanggung jawab atas pengelolaan kelas sehari-hari sekaligus memastikan kualitas pembelajaran bilingual sesuai standar. Ini mencakup perencanaan dan pengorganisasian pembelajaran yang terstruktur dalam dua bahasa, pengawasan dan evaluasi rutin terhadap kemajuan siswa, dukungan berupa bimbingan dan motivasi bagi siswa yang mengalami kesulitan, serta komunikasi rutin dengan orang tua lewat pertemuan dan laporan berkala tentang perkembangan anak mereka dalam program bilingual.</p>

  <h4>E. Kendali Mutu Guru Bilingual</h4>
  <p>Guru bilingual perlu dijaga mutunya lewat kualifikasi pendidikan dan sertifikasi bahasa yang memadai, proses seleksi dan rekrutmen yang ketat mencakup tes bahasa dan simulasi mengajar, serta pelatihan awal dan berkelanjutan mencakup teknik pengajaran bilingual, manajemen kelas, dan penggunaan materi ajar dalam dua bahasa. Evaluasi kinerja rutin memastikan mereka tetap konsisten menerapkan standar pengajaran bilingual yang ditetapkan sekolah dari waktu ke waktu.</p>

  <h4>F. Kendali Mutu Guru Non Bilingual</h4>
  <p>Guru yang tidak mengajar dalam dua bahasa tetap perlu dijaga mutunya agar mendukung ekosistem bilingual secara keseluruhan. Ini mencakup kualifikasi pendidikan yang sesuai bidang ajarnya, pelatihan tentang program bilingual agar mereka memahami perannya dalam mendukung tujuan sekolah, kemampuan mengintegrasikan nilai dan prinsip bilingual dalam interaksi sehari-hari dengan siswa meski tidak mengajar dua bahasa, serta dukungan dan kolaborasi aktif dengan guru bilingual dalam merencanakan kegiatan lintas mata pelajaran.</p>

  <h4>G. Kendali Mutu Duta Bilingual</h4>
  <p>Duta bilingual — siswa yang ditunjuk mempromosikan penggunaan bahasa kedua — perlu diseleksi berdasarkan kemampuan bahasa yang baik, keterampilan kepemimpinan, dan komitmen tinggi terhadap program. Mereka kemudian diberi pelatihan bahasa dan kepemimpinan tambahan serta pemahaman mendalam tentang tujuan program bilingual, agar mampu menjalankan tugas mempromosikan bahasa, membimbing siswa lain, berpartisipasi dalam kegiatan sekolah, dan berkolaborasi dengan guru secara efektif.</p>

  <h4>H. Kendali Mutu Siswa</h4>
  <p>Kendali mutu siswa memastikan setiap siswa mencapai standar akademik dan bahasa yang diharapkan, lewat penilaian awal untuk menentukan tingkat kemampuan bahasa saat masuk sekolah, tes berkala untuk menilai kemajuan, penilaian akademik yang mencakup seluruh kurikulum terintegrasi, pengukuran kemajuan individu lewat laporan dan pencatatan data rutin, serta program dukungan dan intervensi bagi siswa yang mengalami kesulitan dalam bahasa atau mata pelajaran tertentu.</p>

  <h4>I. Kendali Mutu Bagian Umum</h4>
  <p>Bagian umum sekolah mencakup pengelolaan seluruh aspek operasional yang mendukung kualitas lingkungan belajar. Ini meliputi standar fasilitas fisik yang aman dan terawat serta mudah diakses semua pihak, proses administrasi yang efisien dan transparan mencakup pendaftaran, pengelolaan data, dan dokumentasi yang rapi, komunikasi internal yang jelas antar-bagian sekolah, serta budaya sekolah yang positif, inklusif, dan menghargai keragaman sebagai fondasi lingkungan belajar bilingual yang sehat.</p>

  <h4>J. Kendali Mutu Orang Tua</h4>
  <p>Kendali mutu keterlibatan orang tua dijaga lewat komunikasi rutin melalui berbagai saluran, edukasi tentang program bilingual lewat sosialisasi dan pelatihan, sistem penilaian dan umpan balik dari orang tua yang digunakan untuk evaluasi sekolah, penyediaan dukungan dan sumber daya bagi orang tua, transparansi dan akuntabilitas lewat laporan kemajuan berkala, kolaborasi dalam pengembangan program, penyelesaian masalah lewat saluran keluhan yang jelas, serta komitmen terhadap peningkatan kualitas berkelanjutan berdasarkan umpan balik yang mereka berikan dari waktu ke waktu.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari sepuluh titik kendali mutu (pimpinan hingga orang tua) pada bab ini, titik mana yang menurut Anda paling lemah pengawasannya di sekolah Anda saat ini — dan siapa yang perlu diajak berkolaborasi untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 9, mengapa guru non-bilingual tetap perlu masuk dalam sistem kendali mutu sekolah bilingual?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena mereka tetap perlu memahami dan mendukung tujuan program bilingual, serta mengintegrasikan nilai bilingual dalam interaksi sehari-hari meski tidak mengajar dua bahasa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena guru non-bilingual sebenarnya tidak berkaitan sama sekali dengan program bilingual dan bisa diabaikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena mereka wajib beralih menjadi guru bilingual penuh dalam waktu satu semester</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah bilingual sangat ketat mengevaluasi kinerja guru bilingual dan native, tetapi sama sekali tidak memiliki sistem umpan balik atau saluran keluhan bagi orang tua siswa. Berdasarkan Bab 9, apa kelemahan dari sistem kendali mutu sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kendali mutu yang komprehensif juga harus mencakup keterlibatan orang tua — lewat umpan balik, transparansi, dan saluran keluhan — bukan hanya berfokus pada guru dan pengajar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kelemahan, karena kendali mutu orang tua dianggap tidak relevan dengan kualitas pendidikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya berhenti mengevaluasi guru bilingual dan native sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Duta bilingual di sebuah sekolah dipilih hanya berdasarkan nilai akademik tertinggi tanpa mempertimbangkan keterampilan kepemimpinan atau komitmen mereka terhadap program bilingual, sehingga banyak duta yang pasif dan jarang memotivasi teman sebayanya. Berdasarkan Bab 9, apa yang perlu diperbaiki dalam proses seleksinya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena nilai akademik tertinggi sudah cukup menjamin keberhasilan peran duta bilingual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Seleksi duta bilingual perlu juga mempertimbangkan kemampuan bahasa, keterampilan kepemimpinan, dan komitmen terhadap program, bukan hanya nilai akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya menghapus peran duta bilingual sepenuhnya karena dianggap tidak penting</button>
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
<h2 class="reveal">Kesimpulan & Rekomendasi</h2>
<p class="lede reveal">Sebagai penutup, bab ini merangkum poin-poin utama dari sembilan bab sebelumnya, memberikan rekomendasi strategis bagi pengelola sekolah, dan menyampaikan harapan bagi perjalanan membangun sekolah Islam bilingual yang sukses dan unggul.</p>

<div class="card reveal">
  <h4>A. Ringkasan Poin-Poin Utama</h4>
  <p>Perjalanan membangun sekolah Islam bilingual dimulai dari memahami latar belakang, tujuan, dan sasaran pembaca panduan ini (Bab 1), lalu memahami konsep dasar pendidikan bilingual — definisi, manfaat, tantangan, dan tiga tingkatan sekolah bilingual (Bab 2). Perencanaan strategis kemudian menyusun visi-misi yang mengintegrasikan nilai Islam, melakukan riset kebutuhan, mengembangkan kurikulum seimbang, dan menyiapkan sumber daya manusia yang kompeten (Bab 3), sebelum masuk ke desain dan implementasi konkret program — struktur, bahasa pengantar, metode pengajaran, integrasi nilai Islam, dan elemen-elemen penggerak sekolah (Bab 4).</p>
  <p>Guru sebagai penentu keberhasilan program perlu direkrut, dilatih, dan didampingi secara sistematis (Bab 5), didukung pengelolaan kelas dan lingkungan belajar yang tepat, mulai dari manajemen kelas hingga tampilan dan budaya sekolah secara umum (Bab 6). Program yang sudah berjalan perlu terus dievaluasi dan dikembangkan agar tetap relevan (Bab 7), diperkuat lewat pelibatan aktif orang tua, komunitas, dan jaringan antar sekolah bilingual (Bab 8), serta dijaga mutunya secara menyeluruh lewat sepuluh titik kendali mutu dari pimpinan hingga orang tua (Bab 9). Seluruh rangkaian ini menegaskan bahwa keberhasilan sekolah Islam bilingual menuntut keterlibatan semua pihak — pimpinan, guru, orang tua, dan komunitas — bukan hasil kerja satu pihak saja.</p>

  <h4>B. Rekomendasi untuk Pengelola Sekolah</h4>
  <p>Bagi pengelola sekolah yang ingin memastikan keberlanjutan dan kesuksesan program bilingual, ada tujuh area rekomendasi strategis. Pertama, terapkan kurikulum yang fleksibel dan terus diperbarui sambil tetap mengintegrasikan nilai-nilai Islam di setiap mata pelajaran. Kedua, tingkatkan kualitas pengajaran lewat investasi pelatihan guru yang berkelanjutan dan sistem evaluasi guru yang adil dan transparan. Ketiga, kelola kelas secara efektif dengan teknik manajemen yang inovatif serta pemanfaatan media dan teknologi pendidikan yang relevan.</p>
  <p>Keempat, libatkan orang tua dan komunitas lewat edukasi berkelanjutan dan kemitraan lokal yang memperluas dukungan dan sumber daya. Kelima, terapkan kendali mutu yang berkelanjutan dengan prosedur yang jelas serta tindak lanjut rutin atas hasil evaluasi. Keenam, susun perencanaan jangka panjang yang mencakup pengembangan kurikulum, fasilitas, dan anggaran, sambil tetap responsif terhadap perubahan kebutuhan dan tren pendidikan bilingual. Ketujuh, bangun komunikasi yang terbuka antara pimpinan, guru, orang tua, dan siswa, karena komunikasi yang baik membantu mengatasi masalah secara cepat dan memastikan semua pihak terlibat dalam pengambilan keputusan.</p>

  <h4>C. Penutup</h4>
  <p>Mengembangkan sekolah Islam bilingual adalah perjalanan yang penuh tantangan, namun menawarkan banyak peluang untuk memberikan pendidikan berkualitas dan relevan bagi siswa. Ada harapan besar agar pengelola sekolah terus berinovasi dan berani mencoba pendekatan baru — termasuk teknologi terbaru dan metode pengajaran kreatif — sambil tetap berkomitmen menyediakan pendidikan yang berkualitas tinggi dalam dua bahasa dan sejalan dengan nilai-nilai Islam, sehingga menghasilkan siswa yang cerdas sekaligus berakhlak mulia.</p>
  <p>Kolaborasi dan kemitraan yang kuat dengan komunitas, orang tua, dan sekolah bilingual lain akan memperluas sumber daya dan peluang bagi siswa, sementara pendekatan yang solutif dan kreatif dalam menghadapi tantangan — disertai dukungan nyata bagi staf dan siswa — akan menjadikan sekolah sebagai lingkungan yang positif dan produktif. Dengan evaluasi dan perbaikan yang terus-menerus serta visi jangka panjang yang matang, pendidikan bilingual yang efektif tidak hanya mempersiapkan siswa untuk sukses di masa depan, tetapi juga membantu mereka menjadi individu yang beriman, cerdas, dan bertanggung jawab dalam masyarakat global. Selamat berjuang dalam perjalanan ini, dan semoga setiap langkah yang diambil membawa kesuksesan dan keberkahan bagi semua pihak yang terlibat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Setelah membaca seluruh buku ini, satu langkah paling prioritas apa yang ingin Anda mulai terapkan di sekolah Anda dalam tiga bulan ke depan untuk memperkuat program bilingual berbasis nilai-nilai Islam?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 10, apa saja tiga area utama yang direkomendasikan bagi pengelola sekolah agar program bilingual berkelanjutan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Antara lain kurikulum yang fleksibel dan terintegrasi nilai Islam, peningkatan kualitas pengajaran, dan pelibatan orang tua-komunitas secara aktif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya berfokus pada peningkatan biaya sekolah tanpa aspek lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya berfokus pada desain gedung sekolah semata</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan sudah menjalankan program bilingual selama tiga tahun dan merasa cukup puas, sehingga berhenti melakukan evaluasi tahunan maupun pembaruan kurikulum. Berdasarkan kesimpulan Bab 10, apa risiko dari sikap ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Program berisiko tertinggal dan kehilangan relevansi, karena keberhasilan jangka panjang menuntut evaluasi dan perbaikan yang terus-menerus, bukan berhenti setelah merasa puas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena program yang sudah berjalan tiga tahun otomatis akan selalu relevan tanpa perlu evaluasi lagi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal administrasi surat-menyurat, tidak berkaitan dengan kualitas pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah yang baru membaca buku ini bertanya, dari mana sebaiknya ia memulai jika sekolahnya belum memiliki program bilingual sama sekali. Berdasarkan keseluruhan alur buku ini (Bab 1-10), urutan langkah paling logis adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung merekrut guru bilingual sebanyak-banyaknya tanpa menyusun visi-misi maupun kurikulum terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memahami konsep dasar bilingual, menyusun perencanaan strategis (visi-misi, riset, kurikulum, SDM), mendesain dan mengimplementasikan program, lalu menjaga kualitasnya lewat rekrutmen guru, pengelolaan kelas, evaluasi, pelibatan komunitas, dan kendali mutu berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu sertifikasi internasional lebih dulu sebelum memulai langkah apa pun, termasuk sebelum menyusun visi-misi</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab10" onclick="markDone('bab10')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab10">✓ Bab 10 selesai dibaca</p>
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
    <p>Berdasarkan Bab 1, mengapa penguasaan bahasa Arab dianggap sangat penting bagi siswa sekolah Islam bilingual?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena Al-Qur'an diturunkan dalam bahasa Arab, sehingga siswa dapat memahami dan menghayati ajaran Islam langsung dari sumbernya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena bahasa Arab adalah satu-satunya bahasa yang diakui di institusi pendidikan tinggi dunia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena bahasa Arab lebih mudah dipelajari dibandingkan Bahasa Inggris</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menggunakan bahasa Inggris dalam komunikasi sehari-hari secara situasional, tetapi belum memiliki kurikulum bilingual formal maupun sertifikasi resmi. Berdasarkan Bab 2, sekolah ini termasuk kategori...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Certified</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Specified</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Satisfied</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah kesulitan menyediakan buku teks dan materi ajar dalam dua bahasa untuk mendukung program bilingualnya. Berdasarkan tantangan pada Bab 2, cara paling tepat mengatasi hal ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengembangkan materi ajar sendiri, memanfaatkan sumber daya digital, atau berkolaborasi dengan sekolah lain yang sudah berpengalaman</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan program bilingual karena keterbatasan materi ajar dianggap tidak bisa diatasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan siswa belajar tanpa materi ajar sama sekali dalam salah satu bahasa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin membuka program bilingual baru langsung tanpa riset kebutuhan pasar maupun profil calon siswa. Berdasarkan Bab 3, risiko utama dari pendekatan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program berisiko tidak sesuai kebutuhan nyata pasar dan siswa karena keputusan diambil tanpa data pendukung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko sama sekali, karena riset kebutuhan hanyalah formalitas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya hanya soal desain seragam sekolah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, apa perbedaan mendasar antara visi dan misi sekolah?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi adalah gambaran masa depan ideal, sedangkan misi adalah pernyataan operasional tentang cara mencapainya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi dan misi adalah istilah yang identik dan bisa dipertukarkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi hanya berlaku untuk guru, misi hanya berlaku untuk siswa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin mengintegrasikan pelajaran sains dengan nilai-nilai Islam tanpa mengubahnya menjadi pelajaran agama. Berdasarkan Bab 4, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan integrasi tematik, misalnya mengaitkan topik sains dengan penciptaan Allah, sambil tetap mengajarkan konsep ilmiah secara utuh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh pelajaran sains dengan hafalan ayat Al-Qur'an</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus pelajaran sains karena dianggap tidak relevan dengan nilai Islam</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Metode pengajaran bilingual yang mengintegrasikan pengajaran bahasa dengan konten akademik secara bersamaan, misalnya belajar geografi dalam bahasa target, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metode Imersi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Content and Language Integrated Learning (CLIL)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metode Terjemahan Langsung</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru direkrut hanya berdasarkan nilai TOEFL tinggi, tanpa pelatihan metode pengajaran bilingual maupun pendampingan mentor. Berdasarkan Bab 5, apa risiko dari situasi ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemampuan bahasa saja tidak cukup — tanpa pelatihan pedagogis dan pendampingan, guru berisiko kesulitan menerapkan metode pengajaran bilingual secara efektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena nilai TOEFL tinggi sudah menjamin keberhasilan mengajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya hanya soal gaji guru</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Menurut Bab 5, sistem pendampingan guru bilingual biasanya melibatkan tiga unsur utama, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ujian nasional, sertifikasi internasional, dan wawancara kerja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kenaikan gaji, tunjangan transportasi, dan cuti tahunan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendampingan oleh mentor, observasi kelas, dan sesi refleksi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah kelas bilingual memiliki siswa dengan kemampuan bahasa kedua yang sangat beragam, namun guru mengajar dengan satu metode yang sama untuk semua siswa. Berdasarkan Bab 6, apa yang seharusnya diterapkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendekatan diferensiasi, menyesuaikan materi dan dukungan sesuai tingkat kemampuan bahasa masing-masing siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap menggunakan satu metode karena diferensiasi dianggap tidak perlu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengeluarkan siswa yang belum fasih dari kelas bilingual</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah memasang banyak label dan poster dwibahasa, tetapi jarang mengadakan kegiatan praktik bahasa nyata atau melibatkan orang tua dalam komunikasi dwibahasa. Berdasarkan Bab 6, apa yang masih kurang?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang kurang, karena label dan poster sudah cukup</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah masih perlu memperkuat budaya dan atmosfer lewat kegiatan praktik nyata serta pelibatan orang tua dan komunitas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya melepas semua label karena tidak berguna</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, apa perbedaan penilaian formatif dan penilaian sumatif?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Formatif dilakukan rutin untuk memantau kemajuan berkelanjutan, sumatif adalah evaluasi menyeluruh di akhir periode</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keduanya adalah istilah yang sama persis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Formatif hanya untuk guru, sumatif hanya untuk kepala sekolah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menilai keberhasilan program bilingualnya hanya dari nilai ujian akademik, tanpa memperhatikan kepuasan orang tua atau integrasi nilai Islam. Berdasarkan Bab 7, apa kelemahan pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian keberhasilan seharusnya menyeluruh, mencakup akademik, kepuasan siswa-orang tua, kualitas pengajaran, dan integrasi nilai Islam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada kelemahan, karena nilai ujian adalah satu-satunya indikator relevan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah seharusnya berhenti menilai ujian akademik sama sekali</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 8, apa salah satu cara konkret orang tua mendukung pembelajaran bilingual anak di rumah?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membaca buku atau berbicara dalam bahasa target bersama anak di rumah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melarang anak menggunakan bahasa kedua sama sekali di luar sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyerahkan sepenuhnya urusan bahasa kepada sekolah tanpa keterlibatan apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Dua sekolah bilingual di kota yang sama enggan berbagi materi ajar karena khawatir dianggap kompetitor. Berdasarkan Bab 8, sudut pandang apa yang sebaiknya dibangun?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap saling menutup diri karena persaingan lebih penting daripada kolaborasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun kemitraan saling menguntungkan, di mana pertukaran pengalaman justru memperkaya program masing-masing sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Salah satu sekolah harus menutup program bilingualnya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 9, mengapa guru non-bilingual tetap perlu masuk dalam sistem kendali mutu sekolah bilingual?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena mereka tetap perlu memahami dan mendukung tujuan program bilingual serta mengintegrasikan nilainya dalam interaksi sehari-hari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena guru non-bilingual sebenarnya tidak berkaitan sama sekali dengan program bilingual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena mereka wajib beralih menjadi guru bilingual penuh dalam satu semester</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah sangat ketat mengevaluasi guru bilingual dan native, tetapi tidak memiliki sistem umpan balik atau saluran keluhan bagi orang tua. Berdasarkan Bab 9, apa kelemahan sistem kendali mutu ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada kelemahan, karena kendali mutu orang tua dianggap tidak relevan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya berhenti mengevaluasi guru bilingual dan native</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kendali mutu yang komprehensif juga harus mencakup keterlibatan orang tua lewat umpan balik, transparansi, dan saluran keluhan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Duta bilingual di sebuah sekolah dipilih hanya berdasarkan nilai akademik tertinggi tanpa mempertimbangkan kepemimpinan atau komitmen mereka. Berdasarkan Bab 9, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki, karena nilai akademik sudah cukup menjamin keberhasilan peran duta bilingual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Seleksi duta bilingual perlu juga mempertimbangkan kemampuan bahasa, kepemimpinan, dan komitmen terhadap program</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya menghapus peran duta bilingual sepenuhnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah yayasan sudah menjalankan program bilingual tiga tahun dan merasa puas sehingga berhenti melakukan evaluasi tahunan. Berdasarkan Bab 10, apa risiko dari sikap ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena program yang sudah berjalan tiga tahun otomatis akan selalu relevan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program berisiko tertinggal dan kehilangan relevansi, karena keberhasilan jangka panjang menuntut evaluasi dan perbaikan berkelanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya hanya soal administrasi surat-menyurat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang kepala sekolah baru bertanya dari mana ia sebaiknya memulai jika sekolahnya belum memiliki program bilingual sama sekali. Berdasarkan keseluruhan alur buku ini, urutan paling logis adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung merekrut guru bilingual sebanyak-banyaknya tanpa menyusun visi-misi maupun kurikulum</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memahami konsep dasar bilingual, menyusun perencanaan strategis, mendesain dan mengimplementasikan program, lalu menjaga mutunya lewat rekrutmen guru, pengelolaan kelas, evaluasi, pelibatan komunitas, dan kendali mutu berkelanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu sertifikasi internasional lebih dulu sebelum menyusun visi-misi</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
