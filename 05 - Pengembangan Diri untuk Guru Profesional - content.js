/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Pengembangan Diri untuk Guru Profesional"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/webbook-edumind@main/content-pengembangan-diri-guru-profesional.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Meningkatkan Kompetensi Pedagogik</h2>
<p class="lede reveal">Kompetensi pedagogik adalah fondasi yang menentukan seberapa jauh seorang guru mampu merancang, menyampaikan, dan mengevaluasi pembelajaran secara bermakna bagi setiap murid yang berbeda-beda.</p>

<div class="card reveal">
  <h4>A. Menguasai Strategi Pembelajaran Inovatif</h4>
  <p>Kompetensi pedagogik mencakup pemahaman guru tentang bagaimana murid belajar dan bagaimana merancang pembelajaran yang tepat sasaran. Guru yang kompeten secara pedagogik mampu menciptakan suasana belajar yang kondusif sekaligus mengantarkan murid mencapai potensi optimalnya — ini bukan sekadar tugas individu guru, melainkan tanggung jawab bersama pemerintah (menyediakan pelatihan berkelanjutan), sekolah (membangun budaya belajar yang mendukung), dan guru sendiri (berkomitmen terus belajar dan berkembang).</p>
  <p>Salah satu wujud nyata kompetensi ini adalah penguasaan strategi pembelajaran inovatif. Pembelajaran kontekstual mengaitkan materi dengan situasi nyata yang dialami murid sehari-hari — misalnya mengajak murid meneliti persoalan sampah atau polusi di lingkungan mereka sendiri saat membahas topik lingkungan hidup, sehingga teori tidak berhenti sebagai hafalan, melainkan langsung terasa relevan. Pembelajaran kooperatif menempatkan murid dalam kelompok kecil yang saling membantu menyelesaikan tugas bersama, misalnya membagi peran mencari informasi, menyusun materi, dan mempresentasikan hasil, sehingga setiap anggota belajar berkomunikasi dan bertanggung jawab atas keberhasilan kelompoknya. Pembelajaran berbasis proyek mengajak murid mengerjakan proyek nyata dan kompleks, seperti membuat film pendek tentang sejarah lokal lengkap dengan riset, penyusunan alur cerita, hingga pengambilan gambar, yang melatih keterampilan abad ke-21 seperti berpikir kritis, kreativitas, dan kolaborasi. Sementara pembelajaran berbasis masalah menantang murid memecahkan persoalan nyata yang belum diketahui solusinya — misalnya menganalisis kemungkinan penyebab suatu gejala dalam pelajaran sains — sehingga mereka terlatih mengidentifikasi masalah, mengumpulkan informasi, dan menyusun solusi secara mandiri maupun berkelompok.</p>
  <p>Keempat strategi ini akan semakin hidup bila didukung teknologi pendidikan yang tepat, seperti platform daring untuk berbagi materi dan tugas, aplikasi edukasi interaktif, atau media multimedia berupa video dan gambar yang membuat materi lebih mudah dicerna. Semua strategi dan alat bantu ini bermuara pada satu prinsip: menggeser pembelajaran dari yang berpusat pada guru menjadi berpusat pada murid (student-centered) dan aktif (active learning) — murid diberi ruang memilih topik dan cara belajar, serta dilibatkan langsung dalam praktik dan eksperimen, bukan sekadar menerima informasi secara pasif.</p>

  <h4>B. Menilai dan Mengevaluasi Pembelajaran</h4>
  <p>Penilaian dan evaluasi bukan tahap terpisah dari pembelajaran, melainkan bagian yang menyatu dengannya — keduanya membantu guru mengukur kemajuan murid, memberi umpan balik yang membangun, sekaligus menjadi dasar untuk memperbaiki strategi mengajar. Penilaian formatif dilakukan secara berkelanjutan selama proses pembelajaran berlangsung, misalnya lewat kuis singkat, observasi, atau penilaian diri, sehingga guru bisa segera menyesuaikan pendekatan sebelum murid tertinggal terlalu jauh. Penilaian sumatif, sebaliknya, mengukur hasil belajar di akhir suatu unit atau semester, seperti ujian akhir atau proyek akhir, dan berfungsi sebagai rekapitulasi capaian murid pada periode tertentu.</p>
  <p>Di luar dua jenis penilaian ini, guru juga dapat memakai tes untuk mengukur pengetahuan dan keterampilan secara objektif, portofolio untuk mengumpulkan bukti belajar murid dari waktu ke waktu seperti karya tulis dan proyek, serta observasi langsung untuk mengamati perilaku dan interaksi murid dalam proses belajar. Kombinasi berbagai teknik ini penting karena setiap instrumen punya kelebihan dan keterbatasan masing-masing; mengandalkan satu metode saja berisiko memberi gambaran yang timpang tentang kemampuan murid. Yang tidak kalah penting adalah cara guru menyampaikan hasil penilaian — umpan balik yang konstruktif harus fokus pada perilaku dan kinerja (bukan menyerang pribadi murid), bersifat spesifik dan bisa langsung ditindaklanjuti, disertai saran perbaikan, serta disampaikan dengan cara yang positif dan membangun, bukan menghakimi.</p>
  <p>Data hasil penilaian juga punya nilai strategis bila diolah dengan benar. Guru dapat mengumpulkan data dari berbagai sumber, menganalisisnya untuk menemukan pola kelemahan murid, mengevaluasi apakah strategi pembelajaran yang dipakai selama ini sudah efektif, lalu memperbaiki pendekatan berdasarkan temuan tersebut. Siklus mengukur–menganalisis–memperbaiki inilah yang membuat penilaian tidak berhenti sebagai angka di rapor, melainkan menjadi alat nyata untuk terus meningkatkan kualitas pembelajaran dari waktu ke waktu.</p>

  <h4>C. Merancang Pembelajaran Berdiferensiasi</h4>
  <p>Setiap murid datang ke kelas dengan latar belakang, minat, kecepatan belajar, dan gaya belajar yang berbeda-beda — ada yang cepat memahami materi, ada yang butuh waktu lebih lama; ada yang belajar lewat gambar, ada pula yang lebih nyaman mendengarkan penjelasan atau bergerak aktif. Karena itu, satu pendekatan yang seragam untuk semua murid sering kali tidak efektif, dan di sinilah pembelajaran berdiferensiasi menjadi relevan — sebuah pendekatan yang memberi guru fleksibilitas menyesuaikan proses, konten, dan produk pembelajaran sesuai kebutuhan tiap murid, sehingga fokus guru bergeser dari sekadar "mengajarkan materi" menjadi "memastikan setiap murid benar-benar belajar".</p>
  <p>Diferensiasi konten berarti menyajikan materi dengan cara berbeda sesuai tingkat pemahaman murid — murid yang sudah cepat paham bisa diberi bacaan tambahan yang menantang, sementara yang masih membutuhkan penguatan dasar mendapat penjelasan yang lebih sederhana. Diferensiasi proses memberi pilihan cara belajar, seperti diskusi kelompok, kerja individu, atau kegiatan praktik, sehingga murid bisa memilih jalur yang paling sesuai dengan gaya belajarnya. Diferensiasi produk memberi keleluasaan dalam bentuk tugas akhir yang mencerminkan pemahaman murid — bisa berupa video pendek, esai tertulis, poster, atau presentasi lisan — sehingga murid dapat mengekspresikan hasil belajarnya dengan cara yang paling nyaman baginya.</p>
  <p>Menerapkan diferensiasi secara praktis dimulai dari mengenali profil setiap murid lewat observasi, angket sederhana, atau obrolan ringan, dilanjutkan dengan penilaian diagnostik di awal pembelajaran untuk mengetahui tingkat pemahaman awal mereka. Dari situ, guru merancang pilihan-pilihan dalam tugas, cara belajar, maupun bentuk evaluasi, serta mengelola kelas secara fleksibel — membiarkan sebagian murid belajar berpasangan, sebagian dalam kelompok kecil, dan sebagian lagi secara individual sesuai kebutuhan. Pembelajaran berdiferensiasi pada akhirnya adalah wujud nyata dari keyakinan bahwa setiap murid bisa belajar, hanya dengan cara yang berbeda-beda — dan guru profesional adalah mereka yang melihat perbedaan ini bukan sebagai hambatan, melainkan peluang untuk menciptakan pembelajaran yang lebih adil dan bermakna.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bahasan pada bab ini — strategi pembelajaran inovatif, penilaian yang efektif, dan pembelajaran berdiferensiasi — aspek mana yang selama ini paling jarang Anda terapkan secara sengaja di kelas, dan langkah kecil apa yang bisa mulai dicoba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Pembelajaran yang mengaitkan materi pelajaran dengan situasi nyata yang dialami murid sehari-hari, misalnya meneliti masalah lingkungan di sekitar tempat tinggal mereka, disebut pembelajaran...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kontekstual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sumatif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Konsekuensi logis</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menerapkan penilaian hanya di akhir semester lewat satu kali ujian tertulis, tanpa penilaian formatif selama proses belajar. Berdasarkan Bab 1, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru kehilangan kesempatan mengetahui dan memperbaiki kesulitan belajar murid sejak dini, karena penilaian formatif yang berkelanjutan justru berfungsi memberi umpan balik cepat sebelum murid tertinggal jauh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ujian akhir semester adalah satu-satunya bentuk penilaian yang diakui secara resmi sehingga tidak ada risiko apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian formatif hanya cocok digunakan di jenjang PAUD dan tidak relevan untuk jenjang yang lebih tinggi</button>
  </div>
  <div class="quiz-q">
    <p>Di kelas Pak Andi, ada murid yang sudah lancar memahami materi pecahan dan murid lain yang masih kesulitan dengan konsep dasar penjumlahan. Pak Andi tetap memberikan soal dan penjelasan yang sama persis untuk seluruh kelas. Berdasarkan konsep pembelajaran berdiferensiasi pada Bab 1, apa yang sebaiknya diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena menyamakan materi untuk semua murid adalah bentuk keadilan yang paling tepat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyesuaikan konten atau proses pembelajaran sesuai tingkat pemahaman murid, misalnya memberi tantangan tambahan bagi yang sudah paham dan penguatan dasar bagi yang masih kesulitan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengeluarkan murid yang masih kesulitan dari kelas reguler karena dianggap tidak mampu mengikuti pelajaran</button>
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
<h2 class="reveal">Mengembangkan Keterampilan Interpersonal</h2>
<p class="lede reveal">Sehebat apa pun penguasaan materi seorang guru, dampaknya akan terbatas tanpa kemampuan membangun hubungan yang sehat dengan murid, orang tua, rekan kerja, dan seluruh warga sekolah.</p>

