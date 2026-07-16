import { findContact, getContact } from "../../data/contacts";
import type { CvData } from "../../data/cv";
import { ResumeSection } from "./ResumeSection";

function getCompanyName(company: string) {
  return company.split(" - ")[0];
}

type ResumePageProps = {
  cv: CvData;
};

export function ResumePage({ cv }: ResumePageProps) {
  const email = getContact(cv.locale, "email");
  const telegram = findContact(cv.locale, "telegram");

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="resume-page">
      <div className="resume-toolbar" aria-label="Resume actions">
        <a href={cv.paths.homeHref}>{cv.ui.mainSiteLabel}</a>
        <a href={cv.paths.alternateResumeHref} hrefLang={cv.paths.alternateLocale}>
          {cv.paths.alternateLanguageLabel}
        </a>
        <a href={cv.paths.resumeTxtHref}>{cv.ui.downloadTxtLabel}</a>
        <button type="button" onClick={handlePrint}>
          {cv.ui.printSavePdfLabel}
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
            </a>
            {telegram ? (
              <>
                {" "}
                | Telegram:{" "}
                <a href={telegram.href} aria-label={telegram.ariaLabel}>
                  {telegram.value}
                </a>
              </>
            ) : null}
          </p>
        </header>

        <ResumeSection id="profile" title={cv.ui.profileTitle}>
          <p>{cv.profile.summary}</p>
        </ResumeSection>

        <ResumeSection id="technical-skills" title={cv.ui.technicalSkillsTitle}>
          <div className="resume-lines">
            {cv.stack.map((group) => (
              <p key={group.title}>
                <strong>{group.resumeTitle}:</strong> {group.items.join(", ")}
              </p>
            ))}
            <p>
              <strong>{cv.ui.additionalTitle}:</strong> {cv.additionalSkills.join(", ")}
            </p>
          </div>
        </ResumeSection>

        <ResumeSection id="experience" title={cv.ui.experienceResumeTitle}>
          <div className="resume-jobs">
            {cv.experience.map((job) => (
              <article className="resume-job" key={`${job.company}-${job.period}`}>
                <h3>
                  {getCompanyName(job.company)} - {job.role}
                </h3>
                <p>{job.period}</p>
                <p>
                  <strong>{cv.ui.contextLabel}:</strong> {job.context}
                </p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p>
                  <strong>{cv.ui.techStackLabel}:</strong> {job.techStack.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </ResumeSection>

        {cv.projects.length > 0 ? (
          <ResumeSection id="projects" title={cv.ui.projectsResumeTitle}>
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

        <ResumeSection id="education" title={cv.ui.educationResumeTitle}>
          <div className="resume-lines">
            {cv.education.map((item) => (
              <article key={item.institution}>
                <h3>{item.institution}</h3>
                <p>{item.program}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="additional" title={cv.ui.additionalTitle}>
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
