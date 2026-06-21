const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const { SITE_CONFIG, CATEGORIES, POSTS, COLUMNS } = ctx.window;

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

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf8");
}

function head({ title, description, url, image = "/assets/icons/galaxymale-icon.svg", type = "website" }) {
  return `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="GalaxyMale">
<meta property="og:image" content="https://galaxymale.com${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="https://galaxymale.com${image}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
<link rel="stylesheet" href="/assets/css/style.css">
</head>`;
}

function header(active = "") {
  const nav = [
    ["/", "홈", "home"],
    ["/categories/ai/", "AI인공지능", "ai"],
    ["/categories/smartphone/", "모바일", "smartphone"],
    ["/categories/pc/", "컴퓨터", "pc"],
    ["/categories/internet/", "인터넷/보안", "internet"],
    ["/categories/gadget/", "가젯/IT기기", "gadget"],
  ];
  return `<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="site-logo"><div class="logo-icon">G</div>GalaxyMale</a>
      <nav class="site-nav" id="site-nav">${nav
        .map(([href, label, key]) => `<a href="${href}"${active === key ? ' class="active"' : ""}>${label}</a>`)
        .join("")}</nav>
      <div class="header-actions"><a href="/admin/" class="btn-outline">관리자</a></div>
      <button class="menu-toggle" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

function footerScripts() {
  return `<footer class="site-footer"></footer>
<script src="/assets/js/data.js"></script>
<script src="/assets/js/main.js"></script>`;
}

function card(post) {
  return `<article class="article-card">
  <a href="/posts/${post.slug}/"><img class="card-image" src="${post.image}" alt="${esc(post.imageAlt || post.title)}" loading="lazy"></a>
  <div class="card-body">
    <a class="card-cat" href="/categories/${post.category}/">${esc(post.categoryName)}</a>
    <h3 class="card-title"><a href="/posts/${post.slug}/">${esc(post.title)}</a></h3>
    <p class="card-excerpt">${esc(post.excerpt)}</p>
    <div class="card-meta"><span class="card-author-img">G</span><span>${esc(post.author)}</span><span class="post-meta-sep">·</span><time datetime="${post.date}">${fmt(post.date)}</time></div>
  </div>
</article>`;
}

function categoryTile(category) {
  const count = POSTS.filter((post) => post.category === category.slug).length;
  return `<a href="/categories/${category.slug}/" class="cat-card cat-card-${category.slug}">
  <div class="cat-icon">${category.icon || "G"}</div>
  <div class="cat-name">${esc(category.name)}</div>
  <div class="cat-count">${count}개 기사</div>
</a>`;
}

function homePage() {
  const latest = [...POSTS].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const featured = latest.slice(0, 4);
  return `<!DOCTYPE html>
<html lang="ko">
${head({
    title: "GalaxyMale | 생활형 테크 뉴스",
    description: "AI, 모바일, 컴퓨터, 인터넷 보안, IT 기기 분야의 생활형 테크 뉴스를 정리합니다.",
    url: "https://galaxymale.com/",
    image: latest[0].image,
  })}
<body>
${header("home")}
<main>
  <section class="hero-section">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-text">
          <span class="hero-label">생활형 테크 뉴스</span>
          <h1 class="hero-title">복잡한 기술 흐름을<br><span>실제 사용 기준</span>으로 읽습니다</h1>
          <p class="hero-desc">GalaxyMale은 AI, 모바일, PC, 보안, IT 기기를 과장 없이 해설하는 정보형 뉴스 사이트입니다.</p>
          <div class="hero-cta"><a href="/categories/" class="btn-primary">카테고리 보기</a><a href="/about/" class="btn-ghost">매체 소개</a></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-header-row"><div class="section-header"><div class="section-label">카테고리</div><h2 class="section-title">주제별 기사</h2></div><a class="see-all" href="/categories/">전체 보기 →</a></div>
      <div class="cat-cards">${CATEGORIES.map(categoryTile).join("")}</div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header-row"><div class="section-header"><div class="section-label">추천 기사</div><h2 class="section-title">편집장이 고른 기사</h2></div></div>
      <div class="featured-grid">
        <div class="featured-main">${card(featured[0])}</div>
        <div class="featured-side">${featured.slice(1).map((post, index) => `<a href="/posts/${post.slug}/" class="featured-side-card"><div class="featured-side-num">0${index + 1}</div><div class="featured-side-body"><div class="featured-side-cat">${esc(post.categoryName)}</div><div class="featured-side-title">${esc(post.title)}</div><div class="featured-side-date">${fmt(post.date)}</div></div></a>`).join("")}</div>
      </div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-header-row"><div class="section-header"><div class="section-label">최신 기사</div><h2 class="section-title">최근에 올라온 기사</h2></div></div>
      <div class="cards-grid cards-grid-3">${latest.slice(0, 6).map(card).join("")}</div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header-row"><div class="section-header"><div class="section-label">칼럼</div><h2 class="section-title">칼럼니스트들의 생각</h2><p class="section-desc">기술을 생활 기준으로 다시 읽는 필진 칼럼입니다.</p></div><a href="/columns/" class="see-all">전체 칼럼 보기 →</a></div>
      <div class="cards-grid cards-grid-3">${COLUMNS.map(columnCard).join("")}</div>
    </div>
  </section>
</main>
${footerScripts()}
</body>
</html>`;
}

function columnCard(column) {
  return `<article class="column-card">
  <a class="column-thumb" href="/columns/${column.slug}/"><img src="${column.image}" alt="${esc(column.imageAlt || column.title)}" loading="lazy"></a>
  <span class="column-badge">COLUMN</span>
  <h3 class="column-title"><a href="/columns/${column.slug}/">${esc(column.title)}</a></h3>
  <p class="column-excerpt">${esc(column.excerpt || column.subtitle)}</p>
  <div class="column-author">
    <div class="column-author-img">G</div>
    <div><div class="column-author-name">${esc(column.author)}</div><div class="column-author-date">${fmt(column.date)}</div></div>
  </div>
</article>`;
}

function categoriesIndex() {
  return `<!DOCTYPE html><html lang="ko">${head({
    title: "카테고리 | GalaxyMale",
    description: "GalaxyMale의 AI, 모바일, 컴퓨터, 인터넷 보안, 가젯 기기 카테고리를 한눈에 봅니다.",
    url: "https://galaxymale.com/categories/",
  })}<body>${header()}<main class="container" style="padding:48px 16px;"><div class="page-header"><span class="section-label">카테고리</span><h1>주제별 기사 모아보기</h1><p>생활 속 기술 선택에 필요한 기사를 분야별로 정리했습니다.</p></div><div class="cat-cards">${CATEGORIES.map(categoryTile).join("")}</div></main>${footerScripts()}</body></html>`;
}

function categoryPage(category) {
  const posts = POSTS.filter((post) => post.category === category.slug).sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return `<!DOCTYPE html><html lang="ko">${head({
    title: `${category.name} | GalaxyMale`,
    description: category.description || `${category.name} 분야의 생활형 테크 기사입니다.`,
    url: `https://galaxymale.com/categories/${category.slug}/`,
    image: posts[0]?.image,
  })}<body>${header(category.slug)}<main class="container" style="padding:48px 16px;"><nav class="news-breadcrumb"><a href="/">홈</a><span>/</span><a href="/categories/">카테고리</a></nav><div class="page-header"><span class="section-label">${esc(category.name)}</span><h1>${esc(category.name)} 기사</h1><p>${esc(category.description || "생활 속에서 바로 참고할 수 있는 기술 정보를 정리했습니다.")}</p></div><div class="cards-grid cards-grid-3">${posts.map(card).join("")}</div></main>${footerScripts()}</body></html>`;
}

function columnsIndex() {
  return `<!DOCTYPE html><html lang="ko">${head({
    title: "칼럼 | GalaxyMale",
    description: "GalaxyMale 필진이 기술과 생활의 변화를 해설하는 칼럼 모음입니다.",
    url: "https://galaxymale.com/columns/",
    image: COLUMNS[0].image,
  })}<body>${header()}<main class="container" style="padding:48px 16px;"><div class="page-header"><span class="section-label">칼럼</span><h1>칼럼니스트들의 생각</h1><p>데이터보다 관점, 정보보다 맥락을 담은 필진 칼럼입니다.</p></div><div class="cards-grid cards-grid-3">${COLUMNS.map(columnCard).join("")}</div></main>${footerScripts()}</body></html>`;
}

write("public/index.html", homePage());
write("public/categories/index.html", categoriesIndex());
for (const category of CATEGORIES) write(`public/categories/${category.slug}/index.html`, categoryPage(category));
write("public/columns/index.html", columnsIndex());

console.log("generated home, category, and column index pages");
