/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Murid Nurut Tanpa Harus Emosi"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-murid-nurut-tanpa-emosi.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Memahami Emosi Diri & Perilaku Murid</h2>
<p class="lede reveal">Sebelum seorang guru bisa menenangkan murid yang sulit diatur, ia perlu lebih dulu mengenali gejolak emosinya sendiri — sebab emosi yang tidak dipahami akan mudah bocor menjadi bentakan, sementara perilaku murid yang tidak dipahami akan mudah disalahartikan sebagai kenakalan semata.</p>

<div class="card reveal">
  <h4>A. Jenis-jenis Emosi yang Umum Dialami Guru</h4>
  <p>Menjadi guru berarti bersedia menghadapi rentetan emosi setiap hari, dan itu adalah hal yang manusiawi. Salah satu yang paling sering muncul adalah stres — tekanan yang timbul karena beban kerja menumpuk: menyiapkan materi, mengoreksi tugas, menghadapi puluhan karakter murid sekaligus, dan memenuhi ekspektasi kepala sekolah maupun orang tua yang kadang berbeda arah. Jika dibiarkan menumpuk tanpa jeda, stres ini bisa merembet ke fisik (sakit kepala, sulit tidur) maupun ke cara guru mengajar — mudah tersulut, kehilangan fokus, dan kehilangan semangat.</p>
  <p>Emosi lain yang tak kalah akrab adalah frustrasi, yaitu rasa kecewa ketika usaha yang sudah dikerahkan tidak membuahkan hasil yang diharapkan. Frustrasi biasanya muncul saat guru sudah menjelaskan berulang kali namun murid tetap tidak paham, atau ketika aturan kelas yang susah payah dibangun terus-menerus dilanggar. Semakin guru merasa sudah "melakukan segalanya" tanpa hasil, semakin kuat pula rasa tidak berdayanya — apalagi jika ia merasa tidak mendapat dukungan dari rekan kerja atau orang tua murid.</p>
  <p>Marah adalah emosi yang lebih meledak-ledak, biasanya dipicu ketika murid dianggap tidak menghormati otoritas guru — membuat gaduh, menentang instruksi secara terang-terangan, atau bahkan membahayakan diri sendiri dan teman-temannya. Marah itu sendiri wajar dan manusiawi; yang membedakan guru yang baik bukanlah ketiadaan rasa marah, melainkan caranya mengelola dan mengungkapkan kemarahan itu tanpa merusak hubungan dengan murid. Selain itu ada pula kekecewaan — perasaan sedih ketika harapan terhadap perkembangan atau sikap murid tidak sesuai kenyataan — serta emosi-emosi lain seperti cemas, sedih, atau takut yang sama sahnya untuk dirasakan. Kuncinya bukan menekan emosi-emosi ini, melainkan mengenalinya, mencari cara sehat untuk menyalurkannya (olahraga, berbagi cerita dengan rekan, waktu untuk diri sendiri), dan mencari bantuan profesional bila memang dibutuhkan.</p>

  <h4>B. Faktor-faktor yang Memengaruhi Emosi Guru</h4>
  <p>Gejolak emosi guru umumnya bersumber dari dua arah. Dari dalam diri (faktor internal), ada beban kerja yang menumpuk dan tenggat waktu yang ketat, interaksi harian dengan murid yang menantang atau tidak disiplin, hingga masalah pribadi di luar sekolah — urusan keluarga, keuangan, atau kesehatan — yang ikut terbawa ke ruang kelas meski guru berusaha memisahkannya. Semua ini membuat "kapasitas emosional" guru terkuras sebelum bel pelajaran pertama berbunyi.</p>
  <p>Dari luar diri (faktor eksternal), ada tekanan berupa ekspektasi yang bertumpuk dari berbagai pihak — pimpinan sekolah yang menuntut capaian akademik, orang tua yang menuntut perhatian khusus, serta masyarakat yang menaruh standar tinggi pada profesi guru. Lingkungan kerja yang kurang suportif, minimnya apresiasi, dan komentar negatif dari sekitar juga bisa memperberat beban emosional ini. Menyadari dari mana sumber emosi itu berasal adalah langkah pertama yang penting: dengan mengenali pemicunya, guru bisa memilah mana yang bisa ia kendalikan (manajemen waktu, cara merespons murid) dan mana yang perlu disikapi dengan cara lain (mencari dukungan, menjaga kesehatan fisik dan mental, membangun hubungan yang lebih positif dengan murid agar interaksi harian terasa lebih ringan).</p>

  <h4>C. Cara Mengenali dan Memahami Emosi Diri Sendiri</h4>
  <p>Mengenali emosi diri sendiri dimulai dari kebiasaan sederhana: berhenti sejenak dan bertanya pada diri sendiri, "Apa yang sebenarnya saya rasakan sekarang, dan apa yang memicunya?" Banyak guru langsung bereaksi terhadap situasi kelas tanpa sempat menamai emosi yang sedang mereka alami — padahal jeda beberapa detik untuk mengenali apakah yang dirasakan itu marah, kecewa, cemas, atau justru lelah, sudah cukup untuk mencegah reaksi berlebihan. Tanda-tanda fisik juga bisa jadi sinyal awal: jantung berdebar lebih cepat, rahang mengeras, atau suara yang mulai meninggi adalah isyarat tubuh bahwa emosi sedang menguat dan perlu disikapi sebelum meledak menjadi kata-kata yang disesali kemudian.</p>
  <p>Cara lain yang efektif adalah membiasakan diri mencatat atau merefleksikan pengalaman emosional setelah hari mengajar berakhir — situasi apa yang memicu emosi tertentu, bagaimana reaksi yang muncul, dan apakah reaksi itu sudah tepat atau perlu diperbaiki di lain waktu. Kebiasaan ini melatih kesadaran diri (self-awareness) yang menjadi fondasi bagi seluruh strategi pengelolaan emosi di bab-bab berikutnya. Guru yang terbiasa mengenali emosinya sendiri akan lebih mudah menahan diri sebelum bereaksi impulsif, dan lebih mampu memilih respons yang sesuai dengan situasi — alih-alih dikuasai oleh emosi yang sedang bergejolak.</p>

  <h4>D. Memahami Perilaku Anak Bermasalah</h4>
  <p>Perilaku murid yang tampak "nakal" atau sulit diatur nyaris selalu punya akar yang lebih dalam daripada sekadar niat membangkang. Salah satu sumber yang paling umum adalah kondisi keluarga: anak yang tumbuh di tengah konflik rumah tangga, perceraian, atau kurangnya kasih sayang cenderung merasa tidak aman dan bisa menunjukkan perilaku agresif atau justru menarik diri sebagai caranya mencari perhatian. Pengalaman dirundung (bullying), baik di sekolah maupun di lingkungan sosial lain, juga sering meninggalkan tekanan emosional yang besar — muncul sebagai rasa takut, rendah diri, atau justru sikap agresif sebagai bentuk pertahanan diri. Anak yang kesulitan mendapatkan teman atau merasa terisolasi secara sosial pun rentan menunjukkan perilaku bermasalah, entah menjadi terlalu pendiam atau justru memberontak untuk mencari validasi.</p>
  <p>Faktor lingkungan turut berperan besar: anak yang tumbuh di lingkungan penuh konflik, kebisingan, atau paparan kekerasan (baik dari rumah, media, maupun sekitarnya) cenderung meniru pola perilaku kasar sebagai "cara normal" menyelesaikan masalah, sementara anak dengan akses terbatas terhadap pendidikan dan dukungan yang layak sering merasa terpinggirkan dan rendah diri. Di balik semua ini sering bersembunyi kebutuhan dasar yang belum terpenuhi — kebutuhan akan kasih sayang, perhatian, dan rasa aman. Anak yang merasa kurang diperhatikan bisa saja memilih jalan pintas: membuat keributan atau melanggar aturan, karena bagi mereka perhatian negatif terasa lebih baik daripada tidak diperhatikan sama sekali.</p>
  <p>Sumber lain yang tak kalah penting adalah strategi coping (cara menghadapi tekanan) yang belum sehat. Anak-anak yang belum punya cara yang baik untuk mengelola emosi sulit — marah, cemas, kecewa — sering melampiaskannya lewat perilaku menghindar (menarik diri, mengabaikan tugas) atau justru agresivitas (melawan, berkelahi). Memahami bahwa perilaku bermasalah adalah gejala, bukan akar masalah itu sendiri, mengubah cara pandang guru: dari sekadar "menghukum perilaku" menjadi "mencari dan menjawab kebutuhan di baliknya" — lewat komunikasi yang baik dengan orang tua, lingkungan kelas yang terasa aman, serta membekali anak dengan cara mengelola emosi yang lebih sehat.</p>

  <h4>E. Menilai Perilaku Berdasarkan Teori Tindakan Beralasan</h4>
  <p>Teori tindakan beralasan (theory of reasoned action) membantu guru membaca perilaku murid bukan sebagai kejadian acak, melainkan sebagai hasil dari rangkaian proses berpikir yang bisa ditelusuri: motif (dorongan atau kebutuhan yang melatarbelakangi tindakan), tujuan (hasil yang ingin dicapai murid lewat perilakunya), keyakinan (apa yang dipercaya murid tentang dirinya, gurunya, dan situasi yang dihadapinya), ekspektasi (apa yang diperkirakan murid akan terjadi akibat tindakannya), atribusi (bagaimana murid memaknai penyebab suatu kejadian — apakah karena dirinya, orang lain, atau keadaan), dan strategi pemecahan masalah yang selama ini ia kuasai.</p>
  <p>Dengan kerangka ini, guru bisa membedah sebuah perilaku "nakal" secara lebih jernih. Misalnya, murid yang terus membuat gaduh mungkin punya motif mencari perhatian, dengan keyakinan bahwa "cara ini satu-satunya yang membuat guru dan teman-teman melihatnya", serta ekspektasi bahwa keributan itu akan membuahkan reaksi (meski negatif) yang lebih baik daripada diabaikan. Alih-alih hanya menghukum perilaku permukaan, guru yang memahami motif dan keyakinan di baliknya bisa merancang respons yang menyasar akar masalah — misalnya memberi perhatian positif yang konsisten sehingga murid tidak lagi perlu mencarinya lewat keributan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari kelima jenis emosi guru yang dibahas (stres, frustrasi, marah, kecewa, dan emosi lainnya), emosi mana yang paling sering muncul dalam keseharian Anda mengajar, dan apa pemicu yang paling umum memunculkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa yang membedakan guru yang baik dalam menghadapi emosi marah, bukan ketiadaan rasa marah itu sendiri?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Cara guru mengelola dan mengungkapkan kemarahan tanpa merusak hubungan dengan murid</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan guru untuk sama sekali tidak pernah merasa marah dalam situasi apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kecepatan guru dalam menjatuhkan hukuman kepada murid yang membuatnya marah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru merasa jantungnya berdebar cepat dan suaranya mulai meninggi saat menghadapi murid yang ribut. Berdasarkan Bab 1 bagian C, apa langkah paling tepat yang sebaiknya dilakukan guru tersebut sebelum merespons?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung membentak murid agar keributan segera berhenti tanpa menunda waktu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Berhenti sejenak untuk mengenali tanda fisik dan menamai emosi yang dirasakan sebelum bereaksi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan sepenuhnya sensasi fisik tersebut karena dianggap tidak relevan dengan situasi kelas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang murid terus-menerus membuat keributan di kelas meski sudah berkali-kali ditegur. Setelah ditelusuri, ternyata di rumah ia jarang mendapat perhatian dari orang tuanya yang sibuk bekerja. Berdasarkan teori tindakan beralasan pada Bab 1 bagian E, motif apa yang paling mungkin mendasari perilaku murid tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Motif untuk sengaja merusak fasilitas sekolah tanpa alasan yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Motif untuk menunjukkan kepintaran akademis di depan teman-temannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Motif mencari perhatian, karena keributan dianggap satu-satunya cara efektif untuk diperhatikan</button>
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
<h2 class="reveal">Strategi Mengelola Emosi & Perilaku Murid</h2>
<p class="lede reveal">Setelah memahami akar emosi diri dan perilaku murid, langkah berikutnya adalah membekali diri dengan teknik-teknik konkret: menenangkan diri, berkomunikasi secara efektif, meredakan situasi sulit di kelas, dan merawat hubungan yang positif dengan murid dari hari ke hari.</p>

