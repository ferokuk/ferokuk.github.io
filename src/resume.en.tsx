import React from "react";
import ReactDOM from "react-dom/client";
import { ResumePage } from "./components/resume/ResumePage";
import { cvEn } from "./data/cv";
import "./styles/resume.css";

ReactDOM.createRoot(document.getElementById("resume-root") as HTMLElement).render(
  <React.StrictMode>
    <ResumePage cv={cvEn} />
  </React.StrictMode>,
);