<div class="card reveal">
  <h4>A. Membangun Komunikasi yang Efektif dengan Murid</h4>
  <p>Komunikasi yang efektif adalah pintu masuk untuk memahami kebutuhan, karakteristik, dan gaya belajar setiap murid yang berbeda-beda. Guru dapat menggali pemahaman ini lewat observasi langsung di kelas, percakapan dengan murid maupun orang tuanya, atau penggunaan tes gaya belajar sederhana. Pemahaman inilah yang kemudian menjadi dasar bagi guru dalam menyampaikan materi secara jelas dan menarik, sekaligus memberikan umpan balik yang benar-benar terasa relevan bagi murid yang menerimanya.</p>
  <p>Hubungan yang positif dan saling menghormati tidak lahir begitu saja, melainkan dibangun lewat sikap konsisten: menunjukkan keramahan, mendengarkan dengan penuh perhatian dan empati, memberi penghargaan atas usaha dan pencapaian murid, serta memperlakukan semua murid secara adil tanpa pilih kasih. Ketika murid merasa didengar dan dihargai, mereka menjadi lebih terbuka untuk belajar dan mengungkapkan kesulitannya, alih-alih menutup diri karena takut dinilai.</p>
  <p>Konflik antara guru dan murid, atau antar-murid sendiri, adalah hal yang wajar terjadi dan bukan tanda kegagalan mengajar. Yang membedakan guru yang matang adalah caranya merespons: tetap tenang dan berfokus pada solusi, mendengarkan semua pihak yang terlibat sebelum mengambil kesimpulan, membantu murid mengungkapkan perasaannya dengan cara yang sehat, serta mengarahkan penyelesaian menuju solusi yang terasa adil bagi semua pihak, bukan sekadar meredam gejala di permukaan.</p>

  <h4>B. Bekerja Sama dengan Orang Tua dan Rekan Kerja</h4>
  <p>Orang tua adalah mitra penting yang tidak boleh dipandang sebagai pihak luar dalam proses pendidikan anak. Guru perlu membangun komunikasi yang teratur dengan orang tua — baik lewat pertemuan tatap muka, pesan tertulis, maupun telepon — untuk menyampaikan perkembangan belajar murid secara jelas, melibatkan orang tua dalam kegiatan belajar-mengajar bila memungkinkan, serta menghargai masukan yang mereka berikan tentang anaknya sendiri, sebab orang tua sering memahami sisi anak yang tidak selalu terlihat di sekolah.</p>
  <p>Rekan kerja sesama guru juga merupakan sumber daya berharga yang sering kali kurang dimanfaatkan secara maksimal. Lewat pertemuan rutin membahas perkembangan murid, kegiatan mengajar bersama, saling mengamati kelas dan memberi umpan balik, hingga kolaborasi dalam proyek pembelajaran, guru dapat saling berbagi ide, menyelesaikan masalah bersama, dan mengembangkan strategi mengajar yang lebih inovatif dibanding bekerja sendirian.</p>
  <p>Baik kerja sama dengan orang tua maupun rekan kerja sama-sama membutuhkan fondasi yang sama: komunikasi yang terbuka, kesediaan mendengarkan dengan penuh perhatian, penghargaan atas ide dan pendapat pihak lain, serta kemauan untuk saling membantu. Sekolah yang seluruh warganya terbiasa berkomunikasi dengan cara ini akan jauh lebih mudah menyelaraskan upaya mendidik murid, karena semua pihak — guru, kolega, dan orang tua — bergerak dengan pemahaman yang sama.</p>

  <h4>C. Membangun Budaya Positif di Lingkungan Sekolah</h4>
  <p>Keterampilan interpersonal tidak berhenti pada relasi personal, melainkan meluas menjadi kemampuan membentuk dan menjaga budaya positif secara kolektif di seluruh lingkungan sekolah. Budaya positif menciptakan rasa aman, nyaman, dan saling percaya di antara semua warga sekolah — dan ketika orang merasa dihargai serta diterima, mereka menjadi lebih terbuka untuk belajar, berpendapat, dan berkolaborasi, baik murid dalam belajar maupun guru dalam pengembangan profesionalnya.</p>
  <p>Guru memegang peran strategis dalam membentuk budaya ini lewat empat langkah nyata: menjadi teladan dalam bersikap positif seperti menghargai perbedaan pendapat dan menyelesaikan konflik secara bijak, mendorong semangat kolaborasi lewat keterlibatan aktif dalam kegiatan bersama atau komunitas belajar, menumbuhkan rasa memiliki dengan menciptakan suasana kerja yang saling mendukung dan tidak kompetitif secara berlebihan, serta merayakan setiap keberhasilan sekecil apa pun — baik pencapaian murid maupun rekan kerja — untuk memperkuat energi positif di sekolah.</p>
  <p>Ketika lingkungan sekolah terasa suportif, guru pun cenderung lebih terbuka untuk berkembang, lebih kreatif dalam mengajar, dan lebih tangguh menghadapi tantangan sehari-hari — dan semua ini pada akhirnya berdampak langsung pada kualitas pembelajaran serta hubungan guru dengan murid-muridnya. Budaya positif, dengan kata lain, bukan sekadar suasana yang menyenangkan, melainkan fondasi yang menopang keberlangsungan mutu pendidikan di sebuah sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga relasi yang dibahas di bab ini — dengan murid, dengan orang tua/rekan kerja, dan budaya sekolah secara kolektif — relasi mana yang menurut Anda paling perlu diperkuat di lingkungan kerja Anda saat ini, dan langkah kecil apa yang bisa mulai dicoba?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, salah satu cara membangun hubungan yang positif dan saling menghormati dengan murid adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendengarkan dengan penuh perhatian dan empati, serta menjaga konsistensi dan keadilan dalam memperlakukan murid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatasi komunikasi dengan murid seminimal mungkin agar wibawa guru tetap terjaga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya memberi perhatian kepada murid yang berprestasi tinggi di kelas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu menyampaikan informasi tentang murid yang bermasalah ke orang tua lewat pesan singkat berisi teguran, tanpa pernah mengajak diskusi dua arah atau mendengarkan sisi orang tua. Berdasarkan Bab 2, apa yang sebaiknya diperbaiki dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun komunikasi dua arah yang terbuka dan menghargai masukan orang tua, bukan sekadar menyampaikan teguran satu arah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh komunikasi dengan orang tua karena dianggap tidak relevan bagi perkembangan murid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melibatkan kepala sekolah dalam setiap pesan singkat kepada orang tua agar terlihat lebih formal</button>
  </div>
  <div class="quiz-q">
    <p>Di ruang guru sebuah SMP, para guru jarang berdiskusi tentang kesulitan mengajar atau berbagi strategi pembelajaran, dan cenderung bekerja sendiri-sendiri tanpa saling memberi umpan balik. Berdasarkan konsep budaya positif pada Bab 2, langkah paling tepat untuk mengubah situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena setiap guru sebaiknya fokus pada kelasnya masing-masing tanpa perlu berkolaborasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendorong pertemuan rutin dan budaya saling mengamati-memberi umpan balik antar-guru, sehingga tercipta semangat kolaborasi dan rasa saling mendukung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah rapat administratif tanpa mengubah pola komunikasi antar-guru</button>
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
<h2 class="reveal">Menjaga Keseimbangan dan Kesehatan Diri</h2>
<p class="lede reveal">Guru yang sehat secara fisik, mental, dan emosional adalah prasyarat bagi pengajaran yang optimal — keseimbangan diri bukan kemewahan, melainkan kebutuhan mendasar bagi profesi yang menuntut energi dan kesabaran setiap hari.</p>

