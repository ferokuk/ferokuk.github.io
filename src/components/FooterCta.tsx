import type { ContactItem, CvPaths, CvUiData } from "../data/cv";

type FooterCtaProps = {
  contacts: ContactItem[];
  target: string;
  paths: CvPaths;
  ui: CvUiData;
};

export function FooterCta({ contacts, target, paths, ui }: FooterCtaProps) {
  const github = contacts.find((contact) => contact.kind === "github");
  const email = contacts.find((contact) => contact.kind === "email");
  const contactActions = [github, email].filter((contact): contact is ContactItem => Boolean(contact));

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="footer-cta" aria-label={ui.footerTitle}>
      <div>
        <h2>{ui.footerTitle}</h2>
        <p>{target}</p>
      </div>

      <div className="footer-cta__actions">
        {contactActions.map((contact) => (
          <a
            href={contact.href}
            key={contact.label}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={contact.ariaLabel}
          >
            {contact.label}
          </a>
        ))}
        <a href={paths.resumeHref}>{ui.resumeLinkLabel}</a>
        <button type="button" onClick={handlePrint}>
          {ui.printPageLabel}
        </button>
      </div>
    </footer>
  );
}
