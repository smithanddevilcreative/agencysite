import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Smith & Devil — Win hearts & markets",
  description:
    "Smith & Devil is a creative strategy and design studio for the experience economy. We partner with brands and businesses that are as ambitious as we are. Winning hearts and markets with solid strategy and powerful creative.",
};

const panel = {
  section: "ProjectPanels-module__uRfApW__section",
  inner: "ProjectPanels-module__uRfApW__inner",
  stack: "ProjectPanels-module__uRfApW__stack",
  more: "ProjectPanels-module__uRfApW__more",
  moreLink: "ProjectPanels-module__uRfApW__moreLink",
  moreArrow: "ProjectPanels-module__uRfApW__moreArrow",
  item: "ProjectPanel-module__8b2_aa__panel",
  image: "ProjectPanel-module__8b2_aa__image",
  scrim: "ProjectPanel-module__8b2_aa__scrim",
  copy: "ProjectPanel-module__8b2_aa__copy",
  title: "ProjectPanel-module__8b2_aa__title",
  intro: "ProjectPanel-module__8b2_aa__intro",
  cta: "ProjectPanel-module__8b2_aa__cta",
  arrow: "ProjectPanel-module__8b2_aa__arrow",
};

const panels = [
  {
    slug: "humbug",
    title: "Humbug",
    image: "/images/humbug.jpg",
    intro: "Our brand sold 12,000 tickets and filled 90% of key dates within one week of on-sale.",
    style: { objectFit: "cover" as const, objectPosition: "50% 4%", transformOrigin: "0% 34%", "--panel-scale": 1.6 } as React.CSSProperties,
  },
  {
    slug: "pop-playrooms",
    title: "Pop Playrooms",
    image: "/images/pop-playrooms.jpg",
    intro: "One of the most unique design concepts in the competitive socialising category.",
    style: { objectFit: "cover" as const, objectPosition: "50% 28%", transformOrigin: "center", "--panel-scale": 1 } as React.CSSProperties,
  },
  {
    slug: "mighty-adventures",
    title: "Mighty Adventures",
    image: "/images/mighty-adventures.jpg",
    intro: "We turned this outdoor mini golf concept into a mission-led family experience with real teeth.",
    style: { objectFit: "cover" as const, objectPosition: "50% 50%", transformOrigin: "center", "--panel-scale": 1 } as React.CSSProperties,
  },
  {
    slug: "t2-design-solutions",
    title: "T2 Design Solutions",
    image: "/images/t2-design-solutions.jpg",
    intro: "Our rebrand helped this Nottinghamshire based 3D visualisation studio grow into a global creative technology brand.",
    background: "#ffffff",
    style: { objectFit: "contain" as const, objectPosition: "62% 50%", transformOrigin: "center", "--panel-scale": 1 } as React.CSSProperties,
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
    <main>
      <HomeHero />

      <section className={panel.section}>
        <div className={panel.inner}>
          <div className={panel.stack}>
            {panels.map((project) => (
              <Link
                key={project.slug}
                className={panel.item}
                href={`/work/${project.slug}`}
                style={project.background ? { background: project.background } : undefined}
              >
                <img
                  alt={project.title}
                  className={panel.image}
                  src={project.image}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, ...project.style }}
                />
                <span className={panel.scrim} aria-hidden="true" />
                <span className={panel.copy}>
                  <span className={panel.title}>{project.title}</span>
                  <span className={panel.intro}>{project.intro}</span>
                  <span className={panel.cta}>View project <span className={panel.arrow} aria-hidden="true">→</span></span>
                </span>
              </Link>
            ))}
          </div>
          <div className={panel.more}>
            <Link className={panel.moreLink} href="/work">
              <span>See more work</span>
              <span className={panel.moreArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="EditorialStatement-module__HLcuOa__section">
        <p className="EditorialStatement-module__HLcuOa__statement">
          We partner with brands and businesses<br />
          that are as ambitious as we are.<br />
          Winning <em className="EditorialStatement-module__HLcuOa__red">hearts</em> and{" "}
          <em className="EditorialStatement-module__HLcuOa__red">markets</em> with<br />
          solid strategy and powerful creative.
        </p>
      </section>

      <section className="ClientStrip-module__agh3cW__section" aria-label="Our clients">
        <ul className="ClientStrip-module__agh3cW__row">
          {clients.map(([name, src, width]) => (
            <li className="ClientStrip-module__agh3cW__slot" key={name}>
              <img alt={name} loading="lazy" width={width} height="132" className="ClientStrip-module__agh3cW__logo" src={src} />
            </li>
          ))}
        </ul>
        <p className="ClientStrip-module__agh3cW__label">Our clients</p>
      </section>

      <CTASection />
    </main>
  );
}