<div class="card reveal">
  <h4>A. Mengelola Stres dan Kecemasan</h4>
  <p>Stres dan kecemasan adalah pengalaman wajar yang hampir pasti dirasakan setiap guru, mengingat tuntutan mengajar, administrasi, dan interaksi sosial yang padat setiap harinya. Yang membedakan guru yang mampu bertahan lama dalam profesi ini adalah kesediaannya melatih teknik relaksasi sederhana, seperti latihan pernapasan dalam yang menenangkan pikiran dan tubuh, visualisasi membayangkan tempat yang tenang saat tekanan memuncak, atau aktivitas fisik ringan seperti berjalan kaki yang membantu melepaskan ketegangan yang menumpuk.</p>
  <p>Kesehatan fisik dan mental saling memengaruhi satu sama lain, sehingga menjaga keduanya perlu dilakukan berdampingan: mengonsumsi makanan bergizi seimbang, berolahraga secara teratur, memastikan waktu tidur yang cukup, mengelola waktu dengan baik agar tidak terjebak multitasking berlebihan, serta menjaga interaksi sosial lewat komunitas yang suportif, karena rasa terhubung dengan orang lain terbukti membantu mengurangi tekanan psikologis.</p>
  <p>Tidak kalah penting adalah menjaga batas yang jelas antara pekerjaan dan kehidupan pribadi agar terhindar dari kelelahan berkepanjangan (burnout) — menetapkan waktu kerja dan waktu pribadi secara tegas, menghindari kebiasaan membawa pekerjaan ke rumah, menyisihkan waktu untuk hobi yang membuat rileks, serta sesekali mengambil cuti untuk benar-benar beristirahat. Guru yang berhasil menjaga keseimbangan ini pada akhirnya justru mampu bekerja dengan kualitas yang lebih baik dan lebih konsisten dalam jangka panjang, dibanding memaksakan diri bekerja tanpa jeda.</p>

  <h4>B. Meningkatkan Motivasi dan Semangat Mengajar</h4>
  <p>Motivasi mengajar yang bertahan lama biasanya bukan berasal dari rutinitas semata, melainkan dari kejelasan makna dan tujuan pribadi seorang guru — pertanyaan sederhana seperti "apa yang membuat saya ingin menjadi guru?" atau "kontribusi seperti apa yang ingin saya berikan bagi murid dan masyarakat?" bisa menjadi titik tolak untuk menemukan kembali alasan mendasar di balik pilihan profesi ini, terutama saat semangat mulai kendur.</p>
  <p>Antusiasme dan gairah mengajar perlu terus dijaga secara sengaja, misalnya lewat kebiasaan terus belajar dan mengembangkan diri, mencoba metode pembelajaran baru yang belum pernah dipraktikkan, bergabung dengan komunitas guru yang saling menginspirasi, atau mencari sumber inspirasi dari luar dunia pendidikan sekalipun. Semangat yang terjaga inilah yang kemudian menular kepada murid — sebab murid yang termotivasi umumnya belajar dari guru yang juga tampak bersemangat, bukan sekadar menjalankan rutinitas.</p>
  <p>Untuk menumbuhkan motivasi belajar murid secara konkret, guru dapat memvariasikan metode dan strategi pembelajaran agar tidak monoton, memanfaatkan teknologi dan media yang menarik, mengaitkan materi dengan kehidupan nyata murid, serta memberi ruang bagi murid untuk belajar secara aktif dan kreatif, bukan sekadar duduk mendengarkan. Meningkatkan motivasi mengajar, pada dasarnya, adalah proses yang tidak pernah benar-benar selesai — ia perlu terus dirawat lewat kesadaran akan makna, keterbukaan pada hal baru, dan interaksi dengan murid yang bermakna setiap hari.</p>

  <h4>C. Membangun Mindfulness dan Kesadaran Diri</h4>
  <p>Menjadi guru bukan hanya soal menyampaikan materi di depan kelas, tetapi juga tentang hadir secara utuh dan sadar dalam setiap momen bersama murid. Mindfulness, atau kesadaran penuh, adalah kemampuan untuk hadir sepenuhnya pada saat ini dengan perhatian penuh dan tanpa buru-buru menghakimi — dalam konteks mengajar, kemampuan ini membuat guru lebih peka terhadap dinamika kelas, lebih sabar menghadapi murid yang menantang, dan lebih tenang saat harus mengambil keputusan di bawah tekanan.</p>
  <p>Guru dengan kesadaran diri yang baik cenderung lebih mampu mengelola emosinya — mereka mengenali apa yang sedang dirasakan, memahami apa yang memicu stres, dan tahu cara meresponsnya dengan sehat, bukan dengan reaksi impulsif. Kesadaran diri semacam ini berdampak langsung pada kualitas hubungan dengan murid maupun rekan kerja, karena guru menjadi lebih mudah membangun interaksi yang hangat, empatik, dan terbuka.</p>
  <p>Melatih mindfulness dan kesadaran diri bisa dimulai dari langkah-langkah sederhana: meluangkan waktu sejenak untuk berhenti dan bernapas dalam-dalam sebelum menghadapi situasi sulit, melakukan refleksi rutin lewat jurnal singkat tentang pengalaman mengajar setiap hari, mengamati emosi yang muncul tanpa langsung bereaksi lalu menelusuri akar penyebabnya, serta menjaga rutinitas harian yang sehat seperti tidur cukup dan waktu untuk kegiatan yang menyenangkan. Dengan kebiasaan-kebiasaan kecil ini, guru tidak hanya lebih siap secara mental menghadapi dinamika kelas, tetapi juga menjaga ketenangan batin yang berpengaruh besar terhadap kualitas mengajar dan keseimbangan hidupnya secara keseluruhan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bahasan bab ini — mengelola stres, menjaga motivasi, dan melatih mindfulness — mana yang paling terasa mendesak untuk Anda perbaiki saat ini, dan kebiasaan kecil apa yang bisa mulai dicoba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, salah satu teknik relaksasi sederhana yang dapat membantu guru mengatasi stres dan kecemasan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Latihan pernapasan dalam dan visualisasi tempat yang tenang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jam kerja untuk menyelesaikan semua tugas administrasi sekaligus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari seluruh interaksi sosial dengan rekan kerja</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru rutin membawa pekerjaan koreksi tugas ke rumah setiap malam dan jarang meluangkan waktu untuk dirinya sendiri maupun keluarga. Berdasarkan Bab 3, apa risiko yang paling mungkin dihadapi guru tersebut dalam jangka panjang?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berisiko mengalami kelelahan berkepanjangan (burnout) karena tidak ada batas yang jelas antara waktu kerja dan waktu pribadi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko apa pun karena semakin banyak waktu bekerja semakin baik kualitas pengajarannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risiko hanya akan muncul jika guru tersebut juga jarang berolahraga, sehingga membawa pekerjaan ke rumah sebenarnya aman-aman saja</button>
  </div>
  <div class="quiz-q">
    <p>Bu Rina merasa mudah tersulut emosi setiap kali menghadapi murid yang sulit diatur, dan sering menyesali reaksinya setelah kejadian berlalu. Berdasarkan konsep mindfulness dan kesadaran diri pada Bab 3, langkah awal yang paling tepat untuk Bu Rina adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari murid tersebut sepenuhnya agar tidak lagi memicu emosi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melatih diri untuk berhenti sejenak dan bernapas dalam-dalam sebelum bereaksi, serta mengamati emosi yang muncul tanpa langsung menghakimi sebelum meresponsnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memendam emosi tersebut tanpa merefleksikannya karena guru tidak boleh menunjukkan kelemahan</button>
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
<h2 class="reveal">Pendidikan Karakter untuk Guru Profesional</h2>
<p class="lede reveal">Guru bukan hanya penyampai ilmu pengetahuan, tetapi juga pembimbing moral — dan karakter yang ditanamkan pada murid selalu bermula dari karakter yang lebih dulu dijalani oleh gurunya sendiri.</p>

