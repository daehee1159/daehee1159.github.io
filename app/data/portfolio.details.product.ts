import type { DetailBlock } from "~/data/portfolio"

export const productDetailById: Record<string, DetailBlock[]> = {
    /* =========================================================
     * 노가리
     * ========================================================= */
        "product-nogari": [
            {
                type: "paragraph",
                text:
                    "‘노가리’는 현장 근로자들의 공수 계산 불편을 해결하기 위해 만든 Flutter 기반 모바일 앱입니다.\n" +
                    "특히 Android/iOS 모두 지원하는 공수 계산 앱이 부족했고, iOS에는 선택지가 더 적다는 점을 확인해 크로스플랫폼으로 제작했습니다.",
            },
            {
                type: "bullets",
                items: [
                    "대상: 현장 근로자(공수 관리 필요)",
                    "문제: 공수 기록/정리가 메모·대화방·엑셀에 흩어져 관리 피로도↑",
                    "목표: 공수 달력 + 커뮤니티를 한 앱에서 제공해 ‘기록→공유→탐색’까지 연결",
                ],
            },
            {
                type: "gallery",
                images: [
                    { src: "/images/product/nogari_screen_01.png", alt: "노가리 앱 스크린샷 1" },
                    { src: "/images/product/nogari_screen_02.png", alt: "노가리 앱 스크린샷 2" },
                    { src: "/images/product/nogari_screen_03.png", alt: "노가리 앱 스크린샷 3" },
                    { src: "/images/product/nogari_screen_04.png", alt: "노가리 앱 스크린샷 4" },
                    { src: "/images/product/nogari_screen_05.png", alt: "노가리 앱 스크린샷 5" },
                ],
            },
            {
                type: "paragraph",
                text:
                    "기능은 ‘공수 계산 달력’과 ‘커뮤니티’를 핵심으로 두고, 현장 사용성에 맞춘 부가 기능을 함께 제공했습니다.\n" +
                    "커뮤니티에는 게시판/검색/페이징을 적용해 정보가 축적되고 다시 찾기 쉬운 구조로 설계했습니다.",
            },
            {
                type: "bullets",
                items: [
                    "공수 계산 달력: 날짜 단위 기록/조회에 최적화",
                    "커뮤니티: 게시판/검색/페이징 기반으로 정보 축적 및 재탐색 가능",
                    "업체 리뷰, 공학용 계산기 등 현장 니즈 기반 부가 기능 포함",
                ],
            },
            {
                type: "paragraph",
                text:
                    "제가 담당한 업무는 앱 기획/디자인부터 백엔드 API 서버·DB 설계·배포, 그리고 모바일 앱 개발까지 전체 사이클이었습니다.\n" +
                    "‘동작하는 앱’에서 끝나지 않고 실제 서비스 운영을 전제로 인증/이미지/배포 환경까지 함께 구성했습니다.",
            },
            {
                type: "bullets",
                items: [
                    "전체 앱 기획 및 디자인",
                    "백엔드 API 서버 개발 + DB 설계 + 배포 환경 구성",
                    "Flutter 모바일 앱 개발 및 상태 관리 구조 설계",
                ],
            },
            {
                type: "paragraph",
                text:
                    "기술 스택은 Spring Boot(MyBatis) 기반의 API 서버와 MySQL, AWS EC2/RDS 운영 환경으로 구성했고,\n" +
                    "이미지는 Firebase를 활용해 이미지 서버 역할을 분리했습니다. 인증은 Spring Security 기반 JWT로 구현했습니다.",
            },
            {
                type: "bullets",
                items: [
                    "Backend: Spring Boot + MyBatis, Spring Security(JWT)",
                    "DB/Infra: MySQL, AWS EC2 + RDS",
                    "Image: Firebase 기반 이미지 서버 구성",
                    "App: Flutter + Provider 상태 관리, MVVM 적용 경험",
                ],
            },
            {
                type: "paragraph",
                text:
                    "또한 소셜 로그인과 외부 API 연동 경험을 폭넓게 쌓았습니다.\n" +
                    "Kakao/Apple 소셜 로그인, 뉴스/휴일 API, 광고/배너 등 다양한 Third-party 연동을 통해 실제 서비스 수준의 통합 경험을 만들었습니다.",
            },
            {
                type: "bullets",
                items: [
                    "소셜 로그인: Kakao, Apple",
                    "외부 데이터: 네이버 뉴스, 공공데이터포털 휴일 API 등",
                    "수익화/운영 요소: 앱 배너/전면 광고(Google) 등 연동",
                ],
            },
            {
                type: "paragraph",
                text:
                    "두 번째 창업 프로젝트로서, 이전 프로젝트 대비 Flutter 구조화(위젯 분리/레이어 분리)를 더 적극적으로 적용했습니다.\n" +
                    "또한 Flutter 버전 업그레이드 과정에서 패키지 마이그레이션을 경험하면서, 운영 중인 앱을 ‘유지보수 가능한 코드’로 정리하는 감각을 키웠습니다.",
            },
            {
                type: "bullets",
                items: [
                    "회고: 위젯 단위 분리와 레이어링으로 유지보수성 강화",
                    "마이그레이션 경험: Flutter 버전 업에 따른 패키지/코드 마이그레이션 대응",
                    "패턴 적용: MVVM 적용을 통한 역할 분리 경험",
                ],
            },
        ],

    /* =========================================================
     * 하트널
     * ========================================================= */
    "product-heartnal": [
        {
            type: "paragraph",
            text:
                "‘하트널(Heartnal)’은 커플들이 데이트할 때 반복적으로 겪는 고민(오늘 뭐먹지? 오늘 뭐하지?)을 줄이기 위해 만든 Flutter 기반 커플 앱입니다.\n" +
                "서로의 선택을 통해 결정을 도와주는 기능과, 커플 간 기록/공유(캘린더·다이어리·D-Day), 그리고 ‘오늘의 한마디’처럼 관계 유지에 도움이 되는 기능을 함께 제공했습니다. (현재 운영 X)",
        },
        {
            type: "bullets",
            items: [
                "대상: 커플(데이트 의사결정/일정 공유/기록 니즈)",
                "문제: 선택 피로(결정이 어려움) + 일정/기록이 여러 앱으로 분산",
                "목표: ‘결정 → 공유 → 기록’ 흐름을 한 앱에서 해결",
            ],
        },
        {
            type: "gallery",
            images: [
                { src: "/images/product/heartnal_screen_01.png", alt: "하트널 스크린샷 1" },
                { src: "/images/product/heartnal_screen_02.png", alt: "하트널 스크린샷 2" },
                { src: "/images/product/heartnal_screen_03.png", alt: "하트널 스크린샷 3" },
                { src: "/images/product/heartnal_screen_04.png", alt: "하트널 스크린샷 4" },
                { src: "/images/product/heartnal_screen_05.png", alt: "하트널 스크린샷 5" },
                { src: "/images/product/heartnal_screen_06.png", alt: "하트널 스크린샷 6" },
                { src: "/images/product/heartnal_screen_07.png", alt: "하트널 스크린샷 7" },
                { src: "/images/product/heartnal_screen_08.png", alt: "하트널 스크린샷 8" },
            ],
        },
        {
            type: "paragraph",
            text:
                "핵심 기능은 ‘결정 도우미’와 ‘커플 데이터 동기화’였습니다.\n" +
                "커플이 함께 사용하는 서비스 특성상, 두 사용자 간 연동과 데이터 일관성이 중요했고 이를 기준으로 기능을 설계했습니다.",
        },
        {
            type: "bullets",
            items: [
                "결정 도우미: ‘오늘 뭐먹지? / 오늘 뭐하지?’ 서로의 선택으로 결정을 좁혀주는 기능",
                "오늘의 한마디: 하루 1회 메시지 전달로 관계 유지 기능 제공",
                "커플 연동 캘린더: 일정 공유 및 동기화",
                "여성 생리주기 캘린더: 연인에게 공유 가능한 형태로 설계",
                "커플 다이어리 / D-Day: 기록과 기념일 관리",
            ],
        },
        {
            type: "paragraph",
            text:
                "제가 담당한 업무는 기획/디자인부터 백엔드 API 서버·DB 설계·배포, 그리고 Flutter 앱 개발까지 전체 사이클이었습니다.\n" +
                "첫 창업 프로젝트이자 모바일 앱 개발 첫 경험이었기 때문에, 기능 구현뿐 아니라 ‘서비스를 구성하는 모든 역할(기획/디자인/개발/운영)’을 끝까지 경험하는 데 의미가 컸습니다.",
        },
        {
            type: "bullets",
            items: [
                "전체적인 앱 기획 및 디자인",
                "백엔드 REST API 서버 개발 + DB 설계 + 배포 환경 구성",
                "Flutter 모바일 앱 개발 및 상태 관리 구조 적용(Provider)",
            ],
        },
        {
            type: "paragraph",
            text:
                "백엔드는 Spring Boot + MyBatis 기반으로 REST API 서버를 구성했고, 인증은 Spring Security + JWT로 설계했습니다.\n" +
                "푸시(FCM)와 소셜 로그인(Kakao/Apple) 같은 Third-party 연동까지 포함해 실제 서비스 수준의 통합 경험을 만들었습니다.",
        },
        {
            type: "bullets",
            items: [
                "Backend: Spring Boot + MyBatis, Spring Security(JWT)",
                "Push: FCM 메시지 전송(Spring Boot)",
                "DB/Infra: MySQL, AWS EC2 + RDS",
                "소셜 로그인: Kakao, Apple",
                "광고/수익화: 앱 배너/전면 광고(Google)",
                "App: Flutter + Provider 패턴 기반 상태 관리",
                "기타: Node.js 기반 스케줄러 구성(반복 작업/알림 등)",
            ],
        },
        {
            type: "paragraph",
            text:
                "특히 도메인 로직 측면에서는 ‘여성 생리주기’, ‘커플 D-Day’처럼 날짜 기반 계산이 들어가는 기능을 직접 구현하면서,\n" +
                "단순 화면 개발이 아닌 실제 서비스 로직 설계 경험을 쌓을 수 있었습니다.",
        },
        {
            type: "bullets",
            items: [
                "날짜/주기 로직: 생리주기/기념일 계산 등 도메인 로직 구현 경험",
                "상태 관리: Provider 패턴을 적용하며 화면-상태-API 흐름을 구조화",
                "통합 경험: 인증/푸시/소셜로그인/광고 등 서비스 필수 요소를 끝까지 연결",
            ],
        },
        {
            type: "paragraph",
            text:
                "회고로는, 처음 모바일 앱을 끝까지 만들어보며 시행착오를 크게 겪었지만 그 과정에서 구조화와 상태관리의 중요성을 체감했습니다.\n" +
                "결과적으로 ‘기능 구현’보다 ‘운영 가능한 제품 형태’로 만들기 위한 요소(인증/푸시/배포/연동)를 경험한 것이 가장 큰 수확이었습니다.",
        },
    ],
}
