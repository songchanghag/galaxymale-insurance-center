const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const posts = ctx.window.POSTS || [];

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

function renderRelated(post) {
  return (post.related || [])
    .map((slug) => posts.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 3)
    .map((item) => `
      <a class="news-related-card" href="/posts/${item.slug}/">
        <img src="${item.image}" alt="${esc(item.imageAlt || item.title)}" loading="lazy">
        <span>${esc(item.categoryName)}</span>
        <strong>${esc(item.title)}</strong>
        <time datetime="${item.date}">${fmt(item.date)}</time>
      </a>
    `)
    .join("");
}

function page(post) {
  const related = renderRelated(post);
  const tags = (post.tags || [])
    .map((tag) => `<a href="/categories/${post.category}/">${esc(tag)}</a>`)
    .join("");

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
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20260107">
<link rel="shortcut icon" href="/favicon.svg?v=20260107">
<link rel="manifest" href="/site.webmanifest?v=20260107">
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
    inLanguage: "ko-KR"
  })}</script>
</head>
<body>
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="site-logo"><div class="logo-icon">G</div>GalaxyMale</a>
      <nav class="site-nav" id="site-nav">
        <a href="/">홈</a>
        <a href="/categories/ai/">AI인공지능</a>
        <a href="/categories/smartphone/">모바일</a>
        <a href="/categories/pc/">컴퓨터</a>
        <a href="/categories/internet/">인터넷/보안</a>
        <a href="/categories/gadget/">가젯/IT기기</a>
      </nav>
      <div class="header-actions"><a href="/admin/" class="btn-outline">관리자</a></div>
      <button class="menu-toggle" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<main class="container news-article-wrap">
  <div class="news-layout">
    <article class="news-article">
      <nav class="news-breadcrumb" aria-label="breadcrumb">
        <a href="/">홈</a><span>/</span><a href="/categories/${post.category}/">${esc(post.categoryName)}</a>
      </nav>
      <header class="news-article-header">
        <div class="news-kicker"><a href="/categories/${post.category}/">${esc(post.categoryName)}</a><span>|</span><time datetime="${post.date}">${fmt(post.date)}</time></div>
        <h1 class="news-title">${esc(post.title)}</h1>
        <p class="news-subtitle">${esc(post.subtitle || post.excerpt || "")}</p>
        <div class="news-byline"><span>${esc(post.author)} ${esc(post.authorRole || "기자")}</span><span>입력 ${fmt(post.date)}</span><span>수정 ${fmt(post.updated || post.date)}</span></div>
      </header>
      <div class="news-share-tools" aria-label="기사 공유">
        <button type="button" data-share="naver" aria-label="네이버 공유">N</button>
        <button type="button" data-share="band" aria-label="밴드 공유">BAND</button>
        <button type="button" data-share="facebook" aria-label="페이스북 공유">f</button>
        <button type="button" data-share="x">X</button>
        <button type="button" data-share="copy" aria-label="URL 복사">🔗</button>
      </div>
      <figure class="news-cover"><img src="${post.image}" alt="${esc(post.imageAlt || post.title)}" loading="eager"><figcaption>${esc(post.categoryName)} 기사 이미지 / GalaxyMale</figcaption></figure>
      <div class="news-content">${post.content}</div>
      <section class="news-tag-section"><span>태그:</span>${tags}</section>
      <section class="news-comment-section"><h2>댓글 남기기</h2><p>이 댓글 기능은 정적 사이트용 데모입니다. 입력 내용은 현재 브라우저 localStorage에만 저장됩니다.</p><div class="news-comment-form"><textarea id="comment-input" rows="3" placeholder="의견을 입력하세요."></textarea><button type="button" id="comment-submit">등록</button></div><div id="comment-list" class="news-comment-list"></div></section>
      <footer class="news-article-footer"><p>이 기사는 GalaxyMale 편집 기준에 따라 작성되었으며, 제품·서비스 정보는 이용 환경과 시점에 따라 달라질 수 있습니다.</p></footer>
      <section class="news-editor-box"><div class="news-editor-avatar">G</div><div><h2>${esc(post.author)} ${esc(post.authorRole || "기자")}</h2><p>GalaxyMale는 기술 정보를 생활 속 선택 기준으로 풀어 쓰는 것을 목표로 합니다. 운영자 <a href="/author/">송창학</a>의 편집 원칙에 따라 과장된 표현과 확인되지 않은 최신성을 피합니다.</p></div></section>
      ${related ? `<section class="news-related"><h2>함께 보면 좋은 콘텐츠</h2><div class="news-related-grid">${related}</div></section>` : ""}
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
