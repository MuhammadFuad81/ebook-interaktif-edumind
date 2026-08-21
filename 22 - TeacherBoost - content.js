/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "TeacherBoost: Kompetensi, Kesehatan Mental,
   dan Kemandirian Finansial"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-teacherboost.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Dasar-Dasar Kompetensi Guru</h2>
<p class="lede reveal">Sebelum melangkah ke pendekatan-pendekatan baru dan pemanfaatan teknologi, penting bagi setiap guru untuk memahami dulu apa sebenarnya kompetensi itu, mengapa ia sangat menentukan keberhasilan siswa, serta bagaimana pola pikir, perangkat, dan keterampilan yang tepat dapat dibangun secara bertahap dan terukur.</p>

<div class="card reveal">
  <h4>A. Pentingnya Kompetensi Guru</h4>
  <p>Secara sederhana, kompetensi guru mencakup pengetahuan, keterampilan, dan sikap yang harus dimiliki seorang guru agar dapat mengajar secara efektif dan memberikan dampak positif bagi siswa. Kompetensi ini meliputi kemampuan memahami materi, mengelola kelas, berkomunikasi dengan siswa, serta menggunakan teknologi dan metode pengajaran yang relevan — bukan sekadar "bisa mengajar", melainkan menguasai pendekatan yang mendalam agar pembelajaran menjadi lebih bermakna bagi setiap siswa.</p>
  <p>Kompetensi guru sangat berpengaruh terhadap kemajuan pendidikan karena guru adalah sosok yang paling dekat dengan siswa dalam proses belajar. Saat seorang guru memiliki kompetensi yang baik, siswa akan lebih mudah memahami materi, merasa termotivasi, dan lebih antusias dalam belajar. Sebaliknya, guru yang kurang kompeten mungkin kesulitan mengelola kelas, memilih metode pembelajaran, atau memberikan penjelasan yang mudah dipahami, sehingga siswa bisa kebingungan, kehilangan minat, atau kurang berkembang secara akademis.</p>
  <p>Di abad ke-21, dunia pendidikan menghadapi berbagai tantangan baru seperti integrasi teknologi dalam pembelajaran, kebutuhan akan keterampilan berpikir kritis dan kreatif, serta pentingnya komunikasi yang efektif. Kompetensi abad ke-21 ini mencakup penguasaan teknologi (memanfaatkan aplikasi dan alat digital dalam mengajar), keterampilan berpikir tingkat tinggi (mendorong siswa berpikir kritis, kreatif, dan analitis), serta komunikasi dan kolaborasi (bekerja sama dengan kolega, siswa, dan orang tua untuk menciptakan lingkungan belajar yang mendukung). Kompetensi yang baik bukan hanya modal bagi guru, tetapi juga bentuk kontribusi nyata dalam mendidik generasi penerus yang siap menghadapi dunia dengan percaya diri.</p>

  <h4>B. Kompetensi Guru: Definisi dan Aspek Utama</h4>
  <p>Setiap guru yang ingin berhasil mendidik dan menginspirasi siswanya perlu memahami dan mengembangkan empat aspek penting dalam profesinya. Pertama, <strong>keterampilan</strong> — kemampuan teknis dalam mengelola pembelajaran, mencakup penyusunan rencana pembelajaran yang efektif, pengaturan waktu dan materi, pemilihan metode yang sesuai, hingga penggunaan media pembelajaran seperti papan tulis interaktif dan aplikasi digital. Kedua, <strong>pengetahuan</strong> — penguasaan mendalam terhadap materi ajar dan kurikulum yang berlaku, disertai kebiasaan terus memperbarui pengetahuan seiring perkembangan ilmu dan teknologi agar materi yang disampaikan tetap segar dan relevan.</p>
  <p>Ketiga, <strong>sikap</strong> — etika profesional seperti menghargai perbedaan, berperilaku jujur, dan menjalankan tugas dengan tanggung jawab, disertai empati untuk memahami perasaan dan kebutuhan siswa, serta komitmen untuk terus mencari cara baru meningkatkan efektivitas pengajaran. Keempat, <strong>kompetensi abad ke-21</strong> — keterampilan untuk beradaptasi dengan perubahan teknologi dan tuntutan global, termasuk pembelajaran berbasis digital, kemampuan mencari dan mengkritisi informasi, serta keterampilan berpikir kritis, kreatif, komunikasi, dan kolaborasi yang membantu guru menyiapkan siswa menghadapi tantangan dunia nyata yang kompleks.</p>

  <h4>C. Mindset, Toolset, dan Skillset Guru</h4>
  <p>Untuk menjadi pendidik yang efektif, seorang guru membutuhkan tiga elemen kunci yang saling melengkapi. <strong>Mindset</strong> atau pola pikir adalah fondasi utama tindakan dan respons guru terhadap berbagai situasi, mencakup growth mindset (keyakinan bahwa kemampuan bisa terus berkembang lewat usaha dan pembelajaran berkelanjutan), mindset berbasis solusi (melihat masalah sebagai peluang menemukan solusi kreatif, bukan terjebak di dalamnya), dan mindset kolaboratif (membangun kerja sama yang baik dengan rekan sejawat, orang tua, maupun siswa).</p>
  <p><strong>Toolset</strong> mencakup perangkat dan sumber daya yang membantu guru menyampaikan materi secara lebih efektif, mulai dari penguasaan alat digital dasar (komputer, tablet, perangkat lunak pembelajaran daring seperti Google Classroom atau Zoom) hingga pemanfaatan sumber daya digital seperti e-book, video pembelajaran, dan Learning Management System (LMS) yang memperkaya pembelajaran di kelas. Sementara itu, <strong>skillset</strong> terbagi menjadi hard skills — penguasaan kurikulum dan materi ajar, penggunaan teknologi pendidikan secara efektif, dan manajemen kelas yang efektif — serta soft skills, meliputi komunikasi yang efektif, kreativitas dan inovasi dalam pembelajaran, hingga manajemen waktu dan pengelolaan stres. Ketiga elemen ini, bila dimiliki secara seimbang, membuat guru lebih siap menghadapi tantangan di kelas dan menjadi inspirasi bagi siswa.</p>

  <h4>D. Strategi untuk Meningkatkan Kompetensi Guru</h4>
  <p>Ada beberapa strategi konkret yang bisa diterapkan guru untuk terus meningkatkan kompetensinya. <strong>Pembelajaran berbasis proyek</strong> membantu guru mengembangkan keterampilan mengajar yang lebih aplikatif, karena siswa terlibat langsung dalam proyek nyata yang melatih guru dalam perencanaan pembelajaran yang fleksibel, kolaborasi dan komunikasi, serta pengembangan kreativitas. <strong>Penilaian formatif dan refleksi diri</strong> juga sangat penting — penilaian formatif dilakukan terus-menerus selama pembelajaran untuk memberi umpan balik cepat, sementara refleksi diri mengajak guru mengevaluasi secara jujur apa yang sudah berhasil dan apa yang perlu diperbaiki dari cara mengajarnya.</p>
  <p><strong>Pengembangan profesional berkelanjutan</strong> melengkapi kedua strategi di atas, mencakup keikutsertaan dalam pelatihan dan seminar untuk memahami tren terbaru dalam pendidikan, bergabung dalam komunitas guru untuk berdiskusi dan bertukar pengalaman dengan rekan sejawat, serta mempelajari sumber daya digital seperti kursus daring dan tutorial video secara fleksibel sesuai minat masing-masing. Pengembangan profesional yang konsisten memastikan guru tidak hanya mengajarkan materi yang relevan, tetapi juga menjadi contoh teladan pembelajaran seumur hidup bagi siswanya.</p>

  <h4>E. Target dan Waktu Pencapaian</h4>
  <p>Peningkatan kompetensi bukanlah hal instan, melainkan proses berkelanjutan yang perlu direncanakan dengan target jelas dan waktu yang realistis. Tiga aspek utama yang perlu ditetapkan targetnya adalah penguasaan kurikulum (mengkaji silabus secara menyeluruh dan menyusun rencana pembelajaran yang sesuai), komunikasi (menggunakan teknik komunikasi efektif seperti pertanyaan terbuka dan diskusi, serta menjalin komunikasi rutin dengan orang tua), dan manajemen kelas (menerapkan aturan yang jelas dan konsisten, serta menciptakan kegiatan yang memotivasi siswa tetap fokus).</p>
  <p>Durasi 1-2 bulan adalah waktu yang realistis untuk berlatih dan menerapkan ketiga aspek ini secara konsisten: minggu 1-2 difokuskan pada pemahaman dan perencanaan kurikulum serta mulai menerapkan teknik komunikasi baru; minggu 3-4 mulai menerapkan manajemen kelas yang lebih terstruktur sambil mengevaluasi bagaimana komunikasi dan penguasaan kurikulum saling mendukung; dan minggu 5-8 digunakan untuk mengevaluasi penerapan ketiga aspek secara rutin lewat refleksi diri dan umpan balik dari siswa atau rekan sejawat. Durasi ini bukan batasan kaku — jika belum maksimal, guru bisa melanjutkan latihan sampai target benar-benar tercapai, karena peningkatan kompetensi adalah proses yang memerlukan waktu dan kesabaran.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari ketiga elemen mindset, toolset, dan skillset yang dibahas di bab ini, elemen mana yang menurut Anda paling perlu diperkuat pada diri Anda saat ini — dan langkah kecil apa yang bisa mulai Anda lakukan bulan ini untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa aspek utama kompetensi guru yang perlu dipahami dan dikuasai?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empat aspek: keterampilan, pengetahuan, sikap, dan kompetensi abad ke-21</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua aspek: mengajar dan menilai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Enam aspek yang seluruhnya berkaitan dengan teknologi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sangat menguasai materi ajar dan kurikulum, tetapi setiap kali menghadapi metode baru ia selalu enggan mencoba dan merasa caranya selama ini sudah paling benar. Berdasarkan konsep mindset pada bab ini, apa yang paling mungkin menjadi akar masalahnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut kekurangan pengetahuan tentang kurikulum sehingga perlu belajar ulang dari awal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru tersebut belum memiliki growth mindset, sehingga menutup diri terhadap peluang belajar dan berkembang meski pengetahuannya sudah kuat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut sebenarnya tidak membutuhkan toolset maupun skillset baru karena sudah kompeten</button>
  </div>
  <div class="quiz-q">
    <p>SD Nurul Hidayah ingin meningkatkan kompetensi para gurunya dalam waktu 1-2 bulan, namun kepala sekolah bingung harus mulai dari mana karena banyaknya aspek yang bisa dikembangkan. Berdasarkan bagian E bab ini, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh kurikulum sekolah terlebih dahulu sebelum memikirkan hal lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu pelatihan dari dinas pendidikan tanpa mengambil langkah internal apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menetapkan target bertahap pada tiga aspek utama — penguasaan kurikulum, komunikasi, dan manajemen kelas — dan menjalankannya mingguan selama 1-2 bulan dengan evaluasi rutin</button>
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
<h2 class="reveal">Meningkatkan Kompetensi Guru dengan Pendekatan Baru dan Teknologi</h2>
<p class="lede reveal">Setelah memahami dasar-dasar kompetensi guru pada Bab 1, kini saatnya melangkah lebih jauh: bagaimana pendekatan pembelajaran abad ke-21 dan pemanfaatan teknologi dapat menjadi alat nyata untuk membuat pengajaran lebih relevan, interaktif, dan efektif bagi siswa yang tumbuh di dunia yang serba digital.</p>

