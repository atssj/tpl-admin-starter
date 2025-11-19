import { BetterAuth } from "better-auth";
import { PrismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { emailProvider } from "better-auth/providers/email";

const db = new PrismaClient();

export const auth = new BetterAuth({
  adapter: new PrismaAdapter(db),
  providers: [
    emailProvider({
      // You can add email verification logic here if needed
    }),
  ],
  // You can add additional configuration here
});
