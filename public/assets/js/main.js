/* ================================================================
   GalaxyMale Tech common scripts
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  markActiveNavigation();
  setupContactForm();
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

function syncPostCardsFromData() {
  const posts = window.POSTS || [];
  if (!posts.length) return;

  document.querySelectorAll('a[href^="/posts/"]').forEach(function (card) {
    const slug = card.getAttribute("href").split("/").filter(Boolean).pop();
    const post = posts.find((item) => item.slug === slug);
    if (!post) return;

    const title = card.querySelector("h2, h3, .card-title, .post-title, .hero-card-title, .hero-mini-title");
    const excerpt = card.querySelector("p, .card-excerpt, .post-excerpt");
    const category = card.querySelector(".hero-card-cat, .hero-mini-cat, .card-cat, .post-cat");
    const thumb = findLikelyThumb(card);
    const date = findLikelyDate(card);

    if (title) title.textContent = post.title;
    if (excerpt) excerpt.textContent = post.excerpt || post.subtitle || "";
    if (category) category.textContent = post.categoryName || "";
    if (thumb) thumb.textContent = post.thumb || "";
    if (date) date.textContent = formatCardDate(post.date);
  });
}

function findLikelyThumb(card) {
  const candidates = Array.from(card.querySelectorAll("div, span"));
  return candidates.find(function (node) {
    const style = node.getAttribute("style") || "";
    return style.includes("font-size:36px") || node.className.includes("thumb");
  });
}

function findLikelyDate(card) {
  const time = card.querySelector("time");
  if (time) return time;

  const candidates = Array.from(card.querySelectorAll("span, div"));
  return candidates.reverse().find(function (node) {
    return /^\d{4}\.\d{2}\.\d{2}$/.test(node.textContent.trim()) || /^\d{4}-\d{2}-\d{2}$/.test(node.textContent.trim());
  });
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
