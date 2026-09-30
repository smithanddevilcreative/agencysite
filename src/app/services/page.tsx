import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Creative Services for the Experience Economy | Smith & Devil",
  description: "Brand, campaign, digital, interior and themed experience services for hospitality, leisure, entertainment and experience-led businesses.",
};

const services = [
  {
    n: "01",
    title: "Brand Strategy & Design",
    slug: "brand-strategy-design",
    desc: "We create distinctive brands for hospitality, leisure, entertainment and ambitious businesses built around customer experience. Clear enough to guide the business. Powerful enough to win hearts — and markets.",
    image: "/images/work/fortune-favours/logo-tile.jpg",
  },
  {
    n: "02",
    title: "Campaigns & Content",
    slug: "campaigns-content",
    desc: "We plan and create launch campaigns, always-on content and customer communications that give people a reason to notice, book and come back.",
    image: "/images/work/pop-golf/popgolf-boxpark.jpg",
  },
  {
    n: "03",
    title: "Digital & Web",
    slug: "digital-web",
    desc: "We design and build websites that help people understand the offer, find the right experience and take the next step. Clear strategy, distinctive design and less friction between interest and action.",
    image: "/images/work/humbug/06.webp",
  },
  {
    n: "04",
    title: "Interiors & Environments",
    slug: "interiors-environments",
    desc: "We turn brands and commercial propositions into places people understand instinctively, enjoy fully and want to return to.",
    image: "/images/work/pop-playrooms/10.webp",
  },
  {
    n: "05",
    title: "Themed Experiences",
    slug: "themed-experiences",
    desc: "We create original worlds, stories and play experiences that give people more to feel, talk about and come back for.",
    image: "/images/work/mighty-adventures/signage-kids.jpg",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Smith & Devil creative services",
  url: "https://smithanddevil.com/services",
  itemListElement: services.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      url: `https://smithanddevil.com/services/${service.slug}`,
    },
  })),
};

const c = {
  main: "services-module__g8J8Uq__main",
  hero: "services-module__g8J8Uq__hero",
  inner: "services-module__g8J8Uq__inner",
  kicker: "services-module__g8J8Uq__kicker",
  heroBottom: "services-module__g8J8Uq__heroBottom",
  actions: "services-module__g8J8Uq__actions",
  collage: "services-module__g8J8Uq__collage",
  ampersand: "services-module__g8J8Uq__ampersand",
  orbit: "services-module__g8J8Uq__orbit",
  collageItem: "services-module__g8J8Uq__collageItem",
  argument: "services-module__g8J8Uq__argument",
  twoCol: "services-module__g8J8Uq__twoCol",
  sectionLabel: "services-module__g8J8Uq__sectionLabel",
  bodyCopy: "services-module__g8J8Uq__bodyCopy",
  serviceIndex: "services-module__g8J8Uq__serviceIndex",
  indexHead: "services-module__g8J8Uq__indexHead",
  cards: "services-module__g8J8Uq__cards",
  card: "services-module__g8J8Uq__card",
  cardNumber: "services-module__g8J8Uq__cardNumber",
  cardLink: "services-module__g8J8Uq__cardLink",
  studioSection: "services-module__g8J8Uq__studioSection",
  textLink: "services-module__g8J8Uq__textLink",
  proofSection: "services-module__g8J8Uq__proofSection",
  proofIntro: "services-module__g8J8Uq__proofIntro",
  proofLinks: "services-module__g8J8Uq__proofLinks",
  enquiry: "services-module__g8J8Uq__enquiry",
  enquiryIntro: "services-module__g8J8Uq__enquiryIntro",
};

