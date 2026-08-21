/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Solusi Kesulitan Belajar dan Stres pada Siswa"
   File ini HANYA berisi data (HTML string per halaman), dimuat oleh engine.js
   lewat window.BOOK_CONTENT lalu disuntikkan ke #page-<key> saat aplikasi dibuka.

   Setelah mengedit file ini di GitHub, jangan lupa purge cache jsDelivr:
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-kesulitan-belajar-stres-siswa.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Kesulitan Belajar pada Siswa</h2>
<p class="lede reveal">Sebelum bicara soal solusi, penting bagi guru dan orang tua untuk terlebih dahulu mengenali wajah asli dari kesulitan belajar itu sendiri — jenis-jenisnya yang beragam serta akar penyebab di baliknya — supaya bantuan yang diberikan benar-benar tepat sasaran, bukan sekadar menyalahkan anak.</p>

<div class="card reveal">
  <h4>A. Jenis-Jenis Kesulitan Belajar</h4>
  <p>Kesulitan belajar adalah hambatan yang dialami siswa dalam memahami, mengolah, atau menyampaikan informasi sesuai usia dan jenjang pendidikannya — bukan tanda bahwa anak tidak cerdas, melainkan indikasi bahwa cara otaknya memproses informasi berbeda dari kebanyakan anak lain. Salah satu bentuk paling umum adalah kesulitan membaca, yang bisa muncul sebagai disleksia (anak sulit mengenali huruf, menggabungkannya menjadi kata, serta membaca dengan akurat dan lancar — misalnya sering membalik huruf "b" menjadi "d" atau "p" menjadi "q") maupun sebagai kesulitan pemahaman bacaan, di mana anak sebenarnya bisa membaca teks secara teknis namun tidak menangkap makna atau pesan utamanya.</p>
  <p>Bentuk lain adalah kesulitan menulis, yang terbagi menjadi disgrafia (hambatan mengontrol gerakan tangan saat menulis, sehingga tulisan berantakan dan sulit dibaca, meski anak sebenarnya memahami pelajaran dengan baik) dan kesulitan menyusun struktur kalimat (anak bisa menulis huruf dengan rapi, tetapi kesulitan merangkai kalimat yang lengkap dan logis). Ada pula kesulitan matematika, mencakup diskalkulia (anak harus menghitung ulang dari awal bahkan untuk soal sederhana, dan mudah frustrasi karena hasilnya tetap sering keliru) maupun kesulitan memahami konsep dasar matematika seperti angka, urutan, atau perbandingan besar-kecil, yang lebih berkaitan dengan cara belajar dan cara mengajar yang belum sesuai ketimbang gangguan neurologis.</p>
  <p>Terakhir, ada kelompok slow learner atau pembelajar lambat — anak dengan kemampuan kognitif sedikit di bawah rata-rata, umumnya dengan skor IQ berkisar 70 hingga 80. Mereka bukan anak dengan disabilitas intelektual, tetapi juga belum masuk kategori kemampuan normal, sehingga sering "tidak terlihat" sebagai anak berkebutuhan khusus namun tetap membutuhkan waktu lebih lama untuk memahami materi, penjelasan yang lebih sederhana dan berulang, serta rentan cepat lupa bila materi tidak sering diulang. Keempat jenis kesulitan belajar ini penting dikenali sejak dini, sebab tanpa penanganan yang tepat, semuanya berpotensi menggerus kepercayaan diri anak jauh sebelum memengaruhi nilai rapornya.</p>

  <h4>B. Penyebab Kesulitan Belajar</h4>
  <p>Penyebab kesulitan belajar jarang berdiri sendiri — biasanya beberapa faktor saling berkelindan. Faktor kognitif berkaitan dengan cara kerja otak dalam memproses informasi, mencakup gangguan pemrosesan informasi (misalnya kesulitan menghubungkan huruf dengan bunyi pada disleksia), keterbatasan memori kerja (siswa memahami penjelasan guru tapi kesulitan mengingatnya saat mengerjakan soal), hingga masalah perhatian seperti pada anak dengan ADHD yang sulit duduk diam dan fokus dalam waktu lama. Faktor genetik juga berperan — sebagian gangguan belajar seperti disleksia atau diskalkulia memang cenderung diturunkan dalam keluarga, dan kemampuan intelektual (IQ) turut dipengaruhi faktor bawaan, meski IQ bukan satu-satunya penentu keberhasilan belajar seorang anak.</p>
  <p>Faktor lingkungan sama pentingnya: rumah yang penuh konflik, kebisingan, atau tidak stabil secara ekonomi bisa mengganggu konsentrasi anak, sementara dukungan emosional dari keluarga justru menjadi penyemangat besar; begitu pula di sekolah, metode pengajaran yang monoton atau guru yang kurang sabar bisa memperparah kesulitan yang sebenarnya bisa dicegah. Terakhir, kesesuaian metode pengajaran dan materi pelajaran juga menentukan — setiap anak punya gaya belajar berbeda (visual, auditori, atau kinestetik), dan ketika guru hanya mengandalkan satu pendekatan seperti ceramah semata, siswa dengan gaya belajar lain akan kesulitan mengikuti, apalagi jika materinya terlalu abstrak atau tidak sesuai tahap perkembangan mereka. Memahami keempat sumber penyebab ini adalah langkah awal agar bantuan yang diberikan benar-benar menyasar akar masalah, bukan sekadar gejalanya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat jenis kesulitan belajar (membaca, menulis, matematika, slow learner) yang dibahas di bab ini, jenis mana yang paling sering Anda temui pada siswa/anak yang Anda dampingi — dan sejauh ini, pendekatan apa yang sudah dan belum Anda coba?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, anak dengan slow learner (pembelajar lambat) umumnya memiliki skor IQ berkisar antara...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">70 sampai 80</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">50 sampai 60</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">90 sampai 100</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa bisa membaca teks dengan lancar tanpa terbata-bata, namun saat ditanya isi bacaannya, ia tidak bisa menjelaskan apa pun. Berdasarkan bab ini, kondisi ini paling tepat digolongkan sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kesulitan pemahaman bacaan, karena masalahnya bukan pada kemampuan teknis membaca melainkan pada menangkap makna teks</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Disleksia, karena semua kesulitan membaca pasti berarti disleksia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Diskalkulia, karena anak tidak memahami angka dalam bacaan</button>
  </div>
  <div class="quiz-q">
    <p>Bu Rini mengajar dengan metode ceramah panjang setiap hari tanpa variasi gambar, diskusi, atau praktik langsung. Salah satu siswanya, Dimas, selalu tampak bingung dan tertinggal meski sebenarnya cukup cerdas saat belajar lewat video atau alat peraga. Berdasarkan Bab 1, akar masalah yang paling mungkin dialami Dimas adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Ketidaksesuaian antara metode pengajaran guru dengan gaya belajar Dimas, bukan rendahnya kemampuan Dimas itu sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dimas pasti mengalami disleksia yang belum terdiagnosis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dimas kurang cerdas secara genetik sehingga tidak mampu mengikuti pelajaran apa pun</button>
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
<h2 class="reveal">Stres pada Siswa</h2>
<p class="lede reveal">Setelah memahami kesulitan belajar, kita perlu melihat sisi lain yang sering menyertainya dan justru memperparahnya: stres — kondisi yang bisa datang dari sekolah, rumah, maupun dari dalam diri siswa sendiri, dan yang bila dibiarkan bisa meninggalkan jejak jauh melampaui masa sekolah.</p>

