/* ================================================================
   GalaxyMale Tech article renderer
   Renders post pages in a news-article format.
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const slug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
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

  document.title = `${post.title} | GalaxyMale Tech`;
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
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 6);

  const popularPosts = posts
    .filter((item) => item.recommended && item.slug !== post.slug)
    .slice(0, 5);

  const categoryItems = [
    ["ai", "AI·인공지능"],
    ["smartphone", "스마트폰·모바일"],
    ["pc", "PC·컴퓨터"],
    ["internet", "인터넷·보안"],
    ["gadget", "가젯·IT기기"]
  ];

  const body = post.content || "";

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

          <div class="news-share-row" aria-label="기사 공유 및 이동">
            <a href="/categories/${post.category}/">카테고리 더보기</a>
            <a href="/sitemap/">전체 기사 보기</a>
          </div>

          <div class="news-content">
            ${body}
          </div>

          <footer class="news-article-footer">
            <p>이 기사는 GalaxyMale Tech 편집 기준에 따라 작성되었으며, 제품·서비스 정보는 이용 환경과 시점에 따라 달라질 수 있습니다.</p>
            <p>운영 과정에서 내용은 순차적으로 보완될 수 있으며, 문의는 <a href="/contact/">문의하기</a> 페이지의 이메일 경로를 이용해 주세요.</p>
            <div class="news-tags">
              ${(post.tags || []).map((tag) => `<a href="/categories/${post.category}/">#${tag}</a>`).join("")}
            </div>
          </footer>

          <section class="news-editor-box" aria-label="기사 작성자와 편집 기준">
            <div class="news-editor-avatar">${(post.author || "G").slice(0, 1)}</div>
            <div>
              <h2>${post.author || "GalaxyMale 편집부"} ${post.authorRole || "기자"}</h2>
              <p>GalaxyMale Tech는 기술 정보를 생활 속 선택 기준으로 풀어 쓰는 것을 목표로 합니다. 운영자 <a href="/author/">송창학</a>의 편집 원칙에 따라 과장된 표현과 확인되지 않은 최신성을 피합니다.</p>
            </div>
          </section>

          ${
            relatedPosts.length
              ? `<section class="news-related" aria-labelledby="related-title">
                  <h2 id="related-title">관련 기사</h2>
                  <div class="news-related-grid">
                    ${relatedPosts.map(renderRelatedCard).join("")}
                  </div>
                </section>`
              : ""
          }
        </article>

        <aside class="news-sidebar" aria-label="사이드바">
          <section class="news-side-box">
            <h2>최신 기사</h2>
            ${latestPosts.map(renderSidePost).join("")}
          </section>

          <section class="news-side-box">
            <h2>추천 기사</h2>
            ${(popularPosts.length ? popularPosts : latestPosts).slice(0, 5).map(renderSidePost).join("")}
          </section>

          <section class="news-side-box">
            <h2>카테고리</h2>
            <div class="news-category-list">
              ${categoryItems.map(([key, label]) => `<a href="/categories/${key}/">${label}</a>`).join("")}
            </div>
          </section>
        </aside>
      </div>
    </div>`;
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
      <span>${post.categoryName}</span>
      <strong>${post.title}</strong>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
    </a>`;
}

function renderSidePost(post) {
  return `
    <a class="news-side-post" href="/posts/${post.slug}/">
      <span>${post.categoryName} | ${formatDate(post.date)}</span>
      <strong>${post.title}</strong>
    </a>`;
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
        "datePublished": post.date,
        "dateModified": post.updated || post.date,
        "author": {
          "@type": "Person",
          "name": post.author || cfg.owner?.name || "GalaxyMale 편집부"
        },
        "publisher": {
          "@type": "Organization",
          "name": cfg.name || "GalaxyMale Tech",
          "url": cfg.url || "https://galaxymale.com"
        },
        "mainEntityOfPage": `${cfg.url || "https://galaxymale.com"}/posts/${post.slug}/`,
        "inLanguage": "ko-KR"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": cfg.url || "https://galaxymale.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": post.categoryName,
            "item": `${cfg.url || "https://galaxymale.com"}/categories/${post.category}/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${cfg.url || "https://galaxymale.com"}/posts/${post.slug}/`
          }
        ]
      }
    ]
  });
  document.head.appendChild(script);
}