<div class="card reveal">
  <h4>A. Fondasi Pendidikan Karakter</h4>
  <p>Pendidikan karakter adalah proses menanamkan nilai-nilai moral dan karakter positif kepada murid, seperti kejujuran, tanggung jawab, disiplin, dan toleransi, agar mereka tumbuh menjadi pribadi yang berbudi pekerti luhur dan siap menjadi warga negara yang baik. Seperti halnya kompetensi pedagogik, upaya ini bukan tugas satu pihak saja — pemerintah perlu menyediakan kebijakan pendukung, sekolah perlu membangun budaya yang kondusif, dan guru sendiri perlu menunjukkan komitmen nyata untuk menjadi teladan dalam berperilaku sehari-hari.</p>
  <p>Sebagai role model bagi murid, guru perlu memegang teguh sejumlah nilai karakter esensial: integritas untuk bersikap jujur, adil, dan konsisten dalam bertindak; tanggung jawab untuk mempertanggungjawabkan setiap perbuatan dan menyelesaikan tugas dengan baik; empati untuk memahami dan merasakan apa yang dialami orang lain; kepedulian terhadap sesama; disiplin dalam mengatur diri sesuai aturan; serta kemampuan bekerja sama untuk mencapai tujuan bersama. Nilai-nilai ini bukan sekadar daftar yang dihafal, melainkan sikap yang perlu benar-benar hidup dalam keseharian guru di sekolah.</p>
  <p>Penanaman nilai-nilai karakter ini dapat diwujudkan lewat lima jalur yang saling melengkapi: keteladanan langsung dari guru dalam bersikap dan bertindak, pembiasaan nilai baik lewat kegiatan rutin sehari-hari, pengintegrasian nilai karakter ke dalam materi pembelajaran, penguatan positif berupa penghargaan atas perilaku baik murid, serta pendampingan lewat konseling bagi murid yang mengalami kesulitan berperilaku. Pendidikan karakter, pada akhirnya, adalah proses berkelanjutan yang menuntut komitmen dari semua pihak, dan guru profesional memegang peran sentral sebagai agen yang menghidupkan proses ini setiap hari di kelas.</p>

  <h4>B. Membangun Karakter Diri Guru: Olah Hati, Olah Rasa, Olah Pikir, dan Olah Raga</h4>
  <p>Sebelum mampu menanamkan karakter pada murid, guru perlu lebih dulu membangun karakter dirinya sendiri secara utuh, lewat empat dimensi yang saling melengkapi. Olah hati berkaitan dengan kejujuran, keadilan, kesabaran, dan kelapangan dada dalam menjalani tugas yang penuh tantangan — guru yang menjaga hatinya dari prasangka buruk dan pikiran negatif akan lebih mudah menjadi teladan serta menciptakan lingkungan belajar yang kondusif, sementara guru yang membiarkan hatinya dipenuhi kekesalan berlebihan akan sulit membangun hubungan yang sehat dengan murid maupun rekan kerja.</p>
  <p>Olah rasa berkaitan dengan kepekaan sosial — bersikap sopan santun, menjaga ucapan dan perbuatan, menjadi pendengar yang baik, serta menumbuhkan empati dan kepedulian terhadap sesama, baik kepada murid maupun kolega. Olah pikir, di sisi lain, berkaitan dengan orientasi ke depan: memiliki visi dan misi yang jelas dalam pengembangan diri, terus belajar dan berinovasi lewat pelatihan, bacaan, maupun pencarian metode baru, serta aktif mencari komunitas guru yang bisa saling mendukung proses belajar tersebut.</p>
  <p>Olah raga melengkapi ketiga dimensi sebelumnya dengan menjaga fisik yang sehat lewat pola makan bergizi, olahraga teratur, dan istirahat yang cukup, sekaligus menjadi contoh langsung bagi murid dalam menjaga kebersihan diri dan penampilan yang rapi serta profesional. Keempat olah ini — hati, rasa, pikir, dan raga — bukan proses yang selesai sekali jadi, melainkan latihan berkelanjutan yang perlu terus dirawat, karena karakter guru yang utuh pada keempat dimensi inilah yang menjadi fondasi bagi kemampuannya menjadi teladan yang otentik, bukan sekadar teladan di atas kertas.</p>

  <h4>C. Mengintegrasikan Pendidikan Karakter dalam Pembelajaran</h4>
  <p>Pendidikan karakter akan jauh lebih bermakna bila tidak diperlakukan sebagai mata pelajaran terpisah, melainkan menyatu dengan proses pembelajaran sehari-hari lewat tiga pendekatan: cara infus, yakni menyisipkan nilai karakter langsung ke dalam materi pelajaran yang sedang diajarkan; cara terintegrasi, yakni menjadikan nilai karakter sebagai tema utama pembelajaran; dan cara tertanam (embedded), yakni mengembangkan program khusus yang dirancang untuk menguatkan karakter tertentu.</p>
  <p>Penerapannya bisa sangat konkret di setiap mata pelajaran — pelajaran Matematika dapat menanamkan kejujuran dan ketelitian lewat proses pengerjaan soal yang tidak boleh menyontek, pelajaran Bahasa Indonesia dapat menumbuhkan cinta tanah air dan toleransi lewat cerita rakyat dan teks bacaan, sementara pelajaran IPA dapat menanamkan rasa ingin tahu dan kepedulian terhadap lingkungan lewat topik-topik sains yang relevan dengan alam sekitar. Pendekatan semacam ini membuat karakter tidak terasa sebagai "tambahan beban", melainkan bagian alami dari proses belajar itu sendiri.</p>
  <p>Agar upaya ini berhasil, guru perlu menciptakan suasana belajar yang kondusif lewat hubungan yang positif dengan murid, penerapan disiplin yang membangun (bukan menghukum), serta ruang yang aman bagi murid untuk belajar dan berkembang. Efektivitas pendidikan karakter dalam pembelajaran ini kemudian perlu dinilai dan direfleksikan secara berkala, misalnya lewat observasi perilaku murid sehari-hari, analisis hasil belajar, maupun diskusi langsung dengan murid tentang apa yang mereka rasakan dan pahami dari nilai-nilai yang telah diajarkan.</p>

  <h4>D. Menjadi Teladan Nilai-Nilai dalam Keseharian</h4>
  <p>Pendidikan karakter yang sejati tidak tumbuh dari ceramah atau tugas menulis esai tentang kebaikan, melainkan dari contoh nyata yang dilihat dan dirasakan murid setiap hari — dan dalam hal ini, guru adalah sosok utama yang menjadi panutan. Murid sangat peka menangkap perilaku guru, bahkan dalam hal-hal kecil sekalipun, sehingga konsistensi antara ucapan dan tindakan menjadi kunci: guru yang mengajarkan kedisiplinan harus benar-benar menunjukkannya lewat kebiasaan datang tepat waktu dan menepati janji, karena murid cenderung menilai lebih pada apa yang mereka lihat ketimbang apa yang mereka dengar.</p>
  <p>Keteladanan juga tercermin dari cara guru menghadapi situasi sulit — saat berhadapan dengan murid yang sulit diatur atau tekanan pekerjaan yang berat, sikap tenang dan tidak mudah marah dari guru mengirimkan pesan penting bahwa emosi bisa dikelola dan masalah bisa diselesaikan dengan kepala dingin. Justru hal-hal kecil yang dilakukan konsisten — menjaga kebersihan kelas bersama murid, mengucapkan terima kasih dan maaf dengan tulus, menjaga nada suara yang sopan bahkan saat menegur — yang paling kuat membentuk citra guru di benak murid, jauh lebih kuat daripada nasihat panjang sekalipun.</p>
  <p>Guru juga tidak perlu tampil sempurna untuk menjadi teladan; justru kesediaan mengakui kesalahan dan menunjukkan kemauan memperbaiki diri mengajarkan murid bahwa belajar adalah proses seumur hidup. Di era digital, keteladanan ini meluas hingga ke cara guru menggunakan media sosial — bijak, tidak menyebarkan informasi yang belum jelas kebenarannya, dan menjaga etika di ruang maya, karena murid membutuhkan contoh nyata bagaimana bersikap di dunia digital yang menjadi bagian tak terpisahkan dari keseharian mereka. Pada akhirnya, karakter tidak diajarkan lewat ceramah, melainkan ditularkan lewat keteladanan yang tulus dan konsisten.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat dimensi olah diri (hati, rasa, pikir, raga) yang dibahas di bab ini, dimensi mana yang menurut Anda paling perlu diperkuat pada diri Anda sendiri sebagai guru saat ini, dan langkah konkret apa yang bisa mulai dijalankan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4, empat dimensi yang perlu dibangun guru untuk mengembangkan karakter dirinya secara utuh adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Olah hati, olah rasa, olah pikir, dan olah raga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Olah kata, olah data, olah waktu, dan olah dana</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Olah kelas, olah kurikulum, olah ujian, dan olah nilai</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru rutin berceramah panjang tentang pentingnya kejujuran di depan kelas, tetapi diam-diam sering memanipulasi data kehadiran dan terlambat masuk kelas tanpa alasan jelas. Berdasarkan konsep keteladanan pada Bab 4, mengapa pendekatan guru ini kemungkinan besar tidak efektif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena murid lebih menilai dari apa yang mereka lihat dalam tindakan nyata guru dibanding apa yang mereka dengar, sehingga ketidakkonsistenan justru melemahkan pesan yang ingin disampaikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena ceramah tentang kejujuran sebenarnya tidak perlu disampaikan sama sekali kepada murid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena murid usia sekolah belum mampu membedakan antara ucapan dan tindakan guru</button>
  </div>
  <div class="quiz-q">
    <p>SD Melati ingin menanamkan nilai kepedulian lingkungan, namun hanya menugaskan murid membuat poster tentang menjaga alam tanpa mengaitkannya dengan mata pelajaran apa pun. Berdasarkan pendekatan integrasi pendidikan karakter pada Bab 4, langkah yang lebih tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup mempertahankan tugas poster karena sudah dianggap sebagai bentuk pendidikan karakter yang lengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyisipkan nilai kepedulian lingkungan ke berbagai mata pelajaran secara nyata, misalnya lewat topik ekosistem di IPA, sehingga nilai tersebut terasa menyatu dengan pembelajaran sehari-hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh mata pelajaran lain agar sekolah bisa fokus penuh pada tema lingkungan</button>
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
<h2 class="reveal">Adaptif di Era Digital</h2>
<p class="lede reveal">Guru masa kini dituntut bukan hanya menguasai materi ajar, tetapi juga mampu memanfaatkan teknologi secara bijak, kompeten, dan bertanggung jawab demi pembelajaran yang lebih relevan dengan zaman murid-muridnya.</p>

