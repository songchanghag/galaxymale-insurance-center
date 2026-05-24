const SITE_DEFAULT = "https://galaxymale.com";

const INSURERS = [
  ["samsung-fire", "삼성화재", "손해보험", "", "Chrome, Edge", "1588-5114", "1566-0553", "1899-5005", "0505-162-0872", "", ""],
  ["meritz-fire", "메리츠화재", "손해보험", "", "Chrome, Edge", "1566-7711", "1577-7711", "02-3786-2777", "0505-021-3400", "", ""],
  ["db-fire", "DB손해보험", "손해보험", "", "Chrome", "1588-0100", "1566-0757", "02-2262-1241", "0505-181-4862", "", ""],
  ["kb-fire", "KB손해보험", "손해보험", "", "Chrome, Edge", "1544-0114", "1544-0019", "1544-8119", "0505-136-6500", "", ""],
  ["hyundai-fire", "현대해상", "손해보험", "", "Chrome, Edge", "1588-5656", "1577-3223", "02-2628-4567", "0507-774-6060", "", ""],
  ["hanwha-fire", "한화손해보험", "손해보험", "", "Chrome, Edge", "1566-8000", "1670-1882", "02-316-0111", "0502-779-1004", "", "간병"],
  ["lotte-fire", "롯데손해보험", "손해보험", "", "Chrome, Edge", "1588-3344", "1600-5182", "1599-8260", "0507-333-9999", "", ""],
  ["heungkuk-fire", "흥국화재", "손해보험", "", "Chrome, Edge", "1688-1688", "1688-6997", "031-786-8088", "0504-800-0700", "", ""],
  ["hana-fire", "하나손해보험", "손해보험", "", "Chrome", "1566-3000", "02-6299-6821", "02-6670-8110", "0504-3764-0765", "", ""],
  ["nh-fire", "NH농협손해보험", "손해보험", "", "Chrome", "1644-9000", "1644-9600", "1644-0090", "0505-060-7000", "", ""],
  ["linea-general", "라이나손보", "손해보험", "", "Chrome, Edge", "1566-5800", "1566-5800", "02-6922-5100", "02-6742-3992", "", ""],
  ["aig", "AIG", "손해보험", "", "Chrome, Edge", "1544-2792", "1544-2792", "02-2260-6855", "02-2011-4607", "", ""],
  ["ace", "예별손해보험", "손해보험", "", "Edge", "1588-5959", "1577-3777", "02-3788-2261", "0505-088-1646", "", ""],
  ["hanwha-life", "한화생명", "생명보험", "", "Chrome, Edge", "1588-6363", "1800-6633", "1522-6379", "고객센터에 전화", "", "간병"],
  ["tongyang-life", "동양생명", "생명보험", "", "Chrome", "1577-1004", "080-899-1004", "02-728-9900", "02-3289-4517", "", "간병"],
  ["kyobo-life", "교보생명", "생명보험", "", "Chrome, Edge", "1588-1001", "1588-1636", "02-721-3130", "고객센터에 전화", "", ""],
  ["samsung-life", "삼성생명", "생명보험", "", "Edge", "1588-3114", "1588-3115", "02-311-4500", "고객센터에 전화", "", "간병"],
  ["linea-life", "라이나생명", "생명보험", "", "Chrome, Edge", "1588-0058", "1588-2442", "02-3781-2006", "02-6944-1200", "", ""],
  ["kdb-life", "KDB생명", "생명보험", "", "Chrome", "1588-4040", "1588-4040", "02-6303-2771", "02-2669-6500", "", ""],
  ["im-life", "iM라이프", "생명보험", "", "Chrome", "1588-4770", "1588-4770", "02-2087-9594", "0505-083-5420", "", ""],
  ["miraeasset-life", "미래에셋생명", "생명보험", "", "Chrome, Edge", "1588-0220", "1588-0220", "02-3271-5108", "고객센터에 전화", "", ""],
  ["shinhan-life", "신한라이프", "생명보험", "", "Chrome", "1588-5580", "1522-2285", "02-3455-4119", "고객센터에 전화", "", ""],
  ["kb-life", "KB라이프", "생명보험", "", "Chrome, Edge", "1588-3374", "1566-2730", "1899-3899", "02-390-4629", "", ""],
  ["db-life", "DB생명", "생명보험", "", "Chrome, Edge", "1588-3131", "02-6470-7663", "02-2119-5151", "0505-129-3134", "", ""],
  ["hana-life", "하나생명", "생명보험", "", "Chrome, Edge", "1577-1112", "1577-1112", "02-3709-8602~3", "고객센터에 전화", "", ""],
  ["heungkuk-life", "흥국생명", "생명보험", "", "Chrome", "1588-2288", "1877-7006", "031-786-8088", "고객센터에 전화", "", "간병"],
  ["abl-life", "ABL생명", "생명보험", "", "Chrome, Edge", "1588-6500", "1566-1002", "02-3787-8583", "02-3299-5544", "", ""],
  ["ibk-pension", "IBK연금보험", "생명보험", "", "Chrome, Edge", "1577-4117", "02-2270-1661", "02-2270-1692", "02-2270-1577", "", ""],
  ["nh-life", "NH농협생명", "생명보험", "", "Chrome, Edge", "1544-4000", "1544-4422", "02-3786-8800", "02-6971-6040", "", ""],
  ["metlife", "MetLife", "생명보험", "", "Chrome", "1588-9600", "1588-9609", "1899-0751", "고객센터에 전화", "", ""],
  ["chubb-life", "처브라이프", "생명보험", "", "Chrome", "1599-4600", "1599-4600", "1599-4646", "02-3480-7801", "", ""],
  ["fubon-hyundai", "푸본현대생명", "생명보험", "", "Chrome", "1577-3311", "-", "080-860-1212", "0505-106-0311", "", ""],
  ["bnp-cardif", "BNP파리바카디프", "생명보험", "", "Edge", "1688-1118", "1688-1118", "1577-3435", "고객센터에 전화", "", ""],
  ["aia-life", "AIA생명", "생명보험", "", "Chrome, Edge", "1588-9898", "1588-2513", "1588-2937", "02-2021-4540", "", ""],
  ["mg", "MG새마을금고", "공제", "", "Edge", "1599-9010", "-", "-", "02-3016-7674", "", ""],
  ["the-k", "The-K", "공제", "", "Edge", "1577-3993", "-", "-", "02-3278-9696", "", ""],
  ["post-office", "우체국보험", "공제", "", "Edge", "1599-0100", "-", "-", "0505-005-번호 | 1224(서울) 1427(경인동부) 1428(경인서부) 2271(강원) 1788(충청) 2163(전북) 1921(전남) 1623(부산) 2070(경북) 7116(서귀포) 2296(제주)", "", ""],
  ["suhyup", "수협", "공제", "", "Edge", "1588-4119", "-", "-", "고객센터에 전화", "", ""],
  ["cu", "신협", "공제", "", "Edge", "1544-3030", "-", "-", "고객센터에 전화", "", ""]
];

