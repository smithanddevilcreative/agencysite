"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const c = {
  pinTarget: "Hero-module__ZARIfG__pinTarget",
  staticHero: "Hero-module__ZARIfG__staticHero",
  content: "Hero-module__ZARIfG__content",
  headline: "Hero-module__ZARIfG__headline",
  line: "Hero-module__ZARIfG__line",
  winHearts: "Hero-module__ZARIfG__winHearts",
  amp: "Hero-module__ZARIfG__amp",
  markets: "Hero-module__ZARIfG__markets",
  subcopy: "Hero-module__ZARIfG__subcopy",
  scrollCue: "Hero-module__ZARIfG__scrollCue",
  scrollTick: "Hero-module__ZARIfG__scrollTick",
  scrollLabel: "Hero-module__ZARIfG__scrollLabel",
  layer: "OrbitSection-module__VUvapa__layer",
  slot: "OrbitSection-module__VUvapa__slot",
  card: "ProjectCard-module__U_VZua__card",
  imageWrap: "ProjectCard-module__U_VZua__imageWrap",
  image: "ProjectCard-module__U_VZua__image",
  scrim: "ProjectCard-module__U_VZua__scrim",
  title: "ProjectCard-module__U_VZua__title",
};

const orbitProjects = [
  { slug: "humbug", title: "Humbug", image: "/images/humbug.jpg", focal: "38% 38%" },
  { slug: "pop-playrooms", title: "Pop Playrooms", image: "/images/pop-playrooms.jpg", focal: "50% 34%" },
  { slug: "mighty-adventures", title: "Mighty Adventures", image: "/images/mighty-adventures.jpg", focal: "62% 44%" },
  { slug: "t2-design-solutions", title: "T2 Design Solutions", image: "/images/t2-design-solutions.jpg", focal: "50% 45%" },
  { slug: "levels", title: "Levels @ Maj", image: "/images/levels.jpg", focal: "58% 48%" },
  { slug: "mama-bamboo", title: "Mama Bamboo", image: "/images/mama-bamboo.jpg", focal: "50% 34%" },
] as const;

const radiusFactors = [1, 0.94, 1.06, 0.97, 1.03, 0.95];
const rotations = [-10, 9, 6, -6, 5, 8];
const growth = [
  0.419, 0.534, 0.611, 0.67, 0.718, 0.758, 0.792, 0.821, 0.846, 0.868,
  0.888, 0.905, 0.92, 0.933, 0.944, 0.955, 0.964, 0.971, 0.978, 0.983,
  0.988, 0.992, 0.995, 0.997, 0.999, 1,
];

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function growthAt(progress: number) {
  const index = clamp(progress) * (growth.length - 1);
  const lo = Math.floor(index);
  const hi = Math.min(growth.length - 1, lo + 1);
  return lerp(growth[lo], growth[hi], index - lo);
}

