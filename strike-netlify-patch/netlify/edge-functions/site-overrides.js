const OVERRIDES = `
<style id="sd-launch-overrides">
/* Launch override: black footer */
.Footer-module__S6Hkya__footer {
  background: #050505 !important;
  border-top-color: #050505 !important;
  color: #fff !important;
}
.Footer-module__S6Hkya__logo {
  filter: brightness(0) invert(1) !important;
}
.Footer-module__S6Hkya__narrative,
.Footer-module__S6Hkya__copyright,
.Footer-module__S6Hkya__colTitle,
.Footer-module__S6Hkya__link,
.Footer-module__S6Hkya__pending {
  color: #fff !important;
}

/* Keep Draughts and both Allstars case studies in the repo, but don't surface them for now. */
.work-module__8vBVoq__cards > li:has(> a[href="/work/draughts"]),
.work-module__8vBVoq__cards > li:has(> a[href="/work/allstars-sports-bars"]),
.work-module__8vBVoq__cards > li:has(> a[href="/work/allstars-sports-bowl"]),
.Footer-module__S6Hkya__list > li:has(> a[href="/work/draughts"]),
.Footer-module__S6Hkya__list > li:has(> a[href="/work/allstars-sports-bars"]),
.Footer-module__S6Hkya__list > li:has(> a[href="/work/allstars-sports-bowl"]) {
  display: none !important;
}

/* Strike card: logo still, menu photography on hover. */
a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media > img {
  opacity: 0 !important;
}
a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::before,
a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  transition: opacity .5s cubic-bezier(.77, 0, .175, 1);
}
a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::before {
  background-image: url('/images/work/strike/strike-card.jpg');
  opacity: 1;
}
a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::after {
  background-image: url('/images/work/strike/strike-hover.jpg');
  opacity: 0;
}
a.WorkCard-module__bi6E2q__card[href="/work/strike"]:hover .WorkCard-module__bi6E2q__media::before,
a.WorkCard-module__bi6E2q__card[href="/work/strike"]:focus-visible .WorkCard-module__bi6E2q__media::before {
  opacity: 0;
}
a.WorkCard-module__bi6E2q__card[href="/work/strike"]:hover .WorkCard-module__bi6E2q__media::after,
a.WorkCard-module__bi6E2q__card[href="/work/strike"]:focus-visible .WorkCard-module__bi6E2q__media::after {
  opacity: 1;
}

/* Strike case study: film stays first. Replace old lead with menu work, then show real venue photography. */
.study-module__vTcG6G__lead:has(> img[src$="/images/work/strike/strike_5-long.jpg"]) {
  overflow: visible !important;
  background: transparent !important;
}
.study-module__vTcG6G__lead:has(> img[src$="/images/work/strike/strike_5-long.jpg"]) > img {
  display: none !important;
}
.study-module__vTcG6G__lead:has(> img[src$="/images/work/strike/strike_5-long.jpg"])::before {
  content: "";
  display: block;
  width: 100%;
  aspect-ratio: 1449 / 1086;
  border-radius: var(--radius);
  background: url('/images/work/strike/strike-main.jpg') center / cover no-repeat;
}
.study-module__vTcG6G__lead:has(> img[src$="/images/work/strike/strike_5-long.jpg"])::after {
  content: "";
  display: block;
  width: 100%;
  aspect-ratio: 1000 / 1343;
  margin-top: clamp(14px, 1.8vw, 22px);
  border-radius: var(--radius);
  background: url('/images/work/strike/strike-gallery.webp') center / 100% 100% no-repeat;
}

@media (prefers-reduced-motion: reduce) {
  a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::before,
  a.WorkCard-module__bi6E2q__card[href="/work/strike"] .WorkCard-module__bi6E2q__media::after {
    transition: none;
  }
}
</style>`;

export default async function siteOverrides(_request, context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) return response;

  let html = await response.text();
  if (!html.includes('id="sd-launch-overrides"')) {
    html = html.replace("</head>", `${OVERRIDES}</head>`);
  }

  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const config = { path: "/*" };
