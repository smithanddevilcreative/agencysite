import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import type { ServicePageData } from "@/lib/service-pages";
import { serviceLinks } from "@/lib/site-data";

const c = {
  main: "service-module__T4otXW__main",
  hero: "service-module__T4otXW__hero",
  inner: "service-module__T4otXW__inner",
  breadcrumb: "service-module__T4otXW__breadcrumb",
  heroGrid: "service-module__T4otXW__heroGrid",
  kicker: "service-module__T4otXW__kicker",
  title: "service-module__T4otXW__title",
  standfirst: "service-module__T4otXW__standfirst",
  actions: "service-module__T4otXW__actions",
  heroMedia: "service-module__T4otXW__heroMedia",
  proofLine: "service-module__T4otXW__proofLine",
  argument: "service-module__T4otXW__argument",
  argumentGrid: "service-module__T4otXW__argumentGrid",
  sectionLabel: "service-module__T4otXW__sectionLabel",
  displayHeading: "service-module__T4otXW__displayHeading",
  copyColumn: "service-module__T4otXW__copyColumn",
  capabilities: "service-module__T4otXW__capabilities",
  sectionHead: "service-module__T4otXW__sectionHead",
  capabilityGrid: "service-module__T4otXW__capabilityGrid",
  capability: "service-module__T4otXW__capability",
  number: "service-module__T4otXW__number",
  process: "service-module__T4otXW__process",
  processList: "service-module__T4otXW__processList",
  processItem: "service-module__T4otXW__processItem",
  processNumber: "service-module__T4otXW__processNumber",
  caseStudy: "service-module__T4otXW__caseStudy",
  caseMedia: "service-module__T4otXW__caseMedia",
  caseCopy: "service-module__T4otXW__caseCopy",
  textLink: "service-module__T4otXW__textLink",
  relatedProof: "service-module__T4otXW__relatedProof",
  fitSection: "service-module__T4otXW__fitSection",
  fitGrid: "service-module__T4otXW__fitGrid",
  fitList: "service-module__T4otXW__fitList",
  faqSection: "service-module__T4otXW__faqSection",
  faqs: "service-module__T4otXW__faqs",
  faq: "service-module__T4otXW__faq",
  serviceNav: "service-module__T4otXW__serviceNav",
  serviceLinks: "service-module__T4otXW__serviceLinks",
  enquiryGrid: "service-module__T4otXW__enquiryGrid",
  enquiryTitle: "service-module__T4otXW__enquiryTitle",
  enquiryBody: "service-module__T4otXW__enquiryBody",
  enquiry: "service-module__T4otXW__enquiry",
  enquiryIntro: "service-module__T4otXW__enquiryIntro",
};

