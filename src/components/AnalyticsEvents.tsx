"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function track(event: string, attributes: Record<string, string>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...attributes });
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  // Project and service views include a stable slug for GA4 reporting.
  useEffect(() => {
    const project = pathname.match(/^\/work\/([^/]+)\/?$/);
    const service = pathname.match(/^\/services\/([^/]+)\/?$/);
    if (project) track("project_view", { project_name: project[1] });
    if (service) track("service_view", { service_name: service[1] });
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
        track("email_click", { link_location: location });
      } else if (url.protocol === "tel:") {
        track("phone_click", { link_location: location });
      } else if (/calendly\.com$/i.test(url.hostname) || /\.calendly\.com$/i.test(url.hostname)) {
        track("book_call_click", { link_location: location });
      } else if (url.origin === window.location.origin && url.pathname.replace(/\/$/, "") === "/contact") {
        track("contact_cta_click", { link_location: location, link_text: label });
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
