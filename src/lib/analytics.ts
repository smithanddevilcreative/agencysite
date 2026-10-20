// Sends events through the Google tag already installed in GTM.
// Does not create a second GA4 configuration or duplicate page views.
export function trackGA4Event(eventName: string, parameters: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };
  gtag("event", eventName, { ...parameters, send_to: "G-JY4CPWQZB7" });
}
