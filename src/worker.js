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

const DOWNLOAD_LINKS = [
  ["손해보험 치아보험 청구양식", "https://drive.google.com/drive/folders/1bX5P4mX_aeMeeipb9KgKPpfr_2gXJyX5?usp=share_link"],
  ["생명보험 치아보험 청구양식", "https://drive.google.com/drive/folders/1ykzncdihaEM42L8rGB_ApDvylz_IJtG4?usp=share_link"],
  ["보험사 소식지", "https://drive.google.com/drive/folders/16U8HvvqEaM-TdlwWVCNZ-nBb5JwAZ3Jw"]
];

const CATEGORY_DEFS = [
  {
    slug: "auto",
    label: "자동차 보험",
    title: "자동차 보험 업무 가이드",
    description: "자동차보험 비교견적, 다이렉트 계약, 할인·할증 조회, 과실비율과 합의금 계산 자료를 업무 순서대로 정리했습니다.",
    links: [
      ["대면 간편견적", "https://kpub.knia.or.kr/carInsuranceDisc/insurance/carInsurance.do"],
      ["보험다모아 비교견적", "https://e-insmarket.or.kr/aimt/aimtRealIntro.knia"],
      ["다이렉트 계약 체결", "http://다이렉트비교견적.com"],
      ["할인·할증요인 조회시스템", "https://prem.kidi.or.kr:1443/"],
      ["보험개발원 등록", "https://iics.kidi.or.kr/insuUserReal/viewInsuUserReal.do"],
      ["합의금 계산기(사망·후유장해)", "http://lee2229.hubweb.net/호프만.xlsx"],
      ["합의금 계산기(자손·자상)", "http://lee2229.hubweb.net/자손자상.xlsx"],
      ["과실비율 정보포털", "https://accident.knia.or.kr/"],
      ["카드사 무이자 할부", "https://www.bss-a.co.kr/common_popup/card.html"],
      ["자동차보험 체크리스트(삼성화재)", "http://lee2229.hubweb.net/자동차보험체크리스트.hwp"]
    ],
    topics: [
      ["auto-face-quote", "대면 간편견적 확인 방법", "대면 상담 전 차량정보와 운전자 범위를 정리하고 간편견적 화면에서 확인해야 할 항목을 설명합니다."],
      ["auto-damoa-compare", "보험다모아 비교견적 보는 법", "보험다모아 비교 결과를 읽을 때 보험료만 보지 않고 담보와 특약을 함께 확인하는 기준을 정리합니다."],
      ["auto-direct-contract", "다이렉트 자동차보험 계약 체결 체크", "온라인 다이렉트 계약 전에 계약자, 피보험자, 차량 정보와 결제 방식을 확인하는 순서를 안내합니다."],
      ["auto-premium-factor", "할인·할증요인 조회시스템 활용", "갱신 보험료가 오른 이유를 확인할 때 할인·할증요인 조회시스템에서 봐야 할 항목을 정리합니다."],
      ["auto-insurance-development", "보험개발원 등록 정보 확인", "차량과 운전자 정보가 보험개발원 조회 과정에서 어떻게 활용되는지 업무 관점으로 설명합니다."],
      ["auto-settlement-death-disability", "사망·후유장해 합의금 계산 자료", "교통사고 사망 또는 후유장해 사고에서 계산 자료를 볼 때 주의할 기준을 정리합니다."],
      ["auto-settlement-self-injury", "자손·자상 합의금 계산 자료", "자동차상해와 자기신체사고의 차이를 기준으로 합의금 계산 자료를 읽는 방법을 설명합니다."],
      ["auto-fault-ratio", "과실비율 정보포털 활용 가이드", "교통사고 유형별 과실비율을 확인할 때 사례 검색과 사고 상황 정리가 왜 필요한지 안내합니다."],
      ["auto-card-installment", "자동차보험 카드 무이자 할부 확인", "보험료 결제 전 카드사 무이자 할부 조건과 적용 기간을 확인하는 기준을 정리합니다."],
      ["auto-checklist-samsung", "자동차보험 체크리스트 활용법", "갱신 전 운전자 범위, 담보, 특약, 긴급출동, 마일리지 항목을 놓치지 않는 체크 흐름입니다."]
    ]
  },
  {
    slug: "fire",
    label: "화재보험",
    title: "화재보험 업무 가이드",
    description: "사업장 화재보험 체크리스트, 특수건물 조회, 건축물대장 확인과 업종별 가입 전 점검 기준을 정리했습니다.",
    links: [
      ["사업장 화재보험 체크리스트", "https://drive.google.com/file/d/1EonSnWsfZyOFjG7C5QjBbnutYbDyb9Ej/view?usp=drive_link"],
      ["특수건물 정보조회(화재보험)", "https://ucis.kfpa.or.kr/underlist.do"],
      ["건축물대장", "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098&HighCtgCD=A02004002&Mcode=10205"]
    ],
    topics: [
      ["fire-business-checklist", "사업장 화재보험 체크리스트", "사업장 소재지, 건물 구조, 업종, 재고, 기계장치와 배상책임 담보를 함께 확인하는 기본 절차입니다."],
      ["fire-special-building", "특수건물 정보조회 확인", "특수건물 대상 여부를 확인하고 의무보험과 일반 화재보험 설계를 구분하는 기준을 설명합니다."],
      ["fire-building-register", "건축물대장으로 보는 화재보험", "건축물대장 용도, 구조, 연면적, 사용승인일을 기준으로 화재보험 가입 자료를 점검합니다."],
      ["fire-rental-store", "임대 사업장 화재보험 준비", "임차인과 임대인의 책임 범위, 시설 소유자 구분, 원상복구 비용을 확인하는 방법입니다."],
      ["fire-restaurant", "음식점 화재보험 체크", "화기 사용, 배상책임, 식중독, 시설 집기, 휴업손해 등 음식점에서 자주 빠지는 항목을 정리합니다."],
      ["fire-factory", "공장 화재보험 설계 자료", "공장 건물, 기계, 원재료, 완제품, 전기설비 정보를 분리해 정리하는 기준을 설명합니다."],
      ["fire-public-use", "다중이용업소 화재보험", "다중이용업소에서 의무가입 여부와 배상책임 보장을 확인하는 흐름을 안내합니다."],
      ["fire-inventory", "재고자산 화재보험 산정", "재고 금액이 계절별로 달라지는 업종에서 평균재고와 최고재고를 구분하는 방법입니다."],
      ["fire-water-damage", "누수·배상책임 담보 확인", "화재보험과 함께 검토되는 누수, 임대인 배상, 시설소유자 배상책임 담보를 정리합니다."],
      ["fire-renewal", "화재보험 갱신 전 확인사항", "갱신 시점에 업종 변경, 면적 변경, 설비 추가, 재고 증가를 다시 확인해야 하는 이유를 설명합니다."]
    ]
  },
  {
    slug: "dental",
    label: "치아보험",
    title: "치아보험 청구 가이드",
    description: "손해보험·생명보험 치아보험 청구양식, 임플란트·크라운·충치치료 청구서류와 약관 확인 방법을 정리했습니다.",
    links: DOWNLOAD_LINKS.slice(0, 2),
    topics: [
      ["dental-nonlife-forms", "손해보험 치아보험 청구양식", "손해보험사 치아보험 청구양식을 찾고 보험사별 제출 방식 차이를 확인하는 기준입니다."],
      ["dental-life-forms", "생명보험 치아보험 청구양식", "생명보험사 치아보험 청구양식과 진료확인서, 진료기록, 영상자료 준비 흐름을 정리합니다."],
      ["dental-implant", "임플란트 청구서류 준비", "임플란트 치료에서 발치일, 식립일, 보철일과 파노라마 사진을 확인해야 하는 이유를 설명합니다."],
      ["dental-crown-bridge", "크라운·브릿지 청구 가이드", "크라운과 브릿지 청구 시 치료 원인, 치아 번호, 치료 일자를 정리하는 방법입니다."],
      ["dental-caries", "충치치료 치아보험 청구", "레진, 인레이, 온레이 등 충치치료 항목별로 확인해야 할 서류와 약관 기준을 정리합니다."],
      ["dental-periodontal", "치주치료 청구 확인", "치주질환 치료비 청구에서 진료기록과 치료 내용 확인이 필요한 이유를 설명합니다."],
      ["dental-fracture", "치아파절 청구 가이드", "사고로 인한 치아파절 청구에서 사고일, 진단명, 치료계획을 정리하는 기준입니다."],
      ["dental-records", "치과 진료기록 준비법", "치과 진료기록, 진료비 세부내역서, 영상자료를 보험사 요구에 맞춰 준비하는 흐름입니다."],
      ["dental-waiting-period", "치아보험 면책·감액기간 확인", "가입 직후 청구에서 면책기간과 감액기간을 먼저 확인해야 하는 이유를 정리합니다."],
      ["dental-terms-check", "치아보험 약관 확인 방법", "치아보험 약관에서 보장개시일, 보장횟수, 치료재료 기준을 찾는 방법입니다."]
    ]
  },
  {
    slug: "education",
    label: "보험교육",
    title: "보험교육 자료 가이드",
    description: "손해보험, 생명보험, 변액 교재와 모의고사, 보험연수원 등록교육·보수교육을 한곳에서 확인할 수 있게 정리했습니다.",
    links: [
      ["손보(교재/모의고사)", "https://drive.google.com/file/d/1QELPqi9tYbXuAEIytcbAKGq0b7c-g_PS/view?usp=drive_link"],
      ["생보(교재/모의고사)", "https://drive.google.com/file/d/1rAuGAZGcC1e7pUFbtOnl8QFhsHz/view?usp=drive_link"],
      ["변액(교재/모의고사)", "https://drive.google.com/file/d/1hfKSMkm0jlFwi9ttgpti3EP36k7x9BCI/view?usp=drive_link"],
      ["보험연수원(등록교육, 보수교육)", "https://www.in.or.kr/"]
    ],
    topics: [
      ["education-nonlife-test", "손보 교재와 모의고사 활용", "손해보험 모집자격 시험 준비에서 교재와 모의고사를 반복 학습하는 순서를 정리합니다."],
      ["education-life-test", "생보 교재와 모의고사 활용", "생명보험 시험 범위와 자주 틀리는 계약 전 알릴 의무, 보험금 지급 기준을 정리합니다."],
      ["education-variable-test", "변액보험 교재와 모의고사", "변액보험 시험에서 펀드, 위험, 설명의무를 함께 공부하는 기준을 설명합니다."],
      ["education-institute", "보험연수원 등록교육 확인", "보험연수원에서 교육 이수 상태와 과정 신청을 확인하는 방법을 안내합니다."],
      ["education-registration", "모집종사자 등록교육 체크", "신규 등록 전 이수해야 할 교육과 서류 준비 항목을 정리합니다."],
      ["education-continuing", "보험 보수교육 일정 관리", "보수교육 대상자, 이수 기간, 미이수 시 업무 제한 가능성을 점검하는 흐름입니다."],
      ["education-license", "설계사 자격시험 준비", "시험 전 과목별 학습 순서와 기출 유형을 업무 관점으로 정리합니다."],
      ["education-agent-check", "모집종사자 조회 기준", "고객 응대 전 모집종사자 등록 상태를 확인해야 하는 이유를 설명합니다."],
      ["education-compliance", "완전판매 교육 핵심", "상품 설명, 비교 안내, 고지의무 확인 등 완전판매 교육에서 중요한 실무 기준입니다."],
      ["education-materials", "보험교육 자료 정리법", "교육자료, 모의고사, 이수증, 보수교육 기록을 체계적으로 보관하는 방법입니다."]
    ]
  }
];

