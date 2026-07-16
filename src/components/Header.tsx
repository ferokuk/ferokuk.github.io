import type { ContactItem, CvPaths, CvUiData, ProfileData } from "../data/cv";

type HeaderProps = {
  profile: ProfileData;
  contacts: ContactItem[];
  paths: CvPaths;
  ui: CvUiData;
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

export function Header({ profile, contacts, paths, ui, theme, onThemeToggle }: HeaderProps) {
  const handlePrint = () => {
    window.print();
  };

  const nextThemeLabel = theme === "dark" ? ui.lightThemeLabel : ui.darkThemeLabel;

  return (
    <header className="hero">
      <div className="hero__controls">
        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label={`${ui.themeToggleLabel}: ${nextThemeLabel}`}
        >
          {nextThemeLabel}
        </button>
        <a className="language-switch" href={paths.alternateHref} hrefLang={paths.alternateLocale}>
          {paths.alternateLanguageLabel}
        </a>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">{profile.eyebrow}</p>
        <h1>{profile.name}</h1>
        <p className="hero__role">{profile.title}</p>
        <div className="hero__highlights" aria-label={profile.subtitle}>
          {profile.stackHighlights.map((item) => (
            <span className="hero__stack-pill" key={item}>
              {item}
            </span>
          ))}
          <span className="hero__experience-pill">{profile.experienceHighlight}</span>
        </div>
        <p className="hero__summary">{profile.summary}</p>
      </div>

      <aside className="contact-card" aria-label={ui.contactTitle}>
        <div className="contact-card__top">
          <p className="contact-card__title">{ui.contactTitle}</p>
        </div>
        <div className="contact-card__actions">
          <a className="contact-action" href={paths.resumeHref}>
            {ui.resumeLinkLabel}
          </a>
          <button className="contact-action contact-action--button" type="button" onClick={handlePrint}>
            {ui.printPageLabel}
          </button>
        </div>

        <address className="contact-card__body">
          <div className="contact-row">
            <span className="contact-row__label">{ui.locationLabel}</span>
            <span className="contact-row__value">{profile.location}</span>
          </div>

          {contacts.map((contact) => (
            <div className="contact-row" key={contact.label}>
              <span className="contact-row__label">{contact.label}</span>
              <a
                className="contact-row__value"
                href={contact.href}
                aria-label={contact.ariaLabel}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </address>
      </aside>
    </header>
  );
}
