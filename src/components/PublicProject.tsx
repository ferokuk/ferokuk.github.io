import type { ProjectData } from "../data/cv";
import { SectionTitle } from "./SectionTitle";

type PublicProjectProps = {
  projects: ProjectData[];
};

export function PublicProject({ projects }: PublicProjectProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="side-section public-project" aria-labelledby="project-title">
      <SectionTitle id="project-title" title="Публичный проект" />

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-card__label">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <a href={project.href} target="_blank" rel="noreferrer" aria-label="Открыть публичный backend-проект на GitHub">
              {project.linkText}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