<div class="card reveal">
  <h4>A. Sumber Stres pada Siswa</h4>
  <p>Stres adalah kondisi tekanan emosional atau mental yang muncul ketika tuntutan yang dihadapi seseorang melebihi kapasitas dirinya untuk mengatasinya. Salah satu sumber stres terbesar bagi siswa adalah tekanan akademik dan ekspektasi yang terlalu tinggi — tuntutan untuk selalu meraih nilai terbaik, kurikulum yang padat, tugas yang menumpuk, ditambah kalimat-kalimat seperti "Kamu harus juara!" yang meski dimaksudkan memotivasi, justru bisa membuat anak merasa tidak pernah cukup baik dan mengikis rasa percaya dirinya pelan-pelan.</p>
  <p>Sumber stres lain datang dari masalah pribadi dan kondisi keluarga — rumah yang dipenuhi pertengkaran, perceraian orang tua, tekanan ekonomi, hingga beban tersembunyi seperti harus membantu pekerjaan rumah tangga karena orang tua sibuk bekerja, semuanya bisa membuat anak datang ke sekolah dalam kondisi lelah secara emosional. Terlalu banyak kegiatan tambahan seperti les dan lomba tanpa keseimbangan istirahat juga bisa berujung pada burnout. Terakhir, masalah sosial seperti bullying atau tekanan dari teman sebaya menjadi sumber stres yang tak kalah kuat — siswa yang menjadi korban perundungan mengalami tekanan mental berat yang, bila tidak segera dikenali, bisa memengaruhi bagaimana ia memandang sekolah dan dirinya sendiri.</p>

  <h4>B. Tanda-Tanda dan Gejala Stres</h4>
  <p>Stres pada siswa tidak selalu tampak sebagai keluhan verbal — lebih sering ia muncul lewat perubahan fisik dan perilaku yang perlu dibaca dengan jeli. Secara fisik, tanda yang perlu diwaspadai antara lain kelelahan yang tidak wajar meski sudah cukup istirahat, serta perubahan dalam penampilan dan perawatan diri, seperti anak yang tiba-tiba tampak kurang rapi atau kehilangan semangat merawat dirinya sendiri.</p>
  <p>Secara emosional, gejala stres bisa berupa kecemasan berlebihan terhadap tugas, ujian, atau masa depan; perasaan sedih atau hampa yang membuat anak kehilangan minat pada hal-hal yang biasa disukainya; perubahan suasana hati yang ekstrem dari ceria menjadi marah tanpa sebab jelas; perasaan tidak berharga atau rasa bersalah yang berlebihan; hingga kecenderungan menarik diri dari orang tua atau guru karena merasa tidak dimengerti atau takut dihakimi. Mengenali tanda-tanda ini sejak dini penting agar guru dan orang tua bisa segera memberikan dukungan yang tepat.</p>

  <h4>C. Dampak Jangka Panjang Stres pada Siswa</h4>
  <p>Bila dibiarkan berlarut, stres bukan hanya memengaruhi keseharian siswa saat ini, tetapi bisa meninggalkan bekas hingga dewasa. Dampak yang paling langsung terlihat adalah penurunan prestasi akademik yang berkepanjangan akibat konsentrasi dan motivasi yang terus menurun, disertai masalah kesehatan fisik seperti sakit kepala, gangguan pencernaan, atau maag akibat sistem kekebalan tubuh yang melemah oleh tekanan terus-menerus.</p>
  <p>Yang lebih mengkhawatirkan, stres jangka panjang berisiko berkembang menjadi gangguan kesehatan mental seperti kecemasan berlebihan atau depresi, kesulitan menjalin hubungan sosial karena anak menjadi tertutup dan sulit percaya pada orang lain, bahkan perilaku negatif seperti membolos sebagai bentuk pelarian. Semua ini pada akhirnya bermuara pada rendahnya kepercayaan diri dan ketahanan mental serta terhambatnya perkembangan pribadi anak. Karena itulah, kepekaan guru dan orang tua terhadap tanda-tanda stres sejak dini menjadi kunci mencegah dampak yang jauh lebih besar ini.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga sumber stres (akademik, keluarga, sosial) yang dibahas di bab ini, sumber mana yang paling sering Anda amati pada siswa/anak di lingkungan Anda — dan tanda-tanda apa yang biasanya muncul lebih dulu sebelum kondisinya memburuk?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, tanda fisik stres yang bisa muncul meski siswa sudah cukup tidur dan tidak banyak beraktivitas disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kelelahan yang tidak wajar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Peningkatan nafsu makan drastis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Peningkatan konsentrasi belajar</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa terlihat ceria dan aktif di kelas pagi hari, namun siang harinya tiba-tiba marah besar tanpa alasan yang jelas kepada temannya. Berdasarkan Bab 2, perilaku ini paling mungkin merupakan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Gejala emosional stres berupa perubahan suasana hati yang ekstrem, bukan sekadar perubahan mood biasa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tanda bahwa siswa tersebut memang berwatak pemarah sejak lahir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hal normal yang tidak perlu diperhatikan guru atau orang tua</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa kelas 8 mulai sering mengeluh sakit kepala tanpa sebab medis, nilai-nilainya menurun perlahan selama tiga bulan terakhir, dan ia mulai menghindari ngobrol dengan orang tuanya. Berdasarkan Bab 2, kombinasi tanda ini paling tepat dibaca sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kemungkinan dampak jangka panjang dari stres yang belum tertangani, sehingga perlu penanganan segera, bukan sekadar ditunggu membaik sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Gejala flu biasa yang akan hilang tanpa perlu perhatian khusus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tanda bahwa siswa tersebut malas belajar dan perlu dihukum agar disiplin</button>
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
<h2 class="reveal">Ketidaksesuaian Harapan Orang Tua dan Realita Anak</h2>
<p class="lede reveal">Tidak sedikit tekanan yang dialami anak sesungguhnya berasal dari jarak antara harapan orang tua dan kemampuan nyata anak itu sendiri — sebuah kesenjangan yang, jika tidak disadari, justru bisa menjadi sumber stres yang paling sulit dikenali karena datang dari niat baik.</p>

