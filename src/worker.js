const SITE_DEFAULT = "https://galaxymale.com";

const INSURERS = [
  ["samsung-fire", "삼성화재", "손해보험", "Chrome, Edge", "1588-5114", "1566-0553", "1899-5005", "0505-162-0872", ""],
  ["meritz-fire", "메리츠화재", "손해보험", "Chrome, Edge", "1566-7711", "1577-7711", "02-3786-2777", "0505-021-3400", ""],
  ["db-fire", "DB손해보험", "손해보험", "Chrome", "1588-0100", "1566-0757", "02-2262-1241", "0505-181-4862", ""],
  ["kb-fire", "KB손해보험", "손해보험", "Chrome, Edge", "1544-0114", "1544-0019", "1544-8119", "0505-136-6500", ""],
  ["hyundai-fire", "현대해상", "손해보험", "Chrome, Edge", "1588-5656", "1577-3223", "02-2628-4567", "0507-774-6060", ""],
  ["hanwha-fire", "한화손해보험", "손해보험", "Chrome, Edge", "1566-8000", "1670-1882", "02-316-0111", "0502-779-1004", "간병"],
  ["lotte-fire", "롯데손해보험", "손해보험", "Chrome, Edge", "1588-3344", "1600-5182", "1599-8260", "0507-333-9999", ""],
  ["heungkuk-fire", "흥국화재", "손해보험", "Chrome, Edge", "1688-1688", "1688-6997", "031-786-8088", "0504-800-0700", ""],
  ["hana-fire", "하나손해보험", "손해보험", "Chrome", "1566-3000", "02-6299-6821", "02-6670-8110", "0504-3764-0765", ""],
  ["nh-fire", "NH농협손해보험", "손해보험", "Chrome", "1644-9000", "1644-9600", "1644-0090", "0505-060-7000", ""],
  ["linea-general", "라이나손보", "손해보험", "Chrome, Edge", "1566-5800", "1566-5800", "02-6922-5100", "02-6742-3992", ""],
  ["aig", "AIG손해보험", "손해보험", "Chrome, Edge", "1544-2792", "1544-2792", "02-2260-6855", "02-2011-4607", ""],
  ["ace", "에이스손해보험", "손해보험", "Edge", "1588-5959", "1577-3777", "02-3788-2261", "0505-088-1646", ""],
  ["hanwha-life", "한화생명", "생명보험", "Chrome, Edge", "1588-6363", "1800-6633", "1522-6379", "고객센터에 전화", "간병"],
  ["tongyang-life", "동양생명", "생명보험", "Chrome", "1577-1004", "080-899-1004", "02-728-9900", "02-3289-4517", "간병"],
  ["kyobo-life", "교보생명", "생명보험", "Chrome, Edge", "1588-1001", "1588-1636", "02-721-3130", "고객센터에 전화", ""],
  ["samsung-life", "삼성생명", "생명보험", "Edge", "1588-3114", "1588-3115", "02-311-4500", "고객센터에 전화", "간병"],
  ["linea-life", "라이나생명", "생명보험", "Chrome, Edge", "1588-0058", "1588-2442", "02-3781-2006", "02-6944-1200", ""],
  ["kdb-life", "KDB생명", "생명보험", "Chrome", "1588-4040", "1588-4040", "02-6303-2771", "02-2669-6500", ""],
  ["im-life", "iM라이프", "생명보험", "Chrome", "1588-4770", "1588-4770", "02-2087-9594", "0505-083-5420", ""],
  ["miraeasset-life", "미래에셋생명", "생명보험", "Chrome, Edge", "1588-0220", "1588-0220", "02-3271-5108", "고객센터에 전화", ""],
  ["shinhan-life", "신한라이프", "생명보험", "Chrome", "1588-5580", "1522-2285", "02-3455-4119", "고객센터에 전화", ""],
  ["kb-life", "KB라이프", "생명보험", "Chrome, Edge", "1588-3374", "1566-2730", "1899-3899", "02-390-4629", ""],
  ["db-life", "DB생명", "생명보험", "Chrome, Edge", "1588-3131", "02-6470-7663", "02-2119-5151", "0505-129-3134", ""],
  ["hana-life", "하나생명", "생명보험", "Chrome, Edge", "1577-1112", "1577-1112", "02-3709-8602~3", "고객센터에 전화", ""],
  ["heungkuk-life", "흥국생명", "생명보험", "Chrome", "1588-2288", "1877-7006", "031-786-8088", "고객센터에 전화", "간병"],
  ["abl-life", "ABL생명", "생명보험", "Chrome, Edge", "1588-6500", "1566-1002", "02-3787-8583", "02-3299-5544", ""],
  ["ibk-pension", "IBK연금보험", "생명보험", "Chrome, Edge", "1577-4117", "02-2270-1661", "02-2270-1692", "02-2270-1577", ""],
  ["nh-life", "NH농협생명", "생명보험", "Chrome, Edge", "1544-4000", "1544-4422", "02-3786-8800", "02-6971-6040", ""],
  ["metlife", "MetLife", "생명보험", "Chrome", "1588-9600", "1588-9609", "1899-0751", "고객센터에 전화", ""],
  ["chubb-life", "처브라이프", "생명보험", "Chrome", "1599-4600", "1599-4600", "1599-4646", "02-3480-7801", ""],
  ["fubon-hyundai", "푸본현대생명", "생명보험", "Chrome", "1577-3311", "-", "080-860-1212", "0505-106-0311", ""],
  ["bnp-cardif", "BNP파리바카디프생명", "생명보험", "Edge", "1688-1118", "1688-1118", "1577-3435", "고객센터에 전화", ""],
  ["aia-life", "AIA생명", "생명보험", "Chrome, Edge", "1588-9898", "1588-2513", "1588-2937", "02-2021-4540", ""],
  ["mg", "MG새마을금고", "공제회사", "Edge", "1599-9010", "-", "-", "02-3016-7674", ""],
  ["the-k", "The-K", "공제회사", "Edge", "1577-3993", "-", "-", "02-3278-9696", ""],
  ["post-office", "우체국보험", "공제회사", "Edge", "1599-0100", "-", "-", "0505-005-번호 | 1224(서울) 1427(경인동부) 1428(경인서부) 2271(강원) 1788(충청) 2163(전북) 1921(전남) 1623(부산) 2070(경북) 7116(서귀포) 2296(제주)", ""],
  ["suhyup", "수협", "공제회사", "Edge", "1588-4119", "-", "-", "고객센터에 전화", ""],
  ["cu", "신협", "공제회사", "Edge", "1544-3030", "-", "-", "고객센터에 전화", ""]
];

const EXTERNAL_LINKS = {
  "samsung-fire": { system: "https://erp.samsungfire.com", terms: "https://www.samsungfire.com/page/VH.REIF0011.do", claim: "https://drive.google.com/file/d/1j99Fa5eGfBDJSBVL2uM8mix5jqF5dn3i/view?usp=drive_link" },
  "meritz-fire": { system: "http://sales.meritzfire.com", terms: "https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/", claim: "https://drive.google.com/file/d/1BRrqHi1lIisWwpwAirTmu26s3wJmnLus/view?usp=drive_link" },
  "db-fire": { system: "https://www.mdbins.com", terms: "https://www.idbins.com/FWMAIV1534.do", claim: "https://drive.google.com/file/d/1m5HurA0NkjcnrA8cISgxFeT6MiUm1Yf1/view?usp=sharing" },
  "kb-fire": { system: "https://nsales.kbinsure.co.kr/", terms: "https://www.kbinsure.co.kr/CG802030001.ec", claim: "https://drive.google.com/file/d/1hkfo8d-jtol2gzjMU5-LHmwUyULscFYa/view?usp=sharing" },
  "hyundai-fire": { system: "https://sp.hi.co.kr", terms: "https://www.hi.co.kr/serviceAction.do?view=bin/PA/03/HHPA03010M#none", claim: "https://drive.google.com/file/d/1GLDWITf7O1W-xNszfV9oajHqTxpcbRgv/view?usp=sharing" },
  "hanwha-fire": { system: "http://portal.hwgeneralins.com", terms: "https://www.hwgeneralins.com/notice/ir/product-ing01.do", claim: "https://drive.google.com/file/d/1qSt7pUiXNh_IruI7KUk4c_w_0tHhcrpz/view?usp=drive_link", extraClaim: "https://drive.google.com/file/d/1gWh3panTtHqimOVBcy3qY6rQqC2kWfgm/view?usp=sharing" },
  "lotte-fire": { system: "http://lottero.lotteins.co.kr", terms: "https://www.lotteins.co.kr/web/C/D/H/cdh190.jsp", claim: "https://drive.google.com/file/d/1kyoHLbzboKmnVnfEnz_m_Z9jRu3NI14v/view?usp=drive_link" },
  "heungkuk-fire": { system: "https://sales.heungkukfire.co.kr/", terms: "https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do", claim: "https://drive.google.com/file/d/1K426vw-3aa3G2G8BpDZ48D3Y-l6Nmeke/view?usp=drive_link" },
  "hana-fire": { system: "https://sfa.saleshana.com/index.html", terms: "https://www.hanainsure.co.kr/w/disclosure/product/saleProduct", claim: "https://drive.google.com/file/d/17_J4Sf7K5r7qs-m8PgW5SiYzkJdWVHX0/view?usp=sharing" },
  "nh-fire": { system: "https://ss.nhfire.co.kr/", terms: "https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire", claim: "https://drive.google.com/file/d/1yoSLHYJgSNOhTVvKd4DYTuZLZLYrLBd9/view?usp=drive_link" },
  "linea-general": { system: "https://ga.linagi.com/", terms: "https://www.chubb.com/kr-kr/disclosure/product.html", claim: "https://drive.google.com/file/d/1-KhNl4wkvzJOgUEB-Io5sGioQCgvuFyh/view?usp=drive_link" },
  "aig": { system: "https://sso.aig.co.kr/gaLogin/gaLogin.jsp", terms: "https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702", claim: "https://drive.google.com/file/d/1asRJiyCd2PrYd8MfSUOCcsvqV-n--YGR/view?usp=sharing" },
  "ace": { system: "https://mganet.mggeneralins.com", terms: "https://www.mggeneralins.com/PB031210DM.scp?menuId=MN0803006", claim: "https://drive.google.com/file/d/1DV1s6_ZHUOddQg4J_OSuAmdbKoFdjAID/view?usp=drive_link" },
  "hanwha-life": { system: "https://hmp.hanwhalife.com/online/ga", terms: "https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000", claim: "https://drive.google.com/file/d/1FKsmRFUqWUn7ickcercCRuN7C4bt916r/view?usp=sharing", extraClaim: "https://drive.google.com/file/d/1Zx9mG3Yv7mwW5cKt9uM4riFukbskgW8G/view?usp=sharing" },
  "tongyang-life": { system: "http://1004.myangel.co.kr", terms: "https://www.myangel.co.kr/paging/WE_AC_WEPAAP020100L", claim: "https://drive.google.com/file/d/1NsasxhWbu_VhHT9ksYIS1L07bsCej8A8/view?usp=drive_link", extraClaim: "https://drive.google.com/file/d/1tblgqK8a3wt2fDGz-OO-Ngn9hlLqj_kB/view?usp=sharing" },
  "kyobo-life": { system: "https://ga.kyobo.com", terms: "https://www.kyobo.com/dgt/web/product-official/all-product/search", claim: "https://drive.google.com/file/d/1Pr6k5qkZCyP7Ihbv1Juc1a5MWs3THHUi/view?usp=drive_link" },
  "samsung-life": { system: "https://connectplus.samsunglife.com:10443/gasso/login", terms: "https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M", claim: "https://drive.google.com/file/d/1fsElWIjaFefHsuI3FChLVVSkqksYozMq/view?usp=sharing", extraClaim: "https://www.samsunglife.com/e_mail/pdf/document/SAMSUNGLIFE_03867_2.pdf" },
  "linea-life": { system: "https://ga.lina.co.kr", terms: "https://www.lina.co.kr/disclosure/product_list.htm?productState=01&productKind=01", claim: "https://drive.google.com/file/d/1k7yy3M0KMJh-JZQXkvUMtE8eIWuobHGL/view?usp=drive_link" },
  "kdb-life": { system: "http://kss.kdblife.co.kr", terms: "https://www.kdblife.co.kr/ajax.do?scrId=HDLMA002M02P", claim: "https://drive.google.com/file/d/19uSS4v-nixaeOTXClVnRwNVDqyCPQDbN/view?usp=sharing" },
  "im-life": { system: "https://fgs.dgbfnlife.com:8443", terms: "https://www.dgbfnlife.com/BA/BA_A020.do", claim: "https://drive.google.com/file/d/1tGY8JI12MTS8R1LJMbEdjlx9E1kdyOHP/view?usp=drive_link" },
  "miraeasset-life": { system: "http://www.loveageplan.com", terms: "https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do", claim: "https://drive.google.com/file/d/15LzT84_loJl4tOK1YQ4togAed_tEOACI/view?usp=sharing" },
  "shinhan-life": { system: "https://ga.shinhanlife.co.kr", terms: "https://www.shinhanlife.co.kr/hp/cdhi0010.do", claim: "https://drive.google.com/file/d/1lc8ntVCpWPiFIdv6v-ra21Kb7q_-nQ06/view?usp=drive_link" },
  "kb-life": { system: "https://sfa.kblife.co.kr/", terms: "https://www.kblife.co.kr/?/=true&tab=currently-selling", claim: "https://drive.google.com/file/d/1i-VvJMoBwM8nX3Xz88e2j9dvfGHJnVVB/view?usp=sharing" },
  "db-life": { system: "http://etopia.idblife.com", terms: "https://www.idblife.com/notice/product/sale", claim: "https://www.idblife.com/support/guide/acbf_clm" },
  "hana-life": { system: "https://ga.hanalife.co.kr", terms: "https://hanalife.co.kr/anm/product/allProduct.do?status=on", claim: "https://drive.google.com/file/d/1n9Vh-XKuqLEyqDVqmLmDeK2MMODnkKET/view?usp=sharing" },
  "heungkuk-life": { system: "https://sales.heungkuklife.co.kr/", terms: "https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y", claim: "https://drive.google.com/file/d/1ikE6XM8vERcpL9LowLclbnN40XT5kGQn/view?usp=sharing", extraClaim: "https://www.heungkuklife.co.kr/jsps/cyber/file/240517_caregiverUseConfirm.pdf" },
  "abl-life": { system: "http://ga.abllife.co.kr", terms: "https://www.abllife.co.kr/st/pban/prdtPban/whlPrdt/whlPrdt1/whlPrdt11?page=index", claim: "https://drive.google.com/file/d/1AkFt-PPL1LeYoU6wQEQ62DrTDz08Ii9i/view?usp=sharing" },
  "ibk-pension": { system: "https://sf.ibki.co.kr/", terms: "https://www.ibki.co.kr/process/HP_PBANO_PDT_SP_INDV", claim: "https://www.ibki.co.kr/process/HP_CSCETR_POSN_DOC_INS_LIST?bltb_cod=SC000014&sctn=in&TAB=in" },
  "nh-life": { system: "https://sfa.nhlife.co.kr:8443/", terms: "https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl", claim: "https://drive.google.com/file/d/1ZokHkStvKMfUUUCNM4ajeB_DVzi7h1CT/view?usp=drive_link" },
  "metlife": { system: "http://metplus.metlife.co.kr", terms: "https://brand.metlife.co.kr/pn/paReal/insuProductDisclMain.do", claim: "https://drive.google.com/file/d/1zVzQV5r-6wn1vmqTyqObZONSfqnbZpJd/view?usp=sharing" },
  "chubb-life": { system: "http://esmart.chubblife.co.kr", terms: "https://www.chubblife.co.kr/front/official/sale/list.do", claim: "https://www.chubblife.co.kr/front/ctmcenter/insurance/listDocu.do" },
  "fubon-hyundai": { system: "https://ez.fubonhyundai.com/", terms: "https://www.fubonhyundai.com/#CUSI150102010101", claim: "https://www.fubonhyundai.com/#CUSI070100000000" },
  "bnp-cardif": { system: "http://ga.cardif.co.kr", terms: "https://www.cardif.co.kr/disclosure/papag101.do", claim: "https://www.cardif.co.kr/customer-center/hcwgi001.do" },
  "aia-life": { system: "https://imap.aia.co.kr", terms: "https://www.aia.co.kr/ko/our-products.html", claim: "https://drive.google.com/file/d/1QQ2sU3-WhjRyN2HI9xwh-kj6HVxWfcUg/view?usp=sharing" },
  "mg": { system: "https://insure.kfcc.co.kr/", terms: "https://insu.kfcc.co.kr/ino/inoGuide.do", claim: "http://xn--989an19aika.com/pdf/새마을금고.pdf" },
  "the-k": { system: "https://www.ktcu.or.kr/MH/MH-P010M01.do", terms: "https://www.ktcu.or.kr/IS/IS-P170M01.do", claim: "http://xn--989an19aika.com/pdf/교직원공제회.pdf" },
  "post-office": { system: "https://epostlife.go.kr/LNLNDM10DM.do", terms: "https://mall.epostbank.go.kr/IPPSKE0000.do", claim: "https://epostlife.go.kr/cms/docimg/i-board/form/2023/02/20230221.pdf" },
  "suhyup": { system: "https://www.suhyup-bank.com/", claim: "https://psmb.suhyup-bank.com/smart/page/dhp/cmn/dhp100200j.jsp?filePathNm=../DIGITALPDF/ins_dmnd.pdf" },
  "cu": { system: "https://openbank.cu.co.kr/?sub=6000", terms: "https://openbank.cu.co.kr/?sub=6000", claim: "http://xn--989an19aika.com/pdf/신협.pdf" }
};

const GUIDE_ARTICLES = [
  { slug: "dental-nonlife-forms", category: "치아보험", title: "손해보험 치아보험 청구양식", excerpt: "손해보험 치아보험 청구양식을 내려받기 전 확인해야 할 서류, 작성 기준, 제출 방식 차이를 정리했습니다.", linkLabel: "손해보험 치아보험 청구양식", linkUrl: "https://drive.google.com/drive/folders/1bX5P4mX_aeMeeipb9KgKPpfr_2gXJyX5?usp=share_link" },
  { slug: "dental-life-forms", category: "치아보험", title: "생명보험 치아보험 청구양식", excerpt: "생명보험 치아보험 청구양식과 치과치료확인서, 진료기록, 영상자료 준비 흐름을 정리했습니다.", linkLabel: "생명보험 치아보험 청구양식", linkUrl: "https://drive.google.com/drive/folders/1ykzncdihaEM42L8rGB_ApDvylz_IJtG4?usp=share_link" },
  { slug: "auto-face-quote", category: "자동차 보험", title: "대면 간편견적", excerpt: "대면 상담 전 차량정보와 운전자 범위를 정리하고 간편견적 화면에서 확인해야 할 항목을 설명합니다.", linkLabel: "대면 간편견적", linkUrl: "https://kpub.knia.or.kr/carInsuranceDisc/insurance/carInsurance.do" },
  { slug: "auto-premium-factor", category: "자동차 보험", title: "할인·할증요인 조회시스템", excerpt: "자동차보험 갱신 보험료가 변한 이유를 확인할 때 할인·할증요인 조회시스템에서 봐야 할 항목을 정리합니다.", linkLabel: "할인·할증요인 조회시스템", linkUrl: "https://prem.kidi.or.kr:1443/" },
  { slug: "auto-insurance-development", category: "자동차 보험", title: "보험개발원 등록", excerpt: "차량과 운전자 정보가 보험개발원 조회 과정에서 어떻게 활용되는지 업무 기준으로 설명합니다.", linkLabel: "보험개발원 등록", linkUrl: "https://iics.kidi.or.kr/insuUserReal/viewInsuUserReal.do" },
  { slug: "auto-fault-ratio", category: "자동차 보험", title: "과실비율 정보포털", excerpt: "교통사고 유형별 과실비율을 확인할 때 사고 상황 정리와 사례 검색이 필요한 이유를 안내합니다.", linkLabel: "과실비율 정보포털", linkUrl: "https://accident.knia.or.kr/" },
  { slug: "fire-business-checklist", category: "화재보험", title: "사업장 화재보험 체크리스트", excerpt: "사업장 소재지, 건물 구조, 업종, 재고, 기계장치와 배상책임 담보를 함께 확인하는 기본 절차입니다.", linkLabel: "사업장 화재보험 체크리스트", linkUrl: "https://drive.google.com/file/d/1EonSnWsfZyOFjG7C5QjBbnutYbDyb9Ej/view?usp=drive_link" },
  { slug: "fire-building-register", category: "화재보험", title: "건축물대장", excerpt: "건축물대장 용도, 구조, 연면적, 사용승인일을 기준으로 화재보험 가입 자료를 점검합니다.", linkLabel: "건축물대장", linkUrl: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098&HighCtgCD=A02004002&Mcode=10205" },
  { slug: "education-institute", category: "보험교육", title: "보험연수원(등록교육, 보수교육)", excerpt: "보험연수원에서 등록교육과 보수교육 대상, 이수 상태, 과정 신청을 확인하는 방법을 안내합니다.", linkLabel: "보험연수원(등록교육, 보수교육)", linkUrl: "https://www.in.or.kr/" },
  { slug: "medical-expense-underwriting-check", category: "실손보험", title: "실손보험 인수기준 확인", excerpt: "실손보험 가입 전 인수기준, 병력 고지, 기존 가입 여부와 보장 제한 가능성을 확인하는 순서입니다.", linkLabel: "실손보험 인수기준 확인", linkUrl: "https://kpub.knia.or.kr/productDisc/lostHealth/lostHealthDisclosure.do" },
  { slug: "elevator-insurance-info-view", category: "승강기보험", title: "승강기 정보 열람", excerpt: "승강기 정보 열람 자료를 기준으로 의무보험, 관리 주체, 승강기 번호를 확인하는 방법입니다.", linkLabel: "승강기 정보 열람", linkUrl: "https://www.elevator.go.kr/opn/MainPage.do" },
  { slug: "ga-product-compare", category: "GA 필수 링크", title: "대리점 협회 상품 비교", excerpt: "대리점 협회 상품 비교 자료를 업무에서 활용할 때 상품명, 기준일, 비교 항목을 확인하는 방법입니다.", linkLabel: "대리점 협회 상품 비교", linkUrl: "https://pcs.iaa.or.kr/comm/login.do;jsessionid=357FB2FFF6457E9A77A9080571C407B3" }
].map((article) => ({ ...article, date: "2026-05-26" }));

const PRE_JOIN_ARTICLES = [
  { slug: "insurance-before-join-documents", category: "청구 체크리스트", title: "보험 가입 전 준비물 체크리스트", excerpt: "보험 상담 전에 신분, 가족, 직업, 병력, 기존 보험 정보를 어떻게 정리해야 하는지 안내합니다.", linkLabel: "금융감독원 금융소비자 정보", linkUrl: "https://www.fss.or.kr/" },
  { slug: "insurance-health-disclosure-guide", category: "청구 체크리스트", title: "고지의무 준비 가이드", excerpt: "최근 치료, 투약, 검사, 입원 이력을 기준으로 보험 가입 전 고지의무를 정리하는 방법입니다.", linkLabel: "생명보험협회 소비자포털", linkUrl: "https://consumer.insure.or.kr/" },
  { slug: "insurance-existing-policy-review", category: "청구 체크리스트", title: "기존 보험 증권 점검", excerpt: "새 보험을 가입하기 전에 기존 증권의 보장, 보험료, 납입기간, 갱신 여부를 확인하는 기준입니다.", linkLabel: "손해보험협회 공시실", linkUrl: "https://kpub.knia.or.kr/" },
  { slug: "insurance-coverage-priority", category: "청구 체크리스트", title: "보장 우선순위 정리", excerpt: "실손, 진단비, 수술비, 입원비, 배상책임처럼 보장 항목의 우선순위를 정하는 방법입니다.", linkLabel: "보험다모아", linkUrl: "https://e-insmarket.or.kr/" },
  { slug: "insurance-premium-budget", category: "청구 체크리스트", title: "보험료 예산과 납입기간", excerpt: "월 보험료 예산, 갱신형과 비갱신형, 납입기간을 가입 전 어떻게 비교해야 하는지 설명합니다.", linkLabel: "금융소비자포털 파인", linkUrl: "https://fine.fss.or.kr/" },
  { slug: "insurance-family-info", category: "청구 체크리스트", title: "가족 보험 가입 전 확인사항", excerpt: "배우자, 자녀, 부모 보험을 함께 검토할 때 피보험자, 계약자, 수익자 정보를 정리하는 방법입니다.", linkLabel: "생명보험협회", linkUrl: "https://www.klia.or.kr/" },
  { slug: "insurance-claim-history", category: "청구 체크리스트", title: "병력과 보험금 청구이력 정리", excerpt: "과거 치료와 보험금 청구 이력이 가입 심사와 보장 제한에 어떤 영향을 줄 수 있는지 정리합니다.", linkLabel: "손해보험협회", linkUrl: "https://www.knia.or.kr/" },
  { slug: "insurance-beneficiary-check", category: "청구 체크리스트", title: "보험수익자 지정 전 확인", excerpt: "사망보험금, 진단비, 입원비 수익자를 지정하거나 변경하기 전 확인해야 할 기준입니다.", linkLabel: "생명보험협회 공시실", linkUrl: "https://pub.insure.or.kr/" },
  { slug: "insurance-payment-method", category: "청구 체크리스트", title: "납입 방법과 자동이체 준비", excerpt: "자동이체 계좌, 카드 납부, 계약자와 납입자 관계, 미납 위험을 가입 전에 점검하는 방법입니다.", linkLabel: "금융결제원", linkUrl: "https://www.kftc.or.kr/" },
  { slug: "insurance-terms-before-sign", category: "청구 체크리스트", title: "약관과 상품설명서 확인", excerpt: "청약 전 약관, 상품설명서, 해약환급금 예시, 면책기간과 감액기간을 확인하는 순서입니다.", linkLabel: "보험개발원", linkUrl: "https://www.kidi.or.kr/" }
].map((article) => ({ ...article, date: "2026-05-26" }));

const ARTICLES = [...GUIDE_ARTICLES, ...PRE_JOIN_ARTICLES];
const HOME_GUIDE_ARTICLES = GUIDE_ARTICLES;

const SEO_TITLES = {
  "dental-nonlife-forms": "손해보험 치아보험 청구양식 다운로드와 치과 서류 준비방법",
  "dental-life-forms": "생명보험 치아보험 청구양식 작성방법과 특약 확인 가이드",
  "auto-face-quote": "자동차보험 대면 간편견적 준비서류와 상담 전 확인사항",
  "auto-premium-factor": "자동차보험 할인할증요인 조회시스템으로 갱신 보험료 확인하는 법",
  "auto-insurance-development": "보험개발원 자동차보험 등록정보 확인과 견적 오류 점검법",
  "auto-fault-ratio": "교통사고 과실비율 정보포털 활용법과 사고기록 정리",
  "fire-business-checklist": "사업장 화재보험 체크리스트와 가입 전 현장 점검사항",
  "fire-building-register": "화재보험 가입 전 건축물대장 확인방법과 용도 점검",
  "education-institute": "보험연수원 등록교육 보수교육 신청 전 확인사항",
  "medical-expense-underwriting-check": "실손보험 인수기준 확인과 가입 전 병력 고지 준비",
  "elevator-insurance-info-view": "승강기 정보 열람으로 의무보험과 관리주체 확인하는 법",
  "ga-product-compare": "보험대리점 협회 상품 비교로 약관과 보장 차이 확인하기",
  "insurance-before-join-documents": "보험 가입 전 준비물 체크리스트와 상담 전 서류 정리",
  "insurance-health-disclosure-guide": "보험 고지의무 준비방법과 병력 질문서 작성 전 확인사항",
  "insurance-existing-policy-review": "기존 보험 증권 점검으로 중복 보장과 부족 담보 찾는 법",
  "insurance-coverage-priority": "보험 보장 우선순위 정리와 가정별 필수 담보 선택 기준",
  "insurance-premium-budget": "보험료 예산 세우는 법과 납입기간 결정 전 확인사항",
  "insurance-family-info": "가족 보험 가입 전 계약자 피보험자 수익자 확인 가이드",
  "insurance-claim-history": "보험 가입 전 병력과 보험금 청구이력 정리 방법",
  "insurance-beneficiary-check": "보험수익자 지정 전 확인사항과 사망보험금 분쟁 예방",
  "insurance-payment-method": "보험료 납입방법 자동이체 카드납부 선택 전 체크사항",
  "insurance-terms-before-sign": "보험 약관과 상품설명서 확인법 계약 전 반드시 볼 항목"
};

for (const article of ARTICLES) {
  if (SEO_TITLES[article.slug]) article.title = SEO_TITLES[article.slug];
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  }
};

function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);

  if (path === "/favicon.ico" || path === "/favicon.svg") return text(faviconSvg(), "image/svg+xml; charset=utf-8", { "cache-control": "public, max-age=86400" });
  if (path === "/robots.txt") return text(robots(env), "text/plain; charset=utf-8");
  if (path === "/sitemap.xml") return text(sitemap(env), "application/xml; charset=utf-8");
  if (path === "/rss.xml") return text(rss(env), "application/rss+xml; charset=utf-8");

  if (path === "/" || path === "") return page("보험 업무 자료센터", homeHtml(env), env, {
    description: "보험사 전산, 고객센터, 청구팩스, 약관, 청구서, 자동차보험, 화재보험, 치아보험, 보험교육 자료를 정리한 보험 업무 자료센터입니다.",
    canonical: "/"
  });
  if (path === "/compare") return page("보험사 전산 링크 비교표", compareHtml("보험사 전산 링크 비교표", INSURERS), env, {
    description: "보험회사 전산, 브라우저, 고객센터, 인콜 모니터링, 전산 헬프데스크, 청구팩스, 약관확인, 청구서 링크를 표로 정리했습니다.",
    canonical: "/compare/"
  });
  if (path === "/claim-checklist") return page("청구 체크리스트", claimChecklistHtml(env), env, {
    description: "보험금 청구 전 확인해야 할 서류, 보험회사별 청구서, 치아보험 양식, 팩스 접수와 약관 확인 기준을 정리했습니다.",
    canonical: "/claim-checklist/"
  });

  const articleMatch = path.match(/^\/articles\/([^/]+)$/);
  if (articleMatch) {
    const article = ARTICLES.find((item) => item.slug === articleMatch[1]);
    if (article) return page(article.title, articleHtml(article), env, {
      description: article.excerpt,
      canonical: `/articles/${article.slug}/`,
      article
    });
  }

  const insurer = INSURERS.find(([slug]) => path === `/company/${slug}`);
  if (false && insurer) return page(`${insurer[1]} 보험 업무 정보`, insurerHtml(insurer), env, {
    description: `${insurer[1]} 전산, 고객센터, 인콜 모니터링, 헬프데스크, 보험금 청구팩스, 약관확인, 청구서 자료를 정리했습니다.`,
    canonical: `/company/${insurer[0]}/`,
    robots: "noindex, follow"
  });

  if (path === "/about") return page("소개", aboutHtml(env), env, { description: "보험 업무 자료센터 소개와 운영 목적을 안내합니다.", canonical: "/about/" });
  if (path === "/contact") return page("문의", contactHtml(env), env, { description: "보험 업무 자료센터 문의와 오류 제보 안내입니다.", canonical: "/contact/" });
  if (path === "/privacy") return page("개인정보처리방침", privacyHtml(env), env, { description: "보험 업무 자료센터 개인정보처리방침입니다.", canonical: "/privacy/" });
  if (path === "/terms") return page("이용약관", termsHtml(env), env, { description: "보험 업무 자료센터 이용약관입니다.", canonical: "/terms/" });

  return page("페이지를 찾을 수 없습니다", `<section class="narrow"><h1>페이지를 찾을 수 없습니다</h1><p>요청하신 주소의 페이지가 없거나 이동되었습니다.</p><p><a class="text-link" href="/">홈으로 이동</a></p></section>`, env, { status: 404, robots: "noindex, follow" });
}

