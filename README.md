# Instagram Clone

이 프로젝트는 Next.js와 TypeScript를 기반으로 한 간단한 인스타그램 클론입니다. 로그인과 피드 조회를 포함한 기본 기능을 구현하며, MirageJS를 사용해 백엔드 API를 모킹합니다.

## 특징

- **Next.js 15** 기반의 앱 디렉터리 구조
- **next-auth**의 Credentials Provider로 로그인 처리
- **MirageJS**를 통한 모킹 API 서버
- **React Query**를 사용한 데이터 패칭 및 캐싱
- **styled-components**로 스타일 관리

## 설치 및 실행

1. 저장소를 클론한 뒤 패키지를 설치합니다.
   ```bash
   npm install
   ```
2. 개발 서버를 실행합니다.
   ```bash
   npm run dev
   ```
3. [http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

빌드 후 실행하려면 다음 명령을 사용합니다.
```bash
npm run build
npm start
```

## 테스트 계정

MirageJS 서버에서 기본 제공하는 테스트 계정이 있습니다. 아래 정보를 사용해 로그인할 수 있습니다.

- 이메일: `test@test.com`
- 비밀번호: `1234`

`LoginForm` 컴포넌트의 `testLogin` 함수를 실행하면 자동으로 해당 계정 정보가 입력됩니다.

## 코드 스니펫

테스트 계정은 모킹 서버에서 다음과 같이 생성됩니다.
```ts
// src/mock/server.ts
server.create('user', {
  id: '1',
  email: 'test@test.com',
  password: '1234',
  username: 'mockuser',
  avatarUrl: faker.image.avatar(),
});
```
또한 로그인 폼에서는 credentials 방식으로 로그인을 처리합니다.
```ts
// src/app/(beforeLogin)/_components/LoginForm.tsx
const result = await signIn('credentials', {
  redirect: false,
  email: id.value,
  password: password.value,
});
```

## 라이선스

본 프로젝트는 학습 목적의 예제이며 별도의 라이선스를 명시하지 않습니다.
