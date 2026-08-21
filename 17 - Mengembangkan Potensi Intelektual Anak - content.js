/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Mengembangkan Potensi Intelektual Anak"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-potensi-intelektual-anak.js
   ========================================================================== */
window.BOOK_CONTENT = {

pengantar: `
<p class="eyebrow reveal">Kata Pengantar</p>
<h2 class="reveal">Prakata dari Tim Edumind Academy</h2>
<div class="card reveal">
  <p>Pernahkah Anda bertanya-tanya, "Bagaimana cara mengembangkan potensi intelektual anak sejak dini agar mereka tumbuh menjadi pribadi yang cerdas dan sukses?" Pertanyaan ini tentu pernah terlintas di benak setiap orang tua dan pendidik. Mendidik anak bukan hanya sekadar memastikan mereka memahami pelajaran di sekolah, tetapi juga membimbing mereka agar mampu berpikir kritis, kreatif, dan memiliki kecerdasan emosional yang seimbang.</p>
  <p>Buku ini hadir sebagai panduan komprehensif bagi orang tua, guru, dan siapa saja yang peduli terhadap perkembangan intelektual anak. Di dalamnya dibahas berbagai tahapan perkembangan kognitif anak, strategi stimulasi optimal sesuai usia, serta cara membangun lingkungan belajar yang mendukung kecerdasan mereka. Buku ini juga mengupas keterkaitan antara kecerdasan intelektual dan emosional, serta bagaimana interaksi sosial berperan penting dalam perkembangan anak — dilengkapi wawasan tentang peran nutrisi, pola tidur, teknologi, dan strategi belajar yang sesuai dengan gaya masing-masing anak. Seluruh pembahasan disajikan dengan bahasa yang ringan, aplikatif, dan mudah dipahami agar dapat langsung diterapkan dalam kehidupan sehari-hari.</p>
  <p>Kami berharap buku ini dapat menjadi teman bagi para orang tua dan pendidik dalam mendampingi anak-anak mencapai potensi terbaik mereka. Dengan pemahaman yang tepat dan strategi yang efektif, kita dapat membentuk generasi masa depan yang cerdas, inovatif, dan memiliki daya saing tinggi. Selamat membaca, semoga buku ini memberikan manfaat yang besar bagi perkembangan anak-anak kita.</p>
  <p>Salam hangat,<br><strong>Tim Edumind Academy</strong></p>
</div>

<div class="card reveal">
  <h4>A. Pentingnya Pengembangan Intelektual Anak</h4>
  <p>Hampir setiap orang tua menginginkan anaknya tumbuh menjadi pribadi yang cerdas, mandiri, dan bahagia — dan salah satu kunci untuk mencapai itu adalah mengembangkan potensi intelektual anak sejak dini. Dampaknya terasa jangka panjang: anak yang cerdas dan terbiasa berpikir kritis lebih mudah beradaptasi dengan perubahan zaman, lebih siap menghadapi tantangan pendidikan maupun pekerjaan di masa depan, tumbuh lebih mandiri dan percaya diri dalam mengambil keputusan, serta cenderung memiliki kualitas hidup yang lebih baik — mulai dari peluang kerja, hubungan sosial yang positif, hingga kepuasan hidup secara keseluruhan.</p>
  <p>Dalam proses ini, orang tua memegang peran sebagai fasilitator utama — guru pertama dan terbaik bagi anak. Peran itu terwujud lewat lima hal konkret: menjadi model dengan menunjukkan bahwa membaca, belajar, dan berpikir itu menyenangkan; menciptakan lingkungan belajar yang kondusif lewat ruang yang nyaman serta akses ke buku dan mainan edukatif; memberikan stimulasi dengan mengajak anak bertanya, bereksperimen, dan mencoba hal baru; mendukung minat dan bakat unik setiap anak agar mereka percaya diri dan bahagia; serta menjadi pendengar yang baik atas pendapat dan ide anak, sehingga mereka merasa dihargai dan makin terbuka untuk belajar.</p>

  <h4>B. Memahami Kecerdasan</h4>
  <p>Sebelum melangkah lebih jauh, penting meluruskan sejumlah mitos yang beredar tentang kecerdasan. Banyak orang percaya kecerdasan adalah bawaan lahir yang tidak bisa dikembangkan — padahal kecerdasan lebih mirip otot, semakin sering dilatih semakin kuat. Ada pula anggapan bahwa anak pintar pasti unggul di semua mata pelajaran, padahal setiap orang punya kelebihan dan kekurangan masing-masing di bidang berbeda. Mitos lain menyebut IQ tinggi menjamin kesuksesan, padahal kecerdasan emosional, sosial, dan spiritual sama pentingnya.</p>
  <p>Untuk memahami kecerdasan secara lebih utuh, buku ini merujuk pada konsep kecerdasan majemuk (multiple intelligences) yang diperkenalkan Howard Gardner: setiap orang memiliki kombinasi kecerdasan yang berbeda-beda, mulai dari linguistik, logika-matematika, spasial, musikal, kinestetik, interpersonal, intrapersonal, hingga naturalis. Artinya, setiap anak itu unik dengan potensi yang berbeda-beda, dan tugas orang tua serta pendidik adalah membantu anak menemukan dan mengembangkan potensi tersebut — bukan hanya berfokus pada nilai akademik semata. Memahami konsep ini juga penting bagi guru: dengan mengenali bahwa setiap anak unik, guru dapat merencanakan pembelajaran yang lebih individual, menemukan bakat terpendam siswa, serta meningkatkan motivasi belajar mereka karena merasa kemampuannya diakui dan didukung.</p>

  <h4>C. Tujuan Buku</h4>
  <p>Tujuan utama buku ini sederhana: membantu orang tua menjadi "guru" yang hebat bagi anak-anaknya, lewat panduan praktis yang mudah dipahami dan diterapkan dalam keseharian — mulai dari cara merangsang kecerdasan anak sejak dini, menciptakan lingkungan belajar yang nyaman, hingga mengatasi berbagai tantangan dalam tumbuh kembang anak. Lebih jauh, buku ini ingin membantu anak mencapai potensi maksimalnya lewat empat hal: mengenali potensi dan minat unik setiap anak agar dukungan yang diberikan tepat sasaran, merangsang perkembangan otak lewat bermain, membaca, dan mempelajari hal-hal baru, membangun karakter yang kuat di samping kecerdasan (jujur, disiplin, bertanggung jawab), serta membantu anak mengatasi berbagai kesulitan yang mungkin dihadapi sepanjang perjalanan belajarnya. Intinya, buku ini hadir untuk memberdayakan orang tua agar menjadi pendamping terbaik bagi anak-anak mereka menuju pribadi yang cerdas, berkarakter, dan sukses.</p>
</div>
`,

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Memahami Perkembangan Kognitif Anak</h2>
<p class="lede reveal">Sebelum menyusun stimulasi dan strategi pendampingan, orang tua dan pendidik perlu memahami dahulu bagaimana sebenarnya pikiran anak berkembang dari waktu ke waktu, serta faktor-faktor apa saja yang menentukan seberapa optimal perkembangan itu berlangsung.</p>

<div class="card reveal">
  <h4>A. Tahapan Perkembangan Kognitif Menurut Piaget</h4>
  <p>Jean Piaget, seorang ahli psikologi anak, menemukan bahwa perkembangan kognitif anak terjadi secara bertahap melalui empat fase yang berurutan. Pada <strong>tahap sensorimotor (0-2 tahun)</strong>, bayi belajar tentang dunia lewat indra dan gerakan — meraba tekstur, mencicipi rasa, menggerakkan tangan dan kaki, serta belajar lewat tindakan seperti menggoyangkan mainan untuk mendengar bunyinya. Pencapaian penting di tahap ini adalah konsep objek permanen: bayi memahami bahwa benda tetap ada meski tidak terlihat, misalnya tetap mencari mainan yang disembunyikan di bawah bantal. Orang tua dapat mendukung tahap ini dengan memberi mainan yang aman dan menarik, mengajak bayi berinteraksi lewat bicara dan nyanyian, serta mengeksplorasi lingkungan sekitar bersama.</p>
  <p>Memasuki <strong>tahap pra-operasional (2-7 tahun)</strong>, anak mulai berpikir simbolis — memahami bahwa kata, gambar, dan objek bisa mewakili sesuatu yang lain — sekaligus gemar bermain peran sebagai dokter, guru, atau superhero untuk belajar tentang peran sosial. Pada tahap ini anak cenderung egosentris (sulit melihat sudut pandang orang lain) dan animistis (menganggap benda mati punya perasaan seperti manusia). Ini adalah masa emas bagi perkembangan bahasa dan imajinasi, yang bisa didukung lewat membacakan buku cerita, mengajak bermain peran, dan mengajukan pertanyaan terbuka yang mendorong anak berpikir lebih dari sekadar "ya" atau "tidak".</p>
  <p>Pada <strong>tahap operasional konkret (7-12 tahun)</strong>, anak mulai berpikir lebih logis dan realistis — memahami konsep konservasi (jumlah benda tetap sama meski bentuknya berubah), reversibilitas (suatu proses bisa dibalik), dan klasifikasi (mengelompokkan benda berdasarkan ciri-cirinya). Anak di tahap ini senang melakukan percobaan sederhana, memainkan permainan strategi seperti catur atau monopoli, dan mengoleksi benda-benda tertentu. Orang tua dapat mendukungnya lewat kesempatan bereksperimen di rumah, permainan yang menantang seperti puzzle atau teka-teki, serta penjelasan konsep abstrak dengan contoh yang konkret. Terakhir, pada <strong>tahap operasional formal (12 tahun ke atas)</strong>, anak mulai mampu berpikir abstrak tentang konsep seperti cinta atau keadilan, membuat hipotesis dan mengujinya, serta menarik kesimpulan lewat penalaran deduktif — bekal penting untuk mempersiapkan diri menghadapi tantangan masa depan, yang dapat didorong lewat minat pada sains, diskusi isu-isu sosial, serta dukungan penuh terhadap minat dan bakat mereka.</p>

  <h4>B. Faktor-Faktor yang Mempengaruhi Perkembangan Kognitif</h4>
  <p>Selain tahapan usia, sejumlah faktor turut menentukan seberapa optimal perkembangan kognitif anak berlangsung. <strong>Faktor genetik</strong> adalah faktor bawaan dari orang tua yang menjadi titik tolak potensi kecerdasan anak sejak dalam kandungan. Namun genetik bukan penentu tunggal — <strong>faktor lingkungan</strong> turut berperan besar lewat stimulasi (permainan, interaksi sosial, membaca), interaksi sosial yang membantu anak belajar bahasa dan emosi, kualitas pendidikan, kondisi kesehatan, serta lingkungan emosional yang aman dan penuh kasih sayang. Lingkungan yang baik dicirikan oleh empat hal: membuat anak merasa aman dan terlindungi, merangsang lewat banyak mainan dan kegiatan edukatif, mendukung usaha anak mencoba hal baru, serta menyenangkan sehingga anak lebih termotivasi belajar.</p>
  <p><strong>Nutrisi</strong> juga sangat menentukan, karena otak adalah organ paling aktif dalam tubuh yang membutuhkan bahan bangunan (protein, lemak sehat), energi (glukosa dari karbohidrat kompleks), serta zat penunjang produksi neurotransmitter (vitamin dan mineral). Kekurangan nutrisi dapat menyebabkan keterlambatan perkembangan, masalah konsentrasi, dan performa belajar yang buruk, sehingga orang tua perlu memastikan makanan bergizi seimbang, membatasi makanan olahan, dan menjadikan waktu makan bersama sebagai momen yang menyenangkan. <strong>Stimulasi</strong> — berupa interaksi sosial, permainan, kegiatan belajar, dan pengalaman sensorik — membentuk koneksi saraf baru di otak anak, meningkatkan kecerdasan, kreativitas, dan kepercayaan diri, asalkan disesuaikan dengan usia dan minat anak serta diberikan dalam suasana yang menyenangkan. Terakhir, <strong>emosi</strong> berperan besar sebagai motivasi, penentu konsentrasi, penguat memori, sekaligus faktor yang memengaruhi cara anak memecahkan masalah — anak yang belajar dalam suasana senang akan lebih mudah fokus dan mengingat, sementara anak yang cemas atau sering dimarahi cenderung kehilangan motivasi belajar, sehingga menciptakan lingkungan yang aman dan mengajarkan anak mengelola emosi menjadi bagian penting dari pengasuhan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Melihat empat tahap perkembangan kognitif Piaget, di tahap mana anak (atau siswa) yang Anda dampingi saat ini berada — dan apakah stimulasi yang selama ini diberikan sudah sesuai dengan karakteristik tahap tersebut, atau justru masih menggunakan pendekatan untuk usia yang lebih muda/tua?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Piaget, kemampuan anak memahami bahwa suatu benda tetap ada meskipun tidak terlihat (misalnya mencari mainan yang disembunyikan di bawah bantal) disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Objek permanen, pencapaian penting di tahap sensorimotor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Konservasi, pencapaian penting di tahap operasional formal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Egosentrisme, pencapaian penting di tahap pra-operasional</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak usia 9 tahun sudah bisa memahami bahwa air yang dituang dari gelas pendek ke gelas tinggi jumlahnya tetap sama, dan senang bermain catur atau monopoli. Berdasarkan Bab 1, anak ini kemungkinan besar berada di tahap...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sensorimotor, karena masih belajar lewat gerakan tubuh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Operasional konkret, ditandai pemahaman konservasi dan kegemaran pada permainan strategi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pra-operasional, karena masih berpikir secara simbolis dan imajinatif</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak tumbuh di keluarga dengan gizi tercukupi dan fasilitas belajar lengkap, tetapi jarang diajak bicara, jarang dipeluk, dan sering dimarahi tanpa penjelasan. Berdasarkan Bab 1, faktor apa yang paling berisiko menghambat perkembangan kognitifnya meski nutrisi sudah baik?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Faktor genetik, karena itu satu-satunya faktor yang benar-benar menentukan kecerdasan anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Faktor lingkungan emosional dan stimulasi interaksi sosial yang kurang mendukung, meski kebutuhan fisik sudah terpenuhi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko sama sekali, karena nutrisi dan fasilitas sudah menjamin kecerdasan optimal</button>
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
<h2 class="reveal">Stimulasi Optimal untuk Anak Usia Dini (0-6 Tahun)</h2>
<p class="lede reveal">Usia dini sering disebut periode emas perkembangan otak — masa ketika stimulasi yang tepat memberi dampak paling besar bagi kesiapan anak menghadapi tahap belajar selanjutnya.</p>

<div class="card reveal">
  <h4>A. Pentingnya Stimulasi Dini</h4>
  <p>Bayangkan otak anak seperti tanah subur: benih yang ditanam saat kondisi tanah terbaik akan tumbuh cepat dan berbuah lebat. Begitu pula otak anak di usia dini — berkembang sangat cepat, membentuk jutaan koneksi saraf setiap detiknya. Setiap pengalaman yang dialami anak, baik mendengar suara, melihat warna, merasakan sentuhan, maupun berinteraksi dengan orang lain, membantu membangun jalur saraf di otaknya. Usia dini disebut periode emas karena tiga alasan: perkembangan otak yang sangat pesat khususnya pada bagian bahasa, pemecahan masalah, dan keterampilan sosial; plastisitas otak yang tinggi sehingga sangat mudah menyesuaikan diri dengan pengalaman yang diberikan; serta perannya sebagai fondasi bagi perkembangan selanjutnya — anak yang mendapat stimulasi kaya dan beragam cenderung memiliki kemampuan kognitif, sosial, dan emosional yang lebih baik di kemudian hari.</p>
  <p>Semakin sering suatu koneksi saraf digunakan, semakin kuat dan cepat informasi diproses — seperti jalan setapak di taman yang makin jelas dan mudah dilalui semakin sering dilewati. Contoh stimulasi sederhana yang bisa diberikan sehari-hari mencakup bermain dengan mainan edukatif seperti balok atau puzzle untuk melatih motorik dan daya pikir, membaca buku bergambar untuk merangsang imajinasi dan memperkaya kosakata, mengajak anak berinteraksi dan mengobrol agar terbiasa mengungkapkan pikirannya, serta menggambar dan melukis untuk melatih ekspresi diri dan koordinasi tangan-mata. Manfaatnya nyata: anak menjadi lebih cerdas karena otaknya berkembang baik, lebih mudah bergaul dan percaya diri, serta memiliki karakter positif seperti rasa ingin tahu, kreativitas, dan ketekunan. Kuncinya sederhana — biarkan anak bermain, bereksplorasi, dan belajar dalam suasana yang menyenangkan.</p>

  <h4>B. Aktivitas Stimulasi</h4>
  <p>Stimulasi di usia dini perlu mencakup tiga area utama. Pertama, <strong>stimulasi sensorimotor</strong> — anak membutuhkan rangsangan pada indra dan gerak tubuhnya lewat aktivitas seperti bermain dengan mainan bertekstur berbeda, membaca buku bergambar berwarna-warni, memandikan anak dengan air hangat, memberi mainan yang bisa digenggam, hingga pijatan bayi. Kedua, <strong>pengembangan bahasa</strong> — sejak bayi, anak mulai mengenali suara dan meniru bunyi yang didengarnya, sehingga semakin sering diajak bicara, dibacakan buku, dan bermain kata, semakin cepat perkembangan bahasanya. Aktivitas yang membantu meliputi membaca buku cerita setiap hari, berbicara dengan kalimat sederhana dan jelas, mengajarkan nama benda di sekitar, menyanyikan lagu anak, bermain tebak-tebakan, serta mengajak anak bercerita.</p>
  <p>Ketiga, <strong>keterampilan sosial-emosional</strong> — anak tidak cukup pintar secara akademik, tetapi juga perlu mampu berinteraksi dengan orang lain, memahami perasaan diri sendiri maupun orang lain, dan membangun hubungan yang positif, sehingga tumbuh lebih percaya diri, mudah beradaptasi, dan memiliki kontrol diri yang baik. Aktivitas pendukungnya antara lain bermain peran dengan boneka atau mainan, mengajak anak bermain bersama teman sebaya, membaca buku cerita tentang emosi, membicarakan perasaan anak secara terbuka, mengajarkan cara berbagi dan bergantian, serta memberikan pujian dan dukungan atas usahanya. Dua prinsip penting perlu selalu diperhatikan: ciptakan suasana belajar yang aman, nyaman, dan penuh kasih sayang agar anak lebih mudah menerima stimulasi, dan sesuaikan setiap aktivitas dengan usia serta minat anak, karena setiap anak unik dan memiliki ketertarikan yang berbeda-beda.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga area stimulasi usia dini (sensorimotor, bahasa, sosial-emosional) yang dibahas di bab ini, area mana yang menurut Anda paling kurang mendapat perhatian pada anak/siswa usia dini di lingkungan Anda — dan aktivitas sederhana apa yang bisa mulai ditambahkan minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 2, usia dini disebut sebagai "periode emas" perkembangan otak terutama karena tiga alasan, salah satunya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Plastisitas otak yang sangat tinggi, sehingga mudah menyesuaikan diri dengan pengalaman yang diberikan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak usia dini sudah mampu berpikir abstrak dan menyusun hipotesis secara mandiri</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak usia dini tidak lagi membutuhkan pendampingan orang tua dalam belajar</button>
  </div>
  <div class="quiz-q">
    <p>Seorang pengasuh memberikan anak usia 2 tahun banyak mainan mahal, tetapi jarang mengajaknya bicara, membacakan cerita, atau bernyanyi bersama. Berdasarkan Bab 2, area stimulasi apa yang paling berisiko tertinggal pada anak ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Stimulasi sensorimotor, karena mainan yang banyak sudah cukup untuk semua aspek perkembangan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pengembangan bahasa, karena kosakata dan kemampuan berbicara berkembang lewat interaksi verbal yang intens, bukan sekadar ketersediaan mainan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena mainan edukatif otomatis mencakup semua area perkembangan anak</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah tempat penitipan anak ingin merancang kegiatan yang sekaligus melatih keterampilan sosial-emosional balita. Berdasarkan Bab 2, kegiatan yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan anak bermain sendiri dengan gawai agar tidak mengganggu anak lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Bermain peran bersama teman sebaya, membaca cerita tentang emosi, serta membiasakan berbagi dan bergantian mainan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memberikan tes akademik sederhana agar anak terbiasa dengan evaluasi sejak dini</button>
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
<h2 class="reveal">Stimulasi Optimal untuk Anak Usia Sekolah Dasar (7-12 Tahun)</h2>
<p class="lede reveal">Memasuki usia sekolah dasar, anak sudah siap diajak berpikir lebih logis dan sistematis — inilah masa tepat untuk mengasah kemampuan berpikir kritis, meletakkan fondasi akademik, sekaligus menemukan minat dan bakat yang akan menjadi ciri khasnya.</p>

<div class="card reveal">
  <h4>A. Pengembangan Kognitif Lanjut</h4>
  <p>Berpikir logis berarti mampu menyusun langkah demi langkah untuk sampai pada sebuah kesimpulan, sementara berpikir kritis berarti tidak menerima informasi begitu saja, melainkan menganalisis, menilai, dan mengambil keputusan berdasarkan informasi yang ada. Kemampuan ini penting diajarkan sejak SD karena membantu anak memahami pelajaran sekolah, membuatnya lebih sistematis dalam mencari solusi, membiasakannya menimbang berbagai aspek sebelum mengambil keputusan, serta meningkatkan rasa percaya dirinya karena mampu berpikir secara mandiri. Cara mengajarkannya bisa lewat diskusi saat membaca buku atau menonton film, pertanyaan terbuka yang menuntut jawaban lebih dari sekadar "ya/tidak", permainan otak seperti catur atau teka-teki silang, eksperimen sederhana, serta memberi contoh langsung bagaimana orang tua sendiri berpikir logis dalam keseharian, misalnya saat memilih makanan atau merencanakan perjalanan.</p>
  <p>Keterampilan pemecahan masalah juga perlu dilatih secara khusus lewat langkah-langkah yang jelas: mengenali apa masalah yang sebenarnya terjadi, mencari informasi tentang apa yang sudah diketahui, mencari berbagai kemungkinan solusi, memilih solusi paling efektif dan realistis, lalu mengujinya. Aktivitas yang mendukung antara lain permainan yang melatih pemecahan masalah seperti teka-teki atau puzzle, eksperimen sederhana seperti mengamati mengapa balon bisa mengembang, membuat cerita dengan akhir yang berbeda-beda untuk melatih berpikir kreatif, serta melibatkan anak dalam merencanakan liburan keluarga sebagai latihan berpikir logis dan mengambil keputusan. Pujian dan dorongan saat anak berhasil menyelesaikan masalah akan memperkuat rasa percaya dirinya untuk terus mencoba.</p>

  <h4>B. Keterampilan Akademik</h4>
  <p>Membaca, menulis, dan berhitung adalah tiga keterampilan dasar yang menjadi fondasi seluruh pembelajaran di masa depan. Membaca membuka jendela dunia — memperkaya kosakata dan pemahaman anak tentang dunia sekitarnya; menulis membantu anak mengekspresikan ide dan berpikir lebih terstruktur, logis, dan kreatif; sementara berhitung berguna tidak hanya untuk pelajaran matematika, tetapi juga kehidupan sehari-hari seperti menghitung uang jajan atau membagi makanan. Untuk membaca, orang tua bisa menyediakan sudut baca yang nyaman, membacakan cerita setiap hari lalu mendiskusikannya, mengenalkan berbagai jenis bacaan, dan mengajak ke perpustakaan atau toko buku. Untuk menulis, mulai dari aktivitas sederhana seperti menulis daftar belanja atau kartu ucapan, disertai pujian atas usaha anak. Untuk berhitung, manfaatkan aktivitas sehari-hari seperti menghitung mainan atau membagi kue, serta permainan yang melibatkan angka seperti ular tangga.</p>
  <p>Selain tiga keterampilan dasar tersebut, ilmu pengetahuan berperan penting menumbuhkan rasa ingin tahu, kemampuan berpikir kritis, kesiapan menghadapi masa depan, serta kecintaan terhadap alam. Minat anak pada sains dapat ditumbuhkan lewat eksperimen sederhana (misalnya gunung berapi mini dari baking soda dan cuka), menjelajahi alam di taman atau kebun binatang, membaca buku sains sesuai usia, menonton film dokumenter, mengajukan pertanyaan terbuka seperti "Kenapa langit berwarna biru?", serta mendukung penuh minat spesifik anak, misalnya pada astronomi atau biologi.</p>

  <h4>C. Pengembangan Minat dan Bakat</h4>
  <p>Setiap anak memiliki minat dan bakat unik, dan tugas orang tua serta pendidik adalah membantu mereka menemukan serta mengembangkan potensi terbaik dalam dirinya. Hal ini penting karena meningkatkan motivasi belajar, membangun kepercayaan diri, membuka lebih banyak peluang di masa depan, membuat proses belajar terasa menyenangkan seperti petualangan, serta turut mengembangkan keterampilan sosial dan emosional lewat pengalaman menghadapi tantangan. Cara menemukannya dimulai dari observasi terhadap kegiatan yang paling disukai anak, memberi kesempatan mencoba hal baru lewat kegiatan ekstrakurikuler, mendukung penuh minat yang muncul dengan menyediakan alat atau guru les yang sesuai, tidak memaksakan minat tertentu, menjadi contoh dengan menunjukkan hobi sendiri, serta menciptakan suasana belajar yang menyenangkan.</p>
  <p>Secara konkret, pengembangan minat dan bakat bisa diarahkan ke berbagai bidang: seni (menggambar, melukis, kerajinan tangan), olahraga (sepak bola, basket, renang, menari), sains (eksperimen sederhana, pengamatan alam, membangun model), bahasa (belajar bahasa asing, menulis cerita, membaca), teknologi (pemrograman sederhana, desain website, game edukasi), serta sosial dan kepemimpinan (organisasi anak, kegiatan sukarela, berbicara di depan umum). Dengan stimulasi dan dukungan yang tepat, setiap anak memiliki potensi luar biasa untuk digali dan dikembangkan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga area pada Bab 3 (kognitif lanjut, keterampilan akademik, minat-bakat), area mana yang paling jarang mendapat perhatian khusus pada anak usia SD di lingkungan Anda — dan langkah kecil apa yang bisa mulai diterapkan untuk menyeimbangkannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 3, tiga keterampilan akademik dasar yang menjadi fondasi bagi semua pembelajaran di masa depan adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Membaca, menulis, dan berhitung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggambar, bernyanyi, dan menari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Coding, robotik, dan desain grafis</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru SD ingin melatih kemampuan pemecahan masalah muridnya, bukan hanya menyuruh mereka menghafal rumus. Berdasarkan Bab 3, langkah pertama yang paling tepat dalam mengajarkan proses pemecahan masalah adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengajak siswa mengenali dan memahami apa masalah yang sebenarnya terjadi, sebelum mencari informasi dan alternatif solusi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung memberikan jawaban akhir agar siswa tidak bingung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meminta siswa menghafal seluruh kemungkinan solusi tanpa memahami masalahnya terlebih dahulu</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak kelas 5 SD sangat menikmati waktu menggambar dan sering membuat sketsa di buku tulisnya, tetapi orang tuanya memaksanya fokus les matematika tambahan karena dianggap lebih "berguna". Berdasarkan Bab 3, apa risiko dari pendekatan orang tua ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena matematika selalu lebih penting daripada minat seni apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Anak berisiko kehilangan motivasi dan kepercayaan diri karena minat dan bakat aslinya tidak didukung, padahal mendukungnya justru bisa meningkatkan motivasi belajar secara keseluruhan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak akan otomatis kehilangan kemampuan menggambar begitu difokuskan pada matematika</button>
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
<h2 class="reveal">Stimulasi Optimal untuk Anak Usia Sekolah Menengah (13-18 Tahun)</h2>
<p class="lede reveal">Remaja berada di ambang kedewasaan berpikir — inilah masa mengasah kemampuan menganalisis informasi secara mendalam dan mulai mempersiapkan diri secara nyata untuk kehidupan setelah sekolah.</p>

<div class="card reveal">
  <h4>A. Berpikir Abstrak dan Kritis</h4>
  <p>Di era yang dibanjiri informasi dari berbagai sumber, remaja perlu dilatih untuk tidak menerima informasi begitu saja, melainkan bertanya "apakah informasi ini benar, dari mana sumbernya, dan apa maksud pernyataan ini?" Kemampuan analisis dan evaluasi informasi ini membantu remaja membedakan fakta dari opini, membuat keputusan yang lebih baik, memecahkan masalah kompleks dari berbagai sudut pandang, serta lebih mudah memahami materi pelajaran yang rumit. Cara melatihnya meliputi kebiasaan terus bertanya "mengapa" dan "bagaimana", mencari sumber yang terpercaya, membandingkan berbagai sumber sebelum mengambil kesimpulan, menyadari adanya bias dalam setiap sudut pandang, mengevaluasi apakah suatu argumen logis dan didukung bukti kuat, serta berlatih menulis esai dan berdiskusi untuk mengasah kemampuan menyusun argumen yang koheren.</p>
  <p>Selain itu, remaja perlu diasah kemampuan pemecahan masalah kompleks — bukan sekadar soal matematika dengan satu jawaban pasti, melainkan kemampuan mengurai masalah besar menjadi bagian-bagian kecil, menganalisisnya dengan cermat, dan menemukan solusi paling efektif. Keterampilan ini penting karena dunia nyata jarang memberikan jawaban langsung — bagaimana bekerja dalam tim yang berpendapat berbeda, atau menyelesaikan konflik tanpa merugikan siapa pun — sekaligus menjadi bekal penting di dunia kerja, yang tidak hanya mencari orang cerdas, tetapi mereka yang mampu menemukan solusi atas masalah rumit. Cara mengasahnya antara lain tidak takut salah karena kesalahan adalah bagian dari proses belajar, melatih berpikir kreatif dari berbagai sudut pandang, berdiskusi dengan orang lain untuk mendapat perspektif baru, memanfaatkan teknologi untuk mencari informasi relevan, serta mempraktikkannya secara rutin lewat proyek sains, debat, atau simulasi bisnis kecil-kecilan.</p>

  <h4>B. Persiapan untuk Masa Depan</h4>
  <p>Memilih karier adalah keputusan besar yang mulai dipikirkan remaja seiring bertanya-tanya "apa yang ingin saya lakukan saat dewasa nanti?" Peran orang tua dan pendidik penting karena membantu meningkatkan motivasi belajar (ketika anak punya tujuan jelas), meningkatkan kepercayaan diri (lewat pengenalan minat dan bakat), serta meminimalkan kebingungan dalam memilih jalan hidup. Prosesnya dimulai dari eksplorasi minat dan bakat lewat berbagai kegiatan ekstrakurikuler atau magang, membantu anak mengenali dirinya sendiri, serta memberi informasi tentang berbagai profesi dan mempertemukannya dengan orang-orang yang bekerja di bidang yang diminati. Orang tua perlu mendukung keputusan anak tanpa memaksakan pilihan, memberi dukungan moral, sekaligus menyiapkan mental bahwa pilihan karier bisa berubah seiring waktu sehingga fleksibilitas menjadi penting di dunia kerja yang terus berubah.</p>
  <p>Di samping pengetahuan akademik, remaja perlu dibekali <strong>keterampilan hidup</strong> — kemampuan untuk berfungsi secara efektif dalam kehidupan sehari-hari, baik dalam pendidikan, pekerjaan, maupun kehidupan pribadi. Keterampilan ini penting karena membuat anak lebih mandiri, meningkatkan kepercayaan diri, dan bermanfaat di berbagai bidang kehidupan. Cakupannya meliputi komunikasi, kolaborasi, kreativitas, berpikir kritis, manajemen waktu, pemecahan masalah, kemampuan beradaptasi, serta pengelolaan emosi diri dan pemahaman terhadap emosi orang lain. Cara mengembangkannya antara lain memberi peluang berpraktik lewat kegiatan rumah tangga sehari-hari, mengajak bergabung dalam organisasi seperti Pramuka atau klub remaja, mendorong mengikuti kursus seperti public speaking atau manajemen waktu, menjadi role model dalam penerapan keterampilan hidup, serta memberi apresiasi atas setiap kemajuan yang dicapai, sekecil apa pun.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari dua fokus Bab 4 (berpikir abstrak-kritis dan persiapan masa depan), aspek mana yang menurut Anda paling kurang mendapat ruang latihan bagi remaja di lingkungan Anda — dan aktivitas sederhana apa yang bisa mulai ditawarkan untuk melatihnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 4, kemampuan mengurai masalah besar menjadi bagian-bagian kecil, menganalisisnya dengan cermat, dan menemukan solusi paling efektif disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pemecahan masalah kompleks</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tahap sensorimotor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Stimulasi sensorik</button>
  </div>
  <div class="quiz-q">
    <p>Seorang remaja membaca sebuah berita viral dan langsung membagikannya tanpa memeriksa sumber atau membandingkannya dengan berita lain. Berdasarkan Bab 4, keterampilan apa yang paling perlu diperkuat pada remaja ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Keterampilan motorik halus, karena itu yang paling relevan dengan kebiasaan menggunakan gawai</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kemampuan analisis dan evaluasi informasi — memeriksa sumber, membandingkan berbagai sudut pandang, dan menyadari kemungkinan bias sebelum mempercayai suatu informasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kemampuan menghafal, karena itu satu-satunya cara mencegah penyebaran berita yang salah</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa SMA bingung memilih jurusan kuliah karena orang tuanya memaksakan satu pilihan karier tanpa mempertimbangkan minatnya, sementara ia sendiri belum pernah diajak mengeksplorasi berbagai profesi. Berdasarkan Bab 4, langkah paling tepat bagi orang tua adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tetap memaksakan pilihan awal karena orang tua dianggap selalu tahu yang terbaik bagi anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengajak anak eksplorasi minat dan bakat, memberi informasi berbagai profesi, serta mendukung keputusan anak tanpa memaksakan pilihan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan anak memutuskan sendiri tanpa informasi maupun dukungan apa pun dari orang tua</button>
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
<h2 class="reveal">Membangun Lingkungan Belajar yang Kondusif</h2>
<p class="lede reveal">Stimulasi setepat apa pun akan sulit berbuah maksimal tanpa lingkungan yang mendukungnya — bab ini membahas bagaimana menata ruang belajar, mempererat kolaborasi orang tua dan guru, memanfaatkan teknologi secara bijak, mengelola waktu layar, serta menjaga nutrisi dan pola tidur anak.</p>

<div class="card reveal">
  <h4>A. Menciptakan Ruang Belajar yang Nyaman</h4>
  <p>Ruang belajar yang nyaman ibarat rumah bagi pikiran — tempat anak merasa tenang, fokus, dan terinspirasi. Desainnya perlu memperhatikan tata letak meja, kursi, dan rak buku yang fungsional dengan cahaya alami cukup, warna-warna menenangkan seperti biru muda atau hijau pastel, peralatan belajar yang lengkap dan mudah dijangkau, serta sentuhan dekorasi pribadi yang disukai anak. Atmosfer pendukung juga penting: suhu ruangan yang nyaman, pencahayaan yang cukup, suasana tenang minim kebisingan, dan aroma yang menenangkan. Ruang belajar yang tertata baik terbukti meningkatkan konsentrasi dan motivasi anak, sekaligus mengurangi stres dan kecemasan saat belajar — dilengkapi jadwal belajar yang teratur, camilan sehat di dekat meja belajar, serta pujian dan dukungan atas setiap pencapaian anak.</p>

  <h4>B. Kolaborasi Orang Tua dan Guru</h4>
  <p>Kolaborasi antara orang tua dan guru adalah kunci menciptakan lingkungan belajar yang optimal — sinergi keduanya jauh lebih kuat daripada bekerja sendiri-sendiri. Fondasinya adalah komunikasi efektif: memahami perkembangan anak dari dua sisi (akademik-sosial di sekolah dan perilaku di rumah), menyusun rencana belajar bersama, serta mengatasi masalah lewat komunikasi yang terbuka. Praktiknya bisa lewat pertemuan rutin yang terjadwal, sikap jujur dan terbuka tanpa saling menyalahkan, mendengarkan secara aktif, dan berfokus mencari solusi bersama. Di sisi orang tua, peran dalam pembelajaran mencakup menciptakan lingkungan belajar yang nyaman, membantu anak mengerjakan tugas tanpa mengambil alih prosesnya, membaca bersama, menjadi contoh yang baik, serta memberi dukungan emosional terutama saat anak menghadapi kesulitan. Ketika kolaborasi ini berjalan baik, prestasi dan motivasi belajar anak meningkat, sekaligus mempererat hubungan keluarga.</p>

  <h4>C. Memanfaatkan Teknologi</h4>
  <p>Di era digital, gadget dan internet menawarkan sumber belajar yang menarik, interaktif, dan fleksibel — tetapi tanpa pengawasan dan pemanfaatan yang bijak, anak bisa terpapar konten tidak sesuai, kecanduan layar, atau mengalami gangguan sosial-emosional. Digunakan dengan benar, gadget edukatif memberi manfaat nyata: akses informasi yang luas lewat artikel, video edukatif, dan kursus online; kemandirian belajar lewat aplikasi dan game edukatif; proses belajar yang lebih menarik lewat animasi dan simulasi interaktif; serta ruang untuk kreativitas dan inovasi lewat aplikasi desain, coding, dan eksperimen sains. Agar benar-benar bermanfaat, orang tua perlu memilih aplikasi sesuai usia dan minat anak, memprioritaskan konten edukatif tanpa iklan berlebihan, menggunakan fitur kontrol orang tua (parental control), serta memastikan anak tetap punya waktu berinteraksi langsung dengan keluarga dan teman.</p>
  <p>Kunci pemanfaatan teknologi yang optimal adalah keseimbangan — bermanfaat jika digunakan bijak, namun bisa jadi masalah jika tidak dikontrol. Orang tua dan guru berperan lewat komunikasi terbuka tentang manfaat dan risiko teknologi, membimbing dan mendampingi penggunaannya (terutama saat anak masih kecil), mendorong anak menjadi kreator digital (bukan hanya pengguna pasif) misalnya lewat membuat video edukatif atau belajar coding, serta mengevaluasi secara berkala apakah waktu layar anak masih dalam batas sehat dan digunakan untuk hal positif. Teknologi bukan musuh, melainkan alat yang harus dikendalikan dengan bijak untuk mendukung perkembangan anak.</p>

  <h4>D. Mengelola Screen Time: Kapan Teknologi Bisa Mendukung Perkembangan Otak?</h4>
  <p>Screen time memiliki dua sisi. Dampak positifnya mencakup sumber belajar yang luas, peningkatan kreativitas dan keterampilan kognitif, latihan berpikir kritis lewat analisis dan perbandingan informasi, serta pembelajaran interaktif yang lebih menyenangkan. Namun dampak negatifnya juga nyata: gangguan konsentrasi dan berkurangnya interaksi sosial, penurunan kemampuan motorik akibat kurang bergerak, gangguan tidur akibat paparan cahaya biru, hingga potensi ketergantungan gadget. Agar screen time memberi manfaat optimal, penggunaannya perlu disesuaikan usia dan tujuan: gunakan sebagai alat belajar bukan sekadar hiburan, batasi waktu layar sesuai rekomendasi (misalnya 0-2 tahun sebaiknya dihindari kecuali video call keluarga, 2-5 tahun maksimal 1 jam dengan pendampingan, 6-12 tahun 1-2 jam dengan konten edukatif), serta terapkan zona bebas layar di rumah seperti ruang makan, kamar tidur, dan area belajar.</p>
  <p>Selain pembatasan, pendampingan aktif tetap diperlukan: mendampingi anak memahami informasi dari internet, mengajarkan cara memilih konten berkualitas, dan melatih berpikir kritis dalam menyaring informasi. Screen time sebaiknya juga dikombinasikan dengan aktivitas fisik dan sosial — bermain di luar ruangan, berinteraksi dengan teman sebaya, dan berpartisipasi dalam kegiatan keluarga — serta dijadikan momen interaktif, bukan pasif, misalnya lewat diskusi tentang video yang ditonton atau bermain game edukatif bersama sebagai aktivitas keluarga. Kesimpulannya, teknologi bukan musuh perkembangan anak, tetapi penggunaannya perlu dikontrol dan diarahkan secara bijak agar benar-benar mendukung perkembangan intelektualnya.</p>

  <h4>E. Peran Nutrisi dan Pola Tidur dalam Kecerdasan Anak</h4>
  <p>Kecerdasan anak tidak hanya dipengaruhi genetik dan lingkungan belajar, tetapi juga pola makan dan kualitas tidur. Nutrisi penting untuk kecerdasan anak mencakup asam lemak omega-3 (ikan salmon, kenari) untuk perkembangan sel otak dan daya ingat, protein (telur, daging, tahu-tempe) untuk fungsi kognitif, zat besi (bayam, daging merah) untuk aliran oksigen ke otak, vitamin B kompleks (pisang, alpukat, telur) untuk fungsi saraf, zinc (kacang-kacangan, biji labu) untuk daya ingat dan kecepatan berpikir, antioksidan (jeruk, wortel) untuk melindungi sel otak, serta glukosa dari karbohidrat kompleks (oatmeal, beras merah) untuk energi stabil. Pola makan yang baik meliputi sarapan bergizi agar anak lebih fokus, mengurangi gula berlebih, menghindari makanan cepat saji tinggi lemak jenuh, serta memastikan asupan air yang cukup untuk mencegah dehidrasi otak.</p>
  <p>Tidur sama pentingnya, karena saat tidur otak mengolah informasi, memperbaiki jaringan, dan memperkuat daya ingat. Durasi tidur yang dibutuhkan bervariasi menurut usia — dari 14-17 jam pada bayi 0-1 tahun hingga 8-10 jam pada remaja 13 tahun ke atas. Kurang tidur berdampak nyata: kesulitan berkonsentrasi, daya ingat melemah, emosi tidak stabil, dan penurunan kreativitas. Kualitas tidur dapat ditingkatkan lewat rutinitas tidur yang konsisten, mengurangi penggunaan gadget minimal satu jam sebelum tidur, menciptakan suasana kamar yang nyaman dan redup, menghindari makanan-minuman berkafein, serta membacakan buku atau melakukan kegiatan relaksasi sebelum tidur. Nutrisi yang baik dan tidur yang cukup bersama-sama membangun fondasi kuat bagi anak untuk siap menghadapi tantangan akademik dengan kecerdasan yang optimal.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima aspek lingkungan belajar pada Bab 5 (ruang belajar, kolaborasi orang tua-guru, teknologi, screen time, nutrisi-tidur), aspek mana yang paling perlu diperbaiki pada anak/siswa yang Anda dampingi saat ini — dan langkah konkret apa yang bisa mulai dijalankan pekan ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 5, organisasi kesehatan merekomendasikan bahwa anak usia 0-2 tahun sebaiknya...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menghindari screen time kecuali untuk video call bersama keluarga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Diberi akses gadget minimal 3 jam sehari agar terbiasa sejak dini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dibiarkan bebas menggunakan gadget tanpa batasan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak sulit berkonsentrasi di sekolah, mudah lelah, dan emosinya naik-turun. Setelah ditelusuri, ia terbiasa bermain gadget hingga larut malam dan jarang sarapan. Berdasarkan Bab 5, kombinasi faktor apa yang paling mungkin menjadi penyebabnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Faktor genetik semata, karena pola tidur dan sarapan tidak berkaitan dengan konsentrasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurang tidur akibat gadget sebelum tidur (mengganggu produksi melatonin) dikombinasikan dengan kurangnya nutrisi/sarapan bergizi yang menunjang fungsi otak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Faktor ruang belajar semata, karena warna dinding kamarnya kurang menenangkan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memanfaatkan teknologi untuk memperkaya pembelajaran, tetapi khawatir anak-anak justru menjadi pasif dan kurang berinteraksi sosial. Berdasarkan Bab 5, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melarang seluruh penggunaan teknologi di lingkungan sekolah tanpa kecuali</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menggunakan teknologi sebagai alat belajar interaktif yang dikombinasikan dengan aktivitas fisik dan sosial, bukan menggantikannya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan siswa menggunakan gadget sepenuhnya tanpa pendampingan atau evaluasi berkala</button>
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
<h2 class="reveal">Mengatasi Tantangan dalam Pembelajaran</h2>
<p class="lede reveal">Tidak semua anak belajar dengan mudah dan mulus — sebagian membutuhkan pendekatan khusus karena kebutuhan belajarnya berbeda, sementara sebagian lain sekadar butuh strategi dan dukungan yang tepat untuk mengatasi kesulitan yang wajar terjadi dalam proses belajar.</p>

<div class="card reveal">
  <h4>A. Anak dengan Kebutuhan Khusus</h4>
  <p>Anak dengan kebutuhan khusus adalah anak yang memiliki perbedaan dalam cara belajar, berpikir, atau berperilaku dibandingkan anak kebanyakan — mencakup kesulitan belajar seperti disleksia dan diskalkulia, gangguan perhatian (ADHD), autisme, gangguan bicara, dan lainnya. Tanda-tandanya bisa dikenali lewat kesulitan mengikuti pelajaran, sulit berkonsentrasi, masalah berinteraksi dengan teman sebaya, atau perilaku yang berbeda dari anak seusianya. Identifikasi dilakukan dengan memperhatikan perilaku anak di rumah dan sekolah, berkonsultasi dengan guru atau ahli perkembangan anak, serta melakukan tes psikologi bila diperlukan. Penanganannya mencakup adaptasi metode pembelajaran sesuai kebutuhan anak, bantuan tambahan di rumah atau sekolah, terapi (bicara, okupasi, atau perilaku), serta dukungan sosial dan emosional yang membangun rasa percaya diri anak.</p>
  <p>Bila kecurigaan terhadap kebutuhan khusus muncul, mencari bantuan profesional sangat dianjurkan — mulai dari psikolog anak yang melakukan evaluasi dan memberi rekomendasi intervensi, pendidik khusus yang memberikan layanan pendidikan sesuai kebutuhan, terapis wicara untuk gangguan bicara, hingga terapis okupasi untuk keterampilan motorik. Bantuan profesional penting karena memberikan diagnosis yang akurat, merancang program intervensi yang tepat sasaran, sekaligus memberi dukungan dan informasi yang dibutuhkan orang tua dalam mendampingi anak.</p>

  <h4>B. Mengatasi Kesulitan Belajar</h4>
  <p>Kesulitan belajar adalah hal wajar dalam proses pendidikan — yang terpenting adalah menemukan strategi tepat agar anak tetap termotivasi. Strategi belajar yang efektif mencakup membuat jadwal belajar yang teratur untuk membangun kebiasaan konsisten, mencari tempat belajar yang kondusif dan minim gangguan, membagi materi menjadi bagian-bagian kecil agar tidak membuat anak kewalahan, menggunakan berbagai metode belajar (membaca, mendengar, menonton, berdiskusi, praktik langsung), memanfaatkan alat bantu seperti flashcard atau mind map, melakukan evaluasi berkala untuk mengetahui area yang masih perlu diperbaiki, serta memastikan anak beristirahat secara teratur — misalnya dengan teknik Pomodoro yang memberi jeda singkat setiap 25-30 menit belajar.</p>
  <p>Di samping strategi teknis, motivasi dan dukungan dari lingkungan sekitar sangat menentukan. Ini mencakup memuji usaha anak, bukan hanya hasil akhirnya, memberikan dukungan moral-emosional tanpa tekanan berlebihan, melibatkan anak dalam menentukan tujuan belajarnya sendiri, membuat proses belajar menyenangkan lewat elemen kreatif seperti permainan edukatif atau proyek eksperimen, serta melibatkan anak dalam kegiatan ekstrakurikuler yang membangun bakat dan kepercayaan diri. Dukungan yang konsisten meningkatkan kepercayaan diri anak, membangkitkan minat belajarnya, membantu mengembangkan ketahanan mental (resiliensi) menghadapi tantangan, dan membuat proses belajar terasa lebih efektif serta menyenangkan. Kesabaran dan konsistensi dari orang tua, guru, dan lingkungan sekitar, disertai kolaborasi erat dengan tenaga pendidik, menjadi kunci membantu setiap anak — betapa pun berbeda kesulitannya — meraih keberhasilan dalam belajar.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari dua topik Bab 6 (anak berkebutuhan khusus dan kesulitan belajar pada umumnya), pernahkah Anda menjumpai anak yang kesulitan belajarnya sebenarnya bisa diatasi lebih baik dengan strategi yang tepat, alih-alih hanya dianggap "malas" atau "kurang niat"? Apa yang bisa dilakukan berbeda ke depannya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, teknik yang menerapkan waktu belajar terfokus diselingi jeda istirahat singkat setiap 25-30 menit disebut teknik...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pomodoro</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Growth mindset</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Konservasi Piaget</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak selalu terlambat memahami instruksi tertulis dan sering tampak bingung mengikuti pelajaran meski sudah berusaha keras, berbeda jauh dari teman-teman seusianya. Berdasarkan Bab 6, langkah pertama yang paling tepat dilakukan orang tua adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memarahi anak karena dianggap kurang berusaha dan tidak fokus saat belajar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memperhatikan pola perilakunya secara cermat, berkonsultasi dengan guru atau ahli perkembangan anak, dan melakukan tes psikologi jika diperlukan untuk mengidentifikasi kemungkinan kebutuhan khusus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena dianggap akan membaik dengan sendirinya tanpa penanganan apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu memuji muridnya hanya ketika mendapat nilai sempurna, dan jarang mengapresiasi usaha murid yang sudah berjuang keras meski hasilnya belum maksimal. Berdasarkan Bab 6, dampak apa yang paling mungkin terjadi pada motivasi belajar murid tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Motivasi belajar murid akan otomatis meningkat karena standar nilai yang tinggi selalu memotivasi semua anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Murid berisiko kehilangan motivasi dan kepercayaan diri, karena dukungan dan pujian atas usaha (bukan hanya hasil akhir) justru yang membangun ketahanan belajar anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun, karena pujian atas usaha dan hasil akhir memiliki pengaruh yang sama persis</button>
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
<h2 class="reveal">Menanamkan Nilai-Nilai Positif</h2>
<p class="lede reveal">Kecerdasan intelektual saja tidak cukup — anak juga perlu dibekali nilai-nilai moral yang menjadi pedoman hidupnya, serta pola pikir yang membuatnya percaya bahwa kemampuan apa pun bisa terus dikembangkan lewat usaha.</p>

<div class="card reveal">
  <h4>A. Pentingnya Nilai-Nilai Moral</h4>
  <p>Nilai-nilai moral adalah prinsip baik-buruk yang menjadi pegangan seseorang dalam bertindak, seperti kejujuran, tanggung jawab, kasih sayang, hormat, dan sopan santun. Nilai-nilai ini penting karena tiga alasan utama: sebagai pembentuk karakter yang kuat (anak dengan nilai moral baik cenderung lebih jujur, bertanggung jawab, dan peduli terhadap orang lain), sebagai fondasi hubungan sosial yang positif (memudahkan anak berteman dan diterima di lingkungannya), serta sebagai bekal kesuksesan di masa depan karena anak yang bermoral baik lebih mudah beradaptasi dan menghadapi tantangan. Cara menanamkannya meliputi memberi contoh langsung sebagai orang tua, menjelaskan pentingnya nilai moral dengan bahasa sederhana, menceritakan kisah-kisah inspiratif tentang tokoh bernilai moral tinggi, melibatkan anak dalam kegiatan sosial, serta memberi pujian dan apresiasi atas perilaku baik yang ditunjukkan.</p>

  <h4>B. Cara Menanamkan Nilai-Nilai</h4>
  <p>Menanamkan nilai positif pada anak ibarat menanam benih yang perlu dirawat dan disiram agar tumbuh subur, lewat empat pendekatan utama. Pertama, <strong>keteladanan</strong> — anak belajar lewat meniru, sehingga orang tua perlu konsisten menunjukkan perilaku yang ingin ditanamkan, bukan sekadar menyuruh. Kedua, <strong>cerita dan kisah inspiratif</strong> — baik dongeng maupun kisah nyata tentang kebaikan yang membuat anak lebih mudah terhubung dan termotivasi. Ketiga, <strong>diskusi dan perdebatan</strong> — mengajak anak berdiskusi, mengajarkan berpikir kritis lewat pertanyaan menantang, serta mendengarkan pendapat anak dengan saksama. Keempat, <strong>kegiatan sosial</strong> — melibatkan anak membantu orang lain, misalnya mengunjungi panti asuhan, sekaligus mengajarkan pentingnya berbagi. Keempat pendekatan ini efektif karena memberi pengalaman langsung yang membuat anak merasakan manfaat nyata dari tindakan baik, serta penguatan positif lewat pujian yang membuat anak termotivasi untuk terus berbuat baik.</p>

  <h4>C. Nilai-Nilai yang Perlu Ditanamkan</h4>
  <p>Ada delapan nilai inti yang perlu ditanamkan sejak dini. <strong>Jujur</strong> membangun kepercayaan orang lain dan harga diri anak, ditanamkan lewat keteladanan, penjelasan konsekuensi berbohong, dan pujian atas kejujuran sekecil apa pun. <strong>Disiplin</strong> meningkatkan produktivitas dan membentuk kebiasaan baik, ditanamkan lewat jadwal kegiatan yang teratur, pemberian tanggung jawab kecil, dan konsistensi penerapan aturan. <strong>Tanggung jawab</strong> meningkatkan kemandirian anak, ditanamkan lewat tugas sesuai usia, membiarkan anak menghadapi konsekuensi tindakannya, dan diskusi tentang pentingnya tanggung jawab. <strong>Empati</strong> membangun hubungan sosial dan mencegah konflik, ditanamkan lewat kisah yang menyentuh, diskusi tentang perasaan, dan pelibatan dalam kegiatan sosial.</p>
  <p><strong>Toleransi</strong> membantu anak hidup berdampingan di tengah keberagaman dan mencegah konflik akibat perbedaan pendapat, ditanamkan lewat pengenalan keberagaman budaya-agama-suku serta menghindari prasangka terhadap kelompok tertentu. <strong>Kerja sama</strong> membantu menyelesaikan masalah kompleks dan membangun hubungan yang kuat, dilatih lewat permainan yang membutuhkan kerja sama tim dan pelibatan dalam kegiatan kelompok. <strong>Kreativitas</strong> membantu anak menemukan solusi unik dan meningkatkan minat belajar, dipupuk lewat ruang untuk bereksplorasi, permainan imajinasi, dukungan terhadap minat unik anak, dan menghindari kritik berlebihan terhadap ide-idenya. Terakhir, <strong>inovasi</strong> membantu anak menghadapi perubahan dan menciptakan peluang baru, ditanamkan lewat kebiasaan bertanya "mengapa", dukungan terhadap minat sains-teknologi, dan pengenalan pada kisah tokoh-tokoh inovatif.</p>

  <h4>D. Membantu Anak Mengembangkan Growth Mindset</h4>
  <p>Growth mindset (pola pikir berkembang) adalah keyakinan bahwa kemampuan dan kecerdasan bisa dikembangkan lewat usaha, pembelajaran, dan ketekunan — berbeda dengan fixed mindset (pola pikir tetap) yang meyakini kecerdasan sebagai sesuatu yang tidak bisa berubah. Anak dengan fixed mindset cenderung berkata "aku memang tidak pandai matematika" atau "kalau aku gagal, berarti aku bodoh", sementara anak dengan growth mindset akan berkata "aku belum bisa matematika, tapi kalau aku berlatih, pasti bisa" dan memandang kegagalan sebagai kesempatan belajar, bukan bukti ketidakmampuan. Cara menumbuhkannya meliputi mengajarkan bahwa otak bisa bertumbuh seperti otot yang makin kuat bila dilatih, memberikan pujian yang tepat — menyoroti usaha dan proses ("kamu sudah berusaha keras, hebat!"), bukan bakat bawaan ("kamu memang jenius") yang justru membuat anak takut gagal — serta mengajarkan anak untuk tidak takut gagal lewat kisah inspiratif tokoh-tokoh besar yang pernah gagal berkali-kali sebelum berhasil, seperti Thomas Edison atau Michael Jordan.</p>
  <p>Satu teknik sederhana namun ampuh adalah menambahkan kata <strong>"belum"</strong> di akhir kalimat negatif anak — dari "aku nggak bisa berenang" menjadi "aku belum bisa berenang, tapi kalau aku terus latihan, aku pasti bisa" — sehingga anak melihat keterbatasannya sebagai sesuatu yang bisa diubah dengan usaha. Lingkungan yang mendukung growth mindset perlu diciptakan baik di rumah (membiarkan anak mencoba tanpa takut salah, memberi kesempatan menghadapi tantangan sendiri) maupun di sekolah (tidak hanya fokus pada nilai, tetapi juga proses belajarnya, serta mengapresiasi usaha bukan hanya hasil akhir). Anak dengan growth mindset akan tumbuh lebih percaya diri, gigih dan pantang menyerah, lebih kreatif dan inovatif, menyukai proses belajar itu sendiri, serta lebih bahagia dan tangguh secara mental dalam menghadapi tantangan hidup.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari delapan nilai yang dibahas pada Bab 7 (jujur, disiplin, tanggung jawab, empati, toleransi, kerja sama, kreativitas, inovasi), nilai mana yang menurut Anda paling perlu diperkuat pada anak/siswa yang Anda dampingi — dan cara penanaman mana (keteladanan, cerita, diskusi, atau kegiatan sosial) yang paling realistis mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, keyakinan bahwa kemampuan dan kecerdasan seseorang bisa dikembangkan melalui usaha, pembelajaran, dan ketekunan disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Growth mindset</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Fixed mindset</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kecerdasan majemuk</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru selalu memuji muridnya dengan kalimat "kamu memang anak yang jenius" setiap kali berhasil, tetapi tidak pernah menyoroti proses atau usaha di baliknya. Berdasarkan Bab 7, apa risiko dari pola pujian ini terhadap pola pikir murid?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko, karena pujian bentuk apa pun selalu berdampak positif secara identik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Murid berisiko mengembangkan fixed mindset dan takut mencoba hal baru karena khawatir gagal akan merusak citra "jenius" yang telah dibentuk oleh pujian tersebut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Murid akan otomatis menjadi lebih rendah hati karena sering dipuji</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak selalu mengembalikan uang kembalian lebih yang ia terima saat berbelanja, meski tidak ada yang mengetahuinya. Orang tuanya ingin memperkuat kebiasaan baik ini secara berkelanjutan. Berdasarkan Bab 7, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan perilaku tersebut karena dianggap hal kecil yang tidak perlu direspons</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberi pujian atas kejujurannya, menjadi teladan konsisten, dan menjelaskan mengapa kejujuran penting agar nilai itu makin tertanam kuat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghukum anak karena dianggap terlalu naif dalam menghadapi situasi tersebut</button>
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
<h2 class="reveal">Koneksi Antara Kecerdasan Emosional dan Intelektual</h2>
<p class="lede reveal">Kecerdasan intelektual dan kecerdasan emosional bukan dua hal yang terpisah — bab ini membahas bagaimana kemampuan mengenali dan mengelola emosi justru menjadi fondasi bagi keberhasilan belajar anak secara akademik.</p>

<div class="card reveal">
  <h4>A. Peran Kecerdasan Emosional dalam Proses Belajar</h4>
  <p>Kecerdasan emosional (emotional intelligence) adalah kemampuan mengenali, memahami, mengelola, dan mengendalikan emosi diri sendiri, sekaligus memahami perasaan orang lain. Dalam proses belajar, anak dengan kecerdasan emosional tinggi cenderung lebih mudah fokus, lebih mampu mengatasi stres, dan lebih siap menghadapi tantangan akademik seperti ujian atau materi yang sulit dipahami. Mereka juga lebih mampu bekerja sama dalam kelompok, menerima kritik dengan sikap positif, serta memiliki motivasi intrinsik yang tinggi untuk belajar. Secara ringkas, kecerdasan emosional memberi empat manfaat utama dalam belajar: meningkatkan konsentrasi dan fokus, mengembangkan resiliensi (tidak mudah putus asa saat gagal), memudahkan kerja sama dengan teman lewat pemahaman terhadap perasaan orang lain, serta meningkatkan motivasi belajar yang datang dari dalam diri, bukan sekadar tekanan dari luar.</p>

  <h4>B. Strategi Menumbuhkan Kecerdasan Emosional untuk Mendukung Pembelajaran</h4>
  <p>Meski sebagian berkembang secara alami, kecerdasan emosional anak dapat diasah lewat tiga strategi utama. Pertama, <strong>latihan kesadaran diri (self-awareness)</strong> — kemampuan anak mengenali dan memahami emosinya sendiri, dilatih lewat mengajak anak bercerita tentang perasaannya, menggunakan jurnal emosi harian, mengajarkan anak menyebutkan emosi yang dirasakan secara spesifik ("aku merasa kecewa karena..."), serta melatih anak mengenali reaksi tubuhnya terhadap emosi tertentu. Kedua, <strong>pengelolaan emosi yang sehat (self-regulation)</strong> — setelah mampu mengenali emosinya, anak perlu diajarkan mengelolanya dengan cara sehat, misalnya lewat teknik pernapasan dalam saat marah atau cemas, menghitung sampai sepuluh sebelum merespons sesuatu yang mengesalkan, melakukan aktivitas fisik untuk meredakan emosi negatif, serta memahami bahwa marah atau sedih itu wajar asalkan cara mengekspresikannya tetap baik.</p>
  <p>Ketiga, <strong>meningkatkan empati dan sosialisasi</strong> — kemampuan memahami dan merasakan apa yang dirasakan orang lain, yang membuat anak lebih mudah bergaul dan lebih peka terhadap kebutuhan orang di sekitarnya. Cara menumbuhkannya meliputi membacakan cerita bernilai empati dan mendiskusikan perasaan tokoh di dalamnya, mengajak anak membayangkan perasaan temannya yang sedang kesulitan, mendorong anak berbagi dan membantu orang lain, serta memberi contoh nyata empati dalam kehidupan sehari-hari. Dengan latihan yang konsisten pada ketiga area ini, anak akan terbiasa memahami dan merespons emosi — baik emosinya sendiri maupun emosi orang lain — dengan cara yang sehat dan matang.</p>

  <h4>C. Keterkaitan Kecerdasan Emosional dengan Prestasi Akademik</h4>
  <p>Berbagai penelitian menunjukkan hubungan erat antara kecerdasan emosional dan prestasi akademik anak, lewat lima jalur utama: mengurangi stres akademik (anak yang mampu mengelola emosi lebih tenang menghadapi ujian sehingga berpikir lebih jernih), meningkatkan motivasi dan ketekunan (lebih gigih belajar dan tidak mudah menyerah), meningkatkan keterampilan sosial (lebih sukses dalam proyek kelompok dan pembelajaran kolaboratif), memperbaiki kemampuan konsentrasi (lebih fokus tanpa terganggu kecemasan), serta membantu penyelesaian masalah akademik lewat cara berpikir yang tenang dan objektif. Sebagai contoh, anak yang gagal dalam ujian namun memiliki kecerdasan emosional tinggi akan mampu mengelola kekecewaannya, mencari tahu letak kesalahannya, dan berusaha memperbaikinya dengan belajar lebih giat — berbeda dengan anak yang kurang memiliki kecerdasan emosional dan cenderung mudah menyerah serta kehilangan motivasi.</p>
  <p>Kesimpulannya, kecerdasan emosional tidak hanya membantu hubungan sosial anak, tetapi juga berdampak besar pada dunia akademiknya. Oleh karena itu, menumbuhkan kecerdasan emosional perlu menjadi bagian penting dari pendidikan anak, baik di rumah maupun di sekolah — sejalan dan tidak terpisah dari upaya mengembangkan kecerdasan intelektualnya. Dengan membantu anak mengembangkan kesadaran diri, mengelola emosi secara sehat, serta meningkatkan empati dan keterampilan sosial, kita mendukung mereka tumbuh menjadi individu yang cerdas secara intelektual sekaligus kuat secara emosional — bekal penting menghadapi tantangan kehidupan di masa depan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga komponen kecerdasan emosional pada Bab 8 (kesadaran diri, pengelolaan emosi, empati), komponen mana yang menurut Anda paling perlu dilatih pada anak/siswa yang Anda dampingi — dan strategi mana dari bab ini yang paling realistis mulai diterapkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 8, kemampuan anak mengenali dan memahami emosinya sendiri disebut...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kesadaran diri (self-awareness)</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Konservasi kognitif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Growth mindset</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak selalu panik dan sulit berpikir jernih setiap kali menghadapi ujian, meski sudah belajar dengan baik. Berdasarkan Bab 8, akar masalah yang paling mungkin dan solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurangnya kemampuan pengelolaan emosi (self-regulation); solusinya melatih teknik menenangkan diri seperti pernapasan dalam sebelum dan saat menghadapi tekanan akademik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Anak tersebut pasti kurang cerdas secara intelektual dan perlu belajar lebih banyak materi pelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada hubungannya dengan emosi, karena hasil ujian hanya ditentukan oleh seberapa banyak materi yang dihafal</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa mendapat nilai buruk dalam ujian penting. Siswa dengan kecerdasan emosional tinggi, menurut Bab 8, kemungkinan besar akan merespons dengan cara...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menyerah dan menganggap dirinya tidak akan pernah bisa berhasil di mata pelajaran itu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengelola kekecewaannya, mencari tahu letak kesalahan, lalu berusaha memperbaikinya dengan belajar lebih giat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyalahkan gurunya sepenuhnya tanpa mau merefleksikan proses belajarnya sendiri</button>
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
<h2 class="reveal">Peran Interaksi Sosial dalam Pengembangan Intelektual Anak</h2>
<p class="lede reveal">Anak tidak berkembang secara kognitif dalam ruang kosong — interaksi dengan orang lain, mulai dari keluarga, sekolah, hingga masyarakat, menjadi salah satu sumber stimulasi terpenting bagi pikirannya.</p>

<div class="card reveal">
  <h4>A. Dampak Interaksi Sosial terhadap Perkembangan Kognitif Anak</h4>
  <p>Saat berkomunikasi dengan orang lain, anak belajar memahami perspektif berbeda, mengasah keterampilan berpikir kritis, dan meningkatkan kemampuan berbahasa. Interaksi sosial memberi empat dampak positif utama: meningkatkan kemampuan berbahasa lewat percakapan yang memperkaya kosakata dan struktur kalimat; mendorong pemecahan masalah lewat diskusi yang membantu anak memahami berbagai sudut pandang dan berpikir logis; mengasah keterampilan sosial-emosional lewat pengelolaan emosi dan pemahaman aturan sosial yang membuat anak lebih percaya diri dan nyaman dalam lingkungan belajar; serta menstimulasi kreativitas dan imajinasi lewat bermain peran, diskusi, atau kerja kelompok yang mendorong anak melihat masalah dari berbagai sudut pandang.</p>

  <h4>B. Peran Sekolah dan Masyarakat dalam Mendukung Proses Belajar</h4>
  <p>Agar interaksi sosial berdampak positif bagi perkembangan intelektual anak, sekolah dan masyarakat perlu berperan aktif. Sekolah dapat menjadi lingkungan belajar yang interaktif lewat metode pembelajaran berbasis diskusi, kerja kelompok, dan proyek kolaboratif, menciptakan lingkungan sekolah yang inklusif agar semua anak nyaman berpartisipasi, serta mengadakan kegiatan ekstrakurikuler seperti klub sains, teater, atau debat yang mengasah kemampuan berpikir kritis dan berkomunikasi. Masyarakat juga berperan sebagai sarana pengembangan sosial lewat kegiatan gotong royong, acara komunitas, atau kegiatan keagamaan, membangun budaya membaca dan berbagi pengetahuan, serta memfasilitasi kegiatan edukatif di luar sekolah seperti kunjungan ke museum atau perpustakaan.</p>
  <p>Orang tua turut memiliki peran penting dalam mendukung interaksi sosial anak — mendorong anak bermain dan berinteraksi langsung dengan teman-temannya, bukan hanya lewat media digital, menjadi pendengar yang baik ketika anak menceritakan pengalaman interaksinya, serta mengajarkan nilai-nilai sosial seperti empati, kerja sama, dan rasa hormat terhadap orang lain.</p>

  <h4>C. Membangun Kebiasaan Positif Melalui Interaksi Sosial</h4>
  <p>Interaksi sosial tidak hanya membantu perkembangan kognitif, tetapi juga membentuk karakter positif yang berguna sepanjang hidup anak. Lewat kebiasaan bekerja sama dan saling membantu, anak belajar pentingnya kerja tim dan menghargai kontribusi setiap anggota kelompok. Lewat pengalaman konflik atau kesalahpahaman dalam interaksi, anak belajar dari kesalahan — meminta maaf, memperbaiki kesalahan, dan menyadari bahwa kesalahan bukan kegagalan, melainkan bagian dari proses belajar. Interaksi sosial yang luas juga membantu anak menghargai perbedaan — memahami bahwa setiap orang memiliki latar belakang, budaya, dan cara berpikir yang berbeda, sehingga tumbuh lebih toleran dan terbuka terhadap perspektif orang lain.</p>
  <p>Terakhir, partisipasi dalam kegiatan sosial mengembangkan kemandirian dan rasa tanggung jawab anak — mengajarkannya untuk mengambil peran dan bertanggung jawab atas tindakannya sendiri, sekaligus belajar mengambil keputusan dengan mempertimbangkan dampaknya terhadap orang lain. Keempat kebiasaan positif ini — kerja sama, belajar dari kesalahan, menghargai perbedaan, dan kemandirian yang bertanggung jawab — menjadikan interaksi sosial bukan sekadar pelengkap, melainkan salah satu pilar utama pengembangan intelektual anak secara utuh.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga topik pada Bab 9 (dampak kognitif interaksi sosial, peran sekolah-masyarakat, kebiasaan positif), seberapa banyak kesempatan interaksi sosial langsung (bukan lewat layar) yang dimiliki anak/siswa yang Anda dampingi sehari-hari — dan apa yang bisa ditambahkan untuk memperkayanya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 9, salah satu dampak positif interaksi sosial terhadap perkembangan kognitif anak adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Meningkatkan kemampuan berbahasa lewat percakapan yang memperkaya kosakata dan struktur kalimat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi kebutuhan anak untuk belajar berpikir kritis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghambat kreativitas karena anak jadi terlalu bergantung pada pendapat orang lain</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak lebih banyak berinteraksi lewat layar gadget daripada bermain langsung dengan teman sebaya, dan orang tuanya mulai menyadari anak tersebut kesulitan memahami sudut pandang orang lain dalam permainan kelompok. Berdasarkan Bab 9, langkah paling tepat bagi orang tua adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan situasi ini karena interaksi lewat gadget dianggap setara dengan interaksi langsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mendorong anak lebih banyak bermain dan berinteraksi langsung dengan teman sebaya, karena interaksi tatap muka penting untuk mengasah pemahaman terhadap sudut pandang orang lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah lebih banyak waktu gadget agar anak semakin terbiasa berkomunikasi secara digital</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memperkuat perkembangan intelektual siswa lewat interaksi sosial, tetapi metode pembelajaran yang digunakan masih sepenuhnya berupa ceramah satu arah tanpa diskusi maupun kerja kelompok. Berdasarkan Bab 9, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mempertahankan metode ceramah karena dianggap paling efisien menyampaikan materi dalam waktu singkat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan metode pembelajaran berbasis diskusi, kerja kelompok, dan proyek kolaboratif, serta mengadakan ekstrakurikuler seperti klub sains atau debat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh interaksi antarsiswa agar mereka lebih fokus belajar secara individual</button>
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
<h2 class="reveal">Mengoptimalkan Strategi Belajar Berdasarkan Gaya Anak</h2>
<p class="lede reveal">Sebagai penutup pembahasan, bab ini mengajak orang tua dan pendidik mengenali bahwa setiap anak menyerap informasi dengan cara berbeda — dan bagaimana menyesuaikan metode pembelajaran serta menjaga motivasi belajar sesuai keunikan tersebut.</p>

<div class="card reveal">
  <h4>A. Memahami Beragam Gaya Belajar</h4>
  <p>Setiap anak memiliki cara unik dalam menyerap, mengolah, dan memahami informasi, sehingga mengenali gaya belajarnya sangat penting agar pembelajaran lebih efektif dan menyenangkan. Anak dengan <strong>gaya belajar visual</strong> lebih mudah memahami lewat gambar, grafik, diagram, dan warna, serta terbantu oleh video edukatif dan peta konsep. Anak <strong>auditori</strong> lebih mudah menyerap informasi lewat pendengaran — senang mendengarkan cerita, diskusi, atau rekaman pelajaran, dan terbantu oleh musik serta ritme. Anak <strong>kinestetik</strong> lebih mudah belajar lewat pengalaman langsung, gerakan, atau praktik, cenderung aktif dan sulit duduk diam lama, sehingga metode eksperimen, permainan peran, atau kegiatan fisik sangat efektif untuk mereka.</p>
  <p>Sementara itu, anak dengan <strong>gaya belajar verbal</strong> lebih suka membaca dan menulis, senang mencatat atau menjelaskan kembali informasi dengan kata-katanya sendiri, sehingga diskusi kelompok dan debat menjadi metode yang efektif. Anak dengan <strong>gaya belajar logis-matematis</strong> lebih menyukai pola, angka, dan pemecahan masalah, senang bermain teka-teki logika dan berpikir analitis, sehingga pendekatan deduktif dan berbasis masalah paling sesuai bagi mereka. Penting dipahami bahwa gaya-gaya ini tidak eksklusif satu sama lain — banyak anak memiliki kombinasi dari beberapa gaya sekaligus, sehingga pengamatan langsung terhadap cara anak paling nyaman belajar tetap menjadi kunci utama.</p>

  <h4>B. Menyesuaikan Metode Pembelajaran dengan Gaya Belajar Anak</h4>
  <p>Setelah mengenali gaya belajar anak, metode pembelajaran perlu disesuaikan agar lebih efektif. Untuk anak visual, gunakan gambar, diagram, dan tabel, serta dorong mereka membuat mind map atau sketsa dari konsep yang dipelajari. Untuk anak auditori, gunakan metode bercerita dan rekam penjelasan agar bisa didengarkan ulang. Untuk anak kinestetik, terapkan pembelajaran berbasis praktik seperti eksperimen sains atau simulasi peran, serta libatkan aktivitas fisik saat belajar, misalnya berhitung sambil bergerak. Untuk anak verbal, ajak menulis ringkasan atau jurnal belajar, dan dorong mereka menjelaskan kembali materi kepada orang lain. Untuk anak logis-matematis, berikan tantangan berbasis logika seperti teka-teki atau permainan angka, serta dorong mereka mencari pola dan menganalisis informasi secara mendalam.</p>

  <h4>C. Meningkatkan Motivasi Belajar dengan Pendekatan yang Tepat</h4>
  <p>Menerapkan strategi belajar yang sesuai gaya anak akan meningkatkan motivasi belajarnya secara signifikan. Kuncinya ada pada lima langkah: membuat pembelajaran menyenangkan lewat permainan edukatif dan media menarik yang sesuai gaya belajar anak; memberikan apresiasi dan penguatan positif dengan memuji usaha (bukan hanya hasil akhir) serta menggunakan sistem reward sederhana seperti stiker atau tabel pencapaian; menciptakan lingkungan belajar yang nyaman dan bebas gangguan, disesuaikan kebutuhan spesifik anak (misalnya ruang gerak lebih luas bagi anak kinestetik); melibatkan anak dalam menentukan metode belajarnya sendiri lewat diskusi dan pilihan tugas yang fleksibel; serta membangun kebiasaan belajar yang konsisten lewat jadwal tetap, keseimbangan antara belajar-istirahat-bermain, dan tanggung jawab atas proses belajarnya sendiri. Dengan pendekatan yang menghormati keunikan setiap anak, proses belajar tidak lagi terasa sebagai beban, melainkan perjalanan yang mereka jalani dengan percaya diri dan penuh semangat.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima gaya belajar yang dibahas pada Bab 10 (visual, auditori, kinestetik, verbal, logis-matematis), gaya belajar apa yang paling dominan pada anak/siswa yang Anda dampingi — dan apakah metode pengajaran yang selama ini digunakan sudah sesuai dengan gaya tersebut?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 10, anak yang lebih mudah belajar lewat pengalaman langsung, gerakan, atau praktik, dan cenderung sulit duduk diam dalam waktu lama, memiliki gaya belajar...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kinestetik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Auditori</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Logis-matematis semata tanpa unsur gerak</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru mengajar seluruh materi hanya dengan ceramah panjang tanpa gambar, praktik, atau diskusi apa pun, sehingga sebagian besar siswa di kelasnya tampak bosan dan sulit memahami pelajaran. Berdasarkan Bab 10, apa yang paling mungkin menjadi akar masalahnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Seluruh siswa di kelas tersebut memang tidak berbakat dalam pelajaran itu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Metode pembelajaran yang digunakan hanya cocok untuk gaya belajar auditori-verbal, sementara siswa dengan gaya visual, kinestetik, atau logis-matematis tidak terakomodasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ceramah adalah satu-satunya metode yang terbukti efektif untuk semua gaya belajar anak</button>
  </div>
  <div class="quiz-q">
    <p>Seorang anak sangat sulit fokus duduk membaca buku teks, tetapi sangat cepat memahami konsep matematika ketika materinya disampaikan lewat permainan yang melibatkan gerakan tubuh. Berdasarkan Bab 10, pendekatan paling tepat bagi orang tua/guru adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa anak tetap belajar lewat membaca buku teks saja karena dianggap metode paling "benar" untuk semua anak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mengenali bahwa anak ini cenderung bergaya belajar kinestetik, lalu menyesuaikan metode pengajaran dengan aktivitas fisik dan praktik langsung</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menyimpulkan bahwa anak tersebut tidak berbakat di bidang akademik apa pun</button>
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

  <div class="assess-q" data-correct="2">
    <p>Seorang anak usia 9 tahun sudah memahami bahwa air yang dituang dari gelas pendek ke gelas tinggi jumlahnya tetap sama. Berdasarkan Bab 1, anak ini berada di tahap perkembangan kognitif...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sensorimotor</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Operasional konkret</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pra-operasional</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak mendapat gizi tercukupi dan fasilitas belajar lengkap, tetapi jarang diajak bicara dan sering dimarahi tanpa penjelasan. Berdasarkan Bab 1, faktor apa yang paling berisiko menghambat perkembangan kognitifnya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor genetik, karena itu satu-satunya penentu kecerdasan anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor lingkungan emosional dan stimulasi sosial yang kurang mendukung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko sama sekali karena nutrisi sudah cukup</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 2, usia dini disebut "periode emas" perkembangan otak terutama karena plastisitas otak yang sangat tinggi, yang artinya...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Otak sangat mudah menyesuaikan diri dan dibentuk oleh pengalaman yang diberikan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak usia dini sudah mampu berpikir abstrak dan hipotesis secara mandiri</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak usia dini tidak lagi membutuhkan pendampingan orang tua</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang pengasuh memberi anak usia 2 tahun banyak mainan mahal, tetapi jarang mengajaknya bicara atau membacakan cerita. Berdasarkan Bab 2, area stimulasi apa yang paling berisiko tertinggal?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Stimulasi sensorimotor, karena mainan sudah cukup mencakup semua aspek</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pengembangan bahasa, karena kosakata berkembang lewat interaksi verbal yang intens</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena mainan edukatif sudah mencakup semua area</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang anak kelas 5 SD menikmati waktu menggambar, tetapi orang tuanya memaksanya fokus les matematika karena dianggap lebih "berguna". Berdasarkan Bab 3, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak berisiko kehilangan motivasi karena minat aslinya tidak didukung, padahal mendukungnya bisa meningkatkan motivasi belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena matematika selalu lebih penting daripada minat seni</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak otomatis kehilangan kemampuan menggambar begitu difokuskan pada matematika</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru SD ingin melatih pemecahan masalah muridnya. Berdasarkan Bab 3, langkah pertama yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengajak siswa mengenali apa masalah yang sebenarnya terjadi, sebelum mencari informasi dan solusi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung memberikan jawaban akhir agar siswa tidak bingung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meminta siswa menghafal semua kemungkinan solusi tanpa memahami masalahnya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang remaja membagikan berita viral tanpa memeriksa sumber atau membandingkannya dengan berita lain. Berdasarkan Bab 4, keterampilan apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keterampilan motorik halus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemampuan analisis dan evaluasi informasi sebelum mempercayainya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kemampuan menghafal sebanyak-banyaknya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa SMA bingung memilih jurusan kuliah karena orang tuanya memaksakan pilihan tanpa mempertimbangkan minatnya. Berdasarkan Bab 4, langkah paling tepat bagi orang tua adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap memaksakan pilihan awal karena orang tua dianggap selalu tahu yang terbaik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengajak anak eksplorasi minat, memberi informasi profesi, dan mendukung keputusan anak tanpa memaksa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan anak memutuskan sendiri tanpa informasi maupun dukungan apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak sulit berkonsentrasi, mudah lelah, dan emosinya naik-turun setelah ditelusuri terbiasa bermain gadget hingga larut malam dan jarang sarapan. Berdasarkan Bab 5, penyebab paling mungkin adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor genetik semata, tidak terkait pola tidur dan sarapan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurang tidur akibat gadget sebelum tidur dikombinasikan dengan kurangnya nutrisi/sarapan bergizi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Faktor warna dinding kamar yang kurang menenangkan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin memanfaatkan teknologi untuk pembelajaran tanpa membuat siswa pasif dan kurang bersosialisasi. Berdasarkan Bab 5, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melarang seluruh penggunaan teknologi di sekolah tanpa kecuali</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menggunakan teknologi sebagai alat belajar interaktif yang dikombinasikan dengan aktivitas fisik dan sosial</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan siswa menggunakan gadget sepenuhnya tanpa pendampingan</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak sulit mengikuti pelajaran dan tampak bingung meski sudah berusaha keras, jauh berbeda dari teman seusianya. Berdasarkan Bab 6, langkah pertama yang paling tepat dilakukan orang tua adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memarahi anak karena dianggap kurang berusaha</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memperhatikan pola perilakunya, berkonsultasi dengan guru/ahli, dan melakukan tes psikologi jika diperlukan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan saja karena akan membaik dengan sendirinya</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru hanya memuji murid ketika mendapat nilai sempurna, jarang mengapresiasi usaha murid yang sudah berjuang keras. Berdasarkan Bab 6, dampak paling mungkin terhadap motivasi belajar murid adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Motivasi otomatis meningkat karena standar nilai tinggi selalu memotivasi semua anak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid berisiko kehilangan motivasi, karena pujian atas usaha (bukan hanya hasil) yang membangun ketahanan belajar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun terhadap motivasi murid</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru selalu memuji murid dengan kalimat "kamu memang jenius" tanpa menyoroti proses atau usaha. Berdasarkan Bab 7, risiko dari pola pujian ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko, karena semua bentuk pujian berdampak sama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid berisiko mengembangkan fixed mindset dan takut mencoba hal baru karena takut gagal merusak citra "jenius"</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Murid otomatis menjadi lebih rendah hati</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak selalu mengembalikan kembalian lebih saat berbelanja meski tidak ada yang mengetahuinya. Berdasarkan Bab 7, pendekatan paling tepat orang tua untuk memperkuat nilai ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan karena dianggap hal kecil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memberi pujian atas kejujurannya, menjadi teladan konsisten, dan menjelaskan pentingnya kejujuran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghukum anak karena dianggap terlalu naif</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang anak selalu panik dan sulit berpikir jernih setiap menghadapi ujian meski sudah belajar dengan baik. Berdasarkan Bab 8, akar masalah dan solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurangnya pengelolaan emosi (self-regulation); solusinya melatih teknik menenangkan diri seperti pernapasan dalam</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Anak pasti kurang cerdas secara intelektual dan perlu menghafal lebih banyak materi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada hubungannya dengan emosi sama sekali</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang siswa mendapat nilai buruk dalam ujian penting. Berdasarkan Bab 8, siswa dengan kecerdasan emosional tinggi kemungkinan besar akan merespons dengan cara...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menyerah dan menganggap dirinya tidak akan pernah berhasil</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengelola kekecewaannya, mencari letak kesalahan, lalu berusaha memperbaikinya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyalahkan gurunya sepenuhnya tanpa refleksi diri</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak lebih banyak berinteraksi lewat gadget daripada bermain langsung dengan teman, dan mulai kesulitan memahami sudut pandang orang lain. Berdasarkan Bab 9, langkah paling tepat orang tua adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan karena interaksi lewat gadget setara dengan interaksi langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mendorong anak lebih banyak berinteraksi langsung dengan teman sebaya secara tatap muka</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah lebih banyak waktu gadget agar anak terbiasa berkomunikasi digital</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang anak sangat sulit fokus membaca buku teks, tetapi cepat memahami matematika lewat permainan yang melibatkan gerakan tubuh. Berdasarkan Bab 10, pendekatan paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksa anak tetap belajar lewat membaca buku teks saja</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengenali gaya belajar kinestetik anak dan menyesuaikan metode dengan aktivitas fisik dan praktik langsung</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyimpulkan anak tersebut tidak berbakat di bidang akademik apa pun</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah ingin memperkuat perkembangan intelektual siswa lewat interaksi sosial, tetapi metode pembelajaran yang dipakai masih sepenuhnya ceramah satu arah tanpa diskusi maupun kerja kelompok. Berdasarkan Bab 9, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mempertahankan metode ceramah karena dianggap paling efisien menyampaikan materi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan metode berbasis diskusi, kerja kelompok, dan proyek kolaboratif, serta ekstrakurikuler seperti klub sains atau debat</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh interaksi antarsiswa agar mereka fokus belajar secara individual</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru mengajar seluruh materi hanya dengan ceramah panjang tanpa gambar, praktik, atau diskusi, sehingga sebagian besar siswa tampak bosan dan sulit memahami pelajaran. Berdasarkan Bab 10, apa yang paling mungkin menjadi akar masalahnya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Seluruh siswa di kelas tersebut memang tidak berbakat dalam pelajaran itu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Metode yang digunakan hanya cocok untuk gaya auditori-verbal, sementara gaya visual, kinestetik, dan logis-matematis tidak terakomodasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ceramah adalah satu-satunya metode yang efektif untuk semua gaya belajar anak</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
