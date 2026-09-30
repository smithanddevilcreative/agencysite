import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import type { ProjectPageData } from "@/lib/project-pages";

const c = {
  main: "study-module__vTcG6G__main",
  layout: "study-module__vTcG6G__layout",
  sticky: "study-module__vTcG6G__sticky",
  stickyInner: "Reveal-module__U2Tp6W__base study-module__vTcG6G__stickyInner",
  title: "study-module__vTcG6G__title",
  block: "study-module__vTcG6G__block",
  label: "study-module__vTcG6G__label",
  description: "study-module__vTcG6G__description",
  services: "study-module__vTcG6G__services",
  back: "study-module__vTcG6G__back",
  backArrow: "study-module__vTcG6G__backArrow",
  content: "study-module__vTcG6G__content",
  hero: "Reveal-module__U2Tp6W__base study-module__vTcG6G__hero",
  lead: "RevealMedia-module__8VxjUa__frame study-module__vTcG6G__lead",
  results: "Reveal-module__U2Tp6W__base study-module__vTcG6G__results",
  result: "study-module__vTcG6G__result",
  resultValue: "study-module__vTcG6G__resultValue",
  resultLabel: "study-module__vTcG6G__resultLabel",
  about: "Reveal-module__U2Tp6W__base study-module__vTcG6G__about",
  aboutLabel: "study-module__vTcG6G__aboutLabel",
  paragraph: "study-module__vTcG6G__paragraph",
  quote: "study-module__vTcG6G__quote",
  quoteText: "study-module__vTcG6G__quoteText",
  quoteBy: "study-module__vTcG6G__quoteBy",
  gallery: "study-module__vTcG6G__gallery",
};

export function ProjectDetailPage({ project }: { project: ProjectPageData }) {
  return (
    <main className={c.main}>
      <div className={c.layout}>
        <aside className={c.sticky}>
          <div className={c.stickyInner}>
            <h1 className={c.title}>{project.title}</h1>

            <div className={c.block}>
              <p className={c.label}>Project description</p>
              <p className={c.description}>{project.description}</p>
            </div>

            <div className={c.block}>
              <p className={c.label}>Services</p>
              <p className={c.services}>{project.services}</p>
            </div>

            <Link className={c.back} href="/work">
              <span className={c.backArrow} aria-hidden="true">←</span>
              <span>All work</span>
            </Link>
          </div>
        </aside>

        <div className={c.content}>
          {project.heroHtml ? (
            <div className={c.hero} dangerouslySetInnerHTML={{ __html: project.heroHtml }} />
          ) : null}

          {project.leadHtml ? (
            <div className={c.lead} dangerouslySetInnerHTML={{ __html: project.leadHtml }} />
          ) : null}

          {project.results.length ? (
            <section className={c.results}>
              {project.results.map((result) => (
                <div className={c.result} key={result.label}>
                  <p className={c.resultValue}>{result.value}</p>
                  <p className={c.resultLabel}>{result.label}</p>
                </div>
              ))}
            </section>
          ) : null}

          <section className={c.about}>
            <p className={c.aboutLabel}>About the project</p>
            {project.paragraphs.map((paragraph, index) => (
              <p className={c.paragraph} key={index}>{paragraph}</p>
            ))}
            {project.quote ? (
              <blockquote className={c.quote}>
                <p className={c.quoteText}>“{project.quote.text.replace(/^“|”$/g, "")}”</p>
                <footer className={c.quoteBy}>{project.quote.by}</footer>
              </blockquote>
            ) : null}
          </section>

          {project.galleryHtml ? (
            <div className={c.gallery} dangerouslySetInnerHTML={{ __html: project.galleryHtml }} />
          ) : null}
        </div>
      </div>

      <CTASection />
    </main>
  );
}
