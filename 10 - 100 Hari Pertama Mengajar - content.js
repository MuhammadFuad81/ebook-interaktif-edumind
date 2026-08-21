/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "100 Hari Pertama Mengajar"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-100-hari-pertama-mengajar.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Persiapan Sebelum Hari Pertama Mengajar</h2>
<p class="lede reveal">Sebelum kaki Anda melangkah masuk ke kelas untuk pertama kalinya, ada empat hal mendasar yang perlu disiapkan lebih dulu — mengenal sekolah dan kurikulumnya, menyusun rencana pelajaran awal, menata ruang kelas, serta memahami seluas apa sebenarnya peran dan tanggung jawab seorang guru.</p>

<div class="card reveal">
  <h4>A. Mengenali Sekolah dan Kurikulum</h4>
  <p>Langkah pertama yang perlu dilakukan calon guru sebelum hari pertama mengajar adalah mengenali budaya sekolah tempatnya bekerja. Jika memungkinkan, kunjungi sekolah beberapa kali sebelum hari pertama untuk mengamati lingkungan, fasilitas, dan suasana yang ada. Ajak bicara rekan guru yang lebih berpengalaman untuk mendengar cerita mereka tentang budaya kerja dan dinamika di sekolah tersebut, dan bila memungkinkan cari tahu lebih dulu tentang siswa yang akan diajar — latar belakang, minat, dan kebutuhan khusus mereka adalah bekal berharga yang membantu Anda tidak buta arah di hari pertama.</p>
  <p>Setelah mengenal budaya sekolah, langkah berikutnya adalah memahami kurikulum secara mendalam: pelajari kurikulum resmi yang ditetapkan sekolah atau pemerintah, pastikan Anda memahami tujuan pembelajaran, materi yang akan diajarkan, dan standar penilaian yang berlaku, lalu mulai menyusun kerangka besar rencana pelajaran untuk semester atau tahun ajaran sebelum merincinya menjadi rencana mingguan dan harian. Di samping itu, kenali pula kebijakan sekolah — kebijakan disiplin (prosedur menangani masalah perilaku dan absensi), kebijakan akademik (cara penilaian, ujian, dan pelaporan kemajuan siswa), serta kebijakan komunikasi (prosedur berhubungan dengan orang tua, rekan guru, dan staf sekolah). Manfaatkan pula sesi orientasi guru baru dan pelatihan profesional yang ditawarkan sekolah, karena keduanya adalah kesempatan berharga untuk mengenal lebih banyak sekaligus mengasah keterampilan mengajar, mengelola kelas, dan menggunakan teknologi pendidikan sejak sebelum hari pertama dimulai.</p>

  <h4>B. Membuat Rencana Pelajaran Awal</h4>
  <p>Menyusun rencana pelajaran untuk minggu-minggu pertama adalah langkah penting agar Anda siap menghadapi kelas dengan terorganisir dan memberi struktur yang jelas bagi siswa. Semuanya dimulai dari menentukan tujuan pembelajaran — baik tujuan umum untuk minggu-minggu awal (misalnya mengenal materi dasar atau membangun kebiasaan belajar yang baik) maupun tujuan spesifik untuk tiap hari atau minggu yang dirumuskan secara terukur, seperti "siswa dapat menyebutkan dan memahami lima kata baru dalam bahasa Inggris". Dari tujuan ini, susun jadwal harian yang mencakup aktivitas pembukaan, kegiatan inti, dan penutupan (jangan lupa menyisakan waktu untuk pertanyaan dan refleksi), sekaligus jadwal mingguan yang memberi gambaran besar tentang apa yang akan dibahas setiap hari.</p>
  <p>Pemilihan metode pengajaran juga perlu dipikirkan sejak awal — memadukan ceramah singkat dan interaktif, diskusi kelompok yang mendorong siswa belajar dari satu sama lain, serta kegiatan praktik atau eksperimen yang membantu siswa memahami konsep dengan lebih baik. Setelah metode ditentukan, siapkan materi dan sumber belajar yang dibutuhkan (buku teks, alat bantu visual, lembar kerja), rencanakan cara mengevaluasi pemahaman siswa lewat kuis singkat, penilaian formatif, dan umpan balik yang konstruktif, lalu jangan lupa tetap fleksibel: bersiaplah menyesuaikan rencana berdasarkan respons nyata siswa, dan lakukan refleksi harian untuk mencatat apa yang berhasil serta apa yang perlu diperbaiki. Rencana yang baik bukan dokumen kaku yang harus diikuti persis, melainkan peta jalan yang boleh — bahkan harus — disesuaikan seiring Anda semakin mengenal kelas.</p>

  <h4>C. Mengatur Ruang Kelas</h4>
  <p>Ruang kelas yang tertata baik adalah fondasi lingkungan belajar yang kondusif. Penempatan meja dan kursi bisa disusun dalam formasi U atau lingkaran untuk memudahkan interaksi dan diskusi kelompok, atau dalam kelompok-kelompok kecil untuk kegiatan kolaboratif — pilihan formasi ini sebaiknya disesuaikan dengan gaya mengajar dan karakter kelas Anda. Selain penataan meja, siapkan pula area belajar dan zona khusus: papan tulis yang mudah diakses dari semua sudut, sudut bacaan dengan buku-buku relevan yang nyaman dikunjungi, serta zona kreatif untuk kegiatan seperti menggambar atau eksperimen sains. Dekorasi kelas — poster edukatif, karya siswa yang dipajang di dinding, atau tema tertentu yang menyenangkan — turut membangun rasa memiliki dan motivasi siswa terhadap ruang belajarnya.</p>
  <p>Di luar estetika, ada empat hal praktis yang tidak boleh diabaikan: organisasi dan penyimpanan (loker, rak, dan kotak berlabel agar barang mudah ditemukan), pencahayaan dan ventilasi (manfaatkan cahaya alami sebanyak mungkin dan pastikan sirkulasi udara baik), teknologi kelas (proyektor, komputer, atau tablet yang terpasang dan berfungsi baik jika tersedia), serta keamanan dan kenyamanan (ruang gerak yang cukup, bahan ajar berbahaya disimpan di tempat aman, dan kebersihan kelas dijaga setiap hari). Ruang kelas yang nyaman bukan sekadar soal keindahan — ia adalah pesan pertama kepada siswa bahwa kelas ini adalah tempat yang aman dan layak untuk belajar.</p>

  <h4>D. Memahami Peran dan Tanggung Jawab Guru</h4>
  <p>Menjadi guru bukan sekadar berdiri di depan kelas menyampaikan materi — perannya kompleks dan tanggung jawabnya luas, menjangkau siswa, sekolah, orang tua, hingga masyarakat. Guru berperan sebagai pendidik (educator) yang membimbing perkembangan akademik, sosial, dan moral siswa; sebagai fasilitator pembelajaran yang menciptakan ruang bagi siswa untuk mengeksplorasi dan berpikir kritis, bukan sekadar menjadi satu-satunya sumber ilmu; sebagai motivator yang menumbuhkan minat belajar lewat kata-kata positif dan pendekatan penuh empati; sebagai role model yang perilakunya ditiru siswa sehari-hari; sebagai manajer kelas yang menciptakan suasana kondusif dan menangani dinamika kelas; sebagai pembimbing dan konselor yang peka terhadap kesulitan akademik maupun pribadi siswa; serta sebagai kolaborator yang bekerja sama dengan rekan guru, staf, kepala sekolah, dan orang tua demi tujuan pendidikan yang lebih besar.</p>
  <p>Berdampingan dengan peran-peran itu, ada tanggung jawab konkret yang melekat pada profesi guru: merencanakan dan menyiapkan pembelajaran sesuai kurikulum dan kebutuhan siswa, mengajar dengan cara yang efektif dan menarik, menilai serta mengevaluasi kemajuan siswa secara berkelanjutan (bukan hanya memberi nilai, tetapi memahami sejauh mana siswa menguasai materi), menjaga disiplin dan ketertiban kelas secara adil, berkomunikasi aktif dengan orang tua dan wali murid, terus mengembangkan diri secara profesional lewat pelatihan dan bacaan, serta menjadi bagian aktif dari komunitas sekolah lewat kegiatan ekstrakurikuler dan program pengembangan sekolah lainnya. Memahami peta peran dan tanggung jawab ini sejak awal akan membuat Anda menjalankan profesi ini dengan lebih percaya diri, terarah, dan profesional.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat langkah persiapan di bab ini (mengenal sekolah, menyusun rencana pelajaran, menata ruang kelas, memahami peran guru), langkah mana yang menurut Anda paling sering terlewat oleh guru pemula — dan apa satu hal kecil yang bisa mulai Anda siapkan minggu ini sebelum hari pertama tiba?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, sebelum menyusun rencana pelajaran, langkah paling awal yang perlu dilakukan calon guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengenali budaya sekolah dan memahami kurikulum yang berlaku</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung membeli seluruh perlengkapan mengajar tanpa survei sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghafal nama seluruh siswa di sekolah tanpa mengenal kurikulumnya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru sudah menyusun rencana pelajaran yang sangat rinci untuk satu semester penuh, tetapi menolak mengubahnya sedikit pun meski banyak siswa kesulitan mengikuti materi minggu pertama. Berdasarkan Bab 1, apa yang sebaiknya dilakukan guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap menjalankan rencana persis seperti semula karena mengubahnya dianggap tanda kegagalan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bersikap fleksibel dan menyesuaikan rencana berdasarkan respons nyata siswa, serta melakukan refleksi harian untuk memperbaiki bagian yang belum efektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses mengajar karena rencana yang telah disusun tidak berjalan sempurna</button>
  </div>
  <div class="quiz-q">
    <p>Pak Rian baru ditugaskan di SD Islam Nurul Hikmah. Ia sudah menghafal kurikulum, tetapi belum sempat menata ulang ruang kelas peninggalan guru sebelumnya yang mejanya berbaris kaku dan gelap karena tirai selalu tertutup. Berdasarkan Bab 1, langkah paling tepat yang perlu ia lakukan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan tata letak kelas apa adanya karena kurikulum dianggap jauh lebih penting daripada ruang fisik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menata ulang formasi meja sesuai kebutuhan interaksi kelas, memanfaatkan cahaya alami, dan memastikan ruang tetap aman serta nyaman bagi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta seluruh siswa untuk membawa meja dan kursi sendiri dari rumah masing-masing</button>
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
<h2 class="reveal">Hari Pertama Mengajar</h2>
<p class="lede reveal">Hari pertama adalah momen yang menentukan bagaimana siswa akan melihat dan berinteraksi dengan Anda sepanjang tahun ajaran — bab ini membahas cara memperkenalkan diri dengan efektif, memilih aktivitas ice-breaking yang tepat, dan membangun kesan pertama yang benar-benar positif.</p>