<div class="card reveal">
  <h4>A. Teknik Relaksasi untuk Menenangkan Diri</h4>
  <p>Sebelum merespons situasi yang memicu stres, frustrasi, atau marah, guru perlu lebih dulu menenangkan diri — sebab respons yang diambil dalam kondisi emosi memuncak jarang menjadi respons terbaik. Pernapasan dalam adalah teknik paling sederhana: tarik napas perlahan melalui hidung, tahan sejenak, lalu buang napas perlahan lewat mulut, diulang beberapa kali sampai detak jantung terasa lebih stabil. Teknik mindfulness melengkapinya dengan melatih fokus pada momen saat ini — menyadari pikiran, perasaan, dan sensasi tubuh tanpa buru-buru menghakiminya sebagai baik atau buruk. Sementara itu, visualisasi mengajak guru membayangkan diri berada di tempat atau situasi yang tenang dan damai, sebuah "jeda mental" singkat yang efektif meredakan ketegangan sebelum kembali menghadapi kelas.</p>
  <p>Teknik-teknik ini baru terasa manfaatnya bila dilatih secara rutin, bukan hanya saat situasi sudah memuncak. Memilih tempat yang tenang untuk berlatih, memusatkan perhatian pada napas, dan bersabar karena ketenangan tidak selalu datang seketika, adalah kunci agar relaksasi benar-benar menjadi kebiasaan yang bisa diandalkan saat dibutuhkan — termasuk di sela-sela jam mengajar yang padat.</p>

  <h4>B. Strategi Komunikasi yang Efektif dan Positif</h4>
  <p>Komunikasi asertif adalah kemampuan menyampaikan kebutuhan, perasaan, atau batasan secara jelas dan tegas, namun tetap menghormati perasaan lawan bicara — berbeda dari komunikasi pasif yang memendam ketidaknyamanan, maupun komunikasi agresif yang menyerang. Guru yang asertif menggunakan kalimat "saya" (I-message), misalnya "Saya merasa terganggu ketika kelas ribut saat pelajaran berlangsung, dan saya membutuhkan perhatian kalian agar kita bisa belajar dengan baik," alih-alih menyalahkan murid secara langsung. Cara ini menetapkan batasan dengan tegas tanpa memicu konflik, sekaligus membuka ruang bagi guru untuk menanggapi kritik dari murid secara tenang dan membangun.</p>
  <p>Mendengarkan aktif melengkapi komunikasi asertif dengan memberi perhatian penuh saat murid berbicara — menjaga kontak mata, memberi isyarat nonverbal seperti anggukan, serta sesekali mengulang atau merangkum apa yang disampaikan murid untuk memastikan pemahaman yang tepat ("Jadi kamu merasa kesulitan dengan tugas ini karena instruksinya kurang jelas, begitu?"). Murid yang merasa benar-benar didengar akan lebih terbuka, lebih percaya diri berpartisipasi, dan lebih jarang memicu kesalahpahaman yang berujung konflik.</p>
  <p>Bahasa positif menjadi pelengkap terakhir: memberi pujian yang tulus dan spesifik atas usaha murid, menghindari kritik yang merendahkan, memberikan umpan balik yang membangun (fokus pada cara memperbaiki, bukan sekadar menyalahkan), serta lebih menekankan solusi daripada berlarut-larut pada masalah. Pujian dan penghargaan sebaiknya diberikan secara adil kepada semua murid — bukan hanya yang menonjol — dan tidak berlebihan dalam bentuk materi, agar motivasi murid tetap tumbuh dari dalam dirinya sendiri, bukan sekadar mengejar hadiah.</p>

  <h4>C. Langkah-langkah untuk Mengatasi Situasi Sulit di Kelas</h4>
  <p>Ketika situasi kelas memanas — murid yang terus mengganggu, murid yang marah dan agresif, atau murid yang tiba-tiba menarik diri — guru perlu langkah yang terukur, bukan reaksi spontan. Langkah pertama selalu menenangkan diri sendiri terlebih dahulu (lihat bagian A), karena guru yang tenang jauh lebih mampu membaca situasi secara jernih. Untuk murid yang sering mengganggu, memberi perhatian positif ketika ia berperilaku baik, menggunakan sistem penghargaan sederhana, atau memberi waktu jeda di luar kelas agar ia bisa menenangkan diri, terbukti lebih efektif daripada teguran keras yang berulang.</p>
  <p>Untuk murid yang mudah marah dan agresif, guru perlu mengajarkan strategi menenangkan diri yang sehat, menyediakan ruang tenang bila diperlukan, dan menerapkan teknik de-eskalasi — berbicara dengan nada rendah dan tenang, memberi jarak, serta menghindari konfrontasi langsung di depan teman-temannya. Sementara untuk murid yang menarik diri dari pergaulan, pendekatan yang tepat justru sebaliknya: memberi dorongan lembut untuk berinteraksi, melibatkannya dalam kegiatan kelas, serta membangun rasa percaya dirinya lewat pujian atas pencapaian kecil sekalipun. Di semua situasi ini, mendokumentasikan pola perilaku murid dan berkomunikasi dengan orang tua adalah langkah yang memperkuat efektivitas strategi yang dipilih.</p>

  <h4>D. Membangun Hubungan yang Positif dengan Murid</h4>
  <p>Kepercayaan adalah fondasi dari semua strategi di atas. Guru membangunnya lewat sikap adil dan konsisten (memperlakukan semua murid setara tanpa memihak), menepati janji (bila berjanji memberi umpan balik atau kesempatan bicara, benar-benar ditepati), serta menghormati privasi murid ketika mereka membagikan hal pribadi. Empati — kemampuan melihat situasi dari sudut pandang murid dan ikut merasakan apa yang mereka alami — memperkuat semua ini, karena murid yang merasa dipahami akan jauh lebih terbuka untuk diarahkan dibandingkan murid yang hanya merasa diawasi dan dihukum.</p>
  <p>Ketika keempat unsur ini — keadilan, komitmen menepati janji, penghormatan privasi, dan empati — berjalan bersamaan dan konsisten dari waktu ke waktu, hubungan guru-murid tumbuh menjadi fondasi yang kokoh: murid merasa aman untuk mencoba, salah, dan belajar dari kesalahannya, tanpa rasa takut berlebihan terhadap gurunya sendiri.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga strategi komunikasi pada Bab 2 (asertif, mendengarkan aktif, bahasa positif), strategi mana yang paling jarang Anda terapkan secara konsisten selama ini, dan situasi apa di kelas Anda yang paling membutuhkan penerapan strategi tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2 bagian A, apa fungsi utama teknik visualisasi sebagai bentuk relaksasi bagi guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membayangkan diri berada dalam situasi yang tenang dan damai untuk meredakan stres sebelum merespons situasi kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menuliskan seluruh kesalahan murid secara rinci agar mudah dilaporkan ke orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghafal seluruh aturan kelas secara berulang-ulang setiap pagi sebelum masuk kelas</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru berkata kepada muridnya, "Saya merasa terganggu ketika kelas ribut saat pelajaran, dan saya membutuhkan perhatian kalian agar kita bisa belajar dengan baik," alih-alih berteriak "Diam semua!" Berdasarkan Bab 2 bagian B, pendekatan komunikasi apa yang sedang diterapkan guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Komunikasi pasif, karena guru menghindari penyampaian kebutuhannya secara langsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Komunikasi agresif, karena guru tetap menegur murid meski dengan nada tenang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Komunikasi asertif, karena guru menyampaikan perasaan dan kebutuhan secara jelas tanpa menyerang atau merendahkan murid</button>
  </div>
  <div class="quiz-q">
    <p>Seorang murid tiba-tiba menunjukkan kemarahan yang meledak-ledak di kelas hingga membentak temannya. Berdasarkan Bab 2 bagian C, langkah paling tepat yang sebaiknya diambil guru pertama kali adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memarahi murid tersebut di depan seluruh kelas agar menjadi contoh bagi yang lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menenangkan diri sendiri terlebih dahulu, lalu menerapkan teknik de-eskalasi dengan nada rendah dan memberi ruang tenang bila diperlukan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan situasi tersebut sepenuhnya dan melanjutkan pelajaran seperti biasa</button>
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
<h2 class="reveal">Menerapkan Strategi dalam Praktek</h2>
<p class="lede reveal">Memahami teori dan teknik saja tidak cukup — bab ini mengajak Anda melihat bagaimana strategi-strategi pada bab sebelumnya benar-benar bekerja lewat contoh kasus nyata, tips praktis, dan saran untuk menjaga hubungan yang positif dengan murid dalam keseharian di kelas.</p>

