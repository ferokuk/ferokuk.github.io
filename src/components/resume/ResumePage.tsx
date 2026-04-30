import { cv } from "../../data/cv";
import type { ContactItem } from "../../data/cv";
import { ResumeSection } from "./ResumeSection";

function getContact(kind: ContactItem["kind"]) {
  const contact = cv.contacts.find((item) => item.kind === kind);

  if (!contact) {
    throw new Error(`Contact not found: ${kind}`);
  }

  return contact;
}

function getCompanyName(company: string) {
  return company.split(" · ")[0];
}

export function ResumePage() {
  const email = getContact("email");
  const telegram = getContact("telegram");
  const github = getContact("github");

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="resume-page">
      <div className="resume-toolbar" aria-label="Resume actions">
        <a href="/">Main site</a>
        <a href="/files/Yaroslav_Gneushev_Python_Backend_CV.txt">Download TXT</a>
        <button type="button" onClick={handlePrint}>
          Print / Save as PDF
        </button>
      </div>

      <article className="resume-document" aria-label="Resume Ярослава Гнеушева">
        <header className="resume-header">
          <h1>{cv.profile.name}</h1>
          <p className="resume-tagline">{cv.resumeTagline}</p>
          <p>{cv.profile.location}</p>
          <p>
            Email:{" "}
            <a href={email.href} aria-label={email.ariaLabel}>
              {email.value}
            </a>{" "}
            | Telegram:{" "}
            <a href={telegram.href} aria-label={telegram.ariaLabel}>
              {telegram.value}
            </a>{" "}
            | GitHub:{" "}
            <a href={github.href} aria-label={github.ariaLabel}>
              {github.value}
            </a>
          </p>
        </header>

        <ResumeSection id="profile" title="Profile">
          <p>{cv.profile.summary}</p>
        </ResumeSection>

        <ResumeSection id="technical-skills" title="Technical Skills">
          <div className="resume-lines">
            {cv.stack.map((group) => (
              <p key={group.title}>
                <strong>{group.resumeTitle}:</strong> {group.items.join(", ")}
              </p>
            ))}
            <p>
              <strong>Additional:</strong> {cv.additionalSkills.join(", ")}
            </p>
          </div>
        </ResumeSection>

        <ResumeSection id="experience" title="Experience">
          <div className="resume-jobs">
            {cv.experience.map((job) => (
              <article className="resume-job" key={`${job.company}-${job.period}`}>
                <h3>
                  {getCompanyName(job.company)} — {job.role}
                </h3>
                <p>{job.period}</p>
                <p>
                  <strong>Context:</strong> {job.context}
                </p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p>
                  <strong>Tech stack:</strong> {job.techStack.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </ResumeSection>

        {cv.projects.length > 0 ? (
          <ResumeSection id="projects" title="Projects">
            {cv.projects.map((project) => (
              <article className="resume-project" key={project.title}>
                <h3>{project.title}</h3>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={project.href} aria-label="Открыть публичный backend-проект на GitHub">
                    {project.linkText}
                  </a>
                </p>
                <p>{project.text}</p>
              </article>
            ))}
          </ResumeSection>
        ) : null}

        <ResumeSection id="education" title="Education">
          <div className="resume-lines">
            {cv.education.map((item) => (
              <article key={item.institution}>
                <h3>{item.institution}</h3>
                <p>{item.program}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="additional" title="Additional">
          {cv.languages.map((language) => (
            <p key={language.name}>
              {language.name}: {language.level}
            </p>
          ))}
        </ResumeSection>
      </article>
    </main>
  );
}
