/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "KPI Sekolah Islam: Membangun Budaya Kinerja
   yang Terukur dan Berdampak"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-kpi-sekolah-islam.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Pendahuluan</h2>
<p class="lede reveal">Sebelum masuk ke teknik dan contoh penyusunan KPI, penting untuk memahami dulu mengapa alat ukur ini begitu dibutuhkan oleh sekolah Islam, dan tantangan apa saja yang membuat kehadirannya menjadi semakin mendesak.</p>

<div class="card reveal">
  <h4>A. Pentingnya KPI dalam Manajemen Sekolah</h4>
  <p>KPI, singkatan dari Key Performance Indicators atau indikator kinerja utama, adalah alat ukur yang dirancang untuk membantu organisasi -- termasuk sekolah -- menilai sejauh mana pencapaian suatu tujuan. Di sekolah Islam, KPI membantu memantau apakah kinerja sekolah sudah sesuai dengan target yang ditetapkan. Sederhananya, KPI adalah "petunjuk jalan" yang memastikan setiap aspek di sekolah berjalan sesuai rencana, sekaligus membantu kita memahami apakah upaya yang dilakukan sudah berhasil atau masih perlu ditingkatkan. Jika sekolah menargetkan siswa hafal 2 juz dalam setahun, misalnya, KPI berfungsi sebagai tolok ukur untuk menilai kemajuan siswa menuju pencapaian hafalan tersebut.</p>
  <p>KPI penting karena memiliki beberapa fungsi utama. Pertama, sebagai panduan arah sekolah -- tanpa KPI, sekolah mungkin bergerak tanpa arah yang jelas, sementara dengan KPI setiap tenaga pendidik, staf, dan manajemen memiliki panduan yang sama dalam melaksanakan tugas sehari-hari. Kedua, sebagai alat untuk mengukur kinerja seluruh elemen sekolah, dari siswa, guru, hingga manajemen, sehingga sekolah bisa segera tahu jika ada yang perlu diperbaiki. Ketiga, KPI memberi informasi nyata untuk pengambilan keputusan -- misalnya jika data menunjukkan banyak siswa kesulitan pada mata pelajaran tertentu, sekolah bisa merespons dengan tambahan pelatihan atau metode pengajaran yang lebih sesuai. Keempat, KPI menjadi alat motivasi: target yang jelas membuat guru dan siswa tahu apa yang diharapkan dari mereka, dan rasa puas saat target tercapai menjadi dorongan untuk terus meningkatkan kinerja. Kelima, KPI mendukung evaluasi dan perbaikan berkelanjutan, karena dengan evaluasi berkala sekolah bisa mengidentifikasi kekuatan dan kelemahannya lalu terus beradaptasi dengan kebutuhan zaman.</p>
  <p>Bagi sekolah Islam secara khusus, KPI sangat relevan karena membantu memastikan kualitas pendidikan yang sesuai dengan nilai-nilai Islam sekaligus standar pendidikan modern. Selain memantau hasil akademik, KPI juga bisa diterapkan untuk mengukur perkembangan karakter, akhlak, dan pembiasaan nilai-nilai Islami pada siswa, seperti hafalan Al-Qur'an, tata krama, dan perilaku sehari-hari -- menjadikan KPI bukan sekadar alat manajemen, tetapi bagian dari ikhtiar sekolah dalam mendidik generasi yang berakhlak mulia dan kompeten. Manfaatnya pun luas: menjaga fokus dan arah sekolah agar setiap kegiatan selaras dengan visi-misi; membantu pengelolaan sumber daya (tenaga pendidik, waktu, anggaran) secara lebih efisien; meningkatkan kinerja guru dan staf karena mereka tahu kinerjanya diukur dan ada target yang harus dicapai; mendorong pengembangan karakter Islami siswa lewat indikator kedisiplinan, kejujuran, dan akhlak yang jelas; memberikan data akurat untuk evaluasi dan perbaikan; meningkatkan kepuasan orang tua dan kepercayaan masyarakat karena prestasi sekolah bisa ditunjukkan secara nyata; serta mendorong pengembangan berkelanjutan lewat siklus evaluasi yang terus berjalan tanpa mengabaikan nilai-nilai Islam.</p>

  <h4>B. Tantangan Sekolah Islam dalam Mencapai Tujuan Pendidikan</h4>
  <p>Mengelola sekolah Islam memiliki tantangan tersendiri karena sekolah ini tidak hanya berfokus pada prestasi akademik, tetapi juga pendidikan karakter dan akhlak. Beberapa kendala umum yang kerap dihadapi antara lain keterbatasan sumber daya keuangan, karena banyak sekolah Islam berbasis yayasan atau dana masyarakat sehingga pendanaan menjadi tantangan besar yang berdampak pada fasilitas, gaji guru, dan kelangsungan program. Kendala lain adalah kualitas dan kesejahteraan guru yang belum optimal -- gaji yang lebih rendah dibanding sekolah negeri atau swasta umum, ditambah beban mengajar berbagai mata pelajaran sekaligus termasuk agama dan hafalan Al-Qur'an, membuat sekolah sulit menarik dan mempertahankan tenaga pengajar berkualitas. Keterbatasan fasilitas pembelajaran seperti laboratorium, perpustakaan, atau akses teknologi juga membuat siswa kurang terpapar keterampilan praktis yang dibutuhkan di dunia modern.</p>
  <p>Selain itu, banyak sekolah Islam masih menghadapi kurangnya program pengembangan karakter yang terstruktur -- fokus sering kali baru sebatas kegiatan keagamaan rutin seperti salat berjamaah atau hafalan, sementara penguatan karakter dalam sikap sehari-hari belum terukur dengan baik, sehingga hasilnya kurang optimal karena dijalani sebagai rutinitas tanpa pemahaman mendalam. Tantangan mengikuti perkembangan kurikulum baru seperti Kurikulum Merdeka juga terasa berat karena membutuhkan kreativitas dan sumber daya yang belum tentu tersedia. Di sisi lain, sekolah Islam harus bersaing dengan sekolah umum dan swasta lain yang mungkin menawarkan fasilitas lebih tinggi, sementara kesadaran sebagian masyarakat tentang pentingnya pendidikan karakter Islami masih rendah -- banyak orang tua lebih fokus pada prestasi akademik dibanding pembentukan akhlak. Terakhir, keterbatasan dalam menggunakan teknologi membuat sekolah kesulitan mengintegrasikannya ke pembelajaran, padahal siswa masa kini sangat membutuhkan bekal keterampilan teknologi.</p>
  <p>Di tengah berbagai tantangan itu, KPI sebenarnya adalah alat yang sangat efektif untuk membantu sekolah Islam mencapai tujuan pendidikannya. KPI membantu memetakan prioritas dan fokus sekolah, misalnya menentukan apakah perhatian perlu diarahkan pada pengadaan fasilitas, pelatihan guru, atau peningkatan kurikulum. KPI juga membantu mengukur kinerja dan kemajuan guru secara lebih objektif, memastikan program pendidikan karakter berjalan terstruktur dan tidak sekadar rutinitas, menyediakan dasar untuk perbaikan berkelanjutan berdasarkan data nyata, serta menjadi alat komunikasi yang kuat untuk menarik dukungan dari masyarakat, donatur, atau pemerintah. KPI bahkan membantu sekolah menghadapi persaingan secara sehat dengan menunjukkan posisinya dibanding sekolah lain, sekaligus mengurangi beban administratif yang tidak esensial agar guru dan staf bisa lebih fokus pada kegiatan inti yang mendukung tujuan pendidikan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari berbagai kendala yang dibahas di bab ini (dana, kualitas guru, fasilitas, program karakter yang belum terstruktur, kurikulum, persaingan, kesadaran masyarakat, dan teknologi), kendala mana yang paling terasa di sekolah Anda saat ini -- dan bagaimana KPI bisa mulai membantu mengatasinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, KPI paling tepat diibaratkan sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">"Petunjuk jalan" yang memastikan setiap aspek di sekolah berjalan sesuai rencana dan bisa dinilai hasilnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Daftar peraturan tata tertib yang wajib dihafal seluruh siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dokumen administratif yang hanya dibuat untuk memenuhi syarat akreditasi</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam memiliki program tahfidz dan kegiatan keagamaan rutin, tetapi penguatan karakter dalam sikap sehari-hari siswa belum pernah diukur atau dipantau secara berkala. Berdasarkan Bab 1, apa yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Hasil pendidikan karakter cenderung kurang optimal karena siswa hanya menjalankan kegiatan sebagai rutinitas tanpa pemahaman mendalam dan tanpa tolok ukur kemajuan yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karakter siswa otomatis akan terbentuk dengan baik selama kegiatan keagamaan dijalankan rutin, tanpa perlu indikator apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pengukuran karakter tidak diperlukan karena karakter bersifat spiritual dan tidak bisa dikaitkan dengan KPI sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan Nurul Iman mengelola sebuah sekolah Islam dengan anggaran terbatas, gaji guru yang belum kompetitif, dan sedang menghadapi persaingan ketat dari sekolah swasta baru di sekitarnya. Berdasarkan Bab 1, langkah paling tepat yang bisa diambil pimpinan sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan keterbatasan yang ada dan menunggu kondisi keuangan membaik dengan sendirinya sebelum mulai berbenah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan KPI untuk memetakan prioritas -- misalnya menentukan apakah sumber daya yang terbatas sebaiknya lebih dulu diarahkan ke pelatihan guru, fasilitas, atau keunggulan program tertentu -- agar setiap langkah lebih terarah dan berdampak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menutup seluruh program ekstrakurikuler agar bisa fokus sepenuhnya bersaing dari sisi fasilitas fisik saja</button>
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
<h2 class="reveal">Konsep Dasar KPI (Key Performance Indicators)</h2>
<p class="lede reveal">Agar KPI benar-benar bisa dipakai sebagai alat kerja sehari-hari, sekolah perlu memahami dulu definisinya secara utuh, tiga kata kunci yang membentuk istilah ini, serta ragam jenis KPI yang relevan dalam dunia pendidikan.</p>

