import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import type { ServicePageData } from "@/lib/service-pages";
import styles from "./CampaignsContentPage.module.css";

const projects = [
  {
    name: "Humbug",
    href: "/work/humbug",
    image: "/images/work/humbug/03.webp",
    alt: "Campaign artwork for the original Humbug Christmas show",
    description: "Santa’s Christmas Dive Bar. A rock-and-roll take on Christmas, brought to life through the brand, outdoor advertising, social content and CRM for the original London show.",
    scope: "Campaign strategy, art direction, advertising, social & CRM",
  },
  {
    name: "Allstars Sports Bars",
    href: "/work/allstars-sports-bars",
    image: "/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_English-Pool-7403993.jpg",
    alt: "Pool at Allstars Sports Bar Weston-super-Mare",
    description: "The people and places behind the games. Photography, film and ongoing social content that give each bar a local presence, supported by email campaigns around sport, events and offers.",
    scope: "Content strategy, photography, film, social & CRM",
  },

];

const capabilities = ["Campaign strategy", "Creative concepts & art direction", "Copywriting", "Social content & advertising", "Email & CRM", "Photography & film", "Outdoor, print & in-venue creative"];

export function CampaignsContentPage({ data }: { data: ServicePageData }) {
  const faqQuestions = new Set([
    "Can you work with our existing brand?",
    "Do you buy and manage paid media?",
    "Can you support both a launch and ongoing marketing?",
    "Can you work with our internal marketing team?",
  ]);
  const faqs = data.faq.items.filter((item) => faqQuestions.has(item.question));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: data.kicker, description: data.description, url: "https://smithanddevil.com/services/campaigns-content/", provider: { "@type": "Organization", name: "Smith & Devil" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Services", item: "https://smithanddevil.com/services/" },
        { "@type": "ListItem", position: 2, name: data.kicker, item: "https://smithanddevil.com/services/campaigns-content/" },
      ] },
      { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={`${styles.inner} ${styles.hero}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>Campaigns & Content</span></nav>
        <h1>Campaigns & Content</h1>
        <p className={styles.intro}>We work with brands and marketing teams to develop campaign ideas and create the content to support them. Advertising, social, film, email and print, commissioned together or individually.</p>
      </section>

      <section className={`${styles.inner} ${styles.projects}`} aria-label="Selected campaigns and content projects">
        {projects.map((project, index) => (
          <article className={index === 0 ? styles.leadProject : styles.project} key={project.href}>
            <Link className={styles.projectLink} href={project.href}>
              <div className={styles.media}><img src={project.image} alt={project.alt} width="1400" height="900" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} /></div>
              <div className={styles.caption}>
                <h2>{project.name}<span aria-hidden="true">↗</span></h2>
                <div><p>{project.description}</p><p className={styles.scope}>{project.scope}</p></div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <section className={`${styles.inner} ${styles.capabilities}`} aria-labelledby="campaign-capabilities">
        <h2 id="campaign-capabilities">How we can help</h2>
        <div><ul>{capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
          <p>We can lead the creative, work alongside your agency or become part of your marketing team.</p>
        </div>
      </section>

      <section className={`${styles.inner} ${styles.fit}`} aria-labelledby="when-to-bring-us-in">
        <h2 id="when-to-bring-us-in">{data.fit.title}</h2>
        <ul>{data.fit.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className={`${styles.inner} ${styles.faq}`} aria-labelledby="campaign-faqs">
        <h2 id="campaign-faqs">Questions clients ask</h2>
        <div>{faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <p>{answer}</p>
          </details>
        ))}</div>
      </section>

      <section className={styles.enquiry} id="project-enquiry">
        <div className={`${styles.inner} ${styles.enquiryGrid}`}>
          <div><h2>Talk to us.</h2><p>Tell us what you have in mind.</p></div>
          <EnquiryForm service={data.kicker} />
        </div>
      </section>
    </main>
  );
}
