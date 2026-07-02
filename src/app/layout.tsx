import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/style.css";
import "./styles/bento-design.css";
import "./styles/world-class-responsive.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BBMKU M.A. Notes | Political Science Dashboard",
  description: "Complete Study Material for BBMKU M.A. Political Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} data-lang="hi" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div id="app-container">
            <Sidebar />
            <main className="main-content">
              <Header />
              <div className="content-area">
                {children}
              </div>
            </main>
          </div>
          <BottomNav />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
