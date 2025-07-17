import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { faker } from '@faker-js/faker';

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
            image: faker.image.avatar(),
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