<div class="card reveal">
  <h4>A. Memanfaatkan Teknologi Pendidikan</h4>
  <p>Era digital membuka banyak peluang bagi guru untuk memperkaya proses belajar mengajar. Platform pembelajaran daring hadir dalam dua bentuk utama: MOOCs (Massive Open Online Courses) seperti Coursera atau Udemy yang menawarkan kursus terbuka untuk pengembangan diri guru sendiri, dan LMS (Learning Management System) seperti Google Classroom atau Moodle yang membantu sekolah mengelola materi, tugas, dan penilaian secara terorganisir. Keduanya memberi fleksibilitas belajar-mengajar yang tidak terbatas ruang dan waktu, baik bagi guru yang ingin terus mengembangkan diri maupun murid yang mengakses materi pembelajaran.</p>
  <p>Integrasi teknologi ke dalam pembelajaran juga bisa dilakukan lewat berbagai cara, seperti video pembelajaran yang menjelaskan konsep rumit dengan cara yang lebih mudah dicerna, aplikasi edukasi interaktif yang membuat belajar terasa menyenangkan, atau gamifikasi yang menerapkan unsur permainan untuk meningkatkan motivasi dan keterlibatan murid. Ditambah dengan pembelajaran jarak jauh dan blended learning yang memadukan tatap muka dengan sesi daring, murid di daerah terpencil maupun yang memiliki keterbatasan mobilitas kini punya akses lebih luas terhadap pendidikan berkualitas, sekaligus bisa belajar sesuai kecepatan masing-masing.</p>
  <p>Yang membedakan pemanfaatan teknologi yang efektif dari yang sekadar ikut-ikutan tren adalah ketepatan memilih alat sesuai kebutuhan pembelajaran, bukan menggunakan teknologi demi teknologi itu sendiri. Guru perlu terus mengasah keterampilan digitalnya dan membangun pembelajaran yang benar-benar terintegrasi dengan teknologi yang dipilih, sehingga hasil akhirnya adalah pengalaman belajar yang lebih kaya dan bermakna bagi murid, bukan sekadar pergantian media tanpa perubahan substansi.</p>

  <h4>B. Menjadi Guru Berkompetensi Digital</h4>
  <p>Menjadi kompeten secara digital bukan sekadar bisa mengoperasikan gawai, melainkan mencakup lima keterampilan yang saling melengkapi: keterampilan dasar mengoperasikan komputer, internet, dan aplikasi pembelajaran; keterampilan pedagogis untuk memakai teknologi sebagai alat mengajar dan belajar; keterampilan komunikasi untuk berinteraksi dengan murid, orang tua, dan kolega lewat kanal digital; keterampilan manajemen untuk mengelola pembelajaran dan kelas secara daring; serta keterampilan kreatif untuk menghasilkan konten pembelajaran yang menarik dan interaktif.</p>
  <p>Media sosial, yang sudah menjadi bagian tak terpisahkan dari kehidupan modern, juga bisa dimanfaatkan secara produktif dalam pendidikan — mulai dari membagikan materi pembelajaran berupa video, artikel, atau infografis, membuka forum diskusi daring, memberikan tugas dan penilaian, hingga menjalin komunikasi yang lebih cepat dengan orang tua tentang perkembangan belajar murid. Yang penting diingat, media sosial di sini adalah alat bantu, bukan tujuan — penggunaannya harus tetap terarah pada peningkatan kualitas pembelajaran.</p>
  <p>Karena teknologi digital terus berkembang pesat, guru perlu menjadikan dirinya pembelajar digital yang berkelanjutan — mengikuti pelatihan dan seminar tentang teknologi pendidikan, membaca sumber-sumber terbaru, bergabung dengan komunitas guru daring, serta berani bereksperimen dengan alat-alat baru. Sikap terbuka dan mau terus belajar inilah yang pada akhirnya membedakan guru yang mampu bertahan relevan di tengah perubahan zaman dengan yang tertinggal di belakang.</p>

  <h4>C. Etika Digital dan Keamanan Siber untuk Guru</h4>
  <p>Kemampuan menggunakan teknologi saja tidak cukup tanpa dibarengi pemahaman tentang etika digital dan keamanan siber, mengingat sebagian besar aktivitas pembelajaran dan komunikasi kini berlangsung di platform daring yang menyimpan data pribadi guru maupun murid. Etika digital menuntut guru bersikap bijak, sopan, dan bertanggung jawab saat beraktivitas di dunia maya — menjaga bahasa yang baik dalam komunikasi daring, menghargai pendapat orang lain di forum online, serta tidak ikut menyebarkan informasi yang belum jelas kebenarannya.</p>
  <p>Keamanan siber juga menjadi tanggung jawab penting yang sering diabaikan — menjaga kerahasiaan data pribadi maupun data murid, menggunakan kata sandi yang kuat, berhati-hati terhadap tautan atau berkas yang mencurigakan, serta selektif dalam membagikan informasi pribadi di media sosial maupun platform pembelajaran. Kelalaian kecil dalam hal ini bisa berdampak besar, baik bagi keamanan data guru sendiri maupun murid yang berada dalam pengawasannya.</p>
  <p>Guru juga perlu menyadari bahwa setiap aktivitas di ruang digital meninggalkan jejak yang tidak mudah dihapus — jejak digital ini bisa menjadi penilaian jangka panjang terhadap reputasi dan karakter seseorang, sehingga penggunaan media sosial secara positif dan profesional menjadi bagian penting dari menjaga citra diri sebagai pendidik. Dengan memahami dan menerapkan etika digital serta keamanan siber, guru tidak hanya melindungi dirinya sendiri, tetapi juga memberi contoh literasi digital yang sehat bagi murid-muridnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bahasan bab ini — pemanfaatan teknologi pendidikan, kompetensi digital, dan etika/keamanan siber — aspek mana yang paling terasa masih menjadi celah dalam praktik mengajar Anda sehari-hari, dan langkah apa yang bisa mulai diperbaiki?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, platform yang digunakan sekolah untuk mengelola materi pembelajaran, tugas, dan penilaian secara daring disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">LMS (Learning Management System), seperti Google Classroom atau Moodle</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">MOOCs, yang hanya ditujukan untuk kursus pengembangan diri guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Gamifikasi, yang merupakan penerapan unsur permainan dalam pembelajaran</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menggunakan berbagai aplikasi edukasi terbaru di kelasnya, namun tidak pernah mengevaluasi apakah aplikasi tersebut benar-benar membantu pemahaman murid atau hanya menambah kebingungan. Berdasarkan Bab 5, apa yang sebaiknya menjadi prinsip utama dalam memanfaatkan teknologi pendidikan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memilih dan menggunakan teknologi berdasarkan ketepatannya dengan kebutuhan pembelajaran, bukan sekadar mengikuti tren</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggunakan sebanyak mungkin aplikasi tanpa perlu mengevaluasi efektivitasnya, karena semakin banyak teknologi semakin baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan penggunaan teknologi apa pun karena dianggap selalu mengganggu fokus belajar murid</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru membagikan data nilai dan foto murid di grup media sosial pribadinya tanpa izin orang tua, serta menggunakan kata sandi yang sama dan mudah ditebak untuk semua akun pembelajaran daringnya. Berdasarkan Bab 5, dua kesalahan mendasar apa yang dilakukan guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kesalahan, karena berbagi informasi murid di media sosial pribadi adalah hal yang wajar dilakukan guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melanggar etika digital dengan membagikan data pribadi murid tanpa izin, sekaligus mengabaikan keamanan siber dengan memakai kata sandi yang lemah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kesalahannya hanya soal kata sandi, sementara membagikan data murid di media sosial pribadi tidak menjadi masalah</button>
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
<h2 class="reveal">Mendorong Kreativitas & Inovasi</h2>
<p class="lede reveal">Murid yang kelak harus menghadapi dunia yang terus berubah membutuhkan lebih dari sekadar hafalan — mereka membutuhkan guru yang mampu menumbuhkan kreativitas, cara berpikir kritis, dan keberanian mencari solusi baru.</p>

