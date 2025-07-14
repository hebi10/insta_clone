import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  pages: {
    signIn: '/',
    newUser: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("로그인데이터:", credentials);

        // 1. 외부 API로 로그인 요청
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
        const response = await fetch(`${baseUrl}/api/auth/callback/credentials`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        // 2. 인증 실패
        if (!response.ok) return null;

        // 3. 인증 성공 (user 객체 파싱)
        const user = await response.json();

        // 4. 반환값을 NextAuth에서 사용할 수 있는 형태로 리턴
        return {
          id: user.id,
          name: user.nickname || user.name,
          email: user.email,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };