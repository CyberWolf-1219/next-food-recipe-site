import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth/core/types';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