const EXTERNAL_LINKS = {
  "samsung-fire": {
    system: "https://erp.samsungfire.com",
    terms: "https://www.samsungfire.com/page/VH.REIF0011.do",
    claim: "https://drive.google.com/file/d/1j99Fa5eGfBDJSBVL2uM8mix5jqF5dn3i/view?usp=drive_link"
  },
  "meritz-fire": {
    system: "http://sales.meritzfire.com",
    terms: "https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/",
    claim: "https://drive.google.com/file/d/1BRrqHi1lIisWwpwAirTmu26s3wJmnLus/view?usp=drive_link"
  },
  "db-fire": {
    system: "https://www.mdbins.com",
    terms: "https://www.idbins.com/FWMAIV1534.do",
    claim: "https://drive.google.com/file/d/1m5HurA0NkjcnrA8cISgxFeT6MiUm1Yf1/view?usp=sharing"
  },
  "kb-fire": {
    system: "https://nsales.kbinsure.co.kr/",
    terms: "https://www.kbinsure.co.kr/CG802030001.ec",
    claim: "https://drive.google.com/file/d/1hkfo8d-jtol2gzjMU5-LHmwUyULscFYa/view?usp=sharing"
  },
  "hyundai-fire": {
    system: "https://sp.hi.co.kr",
    terms: "https://www.hi.co.kr/serviceAction.do?view=bin/PA/03/HHPA03010M#none",
    claim: "https://drive.google.com/file/d/1GLDWITf7O1W-xNszfV9oajHqTxpcbRgv/view?usp=sharing"
  },
  "hanwha-fire": {
    system: "http://portal.hwgeneralins.com",
    terms: "https://www.hwgeneralins.com/notice/ir/product-ing01.do",
    claim: "https://drive.google.com/file/d/1qSt7pUiXNh_IruI7KUk4c_w_0tHhcrpz/view?usp=drive_link",
    extraClaim: "https://drive.google.com/file/d/1gWh3panTtHqimOVBcy3qY6rQqC2kWfgm/view?usp=sharing"
  },
  "lotte-fire": {
    system: "http://lottero.lotteins.co.kr",
    terms: "https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp",
    claim: "https://drive.google.com/file/d/1kyoHLbzboKmnVnfEnz_m_Z9jRu3NI14v/view?usp=drive_link"
  },
  "heungkuk-fire": {
    system: "https://sales.heungkukfire.co.kr/",
    terms: "https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do",
    claim: "https://drive.google.com/file/d/1K426vw-3aa3G2G8BpDZ48D3Y-l6Nmeke/view?usp=drive_link"
  },
  "hana-fire": {
    system: "https://sfa.saleshana.com/index.html",
    terms: "https://www.hanainsure.co.kr/w/disclosure/product/saleProduct",
    claim: "https://drive.google.com/file/d/17_J4Sf7K5r7qs-m8PgW5SiYzkJdWVHX0/view?usp=sharing"
  },
  "nh-fire": {
    system: "https://ss.nhfire.co.kr/",
    terms: "https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire",
    claim: "https://drive.google.com/file/d/1yoSLHYJgSNOhTVvKd4DYTuZLZLYrLBd9/view?usp=drive_link"
  },
  "linea-general": {
    system: "https://ga.linagi.com/",
    terms: "https://www.chubb.com/kr-kr/disclosure/product.html",
    claim: "https://drive.google.com/file/d/1-KhNl4wkvzJOgUEB-Io5sGioQCgvuFyh/view?usp=drive_link"
  },
  "aig": {
    system: "https://sso.aig.co.kr/gaLogin/gaLogin.jsp",
    terms: "https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702",
    claim: "https://drive.google.com/file/d/1asRJiyCd2PrYd8MfSUOCcsvqV-n--YGR/view?usp=sharing"
  },
  "ace": {
    system: "https://mganet.mggeneralins.com",
    terms: "https://www.mggeneralins.com/PB031210DM.scp?menuId=MN0803006",
    claim: "https://drive.google.com/file/d/1DV1s6_ZHUOddQg4J_OSuAmdbKoFdjAID/view?usp=drive_link"
  },
  "hanwha-life": {
    system: "https://hmp.hanwhalife.com/online/ga",
    terms: "https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000",
    claim: "https://drive.google.com/file/d/1FKsmRFUqWUn7ickcercCRuN7C4bt916r/view?usp=sharing",
    extraClaim: "https://drive.google.com/file/d/1Zx9mG3Yv7mwW5cKt9uM4riFukbskgW8G/view?usp=sharing"
  },
  "tongyang-life": {
    system: "http://1004.myangel.co.kr",
    terms: "https://www.myangel.co.kr/paging/WE_AC_WEPAAP020100L",
    claim: "https://drive.google.com/file/d/1NsasxhWbu_VhHT9ksYIS1L07bsCej8A8/view?usp=drive_link",
    extraClaim: "https://drive.google.com/file/d/1tblgqK8a3wt2fDGz-OO-Ngn9hlLqj_kB/view?usp=sharing"
  },
  "kyobo-life": {
    system: "https://ga.kyobo.com",
    terms: "https://www.kyobo.com/dgt/web/product-official/all-product/search",
    claim: "https://drive.google.com/file/d/1Pr6k5qkZCyP7Ihbv1Juc1a5MWs3THHUi/view?usp=drive_link"
  },
  "samsung-life": {
    system: "https://connectplus.samsunglife.com:10443/gasso/login",
    terms: "https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M",
    claim: "https://drive.google.com/file/d/1fsElWIjaFefHsuI3FChLVVSkqksYozMq/view?usp=sharing",
    extraClaim: "https://www.samsunglife.com/e_mail/pdf/document/SAMSUNGLIFE_03867_2.pdf"
  },
  "linea-life": {
    system: "https://ga.lina.co.kr",
    terms: "https://www.lina.co.kr/disclosure/product_list.htm?productState=01&productKind=01",
    claim: "https://drive.google.com/file/d/1k7yy3M0KMJh-JZQXkvUMtE8eIWuobHGL/view?usp=drive_link"
  },
  "kdb-life": {
    system: "http://kss.kdblife.co.kr",
    terms: "https://www.kdblife.co.kr/ajax.do?scrId=HDLMA002M02P",
    claim: "https://drive.google.com/file/d/19uSS4v-nixaeOTXClVnRwNVDqyCPQDbN/view?usp=sharing"
  },
  "im-life": {
    system: "https://fgs.dgbfnlife.com:8443",
    terms: "https://www.dgbfnlife.com/BA/BA_A020.do",
    claim: "https://drive.google.com/file/d/1tGY8JI12MTS8R1LJMbEdjlx9E1kdyOHP/view?usp=drive_link"
  },
  "miraeasset-life": {
    system: "http://www.loveageplan.com",
    terms: "https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do",
    claim: "https://drive.google.com/file/d/15LzT84_loJl4tOK1YQ4togAed_tEOACI/view?usp=sharing"
  },
  "shinhan-life": {
    system: "https://ga.shinhanlife.co.kr",
    terms: "https://www.shinhanlife.co.kr/hp/cdhi0010.do",
    claim: "https://drive.google.com/file/d/1lc8ntVCpWPiFIdv6v-ra21Kb7q_-nQ06/view?usp=drive_link"
  },
  "kb-life": {
    system: "https://sfa.kblife.co.kr/",
    terms: "https://www.kblife.co.kr/?/=true&tab=currently-selling",
    claim: "https://drive.google.com/file/d/1i-VvJMoBwM8nX3Xz88e2j9dvfGHJnVVB/view?usp=sharing"
  },
  "db-life": {
    system: "http://etopia.idblife.com",
    terms: "https://www.idblife.com/notice/product/sale",
    claim: "https://www.idblife.com/support/guide/acbf_clm"
  },
  "hana-life": {
    system: "https://ga.hanalife.co.kr",
    terms: "https://hanalife.co.kr/anm/product/allProduct.do?status=on",
    claim: "https://drive.google.com/file/d/1n9Vh-XKuqLEyqDVqmLmDeK2MMODnkKET/view?usp=sharing"
  },
  "heungkuk-life": {
    system: "https://sales.heungkuklife.co.kr/",
    terms: "https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y",
    claim: "https://drive.google.com/file/d/1ikE6XM8vERcpL9LowLclbnN40XT5kGQn/view?usp=sharing",
    extraClaim: "https://www.heungkuklife.co.kr/jsps/cyber/file/240517_caregiverUseConfirm.pdf"
  },
  "abl-life": {
    system: "http://ga.abllife.co.kr",
    terms: "https://www.abllife.co.kr/st/pban/prdtPban/whlPrdt/whlPrdt1/whlPrdt11?page=index",
    claim: "https://drive.google.com/file/d/1AkFt-PPL1LeYoU6wQEQ62DrTDz08Ii9i/view?usp=sharing"
  },
  "ibk-pension": {
    system: "https://sf.ibki.co.kr/",
    terms: "https://www.ibki.co.kr/process/HP_PBANO_PDT_SP_INDV",
    claim: "https://www.ibki.co.kr/process/HP_CSCETR_POSN_DOC_INS_LIST?bltb_cod=SC000014&sctn=in&TAB=in"
  },
  "nh-life": {
    system: "https://sfa.nhlife.co.kr:8443/",
    terms: "https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl",
    claim: "https://drive.google.com/file/d/1ZokHkStvKMfUUUCNM4ajeB_DVzi7h1CT/view?usp=drive_link"
  },
  "metlife": {
    system: "http://metplus.metlife.co.kr",
    terms: "https://brand.metlife.co.kr/pn/paReal/insuProductDisclMain.do",
    claim: "https://drive.google.com/file/d/1zVzQV5r-6wn1vmqTyqObZONSfqnbZpJd/view?usp=sharing"
  },
  "chubb-life": {
    system: "http://esmart.chubblife.co.kr",
    terms: "https://www.chubblife.co.kr/front/official/sale/list.do",
    claim: "https://www.chubblife.co.kr/front/ctmcenter/insurance/listDocu.do"
  },
  "fubon-hyundai": {
    system: "https://ez.fubonhyundai.com/",
    terms: "https://www.fubonhyundai.com/#CUSI150102010101",
    claim: "https://www.fubonhyundai.com/#CUSI070100000000"
  },
  "bnp-cardif": {
    system: "http://ga.cardif.co.kr",
    terms: "https://www.cardif.co.kr/disclosure/papag101.do",
    claim: "https://www.cardif.co.kr/customer-center/hcwgi001.do"
  },
  "aia-life": {
    system: "https://imap.aia.co.kr",
    terms: "https://www.aia.co.kr/ko/our-products.html",
    claim: "https://drive.google.com/file/d/1QQ2sU3-WhjRyN2HI9xwh-kj6HVxWfcUg/view?usp=sharing"
  },
  "mg": {
    system: "https://insure.kfcc.co.kr/",
    terms: "https://insu.kfcc.co.kr/ino/inoGuide.do",
    claim: "http://xn--989an19aika.com/pdf/새마을금고.pdf"
  },
  "the-k": {
    system: "https://www.ktcu.or.kr/MH/MH-P010M01.do",
    terms: "https://www.ktcu.or.kr/IS/IS-P170M01.do",
    claim: "http://xn--989an19aika.com/pdf/교직원공제회.pdf"
  },
  "post-office": {
    system: "https://epostlife.go.kr/LNLNDM10DM.do",
    terms: "https://mall.epostbank.go.kr/IPPSKE0000.do",
    claim: "https://epostlife.go.kr/cms/docimg/i-board/form/2023/02/20230221.pdf"
  },
  "suhyup": {
    system: "https://www.suhyup-bank.com/",
    claim: "https://psmb.suhyup-bank.com/smart/page/dhp/cmn/dhp100200j.jsp?filePathNm=../DIGITALPDF/ins_dmnd.pdf"
  },
  "cu": {
    system: "https://openbank.cu.co.kr/?sub=6000",
    terms: "https://openbank.cu.co.kr/?sub=6000",
    claim: "http://xn--989an19aika.com/pdf/신협.pdf"
  }
};

