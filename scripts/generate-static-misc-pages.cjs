const fs = require("fs");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("public/assets/js/data.js", "utf8"), ctx);

const site = {
  name: "GalaxyMale",
  url: "https://galaxymale.com",
  email: "info@galaxymale.com",
  phone: "0507-2834-7925",
  address: "서울특별시 강남구 테헤란로 131",
  owner: "송창학",
};

const nav = `<header class="site-header"><div class="container"><div class="header-inner">
  <a href="/" class="site-logo"><div class="logo-icon">G</div>${site.name}</a>
  <nav class="site-nav" id="site-nav"><a href="/">홈</a><a href="/categories/ai/">AI인공지능</a><a href="/categories/smartphone/">모바일</a><a href="/categories/pc/">컴퓨터</a><a href="/categories/internet/">인터넷/보안</a><a href="/categories/gadget/">가젯/IT기기</a></nav>
  <div class="header-actions"><a href="/admin/" class="btn-outline">관리자</a></div>
  <button class="menu-toggle" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
</div></div></header>`;

const footer = `<footer class="site-footer"></footer>
<script src="/assets/js/data.js"></script>
<script src="/assets/js/main.js"></script>`;

function page(title, description, body) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | ${site.name}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>${nav}${body}${footer}</body>
</html>`;
}

function write(file, html) {
  const path = require("path");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf8");
}

const posts = ctx.window.POSTS || [];
const columns = ctx.window.COLUMNS || [];
const categories = ctx.window.CATEGORIES || [];

write("public/404.html", page(
  "페이지를 찾을 수 없습니다",
  "GalaxyMale 404 안내 페이지입니다.",
  `<main class="container" style="padding:80px 0;text-align:center;">
    <p style="font-size:14px;color:var(--color-primary);font-weight:800;margin-bottom:12px;">404</p>
    <h1 style="font-size:34px;margin-bottom:16px;">페이지를 찾을 수 없습니다</h1>
    <p style="color:var(--color-text-muted);line-height:1.8;margin-bottom:28px;">요청하신 주소가 변경되었거나 삭제되었을 수 있습니다. 홈 또는 카테고리에서 최신 기사를 확인해주세요.</p>
    <a class="btn-primary" href="/">홈으로 이동</a>
  </main>`,
));

write("public/author/index.html", page(
  `운영자 소개 - ${site.owner}`,
  "GalaxyMale 운영자와 편집 원칙을 소개합니다.",
  `<main class="container media-page">
    <h1>운영자 소개</h1>
    <section class="author-profile-card">
      <div class="author-avatar logo-icon">G</div>
      <div>
        <h2>${site.owner}</h2>
        <p>GalaxyMale 운영자 · 테크 에디터</p>
        <p>AI, 모바일, PC, 인터넷/보안, IT기기 정보를 생활 속 선택 기준으로 정리합니다. 확인 가능한 정보와 독자가 직접 판단할 수 있는 맥락을 우선합니다.</p>
        <p><a href="mailto:${site.email}">${site.email}</a></p>
      </div>
    </section>
    <section class="section-header"><span>운영자 칼럼</span><h2>칼럼니스트들의 생각</h2><a href="/columns/">전체 칼럼 보기 →</a></section>
    <div class="columns-grid">${columns.map((column) => `<a class="column-card" href="/columns/${column.slug}/"><div class="column-thumb"><img src="${column.image}" alt="${column.title}" loading="lazy"></div><span class="column-label">COLUMN</span><h3>${column.title}</h3><p>${column.excerpt}</p><div class="card-meta"><span class="logo-icon small">G</span><span>${column.author}</span><span>${column.date}</span></div></a>`).join("")}</div>
  </main>`,
));

write("public/posts/post.html", page(
  "기사 안내",
  "GalaxyMale 기사 목록 안내입니다.",
  `<main class="container media-page"><h1>기사 안내</h1><p>개별 기사는 각 기사 주소에서 확인할 수 있습니다.</p><a class="btn-primary" href="/">최신 기사 보기</a></main>`,
));

write("public/admin/index.html", `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>관리자 페이지 | ${site.name}</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="admin-body">
<main class="admin-shell">
  <section class="admin-login" id="admin-login">
    <div class="logo-icon admin-logo">G</div>
    <h1>GalaxyMale</h1>
    <p>관리자 로그인</p>
    <label>비밀번호<input id="admin-password" type="password" placeholder="관리자 비밀번호 입력"></label>
    <button class="btn-primary" onclick="loginAdmin()">로그인</button>
    <p class="admin-note">데모 비밀번호: galaxymale2026</p>
    <p class="admin-warning">정적 사이트용 CMS-lite 데모이며 실제 보안 관리자 시스템이 아닙니다.</p>
  </section>
  <section class="admin-panel" id="admin-panel" hidden>
    <aside class="admin-sidebar"><div class="site-logo"><div class="logo-icon">G</div>GalaxyMale 관리자</div><button onclick="showAdminTab('dashboard')">대시보드</button><button onclick="showAdminTab('posts')">일반 글 관리</button><button onclick="showAdminTab('columns')">칼럼 관리</button><button onclick="showAdminTab('settings')">사이트 설정</button><button onclick="logoutAdmin()">로그아웃</button></aside>
    <div class="admin-main">
      <section data-admin-tab="dashboard"><h1>대시보드</h1><div class="admin-stats"><div><strong>${posts.length}</strong><span>총 기사</span></div><div><strong>${columns.length}</strong><span>총 칼럼</span></div><div><strong>${categories.length}</strong><span>카테고리</span></div></div><p>브라우저 localStorage 기반 편집 UI입니다. 저장 내용은 현재 기기와 브라우저에만 남습니다.</p></section>
      <section data-admin-tab="posts" hidden><h1>일반 글 관리</h1><div id="admin-post-list"></div><h2>새 글 작성</h2><input placeholder="제목"><input placeholder="슬러그"><textarea placeholder="본문"></textarea><button class="btn-primary">저장</button><button class="btn-outline">미리보기</button></section>
      <section data-admin-tab="columns" hidden><h1>칼럼 관리</h1><div id="admin-column-list"></div><h2>새 칼럼 작성</h2><input placeholder="칼럼 제목"><textarea placeholder="칼럼 본문"></textarea><button class="btn-primary">저장</button><button class="btn-outline">미리보기</button></section>
      <section data-admin-tab="settings" hidden><h1>사이트 설정</h1><table class="settings-table"><tr><th>사이트명</th><td>${site.name}</td></tr><tr><th>이메일</th><td>${site.email}</td></tr><tr><th>운영자</th><td>${site.owner}</td></tr><tr><th>주소</th><td>${site.address}</td></tr></table><button class="btn-outline" onclick="exportCmsData()">JSON export</button><input type="file" accept="application/json"></section>
    </div>
  </section>
