import { Auth } from "better-auth";
import { PrismaAdapter } from "better-auth/adapter-prisma";
import { prisma } from "@repo/db";
import { EmailProvider } from "better-auth/providers";

// Note: In a real-world app, you'd want to configure the email provider
// to send actual emails for password resets, etc.
// For this minimalistic example, we'll keep it simple.

export const auth = new Auth({
  adapter: new PrismaAdapter(prisma),
  session: {
    strategy: "cookie", // Using secure, HTTP-only cookies
  },
  providers: [
    EmailProvider({
      // This is a simple, non-emailing password provider.
      // It allows sign-in with email and password.
      from: "noreply@example.com", // Dummy from address
      sendVerificationRequest: async () => {}, // No-op for this example
      sendPasswordResetEmail: async () => {}, // No-op for this example
    }),
  ],
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
});
