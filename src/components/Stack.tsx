import type { StackGroup } from "../data/cv";
import { Chip } from "./Chip";
import { SectionTitle } from "./SectionTitle";

type StackProps = {
  groups: StackGroup[];
};

export function Stack({ groups }: StackProps) {
  return (
    <section className="side-section stack" aria-labelledby="stack-title">
      <SectionTitle id="stack-title" title="Стек" />

      <div className="stack-list">
        {groups.map((group) => (
          <article className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-list">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
