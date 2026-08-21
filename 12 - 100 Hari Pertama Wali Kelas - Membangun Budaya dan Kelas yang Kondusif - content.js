/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "100 Hari Pertama Wali Kelas: Membangun Budaya
   & Kelas yang Kondusif"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-100-hari-pertama-wali-kelas.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Mengenal Tugas Resmi Wali Kelas</h2>
<p class="lede reveal">Sebelum melangkah jauh membangun budaya kelas yang hangat dan kondusif, seorang wali kelas baru perlu berpijak pada pemahaman yang jelas tentang apa saja tugas resminya — sebab di balik semangat dan keteladanan, ada landasan hukum dan rincian tanggung jawab yang harus dijalankan dengan sadar dan konsisten.</p>

<div class="card reveal">
  <h4>A. Landasan Regulasi: Permendikbud RI Nomor 15 Tahun 2018</h4>
  <p>Menjadi wali kelas adalah amanah yang besar. Dalam praktiknya, wali kelas tidak hanya dituntut mampu mengelola administrasi dan disiplin kelas, tetapi juga menjadi tokoh sentral dalam membentuk iklim emosional, sosial, dan budaya belajar siswa. Namun sebelum masuk ke strategi dan pendekatan praktis, penting bagi setiap guru untuk memahami bahwa peran wali kelas tidak berdiri di atas semangat semata, melainkan juga memiliki landasan hukum yang sah dan diakui negara. Salah satu regulasi utama yang menjadi acuan formal bagi tugas-tugas wali kelas adalah Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 15 Tahun 2018 tentang Pemenuhan Beban Kerja Guru, Kepala Sekolah, dan Pengawas Sekolah. Dalam regulasi ini disebutkan secara eksplisit bahwa guru yang diangkat menjadi wali kelas berhak mendapatkan pengakuan beban kerja tambahan, sekaligus memiliki sejumlah tugas khusus yang menjadi tanggung jawab profesionalnya.</p>
  <p>Penting untuk dicatat bahwa dalam konteks kebijakan ini, tugas sebagai wali kelas bukanlah sekadar "tugas tambahan" tanpa struktur atau kejelasan. Justru sebaliknya, peran wali kelas diakui sebagai bagian penting dari sistem pendidikan, yang secara langsung berdampak pada keberhasilan manajemen peserta didik dan keberlangsungan budaya sekolah yang sehat. Secara garis besar, Permendikbud ini merinci tugas wali kelas ke dalam beberapa kelompok besar: mengelola kelas yang menjadi tanggung jawabnya, berinteraksi dengan orang tua atau wali peserta didik, menyelenggarakan administrasi kelas, menyusun dan melaporkan kemajuan belajar peserta didik, membuat catatan khusus tentang peserta didik, mencatat mutasi peserta didik, serta mengisi dan membagikan buku laporan penilaian hasil belajar (rapor). Ketujuh kelompok tugas ini akan dibahas satu demi satu pada bagian berikutnya, agar wali kelas baru memiliki gambaran yang utuh dan tidak meraba-raba arah kerja di hari-hari pertamanya.</p>

  <h4>B. Mengelola Kelas dan Menjalin Komunikasi dengan Orang Tua</h4>
  <p>Tugas pertama dan paling mendasar adalah mengelola kelas yang menjadi tanggung jawabnya. Tugas ini meliputi menata suasana kelas agar kondusif untuk belajar, menjaga ketertiban dan kedisiplinan siswa, mengelola sarana prasarana kelas (meja, kursi, kebersihan, hiasan kelas, dan sebagainya), serta menumbuhkan budaya positif yang mendukung proses belajar-mengajar. Dalam pengertian ini, wali kelas adalah "manajer kelas" yang bertugas menjaga ritme harian kelas agar tetap sehat dan produktif — bukan sekadar pengawas yang mengawasi dari luar, melainkan pengelola yang hadir dan terlibat setiap hari.</p>
  <p>Tugas kedua yang tidak kalah penting adalah berinteraksi dengan orang tua atau wali peserta didik. Kesalahan umum yang sering terjadi di sekolah adalah baru menghubungi orang tua ketika ada masalah — siswa melanggar aturan, nilai turun, atau terjadi konflik. Padahal, komunikasi yang efektif justru dibangun sebelum masalah muncul, melalui interaksi yang rutin dan positif: pesan mingguan berisi perkembangan umum kelas, catatan kecil di buku penghubung, laporan perkembangan siswa berkala, kegiatan orang tua-murid, hingga apresiasi lewat telepon atau pesan singkat ketika siswa menunjukkan sikap positif. Komunikasi semacam ini juga perlu terbuka dan berbasis empati — misalnya mengganti kalimat "anak Ibu/Bapak bermasalah" dengan "kami melihat ada tantangan yang sedang dihadapi ananda", tidak membandingkan siswa dengan teman-temannya di depan orang tua, serta menyampaikan kritik secara konstruktif disertai saran konkret. Agar komunikasi ini tidak terasa sebagai beban tambahan, wali kelas dapat menyusun strategi sederhana: mencatat preferensi komunikasi tiap orang tua (WA, telepon, atau bertemu langsung), menyiapkan format komunikasi bulanan agar tidak bersifat reaktif, mengarsipkan dokumentasi penting, melibatkan siswa membuat "surat untuk orang tua" sebagai bentuk refleksi, serta bekerja sama dengan guru BK untuk kasus yang lebih kompleks.</p>

  <h4>C. Administrasi Kelas, Catatan Khusus, dan Mutasi Siswa</h4>
  <p>Di balik kelas yang tampak tertib, ada sistem administrasi yang berjalan rapi di belakangnya. Administrasi kelas berfungsi mendokumentasikan aktivitas dan kondisi kelas secara objektif dan terukur, mempermudah pemantauan dan evaluasi terhadap siswa, memastikan transparansi dan akuntabilitas dalam komunikasi dengan sekolah dan orang tua, serta membantu proses refleksi dan pengambilan keputusan berdasarkan data, bukan asumsi. Jenis administrasi yang perlu dikelola wali kelas antara lain daftar hadir harian, jadwal piket dan rotasi tugas, buku catatan atau jurnal kelas, data identitas dan latar belakang siswa, agenda atau kalender kelas, serta arsip laporan berkala. Agar tidak menjadi beban, administrasi ini sebaiknya dijalankan dengan prinsip sederhana tapi konsisten, memanfaatkan bantuan teknologi seperti spreadsheet atau Google Drive, melibatkan siswa dalam sebagian tugas dokumentasi, dan disediakan waktu khusus tiap minggu untuk meninjau ulang.</p>
  <p>Selain administrasi umum, wali kelas juga perlu membuat dan menyimpan catatan khusus tentang setiap siswa — sebab setiap anak adalah individu yang unik dengan karakter, latar belakang, kekuatan, dan tantangannya masing-masing. Catatan ini idealnya mencakup dua kategori: catatan positif (perubahan sikap yang membaik, prestasi, tindakan kepemimpinan) dan catatan khusus atau masalah (pelanggaran berulang, perilaku menyimpang, masalah emosional, konflik) yang harus ditulis dengan bahasa objektif, netral, dan tidak menghakimi. Prinsip etika mencatat perlu dijaga ketat: tidak menyebarkan isi catatan kepada pihak yang tidak berkepentingan, tidak menjadikannya bahan sindiran, menghindari label seperti "anak nakal" atau "anak malas", serta selalu fokus pada solusi, bukan sekadar merekam masalah. Terakhir, wali kelas juga perlu mengelola mutasi siswa — baik yang masuk maupun keluar kelas — dengan cermat. Pada mutasi masuk, tugas wali kelas meliputi menerima data dan dokumen dengan lengkap, menyambut siswa baru secara ramah dan terstruktur (termasuk menugaskan teman sebaya sebagai pendamping adaptasi), memperbarui data kelas, dan mendampingi proses adaptasi selama minggu-minggu awal. Pada mutasi keluar, wali kelas perlu mendampingi proses administrasi, membuat catatan akhir siswa, menginformasikan secara positif kepada teman sekelas, serta menjaga hubungan baik meski siswa sudah pindah — sebab di balik data yang berpindah, ada dimensi emosional yang perlu diperhatikan agar baik siswa yang datang maupun yang pergi merasa dihargai.</p>

  <h4>D. Mengisi Rapor dan Menyusun Laporan Wali Kelas</h4>
  <p>Buku rapor bukan sekadar dokumen resmi, melainkan potret perkembangan siswa selama satu semester. Agar rapor berfungsi optimal, ada lima prinsip yang perlu dijadikan acuan: akurat (data sesuai fakta, bukan asumsi), komprehensif (mencakup aspek kognitif, afektif, dan psikomotorik), konstruktif (bahasa yang membangun, menghindari label negatif), rahasia (hanya diakses pihak berwenang), dan tepat waktu (mengikuti kalender akademik). Proses pengisiannya idealnya melalui empat tahap: koordinasi dengan guru mata pelajaran untuk memastikan nilai sudah tepat dan konsisten, rekapitulasi serta validasi data untuk melihat kejanggalan, penambahan catatan pribadi wali kelas bila relevan, hingga pengecekan dan persetujuan dari kepala sekolah sebelum rapor dicetak dan dibagikan.</p>
  <p>Selain rapor, wali kelas juga perlu menyusun laporan secara rutin dan komunikatif — bukan sekadar bentuk pertanggungjawaban administratif, melainkan alat komunikasi struktural yang mencerminkan realitas kehidupan kelas. Laporan ini dapat bersifat rutin (bulanan atau semesteran, berisi rekapitulasi kehadiran, perkembangan perilaku, dan kegiatan kelas) maupun insidental (disampaikan saat terjadi kasus tertentu seperti pelanggaran berat atau konflik, ditulis secara naratif, kronologis, dan objektif). Isi laporan yang ideal mencakup identitas kelas, kondisi umum kelas, data kehadiran siswa, perkembangan sikap dan perilaku, catatan khusus, kegiatan kelas, serta saran dan tindak lanjut — semuanya ditulis dengan prinsip objektif, jelas dan ringkas, berdasarkan data, tepat waktu, serta menjaga etika dan kerahasiaan. Laporan wali kelas yang disusun dengan baik bukan sekadar kewajiban administratif; di dalamnya tersimpan refleksi, evaluasi, dan harapan atas proses pendidikan yang telah dijalani bersama siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat kelompok tugas wali kelas pada bab ini — mengelola kelas & komunikasi orang tua, administrasi & catatan siswa, mutasi siswa, serta rapor & laporan — kelompok tugas mana yang selama ini paling sering Anda anggap "sekadar formalitas", dan bagaimana Anda ingin memperlakukannya secara lebih bermakna mulai minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, regulasi yang menjadi landasan hukum utama bagi tugas resmi wali kelas adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Permendikbud RI Nomor 15 Tahun 2018 tentang Pemenuhan Beban Kerja Guru, Kepala Sekolah, dan Pengawas Sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Peraturan Pemerintah Nomor 19 Tahun 2005 tentang Standar Nasional Pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas terbiasa hanya menghubungi orang tua ketika siswa melanggar aturan atau nilainya turun, dan tidak pernah berkomunikasi di luar situasi bermasalah. Berdasarkan bab ini, apa yang sebaiknya diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi seluruh komunikasi dengan orang tua agar wali kelas tidak dianggap ikut campur berlebihan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun komunikasi yang rutin dan positif sejak awal, bukan hanya saat ada masalah, agar tercipta kepercayaan dua arah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyerahkan seluruh urusan komunikasi dengan orang tua kepada guru BK sepenuhnya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas menulis catatan siswa dengan kalimat "anak ini bandel dan susah diatur", lalu membagikannya secara terbuka di grup WhatsApp guru mata pelajaran. Berdasarkan bab ini, apa kesalahan utama dari tindakan tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kesalahan, karena semua guru berhak mengetahui kondisi setiap siswa secara detail</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kesalahannya hanya soal media yang digunakan, seharusnya ditulis di buku fisik, bukan grup WhatsApp</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melanggar etika mencatat: memberi label negatif dan menyebarkan catatan kepada pihak yang tidak semestinya, alih-alih menulis dengan bahasa netral dan menjaga kerahasiaan</button>
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
<h2 class="reveal">Adab dan Integritas Seorang Wali Kelas</h2>
<p class="lede reveal">Jika bab sebelumnya berbicara tentang apa yang harus dikerjakan wali kelas, bab ini berbicara tentang siapa yang harus dihadirkan wali kelas — sebab siswa belajar jauh lebih banyak dari apa yang mereka lihat setiap hari daripada dari apa yang mereka dengar sesekali.</p>

