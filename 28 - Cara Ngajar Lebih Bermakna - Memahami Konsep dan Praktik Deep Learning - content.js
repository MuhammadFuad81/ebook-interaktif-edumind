/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Cara Ngajar Lebih Bermakna - Memahami Konsep dan
   Praktik Deep Learning"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-ngajar-lebih-bermakna.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Kerangka Pembelajaran Deep Learning</h2>
<p class="lede reveal">Pembelajaran yang bermakna tidak terjadi begitu saja tanpa kerangka kerja yang jelas dan terstruktur. Bab ini membahas empat elemen fondasi yang membantu guru mengatur proses pembelajaran agar setiap aktivitas di kelas benar-benar berdampak pada pemahaman siswa: praktik pedagogis, lingkungan pembelajaran, pemanfaatan digital, dan kemitraan pembelajaran.</p>

<div class="card reveal">
  <h4>A. Praktik Pedagogis (Pedagogical Practices)</h4>
  <p>Di era modern, peran guru telah bergeser dari sekadar penyampai informasi menjadi fasilitator pembelajaran. Guru tidak lagi hanya memberi ceramah panjang, melainkan membimbing siswa menemukan jawaban lewat eksplorasi dan pemahaman mandiri — misalnya dalam pelajaran matematika, guru tidak langsung memberi rumus, tetapi menantang siswa menemukan pola dari sebuah masalah lewat pertanyaan pemandu, sehingga siswa merasa memiliki kendali atas proses belajarnya sendiri.</p>
  <p>Perubahan peran ini berjalan beriringan dengan pembelajaran aktif, yaitu pendekatan yang menempatkan siswa sebagai pusat proses belajar lewat diskusi kelompok, kerja proyek, eksperimen, atau simulasi — misalnya siswa diminta membuat model ekosistem sederhana dan menganalisis interaksi antar-komponennya, sehingga pemahaman dan keterampilan berpikir kritis tumbuh bersamaan. Kolaborasi yang sehat antara guru dan siswa turut menjadi elemen penting: guru mendengarkan masukan siswa, memberi ruang bertanya tanpa takut salah, dan berperan sebagai pemandu yang memberi keleluasaan bagi siswa mengeksplorasi sumber informasi serta menyusun kesimpulan sendiri — misalnya lewat diskusi kelompok kecil dalam pelajaran sejarah tentang suatu peristiwa penting.</p>

  <h4>B. Lingkungan Pembelajaran (Learning Environment)</h4>
  <p>Lingkungan belajar yang kondusif bukan hanya soal ruang fisik, tetapi juga suasana emosional dan sosial yang membuat siswa nyaman dan efektif belajar. Tata ruang yang fleksibel — meja yang bisa disusun ulang sesuai aktivitas — memungkinkan siswa berkolaborasi dan bergerak bebas, sementara perangkat digital seperti tablet atau papan tulis interaktif memperkaya akses siswa terhadap sumber belajar tambahan dan simulasi virtual.</p>
  <p>Selain elemen fisik dan digital, lingkungan kelas juga perlu inklusif dan kolaboratif, memastikan setiap siswa — tanpa memandang latar belakang atau kemampuannya — merasa dihargai dan nyaman berpartisipasi, misalnya lewat metode pengajaran yang beragam untuk mengakomodasi gaya belajar visual, auditori, atau kinestetik. Lingkungan yang merangsang kreativitas dan rasa ingin tahu juga penting, misalnya lewat sudut eksplorasi di kelas, pajangan karya siswa, atau pertanyaan terbuka yang mendorong siswa berpikir "di luar kotak" — sekaligus memberi ruang bagi siswa untuk melakukan kesalahan dan belajar dari proses tersebut tanpa takut gagal.</p>

  <h4>C. Pemanfaatan Digital (Leveraging Digital)</h4>
  <p>Di era teknologi digital, pemanfaatan perangkat digital menjadi kebutuhan yang membuat pembelajaran lebih interaktif, relevan, dan fleksibel — mulai dari platform daring seperti Google Classroom untuk memberi tugas dan umpan balik, hingga aplikasi seperti Kahoot! atau Quizizz untuk membuat kuis interaktif yang menyenangkan dan membantu siswa belajar sesuai kecepatan masing-masing.</p>
  <p>Namun integrasi teknologi tidak berarti menggantikan metode konvensional sepenuhnya — teknologi harus menjadi pelengkap yang mendukung tujuan pembelajaran, misalnya aplikasi peta digital atau simulasi 3D dalam pelajaran geografi untuk menjelaskan topografi wilayah. Media digital seperti video, animasi, atau simulasi juga sangat membantu menjelaskan konsep abstrak yang sulit dipahami lewat teks semata, seperti gerak parabola atau gaya gravitasi dalam fisika, sekaligus memperkuat ingatan siswa karena mereka tidak hanya mendengar tetapi juga melihat representasi visualnya.</p>

  <h4>D. Kemitraan Pembelajaran (Learning Partnership)</h4>
  <p>Kemitraan pembelajaran melibatkan lebih dari sekadar guru dan siswa — ia mengintegrasikan orang tua, komunitas, bahkan mitra global. Kolaborasi dengan orang tua dan komunitas membuat pembelajaran lebih kontekstual, misalnya lewat kunjungan lapangan atau mengundang orang tua sebagai narasumber, sementara sumber daya lokal seperti museum atau perpustakaan memperkaya pengalaman belajar siswa.</p>
  <p>Prinsip penting lainnya adalah memberdayakan siswa sebagai mitra aktif dalam proses belajarnya sendiri — misalnya lewat diskusi kelas untuk menentukan tema proyek, atau kebebasan memilih produk akhir tugas seperti presentasi, laporan tertulis, atau video dokumenter — sehingga mereka merasa memiliki kendali dan tanggung jawab lebih besar. Di dunia yang semakin terhubung, kemitraan global lewat proyek kolaboratif lintas negara atau budaya juga memperluas wawasan siswa tentang berbagai perspektif dan isu global, seperti proyek bersama antara siswa dari dua negara berbeda yang membahas dampak perubahan iklim di wilayah masing-masing — mengasah kemampuan mereka bekerja sama secara lintas budaya sekaligus berpikir kritis tentang peran mereka sebagai warga dunia.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat elemen kerangka deep learning (praktik pedagogis, lingkungan pembelajaran, pemanfaatan digital, kemitraan pembelajaran) yang dibahas di bab ini, elemen mana yang menurut Anda paling belum berjalan optimal di kelas atau sekolah Anda — dan langkah kecil apa yang bisa mulai dicoba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, kerangka pembelajaran deep learning terdiri dari empat elemen utama, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Praktik pedagogis, lingkungan pembelajaran, pemanfaatan digital, dan kemitraan pembelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum, ujian, rapor, dan kelulusan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Disiplin, hafalan, tugas rumah, dan ranking kelas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru matematika langsung memberikan rumus kepada siswa dan meminta mereka menghafalkannya, tanpa memberi kesempatan siswa menemukan pola masalah sendiri. Berdasarkan konsep praktik pedagogis pada Bab 1, apa yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa cenderung menghafal rumus secara mekanis tanpa benar-benar memahami dan memiliki kendali atas proses belajarnya, karena peran guru masih sebagai penyampai informasi, bukan fasilitator</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan otomatis memahami konsep secara mendalam karena rumus adalah cara tercepat untuk belajar matematika</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena metode mengajar tidak memengaruhi pemahaman siswa</button>
  </div>
  <div class="quiz-q">
    <p>SMP Nusantara ingin memperkaya pembelajaran geografinya, namun sekolah hanya punya akses internet terbatas dan tidak semua siswa punya gawai pribadi. Berdasarkan Bab 1 tentang pemanfaatan digital, langkah paling realistis adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan seluruh rencana pembelajaran interaktif karena teknologi dianggap syarat mutlak deep learning</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan media yang tersedia secara bertahap dan proporsional, misalnya menampilkan simulasi 3D lewat satu perangkat bersama di kelas, sambil tetap mengutamakan metode konvensional yang relevan sebagai pelengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa setiap siswa membeli gawai pribadi sebelum pelajaran geografi dapat dilanjutkan</button>
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
<h2 class="reveal">Pengalaman Belajar</h2>
<p class="lede reveal">Pengalaman belajar yang mendalam adalah inti dari pembelajaran bermakna — siswa tidak sekadar menyerap informasi, tetapi benar-benar memahami konsep, menghubungkannya dengan kehidupan nyata, dan mampu mengaplikasikannya. Proses ini berjalan lewat tiga tahap berurutan: memahami, mengaplikasi, dan merefleksi.</p>

