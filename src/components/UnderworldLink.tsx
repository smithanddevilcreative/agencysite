"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function UnderworldLink() {
  const [step, setStep] = useState(0);
  const armed = step === 2;
  const router = useRouter();

  function handleClick() {
    const touchLayout = window.matchMedia("(max-width: 767px), (hover: none) and (pointer: coarse)").matches;
    if (step < 2) {
      setStep(touchLayout ? step + 1 : 2);
      return;
    }

    router.push("/creative-underworld");
  }

  return (
    <button
      type="button"
      className={`sd-footer-underworld${armed ? " is-armed" : step === 1 ? " is-confirming" : ""}`}
      onClick={handleClick}
      aria-label={armed ? "Last chance to turn back" : step === 1 ? "Are you sure?" : "Enter the creative underworld"}
    >
      <style jsx global>{`
        .sd-underworld-confirm-arrow { display: none; }
        @media (max-width: 767px), (hover: none) and (pointer: coarse) {
          button.sd-footer-underworld {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            min-height: 48px;
            padding: 12px 14px;
            border: 1px solid currentColor;
            border-radius: 0;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          button.sd-footer-underworld > span { width: 100%; }
          button.sd-footer-underworld:not(.is-armed):not(.is-confirming) .sd-footer-underworld__default,
          button.sd-footer-underworld.is-confirming .sd-footer-underworld__hover,
          button.sd-footer-underworld.is-armed .sd-footer-underworld__armed {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          button.sd-footer-underworld:not(.is-confirming) .sd-footer-underworld__hover,
          button.sd-footer-underworld.is-confirming .sd-footer-underworld__default { display: none; }
          button.sd-footer-underworld .sd-underworld-arrow { flex-shrink: 0; }
          button.sd-footer-underworld .sd-underworld-confirm-arrow { display: inline; flex-shrink: 0; }
          button.sd-footer-underworld:active { background: rgba(239, 17, 17, .14); }
        }
      `}</style>
      <span className="sd-footer-underworld__default">Enter the creative underworld<span className="sd-underworld-arrow" aria-hidden="true"> →</span></span>
      <span className="sd-footer-underworld__hover" aria-hidden="true">Are you sure?<span className="sd-underworld-confirm-arrow" aria-hidden="true"> →</span></span>
      <span className="sd-footer-underworld__armed">Last chance to turn back<span className="sd-underworld-arrow" aria-hidden="true"> →</span></span>
    </button>
  );
}
