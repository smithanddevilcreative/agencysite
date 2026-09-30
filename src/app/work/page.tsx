import type { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Smith & Devil",
  description: "Selected Smith & Devil projects across branding, digital, campaigns and experiences.",
};

const c = {
  main: "work-module__8vBVoq__main",
  hero: "work-module__8vBVoq__hero",
  inner: "work-module__8vBVoq__inner",
  headline: "work-module__8vBVoq__headline",
  red: "work-module__8vBVoq__red",
  grid: "work-module__8vBVoq__grid",
  label: "work-module__8vBVoq__label",
  cards: "work-module__8vBVoq__cards",
};

export default function WorkPage() {
  return (
    <main className={c.main}>
      <section className={c.hero}>
        <div className={c.inner}>
          <h1 className={c.headline}>
            Behold the smith like craft & devilish creativity of our ingenious works.
            But most importantly check out the <em className={c.red}>results</em>.
          </h1>
        </div>
      </section>

      <section className={c.grid} aria-labelledby="selected-projects">
        <div className={c.inner}>
          <h2 id="selected-projects" className={c.label}>Selected projects</h2>
          <ul className={c.cards}>
            {projects.map((project) => (
              <li key={project.slug}><WorkCard project={project} /></li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
