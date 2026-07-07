const fs = require("fs");
const vm = require("vm");

const required = ["index.html", "styles.css", "app.js", "apps.config.js", "vercel.json", "assets/screenshots/inout-1.svg"];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

const sandbox = { window: {} };
vm.createContext(sandbox);
try {
  vm.runInContext(fs.readFileSync("apps.config.js", "utf8"), sandbox, { filename: "apps.config.js" });
} catch (error) {
  console.error("apps.config.js has invalid JavaScript:");
  console.error(error.message);
  process.exit(1);
}

const apps = sandbox.window.CJS_APPS;
if (!Array.isArray(apps) || apps.length < 10) {
  console.error("apps.config.js does not contain a valid CJS_APPS list.");
  process.exit(1);
}

const ids = new Set();
for (const app of apps) {
  if (!app.id || ids.has(app.id)) {
    console.error(`Invalid or duplicate app id: ${app.id}`);
    process.exit(1);
  }
  ids.add(app.id);

  if (!Array.isArray(app.screenshots) || !app.screenshots.length) {
    console.error(`Missing screenshots array for ${app.name || app.id}`);
    process.exit(1);
  }
}

console.log(`Validation passed for ${apps.length} apps`);
