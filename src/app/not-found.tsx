import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="sd-404-pixel">
      <div className="sd-404-pixel__screen">
        <div className="sd-404-pixel__content">
          <div className="sd-404-pixel__code" aria-label="404">
            <span className="sd-404-pixel__four">4</span>
            <span className="sd-404-pixel__and">&amp;</span>
            <span className="sd-404-pixel__four">4</span>
          </div>

          <div className="sd-404-pixel__stage" aria-hidden="true">
            <div className="sd-404-pixel__embers">
              {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
            </div>
            <img className="sd-404-pixel__devil" src="/brand/pixel-devil.svg" alt="" />
            <div className="sd-404-pixel__flames">
              {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
            </div>
          </div>

          <div className="sd-404-pixel__copy">
            <h1>Looks like you wandered off<br />the righteous path.</h1>
            <p>Good news: you can turn back now.<br />Bad news: this page doesn’t exist.</p>
          </div>

          <nav className="sd-404-pixel__actions" aria-label="404 options">
            <Link className="sd-404-pixel__button sd-404-pixel__button--primary" href="/">
              <span aria-hidden="true">▶</span> Back to safety
            </Link>
            <Link className="sd-404-pixel__button" href="/work">See our work</Link>
          </nav>
        </div>

        <div className="sd-404-pixel__status" aria-hidden="true">
          <span>SMITH &amp; DEVIL&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;CREATIVE UNDERWORLD</span>
          <span><b>ERROR 404</b>&nbsp;&nbsp;<i>//</i>&nbsp;&nbsp;FILE NOT FOUND</span>
        </div>
      </div>
    </main>
  );
}
