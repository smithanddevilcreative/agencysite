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

    const onMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      x = event.clientX;
      y = event.clientY;
      visible = true;

      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(projectSelector)) state = "view";
      else if (target?.closest(actionSelector)) state = "amp";
      else state = "arrow";

      const el = cursorRef.current;
      if (el) el.dataset.tone = target?.closest(darkSelector) ? "light" : "dark";

      schedule();
    };

    const onLeave = () => {
      visible = false;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="sd-cursor" data-state="arrow" data-tone="dark" aria-hidden="true">
      <span className="sd-cursor-arrow">↗</span>
      <img className="sd-cursor-amp" src="/brand/cursor-ampersand.png" alt="" />
      <span className="sd-cursor-view">VIEW</span>
    </div>
  );
}
