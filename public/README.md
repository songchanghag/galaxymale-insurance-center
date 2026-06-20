# GalaxyMale Tech — 한국어 테크 뉴스 사이트

**도메인:** galaxymale.com  
**운영자:** 송창학 (songchanghag790@gmail.com)  
**전화:** 0507-2834-7925  
**주소:** 서울특별시 강남구 테헤란로 131

---

## 사이트 개요

GalaxyMale Tech는 AI, 스마트폰, PC, 인터넷 보안, IT 가젯 분야의 실용적인 테크 정보를 제공하는 순수 정적(Static) HTML/CSS/JavaScript 사이트입니다.

---

## 파일 구조

```
galaxymale-site/
├── index.html                    # 홈페이지
├── 404.html                      # 404 에러 페이지
├── robots.txt                    # 검색엔진 크롤러 설정
├── sitemap.xml                   # XML 사이트맵 (SEO)
├── assets/
│   ├── css/style.css             # 전체 스타일 (CSS 변수, 반응형)
│   └── js/
│       ├── data.js               # 콘텐츠 데이터 (포스트, 칼럼, 설정)
│       ├── main.js               # 공통 JS (네비게이션, 메뉴 등)
│       ├── post-template.js      # 포스트 동적 렌더링
│       ├── admin.js              # 관리자 기능
│       └── components.js        # 공통 컴포넌트
├── posts/                        # 15개 아티클 (각각 index.html)
│   ├── chatgpt-beginners-guide/
│   ├── chatgpt-prompt-writing/
│   ├── ai-image-tools-comparison/
│   ├── ai-daily-use-tips/
│   ├── galaxy-vs-iphone-comparison/
│   ├── smartphone-battery-tips/
│   ├── android-beginner-settings/
│   ├── mobile-app-management/
│   ├── pc-assembly-beginners/
│   ├── pc-windows11-setup/
│   ├── pc-storage-guide/
│   ├── internet-security-basics/
│   ├── phishing-prevention-guide/
│   ├── vpn-beginners-guide/
│   ├── public-wifi-safety/
│   ├── wireless-earbuds-buying-guide/
│   ├── gadget-smartwatch-guide/
│   └── gadget-tablet-guide/
├── columns/                      # 칼럼 페이지
│   ├── index.html
│   ├── ai-digital-literacy/
│   ├── smartphone-decade-reflection/
│   └── tech-purchase-beyond-specs/
├── categories/                   # 카테고리 페이지
│   ├── index.html
│   ├── ai/
│   ├── smartphone/
│   ├── pc/
│   ├── internet/
│   └── gadget/
├── about/index.html              # 사이트 소개
├── author/index.html             # 운영자 소개
├── contact/index.html            # 문의하기
├── admin/index.html              # 관리자 CMS
├── privacy/index.html            # 개인정보처리방침
├── terms/index.html              # 이용약관
├── disclaimer/index.html         # 면책고지
└── sitemap/index.html            # 사이트맵 (HTML)
```

---

## 주요 기능

### 콘텐츠
- **아티클 17개+**: 각 1,500자 이상 (TOC, FAQ, 체크리스트 포함)
- **칼럼 3개**: 심층 전문가 칼럼 (김지훈, 박소연, 이민준)
- **카테고리 5개**: AI·인공지능, 스마트폰·모바일, PC·컴퓨터, 인터넷·보안, 가젯·IT기기

### 기술
- **순수 정적**: 서버/DB 불필요, 호스팅 어디서나 가능
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 완벽 지원
- **SEO 최적화**: Open Graph, Schema.org 구조화 데이터, sitemap.xml, robots.txt
- **AdSense 준비**: 광고 슬롯 자리 마련 (data.js에서 설정 가능)

### 관리자 CMS
- URL: `/admin/`
- 데모 비밀번호: `galaxymale2026`
- localStorage 기반 글 추가/수정/삭제
- 비밀번호 변경, 데이터 내보내기(JSON)

---

## 배포 방법

이 사이트는 순수 정적 HTML입니다. 아래 서비스에 바로 배포 가능합니다:

1. **Nginx/Apache**: `galaxymale-site/` 폴더를 웹 루트에 복사
2. **GitHub Pages**: 저장소에 업로드 후 Pages 활성화
3. **Netlify/Vercel**: 폴더 드래그앤드롭으로 즉시 배포
4. **cPanel 호스팅**: `public_html/`에 파일 업로드

### Nginx 설정 예시 (404 페이지)
```nginx
server {
    root /var/www/galaxymale;
    error_page 404 /404.html;
    index index.html;
}
```

---

## 콘텐츠 수정 방법

### 글 추가/수정
`assets/js/data.js`의 `POSTS` 배열에 새 포스트 객체를 추가하고,  
`posts/[slug]/index.html` 파일을 생성하면 됩니다.

### 사이트 설정 변경
`assets/js/data.js` 상단의 `SITE_CONFIG` 객체를 수정하세요.

### 스타일 변경
`assets/css/style.css` 상단의 CSS 변수(`:root`)를 수정하세요:
- `--color-primary`: 브랜드 색상 (기본: #0066cc)
- `--color-secondary`: 보조 색상 (기본: #1a1a2e)

---

## Google AdSense 적용 방법

1. Google AdSense 승인 후 발급받은 Publisher ID 확인
2. 각 HTML 파일의 `<head>`에 AdSense 스크립트 추가:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```
3. 광고를 표시할 위치에 AdSense 광고 단위 코드 삽입

---

© 2026 GalaxyMale Tech | 운영자: 송창학
