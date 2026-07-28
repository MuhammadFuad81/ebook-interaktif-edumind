/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Panduan Pengembangan Kurikulum Sekolah Islam"
   File ini HANYA berisi data (HTML string per halaman), dimuat oleh engine.js
   lewat window.BOOK_CONTENT lalu disuntikkan ke #page-<key> saat aplikasi dibuka.

   KENAPA DIPISAH DARI HTML YANG DITEMPEL DI GROWVA:
   Field "Full Page" di growva punya batas jumlah karakter. Begitu isi bab
   diperpanjang, HTML jadi sangat panjang dan apa pun yang melebihi batas akan
   terpotong diam-diam -- termasuk tag <script src=".../engine.js"> di paling
   bawah, yang bikin SEMUA tombol (login, next/prev, asesmen) berhenti
   berfungsi tanpa pesan error yang jelas. Dengan isi bab dipindah ke sini
   (file terpisah di GitHub/jsDelivr), HTML yang ditempel ke growva jadi
   pendek & konstan, tidak peduli seberapa panjang buku.

   Setelah mengedit file ini di GitHub, jangan lupa purge cache jsDelivr:
   https://purge.jsdelivr.net/gh/USER/REPO@main/content-panduan-kurikulum-sekolah-islam.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Pendahuluan — Memahami Hakikat dan Urgensi Kurikulum</h2>
<p class="lede reveal">Sebelum menyusun satu halaman pun dokumen kurikulum, setiap kepala sekolah, tim pengembang, dan komite sekolah Islam perlu kembali dulu ke pertanyaan paling mendasar: apa sebenarnya kurikulum itu, dan mengapa keberadaannya begitu menentukan arah pendidikan Islam?</p>

<div class="card reveal">
  <h4>A. Definisi dan Konsep Dasar Kurikulum</h4>
  <p>Istilah "kurikulum" berasal dari bahasa Yunani, yaitu <em>curir</em> yang berarti pelari, dan/atau <em>curere</em> yang berarti tempat berpacu. Dalam konteks pendidikan, kurikulum diibaratkan sebagai lintasan yang harus dilalui atau jarak yang harus ditempuh oleh para pelari — yaitu peserta didik — dalam mencapai tujuan pembelajaran. Dalam pengertian yang lebih operasional, kurikulum adalah rencana pembelajaran yang tersusun rapi dan sistematis untuk mencapai tujuan pendidikan tertentu, bukan sekadar daftar mata pelajaran yang harus diajarkan.</p>
  <p>Ada empat konsep dasar yang membentuk kurikulum yang baik. Kurikulum harus <strong>komprehensif</strong>, meliputi semua aspek pembelajaran mulai dari pengetahuan dan keterampilan hingga sikap dan nilai; <strong>terintegrasi</strong>, menghubungkan berbagai disiplin ilmu dengan nilai-nilai yang ingin ditanamkan; <strong>dinamis</strong>, mampu beradaptasi dengan perubahan dan perkembangan zaman; serta <strong>berpusat pada siswa</strong>, memperhatikan kebutuhan, minat, dan kemampuan individu setiap peserta didik. Keempat prinsip ini menjadi rambu-rambu yang akan terus muncul di bab-bab berikutnya, sebab hampir semua persoalan penyusunan dan pengembangan kurikulum pada akhirnya kembali ke apakah rancangan tersebut cukup komprehensif, terintegrasi, dinamis, dan berpusat pada siswa.</p>

  <h4>B. Pentingnya Kurikulum dalam Pendidikan Islam</h4>
  <p>Bagi sekolah Islam, kurikulum memikul tanggung jawab yang lebih luas dibanding sekadar mengantarkan siswa lulus ujian. Pertama, kurikulum berperan <strong>menanamkan nilai-nilai Islam</strong> — membantu membentuk karakter dan kepribadian siswa agar sesuai dengan ajaran Islam sejak usia dini. Kedua, kurikulum berfungsi <strong>mengintegrasikan ilmu dan agama</strong>, memastikan siswa tidak hanya memperoleh pengetahuan akademik tetapi juga memahami serta mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari, bukan memperlakukan keduanya sebagai dua hal yang terpisah. Ketiga, kurikulum menjadi jalan untuk <strong>mencapai tujuan pendidikan Islam</strong> itu sendiri, yaitu menghasilkan individu yang beriman, bertakwa, berilmu, dan berakhlak mulia, sehingga mampu berkontribusi positif bagi masyarakat dan agama.</p>
  <p>Keempat, kurikulum yang baik <strong>mendukung pembelajaran holistik</strong> yang mencakup aspek kognitif, afektif, dan psikomotorik sekaligus, memastikan perkembangan siswa secara menyeluruh — baik dalam aspek akademik maupun spiritual. Empat peran ini menjelaskan mengapa sekolah Islam tidak bisa sekadar "menambahkan" pelajaran agama ke atas kurikulum umum yang sudah ada, melainkan perlu merancang kurikulum sebagai satu kesatuan yang sejak awal memadukan kedua dimensi tersebut.</p>

  <h4>C. Tujuan dan Manfaat Menyusun Kurikulum yang Baik</h4>
  <p>Ada empat tujuan utama di balik penyusunan kurikulum yang baik. Kurikulum yang baik membantu sekolah <strong>mencapai standar pendidikan</strong> yang telah ditetapkan oleh pemerintah atau lembaga pendidikan terkait; <strong>membentuk karakter dan kepribadian</strong> siswa sesuai dengan nilai-nilai Islam; <strong>mengembangkan potensi</strong> akademik dan non-akademik siswa secara maksimal; serta <strong>menyiapkan siswa untuk masa depan</strong>, baik dalam konteks akademik, karier, maupun kehidupan sosial.</p>
  <p>Manfaatnya pun dirasakan langsung dalam keseharian sekolah. Kurikulum yang baik memberi <strong>konsistensi pembelajaran</strong> — panduan jelas bagi guru sehingga proses belajar-mengajar lebih terarah; meningkatkan <strong>kualitas pendidikan</strong> secara keseluruhan karena semuanya terstruktur dan terencana; mendorong <strong>motivasi dan keterlibatan siswa</strong> lewat pembelajaran yang menarik dan relevan; serta membuka ruang bagi <strong>evaluasi dan perbaikan berkelanjutan</strong>, memastikan tujuan pendidikan terus tercapai dari waktu ke waktu. Bab-bab selanjutnya akan membedah satu per satu bagaimana keempat tujuan dan manfaat ini diwujudkan secara konkret, mulai dari komponen kurikulum, langkah penyusunannya, hingga implementasi dan pengembangannya di lapangan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Sebelum melangkah ke bab-bab teknis berikutnya, coba jujur menilai: dari empat konsep dasar kurikulum (komprehensif, terintegrasi, dinamis, berpusat pada siswa), yang manakah yang paling lemah diterapkan di sekolah Anda saat ini, dan apa yang membuatnya sulit diwujudkan?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Istilah "kurikulum" berasal dari bahasa Yunani "curere" yang berarti...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tempat berpacu / lintasan yang harus ditempuh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kitab suci</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tempat berkumpul guru</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam memasukkan pelajaran sains dan pelajaran agama dalam jadwal yang sama sekali terpisah, tanpa ada satu pun titik temu antara keduanya di kelas. Konsep dasar kurikulum manakah yang paling jelas belum terpenuhi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Terintegrasi — karena belum menghubungkan disiplin ilmu umum dengan nilai-nilai yang ingin ditanamkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Dinamis — karena jadwal pelajaran belum diubah tahun ini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Komprehensif — karena jumlah mata pelajaran sudah banyak</button>
  </div>
  <div class="quiz-q">
    <p>SDIT Nurul Hikmah memiliki nilai akademik yang baik, tetapi orang tua mengeluhkan bahwa lulusannya kurang terbiasa mempraktikkan nilai-nilai Islam dalam keseharian, dan sekolah jarang mengevaluasi ulang materi ajarnya sejak lima tahun terakhir. Berdasarkan Bab 1, dua hal apa yang paling perlu diperkuat sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Penanaman nilai-nilai Islam secara konsisten dalam keseharian, serta evaluasi dan perbaikan kurikulum secara berkelanjutan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah jam pelajaran matematika dan sains saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh kurikulum nasional tanpa mengevaluasi penyebab masalahnya terlebih dahulu</button>
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
<h2 class="reveal">Komponen-Komponen Kurikulum</h2>
<p class="lede reveal">Kurikulum yang utuh terbentuk dari lima komponen yang saling menopang: tujuan pendidikan, materi pembelajaran, metode pengajaran, evaluasi, dan lingkungan belajar — melewatkan salah satunya berarti membiarkan lintasan pendidikan yang ditempuh siswa menjadi timpang.</p>