<div class="card reveal">
  <h4>A. Perkenalan Diri</h4>
  <p>Perkenalan diri yang baik di hari pertama membantu Anda membangun hubungan yang kuat dengan siswa sejak awal. Mulailah dengan senyuman dan sapaan hangat saat memasuki kelas, sebutkan nama lengkap Anda dan bagaimana siswa sebaiknya memanggil Anda, lalu bagikan sedikit informasi dasar tentang diri — latar belakang pendidikan, pengalaman mengajar, atau hobi — tanpa perlu membuka terlalu banyak detail pribadi yang tidak relevan. Presentasi visual berupa slide atau foto kegiatan yang Anda sukai bisa membuat perkenalan lebih menarik dan mudah diingat, sementara mengajak siswa berinteraksi lewat pertanyaan sederhana ("Siapa di sini yang suka membaca buku?") membuat mereka merasa dilibatkan sejak menit pertama, bukan sekadar menjadi penonton.</p>
  <p>Setelah perkenalan awal, sampaikan harapan dan aturan kelas secara jelas namun singkat, lalu tutup dengan aktivitas ice-breaking ringan agar siswa merasa nyaman dan mulai saling mengenal. Tunjukkan antusiasme dan semangat lewat bahasa tubuh yang positif — berdiri tegak, berjalan di sekitar kelas, membuat kontak mata — karena siswa cenderung lebih tertarik jika melihat gurunya bersemangat. Sampaikan pula komitmen Anda untuk membantu mereka sukses dan ajak mereka untuk tidak ragu bertanya, lalu yang terpenting: jadilah diri sendiri. Keaslian jauh lebih membangun kepercayaan siswa dibanding berusaha tampil sebagai sosok yang bukan diri Anda. Akhiri perkenalan dengan aktivitas menyenangkan seperti "Tebak Fakta" agar kesan yang tertinggal adalah kesan yang positif dan membuat siswa antusias kembali ke kelas Anda esok hari.</p>

  <h4>B. Aktivitas Ice-Breaking</h4>
  <p>Aktivitas ice-breaking membantu siswa saling mengenal, mengurangi kecanggungan, dan membangun hubungan positif sejak hari pertama. Ada banyak pilihan yang bisa disesuaikan dengan usia dan karakter kelas: "Bingo Nama" di mana siswa mencari teman yang cocok dengan keterangan di kotak-kotak bingo; "Perkenalan dengan Bola" di mana siswa yang menangkap bola menyebutkan nama dan satu fakta menarik tentang dirinya; "Mencari Teman" di mana siswa berkeliling kelas mencocokkan diri dengan daftar pertanyaan; serta "Dua Kebenaran dan Satu Kebohongan" yang mendorong percakapan dan tawa lewat tebak-tebakan fakta pribadi.</p>
  <p>Pilihan lain yang tak kalah efektif adalah "Kartu Nama Kreatif" (siswa menggambar atau menulis tentang dirinya di kartu kosong), "Rantai Cerita" (mengembangkan kreativitas dan kemampuan mendengarkan lewat cerita berantai), "Puzzle Kelompok" (melatih kerja sama lewat penyelesaian puzzle bersama), "Pohon Harapan" (siswa menuliskan harapan tahun ajaran di kertas berbentuk daun yang ditempel di gambar pohon besar), "Pertanyaan Cepat" (mengenal siswa secara ringan lewat jawaban singkat), hingga "Jaringan Benang" yang menciptakan visualisasi nyata bahwa seluruh siswa saling terhubung dalam kelas yang sama. Dengan aktivitas semacam ini, Anda tidak hanya mencairkan suasana tetapi juga mulai mengenal karakter tiap siswa sejak hari pertama, bekal berharga untuk merancang pendekatan mengajar ke depannya.</p>

  <h4>C. Membangun Kesan Pertama yang Positif</h4>
  <p>Kesan pertama menentukan bagaimana siswa akan melihat dan berinteraksi dengan Anda ke depannya. Persiapan matang sebelum masuk kelas — mempelajari nama dan profil siswa, memahami aturan serta budaya sekolah, dan menyiapkan rencana kegiatan yang bermakna — adalah pondasi awal. Begitu berada di dalam kelas, hadirlah dengan sikap positif dan percaya diri: tersenyum tulus, bersikap ramah, berjalan dengan percaya diri di sekitar kelas, serta menggunakan nada suara yang ramah namun tetap tegas agar siswa merasa diterima sekaligus memahami bahwa ada aturan yang perlu dihormati.</p>
  <p>Perkenalan diri sebaiknya dibuat interaktif — ceritakan sedikit tentang diri Anda, gunakan aktivitas ice-breaking ringan seperti "Tebak Fakta" atau "Siapa Saya?", lalu ajak siswa memperkenalkan diri mereka juga. Tetapkan harapan dan aturan kelas secara jelas namun tetap melibatkan siswa dalam diskusinya — dengan begitu mereka merasa memiliki tanggung jawab terhadap aturan tersebut, bukan sekadar menerima perintah. Sampaikan konsekuensi dengan tegas namun adil, dan yang terpenting, tunjukkan sikap yang konsisten sejak hari pertama, karena siswa akan memperhatikan apakah Anda benar-benar serius menerapkan apa yang telah disampaikan. Terakhir, bangun koneksi personal dengan menunjukkan minat pada siswa, mendengarkan dengan empati, dan menggunakan humor secara bijak — kombinasi inilah yang membuat hari pertama meninggalkan kesan hangat sekaligus profesional.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bagian di bab ini (perkenalan diri, ice-breaking, membangun kesan pertama), bagian mana yang paling terasa menantang bagi Anda secara pribadi — dan aktivitas ice-breaking spesifik mana dari daftar di atas yang ingin Anda coba pertama kali?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, aktivitas "Dua Kebenaran dan Satu Kebohongan" bertujuan utama untuk...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membantu siswa belajar fakta menarik tentang teman sekelas sambil mendorong percakapan dan tawa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menilai kejujuran siswa secara formal untuk dimasukkan ke dalam rapor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan seluruh sesi perkenalan diri guru di depan kelas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru menyampaikan aturan kelas di hari pertama dengan nada sangat ramah, tetapi ketika ada siswa yang jelas-jelas melanggar aturan tersebut di hari yang sama, guru itu membiarkannya tanpa tindak lanjut apa pun. Berdasarkan Bab 2, dampak paling mungkin dari sikap ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan semakin menghormati guru karena dianggap sangat pengertian dan tidak tegas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa akan menganggap aturan tersebut tidak penting karena guru tidak menunjukkan sikap yang konsisten dalam menerapkannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena aturan kelas hanya berlaku setelah minggu pertama</button>
  </div>
  <div class="quiz-q">
    <p>Bu Sarah mengajar di kelas yang muridnya sangat pendiam dan tampak canggung satu sama lain di hari pertama. Ia hanya punya waktu sepuluh menit sebelum masuk ke materi inti. Berdasarkan Bab 2, aktivitas ice-breaking apa yang paling sesuai untuk situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">"Puzzle Kelompok" yang membutuhkan waktu lama dan alat peraga khusus untuk setiap kelompok</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Aktivitas singkat seperti "Perkenalan dengan Bola" atau "Pertanyaan Cepat" yang ringan, cepat, dan tidak butuh persiapan rumit</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melewati sesi ice-breaking sepenuhnya dan langsung memberi tugas menulis esai panjang</button>
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
<h2 class="reveal">Minggu Pertama Mengajar</h2>
<p class="lede reveal">Setelah kesan pertama terbangun, minggu pertama adalah masa membentuk fondasi jangka panjang di kelas — menetapkan aturan yang benar-benar dipatuhi, memulai pembelajaran dengan cara yang menarik perhatian, serta mulai mengenali bagaimana masing-masing siswa belajar dengan cara terbaiknya.</p>

