/* ================================================================
   GalaxyMale — 관리자(CMS-lite) JS
   ⚠️ 이것은 정적 사이트용 CMS-lite 데모입니다.
      실제 보안 인증 시스템이 아닙니다.
      데이터는 브라우저 localStorage에 저장됩니다.
   ================================================================ */

const ADMIN_PASS = 'galaxymale2026'; // 데모용 비밀번호 (실제 보안 기능 아님)

/* ── 로그인 상태 확인 ── */
function isLoggedIn() {
  return localStorage.getItem('gm_admin_session') === 'true';
}
function login(pass) {
  if (pass === ADMIN_PASS) {
    localStorage.setItem('gm_admin_session', 'true');
    return true;
  }
  return false;
}
function logout() {
  localStorage.removeItem('gm_admin_session');
  window.location.reload();
}

/* ── 로컬 데이터 관리 ── */
function getLocalPosts() {
  const saved = localStorage.getItem('gm_posts');
  if (saved) return JSON.parse(saved);
  // 기본 데이터에서 불러오기
  if (typeof POSTS !== 'undefined') {
    return POSTS.map(p => ({ ...p, status: 'published' }));
  }
  return [];
}
function saveLocalPosts(posts) {
  localStorage.setItem('gm_posts', JSON.stringify(posts));
}
function getLocalColumns() {
  const saved = localStorage.getItem('gm_columns');
  if (saved) return JSON.parse(saved);
  if (typeof COLUMNS !== 'undefined') {
    return COLUMNS.map(c => ({ ...c, status: 'published' }));
  }
  return [];
}
function saveLocalColumns(cols) {
  localStorage.setItem('gm_columns', JSON.stringify(cols));
}

/* ── JSON 내보내기 ── */
function exportData() {
  const data = {
    posts: getLocalPosts(),
    columns: getLocalColumns(),
    exported: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'galaxymale-data-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

/* ── JSON 가져오기 ── */
function importData(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.posts) saveLocalPosts(data.posts);
      if (data.columns) saveLocalColumns(data.columns);
      alert('데이터를 성공적으로 가져왔습니다. 페이지를 새로고침합니다.');
      window.location.reload();
    } catch (err) {
      alert('JSON 파일 형식이 올바르지 않습니다.');
    }
  };
  reader.readAsText(file);
}

/* ── 관리자 UI 렌더링 ── */
document.addEventListener('DOMContentLoaded', function () {
  const loginWrap = document.getElementById('admin-login');
  const adminApp = document.getElementById('admin-app');

  if (!loginWrap || !adminApp) return;

  if (isLoggedIn()) {
    loginWrap.style.display = 'none';
    adminApp.style.display = 'flex';
    initAdminApp();
  } else {
    loginWrap.style.display = 'flex';
    adminApp.style.display = 'none';
  }

  /* 로그인 폼 */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const pass = document.getElementById('admin-password').value;
      if (login(pass)) {
        loginWrap.style.display = 'none';
        adminApp.style.display = 'flex';
        initAdminApp();
      } else {
        document.getElementById('login-error').textContent = '비밀번호가 올바르지 않습니다.';
      }
    });
  }

  /* 데모 로그인 버튼 */
  const demoBtn = document.getElementById('demo-login');
  if (demoBtn) {
    demoBtn.addEventListener('click', function () {
      document.getElementById('admin-password').value = ADMIN_PASS;
      login(ADMIN_PASS);
      loginWrap.style.display = 'none';
      adminApp.style.display = 'flex';
      initAdminApp();
    });
  }
});

