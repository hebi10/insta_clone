
# Copilot 사용 가이드 (Instagram Clone, Next.js)

## 아키텍처 및 핵심 패턴
- **App Router**: Next.js 13+ App Router(`src/app/`)를 사용합니다. `(afterLogin)`, `(beforeLogin)`과 같은 라우트 그룹, `@modal`, `@create` 등 패러렐 라우트로 레이아웃/모달을 구성합니다.
- **인증**: NextAuth.js v5(Credentials Provider) 기반. 세션은 props로 전달하며, 보호 라우트는 page/layout 단에서 처리합니다.
- **상태 관리**: 모든 서버 상태는 TanStack Query(React Query)로 관리합니다. API 데이터는 `useQuery`/`useMutation`을 사용하세요.
- **스타일링**: 모든 UI는 `styled-components`와 커스텀 테마, 반응형 브레이크포인트를 사용합니다. `isSearchMode` 등 조건부 스타일 props는 DOM에 전달되지 않도록 `shouldForwardProp`을 활용하세요.
- **Mock 백엔드**: MirageJS로 개발 환경에서 API를 모킹합니다. `src/mock/server.ts`와 `_app` 또는 providers의 `useEffect` 참고.

## 라우팅 규칙
- **패러렐/인터셉팅 라우트**: 모달/오버레이는 `@modal`, `@create`, `(.)create` 폴더를 사용. 상위 layout에서 `create`, `modal` 등 named prop으로 받아야 렌더링됩니다.
- **페이지 구조**: 주요 기능은 `src/app/(afterLogin)/`(피드, 탐색, 릴스, 알림, 다이렉트, 만들기 등), 인증/온보딩은 `(beforeLogin)`에 위치합니다.
- **네비게이션**: 사이드바/모바일 탭바는 `_components/leftSide.tsx`에 있습니다. `usePathname`으로 active 상태를 관리하며, 현재 경로로의 이동은 방지합니다.

## 개발 워크플로우
- **개발 서버 실행**: `npm run dev` (`.env.local` 필요)
- **빌드/운영**: `npm run build` 후 `npm start`
- **테스트 계정**: README의 계정 정보로 빠른 로그인 가능
- **Mock 서버**: 개발 환경에서 자동 실행, 별도 설정 불필요

## 프로젝트 특화 패턴
- **반응형 UI**: 브레이크포인트/레이아웃 로직은 `src/app/_styles/theme.ts`에 정의, styled-components에서 활용
- **API 레이어**: 모든 API 호출은 `src/app/api/` 및 `src/app/api/query/`에 위치. 데이터 패칭/변경은 이곳을 통해 진행
- **타입스크립트 모델**: User 등 타입은 `src/app/model/`에 위치
- **컴포넌트 구조**: 공용 UI는 `_components/`, 기능별 UI는 각 라우트 폴더에 위치

## 예시
- **패러렐 라우트 Layout**:
  ```tsx
  // src/app/(afterLogin)/layout.tsx
  export default function Layout({ children, create, modal }) {
    return <>{children}{create}{modal}</>;
  }
  ```
- **Styled Component Prop Filtering**:
  ```ts
  const NavItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSearchMode',
  })<{ isSearchMode?: boolean }>`...`;
  ```

## 주요 파일/디렉터리
- `src/app/(afterLogin)/_components/leftSide.tsx` — 사이드바/네비게이션
- `src/app/(afterLogin)/@modal/` — 모달 오버레이(패러렐 라우트)
- `src/app/(afterLogin)/@create/` — 게시물 작성 오버레이(패러렐 라우트)
- `src/app/api/` — API 엔드포인트/쿼리 함수
- `src/mock/server.ts` — MirageJS 모킹 서버
- `src/app/_styles/` — 테마, 글로벌 스타일, 브레이크포인트

---
자세한 내용은 README.md 참고. 새로운 패러렐/인터셉팅 라우트를 추가할 경우, 반드시 상위 layout에서 해당 prop을 받아야 합니다.
