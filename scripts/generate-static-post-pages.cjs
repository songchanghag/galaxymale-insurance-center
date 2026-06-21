const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const posts = ctx.window.POSTS || [];

const T = {
  home: "&#54856;",
  admin: "&#44288;&#47532;&#51088;",
  menu: "&#47700;&#45684; &#50676;&#44592;",
  reporter: "&#44592;&#51088;",
  input: "&#51077;&#47141;",
  update: "&#49688;&#51221;",
  shareArticle: "&#44592;&#49324; &#44277;&#50976;",
  shareNaver: "&#45348;&#51060;&#48260; &#44277;&#50976;",
  shareBand: "&#48180;&#46300; &#44277;&#50976;",
  shareFacebook: "&#54168;&#51060;&#49828;&#48513; &#44277;&#50976;",
  shareCopy: "URL &#48373;&#49324;",
  articleImage: "&#44592;&#49324; &#51060;&#48120;&#51648;",
  tags: "&#53468;&#44536;",
  comments: "&#45843;&#44544; &#45224;&#44592;&#44592;",
  commentNotice:
    "&#51060; &#45843;&#44544; &#44592;&#45733;&#51008; &#51221;&#51201; &#49324;&#51060;&#53944;&#50857; &#45936;&#47784;&#51077;&#45768;&#45796;. &#51077;&#47141; &#45236;&#50857;&#51008; &#54788;&#51116; &#48652;&#46972;&#50864;&#51200; localStorage&#50640;&#47564; &#51200;&#51109;&#46121;&#45768;&#45796;.",
  commentPlaceholder: "&#51032;&#44204;&#51012; &#51077;&#47141;&#54616;&#49464;&#50836;.",
  submit: "&#46321;&#47197;",
  footerNote:
    "&#51060; &#44592;&#49324;&#45716; GalaxyMale &#54200;&#51665; &#44592;&#51456;&#50640; &#46384;&#46972; &#51089;&#49457;&#46104;&#50632;&#51004;&#47728;, &#51228;&#54408;&#183;&#49436;&#48708;&#49828; &#51221;&#48372;&#45716; &#51060;&#50857; &#54872;&#44221;&#44284; &#49884;&#51216;&#50640; &#46384;&#46972; &#45804;&#46972;&#51656; &#49688; &#51080;&#49845;&#45768;&#45796;.",
  related: "&#54632;&#44760; &#48372;&#47732; &#51339;&#51008; &#53080;&#53584;&#52768;",
  editorIntro:
    "GalaxyMale&#51008; &#44592;&#49696; &#51221;&#48372;&#47484; &#49373;&#54876; &#49549; &#49440;&#53469; &#44592;&#51456;&#51004;&#47196; &#45796;&#47336;&#45716; &#44163;&#51012; &#47785;&#54364;&#47196; &#54633;&#45768;&#45796;. &#50868;&#50689;&#51088; <a href=\"/author/\">&#49569;&#52285;&#54617;</a>&#51032; &#54200;&#51665; &#50896;&#52825;&#50640; &#46384;&#46972; &#44284;&#51109;&#46108; &#54364;&#54788;&#44284; &#54869;&#51064;&#46104;&#51648; &#50506;&#51008; &#52572;&#49888;&#49457;&#51012; &#51228;&#54620;&#54633;&#45768;&#45796;.",
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

function strip(value) {
  return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function renderRelated(post) {
  return (post.related || [])
    .map((slug) => posts.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 3)
    .map(
      (item) => `
      <a class="news-related-card" href="/posts/${item.slug}/">
        <img src="${item.image}" alt="${esc(item.imageAlt || item.title)}" loading="lazy">
        <span>${esc(item.categoryName)}</span>
        <strong>${esc(item.title)}</strong>
        <time datetime="${item.date}">${fmt(item.date)}</time>
      </a>
    `,
    )
    .join("");
}

function page(post) {
  const related = renderRelated(post);
  const tags = (post.tags || [])
    .map((tag) => `<a href="/categories/${post.category}/">${esc(tag)}</a>`)
    .join("");
  const content = post.content;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(post.title)} | GalaxyMale</title>
<meta name="description" content="${esc(post.subtitle || post.excerpt || post.title)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://galaxymale.com/posts/${post.slug}/">
<meta property="og:title" content="${esc(post.title)} | GalaxyMale">
<meta property="og:description" content="${esc(post.subtitle || post.excerpt || post.title)}">
<meta property="og:url" content="https://galaxymale.com/posts/${post.slug}/">
<meta property="og:type" content="article">
<meta property="og:site_name" content="GalaxyMale">
<meta property="article:author" content="${esc(post.author)}">
<meta property="article:published_time" content="${post.date}">
<meta property="article:modified_time" content="${post.updated || post.date}">
<meta property="og:image" content="https://galaxymale.com${post.image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(post.title)} | GalaxyMale">
<meta name="twitter:description" content="${esc(post.subtitle || post.excerpt || post.title)}">
<meta name="twitter:image" content="https://galaxymale.com${post.image}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.subtitle || post.excerpt || post.title,
    image: `https://galaxymale.com${post.image}`,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "GalaxyMale", url: "https://galaxymale.com" },
    mainEntityOfPage: `https://galaxymale.com/posts/${post.slug}/`,
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
<main class="container news-article-wrap">
  <div class="news-layout">
    <article class="news-article">
      <nav class="news-breadcrumb" aria-label="breadcrumb">
        <a href="/">${T.home}</a><span>/</span><a href="/categories/${post.category}/">${esc(post.categoryName)}</a>
      </nav>
      <header class="news-article-header">
        <div class="news-kicker"><a href="/categories/${post.category}/">${esc(post.categoryName)}</a><span>|</span><time datetime="${post.date}">${fmt(post.date)}</time></div>
        <h1 class="news-title">${esc(post.title)}</h1>
        <p class="news-subtitle">${esc(post.subtitle || post.excerpt || "")}</p>
        <div class="news-byline"><span>${esc(post.author)} ${esc(post.authorRole || T.reporter)}</span><span>${T.input} ${fmt(post.date)}</span><span>${T.update} ${fmt(post.updated || post.date)}</span></div>
      </header>
      <div class="news-share-tools" aria-label="${T.shareArticle}">
        <button type="button" data-share="naver" aria-label="${T.shareNaver}">N</button>
        <button type="button" data-share="band" aria-label="${T.shareBand}">BAND</button>
        <button type="button" data-share="facebook" aria-label="${T.shareFacebook}">f</button>
        <button type="button" data-share="x">X</button>
        <button type="button" data-share="copy" aria-label="${T.shareCopy}">&#128279;</button>
      </div>
      <figure class="news-cover"><img src="${post.image}" alt="${esc(post.imageAlt || post.title)}" loading="eager"><figcaption>${esc(post.categoryName)} ${T.articleImage} / GalaxyMale</figcaption></figure>
      <div class="news-content">${content}</div>
      <section class="news-tag-section"><span>${T.tags}:</span>${tags}</section>
      <section class="news-comment-section"><h2>${T.comments}</h2><p>${T.commentNotice}</p><div class="news-comment-form"><textarea id="comment-input" rows="3" placeholder="${T.commentPlaceholder}"></textarea><button type="button" id="comment-submit">${T.submit}</button></div><div id="comment-list" class="news-comment-list"></div></section>
      <footer class="news-article-footer"><p>${T.footerNote}</p></footer>
      <section class="news-editor-box"><div class="news-editor-avatar">G</div><div><h2>${esc(post.author)} ${esc(post.authorRole || T.reporter)}</h2><p>${T.editorIntro}</p></div></section>
      ${related ? `<section class="news-related"><h2>${T.related}</h2><div class="news-related-grid">${related}</div></section>` : ""}
    </article>
  </div>
</main>
<footer class="site-footer"></footer>
<script src="/assets/js/data.js"></script>
<script src="/assets/js/main.js"></script>
<script src="/assets/js/post-template.js"></script>
</body>
</html>`;
}

for (const post of posts) {
  const dir = path.join("public", "posts", post.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(post), "utf8");
}

console.log(`generated ${posts.length} static post pages`);
