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
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=gm-icon-v1">
<link rel="shortcut icon" href="/favicon.svg?v=gm-icon-v1">
<link rel="manifest" href="/site.webmanifest?v=gm-icon-v1">
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
      <h2>1. 개인정보의 처리 목적</h2><p>GalaxyMale는 이용자의 문의, 기사 제보, 콘텐츠 관련 요청을 확인하고 답변하기 위해 필요한 범위 안에서 개인정보를 처리합니다. 수집된 정보는 접수 내용 확인, 본인 의사 확인, 원활한 의사소통 경로 확보, 사이트 운영상 필요한 기록 관리에 사용됩니다. 단순한 방문 기록은 서비스 안정성 점검과 오류 확인을 위한 기술적 정보로만 활용하며, 별도의 동의 없이 개인을 식별하기 위한 목적으로 결합하지 않습니다.</p>
      <h2>2. 처리하는 개인정보 항목</h2><p>문의 및 기사제보 과정에서 처리할 수 있는 개인정보 항목은 이름, 이메일 주소, 문의 내용입니다. 이용자가 문의 내용 안에 전화번호, 주소, 소속 등 추가 정보를 직접 입력한 경우 해당 정보도 답변 처리 범위 안에서 함께 확인될 수 있습니다. GalaxyMale는 주민등록번호, 결제정보, 건강정보 등 민감하거나 사이트 운영 목적과 무관한 정보의 제출을 요구하지 않습니다.</p>
      <h2>3. 개인정보의 처리 및 보유 기간</h2><p>문의와 제보를 통해 접수된 개인정보는 답변과 검토가 완료된 뒤 3개월간 보관하며, 이후 지체 없이 파기합니다. 다만 동일한 문의의 재확인, 분쟁 대응, 관련 법령에 따른 보관 의무가 있는 경우에는 필요한 기간 동안 별도로 보관할 수 있습니다. 보관 기간이 지난 정보는 복구하기 어려운 방식으로 삭제하거나 식별할 수 없도록 처리합니다.</p>
      <h2>4. 개인정보의 제3자 제공</h2><p>GalaxyMale는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 법령에 근거한 요청이 있거나, 이용자가 사전에 명확히 동의한 경우에는 필요한 범위 안에서 제공될 수 있습니다. 이 경우 제공받는 자, 제공 목적, 제공 항목, 보유 기간을 가능한 범위에서 안내합니다.</p>
      <h2>5. 개인정보 처리의 위탁</h2><p>현재 GalaxyMale는 문의 응대와 기사제보 처리를 위해 별도의 개인정보 처리 위탁사를 두지 않습니다. 향후 메일 발송, 문의 관리, 보안 점검 등을 위해 외부 서비스를 이용하게 되는 경우에는 위탁 업무의 내용과 수탁자를 본 방침 또는 별도 공지를 통해 안내합니다.</p>
      <h2>6. 이용자와 법정대리인의 권리</h2><p>이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 문의 이메일을 통해 접수할 수 있으며, GalaxyMale는 본인 확인 후 합리적인 기간 안에 처리합니다. 다만 법령상 보존이 필요한 정보나 다른 이용자의 권리를 침해할 우려가 있는 경우에는 요청이 제한될 수 있습니다.</p>
      <h2>7. 개인정보의 파기 절차 및 방법</h2><p>보유 기간이 지나거나 처리 목적이 달성된 개인정보는 내부 확인 후 파기합니다. 전자 파일 형태의 정보는 복구가 어렵도록 삭제하며, 출력물 등 종이 문서가 발생한 경우에는 분쇄 또는 이에 준하는 방식으로 폐기합니다.</p>
      <h2>8. 개인정보 보호를 위한 조치</h2><p>GalaxyMale는 개인정보가 불필요하게 노출되지 않도록 접근 범위를 최소화하고, 문의 및 제보 내용은 운영 목적에 맞는 담당 범위 안에서만 확인합니다. 또한 정적 사이트 구조의 한계를 고려해 민감정보 입력을 요구하지 않으며, 이용자에게도 문의 양식에 과도한 개인정보를 입력하지 않도록 안내합니다.</p>
      <h2>9. 개인정보 보호 책임자</h2><p>개인정보 처리와 관련한 문의, 열람, 정정, 삭제 요청은 아래 연락처로 접수할 수 있습니다.<br>개인정보 보호 책임자: ${site.publisher}<br>문의 이메일: ${site.email}</p>
      <h2>10. 방침 변경</h2><p>본 개인정보처리방침은 사이트 운영 정책이나 관련 법령 변경에 따라 수정될 수 있습니다. 중요한 변경이 있을 경우 사이트를 통해 사전에 안내하며, 이 방침은 2026년 1월 1일부터 시행합니다.</p>
    </section>`,
  },
  terms: {
    title: "이용약관",
    description: "GalaxyMale 이용약관입니다.",
    content: `<section class="policy-body">
      <h2>1. 목적</h2><p>이 약관은 GalaxyMale가 제공하는 기사, 칼럼, 이미지, 자료 열람 서비스의 이용 조건과 절차, 이용자와 운영자의 권리 및 책임 사항을 정하는 것을 목적으로 합니다. GalaxyMale는 AI, 모바일, 컴퓨터, 인터넷/보안, 가젯/IT기기 분야의 정보를 일반 독자가 이해하기 쉬운 방식으로 제공하는 온라인 정보 매체입니다.</p>
      <h2>2. 약관의 효력과 변경</h2><p>본 약관은 사이트에 게시함으로써 효력이 발생합니다. GalaxyMale는 운영상 필요하거나 관련 법령 및 정책 변경이 있는 경우 약관을 수정할 수 있습니다. 중요한 변경 사항은 사이트 내 공지 또는 해당 페이지 갱신을 통해 안내하며, 변경된 약관은 별도로 정한 시행일이 없는 경우 게시한 날부터 적용됩니다.</p>
      <h2>3. 서비스의 제공 범위</h2><p>GalaxyMale는 기사, 칼럼, 카테고리별 콘텐츠, 사이트맵, 문의 및 기사제보 기능을 제공합니다. 사이트는 정적 웹사이트 구조로 운영되며, 댓글과 관리자 기능 중 일부는 브라우저 저장소를 활용한 데모 또는 편의 기능일 수 있습니다. 이러한 기능은 실제 회원제 서비스나 보안 인증 시스템과 동일한 성격으로 제공되지 않습니다.</p>
      <h2>4. 이용자의 의무</h2><p>이용자는 사이트를 정상적인 정보 열람 목적에 맞게 이용해야 합니다. 자동화 도구를 이용한 과도한 접속, 콘텐츠 무단 수집, 타인의 권리를 침해하는 행위, 문의 양식을 통한 광고성 또는 불법성 메시지 전송, 사이트 운영을 방해하는 행위는 금지됩니다.</p>
      <h2>5. 콘텐츠의 이용 제한</h2><p>GalaxyMale에 게시된 기사, 칼럼, 이미지, 편집 구성은 저작권 보호 대상입니다. 이용자는 개인적인 정보 확인 범위 안에서 콘텐츠를 열람할 수 있으나, 사전 허가 없이 전체 기사 복사, 상업적 재배포, 검색 노출을 목적으로 한 재가공, 이미지 무단 사용을 할 수 없습니다. 인용이 필요한 경우 출처와 링크를 명확히 표시해야 하며, 인용 범위는 합리적인 수준이어야 합니다.</p>
      <h2>6. 문의 및 제보 이용</h2><p>이용자는 문의 및 기사제보 페이지를 통해 의견, 오류 제보, 취재 참고 자료를 보낼 수 있습니다. 제출된 내용은 검토 후 답변이 이루어질 수 있으나, 모든 문의에 대해 답변을 보장하지는 않습니다. 제보 내용에 제3자의 개인정보, 허위 사실, 권리 침해 소지가 있는 자료를 포함하지 않도록 주의해야 합니다.</p>
      <h2>7. 서비스의 변경 및 중단</h2><p>GalaxyMale는 사이트 개선, 콘텐츠 개편, 보안 점검, 기술적 문제 해결을 위해 서비스의 일부 또는 전부를 변경하거나 일시 중단할 수 있습니다. 정적 사이트 특성상 일부 페이지의 갱신 시점이 다를 수 있으며, 운영자는 콘텐츠의 정확성과 이용 편의를 높이기 위해 페이지 구조를 조정할 수 있습니다.</p>
      <h2>8. 면책</h2><p>GalaxyMale의 콘텐츠는 일반 정보 제공을 목적으로 하며, 제품 구매나 서비스 이용에 대한 최종 판단은 이용자 본인의 책임으로 이루어져야 합니다. 외부 사이트 링크는 참고를 위해 제공될 수 있으며, 외부 사이트의 콘텐츠, 정책, 서비스 변경에 대해서는 GalaxyMale가 책임지지 않습니다.</p>
      <h2>9. 분쟁 해결</h2><p>사이트 이용과 관련해 분쟁이 발생한 경우 이용자와 GalaxyMale는 상호 협의를 통해 해결하도록 노력합니다. 협의가 어려운 경우 관련 법령과 관할 기준에 따라 처리합니다.</p>
      <h2>10. 시행일</h2><p>본 이용약관은 2026년 1월 1일부터 시행합니다.</p>
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
