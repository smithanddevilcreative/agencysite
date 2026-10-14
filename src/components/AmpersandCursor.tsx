"use client";

import { useEffect, useRef } from "react";

type CursorState = "arrow" | "amp" | "view";

const projectSelector = [
  ".sd-home-project",
  ".WorkCard-module__bi6E2q__card",
  ".ProjectCard-module__U_VZua__card",
  ".sd-services-orbit-card",
].join(",");

const actionSelector = [
  "a[href]",
  "button",
  "[role='button']",
  "summary",
  "input[type='submit']",
].join(",");

const darkSelector = [
  ".Footer-module__S6Hkya__footer",
  ".Header-module__hBw1pG__panel",
  ".services-module__g8J8Uq__serviceIndex",
  ".contact-module__swMWYG__main",
].join(",");

const redSelector = [
  ".CTASection-module__ETvUXq__section",
  ".service-module__T4otXW__enquiry",
  ".services-module__g8J8Uq__enquiry",
].join(",");

const footerSelector = ".Footer-module__S6Hkya__footer";

export function AmpersandCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let visible = false;
    let state: CursorState = "arrow";

    const paint = () => {
      frame = 0;
      const el = cursorRef.current;
      if (!el) return;
      el.dataset.state = state;
      el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      el.style.opacity = visible ? "1" : "0";
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const updateStateAtPoint = () => {
      const target = document.elementFromPoint(x, y);
      if (target?.closest(footerSelector)) state = "amp";
      else if (target?.closest(projectSelector)) state = "view";
      else if (target?.closest(actionSelector)) state = "amp";
      else state = "arrow";

      const el = cursorRef.current;
      if (el) {
        el.dataset.tone = target?.closest(darkSelector) ? "light" : "dark";
        el.dataset.surface = target?.closest(redSelector) ? "red" : "normal";
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      x = event.clientX;
      y = event.clientY;
      visible = true;
      updateStateAtPoint();
      schedule();
    };

    const onViewportChange = () => {
      if (!visible) return;
      updateStateAtPoint();
      schedule();
    };

    const onLeave = () => {
      visible = false;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="sd-cursor" data-state="arrow" data-tone="dark" data-surface="normal" aria-hidden="true">
      <span className="sd-cursor-arrow">↗</span>
      <img className="sd-cursor-amp" alt="" src="/brand/cursor-ampersand.png" />
      <span className="sd-cursor-view">VIEW</span>
    </div>
  );
}
