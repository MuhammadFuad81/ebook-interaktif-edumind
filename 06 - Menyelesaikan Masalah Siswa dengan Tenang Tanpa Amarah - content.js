/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Menyelesaikan Masalah Siswa Dengan Tenang Tanpa Amarah"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-masalah-siswa-tanpa-amarah.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Tanda-Tanda Masalah Siswa</h2>
<p class="lede reveal">Sebelum bisa mendampingi dengan tenang, guru dan orang tua perlu lebih dulu peka membaca sinyal yang ditunjukkan anak — karena di balik perilaku yang terlihat "bermasalah", hampir selalu ada kebutuhan atau kesulitan yang belum sempat mereka ungkapkan dengan kata-kata.</p>

<div class="card reveal">
  <h4>A. Perubahan Perilaku dan Suasana Hati</h4>
  <p>Salah satu sinyal paling mudah diamati adalah perubahan perilaku dan suasana hati siswa. Penarikan diri adalah contohnya: pada tahap ringan, siswa mungkin masih mau bergaul dengan beberapa teman dekat namun tidak seaktif biasanya; pada tahap sedang, ia mulai memilih menyendiri dan menghindari interaksi sosial; sedangkan pada tahap yang lebih berat, ia bahkan menolak pergi ke sekolah atau ikut kegiatan bersama sama sekali. Tanda-tandanya bisa berupa menghindari kontak mata, duduk sendirian saat makan siang, atau menghabiskan waktu luang bermain gawai seorang diri — dan bila dibiarkan, penarikan diri ini berisiko memicu kesulitan belajar, rasa kesepian, hingga meningkatkan kerentanan menjadi korban bullying.</p>
  <p>Di sisi lain, ada siswa yang justru menunjukkan agresivitas — baik secara verbal (menghina, mengancam), fisik (memukul, mendorong), maupun nonverbal (tatapan tajam, merusak barang). Semakin sering dan semakin intens kemunculannya, semakin besar pula risiko yang menyertainya: renggangnya hubungan dengan teman sebaya, sanksi dari sekolah, hingga potensi terlibat perilaku berisiko di kemudian hari. Penting diingat, agresivitas hampir selalu adalah bahasa tubuh dari sesuatu yang lebih dalam — bukan sekadar "nakal" tanpa sebab.</p>
  <p>Kecemasan dan depresi juga kerap muncul lewat kombinasi gejala fisik dan emosional. Kecemasan bisa terlihat dari keluhan sakit kepala atau sakit perut, jantung berdebar, sulit tidur, perasaan gelisah, hingga sulit berkonsentrasi — yang bila dibiarkan dapat menurunkan prestasi belajar dan mempersulit sosialisasi. Depresi punya wajah yang sedikit berbeda: kesedihan berkepanjangan, kehilangan minat pada hal yang dulu disukai, perubahan nafsu makan dan pola tidur, serta perasaan tidak berharga. Tidak semua siswa yang menunjukkan satu-dua tanda ini sedang mengalami masalah serius, tetapi begitu beberapa tanda muncul bersamaan dan bertahan lama, guru dan orang tua perlu mengambil langkah: mengajak bicara dengan tenang, mengamati lebih saksama, berkoordinasi antara sekolah dan rumah, serta melibatkan psikolog atau konselor bila diperlukan.</p>

  <h4>B. Kesulitan Belajar</h4>
  <p>Kesulitan belajar biasanya tampak lewat penurunan prestasi akademik — baik yang terjadi bertahap (konsisten dari waktu ke waktu) maupun yang naik-turun tidak menentu (fluktuatif). Selain nilai yang menurun, siswa dengan kesulitan belajar sering terlihat bingung dan frustrasi saat mengikuti pelajaran, butuh waktu lebih lama memahami konsep baru, serta kesulitan menyelesaikan tugas tertulis maupun tugas kelompok. Di baliknya, sering ada persoalan yang lebih mendasar: keterampilan mengatur waktu belajar yang belum terbentuk, mudah teralihkan perhatian, atau kesulitan mengingat dan memproses informasi baru.</p>
  <p>Beberapa jenis kesulitan belajar yang paling umum dijumpai di sekolah adalah disleksia (kesulitan membaca dan menulis), ADHD (kesulitan berkonsentrasi disertai hiperaktivitas), autisme (memengaruhi komunikasi dan interaksi sosial), serta diskalkulia (kesulitan dengan konsep matematika). Karena gejalanya bisa tumpang tindih dengan sekadar "malas" atau "kurang minat", guru dan orang tua perlu melakukan observasi yang cermat: mengamati pola belajar siswa dari waktu ke waktu, mengajaknya bicara tentang apa yang ia rasakan saat belajar, berkomunikasi dengan orang tua soal kebiasaan belajar di rumah, dan bila perlu berkolaborasi dengan psikolog atau guru pembimbing khusus untuk mendapatkan gambaran yang lebih akurat sebelum menentukan langkah bantuan yang tepat.</p>

  <h4>C. Masalah Sosial dan Keluhan Fisik</h4>
  <p>Dalam ranah sosial, siswa yang kesulitan bergaul biasanya menampakkan pola yang bertingkat: dari sekadar sulit menjalin pertemanan baru, merasa kesepian karena lingkaran pertemanan yang sangat sempit, hingga benar-benar terisolasi dari teman sebaya. Tanda-tandanya bisa berupa kesulitan memulai percakapan, tidak pernah diajak dalam kegiatan kelompok, atau justru menjadi sasaran ejekan. Bila dibiarkan, kesulitan bergaul ini berdampak pada konsentrasi belajar dan menambah beban emosional yang mereka pikul sendirian.</p>
  <p>Keluhan fisik sering menjadi "bahasa tubuh" dari beban emosional yang belum bisa diungkapkan siswa secara verbal — sakit perut, sakit kepala, mual, hingga kelelahan berlebihan yang membuat mereka sulit berkonsentrasi atau bahkan sering izin tidak masuk sekolah. Penyebabnya beragam: stres akibat tekanan belajar atau bullying, kurang tidur, atau memang ada kondisi kesehatan yang mendasarinya seperti alergi atau asma. Karena keluhan semacam ini gampang disalahartikan sebagai "cari alasan", penting bagi guru dan orang tua untuk tidak buru-buru menyimpulkan, melainkan mengamati polanya, berbicara dari hati ke hati, dan bila perlu berkonsultasi dengan tenaga medis maupun psikolog untuk memastikan penyebab sesungguhnya.</p>

  <h4>D. Penurunan Prestasi Akademik dan Ketidaknyamanan Emosional</h4>
  <p>Penurunan prestasi akademik dan ketidaknyamanan emosional sering muncul berdampingan, sebab keduanya sama-sama berakar dari beban batin yang belum tersalurkan. Ketidaknyamanan emosional pada anak jarang diungkapkan secara langsung — mereka jarang berkata "saya sedang stres" — melainkan tampak lewat perilaku yang tampak sepele namun sebenarnya adalah sinyal: tiba-tiba menarik diri dari pergaulan, ledakan emosi yang tidak sebanding dengan pemicunya (marah besar karena hal kecil, menangis tiba-tiba), perubahan raut wajah dan bahasa tubuh yang lesu atau gelisah, keluhan samar seperti "malas sekolah" atau "nggak enak hati" tanpa alasan jelas, kehilangan minat pada aktivitas favoritnya, hingga rasa takut atau cemas berlebihan terhadap hal-hal yang sebenarnya biasa saja.</p>
  <p>Ledakan emosi yang tidak wajar sering kali hanyalah puncak gunung es dari tekanan yang selama ini dipendam siswa. Karena itu, guru dan orang tua perlu menahan diri untuk tidak buru-buru memberi label seperti "anak malas" atau "cari perhatian" — sebab bisa jadi mereka sendiri sedang kesulitan memahami dan mengungkapkan apa yang mereka rasakan. Tugas orang dewasa di sekitarnya bukan menghakimi, melainkan membantu mereka menenangkan diri, mengenali emosinya sendiri, dan mendampingi mereka mencari jalan keluar tanpa amarah dan tanpa terburu-buru.</p>

  <h4>E. Perubahan Pola Tidur dan Makan</h4>
  <p>Tidur dan makan adalah dua kebutuhan dasar yang sangat sensitif terhadap kondisi emosional anak, sehingga perubahan signifikan pada keduanya sering menjadi penanda awal yang mudah diamati. Sulit tidur atau sering terbangun di tengah malam bisa menandakan kecemasan atau pikiran yang mengganggu, sementara tidur berlebihan justru bisa menjadi tanda stres berat atau gejala depresi — semacam cara anak "melarikan diri" dari dunia yang terasa berat baginya. Pada sisi makan, nafsu makan yang menurun drastis biasanya berkaitan dengan kecemasan atau kesedihan mendalam, sedangkan makan berlebihan (emotional eating, terutama camilan manis) bisa menjadi pelampiasan dari stres yang tidak tersalurkan. Perubahan ini kerap disertai keluhan fisik seperti sakit perut atau pusing tanpa sebab medis yang jelas.</p>
  <p>Ketika mendapati perubahan semacam ini, penting bagi guru dan orang tua untuk tidak langsung menegur atau memaksa. Pendekatan yang lebih tepat adalah mendekati anak dengan tenang, mengajaknya bicara dengan penuh empati, dan mencari tahu apa yang sesungguhnya sedang terjadi di baliknya. Tubuh anak sering memberi sinyal lewat kebiasaan paling dasar seperti tidur dan makan — dan yang paling mereka butuhkan biasanya bukan instruksi atau hukuman, melainkan ruang aman untuk merasa didengar.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Coba ingat satu siswa atau anak yang pernah menunjukkan salah satu tanda pada bab ini — misalnya menarik diri, prestasi yang menurun mendadak, atau perubahan pola makan/tidur. Respons seperti apa yang biasanya Anda berikan saat itu, dan setelah membaca bab ini, adakah cara membaca sinyal tersebut yang ingin Anda ubah ke depannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, ledakan emosi yang tidak wajar pada anak (marah berlebihan karena hal kecil, menangis tiba-tiba) paling tepat dipahami sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">"Puncak gunung es" dari tekanan yang selama ini dipendam dan belum bisa diungkapkan dengan kata-kata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Bukti bahwa anak tersebut memang berwatak pemarah sejak lahir</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hal yang tidak perlu diperhatikan karena akan hilang dengan sendirinya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru melihat siswanya belakangan sering izin sakit perut menjelang jam pelajaran matematika, padahal hasil pemeriksaan dokter tidak menemukan masalah medis. Guru itu langsung menyimpulkan siswa tersebut "cari alasan supaya tidak belajar". Berdasarkan bab ini, apa yang sebaiknya dilakukan guru sebelum menarik kesimpulan seperti itu?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap pada kesimpulan awal karena hasil medis sudah menyatakan tidak ada masalah fisik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengamati polanya lebih lanjut, mengajak bicara dengan tenang, dan mempertimbangkan bahwa keluhan fisik bisa jadi sinyal stres atau kecemasan yang belum terungkap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberi hukuman agar siswa jera dan berhenti mengeluh sakit perut</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa kelas 5 yang biasanya ceria mulai sering menyendiri saat istirahat, kehilangan minat pada menggambar (hobi favoritnya), dan dua minggu terakhir nilainya turun drastis. Ia hanya menjawab singkat "nggak apa-apa" saat ditanya guru. Berdasarkan bab ini, langkah paling tepat yang sebaiknya diambil guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkannya karena setiap anak wajar mengalami naik-turun mood sesekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memberi label "anak malas" di depan kelas agar ia termotivasi memperbaiki nilainya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memperhatikan pola perubahan ini sebagai kumpulan tanda yang saling berkaitan, lalu mengamati lebih lanjut, berkomunikasi dengan orang tua, dan bila perlu melibatkan konselor sekolah</button>
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
<h2 class="reveal">Faktor-faktor yang Mempengaruhi Masalah Siswa</h2>
<p class="lede reveal">Mengenali tanda-tanda saja tidak cukup — untuk bisa mendampingi dengan tepat, guru dan orang tua perlu memahami akar penyebabnya, yang secara garis besar berasal dari dua arah: dari dalam diri siswa sendiri (faktor internal) dan dari lingkungan di sekitarnya (faktor eksternal).</p>

