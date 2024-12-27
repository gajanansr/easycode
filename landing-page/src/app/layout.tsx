import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyCode - Simplify Your LeetCode Challenges",
  description:
    "AI-powered Chrome extension to simplify LeetCode problem descriptions, provide hints, and suggest approaches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A1A1A] text-white`}>
        {children}
      </body>
    </html>
  );
}