<div class="card reveal">
  <h4>A. Contoh Kasus Nyata di Kelas</h4>
  <p>Bayangkan seorang murid yang terus-menerus mengganggu jalannya pelajaran — berbicara sendiri, mengganggu teman sebangku, atau melempar kertas ke arah lain. Alih-alih terus-menerus menegur dengan nada tinggi, guru yang menerapkan strategi bab sebelumnya akan memberi perhatian positif justru saat murid itu duduk tenang, menawarkan sistem penghargaan kecil untuk perilaku baik, dan hanya memberi waktu jeda di luar kelas ketika gangguan benar-benar tidak bisa diredakan di tempat. Hasilnya, murid belajar bahwa perhatian yang ia cari justru datang lebih banyak saat ia berperilaku baik, bukan saat ia membuat onar.</p>
  <p>Kasus lain adalah murid yang mudah marah dan agresif — mungkin cepat tersulut saat merasa diejek atau kalah dalam permainan. Guru yang memahami akar emosinya akan mengajarkan cara menenangkan diri (napas dalam, menghitung mundur), menyediakan sudut tenang di kelas sebagai tempat "reset" sementara, dan menerapkan teknik de-eskalasi berupa nada bicara rendah serta tidak mengonfrontasi murid di depan teman-temannya. Sebaliknya, murid yang justru menarik diri dari pergaulan — jarang bicara, menyendiri saat istirahat — memerlukan pendekatan yang berbeda sama sekali: dorongan lembut untuk terlibat dalam kegiatan kelompok, pujian atas pencapaian kecil untuk membangun kepercayaan dirinya, serta kesabaran ekstra karena perubahan pada murid seperti ini biasanya berjalan lebih lambat.</p>

  <h4>B. Tips dan Trik untuk Menerapkan Strategi</h4>
  <p>Tidak ada satu strategi yang cocok untuk semua situasi — guru perlu memilih pendekatan sesuai usia, kepribadian, dan tingkat keparahan perilaku murid yang dihadapi. Setelah strategi dipilih, konsistensi menjadi kunci: murid belajar memahami apa yang diharapkan dari mereka justru ketika respons guru terhadap perilaku tertentu selalu sama, bukan berubah-ubah tergantung suasana hati. Kesabaran juga tidak bisa ditawar, sebab mengubah kebiasaan perilaku membutuhkan waktu — guru yang menyerah terlalu cepat justru berisiko membuat murid merasa usahanya sia-sia.</p>
  <p>Memberi pujian dan penghargaan saat murid menunjukkan perbaikan, sekecil apa pun, membantu mereka merasa dihargai dan termotivasi untuk terus berperilaku baik. Bekerja sama dengan orang tua memperkuat konsistensi ini di luar sekolah, sementara mencari bantuan profesional — psikolog atau konselor sekolah — adalah langkah yang bijak, bukan tanda kegagalan, ketika guru merasa strategi yang sudah dicoba belum juga membuahkan hasil.</p>

  <h4>C. Saran untuk Membangun Hubungan yang Positif dengan Murid</h4>
  <p>Hubungan yang positif dengan murid dibangun dari hal-hal yang tampak kecil namun konsisten: menunjukkan rasa hormat meski murid sedang melakukan kesalahan, benar-benar peduli dengan menanyakan kabar dan kehidupan mereka di luar sekolah, serta bersikap adil dengan menerapkan aturan dan konsekuensi yang sama untuk semua murid tanpa pengecualian. Keterbukaan guru — berbagi pengalaman dan mau mendengarkan cerita murid — membuat hubungan terasa lebih setara dan hangat, sementara kepercayaan yang dibangun lewat janji yang ditepati dan rahasia yang dijaga membuat murid merasa aman untuk terbuka.</p>
  <p>Untuk murid dengan perilaku yang lebih menantang, langkah tambahan diperlukan: meluangkan waktu mengenal mereka secara individual, memberi perhatian positif konsisten saat mereka berperilaku baik, menjelaskan dengan jelas bagaimana perilaku mereka berdampak pada orang lain, serta melibatkan orang tua dalam menyusun rencana perbaikan bersama. Semua ini pada akhirnya menciptakan suasana kelas yang aman dan suportif — tempat di mana murid merasa nyaman mengambil risiko, membuat kesalahan, dan belajar darinya tanpa rasa takut yang berlebihan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga contoh kasus pada Bab 3 (murid pengganggu, murid mudah marah, murid yang menarik diri), kasus mana yang paling mirip dengan situasi yang pernah Anda hadapi di kelas — dan strategi mana dari bab ini yang belum pernah Anda coba terapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berdasarkan contoh kasus pada Bab 3 bagian A, pendekatan apa yang paling tepat untuk murid yang cenderung menarik diri dari pergaulan di kelas?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkannya sepenuhnya sendirian karena dianggap sudah nyaman dengan kondisinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberi dorongan lembut untuk terlibat dalam kegiatan kelompok dan membangun kepercayaan dirinya lewat pujian atas pencapaian kecil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksanya untuk langsung tampil di depan kelas agar terbiasa dengan keramaian</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru sudah mencoba beberapa strategi untuk murid yang agresif, namun perilaku tersebut belum juga membaik setelah beberapa minggu. Berdasarkan Bab 3 bagian B, sikap apa yang paling tepat diambil guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Segera menyerah dan menyimpulkan bahwa murid tersebut memang tidak bisa diperbaiki</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tetap bersabar dan konsisten sambil mempertimbangkan bekerja sama dengan orang tua atau mencari bantuan profesional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti strategi setiap hari secara acak agar murid tidak mudah menebak responsnya</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru menerapkan aturan kelas secara berbeda-beda tergantung murid mana yang melanggar — kadang tegas, kadang dibiarkan. Berdasarkan Bab 3 bagian C, apa dampak paling mungkin dari sikap ini terhadap hubungan guru-murid?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Murid akan semakin menghormati guru karena dianggap fleksibel dan pengertian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Murid akan kehilangan rasa percaya karena tidak ada keadilan dan konsistensi dalam penerapan aturan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena murid tidak pernah memperhatikan cara guru menerapkan aturan</button>
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
<h2 class="reveal">Komponen Bimbingan dan Konseling untuk Mendukung Murid</h2>
<p class="lede reveal">Guru tidak perlu menghadapi setiap masalah perilaku murid sendirian — layanan bimbingan dan konseling (BK) di sekolah dirancang untuk menjadi mitra guru, dan memahami komponen-komponennya membantu guru tahu kapan dan bagaimana memanfaatkannya secara maksimal.</p>