<div class="card reveal">
  <h4>A. Menetapkan Aturan Kelas</h4>
  <p>Aturan kelas yang jelas dan konsisten membantu mengelola perilaku siswa serta menciptakan suasana yang kondusif untuk belajar. Langkah paling efektif dimulai dengan melibatkan siswa dalam proses penetapannya — ajak diskusi tentang apa yang menurut mereka penting untuk lingkungan belajar yang baik, karena ini membuat mereka merasa memiliki aturan tersebut dan lebih mungkin mematuhinya. Tetapkan aturan yang jelas dan spesifik (misalnya "berbicara hanya setelah mengangkat tangan" lebih jelas daripada sekadar "berbicara dengan sopan"), batasi jumlahnya agar mudah diingat, lalu tuliskan dan pajang di kelas menggunakan bahasa yang positif — "selalu dengarkan ketika orang lain berbicara" alih-alih "jangan berbicara ketika orang lain berbicara".</p>
  <p>Jelaskan pula konsekuensi dan penghargaan secara adil dan konsisten, lalu modelkan sendiri perilaku yang diinginkan karena siswa cenderung meniru perilaku gurunya. Lakukan review aturan secara berkala terutama di awal-awal minggu, berikan penguatan positif berupa pujian atau penghargaan kecil ketika siswa mengikuti aturan, dan tindak lanjuti pelanggaran dengan cepat serta adil — tujuannya untuk mendidik, bukan menghukum berlebihan. Terakhir, libatkan orang tua dengan menginformasikan aturan kelas dan meminta dukungan mereka menegakkannya di rumah, sehingga tercipta konsistensi antara rumah dan sekolah yang mendukung perilaku positif siswa secara berkelanjutan.</p>

  <h4>B. Memulai Pembelajaran</h4>
  <p>Cara Anda membuka setiap pelajaran sangat menentukan seberapa besar minat siswa terhadap materi yang akan dibahas. Beberapa taktik pembuka yang efektif: memulai dengan cerita atau anekdot yang relevan dengan materi untuk memancing rasa ingin tahu; mengajukan pertanyaan pembuka yang menantang atau berkaitan dengan kehidupan sehari-hari siswa ("Apa yang akan terjadi jika tidak ada gravitasi?"); melakukan aktivitas pembuka singkat berupa permainan kecil atau kuis cepat; serta menggunakan media visual seperti gambar dan video untuk menjelaskan konsep dengan lebih menarik.</p>
  <p>Cara lain yang tak kalah efektif adalah menghubungkan materi dengan pengalaman pribadi siswa agar terasa relevan, melakukan demonstrasi atau eksperimen langsung terutama untuk mata pelajaran sains, menggunakan peta pikiran (mind mapping) untuk menampilkan gambaran besar topik, membuka dengan kutipan inspiratif atau fakta menarik yang memotivasi, menerapkan teknik "Think-Pair-Share" yang mendorong partisipasi aktif, hingga membuat koneksi eksplisit dengan materi yang sudah dipelajari sebelumnya agar siswa melihat keterkaitan antar topik. Kombinasi dari beberapa taktik ini, digunakan bergantian, akan menjaga rasa penasaran siswa tetap segar sepanjang minggu.</p>

  <h4>C. Mengidentifikasi Gaya Belajar Siswa</h4>
  <p>Setiap siswa memiliki cara berbeda dalam memahami dan mengingat informasi, sehingga mengenali gaya belajar mereka sejak awal membantu Anda menyesuaikan metode mengajar agar lebih efektif, meningkatkan keterlibatan, dan mengurangi kebosanan di kelas. Secara umum ada tiga tipe utama: siswa visual yang lebih mudah memahami lewat gambar, diagram, dan warna, sehingga cocok diajar dengan media visual, peta konsep, dan flashcard; siswa auditori yang lebih nyaman belajar lewat mendengar dan berbicara, sehingga cocok dengan metode ceramah yang menarik, diskusi, debat, dan penggunaan lagu atau irama untuk menghafal; serta siswa kinestetik yang memahami informasi lewat gerakan dan praktik langsung, sehingga cocok dengan pembelajaran berbasis proyek, simulasi, role play, dan alat peraga konkret.</p>
  <p>Untuk mengenali gaya belajar ini, Anda bisa melakukan observasi selama kegiatan kelas (memperhatikan respons siswa terhadap berbagai metode), memberikan kuisioner sederhana tentang preferensi belajar mereka, mencoba variasi metode mengajar lalu mengamati mana yang paling disukai, atau memberi kebebasan kepada siswa untuk menjelaskan kembali materi dengan caranya sendiri. Setelah gaya belajar mulai teridentifikasi, terapkan pendekatan multi-sensory karena kebanyakan siswa sebenarnya memiliki kombinasi gaya belajar, bukan satu gaya tunggal — misalnya saat menjelaskan konsep matematika, sertakan diagram untuk siswa visual sekaligus penjelasan lisan untuk siswa auditori. Dengan begitu, tidak ada siswa yang tertinggal hanya karena metode mengajar terlalu seragam.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari ketiga gaya belajar (visual, auditori, kinestetik) yang dibahas di bab ini, gaya belajar mana yang paling jarang Anda akomodasi dalam cara mengajar Anda selama ini — dan satu penyesuaian kecil apa yang bisa mulai Anda coba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, siswa yang lebih mudah memahami informasi lewat gerakan dan praktik langsung, serta sering merasa gelisah jika duduk diam terlalu lama, termasuk tipe gaya belajar...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kinestetik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Visual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Auditori</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menyusun aturan kelas sendirian tanpa melibatkan siswa sama sekali, lalu menempelkannya di dinding tanpa penjelasan lebih lanjut. Setelah beberapa minggu, banyak siswa melanggar aturan tersebut seolah tidak menganggapnya penting. Berdasarkan Bab 3, apa akar masalah paling mungkin dari situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Aturan yang dibuat terlalu sedikit sehingga siswa merasa bebas melanggarnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa tidak dilibatkan dalam proses penetapan aturan sehingga tidak merasa memiliki tanggung jawab untuk mematuhinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Aturan seharusnya tidak perlu ditempel di dinding kelas sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Pak Dedi mengajar IPA dan menyadari sebagian siswanya cepat paham lewat penjelasan lisan, sementara sebagian lain baru mengerti setelah melihat diagram atau mencoba eksperimen sendiri. Berdasarkan Bab 3, pendekatan paling tepat yang sebaiknya ia terapkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memilih satu metode ceramah saja agar seluruh kelas mendapat perlakuan yang identik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan pendekatan multi-sensory yang memadukan penjelasan lisan, diagram visual, dan eksperimen praktik agar seluruh gaya belajar terakomodasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengelompokkan siswa secara permanen berdasarkan gaya belajar dan tidak pernah menggabungkannya lagi</button>
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
<h2 class="reveal">Bulan Pertama Mengajar</h2>
<p class="lede reveal">Memasuki bulan pertama, rutinitas mulai terbentuk dan tantangan menjadi lebih nyata — bab ini membahas cara mengelola kelas secara berkelanjutan, membangun komunikasi yang sehat dengan orang tua, menilai kemajuan siswa secara bermakna, serta memanfaatkan teknologi dalam pembelajaran secara bijak.</p>

<div class="card reveal">
  <h4>A. Mengelola Kelas</h4>
  <p>Pengelolaan kelas yang baik menjaga disiplin, keteraturan, dan fokus siswa selama pembelajaran berlangsung. Fondasinya adalah aturan kelas yang jelas dan telah disepakati sejak awal, dipadukan dengan instruksi yang disampaikan secara sederhana dan diperiksa pemahamannya, serta rutinitas harian yang konsisten sehingga siswa tahu apa yang diharapkan dari mereka setiap hari. Sistem penghargaan dan konsekuensi yang adil membantu memotivasi perilaku positif, sementara hubungan personal yang dibangun lewat perhatian pada minat dan kesejahteraan siswa membuat pengelolaan kelas terasa manusiawi, bukan sekadar penegakan aturan.</p>
  <p>Variasi kegiatan pembelajaran — memadukan diskusi kelompok, pekerjaan individu, dan aktivitas praktis — menjaga minat siswa tetap hidup, sementara tata letak kelas yang mendukung interaksi dan pengawasan efektif, serta pengelolaan waktu yang efisien lewat perencanaan matang, membuat setiap sesi berjalan lebih terarah. Ketika konflik muncul, selesaikan dengan pendekatan restoratif yang membantu siswa memahami dampak perilakunya dan ikut mencari solusi, bukan sekadar dihukum. Gunakan bahasa tubuh yang positif dan dengarkan siswa secara aktif, libatkan mereka dalam membuat kesepakatan bersama agar merasa memiliki tanggung jawab, dan sediakan waktu refleksi berkala — baik lewat jurnal maupun diskusi kelompok — agar siswa terbiasa mengevaluasi dan memperbaiki perilakunya sendiri dari waktu ke waktu.</p>

  <h4>B. Komunikasi dengan Orang Tua</h4>
  <p>Komunikasi yang efektif dengan orang tua membangun hubungan kuat yang mendukung perkembangan siswa. Mulailah dengan memperkenalkan diri di awal tahun ajaran lewat surat atau pesan singkat, lalu susun jadwal pertemuan rutin (awal tahun, tengah semester, akhir semester) untuk membahas kemajuan akademis dan kesejahteraan siswa. Kirim pembaruan berkala lewat email atau buletin yang mencakup kegiatan kelas dan tugas mendatang, dan manfaatkan platform komunikasi digital seperti Google Classroom atau grup WhatsApp untuk berbagi informasi secara efisien — namun tetap sediakan waktu untuk pertemuan tatap muka atau telepon bagi masalah yang lebih mendalam.</p>
  <p>Saat memberikan umpan balik, seimbangkan antara prestasi positif dan area yang perlu ditingkatkan, gunakan bahasa yang jelas dan mudah dimengerti tanpa jargon pendidikan yang membingungkan, serta dengarkan kekhawatiran orang tua dengan empati dan keterbukaan. Kirim catatan atau pujian sederhana ketika siswa menunjukkan pencapaian, sediakan panduan praktis agar orang tua bisa mendukung pembelajaran di rumah, dan pertimbangkan mengadakan lokakarya atau seminar ringan bagi orang tua yang ingin memahami lebih dalam tentang perkembangan anak mereka. Komunikasi yang konsisten dan dua arah semacam ini membuat orang tua merasa menjadi mitra Anda, bukan sekadar penerima laporan.</p>

  <h4>C. Menilai Kemajuan Siswa</h4>
  <p>Menilai kemajuan siswa membantu Anda memahami sejauh mana materi telah dikuasai sekaligus mengidentifikasi area yang perlu diperbaiki. Beberapa metode yang bisa dikombinasikan: tes atau kuis awal untuk mengukur pemahaman terhadap materi yang baru diajarkan; observasi selama pembelajaran untuk mengamati tingkat keterlibatan dan penerapan konsep siswa; portofolio siswa yang berisi contoh pekerjaan, proyek, atau tugas yang ditinjau secara berkala; serta wawancara individu singkat untuk memahami pemahaman siswa secara lebih personal.</p>
  <p>Metode lain yang melengkapi adalah diskusi kelompok atau sesi brainstorming untuk mengukur pemahaman kolektif, pemantauan tugas atau proyek yang disertai umpan balik konstruktif, ujian lisan atau presentasi untuk menilai kemampuan menyampaikan informasi, kuesioner atau survei singkat tentang persepsi siswa terhadap pembelajaran, hingga pemanfaatan teknologi edukatif seperti platform daring untuk membuat tes adaptif atau kuis interaktif. Karena setiap metode memiliki kekuatan dan keterbatasannya masing-masing, mengombinasikan beberapa di antaranya akan memberi gambaran yang jauh lebih adil dan menyeluruh dibanding mengandalkan satu jenis penilaian saja.</p>

  <h4>D. Menggunakan Teknologi dalam Pembelajaran</h4>
  <p>Teknologi, jika dimanfaatkan secara bijak dan terarah, dapat meningkatkan keterlibatan siswa, mempermudah akses informasi, membantu diferensiasi pembelajaran sesuai kecepatan belajar masing-masing siswa, mengembangkan keterampilan digital mereka, sekaligus meningkatkan efisiensi kerja guru. Dari sisi perangkat, presentasi digital (PowerPoint, Google Slides, Canva), video pembelajaran (YouTube, TED-Ed, Khan Academy), dan LMS seperti Google Classroom atau Moodle memudahkan pengelolaan tugas dan materi. Dari sisi interaksi siswa, kuis interaktif (Kahoot!, Quizizz), game edukatif, serta alat kolaborasi digital seperti Google Docs atau Padlet membuat proses belajar lebih hidup dan partisipatif.</p>
  <p>Agar benar-benar bermanfaat, teknologi harus digunakan sebagai alat pendukung, bukan tujuan itu sendiri — pilih yang sesuai dengan materi dan tujuan pembelajaran, sesuaikan dengan akses yang dimiliki seluruh siswa, kombinasikan dengan metode tradisional yang sudah terbukti efektif, ajarkan literasi digital sejak dini, dan lakukan evaluasi berkala untuk memastikan penggunaannya benar-benar meningkatkan hasil belajar. Tantangan seperti keterbatasan akses perangkat, gangguan fokus siswa, kurangnya keterampilan digital guru, atau ketergantungan berlebihan pada teknologi tetap bisa diatasi lewat pendekatan hybrid, aturan penggunaan yang jelas, pelatihan berkelanjutan, dan rencana cadangan berupa materi cetak atau metode manual saat kendala teknis terjadi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek bulan pertama (mengelola kelas, komunikasi orang tua, menilai kemajuan siswa, teknologi pembelajaran), aspek mana yang menurut Anda paling belum berjalan konsisten sejauh ini — dan langkah kecil apa yang bisa mulai diperbaiki bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4, ketika terjadi konflik antar siswa di kelas, pendekatan yang dianjurkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendekatan restoratif yang membantu siswa memahami dampak perilakunya dan dilibatkan dalam mencari solusi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghukum kedua pihak secara setara tanpa mencari tahu penyebab konflik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan konflik agar siswa belajar menyelesaikannya sepenuhnya sendiri tanpa arahan guru</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menggunakan aplikasi kuis digital yang sangat canggih di setiap pertemuan, tetapi ternyata sebagian siswanya tidak memiliki akses internet stabil di rumah untuk mengerjakan tugas lanjutan, sehingga mereka tertinggal. Berdasarkan Bab 4, apa yang seharusnya diperhatikan guru tersebut sejak awal?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperhatikan karena teknologi harus digunakan secara maksimal tanpa kecuali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memastikan teknologi yang digunakan bisa diakses secara adil oleh seluruh siswa, dan menyiapkan alternatif bagi yang memiliki keterbatasan akses</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh penggunaan teknologi dan kembali sepenuhnya ke metode manual</button>
  </div>
  <div class="quiz-q">
    <p>Bu Wulan hanya menilai kemajuan siswanya lewat satu ujian tertulis di akhir bulan, tanpa observasi harian atau portofolio. Beberapa siswa yang sebenarnya aktif dan paham secara lisan justru mendapat nilai rendah karena kurang terampil menulis. Berdasarkan Bab 4, apa yang sebaiknya diperbaiki dari pendekatan penilaian Bu Wulan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena ujian tertulis adalah satu-satunya metode penilaian yang valid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengombinasikan beberapa metode penilaian seperti observasi, portofolio, dan ujian lisan agar penilaian lebih adil dan menyeluruh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti ujian tertulis dengan kuesioner kepuasan siswa semata</button>
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
<h2 class="reveal">Menjalin Hubungan yang Baik</h2>
<p class="lede reveal">Keberhasilan seorang guru tidak pernah berdiri sendiri — ia ditopang oleh hubungan yang sehat dengan siswa, kolaborasi yang produktif dengan rekan guru, serta relasi yang harmonis dengan pihak sekolah dan komunitas di sekitarnya.</p>

