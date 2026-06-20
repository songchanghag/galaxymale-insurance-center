const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const posts = ctx.window.POSTS || [];
const columns = ctx.window.COLUMNS || [];
const failures = [];

for (const post of posts) {
  const file = `public/posts/${post.slug}/index.html`;
  const html = fs.readFileSync(file, "utf8");
  const required = [post.title, post.author, post.date, post.image, "입력", "수정", "댓글 남기기"];
  for (const value of required) {
    if (!html.includes(value)) failures.push(`${file} missing ${value}`);
  }
}

const columnAuthorExpectations = [
  ["public/columns/ai-digital-literacy/index.html", "송창학"],
  ["public/columns/smartphone-decade-reflection/index.html", "이서현"],
  ["public/columns/tech-purchase-beyond-specs/index.html", "박민재"]
];

for (const [file, author] of columnAuthorExpectations) {
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes(author)) failures.push(`${file} missing fixed author ${author}`);
  for (const wrong of ["김지훈", "박소연", "이민준"]) {
    if (html.includes(wrong)) failures.push(`${file} still contains old author ${wrong}`);
  }
}

const selectedFiles = [
  "public/about/index.html",
  "public/columns/index.html",
  ...columnAuthorExpectations.map(([file]) => file),
  ...posts.map((post) => `public/posts/${post.slug}/index.html`)
];

const mojibakeNeedles = ["�", "?ъ", "?뚭", "?댁", "?몄", "媛", "移", "臾", "硫", "짤"];
const forbidden = ["GalaxyMale Tech", "사이트 관리번호", "미등록", "독자가 남겨둘 질문"];

for (const file of selectedFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const needle of [...mojibakeNeedles, ...forbidden]) {
    if (html.includes(needle)) failures.push(`${file} contains ${needle}`);
  }
}

const postImages = posts.map((post) => post.image);
if (new Set(postImages).size !== posts.length) failures.push("post images are not unique");

const missingImages = [...postImages, ...columns.map((column) => column.image)].filter((asset) => {
  return !fs.existsSync(path.join("public", asset));
});
if (missingImages.length) failures.push(`missing images: ${missingImages.join(", ")}`);

const repeatedPhrases = [
  "이어지는지 보는 편이 좋다",
  "확인 절차와도 연결된다",
  "과정을 함께 봐야 한다",
  "생활 기준으로 다룬다",
  "출발점으로 보는 것이 알맞다"
];
for (const post of posts) {
  for (const phrase of repeatedPhrases) {
    if (post.content.includes(phrase)) failures.push(`${post.slug} repeated phrase: ${phrase}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  posts: posts.length,
  staticPostPages: posts.length,
  uniquePostImages: new Set(postImages).size,
  columns: columns.map((column) => ({ slug: column.slug, author: column.author })),
  status: "ok"
}, null, 2));