<div class="card reveal">
  <h4>A. Memahami (Understanding)</h4>
  <p>Pemahaman konsep yang mendalam adalah fondasi sebelum siswa dapat mengaplikasikan pengetahuannya dalam situasi nyata. Jika siswa langsung diminta praktik tanpa memahami konsep dasar, mereka cenderung mengerjakan tugas secara mekanis tanpa benar-benar mengetahui maknanya — misalnya siswa perlu memahami konsep penjumlahan dan pengurangan lebih dulu sebelum mampu menyelesaikan soal cerita sehari-hari.</p>
  <p>Untuk membangun pemahaman ini, guru dapat menggunakan berbagai strategi seperti peta konsep untuk membantu siswa melihat hubungan antar-materi, brainstorming untuk merangsang pemikiran kreatif, serta diskusi kelas dengan pertanyaan pemandu yang mendorong siswa berpikir lebih dalam. Pemahaman siswa kemudian perlu diuji lewat umpan balik yang efektif — spesifik, jelas, dan disertai saran perbaikan, bukan sekadar menunjukkan jawaban salah, tetapi juga menjelaskan letak kesalahan dan langkah memperbaikinya, sekaligus mendorong siswa melakukan refleksi diri atas hasil belajarnya.</p>

  <h4>B. Mengaplikasi (Applying)</h4>
  <p>Setelah memahami konsep, langkah berikutnya adalah mengaplikasikan pengetahuan itu ke situasi nyata agar siswa melihat relevansinya dengan kehidupan sehari-hari. Menghubungkan teori dengan praktik membuat siswa lebih termotivasi — misalnya mengaitkan hukum Newton dengan aktivitas mengendarai sepeda atau bermain bola, atau hukum permintaan-penawaran dengan pengamatan harga barang di pasar lokal.</p>
  <p>Tugas proyek dan studi kasus menjadi metode efektif untuk melatih aplikasi ini, seperti proyek penelitian ekosistem sederhana di lingkungan sekitar atau studi kasus perusahaan yang mengalami penurunan penjualan yang harus dianalisis penyebab dan solusinya. Selain itu, aktivitas seperti debat, simulasi, atau permainan peran melatih siswa berpikir kritis dan analitis — misalnya debat tentang isu sosial yang menuntut siswa mengumpulkan data dan menyusun argumen, atau simulasi bencana alam yang mengharuskan siswa membuat rencana evakuasi berdasarkan analisis situasi.</p>

  <h4>C. Merefleksi (Reflecting)</h4>
  <p>Setelah mengaplikasikan konsep, langkah terakhir yang tidak kalah penting adalah refleksi — proses introspektif di mana siswa merenungkan apa yang telah dipelajari, bagaimana mereka belajar, dan bagaimana bisa memperbaiki diri di masa depan. Misalnya setelah menyelesaikan proyek berbasis masalah, siswa diajak merefleksikan tantangan yang dihadapi dan cara mengatasinya, sehingga mereka lebih siap menghadapi proyek serupa berikutnya.</p>
  <p>Ada beberapa metode refleksi yang dapat digunakan: jurnal refleksi tempat siswa menulis pemikiran tentang proses belajarnya, diskusi reflektif yang membuka ruang berbagi pengalaman dan sudut pandang antar-siswa, serta self-assessment yang melatih siswa mengevaluasi kinerjanya sendiri lewat rubrik yang telah ditentukan. Dengan refleksi yang konsisten, siswa dapat menetapkan tujuan belajar baru dan mengembangkan strategi mencapainya — misalnya menyadari kesulitan bekerja sama dalam kelompok lalu menetapkan tujuan memperbaiki keterampilan komunikasi — sehingga proses belajar menjadi lebih aktif, bertanggung jawab, dan berkelanjutan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tahap pengalaman belajar (memahami, mengaplikasi, merefleksi) yang dibahas di bab ini, tahap mana yang paling sering terlewat atau terburu-buru dalam praktik mengajar Anda selama ini — dan bagaimana Anda bisa memberi ruang lebih untuk tahap tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, tiga tahap utama dalam menciptakan pengalaman belajar yang mendalam adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memahami, mengaplikasi, dan merefleksi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghafal, mengulang, dan menguji</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mendengar, mencatat, dan mengumpulkan tugas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sains langsung meminta siswa melakukan eksperimen tentang hukum kekekalan energi tanpa terlebih dahulu memastikan siswa memahami konsep dasar energi. Berdasarkan tahap "Memahami" pada Bab 2, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa berisiko melakukan eksperimen secara mekanis tanpa benar-benar mengetahui maknanya, sehingga pembelajaran menjadi dangkal dan hasilnya tidak bertahan lama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena eksperimen langsung selalu lebih efektif dibanding penjelasan konsep terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan otomatis memahami konsep energi hanya dengan melakukan eksperimen tanpa penjelasan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Setelah menyelesaikan proyek kelompok tentang daur ulang sampah, seorang guru langsung memberi nilai tanpa mengajak siswa mendiskusikan tantangan yang mereka hadapi atau apa yang mereka pelajari dari proses tersebut. Berdasarkan tahap "Merefleksi" pada Bab 2, apa yang terlewat dari proses ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang terlewat karena nilai akhir sudah cukup mewakili keseluruhan proses belajar siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kesempatan bagi siswa untuk merenungkan proses belajarnya sendiri, mengidentifikasi keberhasilan dan kesalahan, serta menetapkan tujuan perbaikan untuk proyek berikutnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Proyek tersebut seharusnya dibatalkan karena refleksi hanya relevan untuk tugas individual, bukan kelompok</button>
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
<h2 class="reveal">Prinsip Pembelajaran</h2>
<p class="lede reveal">Pembelajaran bermakna tidak hanya bergantung pada konten dan metode, tetapi juga pada prinsip-prinsip inti yang menempatkan siswa sebagai pusat proses belajar. Bab ini membahas tiga prinsip utama yang membimbing guru menciptakan suasana kelas yang mendukung keterlibatan emosional, intelektual, dan sosial siswa: mindful, meaningful, dan joyful.</p>

