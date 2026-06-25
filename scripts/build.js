const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "public");
const skip = new Set(["public", "scripts", "tools", ".git", "node_modules", "copy-my-screenshots.bat", "SCREENSHOTS_IMPORT.md"]);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) copy(path.join(src, entry), path.join(dest, entry));
    return;
  }
  fs.copyFileSync(src, dest);
}

for (const entry of fs.readdirSync(root)) {
  if (skip.has(entry)) continue;
  copy(path.join(root, entry), path.join(out, entry));
}
console.log("Built static site to public/");
