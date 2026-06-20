/* ================================================================
   GalaxyMale — 공통 헤더/푸터 컴포넌트
   ================================================================ */

function renderHeader(activePage) {
  const cfg = window.SITE_CONFIG || {};
  return `
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="site-logo">
        <div class="logo-icon">G</div>
        ${cfg.name || 'GalaxyMale'}
      </a>
      <nav class="site-nav" id="site-nav">
        <a href="/" ${activePage==='home'?'class="active"':''}>홈</a>
        <a href="/categories/" ${activePage==='categories'?'class="active"':''}>카테고리</a>
        <a href="/columns/" ${activePage==='columns'?'class="active"':''}>칼럼</a>
        <a href="/about/" ${activePage==='about'?'class="active"':''}>소개</a>
        <a href="/contact/" ${activePage==='contact'?'class="active"':''}>문의</a>
      </nav>
      <div class="header-actions">
        <a href="/admin/" class="btn-outline">⚙ 관리자</a>
      </div>
      <button class="menu-toggle" aria-label="메뉴 열기">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

function renderFooter() {
  const cfg = window.SITE_CONFIG || {};
  const owner = cfg.owner || {};
  const year = new Date().getFullYear();
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">${cfg.name || 'GalaxyMale'}</div>
        <p class="footer-tagline">${cfg.tagline || '최신 테크 정보를 쉽고 정확하게'}<br>AI, 스마트폰, PC, 보안, IT 가젯 분야의 실용적인 정보를 제공합니다.</p>
        <div class="footer-email">문의: <a href="mailto:${owner.email || ''}">${owner.email || ''}</a></div>
      </div>
      <div class="footer-col">
        <h4>카테고리</h4>
        <ul>
          <li><a href="/categories/ai/">AI·인공지능</a></li>
          <li><a href="/categories/smartphone/">스마트폰·모바일</a></li>
          <li><a href="/categories/pc/">PC·컴퓨터</a></li>
          <li><a href="/categories/internet/">인터넷·보안</a></li>
          <li><a href="/categories/gadget/">가젯·IT기기</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>사이트</h4>
        <ul>
          <li><a href="/about/">사이트 소개</a></li>
          <li><a href="/author/">운영자 소개</a></li>
          <li><a href="/columns/">칼럼</a></li>
          <li><a href="/contact/">문의하기</a></li>
          <li><a href="/sitemap/">사이트맵</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>법적 고지</h4>
        <ul>
          <li><a href="/privacy/">개인정보처리방침</a></li>
          <li><a href="/terms/">이용약관</a></li>
          <li><a href="/disclaimer/">면책고지</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© ${year} ${cfg.name || 'GalaxyMale'} — 운영: <a href="/author/">${owner.name || '송창학'}</a> | ${owner.address || ''}</div>
      <div class="footer-bottom-links">
        <a href="/privacy/">개인정보처리방침</a>
        <a href="/terms/">이용약관</a>
        <a href="/contact/">문의</a>
      </div>
    </div>
  </div>
</footer>`;
}

function renderMeta(title, desc, url, type) {
  const cfg = window.SITE_CONFIG || {};
  const siteName = cfg.name || 'GalaxyMale';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  return `
  <title>${fullTitle}</title>
  <meta name="description" content="${desc || cfg.description || ''}">
  <link rel="canonical" href="${cfg.url || 'https://galaxymale.com'}${url || '/'}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${desc || ''}">
  <meta property="og:url" content="${cfg.url || 'https://galaxymale.com'}${url || '/'}">
  <meta property="og:type" content="${type || 'website'}">
  <meta property="og:site_name" content="${siteName}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${desc || ''}">`;
}
