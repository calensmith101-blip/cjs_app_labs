const root = document.querySelector("#appRoot");
const nav = document.querySelector("#siteNav");
const menuButton = document.querySelector("#menuButton");
const APPS = Array.isArray(window.CJS_APPS) ? window.CJS_APPS : [];
const PLANS = Array.isArray(window.CJS_PLANS) ? window.CJS_PLANS : [];
const CONTACT = window.CJS_CONTACT || { general: "info@cjsapplabs.xyz", business: "admin@cjsapplabs.xyz", owner: "cj@cjsapplabs.xyz" };

function route() {
  const hashPath = (window.location.hash || "").replace(/^#/, "");
  const directPath = window.location.pathname === "/" ? "" : window.location.pathname;
  const path = hashPath || directPath || "/";
  setActiveNav(path);

  if (path === "/" || path === "/home") return renderHome();
  if (path === "/apps") return renderApps();
  if (path.startsWith("/apps/")) return renderAppDetail(path.split("/").pop());
  if (path === "/pricing") return renderPricing();
  if (path === "/download-help") return renderDownloadHelp();
  if (path === "/security" || path === "/privacy") return renderSecurity();
  if (path === "/about") return renderAbout();
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
  root.focus({ preventScroll: true });
  nav?.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const featured = APPS.slice(0, 6).map(appCard).join("");
  page(`
    <section class="hero section">
      <div class="hero-copy">
        <p class="eyebrow">Independent apps by CJ</p>
        <h1>Try useful, personal-built apps before you subscribe.</h1>
        <p class="lead">I started building these apps for my own work, family, learning and creative projects. Some became useful enough that I wanted to share them. CJS App Labs is where you can try the demos for free and decide what suits you.</p>
        <div class="hero-actions">
          <a class="primary-button" href="#/apps">Browse free demos</a>
          <a class="secondary-button" href="#/download-help">How full access works</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="CJS App Labs highlights">
        <div class="stat"><strong>${APPS.length}</strong><span>apps listed</span></div>
        <div class="stat"><strong>Free</strong><span>demo access first</span></div>
        <div class="stat"><strong>No lock-in</strong><span>monthly access</span></div>
      </div>
    </section>

    <section class="section split-panel">
      <div>
        <p class="eyebrow">Simple setup</p>
        <h2>Demo here. Subscribe when ready. Use through the website or install from Chrome.</h2>
      </div>
      <p>Each demo is available to test first. When full access is released for an app, subscriptions unlock the full version for your account. Access is month-to-month. If a payment is not renewed, full access pauses after the paid period while your saved data remains attached to your account.</p>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Featured demos</p>
        <h2>Start with the apps that are already live.</h2>
        <a href="#/apps">View all apps</a>
      </div>
      <div class="card-grid">${featured}</div>
    </section>
  `);
}

function renderApps() {
  const categories = ["All", ...new Set(APPS.map((app) => app.category))];
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">App demos</p>
      <h1>All CJS App Labs demos</h1>
      <p class="lead">Open any available demo for free. Apps marked “Add demo URL” are already listed in the catalogue and only need their final link added in <code>apps.config.js</code>.</p>
    </section>

    <section class="section app-browser">
      <div class="filters" id="filters">
        ${categories.map((category) => `<button class="filter ${category === "All" ? "active" : ""}" data-category="${escapeAttr(category)}">${escapeHtml(category)}</button>`).join("")}
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
  const demoButton = app.demoUrl
    ? `<a class="primary-button" href="${escapeAttr(app.demoUrl)}" target="_blank" rel="noreferrer">Open free demo</a>`
    : `<button class="primary-button disabled" disabled>Demo link pending</button>`;
  const subscribeHref = app.checkoutUrl || `mailto:${CONTACT.general}?subject=${encodeURIComponent(`${app.name} subscription access`)}`;
  const screenshots = app.screenshots.map((src, index) => `
    <figure class="screenshot-card">
      <img src="${escapeAttr(src)}" alt="${escapeAttr(app.name)} screenshot ${index + 1}" />
      <figcaption>${index === 0 ? "App overview" : "Feature preview"}</figcaption>
    </figure>
  `).join("");

  page(`
    <section class="section app-detail-hero">
      <div>
        <a class="back-link" href="#/apps">← Back to apps</a>
        <p class="eyebrow">${escapeHtml(app.category)}</p>
        <h1>${escapeHtml(app.name)}</h1>
        <p class="lead">${escapeHtml(app.subtitle)}</p>
        <div class="tag-row">${app.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="hero-actions">${demoButton}<a class="secondary-button" href="${escapeAttr(subscribeHref)}">Subscribe / request full access</a></div>
      </div>
      <aside class="price-box">
        <span>Full access</span>
        <strong>${escapeHtml(app.monthlyPrice)}</strong>
        <p>No lock-in. Access runs for the paid monthly period and pauses when payment is not renewed.</p>
      </aside>
    </section>

    <section class="section detail-layout">
      <article class="content-panel">
        <h2>About ${escapeHtml(app.name)}</h2>
        <p>${escapeHtml(app.longDescription)}</p>
        <h3>How access works</h3>
        <p>The demo opens free from this site. Full access will unlock through your account once a subscription is active. You can use the app through the website, and where the app supports it, install it from Google Chrome as a web app.</p>
      </article>
      <aside class="content-panel small-panel">
        <h3>Demo status</h3>
        <p>${escapeHtml(app.status)}</p>
        <h3>Support</h3>
        <p>Email <a href="mailto:${escapeAttr(CONTACT.general)}">${escapeHtml(CONTACT.general)}</a> for app unlocks, trial access or general questions.</p>
      </aside>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Preview</p>
        <h2>Screenshots</h2>
        <span>Replace these files in <code>assets/screenshots</code> when you have final screenshots.</span>
      </div>
      <div class="screenshot-grid">${screenshots}</div>
    </section>
  `);
}

function renderPricing() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">Subscriptions</p>
      <h1>No lock-in monthly access.</h1>
      <p class="lead">Try demos first. Subscribe only when you want the full version. Access continues for each paid 30-day period. If the next payment is not made, the app stops opening in full mode but your saved data remains connected to your account.</p>
    </section>
    <section class="section pricing-grid">
      ${PLANS.map((plan) => `
        <article class="plan-card">
          <h2>${escapeHtml(plan.name)}</h2>
          <strong>${escapeHtml(plan.price)}</strong>
          <p>${escapeHtml(plan.note)}</p>
          <ul>${plan.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
          <a class="primary-button" href="${escapeAttr(plan.href)}">${escapeHtml(plan.cta)}</a>
        </article>
      `).join("")}
    </section>
    <section class="section content-panel">
      <h2>What “cancel anytime” means</h2>
      <p>There is no minimum term. When you cancel, access remains available until the end of the current paid month. After that, full app access pauses. Your saved information is not deleted just because access pauses, so the app can resume when the subscription becomes active again.</p>
    </section>
  `);
}

function renderDownloadHelp() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">How to download</p>
      <h1>Use apps in the browser or install them from Chrome.</h1>
      <p class="lead">Most CJS apps are web apps. That means you can open them from the website, and many can be installed to your phone or computer from Google Chrome without going through an app store.</p>
    </section>
    <section class="section timeline">
      ${step("1", "Try the demo", "Open the free demo from the Apps page. No payment is needed to test the public demo version.")}
      ${step("2", "Subscribe to full access", "When subscriptions are connected, choose the app or bundle you want. Your account is unlocked after purchase.")}
      ${step("3", "Open the app again", "After purchase, return to the app using the same account. The app checks your subscription and opens the full version while your paid period is active.")}
      ${step("4", "Install from Chrome", "On Android or desktop Chrome, open the app, tap the Chrome menu and choose Install app or Add to Home screen when available.")}
    </section>
    <section class="section content-panel">
      <h2>Important note</h2>
      <p>APK downloads are only needed for apps that are specifically released that way. For most users, the safer and easier option is to use the website version or install the web app from Chrome.</p>
    </section>
  `);
}