export default function ServicesPage() {
  return (
    <main className={c.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={c.hero}>
        <div className={c.inner}>
          <p className={c.kicker}>Smith & Devil services</p>
          <h1>Creative services for the <em>experience economy.</em></h1>
          <div className={c.heroBottom}>
            <p>
              Smith & Devil brings strategy, brand, campaign, digital and spatial thinking together.
              Work with us on one defined challenge, or bring us into the whole experience.
            </p>
            <div className={c.actions}>
              <a href="#project-enquiry">Start a project <span aria-hidden="true">→</span></a>
              <Link href="/work">See our work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={c.collage} aria-label="Our services">
        <span className={c.ampersand} aria-hidden="true">&</span>
        {services.map((service, index) => (
          <div className={c.orbit} style={{ "--i": index } as React.CSSProperties} key={service.slug}>
            <Link
              className={`${c.collageItem} services-module__g8J8Uq__item${index + 1}`}
              href={`/services/${service.slug}`}
            >
              <img alt="" loading="lazy" width="1200" height="800" src={service.image} />
              <span>{service.title}</span>
            </Link>
          </div>
        ))}
      </section>

      <section className={c.argument}>
        <div className={`${c.inner} ${c.twoCol}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>Connected thinking</p>
            <h2>Where serious thinking meets playful possibility.</h2>
          </div>
          <div className={`Reveal-module__U2Tp6W__base ${c.bodyCopy}`}>
            <p>The best customer experiences feel joined up. The proposition, identity, website, space and campaign all tell the same story. Each part makes the others work harder.</p>
            <p>That is how we like to work. We build the right team around the commercial challenge, then stay close enough to carry the strongest idea through every place it needs to live.</p>
          </div>
        </div>
      </section>

      <section className={c.serviceIndex}>
        <div className={c.inner}>
          <div className={`Reveal-module__U2Tp6W__base ${c.indexHead}`}>
            <p className={c.sectionLabel}>The connected offer</p>
            <h2>Five ways we help.</h2>
          </div>
          <div className={c.cards}>
            {services.map((service) => (
              <div className="Reveal-module__U2Tp6W__base" key={service.slug}>
                <Link className={c.card} href={`/services/${service.slug}`}>
                  <span className={c.cardNumber}>{service.n}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className={c.cardLink}>
                    Explore <span className="sr-only">{service.title}</span><span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={c.studioSection}>
        <div className={`${c.inner} ${c.twoCol}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>How we work</p>
            <h2>Big agency craft. Small studio energy.</h2>
          </div>
          <div className={`Reveal-module__U2Tp6W__base ${c.bodyCopy}`}>
            <p>You work with senior people throughout. We bring in trusted specialists when the job needs them, without building unnecessary layers between the idea and the person paying for it.</p>
            <p>That keeps the work focused, the process enjoyable and the team the right size for the challenge.</p>
            <Link className={c.textLink} href="/studio">Meet the studio →</Link>
          </div>
        </div>
      </section>

      <section className={c.proofSection}>
        <div className={c.inner}>
          <div className={`Reveal-module__U2Tp6W__base ${c.indexHead}`}>
            <p className={c.sectionLabel}>Selected results</p>
            <h2>Built for the real world.</h2>
            <p className={c.proofIntro}>Our work has sold tickets, launched venues, supported international expansion and helped brands reach new markets.</p>
          </div>
          <div className={c.proofLinks}>
            <Link href="/work/humbug">Humbug <span aria-hidden="true">→</span></Link>
            <Link href="/work/pop-playrooms">Pop Playrooms <span aria-hidden="true">→</span></Link>
            <Link href="/work/t2-design-solutions">T2 Design Solutions <span aria-hidden="true">→</span></Link>
            <Link href="/work/mighty-adventures">Mighty Adventures <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={c.enquiry} id="project-enquiry">
        <div className={`${c.inner} ${c.twoCol}`}>
          <div className="Reveal-module__U2Tp6W__base">
            <p className={c.sectionLabel}>Start a conversation</p>
            <h2>Tell us what you are building.</h2>
            <p className={c.enquiryIntro}>Bring us a defined project, an early idea or a commercial challenge that needs sharper creative thinking.</p>
          </div>
          <div className="Reveal-module__U2Tp6W__base">
            <EnquiryForm service="General" />
          </div>
        </div>
      </section>
    </main>
  );
}
