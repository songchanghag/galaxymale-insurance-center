const fs = require("fs");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const posts = ctx.window.POSTS || [];
const columns = ctx.window.COLUMNS || [];
const categories = ctx.window.CATEGORIES || [];
const urls = [];

function add(loc, changefreq, priority, lastmod) {
  urls.push({ loc, changefreq, priority, lastmod });
}

add("/", "daily", "1.0", "2026-06-20");
add("/categories/", "weekly", "0.9", "2026-06-20");
add("/columns/", "weekly", "0.9", "2026-06-20");

for (const slug of ["about", "author", "contact"]) {
  add(`/${slug}/`, "monthly", "0.7", "2026-01-07");
}

for (const slug of ["privacy", "terms", "policy", "youth", "email-rejection", "disclaimer"]) {
  add(`/${slug}/`, "yearly", "0.4", "2026-01-01");
}

add("/sitemap/", "weekly", "0.5", "2026-06-20");
add("/rss.xml", "daily", "0.4", "2026-06-20");

for (const category of categories) {
  add(`/categories/${category.slug}/`, "weekly", "0.8", "2026-06-20");
}

for (const column of columns) {
  add(`/columns/${column.slug}/`, "monthly", "0.8", column.updated || column.date);
}

for (const post of posts) {
  add(`/posts/${post.slug}/`, "monthly", "0.85", post.updated || post.date);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url><loc>https://galaxymale.com${url.loc}</loc><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority><lastmod>${url.lastmod}</lastmod></url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log(`generated sitemap with ${urls.length} urls`);