function homeHtml(env) {
  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="eyebrow">보험 실무 자료 모음</p>
        <h1>보험사 전산, 청구서, 약관, 자동차·화재·치아보험 자료센터</h1>
        <p>보험 업무에서 반복적으로 찾게 되는 전산 링크, 고객센터, 청구팩스, 약관확인, 청구서 자료와 카테고리별 가이드 글을 한 화면에 정리했습니다.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#main-table">보험사 표 바로보기</a>
          <a class="secondary-btn" href="#integrated-guides">통합 가이드 보기</a>
        </div>
      </div>
    </section>
    <section id="main-table" class="table-section">
      <div class="section-head">
        <h2>보험회사 전산 및 청구 자료표</h2>
        <p>브라우저, 고객센터, 인콜 모니터링, 전산 헬프데스크, 청구팩스, 약관확인과 청구서 링크를 원본 표 기준으로 정리했습니다. 손모양 아이콘은 외부 링크입니다.</p>
      </div>
      ${insurerTableHtml()}
    </section>
    <section id="integrated-guides" class="topics">
      <header class="block-header">
        <h2>통합 보험업무 가이드 글</h2>
        <p>홈, 자동차 보험, 화재보험, 치아보험 자료를 하나로 묶었습니다. 위 자료 버튼과 대응되는 글을 바로 읽을 수 있게 구성했습니다.</p>
      </header>
      <div class="guide-grid">${HOME_GUIDE_ARTICLES.map((article) => guideCard(article)).join("")}</div>
    </section>
    ${faqHtml("home")}
    <section class="content-block">
      <h2>사이트 운영 기준</h2>
      <p>${siteName(env)}는 광고성 문구보다 실제 확인 가능한 자료와 외부 공식 링크를 중심으로 정리합니다. 보험금 청구나 가입 판단을 대신하지 않고, 사용자가 어떤 자료를 먼저 확인해야 하는지 순서를 잡아주는 정보형 사이트를 목표로 합니다.</p>
      <p>보험사 전산과 청구서 링크는 바뀌는 경우가 있으므로 실제 접수 전에는 각 보험회사 공식 홈페이지, 고객센터, 전산 공지에서 최신 여부를 다시 확인해야 합니다. 표와 가이드는 업무 속도를 높이기 위한 참고 자료이며, 보험금 지급 판단이나 법률 자문을 제공하지 않습니다.</p>
    </section>
  `;
}

function downloadStripHtml() {
  const downloadLinks = GUIDE_ARTICLES.filter((article) => article.category === "치아보험").map((article) => [article.linkLabel, article.linkUrl]);
  return `<section class="download-strip">${downloadLinks.map(([label, url]) => `<div><span>※ ${esc(label)}</span><a href="${esc(url)}" target="_blank" rel="nofollow noopener">다운로드</a></div>`).join("")}</section>`;
}

function homeLinkGroupsHtml() {
  const groups = [
    ["치아보험", GUIDE_ARTICLES.filter((article) => article.category === "치아보험").map((article) => [article.linkLabel, article.linkUrl])],
    ["자동차 보험", GUIDE_ARTICLES.filter((article) => article.category === "자동차 보험").map((article) => [article.linkLabel, article.linkUrl])],
    ["화재보험", GUIDE_ARTICLES.filter((article) => article.category === "화재보험").map((article) => [article.linkLabel, article.linkUrl])],
    ["실손보험", GUIDE_ARTICLES.filter((article) => article.category === "실손보험").map((article) => [article.linkLabel, article.linkUrl])],
    ["승강기보험", GUIDE_ARTICLES.filter((article) => article.category === "승강기보험").map((article) => [article.linkLabel, article.linkUrl])],
    ["GA 필수 링크", GUIDE_ARTICLES.filter((article) => article.category === "GA 필수 링크").map((article) => [article.linkLabel, article.linkUrl])],
    ["보험교육", GUIDE_ARTICLES.filter((article) => article.category === "보험교육").map((article) => [article.linkLabel, article.linkUrl])]
  ];
  return `<section class="link-groups">${groups.map(([title, links]) => `<div class="link-group"><h2>${esc(title)}</h2><div>${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="nofollow noopener">${esc(label)}</a>`).join("")}</div></div>`).join("")}</section>`;
}

function categoryHtml(category) {
  const articles = ARTICLES.filter((article) => article.categorySlug === category.slug);
  return `
    <article class="narrow wide category-page">
      <p class="eyebrow">${esc(category.label)}</p>
      <h1>${esc(category.title)}</h1>
      <p class="lead">${esc(category.description)}</p>
      <p>${esc(category.label)} 카테고리는 단순 링크 모음이 아니라 실제 검색자가 확인하려는 흐름을 기준으로 만들었습니다. 먼저 외부 자료 링크에서 원자료를 확인하고, 그 다음 아래 가이드 글에서 어떤 항목을 비교해야 하는지 읽을 수 있게 구성했습니다.</p>
      <div class="pill-links">${category.links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="nofollow noopener">${esc(label)}</a>`).join("")}</div>
      <section class="topics in-page">
        <header class="block-header"><h2>${esc(category.label)} 가이드 글</h2><p>각 글은 공백을 제외해 1,500자 이상 분량으로 구성되어 검색 노출용 얇은 페이지가 되지 않도록 했습니다.</p></header>
        <div class="guide-grid">${articles.map((article) => guideCard(article)).join("")}</div>
      </section>
      ${categoryLongCopy(category)}
      ${faqHtml(category.slug)}
    </article>
  `;
}

function categoryLongCopy(category) {
  return `
    <section class="content-block flush">
      <h2>${esc(category.label)} 자료를 볼 때의 기준</h2>
      <p>${esc(category.label)} 자료는 같은 이름의 서비스라도 사용 목적에 따라 확인 위치가 달라질 수 있습니다. 견적 확인, 청구 준비, 교육 이수, 공적 자료 조회처럼 목적을 먼저 구분하면 불필요한 검색을 줄일 수 있습니다. 특히 외부 링크가 여러 개 있는 항목은 하나의 링크만 보고 끝내기보다 공식 공시, 원자료, 고객센터 안내를 함께 보는 편이 안전합니다.</p>
      <p>이 카테고리의 글들은 링크 하나를 소개하는 데서 멈추지 않고, 실제 업무에서 어떤 정보를 준비해야 하는지, 어떤 항목이 빠지면 다시 확인해야 하는지, 언제 고객센터 또는 공식 홈페이지에서 최종 확인해야 하는지를 함께 설명합니다. 검색으로 들어온 사용자가 바로 링크를 누를 수도 있고, 먼저 가이드를 읽고 자료의 의미를 이해할 수도 있도록 구성했습니다.</p>
      <p>보험 관련 자료는 변경 가능성이 높습니다. 양식, 제출처, 고객센터 번호, 교육 일정, 약관 공시 위치는 회사 정책이나 사이트 개편으로 바뀔 수 있으므로 실제 접수나 신청 전에는 외부 원본 페이지에서 최신 정보를 다시 확인해야 합니다.</p>
    </section>
  `;
}

function guideCard(article) {
  return `<a class="guide-card" href="/articles/${esc(article.slug)}/"><span>${esc(article.category)}</span><h2>${esc(article.title)}</h2><p>${esc(article.excerpt)}</p><div class="card-meta"><time datetime="${esc(article.date || "2026-05-26")}">${esc(article.date || "2026-05-26")}</time><em>가이드</em></div></a>`;
}

function compareHtml(title, rows) {
  return `
    <article class="narrow wide">
      <p class="eyebrow">보험사 비교표</p>
      <h1>${esc(title)}</h1>
      <p class="lead">보험회사 전산, 고객센터, 인콜 모니터링, 전산 헬프데스크, 청구팩스, 약관확인, 청구서 링크를 한 표에서 확인할 수 있습니다.</p>
      ${insurerTableHtml(rows)}
    </article>
  `;
}

function claimChecklistHtml(env) {
  const claimGuides = ARTICLES.filter((article) => ["치아보험", "실손보험", "화재보험", "승강기보험"].includes(article.category));
  return `
    <article class="narrow wide">
      <p class="eyebrow">청구 체크리스트</p>
      <h1>보험금 청구 전 확인해야 할 자료와 순서</h1>
      <p class="lead">보험금 청구는 양식 다운로드보다 먼저 청구 유형, 보험회사, 사고일 또는 치료일, 제출 경로를 구분해야 합니다. 이 페이지는 청구 전에 빠뜨리기 쉬운 항목을 한 번에 점검하도록 만든 독립 체크리스트입니다.</p>
      <section class="content-block flush">
        <h2>1. 청구 유형을 먼저 나누기</h2>
        <p>보험금 청구는 실손의료비, 진단비, 수술비, 입원일당, 치아보험, 배상책임, 화재보험, 승강기 관련 의무보험처럼 목적에 따라 요구 서류가 달라집니다. 같은 병원 영수증이라도 실손보험 청구인지, 치아보험 청구인지, 상해 진단비 청구인지에 따라 추가로 필요한 진단서나 치료확인서가 달라질 수 있습니다. 따라서 가장 먼저 해야 할 일은 보험회사 이름보다 청구하려는 담보와 사고 유형을 구분하는 것입니다.</p>
        <p>치아보험은 손해보험사와 생명보험사의 청구양식이 다를 수 있고, 치료 항목에 따라 치과치료확인서, 진료기록, 파노라마 사진, 치아 번호가 필요할 수 있습니다. 실손보험은 진료비 영수증과 진료비 세부내역서가 기본이지만 금액, 치료 내용, 비급여 항목에 따라 진단서나 소견서가 추가될 수 있습니다. 화재보험과 배상책임 청구는 사고 현장 사진, 견적서, 피해 사실 확인 자료가 중요합니다.</p>
      </section>
      <section class="content-block flush">
        <h2>2. 공통으로 준비할 자료</h2>
        <p>대부분의 청구에서 공통으로 확인해야 할 자료는 보험금 청구서, 개인정보 처리 동의서, 신분증 사본, 통장 사본, 진료비 영수증, 진료비 세부내역서입니다. 미성년자나 대리 청구가 포함되면 가족관계증명서, 위임장, 인감 또는 본인서명 사실확인서가 필요할 수 있습니다. 보험회사별 양식에는 서명 위치, 계좌 정보, 연락처, 사고 경위 작성란이 다르므로 양식을 내려받은 뒤 빈칸을 먼저 확인하는 편이 좋습니다.</p>
        <p>팩스나 모바일 앱으로 제출할 때는 파일 해상도와 페이지 순서도 중요합니다. 글자가 흐리거나 일부가 잘리면 접수 후 보완 요청이 발생할 수 있습니다. 여러 명의 서류를 한 번에 보내는 경우에는 피보험자별로 파일을 구분하고, 병원 서류와 보험회사 양식을 분리해 이름을 붙이면 나중에 확인하기 쉽습니다.</p>
      </section>
      <section class="content-block flush">
        <h2>3. 보험 가입 전 준비 가이드</h2>
        <p>보험금 청구를 잘하려면 가입 전 단계에서 정보가 정확해야 합니다. 고지의무를 놓치거나 기존 보험을 확인하지 않고 새 계약을 체결하면 나중에 보험금 청구 때 보완 요청, 부담보, 지급 제한, 분쟁으로 이어질 수 있습니다. 아래 글들은 보험에 가입하기 전에 준비해야 할 자료와 확인 순서를 주제별로 정리한 가이드입니다.</p>
        <div class="guide-grid">${PRE_JOIN_ARTICLES.map((article) => guideCard(article)).join("")}</div>
      </section>
      <section class="content-block flush">
        <h2>4. 바로 확인할 청구 관련 가이드</h2>
        <div class="guide-grid">${claimGuides.map((article) => guideCard(article)).join("")}</div>
      </section>
      <section class="content-block flush">
        <h2>5. 최종 제출 전 확인</h2>
        <p>청구 전에는 보험회사 공식 홈페이지나 고객센터에서 최신 접수 방식과 팩스번호를 다시 확인해야 합니다. 보험회사는 양식, 접수 부서, 모바일 제출 가능 금액, 원본 제출 기준을 변경할 수 있습니다. 이 사이트의 표와 가이드는 자료를 빠르게 찾기 위한 안내이며, 실제 보험금 지급 여부를 판단하지 않습니다. 지급 심사와 보완 요청은 보험회사 약관, 가입 시점, 사고 내용, 제출 서류에 따라 달라집니다.</p>
        <p>제출 후에는 접수번호, 접수일, 담당 부서, 보완 요청 여부를 기록해 두는 것이 좋습니다. 특히 치아보험, 실손보험, 배상책임 청구는 치료 과정이 길거나 서류가 나뉘는 경우가 많아 나중에 어떤 서류를 냈는지 기억하기 어렵습니다. 접수 내역을 남겨두면 재청구, 추가 청구, 보완 제출 때 시간을 줄일 수 있습니다.</p>
      </section>
    </article>
  `;
}

function insurerTableHtml(rows = INSURERS) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>보험회사 전산</th><th>구분</th><th>브라우저</th><th>고객센터</th><th>인콜 모니터링</th><th>전산 헬프데스크</th><th>보험금 청구팩스</th><th>약관확인</th><th>청구서</th>
          </tr>
        </thead>
        <tbody>${rows.map((row, index) => insurerRowHtml(row, index)).join("")}</tbody>
      </table>
    </div>
  `;
}

function insurerRowHtml(item, index) {
  const [slug, name, type, browser, center, monitoring, helpdesk, fax, note] = item;
  const links = EXTERNAL_LINKS[slug] || {};
  return `
    <tr${index % 2 ? " class=\"shaded\"" : ""}>
      <td><span class="company">${esc(name)}</span></td>
      <td>${esc(type)}</td>
      <td>${browserIcons(browser)}</td>
      <td>${phoneLink(center)}</td>
      <td>${phoneLink(monitoring)}</td>
      <td>${phoneLink(helpdesk)}</td>
      <td>${phoneLink(fax)}</td>
      <td>${externalHandLink(links.terms, `${name} 약관확인`)}</td>
      <td>${externalHandLink(links.claim, `${name} 청구서`)}${links.extraClaim ? `<a class="extra-link" href="${esc(links.extraClaim)}" rel="nofollow noopener" target="_blank">${esc(note || "간병")}</a>` : (note ? `<span class="extra-link">${esc(note)}</span>` : "")}</td>
    </tr>
  `;
}

function articleHtmlLegacy(article) {
  const links = [[article.linkLabel, article.linkUrl], ...(article.extraLinks || [])].filter(([label, url]) => label && url);
  return `
    <article class="narrow article">
      <p class="eyebrow">${esc(article.category)}</p>
      <h1>${esc(article.title)}</h1>
      <p class="lead">${esc(article.excerpt)}</p>
      <p class="article-meta">최종 수정: <time datetime="${esc(article.date)}">${esc(article.date)}</time> · 보험 업무 자료센터</p>
      ${links.length ? `<div class="article-links">${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="nofollow noopener">${esc(label)} 열기</a>`).join("")}</div>` : ""}
      <div class="article-checklist">
        <h2>핵심 체크리스트</h2>
        <ul>
          <li>자료를 보기 전에 목적을 먼저 정리합니다.</li>
          <li>외부 링크는 원자료 확인용으로 사용하고 최종 판단은 공식 안내를 기준으로 합니다.</li>
          <li>번호, 양식, 공시 위치는 바뀔 수 있으므로 실제 접수 전 최신 여부를 확인합니다.</li>
          <li>고객에게 안내할 때는 약관, 공시, 고객센터 답변을 함께 남기는 편이 안전합니다.</li>
        </ul>
      </div>
      ${articleLongSections(article)}
      ${articleFaqHtml(article)}
      <section>
        <h2>함께 확인하면 좋은 자료</h2>
        <p>홈에는 자동차 보험, 화재보험, 치아보험, 실손보험, 승강기보험, GA 필수 링크, 보험교육 자료가 한 화면에 정리되어 있습니다. 한 자료만 보고 판단하면 누락이 생길 수 있으므로 관련 가이드와 보험사 표를 같이 확인하는 방식이 좋습니다.</p>
        <p><a class="text-link" href="/">통합 홈 가이드 보기</a> · <a class="text-link" href="/compare/">보험사 전산 링크 비교표 보기</a></p>
      </section>
    </article>
  `;
}

function articleLongSections(article) {
  const keyword = article.title;
  const category = article.category;
  const focus = articleFocus(article);
  const paragraphs = [
    [`${keyword}을 먼저 확인해야 하는 이유`, `${keyword}은 ${category} 업무에서 검색자가 실제로 원자료를 찾는 경우가 많은 주제입니다. ${focus.reason} 그래서 단순히 링크를 눌러 보는 것보다 자료가 어느 단계에서 쓰이는지, 고객에게 어떤 조건을 먼저 확인해야 하는지, 최종 판단을 어느 기관 안내에 맞춰야 하는지를 함께 보는 것이 중요합니다.`],
    [`준비해야 할 기본 정보`, `${keyword}을 활용하기 전에는 ${focus.prepare}를 먼저 정리하는 편이 좋습니다. 기준 정보가 정리되어 있으면 외부 링크에서 같은 화면을 반복해서 찾는 시간을 줄일 수 있고, 고객센터에 문의할 때도 질문이 짧고 정확해집니다. 특히 날짜, 대상자, 계약 또는 물건 정보는 대부분의 조회와 신청에서 공통으로 요구됩니다.`],
    [`외부 링크 적용 방법`, `이 글에 연결된 외부 링크는 ${focus.linkUse} 용도로 사용합니다. 링크가 열리더라도 실제 접수 가능 여부, 최신 양식 여부, 적용 기준은 기관이나 보험회사 정책에 따라 달라질 수 있습니다. 다운로드 파일, 조회시스템, 공시실, 교육 사이트는 화면 개편이나 권한 설정으로 바뀔 수 있으므로 최종 안내 전에는 공식 페이지의 현재 공지를 함께 확인해야 합니다.`],
    [`누락되기 쉬운 부분`, `${category} 업무에서 자주 빠지는 부분은 ${focus.miss}입니다. 처음부터 이 항목을 확인하지 않으면 다시 서류를 받거나 고객에게 같은 질문을 반복해야 할 수 있습니다. 특히 보험 관련 자료는 같은 명칭이라도 회사별, 상품별, 가입 시점별로 의미가 달라질 수 있으므로 약관과 공시 자료를 함께 보는 습관이 필요합니다.`],
    [`업무 기록으로 남겨야 할 내용`, `${keyword}을 확인한 뒤에는 확인일, 확인한 링크, 조회 조건, 안내한 내용, 추가 문의 결과를 남겨두는 편이 좋습니다. 나중에 같은 건을 다시 볼 때 판단 근거가 남아 있어야 하며, 링크가 바뀌거나 파일이 교체되었을 때도 당시 기준을 추적할 수 있습니다. 화면 캡처나 접수번호가 있다면 함께 보관하면 좋습니다.`],
    [`최종 확인 기준`, `${keyword}의 최종 기준은 이 사이트의 설명이 아니라 해당 기관 또는 보험회사의 공식 안내입니다. 이 페이지는 검색자가 자료를 더 빨리 찾고, 어떤 항목을 놓치면 안 되는지 이해하도록 돕는 안내 페이지입니다. 실제 계약 체결, 보험금 청구, 교육 이수, 신고나 접수는 반드시 원자료와 공식 담당 창구에서 최신 내용을 확인한 뒤 진행해야 합니다.`]
  ];
  return paragraphs.map(([heading, content]) => `<section><h2>${esc(heading)}</h2><p>${esc(content)}</p></section>`).join("");
}

function articleFocus(article) {
  if (article.category === "자동차 보험") return {
    reason: "자동차보험은 견적, 할인·할증, 운전자 범위, 과실비율, 결제 조건이 서로 연결되어 한 항목만 확인하면 판단이 흔들릴 수 있습니다.",
    prepare: "차량번호, 차종, 최초등록일, 운전자 범위, 사고 이력, 갱신 예정일, 원하는 담보와 특약",
    linkUse: "견적 비교, 사고 과실 확인, 할인·할증 원인 확인, 결제 조건 확인",
    miss: "운전자 한정 범위, 마일리지 특약, 블랙박스 특약, 대물 한도, 자기부담금"
  };
  if (article.category === "화재보험") return {
    reason: "화재보험은 건물 구조와 업종, 임대차 관계, 특수건물 여부에 따라 필요한 담보와 확인 자료가 달라집니다.",
    prepare: "사업장 주소, 건축물 용도, 면적, 구조, 업종, 재고 규모, 임대차 여부, 시설 소유 관계",
    linkUse: "사업장 체크리스트 확인, 특수건물 대상 여부 조회, 건축물대장 원자료 확인",
    miss: "건물과 시설 소유자 구분, 휴업손해, 시설소유자 배상책임, 재고 금액 변동"
  };
  if (article.category === "치아보험") return {
    reason: "치아보험은 치료 항목과 치료일, 치아 번호, 면책·감액기간에 따라 청구 가능 여부와 준비 서류가 달라집니다.",
    prepare: "치료일, 치아 번호, 치료명, 진료비 영수증, 진료비 세부내역서, 치과치료확인서, 영상자료 여부",
    linkUse: "손해보험 또는 생명보험 치아보험 청구양식 확인과 회사별 서류 차이 점검",
    miss: "면책기간, 감액기간, 보장개시일, 치료 전후 영상자료, 기존 질환 여부"
  };
  if (article.category === "보험교육") return {
    reason: "보험교육은 시험 준비, 등록교육, 보수교육, 변액 자격처럼 목적별로 접속해야 하는 자료와 이수 기준이 다릅니다.",
    prepare: "교육 대상, 자격 종류, 시험 일정, 이수 기간, 소속 대리점 또는 회사, 필요한 교재와 모의고사",
    linkUse: "교재 확인, 모의고사 학습, 보험연수원 교육 신청과 이수 상태 확인",
    miss: "이수 기간, 보수교육 대상 여부, 시험 과목 구분, 등록 전 필요한 서류"
  };
  if (article.category === "청구 체크리스트") return {
    reason: "보험 가입 전 정보가 부정확하면 나중에 보험금 청구 단계에서 고지의무, 보장 제외, 수익자, 납입 상태, 기존 계약 중복 문제가 한꺼번에 드러날 수 있습니다.",
    prepare: "신분 정보, 직업, 가족관계, 기존 보험 증권, 최근 병력, 검사 이력, 복용 약, 보험료 예산, 납입 계좌, 수익자 정보",
    linkUse: "가입 전 소비자 정보 확인, 상품 비교, 약관과 설명서 검토, 기존 계약 점검",
    miss: "최근 치료 이력, 부담보 가능성, 갱신 보험료, 면책기간, 감액기간, 기존 보험과의 중복 보장"
  };
  if (article.category === "자녀보험") return {
    reason: "자녀보험은 나이와 성장 상태, 병력 고지, 보호자 정보가 심사와 안내에 직접 영향을 줍니다.",
    prepare: "자녀의 생년월일, 키와 몸무게, 최근 진료 이력, 보호자 정보, 가입하려는 담보",
    linkUse: "표준 키와 몸무게 자료 확인 및 심사 전 기초 정보 점검",
    miss: "최근 치료 이력, 선천성 질환 고지, 보호자 동의, 학교·운동 관련 위험"
  };
  if (article.category === "실손보험") return {
    reason: "실손보험은 인수기준과 병력 고지, 기존 가입 여부에 따라 가입 가능성과 보장 범위가 달라집니다.",
    prepare: "최근 치료 이력, 투약 여부, 기존 실손 가입 여부, 직업, 병력 고지 대상 기간",
    linkUse: "실손보험 인수기준과 공시 자료 확인",
    miss: "중복 가입, 부담보 조건, 고지 누락, 전환형 실손 여부"
  };
  if (article.category === "승강기보험") return {
    reason: "승강기보험은 관리 주체와 승강기 정보, 의무보험 여부를 정확히 확인해야 합니다.",
    prepare: "건물 주소, 승강기 번호, 관리 주체, 설치 장소, 사용 용도",
    linkUse: "승강기 정보 열람과 의무보험 검토",
    miss: "관리주체 변경, 승강기 대수, 설치 장소, 점검 이력"
  };
  return {
    reason: "GA 업무는 상품 비교, 등기 접수, 교육 자료처럼 여러 기관과 보험회사 자료를 동시에 확인해야 합니다.",
    prepare: "확인하려는 보험회사, 상품명, 접수 방식, 우편 주소, 자료 기준일",
    linkUse: "대리점 협회 상품 비교와 등기우편 접수 주소 확인",
    miss: "주소 변경, 상품명 오기재, 접수 부서 누락, 발송일 기록"
  };
}

function articleFaqHtml(article) {
  const focus = articleFocus(article);
  const faqs = [
    [`${article.title}을 확인할 때 가장 먼저 볼 항목은 무엇인가요?`, `${focus.prepare} 중에서 현재 상황에 해당하는 정보를 먼저 정리하는 것이 좋습니다. 자료를 먼저 열어도 기준 정보가 없으면 같은 화면을 반복해서 확인하게 됩니다. 특히 보험 관련 업무는 날짜, 대상자, 계약자와 피보험자, 사고 또는 치료의 기준일이 중요합니다. 먼저 정보를 정리한 뒤 이 글에 연결된 외부 원자료를 열어 기준일, 적용 대상, 제출 방식, 제한 조건을 차례대로 확인하세요.`],
    [`${article.category} 자료의 외부 링크가 열리지 않으면 어떻게 해야 하나요?`, `${article.category} 관련 사이트는 기관 개편, 보안 정책, 파일 위치 변경, 권한 설정 때문에 주소가 바뀔 수 있습니다. 링크가 열리지 않으면 이 글의 링크명과 기관명을 함께 검색하고, 보험회사나 기관의 공식 홈페이지 메뉴에서 같은 자료명을 다시 찾아보는 것이 좋습니다. 실제 청구, 가입, 교육 신청, 조회 업무를 진행하기 전에는 고객센터 공지나 공식 안내문에서 최신 경로를 한 번 더 확인해야 합니다.`],
    [`${article.title} 내용을 고객에게 그대로 안내해도 되나요?`, `이 페이지는 업무 확인 순서를 돕는 참고 글입니다. 고객에게 안내할 때는 ${focus.linkUse}에 해당하는 원자료를 직접 확인한 뒤, 보험회사나 기관의 공식 문구를 기준으로 설명하는 편이 안전합니다. 특히 지급 가능성, 가입 가능성, 보험료 변동, 과실비율, 교육 이수 인정 여부처럼 결과가 달라질 수 있는 내용은 단정적으로 말하지 말고 최종 판단 기관을 함께 안내해야 합니다.`],
    [`이 자료를 확인한 뒤 기록으로 남겨야 할 내용은 무엇인가요?`, `확인일, 확인한 외부 링크, 조회 조건, 고객에게 안내한 핵심 내용, 추가로 문의한 고객센터 답변을 남겨두면 좋습니다. 나중에 링크가 바뀌거나 서류가 교체되었을 때 당시 어떤 기준으로 안내했는지 확인할 수 있습니다. 보험금 청구나 가입 전 검토는 시간이 지난 뒤 다시 확인해야 하는 경우가 많기 때문에 간단한 기록이 분쟁 예방에 도움이 됩니다.`]
  ];
  return `<section class="article-faq"><h2>자주 묻는 질문</h2>${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>`;
}

function articleHtmlOld(article) {
  const links = [[article.linkLabel, article.linkUrl], ...(article.extraLinks || [])].filter(([label, url]) => label && url);
  const copy = articleUniqueCopy(article);
  return `
    <article class="narrow article">
      <p class="eyebrow">${esc(article.category)}</p>
      <h1>${esc(article.title)}</h1>
      <p class="lead">${esc(copy.lead || article.excerpt)}</p>
      <p class="article-meta">최종 수정: <time datetime="${esc(article.date)}">${esc(article.date)}</time> · 보험 업무 자료센터</p>
      ${articleSummaryHtml(article)}
      ${links.length ? `<div class="article-links">${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="nofollow noopener">${esc(label)} 열기</a>`).join("")}</div>` : ""}
      ${copy.sections.map((section) => `<section><h2>${esc(section[0])}</h2><p>${esc(section[1])}</p></section>`).join("")}
      ${articleExpansionHtml(article)}
      <section class="article-faq">
        <h2>${esc(copy.faqTitle || "이 글에서 자주 막히는 부분")}</h2>
        ${copy.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
      </section>
    </article>
  `;
}

function articleSummaryHtml(article) {
  const summary = ARTICLE_SUMMARIES[article.slug];
  if (!summary) return "";
  return `
    <section class="article-summary">
      <h2>${esc(summary.title)}</h2>
      <ul>${summary.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function articleHtml(article) {
  const links = [[article.linkLabel, article.linkUrl], ...(article.extraLinks || [])].filter(([label, url]) => label && url);
  const copy = articleUniqueCopy(article);
  return `
    <article class="narrow article">
      <p class="eyebrow">${esc(article.category)}</p>
      <h1>${esc(article.title)}</h1>
      <p class="lead">${esc(copy.lead || article.excerpt)}</p>
      <p class="article-meta">최종 수정: <time datetime="${esc(article.date)}">${esc(article.date)}</time> · 보험 업무 자료센터</p>
      ${articleSummaryHtml(article)}
      ${links.length ? `<div class="article-links">${links.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="nofollow noopener">${esc(label)} 열기</a>`).join("")}</div>` : ""}
      ${articleStructuredSectionsHtml(article, copy)}
      ${articleProblemTableHtml(article)}
      ${articleStepGuideHtml(article)}
      <section class="article-faq">
        <h2>${esc(copy.faqTitle || "자주 묻는 질문")}</h2>
        ${copy.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
      </section>
      ${articleFinalChecklistHtml(article)}
    </article>
  `;
}

function articleStructuredSectionsHtml(article, copy) {
  const sections = SPECIAL_ARTICLE_SECTIONS[article.slug] || copy.sections;
  return sections.map((section, index) => `
    <section>
      <h2>${index + 1}. ${esc(section[0])}</h2>
      ${section.slice(1).concat(articleSectionAdditions(article, index)).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
    </section>
  `).join("");
}

function articleSectionAdditions(article, index) {
  const additions = ARTICLE_SECTION_ADDITIONS[article.slug];
  return additions && additions[index] ? additions[index] : [];
}