<div class="card reveal">
  <h4>A. Harapan Orang Tua Lebih Tinggi dari Kemampuan dan Kesadaran Anak</h4>
  <p>Orang tua kerap menaruh harapan tinggi terhadap anak — nilai sempurna, beasiswa, prestasi akademik gemilang — namun harapan ini tidak selalu berpijak pada kemampuan sebenarnya anak, melainkan pada standar pribadi, pengalaman masa lalu orang tua, atau perbandingan dengan anak-anak lain di sekitar mereka. Padahal setiap anak memiliki kemampuan belajar, minat, dan bakat yang berbeda-beda — seorang anak yang lebih tertarik pada seni, misalnya, tidak serta-merta bisa dipaksa unggul di bidang sains hanya karena itu yang diharapkan orang tuanya.</p>
  <p>Ketika harapan disampaikan dengan cara yang mendukung, ia bisa menjadi motivasi positif; namun jika terlalu tinggi atau tidak realistis, dampaknya justru sebaliknya — anak merasa tidak pernah cukup baik meski sudah berusaha maksimal, kehilangan minat belajar, dan mengalami kecemasan yang bisa mengganggu tidur serta keseimbangan hidupnya. Tekanan semacam ini, jika terus berlangsung, berpotensi berkembang menjadi stres berat yang mengganggu hubungan sosial dan aktivitas sehari-hari anak, jauh melampaui sekadar nilai rapor yang tidak sesuai harapan.</p>

  <h4>B. Penerapan Standar Berdasarkan Kemampuan Orang Tua</h4>
  <p>Standar yang diterapkan orang tua pada anak sering kali dipengaruhi oleh kemampuan dan latar belakang pendidikan orang tua itu sendiri. Orang tua dengan latar belakang akademik kuat cenderung mengukur kesuksesan anak berdasarkan pengalaman mereka sendiri di bangku sekolah, dan berharap anak mengikuti jejak yang sama — tanpa mempertimbangkan bahwa kemampuan kognitif dan minat anak bisa sangat berbeda dari orang tuanya.</p>
  <p>Ketika standar ini tidak realistis, anak bisa merasa tertekan untuk memenuhinya, yang pada gilirannya menurunkan motivasi dan rasa percaya diri — bahkan bisa memicu kecemasan hingga gejala depresi bila berlangsung lama. Fokus berlebihan pada standar akademik semacam ini juga berisiko mengabaikan keseimbangan hidup anak, membuatnya kehilangan waktu dan energi untuk mengejar minat pribadi. Di sinilah pentingnya orang tua menyadari bahwa standar yang sehat semestinya disesuaikan dengan kapasitas unik anak, bukan cermin dari pencapaian orang tua sendiri.</p>

  <h4>C. Sekolah Sebagai Tumpuan Utama dan Mengabaikan Peran Orang Tua</h4>
  <p>Di sisi lain, ada pula kekeliruan yang berjalan berlawanan arah: menganggap sekolah sebagai satu-satunya pihak yang bertanggung jawab atas pembelajaran anak, sementara peran orang tua di rumah dianggap kurang penting. Padahal orang tua memiliki peran krusial yang tidak tergantikan — membantu anak memahami pekerjaan rumah, memberikan umpan balik yang konsisten tentang kemajuan belajarnya, serta mengidentifikasi area yang perlu diperbaiki jauh lebih awal daripada yang bisa dilakukan guru semata di kelas yang penuh siswa.</p>
  <p>Umpan balik dan keterlibatan orang tua yang konsisten membantu anak memahami perkembangan dirinya sendiri secara lebih utuh, sekaligus menunjukkan pada anak bahwa keberhasilan belajarnya adalah perhatian bersama, bukan tanggung jawab sekolah semata. Kolaborasi dua arah antara sekolah dan keluarga — bukan saling melempar tanggung jawab — adalah fondasi yang memungkinkan anak mendapatkan dukungan yang utuh dan konsisten, baik di ruang kelas maupun di rumah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pola yang dibahas di bab ini — harapan lebih tinggi dari kemampuan anak, standar berdasarkan kemampuan orang tua sendiri, dan mengandalkan sekolah saja — pola mana yang paling Anda kenali dalam pola asuh atau pengajaran Anda sendiri, dan langkah kecil apa yang bisa mulai diubah?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, harapan orang tua terhadap anak sering kali dipengaruhi oleh apa saja selain kemampuan nyata anak?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Standar pribadi orang tua, pengalaman masa lalu mereka, dan perbandingan dengan anak-anak lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya oleh hasil tes IQ resmi anak yang dilakukan psikolog</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya oleh kurikulum yang ditetapkan pemerintah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ayah yang dulu meraih gelar sarjana teknik dengan mudah, terus menuntut anaknya mengejar nilai matematika sempurna, padahal anaknya lebih menonjol dan bersemangat di bidang seni rupa. Berdasarkan Bab 3, akar persoalan dalam situasi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penerapan standar berdasarkan kemampuan dan pengalaman orang tua sendiri, tanpa mempertimbangkan minat dan kekuatan unik anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak tersebut memang malas dan tidak mau berusaha di bidang matematika</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru matematika di sekolah anak tersebut yang sepenuhnya bertanggung jawab atas nilai yang kurang memuaskan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah keluarga menyerahkan sepenuhnya urusan belajar anak kepada sekolah — tidak pernah menanyakan tugas rumah, tidak hadir di pertemuan orang tua, dan menganggap nilai anak murni tanggung jawab guru. Berdasarkan Bab 3, dampak paling mungkin dari pola ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Anak kehilangan salah satu sumber dukungan dan umpan balik penting di rumah, sehingga proses belajarnya menjadi kurang utuh dibanding jika orang tua turut terlibat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena sekolah memang seharusnya menanggung semua urusan belajar anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak akan otomatis menjadi lebih mandiri dan berprestasi tanpa keterlibatan orang tua</button>
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
<h2 class="reveal">Identifikasi dan Penilaian</h2>
<p class="lede reveal">Sebelum strategi apa pun bisa diterapkan secara tepat, guru, orang tua, dan pembimbing perlu terlebih dahulu mengenali dengan akurat apa yang sesungguhnya dialami seorang anak — sebab bantuan yang salah sasaran justru bisa memperpanjang kesulitan yang ada.</p>

<div class="card reveal">
  <h4>A. Cara Mengidentifikasi Kesulitan Belajar & Stres</h4>
  <p>Identifikasi yang tepat dimulai dari pengamatan sehari-hari yang cermat. Observasi langsung di kelas memungkinkan guru memperhatikan bagaimana siswa berinteraksi dengan materi, menyelesaikan tugas, dan mengikuti aktivitas kelas — mencatat pola seperti kesulitan yang konsisten muncul pada mata pelajaran tertentu bisa memberi petunjuk penting tentang penyebabnya. Ini bisa dilengkapi dengan wawancara langsung kepada siswa lewat pertanyaan terbuka seperti "Apa bagian yang paling sulit bagi kamu saat belajar?", serta wawancara dengan orang tua dan guru lain untuk mendapatkan gambaran yang lebih lengkap tentang perilaku anak, baik di rumah maupun di kelas-kelas lain.</p>
  <p>Selain observasi dan wawancara, ada pula instrumen yang lebih terstruktur: tes diagnostik akademik untuk menilai apakah kesulitan belajar berkaitan dengan kemampuan kognitif atau faktor lain; alat penilaian psikologis berupa kuesioner atau skala stres untuk mengukur kesejahteraan emosional siswa; serta alat penilaian perilaku seperti catatan observasi atau rubrik yang memantau bagaimana siswa berinteraksi dan menangani konflik. Kombinasi metode-metode ini memberi gambaran yang jauh lebih akurat dibanding mengandalkan satu sumber informasi saja.</p>

  <h4>B. Evaluasi Komprehensif</h4>
  <p>Setelah tanda-tanda awal teridentifikasi, langkah berikutnya adalah evaluasi komprehensif yang melibatkan kolaborasi berbagai pihak. Psikolog pendidikan berperan melakukan penilaian mendalam lewat tes psikologis untuk mengidentifikasi masalah kognitif dan emosional, sekaligus memberikan diagnosis dan rekomendasi intervensi yang sesuai. Di sisi lain, konselor sekolah memberikan dukungan emosional langsung kepada siswa, mengajarkan teknik manajemen stres dan keterampilan sosial, serta bekerja sama dengan guru dan psikolog pendidikan untuk menyusun rencana intervensi yang menyeluruh.</p>
  <p>Orang tua juga memegang peran kunci dalam evaluasi ini — mereka bisa memberikan informasi tentang perilaku anak yang mungkin tidak terlihat di sekolah, dan perlu dilibatkan secara aktif dalam menyusun serta memantau rencana tindakan agar strategi yang diterapkan benar-benar sesuai dengan kondisi anak di rumah. Sekolah pun sebaiknya menyediakan pelatihan dan dukungan berkelanjutan bagi orang tua, membekali mereka dengan keterampilan mendampingi anak secara efektif, sekaligus memastikan orang tua tidak merasa berjuang sendirian dalam prosesnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari berbagai metode identifikasi (observasi, wawancara, tes diagnostik, alat penilaian psikologis) yang dibahas di bab ini, metode mana yang sudah rutin dilakukan di lingkungan Anda, dan metode mana yang mungkin masih terlewat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, siapa yang berperan melakukan penilaian mendalam lewat tes psikologis untuk mengidentifikasi masalah kognitif dan emosional pada siswa?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Psikolog pendidikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kepala sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Wali kelas semata tanpa pelatihan khusus</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru hanya mengandalkan nilai ujian untuk menilai apakah seorang siswa mengalami kesulitan belajar, tanpa pernah mengamati perilaku siswa di kelas atau berbicara langsung dengannya. Berdasarkan Bab 4, kelemahan pendekatan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Identifikasi menjadi tidak lengkap karena mengabaikan observasi langsung dan wawancara yang bisa mengungkap penyebab yang tidak tampak dari nilai semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada kelemahan, karena nilai ujian adalah satu-satunya indikator yang valid untuk kesulitan belajar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru seharusnya hanya mengandalkan pendapat orang tua tanpa perlu data akademik sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa menunjukkan nilai yang menurun dan tampak murung, namun sekolah hanya merujuknya ke psikolog pendidikan tanpa pernah melibatkan orang tuanya dalam proses evaluasi maupun rencana tindak lanjut. Berdasarkan Bab 4, apa yang kurang dari proses evaluasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Keterlibatan orang tua yang seharusnya dilibatkan aktif, baik dalam memberi informasi tambahan maupun dalam menyusun dan memantau rencana tindakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena psikolog pendidikan sudah cukup menangani semuanya sendirian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya tidak melibatkan psikolog pendidikan sama sekali dan cukup mengandalkan guru kelas</button>
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
<h2 class="reveal">Strategi Mengatasi Kesulitan Belajar</h2>
<p class="lede reveal">Setelah kesulitan belajar teridentifikasi, tantangan berikutnya adalah menerjemahkan pemahaman itu menjadi strategi pengajaran yang benar-benar bekerja di kelas — disesuaikan dengan gaya belajar, kecepatan, dan kebutuhan masing-masing siswa.</p>

