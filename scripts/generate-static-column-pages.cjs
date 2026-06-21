const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const columns = ctx.window.COLUMNS || [];

const T = {
  home: "&#54856;",
  column: "&#52860;&#47100;",
  admin: "&#44288;&#47532;&#51088;",
  menu: "&#47700;&#45684; &#50676;&#44592;",
  input: "&#51077;&#47141;",
  update: "&#49688;&#51221;",
  columnist: "&#52860;&#47100;&#45768;&#49828;&#53944;",
  image: "&#52860;&#47100; &#51060;&#48120;&#51648;",
  editorIntro:
    "GalaxyMale &#54596;&#51652;&#51004;&#47196;, &#44592;&#49696; &#51221;&#48372;&#47484; &#49373;&#54876; &#49549; &#49440;&#53469; &#44592;&#51456;&#44284; &#50672;&#44208;&#54644; &#49444;&#47749;&#54633;&#45768;&#45796;. &#50868;&#50689;&#51088; <a href=\"/author/\">&#49569;&#52285;&#54617;</a>&#51032; &#54200;&#51665; &#50896;&#52825;&#50640; &#46384;&#46972; &#44284;&#51109;&#46108; &#54364;&#54788;&#44284; &#54869;&#51064;&#46104;&#51648; &#50506;&#51008; &#52572;&#49888;&#49457;&#51012; &#51228;&#54620;&#54633;&#45768;&#45796;.",
};

function esc(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fmt(value) {
  return String(value || "").replaceAll("-", ".");
}

function renderTags(column) {
  const fallbackTags = {
    "ai-digital-literacy": ["AI&#47532;&#53552;&#47084;&#49884;", "&#51221;&#48372;&#44160;&#51613;", "&#46356;&#51648;&#53560;&#49845;&#44288;"],
    "smartphone-decade-reflection": ["&#49828;&#47560;&#53944;&#54256;", "&#46356;&#51648;&#53560;&#49373;&#54876;", "&#50508;&#47548;&#44288;&#47532;"],
    "tech-purchase-beyond-specs": ["&#44396;&#47588;&#44592;&#51456;", "&#51228;&#54408;&#49440;&#53469;", "&#49324;&#50857;&#44221;&#54744;"],
  };
  const tags = fallbackTags[column.slug] || (column.tags || []).map(esc);
  return tags
    .map((tag) => `<a href="/columns/">${esc(tag)}</a>`)
    .map((tag) => tag.replaceAll("&amp;#", "&#"))
    .join("");
}

function page(column) {
  const content = column.content;
  const tags = renderTags(column);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(column.title)} | GalaxyMale ${T.column}</title>
<meta name="description" content="${esc(column.subtitle || column.excerpt || column.title)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://galaxymale.com/columns/${column.slug}/">
<meta property="og:title" content="${esc(column.title)} | GalaxyMale ${T.column}">
<meta property="og:description" content="${esc(column.subtitle || column.excerpt || column.title)}">
<meta property="og:url" content="https://galaxymale.com/columns/${column.slug}/">
<meta property="og:type" content="article">
<meta property="og:site_name" content="GalaxyMale">
<meta property="article:author" content="${esc(column.author)}">
<meta property="article:published_time" content="${column.date}">
<meta property="article:modified_time" content="${column.updated || column.date}">
<meta property="og:image" content="https://galaxymale.com${column.image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(column.title)} | GalaxyMale">
<meta name="twitter:description" content="${esc(column.subtitle || column.excerpt || column.title)}">
<meta name="twitter:image" content="https://galaxymale.com${column.image}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: column.title,
    description: column.subtitle || column.excerpt || column.title,
    image: `https://galaxymale.com${column.image}`,
    datePublished: column.date,
    dateModified: column.updated || column.date,
    author: { "@type": "Person", name: column.author },
    publisher: { "@type": "Organization", name: "GalaxyMale", url: "https://galaxymale.com" },
    mainEntityOfPage: `https://galaxymale.com/columns/${column.slug}/`,
    inLanguage: "ko-KR",
  })}</script>
</head>
<body>
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="site-logo"><div class="logo-icon">G</div>GalaxyMale</a>
      <nav class="site-nav" id="site-nav">
        <a href="/">${T.home}</a>
        <a href="/categories/ai/">AI&#51064;&#44277;&#51648;&#45733;</a>
        <a href="/categories/smartphone/">&#47784;&#48148;&#51068;</a>
        <a href="/categories/pc/">&#52980;&#54504;&#53552;</a>
        <a href="/categories/internet/">&#51064;&#53552;&#45367;/&#48372;&#50504;</a>
        <a href="/categories/gadget/">&#44032;&#51267;/IT&#44592;&#44592;</a>
      </nav>
      <div class="header-actions"><a href="/admin/" class="btn-outline">${T.admin}</a></div>
      <button class="menu-toggle" aria-label="${T.menu}"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<main class="container" style="max-width:820px;padding:42px 16px;">
  <nav class="news-breadcrumb" aria-label="breadcrumb"><a href="/">${T.home}</a><span>/</span><a href="/columns/">${T.column}</a></nav>
  <article class="news-article">
    <header class="news-article-header">
      <div class="news-kicker">COLUMN | <time datetime="${column.date}">${fmt(column.date)}</time></div>
      <h1 class="news-title">${esc(column.title)}</h1>
      <p class="news-subtitle">${esc(column.subtitle || column.excerpt || "")}</p>
      <div class="news-byline"><span>${esc(column.author)} ${T.columnist}</span><span>${T.input} ${fmt(column.date)}</span><span>${T.update} ${fmt(column.updated || column.date)}</span></div>
    </header>
    <div class="news-share-tools" aria-label="칼럼 공유">
      <button type="button" data-share="naver" aria-label="네이버 공유">N</button>
      <button type="button" data-share="band" aria-label="밴드 공유">BAND</button>
      <button type="button" data-share="facebook" aria-label="페이스북 공유">f</button>
      <button type="button" data-share="x">X</button>
      <button type="button" data-share="copy" aria-label="URL 복사">&#128279;</button>
    </div>
    <figure class="news-cover"><img src="${column.image}" alt="${esc(column.imageAlt || column.title)}" loading="eager"><figcaption>${esc(column.author)} ${T.image} / GalaxyMale</figcaption></figure>
    <div class="news-content">${content}</div>
    <section class="news-tag-section" aria-label="태그"><span>태그:</span>${tags}</section>
    <section class="news-comment-section" aria-label="댓글 남기기">
      <h2>댓글 남기기</h2>
      <p>이 댓글 기능은 정적 사이트용 데모입니다. 입력 내용은 현재 브라우저 localStorage에만 저장됩니다.</p>
      <div class="news-comment-form"><textarea id="comment-input" rows="3" placeholder="의견을 입력하세요."></textarea><button type="button" id="comment-submit">등록</button></div>
      <div id="comment-list" class="news-comment-list"></div>
    </section>
    <section class="news-editor-box"><div class="news-editor-avatar">G</div><div><h2>${esc(column.author)} ${T.columnist}</h2><p>${T.editorIntro}</p></div></section>
  </article>
</main>
<footer class="site-footer"></footer>
<script src="/assets/js/data.js"></script>
<script src="/assets/js/main.js"></script>
<script src="/assets/js/post-template.js"></script>
</body>
</html>`;
}

for (const column of columns) {
  const dir = path.join("public", "columns", column.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(column), "utf8");
}

console.log(`generated ${columns.length} static column pages`);
