# Smith & Devil — homepage

Implementation of the approved homepage design. Structure, order and
proportions follow the supplied full-page visual; content, typography and the
scroll interaction follow the written build brief; every image and the logo
are the real supplied Smith & Devil assets.

Page order, top to bottom:

```
REAL LOGO + MENU
→ stacked "Win hearts / & markets"
→ scroll: words leave, red & pins centre
→ six real projects appear in sequence around it
→ deck clears, & releases
→ four large horizontal project panels
→ editorial statement
→ client strip
→ CTA
→ footer
```

## The hero interaction

Two drivers, deliberately separate:

1. **Scroll starts it.** A pinned, scrubbed GSAP ScrollTrigger moves "Win
   hearts" and "markets" away and translates the red `&` — position only,
   never resized, rotated, distorted or redrawn — from its natural inline
   position to the exact centre of the pinned viewport.
2. **The deck then runs on its own clock.** Six real projects (Humbug, Pop
   Playrooms, Mighty Adventures, T2, Levels, Mama Bamboo) appear in sequence
   around the "&" and keep going whether or not the user is still scrolling.
   Scroll can neither pause nor stutter it.
3. A short further scroll fades the deck and the `&` and releases the pin
   into the four project panels. The pin is only 1.4 screen-heights long,
   because the deck doesn't need scroll distance to play.

The deck's motion is **not designed — it is measured**. Rendering the supplied
Jitter Lottie (1080x1080, 60fps, 72-frame loop) with lottie-web and reading
each card layer's composed transform matrix on every frame showed that the
motion is nothing like an orbit or a shuffle:

- Cards **do not travel**. Each has a fixed position and a fixed tilt.
- Those positions sit on an ellipse: rx 283px, ry 213px in a comp where the
  card is 375px wide, so 0.755 and 0.568 card widths.
- A card **pops in at 41.9% of full size and swells to 100% over 433ms** on a
  hard ease-out, then cuts out instantly. Opacity is binary throughout — there
  is no fade in and no fade out.
- A new card starts **every 150ms**, stepping clockwise around the ellipse,
  which puts about three on screen at once.

`orbitMath.ts` replays those numbers, including the growth curve baked as its
26 measured samples rather than fitted to an easing function. Two deliberate
deviations, both documented in that file: the Lottie has eight stations and we
have six projects, so the six sit evenly on the same ellipse; and its cards are
square while ours are 4:5, so the ring's vertical radius carries the same 25%
so a card clears the "&" by the margin the file gives it.

`scripts/verify-against-lottie.mjs` asserts the built page against the measured
values — stagger, lifetime, entry scale, cards visible, and that position and
tilt never change — by scrolling in and then sitting completely still.
`scripts/pace-scrolling.mjs` is the complement: it scrolls steadily through the
pin and checks the sequence never stalls while scrolling.

## Architecture

- `src/lib/projects.ts` — the single content model. All six projects with one
  real source asset each plus the focal/crop data every presentation needs;
  `panelProjects` is the four-project subset that gets a large horizontal
  panel below the fold, per the approved visual. Also the client list and the
  footer service list. Nothing about a project is hard-coded into a component,
  so the Work index and `/work/[slug]` pages can read the same array.
- `src/lib/orbitMath.ts` — pure functions, no DOM and no GSAP. Scroll
  `progress` in for the headline and the deck's master opacity; elapsed
  milliseconds in for the deck itself. Every value measured off the Lottie
  lives here — ring radii, stagger, lifetime, tilts, growth curve — so the
  motion is tunable in one place without touching the animation driver.
- `src/hooks/useHeroOrbitSequence.ts` — the only place that touches
  ScrollTrigger, and the owner of the deck's rAF clock. Writes each computed
  frame straight to DOM styles via refs rather than through React state, so
  neither the scrub nor the deck's own clock causes a re-render.
- `src/hooks/useAmpersandAnchor.ts` — measures how far the `&` has to travel
  from its live, in-flow position to the viewport centre. Re-measures on
  mount, resize and webfont load, since the headline re-lays-out at every
  breakpoint.