<div class="card reveal">
  <h4>A. Hubungan dengan Siswa</h4>
  <p>Membangun hubungan positif dengan siswa dimulai dari hal-hal sederhana: menunjukkan ketertarikan dan perhatian pada kehidupan mereka di luar sekolah, menyambut mereka dengan ramah dan hangat setiap hari, serta mendengarkan dengan empati ketika mereka ingin berbicara tentang kekhawatiran atau perasaannya. Pahami kebutuhan dan minat belajar masing-masing siswa, berikan umpan balik yang konstruktif dan pujian yang tulus atas prestasi mereka, dan jaga konsistensi serta keadilan dalam menerapkan aturan kelas bagi semua siswa tanpa kecuali.</p>
  <p>Bangun pula kolaborasi lewat diskusi dan proyek kelompok yang mendorong pertukaran ide antarsiswa, hargai keanekaragaman latar belakang dan pendapat mereka sehingga kelas terasa inklusif, dan jadilah teladan yang menunjukkan integritas serta komitmen dalam tindakan sehari-hari. Perluas hubungan ini melampaui waktu pelajaran lewat kegiatan ekstrakurikuler atau mentoring ringan, karena siswa yang merasa dipedulikan sebagai individu — bukan sekadar sebagai peserta didik di daftar absen — cenderung lebih terbuka, termotivasi, dan percaya pada bimbingan yang Anda berikan.</p>

  <h4>B. Kolaborasi dengan Rekan Guru</h4>
  <p>Kolaborasi dengan rekan guru adalah kunci meningkatkan profesionalisme dan pengembangan diri dalam profesi mengajar. Jadilah terbuka dan responsif terhadap ide rekan kerja, jalin kemitraan yang saling mendukung dan menghargai keahlian masing-masing, serta berbagi sumber daya, materi pelajaran, dan praktik pengajaran yang efektif. Berikan dan terima umpan balik secara konstruktif untuk saling meningkatkan strategi pembelajaran, dan terlibatlah dalam proyek-proyek kolaboratif seperti pengembangan materi bersama atau inisiatif peningkatan hasil belajar siswa.</p>
  <p>Manfaatkan keahlian unik masing-masing rekan guru, dukung partisipasi mereka dalam pelatihan dan pengembangan profesional, serta pertahankan komunikasi yang teratur lewat pertemuan rutin atau diskusi kelompok. Jangan ragu mengambil peran sebagai mentee untuk belajar dari yang lebih berpengalaman, sekaligus bersedia menjadi mentor bagi rekan yang membutuhkan bimbingan. Budaya saling menghargai kontribusi dan keterlibatan aktif inilah yang membuat lingkungan kerja guru terasa suportif, bukan kompetitif — dan pada akhirnya berdampak langsung pada kualitas pembelajaran yang diterima siswa.</p>

  <h4>C. Membangun Hubungan dengan Pihak Sekolah dan Komunitas</h4>
  <p>Tugas guru tidak terbatas pada ruang kelas — menjalin hubungan baik dengan pihak sekolah dan komunitas sekitar menciptakan lingkungan kerja yang lebih harmonis, mendukung perkembangan siswa, dan membuka peluang pengembangan karier. Dengan kepala sekolah dan pimpinan, pahami visi-misi sekolah, sampaikan ide dengan cara yang bijak dan konstruktif, serta tunjukkan sikap profesional yang membuat Anda dihargai dan dipercaya. Dengan sesama guru, bangun hubungan harmonis lewat berbagi pengalaman dan sumber daya, serta aktif dalam rapat, pelatihan, atau forum diskusi sekolah. Dengan staf administrasi dan tenaga kependidikan, hormati peran mereka, jalin komunikasi yang sopan dan jelas, serta tunjukkan apresiasi atas bantuan yang diberikan sekecil apa pun.</p>
  <p>Di luar lingkungan sekolah, libatkan orang tua siswa dalam proses pembelajaran lewat komunikasi yang jelas dan umpan balik yang seimbang, serta berpartisipasilah dalam kegiatan masyarakat seperti program sosial atau keagamaan di sekitar sekolah. Bangun pula kemitraan dengan pihak eksternal seperti lembaga pendidikan atau organisasi sosial untuk mendukung program pembelajaran, misalnya lewat narasumber tamu atau kegiatan pengabdian masyarakat. Tantangan seperti perbedaan pendapat dengan rekan atau pimpinan, kurangnya keterlibatan orang tua, atau kesulitan beradaptasi dengan budaya sekolah baru bisa diatasi lewat sikap profesional, komunikasi terbuka, dan kesediaan untuk terus belajar dari lingkungan sekitar.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga lingkaran relasi di bab ini (siswa, rekan guru, sekolah dan komunitas), lingkaran mana yang menurut Anda paling perlu diperkuat saat ini — dan satu langkah konkret apa yang bisa Anda ambil dalam dua minggu ke depan untuk memperbaikinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, salah satu cara membangun hubungan baik dengan siswa adalah dengan menjaga konsistensi dan keadilan, yang berarti...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan aturan kelas secara konsisten dan adil untuk semua siswa tanpa terkecuali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberikan perlakuan khusus hanya kepada siswa yang paling akrab dengan guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengubah aturan kelas setiap hari agar siswa selalu waspada</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru merasa canggung mendekati rekan-rekan guru senior dan memilih bekerja sendirian tanpa pernah berbagi materi maupun meminta umpan balik. Setelah beberapa bulan, ia merasa kesulitan mengembangkan metode mengajarnya. Berdasarkan Bab 5, apa yang seharusnya ia lakukan sejak awal?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap bekerja sendirian karena kolaborasi dengan rekan guru dianggap tidak relevan bagi guru baru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bersikap terbuka dan proaktif menjalin kolaborasi dengan rekan guru, termasuk mengambil peran sebagai mentee untuk belajar dari yang lebih berpengalaman</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu hingga menjadi guru senior sebelum mulai berkolaborasi dengan siapa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah swasta ingin memperkuat kepercayaan masyarakat sekitar terhadap program pendidikannya, namun guru-gurunya jarang terlibat dalam kegiatan di luar jam mengajar. Berdasarkan Bab 5, langkah paling relevan yang bisa dilakukan guru untuk mendukung tujuan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatasi seluruh interaksi guru hanya pada ruang kelas dan tidak melibatkan diri dengan pihak luar sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berpartisipasi dalam kegiatan masyarakat sekitar dan membangun kemitraan dengan pihak eksternal untuk memperkuat peran sekolah di lingkungan sosialnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan seluruh urusan hubungan masyarakat kepada kepala sekolah tanpa keterlibatan guru</button>
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
<h2 class="reveal">Menghadapi Tantangan</h2>
<p class="lede reveal">Tidak ada perjalanan mengajar yang mulus sepenuhnya — bab ini membekali Anda dengan strategi mengelola stres dan beban kerja, mengatasi masalah disiplin secara adil, serta menangani siswa dengan kebutuhan khusus dengan pendekatan yang inklusif.</p>

