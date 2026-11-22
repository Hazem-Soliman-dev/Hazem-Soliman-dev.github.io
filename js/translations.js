// js/translations.js

window.t = {
  en: {
    // UI elements
    workspace: 'Workspace',
    files: 'Explorer',
    search: 'Search...',
    searchPlaceholder: 'Search projects, skills, etc...',
    theme: 'Theme',
    language: 'العربية',
    gitBranch: 'git branch: ',
    statusReady: 'Ready',
    statusOpenForWork: 'Hazem is open to remote opportunities',
    terminalTitle: 'Terminal — bash',
    terminalPrompt: 'hazem-dev@portfolio:~$ ',
    terminalWelcome: 'Welcome to Hazem Soliman\'s interactive terminal shell. Type "help" to see available commands.',
    closeTab: 'Close tab',
    codeMode: 'Code',
    previewMode: 'Preview',
    copyCode: 'Copy',
    copied: 'Copied!',
    contactFormSuccess: 'Message sent successfully!',
    contactFormError: 'Please fill in all fields.',
    
    // Directory Tree Labels
    dirRoot: 'hazem-soliman-dev',
    fileAbout: 'about_me.md',
    fileSkills: 'skills.json',
    dirProjects: 'projects',
    fileExperience: 'experience.csv',
    fileEducation: 'education.txt',
    fileContact: 'contact_me.js',

    // About Me Content
    name: 'Hazem Soliman',
    title: 'Full-Stack Developer',
    subtitle: 'Building production SaaS platforms, enterprise systems, and AI-integrated applications.',
    location: 'Giza, Egypt',
    email: 'hazem.soliman.dev@gmail.com',
    aboutBio: 'I am a highly motivated Full-Stack Developer specializing in building production-ready SaaS platforms, enterprise business ecosystems, and AI-integrated web applications. I love creating software that solves real-world problems and delivers premium user experiences.',
    aboutCurrently: 'Software Engineering Intern at Raya IT — RTU Integration & SW Development Track (Sep 2026 – Present); completed soft skills, Foundations, and Sprint 1 (Networks & Web).',
    aboutContributed: 'Built MedFlow at XPilot — a SaaS medical platform with 5 dashboards; previously contributed to Otasky (live marketplace) and KONTAINAR (4-platform ERP/CRM).',
    aboutShipped: 'Recently shipped AI-driven and SaaS tools like NexFlow, HireFlow, InsightAgent, and ProposliGo.',
    aboutEducation: 'B.Sc. in Business Information Systems — Capital University (Helwan), Graduated 2026 (GPA: 81.64%).',
    aboutLeadership: 'Leadership role: Team Leader at Digitopia Hackathon 2025 (led 5-member team to deliver an MVP in 48h) and DEPI Group Leader.',

    // Skills Content
    skillsTitle: 'What I Work With',
    skillsLanguages: 'Languages',
    skillsBackend: 'Backend',
    skillsFrontend: 'Frontend',
    skillsDatabases: 'Databases & ORMs',
    skillsCloud: 'Cloud & DevOps',
    skillsIntegrations: 'Integrations',
    skillsAI: 'AI Integration',

    // Projects list labels
    liveLink: 'Live Demo',
    repoLink: 'GitHub Repo',
    projectAchievements: 'Key Accomplishments:',
    projectStack: 'Stack:',

    // Projects Data
    projects: {
      medflow: {
        title: 'MedFlow — SaaS Medical Management Platform',
        desc: 'Multi-tenant medical system featuring 5 role-based dashboards (Patient, Doctor, Receptionist, Clinic Admin, Super Admin).',
        bullets: [
          'Implemented complete authentication: registration, login, email OTP, JWT refresh tokens, and OAuth.',
          'Built Role-Based Access Control (RBAC) matrix for 5 distinct portal roles.',
          'Developed clinic onboarding wizard with dynamic Q&A layouts.',
          'Created inventory management module featuring automated low-stock alerts.',
          'Engineered doctor staff availability engine with automatic slot generation.',
          'Collaborated in Agile environment with a designer and developer using CI/CD.'
        ]
      },
      otasky: {
        title: 'Otasky — Live Talent Marketplace',
        desc: 'Two-sided freelance marketplace platform (web and mobile). Contributed as part of the Mega Serve team.',
        bullets: [
          'Built key frontend features across multiple sections of the live production platform.',
          'Designed and built compliance backend services, including Terms, Privacy, and dispute resolution APIs.',
          'Developed a customer support backend featuring ticketing and status tracking.',
          'Refactored user management module, authentication flows, and profile operations.',
          'Implemented sign-up pages frontend logic using custom hooks, Zustand, and Zod validation.',
          'Coordinated in an Agile/Scrum structure collaborating with PMs, seniors, and designers.'
        ]
      },
      nexflow: {
        title: 'NexFlow — Business Operating System',
        desc: 'Unified enterprise CRM, Inventory, and Invoicing system with real-time RBAC dashboard layouts.',
        bullets: [
          'Developed dynamic drag-and-drop Kanban pipeline for deal management using dnd-kit.',
          'Built atomic stock management module with automatic audit/adjustment logs.',
          'Created invoice generator with direct PDF exporting features utilizing jsPDF.',
          'Built specific dashboards for multiple roles: Global, Team, Personal, Logistics, Financial KPIs.',
          'Configured NextAuth.js v5 authentication system with a frictionless demo login feature.'
        ]
      },
      hireflow: {
        title: 'HireFlow — AI-Powered Applicant Tracking System',
        desc: 'SaaS system to streamline candidate sourcing, resume parsing, scoring, and management using AI.',
        bullets: [
          'Built dynamic drag-and-drop Kanban pipeline: Applied → Screened → Interview → Offer → Hired/Rejected.',
          'Integrated Llama 3.3-70b (via Groq) to parse and grade candidate resumes (0–100%) against job descriptions.',
          'Generated contextual AI insights detailing strengths and gaps in candidates\' resumes.',
          'Developed smart interview scheduler with automated Nodemailer email notifications.',
          'Included an analytics panel visualizing candidate score spreads and pipeline distribution.'
        ]
      },
      electropi: {
        title: 'Electro Pi — Bilingual Food Ordering Platform',
        desc: 'Bilingual food ordering web prototype with interactive shopping cart, payments, and admin menus.',
        bullets: [
          'Built bilingual menu browsing system with persistent cart and order checkout flow.',
          'Implemented double payment paths: Cash on Delivery and Polar checkout integration with simulator fallback.',
          'Developed authenticated order history profiles and status pages.',
          'Created admin control panels for food menus, prices, and photo uploads via UploadThing.'
        ]
      },
      insightagent: {
        title: 'InsightAgent — Agentic Business Intelligence',
        desc: 'Business intelligence system. Upload CSV datasets, ask questions in plain English, and get real-time charts.',
        bullets: [
          'Engineered file upload parser turning CSV data into dynamic PostgreSQL database tables.',
          'Built smart JOIN detector logic to relate multiple uploaded datasets automatically.',
          'Developed natural-language to SQL compiler using Groq Llama 3.3 model.',
          'Built auto-visualization interface rendering interactive table, bar, pie, and line charts with Recharts.',
          'Created an animated real-time "thinking process" UI detailing LLM chain operations.'
        ]
      },
      proposligo: {
        title: 'ProposliGo — AI Proposal Generator',
        desc: 'AI tool generating customized, high-converting job proposals for freelancers based on target styles.',
        bullets: [
          'Developed proposal engine generating copy with a selectable writing tone.',
          'Configured credit-based payment and subscription gateways using Polar integration.',
          'Built Clerk user profile management alongside historic proposal history archives.'
        ]
      },
      mosanada: {
        title: 'Mosanada — Multi-Tenant SaaS Platform',
        desc: 'Multi-tenant subscription management ledger with double-entry bookkeeping architecture.',
        bullets: [
          'Structured database entries using double-entry concepts (Debit Accounts Receivable, Credit Deferred Revenue).',
          'Built strict row-level tenant isolation to ensure data safety across business accounts.',
          'Developed 17+ comprehensive REST API endpoints with auto-generated Swagger documentation.',
          'Generated real-time corporate financial reports (Income Statement, Balance Sheet).'
        ]
      },
      promptrefiner: {
        title: 'Prompt Refiner — AI Requirements Tool',
        desc: 'AI assistant converting raw developer ideas into structured, copy-paste ready software specifications.',
        bullets: [
          'Engineered structured output generator matching industry-standard software requirement specs (SRS).',
          'Created minimal, high-speed UX optimizing prompt iteration speeds.'
        ]
      },
      kontainar: {
        title: 'KONTAINAR — Wholesale Distribution Ecosystem',
        desc: 'Enterprise e-commerce and ERP system composed of 4 coordinated platforms.',
        bullets: [
          'Kontainar-Hub (Next.js): Supplier portal with unified SSO, bilingual interface, and analytics.',
          'Kontainar-System (React & Material-UI): Admin dashboard managing products, brands, and sales orders.',
          'Hadoola-Store (Next.js): Customer-facing e-commerce storefront with cart and payment checkouts.',
          'Centralized Backend API (Laravel, MySQL, Redis): central REST API with RBAC security for 4 roles.'
        ]
      },
      crmdashboard: {
        title: 'CRM Dashboard — Real Estate Lead Management',
        desc: 'Multi-currency, bilingual real estate CRM dashboard for 13 active property agents.',
        bullets: [
          'Built 6-stage interactive lead pipeline and multi-currency exchange conversion widgets.',
          'Programmed role-based accesses (4 roles) and full English/Arabic dashboard translation.',
          'Implemented responsive charts and data tables sorting using TanStack Table.'
        ]
      },
      ecommerce_mean: {
        title: 'E-Commerce — MEAN Stack',
        desc: 'Graduation project for NTI MEAN Stack Bootcamp, achieving a 100% perfect score.',
        bullets: [
          'Designed and built customer storefront and administrator dashboard from scratch.',
          'Coded user authentication via JWT & bcrypt alongside photo storage modules with Multer.',
          'Utilized Angular, Node.js, Express, and MongoDB for database storage.'
        ]
      }
    },

    // Experience Data
    experienceTitle: 'Work Experience',
    expRoleLabel: 'Role:',
    expCompanyLabel: 'Company:',
    expPeriodLabel: 'Period:',
    expTypeLabel: 'Type:',
    experience: [
      {
        role: 'Software Engineering Intern',
        company: 'Raya IT (RTU Program)',
        period: '09/2026 – Present',
        type: 'Cairo',
        desc: 'Interning in the RTU Integration & SW Development track at Raya IT. Completed soft skills, Foundations, and Sprint 1 (Networks & Web) training; continuing through the remaining track curriculum.'
      },
      {
        role: 'Full-Stack Developer',
        company: 'XPilot (MedFlow)',
        period: '04/2026 – 05/2026',
        type: 'Remote (Dubai)',
        desc: 'Led engineering on the MedFlow medical SaaS portal. Structured clinic onboarding architectures, automated doctor schedules, patient check-in queues, and multi-tenant inventory control panels.'
      },
      {
        role: 'Full-Stack Developer Intern',
        company: 'Mega Serve (Otasky)',
        period: '02/2026 – 03/2026',
        type: 'Remote (Australia)',
        desc: 'Contributed to frontend feature rollouts and compliance backend frameworks for Otasky freelance marketplace. Programmed dispute APIs, ticketing modules, and validation models.'
      },
      {
        role: 'Full-Stack Developer Intern',
        company: 'Pencil Studio',
        period: '09/2025 – 01/2026',
        type: 'Remote (Egypt)',
        desc: 'Developed responsive client-facing web applications, CRM databases, and back-office portals. Integrated payment and messaging APIs.'
      },
      {
        role: 'Customer Services Trainee',
        company: 'Banque Misr',
        period: '07/2023 – 08/2023',
        type: 'On-site',
        desc: 'Trained in banking operations, customer relations, financial database entry, and retail service frameworks.'
      }
    ],

    // Education Data
    educationTitle: 'Education & Bootcamps',
    eduSchool: 'Institution',
    eduProgram: 'Program',
    eduGrade: 'Grade / Status',
    education: [
      {
        school: 'Capital University (Helwan)',
        program: 'B.Sc. Business Information Systems (2022-2026)',
        grade: '81.64%'
      },
      {
        school: 'NTI (National Telecommunication Institute)',
        program: 'MEAN Stack Bootcamp (120h)',
        grade: '100% (Honors)'
      },
      {
        school: 'DEPI (Digital Egypt Pioneers Initiative)',
        program: 'React/MERN Bootcamp (200h)',
        grade: 'Excellent'
      }
    ],

    // Leadership Data
    leadershipTitle: 'Leadership & Hackathons',
    leadership: [
      {
        role: 'Team Leader',
        org: 'Digitopia Hackathon 2025',
        desc: 'Led a 5-member team to design, code, and pitch a minimum viable product (MVP) in a high-pressure 48-hour event.'
      },
      {
        role: 'Group Leader',
        org: 'DEPI (Digital Egypt Pioneers Initiative)',
        desc: 'Coordinated and mentored a learning cohort of 18 developers throughout the MERN stack curriculum.'
      }
    ],

    // Contact Form Labels
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Send me a message or find me on social platforms.',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSubmit: 'Send Message',
    contactSending: 'Sending...',
    contactInfoTitle: 'Direct Contact Info',
    contactLocation: 'Location: Giza, Egypt',
    contactAvailable: 'Status: Open to remote work globally',
    socialLinks: 'Professional Networks',
  },
  ar: {
    // UI elements
    workspace: 'مساحة العمل',
    files: 'مستكشف الملفات',
    search: 'بحث...',
    searchPlaceholder: 'ابحث عن المشاريع، المهارات، إلخ...',
    theme: 'المظهر',
    language: 'English',
    gitBranch: 'فرع الجيت: ',
    statusReady: 'جاهز',
    statusOpenForWork: 'حازم متاح للعمل عن بعد',
    terminalTitle: 'شاشة الأوامر — bash',
    terminalPrompt: 'hazem-dev@portfolio:~$ ',
    terminalWelcome: 'مرحباً بك في شاشة الأوامر التفاعلية الخاصة بالمطور حازم سليمان. اكتب "help" لعرض الأوامر المتاحة.',
    closeTab: 'إغلاق علامة التبويب',
    codeMode: 'عرض الكود',
    previewMode: 'عرض المعاينة',
    copyCode: 'نسخ الكود',
    copied: 'تم النسخ!',
    contactFormSuccess: 'تم إرسال الرسالة بنجاح!',
    contactFormError: 'يرجى ملء جميع الحقول المطلوبة.',
    
    // Directory Tree Labels
    dirRoot: 'hazem-soliman-dev',
    fileAbout: 'about_me.md',
    fileSkills: 'skills.json',
    dirProjects: 'projects',
    fileExperience: 'experience.csv',
    fileEducation: 'education.txt',
    fileContact: 'contact_me.js',

    // About Me Content
    name: 'حازم سليمان',
    title: 'مطور ويب متكامل (Full-Stack Developer)',
    subtitle: 'بناء منصات برمجية كخدمة (SaaS) تجارية، أنظمة مؤسسية، وتطبيقات مدمجة بالذكاء الاصطناعي.',
    location: 'الجيزة، مصر',
    email: 'hazem.soliman.dev@gmail.com',
    aboutBio: 'أنا مطور ويب متكامل (Full-Stack) شغوف ببناء منصات SaaS الجاهزة للإنتاج، والأنظمة البيئية للمؤسسات، وتطبيقات الويب المدمجة بالذكاء الاصطناعي. أهتم بإنشاء برمجيات تحل مشاكل حقيقية وتقدم تجارب مستخدم ممتازة.',
    aboutCurrently: 'أعمل حالياً كمتدرب هندسة برمجيات في شركة Raya IT — ضمن مسار RTU للتكامل وتطوير البرمجيات (سبتمبر 2026 – الحالي)؛ أنهيت تدريب المهارات الشخصية ومرحلة Foundations والسبرينت الأول (الشبكات والويب).',
    aboutContributed: 'بنيت منصة MedFlow في شركة XPilot — منصة طبية كخدمة (SaaS) تحتوي على 5 لوحات تحكم؛ وساهمت سابقاً في Otasky (منصة عمل حر حية) و KONTAINAR (نظام ERP/CRM متكامل من 4 منصات).',
    aboutShipped: 'أطلقت مؤخراً أدوات برمجية مدعومة بالذكاء الاصطناعي مثل NexFlow و HireFlow و InsightAgent و ProposliGo.',
    aboutEducation: 'بكالوريوس نظم معلومات الأعمال — جامعة حلوان (كلية التجارة وإدارة الأعمال)، تخرج عام 2026 (المعدل التراكمي: 81.64%).',
    aboutLeadership: 'الأدوار القيادية: قائد فريق في هاكاثون Digitopia 2025 (قدت فريقاً من 5 أعضاء لتقديم منتج MVP خلال 48 ساعة) وقائد مجموعة في مبادرة DEPI.',

    // Skills Content
    skillsTitle: 'التقنيات التي أعمل بها',
    skillsLanguages: 'لغات البرمجة',
    skillsBackend: 'خلفية التطوير (Backend)',
    skillsFrontend: 'واجهة المستخدم (Frontend)',
    skillsDatabases: 'قواعد البيانات ومخططات ORMs',
    skillsCloud: 'السحابة والعمليات السحابية (DevOps)',
    skillsIntegrations: 'التكامل والربط',
    skillsAI: 'الذكاء الاصطناعي',

    // Projects list labels
    liveLink: 'معاينة مباشرة',
    repoLink: 'رابط الكود (GitHub)',
    projectAchievements: 'أهم الإنجازات وما قمت ببنائه:',
    projectStack: 'التقنيات المستخدمة:',

    // Projects Data
    projects: {
      medflow: {
        title: 'MedFlow — منصة إدارة عيادات ومراكز طبية (SaaS)',
        desc: 'نظام طبي متعدد المستأجرين (SaaS) يتميز بـ 5 لوحات تحكم مخصصة للأدوار (المريض، الطبيب، موظف الاستقبال، مدير العيادة، المدير العام).',
        bullets: [
          'إعداد نظام مصادقة كامل: تسجيل، تسجيل دخول، كود التحقق OTP بالبريد الإلكتروني، رموز JWT المحدثة، و OAuth.',
          'بناء صلاحيات الوصول المستندة إلى الأدوار (RBAC) لـ 5 أدوار مختلفة لبوابة النظام.',
          'تطوير واجهات إعداد العيادات مع أسئلة وأجوبة تفاعلية وديناميكية.',
          'إنشاء وحدة إدارة المخزون والمستلزمات الطبية مع تنبيهات تلقائية عند انخفاض الكميات.',
          'برمجة محرك توفر الأطباء ومواعيدهم مع توليد وحجز الفترات الزمنية تلقائياً.',
          'العمل في بيئة Agile المرنة مع مصمم ومطورين وتطبيق نهج التطوير والنشر المستمر CI/CD.'
        ]
      },
      otasky: {
        title: 'Otasky — منصة خدمات وعمل حر تفاعلية',
        desc: 'منصة سوق عمل حر ثنائية الجوانب (موقع ويب وتطبيق جوال). شاركت في تطويرها كجزء من فريق شركة Mega Serve.',
        bullets: [
          'تطوير ميزات الواجهة الأمامية الرئيسية عبر أقسام متعددة في المنصة الحية الموجهة للمستخدمين.',
          'تصميم وبناء خدمات الواجهة الخلفية الخاصة بالامتثال القانوني مثل شروط الخدمة، سياسة الخصوصية، وواجهات حل النزاعات.',
          'تطوير نظام الدعم الفني والمساعدة في الواجهة الخلفية مع إدارة التذاكر وحالات المتابعة.',
          'تحديث وحدة إدارة المستخدمين، وتدفقات المصادقة، والعمليات الخاصة بالملفات الشخصية.',
          'برمجة منطق صفحات التسجيل والتحقق بالواجهة الأمامية باستخدام Zustand و Zod والخطافات المخصصة.',
          'العمل في بيئة Agile متكاملة مع مدير المنتج، مهندس الواجهات الخلفية، ومطور تطبيق الجوال.'
        ]
      },
      nexflow: {
        title: 'NexFlow — نظام تشغيل وإدارة الشركات والأعمال الكبرى',
        desc: 'منظومة متكاملة لربط إدارة العملاء (CRM) والمخازن والفوترة مع لوحات تحكم ديناميكية وصلاحيات مستخدمين فورية.',
        bullets: [
          'تطوير نظام متابعة الصفقات بنظام السحب والإفلات (Kanban Pipeline) باستخدام dnd-kit.',
          'إنشاء نظام إدارة المخزون الدقيق مع سجلات المراجعة والتدقيق التلقائية لتسجيل التعديلات.',
          'تطوير وحدة إنشاء وتصدير الفواتير التفاعلية إلى ملفات PDF بالاعتماد على مكتبة jsPDF.',
          'بناء لوحات تحكم مخصصة للأدوار الوظيفية: لوحات عالمية، للفريق، شخصية، للخدمات اللوجستية، والمؤشرات المالية الكبرى.',
          'تهيئة نظام المصادقة والمداخل الآمنة NextAuth.js v5 مع تسجيل دخول سريع وتفاعلي للمعاينة.'
        ]
      },
      hireflow: {
        title: 'HireFlow — نظام فرز وتوظيف مدعوم بالذكاء الاصطناعي',
        desc: 'منصة لتبسيط عمليات جذب الكفاءات، فحص السير الذاتية، تقييمها، وإدارتها عبر الذكاء الاصطناعي.',
        bullets: [
          'بناء نظام متابعة المتقدمين بآلية السحب والإفلات: تم التقديم ← تمت المقابلة الأولى ← مقابلة رئيسية ← تقديم عرض ← مقبول/مرفوض.',
          'دمج نموذج Llama 3.3-70b (عبر Groq) لاستخراج النصوص من السير الذاتية وتقييمها (من 0 إلى 100%) مقارنة بالوصف الوظيفي.',
          'توليد رؤى وتقييمات نصية بالذكاء الاصطناعي تحدد نقاط القوة والثغرات لدى المتقدمين.',
          'تطوير نظام جدولة مقابلات ذكي يرسل إشعارات تلقائية عبر البريد الإلكتروني (Nodemailer) للمتقدمين والمحاورين.',
          'إعداد لوحة إحصاءات متكاملة تعرض توزيع درجات الذكاء الاصطناعي وتوزيع المرشحين بالأنبوب.'
        ]
      },
      electropi: {
        title: 'Electro Pi — منصة طلب طعام تفاعلية ثنائية اللغة',
        desc: 'نموذج أولي لموقع ويب لطلب الطعام مع سلة مشتريات تفاعلية، عمليات الدفع، ولوحة تحكم للإدارة.',
        bullets: [
          'بناء نظام تصفح قوائم الطعام بثنائية لغة متكاملة مع سلة مشتريات مستمرة وخطوات إرسال الطلب.',
          'تطبيق مساري دفع: الدفع عند الاستلام، والدفع الإلكتروني عبر Polar مع محاكاة محلية بديلة في حال عدم الاتصال.',
          'تطوير واجهات تاريخ الطلبات السابقة مع الحالات التحديثية للعملاء المسجلين.',
          'تصميم لوحة إدارة للمشرفين للتحكم بمحتوى القوائم وتعديل الأسعار ورفع الصور بواسطة UploadThing.'
        ]
      },
      insightagent: {
        title: 'InsightAgent — نظام ذكاء أعمال ووكيل بياني ذكي',
        desc: 'نظام ذكاء أعمال متطور. ارفع ملفات CSV، واطرح أسئلتك بلغة طبيعية، واحصل على رسومات بيانية تفاعلية فوراً.',
        bullets: [
          'برمجة معالج لتحليل ملفات البيانات وتحويل ملفات CSV المرفوعة إلى جداول ديناميكية في قاعدة PostgreSQL.',
          'تطوير نظام ذكي للتعرف التلقائي على علاقات الربط (JOINs) بين مجموعات البيانات المختلفة المرفوعة.',
          'بناء مترجم للغة الطبيعية إلى استعلامات SQL آمنة بالاعتماد على نماذج Groq Llama 3.3.',
          'تطوير واجهات رسوم بيانية تفاعلية (أعمدة، دوائر، خطوط) لعرض البيانات المكتشفة باستخدام Recharts.',
          'تصميم واجهة تفاعلية توضح خطوات تفكير ومعالجة الذكاء الاصطناعي والوكيل خطوة بخطوة بالوقت الفعلي.'
        ]
      },
      proposligo: {
        title: 'ProposliGo — نظام توليد عروض العمل بالذكاء الاصطناعي',
        desc: 'أداة ذكاء اصطناعي لكتابة وتوليد عروض وطلبات مشاريع احترافية بناءً على نبرة أسلوب يختارها المستخدم.',
        bullets: [
          'تطوير محرك توليد مقترحات وعروض العمل بنبرة كتابة يختارها المستخدم.',
          'دمج أنظمة الفوترة والاشتراكات بنظام النقاط والائتمان عبر واجهة ربط Polar (محولة من Stripe).',
          'برمجة بوابات التسجيل الآمنة Clerk مع توفير أرشيف كامل للمقترحات وعروض العمل التاريخية لكل مستخدم.'
        ]
      },
      mosanada: {
        title: 'مساندة (Mosanada) — منصة إدارة اشتراكات للشركات (SaaS)',
        desc: 'نظام إدارة اشتراكات متعدد المستأجرين مع هيكلية مسك دفاتر ومحاسبة بنظام القيد المزدوج.',
        bullets: [
          'هيكلة المعاملات المحاسبية بنظام القيد المزدوج المتطور (مدين لحساب المقبوضات الدائن للإيرادات المؤجلة).',
          'تطبيق عزل بيانات المستأجرين على مستوى الصفوف بقاعدة البيانات لضمان خصوصية مطلقة للشركات.',
          'تطوير أكثر من 17 واجهة برمجية REST API متكاملة موثقة بالكامل باستخدام Swagger.',
          'توليد تقارير وقوائم مالية حية (قائمة الدخل، الميزانية العمومية).'
        ]
      },
      promptrefiner: {
        title: 'Prompt Refiner — أداة صياغة متطلبات البرمجيات بالذكاء الاصطناعي',
        desc: 'أداة تفاعلية تحول الأفكار البرمجية البسيطة والمسودات إلى وثائق متطلبات مواصفات برمجية منظمة وجاهزة للكتابة.',
        bullets: [
          'تطوير معالج نصوص وطلبات لإنشاء متطلبات مطابقة لمواصفات SRS البرمجية المعتمدة بالصناعة.',
          'تصميم واجهة مستخدم سريعة وبسيطة تركز على زيادة كفاءة المطورين وسرعة إنتاج المستندات.'
        ]
      },
      kontainar: {
        title: 'KONTAINAR — منظومة توزيع وتجارة الجملة المتكاملة',
        desc: 'منظومة تجارة وتوزيع ضخمة تتكون من 4 منصات برمجية مختلفة متزامنة مع قاعدة بيانات موحدة.',
        bullets: [
          'منصة Kontainar-Hub (بـ Next.js): بوابة الموردين والتجار — تسجيل موحد SSO، تحليلات، لغتين.',
          'منصة Kontainar-System (بـ React & Material-UI): لوحة تحكم الإدارة والمشرفين للمنتجات والماركات والطلبات.',
          ' Hadoola-Store (بـ Next.js): المتجر الإلكتروني الموجه للعملاء — سلة المشتريات وعمليات الدفع.',
          'الواجهة البرمجية المركزية (Laravel, MySQL, Redis): خادم REST API مركزي يوفر الصلاحيات والـ RBAC لـ 4 أدوار أساسية.'
        ]
      },
      crmdashboard: {
        title: 'CRM Dashboard — لوحة تحكم إدارة عملاء العقارات والشركات',
        desc: 'منظومة CRM لإدارة العقارات والمبيعات مصممة لـ 13 وكيلاً ومسؤول مبيعات نشطاً.',
        bullets: [
          'إنشاء خط مبيعات تفاعلي من 6 مراحل ومربعات تحويل لـ 5 عملات رئيسية بالوقت الفعلي.',
          'إعداد لوحة التحكم لتشمل 4 أدوار وصلاحيات وصول كاملة بالإضافة لترجمة كاملة للغتين.',
          'تطوير جداول بيانات متطورة ورسوم بيانية تفاعلية باستخدام TanStack Table و Recharts.'
        ]
      },
      ecommerce_mean: {
        title: 'متجر إلكتروني متكامل — MEAN Stack',
        desc: 'مشروع التخرج لمخيم معهد الاتصالات القومي (NTI) في تقنيات MEAN Stack وحصل على درجة 100% مع مرتبة الشرف.',
        bullets: [
          'تطوير كامل لمتجر المشتري ولوحة تحكم المشرف والمدير بشكل فردي دون مساعدة.',
          'برمجة أنظمة التسجيل والتأمين بنظام JWT و تشفير الكلمات بـ bcrypt ومخزن الصور بـ Multer.',
          'بناء النظام بالكامل باستخدام Angular و Node.js و Express وقاعدة بيانات MongoDB.'
        ]
      }
    },

    // Experience Data
    experienceTitle: 'الخبرة المهنية',
    expRoleLabel: 'الوظيفة:',
    expCompanyLabel: 'الشركة:',
    expPeriodLabel: 'الفترة الزمنية:',
    expTypeLabel: 'نوع العمل:',
    experience: [
      {
        role: 'متدرب هندسة برمجيات (Software Engineering Intern)',
        company: 'Raya IT (برنامج RTU)',
        period: '09/2026 – الحالي',
        type: 'القاهرة',
        desc: 'متدرب هندسة برمجيات ضمن مسار RTU للتكامل وتطوير البرمجيات في راية. أنهيت تدريب المهارات الشخصية ومرحلة Foundations والسبرينت الأول (الشبكات والويب)، وأواصل استكمال باقي منهج المسار التدريبي.'
      },
      {
        role: 'مطور ويب متكامل (Full-Stack Developer)',
        company: 'XPilot (MedFlow)',
        period: '04/2026 – 05/2026',
        type: 'عن بعد (دبي)',
        desc: 'قدت التطوير البرمجي لمنصة MedFlow الطبية (SaaS). شمل العمل هيكلة تهيئة العيادات، وأنظمة الجدولة التلقائية للأطباء، وإدارة قوائم انتظار المرضى، والمخازن متعددة المستأجرين.'
      },
      {
        role: 'متدرب تطوير ويب متكامل (Full-Stack Developer Intern)',
        company: 'Mega Serve (Otasky)',
        period: '02/2026 – 03/2026',
        type: 'عن بعد (أستراليا)',
        desc: 'المساهمة في تطوير ميزات الواجهة الأمامية وأنظمة الواجهة الخلفية الخاصة بالامتثال والحلول القانونية لسوق Otasky للعمل الحر. برمجة واجهات حل النزاعات ورفع التذاكر.'
      },
      {
        role: 'متدرب تطوير ويب متكامل (Full-Stack Developer Intern)',
        company: 'Pencil Studio',
        period: '09/2025 – 01/2026',
        type: 'عن بعد (مصر)',
        desc: 'تطوير مواقع وتطبيقات ويب سريعة الاستجابة موجهة للعملاء، قواعد بيانات علاقات العملاء (CRM)، وأنظمة المكاتب الخلفية. دمج بوابات الدفع وإرسال الإشعارات.'
      },
      {
        role: 'متدرب خدمة عملاء المصارف',
        company: 'بنك مصر',
        period: '07/2023 – 08/2023',
        type: 'تدريب ميداني (موقع البنك)',
        desc: 'التدرب على العمليات المصرفية، وخدمة العملاء، وإدخال وتدقيق البيانات في المنظومة المالية للبنك.'
      }
    ],

    // Education Data
    educationTitle: 'التعليم والتدريب المعتمد',
    eduSchool: 'المؤسسة التعليمية',
    eduProgram: 'التخصص البرنامجي',
    eduGrade: 'التقدير / النتيجة',
    education: [
      {
        school: 'جامعة حلوان (Capital University)',
        program: 'بكالوريوس نظم معلومات الأعمال (Business Information Systems) للفترة 2022-2026',
        grade: '81.64%'
      },
      {
        school: 'معهد الاتصالات القومي (NTI)',
        program: 'معسكر تدريبي مكثف في تطوير MEAN Stack (120 ساعة)',
        grade: '100% (امتياز مع مرتبة الشرف)'
      },
      {
        school: 'مبادرة رواد مصر الرقمية (DEPI)',
        program: 'معسكر تدريبي مكثف في تطوير React/MERN Stack (200 ساعة)',
        grade: 'ممتاز'
      }
    ],

    // Leadership Data
    leadershipTitle: 'القيادة والهاكاثونات',
    leadership: [
      {
        role: 'قائد الفريق (Team Leader)',
        org: 'هاكاثون Digitopia 2025',
        desc: 'قدت فريق عمل من 5 مطورين ومصممين لإنجاز وتصميم وتقديم منتج MVP كامل وتقديمه أمام لجنة التحكيم خلال 48 ساعة فقط.'
      },
      {
        role: 'قائد المجموعة (Group Leader)',
        org: 'مبادرة رواد مصر الرقمية (DEPI)',
        desc: 'تنسيق وإدارة ومساعدة مجموعة دراسية مكونة من 18 مطوراً طوال فترة دراسة منهج MERN Stack.'
      }
    ],

    // Contact Form Labels
    contactTitle: 'تواصل معي',
    contactSubtitle: 'يمكنك إرسال رسالة مباشرة أو العثور عليّ في المنصات المهنية.',
    contactName: 'الاسم',
    contactEmail: 'البريد الإلكتروني',
    contactMessage: 'الرسالة',
    contactSubmit: 'إرسال الرسالة',
    contactSending: 'جاري الإرسال...',
    contactInfoTitle: 'معلومات الاتصال المباشر',
    contactLocation: 'الموقع: الجيزة، جمهورية مصر العربية',
    contactAvailable: 'الحالة الوظيفية: متاح للعمل والتعاقدات عن بعد عالمياً',
    socialLinks: 'الشبكات والمنصات المهنية',
  }
};
