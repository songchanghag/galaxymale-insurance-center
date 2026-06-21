const fs = require("fs");
const path = require("path");

const site = {
  name: "GalaxyMale",
  url: "https://galaxymale.com",
  email: "info@galaxymale.com",
  adminEmail: "admin@galaxymale.com",
  copyrightEmail: "info@galaxymale.com",
  youthEmail: "chsong@galaxymale.com",
  phone: "0507-2834-7925",
  address: "서울특별시 강남구 테헤란로 131",
  publisher: "송창학",
  registration: "경기 X00000",
  registeredAt: "2026-01-01",
  issuedAt: "2026-01-07",
};

const tabs = [
  ["about", "매체소개", "/about/"],
  ["contact", "문의 및 기사제보", "/contact/"],
  ["privacy", "개인정보처리방침", "/privacy/"],
  ["terms", "이용약관", "/terms/"],
  ["policy", "저작권보호정책", "/policy/"],
  ["youth", "청소년보호정책", "/youth/"],
  ["email-rejection", "이메일무단수집거부", "/email-rejection/"],
  ["disclaimer", "면책고지", "/disclaimer/"],
];

const esc = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function tabNav(active) {
  return `<nav class="media-tabs" aria-label="매체 및 정책 페이지">
    ${tabs.map(([key, label, href]) => `<a href="${href}" ${key === active ? 'class="active"' : ""}>${label}</a>`).join("")}
  </nav>`;
}

function shell({ slug, title, description, content }) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} | ${site.name}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${site.url}/${slug}/">
<meta property="og:title" content="${esc(title)} | ${site.name}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}/${slug}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v2">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v2">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v2">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="site-logo"><div class="logo-icon">G</div>${site.name}</a>
      <nav class="site-nav" id="site-nav">
        <a href="/">홈</a>
        <a href="/categories/ai/">AI인공지능</a>
        <a href="/categories/smartphone/">모바일</a>
        <a href="/categories/pc/">컴퓨터</a>
        <a href="/categories/internet/">인터넷/보안</a>
        <a href="/categories/gadget/">가젯/IT기기</a>
      </nav>
      <div class="header-actions"><a href="/admin/" class="btn-outline">관리자</a></div>
      <button class="menu-toggle" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<main class="container media-page">
  <h1>${esc(title)}</h1>
  ${tabNav(slug)}
  ${content}
</main>
<footer class="site-footer"></footer>
<script src="/assets/js/data.js"></script>
<script src="/assets/js/main.js"></script>
</body>
</html>`;
}

const mediaRows = `<section class="media-info-box">
  <h2>매체 정보</h2>
  <div class="media-info-list">
    <span>제호 : ${site.name}</span>
    <span>등록번호 : ${site.registration}</span>
    <span>등록일 : ${site.registeredAt}</span>
    <span>발행일 : ${site.issuedAt}</span>
    <span>발행·편집인 : ${site.publisher}</span>
    <span>청소년보호책임자 : ${site.publisher}</span>
    <span>대표전화 : ${site.phone}</span>
    <span>문의 및 제보 : ${site.adminEmail}</span>
  </div>
