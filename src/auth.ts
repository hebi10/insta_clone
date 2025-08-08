import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  debug: process.env.NODE_ENV === 'development',
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        
        // Mock 사용자로 직접 검증 (개발/프로덕션 모두)
        const mockUsers = [
          {
            id: 'test@test.com',
            email: 'test@test.com',
            username: 'testuser',
            password: '1234',
          },
          {
            id: 'admin@admin.com',
            email: 'admin@admin.com',
            username: 'admin',
            password: 'admin',
          },
          {
            id: 'user@user.com',
            email: 'user@user.com',
            username: 'user',
            password: 'user',
          },
        ];

        const mockUser = mockUsers.find(u => 
          u.id === credentials.username && u.password === credentials.password
        );

        if (mockUser) {
          return {
            id: mockUser.id,
            name: mockUser.username,
            email: mockUser.email,
            image: '/images/default-avatar.png',
          };
        }

        return null;
      }
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // 로그인 후에는 메인 페이지로 리다이렉트
      if (url === baseUrl + '/login' || url === baseUrl || url === baseUrl + '/') {
        return baseUrl + '/';
      }
      // 다른 URL이 지정된 경우 해당 URL로 이동
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl + '/';
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    }
  }
});