export type ResultSnippet = {
    id: string
    title: string
    snippet: string
}

export const snippets: Record<string, ResultSnippet> = {
    /* ================= 문제 해결 ================= */
    "problem-blog-publishing-automation": {
        id: "problem-blog-publishing-automation",
        title: "블로그 발행 업무를 자동화 시스템으로 전환",
        snippet: "수작업 기반 콘텐츠 발행 프로세스를 자동화",
    },
    "problem-internal-automation": {
        id: "problem-internal-automation",
        title: "사내 반복 업무를 자동화 프로그램으로 개선",
        snippet: "반복 작업을 줄이고 업무 효율을 개선",
    },
    "problem-admin-system-design": {
        id: "problem-admin-system-design",
        title: "업무 관리용 어드민 시스템 설계 및 구축",
        snippet: "엑셀/수작업 관리에서 웹 기반 시스템으로 전환",
    },
    "problem-requirement-change": {
        id: "problem-requirement-change",
        title: "잦은 요구사항 변경을 고려한 시스템 구조 설계",
        snippet: "변경에 강한 구조로 유지보수 비용 감소",
    },

    /* ================= 제품/서비스 ================= */
    "product-nogari": {
        id: "product-nogari",
        title: "노가리 – 공수 계산 & 커뮤니티 앱",
        snippet: "Flutter 기반 모바일 앱, 기획부터 배포까지 경험",
    },
    "product-heartnal": {
        id: "product-heartnal",
        title: "하트널 – 커플 추천 서비스",
        snippet: "첫 서비스 개발 경험, 사용자 피드백 기반 개선",
    },

    /* ================= 업무 시스템 ================= */
    "system-admin-core": {
        id: "system-admin-core",
        title: "고객 상담 관리 어드민 시스템",
        snippet: "Nuxt3 + Spring Boot 기반 내부 업무 시스템",
    },
    "system-sales-dashboard": {
        id: "system-sales-dashboard",
        title: "매출/성과 모니터링 대시보드",
        snippet: "팀/개인 단위 매출 집계 및 조회 시스템",
    },
    "system-redasset-renewal": {
        id: "system-redasset-renewal",
        title: "노후 홈페이지·어드민 시스템 전면 리뉴얼",
        snippet: "기존 구조를 분석하고 요구사항을 반영해 재구축",
    },
    "system-brand-square-website": {
        id: "system-brand-square-website",
        title: "기업 홈페이지 개발",
        snippet: "회사 소개·서비스 정보를 전달할 공식 홈페이지 개발",
    },
    "system-baruncc-landing-admin": {
        id: "system-baruncc-landing-admin",
        title: "신생 업체를 위한 랜딩페이지 + 어드민 시스템 구축",
        snippet: "요구사항 정의부터 운영 구조까지 설계",
    },

    /* ================= 기술 스택 ================= */
    "tech-frontend": {
        id: "tech-frontend",
        title: "Frontend 기술 스택",
        snippet: "Nuxt3, Vue, TypeScript 중심의 UI 설계",
    },
    "tech-backend": {
        id: "tech-backend",
        title: "Backend & Infra 기술 스택",
        snippet: "Spring Boot, NestJS, MySQL, Docker",
    },

    /* ================= 나에 대하여 ================= */
    "about-me": {
        id: "about-me",
        title: "개발자 최대희",
        snippet: "끝까지 만드는 경험을 중요하게 생각하는 풀스택 개발자",
    },
}

export const snippetList: ResultSnippet[] = Object.values(snippets)