<div class="card reveal">
  <h4>A. Pendekatan Inovatif dalam Pengajaran</h4>
  <p>Pembelajaran abad ke-21 mengutamakan keterampilan berpikir kritis, kolaborasi, dan kreativitas — keterampilan yang berguna tidak hanya dalam pembelajaran, tetapi juga dalam kehidupan sehari-hari dan dunia kerja di masa depan. Berpikir kritis dilatih dengan mendorong siswa mempertanyakan, menganalisis, dan mengevaluasi informasi lewat pertanyaan terbuka dan metode pemecahan masalah, bukan sekadar menerima informasi secara pasif. Kolaborasi dilatih lewat tugas atau proyek kelompok yang mengajarkan siswa bekerja sama, berbagi ide, dan menyelesaikan tugas secara tim. Kreativitas dilatih dengan memberi ruang bagi siswa berinovasi menggunakan berbagai media dan pendekatan berbeda dalam menyelesaikan tugas, disertai umpan balik positif yang mendorong eksplorasi ide.</p>
  <p>Di sisi lain, penerapan teknologi dalam pembelajaran membuat materi lebih menarik sekaligus membuka akses ke sumber belajar yang lebih beragam. Guru bisa menggunakan video untuk memperjelas penjelasan, simulasi untuk konsep yang sulit dipahami, permainan edukatif untuk meningkatkan keterlibatan siswa, serta platform pembelajaran daring seperti Google Classroom, Edmodo, atau Moodle untuk mengelola materi dan tugas secara lebih mudah. Teknologi juga memungkinkan interaktivitas yang lebih tinggi, misalnya lewat forum diskusi daring atau aplikasi kuis interaktif seperti Kahoot dan Quizizz yang membuat siswa bisa belajar secara mandiri sekaligus tetap terlibat aktif di dalam maupun di luar kelas.</p>

  <h4>B. Mindset Berbasis Teknologi</h4>
  <p>Memiliki kemampuan teknis saja tidak cukup di era digital ini — guru juga perlu mengembangkan mindset berbasis teknologi yang membuat mereka terbuka, proaktif, dan fleksibel dalam mengadopsi cara-cara baru untuk mendukung pengajaran. Mengadopsi teknologi secara proaktif berarti guru tidak menunggu dipaksa menggunakan teknologi, melainkan secara aktif mengeksplorasi dan mencoba platform baru, mengikuti pelatihan atau webinar, serta berdiskusi dengan rekan sejawat tentang teknologi yang sudah dicoba. Sikap proaktif ini sekaligus memberi contoh kepada siswa tentang pentingnya keterbukaan terhadap perubahan.</p>
  <p>Aspek kedua dari mindset berbasis teknologi adalah menggunakan data untuk pengajaran yang lebih efektif. Data dari hasil kuis, ujian, atau keterlibatan siswa di platform pembelajaran dapat menunjukkan pola pemahaman, kecepatan belajar, hingga area yang membutuhkan perhatian lebih. Dengan menganalisis hasil belajar, memanfaatkan fitur analisis pada platform pembelajaran, serta mengajak siswa memberi umpan balik, guru dapat menyesuaikan metode pengajaran secara lebih personal dan tepat sasaran — membuat siswa merasa diperhatikan secara individual, yang pada akhirnya meningkatkan motivasi belajar mereka.</p>

  <h4>C. Keterampilan Abad Ke-21 yang Harus Dimiliki Guru</h4>
  <p>Keterampilan abad ke-21 bagi guru terbagi menjadi hard skills dan soft skills. Hard skills mencakup penguasaan platform pembelajaran daring (Google Classroom, Edmodo, Moodle) untuk menyusun materi dan mengelola komunikasi dengan siswa dan orang tua secara efektif; kemampuan analisis data pembelajaran untuk mengevaluasi kinerja siswa secara lebih objektif, misalnya lewat Excel atau Google Sheets; serta pengenalan pemrograman dasar (melalui platform seperti Code.org atau Scratch) yang bisa menjadi nilai tambah, terutama di mata pelajaran yang berkaitan dengan teknologi dan logika komputasi.</p>
  <p>Soft skills yang tak kalah penting meliputi keterampilan berpikir kritis untuk menganalisis situasi pembelajaran dan menemukan solusi yang efektif; kemampuan kolaborasi dan kepemimpinan dalam bekerja dengan rekan sejawat, siswa, dan masyarakat, yang menuntut kemampuan mendengarkan dan menghargai pendapat; serta kemampuan adaptasi yang tinggi terhadap perubahan dalam dunia pendidikan dan teknologi, yang bisa dilatih lewat keterbukaan terhadap pengetahuan baru melalui pelatihan, seminar, atau literatur yang relevan.</p>

  <h4>D. Menggunakan Teknologi dan Inovasi untuk Pembelajaran yang Lebih Efektif</h4>
  <p>Beberapa pendekatan inovatif dapat membantu menciptakan pengalaman belajar yang lebih dinamis dan sesuai kebutuhan siswa. <strong>Pembelajaran blended</strong> menggabungkan interaksi tatap muka di kelas dengan sesi daring untuk tugas atau materi tambahan, memberi fleksibilitas bagi siswa mengatur waktu dan kecepatan belajarnya sendiri. <strong>Pembelajaran berbasis game dan gamifikasi</strong> menambah minat siswa lewat elemen poin, lencana, atau tingkatan, terbukti efektif mendorong motivasi intrinsik dan membuat pembelajaran lebih menyenangkan.</p>
  <p><strong>Flipped classroom</strong> atau kelas terbalik mengubah cara siswa mempersiapkan materi — siswa mempelajari materi dasar di rumah lewat video sebelum masuk kelas, sehingga waktu di kelas bisa digunakan untuk diskusi mendalam dan bimbingan langsung dari guru. Sementara itu, <strong>pemanfaatan Artificial Intelligence (AI)</strong> memungkinkan pembelajaran yang lebih personal, misalnya lewat pemantauan kemajuan siswa secara otomatis, pemberian umpan balik instan, hingga rekomendasi latihan tambahan bagi siswa yang membutuhkan, sehingga guru bisa lebih fokus memberi perhatian khusus kepada siswa yang benar-benar memerlukannya.</p>

  <h4>E. Target dan Waktu Pencapaian</h4>
  <p>Target yang direkomendasikan pada bab ini adalah menerapkan 2-3 pendekatan teknologi atau inovasi baru dalam pengajaran — bisa berupa pembelajaran blended, flipped classroom, atau penggunaan AI sederhana untuk memantau kemajuan belajar siswa. Memfokuskan diri pada beberapa pendekatan saja memungkinkan guru mendalami masing-masing tanpa merasa kewalahan.</p>
  <p>Durasi 2-3 bulan disarankan untuk eksplorasi dan penerapan bertahap: tahap eksplorasi untuk mengenal teknologi dan mencari referensi atau pelatihan singkat, tahap percobaan untuk mencoba metode tersebut secara terbatas pada beberapa kelas, dan tahap evaluasi serta penyesuaian untuk menilai efektivitasnya berdasarkan hasil belajar dan tingkat keterlibatan siswa. Melibatkan siswa dalam proses adaptasi ini, misalnya dengan meminta masukan tentang metode yang mereka sukai, akan membuat penerapan teknologi baru terasa lebih ringan dan tidak membebani.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat pendekatan inovatif (blended learning, gamifikasi, flipped classroom, dan AI) yang dibahas di bab ini, pendekatan mana yang paling realistis untuk mulai Anda coba di kelas Anda dalam 2-3 bulan ke depan — dan apa langkah pertama yang bisa Anda ambil minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, apa dua aspek utama dalam mengembangkan mindset berbasis teknologi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengadopsi teknologi secara proaktif dan menggunakan data untuk pengajaran yang lebih efektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membeli perangkat termahal dan menghafal seluruh fitur aplikasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari teknologi baru sampai benar-benar wajib digunakan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menggunakan aplikasi kuis interaktif secara rutin, namun tidak pernah melihat atau menganalisis hasil skor siswa untuk menyesuaikan pengajarannya. Berdasarkan bagian B bab ini, apa yang terlewat dari praktik guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang terlewat, karena sekadar menggunakan aplikasi kuis sudah cukup untuk dianggap berbasis teknologi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru tersebut belum memanfaatkan data hasil kuis untuk memahami pola pemahaman siswa dan menyesuaikan metode pengajaran secara lebih personal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut seharusnya berhenti menggunakan aplikasi kuis karena dianggap tidak bermanfaat</button>
  </div>
  <div class="quiz-q">
    <p>SMP Cahaya Bangsa ingin mulai menerapkan inovasi teknologi, tetapi guru-gurunya khawatir kewalahan jika harus mengubah seluruh metode mengajar sekaligus. Berdasarkan bagian E bab ini, saran paling tepat untuk sekolah ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menerapkan seluruh pendekatan (blended, gamifikasi, flipped classroom, AI) secara bersamaan agar hasilnya lebih cepat terlihat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memilih 2-3 pendekatan saja dan menerapkannya secara bertahap selama 2-3 bulan, mulai dari eksplorasi, percobaan terbatas, hingga evaluasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh rencana inovasi teknologi sampai semua guru merasa sangat siap</button>
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
<h2 class="reveal">Kesehatan Mental dan Kesejahteraan Guru: Teori dan Aplikasi Praktis</h2>
<p class="lede reveal">Profesi guru menuntut perhatian dan energi besar, baik secara fisik maupun mental. Bab ini membahas mengapa kesehatan mental begitu penting bagi seorang pendidik, faktor-faktor yang memengaruhinya, serta strategi praktis — termasuk pendekatan spiritual — untuk menjaga kesejahteraan guru secara utuh dan berkelanjutan.</p>

