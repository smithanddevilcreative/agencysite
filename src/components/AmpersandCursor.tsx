"use client";

import { useEffect, useRef } from "react";

export function AmpersandCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let visible = false;

    const paint = () => {
      frame = 0;
      const el = cursorRef.current;
      if (!el) return;
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

  return <img ref={cursorRef} className="sd-amp-cursor" src="/brand/cursor-ampersand.png" alt="" aria-hidden="true" />;
}
