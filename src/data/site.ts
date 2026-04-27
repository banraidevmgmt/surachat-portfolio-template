const sharedProfile = {
  name: 'Surachat Rueangtara',
  nickname: 'Khing',
  phone: '091-814-3589',
  line: 'khing.su420',
  email: 'surachat.khing@gmail.com',
  linkedin: 'https://www.linkedin.com/in/surachat-rueangtara-b9174239a/',
  githubPrimary: 'https://github.com/Sirkhing',
  githubSecondary: 'https://github.com/banraidevmgmt',
};

export const siteContent = {
  en: {
    profile: {
      ...sharedProfile,
      role: 'Full-stack Engineer with a system analyst mindset',
      tagline:
        'Production systems built around real business workflows.',
      intro:
        'I design and build software systems that solve operational problems - from rubber trading workflows and queue management to OCR document extraction, PDF-to-CSV conversion, KYC automation, and internal business platforms.',
      about: [
        'My strength is turning unclear business workflows into working systems. I can analyze the process, design the data flow, build the API, connect automation, and deliver usable frontend interfaces.',
        'My work includes rubber purchasing systems, queue-calling systems, OCR and PDF-to-CSV accounting tools, KYC automation, referral analytics, Flutter apps, Laravel systems, Node.js APIs, MySQL databases, and n8n workflows.',
        'I usually work close to real business constraints: messy data, manual processes, document-heavy workflows, branch-level operations, reporting, auditability, and production fixes.',
        'I am growing toward a system analyst or senior engineer path, with strong hands-on ability across frontend, backend, database, automation, and deployment.',
      ],
      location: 'Chanthaburi, Thailand',
      availability: 'Open to full-stack engineer, system analyst, senior engineer, and tech lead roles.',
    },
    portfolioContent: {
      tagline: 'Full-stack developer turning business workflows into production-ready systems.',
      bio:
        'I am a full-stack engineer from Chanthaburi, Thailand, focused on system analysis, backend logic, workflow automation, and practical business software. My work covers rubber purchasing systems, queue management, OCR and PDF-to-CSV automation, KYC automation, reporting systems, and Flutter or React applications.',
      sellingPoints: [
        'Strong ability to analyze real business workflows and convert them into software systems.',
        'Hands-on full-stack experience across frontend, backend, database, automation, and deployment.',
        'Experienced in document-heavy and operation-heavy systems such as OCR, PDF-to-CSV, receipts, reports, queues, and compliance workflows.',
      ],
    },
    skillAnalysis: [
      {
        category: 'System Analysis / Workflow Design',
        level: 'Upper-mid to senior-track',
        reasoning:
          'Strong experience analyzing business workflows such as rubber purchasing, queue calling, financial document processing, KYC, referral logic, and internal reporting.',
      },
      {
        category: 'Backend / API',
        level: 'Upper-mid to senior',
        reasoning:
          'Hands-on experience with Node.js, TypeScript, Laravel, MySQL, JWT, external APIs, transaction logic, report APIs, and workflow-heavy backend systems.',
      },
      {
        category: 'Frontend / Application UI',
        level: 'Mid to upper-mid',
        reasoning:
          'Built Flutter, Flutter Web, Laravel Blade, and React interfaces for real users, internal tools, dashboards, reports, modal workflows, and mobile-style business apps.',
      },
      {
        category: 'Automation / AI / OCR',
        level: 'Upper-mid',
        reasoning:
          'Built practical OCR, PDF extraction, OpenRouter and Gemini parsing, n8n workflows, CSV generation, file conversion, and document normalization pipelines.',
      },
      {
        category: 'Database / Data Processing',
        level: 'Upper-mid',
        reasoning:
          'Works with MySQL, Supabase and Postgres, Firestore, reporting queries, receipt records, quota tracking, referral hierarchy, and structured document data.',
      },
      {
        category: 'DevOps / Deployment',
        level: 'Mid to upper-mid',
        reasoning:
          'Practical deployment experience with Docker, n8n self-hosting, AWS EC2, Cloudflare, Firebase, Vercel, and GCP Cloud Build.',
      },
    ],
    strengths: [
      {
        title: 'Business workflow translation',
        evidence:
          'Rubber trading system, banking/internal service workflow, PDF-to-CSV converter, OCR accounting flow',
        impact:
          'Can turn manual or unclear operations into structured digital workflows that users can actually operate.',
      },
      {
        title: 'Full-stack ownership',
        evidence:
          'Works across Flutter, React, Laravel Blade, Node.js, Laravel, MySQL, Firebase, n8n, and deployment',
        impact:
          'Can own the whole feature from requirement analysis to UI, API, database, automation, and production support.',
      },
      {
        title: 'Document automation and data extraction',
        evidence:
          'OCR pipelines, PDF-to-CSV reporting, Thai tax and financial document extraction, statement parsing',
        impact:
          'Reduces manual accounting and reporting work and improves consistency of extracted business data.',
      },
      {
        title: 'Real production problem solving',
        evidence:
          'Handles branch conditions, receipt printing, EUDR quota logic, queue flow, report generation, and API integrations',
        impact:
          'Builds systems that fit actual operational edge cases rather than only simple demo scenarios.',
      },
      {
        title: 'Backend and data integrity thinking',
        evidence:
          'Receipt ID generation, quota tracking, transaction reports, referral calculations, authentication, and API validation',
        impact:
          'Improves correctness, traceability, and maintainability in business-critical systems.',
      },
    ],
    weaknesses: [
      {
        issue: 'English technical writing',
        risk:
          'May need more refinement when writing formal English documentation, API docs, or communicating with international teams.',
        improvement:
          'Practice writing structured English technical specs, API documentation, and architecture decision records.',
      },
      {
        issue: 'Formal system design documentation',
        risk:
          'Some systems may be built correctly but not documented clearly enough for handoff, audit, or team scaling.',
        improvement:
          'Create standard templates for ERD, API contract, workflow diagram, sequence diagram, and deployment notes.',
      },
      {
        issue: 'UI/UX consistency',
        risk:
          'Functional UI may not always feel polished or consistent without a shared design system.',
        improvement:
          'Adopt component libraries, design tokens, layout rules, and reusable UI patterns across projects.',
      },
      {
        issue: 'Deep infrastructure scaling',
        risk:
          'Current strength is practical deployment, but very large-scale distributed infrastructure may require more depth.',
        improvement:
          'Study observability, queues, caching strategy, Kubernetes basics, CI/CD pipelines, and load testing.',
      },
    ],
    stackGroups: [
      {
        title: 'System & Workflow Design',
        items: [
          'Requirement Analysis',
          'Business Process Mapping',
          'System Flow Design',
          'State-based Workflows',
          'Report Flow Design',
          'API-first Development',
        ],
      },
      {
        title: 'Backend',
        items: [
          'Node.js',
          'TypeScript',
          'Express.js',
          'Laravel',
          'PHP',
          'REST API',
          'JWT Authentication',
          'RBAC',
          'Webhook Integration',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'Flutter',
          'Flutter Web',
          'GetX',
          'React.js',
          'Next.js',
          'TailwindCSS',
          'Laravel Blade',
        ],
      },
      {
        title: 'Database & Data',
        items: [
          'MySQL',
          'Supabase / Postgres',
          'Firebase Firestore',
          'Reporting Queries',
          'CSV Generation',
          'PDF Data Extraction',
          'Data Normalization',
        ],
      },
      {
        title: 'Automation & AI',
        items: [
          'n8n',
          'OCR Workflow',
          'OpenRouter',
          'Gemini',
          'PDF-to-CSV Converter',
          'Document Parser',
          'Workflow Automation',
        ],
      },
      {
        title: 'DevOps & Tools',
        items: [
          'Docker',
          'AWS EC2',
          'Cloudflare',
          'Firebase Hosting',
          'Vercel',
          'GCP Cloud Build',
          'Postman',
          'GitHub',
        ],
      },
    ],
    projects: [
      {
        slug: 'gsb-queue-calling-system',
        name: 'Banking/Internal Service Workflow System',
        year: 'Banking / Internal Operation',
        summary:
          'Queue and service workflow for a banking/internal service environment, designed to support branch-level operations and improve customer handling.',
        problem:
          'Queue operations require clear service flow, visible status, controlled calling behavior, and reliable frontend interaction for staff usage.',
        solution:
          'Built a queue management workflow with frontend display, backend state control, queue status handling, and operational logic prepared for real branch usage.',
        impact:
          'Supports structured queue operation and improves service visibility before official launch.',
        tech: ['Flutter / Web UI', 'Node.js / API', 'Workflow Logic', 'Queue State Management'],
        architecture: [
          'Staff-facing queue control',
          'Customer-facing queue display',
          'Backend queue state logic',
          'Service flow and status transitions',
        ],
      },
      {
        slug: 'pdf-to-csv-report-converter',
        name: 'PDF to CSV Report Converter',
        year: 'Accounting / Document Automation',
        summary:
          'Converter system that extracts structured data from PDF documents and transforms them into CSV reports for accounting and operational use.',
        problem:
          'Financial and business documents often arrive as PDFs, making manual extraction slow, inconsistent, and difficult to reuse in reporting workflows.',
        solution:
          'Built a PDF parsing and conversion pipeline that reads document content, normalizes fields, maps data into structured columns, and exports clean CSV reports.',
        impact:
          'Reduces manual copy-paste work and makes document data ready for accounting, review, and reporting workflows.',
        tech: ['n8n', 'Node.js', 'PDF Parsing', 'CSV Export', 'OpenRouter / Gemini', 'Data Normalization'],
        architecture: [
          'PDF input',
          'Text and OCR extraction',
          'Field normalization',
          'CSV column mapping',
          'Downloadable report output',
        ],
      },
      {
        slug: 'rubber-trading-platform',
        name: 'Rubber Purchasing & Trading System',
        year: 'Commodity / Internal Business System',
        summary:
          'Rubber purchasing system for managing customers, receipts, LOT reports, daily reports, EUDR quota, branch conditions, and print workflows.',
        problem:
          'Rubber purchasing workflows involve branch-specific rules, receipts, daily summaries, LOT tracking, pricing, fees, EUDR data, and printable reports.',
        solution:
          'Built Laravel Blade and Node.js with MySQL workflows featuring customer search, receipt generation, report filtering, EUDR quota tracking, and modal-based print previews.',
        impact:
          'Improves transaction recording, reduces manual report preparation, and supports branch-level operational control.',
        tech: ['Laravel', 'Node.js', 'MySQL', 'JavaScript', 'Blade', 'Report Printing'],
        architecture: [
          'Customer and receipt management',
          'Rubber transaction API',
          'Daily and LOT report generation',
          'EUDR quota tracking',
          'Branch-specific print logic',
        ],
      },
      {
        slug: 'ocr-accounting-pipeline',
        name: 'OCR Accounting Pipeline',
        year: 'Finance Automation',
        summary:
          'OCR and LLM-based pipeline for extracting structured data from Thai financial, tax, bank statement, and receipt documents.',
        problem:
          'Manual extraction from invoices, tax forms, payment slips, and bank statements is slow and error-prone.',
        solution:
          'Designed n8n and OpenRouter or Gemini workflows with strict JSON extraction, validation, normalization, and CSV or report preparation.',
        impact:
          'Transforms unstructured financial documents into structured data ready for review and accounting workflows.',
        tech: ['n8n', 'OpenRouter', 'Gemini', 'Node.js', 'JSON Parser', 'CSV'],
        architecture: [
          'Document upload',
          'OCR and LLM extraction',
          'Strict JSON normalization',
          'Validation and warning fields',
          'CSV and report output',
        ],
      },
      {
        slug: 'kyc-automation-system',
        name: 'KYC Automation System',
        year: 'Compliance / Automation',
        summary:
          'Automation system for KYC verification using browser automation, document flow, notification, and review routing.',
        problem:
          'Manual KYC checking is repetitive, slow, and difficult to track consistently.',
        solution:
          'Built automation with Playwright or Appium-style flows, backend integration, Telegram notification, and structured status tracking.',
        impact:
          'Reduces repeated manual checking and improves visibility of verification status.',
        tech: ['Node.js', 'Playwright', 'Telegram Bot', 'API Integration', 'Automation'],
        architecture: [
          'KYC input',
          'Automation process',
          'Verification status update',
          'Notification',
          'Human review fallback',
        ],
      },
      {
        slug: 'referral-analytics-system',
        name: 'Referral Analytics System',
        year: 'Analytics / Network Data',
        summary:
          'Referral data and analytics workflow for tracking referral hierarchy, member relationships, and business reporting.',
        problem:
          'Referral networks require clear hierarchy tracking, count summaries, and reliable report generation.',
        solution:
          'Built API and frontend logic to fetch, cache, group, and display referral-related data with optimized loading behavior.',
        impact:
          'Improves visibility into referral performance and supports business decision-making.',
        tech: ['React', 'Node.js', 'MySQL', 'LocalStorage Cache', 'API Integration'],
        architecture: [
          'Referral API',
          'Hierarchy data loading',
          'Frontend caching',
          'Grouped analytics display',
        ],
      },
    ],
    experiences: [
      {
        title: 'Full-stack Engineer / System Analyst-Oriented Developer',
        meta: 'Production and freelance projects | 2022 - Present',
        points: [
          'Built business-critical systems across rubber purchasing, document automation, queue management, KYC automation, referral analytics, and internal reporting.',
          'Designed APIs, database structures, frontend workflows, and automation pipelines based on real operational requirements.',
          'Worked with Laravel, Node.js, Flutter, React, MySQL, Firebase, n8n, Docker, and cloud deployment tools.',
        ],
      },
      {
        title: 'Application & Automation Developer',
        meta: 'Client and internal systems | 2020 - 2022',
        points: [
          'Built web and mobile applications with API integration, authentication, reporting, and operational dashboards.',
          'Created automation flows for repetitive tasks, document processing, browser and mobile automation, and notification systems.',
          'Supported legacy system improvements and practical migration from manual processes to digital workflows.',
        ],
      },
    ],
    systemProfile: {
      consistency:
        'Understands practical consistency needs in receipt systems, quota tracking, queue status, document conversion, and transaction reports.',
      asyncDesign:
        'Uses async workflows for OCR, PDF conversion, notifications, document processing, and automation tasks where synchronous handling would slow the user flow.',
      failureHandling:
        'Designs with fallback review, validation warnings, status tracking, and manual correction paths for messy real-world data.',
      businessUnderstanding:
        'Strong ability to understand business operations and convert them into software flows, especially for reporting, finance documents, queues, and internal systems.',
      verdict:
        'Strong full-stack engineer with system analyst depth and clear senior-track readiness.',
    },
    hiringScore: {
      backend: {
        score: 86,
        note: 'Strong API, business logic, reporting, authentication, and data workflow experience.',
      },
      systemAnalysis: {
        score: 88,
        note: 'Strong ability to understand real workflows and convert them into usable systems.',
      },
      dataProcessing: {
        score: 87,
        note: 'Good experience with document extraction, CSV conversion, reporting, and database-backed workflows.',
      },
      frontend: {
        score: 78,
        note: 'Can build practical Flutter, React, and Blade interfaces, with room to polish design consistency.',
      },
      automation: {
        score: 90,
        note: 'Strong practical automation experience with n8n, OCR, LLM parsing, and browser or mobile automation.',
      },
      devops: {
        score: 74,
        note: 'Practical deployment experience, but not yet deeply specialized in large-scale infrastructure.',
      },
      communication: {
        score: 72,
        note: 'Good technical thinking, with room to improve formal English documentation and presentation.',
      },
    },
    designPrinciples: [
      {
        title: 'Start from the real workflow',
        text:
          'I do not start from screens first. I start by understanding who does what, what data moves where, what can go wrong, and what the business needs to verify.',
      },
      {
        title: 'Make messy data usable',
        text:
          'PDFs, OCR results, receipts, tax forms, and branch reports are rarely clean. The system needs normalization, validation, fallback, and review paths.',
      },
      {
        title: 'Build for operations, not only demos',
        text:
          'A system should support actual staff behavior, corrections, printing, filtering, reporting, and edge cases that happen in daily use.',
      },
      {
        title: 'Automate repetitive work carefully',
        text:
          'Automation should reduce manual effort without hiding errors. I prefer clear logs, validation warnings, and human-review routing when confidence is low.',
      },
    ],
    caseStudyQuestions: [
      'What manual workflow does this system replace or improve?',
      'What data needs to be captured, validated, exported, or audited?',
      'Where can automation reduce work without hiding errors?',
      'Which parts must be synchronous for users, and which can run in the background?',
      'How should the system handle messy input, failed extraction, or human correction?',
      'What report or business decision will this system support?',
    ],
    ui: {
      navbar: {
        brandEyebrow: 'Systems Portfolio',
        languageLabel: 'Language',
        languageOptions: {
          en: 'EN',
          th: 'TH',
        },
        links: {
          about: 'About',
          projects: 'Projects',
          systemDesign: 'System Design',
          stack: 'Stack',
          experience: 'Experience',
          contact: 'Contact',
        },
      },
      hero: {
        kicker: 'Workflow-first engineering portfolio',
        nicknameLabel: 'Nickname',
        contactButton: 'Contact',
        viewProjectsButton: 'View projects',
        capabilityEyebrow: 'Capability Snapshot',
        operatingEyebrow: 'Operating Focus',
        operatingTitle: 'What I usually help teams untangle',
        capabilityLabels: {
          systemAnalysis: 'System analysis',
          backend: 'Backend delivery',
          automation: 'Automation',
          dataProcessing: 'Data workflows',
        },
        socialLinks: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
        },
      },
      about: {
        eyebrow: 'About',
        copy:
          'Work focused on business-critical systems where correctness, observability, and operational clarity matter.',
        rightPrefix: 'Based in',
        overviewLabel: 'Overview',
        teamsGetLabel: 'What teams get',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Selected systems with clear business constraints',
        copy:
          'Examples where architecture decisions were driven by transaction safety, automation reliability, and auditability.',
        selectedCountLabel: 'selected systems',
        problemLabel: 'Problem',
        solutionLabel: 'Solution',
        impactLabel: 'Impact',
        techLabel: 'Tech',
        architectureLabel: 'Architecture',
      },
      systemDesign: {
        eyebrow: 'System Design',
        title: 'Architecture decisions anchored in operational reality',
        copy:
          'The recurring pattern is to define consistency boundaries early, keep state transitions explicit, and move heavy work async when it reduces production drag.',
        right: 'Consistency, async work, and review paths',
        capabilityEyebrow: 'Capability Analysis',
        capabilityTitle: 'Where the portfolio is strongest today',
        reviewQuestionsTitle: 'Questions I use in system reviews',
        systemProfileTitle: 'System profile',
        consistencyLabel: 'Consistency',
        asyncLabel: 'Async design',
        failureLabel: 'Failure handling',
        businessLabel: 'Business understanding',
      },
      stack: {
        eyebrow: 'Stack',
        title: 'Engineering depth across product, backend, and operations',
        copy:
          'The stack is selected for reliability in production workflows, not for checklists alone.',
        right: 'Frontend, backend, data, automation, and deployment',
        strengthsEyebrow: 'Core strengths',
        strengthsTitle: 'Full-stack ownership backed by real operational context',
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Full-stack delivery with system ownership',
        copy:
          'The common thread is taking responsibility from architecture through deployment and operational stability.',
        right: '2020 - present',
        growthEdgesTitle: 'Current growth edges',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Open to senior engineering and architecture roles',
        focusBody:
          'If the role involves production workflows, system design, API contracts, or automation boundaries, that is the work I am usually strongest at.',
        locationNotePrefix: 'Based in',
        locationNoteSuffix: 'Available for remote work and selective on-site collaboration.',
        lineLabel: 'Line',
        reachOutEyebrow: 'Reach out',
        reachOutTitle: 'Reach out',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        secondaryGithubLabel: 'Secondary GitHub',
      },
    },
  },
  th: {
    profile: {
      ...sharedProfile,
      role: 'Full-stack Engineer ที่มีแนวคิดแบบ System Analyst',
      tagline:
        'สร้างระบบ production ที่ใช้งานได้จริงสำหรับ workflow ธุรกิจ งาน automation เอกสารการเงิน และระบบภายในองค์กร',
      intro:
        'ผมออกแบบและพัฒนาระบบซอฟต์แวร์ที่แก้ปัญหาหน้างานจริง ตั้งแต่ workflow ซื้อขายยาง ระบบเรียกคิว OCR ดึงข้อมูลเอกสาร ตัวแปลง PDF เป็น CSV ระบบ KYC automation ไปจนถึงแพลตฟอร์มภายในองค์กร',
      about: [
        'จุดแข็งของผมคือการเปลี่ยน workflow ธุรกิจที่ยังไม่ชัด ให้กลายเป็นระบบที่ใช้งานได้จริง ผมสามารถวิเคราะห์กระบวนการ ออกแบบ data flow พัฒนา API เชื่อม automation และส่งมอบ frontend ที่ใช้งานได้กับผู้ใช้จริง',
        'งานที่ผมทำครอบคลุมระบบรับซื้อยาง ระบบเรียกคิว เครื่องมือ OCR และ PDF-to-CSV สำหรับงานบัญชี KYC automation referral analytics แอป Flutter ระบบ Laravel, Node.js APIs, MySQL และ workflow บน n8n',
        'ผมมักทำงานใกล้กับข้อจำกัดจริงของธุรกิจ เช่น ข้อมูลที่ไม่สะอาด ขั้นตอน manual เอกสารจำนวนมาก การทำงานระดับสาขา งานรายงาน การตรวจสอบย้อนหลัง และการแก้ปัญหาใน production',
        'เส้นทางที่ผมกำลังเติบโตคือ system analyst หรือ senior engineer โดยยังคงมีทักษะลงมือทำจริงครบทั้ง frontend, backend, database, automation และ deployment',
      ],
      location: 'จันทบุรี, ประเทศไทย',
      availability: 'เปิดรับบทบาท full-stack engineer, system analyst, senior engineer และ tech lead',
    },
    portfolioContent: {
      tagline: 'นักพัฒนา full-stack ที่เปลี่ยน workflow ธุรกิจให้กลายเป็นระบบพร้อมใช้งานจริง',
      bio:
        'ผมเป็น full-stack engineer จากจันทบุรี ที่โฟกัสด้านการวิเคราะห์ระบบ backend logic workflow automation และซอฟต์แวร์ธุรกิจที่ใช้งานได้จริง งานของผมครอบคลุมระบบรับซื้อยาง ระบบคิว OCR และ PDF-to-CSV automation, KYC automation ระบบรายงาน และแอป Flutter หรือ React',
      sellingPoints: [
        'วิเคราะห์ workflow จริงของธุรกิจและแปลงเป็นระบบซอฟต์แวร์ได้อย่างเป็นรูปธรรม',
        'มีประสบการณ์ full-stack ครบทั้ง frontend, backend, database, automation และ deployment',
        'คุ้นกับระบบที่มีเอกสารและขั้นตอนปฏิบัติการหนาแน่น เช่น OCR, PDF-to-CSV, ใบเสร็จ, รายงาน, ระบบคิว และงาน compliance',
      ],
    },
    skillAnalysis: [
      {
        category: 'วิเคราะห์ระบบ / ออกแบบ Workflow',
        level: 'Upper-mid และมีศักยภาพถึงระดับ senior',
        reasoning:
          'มีประสบการณ์วิเคราะห์ workflow ธุรกิจจริง เช่น ระบบรับซื้อยาง ระบบเรียกคิว การประมวลผลเอกสารการเงิน KYC logic, referral logic และระบบรายงานภายใน',
      },
      {
        category: 'Backend / API',
        level: 'Upper-mid ถึง senior',
        reasoning:
          'ลงมือทำจริงกับ Node.js, TypeScript, Laravel, MySQL, JWT, external APIs, transaction logic, report APIs และระบบ backend ที่มี workflow ซับซ้อน',
      },
      {
        category: 'Frontend / Application UI',
        level: 'Mid ถึง upper-mid',
        reasoning:
          'เคยพัฒนา Flutter, Flutter Web, Laravel Blade และ React interface สำหรับผู้ใช้จริง เครื่องมือภายใน dashboard, report, modal workflow และ business app ลักษณะ mobile-style',
      },
      {
        category: 'Automation / AI / OCR',
        level: 'Upper-mid',
        reasoning:
          'มีงานจริงด้าน OCR, PDF extraction, parsing ผ่าน OpenRouter และ Gemini, workflow บน n8n, การสร้าง CSV, file conversion และ document normalization pipeline',
      },
      {
        category: 'Database / Data Processing',
        level: 'Upper-mid',
        reasoning:
          'ทำงานกับ MySQL, Supabase และ Postgres, Firestore, reporting queries, receipt records, quota tracking, referral hierarchy และข้อมูลเอกสารแบบมีโครงสร้าง',
      },
      {
        category: 'DevOps / Deployment',
        level: 'Mid ถึง upper-mid',
        reasoning:
          'มีประสบการณ์ deploy จริงกับ Docker, n8n self-hosting, AWS EC2, Cloudflare, Firebase, Vercel และ GCP Cloud Build',
      },
    ],
    strengths: [
      {
        title: 'แปลง workflow ธุรกิจเป็นระบบ',
        evidence:
          'ระบบซื้อขายยาง, ระบบเรียกคิว GSB, ตัวแปลง PDF-to-CSV และ OCR accounting flow',
        impact:
          'สามารถเปลี่ยนงาน manual หรือกระบวนการที่ยังไม่ชัด ให้กลายเป็น digital workflow ที่ทีมใช้งานได้จริง',
      },
      {
        title: 'รับผิดชอบงานแบบ full-stack',
        evidence:
          'ทำงานครอบคลุม Flutter, React, Laravel Blade, Node.js, Laravel, MySQL, Firebase, n8n และ deployment',
        impact:
          'สามารถดูแล feature ได้ตั้งแต่วิเคราะห์ requirement ไปจนถึง UI, API, database, automation และ production support',
      },
      {
        title: 'automation และการดึงข้อมูลจากเอกสาร',
        evidence:
          'OCR pipelines, PDF-to-CSV reporting, การดึงข้อมูลเอกสารภาษีและการเงินไทย, statement parsing',
        impact:
          'ลดงาน manual ของฝ่ายบัญชีและรายงาน พร้อมเพิ่มความสม่ำเสมอของข้อมูลที่ดึงออกมา',
      },
      {
        title: 'แก้ปัญหา production ที่มีเงื่อนไขจริง',
        evidence:
          'จัดการ branch condition, receipt printing, EUDR quota logic, queue flow, report generation และ API integrations',
        impact:
          'สร้างระบบที่รองรับ edge case ของการใช้งานจริง ไม่ได้หยุดอยู่แค่ demo flow ง่ายๆ',
      },
      {
        title: 'คิดเรื่องความถูกต้องของ backend และข้อมูล',
        evidence:
          'Receipt ID generation, quota tracking, transaction reports, referral calculations, authentication และ API validation',
        impact:
          'ช่วยเพิ่มความถูกต้อง การตรวจสอบย้อนหลัง และการดูแลรักษาระบบในงานธุรกิจที่สำคัญ',
      },
    ],
    weaknesses: [
      {
        issue: 'การเขียนเชิงเทคนิคภาษาอังกฤษ',
        risk:
          'อาจต้องขัดเกลามากขึ้นเมื่อต้องเขียนเอกสารภาษาอังกฤษอย่างเป็นทางการ เช่น documentation หรือ API docs สำหรับทีมต่างประเทศ',
        improvement:
          'ฝึกเขียน technical specs, API documentation และ architecture decision records เป็นภาษาอังกฤษให้เป็นระบบมากขึ้น',
      },
      {
        issue: 'เอกสาร system design แบบทางการ',
        risk:
          'บางระบบอาจสร้างได้ถูกต้อง แต่เอกสารสำหรับ handoff, audit หรือการขยายทีมยังไม่ชัดเท่าที่ควร',
        improvement:
          'ทำ template มาตรฐานสำหรับ ERD, API contract, workflow diagram, sequence diagram และ deployment notes',
      },
      {
        issue: 'ความสม่ำเสมอของ UI/UX',
        risk:
          'UI ที่ใช้งานได้จริงอาจยังไม่ polished หรือไม่สม่ำเสมอ หากไม่มี design system กลาง',
        improvement:
          'นำ component libraries, design tokens, layout rules และ reusable UI patterns มาใช้ให้มากขึ้น',
      },
      {
        issue: 'ความลึกด้าน infrastructure scale ใหญ่',
        risk:
          'แม้มีประสบการณ์ deploy ใช้งานจริง แต่ระบบ distributed scale ใหญ่มากยังต้องเพิ่มความลึกอีก',
        improvement:
          'ศึกษา observability, queues, caching strategy, Kubernetes basics, CI/CD pipelines และ load testing เพิ่มเติม',
      },
    ],
    stackGroups: [
      {
        title: 'วิเคราะห์ระบบและออกแบบ Workflow',
        items: [
          'Requirement Analysis',
          'Business Process Mapping',
          'System Flow Design',
          'State-based Workflows',
          'Report Flow Design',
          'API-first Development',
        ],
      },
      {
        title: 'Backend',
        items: [
          'Node.js',
          'TypeScript',
          'Express.js',
          'Laravel',
          'PHP',
          'REST API',
          'JWT Authentication',
          'RBAC',
          'Webhook Integration',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'Flutter',
          'Flutter Web',
          'GetX',
          'React.js',
          'Next.js',
          'TailwindCSS',
          'Laravel Blade',
        ],
      },
      {
        title: 'Database และ Data',
        items: [
          'MySQL',
          'Supabase / Postgres',
          'Firebase Firestore',
          'Reporting Queries',
          'CSV Generation',
          'PDF Data Extraction',
          'Data Normalization',
        ],
      },
      {
        title: 'Automation และ AI',
        items: [
          'n8n',
          'OCR Workflow',
          'OpenRouter',
          'Gemini',
          'PDF-to-CSV Converter',
          'Document Parser',
          'Workflow Automation',
        ],
      },
      {
        title: 'DevOps และ Tools',
        items: [
          'Docker',
          'AWS EC2',
          'Cloudflare',
          'Firebase Hosting',
          'Vercel',
          'GCP Cloud Build',
          'Postman',
          'GitHub',
        ],
      },
    ],
    projects: [
      {
        slug: 'gsb-queue-calling-system',
        name: 'ระบบเรียกคิว GSB',
        year: 'ธนาคาร / ระบบภายใน',
        summary:
          'ระบบเรียกคิวสำหรับ workflow ของธนาคารออมสิน ออกแบบมาเพื่อรองรับการทำงานระดับสาขาและทำให้การบริการลูกค้ามองเห็นสถานะได้ชัดขึ้น',
        problem:
          'งานคิวต้องมี service flow ที่ชัดเจน มองเห็นสถานะได้ เรียกคิวได้แบบควบคุมได้ และต้องมี frontend ที่เจ้าหน้าที่ใช้งานได้อย่างเสถียร',
        solution:
          'พัฒนา workflow การจัดการคิวที่มีทั้ง frontend display, backend state control, queue status handling และ logic ที่พร้อมสำหรับการใช้งานจริงในสาขา',
        impact:
          'ช่วยให้การดำเนินงานด้านคิวเป็นระบบมากขึ้น และเพิ่มความชัดเจนของการให้บริการก่อนเปิดใช้งานจริง',
        tech: ['Flutter / Web UI', 'Node.js / API', 'Workflow Logic', 'Queue State Management'],
        architecture: [
          'หน้าควบคุมคิวสำหรับเจ้าหน้าที่',
          'หน้าจอแสดงผลคิวสำหรับลูกค้า',
          'logic ควบคุมสถานะคิวฝั่ง backend',
          'service flow และ state transition ของคิว',
        ],
      },
      {
        slug: 'pdf-to-csv-report-converter',
        name: 'ระบบแปลง PDF เป็น CSV',
        year: 'บัญชี / เอกสารอัตโนมัติ',
        summary:
          'ระบบแปลงข้อมูลจากเอกสาร PDF ให้อยู่ในรูป CSV เพื่อนำไปใช้ต่อในงานบัญชีและงานปฏิบัติการ',
        problem:
          'เอกสารการเงินและเอกสารธุรกิจมักมาในรูป PDF ทำให้การดึงข้อมูลด้วยมือช้า ไม่สม่ำเสมอ และนำไปใช้ต่อใน workflow รายงานได้ยาก',
        solution:
          'สร้าง pipeline สำหรับ parse และแปลงข้อมูลจาก PDF โดยอ่านเนื้อหา normalize field จัดลง column ที่มีโครงสร้าง และ export เป็น CSV ที่พร้อมใช้งาน',
        impact:
          'ลดงาน copy-paste ด้วยมือ และทำให้ข้อมูลจากเอกสารพร้อมสำหรับงานบัญชี การตรวจสอบ และการทำรายงาน',
        tech: ['n8n', 'Node.js', 'PDF Parsing', 'CSV Export', 'OpenRouter / Gemini', 'Data Normalization'],
        architecture: [
          'รับไฟล์ PDF',
          'ดึงข้อความด้วย text และ OCR',
          'normalize field',
          'map ลง CSV columns',
          'ส่งออกเป็นรายงานพร้อมดาวน์โหลด',
        ],
      },
      {
        slug: 'rubber-trading-platform',
        name: 'ระบบรับซื้อและซื้อขายยาง',
        year: 'สินค้าเกษตร / ระบบธุรกิจภายใน',
        summary:
          'ระบบรับซื้อยางสำหรับจัดการลูกค้า ใบเสร็จ รายงาน LOT, รายงานประจำวัน, EUDR quota, เงื่อนไขระดับสาขา และ workflow การพิมพ์',
        problem:
          'workflow การรับซื้อยางมีทั้งกฎเฉพาะสาขา ใบเสร็จ สรุปรายวัน การติดตาม LOT, ราคา ค่าธรรมเนียม ข้อมูล EUDR และรายงานสำหรับพิมพ์',
        solution:
          'พัฒนาระบบด้วย Laravel Blade และ Node.js ร่วมกับ MySQL โดยมี customer search, receipt generation, report filtering, EUDR quota tracking และ modal-based print preview',
        impact:
          'ช่วยให้การบันทึกธุรกรรมดีขึ้น ลดเวลาจัดเตรียมรายงานด้วยมือ และรองรับการควบคุมการทำงานระดับสาขา',
        tech: ['Laravel', 'Node.js', 'MySQL', 'JavaScript', 'Blade', 'Report Printing'],
        architecture: [
          'จัดการลูกค้าและใบเสร็จ',
          'Rubber transaction API',
          'สร้างรายงานรายวันและ LOT',
          'ติดตาม EUDR quota',
          'logic การพิมพ์เฉพาะตามสาขา',
        ],
      },
      {
        slug: 'ocr-accounting-pipeline',
        name: 'OCR Accounting Pipeline',
        year: 'งานการเงินอัตโนมัติ',
        summary:
          'pipeline สำหรับดึงข้อมูลโครงสร้างจากเอกสารการเงิน ภาษี รายการเดินบัญชี และใบเสร็จภาษาไทย ด้วย OCR และ LLM',
        problem:
          'การดึงข้อมูลจาก invoice, tax form, payment slip และ bank statement ด้วยมือใช้เวลามากและผิดพลาดง่าย',
        solution:
          'ออกแบบ workflow บน n8n และ OpenRouter หรือ Gemini ให้ดึงข้อมูลเป็น JSON แบบชัดเจน พร้อม validation, normalization และแปลงต่อเป็น CSV หรือ report',
        impact:
          'เปลี่ยนเอกสารการเงินที่ไม่มีโครงสร้างให้กลายเป็นข้อมูลพร้อมตรวจทานและพร้อมใช้งานต่อในงานบัญชี',
        tech: ['n8n', 'OpenRouter', 'Gemini', 'Node.js', 'JSON Parser', 'CSV'],
        architecture: [
          'อัปโหลดเอกสาร',
          'OCR และ LLM extraction',
          'normalize JSON แบบเข้มงวด',
          'validation และ warning fields',
          'ส่งออกเป็น CSV และ report',
        ],
      },
      {
        slug: 'kyc-automation-system',
        name: 'ระบบ KYC Automation',
        year: 'Compliance / Automation',
        summary:
          'ระบบอัตโนมัติสำหรับตรวจสอบ KYC โดยใช้ browser automation, document flow, notification และ review routing',
        problem:
          'การตรวจสอบ KYC ด้วยมือเป็นงานซ้ำ ใช้เวลามาก และติดตามสถานะได้ยาก',
        solution:
          'สร้าง automation ด้วย Playwright หรือ Appium-style flow เชื่อม backend, Telegram notification และการติดตามสถานะแบบมีโครงสร้าง',
        impact:
          'ลดงานตรวจซ้ำด้วยมือ และเพิ่ม visibility ของสถานะการตรวจสอบ',
        tech: ['Node.js', 'Playwright', 'Telegram Bot', 'API Integration', 'Automation'],
        architecture: [
          'รับข้อมูล KYC',
          'กระบวนการ automation',
          'อัปเดตสถานะการตรวจสอบ',
          'แจ้งเตือน',
          'fallback ไปยัง human review',
        ],
      },
      {
        slug: 'referral-analytics-system',
        name: 'ระบบวิเคราะห์ Referral',
        year: 'Analytics / Network Data',
        summary:
          'workflow ด้านข้อมูลและ analytics สำหรับติดตามโครงสร้าง referral, ความสัมพันธ์ของสมาชิก และรายงานเชิงธุรกิจ',
        problem:
          'เครือข่าย referral ต้องมีการติดตาม hierarchy, สรุปจำนวน และสร้างรายงานได้อย่างเชื่อถือได้',
        solution:
          'พัฒนา API และ frontend logic สำหรับ fetch, cache, group และแสดงข้อมูล referral ด้วยการโหลดข้อมูลที่ optimize แล้ว',
        impact:
          'ช่วยให้มองเห็น performance ของ referral ชัดขึ้น และรองรับการตัดสินใจทางธุรกิจ',
        tech: ['React', 'Node.js', 'MySQL', 'LocalStorage Cache', 'API Integration'],
        architecture: [
          'Referral API',
          'โหลดข้อมูลตาม hierarchy',
          'cache ฝั่ง frontend',
          'แสดง analytics แบบ grouped',
        ],
      },
    ],
    experiences: [
      {
        title: 'Full-stack Engineer / System Analyst-Oriented Developer',
        meta: 'โปรเจกต์ production และ freelance | 2022 - ปัจจุบัน',
        points: [
          'พัฒนาระบบสำคัญต่อธุรกิจทั้งด้านรับซื้อยาง document automation, queue management, KYC automation, referral analytics และระบบรายงานภายใน',
          'ออกแบบ API, โครงสร้างฐานข้อมูล, frontend workflow และ automation pipeline จาก requirement ที่มาจากการทำงานจริง',
          'ทำงานร่วมกับ Laravel, Node.js, Flutter, React, MySQL, Firebase, n8n, Docker และเครื่องมือ deployment บน cloud',
        ],
      },
      {
        title: 'Application & Automation Developer',
        meta: 'ระบบลูกค้าและระบบภายใน | 2020 - 2022',
        points: [
          'พัฒนา web และ mobile application ที่มี API integration, authentication, reporting และ operational dashboard',
          'สร้าง automation flow สำหรับงานซ้ำ การประมวลผลเอกสาร browser และ mobile automation รวมถึง notification system',
          'ปรับปรุงระบบเดิมและช่วยย้ายงานจาก manual process ไปเป็น digital workflow อย่างเป็นรูปธรรม',
        ],
      },
    ],
    systemProfile: {
      consistency:
        'เข้าใจความต้องการด้าน consistency ในระบบใบเสร็จ การติดตาม quota, สถานะคิว การแปลงเอกสาร และ transaction report',
      asyncDesign:
        'ใช้ async workflow กับ OCR, PDF conversion, notifications, document processing และ automation task ที่ไม่ควรทำแบบ synchronous เพราะจะถ่วงการใช้งาน',
      failureHandling:
        'ออกแบบให้มี fallback review, validation warnings, status tracking และทางแก้ไขด้วยมือสำหรับข้อมูลจริงที่ไม่สะอาด',
      businessUnderstanding:
        'มีความสามารถเด่นในการเข้าใจกระบวนการทางธุรกิจและแปลงออกมาเป็น software flow โดยเฉพาะงานรายงาน เอกสารการเงิน ระบบคิว และระบบภายใน',
      verdict:
        'เป็น full-stack engineer ที่มีศักยภาพชัดเจนในสาย system analyst และ senior engineer',
    },
    hiringScore: {
      backend: {
        score: 86,
        note: 'แข็งแรงด้าน API, business logic, reporting, authentication และ data workflow',
      },
      systemAnalysis: {
        score: 88,
        note: 'เข้าใจ workflow จริงและแปลงให้เป็นระบบที่ใช้งานได้จริงได้ดี',
      },
      dataProcessing: {
        score: 87,
        note: 'มีประสบการณ์ที่ดีด้าน document extraction, CSV conversion, reporting และระบบที่พึ่งข้อมูลจากฐานข้อมูล',
      },
      frontend: {
        score: 78,
        note: 'สร้าง Flutter, React และ Blade interface ที่ใช้งานได้จริงได้ พร้อมพื้นที่ให้ขัดเกลาความสม่ำเสมอด้าน design เพิ่ม',
      },
      automation: {
        score: 90,
        note: 'เด่นด้าน automation ที่ใช้ได้จริงด้วย n8n, OCR, LLM parsing และ browser หรือ mobile automation',
      },
      devops: {
        score: 74,
        note: 'มีประสบการณ์ deploy ใช้งานจริง แต่ยังไม่ได้ลึกมากใน infrastructure scale ใหญ่',
      },
      communication: {
        score: 72,
        note: 'มีแนวคิดเชิงเทคนิคที่ดี และยังพัฒนาเรื่องการสื่อสารเอกสารภาษาอังกฤษแบบทางการได้อีก',
      },
    },
    designPrinciples: [
      {
        title: 'เริ่มจาก workflow จริง',
        text:
          'ผมไม่เริ่มจากหน้าจอก่อน แต่เริ่มจากการเข้าใจว่าใครทำอะไร ข้อมูลไหลอย่างไร อะไรอาจผิดพลาดได้ และธุรกิจต้องตรวจสอบอะไรบ้าง',
      },
      {
        title: 'ทำให้ข้อมูลที่ไม่สะอาดใช้งานได้',
        text:
          'PDF, OCR result, ใบเสร็จ แบบฟอร์มภาษี และรายงานจากสาขามักไม่สะอาด ระบบจึงต้องมี normalization, validation, fallback และ review path',
      },
      {
        title: 'ออกแบบเพื่อการใช้งานจริง ไม่ใช่แค่ demo',
        text:
          'ระบบต้องรองรับพฤติกรรมของพนักงาน การแก้ไข การพิมพ์ การกรองข้อมูล การรายงาน และ edge case ที่เกิดขึ้นทุกวัน',
      },
      {
        title: 'ทำ automation อย่างระวัง',
        text:
          'automation ควรลดงาน manual โดยไม่ซ่อนข้อผิดพลาด ผมจึงให้ความสำคัญกับ log ที่ชัด validation warning และการส่งต่อให้มนุษย์ review เมื่อความมั่นใจต่ำ',
      },
    ],
    caseStudyQuestions: [
      'workflow แบบ manual อะไรที่ระบบนี้กำลังเข้ามาแทนหรือปรับปรุง',
      'มีข้อมูลอะไรบ้างที่ต้องถูกเก็บ ตรวจสอบ ส่งออก หรือ audit ได้',
      'automation จะช่วยลดงานตรงไหนได้ โดยไม่ทำให้ error ถูกซ่อนไว้',
      'ส่วนไหนต้อง synchronous เพื่อผู้ใช้ และส่วนไหนควรย้ายไปทำ background',
      'ระบบควรรับมือกับข้อมูลไม่สะอาด การดึงข้อมูลล้มเหลว หรือการแก้ไขโดยคนอย่างไร',
      'ระบบนี้สนับสนุนรายงานหรือการตัดสินใจทางธุรกิจเรื่องใด',
    ],
    ui: {
      navbar: {
        brandEyebrow: 'พอร์ตงานระบบ',
        languageLabel: 'ภาษา',
        languageOptions: {
          en: 'EN',
          th: 'TH',
        },
        links: {
          about: 'เกี่ยวกับ',
          projects: 'โปรเจกต์',
          systemDesign: 'วิเคราะห์ระบบ',
          stack: 'สกิล',
          experience: 'ประสบการณ์',
          contact: 'ติดต่อ',
        },
      },
      hero: {
        kicker: 'พอร์ตงานสาย workflow-first engineering',
        nicknameLabel: 'ชื่อเล่น',
        contactButton: 'ติดต่อ',
        viewProjectsButton: 'ดูโปรเจกต์',
        capabilityEyebrow: 'ภาพรวมความสามารถ',
        operatingEyebrow: 'งานที่ถนัด',
        operatingTitle: 'ปัญหาที่ผมมักเข้าไปช่วยคลี่',
        capabilityLabels: {
          systemAnalysis: 'วิเคราะห์ระบบ',
          backend: 'ส่งมอบงาน backend',
          automation: 'Automation',
          dataProcessing: 'Data workflow',
        },
        socialLinks: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
        },
      },
      about: {
        eyebrow: 'เกี่ยวกับ',
        copy:
          'โฟกัสกับระบบที่กระทบงานจริงของธุรกิจ ซึ่งต้องการทั้งความถูกต้อง การมองเห็นปัญหา และความชัดเจนในการปฏิบัติการ',
        rightPrefix: 'อยู่ที่',
        overviewLabel: 'ภาพรวม',
        teamsGetLabel: 'สิ่งที่ทีมจะได้',
      },
      projects: {
        eyebrow: 'โปรเจกต์',
        title: 'งานที่เลือกมา ซึ่งมีข้อจำกัดทางธุรกิจชัดเจน',
        copy:
          'ตัวอย่างงานที่การตัดสินใจด้านสถาปัตยกรรมถูกกำหนดด้วย transaction safety, automation reliability และ auditability',
        selectedCountLabel: 'โปรเจกต์เด่น',
        problemLabel: 'ปัญหา',
        solutionLabel: 'วิธีแก้',
        impactLabel: 'ผลลัพธ์',
        techLabel: 'เทคโนโลยี',
        architectureLabel: 'โครงสร้างระบบ',
      },
      systemDesign: {
        eyebrow: 'วิเคราะห์ระบบ',
        title: 'การตัดสินใจเชิงสถาปัตยกรรมที่ยึดกับการทำงานจริง',
        copy:
          'แนวทางที่ใช้ซ้ำบ่อยคือกำหนด consistency boundary ให้ชัดตั้งแต่ต้น ทำให้ state transition ชัดเจน และย้ายงานหนักไปทำแบบ async เมื่อช่วยลด friction ใน production',
        right: 'คิดเรื่อง consistency, async work และ review path',
        capabilityEyebrow: 'วิเคราะห์ศักยภาพ',
        capabilityTitle: 'จุดที่พอร์ตนี้แข็งแรงที่สุดในตอนนี้',
        reviewQuestionsTitle: 'คำถามที่ผมใช้ในการ review ระบบ',
        systemProfileTitle: 'มุมมองการออกแบบระบบ',
        consistencyLabel: 'Consistency',
        asyncLabel: 'Async design',
        failureLabel: 'Failure handling',
        businessLabel: 'Business understanding',
      },
      stack: {
        eyebrow: 'สกิล',
        title: 'ความลึกด้านวิศวกรรม ครอบคลุม product, backend และ operations',
        copy:
          'stack ที่เลือกใช้เน้นความน่าเชื่อถือใน production workflow มากกว่าการสะสม checklist ของเทคโนโลยี',
        right: 'ครบทั้ง frontend, backend, data, automation และ deployment',
        strengthsEyebrow: 'จุดแข็งหลัก',
        strengthsTitle: 'ดูแลงาน full-stack ได้โดยยึดกับบริบทการทำงานจริง',
      },
      experience: {
        eyebrow: 'ประสบการณ์',
        title: 'ส่งมอบงาน full-stack แบบรับผิดชอบทั้งระบบ',
        copy:
          'แกนร่วมของงานที่ผ่านมา คือการรับผิดชอบตั้งแต่ architecture ไปจนถึง deployment และเสถียรภาพการใช้งานจริง',
        right: '2020 - ปัจจุบัน',
        growthEdgesTitle: 'จุดที่กำลังพัฒนาต่อ',
      },
      contact: {
        eyebrow: 'ติดต่อ',
        title: 'เปิดรับงานสาย senior engineering และ architecture',
        focusBody:
          'ถ้างานนั้นเกี่ยวกับ production workflow, system design, API contracts หรือการกำหนดขอบเขตของ automation นั่นมักเป็นงานที่ผมทำได้แข็งแรงที่สุด',
        locationNotePrefix: 'อยู่ที่',
        locationNoteSuffix: 'พร้อมสำหรับงาน remote และการทำงาน on-site แบบเลือกโอกาสที่เหมาะสม',
        lineLabel: 'Line',
        reachOutEyebrow: 'ช่องทางติดต่อ',
        reachOutTitle: 'ติดต่อได้ที่',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        secondaryGithubLabel: 'GitHub สำรอง',
      },
    },
  },
};

