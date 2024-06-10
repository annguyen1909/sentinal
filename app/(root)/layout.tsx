import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CyberSentinal",
  description: "A next.js 15 Meta CyberSentinal Application",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