function renderSecurity() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">Security & privacy</p>
      <h1>Clear access rules. User data separated by account.</h1>
      <p class="lead">CJS App Labs is being set up so demos stay public, while full versions use account-based access and subscription checks.</p>
    </section>
    <section class="section detail-layout">
      <article class="content-panel">
        <h2>How customer access should work</h2>
        <p>Each customer needs their own login. Each app should save data under that user’s account ID. The app should check whether that user has an active subscription before opening full features. This is the proper way to stop one customer seeing another customer’s data.</p>
        <h2>Payments</h2>
        <p>Payment pages should be handled by a trusted payment provider such as Stripe. CJS App Labs should not collect or store card numbers directly in the app code.</p>
        <h2>Data after cancellation</h2>
        <p>If a subscription stops, full access pauses after the paid period. Saved data remains attached to the user account so access can resume if the user subscribes again.</p>
      </article>
      <aside class="content-panel small-panel">
        <h3>Contact</h3>
        <p>General support and app unlocks: <a href="mailto:${escapeAttr(CONTACT.general)}">${escapeHtml(CONTACT.general)}</a></p>
        <p>Business/admin: <a href="mailto:${escapeAttr(CONTACT.business)}">${escapeHtml(CONTACT.business)}</a></p>
        <p>Owner: <a href="mailto:${escapeAttr(CONTACT.owner)}">${escapeHtml(CONTACT.owner)}</a></p>
      </aside>
    </section>
  `);
}

function renderAbout() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">About CJ</p>
      <h1>Personal-built apps, shared when they become useful.</h1>
      <p class="lead">I started making these apps for my own work, family routines, learning, budgeting, coaching and creative projects. Some of them became useful enough that I wanted to share them with other people.</p>
    </section>
    <section class="section content-panel wide-copy">
      <h2>Why CJS App Labs exists</h2>
      <p>CJS App Labs is the public home for those projects. It is where people can try demo versions before paying for anything. The goal is to keep the apps practical, honest and easy to test first.</p>
      <p>Some apps are for business and trade work. Some are for families and kids. Some are creative, wellbeing or game projects. They are not all trying to be giant corporate software products. They are built around real problems, real routines and ideas that kept becoming useful.</p>
      <p>As the full versions are released, subscription access will be added so people can use the apps properly with their own saved data and account-based access.</p>
    </section>
  `);
}