<div class="card reveal">
  <h4>A. Tujuan Pendidikan</h4>
  <p>Tujuan pendidikan adalah komponen paling penting dari kurikulum, karena menjadi pedoman yang menentukan arah keseluruhan kegiatan belajar-mengajar. Di sekolah Islam, tujuan pendidikan tidak hanya mencakup aspek akademik seperti di sekolah umum, tetapi juga memasukkan nilai-nilai spiritual, moral, dan sosial berbasis Islam, sehingga memengaruhi perkembangan siswa secara menyeluruh: kecerdasan intelektual, emosional, dan spiritual sekaligus.</p>
  <p>Tujuan <strong>akademik</strong> berfokus pada pencapaian kompetensi di berbagai mata pelajaran — matematika untuk berpikir logis dan analitis, sains untuk memupuk rasa ingin tahu dan mendorong eksperimen, bahasa untuk kemampuan berkomunikasi dalam bahasa Indonesia, Arab, dan asing lainnya, serta sejarah-geografi untuk memahami peradaban Islam dan dunia. Tujuan <strong>spiritual</strong> memastikan siswa memiliki keimanan yang kuat, memahami rukun Islam dan rukun iman, serta menumbuhkan rasa syukur dan tawakal. Tujuan <strong>moral</strong> membentuk akhlak yang baik — kejujuran, disiplin, tanggung jawab, hormat kepada orang tua dan guru — sekaligus menanamkan perilaku Islami dalam keseharian. Tujuan <strong>sosial</strong> membangun kemampuan berinteraksi positif, menumbuhkan tanggung jawab sosial, dan mengembangkan jiwa kepemimpinan serta kerja sama, sehingga siswa tidak hanya bertanggung jawab pada dirinya sendiri tetapi juga berperan aktif membangun masyarakat berdasarkan nilai-nilai Islam.</p>

  <h4>B. Materi atau Konten Pembelajaran</h4>
  <p>Materi pembelajaran berisi semua informasi, konsep, dan keterampilan yang harus dipelajari siswa. Di sekolah Islam, materi dirancang holistik: mata pelajaran <strong>umum</strong> seperti matematika, sains, bahasa Indonesia, bahasa Inggris, serta sejarah-geografi membekali siswa pengetahuan dan keterampilan yang dibutuhkan untuk kehidupan sehari-hari dan jenjang pendidikan berikutnya. Mata pelajaran <strong>keislaman</strong> — Al-Qur'an, Hadits, Fiqih, Aqidah, Akhlak, dan Sejarah Islam — menumbuhkan iman, memperkuat akhlak, dan mengajarkan siswa menjalankan ajaran Islam dengan baik.</p>
  <p>Ciri khas sekolah Islam terletak pada <strong>integrasi mata pelajaran</strong>: nilai-nilai Islam dipadukan ke dalam semua mata pelajaran, bukan hanya pelajaran agama. Matematika dikaitkan dengan kebesaran Allah dalam keteraturan angka dan hukum alam; sains menjadi sarana merenungi kebesaran ciptaan Allah, dari atom terkecil hingga galaksi; sejarah menumbuhkan rasa bangga terhadap kontribusi peradaban Islam bagi kemajuan ilmu pengetahuan. Dengan integrasi semacam ini, pendidikan di sekolah Islam tidak berhenti pada pencapaian akademik, tetapi juga membentuk kepribadian yang beriman dan berakhlak mulia.</p>

  <h4>C. Metode Pengajaran</h4>
  <p>Metode pengajaran adalah cara guru menyampaikan materi, dan di sekolah Islam metode ini tidak hanya bertujuan transfer ilmu, tetapi juga membentuk karakter serta menginternalisasi nilai-nilai Islam. <strong>Ceramah dan diskusi</strong> efektif untuk konsep dasar dan materi keagamaan seperti tafsir atau sejarah Nabi, sekaligus melatih siswa berpikir kritis lewat dialog. <strong>Pembelajaran aktif</strong> — diskusi kelompok, proyek, dan studi kasus — mendorong kolaborasi dan kemandirian berpikir, misalnya proyek tentang sejarah peradaban Islam atau studi kasus masalah sosial dari perspektif Islam.</p>
  <p><strong>Pendekatan kontekstual</strong> mengaitkan materi dengan kehidupan sehari-hari siswa sekaligus menyisipkan nilai Islam — menghubungkan matematika dengan perhitungan zakat, atau geografi dengan ajaran menjaga alam sebagai amanah dari Allah. <strong>Pembelajaran berbasis teknologi</strong> — media digital, platform e-learning, dan kuis interaktif — meningkatkan daya tarik pelajaran dan mendorong kemandirian belajar, asalkan penggunaannya tetap dijaga agar selaras dengan adab dan waktu ibadah siswa.</p>

  <h4>D. Evaluasi dan Asesmen</h4>
  <p>Evaluasi berfungsi mengukur sejauh mana tujuan pendidikan tercapai — bukan hanya dari sisi akademik, tetapi juga karakter, iman, dan perilaku siswa. <strong>Tes tertulis dan lisan</strong> mengukur pemahaman teoritis dan kemampuan berbicara, misalnya kemampuan membaca Al-Qur'an atau menjelaskan hukum fiqih secara lisan. <strong>Observasi</strong> menilai perilaku dan partisipasi siswa yang tidak terlihat dari tes tertulis, seperti kedisiplinan, kerja sama, dan penerapan nilai Islam dalam keseharian.</p>
  <p><strong>Portofolio</strong> mendokumentasikan perkembangan siswa dari waktu ke waktu lewat kumpulan tugas dan karya nyata. <strong>Penilaian otentik</strong> menilai kemampuan siswa menerapkan pengetahuan dalam tugas-tugas nyata yang relevan dengan kehidupan dan dunia kerja masa depan. <strong>Evaluasi diri dan teman sebaya</strong> mendorong siswa merefleksikan kelebihan-kekurangan mereka sendiri sekaligus belajar memberi dan menerima umpan balik secara konstruktif dari teman-temannya.</p>

  <h4>E. Lingkungan Belajar</h4>
  <p>Lingkungan belajar yang ideal mencakup tiga aspek: fisik, psikologis, dan spiritual. <strong>Lingkungan fisik</strong> — ruang kelas bersih dan nyaman, ventilasi dan pencahayaan baik, peralatan memadai, serta ruang yang teratur — mempengaruhi kenyamanan dan efektivitas belajar; kebersihan bahkan dimaknai sebagai "sebagian dari iman". <strong>Lingkungan psikologis</strong> menghadirkan rasa aman dari bullying atau tekanan negatif, suasana belajar yang menyenangkan, hubungan hangat antara guru-siswa, serta budaya saling mendukung antarsiswa.</p>
  <p><strong>Lingkungan spiritual</strong> mencerminkan nilai-nilai Islam dalam keseharian sekolah — kegiatan keagamaan rutin seperti shalat berjamaah dan tadarus, penataan ruang yang islami (kaligrafi, ruang shalat yang terawat), keteladanan guru dan staf dalam berperilaku sesuai ajaran Islam, serta peringatan hari besar Islam yang menumbuhkan semangat kebersamaan dan rasa syukur. Ketiga lapisan lingkungan ini bekerja bersama membuat siswa merasa dekat dengan agama sekaligus nyaman belajar, sehingga pembelajaran tidak berhenti pada akademik tetapi juga membentuk akhlak dan iman.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima komponen kurikulum di Bab 2 (tujuan, materi, metode, evaluasi, lingkungan belajar), komponen mana yang sudah paling kuat di sekolah Anda, dan komponen mana yang masih perlu dibenahi lebih dulu sebelum yang lain?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Sebutkan tiga aspek utama lingkungan belajar yang ideal menurut Bab 2.</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Lingkungan fisik, psikologis, dan spiritual</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Lingkungan akademik, finansial, dan digital</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Lingkungan keluarga, sosial, dan politik</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru matematika ingin menyisipkan nilai Islam dalam pelajarannya tanpa mengubahnya menjadi pelajaran agama. Pendekatan metode pengajaran manakah yang paling tepat digunakan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendekatan kontekstual, misalnya mengaitkan perhitungan matematika dengan zakat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Metode ceramah satu arah tanpa contoh penerapan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh materi matematika dengan hafalan Al-Qur'an</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya menilai siswa lewat ujian tertulis di akhir semester, tanpa pernah mengamati keseharian siswa di kelas atau melihat perkembangan karya mereka dari waktu ke waktu. Berdasarkan komponen evaluasi dan asesmen pada Bab 2, apa yang paling perlu ditambahkan sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melengkapi tes tertulis dengan observasi, portofolio, dan penilaian otentik agar gambaran perkembangan siswa lebih menyeluruh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh ujian tertulis dan menggantinya dengan wawancara semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah soal pilihan ganda pada ujian akhir semester</button>
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
<h2 class="reveal">Langkah-Langkah Penyusunan Kurikulum</h2>
<p class="lede reveal">Menyusun kurikulum bukan pekerjaan satu langkah, melainkan rangkaian enam tahap yang saling mengunci — mulai dari memahami kebutuhan nyata di lapangan hingga merencanakan cara mengevaluasinya kelak.</p>

<div class="card reveal">
  <h4>A. Analisis Kebutuhan Sekolah dan Siswa</h4>
  <p>Langkah pertama adalah memastikan kurikulum yang disusun sesuai dengan kondisi nyata sekolah serta kebutuhan dan karakteristik siswa. <strong>Mengidentifikasi kebutuhan siswa</strong> berarti memahami latar belakang (status sosial ekonomi, keluarga, budaya, bahasa), minat (sains, seni, olahraga, dan lainnya), serta kemampuan siswa — sehingga sekolah bisa menyediakan program remedial bagi yang membutuhkan bimbingan tambahan, atau program akselerasi bagi yang lebih cepat belajar. <strong>Mengidentifikasi kebutuhan sekolah</strong> mencakup visi-misi sekolah (apakah menekankan karakter atau keunggulan akademik), sumber daya yang tersedia (guru, fasilitas, bahan ajar), serta kualifikasi dan bidang keahlian guru yang dimiliki.</p>
  <p>Kurikulum juga tidak bisa lepas dari <strong>konteks lokal</strong> — budaya setempat (misalnya daerah dengan tradisi gotong royong dapat menekankan proyek kelompok), lingkungan fisik dan alam (sekolah di pedesaan bisa menjadikan alam sekitar sebagai laboratorium), serta kondisi sosial ekonomi komunitas (daerah dengan tingkat pengangguran tinggi bisa memasukkan pelatihan keterampilan praktis yang relevan dengan pasar kerja setempat).</p>

  <h4>B. Penyusunan Visi dan Misi Sekolah</h4>
  <p>Visi dan misi menjadi panduan utama yang menentukan arah dan tujuan sekolah dalam jangka panjang. <strong>Visi</strong> adalah gambaran ideal masa depan yang menginspirasi seluruh elemen sekolah, dengan ciri inspiratif, berorientasi masa depan, ringkas-jelas, dan relevan dengan nilai-nilai sekolah — misalnya "Menjadi sekolah unggul dalam ilmu pengetahuan dan pembentukan karakter Islami." <strong>Misi</strong> adalah langkah-langkah konkret mewujudkan visi tersebut, yang harus spesifik-terukur, realistis-berorientasi aksi, konsisten dengan visi, dan berorientasi pada kualitas — misalnya "Menyelenggarakan pendidikan yang mengintegrasikan ilmu pengetahuan dengan nilai-nilai Islam."</p>
  <p>Penyusunan visi-misi idealnya melibatkan seluruh pemangku kepentingan lewat empat langkah: mengevaluasi kondisi sekolah saat ini (keunggulan dan tantangan), berdiskusi bersama guru-siswa-orang tua-masyarakat, merumuskan visi yang jelas dan menginspirasi, lalu menerjemahkannya menjadi misi berupa tindakan nyata — dan semua ini ditinjau ulang secara berkala agar tetap relevan dengan perkembangan zaman. Setelah dirumuskan, visi-misi harus benar-benar tercermin dalam kurikulum: jika visi sekolah adalah lulusan berakhlak mulia, maka pendidikan karakter harus terintegrasi di setiap mata pelajaran dan kegiatan, bukan hanya tertulis di dokumen.</p>

  <h4>C. Penentuan Tujuan Pendidikan</h4>
  <p>Tujuan pendidikan yang baik memenuhi kriteria <strong>SMART</strong>: spesifik dan terfokus, terukur keberhasilannya, dapat dicapai secara realistis, relevan dengan kebutuhan siswa dan visi sekolah, serta memiliki batas waktu yang jelas. Di sekolah berbasis nilai Islam, tujuan pendidikan biasanya dibagi ke empat kategori: <strong>tujuan akademik</strong> (misalnya "siswa mampu menguasai konsep dasar matematika tingkat dasar"), <strong>tujuan spiritual</strong> ("siswa dapat membaca Al-Qur'an dengan tajwid yang benar"), <strong>tujuan moral</strong> ("siswa menunjukkan perilaku jujur dan bertanggung jawab"), dan <strong>tujuan sosial</strong> ("siswa mampu bekerja sama dalam kelompok dan menghargai perbedaan pendapat").</p>
  <p>Proses menetapkan tujuan ini melibatkan analisis kebutuhan siswa-sekolah, konsultasi dengan orang tua dan pemangku kepentingan lain, penyesuaian dengan standar pendidikan nasional sekaligus nilai-nilai Islam, serta evaluasi berkala agar tujuan tetap relevan. Tujuan yang telah ditetapkan selanjutnya diintegrasikan ke setiap mata pelajaran dan aktivitas sekolah — tujuan akademik lewat pembelajaran di kelas, tujuan spiritual-moral lewat pelajaran agama dan pembiasaan perilaku islami sehari-hari.</p>

  <h4>D. Pemilihan dan Penyusunan Materi Pembelajaran</h4>
  <p>Pemilihan materi mempertimbangkan empat hal: relevansi dengan tujuan pendidikan yang telah ditetapkan, kesesuaian dengan tingkat usia dan kemampuan siswa, konteks dan relevansi dengan kehidupan nyata, serta variasi topik yang mencerminkan beragam bidang ilmu. Setelah dipilih, materi disusun secara bertahap dari yang sederhana ke kompleks, dituangkan dalam <strong>silabus</strong> yang memuat mata pelajaran, topik per minggu, tujuan pembelajaran, dan kegiatan belajar-mengajarnya, serta disesuaikan dengan kalender pendidikan agar tidak ada topik yang tertinggal.</p>
  <p><strong>Integrasi nilai Islam</strong> dalam materi dilakukan lewat empat cara: mengaitkan ilmu dengan ciptaan Allah (misalnya kesempurnaan sistem pernapasan manusia saat belajar biologi), menyisipkan kisah-kisah Islami yang relevan dengan topik pembelajaran, menanamkan nilai akhlak seperti kejujuran dan kesabaran di setiap topik, serta membiasakan kegiatan islami seperti berdoa sebelum dan sesudah belajar. Sumber belajar yang dipilih pun harus selaras dengan kurikulum, sesuai usia siswa, memanfaatkan sumber digital yang tepat, dan tidak mengandung konten yang bertentangan dengan ajaran Islam.</p>

  <h4>E. Pemilihan Metode Pengajaran yang Sesuai</h4>
  <p>Karena setiap siswa memiliki gaya belajar berbeda, metode pengajaran perlu bervariasi. <strong>Ceramah dan diskusi</strong> cocok untuk konsep dasar dan materi keagamaan yang kemudian diperdalam lewat dialog. <strong>Praktikum dan eksperimen</strong> memperkuat pemahaman teori sains lewat pengalaman nyata. <strong>Pembelajaran berbasis proyek</strong> mengajak siswa menerapkan konsep dalam produk nyata sambil mengasah kerja tim dan manajemen waktu. <strong>Teknologi dalam pembelajaran</strong> — kelas daring, video interaktif, kuis digital — mengakomodasi berbagai gaya belajar dan memperluas akses. <strong>Pembelajaran kolaboratif</strong> melatih kerja sama dan berbagi perspektif, sementara <strong>pendekatan kontekstual</strong> mengaitkan materi dengan pengalaman keseharian siswa agar pembelajaran terasa lebih bermakna.</p>

  <h4>F. Perencanaan Evaluasi dan Asesmen</h4>
  <p>Perencanaan evaluasi memastikan sekolah bisa mengukur pencapaian tujuan pendidikan sekaligus menentukan area yang perlu diperbaiki. Selain tes tertulis-lisan dan observasi seperti dibahas di Bab 2, perencanaan ini juga mencakup <strong>portofolio</strong> sebagai bukti perkembangan siswa dari waktu ke waktu, <strong>penilaian proyek</strong> yang mengukur penerapan pengetahuan dalam tugas berbasis masalah, serta <strong>evaluasi diri dan teman sebaya</strong> yang mendorong siswa merefleksikan pencapaian dan tantangan mereka sendiri. Merencanakan sejak awal kombinasi metode evaluasi ini — bukan menambalnya belakangan — memastikan kurikulum sungguh-sungguh bisa dipantau efektivitasnya sejak hari pertama diterapkan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Coba telusuri kembali dokumen visi-misi sekolah Anda: apakah setiap poin di dalamnya benar-benar SMART (spesifik, terukur, dapat dicapai, relevan, berbatas waktu), atau masih berupa kalimat indah yang sulit diterjemahkan menjadi langkah nyata di kelas?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Apa kepanjangan dari kriteria SMART dalam menentukan tujuan pendidikan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Specific, Measurable, Achievable, Relevant, Time-bound</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Simple, Modern, Academic, Religious, Traditional</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Strategic, Motivational, Adaptive, Reflective, Technical</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru berdiri di daerah dengan tradisi gotong royong yang kuat dan sebagian besar orang tua bekerja sebagai petani. Berdasarkan langkah analisis kebutuhan pada Bab 3, unsur konteks lokal manakah yang paling relevan dipertimbangkan dalam menyusun kurikulumnya?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Budaya lokal (gotong royong bisa ditekankan lewat proyek kelompok) dan kondisi sosial ekonomi komunitas sekitar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum internasional yang sama sekali tidak mempertimbangkan kondisi masyarakat setempat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Jumlah gedung sekolah lain yang berdiri di kota besar terdekat</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah tim penyusun kurikulum merumuskan visi "Menjadi sekolah terbaik" tanpa penjelasan lebih lanjut, lalu langsung menyusun materi pelajaran tanpa merumuskan misi maupun tujuan pendidikan yang terukur. Berdasarkan Bab 3, apa risiko utama dari langkah yang terlewat ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Visi yang tidak diterjemahkan menjadi misi dan tujuan SMART akan sulit diukur keberhasilannya dan sulit diterjemahkan menjadi langkah konkret di kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko apa pun karena visi yang singkat sudah cukup untuk menyusun seluruh kurikulum</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal keindahan bahasa, tidak berpengaruh pada pembelajaran di kelas</button>
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
<h2 class="reveal">Implementasi Kurikulum</h2>
<p class="lede reveal">Kurikulum sebaik apa pun di atas kertas hanya akan bermakna jika benar-benar hidup di dalam kelas — dan itu menuntut strategi implementasi yang terstruktur, perangkat pembelajaran yang matang, guru yang siap, serta monitoring yang tak pernah putus.</p>