<div class="card reveal">
  <h4>A. Pentingnya Kesehatan Mental bagi Guru</h4>
  <p>Kesehatan mental merujuk pada kondisi emosional, psikologis, dan sosial yang stabil dan sehat. Bagi guru, kesehatan mental berperan besar dalam mengelola emosi, menjaga fokus, dan menghadapi tantangan interaksi sehari-hari dengan siswa, kolega, maupun orang tua. Guru yang memiliki kesejahteraan mental cenderung lebih sabar, kreatif, dan produktif dalam mengajar, serta lebih baik dalam memahami dan merespons kebutuhan siswa sehingga tercipta lingkungan belajar yang nyaman.</p>
  <p>Beberapa tantangan mental yang sering dihadapi guru meliputi stres akibat tugas administratif dan ekspektasi yang bertumpuk, burnout atau kelelahan fisik-emosional-mental akibat tekanan berlebihan yang terus-menerus, serta kecemasan yang bisa muncul dari kekhawatiran terhadap hasil akademik siswa atau penilaian dari pihak sekolah. Jika dibiarkan, masalah kesehatan mental ini bisa menurunkan kualitas pengajaran, mengurangi kesabaran dan empati dalam berinteraksi dengan siswa, menciptakan ketegangan dengan kolega, hingga merembet ke kehidupan pribadi guru itu sendiri.</p>

  <h4>B. Faktor-Faktor yang Mempengaruhi Kesehatan Mental Guru</h4>
  <p>Beban kerja yang tinggi — mulai dari persiapan materi, pelaksanaan pembelajaran, evaluasi, hingga tugas administratif dan kegiatan sekolah — ditambah tekanan dari orang tua, masyarakat, dan manajemen sekolah, dapat membuat guru merasa kewalahan dan kelelahan. Kondisi lingkungan kerja juga berperan besar: hubungan yang baik dengan rekan kerja memberi dukungan emosional, sementara hubungan yang kurang harmonis atau kurangnya dukungan dari manajemen dapat menambah beban pikiran dan menimbulkan stres berkepanjangan.</p>
  <p>Faktor eksternal seperti masalah sosial dan keluarga — persoalan keuangan, kesehatan, atau konflik pribadi — juga bisa terbawa ke tempat kerja dan mengganggu konsentrasi mengajar. Ditambah lagi, perubahan dalam sistem pendidikan, seperti adaptasi terhadap kurikulum baru atau teknologi pendidikan yang belum familiar, bisa menjadi sumber stres tersendiri, terutama jika pelatihan dan dukungan yang diberikan belum memadai.</p>

  <h4>C. Strategi Praktis untuk Menjaga Kesehatan Mental Guru</h4>
  <p>Ada lima strategi praktis yang bisa diterapkan sehari-hari. Manajemen stres dilakukan lewat teknik pernapasan dalam, mindfulness (membawa perhatian penuh pada momen saat ini), dan relaksasi seperti mendengarkan musik atau peregangan sederhana. Meluangkan waktu untuk diri sendiri — rehat singkat di sela mengajar serta hobi yang disukai — membantu mengisi ulang energi. Mengelola beban kerja dilakukan dengan mengatur prioritas harian dan tidak ragu mendelegasikan tugas yang bisa diserahkan kepada asisten atau kolega.</p>
  <p>Membangun dukungan sosial lewat rekan kerja, komunitas guru, dan kegiatan sosial di luar pekerjaan turut mengurangi rasa kesepian dan memperkuat kesejahteraan. Terakhir, pendekatan spiritual — dzikir, salat, dan doa — memberikan ketenangan batin yang mendalam; dzikir membantu menenangkan hati saat cemas, salat menjadi kesempatan beristirahat dari rutinitas sekaligus mengisi ulang energi batin, dan doa memberi rasa harapan serta kepasrahan yang membuat hati lebih lapang dalam menjalani tugas mengajar yang penuh tantangan.</p>

  <h4>D. Membangun Kesejahteraan Guru dalam Kehidupan Sehari-hari</h4>
  <p>Kesejahteraan guru tidak hanya ditentukan oleh seberapa baik ia mengajar, tetapi juga bagaimana ia merawat diri sendiri di luar jam kerja. Ini mencakup menjaga keseimbangan antara pekerjaan dan kehidupan pribadi, rutin berolahraga ringan seperti berjalan kaki untuk melepaskan hormon endorfin, menjaga pola makan bergizi dan tidur cukup 7-8 jam, serta mengelola emosi lewat mindfulness dan pernapasan dalam saat menghadapi tekanan.</p>
  <p>Istirahat mental — waktu di mana pikiran benar-benar bebas dari tugas sekolah — sama pentingnya untuk mencegah burnout, begitu pula pemberdayaan diri lewat pengembangan minat pribadi di luar pekerjaan mengajar. Penting juga dipahami bahwa kesejahteraan sejati tidak melulu soal materi atau finansial, melainkan tentang bagaimana seseorang menjaga keseimbangan hidup secara menyeluruh — fisik, mental, emosional, dan sosial — sehingga tetap merasa puas dan bahagia dengan apa yang dilakukan, berapa pun penghasilannya.</p>

  <h4>E. Menciptakan Lingkungan Kerja yang Mendukung Kesejahteraan Guru</h4>
  <p>Lingkungan kerja yang sehat dimulai dari budaya sekolah yang peduli terhadap kesehatan mental — suasana terbuka untuk berdiskusi tentang stres tanpa stigma, didukung sesi konsultasi dengan psikolog atau pelatihan manajemen stres. Fasilitas yang mendukung relaksasi dan refleksi spiritual juga sangat membantu, seperti sesi dzikir dan doa bersama, salat berjamaah, kajian agama, waktu membaca Al-Qur'an, hingga alat peraga visual berisi kata-kata bijak di ruang guru yang menumbuhkan semangat positif.</p>
  <p>Kebijakan sekolah turut berperan besar, misalnya memberikan cuti mental tanpa tekanan saat guru merasa kelelahan berlebihan, fleksibilitas waktu kerja seperti kesempatan bekerja dari rumah pada hari tertentu, serta pengurangan beban administratif lewat delegasi tugas sehingga guru bisa lebih fokus pada tugas utamanya, yaitu mengajar dengan kualitas terbaik.</p>

  <h4>F. Mengelola Hubungan dengan Siswa dan Kolega</h4>
  <p>Pendekatan empatik — memahami perasaan dan perspektif siswa maupun kolega, serta mendengarkan dengan penuh perhatian — menciptakan suasana yang lebih ramah dan mengurangi ketegangan yang mungkin timbul. Pengelolaan kelas yang efektif, lewat aturan yang jelas dan konsisten, pengaturan ruang kelas yang nyaman, serta teknik relaksasi singkat di kelas, juga membantu mengurangi stres baik bagi guru maupun siswa.</p>
  <p>Komunikasi yang efektif dengan siswa dibangun lewat umpan balik yang konstruktif dan jelas, berbicara dengan sabar dan empati saat siswa membawa masalah pribadi, serta mendorong partisipasi dan dialog terbuka agar siswa merasa memiliki suara dan lebih percaya pada gurunya sebagai pendidik.</p>

  <h4>G. Program Kesehatan Mental di Sekolah</h4>
  <p>Sekolah dapat mengimplementasikan program dukungan kesehatan mental bagi guru melalui penyediaan layanan konseling (tatap muka maupun daring), workshop dan pelatihan rutin tentang manajemen stres dan tanda-tanda kelelahan mental, serta pembentukan kelompok dukungan antar-guru untuk berbagi pengalaman dan solusi. Pengurus sekolah juga perlu dilatih untuk mengenali tanda-tanda stres berlebihan pada guru, menciptakan kebijakan yang mendukung kesehatan mental, dan membangun budaya sekolah yang positif.</p>
  <p>Selain itu, peningkatan kesadaran di antara seluruh staf pengajar — lewat sosialisasi rutin, penyediaan sumber daya dan informasi yang mudah diakses, serta penumbuhan empati antarstaf — memastikan bahwa kesehatan mental menjadi prioritas bersama, bukan hanya tanggung jawab individu guru.</p>

  <h4>H. Evaluasi dan Refleksi untuk Meningkatkan Kesejahteraan</h4>
  <p>Evaluasi kesejahteraan diri bisa dilakukan lewat survei diri sederhana ("Apakah saya merasa stres akhir-akhir ini?", "Apakah saya cukup tidur?") maupun refleksi pribadi rutin di akhir hari atau minggu. Evaluasi ini perlu diikuti perbaikan berkelanjutan — menerapkan teknik manajemen stres secara konsisten, menciptakan rutinitas sehat, dan terlibat dalam kegiatan sosial atau spiritual yang mengembalikan ketenangan.</p>
  <p>Membangun kebiasaan reflektif, seperti menulis jurnal kesejahteraan, bertanya pada diri sendiri secara berkala, dan mencari umpan balik dari rekan kerja atau siswa, membantu guru mengenali tanda-tanda stres atau burnout sejak dini sehingga langkah perbaikan bisa segera diambil sebelum masalah kesehatan mental berkembang lebih jauh.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kelima strategi praktis (manajemen stres, waktu untuk diri sendiri, mengelola beban kerja, dukungan sosial, dan pendekatan spiritual) yang dibahas di bagian C, strategi mana yang paling jarang Anda terapkan selama ini — dan langkah kecil apa yang bisa mulai Anda coba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, apa saja tiga tantangan mental yang sering dihadapi guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Stres, burnout, dan kecemasan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kelelahan fisik, kelaparan, dan kurang gaji</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kebosanan, kemalasan, dan kurang pelatihan teknologi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa sangat lelah secara emosional setiap pulang mengajar, namun tidak pernah meluangkan waktu untuk hobi, istirahat, atau kegiatan spiritual apa pun di luar jam kerja — ia merasa hal itu "membuang waktu". Berdasarkan bagian C dan D bab ini, apa yang paling mungkin terjadi jika kebiasaan ini terus berlanjut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak akan terjadi apa-apa, karena kesehatan mental hanya dipengaruhi oleh gaji dan fasilitas sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru tersebut berisiko mengalami burnout karena tidak memberi ruang bagi dirinya untuk mengisi ulang energi mental dan emosional secara rutin</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut justru akan menjadi lebih produktif karena seluruh waktunya difokuskan pada pekerjaan</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan sebuah sekolah ingin menciptakan lingkungan kerja yang mendukung kesejahteraan guru, tetapi anggarannya terbatas sehingga tidak bisa langsung menyediakan psikolog di tempat. Berdasarkan bagian E dan G bab ini, langkah awal yang paling realistis dan tetap bermakna adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh upaya mendukung kesehatan mental guru sampai anggaran psikolog tersedia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mulai membangun budaya sekolah yang terbuka membicarakan stres, menyediakan waktu salat berjamaah dan dzikir bersama, serta membentuk kelompok dukungan antar-guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jam mengajar guru agar sekolah punya lebih banyak dana untuk fasilitas lain</button>
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
<h2 class="reveal">Dasar-Dasar Kemandirian Finansial bagi Guru</h2>
<p class="lede reveal">Setelah memahami kompetensi dan kesehatan mental, aspek ketiga yang tak kalah penting bagi seorang guru yang utuh adalah kemandirian finansial — bagaimana mengelola keuangan pribadi dengan bijak agar hidup lebih tenang dan siap menghadapi perubahan ekonomi.</p>