const GUIDES = [
  ["claim-documents", "보험금 청구서 확인 가이드", "보험금 청구서, 개인정보 동의서, 진료비 영수증, 진료비 세부내역서를 청구 유형별로 확인하는 방법입니다."],
  ["fax", "보험사 청구팩스 확인 가이드", "팩스번호는 보험사와 접수 부서에 따라 달라질 수 있어, 발송 전 고객센터와 공식 안내를 함께 확인해야 합니다."],
  ["monitoring", "인콜 모니터링 연락처 정리", "설계사 업무에서 자주 쓰는 인콜 모니터링, 전산 헬프데스크, 고객센터 번호를 구분해서 보는 기준입니다."],
  ["insurance-terms", "보험 약관 확인 가이드", "상품명, 가입일, 담보명에 따라 약관이 달라지므로 공시실과 증권 정보를 함께 확인하는 절차입니다."]
];

const ARTICLES = [
  {
    slug: "insurance-claim-documents-checklist-2026",
    category: "청구서",
    title: "보험금 청구서류 기본 체크리스트 2026",
    excerpt: "실손, 진단, 수술, 입원 보험금 청구 전에 공통으로 확인해야 하는 서류와 누락되기 쉬운 항목을 정리했습니다.",
    date: "2026-05-25",
    sections: [
      ["먼저 구분할 것", "보험금 청구는 보험사 이름보다 청구 유형을 먼저 나눠야 합니다. 실손의료비, 진단비, 수술비, 입원일당, 배상책임, 치아보험은 필요한 서류가 서로 다릅니다. 같은 병원 영수증이라도 어떤 담보로 청구하는지에 따라 추가 서류가 필요할 수 있습니다."],
      ["공통으로 준비하는 서류", "대부분의 보험금 청구에는 보험금 청구서, 개인정보 처리 동의서, 신분증 사본, 수익자 통장 사본, 진료비 영수증, 진료비 세부내역서가 기본으로 사용됩니다. 미성년자나 대리 청구는 가족관계증명서, 위임장, 인감 관련 서류가 추가될 수 있습니다."],
      ["제출 전 점검", "서류의 환자명, 진료일, 병명 또는 질병분류코드, 병원 직인, 발급일이 누락되지 않았는지 확인합니다. 서류가 흐리게 촬영되거나 일부가 잘리면 보완 요청이 생길 수 있으므로 원본 전체가 보이도록 스캔하거나 촬영하는 것이 좋습니다."]
    ],
    bullets: ["청구 유형을 먼저 구분", "보험사 공식 양식 확인", "진료비 영수증과 세부내역서 함께 준비", "팩스 발송 후 접수 여부 확인"]
  },
  {
    slug: "dental-insurance-claim-documents-guide",
    category: "치아보험",
    title: "치아보험 청구서류 준비 방법",
    excerpt: "치아보험은 일반 실손 청구와 달리 치료확인서, 치과 진료기록, 파노라마 사진 등이 요구될 수 있습니다.",
    date: "2026-05-24",
    sections: [
      ["치아보험이 헷갈리는 이유", "치아보험은 충전, 크라운, 임플란트, 브릿지, 틀니, 치주 치료처럼 치료 항목별 보장 기준이 다릅니다. 단순히 영수증만 제출하면 치료 내용 확인이 어려워 보완 요청이 생길 수 있습니다."],
      ["자주 요구되는 자료", "보험사별 양식의 치과치료확인서, 진료비 영수증, 진료비 세부내역서, 진료기록 사본, 엑스레이 또는 파노라마 사진이 필요할 수 있습니다. 치료 전후 상태가 중요한 담보는 진료기록과 영상 자료의 역할이 큽니다."],
      ["청구 전 확인할 기준", "가입 후 면책기간, 감액기간, 보철치료 개수 제한, 치료 원인, 기존 치아 상태를 확인해야 합니다. 약관 기준에 따라 보장 여부가 달라질 수 있으므로 가입 당시 약관을 함께 보는 것이 안전합니다."]
    ],
    bullets: ["치료 항목별 요구서류 확인", "치과치료확인서 양식 확인", "면책기간과 감액기간 점검", "영상 자료 필요 여부 확인"]
  },
  {
    slug: "insurance-fax-submit-before-check",
    category: "팩스",
    title: "보험금 청구팩스 발송 전 확인할 것",
    excerpt: "팩스번호, 발송자 정보, 사고번호, 접수 확인까지 보험금 청구팩스에서 자주 놓치는 부분을 정리했습니다.",
    date: "2026-05-23",
    sections: [
      ["팩스번호는 왜 다시 확인해야 하나요", "보험사 대표 팩스와 보험금 청구 전용 팩스가 다를 수 있습니다. 장기보험, 자동차보험, 일반보험, 단체보험처럼 부서가 나뉘면 접수 번호도 달라질 수 있어 발송 전 최신 안내를 확인해야 합니다."],
      ["표지에 적으면 좋은 정보", "피보험자명, 연락처, 생년월일, 계약번호 또는 사고번호, 청구 유형, 총 발송 매수는 표지에 적어두는 것이 좋습니다. 여러 명의 서류를 한 번에 보내는 경우에는 사람별로 구분이 필요합니다."],
      ["발송 후 접수 확인", "팩스 송신 성공은 보험사 접수 완료와 다릅니다. 접수 문자, 앱 접수 상태, 고객센터 확인 중 하나로 정상 접수 여부를 확인해야 보완 요청을 놓치지 않습니다."]
    ],
    bullets: ["보험금 청구 전용 팩스 확인", "발송 매수와 수신번호 확인", "피보험자 정보 표기", "접수 완료 여부 재확인"]
  },
  {
    slug: "insurance-terms-how-to-find",
    category: "약관",
    title: "보험 약관 찾는 법과 가입일 기준 확인",
    excerpt: "보험 약관은 현재 판매 상품이 아니라 가입 당시 상품명과 특약명을 기준으로 찾아야 합니다.",
    date: "2026-05-22",
    sections: [
      ["가입 당시 약관이 중요한 이유", "보험금 판단은 현재 판매 중인 상품 설명이 아니라 계약 체결 당시 적용된 약관을 기준으로 하는 경우가 많습니다. 같은 상품명처럼 보여도 판매 시기와 특약 구성에 따라 보장 문구가 달라질 수 있습니다."],
      ["찾을 때 필요한 정보", "상품명, 증권번호, 계약일, 갱신 여부, 특약명, 담보명을 준비하면 공시실에서 약관을 찾기 쉽습니다. 상품명이 길거나 개정 이력이 많은 경우에는 증권의 정확한 명칭을 그대로 검색하는 것이 좋습니다."],
      ["함께 보관하면 좋은 자료", "약관 원문, 상품설명서, 청약서, 보험증권, 보험금 지급 안내문을 함께 보관하면 이후 문의나 분쟁 상황에서 사실관계를 확인하기 쉽습니다."]
    ],
    bullets: ["가입일 기준 확인", "상품명과 특약명 확인", "보험증권과 약관 함께 보관", "공식 공시실 우선 확인"]
  },
  {
    slug: "loss-insurance-medical-bill-guide",
    category: "실손보험",
    title: "실손보험 청구 시 영수증과 세부내역서 차이",
    excerpt: "진료비 영수증과 진료비 세부내역서는 역할이 다릅니다. 실손 청구에서 각각 왜 필요한지 정리했습니다.",
    date: "2026-05-21",
    sections: [
      ["진료비 영수증의 역할", "진료비 영수증은 총 진료비, 본인부담금, 급여와 비급여 구분을 확인하는 자료입니다. 실제로 얼마를 결제했는지 확인하는 기본 서류로 사용됩니다."],
      ["세부내역서의 역할", "진료비 세부내역서는 어떤 처치, 검사, 약제, 재료대가 포함되었는지 항목별로 보여줍니다. 비급여 항목 심사나 보완 요청에서 중요한 자료가 됩니다."],
      ["청구 금액별 차이", "소액 청구는 간단한 서류로 접수되는 경우도 있지만 보험사 기준, 청구 이력, 진료 항목에 따라 추가 서류가 요구될 수 있습니다. 반복 청구나 고액 청구는 진단서, 소견서, 검사결과지가 필요할 수 있습니다."]
    ],
    bullets: ["영수증은 결제 금액 확인", "세부내역서는 항목 확인", "비급여 항목은 보완 가능성 있음", "고액 청구는 추가 서류 준비"]
  },
  {
    slug: "insurance-helpdesk-vs-customer-center",
    category: "전산",
    title: "전산 헬프데스크와 고객센터 차이",
    excerpt: "보험사 전산 오류는 고객센터가 아니라 전산 헬프데스크에서 처리해야 하는 경우가 많습니다.",
    date: "2026-05-20",
    sections: [
      ["고객센터의 역할", "고객센터는 계약자와 피보험자 문의, 보험금 청구, 계약 변경, 일반 상담을 담당합니다. 일반 소비자가 이용하는 대표 창구로 보는 것이 맞습니다."],
      ["전산 헬프데스크의 역할", "전산 헬프데스크는 설계사 전산 접속, 인증서, 프로그램 설치, 권한, 화면 오류 같은 업무 시스템 문제를 처리합니다. 접속 화면 오류나 권한 문제는 고객센터보다 헬프데스크가 빠를 수 있습니다."],
      ["문의 전 준비할 정보", "사용 중인 브라우저, 오류 화면, 사번 또는 지점 정보, 접속 URL, 발생 시각을 준비하면 문제 해결이 빨라집니다. 가능하면 오류 화면을 캡처해 두는 것이 좋습니다."]
    ],
    bullets: ["고객 문의는 고객센터", "전산 오류는 헬프데스크", "브라우저와 오류 화면 확인", "지점 권한 정보 준비"]
  },
  {
    slug: "in-call-monitoring-check-guide",
    category: "모니터링",
    title: "인콜 모니터링 진행 전 확인사항",
    excerpt: "완전판매 확인과 계약 확인 과정에서 인콜 모니터링 전 준비해야 할 정보를 정리했습니다.",
    date: "2026-05-19",
    sections: [
      ["인콜 모니터링의 목적", "인콜 모니터링은 계약자가 상품 설명을 듣고 주요 내용을 이해했는지 확인하는 절차와 연결됩니다. 보험사와 상품에 따라 질문 항목과 진행 방식은 다를 수 있습니다."],
      ["준비할 정보", "계약자명, 연락 가능한 번호, 상품명, 청약일, 담당 설계사 정보, 납입 기간, 주요 담보를 확인해 두면 통화가 원활합니다."],
      ["주의할 점", "모니터링 번호는 고객센터와 다를 수 있고, 통화가 완료되지 않으면 계약 진행이 지연될 수 있습니다. 일정이 맞지 않을 때는 담당자 또는 보험사 안내를 통해 재통화 가능 시간을 확인해야 합니다."]
    ],
    bullets: ["계약자 연락처 확인", "상품명과 청약일 준비", "모니터링 번호 구분", "미완료 시 재통화 확인"]
  },
  {
    slug: "insurance-company-official-link-check",
    category: "공식링크",
    title: "보험사 공식 링크 확인하는 방법",
    excerpt: "검색 광고와 비공식 자료가 섞여 있을 때 보험사 공식 사이트와 공시실 링크를 구분하는 기준입니다.",
    date: "2026-05-18",
    sections: [
      ["공식 링크를 봐야 하는 이유", "보험 약관, 청구서, 고객센터 번호는 외부 블로그나 오래된 자료에서 틀릴 수 있습니다. 특히 팩스번호와 서류 양식은 바뀔 수 있어 공식 사이트 확인이 중요합니다."],
      ["확인 기준", "도메인, 회사명, 보안 연결, 공시실 메뉴, 고객센터 메뉴를 함께 봅니다. 파일 다운로드 링크만 따로 공유된 경우에는 원래 게시된 공식 페이지가 있는지 확인하는 것이 좋습니다."],
      ["오래된 링크 처리", "보험사 사이트 개편으로 기존 링크가 깨질 수 있습니다. 이 경우 회사명과 '공시실', '보험금 청구서', '고객센터'를 함께 검색해 최신 페이지로 이동합니다."]
    ],
    bullets: ["도메인과 회사명 확인", "공시실 메뉴 우선", "파일 단독 링크 주의", "깨진 링크는 최신 메뉴 검색"]
  }
];

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  }
};