export function HomeHero() {
  const pinRef = useRef<HTMLElement>(null);
  const winHeartsRef = useRef<HTMLSpanElement>(null);
  const marketsRef = useRef<HTMLSpanElement>(null);
  const ampRef = useRef<HTMLSpanElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !pinRef.current) return;

    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !pinRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const section = pinRef.current;

      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      (window as Window & { __sdReleaseScroll?: () => void }).__sdReleaseScroll?.();

      const ampOffset = { x: 0, y: 0 };
      const measureAmp = () => {
        const amp = ampRef.current;
        if (!amp) return;
        const previous = amp.style.transform;
        amp.style.transform = "none";
        const rect = amp.getBoundingClientRect();
        amp.style.transform = previous;
        ampOffset.x = window.innerWidth / 2 - (rect.left + rect.width / 2);
        ampOffset.y = window.innerHeight / 2 - (rect.top + rect.height / 2);
      };

      let measureFrame = 0;
      const scheduleMeasure = () => {
        cancelAnimationFrame(measureFrame);
        measureFrame = requestAnimationFrame(measureAmp);
      };
      scheduleMeasure();
      document.fonts?.ready?.then(scheduleMeasure).catch(() => {});
      window.addEventListener("resize", scheduleMeasure);

      let progress = 0;
      let deckOpacity = 0;

      const applyHeadline = () => {
        const reveal = smooth(progress / 0.16);
        const ampFade = progress <= 0.82 ? 0 : smooth((progress - 0.82) / 0.18);
        const deckFade = 1 - smooth((progress - 0.94) / 0.06);

        if (winHeartsRef.current) {
          winHeartsRef.current.style.opacity = String(1 - reveal);
          winHeartsRef.current.style.transform =
            `translate3d(${lerp(0, -70, reveal)}px, ${lerp(0, -150, reveal)}px, 0)`;
        }
        if (marketsRef.current) {
          marketsRef.current.style.opacity = String(1 - reveal);
          marketsRef.current.style.transform =
            `translate3d(${lerp(0, 80, reveal)}px, ${lerp(0, 160, reveal)}px, 0)`;
        }
        if (subcopyRef.current) {
          subcopyRef.current.style.opacity = String(1 - Math.min(1, reveal / 0.6));
        }
        if (scrollCueRef.current) {
          scrollCueRef.current.style.opacity = String(1 - Math.min(1, reveal / 0.4));
        }
        if (ampRef.current) {
          ampRef.current.style.transform =
            `translate3d(${ampOffset.x * reveal}px, ${ampOffset.y * reveal}px, 0)`;
          ampRef.current.style.opacity = String(1 - ampFade);
        }
        deckOpacity = deckFade;
      };

      const applyCards = () => {
        const elapsed = 1560 * progress;
        const viewport = { x: window.innerWidth, y: window.innerHeight };
        const cardSize =
          viewport.x < 700
            ? Math.min(Math.max(0.42 * viewport.x, 150), 210)
            : Math.min(Math.max(0.19 * viewport.x, 200), 300);

        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          const angle =
            (2 * Math.PI * index) / 6 +
            (1 - Math.exp(-elapsed / 230)) * 2 * Math.PI +
            (elapsed / 12000) * 2 * Math.PI;
          const wave = Math.sin(angle);
          const local = elapsed - 55 * index;
          const life = Math.min(smooth(local / 150), smooth((1560 - elapsed) / 170));
          const growthScale = growthAt(life) * (life > 0 ? 1 : 0);
          const opacity = deckOpacity * life;
          const radius = radiusFactors[index % radiusFactors.length];

          const x = 1.14 * Math.cos(angle) * radius * cardSize;
          const y = 0.84 * Math.sin(angle) * radius * cardSize;
          const scale = lerp(0.86, 1.04, (wave + 1) / 2) * growthScale;

          card.style.opacity = String(opacity > 0.001 ? opacity : 0);
          card.style.zIndex = String(20 + Math.round((wave + 1) * 14));
          card.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
          card.style.transform =
            `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotations[index]}deg)`;
        });
      };

      applyHeadline();
      applyCards();

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${1.85 * window.innerHeight}`,
        pin: true,
        scrub: 0.32,
        anticipatePin: 1,
        onUpdate(self) {
          progress = self.progress;
          applyHeadline();
          applyCards();
        },
        onRefresh() {
          measureAmp();
          applyHeadline();
          applyCards();
        },
      });

      cleanup = () => {
        trigger.kill();
        window.removeEventListener("resize", scheduleMeasure);
        cancelAnimationFrame(measureFrame);
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section ref={pinRef} className={c.pinTarget}>
      <div className={c.content}>
        <h1 className={c.headline}>
          <span ref={winHeartsRef} className={`${c.line} ${c.winHearts}`}>Win hearts</span>
          <span className={c.line}>
            <span ref={ampRef} className={c.amp}>&</span>{" "}
            <span ref={marketsRef} className={c.markets}>markets</span>
          </span>
        </h1>
        <p ref={subcopyRef} className={c.subcopy}>
          A creative strategy and design studio<br />
          for the <strong>experience</strong> economy.
        </p>
      </div>

      <div ref={scrollCueRef} className={c.scrollCue} aria-hidden="true">
        <span className={c.scrollTick} />
        <span className={c.scrollLabel}>Scroll</span>
      </div>

      <div className={c.layer} aria-hidden="true">
        {orbitProjects.map((project, index) => (
          <div
            key={project.slug}
            className={c.slot}
            ref={(node) => { cardRefs.current[index] = node; }}
          >
            <Link className={c.card} aria-label={project.title} href={`/work/${project.slug}`}>
              <span className={c.imageWrap}>
                <img
                  alt=""
                  className={c.image}
                  src={project.image}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, objectPosition: project.focal }}
                />
              </span>
              <span className={c.scrim} aria-hidden="true" />
              <h3 className={c.title}>{project.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
