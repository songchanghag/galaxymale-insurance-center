import { existsSync, statSync } from "node:fs";
import { join } from "node:path";

const required = [
  "public/index.html",
  "public/404.html",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/assets/css/style.css",
  "public/assets/js/main.js"
];

for (const file of required) {
  if (!existsSync(file) || !statSync(file).isFile()) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log("Static site check passed.");