function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);

  if (path === "/robots.txt") return text(robots(env), "text/plain; charset=utf-8");
  if (path === "/sitemap.xml") return text(sitemap(env), "application/xml; charset=utf-8");
  if (path === "/rss.xml") return text(rss(env), "application/rss+xml; charset=utf-8");
  if (path === "/" || path === "") return page("보험사 전산 링크와 보험금 청구 자료센터", homeHtml(env), env, {
    description: "보험사 전산, 고객센터, 인콜 모니터링, 전산 헬프데스크, 보험금 청구팩스, 약관 확인, 청구서 정보를 표로 정리한 독립 정보 사이트입니다.",
    canonical: "/"
  });
  if (path === "/compare") return page("보험사 업무 비교표", compareHtml("전체 보험회사", INSURERS), env, { description: "손해보험, 생명보험, 공제회사 전산과 청구 업무 정보를 한 표로 비교합니다.", canonical: "/compare/" });
  if (path === "/category/fire") return page("손해보험 업무 링크", compareHtml("손해보험", INSURERS.filter((row) => row[2] === "손해보험")), env, { description: "손해보험사 전산, 고객센터, 청구팩스, 약관 확인 경로를 정리했습니다.", canonical: "/category/fire/" });
  if (path === "/category/life") return page("생명보험 업무 링크", compareHtml("생명보험", INSURERS.filter((row) => row[2] === "생명보험")), env, { description: "생명보험사 전산, 고객센터, 청구팩스, 약관 확인 경로를 정리했습니다.", canonical: "/category/life/" });
  if (path === "/category/mutual") return page("공제회사 업무 링크", compareHtml("공제회사", INSURERS.filter((row) => row[2] === "공제")), env, { description: "공제회사 홈페이지, 고객센터, 청구팩스와 약관 확인 경로를 정리했습니다.", canonical: "/category/mutual/" });

  const guide = GUIDES.find(([slug]) => path === `/${slug}`);
  if (guide) return page(guide[1], guideHtml(guide), env, {
    description: guide[2],
    canonical: `/${guide[0]}/`
  });

  const articleMatch = path.match(/^\/articles\/([^/]+)$/);
  if (articleMatch) {
    const article = ARTICLES.find((item) => item.slug === articleMatch[1]);
    if (article) return page(article.title, articleHtml(article), env, {
      description: article.excerpt,
      canonical: `/articles/${article.slug}/`
    });
  }

  const insurer = INSURERS.find(([slug]) => path === `/company/${slug}`);
  if (insurer) return page(`${insurer[1]} 보험 업무 정보`, insurerHtml(insurer), env, {
    description: `${insurer[1]} 고객센터, 전산, 청구팩스, 약관 확인, 보험금 청구서 준비 정보를 정리했습니다.`,
    canonical: `/company/${insurer[0]}/`
  });

  if (path === "/about") return page("소개", aboutHtml(env), env, { description: "보험업무 자료센터 소개와 운영 목적을 안내합니다.", canonical: "/about/" });
  if (path === "/contact") return page("문의", contactHtml(env), env, { description: "보험업무 자료센터 문의 및 오류 제보 안내입니다.", canonical: "/contact/" });
  if (path === "/privacy") return page("개인정보처리방침", privacyHtml(env), env, { description: "보험업무 자료센터 개인정보처리방침입니다.", canonical: "/privacy/" });
  if (path === "/terms") return page("이용약관", termsHtml(env), env, { description: "보험업무 자료센터 이용약관입니다.", canonical: "/terms/" });

  return page("페이지를 찾을 수 없습니다", `<section class="narrow"><h1>페이지를 찾을 수 없습니다</h1><p>요청하신 주소의 페이지가 없거나 이동되었습니다.</p><p><a class="text-link" href="/">메인 표로 이동</a></p></section>`, env, { status: 404, robots: "noindex, follow" });
}