<div class="card reveal">
  <h4>A. Pendekatan Pengajaran</h4>
  <p>Mengatasi kesulitan belajar bukan soal memberi tugas tambahan atau menegur siswa yang lambat memahami pelajaran, melainkan menyesuaikan cara mengajar dengan gaya belajar siswa yang beragam. Siswa visual lebih mudah memahami lewat gambar, diagram, dan peta konsep; siswa auditori lebih terbantu dengan penjelasan lisan, diskusi kelompok, dan membaca dengan suara keras; sementara siswa kinestetik membutuhkan aktivitas fisik langsung seperti eksperimen, permainan edukatif, atau simulasi peran untuk benar-benar memahami materi. Teknologi pendidikan dan multimedia juga bisa menjadi jembatan tambahan yang menjangkau berbagai gaya belajar sekaligus.</p>
  <p>Di luar penyesuaian gaya belajar, pendekatan differentiated instruction atau instruksi yang dibedakan menjadi kunci penting: menyediakan variasi tingkat kesulitan materi, memberi pilihan bentuk tugas, menyediakan sumber daya tambahan bagi siswa yang membutuhkan, hingga membuka ruang pembelajaran individual maupun kelompok kecil bagi siswa dengan kesulitan serupa. Dengan pendekatan yang fleksibel semacam ini, siswa tidak lagi dipaksa mengikuti satu cara belajar yang sama, melainkan diberi jalan yang sesuai dengan cara otak mereka bekerja paling baik.</p>

  <h4>B. Teknik Peningkatan Keterampilan Akademis</h4>
  <p>Kesulitan belajar sering kali berakar dari belum kuatnya keterampilan dasar membaca, menulis, atau berhitung, sehingga latihan yang terarah menjadi penting. Untuk membaca, teknik membaca berulang (repeated reading) — membaca teks pendek yang sama beberapa kali secara mandiri selama 10-15 menit setiap hari — terbukti efektif meningkatkan kelancaran dan rasa percaya diri siswa, karena mereka menjadi semakin akrab dengan kosakata dan struktur kalimat yang dihadapi.</p>
  <p>Untuk keterampilan lain, alat peraga dan manipulatif seperti blok warna untuk pecahan atau model jam untuk belajar waktu membantu menjelaskan konsep abstrak secara konkret dan visual, sementara teknologi pendidikan berupa aplikasi interaktif memberi pengalaman belajar yang lebih menarik dan bisa dipersonalisasi sesuai kebutuhan masing-masing siswa. Kuncinya adalah konsistensi dan pengulangan yang menyenangkan, bukan tekanan atau hukuman ketika siswa belum juga menguasai suatu keterampilan.</p>

  <h4>C. Strategi Pengajaran untuk Slow Learner (Pembelajar Lambat)</h4>
  <p>Mengajar siswa slow learner menuntut kesabaran dan pendekatan yang berbeda — bukan karena mereka tidak bisa belajar, tetapi karena mereka butuh waktu dan cara yang lebih personal. Guru perlu mengakui kebutuhan khusus ini tanpa membandingkannya dengan teman sekelas, melakukan penilaian awal untuk memahami kekuatan dan gaya belajar yang paling cocok, serta membangun rutinitas belajar yang konsisten disertai umpan balik yang positif dan membangun, bukan kritik yang menjatuhkan. Komunikasi pun perlu disederhanakan — menggunakan bahasa yang jelas dan langsung, serta mengulang informasi penting lewat cara yang berbeda-beda seperti gambar, cerita, atau gerakan.</p>
  <p>Metode pembelajaran yang sederhana dan berulang — latihan teratur, penilaian formatif berkala lewat kuis ringan, serta pendekatan multisensori yang melibatkan visual, auditori, dan kinestetik sekaligus — membantu materi lebih melekat pada ingatan siswa slow learner. Ditambah dengan pendampingan ekstra, baik lewat sesi individu di luar jam pelajaran maupun kelompok belajar kecil berisi siswa dengan kecepatan belajar serupa, siswa slow learner bisa merasa lebih nyaman dan tidak malu karena "tertinggal", sekaligus tetap mendapat kesempatan berkembang sesuai kapasitasnya sendiri.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga gaya belajar (visual, auditori, kinestetik) yang dibahas di bab ini, gaya mana yang paling jarang Anda akomodasi dalam cara mengajar atau mendampingi belajar anak selama ini — dan langkah kecil apa yang bisa mulai dicoba?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, teknik membaca berulang (repeated reading) dilakukan dengan cara...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Meminta siswa membaca teks pendek yang sama beberapa kali secara mandiri secara rutin</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta siswa membaca satu kali saja lalu langsung diuji tanpa pengulangan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang siswa membaca teks yang sama lebih dari sekali agar tidak bosan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu mengajar dengan ceramah panjang tanpa gambar, video, atau aktivitas fisik apa pun, dan menganggap semua siswa seharusnya bisa memahami dengan cara yang sama. Berdasarkan Bab 5, apa yang paling perlu diperbaiki dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru perlu menyesuaikan metode pengajaran dengan gaya belajar siswa yang beragam (visual, auditori, kinestetik), bukan menyamaratakan semua siswa dengan satu metode</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena ceramah adalah satu-satunya metode yang efektif untuk semua siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru seharusnya menghentikan pengajaran sepenuhnya dan menyerahkan semua materi lewat aplikasi</button>
  </div>
  <div class="quiz-q">
    <p>Rangga, siswa dengan kemampuan kognitif sedikit di bawah rata-rata, sering tertinggal saat kelas bergerak cepat ke materi baru sebelum ia benar-benar memahami materi sebelumnya. Berdasarkan Bab 5, strategi paling tepat untuk mendukung Rangga adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberi penjelasan yang lebih sederhana dan berulang, membangun rutinitas belajar yang konsisten, serta menyediakan pendampingan ekstra lewat sesi individu atau kelompok kecil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memindahkan Rangga ke kelas dengan materi yang jauh lebih sulit agar ia terpacu untuk mengejar ketertinggalan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan Rangga belajar sendiri tanpa pendampingan tambahan karena setiap anak harus mandiri sejak awal</button>
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
<h2 class="reveal">Mengatasi Stres pada Siswa: Penerimaan Orang Tua</h2>
<p class="lede reveal">Rumah adalah tempat pertama anak belajar apakah dirinya diterima apa adanya atau harus terus membuktikan diri — dan cara orang tua merespons kesulitan anak sangat menentukan apakah stres yang dialaminya mereda atau justru bertambah berat.</p>