<div class="card reveal">
  <h4>A. Faktor Internal</h4>
  <p>Inteligensi adalah salah satu faktor internal paling mendasar. Kemampuan intelektual yang berbeda-beda pada tiap siswa memengaruhi seberapa cepat dan seberapa dalam mereka memahami suatu materi, sementara bakat luar biasa maupun minat yang kuat pada suatu bidang bisa menjadi pedang bermata dua — di satu sisi memicu motivasi dan prestasi tinggi, di sisi lain berpotensi menimbulkan tekanan ekspektasi, ketidakseimbangan antar mata pelajaran, hingga kesulitan bersosialisasi bila siswa merasa "berbeda" dari teman-temannya. Kondisi seperti disleksia, ADHD, autisme, atau diskalkulia juga tergolong faktor inteligensi yang perlu dikenali sejak dini, karena dengan dukungan dan intervensi yang tepat, siswa dengan kondisi ini tetap bisa berkembang optimal — bahkan banyak tokoh dunia dengan kondisi serupa yang justru mencapai kesuksesan luar biasa di bidangnya.</p>
  <p>Kepribadian turut membentuk cara siswa belajar. Siswa introver cenderung nyaman belajar mandiri namun mudah lelah dalam situasi sosial yang ramai, sedangkan siswa ekstrover lebih menyukai belajar berkelompok namun mudah teralihkan perhatiannya. Tingkat kesadaran diri, ketekunan, dan optimisme siswa juga sangat memengaruhi bagaimana mereka menghadapi kesulitan belajar — siswa dengan kesadaran diri tinggi dan sikap tekun cenderung lebih mudah bangkit, sementara siswa yang mudah menyerah dan pesimis lebih rentan terjebak dalam masalah berkepanjangan. Ditambah lagi, setiap siswa memiliki gaya belajar yang berbeda (visual, auditori, atau kinestetik), sehingga metode pengajaran yang tidak mengakomodasi gaya belajar mereka bisa memicu kebosanan dan penurunan prestasi meski sebenarnya siswa tersebut mampu.</p>
  <p>Kematangan emosi dan sosial siswa turut menentukan bagaimana ia menghadapi tekanan, mengelola kekecewaan, dan menjalin hubungan dengan teman sebaya — siswa yang belum matang secara emosional cenderung lebih mudah meledak atau justru menutup diri saat menghadapi masalah. Sementara itu, kesehatan fisik dan mental menjadi fondasi yang tidak boleh diabaikan: kondisi fisik yang kurang sehat bisa membuat anak mudah lelah dan sulit berkonsentrasi, sedangkan masalah kesehatan mental seperti kecemasan, stres, atau depresi sering muncul dalam wujud yang sulit dikenali — menarik diri, mudah marah, atau tampak tidak bersemangat — dan bisa dipicu oleh tekanan rumah, bullying di sekolah, atau pengalaman traumatis yang belum terselesaikan. Pemeriksaan rutin, komunikasi terbuka, dan kepekaan guru serta orang tua terhadap perubahan sekecil apa pun menjadi kunci mendeteksi persoalan ini lebih dini.</p>

  <h4>B. Faktor Eksternal</h4>
  <p>Keluarga adalah lingkungan pertama tempat anak belajar tentang dunia, sehingga dukungan emosional (merasa dicintai dan didengar), dukungan instrumental (fasilitas belajar yang memadai), serta keterlibatan aktif orang tua sangat menentukan kesiapan emosional anak untuk belajar. Sebaliknya, konflik rumah tangga, kekerasan, kesulitan ekonomi, perceraian, atau kehilangan orang tua bisa menjadi pukulan emosional besar yang berdampak langsung pada konsentrasi, prestasi, dan kestabilan perilaku anak di sekolah. Ekspektasi orang tua pun perlu dikelola secara bijak — harapan yang realistis dan disertai bimbingan akan memotivasi, sementara ekspektasi yang berlebihan tanpa dukungan justru memicu rasa takut gagal dan tekanan berkepanjangan.</p>
  <p>Sekolah, sebagai rumah kedua anak, memberi pengaruh besar lewat tiga elemen: kualitas dan kepedulian guru, beban tugas yang diberikan, serta iklim belajar secara keseluruhan. Guru yang menguasai materi, inspiratif, dan mengenal siswanya secara personal mampu menumbuhkan motivasi belajar yang tinggi, sementara beban tugas yang berlebihan atau tidak relevan dengan kehidupan siswa justru memicu kejenuhan dan menurunkan semangat belajar. Lingkungan sosial dan budaya yang lebih luas — termasuk akses pendidikan yang tidak merata dan kesenjangan kualitas antarsekolah — juga ikut membentuk peluang dan tantangan yang dihadapi tiap siswa secara berbeda-beda.</p>
  <p>Teman sebaya memiliki pengaruh yang tidak bisa dianggap remeh, terutama lewat tekanan sosial (peer pressure) yang membuat anak sulit berkata "tidak" meski tahu suatu tindakan salah, maupun penolakan sosial yang bisa memicu turunnya rasa percaya diri, kecemasan, hingga penurunan prestasi drastis. Menghadapi hal ini, pendekatan yang dianjurkan adalah membangun komunikasi terbuka tanpa menghakimi, melatih kepercayaan diri anak, mengajak refleksi (bukan menyalahkan), serta melibatkan kegiatan positif dan guru BK bila diperlukan. Terakhir, komunitas dan media sosial kini menjadi "dunia kedua" bagi anak — bisa menjadi sumber dukungan dan pembelajaran positif bila lingkungannya sehat, tetapi juga berpotensi menjadi ladang pengaruh negatif (konten kekerasan, perbandingan hidup yang memicu rasa rendah diri) bila tanpa pendampingan. Program edukasi kolaboratif, penyediaan kegiatan positif, keterlibatan orang tua yang seimbang (mengawasi tanpa mengontrol berlebihan), serta konseling bila diperlukan adalah kombinasi strategi yang paling efektif menghadapinya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari dua kelompok faktor (internal dan eksternal) yang dibahas di bab ini, faktor mana yang menurut Anda paling sering luput diperhatikan ketika seorang siswa di lingkungan Anda dianggap "bermasalah" — dan bagaimana cara menggali faktor tersebut secara lebih cermat sebelum menilai anak?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, faktor internal yang memengaruhi masalah siswa mencakup empat hal utama, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Inteligensi, kepribadian, emosi dan kematangan sosial, serta kesehatan fisik dan mental</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keluarga, sekolah, teman sebaya, dan media sosial</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum, fasilitas sekolah, dan anggaran pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa berbakat luar biasa di bidang musik mulai menunjukkan tanda kelelahan, mengabaikan mata pelajaran lain, dan merasa berbeda dari teman-temannya karena jadwal latihannya yang padat. Berdasarkan Bab 2, apa yang sedang terjadi pada siswa ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang perlu dikhawatirkan karena bakat luar biasa selalu berdampak positif tanpa risiko apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bakat luar biasa yang dimilikinya sedang menimbulkan dampak negatif berupa tekanan, ketidakseimbangan belajar, dan kesulitan bersosialisasi, sehingga perlu dukungan agar tetap seimbang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa tersebut sebaiknya berhenti total dari kegiatan musik agar fokus akademik saja</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa SMP tiba-tiba berubah drastis mengikuti gaya bicara dan perilaku sekelompok teman baru yang sering membolos, meski dalam hati ia merasa tidak nyaman melakukannya. Berdasarkan Bab 2, pendekatan paling tepat bagi guru atau orang tua adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung melarang keras pertemanan tersebut tanpa penjelasan agar anak segera menjauh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membangun komunikasi terbuka tanpa menghakimi, melatih kepercayaan diri anak untuk berani berkata tidak, dan mengajaknya refleksi tentang dampak tindakannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena tekanan teman sebaya adalah hal yang wajar dan tidak perlu direspons</button>
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
<h2 class="reveal">Membangun Koneksi Emosional dengan Anak/Siswa</h2>
<p class="lede reveal">Sebelum kita bisa membimbing, menasihati, atau memperbaiki perilaku anak, kita perlu lebih dulu membangun hubungan emosional yang kuat dengannya — sebab anak tidak akan mudah terbuka, apalagi mendengarkan, bila ia merasa tidak dimengerti.</p>

