import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock_App",
  description: "Your personal real-time stock analyser",
};

/**
 * Root layout component that configures document language, enables dark mode, and applies global fonts.
 *
 * @param children - The content to render inside the document body.
 * @returns An HTML structure with `<html lang="en" class="dark">` and a `<body>` that applies the Geist font CSS variables and the `antialiased` class, containing `children`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}