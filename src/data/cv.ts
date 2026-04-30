export type Locale = "ru" | "en";

export type ContactItem = {
  kind: "telegram" | "github" | "email";
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
};

export type ProfileData = {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  eyebrow: string;
  summary: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  context: string;
  bullets: string[];
  techStack: string[];
};

export type StackGroup = {
  title: string;
  resumeTitle: string;
  items: string[];
};

export type ProjectData = {
  title: string;
  label: string;
  text: string;
  href: string;
  linkText: string;
};

export type EducationItem = {
  institution: string;
  program: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type CvPaths = {
  homeHref: string;
  resumeHref: string;
  resumeTxtHref: string;
  alternateHref: string;
  alternateResumeHref: string;
  alternateLanguageLabel: string;
  alternateLocale: Locale;
};

export type CvUiData = {
  documentLabel: string;
  contactTitle: string;
  locationLabel: string;
  sideColumnLabel: string;
  experienceTitle: string;
  stackTitle: string;
  projectsTitle: string;
  educationTitle: string;
  languageLabel: string;
  resumeLinkLabel: string;
  printPageLabel: string;
  themeToggleLabel: string;
  lightThemeLabel: string;
  darkThemeLabel: string;
  mainSiteLabel: string;
  downloadTxtLabel: string;
  printSavePdfLabel: string;
  profileTitle: string;
  technicalSkillsTitle: string;
  experienceResumeTitle: string;
  projectsResumeTitle: string;
  educationResumeTitle: string;
  additionalTitle: string;
  contextLabel: string;
  techStackLabel: string;
};

export type CvData = {
  locale: Locale;
  ui: CvUiData;
  paths: CvPaths;
  profile: ProfileData;
  contacts: ContactItem[];
  experience: ExperienceItem[];
  stack: StackGroup[];
  projects: ProjectData[];
  education: EducationItem[];
  languages: LanguageItem[];
  resumeTagline: string;
  additionalSkills: string[];
};

const stack: StackGroup[] = [
  {
    title: "Backend",
    resumeTitle: "Backend",
    items: ["Python", "Django", "DRF", "FastAPI", "Flask", "SQLAlchemy"],
  },
  {
    title: "Data",
    resumeTitle: "Data",
    items: ["PostgreSQL", "Redis", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Async",
    resumeTitle: "Async",
    items: ["Celery", "RabbitMQ", "Kafka", "Outbox"],
  },
  {
    title: "Infra",
    resumeTitle: "Infrastructure",
    items: ["Docker", "Kubernetes", "Nginx", "Linux", "GitLab CI"],
  },
  {
    title: "Quality",
    resumeTitle: "Quality",
    items: ["pytest", "Prometheus", "Grafana", "Ruff", "Mypy"],
  },
];

const projects: ProjectData[] = [];

export const cvRu: CvData = {
  locale: "ru",
  ui: {
    documentLabel: "CV Ярослава Гнеушева",
    contactTitle: "Контакты",
    locationLabel: "Локация",
    sideColumnLabel: "Стек и образование",
    experienceTitle: "Опыт",
    stackTitle: "Стек",
    projectsTitle: "Публичный проект",
    educationTitle: "Образование",
    languageLabel: "Язык",
    resumeLinkLabel: "Резюме",
    printPageLabel: "Печать",
    themeToggleLabel: "Переключить тему",
    lightThemeLabel: "Светлая",
    darkThemeLabel: "Темная",
    mainSiteLabel: "Сайт",
    downloadTxtLabel: "Скачать TXT",
    printSavePdfLabel: "Печать / PDF",
    profileTitle: "Профиль",
    technicalSkillsTitle: "Технические навыки",
    experienceResumeTitle: "Опыт",
    projectsResumeTitle: "Проекты",
    educationResumeTitle: "Образование",
    additionalTitle: "Дополнительно",
    contextLabel: "Контекст",
    techStackLabel: "Стек",
  },
  paths: {
    homeHref: "/",
    resumeHref: "/resume.html",
    resumeTxtHref: "/files/Yaroslav_Gneushev_Python_Backend_CV.txt",
    alternateHref: "/en/",
    alternateResumeHref: "/en/resume.html",
    alternateLanguageLabel: "English",
    alternateLocale: "en",
  },
  profile: {
    name: "Ярослав Гнеушев",
    title: "Python Backend Developer",
    subtitle: "Django / FastAPI / PostgreSQL / Redis / Celery / 3+ года коммерческого опыта",
    location: "Москва / remote / hybrid",
    eyebrow: "Python Backend / Fintech / Insurance / PostgreSQL / Async Processing",
    summary:
      "Python backend-разработчик с опытом разработки backend-систем в страховании, fintech и аналитических платформах. Участвовал в создании и развитии сервисов, которые автоматизируют бизнес-процессы, обрабатывают большие объемы данных и обеспечивают стабильную работу продуктовых систем.",
  },
  contacts: [
    {
      kind: "telegram",
      label: "Telegram",
      value: "@ferokuk",
      href: "https://t.me/ferokuk",
      ariaLabel: "Написать Ярославу Гнеушеву в Telegram",
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/ferokuk",
      href: "https://github.com/ferokuk",
      ariaLabel: "Открыть GitHub профиль Ярослава Гнеушева",
    },
    {
      kind: "email",
      label: "Email",
      value: "gneushevyar@mail.ru",
      href: "mailto:gneushevyar@mail.ru",
      ariaLabel: "Написать Ярославу Гнеушеву на email",
    },
  ],
  experience: [
    {
      role: "Backend Python Developer",
      company: "СОГАЗ - страхование / финансовый сектор",
      period: "июль 2025 - настоящее время",
      context: "Backend-платформа обработки счетов и антифрод-проверок в страховом домене.",
      bullets: [
        "Развивал backend антифрод-системы: правила детекции, pipeline обработки счетов, интеграция ML-скоринга через REST API.",
        "Вынес тяжелые операции в Celery, добавил Redis-кеширование, исправил N+1-запросы; обработка счетов ускорилась до 5x.",
        "Провел миграцию платформы: Python 3.9 -> 3.12, Django 3.2 -> 5.2, обновление зависимостей и стабилизация платформы.",
        "Добавил интеграционные тесты для антифрод-правил, валидации счетов, ML-сервиса и внешних API; покрытие ключевого backend-кода - до 70%.",
        "Настроил Prometheus/Grafana-метрики, дашборды и алерты по техническим и бизнес-сценариям.",
      ],
      techStack: [
        "Python",
        "Django",
        "DRF",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker",
        "Kubernetes",
        "pytest",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      role: "Python Developer",
      company: "Fintech startup - проектная работа, NDA",
      period: "май 2024 - июнь 2025",
      context: "Платежная платформа для мерчантов: платежи, рефанды, статусы, webhooks, интеграция с платежным шлюзом.",
      bullets: [
        "Разрабатывал backend платежной платформы: создание платежей, статусы, рефанды, webhooks, интеграция с платежным шлюзом.",
        "Реализовал идемпотентность через Redis SET NX и перевел обработку платежей в Celery + Redis; время ответа API снизилось с 4-6s до ~200ms.",
        "Оптимизировал PostgreSQL-запросы через EXPLAIN ANALYZE, составные/частичные индексы и materialized views; отчеты ускорились с 25s+ до ~2s.",
        "Собрал event-driven analytics pipeline на Kafka с outbox-паттерном; задержка аналитики снизилась с суток до десятков секунд.",
        "Выделил notification-service на FastAPI + RabbitMQ: webhooks, email, DLQ, retry с exponential backoff.",
      ],
      techStack: [
        "Python",
        "Django",
        "DRF",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "RabbitMQ",
        "Kafka",
        "Docker",
        "GitLab CI",
        "pytest",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      role: "Python Developer",
      company: "ЦИАРС - аналитика / автоматизация",
      period: "декабрь 2022 - май 2024",
      context: "Аналитические и автоматизационные системы для мониторинга перевозок, парсинга документов и обработки данных.",
      bullets: [
        "Разрабатывал backend и аналитические интерфейсы для системы мониторинга перевозок на Flask/Dash.",
        "Собрал ETL-пайплайн для обработки 1TB+ текстовых данных с хранением и поиском в PostgreSQL.",
        "Разработал парсер 50 000+ документов ЕГРЮЛ/ЕГРИП с извлечением данных из PDF и обходом rate limits/CAPTCHA.",
        "Подготовил 100 000+ товарных позиций из B2B-каталогов для аналитических моделей.",
      ],
      techStack: ["Python", "Flask", "Dash", "Pandas", "SQLAlchemy", "PostgreSQL", "SQLite", "Selenium", "Docker", "Linux"],
    },
  ],
  stack,
  projects,
  education: [
    {
      institution: "Финансовый университет при Правительстве РФ",
      program: "Прикладные информационные системы в экономике и финансах / 2028",
    },
    {
      institution: "Колледж информатики и программирования",
      program: "Программирование в компьютерных системах / 2024",
    },
  ],
  languages: [
    {
      name: "English",
      level: "B2",
    },
  ],
  resumeTagline: "Python Backend Developer | Django / FastAPI | PostgreSQL | Redis | Celery | 3+ года коммерческого опыта",
  additionalSkills: ["REST API", "CI/CD", "Prometheus metrics", "Grafana dashboards"],
};

export const cvEn: CvData = {
  locale: "en",
  ui: {
    documentLabel: "CV of Yaroslav Gneushev",
    contactTitle: "Contacts",
    locationLabel: "Location",
    sideColumnLabel: "Stack and education",
    experienceTitle: "Experience",
    stackTitle: "Stack",
    projectsTitle: "Public project",
    educationTitle: "Education",
    languageLabel: "Language",
    resumeLinkLabel: "Resume",
    printPageLabel: "Print page",
    themeToggleLabel: "Switch theme",
    lightThemeLabel: "Light",
    darkThemeLabel: "Dark",
    mainSiteLabel: "Main site",
    downloadTxtLabel: "Download TXT",
    printSavePdfLabel: "Print / Save as PDF",
    profileTitle: "Profile",
    technicalSkillsTitle: "Technical Skills",
    experienceResumeTitle: "Experience",
    projectsResumeTitle: "Projects",
    educationResumeTitle: "Education",
    additionalTitle: "Additional",
    contextLabel: "Context",
    techStackLabel: "Tech stack",
  },
  paths: {
    homeHref: "/en/",
    resumeHref: "/en/resume.html",
    resumeTxtHref: "/files/Yaroslav_Gneushev_Python_Backend_CV_EN.txt",
    alternateHref: "/",
    alternateResumeHref: "/resume.html",
    alternateLanguageLabel: "Русский",
    alternateLocale: "ru",
  },
  profile: {
    name: "Yaroslav Gneushev",
    title: "Python Backend Developer",
    subtitle: "Django / FastAPI / PostgreSQL / Redis / Celery / 3+ years in production",
    location: "Moscow / remote / hybrid",
    eyebrow: "Python Backend / Fintech / Insurance / PostgreSQL / Async Processing",
    summary:
      "Python backend developer with experience building backend systems in insurance, fintech, and analytics platforms. Contributed to services that automate business processes, process large data volumes, and support stable product systems in production.",
  },
  contacts: [
    {
      kind: "telegram",
      label: "Telegram",
      value: "@ferokuk",
      href: "https://t.me/ferokuk",
      ariaLabel: "Contact Yaroslav Gneushev on Telegram",
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/ferokuk",
      href: "https://github.com/ferokuk",
      ariaLabel: "Open Yaroslav Gneushev GitHub profile",
    },
    {
      kind: "email",
      label: "Email",
      value: "gneushevyar@mail.ru",
      href: "mailto:gneushevyar@mail.ru",
      ariaLabel: "Email Yaroslav Gneushev",
    },
  ],
  experience: [
    {
      role: "Backend Python Developer",
      company: "SOGAZ - insurance / financial sector",
      period: "Jul 2025 - Present",
      context: "Backend platform for invoice processing and antifraud checks in the insurance domain.",
      bullets: [
        "Developed backend antifraud systems: detection rules, invoice processing pipeline, and ML scoring integration through REST API.",
        "Moved heavy operations to Celery, added Redis caching, fixed N+1 queries; invoice processing became up to 5x faster.",
        "Migrated the platform from Python 3.9 to 3.12 and Django 3.2 to 5.2, updated dependencies, and stabilized production.",
        "Added integration tests for antifraud rules, invoice validation, ML service, and external APIs; key backend code coverage reached 70%.",
        "Set up Prometheus/Grafana metrics, dashboards, and alerts for technical and business scenarios.",
      ],
      techStack: [
        "Python",
        "Django",
        "DRF",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker",
        "Kubernetes",
        "pytest",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      role: "Python Developer",
      company: "Fintech startup - project work, NDA",
      period: "May 2024 - Jun 2025",
      context: "Payment platform for merchants: payments, refunds, statuses, webhooks, and payment gateway integration.",
      bullets: [
        "Developed backend for a payment platform: payment creation, statuses, refunds, webhooks, and payment gateway integration.",
        "Implemented idempotency with Redis SET NX and moved payment processing to Celery + Redis; API response time dropped from 4-6s to ~200ms.",
        "Optimized PostgreSQL queries using EXPLAIN ANALYZE, composite/partial indexes, and materialized views; reports improved from 25s+ to ~2s.",
        "Built an event-driven analytics pipeline on Kafka with the outbox pattern; analytics delay dropped from one day to tens of seconds.",
        "Extracted a notification service on FastAPI + RabbitMQ: webhooks, email, DLQ, retries with exponential backoff.",
      ],
      techStack: [
        "Python",
        "Django",
        "DRF",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "RabbitMQ",
        "Kafka",
        "Docker",
        "GitLab CI",
        "pytest",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      role: "Python Developer",
      company: "CIARS - analytics / automation",
      period: "Dec 2022 - May 2024",
      context: "Analytics and automation systems for transport monitoring, document parsing, and data processing.",
      bullets: [
        "Developed backend and analytical interfaces for a transport monitoring system on Flask/Dash.",
        "Built an ETL pipeline for processing 1TB+ of text data with storage and search in PostgreSQL.",
        "Developed a parser for 50,000+ EGRUL/EGRIP documents with PDF data extraction and rate limit/CAPTCHA handling.",
        "Prepared 100,000+ product items from B2B catalogs for analytical models.",
      ],
      techStack: ["Python", "Flask", "Dash", "Pandas", "SQLAlchemy", "PostgreSQL", "SQLite", "Selenium", "Docker", "Linux"],
    },
  ],
  stack,
  projects,
  education: [
    {
      institution: "Financial University under the Government of the Russian Federation",
      program: "Applied Information Systems in Economics and Finance / 2028",
    },
    {
      institution: "College of Informatics and Programming",
      program: "Computer Systems Programming / 2024",
    },
  ],
  languages: [
    {
      name: "English",
      level: "B2",
    },
  ],
  resumeTagline: "Python Backend Developer | Django / FastAPI | PostgreSQL | Redis | Celery | 3+ years in production",
  additionalSkills: ["REST API", "CI/CD", "Prometheus metrics", "Grafana dashboards"],
};

export const cv = cvRu;