<div class="card reveal">
  <h4>A. Pendekatan Orang Tua dalam Mendukung Anak</h4>
  <p>Salah satu langkah paling mendasar adalah tidak menekan anak saat belajar karena ketidakmampuannya — memaksa anak menyelesaikan tugas dengan cepat atau menuntut standar yang tidak realistis justru memperburuk stres dan menurunkan kepercayaan dirinya. Sebagai gantinya, orang tua perlu memahami tantangan yang dihadapi anak dan membantu mereka mengatasinya dengan cara yang positif. Ini perlu dibarengi dengan dukungan yang konstruktif — memberi pujian atas usaha, bukan hanya hasil akhir, serta memberikan umpan balik yang membangun alih-alih kritik yang melemahkan semangat anak.</p>
  <p>Konsistensi juga menjadi kunci: membuat jadwal belajar yang teratur dan tetap terlibat dalam kegiatan belajar anak, bukan hanya hadir saat anak mengalami kesulitan tetapi juga saat mereka membuat kemajuan kecil sekalipun. Terakhir, orang tua perlu menahan diri untuk tidak membandingkan kemampuan anak dengan anak lain, sebab perbandingan semacam ini justru menurunkan kepercayaan diri dan menambah beban stres — setiap anak memiliki kecepatan dan gaya belajarnya sendiri, dan penghargaan seharusnya diberikan berdasarkan pencapaian serta usaha anak itu sendiri.</p>

  <h4>B. Teknik Manajemen Stres di Rumah</h4>
  <p>Orang tua bisa membantu anak mengelola stres lewat latihan relaksasi dan pernapasan sederhana — mengajak anak duduk tenang, menutup mata, dan fokus pada napas, atau melatih teknik "napas dalam-dalam" di mana anak menarik napas perlahan lewat hidung, menahannya sebentar, lalu mengeluarkannya perlahan lewat mulut. Latihan singkat ini bisa dilakukan sebelum tidur, setelah menyelesaikan tugas sekolah, atau kapan pun anak merasa cemas.</p>
  <p>Selain relaksasi, membantu anak mengatur waktu dan rutinitas juga sangat membantu mengurangi stres — jadwal harian yang mencakup waktu belajar, bermain, dan istirahat yang cukup memberi anak rasa terstruktur dan tidak terburu-buru. Teknik manajemen waktu sederhana seperti Teknik Pomodoro (belajar fokus selama 25 menit lalu istirahat 5 menit) bisa membantu anak menjaga fokus sekaligus mencegah kelelahan akibat tugas yang menumpuk tanpa jeda.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat pendekatan orang tua (tidak menekan, dukungan konstruktif, konsisten, tidak membandingkan) yang dibahas di bab ini, mana yang menurut Anda paling sulit dijalankan secara konsisten dalam keseharian, dan mengapa?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, teknik "napas dalam-dalam" untuk membantu anak meredakan stres dilakukan dengan cara...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menarik napas perlahan lewat hidung, menahan sebentar, lalu mengeluarkannya perlahan lewat mulut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menahan napas selama mungkin tanpa bernapas sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Bernapas secepat-cepatnya berulang kali dalam waktu singkat</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ibu selalu berkata, "Lihat, kakakmu dulu bisa dapat nilai 90, kenapa kamu tidak bisa?" setiap kali anaknya kesulitan mengerjakan tugas. Berdasarkan Bab 6, dampak paling mungkin dari kebiasaan ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menurunkan kepercayaan diri anak dan menambah beban stres, karena perbandingan membuat anak merasa kurang berharga dibanding fokus pada pencapaian dan usahanya sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meningkatkan motivasi anak secara otomatis karena perbandingan selalu efektif memacu semangat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak berdampak apa pun karena anak-anak tidak memperhatikan komentar semacam itu</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ayah melihat anaknya kewalahan dengan tiga tugas sekolah sekaligus menjelang akhir pekan. Berdasarkan Bab 6, langkah paling tepat yang bisa diambil sang ayah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membantu anak menyusun jadwal dengan teknik seperti Pomodoro, memprioritaskan tugas, dan tetap mendampingi secara konsisten tanpa menambah tekanan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan anak menyelesaikan semuanya sendirian tanpa bantuan apa pun agar belajar mandiri sejak dini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah tekanan dengan mengatakan tugas-tugas itu seharusnya mudah dan anak hanya kurang berusaha</button>
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
<h2 class="reveal">Mengatasi Stres pada Siswa: Penerimaan Sekolah</h2>
<p class="lede reveal">Jika rumah adalah tempat pertama, sekolah adalah tempat kedua yang paling menentukan apakah siswa merasa diterima atau justru semakin tertekan — dan penerimaan ini perlu diwujudkan lewat pendekatan pengajaran maupun dukungan emosional yang nyata, bukan sekadar slogan.</p>

<div class="card reveal">
  <h4>A. Pendekatan Sekolah dalam Mendukung Siswa</h4>
  <p>Sama seperti di rumah, sekolah juga perlu menghindari menekan siswa karena ketidakmampuannya — menuntut standar yang terlalu tinggi tanpa mempertimbangkan kemampuan siswa hanya menambah stres dan menurunkan motivasi. Sekolah bisa merespons ini lewat penyesuaian kurikulum (mengurangi beban tugas atau memberi alternatif bentuk penilaian seperti proyek atau presentasi) dan pendekatan yang lebih berempati, memberi ruang bagi siswa belajar sesuai kecepatannya sendiri disertai dukungan tambahan bila diperlukan.</p>
  <p>Dukungan yang konstruktif juga penting diterapkan secara konsisten — umpan balik yang membangun dan menekankan kemajuan serta usaha siswa, ditambah bimbingan individual bagi mereka yang membutuhkan perhatian lebih. Program dukungan akademis dan emosional seperti kelas tambahan, tutor, atau konseling perlu tersedia secara konsisten dan terjadwal. Semua ini akan jauh lebih efektif bila sekolah juga menjalin komunikasi terbuka dengan orang tua tentang kemajuan dan kesulitan siswa, serta memberi saran konkret yang bisa diterapkan orang tua di rumah untuk melengkapi dukungan di sekolah.</p>

  <h4>B. Dukungan Emosional dan Psikologis di Sekolah</h4>
  <p>Di luar pendekatan pengajaran, sekolah perlu menyediakan layanan dukungan emosional yang lebih terstruktur, salah satunya lewat konseling individu dan kelompok. Konseling individu memberi ruang bagi siswa untuk berbicara secara pribadi dengan konselor atau psikolog tentang masalah yang mereka hadapi, baik terkait belajar maupun persoalan pribadi, dalam lingkungan yang aman dan tidak menghakimi — sementara konseling kelompok bisa membantu siswa dengan persoalan serupa, seperti kecemasan menjelang ujian atau konflik pertemanan, saling belajar dan merasa tidak sendirian.</p>
  <p>Layanan-layanan ini memberi siswa ruang aman untuk mengekspresikan diri, mengenali emosi mereka, dan menemukan solusi atas persoalan yang dihadapi — sebuah kebutuhan yang sering kali tidak terpenuhi hanya lewat interaksi belajar-mengajar biasa di kelas. Dengan menghadirkan dukungan emosional yang konsisten dan mudah diakses ini, sekolah menegaskan bahwa kesejahteraan siswa sama pentingnya dengan pencapaian akademiknya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari dua pendekatan sekolah (penyesuaian kurikulum & pendekatan pengajaran, serta dukungan emosional lewat konseling) yang dibahas di bab ini, mana yang menurut Anda paling lemah diterapkan di sekolah Anda saat ini, dan langkah apa yang bisa mulai diusulkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, salah satu bentuk penyesuaian kurikulum yang bisa dilakukan sekolah untuk siswa yang kesulitan mengikuti standar tinggi adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberi alternatif bentuk penilaian seperti proyek atau presentasi, atau mengurangi beban tugas yang tidak esensial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah ujian tertulis agar siswa semakin terbiasa dengan tekanan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh sistem penilaian tanpa pengganti apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menyediakan program konseling, tetapi jadwalnya tidak menentu dan sering dibatalkan mendadak, sehingga siswa ragu untuk mengandalkannya. Berdasarkan Bab 7, apa yang kurang dari penerapan program ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Konsistensi dan jadwal yang rutin, sehingga siswa tahu mereka bisa mengandalkan dukungan tersebut kapan pun mereka membutuhkannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena keberadaan program saja sudah cukup tanpa perlu konsistensi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Program konseling sebaiknya dihapus karena tidak akan pernah efektif di sekolah mana pun</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa mengalami kecemasan berat menjelang ujian akhir dan merasa tidak nyaman membicarakannya di depan banyak orang. Berdasarkan Bab 7, layanan yang paling sesuai untuk kondisi ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Konseling individu, karena memberi ruang pribadi dan aman bagi siswa untuk membicarakan kecemasannya secara langsung dengan konselor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa siswa tampil di depan kelas agar terbiasa dengan tekanan sebagai bentuk terapi kejut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan kecemasan tersebut karena dianggap wajar dan tidak perlu ditangani</button>
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
<h2 class="reveal">Pembelajaran yang Mampu Mereduksi Stres: Kunci Pengajaran Adaptif</h2>
<p class="lede reveal">Pengajaran yang adaptif — yang menyesuaikan diri dengan siswa, bukan menuntut siswa menyesuaikan diri dengannya — adalah salah satu cara paling efektif untuk mencegah stres sebelum ia sempat muncul, sekaligus menciptakan ruang kelas yang terasa aman bagi semua orang.</p>

