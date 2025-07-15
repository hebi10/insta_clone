import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { faker } from '@faker-js/faker';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  trustHost: true,
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
        
        // 개발 환경에서는 Mock 데이터로 직접 검증
        if (process.env.NODE_ENV === 'development') {
          const mockUser = {
            id: 'test@test.com',
            email: 'test@test.com', 
            password: '1234',
            username: 'mockuser'
          };
          
          if (credentials.username === mockUser.id && credentials.password === mockUser.password) {
            return {
              id: mockUser.id,
              name: mockUser.username,
              email: mockUser.email,
              image: faker.image.avatar(),
            };
          }
          return null;
        }
        
        // 프로덕션 환경에서는 실제 API 호출
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
        const loginUrl = `${baseUrl}/api/login`;
        
        try {
          const authResponse = await fetch(loginUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          });

          if (!authResponse.ok) {
            return null;
          }

          const user = await authResponse.json();
          
          return {
            id: user.id,
            name: user.username || user.id,
            email: user.email || user.id,
            image: user.avatarUrl || faker.image.avatar(),
          };
        } catch (error) {
          return null;
        }
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
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    }
  }
});