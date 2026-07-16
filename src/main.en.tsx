import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { cvEn } from "./data/cv";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App cv={cvEn} />
  </React.StrictMode>,
);
