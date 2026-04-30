import type { ContactItem, CvPaths, CvUiData, ProfileData } from "../data/cv";

type HeaderProps = {
  profile: ProfileData;
  contacts: ContactItem[];
  paths: CvPaths;
  ui: CvUiData;
};

export function Header({ profile, contacts, paths, ui }: HeaderProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{profile.eyebrow}</p>
        <h1>{profile.name}</h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__subtitle">{profile.subtitle}</p>
        <p className="hero__summary">{profile.summary}</p>
      </div>

      <aside className="contact-card" aria-label={ui.contactTitle}>
        <div className="contact-card__top">
          <p className="contact-card__title">{ui.contactTitle}</p>
          <a className="language-switch" href={paths.alternateHref} hrefLang={paths.alternateLocale}>
            {paths.alternateLanguageLabel}
          </a>
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

        <div className="contact-card__actions">
          <a className="contact-action" href={paths.resumeHref}>
            {ui.resumeLinkLabel}
          </a>
          <button className="contact-action contact-action--button" type="button" onClick={handlePrint}>
            {ui.printPageLabel}
          </button>
        </div>
      </aside>
    </header>
  );
}