<div class="card reveal">
  <h4>A. Mengapa Wali Kelas adalah Teladan Utama Sejak Hari Pertama</h4>
  <p>Setiap guru adalah teladan, namun wali kelas adalah teladan utama dalam kehidupan sehari-hari siswa di sekolah. Ini karena wali kelas adalah sosok yang paling dekat, paling sering berinteraksi, dan paling banyak menjadi rujukan siswa — tidak hanya dalam hal akademik, tetapi juga dalam sikap, tutur kata, pilihan tindakan, dan respons terhadap situasi sehari-hari. Maka membangun keteladanan bukanlah tugas tambahan, melainkan fondasi dari seluruh peran wali kelas. Dalam pendidikan Islam maupun prinsip pedagogis universal, keteladanan (uswah hasanah) diyakini sebagai metode pendidikan yang paling kuat dan alami, sebab anak-anak — terutama di tingkat SD hingga SMA — masih sangat meniru, jauh lebih besar pengaruhnya dibanding sekadar mendengar nasihat. Wali kelas yang berkata jujur, berpakaian rapi, bersikap santun, dan konsisten antara kata dan perbuatan akan jauh lebih menginspirasi daripada yang hanya menyampaikan nasihat panjang. Contoh keteladanan sesederhana menyapa siswa dengan senyum meski sedang lelah, tidak memotong antrean makan di kantin, meminta maaf ketika salah menyebut nama siswa, atau datang tepat waktu — tanpa disadari mengajarkan nilai kesopanan, kerendahan hati, kejujuran, tanggung jawab, dan empati.</p>
  <p>Hari-hari pertama tahun ajaran adalah investasi budaya yang sangat menentukan. Dalam satu hingga tiga hari pertama, siswa akan "memotret" seperti apa guru mereka: apakah tegas, ramah, sabar, galak, atau konsisten? Setiap kalimat, ekspresi, dan keputusan pada hari pertama akan menjadi rujukan diam-diam bagi siswa sepanjang tahun. Oleh karena itu, penting bagi wali kelas untuk menunjukkan karakter positif sejak awal tanpa menunda dengan alasan "masih adaptasi", membuat kesan pertama yang otentik dan menyenangkan lewat perkenalan yang jujur dan ice breaking yang sesuai usia siswa, serta menjelaskan aturan kelas dengan nada yang membangun — misalnya "kita akan membuat kelas ini nyaman bersama-sama" alih-alih ancaman seperti "siapa yang melanggar akan saya hukum".</p>

  <h4>B. Lima Adab Pokok yang Wajib Dijaga</h4>
  <p>Adab bukan sekadar tata krama, melainkan cerminan karakter, integritas, dan nilai-nilai yang diyakini seseorang. Bagi seorang wali kelas, adab adalah "pakaian" yang dikenakan setiap hari — bukan hanya saat mengajar, tetapi juga saat berinteraksi, menegur, memberi arahan, bahkan ketika diam. Adab pertama adalah bertutur kata santun kepada semua pihak: menegur siswa dengan hormat tanpa menjatuhkan martabatnya, berkomunikasi dengan orang tua tanpa menyalahkan atau merendahkan, serta menjaga tutur kata kepada rekan sejawat meski berbeda pandangan. Santun di sini tidak berarti selalu lembut, tetapi tepat, terukur, dan tidak menyakiti — ketegasan tidak harus diiringi kekasaran. Adab kedua adalah tidak menerima hadiah pribadi dari siswa atau orang tua, sebab meski niatnya baik, hal ini dapat menimbulkan kesan tidak adil atau pilih kasih. Jika orang tua ingin memberi sesuatu, lebih baik diarahkan menjadi donasi umum bagi kelas, seperti buku bacaan atau alat kebersihan yang bisa dinikmati bersama.</p>
  <p>Adab ketiga adalah berpakaian sopan dan sesuai nilai-nilai Islam — rapi, menutup aurat, tidak mencolok, sebab penampilan wali kelas menjadi semacam "poster berjalan" dari budaya sekolah di mata siswa dan orang tua. Adab keempat adalah menjaga penampilan rapi dan bersih, karena kesan pertama dan kepercayaan siswa banyak dipengaruhi oleh hal-hal sederhana ini; wali kelas yang rapi dan bersih akan lebih mudah membangun kepercayaan diri siswa untuk dekat dan berdialog, sekaligus meningkatkan rasa hormat mereka. Adab kelima adalah menjaga nama baik sekolah — wali kelas adalah duta sekolah, sehingga apa yang dilakukannya di ruang publik, termasuk media sosial dan forum orang tua, akan selalu mencerminkan citra sekolah tempatnya mengabdi, termasuk menjaga amanah dan tidak membicarakan kelemahan siswa secara terbuka.</p>

  <h4>C. Keteladanan yang Menular</h4>
  <p>Perilaku wali kelas yang konsisten akan menular ke tiga arah sekaligus. Kepada siswa, mereka belajar cara menyapa, bersikap jujur, menyelesaikan konflik, hingga menghargai perbedaan — semuanya diserap tanpa perlu diajarkan secara eksplisit. Kepada sesama guru, budaya profesional akan tumbuh bila keteladanan dibiasakan bersama. Dan kepada orang tua, wali kelas yang santun dan berintegritas akan lebih mudah menjalin komunikasi yang sehat dan produktif, karena kepercayaan sudah terbangun lebih dulu lewat sikap sehari-hari.</p>
  <p>Membangun keteladanan bukan soal menjadi sempurna, melainkan soal kesadaran untuk terus memperbaiki diri dan menjadikan diri sebagai contoh yang layak ditiru. Sebagaimana kata pepatah, "anak-anak tidak akan selalu mendengarkan yang kita katakan, tetapi mereka akan selalu meniru apa yang kita lakukan." Karena itu, mari jadikan hari pertama dan seterusnya sebagai ruang praktik nyata keteladanan yang penuh keikhlasan dan kesungguhan — sebab di ruang terkecil bernama kelas inilah budaya sekolah sesungguhnya mulai dibentuk.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima adab pokok pada bab ini — tutur kata, hadiah, penampilan syar'i, kerapian, dan nama baik sekolah — adab mana yang menurut Anda paling sering luput dijaga oleh guru-guru di sekitar Anda, dan bagaimana Anda ingin mempraktikkannya secara sadar mulai hari ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Istilah keteladanan dalam pendidikan Islam yang disebut pada bab ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Uswah hasanah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tarbiyah dzatiyah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ta'dib formal</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas menerima amplop berisi uang dari salah satu orang tua siswa secara diam-diam, tanpa menyampaikannya secara terbuka kepada kelas. Berdasarkan bab ini, apa dampak paling mungkin dari tindakan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun selama wali kelas tetap bersikap adil kepada semua siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berpotensi menimbulkan kesan tidak adil atau pilih kasih dan merusak kepercayaan, sehingga sebaiknya diarahkan menjadi donasi umum untuk kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menjadi hal yang wajar karena merupakan bentuk apresiasi pribadi dari orang tua kepada guru</button>
  </div>
  <div class="quiz-q">
    <p>Pak Budi, wali kelas baru, di hari pertama menyambut siswa dengan wajah lelah dan nada ketus, lalu terlihat memotong antrean makan siang di kantin di depan murid-muridnya. Berdasarkan bab ini, apa dampak paling mungkin dari sikap ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak berpengaruh apa pun karena siswa hanya memperhatikan penjelasan materi pelajaran, bukan sikap guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan segera melupakannya karena hari pertama bukan momen penting dalam pembentukan budaya kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sikap tersebut berisiko menjadi "template" yang ditiru siswa, karena hari pertama adalah investasi budaya yang sangat membekas</button>
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
<h2 class="reveal">Membangun Budaya Kelas yang Positif</h2>
<p class="lede reveal">Budaya kelas tidak tumbuh dengan sendirinya — ia adalah hasil dari kesadaran, prinsip, dan strategi yang dijalankan dengan sengaja sejak hari-hari pertama, bukan sesuatu yang kebetulan terjadi begitu saja.</p>