<div class="card reveal">
  <h4>A. Layanan Dasar</h4>
  <p>Layanan dasar BK adalah fondasi yang diberikan kepada seluruh murid, bukan hanya mereka yang bermasalah. Layanan orientasi membantu murid baru memahami diri sendiri, lingkungan sekolah, dan program pendidikan yang tersedia — biasanya lewat penyampaian informasi, diskusi, hingga kegiatan pengenalan sekolah di awal tahun ajaran. Layanan klasikal diberikan kepada seluruh murid di kelas secara terjadwal, membahas topik-topik yang relevan seperti cara belajar efektif, menghadapi ujian, hingga isu kesehatan mental dan pergaulan.</p>
  <p>Layanan kelompok menyasar sekelompok kecil murid dengan kebutuhan serupa, mengembangkan keterampilan sosial dan rasa percaya diri lewat diskusi maupun kegiatan bersama. Sementara itu, layanan kolaborasi menghubungkan guru BK dengan pihak lain — guru mata pelajaran, staf sekolah, orang tua, atau profesional seperti psikolog — untuk memastikan murid yang membutuhkan bantuan khusus mendapatkan dukungan yang tepat. Keempat bentuk layanan dasar ini bekerja bersama membantu murid memahami diri sendiri, mengembangkan potensi, meningkatkan prestasi, serta menjalin hubungan yang sehat dengan orang lain.</p>

  <h4>B. Perencanaan Individual</h4>
  <p>Perencanaan individual membantu murid merencanakan masa depannya secara lebih terarah, dimulai dari pengumpulan data — data diri, bakat dan minat, prestasi belajar, kepribadian, hingga masalah yang sedang dihadapi. Data ini kemudian dinilai untuk memahami kekuatan, kelemahan, peluang, dan tantangan murid secara menyeluruh, sebelum guru BK dan murid bersama-sama menetapkan tujuan yang SMART — spesifik, terukur, dapat dicapai, relevan, dan memiliki batas waktu yang jelas.</p>
  <p>Setelah tujuan disepakati, disusunlah rencana konkret berisi langkah-langkah, strategi, dan target waktu yang realistis, yang kemudian dijalankan dengan pendampingan dan pemantauan dari guru BK. Tahap terakhir adalah evaluasi bersama untuk melihat apakah tujuan sudah tercapai dan apakah rencana perlu direvisi. Proses yang runtut ini membantu murid tidak hanya dalam memilih jurusan atau merencanakan masa depan, tetapi juga dalam meningkatkan motivasi dan keyakinan diri mereka secara umum.</p>

  <h4>C. Layanan Responsif</h4>
  <p>Layanan responsif hadir untuk membantu murid yang sedang menghadapi masalah mendesak — masalah pribadi, konflik dengan teman, atau tekanan emosional lain — baik secara individual maupun kelompok. Konseling individual biasanya dimulai dari membangun hubungan yang nyaman agar murid berani terbuka, dilanjutkan dengan mengumpulkan dan menilai data untuk memahami akar masalah, menetapkan tujuan konseling bersama, menyusun rencana, mendampingi pelaksanaannya, hingga akhirnya mengevaluasi dan merevisi rencana bila diperlukan.</p>
  <p>Layanan ini menjadi jaring pengaman penting ketika strategi yang bisa dilakukan guru di kelas sudah tidak lagi mencukupi — misalnya saat masalah murid berakar dari kondisi keluarga yang rumit atau tekanan emosional yang mendalam. Guru yang jeli mengenali kapan sebuah masalah perlu dirujuk ke guru BK, alih-alih terus mencoba menanganinya sendiri, sesungguhnya sedang memberikan pertolongan terbaik bagi muridnya.</p>

  <h4>D. Dukungan Sistem</h4>
  <p>Agar ketiga komponen di atas berjalan efektif, dibutuhkan dukungan sistem yang menopang keseluruhan program BK di sekolah. Ini mencakup dukungan administratif dan manajemen dari pimpinan sekolah — penyediaan waktu, ruang, dan sumber daya yang memadai bagi guru BK untuk menjalankan tugasnya — serta pengembangan profesional berkelanjutan bagi guru BK itu sendiri, agar mereka terus memperbarui pengetahuan dan keterampilan menghadapi tantangan murid yang terus berubah dari waktu ke waktu.</p>
  <p>Dukungan sistem juga mencakup kolaborasi aktif dengan seluruh warga sekolah dan orang tua, sehingga program BK tidak berjalan sendirian dan terisolasi dari kehidupan murid sehari-hari, serta evaluasi program secara berkala untuk memastikan layanan yang diberikan benar-benar menjawab kebutuhan murid. Ketika keempat komponen BK — layanan dasar, perencanaan individual, layanan responsif, dan dukungan sistem — berjalan selaras, sekolah memiliki jaring pengaman yang kokoh bagi setiap murid, bukan hanya bagi mereka yang perilakunya paling mencolok.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat komponen BK (Layanan Dasar, Perencanaan Individual, Layanan Responsif, Dukungan Sistem), komponen mana yang menurut Anda paling lemah dijalankan di sekolah Anda saat ini, dan bagaimana Anda sebagai guru bisa mendukung penguatannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4 bagian A, layanan BK yang biasanya diberikan kepada murid baru di awal tahun ajaran untuk membantu mereka memahami diri sendiri dan lingkungan sekolah disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Layanan orientasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Layanan responsif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Layanan kolaborasi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru BK ingin membantu murid menetapkan tujuan yang jelas dalam perencanaan individual, bukan sekadar "ingin lebih baik dalam belajar". Berdasarkan Bab 4 bagian B, kerangka apa yang seharusnya digunakan untuk merumuskan tujuan tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup menuliskan tujuan secara umum tanpa perlu batas waktu yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kerangka SMART — spesifik, terukur, dapat dicapai, relevan, dan memiliki batas waktu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kerangka yang hanya berfokus pada nilai ujian akhir semester semata</button>
  </div>
  <div class="quiz-q">
    <p>Seorang murid menunjukkan tekanan emosional yang mendalam akibat konflik keluarga yang rumit, dan guru kelas merasa strategi yang biasa ia terapkan di kelas tidak lagi mencukupi. Berdasarkan Bab 4, langkah paling tepat yang sebaiknya diambil guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Terus menangani masalah tersebut sendirian tanpa melibatkan pihak lain di sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merujuk murid tersebut kepada guru BK untuk mendapatkan layanan responsif yang lebih sesuai dengan kebutuhannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan masalah tersebut karena dianggap bukan tanggung jawab sekolah</button>
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
<h2 class="reveal">Program Pengembangan Empati</h2>
<p class="lede reveal">Di balik seluruh teknik dan strategi pada bab-bab sebelumnya, ada satu kualitas yang menjadi perekat semuanya: empati — kemampuan memahami dan merasakan apa yang dialami murid, lalu bertindak sesuai dengan pemahaman itu.</p>