<div class="card reveal">
  <h4>A. Pentingnya Koneksi Sebelum Koreksi</h4>
  <p>Kita sering tergoda untuk segera membetulkan sikap anak begitu melihat perilaku yang keliru. Padahal, koreksi tanpa koneksi hanya akan membuat anak merasa dihakimi, tidak aman, atau justru bersikap defensif. Prinsip "koneksi sebelum koreksi" berarti kita perlu menyentuh hati anak terlebih dahulu sebelum menyampaikan nasihat — anak yang merasa dipahami akan jauh lebih terbuka untuk mendengar dan berubah, sementara anak yang langsung disalahkan cenderung menutup diri. Sebagai contoh sederhana, alih-alih bertanya "kamu kenapa sih selalu bikin masalah?", pendekatan yang lebih membangun koneksi adalah "kamu kelihatan sedang kesal, mau cerita dulu?" — kalimat kecil semacam ini membuat anak merasa dihargai dan lebih siap menerima arahan yang akan kita sampaikan setelahnya.</p>

  <h4>B. Teknik Mendengarkan Aktif</h4>
  <p>Mendengarkan aktif bukan sekadar mendengar dengan telinga, melainkan mendengarkan dengan hati — fokus penuh, tanpa menghakimi, dan diniatkan untuk benar-benar memahami. Langkah-langkahnya sederhana namun berdampak besar: menatap mata anak dengan tenang tanpa kesan mengintimidasi, menghentikan aktivitas lain saat anak sedang bicara sebagai bukti bahwa ia penting bagi kita, menunjukkan empati lewat ekspresi wajah dan bahasa tubuh, serta mengulangi atau memparafrasekan ucapan anak untuk memastikan kita memahaminya dengan benar, misalnya "jadi kamu kesal karena temanmu mengambil bukumu tanpa izin, ya?". Dengan mendengarkan secara aktif, anak merasa didengar dan dipahami, sehingga kepercayaannya tumbuh dan ia menjadi lebih mudah terbuka menyampaikan perasaan atau masalah yang sesungguhnya sedang ia hadapi.</p>

  <h4>C. Validasi Emosi Anak</h4>
  <p>Tanpa sadar, orang dewasa sering menolak atau meremehkan emosi anak lewat kalimat seperti "ah, masa begitu saja nangis?", "gitu aja marah, lebay deh", atau "udah, nggak usah sedih". Kalimat-kalimat semacam ini membuat anak merasa emosinya tidak penting, padahal semua emosi — marah, sedih, takut, kecewa — adalah wajar dan perlu diakui keberadaannya. Memvalidasi emosi anak berarti mengakui apa yang ia rasakan, tidak buru-buru menyuruhnya diam atau berhenti merasa, dan tidak terburu-buru memberi solusi sebelum benar-benar hadir dan menerima perasaannya terlebih dahulu — misalnya dengan berkata "wajar kok kamu merasa marah kalau diperlakukan seperti itu" atau "Ibu tahu kamu sedih, dan itu tidak apa-apa". Lewat validasi semacam ini, anak belajar mengenali emosinya sendiri, merasa aman, dan tidak takut untuk jujur tentang apa yang sesungguhnya ia rasakan.</p>

  <h4>D. Menjadi Dewasa Emosional Sebagai Teladan</h4>
  <p>Anak belajar bukan dari apa yang kita katakan, melainkan dari cara kita bersikap — mereka mengamati dan meniru bagaimana orang dewasa di sekitarnya mengelola emosi. Menjadi dewasa secara emosional berarti mampu tetap tenang saat anak sedang marah atau berulah, tidak terpancing membalas teriakan dengan teriakan, serta menyadari emosi diri sendiri dan mengelolanya dengan bijak. Mengatur emosi bukanlah tanda kelemahan, melainkan justru kekuatan besar yang menunjukkan bahwa kita mampu membimbing dengan kasih, bukan dengan kemarahan — dan koneksi emosional yang terbangun dari sikap semacam ini menjadi jembatan menuju perubahan perilaku yang alami, bukan karena anak takut, melainkan karena ia merasa dihargai.</p>

  <h4>E. Mengatur Diri Sebelum Mengatur Anak</h4>
  <p>Sebelum bisa membimbing anak mengelola emosinya, orang dewasa perlu terlebih dahulu memastikan dirinya sendiri berada dalam kondisi tenang dan siap. Anak yang sedang marah atau rewel membutuhkan sosok pendamping yang stabil, bukan yang justru ikut terpancing emosi. Mengenali kondisi diri sendiri — apakah sedang lelah, terburu-buru, atau sedang menyimpan kekesalan dari hal lain — adalah langkah awal yang penting sebelum merespons perilaku anak, karena reaksi yang lahir dari emosi yang belum diatur cenderung berujung pada kata-kata atau tindakan yang disesali kemudian. Dengan mengatur diri lebih dulu, guru dan orang tua bisa hadir sebagai sosok yang benar-benar membimbing, bukan sekadar bereaksi terhadap situasi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kelima langkah membangun koneksi emosional pada bab ini (koneksi sebelum koreksi, mendengarkan aktif, validasi emosi, teladan dewasa emosional, mengatur diri), langkah mana yang paling jarang Anda praktikkan selama ini — dan situasi seperti apa yang bisa menjadi tempat pertama Anda mencobanya minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, prinsip "koneksi sebelum koreksi" mengajarkan bahwa...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kita perlu menyentuh hati anak dan membuatnya merasa dipahami terlebih dahulu, sebelum menyampaikan nasihat atau koreksi atas perilakunya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Koreksi harus selalu dilakukan secepat mungkin tanpa basa-basi agar anak segera memahami kesalahannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak tidak perlu pernah dikoreksi selama kita sudah membangun kedekatan dengannya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ayah berkata kepada anaknya yang menangis karena kalah lomba, "Ah, gitu aja nangis, lebay deh." Berdasarkan konsep validasi emosi pada Bab 3, apa dampak yang paling mungkin muncul dari respons ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak akan langsung berhenti menangis dan merasa lebih kuat secara mental</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Anak bisa merasa emosinya tidak penting atau tidak diterima, sehingga ke depannya lebih sulit terbuka mengungkapkan perasaannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena kalimat seperti ini adalah bentuk motivasi yang efektif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa sangat lelah dan kesal setelah rapat panjang, lalu masuk kelas dan mendapati seorang siswa ribut. Ia hampir membentak, tetapi menyadari emosinya sedang tidak stabil, menarik napas sejenak, dan baru menegur siswa dengan nada tenang. Berdasarkan Bab 3, tindakan guru ini paling menggambarkan penerapan langkah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Validasi emosi anak semata, tanpa kaitan dengan pengaturan diri guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengatur diri sebelum mengatur anak, yaitu memastikan kondisi emosi diri sendiri stabil terlebih dahulu sebelum merespons perilaku siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mendengarkan aktif, karena guru menahan diri untuk tidak berbicara sama sekali</button>
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
<h2 class="reveal">Strategi Spesifik Untuk Mengatasi Masalah Siswa</h2>
<p class="lede reveal">Setelah memahami tanda-tanda dan faktor penyebabnya, bab ini menawarkan strategi yang lebih konkret dan spesifik untuk setiap jenis persoalan yang umum dihadapi siswa — mulai dari bullying hingga tantangan akademik sehari-hari.</p>

