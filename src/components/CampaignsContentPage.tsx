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
    description: "A rock-and-roll Santa and his Christmas Dive Bar. Positioning, brand and campaign creative for the original London show.",
    scope: "Campaign strategy, art direction, advertising, social & CRM",
  },
  {
    name: "Allstars Sports Bars",
    href: "/work/allstars-sports-bars",
    image: "/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_English-Pool-7403993.jpg",
    alt: "Pool at Allstars Sports Bar Weston-super-Mare",
    description: "The players, personalities and local loyalties behind the sports bar. Photography, film, social content and email for the Allstars venues.",
    scope: "Content strategy, photography, film, social & CRM",
  },

];

const capabilities = ["Campaign strategy", "Creative concepts & art direction", "Copywriting", "Social content & advertising", "Email & CRM", "Photography & film", "Outdoor, print & in-venue creative"];

export function CampaignsContentPage({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: data.kicker, description: data.description, url: "https://smithanddevil.com/services/campaigns-content/", provider: { "@type": "Organization", name: "Smith & Devil" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Services", item: "https://smithanddevil.com/services/" },
        { "@type": "ListItem", position: 2, name: data.kicker, item: "https://smithanddevil.com/services/campaigns-content/" },
      ] },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={`${styles.inner} ${styles.hero}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>Campaigns & Content</span></nav>
        <h1>Campaigns & Content</h1>
        <p className={styles.intro}>We develop campaign ideas and make the content that carries them. Our work spans advertising, social, film and CRM, from a single campaign to an ongoing role in your marketing team.</p>
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
          <p>We can lead the campaign, work alongside your agency or support your in-house team. The scope can cover the whole programme or a particular piece of work.</p>
        </div>
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