<div class="card reveal">
  <h4>A. Pentingnya Menyesuaikan Gaya Mengajar dengan Gaya Belajar Siswa</h4>
  <p>Setiap siswa memiliki cara berbeda dalam menyerap informasi, dan tiga gaya belajar yang paling umum ditemui adalah visual, auditori, dan kinestetik. Siswa visual lebih mudah memahami lewat gambar, diagram, warna, dan video — mereka bisa kehilangan fokus dan merasa kebingungan bila hanya disuguhi penjelasan verbal panjang tanpa visualisasi apa pun. Siswa auditori sebaliknya lebih cepat menangkap materi lewat penjelasan lisan, diskusi, dan membaca bersuara, sehingga tidak lagi merasa tertekan oleh tulisan panjang atau grafik yang membingungkan bagi mereka.</p>
  <p>Sementara itu, siswa kinestetik belajar paling baik lewat gerakan, sentuhan, dan pengalaman langsung — mereka sering gelisah bila harus duduk diam terlalu lama, dan jauh lebih nyaman lewat eksperimen, permainan edukatif, atau pembelajaran berbasis proyek. Ketika guru mampu mengenali dan mengakomodasi ketiga gaya belajar ini secara bergantian dalam pengajarannya, pembelajaran menjadi lebih personal, siswa merasa lebih percaya diri, dan stres yang muncul akibat harus memaksakan diri belajar dengan cara yang tidak sesuai bisa ditekan sejak awal.</p>

  <h4>B. Menciptakan Lingkungan Belajar yang Aman dan Mendukung</h4>
  <p>Di luar penyesuaian gaya mengajar, lingkungan kelas secara keseluruhan turut menentukan tingkat stres siswa. Hubungan yang hangat dan akrab antara guru dan siswa — lewat sapaan hangat, ketertarikan tulus pada kehidupan siswa di luar pelajaran, dan menjadi pendengar yang baik — membuat siswa lebih terbuka mengakui kesulitan yang mereka hadapi. Ini perlu dibarengi sikap yang menghargai perbedaan dan inklusif, memberi ruang bagi semua siswa untuk berpartisipasi termasuk mereka yang pemalu atau belajar lebih lambat, tanpa perlakuan yang membanding-bandingkan.</p>
  <p>Guru juga berperan mendorong rasa percaya diri dan kemandirian lewat pujian yang spesifik dan penegasan bahwa kesalahan adalah bagian wajar dari proses belajar, bukan sesuatu yang harus ditakuti — sekaligus menciptakan suasana kelas yang positif dan tidak mengancam, bebas dari kata-kata kasar atau ejekan, dengan aturan yang ditegakkan secara adil dan konsisten. Rasa aman secara emosional, di mana siswa tahu kelas adalah tempat aman untuk menjadi diri sendiri tanpa takut dihakimi, serta budaya yang mendukung kerja sama alih-alih persaingan berlebihan, melengkapi lingkungan belajar yang benar-benar mampu mereduksi stres siswa secara menyeluruh.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga gaya belajar (visual, auditori, kinestetik) yang dibahas di bab ini, gaya belajar siswa mana yang menurut Anda paling sering terabaikan dalam metode pengajaran yang biasa digunakan di kelas Anda?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, siswa dengan gaya belajar kinestetik paling baik belajar lewat...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Gerakan, sentuhan, dan pengalaman langsung seperti eksperimen atau permainan edukatif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mendengarkan ceramah panjang tanpa aktivitas fisik apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membaca teks tebal dalam diam tanpa diskusi atau gerakan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru IPA hanya mengajar lewat penjelasan lisan dan buku teks, tanpa pernah mengadakan eksperimen atau praktik langsung, padahal banyak siswanya lebih aktif dan gelisah bila duduk diam lama. Berdasarkan Bab 8, apa yang paling mungkin terjadi pada siswa-siswa tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa dengan gaya belajar kinestetik kemungkinan besar merasa tertekan dan sulit fokus karena metode pengajaran tidak mengakomodasi cara mereka belajar paling baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena gaya belajar tidak memengaruhi tingkat stres siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Semua siswa akan otomatis menyesuaikan diri tanpa mengalami kesulitan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Di sebuah kelas, seorang siswa baru terlihat pendiam dan jarang berpartisipasi karena merasa berbeda dari teman-temannya. Guru kelas tersebut membiarkan situasi ini tanpa intervensi apa pun. Berdasarkan Bab 8, langkah yang seharusnya diambil guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun sikap inklusif dan menghargai perbedaan, memberi ruang partisipasi yang setara, serta membangun hubungan yang hangat agar siswa tersebut merasa aman dan diterima</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan siswa tersebut menyesuaikan diri sendiri tanpa bantuan apa pun karena itu bukan tanggung jawab guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa siswa tersebut tampil di depan kelas agar cepat terbiasa meski belum merasa nyaman</button>
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
<h2 class="reveal">Kolaborasi dengan Profesional Kesehatan Mental</h2>
<p class="lede reveal">Ada kalanya kesulitan belajar dan stres yang dialami siswa sudah melampaui apa yang bisa ditangani guru dan orang tua sendirian — dan mengenali momen itu, lalu melibatkan profesional kesehatan mental dengan bijak, adalah bentuk tanggung jawab, bukan kegagalan.</p>

<div class="card reveal">
  <h4>A. Peran Guru BK atau Konselor Sekolah</h4>
  <p>Guru BK atau konselor sekolah menjadi lapisan dukungan penting sebelum masalah siswa membutuhkan penanganan yang lebih intensif. Mereka berperan sebagai teman curhat yang profesional — hadir sebagai pendengar yang aman dan tidak menghakimi, namun dengan pendekatan yang lebih terarah dibanding sekadar teman biasa, membantu siswa menggali masalah lebih dalam dan menyusun strategi penyelesaian yang sesuai. Peran penting lainnya adalah deteksi dini terhadap gejala kesulitan belajar dan tekanan mental, misalnya saat siswa tiba-tiba sering bolos, nilainya menurun drastis, atau menjadi sangat pendiam — sinyal-sinyal yang perlu segera direspons sebelum masalah semakin memburuk.</p>
  <p>Guru BK juga berfungsi sebagai jembatan komunikasi antara sekolah, orang tua, dan profesional kesehatan mental — menjelaskan kondisi siswa kepada guru mata pelajaran, mengajak orang tua berdiskusi, hingga memberikan rujukan kepada psikolog anak bila diperlukan. Lewat layanan konseling individu maupun kelompok, serta edukasi tentang kesehatan mental yang mengajarkan siswa cara mengelola stres dan mengenali tanda-tanda burnout, guru BK menanamkan pesan penting: menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik, dan meminta bantuan bukanlah tanda kelemahan, melainkan keberanian.</p>

  <h4>B. Kapan Harus Menghubungi Psikolog Anak</h4>
  <p>Ada situasi di mana dukungan dari guru BK atau wali kelas saja belum cukup, dan diperlukan intervensi dari psikolog anak. Beberapa kondisi yang perlu diwaspadai antara lain: masalah emosional yang berlangsung lebih dari dua minggu dan mengganggu aktivitas sehari-hari seperti belajar, tidur, atau makan; perilaku ekstrem atau tidak biasa seperti agresivitas berlebihan, menutup diri total, atau kecemasan yang tidak masuk akal; serta pengalaman trauma atau peristiwa besar seperti kematian orang terdekat, perceraian orang tua, atau kekerasan.</p>
  <p>Kondisi lain yang perlu direspons serius adalah penurunan prestasi akademik yang drastis dan tidak diketahui sebabnya meski sudah didampingi, serta — yang paling penting untuk selalu didengar — saat anak sendiri secara langsung meminta bantuan atau mengungkapkan perasaan seperti merasa lelah tanpa tahu sebabnya atau ingin bicara dengan seseorang yang bisa mengerti dirinya. Kalimat semacam ini adalah tanda penting bahwa anak sedang dalam kondisi yang perlu ditangani serius, dan sebaiknya segera direspons dengan menghubungkan anak pada psikolog anak yang tepat.</p>

  <h4>C. Strategi Komunikasi Efektif antara Orang Tua, Sekolah, dan Profesional Kesehatan Mental</h4>
  <p>Kolaborasi antara ketiga pihak ini akan jauh lebih efektif bila dilakukan dengan komunikasi yang terbuka dan tidak saling menyalahkan. Alih-alih berfokus pada mencari siapa yang salah, semua pihak sebaiknya mengarahkan pembicaraan pada solusi bersama, sehingga orang tua, guru, dan profesional kesehatan mental benar-benar bekerja sebagai satu tim yang saling melengkapi informasi dan pendekatan.</p>
  <p>Anak sendiri pun perlu dilibatkan secara bijak dalam proses ini, terutama untuk usia SD kelas atas ke atas, agar mereka merasa dihargai dan memahami bahwa semua orang dewasa yang terlibat benar-benar peduli padanya — bukan sedang membicarakannya di belakang layar. Penyampaian yang hangat dan sederhana bisa membuat anak merasa aman dan tidak terintimidasi oleh proses kolaborasi yang sedang berjalan, sekaligus memperkuat kepercayaannya bahwa mencari bantuan adalah hal yang wajar dan didukung oleh orang-orang terdekatnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kondisi-kondisi yang dibahas di bab ini (masalah emosional berkepanjangan, perilaku ekstrem, trauma, penurunan prestasi drastis, permintaan bantuan langsung dari anak), pernahkah Anda menemui salah satunya pada siswa/anak yang Anda dampingi — dan bagaimana Anda meresponsnya saat itu?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, salah satu tanda bahwa seorang anak sebaiknya segera dirujuk ke psikolog anak adalah jika masalah emosionalnya berlangsung lebih dari...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Dua minggu dan mengganggu aktivitas sehari-hari seperti belajar, tidur, atau makan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu hari saja tanpa terkecuali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu tahun penuh baru dianggap perlu perhatian</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa mulai menunjukkan perilaku menutup diri total, menolak bicara dengan siapa pun, dan menghindari semua interaksi sosial selama lebih dari sebulan. Guru BK sudah mencoba mendekatinya namun situasinya tidak membaik. Berdasarkan Bab 9, langkah paling tepat selanjutnya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merujuk siswa tersebut kepada psikolog anak untuk mendapatkan evaluasi dan penanganan yang lebih mendalam, karena kondisi ini melampaui apa yang bisa ditangani guru BK sendirian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena perilaku menutup diri dianggap sebagai fase yang akan hilang dengan sendirinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa siswa tersebut untuk lebih banyak bicara di depan kelas sebagai bentuk terapi kejut</button>
  </div>
  <div class="quiz-q">
    <p>Orang tua, guru, dan psikolog anak yang menangani seorang siswa saling menyalahkan tentang siapa yang seharusnya bertanggung jawab atas kesulitan belajar anak tersebut, alih-alih mendiskusikan solusi bersama. Berdasarkan Bab 9, apa yang seharusnya diperbaiki dari pola komunikasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengubah fokus komunikasi dari saling menyalahkan menjadi kolaborasi mencari solusi bersama, dengan melibatkan anak secara bijak agar ia merasa didukung, bukan dipermasalahkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena mencari pihak yang salah adalah langkah pertama yang paling penting</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sebaiknya anak dijauhkan sepenuhnya dari proses ini dan tidak pernah diberi tahu apa pun</button>
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
<h2 class="reveal">Dampak Kesulitan Belajar dan Stres yang Tidak Ditangani</h2>
<p class="lede reveal">Bab penutup ini bukan dimaksudkan untuk menakut-nakuti, melainkan sebagai pengingat jujur tentang mengapa langkah-langkah di bab-bab sebelumnya begitu penting dilakukan sejak dini — sebab kesulitan belajar dan stres yang dibiarkan berlarut jarang berhenti dengan sendirinya.</p>