<div class="card reveal">
  <h4>A. Bullying</h4>
  <p>Bullying adalah tindakan intimidasi yang dilakukan berulang dengan tujuan menyakiti atau merugikan orang lain, dan bisa berbentuk fisik, verbal, emosional, maupun online. Dampaknya bisa dirasakan oleh korban maupun pelaku: korban berisiko mengalami penurunan rasa percaya diri, depresi dan kecemasan, kesulitan belajar, hingga pikiran menyakiti diri sendiri, sementara pelaku juga membutuhkan pendampingan agar polanya tidak berulang atau berkembang menjadi perilaku yang lebih merugikan di kemudian hari. Penanganan bullying membutuhkan kerja sama banyak pihak: orang tua perlu berkomunikasi terbuka dengan anak tentang bullying, mengajarkan cara menghadapinya, membangun rasa percaya diri anak, serta memantau aktivitas online mereka; sekolah dan komunitas perlu bekerja sama membangun edukasi pencegahan; sementara korban bullying perlu dibantu mencari dukungan dari orang dewasa yang tepercaya dan tidak dibiarkan menghadapinya sendirian.</p>

  <h4>B. Kesulitan Belajar</h4>
  <p>Kesulitan belajar bisa disebabkan berbagai faktor — keterlambatan perkembangan, disabilitas belajar spesifik, kurangnya motivasi, masalah kesehatan mental, atau lingkungan belajar yang kurang mendukung — dan bila dibiarkan berdampak pada penurunan prestasi, hilangnya minat belajar, serta menurunnya rasa percaya diri siswa. Strategi penanganannya perlu disesuaikan dengan jenis kesulitannya: untuk disleksia, metode pembelajaran multisensori dan teknologi bantu seperti text-to-speech sangat membantu; untuk disgrafia, alat tulis yang sesuai kebutuhan serta latihan menulis yang teratur menjadi kunci; sementara secara umum, memberi waktu tambahan menyelesaikan tugas, memecah instruksi menjadi bagian-bagian kecil, dan melibatkan layanan bimbingan konseling sekolah dapat sangat meringankan beban siswa yang mengalaminya.</p>

  <h4>C. ADHD dan Autisme</h4>
  <p>ADHD ditandai dengan hiperaktivitas (gelisah, sulit diam, berbicara tanpa henti) dan impulsivitas (bertindak tanpa berpikir, menyela orang lain), yang bila tidak ditangani dapat memicu kesulitan belajar, masalah sosial, dan menurunnya rasa percaya diri siswa. Modifikasi yang membantu di kelas mencakup menempatkan siswa di area yang tenang dan minim gangguan, memberi instruksi singkat dan jelas yang dipecah dalam beberapa langkah, serta menyesuaikan cara penilaian — misalnya memberi waktu tambahan atau menilai berdasarkan kemajuan, bukan semata hasil akhir. Autisme, di sisi lain, adalah gangguan perkembangan saraf yang memengaruhi cara berkomunikasi dan berinteraksi sosial, ditandai kesulitan memahami bahasa nonverbal, kecenderungan perilaku berulang, dan minat yang terpaku pada hal tertentu. Terapi perilaku kognitif (CBT) dan Applied Behavior Analysis (ABA) dapat membantu siswa belajar keterampilan sosial baru, sementara di sekolah, lingkungan yang terstruktur, penggunaan alat bantu visual, serta rutinitas yang konsisten sangat membantu siswa dengan autisme belajar dan berkembang optimal — bahkan mencapai kesuksesan luar biasa di bidang yang mereka tekuni.</p>

  <h4>D. Depresi, Kecemasan, dan Gangguan Kesehatan Mental Lain</h4>
  <p>Depresi ditandai kesedihan berkepanjangan, kehilangan minat, perubahan nafsu makan dan tidur, serta kesulitan berkonsentrasi, sedangkan kecemasan ditandai kekhawatiran berlebihan disertai gejala fisik seperti sakit kepala dan jantung berdebar. Keduanya bila tidak tertangani berisiko menurunkan prestasi belajar dan rasa percaya diri secara signifikan. Penanganannya membutuhkan pendekatan berlapis: terapi (seperti CBT untuk mengelola pikiran dan perasaan, atau terapi interpersonal untuk membangun relasi yang lebih sehat), pendampingan medis bila diperlukan, serta penyesuaian di sekolah berupa dukungan emosional, waktu tambahan mengerjakan tugas, dan lingkungan belajar yang terasa aman. Gangguan kesehatan mental yang lebih luas — termasuk gangguan bipolar, obsesif-kompulsif, atau stres pascatrauma — juga menuntut penilaian dan diagnosis profesional sejak dini, sebab semakin cepat dikenali, semakin besar peluang siswa mendapatkan penanganan yang tepat sebelum kondisinya memberat.</p>

  <h4>E. Masalah Akademik</h4>
  <p>Menghadapi masalah akademik, strategi perlu dipetakan dari dua arah sekaligus. Dari sisi faktor internal, langkah pertama adalah mengidentifikasi akar masalah lewat tes diagnostik, observasi, dan wawancara dengan siswa maupun orang tua, kemudian memberikan intervensi berupa bimbingan belajar yang sesuai gaya belajar siswa, membangun motivasi lewat metode pembelajaran yang menarik dan tujuan belajar yang realistis, serta memperkuat kemampuan dasar seperti membaca, menulis, berhitung, berpikir kritis, dan daya ingat. Dari sisi faktor eksternal, sekolah perlu memastikan komunikasi yang baik antara guru, orang tua, dan siswa, mendukung lingkungan belajar yang kondusif baik di rumah maupun di sekolah, serta menyediakan guru yang berkualitas dan layanan bimbingan konseling yang mudah diakses. Yang terpenting, pendekatan yang digunakan haruslah individual — sebab setiap siswa punya kebutuhan dan gaya belajar yang berbeda, sehingga guru, orang tua, dan psikolog perlu bekerja sama merancang program yang benar-benar sesuai dengan kondisi masing-masing anak.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kelima jenis persoalan pada bab ini (bullying, kesulitan belajar, ADHD/autisme, depresi/kecemasan, masalah akademik), jenis mana yang paling sering Anda temui di lingkungan Anda — dan strategi spesifik apa dari bab ini yang belum pernah Anda coba terapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, bullying dapat terjadi dalam beberapa bentuk, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Fisik, verbal, emosional, dan online</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya fisik saja, karena bentuk lain tidak dianggap bullying</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya online saja, karena itu bentuk bullying paling umum saat ini</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa dengan ADHD kesulitan duduk tenang dan sering menyela saat guru menjelaskan panjang lebar di depan kelas. Berdasarkan Bab 4, modifikasi kelas yang paling tepat untuk membantunya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memindahkannya keluar kelas setiap kali pelajaran berlangsung agar tidak mengganggu teman lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menempatkannya di area yang minim gangguan, memberi instruksi singkat yang dipecah menjadi beberapa langkah, dan memberi jeda/waktu istirahat yang terstruktur</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberikan tugas tambahan sebagai hukuman setiap kali ia menyela pelajaran</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa SMA tiba-tiba kehilangan minat belajar, sulit berkonsentrasi, dan mulai menunjukkan gejala kecemasan disertai sakit kepala berulang menjelang ujian. Sekolah hanya memberinya tambahan jam belajar tanpa penanganan lain. Berdasarkan Bab 4, apa yang kurang dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena menambah jam belajar adalah solusi paling efektif untuk semua masalah akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendekatan ini mengabaikan kemungkinan gangguan kecemasan yang mendasarinya, padahal dibutuhkan kombinasi dukungan emosional, penyesuaian beban tugas, dan bila perlu penilaian profesional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah seharusnya langsung mengeluarkan siswa tersebut dari program akademik reguler</button>
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
<h2 class="reveal">Peran Guru dan Orang Tua dalam Pendampingan Tanpa Amarah</h2>
<p class="lede reveal">Anak akan tumbuh optimal ketika dua sosok penting dalam hidupnya — orang tua di rumah dan guru di sekolah — bersinergi, saling percaya, dan berjalan seirama; sebaliknya, ketidakkompakan keduanya bisa membuat anak bingung dan tertekan.</p>