<div class="card reveal">
  <h4>A. Pentingnya Budaya Kelas Sejak Awal</h4>
  <p>Di awal tahun ajaran, siswa masih berada dalam fase adaptasi dan sangat peka terhadap sinyal sosial dari guru maupun teman-teman barunya. Jika guru mampu membangun suasana yang ramah dan terbuka sejak awal, menekankan kebersamaan dan kolaborasi, serta tegas dalam menegakkan aturan yang telah disepakati bersama, maka budaya positif akan lebih mudah terbentuk dan terinternalisasi dalam perilaku siswa. Sebaliknya, jika masa awal ini dilewati tanpa perhatian pada pembentukan budaya, akan jauh lebih sulit memperbaikinya di tengah tahun ajaran.</p>
  <p>Meski budaya kelas melibatkan semua pihak, wali kelas memegang peran sentral dalam proses pembentukan awal ini. Ia menjadi pemimpin nilai (value leader), penjaga konsistensi aturan, fasilitator hubungan antarindividu, sekaligus role model yang diamati siswa setiap saat. Namun peran ini akan jauh lebih efektif jika wali kelas melibatkan siswa dalam menyusun aturan dan nilai bersama, mendiskusikan makna budaya yang ingin dibangun, serta melibatkan guru lain dan orang tua dalam menguatkan budaya tersebut. Budaya kelas yang positif bukan sesuatu yang kebetulan, melainkan hasil dari kesadaran, perencanaan, dan tindakan konsisten sejak hari pertama. Seperti kata yang sering diingatkan: "siswa tidak selalu ingat apa yang kita ajarkan, tapi mereka akan selalu mengingat bagaimana perasaan mereka saat belajar bersama kita."</p>

  <h4>B. Tujuh Prinsip Pengelolaan Kelas yang Efektif</h4>
  <p>Membangun budaya kelas yang positif tidak cukup hanya dengan niat baik dan harapan tinggi — diperlukan prinsip-prinsip praktis yang menjadi panduan dalam bersikap, merespons, dan mengambil keputusan setiap hari di kelas. Prinsip pertama adalah hangat dan antusias: kelas yang dikelola dengan sikap hangat akan meningkatkan keterlibatan siswa, mengurangi kecemasan, dan membuka ruang komunikasi dua arah yang sehat, sebab sikap ini menular — siswa cenderung meniru energi yang dipancarkan gurunya. Prinsip kedua adalah bervariasi, sebab kejenuhan adalah musuh utama pembelajaran; variasi dapat diterapkan lewat metode pembelajaran yang berbeda (diskusi, simulasi, permainan edukatif), cara penyampaian informasi (visual, audio, kinestetik), maupun aktivitas pembuka dan penutup yang menyegarkan.</p>
  <p>Prinsip ketiga adalah keluesan — kemampuan menyesuaikan pendekatan dengan kondisi emosional siswa, merespons kejadian tak terduga dengan tenang, dan mengubah strategi ketika cara lama tidak lagi efektif; keluesan bukan berarti longgar atau membiarkan pelanggaran, melainkan bentuk kecerdasan situasional. Prinsip keempat adalah penekanan pada hal-hal positif, yakni mengapresiasi perilaku baik, memberi pujian yang tulus dan proporsional, serta memberi kesempatan siswa memperbaiki kesalahan tanpa distigma. Prinsip kelima adalah penanaman disiplin diri, di mana siswa diajak menyusun aturan kelas bersama, menyepakati konsekuensi secara terbuka, dan dilatih untuk evaluasi diri — sehingga disiplin tumbuh dari kesadaran, bukan sekadar rasa takut dihukum.</p>
  <p>Prinsip keenam adalah keteladanan, sebab siswa belajar jauh lebih banyak dari apa yang mereka lihat daripada apa yang mereka dengar. Prinsip ketujuh adalah konsistensi — aturan yang ditegakkan secara adil kepada semua siswa, tindakan guru yang dapat diprediksi, serta tidak adanya perlakuan istimewa atau pilih kasih. Konsistensi inilah yang membangun kepercayaan siswa terhadap guru dan sistem kelas, sekaligus memperkuat rasa keadilan dan keamanan emosional di antara mereka. Mengelola kelas yang efektif bukan soal trik, melainkan soal prinsip — dan keberhasilannya tidak selalu terlihat dalam satu minggu atau satu bulan, tetapi akan terasa sepanjang tahun, bahkan mungkin membekas seumur hidup siswa.</p>

  <h4>C. Tiga Strategi Membentuk Budaya Kelas</h4>
  <p>Strategi pertama adalah menyepakati aturan bersama. Budaya kelas akan lebih kuat bila dibangun bersama, bukan dipaksakan dari atas — wali kelas perlu melibatkan siswa dalam menyusun aturan, menjelaskan alasan di balik setiap aturan agar siswa memahami bahwa peraturan dibuat untuk kebaikan bersama, menyepakati konsekuensi logis (bukan hukuman semena-mena), lalu menulis dan menandatangani "kontrak kelas" bersama seluruh siswa. Manfaatnya jelas: siswa merasa dihargai dan didengar, terbangun rasa tanggung jawab kolektif, dan konflik berkurang karena semua aturan berasal dari kesepakatan bersama.</p>
  <p>Strategi kedua adalah membangun kebiasaan positif harian, sebab budaya tidak hanya terbentuk dari aturan, tetapi juga dari ritual harian yang berulang dan bermakna — seperti salam dan doa pagi bersama, rotasi tugas piket, serta refleksi atau evaluasi singkat di akhir pelajaran. Kebiasaan-kebiasaan sederhana ini membentuk rasa kebersamaan dan keteraturan, kepedulian antarindividu, serta budaya reflektif dan tanggung jawab pribadi. Strategi ketiga adalah menguatkan simbol dan identitas kelas — membuat nama kelas bersama, menyusun slogan atau moto, menciptakan yel-yel kelas, dan menghias kelas bersama-sama. Identitas yang dibangun bersama ini menciptakan rasa bangga, kekompakan, dan loyalitas siswa terhadap komunitasnya, sehingga kelas tidak lagi sekadar ruangan, tetapi menjadi "rumah kecil" dengan semangat dan kepribadiannya sendiri. Seperti yang diingatkan dalam buku ini: "kelas yang baik bukan hanya tempat belajar, tetapi tempat tumbuh menjadi manusia yang lebih baik."</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tujuh prinsip pengelolaan kelas pada bab ini, prinsip mana yang menurut Anda paling sulit dijalankan secara konsisten di kelas Anda saat ini, dan langkah kecil apa yang bisa mulai Anda terapkan minggu ini untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa prinsip pengelolaan kelas yang efektif yang dibahas sebagai kompas perilaku wali kelas?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tiga prinsip</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Lima prinsip</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tujuh prinsip</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas selalu menggunakan metode ceramah yang sama setiap hari tanpa variasi apa pun, sehingga siswa mulai terlihat bosan dan kurang antusias mengikuti pelajaran. Berdasarkan bab ini, prinsip apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip konsistensi, karena guru harus mempertahankan metode yang sama setiap hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip bervariasi, karena kejenuhan adalah musuh utama pembelajaran dan perlu diatasi dengan metode serta cara penyampaian yang beragam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip penanaman disiplin diri, karena siswa yang bosan berarti kurang disiplin</button>
  </div>
  <div class="quiz-q">
    <p>Di kelas Bu Sari, aturan kelas sudah ditempel rapi di dinding sejak hari pertama, namun dalam praktiknya beberapa siswa yang dekat dengannya sering dibiarkan melanggar aturan tanpa konsekuensi, sementara siswa lain ditegur tegas. Berdasarkan bab ini, prinsip apa yang dilanggar dalam situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip penekanan pada hal-hal positif, karena Bu Sari terlalu banyak memberi pujian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip konsistensi, karena aturan tidak ditegakkan secara adil kepada semua siswa dan ada perlakuan istimewa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip keluesan, karena Bu Sari terlalu fleksibel dalam menyesuaikan pendekatan</button>
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
<h2 class="reveal">Merancang Struktur dan Kehangatan Kelas</h2>
<p class="lede reveal">Kelas yang ideal bukan sekadar tertib secara administratif, melainkan hangat secara emosional — sebuah ruang di mana setiap siswa merasa menjadi bagian dari sesuatu yang lebih besar dari dirinya sendiri, layaknya keluarga kecil yang saling menopang.</p>

