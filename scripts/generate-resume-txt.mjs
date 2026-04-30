import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const sourcePath = path.join(repoRoot, "src", "data", "cv.ts");
const tempDir = path.join(repoRoot, ".tmp", "resume-txt");
const outputPath = path.join(repoRoot, "public", "files", "Yaroslav_Gneushev_Python_Backend_CV.txt");

function getContact(cv, kind) {
  const contact = cv.contacts.find((item) => item.kind === kind);

  if (!contact) {
    throw new Error(`Contact not found: ${kind}`);
  }

  return contact;
}

function getCompanyName(company) {
  return company.split(" · ")[0];
}

function buildResumeText(cv) {
  const email = getContact(cv, "email");
  const telegram = getContact(cv, "telegram");
  const github = getContact(cv, "github");
  const lines = [
    cv.profile.name,
    cv.resumeTagline,
    cv.profile.location,
    `Email: ${email.value} | Telegram: ${telegram.value} | GitHub: ${github.value}`,
    "",
    "Profile",
    cv.profile.summary,
    "",
    "Technical Skills",
    ...cv.stack.map((group) => `${group.resumeTitle}: ${group.items.join(", ")}`),
    `Additional: ${cv.additionalSkills.join(", ")}`,
    "",
    "Experience",
    "",
  ];

  for (const job of cv.experience) {
    lines.push(
      `${getCompanyName(job.company)} — ${job.role}`,
      job.period,
      `Context: ${job.context}`,
      ...job.bullets.map((bullet) => `- ${bullet}`),
      `Tech stack: ${job.techStack.join(", ")}`,
      "",
    );
  }

  if (cv.projects.length > 0) {
    lines.push("Projects", "");

    for (const project of cv.projects) {
      lines.push(project.title, `GitHub: ${project.linkText}`, project.text, "");
    }
  }

  lines.push("Education", "");

  for (const item of cv.education) {
    lines.push(item.institution, item.program, "");
  }

  lines.push("Additional", "");

  for (const language of cv.languages) {
    lines.push(`${language.name}: ${language.level}`);
  }

  return `${lines.join("\n").trimEnd()}\n`;
}

const source = fs.readFileSync(sourcePath, "utf8");
const result = ts.transpileModule(source, {
  fileName: sourcePath,
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
  reportDiagnostics: true,
});

const errors = result.diagnostics?.filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error) ?? [];

if (errors.length > 0) {
  const formatted = ts.formatDiagnosticsWithColorAndContext(errors, {
    getCanonicalFileName: (fileName) => fileName,
    getCurrentDirectory: () => repoRoot,
    getNewLine: () => "\n",
  });
  throw new Error(formatted);
}

fs.rmSync(tempDir, { recursive: true, force: true });
fs.mkdirSync(tempDir, { recursive: true });

const tempModulePath = path.join(tempDir, `cv-${Date.now()}.mjs`);
fs.writeFileSync(tempModulePath, result.outputText, "utf8");

const { cv } = await import(pathToFileURL(tempModulePath).href);
const resumeText = buildResumeText(cv);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `\uFEFF${resumeText}`, "utf8");
fs.rmSync(tempDir, { recursive: true, force: true });

console.log(`Generated ${path.relative(repoRoot, outputPath)}`);