function homeHtml(env) {
  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="eyebrow">보험 실무 링크 모음</p>
        <h1>보험사 전산, 고객센터, 청구팩스, 약관, 청구서 바로가기</h1>
        <p>보험설계사와 보험금 청구 실무자가 자주 확인하는 정보를 한 화면 표로 정리했습니다. 광고성 추천이 아니라 공식 사이트와 공개 연락처를 빠르게 찾기 위한 자료실입니다.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#decision-guide">청구 전 확인 순서 보기</a>
          <a class="secondary-btn" href="/compare/">보험사 비교표 보기</a>
        </div>
        <div class="hero-check" aria-label="보험 업무 전 핵심 체크 항목">
          <div><strong>1. 회사 구분</strong><span>손보·생보·공제 확인</span></div>
          <div><strong>2. 청구 유형</strong><span>실손·진단·치아·배상</span></div>
          <div><strong>3. 접수 경로</strong><span>앱·팩스·우편·방문</span></div>
          <div><strong>4. 약관 기준</strong><span>가입일·상품명 확인</span></div>
        </div>
      </div>
    </section>
    ${decisionGuideHtml()}
    ${trustBarHtml()}
    <section class="table-section">
      <div class="section-head">
        <h2>보험회사 전산 및 청구 자료 표</h2>
        <p>브라우저 권장 환경, 고객센터, 모니터링, 전산 헬프데스크, 청구팩스, 약관 확인 링크를 함께 확인할 수 있습니다.</p>
      </div>
      ${insurerTableHtml()}
    </section>
    ${quickLinksHtml()}
    <section class="topics">
      <header class="block-header">
        <h2>최신 가이드</h2>
        <p>보험금 청구, 전산, 팩스, 약관 확인 과정에서 자주 필요한 실무 기준을 정리했습니다.</p>
      </header>
      <div class="guide-grid">
        ${ARTICLES.map((article) => `<a class="guide-card" href="/articles/${article.slug}/"><span>${esc(article.category)}</span><h2>${esc(article.title)}</h2><p>${esc(article.excerpt)}</p><div class="card-meta"><time datetime="${esc(article.date)}">${esc(article.date)}</time><em>자료센터</em></div></a>`).join("")}
      </div>
    </section>
    ${faqHtml()}
    <section class="final-cta">
      <div>
        <h2>필요한 번호와 서류를 확인했다면 공식 채널에서 최종 접수하세요</h2>
        <p>본 사이트는 정보를 정리하는 자료실이며 보험사 공식 접수처가 아닙니다. 실제 접수 전 최신 안내를 다시 확인해 주세요.</p>
      </div>
      <a class="primary-btn" href="/compare/">전체 비교표 다시 보기</a>
    </section>
    <section class="content-block">
      <h2>이 사이트를 만든 기준</h2>
      <p>보험금 청구나 보험사 전산 업무는 검색 결과가 오래되었거나 광고성 페이지로 섞여 있어 필요한 번호와 양식을 빠르게 찾기 어렵습니다. 본 사이트는 회사별 기본 연락처와 공식 확인 경로를 표 형태로 모아 반복 업무 시간을 줄이는 것을 목표로 합니다.</p>
      <p>표의 자료는 공개된 공식 웹페이지와 고객센터 안내를 기준으로 정리하며, 청구서 파일 자체를 임의로 재배포하기보다 공식 확인 경로를 안내하는 방식으로 운영합니다.</p>
    </section>
  `;
}

function decisionGuideHtml() {
  const rows = [
    ["보험금 청구", "청구 유형 → 보험사 → 접수 경로", "진료비 영수증, 세부내역서, 진단서, 청구서", "팩스번호만 보고 바로 발송하는 것"],
    ["치아보험 청구", "치료 항목 → 치과 서류 → 보험사 양식", "치료확인서, 진료기록, 파노라마 사진 가능 여부", "일반 실손 서류만 준비하는 것"],
    ["약관 확인", "가입일 → 상품명 → 담보명", "증권, 청약서, 특약명, 공시실 자료", "현재 판매 약관만 기준으로 보는 것"],
    ["전산 접속", "회사 전산 → 권장 브라우저 → 헬프데스크", "브라우저 버전, 인증서, 지점 권한", "고객센터와 전산 헬프를 혼동하는 것"],
    ["팩스 접수", "수신번호 → 발송자 정보 → 접수 확인", "피보험자 정보, 연락처, 사고번호, 발송 결과", "발송 완료만 보고 접수됐다고 판단하는 것"]
  ];
  return `
    <section id="decision-guide" class="decision">
      <header class="block-header">
        <p class="eyebrow">보험 업무 전 5분 확인</p>
        <h2>청구와 전산 업무는 이 순서로 보면 덜 헷갈립니다</h2>
        <p>회사별 번호를 찾기 전에 청구 유형과 접수 경로를 먼저 나누면 잘못된 서류 제출을 줄일 수 있습니다.</p>
      </header>
      <div class="decision-table">
        <table>
          <thead><tr><th>상황</th><th>우선순위</th><th>먼저 확인할 것</th><th>피해야 할 판단</th></tr></thead>
          <tbody>${rows.map((row) => `<tr><th scope="row">${esc(row[0])}</th><td>${esc(row[1])}</td><td>${esc(row[2])}</td><td>${esc(row[3])}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function trustBarHtml() {
  return `
    <section class="trust-bar" aria-label="사이트 핵심 정보">
      <div><p class="trust-num">${INSURERS.length}곳</p><p class="trust-label">보험사·공제회사</p><p>전산 및 접수 정보 정리</p></div>
      <div><p class="trust-num">4개</p><p class="trust-label">핵심 가이드</p><p>청구서·팩스·모니터링·약관</p></div>
      <div><p class="trust-num">공식</p><p class="trust-label">확인 경로 중심</p><p>외부 링크는 공식 안내 우선</p></div>
      <div><p class="trust-num">독립</p><p class="trust-label">정보 사이트</p><p>보험사 공식 사이트 아님</p></div>
    </section>
  `;
}

function faqHtml() {
  const faqs = [
    ["보험금 청구팩스만 알면 바로 접수해도 되나요?", "팩스번호가 부서별로 다를 수 있어 발송 전 보험사 고객센터 또는 공식 안내에서 최신 번호를 확인하는 것이 좋습니다."],
    ["청구서 양식은 모든 보험사가 같나요?", "아닙니다. 보험사, 상품 종류, 청구 유형에 따라 양식과 동의서가 다를 수 있습니다."],
    ["약관은 현재 홈페이지에 있는 최신 약관을 보면 되나요?", "보험금 판단은 일반적으로 가입 당시 약관을 기준으로 하므로 가입일과 상품명을 함께 확인해야 합니다."],
    ["이 사이트에서 보험금 지급 여부를 판단해주나요?", "아닙니다. 본 사이트는 자료 위치를 정리하는 정보 사이트이며, 지급 판단은 보험사와 관련 전문가의 검토가 필요합니다."]
  ];
  return `
    <section class="faq">
      <header class="block-header">
        <h2>자주 묻는 질문</h2>
        <p>보험 업무 자료를 찾을 때 자주 헷갈리는 부분을 정리했습니다.</p>
      </header>
      <div class="faq-list">
        ${faqs.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary><span>Q.</span> ${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
      </div>
    </section>
  `;
}

function compareHtml(title, rows) {
  return `
    <article class="narrow wide">
      <p class="eyebrow">보험 업무 비교</p>
      <h1>${esc(title)} 전산 및 청구 자료 비교표</h1>
      <p class="lead">회사별 전산 링크, 고객센터, 인콜 모니터링, 헬프데스크, 청구팩스, 약관 확인 경로를 한 번에 비교할 수 있습니다.</p>
      ${insurerTableHtml(rows)}
    </article>
  `;
}

function quickLinksHtml() {
  const links = [
    ["보험금 청구서", "/claim-documents/"],
    ["청구팩스", "/fax/"],
    ["모니터링", "/monitoring/"],
    ["약관 확인", "/insurance-terms/"]
  ];
  return `<nav class="quick-links" aria-label="주요 자료">${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>`;
}

function insurerTableHtml(rows = INSURERS) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>보험회사 전산</th>
            <th>구분</th>
            <th>브라우저</th>
            <th>고객센터</th>
            <th>인콜 모니터링</th>
            <th>전산 헬프데스크</th>
            <th>보험금 청구팩스</th>
            <th>약관확인</th>
            <th>청구서 확인</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((item, index) => insurerRowHtml(item, index)).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function insurerRowHtml(item, index) {
  const [slug, name, type, systemUrl, browser, center, monitoring, helpdesk, fax, termsUrl] = item;
  const links = EXTERNAL_LINKS[slug] || {};
  const systemHref = links.system || systemUrl;
  const termsHref = links.terms || termsUrl;
  const claimHref = links.claim;
  const shaded = index % 2 ? " class=\"shaded\"" : "";
  return `
    <tr${shaded}>
      <td><a class="company" href="/company/${slug}/">${esc(name)}</a>${systemHref ? `<a class="small-link" href="${esc(systemHref)}" rel="nofollow noopener" target="_blank">전산 바로가기</a>` : ""}</td>
      <td>${esc(type)}</td>
      <td>${browserIcons(browser)}</td>
      <td>${phoneLink(center)}</td>
      <td>${phoneLink(monitoring)}</td>
      <td>${phoneLink(helpdesk)}</td>
      <td>${phoneLink(fax)}</td>
      <td>${externalHandLink(termsHref, `${name} 약관확인`)}</td>
      <td>${externalHandLink(claimHref, `${name} 청구서`)}${links.extraClaim ? `<a class="extra-link" href="${esc(links.extraClaim)}" rel="nofollow noopener" target="_blank">간병</a>` : ""}</td>
    </tr>
  `;
}

function guideHtml(guide) {
  const [slug, title, description] = guide;
  const guideBody = {
    "claim-documents": [
      "보험금 청구서 확인은 회사명, 계약 종류, 사고 유형을 먼저 나누는 것이 중요합니다. 같은 보험사라도 실손, 진단, 수술, 입원, 치아, 배상책임 청구서가 다를 수 있습니다.",
      "기본적으로 보험금 청구서, 개인정보 처리 동의서, 신분증 사본, 통장 사본, 진료비 영수증, 진료비 세부내역서, 진단서 또는 소견서를 확인합니다.",
      "치아보험은 치료확인서, 치과 진료기록, 파노라마 사진 등 추가 자료가 필요한 경우가 있어 보험사 공식 양식을 우선 확인해야 합니다."
    ],
    fax: [
      "보험금 청구팩스는 회사 대표번호와 부서별 번호가 다를 수 있습니다. 일부 보험사는 모바일 앱, 홈페이지, 우편 접수를 우선 안내하기도 합니다.",
      "팩스 발송 전에는 수신번호, 피보험자명, 주민등록번호 앞자리, 사고번호 또는 계약번호, 연락처가 누락되지 않았는지 확인합니다.",
      "발송 후에는 접수 문자나 고객센터 확인을 통해 정상 접수 여부를 확인하는 것이 좋습니다."
    ],
    monitoring: [
      "인콜 모니터링은 신계약, 완전판매, 설명의무 확인 등 영업 과정에서 필요한 연락 절차와 연결됩니다.",
      "보험사별 모니터링 번호는 고객센터와 다를 수 있으며, 회사 내부 전산 또는 담당 지점 안내를 통해 최신 번호를 확인해야 합니다.",
      "통화 전에는 계약자 연락처, 상품명, 청약일, 담당자 정보를 준비하면 확인 시간이 줄어듭니다."
    ],
    "insurance-terms": [
      "보험 약관은 현재 판매 상품 기준이 아니라 가입 당시 약관을 기준으로 확인해야 합니다.",
      "상품명, 증권번호, 가입일, 담보명, 특약명을 함께 확인하면 공시실에서 정확한 약관을 찾기 쉽습니다.",
      "분쟁이나 보험금 판단이 필요한 경우에는 약관 원문, 상품설명서, 청약서, 증권을 함께 보관하는 것이 좋습니다."
    ]
  }[slug];

  return `
    <article class="narrow">
      <p class="eyebrow">보험 업무 자료</p>
      <h1>${esc(title)}</h1>
      <p class="lead">${esc(description)}</p>
      ${guideBody.map((p) => `<p>${esc(p)}</p>`).join("")}
      <h2>회사별 빠른 확인</h2>
      ${insurerTableHtml()}
    </article>
  `;
}

function articleHtml(article) {
  return `
    <article class="narrow article">
      <p class="eyebrow">${esc(article.category)}</p>
      <h1>${esc(article.title)}</h1>
      <p class="lead">${esc(article.excerpt)}</p>
      <p class="article-meta">최종 수정: <time datetime="${esc(article.date)}">${esc(article.date)}</time> · 보험업무 자료센터</p>
      <div class="article-checklist">
        <h2>핵심 체크리스트</h2>
        <ul>${article.bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
      ${article.sections.map(([heading, content]) => `<section><h2>${esc(heading)}</h2><p>${esc(content)}</p></section>`).join("")}
      <section>
        <h2>회사별 자료 바로 확인</h2>
        <p>아래 전체 비교표에서 보험사별 전산, 고객센터, 청구팩스, 약관확인, 청구서 링크를 함께 확인할 수 있습니다.</p>
        <p><a class="text-link" href="/compare/">보험사 전체 비교표 보기</a></p>
      </section>
    </article>
  `;
}

function insurerHtml(item) {
  const [slug, name, type, systemUrl, browser, center, monitoring, helpdesk, fax, termsUrl, note] = item;
  const links = EXTERNAL_LINKS[slug] || {};
  const systemHref = links.system || systemUrl;
  const termsHref = links.terms || termsUrl;
  const claimHref = links.claim;
  return `
    <article class="narrow">
      <p class="eyebrow">${esc(type)}</p>
      <h1>${esc(name)} 보험 업무 정보</h1>
      <p class="lead">${esc(name)} 전산, 고객센터, 인콜 모니터링, 헬프데스크, 보험금 청구팩스, 약관 확인 경로를 정리했습니다.</p>
      <dl class="info-list">
        <div><dt>전산 링크</dt><dd>${systemHref ? `<a href="${esc(systemHref)}" rel="nofollow noopener" target="_blank">${esc(systemHref)}</a>` : "확인 필요"}</dd></div>
        <div><dt>권장 브라우저</dt><dd>${esc(browser)}</dd></div>
        <div><dt>고객센터</dt><dd>${phoneLink(center)}</dd></div>
        <div><dt>인콜 모니터링</dt><dd>${phoneLink(monitoring)}</dd></div>
        <div><dt>전산 헬프데스크</dt><dd>${phoneLink(helpdesk)}</dd></div>
        <div><dt>보험금 청구팩스</dt><dd>${phoneLink(fax)}</dd></div>
        <div><dt>약관 확인</dt><dd>${termsHref ? `<a href="${esc(termsHref)}" rel="nofollow noopener" target="_blank">약관확인 바로가기</a>` : "확인 필요"}</dd></div>
        <div><dt>청구서</dt><dd>${claimHref ? `<a href="${esc(claimHref)}" rel="nofollow noopener" target="_blank">청구서 바로가기</a>` : "확인 필요"}${links.extraClaim ? ` · <a href="${esc(links.extraClaim)}" rel="nofollow noopener" target="_blank">간병 양식</a>` : ""}</dd></div>
      </dl>
      <h2>청구 전 체크</h2>
      <p>${esc(note)}</p>
      <p>접수 방식과 필요 서류는 보험 종류, 사고 내용, 가입 시점에 따라 달라질 수 있습니다. 실제 청구 전에는 ${esc(name)} 공식 고객센터와 홈페이지의 최신 안내를 기준으로 확인해 주세요.</p>
      <p><a class="text-link" href="/">전체 보험사 표로 돌아가기</a></p>
    </article>
  `;
}

function aboutHtml(env) {
  return `<article class="narrow"><h1>소개</h1><p>${esc(siteName(env))}는 보험사 전산, 고객센터, 청구팩스, 약관 확인 경로를 표로 정리하는 독립 정보 사이트입니다.</p><p>본 사이트는 특정 보험사의 공식 사이트가 아니며, 보험 가입 권유나 보험금 지급 판단을 제공하지 않습니다. 사용자는 최종 확인을 각 보험사 공식 채널에서 해야 합니다.</p><p>운영 목적은 반복적으로 필요한 공개 정보를 빠르게 찾을 수 있도록 정리하는 것입니다.</p></article>`;
}

function contactHtml(env) {
  return `<article class="narrow"><h1>문의</h1><p>정보 수정, 링크 오류, 연락처 변경 제보는 아래 이메일로 보내주세요.</p><p><a class="text-link" href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a></p><p>제보 시 회사명, 수정이 필요한 항목, 확인 가능한 공식 출처 URL을 함께 보내주시면 반영 검토가 빠릅니다.</p></article>`;
}

function privacyHtml(env) {
  return `<article class="narrow"><h1>개인정보처리방침</h1><p>${esc(siteName(env))}는 회원가입 기능을 제공하지 않으며, 방문자의 민감한 개인정보를 직접 수집하지 않습니다.</p><h2>수집하는 정보</h2><p>문의 메일을 보내는 경우 답변을 위해 이메일 주소와 문의 내용을 확인할 수 있습니다. 서버 운영 과정에서 접속 로그, 브라우저 정보, 접속 시간이 자동 기록될 수 있습니다.</p><h2>이용 목적</h2><p>문의 응대, 오류 확인, 사이트 보안 유지, 콘텐츠 품질 개선을 위해 최소 범위에서 이용합니다.</p><h2>보관 및 파기</h2><p>문의 내용은 처리 목적이 끝난 뒤 합리적인 기간 내 삭제합니다. 법령상 보관이 필요한 경우 해당 기간 동안 보관할 수 있습니다.</p><h2>문의</h2><p>개인정보 관련 문의는 <a href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a>로 연락해 주세요.</p></article>`;
}

function termsHtml(env) {
  return `<article class="narrow"><h1>이용약관</h1><h2>서비스 내용</h2><p>${esc(siteName(env))}는 보험사 전산 링크, 고객센터, 청구팩스, 약관 확인 경로 등 공개 정보를 정리해 제공합니다.</p><h2>정보의 한계</h2><p>정보는 변경될 수 있으며, 최종 확인과 업무 판단은 각 보험사 공식 사이트와 고객센터 안내를 기준으로 해야 합니다.</p><h2>책임 제한</h2><p>본 사이트는 보험 가입 권유, 보험금 지급 보장, 법률 또는 손해사정 자문을 제공하지 않습니다. 정보 이용으로 발생하는 결과에 대해 사용자는 공식 출처를 확인해야 합니다.</p><h2>외부 링크</h2><p>외부 사이트의 운영, 보안, 콘텐츠에 대해서는 해당 사이트의 정책이 적용됩니다.</p></article>`;
}

function page(title, body, env, options = {}) {
  const status = options.status || 200;
  const canonical = new URL((options.canonical || "/").replace(/^\//, ""), siteUrl(env)).toString();
  const description = options.description || "보험사 전산, 고객센터, 보험금 청구팩스, 약관과 청구서 확인 정보를 정리한 자료센터입니다.";
  const robotsMeta = options.robots ? `<meta name="robots" content="${esc(options.robots)}">` : `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`;
  const jsonLd = structuredData(title, description, canonical, env);
  const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(siteName(env))}</title>
  <meta name="description" content="${esc(description)}">
  ${robotsMeta}
  <link rel="canonical" href="${esc(canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(siteName(env))}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>
  <style>${css()}</style>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/">${esc(siteName(env))}</a>
    <nav>
      <a href="/">홈</a>
      <a href="/compare/">비교표</a>
      <a href="/claim-documents/">청구서</a>
      <a href="/category/fire/">손해보험</a>
      <a href="/category/life/">생명보험</a>
      <a href="/category/mutual/">공제</a>
    </nav>
  </header>
  <main>${body}</main>
  ${footer(env)}
</body>
</html>`;
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": status === 200 ? "public, max-age=300" : "no-store" } });
}

function footer(env) {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <strong>${esc(siteName(env))}</strong>
          <p>보험사 업무 자료를 표로 정리하는 독립 정보 사이트입니다. 공식 사이트가 아니며 최종 정보는 각 보험사에서 확인해야 합니다.</p>
        </div>
        <nav class="footer-links" aria-label="독립 페이지">
          <a href="/about/">소개</a>
          <a href="/contact/">문의</a>
          <a href="/privacy/">개인정보처리방침</a>
          <a href="/terms/">이용약관</a>
          <a href="/rss.xml">RSS</a>
        </nav>
      </div>
    </footer>
  `;
}

function css() {
  return `
    :root{--bg:#f6f8fb;--paper:#fff;--line:#d9e1ec;--text:#172033;--muted:#657287;--accent:#d50050;--accent-dark:#a8003f}
    *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,"Noto Sans KR",sans-serif;line-height:1.7;letter-spacing:0}a{color:#174ea6;text-decoration:none}a:hover{text-decoration:underline}
    .site-header{height:64px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 max(20px,calc((100vw - 1180px)/2));position:sticky;top:0;z-index:10}.brand{font-weight:900;color:#111827;font-size:20px}.site-header nav{display:flex;gap:18px}.site-header nav a{color:#334155;font-weight:700;font-size:14px}
    main{max-width:1180px;margin:0 auto;padding:30px 18px 64px}.hero{background:linear-gradient(180deg,#fff,#f6faff);border-bottom:1px solid var(--line);padding:42px 30px;margin:-30px calc(50% - 50vw) 0}.hero-inner{max-width:1180px;margin:0 auto}.eyebrow{margin:0 0 8px;color:var(--accent);font-weight:800}.hero h1,.narrow h1{margin:0 0 12px;font-size:38px;line-height:1.22;color:#111827;letter-spacing:0}.hero p,.lead{font-size:18px;color:#334155;margin:0;word-break:keep-all}.hero-actions{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}.primary-btn,.secondary-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 18px;border-radius:999px;font-weight:900;text-decoration:none}.primary-btn{background:#1e6bf0;color:#fff}.secondary-btn{background:#fff;color:#1e3a8a;border:1px solid #bfdbfe}.primary-btn:hover,.secondary-btn:hover{text-decoration:none;transform:translateY(-1px)}.hero-check{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:22px}.hero-check div{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px}.hero-check strong{display:block;color:#111827}.hero-check span{font-size:14px;color:var(--muted)}.notice{display:flex;gap:12px;align-items:flex-start;background:#fff9fb;border:1px solid #f3c4d5;color:#4a1d2e;padding:14px 18px;margin-bottom:18px}.notice strong{white-space:nowrap;color:var(--accent-dark)}
    .quick-links{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}.quick-links a{display:flex;align-items:center;justify-content:center;min-height:48px;background:#fff;border:1px solid var(--line);font-weight:800;color:#20304a}.quick-links a:hover{border-color:var(--accent);color:var(--accent);text-decoration:none}
    .decision,.faq{padding:34px 0;border-bottom:1px solid var(--line)}.block-header{margin-bottom:18px}.block-header h2{margin:0 0 8px;font-size:28px;color:#111827}.block-header p{margin:0;color:var(--muted)}.decision-table{overflow:auto;background:#fff;border:1px solid var(--line);border-radius:12px}.decision-table table{width:100%;min-width:820px;border-collapse:collapse}.decision-table th,.decision-table td{padding:14px;border-top:1px solid var(--line);text-align:left;vertical-align:top}.decision-table thead th{background:#f8fbff;border-top:0;color:#1e3a8a}.trust-bar{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:28px 0;border-bottom:1px solid var(--line)}.trust-bar div{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px;text-align:center}.trust-num{margin:0;color:#1e6bf0;font-weight:900;font-size:27px;line-height:1.2}.trust-label{margin:4px 0;font-weight:900;color:#111827}.trust-bar p:last-child{margin:0;color:var(--muted);font-size:14px}
    .table-section,.content-block,.narrow{background:#fff;border:1px solid var(--line);padding:24px;margin-top:18px}.narrow.wide{max-width:1180px}.section-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:16px}.section-head h2,.content-block h2,.narrow h2{margin:0;color:#111827}.section-head p{margin:0;color:var(--muted);max-width:620px}.table-wrap{width:100%;overflow:auto;border:1px solid var(--line)}.data-table{width:100%;min-width:1050px;border-collapse:collapse;background:#fff}.data-table th{background:#fafafa;color:#111827;border-bottom:2px solid var(--accent);font-size:15px;padding:10px 8px;text-align:center;white-space:nowrap}.data-table td{border-top:1px solid var(--line);border-left:1px solid var(--line);padding:9px 8px;text-align:center;font-size:15px;vertical-align:middle}.data-table td:first-child,.data-table th:first-child{border-left:0}.data-table tr.shaded td{background:#fafafa}.company{display:block;color:#111827;font-weight:900}.small-link{display:block;font-size:12px;color:#64748b;margin-top:2px}.browser-icons{display:inline-flex;gap:4px}.browser-icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;color:#fff;font-size:12px;font-weight:900}.browser-icon.chrome{background:#1a73e8}.browser-icon.edge{background:#16a3a8}.hand-link{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;color:#111827;font-size:25px;line-height:1;border:1px solid transparent;border-radius:50%}.hand-link:hover{border-color:#cbd5e1;background:#f8fafc;text-decoration:none}.extra-link{display:block;font-size:12px;margin-top:2px;color:#64748b}
    .topics{padding:32px 0}.guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:18px}.guide-card{display:block;background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px;color:var(--text);min-height:210px;transition:transform .15s ease,box-shadow .15s ease}.guide-card:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(15,23,42,.08);text-decoration:none}.guide-card span{font-size:13px;color:var(--accent);font-weight:800}.guide-card h2{font-size:20px;margin:8px 0;color:#111827}.guide-card p{margin:0;color:var(--muted);font-size:15px}.card-meta{display:flex;justify-content:space-between;gap:8px;margin-top:14px;color:#8b95a3;font-size:13px}.card-meta em{font-style:normal}.faq-list{border-top:1px solid var(--line);background:#fff}.faq-list details{border-bottom:1px solid var(--line);padding:0 6px}.faq-list summary{cursor:pointer;padding:16px 8px;font-weight:900;color:#111827}.faq-list summary span{color:#1e6bf0;margin-right:4px}.faq-list p{margin:0;padding:0 8px 16px 28px;color:var(--muted)}.final-cta{margin:24px 0;padding:28px;background:#12315a;color:#fff;border-radius:16px;display:flex;justify-content:space-between;align-items:center;gap:20px}.final-cta h2{margin:0 0 6px}.final-cta p{margin:0;color:#dbeafe}.content-block p,.narrow p{font-size:17px;color:#334155}.narrow{max-width:920px;margin-left:auto;margin-right:auto}.article-meta{font-size:14px!important;color:#64748b!important}.article h2{margin-top:34px}.article-checklist{border:1px solid #bfdbfe;background:#f8fbff;border-radius:12px;padding:18px;margin:24px 0}.article-checklist h2{margin:0 0 10px}.article-checklist ul{margin:0;padding-left:20px}.info-list{border:1px solid var(--line);margin:24px 0}.info-list div{display:grid;grid-template-columns:180px 1fr;border-top:1px solid var(--line)}.info-list div:first-child{border-top:0}.info-list dt{background:#fafafa;padding:12px 14px;font-weight:900}.info-list dd{margin:0;padding:12px 14px}.text-link{font-weight:900;color:var(--accent-dark)}
    .site-footer{background:#eef2f7;border-top:1px solid var(--line);padding:30px 18px}.footer-inner{max-width:1180px;margin:0 auto;display:flex;justify-content:space-between;gap:30px}.footer-inner p{margin:8px 0 0;color:#526173}.footer-links{display:grid;gap:8px;min-width:170px}.footer-links a{font-size:18px;color:#16304f}
    @media(max-width:860px){.site-header{height:auto;padding:14px 18px;align-items:flex-start;gap:10px;flex-direction:column}.site-header nav{flex-wrap:wrap}.hero h1,.narrow h1{font-size:27px}.hero-check,.quick-links,.guide-grid,.trust-bar{grid-template-columns:1fr 1fr}.section-head{display:block}.footer-inner{display:block}.footer-links{margin-top:18px}.info-list div{grid-template-columns:1fr}.info-list dt{border-bottom:1px solid var(--line)}.final-cta{display:block}.final-cta .primary-btn{margin-top:16px}}
    @media(max-width:520px){main{padding:20px 12px 44px}.hero,.table-section,.content-block,.narrow{padding:18px}.quick-links,.guide-grid{grid-template-columns:1fr}.notice{display:block}.data-table th,.data-table td{font-size:14px;padding:8px 6px}}
  `;
}

function structuredData(title, description, canonical, env) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    headline: title,
    description,
    url: canonical,
    inLanguage: "ko-KR",
    isPartOf: {
      "@type": "WebSite",
      name: siteName(env),
      url: siteUrl(env)
    },
    publisher: {
      "@type": "Organization",
      name: siteName(env),
      url: siteUrl(env)
    }
  };
}

function sitemap(env) {
  const base = siteUrl(env);
  const paths = [
    "/",
    "/compare/",
    "/category/fire/",
    "/category/life/",
    "/category/mutual/",
    ...GUIDES.map(([slug]) => `/${slug}/`),
    ...ARTICLES.map((article) => `/articles/${article.slug}/`),
    ...INSURERS.map(([slug]) => `/company/${slug}/`),
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/"
  ];
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${escXml(new URL(path.replace(/^\//, ""), base).toString())}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>`;
}

function rss(env) {
  const base = siteUrl(env);
  const items = [
    ["/compare/", "보험사 업무 비교표", "보험사 전산, 고객센터, 청구팩스, 약관 확인 경로를 비교합니다."],
    ...ARTICLES.map((article) => [`/articles/${article.slug}/`, article.title, article.excerpt]),
    ...GUIDES.map(([slug, title, description]) => [`/${slug}/`, title, description])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escXml(siteName(env))}</title>
    <link>${escXml(base)}</link>
    <description>보험사 전산, 고객센터, 청구팩스, 약관과 청구서 확인 정보를 정리한 자료센터입니다.</description>
    <language>ko-KR</language>
    ${items.map(([path, title, description]) => `<item><title>${escXml(title)}</title><link>${escXml(new URL(path.replace(/^\//, ""), base).toString())}</link><description>${escXml(description)}</description></item>`).join("")}
  </channel>
</rss>`;
}

function robots(env) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(env)}sitemap.xml\n`;
}

function phoneLink(value) {
  const textValue = String(value || "").trim();
  if (!textValue || textValue === "-") return "-";
  if (!/^[0-9-]+$/.test(textValue)) return esc(textValue);
  return `<a href="tel:${esc(textValue)}">${esc(textValue)}</a>`;
}

function browserIcons(value) {
  const textValue = String(value || "");
  const icons = [];
  if (textValue.includes("Chrome")) icons.push(`<span class="browser-icon chrome" title="Chrome">C</span>`);
  if (textValue.includes("Edge")) icons.push(`<span class="browser-icon edge" title="Edge">E</span>`);
  return icons.length ? `<span class="browser-icons">${icons.join("")}</span>` : esc(textValue || "-");
}

function externalHandLink(url, label) {
  if (!url) return "-";
  return `<a class="hand-link" href="${esc(url)}" rel="nofollow noopener" target="_blank" aria-label="${esc(label)}"><span aria-hidden="true">☝</span></a>`;
}

function normalizePath(path) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function siteUrl(env) {
  return (env.SITE_URL || SITE_DEFAULT).replace(/\/?$/, "/");
}

function siteName(env) {
  return env.SITE_NAME || "보험업무 자료센터";
}

function siteEmail(env) {
  return env.SITE_EMAIL || "contact@galaxymale.com";
}

function text(content, contentType) {
  return new Response(content, { headers: { "content-type": contentType } });
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function escXml(value) {
  return esc(value);
}