<div class="card reveal">
  <h4>A. Menciptakan Pembelajaran yang Menyenangkan dan Berkesan</h4>
  <p>Pembelajaran yang menyenangkan dan berkesan bukan sekadar soal membuat kelas ramai dan seru, melainkan tentang menciptakan pengalaman belajar yang benar-benar menarik minat dan meningkatkan motivasi murid untuk terus terlibat. Guru dapat mewujudkannya lewat penerapan strategi kreatif seperti pembelajaran berbasis proyek yang mengajak murid mengerjakan sesuatu yang nyata dan kompleks, pembelajaran berbasis masalah yang menantang murid memecahkan persoalan dari kehidupan nyata, atau pembelajaran berbasis teknologi yang memanfaatkan media digital untuk memperkaya pengalaman belajar.</p>
  <p>Pemilihan media dan alat peraga yang tepat juga berperan besar — materi yang disampaikan lewat gambar, video, atau simulasi yang sesuai kebutuhan belajar akan lebih mudah dipahami murid, meningkatkan konsentrasi mereka, sekaligus membuat proses belajar terasa lebih menyenangkan dibanding sekadar mendengarkan ceramah panjang. Namun alat bantu ini hanya akan efektif bila dibarengi suasana kelas yang positif dan kondusif, yang dibangun lewat hubungan yang hangat antara guru dan murid, penerapan disiplin yang membangun (bukan menghukum), serta ruang yang aman bagi murid untuk mencoba, salah, dan belajar dari kesalahannya.</p>
  <p>Pada akhirnya, pembelajaran yang berkesan lahir dari kombinasi tiga hal: strategi yang kreatif dan sesuai kebutuhan, media yang tepat guna, dan suasana kelas yang membuat murid merasa aman untuk berpartisipasi aktif. Guru yang secara sengaja merancang ketiganya akan jauh lebih mudah menumbuhkan rasa ingin tahu dan semangat belajar murid dibanding guru yang hanya mengandalkan metode ceramah konvensional dari tahun ke tahun.</p>

  <h4>B. Mengembangkan Keterampilan Berpikir Kritis dan Kreatif pada Murid</h4>
  <p>Keterampilan berpikir kritis dan kreatif adalah bekal penting bagi murid untuk menghadapi masa depan yang penuh perubahan dan kompleksitas, dan guru dapat menumbuhkannya lewat tiga strategi utama yang saling melengkapi. Diskusi kelas mengajak murid berdialog tentang berbagai topik, saling berbagi ide, dan mempertimbangkan berbagai sudut pandang — misalnya mendiskusikan apakah teknologi modern membantu atau justru mengancam pelestarian budaya tradisional — sehingga murid terlatih menganalisis, mengevaluasi informasi, dan menyampaikan pendapatnya dengan percaya diri.</p>
  <p>Metode tanya jawab yang menuntut jawaban mendalam mendorong rasa ingin tahu murid dan melatih mereka menghubungkan berbagai informasi untuk menemukan jawaban yang tepat, sementara pemecahan masalah menantang murid menerapkan pengetahuan teoretis ke dalam konteks nyata yang lebih kompleks, misalnya mencari solusi pembagian sumber daya air yang adil dengan mempertimbangkan faktor ekonomi dan lingkungan sekaligus. Ketiga strategi ini — diskusi, tanya jawab, dan pemecahan masalah — saling melengkapi: diskusi membuka ruang berbagi perspektif, tanya jawab memperdalam pemahaman, dan pemecahan masalah melatih penerapan pengetahuan secara nyata.</p>
  <p>Pembelajaran berbasis proyek dan problem-solving menjadi wadah yang efektif untuk menggabungkan ketiga strategi ini sekaligus, karena murid dihadapkan pada persoalan nyata yang menuntut mereka berpikir kritis, kreatif, sekaligus bekerja sama dengan orang lain. Guru yang ingin menumbuhkan keterampilan ini perlu menciptakan lingkungan belajar yang kondusif untuk berpikir, memberi ruang bagi murid belajar dari kesalahan tanpa rasa takut, dan yang tidak kalah penting, menjadi role model dalam berpikir kritis dan kreatif itu sendiri — sebab murid lebih mudah meniru cara berpikir yang mereka lihat langsung dipraktikkan gurunya.</p>

  <h4>C. Berpikir Desain (Design Thinking) dalam Pembelajaran</h4>
  <p>Berpikir desain, atau design thinking, adalah pendekatan yang menempatkan kebutuhan dan pengalaman murid sebagai pusat perhatian dalam merancang pembelajaran, alih-alih sekadar mengikuti urutan materi di kurikulum. Pendekatan ini bukan sekadar metode teknis, melainkan cara berpikir yang mendorong empati, eksplorasi, dan inovasi, dan biasanya melibatkan lima tahap: berempati untuk memahami apa yang benar-benar dirasakan dan dibutuhkan murid, mendefinisikan masalah pembelajaran secara lebih akurat, menghasilkan berbagai ide alternatif secara terbuka, membuat prototipe sederhana dari ide tersebut, lalu mengujinya langsung dalam praktik mengajar.</p>
  <p>Tahap empati menjadi fondasi dari seluruh proses ini — guru yang benar-benar mendengarkan kesulitan dan kebutuhan murid akan mampu merumuskan masalah pembelajaran dengan jauh lebih tepat sasaran, dibanding guru yang langsung merancang solusi tanpa memahami akar persoalannya terlebih dahulu. Dari pemahaman inilah guru kemudian bisa mencoba berbagai alternatif solusi kreatif dalam bentuk sederhana, mengujinya di kelas, dan memperbaikinya berdasarkan hasil uji coba tersebut.</p>
  <p>Dengan menerapkan berpikir desain, guru tidak lagi sekadar mengajar, tetapi menjadi perancang pengalaman belajar yang adaptif dan terus diperbaiki. Pendekatan ini juga memperkuat peran guru sebagai pembelajar sepanjang hayat, karena menuntut keterbukaan, kolaborasi, dan kemauan untuk terus mencoba serta memperbaiki diri — dan bila diterapkan konsisten, hasil akhirnya adalah kelas yang lebih hidup, pembelajaran yang lebih bermakna, dan murid yang lebih terlibat secara aktif dalam prosesnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pendekatan yang dibahas di bab ini — pembelajaran yang berkesan, berpikir kritis-kreatif, dan berpikir desain — mana yang paling jarang Anda coba di kelas selama ini, dan apa yang membuatnya terasa menantang untuk mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Tahap pertama dalam pendekatan berpikir desain (design thinking) yang menekankan pentingnya memahami perasaan dan kebutuhan murid sebelum merancang solusi pembelajaran disebut tahap...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empati</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Evaluasi akhir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian sumatif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sering mengadakan diskusi kelas, tetapi selalu langsung memberi tahu jawaban yang dianggap benar begitu ada murid yang berpendapat berbeda, tanpa membiarkan murid lain menanggapi terlebih dahulu. Berdasarkan Bab 6, apa dampak yang paling mungkin terjadi dari kebiasaan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Murid menjadi kurang terlatih menganalisis dan mempertimbangkan berbagai sudut pandang, karena esensi diskusi untuk menumbuhkan berpikir kritis justru hilang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak negatif, karena tugas guru memang memastikan hanya ada satu jawaban benar dalam setiap diskusi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Murid akan menjadi lebih kreatif karena terbiasa menerima jawaban langsung dari guru tanpa perlu berpikir sendiri</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin merancang ulang metode pembelajaran IPA karena banyak murid mengeluh bosan, namun guru langsung mengganti seluruh materi dengan proyek baru tanpa terlebih dahulu menggali apa sebenarnya yang membuat murid merasa bosan. Berdasarkan pendekatan berpikir desain pada Bab 6, apa yang seharusnya dilakukan lebih dulu?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menerapkan proyek baru karena perubahan besar selalu lebih baik daripada menganalisis masalah terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan tahap empati terlebih dahulu untuk memahami secara mendalam apa yang benar-benar dirasakan dan dibutuhkan murid, sebelum merumuskan masalah dan solusi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus mata pelajaran IPA karena dianggap tidak lagi relevan bagi murid</button>
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
<h2 class="reveal">Menghadapi Tantangan dan Dilema</h2>
<p class="lede reveal">Perjalanan menjadi guru profesional tidak pernah steril dari persoalan nyata — mulai dari perilaku murid yang menantang, godaan pelanggaran etika, hingga konflik dengan berbagai pihak yang perlu dihadapi dengan kepala dingin dan hati yang jernih.</p>

