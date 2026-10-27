import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import type { ThinkingArticle } from "@/lib/thinking";

export function ThinkingArticlePage({ article }: { article: ThinkingArticle }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle,
    description: article.description,
    author: { "@type": "Organization", name: "Smith & Devil" },
    publisher: { "@type": "Organization", name: "Smith & Devil" },
    mainEntityOfPage: `https://www.smithanddevil.com/thinking/${article.slug}`,
    image: `https://www.smithanddevil.com${article.heroImage.src}`,
  };

  return (
    <main className="sd-thinking-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sd-thinking-hero">
        <div className="sd-thinking-inner">
          <nav className="sd-thinking-breadcrumb" aria-label="Breadcrumb">
            <Link href="/thinking">Thinking</Link><span aria-hidden="true">/</span><span>{article.eyebrow}</span>
          </nav>
          <p className="sd-thinking-eyebrow">{article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p className="sd-thinking-standfirst">{article.standfirst}</p>
        </div>
      </header>

      <div className="sd-thinking-inner">
        <figure className="sd-thinking-hero-media">
          <img src={article.heroImage.src} alt={article.heroImage.alt} width="1600" height="1000" />
          {article.heroImage.caption && <figcaption>{article.heroImage.caption}</figcaption>}
        </figure>
      </div>

      <article className="sd-thinking-body">
        {article.sections.map((section, index) => (
          <section className="sd-thinking-section" key={index}>
            <div className="sd-thinking-copy">
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
            {section.media && (
              <figure className="sd-thinking-media">
                {section.media.kind === "vimeo" && section.media.vimeoId ? (
                  <div className="sd-thinking-video">
                    <iframe
                      src={`https://player.vimeo.com/video/${section.media.vimeoId}?title=0&byline=0&portrait=0`}
                      title={section.media.alt}
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img src={section.media.src} alt={section.media.alt} loading="lazy" width="1400" height="900" />
                )}
                {section.media.caption && <figcaption>{section.media.caption}</figcaption>}
                {section.media.href && <Link className="sd-thinking-project-link" href={section.media.href}>See the project <span aria-hidden="true">→</span></Link>}
              </figure>
            )}
          </section>
        ))}
      </article>

      <section className="sd-thinking-related">
        <div className="sd-thinking-inner">
          <p className="sd-thinking-eyebrow">Relevant work</p>
          <div className="sd-thinking-related-links">
            {article.relatedProjects.map((project) => <Link href={project.href} key={project.href}>{project.title} <span aria-hidden="true">→</span></Link>)}
          </div>
          <div className="sd-thinking-service-link">
            <p>{article.eyebrow.startsWith("Concept to Market") ? "Developing a new product, venue or experience?" : "Building or repositioning an experience-led business?"}</p>
            <Link href={article.eyebrow.startsWith("Concept to Market") ? "/services/concept-to-market" : "/services/brand-strategy-design"}>{article.eyebrow.startsWith("Concept to Market") ? "Explore Concept to Market" : "Explore Brand Strategy & Design"} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
