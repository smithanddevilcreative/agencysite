import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Studio — Smith & Devil",
  description: "Meet Smith & Devil and discover how we work with ambitious brands and experience-led businesses.",
};

const c = {
  main: "studio-module__W4fhGG__main",
  hero: "studio-module__W4fhGG__hero",
  inner: "studio-module__W4fhGG__inner",
  statement: "studio-module__W4fhGG__statement",
  red: "studio-module__W4fhGG__red",
  rule: "Reveal-module__U2Tp6W__base studio-module__W4fhGG__rule",
  eyebrow: "studio-module__W4fhGG__eyebrow",
  pillar: "studio-module__W4fhGG__pillar",
  pillarBody: "Reveal-module__U2Tp6W__base studio-module__W4fhGG__pillarBody",
  body: "studio-module__W4fhGG__body",
  waysSection: "studio-module__W4fhGG__waysSection",
  stack: "studio-module__W4fhGG__stack",
  stackSticky: "Reveal-module__U2Tp6W__base studio-module__W4fhGG__stackSticky",
  mark: "studio-module__W4fhGG__mark",
  flexHeading: "studio-module__W4fhGG__flexHeading",
  cards: "studio-module__W4fhGG__cards",
  card: "Reveal-module__U2Tp6W__base studio-module__W4fhGG__card",
  tag: "studio-module__W4fhGG__tag",
  cardTitle: "studio-module__W4fhGG__cardTitle",
};

const headlineBase = "AboutHeadline-module__V-PVZq__headline";
const line = "AboutHeadline-module__V-PVZq__line";
const mask = "AboutHeadline-module__V-PVZq__mask";
const free = "AboutHeadline-module__V-PVZq__free";
const word = "AboutHeadline-module__V-PVZq__word";
const accent = "AboutHeadline-module__V-PVZq__accent";

function Word({ children, i, emphasis = false, freeMask = false }: { children: React.ReactNode; i: number; emphasis?: boolean; freeMask?: boolean }) {
  return (
    <span className={[mask, freeMask ? free : ""].filter(Boolean).join(" ")}>
      <span
        className={[word, emphasis ? accent : ""].filter(Boolean).join(" ")}
        style={{ "--i": i } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}

const pillars = [
  {
    variant: "AboutHeadline-module__V-PVZq__kick",
    heading: <><Word i={0}>Feel </Word><Word i={1} emphasis freeMask>good </Word><Word i={2}>factor</Word></>,
    body: "When you partner with us, we want you to enjoy the ride, love the outcomes and want to go again. Fun, collaborative & effective. That’s win-win and one more win for luck.",
  },
  {
    variant: "AboutHeadline-module__V-PVZq__amp",
    heading: <><Word i={0}>Craft </Word><Word i={1} emphasis freeMask>& </Word><Word i={2}>creativity</Word></>,
    body: "Our work may come from a playful place, but it doesn’t pass the ingenious test unless it’s built on rock solid strategy and delivers the kind of results that get your blood racing.",
  },
  {
    variant: "AboutHeadline-module__V-PVZq__count",
    heading: <><Word i={0} emphasis freeMask>5 </Word><Word i={1}>star </Word><Word i={2}>customers</Word></>,
    body: "Winning customers is only half the game. The real ROI adds up when you turn first-time customers into 5* review posting, newsletter clicking, advocates who just can’t imagine life without you.",
  },
  {
    variant: "AboutHeadline-module__V-PVZq__surge",
    twoLines: true,
    body: "You know all that incredible branding and marketing the world’s biggest brands get up to? That’s what we used to do. And now our 20+ years of hard earned insight, know-how and talent network is yours to command.",
  },
] as const;

const ways = [
  ["Project", "Let’s do a project together", "When we agree fees and deadlines, we stick to them, so you can get on with running your business secure in the knowledge that your new best team is on the job. Great for new websites, venue designs, rebrands and focussed projects with a definable end point."],
  ["Retainer", "Want us on the team?", "With a retained service agreement you’ll have your very own always on creative department and marketing team, without all those associated pesky overheads. You + us = your business with a secret weapon."],
  ["Partnership", "Big plans, limited funds?", "Have you got a transformational idea but limited short term funds? With great ambition comes big rewards, but kick-starting the dream can be hard to afford. OK, we can’t work for free, but we’re suckers for a visionary. Let’s talk, maybe we can strike a deal."],
  ["By the hour", "Dip your toe", "Look before you leap, try before you buy, paddle before you dive. We get it, sometimes you want to test the waters. With an hourly or daily rate, we’ll turn on the magic to show you how big a thing ‘just a small thing’ can really be."],
] as const;

export default function StudioPage() {
  return (
    <main className={c.main}>
      <section className={c.hero}>
        <div className={c.inner}>
          <h1 className={c.statement}>Win <em className={c.red}>hearts</em> & <em className={c.red}>markets</em> the Smith & Devil way.</h1>
          <div className={c.rule}>
            <span className={c.eyebrow}>What to expect when you work with us</span>
            <span className={c.eyebrow}>Smith & Devil</span>
          </div>
        </div>
      </section>

      <section aria-label="What to expect">
        <div className={c.inner}>
          {pillars.map((pillar, idx) => (
            <article className={c.pillar} key={idx}>
              <h2 className={`${headlineBase} ${pillar.variant}`}>
                {"twoLines" in pillar && pillar.twoLines ? (
                  <>
                    <span className={line}><Word i={0}>Big </Word><Word i={1}>agency </Word><Word i={2}>talent</Word></span>
                    <span className={line}><Word i={0}>Small </Word><Word i={1}>agency </Word><Word i={2} emphasis freeMask>energy</Word></span>
                  </>
                ) : (
                  <span className={line}>{pillar.heading}</span>
                )}
              </h2>
              <div className={c.pillarBody}><p className={c.body}>{pillar.body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={c.waysSection} aria-labelledby="ways">
        <div className={c.inner}>
          <div className={c.stack}>
            <div>
              <div className={c.stackSticky}>
                <span className={c.mark} aria-hidden="true">&</span>
                <h2 id="ways" className={c.flexHeading}>Work with us, it’s a flex.</h2>
                <p className={c.body}>No rigid systems, no hidden fees, no wasting time. Just really talented people partnered with your business on terms that work for you.</p>
              </div>
            </div>
            <ul className={c.cards}>
              {ways.map(([tag, title, body]) => (
                <li key={tag}>
                  <div className={c.card}>
                    <span className={c.tag}>{tag}</span>
                    <h3 className={c.cardTitle}>{title}</h3>
                    <p className={c.body}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