- `src/components/` — `Header`, `Hero`, `OrbitSection`, `ProjectCard`
  (orbit), `ProjectPanel` / `ProjectPanels`, `EditorialStatement`,
  `ClientStrip`, `CTASection`, `Footer`.

## Images: one asset, multiple presentations

Each project has exactly one image file. Components crop it:

- Hero deck — 4:5 portrait, `object-fit: cover` at `focalPoint`.
- Homepage panel — wide landscape at `panelFocalPoint`. Two optional knobs
  handle assets that don't crop cleanly to that ratio, both pure CSS:
  `panelScale` + `panelOrigin` push further into a cover crop (Humbug, so
  Santa clears the copy scrim), and `panelFit: 'contain'` + `panelBackground`
  sit an artwork whole on its own field (T2, whose loop shouldn't be cut).

No manually re-cropped duplicate files exist, and none should be created.

## Typography

Bodoni Moda is self-hosted via `@fontsource-variable/bodoni-moda` (both the
upright and italic axes) rather than `next/font/google` — the build
environment has no route to Google Fonts, and a silent serif substitution is
exactly what the brief rules out. Declared explicitly per element so nothing
inherits the UI sans by accident:

- Headline — Bodoni Moda 400, upright.
- `&` — Bodoni Moda 400, upright, red. Not italic.
- Subhead — Bodoni Moda 400 italic.
- MENU, project intros, labels, nav, metadata — Helvetica Neue / Arial.

## Assets and open items

Real: the Smith & Devil logo (rendered directly, never typeset, recoloured or
re-proportioned) and all six project photographs.

Two things are deliberately not fabricated:

- **Client logos.** None have been supplied, so `ClientStrip` renders each
  client as a named slot in plain UI text — not a typeset lookalike. Drop a
  file into `clients[].logo` in `lib/projects.ts` and that slot switches to
  the real logo with no other change.
- **Social URLs.** Instagram and LinkedIn are listed in the footer but not
  linked, pending the real account URLs.

The brief's explicit `#ff0000` is used for the hero `&` and the red words in
the statement and CTA (`--sd-red` in `globals.css`). The logo file's own red
is `#e20613` and is left untouched inside the asset.

All six project images are used: the deck shows all six, and Humbug, Pop
Playrooms, Mighty Adventures and T2 also get a large panel below the fold.
Levels and Mama Bamboo additionally appear in the client strip.

## Running it

```bash
npm install
npm run dev                       # dev server with HMR
npm run build && npm run start    # production build, served locally
```

## Deploying to Netlify

`netlify.toml` is set up with `@netlify/plugin-nextjs` — connect the repo and
Netlify builds it as a standard Next.js app (SSR + `next/image` optimisation
via Netlify's Next runtime, not a static export). No environment variables.

## Scripts

- `scripts/verify.mjs` — steps through the pinned sequence forward and in
  reverse with screenshots, plus reduced-motion and mobile passes.
- `scripts/fullpage.mjs` — full-page desktop and mobile screenshots for
  comparing against the approved visual.
- `scripts/verify-against-lottie.mjs` — asserts the built page against the
  values measured out of the supplied Lottie.
- `scripts/pace-scrolling.mjs` — scrolls through the pin and checks the
  sequence never stalls mid-scroll.
- `scripts/record.mjs` — records a real-timing video of the whole page.

## Accessibility & performance

- `prefers-reduced-motion: reduce` skips the pin and the deck entirely — no
  timer is ever started. The hero is an ordinary self-sized section and the
  projects follow immediately as the normal stacked panels.
- The deck's clock only runs while the hero is actually on screen and the
  tab is visible, so a page scrolled past the hero isn't paying for seven DOM
  writes a second.
- The deck layer is `aria-hidden` (transient and animated); the projects are
  always reachable as semantic links in the panels below.
- Transform/opacity only — no layout properties are animated.
- The six deck images are preloaded since they're needed on the first
  scroll; four of them are the same files the panels use, so nothing is
  fetched twice. Lower-page imagery lazy-loads.
- No horizontal overflow from 320px up.

## Not built yet

`/work`, `/work/[slug]`, `/studio`, `/services` and `/contact` don't exist —
links to them 404. The header "Menu" button is a static label per the brief's
header composition, with no overlay behind it yet.
