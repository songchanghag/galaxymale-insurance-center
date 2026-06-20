/* ================================================================
   GalaxyMale Tech common scripts
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  markActiveNavigation();
  setupContactForm();
  syncHomeHeroFromData();
  renderHomeArticleSections();
  syncPostCardsFromData();
  setupReadingProgress();
});

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

  setText(".hero-card-thumb", featured.thumb);
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

function renderHomeArticleSections() {
  const posts = window.POSTS || [];
  const path = window.location.pathname;
  if (!posts.length || !document.body || (path !== "/" && path !== "/index.html")) return;

  const recommended = posts.filter((post) => post.recommended);
  const featuredPosts = (recommended.length ? recommended : posts).slice(0, 5);
  const latestPosts = posts
    .slice()
    .sort((a, b) => String(b.updated || b.date).localeCompare(String(a.updated || a.date)))
    .slice(0, 6);

  const featuredGrid = document.querySelector(".featured-grid");
  if (featuredGrid && featuredPosts.length) {
    const main = featuredPosts[0];
    featuredGrid.innerHTML = `
      <div class="featured-main">
        ${renderArticleCard(main, true)}
      </div>
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

function renderArticleCard(post, large) {
  return `
    <div class="article-card">
      <a href="/posts/${post.slug}/">
        <div class="card-thumb card-thumb-${post.category}" ${large ? 'style="height:240px;font-size:3.5rem;"' : ""}>${post.thumb || ""}</div>
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
  if (thumb) thumb.textContent = post.thumb || "";
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
  if (authorIcon) authorIcon.textContent = (post.author || "편").slice(0, 1);

  const textSpans = Array.from(meta.querySelectorAll("span")).filter(function (span) {
    return !span.classList.contains("card-author-img") && !span.classList.contains("post-meta-sep");
  });

  if (textSpans[0]) textSpans[0].textContent = post.author || "편집부";
  if (textSpans[textSpans.length - 1]) textSpans[textSpans.length - 1].textContent = formatCardDate(post.date);
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