<div class="card reveal">
  <h4>A. Menjadi Tim yang Kompak: Kolaborasi Orang Tua & Guru</h4>
  <p>Prinsip penting dalam mendidik anak adalah kerja sama erat antara orang tua dan guru — keduanya bukan pihak yang saling menyalahkan, melainkan tim yang saling mendukung demi kebaikan anak. Untuk menjadi tim yang kompak, orang tua dan guru perlu saling berbagi informasi tentang kondisi anak baik di rumah maupun di sekolah, menghindari sikap saling tuding ketika ada masalah, menyatukan suara dalam memberi arahan atau aturan yang konsisten kepada anak, serta mengadakan pertemuan rutin untuk membahas perkembangannya. Ketika anak melihat guru dan orang tuanya kompak, ia akan merasa lebih aman dan yakin bahwa apa pun yang dilakukan orang dewasa di sekitarnya adalah demi kebaikannya.</p>

  <h4>B. Membangun Komunikasi yang Hangat dan Terbuka</h4>
  <p>Komunikasi yang baik adalah kunci hubungan yang sehat, baik antara guru dan orang tua, maupun antara orang dewasa dengan anak. Ciri komunikasi yang hangat dan terbuka mencakup penggunaan kata-kata lembut yang tidak menyudutkan, mendengarkan tanpa menghakimi, bertanya dengan niat memahami (bukan menginterogasi), serta tidak menyimpan prasangka negatif terhadap satu sama lain. Sebagai contoh, kalimat seperti "Bu, saya ingin berdiskusi tentang cara terbaik membantu anak kita di kelas" jauh lebih membangun dibanding "anak Ibu bikin masalah lagi, gimana sih orang tuanya?" — dengan komunikasi yang terbuka, segala persoalan bisa dicari solusinya tanpa perlu emosi yang berlebihan.</p>

  <h4>C. Menumbuhkan Empati dan Sabar dalam Pendekatan</h4>
  <p>Dalam mendampingi anak, baik guru maupun orang tua perlu banyak berlatih empati — mencoba melihat suatu situasi dari sudut pandang anak sebelum memberi reaksi. Empati berarti mampu memahami apa yang dirasakan anak, bukan sekadar menilai perilakunya dari luar. Kesabaran menjadi pendamping alami dari empati ini, sebab memahami perasaan anak butuh waktu dan ketenangan yang tidak selalu mudah dihadirkan, terutama saat orang dewasa sendiri sedang lelah atau tertekan. Namun justru di titik itulah empati dan kesabaran paling dibutuhkan — karena anak yang sedang berulah biasanya bukan sedang "menantang", melainkan sedang kesulitan mengelola sesuatu yang ia sendiri belum sepenuhnya pahami.</p>

  <h4>D. Penggunaan Bahasa yang Menenangkan dan Mendidik</h4>
  <p>Bahasa adalah alat paling kuat dalam membentuk perilaku anak — kata-kata kasar bisa melukai, sementara kata-kata lembut bisa menyembuhkan dan membimbing sekaligus. Bahasa yang baik digunakan bersifat tenang dan tidak mengancam, memberikan arahan (bukan sekadar menyuruh), mengandung pujian atau penguatan positif, serta tidak mempermalukan anak apalagi di depan umum. Bandingkan misalnya kalimat "dasar pemalas, kerjain tugas yang benar!" dengan "ayo, kamu bisa, yuk coba kerjakan pelan-pelan, Ibu bantu kalau perlu" — kata-kata kita bisa menjadi senjata yang melukai, atau pelukan yang menguatkan; pilihan itu sepenuhnya ada di tangan kita sebagai orang dewasa.</p>

  <h4>E. Pendampingan Konsisten Tanpa Bentakan</h4>
  <p>Anak membutuhkan pendampingan yang konsisten, bukan pendekatan yang berubah-ubah tergantung suasana hati orang tua atau guru. Pendampingan konsisten mencakup aturan yang jelas dan disepakati bersama, tindak lanjut yang sama untuk setiap pelanggaran tanpa perlu amarah, tetap mendampingi meski anak sedang sulit diatur, serta menjaga keseimbangan — tidak terlalu keras, tapi juga tidak membiarkan begitu saja. Yang paling penting untuk dihindari adalah membentak, sebab bentakan tidak mengubah perilaku anak dalam jangka panjang; yang terjadi justru sebaliknya — merusak harga diri anak dan menumbuhkan ketakutan, bukan pemahaman.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kelima aspek pendampingan tanpa amarah pada bab ini, aspek mana yang paling sulit Anda konsistenkan selama ini — apakah komunikasi dengan pihak lain (guru/orang tua), pemilihan bahasa, atau konsistensi dalam menegakkan aturan? Apa satu langkah kecil yang bisa Anda coba minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, mengapa membentak dianggap tidak efektif dalam mendampingi anak?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena bentakan tidak mengubah perilaku anak dalam jangka panjang, dan justru berisiko merusak harga diri anak serta menumbuhkan ketakutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena bentakan hanya efektif untuk anak usia SD ke bawah, tapi sangat efektif untuk remaja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena bentakan membutuhkan tenaga lebih besar dibanding cara lain, bukan karena dampaknya pada anak</button>
  </div>
  <div class="quiz-q">
    <p>Wali kelas mengirim pesan kepada orang tua siswa berbunyi, "Anak Ibu bikin masalah lagi, gimana sih orang tuanya?" Berdasarkan Bab 5, apa dampak paling mungkin dari pendekatan komunikasi seperti ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Orang tua akan langsung bekerja sama secara maksimal karena merasa tertantang untuk membuktikan diri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Orang tua berpotensi merasa disalahkan dan defensif, sehingga kolaborasi antara guru dan orang tua justru terhambat, bukan terbangun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena nada pesan tidak memengaruhi hubungan guru-orang tua</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ayah menerapkan aturan jam belajar yang berbeda-beda setiap hari tergantung suasana hatinya — kadang ia membiarkan, kadang tiba-tiba marah besar atas pelanggaran yang sama. Berdasarkan Bab 5, aspek pendampingan apa yang paling perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan menyusun jadwal belajar yang lebih detail dan rumit</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Konsistensi pendampingan — menerapkan aturan dan tindak lanjut yang sama setiap kali, tanpa bergantung pada suasana hati, dan tanpa bentakan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Frekuensi memberi pujian, karena itu satu-satunya hal yang perlu ditambah</button>
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
<h2 class="reveal">Teknik Self-Regulation untuk Orang Dewasa (Guru & Orang Tua)</h2>
<p class="lede reveal">Salah satu kunci utama mendampingi anak tanpa marah adalah kemampuan mengatur emosi diri sendiri (self-regulation) — sebab akan sulit bagi anak belajar mengelola emosinya jika orang dewasa di sekitarnya justru sering lepas kendali.</p>

