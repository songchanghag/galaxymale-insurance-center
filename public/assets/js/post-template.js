/* GalaxyMale article enhancement scripts. Static article HTML is generated at build time. */

document.addEventListener("DOMContentLoaded", function () {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const posts = window.POSTS || [];
  const columns = window.COLUMNS || [];
  const article = posts.find((item) => item.slug === slug) || columns.find((item) => item.slug === slug);

  if (!article) return;

  setupShareButtons(article, window.location.href);
  setupLocalComments(article.slug);
  injectArticleJsonLd(article);
});

function setupShareButtons(article, url) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(article.title);

  document.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async function () {
      const type = button.dataset.share;

      if (type === "copy") {
        try {
          await navigator.clipboard.writeText(url);
          const original = button.textContent;
          button.textContent = "복사";
          setTimeout(() => {
            button.textContent = original || "🔗";
          }, 1400);
        } catch {
          window.prompt("URL을 복사하세요.", url);
        }
        return;
      }

      const links = {
        naver: `https://share.naver.com/web/shareView?url=${encodedUrl}&title=${encodedTitle}`,
        band: `https://band.us/plugin/share?body=${encodedTitle}&route=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      };

      if (links[type]) {
        window.open(links[type], "_blank", "noopener,noreferrer,width=720,height=520");
      }
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
    if (!comments.length) {
      list.innerHTML = '<p class="news-comment-empty">아직 등록된 댓글이 없습니다.</p>';
      return;
    }

    list.innerHTML = comments
      .map(
        (comment) => `
          <article class="news-comment-item">
            <strong>방문자</strong>
            <time datetime="${comment.date}">${comment.date}</time>
            <p>${escapeHtml(comment.text)}</p>
          </article>
        `,
      )
      .join("");
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

function injectArticleJsonLd(article) {
  if (document.querySelector('script[data-jsonld="article"]')) return;
  const isColumn = window.location.pathname.includes("/columns/");
  const schema = {
    "@context": "https://schema.org",
    "@type": isColumn ? "Article" : "NewsArticle",
    headline: article.title,
    description: article.subtitle || article.excerpt || article.title,
    image: article.image ? `https://galaxymale.com${article.image}` : undefined,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: { "@type": "Person", name: article.author || "GalaxyMale" },
    publisher: { "@type": "Organization", name: "GalaxyMale", url: "https://galaxymale.com" },
    mainEntityOfPage: window.location.href,
    inLanguage: "ko-KR",
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.jsonld = "article";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
