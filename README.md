# cv.ferokuk.dev

Personal CV website: [cv.ferokuk.dev](https://cv.ferokuk.dev)

- Russian (`/`) and English (`/en/`) versions
- Printable resume: `/resume.html`, `/en/resume.html` (use browser print → Save as PDF)
- Plain-text resume files are generated from the same data at build time

## Stack

Vite, React, TypeScript, plain CSS. Deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

`npm run build` regenerates the TXT resumes, typechecks, and builds to `dist/`.

CV content lives in `src/data/cv.ts`, contacts in `contacts.json`.