<div class="card reveal">
  <h4>A. Mengenali Trigger Emosi Diri</h4>
  <p>Langkah pertama dalam self-regulation adalah mengenali pemicu (trigger) emosi kita sendiri — sebab kita tidak mungkin mengelola sesuatu yang bahkan tidak kita sadari keberadaannya. Trigger ini bisa berasal dari berbagai sumber: luka batin yang belum sembuh (misalnya cara kita dulu diperlakukan oleh orang tua sendiri), tekanan sosial, ekspektasi berlebih terhadap diri sendiri sebagai pendidik atau orang tua, maupun sekadar kondisi tubuh yang sedang lelah. Mengenali pola diri sendiri, misalnya menyadari "saya paling gampang terpancing saat anak mulai membantah" atau "kalau saya sedang lelah, suara anak sedikit saja sudah terasa mengganggu", membuat kita jauh lebih siap menghadapi situasi yang biasanya memicu reaksi negatif — karena kita bisa mengantisipasinya sebelum benar-benar meledak.</p>

  <h4>B. Teknik Relaksasi Sederhana</h4>
  <p>Ketika emosi mulai naik, tubuh pun ikut bereaksi — jantung berdebar lebih cepat, napas memendek, otot menegang. Beberapa teknik relaksasi sederhana bisa membantu meredakan reaksi ini dengan cepat: mengatur napas dalam-dalam secara perlahan, menghitung mundur pelan-pelan dari sepuluh ke satu sambil fokus pada napas dan detak jantung, menegangkan lalu melepaskan otot-otot tubuh (misalnya tangan atau kaki, ditahan lima detik lalu dilepaskan untuk merasakan efek rileksnya), serta melakukan self-talk positif seperti "saya bisa mengendalikan ini, saya orang dewasa, anak ini butuh bimbingan, bukan kemarahan". Teknik-teknik ini bisa dipraktikkan di mana saja — di rumah, di kelas, bahkan di tengah situasi yang sedang menegangkan — dan semakin sering dilatih, semakin cepat pula efeknya terasa.</p>

  <h4>C. Latihan Menahan Reaksi Instan</h4>
  <p>Reaksi instan sering kali lahir dari emosi, bukan dari logika atau pertimbangan yang matang. Karena itu, melatih diri untuk menunda respons sejenak menjadi keterampilan yang sangat berharga: mengambil jeda sebelum bicara (menghitung tiga detik sebelum menanggapi anak), mengalihkan perhatian sejenak (pergi ke ruangan lain, minum air, atau menutup mata beberapa detik), atau menggunakan "kata jeda" seperti "Ibu perlu waktu sebentar ya" atau "nanti kita bicarakan lagi kalau Ibu sudah tenang". Saat kita menunda reaksi sejenak, respons yang keluar cenderung jauh lebih bijak dan mendidik dibanding reaksi yang meledak seketika. Latihan ini memang terasa sulit di awal, tetapi dengan kesadaran dan niat yang konsisten, perlahan-lahan akan menjadi kebiasaan baik yang tertanam secara alami.</p>

  <h4>D. Membangun Kebiasaan Responsif, Bukan Reaktif</h4>
  <p>Tujuan akhir dari self-regulation adalah membangun kebiasaan merespons secara sadar, bukan bereaksi secara impulsif. Caranya antara lain dengan melatih kesadaran penuh (mindfulness) terhadap situasi dan emosi yang muncul, membiasakan bertanya dalam hati "apa yang sesungguhnya dibutuhkan anak saya sekarang?", menggunakan nada bicara yang stabil dan tidak meninggi, serta memfokuskan diri pada solusi, bukan sekadar melampiaskan emosi. Anak yang tumbuh bersama orang dewasa yang responsif akan turut belajar bersikap tenang, penuh pertimbangan, dan tidak mudah meledak-ledak sendiri. Perlu diingat, self-regulation bukanlah kemampuan bawaan yang dimiliki sebagian orang saja, melainkan keterampilan yang bisa dilatih dan diperkuat setiap hari — dengan mengenali trigger, berlatih relaksasi, dan membangun respons yang lebih sehat, guru dan orang tua sesungguhnya sedang merawat kesehatan mental mereka sendiri, sekaligus menjadi teladan pengelolaan emosi bagi anak-anak yang mereka dampingi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Coba identifikasi satu trigger emosi Anda sendiri yang paling sering muncul saat mendampingi anak (misalnya rasa lelah, dibantah, atau merasa tidak didengar). Dari empat teknik pada bab ini (mengenali trigger, relaksasi, menahan reaksi instan, membangun kebiasaan responsif), teknik mana yang paling relevan Anda coba terapkan saat trigger itu muncul?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan bab ini, langkah pertama dalam melakukan self-regulation adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengenali trigger atau pemicu emosi diri sendiri, karena kita tidak bisa mengelola sesuatu yang tidak kita sadari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mempraktikkan teknik relaksasi tanpa perlu memahami penyebab emosi terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari sepenuhnya situasi yang melibatkan anak agar emosi tidak pernah terpancing</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa emosinya mulai naik saat seorang siswa membantahnya di depan kelas. Ia menghitung tiga detik dalam hati sebelum menjawab, alih-alih langsung membentak. Berdasarkan Bab 6, tindakan ini adalah contoh penerapan teknik...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengenali trigger emosi diri, karena guru sedang mengidentifikasi penyebab kemarahannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Latihan menahan reaksi instan, yaitu mengambil jeda sebelum merespons agar tanggapan yang keluar lebih bijak, bukan impulsif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membangun kebiasaan reaktif, karena guru tetap merespons siswa tersebut</button>
  </div>
  <div class="quiz-q">
    <p>Seorang ibu menyadari bahwa ia selalu mudah terpancing marah setiap kali anaknya rewel menjelang waktu tidur, terutama saat ia sendiri sedang lelah sepulang kerja. Berdasarkan keseluruhan Bab 6, langkah paling menyeluruh yang bisa ia terapkan untuk mengatasi pola ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghindari sepenuhnya interaksi dengan anak menjelang waktu tidur agar tidak ada risiko konflik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengenali bahwa kelelahan adalah salah satu trigger emosinya, mempraktikkan teknik relaksasi singkat sebelum berinteraksi, menahan reaksi instan saat emosi mulai naik, dan secara bertahap membangun kebiasaan merespons dengan tenang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyuruh anggota keluarga lain menangani anak sepenuhnya tanpa pernah melatih pengaturan emosinya sendiri</button>
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
<h2 class="reveal">Kapan Harus Menghubungi Ahli</h2>
<p class="lede reveal">Setiap guru dan orang tua tentu ingin membantu anak semaksimal mungkin, tetapi penting disadari bahwa tidak semua masalah bisa ditangani sendiri — ada kalanya melibatkan psikolog atau konselor justru menjadi bentuk kepedulian dan tanggung jawab yang paling tepat.</p>

