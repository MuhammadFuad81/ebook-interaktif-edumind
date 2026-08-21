/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Sistem Deteksi Dini Masalah Siswa"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-deteksi-dini-masalah-siswa.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Konsep Dasar Deteksi Dini Masalah Siswa</h2>
<p class="lede reveal">Sebelum sekolah mampu merespons masalah siswa secara tepat, perlu dipahami dulu apa sebenarnya deteksi dini, mengapa ia berbeda dari sekadar menunggu masalah membesar, tujuan strategis di baliknya, dan prinsip-prinsip yang menjaga agar sistem ini berjalan adil serta bermutu bagi setiap siswa.</p>

<figure class="chapter-visual reveal" data-asset-id="chapter-01">
  <div class="chapter-visual-frame"><img src="https://media.edumind.id/ebook-edumind/039-sistem-deteksi-dini-masalah-siswa/chapter-01.webp?v=20260821-2" alt="Guru mengamati sinyal kesulitan siswa dan berkoordinasi dengan konselor untuk merancang dukungan awal" loading="lazy" decoding="async"></div>
  <figcaption>Deteksi dini dimulai dari kepekaan terhadap pola, dilanjutkan dengan pencatatan dan kolaborasi, lalu diarahkan pada dukungan yang menjaga martabat siswa.</figcaption>
</figure>

<div class="card reveal">
  <h4>A. Pengertian Deteksi Dini dalam Konteks Sekolah</h4>
  <p>Deteksi dini dalam konteks pendidikan adalah upaya sistematis untuk mengenali gejala, potensi, atau faktor risiko yang dapat mengganggu tumbuh kembang siswa — baik secara akademik, sosial, emosional, maupun perilaku — sebelum masalah tersebut berkembang menjadi gangguan yang serius. Ia bukan proses menunggu masalah muncul, melainkan usaha aktif membaca "sinyal-sinyal awal" lewat observasi guru, pengisian angket, percakapan informal, hingga konsultasi dengan orang tua. Dengan kata lain, deteksi dini adalah gerakan preventif yang menjadi fondasi sistem pendampingan siswa yang baik, sekaligus menempatkan sekolah bukan hanya sebagai tempat mengajar, tetapi juga sebagai lembaga yang peduli terhadap kesejahteraan psikologis dan sosial anak.</p>
  <p>Prinsip utamanya sederhana: semakin cepat diketahui, semakin efektif ditangani. Masalah yang dikenali sejak awal umumnya masih ringan dan mudah ditangani lewat intervensi sederhana, sementara masalah yang terlewat akan terus mengakar dan menuntut pendekatan yang jauh lebih kompleks serta waktu pemulihan yang lebih lama. Intervensi awal tidak berarti sekolah langsung mengambil alih penyelesaian masalah, melainkan menyediakan dukungan yang tepat waktu — bisa berupa perhatian guru terhadap perubahan perilaku siswa, dialog ringan antara wali kelas dan orang tua, atau tugas yang disesuaikan dengan gaya belajar siswa. Prinsip lain yang tak kalah penting adalah kolaborasi: keberhasilan intervensi awal bukan hanya soal kejelian satu guru, melainkan koordinasi lintas peran — guru BK, wali kelas, kepala sekolah, dan orang tua — yang sama-sama memahami bahwa keberhasilan pendidikan bukan hanya soal akademik, tetapi juga kesiapan menghadapi hambatan yang bisa muncul dalam diri siswa.</p>
  <p>Deteksi dini adalah bagian tak terpisahkan dari strategi preventif sekolah — jika preventif adalah langkah mencegah munculnya masalah, maka deteksi dini adalah mata dan telinga dari sistem itu. Dengan deteksi dini yang berjalan baik, sekolah dapat menghindari eskalasi masalah yang mengganggu proses belajar, menurunkan angka putus sekolah, konflik kelas, atau stres berkepanjangan, mengurangi kebutuhan intervensi darurat yang lebih mahal dan melelahkan, meningkatkan kepercayaan orang tua terhadap profesionalisme sekolah, serta menumbuhkan budaya sekolah yang peduli, peka, dan manusiawi. Tidak semua masalah perlu ditangani dengan cara besar, tetapi semua masalah perlu dikenali sebelum menjadi lebih besar.</p>

  <h4>B. Karakteristik Masalah Siswa yang Harus Dideteksi Dini</h4>
  <p>Masalah pada siswa jarang muncul dalam satu hari — ia berkembang secara sistemik, bertahap, dan terus-menerus, tampak lewat pola-pola yang konsisten. Siswa yang awalnya aktif mulai sering diam di kelas, atau siswa yang biasanya rajin mengerjakan tugas mulai abai satu per satu — sekilas tampak biasa, namun jika berulang dan semakin jelas, ini bisa menjadi sinyal tekanan emosional, kesulitan belajar, atau konflik sosial. Karena itulah sekolah memerlukan sistem yang mampu mencatat, mengamati, dan menganalisis pola perilaku siswa secara berkelanjutan, bukan sekadar observasi satu kali.</p>
  <p>Konsekuensi dari masalah yang tidak terdeteksi bisa cukup berat: siswa dibiarkan berjuang sendirian, berisiko kehilangan motivasi belajar, merasa terasing, memiliki konsep diri yang buruk, atau melampiaskan tekanannya lewat perilaku bermasalah yang pada akhirnya mengganggu dinamika kelas secara keseluruhan. Lebih jauh, kegagalan mengenali masalah sejak awal membuat intervensi menjadi terlambat dan lebih sulit — membutuhkan waktu lebih panjang, pendekatan lebih kompleks, dan sumber daya yang lebih banyak dibanding jika ditangani sejak gejala pertama muncul.</p>
  <p>Justru di sinilah kekuatan utama deteksi dini: kemampuannya menghadirkan intervensi yang cepat dan ringan sebelum masalah berkembang menjadi berat. Intervensi awal tidak selalu membutuhkan pertemuan formal — kadang cukup dengan menyapa siswa lebih dulu, memberi tugas yang disesuaikan, atau mengajaknya berbicara santai secara personal. Pendekatan seperti ini lebih efektif, tidak mengancam, dan terasa natural bagi siswa. Sekolah yang berhasil bukanlah yang menunggu siswa gagal, baru bertindak — melainkan yang hadir sejak gejala pertama terlihat.</p>

  <h4>C. Tujuan Deteksi Dini Masalah Siswa</h4>
  <p>Deteksi dini memiliki tujuan-tujuan yang jelas dan strategis, yang membedakannya dari sekadar reaksi spontan terhadap masalah yang sudah membesar di kelas. Tujuan paling mendasar adalah mengenali perilaku siswa yang menyimpang atau berubah dari kebiasaan normalnya sejak tahap paling awal — baik perubahan halus seperti menjadi lebih diam, mudah tersinggung, atau gelisah, maupun perilaku aktif seperti mengganggu teman atau tidak patuh aturan. Tujuan ini berjalan beriringan dengan upaya mendeteksi kelainan fisik dan mental pada siswa — sebab siswa dengan gangguan penglihatan, pendengaran, atau kebutuhan khusus sering kesulitan belajar jika tidak dikenali sejak awal, begitu pula siswa dengan kecemasan berlebih, depresi ringan, atau ADHD yang bisa jadi diam-diam "berjuang sendirian" tanpa terdeteksi. Lewat deteksi dini, sekolah bisa mengarahkan siswa untuk mendapat pemeriksaan lanjutan secara profesional dan merancang strategi pendampingan yang sesuai kebutuhannya.</p>
  <p>Setiap siswa datang dengan latar belakang berbeda — ada yang berasal dari keluarga harmonis, ada pula yang sedang menghadapi perceraian orang tua, tekanan ekonomi, konflik sosial, atau pengalaman traumatis. Semua ini menjadi faktor risiko yang memengaruhi proses belajar dan interaksi siswa, dan deteksi dini memungkinkan sekolah mengenalinya sejak awal agar pendekatan yang diambil lebih empatik, tidak menyamaratakan, dan tidak menimbulkan luka baru. Tujuan ini berkaitan erat dengan upaya mencegah eskalasi masalah belajar dan sosial — misalnya siswa yang awalnya hanya malas mengerjakan tugas bisa tertinggal jauh dan merasa tidak mampu bersaing, atau siswa yang merasa tidak punya teman mulai menghindari kelas. Dengan deteksi dini, sekolah dapat segera mengintervensi sebelum dampaknya meluas — misalnya lewat tutor sebaya atau pelibatan dalam kegiatan kelompok kecil.</p>
  <p>Tujuan penting lainnya adalah menguatkan komunikasi antara guru dengan orang tua. Ketika masalah siswa diketahui lebih awal, sekolah dapat mengajak orang tua berdiskusi dalam suasana yang tenang dan terbuka, bukan menyalahkan — sementara jika sekolah baru menghubungi orang tua saat masalah sudah besar, suasana yang tercipta cenderung tegang dan defensif. Secara keseluruhan, deteksi dini bertujuan menjadikan sekolah lebih peduli, lebih cepat tanggap, dan lebih manusiawi dalam merespons dinamika siswa — bukan untuk mengontrol siswa secara berlebihan, tetapi untuk mendampingi mereka dengan cermat dan penuh kasih sayang, sesuai semangat pendidikan Islam yang mendidik dengan kelembutan dan kebijaksanaan.</p>

  <h4>D. Prinsip Penting dalam Sistem Deteksi Dini</h4>
  <p>Agar sistem deteksi dini berjalan optimal, tidak cukup hanya mengandalkan niat baik atau kepekaan individu semata. Sekolah perlu membangun pendekatan yang berpijak pada dua prinsip fondasi yang kuat dan konsisten: inklusifitas dan kualitas. Prinsip inklusifitas menuntut sistem deteksi dini mencakup semua siswa tanpa kecuali — tanpa memandang latar belakang, kemampuan akademik, status sosial, atau kedekatan dengan guru. Dalam praktik, perhatian sering hanya tertuju pada siswa "bermasalah" yang terlihat jelas atau siswa "unggulan" yang mudah disorot, padahal banyak siswa lain yang diam-diam mengalami tekanan atau kesulitan tertentu namun luput dari perhatian karena tampil biasa-biasa saja. Prinsip ini menuntut sekolah untuk tidak memilih-milih siapa yang berhak mendapat perhatian — termasuk siswa dengan kebutuhan khusus, siswa pemalu, siswa dari latar belakang berisiko tinggi, atau siswa yang baru pindah sekolah.</p>
  <p>Selain menjangkau semua siswa, sistem deteksi dini juga harus mengandalkan kualitas instrumen dan intervensi. Ini berarti sekolah tidak bisa hanya mengandalkan "feeling" guru atau dugaan berdasarkan persepsi semata — dibutuhkan alat bantu yang valid dan dapat diandalkan, teruji secara isi, sesuai konteks usia dan budaya sekolah, serta mudah digunakan oleh guru di lapangan. Intervensi yang dilakukan pun harus memiliki arah yang jelas, pendekatan yang tepat, dan dievaluasi secara berkala — bukan dilakukan secara asal-asalan atau sekadar formalitas. Ketika prinsip inklusifitas dan kualitas berjalan berdampingan, sistem deteksi dini akan menjadi alat strategis yang tidak hanya adil secara sosial, tetapi juga kuat secara profesional, mendukung terbentuknya sekolah yang benar-benar peduli dan adaptif terhadap kebutuhan setiap anak.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari dua prinsip utama sistem deteksi dini — inklusifitas dan kualitas — mana yang menurut Anda paling lemah diterapkan di sekolah Anda saat ini, dan langkah kecil apa yang bisa mulai dijalankan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa dua prinsip utama yang menjadi fondasi sistem deteksi dini yang sehat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Inklusifitas dan kualitas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kecepatan dan kepatuhan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Popularitas dan efisiensi biaya</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menyerahkan sepenuhnya tugas deteksi dini kepada guru BK saja, tanpa melibatkan wali kelas, guru mata pelajaran, maupun kepala sekolah. Berdasarkan prinsip kolaborasi pada bab ini, apa risiko utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru BK berisiko kewalahan, dan banyak sinyal awal dari keseharian siswa di kelas justru tidak terekam karena tidak semua elemen sekolah dilibatkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena guru BK adalah satu-satunya pihak yang kompeten menangani masalah siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Justru lebih efektif karena tanggung jawab terpusat pada satu orang</button>
  </div>
  <div class="quiz-q">
    <p>Wali kelas Bu Sari hanya mencatat nama-nama siswa yang sering membuat gaduh atau melanggar aturan sebagai bahan laporan bulanan, sementara siswa yang pendiam dan selalu duduk di belakang tidak pernah masuk catatan apa pun. Berdasarkan Bab 1, prinsip apa yang belum dijalankan Bu Sari?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Prinsip inklusifitas, karena sistem deteksi dini seharusnya menjangkau semua siswa, termasuk yang tampak tenang dan tidak menonjol</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Prinsip kualitas, karena catatan Bu Sari sudah cukup rinci dan terukur</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada prinsip yang dilanggar karena siswa pendiam biasanya tidak bermasalah</button>
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
<h2 class="reveal">Identifikasi dan Spektrum Masalah yang Umum Terjadi pada Siswa</h2>
<p class="lede reveal">Setelah memahami dasar dan tujuan deteksi dini, bab ini memetakan empat spektrum masalah yang paling sering dijumpai pada siswa — akademik, pribadi-sosial, emosional dan kesehatan mental, serta karir — agar guru dan wali kelas memiliki kerangka yang jelas tentang apa saja yang perlu diamati.</p>

