import Link from "next/link";

const c = {
  section: "CTASection-module__ETvUXq__section",
  inner: "CTASection-module__ETvUXq__inner",
  statement: "CTASection-module__ETvUXq__statement",
  red: "CTASection-module__ETvUXq__red",
  cta: "CTASection-module__ETvUXq__cta",
  arrow: "CTASection-module__ETvUXq__arrow",
};

export function CTASection() {
  return (
    <section className={c.section}>
      <div className={c.inner}>
        <p className={c.statement}>
          Let’s build experiences<br />
          people <em className={c.red}>love</em> and<br />
          businesses that <em className={c.red}>grow</em>.
        </p>
        <Link className={c.cta} href="/contact">
          <span>Start a project</span>
          <span className={c.arrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
