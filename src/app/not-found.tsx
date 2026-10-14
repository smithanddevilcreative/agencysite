import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="sd-404">
      <div className="sd-404__inner">
        <div className="sd-404__code" aria-label="404">
          <span>4</span><span className="sd-404__amp">&amp;</span><span>4</span>
        </div>

        <div className="sd-404__copy">
          <h1>Looks like you wandered off the path.</h1>
          <p>
            Good news: you can turn back now.<br />
            Bad news: this page doesn’t exist.
          </p>
        </div>

        <div className="sd-404__actions">
          <Link className="sd-404__primary" href="/">Back to safety <span aria-hidden="true">→</span></Link>
          <Link className="sd-404__secondary" href="/work">See our work</Link>
        </div>
      </div>
    </main>
  );
}