<div class="card reveal">
  <h4>A. Spektrum Masalah Akademik</h4>
  <p>Masalah akademik adalah salah satu spektrum paling sering muncul, namun banyak baru disadari ketika nilai sudah menurun drastis atau siswa dicap "tidak mampu belajar" — padahal gejalanya bisa terdeteksi sejak beberapa hari atau minggu pertama, dan sering kali bukan soal kemauan melainkan soal kemampuan, strategi belajar, atau faktor latar belakang yang lebih dalam. <em>Learning loss</em> merujuk pada hilangnya kemampuan atau pengetahuan yang sebelumnya sudah dimiliki siswa, umumnya muncul setelah libur panjang, perpindahan sekolah, atau situasi darurat — gejalanya bisa berupa lupa cara mengerjakan operasi hitung dasar atau tidak bisa membaca lancar padahal sudah di kelas tinggi. Rendahnya literasi (memahami teks) dan numerasi (berpikir logis dengan angka) juga menjadi hambatan besar lintas mata pelajaran, meski jarang tampak sebagai perilaku negatif — dampaknya justru sangat serius karena menghambat hampir semua jenis pembelajaran.</p>
  <p><em>Learning disability</em> atau gangguan belajar adalah kondisi neurologis yang memengaruhi cara otak memproses informasi — siswa dengan kondisi ini bukan anak "malas" atau "bodoh", mereka hanya membutuhkan pendekatan belajar yang berbeda, dengan gejala seperti kesulitan mengingat meski sudah diulang atau lambat membaca-menulis walau sudah berusaha keras. Berdekatan dengan itu ada <em>slow learner</em> — siswa yang memang butuh waktu lebih lama memahami materi tanpa gangguan khusus — dan <em>underachiever</em> — siswa berpotensi bagus namun berprestasi rendah karena kurang percaya diri atau metode belajar yang tidak cocok; keduanya sering terlupakan karena dianggap "biasa saja". Terakhir, tiga kesulitan belajar spesifik perlu dikenali: disleksia (kesulitan membaca dan mengenali huruf), disgrafia (kesulitan menulis, baik motorik maupun menuangkan ide), dan diskalkulia (kesulitan memahami konsep angka dan operasi matematika dasar) — anak dengan kondisi ini kerap dicap ceroboh atau tidak teliti, padahal yang terjadi adalah gangguan pemrosesan yang tidak terlihat dari luar, dan yang mereka butuhkan adalah dukungan, bukan tekanan atau hukuman.</p>

  <h4>B. Spektrum Masalah Pribadi-Sosial</h4>
  <p>Jika masalah akademik bisa terlihat dari nilai atau hasil tugas, masalah pribadi-sosial sering kali tersembunyi di balik sikap, interaksi, dan respons siswa terhadap lingkungan sekitarnya. Perilaku indisipliner — tindakan yang tidak sesuai aturan sekolah, dari yang ringan seperti datang terlambat hingga yang lebih serius seperti bolos atau mencontek jika dibiarkan — sering dilihat sebagai bentuk ketidaktaatan semata, padahal bisa jadi di baliknya ada masalah emosi, keluarga, atau kebutuhan khusus yang belum teridentifikasi. Berdekatan dengan itu, agresi dan <em>conduct problem</em> — tindakan yang melukai atau mengancam orang lain secara langsung (memukul, membentak) maupun tidak langsung (mengintimidasi, menyebar gosip) — bukan berarti siswa tersebut "nakal"; bisa jadi mereka mengalami frustrasi, kurang kontrol emosi, atau meniru pola yang mereka lihat di rumah.</p>
  <p>Ada pula siswa yang secara konsisten mengganggu proses belajar-mengajar — bercanda berlebihan, menyela penjelasan guru, atau memancing perhatian teman — yang meski terlihat sebagai "anak ramai", perilaku ini bisa menjadi sinyal ketidaknyamanan, kebosanan, atau cara siswa mengekspresikan diri karena kurang mendapat perhatian. Sebaliknya, siswa yang menarik diri dari lingkungan sosial — enggan berinteraksi, tidak punya teman dekat, lebih suka menyendiri — jarang tampak mencolok, namun dalam jangka panjang berisiko mengalami kesulitan pengembangan sosial, isolasi emosional, hingga gangguan psikologis seperti depresi ringan jika dibiarkan. Jika spektrum ini dikenali sejak awal, sekolah bisa menciptakan ruang belajar yang lebih inklusif dan relasi yang lebih sehat antarsiswa.</p>

  <h4>C. Spektrum Masalah Emosional dan Kesehatan Mental</h4>
  <p>Dulu dianggap urusan pribadi yang "bukan urusan sekolah", kini emosi siswa disadari sebagai bagian yang tak terpisahkan dari proses belajar mereka. Siswa dengan ciri <em>hyperactive distractibility</em> biasanya sangat aktif secara fisik, tidak bisa diam, mudah terdistraksi, dan kesulitan mengikuti instruksi berurutan — gejala yang berkaitan dengan ADHD atau gangguan pemusatan perhatian dan hiperaktivitas, bukan semata perilaku nakal, dengan tanda seperti sulit menyelesaikan tugas hingga selesai atau terlihat impulsif. Berbeda dengan itu, siswa dengan <em>poor self-concept</em> atau konsep diri yang rendah cenderung merasa "tidak cukup baik", enggan mencoba hal baru karena takut gagal, dan mudah menyerah — mereka bisa terlihat "tenang" dari luar, padahal sedang mengalami tekanan batin yang cukup besar.</p>
  <p>Selain dua contoh di atas, masih banyak masalah emosional lain yang umum dialami siswa, seperti kecemasan berlebihan (selalu khawatir atau gugup saat tampil), <em>mood swing</em> atau perubahan suasana hati yang drastis tanpa sebab jelas, sensitivitas berlebihan (mudah tersinggung atau menangis karena hal kecil), dan emosi terpendam (terlihat baik-baik saja namun sebenarnya menahan banyak beban). Jika tidak segera dikenali, masalah-masalah ini bisa berlanjut menjadi gangguan psikologis yang lebih serius di usia remaja. Sekolah yang membangun sistem deteksi dini untuk spektrum ini menunjukkan bahwa ia bukan hanya peduli pada nilai, tetapi juga pada kondisi batin dan kesejahteraan psikologis siswanya.</p>

  <h4>D. Spektrum Masalah Karir (Khusus Siswa SMP/SMA)</h4>
  <p>Di jenjang pendidikan menengah, siswa sedang berada dalam proses mengenal diri, membentuk identitas, dan mulai diarahkan untuk mengambil keputusan penting terkait masa depan — termasuk jurusan, jenjang pendidikan lanjutan, hingga cita-cita. Sayangnya tidak semua siswa siap secara mental maupun informasi, sehingga banyak yang mengalami kebingungan, ikut-ikutan teman, atau kehilangan arah. Masalah identifikasi minat dan bakat muncul ketika siswa belum tahu apa yang mereka sukai atau tidak sadar potensi yang dimiliki — tampak dari kurangnya antusiasme mengikuti pelajaran, sering berganti cita-cita, atau kesulitan memilih jurusan; hal ini perlu difasilitasi lewat observasi keseharian, angket minat, atau keterlibatan aktif dalam berbagai kegiatan sekolah.</p>
  <p>Sebagian siswa lain tidak mengalami krisis minat, melainkan minim informasi karir — mereka punya keinginan tetapi tidak tahu langkah apa yang harus diambil, dan kadang hanya mengandalkan informasi dari media sosial atau obrolan teman yang tidak selalu valid, sehingga berisiko membuat keputusan pendidikan yang keliru. Masalah karir juga berkaitan dengan kematangan dalam mengambil keputusan — siswa yang belum matang secara karir cenderung bingung, mudah berubah pikiran, atau sangat bergantung pada pendapat orang lain, mencakup kemampuan menetapkan tujuan jangka pendek dan panjang, kesiapan mengambil keputusan berdasarkan pemahaman diri, serta kesediaan mengevaluasi pilihan dengan realitas. Deteksi dini masalah karir bukan tentang memaksa siswa segera tahu "mau jadi apa", melainkan membimbing mereka agar tidak tersesat dalam pilihan-pilihan besar hidupnya.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat spektrum masalah (akademik, pribadi-sosial, emosional, dan karir) yang dibahas di bab ini, spektrum mana yang menurut Anda paling sering luput dari perhatian di sekolah Anda selama ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, disleksia, disgrafia, dan diskalkulia adalah tiga bentuk masalah akademik yang termasuk dalam kategori...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kesulitan belajar spesifik yang berkaitan dengan gangguan pemrosesan membaca, menulis, dan berhitung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Gangguan perilaku yang disebabkan kurangnya disiplin di rumah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Masalah karir akibat kurangnya informasi jurusan</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa selalu tenang di kelas, tidak pernah melanggar aturan, dan nilainya rata-rata biasa saja, namun ia hampir tidak pernah bicara dengan teman dan selalu menyendiri saat istirahat. Berdasarkan Bab 2, mengapa siswa seperti ini tetap perlu mendapat perhatian dalam sistem deteksi dini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena menarik diri dari lingkungan sosial, meski tidak mencolok, berisiko berkembang menjadi isolasi emosional atau gangguan psikologis jika dibiarkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena siswa yang tenang pasti mengalami learning disability dan harus segera dirujuk ke psikolog</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperhatikan karena tidak melanggar aturan dan nilainya normal</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa SMA selalu menjadi juara kelas, tidak pernah absen, dan disiplin, namun akhir-akhir ini semakin sering murung, menolak kegiatan non-akademik, dan sulit diajak bercanda. Berdasarkan spektrum masalah emosional pada Bab 2, apa yang paling mungkin terjadi pada siswa ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Siswa mungkin mengalami tekanan emosional atau kecemasan tersembunyi meski prestasinya tetap tinggi, sehingga tetap perlu didekati dan didampingi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang perlu dikhawatirkan karena nilai akademiknya tetap bagus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa tersebut pasti mengalami learning disability karena perubahan sikapnya</button>
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
<h2 class="reveal">Menyiapkan Sistem Deteksi Dini di Awal Tahun Ajaran</h2>
<p class="lede reveal">Niat baik saja tidak cukup — sistem deteksi dini perlu disiapkan secara sengaja sejak awal tahun ajaran, mulai dari memahami kondisi siswa dan sumber daya sekolah, membentuk tim yang solid, hingga merancang program yang terjadwal dan bisa dikomunikasikan dengan jelas.</p>

