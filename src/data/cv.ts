export type Locale = "ru" | "en";

export type ContactItem = {
  kind: "telegram" | "email" | "github";
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
    subtitle: "Django, FastAPI, PostgreSQL, Redis, Celery. 4+ лет коммерческого опыта",
    stackHighlights: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    experienceHighlight: "4+ лет коммерческого опыта",
    location: "Москва, удаленно, гибрид",
    eyebrow: "Python Backend / Финтех / Страхование",
    summary:
      "Строю высоконагруженные асинхронные backend-сервисы: антифрод, платежные платформы, ML-скоринг. Ускоряю обработку платежей в разы, повышаю автоматическое выявление мошеннических операций, сокращаю время реакции на инциденты с десятков минут до единиц. Помогаю бизнесу зарабатывать на пропускной способности и меньше терять на фроде и простоях.",
  },
  experience: [
    {
      role: "Python-разработчик",
      company: "СОГАЗ - страхование / финансовый сектор",
      period: "июль 2025 - настоящее время",
      context: "Крупнейший страховщик России, партнёрская сеть 12 000+ клиник и лабораторий. Разрабатывал и поддерживал бэкенд-сервис антифрода по ДМС: проверяет счета от клиник и отсекает фродовые и ошибочные случаи до выплаты.",
      bullets: [
        "Внедрил новые правила антифрода на базе клинических рекомендаций Минздрава, разобрав требования в исполняемую бизнес-логику и повысив долю автоматически выявляемого фрода на 13%.",
        "Вынес тяжёлые операции в Celery с приоритетными очередями и оптимизировал ORM-запросы, сократив p95 обработки счетов в 5 раз и увеличив пропускную способность в 6 раз.",
        "Реализовал cache-aside в Redis для иерархических справочников диагнозов и услуг, сократив p95 времени ответа с 600 мс до ~80 мс.",
        "Спроектировал и разработал микросервис ML-скоринга счетов на FastAPI, а затем интегрировал его в основной пайплайн через REST API с балансировкой воркеров.",
        "Спроектировал и разработал ReAct-агента для code review на LangChain/LangGraph с MCP-серверами: автоматический разбор 15+ merge request в день в CI/CD.",
        "Внедрил observability и мониторинг с метриками Prometheus, дашбордами Grafana и алертами по ключевым бизнес- и техническим метрикам, сократив время обнаружения инцидентов с 60 до 5 минут.",
        "Покрыл бэкенд интеграционными тестами на pytest до 70%: валидация счетов, антифрод-правила, интеграция с ML-сервисом, закрыв критичные сценарии регрессом перед деплоем.",
        "Настроил liveness и readiness probes в Kubernetes.",
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
      role: "Python-разработчик",
      company: "AmPay",
      period: "май 2024 - июль 2025",
      context: "Платёжная платформа с приёмом и маршрутизацией платежей через несколько платёжных провайдеров. Разрабатывал backend ядра платёжного сервиса, включающий API для продавцов, обработку транзакций, аналитику, уведомления.",
      bullets: [
        "Спроектировал и собрал пайплайн аналитики на Kafka с outbox-паттерном, снизив задержку аналитических данных с часов до десятков секунд.",
        "Предложил бизнесу и разработал отдельный сервис на FastAPI и RabbitMQ для webhook- и email-уведомлений продавцам: статусы платежей стали доходить без потерь.",
        "Перевёл обработку платежей с синхронной на асинхронную через Celery и Redis, сократив время ответа API с 4 секунд до ~200 мс.",
        "Настроил кеширование часто запрашиваемых данных в Redis, сократив среднее время ответа повторных запросов примерно со 200 мс до 60 мс.",
        "Оптимизировал SQL-запросы через EXPLAIN ANALYZE, используя составные и частичные индексы, а также материализованные представления, сократив p95 времени ответа с 2500 мс до 800 мс, отчёты с 6 секунд до 2 секунд.",
        "Расширил покрытие платёжного backend-а интеграционными тестами на pytest до 65%: сценарии платежей, тесты идемпотентности и машины состояний.",
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
      role: "Python-разработчик",
      company: "ЦИАРС - аналитика / автоматизация",
      period: "июль 2022 - май 2024",
      context: "Проектная разработка под заказчика: системная интеграция, автоматизация бизнес-процессов. Проектировал и разрабатывал бэкенд и аналитические интерфейсы системы мониторинга перевозок, собирал ETL пайплайны для обработки больших объёмов данных под аналитические модели.",
      bullets: [
        "Разработал бэкенд и аналитические дашборды на Flask и Dash для мониторинга перевозок - от API до визуализации графов.",
        "Спроектировал парсер 50 000+ документов ЕГРЮЛ/ЕГРИП с устойчивой обработкой ограничений источника, ошибок загрузки, повторных попыток и извлечением данных из PDF; обеспечил обработку до 200 документов в час.",
        "Построил ETL-пайплайн с нуля для 1 ТБ+ текстовых данных, ~125 ГБ/час, с хранением в PostgreSQL и поиском за доли секунды.",
        "Собрал 100 000+ товарных позиций из B2B-каталогов для аналитических моделей, разработав парсеры и нормализовав данные под единую схему.",
        "Создал генератор синтетических датасетов документов для обучения OCR- и ML-моделей, закрыв нехватку размеченных данных.",
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
  resumeTagline: "Python Backend Developer | Django, FastAPI, PostgreSQL, Redis, Celery | 4+ лет коммерческого опыта",
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
    subtitle: "Django, FastAPI, PostgreSQL, Redis, Celery. 4+ years in production",
    stackHighlights: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    experienceHighlight: "4+ years in production",
    location: "Moscow, remote or hybrid",
    eyebrow: "Python Backend / Fintech / Insurance",
    summary:
      "I build high-load asynchronous backend services: antifraud, payment platforms, ML scoring. I speed up payment processing several times over, improve automated detection of fraudulent transactions, and cut incident response time from tens of minutes to single digits. I help the business earn on throughput and lose less to fraud and downtime.",
  },
  experience: [
    {
      role: "Python Developer",
      company: "SOGAZ - insurance / financial sector",
      period: "Jul 2025 - Present",
      context: "Russia's largest insurer, partner network of 12,000+ clinics and laboratories. Developed and maintained antifraud backend service for health insurance: checks invoices from clinics and filters out fraudulent and erroneous cases before payout.",
      bullets: [
        "Implemented new antifraud rules based on Ministry of Health clinical guidelines, breaking down requirements into executable business logic and increasing the share of automatically detected fraud by 13%.",
        "Moved heavy operations to Celery with priority queues and optimized ORM queries, reducing p95 invoice processing time by 5x and increasing throughput by 6x.",
        "Implemented cache-aside in Redis for hierarchical diagnosis and service directories, reducing p95 response time from 600 ms to ~80 ms.",
        "Designed and developed an ML-scoring microservice for invoices on FastAPI, then integrated it into the main pipeline via REST API with worker balancing.",
        "Designed and developed a ReAct agent for code review on LangChain/LangGraph with MCP servers: automatic analysis of 15+ merge requests per day in CI/CD.",
        "Implemented observability and monitoring with Prometheus metrics, Grafana dashboards, and alerts on key business and technical metrics, reducing incident detection time from 60 to 5 minutes.",
        "Covered backend with pytest integration tests up to 70%: invoice validation, antifraud rules, ML service integration, closing critical scenarios with regression before deploy.",
        "Configured liveness and readiness probes in Kubernetes.",
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
      company: "AmPay",
      period: "May 2024 - Jul 2025",
      context: "Payment platform with payment acceptance and routing through multiple payment providers. Developed the backend core of the payment service, including API for merchants, transaction processing, analytics, notifications.",
      bullets: [
        "Designed and built an analytics pipeline on Kafka with outbox pattern, reducing analytics data latency from hours to tens of seconds.",
        "Proposed to the business and developed a separate service on FastAPI and RabbitMQ for webhook and email notifications to merchants: payment statuses began to arrive without losses.",
        "Migrated payment processing from synchronous to asynchronous via Celery and Redis, reducing API response time from 4 seconds to ~200 ms.",
        "Configured caching of frequently requested data in Redis, reducing average response time of repeated requests from approximately 200 ms to 60 ms.",
        "Optimized SQL queries via EXPLAIN ANALYZE using composite and partial indexes, as well as materialized views, reducing p95 response time from 2500 ms to 800 ms, reports from 6 seconds to 2 seconds.",
        "Extended payment backend coverage with pytest integration tests up to 65%: payment scenarios, idempotency tests and state machine tests.",
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
      period: "Jul 2022 - May 2024",
      context: "Project development for the customer: system integration, business process automation. Designed and developed backend and analytical interfaces for transport monitoring system, built ETL pipelines for processing large volumes of data for analytical models.",
      bullets: [
        "Developed backend and analytical dashboards on Flask and Dash for transport monitoring - from API to graph visualization.",
        "Designed a parser for 50,000+ EGRUL/EGRIP documents with robust handling of source limitations, download errors, retries, and data extraction from PDF; ensured processing of up to 200 documents per hour.",
        "Built an ETL pipeline from scratch for 1 TB+ of text data, ~125 GB/hour, with storage in PostgreSQL and search in fractions of a second.",
        "Collected 100,000+ product items from B2B catalogs for analytical models, developing parsers and normalizing data into a unified schema.",
        "Created a synthetic document dataset generator for training OCR and ML models, closing the lack of labeled data.",
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
  resumeTagline: "Python Backend Developer | Django, FastAPI, PostgreSQL, Redis, Celery | 4+ years in production",
  additionalSkills: ["REST API", "CI/CD", "Prometheus metrics", "Grafana dashboards"],
};

export const cv = cvRu;