<div class="card reveal">
  <h4>A. Strategi Implementasi Kurikulum</h4>
  <p><strong>Sosialisasi kurikulum</strong> adalah langkah pertama untuk memastikan semua pihak memahami tujuan, isi, dan metode kurikulum baru — lewat pertemuan sekolah dengan guru dan orang tua, workshop atau pelatihan guru tentang metode dan alat evaluasi baru, serta presentasi kepada siswa agar mereka siap secara mental menghadapi perubahan. <strong>Penyusunan jadwal pelajaran</strong> harus proporsional sesuai tingkat kesulitan tiap mata pelajaran, mengatur rotasi berdasarkan kebutuhan konsentrasi siswa (pelajaran berat dijadwalkan saat energi siswa maksimal), serta mengintegrasikan kegiatan tambahan seperti ekstrakurikuler dan waktu ibadah.</p>
  <p><strong>Pembagian tugas guru</strong> harus memperhatikan keahlian dan pengalaman masing-masing, kemampuan mengintegrasikan nilai-nilai Islam ke mata pelajaran yang diampu, serta rotasi beban kerja agar guru tidak jenuh dan tetap termotivasi. <strong>Fasilitas dan sumber daya</strong> — buku teks dan bahan ajar yang sesuai kurikulum baru, alat peraga untuk pembelajaran interaktif, perangkat teknologi seperti komputer dan internet, serta lingkungan fisik yang mendukung termasuk perpustakaan, laboratorium, dan ruang ibadah — harus dipastikan tersedia sebelum kurikulum benar-benar dijalankan.</p>

  <h4>B. Pengembangan Perangkat Pembelajaran</h4>
  <p><strong>Rencana Pelaksanaan Pembelajaran (RPP)</strong> memuat tujuan pembelajaran yang jelas dan terukur, materi yang akan diajarkan, metode pengajaran yang dipilih, langkah-langkah pembelajaran dari pendahuluan hingga penutup, serta rencana penilaian untuk mengukur pemahaman siswa. <strong>Bahan ajar</strong> dapat berupa buku teks, modul pembelajaran mandiri, Lembar Kerja Siswa (LKS), maupun materi tambahan seperti artikel dan video yang memperkaya pembelajaran.</p>
  <p><strong>Media pembelajaran</strong> — proyektor dan slide presentasi, video edukasi, aplikasi pembelajaran seperti Kahoot atau Google Classroom, hingga alat peraga fisik — membantu menyederhanakan konsep yang rumit. <strong>Penilaian dan evaluasi</strong> sebagai bagian dari perangkat pembelajaran mencakup tes tertulis-lisan, kuis cepat untuk mengecek pemahaman secara informal, portofolio, serta rubrik penilaian yang memberi panduan kriteria yang jelas dan objektif kepada siswa.</p>

  <h4>C. Pelatihan dan Pengembangan Guru</h4>
  <p><strong>Pelatihan kurikulum</strong> memperkenalkan visi-misi kurikulum baru, melatih penguasaan materi, dan mengajarkan metode pengajaran yang sesuai — misalnya cara menerapkan pembelajaran berbasis proyek jika itu yang diarahkan kurikulum. <strong>Pengembangan profesional</strong> berjalan berkelanjutan lewat workshop dan seminar, kursus dan sertifikasi (termasuk sertifikasi pendidikan karakter berbasis nilai Islam), serta Penelitian Tindakan Kelas (PTK) yang mendorong guru merefleksikan dan memperbaiki praktik mengajarnya sendiri.</p>
  <p><strong>Pembinaan dan pendampingan</strong> dilakukan lewat observasi kelas yang memberi umpan balik konstruktif (bukan menghakimi), coaching personal yang kolaboratif, serta bimbingan teknis (bimtek) untuk penggunaan teknologi dan perangkat evaluasi. <strong>Komunitas pembelajaran guru</strong> — Kelompok Kerja Guru (KKG), pertemuan rutin, maupun diskusi daring lewat WhatsApp atau forum pendidikan — menjadi wadah berbagi pengalaman, tantangan, dan solusi antar guru tanpa dibatasi waktu dan tempat.</p>

  <h4>D. Monitoring dan Evaluasi Implementasi Kurikulum</h4>
  <p><strong>Observasi kelas</strong> oleh kepala sekolah atau supervisor mengamati kesesuaian materi dengan RPP, ketepatan metode pengajaran, tingkat keterlibatan siswa, dan kemampuan guru mengelola kelas. <strong>Penilaian berkala</strong> lewat tes-kuis, penilaian proyek, dan penilaian keterampilan mengukur pemahaman siswa secara teratur, bukan hanya di ujian akhir. <strong>Umpan balik dari guru dan siswa</strong> dikumpulkan lewat kuesioner, wawancara, maupun diskusi kelompok terfokus untuk memahami bagaimana kurikulum benar-benar berjalan di praktik lapangan.</p>
  <p><strong>Evaluasi program</strong> menyeluruh menganalisis hasil belajar, proses pembelajaran, dan kinerja guru pada akhir semester atau tahun ajaran. Berdasarkan temuan tersebut, sekolah mengambil <strong>tindakan perbaikan</strong>: merevisi kurikulum jika ada bagian yang tidak efektif, memberi pelatihan ulang bagi guru yang kesulitan menerapkan kurikulum, menyesuaikan jadwal yang terlalu padat, atau menyediakan sumber daya tambahan yang selama ini masih kurang. Siklus sosialisasi-implementasi-monitoring-perbaikan inilah yang membuat sebuah kurikulum terus hidup dan relevan, bukan sekadar dokumen yang sekali dibuat lalu dibiarkan tanpa perbaikan bertahun-tahun.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari empat tahap implementasi kurikulum di Bab 4 (strategi implementasi, perangkat pembelajaran, pelatihan guru, monitoring-evaluasi), tahap mana yang selama ini paling sering "dilompati" di sekolah Anda karena keterbatasan waktu atau sumber daya — dan apa dampaknya yang paling terasa di kelas?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Apa fungsi utama RPP (Rencana Pelaksanaan Pembelajaran) menurut Bab 4?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjadi panduan terperinci bagi guru dalam mengelola setiap sesi pembelajaran secara sistematis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menjadi laporan keuangan tahunan sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan seluruh fungsi silabus dan kalender pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru saja meluncurkan kurikulum baru dan sudah mengadakan sosialisasi ke guru serta orang tua, tetapi belum pernah mengamati langsung bagaimana guru benar-benar mengajar di kelas maupun mengumpulkan umpan balik dari siswa. Berdasarkan Bab 4, tahap mana yang masih tertinggal dan perlu segera dijalankan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Monitoring dan evaluasi implementasi kurikulum, melalui observasi kelas dan pengumpulan umpan balik dari guru serta siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sosialisasi ulang kurikulum kepada orang tua dengan materi yang sama persis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Penggantian seluruh guru dengan guru baru yang belum terlatih</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah melakukan observasi kelas dan mendapati beberapa guru kesulitan menerapkan metode pembelajaran berbasis proyek yang diminta kurikulum baru. Berdasarkan tahapan pada Bab 4, urutan tindak lanjut apa yang paling tepat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberikan pelatihan ulang atau pendampingan (coaching) khusus tentang pembelajaran berbasis proyek bagi guru yang membutuhkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung mengganti kurikulum baru dengan kurikulum lama tanpa melatih guru terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena dianggap guru akan belajar sendiri seiring waktu tanpa pendampingan</button>
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
<h2 class="reveal">Pengembangan Kurikulum</h2>
<p class="lede reveal">Kurikulum yang sudah berjalan bukan berarti selesai — ia perlu terus dievaluasi, diperkaya dengan pendekatan berbasis kompetensi, dijaga tetap inovatif, dan disesuaikan agar terus responsif terhadap perubahan zaman.</p>