<div class="card reveal">
  <h4>A. Kelas sebagai Keluarga Kecil</h4>
  <p>Kelas bukan hanya ruang fisik tempat belajar. Lebih dari itu, kelas adalah lingkungan sosial dan emosional tempat siswa tumbuh, belajar, berekspresi, dan membangun jati diri. Maka peran wali kelas tidak sekadar sebagai pengelola pembelajaran, tetapi sebagai "kepala keluarga kecil" yang menciptakan suasana hangat, aman, dan menyenangkan bagi semua anggota kelas. Konsep ini bukan berarti mengabaikan capaian akademik, melainkan justru menopangnya dengan fondasi emosional yang sehat — sebab siswa yang merasa diterima, dihargai, dan dicintai di dalam kelas cenderung memiliki rasa percaya diri yang lebih kuat, kesiapan belajar yang lebih tinggi, motivasi yang stabil, dan kemampuan sosial yang lebih baik. Sebaliknya, siswa yang tidak merasa aman secara emosional akan enggan berpartisipasi dalam diskusi, menyembunyikan permasalahannya, menarik diri dari kelompok, dan kesulitan berkembang secara optimal.</p>
  <p>Dalam kelas yang berperan seperti keluarga, wali kelas memainkan peran sebagai figur emosional — menjadi pendengar yang baik bagi siswa, memberi validasi atas perasaan dan pengalaman mereka, menjadi penengah konflik dengan bijak, serta menjadi sumber semangat dan harapan di masa sulit. Beberapa langkah konkret untuk mewujudkan kelas yang hangat antara lain mengawali hari dengan menyapa siswa secara pribadi, membentuk lingkaran refleksi atau forum curhat kelas secara berkala, merayakan keberhasilan dan momen penting siswa bersama-sama, memberi waktu untuk permainan atau aktivitas relaksasi, serta membangun budaya saling menghargai dan anti-bullying — sebab setiap anggota kelas adalah bagian dari keluarga, dan tidak boleh ada yang direndahkan, dikucilkan, atau dibiarkan menghadapi masalah sendirian.</p>

  <h4>B. Membagi Peran dan Kepemimpinan Siswa</h4>
  <p>Membangun budaya kelas yang positif bukan hanya soal bagaimana guru memimpin, tetapi juga tentang bagaimana siswa dilibatkan sebagai bagian aktif dalam kepemimpinan dan pengelolaan kelas. Setiap anak memiliki potensi untuk memimpin, berkontribusi, dan bertumbuh, dan tugas wali kelas adalah membuka ruang agar semua siswa dapat mengambil bagian — sehingga mereka belajar tanggung jawab sosial, keterampilan komunikasi dan organisasi, empati, negosiasi, dan penyelesaian konflik, sekaligus menumbuhkan rasa memiliki terhadap kelasnya. Langkah pertama adalah menyusun struktur organisasi kelas — ketua kelas, wakil ketua, sekretaris, bendahara, koordinator piket, hingga koordinator kegiatan — melalui pemilihan yang demokratis dan transparan, dengan pendampingan agar siswa memahami tugasnya serta evaluasi berkala.</p>
  <p>Karena terkadang hanya segelintir siswa yang terlibat aktif dalam organisasi kelas, langkah kedua adalah menumbuhkan kepemimpinan kolaboratif, di mana setiap siswa memiliki peran dan tanggung jawab walaupun kecil, dengan rotasi tanggung jawab yang dilakukan secara berkala — misalnya penjaga perpustakaan mini, penanggung jawab sudut kreativitas, atau moderator forum kelas — sehingga anak yang pemalu sekalipun memiliki ruang untuk berkembang, dan tumbuh solidaritas serta saling menghargai antaranggota kelas. Langkah ketiga adalah membuat forum kelas atau komunitas sebagai pertemuan rutin yang membahas aturan, kegiatan, atau isu yang sedang muncul, sekaligus wadah untuk mengevaluasi dinamika kelas. Forum ini sebaiknya dipimpin langsung oleh siswa, dengan wali kelas hadir sebagai fasilitator, bukan dominator, dan hasilnya dicatat serta ditindaklanjuti. Seperti kata yang relevan di sini: "kepemimpinan bukan tentang siapa yang paling hebat, tapi siapa yang paling siap melayani dan menggerakkan kebaikan bersama."</p>

  <h4>C. Strategi Menumbuhkan Rasa Memiliki</h4>
  <p>Salah satu fondasi dari kelas yang sehat dan produktif adalah rasa memiliki yang kuat dari setiap siswanya. Rasa ini tidak terbentuk secara instan, melainkan dibangun melalui pengalaman bersama, penerimaan sosial, dan dukungan emosional yang konsisten sejak hari-hari pertama. Strategi pertama adalah kegiatan bersama yang bermakna, seperti proyek kelas (majalah dinding tematik, kampanye peduli lingkungan, karya seni kolaboratif), bakti sosial di lingkungan sekitar, hingga agenda internal seperti "class meeting ceria" — kegiatan-kegiatan ini meningkatkan solidaritas antarsiswa, memberi ruang bagi siswa dengan berbagai potensi untuk tampil, dan menumbuhkan tanggung jawab terhadap komunitas kecil mereka.</p>
  <p>Strategi kedua adalah dukungan emosional terhadap siswa baru, sebab mereka seringkali menghadapi kecemasan sosial dan kesulitan beradaptasi — lewat sambutan hangat di hari pertama, program "teman pendamping", serta pemantauan khusus terhadap perasaan dan pergaulan mereka, sehingga tidak ada siswa yang merasa "asing" di kelasnya sendiri. Strategi ketiga adalah membangun suasana aman dan inklusif, dengan menyepakati nilai-nilai kelas seperti saling menghormati dan tidak mengejek, menindak tegas segala bentuk bullying atau diskriminasi, menyediakan ruang curhat atau refleksi terbuka, serta mengapresiasi keragaman kemampuan, latar belakang, dan kepribadian siswa. Rasa memiliki tidak bisa dipaksakan, tetapi bisa dibentuk — dan seperti diingatkan dalam buku ini, "kelas bukan sekadar ruang belajar, tetapi rumah kedua yang merangkul semua siswanya."</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari konsep "kelas sebagai keluarga kecil" pada bab ini, langkah kecil apa yang bisa Anda mulai minggu ini agar setiap siswa — termasuk yang paling pendiam sekalipun — merasa benar-benar menjadi bagian dari kelas Anda?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, wali kelas berperan layaknya siapa dalam konsep "kelas sebagai keluarga kecil"?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kepala keluarga kecil atau figur emosional bagi seluruh siswa di kelasnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Wasit pertandingan yang hanya bertugas menegakkan aturan secara ketat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pengawas ujian yang bertugas memastikan ketertiban semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas membentuk struktur organisasi kelas yang lengkap (ketua, sekretaris, bendahara, dan seterusnya), tetapi hanya segelintir siswa yang aktif terlibat, sementara siswa lain merasa perannya tidak penting. Berdasarkan bab ini, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mempertahankan struktur yang ada tanpa perubahan karena sudah sesuai prosedur</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menumbuhkan kepemimpinan kolaboratif dengan rotasi tanggung jawab secara berkala, agar semua siswa mendapat kesempatan berperan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membubarkan struktur organisasi kelas sepenuhnya karena dianggap tidak efektif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa pindahan baru masuk di tengah semester dan terlihat menyendiri, jarang berbicara, serta belum berbaur dengan teman-teman sekelasnya. Berdasarkan bab ini, langkah paling tepat yang bisa dilakukan wali kelas adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini berjalan alami agar siswa belajar beradaptasi sendiri tanpa bantuan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera mengusulkan agar siswa tersebut dipindahkan ke kelas lain yang dianggap lebih cocok</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberikan dukungan emosional lewat program "teman pendamping" serta pemantauan khusus terhadap perasaan dan pergaulannya</button>
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
<h2 class="reveal">100 Hari Pertama yang Bermakna</h2>
<p class="lede reveal">Sampai di bab terakhir ini, seluruh pemahaman tentang tugas resmi, adab, budaya kelas, dan kehangatan struktur perlu dirangkai menjadi satu rencana aksi yang nyata — sebab 100 hari pertama tidak akan bermakna hanya dengan niat baik, melainkan dengan langkah yang terencana, dijalani, dan dievaluasi.</p>