export function ServiceDetailPage({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: data.kicker,
        description: data.description,
        url: `https://smithanddevil.com/services/${data.slug}`,
        provider: { "@type": "Organization", name: "Smith & Devil" },
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className={c.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={c.hero}>
        <div className={c.inner}>
          <nav className={c.breadcrumb} aria-label="Breadcrumb">
            <Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{data.kicker}</span>
          </nav>
          <div className={c.heroGrid}>
            <div>
              <p className={c.kicker}>{data.kicker}</p>
              <h1 className={c.title}>{data.heroTitle}</h1>
            </div>
            <div>
              <p className={c.standfirst}>{data.standfirst}</p>
              <div className={c.actions}>
                {data.actions.map((action) =>
                  action.href.startsWith("/") ? (
                    <Link className={action.className} href={action.href} key={action.href}>{action.label}{action.className.includes("primaryAction") ? <> <span aria-hidden="true">→</span></> : null}</Link>
                  ) : (
                    <a className={action.className} href={action.href} key={action.href}>{action.label}{action.className.includes("primaryAction") ? <> <span aria-hidden="true">→</span></> : null}</a>
                  )
                )}
              </div>
            </div>
          </div>
          {data.heroImage.src && (
            <div className={c.heroMedia}>
              <img alt={data.heroImage.alt} width="2000" height="1200" src={data.heroImage.src} />
            </div>
          )}
          {data.proofLine && <p className={c.proofLine}>{data.proofLine}</p>}
        </div>
      </section>

      <section className={c.argument}>
        <div className={`${c.inner} ${c.argumentGrid}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>{data.argument.label}</p>
            <h2 className={c.displayHeading}>{data.argument.title}</h2>
          </div>
          <div className={`Reveal-module__U2Tp6W__base ${c.copyColumn}`}>
            {data.argument.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className={c.capabilities}>
        <div className={c.inner}>
          <div className={`Reveal-module__U2Tp6W__base ${c.sectionHead}`}>
            <p className={c.sectionLabel}>{data.capabilities.label}</p>
            <h2 className={c.displayHeading}>{data.capabilities.title}</h2>
          </div>
          <div className={c.capabilityGrid}>
            {data.capabilities.items.map((item) => (
              <div className={`Reveal-module__U2Tp6W__base ${c.capability}`} key={item.number}>
                <span className={c.number}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={c.process}>
        <div className={c.inner}>
          <div className={`Reveal-module__U2Tp6W__base ${c.sectionHead}`}>
            <p className={c.sectionLabel}>{data.process.label}</p>
            <h2 className={c.displayHeading}>{data.process.title}</h2>
          </div>
          <ol className={c.processList}>
            {data.process.items.map((item) => (
              <li key={item.number}>
                <div className={`Reveal-module__U2Tp6W__base ${c.processItem}`}>
                  <span className={c.processNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={c.caseStudy}>
        <div className={c.inner}>
          <div className={c.caseMedia}>
            <img alt={data.caseStudy.image.alt} loading="lazy" width="1400" height="900" src={data.caseStudy.image.src} />
          </div>
          <div className={`Reveal-module__U2Tp6W__base ${c.caseCopy}`}>
            <p className={c.sectionLabel}>{data.caseStudy.label}</p>
            <h2 className={c.displayHeading}>{data.caseStudy.title}</h2>
            {data.caseStudy.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {data.caseStudy.link && <Link className={c.textLink} href={data.caseStudy.link.href}>{data.caseStudy.link.label} <span aria-hidden="true">→</span></Link>}
            {data.caseStudy.related.length > 0 && (
              <ul className={c.relatedProof}>
                {data.caseStudy.related.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className={c.fitSection}>
        <div className={`${c.inner} ${c.enquiryGrid}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>{data.fit.label}</p>
            <h2 className={c.displayHeading}>{data.fit.title}</h2>
          </div>
          <div className="Reveal-module__U2Tp6W__base">
            <ul className={c.fitList}>{data.fit.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className={c.faqSection}>
        <div className={c.inner}>
          <div className={`Reveal-module__U2Tp6W__base ${c.sectionHead}`}>
            <p className={c.sectionLabel}>{data.faq.label}</p>
            <h2 className={c.displayHeading}>{data.faq.title}</h2>
          </div>
          <div className={c.faqs}>
            {data.faq.items.map((item) => (
              <details className={c.faq} key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <nav className={c.serviceNav} aria-label="Other services">
        <div className={c.inner}>
          <p className={c.sectionLabel}>Explore the connected offer</p>
          <div className={c.serviceLinks}>
            {serviceLinks
              .filter(([, href]) => href !== `/services/${data.slug}`)
              .map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
        </div>
      </nav>

      <section className={c.enquiry} id="project-enquiry">
        <div className={`${c.inner} ${c.fitGrid}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>{data.enquiry.label || "Start a conversation"}</p>
            <h2 className={c.enquiryTitle}>{data.enquiry.title || "Tell us what you are building."}</h2>
            {data.enquiry.intro && <p className={c.enquiryBody}>{data.enquiry.intro}</p>}
          </div>
          <div className="Reveal-module__U2Tp6W__base">
            <EnquiryForm service={data.kicker} />
          </div>
        </div>
      </section>
    </main>
  );
}