<div class="card reveal">
  <h4>A. Definisi KPI</h4>
  <p>KPI atau Key Performance Indicators adalah alat yang digunakan untuk mengukur dan memantau kinerja, baik di organisasi, sekolah, bisnis, maupun institusi lainnya. Ibaratnya, KPI adalah sebuah "kompas" yang memberi tahu apakah kita sudah berada di jalur yang benar dalam mencapai tujuan yang sudah ditetapkan. KPI membantu menjawab pertanyaan penting seperti "Apakah program belajar mengajar berjalan sesuai harapan?" atau "Apakah siswa mengalami peningkatan kemampuan dan karakter yang kita harapkan?" KPI menjadi penting karena dengan indikator yang jelas, sekolah tidak hanya bekerja dengan asumsi -- ia bisa memantau, menilai, dan mengubah pendekatan bila hasil belum sesuai harapan. Misalnya, jika sekolah ingin meningkatkan kedisiplinan siswa, ia bisa menetapkan KPI berupa tingkat keterlambatan siswa masuk kelas atau tingkat kepatuhan pada aturan sekolah, lalu memantaunya secara teratur.</p>
  <p>Salah satu ciri penting KPI adalah harus spesifik dan dapat diukur -- inilah yang membedakannya dari tujuan atau target biasa. "Meningkatkan prestasi siswa" bisa menjadi tujuan besar, tetapi agar menjadi KPI, harus ada indikator spesifik seperti "jumlah siswa yang mendapat nilai 80 ke atas dalam ujian akhir semester." Beberapa contoh KPI yang umum digunakan di lingkungan sekolah antara lain persentase kehadiran siswa dan guru, hasil akademik seperti jumlah siswa yang mencapai target nilai tertentu, serta partisipasi siswa dalam kegiatan ekstrakurikuler atau program pembinaan keagamaan sebagai indikator pengembangan karakter.</p>
  <p>KPI sering disamakan dengan metrik lain, padahal keduanya berbeda: semua KPI adalah metrik, tetapi tidak semua metrik adalah KPI. KPI adalah metrik yang langsung terkait dengan tujuan utama sekolah dan memiliki prioritas tinggi karena mencerminkan sukses atau gagalnya pencapaian tujuan, sementara metrik lain seperti jumlah siswa yang datang tepat waktu atau rata-rata waktu pengerjaan tugas bisa bermanfaat sebagai data pendukung harian, tetapi tidak menjadi acuan utama evaluasi keberhasilan. KPI juga biasanya dipantau untuk jangka panjang dan berpengaruh besar terhadap keputusan strategis, sedangkan metrik lain bersifat lebih harian atau mingguan untuk pemantauan teknis.</p>

  <h4>B. Tiga Kata Kunci KPI</h4>
  <p>Agar lebih mudah dipahami, istilah KPI bisa dibedah dari tiga kata pembentuknya: Key, Performance, dan Indicator. Kata "Key" atau Kunci menunjukkan bahwa indikator yang dipilih benar-benar penting bagi tujuan utama sekolah -- dari sekian banyak hal yang bisa diukur, sekolah harus memilih yang paling "penting" dan langsung terkait dengan kesuksesannya, bukan asal memilih data. "Performance" atau Kinerja berarti fokus pada hasil akhir yang ingin dicapai sekolah -- KPI membantu memantau seberapa jauh atau seberapa dekat sekolah sudah berjalan menuju tujuannya, misalnya persentase kelulusan siswa dengan nilai tinggi atau peningkatan partisipasi siswa dalam kegiatan ekstrakurikuler yang relevan dengan pengembangan karakter.</p>
  <p>Sementara itu, kata "Indicator" atau Indikator adalah bagian teknis yang menjelaskan bagaimana membuat indikator yang jelas dan terukur, lewat rumusan ABCD: Audience (siapa yang menjadi target, misalnya "siswa kelas 10"), Behavior (perilaku atau hasil spesifik yang ingin dicapai, misalnya "mencapai nilai rata-rata 80"), Condition (situasi di mana perilaku itu diharapkan terjadi, misalnya "pada ujian akhir tahun ajaran"), dan Degree (tingkat atau standar keberhasilan yang diharapkan, misalnya "80% siswa mencapai nilai rata-rata 80 ke atas"). Sebagai contoh penerapannya: Audience adalah siswa kelas 12, Behavior-nya menguasai materi dasar matematika, Condition-nya saat mengikuti ujian kelulusan, dan Degree-nya 90% dari mereka memperoleh nilai di atas 75. Rumusan ABCD ini membuat indikator tidak lagi abstrak, melainkan benar-benar bisa diukur dan dipantau.</p>

  <h4>C. Jenis-jenis KPI dalam Pendidikan</h4>
  <p>Dalam pendidikan, KPI dirancang untuk memantau perkembangan serta kualitas proses belajar-mengajar dari berbagai sisi. KPI berbasis kinerja siswa membantu sekolah mengukur seberapa baik siswa memenuhi standar akademik dan pengembangan karakter, mencakup nilai rata-rata kelas, persentase kelulusan, pencapaian standar ujian nasional, keterlibatan dalam kegiatan ekstrakurikuler, tingkat kehadiran, hingga pengembangan karakter dan nilai moral seperti keaktifan dalam kegiatan keagamaan atau hafalan tertentu. KPI jenis ini membantu sekolah lebih fokus pada hasil belajar, menyediakan data untuk pengambilan keputusan, memantau kemajuan secara berkala, dan meningkatkan keterlibatan siswa maupun guru.</p>
  <p>KPI berbasis kinerja guru menilai sejauh mana guru memenuhi standar pendidikan yang ditetapkan sekolah -- bukan sekadar mengajar, tetapi juga bagaimana guru memotivasi dan mengembangkan potensi siswa. Contohnya mencakup kehadiran dan ketepatan waktu, keterlibatan dalam pengembangan profesional, pencapaian target pembelajaran siswa, kemampuan manajemen kelas, umpan balik positif dari siswa dan orang tua, serta kreativitas dalam menyusun rencana pembelajaran. KPI ini memastikan kualitas pengajaran, mendorong pengembangan diri guru, membangun lingkungan belajar yang kondusif, dan pada akhirnya menunjang perkembangan siswa secara langsung.</p>
  <p>Adapun KPI berbasis manajemen sekolah memengaruhi efisiensi dan produktivitas sekolah secara keseluruhan, mencakup efisiensi administrasi, kualitas fasilitas, kepuasan guru dan staf, hubungan dengan orang tua dan komunitas, pengelolaan keuangan yang transparan, hingga pengembangan program-program baru. Dengan KPI manajemen yang berjalan baik, sekolah memperoleh efisiensi operasional, peningkatan kualitas layanan, transparansi dan akuntabilitas, serta motivasi dan kepuasan staf yang lebih tinggi -- semuanya menjadi fondasi kuat bagi sekolah untuk mencapai visi dan misinya dalam memberikan pendidikan terbaik bagi siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga jenis KPI yang dibahas (berbasis kinerja siswa, kinerja guru, dan manajemen sekolah), jenis mana yang sudah paling matang diterapkan di sekolah Anda, dan jenis mana yang paling perlu segera dibenahi?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, istilah KPI dibentuk dari tiga kata kunci, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Key, Performance, dan Indicator</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kualitas, Prestasi, dan Integritas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kinerja, Program, dan Insentif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wakil kepala sekolah menetapkan tujuan besar "meningkatkan prestasi siswa" sebagai KPI, tanpa indikator lebih spesifik apa pun. Berdasarkan Bab 2, apa masalah utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tujuan tersebut masih terlalu umum untuk disebut KPI -- agar benar-benar berfungsi sebagai KPI, ia perlu dirumuskan menjadi indikator spesifik dan terukur, misalnya jumlah siswa yang mendapat nilai 80 ke atas dalam ujian akhir semester</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada masalah, karena semua tujuan besar sekolah otomatis bisa disebut KPI tanpa perlu dirinci lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tujuan tersebut seharusnya diganti total karena prestasi siswa tidak relevan untuk dijadikan indikator kinerja sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah mencatat "jumlah siswa yang mengumpulkan tugas tepat waktu setiap hari" sebagai data rutin, namun data ini tidak langsung mencerminkan pencapaian tujuan besar sekolah, hanya bermanfaat sebagai data pendukung harian. Berdasarkan Bab 2, data semacam ini paling tepat disebut sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">KPI utama, karena semua data yang dikumpulkan sekolah otomatis menjadi KPI</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Metrik biasa, karena tidak semua metrik adalah KPI -- KPI adalah metrik yang benar-benar terkait langsung dengan tujuan utama dan memiliki prioritas tinggi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Data yang harus segera dihapus karena dianggap tidak memiliki manfaat apa pun bagi sekolah</button>
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
<h2 class="reveal">Prinsip dan Contoh Penyusunan KPI di Sekolah Islam</h2>
<p class="lede reveal">Memahami definisi KPI saja belum cukup -- sekolah juga perlu tahu prinsip-prinsip dasar dalam menyusunnya, serta melihat contoh konkret bagaimana visi dan misi diturunkan menjadi KPI yang benar-benar bisa dijalankan.</p>

