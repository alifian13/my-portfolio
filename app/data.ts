export const portfolioData = {
  name: "Rizky Alifian Ilham",
  role: "Software Developer | Mobile App Developer | Web Developer | UI/UX Enthusiast",
  about: "Computer science graduate from Yogyakarta University of Technology with a strong interest in Technology, Customer Relations, and Operations Management. I have honed my communication skills through various campus activities and part-time work in customer relations. With the ability to design effective communication strategies to build strong relationships with customers and teams, I am ready to contribute to building positive relationships between companies and their audiences.",
  profileImage: "/images/profile.jpg",
  skills: [
    "Flutter", "Express.js", "Clean Architecture", "PHP", "Laravel", "Next.js", "Tailwind CSS", "Git & GitHub", "MySql", "SQLite"
  ],
  projects: [
    {
      title: "Motocare",
      description: "Aplikasi mobile dan web untuk manajemen servis kendaraan bermotor otomatis berbasis jarak tempuh (mileage).",
      tech: ["Flutter", "Express.js"],
      image: "/images/motocare.jpg",
    },
    {
      title: "Ceban",
      description: "Pengembangan aplikasi mobile dengan antarmuka pengguna yang modern dan arsitektur kode yang bersih.",
      tech: ["Flutter", "UI/UX"],
      image: "/images/ceban.jpg", // Ganti jika ada gambar khusus ceban.jpg
    }
  ],
  educations: [
    {
      degree: "S1 Informatika",
      school: "Universitas Teknologi Yogyakarta (UTY)",
      date: "Lulus 2026",
      description: "Memasuki semester akhir perkuliahan, aktif menulis jurnal akademik, dan mempersiapkan diri untuk karir profesional di bidang teknologi.",
      image: "/images/lulus.jpg" // Siapkan fotomu saat di kampus/jas almamater
    }
  ],

  experiences: [
    {
      role: "Grocery", // Silakan sesuaikan jika ada pengalaman lain
      company: "PT Lion Super Indo",
      date: "2024 - 2026",
      description: "Bertanggung jawab dalam pengelolaan inventaris, pelayanan pelanggan, dan operasional toko untuk memastikan pengalaman belanja yang optimal bagi pelanggan.",
      image: "/images/superindo.jpg" // Siapkan foto saat kamu coding/bekerja
    }
  ],
  
  // DATA GUNUNG: Sudah diubah menjadi format object agar mendukung gambar
  mountains: [
    { name: "Gunung Merbabu via Thekelan", image: "/images/merbabu.jpg" },
    { name: "Gunung Merbabu via Swanting", image: "/images/merbabuswanting.jpg" },
    { name: "Gunung Sindoro via Kledung", image: "/images/sindoro.jpg" },
    { name: "Gunung Sindoro via Watu Lunyu", image: "/images/sindorolunyu.jpg" },
    { name: "Gunung Kembang", image: "/images/kembang.jpg" },
    { name: "Gunung Sumbing", image: "/images/sumbing.jpg" },
    { name: "Gunung Lawu via Cemoro Sewu", image: "/images/lawu.jpg" },
    { name: "Gunung Lawu via Babar", image: "/images/lawubabar.jpg" },
    { name: "Gunung Prau", image: "/images/prau.jpg" },
    { name: "Gunung Andong", image: "/images/andong.jpg" },
    { name: "Gunung Telomoyo", image: "/images/telomoyo.jpg" },
    { name: "Gunung Ungaran", image: "/images/ungaran.jpg" },
    { name: "Gunung Muria", image: "/images/muria.jpg" },
    { name: "Gunung Jokolangan", image: "/images/jokolangan.jpg" }
  ],
  
  // DATA Publikasi
  publications: [
    {
      title: "IMPLEMENTASI ALGORITMA RULE-BASED DAN CLUSTERING UNTUK APLIKASI PERAWATAN MOTOR MATIK ADAPTIF “MOTOCARE”",
      journal: "Jurnal INFOS (Information System Journal)",
      year: "2025",
      description: "Jurnal ini membahas mengenai Jadwal perawatan motor matik yang bersifat statis seringkali tidak sesuai dengan kondisi penggunaan kendaraan, sehingga menyebabkan perawatan menjadi kurang efektif. Penelitian yang dilakukan bertujuan untuk mengembangkan model perawatan yang adaptif pada aplikasi “Motocare” yang mampu mempersonalisasi interval servis berdasarkan perilaku berkendara pengguna. Metode yang diusulkan menggabungkan algoritma Clustering untuk mengelompokkan pengguna ke dalam kategori intensitas (tinggi, normal, ringan) dan algoritma Rule-Based untuk menyesuaikan target kilometer servis secara dinamis. Hasil pengujian menunjukkan model berhasil mempercepat interval servis untuk pengguna intensitas tinggi dan memperlambatnya untuk pengguna ringan. Kontribusi utama penelitian yang dilakukan adalah sebuah sistem rekomendasi cerdas yang proaktif dan personal tanpa memerlukan instalasi perangkat keras tambahan pada kendaraan.",
      link: "https://doi.org/10.24076/infosjournal.2025v8i02.2365" 
    }
  ],

  // DATA Sertifikat
  certificates: [
    {
      name: "Belajar Dasar Structure Query Language (SQL)", 
      issuer: "Dicoding",
      year: "2023",
      credentialId: "MRZMLJ8RNXYQ",
      link: "https://www.dicoding.com/certificates/MRZMLJ8RNXYQ"
    },
    {
      name: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      year: "2023",
      credentialId: "07Z68EE5YXQR",
      link: "https://www.dicoding.com/certificates/07Z68EE5YXQR"
    }
  ]
};