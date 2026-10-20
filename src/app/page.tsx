import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { CTASection } from "@/components/CTASection";
import styles from "./WhenToBringUsIn.module.css";

export const metadata: Metadata = {
  title: { absolute: "Smith & Devil — Win hearts & markets" },
  description:
    "Smith & Devil is a creative strategy and design studio for the experience economy. We partner with brands and businesses that are as ambitious as we are. Winning hearts and markets with solid strategy and powerful creative.",
  alternates: { canonical: "/" },
};

const panels = [
  {
    slug: "humbug",
    title: "Humbug",
    image: "/images/humbug.jpg",
    intro: "Our brand sold 12,000 tickets and filled 90% of key dates within one week of on-sale.",
    position: "50% 4%",
    scale: 1.6,
    origin: "0% 34%",
  },
  {
    slug: "pop-playrooms",
    title: "Pop Playrooms",
    image: "/images/pop-playrooms.jpg",
    intro: "One of the most unique design concepts in the competitive socialising category.",
    position: "50% 28%",
  },
  {
    slug: "mighty-adventures",
    title: "Mighty Adventures",
    image: "/images/mighty-adventures.jpg",
    intro: "We turned this outdoor mini golf concept into a mission-led family experience with real teeth.",
    position: "50% 50%",
  },
  {
    slug: "t2-design-solutions",
    title: "T2 Design Solutions",
    image: "/images/t2-design-solutions.jpg",
    intro: "Our rebrand helped this Nottinghamshire based 3D visualisation studio grow into a global creative technology brand.",
    position: "62% 50%",
    contain: true,
  },
];

const clients = [
  ["Strike", "/brand/clients/strike.png", 249],
  ["Draughts", "/brand/clients/draughts.png", 132],
  ["Humbug", "/brand/clients/humbug.png", 151],
  ["Fortune Favours", "/brand/clients/fortune-favours.png", 199],
  ["Pop Golf", "/brand/clients/pop-golf.png", 179],
  ["Putt Crazy", "/brand/clients/putt-crazy.png", 306],
  ["Mama Bamboo", "/brand/clients/mama-bamboo.png", 318],
  ["T2 Design Solutions", "/brand/clients/t2.png", 138],
  ["Amadeus", "/brand/clients/amadeus.png", 520],
] as const;

export default function HomePage() {
  return (
    <main className="sd-home">
      <HomeHero />

      <section className="sd-home-projects" aria-label="Featured work">
        <div className="sd-home-projects-inner">
          <div className="sd-home-project-stack">
            {panels.map((project) => (
              <Link key={project.slug} className="sd-home-project" href={`/work/${project.slug}`}>
                <span className="sd-home-project-media" style={project.contain ? { background: "#fff" } : undefined}>
                  <img
                    alt={project.title}
                    src={project.image}
                    style={{
                      objectFit: project.contain ? "contain" : "cover",
                      objectPosition: project.position,
                      transform: project.scale ? `scale(${project.scale})` : undefined,
                      transformOrigin: project.origin,
                    }}
                  />
                </span>
                <span className="sd-home-project-copy">
                  <span className="sd-home-project-title">{project.title}</span>
                  <span className="sd-home-project-intro">{project.intro}</span>
                  <span className="sd-home-project-link">View project <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="sd-home-more">
            <Link className="sd-home-more-link" href="/work">
              <span>See more work</span>
              <span className="sd-circle-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="When to bring us in">
        <div className={styles.inner}>
          <details className={styles.details}>
            <summary className={styles.summary}>
              <h2 className={styles.heading}>When to bring us in</h2>
              <span className={styles.toggle} aria-hidden="true">+</span>
            </summary>
            <div className={styles.content}>
              <h3 className={styles.introHeading}>Got big plans? Good. We like big plans.</h3>
              <p className={styles.intro}>From a brilliant idea on the back of a napkin to a business with its sights set on world domination, there’s plenty we can do together.</p>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Something up your sleeve?</h3>
                <p className={styles.itemBody}>A new venue, attraction or experience? Bring us in early. We’ll help turn the big idea into a brilliant concept, a compelling brand and a business worth getting excited about.</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Ready to make an entrance?</h3>
                <p className={styles.itemBody}>Opening the doors on something new? We’ll make sure there’s a great story to tell and plenty of people ready to hear it.</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Outgrown your old self?</h3>
                <p className={styles.itemBody}>Businesses evolve. Brands should too. If yours no longer does you justice, we’ve got some ideas about that.</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Ready to grow your business?</h3>
                <p className={styles.itemBody}>More customers, more bookings, more revenue. Whether you’re looking to get more from an existing venue or grow an entire estate, we’ll help make the numbers move in the right direction.</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Have a challenge we haven’t covered?</h3>
                <p className={styles.itemBody}>Every business has its own ambitions and obstacles. Tell us what you’re working towards. We’ll see where our thinking and experience can make a difference.</p>
              </div>
              <div className={styles.close}>
                <h3 className={styles.closeTitle}>Got something in mind?</h3>
                <Link className={styles.link} href="/contact">Let’s talk <span className={styles.arrow} aria-hidden="true">→</span></Link>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="sd-home-statement">
        <p className="sd-home-statement-desktop">
          We partner with brands and businesses<br />
          that are as ambitious as we are.<br />
          Winning <em>hearts &amp; markets</em> with<br />
          solid strategy and powerful creative.
        </p>
        <p className="sd-home-statement-mobile">
          We partner with brands and businesses<br />
          that are as ambitious as we are.<br /><br />
          Winning <em>hearts &amp; markets</em><br />
          with solid strategy and powerful creative.
        </p>
      </section>

      <section className="sd-home-clients" aria-label="Our clients">
        <ul>
          {clients.map(([name, src, width]) => (
            <li key={name}>
              <img alt={name} loading="lazy" width={width} height="132" src={src} />
            </li>
          ))}
        </ul>
        <p>Our clients</p>
      </section>

      <CTASection />
    </main>
  );
}
