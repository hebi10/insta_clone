# Instagram Clone

인프런 강의 [Next.js + React Query로 SNS 서비스 만들기](https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4?cid=332503)를 수강하며 만든 Instagram 클론 프로젝트입니다.
강의 내용을 따라가면서 Next.js App Router, 서버/클라이언트 컴포넌트 분리, React Query를 이용한 서버 상태 관리 등을 직접 적용해봤습니다.

---

## 기술 스택

| 분류 | 사용 기술 |
|------|-----------|
| 프레임워크 | Next.js 15, React 19, TypeScript |
| 스타일링 | styled-components (ThemeProvider, SSR 레지스트리 적용) |
| 서버 상태 관리 | TanStack Query v5 |
| 인증 | NextAuth.js v5, JWT 세션, Credentials Provider |
| 데모 데이터 | Next.js API Routes + 고정 목업 데이터 |

---

## 실행 방법

Node.js 18 이상이 필요합니다.

```bash
npm install
npm run dev
```

루트에 `.env.local` 파일을 생성한 뒤 아래 값을 채워넣어야 합니다.

```env
AUTH_SECRET="임의의 랜덤 문자열"
AUTH_URL=http://localhost:3000
AUTH_TRUST_HOST=true
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

`AUTH_SECRET`은 `openssl rand -base64 32` 명령어로 생성할 수 있습니다.

---

## 테스트 계정

별도 회원가입 없이 아래 계정으로 바로 로그인할 수 있습니다.
로그인 폼 하단의 "테스트 로그인" 버튼을 누르면 첫 번째 계정이 자동으로 입력됩니다.

| 이메일 | 비밀번호 |
|--------|----------|
| `test@test.com` | `1234` |
| `admin@admin.com` | `admin` |
| `user@user.com` | `user` |

---

## 주요 구현 내용

### 인증

NextAuth.js v5를 사용했으며, DB 없이 동작하도록 `authorize` 함수 내에 Mock 유저 목록을 직접 정의했습니다.
세션은 JWT 전략을 사용하고, `middleware.ts`에서 보호된 라우트 접근을 처리합니다.

### 레이아웃 구조

`(afterLogin)` 그룹 레이아웃에서 사이드바를 전역으로 렌더링합니다.
사이드바는 화면 크기에 따라 세 가지 형태로 전환됩니다.

- **1024px 이상**: 텍스트 포함 풀 사이드바 (220px)
- **768px ~ 1023px**: 아이콘만 표시되는 축소 사이드바 (72px)
- **767px 이하**: 사이드바 대신 하단 고정 탭바

검색 버튼을 누르면 사이드바가 72px로 줄어들고 우측에 검색 모달이 슬라이드로 열립니다.
이 동작은 `@modal/search` 패러렐 라우트로 처리했습니다.

### 데이터 패칭

서버와의 통신은 모두 TanStack Query를 통해 관리합니다.
`src/app/api/query/` 하위에 엔드포인트별 쿼리 함수를 분리했고,
`src/app/api/mock-data.ts`의 고정 목업 데이터를 Next.js API Routes가 응답합니다.

### 스타일링

styled-components의 SSR 지원을 위해 `_lib/registry.tsx`에 서버사이드 스타일 주입 처리를 해두었습니다.
컬러, 타이포그래피, 스페이싱, 브레이크포인트는 `_styles/theme.ts`에서 토큰으로 관리하며 ThemeProvider를 통해 전달합니다.

---

## 프로젝트 구조

```
src/
├── app/
│   ├── (beforeLogin)/       # 로그인 전 페이지 (로그인, 회원가입)
│   ├── (afterLogin)/        # 로그인 후 페이지
│   │   ├── layout.tsx       # 사이드바 + 검색모달 포함 공통 레이아웃
│   │   ├── _components/     # 피드, 사이드바, 추천 사용자 컴포넌트
│   │   ├── @modal/          # 패러렐 라우트 (검색 모달, 게시물 모달)
│   │   ├── (home)/          # 메인 피드
│   │   ├── [username]/      # 프로필 페이지
│   │   ├── direct/          # 다이렉트 메시지
│   │   ├── explore/         # 탐색 (그리드)
│   │   ├── notifications/   # 알림
│   │   └── reels/           # 릴스
│   ├── api/
│   │   ├── auth/            # NextAuth 핸들러
│   │   ├── query/           # 클라이언트에서 사용하는 fetch 함수 모음
│   │   └── mock-data.ts     # 데모용 고정 목업 데이터
│   ├── _styles/             # theme.ts, global.style.ts
│   ├── _lib/                # React Query Provider, styled-components SSR 레지스트리
│   ├── hook/                # useInput, useResponsive 커스텀 훅
│   └── model/               # User 등 타입 정의
```

---

## 구현 현황

현재 실제 백엔드 없이 Next.js API Routes의 고정 목업 데이터로 동작합니다.

**구현됨**
- 로그인 / 로그아웃
- 메인 피드 (게시물 목록, 좋아요 수, 댓글 수)
- 사이드 검색 모달
- 알림 목록
- 다이렉트 메시지 목록 및 채팅방
- 릴스 목록
- 탐색 그리드
- 프로필 페이지

**미구현**
- 게시물 작성 및 이미지 업로드
- 댓글 작성 / 삭제
- 팔로우 / 팔로워
- 실시간 채팅
- 스토리

---

## 개발자

**Hebi10** | [GitHub](https://github.com/hebi10)
