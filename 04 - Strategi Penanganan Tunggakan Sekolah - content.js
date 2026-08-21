/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Strategi Penanganan Tunggakan Sekolah"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-penanganan-tunggakan-sekolah.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Memahami Akar Permasalahan Tunggakan Sekolah</h2>
<p class="lede reveal">Sebelum menyusun strategi penagihan apa pun, sekolah perlu berhenti sejenak dan memahami dengan jujur: tunggakan itu jenisnya apa, siapa yang mengalaminya, dan apa penyebab sesungguhnya — karena obat yang salah untuk diagnosis yang keliru hanya akan memperparah keadaan.</p>

<div class="card reveal">
  <h4>A. Jenis-jenis Tunggakan dan Profil Kasus di Sekolah</h4>
  <p>Langkah pertama menangani tunggakan bukan menagih, melainkan mengenali. Tidak semua tunggakan lahir dari sebab yang sama, sehingga menyamaratakan pendekatan untuk semua kasus justru berisiko menyakiti orang tua yang sebenarnya sedang berjuang, sekaligus membiarkan orang tua yang mampu tapi enggan membayar terus berlarut. Secara waktu keterlambatan, tunggakan bisa dipetakan menjadi tiga tingkat: tunggakan ringan (sekitar satu hingga dua bulan) yang umumnya sekadar kelalaian administratif atau lupa dan biasanya cukup diselesaikan dengan pengingat sederhana; tunggakan sedang (tiga hingga lima bulan) yang mulai mengindikasikan kesulitan keuangan nyata atau kurangnya kesadaran akan kewajiban, sehingga butuh komunikasi yang lebih personal; dan tunggakan berat (lebih dari enam bulan) yang sudah masuk tahap kronis, bisa jadi karena krisis keuangan serius, keengganan diam-diam terhadap kebijakan sekolah, atau bahkan hilangnya niat melanjutkan sekolah di tempat itu, sehingga memerlukan strategi khusus termasuk kemungkinan pendekatan sosial atau filantropi.</p>
  <p>Selain dari sisi waktu, tunggakan juga perlu dibaca dari latar belakang orang tua yang mengalaminya, karena profil ini sangat menentukan cara pendekatan yang tepat. Ada orang tua dengan kesulitan ekonomi nyata yang sebenarnya sangat ingin membayar namun benar-benar terbatas secara finansial — mereka cenderung kooperatif bila diajak bicara dengan baik, dan solusi yang cocok biasanya berupa keringanan, cicilan, atau bantuan filantropi. Ada pula orang tua yang kurang teredukasi tentang kewajiban finansial, belum sepenuhnya memahami bahwa membayar tepat waktu adalah bentuk tanggung jawab terhadap keberlangsungan pendidikan, sehingga edukasi dan komunikasi yang bijak menjadi kuncinya. Golongan lain adalah orang tua yang sebenarnya mampu tetapi kurang berkomitmen — mungkin karena kurang puas dengan layanan sekolah atau menganggap "sekolah harus sabar karena ini sekolah Islam" — yang membutuhkan pendekatan lebih asertif dan penguatan kesadaran kolektif. Terakhir, ada orang tua yang tengah menghadapi masalah non-finansial, seperti krisis rumah tangga atau gangguan kesehatan, yang menuntut empati dan fleksibilitas karena yang mereka butuhkan bukan sekadar tagihan, melainkan kehadiran sekolah sebagai pendamping.</p>
  <p>Dalam praktiknya, satu keluarga bisa saja mengalami kombinasi dari beberapa profil sekaligus, misalnya tunggakan berat yang muncul akibat krisis keluarga dan rendahnya literasi keuangan sekaligus. Di sinilah pentingnya observasi yang jeli dan pencatatan data yang rapi, agar sekolah tidak gegabah memilih pendekatan yang keliru — misalnya menekan orang tua yang sesungguhnya sedang sangat terbebani. Klasifikasi ini bukan alat untuk memberi cap kepada orang tua, melainkan ikhtiar agar sekolah bisa menyusun strategi yang proporsional, adil, dan solutif. Sekolah yang memahami karakteristik kasusnya dengan baik akan lebih berhasil menagih tanpa merusak hubungan, bahkan bisa memperkuat loyalitas orang tua dalam jangka panjang — sebab tidak semua tunggakan itu sama, dan menyadari hal ini adalah langkah pertama keluar dari pola penagihan yang reaktif menuju sistem yang lebih strategis dan berperikemanusiaan.</p>

  <h4>B. Faktor-faktor Penyebab Utama Tunggakan</h4>
  <p>Di balik setiap angka tunggakan, ada rangkaian sebab yang saling berkaitan dan berlapis — dan sekolah yang hanya sibuk mengejar gejala (belum bayar) tanpa menyentuh akarnya akan terus mengulang masalah yang sama dari tahun ke tahun. Penyebab paling sering ditemukan adalah kesulitan ekonomi keluarga, baik karena penghasilan terbatas, kehilangan pekerjaan, usaha yang merugi, maupun kebutuhan mendadak seperti biaya kesehatan. Pada keluarga menengah ke bawah, biaya pendidikan kerap harus "berbagi tempat" dengan kebutuhan pokok lain seperti makan dan listrik, dan yang perlu diwaspadai, kesulitan ini tidak selalu tampak di permukaan — sebagian orang tua tetap berusaha tampil biasa saja meski sedang berjuang secara finansial, sehingga sekolah butuh kepekaan sosial dan data yang baik untuk membedakannya dari sebab lain.</p>
  <p>Penyebab kedua adalah kurangnya kesadaran atau edukasi orang tua tentang pentingnya membayar tepat waktu. Sebagian orang tua memandang sekolah sebagai lembaga yang "wajib sabar", atau bahkan merasa pendidikan anak sepenuhnya tanggung jawab sekolah semata, sehingga tunggakan dianggap bisa ditunda tanpa konsekuensi berarti selama anak tetap belajar seperti biasa. Ketiga, sistem pembayaran sekolah yang tidak fleksibel juga bisa menjadi biang keladi — ketika sekolah hanya menyediakan satu cara bayar (misalnya tunai di kasir pada jam kerja) tanpa opsi cicilan atau penjadwalan ulang, padahal setiap keluarga punya ritme keuangan berbeda, dari yang berpenghasilan harian hingga musiman seperti pedagang dan petani. Keempat, tidak adanya sistem pengingat dan pelaporan yang aktif membuat banyak tunggakan terjadi bukan karena niat menunda, melainkan karena lupa di tengah kesibukan — dan sekolah yang baru menyadari tunggakan setelah menumpuk akan terkesan "menagih besar-besaran" secara tiba-tiba, padahal sebelumnya tidak pernah ada komunikasi sama sekali.</p>
  <p>Penyebab kelima, yang sering luput dari perhatian, adalah ketidakpuasan terhadap pelayanan sekolah — bisa karena fasilitas yang tidak sesuai harapan, guru yang dinilai kurang kompeten, atau kebijakan yang tidak disepakati bersama. Dalam kondisi seperti ini, orang tua bisa jadi sengaja menunda pembayaran sebagai bentuk "protes diam-diam", sehingga tunggakan sesungguhnya bukan lagi murni persoalan finansial, melainkan soal kepercayaan dan kepuasan layanan, yang penanganannya membutuhkan evaluasi layanan dan perbaikan komunikasi, bukan sekadar penagihan yang lebih gencar. Semakin dalam sekolah memahami kelima lapis penyebab ini — ekonomi, edukasi, sistem internal, komunikasi, dan relasi — semakin besar pula peluangnya menyelesaikan persoalan tunggakan dengan bijak, adil, dan tanpa memicu konflik baru.</p>

  <h4>C. Solusi untuk Setiap Akar Permasalahan Tunggakan</h4>
  <p>Kesalahan yang paling sering terjadi di sekolah adalah menerapkan satu pendekatan yang sama untuk semua tunggakan, padahal setiap kasus punya latar belakang berbeda. Karena itu, solusi penanganan tunggakan idealnya dirancang menyeluruh dalam empat dimensi yang saling melengkapi. Pendekatan edukatif menyasar orang tua yang belum menyadari bahwa membayar iuran adalah bagian dari komitmen moral, bukan sekadar kewajiban administratif — bisa diwujudkan lewat sosialisasi berkala tentang sistem pembiayaan, penjelasan transparan penggunaan dana, dan membangun kampanye "Orang Tua sebagai Mitra Sekolah" agar tumbuh rasa memiliki. Pendekatan administratif menyasar persoalan sistem internal yang kaku, dengan menyediakan beragam metode pembayaran (tunai, transfer, auto-debit, QRIS), sistem pengingat otomatis, akses dashboard tagihan, serta opsi jadwal pembayaran yang lebih luwes sesuai kondisi orang tua.</p>
  <p>Pendekatan sosial ditujukan bagi keluarga yang sedang mengalami kesulitan ekonomi nyata, dengan semangat merangkul, bukan menghakimi — misalnya lewat skema bantuan sementara atau subsidi silang, program filantropi internal seperti Dana Peduli atau "Orang Tua Asuh", serta pembentukan tim khusus sosial yang memverifikasi dan menindaklanjuti kasus ekonomi berat, dengan melibatkan alumni dan donatur bila diperlukan. Sebagai sekolah Islam, dimensi keempat yang tidak boleh diabaikan adalah pendekatan spiritual, yang menghidupkan nilai-nilai keislaman dalam pengelolaan keuangan — mengingatkan orang tua bahwa menunaikan amanah biaya pendidikan tepat waktu adalah bagian dari ibadah dan jalan keberkahan ilmu anak, sekaligus menyediakan ruang konsultasi psikososial bagi yang membutuhkan dan menghidupkan budaya saling mendoakan antarsesama orang tua di lingkungan sekolah.</p>
  <p>Mengelola tunggakan sekolah tidak bisa hanya bertumpu pada logika "tagih dan lunasi" semata. Dengan memadukan keempat pendekatan ini secara berlapis — edukatif, administratif, sosial, dan spiritual — sekolah dapat membangun sistem penanganan tunggakan yang lebih beradab, berkeadilan, dan berkelanjutan, sekaligus meletakkan fondasi bagi bab-bab berikutnya yang akan membahas lebih dalam bagaimana merancang komunikasi yang efektif dengan orang tua.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat profil orang tua yang mengalami tunggakan pada bab ini (kesulitan ekonomi nyata, kurang teredukasi, mampu tapi kurang komitmen, dan masalah non-finansial), profil mana yang paling sering Anda temui di sekolah Anda — dan apakah pendekatan yang selama ini dipakai sudah sesuai dengan profil tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, tunggakan yang sudah berlangsung lebih dari 6 bulan dan sudah masuk tahap kronis tergolong sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tunggakan ringan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tunggakan sedang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tunggakan berat</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menerapkan surat peringatan keras yang sama kepada seluruh orang tua yang menunggak, tanpa membedakan apakah penyebabnya kesulitan ekonomi, kurangnya edukasi, atau ketidakpuasan layanan. Berdasarkan Bab 1, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Orang tua yang sebenarnya sedang kesulitan bisa merasa tertekan dan tersakiti, sementara orang tua yang mampu tapi enggan membayar tidak tersentuh secara tepat oleh pendekatan yang seragam</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko apa pun, karena semua tunggakan pada dasarnya harus ditangani dengan cara yang sama persis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal citra sekolah semata, tidak berkaitan dengan efektivitas penyelesaian tunggakan</button>
  </div>
  <div class="quiz-q">
    <p>Bendahara SDIT Nurul Hikmah mendapati seorang wali murid yang tampak berkecukupan, anaknya ikut semua kegiatan berbayar, namun sudah menunggak SPP lima bulan sambil terus menghindari komunikasi. Berdasarkan kombinasi jenis dan faktor penyebab tunggakan pada Bab 1, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengumumkan nama wali murid tersebut di grup WhatsApp kelas agar segera membayar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan observasi dan komunikasi personal lebih dulu untuk memahami akar masalahnya secara jujur, sebelum menentukan pendekatan yang tepat — apakah karena kesulitan tersembunyi, ketidakpuasan layanan, atau kurang komitmen</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh layanan sekolah kepada anak tersebut tanpa pemberitahuan terlebih dahulu</button>
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
<h2 class="reveal">Pendekatan Humanis dan Komunikasi Persuasif</h2>
<p class="lede reveal">Setelah memahami akar masalah, kunci berikutnya bukan pada seberapa keras sekolah menagih, melainkan seberapa manusiawi dan bijak sekolah berkomunikasi — sebab tunggakan yang ditangani dengan adab justru bisa memperkuat kepercayaan, bukan merusaknya.</p>

