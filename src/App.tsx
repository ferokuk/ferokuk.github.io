import { useEffect, useState } from "react";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { PublicProject } from "./components/PublicProject";
import { Stack } from "./components/Stack";
import { getContacts } from "./data/contacts";
import type { CvData } from "./data/cv";

type AppProps = {
  cv: CvData;
};

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem("cv-theme") === "dark" ? "dark" : "light";
}

export default function App({ cv }: AppProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("cv-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="page">
      <main className="cv-shell" aria-label={cv.ui.documentLabel}>
        <Header
          profile={cv.profile}
          contacts={getContacts(cv.locale)}
          paths={cv.paths}
          ui={cv.ui}
          theme={theme}
          onThemeToggle={handleThemeToggle}
        />

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
      </main>
    </div>
  );
}
