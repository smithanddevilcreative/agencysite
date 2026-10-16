import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionController } from "@/components/MotionController";
import { AmpersandCursor } from "@/components/AmpersandCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smithanddevil.com"),
  title: {
    default: "Smith & Devil — Win hearts & markets",
    template: "%s | Smith & Devil",
  },
  description:
    "Smith & Devil is a creative strategy and design studio for the experience economy.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon-2026.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/favicon-2026.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.smithanddevil.com",
    siteName: "Smith & Devil",
    title: "Smith & Devil — Win hearts & markets",
    description:
      "Creative strategy, branding, campaigns, digital, interiors and themed experiences for the experience economy.",
    images: [
      {
        url: "/images/humbug.jpg",
        alt: "Smith & Devil creative studio work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smith & Devil — Win hearts & markets",
    description:
      "Creative strategy, branding, campaigns, digital, interiors and themed experiences for the experience economy.",
    images: ["/images/humbug.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smith & Devil",
              url: "https://www.smithanddevil.com",
              logo: "https://www.smithanddevil.com/brand/smith-and-devil-logo.png",
              email: "hello@smithanddevil.com",
              description:
                "Creative strategy and design studio for the experience economy.",
            }),
          }}
        />
        <Header />
        <MotionController />
        <AmpersandCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