<div class="card reveal">
  <h4>A. Membangun Komunikasi Efektif dengan Orang Tua</h4>
  <p>Komunikasi adalah jembatan pertama antara sekolah dan orang tua dalam persoalan tunggakan. Komunikasi yang efektif bukan sekadar menyampaikan tagihan, melainkan membuka ruang dialog yang jujur, di mana orang tua merasa didengar sebelum diminta bertanggung jawab. Sekolah perlu membangun budaya komunikasi dua arah — bukan komunikasi satu arah yang hanya berisi perintah membayar — sehingga orang tua merasa dihargai sebagai mitra, bukan semata-mata sebagai sumber pemasukan. Nada bicara, pemilihan media, dan waktu penyampaian pesan semuanya berperan besar dalam menentukan apakah komunikasi ini akan diterima dengan lapang dada atau justru memicu jarak.</p>
  <p>Prinsip dasar komunikasi efektif dalam konteks tunggakan mencakup kejelasan informasi (jumlah, periode, dan cara pembayaran disampaikan secara gamblang tanpa membingungkan), konsistensi waktu (pesan dikirim pada momen yang wajar, tidak mendadak atau di saat yang kurang pantas), serta empati sebagai landasan setiap kalimat yang dipilih. Sekolah yang terbiasa membangun komunikasi semacam ini akan lebih mudah mendeteksi masalah sejak dini, karena orang tua merasa nyaman mengabarkan kesulitannya lebih awal ketimbang menghindar sampai tunggakan menumpuk tak terkendali.</p>

  <h4>B. Pendekatan Berbasis Nilai-nilai Islam</h4>
  <p>Sebagai lembaga pendidikan Islam, cara sekolah menangani tunggakan sepatutnya mencerminkan adab bermuamalah — tata cara berinteraksi yang santun, adil, dan bermartabat. Islam mengajarkan keseimbangan antara menagih hak dengan cara yang baik dan menunjukkan kasih sayang kepada yang sedang kesulitan. Nilai pertama yang perlu ditegakkan adalah keadilan tanpa menghakimi: sekolah berhak menagih karena itu haknya, namun tidak boleh menyamaratakan seluruh kasus tanpa memahami kondisi dan kemampuan masing-masing orang tua. Nilai kedua adalah menjaga empati dan semangat tolong-menolong (ta'awun) — ketika ada orang tua yang benar-benar kesulitan, sekolah membuka ruang bantuan berupa potongan, cicilan, atau filantropi, tanpa sekalipun mengabaikan kewajiban itu sendiri.</p>
  <p>Nilai ketiga adalah menjaga kehormatan orang tua — Islam melarang keras membuka aib atau mempermalukan orang yang sedang kesusahan, sehingga sekolah harus sangat berhati-hati agar tidak menyebut nama penunggak di forum umum, memberi peringatan yang dibaca pihak lain, atau menciptakan tekanan di depan publik. Sebaliknya, kerahasiaan data keuangan dan komunikasi personal yang lembut adalah jalan yang lebih terhormat. Nilai keempat adalah menghidupkan amanah dan tanggung jawab, mengingatkan bahwa membayar tepat waktu adalah bentuk menunaikan amanah yang membawa keberkahan, disampaikan bukan dengan nada menghakimi melainkan sebagai nasihat dalam bingkai ukhuwah. Dan nilai kelima adalah menumbuhkan ukhuwah serta kepedulian sosial, di mana persoalan tunggakan justru dijadikan peluang mempererat kebersamaan lewat program seperti "Orang Tua Asuh" atau Wakaf Pendidikan, bukan menjadi pemisah antara sekolah dan keluarga.</p>

  <h4>C. Memahami Kondisi Finansial Orang Tua Siswa</h4>
  <p>Kunci penanganan yang adil terletak pada kemampuan sekolah membaca kondisi finansial keluarga secara objektif sekaligus empatik. Tanpa pemahaman yang cukup, sekolah bisa keliru mengambil sikap — terlalu longgar kepada yang sebenarnya mampu, atau terlalu keras kepada yang sebenarnya kesulitan — sebab penampilan luar sering kali menipu: ada yang terlihat baik-baik saja namun tengah berjuang berat, dan ada pula yang tampak sederhana namun sesungguhnya stabil secara finansial. Karena itu sekolah perlu memadukan dua pendekatan sekaligus. Pendekatan berbasis data mengumpulkan informasi seperti pekerjaan orang tua, penghasilan rata-rata, status tempat tinggal, jumlah tanggungan keluarga, dan riwayat pembayaran, yang dihimpun lewat formulir pendaftaran, survei berkala, atau kunjungan rumah yang dilakukan dengan sopan.</p>
  <p>Pendekatan kedua adalah observasi empatik, di mana guru dan wali kelas dibekali kepekaan membaca tanda perubahan pada siswa — misalnya absen yang tidak biasa, penurunan partisipasi orang tua, perubahan sikap siswa, atau komunikasi orang tua yang mulai tertutup — sebagai pintu masuk membuka dialog, bukan untuk langsung menagih. Dengan memadukan data objektif dan observasi empatik, sekolah bisa mengklasifikasikan pendekatan secara lebih bijak: keluarga yang benar-benar kesulitan diberi keringanan atau bantuan filantropi, keluarga dalam masa transisi diberi penundaan dan pendampingan, sementara keluarga yang mampu tapi belum sadar didekati dengan komunikasi persuasif dan edukasi. Pada akhirnya, memahami kondisi finansial bukan semata demi memudahkan penagihan, melainkan agar sekolah bisa berperan sebagai pendamping, bukan sekadar penagih.</p>

  <h4>D. Menawarkan Skema Pembayaran yang Fleksibel</h4>
  <p>Banyak tunggakan sesungguhnya lahir bukan dari ketidakmauan membayar, melainkan dari sistem pembayaran yang tidak sesuai dengan ritme keuangan keluarga — misalnya keluarga berpenghasilan harian atau musiman yang kesulitan memenuhi jadwal bulanan yang kaku. Skema angsuran atau cicilan ringan menjadi solusi paling umum, di mana total biaya dibagi menjadi beberapa tahap sesuai kemampuan, tanpa bunga atau denda tambahan (khususnya di sekolah Islam), disertai kesepakatan tertulis yang jelas. Skema kedua adalah potongan atau diskon pembayaran awal, sebagai bentuk apresiasi bagi orang tua yang membayar penuh di muka atau melunasi beberapa bulan sekaligus, sekaligus insentif yang mendorong kepatuhan jadwal.</p>
  <p>Skema ketiga adalah penjadwalan ulang sesuai siklus keuangan keluarga, membuka ruang dialog bagi orang tua yang penghasilannya musiman — misalnya pedagang yang bisa mencicil lebih banyak di bulan ramai dan lebih sedikit di bulan sepi — dengan catatan ini bukan kelonggaran permanen, melainkan komitmen baru yang disepakati bersama secara terbuka. Skema keempat, subsidi silang atau bantuan solidaritas, ditujukan bagi keluarga yang benar-benar kesulitan namun tetap ingin melanjutkan pendidikan anaknya, melalui dana bantuan sosial sekolah, beasiswa internal, atau dukungan sponsor eksternal. Keempat skema ini menunjukkan bahwa sekolah tidak semata berorientasi pada pendapatan, tetapi juga peduli pada keberlangsungan akses pendidikan bagi semua kalangan.</p>

  <h4>E. Memberikan Edukasi tentang Tanggung Jawab Pendidikan</h4>
  <p>Sebagian tunggakan terjadi bukan karena ketidakmampuan, melainkan karena orang tua belum sepenuhnya menyadari bahwa membayar iuran sekolah adalah bagian dari tanggung jawab bersama membangun pendidikan anak, bukan semata kewajiban administratif yang bisa ditunda. Edukasi yang efektif tidak boleh menggurui, menyudutkan, atau menyindir secara kasar — justru akan lebih mengena bila dikemas dengan bahasa yang menghargai niat baik orang tua, menyentuh sisi spiritual dan emosional, serta menunjukkan dampak nyata dari kontribusi mereka. Ketimbang kalimat yang menekan, sekolah bisa menyampaikan misalnya bahwa setiap kontribusi orang tua ikut membentuk akhlak, ilmu, dan masa depan anak-anak mereka — sebuah pengakuan yang jauh lebih membekas dibanding sekadar tagihan.</p>
  <p>Yang penting untuk dipahami, membentuk kesadaran orang tua bukan pekerjaan sekali jalan, melainkan proses jangka panjang yang menuntut konsistensi dan kesabaran — dimanfaatkan lewat berbagai momen yang tersedia, mulai dari daftar ulang, rapat orang tua, grup WhatsApp kelas, hingga laporan keuangan tahunan. Dengan konsistensi semacam ini, perlahan akan tumbuh budaya baru: kesadaran akan tanggung jawab pendidikan bukan karena takut ditagih, melainkan karena merasa ikut memiliki. Mengedukasi orang tua pada akhirnya bukan tugas tambahan bagi sekolah, melainkan bagian dari misi utamanya sebagai lembaga yang mendidik seluruh elemen yang terlibat — sekolah tidak hanya menanam ilmu pada siswa, tetapi juga menanam nilai pada keluarga.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima nilai Islam yang dibahas pada bab ini (keadilan tanpa menghakimi, empati dan tolong-menolong, menjaga kehormatan, amanah, dan ukhuwah), nilai mana yang menurut Anda paling sering terlewat dalam cara sekolah Anda selama ini menangani tunggakan — dan bagaimana cara memperbaikinya tanpa mengorbankan ketegasan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, nilai Islam yang paling relevan ketika sekolah dilarang menyebut nama orang tua yang menunggak di forum umum atau membuat suasana tidak nyaman di depan publik adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghidupkan amanah dan tanggung jawab</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjaga kehormatan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menumbuhkan ukhuwah dan kepedulian sosial</button>
  </div>
  <div class="quiz-q">
    <p>Seorang staf tata usaha mengirim pesan penagihan yang isinya hanya "Segera lunasi tunggakan Anda, jika tidak anak akan dikeluarkan dari kegiatan sekolah" kepada semua orang tua yang menunggak tanpa kecuali. Berdasarkan prinsip komunikasi efektif dan nilai-nilai Islam pada Bab 2, apa yang perlu diperbaiki dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena pesan tegas seperti ini adalah cara paling efektif untuk semua kasus tunggakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pesan tersebut cenderung menekan dan menyamaratakan semua kasus tanpa empati maupun personalisasi, padahal komunikasi yang baik perlu mempertimbangkan kondisi masing-masing keluarga dan disampaikan dengan bahasa yang santun dan tidak menghakimi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu-satunya masalah adalah pesan itu dikirim lewat WhatsApp, bukan lewat surat resmi</button>
  </div>
  <div class="quiz-q">
    <p>SD Al-Amin memiliki wali murid, seorang pedagang musiman, yang penghasilannya melonjak saat musim panen tapi sangat kecil di bulan-bulan lain, sehingga kesulitan membayar SPP bulanan secara rutin. Berdasarkan skema pembayaran fleksibel pada Bab 2, solusi paling sesuai adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap memaksakan jadwal bulanan yang sama seperti wali murid lainnya tanpa pengecualian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyusun penjadwalan ulang yang disesuaikan dengan siklus keuangan keluarga, misalnya mencicil lebih besar saat musim panen dan lebih kecil di bulan sepi, dengan kesepakatan tertulis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membebaskan wali murid tersebut dari seluruh kewajiban pembayaran tanpa kesepakatan apa pun</button>
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
<h2 class="reveal">Penguatan Sistem Pembayaran Sekolah</h2>
<p class="lede reveal">Sebagian besar tunggakan sesungguhnya bisa dicegah bukan lewat penagihan yang lebih gencar, melainkan lewat sistem pembayaran yang lebih modern, mudah diakses, dan ramah bagi semua kalangan orang tua.</p>

<div class="card reveal">
  <h4>A. Diversifikasi Metode Pembayaran</h4>
  <p>Salah satu penyebab tunggakan yang sering tidak disadari adalah minimnya kemudahan dalam sistem pembayaran sekolah. Banyak sekolah masih mengandalkan metode manual dan terbatas, misalnya hanya membuka pembayaran lewat kasir pada jam kerja, padahal gaya hidup digital sudah merambah hampir semua lapisan masyarakat. Diversifikasi metode pembayaran berarti menyediakan berbagai pilihan cara membayar yang mudah, aman, dan sesuai kebiasaan finansial masing-masing keluarga — semakin banyak pilihan yang tersedia, semakin kecil pula kemungkinan terjadi keterlambatan. QRIS menjadi salah satu opsi paling praktis karena orang tua tinggal memindai satu kode untuk membayar lewat e-wallet atau mobile banking, bisa diakses kapan saja, dan mendukung pencatatan otomatis yang meminimalkan kesalahan input.</p>
  <p>Transfer bank tetap relevan sebagai pilihan formal yang mudah dilacak, terutama untuk pembayaran besar seperti uang pangkal, dengan catatan sekolah perlu menyediakan rekening khusus atas nama lembaga (bukan rekening pribadi staf) demi menjaga kepercayaan dan legalitas. Skema auto-debit memberi kenyamanan bagi keluarga berpenghasilan tetap yang ingin menghindari keterlambatan karena lupa, dengan menarik dana otomatis sesuai jadwal yang disepakati bersama bank mitra. Sementara itu, opsi kasir tunai tetap perlu dipertahankan bagi orang tua yang belum terbiasa dengan metode digital, dan integrasi dengan platform manajemen keuangan digital memungkinkan orang tua melihat tagihan, riwayat pembayaran, dan notifikasi jatuh tempo secara real time dalam satu aplikasi. Pada akhirnya, diversifikasi ini bukan sekadar soal teknologi, melainkan soal aksesibilitas dan kenyamanan bagi seluruh orang tua dari berbagai latar belakang ekonomi dan sosial.</p>

  <h4>B. Kerjasama dengan Bank atau Lembaga Keuangan</h4>
  <p>Menggandeng institusi keuangan terpercaya — baik bank umum maupun lembaga keuangan syariah — memberi alternatif solusi yang lebih luas bagi orang tua, sekaligus meringankan beban sekolah dalam mengelola urusan keuangan secara langsung. Skema cicilan syariah menjadi bentuk kerja sama paling relevan untuk sekolah Islam, di mana orang tua bisa mengangsur biaya pendidikan tanpa bunga (riba), melainkan menggunakan sistem margin tetap yang disepakati di awal sesuai prinsip akad murabahah atau ijarah, tanpa denda berbunga saat terlambat namun tetap ada kesepakatan batas waktu yang jelas. Bagi sekolah, dana diterima penuh di awal dari lembaga keuangan sementara proses penagihan menjadi tanggung jawab mitra, sehingga sekolah bisa lebih fokus pada pelayanan pendidikan.</p>
  <p>Bentuk kerja sama kedua adalah menjalin relasi dengan lembaga penyedia beasiswa pendidikan, seperti BAZNAS, lembaga amil zakat, CSR perusahaan, atau koperasi syariah, terutama untuk siswa berprestasi atau dari kalangan kurang mampu, sehingga sekolah bisa memberi keringanan biaya tanpa harus mengambil dari kas internal. Bentuk ketiga, dana talangan pendidikan, adalah bantuan sementara dari lembaga keuangan untuk menalangi pembayaran biaya sekolah yang kemudian dicicil kembali oleh orang tua secara bertahap — cocok bagi keluarga yang mengalami krisis jangka pendek seperti PHK atau sakit berkepanjangan, termasuk dengan skema syariah seperti gardhul hasan atau pinjaman tanpa bunga yang digunakan secara selektif. Dalam semua bentuk kerja sama ini, sekolah wajib memastikan mitra keuangan terdaftar resmi, seluruh kesepakatan dituangkan dalam MoU tertulis, dan sosialisasi ke orang tua dilakukan secara transparan tanpa paksaan.</p>

  <h4>C. Digitalisasi Billing dan Pelaporan Keuangan</h4>
  <p>Sistem penagihan manual — mencatat di buku tulis, menyampaikan tagihan lewat kertas, atau menunggu orang tua datang ke kantor — sangat rentan terhadap kehilangan data, komunikasi yang tidak tersampaikan, dan kesulitan dalam rekap laporan. Digitalisasi billing mengubah cara kerja ini menjadi lebih sistematis, transparan, dan mudah diakses oleh semua pihak berkepentingan, sekaligus membangun kepercayaan orang tua terhadap profesionalisme sekolah. Langkah pertamanya adalah mengintegrasikan sistem penagihan dengan sistem keuangan sekolah secara menyeluruh, sehingga setiap transaksi tercatat dalam satu sistem yang saling terhubung — lengkap dengan dashboard keuangan yang bisa diakses staf dan pimpinan, rekap pembayaran per siswa atau per kelas, serta laporan berkala yang bisa dicetak otomatis.</p>
  <p>Langkah berikutnya adalah menyediakan akses langsung bagi orang tua untuk memantau status keuangan anak mereka melalui aplikasi billing pihak ketiga, portal keuangan sekolah, atau integrasi dengan bot WhatsApp yang mengirim notifikasi otomatis. Dengan sistem yang tertata, tunggakan bisa dikendalikan sejak dini, bukan baru disadari setelah menumpuk — dan sekolah dapat dengan mudah melihat data tunggakan secara menyeluruh sebagai dasar pengambilan keputusan yang lebih cepat dan akurat.</p>

  <h4>D. Reminder dan Notifikasi Berkala</h4>
  <p>Tidak semua orang tua mengingat jadwal pembayaran sekolah setiap bulan; sebagian hanya mengandalkan ingatan sendiri tanpa sistem pendukung, sehingga tanpa pengingat, potensi tunggakan tetap besar meski niat membayar sebenarnya ada. Reminder yang efektif memanfaatkan berbagai media secara terjadwal: WhatsApp sebagai media paling populer dan personal (bisa berupa teks, gambar, atau tagihan dalam bentuk PDF), SMS bagi orang tua yang kurang aktif di media digital, dan email untuk notifikasi yang lebih formal seperti tagihan bulanan lengkap. Idealnya, pengingat dikirim dalam tiga tahap — sekitar lima hingga tujuh hari sebelum jatuh tempo sebagai pemberitahuan awal, tepat di hari jatuh tempo sebagai pengingat utama, dan beberapa hari setelahnya dengan nada yang tetap sopan sebagai tindak lanjut.</p>
  <p>Kunci keberhasilan reminder terletak pada bahasa yang digunakan: hindari kalimat yang terkesan menekan seperti ancaman layanan dihentikan, dan gantilah dengan kalimat yang lebih humanis, misalnya menunjukkan pemahaman atas kesibukan orang tua sembari mengingatkan agar pembayaran tidak terlewat demi kelancaran proses belajar anak. Jika sekolah sudah menggunakan sistem billing digital, reminder bisa diatur otomatis dan terjadwal — lebih akurat, hanya menyasar yang belum membayar, dan tidak membebani staf untuk mengirim satu per satu secara manual. Reminder bukan sekadar alat teknis, melainkan bagian dari layanan komunikasi yang ramah dan edukatif — sekolah yang mengingatkan dengan adab akan selalu diingat dengan hormat oleh orang tua.</p>

  <h4>E. Insentif bagi Orang Tua yang Membayar Tepat Waktu</h4>
  <p>Selama ini banyak sekolah lebih fokus menangani orang tua yang menunggak, sementara orang tua yang taat dan selalu membayar tepat waktu justru luput dari perhatian, padahal merekalah tulang punggung stabilitas keuangan sekolah yang patut dihargai. Memberikan insentif bagi kedisiplinan bukan sekadar bentuk penghargaan, melainkan strategi jangka panjang yang terbukti lebih efektif daripada sanksi dalam membentuk kebiasaan baik dan mendorong orang tua lain mengikuti jejak yang sama. Bentuknya bisa beragam: diskon atau potongan biaya bagi yang membayar penuh di awal tahun atau tertib selama beberapa bulan berturut-turut, hadiah loyalitas non-finansial seperti sertifikat penghargaan atau merchandise sekolah, hingga apresiasi simbolik seperti penyebutan sebagai "Mitra Terbaik Sekolah" (tentu dengan izin dan tidak berlebihan) atau ucapan publik di media resmi sekolah.</p>
  <p>Yang perlu dijaga dalam pemberian insentif adalah prinsip keadilan dan keterbukaan — kriteria harus jelas sejak awal tahun ajaran, informasinya disampaikan merata ke semua orang tua, dan tidak menimbulkan kecemburuan sosial. Program insentif yang dikelola dengan baik akan membawa manfaat jangka panjang: menumbuhkan budaya disiplin dan saling percaya, meningkatkan retensi siswa karena orang tua merasa dihargai, serta mengurangi beban kerja tim keuangan dalam proses penagihan rutin. Menghargai orang tua yang membayar tepat waktu pada akhirnya bukan sekadar urusan ekonomi, melainkan bentuk nyata budaya profesional dan saling menghormati — orang tua yang dihargai akan menjadi mitra yang setia bagi sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima elemen penguatan sistem pembayaran pada bab ini (diversifikasi metode, kerja sama lembaga keuangan, digitalisasi billing, reminder berkala, dan insentif), elemen mana yang paling lemah di sekolah Anda saat ini — dan langkah kecil apa yang bisa mulai diterapkan bulan depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, sistem pembayaran syariah yang memungkinkan orang tua mengangsur biaya pendidikan tanpa bunga, melainkan dengan margin tetap yang disepakati di awal, disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Skema cicilan syariah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Skema auto-debit</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Skema insentif loyalitas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya mengirim satu kali pesan penagihan setelah tunggakan menumpuk tiga bulan, tanpa pernah mengirim pengingat sebelumnya. Orang tua pun merasa "diserang tiba-tiba" oleh tagihan besar. Berdasarkan prinsip reminder pada Bab 3, apa yang seharusnya dilakukan sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu mengubah apa pun, karena satu kali penagihan besar sudah cukup efektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengatur jadwal reminder bertahap sejak sebelum jatuh tempo hingga beberapa hari setelahnya, dengan bahasa yang sopan dan tidak menekan, agar orang tua tidak merasa "diserang" saat tunggakan sudah menumpuk</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh komunikasi dan menyerahkan sepenuhnya pada inisiatif orang tua</button>
  </div>
  <div class="quiz-q">
    <p>SMP Cendekia Insani ingin memberi insentif bagi orang tua yang tertib membayar, namun khawatir hal ini menimbulkan kecemburuan sosial di antara wali murid. Berdasarkan Bab 3, prinsip apa yang paling penting dijaga agar program insentif berjalan sehat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Merahasiakan kriteria insentif agar hanya diketahui oleh pihak sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menetapkan kriteria yang jelas dan terbuka sejak awal tahun ajaran, memastikan semua orang tua mendapat informasi yang sama, dan menjaga agar insentif bersifat universal serta bisa dicapai semua pihak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberikan insentif secara acak tanpa kriteria apa pun agar terkesan adil</button>
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
<h2 class="reveal">Membangun Kepercayaan melalui Pelayanan Prima</h2>
<p class="lede reveal">Tunggakan sering kali bukan sekadar soal kemampuan bayar, melainkan soal kepercayaan — dan kepercayaan itu dibangun lewat kualitas pelayanan yang dirasakan orang tua sehari-hari, mulai dari ruang kelas hingga hubungan sekolah dengan masyarakat luas.</p>

<div class="card reveal">
  <h4>A. Pelayanan Primer</h4>
  <p>Pelayanan primer adalah fondasi paling dasar sekaligus paling menentukan dalam persepsi masyarakat terhadap sebuah sekolah. Pilar pertamanya adalah guru yang berkualitas dan berintegritas — bukan hanya menguasai materi ajar dan pedagogi modern, tetapi juga berkepribadian mendidik, peduli terhadap siswa, dan terus mengembangkan diri lewat pelatihan atau komunitas belajar. Guru yang berkualitas menjadi magnet kepercayaan tersendiri bagi orang tua, karena mereka yakin anaknya berada di tangan pendidik yang tepat dan bertanggung jawab. Pilar kedua adalah sarana dan prasarana yang memadai — ruang kelas yang bersih dan nyaman, laboratorium serta perpustakaan yang berfungsi optimal, fasilitas ibadah dan area bermain yang layak, hingga akses teknologi pembelajaran yang terus diperbarui. Fasilitas yang terawat baik membuat orang tua merasa lebih percaya bahwa dana yang mereka bayarkan benar-benar digunakan untuk menjaga kualitas lingkungan belajar anak.</p>
  <p>Pilar ketiga, yang menjadi inti dari seluruh pelayanan sekolah, adalah pembelajaran yang efektif dan bermutu tinggi — kurikulum yang kontekstual dan adaptif, metode pengajaran yang inovatif seperti pembelajaran berbasis proyek atau diskusi aktif, penilaian yang adil dan transparan dengan umpan balik yang membangun, serta layanan tambahan seperti bimbingan belajar dan konseling bagi siswa yang membutuhkan perhatian khusus. Ketika siswa merasakan proses belajar yang bermakna dan orang tua melihat progres nyata pada anaknya, kepercayaan akan tumbuh secara alami dan menguat dari waktu ke waktu — sebab pada titik itu, orang tua tidak lagi membayar semata karena kewajiban, melainkan karena mereka meyakini sekolah adalah tempat terbaik bagi tumbuh kembang anaknya.</p>

  <h4>B. Pelayanan Sekunder</h4>
  <p>Jika pelayanan primer adalah fondasi akademik, pelayanan sekunder adalah wujud kepedulian sekolah terhadap perkembangan siswa secara holistik, melampaui sekadar nilai dan kurikulum. Ini mencakup dukungan bagi bakat dan minat siswa lewat kegiatan ekstrakurikuler yang beragam, layanan bimbingan konseling untuk membantu siswa mengelola tantangan emosional dan sosial, perhatian terhadap kesehatan dan kesejahteraan siswa lewat unit kesehatan sekolah, hingga penguatan karakter dan kegiatan keagamaan yang membentuk akhlak sehari-hari. Pelayanan sekunder inilah yang membuat siswa merasa betah dan dilihat sebagai pribadi utuh, bukan sekadar angka di rapor.</p>
  <p>Ketika pelayanan sekunder dijalankan secara aktif dan bermutu, dampaknya terasa jauh melampaui ruang kelas: siswa merasa betah dan termotivasi berkembang, orang tua melihat nilai tambah nyata dari biaya pendidikan yang mereka bayarkan, komunitas sekolah menjadi lebih hidup dan dinamis, dan pada akhirnya loyalitas terhadap sekolah meningkat — yang berbanding lurus dengan menurunnya angka tunggakan dan meningkatnya kepuasan orang tua. Sekolah yang unggul bukan hanya sekolah yang mencetak nilai akademik tinggi, melainkan sekolah yang menyentuh hati, menginspirasi, dan membentuk siswa menjadi manusia utuh yang siap menghadapi masa depan.</p>

  <h4>C. Pelayanan Tersier</h4>
  <p>Setelah pelayanan primer dan sekunder berjalan baik, sekolah perlu melangkah lebih jauh lewat pelayanan tersier — layanan yang berorientasi memperkuat hubungan eksternal dan membangun ekosistem pendidikan yang kolaboratif. Pilar pertamanya adalah komunikasi dan keterlibatan orang tua secara dua arah, lewat pertemuan rutin, laporan perkembangan belajar, dan forum komunikasi resmi, serta mengundang partisipasi aktif orang tua dalam komite sekolah maupun kegiatan bersama. Pilar kedua adalah kegiatan sosial dan kemasyarakatan, seperti bakti sosial, santunan, atau kolaborasi dengan komunitas lokal, yang tidak hanya mendidik pengetahuan tetapi juga mendidik hati dan kepedulian siswa terhadap sesama.</p>
  <p>Pilar ketiga adalah pengembangan program parenting, membantu orang tua meningkatkan kapasitas mendampingi anak lewat edukasi pola asuh, pelatihan manajemen emosi, atau kelas kolaboratif bersama psikolog dan praktisi pendidikan — sebab ketika orang tua diberdayakan, kolaborasi pendidikan antara rumah dan sekolah menjadi lebih solid, yang pada akhirnya mengurangi resistensi dan potensi tunggakan. Pilar keempat adalah kerja sama dengan berbagai pihak eksternal, mulai dari pemerintah daerah, universitas, dunia usaha, hingga tokoh masyarakat, yang membuka peluang peningkatan mutu sekaligus memperkuat citra positif sekolah di mata publik. Pelayanan tersier pada dasarnya membuktikan bahwa sekolah bukan hanya tempat belajar, melainkan pusat peradaban yang membentuk manusia dan merawat hubungan sosial yang sehat — dan ketika ketiga lapis pelayanan ini berjalan bersamaan, kepercayaan publik akan tumbuh dan terpelihara dengan kokoh, sehingga tunggakan pun secara alami menjadi persoalan yang lebih mudah dikelola.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga lapis pelayanan pada bab ini (primer, sekunder, tersier), lapis mana yang paling perlu diperkuat di sekolah Anda agar kepercayaan orang tua semakin kokoh — dan langkah konkret apa yang paling realistis dimulai dalam satu semester ke depan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan Bab 4, layanan bimbingan konseling dan kegiatan ekstrakurikuler yang mendukung perkembangan siswa secara holistik di luar akademik termasuk dalam kategori...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pelayanan primer</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pelayanan sekunder</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pelayanan tersier</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memiliki guru-guru berkualitas dan fasilitas lengkap, namun jarang melibatkan orang tua dalam kegiatan apa pun dan tidak pernah menjalin kerja sama dengan pihak luar. Berdasarkan Bab 4, lapis pelayanan apa yang paling perlu diperkuat sekolah tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pelayanan primer, karena guru dan fasilitas dianggap belum cukup baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu lapis pelayanan tambahan apa pun karena primer sudah sangat baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pelayanan tersier, karena sekolah belum membangun komunikasi dua arah dengan orang tua maupun kemitraan dengan pihak eksternal yang memperkuat ekosistem pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan pendidikan mengeluhkan tingginya tunggakan meski kurikulum akademiknya sudah unggul dan gedung sekolahnya megah. Berdasarkan keseluruhan Bab 4, kemungkinan besar akar masalah yang perlu ditelusuri terlebih dahulu adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kemungkinan ada kesenjangan pada pelayanan sekunder atau tersier — misalnya kurangnya perhatian holistik pada siswa atau lemahnya komunikasi dan keterlibatan orang tua — yang membuat orang tua belum merasakan nilai penuh dari biaya yang dibayarkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada hubungan sama sekali antara kualitas pelayanan sekolah dengan tingkat tunggakan orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu-satunya solusi adalah menaikkan biaya sekolah agar sebanding dengan fasilitas yang sudah megah</button>
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
<h2 class="reveal">SOP Penanganan Tunggakan Sekolah</h2>
<p class="lede reveal">Strategi sebaik apa pun akan berjalan timpang tanpa prosedur yang baku dan struktur kerja yang jelas — bab ini membahas bagaimana merancang alur, standar, dokumentasi, dan tim yang membuat penanganan tunggakan berjalan konsisten, adil, dan profesional.</p>

<div class="card reveal">
  <h4>A. Alur Proses Penanganan Tunggakan</h4>
  <p>Penanganan tunggakan tidak boleh dilakukan secara sporadis atau berdasarkan intuisi semata, melainkan mengikuti alur kerja sistematis yang bisa diterapkan konsisten dari kasus ke kasus. Tahap pertama adalah deteksi awal, yaitu memetakan siswa yang mulai menunjukkan tanda tunggakan lewat rekap bulanan status pembayaran, penyusunan kategori tingkat tunggakan, dan validasi data agar tidak terjadi salah informasi saat komunikasi berlangsung. Tahap kedua adalah komunikasi awal yang humanis dan personal — mengirim pengingat resmi lewat media yang sopan, dan bila belum ada respons, dilanjutkan dengan panggilan telepon atau undangan bicara langsung, dengan sikap mendengarkan penjelasan orang tua lebih dulu sebelum menekan atau menyalahkan.</p>
  <p>Tahap ketiga adalah tindakan lanjutan berupa solusi dan kesepakatan, seperti menyusun skema cicilan atau penjadwalan ulang, memberi subsidi silang bagi kategori ekonomi sangat sulit, melibatkan tim khusus atau konselor sekolah untuk kasus yang membutuhkan pendampingan emosional, hingga memberi peringatan resmi bila tidak ada iktikad baik — semuanya tetap dijalankan dengan keseimbangan antara ketegasan prosedural dan kelenturan empatik. Tahap keempat adalah dokumentasi dan monitoring berkala, mencatat setiap proses secara tertib agar konsisten, menjadi acuan saat terjadi pergantian personel, dan menjaga transparansi hubungan keuangan sekolah dengan wali murid. Tahap kelima, yang sering terlewat, adalah evaluasi dan refleksi akhir — menilai efektivitas pendekatan, respons orang tua, kelemahan sistem, dan performa tim, sebagai bahan pembelajaran berkelanjutan bagi sekolah.</p>

  <h4>B. Standarisasi Prosedur Operasional</h4>
  <p>Tanpa SOP yang baku, proses penanganan tunggakan rentan menjadi inkonsisten, subjektif, bahkan memicu konflik dengan orang tua. Karena itu, SOP perlu disusun sebagai dokumen resmi yang mudah dipahami seluruh tim — mulai dari bendahara, wali kelas, hingga staf administrasi — mencakup alur proses secara rinci, format dan standar komunikasi yang digunakan, serta contoh dokumen resmi seperti format surat pemberitahuan tunggakan dan surat kesepakatan pembayaran bertahap. Standarisasi waktu juga penting agar penanganan tidak reaktif: pengingat awal dikirim saat keterlambatan mencapai sekitar tujuh hari, surat pemberitahuan resmi menyusul pada hari keempat belas, dan tenggat waktu tanggapan diberikan sekitar tujuh hari kerja sebelum melangkah ke tindakan lanjutan.</p>
  <p>Meski bersifat baku, SOP tetap perlu ruang penyesuaian sesuai konteks masing-masing sekolah — jumlah siswa, lokasi geografis, akses teknologi, hingga kultur komunikasi wali murid — misalnya lebih mengandalkan kunjungan langsung di daerah dengan keterbatasan internet, namun prinsip dasarnya tetap sama: adil, transparan, dan manusiawi. Yang tidak kalah penting adalah dokumentasi dan pelaporan yang terstruktur, meliputi rekap tunggakan berkala, catatan komunikasi, surat resmi yang telah dikirim, kesepakatan pembayaran, dan laporan evaluasi — idealnya terintegrasi dalam sistem manajemen sekolah agar mudah diakses tim yang berwenang, sekaligus disampaikan secara berkala kepada pimpinan sebagai bahan penyusunan strategi preventif di tahun ajaran berikutnya.</p>

  <h4>C. Dokumentasi dan Evaluasi Berkala</h4>
  <p>Dokumentasi yang rapi bukan sekadar formalitas administratif, melainkan bekal penting bagi sekolah untuk mengambil keputusan berbasis data, bukan asumsi. Setiap tiga bulan sekali atau minimal per semester, sekolah sebaiknya melakukan evaluasi menyeluruh terhadap proses penanganan tunggakan, mencakup efektivitas surat peringatan, respons orang tua terhadap pendekatan tim, kesesuaian waktu pengingat dengan kemampuan bayar, jumlah tunggakan yang berhasil tertangani, hingga tantangan yang paling sering dihadapi tim di lapangan.</p>
  <p>Tujuan dari evaluasi berkala ini bukan sekadar menilai angka, melainkan mengidentifikasi pola masalah yang berulang — misalnya lonjakan kesulitan di awal tahun ajaran — sehingga SOP bisa disempurnakan dan pendekatan humanis bisa diperkuat tanpa mengorbankan keberlanjutan sekolah. Dengan sistem dokumentasi dan evaluasi yang konsisten, sekolah membangun tata kelola yang akuntabel dan transparan, sekaligus terus memperbaiki pendekatannya berdasarkan pembelajaran nyata dari lapangan, bukan sekadar mengulang kebiasaan lama yang belum tentu efektif.</p>

  <h4>D. Penunjukan PIC dan Struktur Kerja Tim</h4>
  <p>Sekuat dan serapi apa pun SOP yang disusun, tanpa penanggung jawab yang jelas pelaksanaannya akan terhambat, tumpang tindih, bahkan tidak berjalan sama sekali. Karena itu, setiap sekolah perlu menunjuk satu Person in Charge (PIC) yang bertanggung jawab penuh dalam pengelolaan tunggakan, dengan kriteria memiliki integritas dan komunikasi yang baik, dipercaya pimpinan, memahami sistem keuangan sekolah, serta mampu bekerja dengan data dan menyusun laporan. Tugas utamanya mencakup memastikan seluruh proses berjalan sesuai SOP, mencatat dan mengarsipkan komunikasi, menjadi kontak utama bagi orang tua yang ingin berkonsultasi, dan menyusun laporan bulanan kepada pimpinan.</p>
  <p>PIC tidak bekerja sendirian, melainkan didukung tim lintas fungsi yang terdiri dari staf keuangan, staf administrasi, wakil kepala sekolah atau kesiswaan sebagai mediator ke wali kelas, guru sebagai penghubung langsung ke orang tua, hingga konselor sekolah untuk kasus sosial tertentu. Agar semua tindakan tetap terarah, perlu alur koordinasi internal yang jelas — siapa menghubungi siapa, kapan informasi disampaikan ke PIC, dan bagaimana hasil komunikasi didokumentasikan — yang bisa dibantu lewat grup koordinasi digital dan rekap mingguan. PIC juga wajib melaporkan secara berkala kepada kepala sekolah atau yayasan, mencakup rekap jumlah dan nilai tunggakan, kasus yang membutuhkan atensi khusus, serta evaluasi pendekatan yang sudah dijalankan. Strategi tanpa struktur akan gagal, namun struktur yang kuat menjadikan strategi berjalan efisien dan membawa hasil yang nyata.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda saat ini sudah memiliki SOP tertulis dan PIC yang jelas untuk penanganan tunggakan, atau masih dilakukan secara ad hoc oleh siapa pun yang kebetulan berhubungan dengan orang tua? Apa risiko konkret dari kondisi yang ada saat ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan Bab 5, tahap pertama dalam alur proses penanganan tunggakan yang bersifat administratif namun menjadi dasar penentuan strategi berikutnya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Deteksi awal: identifikasi dan validasi data</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Evaluasi dan refleksi akhir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pemberian peringatan resmi kepada orang tua</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memiliki SOP tunggakan yang lengkap di atas kertas, tetapi dalam praktiknya siapa pun staf yang kebetulan berpapasan dengan orang tua bisa saja menagih dengan caranya sendiri, tanpa koordinasi yang jelas. Berdasarkan Bab 5, apa akar masalah utamanya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">SOP yang dimiliki sekolah terlalu detail dan sebaiknya dihapus saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tidak adanya PIC dan struktur kerja tim yang jelas, sehingga pelaksanaan SOP menjadi tidak terkoordinasi meski dokumennya sudah lengkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Masalahnya murni soal orang tua yang tidak kooperatif, bukan soal sistem internal sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Yayasan pendidikan mengevaluasi bahwa penanganan tunggakan di sekolahnya berjalan baik di bulan-bulan awal, tapi kualitasnya menurun drastis setiap kali terjadi pergantian staf tata usaha, karena informasi kasus sering hilang begitu saja. Berdasarkan Bab 5, komponen apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meniadakan pergantian staf tata usaha sama sekali agar informasi tidak pernah hilang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Dokumentasi dan pelaporan yang terstruktur serta terintegrasi dalam sistem, sehingga rekam jejak kasus tidak bergantung pada ingatan satu orang staf saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh proses evaluasi berkala karena dianggap tidak berpengaruh terhadap masalah ini</button>
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
<h2 class="reveal">Strategi Penanganan Tunggakan</h2>
<p class="lede reveal">Setelah struktur dan SOP terbentuk, sekolah perlu strategi konkret yang berjalan setiap hari — mulai dari rutinitas bulanan, respons terhadap momen khusus, hingga gerakan filantropi yang menjangkau siswa yatim dan dhuafa dengan penuh kehormatan.</p>

<div class="card reveal">
  <h4>A. Strategi Rutin Bulanan</h4>
  <p>Penanganan tunggakan tidak bisa dilakukan mendadak atau menunggu masalah membesar, melainkan membutuhkan ritme bulanan yang konsisten sebagai deteksi dini sekaligus pengingat sopan. Setiap awal bulan, tim keuangan memutakhirkan data tunggakan dan mengirim pemberitahuan lewat media yang mudah diakses, berisi jumlah dan periode tunggakan, tanggal jatuh tempo, metode pembayaran yang tersedia, dan informasi bantuan bila ada kesulitan — semuanya disampaikan dengan bahasa yang santun, bukan mengancam. Penagihan pun perlu dijalankan secara persuasif dan bermartabat: petugas terlatih menggunakan bahasa hangat, berupaya memahami latar belakang keterlambatan lewat dialog dua arah, dan membangun hubungan saling percaya agar orang tua lebih terbuka terhadap solusi yang ditawarkan.</p>
  <p>Selain menagih, sekolah juga perlu menyediakan ruang solusi dan konsultasi keuangan — penjadwalan ulang pembayaran, program cicilan tanpa bunga yang disepakati tertulis, keringanan lewat dana sosial, hingga kolaborasi dengan lembaga keuangan untuk dana talangan syariah. Edukasi kesadaran tetap perlu berjalan rutin lewat sosialisasi di rapat orang tua atau media digital sekolah, sementara reminder otomatis yang tetap terasa personal — misalnya menyertakan nama anak dalam pesan — membuat pengingat lebih menyentuh. Di penghujung bulan, tim menyusun laporan ringkas berisi jumlah siswa yang masih menunggak, progres dibanding bulan lalu, kendala yang dihadapi, dan rekomendasi strategi bulan berikutnya, sebagai bahan evaluasi berkelanjutan bagi pimpinan sekolah. Menagih dengan santun pada dasarnya adalah bentuk edukasi karakter itu sendiri — bukan hanya soal uang, melainkan soal adab dan tanggung jawab bersama.</p>

  <h4>B. Strategi Insidentil</h4>
  <p>Berbeda dari strategi rutin, strategi insidentil merespons momen atau situasi tertentu yang punya dampak psikologis kuat bagi siswa dan orang tua, dan dijalankan bukan dengan pendekatan punitif, melainkan sebagai bagian dari mekanisme penyadaran bersama. Beberapa momen sekolah yang bernilai emosional tinggi bisa dimanfaatkan secara arif untuk mendorong penyelesaian tunggakan: kegiatan field trip misalnya bisa dikaitkan dengan kondisi pembayaran, dengan syarat kebijakan disampaikan jauh-jauh hari, disediakan opsi cicilan agar tidak menjadi beban mendadak, dan tersedia alternatif kegiatan di sekolah bagi yang tidak ikut serta tanpa mempermalukan siapa pun.</p>
  <p>Momen ujian tengah dan akhir semester juga bisa dikaitkan dengan status pembayaran, namun kebijakan ini wajib diiringi pemberitahuan tertulis jauh sebelumnya, disampaikan dengan empati dan opsi alternatif bagi yang benar-benar kesulitan, misalnya lewat surat komitmen pelunasan sebagai syarat mengikuti ujian. Begitu pula pembagian rapor dan kenaikan kelas bisa menjadi momentum persuasi yang efektif, selama tetap disertai ajakan komunikasi yang solutif, bukan sekadar penahanan dokumen tanpa penjelasan. Prinsip utama strategi insidentil adalah menjaga keseimbangan antara ketegasan administratif dan penghormatan terhadap martabat siswa dan orang tua — momen-momen penting sekolah semestinya menjadi pintu masuk dialog, bukan alat tekanan semata.</p>

  <h4>C. Strategi Filantropi dan Solidaritas Sosial</h4>
  <p>Ketika strategi administratif dan komunikasi persuasif belum cukup menjangkau keluarga yang benar-benar kesulitan, strategi filantropi menjadi jalan keluar yang adil dan manusiawi. Program beasiswa internal, yang dananya bersumber dari komunitas sekolah sendiri — iuran sukarela, infak Jumat, atau kotak solidaritas kelas — membantu siswa yang mengalami kesulitan finansial sementara maupun permanen, disalurkan dengan prinsip kehati-hatian dan menjaga martabat penerima. Wakaf pendidikan menjadi strategi jangka panjang yang lebih strategis, di mana dana pokok tidak boleh habis dan hasil pengembangannya digunakan untuk membiayai siswa yang membutuhkan, misalnya lewat program "Dana Abadi Pendidikan" yang dikelola bersama nazhir profesional.</p>
  <p>Membangun jejaring donatur tetap dan alumni juga menjadi sumber kekuatan sosial jangka panjang, lewat database alumni yang terorganisir, kanal donasi tetap via auto-debit atau QRIS, serta laporan berkala tentang dampak bantuan mereka agar kepercayaan donatur terus terjaga. Kolaborasi dengan lembaga amil zakat seperti BAZNAS atau lembaga zakat lokal membuka sumber bantuan tanpa membebani anggaran sekolah, selama data siswa mustahik disusun valid dan sesuai syarat penerima zakat. Event penggalangan dana insidentil — konser amal, lelang karya siswa, bazar Ramadan, atau crowdfunding daring — menjadi cara kreatif menggalang dana sekaligus melibatkan siswa sebagai bagian dari pembelajaran karakter berbagi. Tunggakan pada akhirnya tak selalu diselesaikan dengan tagihan, kadang justru diselesaikan dengan tangan yang terulur dan komunitas yang peduli.</p>

  <h4>D. Strategi Khusus bagi Siswa Yatim dan Dhuafa</h4>
  <p>Dalam Islam, anak yatim dan kaum dhuafa memiliki kedudukan yang istimewa, sehingga memperhatikan mereka bukan sekadar tugas sosial, melainkan amanah spiritual. Langkah awalnya adalah pendataan yang objektif dan manusiawi — menyusun kriteria yang jelas untuk kategori yatim dan dhuafa, bekerja sama dengan RT/RW atau lembaga sosial setempat untuk verifikasi, serta membangun basis data yang rahasia demi menjaga martabat siswa. Setelah itu, sekolah bisa menetapkan skema bantuan khusus: pembebasan atau keringanan biaya sesuai kapasitas dana bantuan, subsidi silang dari iuran solidaritas wali murid mampu atau unit zakat internal, hingga layanan pendampingan seperti konseling emosional dan bimbingan belajar yang diberikan tanpa diskriminasi.</p>
  <p>Yang tidak boleh dilupakan, penanganan ini harus berbasis kasih sayang dan penjagaan harga diri — anak yatim dan dhuafa tidak boleh dipermalukan atau menerima perlakuan berbeda dari guru, teman, maupun staf, dan bantuan sebaiknya disampaikan secara personal, bukan diumumkan di forum umum. Dana filantropi bisa diarahkan secara terfokus lewat beasiswa yatim dan dhuafa, program sponsorship "orang tua asuh" bagi wali murid yang mampu, maupun event penggalangan dana khusus, yang semuanya dikelola secara transparan dan dilaporkan rutin kepada donatur. Program ini juga perlu dipantau keberlanjutannya lewat laporan berkala tentang perkembangan akademik dan sosial penerima manfaat, serta evaluasi tahunan yang melibatkan alumni dan mitra eksternal. Memperhatikan siswa yatim dan dhuafa secara sungguh-sungguh bukan sekadar menyelesaikan tunggakan, melainkan turut membangun peradaban yang luhur.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat strategi pada bab ini (rutin bulanan, insidentil, filantropi, dan khusus yatim-dhuafa), strategi mana yang belum pernah dijalankan sama sekali di sekolah Anda — dan siapa pihak internal atau eksternal yang bisa mulai diajak berkolaborasi untuk mewujudkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan Bab 6, strategi jangka panjang berbasis aset atau dana yang hasil pengembangannya digunakan untuk membiayai siswa tidak mampu, dengan dana pokok yang tidak boleh habis, disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Strategi rutin bulanan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Wakaf pendidikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Strategi insidentil</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menerapkan kebijakan menahan kartu ujian siswa yang orang tuanya menunggak, tanpa pemberitahuan sebelumnya dan tanpa opsi solusi apa pun, sehingga siswa mendadak tidak bisa ikut ujian di hari-H. Berdasarkan prinsip strategi insidentil pada Bab 6, apa yang salah dari penerapan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang salah, karena menahan kartu ujian adalah cara paling efektif menekan tunggakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kebijakan itu diterapkan tanpa pemberitahuan jauh-jauh hari maupun opsi solusi alternatif, padahal strategi insidentil mensyaratkan pemberitahuan awal dan kelonggaran seperti surat komitmen pelunasan agar tetap menjaga martabat siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Masalahnya hanya soal waktu ujian yang kurang tepat, bukan soal prosedur pemberitahuan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa yatim di sebuah sekolah Islam menerima bantuan biaya pendidikan, namun pihak sekolah mengumumkan namanya sebagai "penerima bantuan yatim" di depan seluruh siswa saat apel pagi. Berdasarkan Bab 6, apa yang seharusnya diperbaiki dari praktik ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki, karena pengumuman terbuka justru meningkatkan transparansi program bantuan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bantuan bagi siswa yatim dan dhuafa seharusnya disampaikan secara personal dan rahasia, bukan diumumkan di forum umum, demi menjaga kasih sayang dan harga diri siswa yang menerima</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya menghentikan seluruh program bantuan bagi siswa yatim dan dhuafa</button>
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
<h2 class="reveal">Penguatan Tim Penanganan Tunggakan</h2>
<p class="lede reveal">Sekuat apa pun strategi yang dirancang, keberhasilannya pada akhirnya bergantung pada manusia yang menjalankannya — bab penutup ini membahas bagaimana melatih, memotivasi, dan mendukung tim agar penanganan tunggakan berjalan berkelanjutan, bukan sekadar proyek sesaat.</p>

<div class="card reveal">
  <h4>A. Pelatihan dan Pengembangan Kapasitas Tim</h4>
  <p>Mengelola tunggakan sekolah tidak cukup bermodal keberanian menyampaikan nominal tagihan; tugas ini menuntut kemampuan komunikasi yang cermat dan pemahaman terhadap dinamika psikologis orang tua yang sering kali sensitif — tersinggung, defensif, bahkan menolak berkomunikasi. Tanpa bekal yang memadai, petugas bisa terjebak pada komunikasi yang kaku atau memicu konflik yang sebenarnya bisa dihindari. Pelatihan komunikasi persuasif menjadi materi pertama yang penting diberikan, mencakup teknik berbicara efektif dan meyakinkan, bahasa tubuh dan intonasi yang mencerminkan empati, serta strategi membangun kedekatan dan rasa percaya dengan orang tua lewat pendekatan berbasis solusi, bukan sekadar penyampaian fakta tagihan.</p>
  <p>Materi kedua adalah mediasi dan negosiasi, mengingat tim sering harus menjadi penengah antara kepentingan sekolah dan kondisi orang tua — meliputi prinsip dasar netralitas, teknik mendengarkan aktif dan reflektif, serta strategi menawarkan opsi solusi yang saling menguntungkan lewat simulasi dialog untuk situasi yang berpotensi konflik. Materi ketiga, manajemen konflik, membekali tim untuk mengenali potensi gesekan sejak dini, sebab konflik bisa muncul kapan saja jika komunikasi tidak terjaga atau ekspektasi kedua pihak tidak terpenuhi. Pelatihan bukan kegiatan sekali jalan, melainkan investasi berkelanjutan yang membuat tim lebih percaya diri, lebih santun dalam menyampaikan informasi, lebih tenang mengelola situasi emosional, dan pada akhirnya menjaga citra baik sekolah dalam setiap interaksi dengan orang tua.</p>

  <h4>B. Membangun Budaya Kerja Positif</h4>
  <p>Selain kemampuan teknis, tim penanganan tunggakan membutuhkan budaya kerja yang sehat agar dapat bertahan menghadapi tekanan pekerjaan yang penuh nuansa emosional. Budaya kerja positif ditandai dengan semangat kolaborasi lintas peran — bendahara, wali kelas, dan pimpinan saling mendukung, bukan saling melempar tanggung jawab ketika menghadapi kasus yang sulit — serta keterbukaan untuk saling berbagi strategi dan belajar dari kasus yang berhasil maupun yang masih menemui jalan buntu. Suasana kerja yang saling menguatkan, bukan saling menyalahkan, membuat anggota tim lebih berani mengambil inisiatif dan lebih tenang menghadapi penolakan dari orang tua.</p>
  <p>Bagian penting dari budaya kerja positif ini adalah menumbuhkan semangat keberpihakan pada siswa, memastikan bahwa hak-hak siswa tetap terlindungi di tengah proses penanganan tunggakan. Tim perlu menjaga kerahasiaan data tunggakan siswa agar tidak menjadi bahan perbincangan atau stigma, menghindari perlakuan diskriminatif seperti mengucilkan siswa dari kegiatan tertentu, menyampaikan setiap pesan dengan kasih sayang, dan memosisikan diri sebagai jembatan antara orang tua dan sekolah — bukan sekadar "penagih", melainkan pihak yang mengupayakan solusi bersama demi keberlangsungan pendidikan anak. Budaya keberpihakan semacam ini menjadi landasan moral yang menjaga proses penanganan tunggakan tetap berada dalam koridor adab dan nilai-nilai pendidikan Islam.</p>

  <h4>C. Sistem Penghargaan dan Apresiasi Tim</h4>
  <p>Memberikan apresiasi kepada tim bukan sekadar formalitas, melainkan cara menghargai dedikasi mereka dalam menghadapi pekerjaan yang penuh tekanan, sekaligus mendorong motivasi, loyalitas, dan semangat mencari solusi kreatif yang humanis. Bentuk penghargaan bisa beragam: penghargaan bulanan atau kuartalan bagi tim atau individu yang berhasil menyelesaikan sejumlah kasus secara efektif, sertifikat atau piagam apresiasi yang disampaikan dalam rapat internal, bonus atau insentif finansial bila anggaran memungkinkan, pujian terbuka di forum internal, hingga reward personal seperti kesempatan mengikuti pelatihan pengembangan diri.</p>
  <p>Agar penghargaan terasa adil, sekolah perlu menetapkan indikator penilaian yang objektif — jumlah kasus yang berhasil diselesaikan, kecepatan merespons data tunggakan, tingkat kepuasan orang tua dari hasil komunikasi, inisiatif dalam menyusun strategi preventif, hingga kolaborasi lintas unit dalam menangani kasus sulit — yang dievaluasi berkala oleh kepala sekolah dan tim keuangan yayasan. Lebih dari sekadar hadiah, sistem apresiasi yang sehat membangun budaya saling menghargai: penghargaan tidak bersifat kompetitif ekstrem, semua anggota tim merasa dilibatkan meski tidak menjadi "pemenang", dan pengakuan bisa datang bukan hanya dari atasan, tetapi juga dari sesama rekan kerja. Apresiasi hanya berdampak jangka panjang bila dilakukan konsisten dan didukung penuh oleh manajemen, termasuk dengan mengalokasikan anggaran rutin meski dalam skala simbolis.</p>

  <h4>D. Dukungan dari Manajemen Sekolah</h4>
  <p>Sebaik apa pun strategi dan sekuat apa pun tim pelaksana, tanpa dukungan nyata dari manajemen dan yayasan, upaya penanganan tunggakan akan cenderung berjalan sporadis dan rawan menemui jalan buntu. Dukungan ini dimulai dari kepemimpinan yang suportif — kepala sekolah dan yayasan memberi mandat yang jelas kepada tim untuk bekerja secara terstruktur, mendukung secara moral saat tim menghadapi penolakan, serta menjadi teladan dalam komunikasi yang empatik dan menjaga marwah institusi. Kepemimpinan suportif bukan berarti turut campur dalam teknis harian, melainkan menciptakan atmosfer kerja yang aman dan jelas arah kebijakannya.</p>
  <p>Dukungan kedua berupa penganggaran yang realistis dan berkelanjutan — alokasi dana rutin untuk pelatihan tim, insentif dan reward, cadangan dana sosial atau filantropi internal, hingga biaya kolaborasi dengan mitra eksternal seperti lembaga keuangan syariah atau amil zakat, yang semestinya dipandang sebagai investasi menjaga stabilitas lembaga, bukan beban tambahan. Dukungan ketiga adalah kebijakan lembaga yang tertulis dan disosialisasikan dengan baik, seperti SOP resmi, kebijakan fleksibilitas pembayaran, dan sistem pelaporan berkala, sehingga tindakan tim memiliki dasar kelembagaan yang kuat, bukan sekadar keputusan sepihak. Dukungan keempat adalah kolaborasi lintas unit — guru, bagian akademik dan kesiswaan, hingga komite sekolah — agar beban penanganan tunggakan tidak terasa berat sebelah, melainkan menjadi tanggung jawab institusional bersama. Ketika manajemen sekolah suportif, cerdas, dan kolaboratif, tim penanganan tunggakan dapat bekerja lebih efektif dan terhormat, dan sekolah pun tumbuh sebagai institusi pendidikan yang profesional, manusiawi, dan bertanggung jawab.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat aspek penguatan tim pada bab ini (pelatihan, budaya kerja positif, sistem penghargaan, dan dukungan manajemen), aspek mana yang paling minim mendapat perhatian di sekolah Anda saat ini — dan siapa yang perlu diajak bicara pertama kali untuk mulai memperbaikinya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan Bab 7, materi pelatihan yang membekali tim menjadi penengah netral antara kepentingan sekolah dan kondisi orang tua, lengkap dengan teknik mendengarkan aktif, disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Komunikasi persuasif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mediasi dan negosiasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sistem penghargaan dan apresiasi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anggota tim penanganan tunggakan sering membicarakan status keuangan siswa tertentu kepada guru lain di ruang guru, bahkan sesekali terdengar oleh siswa lain. Berdasarkan Bab 7, prinsip budaya kerja apa yang telah dilanggar dalam situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak melanggar prinsip apa pun, karena berbagi informasi antarguru dianggap wajar demi kelancaran koordinasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip keberpihakan pada siswa dilanggar, khususnya soal menjaga kerahasiaan data tunggakan agar siswa tidak menjadi bahan perbincangan atau mengalami stigma di lingkungan sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Yang dilanggar hanya soal etika berbicara di ruang guru, tidak berkaitan dengan penanganan tunggakan sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah yayasan memiliki tim penanganan tunggakan yang terlatih baik dan kreatif, namun setiap kali tim mengusulkan program bantuan sosial atau pelatihan tambahan, pimpinan yayasan selalu menolak dengan alasan anggaran, tanpa pernah mendiskusikan alternatif. Berdasarkan Bab 7, apa yang paling perlu diperbaiki dalam situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tim sebaiknya berhenti mengusulkan program apa pun dan hanya fokus menagih secara manual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Dukungan manajemen berupa penganggaran yang realistis dan kepemimpinan yang suportif perlu diperkuat, karena tanpa dukungan anggaran dan kebijakan yang memadai, strategi dan tim sekuat apa pun akan sulit berkembang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Yayasan sudah bertindak benar karena anggaran memang tidak boleh dialokasikan untuk hal-hal semacam ini</button>
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

  <div class="assess-q" data-correct="3">
    <p>Berdasarkan Bab 1, tunggakan yang sudah berlangsung lebih dari 6 bulan dan berpotensi mengindikasikan hilangnya niat melanjutkan sekolah di tempat tersebut tergolong sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tunggakan ringan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tunggakan sedang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tunggakan berat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali murid tampak berkecukupan dan anaknya ikut semua kegiatan berbayar, namun sudah menunggak lima bulan sambil menghindari komunikasi. Berdasarkan Bab 1, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung mengumumkan nama wali murid tersebut di grup WhatsApp kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melakukan observasi dan komunikasi personal untuk memahami akar masalahnya sebelum menentukan pendekatan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh layanan sekolah kepada anak tersebut tanpa pemberitahuan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 1, penyebab tunggakan yang muncul karena orang tua kecewa terhadap fasilitas atau kebijakan sekolah, sehingga menunda pembayaran sebagai bentuk "protes diam-diam", termasuk kategori...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketidakpuasan terhadap pelayanan sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesulitan ekonomi keluarga semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem pembayaran yang terlalu fleksibel</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 2, nilai Islam yang paling relevan ketika sekolah dilarang menyebut nama penunggak di forum umum atau membuat suasana tidak nyaman di depan publik adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghidupkan amanah dan tanggung jawab</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menjaga kehormatan orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menumbuhkan ukhuwah dan kepedulian sosial</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah SD memiliki wali murid pedagang musiman yang penghasilannya melonjak saat panen namun kecil di bulan lain. Berdasarkan Bab 2, skema pembayaran paling sesuai adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap memaksakan jadwal bulanan yang sama tanpa pengecualian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penjadwalan ulang sesuai siklus keuangan keluarga, dengan kesepakatan tertulis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membebaskan seluruh kewajiban pembayaran tanpa kesepakatan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 2, edukasi tentang tanggung jawab pendidikan akan lebih efektif apabila dikemas dengan bahasa yang...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghargai niat baik orang tua serta menyentuh sisi spiritual dan emosional mereka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggurui dan menyindir agar orang tua merasa malu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bersifat teknis administratif semata tanpa menyentuh nilai apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 3, sistem pembayaran syariah yang memungkinkan orang tua mengangsur biaya pendidikan tanpa bunga, melainkan dengan margin tetap yang disepakati di awal, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Skema cicilan syariah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Skema auto-debit</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Skema insentif loyalitas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah hanya mengirim satu kali pesan penagihan setelah tunggakan menumpuk tiga bulan, membuat orang tua merasa "diserang tiba-tiba". Berdasarkan Bab 3, yang seharusnya dilakukan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diubah, karena satu kali penagihan besar sudah cukup efektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengatur jadwal reminder bertahap sejak sebelum jatuh tempo dengan bahasa yang sopan dan tidak menekan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh komunikasi dan menyerahkan pada inisiatif orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 3, agar program insentif bagi orang tua yang tertib membayar tidak menimbulkan kecemburuan sosial, prinsip yang paling penting dijaga adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kriteria yang jelas dan terbuka sejak awal tahun ajaran, dengan informasi yang merata ke semua orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merahasiakan kriteria insentif agar hanya diketahui pihak sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan insentif secara acak tanpa kriteria apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 4, layanan bimbingan konseling dan kegiatan ekstrakurikuler yang mendukung perkembangan siswa secara holistik di luar akademik termasuk kategori...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelayanan primer</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelayanan sekunder</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelayanan tersier</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah memiliki guru berkualitas dan fasilitas lengkap, namun jarang melibatkan orang tua dan tidak pernah bekerja sama dengan pihak eksternal. Berdasarkan Bab 4, lapis pelayanan yang paling perlu diperkuat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelayanan primer, karena guru dan fasilitas dianggap belum cukup baik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu lapis pelayanan tambahan apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pelayanan tersier, karena belum ada komunikasi dua arah dengan orang tua maupun kemitraan eksternal</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 5, tahap pertama dalam alur proses penanganan tunggakan yang menjadi dasar penentuan strategi komunikasi berikutnya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deteksi awal: identifikasi dan validasi data</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi dan refleksi akhir</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pemberian peringatan resmi kepada orang tua</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah memiliki SOP tunggakan lengkap di atas kertas, tetapi pelaksanaannya di lapangan tidak terkoordinasi karena siapa pun staf bisa menagih dengan caranya sendiri. Berdasarkan Bab 5, akar masalahnya adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">SOP yang dimiliki terlalu detail dan sebaiknya dihapus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak adanya PIC dan struktur kerja tim yang jelas sehingga pelaksanaan SOP tidak terkoordinasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Masalahnya murni soal orang tua yang tidak kooperatif</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah yayasan mendapati kualitas penanganan tunggakan menurun drastis setiap kali terjadi pergantian staf tata usaha karena informasi kasus sering hilang. Berdasarkan Bab 5, yang paling perlu diperkuat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meniadakan pergantian staf tata usaha sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dokumentasi dan pelaporan yang terstruktur serta terintegrasi dalam sistem</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh proses evaluasi berkala</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 6, strategi jangka panjang berbasis aset atau dana yang hasil pengembangannya digunakan membiayai siswa tidak mampu, dengan dana pokok yang tidak boleh habis, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Strategi rutin bulanan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Wakaf pendidikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Strategi insidentil</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah menahan kartu ujian siswa yang orang tuanya menunggak tanpa pemberitahuan sebelumnya dan tanpa opsi solusi apa pun. Berdasarkan Bab 6, yang salah dari penerapan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah, karena menahan kartu ujian paling efektif menekan tunggakan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebijakan diterapkan tanpa pemberitahuan awal maupun opsi solusi alternatif, padahal strategi insidentil mensyaratkan keduanya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Masalahnya hanya soal waktu ujian yang kurang tepat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Bantuan biaya pendidikan bagi siswa yatim diumumkan secara terbuka di depan seluruh siswa saat apel pagi. Berdasarkan Bab 6, yang seharusnya diperbaiki adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu diperbaiki karena pengumuman terbuka meningkatkan transparansi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bantuan bagi siswa yatim dan dhuafa seharusnya disampaikan secara personal dan rahasia untuk menjaga harga diri siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah seharusnya menghentikan seluruh program bantuan bagi siswa yatim dan dhuafa</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 7, materi pelatihan yang membekali tim menjadi penengah netral antara kepentingan sekolah dan kondisi orang tua, lengkap dengan teknik mendengarkan aktif, disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi persuasif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mediasi dan negosiasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem penghargaan dan apresiasi</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anggota tim membicarakan status keuangan siswa tertentu di ruang guru hingga terdengar oleh siswa lain. Berdasarkan Bab 7, prinsip budaya kerja yang dilanggar adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak melanggar apa pun karena berbagi informasi antarguru dianggap wajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip keberpihakan pada siswa, khususnya menjaga kerahasiaan data tunggakan agar siswa tidak mengalami stigma</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Yang dilanggar hanya etika berbicara di ruang guru</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah yayasan memiliki tim penanganan tunggakan yang terlatih baik, namun setiap usulan program bantuan sosial selalu ditolak pimpinan yayasan dengan alasan anggaran tanpa diskusi alternatif. Berdasarkan Bab 7, yang paling perlu diperbaiki adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tim sebaiknya berhenti mengusulkan program apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dukungan manajemen berupa penganggaran yang realistis dan kepemimpinan yang suportif perlu diperkuat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Yayasan sudah bertindak benar karena anggaran tidak boleh dialokasikan untuk hal semacam ini</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
