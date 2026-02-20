# Instagram Clone

인프런 강의([Next.js + React Query로 SNS 서비스 만들기](https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4?cid=332503))를 기반으로 만든 Instagram 클론 프로젝트입니다.

## 기술 스택

- Next.js 15 / React 19 / TypeScript
- styled-components
- TanStack Query (React Query)
- NextAuth.js v5 (Credentials Provider)
- MirageJS (Mock 백엔드)

## 실행 방법

```bash
npm install
npm run dev
```

아래 내용으로 `.env.local` 파일을 생성해야 합니다.

```env
AUTH_SECRET="your-secret-key-here"
AUTH_URL=http://localhost:3000
AUTH_TRUST_HOST=true
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_MODE=development
```

## 테스트 계정

| 이메일 | 비밀번호 |
|--------|----------|
| `test@test.com` | `1234` |
| `admin@admin.com` | `admin` |
| `user@user.com` | `user` |

로그인 폼 하단의 "테스트 로그인" 버튼을 누르면 자동으로 입력됩니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── (beforeLogin)/     # 로그인 전 페이지
│   ├── (afterLogin)/      # 로그인 후 페이지
│   │   ├── _components/   # 피드, 사이드바 등 공통 컴포넌트
│   │   ├── @modal/        # 패러렐 라우트 모달
│   │   ├── [username]/    # 프로필 페이지
│   │   ├── direct/        # 다이렉트 메시지
│   │   ├── explore/       # 탐색
│   │   ├── notifications/ # 알림
│   │   └── reels/         # 릴스
│   ├── api/               # API 라우트 및 쿼리 함수
│   ├── _styles/           # 테마, 글로벌 스타일
│   ├── _lib/              # 라이브러리 설정
│   ├── hook/              # 커스텀 훅
│   └── model/             # 타입 정의
└── mock/                  # MirageJS 서버
```

## 반응형 레이아웃

- 1024px 이상: 풀 사이드바 (220px) + 메인 콘텐츠 + 우측 추천 사용자
- 768px ~ 1023px: 아이콘 사이드바 (72px) + 메인 콘텐츠
- 767px 이하: 하단 탭바

## 구현 범위

현재 MirageJS로 목업 데이터를 제공하며 실제 백엔드 서버는 없습니다.

- 로그인/로그아웃 (NextAuth.js)
- 피드 목록
- 검색 (사이드 모달)
- 알림 페이지
- 다이렉트 메시지 목록
- 릴스 페이지
- 탐색 페이지
- 프로필 페이지

미구현 항목: 게시물 작성, 댓글, 팔로우, 실시간 채팅, 스토리

## 개발자

**Hebi10** | [GitHub](https://github.com/hebi10)
