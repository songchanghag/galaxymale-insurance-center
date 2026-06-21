# GalaxyMale 정적 뉴스 사이트

GalaxyMale는 AI인공지능, 모바일, 컴퓨터, 인터넷/보안, 가젯/IT기기 분야의 생활형 테크 뉴스를 다루는 정적 사이트입니다.

## 주요 구성

- 홈, 카테고리, 기사 상세, 칼럼, 매체 소개, 운영자 소개, 문의, 정책 페이지
- 기사 18개, 칼럼 3개
- 기사/칼럼별 개별 `index.html`
- 기사/칼럼별 고유 WebP 대표 이미지
- Open Graph, Twitter Card, Article 구조화 데이터
- `robots.txt`, `sitemap.xml`, `ads.txt`
- `/admin/` CMS-lite 데모

## 수정 위치

- 사이트 설정과 콘텐츠: `assets/js/data.js`
- 공통 스타일: `assets/css/style.css`
- 공통 동작: `assets/js/main.js`
- 기사 보조 동작: `assets/js/post-template.js`
- 관리자 화면: `admin/index.html`, `assets/js/admin.js`

## 관리자 안내

`/admin/`은 정적 사이트용 CMS-lite 데모입니다. 실제 데이터베이스, 서버 인증, 권한 관리가 있는 관리자 시스템이 아니며, 입력 데이터는 브라우저 `localStorage`에 저장됩니다.

## 애드센스 확인

애드센스 확인은 루트의 `ads.txt` 파일로 처리합니다.

```txt
google.com, pub-3819299014015793, DIRECT, f08c47fec0942fa0
```

배포 후 아래 주소에서 확인할 수 있습니다.

```txt
https://galaxymale.com/ads.txt
```

## 배포 전 점검

```bash
npm run check
node scripts/audit-galaxymale.cjs
```