<div class="card reveal">
  <h4>A. Evaluasi dan Revisi Kurikulum</h4>
  <p>Evaluasi kurikulum dimulai dari <strong>mengumpulkan data</strong>: hasil belajar siswa, umpan balik guru tentang kesulitan mengajarkan materi, umpan balik siswa tentang materi yang sulit dipahami, serta umpan balik orang tua tentang perkembangan anak di rumah. Data ini kemudian <strong>dianalisis</strong> untuk melihat efektivitas pembelajaran, kesesuaian materi dengan kebutuhan zaman, efektivitas metode pengajaran, dan kecukupan alokasi waktu tiap mata pelajaran.</p>
  <p>Hasil analisis dibawa ke <strong>rapat evaluasi</strong> bersama kepala sekolah, guru, dan staf akademik untuk membahas temuan utama, mendiskusikan area perbaikan, dan mengambil keputusan bersama. Berdasarkan keputusan itu, dilakukan <strong>revisi kurikulum</strong> — menambah materi baru yang relevan, mengurangi materi yang sudah tidak relevan, mengubah metode pengajaran yang kurang efektif, atau menyesuaikan alokasi waktu. Revisi ini kemudian diimplementasikan lewat sosialisasi kurikulum baru, pelatihan guru, pengadaan sumber daya tambahan, dan monitoring berkelanjutan agar perubahan benar-benar meningkatkan kualitas pembelajaran.</p>

  <h4>B. Pengembangan Kurikulum Berbasis Kompetensi</h4>
  <p>Kurikulum Berbasis Kompetensi (KBK) berfokus memastikan siswa menguasai tiga komponen: <strong>pengetahuan</strong> (konsep dasar mata pelajaran), <strong>keterampilan</strong> (kemampuan menerapkan pengetahuan dalam situasi nyata, misalnya melakukan eksperimen), dan <strong>sikap</strong> (tanggung jawab, kejujuran, kemampuan beradaptasi, dan berpikir kritis). Setelah kompetensi diidentifikasi, kurikulum dirancang dengan materi yang relevan langsung dengan kompetensi tersebut, metode pengajaran yang mendorong partisipasi aktif seperti diskusi kelompok dan studi kasus, serta evaluasi berbasis kompetensi yang menilai penerapan nyata, bukan sekadar hafalan teori.</p>
  <p>Pendekatan utama KBK adalah <strong>pembelajaran berbasis proyek (PBL)</strong>, yang menantang siswa menyelesaikan masalah nyata sambil mengembangkan kompetensi akademik maupun non-akademik seperti kerja tim dan manajemen waktu. Penilaiannya menggunakan <strong>penilaian autentik</strong> — presentasi hasil proyek, portofolio perkembangan siswa, penilaian kinerja saat melakukan eksperimen, dan penilaian reflektif atas proses belajar yang telah dilalui siswa.</p>

  <h4>C. Inovasi dan Kreativitas dalam Pengembangan Kurikulum</h4>
  <p><strong>Pendekatan interdisipliner</strong> menggabungkan berbagai disiplin ilmu dalam satu topik pembelajaran — misalnya isu perubahan iklim dipelajari sekaligus dari sudut sains, geografi, dan ekonomi — sehingga siswa memahami bahwa masalah dunia nyata jarang bisa diselesaikan dari satu sudut pandang saja. <strong>Pemanfaatan teknologi</strong> — e-learning, aplikasi dan alat digital, video-multimedia, hingga Augmented Reality/Virtual Reality — membuat kurikulum lebih interaktif dan fleksibel, misalnya siswa "mengunjungi" museum dunia maya untuk mempelajari peradaban Islam.</p>
  <p><strong>Pembelajaran berbasis proyek</strong> kembali ditegaskan sebagai pendekatan inovatif karena mengembangkan beragam keterampilan sekaligus, membuat pembelajaran terasa lebih bermakna karena terkait dunia nyata. <strong>Kegiatan ekstrakurikuler</strong> — klub sains dan teknologi, debat dan public speaking, kegiatan sosial-lingkungan, kesenian dan olahraga — melengkapi kurikulum formal dengan ruang pengembangan minat, bakat, dan karakter di luar jam pelajaran.</p>

  <h4>D. Pengembangan Kurikulum yang Responsif terhadap Perkembangan Zaman</h4>
  <p>Agar tetap relevan, penyusun kurikulum perlu terus <strong>memantau perkembangan</strong> lewat literatur terbaru, seminar-workshop, dan jaringan profesional. Kurikulum perlu bersifat <strong>dinamis</strong> — disusun dalam modul atau unit yang fleksibel dan mudah diperbarui, serta berbasis kompetensi inti seperti literasi digital dan kemampuan beradaptasi yang tidak mudah using dimakan zaman.</p>
  <p><strong>Peningkatan keterampilan teknologi</strong> — literasi digital, penggunaan platform e-learning, hingga pengenalan coding — mempersiapkan siswa untuk dunia kerja masa depan yang semakin berbasis teknologi. <strong>Pengembangan soft skills</strong> seperti kerja sama tim, komunikasi, dan kreativitas menjadi kebutuhan mendesak di era industri 4.0. Terakhir, <strong>kolaborasi dengan dunia industri</strong> — program magang, penyusunan kurikulum berbasis kebutuhan industri, serta guest lecture dari praktisi — memastikan keterampilan yang diajarkan di sekolah benar-benar relevan dengan tuntutan dunia kerja nyata, tanpa kehilangan landasan nilai-nilai Islam yang menjadi ciri khas sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Kapan terakhir kali kurikulum di sekolah Anda benar-benar direvisi berdasarkan data (bukan sekadar asumsi atau kebiasaan lama)? Apa satu langkah kecil yang bisa mulai dijalankan bulan ini untuk mengumpulkan umpan balik siswa, guru, dan orang tua secara lebih sistematis?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Tiga komponen utama yang diidentifikasi dalam Kurikulum Berbasis Kompetensi (KBK) adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pengetahuan, keterampilan, dan sikap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Biaya, waktu, dan lokasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Guru, siswa, dan orang tua saja tanpa aspek lain</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin siswanya memahami isu perubahan iklim secara utuh, tidak hanya dari sisi sains semata. Pendekatan pengembangan kurikulum manakah yang paling sesuai diterapkan menurut Bab 5?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pendekatan interdisipliner, menggabungkan sains, geografi, dan ekonomi dalam satu topik pembelajaran</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya menambah jam pelajaran sains tanpa melibatkan mata pelajaran lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus topik tersebut karena dianggap terlalu kompleks untuk siswa</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menyadari lulusannya kesulitan beradaptasi dengan tuntutan dunia kerja yang semakin berbasis teknologi, meski nilai akademik mereka baik. Berdasarkan Bab 5, kombinasi langkah apa yang paling tepat diambil sekolah untuk menjawab hal ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memperkuat keterampilan teknologi dan soft skills siswa, serta menjalin kolaborasi dengan dunia industri lewat magang atau guest lecture</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghapus seluruh pelajaran agama agar waktu belajar teknologi bertambah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan kurikulum tetap sama karena nilai akademik siswa sudah dianggap cukup baik</button>
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
<h2 class="reveal">Tantangan dan Solusi</h2>
<p class="lede reveal">Menyusun dan mengembangkan kurikulum sekolah Islam tidak pernah lepas dari hambatan nyata — tetapi setiap tantangan yang dibahas di bab ini memiliki solusi praktis yang sudah terbukti dijalankan sekolah-sekolah lain.</p>

<div class="card reveal">
  <h4>A. Tantangan dalam Menyusun dan Mengembangkan Kurikulum</h4>
  <p>Ada lima tantangan yang paling sering dihadapi. <strong>Keterbatasan sumber daya</strong> — banyak sekolah Islam menghadapi kendala sumber daya manusia, finansial, dan fasilitas, dengan guru yang kurang mendapat pelatihan memadai. <strong>Integrasi nilai-nilai Islam</strong> menjadi tantangan tersendiri karena menyelaraskan materi akademik dengan nilai Islam membutuhkan pendekatan khusus agar kualitas salah satunya tidak berkurang. <strong>Variasi kurikulum</strong> muncul karena beragamnya pandangan dan interpretasi dalam Islam, membuat standarisasi kurikulum menjadi sulit.</p>
  <p><strong>Resistensi terhadap perubahan</strong> terjadi karena sebagian guru dan pihak sekolah merasa nyaman dengan metode lama dan enggan berinovasi. <strong>Pengaruh eksternal</strong> berupa tekanan dari pemerintah atau masyarakat yang mengharapkan standar atau perubahan tertentu turut menambah kompleksitas dalam mengembangkan kurikulum yang sekaligus harus mematuhi regulasi, menjaga ciri khas keislaman, dan tetap relevan bagi siswa.</p>

  <h4>B. Solusi Praktis untuk Mengatasi Tantangan Tersebut</h4>
  <p>Terhadap keterbatasan sumber daya, sekolah bisa melakukan <strong>optimalisasi sumber daya</strong> — memanfaatkan teknologi seperti bahan ajar daring dan pelatihan guru lewat webinar, serta mengajukan kerja sama dengan pihak swasta atau pemerintah untuk dana tambahan. Terhadap kualitas guru, <strong>pelatihan dan pengembangan guru</strong> secara rutin tentang metode inovatif dan integrasi nilai Islam, dilengkapi komunitas guru untuk berbagi strategi pengajaran efektif, menjadi kunci penting.</p>
  <p>Untuk tantangan integrasi nilai Islam, <strong>pendekatan holistik</strong> diterapkan lewat penyusunan silabus yang menggabungkan pengetahuan akademik dengan ajaran Islam secara menyeluruh (misalnya menyisipkan ayat Al-Qur'an yang relevan saat mengajarkan sains), didukung workshop bersama ahli agama dan pendidik. Untuk resistensi perubahan, <strong>manajemen perubahan</strong> yang baik mengomunikasikan manfaat perubahan kepada semua pihak dan melibatkan guru-staf dalam proses pengembangan kurikulum agar tumbuh rasa memiliki. Terhadap pengaruh eksternal, <strong>dialog dengan pihak eksternal</strong> membangun pemahaman bersama tentang ekspektasi masing-masing sekaligus kemitraan yang mendukung pengembangan kurikulum jangka panjang.</p>

  <h4>C. Rekomendasi untuk Pengembangan Kurikulum yang Berkelanjutan</h4>
  <p>Ada enam rekomendasi agar kurikulum terus relevan dari tahun ke tahun. Pertama, <strong>evaluasi berkala</strong> yang rutin mengumpulkan umpan balik dari siswa, guru, dan orang tua. Kedua, <strong>adaptasi terhadap perkembangan zaman</strong> dengan mengikuti tren pendidikan global serta memasukkan literasi digital dan keterampilan abad ke-21. Ketiga, <strong>kolaborasi dan kemitraan</strong> dengan lembaga pendidikan tinggi, organisasi keagamaan, dan industri untuk memperkaya pengalaman belajar siswa.</p>
  <p>Keempat, <strong>pengembangan profesional berkelanjutan bagi guru</strong> lewat pelatihan lanjutan yang tidak berhenti di satu kali sesi saja. Kelima, <strong>penggunaan teknologi</strong> yang konsisten dalam pembelajaran maupun administrasi kurikulum. Keenam, <strong>fleksibilitas kurikulum</strong> yang dirancang dalam modul atau unit yang bisa diadaptasi mengikuti kebutuhan siswa dan perubahan lingkungan. Keenam rekomendasi ini pada dasarnya adalah versi jangka-panjang dari solusi-solusi praktis di atas — bukan tindakan sekali jalan, melainkan kebiasaan yang perlu terus dirawat oleh seluruh warga sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari lima tantangan yang dibahas di Bab 6 (sumber daya, integrasi nilai Islam, variasi kurikulum, resistensi perubahan, pengaruh eksternal), mana yang paling terasa nyata di sekolah Anda saat ini, dan solusi praktis mana dari bab ini yang paling mungkin mulai dijalankan dalam waktu dekat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 6, apa penyebab utama munculnya tantangan "variasi kurikulum" di sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Beragamnya pandangan dan interpretasi dalam Islam yang membuat standarisasi kurikulum menjadi sulit</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurangnya jumlah siswa yang mendaftar setiap tahunnya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Terlalu banyak hari libur nasional dalam kalender pendidikan</button>
  </div>
  <div class="quiz-q">
    <p>Sejumlah guru senior di sebuah sekolah menolak menerapkan metode pengajaran baru karena merasa metode lama sudah cukup nyaman digunakan selama bertahun-tahun. Berdasarkan Bab 6, solusi apa yang paling tepat mengatasi resistensi ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Manajemen perubahan yang mengomunikasikan manfaat perubahan secara jelas dan melibatkan guru dalam proses pengembangan kurikulum</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh guru senior dengan guru baru tanpa penjelasan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membatalkan seluruh rencana perubahan kurikulum tanpa didiskusikan lebih lanjut</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam di daerah dengan sumber daya finansial terbatas ingin tetap meningkatkan kualitas kurikulumnya tanpa dana besar. Berdasarkan solusi optimalisasi sumber daya pada Bab 6, langkah apa yang paling realistis dijalankan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memanfaatkan bahan ajar daring dan pelatihan guru melalui webinar, serta mengajukan kerja sama dengan pihak swasta atau pemerintah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menunda seluruh pengembangan kurikulum sampai dana besar tersedia</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meniru kurikulum sekolah lain tanpa penyesuaian sama sekali dengan kondisi sekolah sendiri</button>
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
<h2 class="reveal">Kurikulum Sekolah Islam</h2>
<p class="lede reveal">Sekolah Islam pada dasarnya meracik dua atau tiga lapis kurikulum sekaligus — nasional, keislaman, dan keunggulan — dan memahami bagaimana meraciknya dengan proporsi yang tepat menjadi kunci agar sekolah tidak kehilangan arah maupun identitas.</p>

<div class="card reveal">
  <h4>A. Kebutuhan Dua Kurikulum: Nasional dan Keislaman</h4>
  <p>Kurikulum di sekolah Islam idealnya terdiri dari dua bagian. <strong>Kurikulum Nasional</strong> disusun pemerintah dan wajib diimplementasikan semua sekolah di Indonesia, mencakup mata pelajaran umum seperti Bahasa Indonesia, Matematika, Sains, dan Ilmu Sosial. <strong>Kurikulum Keislaman</strong> disusun sekolah sendiri untuk memperdalam pemahaman peserta didik tentang agama Islam, mencakup Al-Qur'an, Hadits, Aqidah, Fiqh, dan Bahasa Arab. Hingga saat ini, ada dua kurikulum nasional yang dominan: Kurikulum 2013 Revisi yang menekankan pengembangan karakter dan berpikir kritis, serta Kurikulum Merdeka yang memberi fleksibilitas lebih besar bagi sekolah menyesuaikan pembelajaran dengan konteks wilayahnya masing-masing.</p>

  <h4>B. Merancang Kurikulum Keislaman yang Tepat</h4>
  <p>Kurikulum Keislaman harus dirancang cermat agar sesuai visi, misi, dan manhaj keislaman sekolah. Empat poin pentingnya: memilih sumber belajar yang terpercaya dari ulama yang kredibel, menyesuaikan materi dengan jenjang usia peserta didik, melibatkan berbagai metode pembelajaran yang menarik dan interaktif, serta mengintegrasikan nilai-nilai Islam seperti kejujuran, tanggung jawab, dan kerja sama ke semua aspek pendidikan lewat berbagai kegiatan sekolah — bukan hanya di jam pelajaran agama.</p>

  <h4>C. Ragam Kurikulum di Sekolah Islam</h4>
  <p>Selain dua kurikulum inti di atas, terdapat banyak ragam kurikulum tambahan yang berkembang di sekolah-sekolah Islam Indonesia: <strong>Kurikulum Bilingual</strong> (memadukan bahasa Indonesia dengan bahasa asing), <strong>Kurikulum Adiwiyata</strong> (pendidikan lingkungan), <strong>Kurikulum Qur'an</strong> (metode Ummi, Wiraati, Tilawati, Al Baghdadi, Iqra), <strong>Kurikulum Karakter</strong>, <strong>Kurikulum Olimpiade</strong>, <strong>Kurikulum Cambridge dan IB</strong> (kurikulum internasional), <strong>Kurikulum Al Azhar Kairo</strong> (fokus studi Islam klasik), serta <strong>Kurikulum Anti Korupsi</strong>. Ada pula kurikulum yang dikembangkan organisasi Islam besar: <strong>Kurikulum JSIT</strong> (Jaringan Sekolah Islam Terpadu), <strong>Kurikulum Ma'arif</strong> (di bawah Nahdlatul Ulama), <strong>Kurikulum Kemuhammadiyahan</strong>, serta <strong>Kurikulum Benchmark</strong> yang mengacu pada sekolah-sekolah Islam ternama seperti Pesantren Gontor, Al Azhar, dan Al Irsyad.</p>

  <h4>D. Kurikulum Keislaman: Teruji dan Inisiatif</h4>
  <p>Ada dua model besar Kurikulum Keislaman. <strong>Kurikulum Teruji</strong> adalah kurikulum yang sudah terbukti efektivitasnya, seperti kurikulum Kementerian Agama, kurikulum JSIT, kurikulum Ma'arif, dan Kurikulum Kemuhammadiyahan. <strong>Kurikulum Inisiatif</strong> adalah hasil pengembangan sekolah atau lembaga sendiri untuk melengkapi kurikulum yang sudah ada, misalnya program pengembangan PAI berbasis proyek dari Kemendikbud atau kurikulum inisiatif yang disusun sekolah dengan tetap sejalan dengan Kurikulum Nasional dan Keislaman yang ditetapkan. Memilih model yang tepat perlu mempertimbangkan visi-misi sekolah, manhaj keislaman yang dianut, kebutuhan-karakteristik peserta didik, serta ketersediaan sumber daya sekolah.</p>

  <h4>E. Kurikulum Keunggulan: Teruji dan Inisiatif</h4>
  <p>Selain Kurikulum Keislaman, sekolah juga bisa menambahkan satu <strong>Kurikulum Keunggulan</strong> sebagai pembeda dan daya tarik khasnya. Kategori teruji mencakup Kurikulum Al-Qur'an (metode Ummi, Tilawati, Qiroati, dan sejenisnya), Kurikulum Olimpiade, Adiwiyata, Kemenag, Cambridge, IB, Al Azhar Kairo, Anti Korupsi, JSIT, Ma'arif, Kemuhammadiyahan, dan Benchmark. Kategori inisiatif mencakup Kurikulum Tahfizh (menghafal Al-Qur'an secara sistematis), Kurikulum Tahsin (memperbaiki bacaan Al-Qur'an sesuai tajwid), serta Kurikulum Keislaman, Bilingual, Entrepreneur, Leadership, Sekolah Pendidikan Al-Qur'an, dan Karakter.</p>

  <h4>F. Kesimpulan</h4>
  <p>Racikan yang disarankan adalah maksimal tiga kurikulum sekaligus: <strong>Kurikulum Nasional</strong> (Kurikulum 2013 Revisi atau Kurikulum Merdeka) yang harus 100% diikuti karena sekolah tetap berstatus sekolah formal; <strong>Kurikulum Keislaman</strong> yang wajib ada, boleh dipilih dari yang teruji maupun inisiatif; serta satu <strong>Kurikulum Keunggulan</strong> sebagai pembeda, dipilih salah satu di antara Bilingual (Cambridge/IB), Adiwiyata, Al-Qur'an, Karakter, Olimpiade, dan sebagainya. Muatan kurikulum nasional harus tetap dominan di sekolah kita karena itulah yang membuat sekolah tetap berstatus formal, sementara kurikulum tambahan sebaiknya maksimal satu dan diutamakan yang sudah teruji — dengan catatan penting: pastikan setiap kurikulum yang dipilih memiliki rujukan yang jelas, sistem penilaian, dan rapor yang sesuai, agar racikan kurikulum tersebut benar-benar bisa dipertanggungjawabkan, bukan sekadar label promosi.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Jika sekolah Anda harus memilih maksimal satu Kurikulum Keunggulan dari daftar di Bab 7 (Bilingual, Adiwiyata, Al-Qur'an, Karakter, Olimpiade, dan sebagainya), mana yang paling sesuai dengan kekuatan sumber daya dan identitas sekolah saat ini — dan mengapa?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut Bab 7, dua kurikulum apa yang idealnya wajib dimiliki sekolah Islam?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurikulum Nasional dan Kurikulum Keislaman</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum Olimpiade dan Kurikulum Bilingual saja</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurikulum Anti Korupsi dan Kurikulum Adiwiyata saja</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah Islam ingin menambahkan kurikulum keunggulan agar punya daya tarik pembeda, tetapi bingung memilih di antara Cambridge, Tahfizh, dan Adiwiyata sekaligus tanpa mempertimbangkan sumber dayanya. Berdasarkan Bab 7, apa saran paling tepat?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memilih maksimal satu kurikulum keunggulan yang paling sesuai dengan visi-misi, manhaj, dan sumber daya sekolah, bukan menerapkan ketiganya sekaligus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menerapkan ketiga kurikulum keunggulan tersebut sekaligus agar sekolah terlihat lebih unggul dari kompetitor</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan seluruh kurikulum keunggulan karena kurikulum nasional saja sudah dianggap cukup</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah menerapkan lima kurikulum sekaligus (nasional, keislaman, bilingual, tahfizh, dan olimpiade) tanpa rujukan penilaian dan rapor yang jelas untuk masing-masing. Berdasarkan kesimpulan Bab 7, apa risiko utama dari praktik ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Racikan kurikulum menjadi tidak terkendali dan sulit dipertanggungjawabkan karena melebihi anjuran maksimal tiga kurikulum dan tidak memiliki rujukan penilaian yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko sama sekali karena semakin banyak kurikulum berarti semakin unggul sekolah tersebut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Risikonya hanya soal estetika logo sekolah pada brosur</button>
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
<h2 class="reveal">Kurikulum Nasional — Mengenal Kurikulum Merdeka</h2>
<p class="lede reveal">Kurikulum Merdeka membawa paradigma baru dalam pendidikan Indonesia: dari yang berpusat pada guru dan institusi, menjadi berpusat pada siswa sebagai agen utama dalam meraih ilmu dan mengembangkan potensi dirinya.</p>

