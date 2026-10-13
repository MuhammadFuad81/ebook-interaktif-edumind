/* eBook Interaktif Edumind 060. Naskah editorial, bukan urutan transkrip. */
(() => {
  const base = 'https://media.edumind.id/ebook-edumind/060-sistem-mutu-sekolah-islam/';
  const visual = (file, alt, caption) => '<figure class="chapter-visual"><img src="' + base + file + '?v=20261013-1" alt="' + alt + '" width="1600" height="900" loading="lazy" decoding="async"><figcaption>' + caption + '</figcaption></figure>';
  const table = (caption, headers, rows) => '<div class="table-wrap"><table><caption>' + caption + '</caption><thead><tr>' + headers.map(x => '<th scope="col">' + x + '</th>').join('') + '</tr></thead><tbody>' + rows.map(row => '<tr>' + row.map((x,i) => i === 0 ? '<th scope="row">' + x + '</th>' : '<td>' + x + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  const note = (title, text) => '<aside class="mutu-note"><strong>' + title + '</strong><p>' + text + '</p></aside>';
  const flow = (title, steps) => '<figure class="mutu-flow"><figcaption>' + title + '</figcaption><ol>' + steps.map(([h,p]) => '<li><strong>' + h + '</strong><span>' + p + '</span></li>').join('') + '</ol></figure>';
  const chapters = [
    {
      title: 'Mutu Dimulai dari Janji yang Dapat Dibuktikan',
      short: 'Janji dan Pengalaman Nyata',
      lede: 'Sekolah menyampaikan janji ketika menerima seorang murid. Mutu terlihat ketika janji itu hadir dalam pengalaman belajar, layanan sehari-hari, dan perkembangan anak yang dapat dijelaskan kepada keluarganya.',
      visual: visual('chapter-01.webp', 'Tiga guru perempuan berjilbab panjang menelaah bukti pembelajaran dan siklus perbaikan sekolah', 'Budaya mutu tumbuh ketika tim menelaah bukti bersama dan mengambil tanggung jawab atas perbaikan.'),
      sections: [
        ['Ketika Sekolah Ramai tetapi Arah Belum Terjaga', [
          'Bayangkan sebuah sekolah yang terlihat sibuk. Poster kegiatan memenuhi koridor, kelas mengikuti lomba, dan media sosial selalu diperbarui. Namun saat orang tua bertanya mengapa kemampuan membaca anaknya belum berkembang, jawaban berbeda muncul dari wali kelas, koordinator, dan pimpinan. Aktivitas banyak belum tentu membentuk sistem mutu. Sistem diperlukan agar sekolah mengetahui hasil yang dituju, proses yang menopangnya, dan tindakan ketika hasil belum tercapai.',
          'Gedung, jumlah alumni, nama tokoh, dan reputasi pendiri dapat membuka kepercayaan awal. Kepercayaan itu akan rapuh apabila hanya melekat pada fasilitas atau sosok tertentu. Sekolah yang bertahan membangun cara kerja yang dapat dilanjutkan oleh tim berikutnya: standar jelas, guru dibantu untuk mencapainya, dan masalah ditangani sebelum menjadi kebiasaan.'
        ]],
        ['Tiga Pegangan yang Saling Menguatkan', [
          'Pegangan pertama adalah memahami kebutuhan murid dan harapan keluarga. Orang tua mungkin menginginkan kemampuan membaca Al-Qur’an, adab, akademik, bahasa, atau kesiapan melanjutkan pendidikan. Sekolah perlu mendengarkan dengan sungguh-sungguh, kemudian menerjemahkannya menjadi layanan yang sesuai misi, tahap perkembangan anak, dan kapasitas yang benar-benar tersedia. Murid merupakan subjek pendidikan; kebutuhannya tidak boleh hilang hanya karena orang dewasa menginginkan angka yang mudah dipamerkan.',
          'Pegangan kedua adalah partisipasi. Mutu hafalan, misalnya, dipengaruhi guru Al-Qur’an, wali kelas, jadwal, suasana kelas, komunikasi dengan keluarga, dan dukungan di rumah. Bahkan petugas antar-jemput dapat membantu kebiasaan murajaah melalui pengaturan yang aman dan disepakati. Peran ini tidak mengubah sopir menjadi guru penilai, dan kegiatan mendengar bacaan tidak boleh mengganggu keselamatan berkendara. Partisipasi berarti setiap orang mengetahui kontribusi yang sesuai perannya.',
          'Pegangan ketiga adalah perbaikan berkelanjutan. Sekolah tidak menunggu hasil akhir buruk untuk bereaksi. Ia meninjau tanda-tanda awal, mencoba perbaikan, memeriksa hasil, lalu mempertahankan cara yang terbukti membantu. Yang diperbaiki bukan hanya individu yang melakukan kesalahan, tetapi juga jadwal, alat, arahan, koordinasi, atau kebijakan yang membuat kesalahan mudah berulang.'
        ]],
        ['Tiga Ranah Mutu Sekolah Islam', [
          'Mutu pembelajaran menjadi inti: murid memperoleh pengalaman yang aman, bermakna, dan membuat kompetensinya berkembang. Mutu layanan memastikan kebutuhan keluarga, murid, guru, tenaga kependidikan, serta pengelola ditangani dengan konsisten. Mutu promosi menjaga kesesuaian antara yang disampaikan kepada calon keluarga dan yang sungguh tersedia setelah murid bergabung.',
          'Ketiganya saling memengaruhi. Pembelajaran kuat dapat menumbuhkan rekomendasi orang tua; layanan yang buruk dapat merusak kepercayaan terhadap pembelajaran yang sebenarnya baik. Promosi yang berhasil tetapi menjanjikan kapasitas di luar kemampuan sekolah akan menambah komplain. Karena itu, pemasaran perlu mengikuti kenyataan pendidikan, sementara temuan layanan dan penerimaan murid dapat memberi masukan untuk pembenahan program.'
        ], table('Ranah, penerima manfaat, dan bukti yang perlu diperiksa', ['Ranah', 'Pertanyaan mutu', 'Bukti awal'], [
          ['Pembelajaran', 'Apa yang berkembang pada setiap murid?', 'Hasil kerja, asesmen, bacaan, observasi, kebutuhan dukungan'],
          ['Layanan', 'Apakah kebutuhan ditangani dengan aman dan jelas?', 'Pengalaman pengguna, waktu respons, penyelesaian, masalah berulang'],
          ['Promosi', 'Apakah janji sesuai kapasitas dan menarik keluarga yang cocok?', 'Isi informasi, alasan memilih/menolak, transisi pendaftaran, retensi']
        ])],
        ['Memandang Keberhasilan dengan Utuh', [
          'Kemenangan lomba adalah satu bentuk capaian, bukan wakil seluruh murid. Murid yang sebelumnya takut membaca dan kini berani mencoba juga menunjukkan perkembangan penting. Demikian pula penerimaan murid yang meningkat belum otomatis menjadi tanda mutu; jumlah yang melebihi kapasitas guru justru dapat menurunkannya. Tentukan ukuran keberhasilan yang menjaga pembelajaran, keberlanjutan sekolah, dan martabat anak sekaligus.'
        ]]
      ],
      reflection: 'Pilih satu janji yang paling sering disampaikan sekolah Anda. Pengalaman murid apa yang membuktikannya, dan bukti apa yang masih belum tersedia?',
      quiz: [
        {q:'Tiga pegangan manajemen mutu adalah…',o:['Gedung, lomba, dan iklan','Kebutuhan pengguna, partisipasi, dan perbaikan berkelanjutan','Inspeksi, hukuman, dan ranking'],c:1},
        {q:'Sekolah menang banyak lomba, tetapi murid yang kesulitan belum mendapat dukungan. Kesimpulan paling tepat adalah…',o:['Capaian lomba sudah mewakili semua murid','Promosi perlu ditambah','Mutu perlu dilihat dari perkembangan dan layanan bagi seluruh murid'],c:2},
        {q:'Tim promosi menjanjikan kelas kecil saat kapasitas guru tidak mencukupi. Tindakan yang tepat…',o:['Selaraskan janji dengan kapasitas dan rencana pemenuhan','Tetap menerima sebanyak mungkin','Tunggu komplain dahulu'],c:0}
      ]
    },
    {
      title: 'Menyatukan SPMI, TQM, dan Siklus Perbaikan',
      short: 'SPMI, TQM, dan Siklus Mutu',
      lede: 'Penjaminan mutu internal memberi sekolah cara menata pekerjaan. TQM menghidupkan keterlibatan dan tanggung jawab bersama. Keduanya bertemu ketika standar dilaksanakan, hasil diperiksa, dan perbaikan benar-benar kembali ke kelas.',
      sections: [
        ['Dari Pemeriksaan menuju Pencegahan', [
          'Inspeksi dapat menemukan ruang yang kotor atau kelas yang belum siap, tetapi hasilnya bergantung pada saat pemeriksa datang. Quality control memeriksa keluaran: apakah lulusan mencapai standar atau apakah layanan selesai sesuai ketentuan. Keduanya tetap berguna, tetapi tidak cukup untuk menjamin pengalaman yang konsisten dari hari ke hari.',
          'Quality assurance menata proses agar hasil yang diharapkan lebih mungkin tercapai. Jika sekolah menargetkan tiga juz dengan mutu bacaan tertentu pada akhir SD, perlu ada tahapan realistis di tiap kelas, asesmen awal, waktu murajaah, guru yang mampu membimbing, dan bantuan bagi murid yang tertinggal. TQM memperluasnya menjadi tanggung jawab seluruh organisasi. Pemeriksaan, pengendalian hasil, penjaminan proses, dan TQM bukan pilihan yang saling membatalkan; sekolah memerlukan kombinasi sesuai risiko dan kebutuhan.'
        ]],
        ['Apa yang Dimaksud SPMI dalam Buku Ini', [
          'Sistem Penjaminan Mutu Internal, atau SPMI, digunakan di sini untuk menyebut mekanisme sekolah menilai dirinya sendiri dan memperbaiki layanan secara berulang. Kerangka kerjanya meliputi pemetaan kondisi, perencanaan pemenuhan, pelaksanaan, evaluasi, dan penetapan perbaikan atau standar yang lebih baik. Sekolah tidak cukup memiliki satu rapat evaluasi tahunan; setiap tahap perlu pemilik, data, keputusan, dan waktu tinjau.',
          'Istilah ini perlu dibaca dalam konteks pendidikan dasar dan menengah. Permendikbud Nomor 28 Tahun 2016 tentang sistem penjaminan mutu telah dicabut oleh Permendikbudristek Nomor 9 Tahun 2022 tentang evaluasi sistem pendidikan. Karena itu, buku ini tidak menjadikan aturan 2016 sebagai kewajiban hukum yang masih berlaku. Praktik internal perlu diselaraskan dengan evaluasi diri, Rapor Pendidikan, perencanaan berbasis data, standar nasional, serta ketentuan yang berlaku bagi sekolah atau madrasah. Siklus penjaminan mutu perguruan tinggi juga tidak perlu disalin seolah merupakan ketentuan sekolah.'
        ]],
        ['TQM Membuat Sistem Dijalankan oleh Orang', [
          'Total Quality Management menempatkan mutu sebagai cara mengelola organisasi secara menyeluruh. Fokus pengguna, kepemimpinan, keterlibatan orang, keterhubungan proses, bukti, komunikasi, dan pembenahan perlu muncul dalam pekerjaan nyata. Kepala sekolah dapat mengumumkan target, tetapi target tidak akan bergerak jika guru tidak memahami alasannya, petugas tidak mendapat alat, dan koordinator tidak memiliki wewenang menyelesaikan hambatan.',
          'Dalam sekolah Islam, nilai amanah, ihsan, adab, dan musyawarah memberikan dasar etis bagi sistem itu. Amanah tampak ketika laporan tidak direkayasa. Ihsan tampak pada kesungguhan memperbaiki layanan. Adab hadir saat umpan balik menghormati orang sekaligus jujur terhadap masalah. Musyawarah membawa pengetahuan pelaksana ke dalam keputusan. Nilai-nilai ini perlu diterjemahkan menjadi kebiasaan yang dapat diamati, bukan sekadar hiasan pedoman mutu.'
        ], flow('Satu siklus internal yang terhubung dengan PDCA', [
          ['Plan — Petakan dan rencanakan', 'Tentukan kebutuhan, kesenjangan, standar, prioritas, ukuran, pemilik, dan sumber daya.'],
          ['Do — Jalankan dan catat', 'Laksanakan pada skala yang disepakati; simpan bukti serta hambatan.'],
          ['Check — Evaluasi', 'Bandingkan proses dan hasil dengan ukuran awal; dengarkan pengalaman pengguna.'],
          ['Act — Perbaiki dan tetapkan', 'Adopsi cara yang efektif, perbaiki yang belum berhasil, lalu mulai siklus berikutnya.']
        ])],
        ['Tempat ISO dan Akreditasi', [
          'ISO menyediakan acuan sistem manajemen, sedangkan akreditasi merupakan penilaian eksternal menurut instrumen yang berlaku. Keduanya dapat membantu sekolah, tetapi sertifikat tidak menggantikan pekerjaan sehari-hari. Sekolah dapat mulai memperbaiki proses tanpa menunggu sertifikasi. Sebaliknya, sekolah bersertifikat tetap perlu membuktikan manfaat sistemnya bagi murid dan staf.',
          'Materi lama banyak memakai ISO 9001:2015 dan ISO 21001:2018. Pada penyuntingan Oktober 2026, katalog ISO telah memuat ISO 9001:2026 dan ISO 21001:2025; edisi 2018 untuk ISO 21001 telah digantikan. Bila sekolah menempuh sertifikasi, gunakan edisi dan ketentuan transisi yang dikonfirmasi lembaga terkait. Contoh pedoman, SOP, instruksi kerja, dan formulir dalam buku ini adalah rancangan operasional sekolah, bukan daftar klausul ISO yang wajib disalin persis.'
        ], note('Batas yang perlu dijaga', 'Satu sistem mutu bukan berarti semua acuan disamakan. Standar nasional, standar khas sekolah, persyaratan mitra, akreditasi, dan sertifikasi memiliki tujuan serta ruang lingkup berbeda. Buat peta keterkaitannya agar bukti kerja dapat digunakan secara wajar tanpa menggandakan administrasi.')]
      ],
      reflection: 'Di sekolah Anda, siklus mana yang paling lemah: memetakan kebutuhan, menyiapkan rencana, melaksanakan, mengevaluasi, atau menindaklanjuti? Berikan satu contoh.',
      quiz: [
        {q:'Quality assurance terutama membantu sekolah…',o:['Menata proses untuk mencegah masalah dan mendukung hasil','Memeriksa lulusan saja','Menghapus kebutuhan evaluasi'],c:0},
        {q:'Hubungan SPMI dan TQM yang tepat adalah…',o:['Dua sertifikat yang sama','SPMI menata siklus internal; TQM menguatkan keterlibatan serta budaya','TQM hanya tugas tim mutu'],c:1},
        {q:'Pilot berjalan, tetapi hasil belum diperiksa. Tahap yang perlu diperkuat…',o:['Membuat slogan','Membeli sertifikat','Check sebelum memutuskan tindakan berikutnya'],c:2}
      ]
    },
    {
      title: 'Membaca Kondisi dan Memilih Keunggulan yang Masuk Akal',
      short: 'Diagnosis dan Arah Keunggulan',
      lede: 'Arah mutu yang kuat mempertemukan misi sekolah, kebutuhan keluarga, dan kemampuan nyata. Sekolah perlu tahu apa yang sudah dapat diberikan, apa yang hendak dikembangkan, dan apa yang belum layak dijanjikan.',
      sections: [
        ['Mulai dari Gambaran yang Jujur', [
          'Kumpulkan bukti sebelum menambah program: capaian belajar, mutu bacaan Al-Qur’an, kehadiran, perkembangan adab, observasi kelas, komplain, kondisi guru, fasilitas, biaya, serta alasan keluarga memilih atau meninggalkan sekolah. Rapor Pendidikan membantu membaca gambaran tertentu, sementara data internal memberi kedalaman yang tidak selalu terlihat dalam satu laporan. Cocokkan angka dengan percakapan dan observasi agar masalah tidak disimpulkan dari satu sudut.',
          'SWOT dapat membantu merangkum kekuatan, kelemahan, peluang, dan ancaman, asalkan isinya spesifik. “Guru berkualitas” terlalu umum; “empat guru mampu memandu asesmen membaca dan dua telah menjadi mentor” lebih dapat ditindaklanjuti. Ancaman berupa sekolah pesaing juga perlu dijelaskan: layanan apa yang mereka tawarkan, kelompok keluarga mana yang mempertimbangkannya, dan kesenjangan apa yang dapat diperbaiki sekolah kita.'
        ]],
        ['Dua Pintu Memilih Arah', [
          'Pintu pertama adalah keunggulan yang sudah dimiliki atau mempunyai fondasi kuat. Pilihannya dapat berupa diniyah, Al-Qur’an, kepedulian lingkungan, bilingual, karakter, olimpiade, teknologi, kewirausahaan, akademik, maupun olahraga dan gerak. Daftar ini adalah kemungkinan, bukan sepuluh kewajiban. Sekolah kecil dapat lebih dipercaya karena satu kekuatan yang konsisten daripada banyak label yang belum didukung pembelajaran.',
          'Pintu kedua adalah kebutuhan masyarakat yang belum terjawab. Sebagian keluarga mencari keterpaduan ilmu dan iman; sebagian membutuhkan bahasa, akses yang lebih terjangkau, atau dukungan transisi ke pendidikan berikutnya. Perubahan minat menuju program Al-Qur’an, bilingual, atau berorientasi internasional merupakan bahan membaca pasar setempat, bukan tangga kemajuan universal yang mewajibkan setiap sekolah menuju label yang sama. Sekolah tahfizh yang kuat tidak perlu kehilangan identitas hanya untuk mengikuti tren.'
        ]],
        ['Kasus Sekolah Tahfizh: Mempertahankan Identitas dengan Bukti', [
          'Sekolah yang bertanya apakah harus menjadi tahfizh khusus atau sekolah Islam dengan program tahfizh perlu terlebih dahulu memperjelas sasaran murid, layanan akademik, mutu hafalan, dan jalur lanjutan. Keunggulan tidak cukup dinyatakan melalui jumlah juz. Periksa ketepatan bacaan, daya tahan hafalan, pemahaman yang sesuai usia, adab, kesehatan belajar, dan kemampuan akademik yang tetap terjaga.',
          'Jumlah murid yang kecil tidak otomatis membuktikan bahwa idealisme salah, tetapi juga bukan alasan mengabaikan keberlanjutan. Telusuri apakah masalahnya kurang informasi, jarak, biaya, ketidakjelasan status pendidikan, atau program yang belum sesuai kebutuhan. Bila menawarkan peluang masuk perguruan tinggi melalui prestasi tahfizh, jelaskan bahwa jalur, syarat, kuota, dan tahun penerimaan berbeda antarkampus. Jangan menjanjikan kelulusan seleksi dari satu target hafalan.'
        ]],
        ['Jika Sekolah Sekitar Lebih Dulu Unggul', [
          'Sekolah baru tidak harus mengalahkan semua sekolah sekitar pada setiap aspek. Cari kebutuhan yang belum dilayani dengan baik: pendampingan personal, komunikasi yang jelas, akses wilayah, program bertahap, atau pengalaman belajar yang lebih sesuai. Lakukan wawancara singkat dengan keluarga, amati kemampuan tim, kemudian uji tawaran pada skala terbatas. Mengikuti kebutuhan pengguna tidak sama dengan menjanjikan program sebelum siap.',
          'Program baru layak diperkenalkan sebagai rintisan dengan cakupan, jadwal, dan keterbatasan yang terbuka. Jika baru dua kelas menggunakan bahasa Inggris pada kegiatan tertentu, sampaikan keadaan itu secara tepat. Setelah guru, bahan ajar, asesmen, dan pengalaman murid siap, barulah cakupan diperluas. Mutu tumbuh melalui penambahan kemampuan; penggantian nama sekolah saja tidak membuat layanan berubah.'
        ], table('Uji kelayakan sebelum menetapkan keunggulan', ['Pertimbangan', 'Pertanyaan keputusan'], [
          ['Misi', 'Apakah program menguatkan identitas dan tujuan pendidikan?'],
          ['Kebutuhan', 'Adakah bukti kebutuhan dari murid dan keluarga sasaran?'],
          ['Kemampuan', 'Siapa yang mampu mengajar, menilai, dan mendampingi?'],
          ['Sumber daya', 'Apakah waktu, fasilitas, dan biaya dapat dipertahankan?'],
          ['Bukti', 'Bagaimana hasil dilihat, dan kapan keputusan perlu ditinjau?']
        ])]
      ],
      reflection: 'Keunggulan mana yang paling layak Anda pertahankan atau uji? Tuliskan bukti kebutuhan, kemampuan awal, dan janji yang belum boleh disampaikan.',
      quiz: [
        {q:'Data kebutuhan keluarga sebaiknya diperoleh dari…',o:['Tren media sosial saja','Wawancara, pengalaman layanan, dan bukti setempat','Dugaan pimpinan saja'],c:1},
        {q:'Sekolah tahfizh belum banyak peminat. Langkah awal paling berguna…',o:['Mengecek mutu program dan alasan keluarga sebelum mengubah identitas','Langsung menambah semua label','Menaikkan target juz tanpa asesmen'],c:0},
        {q:'Sekolah baru ingin mengenalkan bilingual tetapi guru belum siap. Pilihan yang dapat dipertanggungjawabkan…',o:['Mengaku sudah internasional','Menyalin logo mitra','Rintisan terbatas, pelatihan, dan informasi cakupan yang jujur'],c:2}
      ]
    },
    {
      title: 'Menurunkan Visi menjadi Sasaran, Program, dan Aksi',
      short: 'Visi, KPI, dan Aksi SMART',
      lede: 'Visi memberi arah, tetapi pekerjaan harian memerlukan ukuran dan keputusan yang lebih dekat. Rantai dari visi hingga kegiatan harus dapat ditelusuri, sehingga orang tidak sibuk mengerjakan hal yang tidak membantu hasil utama.',
      sections: [
        ['Satu Rantai Perencanaan', [
          'Hasil pemetaan membantu sekolah meninjau visi dan misi, menyusun rencana strategis, menetapkan sasaran mutu serta KPI, lalu merancang program dan kegiatan. Rencana aksi menjelaskan urutan kerja, penanggung jawab, sumber daya, waktu, dan bukti selesai. Visi tidak perlu diganti setiap kali ada tren; yang ditinjau adalah kecocokan strategi dan kapasitas untuk mewujudkannya.',
          'Ambil sasaran “murid mampu membaca Al-Qur’an dengan benar”. Programnya dapat berupa penguatan tahsin, kegiatannya asesmen awal dan kelompok belajar, sedangkan aksinya mencakup penyiapan rubrik, penjadwalan, penugasan guru, pelaksanaan, pemeriksaan hasil, dan dukungan lanjutan. Rapat, pelatihan, dan pembelian bahan merupakan aktivitas pendukung. Keberhasilannya tetap perlu dihubungkan dengan perkembangan bacaan murid.'
        ], flow('Dari arah besar ke pekerjaan yang dapat diperiksa', [
          ['Diagnosis → Visi dan misi', 'Kenali kebutuhan serta arah yang dijaga.'],
          ['Renstra → Sasaran dan KPI', 'Tentukan hasil, baseline, target, dan batas waktu.'],
          ['Program → Kegiatan', 'Pilih upaya yang relevan terhadap kesenjangan.'],
          ['Aksi → Bukti → Tinjau', 'Jelaskan siapa melakukan apa, kapan, dengan sumber daya apa, lalu evaluasi.']
        ])],
        ['KPI yang Memiliki Makna', [
          'Setiap indikator membutuhkan definisi, cara hitung, sumber data, periode, pemilik, dan aturan tindak lanjut. Jika sasaran ketuntasan 86 persen, jelaskan siapa yang dihitung, kompetensi apa yang dinilai, ambang ketuntasan, cara menangani murid pindahan, serta jadwal penilaian. Pada 100 murid dengan 74 tuntas menurut rubrik yang disepakati, capaian adalah 74 persen. Selisih terhadap target 86 persen adalah 12 poin persentase, bukan sekadar label “kurang baik”.',
          'Untuk sasaran adab, ibadah, Al-Qur’an, dan akademik, tentukan apakah ketuntasan dihitung per bidang atau harus memenuhi semuanya sekaligus. Jangan merata-ratakan empat persentase lalu menyebutnya jumlah murid yang tuntas pada keempat bidang. Seorang murid dapat tuntas akademik namun masih memerlukan bantuan bacaan. Laporan perlu memperlihatkan kebutuhan itu agar tindak lanjut tepat sasaran.'
        ]],
        ['SMART Menjelaskan Kualitas Sasaran', [
          'Sasaran SMART bersifat spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu. Rumusan “meningkatkan adab” dapat diperjelas menjadi “dalam delapan pekan, murid kelas III semakin konsisten menunggu giliran dan mengembalikan alat belajar menurut rubrik observasi yang disepakati”. Nilai awal dan target ditentukan setelah data tersedia. Target menantang dapat dipilih, tetapi tetap memerlukan dukungan yang masuk akal.',
          'PIC, anggaran, urutan kerja, dan waktu merupakan kelengkapan rencana aksi yang membantu menjalankan sasaran SMART. Keberadaan PIC tidak otomatis membuktikan bahwa sasaran dapat dicapai; adanya anggaran tidak otomatis membuatnya relevan. Gunakan akronim sebagai pengingat mutu rencana, bukan cara menempel lima kolom tanpa menguji hubungan sebab akibat.'
        ]],
        ['Kasus Morning Smile: Proses Bukan Hasil Murid', [
          'Program penyambutan pagi dapat diuraikan menjadi empat tindakan: guru piket hadir lebih awal, menyiapkan diri dan area, menyambut murid, lalu mencatat masalah yang perlu ditindaklanjuti. Misalnya sekolah menyepakati bobot 30, 10, 40, dan 20; jumlahnya harus 100. Jika tindakan pertama tidak terlaksana sementara tiga lainnya terpenuhi, kepatuhan proses mendapat 70. Angka itu menunjukkan pelaksanaan penyambutan, bukan bukti bahwa 70 persen murid sudah beradab.',
          'Hasil pada murid perlu diukur tersendiri melalui observasi yang relevan: keberanian meminta bantuan, rasa aman saat masuk, ketertiban antre, atau keterlambatan. Bobot dipilih berdasarkan risiko dan kontribusi terhadap tujuan, bukan hanya tugas yang dirasa paling berat. Kehadiran lebih awal mungkin penting, tetapi penyambutan yang merendahkan murid tidak boleh ditutupi skor kedatangan yang tinggi. Untuk aspek keselamatan, gunakan ketentuan wajib yang tidak dapat dikompensasikan oleh skor lain.'
        ]],
        ['Mengawal Sasaran Lintas Jenjang', [
          'Yayasan menetapkan arah bersama; PAUD, SD, dan SMP menerjemahkan indikator menurut perkembangan murid dan baseline masing-masing. Target karakter tidak dinilai dengan instrumen identik pada semua usia. Tentukan koordinator, pemilik data per unit, dan jadwal pembahasan. Jika ada hambatan anggaran atau lintas unit, yayasan menyelesaikannya melalui keputusan yang jelas, bukan sekadar meminta angka naik pada laporan berikutnya.',
          'Batasi prioritas. Tiga atau empat sasaran penting yang ditinjau serius lebih bernilai daripada puluhan KPI yang hanya dikumpulkan. Setiap pembahasan perlu berakhir dengan tindakan, pemilik, tenggat, dan bukti yang akan diperiksa pada pertemuan selanjutnya.'
        ]]
      ],
      reflection: 'Susun satu sasaran lengkap: kondisi awal, definisi capaian, target, periode, pemilik, kegiatan, dan bukti. Pisahkan indikator pelaksanaan dari hasil pada murid.',
      quiz: [
        {q:'Skor kepatuhan penyambutan 90 berarti…',o:['90 persen murid sudah beradab','90 murid masuk tepat waktu','Pelaksanaan memenuhi skor proses menurut rubrik; hasil murid perlu diukur tersendiri'],c:2},
        {q:'74 dari 100 murid tuntas dibanding target 86 persen. Selisihnya…',o:['12 poin persentase','86 murid','74 poin persentase'],c:0},
        {q:'Indikator yayasan diterapkan ke PAUD dan SMP. Praktik yang tepat…',o:['Gunakan satu rubrik tanpa penyesuaian','Sesuaikan ukuran dengan usia dan baseline sambil menjaga arah bersama','Laporkan rata-rata saja'],c:1}
      ]
    },
    {
      title: 'Membentuk Tim dan Budaya yang Membuat Mutu Menjadi Milik Bersama',
      short: 'Tim dan Budaya Mutu',
      lede: 'Tim mutu membantu sekolah menjaga arah dan menutup kesenjangan. Namun pelaksanaan tetap berada pada pemilik proses: guru, koordinator, administrasi, sarana, dan pimpinan yang bekerja saling terhubung.',
      sections: [
        ['Kepemimpinan yang Menghilangkan Hambatan', [
          'Komitmen pimpinan terlihat dari keputusan waktu, biaya, dan perhatian. Jika guru diminta melaksanakan asesmen yang lebih baik, tetapi jadwal tidak menyediakan kesempatan menelaah hasil, sistem mengirim pesan yang bertentangan. Pimpinan perlu memilih prioritas, menyiapkan kapasitas, dan menghapus kegiatan yang tidak lagi membantu. Mutu tidak tumbuh dari tuntutan tambahan yang terus menumpuk.',
          'Sekolah membutuhkan suasana yang memungkinkan orang melaporkan masalah sebelum membesar. Guru yang mengakui metode belum membantu murid harus dapat memperoleh pendampingan. Kejujuran tidak berarti semua kesalahan tanpa konsekuensi; kesengajaan menyembunyikan data atau melanggar keselamatan perlu ditangani. Bedakan kebutuhan belajar, kelemahan proses, dan pelanggaran agar respons tidak seragam.'
        ]],
        ['Peran yang Dapat Dijalankan', [
          'Yayasan menetapkan arah, menjaga sumber daya, dan meninjau keberlanjutan. Kepala sekolah bertanggung jawab atas pelaksanaan di unitnya. Koordinator kurikulum menghubungkan standar lulusan dengan pembelajaran; kesiswaan dan BK membantu perkembangan serta keselamatan murid; administrasi dan sarana memastikan layanan pendukung bekerja. Tim mutu menyatukan pemetaan, memastikan definisi indikator konsisten, memfasilitasi evaluasi, dan mengawal tindak lanjut.',
          'Pada sekolah kecil, satu orang dapat memegang beberapa peran, tetapi tanggung jawabnya tetap harus dibedakan. Tentukan siapa melaksanakan, siapa menyetujui, siapa diajak memberi masukan, dan siapa perlu menerima informasi. Untuk pekerjaan berisiko, hindari seseorang menjadi satu-satunya pelaksana sekaligus pemeriksa pekerjaannya sendiri. Tinjauan silang atau pemeriksaan pimpinan dapat menjadi kontrol yang sederhana.'
        ], table('Pembagian kerja yang mencegah mutu menjadi tugas satu meja', ['Peran', 'Tanggung jawab utama', 'Bukti yang ditinjau'], [
          ['Yayasan/pimpinan', 'Arah, prioritas, kapasitas, keputusan lintas unit', 'Capaian, risiko, kebutuhan sumber daya, tindak lanjut'],
          ['Pemilik proses', 'Menjalankan dan memperbaiki pekerjaan harian', 'Hasil kerja dan masalah pelaksanaan'],
          ['Tim mutu', 'Menjaga keterhubungan standar, data, evaluasi', 'Definisi indikator, ketuntasan tindakan, konsistensi data'],
          ['Guru/tendik', 'Memberi layanan dan masukan perbaikan', 'Bukti pengalaman murid dan pengguna layanan'],
          ['Murid/keluarga', 'Menyampaikan pengalaman dan berpartisipasi secara wajar', 'Masukan, kebutuhan, dan hasil dukungan']
        ])],
        ['Lima Pelajaran dari Kerja Tim', [
          'Tim yang kuat berkomitmen pada hasil bersama, memahami peran, mengetahui ukuran keberhasilan beserta waktunya, mempunyai kecakapan, dan bekerja sungguh-sungguh. Analogi pit stop menggambarkan pentingnya koordinasi: pekerjaan singkat dapat gagal karena satu alat belum siap atau satu peran tidak jelas. Di sekolah, tujuan koordinasi bukan membuat pendidikan serba terburu-buru, melainkan mengurangi waktu yang terbuang untuk kebingungan dan kerja ulang.',
          'Latihan, komunikasi, etika, dan penghargaan membuat peran dapat dijalankan secara konsisten. Penghargaan dapat berupa kesempatan menjadi mentor, pengakuan atas perbaikan yang berguna, atau dukungan pengembangan. Jangan hanya menghargai hasil yang mudah difoto. Petugas yang mencegah kesalahan administrasi atau guru yang menuntaskan dukungan murid berisiko juga memberikan kontribusi mutu.'
        ]],
        ['Kemitraan Keluarga dengan Batas yang Sehat', [
          'Keluarga membantu melalui rutinitas yang dipahami, komunikasi perkembangan, dan dukungan yang sesuai kemampuan. Panduan murajaah di rumah perlu sederhana: bacaan yang dilatih, waktu yang wajar, cara memberi semangat, dan kapan meminta bantuan. Hindari mengalihkan tanggung jawab pengajaran kepada orang tua atau menghukum murid karena dukungan rumah berbeda.',
          'Murid juga dapat memberi masukan mengenai pembelajaran dan layanan. Gunakan bahasa serta cara yang sesuai usia; untuk anak kecil, observasi dan percakapan ringan melengkapi informasi keluarga. Tetapkan saluran aman bagi masalah yang tidak nyaman disampaikan di depan kelas. Partisipasi berarti pengalaman mereka berpengaruh pada keputusan.'
        ]]
      ],
      reflection: 'Pilih satu pekerjaan yang sering macet karena lintas unit. Siapa pemiliknya, siapa berwenang menyelesaikan hambatan, dan informasi apa yang perlu dibagikan?',
      quiz: [
        {q:'Pelaksanaan mutu pembelajaran terutama menjadi tanggung jawab…',o:['Tim mutu saja','Guru dan pemilik proses dengan dukungan pimpinan serta tim mutu','Orang tua di rumah'],c:1},
        {q:'Guru melaporkan metode belum membantu murid. Respons awal yang tepat…',o:['Periksa bukti dan siapkan dukungan perbaikan','Hukum karena mengakui kelemahan','Hapus laporan'],c:0},
        {q:'Sekolah kecil hanya memiliki sedikit staf. Pembagian peran sebaiknya…',o:['Dihapus agar lebih cepat','Semua keputusan ditutup dari tim','Tetap jelas dengan tinjauan silang pada pekerjaan berisiko'],c:2}
      ]
    },
    {
      title: 'Membangun Proses dan Dokumen yang Benar-Benar Dipakai',
      short: 'Proses dan Dokumen Mutu',
      lede: 'Dokumen mutu bernilai ketika membantu seseorang bekerja dengan benar, memudahkan koordinasi, dan meninggalkan bukti yang berguna. Banyaknya map tidak dapat menggantikan proses yang jelas.',
      sections: [
        ['Petakan Aliran Kerja Sebelum Menulis SOP', [
          'Pilih proses penting seperti asesmen awal, supervisi, keluhan, pengadaan, atau penerimaan murid. Jelaskan masukan, pelaksana, tahapan, hasil, pengguna hasil, serta risiko. Sebuah kegiatan di kelas dapat bergantung pada ruang, alat, jadwal, dan izin penggunaan area. Tanpa peta hubungan itu, SOP guru dan SOP sarana dapat sama-sama terlihat lengkap tetapi saling bertabrakan.',
          'Gunakan pengalaman pelaksana. Tanyakan di mana pekerjaan menunggu, informasi apa yang sering hilang, dan kesalahan apa yang paling merugikan pengguna. Prosedur yang ditulis hanya dari meja pimpinan sering melewatkan kondisi nyata. Setelah draf tersedia, uji dengan orang yang belum pernah menjalankan proses; lihat apakah ia memahami keputusan dan jalur eskalasinya.'
        ]],
        ['Enam Jenis Perangkat, Fungsi Berbeda', [
          'Pedoman mutu menjelaskan arah, ruang lingkup, dan cara sistem dikelola. Kebijakan menyatakan komitmen serta batas keputusan; sasaran menetapkan hasil yang akan dicapai. Ketiganya boleh ditempatkan dalam satu paket, tetapi fungsinya tetap berbeda. SOP menjelaskan alur proses dan tanggung jawab. Instruksi kerja memberi petunjuk lebih rinci untuk tugas tertentu. Standar kerja menjelaskan kondisi atau hasil yang dinilai memenuhi persyaratan.',
          'Formulir adalah media pencatatan; setelah diisi ia menjadi rekaman hasil kerja. Lampiran melengkapi rincian seperti daftar alat, ilustrasi, atau rubrik. Pembeda SOP dan instruksi kerja tidak semata-mata apakah lintas unit atau berurutan. Instruksi mengoperasikan alat juga dapat wajib berurutan demi keselamatan. Pilih tingkat rincian menurut risiko dan kebutuhan pemakai, bukan menurut nama dokumen.'
        ], table('Contoh perangkat mutu pada kebersihan toilet', ['Perangkat', 'Contoh isi'], [
          ['Kebijakan/sasaran', 'Toilet aman, bersih, tersedia air; keluhan ditindaklanjuti'],
          ['SOP', 'Jadwal, penanggung jawab, inspeksi, pengajuan perbaikan, eskalasi'],
          ['Instruksi kerja', 'Cara menggunakan bahan pembersih dan alat pelindung dengan aman'],
          ['Standar hasil', 'Lantai aman, tidak licin; perlengkapan berfungsi; ventilasi dan sanitasi terjaga'],
          ['Formulir/rekaman', 'Checklist pemeriksaan, waktu, temuan, tindakan, pemeriksa'],
          ['Lampiran', 'Denah, daftar alat, foto acuan tanpa membuka data pribadi']
        ])],
        ['Contoh SOP Pembelajaran', [
          'Sekolah dapat memberi kerangka pembukaan, kegiatan inti, dan penutupan: memusatkan perhatian dengan adab, menghubungkan pengetahuan awal, menyampaikan tujuan, memfasilitasi aktivitas, memeriksa pemahaman, memberi umpan balik, lalu menutup dengan refleksi atau tindak lanjut. Kerangka menjamin unsur penting hadir, sambil memberi ruang guru menyesuaikan metode, bahasa, dan dukungan kepada murid.',
          'Video contoh dapat membantu guru memahami standar yang sulit dijelaskan lewat tulisan. Video itu tidak perlu menjadi skrip tunggal yang disalin setiap menit. Jelaskan tujuan tiap tahap serta variasi yang dapat diterima. Ketika supervisi dilakukan, guru sudah mengetahui acuan; pemeriksa menilai manfaat dan bukti di kelas, bukan hanya kesamaan penampilan dengan contoh.'
        ]],
        ['Kendalikan Versi dan Kurangi Pencatatan Ganda', [
          'Dokumen memerlukan judul, pemilik, versi, tanggal berlaku, persetujuan, dan tempat penyimpanan yang mudah ditemukan. Setelah direvisi, salinan lama diberi tanda agar tidak kembali dipakai. Tetapkan kapan ditinjau dan bagaimana masukan disampaikan. Tidak semua formulir perlu panjang; satu formulir singkat dapat memadai jika informasi penting, tindakan, dan pemiliknya jelas.',
          'Administrasi pembelajaran dapat memuat program tahunan dan semester, modul atau rencana pembelajaran, alokasi waktu, jurnal guru, jadwal, data murid, kehadiran, asesmen, analisis butir soal, rekap hasil, remedial dan pengayaan, rapor, komunikasi keluarga, inventaris, BK, serta supervisi. Daftar itu membantu memetakan kebutuhan, bukan kewajiban membuat semua dokumen terpisah. Sistem yang sama dapat menampung beberapa fungsi selama informasi dapat ditelusuri dan akses data murid dijaga.',
          'Bedakan dokumen perencanaan dari rekaman praktik. Modul yang lengkap belum membuktikan metode dijalankan. Checklist yang ditandatangani belum membuktikan temuan ditutup. Periksa sampel dari standar sampai pelaksanaan, hasil, dan tindakan. Jika ada data yang tidak pernah digunakan, tanyakan apakah masih perlu dikumpulkan.'
        ]]
      ],
      reflection: 'Pilih satu SOP atau formulir sekolah. Bagian mana yang membantu keputusan, bagian mana yang berulang, dan bagaimana Anda membuktikan dokumen itu benar-benar dipakai?',
      quiz: [
        {q:'Formulir yang sudah diisi menjadi…',o:['Kebijakan','Rekaman hasil kerja','Sertifikat'],c:1},
        {q:'Instruksi penggunaan alat harus berurutan demi keselamatan. Artinya…',o:['Instruksi kerja juga dapat mempunyai urutan wajib','Ia pasti bukan instruksi kerja','Urutan boleh diabaikan'],c:0},
        {q:'Modul lengkap tetapi praktik berbeda jauh. Tinjauan mutu perlu…',o:['Menambah tanda tangan','Mengganti warna formulir','Menelusuri pelaksanaan, alasan perbedaan, hasil, dan perbaikannya'],c:2}
      ]
    },
    {
      title: 'Merancang Kurikulum dari Profil Lulusan hingga Pengalaman Kelas',
      short: 'Kurikulum dari Profil Lulusan',
      lede: 'Keunggulan sekolah harus mempunyai konsekuensi pada pembelajaran. Ia terlihat pada target yang bertahap, waktu yang disediakan, guru yang disiapkan, kegiatan yang dilakukan murid, dan cara perkembangan mereka dinilai.',
      visual: visual('chapter-07.webp', 'Guru perempuan berjilbab panjang membimbing empat murid putri berjilbab panjang mengamati daun dan mencatat temuan', 'Kurikulum menjadi nyata ketika murid berpikir, mencoba, memperoleh umpan balik, dan berkembang melalui kegiatan yang sesuai tujuan.'),
      sections: [
        ['Jangan Memulai dari Jadwal', [
          'Sering kali pembahasan kurikulum langsung menjadi pembagian mata pelajaran dan jam. Padahal jadwal baru bermakna setelah sekolah tahu profil lulusan yang hendak dibentuk. Visi tentang iman, Al-Qur’an, adab, kecerdasan, atau bahasa perlu diterjemahkan menjadi kemampuan yang dapat diamati pada akhir jenjang. Kemampuan akhir itu kemudian dipetakan menjadi tahapan per kelas, tanpa menganggap semua murid berangkat dari titik yang sama.',
          'Profil lulusan perlu selaras dengan standar nasional dan tujuan pendidikan yang lebih luas. Keunggulan khas merupakan penguatan, bukan alasan mengurangi hak murid memperoleh fondasi akademik, kesehatan, keselamatan, dan dukungan sesuai kebutuhan. Untuk madrasah atau satuan dengan ketentuan khusus, sesuaikan pula dengan regulasi lembaga pembinanya.'
        ]],
        ['Sembilan Langkah yang Terhubung', [
          'Alur yang dapat dipakai adalah visi-misi; profil lulusan dan target per kelas; struktur serta muatan kurikulum; materi atau bahan ajar; metode pembelajaran; metode penilaian; kualifikasi guru; administrasi pendukung; lalu evaluasi berkala. Langkah-langkah ini saling memberi umpan balik. Jika guru belum mampu menjalankan metode, sekolah perlu menyiapkan pengembangan atau menyesuaikan tahap pelaksanaan, bukan sekadar mempertahankan rancangan di atas kertas.',
          'Susun peta yang memperlihatkan satu kompetensi lulusan, urutan perkembangannya, kegiatan belajar, waktu, guru, bukti, dan bantuan. Pada kemampuan menjelaskan temuan sains dalam bahasa Inggris, misalnya, murid perlu memahami konsep, memperoleh kosakata, berlatih menjelaskan, dan menerima umpan balik. Keberhasilan tidak dapat ditentukan hanya dari bahasa yang dipakai guru.'
        ], table('Contoh penyelarasan satu profil lulusan', ['Komponen', 'Rancangan yang dapat diperiksa'], [
          ['Profil', 'Murid membaca dengan benar dan menjaga hafalan yang telah dipelajari'],
          ['Tahapan', 'Asesmen awal → tahsin → penambahan bertahap → murajaah → asesmen berkala'],
          ['Pelaksanaan', 'Kelompok sesuai kebutuhan, waktu terlindungi, guru terlatih'],
          ['Bukti', 'Rubrik bacaan, sampel hafalan, catatan kemajuan dan dukungan'],
          ['Evaluasi', 'Bandingkan perkembangan per kelas serta kebutuhan tiap murid']
        ])],
        ['Alokasi Waktu Menunjukkan Kesungguhan', [
          'Sekolah yang menonjolkan Al-Qur’an perlu menyediakan waktu tahsin, tahfizh, murajaah, serta pemahaman yang sesuai usia. Sekolah bilingual memerlukan paparan dan penggunaan bahasa yang nyata, bukan hanya tambahan nama pada jadwal. Materi sumber memberi contoh alokasi yang cukup besar, termasuk model 48 jam pelajaran dengan pembagian 24 dan 24, serta rancangan sekitar 30–40 persen untuk beberapa program. Angka itu menunjukkan perlunya dukungan waktu; ia bukan aturan baku yang harus disalin.',
          'Periksa struktur kurikulum dan ketentuan alokasi yang berlaku, kemampuan guru, usia murid, istirahat, kebutuhan makan dan ibadah, serta beban belajar. Permendikdasmen Nomor 13 Tahun 2025 merupakan perubahan atas aturan kurikulum 2024; gunakan ketentuan serta panduan terkini untuk satuan yang bersangkutan. Hindari menambah jam tanpa melihat kualitas interaksi. Waktu lebih banyak dengan murid kelelahan dapat memberi hasil yang lebih rendah daripada kegiatan yang lebih terarah.'
        ]],
        ['Asesmen Membantu Belajar', [
          'Gunakan asesmen awal untuk menentukan kebutuhan, asesmen selama pembelajaran untuk menyesuaikan bantuan, dan asesmen akhir untuk membaca capaian. Bentuknya dapat berupa tertulis, unjuk kerja, observasi sikap, proyek, produk, portofolio, dan penilaian diri. Wawancara serta dokumentasi melengkapi bukti; tidak setiap kemampuan cocok dengan tes tertulis.',
          'Pengetahuan, keterampilan, dan perilaku perlu dinilai melalui cara yang sesuai. Adab tidak cukup dinilai dari hafalan definisi atau satu peristiwa yang kebetulan terlihat. Gunakan indikator perilaku, pengamatan berulang dalam konteks berbeda, kesempatan memperbaiki diri, dan komunikasi yang tidak melabeli anak. Remedial serta pengayaan dirancang dari kesenjangan nyata, bukan tugas tambahan yang sama untuk semua.',
          'Evaluasi kurikulum memeriksa keterlaksanaan, perkembangan murid, beban, pengalaman guru, dan kecukupan sumber daya. Bila target belum tercapai, lihat kesesuaian materi, latihan, penilaian, serta dukungan sebelum menyimpulkan bahwa murid kurang berusaha. Perubahan kecil yang tepat dapat lebih berguna daripada merombak semua mata pelajaran sekaligus.'
        ]]
      ],
      reflection: 'Pilih satu profil lulusan. Telusuri target per kelas, waktu, metode, guru, asesmen, dan bantuan bagi murid yang belum mencapai tahapan tersebut.',
      quiz: [
        {q:'Perancangan kurikulum yang terarah dimulai dari…',o:['Pembagian jam yang tersedia','Visi, profil lulusan, dan target perkembangan','Daftar buku yang sedang populer'],c:1},
        {q:'Contoh pembagian 24 dan 24 jam pada sumber sebaiknya…',o:['Disalin semua sekolah','Menjadi kewajiban nasional','Dibaca sebagai ilustrasi dan diuji terhadap aturan, usia, serta kapasitas'],c:2},
        {q:'Nilai adab murid hendak ditentukan. Bukti yang lebih tepat…',o:['Pengamatan perilaku berulang dan konteksnya','Satu kesalahan di depan guru','Jumlah hafalan definisi adab saja'],c:0}
      ]
    },
    {
      title: 'Menghidupkan Keunggulan Al-Qur’an, Adab, dan Bahasa',
      short: 'Keunggulan yang Hadir di Kelas',
      lede: 'Keunggulan yang matang tidak berhenti pada program tambahan. Ia menyatu dengan cara guru mengajar, murid berpikir dan berinteraksi, serta pengalaman yang terus berkembang dari kelas ke kelas.',
      sections: [
        ['Jalur Al-Qur’an yang Bertahap', [
          'Pengembangan Al-Qur’an dapat diawali dengan kecintaan, adab, doa, dan pengalaman yang menyenangkan pada usia awal. Berikutnya, murid membangun bacaan serta hafalan, menguatkannya melalui murajaah dan tajwid, memperdalam pemahaman yang sesuai usia, lalu belajar mengamalkan nilai serta mengambil tanggung jawab. Tahapan cinta, membangun, menguatkan, memahami, dan mengamalkan memberi arah; usia dan laju tiap anak tetap perlu diperhatikan.',
          'Jumlah juz hanyalah satu ukuran. Bacaan yang tepat, kemampuan menjaga hafalan, pemahaman, sikap saat belajar, dan hubungan yang sehat dengan Al-Qur’an juga perlu ditinjau. Murid tidak seharusnya dipaksa mengejar angka dengan mengorbankan kesehatan atau rasa aman. Jika hasil hafalan belum kokoh, perbaiki keseimbangan penambahan dan penguatan sebelum menaikkan target.'
        ]],
        ['Living Qur’an sebagai Makna dan Keteladanan', [
          'Integrasi nilai Islam dapat hadir melalui contoh, pertanyaan, pilihan tindakan, dan keteladanan. Guru sains dapat mengajak murid mengamati keteraturan ciptaan dengan teliti; guru bahasa dapat membahas komunikasi yang jujur; proyek lingkungan melatih tanggung jawab. Ayat digunakan ketika relevan, dengan bacaan benar dan pemaknaan yang dapat dipertanggungjawabkan. Tidak setiap pelajaran memerlukan tempelan ayat yang dipaksakan.',
          'Contoh pembahasan jari dalam Al-Qiyamah ayat 3–4 dapat membuka refleksi tentang kebangkitan dan kuasa Allah, kemudian kegiatan pengamatan pola jari dilaksanakan sebagai pembelajaran sains. Jangan menjadikan ayat sebagai pengganti bukti ilmiah atau menganggap ia secara teknis membahas seluruh teori biometrik. Periksa tafsir yang terpercaya dan konsultasikan dengan guru bidang keislaman jika hubungan maknanya belum jelas.',
          'Jika ayat berkaitan dengan hafalan yang telah dipelajari murid, gunakan kesempatan itu untuk murajaah dan pemahaman. Guru menyiapkan ketepatan makhraj serta tajwid, memahami konteks, dan tidak hanya menunjukkan bahwa ia hafal. Berpikir tingkat tinggi dapat dikembangkan melalui pertanyaan tentang alasan, akibat, pilihan, dan tanggung jawab, dengan tetap menghormati batas pembahasan agama serta usia murid.'
        ]],
        ['Bilingual adalah Kemampuan, Bukan Hiasan', [
          'Sekolah perlu menentukan kemampuan bahasa apa yang dituju dan dalam konteks mana. Bahasa Inggris dapat mendukung komunikasi, sains, atau matematika; bahasa Arab dapat mendukung bahasa, diniyah, dan pemahaman Al-Qur’an. Penggunaan bahasa disusun bertahap dengan dukungan visual, contoh, latihan, dan kesempatan berinteraksi. Memaksa semua pembelajaran menggunakan bahasa yang belum dipahami dapat menghambat pemahaman konsep.',
          'Pisahkan kemampuan membaca, menyimak, berbicara, dan menulis. Kerangka CEFR atau Global Scale of English dapat membantu merumuskan kemampuan, sedangkan tes penempatan membantu membaca titik awal. Rencana tahunan perlu menunjukkan perubahan kemampuan yang diharapkan, materi yang mendukung, serta cara mengujinya. Kegiatan pembukaan atau penutupan dalam bahasa asing bisa menjadi awal, tetapi tidak cukup untuk mengklaim semua murid telah bilingual.'
        ]],
        ['Memilih Mitra tanpa Mengaburkan Cakupan', [
          'Cambridge International Education berkaitan dengan jalur kurikulum dan kualifikasi sekolah, sementara Cambridge English Qualifications merupakan kualifikasi kemampuan bahasa. Cambridge English Placement Test membantu penempatan kemampuan bahasa; Global Scale of English dari Pearson adalah kerangka kemampuan dan tujuan belajar. IB, Pearson Edexcel, Oxford, dan penyedia lain mempunyai layanan serta cakupan berbeda. Nama-nama itu tidak dapat diperlakukan sebagai satu sertifikasi yang saling menggantikan.',
          'Bahan sumber menyebut sebagian pilihan awal seolah tanpa biaya. Jangan menafsirkan semua tes, ujian, pelatihan, atau kerja sama gratis. Tes Cambridge memiliki mekanisme pembelian, dan biaya pusat ujian serta layanan dapat berbeda. Periksa cakupan, izin penggunaan nama, biaya, dukungan guru, dan bentuk bukti sebelum memilih. Mengikuti tes bahasa atau membeli bahan ajar tidak otomatis memberikan status sekolah internasional atau kewenangan memakai logo mitra.',
          'Untuk arah studi ke luar negeri, termasuk kampus berbahasa Arab, bangun peta persyaratan per program dan tahun. TOEFL, IELTS, sertifikat Cambridge, hafalan, atau kemampuan bahasa Arab tidak dapat diringkas menjadi satu ambang yang berlaku untuk semua kampus. Tugas sekolah adalah menyiapkan kompetensi dan memberi informasi terverifikasi, bukan menjanjikan penerimaan.'
        ]]
      ],
      reflection: 'Apa bukti paling jujur bahwa keunggulan Al-Qur’an, adab, atau bahasa benar-benar dialami murid? Tinjau juga satu klaim promosi yang perlu diperjelas cakupannya.',
      quiz: [
        {q:'Cambridge English Placement Test terutama digunakan untuk…',o:['Menetapkan status sekolah internasional','Menempatkan kemampuan bahasa','Menggantikan kurikulum nasional'],c:1},
        {q:'Living Qur’an dalam pembelajaran sebaiknya…',o:['Menghubungkan nilai dan ayat yang relevan dengan pemaknaan yang benar','Memaksa satu ayat pada semua aktivitas','Menghapus pemeriksaan bukti sains'],c:0},
        {q:'Murid hafal banyak tetapi belum mampu menjaga bacaan. Langkah tepat…',o:['Tambah target agar terkenal','Hentikan seluruh program','Perbaiki tahsin, murajaah, serta dukungan dan ukuran mutu'],c:2}
      ]
    },
    {
      title: 'Menumbuhkan Kompetensi Guru dan Menilai Kinerja secara Adil',
      short: 'Kompetensi, Kinerja, Kompensasi',
      lede: 'Guru dapat memiliki pengetahuan dan sertifikat yang baik, tetapi kemampuan itu masih perlu diterjemahkan menjadi pengalaman belajar. Sistem mutu menghubungkan kemampuan, praktik, hasil, dukungan, dan penghargaan tanpa menyederhanakan pendidikan menjadi satu angka.',
      sections: [
        ['Tiga K yang Perlu Dibedakan', [
          'Kompetensi adalah kemampuan yang dimiliki guru: memahami materi, merancang pembelajaran, menilai, mengelola kelas, atau membimbing bacaan dan bahasa. Kinerja adalah bagaimana kemampuan itu digunakan serta kontribusinya terhadap proses dan hasil pendidikan. Kompensasi merupakan imbalan dan penghargaan menurut kebijakan yang adil. Ketiganya berhubungan, tetapi tidak identik.',
          'Guru yang fasih berbahasa Inggris belum otomatis mampu membuat murid memahami sains. Guru yang hafal banyak juz belum otomatis mampu membantu anak yang sedang belajar membaca. Penilaian kinerja perlu menelaah rancangan, interaksi, latihan, umpan balik, kemajuan, dan kebutuhan dukungan. Hasil murid juga dipengaruhi kondisi awal, kehadiran, kebutuhan belajar, fasilitas, serta dukungan; ia tidak boleh diperlakukan sebagai akibat satu guru semata.'
        ]],
        ['Kamus Kompetensi Sesuai Peran', [
          'Pilih kompetensi yang diperlukan untuk profil lulusan. Bidang utama dapat mencakup pengelolaan pembelajaran, penilaian, keislaman, bahasa, kepemimpinan kelas, komunikasi, penggunaan teknologi, dan pengembangan diri. Tidak semua guru memerlukan tingkat kemampuan identik. Guru tahsin membutuhkan kecakapan bacaan dan pengajaran yang berbeda dari pengelola sarana atau guru bidang tertentu.',
          'Level dapat dibedakan dari memahami dengan pendampingan, mampu menerapkan secara mandiri, hingga mampu menyesuaikan praktik dan membimbing rekan. Gunakan deskripsi serta contoh bukti, bukan hanya label pemula atau ahli. Banyaknya metode yang dihafal bukan ukuran keahlian terbaik; kesesuaian penggunaan dan manfaat bagi murid lebih berarti. Demikian pula sertifikat bahasa tinggi pada contoh sumber bukan kewajiban umum untuk setiap guru.'
        ], table('Contoh hubungan kompetensi, kinerja, dan dukungan', ['Kompetensi', 'Bukti praktik dan hasil', 'Dukungan yang mungkin diperlukan'], [
          ['Asesmen formatif', 'Memeriksa pemahaman dan menyesuaikan bantuan', 'Latihan membuat pertanyaan dan menelaah hasil kerja'],
          ['Tahsin', 'Memberi contoh serta koreksi bacaan yang tepat', 'Kalibrasi rubrik, mentor, dan bahan latihan'],
          ['Bahasa', 'Memberi instruksi yang dipahami dan ruang interaksi', 'Model pengajaran bahasa dan pendampingan kelas'],
          ['Manajemen kelas', 'Rutinitas aman dan partisipasi murid terjaga', 'Observasi sejawat, coaching, penataan ruang']
        ])],
        ['Pengembangan yang Berangkat dari Kesenjangan', [
          'Pelatihan tidak cukup dinilai dari jumlah peserta atau sertifikat. Pilih kebutuhan yang terlihat dalam praktik, tetapkan hasil yang hendak berubah, lalu sediakan kesempatan mencoba dengan mentor. Guru yang baru belajar menggunakan asesmen formatif dapat menyusun satu teknik, mengujinya di kelas, menelaah respons murid, dan memperbaiki rancangan pada pekan berikutnya.',
          'Kombinasikan demonstrasi, microteaching, komunitas belajar, coaching, observasi sejawat, dan lesson study sesuai kebutuhan. Dalam lesson study, perhatian diarahkan pada pembelajaran murid melalui perencanaan, pelaksanaan, dan refleksi bersama. Catat apa yang dipelajari dan bagaimana diterapkan; tidak perlu mengubah setiap pertemuan menjadi berkas panjang.'
        ]],
        ['Menghubungkan Penghargaan dengan Kontribusi', [
          'Kebijakan kompensasi mempertimbangkan tanggung jawab, kemampuan, kontribusi, masa kerja atau jenjang yang ditetapkan, dan kapasitas keuangan. Jika ada penghargaan kinerja, indikator serta prosedurnya perlu diketahui sebelumnya. Gunakan beberapa bukti, tinjauan yang konsisten, kesempatan menyampaikan konteks, dan saluran keberatan. Hindari menjadikan satu hasil ujian atau satu observasi sebagai dasar otomatis gaji.',
          'Berikan penghargaan juga terhadap kolaborasi dan perbaikan. Skema yang hanya memberi bonus pada persentase ketuntasan dapat mendorong penilaian terlalu lunak atau pengabaian murid yang membutuhkan bantuan. Ukuran hasil perlu disertai integritas asesmen, mutu proses, serta kontribusi terhadap perkembangan semua murid. Batas pembayaran, hak pekerja, dan keputusan yayasan harus tetap dipenuhi.'
        ]]
      ],
      reflection: 'Ambil satu kompetensi guru yang penting bagi keunggulan sekolah. Apa bukti kinerjanya, dukungan yang belum tersedia, dan cara menilai kontribusi secara adil?',
      quiz: [
        {q:'Kompetensi dan kinerja berbeda karena…',o:['Kompetensi adalah kemampuan; kinerja menunjukkan penerapannya dan kontribusi','Keduanya selalu sama','Kinerja hanya sertifikat'],c:0},
        {q:'Guru fasih berbahasa asing tetapi murid belum berkembang. Sekolah perlu…',o:['Menilai dari kefasihan saja','Memeriksa metode, dukungan, baseline, dan bukti kemajuan','Mengurangi gaji otomatis'],c:1},
        {q:'Insentif hanya memakai nilai ujian. Risiko yang perlu diantisipasi…',o:['Dokumen berkurang','Semua murid pasti terbantu','Penilaian bisa terlalu lunak dan murid yang memerlukan bantuan diabaikan'],c:2}
      ]
    },
    {
      title: 'Supervisi yang Mengawal Pembelajaran dan Keunggulan Sekolah',
      short: 'Supervisi dan Tindak Lanjut',
      lede: 'Supervisi menjembatani kurikulum yang dirancang dan pembelajaran yang dialami murid. Nilainya terletak pada bukti, percakapan yang membantu, dan perubahan praktik setelah kunjungan kelas.',
      sections: [
        ['Satukan Standar Umum dan Kekhasan', [
          'Instrumen supervisi perlu memeriksa kualitas pembelajaran sekaligus keunggulan sekolah. Tujuan, kesiapan murid, alur materi, partisipasi, diferensiasi, asesmen, umpan balik, serta lingkungan yang aman tetap menjadi fondasi. Adab, integrasi nilai Islam, mutu bacaan, atau penggunaan bahasa ditambahkan sesuai program dan konteks mata pelajaran.',
          'Jangan menganggap instrumen pemerintah hanya memeriksa administrasi atau seluruh aspek khas harus lebih berat daripada aspek akademik. Instrumen eksternal mempunyai ruang lingkup tersendiri dan dapat memuat mutu proses serta iklim belajar. Sekolah perlu memetakan tambahan yang belum terwakili, bukan meniadakan fondasi pembelajaran. Bobot dipilih menurut tujuan, relevansi, dan risiko; semakin banyak butir tidak otomatis semakin baik.'
        ]],
        ['Dari Delapan Belas Butir menuju Bukti yang Dapat Dipakai', [
          'Contoh sumber memuat pembukaan beradab, tujuan bernilai Islam, apersepsi, materi terstruktur, pemeriksaan pemahaman, partisipasi, diferensiasi, evaluasi tujuan, kesesuaian langkah, contoh Islami, keteladanan, kesesuaian nilai, pengelolaan kelas, respons positif, media dan teknologi, kejelasan suara, berpikir tingkat tinggi dengan Living Qur’an, serta penggunaan bahasa Inggris. Kelompokkan butir yang berdekatan agar observasi tidak sibuk mengisi centang.',
          'Untuk setiap kelompok, tetapkan apa yang perlu terlihat dan bukti yang dicatat. “Memberi umpan balik” dapat dibuktikan melalui komentar yang membantu murid mengetahui bagian yang benar, kesalahan, dan langkah perbaikan. “Murid aktif” tidak hanya berarti kelas ramai; periksa siapa yang berpikir atau mencoba, siapa yang masih tertinggal, dan apakah guru mengetahui perbedaannya.'
        ], table('Contoh fokus supervisi yang operasional', ['Fokus', 'Bukti pengamatan', 'Arah percakapan'], [
          ['Tujuan dan alur', 'Tujuan dipahami; kegiatan mendukung kompetensi', 'Bagian mana yang membantu tujuan dan mana yang perlu disesuaikan?'],
          ['Pemahaman dan dukungan', 'Respons murid, pemeriksaan pemahaman, penyesuaian bantuan', 'Murid mana membutuhkan cara lain?'],
          ['Adab dan rasa aman', 'Cara merespons kesalahan, giliran, keteladanan', 'Apakah murid berani mencoba dan meminta bantuan?'],
          ['Integrasi nilai/Al-Qur’an', 'Relevansi, bacaan, pemaknaan, penerapan', 'Apakah hubungan makna kuat dan sesuai usia?'],
          ['Bahasa/teknologi', 'Penggunaan sesuai tujuan dan dipahami murid', 'Apakah alat atau bahasa membantu, bukan sekadar terlihat?']
        ])],
        ['Empat Tahap Supervisi', [
          'Sebelum observasi, guru dan supervisor membahas tujuan, konteks kelas, kebutuhan murid, serta fokus yang hendak ditinjau. Selama observasi, catat kejadian dan respons yang terlihat; pisahkan fakta dari interpretasi. Setelahnya, ajak guru menelaah bukti dan menjelaskan pertimbangannya. Percakapan dapat diawali dengan satu kekuatan, satu masalah paling berpengaruh, dan kemungkinan tindakan.',
          'Tutup dengan rencana kecil yang jelas: praktik apa yang dicoba, dukungan siapa yang diperlukan, kapan, dan bukti hasilnya. Misalnya guru mencoba pemeriksaan pemahaman pada seluruh murid selama dua pekan, mentor membantu menelaah respons, kemudian observasi singkat memeriksa perubahan. Umpan balik tanpa tindak lanjut hanya memindahkan masalah dari kelas ke laporan.'
        ]],
        ['Menghadapi Kelas yang Bagus hanya saat Dikunjungi', [
          'Perbedaan praktik saat disupervisi dapat terjadi karena guru ingin menunjukkan kemampuan terbaik atau karena rutinitas belum terbentuk. Jangan langsung menyimpulkan niat buruk. Gunakan pengamatan berulang yang proporsional, hasil kerja murid, percakapan, dan observasi sejawat. Ukur pola, bukan satu penampilan.',
          'Supervisor perlu mengkalibrasi penilaian dengan rekan: apakah istilah dipahami sama, apakah bukti mencukupi, dan apakah konteks dipertimbangkan. Klinik pembelajaran, coaching, serta lesson study dapat membantu menjadikan praktik baik lebih konsisten. Tujuan akhirnya adalah pembelajaran yang tetap baik ketika tidak ada pemeriksa, karena guru memahami manfaatnya dan mendapat dukungan.'
        ]]
      ],
      reflection: 'Jika instrumen supervisi Anda dibaca guru baru, apakah ia tahu praktik apa yang diharapkan dan bukti apa yang dinilai? Pilih satu butir untuk diperjelas.',
      quiz: [
        {q:'Instrumen supervisi sekolah Islam perlu…',o:['Memeriksa dokumen saja','Memuat mutu pembelajaran dan kekhasan yang relevan','Menghitung ayat tanpa menilai maknanya'],c:1},
        {q:'Umpan balik setelah observasi paling berguna bila…',o:['Berisi bukti, tindakan, dukungan, dan jadwal tinjau','Hanya memberi skor total','Mempermalukan guru di rapat'],c:0},
        {q:'Guru terlihat baik pada satu kunjungan. Kesimpulan yang tepat…',o:['Mutu selalu baik sepanjang tahun','Tidak perlu bukti lain','Perlu bukti berulang untuk membaca konsistensi'],c:2}
      ]
    },
    {
      title: 'Layanan Prima yang Menjaga Empat Pengalaman',
      short: 'Layanan untuk Empat Pihak',
      lede: 'Layanan yang baik membuat orang tahu kepada siapa meminta bantuan, apa yang akan dilakukan, dan kapan ada kabar berikutnya. Mutunya perlu dirasakan keluarga dan murid, sekaligus dapat dijalankan dengan sehat oleh guru dan pengelola.',
      visual: visual('chapter-11.webp', 'Staf sekolah dan ibu murid, keduanya berjilbab panjang, membahas kebutuhan layanan dengan tenang', 'Mendengarkan dengan empati perlu diikuti informasi yang jelas, tindakan yang tepat, dan kabar tindak lanjut.'),
      sections: [
        ['Mengapa Harapan Layanan Terus Bergerak', [
          'Keluarga memperoleh pengalaman dari bank, klinik, belanja digital, dan sekolah lain. Kemudahan pembayaran, kepastian informasi, keamanan penjemputan, serta respons yang jelas menjadi bagian harapan mereka. Perbandingan juga muncul dari percakapan tetangga dan grup orang tua. Sekolah perlu memahami kebutuhan yang mendasarinya, tanpa mengejar setiap fasilitas yang sedang menjadi tren.',
          'Bus kegiatan, misalnya, tidak dinilai hanya dari keberadaan AC atau toilet. Sekolah perlu memeriksa kelayakan, keselamatan, durasi perjalanan, akses istirahat, dan kebutuhan anak. Fasilitas olahraga atau ruang yang menarik bernilai jika benar-benar mendukung kesehatan dan belajar. Kemewahan tidak dapat menggantikan pengelolaan yang aman serta layanan yang sesuai janji.'
        ]],
        ['Empat Pihak yang Perlu Didengar', [
          'Orang tua membutuhkan kejelasan dan kepercayaan. Murid membutuhkan rasa aman, penghargaan, serta bantuan belajar. Guru dan tendik membutuhkan arahan, alat, waktu, relasi kerja yang baik, dan beban yang wajar. Pimpinan serta yayasan perlu memastikan kapasitas, keuangan, dan tanggung jawab tetap terjaga. Kepuasan keluarga yang dibayar dengan kelelahan staf atau ketidakmampuan memenuhi kewajiban tidak dapat dipertahankan.',
          'Survei perlu menyesuaikan usia dan posisi. Murid kecil dapat menyampaikan pengalaman melalui percakapan atau metode sederhana, disertai observasi; informasi orang tua melengkapinya. Murid yang lebih besar dapat memberi masukan langsung. Staf perlu saluran yang tidak membuat kritik berujung pembalasan. Pimpinan juga meninjau keberlanjutan, termasuk likuiditas dan kesiapan menanggung program yang dijanjikan.'
        ]],
        ['Menjadi Pendengar dan Pemberi Solusi', [
          'Penampilan yang rapi, sikap menghormati, dan perhatian penuh membantu membangun percakapan. Namun layanan tidak selesai pada keramahan. Lima tingkat mendengar memberi pengingat: mengabaikan, berpura-pura, memilih bagian tertentu, memperhatikan, dan berempati. Pada tingkat empatik, petugas mencoba memahami kebutuhan serta perasaan, memeriksa pemahamannya, kemudian menjelaskan pilihan tindakan.',
          'Jika orang tua mengatakan anak enggan bersekolah, jangan langsung membela semua praktik kelas atau menjanjikan perubahan sebelum data tersedia. Dengarkan kronologi, tanyakan pengalaman anak secara aman, jelaskan siapa yang akan menindaklanjuti, dan berikan waktu kabar berikutnya. Berempati tidak selalu berarti menyetujui semua permintaan; sekolah tetap menjaga kebijakan, keselamatan, dan hak pihak lain.'
        ]],
        ['Keluhan sebagai Jalur Perbaikan', [
          'Tetapkan alur menerima, mengklarifikasi, mengategorikan risiko, menugaskan pemilik, menangani, memberi kabar, dan memeriksa penyelesaian. Bedakan masalah administrasi rutin dari isu keselamatan yang memerlukan tindakan segera. Tidak semua kasus dapat ditutup oleh petugas penerima; jalur eskalasi harus jelas. Simpan informasi seperlunya, batasi akses, dan hindari membicarakan masalah pribadi murid di grup umum.',
          'Sekolah perlu membedakan waktu respons awal dan waktu penyelesaian. Pesan yang dibalas cepat tetapi tanpa tindak lanjut belum merupakan layanan tuntas. Setelah masalah selesai, tanyakan apakah pengguna memahami tindakan dan apakah masalah berulang. Data keluhan dapat menunjukkan kelemahan proses pembayaran, ketidakjelasan komunikasi, atau dukungan kelas yang belum konsisten.'
        ]],
        ['Mengukur dengan Definisi yang Terbuka', [
          'Angka kepuasan 85 atau 90 pada bahan diskusi adalah contoh ambisi sekolah, bukan standar nasional atau ambang universal akreditasi. Tentukan skala, pertanyaan, jumlah responden, tingkat respons, periode, dan cara menghitung. Jika 40 dari 50 responden memberi jawaban puas, proporsi responden puas adalah 80 persen; ia tidak sama dengan skor rata-rata 80 dari 100.',
          'Gabungkan persepsi dengan ukuran operasional: waktu respons, penyelesaian tepat waktu, masalah berulang, dan pengguna yang masih membutuhkan bantuan. Rata-rata tinggi dapat menyembunyikan masalah serius pada kelompok kecil. Tinjau pengalaman murid dan staf yang paling rentan, lalu ambil keputusan yang memperbaiki layanan bagi mereka juga.'
        ]]
      ],
      reflection: 'Layanan mana yang paling sering memunculkan ketidakpastian? Susun satu janji respons yang realistis, jalur eskalasi, dan cara memeriksa penyelesaiannya.',
      quiz: [
        {q:'Empat pihak yang perlu ditinjau pengalamannya adalah…',o:['Orang tua, murid, guru/tendik, dan pimpinan/yayasan','Orang tua saja','Tim promosi saja'],c:0},
        {q:'Pesan segera dibalas tetapi masalah tidak ditangani. Penilaian yang tepat…',o:['Layanan sudah tuntas','Respons awal dan penyelesaian perlu dinilai terpisah','Survei tidak diperlukan'],c:1},
        {q:'40 dari 50 responden puas. Pernyataan yang tepat…',o:['Semua keluarga puas','Skor rata-rata pasti 80','80 persen responden puas; cakupan survei tetap perlu dijelaskan'],c:2}
      ]
    },
    {
      title: 'Promosi yang Menjaga Janji dan Keberlanjutan Sekolah',
      short: 'Promosi yang Dapat Dipercaya',
      lede: 'Promosi bermutu membantu keluarga mengambil keputusan yang sesuai kebutuhan anak. Sekolah tidak cukup membuat calon keluarga tertarik; ia perlu memberi kejelasan, membangun kecocokan, dan menyiapkan pengalaman setelah murid bergabung.',
      sections: [
        ['Empat Tahap Penerimaan Murid', [
          'Tahap persiapan memastikan kapasitas kelas, guru, program, informasi biaya, alur layanan, dan tim siap. Tahap menghadirkan membuka kesempatan calon keluarga mengenal sekolah melalui kunjungan, open house, kegiatan, rujukan, atau informasi digital. Tahap meyakinkan menjelaskan kecocokan program melalui bukti serta percakapan kebutuhan. Tahap memastikan membantu keluarga menyelesaikan keputusan dan administrasi sesuai kebijakan yang transparan.',
          'Formulir dapat menjadi tanda minat, dan pembayaran atau konfirmasi dapat menunjukkan komitmen yang lebih kuat. Namun tidak ada satu tanda yang menjamin murid akan hadir atau bertahan. Definisikan tahap di sistem sekolah, catat perpindahan antartahap, dan lanjutkan komunikasi sampai orientasi serta pengalaman awal murid. Untuk sekolah yang tidak menjual formulir, gunakan indikator yang sesuai alurnya.'
        ]],
        ['Kasus Sekolah Baru: Banyak Formulir, Sedikit yang Bergabung', [
          'Sebuah SMA baru melihat pendaftar beralih ke sekolah lain setelah mengambil formulir. Tanyakan alasan dengan cara yang tidak menghakimi: biaya, jarak, transportasi, status akreditasi, program lanjutan, atau ketidakpastian hasil. Membeli formulir tidak membuktikan keluarga mampu membayar seluruh biaya pendidikan. Mereka mungkin masih menjajaki beberapa pilihan atau belum menerima informasi lengkap.',
          'Sekolah dapat menawarkan penjelasan program yang lebih konkret, jadwal konsultasi, skema pembayaran yang sehat, atau dukungan akses. Diskon dan suvenir dapat membantu keputusan tertentu, tetapi perlu anggaran serta syarat yang jelas; hindari desakan buatan atau aturan pengembalian dana yang disembunyikan. Sekolah gratis pun memerlukan sumber dana berkelanjutan dan layanan yang dapat dipenuhi. Harga nol tidak menjawab semua alasan keluarga memilih sekolah lain.'
        ]],
        ['Menjadi Pilihan karena Menjawab Kebutuhan', [
          'Pada jenjang awal, keluarga mungkin memprioritaskan adab, dasar ibadah, dan bacaan Al-Qur’an. Pada SMA, sebagian lebih menekankan kesiapan kuliah, pekerjaan, bahasa, atau kemandirian. Kebutuhan ini berbeda antarkeluarga dan wilayah. Lakukan riset pada calon keluarga serta orang tua yang sudah bergabung; jangan menganggap semua orang tua mempunyai tujuan yang sama.',
          'Bila kesiapan perguruan tinggi menjadi kebutuhan, sekolah dapat membangun asesmen akademik, bimbingan pilihan studi, kesiapan seleksi, portofolio, dan kemitraan belajar. Akreditasi serta ketentuan seleksi perlu diperiksa menurut aturan resmi tahun berjalan. Kuota murid yang boleh mengikuti jalur tertentu tidak sama dengan persentase yang diterima. Jalur prestasi tahfizh dan syarat studi luar negeri juga tidak boleh dijanjikan tanpa verifikasi.',
          'Saat mempublikasikan hasil alumni, cantumkan periode, jumlah lulusan, jumlah yang mendaftar, jumlah yang diterima, dan cakupan jalur. Lima dari sepuluh lulusan berbeda dengan lima dari seratus. Data kecil perlu disampaikan dengan konteks, dan pengalaman satu angkatan tidak boleh dianggap jaminan bagi angkatan berikutnya.'
        ]],
        ['Biaya sebagai Nilai dan Tanggung Jawab', [
          'Biaya terjangkau dapat menjadi daya jual bila mutu dan cakupan layanan tetap layak. Biaya yang lebih tinggi memerlukan penjelasan manfaat serta alasan yang dapat diperiksa. Dalam dua kondisi itu, rincian biaya wajib jelas: komponen wajib, tambahan, jadwal, opsi, serta ketentuan pembatalan atau pengembalian yang berlaku. Urutan penjelasan manfaat dan biaya boleh menyesuaikan percakapan, tetapi informasi penting jangan sengaja ditahan.',
          'Tinjau biaya nyata per murid, kapasitas guru, beasiswa, serta sumber subsidi sebelum menetapkan tarif atau diskon. Sekolah dapat menawarkan mutu yang baik dengan biaya relatif rendah melalui proses yang efisien, dukungan yayasan, atau skala yang sesuai. Jangan mengurangi keselamatan, dukungan belajar, atau hak staf untuk mempertahankan slogan murah.'
        ]],
        ['Dashboard Promosi yang Mengembalikan Masukan ke Sekolah', [
          'Ukur bukan hanya jumlah pesan masuk, tetapi juga kunjungan bermakna, perpindahan tahap, alasan tidak melanjutkan, keluarga yang hadir pada awal tahun, serta retensi. Misalnya 40 kunjungan menghasilkan 20 pendaftar dan 12 murid bergabung: konversi kunjungan ke pendaftar 50 persen, pendaftar ke bergabung 60 persen. Jika definisi tahap berubah, perbandingan periode harus disesuaikan.',
          'Gabungkan data itu dengan kapasitas dan mutu layanan. Bila calon keluarga banyak bertanya tentang kelas bahasa sementara program baru rintisan, revisi informasi. Bila keluarga puas tetapi transportasi menghalangi, bahas solusi akses. Kekuatan promosi akhirnya terletak pada kecocokan antara janji, bukti, dan pengalaman, bukan pada iklan yang menutupi kelemahan pembelajaran atau layanan.'
        ]]
      ],
      reflection: 'Pada tahap mana calon keluarga paling sering berhenti? Apa bukti alasannya, dan perbaikan program atau layanan apa yang lebih berguna daripada sekadar menambah iklan?',
      quiz: [
        {q:'Formulir yang sudah diisi paling tepat dibaca sebagai…',o:['Jaminan hadir dan mampu membayar semua biaya','Satu tanda minat yang perlu ditindaklanjuti','Bukti semua kebutuhan sudah cocok'],c:1},
        {q:'Sekolah menerima 12 murid dari 20 pendaftar. Konversi pendaftar ke bergabung…',o:['60 persen','12 persen','20 persen'],c:0},
        {q:'Tarif rendah akan dijadikan keunggulan. Sekolah terlebih dahulu perlu…',o:['Menyembunyikan biaya tambahan','Menurunkan dukungan murid','Memeriksa biaya nyata, subsidi, kapasitas, dan cakupan layanan'],c:2}
      ]
    },
    {
      title: 'Membaca Bukti, Menutup Temuan, dan Menjaga Siklus Tetap Hidup',
      short: 'Evaluasi, Audit, dan Roadmap',
      lede: 'Perbaikan berkelanjutan terjadi ketika temuan berubah menjadi tindakan dan tindakan diperiksa dampaknya. Sekolah perlu ritme sederhana yang terus berjalan, bukan sistem rumit yang hanya aktif menjelang penilaian eksternal.',
      sections: [
        ['Dashboard untuk Memutuskan', [
          'Pilih beberapa indikator pembelajaran, layanan, dan keberlanjutan yang membantu keputusan. Setiap angka memerlukan definisi, sumber, pemilik, waktu pemutakhiran, baseline, dan target. Tampilkan tren serta kelompok yang membutuhkan perhatian. Laporan agregat yayasan perlu dilengkapi rincian unit agar satu unit yang kuat tidak menutupi kebutuhan unit lain.',
          'Gunakan ukuran proses dan hasil secara berpasangan. Cakupan supervisi menunjukkan pelaksanaan; perubahan praktik serta perkembangan murid membantu membaca manfaat. Pelatihan terlaksana menunjukkan aktivitas; penerapan keterampilan menunjukkan penggunaan. Data ketuntasan, kepuasan, dan penerimaan murid perlu dijelaskan menurut penyebut serta cakupan yang konsisten. Warna merah pada dashboard harus memunculkan keputusan, bukan sekadar rasa khawatir.'
        ]],
        ['Audit Internal sebagai Penelusuran', [
          'Audit internal membandingkan kriteria dengan bukti pelaksanaan melalui sampel yang dirancang. Pilih proses berisiko, bukan memeriksa semua map dengan kedalaman sama. Pada program tahsin, telusuri target, guru, jadwal, asesmen, catatan bantuan, serta hasil murid. Pada layanan keluhan, pilih beberapa kasus dari penerimaan sampai kabar penyelesaian. Bukti dapat berupa dokumen, wawancara, dan pengamatan yang saling melengkapi.',
          'Temuan ditulis dengan menyebut kriteria, keadaan yang terlihat, bukti, dan risikonya. Hindari kalimat kabur seperti “guru kurang komitmen” ketika bukti menunjukkan jadwal bentrok atau petunjuk tidak jelas. Pemeriksa tidak perlu selalu orang luar; staf lintas unit yang memahami kriteria dan mampu menjaga objektivitas dapat membantu. Catatan audit dipakai untuk perbaikan, dengan akses serta kerahasiaan yang proporsional.'
        ]],
        ['Koreksi dan Tindakan Korektif', [
          'Koreksi menyelesaikan keadaan saat ini, misalnya memperbaiki data yang salah atau memberi kabar kepada orang tua yang belum menerima respons. Tindakan korektif menangani penyebab agar masalah tidak berulang, seperti menetapkan pemilik pesan dan pengganti saat petugas tidak hadir. Keduanya perlu dilakukan sesuai kebutuhan. Menutup satu kasus belum membuktikan proses membaik.',
          'Telusuri akar masalah dengan pertanyaan mengapa, peta proses, atau pengelompokan faktor manusia, metode, alat, lingkungan, data, dan kebijakan. Periksa hipotesis dengan bukti. Jika guru terlambat pada tugas pagi karena jarak dan jadwal, solusi dapat mencakup penataan piket serta dukungan perjalanan, sambil menjaga kewajiban kerja yang disepakati. Bobot lebih tinggi pada indikator saja tidak menyelesaikan akar masalah.',
          'Buat daftar tindak lanjut berisi temuan, penyebab yang diuji, tindakan, pemilik, tenggat, status, dan bukti efektivitas. Status “selesai” diberikan setelah pelaksanaan diperiksa; status “efektif” membutuhkan bukti bahwa risiko atau masalah berulang berkurang. Jika tindakan tidak membantu, ubah pendekatan dan jelaskan pelajaran yang diperoleh.'
        ]],
        ['Satu Contoh PDCA yang Utuh', [
          'Sekolah menemukan murid kelas IV kesulitan menjelaskan hasil pengamatan. Pada tahap Plan, tim menelaah sampel tugas dan menemukan sedikit latihan memberi alasan; sekolah menetapkan pilot empat pekan pada dua kelas dengan rubrik yang sama. Pada Do, guru memberi contoh, latihan pasangan, dan umpan balik; mentor menelaah satu sampel tiap pekan.',
          'Pada Check, hasil awal dan akhir dibandingkan dengan melihat mutu penjelasan, murid yang belum berkembang, waktu yang diperlukan, dan pengalaman guru. Perubahan tidak langsung diklaim sebagai akibat tunggal pilot; tim mempertimbangkan faktor lain. Pada Act, teknik yang membantu dimasukkan ke panduan dan dibagikan ke kelas lain, sementara kebutuhan murid yang belum terbantu ditangani melalui dukungan berbeda. Inilah hubungan antara data, tindakan, dan standar yang diperbarui.'
        ], flow('Perencanaan berbasis data memperkuat siklus internal', [
          ['Identifikasi', 'Pilih masalah dari Rapor Pendidikan dan bukti sekolah.'],
          ['Refleksi', 'Periksa akar serta konteks, bukan gejala saja.'],
          ['Benahi perencanaan', 'Masukkan kegiatan, pemilik, sumber daya, dan ukuran ke rencana.'],
          ['Benahi implementasi', 'Jalankan, pantau, evaluasi, dan gunakan hasil untuk siklus berikutnya.']
        ])],
        ['Roadmap 90 Hari dan Ritme Setahun', [
          'Hari 1–30 dipakai untuk menetapkan tim, memetakan kebutuhan, menyelaraskan standar, memilih prioritas, dan menyiapkan data awal. Hentikan pencatatan ganda yang jelas tidak membantu, tetapi pertahankan informasi yang masih diperlukan. Hari 31–60 digunakan untuk pilot satu atau dua proses penting, pendampingan guru, pembenahan formulir, dan rapat tinjau singkat. Hari 61–90 difokuskan pada evaluasi, pemeriksaan tindak lanjut, revisi standar, dan keputusan perluasan.',
          'Sesudah pilot, pertahankan ritme yang proporsional: pemeriksaan harian pada keselamatan atau layanan mendesak, koordinasi singkat mingguan, tinjauan indikator bulanan, evaluasi program per semester, serta peninjauan strategi dan anggaran tahunan. Jadwal dapat disesuaikan. Yang penting, tindakan tidak hilang ketika kesibukan bertambah dan pimpinan mengetahui masalah yang memerlukan keputusan.',
          'Sekolah baru dapat memulai dengan satu register tindakan, beberapa standar inti, dan data yang mampu dikelola. Sekolah matang memperkuat konsistensi lintas unit, kualitas analisis, pengembangan staf, serta keberlanjutan ketika pimpinan berganti. Akreditasi dan sertifikasi memanfaatkan sistem yang hidup itu; persiapan tidak perlu menjadi kegiatan mempercantik bukti sesaat.'
        ]]
      ],
      reflection: 'Pilih satu masalah berulang untuk pilot 90 hari. Apa baseline, dugaan penyebab, tindakan, pemilik, tenggat, serta bukti bahwa perbaikan benar-benar efektif?',
      quiz: [
        {q:'Perbedaan koreksi dan tindakan korektif adalah…',o:['Koreksi selalu dokumen; tindakan korektif selalu rapat','Keduanya hanya nama lain untuk teguran','Koreksi menangani keadaan kini; tindakan korektif menangani penyebab pengulangan'],c:2},
        {q:'Audit menemukan target tidak tercapai. Langkah yang tepat…',o:['Telusuri kriteria, bukti, proses, dan penyebab sebelum memilih tindakan','Ganti target agar laporan hijau','Cari satu orang untuk disalahkan'],c:0},
        {q:'Pilot selesai dilaksanakan. Kapan standar dapat diperbarui dengan percaya diri?',o:['Begitu pelatihan selesai','Setelah hasil dan efektivitas ditinjau, lalu cara yang membantu diadopsi','Ketika map sudah lengkap'],c:1}
      ]
    },
  ];
  const assessment = [
    ['Sekolah banyak kegiatan tetapi tidak tahu perkembangan murid. Perbaikan awal paling relevan…', ['Menyusun ukuran hasil dan menelusuri proses yang menopangnya','Memperbanyak poster','Mengganti nama sekolah'], 1],
    ['SPMI dan TQM terintegrasi ketika…', ['Tim mutu mengisi semua laporan sendiri','Siklus internal dijalankan dengan keterlibatan pemilik proses','Sekolah membeli dua sertifikat'], 2],
    ['Target tiga juz pada akhir jenjang perlu disertai…', ['Seleksi pada akhir kelas VI saja','Target bertahap, mutu bacaan, waktu, guru, asesmen, dan dukungan','Jumlah iklan bertambah'], 2],
    ['Sekolah memilih keunggulan karena tren. Keputusan sebaiknya diuji terhadap…', ['Jumlah logo','Misi, kebutuhan setempat, kapasitas, sumber daya, dan bukti','Popularitas nama saja'], 2],
    ['74 dari 100 murid tuntas dan target 86 persen. Selisihnya…', ['12 poin persentase','74 poin persentase','86 poin persentase'], 1],
    ['Skor penyambutan pagi 90 dari 100 dapat dipakai untuk menyatakan…', ['90 persen murid beradab','Tingkat kepatuhan proses menurut rubrik, bukan ketuntasan adab','Semua murid datang tepat waktu'], 2],
    ['Tim mutu yang bekerja baik…', ['Mengambil seluruh tugas operasional','Menghubungkan standar, bukti, evaluasi, dan tindak lanjut bersama pemilik proses','Menunggu inspeksi yayasan'], 2],
    ['SOP yang baik terutama…', ['Menjelaskan alur, keputusan, peran, dan bukti yang diperlukan','Selalu lebih dari 20 halaman','Sama pada semua sekolah'], 1],
    ['Formulir telah diisi. Untuk menilai manfaat sistem, sekolah juga perlu…', ['Menambah tanda tangan','Memeriksa pelaksanaan, hasil, dan tindak lanjut','Menyimpan tanpa membaca'], 2],
    ['Urutan awal desain kurikulum yang tepat…', ['Jadwal lalu visi','Visi dan profil lulusan sebelum struktur serta metode','Buku lalu target'], 2],
    ['Porsi jam pada contoh sekolah lain…', ['Harus disalin persis','Diuji dengan ketentuan kurikulum, usia, kapasitas, dan kebutuhan','Menggantikan seluruh standar nasional'], 2],
    ['Tes penempatan bahasa atau penggunaan kerangka GSE…', ['Otomatis memberi status sekolah internasional','Membantu membaca dan merancang kemampuan bahasa sesuai cakupannya','Menjamin diterima kampus luar negeri'], 2],
    ['Integrasi ayat ke pembelajaran perlu…', ['Relevansi, bacaan benar, pemaknaan terpercaya, dan kegiatan yang sesuai usia','Jumlah ayat sebanyak mungkin','Menggantikan seluruh bukti ilmiah'], 1],
    ['Guru berkompetensi tinggi tetapi hasil kelas belum sesuai. Penilaian perlu…', ['Langsung menghukum','Menelaah praktik, baseline, dukungan, dan beberapa bukti','Mengabaikan hasil kelas'], 2],
    ['Supervisi yang berdampak berakhir dengan…', ['Skor disampaikan saja','Tindakan, dukungan, tenggat, dan pemeriksaan perubahan','Instrumen semakin panjang'], 2],
    ['40 dari 50 responden puas. Informasi yang tepat…', ['80 persen responden puas, disertai penjelasan cakupan dan tingkat respons','Semua orang tua puas','Skor rata-rata pasti 80'], 1],
    ['Calon keluarga sudah mengisi formulir. Sekolah…', ['Dapat menjamin murid pasti bergabung','Perlu menindaklanjuti kecocokan, kejelasan biaya, dan alasan keputusan','Tidak perlu berkomunikasi lagi'], 2],
    ['Sekolah menawarkan diskon. Keputusan yang bertanggung jawab…', ['Menetapkan syarat dan pembiayaan yang jelas serta menjaga kapasitas layanan','Menahan rincian biaya sampai dibayar','Mengorbankan dukungan belajar'], 1],
    ['Keluhan sama muncul lagi setelah diperbaiki sekali. Yang diperlukan…', ['Koreksi kasus saja','Analisis penyebab dan tindakan korektif beserta pemeriksaan efektivitas','Menutup kanal keluhan'], 2],
    ['Pilot metode baru sudah berjalan empat pekan. Langkah sebelum perluasan…', ['Menelaah hasil, konteks, beban, dan kebutuhan yang belum terjawab','Langsung memakai di semua kelas','Mengganti angka awal'], 1]
  ];
  const section = ([heading, paragraphs, extra = '']) => '<h4>' + heading + '</h4>' + paragraphs.map(x => '<p>' + x + '</p>').join('') + extra;
  const miniQuiz = questions => '<div class="card reveal"><h3 class="ui" style="margin-top:0;color:var(--heading)">Kuis Mini</h3>' + questions.map(q => '<div class="quiz-q"><p>' + q.q + '</p>' + q.o.map((o,i) => '<button class="quiz-opt" onclick="answerQuiz(this,' + (i === q.c) + ')">' + o + '</button>').join('') + '</div>').join('') + '</div>';
  const renderChapter = (n,d) => '<p class="eyebrow reveal">Bab ' + n + '</p><h2 class="reveal">' + d.title + '</h2><p class="lede reveal">' + d.lede + '</p>' + (d.visual || '') + '<div class="card reveal">' + d.sections.map(section).join('') + '</div><div class="reflect-box reveal"><h3>Refleksi</h3><p>' + d.reflection + '</p><textarea aria-label="Refleksi Bab ' + n + '" placeholder="Tulis pengamatan atau rencana Anda di sini..."></textarea></div>' + miniQuiz(d.quiz) + '<button class="done-btn" id="doneBtn-bab' + n + '" onclick="markDone(\'bab' + n + '\')">✓ Tandai Bab Ini Selesai</button><p class="seal" id="seal-bab' + n + '">✓ Bab ' + n + ' selesai dibaca</p><div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';
  window.BOOK_CONTENT = Object.fromEntries(chapters.map((d,i) => ['bab' + (i+1), renderChapter(i+1,d)]));
  window.BOOK_CONTENT.asesmen = '<p class="eyebrow reveal">Evaluasi Akhir</p><h2 class="reveal">Asesmen Komprehensif</h2><p class="lede reveal">Gunakan 20 situasi berikut untuk memeriksa pemahaman Anda tentang arah mutu, sistem internal, pembelajaran, layanan, dan perbaikan. Skor muncul setelah semua jawaban diperiksa.</p><div class="card reveal">' + assessment.map(([q,opts,c]) => '<div class="assess-q" data-correct="' + c + '"><p>' + q + '</p>' + opts.map(o => '<button class="quiz-opt" onclick="selectAssessAnswer(this)">' + o + '</button>').join('') + '</div>').join('') + '<button class="check-assess-btn" id="checkAssessBtn" onclick="checkAssessment()">Periksa Jawaban Saya</button><div class="assess-result" id="asesmenResult"></div></div><div class="chapter-nav reveal"><button class="nav-btn prev" onclick="goPrev()">← Sebelumnya</button><button class="nav-btn next" onclick="goNext()">Selanjutnya →</button></div>';
  window.BOOK_META = {number:60, title:'Membangun Sistem Mutu Sekolah Islam', subtitle:'Mengintegrasikan SPMI & TQM untuk Membangun Budaya Perbaikan Berkelanjutan', chapterCount:chapters.length, videoId:'IgMshzTgvg8', chapterTitles:chapters.map(d=>d.title), shortTitles:chapters.map(d=>d.short)};
})();

/* BAGIAN PENDAMPING 060 */
Object.assign(window.BOOK_CONTENT, {
  "pengantar": "<p class=\"eyebrow reveal\">Kata Pengantar</p><h2 class=\"reveal\">Mutu yang Hidup dalam Pekerjaan Sehari-hari</h2><div class=\"card reveal\">\n<p>Sebuah sekolah dapat memiliki visi yang indah, target yang tinggi, dan berkas yang lengkap. Tantangan sebenarnya muncul ketika guru mengajar, murid meminta bantuan, orang tua mengajukan pertanyaan, atau pimpinan harus memilih prioritas dengan sumber daya terbatas. Pada saat itulah mutu perlu hadir sebagai cara kerja yang dipahami dan dijalankan bersama.</p>\n<p>eBook interaktif ini membawa pembaca dari pemahaman tentang janji pendidikan menuju sistem yang dapat dijalankan. SPMI memberi kerangka penjaminan internal; TQM menguatkan keterlibatan, tanggung jawab, dan kebiasaan memperbaiki. Keduanya disatukan melalui arah yang jelas, proses yang terhubung, bukti yang dapat dipercaya, serta keputusan yang kembali memperbaiki pengalaman murid.</p>\n<p>Pembahasan tidak berhenti pada istilah manajemen. Anda akan menelaah pilihan keunggulan, menurunkan visi menjadi KPI dan kegiatan, merancang kurikulum, mengembangkan guru, melakukan supervisi, membenahi layanan, menjaga janji promosi, dan menjalankan pilot perbaikan 90 hari. Contoh-contohnya memberi logika untuk disesuaikan dengan jenjang, karakter keluarga, kapasitas, dan ketentuan yang berlaku.</p>\n<p>Bacalah secara berurutan untuk memahami hubungan antarbab, atau gunakan daftar isi untuk kembali pada masalah yang sedang dikerjakan. Refleksi, kuis, dan rencana aksi membantu memindahkan gagasan menjadi keputusan. Mulailah dengan satu proses yang penting dan dapat ditinjau; sistem mutu akan semakin kuat ketika perbaikan kecil yang berguna terus dipertahankan.</p>\n<p>Salam hangat,<br><strong>Tim Edumind Academy</strong></p></div><p class=\"mutu-imprint\">Edumind Academy · eBook Interaktif 060 · Hak cipta dilindungi</p>",
  "faq": "<p class=\"eyebrow reveal\">Bantuan</p><h2 class=\"reveal\">Pertanyaan Umum</h2><div class=\"card reveal\" style=\"padding:6px 24px\"><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Bagaimana membuka seluruh isi? <span class=\"plus\">+</span></button><div class=\"faq-a\">Masukkan username dan password dari admin Edumind Academy. Pratinjau Bab 1 tersedia melalui tombol pada halaman login.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Apakah sekolah harus bersertifikat ISO untuk mulai? <span class=\"plus\">+</span></button><div class=\"faq-a\">Tidak. Sekolah dapat memulai pemetaan, standar inti, pilot, evaluasi, dan perbaikan. Jika memilih sertifikasi, periksa edisi, ruang lingkup, serta ketentuan yang berlaku bersama lembaga terkait.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Apakah semua sekolah harus menjadi bilingual atau internasional? <span class=\"plus\">+</span></button><div class=\"faq-a\">Tidak. Keunggulan dipilih dari misi, kebutuhan murid dan keluarga, kemampuan tim, serta keberlanjutan. Klaim program harus sesuai layanan yang benar-benar tersedia.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Apakah skor pelaksanaan program sama dengan capaian murid? <span class=\"plus\">+</span></button><div class=\"faq-a\">Tidak. Skor proses menunjukkan seberapa baik kegiatan dijalankan menurut rubrik. Capaian murid perlu diukur dengan bukti belajar atau perilaku yang relevan.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Bagaimana jika tim sekolah masih kecil? <span class=\"plus\">+</span></button><div class=\"faq-a\">Mulai dari beberapa standar inti, pembagian peran yang jelas, satu register tindakan, serta pilot pada satu atau dua proses penting. Satu orang boleh memegang beberapa peran dengan tinjauan yang sesuai risiko.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Apakah angka dan contoh alokasi jam wajib diikuti? <span class=\"plus\">+</span></button><div class=\"faq-a\">Tidak. Angka adalah ilustrasi. Sesuaikan target dengan baseline dan kebutuhan; alokasi pembelajaran harus mengikuti ketentuan yang berlaku serta menjaga tahap perkembangan dan beban murid.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Apakah progres, refleksi, dan rencana aksi tersimpan? <span class=\"plus\">+</span></button><div class=\"faq-a\">Progres dan skor tersimpan pada browser ini. Refleksi dan rencana aksi eBook 060 juga disimpan pada perangkat ini; keduanya tidak dikirim ke server. Perpindahan perangkat atau penghapusan data browser tidak memindahkan catatan. Simpan salinan melalui PDF atau tangkapan layar.</div></div><div class=\"faq-item\"><button class=\"faq-q\" onclick=\"toggleFaq(this)\">Bisakah isi diunduh sebagai PDF? <span class=\"plus\">+</span></button><div class=\"faq-a\">Gunakan tombol PDF setelah konten dimuat. Pilih Simpan sebagai PDF pada dialog cetak; semua bagian buku disusun berurutan.</div></div></div>",
  "cta": "<p class=\"eyebrow reveal\">Penutup</p><h2 class=\"reveal\">Sistem yang Mampu Melanjutkan Kebaikan</h2><div class=\"card reveal\"><p>Mutu sekolah dijaga melalui banyak tindakan yang tampak sederhana: tujuan belajar yang dipahami, dukungan bagi murid yang belum berhasil, keluhan yang dituntaskan, data yang jujur, serta keputusan yang mempunyai pemilik. Ketika tindakan itu terhubung, sekolah tidak lagi bergantung pada ingatan atau energi satu orang.</p><p>Pilih satu prioritas dari rencana aksi Anda. Mulai dengan bukti awal, jalankan perbaikan pada skala yang mampu dikelola, dan sepakati kapan hasil ditinjau. Pertahankan yang membantu, perbaiki yang belum efektif, lalu bagikan pelajarannya. Itulah cara SPMI dan TQM bertemu dengan amanah pendidikan: membuat pengalaman murid lebih baik dan menjaganya tetap baik saat tantangan serta tim berubah.</p></div><div class=\"cta-card reveal\"><div><h3>Pendampingan Sistem Mutu Sekolah Islam</h3><p>Diskusikan kebutuhan pemetaan, sasaran, proses, dan pengawalan perbaikan bersama Edumind Academy.</p></div><a href=\"https://wa.me/6281385841500\" target=\"_blank\" rel=\"noopener\">Hubungi Edumind</a></div>"
});