function renderNotFound() {
  page(`
    <section class="section page-hero compact">
      <p class="eyebrow">Not found</p>
      <h1>That page is not here.</h1>
      <p class="lead">Use the app menu to get back to the demos.</p>
      <a class="primary-button" href="#/apps">Back to apps</a>
    </section>
  `);
}

function appCard(app) {
  const demoButton = app.demoUrl
    ? `<a href="${escapeAttr(app.demoUrl)}" class="mini-button" target="_blank" rel="noreferrer">Open demo</a>`
    : `<span class="mini-button muted">Demo pending</span>`;
  return `
    <article class="app-card">
      <div class="app-icon">${escapeHtml(app.iconText)}</div>
      <p class="app-category">${escapeHtml(app.category)}</p>
      <h3>${escapeHtml(app.name)}</h3>
      <p>${escapeHtml(app.shortDescription)}</p>
      <div class="tag-row small-tags">${app.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="card-actions">
        <a href="#/apps/${escapeAttr(app.id)}" class="text-link">Details</a>
        ${demoButton}
      </div>
    </article>
  `;
}

function step(number, title, text) {
  return `<article class="step"><span>${number}</span><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></div></article>`;
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

menuButton?.addEventListener("click", () => nav?.classList.toggle("open"));
window.addEventListener("hashchange", route);
route();
