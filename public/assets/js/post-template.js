/* ================================================================
   GalaxyMale article renderer
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const posts = window.POSTS || [];
  const post = posts.find((item) => item.slug === slug);
  const main = document.getElementById("post-main");
  if (!main) return;

  if (!post) {
    main.innerHTML = `
      <div class="container py-48 text-center">
        <h2>기사를 찾을 수 없습니다.</h2>
        <a href="/" class="btn-primary" style="display:inline-flex;margin-top:20px;">홈으로 이동</a>
      </div>`;
    return;
  }

  document.title = `${post.title} | GalaxyMale`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", post.subtitle || post.excerpt || post.title);
  injectArticleJsonLd(post);

  const relatedPosts = (post.related || [])
    .map((relatedSlug) => posts.find((item) => item.slug === relatedSlug))
    .filter(Boolean)
    .slice(0, 4);

  const latestPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice()
    .sort((a, b) => String(b.updated || b.date).localeCompare(String(a.updated || a.date)))
    .slice(0, 6);

  const popularPosts = posts
    .filter((item) => item.recommended && item.slug !== post.slug)
    .slice(0, 5);

  const sidebarPosts = buildSidebarRecommendations(post, posts, relatedPosts, latestPosts, popularPosts);

  const categoryItems = window.CATEGORIES || [];
  const url = window.location.href;

  main.innerHTML = `
    <div class="container news-article-wrap">
      <div class="news-layout">
        <article class="news-article">
          <nav class="news-breadcrumb" aria-label="breadcrumb">
            <a href="/">홈</a>
            <span>/</span>
            <a href="/categories/${post.category}/">${post.categoryName}</a>
          </nav>

          <header class="news-article-header">
            <div class="news-kicker">
              <a href="/categories/${post.category}/">${post.categoryName}</a>
              <span>|</span>
              <time datetime="${post.date}">${formatDate(post.date)}</time>
            </div>
            <h1 class="news-title">${post.title}</h1>
            ${post.subtitle ? `<p class="news-subtitle">${post.subtitle}</p>` : ""}
            <div class="news-byline">
              <span>${post.author || "GalaxyMale 편집부"} ${post.authorRole || "기자"}</span>
              <span>입력 ${formatDate(post.date)}</span>
              <span>수정 ${formatDate(post.updated || post.date)}</span>
            </div>
          </header>

          <div class="news-share-tools" aria-label="기사 공유">
            <button type="button" data-share="naver" aria-label="네이버 공유">N</button>
            <button type="button" data-share="band" aria-label="밴드 공유">BAND</button>
            <button type="button" data-share="facebook" aria-label="페이스북 공유">f</button>
            <button type="button" data-share="x">X</button>
            <button type="button" data-share="copy" aria-label="URL 복사">🔗</button>
          </div>

          ${post.image ? `
            <figure class="news-cover">
              <img src="${post.image}" alt="${post.imageAlt || post.title}" loading="eager">
              <figcaption>${post.categoryName} 기사 이미지 / GalaxyMale</figcaption>
            </figure>
          ` : ""}

          <div class="news-content">
            ${post.content || ""}
          </div>

          <section class="news-tag-section" aria-label="태그">
            <span>태그:</span>
            ${(post.tags || []).map((tag) => `<a href="/categories/${post.category}/">${tag}</a>`).join("")}
          </section>

          <section class="news-comment-section" aria-label="댓글 남기기">
            <h2>댓글 남기기</h2>
            <p>이 댓글 기능은 정적 사이트용 데모입니다. 입력 내용은 현재 브라우저 localStorage에만 저장됩니다.</p>
            <div class="news-comment-form">
              <textarea id="comment-input" rows="3" placeholder="의견을 입력하세요."></textarea>
              <button type="button" id="comment-submit">등록</button>
            </div>
            <div id="comment-list" class="news-comment-list"></div>
          </section>

          <footer class="news-article-footer">
            <p>이 기사는 GalaxyMale 편집 기준에 따라 작성되었으며, 제품·서비스 정보는 이용 환경과 시점에 따라 달라질 수 있습니다.</p>
            <p>운영 과정에서 내용은 순차적으로 보완될 수 있으며, 문의는 <a href="/contact/">문의하기</a> 페이지의 이메일 경로를 이용해 주세요.</p>
          </footer>

          <section class="news-editor-box" aria-label="기사 작성자와 편집 기준">
            <div class="news-editor-avatar">${(post.author || "G").slice(0, 1)}</div>
            <div>
              <h2>${post.author || "GalaxyMale 편집부"} ${post.authorRole || "기자"}</h2>
              <p>GalaxyMale는 기술 정보를 생활 속 선택 기준으로 풀어 쓰는 것을 목표로 합니다. 운영자 <a href="/author/">송창학</a>의 편집 원칙에 따라 과장된 표현과 확인되지 않은 최신성을 피합니다.</p>
            </div>
          </section>

          ${
            relatedPosts.length
              ? `<section class="news-related" aria-labelledby="related-title">
                  <h2 id="related-title">함께 보면 좋은 콘텐츠</h2>
                  <div class="news-related-grid">
                    ${relatedPosts.map(renderRelatedCard).join("")}
                  </div>
                </section>`
              : ""
          }
        </article>

        <aside class="news-sidebar" aria-label="사이드바">
          <section class="news-side-box">
            <h2>추천 콘텐츠</h2>
            ${sidebarPosts.map(renderSidePost).join("")}
          </section>

          <section class="news-side-box">
            <h2>카테고리</h2>
            <div class="news-category-list">
              ${categoryItems.map((category) => `<a href="/categories/${category.slug}/">${category.name}</a>`).join("")}
            </div>
          </section>
        </aside>
      </div>
    </div>`;

  setupShareButtons(post, url);
  setupLocalComments(post.slug);
});

function formatDate(value) {
  if (!value) return "";
  const normalized = String(value).replaceAll(".", "-");
  const parts = normalized.split("-").map((part) => part.padStart(2, "0"));
  if (parts.length >= 3) return `${parts[0]}.${parts[1]}.${parts[2]}`;
  return String(value);
}

function renderRelatedCard(post) {
  return `
    <a class="news-related-card" href="/posts/${post.slug}/">
      ${post.image ? `<img src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy">` : ""}
      <span>${post.categoryName}</span>
      <strong>${post.title}</strong>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
    </a>`;
}

function buildSidebarRecommendations(currentPost, posts, relatedPosts, latestPosts, popularPosts) {
  const sameCategory = posts
    .filter((item) => item.slug !== currentPost.slug && item.category === currentPost.category)
    .sort((a, b) => String(b.updated || b.date).localeCompare(String(a.updated || a.date)));

  const pool = [
    ...relatedPosts,
    ...sameCategory,
    ...popularPosts,
    ...latestPosts
  ];

  const seen = new Set([currentPost.slug]);
  return pool.filter((item) => {
    if (!item || seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  }).slice(0, 6);
}

function renderSidePost(post) {
  return `
    <a class="news-side-post" href="/posts/${post.slug}/">
      ${post.image ? `<img src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy">` : ""}
      <span>${post.categoryName} | ${formatDate(post.date)}</span>
      <strong>${post.title}</strong>
    </a>`;
}

function setupShareButtons(post, url) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(post.title);
  document.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async function () {
      const type = button.dataset.share;
      if (type === "copy") {
        try {
          await navigator.clipboard.writeText(url);
          button.textContent = "✓";
          setTimeout(() => (button.textContent = "🔗"), 1600);
        } catch {
          window.prompt("URL을 복사하세요.", url);
        }
        return;
      }
      const links = {
        naver: `https://share.naver.com/web/shareView?url=${encodedUrl}&title=${encodedTitle}`,
        band: `https://band.us/plugin/share?body=${encodedTitle}&route=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
      };
      window.open(links[type], "_blank", "noopener,noreferrer,width=720,height=520");
    });
  });
}

function setupLocalComments(slug) {
  const key = `gm_comments_${slug}`;
  const input = document.getElementById("comment-input");
  const submit = document.getElementById("comment-submit");
  const list = document.getElementById("comment-list");
  if (!input || !submit || !list) return;

  function getComments() {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      return [];
    }
  }

  function render() {
    const comments = getComments();
    list.innerHTML = comments.length
      ? comments.map((item) => `<div class="news-comment-item"><strong>방문자</strong><time>${item.date}</time><p>${escapeHtml(item.text)}</p></div>`).join("")
      : `<p class="news-comment-empty">아직 등록된 댓글이 없습니다.</p>`;
  }

  submit.addEventListener("click", function () {
    const text = input.value.trim();
    if (!text) return;
    const comments = getComments();
    comments.unshift({ text, date: new Date().toISOString().slice(0, 10) });
    localStorage.setItem(key, JSON.stringify(comments.slice(0, 20)));
    input.value = "";
    render();
  });

  render();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function injectArticleJsonLd(post) {
  const cfg = window.SITE_CONFIG || {};
  const old = document.getElementById("article-jsonld");
  if (old) old.remove();

  const script = document.createElement("script");
  script.id = "article-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "headline": post.title,
        "description": post.subtitle || post.excerpt || post.title,
        "image": post.image ? `${cfg.url || "https://galaxymale.com"}${post.image}` : undefined,
        "datePublished": post.date,
        "dateModified": post.updated || post.date,
        "author": { "@type": "Person", "name": post.author || cfg.owner?.name || "GalaxyMale 편집부" },
        "publisher": { "@type": "Organization", "name": cfg.name || "GalaxyMale", "url": cfg.url || "https://galaxymale.com" },
        "mainEntityOfPage": `${cfg.url || "https://galaxymale.com"}/posts/${post.slug}/`,
        "inLanguage": "ko-KR"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": cfg.url || "https://galaxymale.com" },
          { "@type": "ListItem", "position": 2, "name": post.categoryName, "item": `${cfg.url || "https://galaxymale.com"}/categories/${post.category}/` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `${cfg.url || "https://galaxymale.com"}/posts/${post.slug}/` }
        ]
      }
    ]
  });
  document.head.appendChild(script);
}