const HOME_TOPICS = [
  { slug: "child-insurance-standard-height-weight", category: "자녀보험", title: "자녀보험 표준 키·몸무게 확인 가이드", excerpt: "자녀보험 심사 전 표준 키와 몸무게 자료를 확인하고 고지사항을 정리하는 방법입니다.", linkLabel: "표준 키/몸무게(자녀보험)", linkUrl: "http://lee2229.hubweb.net/icon/adong.jpg" },
  { slug: "medical-expense-underwriting-check", category: "실손보험", title: "실손보험 인수기준 확인 가이드", excerpt: "실손보험 가입 전 인수기준과 병력 고지, 보장 제한 가능성을 확인하는 순서입니다.", linkLabel: "실손보험 인수기준 확인", linkUrl: "https://kpub.knia.or.kr/productDisc/lostHealth/lostHealthDisclosure.do" },
  { slug: "elevator-insurance-info-view", category: "승강기보험", title: "승강기 보험 정보 열람 가이드", excerpt: "승강기 정보 열람 자료를 기준으로 의무보험과 관리 주체를 확인하는 방법입니다.", linkLabel: "승강기 정보 열람", linkUrl: "https://www.elevator.go.kr/opn/MainPage.do" },
  { slug: "ga-essential-links-guide", category: "GA 필수 링크", title: "GA 필수 링크 업무 가이드", excerpt: "대리점 협회 상품 비교와 보험사별 등기우편 접수 주소를 업무에 활용하는 기준입니다.", linkLabel: "대리점 협회 상품 비교", linkUrl: "https://pcs.iaa.or.kr/comm/login.do;jsessionid=357FB2FFF6457E9A77A9080571C407B3", extraLinks: [["보험사별 등기우편 접수 주소", "http://lee2229.hubweb.net/mail3.htm"]] }
];