<div class="card reveal">
  <h4>A. Pengertian Empati</h4>
  <p>Empati bukan sekadar rasa kasihan, melainkan kemampuan menghubungkan diri dengan pengalaman batin orang lain lewat tiga lapis yang saling melengkapi. Empati kognitif adalah kemampuan memahami sudut pandang orang lain secara rasional — mengerti mengapa seseorang bersikap atau merasa seperti itu. Empati afektif adalah kemampuan ikut merasakan emosi yang dialami orang lain, seolah sebagian dari perasaan itu juga hadir dalam diri kita. Sedangkan empati perilaku adalah wujud nyata dari keduanya — bertindak sesuai dengan pemahaman dan perasaan tersebut, misalnya menawarkan bantuan atau sekadar mendengarkan keluh kesah seseorang yang sedang kesulitan.</p>
  <p>Ketiga lapis empati ini penting dipahami bersama, karena empati yang berhenti di tataran memahami atau merasakan saja, tanpa berlanjut ke tindakan, belum sepenuhnya menjawab kebutuhan orang yang membutuhkannya. Empati yang utuh mengubah pemahaman menjadi dukungan emosional yang konkret, penyelesaian konflik yang lebih bijaksana, atau sekadar kehadiran dan waktu yang diberikan kepada orang yang sedang membutuhkannya.</p>

  <h4>B. Manfaat Empati dalam Hubungan Guru-Murid</h4>
  <p>Ketika guru menunjukkan empati, murid merasa dihargai, dipahami, dan didukung — perasaan yang menjadi dasar bagi hubungan guru-murid yang sehat dan pembelajaran yang efektif. Empati membantu guru berkomunikasi dengan lebih baik, karena memahami sudut pandang murid membuat pesan yang disampaikan lebih mudah diterima dan dipahami sebagaimana yang dimaksudkan. Empati juga mendorong kerja sama: murid yang merasa dipahami cenderung lebih termotivasi untuk bekerja sama dengan gurunya maupun teman-teman sekelasnya, dibandingkan murid yang merasa hanya diawasi dan dinilai.</p>
  <p>Lebih jauh, empati membantu menciptakan suasana kelas yang kondusif — murid merasa lebih aman dan nyaman, sehingga lebih fokus pada pembelajaran alih-alih sibuk mempertahankan diri secara emosional. Guru dapat menunjukkan empati lewat hal-hal sederhana namun konsisten: mendengarkan tanpa menyela, menunjukkan kepedulian yang tulus terhadap apa yang dialami murid, mencoba membayangkan diri berada di posisi murid, dan menawarkan dukungan nyata ketika mereka menghadapi kesulitan.</p>

  <h4>C. Strategi untuk Mengembangkan Empati pada Guru & Murid</h4>
  <p>Empati bukan bakat bawaan semata, melainkan keterampilan yang bisa dilatih. Teknik mindfulness — seperti memindai sensasi tubuh dari kepala hingga kaki atau berjalan dengan penuh kesadaran terhadap lingkungan sekitar — melatih guru dan murid untuk lebih peka terhadap perasaan diri sendiri maupun orang lain. Latihan role-playing (bertukar peran) membantu keduanya memahami sudut pandang yang berbeda, misalnya berpura-pura menjadi murid yang sedang dirundung atau orang tua yang sedang berbicara dengan anaknya tentang suatu masalah, sehingga perspektif yang selama ini tidak terlihat menjadi lebih nyata dirasakan.</p>
  <p>Diskusi kelompok tentang apa itu empati, mengapa penting, dan bagaimana menunjukkannya dalam keseharian, membuka ruang berbagi pengalaman yang memperkaya pemahaman bersama. Membaca buku dan cerita yang mengangkat tema empati juga menjadi cara yang efektif, terutama bagi murid yang lebih mudah memahami konsep abstrak lewat kisah dan tokoh yang bisa mereka teladani.</p>

  <h4>D. Contoh Program Pengembangan Empati</h4>
  <p>Program "Circle Time" mengajak murid duduk melingkar untuk berbagi pengalaman, perasaan, dan ide secara terbuka, sehingga tumbuh rasa saling menghormati, keterampilan mendengarkan, dan rasa memiliki terhadap kelompoknya. Program "Resolusi Konflik" mengajarkan langkah-langkah menyelesaikan perselisihan secara damai — mengidentifikasi masalah, mendengarkan semua sudut pandang, mencari solusi yang saling menguntungkan, hingga mencapai kesepakatan bersama — sehingga murid belajar bahwa konflik tidak harus berakhir dengan kekerasan atau permusuhan.</p>
  <p>Program "Peer Mediation" melangkah lebih jauh dengan melatih murid sendiri menjadi mediator bagi konflik antarteman sebayanya — mendengarkan semua pihak secara adil, membantu menemukan solusi bersama, dan menjaga agar proses mediasi berjalan lancar. Ketiga program ini, bila diterapkan secara konsisten, tidak hanya menumbuhkan empati tetapi juga rasa tanggung jawab dan kepemimpinan pada diri murid — bekal yang akan mereka bawa jauh melampaui masa sekolah mereka.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga contoh program pengembangan empati pada Bab 5 (Circle Time, Resolusi Konflik, Peer Mediation), program mana yang paling mungkin diterapkan di kelas Anda dalam waktu dekat, dan langkah pertama apa yang perlu disiapkan untuk memulainya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5 bagian A, kemampuan bertindak nyata sesuai dengan pemahaman dan perasaan terhadap orang lain — misalnya menawarkan bantuan atau mendengarkan keluh kesah seseorang — disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Empati kognitif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Empati afektif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empati perilaku</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru rutin memahami perasaan murid-muridnya secara mendalam, tetapi tidak pernah benar-benar menindaklanjutinya dengan tindakan nyata seperti menawarkan bantuan atau dukungan. Berdasarkan Bab 5 bagian A, apa yang masih kurang dari pendekatan guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Empatinya belum lengkap karena baru sampai pada tataran memahami dan merasakan, belum berlanjut ke tindakan nyata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada yang kurang, karena memahami perasaan murid saja sudah cukup tanpa perlu tindakan lebih lanjut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru tersebut seharusnya berhenti sepenuhnya mencoba memahami perasaan murid</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin melatih murid untuk mampu menjadi penengah yang adil ketika ada konflik antarteman sebaya, tanpa selalu bergantung pada campur tangan guru. Berdasarkan Bab 5 bagian D, program pengembangan empati apa yang paling sesuai untuk tujuan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Program Circle Time semata, karena hanya berfokus pada berbagi cerita melingkar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Program Peer Mediation, karena melatih murid sendiri menjadi mediator yang adil dalam konflik antarteman</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak perlu program khusus, karena konflik antarteman akan selesai dengan sendirinya</button>
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
<p class="lede reveal">Uji pemahaman Anda atas seluruh isi buku ini lewat 20 soal berikut. Skor Anda akan muncul setelah menjawab semua soal dan menekan tombol "Periksa Jawaban Saya" di bagian bawah.</p>