<div class="card reveal">
  <h4>A. Mengapa Kemandirian Finansial Penting?</h4>
  <p>Ketika seorang guru memiliki kestabilan finansial, berbagai aspek kehidupan menjadi lebih nyaman dan teratur — bukan hanya mampu memenuhi kebutuhan pokok, tetapi juga bisa berinvestasi untuk pendidikan anak atau menabung untuk masa pensiun tanpa stres berlebihan terkait keuangan. Kondisi finansial yang stabil juga berdampak langsung pada kesehatan mental: ketika keuangan teratur dan mencukupi, guru merasa lebih aman dan fokus dalam menjalani tugas mengajar, sementara masalah finansial dapat memicu stres berlebihan dan mengganggu konsentrasi.</p>
  <p>Karena pendapatan utama guru umumnya berasal dari gaji tunggal, penting untuk mempertimbangkan diversifikasi sumber pendapatan — misalnya lewat produk digital edukasi, les tambahan, atau usaha sampingan yang sesuai minat — agar guru tidak mudah terguncang saat menghadapi situasi ekonomi yang sulit. Diversifikasi ini juga membantu guru lebih siap menghadapi inflasi dan perubahan ekonomi, karena kenaikan harga kebutuhan hidup yang sering tidak sejalan dengan kenaikan gaji bisa mengurangi daya beli jika tidak diantisipasi dengan pengelolaan keuangan dan cadangan finansial yang baik.</p>

  <h4>B. Mengelola Keuangan Pribadi dengan Bijak</h4>
  <p>Langkah pertama mengelola keuangan pribadi adalah menetapkan anggaran dasar yang sesuai dengan penghasilan. Sebagai gambaran, anggaran bulanan sederhana bisa dibagi menjadi sekitar 50% untuk kebutuhan pokok (makanan, transportasi, pendidikan anak), 20% untuk tabungan dan investasi, 10% untuk dana darurat dan asuransi, serta 10-20% untuk keinginan seperti hiburan dan rekreasi. Pembagian ini membantu memisahkan kebutuhan dan keinginan sehingga pengeluaran tetap terkontrol.</p>
  <p>Dana darurat — idealnya setara tiga hingga enam bulan pengeluaran — sangat penting sebagai perlindungan jika terjadi situasi tak terduga seperti biaya kesehatan mendadak. Guru bisa mulai menabung dari nominal kecil secara konsisten, memisahkan rekening tabungan agar tidak tercampur dengan uang harian, dan menentukan target yang jelas untuk menjaga motivasi. Memanfaatkan aplikasi keuangan untuk mencatat pengeluaran dan pemasukan, lengkap dengan kategori seperti "makan" atau "transportasi", juga sangat membantu memantau apakah anggaran bulanan sudah berjalan sesuai rencana.</p>

  <h4>C. Target & Waktu Pencapaian</h4>
  <p>Dua target utama pada tahap ini adalah mengembangkan anggaran dasar yang mengelompokkan kebutuhan utama, pengeluaran rutin, serta tabungan atau dana darurat, dan membentuk pola pikir proaktif finansial — cara berpikir di mana guru tidak hanya mengandalkan gaji, tetapi mulai merencanakan penghasilan tambahan, investasi, dan tabungan jangka panjang.</p>
  <p>Durasi 1-2 bulan dengan evaluasi berkala disarankan untuk membiasakan diri dengan anggaran dasar dan pola pikir proaktif ini. Pada akhir periode, guru perlu meninjau kembali anggaran yang telah dijalankan, mencatat pengeluaran tak terduga, mengevaluasi perkembangan tabungan atau dana darurat, dan mengubah rencana jika diperlukan. Evaluasi rutin semacam ini membangun fondasi keuangan yang kuat agar kesejahteraan dan kestabilan finansial semakin mudah dicapai secara bertahap.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari pembagian anggaran 50-20-10-10/20 yang dibahas di bagian B, seberapa dekat pola pengeluaran Anda saat ini dengan pembagian tersebut — dan penyesuaian apa yang paling realistis untuk mulai Anda lakukan bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, idealnya dana darurat setara dengan berapa bulan pengeluaran?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tiga hingga enam bulan pengeluaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu minggu pengeluaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua tahun pengeluaran</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru memiliki gaji tetap dan merasa itu sudah cukup, sehingga ia tidak pernah memikirkan sumber pendapatan lain maupun dana darurat. Suatu saat terjadi kondisi ekonomi sulit dan biaya kebutuhan naik drastis. Berdasarkan bagian A bab ini, apa yang paling mungkin dialami guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak akan terpengaruh sama sekali karena gaji guru selalu otomatis naik mengikuti inflasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Ia akan lebih rentan mengalami tekanan finansial dan stres karena hanya bergantung pada satu sumber pendapatan tanpa cadangan atau diversifikasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ia akan otomatis mendapatkan dana darurat dari sekolah tanpa perlu mempersiapkannya sendiri</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru mulai menyusun anggaran bulanan tetapi bingung bagaimana membagi penghasilannya secara proporsional. Berdasarkan bagian B bab ini, pembagian anggaran yang paling sesuai adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">100% dialokasikan untuk kebutuhan pokok tanpa menyisihkan apa pun untuk tabungan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekitar 50% kebutuhan pokok, 20% tabungan/investasi, 10% dana darurat/asuransi, dan 10-20% untuk hiburan/rekreasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Seluruh gaji ditabung tanpa dialokasikan untuk kebutuhan pokok sama sekali</button>
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
<h2 class="reveal">Kemandirian Finansial Guru Melalui Inovasi Digital</h2>
<p class="lede reveal">Setelah memahami dasar-dasar pengelolaan keuangan pribadi pada Bab 4, bab ini mengajak guru menjelajahi peluang praktis di dunia digital — dari menulis e-book hingga membangun kursus daring — sebagai jalan mewujudkan kemandirian finansial tanpa harus meninggalkan profesi mengajar.</p>

