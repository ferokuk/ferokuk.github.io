export type Locale = "ru" | "en";

export type ContactItem = {
  kind: "telegram" | "email";
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
};

export type ProfileData = {
  name: string;
  title: string;
  subtitle: string;
  stackHighlights: string[];
  experienceHighlight: string;
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
  {
    title: "AI",
    resumeTitle: "AI",
    items: ["LangChain", "LangGraph", "MCP"],
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
    subtitle: "Django, FastAPI, PostgreSQL, Redis, Celery. 3+ года коммерческого опыта",
    stackHighlights: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    experienceHighlight: "3+ года коммерческого опыта",
    location: "Москва, удаленно, гибрид",
    eyebrow: "Python Backend / Финтех / Страхование",
    summary:
      "Строю высоконагруженные асинхронные backend-сервисы: антифрод, платежные платформы, ML-скоринг. Ускоряю обработку платежей в разы, повышаю автоматическое выявление мошеннических операций, сокращаю время реакции на инциденты с десятков минут до единиц. Помогаю бизнесу зарабатывать на пропускной способности и меньше терять на фроде и простоях.",
  },
  experience: [
    {
      role: "Backend Python Developer",
      company: "СОГАЗ - страхование / финансовый сектор",
      period: "июль 2025 - настоящее время",
      context: "Backend-платформа обработки счетов и антифрод-проверок в страховом домене.",
      bullets: [
        "Развивал антифрод-систему: реализовал новые алгоритмы детекции мошеннических операций, за счет чего увеличил автоматическое выявление подозрительных счетов до 10% ежемесячно и снизил нагрузку на экспертов.",
        "Масштабировал пайплайн обработки счетов: вынес тяжёлые операции в Celery с приоритетными очередями, реализовал cache-aside в Redis для иерархического справочника диагнозов, оптимизировал тяжёлые ORM-запросы антифрод-правил - ускорил обработку в 5 раз, повысил пропускную способность в 6 раз.",
        "Разработал микросервис ML-скоринга счетов и интегрировал его в основной backend-pipeline: REST API с балансировкой воркеров, Circuit Breaker и retry с экспоненциальной задержкой для устойчивости к сбоям ML-сервиса, rate limiting на исходящих вызовах для защиты от перегрузки модели.",
        "Обеспечил покрытие backend-кодовой базы интеграционными тестами на pytest до 70%: ключевые сценарии валидации счетов, логика антифрод-правил, взаимодействие с ML-сервисом и внешними API.",
        "Внедрил observability через Prometheus + Grafana: postgres-exporter, celery-exporter, django-prometheus, кастомные бизнес-метрики обработки счетов, алерты в Grafana - сократил время обнаружения инцидентов с ~60 минут до ~5 минут.",
        "Настроил liveness и readiness probes в Kubernetes.",
        "Разработал AI-агента для code review: ReAct-агент на LangChain/LangGraph, MCP-серверы с интеграцией с GitLab API, внутренними требованиями к безопасности, UI-kit, автоматический анализ merge request в CI/CD.",
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
        "Docker",
        "Kubernetes",
        "Nginx",
        "pytest",
        "Prometheus",
        "Grafana",
        "Pandas",
        "NumPy",
        "LangChain",
        "LangGraph",
        "MCP",
      ],
    },
    {
      role: "Python Developer",
      company: "Финтех-стартап - проектная работа, NDA",
      period: "май 2024 - июнь 2025",
      context: "Платежная платформа для мерчантов: платежи, рефанды, статусы, webhooks, интеграция с платежным шлюзом.",
      bullets: [
        "Разрабатывал backend платежной платформы: REST API для мерчантов (создание платежей, статусы, рефанды, webhooks), интеграция с платежным шлюзом.",
        "Перевел обработку платежей из синхронной в асинхронную через Celery + Redis, за счет чего сократил время ответа API с 4-6 сек до ~200 мс и устранил ошибки при пиковых нагрузках.",
        "Оптимизировал PostgreSQL-запросы через EXPLAIN ANALYZE: составные индексы, частичные индексы, материализованные представления, за счет чего страница транзакций ускорилась с 4 сек до 400 мс, отчеты - с 25+ сек до ~2 сек.",
        "Реализовал event-driven pipeline аналитики на Kafka с outbox-паттерном и сервисом-relay для гарантированной обработки платежных событий, за счет чего снизил задержку аналитических данных с суток до десятков секунд.",
        "Инициировал и реализовал выделение notification-service в отдельный микросервис на FastAPI + RabbitMQ: webhook и email, dead-letter queue, retry с экспоненциальной задержкой.",
        "Внедрил мониторинг Prometheus + Grafana, дашборды и алерты - время обнаружения инцидентов сократилось с ~40 минут до ~3 минут.",
        "Обеспечил тестовое покрытие ~65% на pytest: интеграционные тесты на платежи, моки внешнего шлюза, тесты идемпотентности и машины состояний.",
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
        "Разрабатывал backend и аналитические интерфейсы для информационной системы мониторинга перевозок на Flask/Dash.",
        "Оптимизировал алгоритмы графопостроения, что ускорило обработку сложных графов на 8–12%.",
        "Разработал ETL-пайплайн обработки более 1 ТБ текстовых данных с хранением в PostgreSQL и быстрым поиском.",
        "Разработал парсер 50 000+ документов ЕГРЮЛ/ЕГРИП с обходом rate limits и CAPTCHA, а также извлечением данных из PDF.",
        "Сформировал 100 000+ товарных позиций из B2B-каталогов для аналитических моделей.",
        "Разработал генератор синтетических датасетов документов для обучения OCR-моделей и ML-систем.",
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
  resumeTagline: "Python Backend Developer | Django, FastAPI, PostgreSQL, Redis, Celery | 3+ года коммерческого опыта",
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
    subtitle: "Django, FastAPI, PostgreSQL, Redis, Celery. 3+ years in production",
    stackHighlights: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    experienceHighlight: "3+ years in production",
    location: "Moscow, remote or hybrid",
    eyebrow: "Python Backend / Fintech / Insurance",
    summary:
      "I build high-load asynchronous backend services: antifraud, payment platforms, ML scoring. I speed up payment processing several times over, improve automated detection of fraudulent transactions, and cut incident response time from tens of minutes to single digits. I help the business earn on throughput and lose less to fraud and downtime.",
  },
  experience: [
    {
      role: "Backend Python Developer",
      company: "SOGAZ - insurance / financial sector",
      period: "Jul 2025 - Present",
      context: "Backend platform for invoice processing and antifraud checks in the insurance domain.",
      bullets: [
        "Developed the antifraud system: implemented new fraud detection algorithms, which increased automatic identification of suspicious invoices to 10% monthly and reduced the workload on experts.",
        "Scaled the invoice processing pipeline: moved heavy operations to Celery with priority queues, implemented cache-aside in Redis for the hierarchical diagnosis reference, optimized heavy ORM queries for antifraud rules - accelerated processing 5x and increased throughput 6x.",
        "Built an ML-scoring microservice for invoices and integrated it into the main backend pipeline: REST API with worker balancing, Circuit Breaker and retry with exponential backoff for resilience against ML service failures, rate limiting on outbound calls to protect the model from overload.",
        "Achieved up to 70% backend codebase coverage with pytest integration tests: key invoice validation scenarios, antifraud rules logic, interaction with the ML service and external APIs.",
        "Implemented observability via Prometheus + Grafana: postgres-exporter, celery-exporter, django-prometheus, custom business metrics for invoice processing, Grafana alerts - reduced incident detection time from ~60 minutes to ~5 minutes.",
        "Configured liveness and readiness probes in Kubernetes.",
        "Built an AI agent for code review: ReAct agent on LangChain/LangGraph, MCP servers integrated with GitLab API, internal security requirements, and UI kit; automatic merge request analysis in CI/CD.",
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
        "Docker",
        "Kubernetes",
        "Nginx",
        "pytest",
        "Prometheus",
        "Grafana",
        "Pandas",
        "NumPy",
        "LangChain",
        "LangGraph",
        "MCP",
      ],
    },
    {
      role: "Python Developer",
      company: "Fintech startup - project work, NDA",
      period: "May 2024 - Jun 2025",
      context: "Payment platform for merchants: payments, refunds, statuses, webhooks, and payment gateway integration.",
      bullets: [
        "Developed the backend of the payment platform: REST API for merchants (payment creation, statuses, refunds, webhooks), payment gateway integration.",
        "Migrated payment processing from synchronous to asynchronous via Celery + Redis, which reduced API response time from 4-6s to ~200ms and eliminated errors under peak load.",
        "Optimized PostgreSQL queries via EXPLAIN ANALYZE: composite indexes, partial indexes, materialized views, which sped up the transactions page from 4s to 400ms and reports from 25s+ to ~2s.",
        "Implemented an event-driven analytics pipeline on Kafka with the outbox pattern and a relay service for guaranteed processing of payment events, which reduced analytics data delay from one day to tens of seconds.",
        "Initiated and led the extraction of notification-service into a separate microservice on FastAPI + RabbitMQ: webhook and email, dead-letter queue, retry with exponential backoff.",
        "Implemented monitoring on Prometheus + Grafana with dashboards and alerts - incident detection time was reduced from ~40 minutes to ~3 minutes.",
        "Achieved ~65% test coverage on pytest: integration tests for payments, mocks of the external gateway, idempotency and state machine tests.",
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
        "Developed backend and analytical interfaces for a transport monitoring information system on Flask/Dash.",
        "Optimized graph-building algorithms, which accelerated processing of complex graphs by 8–12%.",
        "Developed an ETL pipeline for processing 1TB+ of text data with storage in PostgreSQL and fast search.",
        "Developed a parser for 50,000+ EGRUL/EGRIP documents with rate limit and CAPTCHA handling, plus PDF data extraction.",
        "Compiled 100,000+ product items from B2B catalogs for analytical models.",
        "Developed a synthetic document dataset generator for training OCR models and ML systems.",
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
  resumeTagline: "Python Backend Developer | Django, FastAPI, PostgreSQL, Redis, Celery | 3+ years in production",
  additionalSkills: ["REST API", "CI/CD", "Prometheus metrics", "Grafana dashboards"],
};

export const cv = cvRu;