<div class="card reveal">
  <h4>A. Mengelola Stres dan Beban Kerja</h4>
  <p>Menghadapi stres dan beban kerja tinggi adalah hal yang umum dalam profesi guru, namun bisa dikelola dengan strategi yang tepat. Mulailah dengan memprioritaskan tugas — identifikasi mana yang paling mendesak dan penting, lalu buat rencana serta jadwal harian atau mingguan yang menyisipkan waktu istirahat, bukan hanya waktu kerja. Manfaatkan teknologi dan alat bantu manajemen waktu untuk mengotomatisasi tugas administratif yang bisa disederhanakan, dan bergabunglah dengan komunitas guru untuk mendapat dukungan serta berbagi solusi atas tantangan yang dihadapi bersama.</p>
  <p>Berkomunikasilah secara jujur dengan atasan atau kolega tentang beban kerja yang dirasakan, dan jangan ragu meminta bantuan atau delegasi tugas jika memang diperlukan. Jaga keseimbangan kehidupan pribadi dengan menyisihkan waktu untuk aktivitas yang dinikmati di luar pekerjaan, kelola ekspektasi dengan mengenali batasan diri sendiri, dan praktikkan teknik relaksasi seperti pernapasan dalam atau istirahat singkat di tengah hari yang sibuk. Perhatikan pula kesehatan fisik dan mental secara serius — tidur cukup, makan sehat, dan mencari bantuan profesional bila diperlukan — lalu lakukan refleksi rutin untuk mengevaluasi keseimbangan antara pekerjaan dan kehidupan pribadi, sehingga Anda bisa bertahan dalam profesi ini secara berkelanjutan, bukan hanya bertahan sesaat.</p>

  <h4>B. Mengatasi Masalah Disiplin</h4>
  <p>Masalah disiplin adalah tantangan yang hampir selalu dihadapi guru, namun bisa ditangani secara efektif dan adil. Fondasinya tetap sama seperti di minggu pertama: tetapkan aturan kelas yang jelas sejak awal, terapkan secara konsisten agar tercipta lingkungan yang bisa diandalkan, dan komunikasikan aturan tersebut secara terbuka kepada siswa maupun orang tua beserta alasan di baliknya. Yang membedakan pendekatan tingkat lanjut adalah upaya memahami penyebab perilaku tidak disiplin — seringkali perilaku semacam ini adalah indikasi masalah yang lebih dalam, seperti kesulitan akademik, masalah di rumah, atau masalah sosial, sehingga bertanya kepada siswa sebelum bertindak jauh lebih efektif daripada langsung menghukum.</p>
  <p>Gunakan strategi positif dengan memberi pujian atau penghargaan atas perilaku baik, dan pastikan tindakan konsekuensial yang diberikan bersifat mendidik, bukan sekadar menghukum. Libatkan orang tua dalam proses menangani masalah disiplin dan berikan umpan balik tentang perilaku siswa secara teratur, sambil terus menjadi teladan yang menunjukkan perilaku yang Anda harapkan dari siswa. Lakukan refleksi dan evaluasi berkala terhadap pengelolaan disiplin Anda sendiri — identifikasi strategi yang berhasil dan yang tidak, lalu sesuaikan pendekatan seiring waktu, karena setiap kelas dan setiap generasi siswa punya dinamika yang sedikit berbeda.</p>

  <h4>C. Menangani Siswa dengan Kebutuhan Khusus</h4>
  <p>Setiap kelas terdiri dari siswa dengan latar belakang dan kemampuan yang beragam, sehingga memahami jenis kebutuhan khusus siswa menjadi langkah pertama yang penting: kebutuhan akademik seperti disleksia, diskalkulia, atau dispraksia; kebutuhan sosial dan emosional seperti gangguan kecemasan, ADHD, atau kesulitan interaksi sosial pada spektrum autisme; kebutuhan fisik seperti gangguan pendengaran, penglihatan, atau keterbatasan mobilitas; serta kebutuhan medis seperti epilepsi, asma kronis, atau diabetes yang memerlukan perhatian khusus.</p>
  <p>Setelah memahami jenis kebutuhannya, ciptakan lingkungan belajar yang inklusif lewat sikap positif dan empati, sediakan aksesibilitas yang sesuai (tempat duduk strategis, jalur akses fisik), dan bantu siswa lain menerima serta mendukung teman mereka yang berkebutuhan khusus. Sesuaikan metode pembelajaran dengan menggunakan berbagai gaya mengajar, memberi waktu tambahan bila diperlukan, dan menyediakan materi alternatif seperti ringkasan audio atau alat bantu visual. Libatkan orang tua yang memiliki wawasan berharga tentang kebutuhan anaknya, bekerja sama dengan tim sekolah seperti guru pendamping atau psikolog, dan jika memungkinkan susun Rencana Pembelajaran Individual (RPI) agar siswa bisa belajar dengan cara yang paling sesuai dengan kondisinya. Tantangan seperti kurangnya pemahaman, keterbatasan waktu di kelas besar, atau minimnya sumber daya sekolah bisa diatasi lewat literatur, pelatihan, strategi diferensiasi, dan kolaborasi dengan komunitas pendidik inklusif.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tantangan di bab ini (stres dan beban kerja, masalah disiplin, siswa berkebutuhan khusus), tantangan mana yang paling sering Anda hadapi dalam keseharian mengajar — dan strategi mana dari bab ini yang paling ingin Anda coba terapkan lebih konsisten?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, sebelum mengambil tindakan terhadap siswa yang menunjukkan perilaku tidak disiplin, langkah yang dianjurkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memahami penyebab di balik perilaku tersebut, karena bisa jadi indikasi masalah akademik, keluarga, atau sosial yang lebih dalam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memberikan hukuman terberat agar siswa lain tidak berani melakukan hal serupa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan perilaku tersebut sepenuhnya agar tidak menimbulkan konflik</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa kewalahan karena harus mengoreksi tugas, menyiapkan materi, dan menjawab pesan orang tua di luar jam kerja hampir setiap malam, hingga akhirnya kelelahan dan mudah marah di kelas. Berdasarkan Bab 6, langkah paling tepat yang perlu diambil guru ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Terus bekerja tanpa henti karena mengeluh tentang beban kerja dianggap tidak profesional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memprioritaskan tugas, mengatur jadwal yang menyisipkan waktu istirahat, serta berkomunikasi jujur dengan atasan atau kolega tentang beban kerja yang dirasakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Berhenti sepenuhnya berkomunikasi dengan orang tua siswa agar beban kerja berkurang drastis</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa di kelas menunjukkan kesulitan membaca teks panjang dan sering tertinggal saat mengerjakan tugas tertulis, namun sangat baik memahami materi ketika dijelaskan lewat gambar. Berdasarkan Bab 6, langkah paling sesuai yang bisa dilakukan guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberi nilai rendah secara otomatis karena dianggap tidak berusaha cukup keras dalam membaca</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyediakan materi alternatif seperti ringkasan bergambar atau audio, serta memberi waktu tambahan sesuai kebutuhan siswa tersebut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memindahkan siswa tersebut ke kelas lain tanpa mencoba penyesuaian metode pengajaran terlebih dahulu</button>
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
<h2 class="reveal">Meningkatkan Integritas</h2>
<p class="lede reveal">Integritas adalah fondasi yang membuat seluruh peran dan strategi mengajar menjadi bermakna — bab ini membahas cara menjadi teladan yang baik, menjaga etika dan profesionalisme, serta membangun kepercayaan yang tulus dengan siswa dan orang tua.</p>

<div class="card reveal">
  <h4>A. Menjadi Teladan yang Baik</h4>
  <p>Integritas dalam tindakan sehari-hari adalah kunci membangun hubungan kuat dengan siswa sekaligus menetapkan standar tinggi dalam kehidupan profesional. Pastikan apa yang Anda katakan selaras dengan tindakan Anda setiap hari, karena siswa mengamati dan mengingat tindakan jauh lebih kuat daripada kata-kata. Jangan takut mengakui kesalahan atau ketidakpastian secara jujur dan terbuka, perlakukan setiap siswa dengan adil dan berempati tanpa memihak berdasarkan preferensi pribadi, dan bertanggung jawablah atas kesalahan dengan mengambil langkah nyata untuk memperbaiki situasi serta belajar darinya.</p>
  <p>Jaga kerahasiaan dan kebijaksanaan atas informasi pribadi siswa maupun kolega, tetap konsisten dengan nilai-nilai etika seperti kejujuran, keadilan, dan tanggung jawab dalam setiap aspek profesional, dan jadilah contoh nyata dari perilaku yang Anda harapkan dari siswa — sikap menghormati, kerja keras, keterbukaan, dan ketulusan. Semua ini pada akhirnya membangun kepercayaan dengan siswa, orang tua, dan rekan kerja, yang menjadi fondasi hubungan yang positif dan produktif. Lakukan refleksi rutin untuk mengevaluasi sejauh mana Anda benar-benar menunjukkan integritas dalam keseharian, lalu identifikasi area yang masih perlu diperkuat.</p>

  <h4>B. Etika dan Profesionalisme</h4>
  <p>Menjaga etika profesional adalah pondasi utama membangun reputasi yang solid sebagai guru. Tunjukkan keteladanan dalam perilaku yang sesuai standar profesional tinggi, kenali dan patuhi kode etik atau pedoman profesi guru yang berlaku, serta berkomunikasilah secara transparan kepada siswa, orang tua, dan rekan kerja tanpa menyembunyikan informasi relevan atau memanipulasi situasi demi kepentingan pribadi. Lindungi kerahasiaan informasi pribadi siswa dan detail penting lainnya, dan bangun kepercayaan dengan menjaga privasi serta kerahasiaan informasi internal sekolah secara konsisten.</p>
  <p>Perlakukan semua siswa secara adil tanpa diskriminasi, terapkan aturan dan konsekuensi secara konsisten tanpa membeda-bedakan berdasarkan preferensi personal, dan dorong nilai-nilai positif seperti keadilan, kerja keras, empati, dan kerja sama di antara siswa. Jaga sikap profesional dalam semua interaksi dan hindari konflik pribadi atau perilaku yang tidak pantas dalam konteks pendidikan, lalu lakukan refleksi dan peningkatan diri secara teratur terhadap kepatuhan Anda pada etika profesional. Profesionalisme bukan sesuatu yang dicapai sekali lalu selesai — ia adalah komitmen harian yang terus dijaga dan diperbarui.</p>

  <h4>C. Membangun Kepercayaan dengan Siswa dan Orang Tua</h4>
  <p>Kepercayaan adalah fondasi utama dalam hubungan antara guru, siswa, dan orang tua — tanpanya, proses belajar mengajar akan terasa kurang efektif dan hubungan menjadi kurang harmonis. Dengan siswa, kepercayaan dibangun lewat menjadi teladan yang baik (siswa lebih mempercayai guru yang dianggap konsisten, jujur, dan berintegritas), menunjukkan empati dan kepedulian terhadap perasaan mereka, bersikap transparan dan jelas dalam menjelaskan alasan di balik keputusan di kelas, serta menghargai keberagaman dan individualitas setiap siswa.</p>
  <p>Dengan orang tua, kepercayaan dibangun lewat komunikasi yang terbuka dan rutin tentang perkembangan akademik serta perilaku anak, menunjukkan profesionalisme dan integritas dalam pekerjaan sehari-hari (datang tepat waktu, mempersiapkan materi dengan baik), menyediakan ruang untuk dialog dan masukan tanpa merasa terganggu, serta menunjukkan konsistensi dalam menindaklanjuti setiap pertanyaan atau kekhawatiran yang disampaikan. Tantangan seperti ketidakjelasan komunikasi, ketidaksesuaian ekspektasi, atau kesulitan mengelola konflik adalah hal yang wajar terjadi — kuncinya tetap pada komunikasi yang jujur, realistis, dan pendekatan yang bijaksana ketika perbedaan pendapat muncul, sehingga penyelesaiannya bisa saling menguntungkan tanpa merusak kepercayaan yang sudah dibangun.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga aspek integritas di bab ini (teladan, etika profesional, membangun kepercayaan), aspek mana yang menurut Anda paling teruji ketika sedang lelah atau tertekan — dan komitmen kecil apa yang ingin Anda pegang agar integritas itu tetap terjaga meski dalam kondisi sulit?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, siswa cenderung lebih memercayai dan mengingat integritas gurunya dari...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Konsistensi antara kata-kata dan tindakan guru dalam keseharian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Seberapa sering guru memberi hadiah kepada siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Seberapa ketat guru menghukum pelanggaran kecil</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru membuat kesalahan saat menjelaskan materi di depan kelas, namun ia memilih diam dan berpura-pura tidak terjadi apa-apa alih-alih mengakuinya. Berdasarkan Bab 7, dampak paling mungkin dari sikap ini terhadap kepercayaan siswa adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak berdampak apa pun karena siswa dianggap tidak akan menyadari kesalahan kecil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berpotensi menurunkan kepercayaan siswa, karena integritas dibangun lewat kejujuran dan keterbukaan mengakui kesalahan, bukan menutupinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Justru meningkatkan rasa hormat siswa karena guru dianggap selalu benar</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali murid mengeluh karena anaknya mendapat perlakuan berbeda dari guru dibanding teman-teman sekelasnya yang lebih akrab dengan guru tersebut. Berdasarkan prinsip etika profesional pada Bab 7, apa yang perlu diperbaiki oleh guru ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena kedekatan personal dengan sebagian siswa adalah hal yang wajar dan tidak melanggar etika apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan aturan dan perlakuan secara adil dan konsisten kepada semua siswa tanpa membeda-bedakan berdasarkan preferensi personal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta wali murid untuk tidak lagi menyampaikan keluhan apa pun ke pihak sekolah</button>
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
<h2 class="reveal">Menjadi Guru yang Profesional</h2>
<p class="lede reveal">Setelah fondasi integritas terbangun, langkah berikutnya adalah mengasah keterampilan teknis mengajar itu sendiri — strategi mengajar yang efektif, manajemen kelas yang efisien, serta kreativitas yang membuat pembelajaran terasa hidup dan tidak monoton.</p>

