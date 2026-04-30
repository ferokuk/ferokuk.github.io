import type { EducationItem, LanguageItem } from "../data/cv";
import { SectionTitle } from "./SectionTitle";

type EducationProps = {
  items: EducationItem[];
  languages: LanguageItem[];
  title: string;
  languageLabel: string;
};

export function Education({ items, languages, title, languageLabel }: EducationProps) {
  return (
    <section className="side-section education" aria-labelledby="education-title">
      <SectionTitle id="education-title" title={title} />

      <div className="education-list">
        {items.map((item) => (
          <article className="education-item" key={item.institution}>
            <h3>{item.institution}</h3>
            <p>{item.program}</p>
          </article>
        ))}
      </div>

      <div className="language-line">
        <span>{languageLabel}</span>
        <strong>{languages.map((language) => `${language.name} · ${language.level}`).join(", ")}</strong>
      </div>
    </section>
  );
}