function initAdminApp() {
  const posts = getLocalPosts();
  const columns = getLocalColumns();

  /* 대시보드 통계 */
  setTextSafe('stat-posts', posts.length);
  setTextSafe('stat-columns', columns.length);
  setTextSafe('stat-categories', typeof CATEGORIES !== 'undefined' ? CATEGORIES.length : 5);
  setTextSafe('stat-published', posts.filter(p => p.status === 'published').length);

  /* 로그아웃 */
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  /* 네비 탭 전환 */
  document.querySelectorAll('.admin-nav-item[data-panel]').forEach(function (item) {
    item.addEventListener('click', function () {
      const panel = item.getAttribute('data-panel');
      document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      document.querySelectorAll('.admin-panel-section').forEach(p => p.style.display = 'none');
      const target = document.getElementById('panel-' + panel);
      if (target) target.style.display = 'block';
      document.getElementById('admin-page-title').textContent = item.textContent.trim();
    });
  });

  /* 글 목록 렌더링 */
  renderPostList(posts);
  renderColumnList(columns);

  /* 글 작성 폼 */
  const savePostBtn = document.getElementById('save-post-btn');
  if (savePostBtn) {
    savePostBtn.addEventListener('click', function () {
      const title = document.getElementById('new-post-title').value.trim();
      const slug = document.getElementById('new-post-slug').value.trim();
      const category = document.getElementById('new-post-category').value;
      const excerpt = document.getElementById('new-post-excerpt').value.trim();
      const content = document.getElementById('new-post-content').value.trim();
      const status = document.getElementById('new-post-status').value;
      if (!title || !slug) {
        alert('제목과 슬러그는 필수입니다.');
        return;
      }
      const existing = getLocalPosts();
      existing.push({
        slug, title, excerpt, content, category,
        status, date: new Date().toISOString().slice(0, 10),
        updated: new Date().toISOString().slice(0, 10)
      });
      saveLocalPosts(existing);
      renderPostList(existing);
      document.getElementById('new-post-title').value = '';
      document.getElementById('new-post-slug').value = '';
      document.getElementById('new-post-excerpt').value = '';
      document.getElementById('new-post-content').value = '';
      alert('글이 저장되었습니다 (localStorage 기반).\n실제 사이트 반영을 위해서는 data.js 파일을 수정해야 합니다.');
    });
  }

  /* 칼럼 작성 폼 */
  const saveColBtn = document.getElementById('save-column-btn');
  if (saveColBtn) {
    saveColBtn.addEventListener('click', function () {
      const title = document.getElementById('new-col-title').value.trim();
      const slug = document.getElementById('new-col-slug').value.trim();
      const excerpt = document.getElementById('new-col-excerpt').value.trim();
      const content = document.getElementById('new-col-content').value.trim();
      if (!title || !slug) {
        alert('제목과 슬러그는 필수입니다.');
        return;
      }
      const existing = getLocalColumns();
      existing.push({
        slug, title, excerpt, content, status: 'published',
        date: new Date().toISOString().slice(0, 10)
      });
      saveLocalColumns(existing);
      renderColumnList(existing);
      alert('칼럼이 저장되었습니다 (localStorage 기반).');
    });
  }

  /* JSON 내보내기/가져오기 */
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) exportBtn.addEventListener('click', exportData);
  const importInput = document.getElementById('import-file');
  if (importInput) {
    importInput.addEventListener('change', function () {
      if (this.files[0]) importData(this.files[0]);
    });
  }

  /* 슬러그 자동 생성 */
  const titleInput = document.getElementById('new-post-title');
  const slugInput = document.getElementById('new-post-slug');
  if (titleInput && slugInput) {
    titleInput.addEventListener('input', function () {
      slugInput.value = titleInput.value
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 60);
    });
  }
}

function renderPostList(posts) {
  const tbody = document.getElementById('post-list-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  posts.forEach(function (p, idx) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${p.title}</strong></td>
      <td>${p.category || '-'}</td>
      <td>${p.date || '-'}</td>
      <td><span class="status-badge status-${p.status === 'published' ? 'published' : 'draft'}">${p.status === 'published' ? '발행됨' : '초안'}</span></td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline" onclick="editPost(${idx})">수정</button>
          <button class="admin-btn admin-btn-danger" onclick="deletePost(${idx})">삭제</button>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

function renderColumnList(cols) {
  const tbody = document.getElementById('column-list-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  cols.forEach(function (c, idx) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.title}</strong></td>
      <td>${c.date || '-'}</td>
      <td><span class="status-badge status-published">발행됨</span></td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-danger" onclick="deleteColumn(${idx})">삭제</button>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

function deletePost(idx) {
  if (!confirm('이 글을 삭제하시겠습니까?')) return;
  const posts = getLocalPosts();
  posts.splice(idx, 1);
  saveLocalPosts(posts);
  renderPostList(posts);
}
function deleteColumn(idx) {
  if (!confirm('이 칼럼을 삭제하시겠습니까?')) return;
  const cols = getLocalColumns();
  cols.splice(idx, 1);
  saveLocalColumns(cols);
  renderColumnList(cols);
}
function editPost(idx) {
  alert('수정 기능은 추후 확장 예정입니다. data.js 파일의 POSTS 배열을 직접 수정하시면 됩니다.');
}

function setTextSafe(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
