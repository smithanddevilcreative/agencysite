import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionController } from "@/components/MotionController";
import { AmpersandCursor } from "@/components/AmpersandCursor";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GR79JGW');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GR79JGW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smith & Devil",
              url: "https://www.smithanddevil.com",
              logo: "https://www.smithanddevil.com/brand/sd-logo-2026-black.png",
              email: "hello@smithanddevil.com",
              description:
                "Creative strategy and design studio for the experience economy.",
            }),
          }}
        />
        <Header />
        <MotionController />
        <AmpersandCursor />
        <AnalyticsEvents />
        {children}
        <Footer />
      </body>
    </html>
  );
}
