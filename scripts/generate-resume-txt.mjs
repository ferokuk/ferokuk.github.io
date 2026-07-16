import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const sourcePath = path.join(repoRoot, "src", "data", "cv.ts");
const contactsPath = path.join(repoRoot, "contacts.json");
const tempDir = path.join(repoRoot, ".tmp", "resume-txt");

let contactsRaw = fs.readFileSync(contactsPath, "utf8");
if (contactsRaw.charCodeAt(0) === 0xfeff) {
  contactsRaw = contactsRaw.slice(1);
}
const contactsConfig = JSON.parse(contactsRaw);
const email = contactsConfig.email.trim();
const telegramHandle = contactsConfig.telegram ? contactsConfig.telegram.trim().replace(/^@/, "") : "";

const contactLineParts = [`Email: ${email}`];

if (telegramHandle) {
  contactLineParts.push(`Telegram: @${telegramHandle}`);
}

function getCompanyName(company) {
  return company.split(" - ")[0];
}

function buildResumeText(cv) {
  const lines = [
    cv.profile.name,
    cv.resumeTagline,
    cv.profile.location,
    contactLineParts.join(" | "),
    "",
    cv.ui.profileTitle,
    cv.profile.summary,
    "",
    cv.ui.technicalSkillsTitle,
    ...cv.stack.map((group) => `${group.resumeTitle}: ${group.items.join(", ")}`),
    `${cv.ui.additionalTitle}: ${cv.additionalSkills.join(", ")}`,
    "",
    cv.ui.experienceResumeTitle,
    "",
  ];

  for (const job of cv.experience) {
    lines.push(
      `${getCompanyName(job.company)} - ${job.role}`,
      job.period,
      `${cv.ui.contextLabel}: ${job.context}`,
      ...job.bullets.map((bullet) => `- ${bullet}`),
      `${cv.ui.techStackLabel}: ${job.techStack.join(", ")}`,
      "",
    );
  }

  if (cv.projects.length > 0) {
    lines.push(cv.ui.projectsResumeTitle, "");

    for (const project of cv.projects) {
      lines.push(project.title, `GitHub: ${project.linkText}`, project.text, "");
    }
  }

  lines.push(cv.ui.educationResumeTitle, "");

  for (const item of cv.education) {
    lines.push(item.institution, item.program, "");
  }

  lines.push(cv.ui.additionalTitle, "");

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

const { cvRu, cvEn } = await import(pathToFileURL(tempModulePath).href);
const cvList = [cvRu, cvEn];

for (const cv of cvList) {
  const outputPath = path.join(repoRoot, "public", cv.paths.resumeTxtHref.replace(/^\//, ""));
  const resumeText = buildResumeText(cv);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `\uFEFF${resumeText}`, "utf8");
  console.log(`Generated ${path.relative(repoRoot, outputPath)}`);
}

fs.rmSync(tempDir, { recursive: true, force: true });
