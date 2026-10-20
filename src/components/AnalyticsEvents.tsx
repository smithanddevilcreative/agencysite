"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { trackGA4Event } from "@/lib/analytics";

export function AnalyticsEvents() {
  const pathname = usePathname();

  // Project and service views include a stable slug for GA4 reporting.
  useEffect(() => {
    const project = pathname.match(/^\/work\/([^/]+)\/?$/);
    const service = pathname.match(/^\/services\/([^/]+)\/?$/);
    if (project) trackGA4Event("project_view", { project_name: project[1] });
    if (service) trackGA4Event("service_view", { service_name: service[1] });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const url = new URL(href, window.location.href);
      const location = window.location.pathname;
      const label = (link.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);
      if (url.protocol === "mailto:") {
        trackGA4Event("email_click", { link_location: location });
      } else if (url.protocol === "tel:") {
        trackGA4Event("phone_click", { link_location: location });
      } else if (/calendly\.com$/i.test(url.hostname) || /\.calendly\.com$/i.test(url.hostname)) {
        trackGA4Event("book_call_click", { link_location: location });
      } else if (url.origin === window.location.origin && url.pathname.replace(/\/$/, "") === "/contact") {
        trackGA4Event("contact_cta_click", { link_location: location, link_text: label });
      }
    }
    // mailto: can launch an email application immediately after click.
    // Capture pointer intent earlier, leaving click as the keyboard fallback.
    let lastEmailPointerTime = 0;
    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href^='mailto:']");
      if (!link) return;
      lastEmailPointerTime = Date.now();
      trackGA4Event("email_click", { link_location: window.location.pathname });
    }
    function handleClickWithKeyboardFallback(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("a[href^='mailto:']")) {
        if (Date.now() - lastEmailPointerTime < 1500) return;
      }
      handleClick(event);
    }
    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("click", handleClickWithKeyboardFallback, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("click", handleClickWithKeyboardFallback, true);
    };
  }, []);

  return null;
}
