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
  target: string;
};

export type Metric = {
  value: string;
  label: string;
  note: string;
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

export type CvData = {
  profile: ProfileData;
  contacts: ContactItem[];
  metrics: Metric[];
  experience: ExperienceItem[];
  stack: StackGroup[];
  projects: ProjectData[];
  education: EducationItem[];
  languages: LanguageItem[];
  resumeTagline: string;
  additionalSkills: string[];
};

export const cv: CvData = {
  profile: {
    name: "Ярослав Гнеушев",
    title: "Python Backend Developer",
    subtitle: "Django / FastAPI · PostgreSQL · Redis · Celery · 3+ years in production",
    location: "Москва · remote / hybrid",
    eyebrow: "Python Backend · Fintech · Insurance · PostgreSQL · Async Processing",
    summary:
      "Python backend-разработчик с опытом разработки backend-систем в страховании, fintech и аналитических платформах. Участвовал в создании и развитии сервисов, которые автоматизируют бизнес-процессы, обрабатывают большие объёмы данных и обеспечивают стабильную работу продуктовых систем в production.",
    target: "Цель: backend-команды в fintech, platform, product",
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
  metrics: [
    {
      value: "5×",
      label: "скорость обработки счетов",
      note: "Celery, Redis, N+1",
    },
    {
      value: "4–6s → 200ms",
      label: "время ответа API",
      note: "асинхронный платежный pipeline",
    },
    {
      value: "25s+ → 2s",
      label: "оптимизация отчетов",
      note: "PostgreSQL, индексы, mat. views",
    },
    {
      value: "65–70%",
      label: "покрытие тестами",
      note: "интеграционные сценарии",
    },
  ],
  experience: [
    {
      role: "Backend Python Developer",
      company: "СОГАЗ · страхование / финансовый сектор",
      period: "Jul 2025 — Present",
      context: "Backend-платформа обработки счетов и антифрод-проверок в страховом домене.",
      bullets: [
        "Развивал backend антифрод-системы: правила детекции, pipeline обработки счетов, интеграция ML-скоринга через REST API.",
        "Вынес тяжелые операции в Celery, добавил Redis-кеширование, исправил N+1-запросы; обработка счетов ускорилась до 5×.",
        "Провел миграцию платформы: Python 3.9 → 3.12, Django 3.2 → 5.2, обновление зависимостей и стабилизация production.",
        "Добавил интеграционные тесты для антифрод-правил, валидации счетов, ML-сервиса и внешних API; покрытие ключевого backend-кода — до 70%.",
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
      company: "Fintech startup · проектная работа, NDA",
      period: "May 2024 — Jun 2025",
      context: "Платежная платформа для мерчантов: платежи, рефанды, статусы, webhooks, интеграция с платежным шлюзом.",
      bullets: [
        "Разрабатывал backend платежной платформы: создание платежей, статусы, рефанды, webhooks, интеграция с платежным шлюзом.",
        "Реализовал идемпотентность через Redis SET NX и перевел обработку платежей в Celery + Redis; время ответа API снизилось с 4–6s до ~200ms.",
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
      company: "ЦИАРС · analytics / automation",
      period: "Dec 2022 — May 2024",
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
  stack: [
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
  ],
  projects: [],
  education: [
    {
      institution: "Финансовый университет при Правительстве РФ",
      program: "Прикладные информационные системы в экономике и финансах · 2028",
    },
    {
      institution: "Колледж информатики и программирования",
      program: "Программирование в компьютерных системах · 2024",
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
