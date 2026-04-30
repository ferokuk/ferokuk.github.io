import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { FooterCta } from "./components/FooterCta";
import { Header } from "./components/Header";
import { Metrics } from "./components/Metrics";
import { PublicProject } from "./components/PublicProject";
import { Stack } from "./components/Stack";
import { cv } from "./data/cv";

export default function App() {
  return (
    <div className="page">
      <main className="cv-shell" aria-label="CV Ярослава Гнеушева">
        <Header
          profile={cv.profile}
          contacts={cv.contacts}
        />

        <Metrics metrics={cv.metrics} />

        <div className="layout">
          <div className="main-column">
            <Experience items={cv.experience} />
          </div>

          <aside className="side-column" aria-label="Стек, проект и образование">
            <Stack groups={cv.stack} />
            <PublicProject projects={cv.projects} />
            <Education items={cv.education} languages={cv.languages} />
          </aside>
        </div>

        <FooterCta contacts={cv.contacts} target={cv.profile.target} />
      </main>
    </div>
  );
}