<div class="card reveal">
  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, apa yang dimaksud dengan frustrasi pada guru?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Perasaan kecewa dan tidak puas yang muncul ketika usaha yang dikerahkan tidak membuahkan hasil yang diharapkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Perasaan senang yang muncul ketika murid mencapai target belajar dengan mudah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kondisi fisik yang hanya disebabkan oleh kurang tidur semalam sebelumnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru merasa tertekan karena harus memenuhi ekspektasi kepala sekolah, orang tua, dan murid sekaligus dalam waktu terbatas. Berdasarkan Bab 1 bagian B, faktor apa yang sedang memengaruhi emosi guru tersebut?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor bawaan yang tidak berhubungan dengan lingkungan kerja sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor eksternal, yaitu ekspektasi yang bertumpuk dari berbagai pihak di sekitarnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor genetik yang diturunkan dari keluarganya sejak lahir</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang murid sering membuat keributan di kelas, dan setelah ditelusuri ternyata ia jarang mendapat perhatian dari orang tuanya di rumah. Berdasarkan Bab 1 bagian D, kebutuhan dasar apa yang kemungkinan besar belum terpenuhi pada murid tersebut?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebutuhan akan fasilitas belajar yang lebih modern dan lengkap</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebutuhan akan nilai akademik yang tinggi semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kebutuhan akan kasih sayang dan perhatian dari orang dewasa di sekitarnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Berdasarkan teori tindakan beralasan pada Bab 1 bagian E, elemen yang menjelaskan apa yang dipercaya murid tentang dirinya, orang lain, dan situasi yang dihadapinya disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Atribusi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keyakinan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Strategi pemecahan masalah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2 bagian A, apa perbedaan utama antara pernapasan dalam dan visualisasi sebagai teknik relaksasi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pernapasan dalam berfokus pada napas fisik, sedangkan visualisasi melibatkan membayangkan situasi yang tenang dan damai</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keduanya adalah teknik yang sama persis tanpa ada perbedaan sama sekali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visualisasi hanya bisa dilakukan oleh murid, sedangkan pernapasan dalam hanya untuk guru</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Seorang guru berkata kepada murid, "Saya merasa terganggu ketika kamu tidak memperhatikan selama pelajaran. Saya membutuhkan perhatianmu agar kita bisa belajar dengan baik." Berdasarkan Bab 2 bagian B, ini adalah contoh penerapan...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi pasif yang menghindari penyampaian perasaan secara langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi agresif yang menyalahkan murid secara terbuka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Komunikasi asertif dengan kalimat "saya" (I-message) yang jelas dan penuh hormat</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang murid tiba-tiba marah dan membentak temannya di kelas. Berdasarkan Bab 2 bagian C, langkah pertama yang sebaiknya dilakukan guru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung memarahi murid tersebut di depan seluruh kelas agar menjadi pelajaran bagi yang lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menenangkan diri sendiri terlebih dahulu sebelum menerapkan teknik de-eskalasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan situasi tersebut sepenuhnya dan melanjutkan pelajaran</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2 bagian D, apa yang menjadi fondasi utama dalam membangun hubungan positif antara guru dan murid?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kepercayaan, yang dibangun lewat sikap adil, konsisten, menepati janji, dan menghormati privasi murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Jumlah hadiah materi yang diberikan guru kepada murid setiap minggu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ketegasan guru dalam menghukum murid tanpa memberi ruang untuk berdialog</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Dalam contoh kasus pada Bab 3 bagian A, seorang murid yang sering mengganggu pelajaran justru direspons guru dengan memberi perhatian positif saat ia berperilaku baik dan sistem penghargaan kecil. Apa tujuan utama dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membuat murid merasa takut sehingga tidak berani mengganggu lagi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengajarkan murid bahwa perhatian yang ia cari justru datang lebih banyak saat berperilaku baik, bukan saat membuat onar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghukum murid secara tidak langsung lewat pengabaian total</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Menurut Bab 3 bagian B, mengapa konsistensi dianggap kunci penting dalam menerapkan strategi pengelolaan perilaku murid?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena konsistensi membuat guru terlihat lebih tegas di mata kepala sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena konsistensi tidak memiliki hubungan apa pun dengan perubahan perilaku murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena murid belajar memahami apa yang diharapkan dari mereka ketika respons guru selalu sama, bukan berubah-ubah</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 3 bagian C, apa dampak yang paling mungkin terjadi jika seorang guru menerapkan aturan kelas secara tidak konsisten kepada murid yang berbeda-beda?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid akan kehilangan rasa percaya terhadap guru karena tidak ada keadilan dalam penerapan aturan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid akan semakin menghormati guru karena dianggap sangat fleksibel</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun terhadap hubungan guru dan murid</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 4 bagian A, layanan BK yang menghubungkan guru BK dengan guru mata pelajaran, orang tua, atau profesional lain untuk membantu murid dengan kebutuhan khusus disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Layanan orientasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Layanan kolaborasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Layanan klasikal</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin membantu murid merumuskan tujuan belajar yang jelas, bukan sekadar "ingin lebih baik". Berdasarkan Bab 4 bagian B, kerangka apa yang sebaiknya digunakan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kerangka yang hanya berfokus pada nilai rapor semester berjalan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kerangka yang disusun sepenuhnya oleh guru BK tanpa melibatkan murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kerangka SMART — spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang murid mengalami tekanan emosional berat akibat masalah keluarga yang kompleks, dan guru kelas merasa strategi biasa tidak lagi cukup. Berdasarkan Bab 4 bagian C, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merujuk murid tersebut ke layanan responsif bersama guru BK untuk penanganan yang lebih mendalam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan murid menyelesaikan masalahnya sendiri tanpa bantuan siapa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memindahkan murid tersebut ke kelas lain tanpa penjelasan apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Menurut Bab 4 bagian D, apa yang dimaksud dengan dukungan sistem dalam program bimbingan dan konseling?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem penilaian akademik semata yang tidak berkaitan dengan program BK</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dukungan administratif, pengembangan profesional guru BK, dan kolaborasi dengan warga sekolah agar program BK berjalan efektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem hukuman yang diterapkan secara seragam kepada seluruh murid</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Menurut Bab 5 bagian A, kemampuan memahami sudut pandang orang lain secara rasional tanpa harus ikut merasakan emosinya secara langsung disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati perilaku</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati afektif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati kognitif</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan Bab 5 bagian B, mengapa empati dianggap penting dalam menciptakan suasana kelas yang kondusif?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena murid yang merasa dipahami akan merasa lebih aman dan nyaman, sehingga lebih fokus pada pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena empati membuat guru bisa mengabaikan aturan kelas yang sudah ditetapkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena empati tidak memiliki pengaruh apa pun terhadap suasana belajar di kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin melatih murid untuk memahami sudut pandang orang lain dengan cara bertukar peran, misalnya berpura-pura menjadi murid yang sedang dirundung. Berdasarkan Bab 5 bagian C, strategi apa yang sedang diterapkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Teknik mindfulness yang berfokus pada pernapasan semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Latihan role-playing yang membantu memahami sudut pandang orang lain</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membaca buku dan cerita tentang empati tanpa praktik langsung</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah ingin melatih murid menjadi penengah yang adil dalam konflik antarteman sebaya tanpa selalu bergantung pada guru. Berdasarkan Bab 5 bagian D, program pengembangan empati apa yang paling sesuai?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program Circle Time semata, karena hanya berfokus pada berbagi cerita secara melingkar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program Resolusi Konflik yang sepenuhnya dijalankan oleh guru tanpa keterlibatan murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program Peer Mediation, yang melatih murid sendiri menjadi mediator dalam konflik antarteman</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5 bagian B, apa dampak empati terhadap keterlibatan dan motivasi murid dalam proses belajar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid yang merasa dipahami cenderung lebih termotivasi dan lebih terlibat karena merasa gurunya peduli terhadap mereka sebagai individu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati tidak berpengaruh sama sekali terhadap motivasi belajar murid</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Empati justru membuat murid menjadi manja dan malas berusaha sendiri</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
