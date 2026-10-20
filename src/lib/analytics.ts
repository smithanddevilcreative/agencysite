// GA4 custom events share the site's existing Google Tag Manager dataLayer.
// A configuration command is queued before the first custom event, because
// GTM may not yet have initialised the GA4 destination during Next.js hydration.
// Suppress the automatic page view here: the published GTM Google tag owns it.
declare global {
  interface Window {
    dataLayer?: Array<unknown>;
  }
}

const MEASUREMENT_ID = "G-JY4CPWQZB7";
let configured = false;

// Google tag commands must use the native arguments object. Pushing a
// rest-parameter Array is not the documented gtag command format.
function gtag(command: string, ...parameters: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  function queue(..._unused: unknown[]) {
    window.dataLayer?.push(arguments);
  }
  queue(command, ...parameters);
}

export function trackGA4Event(eventName: string, parameters: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (!configured) {
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID, { send_page_view: false });
    configured = true;
  }
  gtag("event", eventName, { ...parameters, send_to: MEASUREMENT_ID });
}
