import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        resume: "resume.html",
        en: "en/index.html",
        "en-resume": "en/resume.html",
      },
    },
  },
  plugins: [react()],
});