<div class="card reveal">
  <h4>A. Konsepsi Kurikulum Merdeka</h4>
  <p>Paradigma baru ini menempatkan siswa — bukan lagi guru, orang tua, atau pihak sekolah — sebagai pusat perhatian, karena setiap siswa adalah individu unik dengan bakat, minat, dan gaya belajar berbeda yang punya rasa ingin tahu serta potensi menjadi agen perubahan. Mewujudkannya menuntut guru berperan sebagai fasilitator dan pembimbing (bukan lagi sumber informasi tunggal), pembelajaran yang berpihak pada kebutuhan siswa, pemberian kemerdekaan belajar, penciptaan pembelajaran yang bermakna, serta pembangunan komunitas belajar yang positif. Hasil yang diharapkan: siswa yang lebih aktif, kreatif, percaya diri, mandiri, mampu belajar sepanjang hayat, dan menjadi agen perubahan positif.</p>
  <p>Gambaran ideal generasi muda ini dirumuskan dalam <strong>Profil Pelajar Pancasila</strong> yang terdiri dari enam dimensi: <em>beriman, bertakwa kepada Tuhan Yang Maha Esa, dan berakhlak mulia</em> (nilai ketuhanan dan moralitas); <em>berkebinekaan global</em> (cinta tanah air sekaligus menghormati kebhinekaan); <em>gotong royong</em> (kerja sama dan saling tolong-menolong); <em>mandiri</em> (bertanggung jawab dan menjadi pembelajar sepanjang hayat); <em>bernalar kritis</em> (berpikir logis, analitis, dan mampu mengambil keputusan tepat); serta <em>kreatif</em> (berani mencoba hal baru dan berpikir out-of-the-box). Mewujudkan keenam dimensi ini membutuhkan penanaman nilai secara konsisten dalam pembelajaran, kesempatan berlatih menerapkannya sehari-hari, lingkungan sekolah yang kondusif, serta pelibatan orang tua dan masyarakat.</p>

  <h4>B. Implementasi Kurikulum Merdeka</h4>
  <p>Implementasi Kurikulum Merdeka ditopang oleh sejumlah perangkat yang saling berkaitan: struktur kurikulum yang mengatur alokasi jam per fase, capaian pembelajaran sebagai acuan kompetensi akhir tiap fase, Alur Tujuan Pembelajaran (ATP) yang menerjemahkan capaian menjadi tahapan yang lebih rinci, modul ajar sebagai perangkat operasional guru di kelas, serta Projek Penguatan Profil Pelajar Pancasila (P5) sebagai wahana penerapan nilai-nilai Profil Pelajar Pancasila lewat proyek lintas mata pelajaran.</p>
  <p><strong>Pembelajaran berdiferensiasi</strong> menjadi ciri khas penting Kurikulum Merdeka, berfokus pada kebutuhan dan karakteristik individu siswa lewat tiga standar minimal: diferensiasi <em>materi</em> (disesuaikan tingkat pemahaman siswa lewat pemetaan kemampuan), diferensiasi <em>metode</em> (disesuaikan gaya belajar visual, auditori, atau kinestetik masing-masing siswa), dan diferensiasi <em>penilaian</em> (variasi tingkat kesulitan soal serta penilaian berkelanjutan untuk memantau kemajuan). Kurikulum ini juga membuka ruang bagi 12 pendekatan pembelajaran yang bisa dipilih guru sesuai kebutuhan siswa — di antaranya pembelajaran kontekstual, pembelajaran kooperatif, metode ilmiah, pembelajaran aktif, hingga pengakuan terhadap kecerdasan majemuk (multiple intelligences) setiap siswa.</p>
  <p>Dalam hal <strong>asesmen</strong>, Kurikulum Merdeka menganut lima prinsip: berpusat pada siswa, berkelanjutan, otentik, beragam, serta adil dan objektif — dituangkan lewat tiga model asesmen (diagnostik di awal, formatif selama proses, sumatif di akhir periode) dan tujuh ragam penilaian (unjuk kerja, sikap, tertulis, proyek, produk, portofolio, dan penilaian diri) yang menyasar tiga ranah sekaligus: pengetahuan, sikap/akhlak, dan keterampilan. Di tingkat nasional, Asesmen Nasional Berbasis Komputer (ANBK) mengukur literasi membaca-menulis dan numerasi matematika-sains, hasilnya dipakai untuk meningkatkan mutu pendidikan, menyusun kebijakan, dan memberi informasi kepada orang tua lewat Rapor Pendidikan. Seluruh proses penilaian ini ditopang administrasi yang rapi — mulai dari kisi-kisi dan bank soal hingga program remedial-enrichment serta Kriteria Ketuntasan Tujuan Pembelajaran (KKTP) — dan pada akhirnya dituangkan dalam Kurikulum Operasional Satuan Pendidikan (KOSP) yang menjadi dokumen resmi penerapan Kurikulum Merdeka di masing-masing sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari enam dimensi Profil Pelajar Pancasila (beriman-bertakwa-berakhlak mulia, berkebinekaan global, gotong royong, mandiri, bernalar kritis, kreatif), dimensi mana yang menurut Anda paling mudah diintegrasikan dengan nilai-nilai keislaman sekolah, dan dimensi mana yang membutuhkan usaha ekstra agar tidak sekadar formalitas?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Ada berapa dimensi utama dalam Profil Pelajar Pancasila menurut Bab 8?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Enam dimensi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tiga dimensi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sepuluh dimensi</button>
  </div>
  <div class="quiz-q">
    <p>Seorang guru mendapati sebagian siswanya lebih mudah memahami materi lewat gambar dan video, sementara sebagian lain lebih mudah lewat diskusi lisan. Berdasarkan konsep pembelajaran berdiferensiasi pada Bab 8, langkah apa yang paling tepat diambil guru tersebut?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyesuaikan metode pengajaran dengan gaya belajar masing-masing siswa (visual, auditori, atau kinestetik) tanpa memaksakan satu metode untuk semua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Memaksa seluruh siswa mengikuti satu metode pengajaran yang sama tanpa pengecualian</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan perbedaan gaya belajar karena dianggap tidak penting dalam Kurikulum Merdeka</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya melakukan penilaian sumatif di akhir semester dan tidak pernah melakukan asesmen diagnostik di awal maupun asesmen formatif selama proses pembelajaran berlangsung. Berdasarkan prinsip asesmen Kurikulum Merdeka di Bab 8, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru kehilangan kesempatan memahami kebutuhan awal siswa dan memberi umpan balik selama proses belajar, sehingga asesmen menjadi kurang berkelanjutan dan kurang otentik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada dampak apa pun karena penilaian sumatif sudah lebih dari cukup untuk mengukur seluruh perkembangan siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah otomatis melanggar hukum karena hanya menerapkan satu model asesmen</button>
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
<h2 class="reveal">Kurikulum Diniah</h2>
<p class="lede reveal">Kurikulum Diniah adalah jantung keislaman sebuah sekolah Islam — memberikan pendidikan agama yang komprehensif meliputi akidah, akhlak, ibadah, muamalah, dan pengetahuan Islam lainnya untuk membentuk siswa Muslim yang beriman, berakhlak mulia, dan berpengetahuan luas.</p>

