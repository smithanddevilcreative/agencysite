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
    icon: [{ url: "/favicon.ico?v=5", type: "image/x-icon" }],
    shortcut: "/favicon.ico?v=4",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
