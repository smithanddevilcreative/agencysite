import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { thinkingArticles } from "@/lib/thinking";

export const metadata: Metadata = {
  title: "Thinking",
  description: "Smith & Devil thinking on brand strategy, hospitality, competitive socialising and the experience economy.",
  alternates: { canonical: "/thinking" },
};

export default function ThinkingPage() {
  return (
    <main className="sd-thinking-index">
      <section className="sd-thinking-index-hero">
        <div className="sd-thinking-inner">
          <h1>Brand strategy, positioning and practical lessons from the experience economy.</h1>
        </div>
      </section>

      <section className="sd-thinking-index-list">
        <div className="sd-thinking-inner">
          {thinkingArticles.map((article, index) => (
            <Link className="sd-thinking-card" href={`/thinking/${article.slug}`} key={article.slug}>
              <span className="sd-thinking-card-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span className="sd-thinking-card-eyebrow">{article.eyebrow}</span>
                <h2>{article.title}</h2>
                <p>{article.standfirst}</p>
              </div>
              <span className="sd-thinking-card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