<div class="card reveal">
  <h4>A. Analisis Kebutuhan dan Kondisi Awal Tahun</h4>
  <p>Tahun ajaran baru adalah momen krusial bagi sekolah, bukan hanya untuk menyambut siswa secara administratif, tetapi juga untuk membangun fondasi sistem pendampingan yang kuat. Sebelum menyusun instrumen, membentuk tim, atau melakukan intervensi, sekolah perlu memahami profil siswa baru — latar belakang, karakter, kebutuhan, dan potensi yang berbeda-beda — lewat formulir identitas keluarga, wawancara awal atau angket minat, catatan mutasi bagi siswa pindahan, serta observasi di pekan pertama tahun ajaran. Tujuannya bukan mengklasifikasikan siswa secara kaku, melainkan melihat sejak awal siapa yang butuh perhatian lebih, tantangan lebih, atau pendekatan khusus.</p>
  <p>Langkah berikutnya adalah mengenali sumber daya pendukung yang tersedia — mulai dari SDM (siapa saja yang bisa terlibat, apakah ada guru BK, siapa wali kelas dan koordinatornya), waktu dan jadwal yang tersedia untuk observasi, instrumen yang sudah ada seperti angket atau format observasi, hingga dukungan manajemen dari kepala sekolah. Program deteksi dini sering gagal bukan karena idenya salah, melainkan karena sekolah tidak realistis terhadap kemampuan pelaksanaannya. Setelah itu, sekolah perlu menentukan prioritas masalah yang perlu dideteksi lebih dulu, misalnya memfokuskan pada masalah emosi dan adaptasi di minggu pertama, masalah akademik dasar seperti literasi dan numerasi di bulan pertama, lalu masalah sosial atau hubungan pertemanan di pertengahan semester. Dengan memprioritaskan secara bertahap, deteksi dini menjadi lebih fokus, lebih akurat, dan tidak membebani guru maupun siswa.</p>

  <h4>B. Pembentukan Tim Respons Masalah Siswa</h4>
  <p>Sistem deteksi dini tidak akan berjalan efektif jika hanya menjadi tanggung jawab satu orang, misalnya guru BK atau wali kelas saja — diperlukan kerja tim yang terorganisir, dengan pembagian peran jelas, alur komunikasi tertata, serta dukungan kebijakan dari manajemen sekolah. Struktur Tim Respons Masalah Siswa sebaiknya melibatkan guru BK atau konselor sebagai penanggung jawab asesmen dan intervensi personal, wali kelas sebagai pengamat utama yang paling dekat dengan siswa setiap hari, guru mata pelajaran sebagai pemberi data tambahan tentang performa siswa, pimpinan sekolah sebagai pengambil kebijakan dan penjaga keberlangsungan sistem, serta jika tersedia, staf kesiswaan atau psikolog mitra sebagai pendukung intervensi lanjutan. Tanpa tim yang jelas, tanggung jawab bisa jatuh pada individu tertentu dan berisiko tidak terkoordinasi.</p>
  <p>Setelah struktur tim terbentuk, langkah berikutnya adalah menyusun SOP (Standard Operating Procedure) yang mengatur alur kerja deteksi dini dan penanganannya — mencakup bagaimana guru melaporkan temuan awal, siapa yang pertama merespons laporan, kapan kasus dinaikkan ke level koordinasi tim, langkah awal penanganan seperti observasi lanjut atau konsultasi orang tua, proses pencatatan dan pelaporan, serta kapan kasus perlu dirujuk ke tenaga profesional eksternal. Dengan SOP yang jelas, sekolah memiliki standar yang adil dan transparan, sekaligus mengurangi risiko keputusan yang subjektif atau reaktif. Sistem yang kuat juga perlu ditopang kebijakan resmi sekolah — berupa SK Tim Respons Masalah Siswa dari kepala sekolah, surat edaran SOP untuk seluruh guru, penyisipan sistem ini dalam program kerja tahunan, hingga pelatihan internal rutin bagi guru baru — sebagai "payung legal dan operasional" yang menjamin deteksi dini bukan sekadar proyek satu semester, melainkan bagian dari sistem pendidikan sekolah yang berkelanjutan.</p>

  <h4>C. Perencanaan Program Deteksi Dini</h4>
  <p>Setelah profil siswa dikenali dan tim respons dibentuk, langkah selanjutnya adalah menyusun program deteksi dini secara terstruktur, mencakup kalender kegiatan, pemilihan instrumen dan indikator yang tepat, serta strategi komunikasi yang efektif. Deteksi dini bukan kegiatan insidental, melainkan proses berkelanjutan sepanjang tahun — misalnya minggu pertama dan kedua untuk observasi adaptasi siswa baru, minggu ketiga dan keempat untuk asesmen akademik dasar, bulan kedua dan ketiga untuk screening emosional ringan dan pemetaan sosial lewat sosiometri, tengah semester untuk konsolidasi data dan intervensi awal, serta akhir semester untuk evaluasi sistem dan penyesuaian strategi.</p>
  <p>Instrumen yang digunakan bisa berupa angket atau kuesioner siswa untuk menggali perasaan dan hubungan sosial, formulir observasi guru untuk mencatat perubahan perilaku, lembar wawancara sederhana untuk sesi diskusi personal, serta analisis hasil belajar dan absensi sebagai data pendukung. Indikator deteksi sebaiknya disusun berdasarkan empat spektrum masalah pada Bab 2 — akademik, sosial, emosional, dan karir — bersifat mudah diamati, terukur, dan relevan dengan konteks sekolah, tanpa perlu terlalu banyak indikator sekaligus. Sebagus apa pun program yang dirancang, ia bisa mandek tanpa strategi komunikasi yang jelas — baik komunikasi internal antar guru dan tim respons lewat grup khusus dan laporan rutin, maupun komunikasi eksternal dengan orang tua lewat sosialisasi sejak awal tahun ajaran dan pelibatan mereka dalam setiap intervensi dengan pendekatan yang humanis serta menjaga kerahasiaan dan etika saat menyampaikan temuan yang sensitif.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga tahap pada bab ini — analisis kebutuhan, pembentukan tim, dan perencanaan program — tahap mana yang paling belum dijalankan secara sengaja di sekolah Anda, dan langkah konkret apa yang bisa mulai disiapkan sebelum tahun ajaran berikutnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa langkah utama dalam membentuk Tim Respons Masalah Siswa yang efektif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tiga langkah: menentukan struktur tim, menyusun SOP penanganan awal, dan menetapkan kebijakan internal sebagai payung sistem</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satu langkah saja, yaitu menunjuk guru BK sebagai penanggung jawab tunggal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Lima langkah yang seluruhnya harus melibatkan pihak eksternal</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah sudah membentuk Tim Respons Masalah Siswa dan menyusun SOP, tetapi tidak pernah menerbitkan SK resmi atau memasukkan sistem ini ke dalam program kerja tahunan sekolah. Berdasarkan Bab 3, apa risiko yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sistem berisiko terputus di tengah jalan karena tidak memiliki legitimasi resmi dan belum menjadi bagian dari budaya kerja sekolah yang berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena SOP saja sudah cukup tanpa perlu kebijakan resmi apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sistem justru akan lebih fleksibel dan efektif tanpa kebijakan tertulis</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru ingin langsung menjalankan deteksi dini untuk seluruh aspek — akademik, sosial, emosional, dan karir — sekaligus di minggu pertama tahun ajaran, tanpa mempertimbangkan kapasitas timnya yang masih kecil. Berdasarkan Bab 3, langkah apa yang seharusnya diambil sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menentukan prioritas masalah secara bertahap, misalnya fokus pada adaptasi dan emosi lebih dulu, agar deteksi lebih fokus dan tidak membebani guru maupun siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap menjalankan semuanya sekaligus karena semakin banyak data yang dikumpulkan semakin baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh program deteksi dini sampai tim menjadi besar terlebih dahulu</button>
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
<h2 class="reveal">Instrumen dan Strategi Deteksi Dini yang Komprehensif</h2>
<p class="lede reveal">Sistem deteksi dini hanya akan berjalan efektif bila ditopang instrumen yang tepat dan proses validasi yang serius — bab ini membahas enam teknik pengumpulan data yang direkomendasikan, serta bagaimana memastikan instrumen tersebut valid, terintegrasi dengan teknologi, dan mampu menghasilkan pola yang bisa dianalisis.</p>