<div class="card reveal">
  <h4>A. Mindful (Berhati-hati dan Berkesadaran)</h4>
  <p>Prinsip mindful berarti melibatkan siswa secara penuh dalam setiap momen belajar — hadir secara fisik dan mental tanpa distraksi, sehingga mereka benar-benar menyadari apa yang sedang dipelajari, mengapa itu penting, dan bagaimana menerapkannya. Misalnya saat mempelajari fotosintesis, siswa diajak mengamati langsung tanaman di sekitar mereka dan merenungkan peran fotosintesis dalam kehidupan sehari-hari, bukan sekadar menghafal definisi.</p>
  <p>Guru dapat mengintegrasikan beberapa teknik mindfulness ke dalam aktivitas kelas: pernapasan sadar sebelum memulai pelajaran atau setelah tugas berat untuk menenangkan pikiran, jeda reflektif di tengah atau akhir pelajaran untuk merenungkan apa yang telah dipelajari, serta visualisasi yang mengarahkan siswa membayangkan bagaimana konsep diterapkan dalam kehidupan nyata. Teknik-teknik ini sekaligus membantu siswa mengelola stres — sebab siswa yang tertekan sulit berkonsentrasi — misalnya lewat sesi relaksasi singkat sebelum ujian atau waktu istirahat singkat untuk peregangan tubuh di tengah pelajaran, sehingga siswa lebih siap dan percaya diri melanjutkan pembelajaran.</p>

  <h4>B. Meaningful (Bermakna)</h4>
  <p>Prinsip meaningful mengacu pada relevansi pelajaran dengan kehidupan siswa dan dampak jangka panjangnya terhadap pemahaman mereka. Agar pembelajaran dianggap bermakna, guru perlu memastikan tiga kriteria terpenuhi: relevansi dengan kehidupan atau minat siswa, aplikasi nyata yang bisa mereka lihat penerapannya, serta keterlibatan emosional yang menggugah minat siswa terhadap materi.</p>
  <p>Salah satu cara paling efektif menciptakan pembelajaran bermakna adalah menghubungkan materi dengan kehidupan sehari-hari siswa, misalnya mengaitkan perhitungan persentase dengan diskon belanja, atau siklus air dengan fenomena alam yang mereka amati langsung. Proyek bermakna juga dapat diterapkan berjenjang sesuai usia — anak PAUD menanam tanaman di kebun sekolah untuk belajar tanggung jawab, siswa SD melakukan daur ulang limbah plastik sederhana, siswa SMP membuat kampanye pola makan sehat, hingga siswa SMA meneliti isu lokal seperti pengelolaan sampah dan memberikan solusi yang dapat diimplementasikan di komunitas mereka — sehingga pembelajaran tidak hanya menjadi aktivitas akademik, tetapi pengalaman hidup yang membekas.</p>

  <h4>C. Joyful (Menyenangkan)</h4>
  <p>Prinsip joyful menekankan pentingnya suasana belajar yang positif dan menyenangkan. Emosi positif memainkan peran besar dalam meningkatkan kinerja akademik — siswa yang bahagia lebih mampu berkonsentrasi, berpikir kreatif, dan bekerja sama, sekaligus lebih mudah mengingat materi karena emosi positif memperkuat proses penyimpanan memori di otak.</p>
  <p>Guru dapat menciptakan suasana menyenangkan lewat berbagai cara: permainan edukatif seperti kuis interaktif menggunakan Kahoot! atau Quizizz, proyek seni yang mengintegrasikan kreativitas ke pelajaran sains atau matematika, serta video dan animasi yang menyederhanakan konsep sulit. Lingkungan fisik kelas juga berperan — dekorasi menarik, zona belajar tematik seperti "Sudut Membaca," dan musik latar yang menenangkan dapat membuat siswa merasa nyaman dan bersemangat. Tidak kalah penting, budaya kelas yang positif — di mana siswa bebas berpendapat tanpa takut dihakimi dan hasil karyanya diapresiasi lewat pajangan di papan kelas — akan menumbuhkan rasa percaya diri dan motivasi belajar yang berkelanjutan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga prinsip (mindful, meaningful, joyful) yang dibahas di bab ini, prinsip mana yang paling jarang Anda terapkan secara sadar selama mengajar — dan satu langkah kecil apa yang bisa mulai dicoba pada pertemuan kelas berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, tiga prinsip utama pembelajaran deep learning adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mindful, meaningful, dan joyful</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Disiplin, hafalan, dan ujian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cepat, ringkas, dan efisien</button>
  </div>
  <div class="quiz-q">
    <p>Menjelang ujian, seorang guru mengadakan sesi relaksasi singkat dan latihan pernapasan bersama siswa sebelum soal dibagikan. Berdasarkan prinsip mindful pada Bab 3, apa tujuan utama dari langkah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Untuk membuang waktu ujian agar siswa memiliki alasan mendapat nilai rendah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Untuk membantu siswa mengelola stres dan mempertahankan fokus, karena siswa yang tertekan cenderung sulit berkonsentrasi dan memahami materi dengan baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Untuk menggantikan seluruh proses belajar dengan latihan pernapasan semata</button>
  </div>
  <div class="quiz-q">
    <p>SD Ceria ingin menerapkan pembelajaran bermakna tentang perhitungan persentase, namun guru hanya memberi latihan soal abstrak tanpa konteks apa pun. Berdasarkan prinsip meaningful pada Bab 3, perbaikan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah soal abstrak agar siswa lebih terlatih menghafal rumus persentase</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengaitkan perhitungan persentase dengan situasi nyata yang relevan bagi siswa, misalnya menghitung diskon saat berbelanja, sehingga materi terasa relevan dan mudah diingat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus materi persentase karena dianggap terlalu sulit untuk dibuat bermakna</button>
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
<h2 class="reveal">Dimensi Profil Lulusan</h2>
<p class="lede reveal">Sekolah tidak hanya ingin lulusannya cerdas secara akademik, tetapi juga berkarakter kuat dan siap menghadapi kehidupan. Bab ini membahas delapan dimensi profil lulusan yang menjadi pondasi generasi penerus bangsa: keimanan, kewargaan, penalaran kritis, kreativitas, kolaborasi, komunikasi, kemandirian, dan kesehatan.</p>

