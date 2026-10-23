// ⚠️ 이 파일만 고치면 홈페이지 내용이 바뀝니다.
// 문구·연락처·링크는 다른 파일에 직접 적지 말고 반드시 여기서만 관리하세요.

export const siteConfig = {
  // 홈페이지 주소와 링크 미리보기 정보
  meta: {
    siteUrl: "https://kim-bohum.onrender.com", // [TODO] 배포 후 실제 주소로 교체
    title: "김보험 | 보험설계사",
    description: "필요한 만큼만 설계하고, 끝까지 곁에서 관리합니다.",
  },

  // 첫 화면에 보이는 내 소개
  profile: {
    name: "김보험",
    initial: "김",
    title: "보험설계사",
    company: "든든보험파트너스",
    tagline: "필요한 만큼만 설계하고, 끝까지 곁에서 관리합니다.",
    photo: "", // [TODO] public/images/profile.jpg를 넣은 뒤 "/images/profile.jpg"로 변경
    badges: ["경력 8년", "생명·손해보험", "송파·강동·하남"],
  },

  // 연락처
  contact: {
    phone: "010-1234-5678", // [TODO] 실제 번호
    email: "kim.bohum@example.com", // [TODO] 실제 이메일
    kakaoChannelUrl: "https://pf.kakao.com/_TODO/chat", // [TODO] 카카오톡 채널 채팅 링크
    hours: "평일 09:00–20:00 (주말은 카카오톡 문의)",
    regions: "서울 송파구·강동구, 경기 하남시",
  },

  // 버튼과 안내 문구
  labels: {
    kakao: "카카오톡으로 상담하기",
    kakaoShort: "카카오톡 상담",
    phone: "전화하기",
    sms: "문자 보내기",
    email: "이메일 보내기",
    hoursLabel: "상담 가능 시간",
    regionsLabel: "활동 지역",
  },

  // 섹션 제목
  sections: {
    services: "이런 분께 도움이 됩니다",
    process: "상담은 이렇게 진행돼요",
    about: "김보험을 소개합니다",
    contact: "연락하기",
  },

  // ② 이런 분께 도움이 됩니다
  services: [
    { icon: "ClipboardCheck", title: "보장 분석·정리", description: "가입한 보험이 많은데 무엇이 겹치고 무엇이 부족한지 모르겠다면" },
    { icon: "Baby", title: "자녀 보험", description: "아이가 태어났거나 어린이집에 다니기 시작했다면" },
    { icon: "HeartPulse", title: "실손·건강보험 점검", description: "갱신 보험료가 부담되거나, 지금 보장이 충분한지 궁금하다면" },
    { icon: "Users", title: "맞벌이 가족 설계", description: "부부 각자의 보험을 가족 단위로 한 번에 정리하고 싶다면" },
  ],

  // ③ 상담은 이렇게 진행돼요
  process: {
    steps: [
      { title: "편하게 연락 주세요", description: "카카오톡이나 전화로 궁금한 점을 남겨 주세요." },
      { title: "가입한 보험을 함께 정리해요", description: "보험증권 사진만 있으면 됩니다. 없어도 확인하는 방법을 안내해 드려요." },
      { title: "필요한 부분만 말씀드려요", description: "결정은 충분히 고민하신 뒤에 하셔도 괜찮습니다." },
    ],
    note: "정리만 받아 보셔도 괜찮습니다.",
  },

  // ④ 김보험을 소개합니다
  about: {
    greeting:
      "안녕하세요, 보험설계사 김보험입니다. 8년 동안 고객분들의 보험을 정리하면서, 좋은 설계는 많이 넣는 것이 아니라 꼭 필요한 것만 남기는 것이라고 배웠습니다. 가입 이후에도 보험금 청구나 보장 점검이 필요할 때 언제든 연락하실 수 있는 설계사가 되겠습니다.",
    credentials: ["보험설계사 경력 8년", "생명보험·손해보험 설계사 자격", "변액보험 판매 자격"], // [TODO] 추가 자격
  },

  // ⑥ 푸터
  legal: {
    affiliation: "든든보험파트너스 소속 보험설계사 김보험",
    registrationNo: "설계사 등록번호: [TODO]",
    adReviewNo: "광고심의필: [TODO]",
    notice: "보험계약 체결 전 상품설명서와 약관을 반드시 확인하시기 바랍니다.",
    copyright: "© 2026 김보험",
  },
} as const;