<div class="card reveal">
  <h4>A. Strategi Mengajar Efektif</h4>
  <p>Menggunakan teknik mengajar yang efektif dan inovatif adalah kunci memaksimalkan pembelajaran siswa. Gunakan beragam metode pengajaran — ceramah, diskusi kelompok, simulasi, proyek kolaboratif — dan sesuaikan dengan kebutuhan serta gaya belajar siswa. Aktifkan siswa dalam pembelajaran lewat pertanyaan terbuka, diskusi, atau permainan peran yang mendorong partisipasi semua orang, bukan hanya segelintir siswa yang aktif. Manfaatkan teknologi dan media pembelajaran seperti presentasi multimedia atau platform e-learning agar materi lebih menarik dan relevan, dan tetaplah fleksibel dalam mengadaptasi kurikulum sesuai kebutuhan nyata siswa di kelas Anda.</p>
  <p>Lakukan penilaian berkelanjutan dan formatif secara teratur untuk memantau perkembangan siswa dan menyesuaikan strategi mengajar Anda, berkolaborasilah dengan rekan guru untuk berbagi ide dan praktik terbaik, serta teruslah mengejar pengembangan profesional lewat pelatihan dan workshop agar tetap mengikuti perkembangan terbaru dalam pendidikan. Lakukan refleksi dan evaluasi diri secara teratur terhadap metode pengajaran Anda — strategi yang efektif untuk satu kelas belum tentu efektif untuk kelas lain, sehingga kesediaan untuk terus menyesuaikan pendekatan adalah tanda profesionalisme yang sesungguhnya.</p>

  <h4>B. Manajemen Kelas yang Efisien</h4>
  <p>Manajemen kelas yang efisien adalah kunci menciptakan lingkungan belajar yang terstruktur dan mendukung. Atur pembagian ruang kelas secara fisik untuk mendukung berbagai aktivitas belajar, tetapkan aturan kelas yang jelas dan dipahami semua siswa mencakup perilaku, penggunaan teknologi, dan tata tertib umum, serta komunikasikan rutinitas harian agar siswa tahu apa yang diharapkan pada setiap bagian hari sehingga mengurangi kebingungan dan meningkatkan efisiensi waktu.</p>
  <p>Kelola waktu secara efektif dengan merencanakan setiap kegiatan dan mengalokasikan durasi yang jelas, bangun komunikasi terbuka dengan siswa lewat mendengarkan dan memberi umpan balik konstruktif, serta libatkan mereka dalam pembuatan keputusan yang memengaruhi kelas mereka sendiri. Kelola konflik dengan bijak — ajarkan siswa menyelesaikan masalahnya sendiri dengan cara yang baik — dan jalin kolaborasi dengan orang tua lewat komunikasi rutin untuk memperkuat perilaku positif di rumah maupun sekolah. Terakhir, evaluasi sistem manajemen kelas Anda secara teratur dan tetap terbuka terhadap umpan balik dari siswa, rekan guru, maupun orang tua, karena manajemen kelas yang baik bukan sistem yang statis, melainkan sesuatu yang terus disempurnakan.</p>

  <h4>C. Mengembangkan Kreativitas dalam Mengajar</h4>
  <p>Mengajar bukan hanya soal menyampaikan materi, tetapi juga tentang bagaimana membuat proses pembelajaran menarik, menyenangkan, dan mudah dipahami. Kreativitas dalam mengajar membawa banyak manfaat: menarik perhatian siswa yang mudah bosan dengan metode monoton, membantu memahami konsep abstrak lewat permainan, visualisasi, atau eksperimen, meningkatkan keterampilan berpikir kritis lewat pendekatan yang mendorong siswa mencari solusi dari berbagai sudut pandang, serta meningkatkan motivasi dan keterlibatan siswa secara keseluruhan.</p>
  <p>Ada banyak cara mengembangkan kreativitas ini: menggunakan berbagai metode pengajaran seperti pembelajaran berbasis proyek, diskusi dan debat, atau pembelajaran lewat permainan (game-based learning); memanfaatkan teknologi seperti video pembelajaran, animasi, dan platform interaktif untuk membuat materi lebih mudah dipahami; menciptakan suasana kelas yang menyenangkan lewat desain ruang yang kreatif dan memberi kebebasan siswa mengekspresikan diri; serta mengintegrasikan seni dalam pembelajaran, misalnya menggunakan musik untuk menghafal konsep atau kegiatan seni untuk mengeksplorasi ide-ide pelajaran dengan cara yang lebih menyenangkan. Tantangan seperti keterbatasan sumber daya, waktu yang sempit, atau keberagaman kebutuhan siswa memang nyata, namun dengan perencanaan yang tepat dan kemauan untuk berinovasi menggunakan alat sederhana sekalipun, kreativitas tetap bisa dihadirkan tanpa mengorbankan kualitas pembelajaran.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga fokus profesionalisme di bab ini (strategi mengajar, manajemen kelas, kreativitas), fokus mana yang menurut Anda paling perlu diasah lebih jauh saat ini — dan satu ide kreatif spesifik apa yang ingin Anda coba terapkan di pelajaran berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 8, salah satu manfaat utama kreativitas dalam mengajar adalah membantu siswa...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memahami konsep-konsep yang sulit dan abstrak lewat pendekatan seperti permainan, visualisasi, atau eksperimen</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari seluruh bentuk evaluasi dan penilaian di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Belajar tanpa perlu mengikuti kurikulum yang telah ditetapkan sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu mengajar dengan metode ceramah yang sama persis setiap hari tanpa variasi, meski banyak siswanya mulai terlihat bosan dan kurang terlibat. Berdasarkan Bab 8, apa yang sebaiknya dilakukan guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap mempertahankan metode yang sama karena mengubah metode dianggap membingungkan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan beragam metode pengajaran dan mengaktifkan siswa lewat diskusi, proyek, atau permainan peran agar keterlibatan mereka meningkat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses evaluasi karena dianggap menjadi penyebab kebosanan siswa</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah kelas tampak ramai dan sulit dikendalikan karena rutinitas hariannya tidak pernah dikomunikasikan dengan jelas, sehingga siswa selalu bertanya-tanya apa yang harus dilakukan di setiap sesi. Berdasarkan Bab 8, langkah manajemen kelas yang paling tepat untuk mengatasi hal ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena rutinitas harian dianggap tidak berpengaruh terhadap ketertiban kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengomunikasikan rutinitas harian secara jelas dan konsisten sehingga siswa memahami apa yang diharapkan pada setiap bagian hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh siswa di kelas tersebut dengan siswa dari kelas lain</button>
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
<h2 class="reveal">Refleksi dan Pengembangan Diri</h2>
<p class="lede reveal">Guru yang terus bertumbuh adalah guru yang rutin berhenti sejenak untuk merenung — bab ini membahas teknik refleksi harian dan mingguan, jalur pengembangan profesional yang tersedia, serta manfaat mengikuti pelatihan dan komunitas guru.</p>