<div class="card reveal">
  <h4>A. Keimanan</h4>
  <p>Dimensi keimanan menjadi dasar moral yang membimbing siswa mengambil keputusan dan bertindak penuh tanggung jawab. Nilai ini tidak hanya diintegrasikan lewat pelajaran agama, tetapi juga pelajaran umum — misalnya dalam sains, siswa diajak merenungkan keagungan ciptaan Tuhan lewat keajaiban alam semesta saat mempelajari hukum fisika atau proses biologis, sehingga siswa menyadari bahwa ilmu pengetahuan dan keimanan saling melengkapi, bukan bertentangan. Di luar kelas, kegiatan seperti doa pagi bersama, shalat berjamaah, dan proyek sosial berbasis keagamaan seperti bakti sosial atau kunjungan ke panti asuhan menanamkan empati dan kepedulian sebagai bagian dari ajaran agama.</p>

  <h4>B. Kewargaan</h4>
  <p>Dimensi kewargaan membentuk siswa yang bertanggung jawab terhadap lingkungan sosialnya dan memahami hak-kewajibannya sebagai warga negara. Guru dapat mengajarkannya lewat diskusi isu sosial seperti kemiskinan atau kerusakan lingkungan, sementara sekolah dapat mengadakan proyek layanan masyarakat seperti membersihkan lingkungan atau menanam pohon, simulasi sidang parlemen sekolah untuk melatih demokrasi dan menghormati pendapat orang lain, serta kampanye sosial tentang hemat energi atau toleransi antarumat beragama — sehingga siswa memahami bahwa menjadi warga negara baik berarti melaksanakan kewajiban, bukan sekadar mengetahui hak.</p>

  <h4>C. Penalaran Kritis</h4>
  <p>Dimensi ini berfokus pada kemampuan berpikir logis, menganalisis informasi, dan mengevaluasi berbagai sudut pandang sebelum mengambil keputusan. Guru dapat melatihnya lewat tugas yang menantang siswa memecahkan masalah nyata, seperti menganalisis dampak polusi dan mencari solusinya, atau lewat pertanyaan reflektif seperti "mengapa solusi ini lebih efektif dibanding solusi lain?" Diskusi dan debat kelas — misalnya membagi siswa menjadi tim pro dan kontra terhadap suatu isu lalu meminta mereka menyusun argumen berbasis bukti — juga melatih penalaran kritis sekaligus keterampilan komunikasi dan kerja sama.</p>

  <h4>D. Kreativitas</h4>
  <p>Dimensi kreativitas membentuk siswa yang mampu berpikir di luar kebiasaan dan menciptakan karya orisinal. Proyek inovatif di bidang seni, sains-teknologi, atau kewirausahaan — seperti merancang alat sederhana untuk menghemat energi atau memanfaatkan limbah plastik menjadi barang berguna — mengasah kreativitas sekaligus melatih siswa menghadapi tantangan dan bekerja dalam tim. Lingkungan yang mendorong kreativitas memberi kebebasan berpikir kepada siswa, menghargai proses bukan hanya hasil akhir, serta menyediakan ruang kelas yang inspiratif sehingga siswa berani bereksperimen tanpa takut melakukan kesalahan.</p>

  <h4>E. Kolaborasi</h4>
  <p>Dimensi kolaborasi membekali siswa dengan kemampuan bekerja sama secara efektif dalam tim, keterampilan penting di dunia nyata. Aktivitas seperti proyek kelompok dengan pembagian peran yang jelas, permainan edukatif berbasis tim, dan diskusi kelompok menanamkan pentingnya kerja sama, sementara proyek berbasis masalah nyata — seperti mengurangi sampah plastik di sekolah atau menggalang dana sosial — membangun solidaritas emosional karena siswa merasa memiliki tujuan bersama, bukan sekadar kewajiban formal.</p>

  <h4>F. Komunikasi</h4>
  <p>Dimensi komunikasi mengembangkan kemampuan siswa menyampaikan ide secara efektif, baik lisan maupun tertulis. Presentasi individual maupun kelompok melatih siswa mengasah keterampilan berbicara dan menyusun argumen secara runtut, diskusi kelas melatih penyampaian pendapat yang lugas dan sikap menghargai pendapat orang lain, sementara penulisan laporan atau esai argumentatif membangun kemampuan menyusun ide secara logis dan koheren — semuanya diperkuat lewat umpan balik dari teman sebaya yang melatih siswa memberi kritik yang membangun.</p>

  <h4>G. Kemandirian</h4>
  <p>Dimensi kemandirian membentuk siswa yang mampu mengatur diri sendiri, menetapkan tujuan belajar, dan mengambil inisiatif tanpa selalu bergantung pada arahan guru. Guru dapat mendorongnya lewat tujuan belajar yang jelas dan terukur, sesi belajar mandiri dengan kebebasan memilih topik, serta refleksi diri lewat jurnal harian. Strategi lain seperti proyek berbasis minat siswa, penugasan bertahap dari sederhana ke kompleks, dan pemberian pilihan dalam menyelesaikan tugas membuat siswa merasa lebih bertanggung jawab atas keputusan belajarnya sendiri.</p>

  <h4>H. Kesehatan</h4>
  <p>Dimensi kesehatan memastikan siswa tidak hanya sehat fisik, tetapi juga memiliki kesejahteraan mental yang optimal. Sekolah dapat mengintegrasikan keduanya lewat olahraga rutin seperti senam pagi yang mengurangi stres dan meningkatkan suasana hati, program kesadaran kesehatan mental seperti meditasi singkat atau teknik pernapasan, serta sosialisasi pola hidup sehat tentang pola makan, tidur cukup, dan manajemen stres — sehingga siswa memiliki fondasi kuat untuk mencapai prestasi akademik sekaligus kesejahteraan jangka panjang.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari delapan dimensi profil lulusan yang dibahas di bab ini, dimensi mana yang menurut Anda paling kurang mendapat perhatian di sekolah Anda selama ini — dan aktivitas konkret apa yang bisa mulai dijalankan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa dimensi profil lulusan yang dibahas sebagai fondasi pembentukan generasi penerus bangsa?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Delapan dimensi: keimanan, kewargaan, penalaran kritis, kreativitas, kolaborasi, komunikasi, kemandirian, dan kesehatan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Empat dimensi: akademik, olahraga, seni, dan agama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua dimensi: kognitif dan fisik semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sains hanya mengajarkan hukum fisika secara rumus tanpa pernah mengaitkannya dengan rasa syukur atau keagungan ciptaan Tuhan, padahal sekolah memiliki visi keimanan yang kuat. Berdasarkan dimensi Keimanan pada Bab 4, apa yang seharusnya diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru dapat mengaitkan konsep sains dengan nilai spiritual yang relevan, seperti rasa syukur atas keajaiban alam semesta, sehingga siswa menyadari ilmu pengetahuan dan keimanan saling melengkapi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pelajaran sains harus dihapus dan diganti sepenuhnya dengan pelajaran agama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena sains dan keimanan adalah dua hal yang harus dipisahkan sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>SMA Bina Bangsa ingin menumbuhkan dimensi Kolaborasi pada siswanya, namun kegiatan yang ada hanya berupa tugas individual tanpa pernah melibatkan kerja tim. Berdasarkan Bab 4, aktivitas paling tepat untuk ditambahkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah lebih banyak ujian tertulis individual agar siswa lebih fokus belajar sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengadakan proyek berbasis masalah nyata yang dikerjakan dalam tim, seperti kampanye pengurangan sampah plastik, sehingga siswa membangun solidaritas dan belajar bekerja sama mencapai tujuan bersama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang siswa berdiskusi satu sama lain agar tidak mengganggu konsentrasi individu</button>
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
<h2 class="reveal">Panduan Praktis Mengajar yang Bermakna untuk Semua Jenjang</h2>
<p class="lede reveal">Deep learning dapat diterapkan di semua jenjang pendidikan, dari PAUD hingga SMA, asalkan metode pengajaran disesuaikan dengan karakteristik murid di setiap tahap perkembangan. Bab ini memberi panduan praktis dan contoh aktivitas konkret untuk setiap jenjang.</p>