const ARTICLES = [
  ...HOME_TOPICS.map((item) => ({ ...item, type: "home", date: "2026-05-26" })),
  ...CATEGORY_DEFS.flatMap((category) => category.topics.map(([slug, title, excerpt], index) => ({
    slug,
    title,
    excerpt,
    category: category.label,
    categorySlug: category.slug,
    linkLabel: category.links[index % category.links.length][0],
    linkUrl: category.links[index % category.links.length][1],
    date: "2026-05-26"
  })))
];

const EDUCATION_CATEGORY = CATEGORY_DEFS.find((category) => category.slug === "education");
const MERGED_CATEGORY_SLUGS = new Set(["auto", "fire", "dental"]);
const HOME_GUIDE_ARTICLES = ARTICLES.filter((article) => article.categorySlug !== "education");

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

  const category = CATEGORY_DEFS.find((item) => path === `/category/${item.slug}`);
  if (category && MERGED_CATEGORY_SLUGS.has(category.slug)) return Response.redirect(siteUrl(env), 301);
  if (category && category.slug === "education") return page(category.title, categoryHtml(category), env, {
    description: category.description,
    canonical: `/category/${category.slug}/`
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
  if (insurer) return page(`${insurer[1]} 보험 업무 정보`, insurerHtml(insurer), env, {
    description: `${insurer[1]} 전산, 고객센터, 인콜 모니터링, 헬프데스크, 보험금 청구팩스, 약관확인, 청구서 자료를 정리했습니다.`,
    canonical: `/company/${insurer[0]}/`
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
    ${downloadStripHtml()}
    ${homeLinkGroupsHtml()}
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
  return `<section class="download-strip">${DOWNLOAD_LINKS.map(([label, url]) => `<div><span>※ ${esc(label)}</span><a href="${esc(url)}" target="_blank" rel="nofollow noopener">다운로드</a></div>`).join("")}</section>`;
}

function homeLinkGroupsHtml() {
  const groups = [
    ...CATEGORY_DEFS.map((category) => [category.label, category.links]),
    ["자녀보험", [["표준 키/몸무게(자녀보험)", "http://lee2229.hubweb.net/icon/adong.jpg"]]],
    ["실손보험", [["실손보험 인수기준 확인", "https://kpub.knia.or.kr/productDisc/lostHealth/lostHealthDisclosure.do"]]],
    ["승강기보험", [["승강기 정보 열람", "https://www.elevator.go.kr/opn/MainPage.do"]]],
    ["GA 필수 링크", [["대리점 협회 상품 비교", "https://pcs.iaa.or.kr/comm/login.do;jsessionid=357FB2FFF6457E9A77A9080571C407B3"], ["보험사별 등기우편 접수 주소", "http://lee2229.hubweb.net/mail3.htm"]]]
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
      <td><a class="company" href="/company/${slug}/">${esc(name)}</a>${links.system ? `<a class="small-link" href="${esc(links.system)}" rel="nofollow noopener" target="_blank">전산 바로가기</a>` : ""}</td>
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

function articleHtml(article) {
  const relatedCategory = article.categorySlug === "education" ? EDUCATION_CATEGORY : null;
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
        <p>${relatedCategory ? `${relatedCategory.label} 카테고리에는 이 글과 연결되는 교육 가이드가 함께 정리되어 있습니다.` : "홈에는 자동차 보험, 화재보험, 치아보험, 자녀보험, 실손보험, 승강기보험, GA 필수 링크 자료가 한 화면에 정리되어 있습니다."} 한 자료만 보고 판단하면 누락이 생길 수 있으므로 관련 가이드와 보험사 표를 같이 확인하는 방식이 좋습니다.</p>
        <p><a class="text-link" href="${relatedCategory ? `/category/${relatedCategory.slug}/` : "/"}">${relatedCategory ? `${relatedCategory.label} 카테고리 보기` : "통합 홈 가이드 보기"}</a> · <a class="text-link" href="/compare/">보험사 전산 링크 비교표 보기</a></p>
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
  if (article.categorySlug === "auto") return {
    reason: "자동차보험은 견적, 할인·할증, 운전자 범위, 과실비율, 결제 조건이 서로 연결되어 한 항목만 확인하면 판단이 흔들릴 수 있습니다.",
    prepare: "차량번호, 차종, 최초등록일, 운전자 범위, 사고 이력, 갱신 예정일, 원하는 담보와 특약",
    linkUse: "견적 비교, 사고 과실 확인, 할인·할증 원인 확인, 결제 조건 확인",
    miss: "운전자 한정 범위, 마일리지 특약, 블랙박스 특약, 대물 한도, 자기부담금"
  };
  if (article.categorySlug === "fire") return {
    reason: "화재보험은 건물 구조와 업종, 임대차 관계, 특수건물 여부에 따라 필요한 담보와 확인 자료가 달라집니다.",
    prepare: "사업장 주소, 건축물 용도, 면적, 구조, 업종, 재고 규모, 임대차 여부, 시설 소유 관계",
    linkUse: "사업장 체크리스트 확인, 특수건물 대상 여부 조회, 건축물대장 원자료 확인",
    miss: "건물과 시설 소유자 구분, 휴업손해, 시설소유자 배상책임, 재고 금액 변동"
  };
  if (article.categorySlug === "dental") return {
    reason: "치아보험은 치료 항목과 치료일, 치아 번호, 면책·감액기간에 따라 청구 가능 여부와 준비 서류가 달라집니다.",
    prepare: "치료일, 치아 번호, 치료명, 진료비 영수증, 진료비 세부내역서, 치과치료확인서, 영상자료 여부",
    linkUse: "손해보험 또는 생명보험 치아보험 청구양식 확인과 회사별 서류 차이 점검",
    miss: "면책기간, 감액기간, 보장개시일, 치료 전후 영상자료, 기존 질환 여부"
  };
  if (article.categorySlug === "education") return {
    reason: "보험교육은 시험 준비, 등록교육, 보수교육, 변액 자격처럼 목적별로 접속해야 하는 자료와 이수 기준이 다릅니다.",
    prepare: "교육 대상, 자격 종류, 시험 일정, 이수 기간, 소속 대리점 또는 회사, 필요한 교재와 모의고사",
    linkUse: "교재 확인, 모의고사 학습, 보험연수원 교육 신청과 이수 상태 확인",
    miss: "이수 기간, 보수교육 대상 여부, 시험 과목 구분, 등록 전 필요한 서류"
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
    [`${article.title}을 확인할 때 가장 먼저 볼 항목은 무엇인가요?`, `${focus.prepare} 중에서 현재 상황에 해당하는 정보를 먼저 정리하는 것이 좋습니다. 그 다음 이 글에 연결된 외부 원자료를 열어 기준일과 적용 대상을 확인하세요.`],
    [`${article.category} 자료의 외부 링크가 열리지 않으면 어떻게 해야 하나요?`, `${article.category} 관련 사이트는 개편이나 권한 설정으로 주소가 바뀔 수 있습니다. 링크가 열리지 않으면 출처 및 참고 링크에 있는 기관명과 자료명을 함께 검색하고, 실제 접수 전에는 고객센터 또는 공식 공지에서 최신 경로를 확인하세요.`],
    [`${article.title} 내용을 고객에게 그대로 안내해도 되나요?`, `이 페이지는 업무 확인 순서를 돕는 참고 글입니다. 고객에게 안내할 때는 ${focus.linkUse}에 해당하는 원자료를 직접 확인한 뒤, 보험회사나 기관의 공식 문구를 기준으로 설명하는 편이 안전합니다.`]
  ];
  return `<section class="article-faq"><h2>자주 묻는 질문</h2>${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>`;
}

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
  const category = CATEGORY_DEFS.find((item) => item.slug === kind);
  const faqs = category ? categoryFaqs(category) : homeFaqs();
  const label = category ? category.label : "홈";
  return `<section class="faq"><header class="block-header"><h2>자주 묻는 질문</h2><p>${esc(label)} 페이지에서 실제로 헷갈리기 쉬운 부분을 따로 정리했습니다.</p></header><div class="faq-list">${faqs.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary><span>Q.</span> ${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></section>`;
}

function homeFaqs() {
  return [
    ["홈 표의 손모양 아이콘은 어떤 링크인가요?", "각 보험회사별 약관확인과 청구서 외부 링크입니다. 원본 표에서 제공하던 이동 구조를 반영했으며, 실제 접수 전에는 보험회사 공식 안내에서 최신 여부를 다시 확인해야 합니다."],
    ["홈에 자녀보험, 실손보험, 승강기보험, GA 필수 링크를 따로 둔 이유는 무엇인가요?", "이 주제들은 특정 보험회사 표와 별도로 검색되는 자료입니다. 키·몸무게 기준, 실손 인수기준, 승강기 정보, GA 업무 링크처럼 사용자가 바로 원자료를 찾는 경우가 많아 홈 가이드로 분리했습니다."],
    ["보험금 청구를 이 사이트에서 직접 할 수 있나요?", "아닙니다. 이 사이트는 자료 위치와 확인 순서를 정리한 정보형 사이트입니다. 실제 보험금 청구, 계약 체결, 교육 이수는 각 보험회사나 기관의 공식 채널에서 진행해야 합니다."]
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

function aboutHtml(env) {
  return `<article class="narrow"><h1>소개</h1><p>${esc(siteName(env))}는 보험 업무에서 반복적으로 찾는 전산 링크, 청구서, 약관, 고객센터, 교육자료를 정리하는 정보형 사이트입니다.</p><p>특정 보험회사의 공식 사이트가 아니며 보험 가입 권유, 보험금 지급 판단, 법률 자문을 제공하지 않습니다. 사용자는 실제 계약 체결이나 청구 전 각 보험회사 공식 채널에서 최신 내용을 확인해야 합니다.</p><p>사이트는 자동차 보험, 화재보험, 치아보험, 보험교육처럼 검색 수요가 있으면서도 자료가 흩어져 있는 주제를 중심으로 독립적인 안내 글을 제공합니다.</p></article>`;
}

function contactHtml(env) {
  return `<article class="narrow"><h1>문의</h1><p>링크 오류, 번호 변경, 양식 변경, 페이지 개선 제안은 아래 이메일로 보내주세요.</p><p><a class="text-link" href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a></p><p>제보 시 회사명, 수정이 필요한 항목, 확인 가능한 공식 출처 URL을 함께 보내주시면 반영 검토가 더 빠릅니다.</p></article>`;
}

function privacyHtml(env) {
  return `<article class="narrow"><h1>개인정보처리방침</h1><p>${esc(siteName(env))}는 회원가입 기능을 제공하지 않으며 방문자의 민감한 개인정보를 직접 수집하지 않습니다.</p><h2>수집하는 정보</h2><p>문의 이메일을 보내는 경우 답변을 위해 이메일 주소와 문의 내용을 확인할 수 있습니다. 서버 운영 과정에서는 접속 로그, 브라우저 정보, 접속 시간이 자동 기록될 수 있습니다.</p><h2>이용 목적</h2><p>문의 응답, 오류 확인, 사이트 보안 유지, 콘텐츠 개선을 위해 최소 범위에서 이용합니다.</p><h2>보관 및 파기</h2><p>문의 내용은 처리 목적이 끝난 뒤 합리적인 기간 내 삭제합니다. 법령상 보관이 필요한 경우 해당 기간 동안 보관될 수 있습니다.</p><h2>문의</h2><p>개인정보 관련 문의는 <a href="mailto:${esc(siteEmail(env))}">${esc(siteEmail(env))}</a>로 연락해 주세요.</p></article>`;
}

function termsHtml(env) {
  return `<article class="narrow"><h1>이용약관</h1><h2>서비스 이용</h2><p>${esc(siteName(env))}는 보험 전산 링크, 고객센터, 청구팩스, 약관확인, 청구서, 교육자료 등 공개 정보를 정리해 제공합니다.</p><h2>정보의 한계</h2><p>정보는 변경될 수 있으며 최종 확인과 업무 판단은 각 보험회사 공식 사이트와 고객센터 안내를 기준으로 해야 합니다.</p><h2>책임 제한</h2><p>본 사이트는 보험 가입 권유, 보험금 지급 보장, 법률 또는 손해사정 자문을 제공하지 않습니다. 외부 링크의 운영, 보안, 콘텐츠는 해당 사이트 정책을 따릅니다.</p><h2>외부 링크</h2><p>외부 링크는 편의를 위한 참고 자료이며 접속 시 해당 사이트의 약관과 개인정보처리방침이 적용됩니다.</p></article>`;
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
      <a href="/category/education/">보험교육</a>
      <a href="/compare/">보험사 표</a>
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
    .table-section,.content-block,.narrow{background:#fff;border:1px solid var(--line);padding:24px;margin-top:18px}.narrow{max-width:920px;margin-left:auto;margin-right:auto}.narrow.wide{max-width:1180px}.section-head{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;margin-bottom:16px}.section-head h2,.block-header h2,.content-block h2,.narrow h2{margin:0;color:#111827}.section-head p,.block-header p{margin:0;color:var(--muted);max-width:640px}.table-wrap{overflow:auto;border:1px solid var(--line)}.data-table{width:100%;min-width:1080px;border-collapse:collapse;background:#fff}.data-table th{background:#fafafa;color:#111827;border-bottom:2px solid var(--accent);padding:9px 8px;text-align:center;white-space:nowrap}.data-table td{border-top:1px solid var(--line);border-left:1px solid var(--line);padding:8px;text-align:center;vertical-align:middle}.data-table td:first-child,.data-table th:first-child{border-left:0}.data-table tr.shaded td{background:#fafafa}.company{display:block;color:#111827;font-weight:900}.small-link{display:block;font-size:12px;color:#64748b}.browser-icons{display:inline-flex;gap:4px}.browser-icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;color:#fff;font-size:12px;font-weight:900}.browser-icon.chrome{background:#1a73e8}.browser-icon.edge{background:#16a3a8}.hand-link{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;color:#111827;font-size:25px;line-height:1;border-radius:50%}.hand-link:hover{background:#f1f5f9;text-decoration:none}.extra-link{display:block;font-size:12px;color:#64748b;margin-top:2px}
    .topics{padding:28px 0}.topics.in-page{padding-bottom:10px}.block-header{margin-bottom:16px}.guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.guide-card{display:block;background:#fff;border:1px solid var(--line);border-radius:8px;padding:17px;color:var(--text);min-height:220px}.guide-card:hover{border-color:#8fb2e8;text-decoration:none}.guide-card span{font-size:13px;color:var(--accent);font-weight:900}.guide-card h2{font-size:19px;line-height:1.35;margin:8px 0;color:#111827}.guide-card p{margin:0;color:var(--muted);font-size:15px}.card-meta{display:flex;justify-content:space-between;margin-top:13px;color:#8b95a3;font-size:13px}.card-meta em{font-style:normal}.pill-links,.article-links{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}.article-links a{display:flex;align-items:center;justify-content:center;border:1px solid var(--accent);color:var(--accent);min-height:42px;font-weight:900}.content-block.flush{margin:10px 0 20px}.faq{padding:26px 0}.faq-list{border-top:1px solid var(--line);background:#fff}.faq-list details,.article-faq details{border-bottom:1px solid var(--line);padding:0 6px}.faq-list summary,.article-faq summary{cursor:pointer;padding:15px 8px;font-weight:900;color:#111827}.faq-list summary span{color:#1e6bf0}.faq-list p,.article-faq p{margin:0;padding:0 8px 15px 24px;color:var(--muted)}.article-meta{font-size:14px!important;color:#64748b!important}.article h2{margin-top:30px}.article-checklist{border:1px solid #bfdbfe;background:#f8fbff;padding:18px;margin:22px 0}.article-checklist h2{margin-top:0}.info-list{border:1px solid var(--line);margin:22px 0}.info-list div{display:grid;grid-template-columns:180px 1fr;border-top:1px solid var(--line)}.info-list div:first-child{border-top:0}.info-list dt{background:#fafafa;padding:12px 14px;font-weight:900}.info-list dd{margin:0;padding:12px 14px}.text-link{font-weight:900;color:#a8003f}
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
    "/compare/",
    "/category/education/",
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
    ["/category/education/", EDUCATION_CATEGORY.title, EDUCATION_CATEGORY.description],
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
