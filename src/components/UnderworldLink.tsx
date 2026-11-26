"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function UnderworldLink() {
  const [armed, setArmed] = useState(false);
  const router = useRouter();

  function handleClick() {
    if (!armed) {
      setArmed(true);
      return;
    }

    router.push("/creative-underworld");
  }

  return (
    <button
      type="button"
      className={`sd-footer-underworld${armed ? " is-armed" : ""}`}
      onClick={handleClick}
      aria-label={armed ? "Last chance to turn back" : "Enter the creative underworld"}
    >
      <style jsx global>{`
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
          button.sd-footer-underworld:not(.is-armed) .sd-footer-underworld__default,
          button.sd-footer-underworld.is-armed .sd-footer-underworld__armed {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          button.sd-footer-underworld .sd-footer-underworld__hover { display: none; }
          button.sd-footer-underworld .sd-underworld-arrow { flex-shrink: 0; }
          button.sd-footer-underworld:active { background: rgba(239, 17, 17, .14); }
        }
      `}</style>
      <span className="sd-footer-underworld__default">Enter the creative underworld<span className="sd-underworld-arrow" aria-hidden="true"> →</span></span>
      <span className="sd-footer-underworld__hover" aria-hidden="true">Are you sure?</span>
      <span className="sd-footer-underworld__armed">Last chance to turn back<span className="sd-underworld-arrow" aria-hidden="true"> →</span></span>
    </button>
  );
}
