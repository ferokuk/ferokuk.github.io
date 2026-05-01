# Ярослав Гнеушев - one-page CV

Production-ready personal CV website for `Python Backend Developer` roles. The main page is a polished visual one-page CV for recruiters and hiring managers; `resume.html` and the TXT file are clean application-friendly formats for printing, PDF export, and ATS-style submission.

## Stack

- Vite
- React
- TypeScript
- Plain CSS with CSS custom properties
- GitHub Pages

No backend, routing library, Tailwind, Sass, UI kit, animation library, or PDF generation dependency is used.

## Local Development

```bash
npm install
npm run dev
```

Vite will print the local URL in the terminal.

- Russian site: `/`
- English site: `/en/`
- Russian printable resume: `/resume.html`
- English printable resume: `/en/resume.html`

## Checks

```bash
npm run typecheck
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Updating CV Content

The shared source of truth for both locales is `src/data/cv.ts`. Update profile text, contacts, metrics, experience, stack, projects, education, and languages there. The project uses separate URLs for language versions instead of runtime language detection:

- `/` and `/resume.html` for Russian
- `/en/` and `/en/resume.html` for English

This keeps GitHub Pages deployment simple, avoids a routing dependency, and lets each language page have its own HTML metadata and `hreflang` links.

The plain TXT resume is generated from the same data source:

```bash
npm run generate:resume-txt
```

`npm run build` runs this generation step automatically and writes:

- `public/files/Yaroslav_Gneushev_Python_Backend_CV.txt`
- `public/files/Yaroslav_Gneushev_Python_Backend_CV_EN.txt`

## Resume PDF Export

Open `/resume.html` or `/en/resume.html`, then use the browser print dialog and choose "Save as PDF". The project intentionally does not generate PDFs automatically and does not include Puppeteer, Playwright, react-pdf, or server-side PDF tooling.

## GitHub Pages

The workflow `.github/workflows/deploy.yml` deploys `dist/` to GitHub Pages on push to `main`.

`vite.config.ts` uses `base: "/"` for the expected user-site repository:

```txt
https://ferokuk.github.io
```

If this project is deployed as a repository site, for example `https://ferokuk.github.io/one-page-cv/`, change `base` in `vite.config.ts` to:

```ts
base: "/one-page-cv/"
```

GitHub Pages may still need to be enabled in repository settings with GitHub Actions as the Pages source.

## Custom Domain

To use a custom domain later, add `public/CNAME` with the domain:

```txt
cv.example.com
```

Then configure DNS and the custom domain in GitHub Pages settings.