siteContent.th.profile.tagline = 'ระบบ production ที่ออกแบบจาก workflow ธุรกิจจริง';
siteContent.th.portfolioContent.tagline =
  'นักพัฒนา full-stack ที่เปลี่ยน workflow ธุรกิจให้เป็นระบบพร้อมใช้งานจริงใน production';
siteContent.th.skillAnalysis[0].level = 'Upper-mid และอยู่ในเส้นทาง Senior-track';
siteContent.th.strengths[0].evidence =
  'ระบบซื้อขายยาง, workflow ภายในองค์กรด้าน banking/service, ตัวแปลง PDF-to-CSV และ OCR accounting flow';
siteContent.th.projects[0].name = 'ระบบ workflow ภายในองค์กรด้าน Banking Service';
siteContent.th.projects[0].summary =
  'ระบบจัดการคิวและ service workflow สำหรับสภาพแวดล้อม banking/internal service ที่ออกแบบเพื่อรองรับการทำงานระดับสาขาและทำให้การบริการมองเห็นสถานะได้ชัดขึ้น';
siteContent.th.systemProfile.verdict =
  'เป็น full-stack engineer ที่มีความชัดเจนด้าน system analyst และอยู่ในเส้นทาง Senior-track';

export type Language = keyof typeof siteContent;
export type SiteContent = (typeof siteContent)[Language];

export function getSiteContent(language: Language) {
  return siteContent[language];
}
