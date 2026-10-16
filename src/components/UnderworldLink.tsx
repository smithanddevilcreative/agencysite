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
      <span className="sd-footer-underworld__default">Enter the creative underworld →</span>
      <span className="sd-footer-underworld__hover" aria-hidden="true">Are you sure?</span>
      <span className="sd-footer-underworld__armed">Last chance to turn back →</span>
    </button>
  );
}
