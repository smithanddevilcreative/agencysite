"use client";

import { useEffect } from "react";

type VimeoPlayer = {
  getVideoWidth(): Promise<number>;
  getVideoHeight(): Promise<number>;
  unload(): Promise<void>;
};

declare global {
  interface Window {
    Vimeo?: { Player: new (iframe: HTMLIFrameElement) => VimeoPlayer };
  }
}

/** Reads each Vimeo video's native dimensions and sizes its gallery frame accordingly. */
export function AutoVideoSizing() {
  useEffect(() => {
    const frames = Array.from(document.querySelectorAll<HTMLIFrameElement>(".sd-gallery-video iframe"))
      .filter((frame) => {
        try { return new URL(frame.src).hostname === "player.vimeo.com"; }
        catch { return false; }
      });
    if (!frames.length) return;

    let active = true;
    const size = async () => {
      if (!active || !window.Vimeo) return;
      await Promise.all(frames.map(async (frame) => {
        try {
          const player = new window.Vimeo!.Player(frame);
          const [width, height] = await Promise.all([
            player.getVideoWidth(), player.getVideoHeight(),
          ]);
          if (active && width > 0 && height > 0 && Number.isFinite(width / height)) {
            const wrapper = frame.closest<HTMLElement>(".sd-gallery-video");
            if (wrapper) wrapper.style.aspectRatio = `${width} / ${height}`;
          }
        } catch { /* Preserve fallback if dimensions are unavailable. */ }
      }));
    };

    if (window.Vimeo) { void size(); }
    else {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.addEventListener("load", () => { void size(); }, { once: true });
      document.head.appendChild(script);
    }
    return () => { active = false; };
  }, []);
  return null;
}
