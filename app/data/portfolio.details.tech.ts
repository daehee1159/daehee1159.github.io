import type { DetailBlock } from "~/data/portfolio"

export const techDetailById: Record<string, DetailBlock[]> = {
    "tech-frontend": [
        {
            type: "image",
            src: "/images/tech/nuxt.png",
            alt: "Nuxt Vue",
        },
        {
            type: "paragraph",
            text:
                "Nuxt(Vue)를 사용해 CSR/SSR 환경에서 화면 흐름과 상태 관리를 고려한 웹 프론트엔드를 개발했습니다.",
        },
        {
            type: "image",
            src: "/images/tech/typescript.png",
            alt: "TypeScript",
        },
        {
            type: "paragraph",
            text:
                "TypeScript를 기반으로 컴포넌트 인터페이스와 데이터 구조를 명확히 정의하며 개발했습니다.",
        },
        {
            type: "image",
            src: "/images/tech/flutter.png",
            alt: "Flutter",
        },
        {
            type: "paragraph",
            text:
                "Flutter를 사용해 모바일 앱을 개발했으며, 인증·API 연동까지 포함한 서비스 흐름을 구현했습니다.",
        },
        {
            type: "image",
            src: "/images/tech/electronjs.jpg",
            alt: "ElectronJS",
        },
        {
            type: "paragraph",
            text:
                "Electron을 사용해 데스크톱 환경에서 동작하는 클라이언트 애플리케이션을 개발했습니다.",
        },
    ],
    "tech-backend": [
        {
            type: "image",
            src: "/images/tech/springboot.png",
            alt: "Spring Boot",
        },
        {
            type: "paragraph",
            text:
                "Spring Boot 기반으로 도메인 중심 API를 설계하고, 상태·권한·이력을 고려한 백엔드를 구현했습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/nest.png",
            alt: "NestJS",
        },
        {
            type: "paragraph",
            text:
                "NestJS 환경에서도 동일한 기준으로 도메인 구조와 API 설계를 적용하며 개발하며 TypeORM으로 구현하고 있습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/python.jpg",
            alt: "Python",
        },
        {
            type: "paragraph",
            text:
                "파이썬을 통해 스크래핑 등 업무 자동화에 필요한 개발을 진행했습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/mysql.png",
            alt: "MySQL",
        },
        {
            type: "paragraph",
            text:
                "MySQL을 사용해 서비스 데이터 스키마를 설계하고, 조회 패턴과 운영을 고려한 구조로 관리했습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/aws.png",
            alt: "AWS EC2",
        },
        {
            type: "paragraph",
            text:
                "AWS EC2 환경에서 API 서버를 운영하며, 배포·환경 설정·리소스 관리를 직접 구성했습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/aws.png",
            alt: "AWS RDS",
        },
        {
            type: "paragraph",
            text:
                "AWS RDS(MySQL)를 사용해 데이터베이스를 운영하며, 백업·접근 제어·운영 안정성을 고려했습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/docker.png",
            alt: "Docker",
        },
        {
            type: "paragraph",
            text:
                "Docker 기반으로 개발·배포 환경을 구성해 서버 환경 차이를 최소화하고 운영 효율을 높였습니다.\n\n",
        },
        {
            type: "image",
            src: "/images/tech/firebase.png",
            alt: "Firebase",
        },
        {
            type: "paragraph",
            text:
                "Firebase를 사용해 이미지서버, 인증 및 푸시 알림(FCM) 기능을 서비스에 연동했습니다.",
        },
    ],
}



