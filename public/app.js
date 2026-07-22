const root = document.querySelector("#appRoot");
const nav = document.querySelector("#siteNav");
const menuButton = document.querySelector("#menuButton");
const APPS = Array.isArray(window.CJS_APPS) ? window.CJS_APPS : [];
const CONTACT = window.CJS_CONTACT || {
  general: "info@cjsapplabs.xyz",
  business: "admin@cjsapplabs.xyz",
  owner: "cj@cjsapplabs.xyz"
};
const DOWNLOAD_GUIDES = window.CJS_DOWNLOAD_GUIDES || {};
const APP_ACCENTS = {
  "the-accountant": ["#144563", "#0f2d3f", "#a36f33"],
  sanctuary: ["#3c6f66", "#295248", "#87a08f"],
  "after-dark": ["#3a1f4f", "#1f102d", "#aa7e4b"],
  "never-ending-story": ["#344b7b", "#1f2d4d", "#c88c43"],
  "coach-court": ["#7a3b1d", "#4f2410", "#cf9556"],
  cursive: ["#6e4f2b", "#46301a", "#c59e68"],
  electrolab: ["#1e5b7c", "#12374b", "#8fb4c8"],
  "family-planner": ["#55744a", "#34492f", "#c4a06f"],
  gamertabs: ["#2d475d", "#1a2c3b", "#8f6bb7"],
  grimoire: ["#372038", "#1c111d", "#9c7a58"],
  "learning-stars": ["#4e5f26", "#313b18", "#d0a35a"],
  mathsquest: ["#1c5968", "#113944", "#9b7f47"],
  mixmate: ["#69442b", "#3d2719", "#ca8f59"],
  moneytalks: ["#2e5950", "#1b3731", "#a8a36a"]
};

function route() {
  const hashPath = (window.location.hash || "").replace(/^#/, "");
  const directPath = window.location.pathname === "/" ? "" : window.location.pathname;
  const path = hashPath || directPath || "/";
  setActiveNav(path);

  if (path === "/" || path === "/home") return renderHome();
  if (path === "/about") return renderAbout();
  if (path === "/apps") return renderApps();
  if (path.startsWith("/apps/")) return renderAppDetail(path.split("/").pop());
  if (path === "/how-to-download") return renderDownloadHelp();
  return renderNotFound();
}

function setActiveNav(path) {
  nav?.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href")?.replace(/^#/, "");
    link.classList.toggle("active", href === path || (href === "/apps" && path.startsWith("/apps/")));
  });
}

function page(html) {
  root.innerHTML = html;
  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  root.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const featured = APPS.slice(0, 6).map(appCard).join("");
  const categories = [...new Set(APPS.map((app) => app.category))].slice(0, 7);

  page(`
    <section class="section hero">
      <div class="hero-copy">
        <p class="eyebrow">Independent Full Apps + Public Demos</p>
        <h1>Built at home. Built for real life. Built to help.</h1>
        <p class="lead">This is not a generic app store. These are projects I built because my life was overloaded and I needed better systems for family, work, learning, routine, mindset, and everyday survival. You can try every public demo first. If you like it, pay, download, and use.</p>
        <div class="hero-actions">
          <a class="primary-button" href="#/apps">Explore all apps</a>
          <a class="secondary-button" href="#/about">Read why I built them</a>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Showcase highlights">
        <div class="stat"><strong>${APPS.length}</strong><span>public demos listed</span></div>
        <div class="stat"><strong>Family + Trade</strong><span>from kids learning to real admin tools</span></div>
        <div class="stat"><strong>Trial first</strong><span>try before any paid access</span></div>
      </aside>
    </section>

    <section class="section surface">
      <div>
        <p class="eyebrow">What is here</p>
        <h2>Apps for kids, adults, tradies, creators, and curious minds.</h2>
      </div>
      <div>
        <p>Inside this collection are apps for reading and writing practice, maths, coaching, electronics support, family structure, invoicing, wellbeing, storytelling, games, and deep reference topics. Some projects are practical. Some are experimental. All were made to solve real-world pressure points, not to chase trends.</p>
        <div class="tag-row">${categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Featured right now</p>
          <h2>Start with these demo-ready apps.</h2>
        </div>
        <a href="#/apps">View all apps</a>
      </div>
      <div class="card-grid">${featured}</div>
    </section>
  `);
}