<div class="card reveal">
  <h4>A. Prinsip Penyusunan KPI</h4>
  <p>Langkah paling awal dan krusial dalam menyusun KPI adalah menentukan tujuan pendidikan sekolah Islam, dimulai dari identifikasi visi dan misi. Visi adalah gambaran ideal tentang apa yang ingin dicapai sekolah dalam jangka panjang, sementara misi adalah langkah-langkah konkret untuk mencapainya. Setelah visi-misi jelas, langkah berikutnya adalah menghubungkan tujuan sekolah dengan tujuan pendidikan Islam, yang tidak hanya menekankan aspek akademis tetapi juga karakter dan akhlak sesuai ajaran agama -- misalnya membentuk pribadi yang bertakwa, meningkatkan semangat menuntut ilmu, dan mengembangkan sikap sosial serta kepedulian terhadap sesama. Dari sini, KPI bisa dirumuskan seperti "minimal 75% siswa terlibat dalam kegiatan keagamaan" atau "peningkatan rata-rata nilai ujian siswa setiap semester", sehingga KPI benar-benar mendukung pencapaian tujuan pendidikan yang holistik.</p>
  <p>Langkah berikutnya adalah menentukan area kunci untuk KPI, yang biasanya mencakup lima bidang: akademik (rata-rata nilai ujian, persentase kelulusan, peningkatan nilai dari waktu ke waktu), karakter (partisipasi ekstrakurikuler, penilaian guru tentang perilaku siswa, keterlibatan dalam kegiatan sosial), akhlak (kedisiplinan, pelaksanaan ibadah seperti salat berjamaah, sikap saling menghargai), manajemen (kepuasan staf, efisiensi pengambilan keputusan, pengelolaan waktu), dan keuangan (rasio pendapatan-pengeluaran, tingkat penerimaan siswa baru, ketersediaan dana pengembangan) -- ditambah aspek fasilitas (kondisi fisik, rasio siswa terhadap fasilitas, aksesibilitas), hubungan masyarakat (partisipasi orang tua, umpan balik masyarakat, kolaborasi dengan lembaga lain), dan pengembangan siswa secara menyeluruh (program karakter, keterlibatan ekstrakurikuler, keterampilan non-akademik).</p>
  <p>Setelah area kunci dipetakan, KPI perlu disusun secara sistematis untuk tiap area -- misalnya area akademik dengan KPI "rata-rata nilai ujian akhir" atau "persentase siswa yang lulus ujian nasional"; area karakter dan akhlak dengan KPI "jumlah kegiatan sosial yang diikuti siswa" atau "penilaian guru tentang perilaku siswa"; serta area manajemen sekolah dengan KPI "tingkat kepuasan orang tua terhadap pelayanan sekolah" atau "persentase penggunaan anggaran sekolah secara efektif." Pemilihan indikator yang relevan sangat krusial: sekolah perlu mengidentifikasi tujuan utamanya lebih dulu, menganalisis kebutuhan spesifiknya, memilih indikator yang sederhana dan mudah dipahami (simplicity is key), serta memastikan indikator itu bisa diukur dan dapat dicapai dalam waktu yang realistis.</p>
  <p>Prinsip SMART menjadi salah satu cara terbaik untuk memastikan KPI tepat sasaran: Specific (spesifik dan jelas, misalnya "meningkatkan rata-rata nilai ujian matematika kelas 5 menjadi 80% dalam satu tahun ajaran" alih-alih sekadar "meningkatkan nilai siswa"), Measurable (terukur dengan data konkret), Achievable (realistis sesuai sumber daya yang tersedia), Relevant (selaras dengan visi-misi sekolah), dan Time-bound (memiliki batasan waktu yang jelas, misalnya "meningkatkan kepuasan siswa menjadi 85% pada akhir tahun ajaran"). Contoh penerapannya bisa dilihat pada KPI "meningkatkan partisipasi siswa dalam kegiatan ekstrakurikuler": spesifik pada klub sains dan olahraga, terukur lewat jumlah pendaftar tiap semester, dapat dicapai dengan menyediakan kegiatan menarik dan sosialisasi, relevan karena mendukung pengembangan karakter, dan berbatas waktu mencapai 70% partisipasi pada akhir tahun ajaran.</p>
  <p>Terakhir, dan menjadi ciri khas sekolah Islam, adalah menggunakan Al-Qur'an dan Sunnah sebagai landasan KPI. Keduanya memberi dasar moral dan etika yang jelas, menyelaraskan tujuan pendidikan dengan ajaran Islam, mendorong pengembangan karakter lewat semangat ukhuwah dan gotong royong, mengedukasi tentang tanggung jawab sosial, serta meningkatkan kesadaran spiritual siswa. Sebagai contoh, KPI "meningkatkan penguasaan siswa terhadap materi keagamaan" bisa berlandaskan pentingnya ilmu dalam Surah Al-Mujadila ayat 11, dengan indikator persentase siswa yang lulus ujian keagamaan dan aktif dalam diskusi keagamaan; sementara KPI "meningkatkan kepedulian sosial siswa" bisa berlandaskan teladan Rasulullah SAW dalam berbagi dan membantu sesama, dengan indikator jumlah kegiatan sosial yang diikuti siswa tiap semester.</p>

  <h4>B. Contoh Penyusunan KPI</h4>
  <p>Visi dan misi berfungsi sebagai kompas yang menentukan arah dan tujuan pendidikan sekolah -- tanpa keduanya, program yang dijalankan bisa terasa kurang terarah. Sebagai contoh konkret, sebuah sekolah bisa menetapkan visi "Menjadi Lembaga Pendidikan yang Terdepan, Qurani & Humanis", yang kemudian diturunkan menjadi tiga misi: menjadikan lembaga pendidikan yang berprestasi, mendidik siswa hafal Al-Qur'an 2 juz, serta membangun siswa berkarakter muwathonah (nasionalis) dan tasyamuh (menghargai perbedaan).</p>
  <p>Dari misi "menjadikan lembaga pendidikan yang berprestasi" (turunan visi "Terdepan"), tujuan atau renstra yang dirumuskan misalnya "menjadi 5 terbaik bidang bilingual, olimpiade, dan olahraga tingkat Kota Tangerang Selatan", dengan KPI berupa keberhasilan masuk 5 besar di bidang-bidang tersebut serta perolehan PPDB sebanyak 60 siswa baru atau pindahan -- jika keduanya tercapai, itu menandakan visi "terdepan" mulai terwujud. Dari misi "mendidik siswa hafal Al-Qur'an 2 juz" (turunan visi "Qurani"), tujuannya adalah menargetkan siswa rata-rata sudah hafal Juz 30 dan 29, dengan KPI berupa jumlah siswa SD yang mampu hafalan dan tasmi Al-Qur'an Juz 30 -- semakin banyak jumlahnya, semakin baik program hafalan berjalan. Dari misi "membangun siswa berkarakter muwathonah & tasyamuh" (turunan visi "Humanis"), tujuannya adalah siswa yang nasionalis, patriotis, serta menerima dan menghargai perbedaan, dengan KPI berupa pemahaman guru dan seluruh stakeholder tentang karakter humanis tersebut, serta kemampuan manajemen sekolah menyelesaikan tunggakan pembayaran di bawah 5% -- yang menunjukkan bahwa pengelolaan keuangan juga berjalan sejalan dengan prinsip humanis dan bertanggung jawab.</p>
  <p>Contoh di atas memperlihatkan bagaimana satu visi bisa diuraikan menjadi beberapa misi, setiap misi diturunkan menjadi tujuan/renstra yang lebih konkret, dan setiap tujuan akhirnya diwujudkan dalam KPI yang benar-benar terukur. Pola berjenjang inilah -- visi, misi, tujuan, lalu KPI -- yang membuat seluruh elemen sekolah bisa saling terkait dan bergerak ke arah yang sama, alih-alih berjalan sendiri-sendiri tanpa arah yang jelas.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Coba petakan satu misi utama sekolah Anda saat ini. Jika mengikuti pola visi-misi-tujuan-KPI pada bab ini, KPI konkret apa yang paling relevan untuk mengukur ketercapaian misi tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, prinsip yang membantu memastikan KPI spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip SMART</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip ABCD</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip POAC</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menetapkan KPI "meningkatkan kualitas pendidikan" tanpa angka, tanpa target waktu, dan tanpa kaitan jelas dengan visi-misinya. Berdasarkan prinsip SMART pada Bab 3, unsur apa saja yang paling jelas belum terpenuhi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Specific, Measurable, dan Time-bound -- KPI tersebut masih terlalu umum, tidak memiliki angka yang bisa diukur, dan tidak memiliki batas waktu pencapaian yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena KPI tersebut sudah cukup jelas dan bisa langsung dijalankan tanpa revisi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya unsur Relevant yang kurang, sementara unsur lainnya sudah lengkap sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>SDIT Cahaya Ummat memiliki visi "Terdepan, Qurani, dan Humanis" namun kesulitan menerjemahkannya menjadi program kerja tahunan yang konkret. Berdasarkan contoh penyusunan KPI pada Bab 3, langkah paling tepat yang bisa ditempuh sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan visi tetap menjadi slogan di dinding sekolah tanpa perlu diturunkan lebih lanjut ke program kerja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menguraikan visi menjadi beberapa misi konkret, menurunkan tiap misi menjadi tujuan/renstra yang lebih spesifik, lalu merumuskan KPI terukur untuk setiap tujuan tersebut, seperti pada contoh "Terdepan-Qurani-Humanis"</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti visi sekolah setiap tahun agar selalu terasa baru, tanpa perlu konsistensi jangka panjang</button>
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
<h2 class="reveal">Ragam Manajemen Pengelolaan</h2>
<p class="lede reveal">KPI tidak berdiri sendiri -- ia akan jauh lebih efektif jika didukung oleh kerangka manajemen yang tepat. Bab ini mengenalkan tiga belas model manajemen yang bisa dipadukan dengan KPI untuk mengelola sekolah Islam secara lebih terstruktur, mulai dari analisis kesenjangan hingga manajemen mutu menyeluruh.</p>