<div class="card reveal">
  <h4>A. Mengenali Batas Intervensi Guru dan Orang Tua</h4>
  <p>Guru dan orang tua memang memiliki peran besar dalam membimbing anak, tetapi ada batas-batas tertentu yang perlu dikenali agar anak mendapat penanganan yang tepat. Beberapa kondisi yang menandakan perlunya bantuan profesional antara lain: kesulitan belajar yang tidak kunjung membaik meski sudah diberi berbagai pendekatan dan dukungan; gangguan emosi atau psikologis seperti kecemasan berlebihan, depresi, sulit tidur berkepanjangan, atau perilaku menyakiti diri sendiri; masalah sosial yang serius seperti dikucilkan terus-menerus, menjadi korban bullying berat, atau terlibat perilaku berisiko; serta kekerasan di rumah atau lingkungan sekitar yang berdampak pada kondisi mental anak. Begitu tanda-tanda semacam ini mulai tampak, peran kita sebagai guru atau orang tua bergeser menjadi membantu anak mendapatkan akses ke bantuan profesional yang lebih sesuai dengan kebutuhannya — bukan berarti kita gagal, melainkan justru menunjukkan bahwa kita cukup peka untuk mengenali batas kemampuan kita sendiri.</p>

  <h4>B. Peran Psikolog Sekolah dan Konselor</h4>
  <p>Psikolog sekolah dan konselor memiliki peran yang saling melengkapi peran guru dan orang tua, bukan menggantikannya. Di antara peran mereka adalah melakukan asesmen atau penilaian terhadap kondisi mental dan emosional anak secara lebih mendalam; membantu menemukan akar masalah yang sesungguhnya — sebab apa yang tampak di permukaan (misalnya anak yang terlihat malas belajar) kadang sebenarnya berasal dari kecemasan atau tekanan batin yang tidak terlihat; mendampingi anak dalam sesi konseling, baik secara individu maupun kelompok; memberikan saran atau strategi konkret yang bisa diterapkan guru dan orang tua di rumah maupun di sekolah; serta memberikan rujukan lebih lanjut ke tenaga ahli lain (seperti psikolog klinis atau psikiater) bila memang dibutuhkan penanganan yang lebih mendalam. Dengan melibatkan mereka pada waktu yang tepat, anak mendapat penanganan yang lebih menyeluruh, sementara guru dan orang tua tetap menjadi bagian penting dari proses pemulihannya.</p>

  <h4>C. Menumbuhkan Kesadaran bahwa Meminta Bantuan adalah Tanda Peduli</h4>
  <p>Masih banyak guru maupun orang tua yang enggan melibatkan psikolog karena stigma seperti "anak saya tidak gila kok" atau "masa guru harus minta bantuan psikolog?". Padahal, meminta bantuan profesional bukanlah tanda kelemahan, melainkan justru tanda kepedulian yang matang — sebab anak-anak membutuhkan lingkungan yang membantu mereka berkembang secara utuh, baik secara akademik, sosial, maupun emosional. Untuk menumbuhkan kesadaran ini, guru dan orang tua bisa mulai membiasakan komunikasi terbuka tentang kesehatan mental sejak dini, menyampaikan kepada anak bahwa pergi ke konselor sama wajarnya dengan pergi ke dokter saat sakit, serta tidak menyalahkan anak ketika ia membutuhkan bantuan lebih dari sekadar nasihat orang-orang terdekatnya. Mendampingi anak memang bukan tugas yang bisa dijalani sendirian — ada kalanya kita mampu menanganinya sendiri, dan ada kalanya kita perlu menggandeng tangan yang lebih ahli untuk bersama-sama menciptakan ruang tumbuh yang sehat bagi mereka. Sebab cinta yang matang bukan soal bisa menyelesaikan segalanya sendiri, melainkan juga soal tahu kapan harus mencari pertolongan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Pernahkah Anda ragu untuk merujuk seorang anak/siswa ke psikolog atau konselor karena khawatir dianggap berlebihan atau karena stigma tertentu? Setelah membaca bab ini, bagaimana pandangan Anda tentang kapan sebaiknya bantuan profesional mulai dilibatkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, meminta bantuan psikolog atau konselor untuk seorang anak sebaiknya dipahami sebagai...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tanda kepedulian dan tanggung jawab yang matang dari guru atau orang tua, bukan tanda kegagalan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Bukti bahwa guru atau orang tua telah gagal total dalam mendidik anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langkah yang hanya perlu diambil jika anak menunjukkan gejala yang sangat parah dan tidak bisa ditunda lagi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa terus-menerus dikucilkan teman sekelas selama berbulan-bulan, menunjukkan tanda kecemasan berat, dan mulai enggan bersekolah, namun gurunya hanya menasihatinya untuk "lebih percaya diri" tanpa langkah lain. Berdasarkan Bab 7, apa yang seharusnya dilakukan dalam situasi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup menunggu hingga siswa terbiasa dengan situasinya tanpa perlu keterlibatan pihak lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengenali bahwa masalah sosial dan kecemasan yang dialaminya sudah melewati batas intervensi guru semata, sehingga perlu dilibatkan konselor atau psikolog sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memindahkan siswa ke sekolah lain sebagai satu-satunya solusi yang tersedia</button>
  </div>
  <div class="quiz-q">
    <p>Seorang wali kelas mencurigai salah satu siswanya mengalami kekerasan di rumah, tetapi ia ragu melapor karena takut dianggap "ikut campur urusan keluarga orang". Berdasarkan Bab 7, sikap yang seharusnya diambil wali kelas ini adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap diam sepenuhnya karena urusan keluarga bukan wewenang guru sama sekali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengonfrontasi orang tua siswa secara pribadi tanpa melibatkan pihak lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyadari bahwa kekerasan di rumah adalah kondisi yang melampaui batas intervensi guru semata, sehingga perlu segera melibatkan konselor sekolah atau psikolog untuk penanganan yang tepat</button>
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
    <p>Seorang siswa tiba-tiba menarik diri dari pergaulan, ledakan emosinya tidak sebanding dengan pemicunya, dan sering mengeluh "malas sekolah" tanpa alasan jelas. Berdasarkan Bab 1, kumpulan tanda ini paling tepat dipahami sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemungkinan sinyal ketidaknyamanan emosional yang belum bisa ia ungkapkan dengan kata-kata, sehingga perlu diamati dan didekati dengan empati</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bukti bahwa siswa tersebut memang berwatak pemalas dan tidak perlu diperhatikan lebih lanjut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hal yang wajar pada semua siswa dan tidak pernah berkaitan dengan kondisi emosional</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan Bab 1, keluhan fisik seperti sakit perut atau sakit kepala yang berulang tanpa sebab medis yang jelas pada siswa sebaiknya dipahami sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Selalu tanda bahwa siswa berbohong untuk menghindari pelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemungkinan "bahasa tubuh" dari beban emosional yang belum tersalurkan, sehingga perlu diamati dan digali lebih lanjut penyebabnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hal yang tidak pernah berkaitan dengan kondisi psikologis siswa</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang anak yang biasanya ceria mulai sulit tidur di malam hari dan kehilangan nafsu makan secara drastis selama dua minggu terakhir. Berdasarkan Bab 1, respons paling tepat dari orang tua adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memarahi anak agar segera makan dan tidur seperti biasa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikannya karena perubahan pola tidur dan makan tidak pernah berkaitan dengan kondisi emosional anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendekati anak dengan tenang, mengajaknya bicara penuh empati, dan mencari tahu penyebab di balik perubahan tersebut</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2, faktor internal yang memengaruhi masalah siswa mencakup...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Inteligensi, kepribadian, emosi dan kematangan sosial, serta kesehatan fisik dan mental</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya kondisi ekonomi keluarga semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya kualitas guru dan fasilitas sekolah semata</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa berprestasi luar biasa di bidang olahraga mulai menunjukkan kelelahan berlebihan dan mengabaikan mata pelajaran lain karena jadwal latihan yang sangat padat. Berdasarkan Bab 2, hal ini menggambarkan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bakat luar biasa yang selalu berdampak positif tanpa risiko apa pun bagi siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dampak negatif dari bakat luar biasa berupa tekanan dan ketidakseimbangan belajar, sehingga siswa tetap membutuhkan dukungan agar bakatnya tidak mengorbankan aspek lain dalam hidupnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Alasan yang cukup untuk menghentikan seluruh kegiatan olahraga siswa tersebut secara permanen</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa SMP mulai ikut-ikutan membolos karena tekanan dari kelompok pertemanan barunya, meski dalam hati merasa tidak nyaman. Berdasarkan Bab 2, pendekatan paling tepat bagi guru atau orang tua adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung melarang keras pertemanan tersebut tanpa penjelasan apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun komunikasi terbuka tanpa menghakimi, melatih kepercayaan diri anak untuk berani menolak, dan mengajaknya refleksi atas tindakannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan saja karena tekanan teman sebaya tidak pernah berdampak nyata pada anak</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 3, prinsip "koneksi sebelum koreksi" mengajarkan bahwa...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kita perlu membuat anak merasa dipahami terlebih dahulu sebelum menyampaikan nasihat atau koreksi atas perilakunya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Koreksi harus selalu didahulukan sebelum membangun kedekatan apa pun dengan anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak tidak pernah perlu dikoreksi selama sudah merasa dekat dengan orang dewasa di sekitarnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang ibu berkata kepada anaknya yang menangis, "Gitu aja nangis, lebay deh." Berdasarkan konsep validasi emosi pada Bab 3, dampak paling mungkin dari respons ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak akan langsung merasa lebih kuat secara mental dan berhenti menangis untuk seterusnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak bisa merasa emosinya tidak penting atau tidak diterima, sehingga ke depannya lebih sulit terbuka mengungkapkan perasaannya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun karena validasi emosi tidak berkaitan dengan kalimat semacam ini</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang guru yang sedang lelah menyadari emosinya mulai tidak stabil saat mendapati kelas ribut, lalu menarik napas sejenak sebelum menegur siswa dengan nada tenang. Berdasarkan Bab 3, tindakan ini paling menggambarkan penerapan langkah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Validasi emosi anak semata, tanpa kaitan dengan kondisi emosi guru itu sendiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Teknik mendengarkan aktif, karena guru menahan diri untuk tidak bicara sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengatur diri sebelum mengatur anak, yaitu memastikan kondisi emosinya sendiri stabil terlebih dahulu sebelum merespons</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, bullying dapat terjadi dalam beberapa bentuk, yaitu...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Fisik, verbal, emosional, dan online</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya bentuk fisik, karena bentuk lain tidak tergolong bullying</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya bentuk online, karena itu satu-satunya bentuk bullying di era digital</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa dengan ADHD kesulitan duduk tenang dan sering menyela penjelasan panjang guru di depan kelas. Berdasarkan Bab 4, modifikasi kelas yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengeluarkannya dari kelas setiap kali pelajaran berlangsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menempatkannya di area minim gangguan, memberi instruksi singkat yang dipecah menjadi beberapa langkah, dan memberi jeda istirahat yang terstruktur</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberikan tugas tambahan sebagai hukuman setiap kali ia menyela pelajaran</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa SMA kehilangan minat belajar dan menunjukkan gejala kecemasan disertai sakit kepala berulang menjelang ujian, namun sekolah hanya menambah jam belajarnya tanpa penanganan lain. Berdasarkan Bab 4, apa yang kurang dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang kurang, karena menambah jam belajar adalah solusi paling efektif untuk semua masalah akademik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendekatan ini mengabaikan kemungkinan gangguan kecemasan yang mendasarinya, padahal dibutuhkan dukungan emosional dan penyesuaian beban tugas, bukan hanya menambah jam belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah seharusnya langsung mengeluarkan siswa tersebut dari program akademik reguler</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Berdasarkan Bab 5, mengapa membentak dianggap tidak efektif dalam mendampingi anak?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena membentak membutuhkan energi lebih besar dibanding cara lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena membentak hanya kurang efektif untuk remaja, tetapi sangat efektif untuk anak usia dini</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena bentakan tidak mengubah perilaku anak dalam jangka panjang, dan justru berisiko merusak harga diri anak serta menumbuhkan ketakutan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang wali kelas mengirim pesan kepada orang tua siswa berbunyi, "Anak Ibu bikin masalah lagi, gimana sih orang tuanya?" Berdasarkan Bab 5, dampak paling mungkin dari pendekatan komunikasi seperti ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Orang tua akan langsung bekerja sama secara maksimal karena merasa tertantang</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Orang tua berpotensi merasa disalahkan dan defensif, sehingga kolaborasi antara guru dan orang tua justru terhambat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun karena nada pesan tidak memengaruhi hubungan guru-orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 6, langkah pertama dalam melakukan self-regulation adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali trigger atau pemicu emosi diri sendiri, karena kita tidak bisa mengelola sesuatu yang tidak kita sadari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung mempraktikkan teknik relaksasi tanpa perlu memahami penyebab emosi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghindari sepenuhnya situasi yang melibatkan anak agar emosi tidak pernah terpancing</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru mulai merasa emosinya naik saat dibantah siswa di depan kelas, lalu menghitung tiga detik dalam hati sebelum menjawab, alih-alih langsung membentak. Berdasarkan Bab 6, tindakan ini adalah contoh penerapan teknik...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali trigger emosi diri semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Latihan menahan reaksi instan, yaitu mengambil jeda sebelum merespons agar tanggapan yang keluar lebih bijak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membangun kebiasaan reaktif</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, meminta bantuan psikolog atau konselor untuk seorang anak sebaiknya dipahami sebagai...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tanda kepedulian dan tanggung jawab yang matang dari guru atau orang tua, bukan tanda kegagalan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Bukti bahwa guru atau orang tua telah gagal total dalam mendidik anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langkah yang seharusnya dihindari kecuali dalam kondisi darurat yang sangat ekstrem</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa terus-menerus dikucilkan teman sekelas selama berbulan-bulan, menunjukkan kecemasan berat, dan mulai enggan bersekolah, namun gurunya hanya menasihatinya untuk "lebih percaya diri" tanpa langkah lain. Berdasarkan Bab 7, apa yang seharusnya dilakukan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga siswa terbiasa dengan situasinya tanpa keterlibatan pihak lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali bahwa masalah ini sudah melewati batas intervensi guru semata, sehingga perlu dilibatkan konselor atau psikolog sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memindahkan siswa ke sekolah lain sebagai satu-satunya solusi yang tersedia</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 7, salah satu peran utama psikolog sekolah atau konselor dalam mendampingi siswa yang bermasalah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggantikan sepenuhnya peran guru dan orang tua dalam kehidupan sehari-hari siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membantu menemukan akar masalah yang sesungguhnya, sebab apa yang tampak di permukaan (misalnya terlihat malas belajar) bisa jadi sebenarnya berasal dari kecemasan atau tekanan batin yang tidak terlihat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hanya bertugas memberi sanksi kepada siswa yang melanggar aturan sekolah</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin membangun budaya pendampingan siswa yang "tenang tanpa amarah" secara menyeluruh, bukan sekadar slogan. Berdasarkan keseluruhan isi buku ini, kombinasi langkah paling mendasar yang perlu dipastikan lebih dulu adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi pemantauan perilaku siswa tercanggih yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyusun peraturan sekolah yang lebih ketat dan sanksi yang lebih berat bagi pelanggar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepekaan mengenali tanda-tanda dan faktor penyebab masalah siswa, koneksi emosional yang kuat, kemampuan self-regulation guru dan orang tua, kolaborasi yang kompak, serta kesediaan melibatkan ahli saat dibutuhkan</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