</main>
<script src="/assets/js/data.js"></script>
<script>
const posts = window.POSTS || [];
const columns = window.COLUMNS || [];
function loginAdmin(){ if(document.getElementById('admin-password').value === 'galaxymale2026'){ localStorage.setItem('gmAdminSession','active'); document.getElementById('admin-login').hidden = true; document.getElementById('admin-panel').hidden = false; renderAdminLists(); } else alert('비밀번호가 올바르지 않습니다.'); }
function logoutAdmin(){ localStorage.removeItem('gmAdminSession'); location.reload(); }
function showAdminTab(name){ document.querySelectorAll('[data-admin-tab]').forEach((el)=>{ el.hidden = el.dataset.adminTab !== name; }); }
function renderAdminLists(){ document.getElementById('admin-post-list').innerHTML = posts.slice(0,12).map((p)=>'<article class="admin-list-card"><strong>'+p.title+'</strong><span>'+p.author+' · '+p.date+'</span></article>').join(''); document.getElementById('admin-column-list').innerHTML = columns.map((c)=>'<article class="admin-list-card"><strong>'+c.title+'</strong><span>'+c.author+' · '+c.date+'</span></article>').join(''); }
function exportCmsData(){ const blob = new Blob([JSON.stringify({ posts, columns }, null, 2)], {type:'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'galaxymale-cms-export.json'; a.click(); }
if(localStorage.getItem('gmAdminSession') === 'active'){ document.getElementById('admin-login').hidden = true; document.getElementById('admin-panel').hidden = false; renderAdminLists(); }
</script>
</body>
</html>`);

console.log("generated misc static pages");
