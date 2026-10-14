import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionController } from "@/components/MotionController";
import { AmpersandCursor } from "@/components/AmpersandCursor";

export const metadata: Metadata = {
  title: "Smith & Devil — Win hearts & markets",
  description:
    "Smith & Devil is a creative strategy and design studio for the experience economy.",
  icons: {
    icon: [{ url: "/icon.svg?v=7", type: "image/svg+xml" }],
    shortcut: "/icon.svg?v=7",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/NaNSuperXSerifDisplay-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NaNSuperXSerifDisplay-SemiboldItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <MotionController />
        <AmpersandCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
