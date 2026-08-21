/* ==========================================================================
   KONTEN BAB — KHUSUS BUKU "Desain Sekolah Quran yang Unggul"
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
   https://purge.jsdelivr.net/gh/MuhammadFuad81/ebook-interaktif-edumind@main/content-sekolah-quran-unggul.js
   ========================================================================== */
window.BOOK_CONTENT = {

bab1: `
<p class="eyebrow reveal">Bab 1</p>
<h2 class="reveal">Visi Pendidikan Sekolah Qur'an</h2>
<p class="lede reveal">Sebelum merancang program dan kurikulum, sekolah perlu terlebih dahulu memahami fondasi berpikir yang melandasi pendidikan berbasis Al-Qur'an: mengapa ilmu dan iman tidak boleh dipisahkan, apa yang membedakan Sekolah Qur'an dari sekadar sekolah tahfidz, dan tujuan akhir apa yang sesungguhnya ingin dicapai.</p>

<div class="card reveal">
  <h4>A. Filosofi Pendidikan Berbasis Al-Qur'an</h4>
  <p>Al-Qur'an bukan sekadar kitab ibadah, melainkan juga rujukan bagi manusia untuk berpikir, merenung, dan mengamati alam semesta. Banyak ayat yang mengajak manusia memperhatikan langit, bumi, pergantian siang dan malam, serta berbagai fenomena alam lainnya — ajakan yang mendorong lahirnya perkembangan ilmu pengetahuan sepanjang sejarah peradaban Islam. Karena itu, dalam perspektif pendidikan Islam, Al-Qur'an tidak memisahkan ilmu dunia dari ilmu agama; keduanya dipandang sebagai bagian dari satu proses yang sama, yaitu memahami kebesaran Allah. Pendidikan yang berlandaskan Al-Qur'an mengajak siswa melihat ilmu bukan sekadar kumpulan informasi untuk dikuasai, melainkan jalan untuk mendekatkan diri kepada Allah.</p>
  <p>Semangat ini bukan hal baru. Sejak masa Rasulullah SAW, pendidikan berbasis Al-Qur'an telah menjadi inti pembentukan masyarakat Muslim. Para sahabat tidak hanya diajarkan menghafal Al-Qur'an, tetapi juga memahami maknanya dan mengamalkannya dalam kehidupan sehari-hari — mereka mempelajari ayat demi ayat secara bertahap, lalu mengamalkannya lebih dulu sebelum melanjutkan ke ayat berikutnya. Metode ini menunjukkan bahwa pendidikan Qur'ani sejak awal tidak semata menekankan penguasaan hafalan, melainkan pembentukan karakter dan perubahan perilaku. Tradisi ini kemudian diteruskan oleh para ulama dan lembaga pendidikan Islam di berbagai wilayah dunia, baik di pesantren, madrasah, maupun lembaga pendidikan lainnya. Ketika sebuah sekolah hari ini ingin membangun pendidikan berbasis Al-Qur'an, yang sesungguhnya sedang dibangun bukan sekadar program hafalan, melainkan tradisi pendidikan yang menempatkan Al-Qur'an sebagai pusat pembelajaran dan pembentukan karakter.</p>
  <p>Dari sinilah lahir salah satu keunikan pendidikan dalam Islam: keterkaitan yang erat antara ilmu, iman, dan karakter. Dalam banyak ayat, ilmu tidak pernah dipisahkan dari nilai keimanan dan tanggung jawab moral — ilmu yang dipelajari seharusnya membawa manusia pada kesadaran tentang kebesaran Allah, sekaligus membentuk sikap hidup yang baik. Karena itu, tujuan pendidikan dalam Islam bukan hanya menghasilkan individu yang cerdas secara intelektual, tetapi juga individu yang memiliki keimanan kuat dan karakter mulia. Dalam konteks sekolah, hubungan ketiganya dapat diwujudkan lewat sistem pendidikan yang terintegrasi — siswa tidak hanya belajar mata pelajaran akademik, tetapi juga diajak memahami bagaimana nilai-nilai Al-Qur'an dapat menjadi panduan dalam kehidupan mereka.</p>

  <h4>B. Sekolah Qur'an dalam Konteks Pendidikan Modern</h4>
  <p>Di berbagai daerah, semakin banyak lembaga pendidikan Islam yang menjadikan Al-Qur'an sebagai program unggulan, mulai dari sekolah tahfidz, pesantren tahfidz modern, hingga sekolah Islam terpadu. Namun istilah "sekolah tahfidz" dan "Sekolah Qur'an" sering digunakan secara bergantian, padahal maknanya berbeda. Sekolah tahfidz umumnya lebih berfokus pada program hafalan sebagai kegiatan utama, dengan siswa diarahkan mencapai target hafalan tertentu dalam jangka waktu tertentu. Sekolah Qur'an memiliki cakupan yang jauh lebih luas: Al-Qur'an tidak hanya menjadi objek hafalan, tetapi juga fondasi dalam keseluruhan sistem pendidikan — nilai-nilainya menjadi rujukan dalam pembelajaran, pembentukan karakter, serta budaya sekolah, sehingga lulusannya tidak hanya hafal Al-Qur'an, tetapi juga memahami dan mengamalkan nilai-nilainya.</p>
  <p>Meski demikian, dunia pendidikan Islam saat ini menghadapi tantangan yang cukup kompleks. Perubahan zaman yang berlangsung sangat cepat — perkembangan teknologi, informasi, dan budaya global — membawa pengaruh besar terhadap cara berpikir generasi muda, sehingga sekolah tidak lagi cukup hanya mengajarkan ilmu pengetahuan, tetapi juga harus membekali siswa dengan nilai-nilai yang kuat. Tantangan lain yang sering dihadapi adalah menjaga keseimbangan antara kualitas akademik dan pembinaan karakter: sebagian sekolah terlalu fokus pada pencapaian akademik, sementara sebagian lainnya terlalu menekankan aspek religius tanpa pengelolaan sistem pendidikan yang kuat, sehingga pengembangan intelektual dan pembinaan spiritual berjalan terpisah — padahal dalam perspektif Islam, keduanya seharusnya berjalan seimbang.</p>
  <p>Menghadapi tantangan tersebut, banyak sekolah mulai menyadari pentingnya membangun sistem pendidikan yang berlandaskan Al-Qur'an — bukan sekadar menambahkan pelajaran Al-Qur'an dalam jadwal, melainkan menjadikan nilai-nilainya sebagai fondasi dalam keseluruhan proses pendidikan, mulai dari kurikulum, metode pembelajaran, hingga pembentukan budaya sekolah. Nilai kejujuran, tanggung jawab, kedisiplinan, dan kepedulian sosial yang diajarkan dalam Al-Qur'an dapat diintegrasikan dalam proses pembelajaran maupun aktivitas sekolah, sehingga pendidikan tidak hanya menghasilkan siswa yang memiliki kemampuan akademik, tetapi juga membentuk pribadi yang berintegritas dan berkarakter kuat.</p>

  <h4>C. Tujuan Pendidikan Sekolah Qur'an</h4>
  <p>Sekolah Qur'an hadir bukan sekadar sebagai lembaga yang mengajarkan hafalan Al-Qur'an, melainkan bertujuan membangun sistem pendidikan yang menjadikan Al-Qur'an sebagai pusat pembelajaran, pembentukan karakter, dan arah kehidupan siswa. Tujuan pertamanya adalah membentuk generasi yang dekat dengan Al-Qur'an — kedekatan yang tidak hanya diwujudkan lewat kemampuan membaca atau menghafal, tetapi juga lewat kecintaan dan keterikatan emosional terhadap kitab suci itu, sehingga dalam jangka panjang Al-Qur'an menjadi pegangan siswa dalam mengambil keputusan dan menjalani kehidupan.</p>
  <p>Tujuan kedua adalah mengintegrasikan ilmu dan nilai Qur'ani, sehingga keduanya saling melengkapi, bukan berjalan terpisah. Ilmu pengetahuan dipelajari untuk memahami alam dan kehidupan, sementara nilai-nilai Qur'ani memberi arah tentang bagaimana ilmu tersebut digunakan secara benar dan bertanggung jawab — misalnya ketika mempelajari ilmu alam, siswa diajak memahami kebesaran Allah lewat keteraturan alam semesta, dan ketika mempelajari ilmu sosial, siswa diajak memahami nilai keadilan, tanggung jawab, dan kepedulian yang diajarkan Al-Qur'an.</p>
  <p>Tujuan ketiga adalah menumbuhkan karakter Qur'ani dalam kehidupan siswa — sikap hidup yang dibentuk oleh ajaran Al-Qur'an seperti kejujuran, tanggung jawab, disiplin, kesabaran, kepedulian terhadap sesama, serta komitmen terhadap kebaikan. Karakter seperti ini tidak terbentuk hanya lewat pembelajaran teori, melainkan melalui proses yang melibatkan pembiasaan, keteladanan, dan lingkungan yang mendukung; guru tidak hanya berperan sebagai pengajar, tetapi juga sebagai teladan yang menunjukkan bagaimana nilai-nilai Al-Qur'an diterapkan dalam perilaku dan sikap hidup sehari-hari. Dengan demikian, tujuan akhir pendidikan Sekolah Qur'an adalah melahirkan generasi yang tidak hanya cerdas secara intelektual dan kuat dalam hafalan, tetapi juga berkarakter baik dan menjadikan Al-Qur'an sebagai pedoman hidup.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Ketika Anda merenungkan filosofi "ilmu, iman, dan karakter yang tidak boleh dipisahkan" pada bab ini, aspek mana yang menurut Anda masih paling lemah diterapkan di sekolah Anda — dan langkah kecil apa yang bisa mulai dijalankan untuk memperkuatnya?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa yang membedakan Sekolah Qur'an dari sekadar sekolah tahfidz?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah Qur'an menjadikan Al-Qur'an sebagai fondasi seluruh sistem pendidikan — bukan hanya objek hafalan, tetapi juga rujukan dalam pembelajaran, pembentukan karakter, dan budaya sekolah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah Qur'an hanya berbeda dari segi jumlah jam pelajaran tahfidz yang lebih banyak</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah Qur'an dan sekolah tahfidz sebenarnya sama persis tanpa ada perbedaan berarti</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah bangga karena siswanya rata-rata hafal lima juz Al-Qur'an, namun perilaku sehari-hari siswa — kejujuran, kedisiplinan, kepedulian terhadap sesama — tidak berbeda dari sekolah pada umumnya. Berdasarkan filosofi bab ini, apa akar persoalan yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Target hafalan lima juz sebenarnya terlalu rendah dan perlu ditingkatkan drastis</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Sekolah baru menjalankan aspek hafalan tanpa mengintegrasikan nilai-nilai Al-Qur'an ke seluruh sistem pendidikan dan pembentukan karakter</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Persoalan ini wajar dan tidak berkaitan dengan filosofi pendidikan Qur'ani sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Kepala sekolah SDIT Al-Furqan ingin mengubah sekolahnya dari sekadar "sekolah dengan program tahfidz" menjadi benar-benar "Sekolah Qur'an". Berdasarkan bab ini, langkah paling mendasar yang perlu dilakukan lebih dulu adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Merumuskan kembali visi pendidikan agar Al-Qur'an menjadi fondasi seluruh sistem pembelajaran, bukan sekadar salah satu program tambahan</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jam pelajaran tahfidz sebanyak-banyaknya tanpa mengubah hal lain</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti nama sekolah menjadi "Sekolah Qur'an" tanpa mengubah sistem pendidikan yang berjalan</button>
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
<h2 class="reveal">Pilar Utama Sekolah Qur'an yang Unggul</h2>
<p class="lede reveal">Jika Bab 1 menjawab pertanyaan "mengapa", bab ini menjawab pertanyaan "lewat apa" — yaitu tiga pilar yang menopang Sekolah Qur'an yang unggul: Program Qur'an, Living Qur'an, dan Dialog Qur'an, yang harus berjalan bersinergi, bukan berdiri sendiri-sendiri.</p>

<div class="card reveal">
  <h4>A. Pilar Pertama: Program Qur'an</h4>
  <p>Program Qur'an merupakan fondasi utama dalam membangun Sekolah Qur'an yang unggul. Program ini tidak boleh sekadar menjadi kegiatan tambahan dalam jadwal sekolah, melainkan harus menjadi bagian penting dalam sistem pembelajaran, dibimbing secara bertahap agar siswa mampu membaca Al-Qur'an dengan benar, menghafalnya dengan baik, serta menjaga hafalan tersebut dalam jangka panjang. Dalam praktiknya, program Qur'an yang efektif dibangun lewat tiga komponen yang saling melengkapi: tahsin, tahfidz, dan murojaah.</p>
  <p>Tahsin adalah tahap awal yang sangat penting, bertujuan memperbaiki dan menyempurnakan bacaan Al-Qur'an agar sesuai kaidah tajwid dan makhraj huruf. Ketika bacaan tidak dibangun dengan baik sejak awal, siswa berpotensi menghafal ayat-ayat dengan kesalahan yang sulit diperbaiki di kemudian hari — karena itu tahsin perlu menjadi fondasi sebelum siswa diarahkan menambah hafalan. Tahfidz, tahap berikutnya, adalah proses menghafal itu sendiri; program tahfidz yang baik memperhatikan metode pembelajaran sesuai usia dan kemampuan siswa, serta target hafalan yang realistis agar siswa tidak merasa terbebani namun juga tidak menyia-nyiakan potensinya.</p>
  <p>Sementara itu, murojaah — mengulang hafalan secara rutin — sering menjadi tantangan terbesar dalam program tahfidz, karena banyak siswa mampu menambah hafalan baru dengan cepat namun kesulitan mempertahankan hafalan lama. Murojaah karenanya harus menjadi bagian tak terpisahkan dari program: setiap penambahan hafalan baru perlu diimbangi kegiatan murojaah terjadwal, baik lewat pengulangan mandiri, setoran hafalan lama kepada guru, maupun murojaah bersama dalam kelompok belajar. Dengan tahsin yang kuat, tahfidz yang terarah, dan murojaah yang konsisten, program Qur'an dapat berjalan stabil dan menghasilkan generasi yang benar-benar dekat dengan Al-Qur'an.</p>

  <h4>B. Pilar Kedua: Living Qur'an</h4>
  <p>Jika Program Qur'an berfokus pada kemampuan membaca dan menghafal, Living Qur'an berfokus pada bagaimana nilai-nilai Al-Qur'an dihidupkan dalam berbagai bidang ilmu dan aktivitas pendidikan. Dengan pendekatan ini, Al-Qur'an tidak hanya dipelajari dalam jam tahsin atau tahfidz, tetapi juga menjadi rujukan dalam memahami ilmu pengetahuan, membangun cara berpikir, serta membentuk sikap hidup siswa — sebab banyak ayat Al-Qur'an mengajak manusia memperhatikan langit, bumi, dan berbagai fenomena alam sebagai tanda kebesaran Allah, sehingga ilmu pengetahuan dan nilai spiritual tidak dipandang terpisah.</p>
  <p>Penerapan Living Qur'an tidak berarti setiap pelajaran harus selalu membahas ayat secara langsung; yang lebih penting adalah bagaimana nilai-nilai Al-Qur'an menjadi landasan dalam proses pembelajaran. Misalnya, ketika siswa mempelajari air dalam pelajaran sains, guru dapat mengaitkannya dengan ayat yang menjelaskan air sebagai sumber kehidupan; dalam pelajaran sosial, siswa diajak mempelajari nilai keadilan dan kepedulian yang diajarkan Al-Qur'an; dalam pelajaran sejarah, siswa mempelajari kisah yang mengajarkan keteguhan dan kejujuran. Integrasi seperti ini tidak perlu rumit — yang terpenting adalah kesadaran guru untuk menjadikan Al-Qur'an sebagai sumber inspirasi dalam mengajar, sehingga siswa terbiasa melihat Al-Qur'an sebagai pedoman yang relevan dengan seluruh aspek kehidupan mereka, bukan hanya ayat yang dihafal.</p>

  <h4>C. Pilar Ketiga: Dialog Qur'an</h4>
  <p>Sekolah Qur'an tidak cukup hanya mengajarkan siswa membaca dan menghafal Al-Qur'an — sekolah juga perlu membangun budaya komunikasi yang berlandaskan nilai-nilainya. Dialog Qur'an adalah pendekatan komunikasi yang menjadikan Al-Qur'an sebagai rujukan dalam berbagai percakapan, diskusi, maupun penyelesaian masalah di lingkungan sekolah, sehingga nilai-nilainya tidak hanya dipelajari secara teoretis, tetapi dihadirkan dalam interaksi sehari-hari antara guru, siswa, dan seluruh warga sekolah.</p>
  <p>Dialog Qur'an dapat hadir secara formal, misalnya lewat sosialisasi program sekolah yang merujuk pada ayat Al-Qur'an, pengarahan yang mengaitkan pesan dengan kisah Qur'ani, diskusi kelompok berperspektif Al-Qur'an, atau kegiatan parenting yang menghubungkan pendidikan anak dengan nilai-nilai Qur'ani. Di sisi lain, dialog Qur'an juga dapat hadir secara non-formal lewat percakapan santai guru dan siswa, bimbingan pribadi saat siswa menghadapi masalah, atau obrolan ringan yang mengaitkan pengalaman hidup dengan pesan Al-Qur'an. Guru memegang peran sentral dalam menghidupkan dialog ini — dengan mengaitkan nasihat pada ayat atau kisah Qur'ani, menggunakan bahasa yang santun dan penuh hikmah, serta membangun hubungan yang hangat dengan siswa — sehingga siswa merasakan bahwa Al-Qur'an bukan hanya pelajaran, tetapi juga sumber hikmah dalam kehidupan.</p>

  <h4>D. Sinergi Program Qur'an, Living Qur'an, dan Dialog Qur'an</h4>
  <p>Salah satu kesalahan yang sering terjadi dalam pengembangan sekolah berbasis Al-Qur'an adalah memandang pendidikan Qur'ani secara sempit — banyak sekolah merasa telah menjadi "Sekolah Qur'an" hanya karena memiliki program tahfidz yang intensif, padahal Al-Qur'an di sekolah tersebut sering kali hanya hadir dalam jam pelajaran tertentu, sehingga siswa mungkin hafal beberapa juz tetapi belum tentu memahami bagaimana nilai-nilainya membimbing cara berpikir, bersikap, dan berinteraksi sehari-hari.</p>
  <p>Ketika Program Qur'an, Living Qur'an, dan Dialog Qur'an berjalan bersama, terbentuklah sebuah ekosistem pendidikan Qur'ani dengan tiga ciri: Al-Qur'an menjadi rujukan utama dalam pembelajaran, nilai-nilainya hadir dalam interaksi sehari-hari, dan seluruh aktivitas sekolah mendukung kedekatan siswa dengan Al-Qur'an. Sinergi ini membentuk tiga dimensi perkembangan siswa sekaligus: kompetensi Qur'ani (kemampuan membaca dan menghafal), pemahaman Qur'ani (kemampuan memahami hubungan Al-Qur'an dengan ilmu dan kehidupan), serta karakter Qur'ani (kemampuan menjadikan nilai Al-Qur'an sebagai pedoman bersikap). Sekolah yang berhasil membangun ketiganya akan memiliki Al-Qur'an yang benar-benar hidup — bukan hanya dalam hafalan siswa, tetapi juga dalam budaya belajar, cara guru mengajar, dan cara seluruh warga sekolah berinteraksi.</p>

  <h4>E. Lima Tahapan Pendidikan Karakter Qur'ani</h4>
  <p>Merujuk pada misi pendidikan yang digambarkan dalam Surah Al-Jumu'ah ayat 2 tentang tugas Rasulullah SAW mendidik umat, pendidikan Qur'ani dapat dipahami berjalan lewat lima tahapan yang saling berkaitan. Pertama, <strong>menyucikan keimanan</strong> — penguatan hubungan manusia dengan Allah sebagai fondasi utama karakter, ditumbuhkan lewat pembiasaan ibadah dan penanaman nilai tauhid. Kedua, <strong>menyampaikan ayat-ayat Allah</strong> — memperkenalkan Al-Qur'an lewat tilawah, tahsin, dan pengenalan ayat yang relevan dengan kehidupan. Ketiga, <strong>membersihkan diri</strong> atau menyucikan jiwa, membentuk karakter seperti kejujuran, kesabaran, dan kepedulian lewat pembiasaan akhlak sehari-hari. Keempat, <strong>mengajarkan Al-Qur'an dan hadis</strong> sebagai sumber ilmu dan hikmah secara lebih mendalam, disertai keteladanan Rasulullah dalam menerapkan nilai-nilainya. Kelima, <strong>menerapkan ilmu dengan hikmah</strong> — mengamalkan apa yang telah dipelajari dalam bentuk perilaku baik dan kontribusi nyata bagi masyarakat, seperti kejujuran dalam belajar dan kepedulian terhadap sesama. Kelima tahapan ini menegaskan bahwa pendidikan berbasis Al-Qur'an adalah proses menyeluruh yang membentuk iman, akhlak, dan kemampuan mengamalkan nilai sekaligus.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari tiga pilar (Program Qur'an, Living Qur'an, Dialog Qur'an) yang dibahas di bab ini, pilar mana yang paling kuat sudah berjalan di sekolah Anda, dan pilar mana yang paling perlu segera diperkuat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa tiga komponen utama dalam Program Qur'an (Pilar Pertama)?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tahsin, tahfidz, dan murojaah</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tahfidz, ujian, dan sertifikasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membaca, menulis, dan menerjemahkan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah mengarahkan siswa langsung menghafal banyak ayat tanpa terlebih dahulu memperkuat bacaan, dan hafalan yang sudah didapat jarang diulang kembali. Berdasarkan bab ini, dua kelemahan apa yang paling mungkin muncul dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kualitas bacaan yang kurang tepat akan sulit diperbaiki di kemudian hari, dan hafalan yang tidak dimurojaah secara rutin akan mudah hilang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko apa pun karena menghafal sebanyak-banyaknya adalah prioritas utama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Siswa akan otomatis membaca dengan tajwid yang benar meski tanpa tahsin</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah hanya mengajarkan nilai kejujuran lewat pelajaran agama, sementara di pelajaran Matematika dan IPA guru tidak pernah mengaitkan materi dengan nilai-nilai Al-Qur'an. Berdasarkan konsep Living Qur'an di bab ini, apa yang perlu diperbaiki?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Guru mata pelajaran umum perlu diajak mengintegrasikan nilai-nilai Al-Qur'an ke dalam pembelajarannya masing-masing, bukan hanya menyerahkannya pada pelajaran agama</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pelajaran Matematika dan IPA sebaiknya dihapus karena tidak relevan dengan Al-Qur'an</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Living Qur'an hanya berlaku untuk pelajaran agama sehingga situasi ini sudah benar</button>
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
<h2 class="reveal">Menentukan Model dan Positioning Sekolah Qur'an</h2>
<p class="lede reveal">Setelah memahami tiga pilar penopangnya, sekolah perlu membuat keputusan strategis: model program Qur'an seperti apa yang paling sesuai dengan kondisinya, dan bagaimana keunggulan itu dikomunikasikan secara meyakinkan kepada masyarakat.</p>

<div class="card reveal">
  <h4>A. Model Sekolah Qur'an</h4>
  <p>Model program Qur'an yang dipilih akan sangat memengaruhi arah pengembangan kurikulum, metode pembelajaran, serta target yang ingin dicapai, sehingga pemilihannya perlu disesuaikan dengan visi lembaga, kapasitas guru, waktu pembelajaran, dan karakteristik siswa. Secara umum terdapat tiga model yang sering digunakan. <strong>Model tahsin</strong> berfokus pada perbaikan dan penguatan kualitas bacaan, cocok bagi sekolah yang ingin memastikan seluruh siswa membaca Al-Qur'an dengan baik sebelum melangkah ke tahap lebih lanjut — namun jika berdiri sendiri tanpa program lanjutan, siswa berisiko memiliki bacaan baik tetapi tidak memiliki kesempatan memperkuat hafalan.</p>
  <p><strong>Model tahfidz</strong> berfokus pada penguatan hafalan, dengan siswa diarahkan mencapai target hafalan tertentu lewat alokasi waktu yang cukup intensif dan kegiatan murojaah rutin; keunggulannya membantu siswa menyimpan ayat-ayat Al-Qur'an sejak usia dini, namun tanpa sistem pembinaan yang baik, model ini rentan menghadapi kualitas bacaan yang kurang kuat atau siswa yang merasa terbebani target. <strong>Model integratif</strong> menggabungkan ketiganya sekaligus — program Qur'an yang kuat, integrasi nilai dalam pembelajaran, serta pembangunan budaya Qur'ani — sehingga dianggap paling komprehensif karena menghubungkan pembelajaran Al-Qur'an dengan pengembangan karakter dan pemahaman ilmu pengetahuan, meski membutuhkan perencanaan matang dan kesiapan seluruh pihak di sekolah.</p>

  <h4>B. Menentukan Model yang Tepat</h4>
  <p>Tidak semua sekolah harus menggunakan model yang sama. Langkah pertama menentukan model yang tepat adalah memastikan keselarasan dengan visi lembaga — jika sekolah berorientasi pada penguatan hafalan, model tahfidz mungkin lebih tepat; jika ingin menjadikan Al-Qur'an sebagai landasan seluruh bidang ilmu dan karakter, model integratif lebih sesuai. Faktor kedua adalah kapasitas SDM dan waktu pembelajaran: jika jumlah guru berkompeten tahfidz masih terbatas, sekolah sebaiknya memulai dari model yang lebih sederhana seperti penguatan tahsin, sebelum mengembangkan program tahfidz secara lebih intensif.</p>
  <p>Faktor ketiga adalah arah pengembangan jangka panjang. Sekolah dapat memulai dengan model yang sesuai kondisi saat ini, lalu secara bertahap mengembangkan program yang lebih komprehensif — misalnya memperkuat tahsin terlebih dahulu, kemudian menambahkan tahfidz secara bertahap, hingga akhirnya mengembangkan pendekatan integratif. Dengan perencanaan bertahap seperti ini, program Qur'an dapat berkembang secara stabil tanpa membebani sistem pendidikan yang sudah berjalan, sekaligus memiliki arah yang jelas untuk terus berkembang di masa depan.</p>

  <h4>C. Positioning Program Qur'an Sekolah</h4>
  <p>Setelah model ditentukan, langkah berikutnya adalah merumuskan positioning — cara sekolah menempatkan dirinya secara jelas di tengah pilihan lembaga pendidikan lain, menjawab pertanyaan apa yang menjadi ciri khas dan keunggulan program Qur'an sekolah tersebut. Dalam Sekolah Qur'an yang unggul, program Qur'an tidak ditempatkan sebagai salah satu bagian kurikulum semata, melainkan menjadi identitas utama sekolah, sehingga seluruh sistem pendidikan — kurikulum, kegiatan, hingga budaya — dirancang untuk mendukung penguatan nilai-nilai Al-Qur'an.</p>
  <p>Positioning yang kuat membutuhkan kejelasan tentang keunggulan yang dimiliki, entah itu pendekatan pembelajaran, sistem pembinaan siswa, atau integrasi nilai Qur'ani dalam pendidikan — tidak harus selalu berupa target hafalan yang tinggi, bisa juga kualitas bacaan siswa atau pembinaan karakter Qur'ani. Keunggulan ini kemudian dirangkai menjadi narasi positioning sekolah yang disampaikan lewat visi sekolah, profil lembaga, maupun berbagai media komunikasi, sehingga masyarakat memahami karakter dan arah pendidikan yang dibangun, dan pada akhirnya membangun kepercayaan terhadap lembaga tersebut.</p>

  <h4>D. Strategi Mengkomunikasikan Positioning Sekolah Qur'an</h4>
  <p>Positioning yang baik tidak akan memberi dampak besar jika tidak dipahami oleh orang tua, calon siswa, maupun masyarakat luas. Langkah pertama mengomunikasikannya adalah menyusun narasi pendidikan yang jelas — menjelaskan bagaimana Al-Qur'an menjadi fondasi sistem pendidikan sekolah, mencakup visi pendidikan, pendekatan pembelajaran Qur'an, dan tujuan pembentukan karakter, sehingga masyarakat memahami bahwa program yang dijalankan bukan sekadar kegiatan hafalan.</p>
  <p>Selanjutnya, keunggulan program perlu disampaikan secara konsisten lewat berbagai media komunikasi yang dimiliki sekolah — website, media sosial, brosur atau profil sekolah, hingga seminar edukasi bagi orang tua — dengan informasi yang selaras antara yang disampaikan dan kenyataan yang dijalankan di lapangan. Strategi komunikasi paling kuat sebenarnya bukan berasal dari promosi semata, melainkan dari bukti nyata: ketika siswa menunjukkan kemampuan membaca yang baik, hafalan yang terjaga, dan karakter yang baik, masyarakat akan melihat langsung kualitas pendidikan sekolah, misalnya lewat wisuda tahfidz atau presentasi hafalan siswa. Pada akhirnya, tujuan dari seluruh strategi ini adalah membangun kepercayaan masyarakat, sehingga sekolah dikenal sebagai lembaga dengan identitas kuat yang mampu membantu orang tua membimbing anak menjadi pribadi yang berilmu, beriman, dan berakhlak baik.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Setelah memahami model dan positioning Sekolah Qur'an pada bab ini, model manakah yang paling realistis diterapkan di sekolah Anda saat ini, dan apa keunggulan yang bisa mulai dikomunikasikan kepada masyarakat?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Sebutkan tiga model Sekolah Qur'an yang dibahas pada bab ini.</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Model tahsin, model tahfidz, dan model integratif</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Model daring, model luring, dan model hibrida</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Model negeri, model swasta, dan model pesantren</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah baru memiliki dua guru dengan kompetensi tahfidz yang masih terbatas dan waktu pembelajaran Qur'an yang sempit, namun ingin langsung menerapkan model integratif yang menyeluruh. Berdasarkan bab ini, apa risiko dari keputusan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena model integratif cocok diterapkan di sekolah mana pun tanpa syarat</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Model integratif membutuhkan kesiapan SDM dan sistem yang matang, sehingga jika dipaksakan tanpa kapasitas memadai, program berisiko berjalan tidak stabil</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah sebaiknya langsung berhenti menjalankan program Qur'an sama sekali</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah memiliki program tahfidz yang sebenarnya cukup baik, tetapi masyarakat sekitar tidak mengetahuinya karena sekolah jarang mengomunikasikan keunggulan tersebut. Berdasarkan bab ini, langkah paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan saja karena kualitas program yang baik pasti akan diketahui masyarakat dengan sendirinya</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengganti seluruh program tahfidz dengan program baru yang belum tentu lebih baik</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menyusun narasi positioning yang jelas dan mengomunikasikannya secara konsisten lewat berbagai media serta bukti nyata hasil siswa</button>
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
<h2 class="reveal">Merancang Kurikulum Qur'an yang Sistematis</h2>
<p class="lede reveal">Visi dan model yang tepat perlu diterjemahkan menjadi kurikulum yang konkret — dirancang bertahap sesuai kemampuan siswa, terstruktur per jenjang, dan dilengkapi target hafalan yang realistis agar program berjalan stabil dalam jangka panjang.</p>

<div class="card reveal">
  <h4>A. Prinsip Dasar Kurikulum Qur'an</h4>
  <p>Tanpa kurikulum yang jelas, program Qur'an sering berjalan secara sporadis — guru memiliki metode berbeda-beda, target hafalan tidak terstruktur, dan perkembangan siswa sulit dipantau konsisten. Prinsip pertama dalam menyusun kurikulum Qur'an adalah menyesuaikannya dengan tahapan kemampuan siswa: dimulai dari pengenalan huruf hijaiyah dan dasar-dasar tajwid, dilanjutkan membaca dengan lebih lancar dan tartil, baru kemudian diarahkan pada pembinaan hafalan secara bertahap sesuai kemampuan masing-masing, sehingga siswa tidak merasa terbebani oleh target yang terlalu tinggi.</p>
  <p>Prinsip kedua adalah menjaga keseimbangan antara tahsin dan tahfidz — jika kurikulum terlalu fokus pada hafalan tanpa memperhatikan kualitas bacaan, siswa berisiko menghafal dengan kesalahan tajwid yang sulit diperbaiki; sebaliknya jika hanya berfokus pada tahsin, siswa mungkin memiliki bacaan baik tetapi hafalan yang tidak cukup. Prinsip ketiga adalah mengintegrasikan tahsin, tahfidz, dan murojaah secara terpadu dalam satu sistem pembelajaran yang tidak memisahkan ketiganya, sehingga siswa tidak hanya mampu menambah hafalan baru, tetapi juga menjaga kualitas bacaan serta mempertahankan hafalan yang telah dimiliki.</p>

  <h4>B. Struktur Kurikulum Qur'an per Jenjang</h4>
  <p>Setiap jenjang memiliki karakteristik berbeda sehingga kurikulum perlu disusun secara bertahap. Pada jenjang <strong>SD</strong>, fokus utama adalah membangun fondasi bacaan yang kuat lewat pengenalan huruf hijaiyah dan dasar tajwid, mulai menghafal surat-surat pendek dari juz 30, serta membiasakan murojaah sejak dini — yang terpenting pada tahap ini adalah menumbuhkan kecintaan siswa terhadap Al-Qur'an lewat pengalaman belajar yang menyenangkan. Pada jenjang <strong>SMP</strong>, pembelajaran diarahkan memperkuat hafalan dan kualitas bacaan lebih intensif, dengan target yang disusun bertahap sesuai kemampuan dan waktu yang tersedia, serta mulai mengajak siswa memahami nilai-nilai yang terkandung dalam ayat yang mereka hafal.</p>
  <p>Pada jenjang <strong>SMA</strong>, pembelajaran difokuskan pada penguatan dan pemeliharaan hafalan yang telah diperoleh sebelumnya, sehingga murojaah menjadi bagian yang sangat penting dalam kurikulum. Siswa pada tahap ini juga diarahkan memperdalam pemahaman nilai-nilai Al-Qur'an dan dilibatkan dalam kegiatan seperti kajian ayat atau pembinaan karakter berlandaskan Al-Qur'an, sehingga hubungan mereka dengan Al-Qur'an semakin kuat sepanjang perjalanan pendidikan dari SD hingga SMA.</p>

  <h4>C. Peta Pembelajaran Qur'an</h4>
  <p>Selain struktur per jenjang, sekolah perlu menyusun peta pembelajaran yang menggambarkan perkembangan kemampuan siswa secara bertahap, agar guru memiliki panduan jelas tentang apa yang perlu dicapai siswa di setiap tahap. Untuk kemampuan membaca, tahapannya dimulai dari pengenalan huruf hijaiyah dan cara melafalkannya, dilanjutkan membaca rangkaian huruf dan kata, penguatan bacaan dengan memperhatikan hukum tajwid, hingga akhirnya siswa mampu membaca dengan tartil — jelas, tenang, dan sesuai kaidah.</p>
  <p>Untuk perkembangan hafalan, siswa biasanya diarahkan menghafal surat-surat pendek dari juz 30 terlebih dahulu untuk membangun kepercayaan diri, sebelum menambah hafalan secara bertahap sesuai kemampuan dan waktu pembelajaran yang tersedia. Pada tahap lanjutan, fokus bergeser dari sekadar menambah hafalan baru menjadi penguatan hafalan yang telah dimiliki lewat murojaah yang konsisten, sehingga sekolah dapat membantu siswa mencapai target hafalan secara terarah tanpa memberikan beban berlebihan.</p>

  <h4>D. Contoh Desain Kurikulum Qur'an Sekolah</h4>
  <p>Desain kurikulum yang dapat diterapkan secara nyata biasanya memuat empat komponen: tujuan pembelajaran, materi, metode, dan sistem evaluasi. Tujuan pembelajaran mencakup kemampuan membaca dengan baik dan benar, kemampuan menghafal secara bertahap, kemampuan menjaga hafalan lewat murojaah konsisten, serta pembentukan karakter berlandaskan nilai Al-Qur'an. Materi pembelajaran kemudian disusun bertahap mencakup tahsin, tahfidz, dan murojaah, disesuaikan dengan perkembangan kemampuan siswa.</p>
  <p>Metode pembelajaran yang umum digunakan antara lain pembelajaran langsung bersama guru untuk memperbaiki bacaan, metode talaqqi atau setoran hafalan, pembelajaran berkelompok untuk kegiatan murojaah, serta latihan membaca mandiri. Sistem evaluasi mencakup penilaian kualitas bacaan, evaluasi hafalan lewat setoran, ujian hafalan berkala, dan pemantauan kegiatan murojaah. Sebagai gambaran, sekolah dapat menyusun format sederhana: tujuan program meningkatkan kemampuan membaca dan menghafal secara bertahap, materi tahsin-tahfidz-murojaah, metode talaqqi dan murojaah kelompok, waktu pembelajaran sekitar 5-10 jam per minggu, serta sistem evaluasi berupa penilaian bacaan dan ujian hafalan berkala.</p>

  <h4>E. Menyusun Target Hafalan yang Realistis</h4>
  <p>Penetapan target hafalan sering menjadi tantangan tersendiri — ada sekolah yang menetapkan target terlalu tinggi sehingga membebani siswa, dan ada pula yang menetapkan target terlalu rendah sehingga potensi siswa tidak berkembang optimal. Target yang realistis perlu mempertimbangkan tahapan kemampuan siswa — pada tahap awal fokus pada penguatan bacaan lewat tahsin, baru kemudian menambah hafalan secara bertahap — serta menyesuaikannya dengan waktu pembelajaran Qur'an yang tersedia di sekolah, misalnya sekolah dengan alokasi lima hingga sepuluh jam per minggu biasanya dapat merancang target yang stabil tanpa membebani siswa.</p>
  <p>Penambahan hafalan baru juga harus selalu diimbangi dengan murojaah, sebab target hafalan yang baik tidak hanya memperhatikan jumlah ayat yang dihafal, tetapi juga memastikan waktu yang cukup untuk menjaga hafalan lama. Target hafalan yang realistis biasanya disusun bertahap dalam beberapa tingkat — target tahunan, semester, bulanan, hingga mingguan — misalnya dengan menetapkan target bulanan sekitar 4-5 halaman dan batas minimal di akhir jenjang. Pembagian seperti ini membantu guru memantau perkembangan siswa secara terstruktur sekaligus memberikan motivasi bagi siswa untuk mencapai target yang telah ditetapkan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari struktur kurikulum Qur'an per jenjang yang dibahas di bab ini, jenjang mana di sekolah Anda yang kurikulum Qur'annya masih perlu dirancang lebih sistematis?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, pada jenjang SD, jenis hafalan apa yang biasanya menjadi fokus awal siswa?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Surat-surat pendek dari juz 30</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Seluruh 30 juz Al-Qur'an sekaligus</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hanya ayat-ayat tentang hukum fikih</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah SMP menetapkan target hafalan yang sama persis untuk seluruh siswa tanpa mempertimbangkan kemampuan membaca dan waktu belajar yang tersedia. Berdasarkan bab ini, apa dampak yang paling mungkin terjadi?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Target yang tidak disesuaikan dengan kemampuan siswa dan waktu belajar berisiko membebani sebagian siswa sehingga menurunkan motivasi, atau sebaliknya terlalu ringan sehingga potensi siswa tidak berkembang optimal</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak masalah karena target hafalan sebaiknya selalu disamakan tanpa pengecualian bagi seluruh siswa</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Hal ini akan otomatis meningkatkan kualitas bacaan seluruh siswa tanpa risiko apa pun</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin menyusun desain kurikulum Qur'an yang jelas, tetapi bingung harus mulai dari mana. Berdasarkan bab ini, urutan langkah yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menentukan tujuan pembelajaran terlebih dahulu, lalu menyusun materi secara bertahap, menentukan metode pembelajaran, dan melengkapi dengan sistem evaluasi</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menyusun sistem evaluasi tanpa menentukan tujuan pembelajaran lebih dulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup menetapkan target hafalan setinggi mungkin tanpa memikirkan materi, metode, atau evaluasi</button>
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
<h2 class="reveal">Sistem Operasional Program Tahfidz</h2>
<p class="lede reveal">Kurikulum yang baik di atas kertas perlu didukung oleh sistem operasional harian yang jelas — standar mutu, mekanisme pembelajaran, cara menangani tantangan siswa, hingga sistem monitoring yang membuat program tahfidz benar-benar berjalan, bukan sekadar rencana.</p>

<div class="card reveal">
  <h4>A. Standar Mutu Program Tahfidz</h4>
  <p>Keberhasilan program tahfidz tidak hanya ditentukan oleh banyaknya hafalan siswa, melainkan oleh standar mutu yang jelas dalam pelaksanaannya. Tanpa standar yang jelas, program tahfidz sering berjalan tidak terukur — target hafalan berbeda antar kelas, kualitas bacaan tidak terpantau, dan evaluasi hafalan menjadi kurang sistematis. Standar kualitas bacaan mencakup ketepatan makhraj huruf, penerapan hukum tajwid, dan kelancaran membaca, dibina lewat kegiatan tahsin yang berjalan konsisten sebelum siswa menambah hafalan baru.</p>
  <p>Standar target hafalan perlu disesuaikan dengan usia siswa, kemampuan membaca, serta waktu yang tersedia dalam jadwal pembelajaran — disusun realistis dan bertahap, misalnya per semester atau per tahun sesuai jenjang, agar siswa memiliki motivasi tanpa merasa terbebani. Standar mutu ini dilengkapi sistem evaluasi hafalan yang terstruktur, lewat setoran kepada guru, ujian hafalan berkala, atau murojaah yang dipantau, sehingga sekolah dapat memastikan hafalan siswa benar-benar kuat dan tidak hanya bersifat sementara.</p>

  <h4>B. Mekanisme Pembelajaran Tahfidz</h4>
  <p>Program tahfidz yang berjalan tanpa mekanisme jelas sering menghadapi kendala — siswa tidak tahu tahapan yang harus dilalui, guru memiliki cara pembinaan berbeda-beda, dan perkembangan hafalan sulit dipantau sistematis. Mekanisme pembelajaran tahfidz mencakup tiga komponen utama: alur setoran hafalan, sistem murojaah, dan evaluasi hafalan. Dalam alur setoran, siswa mempersiapkan hafalan baru secara mandiri atau dengan bimbingan guru, lalu menyetorkannya untuk diperiksa dan dikoreksi jika masih ada kesalahan.</p>
  <p>Sistem murojaah yang baik biasanya memiliki jadwal yang jelas, membagi waktu antara menambah hafalan baru dan mengulang hafalan lama, dilakukan lewat pengulangan mandiri, murojaah bersama teman, atau setoran hafalan lama kepada guru. Evaluasi hafalan dilakukan secara berkala, misalnya lewat ujian pada akhir semester, untuk mengetahui perkembangan hafalan siswa sekaligus memantau efektivitas program tahfidz secara keseluruhan — jika banyak siswa kesulitan mencapai target, sekolah dapat menyesuaikan metode atau sistem pembinaan yang digunakan.</p>

  <h4>C. Penanganan Tantangan dalam Program Tahfidz</h4>
  <p>Tantangan dalam program tahfidz adalah hal yang wajar karena menghafal Al-Qur'an membutuhkan kesabaran, ketekunan, dan pembinaan berkelanjutan. Salah satu tantangan yang sering muncul adalah siswa yang tertinggal dari target hafalan, yang jika tidak ditangani dapat membuat siswa kehilangan kepercayaan diri dan motivasi. Sekolah perlu memberikan pendekatan pembinaan yang lebih fleksibel — pendampingan tambahan, penyesuaian target, atau metode yang lebih sesuai kemampuan siswa tersebut — sehingga siswa yang tertinggal tetap punya kesempatan berkembang tanpa merasa terbebani.</p>
  <p>Tantangan lain adalah menjaga motivasi siswa dalam proses yang membutuhkan kesungguhan jangka panjang, yang dapat diatasi lewat suasana pembelajaran yang menyenangkan, penghargaan atas pencapaian, serta penanaman pemahaman tentang keutamaan menghafal Al-Qur'an sebagai amal mulia. Dalam semua ini, guru memegang peran sentral — tidak hanya sebagai pengajar, tetapi juga pembimbing yang sabar dan telaten, memberikan koreksi bacaan, serta menjadi sumber motivasi lewat nasihat dan keteladanan dalam mencintai Al-Qur'an.</p>

  <h4>D. Sistem Monitoring dan Pelaporan Program Tahfidz</h4>
  <p>Program tahfidz yang baik tidak hanya bergantung pada pembelajaran di kelas, tetapi juga pada sistem monitoring dan pelaporan yang terstruktur. Tanpa sistem ini, sekolah akan kesulitan mengetahui perkembangan hafalan siswa secara akurat, karena guru mungkin memiliki gambaran umum tetapi tidak memiliki data yang jelas dari waktu ke waktu. Komponen yang perlu dipantau mencakup jumlah hafalan siswa, kualitas bacaan (makhraj dan tajwid), konsistensi murojaah, serta kedisiplinan dalam setoran hafalan.</p>
  <p>Selain monitoring, sekolah memerlukan sistem pelaporan berkala — biasanya setiap bulan atau semester — yang memuat jumlah hafalan yang dicapai, kualitas bacaan, dan catatan kegiatan murojaah, disampaikan kepada pimpinan sekolah maupun orang tua agar mereka dapat memberikan dukungan yang lebih baik di rumah. Format pencatatan sederhana, misalnya tabel berisi nama siswa, hafalan baru, hafalan yang dimurojaah, kualitas bacaan, dan catatan guru, membantu sekolah mencatat perkembangan secara sistematis sekaligus mengevaluasi efektivitas program tahfidz secara keseluruhan.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari standar mutu, mekanisme pembelajaran, penanganan tantangan, hingga sistem monitoring program tahfidz yang dibahas di bab ini, komponen mana yang paling lemah di sekolah Anda saat ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, apa fungsi utama sistem murojaah dalam mekanisme pembelajaran tahfidz?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menjaga agar hafalan yang telah diperoleh tetap kuat dan tidak mudah hilang</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menambah jumlah hafalan baru secepat mungkin</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menggantikan kebutuhan evaluasi hafalan oleh guru</button>
  </div>
  <div class="quiz-q">
    <p>Seorang siswa kesulitan mengejar target hafalan teman-temannya dan mulai kehilangan kepercayaan diri. Berdasarkan bab ini, pendekatan apa yang paling tepat dilakukan guru?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Membiarkan siswa tersebut tertinggal karena target hafalan tidak boleh disesuaikan untuk alasan apa pun</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memberikan pendampingan yang lebih personal dan fleksibel, seperti menyesuaikan target hafalan dan metode pembelajaran sesuai kemampuan siswa tersebut</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Mengeluarkan siswa tersebut dari program tahfidz karena dianggap tidak mampu</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah mencatat hafalan siswa secara manual dan tidak rapi, sehingga guru kesulitan mengetahui perkembangan tiap siswa dari waktu ke waktu, dan orang tua juga tidak mendapat informasi yang jelas. Berdasarkan bab ini, solusi paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Menerapkan sistem monitoring dan pelaporan yang terstruktur, mencakup jumlah hafalan, kualitas bacaan, konsistensi murojaah, dan laporan berkala kepada orang tua</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Menghentikan seluruh pencatatan karena dianggap tidak penting bagi program tahfidz</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Cukup mengandalkan ingatan guru tanpa perlu format pencatatan apa pun</button>
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
<h2 class="reveal">Membangun Budaya Qur'ani di Sekolah</h2>
<p class="lede reveal">Program dan sistem yang rapi akan lebih bermakna jika Al-Qur'an juga hidup dalam keseharian sekolah — lewat pembiasaan konsisten, keteladanan nyata, serta program-program yang memperkuat kecintaan seluruh warga sekolah terhadap Al-Qur'an.</p>

<div class="card reveal">
  <h4>A. Prinsip Membangun Budaya Qur'ani</h4>
  <p>Budaya Qur'ani adalah kondisi ketika nilai-nilai Al-Qur'an tidak hanya dipelajari dalam kegiatan pembelajaran, tetapi juga hadir dalam kebiasaan, sikap, dan interaksi sehari-hari di sekolah. Budaya seperti ini tidak terbentuk instan, melainkan berkembang lewat konsistensi dalam pembiasaan — hal-hal sederhana seperti membaca Al-Qur'an sebelum memulai pelajaran, mengulang hafalan bersama, atau mendengarkan pesan singkat dari ayat Al-Qur'an, asalkan dilakukan secara rutin dan konsisten.</p>
  <p>Faktor kedua adalah keteladanan guru dan pimpinan sekolah — siswa belajar bukan hanya dari apa yang diajarkan, tetapi juga dari apa yang mereka lihat dalam perilaku para pendidik. Guru yang menunjukkan kecintaan terhadap Al-Qur'an dan pimpinan yang menjadikannya landasan pengambilan keputusan akan memberikan pengaruh kuat terhadap siswa. Faktor ketiga adalah lingkungan sekolah yang mendukung, misalnya lewat kehadiran ayat-ayat Al-Qur'an di ruang kelas, ruang tilawah, serta suasana interaksi yang santun dan saling menghormati. Ketika ketiga faktor ini berjalan bersama, budaya Qur'ani dapat tumbuh secara alami dan membantu sekolah membentuk generasi yang menjadikan Al-Qur'an sebagai pedoman hidup, bukan hanya materi pelajaran.</p>

  <h4>B. Rutinitas Qur'ani di Sekolah</h4>
  <p>Budaya Qur'ani tidak hanya dibangun lewat program besar, tetapi juga lewat rutinitas sederhana yang dilakukan konsisten setiap hari. <strong>Tilawah harian</strong>, misalnya membaca beberapa ayat atau satu halaman sebelum pembelajaran dimulai, membantu siswa memulai aktivitas belajar dengan suasana tenang, meningkatkan kelancaran bacaan secara bertahap, dan menanamkan kecintaan terhadap Al-Qur'an sebagai bagian dari rutinitas hidup, bukan sekadar tugas atau ujian.</p>
  <p><strong>Murojaah bersama</strong> — mengulang hafalan secara berkelompok di bawah bimbingan guru — memiliki peran penting menjaga hafalan tetap kuat, sekaligus membangun suasana belajar yang kolaboratif ketika siswa saling mendukung dan memotivasi. Selain itu, <strong>nasihat dan refleksi Qur'an</strong> — pesan singkat dari ayat yang dikaitkan dengan kehidupan sehari-hari siswa, disampaikan sebelum pelajaran atau setelah tilawah — membantu siswa memahami bahwa ayat-ayat Al-Qur'an memiliki pesan yang relevan dengan kehidupan mereka, misalnya tentang kejujuran, kesabaran, atau kepedulian terhadap sesama.</p>

  <h4>C. Program Penguatan Budaya Qur'an</h4>
  <p>Selain rutinitas harian, budaya Qur'ani dapat diperkuat lewat program khusus yang dirancang berkala dan melibatkan seluruh warga sekolah. <strong>Pekan Qur'an</strong>, misalnya, adalah kegiatan tematik selama periode tertentu berisi lomba tilawah, lomba tahfidz, kajian ayat, atau kegiatan kreatif bertema Qur'ani, yang juga dapat melibatkan orang tua untuk melihat langsung perkembangan anak-anak mereka. <strong>Khataman Qur'an bersama</strong> merayakan selesainya pembacaan Al-Qur'an secara keseluruhan oleh siswa atau seluruh warga sekolah, menumbuhkan rasa syukur sekaligus mempererat hubungan antara siswa, guru, dan orang tua yang hadir dalam kegiatan tersebut.</p>
  <p><strong>Wisuda tahfidz</strong> adalah bentuk penghargaan bagi siswa yang telah mencapai target hafalan tertentu, memiliki nilai simbolis penting sebagai pengakuan atas kesungguhan mereka, sekaligus memotivasi siswa lain untuk mengikuti jejak yang sama. Acara ini biasanya diisi penyetoran hafalan di hadapan orang tua dan pesan motivasi tentang menjaga hubungan dengan Al-Qur'an — melalui program-program seperti ini, Al-Qur'an tidak hanya hadir dalam rutinitas harian, tetapi juga menjadi pusat kegiatan yang memberikan pengalaman bermakna bagi seluruh warga sekolah.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Dari rutinitas dan program penguatan budaya Qur'ani yang dibahas di bab ini, kebiasaan sederhana apa yang bisa mulai diterapkan secara konsisten di sekolah Anda mulai minggu ini?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Sebutkan tiga rutinitas Qur'ani harian yang dibahas pada bab ini.</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Tilawah harian, murojaah bersama, serta nasihat dan refleksi Qur'an</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Ujian harian, rapat guru, dan kerja bakti</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Olahraga pagi, upacara bendera, dan makan siang bersama</button>
  </div>
  <div class="quiz-q">
    <p>Seorang kepala sekolah rutin berpidato tentang pentingnya Al-Qur'an, tetapi guru-guru di sekolah tersebut jarang terlihat membaca Al-Qur'an atau menunjukkan akhlak yang baik dalam keseharian. Berdasarkan bab ini, apa yang paling mungkin menghambat tumbuhnya budaya Qur'ani di sekolah ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Kurangnya keteladanan nyata dari guru dan pimpinan, padahal budaya Qur'ani sangat bergantung pada apa yang dilihat siswa dari perilaku para pendidik, bukan hanya dari kata-kata</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Pidato kepala sekolah yang terlalu sering menjadi penyebab utama kegagalan budaya Qur'ani</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Budaya Qur'ani tidak ada hubungannya dengan keteladanan guru dan pimpinan</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah ingin memperkuat budaya Qur'ani tetapi bingung memulai dari kegiatan besar seperti wisuda tahfidz tahunan. Berdasarkan bab ini, saran paling tepat adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Memulai dari rutinitas sederhana dan konsisten seperti tilawah harian dan murojaah bersama, karena konsistensi pembiasaan kecil menjadi kunci sebelum menambah program besar</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Langsung menyelenggarakan wisuda tahfidz besar-besaran tanpa membangun rutinitas harian terlebih dahulu</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Budaya Qur'ani tidak memerlukan rutinitas apa pun, cukup mengandalkan acara tahunan</button>
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
<h2 class="reveal">Roadmap Implementasi Sekolah Qur'an</h2>
<p class="lede reveal">Bab penutup ini merangkum semuanya menjadi peta langkah praktis — mulai dari audit kondisi awal, menyusun desain program, menjalankan penguatan 90 hari, memperkuat sistem dan budaya, hingga evaluasi berkelanjutan — agar transformasi menjadi Sekolah Qur'an berjalan realistis, bukan sekadar wacana.</p>

<div class="card reveal">
  <h4>A. Audit Awal Program Qur'an Sekolah</h4>
  <p>Langkah pertama membangun atau memperkuat Sekolah Qur'an adalah melakukan audit awal untuk memahami kondisi riil program yang ada, sebelum melakukan perbaikan — sebab banyak sekolah langsung menambah target atau membuat program baru tanpa memahami kekuatan dan kelemahan sistem yang sudah berjalan, sehingga perubahan yang dilakukan sering tidak tepat sasaran. Audit ini meliputi identifikasi kondisi program yang berjalan (bentuk program, alokasi waktu, metode, target hafalan), penilaian kualitas SDM (kemampuan membaca guru, pengalaman membimbing, komitmen), serta kajian sistem pembelajaran dan evaluasi yang sudah diterapkan.</p>
  <p>Audit awal juga perlu mengidentifikasi kekuatan program (misalnya dukungan pimpinan, minat siswa yang tinggi, keterlibatan orang tua) dan tantangan yang dihadapi (keterbatasan waktu, kurangnya guru Qur'an, sistem yang belum terstruktur). Hasil audit sebaiknya dirangkum dalam peta kondisi awal berupa tabel sederhana yang memuat aspek yang dinilai, kondisi saat ini, dan catatan perbaikan, sehingga sekolah dapat melihat jelas area mana yang sudah baik dan mana yang perlu diperkuat sebagai dasar merancang langkah-langkah pada tahap berikutnya.</p>

  <h4>B. Menyusun Desain Program Qur'an</h4>
  <p>Setelah audit awal, langkah berikutnya adalah menyusun desain program Qur'an sebagai blueprint yang menjadi pedoman pengembangan — sebab banyak program Qur'an berjalan spontan tanpa perencanaan matang, bergantung pada inisiatif guru tertentu, sehingga menjadi tidak stabil ketika terjadi pergantian guru atau kepemimpinan. Desain ini dimulai dari menentukan arah dan tujuan program (meningkatkan kemampuan membaca, membangun hafalan bertahap, menumbuhkan kecintaan, membentuk karakter Qur'ani), dilanjutkan menentukan model program yang akan diterapkan sesuai kondisi sekolah.</p>
  <p>Langkah selanjutnya adalah menyusun struktur program (kegiatan tahsin, tahfidz, murojaah, dan pembinaan karakter) serta menentukan sistem pembinaan dan metode pembelajaran yang akan digunakan, seperti metode setoran hafalan, sistem murojaah rutin, dan pembagian kelompok belajar. Agar mudah dipahami seluruh tim, rancangan ini sebaiknya dirangkum dalam blueprint program Qur'an — dokumen sederhana berisi tujuan program, model, struktur, metode, dan sistem evaluasi — sehingga seluruh tim sekolah memiliki acuan yang sama dalam menjalankan program secara konsisten dan berkelanjutan.</p>

  <h4>C. Implementasi 90 Hari Penguatan Program</h4>
  <p>Setelah desain program tersusun, implementasinya sebaiknya dilakukan secara bertahap lewat pendekatan roadmap 90 hari, karena perubahan yang terlalu drastis sekaligus justru sulit dipertahankan dalam jangka panjang. Pada <strong>30 hari pertama</strong>, fokusnya adalah pembenahan fondasi — menyosialisasikan desain program kepada seluruh guru, menyusun jadwal pembelajaran yang lebih terstruktur, menetapkan target hafalan realistis, serta menyiapkan format monitoring perkembangan hafalan.</p>
  <p>Pada <strong>hari ke-31 hingga ke-60</strong>, fokusnya bergeser ke penguatan sistem pembelajaran — menjalankan setoran hafalan secara terjadwal, memperkuat kegiatan murojaah, menerapkan sistem monitoring, dan melakukan evaluasi awal terhadap metode yang digunakan, dengan pimpinan sekolah memantau pelaksanaan secara berkala. Pada <strong>hari ke-61 hingga ke-90</strong>, sekolah memasuki tahap stabilisasi — mengevaluasi perkembangan hafalan siswa, menyesuaikan target jika diperlukan, memperkuat kegiatan pembiasaan Qur'ani, serta memberikan apresiasi kepada siswa yang menunjukkan perkembangan baik. Implementasi 90 hari bukanlah tujuan akhir, melainkan fondasi awal sebelum sekolah melanjutkan ke tahap penguatan sistem yang lebih luas.</p>

  <h4>D. Penguatan Sistem dan Budaya Qur'an</h4>
  <p>Setelah implementasi 90 hari, program Qur'an perlu dikembangkan menjadi bagian dari sistem pendidikan yang lebih kokoh — sebab banyak program berjalan baik di awal, tetapi menurun karena tidak didukung sistem yang kuat. Penguatan ini mencakup menstabilkan sistem pembelajaran (konsistensi tahsin-tahfidz, setoran teratur, murojaah terjadwal, monitoring berjalan), memperkuat peran guru lewat pelatihan tahsin-tahfidz, panduan pembelajaran yang seragam, dan pertemuan rutin tim guru Qur'an untuk berbagi pengalaman.</p>
  <p>Sekolah juga perlu mengembangkan budaya Qur'ani dalam keseharian (tilawah harian, murojaah bersama, nasihat Qur'ani, kegiatan tematik) serta mengintegrasikan program Qur'an ke dalam sistem manajemen sekolah secara menyeluruh — memasukkannya dalam perencanaan pendidikan, menjadikan capaiannya sebagai indikator mutu sekolah, dan melibatkan orang tua dalam pembinaan hafalan. Tahap akhir penguatan ini adalah menjadikan program Qur'an sebagai identitas sekolah, sehingga masyarakat mulai melihat sekolah tersebut sebagai lembaga dengan karakter pendidikan yang kuat dan konsisten.</p>

  <h4>E. Evaluasi dan Pengembangan Berkelanjutan</h4>
  <p>Tahap terakhir dari roadmap adalah memastikan program terus berkembang lewat evaluasi berkala dan pengembangan berkelanjutan, bukan berhenti setelah tahap implementasi awal. Evaluasi dilakukan setiap semester atau tahun ajaran, mencakup perkembangan hafalan siswa, kualitas bacaan, efektivitas metode pembelajaran, serta konsistensi pelaksanaan tahsin, tahfidz, dan murojaah — dengan data dari monitoring, evaluasi bacaan, laporan program, dan masukan guru serta orang tua dijadikan dasar objektif untuk perbaikan, bukan sekadar asumsi.</p>
  <p>Pengembangan berkelanjutan juga mencakup peningkatan kapasitas guru lewat pelatihan tahsin-tahfidz dan forum diskusi antarguru, serta pengembangan program secara bertahap — misalnya menambah kajian tafsir sederhana atau kegiatan refleksi ayat setelah tahsin-tahfidz berjalan baik, tanpa harus mengubah semuanya sekaligus. Pada akhirnya, keberhasilan Sekolah Qur'an sangat bergantung pada komitmen jangka panjang dari pimpinan, guru, dan seluruh warga sekolah — sebab pendidikan berbasis Al-Qur'an bukan program yang dapat dibangun dalam waktu singkat, melainkan membutuhkan kesungguhan dan konsistensi yang terus dijaga dari waktu ke waktu.</p>
</div>

<div class="reflect-box reveal">
  <h3>Refleksi</h3>
  <p>Jika sekolah Anda memulai roadmap implementasi 90 hari seperti pada bab ini, apa yang menurut Anda akan menjadi tantangan terbesar pada 30 hari pertama?</p>
  <textarea placeholder="Tulis refleksi Anda di sini..."></textarea>
</div>

<div class="card reveal">
  <h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>
  <div class="quiz-q">
    <p>Menurut bab ini, roadmap penguatan program Qur'an dalam tahap implementasi awal dirancang dalam periode berapa hari?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">7 hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">90 hari</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">365 hari</button>
  </div>
  <div class="quiz-q">
    <p>Sebuah sekolah langsung ingin mengubah total sistem Qur'aninya dalam waktu singkat tanpa melalui tahap audit awal. Berdasarkan bab ini, apa risiko dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Perubahan berisiko tidak tepat sasaran karena tidak didasarkan pada pemahaman kondisi nyata program, kekuatan, dan tantangan yang sedang dihadapi sekolah saat ini</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Tidak ada risiko karena audit awal hanyalah langkah formalitas yang bisa dilewati</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Perubahan justru akan lebih cepat berhasil tanpa perlu memahami kondisi awal program</button>
  </div>
  <div class="quiz-q">
    <p>Setelah 90 hari implementasi awal berjalan dan program mulai stabil, sebuah sekolah bingung apa langkah selanjutnya. Berdasarkan bab ini, tahap yang perlu dilakukan berikutnya adalah...</p>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Program dapat dihentikan karena 90 hari dianggap sebagai tahap akhir dari seluruh proses</button>
    <button class="quiz-opt" onclick="answerQuiz(this,true)">Melakukan penguatan sistem dan budaya Qur'an secara berkelanjutan, dilanjutkan evaluasi berkala dan pengembangan program secara bertahap</button>
    <button class="quiz-opt" onclick="answerQuiz(this,false)">Sekolah cukup mengulang tahap audit awal tanpa perlu melakukan penguatan sistem apa pun</button>
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
<p class="eyebrow reveal">Evaluasi Akhir</p>
<h2 class="reveal">Asesmen Komprehensif</h2>
<p class="lede reveal">Uji pemahaman Anda terhadap seluruh isi buku lewat 20 soal berikut. Skor Anda akan muncul setelah menjawab seluruh soal dan menekan tombol "Periksa Jawaban Saya" di bagian akhir.</p>

<div class="card reveal" id="asesmenCard">

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 1, pendidikan Qur'ani pada masa Rasulullah SAW dilakukan dengan cara...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Ayat dipelajari sedikit demi sedikit lalu diamalkan sebelum melanjutkan ke ayat berikutnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Seluruh Al-Qur'an dihafal sekaligus tanpa pemahaman makna</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Pendidikan Qur'ani baru dimulai setelah masa Rasulullah wafat</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah mengklaim dirinya "Sekolah Qur'an" hanya karena memiliki jam pelajaran tahfidz yang banyak, padahal mata pelajaran lain sama sekali tidak menyentuh nilai-nilai Al-Qur'an. Berdasarkan Bab 1, penilaian yang tepat terhadap klaim ini adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Klaim tersebut belum tepat karena Sekolah Qur'an sejati menjadikan Al-Qur'an sebagai fondasi seluruh sistem pendidikan, bukan sekadar menambah jam hafalan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Klaim tersebut sudah sepenuhnya tepat karena jam tahfidz adalah satu-satunya syarat menjadi Sekolah Qur'an</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Klaim tersebut tidak relevan dibahas karena semua sekolah Islam otomatis disebut Sekolah Qur'an</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Bab 2 menjelaskan bahwa Living Qur'an (Pilar Kedua) berfokus pada...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menghidupkan nilai-nilai Al-Qur'an dalam berbagai mata pelajaran dan bidang ilmu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menambah jumlah jam pelajaran tahfidz sebanyak mungkin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh mata pelajaran umum dengan pelajaran tafsir</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Seorang guru piket sering menasihati siswa yang bertengkar dengan mengaitkan nasihatnya pada kisah dan ayat Al-Qur'an secara santai, bukan lewat ceramah formal. Berdasarkan Bab 2, praktik guru ini termasuk contoh dari...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dialog Qur'an non-formal, yaitu komunikasi personal sehari-hari yang menghadirkan nilai-nilai Al-Qur'an</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program Qur'an, karena berkaitan langsung dengan hafalan siswa</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Living Qur'an, karena terjadi di luar jam pelajaran resmi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah memiliki program tahfidz yang kuat dan guru-guru yang sering mengaitkan pelajaran dengan nilai Al-Qur'an, tetapi komunikasi sehari-hari antara guru dan siswa masih kaku dan jarang menyentuh nilai-nilai Qur'ani. Berdasarkan konsep sinergi tiga pilar pada Bab 2, pilar apa yang paling perlu diperkuat?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Dialog Qur'an, karena nilai-nilai Al-Qur'an belum cukup hadir dalam interaksi dan komunikasi sehari-hari di sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program Qur'an, karena hafalan siswa dianggap belum mencukupi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang perlu diperkuat karena dua pilar sudah cukup untuk sinergi yang sempurna</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Model Sekolah Qur'an yang menggabungkan program Qur'an, integrasi nilai dalam pembelajaran, serta pembangunan budaya Qur'ani sekaligus disebut...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Model integratif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Model tahsin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Model tahfidz</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah baru berdiri dengan dua guru yang kompetensi tahfidznya masih terbatas dan waktu pembelajaran Qur'an yang sempit. Berdasarkan Bab 3, keputusan paling bijak dalam menentukan model adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memulai dengan model yang lebih sederhana sesuai kapasitas SDM dan waktu yang tersedia, lalu mengembangkannya secara bertahap menuju model yang lebih komprehensif</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menerapkan model integratif penuh tanpa mempertimbangkan kapasitas SDM</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak perlu memilih model apa pun karena semua sekolah otomatis menjalankan model yang sama</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah memiliki program tahfidz yang berkualitas, tetapi tidak pernah menjelaskan kepada calon orang tua apa yang menjadi keunggulan program tersebut dibanding sekolah lain. Berdasarkan Bab 3, langkah yang perlu segera dilakukan adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Merumuskan dan mengomunikasikan positioning program Qur'an secara jelas dan konsisten agar masyarakat memahami keunggulan dan identitas sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menutup program tahfidz karena dianggap tidak memiliki nilai jual</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Membiarkan situasi ini karena positioning dianggap tidak penting bagi Sekolah Qur'an</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 4, tiga komponen yang perlu berjalan secara terpadu dan seimbang dalam kurikulum Qur'an adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tahsin, tahfidz, dan murojaah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tahsin, ujian akhir, dan rapor</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tahfidz, olahraga, dan kesenian</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah menyusun kurikulum Qur'an yang menargetkan hafalan sangat tinggi pada jenjang SD tanpa mempertimbangkan bahwa siswa masih dalam tahap penguatan bacaan dasar. Berdasarkan struktur kurikulum per jenjang pada Bab 4, apa yang salah dari pendekatan ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kurikulum tidak disesuaikan dengan tahapan kemampuan siswa SD yang seharusnya masih berfokus pada fondasi bacaan dan hafalan surat-surat pendek, bukan target hafalan tinggi</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada yang salah karena target hafalan sebaiknya selalu setinggi mungkin sejak SD</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kesalahan ini hanya berlaku untuk jenjang SMA, bukan SD</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah ingin merancang desain kurikulum Qur'an tetapi belum menetapkan tujuan pembelajaran secara jelas, langsung menyusun jadwal dan metode. Berdasarkan Bab 4, apa yang perlu diperbaiki dari urutan langkah ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah perlu menetapkan tujuan pembelajaran terlebih dahulu sebagai dasar, baru menyusun materi, metode, dan sistem evaluasi secara berurutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Urutan tersebut sudah benar karena tujuan pembelajaran tidak perlu ditetapkan lebih dulu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya langsung menyusun sistem evaluasi tanpa tujuan maupun materi</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 5, apa yang menjadi fondasi utama sebelum siswa diarahkan menambah hafalan dalam jumlah besar?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Kualitas bacaan Al-Qur'an yang baik dan benar (tahsin)</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Jumlah hafalan yang sudah dicapai sebelumnya</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Usia siswa semata, tanpa mempertimbangkan kemampuan membaca</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah mencatat banyak siswa mampu menambah hafalan baru dengan cepat, tetapi hafalan lama mereka sering hilang karena jarang diulang. Berdasarkan Bab 5, akar masalah paling mungkin adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sistem murojaah belum berjalan konsisten sehingga hafalan lama tidak terjaga, meski penambahan hafalan baru berjalan lancar</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Siswa-siswa tersebut memang tidak berbakat menghafal Al-Qur'an</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Masalah ini tidak berkaitan dengan sistem murojaah sama sekali</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Orang tua siswa mengeluh tidak pernah mengetahui perkembangan hafalan anaknya di sekolah. Berdasarkan Bab 5, solusi yang paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menerapkan sistem pelaporan perkembangan hafalan secara berkala kepada orang tua, misalnya setiap bulan atau semester</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengabaikan keluhan tersebut karena laporan kepada orang tua dianggap tidak diperlukan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Meniadakan program tahfidz karena dianggap sulit dipantau</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 6, kegiatan seperti pekan Qur'an, khataman bersama, dan wisuda tahfidz termasuk dalam...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program penguatan budaya Qur'an yang dilakukan secara berkala</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Rutinitas harian yang wajib dilakukan setiap hari</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Standar mutu program tahfidz</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah sekolah rutin mengadakan tilawah harian, tetapi guru dan pimpinan sekolah jarang menunjukkan sikap santun dan kecintaan pada Al-Qur'an dalam keseharian mereka. Berdasarkan Bab 6, apa yang paling menghambat tumbuhnya budaya Qur'ani secara utuh di sekolah ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Lemahnya keteladanan dari guru dan pimpinan, padahal budaya Qur'ani sangat dipengaruhi oleh apa yang dilihat siswa dari perilaku para pendidik</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tilawah harian yang terlalu sering justru menjadi penyebab utama masalah ini</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Keteladanan guru dan pimpinan tidak berkaitan dengan budaya Qur'ani</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Menurut Bab 7, langkah pertama sebelum menyusun desain program Qur'an yang baru adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Melakukan audit awal terhadap kondisi program Qur'an yang sedang berjalan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Langsung menetapkan target hafalan setinggi mungkin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengganti seluruh guru Qur'an yang ada di sekolah</button>
  </div>

  <div class="assess-q" data-correct="2">
    <p>Sebuah sekolah berhasil menjalankan implementasi 90 hari penguatan program dengan baik, lalu menganggap seluruh proses sudah selesai dan berhenti melakukan evaluasi lebih lanjut. Berdasarkan Bab 7, apa risiko dari sikap ini?</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Tidak ada risiko karena 90 hari sudah menjadi tahap akhir pengembangan Sekolah Qur'an</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Program berisiko mengalami penurunan kualitas karena keberhasilan Sekolah Qur'an membutuhkan evaluasi berkala dan pengembangan berkelanjutan, bukan berhenti setelah 90 hari pertama</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Sekolah sebaiknya mengulang audit awal setiap minggu tanpa perlu tahap lain</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Sebuah yayasan ingin memperkuat program Qur'an di sekolahnya tetapi bingung mulai dari mana karena banyak aspek yang terasa perlu diperbaiki sekaligus. Berdasarkan roadmap pada Bab 7, saran paling tepat adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Memulai dari audit awal untuk memahami kondisi nyata program, lalu menyusun desain program, mengimplementasikannya bertahap dalam 90 hari, dan dilanjutkan penguatan sistem serta evaluasi berkelanjutan</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Mengubah seluruh aspek program secara serentak dalam waktu satu minggu</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Menunggu hingga seluruh guru sempurna sebelum memulai perubahan apa pun</button>
  </div>

  <div class="assess-q" data-correct="1">
    <p>Berdasarkan keseluruhan isi buku ini, fondasi paling mendasar yang membedakan Sekolah Qur'an yang unggul dari sekolah yang sekadar memiliki program tahfidz adalah...</p>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Al-Qur'an dijadikan pusat dari seluruh sistem pendidikan — mulai dari visi, kurikulum, budaya, hingga interaksi sehari-hari — bukan sekadar salah satu program tambahan di sekolah</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Jumlah juz yang berhasil dihafal siswa dalam waktu sesingkat mungkin</button>
    <button class="quiz-opt" onclick="selectAssessAnswer(this)">Banyaknya piala lomba tahfidz yang dimenangkan oleh sekolah</button>
  </div>

  <button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">✓ Periksa Jawaban Saya</button>
  <p class="assess-result" id="asesmenResult"></p>
</div>
`

};