<div class="card reveal">
  <h4>A. Gap Analysis</h4>
  <p>Gap Analysis atau analisis kesenjangan adalah metode untuk menilai perbedaan antara kondisi sekolah saat ini dan kondisi yang diinginkan. Dalam konteks sekolah, analisis ini membantu memahami di mana sekolah berada sekarang, ke mana ia ingin pergi, dan apa yang harus dilakukan untuk menjembatani kesenjangan tersebut -- bisa berupa perbandingan hasil akademis siswa, kinerja guru, sumber daya, atau fasilitas dengan standar yang telah ditetapkan. Dengan mengetahui kesenjangan ini secara jelas, sekolah bisa menyusun rencana perbaikan yang lebih terarah, alih-alih menebak-nebak area mana yang paling membutuhkan perhatian.</p>

  <h4>B. POAC (Planning, Organizing, Actuating, Controlling)</h4>
  <p>POAC adalah kerangka manajemen klasik yang terdiri dari empat fungsi berurutan. Planning (perencanaan) menetapkan tujuan dan langkah untuk mencapainya; Organizing (pengorganisasian) mengatur sumber daya manusia, waktu, dan fasilitas agar rencana bisa dijalankan; Actuating (pelaksanaan) menggerakkan seluruh pihak untuk benar-benar menjalankan rencana tersebut; dan Controlling (pengendalian) memastikan setiap langkah berjalan sesuai tujuan lewat pemantauan berkala, evaluasi hasil, dan tindakan korektif bila ditemukan kekurangan -- misalnya memberi bimbingan tambahan bagi siswa yang masih kesulitan setelah dipantau nilai ujiannya. POAC membantu sekolah lebih terstruktur dan efektif, mulai dari merencanakan tujuan hingga memastikan semua berjalan sesuai rencana.</p>

  <h4>C. ADARR (Approach, Development, Assessment, Review, Results)</h4>
  <p>ADARR adalah metode lima langkah untuk menjalankan program secara lebih terstruktur. Approach menentukan pendekatan atau strategi yang dipakai, misalnya memilih fokus meningkatkan literasi lewat klub baca atau pelatihan guru. Development mempersiapkan sumber daya dan alat yang diperlukan, seperti materi bacaan tambahan dan pelatihan guru. Assessment menilai kesiapan program lewat uji coba skala kecil dan pengumpulan umpan balik sebelum program berjalan penuh. Review meninjau kemajuan secara berkala lewat evaluasi mingguan atau bulanan dan diskusi tim. Results menilai hasil akhir program secara komprehensif, membuat laporan pencapaian, dan menjadikannya bahan pembelajaran untuk perbaikan program berikutnya. Kelima langkah ini memberi panduan terstruktur agar setiap tujuan program bisa diraih secara efektif dan efisien.</p>

  <h4>D. PDCI (Plan, Do, Check, Improve)</h4>
  <p>PDCI membantu mengelola dan memperbaiki proses kerja agar berjalan efektif lewat empat tahap. Plan menetapkan tujuan yang jelas, merancang rencana aksi, dan menyiapkan sumber daya yang dibutuhkan. Do melaksanakan rencana ke dalam tindakan nyata, lengkap dengan pembagian tugas dan pemantauan awal. Check mengevaluasi apakah pelaksanaan sesuai rencana, misalnya membandingkan jumlah siswa yang terlibat dengan target awal serta mengumpulkan umpan balik dari siswa, guru, dan orang tua. Improve memperbaiki dan meningkatkan proses berdasarkan temuan di tahap check, seperti menambah variasi kegiatan atau mencari solusi atas keterbatasan sumber daya. Struktur PDCI yang sederhana dan jelas membuatnya mudah diterapkan di sekolah untuk menciptakan program yang terus berkembang dari waktu ke waktu.</p>

  <h4>E. PIEI (Plan, Implement, Evaluate, Improve)</h4>
  <p>PIEI adalah model empat tahap yang mirip dengan PDCI namun menekankan siklus perencanaan matang, pelaksanaan sistematis, evaluasi objektif, dan perbaikan berkelanjutan. Setelah program dijalankan (Implement), tahap Evaluate dilakukan lewat tes atau observasi sederhana, diskusi dengan guru dan siswa, serta pencatatan temuan untuk memastikan sekolah memiliki data akurat tentang keefektifan program. Tahap Improve kemudian menyesuaikan frekuensi atau intensitas program bila dirasa terlalu padat, serta memberi pelatihan tambahan kepada guru agar teknik pengajaran semakin menarik. PIEI sangat cocok diterapkan di lingkungan pendidikan karena tidak hanya berfokus pada pelaksanaan, tetapi juga pada evaluasi dan peningkatan yang berkesinambungan.</p>

  <h4>F. PDCA (Plan, Do, Check, Action)</h4>
  <p>PDCA adalah model manajemen berbasis siklus berkelanjutan yang sangat populer. Tahap Action di sini berarti melakukan tindakan lanjutan berdasarkan hasil evaluasi pada tahap Check -- jika ditemukan kesulitan pada topik tertentu, guru bisa menambahkan sesi khusus; jika program terbukti sukses, sekolah bisa menerapkannya pada kelas atau jenjang lain; dan setiap perubahan yang dilakukan perlu didokumentasikan sebagai referensi untuk program berikutnya. Keunggulan utama PDCA adalah begitu satu siklus selesai, sekolah bisa langsung memulai kembali dari tahap Plan dengan perbaikan yang sudah dilakukan, sehingga setiap proses menjadi lebih terkontrol dan berkembang secara konsisten -- cocok digunakan baik untuk manajemen sekolah, pengembangan program pembelajaran, maupun peningkatan kompetensi guru dan siswa.</p>

  <h4>G. SWOT (Strengths, Weaknesses, Opportunities, Threats)</h4>
  <p>SWOT membantu sekolah mengenali kondisinya dari empat sisi. Strengths (kekuatan) adalah faktor internal yang menjadi keunggulan, seperti kualitas guru yang kompeten, fasilitas lengkap, atau nilai-nilai keislaman yang kuat. Weaknesses (kelemahan) adalah kekurangan yang perlu diperbaiki, misalnya keterbatasan anggaran, kurikulum yang belum sepenuhnya terstruktur, atau minimnya program ekstrakurikuler. Opportunities (peluang) adalah faktor eksternal yang bisa dimanfaatkan, seperti dukungan pemerintah untuk pendidikan Islam, kemajuan teknologi, atau meningkatnya kesadaran orang tua akan pentingnya pendidikan agama. Threats (ancaman) adalah faktor eksternal yang berpotensi menghambat, seperti persaingan dari sekolah lain, perubahan kebijakan pemerintah, atau tekanan ekonomi yang membuat orang tua kesulitan membayar biaya sekolah. Dengan memahami keempatnya, sekolah bisa mengoptimalkan kekuatan, memperbaiki kelemahan, memanfaatkan peluang, dan mengantisipasi ancaman secara lebih strategis.</p>

  <h4>H. Five Forces (Porter's Five Forces)</h4>
  <p>Model Five Forces dari Michael Porter membantu sekolah memahami seberapa kuat persaingan di lingkungannya lewat lima kekuatan. Ancaman pendatang baru datang dari sekolah-sekolah baru dengan fasilitas atau biaya yang lebih menarik, yang bisa dihadapi dengan terus memperbaiki kualitas dan keunggulan yang sulit ditiru. Kekuatan pemasok berasal dari pihak penyedia fasilitas, materi ajar, atau pelatihan guru, yang bisa dikelola lewat kemitraan jangka panjang atau diversifikasi pemasok. Kekuatan pembeli datang dari orang tua dan siswa yang makin kritis dalam memilih sekolah, yang bisa dihadapi dengan memberikan pengalaman dan program yang lebih sesuai harapan mereka. Ancaman produk pengganti muncul dari kursus daring, aplikasi belajar, atau homeschooling, yang bisa direspons dengan mengintegrasikan teknologi dan menawarkan layanan unik seperti bimbingan konseling atau pengembangan karakter. Terakhir, persaingan antarkompetitor menuntut sekolah berinvestasi pada pelatihan guru, fasilitas, dan program khas seperti kelas tahfidz agar tetap menonjol di antara sekolah sejenis.</p>

  <h4>I. BSC (Balanced Scorecard)</h4>
  <p>Balanced Scorecard, dikembangkan oleh Robert Kaplan dan David Norton, membantu sekolah melihat pencapaiannya dari empat perspektif yang saling melengkapi, bukan hanya dari sisi keuangan. Perspektif keuangan memastikan kesehatan finansial sekolah, misalnya lewat efisiensi anggaran dan keberhasilan mendapatkan dana bantuan. Perspektif pelanggan -- dalam hal ini siswa dan orang tua -- menilai kepuasan mereka terhadap layanan pendidikan dan kualitas interaksi guru-siswa. Perspektif proses internal melihat efisiensi dan kualitas aktivitas inti sekolah seperti pembelajaran, kurikulum, dan bimbingan konseling. Perspektif pembelajaran dan pertumbuhan berfokus pada pengembangan guru dan staf lewat pelatihan dan sertifikasi. Sebagai contoh, jika tujuan strategis sekolah adalah menjadi "Lembaga Pendidikan Unggulan dengan Program Tahfidz dan Karakter yang Kuat", maka keempat perspektif itu diterjemahkan menjadi indikator efisiensi anggaran program tahfidz, kepuasan siswa dan orang tua terhadap program tersebut, kualitas kurikulum tahfidz dan bimbingan akhlak, serta jumlah guru berkompetensi khusus di bidang itu -- memastikan setiap sisi mendukung pencapaian visi secara optimal.</p>

  <h4>J. ISO (International Organization for Standardization)</h4>
  <p>ISO adalah badan internasional yang mengembangkan standar untuk memastikan kualitas, keamanan, dan efisiensi di berbagai sektor, termasuk pendidikan. Beberapa standar yang relevan bagi sekolah antara lain ISO 9001 untuk sistem manajemen mutu secara umum, ISO 21001 yang dirancang khusus untuk organisasi pendidikan, ISO 45001 untuk kesehatan dan keselamatan kerja seluruh warga sekolah, serta ISO 14001 untuk manajemen lingkungan seperti pengelolaan limbah dan konservasi air. Penerapan ISO di sekolah biasanya melalui penilaian awal untuk mengetahui sejauh mana standar sudah terpenuhi, pelatihan bagi guru dan staf, penetapan prosedur operasional baru, evaluasi dan audit internal, hingga akhirnya pengajuan sertifikasi. Manfaatnya mencakup jaminan kualitas, pengelolaan yang lebih terstruktur, kepuasan pemangku kepentingan, lingkungan belajar yang lebih aman, serta efisiensi dan penghematan sumber daya.</p>

  <h4>K. KPI (Key Performance Indicator)</h4>
  <p>Sebagai satu di antara ragam kerangka manajemen di bab ini, KPI sendiri berfungsi seperti "penunjuk arah" bagi sekolah untuk mencapai visinya, sekaligus menjaga transparansi dan akuntabilitas di hadapan orang tua dan pengelola. Contoh penerapannya mencakup KPI akademik (persentase kelulusan, peningkatan nilai rata-rata, prestasi tingkat kota atau nasional), KPI non-akademik (partisipasi ekstrakurikuler, kedisiplinan, keterlibatan sosial), KPI pengembangan guru dan staf (jumlah pelatihan, evaluasi kinerja, tingkat retensi guru), KPI kepuasan orang tua dan siswa, serta KPI keuangan. Langkah menerapkannya meliputi identifikasi tujuan sekolah, penentuan area kunci, penyusunan KPI berdasarkan tujuan dan area tersebut, evaluasi berkala, serta tindak lanjut dan perbaikan atas KPI yang belum tercapai -- semuanya disusun mengikuti prinsip SMART agar benar-benar efektif.</p>

  <h4>L. Model SMART</h4>
  <p>Model SMART -- Specific, Measurable, Achievable, Relevant, dan Time-bound -- adalah kerangka penetapan tujuan yang sangat berguna dan telah disinggung pada bab-bab sebelumnya. Sebagai gambaran penerapannya, sebuah sekolah yang ingin meningkatkan kualitas pengajaran bahasa Inggris bisa merumuskan: spesifik pada kemampuan berbicara siswa kelas 7, terukur lewat target 80% siswa mampu berbicara lancar pada akhir tahun ajaran, dapat dicapai lewat kursus tambahan mingguan, relevan karena memperkuat program bilingual yang menjadi bagian dari visi sekolah, dan berbatas waktu hingga akhir tahun ajaran di bulan Juni. Dengan model SMART, semua pihak -- kepala sekolah, guru, hingga siswa -- bisa memahami dengan jelas apa yang harus dicapai dan bagaimana cara mencapainya, sehingga pencapaian bisa dipantau dan motivasi tetap terjaga.</p>

  <h4>M. TQM (Total Quality Management)</h4>
  <p>TQM adalah filosofi manajemen yang berusaha meningkatkan kualitas dan kinerja organisasi dengan melibatkan semua orang, dari pimpinan hingga siswa. Prinsip dasarnya mencakup kepuasan pelanggan (siswa, orang tua, masyarakat) sebagai fokus utama, partisipasi semua anggota sekolah, peningkatan berkelanjutan, pendekatan proses yang memandang organisasi sebagai rangkaian proses yang saling terkait, serta keputusan yang didasarkan pada data dan pengukuran yang akurat. Langkah penerapannya meliputi penyusunan visi-misi terkait kualitas pendidikan, pelibatan seluruh pemangku kepentingan, pelatihan dan pengembangan tentang konsep TQM, identifikasi proses-proses kritis, pengukuran dan analisis data secara rutin, tindakan perbaikan berdasarkan analisis tersebut, serta evaluasi dan umpan balik berkelanjutan. TQM bukan hanya tentang mencapai hasil, tetapi tentang menciptakan budaya perbaikan berkelanjutan yang menguntungkan seluruh warga sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga belas model manajemen yang dibahas di bab ini, model mana yang paling relevan untuk dipadukan dengan KPI di sekolah Anda saat ini, dan bagian mana dari model tersebut yang paling mungkin mulai diterapkan bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Model manajemen yang dikembangkan oleh Michael Porter untuk memahami seberapa kuat persaingan di suatu sektor, termasuk ancaman pendatang baru dan produk pengganti, disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Five Forces (Lima Kekuatan Porter)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Balanced Scorecard</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Gap Analysis</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya mengevaluasi program barunya dari sisi keuangan saja, tanpa melihat kepuasan siswa-orang tua, efektivitas proses pembelajaran, maupun pengembangan kompetensi gurunya. Berdasarkan Bab 4, model manajemen apa yang paling tepat digunakan untuk memperbaiki cara evaluasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Balanced Scorecard (BSC), karena menilai organisasi dari empat perspektif yang saling melengkapi -- keuangan, pelanggan, proses internal, serta pembelajaran dan pertumbuhan -- bukan hanya dari sisi keuangan semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Gap Analysis, karena hanya berfokus pada kesenjangan anggaran semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Five Forces, karena hanya relevan untuk menganalisis persaingan antarsekolah</button>
  </div>
  <div class="quiz-q">
    <p>SMA Islam Ar-Rahman baru saja menjalankan program literasi selama satu semester. Kepala sekolah ingin memastikan siklus perbaikan program ini terus berjalan dari waktu ke waktu -- setiap selesai satu putaran evaluasi, ia ingin langsung merencanakan perbaikan berikutnya tanpa menunggu terlalu lama. Berdasarkan Bab 4, model manajemen berbasis siklus berkelanjutan yang paling sesuai untuk kebutuhan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">ISO 9001, karena hanya berfungsi untuk sertifikasi mutu tanpa siklus perbaikan berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">PDCA (Plan, Do, Check, Action), karena begitu satu siklus evaluasi dan tindakan selesai, sekolah bisa langsung memulai kembali dari tahap Plan dengan perbaikan yang sudah dilakukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">SWOT, karena hanya digunakan sekali di awal perencanaan tanpa pengulangan siklus</button>
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
<h2 class="reveal">Pengukuran dan Penilaian KPI</h2>
<p class="lede reveal">Menyusun KPI hanyalah separuh perjalanan -- separuh berikutnya adalah memastikan KPI itu benar-benar diukur dengan metode yang tepat, menggunakan alat yang sesuai, lalu diolah dan dilaporkan agar bisa menjadi dasar pengambilan keputusan.</p>

<div class="card reveal">
  <h4>A. Metode Pengukuran KPI yang Efektif</h4>
  <p>Pengukuran KPI bisa dilakukan lewat dua pendekatan utama yang saling melengkapi. Pengukuran kuantitatif menggunakan angka dan data statistik untuk menilai kinerja secara objektif, misalnya hasil ujian (berapa banyak siswa mendapat nilai di atas 75), tingkat kehadiran, atau jumlah pendaftaran siswa baru -- pendekatan ini memberikan data konkret yang bisa dibandingkan dari waktu ke waktu. Pengukuran kualitatif, sebaliknya, lebih fokus pada pengalaman, opini, dan persepsi lewat wawancara, survei, atau observasi -- seperti survei kepuasan siswa dan orang tua, wawancara mendalam dengan guru dan staf, atau observasi kelas untuk menilai interaksi guru-siswa. Pengukuran kualitatif memberikan wawasan yang lebih mendalam dan sering kali menjelaskan mengapa suatu hasil kuantitatif muncul.</p>
  <p>Selain kedua metode itu, rubrik penilaian menjadi alat yang sangat berguna karena memberikan kriteria yang jelas dan terstruktur untuk menilai berbagai aspek -- misalnya rubrik untuk menilai presentasi siswa yang mencakup kejelasan, kreativitas, dan pemahaman materi, lengkap dengan skala penilaian (1 hingga 5, misalnya) yang membuat penilaian lebih objektif dan konsisten antarguru maupun antarwaktu. Rubrik juga memungkinkan pemberian umpan balik yang lebih terperinci, sehingga siswa tahu di mana mereka unggul dan di mana perlu diperbaiki. Yang terpenting, tidak ada satu metode pun yang bisa dianggap paling unggul -- menggabungkan hasil ujian (kuantitatif) dengan survei kepuasan (kualitatif), misalnya, memberikan gambaran yang jauh lebih lengkap dibanding hanya mengandalkan satu metode saja.</p>

  <h4>B. Alat dan Instrumen Pengukuran</h4>
  <p>Untuk mengumpulkan data KPI secara efektif, sekolah bisa menggunakan beberapa alat. Kuesioner adalah alat yang paling sering dipakai karena mudah dikelola, bisa disebarkan secara cetak maupun digital lewat platform seperti Google Forms, dan bisa bersifat tertutup (pilihan ganda, mudah dianalisis) maupun terbuka (memberi ruang penjelasan lebih detail) -- kuesioner anonim bahkan membuat responden lebih nyaman memberi pendapat jujur, terutama untuk hal-hal yang bersifat kritik. Wawancara memungkinkan penggalian informasi lebih dalam lewat pertanyaan lanjutan dan pengamatan bahasa tubuh, meski membutuhkan lebih banyak waktu dan sumber daya dibanding kuesioner.</p>
  <p>Observasi memungkinkan pengamat mencatat langsung perilaku, interaksi, atau kegiatan di lingkungan pendidikan secara real-time, membantu memahami konteks di balik data KPI -- misalnya melihat langsung apakah metode pengajaran yang digunakan benar-benar sesuai kebutuhan siswa, meski perlu diwaspadai potensi bias dari pengamat jika tidak dicatat secara sistematis. Selain ketiga metode manual itu, kemajuan teknologi kini memungkinkan sekolah menggunakan software atau aplikasi penilaian kinerja yang mempercepat pengumpulan data secara real-time, memudahkan analisis lewat laporan visual seperti grafik, terintegrasi dengan sistem manajemen sekolah yang sudah ada, serta bisa diakses dari mana saja lewat aplikasi berbasis cloud. Kombinasi kuesioner, wawancara, observasi, dan teknologi inilah yang memberikan pendekatan paling komprehensif dalam menilai KPI sekolah.</p>

  <h4>C. Pengolahan Data dan Pelaporan Hasil</h4>
  <p>Setelah data terkumpul, langkah berikutnya adalah menganalisisnya secara sistematis. Proses ini dimulai dengan mengelompokkan data berdasarkan kategori atau jenis KPI (misalnya berdasarkan kelas atau jenis kelamin), menghitung nilai KPI menggunakan rumus yang sesuai (misalnya persentase kelulusan dihitung dari jumlah siswa lulus dibagi jumlah siswa terdaftar, dikali 100%), membandingkan hasilnya dengan target yang telah ditetapkan, memvisualisasikan data lewat grafik atau diagram agar lebih mudah dipahami, dan akhirnya mengidentifikasi masalah maupun peluang perbaikan dari hasil analisis tersebut.</p>
  <p>Hasil analisis kemudian disusun menjadi laporan kinerja dalam tiga jenjang waktu. Laporan bulanan berisi ringkasan hasil kinerja selama sebulan, mencakup data KPI, tren yang terlihat, dan langkah perbaikan yang diambil. Laporan triwulanan memberikan gambaran lebih luas dalam tiga bulan, termasuk analisis tren jangka menengah dan perbandingan dengan target triwulan sebelumnya. Laporan tahunan merangkum seluruh pencapaian dan tantangan selama setahun, membandingkannya dengan tahun sebelumnya, dan menjadi dasar penyusunan rencana kerja tahun berikutnya. Agar laporan ini benar-benar bermanfaat, ada beberapa prinsip yang perlu dipegang: gunakan bahasa yang sederhana agar mudah dipahami semua pembaca, susun dengan format yang jelas dan rapi, sertakan grafik dan tabel untuk memperkuat penjelasan, dan selalu cantumkan langkah tindak lanjut sebagai bukti komitmen sekolah untuk terus melakukan perbaikan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari metode pengukuran (kuantitatif, kualitatif, rubrik) dan alat (kuesioner, wawancara, observasi, software) yang dibahas di bab ini, kombinasi mana yang paling realistis untuk mulai diterapkan secara konsisten di sekolah Anda?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, metode pengukuran yang menggunakan angka dan data statistik untuk menilai kinerja secara objektif, seperti hasil ujian dan tingkat kehadiran, disebut pengukuran...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kuantitatif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kualitatif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Rubrik semata, tanpa data numerik apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya mengandalkan hasil ujian (data kuantitatif) untuk menilai keberhasilan program literasinya, tanpa pernah menanyakan langsung bagaimana pengalaman dan perasaan siswa selama mengikuti program tersebut. Berdasarkan Bab 5, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah kehilangan konteks dan alasan di balik angka yang muncul -- pengukuran kualitatif seperti survei kepuasan atau wawancara dibutuhkan untuk memahami mengapa suatu hasil kuantitatif terjadi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena data kuantitatif sudah cukup dan selalu menjadi metode terbaik untuk semua jenis KPI</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya adalah sekolah menjadi kelebihan data sehingga sebaiknya menghentikan pengukuran hasil ujian sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Tim KPI di sebuah sekolah Islam kesulitan menggabungkan data dari berbagai unit karena formatnya berbeda-beda dan laporan sering terlambat. Berdasarkan Bab 5, langkah paling tepat untuk mengatasi persoalan pengolahan data dan pelaporan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses pengumpulan data karena dianggap terlalu merepotkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengelompokkan data secara konsisten, menggunakan rumus perhitungan yang jelas, membandingkannya dengan target, memvisualisasikannya lewat grafik, lalu menyusun laporan berkala dengan bahasa sederhana dan tindak lanjut yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan setiap unit melaporkan data dengan format masing-masing tanpa standar bersama agar lebih fleksibel</button>
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
<h2 class="reveal">Penggunaan KPI untuk Meningkatkan Kinerja Guru dan Pengembangan Karakter Siswa</h2>
<p class="lede reveal">Salah satu kekuatan terbesar KPI di sekolah Islam adalah kemampuannya menjembatani dua hal yang sama pentingnya: kinerja guru sebagai penggerak proses belajar-mengajar, dan pengembangan karakter siswa sebagai tujuan akhir pendidikan Islam.</p>

<div class="card reveal">
  <h4>A. KPI untuk Pengembangan Kompetensi Guru</h4>
  <p>KPI pengembangan kompetensi guru bisa mencakup kualifikasi pendidikan (misalnya target 80% guru memiliki gelar master atau sertifikasi profesional), jumlah pelatihan yang diikuti (minimal dua pelatihan per tahun), peningkatan keterampilan mengajar setelah pelatihan, tingkat kepuasan siswa terhadap kualitas pengajaran, hingga jumlah inovasi baru yang diterapkan guru dalam pembelajaran setiap tahunnya. Ketercapaian KPI ini bisa diukur lewat survei dan kuesioner, observasi kelas langsung, rekam jejak pelatihan yang diikuti, evaluasi kinerja berkala oleh kepala sekolah maupun rekan sejawat, serta analisis data hasil belajar siswa sebelum dan sesudah guru mengikuti pelatihan tertentu. Dengan KPI yang jelas dan pengukuran yang efektif, sekolah bisa mendukung guru untuk terus berkembang, yang pada akhirnya turut membangun karakter siswa yang lebih baik.</p>

  <h4>B. KPI dalam Manajemen Kelas dan Pembelajaran</h4>
  <p>Manajemen kelas yang efektif bisa dipantau lewat berbagai indikator, seperti tingkat kehadiran siswa (target minimal 90% per semester), tingkat partisipasi siswa dalam diskusi dan kegiatan kelas, jumlah konflik atau gangguan yang terjadi (target di bawah 5 kejadian per bulan), konsistensi penerapan aturan kelas, hingga umpan balik siswa tentang pengelolaan kelas dan metode pengajaran. Selain manajemen kelas, pemantauan implementasi kurikulum juga penting dilakukan lewat evaluasi rencana pembelajaran, observasi kelas langsung, analisis hasil ujian dan penilaian siswa, pengumpulan data perkembangan siswa lewat portofolio, serta survei umpan balik dari guru tentang tantangan yang mereka hadapi dalam menjalankan kurikulum. Dengan KPI yang jelas di area ini, sekolah bisa mengidentifikasi area yang perlu diperbaiki sekaligus memotivasi guru untuk terus berinovasi dalam metode pengajarannya.</p>

  <h4>C. Meningkatkan Motivasi Guru melalui KPI</h4>
  <p>KPI juga bisa menjadi alat untuk memotivasi guru lewat tiga pilar utama. Feedback yang konstruktif -- baik berupa umpan balik positif atas kinerja yang baik, kritik yang membangun untuk area yang perlu diperbaiki, maupun rapat evaluasi berkala -- membuat guru merasa didengar dan dianggap penting. Penghargaan, seperti program "Guru Terbaik Bulan Ini", kesempatan mengikuti seminar atau pelatihan profesional, hingga penghargaan khusus atas kreativitas dalam pembelajaran, mendorong guru untuk terus berprestasi karena merasa dihargai. Insentif, baik berupa bonus finansial bagi guru yang mencapai atau melebihi target KPI, kesempatan meningkatkan jenjang karier, maupun waktu luang tambahan, menjadi dorongan konkret untuk berkinerja lebih baik. Ketiga pilar ini -- feedback, penghargaan, dan insentif -- ketika dijalankan bersamaan akan menciptakan lingkungan kerja yang lebih positif dan produktif, yang pada gilirannya berpengaruh langsung pada kualitas pengajaran dan perkembangan karakter siswa.</p>

  <h4>D. Pentingnya Karakter dalam Pendidikan Islam</h4>
  <p>Pendidikan dalam Islam bukan hanya soal penguasaan ilmu pengetahuan, tetapi juga penekanan pada pengembangan karakter. Tujuan utamanya adalah menciptakan individu yang seimbang secara intelektual maupun moral: menjadi pribadi yang berakhlak mulia sebagai cerminan iman, menumbuhkan kesadaran spiritual agar siswa selalu mengingat Allah dalam bertindak dan mengambil keputusan, mendorong kemandirian dan tanggung jawab agar siswa tidak selalu bergantung pada orang lain, serta membangun kepedulian sosial agar siswa menjadi agen perubahan yang positif di masyarakat. Sekolah Islam biasanya menetapkan sejumlah karakter utama yang ingin dicapai: kejujuran (amanah) sebagai fondasi kepercayaan diri dan hubungan sosial yang sehat, disiplin dalam belajar dan beribadah, kesabaran dalam menghadapi tantangan, toleransi dalam menghormati perbedaan, empati untuk memahami dan membantu sesama, serta kemandirian dalam berpikir dan bertindak.</p>

  <h4>E. Contoh KPI untuk Pengembangan Karakter Siswa</h4>
  <p>Agar pengembangan karakter tidak sekadar menjadi harapan abstrak, sekolah perlu indikator yang jelas untuk mengukurnya. Untuk kejujuran, KPI bisa berupa frekuensi siswa melaporkan kesalahan yang mereka temui, partisipasi dalam kegiatan atau kampanye anti-kecurangan (misalnya komitmen tidak menyontek saat ujian), serta refleksi diri siswa lewat esai tentang pentingnya kejujuran. Untuk kedisiplinan, KPI bisa berupa tingkat kehadiran siswa, kepatuhan terhadap aturan sekolah seperti aturan berpakaian dan waktu masuk, serta ketepatan waktu dalam mengumpulkan tugas dan pekerjaan rumah. Untuk tanggung jawab, KPI bisa berupa penilaian peran siswa dalam pengelolaan proyek kelompok, partisipasi aktif dalam kegiatan sekolah seperti ekstrakurikuler dan pengabdian masyarakat, serta refleksi diri siswa tentang pengalaman bertanggung jawab yang mereka jalani. Dengan KPI seperti ini, guru dan sekolah bisa merancang program yang lebih efektif untuk mendukung pengembangan karakter siswa secara nyata, bukan sekadar slogan.</p>

  <h4>F. Evaluasi Karakter melalui KPI</h4>
  <p>Penilaian karakter memang tidak semudah menilai angka ujian karena sifatnya yang subjektif, tetapi dengan pendekatan yang tepat gambaran perkembangan karakter siswa tetap bisa diperoleh secara lebih objektif. Teknik yang bisa digunakan mencakup observasi langsung terhadap perilaku siswa di dalam maupun di luar kelas, kuesioner dan survei berisi pertanyaan tentang nilai-nilai karakter, refleksi diri lewat jurnal atau esai tentang pengalaman yang menguji karakter mereka, serta portofolio yang mengumpulkan bukti perilaku dan pencapaian siswa dari berbagai kegiatan. KPI dalam pendidikan karakter memberi pengaruh positif yang nyata: memberikan tujuan yang jelas bagi siswa tentang apa yang diharapkan dari mereka, mendorong tanggung jawab atas tindakan mereka sendiri, membuka ruang umpan balik yang konstruktif dari guru, meningkatkan kesadaran diri siswa tentang area yang perlu mereka kembangkan, serta menciptakan lingkungan sekolah yang lebih positif dan saling mendukung dalam mencapai tujuan karakter bersama.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari indikator kejujuran, kedisiplinan, dan tanggung jawab yang dibahas pada bagian E, indikator mana yang paling relevan untuk mulai diterapkan secara konsisten di kelas atau sekolah Anda, dan bagaimana cara mengukurnya secara sederhana?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, tiga pilar utama yang bisa digunakan untuk meningkatkan motivasi guru melalui KPI adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Feedback, penghargaan, dan insentif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hukuman, teguran, dan pengurangan gaji</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Rapat, laporan, dan absensi semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa KPI hanya menjadi alat pengawasan yang menekan karena setiap hasil kerjanya hanya dikritik tanpa pernah diapresiasi ketika berhasil. Berdasarkan Bab 6, apa yang sebaiknya diperbaiki oleh sekolah dalam penerapan KPI untuk guru ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyeimbangkan feedback konstruktif dengan penghargaan dan insentif yang layak, sehingga guru merasa dihargai, bukan hanya diawasi dan dikritik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh sistem KPI untuk guru karena dianggap selalu bersifat menekan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah lebih banyak kritik agar guru semakin terpacu untuk bekerja lebih keras</button>
  </div>
  <div class="quiz-q">
    <p>MTs Al-Amin ingin mengukur perkembangan kejujuran siswanya, tetapi bingung karena karakter dianggap terlalu abstrak untuk diukur seperti nilai ujian. Berdasarkan Bab 6, pendekatan paling tepat yang bisa diambil sekolah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu mengukur kejujuran sama sekali karena karakter tidak mungkin dikuantifikasi dalam bentuk apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan kombinasi indikator konkret seperti frekuensi pelaporan kesalahan, partisipasi dalam kampanye anti-kecurangan, dan refleksi diri siswa, dipadukan dengan observasi langsung dan portofolio</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya mengandalkan satu kali tes tertulis tentang definisi kejujuran di akhir semester sebagai satu-satunya indikator</button>
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
<h2 class="reveal">Implementasi dan Monitoring KPI di Sekolah Islam</h2>
<p class="lede reveal">Menyusun KPI di atas kertas jauh lebih mudah daripada menjalankannya secara konsisten. Bab ini membahas bagaimana KPI diimplementasikan langkah demi langkah, siapa yang harus mengawal prosesnya, bagaimana sistem monitoring dan review dijalankan, kendala apa saja yang biasa muncul beserta solusinya, dan bagaimana wujud nyatanya lewat tiga studi kasus sekolah Islam.</p>

<div class="card reveal">
  <h4>A. Tahapan Implementasi KPI di Sekolah</h4>
  <p>Implementasi KPI adalah proses menerjemahkan rencana menjadi tindakan yang terukur -- banyak sekolah berhenti di fase penyusunan indikator, padahal implementasi membutuhkan perencanaan, komunikasi, kapabilitas tim, monitoring, dan penyesuaian secara rutin. Prosesnya bisa dijalankan lewat sepuluh langkah bertahap. Sekolah memulai dengan persiapan organisasi (membangun kesiapan mental dan struktural, menetapkan sponsor serta tim kecil pengawal KPI), lalu memvalidasi visi, misi, dan sasaran strategis agar KPI benar-benar terhubung dengan prioritas sekolah. Langkah berikutnya adalah penyusunan KPI secara co-creation bersama tiap unit menggunakan prinsip SMART, dilanjutkan dengan menyiapkan sistem pengumpulan dan pengolahan data yang valid dan mudah diakses, serta memberikan pelatihan dan pendampingan bagi tim agar mereka mampu mengisi, membaca, dan menindaklanjuti data KPI.</p>
  <p>Setelah persiapan matang, sekolah meluncurkan sistem KPI secara resmi lewat komunikasi internal yang jelas, lalu masuk ke tahap paling krusial: monitoring rutin dan review lewat rapat bulanan singkat yang membahas capaian, penyebab kesenjangan, solusi, penanggung jawab, dan tenggat waktu. Hasil monitoring itu perlu ditindaklanjuti secara nyata -- bukan sekadar laporan -- lewat implementasi rencana aksi dan revisi KPI jika terbukti tidak relevan. Di penghujung siklus, sekolah melakukan evaluasi komprehensif dan mendokumentasikan pembelajarannya sebagai studi kasus internal, lalu yang terpenting, membudayakan KPI dalam jangka panjang dengan mengaitkannya pada mekanisme penghargaan dan mengintegrasikannya ke proses SDM. Beberapa kesalahan umum yang perlu dihindari antara lain menyusun terlalu banyak KPI (sebaiknya dibatasi 8-12 KPI utama), KPI yang tidak jelas definisinya, data yang tidak tervalidasi, dan tidak adanya tindak lanjut setelah monitoring. Kunci keberhasilan tahapan ini terletak pada kolaborasi, kesederhanaan, konsistensi monitoring, dan tindak lanjut yang benar-benar nyata.</p>

  <h4>B. Peran Pimpinan dan Tim dalam Pengawalan KPI</h4>
  <p>KPI yang bagus tidak akan berjalan sendiri -- ia membutuhkan "roh penggerak" berupa pimpinan sekolah dan tim pelaksana yang memahami arah, peran, dan tanggung jawabnya. Kepala sekolah berperan sebagai penentu arah strategis yang memastikan setiap KPI berakar dari visi-misi sekolah, sekaligus menjadi "tone setter" yang membangun budaya akuntabilitas lewat keteladanan dalam memantau capaian dan menyebutkan hasil KPI di forum resmi. Pimpinan yang efektif juga mengintegrasikan KPI ke dalam pengambilan keputusan sehari-hari -- misalnya merujuk data kehadiran dan kepuasan siswa saat mengevaluasi guru -- serta hadir secara rutin dalam rapat monitoring sebagai pengingat moral bahwa KPI adalah hal penting.</p>
  <p>Jika pimpinan adalah navigator, wakil kepala dan kepala unit adalah pilot di lapangan yang menerjemahkan KPI lembaga menjadi target kerja harian, mengawal validitas data dari unitnya, dan mendorong pemecahan masalah secara cepat begitu ditemukan indikator yang rendah -- prinsipnya adalah "temukan, tangani, tindaklanjuti", bukan menunggu evaluasi tahunan. Tim pengawal KPI, biasanya terdiri dari koordinator litbang/mutu, perwakilan tiap unit, dan admin data, berfungsi sebagai penjaga ritme implementasi: menjaga konsistensi jadwal monitoring, menyediakan data yang valid, dan menyiapkan laporan bagi pimpinan dan yayasan -- posisi mereka bukan sebagai auditor yang menghakimi, melainkan fasilitator yang membantu setiap unit memahami datanya sendiri. Guru dan staf, di sisi lain, perlu dilibatkan sebagai pemilik data kinerjanya sendiri, bukan sekadar pelaksana yang diawasi, sehingga muncul rasa memiliki terhadap sistem peningkatan kinerja sekolah. Dalam konteks sekolah Islam, pengawalan KPI juga perlu dilandasi nilai amanah dalam menjaga keakuratan data, tanggung jawab tanpa mencari kambing hitam, musyawarah dalam evaluasi yang terbuka, dan ihsan yang mendorong perbaikan terus-menerus karena kesadaran spiritual, bukan sekadar karena diawasi.</p>

  <h4>C. Sistem Monitoring dan Review Bulanan/Tahunan</h4>
  <p>Sistem KPI tanpa mekanisme monitoring ibarat kompas tanpa pelaut. Karena itu, sekolah perlu memiliki monitoring bulanan yang memantau progres dan memastikan kegiatan berjalan sesuai target, serta review tahunan yang mengevaluasi hasil akhir, tren, dan strategi secara keseluruhan bersama pimpinan dan yayasan. Tiga prinsip dasar monitoring yang efektif adalah konsistensi (lebih baik sederhana tapi rutin daripada kompleks tapi jarang), keterbukaan (semua pihak boleh melihat data capaian), dan aksi nyata (setiap rapat harus menghasilkan keputusan tindak lanjut). Rapat monitoring bulanan idealnya berdurasi 45-60 menit dengan agenda tetap: pembukaan singkat, presentasi capaian KPI per unit, identifikasi kesenjangan, analisis penyebab, penetapan langkah korektif beserta penanggung jawabnya, dan dokumentasi hasil rapat.</p>
  <p>Review tahunan, dengan durasi 2-3 jam dan melibatkan seluruh kepala unit serta perwakilan yayasan, bertujuan mengevaluasi capaian keseluruhan, menganalisis tren dari periode sebelumnya, dan menentukan arah prioritas KPI tahun berikutnya -- hasilnya dituangkan dalam laporan berisi ringkasan capaian, analisis penyebab deviasi dan faktor pendukung, serta rekomendasi strategis. Agar sistem ini berjalan, sekolah perlu mendokumentasikan notulen rapat dan rekap rencana aksi, menggunakan sistem pengingat sederhana seperti kalender bersama atau grup WhatsApp tim KPI, serta membiasakan setiap rapat monitoring dimulai dengan mengecek tindak lanjut dari rapat sebelumnya untuk menjaga akuntabilitas. Yang membuat pendekatan ini semakin bermakna bagi sekolah Islam adalah dimensi muhasabahnya -- setiap rapat monitoring menjadi momen untuk menilai apakah kerja yang dilakukan sudah menjadi amal terbaik (ihsan), sehingga evaluasi bukan sekadar formalitas administratif, melainkan ibadah reflektif yang menumbuhkan semangat memperbaiki diri.</p>

  <h4>D. Kendala Umum dalam Penerapan KPI dan Cara Mengatasinya</h4>
  <p>Menerapkan KPI mengubah budaya kerja dari yang berbasis niat baik dan rutinitas menjadi berbasis tujuan, data, dan evaluasi -- perubahan seperti ini wajar memunculkan tantangan, dan kendala bukan tanda kegagalan melainkan sinyal bahwa sistem sedang bergerak menuju kedewasaan manajerial. Pada aspek mindset dan budaya kerja, tantangan yang sering muncul adalah minimnya pemahaman (KPI dianggap beban atau alat pengawasan), yang bisa diatasi lewat edukasi sejak awal dan bahasa yang tidak terkesan menakutkan, serta budaya kerja yang belum berbasis data, yang bisa diatasi dengan memulai dari data sederhana dan menunjukkan hasil nyata (quick win) agar guru merasa memiliki proses tersebut.</p>
  <p>Pada aspek teknis dan administratif, kendala umum meliputi data yang tersebar di banyak tempat tanpa sistem terintegrasi (solusinya: gunakan satu sistem data sederhana dan tetapkan penanggung jawab data di tiap unit), target yang tidak realistis karena terlalu ambisius (solusinya: terapkan prinsip SMART dan mulai dari baseline moderat), serta pengumpulan data yang tidak disiplin (solusinya: buat pengingat otomatis dan tetapkan tenggat waktu bulanan yang jelas). Pada aspek kepemimpinan, minimnya keterlibatan pimpinan setelah sosialisasi awal bisa membuat tim kehilangan arah, sehingga pimpinan perlu hadir minimal di rapat review triwulan; sementara tidak adanya evaluasi lintas unit bisa diatasi dengan rapat lintas unit setiap kuartal agar KPI menjadi jembatan kolaborasi, bukan pembanding yang memicu persaingan tidak sehat.</p>
  <p>Pada aspek sumber daya, kekurangan waktu dan SDM bisa diatasi dengan menyederhanakan jumlah KPI (maksimal 10 KPI utama) dan menggunakan template otomatis, sementara kurangnya pelatihan bisa diatasi lewat sesi refreshing singkat di awal tahun ajaran. Pada aspek psikologis dan sosial, rasa takut dievaluasi perlu dijawab dengan pendekatan coaching yang berfokus pada perbaikan proses, bukan mencari siapa yang salah, sementara rendahnya rasa memiliki bisa ditumbuhkan lewat pelibatan guru dalam menentukan indikator sejak awal (co-creation) dan publikasi hasil capaian secara transparan. Terakhir, pada aspek keberlanjutan, semangat KPI yang biasanya tinggi di awal lalu menurun setelah beberapa bulan bisa dijaga dengan menjadikan monitoring bagian dari agenda wajib dan mengaitkannya dengan laporan resmi ke yayasan, sementara risiko sistem hilang akibat pergantian personel bisa dicegah dengan mendokumentasikan seluruh prosedur dalam SOP tertulis yang mudah diwariskan ke tim baru.</p>

  <h4>E. Studi Kasus Implementasi KPI di Sekolah Islam</h4>
  <p>Tiga studi kasus berikut menggambarkan bagaimana KPI diterapkan pada tingkat kesiapan yang berbeda. Sekolah Islam Al-Hikmah, sebuah SD dengan 250 siswa dan 18 guru, memulai dari yang sederhana: setelah pelatihan awal, sekolah membentuk tim pengawal KPI dan menyusun delapan KPI dasar seperti kehadiran guru minimal 95%, peningkatan nilai rata-rata ujian minimal 3 poin, dan kepuasan orang tua minimal 80%, dikumpulkan lewat Google Form dan Excel bersama. Tantangan awal berupa kesulitan guru memahami istilah "indikator" dan "target" diatasi dengan lembar kerja bergambar dan bahasa sederhana, sementara survei kepuasan orang tua dilakukan lewat WhatsApp agar lebih mudah dijangkau. Setelah satu tahun, tujuh dari delapan KPI tercapai, guru menjadi lebih disiplin, dan rapat evaluasi bulanan menjadi lebih terarah karena berbasis data -- pelajaran utamanya: "mulailah dari yang sederhana, tapi konsisten."</p>
  <p>SMP Islam Al-Furqan, dengan 420 siswa dan 30 guru, sudah memiliki dokumen KPI sejak dua tahun sebelumnya namun tidak berjalan efektif karena tidak ada jadwal monitoring tetap. Pimpinan baru kemudian menetapkan kebijakan monitoring bulanan dengan format rapat tetap (10 menit laporan capaian, 10 menit pembahasan deviasi, 10 menit penetapan tindakan perbaikan) dan dashboard sederhana untuk menampilkan capaian tiap unit. Setelah mengatasi tantangan disiplin kehadiran rapat dan keterlambatan data digital lewat kebijakan wajib dan form otomatis, hasil setelah satu tahun menunjukkan 90% unit rutin melaporkan data, koordinasi antarunit meningkat, dan hasil KPI mulai dipakai untuk menentukan prioritas pelatihan guru dan pembagian anggaran -- pelajaran utamanya: "konsistensi monitoring lebih penting daripada kesempurnaan sistem." Sementara itu, SMA Islam An-Nur yang sudah memiliki unit Litbang mengintegrasikan KPI ke dalam empat klaster (mutu akademik, SDM dan pelatihan guru, hubungan dengan orang tua dan masyarakat, serta keuangan dan efisiensi operasional) yang dipantau lewat dashboard daring dan dimasukkan ke Rencana Strategis Sekolah. Setelah mengatasi tantangan validitas data lintas unit lewat SOP pelaporan dan rapat koordinasi rutin, sekolah ini mampu memprediksi tren penurunan prestasi siswa lebih dini dan menjadikan KPI bagian dari laporan strategis tahunan -- pelajaran utamanya: "KPI menjadi kuat ketika terhubung dengan sistem Litbang, dari sekadar angka menjadi bahan riset dan perbaikan berkelanjutan."</p>
  <p>Dari ketiga kasus itu, ada benang merah yang sama: komitmen pimpinan sebagai penggerak utama, keterlibatan tim dalam setiap proses agar KPI yang dibuat bersama dijaga bersama, kedisiplinan dalam monitoring -- sekolah yang berhasil bukan yang paling canggih sistemnya, melainkan yang paling konsisten menjalankan rapat bulanan -- serta makna spiritual dalam evaluasi, di mana monitoring bukan sekadar laporan, tetapi bagian dari muhasabah yang menilai sejauh mana kerja sekolah menjadi amal jariyah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga studi kasus (Al-Hikmah yang baru memulai, Al-Furqan yang membangun budaya evaluasi, dan An-Nur yang mengintegrasikan KPI dengan Litbang), tahap mana yang paling menggambarkan kondisi sekolah Anda saat ini, dan langkah konkret apa yang bisa diambil untuk naik ke tahap berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, jumlah KPI utama yang idealnya dibatasi agar tim tidak kewalahan dalam implementasi adalah sekitar...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">8-12 KPI utama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">50-60 KPI utama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada batasan sama sekali, semakin banyak semakin baik</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah sudah menyusun KPI dengan baik dan mengadakan sosialisasi di awal tahun ajaran, tetapi kepala sekolah sepenuhnya menyerahkan seluruh proses berikutnya kepada tim KPI tanpa pernah hadir lagi di rapat monitoring. Berdasarkan Bab 7, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tim kehilangan arah dan implementasi KPI hanya menjadi rutinitas administratif, karena keterlibatan pimpinan sebagai penentu arah dan penjaga fokus sangat menentukan keberhasilan pengawalan KPI</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun, karena tim KPI seharusnya bisa berjalan sepenuhnya tanpa keterlibatan pimpinan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Implementasi justru akan lebih efektif karena pimpinan tidak perlu terlibat sama sekali dalam proses monitoring</button>
  </div>
  <div class="quiz-q">
    <p>SD Islam Baiturrahim baru mulai menerapkan KPI dan khawatir gagal seperti sekolah lain yang KPI-nya berhenti setelah beberapa bulan. Berdasarkan studi kasus dan pelajaran utama pada Bab 7, strategi paling tepat yang bisa mereka tiru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menyusun puluhan KPI yang mencakup seluruh aspek sekolah sejak bulan pertama agar terlihat komprehensif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memulai dari beberapa KPI sederhana yang mudah dipahami, menjaga konsistensi monitoring bulanan, dan melibatkan pimpinan serta guru secara aktif -- seperti yang dilakukan Sekolah Al-Hikmah dan Al-Furqan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu hingga sekolah memiliki unit Litbang seperti SMA An-Nur sebelum mulai menerapkan KPI sama sekali</button>
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
<h2 class="reveal">Kesimpulan dan Rekomendasi</h2>
<p class="lede reveal">Setelah menjelajahi konsep, prinsip, ragam kerangka manajemen, metode pengukuran, penerapan pada guru dan karakter siswa, hingga implementasi dan monitoringnya, bab penutup ini merangkum poin-poin kunci sekaligus memberikan rekomendasi praktis agar KPI benar-benar hidup di sekolah Islam.</p>

<div class="card reveal">
  <h4>A. Kesimpulan</h4>
  <p>Sepanjang pembahasan buku ini, KPI terbukti berfungsi sebagai panduan untuk mengukur dan mengevaluasi kinerja, baik bagi guru maupun siswa -- dengan indikator yang jelas, sekolah bisa memahami sejauh mana tujuan pendidikan tercapai, sehingga pengambilan keputusan dan perbaikan berkelanjutan menjadi lebih terarah. Ragam manajemen pengelolaan seperti POAC, ADARR, dan PDCA memberikan kerangka kerja yang memperkaya cara sekolah merencanakan, melaksanakan, dan mengevaluasi kegiatannya, sementara teknik pengukuran yang efektif -- baik kualitatif maupun kuantitatif, didukung alat seperti kuesioner, observasi, dan perangkat lunak penilaian -- memberikan pemahaman yang lebih baik tentang kinerja dan karakter siswa.</p>
  <p>Pengembangan karakter siswa juga ditegaskan sama pentingnya dengan pencapaian akademik: menggunakan KPI untuk mengevaluasi aspek seperti kejujuran, kedisiplinan, dan tanggung jawab membantu menciptakan siswa yang tidak hanya pintar, tetapi juga bermoral. KPI turut berfungsi sebagai alat motivasi guru lewat umpan balik konstruktif dan penghargaan yang layak, sekaligus mendorong integrasi pendidikan karakter ke dalam kurikulum secara menyeluruh, bukan sekadar konten akademis yang berdiri sendiri. Dengan seluruh kesimpulan ini, jelas bahwa penerapan KPI dalam pendidikan memiliki banyak manfaat, namun untuk mencapai hasil maksimal dibutuhkan komitmen dari semua pihak -- guru, siswa, orang tua, dan manajemen sekolah -- untuk bersama-sama menciptakan lingkungan belajar yang mendukung pengembangan karakter sekaligus pencapaian akademik.</p>

  <h4>B. Rekomendasi</h4>
  <p>Setelah mengeksplorasi seluruh aspek penggunaan KPI dalam pendidikan, ada beberapa rekomendasi yang bisa membantu guru, manajemen sekolah, dan pihak terkait menerapkan KPI secara efektif. Pertama, sediakan pelatihan dan penyuluhan bagi guru agar mereka memahami cara KPI berfungsi dan bagaimana mengintegrasikan pendidikan karakter ke dalam pengajaran sehari-hari. Kedua, kembangkan KPI yang jelas dan terukur -- untuk pengembangan karakter, misalnya, tetapkan indikator konkret untuk kejujuran, kedisiplinan, dan tanggung jawab lengkap dengan cara mengukurnya, bukan sekadar harapan yang abstrak.</p>
  <p>Ketiga, lakukan evaluasi secara rutin lewat rapat bulanan atau triwulanan untuk membahas pencapaian KPI, sehingga sekolah bisa mengidentifikasi area yang perlu ditingkatkan dan menyusun rencana aksi perbaikan tanpa menunggu akhir tahun. Keempat, libatkan siswa dalam proses evaluasi -- ajak mereka memberikan umpan balik tentang pengalaman belajar dan perasaan mereka terhadap pengembangan karakter, sehingga mereka memiliki rasa kepemilikan dan tanggung jawab terhadap pendidikan mereka sendiri. Kelima, bangun sistem penghargaan bagi pencapaian KPI, baik untuk guru maupun siswa, misalnya lewat pengakuan di depan kelas atau forum sekolah, karena penghargaan yang tepat terbukti mampu meningkatkan motivasi secara signifikan. Dengan menjalankan kelima rekomendasi ini secara konsisten, sekolah Islam bisa menjadikan KPI bukan sekadar dokumen administratif, melainkan alat nyata untuk terus meningkatkan kualitas pendidikan dan membentuk generasi yang unggul secara akademik sekaligus mulia secara akhlak.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari seluruh perjalanan buku ini -- mulai dari konsep dasar KPI hingga studi kasus implementasinya -- satu langkah paling konkret apa yang akan Anda mulai terapkan di sekolah Anda bulan depan, dan siapa yang perlu dilibatkan agar langkah itu benar-benar berjalan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut rekomendasi pada Bab 8, agar siswa memiliki rasa kepemilikan dan tanggung jawab terhadap pendidikan mereka sendiri, sekolah sebaiknya...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melibatkan siswa dalam proses evaluasi, misalnya dengan mengajak mereka memberi umpan balik tentang pengalaman belajar dan pengembangan karakter mereka</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyembunyikan seluruh hasil evaluasi dari siswa agar mereka tidak merasa terbebani</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan seluruh proses evaluasi karakter sepenuhnya kepada orang tua tanpa keterlibatan siswa</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah sudah menerapkan KPI dengan baik dari sisi akademik, tetapi guru masih merasa pendidikan karakter adalah tanggung jawab pelajaran agama saja, bukan seluruh mata pelajaran. Berdasarkan kesimpulan Bab 8, apa yang sebenarnya perlu diluruskan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendidikan karakter perlu diintegrasikan menyeluruh ke dalam kurikulum di semua mata pelajaran, bukan berdiri sendiri sebagai konten akademis milik satu mata pelajaran saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pandangan guru sudah benar sepenuhnya, karena karakter memang hanya relevan diajarkan lewat pelajaran agama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya menghapus KPI akademik dan hanya fokus pada KPI karakter semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah baru ingin memulai penerapan KPI dari nol, dan bertanya kepada tim mana yang sebaiknya dilibatkan agar hasilnya benar-benar berdampak, bukan sekadar dokumen di atas kertas. Berdasarkan keseluruhan isi buku ini, jawaban paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup dikerjakan sendiri oleh kepala sekolah tanpa melibatkan guru, staf, siswa, maupun orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melibatkan seluruh pihak secara kolaboratif -- guru, siswa, orang tua, dan manajemen sekolah -- karena keberhasilan KPI bergantung pada komitmen bersama, bukan hanya keputusan satu pihak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan seluruhnya kepada pihak eksternal atau konsultan tanpa keterlibatan warga sekolah sama sekali</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab8" onclick="markDone('bab8')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab8">✓ Bab 8 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

asesmen: `
<p class="eyebrow reveal">Evaluasi</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab. Jawaban tidak akan langsung diperlihatkan -- jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, KPI paling tepat diibaratkan sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">"Petunjuk jalan" atau "kompas" yang memastikan setiap aspek sekolah berjalan sesuai rencana dan bisa dinilai hasilnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Daftar tata tertib yang wajib dihafal siswa dan guru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dokumen administratif yang hanya dibuat untuk keperluan akreditasi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam menghadapi keterbatasan anggaran, gaji guru yang belum kompetitif, dan persaingan ketat dari sekolah swasta baru di sekitarnya. Berdasarkan Bab 1, langkah paling tepat yang bisa diambil pimpinan sekolah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu kondisi keuangan membaik dengan sendirinya sebelum mulai berbenah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan KPI untuk memetakan prioritas -- menentukan apakah sumber daya terbatas sebaiknya lebih dulu diarahkan ke pelatihan guru, fasilitas, atau keunggulan program tertentu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menutup seluruh program ekstrakurikuler agar bisa fokus bersaing dari sisi fasilitas fisik saja</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Menurut Bab 2, istilah KPI dibentuk dari tiga kata kunci, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kualitas, Prestasi, dan Integritas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kinerja, Program, dan Insentif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Key, Performance, dan Indicator</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah mencatat "jumlah siswa yang mengumpulkan tugas tepat waktu setiap hari" sebagai data rutin, namun data ini hanya bermanfaat sebagai pendukung harian dan tidak langsung mencerminkan pencapaian tujuan besar sekolah. Berdasarkan Bab 2, data semacam ini paling tepat disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">KPI utama, karena semua data yang dikumpulkan sekolah otomatis menjadi KPI</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metrik biasa, karena tidak semua metrik adalah KPI -- KPI adalah metrik yang terkait langsung dengan tujuan utama dan memiliki prioritas tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Data yang harus segera dihapus karena tidak memiliki manfaat apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menetapkan KPI "meningkatkan kualitas pendidikan" tanpa angka, tanpa target waktu, dan tanpa kaitan jelas dengan visi-misinya. Berdasarkan prinsip SMART pada Bab 3, unsur apa yang paling jelas belum terpenuhi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Specific, Measurable, dan Time-bound -- KPI tersebut masih terlalu umum, tidak memiliki angka terukur, dan tidak memiliki batas waktu yang jelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang kurang, karena KPI tersebut sudah cukup jelas untuk langsung dijalankan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya unsur Relevant yang kurang, sementara unsur lainnya sudah lengkap</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>SDIT Cahaya Ummat memiliki visi "Terdepan, Qurani, dan Humanis" namun kesulitan menerjemahkannya menjadi program kerja tahunan yang konkret. Berdasarkan Bab 3, langkah paling tepat yang bisa ditempuh sekolah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan visi tetap menjadi slogan di dinding sekolah tanpa diturunkan lebih lanjut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menguraikan visi menjadi beberapa misi konkret, menurunkan tiap misi menjadi tujuan/renstra yang lebih spesifik, lalu merumuskan KPI terukur untuk setiap tujuan tersebut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti visi sekolah setiap tahun agar selalu terasa baru</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Model manajemen yang dikembangkan oleh Michael Porter untuk memahami seberapa kuat persaingan di suatu sektor, termasuk ancaman pendatang baru dan produk pengganti, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Five Forces (Lima Kekuatan Porter)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Balanced Scorecard</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gap Analysis</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah hanya mengevaluasi program barunya dari sisi keuangan saja, tanpa melihat kepuasan siswa-orang tua, efektivitas proses pembelajaran, maupun pengembangan kompetensi gurunya. Berdasarkan Bab 4, model manajemen apa yang paling tepat digunakan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Balanced Scorecard (BSC), karena menilai organisasi dari empat perspektif yang saling melengkapi, bukan hanya sisi keuangan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gap Analysis, karena hanya berfokus pada kesenjangan anggaran semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Five Forces, karena hanya relevan untuk menganalisis persaingan antarsekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>SMA Islam Ar-Rahman ingin memastikan siklus perbaikan program literasinya terus berjalan -- setiap selesai satu putaran evaluasi, ia ingin langsung merencanakan perbaikan berikutnya. Berdasarkan Bab 4, model manajemen berbasis siklus berkelanjutan yang paling sesuai adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">ISO 9001, karena hanya berfungsi untuk sertifikasi mutu tanpa siklus perbaikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">PDCA (Plan, Do, Check, Action), karena begitu satu siklus selesai, sekolah bisa langsung memulai kembali dari tahap Plan dengan perbaikan yang sudah dilakukan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">SWOT, karena hanya digunakan sekali di awal perencanaan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah hanya mengandalkan hasil ujian (data kuantitatif) untuk menilai keberhasilan program literasinya, tanpa pernah menanyakan langsung pengalaman dan perasaan siswa. Berdasarkan Bab 5, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah kehilangan konteks dan alasan di balik angka yang muncul -- pengukuran kualitatif dibutuhkan untuk memahami mengapa suatu hasil kuantitatif terjadi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena data kuantitatif selalu menjadi metode terbaik untuk semua jenis KPI</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya adalah sekolah menjadi kelebihan data sehingga sebaiknya menghentikan pengukuran hasil ujian</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Tim KPI di sebuah sekolah Islam kesulitan menggabungkan data dari berbagai unit karena formatnya berbeda-beda dan laporan sering terlambat. Berdasarkan Bab 5, langkah paling tepat untuk mengatasinya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh proses pengumpulan data karena dianggap terlalu merepotkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengelompokkan data secara konsisten, menggunakan rumus perhitungan yang jelas, membandingkannya dengan target, dan menyusun laporan berkala dengan tindak lanjut yang jelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan tiap unit melaporkan data dengan format masing-masing tanpa standar bersama</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, tiga pilar utama yang bisa digunakan untuk meningkatkan motivasi guru melalui KPI adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Feedback, penghargaan, dan insentif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hukuman, teguran, dan pengurangan gaji</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Rapat, laporan, dan absensi semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru merasa KPI hanya menjadi alat pengawasan yang menekan karena hasil kerjanya hanya dikritik tanpa pernah diapresiasi ketika berhasil. Berdasarkan Bab 6, apa yang sebaiknya diperbaiki sekolah?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyeimbangkan feedback konstruktif dengan penghargaan dan insentif yang layak, sehingga guru merasa dihargai, bukan hanya diawasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh sistem KPI untuk guru karena dianggap selalu bersifat menekan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah lebih banyak kritik agar guru semakin terpacu bekerja keras</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>MTs Al-Amin ingin mengukur perkembangan kejujuran siswanya, tetapi bingung karena karakter dianggap terlalu abstrak untuk diukur seperti nilai ujian. Berdasarkan Bab 6, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu mengukur kejujuran sama sekali karena karakter tidak mungkin dikuantifikasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan kombinasi indikator konkret seperti frekuensi pelaporan kesalahan, partisipasi dalam kampanye anti-kecurangan, dan refleksi diri siswa, dipadukan dengan observasi dan portofolio</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya mengandalkan satu kali tes tertulis tentang definisi kejujuran di akhir semester</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, jumlah KPI utama yang idealnya dibatasi agar tim tidak kewalahan dalam implementasi adalah sekitar...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">8-12 KPI utama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">50-60 KPI utama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada batasan sama sekali, semakin banyak semakin baik</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menyusun KPI dengan baik dan sosialisasi di awal tahun ajaran, tetapi kepala sekolah sepenuhnya menyerahkan seluruh proses berikutnya kepada tim KPI tanpa pernah hadir lagi di rapat monitoring. Berdasarkan Bab 7, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tim kehilangan arah dan implementasi KPI hanya menjadi rutinitas administratif, karena keterlibatan pimpinan sangat menentukan keberhasilan pengawalan KPI</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun, karena tim KPI seharusnya bisa berjalan sepenuhnya tanpa keterlibatan pimpinan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Implementasi justru akan lebih efektif karena pimpinan tidak perlu terlibat sama sekali</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>SD Islam Baiturrahim baru mulai menerapkan KPI dan khawatir gagal seperti sekolah lain yang KPI-nya berhenti setelah beberapa bulan. Berdasarkan studi kasus pada Bab 7, strategi paling tepat yang bisa mereka tiru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menyusun puluhan KPI yang mencakup seluruh aspek sekolah sejak bulan pertama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memulai dari beberapa KPI sederhana yang mudah dipahami, menjaga konsistensi monitoring bulanan, dan melibatkan pimpinan serta guru secara aktif -- seperti Sekolah Al-Hikmah dan Al-Furqan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga sekolah memiliki unit Litbang seperti SMA An-Nur sebelum mulai menerapkan KPI</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Data KPI di sebuah sekolah tersebar di banyak tempat -- Excel milik masing-masing guru, catatan manual, dan dokumen unit yang berbeda-beda -- sehingga tim KPI kesulitan menggabungkan dan memverifikasinya. Berdasarkan Bab 7, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan setiap guru dan unit tetap menggunakan formatnya masing-masing agar lebih fleksibel</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan pengumpulan data sepenuhnya karena dianggap terlalu rumit untuk dikelola</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan satu sistem data sederhana yang konsisten (misalnya Google Sheet bersama), menetapkan penanggung jawab data di tiap unit, dan menerapkan standar format pelaporan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut rekomendasi pada Bab 8, agar siswa memiliki rasa kepemilikan dan tanggung jawab terhadap pendidikan mereka sendiri, sekolah sebaiknya...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melibatkan siswa dalam proses evaluasi, misalnya mengajak mereka memberi umpan balik tentang pengalaman belajar dan pengembangan karakter mereka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyembunyikan seluruh hasil evaluasi dari siswa agar mereka tidak merasa terbebani</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyerahkan seluruh proses evaluasi karakter sepenuhnya kepada orang tua tanpa keterlibatan siswa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah sudah menerapkan KPI dengan baik dari sisi akademik, tetapi guru masih merasa pendidikan karakter adalah tanggung jawab pelajaran agama saja. Berdasarkan kesimpulan Bab 8, apa yang sebenarnya perlu diluruskan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendidikan karakter perlu diintegrasikan menyeluruh ke dalam kurikulum di semua mata pelajaran, bukan berdiri sendiri sebagai tanggung jawab satu mata pelajaran saja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pandangan guru sudah benar sepenuhnya, karena karakter memang hanya relevan diajarkan lewat pelajaran agama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya menghapus KPI akademik dan hanya fokus pada KPI karakter semata</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