<div class="card reveal">
  <h4>A. Penurunan Kepercayaan Diri</h4>
  <p>Ketika kesulitan belajar dan stres dibiarkan tanpa bantuan yang tepat, dampak yang paling sering muncul lebih dulu adalah penurunan kepercayaan diri. Ini bisa dipicu oleh perasaan tidak mampu saat melihat teman-teman lebih cepat memahami pelajaran, pengalaman gagal yang berulang tanpa perbaikan, komentar negatif dari lingkungan sekitar, hingga perbandingan terus-menerus dengan saudara atau teman sebaya. Dampaknya bisa terlihat lewat anak yang menarik diri dari lingkungan sosial, enggan mengambil tantangan baru, mudah cemas takut gagal, dan pada akhirnya justru semakin tertinggal secara akademik karena tidak berani bertanya atau meminta bantuan.</p>
  <p>Kabar baiknya, kepercayaan diri bisa dipulihkan dengan dukungan yang tepat dan konsisten — memberi pujian yang tulus dan spesifik, berfokus pada proses dan usaha alih-alih hasil semata, membantu anak mengenali kelebihannya sendiri, serta memberi tantangan yang sesuai kemampuan agar anak bisa merasakan keberhasilan kecil yang membangun kembali rasa percaya dirinya secara bertahap.</p>

  <h4>B. Masalah Sosial dan Emosional</h4>
  <p>Di luar kepercayaan diri, kesulitan belajar dan stres yang tidak tertangani juga bisa memunculkan gangguan dalam interaksi sosial — anak yang merasa tertinggal atau "berbeda" cenderung menarik diri dari pergaulan, lebih suka menyendiri, dan takut ditertawakan. Stres yang menumpuk tanpa pelampiasan sehat kemudian bisa muncul dalam dua bentuk ekstrem: ledakan emosi seperti mudah marah dan perilaku agresif, atau sebaliknya perilaku menutup diri di mana anak tampak tenang dari luar namun menyimpan kesedihan dan ketakutan yang dalam — keduanya sesungguhnya adalah bentuk "teriakan" anak meminta pertolongan, meski belum bisa mengungkapkannya dengan kata-kata.</p>
  <p>Bila dibiarkan berlarut, anak bisa mulai mempertanyakan nilai dirinya sendiri, merasa tidak cukup pintar atau tidak layak untuk berhasil — kondisi yang, jika tidak segera direspons, berpotensi menjadi cikal bakal gangguan mental yang lebih serius di usia remaja atau dewasa. Membangun komunikasi yang terbuka dan empatik, mengajarkan keterampilan sosial, melibatkan guru BK atau profesional bila diperlukan, serta memberi teladan pengelolaan emosi yang sehat adalah langkah-langkah nyata yang bisa mencegah kondisi ini berkembang lebih jauh.</p>

  <h4>C. Potensi Putus Sekolah atau Gangguan Mental di Masa Depan</h4>
  <p>Dampak paling serius dari kesulitan belajar dan stres yang dibiarkan berlarut adalah meningkatnya risiko putus sekolah dan gangguan kesehatan mental. Anak yang terus-menerus merasa gagal, tidak dimengerti, atau menanggung beban mental yang terlalu berat bisa mulai memandang sekolah sebagai tempat yang tidak lagi aman, dan pada titik tertentu memilih keluar dari sistem pendidikan sebagai bentuk "pelarian" dari tekanan yang dirasakannya — sebuah keputusan yang membatasi masa depannya jauh melampaui sekadar nilai akademik.</p>
  <p>Secara paralel, stres berkepanjangan tanpa dukungan yang memadai bisa berkembang menjadi gangguan mental seperti kecemasan berlebih, depresi, atau burnout akademik. Tanda-tanda awal seperti perubahan drastis dalam perilaku, penurunan minat ke sekolah, keluhan fisik tanpa sebab medis jelas, atau pernyataan negatif tentang diri sendiri perlu segera direspons, bukan diabaikan. Pencegahan yang paling efektif datang dari sinergi keluarga, sekolah, dan masyarakat dalam memberikan dukungan emosional yang tulus, pendampingan belajar yang bijaksana, serta keterbukaan untuk berkolaborasi dengan profesional kesehatan mental bila memang dibutuhkan — sebuah penutup yang menegaskan kembali mengapa seluruh pendekatan di buku ini layak diterapkan secara serius dan konsisten.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga dampak (penurunan kepercayaan diri, masalah sosial-emosional, risiko putus sekolah/gangguan mental) yang dibahas di bab ini, dampak mana yang menurut Anda paling penting diwaspadai sejak tanda-tanda paling awal, mengingat konteks siswa/anak yang Anda dampingi?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, dua bentuk respons emosional ekstrem yang bisa muncul akibat stres yang menumpuk tanpa pelampiasan sehat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Ledakan emosi (marah, agresif) dan perilaku menutup diri (diam, menyimpan kesedihan)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Selalu tertawa berlebihan dan selalu ingin bermain sepanjang waktu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Peningkatan nafsu makan drastis dan semangat belajar yang meningkat pesat</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa yang dulunya aktif dan ceria kini menjadi pendiam, sering menghindar dari tugas dengan alasan sakit, namun secara medis tidak ditemukan masalah kesehatan apa pun. Berdasarkan Bab 10, kondisi ini paling mungkin mengindikasikan...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Perilaku menutup diri sebagai bentuk "teriakan" meminta pertolongan akibat stres yang belum tertangani, meski belum bisa diungkapkan dengan kata-kata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa tersebut hanya berpura-pura sakit untuk menghindari pelajaran tanpa alasan yang perlu diperhatikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kondisi ini normal dan tidak memerlukan perhatian khusus dari guru maupun orang tua</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa SMP menunjukkan penurunan minat ke sekolah, mulai mengatakan hal-hal negatif tentang dirinya sendiri, dan semakin menarik diri dari keluarga selama beberapa bulan terakhir, namun orang tuanya menganggap ini hanya "fase remaja biasa" dan tidak melakukan apa pun. Berdasarkan Bab 10, risiko yang paling mungkin terjadi bila kondisi ini terus dibiarkan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Meningkatnya risiko putus sekolah atau berkembangnya gangguan mental seperti kecemasan dan depresi, sehingga tanda-tanda ini seharusnya segera direspons, bukan dianggap fase biasa yang akan hilang sendiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko apa pun karena semua remaja pasti mengalami fase serupa tanpa dampak jangka panjang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risiko hanya akan muncul jika nilai akademik siswa tersebut juga menurun drastis, bukan dari tanda-tanda lain</button>
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
<p class="eyebrow reveal">Asesmen</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas seluruh 10 bab buku ini. Jawaban baru akan diperiksa dan skor Anda baru muncul setelah menekan tombol "Periksa Jawaban Saya" di bagian akhir.</p>