<div class="card reveal">
  <h4>A. Mengelola Perilaku Murid yang Bermasalah</h4>
  <p>Perilaku murid yang bermasalah — mulai dari yang ringan seperti tidak mengerjakan tugas hingga yang lebih serius seperti perundungan — adalah salah satu tantangan terbesar yang dihadapi guru, dan cara menanganinya sangat menentukan apakah murid benar-benar belajar dari kesalahannya atau justru semakin menjauh. Pendekatan restorative justice menawarkan alternatif dari disiplin yang sekadar menghukum, dengan menekankan dialog, tanggung jawab, dan pemulihan hubungan. Alih-alih langsung memberi sanksi, guru mengajak murid berdialog tentang apa yang terjadi, siapa yang terdampak oleh tindakannya, dan bagaimana ia bisa memperbaiki kerusakan yang ditimbulkan — baik secara fisik maupun emosional.</p>
  <p>Pendekatan ini terbukti membantu memulihkan hubungan yang rusak, menumbuhkan tanggung jawab dan empati murid terhadap dampak tindakannya, sekaligus mengurangi kemungkinan perilaku serupa terulang, karena murid benar-benar memahami konsekuensi perbuatannya alih-alih sekadar menjalani hukuman tanpa refleksi. Pendekatan kedua, konsekuensi logis, melengkapi restorative justice dengan prinsip bahwa konsekuensi yang diberikan harus berkaitan langsung dengan perilaku murid — misalnya murid yang merusak alat belajar diminta memperbaiki atau menggantinya, bukan mendapat hukuman yang tidak ada hubungannya sama sekali dengan kesalahan yang dilakukan.</p>
  <p>Prinsip kunci dari kedua pendekatan ini adalah bahwa konsekuensi harus dijelaskan dengan jelas kepada murid, diterapkan secara konsisten tanpa pengecualian, dilakukan dengan tetap menjaga rasa hormat (bukan mempermalukan), serta selalu diikuti kesempatan bagi murid untuk merenungkan dan belajar dari kesalahannya. Sebelum menerapkan strategi disiplin apa pun, guru juga perlu memahami akar permasalahan perilaku murid — apakah dipengaruhi latar belakang keluarga, kondisi sosial-ekonomi, atau kebutuhan belajar tertentu — karena disiplin yang efektif selalu bertumpu pada pemahaman, bukan sekadar reaksi cepat terhadap gejala yang tampak di permukaan.</p>

  <h4>B. Menjaga Etika dan Profesionalisme Guru</h4>
  <p>Sebagai figur yang dipercaya masyarakat, guru terikat pada kode etik profesi yang menjadi pedoman bagaimana seharusnya bersikap dalam konteks profesional, etika, dan moral, baik di dalam maupun di luar kelas. Kode etik ini mencakup sejumlah nilai utama: integritas untuk berperilaku jujur dan adil tanpa tindakan manipulatif atau diskriminatif, tanggung jawab besar terhadap perkembangan akademik dan karakter murid, kejujuran akademik yang menolak segala bentuk manipulasi hasil belajar, keadilan dalam memperlakukan setiap murid tanpa memandang latar belakang, serta penghormatan terhadap hak-hak murid termasuk privasi dan kerahasiaan informasi pribadinya.</p>
  <p>Pelanggaran terhadap nilai-nilai ini — baik dalam bentuk kekerasan, diskriminasi, maupun penyalahgunaan wewenang — dapat merusak kepercayaan masyarakat terhadap dunia pendidikan secara luas, jauh melampaui dampak pada satu sekolah saja. Karena itu, menjaga profesionalisme bukan sekadar urusan pribadi seorang guru, melainkan tanggung jawab yang menyangkut martabat seluruh profesi keguruan.</p>
  <p>Membangun kepercayaan dan respek dari murid, orang tua, dan masyarakat pada akhirnya adalah hasil dari konsistensi menjalankan kode etik ini dalam keseharian, bukan sekadar mematuhinya saat diawasi. Guru yang menjunjung tinggi integritas, keadilan, dan penghormatan terhadap hak murid akan membangun reputasi yang kokoh — reputasi yang tidak dibangun dalam semalam, tetapi lewat rangkaian keputusan etis yang diambil secara konsisten dari hari ke hari.</p>

  <h4>C. Mengelola Konflik Secara Profesional</h4>
  <p>Konflik adalah bagian alami dari interaksi sosial di sekolah, mengingat guru berhadapan dengan berbagai pihak yang memiliki latar belakang, harapan, dan kepentingan berbeda — mulai dari murid, orang tua, sesama guru, hingga pimpinan sekolah. Yang menentukan bukanlah ada-tidaknya konflik, melainkan bagaimana guru meresponsnya: guru yang mampu mengelola konflik dengan tenang dan proporsional akan lebih dihormati dan dipercaya, sementara guru yang bereaksi berlebihan atau justru menghindari tanggung jawab dapat memperburuk situasi dan menciptakan ketegangan jangka panjang.</p>
  <p>Langkah pertama dalam mengelola konflik adalah menyadari bahwa konflik tidak selalu negatif — ia bisa menjadi peluang untuk memperbaiki komunikasi dan memperdalam pemahaman antarpihak, asalkan pendekatannya tidak berfokus pada "menang-kalah" melainkan pada pencapaian solusi bersama yang saling menghargai. Mendengarkan secara aktif tanpa langsung menghakimi menjadi kunci untuk memahami akar masalah yang sebenarnya, sebab tidak semua konflik berasal dari persoalan besar — sering kali hanya kesalahpahaman kecil yang tidak segera diklarifikasi hingga membesar.</p>
  <p>Guru juga perlu mampu mengelola emosinya sendiri saat berada dalam tekanan, menahan diri dari reaksi spontan yang bisa memperkeruh keadaan, serta memilih kata-kata yang tepat saat menyampaikan pendapat. Sama pentingnya, guru perlu memahami kapan sebuah konflik bisa diselesaikan secara langsung dan kapan sebaiknya melibatkan pihak ketiga seperti kepala sekolah atau koordinator bidang sebagai penengah, karena tidak semua konflik harus — atau bisa — diselesaikan sendirian.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tantangan yang dibahas di bab ini — perilaku murid bermasalah, godaan pelanggaran etika, dan konflik dengan berbagai pihak — mana yang paling sering Anda hadapi di sekolah, dan pendekatan mana dari bab ini yang paling relevan untuk mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Pendekatan disiplin yang menekankan dialog, tanggung jawab, dan pemulihan hubungan ketika murid melakukan pelanggaran — bukan sekadar hukuman — disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Restorative justice</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kode etik guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Design thinking</button>
  </div>
  <div class="quiz-q">
    <p>Seorang murid merusak barang milik temannya di kelas. Guru langsung memberi skorsing tanpa mengajak murid tersebut berdialog atau memahami dampak tindakannya terhadap teman yang dirugikan. Berdasarkan Bab 7, apa kekurangan utama dari pendekatan guru ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru kehilangan kesempatan menumbuhkan tanggung jawab dan empati murid lewat dialog serta pemulihan hubungan, yang lebih efektif mencegah pengulangan perilaku buruk</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kekurangan, karena skorsing adalah satu-satunya cara yang direkomendasikan untuk semua jenis pelanggaran murid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kekurangannya hanya soal durasi skorsing yang dianggap terlalu singkat</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru dan rekan sejawatnya berselisih pendapat tentang metode penilaian yang seharusnya dipakai untuk satu mata pelajaran, dan perdebatan mulai memanas di ruang guru. Berdasarkan Bab 7, langkah paling tepat yang sebaiknya diambil adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera memutuskan sepihak metode yang dianggap benar tanpa mendengarkan alasan rekan sejawat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendengarkan secara aktif sudut pandang rekan sejawat, mengelola emosi agar tetap tenang, dan mengarahkan diskusi menuju solusi bersama, atau melibatkan pihak ketiga bila diperlukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari rekan sejawat tersebut sepenuhnya agar konflik tidak pernah dibicarakan lagi</button>
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
<h2 class="reveal">Menjadi Guru yang Inspiratif dan Berpengaruh</h2>
<p class="lede reveal">Puncak dari perjalanan pengembangan diri seorang guru bukan sekadar menguasai keterampilan mengajar, tetapi mampu memimpin, menginspirasi, dan meninggalkan dampak yang bertahan jauh melampaui masa sekolah muridnya.</p>

