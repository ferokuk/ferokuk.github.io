import type { ExperienceItem } from "../data/cv";
import { Chip } from "./Chip";
import { SectionTitle } from "./SectionTitle";

type ExperienceProps = {
  items: ExperienceItem[];
  title: string;
  stackLabel: string;
};

export function Experience({ items, title, stackLabel }: ExperienceProps) {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <SectionTitle id="experience-title" title={title} />

      <div className="experience-list">
        {items.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.period}`}>
            <header className="experience-card__header">
              <div>
                <h3>{item.role}</h3>
                <p className="experience-card__company">{item.company}</p>
              </div>
              <p className="experience-card__period">{item.period}</p>
            </header>

            <p className="experience-card__context">{item.context}</p>

            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="experience-card__stack" aria-label={`${stackLabel}: ${item.company}`}>
              {item.techStack.map((technology) => (
                <Chip key={technology}>{technology}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
