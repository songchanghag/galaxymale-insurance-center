/* ================================================================
   GalaxyMale Tech — 공통 JS
   ================================================================ */

/* ── 모바일 메뉴 토글 ── */
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  /* ── FAQ 아코디언 ── */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── 현재 페이지 네비 활성화 ── */
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && path.includes(href) && href !== '/') {
      a.classList.add('active');
    } else if (href === '/' && (path === '/' || path === '/index.html')) {
      a.classList.add('active');
    }
  });

  /* ── 문의 폼 제출 처리 ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '전송되었습니다 ✓';
      btn.disabled = true;
      btn.style.background = '#1e8e3e';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ── 부드러운 스크롤 (목차) ── */
  document.querySelectorAll('.toc-list a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 스크롤 진행 바 (글 상세) ── */
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = Math.min(scrolled, 100) + '%';
    });
  }
});