<div class="card reveal">
  <h4>A. Penerapan Deep Learning di PAUD</h4>
  <p>Anak usia dini berada dalam fase perkembangan motorik, kognitif, sosial, dan emosional yang pesat, dengan rasa ingin tahu tinggi namun mudah teralihkan. Karena itu, pembelajaran di PAUD berfokus pada eksplorasi lewat bermain — misalnya permainan sensorik seperti pasir kinetik untuk mengenal tekstur dan konsep sains sederhana, atau permainan mencocokkan bentuk untuk mengenalkan geometri dasar. Aktivitas interaktif seperti bermain peran dan lingkaran cerita mengembangkan keterampilan sosial-emosional, sementara kegiatan seni seperti menggambar bebas dan membuat kolase menstimulasi kreativitas dan imajinasi. Refleksi sederhana lewat pertanyaan terbuka seperti "apa yang kamu pelajari hari ini?" membantu anak mulai menumbuhkan kebiasaan berpikir reflektif sejak dini.</p>

  <h4>B. Penerapan Deep Learning di SD</h4>
  <p>Di jenjang SD, anak mulai mengembangkan kemampuan membaca, menulis, berhitung, dan berpikir logis namun tetap imajinatif, sehingga pengajaran perlu menghubungkan konsep teoretis dengan aktivitas praktis nyata — misalnya proyek kebun sekolah untuk memahami siklus hidup tanaman, atau membuat miniatur kota untuk memahami tata ruang. Proyek berbasis masalah seperti merancang prototipe kendaraan ramah lingkungan dari bahan bekas mendorong kreativitas dan kemampuan problem solving, sementara tugas individual seperti proyek buku harian sains atau penulisan cerita kreatif menumbuhkan kemandirian dan tanggung jawab siswa terhadap proses belajarnya sendiri.</p>

  <h4>C. Penerapan Deep Learning di SMP</h4>
  <p>Siswa SMP mengalami masa transisi penting — mencari identitas diri, mulai berpikir abstrak dan kritis, serta memiliki rasa ingin tahu terhadap dunia luar. Tugas proyek berbasis penelitian, seperti meneliti dampak pencemaran udara di lingkungan sekitar, dan proyek kolaboratif seperti pembuatan film pendek tentang isu sosial mengembangkan kemandirian sekaligus kreativitas. Kegiatan ekstrakurikuler seperti klub debat atau karya ilmiah remaja menumbuhkan kecakapan hidup, sementara ruang diskusi dan refleksi terbuka — misalnya membahas bagaimana teknologi memengaruhi kehidupan sosial — melatih siswa berpikir kritis dan membangun kesadaran diri.</p>

  <h4>D. Penerapan Deep Learning di SMA</h4>
  <p>Siswa SMA memiliki kemampuan berpikir abstrak dan kritis yang semakin matang, lebih mandiri namun tetap membutuhkan bimbingan dalam menentukan arah. Pembelajaran berbasis proyek dan penelitian mandiri — seperti meneliti dampak pestisida terhadap tanaman atau menyusun rencana bisnis sederhana — melatih kemampuan analitis dan pendekatan ilmiah. Studi kasus seperti menganalisis dampak urbanisasi atau simulasi negosiasi internasional mempersiapkan siswa menghadapi dunia nyata, sementara proyek kolaboratif dengan pembagian peran spesifik — koordinator, peneliti, presenter — menumbuhkan keterampilan kepemimpinan yang akan berguna saat mereka melanjutkan ke pendidikan tinggi atau dunia kerja.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari panduan praktis per jenjang (PAUD, SD, SMP, SMA) yang dibahas di bab ini, jenjang mana yang paling relevan dengan siswa yang Anda ajar — dan satu aktivitas konkret dari bab ini yang bisa langsung dicoba pada pertemuan berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, di jenjang PAUD, deep learning paling efektif diterapkan melalui...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Eksplorasi dan aktivitas bermain yang menstimulasi berbagai aspek perkembangan anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ujian tertulis rutin setiap minggu untuk mengukur hafalan anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ceramah panjang tentang teori pembelajaran orang dewasa</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru SMP ingin mengembangkan kemandirian dan kreativitas siswanya, namun hanya memberikan tugas hafalan tanpa proyek atau penelitian apa pun. Berdasarkan Bab 5 bagian penerapan di SMP, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena hafalan adalah metode paling efektif untuk segala usia termasuk SMP</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru perlu memberikan tugas proyek berbasis penelitian atau kolaboratif, seperti meneliti isu lingkungan sekitar, karena siswa SMP berada pada masa mencari identitas dan mulai berpikir abstrak-kritis yang butuh ruang eksplorasi mandiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru cukup menambah jumlah soal hafalan agar siswa semakin terlatih mengingat fakta</button>
  </div>
  <div class="quiz-q">
    <p>SMA Harapan Bangsa ingin melatih kepemimpinan siswanya sekaligus mempersiapkan mereka menghadapi dunia kerja. Berdasarkan Bab 5 bagian penerapan di SMA, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatasi seluruh kegiatan pada hafalan teori tanpa proyek nyata agar nilai ujian akhir maksimal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengadakan proyek kolaboratif dengan pembagian peran spesifik seperti koordinator, peneliti, dan presenter, dipadukan dengan studi kasus dan penelitian mandiri yang relevan dengan dunia nyata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh kerja kelompok karena dianggap mengganggu fokus individu siswa SMA</button>
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
<h2 class="reveal">Penilaian dalam Deep Learning</h2>
<p class="lede reveal">Dalam pembelajaran berbasis deep learning, penilaian berperan penting untuk mengukur bukan hanya hasil akhir, tetapi juga proses pembelajaran itu sendiri — bertujuan memberikan umpan balik berkelanjutan agar siswa terus memperbaiki diri dan memahami materi secara mendalam.</p>

