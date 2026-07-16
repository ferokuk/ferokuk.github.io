import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

import contactsConfig from "./contacts.json";

const METRIKA_ID = 112122572;

const githubProfileUrl = contactsConfig.github
  ? `https://github.com/${contactsConfig.github.trim().replace(/^@/, "")}`
  : "";

const metrikaScript = `
(function () {
  var ID = ${METRIKA_ID};
  var GITHUB_PROFILE = "${githubProfileUrl}";

  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}", "ym");

  function send() {
    if (typeof window.ym !== "function") { return; }
    window.ym.apply(window, arguments);
  }

  send(ID, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    accurateTrackBounce: true,
    trackLinks: true
  });

  var path = window.location.pathname || "";
  var referrer = document.referrer || "";
  var referrerHost = "";
  if (referrer) {
    try { referrerHost = new URL(referrer).hostname.toLowerCase(); } catch (error) { referrerHost = ""; }
  }

  send(ID, "params", {
    page_type: path.indexOf("resume") !== -1 ? "resume" : "cv",
    lang: path.indexOf("/en/") === 0 ? "en" : "ru",
    from_landing: (referrerHost === "ferokuk.dev" || referrerHost === "www.ferokuk.dev") ? 1 : 0
  });

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || typeof target.closest !== "function") { return; }

    var node = target.closest("a,button");
    if (!node) { return; }

    var href = node.getAttribute("href") || "";
    var classes = node.classList;

    if (href.indexOf("mailto:") === 0) {
      send(ID, "reachGoal", "cv_contact_email");
    } else if (href.indexOf("t.me/") !== -1) {
      send(ID, "reachGoal", "cv_contact_telegram");
    } else if (href.indexOf("github.com") !== -1) {
      if (GITHUB_PROFILE && (href === GITHUB_PROFILE || href === GITHUB_PROFILE + "/")) {
        send(ID, "reachGoal", "cv_contact_github");
      } else {
        send(ID, "reachGoal", "cv_github_project");
      }
    } else if (href.indexOf("/files/") !== -1) {
      send(ID, "reachGoal", "cv_txt_download");
    } else if (href.indexOf("resume.html") !== -1) {
      send(ID, "reachGoal", "cv_resume_open");
    } else if (classes && classes.contains("language-switch")) {
      send(ID, "reachGoal", "cv_lang_switch");
    } else if (classes && classes.contains("theme-toggle")) {
      send(ID, "reachGoal", "cv_theme_toggle");
    }
  }, true);

  window.addEventListener("beforeprint", function () {
    send(ID, "reachGoal", "cv_print");
  });
})();
`;

const metrikaNoscript = `<div><img src="https://mc.yandex.ru/watch/${METRIKA_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`;

function yandexMetrika(): Plugin {
  return {
    name: "yandex-metrika",
    apply: "build",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          children: metrikaScript,
          injectTo: "body-prepend",
        },
        {
          tag: "noscript",
          children: metrikaNoscript,
          injectTo: "body-prepend",
        },
      ];
    },
  };
}

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
  plugins: [react(), yandexMetrika()],
});