function renderAbout() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">About These Apps</p>
      <h1>I started building apps for my family, then I could not stop building.</h1>
      <p class="lead">This collection grew from real pressure: parenting, work, study, bills, routines, and trying to keep everything moving without burning out. One useful tool became two, then ten, then a full showcase.</p>
    </section>

    <section class="section content-panel wide-copy">
      <h2>How this happened</h2>
      <p>I am a tradie and a dad, and I needed systems that actually worked in my day-to-day life. I started with apps for family scheduling, communication, and basic structure at home. Then I kept building wherever life felt messy.</p>
      <p>Now there are apps to help kids with reading, writing, learning, and maths. There are tools for electronics and practical trade work. There are apps for adults and tradies managing invoices, jobs, stress, and money. There are also research-driven projects based on topics I have studied for years, including demonology, end-of-world themes, mythology, and natural remedies.</p>
      <p>These apps were built to make my life easier first. Maybe they can make yours easier too.</p>

      <h2>How to use this site</h2>
      <p>Every trial is here to be tested first. If you like it, pay, download, and use. Each app page includes screenshots, details, and install instructions.</p>
      <p>This is not faceless software. It is a living body of work built with time, effort, and real intent to solve everyday problems.</p>
    </section>
  `);
}

function renderApps() {
  const categories = ["All", ...new Set(APPS.map((app) => app.category))];

  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">All Public Trials</p>
      <h1>Choose an app and open its full detail page.</h1>
      <p class="lead">Each app has its own dedicated page with overview, screenshots, and direct instructions for trial access and download/install flow.</p>
    </section>

    <section class="section app-browser">
      <div class="filters" id="filters">
        ${categories
          .map((category) => `<button class="filter ${category === "All" ? "active" : ""}" data-category="${escapeAttr(category)}">${escapeHtml(category)}</button>`)
          .join("")}
      </div>
      <div id="appsGrid" class="card-grid">${APPS.map(appCard).join("")}</div>
    </section>
  `);

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filtered = category === "All" ? APPS : APPS.filter((app) => app.category === category);
      document.querySelector("#appsGrid").innerHTML = filtered.map(appCard).join("");
    });
  });
}

function renderAppDetail(id) {
  const app = APPS.find((item) => item.id === id);
  if (!app) return renderNotFound();
  const accent = getAppAccent(app.id);
  const customSteps = Array.isArray(DOWNLOAD_GUIDES[app.id]) ? DOWNLOAD_GUIDES[app.id] : [];

  const demoButton = app.demoUrl
    ? `<a class="primary-button" href="${escapeAttr(app.demoUrl)}" target="_blank" rel="noreferrer">Open trial now</a>`
    : `<button class="primary-button disabled" disabled>Trial link coming soon</button>`;
  const buyLink = app.checkoutUrl || `mailto:${CONTACT.general}?subject=${encodeURIComponent(`${app.name} paid access request`)}`;
  const screenshotList = Array.isArray(app.screenshots) && app.screenshots.length
    ? app.screenshots
    : [`assets/screenshots/${app.id}-1.svg`];

  const screenshots = screenshotList
    .map((src, index) => `
      <figure class="screenshot-card">
        <div class="screenshot-frame">
          <img src="${escapeAttr(src)}" alt="${escapeAttr(app.name)} screenshot ${index + 1}" onerror="this.parentElement.classList.add('missing'); this.remove();" />
          <span>Screenshot will be added here</span>
        </div>
        <figcaption>${index === 0 ? "Main app view" : `Feature preview ${index + 1}`}</figcaption>
      </figure>
    `)
    .join("");

  page(`
    <section class="section app-detail-hero app-theme" style="${escapeAttr(getAccentStyle(accent))}">
      <div>
        <a class="back-link" href="#/apps">← Back to all apps</a>
        <p class="eyebrow">${escapeHtml(app.category)}</p>
        <h1>${escapeHtml(app.name)}</h1>
        <p class="lead">${escapeHtml(app.subtitle)}</p>
        <div class="tag-row">${app.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="hero-actions">
          ${demoButton}
          <a class="secondary-button" href="${escapeAttr(buyLink)}">Paid access / subscribe</a>
        </div>
      </div>
      <aside class="price-box">
        <span>Full version price</span>
        <strong>${escapeHtml(app.monthlyPrice || "Contact for pricing")}</strong>
        <p>Status: ${escapeHtml(app.status || "In progress")}</p>
      </aside>
    </section>

    <section class="section detail-layout">
      <article class="content-panel app-theme" style="${escapeAttr(getAccentStyle(accent))}">
        <h2>About this app</h2>
        <p>${escapeHtml(app.longDescription || app.shortDescription || "Description coming soon.")}</p>
        <h3>Download and install instructions</h3>
        ${renderDownloadSteps(app, customSteps)}
      </article>

      <aside class="content-panel small-panel app-theme" style="${escapeAttr(getAccentStyle(accent))}">
        <h3>Support</h3>
        <p>Need help with ${escapeHtml(app.name)} setup? Email <a href="mailto:${escapeAttr(CONTACT.general)}">${escapeHtml(CONTACT.general)}</a>.</p>
        <h3>Best for</h3>
        <p>${escapeHtml(app.tags.join(", "))}</p>
      </aside>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Screenshots</p>
          <h2>${escapeHtml(app.name)} preview gallery</h2>
        </div>
      </div>
      <div class="screenshot-grid">${screenshots}</div>
    </section>
  `);
}

