import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Google Font for premium feel
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Growth Partner | Automate Your Business",
  description: "Stop wasting time on repetitive tasks. Hire AI employees for blog writing, review management, and customer consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-black text-white selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