<div class="card reveal" id="asesmenCard">
  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, disgrafia adalah gangguan belajar yang berkaitan dengan kesulitan dalam...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menulis secara fisik, termasuk mengontrol gerakan tangan saat menulis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Berhitung dan memahami angka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali warna dan bentuk geometris</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 1, faktor lingkungan yang bisa memperparah kesulitan belajar anak antara lain...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Rumah yang penuh konflik dan kurangnya fasilitas belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Warna cat dinding kelas yang kurang cerah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Jumlah libur sekolah yang terlalu banyak</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2, salah satu sumber stres terbesar bagi siswa yang dibahas dalam bab ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tekanan akademik dan ekspektasi yang terlalu tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terlalu banyak waktu istirahat di sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurangnya pekerjaan rumah yang diberikan guru</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang siswa mengalami penurunan prestasi akademik berkepanjangan, gangguan kesehatan fisik kronis, dan kesulitan menjalin hubungan sosial dalam waktu lama. Berdasarkan Bab 2, kombinasi ini paling mencerminkan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dampak jangka panjang dari stres yang tidak tertangani dengan baik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tanda bahwa siswa tersebut memang tidak berbakat secara akademik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kondisi yang sepenuhnya tidak berkaitan dengan kesehatan mental siswa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, harapan orang tua yang terlalu tinggi terhadap anak sering kali dipengaruhi oleh...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Standar pribadi, pengalaman masa lalu orang tua, dan perbandingan dengan anak lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hasil tes IQ resmi yang dilakukan psikolog profesional</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum nasional yang ditetapkan pemerintah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 3, mengapa mengandalkan sekolah sebagai satu-satunya tumpuan pembelajaran anak dianggap keliru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena peran orang tua dalam memberi dukungan dan umpan balik konsisten di rumah sangat krusial dan tidak tergantikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena sekolah sebenarnya tidak memiliki peran apa pun dalam pembelajaran anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena guru tidak boleh dilibatkan sama sekali dalam pendidikan anak</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, salah satu cara mengidentifikasi kesulitan belajar dan stres siswa adalah lewat observasi langsung di kelas, yang bertujuan untuk...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memperhatikan bagaimana siswa berinteraksi dengan materi dan mencatat pola kesulitan yang muncul</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menilai kerapian seragam siswa semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghitung jumlah kehadiran siswa tanpa memperhatikan perilaku belajarnya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 4, dalam proses evaluasi komprehensif, peran konselor sekolah yang ditekankan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan dukungan emosional serta mengajarkan teknik manajemen stres dan keterampilan sosial kepada siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menentukan nilai akhir rapor siswa secara sepihak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan sepenuhnya peran psikolog pendidikan dalam segala hal</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, siswa dengan gaya belajar auditori paling terbantu dengan pendekatan pengajaran berupa...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penjelasan lisan, diskusi kelompok, dan membaca dengan suara keras</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Diagram dan peta konsep tanpa penjelasan verbal sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aktivitas fisik dan eksperimen tanpa penjelasan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang siswa slow learner membutuhkan waktu lebih lama memahami materi dan mudah lupa bila tidak diulang. Berdasarkan Bab 5, pendekatan paling tepat untuknya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penjelasan sederhana dan berulang, rutinitas belajar konsisten, serta pendampingan ekstra lewat sesi individu atau kelompok kecil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan materi yang jauh lebih kompleks agar ia terpacu belajar lebih cepat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkannya belajar sendiri tanpa pengulangan atau pendampingan tambahan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, salah satu pendekatan orang tua yang dianjurkan dalam mendukung anak mengatasi stres adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan dukungan konstruktif dengan memuji usaha, bukan hanya hasil akhir</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menekan anak agar segera menyelesaikan tugas dengan standar yang tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membandingkan pencapaian anak dengan saudara atau teman sebayanya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 6, salah satu teknik manajemen stres di rumah yang disebutkan adalah Teknik Pomodoro, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Belajar fokus selama 25 menit, kemudian istirahat selama 5 menit</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Belajar tanpa henti selama 5 jam berturut-turut tanpa jeda</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari belajar sama sekali pada akhir pekan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, salah satu bentuk penyesuaian yang bisa dilakukan sekolah agar tidak menekan siswa yang kesulitan belajar adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penyesuaian kurikulum, seperti memberi alternatif bentuk penilaian berupa proyek atau presentasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah ujian tertulis tanpa variasi bentuk penilaian lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh dukungan tambahan bagi siswa yang kesulitan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 7, konseling individu di sekolah bermanfaat karena...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi ruang pribadi dan aman bagi siswa untuk membicarakan masalah mereka dengan konselor</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mewajibkan siswa membicarakan masalah pribadinya di depan seluruh kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan sepenuhnya kebutuhan siswa akan dukungan dari orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 8, siswa dengan gaya belajar visual paling terbantu dengan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Gambar, diagram, warna, dan video</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penjelasan verbal panjang tanpa visualisasi apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Aktivitas fisik semata tanpa elemen visual</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 8, salah satu langkah menciptakan suasana kelas yang positif dan tidak mengancam adalah dengan cara...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari kata-kata kasar atau ejekan serta menegakkan aturan kelas secara adil dan konsisten</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi hukuman keras setiap kali siswa melakukan kesalahan kecil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan siswa saling mengejek asalkan tidak sampai berkelahi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 9, salah satu peran penting guru BK atau konselor sekolah adalah melakukan deteksi dini, yaitu mengenali gejala awal seperti...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa yang tiba-tiba sering bolos, nilainya menurun drastis, atau menjadi sangat pendiam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa yang selalu mendapatkan nilai sempurna di setiap mata pelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa yang aktif mengikuti banyak kegiatan ekstrakurikuler tanpa keluhan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 9, salah satu kondisi yang menandakan seorang anak sebaiknya segera dirujuk ke psikolog anak adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak menunjukkan perilaku ekstrem seperti agresivitas berlebihan atau menutup diri total dalam waktu yang cukup lama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak sesekali merasa lelah setelah ujian namun kembali ceria keesokan harinya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak mendapat nilai sedikit lebih rendah dari biasanya pada satu mata pelajaran</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 10, penurunan kepercayaan diri pada anak bisa dipicu oleh beberapa hal, salah satunya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengalaman gagal yang berulang tanpa dukungan yang memadai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terlalu banyak menerima pujian yang tulus dan spesifik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Terlalu sering diberi tantangan yang sesuai dengan kemampuannya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin mencegah risiko putus sekolah dan gangguan mental pada siswa-siswanya sejak dini. Berdasarkan keseluruhan isi buku ini, kombinasi langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan tanda-tanda awal karena dianggap fase biasa yang akan hilang sendiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun sinergi antara identifikasi dini, pengajaran adaptif, dukungan emosional yang konsisten dari rumah dan sekolah, serta kolaborasi dengan profesional kesehatan mental bila diperlukan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya berfokus pada peningkatan nilai akademik tanpa memperhatikan kesejahteraan emosional siswa</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
