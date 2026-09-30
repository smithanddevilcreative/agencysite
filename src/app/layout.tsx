import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smith & Devil — Win hearts & markets",
  description:
    "Smith & Devil is a creative strategy and design studio for the experience economy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