<div class="card reveal">
  <h4>A. Memahami Kurikulum Diniah</h4>
  <p>Kurikulum Diniah dapat dilihat dari tiga sudut pandang. Pertama, sebagai <strong>pelajaran PAI (Pendidikan Agama Islam)</strong> — mata pelajaran wajib yang di sekolah Islam biasanya jauh lebih komprehensif dibanding PAI di sekolah umum, meliputi Akidah Akhlak (dasar keimanan dan akhlak mulia), Fikih (hukum-hukum Islam dalam kehidupan), SKI/Sejarah Kebudayaan Islam, Qur'an Hadis, serta Bahasa Arab sebagai bahasa Al-Qur'an dan Hadis.</p>
  <p>Kedua, dilihat dari <strong>organisasi/manhaj</strong> yang dianut — beberapa jaringan sekolah menerapkan Kurikulum Diniah dengan ciri khas masing-masing, seperti Jaringan Sekolah Sunah yang berfokus pada sunnah Rasulullah, JSIT yang mengintegrasikan ilmu agama dan umum, Sekolah Ma'arif yang berlandaskan nilai-nilai Nahdlatul Ulama, Sekolah Muhammadiyah yang berlandaskan nilai-nilai Muhammadiyah, dan Sekolah Al Irsyad yang menekankan karakter serta kepemimpinan. Ketiga, dari <strong>visi-misi lembaga</strong> masing-masing sekolah — setiap sekolah Islam memiliki visi unik yang menjadi landasan penyusunan Kurikulum Diniahnya, sehingga meski berangkat dari kerangka PAI yang sama, penekanan dan warna kurikulum tiap sekolah bisa sangat berbeda.</p>

  <h4>B. Materi Keislaman</h4>
  <p>Materi keislaman dalam Kurikulum Diniah terbagi tiga kategori besar. <strong>Al-Qur'an dan Hadis</strong> mencakup pembelajaran membaca Al-Qur'an dengan tartil dan memahami maknanya lewat tafsir; menghafal hadis-hadis sahih dan memahami maknanya (Hadis); menghafal ayat-ayat Al-Qur'an secara sistematis (Tahfizh); serta memperbaiki bacaan Al-Qur'an sesuai tajwid dan makharijul huruf (Tahsin).</p>
  <p><strong>Bahasa Arab</strong> mencakup keindahan bahasa dan gaya bahasa (Balaghah), kemampuan bercakap-cakap (Muhadatsah), struktur kalimat (Nahwu), perubahan bentuk kata (Sharf), teknik penerjemahan (Ta'bir), seni menulis Arab yang benar (Imla), seni kaligrafi (Khat), hingga meteran dan rima puisi Arab (Ilmu 'Arudh). <strong>Keislaman (Diniah)</strong> mencakup dasar-dasar keimanan (Akidah), nilai moral dan etika (Akhlak), hukum-hukum Islam dalam ibadah dan muamalah (Fikih), sejarah perkembangan Islam (Sejarah Kebudayaan Islam), kisah hidup Nabi dan para sahabat (Sirah), metodologi menggali hukum Islam (Ushul Fiqh), metodologi menafsirkan Al-Qur'an (Ushul Tafsir), ilmu tentang benda langit untuk menentukan waktu shalat dan arah kiblat (Ilmu Falak), aturan pembagian warisan (Ilmu Faraid), serta cara memahami dan menafsirkan makna Al-Qur'an secara mendalam (Ilmu Tafsir). Kekayaan materi ini menunjukkan bahwa Kurikulum Diniah bukan sekadar "pelajaran agama" yang sempit, melainkan satu ekosistem keilmuan Islam yang luas dan bisa disesuaikan kedalamannya dengan jenjang serta kapasitas masing-masing sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari sekian banyak cabang materi keislaman di Bab 9 (Al-Qur'an, Hadis, Tahfizh, Tahsin, Bahasa Arab, Akidah, Akhlak, Fikih, Sirah, dan lainnya), cabang mana yang sudah kuat diajarkan di sekolah Anda, dan cabang mana yang masih minim porsi atau bahkan belum tersentuh sama sekali?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Kurikulum Diniah di sekolah Islam biasanya dilihat dari tiga sudut pandang, yaitu...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Pelajaran PAI, organisasi/manhaj yang dianut, dan visi-misi lembaga</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Harga SPP, lokasi sekolah, dan jumlah kelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Warna seragam, nama gedung, dan logo sekolah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memperbaiki kualitas bacaan Al-Qur'an siswanya, khususnya dari sisi ketepatan tajwid dan makharijul huruf, bukan sekadar menambah jumlah hafalan. Materi keislaman manakah yang paling tepat diperkuat menurut Bab 9?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tahsin, karena berfokus pada memperbaiki bacaan Al-Qur'an sesuai tajwid dan makharijul huruf</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ilmu Faraid, karena berkaitan dengan pembagian warisan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Balaghah, karena hanya berkaitan dengan keindahan gaya bahasa Arab</button>
  </div>
  <div class="quiz-q">
    <p>Dua sekolah Islam sama-sama mengajarkan PAI, tetapi Sekolah A menekankan integrasi ilmu agama-umum ala JSIT sedangkan Sekolah B menekankan nilai-nilai Nahdlatul Ulama ala Ma'arif. Berdasarkan Bab 9, apa yang menjelaskan perbedaan penekanan antara keduanya meski sama-sama mengajarkan PAI?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Perbedaan organisasi/manhaj dan visi-misi lembaga yang dianut masing-masing sekolah, meski kerangka PAI-nya serupa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Perbedaan tersebut murni karena lokasi geografis kedua sekolah yang berjauhan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Perbedaan tersebut tidak mungkin terjadi karena PAI seharusnya selalu identik di semua sekolah</button>
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
<h2 class="reveal">Kurikulum Terpadu</h2>
<p class="lede reveal">Jaringan Sekolah Islam Terpadu (JSIT) menjadi salah satu bukti nyata bagaimana ribuan sekolah Islam di Indonesia bisa bersatu dalam satu jaringan, berbagi kurikulum khas yang memadukan ilmu agama dan ilmu umum secara utuh.</p>

<div class="card reveal">
  <h4>A. Jaringan Sekolah Islam Terpadu (JSIT)</h4>
  <p>JSIT Indonesia adalah organisasi Islam di bidang pendidikan yang didirikan pada tahun 2000, dengan visi mewujudkan pendidikan Islam yang berkualitas, terpadu, dan berkemajuan. Jaringannya tersebar di seluruh Indonesia dari tingkat SD hingga SMA. Berdasarkan data per Maret 2024, JSIT memiliki lebih dari 2.652 sekolah anggota yang tersebar di 34 provinsi, dikelola oleh 1.760 Yayasan Pendidikan Islam Terpadu (YPIT) di berbagai daerah — jumlah yang terus bertambah, ditandai pula lebih dari 1.000 sekolah lain yang sedang dalam proses pengajuan menjadi anggota.</p>
  <p>Sebanyak 321 sekolah JSIT bahkan telah ditetapkan sebagai Sekolah Penggerak oleh Kemendikbudristek, program pemerintah untuk meningkatkan kualitas pendidikan nasional. Sekolah-sekolah JSIT dikenal luas karena kualitas pendidikannya yang baik, fokus kuat pada pendidikan karakter, serta keberhasilan mengintegrasikan ilmu agama dengan ilmu umum — sebuah pembuktian bahwa model "sekolah terpadu" bisa berkembang dalam skala besar sekaligus mempertahankan mutu di setiap sekolah anggotanya.</p>

  <h4>B. Kurikulum Bina Pribadi Islami (BPI) di JSIT</h4>
  <p>Kurikulum Bina Pribadi Islami (BPI) adalah salah satu ciri khas utama pendidikan di JSIT, bertujuan menanamkan nilai-nilai keislaman dan karakter mulia pada peserta didik sejak dini. Empat tujuan utamanya: menumbuhkan keimanan dan ketakwaan kepada Allah SWT, membentuk akhlak mulia sesuai tuntunan Islam, mengembangkan kecerdasan intelektual dan emosional, serta mempersiapkan peserta didik menjadi pemimpin masa depan yang berkarakter Islami. Lewat BPI, sekolah-sekolah JSIT memiliki kerangka pembinaan pribadi yang konsisten lintas jenjang, sehingga nilai-nilai yang ditanamkan di jenjang SD dapat terus diperkuat dan dikembangkan hingga jenjang SMA — bukan sekadar program insidental yang berhenti di satu tingkat saja.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Apakah sekolah Anda sudah tergabung dalam jaringan sekolah Islam terpadu seperti JSIT, atau memiliki kerangka pembinaan pribadi Islami yang konsisten lintas jenjang seperti BPI? Jika belum, langkah apa yang paling realistis untuk mulai membangun kerangka serupa secara mandiri?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Berapa jumlah sekolah anggota JSIT per Maret 2024 menurut Bab 10?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Lebih dari 2.652 sekolah di 34 provinsi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Kurang dari 100 sekolah di 5 provinsi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tepat 500 sekolah di seluruh Indonesia</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin menanamkan nilai-nilai keislaman secara konsisten dari jenjang SD hingga SMA, bukan hanya lewat program insidental yang berhenti di satu tingkat. Kerangka kurikulum manakah dari Bab 10 yang paling relevan diadopsi atau dijadikan rujukan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurikulum Bina Pribadi Islami (BPI) ala JSIT, karena dirancang untuk membina karakter dan keimanan peserta didik secara berkelanjutan lintas jenjang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah mata pelajaran umum tanpa kerangka pembinaan karakter yang jelas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengurangi jumlah kegiatan keagamaan agar waktu belajar akademik bertambah</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah kecil yang berdiri sendiri (belum tergabung jaringan mana pun) ingin meningkatkan kredibilitas dan kualitas pendidikannya seperti sekolah-sekolah JSIT. Berdasarkan Bab 10, langkah apa yang paling relevan dipertimbangkan?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Mempertimbangkan bergabung dengan jaringan sekolah terpadu seperti JSIT untuk mendapatkan kerangka kurikulum teruji (seperti BPI) dan dukungan jaringan yang lebih luas</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menutup sekolah karena tidak mungkin bersaing dengan sekolah jaringan besar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Meniru nama JSIT pada plang sekolah tanpa benar-benar bergabung atau menerapkan kurikulumnya</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab10" onclick="markDone('bab10')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab10">✓ Bab 10 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab11: `
<p class="eyebrow reveal">Bab 11</p>
<h2 class="reveal">Kurikulum Karakter</h2>
<p class="lede reveal">Penelitian menunjukkan kecerdasan intelektual hanya berkontribusi sekitar 20% terhadap keberhasilan seseorang — 80% sisanya ditentukan oleh karakter, dan di situlah letak urgensi kurikulum karakter dalam pendidikan Islam.</p>

<div class="card reveal">
  <h4>A. Karakter Sekolah Islam</h4>
  <p>Empat pilar karakter yang menjadi landasan moral utama adalah <strong>Sidik, Amanah, Fathonah, dan Tabligh</strong>. <em>Sidik</em> berarti jujur dan benar — berintegritas dengan diri dan hati, memiliki hati yang bersih, selalu berkata dan bertindak benar, serta bertanggung jawab atas ucapan dan perbuatannya. <em>Amanah</em> berarti terpercaya — peduli dengan masyarakat, selalu dapat dipercaya melaksanakan tugas dengan baik, serta memiliki kepedulian tinggi terhadap sesama.</p>
  <p><em>Fathonah</em> berarti cerdas dan berwawasan luas — menjadi pembelajar dengan pola pikir terbuka, haus akan ilmu pengetahuan, dan mampu melihat sesuatu dari berbagai sudut pandang. <em>Tabligh</em> berarti menyampaikan — profesionalisme dalam berjuang, selalu berusaha mencapai tujuan dengan cara profesional dan bertanggung jawab, memiliki tekad kuat dan pantang menyerah. Keempat pilar ini saling melengkapi: Sidik menata hubungan dengan diri sendiri, Amanah menata hubungan dengan masyarakat, Fathonah menata pola pikir, dan Tabligh menata cara memimpin dan berjuang — sehingga bersama-sama membentuk kepribadian Islami yang utuh.</p>

  <h4>B. Implementasi Pendidikan Karakter</h4>
  <p>Implementasi pendidikan karakter harus sistematis, terencana, dan melibatkan seluruh komponen sekolah serta masyarakat lewat empat jalur. <strong>Integrasi kurikulum</strong> menanamkan nilai karakter di setiap mata pelajaran (kejujuran, tanggung jawab, kerja sama) serta lewat pembelajaran tematik yang memadukan berbagai mata pelajaran dengan tema pengembangan karakter. <strong>Pembiasaan sehari-hari</strong> menanamkan nilai lewat kegiatan rutin seperti shalat berjamaah, membaca Al-Qur'an, dan pembinaan akhlak, sekaligus menciptakan budaya saling menghormati, disiplin, dan gotong royong.</p>
  <p><strong>Kegiatan ekstrakurikuler</strong> — Pramuka, olahraga, karya tulis, dan sejenisnya — dimanfaatkan untuk mengembangkan kepemimpinan, kerja sama, dan sportivitas, sekaligus mengintegrasikan nilai kejujuran, tanggung jawab, dan disiplin ke dalamnya. <strong>Sinergi sekolah dan rumah</strong> membangun komunikasi-kolaborasi yang kuat antara sekolah dan orang tua agar penerapan nilai karakter di rumah dan di sekolah saling menguatkan, didukung kegiatan bersama yang melibatkan kedua pihak secara langsung.</p>

  <h4>C. Contoh Rumusan Karakter</h4>
  <p>Sebagai ilustrasi konkret, karakter <strong>Jujur</strong> dirumuskan sebagai perilaku yang menjadikan diri selalu dapat dipercaya dalam perkataan, tindakan, dan pekerjaan. Indikatornya mencakup: tersedianya fasilitas tempat temuan barang hilang, transparansi laporan keuangan dan penilaian sekolah secara berkala, kantin kejujuran, kotak saran-pengaduan, serta larangan membawa alat komunikasi saat ujian. Nilai ini diintegrasikan di semua mata pelajaran lewat pembiasaan melaporkan hasil pengamatan sesuai data/fakta yang sebenarnya, didukung budaya sekolah seperti kantin kejujuran yang difasilitasi CCTV dan keteladanan karyawan yang berani mengakui kesalahan sendiri.</p>
  <p>Rumusan karakter yang matang juga memetakan target per jenjang usia — dari PG dan TK yang menargetkan karakter dasar seperti jujur, bersih, dan berani, hingga jenjang SMA (kelas 10-12) yang menargetkan karakter kepemimpinan seperti visioner, adil, kompetitif, dan rela berkorban. Empat unsur karakter (Sidik, Amanah, Fathonah, Tabligh) dipetakan berjenjang: karakter diri dengan hatinya (Sidik) berkembang dari tauhid dan jujur di usia dini menuju sabar dan istikamah di usia sekolah dasar; karakter diri dengan orang lain (Amanah) berkembang dari sopan-santun menuju kemampuan diandalkan dan bertanggung jawab; karakter diri dengan pola pikir (Fathonah) berkembang dari rasa ingin tahu menuju berpikir strategis dan berorientasi kualitas; serta karakter diri dengan kepemimpinan (Tabligh) berkembang dari kerja sama tim menuju jiwa visioner dan kompetitif di jenjang akhir. Pemetaan berjenjang semacam ini memastikan pendidikan karakter bukan sekadar slogan, melainkan proses pembentukan yang terukur dan berkesinambungan dari PAUD hingga lulus SMA.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Coba pilih satu nilai karakter yang ingin diperkuat di sekolah Anda (misalnya kejujuran, tanggung jawab, atau kepemimpinan), lalu rumuskan minimal tiga indikator konkret dan dapat diamati — mengikuti pola contoh rumusan karakter "Jujur" pada Bab 11 — yang bisa mulai diterapkan bulan ini.</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Sebutkan empat pilar karakter yang dibahas dalam Bab 11.</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sidik, Amanah, Fathonah, dan Tabligh</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Disiplin, Rapi, Cerdas, dan Kaya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sabar, Ikhlas, Fokus, dan Tegas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin menanamkan karakter Amanah pada siswanya, bukan sekadar Sidik atau Fathonah. Kegiatan manakah yang paling tepat mewakili penguatan karakter Amanah menurut Bab 11?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melatih siswa menjadi pribadi yang dapat dipercaya menjalankan tugas dan peduli membantu sesama yang membutuhkan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melatih siswa menghafal rumus matematika sebanyak-banyaknya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Melatih siswa untuk selalu diam dan tidak banyak bertanya di kelas</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya menempelkan poster "Jujur, Disiplin, Bertanggung Jawab" di dinding kelas tanpa ada pembiasaan nyata, kegiatan ekstrakurikuler yang mendukung, atau sinergi dengan orang tua di rumah. Berdasarkan Bab 11, mengapa pendekatan ini kemungkinan besar tidak efektif?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Karena implementasi pendidikan karakter yang efektif membutuhkan integrasi kurikulum, pembiasaan sehari-hari, kegiatan ekstrakurikuler, dan sinergi sekolah-rumah secara sistematis, bukan sekadar slogan tertulis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena poster dengan warna yang kurang menarik tidak akan pernah dibaca siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Karena pendidikan karakter sebenarnya tidak perlu dilakukan secara sistematis sama sekali</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab11" onclick="markDone('bab11')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab11">✓ Bab 11 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

bab12: `
<p class="eyebrow reveal">Bab 12</p>
<h2 class="reveal">Kurikulum Bilingual</h2>
<p class="lede reveal">Pendidikan bilingual di sekolah Islam menawarkan perpaduan nilai-nilai Islam dengan penguasaan bahasa Inggris yang mumpuni — namun memilih dan menjalankannya membutuhkan pemahaman yang jernih tentang tingkatan dan tujuh aspek implementasi yang menopangnya.</p>

<div class="card reveal">
  <h4>A. Memahami Tingkatan Sekolah Islam Bilingual</h4>
  <p>Ada tiga tingkatan sekolah Islam bilingual. <strong>Specified</strong> menghadirkan lingkungan berbahasa Inggris dalam kegiatan sehari-hari, tetapi fokus utamanya tetap pendidikan Islam dengan bahasa Inggris sekadar alat bantu dan jam pelajarannya relatif sedikit — contohnya pesantren modern seperti Gontor. Keunggulannya menanamkan budaya berbahasa Inggris dalam lingkungan pendidikan Islam, namun kekurangannya belum fokus mengembangkan kemampuan bahasa Inggris secara mendalam dan belum memiliki sertifikasi internasional.</p>
  <p><strong>Satisfied</strong> menghadirkan bahasa Inggris dalam kegiatan sehari-hari maupun KBM, dengan jam pelajaran bahasa Inggris lebih banyak dan fokus seimbang antara pendidikan Islam dan pengembangan bahasa Inggris — contohnya Sekolah Islam Madina dan Nizamia Andalusia — meski masih belum memiliki sertifikasi bahasa Inggris internasional. <strong>Certified</strong> adalah tingkatan tertinggi: bahasa Inggris digunakan mendalam dalam KBM sehari-hari dengan kurikulum internasional seperti Cambridge atau IB, dilengkapi sertifikasi bahasa Inggris yang diakui secara internasional — contohnya Sekolah Islam Syafana dan Al Jabar. Keunggulannya membuka peluang pendidikan dan karier lebih luas, namun konsekuensinya biaya pendidikan lebih tinggi dan kurikulumnya lebih kompleks bagi sebagian siswa.</p>

  <h4>B. Implementasi Kurikulum Bilingual</h4>
  <p>Implementasi yang matang membutuhkan tujuh aspek. <strong>Kepemimpinan yang mumpuni</strong> — pimpinan sekolah harus punya kemampuan bahasa Inggris baik dan komitmen kuat, mampu memimpin tim penggerak, serta menciptakan lingkungan yang kondusif bagi program bilingual. <strong>Tim penggerak yang solid</strong> — terdiri dari guru dan staf yang berkomitmen dan antusias, bertugas merumuskan strategi, melaksanakan, dan mengevaluasi program secara kolaboratif. <strong>Kualifikasi guru yang tepat</strong> — guru mata pelajaran bilingual harus punya kemampuan bahasa Inggris mumpuni, terus mengikuti pelatihan, dan mampu menciptakan pembelajaran yang menarik.</p>
  <p><strong>Pelibatan pihak berkepentingan</strong> — guru, staf, pimpinan, orang tua, dan siswa semua dilibatkan lewat komunikasi terbuka agar program berjalan lancar. <strong>Struktur kurikulum yang seimbang</strong> — porsi mata pelajaran berbahasa Inggris dan bahasa lainnya ditentukan cermat sesuai kemampuan siswa, dengan struktur yang fleksibel mengikuti perkembangan program. <strong>Penilaian kemampuan siswa</strong> — memanfaatkan sertifikasi internasional seperti Cambridge English Assessment atau TOEFL, dilengkapi penilaian internal berkala untuk memantau kemajuan. <strong>Membangun budaya bilingual</strong> — memaksimalkan penggunaan bahasa Inggris dalam pengumuman, papan nama, dan komunikasi sehari-hari, didukung kegiatan ekstrakurikuler seperti klub bahasa dan program pertukaran pelajar. Ketujuh aspek ini menegaskan bahwa program bilingual yang berhasil bukan sekadar menambah jam pelajaran bahasa Inggris, melainkan membangun ekosistem yang konsisten dari kepemimpinan hingga budaya keseharian sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Jika sekolah Anda sedang atau berencana menjalankan program bilingual, tingkatan mana (Specified, Satisfied, atau Certified) yang paling realistis dicapai dalam 2-3 tahun ke depan, mengingat kesiapan guru, anggaran, dan kebutuhan orang tua saat ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Tingkatan sekolah Islam bilingual manakah yang menggunakan kurikulum internasional seperti Cambridge atau IB serta memiliki sertifikasi bahasa Inggris yang diakui secara internasional?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Certified</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Specified</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Satisfied</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin mulai merintis program bilingual, tetapi anggaran dan jumlah guru berkemampuan bahasa Inggris tinggi masih terbatas. Berdasarkan Bab 12, tingkatan mana yang paling realistis dijadikan titik awal sebelum melangkah ke tingkatan lebih tinggi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Specified, karena berfokus menanamkan budaya berbahasa Inggris dalam keseharian dengan jam pelajaran bahasa Inggris yang belum terlalu banyak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Certified, karena harus langsung menggunakan kurikulum internasional penuh sejak awal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengabaikan seluruh tingkatan dan menjalankan program tanpa perencanaan bertahap</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah sudah menambah jam pelajaran bahasa Inggris dan mendatangkan guru native speaker, tetapi belum memiliki tim penggerak yang solid, belum melibatkan orang tua secara aktif, dan belum membangun budaya berbahasa Inggris di luar jam pelajaran. Berdasarkan tujuh aspek implementasi pada Bab 12, apa yang paling perlu dibenahi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melengkapi dengan tim penggerak yang solid, pelibatan pihak berkepentingan, dan pembangunan budaya bilingual di seluruh lingkungan sekolah, tidak hanya menambah jam pelajaran semata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup menambah lebih banyak lagi guru native speaker tanpa membenahi aspek lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh program bilingual karena dianggap sudah pasti gagal</button>
  </div>
</div>

<button class="done-btn" id="doneBtn-bab12" onclick="markDone('bab12')">✓ Tandai Bab Ini Selesai</button>
<p class="seal" id="seal-bab12">✓ Bab 12 selesai dibaca</p>
<div class="chapter-nav reveal">
  <button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button>
  <button class="nav-btn next" onclick="goNext()">Selanjutnya →</button>
</div>
`,

asesmen: `
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda atas keseluruhan isi buku melalui 20 soal aplikatif dan analisis yang mewakili seluruh bab. Jawaban tidak akan langsung diperlihatkan — jawab semua soal terlebih dahulu, lalu klik tombol "Periksa Jawaban Saya" di bagian bawah untuk melihat skor akhir Anda pada skala 0-100.</p>
<div class="card reveal">

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menyusun mata pelajaran umum dan agama dalam jadwal yang sama sekali terpisah, tanpa satu pun kaitan antar keduanya di kelas. Berdasarkan konsep dasar kurikulum pada Bab 1, prinsip apa yang paling jelas belum terpenuhi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip terintegrasi, karena belum menghubungkan disiplin ilmu umum dengan nilai-nilai yang ingin ditanamkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip dinamis, karena jadwal pelajaran belum diperbarui tahun ini</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Prinsip komprehensif, karena jumlah mata pelajaran yang diajarkan sudah banyak</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Seorang guru memberi tugas menghitung zakat sebagai bagian dari pelajaran matematika, sekaligus menanamkan nilai kepedulian sosial di baliknya. Berdasarkan Bab 2, pendekatan ini paling tepat menggambarkan komponen kurikulum...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Lingkungan belajar spiritual semata, tanpa kaitan dengan materi akademik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Integrasi nilai Islam ke dalam materi pembelajaran umum lewat pendekatan kontekstual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Evaluasi otentik yang menilai hasil ujian akhir semester semata</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah hanya menilai siswa lewat ujian tertulis akhir semester, tanpa pernah mengamati keseharian siswa atau melihat perkembangan portofolio karya mereka. Berdasarkan komponen evaluasi pada Bab 2, apa yang paling perlu dilengkapi?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melengkapi tes tertulis dengan observasi, portofolio, dan penilaian otentik agar gambaran perkembangan siswa lebih menyeluruh</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh ujian tertulis dan menggantinya dengan wawancara semata</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah soal pilihan ganda pada ujian akhir semester</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah tim penyusun kurikulum langsung menulis materi pelajaran tanpa lebih dulu merumuskan visi-misi maupun tujuan pendidikan yang SMART. Berdasarkan langkah-langkah penyusunan kurikulum pada Bab 3, apa risiko paling utama dari langkah yang terlewat ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Materi yang disusun berisiko tidak terarah dan sulit dievaluasi karena tidak berpijak pada visi-misi dan tujuan yang jelas dan terukur</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko apa pun selama jumlah mata pelajaran yang diajarkan sudah banyak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya hanya soal keindahan bahasa dokumen, tidak berpengaruh pada pembelajaran di kelas</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah sudah mensosialisasikan kurikulum baru ke guru dan orang tua, tetapi belum pernah melakukan observasi kelas maupun mengumpulkan umpan balik guru dan siswa sejak kurikulum itu diterapkan. Berdasarkan Bab 4, tahap implementasi apa yang masih tertinggal?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sosialisasi ulang kurikulum dengan materi yang sama persis kepada orang tua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Monitoring dan evaluasi implementasi kurikulum lewat observasi kelas dan umpan balik guru-siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Penggantian seluruh guru dengan guru baru yang belum terlatih kurikulum</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menyadari lulusannya kesulitan beradaptasi dengan tuntutan dunia kerja berbasis teknologi, meski nilai akademiknya baik. Berdasarkan Bab 5, kombinasi langkah pengembangan kurikulum apa yang paling tepat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memperkuat keterampilan teknologi dan soft skills siswa, serta menjalin kolaborasi dengan dunia industri lewat magang atau guest lecture</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghapus seluruh pelajaran agama demi menambah waktu belajar teknologi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan kurikulum tetap sama karena nilai akademik sudah dianggap cukup baik</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sejumlah guru senior menolak metode pengajaran baru karena merasa metode lama sudah nyaman digunakan bertahun-tahun. Berdasarkan solusi pada Bab 6, langkah paling tepat mengatasi resistensi ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Manajemen perubahan yang mengomunikasikan manfaat perubahan secara jelas dan melibatkan guru dalam proses pengembangan kurikulum</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh guru senior dengan guru baru tanpa penjelasan apa pun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membatalkan seluruh rencana perubahan kurikulum tanpa didiskusikan lebih lanjut</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah Islam baru berdiri dan ingin fokus dulu pada kewajiban paling mendasar sebelum menambah program lain. Berdasarkan Bab 7, dua kurikulum apa yang wajib dimiliki terlebih dahulu?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum Nasional dan Kurikulum Keislaman</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum Olimpiade dan Kurikulum Bilingual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum Anti Korupsi dan Kurikulum Adiwiyata</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah menerapkan lima kurikulum sekaligus (nasional, keislaman, bilingual, tahfizh, olimpiade) tanpa rujukan penilaian dan rapor yang jelas untuk masing-masing. Berdasarkan kesimpulan Bab 7, apa risiko utama praktik ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko sama sekali karena semakin banyak kurikulum berarti semakin unggul sekolah tersebut</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Risikonya hanya soal estetika logo sekolah pada brosur PPDB</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Racikan kurikulum menjadi tidak terkendali dan sulit dipertanggungjawabkan karena melebihi anjuran maksimal tiga kurikulum tanpa rujukan penilaian yang jelas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru mendapati sebagian siswanya lebih mudah memahami materi lewat gambar/video, sementara sebagian lain lebih mudah lewat diskusi lisan. Berdasarkan pembelajaran berdiferensiasi pada Bab 8, langkah apa yang paling tepat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menyesuaikan metode pengajaran dengan gaya belajar masing-masing siswa (visual, auditori, kinestetik) tanpa memaksakan satu metode untuk semua</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memaksa seluruh siswa mengikuti satu metode pengajaran yang sama tanpa pengecualian</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan perbedaan gaya belajar karena dianggap tidak penting dalam Kurikulum Merdeka</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah hanya melakukan penilaian sumatif di akhir semester tanpa pernah melakukan asesmen diagnostik di awal maupun asesmen formatif selama proses belajar. Berdasarkan prinsip asesmen Kurikulum Merdeka pada Bab 8, apa dampaknya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada dampak apa pun karena penilaian sumatif sudah lebih dari cukup mengukur seluruh perkembangan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Guru kehilangan kesempatan memahami kebutuhan awal siswa dan memberi umpan balik selama proses belajar, sehingga asesmen menjadi kurang berkelanjutan dan kurang otentik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah otomatis melanggar hukum karena hanya menerapkan satu model asesmen</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin memperbaiki kualitas bacaan Al-Qur'an siswanya dari sisi ketepatan tajwid dan makharijul huruf, bukan sekadar menambah jumlah hafalan. Berdasarkan Bab 9, materi keislaman apa yang paling tepat diperkuat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tahsin, karena berfokus memperbaiki bacaan Al-Qur'an sesuai tajwid dan makharijul huruf</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ilmu Faraid, karena berkaitan dengan pembagian warisan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Balaghah, karena hanya berkaitan dengan keindahan gaya bahasa Arab</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah kecil yang berdiri sendiri ingin meningkatkan kredibilitas dan kualitas pendidikannya seperti sekolah-sekolah dalam jaringan besar. Berdasarkan Bab 10, langkah apa yang paling relevan dipertimbangkan?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mempertimbangkan bergabung dengan jaringan sekolah terpadu seperti JSIT untuk mendapatkan kerangka kurikulum teruji (seperti BPI) dan dukungan jaringan yang lebih luas</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menutup sekolah karena dianggap tidak mungkin bersaing dengan sekolah jaringan besar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meniru nama jaringan besar pada plang sekolah tanpa benar-benar bergabung atau menerapkan kurikulumnya</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin menanamkan karakter Amanah pada siswanya, bukan sekadar Sidik atau Fathonah. Berdasarkan Bab 11, kegiatan manakah yang paling tepat mewakili penguatan karakter Amanah?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melatih siswa menjadi pribadi yang dapat dipercaya menjalankan tugas dan peduli membantu sesama yang membutuhkan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melatih siswa menghafal rumus matematika sebanyak-banyaknya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melatih siswa untuk selalu diam dan tidak banyak bertanya di kelas</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah hanya menempelkan poster nilai karakter di dinding kelas tanpa pembiasaan nyata, ekstrakurikuler pendukung, atau sinergi dengan orang tua. Berdasarkan Bab 11, mengapa pendekatan ini kemungkinan besar tidak efektif?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena pendidikan karakter yang efektif membutuhkan integrasi kurikulum, pembiasaan sehari-hari, ekstrakurikuler, dan sinergi sekolah-rumah secara sistematis, bukan sekadar slogan tertulis</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena poster dengan warna kurang menarik tidak akan pernah dibaca siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Karena pendidikan karakter sebenarnya tidak perlu dilakukan secara sistematis sama sekali</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin mulai merintis program bilingual, tetapi anggaran dan jumlah guru berkemampuan bahasa Inggris tinggi masih terbatas. Berdasarkan tingkatan pada Bab 12, titik awal paling realistis adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Specified, karena berfokus menanamkan budaya berbahasa Inggris dalam keseharian dengan jam pelajaran bahasa Inggris yang belum terlalu banyak</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Certified, karena harus langsung menggunakan kurikulum internasional penuh sejak awal</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan seluruh tingkatan dan menjalankan program tanpa perencanaan bertahap</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah memiliki visi-misi yang indah di dokumen resminya (Bab 3), tetapi materi ajar dan metode pengajarannya (Bab 2) sama sekali tidak mencerminkan nilai-nilai dalam visi-misi tersebut. Apa yang paling tepat menjelaskan akar masalah ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada masalah, karena visi-misi hanya perlu tertulis rapi tanpa perlu tercermin dalam praktik pembelajaran</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Visi-misi belum benar-benar diintegrasikan ke komponen kurikulum seperti tujuan pendidikan, materi, dan metode pengajaran sehari-hari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Masalahnya murni karena kurangnya anggaran sekolah, tidak ada kaitan dengan visi-misi sama sekali</button>
  </div>

  <div class="assess-q" data-correct="3">
    <p>Sebuah sekolah rutin merevisi kurikulum (Bab 5) berdasarkan data, tetapi setiap kali ada resistensi guru terhadap perubahan (Bab 6), sekolah langsung membatalkan revisi tanpa dialog lebih lanjut. Berdasarkan Bab 5 dan Bab 6, apa yang seharusnya dilakukan sekolah ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghentikan seluruh proses evaluasi dan revisi kurikulum secara permanen</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan pendapat guru sepenuhnya dan tetap memaksakan revisi tanpa komunikasi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tetap melanjutkan revisi berbasis data sambil menerapkan manajemen perubahan — mengomunikasikan manfaatnya dan melibatkan guru dalam prosesnya — agar resistensi dapat diatasi tanpa membatalkan perbaikan yang memang dibutuhkan</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah Islam ingin menambahkan satu Kurikulum Keunggulan (Bab 7) dan sedang mempertimbangkan antara Bilingual (Bab 12), Karakter (Bab 11), atau JSIT/BPI (Bab 10). Berdasarkan seluruh buku ini, prinsip apa yang paling tepat digunakan untuk memutuskannya?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memilih satu yang paling sesuai dengan visi-misi, manhaj keislaman, kebutuhan siswa, dan ketersediaan sumber daya sekolah — bukan sekadar mengikuti tren atau menerapkan semuanya sekaligus</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memilih yang paling murah biayanya tanpa mempertimbangkan kesesuaian dengan visi-misi sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan ketiganya sekaligus secara penuh agar sekolah terlihat paling unggul dari kompetitor</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Setelah mempelajari seluruh buku ini, seorang kepala sekolah menyimpulkan bahwa kurikulum yang baik adalah dokumen yang sekali disusun dengan sempurna lalu tidak perlu disentuh lagi. Berdasarkan Bab 4, 5, dan 6, apakah kesimpulan ini tepat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tepat, karena kurikulum yang baik seharusnya tidak pernah diubah sejak awal disusun</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurang tepat, karena kurikulum yang baik justru membutuhkan siklus implementasi, monitoring-evaluasi, dan revisi berkelanjutan agar tetap relevan dengan kebutuhan siswa dan perkembangan zaman</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tepat, karena revisi kurikulum hanya diperlukan jika ada instruksi langsung dari pemerintah</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