<div class="card reveal">
  <h4>A. Mengembangkan Kepemimpinan Guru</h4>
  <p>Guru tidak hanya berperan sebagai pengajar, tetapi juga sebagai pemimpin pembelajaran dan agen perubahan di lingkungannya. Sebagai pemimpin pembelajaran, guru bertugas menciptakan lingkungan belajar yang kondusif dan menyenangkan, mendorong murid belajar secara aktif dan mandiri, serta memberikan umpan balik yang konstruktif dan membangun — bukan sekadar mengarahkan dari atas, melainkan memandu murid menemukan potensi terbaiknya sendiri.</p>
  <p>Sebagai agen perubahan, guru juga dituntut mampu mendorong inovasi dan perbaikan positif di sekolahnya, berkontribusi pada pengembangan kurikulum dan pembelajaran, serta bekerja sama dengan kolega maupun pemangku kepentingan lain untuk meningkatkan kualitas pendidikan secara keseluruhan. Kolaborasi semacam ini tidak hanya memperkuat profesionalisme guru itu sendiri, tetapi juga membangun komunitas pendidikan yang lebih kuat dan saling mendukung.</p>
  <p>Kepemimpinan guru bisa diwujudkan lewat berbagai bentuk keterlibatan konkret — berpartisipasi dalam kegiatan pengembangan profesional, berbagi ide dan praktik baik dengan sesama guru, bekerja sama dengan orang tua dan komunitas untuk mendukung pendidikan murid, hingga memimpin proyek dan kegiatan sekolah atau terlibat dalam pengambilan keputusan di tingkat sekolah. Kepemimpinan semacam ini tidak menuntut jabatan struktural tertentu — ia bisa tumbuh dari inisiatif dan komitmen guru mana pun yang bersedia mengambil peran lebih dari sekadar mengajar di kelasnya sendiri.</p>

  <h4>B. Memberikan Dampak Positif pada Murid dan Masyarakat</h4>
  <p>Guru yang inspiratif memahami bahwa perannya sebagai role model tidak pernah berhenti — murid akan meniru perilaku dan nilai-nilai yang ditunjukkan gurunya, sehingga penting bagi guru untuk secara sadar menunjukkan sikap positif, menjunjung tinggi nilai moral dan etika, serta menjadi teladan dalam proses belajar dan mengajar itu sendiri.</p>
  <p>Selain menjadi teladan, guru inspiratif juga aktif menumbuhkan kemandirian belajar pada muridnya — menciptakan lingkungan belajar yang kondusif dan menyenangkan, memberikan pembelajaran yang bermakna, mendorong murid berpikir kritis dan kreatif, serta memberi kepercayaan kepada murid untuk terus belajar dan berkembang sesuai potensinya masing-masing, bukan sekadar mengikuti arahan guru secara pasif.</p>
  <p>Dampak seorang guru pada akhirnya tidak berhenti di ruang kelas, melainkan meluas ke masyarakat lewat murid-murid yang dibentuknya — mempersiapkan mereka menjadi warga negara yang cerdas dan bertanggung jawab, menanamkan nilai moral dan etika yang kokoh, serta mengembangkan keterampilan dan potensi mereka agar mampu berkontribusi nyata bagi lingkungan sekitarnya. Guru yang menyadari dampak jangka panjang ini akan mengajar dengan kesadaran bahwa setiap interaksi kecil di kelas berpotensi membentuk arah hidup murid-muridnya di masa depan.</p>

  <h4>C. Membangun Personal Branding sebagai Guru Profesional</h4>
  <p>Di tengah dunia pendidikan yang semakin terbuka dan terhubung, guru tidak hanya berperan sebagai pengajar, tetapi juga sebagai figur publik dalam komunitas belajarnya. Personal branding bagi guru bukan soal pencitraan semu atau sekadar tampil populer, melainkan citra diri profesional yang otentik, konsisten, dan berakar dari nilai-nilai sejati, karakter, serta kontribusi nyata yang benar-benar dimiliki.</p>
  <p>Membangun personal branding yang sehat membutuhkan keaslian dan konsistensi nilai diri yang ditampilkan dalam keseharian, komunikasi yang positif dan penuh empati baik secara langsung maupun di media sosial, kehadiran di ruang digital yang bijak dan tetap menjaga etika, keterlibatan aktif dalam kegiatan profesional seperti pelatihan atau kepenulisan, serta yang paling mendasar, menjadi panutan lewat sikap dan tindakan sehari-hari yang konsisten menunjukkan integritas dan tanggung jawab.</p>
  <p>Personal branding yang paling kuat justru lahir dari keteladanan, bukan dari strategi pemasaran diri semata — murid dan rekan sejawat akan menghargai guru yang konsisten menunjukkan integritas, empati, dan semangat berbagi dalam keseharian mereka, jauh lebih dibanding guru yang hanya tampil menonjol di permukaan tanpa substansi yang setara. Pada akhirnya, personal branding adalah investasi jangka panjang untuk membangun kepercayaan, kredibilitas, dan pengaruh yang benar-benar membawa perubahan — bukan sekadar untuk pencitraan sesaat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bahasan bab ini — kepemimpinan guru, dampak pada murid dan masyarakat, serta personal branding — mana yang terasa paling jauh dari praktik Anda saat ini, dan langkah kecil apa yang bisa mulai dicoba untuk mendekatkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 8, personal branding yang sehat bagi seorang guru sebaiknya berakar dari...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Nilai-nilai sejati, karakter, dan kontribusi nyata yang konsisten ditunjukkan dalam keseharian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Jumlah pengikut media sosial semata, tanpa perlu memperhatikan konsistensi nilai dan karakter</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Popularitas sesaat yang diperoleh lewat konten kontroversial agar cepat dikenal luas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru aktif membagikan konten inspiratif tentang pendidikan di media sosial, tetapi sikapnya di sekolah justru sering tidak konsisten — kurang disiplin dan jarang menepati janji kepada murid. Berdasarkan Bab 8, apa yang paling mungkin terjadi terhadap personal branding guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Personal branding-nya berisiko terasa tidak otentik, karena personal branding yang kuat harus lahir dari keteladanan nyata dan konsistensi sikap sehari-hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Personal branding-nya akan tetap kuat selama kontennya menarik, tanpa perlu memperhatikan konsistensi sikap di sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun, karena media sosial dan kehidupan sehari-hari di sekolah dianggap dua hal yang sepenuhnya terpisah</button>
  </div>
  <div class="quiz-q">
    <p>Pak Budi ingin lebih berpengaruh di sekolahnya, namun ia hanya fokus mengajar di kelasnya sendiri dan tidak pernah terlibat dalam kegiatan pengembangan profesional, berbagi praktik baik, atau proyek bersama kolega. Berdasarkan Bab 8, langkah yang paling relevan untuk dicoba Pak Budi adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap fokus sepenuhnya pada kelasnya sendiri karena kepemimpinan guru tidak berkaitan dengan keterlibatan di luar kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mulai terlibat aktif dalam kegiatan pengembangan profesional, berbagi ide dengan rekan sejawat, dan berkontribusi pada proyek atau pengambilan keputusan di sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu ditunjuk sebagai kepala sekolah terlebih dahulu sebelum bisa menunjukkan kepemimpinan sebagai guru</button>
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
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab. Jawaban tidak akan langsung diperlihatkan — jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Metode pembelajaran yang mengajak murid mengerjakan proyek nyata dan kompleks, seperti membuat film pendek tentang sejarah lokal lengkap dengan riset dan pengambilan gambar, disebut pembelajaran...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berbasis proyek</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Formatif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Konsekuensi logis</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Penilaian yang dilakukan secara berkelanjutan selama proses pembelajaran berlangsung, untuk memberi umpan balik cepat sebelum murid tertinggal jauh, disebut penilaian...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sumatif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Formatif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Portofolio</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 1, tiga komponen utama dalam pembelajaran berdiferensiasi adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Konten, proses, dan produk</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru, murid, dan orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kognitif, afektif, dan psikomotorik</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 2, salah satu cara membangun budaya positif di lingkungan sekolah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bersaing secara ketat antar-guru agar lebih termotivasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merayakan keberhasilan sekecil apa pun, baik pencapaian murid maupun rekan kerja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi interaksi antar-guru agar masing-masing fokus bekerja sendiri</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 2, kerja sama dengan orang tua murid sebaiknya dibangun lewat...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi satu arah berupa teguran setiap kali murid bermasalah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi yang teratur, terbuka, dan menghargai masukan orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari komunikasi kecuali saat rapat wajib sekolah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Salah satu tanda guru berisiko mengalami kelelahan berkepanjangan (burnout) menurut Bab 3 adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak memiliki batas yang jelas antara waktu kerja dan waktu pribadi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Rutin berolahraga minimal beberapa puluh menit sehari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aktif bergabung dengan komunitas guru yang suportif</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Kemampuan untuk hadir sepenuhnya pada saat ini, dengan perhatian penuh dan tanpa buru-buru menghakimi, dibahas pada Bab 3 sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Restorative justice</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mindfulness</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Personal branding</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Empat dimensi olah diri yang dibahas dalam pembentukan karakter guru pada Bab 4 adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Olah hati, olah rasa, olah pikir, dan olah raga</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Olah kelas, olah nilai, olah waktu, dan olah dana</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Olah kata, olah data, olah teknologi, dan olah media</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Cara mengintegrasikan nilai karakter dengan menjadikannya tema atau topik utama pembelajaran, berdasarkan Bab 4, disebut pendekatan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Infused</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Integrated</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Embedded</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 4, keteladanan guru paling kuat tertanam di benak murid justru lewat...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ceramah panjang tentang nilai-nilai kebaikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebiasaan kecil yang konsisten, seperti mengucapkan terima kasih dan maaf dengan tulus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Poster nilai-nilai karakter yang ditempel di dinding kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Platform terbuka yang menawarkan kursus daring untuk pengembangan diri guru, seperti Coursera atau Udemy, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">LMS</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">MOOCs</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gamifikasi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 5, menjaga kerahasiaan data pribadi dan murid, menggunakan kata sandi yang kuat, serta berhati-hati terhadap tautan mencurigakan termasuk bagian dari...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Etika digital semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keamanan siber</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Personal branding</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Tahap dalam design thinking yang menekankan pentingnya memahami perasaan dan kebutuhan murid sebelum merancang solusi pembelajaran disebut tahap...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prototipe</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi sumatif</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 6, strategi yang menantang murid menerapkan pengetahuan teoretis ke dalam konteks nyata yang kompleks, seperti mencari solusi pembagian sumber daya air secara adil, adalah bentuk dari...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tanya jawab sederhana</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pemecahan masalah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian formatif</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Pendekatan disiplin yang menekankan dialog, tanggung jawab, dan pemulihan hubungan, alih-alih sekadar menghukum, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Konsekuensi logis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Restorative justice</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kode etik guru</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Salah satu nilai utama dalam kode etik guru menurut Bab 7 adalah kejujuran akademik, yang berarti...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari segala bentuk manipulasi hasil belajar murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi nilai tinggi kepada semua murid tanpa terkecuali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyembunyikan kesalahan penilaian dari kepala sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 7, langkah pertama yang penting dalam mengelola konflik secara profesional adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Segera mencari pihak yang harus disalahkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyadari bahwa konflik bisa menjadi peluang, serta mendengarkan secara aktif tanpa langsung menghakimi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari pihak yang berkonflik sepenuhnya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 8, peran guru sebagai agen perubahan di sekolah tercermin dari kemampuannya...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendorong inovasi dan berkontribusi pada pengembangan kurikulum serta pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari keterlibatan dalam pengambilan keputusan sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi kolaborasi hanya dengan guru senior</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Personal branding yang sehat bagi seorang guru profesional, menurut Bab 8, sebaiknya berakar dari...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Jumlah pengikut di media sosial</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Nilai-nilai sejati, karakter, dan kontribusi nyata yang konsisten</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Popularitas melalui konten kontroversial</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 8, dampak seorang guru terhadap masyarakat meluas lewat murid-muridnya dalam bentuk...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mempersiapkan murid menjadi warga negara yang cerdas dan bertanggung jawab, serta menanamkan nilai moral yang kokoh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memastikan murid hanya unggul secara akademik tanpa memperhatikan nilai moral</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi potensi murid agar tidak melampaui gurunya</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