</section>`;

const pages = {
  about: {
    title: "매체 소개",
    description: "GalaxyMale는 AI, 모바일, 컴퓨터, 인터넷 보안, IT기기 정보를 생활 기준으로 정리하는 기술 뉴스 매체입니다.",
    content: `<section class="media-intro-grid">
      <div class="media-intro-copy">
        <h2>독자의 기술 선택에 필요한 맥락을 빠르고 정확하게 전달하겠습니다.</h2>
        <p>GalaxyMale는 빠르게 바뀌는 기술 환경을 독자가 실제 생활 속에서 이해할 수 있도록 정리하는 정보 매체입니다. 단순한 신제품 소개보다 매일 마주치는 설정, 보안, 기기 선택, AI 활용의 기준을 중심에 둡니다.</p>
        <p>우리는 확인 가능한 정보와 사용 맥락을 함께 다룹니다. 공식 자료와 공개된 정보를 우선 확인하고, 추정이나 의견은 기사 안에서 분명히 구분합니다. 과장된 표현이나 검증되지 않은 최신정보보다 독자가 직접 판단할 수 있는 설명을 우선합니다.</p>
        <p>AI 인공지능, 모바일, 컴퓨터, 인터넷/보안, 가젯/IT기기까지 다섯 개 카테고리로 운영하며, 기사와 칼럼은 서로 다른 관점과 문체를 유지하도록 관리합니다.</p>
        <a class="media-contact-button" href="/contact/">CONTACT US →</a>
      </div>
      <figure class="media-intro-image">
        <img src="/assets/images/site/about-media.webp" alt="GalaxyMale 기술 뉴스 매체 소개 이미지" loading="lazy">
      </figure>
    </section>
    ${mediaRows}`,
  },
  contact: {
    title: "문의 및 기사제보",
    description: "GalaxyMale 문의 및 기사제보 접수 안내입니다.",
    content: `<section class="contact-news-layout">
      <form class="contact-news-form" action="#" method="post">
        <label>성함 <span>*</span><input type="text" placeholder="성함"></label>
        <label>이메일 <span>*</span><input type="email" placeholder="이메일 주소를 입력해주세요."></label>
        <label>제보내용 <span>*</span><textarea placeholder="문의 내용을 자세히 적어주세요."></textarea></label>
        <label class="contact-consent"><input type="checkbox"> 개인정보 수집 및 활용동의</label>
        <div class="privacy-consent-list">
          <p>1. 수집 개인정보 항목 : 이름, 이메일</p>
          <p>2. 개인정보의 수집 및 이용목적 : 신청에 따른 본인확인 및 원활한 의사소통 경로 확보</p>
          <p>3. 개인정보의 이용기간 : 모든 검토가 완료된 후 3개월간 이용자의 조회를 위하여 보관하며, 이후 해당정보를 지체 없이 파기합니다.</p>
          <p>4. 개인정보 수집 동의 거부권 : 개인정보 수집 동의에 거부할 수 있으며 동의하지 않는 경우 의견 접수가 불가능합니다.</p>
          <p>5. 그 밖의 사항은 개인정보처리방침을 준수합니다.</p>
        </div>
        <button type="button" class="btn-primary">전송</button>
      </form>
      <section class="contact-news-info">
        <h2>${site.name}</h2>
        <p><strong>상호명 :</strong> ${site.name}</p>
        <p><strong>이메일 :</strong> ${site.url}</p>
        <p><strong>사업장 주소 :</strong> ${site.address}</p>
        <p><strong>업무시간 :</strong> 평일 오전 10시 ~ 오후 5시</p>
        <p><strong>고객 서비스 :</strong> ${site.phone}</p>
        <div class="contact-map-wrap">
          <a class="map-open-link" href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20131" target="_blank" rel="noopener">지도에서 열기 ↗</a>
          <img class="contact-map-image" src="/assets/images/site/contact-map.webp" alt="서울특별시 강남구 테헤란로 131 위치 지도" loading="lazy">
        </div>
      </section>
    </section>`,
  },
  privacy: {
    title: "개인정보처리방침",
    description: "GalaxyMale 개인정보처리방침입니다.",
    content: `<section class="policy-body">
      <h2>사이트</h2>
      <p>저희는 GalaxyMale, 기술 뉴스와 정보를 제공하는 웹사이트입니다. 웹사이트 주소는 <a href="${site.url}">${site.url}</a> 입니다.</p>
      <h2>댓글 정책</h2>
      <p>방문자가 사이트에 댓글을 남길 때, 저희는 댓글 양식에 나타난 데이터를 수집할 수 있습니다. 이는 스팸 방지와 사이트 운영 안정성을 위해 방문자의 IP 주소와 브라우저 사용자 에이전트 문자열을 포함할 수 있습니다.</p>
      <p>이메일 주소로부터 생성된 익명화된 문자열(해시)은 댓글 작성자의 표시 정보를 확인하기 위한 용도로 사용될 수 있습니다. GalaxyMale는 정적 사이트 구조를 기반으로 운영되므로, 댓글 기능은 브라우저 저장소 또는 별도 안내된 방식으로 제한적으로 제공될 수 있습니다.</p>
      <h2>미디어 업로드</h2>
      <p>웹사이트에 이미지를 업로드하거나 제보 자료로 이미지를 전달할 때, 위치 데이터(EXIF GPS)가 포함된 이미지는 피해야 합니다. 방문자 또는 제3자가 이미지 파일에서 위치 데이터를 다운로드하고 추출할 수 있기 때문입니다.</p>
      <h2>쿠키 사용</h2>
      <p>저희 사이트에 댓글 또는 문의 내용을 남기면, 이름, 이메일 주소, 웹사이트 정보를 브라우저 저장소 또는 쿠키에 저장하는 것을 선택할 수 있습니다. 이는 편의를 위한 것으로, 다음에 의견을 남길 때 정보를 다시 입력하지 않아도 되도록 돕기 위한 목적입니다.</p>
      <p>관리자 페이지를 방문하면, 브라우저가 세션 정보를 유지할 수 있는지 확인하기 위해 임시 저장 정보가 설정될 수 있습니다. 이 정보에는 공개적으로 식별 가능한 개인 데이터가 포함되지 않으며, 브라우저 또는 저장소 설정에 따라 삭제될 수 있습니다.</p>
      <p>관리자 화면에서 로그인하면 로그인 상태와 화면 표시 선택을 저장하기 위해 브라우저 저장소가 사용될 수 있습니다. 이 기능은 정적 사이트용 CMS-lite 데모 기능이며, 실제 보안 인증 시스템과 동일한 방식으로 제공되지 않습니다.</p>
      <p>글을 편집하거나 발행하는 관리 화면을 사용할 경우, 브라우저에 추가 데이터가 저장될 수 있습니다. 이 데이터는 방금 편집한 글의 식별 정보, 임시 입력값, 미리보기 상태 등을 나타낼 수 있으며, 사용자가 직접 브라우저 저장소를 삭제할 수 있습니다.</p>
      <h2>다른 웹사이트의 내장 콘텐츠</h2>
      <p>저희 사이트의 글에는 다른 웹사이트에서 가져온 내장 콘텐츠(예: 동영상, 이미지, 글, 지도 등)가 포함될 수 있습니다. 이러한 내장 콘텐츠는 해당 콘텐츠를 제공하는 웹사이트를 방문한 것과 동일한 방식으로 작동합니다.</p>
      <p>이 웹사이트들은 데이터를 수집하고, 쿠키를 사용하며, 추가적인 제3자 추적을 내장하고, 내장 콘텐츠와의 상호작용을 모니터링할 수 있습니다. 만약 해당 웹사이트에 계정이 있고 로그인한 상태라면, 이러한 상호작용도 추적될 수 있습니다.</p>
      <h2>데이터 공유</h2>
      <p>문의, 기사제보, 댓글 또는 관리자 기능 이용 과정에서 수집된 데이터는 원칙적으로 외부에 판매하거나 임의로 공유하지 않습니다. 다만 법령상 요청이 있거나 사이트 보안 및 스팸 방지 처리를 위해 필요한 경우 제한된 범위에서 관련 정보가 처리될 수 있습니다.</p>
      <h2>데이터 보유 기간</h2>
      <p>댓글을 남기면, 댓글과 그 메타데이터는 후속 댓글을 자동으로 인식하고 승인하기 위한 목적으로 보관될 수 있습니다. 다만 GalaxyMale의 댓글 기능은 정적 사이트 구조 안에서 제한적으로 제공되므로, 실제 보관 범위는 브라우저 저장소 또는 운영자가 별도로 관리하는 접수 기록에 따라 달라질 수 있습니다.</p>
      <p>문의 및 기사제보를 남긴 경우, 접수 내용과 메타데이터는 검토와 답변을 위해 필요한 기간 동안 보관될 수 있습니다. 모든 이용자는 자신이 제공한 개인 정보의 조회, 정정 또는 삭제를 요청할 수 있으며, 운영자는 사이트 운영과 법적 보관 필요성을 검토한 뒤 처리합니다.</p>
      <h2>데이터에 대한 권리</h2>
      <p>본 사이트에 댓글을 남기거나 문의를 접수한 경우, 저희가 보유하고 있는 귀하의 개인 데이터에 대한 확인을 요청할 수 있습니다. 또한 저희가 보유하고 있는 귀하의 개인 데이터를 삭제해달라고 요청할 수 있습니다. 이는 행정적, 법적 또는 보안 목적으로 보관해야 하는 데이터는 포함되지 않습니다.</p>
      <h2>데이터 전송</h2>
      <p>방문자의 댓글, 문의 또는 제보 내용은 스팸 방지, 보안 점검, 사이트 운영 안정성 확인을 위해 자동 또는 수동 검토될 수 있습니다.</p>
      <h2>시행일</h2>
      <p>본 개인정보처리방침은 2026년 1월 1일부터 시행합니다.</p>
    </section>`,
  },
  terms: {
    title: "이용약관",
    description: "GalaxyMale 이용약관입니다.",
    content: `<section class="policy-body">
      <h2>GalaxyMale 이용약관</h2>
      <h3>제 1 조 (목적)</h3>
      <p>이 약관은 GalaxyMale가 제공하는 모든 서비스(이하 ‘서비스’)를 이용하는 고객(이하 ‘회원’)과 GalaxyMale가 서비스의 이용조건 및 절차, 권리와 의무, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
      <h3>제 2 조 (약관의 효력과 변경)</h3>
      <p>서비스는 본 약관에 규정된 조항을 회원이 수락하는 것을 조건으로 제공됩니다. 이 약관은 온라인을 통해 공시함으로써 효력을 발생합니다. GalaxyMale는 불가피한 변경의 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 온라인을 통해 공지됩니다.</p>
      <h3>제 3 조 (약관 외 준칙)</h3>
      <p>이 약관에 명시되지 않은 사항에 대해서는 국내 관련 법령 규정에 따릅니다.</p>
      <h3>제 4 조 (이용계약의 체결)</h3>
      <p>이용계약은 회원의 댓글을 GalaxyMale가 승낙함으로써 성립합니다. GalaxyMale는 댓글의 내용이 허위이거나 규정한 제반 사항을 위반하여 등록된 경우 댓글을 삭제할 수 있습니다.</p>
      <h3>제 5 조 (이용계약의 해지)</h3>
      <p>회원은 GalaxyMale에 언제든 댓글 삭제를 요청할 수 있습니다. GalaxyMale는 회원의 댓글 삭제 요청이 접수된 즉시 해당 댓글을 삭제합니다.</p>
      <h3>제 6 조 (서비스)</h3>
      <p>GalaxyMale는 뉴스 서비스, 동영상 서비스, 댓글 서비스 등을 제공합니다. 필요에 따라 서비스 내용을 추가, 변경, 삭제할 수 있습니다.</p>
      <h3>제 7 조 (회사의 의무)</h3>
      <p>GalaxyMale는 지속적이고 안정적인 서비스 제공을 위해 최선을 다합니다. 다만, 부득이한 사유로 서비스를 일시 중단할 수 있습니다.</p>
      <h3>제 8 조 (개인정보의 보호)</h3>
      <p>GalaxyMale는 서비스와 관련하여 수집된 회원의 정보를 본인의 사전 승낙 없이 제3자에게 공개하거나 배포할 수 없습니다. 개인정보 보호와 관련된 사항은 ‘개인정보처리방침’에 따릅니다.</p>
      <h3>제 9 조 (회원의 의무)</h3>
      <p>회원은 댓글 등록 시 이용한 이름과 댓글 내용에 대한 관리책임이 있습니다. 회원은 이 약관 및 관련 법령을 준수해야 하며, GalaxyMale의 업무에 방해되는 행위를 해서는 안 됩니다.</p>
      <h3>제 10 조 (저작권)</h3>
      <p>GalaxyMale의 모든 서비스에 대한 저작권은 GalaxyMale 및 콘텐츠 제공처에 있습니다. 저작권법에 의해 보호받으며, 사전 승낙 없이 이용할 수 없습니다.</p>
      <h3>제 11 조 (기타)</h3>
      <p>본 약관은 공정거래위원회 표준 약관에 근거하여 작성되었습니다.</p>
    </section>`,
  },
  policy: {
    title: "저작권보호정책",
    description: "GalaxyMale 저작권보호정책입니다.",
    content: `<section class="policy-body policy-simple">
      <h2>저작권 보호 정책</h2>
      <p>GalaxyMale에 게시된 모든 콘텐츠는 저작권법의 보호를 받습니다.</p>
      <p>사이트에 게시된 기사, 이미지, 영상 등의 콘텐츠는 사전 허가 없이 무단 복제, 배포, 전송, 재가공할 수 없습니다.</p>
      <h2>다음 행위는 금지됩니다</h2>
      <ul><li>기사 전체 무단 복사</li><li>상업적 이용 목적의 무단 사용</li><li>콘텐츠 변형 후 재배포</li></ul>
      <p>콘텐츠 사용이 필요한 경우 사전에 문의를 통해 사용 허가를 받아야 합니다.</p>
      <p>문의: <a href="mailto:${site.copyrightEmail}">${site.copyrightEmail}</a></p>
    </section>`,
  },
  youth: {
    title: "청소년보호정책",
    description: "GalaxyMale 청소년보호정책입니다.",
    content: `<section class="policy-body policy-simple">
      <h2>GalaxyMale 청소년보호정책</h2>
      <h3>제 1 조 (청소년보호계획 수립 및 업무담당자 교육시행)</h3><p>GalaxyMale는 청소년이 유해정보에 무방비로 노출되지 않도록 청소년 유해매체물에 대해 별도의 인증장치를 마련하고 적용합니다. 또한 청소년 유해정보 노출 방지를 위한 예방 조치를 강구하며, 관련 담당자에게 청소년보호 교육을 실시합니다.</p>
      <h3>제 2 조 (유해정보에 대한 청소년 접근 제한 및 관리 조치)</h3><p>GalaxyMale는 청소년이 유해정보에 접근하지 못하도록 청소년 유해매체물에 대한 인증장치를 마련하고, 청소년 유해정보 노출 방지를 위한 예방 조치를 취합니다.</p>
      <h3>제 3 조 (유해정보로 인한 피해 상담 및 고충 처리)</h3><p>GalaxyMale는 청소년 유해정보로 인한 피해 상담 및 고충 처리를 위해 전문 인력을 배치하고 있습니다. 이용자는 아래에 명시된 청소년보호 책임자 및 담당자의 연락처를 통해 피해 상담 및 고충 처리를 요청할 수 있습니다.</p>
      <h3>제 4 조 (청소년보호책임자 및 담당자 연락처)</h3><p>GalaxyMale는 청소년 보호에 대한 의견 수렴 및 불만 처리를 담당하는 청소년 보호 책임자 및 담당자를 운영합니다. 관련 문의사항이 있으시면 신속하고 성실하게 답변 드리겠습니다.</p>
      <p>청소년 보호 책임자: ${site.publisher}<br>전화번호: ${site.phone}<br>이메일: <a href="mailto:${site.youthEmail}">${site.youthEmail}</a></p>
      <h3>제 5 조 (부칙)</h3><p>청소년보호정책 시행일자: 2026.02.10</p><p>이 청소년보호정책은 GalaxyMale가 청소년들을 유해한 정보로부터 보호하고, 건전한 인터넷 환경을 조성하기 위해 마련한 것입니다.</p>
    </section>`,
  },
  "email-rejection": {
    title: "이메일무단수집거부",
    description: "GalaxyMale 이메일무단수집거부 안내입니다.",
    content: `<section class="policy-body">
      <h2>이메일 주소 무단 수집 거부</h2><p>본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용해 무단으로 수집되는 것을 거부합니다.</p>
      <h2>위반 시 조치</h2><p>무단 수집 행위는 관련 법령에 따라 제재를 받을 수 있습니다. 업무 연락은 공개된 문의 이메일을 통해 목적을 밝혀 접수해주시기 바랍니다.</p>
      <h2>시행일</h2><p>이 안내는 2026년 1월 1일부터 적용합니다.</p>
    </section>`,
  },
  disclaimer: {
    title: "면책고지",
    description: "GalaxyMale 면책고지입니다.",
    content: `<section class="policy-body">
      <h2>정보 제공 범위</h2><p>GalaxyMale의 콘텐츠는 일반적인 정보 제공을 목적으로 합니다. 제품 구매, 서비스 가입, 보안 설정 등 중요한 판단은 이용자가 최신 공식 자료와 자신의 사용 환경을 함께 확인해야 합니다.</p>
      <h2>외부 링크</h2><p>기사 안의 외부 링크는 참고용으로 제공될 수 있으며, 외부 사이트의 내용과 운영 방식에 대해 GalaxyMale가 책임지지 않습니다.</p>
      <h2>콘텐츠 수정</h2><p>기술 환경과 서비스 조건은 바뀔 수 있으므로, 콘텐츠는 운영 과정에서 수정 또는 보완될 수 있습니다.</p>
      <h2>시행일</h2><p>이 고지는 2026년 1월 1일부터 시행합니다.</p>
    </section>`,
  },
};

for (const [slug, page] of Object.entries(pages)) {
  const dir = path.join(__dirname, "..", "public", slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), shell({ slug, ...page }), "utf8");
}

console.log(`Generated ${Object.keys(pages).length} static info pages.`);
