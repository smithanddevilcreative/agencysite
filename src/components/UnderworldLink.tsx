"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const labels = ["Enter the creative underworld", "Are you sure?", "Last chance to turn back"];
const touchQuery = "(max-width: 767px), (hover: none) and (pointer: coarse)";

export function UnderworldLink() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  function handleClick() {
    if (step === 2) {
      router.push("/creative-underworld");
      return;
    }
    setStep(window.matchMedia(touchQuery).matches ? step + 1 : 2);
  }

  return (
    <button
      type="button"
      className={`sd-footer-underworld${step === 2 ? " is-armed" : ""}`}
      onClick={handleClick}
      aria-label={labels[step]}
    >
      <style jsx global>{`
        button.sd-footer-underworld > .sd-underworld-mobile { display: none; }
        @media ${touchQuery} {
          button.sd-footer-underworld {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            min-height: 64px;
            padding: 12px 14px;
            border: 1px solid currentColor;
            border-radius: 0;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          button.sd-footer-underworld > .sd-footer-underworld__default,
          button.sd-footer-underworld > .sd-footer-underworld__hover,
          button.sd-footer-underworld > .sd-footer-underworld__armed {
            display: none !important;
          }
          button.sd-footer-underworld > .sd-underworld-mobile {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            gap: 12px;
            width: 100%;
          }
          button.sd-footer-underworld .sd-underworld-mobile-label {
            min-width: 0;
            overflow-wrap: normal;
          }
          button.sd-footer-underworld:active { background: rgba(239, 17, 17, .14); }
        }
      `}</style>
      <span className="sd-footer-underworld__default">Enter the creative underworld →</span>
      <span className="sd-footer-underworld__hover" aria-hidden="true">Are you sure?</span>
      <span className="sd-footer-underworld__armed">Last chance to turn back →</span>
      <span className="sd-underworld-mobile" aria-hidden="true">
        <span className="sd-underworld-mobile-label">{labels[step]}</span>
        <span>→</span>
      </span>
    </button>
  );
}