function renderDownloadHelp() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">How To Download</p>
      <h1>Trial first, then unlock, then install from Chrome.</h1>
      <p class="lead">Every app page includes direct steps. This page gives the full process in one place for all apps in CJS App Labs.</p>
    </section>

    <section class="section timeline">
      ${step("1", "Open any app trial", "From the All Apps page, open the trial for the app you want to test.")}
      ${step("2", "Test if it helps", "Use the trial flow and confirm the app actually improves your day-to-day use case.")}
      ${step("3", "Move to paid access", "When ready, use the app subscription/purchase button on that app page.")}
      ${step("4", "Use your account", "Sign in using the same account details used for the full access flow.")}
      ${step("5", "Install from Chrome", "Open Chrome menu and select Install app or Add to Home screen to download/install where supported.")}
    </section>

    <section class="section content-panel">
      <h2>Need direct support?</h2>
      <p>If a trial link, payment link, or install option does not appear, contact <a href="mailto:${escapeAttr(CONTACT.general)}">${escapeHtml(CONTACT.general)}</a> and include the app name in your message.</p>
    </section>
  `);
}

function renderNotFound() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">Page not found</p>
      <h1>This page does not exist.</h1>
      <p class="lead">Use the menu to continue browsing the app showcase.</p>
      <a class="primary-button" href="#/apps">Go to all apps</a>
    </section>
  `);
}

function appCard(app) {
  const demoButton = app.demoUrl
    ? `<a href="${escapeAttr(app.demoUrl)}" class="mini-button" target="_blank" rel="noreferrer">Open trial</a>`
    : `<span class="mini-button muted">Trial pending</span>`;

  return `
    <article class="app-card">
      <div class="app-icon">${escapeHtml(app.iconText || "AP")}</div>
      <p class="app-category">${escapeHtml(app.category || "General")}</p>
      <h3>${escapeHtml(app.name || "Unnamed app")}</h3>
      <p>${escapeHtml(app.shortDescription || "App details coming soon.")}</p>
      <div class="tag-row small-tags">${(app.tags || []).slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="card-actions">
        <a href="#/apps/${escapeAttr(app.id)}" class="text-link">View app page</a>
        ${demoButton}
      </div>
    </article>
  `;
}

function step(number, title, text) {
  return `<article class="step"><span>${number}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div></article>`;
}

function renderDownloadSteps(app, customSteps) {
  const fallback = [
    `Open ${app.name} using the trial button on this page.`,
    "Test the key workflow to check if the app fits your needs.",
    "Use the paid access button to unlock full features when ready.",
    "Sign back in with the same account used for purchase.",
    "In Google Chrome, choose Install app or Add to Home screen when available."
  ];
  const steps = customSteps.length ? customSteps : fallback;
  return `<ol class="download-steps">${steps.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ol>`;
}

function getAppAccent(appId) {
  return APP_ACCENTS[appId] || ["#1b425f", "#2e6288", "#8a5f2a"];
}

function getAccentStyle(colors) {
  const [a, b, c] = colors;
  return `--app-accent-a: ${a}; --app-accent-b: ${b}; --app-accent-c: ${c};`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

window.addEventListener("hashchange", route);
route();
