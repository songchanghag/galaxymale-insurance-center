/* ================================================================
   GalaxyMale Tech — 글 상세 페이지 동적 렌더링
   post.html에서 URL 슬러그를 읽어 해당 포스트를 렌더링합니다.
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // URL에서 슬러그 추출
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const slug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

  const post = (window.POSTS || []).find(p => p.slug === slug);
  if (!post) {
    document.getElementById('post-main').innerHTML = '<div class="container py-48 text-center"><h2>기사를 찾을 수 없습니다.</h2><a href="/" class="btn-primary" style="display:inline-flex;margin-top:20px;">홈으로</a></div>';
    return;
  }

  document.title = post.title + ' | GalaxyMale Tech';
  document.querySelector('meta[name="description"]').setAttribute('content', post.subtitle || post.excerpt);

  const catColorMap = {ai:'ai', smartphone:'smartphone', pc:'pc', internet:'internet', gadget:'gadget'};
  const thumbClass = 'card-thumb-' + (catColorMap[post.category] || 'default');

  // 관련글
  const relatedPosts = (post.related || []).map(slug => {
    const rp = (window.POSTS || []).find(p => p.slug === slug);
    return rp ? `<a href="/posts/${rp.slug}/" class="related-card"><div class="related-cat">${rp.categoryName}</div><div class="related-title">${rp.title}</div></a>` : '';
  }).join('');

  // FAQ
  const faqHtml = (post.faq || []).map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q">${f.q}</div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');

  // 목차
  const tocHtml = (post.toc || []).map((t, i) => `<li><a href="#section-${i}">${t}</a></li>`).join('');

  // 체크리스트
  const checkHtml = (post.checklist || []).map(c => `<li>${c}</li>`).join('');

  // 핵심요약
  const summaryHtml = (post.summary || []).map(s => `<li>${s}</li>`).join('');

  // 주의사항
  const mistakesHtml = (post.mistakes || []).map(m => `<li>${m}</li>`).join('');

  // 태그
  const tagsHtml = (post.tags || []).map(t => `<a href="/categories/${post.category}/" class="tag">#${t}</a>`).join('');

  // 인기 글 (사이드바)
  const popularHtml = (window.POSTS || []).filter(p => p.recommended && p.slug !== post.slug).slice(0,5).map((p, i) => `
    <div class="sidebar-post">
      <div class="sidebar-post-num">0${i+1}</div>
      <div class="sidebar-post-title"><a href="/posts/${p.slug}/">${p.title}</a></div>
    </div>`).join('');

  const html = `
  <div id="reading-progress" style="position:fixed;top:64px;left:0;height:3px;background:var(--color-primary);z-index:200;transition:width .1s;width:0"></div>
  <div class="container" style="padding-top:36px;padding-bottom:56px;">
    <div class="post-layout">
      <main>
        <div class="post-header">
          <nav class="post-breadcrumb" aria-label="breadcrumb">
            <a href="/">홈</a><span>›</span>
            <a href="/categories/${post.category}/">${post.categoryName}</a><span>›</span>
            <span>${post.title}</span>
          </nav>
          <a href="/categories/${post.category}/" class="post-category-tag">${post.categoryName}</a>
          <h1 class="post-title">${post.title}</h1>
          <p class="post-subtitle">${post.subtitle || ''}</p>
          <div class="post-meta-bar">
            <div class="post-meta-author"><span class="card-author-img">송</span> 송창학</div>
            <span class="post-meta-sep">|</span>
            <span>작성일: ${post.date}</span>
            <span class="post-meta-sep">|</span>
            <span>수정일: ${post.updated}</span>
            <span class="post-meta-sep">|</span>
            <span>${post.categoryName}</span>
          </div>
        </div>

        <div class="toc-box">
          <div class="toc-title">📋 목차</div>
          <ol class="toc-list">${tocHtml}</ol>
        </div>

        <div class="post-content">
          ${post.content || ''}

          ${summaryHtml ? `<div class="summary-box"><div class="summary-box-title">✅ 핵심 요약</div><ul>${summaryHtml}</ul></div>` : ''}

          ${mistakesHtml ? `<div class="warning-box"><div class="warning-box-title">⚠️ 초보자가 자주 하는 실수</div><ul>${mistakesHtml}</ul></div>` : ''}

          ${checkHtml ? `<div class="checklist"><div class="checklist-title">📌 체크리스트</div><ul>${checkHtml}</ul></div>` : ''}

          ${faqHtml ? `<div class="faq-section"><h2 class="faq-title">자주 묻는 질문</h2>${faqHtml}</div>` : ''}

          <p style="font-size:.82rem;color:var(--color-text-muted);margin-top:32px;padding-top:16px;border-top:1px solid var(--color-border);">이 글은 초보자 기준으로 이해하기 쉽게 정리되었으며, 내용은 운영 과정에서 순차적으로 보완될 수 있습니다.</p>
        </div>

        <div style="margin-top:28px;">${tagsHtml}</div>

        <div class="author-box">
          <div class="author-box-avatar">송</div>
          <div class="author-box-info">
            <h4>송창학</h4>
            <div class="role">GalaxyMale Tech 운영자 · 테크 에디터</div>
            <p>10년 이상 IT 분야를 취재하고 분석해온 테크 에디터입니다. 복잡한 기술 정보를 누구나 이해할 수 있도록 쉽게 풀어 쓰는 것을 목표로 합니다. <a href="/author/">운영자 소개 →</a></p>
          </div>
        </div>

        ${relatedPosts ? `<div class="related-posts"><h3>관련 기사</h3><div class="related-list">${relatedPosts}</div></div>` : ''}
      </main>
      <aside class="sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-title">추천 기사</div>
          ${popularHtml}
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-title">카테고리</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <a href="/categories/ai/" style="font-size:.87rem;color:var(--color-text-muted);">🤖 AI·인공지능</a>
            <a href="/categories/smartphone/" style="font-size:.87rem;color:var(--color-text-muted);">📱 스마트폰·모바일</a>
            <a href="/categories/pc/" style="font-size:.87rem;color:var(--color-text-muted);">💻 PC·컴퓨터</a>
            <a href="/categories/internet/" style="font-size:.87rem;color:var(--color-text-muted);">🔒 인터넷·보안</a>
            <a href="/categories/gadget/" style="font-size:.87rem;color:var(--color-text-muted);">🎧 가젯·IT기기</a>
          </div>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-title">칼럼</div>
          <a href="/columns/ai-digital-literacy/" style="display:block;font-size:.84rem;color:var(--color-text-muted);margin-bottom:8px;">AI 시대, 디지털 리터러시가 왜 중요한가</a>
          <a href="/columns/smartphone-decade-reflection/" style="display:block;font-size:.84rem;color:var(--color-text-muted);margin-bottom:8px;">스마트폰이 우리 일상을 바꾼 10년</a>
          <a href="/columns/tech-purchase-beyond-specs/" style="display:block;font-size:.84rem;color:var(--color-text-muted);">테크 제품 구매, 스펙보다 중요한 것들</a>
        </div>
      </aside>
    </div>
  </div>`;

  document.getElementById('post-main').innerHTML = html;
});