<div class="card reveal">
  <h4>A. Sumber Pendapatan Alternatif yang Sesuai dengan Profesi Guru</h4>
  <p>Menulis e-book pendidikan dan konten digital adalah salah satu peluang yang sangat sesuai bagi guru — dimulai dengan memilih topik yang relevan dan banyak dicari (misalnya strategi pengajaran efektif atau manajemen kelas), menyusun kerangka isi, melakukan riset sederhana, menulis draf, lalu menerbitkannya lewat platform seperti Amazon Kindle Direct Publishing atau Google Books. Selain menambah penghasilan, menulis e-book juga memperkuat posisi guru sebagai profesional yang diakui keahliannya di bidang tertentu.</p>
  <p>Menjadi mentor privat daring — baik 1-on-1 maupun kelompok kecil, lewat platform seperti Zoom, Google Meet, Preply, atau Italki — memungkinkan guru memberi bimbingan tambahan sekaligus terus mengasah keterampilan mengajar. Mengajar kursus mikro daring di platform seperti Udemy atau Skillshare cocok untuk topik spesifik yang disampaikan secara ringkas namun padat, lengkap dengan video pembelajaran, materi pendukung, dan latihan sederhana. Sementara itu, model bisnis afiliasi memungkinkan guru mendapatkan komisi dengan merekomendasikan produk edukasi yang relevan — seperti buku, perangkat belajar, atau aplikasi pendidikan — tanpa perlu modal awal maupun menyimpan stok produk apa pun.</p>

  <h4>B. Cara Membangun Produk Digital untuk Guru</h4>
  <p>Langkah pertama membangun produk digital adalah riset audiens dan analisis kebutuhan — lewat survei sederhana kepada sesama guru, mengamati tren di media sosial dan forum pendidikan, menganalisis topik populer di YouTube atau blog pendidikan, hingga menggunakan alat riset kata kunci seperti Google Trends. Hasil riset ini menjadi dasar untuk menentukan ide produk yang benar-benar menjawab kebutuhan nyata, bukan sekadar tebakan.</p>
  <p>Setelah ide produk ditentukan, guru perlu menyusun konsep dan materi utama, membuat draf konten, menguji cobakannya kepada rekan sejawat untuk mendapat masukan, lalu memilih format yang tepat — video, teks (e-book/modul), atau audio — sesuai kebutuhan audiens. Untuk produksi dan penjualan, tersedia berbagai alat dan platform yang mudah digunakan: Canva untuk desain grafis, Teachable atau Thinkific untuk kursus daring, serta Amazon Kindle Direct Publishing atau Google Books untuk penerbitan e-book. Dalam menentukan harga, guru perlu melakukan riset harga pasar produk sejenis, menetapkan harga yang kompetitif namun tetap menguntungkan, dan mempertimbangkan diskon awal untuk menarik pembeli pertama. Pemasaran dilakukan lewat optimalisasi media sosial (Instagram untuk konten visual, TikTok untuk video singkat, LinkedIn untuk audiens profesional) serta pemasaran email dengan menawarkan konten gratis sebagai "lead magnet" untuk membangun daftar audiens yang bisa terus dihubungi.</p>

  <h4>C. Target & Waktu Pencapaian</h4>
  <p>Target akhir bab ini adalah memulai satu produk digital atau sumber pendapatan alternatif pertama, seperti e-book atau kursus mini, yang sesuai dengan pengetahuan dan pengalaman guru sebagai pendidik. Produk sederhana ini dipilih karena tidak memerlukan investasi awal besar namun tetap bisa memberi nilai tambah bagi audiens.</p>
  <p>Durasi 2-3 bulan direkomendasikan untuk perencanaan dan eksekusi awal: bulan pertama difokuskan pada riset pasar dan pembentukan ide produk, bulan kedua untuk pembuatan konten utama dan persiapan materi pemasaran, dan bulan ketiga untuk peluncuran produk pertama disertai evaluasi awal. Keberhasilan bisa dipantau lewat metrik seperti jumlah pengikut baru, jumlah klik pada produk, tingkat konversi penjualan, dan umpan balik pelanggan — dengan kunci utama konsistensi dan kesediaan untuk terus menyesuaikan strategi berdasarkan hasil evaluasi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat sumber pendapatan alternatif (e-book, mentoring privat, kursus mikro, dan afiliasi) yang dibahas di bagian A, mana yang paling sesuai dengan keahlian dan waktu luang Anda saat ini — dan topik apa yang ingin Anda jadikan produk digital pertama?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa keuntungan utama menjadi afiliasi produk edukasi dibandingkan sumber pendapatan alternatif lainnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tidak memerlukan modal awal karena guru hanya perlu mempromosikan produk yang sudah ada</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memerlukan modal besar untuk membeli stok produk terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya bisa dilakukan oleh guru yang sudah pensiun</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru ingin membuat e-book, tetapi langsung menulis tanpa melakukan riset apa pun tentang topik yang paling dibutuhkan sesama guru. Setelah diterbitkan, e-book tersebut ternyata sangat sedikit peminatnya. Berdasarkan bagian B bab ini, apa penyebab paling mungkin dari hasil ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">E-book memang selalu kurang diminati dibandingkan format video, apa pun topiknya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru tersebut melewatkan tahap riset audiens dan analisis kebutuhan, sehingga topik yang dipilih belum tentu menjawab kebutuhan nyata calon pembaca</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penyebabnya pasti karena harga yang ditetapkan terlalu murah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru ingin mulai membangun produk digital pertamanya dalam 2-3 bulan, tetapi bingung harus mulai dari bulan pertama seperti apa. Berdasarkan bagian C bab ini, fokus paling tepat untuk bulan pertama adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung meluncurkan produk ke publik tanpa riset maupun draf konten terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan riset pasar untuk memahami kebutuhan audiens dan membentuk ide produk yang relevan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menetapkan harga produk final tanpa mengetahui dulu apa isi produknya</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab5" onclick="markDone('bab5')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab5">✓ Bab 5 selesai dibaca</p>
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
    <p>Menurut Bab 1, kompetensi guru mencakup pengetahuan, keterampilan, dan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sikap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kekayaan pribadi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Senioritas di sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru baru sangat menguasai materi ajar, namun sulit mengelola kelas dan sering canggung berkomunikasi dengan siswa. Berdasarkan Bab 1, aspek kompetensi apa yang paling perlu ia kembangkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah lagi penguasaan materi tanpa perlu aspek lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterampilan teknis dalam mengelola pembelajaran serta komunikasi dengan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu mengembangkan apa pun karena penguasaan materi sudah dianggap cukup</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru menolak mencoba metode pembelajaran berbasis proyek karena merasa metode ceramah yang selama ini dipakai "sudah paling benar". Berdasarkan konsep mindset pada Bab 1, apa yang sebaiknya diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Toolset digital yang dimiliki guru tersebut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Growth mindset-nya, agar lebih terbuka pada metode baru dan pembelajaran berkelanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Besaran gaji yang diterima guru tersebut</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, berapa durasi yang direkomendasikan untuk berlatih dan menerapkan tiga aspek (kurikulum, komunikasi, manajemen kelas) secara konsisten?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">1-2 bulan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">1 minggu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">1 tahun penuh</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Apa saja tiga keterampilan utama dalam pembelajaran abad ke-21 menurut Bab 2?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berpikir kritis, kolaborasi, dan kreativitas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghafal, mencatat, dan mengulang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepatuhan, keseragaman, dan disiplin semata</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SD ingin siswa lebih terlibat aktif dan tertantang menyelesaikan soal, sehingga guru mulai memberi poin dan lencana untuk setiap pencapaian belajar siswa. Berdasarkan Bab 2, pendekatan ini disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Flipped classroom</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gamifikasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Blended learning</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru rutin memakai platform kuis daring, tetapi tidak pernah melihat data hasilnya untuk menyesuaikan pengajaran. Berdasarkan Bab 2, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru kehilangan kesempatan memahami pola pemahaman siswa dan menyesuaikan metode pengajaran secara personal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak, karena kuis daring otomatis memperbaiki pemahaman siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa otomatis akan lebih pintar tanpa perlu tindak lanjut apa pun dari guru</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 2, pendekatan yang membuat siswa mempelajari materi dasar di rumah lewat video sebelum masuk kelas, sehingga waktu di kelas dipakai untuk diskusi mendalam, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Flipped classroom</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gamifikasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Afiliasi produk edukasi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, apa saja tiga tantangan mental yang umum dihadapi guru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Stres, burnout, dan kecemasan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kelaparan, kelelahan fisik, dan kemiskinan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebosanan, kemalasan, dan kurangnya gaji</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru merasa lelah secara emosional, namun sekolah tempatnya mengajar menyediakan waktu salat berjamaah, sesi dzikir bersama, dan kelompok dukungan antar-guru. Berdasarkan Bab 3, langkah sekolah ini termasuk upaya menciptakan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum karakter spesifik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Lingkungan kerja yang mendukung kesejahteraan guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Model bisnis afiliasi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru mengalami tekanan besar akibat beban administratif yang menumpuk, tetapi enggan meminta bantuan rekan kerja karena merasa tidak enak. Berdasarkan Bab 3, strategi apa yang sebaiknya ia terapkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terus memendam beban sendirian agar terlihat profesional di depan rekan kerja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengelola beban kerja dengan mengatur prioritas dan mendelegasikan sebagian tugas kepada kolega</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berhenti mengajar sepenuhnya karena beban dianggap tidak mungkin dikurangi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang kepala sekolah ingin meningkatkan kesadaran seluruh staf tentang kesehatan mental tanpa harus langsung menyediakan psikolog karena keterbatasan anggaran. Berdasarkan Bab 3, langkah paling relevan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengadakan sosialisasi rutin tentang kesehatan mental dan menyediakan sumber daya informasi yang mudah diakses oleh guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunda semua upaya sampai anggaran psikolog tersedia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jam mengajar agar guru tidak sempat memikirkan masalah pribadi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berapa persen dari penghasilan yang disarankan Bab 4 untuk dialokasikan pada tabungan dan investasi dalam anggaran bulanan sederhana?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekitar 20%</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekitar 80%</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">0%, karena semua penghasilan sebaiknya untuk kebutuhan pokok</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru mengalami kesulitan besar ketika harga kebutuhan pokok naik drastis, karena seluruh penghasilannya hanya bersumber dari gaji tunggal tanpa tabungan maupun dana darurat. Berdasarkan Bab 4, langkah pencegahan yang seharusnya dilakukan sejak awal adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari menabung karena dianggap tidak penting bagi seorang guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menetapkan anggaran dasar, membangun dana darurat, dan mempertimbangkan diversifikasi sumber pendapatan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengandalkan pinjaman setiap kali terjadi kenaikan harga kebutuhan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru ingin mulai disiplin finansial, tetapi khawatir tidak sanggup menabung dalam jumlah besar. Berdasarkan Bab 4, saran paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak usah menabung sampai penghasilannya naik signifikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mulai menabung dari nominal kecil secara konsisten dan memisahkan rekening tabungan agar tidak tercampur uang harian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menabung hanya jika ada sisa uang di akhir bulan tanpa target yang jelas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, berapa durasi yang disarankan untuk membiasakan diri dengan anggaran dasar dan pola pikir proaktif finansial, lengkap dengan evaluasi berkala?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">1-2 bulan dengan evaluasi berkala</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">1 hari saja tanpa evaluasi lanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">5 tahun tanpa perlu evaluasi di tengah jalan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebutkan salah satu platform yang direkomendasikan Bab 5 untuk menerbitkan e-book secara mandiri.</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Amazon Kindle Direct Publishing</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aplikasi rapor sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aplikasi absensi guru</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru berhasil membuat kursus mikro yang laris, namun ia tidak pernah memantau jumlah klik, tingkat konversi penjualan, atau umpan balik pembeli setelah peluncuran. Berdasarkan Bab 5, apa yang terlewat dari langkah guru tersebut?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang terlewat, karena produk sudah laris</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru tersebut belum memantau metrik keberhasilan yang penting untuk evaluasi dan penyempurnaan produk ke depan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru tersebut seharusnya menghentikan produk yang sudah laris tersebut</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru ingin mempromosikan produk digitalnya, tetapi asal mengunggah promosi berulang-ulang tanpa memberi konten bermanfaat apa pun kepada pengikutnya. Berdasarkan Bab 5, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Audiens akan semakin percaya karena semakin sering melihat promosi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Audiens berisiko jenuh dan kurang percaya karena tidak ada nilai tambah yang ditawarkan, berbeda dari strategi membangun audiens secara organik yang dianjurkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak sama sekali terhadap kepercayaan audiens</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 5, apa fokus utama yang disarankan pada bulan pertama dari rencana 2-3 bulan membangun produk digital?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Peluncuran produk secara besar-besaran ke seluruh media sekaligus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Riset pasar dan pembentukan ide produk</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menetapkan harga akhir produk tanpa riset terlebih dahulu</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
