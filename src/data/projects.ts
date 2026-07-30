export interface ProjectCase {
  id: string;
  caseNumber: string;
  title: string;
  slug: string;
  year: string;
  status: string;
  classification: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  liveUrl?: string;
  technologies: string[];
  features: string[];
  challenges: {
    issue: string;
    diagnosis: string;
    repair: string;
    result: string;
  }[];
}

export interface TimelineEntry {
  period: string;
  company: string;
  role: string;
  location?: string;
  type: "Internship" | "Mentorship" | "Full-Time" | "Education";
  summary: string;
  points: string[];
  technologies: string[];
}

export const projects: ProjectCase[] = [
  {
    id: "001",
    caseNumber: "CASE-001",
    title: "Web-Based E-Recruitment System",
    slug: "e-recruitment-system",
    year: "2025",
    status: "Completed",
    classification: "Recruitment Process Optimization",
    summary:
      "Web-based e-recruitment system to manage job openings, candidate profiles, applications, and selection workflows with rule-based auto-screening.",
    problem:
      "Manual recruitment processes led to scattered applicant data, slow screening response times, and inconsistent candidate evaluations.",
    solution:
      "Engineered a web-based e-recruitment platform that manages job postings, candidate submissions, selection stages, and automated rule-based screening to streamline applicant tracking.",
    role: "Full-Stack Developer & System Analyst",
    duration: "12 weeks",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Applicant registration and profile management",
      "Job vacancy management and publishing",
      "Online application submission portal",
      "Rule-based candidate auto-screening",
      "Recruitment status tracking",
      "Role-based dashboard for HR and recruiters",
      "Comprehensive recruitment reporting",
      "Candidate evaluation and ranking system",
    ],
    challenges: [
      {
        issue: "Inconsistent applicant data formats across submissions",
        diagnosis:
          "Lack of input standardization made automated candidate screening difficult",
        repair:
          "Implemented strict input validation, unified data schemas, and predefined screening rules based on real recruitment officer experience at PT Pilar Sembilan Naga",
        result:
          "Initial candidate evaluation became consistent and fully automated",
      },
      {
        issue: "System performance degradation with large candidate volumes",
        diagnosis:
          "Unoptimized database queries and missing table indexes during search operations",
        repair:
          "Optimized SQL queries, added database indexing, and implemented server-side pagination",
        result:
          "Response time reduced by 80%, handling 10,000+ candidate records smoothly",
      },
      {
        issue: "Insufficient server-side backend data validation",
        diagnosis:
          "Validation relied primarily on the frontend, leaving backend API endpoints vulnerable",
        repair:
          "Added robust server-side validation and input sanitization across all REST endpoints",
        result:
          "Enhanced overall system security and ensured high data integrity",
      },
    ],
  },
  {
    id: "002",
    caseNumber: "CASE-002",
    title: "Financial Record System for Pilgrimage Services",
    slug: "financial-record-system",
    year: "2024",
    status: "Completed",
    classification: "Financial Management System",
    summary:
      "Laravel-based financial accounting system for PT. Alyusro Bandung managing pilgrim payments, partner agent commissions, and structured financial reporting.",
    problem:
      "PT. Alyusro Bandung, an Umrah and Hajj pilgrimage provider, faced challenges in manually tracking pilgrim payments and partner commissions, leading to untracked transactions and reporting delays.",
    solution:
      "Developed a Laravel financial management system featuring role-based authentication, user management, payment tracking, automated commission calculations, and structured financial ledger reporting.",
    role: "Web Developer Intern",
    duration: "3 months (Jul 2024 – Sep 2024)",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "User management with role-based access control (RBAC)",
      "Pilgrim and partner agency data management",
      "Payment recording and real-time transaction tracking",
      "Automated agent commission calculation engine",
      "Real-time financial overview dashboard",
      "Periodic financial reporting and ledger exports",
      "Authentication and security middleware",
      "Black Box functional testing & bug fixing pipeline",
    ],
    challenges: [
      {
        issue:
          "Complex agent commission calculations across multiple package tiers",
        diagnosis:
          "Varying Umrah package tiers had complex commission structures prone to calculation errors when handled manually",
        repair:
          "Engineered a flexible calculation engine supporting multi-tier commission rules",
        result:
          "Commissions calculated automatically, accurately, and with full auditability",
      },
      {
        issue: "Financial transaction data lacked proper audit trails",
        diagnosis:
          "Absence of systematic data reconciliation and activity tracking mechanisms",
        repair:
          "Implemented transaction audit logs, activity tracking, and automated ledger reconciliation",
        result:
          "Increased system accountability, maintained data integrity, and simplified financial audits",
      },
    ],
  },
  {
    id: "003",
    caseNumber: "CASE-003",
    title: "Roblox Game Development Mentorship Program",
    slug: "roblox-mentorship",
    year: "2025",
    status: "Completed",
    classification: "Educational Program",
    summary:
      "Mentorship program for internship students at LPKIA in Roblox Studio game development using Lua scripting, focusing on programming logic and client-server architecture.",
    problem:
      "Internship students had limited practical experience with game development principles and Lua scripting, requiring technical guidance and structured mentoring.",
    solution:
      "Provided hands-on mentorship covering Lua scripting, modular design patterns, client-server networking, debugging techniques, and Roblox Studio development best practices.",
    role: "Mentor PKL Roblox Developer",
    duration: "4 months (Jul 2025 – Oct 2025)",
    technologies: ["Roblox Studio", "Lua", "Client-Server Architecture"],
    features: [
      "Hands-on Lua scripting training",
      "Modular scripting patterns and best practices",
      "Client-server system architecture",
      "Game mechanics implementation",
      "Code review and debugging guidance",
      "Performance optimization techniques",
      "Asset management in Roblox Studio",
      "Multiplayer game architecture concepts",
    ],
    challenges: [
      {
        issue: "Students had diverse programming backgrounds and skill levels",
        diagnosis:
          "Varying student experience levels made a single rigid curriculum ineffective",
        repair:
          "Designed a modular learning roadmap customized per student with pair-programming sessions",
        result:
          "All interns successfully delivered functional game projects suited to their complexity level",
      },
      {
        issue: "Client-server network replication bottlenecks",
        diagnosis:
          "Inefficient network scripting caused excessive server load and latency during gameplay",
        repair:
          "Conducted workshops on network optimization and assisted in refactoring client-server networking logic",
        result:
          "Interns mastered efficient networking principles in multiplayer game development",
      },
    ],
  },
  {
    id: "004",
    caseNumber: "CASE-004",
    title: "Integrated Web Tourism & Reservation Platform",
    slug: "tourism-platform",
    year: "2026",
    status: "Completed",
    classification: "Tourism & Reservation System",
    summary:
      "Web-based integrated tourism platform developed for PT Inovindo Academy, uniting accommodation reservations, tour packages, local souvenirs marketplace, and administration dashboards.",
    problem:
      "Tourism vendors and travelers faced fragmented reservation channels for lodging, local tours, and merchandise, leading to disjointed booking workflows and delayed data management.",
    solution:
      "Engineered an integrated web tourism platform using Laravel, PHP, and MySQL. Implemented reservation modules for lodgings, tours, and souvenirs along with unified order workflows, CRUD data management, and administration dashboards.",
    role: "Web Developer Intern",
    duration: "4 months (Apr 2026 – Jul 2026)",
    liveUrl: "https://kuypangandaran.com",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Accommodation & lodging reservation module",
      "Tour package booking and scheduling system",
      "Local souvenir and merchandise marketplace",
      "Integrated booking workflow and order processing",
      "Full CRUD functionality for listings and inventory",
      "Role-based administration dashboard and reporting",
      "Secure user authentication and data management",
      "Collaborative feature development & functional testing",
    ],
    challenges: [
      {
        issue: "Integrating multi-service reservations into a single order workflow",
        diagnosis:
          "Lodgings, tours, and souvenirs had different booking constraints (dates, participant counts, quantities)",
        repair:
          "Architected a dynamic reservation payload schema supporting heterogeneous tourism services in a unified transaction",
        result:
          "Streamlined customer booking experience and simplified admin order management",
      },
      {
        issue: "Preventing accommodation date overlaps and double-bookings",
        diagnosis:
          "High concurrency during peak reservation windows risked room double-booking",
        repair:
          "Implemented database transaction locks and strict date-range overlap queries",
        result:
          "Achieved 100% reservation accuracy with zero scheduling conflicts",
      },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "Apr 2026 – Jul 2026",
    company: "PT Inovindo Academy",
    role: "Web Developer Intern",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Mengembangkan platform pariwisata berbasis web menggunakan Laravel, PHP, dan MySQL yang mengintegrasikan reservasi penginapan, paket wisata, dan oleh-oleh.",
    points: [
      "Mengembangkan platform pariwisata berbasis web menggunakan Laravel, PHP, dan MySQL.",
      "Membangun modul reservasi penginapan, wisata, dan oleh-oleh beserta alur pemesanan terintegrasi.",
      "Mengimplementasikan fitur CRUD, autentikasi, manajemen data, dan dashboard administrasi.",
      "Berkolaborasi dalam pengembangan serta pengujian fitur sesuai kebutuhan pengguna.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
  },
  {
    period: "Mar 2026 – May 2026",
    company: "PT Pilar Sembilan Naga",
    role: "Recruitment Officer Intern",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Melakukan screening administrasi kandidat dan mengelola alur rekrutmen serta distribusi tenaga kerja cabang.",
    points: [
      "Melakukan screening administrasi kandidat berdasarkan kualifikasi yang dibutuhkan klien.",
      "Mengelola data kandidat dan memantau progres proses rekrutmen menggunakan spreadsheet.",
      "Berkoordinasi dengan PIC cabang untuk distribusi kandidat sesuai kebutuhan tenaga kerja.",
      "Membantu administrasi rekrutmen dan memastikan proses pengiriman kandidat berjalan tepat waktu.",
    ],
    technologies: ["HR Admin", "Candidate Screening", "Spreadsheet", "Recruitment Admin"],
  },
  {
    period: "Jul 2025 – Oct 2025",
    company: "Institut Digital Ekonomi LPKIA",
    role: "Mentor PKL Roblox Developer",
    location: "Bandung, Indonesia",
    type: "Mentorship",
    summary:
      "Membimbing peserta PKL dalam pengembangan game, logika pemrograman modular, dan arsitektur client-server Roblox Studio.",
    points: [
      "Membimbing peserta PKL dalam pengembangan game menggunakan Roblox Studio dan Lua.",
      "Memberikan arahan mengenai logika pemrograman, modular scripting, dan konsep client-server.",
      "Melakukan code review, debugging, serta membantu penyelesaian kendala teknis peserta.",
      "Mendampingi peserta hingga menyelesaikan proyek game sebagai bagian dari program PKL.",
    ],
    technologies: ["Roblox Studio", "Lua", "Client-Server Architecture", "Mentorship"],
  },
  {
    period: "Jul 2024 – Sep 2024",
    company: "PT Alyusro Bandung",
    role: "Web Developer Intern",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Mengembangkan sistem pencatatan keuangan jamaah umrah/haji, pembagian komisi agen, dan hak akses RBAC.",
    points: [
      "Mengembangkan sistem pencatatan keuangan jamaah menggunakan Laravel, PHP, dan MySQL.",
      "Membangun fitur autentikasi, role-based access, manajemen pengguna, pembayaran, dan komisi agen.",
      "Mendesain serta mengelola struktur database MySQL sesuai kebutuhan sistem.",
      "Melakukan debugging, pengujian fungsional (Black Box Testing), dan perbaikan bug selama pengembangan.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "RBAC", "Black Box Testing"],
  },
];

export const skills = {
  backend: [
    "PHP",
    "Laravel Framework",
    "MVC Architecture",
    "Routing",
    "Middleware",
    "Authentication",
    "Authorization",
    "CRUD Operations",
  ],
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  database: [
    "MySQL",
    "PostgreSQL",
    "Relational Database Design",
    "Database Normalization",
    "Eloquent ORM",
    "Query Optimization",
  ],
  devtools: [
    "Git & GitHub",
    "Vite",
    "Node.js",
    "npm",
    "Visual Studio Code",
    "Postman",
    "Spreadsheets / HR Tools",
  ],
  other: [
    "REST API Development",
    "Black Box Testing",
    "Functional Testing",
    "Debugging",
    "Data Validation",
    "Candidate Screening & HR Admin",
  ],
  gamedev: ["Roblox Studio", "Lua Scripting", "Modular Scripting"],
};

export const services = [
  {
    id: "SERVICE-01",
    title: "Web Application Development",
    description:
      "Design and development of custom web-based applications tailored to operational needs.",
    status: "Available",
  },
  {
    id: "SERVICE-02",
    title: "Information System Development",
    description:
      "Build structured information systems for data management and operational efficiency.",
    status: "Available",
  },
  {
    id: "SERVICE-03",
    title: "Laravel Backend Development",
    description:
      "Professional backend development using Laravel framework with focus on security and scalability.",
    status: "Available",
  },
  {
    id: "SERVICE-04",
    title: "React Frontend Development",
    description:
      "Modern frontend development using React and TypeScript for responsive user interfaces.",
    status: "Available",
  },
  {
    id: "SERVICE-05",
    title: "Database Design & Optimization",
    description:
      "Relational database design, normalization, and query optimization for better performance.",
    status: "Available",
  },
  {
    id: "SERVICE-06",
    title: "System Maintenance & Support",
    description:
      "Ongoing maintenance, debugging, and technical support for existing systems.",
    status: "Available",
  },
];
