import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
        const authResponse = await fetch(`${baseUrl}/api/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      }

    }),
  ],
});