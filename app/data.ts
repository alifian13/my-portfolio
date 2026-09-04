export const portfolioData = {
  name: "Rizky Alifian Ilham",
  role: "Software Developer | Mobile App Developer | Web Developer | UI/UX Enthusiast",
  about: "Computer science graduate from Yogyakarta University of Technology with a strong interest in Technology, Customer Relations, and Operations Management. I have honed my communication skills through various campus activities and part-time work in customer relations. With the ability to design effective communication strategies to build strong relationships with customers and teams, I am ready to contribute to building positive relationships between companies and their audiences.",
  profileImage: "/images/profil.jpg",
  skills: [
    "Flutter", "Express.js", "Clean Architecture", "PHP", "Laravel", "Next.js", "Tailwind CSS", "Git & GitHub", "MySql", "SQLite"
  ],
  projects: [
    {
      title: "Motocare",
      description: "Motocare merupakan applikasi perawatan motor matic yang membantu pengguna dalam merawat motor matic mereka. Pengguna tak perlu menambahkan modul apapun terhadap motor mereka, hanya dengan menginstal aplikasi serta memasukan beberapa informasi terkait kondisi motor mereka saat itu maka aplikasi ini akan mulai melakukan tugasnya.",
      tech: ["Flutter", "Express.js"],
      image: "/images/Motocare.jpg",
      logo: "/images/logo-motocare.png",
      link: "https://github.com/alifian13/motocare",
    },
    {
      title: "Ceban",
      description: "Ceban merupakan aplikasi kedua yang saya bangun untuk menunjang pemasukan dan pengeluaran saya, pada awal pembuatan saya hanya fokus untuk memanajemen keuangan saya saja. Pada saat ini ceban saya kembangkan lagi menjadi aplikasi yang juga dapat membuat catatan perjalanan yang kompleks. Penambahan fitur ini di latar belakangi dengan hobi saya yakni mendaki gunung, saya dapat  melakukan pendataan alat gunung, catatan perjalanan, pengeluaran saat mendaki hingga jurnal perjalanan di aplikasi ini.",
      tech: ["Flutter", "UI/UX"],
      image: "/images/Ceban.jpg",
      logo: "/images/logo-ceban.png",
      link: "https://github.com/alifian13/ceban",
    }
  ],
  educations: [
    {
      degree: "S1 Informatika",
      school: "Universitas Teknologi Yogyakarta (UTY)",
      date: "Lulus 2026",
      description: "Memasuki semester akhir perkuliahan, aktif menulis jurnal akademik, dan mempersiapkan diri untuk karir profesional di bidang teknologi.",
      image: "/images/lulus.jpg"
    }
  ],

  experiences: [
    {
      role: "Grocery", 
      company: "PT Lion Super Indo",
      date: "2024 - 2026",
      description: "Bertanggung jawab dalam pengelolaan inventaris, pelayanan pelanggan, dan operasional toko untuk memastikan pengalaman belanja yang optimal bagi pelanggan.",
      image: "/images/superindo.jpg" 
    }
  ],
  
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
    { name: "Gunung Mongkrang", image: "/images/mongkrang.jpg" },
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

  achievements: [
    {
      title: "Jurnal INFOS (Information System Journal)",
      icon: "📝",
      link: "https://doi.org/10.24076/infosjournal.2025v8i02.2365"
    },
    {
      title: "Best Capstone System",
      icon: "🏆",
      link: "#"
    },
    {
      title: "Mahasiswa Berprestasi UTY",
      icon: "🎓",
      link: "#"
    }
  ],

  certificates: [
    {
      name: "Belajar Dasar Structure Query Language (SQL)", 
      issuer: "Dicoding",
      year: "2023",
      credentialId: "MRZMLJ8RNXYQ",
      link: "/Dicoding_SQL.png"
    },
    {
      name: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      year: "2023",
      credentialId: "07Z68EE5YXQR",
      link: "/Dicoding_Javasript.png"
    },
    {
      name: "Microsoft", 
      issuer: "Jobstreet",
      year: "2026",
      credentialId: "Microsoft Skill For Job",
      link: "/Microsoft.png"
    },
    {
      name: "TOEFL", 
      issuer: "Universitas Teknologi Yogyakarta",
      year: "2025",
      credentialId: "9000250011000",
      link: "/Toefl.png"
    },
    {
      name: "Create a Data Visualization with Python", 
      issuer: "IBM SkillsBuild",
      year: "2026",
      credentialId: "(ALM-COURSE_4058961)",
      link: "/IBM_SkillBuild.png"
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2026",
      credentialId: "Deloitte on Forage",
      link: "/Deloitte.png"
    },
    {
      name: "Front-End Software Engineering virtual experience programme",
      issuer: "Skyscanner",
      year: "2026",
      credentialId: "https://www.theforage.com/simulations/skyscanner/front-end-software-engineering-cbwl/completed",
      link: "/Skyscanner.png"
    },
    {
      name: "Mobility Operations Industrial Engineer",
      issuer: "Siemens",
      year: "2026",
      credentialId: "https://www.theforage.com/simulations/siemens-mobility/operations-industrial-engineering-xh22/completed",
      link: "/Siemens.png"
    },
  ],

  recognitionPhotos: [
    "/images/recog-1.png", 
    "/images/recog-2.png",
    "/images/Recog-3.png",
    "/images/recog-4.jpg",
    "/images/recog-5.png",
  ]
};