<div class="card reveal">
  <h4>A. Teknik dan Instrumen Asesmen Masalah Siswa</h4>
  <p>Tanpa alat yang sesuai, guru dan tim sekolah hanya akan mengandalkan intuisi atau dugaan yang bisa jadi tidak akurat. Enam teknik berikut direkomendasikan digunakan secara terpadu dan bertahap. Observasi langsung di lingkungan kelas adalah metode paling dasar dan alami — guru punya kesempatan harian melihat pola kehadiran, respons terhadap tugas, interaksi dengan teman, hingga ekspresi dan kebiasaan berulang siswa; format catatannya bisa sesederhana nama siswa, indikator yang diamati, frekuensi, dan catatan guru, yang penting dilakukan secara rutin. Wawancara siswa secara personal memberi kesempatan menggali sisi personal lebih mendalam lewat percakapan dua arah yang santai dan terarah, idealnya dilakukan wali kelas atau guru BK dalam suasana nyaman dengan pertanyaan terbuka dan sikap empatik.</p>
  <p>Angket untuk siswa dan orang tua efektif menjaring data dalam jumlah besar — bisa berupa skala sikap untuk mengukur kenyamanan belajar dan relasi sosial, pertanyaan terbuka untuk menggali pendapat, atau checklist sederhana bagi orang tua tentang kebiasaan anak di rumah. Ketika ditemukan siswa dengan masalah yang kompleks atau berulang, diperlukan studi kasus untuk analisis mendalam — penggalian informasi menyeluruh mencakup riwayat siswa, data observasi harian, hasil wawancara dengan siswa dan guru, hingga rekomendasi tindak lanjut. Sementara itu, analisis hasil belajar sebagai indikator akademik penting dicermati — nilai yang tiba-tiba turun atau tugas yang tidak pernah diselesaikan adalah sinyal adanya hambatan lebih dalam, namun nilai hanyalah indikator awal yang perlu dikombinasikan dengan data lain. Terakhir, sosiometri membantu memahami dinamika sosial kelas lewat pertanyaan sederhana seperti "siapa tiga teman yang paling kamu sukai untuk bekerja kelompok", sehingga guru bisa mengetahui siapa yang cenderung terisolasi atau sedang mengalami masalah pergaulan. Keenam teknik ini bisa digunakan bertahap dan saling melengkapi — yang terpenting adalah sekolah memiliki sistem pencatatan yang konsisten.</p>

  <h4>B. Validasi dan Implementasi Instrumen</h4>
  <p>Instrumen deteksi dini hanya akan efektif jika memberikan gambaran yang akurat, relevan, dan dapat dipercaya — sekolah tidak cukup hanya menggunakan angket atau formulir seadanya, melainkan perlu proses validasi dan strategi implementasi yang baik. Sebelum digunakan secara luas, penting dilakukan review internal yang melibatkan guru BK, wali kelas, dan koordinator kesiswaan untuk meninjau apakah isi instrumen sesuai konteks siswa dan mudah dipahami, dilanjutkan dengan uji coba kecil pada sebagian siswa untuk melihat apakah data yang dihasilkan relevan, serta revisi bertahap bila ditemukan kendala atau pertanyaan yang tidak menghasilkan data yang bisa ditindaklanjuti.</p>
  <p>Pemanfaatan teknologi dapat menyederhanakan proses pelaksanaan dan pengolahan data — mulai dari Google Form atau Microsoft Forms untuk angket digital, Google Sheet atau Excel untuk merekap hasil, dashboard visual untuk menampilkan tren kelas atau individu, hingga aplikasi khusus sekolah yang terintegrasi dengan data kehadiran dan nilai. Integrasi ini bukan sekadar soal "kekinian", melainkan efisiensi dan konsistensi, karena data digital lebih mudah diakses lintas waktu dan lintas tim. Salah satu keuntungan dari proses yang sistematis adalah munculnya pola-pola masalah yang bisa dianalisis lebih dalam — misalnya apakah ada peningkatan siswa kesulitan konsentrasi di bulan tertentu, atau apakah siswa yang sering tidak mengerjakan tugas juga cenderung menunjukkan gejala emosional. Dengan analitik sederhana seperti grafik frekuensi masalah atau profil risiko berbasis indikator berulang, instrumen deteksi dini berubah dari sekadar formulir pengumpulan data menjadi alat bantu strategis dalam menjaga kesejahteraan siswa.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari enam teknik instrumen yang dibahas (observasi, wawancara, angket, studi kasus, analisis hasil belajar, sosiometri), mana yang sudah rutin digunakan di sekolah Anda, dan mana yang paling perlu mulai diperkenalkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, ada berapa teknik dan instrumen asesmen masalah siswa yang direkomendasikan digunakan secara terpadu dan bertahap?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Enam teknik: observasi, wawancara, angket, studi kasus, analisis hasil belajar, dan sosiometri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dua teknik: nilai rapor dan absensi saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sepuluh teknik yang seluruhnya wajib digunakan bersamaan sejak hari pertama</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menyusun angket baru untuk mendeteksi kondisi emosional siswa, lalu langsung menyebarkannya ke seluruh siswa tanpa terlebih dahulu meninjau isi pertanyaannya atau mengujicobakannya pada kelompok kecil. Berdasarkan Bab 4, apa risiko dari langkah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Angket berisiko memuat pertanyaan yang membingungkan atau tidak sesuai konteks siswa, sehingga menghasilkan data yang tidak bisa ditindaklanjuti karena belum melalui review dan uji coba</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena semakin cepat disebar, semakin cepat pula data terkumpul</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Angket otomatis menjadi valid selama dibuat oleh guru BK</button>
  </div>
  <div class="quiz-q">
    <p>Wali kelas Pak Andi memakai nilai ulangan sebagai satu-satunya dasar untuk menyimpulkan bahwa seorang siswa sedang bermasalah, tanpa mengecek data observasi atau wawancara. Berdasarkan Bab 4, apa yang perlu diperbaiki dari pendekatan Pak Andi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Nilai akademik hanyalah indikator awal dan perlu dikombinasikan dengan data lain seperti observasi atau wawancara agar tidak keliru memahami situasi siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pendekatan Pak Andi sudah tepat karena nilai adalah data paling objektif dan cukup dijadikan satu-satunya acuan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pak Andi seharusnya mengabaikan nilai akademik sepenuhnya dalam proses deteksi dini</button>
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
<h2 class="reveal">Implementasi Deteksi Dini dalam Konteks Sekolah Islam</h2>
<p class="lede reveal">Di sekolah Islam, deteksi dini bukan sekadar prosedur teknis, melainkan bagian dari misi tarbiyah — bab ini membahas nilai-nilai Islam yang perlu menjiwai sistem ini, kolaborasi berbagai peran khas sekolah Islam, serta contoh nyata dan kisah dari lapangan yang membuktikan dampaknya bagi siswa.</p>