<div class="card reveal">
  <h4>A. Membuat Rencana Aksi 100 Hari</h4>
  <p>Dalam dunia pendidikan, 100 hari pertama memiliki makna strategis, khususnya bagi seorang wali kelas. Bukan sekadar hitungan waktu, melainkan masa krusial dalam membangun budaya, hubungan, dan ritme kelas yang akan bertahan sepanjang tahun. Agar 100 hari ini benar-benar bermakna, wali kelas perlu menyusun rencana aksi yang sistematis, fleksibel, dan berorientasi pada pertumbuhan — salah satunya dengan membagi waktu ke dalam tiga fase. Fase awal (hari ke-1 hingga ke-30) berfokus pada membangun hubungan, menciptakan rasa aman, dan mengenal karakter siswa, lewat perkenalan dan observasi, penyusunan aturan kelas bersama, penataan ruang kelas, serta pembentukan rutinitas harian seperti piket dan doa bersama. Fase tengah (hari ke-31 hingga ke-70) berfokus pada memperkuat struktur, menumbuhkan partisipasi aktif, dan mengembangkan kepemimpinan siswa, lewat proyek kolaboratif, pemberdayaan pengurus kelas, dan kegiatan refleksi rutin. Fase akhir (hari ke-71 hingga ke-100) berfokus pada konsolidasi budaya, evaluasi, dan penguatan karakter kelas, lewat penyusunan ulang peran, peneguhan nilai-nilai kelas, apresiasi prestasi siswa, hingga refleksi bersama tentang keseluruhan perjalanan 100 hari.</p>
  <p>Kunci keberhasilan 100 hari pertama bukan pada banyaknya program, melainkan pada ketepatan dan keberlangsungan pelaksanaannya. Oleh karena itu, target yang ditetapkan sebaiknya sederhana (mudah dipahami dan dilaksanakan), realistis (sesuai kapasitas wali kelas dan kondisi siswa), terukur (bisa dilihat atau dirasakan hasilnya), dan bersifat mendidik (membentuk karakter, bukan sekadar menyenangkan). Contohnya: semua siswa hafal nama dan menyapa minimal tiga teman baru dalam dua minggu pertama, membuat aturan kelas bersama dan menempelkannya di minggu pertama, menyelenggarakan minimal satu forum kelas untuk evaluasi dalam 50 hari pertama, atau menumbuhkan kebiasaan saling memuji minimal satu kali per minggu. Target-target ini bisa dicatat dalam "Jurnal 100 Hari Pertama Wali Kelas" sebagai alat refleksi harian atau mingguan. Sebagaimana ditegaskan dalam buku ini: "bukan tentang berapa banyak yang dilakukan, tapi seberapa dalam itu berdampak."</p>

  <h4>B. Aktivitas Harian dan Mingguan yang Berdampak</h4>
  <p>Tanpa rutinitas yang terarah, hari-hari akan terlewat tanpa makna. Ada tiga aktivitas sederhana namun sangat berpengaruh jika dilakukan secara konsisten. Pertama, morning briefing ringan — alokasi waktu lima hingga sepuluh menit sebelum pembelajaran dimulai untuk sapaan hangat satu per satu, berbagi motivasi atau cerita inspiratif singkat, ajakan menetapkan niat dan semangat belajar, serta doa bersama dengan suasana reflektif. Tujuannya adalah menyambut hari dengan penuh semangat, menumbuhkan kedekatan emosional antara wali kelas dan siswa, serta membentuk ritme harian yang positif — bukan ceramah, melainkan ruang penguatan psikologis dan emosional.</p>
  <p>Kedua, refleksi mingguan bagi siswa dan guru — menyediakan waktu khusus setiap pekan untuk mengajak siswa melihat ke belakang dan menata langkah ke depan, misalnya lewat pertanyaan sederhana seperti "apa hal terbaik yang terjadi minggu ini?" atau "apa yang ingin saya perbaiki minggu depan?". Wali kelas juga perlu mengisi jurnal refleksi pribadinya sendiri terkait dinamika kelas, sehingga hubungan siswa-guru menjadi lebih terbuka dan guru lebih peka terhadap perkembangan siswanya. Ketiga, interaksi rutin dengan orang tua — lewat WA grup kelas yang digunakan secara bijak, catatan mingguan untuk orang tua, dan pesan personal sesekali bagi siswa yang memerlukan perhatian khusus, dengan bahasa yang positif, solutif, dan bersahabat, serta frekuensi yang tidak berlebihan maupun terlalu jarang. Seperti diingatkan dalam buku ini: "hal kecil yang dilakukan terus-menerus, akan membentuk dampak besar dalam perjalanan mendidik."</p>

  <h4>C. Evaluasi dan Penyesuaian</h4>
  <p>Tidak ada perencanaan yang sempurna, dan tidak ada pelaksanaan yang tanpa cela. Setelah melampaui sebagian besar dari 100 hari pertama, saatnya wali kelas melihat ke belakang secara jujur, mengevaluasi proses yang telah dijalani, dan melakukan penyesuaian strategis — evaluasi bukan tanda kelemahan, melainkan komitmen untuk terus bertumbuh. Evaluasi suasana dan budaya kelas dapat dilakukan dengan menanyakan apakah siswa merasa nyaman dan aman secara emosional, apakah nilai-nilai yang disepakati benar-benar dijalankan, dan apakah konflik dapat diselesaikan dengan baik — lewat observasi harian, refleksi pribadi, dan analisis kejadian-kejadian penting dalam dinamika kelas.</p>
  <p>Sumber evaluasi terbaik lainnya adalah masukan dari siswa itu sendiri, misalnya lewat kegiatan "surat untuk wali kelasku", forum kelas khusus evaluasi 100 hari, atau kotak aspirasi mingguan — dengan syarat wali kelas menciptakan suasana yang aman untuk berbicara jujur, menunjukkan bahwa masukan mereka dihargai, dan mengambil tindakan nyata agar siswa merasa benar-benar didengar. Dari masukan dan evaluasi ini, wali kelas dapat menyusun ulang struktur organisasi kelas jika perannya belum berjalan baik, membuat aturan tambahan jika ada celah yang belum terantisipasi, atau menyesuaikan komunikasi dengan orang tua jika responsnya belum aktif — bukan mengubah segalanya, melainkan proses fine-tuning yang memperhalus dasar yang telah dibangun. Seratus hari pertama bukanlah akhir, melainkan awal dari perjalanan panjang dan penuh makna dalam dunia pendidikan. Sebagaimana pesan penutup dari buku ini: "wali kelas yang baik bukan yang tak pernah salah, tapi yang terus belajar menjadi lebih baik" — dan mendampingi tumbuhnya manusia adalah pekerjaan paling indah di dunia.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Setelah membaca keseluruhan buku ini, satu target sederhana apa yang ingin Anda tuliskan dalam "Jurnal 100 Hari Pertama Wali Kelas" Anda sendiri, dan bagaimana Anda akan mengevaluasi ketercapaiannya di hari ke-100?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, 100 hari pertama dibagi menjadi berapa fase dalam menyusun rencana aksi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua fase: persiapan dan pelaksanaan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tiga fase: fase awal, fase tengah, dan fase akhir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Lima fase yang masing-masing berlangsung 20 hari</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas menetapkan target yang sangat ambisius dan rumit untuk 100 hari pertamanya, mencakup lebih dari sepuluh program berbeda sejak minggu pertama tahun ajaran. Berdasarkan bab ini, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena semakin banyak program yang dijalankan akan semakin baik hasilnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berisiko tidak terlaksana dengan baik, karena kunci keberhasilan bukan pada banyaknya program, melainkan ketepatan dan keberlangsungan pelaksanaannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko selama rencana tersebut ditulis rapi dalam sebuah dokumen</button>
  </div>
  <div class="quiz-q">
    <p>Memasuki hari ke-80, seorang wali kelas menyadari bahwa sebagian aturan kelas yang disepakati di awal ternyata tidak berjalan efektif, dan sejumlah siswa mulai menyampaikan keluhan lewat kotak aspirasi. Berdasarkan bab ini, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan keluhan tersebut karena aturan sudah disepakati di awal dan tidak boleh diubah sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menegur siswa yang menyampaikan keluhan karena dianggap tidak menghargai kesepakatan awal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerima masukan tersebut secara terbuka dan melakukan penyesuaian strategis, seperti menyusun ulang aturan yang belum efektif</button>
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
<p class="eyebrow reveal">Evaluasi Akhir</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">20 soal berikut menguji pemahaman Anda atas seluruh isi buku, dari tugas resmi wali kelas hingga rencana aksi 100 hari pertama. Skor Anda akan muncul setelah menekan tombol "Periksa Jawaban Saya" di bagian akhir.</p>

