/* Konten Buku 40 â€” Menangani Komplain dengan Elegan */
(() => {
  const chapter = (no, title, lede, sections, reflection, quiz) => `
<p class="eyebrow reveal">Bab ${no}</p>
<h2 class="reveal">${title}</h2>
<p class="lede reveal">${lede}</p>
<div class="card reveal">${sections.map(([heading, body]) => `<h4>${heading}</h4><p>${body}</p>`).join('')}</div>
<div class="reflect-box reveal"><h3>Refleksi</h3><p>${reflection}</p><textarea placeholder="Tulis refleksi Anda di sini..."></textarea></div>
<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>${quiz.map(([q, correct, a, b]) => `<div class="quiz-q"><p>${q}</p><button class="quiz-opt" onclick="answerQuiz(this,true)">${correct}</button><button class="quiz-opt" onclick="answerQuiz(this,false)">${a}</button><button class="quiz-opt" onclick="answerQuiz(this,false)">${b}</button></div>`).join('')}</div>
<button class="done-btn" id="doneBtn-bab${no}" onclick="markDone('bab${no}')">✓ Tandai Bab Ini Selesai</button><p class="seal" id="seal-bab${no}">✓ Bab ${no} selesai dibaca</p><div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;
  const assess = (items) => `
<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2><p class="lede reveal">Jawab seluruh soal setelah menuntaskan buku. Skor akan ditampilkan setelah semua jawaban diperiksa.</p><div class="card reveal">${items.map(([q, c, a, b]) => `<div class="assess-q" data-correct="1"><p>${q}</p><button class="quiz-opt" onclick="selectAssessAnswer(this)">${c}</button><button class="quiz-opt" onclick="selectAssessAnswer(this)">${a}</button><button class="quiz-opt" onclick="selectAssessAnswer(this)">${b}</button></div>`).join('')}<button class="done-btn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div><div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>`;
  const chapters = [
    ['Memahami Komplain di Lingkungan Sekolah Islam','Komplain bukan gangguan yang harus dibungkam, melainkan sinyal bahwa ada jarak antara harapan pemangku kepentingan dan pengalaman yang mereka rasakan di sekolah.',[
      ['A. Hakikat Komplain','Komplain adalah ungkapan ketidakpuasan dari orang tua, siswa, guru, karyawan, atau masyarakat ketika layanan, informasi, maupun perlakuan yang diterima tidak sesuai harapan. Nada penyampaiannya boleh beragam, tetapi sekolah perlu membaca inti pesannya dengan tenang: ada kebutuhan yang belum dipahami atau dipenuhi.'],
      ['B. Bentuk dan Akar Masalah','Keluhan dapat muncul secara langsung, melalui pesan pribadi, rapat, atau komentar publik; dapat pula tersembunyi dalam sikap menarik diri dan ketidakpercayaan. Akar persoalan sering bukan satu peristiwa tunggal, melainkan informasi yang tidak jelas, proses yang lambat, pengalaman layanan yang tidak konsisten, atau hubungan yang sudah lama renggang.'],
      ['C. Sumber Komplain yang Beragam','Orang tua membawa perhatian terhadap pendidikan anak, siswa merasakan keadilan dan keamanan sehari-hari, sedangkan guru serta staf memahami hambatan kerja dari dalam. Karena tiap pihak memiliki sudut pandang berbeda, sekolah tidak boleh menilai komplain hanya dari siapa yang berbicara; yang perlu diperiksa adalah fakta, dampak, dan harapan perbaikannya.']
    ],'Komplain apa yang paling sering muncul di sekolah Anda, dan kebutuhan apa yang sebenarnya sedang ingin disampaikan di baliknya?',[
      ['Menurut bab ini, komplain pada dasarnya adalah…','sinyal adanya kesenjangan antara harapan dan pengalaman layanan','serangan yang harus segera dibantah','bukti bahwa sekolah selalu gagal'],
      ['Orang tua mengeluhkan perubahan jadwal melalui grup. Respons awal yang paling tepat adalah…','menerima pesan dengan tenang, mengumpulkan fakta, lalu menjelaskan tindak lanjut','menghapus pesannya agar diskusi berhenti','menyuruh orang tua mencari informasi sendiri'],
      ['Seorang siswa diam-diam enggan mengikuti kegiatan karena merasa diperlakukan tidak adil. Apa langkah awal yang paling bijak?','membuka ruang percakapan aman untuk memahami pengalamannya sebelum menarik kesimpulan','menunggu sampai ia membuat masalah besar','langsung menyatakan bahwa ia terlalu sensitif']
    ]],
    ['Landasan Komunikasi Humanis dalam Pelayanan Sekolah Islam','Komunikasi yang baik tidak berhenti pada kata-kata sopan. Ia menuntut kehadiran, kejelasan, empati, dan adab agar pihak yang mengeluh tetap merasa dihargai sekalipun masalahnya belum dapat selesai seketika.',[
      ['A. Empati sebagai Titik Berangkat','Empati berarti berusaha memahami perasaan dan kebutuhan pihak lain tanpa buru-buru menyetujui semua tuntutannya. Kalimat seperti “Kami memahami kekhawatiran Bapak/Ibu” membuka ruang dialog, karena lawan bicara merasa didengar sebelum sekolah menjelaskan kebijakan atau fakta yang ada.'],
      ['B. Mendengar Aktif dan Klarifikasi','Mendengar aktif dilakukan dengan memberi kesempatan pihak lain menuntaskan cerita, mencatat fakta, lalu merangkum kembali inti persoalan untuk memastikan pemahaman. Klarifikasi harus berupa pertanyaan yang tidak menghakimi, sehingga percakapan bergerak dari asumsi menuju data yang dapat diverifikasi.'],
      ['C. Adab, Kejujuran, dan Batas Profesional','Pelayanan yang Islami menuntut kelembutan sekaligus amanah. Sekolah perlu berkata jujur bila ada kekeliruan, menjelaskan batas kewenangan secara santun, menjaga kerahasiaan siswa, dan tidak menjanjikan hal yang belum pasti hanya agar percakapan cepat berakhir.']
    ],'Dalam percakapan sulit, kebiasaan komunikasi apa yang perlu Anda perbaiki agar pihak lain merasa benar-benar didengar?',[
      ['Mendengar aktif dilakukan dengan…','membiarkan pihak lain menjelaskan, merangkum inti, lalu mengklarifikasi fakta','langsung menawarkan solusi sebelum memahami masalah','mengalihkan pembicaraan ke kesalahan pihak pengadu'],
      ['Mengapa sekolah tidak boleh menjanjikan hasil sebelum fakta lengkap?','janji yang tergesa dapat merusak kepercayaan bila tidak dapat dipenuhi','karena komplain sebaiknya selalu diabaikan','agar sekolah tampak lebih berkuasa'],
      ['Staf administrasi menerima pesan yang emosional pada malam hari. Respons profesional pertama adalah…','mengakui penerimaan pesan dan menetapkan waktu tindak lanjut yang jelas','membalas dengan nada yang sama','meneruskan tangkapan layar ke grup umum']
    ]],
    ['Strategi Menangani Komplain secara Efektif dan Humanis','Penanganan komplain yang elegan memiliki alur: menerima dengan tenang, memahami secara utuh, menentukan tindak lanjut, lalu memastikan perbaikan benar-benar terasa.',[
      ['A. Terima, Tenangkan, dan Catat','Sambut komplain tanpa defensif. Beri ruang pihak yang mengeluh untuk berbicara, gunakan nada stabil, dan catat waktu, pihak terkait, kronologi, serta dampaknya. Sikap awal ini mencegah percakapan berubah menjadi pertarungan emosi.'],
      ['B. Telusuri Fakta dan Rumuskan Solusi','Setelah masalah dipahami, sekolah perlu memeriksa informasi dari pihak terkait secara adil. Solusi sebaiknya menjawab kebutuhan nyata, menyebut penanggung jawab serta tenggat, dan membedakan hal yang dapat segera diperbaiki dari hal yang membutuhkan keputusan lebih lanjut.'],
      ['C. Tindak Lanjut dan Dokumentasi','Komplain tidak selesai saat pertemuan berakhir. Dokumentasikan kesepakatan, kabari perkembangan pada waktu yang dijanjikan, dan evaluasi apakah solusi benar-benar mengurangi masalah. Catatan yang rapi membantu sekolah belajar tanpa mempermalukan pihak mana pun.']
    ],'Pada tahap mana penanganan komplain di sekolah Anda paling sering berhenti: mendengar, menyelidiki, menyelesaikan, atau menindaklanjuti?',[
      ['Langkah pertama saat menerima komplain adalah…','menerima dengan tenang dan mencatat inti persoalan','menentukan siapa yang salah di depan pengadu','menjelaskan aturan tanpa mendengar'],
      ['Mengapa solusi perlu memiliki penanggung jawab dan tenggat?','agar tindak lanjut dapat dipantau dan tidak berhenti sebagai janji','agar masalah dapat dipindahkan ke pihak lain','agar komunikasi tidak perlu dilakukan lagi'],
      ['Keluhan tentang guru ternyata melibatkan informasi yang saling bertentangan. Apa yang harus dilakukan pimpinan?','memeriksa fakta dari beberapa pihak secara adil sebelum menyimpulkan','membenarkan pihak yang paling keras','langsung menyebarkan kesimpulan ke grup']
    ]],
    ['Mengubah Komplain Menjadi Kepercayaan','Kepercayaan tidak pulih hanya karena sekolah berkata maaf. Ia tumbuh ketika sekolah bertanggung jawab, terbuka terhadap pembelajaran, dan menunjukkan perubahan yang dapat dirasakan.',[
      ['A. Minta Maaf secara Bertanggung Jawab','Permintaan maaf yang baik menyebut dampak yang diakui, bukan sekadar berkata “maaf jika tersinggung”. Bila sekolah memang keliru, akui bagian tersebut tanpa mencari kambing hitam; bila fakta belum lengkap, sampaikan bahwa pemeriksaan sedang dilakukan dengan sungguh-sungguh.'],
      ['B. Transparansi dan Pemulihan','Jelaskan langkah yang ditempuh, alasan kebijakan yang relevan, serta batas informasi yang harus dijaga demi privasi. Transparansi bukan berarti membuka semua rahasia, melainkan memastikan pihak terkait tidak dibiarkan menebak-nebak apa yang sedang dilakukan sekolah.'],
      ['C. Jadikan Masukan sebagai Perbaikan Sistem','Komplain yang berulang adalah data tentang sistem. Sekolah dapat meninjau alur informasi, standar layanan, kapasitas staf, maupun aturan yang membingungkan, lalu memasukkan perbaikannya ke rapat evaluasi dan pelatihan tim.']
    ],'Pernahkah sekolah Anda berhasil memulihkan kepercayaan setelah komplain? Tindakan nyata apa yang paling menentukan?',[
      ['Permintaan maaf yang bertanggung jawab perlu…','mengakui dampak dan diikuti langkah perbaikan','dibuat panjang agar terdengar meyakinkan','disertai pembelaan terhadap semua kesalahan'],
      ['Komplain berulang tentang informasi pembayaran paling tepat dibaca sebagai…','data untuk memperbaiki alur komunikasi dan layanan','alasan untuk menghentikan pertanyaan orang tua','kesalahan pribadi setiap pengadu'],
      ['Setelah kesalahan jadwal terjadi, sekolah sudah meminta maaf. Agar kepercayaan pulih, sekolah perlu…','memberi pembaruan berkala dan menunjukkan perbaikan jadwal yang nyata','menganggap masalah otomatis selesai','meminta orang tua tidak membahasnya lagi']
    ]],
    ['Membangun Pelayanan Prima di Sekolah Islam','Pelayanan prima adalah pengalaman yang konsisten: warga sekolah mudah mendapat informasi, diperlakukan hormat, dan tahu ke mana harus meminta bantuan ketika menghadapi kendala.',[
      ['A. Standar Layanan yang Jelas','Sekolah perlu menyepakati standar respons, bahasa komunikasi, alur eskalasi, serta siapa yang berwenang menjawab setiap jenis pertanyaan. Standar tidak dibuat untuk menjadikan staf kaku, tetapi agar mutu layanan tidak bergantung pada siapa yang sedang bertugas.'],
      ['B. Memetakan Perjalanan Pengguna','Amati pengalaman orang tua dan siswa sejak mencari informasi, mendaftar, mengikuti kegiatan, hingga menyampaikan kebutuhan. Dari pemetaan ini, sekolah dapat menemukan titik yang membingungkan atau melelahkan dan merancang perbaikan yang lebih sederhana.'],
      ['C. Menguatkan Kapasitas Tim','Staf dan guru membutuhkan latihan komunikasi, pengetahuan prosedur, serta ruang saling memberi umpan balik. Pelayanan prima lahir ketika tim memahami tujuan bersama dan tidak saling melempar persoalan saat berhadapan dengan warga sekolah.']
    ],'Titik layanan mana yang paling perlu dipetakan di sekolah Anda agar pengalaman orang tua dan siswa lebih mudah?',[
      ['Tujuan standar layanan adalah…','menjaga mutu respons tetap konsisten','membatasi staf agar tidak boleh membantu','membuat semua masalah menjadi urusan pimpinan'],
      ['Mengapa perjalanan pengguna perlu dipetakan?','agar sekolah menemukan titik pengalaman yang membingungkan atau melelahkan','agar sekolah dapat menambah formulir sebanyak mungkin','agar layanan hanya fokus pada pendaftaran'],
      ['Dua staf memberi jawaban berbeda tentang prosedur izin. Perbaikan paling tepat adalah…','menyepakati standar dan sumber informasi bersama','membiarkan orang tua memilih jawaban yang disukai','menyalahkan salah satu staf di hadapan orang tua']
    ]],
    ['Membangun Budaya Sekolah yang Humanis dan Responsif','Komplain akan ditangani lebih baik bila seluruh sekolah memiliki budaya yang tidak alergi terhadap masukan, berani bertanggung jawab, dan saling menguatkan dalam memperbaiki layanan.',[
      ['A. Kepemimpinan yang Membuka Ruang','Pimpinan memberi contoh dengan menerima kabar sulit tanpa mempermalukan pembawa pesan. Ketika guru dan staf merasa aman melaporkan kendala, masalah dapat dibenahi lebih dini sebelum sampai menjadi komplain besar dari luar.'],
      ['B. Kolaborasi Lintas Peran','Komplain jarang selesai oleh satu unit saja. Wali kelas, guru mata pelajaran, administrasi, BK, dan pimpinan perlu memiliki jalur koordinasi yang jelas supaya penanganan tidak berputar-putar dan pihak pengadu tidak harus mengulang cerita berkali-kali.'],
      ['C. Evaluasi yang Menumbuhkan','Rapat evaluasi sebaiknya membahas pola, bukan mencari sosok untuk disalahkan. Ukur kecepatan respons, kejelasan informasi, penyelesaian kasus, dan kepuasan pihak terkait; gunakan temuannya sebagai bahan perbaikan prosedur serta pelatihan berikutnya.']
    ],'Bagaimana Anda dapat membantu tim memandang masukan sebagai kesempatan belajar, bukan ancaman?',[
      ['Budaya responsif dimulai ketika pimpinan…','menerima kabar sulit tanpa mempermalukan pembawa pesan','menutup semua jalur masukan','hanya mendengar staf yang setuju dengannya'],
      ['Mengapa penanganan komplain perlu koordinasi lintas peran?','karena masalah siswa dan layanan sering menyentuh lebih dari satu unit','karena satu unit tidak boleh memahami masalah','agar pengadu harus mengulang ceritanya'],
      ['Rapat evaluasi komplain yang sehat sebaiknya…','mencari pola perbaikan sistem, bukan kambing hitam','membahas kesalahan orang secara terbuka','menunda semua tindak lanjut sampai akhir tahun']
    ]]
  ];
  const items = [
    ['Komplain menunjukkan…','ada kesenjangan antara harapan dan pengalaman layanan','sekolah tidak perlu mendengar masukan','semua pengadu berniat buruk'],
    ['Pihak yang dapat menyampaikan komplain adalah…','orang tua, siswa, guru, staf, atau masyarakat','hanya kepala sekolah','hanya orang tua'],
    ['Sikap awal yang tepat saat menerima komplain ialah…','tenang dan mendengarkan','membantah secepatnya','menghindari pengadu'],
    ['Mendengar aktif mencakup…','merangkum dan mengklarifikasi inti masalah','menyela untuk memberi aturan','mengalihkan topik'],
    ['Empati berarti…','memahami pengalaman pihak lain tanpa tergesa menghakimi','menyetujui semua tuntutan','mengabaikan emosi'],
    ['Klarifikasi diperlukan untuk…','membawa percakapan dari asumsi ke fakta','menambah ketegangan','menutup dialog'],
    ['Janji tindak lanjut harus…','realistis serta memiliki tenggat','dibuat sebanyak mungkin','disampaikan tanpa catatan'],
    ['Dokumentasi komplain membantu…','memantau solusi dan pembelajaran sistem','menyebarkan masalah','menambah hukuman'],
    ['Permintaan maaf yang baik diikuti…','tindakan perbaikan','pembelaan panjang','pengalihan isu'],
    ['Transparansi berarti…','memberi penjelasan proses sambil menjaga privasi','membuka seluruh data pribadi','tidak memberi kabar sama sekali'],
    ['Komplain berulang perlu dipakai sebagai…','data perbaikan layanan','alasan menutup kanal masukan','bukti pengadu tidak loyal'],
    ['Standar layanan menjaga…','konsistensi mutu respons','staf tidak dapat membantu','masalah tidak dilaporkan'],
    ['Pemetaan perjalanan pengguna membantu sekolah…','menemukan titik layanan yang menyulitkan','memperpanjang proses','fokus pada satu unit saja'],
    ['Pelatihan tim diperlukan agar…','anggota memahami prosedur dan komunikasi','setiap orang bekerja sendiri','jawaban selalu berbeda'],
    ['Pimpinan yang humanis akan…','membuka ruang pelaporan masalah','mempermalukan pembawa kabar','menolak kritik'],
    ['Koordinasi lintas peran mencegah…','pengadu mengulang cerita dan kasus terabaikan','adanya solusi bersama','catatan tindak lanjut'],
    ['Evaluasi yang sehat berfokus pada…','pola perbaikan','kambing hitam','menyimpan masalah'],
    ['Jika fakta belum lengkap, sekolah sebaiknya…','menyampaikan pemeriksaan sedang dilakukan','membuat janji palsu','menuduh pengadu'],
    ['Keragaman sumber komplain perlu dipandang sebagai…','beragam sudut pandang yang harus diperiksa adil','alasan membedakan hak layanan','beban satu unit saja'],
    ['Hasil akhir penanganan komplain yang elegan adalah…','kepercayaan dan layanan yang lebih baik','percakapan yang cepat berhenti','kemenangan salah satu pihak']
  ];
  window.BOOK_CONTENT = Object.fromEntries(chapters.map((c, i) => [`bab${i + 1}`, chapter(i + 1, ...c)]));
  window.BOOK_CONTENT.asesmen = assess(items);
})();

