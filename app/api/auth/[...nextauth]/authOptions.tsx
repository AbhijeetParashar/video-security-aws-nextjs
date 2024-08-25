import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      const provider = account.provider;

      const userInfo = {
        user_name: user.name,
        email: user.email,
        phone: user.phone || null,
        sso_provider: provider,
        view: "webapp",
      };
      const aYearFromNow = new Date();
      aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
      cookies().set("userDetail", JSON.stringify(userInfo), {
        expires: aYearFromNow,
      });
      return true;
    },

    async redirect({ url, baseUrl }) {
      // Ensure the user is redirected to the correct URL
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
  },
};