<div class="card reveal">
  <h4>A. Menilai Proses, Bukan Hanya Hasil</h4>
  <p>Umpan balik berkelanjutan adalah kunci penilaian dalam deep learning — bukan sekadar mengatakan "salah" atau "benar," melainkan memberi petunjuk spesifik tentang langkah yang perlu diperbaiki, diberikan di setiap tahap proses belajar (bukan hanya di akhir), serta melibatkan siswa dalam refleksi atas umpan balik yang mereka terima lewat jurnal belajar atau diskusi kelas.</p>
  <p>Penilaian yang komprehensif menggabungkan dua jenis: penilaian formatif yang dilakukan terus-menerus selama proses belajar lewat jurnal belajar, kuis singkat, dan observasi guru untuk memantau perkembangan siswa; serta penilaian sumatif di akhir proses lewat tes tertulis, proyek akhir, atau portofolio untuk mengevaluasi sejauh mana tujuan pembelajaran tercapai. Kombinasi keduanya memberi gambaran lengkap: penilaian formatif membantu siswa memperbaiki diri selama proses berlangsung, sementara penilaian sumatif memberi pengukuran hasil akhir yang objektif — sehingga siswa tidak hanya ditekankan pada nilai akhir, tetapi juga pada perjalanan belajarnya.</p>

  <h4>B. Portofolio Sebagai Alat Refleksi dan Evaluasi</h4>
  <p>Portofolio adalah kumpulan hasil kerja siswa yang disusun sistematis untuk menunjukkan perkembangan pembelajaran mereka — bukan sekadar dokumen hasil belajar, tetapi juga alat refleksi di mana siswa menilai kemajuannya sendiri. Guru dapat menentukan jenis karya yang dikumpulkan (esai, hasil eksperimen, laporan proyek), mengintegrasikan refleksi singkat pada setiap karya yang dimasukkan, serta menetapkan jadwal berkala untuk menambahkan hasil kerja ke portofolio.</p>
  <p>Di era digital, portofolio tidak lagi harus berbentuk fisik — portofolio digital lewat platform seperti Google Drive atau Google Sites memberi fleksibilitas dan memungkinkan integrasi multimedia seperti video presentasi atau infografis, sekaligus memudahkan guru dan orang tua memantau kemajuan siswa secara real-time. Presentasi portofolio digital di akhir semester juga menjadi kesempatan siswa mendapat umpan balik langsung dari guru dan teman-temannya.</p>

  <h4>C. Proyek Berbasis Penilaian Otentik</h4>
  <p>Penilaian otentik berfokus pada evaluasi yang mencerminkan situasi dan keterampilan nyata yang akan dihadapi siswa di dunia luar — menilai bukan hanya hasil akhir, tetapi juga proses belajar, kerja sama, kreativitas, dan kemampuan memecahkan masalah nyata. Kriteria keberhasilannya perlu dirumuskan secara spesifik lewat rubrik penilaian yang jelas, mencakup kejelasan laporan, inovasi dalam menemukan solusi, kemampuan berkomunikasi lewat presentasi, dan kolaborasi tim.</p>
  <p>Penerapannya dapat disesuaikan tiap jenjang: siswa SD membuat proyek kebun kelas dan mencatat pertumbuhan tanaman untuk memahami konsep biologi dasar, siswa SMP membuat kampanye pengurangan sampah plastik lengkap dengan survei dampaknya, dan siswa SMA meneliti masalah sosial seperti kemiskinan atau pengangguran lewat wawancara dan memberikan solusi berbasis penelitian. Implementasi yang berhasil membutuhkan perencanaan proyek yang jelas, pembagian tugas yang tepat, monitoring dan umpan balik berkelanjutan, serta sesi presentasi dan evaluasi di akhir — memastikan siswa memperoleh keterampilan yang benar-benar dapat mereka gunakan dalam kehidupan nyata, bukan sekadar mengejar nilai.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pendekatan penilaian (menilai proses, portofolio, penilaian otentik) yang dibahas di bab ini, pendekatan mana yang paling jarang Anda terapkan selama ini — dan langkah kecil apa yang bisa mulai dicoba pada penilaian berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, penilaian yang komprehensif dalam deep learning menggabungkan dua jenis penilaian, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penilaian formatif dan penilaian sumatif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian lisan dan penilaian tertulis semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penilaian harian dan penilaian bulanan tanpa kaitan satu sama lain</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru hanya memberi nilai angka pada tugas siswa tanpa penjelasan lebih lanjut, dan umpan balik itu baru diberikan sebulan setelah tugas dikumpulkan. Berdasarkan konsep menilai proses pada Bab 6, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Umpan balik tidak spesifik dan tidak diberikan secara berkelanjutan selama proses belajar, padahal umpan balik yang efektif harus jelas, membangun, dan diberikan di setiap tahap agar siswa bisa segera memperbaiki diri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang salah karena nilai angka sudah cukup mewakili seluruh proses belajar siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru seharusnya berhenti memberi nilai sama sekali dan hanya mengandalkan pujian lisan</button>
  </div>
  <div class="quiz-q">
    <p>SMP Tunas Bangsa ingin menerapkan proyek berbasis penilaian otentik tentang pengurangan sampah plastik, namun guru hanya menilai hasil poster akhir tanpa memperhatikan proses kerja tim maupun dampak nyata kampanyenya. Berdasarkan Bab 6, apa yang perlu diperbaiki dalam kriteria penilaiannya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup mempertahankan penilaian pada hasil poster saja karena itu produk akhir yang paling mudah dinilai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kriteria penilaian perlu diperluas mencakup kreativitas media kampanye, kemampuan mengumpulkan dan menganalisis data survei, kolaborasi tim, serta dampak nyata kampanye di lingkungan sekolah — bukan hanya produk akhirnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan proyek karena penilaian otentik dianggap terlalu rumit untuk diterapkan di jenjang SMP</button>
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
<h2 class="reveal">Mengatasi Tantangan dalam Implementasi Deep Learning</h2>
<p class="lede reveal">Implementasi deep learning tidak selalu berjalan mulus — guru kerap menghadapi keterbatasan waktu, kurikulum yang padat, hingga fasilitas teknologi yang minim. Bab ini membahas tantangan-tantangan umum tersebut beserta solusi praktis agar pembelajaran tetap berjalan efektif dan bermakna.</p>

