# 📸 Instagram Clone

현대적인 웹 기술 스택을 사용하여 구현한 **반응형 Instagram 클론** 프로젝트입니다. Next.js 15, TypeScript, TanStack Query, styled-components를 기반으로 Instagram의 핵심 기능들을 재현했습니다.

## ✨ 주요 특징

### 🏗️ 기술 스택
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: styled-components, 반응형 디자인
- **State Management**: TanStack Query (React Query)
- **Authentication**: NextAuth.js v5 (Credentials Provider)
- **Mock Backend**: MirageJS
- **Icons**: React Icons

### 📱 반응형 디자인
- **데스크톱 (1024px+)**: 풀 사이드바 + 메인 콘텐츠 + 우측 사이드바
- **태블릿 (768px-1023px)**: 아이콘 사이드바 + 메인 콘텐츠
- **모바일 (767px 이하)**: 상단 헤더 + 메인 콘텐츠 + 하단 탭바

### 🔧 구현된 기능
- 🔐 **사용자 인증**: 로그인/로그아웃
- 📋 **피드**: 게시물 목록, 좋아요, 댓글 카운트
- 🔍 **검색**: 사용자 및 게시물 검색
- 🔔 **알림**: 실시간 알림 시스템
- 💬 **메시지**: 채팅 인박스
- 🎬 **릴스**: 릴스 페이지
- 🌟 **탐색**: 그리드 레이아웃의 콘텐츠 탐색
- 👤 **프로필**: 사용자 프로필 페이지

## 🚀 설치 및 실행

### 필수 조건
- Node.js 18+ 
- npm 또는 yarn

### 1. 프로젝트 클론
```bash
git clone https://github.com/hebi10/insta_clone.git
cd insta_clone
```

### 2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가하세요:
```env
AUTH_SECRET="your-secret-key-here"
AUTH_URL=http://localhost:3000
AUTH_TRUST_HOST=true
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_MODE=development
```

### 4. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

### 5. 프로덕션 빌드
```bash
npm run build
npm start
# 또는
yarn build
yarn start
```

애플리케이션이 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 🔑 테스트 계정

프로젝트에는 사전 설정된 테스트 계정들이 있습니다:

| 이메일 | 비밀번호 | 역할 |
|--------|----------|------|
| `test@test.com` | `1234` | 기본 사용자 |
| `admin@admin.com` | `admin` | 관리자 |
| `user@user.com` | `user` | 일반 사용자 |

💡 **팁**: 로그인 폼에서 "테스트 로그인" 버튼을 클릭하면 자동으로 테스트 계정 정보가 입력됩니다.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── (beforeLogin)/          # 로그인 전 페이지들
│   │   ├── _components/        # 로그인 관련 컴포넌트
│   │   └── accounts/           # 계정 관련 페이지
│   ├── (afterLogin)/           # 로그인 후 페이지들
│   │   ├── _components/        # 공통 컴포넌트 (피드, 사이드바 등)
│   │   ├── @modal/             # 모달 관련 컴포넌트
│   │   ├── [username]/         # 사용자 프로필 페이지
│   │   ├── create/             # 게시물 작성
│   │   ├── direct/             # 메시지 관련
│   │   ├── explore/            # 탐색 페이지
│   │   ├── notifications/      # 알림 페이지
│   │   ├── reels/              # 릴스 페이지
│   │   └── search/             # 검색 기능
│   ├── api/                    # API 라우트
│   │   ├── auth/               # NextAuth 설정
│   │   └── query/              # API 쿼리 함수들
│   ├── _components/            # 전역 컴포넌트
│   ├── _lib/                   # 라이브러리 설정
│   ├── _styles/                # 글로벌 스타일
│   ├── hook/                   # 커스텀 훅
│   └── model/                  # TypeScript 타입 정의
├── mock/                       # MirageJS 모킹 서버
└── public/                     # 정적 파일들
```

## 🎨 주요 컴포넌트

### 인증 시스템
```typescript
// NextAuth.js를 사용한 인증
const result = await signIn('credentials', {
  username: email,
  password: password,
  redirect: false
});
```

### 피드 컴포넌트
```typescript
// React Query를 사용한 데이터 페칭
const { data: posts = [] } = useQuery<Post[]>({
  queryKey: ['posts'],
  queryFn: fetchPosts,
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
});
```

### 반응형 스타일링
```typescript
// styled-components를 사용한 반응형 디자인
const Container = styled.div`
  @media ${props => props.theme.media.mobile} {
    padding: 0;
    max-width: 100%;
  }
`;
```

## 📱 반응형 브레이크포인트

```typescript
const breakpoints = {
  xs: "320px",    // Extra small devices
  sm: "480px",    // Small devices  
  md: "768px",    // Medium devices (tablets)
  lg: "1024px",   // Large devices
  xl: "1264px",   // Extra large devices
  xxl: "1400px"   // XXL devices
};
```

## 🛠️ API 엔드포인트

### 인증
- `POST /api/auth/signin` - 로그인
- `POST /api/auth/signout` - 로그아웃

### 콘텐츠
- `GET /api/posts` - 피드 게시물 목록
- `GET /api/explore` - 탐색 콘텐츠
- `GET /api/reels` - 릴스 목록
- `GET /api/notifications` - 알림 목록
- `GET /api/chats` - 채팅 목록
- `GET /api/users` - 사용자 검색

## 🎯 핵심 기능 설명

### 1. 인증 시스템
- NextAuth.js v5를 사용한 JWT 기반 인증
- Credentials Provider로 이메일/비밀번호 로그인
- 세션 관리 및 보호된 라우트

### 2. 반응형 네비게이션
- 데스크톱: 풀 사이드바 (220px)
- 태블릿: 아이콘 사이드바 (72px)  
- 모바일: 하단 탭바

### 3. 피드 시스템
- 무한 스크롤 (구현 예정)
- 좋아요/댓글 상호작용
- 이미지 최적화

### 4. 검색 기능
- 실시간 사용자 검색
- 최근 검색어 저장
- 인기 콘텐츠 추천

### 5. 모킹 시스템
- MirageJS를 사용한 가상 백엔드
- 실제 API 응답 형태 모방
- 개발/테스트 환경 지원

## 🧪 테스트

```bash
# 개발 서버에서 테스트
npm run dev

# 빌드 테스트
npm run build
npm start
```

## 📝 개발 노트

### Mock 서버 초기화
```typescript
// Mock 서버는 개발 환경에서만 실행됩니다
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    makeServer();
  }
}, []);
```

### 스타일 컴포넌트 최적화
```typescript
// DOM에 전달되지 않아야 할 props 필터링
const StyledComponent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'customProp',
})<{ customProp?: boolean }>`
  // 스타일 정의
`;
```

## 🔮 향후 개발 계획

- [ ] 게시물 작성/편집 기능
- [ ] 실시간 채팅 시스템
- [ ] 스토리 기능
- [ ] 다크 모드 지원
- [ ] PWA 지원
- [ ] 이미지 업로드 및 처리
- [ ] 댓글 시스템
- [ ] 팔로우/팔로워 시스템

## 🤝 기여하기

1. 포크 (Fork) 생성
2. 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 푸시 (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다. MIT 라이선스 하에 자유롭게 사용하실 수 있습니다.

## 👨‍💻 개발자

**Hebi10**
- GitHub: [@hebi10](https://github.com/hebi10)
- 프로젝트 링크: [Instagram Clone](https://github.com/hebi10/insta_clone)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!
