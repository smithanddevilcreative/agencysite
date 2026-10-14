"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type ServiceOrbitItem = {
  title: string;
  slug: string;
  image: string;
};

const rotations = [-4, 4, 3, -4, 2];
const startAngles = [-2.45, -1.45, -0.18, 1.18, 2.45];

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (v: number) => {
  const t = clamp(v);
  return t * t * (3 - 2 * t);
};

export function ServicesOrbit({ services }: { services: readonly ServiceOrbitItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const ampRef = useRef<HTMLSpanElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !sectionRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const section = sectionRef.current;

      const render = (progress: number) => {
        const rect = section.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const mobile = vw < 700;
        const rx = mobile
          ? Math.min(vw * 0.32, 145)
          : Math.min(Math.max(vw * 0.27, 250), 470);
        const ry = mobile
          ? Math.min(Math.max(vh * 0.24, 170), 230)
          : Math.min(Math.max(vh * 0.28, 190), 320);
        const cardSize = mobile
          ? Math.min(Math.max(vw * 0.27, 104), 132)
          : Math.min(Math.max(vw * 0.18, 190), 270);

        const turn = progress * Math.PI * 1.15;
        const intro = smooth(progress / 0.1);
        const outro = 1 - smooth((progress - 0.9) / 0.1);
        const life = Math.min(intro, outro);

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const angle = startAngles[index] + turn;
          const depth = (Math.sin(angle) + 1) / 2;
          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;
          const scale = (0.9 + depth * 0.13) * life;
          card.style.width = `${cardSize}px`;
          card.style.opacity = String(life);
          card.style.zIndex = String(10 + Math.round(depth * 20));
          card.style.transform =
            `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotations[index]}deg)`;
        });

        if (ampRef.current) {
          ampRef.current.style.opacity = String(Math.min(1, intro * 1.3));
          ampRef.current.style.transform = "translate(-50%, -50%)";
        }
      };

      render(0);

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * 1.45}`,
        pin: true,
        scrub: 0.12,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate(self) {
          render(self.progress);
        },
        onRefresh(self) {
          render(self.progress);
        },
      });

      cleanup = () => trigger.kill();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section ref={sectionRef} className="sd-services-orbit" aria-label="Our services">
      <span ref={ampRef} className="sd-services-orbit-amp" aria-hidden="true">&amp;</span>
      {services.map((service, index) => (
        <div
          key={service.slug}
          className="sd-services-orbit-slot"
          ref={(node) => { cardRefs.current[index] = node; }}
        >
          <Link className="sd-services-orbit-card" href={`/services/${service.slug}`}>
            <img alt="" src={service.image} />
            <span>{service.title}</span>
          </Link>
        </div>
      ))}
    </section>
  );
}
