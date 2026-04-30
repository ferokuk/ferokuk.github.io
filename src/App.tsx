import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { FooterCta } from "./components/FooterCta";
import { Header } from "./components/Header";
import { Metrics } from "./components/Metrics";
import { PublicProject } from "./components/PublicProject";
import { Stack } from "./components/Stack";
import type { CvData } from "./data/cv";

type AppProps = {
  cv: CvData;
};

export default function App({ cv }: AppProps) {
  return (
    <div className="page">
      <main className="cv-shell" aria-label={cv.ui.documentLabel}>
        <Header
          profile={cv.profile}
          contacts={cv.contacts}
          paths={cv.paths}
          ui={cv.ui}
        />

        <Metrics metrics={cv.metrics} />

        <div className="layout">
          <div className="main-column">
            <Experience items={cv.experience} title={cv.ui.experienceTitle} stackLabel={cv.ui.techStackLabel} />
          </div>

          <aside className="side-column" aria-label={cv.ui.sideColumnLabel}>
            <Stack groups={cv.stack} title={cv.ui.stackTitle} />
            <PublicProject projects={cv.projects} title={cv.ui.projectsTitle} />
            <Education
              items={cv.education}
              languages={cv.languages}
              title={cv.ui.educationTitle}
              languageLabel={cv.ui.languageLabel}
            />
          </aside>
        </div>

        <FooterCta contacts={cv.contacts} target={cv.profile.target} paths={cv.paths} ui={cv.ui} />
      </main>
    </div>
  );
}
