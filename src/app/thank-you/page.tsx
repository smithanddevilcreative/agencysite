import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-module__7pwOvG__main">
      <p className="thank-you-module__7pwOvG__mark" aria-hidden="true">&</p>
      <h1>Thanks. We’ll be in touch.</h1>
      <p>This could be the start of something big.</p>
      <Link href="/">Return home →</Link>
    </main>
  );
}
