"use client";

import { useLayoutEffect } from "react";

const revealSelector = [
  ".Reveal-module__U2Tp6W__base",
  ".sd-home-project",
  ".sd-home-statement p",
  ".sd-home-clients li",
  ".WorkCard-module__bi6E2q__card",
  ".service-module__T4otXW__capability",
  ".service-module__T4otXW__processItem",
  ".service-module__T4otXW__caseStudy",
  ".studio-module__W4fhGG__card",
  ".CTASection-module__ETvUXq__inner",
  ".study-module__vTcG6G__gallery > *",
].join(",");

const studioHeadline = ".AboutHeadline-module__V-PVZq__headline";
const armed = "AboutHeadline-module__V-PVZq__armed";
const settled = "AboutHeadline-module__V-PVZq__settled";
const punched = "AboutHeadline-module__V-PVZq__punched";

export function MotionController() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    document.documentElement.classList.add("sd-motion");

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    revealEls.forEach((el, index) => {
      el.classList.add("sd-reveal-target");
      el.style.setProperty("--sd-delay", `${(index % 4) * 55}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("sd-inview");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) el.classList.add("sd-inview");
      else revealObserver.observe(el);
    });

    const headlineEls = Array.from(document.querySelectorAll<HTMLElement>(studioHeadline));
    headlineEls.forEach((el) => el.classList.add(armed));

    const headlineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          requestAnimationFrame(() => {
            el.classList.remove(armed);
            el.classList.add(settled);
            window.setTimeout(() => el.classList.add(punched), 420);
          });
          observer.unobserve(el);
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -12% 0px" }
    );

    headlineEls.forEach((el) => headlineObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      headlineObserver.disconnect();
      document.documentElement.classList.remove("sd-motion");
    };
  }, []);

  return null;
}