function articleProblemTableHtml(article) {
  const rows = ARTICLE_TABLES[article.slug] || defaultArticleTable(article);
  return `
    <section class="article-table-section">
      <h2>${esc(numberedArticleSectionTitle(article, articleTableTitle(article)))}</h2>
      <p>${esc(articleTableIntro(article))}</p>
      <div class="mini-table-wrap">
        <table class="mini-table">
          <thead><tr><th>${esc(rows.headers[0])}</th><th>${esc(rows.headers[1])}</th><th>${esc(rows.headers[2])}</th></tr></thead>
          <tbody>${rows.items.map((row) => `<tr><td>${esc(row[0])}</td><td>${esc(row[1])}</td><td>${esc(row[2])}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function articleStepGuideHtml(article) {
  const steps = ARTICLE_STEPS[article.slug] || defaultArticleSteps(article);
  return `
    <section>
      <h2>${esc(numberedArticleSectionTitle(article, steps.title))}</h2>
      <p>${esc(steps.intro)}</p>
      ${steps.items.map((step, index) => `<h3>${index + 1}단계: ${esc(step[0])}</h3><p>${esc(step[1])}</p>`).join("")}
    </section>
  `;
}

function articleFinalChecklistHtml(article) {
  const checklist = ARTICLE_FINAL_CHECKLISTS[article.slug] || defaultFinalChecklist(article);
  return `
    <section class="final-checklist">
      <h2>${esc(checklist.title)}</h2>
      <ul>${checklist.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function numberedArticleSectionTitle(article, title) {
  const count = (SPECIAL_ARTICLE_SECTIONS[article.slug] || articleUniqueCopy(article).sections).length;
  if (/^\d+\.\s/.test(title)) {
    const rest = title.replace(/^\d+\.\s*/, "");
    const base = title.includes("실전 점검") ? count + 1 : count + 2;
    return `${base}. ${rest}`;
  }
  const offset = title.includes("점검표") || title.includes("유형별") ? 1 : 2;
  return `${count + offset}. ${title}`;
}

function articleExpansionHtml(article) {
  const item = ARTICLE_EXPANSIONS[article.slug];
  if (!item) return "";
  const notes = ARTICLE_MORE_NOTES[article.slug] || [];
  const finals = ARTICLE_FINAL_NOTES[article.slug] || [];
  const pads = ARTICLE_PAD_NOTES[article.slug] || [];
  return `<section><h2>${esc(item[0])}</h2>${item.slice(1).concat(notes, finals, pads).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</section>`;
}

function articleUniqueCopy(article) {
  const item = UNIQUE_ARTICLE_COPY[article.slug];
  if (item) return item;
  return {
    lead: article.excerpt,
    sections: [
      [`${article.title}을 실제로 쓰는 장면`, `${article.title}은 단순한 링크명이 아니라 업무 흐름 안에서 특정 판단을 도와주는 자료입니다. 먼저 본인이 확인하려는 대상과 목적을 분리하고, 외부 링크에서는 원자료의 최신 날짜와 적용 대상을 확인해야 합니다. 검색으로 들어온 사용자가 바로 행동할 수 있도록 이 글은 확인 순서, 기록 방법, 주의할 표현을 중심으로 정리했습니다.`],
      ["한 번 더 봐야 하는 기준", "보험 업무 자료는 회사, 상품, 시점에 따라 달라질 수 있습니다. 화면에 보이는 항목을 그대로 옮기기보다 약관, 공시, 고객센터 안내, 접수 화면의 문구가 서로 맞는지 확인하는 것이 좋습니다. 특히 지급 가능성이나 가입 가능성을 단정하는 표현은 피하고, 공식 창구에서 다시 확인해야 하는 항목을 따로 표시해 두면 안전합니다."],
      ["기록으로 남기면 좋은 내용", "확인한 날짜, 접속한 링크, 안내받은 전화번호, 제출한 서류명, 담당자 답변은 나중에 같은 질문이 반복될 때 기준이 됩니다. 자료가 바뀌거나 파일명이 달라져도 과거 기록이 있으면 어떤 근거로 안내했는지 설명할 수 있습니다. 개인 정보는 최소한으로 남기고, 필요한 경우 접수번호 중심으로 정리합니다."]
    ],
    faqs: [
      ["이 자료만 보면 결론을 내려도 되나요?", "아닙니다. 이 글은 원자료를 찾고 확인 순서를 줄이는 안내입니다. 실제 계약, 청구, 교육 신청, 사고 접수는 해당 기관이나 보험사의 공식 안내를 최종 기준으로 삼아야 합니다."],
      ["외부 링크가 열리지 않으면 어떻게 하나요?", "기관 사이트 개편이나 점검으로 주소가 바뀔 수 있습니다. 링크명과 기관명을 함께 검색하고, 공식 홈페이지의 메뉴에서 같은 자료명을 다시 찾아보는 방식이 좋습니다."],
      ["업무 메모에는 무엇을 남기면 좋나요?", "확인 날짜, 링크 주소, 자료명, 안내받은 핵심 문구, 다음에 확인해야 할 항목을 남기면 충분합니다. 주민등록번호나 진료기록 같은 민감 정보는 업무 메모에 남기지 않는 것이 안전합니다."]
    ]
  };
}

const UNIQUE_ARTICLE_COPY = {
  "dental-nonlife-forms": {
    lead: "손해보험 치아보험 청구양식은 치과치료확인서의 항목을 먼저 읽어야 보완 요청을 줄일 수 있습니다.",
    sections: [
      ["치아번호가 빠지면 청구가 느려집니다", "손해보험 치아청구는 치료비 금액보다 어떤 치아에 어떤 치료가 이뤄졌는지가 먼저 확인됩니다. 임플란트, 브릿지, 크라운, 레진처럼 치료명이 달라도 치아번호와 치료일자가 빠지면 보험사가 약관상 보장 항목을 판단하기 어렵습니다. 양식을 열었다면 청구서보다 치과치료확인서의 빈칸을 먼저 훑어보는 편이 좋습니다."],
      ["병원에 보여줄 양식은 따로 챙깁니다", "치과에 서류를 요청할 때는 보험사 양식을 함께 보여주는 것이 가장 빠릅니다. 병원 자체 확인서에는 필요한 내용이 일부 빠질 수 있고, 보험사 양식에는 치료 시작일, 치료 완료일, 치료명, 치아번호, 발치 여부처럼 청구 판단에 필요한 표현이 들어 있습니다. 접수 전에 병원 직인과 의사 확인란도 같이 봐야 합니다."],
      ["영수증과 세부내역서는 역할이 다릅니다", "진료비 영수증은 결제 금액을 보여주고, 세부내역서는 어떤 치료가 어떤 비용으로 청구됐는지 보여줍니다. 치아보험은 치료 사실과 약관상 보장 기준을 함께 보므로 두 서류를 같은 자료로 생각하면 안 됩니다. 특히 보철치료는 치료 목적과 재료, 완료 시점이 중요해 추가 자료가 필요할 수 있습니다."],
      ["보철치료는 날짜 흐름을 따로 적습니다", "발치 후 임플란트까지 시간이 오래 걸렸다면 발치일, 식립일, 보철 완료일을 따로 정리해 두면 좋습니다. 보험사는 치료 완료 시점을 기준으로 보는 경우가 있어 중간 영수증만 제출하면 보완 안내가 나올 수 있습니다. 여러 치아를 동시에 치료했다면 치아별로 줄을 나눠 적는 방식이 가장 깔끔합니다."],
      ["청구 전에는 면책과 감액을 같이 봅니다", "치아보험은 가입 직후 바로 전액 보장되지 않는 경우가 많습니다. 면책기간, 감액기간, 보장개시일, 보철치료 한도, 연간 개수 제한을 약관에서 확인해야 합니다. 양식을 완벽히 준비해도 약관상 기간이 맞지 않으면 지급액이 달라질 수 있으므로 서류 준비와 약관 확인을 분리해서 진행하는 것이 안전합니다."]
    ],
    faqTitle: "손해보험 치아청구 FAQ",
    faqs: [
      ["치과치료확인서 없이 영수증만 내도 되나요?", "간단한 치료는 가능할 수 있지만 보철치료나 발치가 포함된 청구는 확인서가 필요한 경우가 많습니다. 보험사 앱이나 고객센터에서 치료 항목별 필요서류를 먼저 확인하는 것이 좋습니다."],
      ["여러 보험사에 같은 서류를 써도 되나요?", "기본 진료서류는 같이 쓸 수 있지만 청구서와 개인정보 동의서는 회사별 양식을 요구할 수 있습니다. 각 보험사 양식의 서명란과 위임란을 따로 확인해야 합니다."],
      ["치료 전 사진이나 엑스레이가 꼭 필요한가요?", "항상 필요한 것은 아니지만 임플란트나 보철치료에서는 치료 전후 상태 확인 자료를 요청받을 수 있습니다. 병원에서 보관 기간이 지나기 전에 필요한지 확인하는 편이 좋습니다."],
      ["청구 기한은 언제까지인가요?", "일반적으로 보험금 청구권 소멸시효를 봐야 하지만 회사 안내와 사고 발생일, 치료일 기준을 함께 확인해야 합니다. 오래된 치료라면 접수 가능 여부를 먼저 문의하세요."]
    ]
  },
  "dental-life-forms": {
    lead: "생명보험 치아보험 청구는 특약명, 수익자, 치료 완료일을 함께 확인해야 합니다.",
    sections: [
      ["특약 이름을 모르면 양식 선택이 흔들립니다", "생명보험 치아보험은 단독 상품처럼 보여도 실제 증권에서는 특약으로 붙어 있는 경우가 많습니다. 그래서 청구양식을 내려받기 전에 상품명, 특약명, 피보험자, 수익자를 먼저 확인해야 합니다. 같은 치과치료라도 진단형과 무진단형, 갱신형 여부에 따라 보장개시일과 감액 조건이 달라질 수 있습니다."],
      ["수익자와 피보험자가 다르면 서명란부터 봅니다", "생명보험 청구서에는 계약자, 피보험자, 수익자 관계가 중요하게 나타납니다. 미성년 자녀 청구나 대리 청구라면 법정대리인 서류나 위임 관련 서류가 필요할 수 있습니다. 양식의 마지막 서명란을 먼저 보면 누가 작성해야 하는지 빠르게 파악할 수 있습니다."],
      ["치료 완료일은 생각보다 중요합니다", "임플란트나 브릿지처럼 여러 단계로 진행되는 치료는 첫 방문일과 완료일이 다릅니다. 보험사는 치료가 끝난 시점을 기준으로 서류를 요구할 수 있어 중간 영수증만으로는 판단이 어려울 수 있습니다. 병원 확인서에는 치료 시작일과 완료일이 구분되어 있는지 확인해야 합니다."],
      ["앱 접수와 종이 접수의 차이", "앱 접수는 청구서를 화면 입력으로 대체할 수 있지만 병원이 발급하는 자료까지 사라지는 것은 아닙니다. 사진 촬영으로 제출할 때는 전체 페이지, 병원명, 직인, 날짜가 잘 보이게 첨부해야 합니다. 흐릿한 사진은 보완 요청으로 이어지기 쉬우므로 파일명과 촬영 상태를 접수 전에 확인합니다."],
      ["청구 후에는 특약별 접수 결과를 나눠 봅니다", "여러 특약이 함께 있는 계약은 한 번 접수해도 항목별 심사 결과가 다르게 나올 수 있습니다. 진단비, 치료비, 보철치료비가 각각 어떻게 처리됐는지 확인하고, 부지급이나 감액 안내가 있다면 약관 조항과 연결해 기록해 두는 것이 좋습니다."]
    ],
    faqTitle: "생명보험 치아청구 FAQ",
    faqs: [
      ["생명보험 치아보험도 치과치료확인서가 필요한가요?", "대부분 필요할 수 있습니다. 치료명과 치아번호, 치료일자를 확인해야 하므로 보험사 양식 또는 병원 확인서가 요구되는지 먼저 확인하세요."],
      ["수익자가 가족이면 어떤 서류가 추가되나요?", "가족관계 확인서류나 위임 관련 서류가 필요할 수 있습니다. 계약 구조마다 다르므로 청구서의 수익자 서명란과 보험사 안내를 함께 봐야 합니다."],
      ["특약이 실효되었는지 어떻게 확인하나요?", "보험사 앱, 고객센터, 증권 조회 화면에서 현재 유지 여부를 확인할 수 있습니다. 보험료 미납이나 해지 이력이 있으면 청구 가능성이 달라질 수 있습니다."],
      ["치료가 끝나기 전에 먼저 청구해도 되나요?", "치료 항목에 따라 다릅니다. 완료일이 필요한 보철치료는 치료 종료 후 서류가 완성되는 경우가 많으므로 보험사에 접수 가능 시점을 먼저 문의하는 것이 좋습니다."]
    ]
  }
};

Object.assign(UNIQUE_ARTICLE_COPY, {
  "auto-face-quote": {
    lead: "대면 간편견적은 보험료 숫자를 보는 도구가 아니라 상담 조건을 고정하는 사전 정리표입니다.",
    sections: [
      ["상담 전에 운전자 범위를 먼저 닫아둡니다", "대면 상담에서 가장 자주 흔들리는 항목은 운전자 범위입니다. 부부 한정, 가족 한정, 누구나 운전, 지정 1인 조건은 보험료만 바꾸는 것이 아니라 사고 때 보상 가능성에도 영향을 줍니다. 실제로 운전할 사람을 먼저 적고, 명절이나 출장처럼 예외적으로 운전할 가능성이 있는 사람까지 따로 표시해 두면 상담 중 결정을 덜 흔들리게 할 수 있습니다."],
      ["차량 정보는 사진보다 숫자로 준비합니다", "자동차등록증 사진을 보여주는 것도 좋지만 상담 메모에는 차량번호, 차명, 최초등록일, 소유자, 용도, 주행거리 예상치를 숫자로 적어두는 편이 좋습니다. 견적 화면은 입력값이 조금만 달라도 보험료가 달라지므로 같은 조건으로 여러 회사 견적을 비교하려면 기준값을 고정해야 합니다."],
      ["저렴한 견적에서 빠진 담보를 찾습니다", "대면 간편견적에서 보험료가 낮게 나왔다면 먼저 자기신체사고와 자동차상해, 대물 한도, 자기차량손해 자기부담금, 긴급출동, 법률비용 특약을 확인합니다. 보험료가 낮은 이유가 할인 때문인지 보장 축소 때문인지 구분해야 실제 비교가 됩니다."],
      ["계약 직전에는 결제 혜택을 따로 분리합니다", "카드 무이자나 제휴 할인은 결제 조건이고 보장 내용은 아닙니다. 상담 기록에는 보험료, 보장 조건, 할인 특약, 결제 혜택을 나눠 남겨야 다음 갱신 때 무엇이 달라졌는지 알 수 있습니다."]
    ],
    faqs: [
      ["대면 간편견적과 다이렉트 견적은 무엇이 다른가요?", "대면 간편견적은 상담자가 조건을 확인하며 설명을 더하는 방식이고 다이렉트 견적은 사용자가 직접 조건을 입력하는 흐름입니다. 어느 쪽이든 최종 청약 화면의 조건이 기준입니다."],
      ["가장 싼 견적을 고르면 되나요?", "아닙니다. 대물 한도, 자상 선택, 운전자 범위, 자기부담금이 낮아져 보험료가 싸진 것인지 확인해야 합니다."],
      ["견적 화면은 저장해야 하나요?", "가능하면 저장하거나 캡처하는 것이 좋습니다. 보험료뿐 아니라 입력 조건이 보이게 남겨야 이후 비교가 가능합니다."]
    ]
  },
  "auto-premium-factor": {
    lead: "할인·할증요인 조회는 갱신 보험료가 왜 변했는지 설명할 때 가장 먼저 확인할 자료입니다.",
    sections: [
      ["갱신 보험료의 변동 이유를 분해합니다", "자동차보험 갱신 때 보험료가 올랐다고 해서 사고 이력만 원인인 것은 아닙니다. 차량가액, 연령 조건, 특약 변경, 법규위반, 할인 종료, 회사별 요율 변경이 함께 반영될 수 있습니다. 할인·할증요인 조회시스템은 이 요소를 한 번에 단정하기보다 보험료 변동을 설명할 실마리로 사용해야 합니다."],
      ["사고 점수와 할인 등급은 따로 봅니다", "사고가 있었다면 사고 내용, 지급 보험금, 사고 건수, 평가 기간을 나눠 확인합니다. 할인 등급이 내려간 것인지, 특별할증이 붙은 것인지, 사고가 아닌 다른 조건 때문에 보험료가 달라진 것인지 구분해야 고객에게 설명이 명확해집니다."],
      ["조회 전 본인 확인 절차를 준비합니다", "이 시스템은 개인의 보험료 산출과 관련된 정보가 들어 있어 본인 확인이 필요할 수 있습니다. 공동인증서나 휴대폰 인증이 막히면 조회가 지연되므로 갱신 상담 전에 필요한 인증 수단을 미리 준비하는 것이 좋습니다."],
      ["설명할 때 피해야 할 표현", "보험료가 오른 이유를 하나로 단정하면 민원이 생기기 쉽습니다. 조회 결과에 나온 항목과 보험사 산출 안내를 함께 확인한 뒤 '주요 원인으로 보인다'처럼 근거 중심으로 설명해야 합니다."]
    ],
    faqs: [
      ["할인·할증요인 조회 결과가 보험료 계산서인가요?", "아닙니다. 보험료 변동 요인을 확인하는 참고 자료입니다. 실제 보험료는 보험사 견적과 청약 화면에서 최종 확인해야 합니다."],
      ["사고가 없는데 보험료가 오를 수 있나요?", "가능합니다. 차량가액, 연령, 요율, 특약, 할인 종료, 물가와 정비비 반영 등 여러 요인이 있습니다."],
      ["조회 결과를 고객에게 그대로 보내도 되나요?", "개인정보가 포함될 수 있어 주의해야 합니다. 필요한 부분만 설명하고 민감한 정보는 가린 뒤 기록하는 것이 안전합니다."]
    ]
  },
  "auto-insurance-development": {
    lead: "보험개발원 등록 자료는 자동차보험 산출의 바탕이 되는 차량과 운전자 정보를 확인하는 입구입니다.",
    sections: [
      ["등록 정보가 틀리면 견적도 흔들립니다", "자동차보험 견적은 차량과 운전자 정보가 정확해야 의미가 있습니다. 차량번호, 차종, 연식, 용도, 소유자 정보가 잘못 연결되면 보험료 비교 자체가 왜곡될 수 있습니다. 보험개발원 관련 조회는 입력값이 맞는지 확인하는 기준점으로 사용하면 좋습니다."],
      ["중고차와 명의 변경은 특히 조심합니다", "중고차 구입 직후나 가족 간 명의 변경이 있었던 차량은 정보 반영 시점이 늦을 수 있습니다. 견적이 이상하게 나오면 차량 정보가 최신으로 반영됐는지, 이전 계약 정보가 남아 있는지 확인해야 합니다."],
      ["개인정보 확인은 최소 범위로 합니다", "자동차보험 조회에는 개인 식별과 차량 정보가 함께 들어갈 수 있습니다. 업무 기록에는 전체 주민등록번호나 불필요한 개인 정보를 남기지 말고, 확인 날짜와 조회 목적 중심으로 기록하는 것이 안전합니다."],
      ["견적 전 확인용으로만 사용합니다", "보험개발원 등록 확인이 곧 가입 승인을 의미하지는 않습니다. 실제 인수 가능 여부, 할인 특약 적용, 보험료 산출은 보험사 청약 단계에서 다시 검증됩니다."]
    ],
    faqs: [
      ["보험개발원 정보가 틀리면 어디에 문의하나요?", "조회 화면 안내와 보험사 고객센터를 함께 확인해야 합니다. 정보의 성격에 따라 차량 등록기관이나 보험사 확인이 필요할 수 있습니다."],
      ["명의 이전 직후 바로 견적이 가능한가요?", "가능할 수 있지만 정보 반영 시점 때문에 오류가 날 수 있습니다. 급한 경우 보험사 상담을 통해 필요한 서류를 확인하세요."],
      ["조회 기록을 오래 보관해도 되나요?", "개인정보가 포함될 수 있으므로 필요한 최소 기간만 보관하는 것이 좋습니다. 업무 메모에는 전체 식별정보를 남기지 마세요."]
    ]
  },
  "auto-fault-ratio": {
    lead: "과실비율 정보포털은 사고 당사자의 주장을 정리하기 전에 유사 사고 유형을 찾는 자료입니다.",
    sections: [
      ["사고 현장을 먼저 문장으로 고정합니다", "과실비율을 검색하기 전에 사고 장소, 진행 방향, 차로, 신호, 정차 여부, 끼어들기 여부를 짧은 문장으로 정리해야 합니다. 사고 설명이 매번 달라지면 같은 포털을 봐도 다른 사례를 고르게 됩니다."],
      ["유사 사례와 동일 사례는 다릅니다", "포털에서 찾은 사례가 비슷해 보여도 도로 구조, 속도, 신호, 블랙박스 증거에 따라 결론은 달라질 수 있습니다. 사례는 대화의 출발점일 뿐 실제 과실 판단은 보험사와 분쟁 절차에서 자료를 종합해 이뤄집니다."],
      ["블랙박스 메모를 같이 남깁니다", "영상이 있다면 파일명, 촬영 시간, 사고 전후 구간, 보이는 신호와 차선을 메모해 두는 것이 좋습니다. 나중에 영상을 다시 볼 때 필요한 장면을 빠르게 찾을 수 있습니다."],
      ["감정적인 표현은 기록에서 뺍니다", "과실비율 자료를 정리할 때 상대방이 일부러 그랬다는 식의 표현보다 확인 가능한 사실을 적는 것이 안전합니다. 객관적인 문장이 많을수록 보험사와의 소통이 빨라집니다."]
    ],
    faqs: [
      ["포털 사례가 나오면 과실이 확정되나요?", "아닙니다. 유사 사고 기준을 확인하는 자료입니다. 실제 과실은 사고 증거와 보험사 판단, 필요 시 분쟁 절차를 통해 정리됩니다."],
      ["블랙박스가 없으면 포털을 봐도 소용없나요?", "소용없지는 않습니다. 사고 형태를 이해하는 데 도움이 되지만, 사진, 현장 약도, 상대방 진술 등 다른 자료를 더 꼼꼼히 모아야 합니다."],
      ["고객에게 과실비율을 단정해서 말해도 되나요?", "단정 표현은 피하는 것이 좋습니다. 유사 사례 기준과 보험사 확인 필요성을 함께 안내해야 합니다."]
    ]
  },
  "fire-business-checklist": {
    lead: "사업장 화재보험 체크리스트는 건물, 업종, 시설, 재고를 한 번에 묶어보는 준비표입니다.",
    sections: [
      ["사업장 사진보다 용도 확인이 먼저입니다", "화재보험 상담에서 매장 사진은 도움이 되지만 건축물 용도와 실제 영업 내용이 더 중요합니다. 음식점, 제조장, 창고, 사무실은 위험 평가가 다르게 들어갈 수 있어 건축물대장과 사업자등록 업종을 함께 확인해야 합니다."],
      ["재고와 시설은 금액 기준을 나눕니다", "사업장에는 인테리어, 기계, 집기, 재고, 원재료가 섞여 있습니다. 하나의 금액으로 말하면 보장 항목이 불명확해지므로 항목별 대략 금액을 나눠 적어야 합니다. 특히 계절 재고가 있는 업종은 평균 재고와 최대 재고를 따로 봐야 합니다."],
      ["임차 사업장은 책임 관계를 따로 봅니다", "임차인이 가입하는 화재보험은 본인 재산뿐 아니라 임대인에게 배상해야 할 위험도 고려해야 합니다. 원상복구, 시설소유관리자 배상책임, 화재대물배상 관련 항목을 계약서와 함께 확인하는 것이 좋습니다."],
      ["체크리스트는 현장 방문 전에 씁니다", "현장에 도착해서 질문을 시작하면 빠지는 항목이 많습니다. 체크리스트를 먼저 작성해 두고 현장에서는 누락된 설비, 위험물, 소화기, 전기설비 상태를 확인하는 방식이 더 효율적입니다."]
    ],
    faqs: [
      ["사업장 화재보험은 건물주만 가입하나요?", "아닙니다. 임차인도 본인 시설, 집기, 재고, 배상책임을 위해 가입할 수 있습니다. 계약 관계에 따라 필요한 담보가 달라집니다."],
      ["재고 금액은 정확해야 하나요?", "가능하면 최근 매입자료나 장부를 기준으로 잡는 것이 좋습니다. 너무 낮게 잡으면 사고 때 보장이 부족할 수 있습니다."],
      ["건축물대장이 꼭 필요한가요?", "건물 용도와 구조 확인에 도움이 됩니다. 특히 특수건물이나 용도 불일치가 의심되는 경우 확인 가치가 큽니다."]
    ]
  },
  "fire-building-register": {
    lead: "건축물대장은 화재보험에서 주소보다 더 구체적인 건물의 신분증 역할을 합니다.",
    sections: [
      ["도로명주소만으로는 부족합니다", "같은 주소 안에도 여러 동, 층, 호실이 있을 수 있습니다. 건축물대장은 구조, 용도, 면적, 사용승인일을 보여주기 때문에 화재보험 가입 전 건물의 기본 조건을 확인하는 데 중요합니다."],
      ["용도 불일치는 상담 초기에 확인합니다", "실제 영업은 음식점인데 건축물 용도가 사무소로 되어 있거나, 창고로 쓰는 공간이 다른 용도로 등재된 경우 보험 인수와 사고 처리에 영향을 줄 수 있습니다. 의심되는 부분은 계약 전에 보험사에 확인해야 합니다."],
      ["특수건물 여부는 별도 질문으로 남깁니다", "대형 건물이나 특정 용도의 건물은 특수건물 관련 보험이나 의무 가입 여부가 문제될 수 있습니다. 건축물대장만 보고 끝내지 말고 면적, 용도, 층수, 사용 형태를 함께 확인하는 것이 좋습니다."],
      ["출력본은 최신 발급일을 봅니다", "오래된 건축물대장은 변경 사항이 반영되지 않았을 수 있습니다. 증축, 용도변경, 대수선이 있었던 건물은 최신 발급본을 기준으로 상담 기록을 남기는 것이 안전합니다."]
    ],
    faqs: [
      ["건축물대장은 어디서 확인하나요?", "정부24 등 공식 민원 서비스를 통해 확인할 수 있습니다. 발급 가능 여부와 수수료는 서비스 안내를 확인하세요."],
      ["임차인이 건축물대장을 꼭 봐야 하나요?", "화재보험 가입이나 사업장 위험 확인을 위해 보는 것이 좋습니다. 임대차계약서의 표시와 실제 건물 정보가 맞는지 확인할 수 있습니다."],
      ["용도가 다르면 보험 가입이 안 되나요?", "항상 그런 것은 아니지만 인수 조건이나 담보가 달라질 수 있습니다. 보험사에 실제 사용 상태를 정확히 알리고 확인해야 합니다."]
    ]
  },
  "education-institute": {
    lead: "보험연수원 자료는 시험 공부보다 등록 상태와 교육 이수 일정 관리에 더 자주 쓰입니다.",
    sections: [
      ["등록교육과 보수교육을 섞지 않습니다", "보험 업무에서 교육은 목적에 따라 이름이 비슷해도 적용 기준이 다릅니다. 신규 등록을 위한 교육인지, 유지 자격을 위한 보수교육인지, 특정 자격 시험을 위한 학습인지 먼저 구분해야 합니다."],
      ["교재보다 마감일이 먼저입니다", "교육을 준비할 때 교재를 찾는 것보다 신청 기간, 수강 기간, 시험 일정, 이수 인정 기준을 먼저 확인해야 합니다. 마감일을 놓치면 공부를 해도 등록이나 유지 업무가 지연될 수 있습니다."],
      ["회사와 개인 계정을 구분합니다", "보험연수원 이용은 개인 학습 이력과 소속 회사 업무가 함께 얽힐 수 있습니다. 로그인 계정, 소속 정보, 수료증 발급 위치를 미리 확인해 두면 추후 등록 서류를 준비할 때 시간을 줄일 수 있습니다."],
      ["수료증은 파일명까지 정리합니다", "교육 이수 후에는 수료증, 이수일, 과정명, 등록번호를 파일명에 포함해 보관하는 것이 좋습니다. 여러 교육을 들으면 나중에 어떤 과정이 어떤 자격과 연결되는지 헷갈리기 쉽습니다."]
    ],
    faqs: [
      ["보험연수원에서 모든 보험교육을 확인할 수 있나요?", "주요 교육을 확인할 수 있지만 자격이나 회사 업무에 따라 다른 기관 자료가 필요할 수 있습니다. 소속 회사 안내와 함께 확인하세요."],
      ["보수교육을 놓치면 어떻게 되나요?", "업무 제한이나 등록 관리 문제가 생길 수 있습니다. 놓친 경우 즉시 소속 회사나 관련 기관에 처리 방법을 확인해야 합니다."],
      ["모의고사만 풀면 충분한가요?", "아닙니다. 시험 준비에는 도움이 되지만 실제 등록이나 이수 인정은 정해진 교육 과정과 기준을 따라야 합니다."]
    ]
  },
  "medical-expense-underwriting-check": {
    lead: "실손보험 인수기준 확인은 가입 가능 여부를 단정하기보다 사전 질문을 정리하는 과정입니다.",
    sections: [
      ["최근 치료 기록을 시간순으로 적습니다", "실손보험은 최근 병력, 투약, 검사, 입원, 수술 이력이 인수 판단에 영향을 줄 수 있습니다. 기억나는 질병명만 말하기보다 날짜, 병원, 치료 내용, 현재 상태를 시간순으로 정리해야 상담이 정확해집니다."],
      ["기존 실손과 중복 문제를 봅니다", "이미 실손보험이 있다면 새로 가입하려는 이유와 기존 계약의 유지 여부를 먼저 확인해야 합니다. 중복 가입, 전환, 해지 후 재가입은 보장 공백이나 인수 제한으로 이어질 수 있습니다."],
      ["거절보다 조건부 인수를 생각합니다", "병력이 있다고 해서 항상 가입이 불가능한 것은 아닙니다. 부담보, 할증, 특정 기간 제한 같은 조건부 인수가 나올 수 있으므로 결과를 단정하지 말고 보험사 심사 기준을 확인해야 합니다."],
      ["고지 누락은 청구 때 문제가 됩니다", "가입 단계에서 빠뜨린 내용은 나중에 보험금 청구 시 분쟁의 원인이 될 수 있습니다. 사소해 보이는 검사나 약 처방도 질문서 범위에 들어가면 정확히 고지해야 합니다."]
    ],
    faqs: [
      ["실손보험은 병력이 있으면 무조건 안 되나요?", "아닙니다. 병력의 종류, 시점, 치료 종료 여부, 현재 상태에 따라 달라집니다. 보험사 심사를 통해 확인해야 합니다."],
      ["기존 실손을 해지하고 새로 가입해도 되나요?", "신중해야 합니다. 새 계약 인수가 거절되거나 보장 조건이 나빠질 수 있으므로 해지 전 새 가입 가능성을 확인해야 합니다."],
      ["검사만 받은 것도 고지해야 하나요?", "질문서에서 묻는 기간과 항목에 해당하면 고지해야 합니다. 애매하면 상담자에게 검사명과 날짜를 알려 확인하는 편이 안전합니다."]
    ]
  },
  "elevator-insurance-info-view": {
    lead: "승강기 정보 열람은 건물 관리 책임과 의무보험 확인을 시작하는 자료입니다.",
    sections: [
      ["승강기 번호를 먼저 찾습니다", "건물 주소만으로는 같은 건물 안의 여러 승강기를 구분하기 어렵습니다. 승강기 번호, 설치 위치, 용도, 관리주체를 확인해야 보험이나 안전관리 자료를 정확히 연결할 수 있습니다."],
      ["관리주체와 소유자를 구분합니다", "승강기 관련 의무나 보험 확인에서는 건물 소유자, 관리사무소, 임차인, 위탁관리업체 역할이 다를 수 있습니다. 누가 보험을 준비해야 하는지 계약서와 관리 규정을 함께 봐야 합니다."],
      ["검사 이력은 안전관리의 힌트입니다", "정기검사, 자체점검, 사고 이력은 보험료와 직접 연결되지 않더라도 위험 관리 설명에 도움이 됩니다. 오래된 설비라면 부품 교체나 유지보수 계약 여부도 확인하는 것이 좋습니다."],
      ["업무 기록에는 위치를 자세히 씁니다", "건물명만 적어두면 나중에 어느 승강기인지 찾기 어렵습니다. 동, 층, 승강기 번호, 설치 장소, 확인 날짜를 같이 남겨야 재확인이 쉬워집니다."]
    ],
    faqs: [
      ["승강기 정보 열람만으로 보험 가입 여부를 알 수 있나요?", "일부 기본 정보 확인에는 도움이 되지만 실제 보험 가입 여부는 관리주체나 보험사 자료를 확인해야 합니다."],
      ["승강기 번호를 모르면 어떻게 하나요?", "건물 현장 표시판, 관리사무소, 승강기 정보 열람 화면에서 확인할 수 있습니다. 주소만으로 여러 대가 나오면 위치를 대조해야 합니다."],
      ["임차인도 승강기 보험을 확인해야 하나요?", "건물 운영 형태에 따라 필요할 수 있습니다. 특히 시설을 직접 관리하거나 고객 동선에 포함된다면 책임 관계를 확인하는 것이 좋습니다."]
    ]
  },
  "ga-product-compare": {
    lead: "대리점 협회 상품 비교는 판매 전 설명의 균형을 맞추기 위한 확인 자료입니다.",
    sections: [
      ["상품명보다 비교 조건을 먼저 정합니다", "보험상품 비교는 이름이 비슷해도 보장 기간, 납입 기간, 갱신 여부, 면책 조건이 다르면 전혀 다른 결과가 됩니다. 협회 비교 자료를 볼 때는 먼저 비교하려는 담보와 가입 조건을 고정해야 합니다."],
      ["장점보다 제외 조건을 읽습니다", "상품 설명은 장점이 먼저 보이지만 실제 분쟁은 보장 제외, 감액, 면책, 갱신 보험료에서 생기기 쉽습니다. 비교 자료를 볼 때는 보장 금액보다 적용되지 않는 경우를 먼저 표시해 두는 것이 좋습니다."],
      ["고객 설명용 문장을 따로 만듭니다", "비교표를 그대로 보여주면 정보가 많아 이해가 어려울 수 있습니다. 고객에게는 동일 조건에서 차이가 나는 항목, 보험료가 달라지는 이유, 확인해야 할 약관 조항을 짧게 정리해 설명하는 편이 좋습니다."],
      ["최종 판단은 약관과 청약서로 닫습니다", "협회 자료는 비교를 돕는 참고 자료입니다. 실제 계약 전에는 보험사 상품설명서, 약관, 청약서, 해피콜 내용을 다시 확인해야 하며, 비교 자료와 다른 부분이 있으면 보험사 공식 문구를 우선해야 합니다."]
    ],
    faqs: [
      ["협회 상품 비교만으로 추천해도 되나요?", "아닙니다. 비교 자료는 참고용이며 고객의 상황, 고지 내용, 보험료 부담, 기존 계약을 함께 봐야 합니다."],
      ["비교표에서 가장 중요한 항목은 무엇인가요?", "보장 금액뿐 아니라 갱신 여부, 면책기간, 감액기간, 보험료 변동 가능성, 보장 제외 조건을 함께 봐야 합니다."],
      ["비교 자료를 보관해야 하나요?", "상담 기준으로 활용했다면 확인 날짜와 비교 조건을 함께 기록하는 것이 좋습니다. 이후 상품 내용이 바뀔 수 있기 때문입니다."]
    ]
  }
});

const ARTICLE_EXPANSIONS = {
  "dental-nonlife-forms": ["청구 전 마지막으로 맞춰볼 실제 흐름", "손해보험 치아청구는 병원 서류를 받은 뒤 바로 접수하기보다 약관과 양식의 표현이 서로 맞는지 한 번 더 보는 과정이 필요합니다. 예를 들어 병원 서류에는 보철치료라고 적혀 있지만 약관은 임플란트, 브릿지, 틀니를 따로 구분할 수 있습니다. 이때 치료명이 너무 넓게 적혀 있으면 보험사가 보완을 요청할 수 있으므로, 병원에 다시 가기 전에 보험사 양식에서 요구하는 단어를 확인하는 것이 좋습니다.", "또한 여러 보험사에 동시에 청구할 때는 같은 원본 자료를 쓰더라도 접수 화면과 청구서 서명란은 회사별로 달라질 수 있습니다. 접수 후에는 어떤 회사에 어떤 파일을 보냈는지, 보완 요청이 있었는지, 지급 안내를 받은 날짜가 언제인지 따로 기록해 두세요. 이 기록은 다음 치과치료 청구 때 반복 업무를 크게 줄여줍니다."],
  "dental-life-forms": ["특약 중심으로 다시 정리하는 청구 메모", "생명보험 치아보험은 상품명만 보고 판단하면 놓치는 부분이 생깁니다. 실제로 보험금이 나가는 기준은 치아 관련 특약에 있고, 특약마다 보장개시일과 감액기간이 다를 수 있습니다. 따라서 청구 전에는 증권에서 치아 특약명을 적고, 약관에서 해당 특약의 지급사유를 찾아 병원 서류의 치료명과 비교하는 순서가 좋습니다.", "특히 수익자와 피보험자가 다르거나 가족이 대신 접수하는 경우에는 서류가 늘어날 수 있습니다. 접수 전에 서명 주체, 신분 확인, 위임 여부를 따로 확인하면 청구가 중간에 멈추는 일을 줄일 수 있습니다. 청구 결과가 일부 지급으로 나오면 어떤 특약에서 얼마가 지급됐는지 항목별로 기록해 두는 것이 좋습니다."],
  "auto-face-quote": ["견적 비교표를 내 상황에 맞게 고정하는 법", "자동차보험 대면 간편견적은 상담자가 보여주는 화면을 그대로 받아들이는 것보다 내가 원하는 조건을 먼저 정해놓고 비교해야 의미가 있습니다. 대물 한도는 얼마로 볼지, 자동차상해를 넣을지, 자기차량손해 자기부담금은 어떤 수준으로 둘지 미리 정하지 않으면 보험사마다 다른 조건을 비교하게 됩니다.", "상담이 끝난 뒤에는 가장 낮은 보험료 하나만 남기지 말고 세 가지 후보를 나란히 적어보는 것이 좋습니다. 보험료가 높은 견적이 왜 높은지, 보장이 더 넓은 것인지, 특약이 추가된 것인지 확인하면 최종 선택이 쉬워집니다. 갱신 때도 같은 표를 다시 쓰면 작년과 올해 조건 차이를 설명하기 좋습니다."],
  "auto-premium-factor": ["보험료 상승을 설명할 때 쓰는 문장 만들기", "할인·할증요인 조회 결과는 고객에게 그대로 보여주기보다 이해 가능한 문장으로 바꿔 설명해야 합니다. 예를 들어 사고 이력, 법규위반, 할인 특약 종료, 차량 조건 변경, 요율 조정이 함께 보이면 각각이 보험료에 어떤 방향으로 작용했는지 나눠 말하는 것이 좋습니다. 한 가지 원인으로 단정하면 나중에 실제 산출 결과와 어긋날 수 있습니다.", "갱신 상담에서는 작년 증권과 올해 견적을 나란히 두고 변경된 항목을 표시하세요. 운전자 범위가 달라졌는지, 주행거리 특약 정산이 반영됐는지, 블랙박스나 자녀 할인 조건이 빠졌는지를 확인하면 할인·할증 조회 결과와 실제 견적의 차이를 더 정확히 설명할 수 있습니다."],
  "auto-insurance-development": ["등록정보 오류가 견적에 남기는 흔적", "자동차보험 견적이 예상보다 이상하게 나오면 할인 특약보다 먼저 차량 등록정보를 의심해볼 필요가 있습니다. 차량 용도, 소유자, 차종, 최초등록일이 다르게 잡히면 여러 보험사 견적이 동시에 흔들릴 수 있습니다. 특히 법인차, 리스차, 중고차, 가족 간 명의 변경 차량은 정보 반영 시점이 늦어질 수 있습니다.", "조회나 상담 기록에는 전체 개인정보를 남기지 말고 차량번호 일부, 확인 날짜, 오류로 의심한 항목, 보험사 답변만 남기는 것이 좋습니다. 이후 정보가 정정되면 같은 조건으로 견적을 다시 받아 이전 결과와 비교하세요. 이렇게 해야 보험료 차이가 등록정보 때문인지 상품 조건 때문인지 구분할 수 있습니다."],
  "auto-fault-ratio": ["사고 설명을 바꾸지 않기 위한 기록법", "과실비율을 확인할 때 가장 중요한 것은 사고 설명을 일관되게 유지하는 일입니다. 처음에는 직진 중이었다고 했다가 나중에는 차로 변경 중이었다고 표현이 바뀌면 유사 사례 검색 결과도 달라집니다. 사고 직후에는 감정적인 표현보다 도로 형태, 신호, 차로, 속도, 충돌 위치를 객관적으로 적는 것이 좋습니다.", "과실비율 정보포털에서 찾은 사례는 사고 당사자에게 결론처럼 말하지 말고 참고 기준으로 설명해야 합니다. 블랙박스, 현장 사진, 경찰 신고 여부, 상대방 진술에 따라 판단이 달라질 수 있습니다. 기록에는 포털에서 본 사례번호나 유형명, 확인 날짜, 실제 사고와 다른 점을 같이 남겨두면 분쟁 대응에 도움이 됩니다."],
  "fire-business-checklist": ["현장 방문 전에 사무실에서 끝낼 수 있는 점검", "사업장 화재보험은 현장에 가서 둘러보는 것만으로는 부족합니다. 방문 전에 사업자등록 업종, 임대차계약서, 건축물대장, 재고 규모, 주요 설비 목록을 받아두면 현장에서는 사실 확인에 집중할 수 있습니다. 특히 위험물, 조리시설, 전기설비, 냉동창고, 기계장치가 있는 업종은 사진보다 사용 방식이 더 중요합니다.", "체크리스트를 작성할 때는 건물 보장, 시설 보장, 집기 보장, 재고 보장, 배상책임을 줄로 나눠 적으세요. 사고가 발생하면 어느 항목에서 손해가 생겼는지 구분해야 하기 때문입니다. 임차 사업장은 임대인 재산과 임차인 재산이 섞여 있어 보장 대상을 잘못 잡기 쉽습니다."],
  "fire-building-register": ["건축물대장을 보험 언어로 읽는 방법", "건축물대장의 용도, 구조, 면적, 사용승인일은 화재보험에서 단순 행정정보가 아니라 위험 평가의 기초 자료입니다. 철근콘크리트인지, 샌드위치패널인지, 주용도가 무엇인지에 따라 보험사가 보는 위험이 달라질 수 있습니다. 주소가 맞아도 동과 호실이 다르면 다른 건물 자료를 보고 있을 수 있으므로 상세 위치를 같이 확인해야 합니다.", "건축물대장을 받은 뒤에는 실제 사용 상태와 맞는지 비교해야 합니다. 서류상 창고인데 실제로 제조 작업을 하거나, 사무소로 등재된 공간에서 조리 영업을 하는 경우에는 보험 가입 조건이 달라질 수 있습니다. 이런 차이는 숨기기보다 상담 초기에 알려야 사고 때 분쟁을 줄일 수 있습니다."],
  "education-institute": ["교육 이수 관리를 달력으로 바꾸는 요령", "보험연수원 자료는 시험 전날 교재를 찾는 용도보다 교육 마감일을 놓치지 않기 위한 일정표로 활용할 때 더 효과적입니다. 등록교육, 보수교육, 시험 일정, 수료증 발급일을 달력에 넣고 소속 회사 제출 기한까지 함께 표시하면 업무 지연을 줄일 수 있습니다.", "교육을 마친 뒤에는 수료증만 저장하지 말고 과정명, 이수일, 자격 구분, 제출처를 파일명에 넣어 보관하세요. 시간이 지나면 어떤 교육이 어떤 등록 업무와 연결되는지 헷갈리기 쉽습니다. 보수교육은 특히 매년 또는 정해진 주기마다 반복되므로 이전 이수 기록을 기준으로 다음 일정을 잡는 것이 좋습니다."],
  "medical-expense-underwriting-check": ["심사 질문에 답하기 전 병원 기록을 정리하는 순서", "실손보험 인수기준을 확인할 때는 병명을 맞히는 것보다 최근 치료 흐름을 정리하는 것이 먼저입니다. 언제 어떤 증상으로 병원에 갔는지, 검사를 받았는지, 약을 얼마나 먹었는지, 현재 치료가 끝났는지 차례대로 적어야 합니다. 이 순서가 있어야 상담자가 고지 대상 여부를 판단하기 쉽습니다.", "기존 실손보험이 있다면 새로 가입하려는 이유도 함께 정리해야 합니다. 단순히 보험료가 비싸서 바꾸려는 것인지, 보장 조건이 부족한 것인지, 단체 실손 종료 때문인지에 따라 선택지가 달라질 수 있습니다. 기존 계약을 해지하기 전에는 새 계약 인수 가능성과 보장 공백을 반드시 확인하세요."],
  "elevator-insurance-info-view": ["건물 관리 문서와 승강기 정보를 연결하는 방법", "승강기 정보는 건물 관리대장, 위탁관리 계약, 보험증권과 함께 봐야 의미가 있습니다. 열람 화면에서 승강기 번호와 설치 위치를 확인했다면 그 번호가 관리사무소 문서와 보험 자료에도 같은 방식으로 적혀 있는지 대조해 보세요. 같은 건물 안에 여러 대가 있으면 한 대만 확인하고 전체를 확인한 것처럼 착각하기 쉽습니다.", "관리주체가 바뀌었거나 건물 소유자가 변경된 경우에는 보험 가입 주체도 달라질 수 있습니다. 승강기 정보 열람은 현재 설비 상태를 보는 출발점이고, 실제 의무보험 가입 여부는 관리주체나 보험사 자료로 다시 확인해야 합니다. 업무 기록에는 확인 날짜, 승강기 번호, 관리주체, 문의처를 같이 남기는 것이 좋습니다."],
  "ga-product-compare": ["비교 자료를 설명 자료로 바꾸는 편집법", "보험대리점 협회 상품 비교 자료는 고객에게 그대로 보여주기보다 같은 조건으로 정리해 설명해야 효과가 있습니다. 보험기간, 납입기간, 갱신 여부, 보장 금액, 면책과 감액 조건을 동일한 줄에 맞춰야 상품 차이가 보입니다. 조건이 다른 자료를 나란히 두면 낮은 보험료가 실제 장점처럼 보이는 착시가 생길 수 있습니다.", "설명 메모에는 추천 상품 하나만 적지 말고 비교에서 제외한 이유도 남기세요. 특정 상품을 제외한 근거가 보험료인지, 보장 범위인지, 인수 조건인지 기록해두면 이후 고객 질문에 답하기 쉽습니다. 최종 설명은 협회 자료보다 보험사 약관과 상품설명서를 기준으로 마무리해야 합니다."],
  "insurance-before-join-documents": ["첫 상담에서 과하게 공유하지 않아도 되는 정보", "보험 가입 전 준비물을 정리한다고 해서 주민등록번호, 진료기록, 가족의 민감한 정보를 처음부터 모두 보내야 하는 것은 아닙니다. 초기 상담에서는 나이대, 직업, 기존 보험 여부, 원하는 보장 방향, 월 보험료 범위 정도면 충분한 경우가 많습니다. 실제 청약 단계에서 필요한 정보는 공식 절차와 동의 과정을 통해 제출하는 것이 안전합니다.", "상담 전 준비물은 상대방에게 보내기 위한 자료이기보다 내 판단을 정리하기 위한 자료입니다. 어떤 보험이 필요한지 모를 때는 기존 보험의 빈칸, 불안한 위험, 감당 가능한 보험료, 절대 피하고 싶은 조건을 적어두세요. 이 네 가지가 있으면 상담 방향이 훨씬 선명해집니다."],
  "insurance-health-disclosure-guide": ["질문서 표현을 내 말로 바꾸지 않는 습관", "고지의무에서 가장 위험한 실수는 질문서의 표현을 내 기준으로 해석하는 것입니다. '치료'라는 단어가 약 처방을 포함하는지, '검사'가 건강검진 재검을 포함하는지, '입원'과 '통원'의 기준이 무엇인지는 상품 질문서에 따라 다를 수 있습니다. 따라서 질문 문구를 그대로 읽고 해당하는 사실을 체크해야 합니다.", "기억이 흐릿한 병력은 숨기는 대신 확인 중이라고 표시하고 자료를 찾아보는 편이 안전합니다. 병원 앱, 건강보험 진료내역, 약국 기록, 카드 결제내역을 활용하면 날짜와 병원을 어느 정도 복원할 수 있습니다. 상담 기록에는 확인한 출처와 아직 불확실한 부분을 나눠 적어두면 좋습니다."],
  "insurance-existing-policy-review": ["좋은 보험과 오래된 보험을 구분하는 기준", "오래된 보험이라고 모두 좋은 것도, 새 보험이라고 모두 나쁜 것도 아닙니다. 기존 보험을 평가할 때는 현재 보험료, 앞으로 오를 가능성, 보장 만기, 갱신 여부, 실제 필요한 담보가 남아 있는지를 함께 봐야 합니다. 해지환급금이 크다는 이유만으로 유지하거나, 보험료가 비싸다는 이유만으로 해지하면 판단이 치우칠 수 있습니다.", "증권 점검표를 만들 때는 보험사별로 나열하지 말고 보장 기능별로 재배열해 보세요. 실손은 실손끼리, 진단비는 진단비끼리, 운전자와 배상책임은 따로 묶어야 중복과 공백이 보입니다. 이 방식은 새 보험을 추가할 때도 어떤 담보가 필요한지 설명하기 쉽습니다."],
  "insurance-coverage-priority": ["우선순위를 정할 때 버려야 할 질문", "보장 우선순위를 정할 때 '남들이 많이 가입하나요'라는 질문은 크게 도움이 되지 않습니다. 같은 나이와 직업이라도 가족 부양, 대출, 비상금, 기존 보험, 건강 상태가 다르면 필요한 보장이 달라집니다. 먼저 사고나 질병이 생겼을 때 우리 집 재정에서 가장 먼저 무너질 부분이 무엇인지 생각해야 합니다.", "우선순위는 한 번 정하면 끝나는 목록이 아닙니다. 결혼, 출산, 주택 구입, 퇴직, 부모 부양, 자녀 독립 같은 변화가 생기면 위험의 크기도 달라집니다. 보험 점검은 상품을 바꾸기 위한 행사가 아니라 생활 변화에 맞춰 보장 지도를 다시 그리는 과정으로 보는 것이 좋습니다."],
  "insurance-premium-budget": ["보험료를 줄일 때 먼저 건드리지 말아야 할 것", "보험료가 부담될 때 핵심 보장을 먼저 줄이면 나중에 더 큰 비용을 치를 수 있습니다. 줄일 항목을 찾을 때는 중복 담보, 우선순위가 낮은 특약, 과도한 적립성 보험료, 불필요한 갱신 특약을 먼저 살피는 것이 좋습니다. 단순히 월 보험료만 낮추면 보장 공백이 커질 수 있습니다.", "예산을 세울 때는 월 납입액 옆에 납입 종료 시점과 갱신 가능성을 함께 적어보세요. 은퇴 이후에도 보험료가 계속 나가는 구조라면 지금은 괜찮아도 장기 유지가 어려울 수 있습니다. 보험은 가입보다 유지가 더 중요하다는 기준으로 예산을 잡아야 합니다."],
  "insurance-family-info": ["가족 보험 파일을 한 장으로 모으는 방법", "가족 보험을 관리할 때는 보험사 앱 여러 개를 각각 열어보는 방식보다 가족별 요약표를 만드는 것이 좋습니다. 이름, 피보험자, 계약자, 수익자, 월 보험료, 주요 보장, 갱신 여부를 한 줄씩 적으면 누가 어떤 위험에 대비되어 있는지 보입니다. 이 표는 청구 상황에서도 빠르게 도움이 됩니다.", "다만 가족의 건강 정보와 보험 정보는 민감한 자료입니다. 가족 보험을 대신 알아보더라도 본인의 동의 없이 상세 병력이나 증권을 외부에 공유하면 안 됩니다. 상담에 필요한 최소 정보만 먼저 정리하고, 청약이나 청구 단계에서는 공식 동의 절차를 따라야 합니다."],
  "insurance-claim-history": ["청구이력을 부끄러운 기록으로 보지 않는 태도", "보험금 청구이력은 가입 심사에서 불리하게만 작용하는 자료가 아니라 현재 건강 상태와 과거 치료를 정확히 설명하는 근거입니다. 기억에 의존해 대충 말하는 것보다 언제 어떤 이유로 청구했는지 정리해두는 편이 상담도 빠르고 분쟁 위험도 줄어듭니다.", "병력 정리표에는 질병명, 병원명, 치료 기간, 약 복용 여부, 현재 상태, 보험금 청구 여부를 나눠 적어보세요. 모든 기록을 처음부터 제출할 필요는 없지만 질문을 받았을 때 정확히 답할 준비가 되어 있어야 합니다. 불확실한 내용은 단정하지 말고 확인이 필요하다고 표시하는 것이 좋습니다."],
  "insurance-beneficiary-check": ["수익자 지정이 가족 대화가 되는 순간", "보험수익자 지정은 계약서의 한 칸처럼 보이지만 실제로는 가족 간 재정 의사결정과 연결됩니다. 사망보험금은 누가 받아야 하는지, 미성년 자녀를 위해 어떤 방식이 적절한지, 배우자와 부모 중 누구를 우선할지 같은 문제는 상황에 따라 다릅니다. 조용히 미뤄두면 나중에 분쟁이 될 수 있습니다.", "수익자를 바꿨다면 변경 신청만 하고 끝내지 말고 증권이나 앱 화면에 반영됐는지 확인해야 합니다. 가족관계가 바뀐 뒤에도 예전 수익자가 그대로 남아 있는 경우가 있습니다. 결혼, 이혼, 출산, 사망, 가족 부양 변화가 생기면 보험수익자 점검을 일정처럼 다시 하는 것이 좋습니다."],
  "insurance-payment-method": ["납입 실패를 막는 작은 자동화", "보험료 납입은 한 번 설정하고 잊어버리기 쉽지만 카드 만료, 계좌 잔액 부족, 휴대폰 번호 변경 때문에 실패할 수 있습니다. 자동이체일을 월급일 직후로 맞추고, 보험사 앱 알림과 문자 수신 정보를 최신으로 유지하면 미납 위험을 줄일 수 있습니다.", "납입 방법을 변경할 때는 다음 출금일이 언제인지 꼭 확인해야 합니다. 변경 신청을 했다고 바로 적용되지 않을 수 있고, 중간에 한 달 보험료가 빠지는 경우도 있습니다. 변경 전후로 납입 상태를 확인하고 접수번호를 남겨두면 실효 문제를 예방하는 데 도움이 됩니다."],
  "insurance-terms-before-sign": ["서명 직전 10분 동안 봐야 할 문장", "보험 계약 전 마지막 10분은 상품 장점을 다시 듣는 시간이 아니라 불리한 조건을 확인하는 시간이어야 합니다. 보장하지 않는 손해, 면책기간, 감액기간, 갱신 보험료, 해지환급금, 납입면제 조건, 직업 변경 통지 의무를 순서대로 읽어보세요. 이 항목은 가입 후 분쟁이 자주 생기는 부분입니다.", "상품설명서의 예시와 실제 내 계약 조건이 다를 수 있다는 점도 중요합니다. 예시 보험료, 예시 지급액, 대표 가입 조건은 이해를 돕기 위한 것이므로 내 나이, 직업, 특약 구성, 가입금액에 맞춘 청약 내용을 다시 확인해야 합니다. 모르는 단어는 서명 후 검색하지 말고 서명 전에 질문으로 남겨야 합니다."]
};

const ARTICLE_MORE_NOTES = {
  "auto-face-quote": ["대면 간편견적을 실제로 활용할 때는 상담자가 말한 장점을 그대로 받아 적기보다 내가 정한 조건표와 맞는지 확인하는 태도가 필요합니다. 같은 자동차보험이라도 출퇴근용인지, 가족이 같이 운전하는지, 장거리 운행이 많은지에 따라 필요한 특약이 달라집니다. 상담 후에는 보험료가 낮은 견적, 보장이 넓은 견적, 현재 조건과 가장 비슷한 견적을 따로 표시해 두면 최종 선택이 훨씬 쉬워집니다."],
  "auto-premium-factor": ["조회 결과를 업무 기록으로 남길 때는 화면 전체를 저장하기보다 보험료 변동 설명에 필요한 항목만 정리하는 것이 좋습니다. 사고 이력, 법규위반, 할인 특약 종료, 주행거리 정산, 차량 조건 변경을 따로 줄을 나누면 다음 갱신 때 같은 질문이 나와도 빠르게 비교할 수 있습니다. 고객에게는 '오른 이유'보다 '확인된 변동 요소'라는 표현을 쓰는 편이 안전합니다."],
  "auto-insurance-development": ["등록정보 확인은 자동차보험 견적의 기초를 맞추는 작업입니다. 이 단계에서 오류를 발견하면 여러 보험사 견적을 다시 받아야 할 수 있으므로, 처음부터 확인 날짜와 오류로 의심한 항목을 남겨두는 편이 좋습니다. 특히 중고차 매매 직후, 공동명의 차량, 법인에서 개인으로 바뀐 차량은 보험사 화면과 실제 등록 정보가 다르게 보일 수 있어 상담 초기에 확인해야 합니다."],
  "auto-fault-ratio": ["과실비율 자료를 찾을 때는 내게 유리한 사례만 고르는 방식보다 실제 사고와 다른 점을 함께 적는 방식이 좋습니다. 신호 여부, 차로 변경 위치, 정차 상태, 제한속도, 블랙박스 각도처럼 작은 차이가 판단에 영향을 줄 수 있습니다. 포털에서 찾은 사례는 보험사와 대화할 때 참고 근거로 쓰고, 확정 비율처럼 말하지 않는 것이 분쟁을 줄이는 데 도움이 됩니다."],
  "fire-business-checklist": ["사업장 화재보험은 사업이 커질수록 처음 설계와 실제 위험이 달라질 수 있습니다. 처음에는 사무실이었지만 창고가 생기거나, 단순 판매점에서 조리와 제조가 추가되거나, 재고 금액이 계절마다 크게 바뀌면 기존 체크리스트를 다시 써야 합니다. 매년 갱신 전에는 사업장 사진, 임대차계약서, 재고 규모, 주요 설비 변화를 한 번 더 확인하는 것이 좋습니다."],
  "fire-building-register": ["건축물대장은 공식 자료지만 그 자체가 모든 위험을 설명하지는 않습니다. 서류상 용도와 실제 사용 상태가 다를 수 있고, 일부 공간은 임차인이 구조를 바꿔 쓰고 있을 수도 있습니다. 그래서 건축물대장을 확인한 뒤에는 현장 사진, 임대차계약서, 사업자등록 업종, 실제 영업 내용을 함께 대조해야 합니다. 이 과정을 거치면 화재보험 상담에서 빠지는 질문을 줄일 수 있습니다."],
  "education-institute": ["교육 관련 자료는 검색 결과로 들어오면 교재 다운로드만 찾기 쉽지만, 실제 업무에서는 이수 여부와 제출 가능 자료가 더 중요합니다. 수료증이 필요한 업무인지, 시험 합격이 필요한 업무인지, 단순 보수교육 이수 확인이 필요한 업무인지 먼저 구분하세요. 교육을 마친 뒤에는 수료증 파일과 함께 과정명, 이수일, 제출처를 적어두면 등록 업무나 내부 확인 요청에 빠르게 대응할 수 있습니다."],
  "medical-expense-underwriting-check": ["실손보험 인수기준을 확인할 때 가장 피해야 할 것은 '예전에 아팠으니 안 될 것이다' 또는 '지금 괜찮으니 말하지 않아도 된다'는 식의 자기 판단입니다. 보험사는 질문서와 심사 기준에 따라 판단하므로, 사용자는 사실관계를 정확히 정리하는 데 집중해야 합니다. 병력 메모는 치료 종료 여부, 현재 복용약, 추적검사 여부까지 포함하면 상담 품질이 좋아집니다."],
  "elevator-insurance-info-view": ["승강기 정보 열람은 건물 관리자가 아니더라도 확인 가치가 있습니다. 학원, 병원, 상가, 숙박시설처럼 고객이 승강기를 이용하는 사업장은 사고가 발생했을 때 관리 책임과 보험 확인이 함께 문제될 수 있습니다. 열람 자료를 볼 때는 설치 위치와 관리주체를 중심으로 확인하고, 실제 보험 가입 여부는 관리사무소나 보험증권으로 다시 확인하는 흐름이 안전합니다."],
  "ga-product-compare": ["상품 비교 자료를 상담에 사용할 때는 비교표의 출처와 확인 날짜를 반드시 남겨야 합니다. 보험상품은 개정이나 판매중지, 보험료 변경이 잦기 때문에 오래된 비교표를 그대로 쓰면 설명 오류가 생길 수 있습니다. 고객에게는 특정 상품이 좋다는 결론보다 어떤 조건에서 어떤 차이가 생기는지 설명하고, 최종 선택 전 약관과 상품설명서를 다시 확인하도록 안내하는 것이 좋습니다."],
  "insurance-before-join-documents": ["보험 가입 전 준비물 목록은 상담자를 위한 숙제가 아니라 본인이 불필요한 가입을 피하기 위한 방어선입니다. 준비가 부족하면 상담 흐름이 상품 설명 중심으로 흘러가고, 준비가 되어 있으면 내 상황에 맞는 질문을 할 수 있습니다. 특히 기존 보험의 만기, 갱신 여부, 월 보험료, 부족하다고 느끼는 보장을 적어두면 새 보험이 필요한지부터 판단할 수 있습니다."],
  "insurance-health-disclosure-guide": ["고지의무는 보험사와 가입자 사이의 신뢰를 만드는 단계입니다. 질문서에 답할 때는 치료받은 사실이 부끄럽거나 사소해 보여도 임의로 제외하지 않는 것이 좋습니다. 중요한 것은 모든 의료기록을 한꺼번에 제출하는 것이 아니라, 질문에서 묻는 범위에 해당하는 사실을 정확히 말하는 것입니다. 애매한 항목은 상담 기록에 남겨두고 공식 답변을 받아두면 안전합니다."],
  "insurance-existing-policy-review": ["기존 보험 점검을 제대로 하려면 보험사별 목록보다 보장별 목록을 만드는 것이 좋습니다. 여러 회사에 흩어진 계약도 실손, 진단비, 수술비, 입원비, 사망보장, 운전자, 배상책임으로 다시 묶으면 실제로 무엇이 충분하고 무엇이 부족한지 보입니다. 이 과정을 거치면 새 상품을 추가할지, 기존 특약을 조정할지, 아무것도 하지 않아도 되는지 판단하기 쉬워집니다."],
  "insurance-coverage-priority": ["보장 우선순위를 정할 때는 당장 걱정되는 질병명보다 경제적 충격을 먼저 생각해야 합니다. 치료비가 감당 가능한지, 소득이 끊겼을 때 몇 달을 버틸 수 있는지, 가족에게 남길 책임이 있는지에 따라 필요한 보장이 달라집니다. 보험은 불안을 모두 없애는 도구가 아니라 감당하기 어려운 위험을 정리하는 도구라는 기준을 세우면 특약 선택이 단순해집니다."],
  "insurance-premium-budget": ["보험료 예산은 처음 가입할 때보다 3년 뒤, 10년 뒤에도 유지 가능한지가 중요합니다. 생활비가 늘거나 소득이 줄면 가장 먼저 부담되는 고정비가 보험료가 될 수 있습니다. 예산표를 만들 때는 현재 보험료, 갱신 예상, 납입 종료 시점, 해지 시 손실을 함께 적어보세요. 이 네 가지를 보면 무리한 설계인지 장기 유지 가능한 설계인지 더 잘 보입니다."],
  "insurance-family-info": ["가족 보험은 한 사람이 모든 계약을 기억하기 어렵기 때문에 공유 가능한 요약표가 필요합니다. 다만 이 표에는 민감한 병력이나 주민등록번호를 넣지 말고 보험사, 상품명, 피보험자, 계약자, 수익자, 주요 보장, 월 보험료 정도만 정리하는 것이 좋습니다. 가족 중 누군가 아프거나 사고가 났을 때 어떤 보험이 있는지 빠르게 찾는 것이 목적입니다."],
  "insurance-claim-history": ["병력과 청구이력을 정리할 때는 과거를 숨기기 위한 자료가 아니라 정확히 설명하기 위한 자료라고 생각해야 합니다. 가입 심사에서 질문을 받으면 기억에 의존한 답변보다 날짜와 치료 흐름이 있는 답변이 훨씬 안전합니다. 특히 같은 질환으로 반복 치료를 받았거나 보험금을 여러 번 청구했다면 청구일, 지급 항목, 현재 상태를 구분해 적어두는 것이 좋습니다."],
  "insurance-beneficiary-check": ["수익자 지정은 평소에는 잘 보이지 않지만 실제 보험금 지급 시 가장 중요한 항목이 됩니다. 가족관계가 단순할 때 정해둔 수익자가 시간이 지나면서 현재 의사와 달라질 수 있습니다. 결혼, 이혼, 출산, 부모 부양, 자녀 독립 같은 변화가 있으면 보험증권의 수익자 표시를 다시 확인하세요. 변경했다면 접수번호와 반영된 화면까지 남겨두는 것이 좋습니다."],
  "insurance-payment-method": ["보험료 납입방법은 편한 결제수단을 고르는 일이 아니라 계약을 끊기지 않게 관리하는 일입니다. 자동이체 계좌의 잔액 흐름, 카드 만료일, 결제 알림 수신 여부, 출금 실패 시 재청구 절차를 확인하면 실효 위험을 줄일 수 있습니다. 가족 보험료를 대신 내는 경우에는 누가 실제 납입자인지 기록해두어야 변경이나 환급 문의 때 혼란이 줄어듭니다."],
  "insurance-terms-before-sign": ["계약 전 약관 확인은 시간이 오래 걸리더라도 나중의 오해를 줄이는 가장 확실한 방법입니다. 상품설명서에서 좋아 보이는 문장을 봤다면 약관에서 지급 제한과 예외 조항을 찾아보세요. 설명을 들었다는 사실보다 내가 어떤 조건을 이해했고 어떤 질문을 했는지가 중요합니다. 서명 전 질문 목록을 남기면 이후 해피콜이나 분쟁 상황에서도 본인의 판단 과정을 설명할 수 있습니다."]
};

const ARTICLE_FINAL_NOTES = {
  "auto-face-quote": ["마지막으로, 대면 상담에서는 상담자가 입력한 조건을 사용자가 직접 말로 다시 확인하는 습관이 필요합니다. 운전자 범위, 대물 한도, 자상 선택, 자기차량손해 포함 여부를 하나씩 되짚어야 나중에 ‘그 조건인 줄 몰랐다’는 문제가 줄어듭니다. 견적이 마음에 들더라도 바로 결제하지 말고 청약서의 담보표와 상담 메모가 같은지 확인한 뒤 진행하는 편이 안전합니다."],
  "auto-premium-factor": ["할인·할증 설명은 숫자를 맞히는 일이 아니라 납득 가능한 근거를 찾는 일에 가깝습니다. 보험료가 올랐을 때 고객은 결과만 보지만, 실제로는 여러 요인이 겹쳐 반영됩니다. 조회 결과, 작년 증권, 올해 견적, 특약 적용 여부를 함께 놓고 설명하면 불필요한 오해를 줄일 수 있습니다. 갱신 상담이 끝난 뒤에는 내년에도 비교할 수 있도록 올해 확인한 변동 사유를 짧게 남겨두세요."],
  "auto-insurance-development": ["보험개발원 관련 확인은 자주 쓰지 않더라도 견적이 이상할 때 문제를 좁히는 데 도움이 됩니다. 보험료가 갑자기 다르거나 차량 정보가 맞지 않아 보이면 바로 상품을 바꾸기보다 기초 정보가 제대로 연결됐는지 확인해야 합니다. 등록정보, 보험사 견적, 실제 차량 서류가 서로 맞아야 이후 할인 특약이나 담보 비교도 의미가 생깁니다."],
  "auto-fault-ratio": ["과실비율 자료를 정리할 때는 상대방을 설득하기 위한 문서가 아니라 사실관계를 잊지 않기 위한 문서라고 생각하는 것이 좋습니다. 사고 직후에는 기억이 선명하지만 며칠만 지나도 위치와 속도, 신호 상태가 흐려질 수 있습니다. 포털 사례를 본 날짜와 실제 사고와 다른 점을 함께 적어두면 보험사 문의나 분쟁 조정 과정에서 훨씬 차분하게 설명할 수 있습니다."],
  "fire-business-checklist": ["사업장 화재보험은 업종이 같아도 현장마다 위험이 다릅니다. 같은 음식점이라도 조리 방식, 배기시설, 전기설비, 냉장창고, 영업시간, 임차 범위가 다르면 필요한 보장도 달라질 수 있습니다. 체크리스트는 단순 확인표가 아니라 사업장의 위험을 말로 설명하기 위한 초안입니다. 이 초안이 자세할수록 보험사 문의와 보장 설계가 정확해집니다."],
  "fire-building-register": ["화재보험 상담에서 건축물대장을 확인했다면 그 내용을 그대로 끝내지 말고 실제 현장과 비교해야 합니다. 특히 오래된 건물은 증축, 용도 변경, 내부 구조 변경이 있었는데 서류 확인이 늦어지는 경우가 있습니다. 보험 가입 전에는 서류상 정보, 임대차계약서, 현장 사진, 사업자등록 업종을 함께 놓고 서로 어긋나는 부분이 없는지 보는 것이 좋습니다."],
  "education-institute": ["보험교육은 한 번 이수하고 잊는 영역이 아니라 자격과 업무 상태를 유지하기 위한 관리 영역입니다. 등록교육을 마쳤더라도 보수교육 주기를 놓치면 업무에 문제가 생길 수 있고, 시험 준비 자료만 보고 실제 신청기간을 놓치는 경우도 있습니다. 교육 페이지를 볼 때는 교재, 모의고사, 신청기간, 수료증 발급을 하나의 흐름으로 묶어 관리하세요."],
  "medical-expense-underwriting-check": ["실손보험은 가입 후 청구가 잦은 상품이기 때문에 가입 단계의 기록이 특히 중요합니다. 어떤 병력을 고지했고 어떤 답변을 받았는지 남겨두면 나중에 청구 단계에서 설명이 쉬워집니다. 보험사가 조건부 인수나 부담보를 제시했다면 그 조건이 어떤 부위와 기간에 적용되는지 반드시 확인해야 합니다. 모호한 조건은 가입 전 질문으로 정리하는 것이 좋습니다."],
  "elevator-insurance-info-view": ["승강기 관련 정보는 건물 관리 업무와 보험 업무가 만나는 지점입니다. 단순히 승강기가 있다는 사실보다 누가 관리하고, 어떤 번호로 등록되어 있으며, 이용자가 누구인지가 더 중요합니다. 어린이집, 병원, 학원, 숙박시설처럼 이용자가 많은 공간은 사고 발생 시 책임 설명이 복잡해질 수 있으므로 관련 자료를 평소에 정리해 두는 것이 좋습니다."],
  "ga-product-compare": ["보험대리점 상품 비교는 판매를 위한 결론을 빨리 내는 도구가 아니라 설명 책임을 줄이기 위한 확인 절차입니다. 비교 과정에서 어떤 상품을 왜 제외했는지, 어떤 조건이 더 불리했는지, 어떤 약관 조항이 핵심이었는지 남겨두면 상담 품질이 좋아집니다. 고객에게도 가격 순위보다 차이가 발생한 이유를 설명하는 편이 신뢰를 높입니다."],
  "insurance-before-join-documents": ["보험 가입 준비물은 한 번 만들면 이후 점검에도 계속 쓸 수 있습니다. 오늘 상담을 위해 적은 기존 보험 목록과 월 예산, 가족 상황은 1년 뒤 보험을 다시 볼 때도 기준표가 됩니다. 따라서 대충 메모하고 버리기보다 날짜를 적어 저장해 두는 것이 좋습니다. 다음 상담에서는 바뀐 직업, 소득, 가족 구성, 병원 이용 이력만 추가하면 됩니다."],
  "insurance-health-disclosure-guide": ["고지의무 준비는 가입을 어렵게 만들기 위한 절차가 아니라 계약을 오래 안전하게 유지하기 위한 절차입니다. 처음에 불편하더라도 정확히 정리해두면 나중에 보험금 청구 때 설명할 근거가 생깁니다. 특히 병원 방문이 잦았던 시기, 장기 복용약, 반복 검사 이력은 따로 표시해 두세요. 상담자가 질문하지 않았더라도 질문서 범위에 해당하면 확인해야 합니다."],
  "insurance-existing-policy-review": ["증권 점검 후에는 바로 새 보험을 추가하기보다 ‘유지’, ‘축소 검토’, ‘보완 필요’, ‘추가 확인’으로 나눠 표시해 보세요. 이렇게 분류하면 상담자가 바뀌어도 본인의 판단 기준을 설명하기 쉽습니다. 기존 보험은 과거에 가입한 이유가 있었던 계약이므로 해지 여부는 새 보험의 보장개시일과 인수 결과를 확인한 뒤 결정해야 합니다."],
  "insurance-coverage-priority": ["보장 우선순위를 글로 적어보면 불안과 실제 필요를 구분할 수 있습니다. 막연히 암이 걱정된다, 사고가 걱정된다는 표현보다 어떤 상황에서 얼마의 비용이나 소득 공백이 생기는지 적어보세요. 이 숫자가 있어야 보험료 예산과 보장 금액을 연결할 수 있습니다. 우선순위가 정해지면 필요 없는 특약을 줄이는 판단도 쉬워집니다."],
  "insurance-premium-budget": ["보험료 예산을 정한 뒤에는 그 예산 안에서 무엇을 포기할지까지 정해야 합니다. 모든 담보를 넣고 보험료를 낮추기는 어렵기 때문에 우선순위가 낮은 담보를 줄이거나 가입금액을 조정해야 합니다. 반대로 반드시 지켜야 하는 핵심 보장은 예산을 조금 넘더라도 유지할 수 있습니다. 중요한 것은 보험료 숫자보다 선택의 이유를 남기는 것입니다."],
  "insurance-family-info": ["가족 보험을 정리할 때는 가족 구성원 모두의 동의와 이해가 필요합니다. 누군가 대신 관리해주는 것은 편리하지만, 피보험자가 자신의 보장과 청구 방법을 전혀 모르면 실제 사고 때 보험을 쓰지 못할 수 있습니다. 최소한 각자 어떤 보험이 있고 어디에 문의해야 하는지 정도는 공유해 두는 것이 좋습니다. 가족 보험표는 위급할 때 찾는 안내문 역할을 합니다."],
  "insurance-claim-history": ["보험금 청구이력을 정리하면 과거 치료를 객관적으로 볼 수 있습니다. 같은 질환이 반복됐는지, 특정 부위의 치료가 계속됐는지, 완치 후 재발이 있었는지 확인할 수 있기 때문입니다. 이 자료는 가입 상담뿐 아니라 기존 보험 점검에도 도움이 됩니다. 다만 민감한 의료정보이므로 외부 공유는 최소화하고, 필요한 경우 공식 심사 절차에서만 제출하세요."],
  "insurance-beneficiary-check": ["보험수익자 점검은 가족 간 대화가 필요한 주제라 미루기 쉽습니다. 하지만 실제 보험금 지급 상황에서는 지정 내용이 매우 중요하게 작용합니다. 수익자가 법정상속인으로 되어 있는지, 특정인으로 되어 있는지, 예전 가족관계가 그대로 남아 있는지 확인해 보세요. 의도와 다르게 설정되어 있다면 변경 절차와 필요한 서류를 보험사에 문의해야 합니다."],
  "insurance-payment-method": ["납입 방법은 보험을 유지하는 가장 현실적인 장치입니다. 보장이 아무리 좋아도 미납으로 실효되면 의미가 약해집니다. 자동이체 계좌를 바꾸거나 카드를 재발급받았다면 보험료 출금이 정상 반영되는지 다음 납입일까지 확인하세요. 특히 여러 가족 보험료를 한 카드로 내는 경우 카드 한도와 만료일을 따로 관리하는 것이 좋습니다."],
  "insurance-terms-before-sign": ["약관 확인은 어렵지만 모든 조항을 같은 깊이로 읽을 필요는 없습니다. 먼저 보험금이 지급되지 않는 경우, 지급액이 줄어드는 경우, 갱신 때 보험료가 변하는 경우, 계약자가 알려야 하는 의무를 중심으로 보면 됩니다. 이 네 가지는 가입 후 후회가 자주 생기는 부분입니다. 이해가 안 되는 문장은 상담자에게 쉬운 말로 다시 설명해 달라고 요청하고 답변을 기록하세요."]
};

const ARTICLE_PAD_NOTES = {
  "education-institute": ["교육 자료는 최신 공지와 함께 봐야 합니다. 과정명은 같아도 신청 화면이나 인정 기준이 바뀔 수 있으므로 접속일을 기록해 두면 좋습니다."],
  "insurance-existing-policy-review": ["점검이 끝나면 바로 결론을 내리지 말고 유지할 계약과 추가 확인할 계약을 나눠 표시하세요. 이 한 단계가 불필요한 해지를 막아줍니다."],
  "insurance-coverage-priority": ["우선순위는 가족과 공유할수록 현실적입니다. 혼자 불안해서 고른 담보보다 실제 생활비와 책임을 함께 놓고 고른 담보가 오래 유지됩니다."],
  "insurance-premium-budget": ["예산을 초과한 설계는 처음에는 좋아 보여도 유지 단계에서 무너질 수 있습니다. 줄일 항목과 지킬 항목을 반드시 함께 정하세요. 보험료를 낮추는 결정도 기록해두면 나중에 왜 그 담보를 제외했는지 다시 확인할 수 있습니다."],
  "insurance-family-info": ["가족 보험표는 완벽할 필요가 없습니다. 먼저 보험사와 상품명, 피보험자만 정리해도 사고나 질병이 생겼을 때 찾는 시간이 줄어듭니다. 이후 수익자와 주요 보장을 천천히 보강해도 충분합니다."],
  "insurance-claim-history": ["청구이력은 가입 심사뿐 아니라 기존 보험 점검에도 도움이 됩니다. 어떤 담보를 실제로 사용했는지 알면 보장 우선순위가 더 분명해집니다."],
  "insurance-beneficiary-check": ["수익자 확인은 짧게 끝나는 작업이지만 미뤄두면 큰 분쟁이 될 수 있습니다. 가족 변화가 있었다면 증권 화면부터 다시 열어보세요."],
  "insurance-payment-method": ["납입 상태는 보험사 앱에서 주기적으로 확인하는 것이 좋습니다. 특히 카드 변경이나 계좌 변경 직후 첫 출금은 꼭 정상 처리 여부를 봐야 합니다. 납입 실패 알림을 놓치지 않도록 문자와 앱 알림을 함께 켜두면 더 안전합니다."],
  "insurance-terms-before-sign": ["약관을 모두 이해하지 못해도 괜찮습니다. 다만 이해하지 못한 부분을 질문하지 않고 서명하는 것은 피해야 합니다."]
};

const SPECIAL_ARTICLE_SECTIONS = {
  "auto-insurance-development": [
    ["보험개발원 등록정보 오류가 내 자동차보험료를 올리는 이유", "2026년 기준 자동차보험 만기나 다이렉트 견적을 앞두고 보험료가 평소보다 높게 산출된다면 보험개발원 통합 데이터에 등록된 차량 정보와 보험 가입 경력을 먼저 확인해야 합니다. 차량기준가액, 세부 등급, 추가 옵션, 운전 경력, 할인·할증 등급이 실제와 다르게 잡히면 같은 보험사 견적이라도 보험료가 과다하게 책정될 수 있습니다.", "국내 손해보험사는 보험개발원 전산 데이터를 기본 자료로 활용해 차량 기준가액과 할인·할증 정보를 산출합니다. 따라서 이곳의 등록정보에 오류가 있거나 정보 업데이트가 누락되면 매년 수십만 원의 보험료가 잘못 청구되거나 다이렉트 가입 자체가 거절되는 상황이 생길 수 있습니다."],
    ["보험개발원 자동차보험 등록정보 실시간 조회 방법", "내 차량의 정확한 사양과 보험 가입 경력을 확인하려면 보험개발원에서 운영하는 공식 조회 시스템을 거쳐야 합니다. 공동인증서 외에도 간편 인증을 지원하는 경우가 있으므로 스마트폰으로도 비교적 빠르게 확인할 수 있습니다. 조회 전에는 차량번호, 소유자 정보, 이전 보험 가입 이력, 최근 명의 변경 여부를 정리해 두면 좋습니다.", "조회 화면에서는 차량기준가액, 세부 모델, 용도, 가입 경력, 할인·할증 관련 정보가 실제 차량 상태와 맞는지 확인해야 합니다. 다이렉트 견적서의 자차 담보 금액과 기준가액이 크게 다르면 보험개발원 등록정보나 보험사 전산 반영 기준을 다시 살펴볼 필요가 있습니다."],
    ["카히스토리로 차량 스펙과 사고 이력을 함께 검증", "보험개발원 등록정보만 보는 것보다 카히스토리 등 차량 이력 자료를 함께 확인하면 오류 원인을 더 빨리 좁힐 수 있습니다. 차량기준가액이 이상하다면 제조사, 모델명, 세부 트림, 옵션 장착 여부가 현재 차량과 일치하는지 비교해야 합니다.", "사고 이력이나 용도 변경 이력도 보험료에 영향을 줄 수 있습니다. 과거 자차 담보 미가입 기간, 렌터카 이력, 법인차 운행 이력, 군 운전병 경력 누락처럼 일반 사용자가 바로 떠올리기 어려운 항목이 다이렉트 견적 오류로 이어지는 경우가 있습니다."],
    ["보험가입경력과 할인·할증 등급 확인", "자동차보험료는 현재 차량 정보만으로 결정되지 않습니다. 운전자의 보험 가입 경력, 사고 처리 건수, 법규 위반, 할인·할증 등급이 함께 반영됩니다. 무사고 기간이 실제보다 짧게 잡혀 있거나 과거 사고가 잘못 합산된 경우 보험료가 예상보다 높게 나올 수 있습니다.", "특히 가족 한정 운전, 군 운전 경력, 해외 보험 가입 경력처럼 증빙을 제출해야 반영되는 항목은 누락되기 쉽습니다. 다이렉트 화면에서 경력이 반영되지 않는다면 견적 진행을 멈추고 해당 보험사에 인정 대상 등록 절차를 문의해야 합니다."]
  ]
};

const ARTICLE_TABLES = {
  "auto-insurance-development": {
    headers: ["오류 증상", "주된 원인", "현장 해결 방법"],
    items: [
      ["차량 정보가 불일치합니다", "블랙박스, ADAS, 세부 트림, 추가 옵션이 보험개발원 또는 보험사 전산에 다르게 반영됨", "카히스토리와 자동차등록증을 대조하고 보험사 견적 화면에서 세부 모델과 옵션을 수동으로 다시 선택"],
      ["가입 경력 미확인 오류", "군 운전병, 해외 보험, 법인차 운전 경력이 자동 반영되지 않음", "견적을 중단하고 보험사에 운전경력 인정 대상자 등록과 증빙 제출 방법 문의"],
      ["보험료가 작년 대비 폭등", "무사고 할인 등급, 사고 처리 건수, 할인 특약 종료가 잘못 합산됨", "할인·할증 등급 조회 결과와 작년 증권을 비교해 보험사에 정정 요청"],
      ["피보험자 정보 불일치", "공동명의 차량, 부부 한정, 계약자와 피보험자 구분이 전산에서 다르게 입력됨", "자동차등록증 명의와 청약 화면의 피보험자 정보를 정확히 맞춰 다시 입력"]
    ]
  }
};

const ARTICLE_STEPS = {
  "auto-insurance-development": {
    title: "오등록 데이터 정정과 과납 보험료 환급 요청 절차",
    intro: "보험개발원이나 보험사 전산에 잘못 등록된 정보를 발견했다면 견적을 새로고침하기보다 원인 자료를 모아 정정 요청을 해야 합니다.",
    items: [
      ["객관적 증빙 자료 수집", "차량 사양 오류라면 자동차등록증 원본, 옵션 장착 사진, 블랙박스나 안전장치 확인 사진을 준비합니다. 경력 누락이라면 군 경력증명서, 과거 보험가입증명서, 법인차 운행 확인 자료가 필요할 수 있습니다."],
      ["원인 제공 보험사에 전산 정정 요청", "해당 오류 데이터를 처음 입력했거나 직전 계약을 관리한 보험사 고객센터에 전산 정정을 요청합니다. 증빙서류를 팩스나 앱으로 제출하면 보험사가 보험개발원 통합 DB 수정 요청을 진행합니다."],
      ["과납 보험료 통합조회 활용", "전산 정정이 끝났다면 금융감독원 파인 또는 보험개발원 안내를 통해 과거에 잘못 부과된 보험료 차액을 조회합니다. 환급 가능 기간과 계좌 수령 절차는 보험사 안내를 기준으로 확인해야 합니다."]
    ]
  }
};

const ARTICLE_FINAL_CHECKLISTS = {
  "auto-insurance-development": {
    title: "요약 및 핵심 체크리스트",
    items: [
      "가입 갱신 30일 전 보험개발원과 카히스토리에서 차량기준가액과 할인·할증 등급을 확인합니다.",
      "다이렉트 견적 오류가 반복되면 자동차등록증의 세부 트림, 옵션, 소유자 정보를 다시 입력합니다.",
      "군 운전병, 법인차, 해외 보험 경력은 증빙이 있어야 인정될 수 있으므로 서류를 먼저 준비합니다.",
      "전산 정정이 끝난 뒤에는 같은 조건으로 견적을 다시 받아 보험료 차이를 비교합니다."
    ]
  }
};

function articleTableTitle(article) {
  if (article.slug === "auto-insurance-development") return "2. 다이렉트 자동차보험 견적 오류 유형별 실전 점검법";
  return `2. ${article.title} 실전 점검표`;
}

function articleTableIntro(article) {
  if (article.slug === "auto-insurance-development") return "보험사 다이렉트 사이트에서 견적을 낼 때 자주 발생하는 오류 증상과 즉시 확인할 현장 해결책입니다.";
  return `${article.title}을 확인할 때 자주 생기는 오류와 원인을 표로 정리했습니다. 표를 먼저 보면 본문에서 어떤 항목을 중점적으로 봐야 하는지 빠르게 잡을 수 있습니다.`;
}

function defaultArticleTable(article) {
  return {
    headers: ["확인 항목", "놓치기 쉬운 원인", "바로 할 일"],
    items: [
      [article.linkLabel || article.title, "공식 자료 위치가 바뀌었거나 최신 양식이 별도로 공지된 경우", "외부 링크 접속 후 자료명, 개정일, 적용 대상을 먼저 확인"],
      ["증빙 서류", "서류명은 비슷하지만 회사별 요구 항목이 다른 경우", "청구서, 확인서, 동의서, 위임장 여부를 분리해 체크"],
      ["상담 기록", "전화 안내만 듣고 접수번호나 답변 근거를 남기지 않은 경우", "확인 날짜, 담당 창구, 안내 문구, 다음 조치를 메모"],
      ["최종 판단", "참고 자료를 실제 승인이나 지급 확정처럼 이해한 경우", "보험사, 협회, 공공기관의 공식 안내를 다시 확인"]
    ]
  };
}

function defaultArticleSteps(article) {
  return {
    title: `3. ${article.title} 확인 절차`,
    intro: "아래 순서로 확인하면 외부 링크를 열고도 무엇을 봐야 할지 헷갈리는 시간을 줄일 수 있습니다.",
    items: [
      ["내 상황과 자료 목적 정리", `${article.category} 자료를 보기 전 본인이 확인하려는 목적을 먼저 적습니다. 가입 전 확인인지, 청구 준비인지, 상담 기록인지에 따라 봐야 할 항목이 달라집니다.`],
      ["공식 링크에서 원자료 확인", `${article.linkLabel || article.title} 링크를 열어 자료명, 적용 대상, 개정일, 제출 또는 조회 절차를 확인합니다. 파일을 내려받았다면 저장일과 파일명을 함께 남깁니다.`],
      ["보험사 또는 기관 안내로 마무리", "실제 계약, 청구, 교육 신청, 사고 접수 전에는 해당 보험사나 기관의 최신 안내를 다시 확인합니다. 이 단계에서 확인한 내용이 최종 업무 기준이 됩니다."]
    ]
  };
}

function defaultFinalChecklist(article) {
  return {
    title: "요약 및 핵심 체크리스트",
    items: [
      `${article.title}은 링크만 여는 것이 아니라 목적과 적용 대상을 먼저 확인해야 합니다.`,
      "외부 자료는 개정일과 공식 출처를 확인하고 오래된 파일을 그대로 쓰지 않습니다.",
      "업무 기록에는 확인 날짜, 자료명, 안내받은 핵심 문구, 다음 조치를 남깁니다.",
      "최종 판단은 이 사이트가 아니라 보험사, 협회, 공공기관의 공식 안내를 기준으로 합니다."
    ]
  };
}

const ARTICLE_SUMMARIES = {
  "dental-nonlife-forms": { title: "손해보험 치아청구 핵심요약", items: ["치아번호, 치료명, 치료일자가 빠지면 보완 요청이 생기기 쉽습니다.", "치과치료확인서와 진료비 세부내역서는 서로 다른 역할을 합니다.", "보철치료는 발치일, 식립일, 완료일을 나눠 기록하는 편이 안전합니다.", "면책기간과 감액기간은 양식 준비와 별도로 약관에서 확인해야 합니다."] },
  "dental-life-forms": { title: "생명보험 치아청구 핵심요약", items: ["상품명보다 치아 관련 특약명과 유지 여부를 먼저 확인합니다.", "피보험자와 수익자가 다르면 서명 주체와 위임서류가 달라질 수 있습니다.", "치료 완료일이 필요한 청구는 중간 영수증만으로 부족할 수 있습니다.", "앱 접수라도 병원이 발급하는 확인서류는 별도로 필요할 수 있습니다."] },
  "auto-face-quote": { title: "대면 간편견적 빠른정리", items: ["운전자 범위를 먼저 정해야 보험료 비교가 흔들리지 않습니다.", "차량번호, 최초등록일, 용도, 주행거리 예상치를 미리 적어둡니다.", "낮은 보험료가 보장 축소 때문인지 할인 때문인지 구분해야 합니다.", "견적 기록은 보험료만이 아니라 담보 조건이 보이게 남깁니다."] },
  "auto-premium-factor": { title: "할인할증 조회 전 알아둘 점", items: ["갱신 보험료 상승 원인은 사고 이력 하나로 단정할 수 없습니다.", "할인 등급, 특별할증, 법규위반, 특약 종료를 나눠 봐야 합니다.", "조회 결과는 보험료 산출표가 아니라 변동 요인 확인 자료입니다.", "고객에게 설명할 때는 확인된 항목 중심으로 말하는 것이 안전합니다."] },
  "auto-insurance-development": { title: "보험개발원 등록정보 체크포인트", items: ["차량 등록정보가 틀리면 여러 보험사 견적이 동시에 흔들릴 수 있습니다.", "중고차와 명의 변경 차량은 정보 반영 시점을 확인해야 합니다.", "업무 메모에는 전체 개인정보보다 오류 의심 항목과 확인 날짜를 남깁니다.", "등록정보 확인이 가입 승인이나 보험료 확정을 의미하지는 않습니다."] },
  "auto-fault-ratio": { title: "과실비율 포털 활용요약", items: ["사고 설명은 신호, 차로, 진행 방향, 충돌 위치 순서로 고정합니다.", "포털 사례는 유사 기준이지 실제 과실 확정 자료가 아닙니다.", "블랙박스 파일명과 필요한 장면 구간을 같이 기록하면 좋습니다.", "상대방 의도보다 확인 가능한 사실을 중심으로 정리해야 합니다."] },
  "fire-business-checklist": { title: "사업장 화재보험 사전요약", items: ["사업자등록 업종과 실제 영업 내용이 맞는지 먼저 봅니다.", "건물, 시설, 집기, 재고, 배상책임을 항목별로 나눠야 합니다.", "임차 사업장은 임대인 재산과 본인 재산을 구분해야 합니다.", "재고가 계절마다 달라지는 업종은 평균과 최대 규모를 따로 적습니다."] },
  "fire-building-register": { title: "건축물대장 확인요약", items: ["주소만 맞는지보다 동, 층, 호실, 용도, 구조가 맞는지 봅니다.", "서류상 용도와 실제 사용 상태가 다르면 보험 조건이 달라질 수 있습니다.", "특수건물 여부나 대형 건물 여부는 별도 확인이 필요할 수 있습니다.", "오래된 출력본보다 최신 발급본을 기준으로 상담하는 것이 좋습니다."] },
  "education-institute": { title: "보험연수원 이용요약", items: ["등록교육, 보수교육, 시험 준비는 목적이 다르므로 먼저 구분합니다.", "교재보다 신청기간, 수강기간, 수료 인정 기준을 먼저 봅니다.", "개인 계정과 소속 회사 제출용 자료를 구분해 관리합니다.", "수료증 파일명에는 과정명, 이수일, 제출처를 함께 적어두면 좋습니다."] },
  "medical-expense-underwriting-check": { title: "실손보험 인수기준 요약", items: ["최근 치료, 검사, 투약, 입원, 수술 이력을 시간순으로 정리합니다.", "기존 실손보험이 있다면 해지 전 새 계약 인수 가능성을 확인합니다.", "병력이 있어도 부담보나 할증 등 조건부 인수가 가능할 수 있습니다.", "고지 누락은 가입 때보다 청구 때 더 큰 문제가 될 수 있습니다."] },
  "elevator-insurance-info-view": { title: "승강기 정보 열람요약", items: ["건물 주소만으로는 부족하고 승강기 번호와 설치 위치를 확인해야 합니다.", "관리주체, 소유자, 위탁관리업체의 역할을 구분합니다.", "검사 이력은 안전관리 상태를 파악하는 참고 자료가 됩니다.", "의무보험 가입 여부는 관리주체나 보험증권으로 다시 확인해야 합니다."] },
  "ga-product-compare": { title: "대리점 상품 비교요약", items: ["보험기간, 납입기간, 갱신 여부를 맞춰야 비교가 의미 있습니다.", "보장 금액보다 면책, 감액, 제외 조건을 먼저 확인합니다.", "비교 자료는 확인 날짜와 조건을 같이 기록해야 합니다.", "최종 설명은 협회 자료보다 약관과 상품설명서를 기준으로 마무리합니다."] },
  "insurance-before-join-documents": { title: "가입 전 준비물 요약", items: ["초기 상담에는 민감한 개인정보보다 상황 정리가 먼저입니다.", "기존 보험은 사진보다 보장 항목별 목록으로 정리하는 편이 좋습니다.", "월 보험료 한도와 장기 유지 가능성을 함께 봅니다.", "원하는 보장보다 피하고 싶은 조건을 적어두면 상담 방향이 선명해집니다."] },
  "insurance-health-disclosure-guide": { title: "고지의무 준비요약", items: ["질문서의 기간과 표현을 내 기준으로 바꿔 해석하지 않습니다.", "검사 결과가 정상이었어도 검사 사실이 질문 대상일 수 있습니다.", "약 처방은 기간, 목적, 현재 복용 여부를 나눠 적습니다.", "애매한 병력은 숨기지 말고 확인 질문으로 남기는 편이 안전합니다."] },
  "insurance-existing-policy-review": { title: "기존 증권 점검요약", items: ["상품명보다 특약 목록을 보장 기능별로 재배열합니다.", "갱신형 특약과 비갱신형 특약을 따로 표시합니다.", "해지환급금보다 보장 공백과 면책기간을 먼저 봅니다.", "오래된 보험도 조건이 좋을 수 있으므로 무조건 해지하지 않습니다."] },
  "insurance-coverage-priority": { title: "보장 우선순위 요약", items: ["남들이 많이 가입한 담보보다 우리 집의 큰 위험을 먼저 봅니다.", "치료비뿐 아니라 소득 공백과 부양 책임을 함께 고려합니다.", "실손과 정액 보장은 역할이 다르므로 따로 비교합니다.", "결혼, 출산, 주택 구입, 퇴직 때 우선순위를 다시 점검합니다."] },
  "insurance-premium-budget": { title: "보험료 예산 요약", items: ["월 보험료보다 연간 부담과 장기 유지 가능성을 봅니다.", "갱신형 보험료는 현재 금액보다 미래 변동 가능성이 중요합니다.", "보험료가 부담되면 중복 담보와 낮은 우선순위 특약부터 점검합니다.", "납입기간은 은퇴 시점과 소득 변화까지 연결해 판단합니다."] },
  "insurance-family-info": { title: "가족 보험 확인요약", items: ["계약자, 피보험자, 수익자를 가족별로 나눠 적습니다.", "미성년 자녀 보험은 법정대리인 동의와 청구 절차를 확인합니다.", "부모님 보험은 개인정보 동의 범위를 먼저 정해야 합니다.", "가족 전체의 실손, 배상책임, 운전자 보장을 함께 보면 빈칸이 보입니다."] },
  "insurance-claim-history": { title: "병력과 청구이력 요약", items: ["병명보다 치료 날짜, 병원, 검사, 투약 흐름을 먼저 정리합니다.", "과거 보험금 청구이력은 숨길 정보가 아니라 설명할 자료입니다.", "완치, 치료 중, 경과관찰, 투약 중을 구분해 적습니다.", "불확실한 기록은 단정하지 말고 확인 필요 항목으로 남깁니다."] },
  "insurance-beneficiary-check": { title: "보험수익자 지정요약", items: ["사망보험금, 진단비, 입원비 수익자가 각각 다를 수 있습니다.", "결혼, 이혼, 출산, 사망 등 가족 변화가 있으면 다시 봐야 합니다.", "미성년 수익자는 실제 수령 절차까지 고려해야 합니다.", "수익자 변경 후에는 증권이나 앱 화면 반영 여부를 확인합니다."] },
  "insurance-payment-method": { title: "보험료 납입방법 요약", items: ["자동이체일은 월급일과 생활비 지출 흐름에 맞춰 정합니다.", "카드납은 혜택보다 카드 만료와 한도 실패 위험을 봅니다.", "계약자와 납입자가 다르면 변경과 환급 문의 때 혼동이 생길 수 있습니다.", "연락처와 앱 알림을 최신으로 유지해야 미납 안내를 놓치지 않습니다."] },
  "insurance-terms-before-sign": { title: "약관 확인 핵심요약", items: ["상품설명서는 요약이고 실제 지급 기준은 약관에서 확인합니다.", "면책기간, 감액기간, 갱신 보험료, 해지환급금을 먼저 봅니다.", "예시 보험료와 내 청약 조건은 다를 수 있습니다.", "모르는 단어는 서명 전 질문으로 남겨 답변을 기록합니다."] }
};

const ARTICLE_SECTION_ADDITIONS = {
  "dental-nonlife-forms": [
    ["치아번호는 단순 식별번호가 아니라 보험사가 보장 대상 치아를 판단하는 기준입니다. 같은 날 여러 치아를 치료했다면 치아별 치료명과 비용을 나눠 적어야 합니다."],
    ["병원에 양식을 보여줄 때는 보험사명과 청구 항목을 함께 말하는 것이 좋습니다. 병원 직원이 어떤 확인서가 필요한지 바로 이해해야 재발급 가능성이 줄어듭니다."],
    ["영수증은 결제 사실, 세부내역서는 치료 항목, 확인서는 보험 판단 정보를 담습니다. 세 서류를 같은 것으로 보면 청구가 지연될 수 있습니다."],
    ["보철치료는 한 번에 끝나지 않는 경우가 많습니다. 치료 과정이 길수록 날짜 흐름을 따로 적어야 보험사 보완 요청에 빠르게 대응할 수 있습니다."],
    ["면책과 감액은 청구 서류가 완벽해도 결과를 바꿀 수 있는 조건입니다. 가입일과 치료일을 나란히 놓고 보는 습관이 필요합니다."]
  ],
  "dental-life-forms": [
    ["생명보험 치아청구는 특약이 살아 있는지부터 확인해야 합니다. 보험료를 내고 있어도 해당 치아 특약이 해지되었거나 만료된 경우가 있을 수 있습니다."],
    ["수익자와 피보험자 관계는 청구서 작성 방식에 직접 영향을 줍니다. 특히 가족이 대신 접수할 때는 서명과 위임 서류가 빠지기 쉽습니다."],
    ["치료 완료일이 중요한 이유는 보험금 지급 사유가 완료 시점에 맞춰 판단될 수 있기 때문입니다. 임플란트처럼 단계가 있는 치료는 더욱 주의해야 합니다."],
    ["앱 접수는 편리하지만 첨부 파일 품질이 낮으면 보완 요청이 나옵니다. 병원명, 직인, 날짜, 치아번호가 흐릿하지 않게 촬영해야 합니다."],
    ["특약별 결과를 나누면 일부 지급이나 감액 사유를 이해하기 쉽습니다. 지급 결과를 한 줄로만 보면 다음 청구 때 같은 실수를 반복할 수 있습니다."]
  ],
  "auto-face-quote": [
    ["운전자 범위는 보험료 절감보다 실제 운전 가능성을 기준으로 정해야 합니다. 명절이나 휴가 때 임시로 운전할 사람도 미리 생각해 두면 좋습니다."],
    ["차량 정보는 상담자가 임의로 추정하면 오류가 생길 수 있습니다. 차량등록증 기준으로 입력해야 여러 보험사 견적이 같은 출발선에서 비교됩니다."],
    ["보험료가 낮은 견적은 매력적이지만 담보가 줄어든 결과일 수 있습니다. 대물 한도와 자상 선택은 반드시 같은 조건으로 맞춰 비교해야 합니다."],
    ["결제 혜택은 계약 조건과 분리해 기록하세요. 카드 무이자나 포인트는 사라질 수 있지만 보장 조건은 사고 때 직접 영향을 줍니다."]
  ],
  "auto-premium-factor": [
    ["보험료가 오른 이유를 하나로 단정하면 설명이 틀릴 수 있습니다. 사고 이력과 요율 변경, 특약 종료가 동시에 반영되는 경우가 많습니다."],
    ["사고 점수는 단순 사고 건수와 다르게 계산될 수 있습니다. 지급 보험금 규모와 사고 종류, 평가 기간을 함께 봐야 합니다."],
    ["조회 전 인증 수단이 준비되지 않으면 상담 흐름이 끊깁니다. 갱신 안내를 받은 직후 미리 확인해 두면 비교 시간이 줄어듭니다."],
    ["설명할 때는 ‘확정 원인’보다 ‘확인된 변동 요소’라는 표현이 안전합니다. 실제 보험료 산출은 보험사 견적 화면이 최종 기준입니다."]
  ],
  "auto-insurance-development": [
    ["등록정보 오류는 보험료뿐 아니라 자차 가입 가능 여부에도 영향을 줄 수 있습니다. 차량가액이 낮게 잡히면 사고 때 보상 기준도 달라질 수 있습니다."],
    ["실시간 조회 후에는 다이렉트 견적 화면의 차량 정보와 한 번 더 대조해야 합니다. 두 화면이 다르면 보험사 전산 반영 시점을 문의해야 합니다."],
    ["카히스토리는 차량 이력 확인에 유용하지만 보험개발원 정보와 역할이 다릅니다. 두 자료를 함께 보면 오류 원인이 차량 이력인지 보험 경력인지 구분하기 쉽습니다."],
    ["할인·할증 등급은 운전자 경력과 사고 처리 이력이 결합된 결과입니다. 무사고라고 생각해도 과거 처리 건이 남아 있으면 보험료가 달라질 수 있습니다."]
  ],
  "auto-fault-ratio": [
    ["사고 직후의 첫 문장이 이후 과실 논의의 기준이 됩니다. 차로, 신호, 속도, 충돌 위치를 객관적으로 적어두는 것이 중요합니다."],
    ["유사 사례를 찾을 때는 내 사고와 같은 점보다 다른 점을 더 꼼꼼히 봐야 합니다. 작은 차이가 과실비율을 크게 바꿀 수 있습니다."],
    ["블랙박스는 파일이 있어도 필요한 장면을 찾지 못하면 활용이 어렵습니다. 사고 전 10초와 사고 후 10초처럼 구간을 표시해 두면 좋습니다."],
    ["감정적 표현은 상대방과의 분쟁을 키울 수 있습니다. 보험사에 전달할 기록은 확인 가능한 사실만 남기는 편이 유리합니다."]
  ],
  "fire-business-checklist": [
    ["사업장 용도는 보험사가 위험을 분류하는 첫 기준입니다. 실제 영업과 공부상 용도가 다르면 가입 조건이 달라질 수 있습니다."],
    ["재고와 시설 금액을 뭉뚱그리면 사고 때 손해 항목 구분이 어려워집니다. 집기, 기계, 원재료, 완제품을 나눠 적는 것이 좋습니다."],
    ["임차 사업장은 내 재산과 건물주 재산이 섞여 있습니다. 사고 후 누구의 손해인지 다툼이 생기지 않도록 계약서와 함께 봐야 합니다."],
    ["현장 방문 전 체크리스트를 작성하면 현장에서는 누락 확인에 집중할 수 있습니다. 사진은 체크리스트의 보조 자료로 남기면 좋습니다."]
  ],
  "fire-building-register": [
    ["건축물대장은 주소 확인용 문서가 아니라 건물의 구조와 용도를 보여주는 기본 자료입니다. 보험 상담에서는 이 정보가 위험 평가의 출발점이 됩니다."],
    ["용도 불일치는 사고 전에는 작은 문제처럼 보이지만 사고 후에는 큰 분쟁이 될 수 있습니다. 실제 사용 상태를 숨기지 말고 초기에 확인해야 합니다."],
    ["특수건물 여부는 일반 가입자가 직접 판단하기 어렵습니다. 면적, 용도, 층수 조건이 애매하면 보험사나 관련 기관에 확인하는 편이 안전합니다."],
    ["최신 발급본을 쓰면 변경 이력을 놓칠 가능성이 줄어듭니다. 오래된 출력본은 참고용으로만 보고 실제 상담 기준으로 쓰지 않는 것이 좋습니다."]
  ],
  "education-institute": [
    ["등록교육과 보수교육은 이름이 비슷해도 목적이 다릅니다. 신규 등록인지 유지 관리인지 먼저 구분해야 필요한 과정을 잘못 신청하지 않습니다."],
    ["교재를 먼저 찾으면 공부는 시작할 수 있지만 업무 마감은 놓칠 수 있습니다. 신청기간과 수료 인정 기준을 먼저 달력에 넣어야 합니다."],
    ["개인 계정으로 이수한 교육이 회사 제출용으로 바로 연결되는지 확인해야 합니다. 소속 정보가 잘못되어 있으면 수료증 활용이 늦어질 수 있습니다."],
    ["수료증 파일명에 과정명과 날짜를 넣으면 나중에 찾기 쉽습니다. 여러 과정을 듣는 사람일수록 파일 관리가 중요합니다."]
  ],
  "medical-expense-underwriting-check": [
    ["최근 치료 기록은 병명보다 흐름이 중요합니다. 언제 시작했고, 지금 끝났는지, 약을 계속 먹는지가 인수 판단에 영향을 줍니다."],
    ["기존 실손이 있는 사람은 새 가입보다 유지와 전환의 차이를 먼저 알아야 합니다. 해지 후 재가입은 보장 공백을 만들 수 있습니다."],
    ["조건부 인수는 거절과 다릅니다. 부담보나 할증 조건을 이해하면 가입 가능성과 보장 제한을 더 현실적으로 판단할 수 있습니다."],
    ["고지 누락은 가입 당시에는 지나가도 청구 단계에서 문제가 될 수 있습니다. 질문서에 해당하는 사실은 작게 보여도 확인해야 합니다."]
  ],
  "elevator-insurance-info-view": [
    ["승강기 번호는 여러 대의 설비를 구분하는 핵심값입니다. 주소만으로 확인하면 다른 승강기 자료를 보는 실수가 생길 수 있습니다."],
    ["관리주체가 누구인지에 따라 보험과 안전관리 책임이 달라질 수 있습니다. 소유자와 관리자를 같은 사람으로 단정하지 마세요."],
    ["검사 이력은 사고 가능성을 단정하지는 않지만 관리 상태를 보는 힌트가 됩니다. 오래된 설비라면 유지보수 계약도 함께 확인해야 합니다."],
    ["업무 기록에는 건물명보다 설치 위치가 중요합니다. 동, 층, 승강기 번호를 함께 남겨야 다음 확인이 쉬워집니다."]
  ],
  "ga-product-compare": [
    ["상품 비교는 조건을 맞추는 데서 시작합니다. 납입기간과 갱신 여부가 다르면 같은 보험료 비교가 아닙니다."],
    ["제외 조건은 작은 글씨로 보이지만 실제 청구 때 가장 중요할 수 있습니다. 보장 금액보다 먼저 읽어야 합니다."],
    ["고객 설명용 문장은 짧고 구체적이어야 합니다. 가격 차이, 보장 차이, 제한 조건을 나눠 설명하면 이해가 쉬워집니다."],
    ["최종 판단은 비교표가 아니라 약관과 청약서에서 닫아야 합니다. 비교표는 상담 보조자료로만 사용하세요."]
  ],
  "insurance-before-join-documents": [
    ["상담 전 메모는 상품 추천을 받기 위한 자료가 아니라 내 기준을 세우는 자료입니다. 이 기준이 있어야 불필요한 가입을 피할 수 있습니다."],
    ["기존 증권은 보험사별로 보지 말고 보장별로 다시 정리해야 합니다. 그래야 중복과 부족이 한눈에 보입니다."],
    ["가족 정보는 필요한 만큼만 공유해야 합니다. 민감한 정보는 청약 단계의 공식 절차에서 다루는 것이 안전합니다."],
    ["보험료 예산은 가입 당일의 기분보다 장기 유지 가능성을 기준으로 잡아야 합니다. 유지하지 못할 보험은 좋은 설계가 아닙니다."]
  ],
  "insurance-health-disclosure-guide": [
    ["고지의무는 기억력 테스트가 아니라 기록 확인 과정입니다. 병원 방문 기록을 찾아보면 모호했던 치료 이력이 더 분명해집니다."],
    ["검사 결과가 정상이었다고 해도 검사 사실 자체가 질문 대상일 수 있습니다. 질문 문구를 기준으로 판단해야 합니다."],
    ["약 처방은 복용 기간과 목적을 함께 봐야 합니다. 단기 처방과 장기 복용은 심사 의미가 다를 수 있습니다."],
    ["애매한 내용은 빼기보다 질문으로 바꾸는 것이 좋습니다. 나중에 누락으로 보이는 것보다 확인 기록이 있는 편이 안전합니다."]
  ],
  "insurance-existing-policy-review": [
    ["증권의 첫 장은 요약일 뿐 실제 보장은 특약 목록에 있습니다. 특약을 보장 기능별로 다시 나눠야 점검이 됩니다."],
    ["갱신형 비중은 현재 보험료보다 미래 부담을 보여줍니다. 갱신 주기와 만기를 따로 적어두세요."],
    ["보장 금액은 가족 상황에 따라 의미가 달라집니다. 같은 금액도 외벌이와 1인 가구에서는 필요성이 다를 수 있습니다."],
    ["해지환급금만 보고 해지하면 보장 공백이 생길 수 있습니다. 새 계약의 인수와 보장개시일을 먼저 확인해야 합니다."]
  ],
  "insurance-coverage-priority": [
    ["보험의 첫 기준은 작은 치료비가 아니라 감당하기 어려운 손실입니다. 소득 공백과 부양 책임을 먼저 생각하세요."],
    ["실손과 정액 보장은 지급 방식이 다릅니다. 둘을 같은 담보처럼 비교하면 우선순위가 흐려집니다."],
    ["낮은 확률이라도 손실이 크면 우선순위가 올라갑니다. 보험은 큰 위험을 나누는 도구라는 점을 기억해야 합니다."],
    ["가족 상황이 바뀌면 필요한 보장도 바뀝니다. 출산, 주택 구입, 퇴직 같은 변화 때 다시 점검하세요."]
  ],
  "insurance-premium-budget": [
    ["보험료는 월 단위보다 연 단위로 보면 부담이 선명해집니다. 장기 계약일수록 총 납입 규모를 같이 봐야 합니다."],
    ["갱신형 보험료는 지금 낮아도 나중에 달라질 수 있습니다. 갱신 주기와 인상 가능성을 미리 질문해야 합니다."],
    ["보험료는 가계 고정비입니다. 대출, 교육비, 생활비와 함께 놓고 봐야 무리한 설계를 피할 수 있습니다."],
    ["납입기간은 은퇴 시점과 연결됩니다. 소득이 줄어든 뒤에도 납입이 이어지는 구조인지 확인해야 합니다."]
  ],
  "insurance-family-info": [
    ["가족별 역할을 표로 만들면 계약 구조가 보입니다. 계약자, 피보험자, 수익자가 다르면 청구와 변경 절차도 달라집니다."],
    ["자녀 보험은 보호자 동의와 청구 권한이 중요합니다. 미성년자 계약은 서명과 증빙을 더 꼼꼼히 봐야 합니다."],
    ["부모님 보험을 대신 볼 때는 건강 정보 동의가 먼저입니다. 가족이라도 민감한 정보를 함부로 공유하면 안 됩니다."],
    ["가족 전체 보장을 함께 보면 빈칸이 보입니다. 특히 배상책임과 실손은 가족 단위로 확인할 가치가 큽니다."]
  ],
  "insurance-claim-history": [
    ["병명보다 치료 흐름을 적으면 상담자가 판단하기 쉽습니다. 날짜, 병원, 검사, 투약 여부가 핵심입니다."],
    ["청구이력은 숨길 자료가 아니라 설명할 근거입니다. 과거 지급 내역은 가입 심사 질문과 연결될 수 있습니다."],
    ["완치와 경과관찰은 다르게 봐야 합니다. 치료가 끝난 것과 정기검사를 계속 받는 것은 의미가 다릅니다."],
    ["자료는 처음부터 과하게 제출하지 않아도 됩니다. 다만 질문이 나오면 확인할 수 있도록 정리해 두어야 합니다."]
  ],
  "insurance-beneficiary-check": [
    ["수익자는 자동으로 현재 가족 상황에 맞춰 바뀌지 않습니다. 예전 지정 내용이 그대로 남아 있을 수 있습니다."],
    ["가족관계 변화는 수익자 점검 신호입니다. 결혼, 이혼, 출산, 사망 이후에는 반드시 다시 봐야 합니다."],
    ["미성년 수익자는 실제 수령 절차가 복잡할 수 있습니다. 필요하면 전문가 상담을 받아 구조를 확인하세요."],
    ["수익자 변경은 신청 후 반영 확인까지 해야 끝납니다. 접수번호와 변경된 증권 화면을 남겨두세요."]
  ],
  "insurance-payment-method": [
    ["자동이체 계좌는 잔액 흐름이 중요합니다. 출금일이 월급일과 너무 떨어져 있으면 미납 위험이 커집니다."],
    ["카드납은 혜택보다 결제 실패 위험을 봐야 합니다. 카드 만료와 한도 부족은 생각보다 자주 발생합니다."],
    ["계약자와 납입자가 다르면 문의 권한과 환급 안내가 헷갈릴 수 있습니다. 관계를 기록해 두면 좋습니다."],
    ["미납 안내를 받을 연락처가 오래되면 계약이 위험해집니다. 휴대폰 번호와 앱 알림을 최신으로 유지하세요."]
  ],
  "insurance-terms-before-sign": [
    ["상품설명서는 이해를 돕는 요약입니다. 실제 지급 제한은 약관 조항에서 확인해야 합니다."],
    ["면책기간과 감액기간은 가입 직후 가장 자주 오해하는 항목입니다. 치료일이나 사고일과 함께 확인해야 합니다."],
    ["예시 문구는 내 계약 조건과 다를 수 있습니다. 나이, 직업, 가입금액, 특약 구성이 다르면 결과도 달라집니다."],
    ["서명 전 질문 목록은 나중의 분쟁을 줄이는 기록입니다. 이해하지 못한 문장은 반드시 설명을 요청하세요."]
  ]
};

Object.assign(UNIQUE_ARTICLE_COPY, {
  "insurance-before-join-documents": {
    lead: "보험 상담 전에 준비물을 정리하면 같은 질문을 반복하지 않고 필요한 보장만 비교할 수 있습니다.",
    sections: [
      ["상담 전 메모 한 장이 보험료보다 먼저입니다", "보험 가입 상담은 상품 설명을 듣는 시간이기 전에 본인의 상황을 정리하는 시간입니다. 나이, 직업, 가족 구성, 기존 보험, 월 보험료 한도, 최근 병원 이용 이력 같은 기본 정보를 미리 적어두면 상담자가 불필요한 상품을 꺼내는 시간을 줄일 수 있습니다."],
      ["기존 증권은 사진보다 목록으로 봅니다", "보험증권을 사진으로만 보내면 담보명과 한도, 납입기간을 빠르게 비교하기 어렵습니다. 실손, 진단비, 수술비, 입원비, 운전자, 배상책임처럼 큰 항목으로 나눠 현재 보유 금액을 적어두면 부족한 부분이 보입니다."],
      ["가족 정보는 동의 가능한 범위만 준비합니다", "가족 보험을 함께 검토할 때도 주민등록번호 전체나 민감한 진료기록을 먼저 공유할 필요는 없습니다. 관계, 나이대, 직업, 기존 보험 여부 정도부터 정리하고 실제 청약 단계에서 필요한 정보만 공식 절차에 따라 제출하는 것이 안전합니다."],
      ["보험료 예산은 월 납입액보다 유지 가능성입니다", "처음에는 감당 가능해 보여도 10년, 20년 유지가 어려우면 좋은 설계가 아닙니다. 월 보험료 상한, 변동 가능성, 갱신형 비중, 납입 중단 시 불이익을 상담 전에 질문 목록에 넣어두는 것이 좋습니다."]
    ],
    faqs: [
      ["보험 상담 전에 신분증 사본을 보내야 하나요?", "초기 상담 단계에서는 보통 필요하지 않습니다. 실제 청약이나 본인 확인 단계에서 공식 절차로 제출하는 것이 안전합니다."],
      ["기존 보험을 모두 해지하고 새로 가입하면 되나요?", "성급한 해지는 위험합니다. 새 보험 인수 여부와 보장개시일, 면책기간을 확인한 뒤 기존 계약 유지 여부를 판단해야 합니다."],
      ["준비물이 없으면 상담을 못 받나요?", "상담은 가능하지만 비교 품질이 떨어질 수 있습니다. 최소한 기존 보험 여부와 원하는 월 보험료 범위는 정리하는 것이 좋습니다."]
    ]
  },
  "insurance-health-disclosure-guide": {
    lead: "고지의무는 병명을 외우는 일이 아니라 보험사가 묻는 기간과 치료 사실을 정확히 정리하는 일입니다.",
    sections: [
      ["기억이 아니라 기록으로 답해야 합니다", "고지의무 질문은 대개 최근 3개월, 1년, 5년처럼 기간을 나눠 묻습니다. 병명을 정확히 몰라도 병원 방문일, 검사명, 투약 여부, 입원이나 수술 여부를 기록으로 확인하면 답변이 훨씬 정확해집니다."],
      ["검사 결과가 정상이었어도 질문 범위에 들어갈 수 있습니다", "건강검진 재검, 초음파, CT, 조직검사처럼 결과가 큰 문제가 아니었더라도 질문서가 검사 사실을 묻는다면 답해야 할 수 있습니다. '이상 없었으니 말하지 않아도 된다'고 판단하지 말고 질문 문구를 기준으로 봐야 합니다."],
      ["약 처방은 기간과 목적을 같이 적습니다", "감기약처럼 짧은 처방과 고혈압, 당뇨, 고지혈증처럼 지속 복용하는 약은 의미가 다릅니다. 약 이름을 몰라도 처방받은 병원, 기간, 복용 목적을 적어두면 상담자가 추가 확인을 안내하기 쉽습니다."],
      ["애매한 내용은 숨기지 말고 질문으로 바꿉니다", "고지 대상인지 애매하면 '이 내용도 고지해야 하나요'라고 묻는 것이 좋습니다. 고지 누락은 가입 당시보다 보험금 청구 때 문제가 커질 수 있으므로 불확실한 항목일수록 기록을 남겨야 합니다."]
    ],
    faqs: [
      ["오래전에 치료한 병도 고지해야 하나요?", "질문서가 묻는 기간과 항목에 해당하는지가 기준입니다. 기간 밖이라도 현재 치료 중이거나 후유증이 있다면 별도 확인이 필요할 수 있습니다."],
      ["건강검진 결과지는 꼭 제출하나요?", "상품과 심사 기준에 따라 다릅니다. 제출 요청이 없다면 상담 단계에서 결과 요약만 확인할 수 있지만, 요청받으면 공식 자료를 준비해야 합니다."],
      ["고지를 많이 하면 가입이 불리한가요?", "불리해질 수 있다는 이유로 누락하면 더 큰 문제가 됩니다. 정확한 고지가 장기적으로 안전한 계약의 기본입니다."]
    ]
  },
  "insurance-existing-policy-review": {
    lead: "기존 보험 증권 점검은 새 상품을 찾기 전에 이미 가진 보장의 빈칸을 확인하는 과정입니다.",
    sections: [
      ["증권의 첫 장보다 특약 목록이 중요합니다", "보험증권 첫 장에는 상품명과 보험료가 크게 보이지만 실제 보장은 특약 목록에 들어 있습니다. 진단비, 입원비, 수술비, 실손, 운전자, 배상책임을 따로 적어야 중복과 부족을 찾을 수 있습니다."],
      ["갱신형 비중을 별도 표시합니다", "현재 보험료가 낮아도 갱신형 특약이 많으면 나중에 부담이 커질 수 있습니다. 특약별 갱신 여부와 만기를 구분하면 유지 가능성을 판단하는 데 도움이 됩니다."],
      ["보장 금액은 가족 상황과 같이 봅니다", "같은 1천만 원 진단비라도 1인 가구, 외벌이 가정, 자녀가 있는 가정에서 의미가 다릅니다. 소득 공백과 치료비 부담을 기준으로 보장 금액이 충분한지 다시 봐야 합니다."],
      ["해지환급금보다 보장 공백을 먼저 봅니다", "기존 보험을 정리할 때 환급금만 보고 해지하면 면책기간과 감액기간 때문에 보장 공백이 생길 수 있습니다. 새 계약이 확정되고 보장개시일이 확인되기 전까지는 해지를 서두르지 않는 편이 안전합니다."]
    ],
    faqs: [
      ["증권이 너무 많으면 어디부터 봐야 하나요?", "실손, 진단비, 수술비, 사망보장, 운전자, 배상책임처럼 큰 항목별로 나누는 것이 좋습니다."],
      ["오래된 보험은 무조건 안 좋은가요?", "아닙니다. 오래된 계약 중에는 현재보다 유리한 조건도 있을 수 있습니다. 해지 전 약관과 보험료 변동 가능성을 같이 봐야 합니다."],
      ["중복 보장은 모두 줄여야 하나요?", "목적에 따라 다릅니다. 실손처럼 중복 보상이 제한되는 영역과 정액 담보처럼 중복 지급이 가능한 영역을 구분해야 합니다."]
    ]
  },
  "insurance-coverage-priority": {
    lead: "보장 우선순위는 남들이 많이 가입한 담보가 아니라 내 생활에서 무너질 위험이 큰 순서로 정해야 합니다.",
    sections: [
      ["첫 번째 기준은 치료비가 아니라 소득 공백입니다", "큰 질병이나 사고가 생기면 치료비뿐 아니라 일하지 못하는 기간의 생활비가 문제가 됩니다. 직업, 가족 부양 여부, 비상금 규모를 기준으로 어떤 보장이 먼저 필요한지 판단해야 합니다."],
      ["실손과 정액 보장은 역할이 다릅니다", "실손보험은 실제 부담한 의료비를 보전하는 성격이고 진단비나 수술비는 정해진 금액을 받는 구조입니다. 둘을 같은 담보처럼 비교하면 우선순위가 흐려질 수 있습니다."],
      ["낮은 확률의 큰 손실을 먼저 봅니다", "보험은 자주 일어나는 작은 지출보다 한 번 발생하면 감당하기 어려운 손실을 대비하는 도구입니다. 사소한 특약을 많이 붙이기 전에 큰 질병, 장해, 배상책임처럼 재정에 큰 영향을 주는 항목을 먼저 검토합니다."],
      ["가족 구성 변화에 따라 순위가 바뀝니다", "결혼, 출산, 주택 구입, 퇴직, 자녀 독립 같은 변화가 생기면 필요한 보장도 달라집니다. 한 번 정한 우선순위를 고정하지 말고 중요한 생활 변화 때마다 다시 점검하는 것이 좋습니다."]
    ],
    faqs: [
      ["모든 보장을 넉넉히 넣으면 가장 좋나요?", "보험료 부담 때문에 장기 유지가 어려워질 수 있습니다. 유지 가능한 예산 안에서 큰 위험부터 정리하는 것이 좋습니다."],
      ["젊을 때는 어떤 보장을 먼저 봐야 하나요?", "직업과 가족 상황에 따라 다르지만 실손, 큰 질병, 배상책임, 운전자 위험처럼 기본 위험부터 확인하는 편이 일반적입니다."],
      ["가성비 특약만 고르면 되나요?", "단가가 낮아 보여도 실제 필요한 위험과 맞지 않으면 의미가 약합니다. 가격보다 내 상황과의 관련성을 먼저 봐야 합니다."]
    ]
  },
  "insurance-premium-budget": {
    lead: "보험료 예산은 현재 낼 수 있는 금액이 아니라 오래 유지해도 흔들리지 않는 금액이어야 합니다.",
    sections: [
      ["월 보험료보다 연간 부담을 봅니다", "월 5만 원은 작아 보여도 1년이면 60만 원, 20년이면 큰 금액입니다. 보험료 예산은 월 납입액뿐 아니라 연간 부담과 장기 유지 가능성을 기준으로 잡아야 합니다."],
      ["갱신형 보험료는 미래 질문입니다", "갱신형 특약은 지금 보험료가 낮아도 나이가 들수록 오를 수 있습니다. 갱신 주기, 예상 인상 가능성, 갱신 시 해지 선택권을 확인해야 합니다."],
      ["가계 고정비 안에서 자리를 정합니다", "보험료는 통신비, 대출, 교육비, 주거비와 함께 장기 고정비가 됩니다. 비상금이 없는 상태에서 보험료를 과하게 잡으면 중도 해지 가능성이 커지고, 해지는 손실로 이어질 수 있습니다."],
      ["납입기간은 은퇴 시점과 연결합니다", "20년납, 30년납, 전기납은 단순히 월 보험료 차이가 아닙니다. 소득이 줄어드는 시점 이후에도 보험료를 낼 수 있는지, 납입 완료 후 보장이 얼마나 유지되는지를 함께 봐야 합니다."]
    ],
    faqs: [
      ["소득의 몇 퍼센트를 보험료로 쓰면 좋나요?", "정답은 없습니다. 가족 구성, 기존 보장, 부채, 비상금에 따라 다릅니다. 무리 없이 오래 유지할 수 있는 금액이 기준입니다."],
      ["갱신형은 무조건 피해야 하나요?", "무조건은 아닙니다. 단기 예산에는 유리할 수 있지만 장기 보험료 변동을 이해하고 선택해야 합니다."],
      ["보험료가 부담되면 어떤 순서로 줄이나요?", "중복 담보, 우선순위가 낮은 특약, 갱신형 비중을 먼저 점검하고 핵심 보장을 무리하게 줄이지 않는 방향이 좋습니다."]
    ]
  },
  "insurance-family-info": {
    lead: "가족 보험은 한 사람의 상품 문제가 아니라 계약자, 피보험자, 수익자 관계를 정리하는 일입니다.",
    sections: [
      ["가족별 역할을 표로 나눕니다", "계약자는 보험료를 내는 사람, 피보험자는 보장의 대상, 수익자는 보험금을 받는 사람입니다. 가족 보험을 검토할 때 이 세 역할이 누구인지 표로 나누면 청구와 변경 때 혼란을 줄일 수 있습니다."],
      ["자녀 보험은 보호자 동의가 핵심입니다", "미성년 자녀 보험은 법정대리인 동의와 서류가 중요합니다. 청구 단계에서도 보호자 확인이 필요할 수 있으므로 계약 당시 누가 어떤 권한을 갖는지 확인해야 합니다."],
      ["부모님 보험은 건강 정보 확인이 민감합니다", "부모님 보험을 대신 알아볼 때는 건강 정보와 개인정보를 함부로 공유하지 않도록 주의해야 합니다. 상담 전에 본인의 동의 범위와 필요한 최소 정보를 정리하는 것이 좋습니다."],
      ["가족 전체의 중복 보장을 같이 봅니다", "가족 구성원별로 실손, 운전자, 배상책임, 일상생활배상책임이 중복되거나 빠질 수 있습니다. 한 사람만 따로 보기보다 가족 전체 보장 지도를 만들면 빈칸이 보입니다."]
    ],
    faqs: [
      ["가족 보험을 한 명이 대신 가입해도 되나요?", "계약 구조와 동의 절차가 맞아야 합니다. 피보험자 동의와 법정대리인 확인이 필요한 경우가 많습니다."],
      ["수익자를 가족으로 지정하면 끝인가요?", "수익자 지정은 분쟁 예방에 중요하지만 가족관계 변화가 생기면 다시 점검해야 합니다."],
      ["가족 모두 같은 보험사로 맞추는 게 좋나요?", "관리 편의는 있지만 보장 조건과 보험료가 더 중요합니다. 같은 회사보다 각자의 상황에 맞는지가 우선입니다."]
    ]
  },
  "insurance-claim-history": {
    lead: "병력과 보험금 청구이력 정리는 가입 심사와 향후 청구 분쟁을 줄이는 사전 기록입니다.",
    sections: [
      ["병명보다 치료 흐름을 적습니다", "정확한 병명을 기억하지 못해도 언제 병원에 갔고, 어떤 검사를 받았고, 약을 얼마나 먹었는지 적으면 상담에 도움이 됩니다. 가입 질문서는 병명뿐 아니라 치료 사실과 기간을 묻는 경우가 많습니다."],
      ["보험금 청구이력은 숨길 정보가 아닙니다", "과거에 보험금을 받은 이력이 있으면 같은 부위나 질환과 관련된 심사 질문이 나올 수 있습니다. 청구이력을 미리 정리하면 나중에 당황하지 않고 설명할 수 있습니다."],
      ["완치와 경과관찰은 다르게 봅니다", "치료가 끝났다고 생각해도 병원에서 추적검사나 정기검진을 권했다면 고지 판단에서 의미가 있을 수 있습니다. 완치, 치료 중, 경과관찰, 투약 중을 구분해 적어두는 것이 좋습니다."],
      ["자료는 본인이 확인 가능한 범위에서 준비합니다", "진료기록 전체를 처음부터 제출할 필요는 없지만 날짜와 병원명은 확인해 두면 좋습니다. 민감한 자료는 공식 심사 요청이 있을 때 필요한 범위로 제출하는 것이 안전합니다."]
    ],
    faqs: [
      ["과거 청구이력을 보험사가 알 수 있나요?", "심사 과정과 정보 제공 동의 범위에 따라 확인될 수 있습니다. 정확히 고지하는 것이 분쟁 예방에 도움이 됩니다."],
      ["가벼운 감기 치료도 적어야 하나요?", "질문서가 묻는 기간과 치료 내용에 해당하는지가 기준입니다. 장기 투약이나 검사, 입원과는 구분해서 봐야 합니다."],
      ["병원명이 기억나지 않으면 어떻게 하나요?", "건강보험 진료내역, 카드 결제내역, 약국 기록 등을 통해 대략 확인할 수 있습니다. 불확실한 내용은 상담 시 불확실하다고 말하는 것이 좋습니다."]
    ]
  },
  "insurance-beneficiary-check": {
    lead: "보험수익자 지정은 보험금이 누구에게 가는지 정하는 문제라 가족관계 변화 때 반드시 다시 봐야 합니다.",
    sections: [
      ["수익자는 자동으로 정해진다고 생각하면 위험합니다", "보험계약에는 사망보험금, 진단비, 입원비처럼 보험금 종류마다 수익자 표시가 다를 수 있습니다. 법정상속인으로 되어 있는지 특정인으로 지정되어 있는지 확인해야 합니다."],
      ["결혼과 이혼, 출산은 점검 신호입니다", "가족관계가 바뀌면 예전 수익자 지정이 현재 의사와 맞지 않을 수 있습니다. 결혼, 이혼, 자녀 출생, 부모 부양 변화가 있다면 보험수익자를 다시 확인하는 것이 좋습니다."],
      ["미성년 수익자는 관리 문제가 생길 수 있습니다", "미성년자를 수익자로 지정하면 실제 보험금 수령 과정에서 법정대리인과 절차 문제가 생길 수 있습니다. 의도한 대로 보험금이 쓰일 수 있는지 전문가 상담이 필요한 경우도 있습니다."],
      ["변경 기록은 증권과 함께 보관합니다", "수익자 변경은 말로만 해서는 효력이 없습니다. 보험사 변경 신청이 완료됐는지, 변경일과 접수번호가 남아 있는지 확인하고 증권 정보가 바뀌었는지 다시 봐야 합니다."]
    ],
    faqs: [
      ["수익자는 언제든 변경할 수 있나요?", "계약자 권한과 계약 조건에 따라 가능하지만 절차가 필요합니다. 보험사 양식과 본인 확인을 거쳐야 합니다."],
      ["법정상속인으로 두면 가장 안전한가요?", "상황에 따라 다릅니다. 가족관계와 상속 분쟁 가능성을 고려해야 하며 특정 의도가 있다면 명확한 지정이 필요할 수 있습니다."],
      ["진단비 수익자와 사망보험금 수익자가 다를 수 있나요?", "가능합니다. 보험금 종류별 수익자 설정을 증권에서 확인해야 합니다."]
    ]
  },
  "insurance-payment-method": {
    lead: "보험료 납입방법은 편의의 문제가 아니라 미납과 계약 실효를 막는 관리 방식입니다.",
    sections: [
      ["자동이체 계좌는 잔액 흐름을 봅니다", "자동이체는 편하지만 월급일과 출금일이 맞지 않으면 미납이 생길 수 있습니다. 보험료 출금일, 카드 결제일, 생활비 지출일을 함께 보고 가장 안정적인 날짜를 선택하는 것이 좋습니다."],
      ["카드납은 혜택보다 지속성을 봅니다", "카드 포인트나 무이자 혜택이 있어도 카드 만료, 한도 부족, 분실 재발급으로 결제가 실패할 수 있습니다. 장기 보험이라면 혜택보다 매달 끊기지 않는 납입 구조가 더 중요합니다."],
      ["계약자와 납입자가 다르면 확인할 일이 늘어납니다", "부모가 자녀 보험료를 내거나 배우자 카드로 납입하는 경우 계약자, 납입자, 피보험자가 다를 수 있습니다. 변경, 해지, 환급, 세금 관련 안내를 받을 때 혼동이 생기지 않도록 관계를 기록해 둡니다."],
      ["미납 안내를 받을 연락처를 점검합니다", "보험료 미납은 연락처가 오래되어 안내를 놓치는 경우도 있습니다. 휴대폰 번호, 이메일, 주소가 현재 정보인지 확인하고 앱 알림도 함께 설정해 두면 계약 실효 위험을 줄일 수 있습니다."]
    ],
    faqs: [
      ["보험료가 한 번 미납되면 바로 해지되나요?", "바로 해지되는 것은 아니지만 유예기간과 안내 절차가 있습니다. 미납을 발견하면 즉시 보험사에 납입 방법을 확인해야 합니다."],
      ["카드 납부가 항상 가능한가요?", "보험사와 상품에 따라 다릅니다. 카드 납부 가능 여부와 변경 절차를 먼저 확인하세요."],
      ["납입 방법 변경은 언제 하는 것이 좋나요?", "출금 실패가 반복되기 전에 바꾸는 것이 좋습니다. 변경 처리일과 다음 출금일을 함께 확인해야 합니다."]
    ]
  },
  "insurance-terms-before-sign": {
    lead: "보험 약관과 상품설명서는 계약 후 읽는 문서가 아니라 서명 전에 마지막으로 멈춰 서는 기준입니다.",
    sections: [
      ["상품설명서는 큰 그림, 약관은 실제 기준입니다", "상품설명서는 이해를 돕는 요약 자료이고 약관은 지급과 면책의 구체 기준입니다. 설명서에서 마음에 드는 문구를 봤다면 약관에서 같은 내용이 어떻게 제한되는지 다시 확인해야 합니다."],
      ["면책기간과 감액기간을 먼저 표시합니다", "가입 직후 사고나 질병이 바로 보장되는지, 일정 기간 일부만 지급되는지 확인해야 합니다. 특히 치아보험, 암보험, 수술비, 진단비는 기간 조건이 보험금 차이를 크게 만들 수 있습니다."],
      ["예시 문구는 내 상황과 다를 수 있습니다", "상품설명서의 예시는 이해를 돕기 위한 것이므로 본인의 나이, 직업, 병력, 가입금액, 특약 구성과 다를 수 있습니다. 예시 보험료와 실제 보험료를 혼동하지 않도록 주의해야 합니다."],
      ["서명 전 질문 목록을 남깁니다", "이해하지 못한 단어, 보장 제외 조건, 갱신 보험료, 해지환급금, 납입면제 조건을 질문 목록으로 만들고 답변을 기록합니다. 설명을 들었다는 사실보다 무엇을 이해했는지가 중요합니다."]
    ],
    faqs: [
      ["약관을 전부 읽어야 하나요?", "전부 읽는 것이 가장 좋지만 최소한 보장 내용, 보험금 지급 제한, 면책, 감액, 해지, 갱신 관련 조항은 확인해야 합니다."],
      ["상품설명서와 약관이 다르게 느껴지면 무엇을 믿나요?", "구체적인 지급 기준은 약관이 우선입니다. 애매하면 보험사 공식 답변을 받아 기록해 두세요."],
      ["전자서명 후에도 철회할 수 있나요?", "청약철회 가능 기간과 조건이 있을 수 있습니다. 계약 직후 안내문을 확인하고 기간을 놓치지 않아야 합니다."]
    ]
  }
});

function insurerHtml(item) {
  const [slug, name, type, browser, center, monitoring, helpdesk, fax, note] = item;
  const links = EXTERNAL_LINKS[slug] || {};
  return `
    <article class="narrow">
      <p class="eyebrow">${esc(type)}</p>
      <h1>${esc(name)} 보험 업무 정보</h1>
      <p class="lead">${esc(name)} 전산, 고객센터, 인콜 모니터링, 전산 헬프데스크, 보험금 청구팩스, 약관확인, 청구서 자료를 정리했습니다.</p>
      <dl class="info-list">
        <div><dt>전산 링크</dt><dd>${links.system ? `<a href="${esc(links.system)}" rel="nofollow noopener" target="_blank">${esc(links.system)}</a>` : "확인 필요"}</dd></div>
        <div><dt>구분</dt><dd>${esc(type)}</dd></div>
        <div><dt>권장 브라우저</dt><dd>${esc(browser)}</dd></div>
        <div><dt>고객센터</dt><dd>${phoneLink(center)}</dd></div>
        <div><dt>인콜 모니터링</dt><dd>${phoneLink(monitoring)}</dd></div>
        <div><dt>전산 헬프데스크</dt><dd>${phoneLink(helpdesk)}</dd></div>
        <div><dt>보험금 청구팩스</dt><dd>${phoneLink(fax)}</dd></div>
        <div><dt>약관확인</dt><dd>${links.terms ? `<a href="${esc(links.terms)}" rel="nofollow noopener" target="_blank">약관확인 바로가기</a>` : "확인 필요"}</dd></div>
        <div><dt>청구서</dt><dd>${links.claim ? `<a href="${esc(links.claim)}" rel="nofollow noopener" target="_blank">청구서 바로가기</a>` : "확인 필요"}${links.extraClaim ? ` · <a href="${esc(links.extraClaim)}" rel="nofollow noopener" target="_blank">${esc(note || "추가 양식")}</a>` : ""}</dd></div>
      </dl>
      <p>보험회사별 전산과 청구 접수 방식은 수시로 바뀔 수 있습니다. 실제 접수나 고객 안내 전에는 ${esc(name)} 공식 홈페이지와 고객센터에서 최신 여부를 다시 확인하는 것이 안전합니다.</p>
    </article>
  `;
}

function faqHtml(kind) {
  const faqs = homeFaqs();
  const label = "홈";
  return `<section class="faq"><header class="block-header"><h2>자주 묻는 질문</h2><p>${esc(label)} 페이지에서 실제로 헷갈리기 쉬운 부분을 따로 정리했습니다.</p></header><div class="faq-list">${faqs.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary><span>Q.</span> ${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></section>`;
}

function homeFaqs() {
  return [
    ["홈 표의 손모양 아이콘은 어떤 링크인가요?", "각 보험회사별 약관확인과 청구서 외부 링크입니다. 약관확인은 상품별 보장 내용, 면책기간, 감액기간, 보장 제외 조건을 확인할 때 사용하고, 청구서는 보험금 청구서 또는 회사별 제출 양식을 확인할 때 사용합니다. 외부 사이트는 새 창으로 열리며, 실제 제출 전에는 보험회사 공식 홈페이지나 고객센터에서 최신 양식인지 다시 확인하는 것이 좋습니다."],
    ["청구 체크리스트는 보험금 청구 서류만 보는 페이지인가요?", "아닙니다. 청구 체크리스트는 보험금 청구 전 서류 확인뿐 아니라 보험 가입 전 점검 글도 함께 보는 페이지입니다. 고지의무, 기존 보험 증권, 병력과 청구이력, 보험료 예산, 납입 방법, 수익자 지정, 약관 확인을 가입 전에 정리해 두면 나중에 보험금 청구 단계에서 생길 수 있는 보완 요청과 분쟁 가능성을 줄일 수 있습니다."],
    ["홈에 있는 가이드 글은 어떤 기준으로 골랐나요?", "사진으로 지정한 외부 링크 항목과 실제 검색 수요가 있는 항목을 중심으로 남겼습니다. 손해보험 치아보험 청구양식, 생명보험 치아보험 청구양식, 대면 간편견적, 할인·할증요인 조회시스템, 보험개발원 등록, 과실비율 정보포털, 사업장 화재보험 체크리스트, 건축물대장, 보험연수원, 실손보험 인수기준, 승강기 정보 열람, 대리점 협회 상품 비교처럼 사용자가 직접 원자료를 찾는 항목을 우선했습니다."],
    ["보험금 청구를 이 사이트에서 직접 할 수 있나요?", "아닙니다. 이 사이트는 자료 위치와 확인 순서를 정리한 정보형 사이트입니다. 실제 보험금 청구, 계약 체결, 교육 이수, 사고 접수, 약관 확인은 각 보험회사나 기관의 공식 채널에서 진행해야 합니다. 이 사이트의 설명은 준비 순서를 돕기 위한 것이며, 보험금 지급 가능성이나 가입 가능성을 보장하지 않습니다."],
    ["표의 번호나 링크가 실제와 다르면 어떻게 해야 하나요?", "보험회사와 기관 사이트는 개편되거나 접수 부서가 바뀔 수 있습니다. 번호나 링크가 다르게 보이면 문의 페이지로 알려주세요. 제보할 때는 회사명, 잘못된 항목, 현재 확인한 공식 URL 또는 고객센터 안내 내용을 함께 보내주시면 검토가 빠릅니다. 다만 최종 안내는 항상 해당 보험회사나 기관의 공식 공지를 우선합니다."]
  ];
}

function categoryFaqs(category) {
  const data = {
    auto: [
      ["자동차 보험 카테고리에서는 견적 링크만 보면 되나요?", "아닙니다. 보험료 비교와 함께 운전자 범위, 할인·할증 요인, 과실비율, 카드 할부 조건을 함께 확인해야 갱신이나 신규 계약에서 빠지는 항목을 줄일 수 있습니다."],
      ["과실비율 정보포털 자료는 언제 사용하나요?", "사고 유형별 기본 과실을 검토할 때 참고합니다. 다만 실제 사고의 블랙박스, 도로 상황, 법원 판단 가능성에 따라 결과가 달라질 수 있어 최종 판단 자료로 단정하면 안 됩니다."],
      ["자동차보험 체크리스트는 어느 시점에 쓰면 좋나요?", "갱신 전이나 다이렉트 계약 체결 전이 좋습니다. 대물 한도, 자차 가입 여부, 긴급출동, 마일리지, 블랙박스 특약을 한 번에 점검할 수 있습니다."]
    ],
    fire: [
      ["사업장 화재보험 체크리스트 글에는 어떤 외부 링크가 들어가나요?", "화재보험 항목의 사업장 화재보험 체크리스트 외부 링크를 글 상단에 연결했습니다. 해당 글에서는 그 파일을 보기 전에 준비해야 할 사업장 주소, 구조, 업종, 재고 정보를 함께 설명합니다."],
      ["특수건물 정보조회는 모든 사업장에 필요한가요?", "모든 사업장에 필요한 것은 아니지만 일정 규모나 용도의 건물은 특수건물 대상 여부를 확인해야 합니다. 대상 여부에 따라 의무보험 검토와 보장 설계가 달라질 수 있습니다."],
      ["건축물대장은 화재보험에서 왜 확인하나요?", "건축물의 용도, 구조, 면적, 사용승인일을 확인하기 위해 사용합니다. 실제 사용 현황과 공부상 정보가 다르면 보험 설계와 인수 과정에서 추가 확인이 필요할 수 있습니다."]
    ],
    dental: [
      ["치아보험 청구양식은 손해보험과 생명보험이 다른가요?", "네. 회사와 상품에 따라 양식과 요구 서류가 다를 수 있어 손해보험 치아보험 청구양식과 생명보험 치아보험 청구양식을 구분해 연결했습니다."],
      ["임플란트 청구에서 가장 자주 빠지는 자료는 무엇인가요?", "치아 번호, 발치일, 식립일, 보철일, 파노라마 사진 같은 치료 경과 자료가 자주 빠집니다. 보험사별 양식에서 요구하는 항목을 먼저 확인해야 합니다."],
      ["치아보험 약관은 현재 판매 약관만 보면 되나요?", "아닙니다. 가입 시점의 약관이 중요합니다. 보장개시일, 면책기간, 감액기간, 보장횟수는 가입 당시 상품 기준으로 확인해야 합니다."]
    ],
    education: [
      ["보험교육 글에는 교재 링크만 달면 충분한가요?", "아닙니다. 교재와 모의고사 링크 외에도 보험연수원 등록교육, 보수교육, 이수 상태 확인을 함께 안내해야 실제 업무에 도움이 됩니다."],
      ["손보, 생보, 변액 교육 자료를 분리한 이유는 무엇인가요?", "시험 범위와 업무 적용 기준이 다르기 때문입니다. 손해보험은 손보 상품과 사고 보상, 생명보험은 생보 계약 구조, 변액은 투자성과 설명의무를 더 중점적으로 봅니다."],
      ["보수교육은 언제 확인해야 하나요?", "등록 상태가 유지되는 동안 정해진 기간마다 확인해야 합니다. 미이수 시 업무 제한이나 등록 관리 문제가 생길 수 있으므로 보험연수원에서 이수 현황을 확인하는 것이 좋습니다."]
    ]
  };
  return data[category.slug];
}

function aboutHtmlLegacy(env) {
  return `<article class="narrow"><h1>소개</h1><p>${esc(siteName(env))}는 보험 업무를 하거나 보험금 청구 자료를 찾는 사용자가 반복적으로 검색하는 정보를 한곳에서 확인할 수 있도록 만든 독립 정보 사이트입니다. 보험회사 전산 링크, 고객센터, 인콜 모니터링, 전산 헬프데스크, 보험금 청구팩스, 약관확인, 청구서 양식, 치아보험 청구양식, 자동차보험 관련 조회, 화재보험 자료, 실손보험 인수기준, 승강기 정보 열람, 보험연수원 교육 링크처럼 실무에서 자주 찾는 자료를 표와 가이드 글로 정리합니다.</p><h2>왜 만들었나요?</h2><p>보험 관련 자료는 여러 보험회사, 협회, 공시실, 정부 사이트, 교육기관, 외부 파일 저장소에 흩어져 있습니다. 사용자는 특정 보험회사 청구서를 찾으려다가 광고성 글을 먼저 보거나, 오래된 팩스번호와 양식을 그대로 사용하는 경우가 있습니다. 이 사이트는 그런 불편을 줄이기 위해 자료의 위치와 확인 순서를 정리합니다. 단순 링크 모음이 아니라 어떤 자료를 먼저 봐야 하는지, 실제 청구나 조회 전에 무엇을 점검해야 하는지, 외부 링크를 어떤 목적으로 사용해야 하는지를 설명하는 것을 목표로 합니다.</p><h2>제공하는 정보</h2><p>홈에서는 보험회사별 전산과 청구 자료표를 제공합니다. 표에는 보험회사명, 권장 브라우저, 고객센터, 인콜 모니터링 번호, 전산 헬프데스크, 보험금 청구팩스, 약관확인 링크, 청구서 링크가 정리되어 있습니다. 청구 체크리스트 페이지에서는 보험금 청구 전 공통으로 확인해야 할 서류와 제출 순서를 설명합니다. 개별 가이드 글에서는 손해보험 치아보험 청구양식, 생명보험 치아보험 청구양식, 대면 간편견적, 할인·할증요인 조회시스템, 보험개발원 등록, 과실비율 정보포털, 사업장 화재보험 체크리스트, 건축물대장, 보험연수원 교육 등 주제별 확인 방법을 다룹니다.</p><h2>운영 원칙</h2><p>이 사이트는 특정 보험회사와 제휴한 공식 창구가 아니며, 보험 가입 권유나 보험금 지급 판단을 제공하지 않습니다. 정보는 공개된 자료와 사용자가 확인 가능한 외부 링크를 기준으로 정리하지만, 보험회사 정책이나 기관 사이트 개편에 따라 주소, 양식, 번호, 제출 기준이 바뀔 수 있습니다. 따라서 실제 계약 체결, 보험금 청구, 교육 신청, 사고 접수 전에는 반드시 해당 보험회사 또는 기관의 공식 안내를 다시 확인해야 합니다.</p><h2>사용자에게 바라는 점</h2><p>자료를 사용할 때는 날짜와 출처를 함께 확인해 주세요. 특히 보험금 청구는 가입 시점의 약관, 피보험자 상태, 사고 내용, 치료 기록, 제출 서류의 정확성에 따라 결과가 달라질 수 있습니다. 이 사이트는 시간을 줄이는 안내서 역할을 하지만 최종 판단자는 아닙니다. 잘못된 링크나 변경된 번호를 발견하면 문의 페이지로 알려주시면 검토 후 수정하겠습니다.</p><h2>콘텐츠를 확장하는 방식</h2><p>앞으로도 무작정 많은 글을 만드는 방식보다 실제로 원자료가 있고 검색자가 바로 확인하려는 주제를 우선합니다. 청구 체크리스트에는 가입 전 점검과 청구 전 확인을 나누어 정리하고, 홈에는 외부 링크와 연결되는 핵심 가이드만 노출합니다. 같은 문장을 반복한 얇은 페이지가 되지 않도록 각 글은 목적, 준비 정보, 주의점, 기록 방법을 다르게 구성합니다.</p></article>`;
}

function contactHtmlLegacy(env) {
  return `<article class="narrow"><h1>문의</h1><p>${esc(siteName(env))}에 대한 문의, 링크 오류 제보, 보험회사 번호 변경, 청구서 양식 변경, 페이지 개선 의견은 아래 이메일로 보내주세요. 이 사이트는 회원가입이나 게시판을 운영하지 않기 때문에 문의는 이메일을 기준으로 확인합니다.</p><p><a class="text-link" href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a></p><h2>어떤 내용을 보낼 수 있나요?</h2><p>보험회사 전산 링크가 열리지 않는 경우, 청구서 링크가 다른 파일로 연결되는 경우, 고객센터 또는 팩스번호가 변경된 경우, 보험연수원이나 협회 링크가 바뀐 경우, 가이드 글에 보완이 필요한 경우를 알려주시면 됩니다. 예를 들어 “삼성화재 청구서 링크가 열리지 않습니다”, “치아보험 청구양식 폴더가 변경된 것 같습니다”, “건축물대장 링크 설명에 정부24 확인 절차를 더 넣으면 좋겠습니다”처럼 구체적으로 작성해 주시면 검토가 빠릅니다.</p><h2>문의할 때 포함하면 좋은 정보</h2><p>정확한 확인을 위해 회사명 또는 기관명, 문제가 발생한 페이지 주소, 수정이 필요한 항목, 현재 보이는 오류 화면, 공식 출처 URL을 함께 보내주세요. 단순히 “링크가 안 됩니다”라고만 보내면 어떤 링크인지 확인하는 데 시간이 걸릴 수 있습니다. 가능하면 오류가 발생한 날짜와 사용한 브라우저도 적어 주세요. 외부 사이트가 일시적으로 점검 중일 수도 있으므로, 반복적으로 열리지 않는지 확인한 뒤 제보하면 더 좋습니다.</p><h2>답변과 반영 기준</h2><p>모든 문의에 즉시 답변을 보장하지는 않지만, 사이트 운영에 필요한 오류 제보와 최신 정보 반영 요청은 우선 검토합니다. 제보 내용이 보험회사나 기관의 공식 안내와 다를 경우에는 공식 출처를 우선합니다. 광고 제안, 보험 가입 권유 요청, 보험금 지급 가능성 판단, 손해사정 상담, 법률 상담은 이 문의 채널에서 처리하지 않습니다.</p><h2>개인정보 주의</h2><p>문의 이메일에는 주민등록번호, 보험증권 번호 전체, 계좌번호 전체, 병원 진료기록, 신분증 사본 같은 민감한 개인정보를 보내지 마세요. 이 사이트는 보험금 청구 접수처가 아니며, 개인별 사건을 심사하거나 대리 접수하지 않습니다. 오류 제보에 필요한 최소한의 정보만 보내주시기 바랍니다. 이미 민감한 정보를 보낸 경우에는 삭제 요청을 해 주시면 확인 가능한 범위에서 처리하겠습니다.</p><h2>처리하지 않는 문의</h2><p>개별 보험금 지급 가능성, 손해사정 판단, 보험 가입 추천, 특정 보험회사 비교 견적 대행, 법률 분쟁 상담은 처리하지 않습니다. 이 사이트는 자료 위치와 확인 순서를 정리하는 곳이므로 개인별 계약 판단은 보험회사, 설계 담당자, 손해사정 전문가, 법률 전문가 등 적절한 창구에서 확인해야 합니다. 문의 페이지는 사이트 품질을 높이기 위한 연락 창구로 이해해 주세요.</p></article>`;
}

function privacyHtml(env) {
  return `<article class="narrow"><h1>개인정보처리방침</h1><p>시행일: 2026년 5월 26일</p><p>${esc(siteName(env))}는 이용자의 개인정보를 중요하게 생각하며, 사이트 운영에 필요한 최소한의 정보만 처리하는 것을 원칙으로 합니다. 본 사이트는 회원가입, 로그인, 보험금 청구 접수, 보험 상담 신청 기능을 제공하지 않습니다. 따라서 주민등록번호, 보험증권 번호, 계좌번호, 진료기록, 신분증 사본 같은 민감한 개인정보를 사이트 화면에서 직접 입력받지 않습니다.</p><h2>1. 수집하는 개인정보 항목</h2><p>이용자가 문의 이메일을 보내는 경우 답변을 위해 이메일 주소, 문의 내용, 문의에 포함된 이름 또는 연락처를 확인할 수 있습니다. 이용자가 자발적으로 보낸 내용 외에 보험계약 정보나 의료정보를 요구하지 않습니다. 사이트 운영 과정에서는 보안과 통계 목적상 접속 IP, 접속 시간, 브라우저 종류, 기기 정보, 방문한 페이지 주소, 오류 로그가 자동으로 생성될 수 있습니다. 이러한 자동 생성 정보는 개인을 직접 식별하기보다 서비스 안정성과 오류 확인을 위한 자료로 사용됩니다.</p><h2>2. 개인정보의 이용 목적</h2><p>수집된 정보는 문의에 대한 답변, 링크 오류 확인, 페이지 개선, 비정상 접속 방지, 서비스 안정성 확보, 접속 통계 분석을 위해 사용됩니다. 예를 들어 특정 보험회사 청구서 링크가 열리지 않는다는 문의가 들어오면 문의자가 보낸 페이지 주소와 오류 내용을 확인하여 링크를 검토합니다. 접속 로그는 사이트 장애나 공격성 요청을 파악하고, 어떤 페이지가 자주 이용되는지 확인하여 콘텐츠를 개선하는 데 활용될 수 있습니다.</p><h2>3. 보유 및 파기</h2><p>문의 이메일은 처리 목적이 달성된 후 합리적인 기간 동안 보관할 수 있으며, 더 이상 필요하지 않다고 판단되면 삭제합니다. 접속 로그와 오류 로그는 보안 확인과 통계 분석을 위해 제한된 기간 동안 보관될 수 있습니다. 법령에 따라 보관이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관할 수 있습니다. 이용자가 문의 삭제를 요청하는 경우 본인 확인이 가능한 범위에서 검토 후 처리합니다.</p><h2>4. 제3자 제공</h2><p>${esc(siteName(env))}는 이용자의 개인정보를 외부에 판매하거나 임의로 제공하지 않습니다. 다만 법령에 따른 요청이 있거나, 사이트 보안 사고 조사에 필요한 범위에서 정당한 절차에 따라 제공이 요구되는 경우에는 예외가 있을 수 있습니다. 외부 링크를 클릭하여 보험회사, 협회, 정부 사이트, 교육기관, 파일 저장소로 이동한 뒤에는 해당 외부 사이트의 개인정보처리방침이 적용됩니다.</p><h2>5. 쿠키와 광고</h2><p>사이트는 접속 통계, 사용자 경험 개선, 광고 게재를 위해 쿠키 또는 유사 기술을 사용할 수 있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다. 향후 Google AdSense 등 광고 서비스가 적용되는 경우 광고 제공업체가 쿠키를 사용하여 이용자의 관심사에 기반한 광고를 표시할 수 있습니다. 광고 설정과 맞춤형 광고 제한은 이용자의 브라우저 또는 광고 플랫폼 설정에서 조정할 수 있습니다.</p><h2>6. 개인정보 보호 조치와 문의</h2><p>사이트는 HTTPS 암호화 통신을 사용하고, 운영에 필요한 접근 권한을 최소화하며, 불필요한 개인정보 수집을 지양합니다. 개인정보 관련 문의, 삭제 요청, 오류 제보는 <a href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a>로 연락해 주세요. 문의 시에는 민감한 보험 정보나 의료정보를 포함하지 말고, 필요한 최소 정보만 보내주시기 바랍니다.</p><h2>7. 외부 링크 이용 시 유의사항</h2><p>사이트에는 보험회사, 협회, 정부 사이트, 교육기관, 파일 저장소로 이동하는 외부 링크가 포함됩니다. 외부 링크를 클릭한 이후의 개인정보 수집, 쿠키 사용, 파일 다운로드, 로그인, 문의 제출은 해당 외부 사이트의 정책을 따릅니다. ${esc(siteName(env))}는 외부 사이트의 개인정보 처리 방식이나 보안 상태를 직접 관리하지 않으므로, 중요한 정보를 입력하기 전에는 주소와 보안 연결을 확인해야 합니다.</p></article>`;
}

function termsHtml(env) {
  return `<article class="narrow"><h1>이용약관</h1><p>시행일: 2026년 5월 26일</p><h2>제1조 목적</h2><p>본 약관은 ${esc(siteName(env))}가 제공하는 보험 업무 자료, 보험회사 전산 링크, 청구서 양식, 약관확인 링크, 고객센터 정보, 청구 체크리스트, 가이드 글 이용과 관련하여 사이트와 이용자 사이의 기본적인 이용 조건과 책임 범위를 정하는 것을 목적으로 합니다.</p><h2>제2조 서비스의 내용</h2><p>사이트는 보험회사별 전산 링크와 고객센터, 청구팩스, 약관확인, 청구서 링크를 표 형태로 제공합니다. 또한 손해보험 치아보험 청구양식, 생명보험 치아보험 청구양식, 대면 간편견적, 할인·할증요인 조회시스템, 보험개발원 등록, 과실비율 정보포털, 사업장 화재보험 체크리스트, 건축물대장, 보험연수원 교육, 실손보험 인수기준, 승강기 정보 열람, 대리점 협회 상품 비교 등 특정 주제에 대한 안내 글을 제공합니다. 서비스는 정보 탐색을 돕기 위한 것이며, 보험상품 판매나 보험금 지급 심사를 수행하지 않습니다.</p><h2>제3조 정보의 출처와 정확성</h2><p>사이트의 정보는 공개적으로 확인 가능한 보험회사, 협회, 정부 사이트, 교육기관, 외부 자료 링크를 바탕으로 정리됩니다. 운영자는 정보의 정확성을 높이기 위해 노력하지만, 외부 사이트 개편, 보험회사 정책 변경, 양식 변경, 팩스번호 변경, 약관 공시 위치 변경 등으로 실제 내용과 차이가 발생할 수 있습니다. 이용자는 계약 체결, 보험금 청구, 교육 신청, 사고 접수 전 반드시 해당 보험회사 또는 기관의 공식 안내를 최종 확인해야 합니다.</p><h2>제4조 이용자의 의무</h2><p>이용자는 사이트의 정상적인 운영을 방해하는 행위, 자동화 도구를 이용한 과도한 요청, 콘텐츠의 무단 복제와 대량 재배포, 허위 오류 제보, 타인의 개인정보 또는 민감정보를 포함한 문의 발송을 해서는 안 됩니다. 또한 사이트의 정보를 보험 가입 권유 자료나 지급 보장 자료처럼 오인되게 사용해서는 안 됩니다.</p><h2>제5조 지적재산권</h2><p>사이트의 구성, 문장, 편집 방식, 디자인, 자체 작성한 가이드 콘텐츠에 대한 권리는 운영자에게 있습니다. 외부 링크로 연결되는 원본 자료, 보험회사 양식, 기관 공시 자료의 권리는 각 제공 기관 또는 권리자에게 있습니다. 이용자는 개인적인 확인 목적을 넘어 사이트 콘텐츠를 무단 복제, 재가공, 상업적 배포할 수 없습니다.</p><h2>제6조 면책</h2><p>사이트는 무료 정보 제공을 목적으로 운영되며, 제공 정보의 완전성, 최신성, 특정 목적 적합성을 보증하지 않습니다. 이용자가 사이트 정보를 바탕으로 보험 가입, 청구, 교육 신청, 사고 처리, 법률적 판단을 진행하여 발생한 결과에 대해 운영자는 책임을 부담하지 않습니다. 천재지변, Cloudflare 등 인프라 장애, 외부 사이트 장애, 네트워크 오류로 서비스가 일시 중단될 수 있습니다.</p><h2>제7조 외부 링크</h2><p>사이트에는 보험회사, 협회, 정부 사이트, 교육기관, 파일 저장소 등 외부 사이트로 이동하는 링크가 포함됩니다. 외부 사이트의 운영, 보안, 자료 정확성, 개인정보 처리, 다운로드 파일의 변경 여부는 해당 사이트의 정책과 책임에 따릅니다. 외부 링크 접속 시 이용자는 해당 사이트의 이용약관과 개인정보처리방침을 확인해야 합니다.</p><h2>제8조 약관 변경과 문의</h2><p>본 약관은 서비스 내용, 법령, 운영 정책 변경에 따라 수정될 수 있습니다. 변경된 약관은 사이트에 게시한 시점부터 적용됩니다. 약관 또는 서비스 이용과 관련한 문의는 <a href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a>로 연락해 주세요.</p><h2>제9조 이용 중단과 콘텐츠 변경</h2><p>운영자는 링크 오류, 오래된 정보, 외부 자료 폐쇄, 보안상 필요, 검색 품질 개선을 이유로 특정 페이지나 링크를 수정하거나 삭제할 수 있습니다. 이용자는 기존에 보았던 페이지가 변경될 수 있음을 이해해야 하며, 중요한 업무에 사용할 정보는 항상 사용 시점에 다시 확인해야 합니다.</p><h2>제10조 준거법</h2><p>본 약관은 대한민국 법률에 따라 해석됩니다. 사이트 이용과 관련해 분쟁이 발생하는 경우 우선 문의 채널을 통해 사실관계를 확인하며, 법적 절차가 필요한 경우 관련 법령에서 정한 관할 기준을 따릅니다.</p></article>`;
}

function aboutHtml(env) {
  return `
    <article class="narrow">
      <h1>소개</h1>
      <p>${esc(siteName(env))}는 보험 업무 자료를 찾는 사람이 여러 사이트를 오가며 같은 정보를 반복 검색하지 않도록 만든 자료 정리형 사이트입니다. 보험사 전산, 고객센터, 인콜 모니터링, 전산 헬프데스크, 보험금 청구팩스, 약관 확인, 청구서 다운로드, 자동차보험 관련 조회, 화재보험 준비 자료, 치아보험 청구양식, 실손보험 인수기준, 승강기 정보 열람, 보험연수원 교육처럼 실제 업무나 개인 확인 과정에서 자주 필요한 항목을 한곳에서 찾을 수 있게 구성했습니다.</p>
      <h2>운영 목적</h2>
      <p>보험 정보는 대부분 공개되어 있지만 위치가 흩어져 있습니다. 같은 청구양식이라도 손해보험과 생명보험의 접수 흐름이 다르고, 같은 조회 업무라도 협회, 보험개발원, 보험사, 정부 사이트 중 어디에서 확인해야 하는지 헷갈릴 수 있습니다. 이 사이트는 특정 상품 가입을 권유하기보다 사용자가 먼저 원자료의 위치를 확인하고, 다음으로 어떤 서류와 기준을 점검해야 하는지 읽을 수 있도록 돕는 것을 목표로 합니다.</p>
      <h2>제공하는 정보의 범위</h2>
      <p>홈에는 보험사별 전산 접속 정보와 고객센터, 팩스, 약관 및 청구 관련 링크를 표 형태로 정리했습니다. 청구 체크리스트에는 보험 가입 전 준비물, 고지의무, 기존 보험 증권 점검, 보장 우선순위, 보험료 예산, 가족 계약 확인, 병력과 청구이력 정리, 수익자 지정, 납입 방법, 약관 확인처럼 실제로 빠뜨리기 쉬운 주제를 독립적인 가이드로 나누었습니다. 각 글은 단순 링크 모음이 아니라 사용자가 어떤 순서로 확인해야 하는지, 어떤 자료를 준비해야 하는지, 공식 사이트에서 무엇을 다시 검증해야 하는지까지 설명합니다.</p>
      <h2>편집 기준</h2>
      <p>새 글을 만들 때는 같은 문장을 반복해 페이지 수만 늘리지 않습니다. 치아보험 청구양식 글은 진료기록과 청구서류의 차이를 중심으로 쓰고, 화재보험 체크리스트 글은 사업장 현황과 건축물 정보 확인을 중심으로 쓰며, 보험교육 글은 등록교육과 보수교육의 업무상 의미를 중심으로 설명합니다. 서로 다른 검색 의도를 가진 사용자가 들어왔을 때 같은 내용을 다시 읽는 느낌이 들지 않도록 문단 구조, 예시, 주의사항, FAQ를 다르게 구성합니다.</p>
      <h2>공식 자료와 주의사항</h2>
      <p>외부 링크는 보험사, 협회, 공공기관, 교육기관 등 사용자가 직접 확인할 수 있는 출처를 우선합니다. 다만 보험사 정책, 청구양식, 팩스번호, 교육 과정, 조회 화면은 시간이 지나며 바뀔 수 있습니다. 따라서 실제 보험금 청구, 계약 체결, 교육 신청, 사고 접수 전에는 반드시 해당 보험사나 기관의 공식 안내를 다시 확인해야 합니다. 이 사이트는 청구 가능성 판단, 손해사정, 법률 자문, 보험상품 판매를 대신하지 않습니다.</p>
      <h2>사이트를 이용하는 방법</h2>
      <p>먼저 홈의 표에서 필요한 보험사나 기관의 공식 접속 경로를 확인하고, 관련 주제의 가이드 글을 읽어 준비해야 할 자료를 정리하는 방식이 좋습니다. 예를 들어 치아보험 청구를 준비한다면 손해보험 치아보험 청구양식과 생명보험 치아보험 청구양식의 차이를 먼저 읽고, 본인이 가입한 보험의 회사와 상품 약관을 확인한 뒤, 진료비 영수증과 진료확인서 등 실제 제출 서류를 점검해야 합니다. 사업장 화재보험을 검토한다면 건축물대장과 사업장 체크리스트를 함께 확인하는 편이 안전합니다.</p>
      <h2>개선과 제보</h2>
      <p>링크 오류, 오래된 전화번호, 바뀐 청구양식, 추가하면 좋을 가이드 주제가 있다면 문의 페이지로 알려주시면 확인 후 반영합니다. 사이트의 품질은 링크 수보다 정확한 흐름과 최신성에 달려 있다고 보고 있습니다. 그래서 무리하게 페이지를 늘리기보다 사용자가 실제로 확인해야 하는 자료, 검색 수요가 있으면서도 광고성 글이 많은 영역, 공식 출처와 함께 설명할 수 있는 주제를 우선해서 보강합니다.</p>
      <h2>콘텐츠 업데이트 방향</h2>
      <p>앞으로도 보험 가입 전 준비, 청구 전 확인, 사고 이후 자료 정리처럼 사용자가 실제 상황에서 바로 적용할 수 있는 내용을 중심으로 업데이트합니다. 특히 한 화면에 링크만 많이 모아두는 방식보다, 왜 그 자료가 필요한지와 어떤 순서로 확인하면 실수를 줄일 수 있는지를 설명하는 쪽에 더 무게를 둡니다. 검색으로 처음 방문한 사용자도 낯선 용어 때문에 이탈하지 않도록 쉬운 표현을 쓰되, 공식 용어가 필요한 부분은 함께 표기합니다.</p>
    </article>
  `;
}

function contactHtml(env) {
  return `
    <article class="narrow">
      <h1>문의</h1>
      <p>${esc(siteName(env))}에 대한 문의, 링크 오류 제보, 보험사 정보 변경, 청구양식 변경, 페이지 개선 의견은 아래 이메일로 보내주시면 됩니다. 이 사이트는 회원가입이나 게시판을 운영하지 않기 때문에 문의는 이메일을 기준으로 확인합니다.</p>
      <p><a class="text-link" href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a></p>
      <h2>보내주시면 좋은 내용</h2>
      <p>정확한 확인을 위해 문제가 있는 페이지 주소, 관련 보험사 또는 기관명, 현재 보이는 내용, 수정이 필요하다고 생각하는 항목, 확인 가능한 공식 출처 URL을 함께 적어주세요. 예를 들어 “손해보험 치아보험 청구양식 글의 다운로드 링크가 다른 화면으로 이동합니다”처럼 구체적으로 적어주시면 검토가 빠릅니다. 전화번호나 팩스번호 변경 제보의 경우 변경된 번호가 보이는 공식 안내 페이지가 있으면 함께 보내주세요.</p>
      <h2>처리 가능한 문의</h2>
      <p>보험사 전산 링크가 열리지 않는 문제, 고객센터 번호 변경, 인콜 모니터링이나 헬프데스크 정보 변경, 청구팩스 또는 약관 확인 링크 변경, 보험교육 관련 링크 변경, 가이드 글의 설명 보강 요청, 오탈자와 표현 수정 요청은 검토 대상입니다. 사용자가 실제로 더 쉽게 확인할 수 있는 방향이라면 기존 글의 문단을 보강하거나 새 체크리스트 글로 분리해 반영할 수 있습니다.</p>
      <h2>처리하지 않는 문의</h2>
      <p>개별 보험 가입 추천, 특정 보험사의 보험료 비교 견적, 보험금 지급 가능성 판단, 손해사정 의견, 의료기록 해석, 법률 분쟁 상담, 계약 해지나 민원 대리 요청은 처리하지 않습니다. 이러한 문의는 보험사 고객센터, 담당 설계사, 손해사정 전문가, 법률 전문가, 금융감독원 등 적절한 공식 창구에서 확인해야 합니다. 이 사이트는 자료 위치와 확인 순서를 정리하는 정보 제공 사이트입니다.</p>
      <h2>개인정보 주의</h2>
      <p>문의 이메일에는 주민등록번호, 보험증권 번호 전체, 계좌번호 전체, 진료기록, 신분증 사본, 병원 영수증 원본, 가족의 개인정보처럼 민감한 자료를 보내지 마세요. 링크 오류나 정보 변경을 확인하는 데 필요한 최소 정보만 보내주시면 충분합니다. 이미 민감한 정보를 보낸 경우 삭제 요청을 함께 보내주시면 확인 가능한 범위에서 처리하겠습니다. 보험금 청구 접수는 이 사이트가 아니라 해당 보험사나 공식 접수 창구에서 진행해야 합니다.</p>
      <h2>반영 기준</h2>
      <p>제보 내용이 공식 출처와 일치하고 사용자에게 필요한 정보라고 판단되면 우선순위를 정해 반영합니다. 단순 광고 제안, 출처가 불분명한 홍보성 링크, 특정 업체로 유도하는 내용, 보험상품 판매 목적의 문구는 반영하지 않습니다. 같은 주제의 문의가 여러 번 들어오면 FAQ나 가이드 글을 보강해 반복 질문을 줄이는 방식으로 개선합니다.</p>
      <h2>문의 전 확인하면 좋은 것</h2>
      <p>문의 전에 해당 글 안의 외부 링크가 새 창에서 열리는지, 보험사명이나 기관명이 맞는지, 모바일과 PC에서 같은 문제가 반복되는지 확인해 주세요. 일부 공식 사이트는 점검 시간이나 브라우저 설정에 따라 일시적으로 열리지 않을 수 있습니다. 반복적으로 문제가 확인되는 경우 문의에 날짜와 사용 환경을 함께 적어주시면 원인 확인에 도움이 됩니다.</p>
      <h2>답변과 수정 안내</h2>
      <p>문의가 접수되면 먼저 제보 내용이 실제 페이지와 맞는지 확인하고, 필요한 경우 공식 사이트의 공지나 안내 문서를 다시 찾아봅니다. 단순 오탈자는 빠르게 고치지만, 보험사별 청구양식이나 접수 경로처럼 사용자에게 직접 영향을 줄 수 있는 정보는 출처를 확인한 뒤 반영합니다. 수정이 완료되더라도 별도 회신이 항상 보장되지는 않지만, 중요한 오류는 사이트 내용에 우선 반영하는 방식으로 처리합니다.</p>
      <h2>좋은 제보의 예</h2>
      <p>“생명보험 치아보험 청구양식 글에서 A사 링크가 약관 페이지로 이동합니다”, “보험연수원 보수교육 설명에 신규 과정명이 빠져 있습니다”, “사업장 화재보험 체크리스트에 건축물 용도 확인 문단을 추가하면 좋겠습니다”처럼 위치와 이유가 함께 적힌 제보가 가장 도움이 됩니다. 이런 제보는 단순한 링크 교체를 넘어 가이드 글의 품질을 높이는 자료로 활용됩니다.</p>
    </article>
  `;
}

function page(title, body, env, options = {}) {
  const status = options.status || 200;
  const canonical = new URL((options.canonical || "/").replace(/^\//, ""), siteUrl(env)).toString();
  const description = options.description || "보험사 전산, 고객센터, 보험금 청구팩스, 약관, 청구서, 자동차보험, 화재보험, 치아보험, 보험교육 자료를 정리한 자료센터입니다.";
  const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(siteName(env))}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${esc(options.robots || "index,follow,max-image-preview:large,max-snippet:-1")}">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="/favicon.svg?v=20260526" type="image/svg+xml">
  <link rel="shortcut icon" href="/favicon.ico?v=20260526">
  <script type="application/ld+json">${JSON.stringify(structuredData(title, description, canonical, env, options.article)).replace(/</g, "\\u003c")}</script>
  <style>${css()}</style>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/">${esc(siteName(env))}</a>
    <nav>
      <a href="/">홈</a>
      <a href="/claim-checklist/">청구 체크리스트</a>
      <a href="/about/">소개</a>
      <a href="/contact/">문의</a>
      <a href="/privacy/">개인정보처리방침</a>
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
        <div><strong>${esc(siteName(env))}</strong><p>보험 업무 자료를 표와 가이드 글로 정리하는 독립 정보 사이트입니다. 공식 접수 전에는 각 보험회사와 기관의 최신 안내를 확인해 주세요.</p></div>
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
    :root{--bg:#f5f7fa;--paper:#fff;--line:#d9e1ec;--text:#172033;--muted:#637083;--accent:#e6004f;--blue:#174ea6}
    *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,"Noto Sans KR",sans-serif;line-height:1.72;letter-spacing:0}a{color:var(--blue);text-decoration:none}a:hover{text-decoration:underline}
    .site-header{min-height:64px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 max(18px,calc((100vw - 1180px)/2))}.brand{font-weight:900;color:#111827;font-size:20px}.site-header nav{display:flex;gap:18px;flex-wrap:wrap}.site-header nav a{color:#26364d;font-weight:800;font-size:14px}
    main{max-width:1180px;margin:0 auto;padding:30px 18px 64px}.hero{background:#fff;border:1px solid var(--line);padding:34px;margin-bottom:16px}.eyebrow{margin:0 0 8px;color:var(--accent);font-weight:900}.hero h1,.narrow h1{margin:0 0 12px;font-size:36px;line-height:1.25;color:#111827}.hero p,.lead{font-size:18px;color:#334155;margin:0;word-break:keep-all}.hero-actions{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap}.primary-btn,.secondary-btn{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 17px;border-radius:4px;font-weight:900}.primary-btn{background:#1d5fd1;color:#fff}.secondary-btn{background:#fff;color:#1e3a8a;border:1px solid #c7d7f5}.download-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0 18px}.download-strip div{background:#fff;border-bottom:2px solid var(--accent);display:flex;align-items:center;justify-content:center;gap:14px;min-height:58px}.download-strip a{border:1px solid var(--accent);color:var(--accent);padding:9px 18px;font-weight:900}.link-groups{background:#fff;border:1px solid var(--line);padding:22px;margin-bottom:18px}.link-group{margin:0 0 26px}.link-group:last-child{margin-bottom:0}.link-group h2{font-size:25px;color:#72777d;margin:0 0 8px}.link-group div{display:grid;grid-template-columns:repeat(4,1fr);gap:12px 24px}.link-group a,.pill-links a{display:flex;align-items:center;justify-content:center;min-height:28px;border:1px solid #cfd8e3;border-radius:999px;color:#344054;font-size:14px;background:#fff}.link-group a:hover,.pill-links a:hover{border-color:var(--accent);color:var(--accent);text-decoration:none}
    .table-section,.content-block,.narrow{background:#fff;border:1px solid var(--line);padding:24px;margin-top:18px}.narrow{max-width:920px;margin-left:auto;margin-right:auto}.narrow.wide{max-width:1180px}.section-head{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;margin-bottom:16px}.section-head h2,.block-header h2,.content-block h2,.narrow h2{margin:0;color:#111827}.section-head p,.block-header p{margin:0;color:var(--muted);max-width:640px}.table-wrap{overflow:auto;border:1px solid var(--line)}.data-table{width:100%;min-width:1080px;border-collapse:collapse;background:#fff}.data-table th{background:#fafafa;color:#111827;border-bottom:2px solid var(--accent);padding:9px 8px;text-align:center;white-space:nowrap}.data-table td{border-top:1px solid var(--line);border-left:1px solid var(--line);padding:8px;text-align:center;vertical-align:middle}.data-table td:first-child,.data-table th:first-child{border-left:0}.data-table tr.shaded td{background:#fafafa}.company{display:block;color:#111827;font-weight:900}.small-link{display:block;font-size:12px;color:#64748b}.table-phone{color:#111827;font-weight:500}.table-note{color:#475569;font-size:13px}.browser-icons{display:inline-flex;gap:4px}.browser-icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;color:#fff;font-size:12px;font-weight:900}.browser-icon.chrome{background:#1a73e8}.browser-icon.edge{background:#16a3a8}.hand-link{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;color:#111827;font-size:25px;line-height:1;border-radius:50%}.hand-link:hover{background:#f1f5f9;text-decoration:none}.extra-link{display:block;font-size:12px;color:#64748b;margin-top:2px}
    .topics{padding:28px 0}.topics.in-page{padding-bottom:10px}.block-header{margin-bottom:16px}.guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.guide-card{display:block;background:#fff;border:1px solid var(--line);border-radius:8px;padding:17px;color:var(--text);min-height:220px}.guide-card:hover{border-color:#8fb2e8;text-decoration:none}.guide-card span{font-size:13px;color:var(--accent);font-weight:900}.guide-card h2{font-size:19px;line-height:1.35;margin:8px 0;color:#111827}.guide-card p{margin:0;color:var(--muted);font-size:15px}.card-meta{display:flex;justify-content:space-between;margin-top:13px;color:#8b95a3;font-size:13px}.card-meta em{font-style:normal}.pill-links,.article-links{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}.article-links a{display:flex;align-items:center;justify-content:center;border:1px solid var(--accent);color:var(--accent);min-height:42px;font-weight:900}.content-block.flush{margin:10px 0 20px}.faq{padding:26px 0}.faq-list{border-top:1px solid var(--line);background:#fff}.faq-list details,.article-faq details{border-bottom:1px solid var(--line);padding:0 6px}.faq-list summary,.article-faq summary{cursor:pointer;padding:15px 8px;font-weight:900;color:#111827}.faq-list summary span{color:#1e6bf0}.faq-list p,.article-faq p{margin:0;padding:0 8px 15px 24px;color:var(--muted)}.article-meta{font-size:14px!important;color:#64748b!important}.article h2{margin-top:34px}.article h3{font-size:18px;margin:24px 0 8px;color:#111827}.article-summary{border:1px solid #c7d2fe;background:#f8fbff;padding:18px 20px;margin:22px 0}.article-summary h2{margin-top:0}.article-summary ul,.final-checklist ul{margin:10px 0 0;padding-left:22px}.article-summary li,.final-checklist li{margin:7px 0}.mini-table-wrap{overflow:auto;margin:20px 0;border-top:1px solid var(--line)}.mini-table{width:100%;border-collapse:collapse;min-width:760px}.mini-table th{padding:14px 16px;text-align:left;border-bottom:1px solid var(--line);font-weight:900;color:#111827}.mini-table td{padding:18px 16px;vertical-align:top;border-bottom:1px solid var(--line)}.mini-table td:first-child{font-weight:900;color:#111827}.final-checklist{border-top:2px solid var(--accent);padding-top:18px;margin-top:28px}.article-checklist{border:1px solid #bfdbfe;background:#f8fbff;padding:18px;margin:22px 0}.article-checklist h2{margin-top:0}.info-list{border:1px solid var(--line);margin:22px 0}.info-list div{display:grid;grid-template-columns:180px 1fr;border-top:1px solid var(--line)}.info-list div:first-child{border-top:0}.info-list dt{background:#fafafa;padding:12px 14px;font-weight:900}.info-list dd{margin:0;padding:12px 14px}.text-link{font-weight:900;color:#a8003f}
    .site-footer{background:#eef2f7;border-top:1px solid var(--line);padding:30px 18px}.footer-inner{max-width:1180px;margin:0 auto;display:flex;justify-content:space-between;gap:30px}.footer-inner p{margin:8px 0 0;color:#526173}.footer-links{display:grid;gap:8px;min-width:170px}.footer-links a{font-size:18px;color:#16304f}
    @media(max-width:880px){.site-header{padding:14px 18px;align-items:flex-start;flex-direction:column}.hero h1,.narrow h1{font-size:28px}.download-strip,.link-group div,.guide-grid,.pill-links,.article-links{grid-template-columns:1fr 1fr}.section-head{display:block}.footer-inner{display:block}.footer-links{margin-top:18px}.info-list div{grid-template-columns:1fr}.info-list dt{border-bottom:1px solid var(--line)}}
    @media(max-width:540px){main{padding:20px 12px 44px}.hero,.table-section,.content-block,.narrow,.link-groups{padding:18px}.download-strip,.link-group div,.guide-grid,.pill-links,.article-links{grid-template-columns:1fr}.download-strip div{justify-content:space-between;padding:10px}.data-table th,.data-table td{font-size:14px;padding:7px 6px}}
  `;
}

function structuredData(title, description, canonical, env, article) {
  const base = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebPage",
    name: title,
    headline: title,
    description,
    url: canonical,
    inLanguage: "ko-KR",
    isPartOf: { "@type": "WebSite", name: siteName(env), url: siteUrl(env) },
    publisher: { "@type": "Organization", name: siteName(env), url: siteUrl(env) }
  };
  if (article) base.dateModified = article.date;
  return base;
}

function sitemap(env) {
  const base = siteUrl(env);
  const paths = [
    "/",
    "/claim-checklist/",
    "/compare/",
    ...ARTICLES.map((article) => `/articles/${article.slug}/`),
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
    ...ARTICLES.map((article) => [`/articles/${article.slug}/`, article.title, article.excerpt])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escXml(siteName(env))}</title>
    <link>${escXml(base)}</link>
    <description>보험사 전산, 청구서, 약관, 자동차보험, 화재보험, 치아보험, 보험교육 자료를 정리한 자료센터입니다.</description>
    <language>ko-KR</language>
    ${items.map(([path, itemTitle, itemDescription]) => `<item><title>${escXml(itemTitle)}</title><link>${escXml(new URL(path.replace(/^\//, ""), base).toString())}</link><description>${escXml(itemDescription)}</description></item>`).join("")}
  </channel>
</rss>`;
}

function robots(env) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(env)}sitemap.xml\n`;
}

function phoneLink(value) {
  const textValue = String(value || "").trim();
  if (!textValue || textValue === "-") return `<span class="table-note">대표번호 이용</span>`;
  if (!/^[0-9-]+$/.test(textValue)) return esc(textValue);
  return `<span class="table-phone">${esc(textValue)}</span>`;
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

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function text(body, contentType, headers = {}) {
  return new Response(body, { headers: { "content-type": contentType, ...headers } });
}

function siteUrl(env) {
  const value = env && env.SITE_URL ? String(env.SITE_URL) : SITE_DEFAULT;
  return value.endsWith("/") ? value : `${value}/`;
}

function siteName(env) {
  return env && env.SITE_NAME ? String(env.SITE_NAME) : "보험업무 자료센터";
}

function siteEmail(env) {
  return env && env.CONTACT_EMAIL ? String(env.CONTACT_EMAIL) : "contact@galaxymale.com";
}

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="20" fill="#12315a"/><path d="M20 30h56v12H20zM20 48h56v12H20zM20 66h38v12H20z" fill="#fff"/><circle cx="70" cy="72" r="10" fill="#e6004f"/></svg>`;
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

function escXml(value) {
  return esc(value);
}
