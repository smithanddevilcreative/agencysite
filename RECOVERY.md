# Smith & Devil source recovery

The original editable Next.js source was lost. This branch was created from the latest known-good deployed snapshot: `strike-rework-footer-2`.

## Current state

The site is source-backed again.

Recovered into `src/`:
- Home page and GSAP/ScrollTrigger hero interaction
- Work index and project card data
- Studio page
- Services hub
- Five service detail pages
- Contact and Thank You pages
- All thirteen project detail routes
- Shared Header/Menu, Footer, CTA and enquiry form
- Next.js app favicon
- Netlify source build configuration

All recovery commits are validated with a production `npm run build` GitHub Action before they are treated as usable.

## Recovery method

1. Preserve the deployed HTML, CSS and assets as the immutable visual/content reference.
2. Reintroduce a real Next.js `src/` source tree.
3. Rebuild shared components and routes against the last deployed output.
4. Recover interaction values from the compiled JavaScript where necessary rather than approximating them.
5. Keep the old compiled snapshot in the branch as a parity reference until visual checks are complete.
6. Do not point production at this branch until parity has been checked.
7. After parity, remove the obsolete compiled export and old edge-function patches.
8. Connect Sanity only after the recovered source is the accepted master.

## Architecture

- `src/app` — routes
- `src/components` — shared UI and page components
- `src/lib/projects.ts` — Work index content model
- `src/lib/project-pages.ts` — recovered project-detail content and presentation fragments
- `src/lib/service-pages.ts` — service-detail content model
- `public` — generated at build time from the preserved brand/image/font assets

## Known recovery compromise

The project-detail page shell, copy, results and metadata are structured source again.

Some complex case-study gallery/device markup is temporarily stored as recovered HTML fragments inside `src/lib/project-pages.ts`. This keeps the current visual output intact without depending on the old exported route files. It should be refactored into typed gallery/device components after parity, but it is no longer a missing-source problem.

## Deployment

`netlify.toml` now runs:

```
npm run build
```

and publishes `out`, the Next.js static export.

The live site has not been changed during recovery.