<div class="card reveal">
  <h4>A. Refleksi Harian/Mingguan</h4>
  <p>Refleksi adalah proses penting bagi guru untuk mengembangkan diri dan meningkatkan kualitas pengajaran. Sediakan waktu menulis jurnal setiap hari atau minggu untuk mencatat pengalaman mengajar, reaksi siswa, dan perasaan Anda tentang pengajaran tersebut, lalu tinjau kembali secara berkala untuk mengidentifikasi pola atau tren dalam praktik mengajar Anda. Periksa hasil evaluasi siswa secara objektif dan bandingkan dengan tujuan pembelajaran yang telah ditetapkan, sehingga Anda tahu persis di mana siswa menunjukkan kemajuan dan di mana mereka membutuhkan lebih banyak dukungan.</p>
  <p>Mintalah umpan balik langsung dari siswa tentang pengajaran Anda dalam suasana yang terbuka dan aman, diskusikan pengalaman mengajar dengan rekan guru atau mentor untuk berbagi tantangan dan solusi, dan gunakan analisis SWOT sederhana untuk mengevaluasi kekuatan, kelemahan, peluang pengembangan diri, serta ancaman yang mungkin memengaruhi kinerja Anda. Dari hasil refleksi ini, tetapkan tujuan pengembangan diri yang konkret — misalnya fokus pada keterampilan mengajar tertentu atau meningkatkan interaksi dengan siswa — lalu buat rencana tindakan dan evaluasi kemajuannya secara teratur. Refleksi yang dilakukan konsisten, sekecil apa pun, jauh lebih bermakna daripada evaluasi besar yang hanya dilakukan sesekali.</p>

  <h4>B. Pengembangan Profesional</h4>
  <p>Pengembangan profesional adalah upaya kontinu meningkatkan pengetahuan, keterampilan, dan kualitas sebagai guru. Berpartisipasilah dalam pelatihan dan workshop yang relevan dengan bidang pengajaran Anda, ikuti seminar dan konferensi pendidikan untuk mendapatkan wawasan baru dan tren terkini, serta luangkan waktu membaca buku dan literatur pendidikan terbaru yang bisa didiskusikan bersama rekan guru. Pertimbangkan mengikuti program sertifikasi atau pelatihan lanjutan dalam bidang tertentu, karena sertifikasi tambahan meningkatkan kredibilitas sekaligus memberi Anda alat dan teknik baru untuk diterapkan sehari-hari.</p>
  <p>Manfaatkan sumber daya online seperti webinar dan kursus daring untuk memperdalam pemahaman pada topik spesifik sesuai jadwal Anda sendiri, dan berpartisipasilah dalam komunitas profesional seperti forum online atau jaringan sesama pendidik untuk berbagi ide dan mendiskusikan tantangan pengajaran. Pengembangan profesional bukan kegiatan sesekali yang selesai setelah satu pelatihan — ia adalah komitmen berkelanjutan yang membuat Anda tetap relevan menghadapi perubahan dunia pendidikan yang terus bergerak.</p>

  <h4>C. Mengikuti Pelatihan dan Komunitas Guru</h4>
  <p>Pelatihan dan komunitas guru memberikan banyak keuntungan: menambah pengetahuan dan keterampilan baru lewat pendekatan pengajaran terkini, meningkatkan kualitas pengajaran lewat wawasan yang langsung bisa diterapkan di kelas, membangun jaringan sosial yang memperkaya wawasan sekaligus memberi dukungan emosional, serta menumbuhkan semangat profesionalisme yang lebih tinggi. Ada beragam jenis pelatihan yang bisa diikuti sesuai kebutuhan — pelatihan keterampilan mengajar, manajemen kelas, penggunaan teknologi pendidikan, pengembangan kurikulum, hingga pelatihan soft skills seperti komunikasi dan kepemimpinan.</p>
  <p>Bergabung dengan komunitas guru memberi manfaat tersendiri: berbagi pengalaman dan pengetahuan dengan sesama pendidik, mendapat dukungan dan motivasi ketika pekerjaan terasa menantang, menumbuhkan rasa kebersamaan yang mengurangi rasa terisolasi, serta membuka peluang kolaborasi dalam proyek dan kegiatan pendidikan bersama. Untuk mulai melangkah, Anda tidak perlu menunggu momen sempurna — cukup mendaftar pada satu pelatihan yang paling relevan dengan kebutuhan Anda saat ini, atau bergabung dengan satu komunitas guru terdekat, baik secara daring maupun tatap muka, dan biarkan proses belajar itu berjalan secara alami dari sana.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga bagian bab ini (refleksi harian, pengembangan profesional, pelatihan dan komunitas), bagian mana yang paling jarang Anda lakukan secara konsisten selama ini — dan komitmen sederhana apa yang bisa mulai Anda jalankan minggu ini, misalnya menulis satu paragraf jurnal refleksi setiap Jumat sore?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 9, salah satu manfaat bergabung dengan komunitas guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendapat dukungan emosional dan motivasi, serta mengurangi rasa terisolasi yang sering dialami guru yang bekerja sendirian di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan sepenuhnya kebutuhan untuk melakukan refleksi pribadi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghilangkan kewajiban guru untuk terus belajar secara mandiri</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa sudah cukup berpengalaman setelah mengajar bertahun-tahun, sehingga berhenti membaca literatur pendidikan baru maupun mengikuti pelatihan apa pun karena merasa tidak diperlukan lagi. Berdasarkan Bab 9, apa risiko dari sikap ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena pengalaman mengajar sudah lebih dari cukup untuk seumur karier</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru berisiko tertinggal dari perkembangan dunia pendidikan yang terus berubah, karena pengembangan profesional adalah komitmen berkelanjutan, bukan proses yang pernah benar-benar selesai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risiko hanya akan muncul jika guru tersebut pindah ke sekolah lain</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru baru merasa hari-harinya berlalu begitu cepat sehingga ia tidak pernah sempat mencatat apa yang berhasil dan apa yang perlu diperbaiki dari cara mengajarnya. Berdasarkan Bab 9, kebiasaan sederhana apa yang paling tepat mulai ia terapkan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunggu hingga akhir tahun ajaran untuk melakukan satu kali evaluasi besar-besaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyediakan waktu singkat secara rutin untuk menulis jurnal refleksi harian atau mingguan, mencatat pengalaman mengajar dan reaksi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Berhenti meminta umpan balik dari siswa karena dianggap membuang waktu mengajar</button>
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
<h2 class="reveal">Menyusun Rencana untuk 100 Hari Berikutnya</h2>
<p class="lede reveal">Bab penutup ini mengajak Anda menoleh ke belakang sekaligus menatap ke depan — menetapkan tujuan jangka panjang yang bermakna, mengevaluasi dan menyesuaikan langkah yang telah diambil, serta menyusun strategi konkret untuk terus meningkatkan diri secara berkelanjutan.</p>

