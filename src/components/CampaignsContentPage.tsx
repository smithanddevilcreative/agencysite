import Link from "next/link";
import { BookCallLink, EnquiryForm } from "@/components/EnquiryForm";
import type { ServicePageData } from "@/lib/service-pages";
import styles from "./CampaignsContentPage.module.css";

const services = [
  { title: "Campaign ideas & launches", body: "An idea that gives your launch its identity, with the artwork, copy and launch plan to take it to market." },
  { title: "Social content & advertising", body: "Posts, reels and advertising creative built around what you have to offer. Planned, written and designed, with versions for your media team to test." },
  { title: "Email & CRM", body: "Welcome emails, booking reminders, offers and reasons to return. Useful messages shaped around your customers and when they need to hear from you." },
  { title: "Photography & film", body: "Shoots planned around the campaign, from the main launch image to the short clips you need each week. We direct specialist production partners where required." },
  { title: "Print, outdoor & venue materials", body: "Posters, outdoor advertising, menus and signage that carry the campaign into the places your customers see it." },
];

const questions = [
  { question: "Can you work with our marketing team or agency?", answer: "Yes. We can lead the campaign creative, produce the content or add capacity for a busy period. We agree who is responsible for planning, production, approvals and reporting before we start." },
  { question: "Do you buy and manage advertising?", answer: "Our core role is campaign strategy and creative. We work with your media agency or bring in a specialist partner to manage media buying." },
  { question: "Can we work together each month?", answer: "Yes. We work on individual launches and campaigns, and on monthly retainers for ongoing content and marketing. We agree the scope, fee and review schedule around what your team needs." },
];

export function CampaignsContentPage({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: data.kicker, description: data.description, url: "https://smithanddevil.com/services/campaigns-content/", provider: { "@type": "Organization", name: "Smith & Devil" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Services", item: "https://smithanddevil.com/services/" },
        { "@type": "ListItem", position: 2, name: data.kicker, item: "https://smithanddevil.com/services/campaigns-content/" },
      ] },
      { "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={`${styles.inner} ${styles.hero}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>Campaigns & Content</span></nav>
        <div className={styles.heroGrid}>
          <h1>Get your next<br />opening talked about.</h1>
          <div className={styles.intro}>
            <p>Launch campaigns and ongoing content for venues, attractions and live experiences.</p>
            <p>We find the idea, create the campaign and give your team what they need to get it out into the world.</p>
            <BookCallLink service={data.kicker} placement="hero" />
          </div>
        </div>
        <figure className={styles.heroImage}>
          <img src={data.heroImage.src} alt={data.heroImage.alt} width="2000" height="1200" fetchPriority="high" />
          <figcaption>Humbug · Brand and launch campaign</figcaption>
        </figure>
      </section>

      <section className={`${styles.inner} ${styles.caseStudy}`} aria-labelledby="humbug-campaign">
        <div className={styles.caseCopy}>
          <p className={styles.projectName}>Humbug</p>
          <h2 id="humbug-campaign">Santa needed<br />a different story.</h2>
          <p>For the original Humbug launch, we introduced London to Santa’s Christmas Dive Bar. A rock-and-roll Santa gave the show a character people could recognise across posters, social, email and the website.</p>
          <p>That idea shaped the positioning, brand and launch creative.</p>
          <p className={styles.result}>12,000 tickets sold and 90% of key dates filled within one week of going on sale.</p>
          <Link className={styles.textLink} href="/work/humbug">See the Humbug campaign <span aria-hidden="true">→</span></Link>
        </div>
        <img className={styles.artwork} src={data.caseStudy.image.src} alt={data.caseStudy.image.alt} width="1400" height="900" loading="lazy" />
      </section>

      <section className={styles.services} aria-labelledby="campaign-services">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <h2 id="campaign-services">The idea.<br />And everything it needs.</h2>
            <p>A launch might need the whole campaign. Your marketing team might need help with one part. We agree the work around your brief.</p>
          </div>
          <div className={styles.serviceList}>{services.map(({ title, body }) => <div className={styles.service} key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
        </div>
      </section>

      <section className={`${styles.inner} ${styles.working}`} aria-labelledby="working-together">
        <h2 id="working-together">What do you need<br />to happen next?</h2>
        <div>
          <p>Sell tickets for an opening? Fill quieter sessions? Get previous visitors booking again?</p>
          <p>We start with that question, then look at your audience, offer and budget. You’ll see the campaign idea before we take it into production, with agreed deliverables and timings.</p>
          <p>Once it’s live, we review the response with your team and media partners, using the measures we agreed at the start.</p>
        </div>
      </section>

      <section className={`${styles.inner} ${styles.questions}`} aria-labelledby="campaign-questions">
        <h2 id="campaign-questions">Working with us</h2>
        <div>{questions.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className={styles.enquiry} id="project-enquiry">
        <div className={`${styles.inner} ${styles.enquiryGrid}`}>
          <div><h2>What’s coming up?</h2><p>Tell us what you’re planning, when it needs to launch and where you need a hand.</p></div>
          <EnquiryForm service={data.kicker} />
        </div>
      </section>
    </main>
  );
}
