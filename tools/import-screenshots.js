const fs = require("fs");
const path = require("path");
const vm = require("vm");

const projectRoot = path.resolve(__dirname, "..");
const configPath = path.join(projectRoot, "apps.config.js");
const publicConfigPath = path.join(projectRoot, "public", "apps.config.js");
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

// These are the screenshot folders you listed.
// The script also tries common spelling fixes because a few folders are named "screenhots" / "screensots".
const screenshotSources = {
  "after-dark": [
    "D:\\apps\\after-dark-tales\\after-dark-tales-main\\screenshots"
  ],
  "coach-court": [
    "D:\\apps\\coachcourt\\vercel\\screenhots",
    "D:\\apps\\coachcourt\\vercel\\screenshots",
    "D:\\apps\\coachcourt\\vercel\\screenshot"
  ],
  "family-planner": [
    "D:\\apps\\FamilyApp\\screenshots",
    "D:\\apps\\FamilyApp\\screenshot"
  ],
  "sanctuary": [
    "D:\\apps\\sanctuary\\screenshots",
    "D:\\apps\\sanctuary\\screenshot"
  ],
  "inout": [
    "D:\\apps\\in out - public\\screensots",
    "D:\\apps\\in out - public\\screenshots",
    "D:\\apps\\in out - public\\screenshot"
  ],
  "gamertabs": [
    "D:\\apps\\GamerTabs\\screenshot",
    "D:\\apps\\GamerTabs\\screenshots"
  ],
  "grimoire": [
    "D:\\apps\\Grimoire\\screenshot",
    "D:\\apps\\Grimoire\\screenshots"
  ],
  "never-ending-story": [
    "D:\\apps\\never-ending-story\\never-ending-story-main\\screenshots",
    "D:\\apps\\never-ending-story\\never-ending-story-main\\screenshot"
  ],
  "mixmate": [
    "D:\\apps\\MixMate\\Vercel\\screenshot",
    "D:\\apps\\MixMate\\Vercel\\screenshots"
  ]
};

function findSource(candidates) {
  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isDirectory());
}

function listImages(folder) {
  return fs.readdirSync(folder)
    .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => path.join(folder, name));
}

function loadConfig() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(configPath, "utf8"), sandbox, { filename: "apps.config.js" });
  return {
    contact: sandbox.window.CJS_CONTACT || {},
    plans: sandbox.window.CJS_PLANS || [],
    apps: sandbox.window.CJS_APPS || []
  };
}

function saveConfig(config) {
  const header = `// CJS App Labs public demo/download site config.
// Edit demoUrl, checkoutUrl, monthlyPrice and screenshots here without touching the page code.
// Real screenshots can be imported from your D:\\apps folders by running: npm run import-screenshots

`;
  const content =
    header +
    `window.CJS_CONTACT = ${JSON.stringify(config.contact, null, 2)};\n\n` +
    `window.CJS_PLANS = ${JSON.stringify(config.plans, null, 2)};\n\n` +
    `window.CJS_APPS = ${JSON.stringify(config.apps, null, 2)};\n`;

  fs.writeFileSync(configPath, content, "utf8");
  if (fs.existsSync(path.dirname(publicConfigPath))) {
    fs.writeFileSync(publicConfigPath, content, "utf8");
  }
}

function copyToPublicIfBuilt(relativePaths) {
  const publicRoot = path.join(projectRoot, "public");
  if (!fs.existsSync(publicRoot)) return;

  for (const relativePath of relativePaths) {
    const source = path.join(projectRoot, relativePath);
    const target = path.join(publicRoot, relativePath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }
}

const config = loadConfig();
const appById = new Map(config.apps.map((app) => [app.id, app]));
const imported = [];
const skipped = [];

for (const [appId, candidates] of Object.entries(screenshotSources)) {
  const app = appById.get(appId);
  if (!app) {
    skipped.push(`${appId}: app ID not found in apps.config.js`);
    continue;
  }

  const sourceFolder = findSource(candidates);
  if (!sourceFolder) {
    skipped.push(`${app.name}: folder not found`);
    continue;
  }

  const images = listImages(sourceFolder);
  if (!images.length) {
    skipped.push(`${app.name}: folder found but no image files inside`);
    continue;
  }

  const destinationFolder = path.join(projectRoot, "assets", "screenshots", appId);
  fs.rmSync(destinationFolder, { recursive: true, force: true });
  fs.mkdirSync(destinationFolder, { recursive: true });

  const relativePaths = images.map((imagePath, index) => {
    const ext = path.extname(imagePath).toLowerCase() || ".png";
    const relativePath = path.posix.join("assets", "screenshots", appId, `screen-${index + 1}${ext}`);
    fs.copyFileSync(imagePath, path.join(projectRoot, relativePath));
    return relativePath;
  });

  app.screenshots = relativePaths;
  copyToPublicIfBuilt(relativePaths);
  imported.push(`${app.name}: ${relativePaths.length} screenshot(s) from ${sourceFolder}`);
}

saveConfig(config);

console.log("\nScreenshot import finished.\n");

if (imported.length) {
  console.log("Imported:");
  for (const line of imported) console.log(`- ${line}`);
}

if (skipped.length) {
  console.log("\nSkipped:");
  for (const line of skipped) console.log(`- ${line}`);
}

console.log("\nNext steps:");
console.log("1. Run: npm run build");
console.log("2. Push the site to GitHub");
console.log("3. Redeploy on Vercel if it does not auto deploy");
