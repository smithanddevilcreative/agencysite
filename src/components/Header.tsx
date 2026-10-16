"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, serviceLinks } from "@/lib/site-data";

const c = {
  header: "Header-module__hBw1pG__header",
  ink: "Header-module__hBw1pG__ink",
  menuOpen: "Header-module__hBw1pG__menuOpen",
  logo: "Header-module__hBw1pG__logo",
  menuButton: "Header-module__hBw1pG__menuButton",
  panel: "Header-module__hBw1pG__panel",
  primaryNav: "Header-module__hBw1pG__primaryNav",
  serviceNav: "Header-module__hBw1pG__serviceNav",
  secondary: "Header-module__hBw1pG__secondary",
  email: "Header-module__hBw1pG__email",
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ink = pathname === "/contact" || pathname === "/thank-you";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={[c.header, ink ? c.ink : "", open ? c.menuOpen : ""].filter(Boolean).join(" ")}>
      <Link className="sd-brand-logo-header-link" aria-label="Smith & Devil home" href="/">
        <img
          alt="Smith & Devil"
          width="800"
          height="123"
          className="sd-brand-logo-header"
          src={open || ink ? "/brand/sd-logo-2026-white.png" : "/brand/sd-logo-2026-black.png"}
        />
      </Link>
      <button
        type="button"
        className={c.menuButton}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className={c.panel} id="site-menu">
          <nav className={c.primaryNav} aria-label="Primary">
            {primaryNav.map(([label, href]) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return <Link href={href} key={href} aria-current={active ? "page" : undefined}>{label}</Link>;
            })}
          </nav>

          <div className={c.secondary}>
            <nav className={c.serviceNav} aria-label="Services">
              {serviceLinks.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>

            <a className={c.email} href="mailto:hello@smithanddevil.com">
              hello@smithanddevil.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