<div class="card reveal">
  <h4>A. Menetapkan Tujuan Jangka Panjang</h4>
  <p>Menetapkan tujuan jangka panjang membantu Anda merencanakan perkembangan dan pencapaian ke depan. Mulailah dengan refleksi atas pengalaman 100 hari pertama — tinjau pencapaian dan tantangan yang dihadapi, identifikasi apa yang berhasil dan area yang perlu diperbaiki — lalu gunakan refleksi ini sebagai dasar merumuskan tujuan yang realistis dan bermakna. Identifikasi pula kebutuhan dan prioritas pengembangan profesional Anda, apakah itu meningkatkan keterampilan mengajar tertentu, memperluas pengetahuan kurikulum baru, atau menghadapi tantangan kelas yang spesifik.</p>
  <p>Pastikan setiap tujuan yang ditetapkan memenuhi kriteria SMART: spesifik (jelas apa yang ingin dicapai), terukur (ada indikator kemajuan yang jelas), dapat dicapai (realistis dalam waktu yang ditetapkan), relevan (terhubung dengan visi-misi sekolah dan kebutuhan siswa), serta berbatasan waktu (memiliki tenggat yang jelas). Susun rencana tindakan yang rinci untuk setiap tujuan — langkah konkret, sumber daya yang dibutuhkan, dan siapa yang bisa membantu — lalu pecah menjadi tindakan yang bisa diukur mingguan atau bulanan, dan lakukan evaluasi berkala dengan tetap fleksibel menyesuaikan rencana seiring perubahan kondisi di lapangan.</p>

  <h4>B. Evaluasi dan Penyesuaian</h4>
  <p>Evaluasi kinerja diri adalah langkah kritis dalam pengembangan profesional guru. Mulailah dengan mengumpulkan data dan informasi objektif — hasil tes siswa, umpan balik dari siswa dan orang tua, serta pengamatan rekan guru atau supervisor — lalu analisis kinerja Anda secara kritis untuk mengidentifikasi kekuatan dan area yang perlu diperbaiki, dengan fokus pada pencapaian siswa, efektivitas strategi pengajaran, dan interaksi kelas. Lakukan refleksi pribadi secara teratur untuk mengevaluasi apakah tujuan yang ditetapkan sedang tercapai, dan mintalah umpan balik dari siswa maupun rekan kerja untuk mendapatkan perspektif tambahan.</p>
  <p>Berdasarkan analisis dan refleksi tersebut, tentukan tindakan perbaikan konkret — mungkin menyesuaikan metode pengajaran tertentu, memperbaiki pendekatan pengelolaan kelas, atau menawarkan bantuan tambahan kepada siswa yang memerlukannya. Buat rencana implementasi yang jelas lengkap dengan langkah, waktu pelaksanaan, dan sumber daya yang dibutuhkan, lalu tetapkan jadwal evaluasi berkala untuk meninjau apakah tindakan tersebut efektif. Jadikan siklus evaluasi ini berkelanjutan, bukan satu kali proses yang selesai begitu saja — sebab hanya dengan evaluasi yang terus-menerus Anda bisa memastikan tetap fokus pada pencapaian tujuan jangka panjang sebagai seorang pendidik.</p>

  <h4>C. Menyusun Strategi untuk Peningkatan Berkelanjutan</h4>
  <p>Setelah melewati 100 hari pertama, penting bagi guru untuk mulai menyusun strategi peningkatan berkelanjutan agar kualitas pengajaran tetap konsisten dan terus berkembang. Langkah pertama adalah evaluasi diri yang jujur terhadap keterampilan mengajar (apakah metode yang digunakan sudah efektif dan siswa aktif terlibat), manajemen kelas (apakah kelas tetap kondusif dan siswa yang sulit diatur bisa ditangani dengan baik), serta pencapaian siswa secara keseluruhan. Dari evaluasi ini, tentukan tujuan peningkatan yang jelas, spesifik, terukur, dan dapat dicapai — misalnya meningkatkan interaksi dengan siswa, menguasai teknologi pendidikan tertentu, memperbaiki manajemen waktu, atau mengembangkan keterampilan komunikasi dengan orang tua dan rekan kerja.</p>
  <p>Susun rencana aksi yang terperinci mencakup tindakan konkret harian, mingguan, atau bulanan — mengikuti pelatihan yang relevan, menerapkan teknik mengajar baru, memperbaiki pengelolaan kelas, atau berkolaborasi lebih aktif dengan rekan guru. Lakukan monitoring dan evaluasi berkala terhadap kemajuan tujuan, kumpulkan umpan balik dari siswa dan rekan guru, serta identifikasi tantangan dan hambatan baru yang mungkin muncul di sepanjang jalan. Yang terpenting, tetaplah terbuka untuk terus belajar dan beradaptasi dengan perubahan, karena dunia pendidikan terus bergerak dan kesediaan untuk terus bertumbuh — bukan sekadar bertahan — adalah yang membedakan guru yang berkembang dari guru yang berhenti di tempat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Setelah membaca seluruh 100 hari perjalanan dalam buku ini, tuliskan satu tujuan SMART yang ingin Anda capai dalam 100 hari berikutnya — lengkap dengan indikator keberhasilan dan batas waktunya.</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 10, kriteria SMART dalam menetapkan tujuan jangka panjang terdiri dari lima unsur, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Spesifik, terukur, dapat dicapai, relevan, dan berbatasan waktu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Santai, mudah, aman, ringan, dan tanpa target</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Standar, monoton, administratif, rutin, dan tetap</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menetapkan tujuan "menjadi guru yang lebih baik" tanpa indikator maupun batas waktu yang jelas, sehingga setelah beberapa bulan ia tidak bisa mengukur apakah tujuannya sudah tercapai. Berdasarkan Bab 10, apa yang seharusnya diperbaiki dari cara menetapkan tujuan tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena tujuan yang umum dianggap lebih fleksibel dan lebih baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merumuskan ulang tujuan tersebut agar memenuhi kriteria SMART — spesifik, terukur, dapat dicapai, relevan, dan memiliki batas waktu yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh proses penetapan tujuan karena dianggap tidak penting bagi guru</button>
  </div>
  <div class="quiz-q">
    <p>Setelah menjalankan rencana perbaikan selama sebulan, seorang guru tidak pernah meninjau ulang apakah tindakan tersebut benar-benar berhasil atau perlu disesuaikan. Berdasarkan Bab 10, langkah apa yang terlewat dari proses pengembangan diri guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada langkah yang terlewat karena rencana yang sudah dibuat sekali tidak perlu ditinjau lagi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Evaluasi dan monitoring berkala untuk menilai efektivitas tindakan perbaikan serta melakukan penyesuaian bila diperlukan, sebagai bagian dari siklus evaluasi berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh rencana dengan rencana baru setiap minggu tanpa pernah menjalankannya secara konsisten</button>
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
    <p>Berdasarkan Bab 1, sebelum menyusun rencana pelajaran, langkah paling mendasar yang perlu dilakukan calon guru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali budaya sekolah dan memahami kurikulum yang berlaku</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli seluruh perlengkapan mengajar tanpa mensurvei sekolah terlebih dahulu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghafal nama seluruh siswa di sekolah tanpa mempelajari kurikulumnya</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Pak Rian sudah menghafal kurikulum sekolah barunya, tetapi ruang kelasnya masih gelap dan meja tersusun kaku dalam barisan sejak guru sebelumnya. Berdasarkan Bab 1, langkah paling tepat yang perlu ia ambil adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan tata letak kelas apa adanya karena kurikulum dianggap jauh lebih penting</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meminta siswa membawa meja dan kursi masing-masing dari rumah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menata ulang formasi meja sesuai kebutuhan interaksi, memanfaatkan cahaya alami, dan memastikan ruang aman serta nyaman</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru baru menyampaikan aturan kelas dengan ramah di hari pertama, tetapi membiarkan pelanggaran nyata terjadi tanpa tindak lanjut apa pun pada hari yang sama. Berdasarkan Bab 2, dampak paling mungkin dari sikap ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa akan menganggap aturan tersebut tidak penting karena guru tidak konsisten dalam menerapkannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa akan semakin menghormati guru karena dianggap sangat pengertian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun karena aturan baru berlaku efektif setelah minggu pertama</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Bu Sarah hanya punya waktu sepuluh menit sebelum masuk materi inti dan murid-muridnya tampak pendiam serta canggung di hari pertama. Berdasarkan Bab 2, aktivitas ice-breaking paling sesuai untuk situasi ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">"Puzzle Kelompok" yang membutuhkan waktu lama dan alat peraga khusus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melewati sesi ice-breaking dan langsung memberi tugas esai panjang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aktivitas singkat seperti "Perkenalan dengan Bola" atau "Pertanyaan Cepat" yang ringan dan cepat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru menetapkan aturan kelas sendirian tanpa melibatkan siswa sama sekali, lalu hanya menempelkannya di dinding. Setelah beberapa minggu, banyak siswa melanggarnya seolah tidak menganggapnya penting. Berdasarkan Bab 3, akar masalah paling mungkin adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aturan yang dibuat terlalu sedikit sehingga siswa merasa bebas melanggarnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa tidak dilibatkan dalam proses penetapan aturan sehingga tidak merasa memiliki tanggung jawab untuk mematuhinya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aturan seharusnya tidak perlu ditempel di dinding kelas sama sekali</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Pak Dedi menyadari sebagian siswanya cepat paham lewat penjelasan lisan, sementara sebagian lain baru mengerti setelah melihat diagram atau mencoba eksperimen. Berdasarkan Bab 3, pendekatan paling tepat baginya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan pendekatan multi-sensory yang memadukan penjelasan lisan, diagram, dan praktik langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memilih satu metode ceramah saja agar seluruh kelas diperlakukan identik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengelompokkan siswa secara permanen berdasarkan gaya belajar tanpa pernah menggabungkannya lagi</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang guru menggunakan aplikasi kuis digital canggih di setiap pertemuan, namun sebagian siswanya tidak memiliki akses internet stabil di rumah sehingga tertinggal mengerjakan tugas lanjutan. Berdasarkan Bab 4, apa yang seharusnya diperhatikan sejak awal?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperhatikan karena teknologi harus digunakan semaksimal mungkin tanpa kecuali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh penggunaan teknologi dan kembali sepenuhnya ke metode manual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memastikan teknologi bisa diakses secara adil oleh seluruh siswa, dan menyiapkan alternatif bagi yang memiliki keterbatasan akses</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Bu Wulan hanya menilai kemajuan siswanya lewat satu ujian tertulis di akhir bulan, sehingga siswa yang sebenarnya aktif dan paham secara lisan mendapat nilai rendah karena kurang terampil menulis. Berdasarkan Bab 4, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena ujian tertulis adalah satu-satunya metode penilaian yang valid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengombinasikan beberapa metode penilaian seperti observasi, portofolio, dan ujian lisan agar lebih adil dan menyeluruh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti ujian tertulis dengan kuesioner kepuasan siswa semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru baru merasa canggung mendekati rekan-rekan senior dan memilih bekerja sendirian tanpa pernah berbagi materi maupun meminta umpan balik, hingga akhirnya kesulitan mengembangkan metode mengajarnya. Berdasarkan Bab 5, apa yang seharusnya ia lakukan sejak awal?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bersikap terbuka dan proaktif menjalin kolaborasi dengan rekan guru, termasuk mengambil peran sebagai mentee</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap bekerja sendirian karena kolaborasi dianggap tidak relevan bagi guru baru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga menjadi guru senior sebelum mulai berkolaborasi dengan siapa pun</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin memperkuat kepercayaan masyarakat sekitar terhadap program pendidikannya, namun guru-gurunya jarang terlibat dalam kegiatan di luar jam mengajar. Berdasarkan Bab 5, langkah paling relevan bagi guru untuk mendukung tujuan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi seluruh interaksi guru hanya pada ruang kelas tanpa keterlibatan pihak luar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyerahkan seluruh urusan hubungan masyarakat kepada kepala sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berpartisipasi dalam kegiatan masyarakat sekitar dan membangun kemitraan dengan pihak eksternal</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru merasa kewalahan karena harus mengoreksi tugas dan menjawab pesan orang tua hampir setiap malam, hingga kelelahan dan mudah marah di kelas. Berdasarkan Bab 6, langkah paling tepat yang perlu diambil adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terus bekerja tanpa henti karena mengeluh tentang beban kerja dianggap tidak profesional</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memprioritaskan tugas, mengatur jadwal yang menyisipkan waktu istirahat, dan berkomunikasi jujur tentang beban kerja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berhenti sepenuhnya berkomunikasi dengan orang tua siswa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang siswa kesulitan membaca teks panjang dan sering tertinggal mengerjakan tugas tertulis, namun sangat baik memahami materi lewat gambar. Berdasarkan Bab 6, langkah paling sesuai bagi guru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyediakan materi alternatif seperti ringkasan bergambar atau audio, serta memberi waktu tambahan sesuai kebutuhannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi nilai rendah otomatis karena dianggap kurang berusaha dalam membaca</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memindahkan siswa tersebut ke kelas lain tanpa penyesuaian metode terlebih dahulu</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang guru membuat kesalahan saat menjelaskan materi, namun memilih diam dan berpura-pura tidak terjadi apa-apa alih-alih mengakuinya. Berdasarkan Bab 7, dampak paling mungkin terhadap kepercayaan siswa adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak berdampak apa pun karena siswa dianggap tidak akan menyadari kesalahan kecil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Justru meningkatkan rasa hormat siswa karena guru dianggap selalu benar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berpotensi menurunkan kepercayaan siswa, karena integritas dibangun lewat kejujuran mengakui kesalahan, bukan menutupinya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali murid mengeluh karena anaknya mendapat perlakuan berbeda dari guru dibanding teman sekelasnya yang lebih akrab dengan guru tersebut. Berdasarkan prinsip etika profesional pada Bab 7, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena kedekatan personal dengan sebagian siswa dianggap wajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan aturan dan perlakuan secara adil dan konsisten kepada semua siswa tanpa membeda-bedakan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meminta wali murid untuk tidak lagi menyampaikan keluhan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah kelas ramai dan sulit dikendalikan karena rutinitas hariannya tidak pernah dikomunikasikan dengan jelas, sehingga siswa selalu bertanya-tanya apa yang harus dilakukan. Berdasarkan Bab 8, langkah manajemen kelas paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengomunikasikan rutinitas harian secara jelas dan konsisten agar siswa memahami apa yang diharapkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena rutinitas harian dianggap tidak berpengaruh terhadap ketertiban kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh siswa di kelas tersebut dengan siswa dari kelas lain</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang guru selalu mengajar dengan metode ceramah yang sama persis setiap hari, meski banyak siswanya mulai terlihat bosan dan kurang terlibat. Berdasarkan Bab 8, apa yang sebaiknya dilakukan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap mempertahankan metode yang sama karena mengubahnya dianggap membingungkan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh proses evaluasi karena dianggap menjadi penyebab kebosanan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan beragam metode pengajaran dan mengaktifkan siswa lewat diskusi, proyek, atau permainan peran</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru baru merasa hari-harinya berlalu begitu cepat sehingga tidak pernah sempat mencatat apa yang berhasil dan apa yang perlu diperbaiki dari cara mengajarnya. Berdasarkan Bab 9, kebiasaan sederhana apa yang paling tepat mulai diterapkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga akhir tahun ajaran untuk melakukan satu kali evaluasi besar-besaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyediakan waktu singkat secara rutin untuk menulis jurnal refleksi harian atau mingguan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berhenti meminta umpan balik dari siswa karena dianggap membuang waktu mengajar</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru merasa sudah cukup berpengalaman setelah mengajar bertahun-tahun, sehingga berhenti membaca literatur pendidikan baru maupun mengikuti pelatihan apa pun. Berdasarkan Bab 9, apa risiko dari sikap ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru berisiko tertinggal dari perkembangan dunia pendidikan yang terus berubah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena pengalaman mengajar sudah lebih dari cukup untuk seumur karier</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risiko hanya akan muncul jika guru tersebut pindah ke sekolah lain</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Setelah menjalankan rencana perbaikan selama sebulan, seorang guru tidak pernah meninjau ulang apakah tindakan tersebut berhasil atau perlu disesuaikan. Berdasarkan Bab 10, langkah apa yang terlewat dari proses pengembangan dirinya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada langkah yang terlewat karena rencana yang sudah dibuat sekali tidak perlu ditinjau lagi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh rencana dengan rencana baru setiap minggu tanpa pernah menjalankannya secara konsisten</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi dan monitoring berkala untuk menilai efektivitas tindakan perbaikan serta melakukan penyesuaian bila diperlukan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru menetapkan tujuan "menjadi guru yang lebih baik" tanpa indikator maupun batas waktu yang jelas, sehingga setelah beberapa bulan ia tidak bisa mengukur apakah tujuannya sudah tercapai. Berdasarkan Bab 10, apa yang seharusnya diperbaiki dari cara menetapkan tujuan tersebut?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena tujuan yang umum dianggap lebih fleksibel dan lebih baik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merumuskan ulang tujuan tersebut agar memenuhi kriteria SMART — spesifik, terukur, dapat dicapai, relevan, dan berbatasan waktu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh proses penetapan tujuan karena dianggap tidak penting bagi guru</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
