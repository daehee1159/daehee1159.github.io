// app/data/portfolio.ts
export type TabKey = "all" | "problem" | "product" | "system" | "tech" | "about"

export const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: "전체" },
    { key: "problem", label: "문제 해결" },
    { key: "product", label: "제품/서비스" },
    { key: "system", label: "업무 시스템" },
    { key: "tech", label: "기술 스택" },
    { key: "about", label: "나에 대하여" },
]

export type DetailBlock =
    | { type: "paragraph"; text: string }
    | { type: "bullets"; items: string[] }
    | { type: "image"; src: string; alt?: string; caption?: string }
    | { type: "gallery"; images: { src: string; alt?: string }[] }
    | { type: "code"; lang?: string; code: string }
    | { type: "link"; label: string; href: string }

export type Result = {
    id: string            // 라우팅 slug로 사용
    tab: Exclude<TabKey, "all">
    content: string
    keywords?: string[]
    bullets?: string[]
    // 상세 다양성 대응
    // blocks?: DetailBlock[]
}

export const results: Result[] = [
    /* ================= 문제 해결 ================= */
    {
        id: "problem-blog-publishing-automation",
        tab: "problem",
        content:
            "블로그 원고 작성부터 이미지 처리, 로그인, 업로드까지 반복되던 수작업을 자동화했습니다. ChatGPT/Claude API를 활용해 콘텐츠를 생성하고, Electron 기반 GUI 프로그램으로 비개발자도 사용할 수 있도록 구성했습니다.",
        keywords: ["개발자 최대희 포트폴리오","automation", "electron", "vue", "chatgpt", "claude", "blog", "workflow"],
        bullets: [
            "ChatGPT/Claude API 기반 원고 생성 파이프라인 구성",
            "Electron GUI로 비개발자 사용성 확보",
            "발행 흐름을 시스템 관점으로 설계(입력→생성→검증→업로드)",
        ],
        // blocks: [
        //     { type: "paragraph", text: "전체 흐름은 입력 → 생성 → 검증 → 업로드입니다." },
        //     { type: "image", src: "/images/product/test.jpg", alt: "자동화 흐름", caption: "발행 파이프라인" },
        //     { type: "bullets", items: ["예외 팝업 처리", "임시저장 안정화", "재시도 로직"] },
        // ]
    },
    {
        id: "problem-internal-automation",
        tab: "problem",
        content:
            "사내에서 반복되던 크롤링 및 게시 업무를 Python과 Electron 기반 자동화 프로그램으로 전환했습니다. 단순 스크립트가 아닌, 실제 운영 가능한 도구 형태로 제공했습니다.",
        keywords: ["개발자 최대희 포트폴리오","python", "automation", "crawling", "electron", "workflow"],
        bullets: [
            "반복 업무를 자동화 도구로 전환해 소요 시간을 절감",
            "운영 환경에서 실행 가능한 형태로 제공(도구화)",
            "예외 상황을 고려한 안정적 실행 흐름 구성",
        ],
    },
    {
        id: "problem-admin-system-design",
        tab: "problem",
        content:
            "사내 업무 관리를 위해 관리자 페이지와 API 서버를 처음부터 설계·구현했습니다. 사용자 흐름, 권한, 데이터 구조를 고려해 실사용자를 위한 시스템을 만들었습니다.",
        keywords: ["개발자 최대희 포트폴리오","admin", "nuxt", "api", "system-design", "crud", "backoffice"],
        bullets: [
            "관리자 UI + API 서버를 함께 설계·구현",
            "데이터 구조/권한/상태 흐름을 고려한 시스템화",
            "실사용자의 업무 흐름을 기준으로 기능 우선순위 정리",
        ],
    },
    {
        id: "problem-requirement-change",
        tab: "problem",
        content:
            "업무 특성상 요구사항 변경이 잦았기 때문에, 상태 enum과 부분 수정(PATCH) 중심 구조를 도입했습니다. 그 결과 기능 추가 시 수정 범위를 최소화할 수 있었습니다.",
        keywords: ["개발자 최대희 포트폴리오","architecture", "patch", "enum", "maintainability", "refactor"],
        bullets: [
            "상태(enum) 기반으로 변경에 강한 구조 지향",
            "부분 수정(PATCH) 방식으로 변경 범위 최소화",
            "요구사항 변경에도 확장 가능한 설계 우선",
        ],
    },

    /* ================= 제품/서비스 ================= */
    {
        id: "product-nogari",
        tab: "product",
        content:
            "현장 근로자들의 공수 계산 불편을 해결하기 위해 기획된 앱으로, 캘린더 기반 공수 관리와 커뮤니티 기능을 함께 제공했습니다.",
        keywords: ["개발자 최대희 포트폴리오","flutter", "spring-boot", "mybatis", "aws", "rds", "community", "mobile"],
        bullets: [
            "커뮤니티 기능(게시판/검색/페이징) 중심 설계",
            "AWS EC2/RDS 기반 배포 환경 구성(Docker)",
            "외부 API 연동(뉴스/휴일 등) 경험",
        ],
    },
    {
        id: "product-heartnal",
        tab: "product",
        content:
            "Flutter로 개발한 커플 추천 앱으로, 서비스 구조와 사용자 흐름을 처음부터 끝까지 경험했습니다.",
        keywords: ["개발자 최대희 포트폴리오","flutter", "spring-boot", "jwt", "firebase", "fcm", "mobile", "product"],
        bullets: [
            "JWT 인증/보안 흐름 설계(Spring Security)",
            "FCM 푸시 전송 기능 구현",
            "AWS 기반 운영 환경 구성 및 기능 개선 경험",
        ],
    },

    /* ================= 업무 시스템 ================= */
    {
        id: "system-admin-core",
        tab: "system",
        content:
            "상담 상태 관리, 담당자 배정, 히스토리 기록이 필요한 내부 시스템을 설계·구현했습니다. 상태 enum과 이력 테이블을 중심으로 구조를 잡았습니다.",
        keywords: ["개발자 최대희 포트폴리오","admin", "nuxt", "spring-boot", "workflow", "status", "history"],
        bullets: [
            "상태(enum) 중심 상담 흐름 설계",
            "담당자 배정/변경 이력 관리 구조 구성",
            "업무 흐름 중심 UI/데이터 구조화",
        ],
    },
    {
        id: "system-sales-dashboard",
        tab: "system",
        content:
            "기간/조건별 집계가 필요한 대시보드를 구현하며, 데이터 구조와 조회 성능을 함께 고려했습니다.",
        keywords: ["개발자 최대희 포트폴리오","dashboard", "reporting", "query", "performance", "admin"],
        bullets: [
            "기간/조건별 집계 요구를 반영한 구조 설계",
            "조회 성능을 고려한 데이터 접근 방식 정리",
            "현업 의사결정에 필요한 지표 중심 UI 구성",
        ],
    },
    {
        id: "system-redasset-renewal",
        tab: "system",
        content:
            "기존 홈페이지와 어드민 시스템이 오래되어 유지보수가 어려운 상태였습니다. 전체 구조를 재설계하고, 새로운 홈페이지와 어드민 페이지를 구축해 운영과 확장이 가능하도록 개선했습니다.",
        keywords: ["개발자 최대희 포트폴리오","renewal", "legacy", "admin", "nuxt", "api", "maintenance"],
        bullets: [
            "노후 구조를 분석하고 운영 관점으로 재설계",
            "홈페이지 + 어드민 + API를 통합된 시스템으로 구성",
            "요구사항 반영 및 유지보수성 개선에 집중",
        ],
    },
    {
        id: "system-brand-square-website",
        tab: "system",
        content:
            "브랜드스퀘어는 외부에 회사와 서비스를 소개할 공식 홈페이지가 없는 상태였습니다. 회사의 정체성과 제공 서비스를 정리하고, 유지보수가 가능한 구조의 홈페이지를 처음부터 설계·구현했습니다.",
        keywords: ["개발자 최대희 포트폴리오","website", "branding", "nuxt", "frontend", "architecture"],
        bullets: [
            "무(無) 상태에서 공식 홈페이지를 처음부터 구축",
            "서비스/브랜드 메시지를 구조화해 전달력 강화",
            "추후 수정/확장이 가능한 형태로 구현",
        ],
    },
    {
        id: "system-baruncc-landing-admin",
        tab: "system",
        content:
            "신생 업체의 요구사항을 정리해 랜딩페이지와 어드민 시스템을 구축했습니다. 초기 운영을 고려해 관리 기능과 API를 함께 설계했습니다.",
        keywords: ["개발자 최대희 포트폴리오","landing", "admin", "nuxt", "api", "system", "startup"],
        bullets: [
            "요구사항 정리부터 화면/기능 구조 설계",
            "초기 운영을 고려한 관리 기능 구성",
            "랜딩 + 어드민 + API를 한 세트로 구축",
        ],
    },

    /* ================= 기술 스택 ================= */
    {
        id: "tech-frontend",
        tab: "tech",
        content:
            "CSR/SSR 환경을 모두 경험했고, 상태 흐름과 컴포넌트 책임 분리를 중요하게 생각합니다.",
        keywords: ["개발자 최대희 포트폴리오","nuxt", "vue", "typescript", "csr", "ssr", "ui"],
        bullets: [
            "CSR/SSR 모두 경험, 요구에 맞게 선택",
            "컴포넌트 책임/상태 흐름 중심 설계",
            "미세한 UX(여백/밀도/인터랙션) 품질을 중시",
        ],
    },
    {
        id: "tech-backend",
        tab: "tech",
        content:
            "단순 CRUD를 넘어서 도메인 중심 API 설계를 지향하며, Docker 기반 배포 환경을 구성했습니다.",
        keywords: ["개발자 최대희 포트폴리오","spring-boot", "nest", "mysql", "docker", "aws", "api"],
        bullets: [
            "도메인 중심 API 설계 지향(확장/권한/상태)",
            "Docker 기반 배포/운영 경험",
            "MySQL 스키마 설계 및 운영 고려",
        ],
    },

    /* ================= 나에 대하여 ================= */
    {
        id: "about-me",
        tab: "about",
        content:
            "비전공으로 개발을 시작해 서비스 운영, 내부 시스템, 자동화까지 다양한 경험을 쌓았습니다. 실무에서 바로 쓰일 수 있는 개발자를 지향합니다.",
        keywords: ["개발자 최대희 포트폴리오","about", "fullstack", "ownership", "delivery"],
        bullets: [
            "처음부터 끝까지 ‘완성’과 ‘운영’까지 경험",
            "시스템 관점(흐름/상태/권한/유지보수)으로 접근",
            "협업 시 문서화/정리/재현 가능한 형태를 지향",
        ],
    },
]

