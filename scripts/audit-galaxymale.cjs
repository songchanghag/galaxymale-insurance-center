const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const posts = ctx.window.POSTS || [];
const columns = ctx.window.COLUMNS || [];
const categories = ctx.window.CATEGORIES || [];
const failures = [];

function htmlFile(...parts) {
  return path.join("public", ...parts, "index.html");
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function textLength(html) {
  return String(html || "").replace(/<[^>]*>/g, "").replace(/\s/g, "").length;
}

function requireContains(file, values) {
  const html = read(file);
  for (const value of values) {
    if (!html.includes(value)) failures.push(`${file} missing ${value}`);
  }
}

function listFiles(dir, exts, output = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(file, exts, output);
    else if (exts.some((ext) => entry.name.endsWith(ext))) output.push(file);
  }
  return output;
}

const requiredPages = [
  "index.html",
  "about/index.html",
  "author/index.html",
  "contact/index.html",
  "categories/index.html",
  "columns/index.html",
  "admin/index.html",
  "privacy/index.html",
  "terms/index.html",
  "policy/index.html",
  "disclaimer/index.html",
  "youth/index.html",
  "email-rejection/index.html",
  "404.html",
  "robots.txt",
  "ads.txt",
  "rss.xml",
  "sitemap.xml",
];

for (const page of requiredPages) {
  const file = path.join("public", page);
  if (!fs.existsSync(file)) failures.push(`missing page: ${page}`);
}

if (posts.length < 15) failures.push(`expected at least 15 posts, got ${posts.length}`);
if (columns.length < 3) failures.push(`expected at least 3 columns, got ${columns.length}`);
if (categories.length !== 5) failures.push(`expected 5 categories, got ${categories.length}`);

for (const post of posts) {
  const file = htmlFile("posts", post.slug);
  const html = read(file);
  requireContains(file, [
    post.title,
    post.author,
    post.date,
    post.image,
    "news-share-tools",
    "news-comment-section",
    "news-tag-section",
    "twitter:card",
    "<img src=",
  ]);
  if (html.includes("article-extra-box")) failures.push(`${file} should not include blog-style extra boxes`);
  if (html.includes("article-toc")) failures.push(`${file} should not include article TOC`);
  if (textLength(post.content) < 1500) failures.push(`${post.slug} content below 1500 chars`);
}

const expectedColumnAuthors = {
  "ai-digital-literacy": "송창학",
  "smartphone-decade-reflection": "이서현",
  "tech-purchase-beyond-specs": "박민재",
};

for (const column of columns) {
  const file = htmlFile("columns", column.slug);
  const html = read(file);
  requireContains(file, [
    column.title,
    column.author,
    column.date,
    column.image,
    column.content.slice(0, 40),
    "twitter:card",
    "news-share-tools",
    "news-tag-section",
    "news-comment-section",
  ]);
  if (expectedColumnAuthors[column.slug] && column.author !== expectedColumnAuthors[column.slug]) {
    failures.push(`${column.slug} author expected ${expectedColumnAuthors[column.slug]}, got ${column.author}`);
  }
  if (html.includes("article-toc")) failures.push(`${file} should not include column TOC`);
  if (textLength(column.content) < 1500) failures.push(`${column.slug} column content is below 1500 chars`);
}

const postImages = posts.map((post) => post.image);
const allImages = [...postImages, ...columns.map((column) => column.image)];
if (new Set(postImages).size !== posts.length) failures.push("post images are not unique");
if (new Set(allImages).size !== allImages.length) failures.push("post/column images are not unique");
for (const asset of allImages) {
  if (!asset.endsWith(".webp")) failures.push(`${asset} is not webp`);
  if (!fs.existsSync(path.join("public", asset))) failures.push(`missing image: ${asset}`);
}

const publicTextFiles = listFiles("public", [".html", ".js", ".css", ".json", ".svg", ".xml", ".txt", ".webmanifest"]);
const forbidden = [
  "?" + "?" + "?",
  "\u5360",
  "\uFFFD",
  "\uF98D",
  "\u5A9B",
  "\u81FE",
  "\uBFC2" + "\uB311",
  "\uC4D6",
  "\uBF63",
  "\uAFBE",
  "\u613F" + "\u0080",
  "\uC9E4",
  "song" + "chang" + "hag" + "790" + "@" + "g" + "mail.com",
  "g" + "mail.com",
  "2026" + "0621",
  "2026" + "0107",
  "Home" + "-Shopping",
  "home" + "shop" + "view",
  "공영홈쇼핑",
  "Made with " + "Replit",
  "GalaxyMale " + "Tech",
  "Lorem",
  "lorem",
  "pagead2." + "googlesyndication.com/pagead/js/adsbygoogle.js",
  "이어지는지 보는 편이 좋다",
  "확인 절차와도 연결된다",
  "과정을 함께 봐야 한다",
  "생활 기준으로 다룬다",
  "출발점으로 보는 것이 알맞다",
  "GalaxyMale는 확인되지 않은 최신 변화나 과장된 비교를 덧붙이기보다",
];

for (const file of publicTextFiles) {
  const html = read(file);
  for (const needle of forbidden) {
    if (html.includes(needle)) failures.push(`${file} contains forbidden text: ${needle}`);
  }
}

const adsTxt = read("public/ads.txt").trim();
if (adsTxt !== "google.com, pub-3819299014015793, DIRECT, f08c47fec0942fa0") {
  failures.push("ads.txt content is not the expected AdSense publisher line");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "ok",
      posts: posts.length,
      columns: columns.map((column) => ({ slug: column.slug, author: column.author, charsNoSpace: textLength(column.content) })),
      categories: categories.length,
      uniqueImages: new Set(allImages).size,
      checkedFiles: publicTextFiles.length,
    },
    null,
    2,
  ),
);
