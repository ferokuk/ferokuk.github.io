import contactsConfig from "../../contacts.json";
import type { ContactItem, Locale } from "./cv";

type ContactsConfig = {
  email: string;
  telegram?: string;
};

const config: ContactsConfig = contactsConfig;

const email = config.email.trim();
const telegramHandle = config.telegram?.trim().replace(/^@/, "");

const ariaLabels: Record<Locale, Record<ContactItem["kind"], string>> = {
  ru: {
    telegram: "Написать Ярославу Гнеушеву в Telegram",
    email: "Написать Ярославу Гнеушеву на email",
  },
  en: {
    telegram: "Contact Yaroslav Gneushev on Telegram",
    email: "Email Yaroslav Gneushev",
  },
};

export function getContacts(locale: Locale): ContactItem[] {
  const contacts: ContactItem[] = [];

  if (telegramHandle) {
    contacts.push({
      kind: "telegram",
      label: "Telegram",
      value: `@${telegramHandle}`,
      href: `https://t.me/${telegramHandle}`,
      ariaLabel: ariaLabels[locale].telegram,
    });
  }

  contacts.push({
    kind: "email",
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    ariaLabel: ariaLabels[locale].email,
  });

  return contacts;
}

export function findContact(locale: Locale, kind: ContactItem["kind"]): ContactItem | undefined {
  return getContacts(locale).find((item) => item.kind === kind);
}

export function getContact(locale: Locale, kind: ContactItem["kind"]): ContactItem {
  const contact = findContact(locale, kind);

  if (!contact) {
    throw new Error(`Contact not found: ${kind}`);
  }

  return contact;
}