<div class="card reveal">
  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, regulasi yang menjadi landasan hukum utama bagi tugas resmi wali kelas adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Permendikbud RI Nomor 15 Tahun 2018 tentang Pemenuhan Beban Kerja Guru, Kepala Sekolah, dan Pengawas Sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Peraturan Pemerintah Nomor 19 Tahun 2005 tentang Standar Nasional Pendidikan</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang wali kelas menyimpan data kesehatan, alamat, dan kondisi ekonomi siswa hanya dalam ingatannya tanpa dokumentasi tertulis, sehingga kesulitan saat dibutuhkan secara mendesak. Berdasarkan Bab 1, apa yang seharusnya dilakukan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan saja karena data pribadi siswa tidak perlu didokumentasikan secara tertulis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyerahkan sepenuhnya urusan tersebut kepada bagian tata usaha sekolah tanpa keterlibatan wali kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun administrasi kelas yang rapi, termasuk data identitas dan latar belakang siswa, agar mudah diakses saat dibutuhkan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali kelas menulis catatan siswa dengan kalimat "anak ini bandel dan susah diatur", lalu menyebarkannya secara terbuka di grup guru. Berdasarkan Bab 1, apa pelanggaran etika yang terjadi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada pelanggaran karena semua guru berhak mengetahui kondisi setiap siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi label negatif dan menyebarkan catatan kepada pihak yang tidak semestinya, bertentangan dengan prinsip mencatat secara objektif dan rahasia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelanggarannya hanya soal media penyampaian, bukan soal isi catatannya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang siswa pindahan baru masuk di tengah semester, namun wali kelas hanya mencatat namanya di absensi tanpa memperkenalkannya ke teman sekelas atau mendampingi proses adaptasinya. Berdasarkan Bab 1, apa yang terlewat dari proses ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tugas menyambut siswa dengan ramah dan terstruktur, termasuk mendampingi proses adaptasinya selama minggu-minggu pertama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang terlewat karena mencatat nama di absensi sudah cukup sebagai bentuk penerimaan siswa baru</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kewajiban tersebut sepenuhnya berada di tangan guru bimbingan konseling, bukan wali kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 2, istilah keteladanan dalam pendidikan Islam yang menjadi metode pendidikan paling kuat dan alami disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tarbiyah dzatiyah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Uswah hasanah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ta'dib formal</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang wali kelas menerima amplop berisi uang dari orang tua siswa secara diam-diam tanpa transparansi kepada kelas. Berdasarkan Bab 2, tindakan yang lebih tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerimanya karena merupakan bentuk apresiasi pribadi yang wajar dari orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerimanya asalkan tidak diketahui oleh kepala sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menolaknya secara santun dan mengarahkan pemberian tersebut menjadi donasi umum untuk kelas, demi menjaga netralitas dan kepercayaan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang wali kelas menegur siswa yang melanggar aturan dengan nada kasar dan kata-kata yang menjatuhkan, dengan alasan agar siswa jera. Berdasarkan Bab 2, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketegasan dalam menegakkan disiplin tidak boleh diiringi kekasaran; tutur kata santun harus tetap dijaga bahkan saat menegur</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah, karena menegur dengan tegas adalah bentuk kasih sayang yang sah kepada siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesalahannya hanya terletak pada waktu penyampaian teguran, bukan pada cara penyampaiannya</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Pak Budi, wali kelas baru, di hari pertama menyambut siswa dengan wajah lelah dan nada ketus. Berdasarkan Bab 2, dampak paling mungkin dari sikap ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak berpengaruh apa pun karena siswa hanya memperhatikan materi pelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa akan segera melupakannya karena hari pertama bukan momen penting</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berisiko menjadi "template" yang membekas dan ditiru siswa, karena hari pertama adalah investasi budaya</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Menurut Bab 3, ada berapa prinsip pengelolaan kelas yang efektif yang dibahas sebagai kompas perilaku wali kelas?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tiga prinsip</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Lima prinsip</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tujuh prinsip</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali kelas selalu menggunakan metode ceramah yang sama setiap hari tanpa variasi apa pun, sehingga siswa mulai terlihat bosan. Berdasarkan Bab 3, prinsip apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip konsistensi, karena guru harus mempertahankan metode yang sama setiap hari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip bervariasi, karena kejenuhan adalah musuh utama pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip penanaman disiplin diri, karena kebosanan menandakan kurangnya disiplin</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Di kelas Bu Sari, beberapa siswa yang dekat dengannya sering dibiarkan melanggar aturan tanpa konsekuensi, sementara siswa lain ditegur tegas. Berdasarkan Bab 3, prinsip apa yang dilanggar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip konsistensi, karena aturan tidak ditegakkan secara adil kepada semua siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip penekanan pada hal-hal positif, karena Bu Sari terlalu banyak memberi pujian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip keluesan, karena Bu Sari terlalu fleksibel menyesuaikan pendekatan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah kelas baru ingin membangun budaya kelas yang kuat, namun wali kelasnya menyusun seluruh aturan sendiri tanpa melibatkan siswa sama sekali. Berdasarkan Bab 3, apa yang sebaiknya diperbaiki?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki, karena wali kelas adalah pihak yang paling berwenang menentukan aturan kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melibatkan siswa dalam menyusun aturan bersama dan membuat "kontrak kelas", agar tumbuh rasa tanggung jawab kolektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh aturan kelas karena dianggap membatasi kebebasan siswa</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 4, dalam konsep "kelas sebagai keluarga kecil", wali kelas berperan layaknya siapa?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Wasit pertandingan yang hanya menegakkan aturan secara ketat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepala keluarga kecil atau figur emosional bagi seluruh siswa di kelasnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengawas ujian yang bertugas memastikan ketertiban semata</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah kelas memiliki struktur organisasi lengkap, tetapi hanya segelintir siswa yang aktif terlibat, sementara siswa lain merasa perannya tidak penting. Berdasarkan Bab 4, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mempertahankan struktur yang ada tanpa perubahan karena sudah sesuai prosedur</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membubarkan struktur organisasi kelas sepenuhnya karena dianggap tidak efektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menumbuhkan kepemimpinan kolaboratif dengan rotasi tanggung jawab secara berkala, agar semua siswa mendapat kesempatan berperan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang siswa pindahan baru terlihat menyendiri, jarang berbicara, dan belum berbaur dengan teman-teman sekelasnya. Berdasarkan Bab 4, langkah paling tepat yang bisa dilakukan wali kelas adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan dukungan emosional lewat program "teman pendamping" serta pemantauan khusus terhadap perasaan dan pergaulannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini berjalan alami agar siswa belajar beradaptasi sendiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengusulkan agar siswa tersebut dipindahkan ke kelas lain yang dianggap lebih cocok</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebagian siswa di suatu kelas terlihat enggan berpartisipasi dalam diskusi dan cenderung menarik diri dari kelompok. Berdasarkan Bab 4, kondisi ini paling mungkin menandakan bahwa...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa tersebut memang secara alami tidak cocok belajar di lingkungan kelas manapun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa belum merasa aman secara emosional di kelasnya, sehingga perlu dibangun suasana yang lebih hangat dan inklusif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru mata pelajaran yang harus sepenuhnya bertanggung jawab menangani hal ini, bukan wali kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 5, 100 hari pertama dalam rencana aksi wali kelas dibagi menjadi berapa fase?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dua fase: persiapan dan pelaksanaan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tiga fase: fase awal, fase tengah, dan fase akhir</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Lima fase yang masing-masing berlangsung 20 hari</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali kelas menetapkan target yang sangat ambisius, mencakup lebih dari sepuluh program berbeda sejak minggu pertama tahun ajaran. Berdasarkan Bab 5, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena semakin banyak program yang dijalankan akan semakin baik hasilnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berisiko tidak terlaksana dengan baik, karena kunci keberhasilan bukan pada banyaknya program, melainkan ketepatan dan keberlangsungan pelaksanaannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko selama rencana tersebut ditulis rapi dalam sebuah dokumen</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Memasuki hari ke-80, seorang wali kelas menyadari bahwa sebagian aturan kelas yang disepakati di awal ternyata tidak berjalan efektif, dan sejumlah siswa mulai menyampaikan keluhan lewat kotak aspirasi. Berdasarkan Bab 5, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan keluhan tersebut karena aturan sudah disepakati di awal dan tidak boleh diubah sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menegur siswa yang menyampaikan keluhan karena dianggap tidak menghargai kesepakatan awal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerima masukan tersebut secara terbuka dan melakukan penyesuaian strategis, seperti menyusun ulang aturan yang belum efektif</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Setelah membaca keseluruhan buku ini, seorang wali kelas baru ingin memulai perannya dengan langkah paling mendasar sebelum memikirkan program atau teknologi yang canggih. Berdasarkan keseluruhan isi buku, fondasi apa yang paling perlu dipastikan lebih dulu?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun asesmen 20 soal terlebih dahulu sebelum memulai kegiatan apa pun di kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi pemantauan kelas paling canggih yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keteladanan yang konsisten sejak hari pertama, dijalankan bersama pemahaman tugas resmi yang jelas dan kesediaan untuk terus mengevaluasi diri</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
