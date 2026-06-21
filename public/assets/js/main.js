/* ================================================================
   GalaxyMale common scripts
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  ensureBrandIcon();
  disableImageAssistOverlays();
  normalizeSiteChrome();
  setupMobileMenu();
  markActiveNavigation();
  setupContactForm();
  syncHomeHeroFromData();
  syncHomeCategoryCards();
  renderHomeArticleSections();
  renderHomeColumnPreview();
  renderCategoryPageArticles();
  renderColumnPageCards();
  syncPostCardsFromData();
  setupReadingProgress();
});

function disableImageAssistOverlays() {
  document.querySelectorAll("img").forEach((image) => {
    image.setAttribute("draggable", "false");
    image.setAttribute("data-visualsearch", "false");
    image.setAttribute("data-no-visual-search", "true");
    image.setAttribute("data-no-image-preview", "true");
  });
}

function ensureBrandIcon() {
  const iconHref = "/favicon.svg?v=gm-icon-v1";
  let icon = document.querySelector('link[rel="icon"]');
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }
  icon.type = "image/svg+xml";
  icon.href = iconHref;

  let shortcut = document.querySelector('link[rel="shortcut icon"]');
  if (!shortcut) {
    shortcut = document.createElement("link");
    shortcut.rel = "shortcut icon";
    document.head.appendChild(shortcut);
  }
  shortcut.href = iconHref;

  if (!document.querySelector('link[rel="manifest"]')) {
    const manifest = document.createElement("link");
    manifest.rel = "manifest";
    manifest.href = "/site.webmanifest?v=gm-icon-v1";
    document.head.appendChild(manifest);
  }
}

function normalizeSiteChrome() {
  const cfg = window.SITE_CONFIG || {};
  const categories = window.CATEGORIES || [];
  const path = window.location.pathname;
  const nav = document.querySelector(".site-nav");

  if (nav && categories.length) {
    nav.innerHTML = `
      <a href="/" ${path === "/" || path === "/index.html" ? 'class="active"' : ""}>홈</a>
      ${categories.map((category) => `<a href="/categories/${category.slug}/" ${path.startsWith(`/categories/${category.slug}`) ? 'class="active"' : ""}>${category.name}</a>`).join("")}
    `;
  }

  const footer = document.querySelector(".site-footer");
  if (footer && !document.body.classList.contains("admin-wrap")) {
    const owner = cfg.owner || {};
    footer.innerHTML = `
      <div class="container">
        <div class="footer-news-brand">
          <a href="/" class="footer-news-logo"><span>G</span>${cfg.name || "GalaxyMale"}</a>
          <div class="footer-social" aria-label="토픽트리 소셜 링크">
            <a href="https://www.facebook.com/topictree365" target="_blank" rel="noopener noreferrer" aria-label="토픽트리 페이스북">f</a>
            <a href="https://x.com/topictree24" target="_blank" rel="noopener noreferrer" aria-label="토픽트리 X">X</a>
            <a href="https://www.instagram.com/topictree24/" target="_blank" rel="noopener noreferrer" aria-label="토픽트리 인스타그램">◎</a>
            <a href="https://www.youtube.com/@topictree" target="_blank" rel="noopener noreferrer" aria-label="토픽트리 유튜브">▶</a>
          </div>
        </div>
        <div class="footer-news-links">
          <a href="/about/">매체소개</a>
          <a href="/contact/">문의 및 기사제보</a>
          <a href="/privacy/">개인정보처리방침</a>
          <a href="/terms/">이용약관</a>
          <a href="/policy/">저작권보호정책</a>
          <a href="/youth/">청소년보호정책</a>
          <a href="/email-rejection/">이메일무단수집거부</a>
          <a href="/disclaimer/">면책고지</a>
        </div>
        <div class="footer-news-meta">
          <span>주소 : ${owner.address || "서울특별시 강남구 테헤란로 131"}</span>
          <span>대표전화 : ${owner.phone || "0507-2834-7925"}</span>
          <span>제호 : ${cfg.name || "GalaxyMale"}</span>
          <span>등록번호 : 경기 X00000</span>
          <span>등록일 : 2026-01-01</span>
          <span>발행일 : 2026-01-07</span>
          <span>발행·편집인 : ${owner.name || "송창학"}</span>
          <span>청소년보호책임자 : ${owner.name || "송창학"}</span>
        </div>
        <div class="footer-news-contact">문의 : <a href="mailto:admin@galaxymale.com">admin@galaxymale.com</a></div>
        <div class="footer-news-copy">Copyright © 2026 ${cfg.name || "GalaxyMale"}. All rights reserved.</div>
      </div>`;
  }
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (!toggle.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove("open");
    }
  });
}

function markActiveNavigation() {
  const path = window.location.pathname;
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href) return;
    link.classList.remove("active");
    if (href !== "/" && path.startsWith(href)) link.classList.add("active");
    if (href === "/" && (path === "/" || path === "/index.html")) link.classList.add("active");
  });
}

function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const button = contactForm.querySelector('[type="submit"]');
    if (!button) return;
    const original = button.textContent;
    button.textContent = "접수 안내가 표시되었습니다";
    button.disabled = true;
    setTimeout(function () {
      button.textContent = original;
      button.disabled = false;
      contactForm.reset();
    }, 2500);
  });
}

function syncHomeHeroFromData() {
  const posts = window.POSTS || [];
  const featured = posts.find((post) => post.featured) || posts[0];
  if (!featured) return;

  setHeroImage(".hero-card-thumb", featured);
  setText(".hero-card-cat", featured.categoryName);
  setText(".hero-card-title", featured.title);
  setText(".hero-card-meta", `${featured.author || "편집부"} · ${formatCardDate(featured.date)}`);

  document.querySelectorAll(".hero-mini-card a").forEach(function (link) {
    const post = findPostByLink(link, posts);
    if (!post) return;
    setTextIn(link, ".hero-mini-cat", post.categoryName);
    setTextIn(link, ".hero-mini-title", post.title);
  });
}

function renderHomeArticleSections() {
  const posts = window.POSTS || [];
  const path = window.location.pathname;
  if (!posts.length || (path !== "/" && path !== "/index.html")) return;

  const recommended = posts.filter((post) => post.recommended);
  const featuredPosts = (recommended.length ? recommended : posts).slice(0, 5);
  const latestPosts = posts
    .slice()
    .sort((a, b) => String(b.updated || b.date).localeCompare(String(a.updated || a.date)))
    .slice(0, 6);

  const featuredGrid = document.querySelector(".featured-grid");
  if (featuredGrid && featuredPosts.length) {
    featuredGrid.innerHTML = `
      <div class="featured-main">${renderArticleCard(featuredPosts[0], true)}</div>
      <div class="featured-side">
        ${featuredPosts.slice(1, 5).map((post, index) => renderFeaturedSide(post, index + 1)).join("")}
      </div>`;
  }

  const latestTitle = Array.from(document.querySelectorAll(".section-title")).find((title) => title.textContent.includes("최근"));
  const latestGrid = latestTitle?.closest("section")?.querySelector(".cards-grid-3");
  if (latestGrid) {
    latestGrid.innerHTML = latestPosts.map((post) => renderArticleCard(post, false)).join("");
  }
}

function syncHomeCategoryCards() {
  const categoryImages = {
    ai: "/assets/images/articles/ai-news.webp",
    smartphone: "/assets/images/articles/mobile-news.webp",
    pc: "/assets/images/articles/pc-news.webp",
    internet: "/assets/images/articles/security-news.webp",
    gadget: "/assets/images/articles/gadget-news.webp"
  };
  const categories = window.CATEGORIES || [];
  const posts = window.POSTS || [];
  const cards = document.querySelectorAll(".cat-card");
  if (!cards.length || !categories.length) return;

  cards.forEach((card) => {
    const slug = (card.getAttribute("href") || "").split("/").filter(Boolean).pop();
    const category = categories.find((item) => item.slug === slug);
    if (!category) return;
    const count = posts.filter((post) => post.category === slug).length || category.count || 0;
    const icon = card.querySelector(".cat-icon");
    const name = card.querySelector(".cat-name");
    const countNode = card.querySelector(".cat-count");

    if (icon) {
      icon.classList.add("cat-image");
      icon.innerHTML = `<img src="${categoryImages[slug]}" alt="${category.name} 대표 이미지" loading="lazy">`;
    }
    if (name) name.textContent = category.name;
    if (countNode) countNode.textContent = `${count}개 기사`;
  });
}

function syncPostCardsFromData() {
  const posts = window.POSTS || [];
  if (!posts.length) return;

  document.querySelectorAll('a[href^="/posts/"]').forEach(function (link) {
    const post = findPostByLink(link, posts);
    if (!post) return;
    const card = link.closest(".article-card, .featured-side-card, .hero-mini-card") || link;
    updatePostCard(card, link, post);
  });
}

function renderArticleCard(post, large) {
  return `
    <div class="article-card">
      <a href="/posts/${post.slug}/">
        <div class="card-thumb card-thumb-${post.category} news-thumb-image" ${large ? 'style="height:240px;"' : ""}>
          <img src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy">
        </div>
      </a>
      <div class="card-body">
        <a href="/categories/${post.category}/" class="card-cat">${post.categoryName}</a>
        <h3 class="card-title"><a href="/posts/${post.slug}/">${post.title}</a></h3>
        <p class="card-excerpt">${post.excerpt || post.subtitle || ""}</p>
        <div class="card-meta">
          <span class="card-author-img">${(post.author || "편").slice(0, 1)}</span>
          <span>${post.author || "편집부"}</span>
          <span class="post-meta-sep">·</span>
          <span>${formatCardDate(post.date)}</span>
        </div>
      </div>
    </div>`;
}

function renderCategoryPageArticles() {
  const path = window.location.pathname;
  const match = path.match(/^\/categories\/([^/]+)\/?$/);
  if (!match || match[1] === "categories") return;

  const categorySlug = match[1];
  const posts = (window.POSTS || []).filter((post) => post.category === categorySlug);
  const main = document.querySelector("main.container");
  const grid = main?.querySelector("div[style*='grid-template-columns']");
  if (!grid || !posts.length) return;

  grid.classList.add("cards-grid-3");
  grid.removeAttribute("style");
  grid.innerHTML = posts
    .sort((a, b) => String(b.updated || b.date).localeCompare(String(a.updated || a.date)))
    .map((post) => renderArticleCard(post, false))
    .join("");
}

function renderColumnPageCards() {
  const path = window.location.pathname;
  if (path !== "/columns/" && path !== "/columns/index.html") return;

  const columns = window.COLUMNS || [];
  const main = document.querySelector("main.container");
  if (!main || !columns.length) return;

  main.innerHTML = `
    <section class="column-list-section">
      <h2>칼럼 필진</h2>
      <div class="column-author-grid">
        ${columns.map((column) => `
          <article class="column-author-card">
            <img src="${column.image}" alt="${column.imageAlt || column.title}" loading="lazy">
            <div>
              <span>COLUMN</span>
              <h3>${column.author}</h3>
              <p>${column.excerpt}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="column-list-section">
      <h2>전체 칼럼</h2>
      <div class="column-news-grid">
        ${columns.map((column) => `
          <article class="column-news-card">
            <a href="/columns/${column.slug}/">
              <img src="${column.image}" alt="${column.imageAlt || column.title}" loading="lazy">
            </a>
            <div class="column-news-body">
              <span>COLUMN</span>
              <h3><a href="/columns/${column.slug}/">${column.title}</a></h3>
              <p>${column.subtitle || column.excerpt}</p>
              <div class="card-meta">
                <span class="card-author-img">G</span>
                <span>${column.author}</span>
                <span class="post-meta-sep">·</span>
                <span>${formatCardDate(column.date)}</span>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>`;
}

function renderHomeColumnPreview() {
  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") return;
  const columns = window.COLUMNS || [];
  const cards = document.querySelectorAll(".column-card");
  if (!cards.length || !columns.length) return;

  cards.forEach((card, index) => {
    const column = columns[index];
    if (!column) return;
    const badge = card.querySelector(".column-badge");
    const thumbLink = card.querySelector(".column-thumb");
    const thumbImage = card.querySelector(".column-thumb img");
    const title = card.querySelector(".column-title a");
    const excerpt = card.querySelector(".column-excerpt");
    const icon = card.querySelector(".column-author-img");
    const author = card.querySelector(".column-author-name a");
    const date = card.querySelector(".column-author-date");
    if (badge) badge.textContent = "COLUMN";
    if (thumbLink) thumbLink.href = `/columns/${column.slug}/`;
    if (thumbImage) {
      thumbImage.src = column.image;
      thumbImage.alt = column.imageAlt || column.title;
    }
    if (title) {
      title.textContent = column.title;
      title.href = `/columns/${column.slug}/`;
    }
    if (excerpt) excerpt.textContent = column.subtitle || column.excerpt || "";
    if (icon) icon.textContent = "G";
    if (author) {
      author.textContent = column.author;
      author.href = "/author/";
    }
    if (date) date.textContent = formatCardDate(column.date);
  });
}

function renderFeaturedSide(post, number) {
  return `
    <a href="/posts/${post.slug}/" class="featured-side-card">
      <div class="featured-side-num">${String(number).padStart(2, "0")}</div>
      <div class="featured-side-body">
        <div class="featured-side-cat">${post.categoryName}</div>
        <div class="featured-side-title">${post.title}</div>
        <div class="featured-side-date">${formatCardDate(post.date)}</div>
      </div>
    </a>`;
}

function findPostByLink(link, posts) {
  const slug = (link.getAttribute("href") || "").split("/").filter(Boolean).pop();
  return posts.find((item) => item.slug === slug);
}

function updatePostCard(card, link, post) {
  const title = findTitleNode(card, link);
  const excerpt = card.querySelector(".card-excerpt, .post-excerpt, p");
  const category = card.querySelector(".card-cat, .post-cat, .featured-side-cat, .hero-mini-cat");
  const thumb = card.querySelector(".card-thumb, .post-thumb, .hero-card-thumb");
  const sideTitle = card.querySelector(".featured-side-title");
  const sideDate = card.querySelector(".featured-side-date");

  if (title) title.textContent = post.title;
  if (sideTitle) sideTitle.textContent = post.title;
  if (excerpt) excerpt.textContent = post.excerpt || post.subtitle || "";
  if (category) category.textContent = post.categoryName || "";
  if (thumb) applyThumbImage(thumb, post);
  if (sideDate) sideDate.textContent = formatCardDate(post.date);

  updateCardMeta(card, post);
}

function findTitleNode(card, link) {
  return (
    card.querySelector(".card-title a") ||
    card.querySelector(".post-title a") ||
    card.querySelector(".card-title") ||
    card.querySelector(".post-title") ||
    card.querySelector("h2 a") ||
    card.querySelector("h3 a") ||
    card.querySelector("h2") ||
    card.querySelector("h3") ||
    (link.textContent.trim() ? link : null)
  );
}

function updateCardMeta(card, post) {
  const meta = card.querySelector(".card-meta");
  if (!meta) return;

  const authorIcon = meta.querySelector(".card-author-img");
  if (authorIcon) authorIcon.textContent = "G";

  const textSpans = Array.from(meta.querySelectorAll("span")).filter(function (span) {
    return !span.classList.contains("card-author-img") && !span.classList.contains("post-meta-sep");
  });

  if (textSpans[0]) textSpans[0].textContent = post.author || "편집부";
  if (textSpans[textSpans.length - 1]) textSpans[textSpans.length - 1].textContent = formatCardDate(post.date);
}

function setHeroImage(selector, post) {
  const node = document.querySelector(selector);
  if (node) applyThumbImage(node, post);
}

function applyThumbImage(node, post) {
  if (!post.image) {
    node.textContent = post.thumb || "";
    return;
  }
  node.classList.add("news-thumb-image");
  node.innerHTML = `<img src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy">`;
}

function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node && text) node.textContent = text;
}

function setTextIn(root, selector, text) {
  const node = root.querySelector(selector);
  if (node && text) node.textContent = text;
}

function formatCardDate(value) {
  return String(value || "").replaceAll("-", ".");
}

function setupReadingProgress() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", function () {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(scrolled, 100) + "%";
  });
}
