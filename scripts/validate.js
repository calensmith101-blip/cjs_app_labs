const fs = require("fs");
const required = ["index.html", "styles.css", "app.js", "apps.config.js", "vercel.json", "assets/screenshots/inout-1.svg"];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}
console.log("Validation passed");
