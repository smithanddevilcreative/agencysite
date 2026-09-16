const OVERRIDES = `
<style id="sd-launch-overrides">
/* Launch override: black footer */
.Footer-module__S6Hkya__footer {
  background: #050505 !important;
  border-top-color: #050505 !important;
  color: #fff !important;
}
.Footer-module__S6Hkya__logoLink {
  position: relative !important;
}
.Footer-module__S6Hkya__logo {
  filter: brightness(0) invert(1) !important;
}
.Footer-module__S6Hkya__logoLink::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url('/brand/smith-and-devil-logo.png') center / contain no-repeat;
  filter: url(#sd-red-only-filter);
  pointer-events: none;
}
.Footer-module__S6Hkya__narrative,
.Footer-module__S6Hkya__copyright,
.Footer-module__S6Hkya__colTitle,
.Footer-module__S6Hkya__link,
.Footer-module__S6Hkya__pending {
  color: #fff !important;
}

/* Homepage orbit cards: remove the baked-in label area and run artwork full bleed. */
.ProjectCard-module__U_VZua__title {
  display: none !important;
}
.ProjectCard-module__U_VZua__image {
  transform: scale(1.26) !important;
  transform-origin: 50% 0 !important;
}
.ProjectCard-module__U_VZua__scrim {
  display: none !important;
}

/* Homepage featured projects: one consistent image + copy system. */
.ProjectPanel-module__8b2_aa__panel {
  --sd-project-copy-h: 220px;
  aspect-ratio: auto !important;
  height: clamp(650px, 55vw, 720px) !important;
  min-height: 0 !important;
  background: var(--sd-bg) !important;
}
.ProjectPanel-module__8b2_aa__image {
  top: 0 !important;
  right: 0 !important;
  bottom: auto !important;
  left: 0 !important;
  width: 100% !important;
  height: calc(100% - var(--sd-project-copy-h)) !important;
  transition: none !important;
}
.ProjectPanel-module__8b2_aa__scrim {
  display: none !important;
}
.ProjectPanel-module__8b2_aa__copy {
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  top: auto !important;
  bottom: 0 !important;
  width: 100% !important;
  height: var(--sd-project-copy-h) !important;
  padding: 30px clamp(28px, 3.2vw, 46px) !important;
  transform: none !important;
  background: var(--sd-bg) !important;
  color: var(--sd-ink) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  gap: 12px !important;
}
.ProjectPanel-module__8b2_aa__title {
  color: var(--sd-ink) !important;
  font-size: clamp(28px, 2.6vw, 38px) !important;
  line-height: 1.02 !important;
}
.ProjectPanel-module__8b2_aa__intro {
  color: #5a5752 !important;
  max-width: 680px !important;
  font-size: clamp(14px, 1.2vw, 17px) !important;
  line-height: 1.5 !important;
}
.ProjectPanel-module__8b2_aa__cta {
  color: var(--sd-ink) !important;
  margin-top: 4px !important;
}
.ProjectPanels-module__uRfApW__stack {
  gap: clamp(24px, 2.4vw, 34px) !important;
}
.ProjectPanel-module__8b2_aa__panel:hover .ProjectPanel-module__8b2_aa__image,
.ProjectPanel-module__8b2_aa__panel:focus-visible .ProjectPanel-module__8b2_aa__image {
  transform: scale(var(--panel-scale,1)) !important;
}
.ProjectPanel-module__8b2_aa__arrow {
  transition: none !important;
}
.ProjectPanel-module__8b2_aa__panel:hover .ProjectPanel-module__8b2_aa__arrow,
.ProjectPanel-module__8b2_aa__panel:focus-visible .ProjectPanel-module__8b2_aa__arrow {
  transform: none !important;
}
@media (max-width: 800px) {
  .ProjectPanel-module__8b2_aa__panel {
    --sd-project-copy-h: 240px;
    height: clamp(570px, 108vw, 690px) !important;
  }
  .ProjectPanel-module__8b2_aa__copy {
    padding: 26px clamp(22px, 5vw, 34px) !important;
  }
  .ProjectPanel-module__8b2_aa__title {
    font-size: clamp(27px, 6vw, 34px) !important;
  }
  .ProjectPanel-module__8b2_aa__intro {
    font-size: clamp(14px, 3.6vw, 16px) !important;
    line-height: 1.48 !important;
  }
}

/* Work cards: let the artwork do the talking; remove the project/brand name overlay. */
.WorkCard-module__bi6E2q__title {
  display: none !important;
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

const FOOTER_LOGO_FILTER = `
<svg aria-hidden="true" width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden">
  <filter id="sd-red-only-filter" color-interpolation-filters="sRGB">
    <feColorMatrix in="SourceGraphic" result="redMask" type="matrix" values="0 0 0 0 1  0 0 0 0 0  0 0 0 0 0  1 -1 0 0 0" />
    <feComponentTransfer in="redMask" result="redMaskStrong">
      <feFuncA type="linear" slope="4" intercept="0" />
    </feComponentTransfer>
    <feFlood flood-color="#ff0000" result="brandRed" />
    <feComposite in="brandRed" in2="redMaskStrong" operator="in" result="redByColour" />
    <feComposite in="redByColour" in2="SourceAlpha" operator="in" />
  </filter>
</svg>`;

export default async function siteOverrides(_request, context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) return response;

  let html = await response.text();
  if (!html.includes('id="sd-launch-overrides"')) {
    html = html.replace("</head>", `${OVERRIDES}</head>`);
  }
  if (!html.includes('id="sd-red-only-filter"')) {
    html = html.replace("</body>", `${FOOTER_LOGO_FILTER}</body>`);
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