<div class="card reveal">
  <h4>A. Kendala Kurikulum dan Waktu</h4>
  <p>Padatnya kurikulum dan keterbatasan waktu sering membuat guru khawatir tidak mampu menyelesaikan seluruh materi jika menerapkan deep learning. Solusinya adalah menggabungkan beberapa tujuan pembelajaran ke dalam satu aktivitas terpadu — misalnya proyek pembuatan miniatur kota yang sekaligus melatih geometri (matematika), tata kota (IPS), dan keberlanjutan lingkungan (sains) — sehingga waktu yang tersedia digunakan lebih efisien tanpa mengorbankan kedalaman materi.</p>
  <p>Strategi kedua adalah memprioritaskan materi yang benar-benar esensial, misalnya dengan teknik Pareto (fokus pada 20% materi yang memberi 80% manfaat bagi siswa) dan mengurangi materi yang bersifat repetitif. Dalam pelajaran matematika, misalnya, guru bisa berfokus pada konsep inti seperti pecahan dan pengukuran yang relevan dengan kehidupan sehari-hari, dibanding mengejar hafalan seluruh rumus. Dengan dua strategi ini, guru dapat menciptakan pembelajaran yang tetap efisien namun mendalam, memastikan siswa memahami konsep yang benar-benar berguna, bukan sekadar menyelesaikan isi kurikulum.</p>

  <h4>B. Keterbatasan Teknologi</h4>
  <p>Di sekolah dengan fasilitas teknologi terbatas, deep learning tetap bisa diterapkan lewat pendekatan kreatif: mengoptimalkan sumber daya lokal seperti observasi langsung di lapangan, memanfaatkan media cetak seperti poster dan peta fisik, serta mendorong pembelajaran berbasis diskusi dan kerja kelompok tanpa bergantung pada perangkat digital.</p>
  <p>Ketika akses internet tidak tersedia luas, guru dapat menggunakan alat peraga fisik seperti miniatur bangunan atau diagram kertas, buku kerja berbasis proyek yang memandu siswa belajar mandiri, serta simulasi dan permainan peran seperti sidang pengadilan tiruan atau pertemuan dewan kota tiruan. Metode-metode non-digital ini memastikan siswa tetap dapat mengembangkan kemampuan komunikasi, berpikir kritis, dan kreativitas — membuktikan bahwa keterbatasan teknologi bukan penghalang mutlak bagi pembelajaran bermakna.</p>

  <h4>C. Peran Guru dalam Mengubah Mindset</h4>
  <p>Guru bukan hanya penyampai ilmu, tetapi juga agen perubahan yang perlu memiliki mindset terbuka terhadap perubahan. Mengubah metode mengajar dari pendekatan konvensional ke deep learning tidak bisa dilakukan secara instan — guru sebaiknya memulai dengan satu metode baru, misalnya mencoba pembelajaran berbasis proyek atau diskusi kelompok, melibatkan siswa dalam proses adaptasi, lalu mengevaluasi dan menyesuaikan langkah berikutnya secara bertahap.</p>
  <p>Agar pembelajaran deep learning terus berkembang, guru juga perlu membiasakan refleksi dan perbaikan diri berkelanjutan — menyediakan waktu khusus untuk merefleksikan kegiatan mengajar, menuliskan pengalaman dalam jurnal refleksi, serta melibatkan rekan sejawat lewat diskusi mingguan atau observasi kelas bersama. Membangun komunitas guru untuk berbagi praktik baik — lewat kelompok diskusi, lokakarya internal, platform digital, atau sistem mentor-mentee — memastikan guru tidak menghadapi tantangan sendirian, sehingga inovasi dan profesionalisme terus berkembang secara kolektif demi pembelajaran yang lebih bermakna bagi siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tantangan (kurikulum dan waktu, keterbatasan teknologi, mindset guru) yang dibahas di bab ini, tantangan mana yang paling nyata Anda hadapi sehari-hari — dan solusi mana dari bab ini yang paling realistis untuk mulai dicoba?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, salah satu solusi untuk menyiasati kendala kurikulum yang padat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggabungkan beberapa tujuan pembelajaran ke dalam satu aktivitas terpadu sehingga waktu digunakan lebih efisien</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jam pelajaran hingga larut malam agar seluruh materi dapat diajarkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh mata pelajaran kecuali satu bidang studi utama</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah di daerah terpencil hanya memiliki akses internet yang sangat terbatas dan tidak semua siswa memiliki gawai. Kepala sekolah berpikir deep learning mustahil diterapkan di sana. Berdasarkan Bab 7 bagian keterbatasan teknologi, pandangan ini...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurang tepat, karena deep learning tetap bisa diterapkan lewat pendekatan kreatif non-digital seperti observasi lapangan, media cetak, alat peraga fisik, dan simulasi peran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sepenuhnya tepat, karena deep learning hanya bisa berjalan jika sekolah memiliki teknologi digital yang lengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tepat, sehingga sekolah sebaiknya kembali sepenuhnya ke metode ceramah dan hafalan tanpa aktivitas lain</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru senior merasa skeptis mengubah metode mengajarnya yang sudah dipakai bertahun-tahun, dan mencoba mengubah seluruh sistem pembelajarannya sekaligus dalam satu minggu — hasilnya ia kewalahan dan kembali ke cara lama. Berdasarkan Bab 7 bagian peran guru dalam mengubah mindset, apa yang seharusnya dilakukan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap mempertahankan metode lama sepenuhnya karena perubahan dianggap selalu berisiko gagal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan perubahan secara bertahap, dimulai dari satu metode baru yang sederhana, melibatkan siswa dalam prosesnya, lalu mengevaluasi dan menyesuaikan sebelum melangkah lebih jauh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mencoba mengubah seluruh sistem sekaligus lagi tanpa evaluasi apa pun agar prosesnya lebih cepat selesai</button>
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
    <p>Berdasarkan Bab 1, kerangka pembelajaran deep learning terdiri dari empat elemen utama, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Praktik pedagogis, lingkungan pembelajaran, pemanfaatan digital, dan kemitraan pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum, ujian, rapor, dan kelulusan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Disiplin, hafalan, tugas rumah, dan ranking kelas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru matematika langsung memberikan rumus tanpa memberi kesempatan siswa menemukan pola masalah sendiri. Berdasarkan Bab 1, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa cenderung menghafal secara mekanis tanpa benar-benar memahami, karena peran guru masih sebagai penyampai informasi, bukan fasilitator</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa otomatis memahami konsep secara mendalam karena rumus adalah cara belajar tercepat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun terhadap pemahaman siswa</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>SMP dengan akses internet terbatas ingin tetap memperkaya pembelajaran geografinya. Berdasarkan Bab 1 tentang pemanfaatan digital, langkah paling realistis adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatalkan seluruh rencana karena teknologi dianggap syarat mutlak deep learning</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memanfaatkan media yang tersedia secara proporsional sebagai pelengkap, sambil tetap mengutamakan metode konvensional yang relevan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksa setiap siswa membeli gawai pribadi terlebih dahulu</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2, tiga tahap utama dalam menciptakan pengalaman belajar yang mendalam adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memahami, mengaplikasi, dan merefleksi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghafal, mengulang, dan menguji</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendengar, mencatat, dan mengumpulkan tugas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru sains langsung meminta siswa melakukan eksperimen tentang hukum kekekalan energi tanpa memastikan pemahaman konsep dasar energi terlebih dahulu. Berdasarkan Bab 2, apa risikonya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa berisiko melakukan eksperimen secara mekanis tanpa benar-benar memahami maknanya, sehingga hasilnya tidak bertahan lama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena eksperimen langsung selalu lebih efektif dibanding penjelasan konsep dahulu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa otomatis memahami konsep energi hanya dengan bereksperimen tanpa penjelasan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, tiga prinsip utama pembelajaran deep learning adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mindful, meaningful, dan joyful</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Disiplin, hafalan, dan ujian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Cepat, ringkas, dan efisien</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menjelang ujian, seorang guru mengadakan sesi relaksasi dan latihan pernapasan bersama siswa. Berdasarkan prinsip mindful pada Bab 3, apa tujuan utamanya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Untuk membuang waktu ujian tanpa tujuan jelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Untuk membantu siswa mengelola stres dan mempertahankan fokus, karena siswa yang tertekan cenderung sulit berkonsentrasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Untuk menggantikan seluruh proses belajar dengan latihan pernapasan semata</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SD ingin menerapkan pembelajaran bermakna tentang persentase, namun guru hanya memberi latihan soal abstrak tanpa konteks. Berdasarkan prinsip meaningful pada Bab 3, perbaikan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah soal abstrak agar siswa lebih terlatih menghafal rumus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengaitkan perhitungan persentase dengan situasi nyata seperti menghitung diskon belanja agar materi terasa relevan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus materi persentase karena dianggap terlalu sulit dibuat bermakna</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, ada berapa dimensi profil lulusan yang menjadi fondasi pembentukan generasi penerus bangsa?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Delapan dimensi: keimanan, kewargaan, penalaran kritis, kreativitas, kolaborasi, komunikasi, kemandirian, dan kesehatan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empat dimensi: akademik, olahraga, seni, dan agama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dua dimensi: kognitif dan fisik semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru sains hanya mengajarkan rumus fisika tanpa pernah mengaitkannya dengan rasa syukur atau keagungan ciptaan Tuhan, padahal sekolah memiliki visi keimanan kuat. Berdasarkan dimensi Keimanan pada Bab 4, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru dapat mengaitkan konsep sains dengan nilai spiritual yang relevan, sehingga siswa menyadari ilmu pengetahuan dan keimanan saling melengkapi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelajaran sains harus dihapus dan diganti sepenuhnya dengan pelajaran agama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena sains dan keimanan harus dipisahkan sepenuhnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SMA ingin menumbuhkan dimensi Kolaborasi, namun kegiatan yang ada hanya tugas individual tanpa kerja tim. Berdasarkan Bab 4, aktivitas paling tepat ditambahkan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah lebih banyak ujian tertulis individual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengadakan proyek berbasis masalah nyata yang dikerjakan dalam tim, sehingga siswa membangun solidaritas dan bekerja sama mencapai tujuan bersama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melarang siswa berdiskusi satu sama lain</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, di jenjang PAUD, deep learning paling efektif diterapkan melalui...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Eksplorasi dan aktivitas bermain yang menstimulasi berbagai aspek perkembangan anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ujian tertulis rutin setiap minggu untuk mengukur hafalan anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ceramah panjang tentang teori pembelajaran orang dewasa</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru SMP hanya memberikan tugas hafalan tanpa proyek atau penelitian apa pun. Berdasarkan Bab 5 bagian penerapan di SMP, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena hafalan adalah metode paling efektif untuk segala usia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru perlu memberikan tugas proyek berbasis penelitian atau kolaboratif, karena siswa SMP mulai berpikir abstrak-kritis dan butuh ruang eksplorasi mandiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru cukup menambah jumlah soal hafalan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SMA ingin melatih kepemimpinan siswanya sekaligus mempersiapkan mereka menghadapi dunia kerja. Berdasarkan Bab 5 bagian penerapan di SMA, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi seluruh kegiatan pada hafalan teori tanpa proyek nyata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengadakan proyek kolaboratif dengan pembagian peran spesifik, dipadukan dengan studi kasus dan penelitian mandiri yang relevan dengan dunia nyata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh kerja kelompok karena mengganggu fokus individu</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, penilaian yang komprehensif dalam deep learning menggabungkan dua jenis penilaian, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian formatif dan penilaian sumatif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian lisan dan penilaian tertulis semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penilaian harian dan penilaian bulanan tanpa kaitan satu sama lain</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru hanya memberi nilai angka tanpa penjelasan, dan umpan balik baru diberikan sebulan setelah tugas dikumpulkan. Berdasarkan Bab 6, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Umpan balik tidak spesifik dan tidak diberikan berkelanjutan, padahal umpan balik efektif harus jelas dan diberikan di setiap tahap agar siswa segera bisa memperbaiki diri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah karena nilai angka sudah cukup mewakili seluruh proses belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru seharusnya berhenti memberi nilai sama sekali</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SMP menerapkan proyek penilaian otentik tentang pengurangan sampah plastik, namun guru hanya menilai hasil poster akhir tanpa memperhatikan proses kerja tim maupun dampak nyatanya. Berdasarkan Bab 6, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Cukup mempertahankan penilaian pada hasil poster saja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kriteria penilaian perlu diperluas mencakup kreativitas media, kemampuan analisis data survei, kolaborasi tim, serta dampak nyata kampanye — bukan hanya produk akhirnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatalkan proyek karena penilaian otentik dianggap terlalu rumit untuk SMP</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, salah satu solusi untuk menyiasati kendala kurikulum yang padat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggabungkan beberapa tujuan pembelajaran ke dalam satu aktivitas terpadu sehingga waktu digunakan lebih efisien</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jam pelajaran hingga larut malam agar seluruh materi dapat diajarkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh mata pelajaran kecuali satu bidang studi utama</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah di daerah terpencil dengan akses internet sangat terbatas menganggap deep learning mustahil diterapkan. Berdasarkan Bab 7, pandangan ini...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurang tepat, karena deep learning tetap bisa diterapkan lewat pendekatan kreatif non-digital seperti observasi lapangan, media cetak, dan simulasi peran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sepenuhnya tepat, karena deep learning hanya bisa berjalan dengan teknologi digital lengkap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tepat, sehingga sekolah sebaiknya kembali sepenuhnya ke metode ceramah dan hafalan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan keseluruhan isi buku ini, benang merah yang paling menyatukan seluruh bab (kerangka pembelajaran, pengalaman belajar, prinsip, profil lulusan, panduan jenjang, penilaian, hingga tantangan) tentang pendekatan deep learning adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deep learning hanya soal menambah jumlah materi pelajaran agar siswa lebih banyak menghafal fakta</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deep learning hanya relevan untuk sekolah dengan fasilitas teknologi lengkap dan siswa berprestasi tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deep learning mengutamakan pemahaman mendalam, relevansi dengan kehidupan nyata, dan keterlibatan aktif siswa secara menyeluruh — bukan sekadar "belajar lebih banyak" tetapi "belajar lebih baik"</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
