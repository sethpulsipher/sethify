import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// const outfit = Outfit({
//   variable: "--font-heading",
//   subsets: ["latin"],
//   display: "swap",
// });

// const nunito = Nunito_Sans({
//   variable: "--font-body",
//   subsets: ["latin"],
//   display: "swap",
// });

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-satoshi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sethify - Web Design & AI Automation",
  description: "Professional websites and AI automation for small and medium businesses. Custom coded, high performance, result-driven.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Footer2 from "@/components/layout/Footer2";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${dmSerif.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer2 />
        </ThemeProvider>
      </body>
    </html>
  );
}
