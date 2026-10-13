import Link from "next/link";

const collage = [
  { slug: "mama-bamboo", title: "Mama Bamboo", image: "/images/mama-bamboo.jpg", className: "sd-collage-mama", focal: "50% 34%" },
  { slug: "humbug", title: "Humbug", image: "/images/humbug.jpg", className: "sd-collage-humbug", focal: "38% 38%" },
  { slug: "pop-playrooms", title: "Pop Playrooms", image: "/images/pop-playrooms.jpg", className: "sd-collage-pop", focal: "50% 34%" },
  { slug: "t2-design-solutions", title: "T2 Design Solutions", image: "/images/t2-design-solutions.jpg", className: "sd-collage-t2", focal: "50% 45%" },
  { slug: "levels", title: "Levels @ Maj", image: "/images/levels.jpg", className: "sd-collage-levels", focal: "58% 48%" },
  { slug: "mighty-adventures", title: "Mighty Adventures", image: "/images/mighty-adventures.jpg", className: "sd-collage-mighty", focal: "62% 44%" },
] as const;

export function HomeHero() {
  return (
    <section className="sd-home-hero">
      <div className="sd-home-hero-copy">
        <h1>
          <span>Win hearts</span>
          <span><b>&amp;</b> markets</span>
        </h1>
        <p>
          A creative strategy and design studio<br />
          for the experience economy.
        </p>
      </div>

      <span className="sd-home-scroll">Scroll</span>

      <div className="sd-home-collage" aria-label="Selected projects">
        {collage.map((project) => (
          <Link
            key={project.slug}
            className={`sd-collage-card ${project.className}`}
            href={`/work/${project.slug}`}
            aria-label={project.title}
          >
            <img alt="" src={project.image} style={{ objectPosition: project.focal }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