<div class="card reveal">
  <h4>A. Mengintegrasikan Nilai-nilai Islam dalam Deteksi Dini</h4>
  <p>Sistem deteksi dini di sekolah Islam tidak hanya bertujuan mengenali dan menangani masalah siswa, tetapi juga harus mencerminkan nilai-nilai keislaman yang menjadi dasar seluruh proses pendidikan — menjadikannya bagian dari misi tarbiyah: memanusiakan anak, menjaga fitrahnya, dan membentuk karakter dengan kasih sayang dan keadilan. Konsep <em>rahmatan lil 'alamin</em> (rahmat bagi semesta alam) menjadi paradigma utama mendidik — dalam konteks deteksi dini, ini berarti melihat siswa sebagai amanah Allah yang harus dijaga dengan cinta, menjadikan proses deteksi sebagai bentuk kasih sayang bukan pengawasan yang menakutkan, serta menghindari pendekatan yang keras atau mempermalukan.</p>
  <p>Islam juga sangat menjunjung tinggi keadilan (<em>al-'adl</em>) dan kehormatan manusia (<em>karamat al-insan</em>), yang mendorong sekolah bersikap adil pada setiap siswa tanpa menilai berdasarkan label atau prasangka. Humanis berarti memahami keunikan tiap siswa, sedangkan adil berarti memberi perlakuan sesuai kebutuhan, bukan sama rata — misalnya siswa dengan masalah konsentrasi tidak langsung dicap "pemalas", melainkan diberi pendekatan yang disesuaikan. Prinsip ketiga adalah pendidikan tanpa stigma — dalam Islam tidak ada manusia tanpa potensi, dan bahkan yang bersalah tetap punya peluang untuk berubah, sehingga sekolah tidak boleh melabeli siswa sebagai "anak nakal" atau "anak gangguan" hanya karena menunjukkan gejala masalah tertentu. Deteksi dini harus menjadi alat untuk membantu siswa keluar dari masalah, bukan alat memberi cap buruk, dengan menjaga kerahasiaan hasil deteksi sebagai bagian dari etika pendampingan.</p>

  <h4>B. Kolaborasi Multiperan dalam Lingkungan Sekolah Islam</h4>
  <p>Keunggulan sekolah Islam adalah adanya peran yang kaya dan beragam dalam mendampingi siswa — bukan hanya guru mata pelajaran umum, tetapi juga guru agama, wali kelas, guru BK, hingga pembina asrama. Guru agama sering menjadi rujukan dalam hal akhlak dan spiritualitas, mampu melihat gejala kegelisahan spiritual atau perubahan sikap ibadah; guru BK berperan sebagai fasilitator pendampingan dan perencana intervensi profesional; sementara wali kelas menjadi pihak paling dekat secara harian, biasanya yang pertama mendeteksi perubahan perilaku, emosi, atau sosial siswa. Ketiganya harus saling mendukung, bukan saling menyerahkan tugas, karena deteksi dini hanya berhasil jika komunikasi antarperan berjalan baik.</p>
  <p>Dalam konteks sekolah Islam, guru bukan hanya pengajar materi tetapi juga pembimbing jiwa (<em>murabbi</em>) — berperan sebagai mentor spiritual yang menjadi tempat siswa merasa aman untuk berbagi dan dibimbing secara ruhani, misalnya membantu siswa menenangkan diri lewat zikir atau menyisipkan pembinaan akhlak saat proses belajar berlangsung. Sinergi dengan keluarga juga menjadi pilar penting, sebab masalah siswa di sekolah sering berkaitan erat dengan kondisi di rumah — sekolah perlu melibatkan orang tua sejak awal, menyampaikan bahwa sekolah membuka ruang konsultasi bukan tempat menghakimi, dan mengajak mereka terlibat dalam solusi, bukan hanya menerima laporan. Saat menyampaikan temuan, kalimat seperti "kami melihat beberapa hal yang perlu kita perhatikan bersama" jauh lebih membangun daripada "anak Anda bermasalah". Kolaborasi multiperan bukan sekadar bekerja bersama, tetapi saling melengkapi dalam satu tujuan: menjaga dan menumbuhkan siswa dalam cahaya nilai-nilai Islam.</p>

  <h4>C. Studi Kasus Implementasi Deteksi Dini di Sekolah Islam</h4>
  <p>Agar sistem tidak berhenti di konsep, penting belajar dari implementasi nyata di berbagai tipe sekolah Islam. Di SDIT Nurul Falah, pada minggu pertama tahun ajaran seluruh guru kelas diberi instrumen observasi sederhana untuk mencatat adaptasi siswa baru, pola interaksi dengan teman, dan respons emosional selama kegiatan ibadah rutin — hasilnya dibahas dalam forum wali kelas, dengan kekuatan utama berupa observasi yang ringan namun konsisten dan kolaborasi antarwali kelas yang efektif. Di SMP Al-Hikmah Boarding School, karena siswa tinggal di asrama selama 24 jam, sekolah membentuk tim respons multiperan (wali kamar, guru BK, musyrif ibadah, koordinator pengembangan diri) yang setiap malam mengisi lembar refleksi siswa berisi catatan emosi harian — sistem pelaporan harian yang terstruktur ini memungkinkan penanganan cepat karena pengamatan berlangsung hampir sepanjang waktu.</p>
  <p>Sementara itu, di SMA Islam Cendekia yang berada di wilayah urban dengan siswa heterogen, sekolah menggunakan pendekatan berbasis data digital — setiap guru mengisi form online dua mingguan berisi kehadiran, nilai, dan catatan perilaku, yang dikompilasi otomatis dalam dashboard oleh tim IT lalu dianalisis tim BK dan kurikulum, sehingga siswa dengan "skor perhatian" tinggi bisa segera dijadwalkan sesi pendampingan. Ketiga studi kasus ini membuktikan tidak ada satu model baku untuk deteksi dini — SDIT mengandalkan kedekatan wali kelas, boarding school mengandalkan kolaborasi harian tim asrama, dan SMA urban mengandalkan efisiensi teknologi. Namun semua sekolah yang berhasil memiliki satu kesamaan: komitmen kuat untuk peduli, struktur yang jelas, dan budaya kolaborasi yang hidup.</p>

  <h4>D. Studi Kasus Naratif Implementasi Deteksi Dini</h4>
  <p>Kisah-kisah personal berikut memperlihatkan dampak nyata deteksi dini. Raka, siswa baru kelas 7 di sebuah SMP Islam berasrama, awalnya tampak seperti siswa lain — hadir tepat waktu dan tak pernah melanggar aturan — namun wali kamar mencatat ia selalu sendiri, jarang bicara, dan makan paling terakhir setiap hari. Pola konsisten ini memicu sinyal peringatan di dashboard monitoring, dan setelah pendekatan personal yang santai, terungkap Raka sedang berjuang dengan kesedihan mendalam karena berpisah dari ibunya yang menjalani pengobatan kanker. Lewat mentor sebaya, peran ringan sebagai petugas harian, dan sesi konseling mingguan, dalam sebulan Raka mulai aktif berdiskusi dan bahkan mendaftar ekstrakurikuler jurnalistik atas inisiatif sendiri — membuktikan bahwa deteksi dini yang baik menangkap bukan hanya siswa yang membuat masalah, tetapi juga yang diam-diam sedang berjuang.</p>
  <p>Kisah Dini dan Bima menunjukkan bagaimana sistem yang berbeda menghasilkan dampak yang jauh berbeda meski gejalanya sama — keduanya sering salah menyalin tulisan dan memicingkan mata saat melihat ke depan. Di sekolah Dini yang memiliki observasi awal semester terjadwal, gejala ini segera ditindaklanjuti hingga diketahui ia mengalami rabun jauh ringan dan diberi kacamata serta dukungan yang membuatnya kembali percaya diri dalam hitungan minggu. Sebaliknya, di sekolah Bima yang belum punya sistem observasi, gejala yang sama disalahartikan sebagai kemalasan hingga ia sempat dimarahi — baru setelah nilainya anjlok dan ia enggan sekolah, orang tuanya membawanya ke dokter mata secara mandiri, namun kepercayaan dirinya sudah terlanjur rusak. Kisah lain seperti Fahri yang murung karena perceraian orang tuanya, Nina yang ternyata tak pernah dipilih teman sekelas lewat sosiometri, dan Andi yang berprestasi namun menyimpan tekanan besar akibat tuntutan menjadi juara, semuanya menegaskan pesan yang sama: deteksi dini harus menjangkau semua siswa, bukan hanya yang tampak jelas bermasalah, tetapi juga mereka yang terlalu diam atau terlalu patuh sekalipun.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kisah-kisah siswa (Raka, Dini dan Bima, Fahri, Nina, Andi) yang dibahas di bab ini, kisah mana yang paling mengingatkan Anda pada situasi siswa di sekolah Anda sendiri, dan langkah apa yang bisa mulai diambil untuk siswa tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, apa istilah yang digunakan untuk menggambarkan bahwa deteksi dini di sekolah Islam merupakan bagian dari misi memanusiakan anak, menjaga fitrahnya, dan membentuk karakter dengan kasih sayang?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Misi tarbiyah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Misi kurikulum nasional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Misi akreditasi sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam menerapkan deteksi dini, namun setiap kali ditemukan siswa bermasalah, namanya langsung dibahas terbuka dalam rapat guru dan diberi label seperti "anak nakal" di depan rekan-rekan guru lain. Berdasarkan prinsip pendidikan tanpa stigma pada Bab 5, apa yang keliru dari praktik ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Praktik ini bertentangan dengan prinsip menjaga kerahasiaan dan menghindari pelabelan, padahal deteksi dini seharusnya menjadi alat membantu siswa keluar dari masalah, bukan memberi cap buruk</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang keliru karena membahas secara terbuka justru mempercepat penanganan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Yang keliru hanya soal tempat rapat, bukan soal pelabelan siswa</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa baru di sekolah berasrama terlihat tenang, disiplin, dan tak pernah melanggar aturan, tetapi wali kamar mencatat ia selalu sendirian, jarang bicara, dan makan paling terakhir setiap hari selama dua minggu berturut-turut. Berdasarkan studi kasus Raka pada Bab 5, langkah apa yang paling tepat diambil sekolah?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menindaklanjuti pola konsisten ini lewat observasi tambahan dan ajakan bicara personal yang santai, karena diam berlebihan bisa menjadi sinyal siswa sedang berjuang dengan beban emosional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena siswa tersebut tidak pernah melanggar aturan dan terlihat disiplin</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memindahkan siswa ke sekolah lain karena dianggap tidak bisa beradaptasi</button>
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
<h2 class="reveal">Penanganan Lanjutan, Intervensi, dan Evaluasi Sistem</h2>
<p class="lede reveal">Data hasil deteksi dini hanya bermakna jika ditindaklanjuti secara tepat — bab penutup ini membahas strategi tindak lanjut berjenjang, pentingnya kolaborasi dengan orang tua dan profesional eksternal, serta bagaimana sekolah mengevaluasi dan terus mengembangkan sistem deteksi dini dari waktu ke waktu.</p>

<div class="card reveal">
  <h4>A. Strategi Tindak Lanjut dari Temuan Deteksi Dini</h4>
  <p>Proses deteksi dini tidak akan bermakna tanpa langkah tindak lanjut yang jelas dan tepat — setelah data terkumpul, sekolah perlu merespons dengan tindakan nyata yang membantu siswa keluar dari kesulitan secara manusiawi dan terukur. Tidak semua temuan harus langsung ditangani guru BK atau pimpinan sekolah — sebagian besar bisa dan seharusnya ditindaklanjuti lebih dulu oleh guru dan wali kelas lewat pendekatan yang ringan dan dekat, seperti memberi perhatian khusus dalam belajar, mengajak diskusi pribadi yang santai, atau mendekatkan siswa dengan teman yang suportif. Intervensi ini bersifat preventif, bukan menegur secara formal, melainkan membangun koneksi dan kepercayaan.</p>
  <p>Jika masalah tergolong berat, berulang, atau membutuhkan pendalaman profesional — misalnya gejala kecemasan berlebihan, konflik serius antarsiswa, atau masalah yang belum menunjukkan perubahan setelah ditangani guru — perlu dilakukan intervensi oleh tim khusus atau guru BK, mencakup konseling individual, rujukan ke tenaga profesional eksternal, diskusi kasus bersama tim, hingga penyusunan rencana pembinaan jangka menengah. Langkah yang sering diabaikan namun sangat penting adalah dokumentasi — mencatat seluruh proses dan hasil intervensi dengan rapi membantu tim memahami pola dan kemajuan kasus, menjadi rujukan jika masalah berulang, serta menjaga keberlanjutan penanganan meski terjadi pergantian guru. Dengan strategi tindak lanjut yang proporsional, sekolah mampu membangun sistem yang responsif sekaligus beradab dan peduli.</p>

  <h4>B. Kolaborasi dengan Orang Tua dan Profesional Eksternal</h4>
  <p>Sekolah tidak bisa berjalan sendiri dalam menangani masalah siswa — dukungan orang tua dan tenaga profesional eksternal tetap menjadi bagian tak terpisahkan dari proses pemulihan. Komunikasi yang baik dengan orang tua adalah kunci keberhasilan intervensi, dengan prinsip menyampaikan kondisi dengan bahasa positif dan fokus pada solusi, menggunakan data dan contoh konkret bukan opini, mengajak orang tua menjadi bagian dari tim bukan pihak yang dinilai, serta mendengarkan masukan mereka dengan terbuka karena mereka memahami sisi rumah tangga anak.</p>
  <p>Ada kalanya masalah siswa tidak cukup ditangani guru atau guru BK — misalnya saat menunjukkan gejala depresi atau trauma psikologis — sehingga sekolah perlu memiliki jalur rujukan profesional yang jelas, membangun kemitraan dengan psikolog atau klinik mitra, dan menyampaikan kepada orang tua bahwa rujukan bukan vonis melainkan bentuk kepedulian. Salah satu prinsip terpenting dalam seluruh proses ini adalah menjaga kerahasiaan informasi siswa — hanya pihak yang relevan boleh mengakses informasi sensitif, diskusi kasus dilakukan secara tertutup dan profesional, serta nama siswa dihindari dalam forum publik saat membahas contoh kasus. Kolaborasi yang kuat dengan orang tua dan profesional luar adalah bentuk nyata komitmen sekolah Islam dalam menjaga amanah pendidikan secara menyeluruh.</p>

  <h4>C. Evaluasi dan Refleksi untuk Pengembangan Sistem</h4>
  <p>Sistem deteksi dini yang baik tidak hanya berhenti pada pelaksanaan, tetapi juga memerlukan evaluasi dan refleksi yang rutin dan menyeluruh — tanpa evaluasi, sekolah tidak akan tahu apakah langkah yang dilakukan sudah berdampak atau bagian mana yang perlu diperbaiki. Evaluasi bukanlah ajang menyalahkan, melainkan proses belajar bersama, dan agar tidak bersifat subjektif, sekolah perlu menetapkan indikator keberhasilan yang konkret — mencakup output teknis seperti jumlah siswa yang terdeteksi lebih awal, dampak nyata seperti penurunan pelanggaran atau meningkatnya partisipasi siswa yang sebelumnya pasif, serta kualitas sistem seperti kelengkapan dokumentasi dan SOP.</p>
  <p>Evaluasi akan lebih efektif jika dilakukan secara berkala melalui pertemuan tim respons bulanan, refleksi bersama wali kelas, dan review dokumen observasi yang terkumpul — bukan hanya di akhir semester. Monitoring tidak perlu rumit, yang penting terus menghidupkan percakapan tentang kondisi siswa agar deteksi dini tidak menjadi rutinitas kosong. Sistem ini juga perlu terus tumbuh mengikuti perubahan zaman lewat pelatihan rutin bagi guru, penyempurnaan instrumen setiap tahun berdasarkan masukan lapangan, penguatan digitalisasi, serta pembentukan komunitas praktik internal antarguru. Evaluasi dan refleksi bukan tanda bahwa sistem kita salah, melainkan bukti bahwa sekolah siap belajar dan tumbuh bersama, hingga deteksi dini menjadi bagian integral dari budaya sekolah yang peduli, adaptif, dan berkualitas.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga elemen evaluasi sistem deteksi dini (indikator keberhasilan, monitoring berkala, dan strategi pengembangan berkelanjutan) yang dibahas di bab ini, elemen mana yang paling belum berjalan di sekolah Anda, dan langkah kecil apa yang bisa dimulai bulan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, apa saja tiga elemen utama yang perlu dibangun dalam proses evaluasi sistem deteksi dini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Indikator keberhasilan, monitoring berkala, dan strategi pengembangan berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anggaran tahunan, jumlah ruang kelas, dan jumlah guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Nilai rapor siswa, jumlah ekstrakurikuler, dan prestasi lomba</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah selalu menyelesaikan setiap kasus masalah siswa dengan baik, namun tidak pernah mencatat proses maupun hasil intervensinya secara tertulis. Ketika wali kelas berganti di tengah tahun, guru pengganti kebingungan memahami kondisi siswa tertentu. Berdasarkan Bab 6, apa yang seharusnya diperbaiki sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melengkapi proses dengan dokumentasi, pencatatan, dan pelaporan kasus yang rapi, agar penanganan tetap bisa ditelusuri dan dilanjutkan meski terjadi pergantian guru</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu diperbaiki karena yang terpenting adalah masalah sudah selesai ditangani</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup mengandalkan ingatan wali kelas lama tanpa perlu dokumen tertulis apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menemukan siswa yang menunjukkan gejala kecemasan berlebihan dan penurunan drastis dalam interaksi sosial selama beberapa minggu, namun guru BK merasa kasus ini terlalu kompleks untuk ditangani sendiri di sekolah. Berdasarkan Bab 6, langkah paling tepat yang sebaiknya diambil adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merujuk siswa ke psikolog atau klinik mitra eksternal yang telah dijalin sekolah, sambil tetap menjaga pendampingan internal yang selaras dan mengomunikasikannya secara empatik kepada orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan kasus tersebut karena guru BK sudah merasa kewalahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengumumkan kondisi siswa tersebut ke seluruh guru dalam rapat besar agar semua tahu</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab6" onclick="markDone('bab6')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab6">✓ Bab 6 selesai dibaca</p>
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
    <p>Sebuah sekolah baru mulai membangun sistem deteksi dini dan bertanya apa yang membedakannya dari sekadar reaksi spontan terhadap masalah yang sudah membesar. Berdasarkan Bab 1, jawaban paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deteksi dini memiliki tujuan yang jelas dan strategis — seperti mengenali perilaku bermasalah sejak awal, faktor risiko, dan menguatkan komunikasi guru-orang tua — bukan sekadar respons dadakan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deteksi dini sama saja dengan reaksi spontan, hanya istilahnya berbeda</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Deteksi dini hanya berlaku untuk siswa yang sudah menunjukkan pelanggaran berat</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, prinsip inklusifitas dalam sistem deteksi dini menuntut sekolah untuk...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menjangkau seluruh siswa tanpa kecuali, termasuk yang tampil biasa-biasa saja dan tidak menonjol</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memfokuskan perhatian hanya pada siswa yang paling sering melanggar aturan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi perhatian khusus hanya kepada siswa berprestasi agar potensinya makin optimal</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa kerap salah menyalin tulisan dari papan tulis, membaca terlalu dekat dari buku, dan enggan menjawab pertanyaan berbasis visual. Berdasarkan spektrum masalah akademik pada Bab 2, gejala ini paling mendekati indikasi...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Masalah kematangan karir yang perlu penanganan guru BK</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemungkinan gangguan penglihatan atau kesulitan belajar yang perlu ditindaklanjuti dengan observasi dan kemungkinan pemeriksaan lebih lanjut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Perilaku indisipliner yang harus segera diberi sanksi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2, mengapa siswa yang menarik diri dari lingkungan sosial tetap perlu mendapat perhatian meski tidak menunjukkan perilaku negatif yang mencolok?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena dalam jangka panjang mereka berisiko mengalami kesulitan pengembangan sosial, isolasi emosional, hingga gangguan psikologis seperti depresi ringan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena siswa yang menyendiri pasti mengalami gangguan belajar spesifik seperti disleksia</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena perilaku menyendiri selalu merupakan tanda bakat khusus yang perlu dikembangkan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa SMA yang selalu berprestasi dan disiplin tiba-tiba menolak kegiatan non-akademik dan semakin sering murung tanpa sebab yang jelas terlihat. Berdasarkan Bab 2, sikap yang tepat dari sekolah adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkannya karena prestasi akademiknya tetap tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap mendekati dan menggali kondisinya, karena siswa yang tampak sempurna sekalipun bisa menyimpan tekanan emosional yang tidak terlihat dari luar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah beban akademik agar ia semakin fokus dan tidak sempat murung</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin memulai sistem deteksi dini di tahun ajaran baru, tetapi bingung harus mulai dari mana. Berdasarkan Bab 3, langkah paling awal yang perlu dilakukan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melakukan analisis kebutuhan dan kondisi awal — memahami profil siswa baru, sumber daya sekolah, dan menentukan prioritas masalah — sebelum membentuk tim atau menyusun instrumen</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menyusun 20 soal asesmen komprehensif untuk seluruh siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu sampai ada siswa yang bermasalah secara nyata baru mulai bertindak</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 3, siapa yang idealnya menjadi pengamat utama dan penghubung komunikasi paling dekat dengan siswa sehari-hari dalam struktur Tim Respons Masalah Siswa?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepala sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Wali kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Psikolog mitra eksternal</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah sudah memiliki SOP penanganan masalah siswa yang lengkap, tetapi tidak pernah disosialisasikan atau ditetapkan sebagai kebijakan resmi oleh kepala sekolah. Berdasarkan Bab 3, apa yang berisiko terjadi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem berisiko tidak memiliki legitimasi dan mudah terputus di tengah jalan karena belum menjadi bagian dari kebijakan dan budaya kerja sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena SOP tertulis saja sudah cukup tanpa kebijakan resmi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem justru akan berjalan lebih cepat tanpa perlu payung kebijakan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, mengapa sekolah dianjurkan melakukan review internal dan uji coba kecil sebelum menyebarkan instrumen deteksi dini secara luas?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar dipastikan pertanyaan sesuai konteks siswa, mudah dipahami, dan menghasilkan data yang relevan serta bisa ditindaklanjuti</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena uji coba wajib dilakukan oleh dinas pendidikan sebelum instrumen boleh dipakai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar instrumen terlihat lebih rumit dan meyakinkan bagi orang tua</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin memetakan siapa saja siswa yang cenderung terisolasi atau tidak memiliki teman dekat dalam kelas. Berdasarkan Bab 4, instrumen yang paling tepat digunakan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Analisis hasil belajar dan absensi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sosiometri, karena dirancang khusus untuk memetakan dinamika dan hubungan sosial dalam kelas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Studi kasus individual yang mendalam</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, mengapa nilai akademik yang tiba-tiba turun tidak boleh langsung dijadikan satu-satunya dasar kesimpulan tentang kondisi siswa?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena nilai hanyalah indikator awal dan perlu dikombinasikan dengan data lain seperti observasi atau wawancara agar tidak keliru memahami situasi siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena nilai akademik tidak pernah mencerminkan kondisi siswa sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena nilai akademik hanya relevan untuk siswa jenjang SMA/SMK</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, konsep rahmatan lil 'alamin dalam deteksi dini di sekolah Islam berarti...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melihat siswa sebagai amanah Allah yang harus dijaga dengan cinta, dan menjadikan proses deteksi sebagai bentuk kasih sayang, bukan pengawasan yang menakutkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi hukuman yang lebih tegas kepada siswa yang terdeteksi bermasalah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatasi deteksi dini hanya pada siswa yang aktif mengikuti kegiatan keagamaan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam menemukan siswa yang mulai jarang bersosialisasi dan tampak murung setelah panggilan telepon ke rumah. Berdasarkan peran guru sebagai mentor spiritual pada Bab 5, pendekatan yang paling sesuai adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Segera memindahkan siswa tersebut ke kelas lain tanpa penjelasan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membuka ruang aman bagi siswa untuk bercerita, mendekatinya dengan empati, dan membantunya menemukan ketenangan lewat pendampingan yang bernuansa ruhiyah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan gejala tersebut karena dianggap urusan pribadi keluarga semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan studi kasus Dini dan Bima pada Bab 5, apa pelajaran utama yang bisa dipetik meski keduanya mengalami gejala yang sama?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Hasil akhir yang sangat berbeda ditentukan oleh kesiapan sistem dan kepekaan guru dalam mengamati, mencatat, dan bertindak sejak awal, bukan oleh kondisi anaknya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dini lebih beruntung semata karena secara alami lebih cerdas dibanding Bima</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah Bima sudah melakukan hal yang benar karena tetap menyelesaikan masalah meski terlambat</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, mengapa kolaborasi antara guru agama, guru BK, dan wali kelas penting dalam sistem deteksi dini di sekolah Islam?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena masing-masing memiliki sudut pandang dan kedekatan berbeda dengan siswa, sehingga saling melengkapi jika bekerja sebagai satu tim, bukan saling menyerahkan tugas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena hanya guru agama yang berwenang menangani seluruh masalah siswa di sekolah Islam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena wali kelas sebaiknya tidak dilibatkan dalam masalah yang bersifat emosional</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, dalam kondisi apa sebuah kasus siswa idealnya ditindaklanjuti langsung oleh guru atau wali kelas, tanpa perlu melibatkan tim khusus atau guru BK?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketika masalah tergolong ringan dan bisa direspons lewat pendekatan preventif serta suportif, seperti menyapa lebih sering atau mengajak diskusi pribadi yang santai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketika siswa menunjukkan gejala gangguan emosional berat seperti depresi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketika kasus tersebut sudah melibatkan laporan sensitif dari orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah selalu berhasil menangani masalah siswa, tetapi tidak pernah mendokumentasikan proses maupun hasil intervensinya. Berdasarkan Bab 6, risiko jangka panjang dari kebiasaan ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keberlanjutan penanganan bisa terganggu, terutama saat terjadi pergantian guru, karena tidak ada rujukan tertulis mengenai riwayat dan pola kasus siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena yang terpenting adalah masalah selesai ditangani pada saat itu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dokumentasi hanya diperlukan untuk kepentingan administrasi semata, tidak berdampak pada penanganan siswa</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, mengapa rujukan ke psikolog atau klinik mitra eksternal perlu disampaikan kepada orang tua sebagai bentuk kepedulian, bukan sebagai vonis?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar orang tua tidak merasa dihakimi atau anaknya dicap bermasalah, sehingga mau bekerja sama dan mendukung proses penanganan lanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Agar sekolah bisa melepaskan tanggung jawab sepenuhnya kepada pihak eksternal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena rujukan eksternal wajib dirahasiakan dari orang tua</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah rutin membentuk tim, menyusun instrumen, dan menjalankan intervensi, tetapi tidak pernah mengevaluasi indikator keberhasilan maupun melakukan monitoring berkala. Berdasarkan Bab 6, apa yang paling mungkin terjadi pada sistem deteksi dini sekolah ini dalam jangka panjang?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem berisiko menjadi rutinitas kosong yang tidak berkembang, karena sekolah tidak pernah tahu bagian mana yang sudah berdampak dan mana yang perlu diperbaiki</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem akan tetap sempurna selamanya tanpa perlu evaluasi apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi hanya penting bagi sekolah besar, bukan bagi sekolah dengan jumlah siswa sedikit</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah Islam yang baru merintis program deteksi dini bertanya, fondasi apa yang paling penting dipastikan lebih dulu sebelum memikirkan aplikasi digital atau instrumen yang canggih. Berdasarkan keseluruhan isi buku ini, jawaban paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membeli aplikasi pemantauan siswa paling mahal yang tersedia di pasaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komitmen kolaborasi lintas peran, kepekaan guru dalam mengamati sejak dini, serta nilai-nilai keadilan dan kasih sayang yang menjiwai setiap langkah penanganan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga seluruh siswa lulus dan sistem baru dievaluasi di akhir</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
