# Smith & Devil source recovery

The original editable Next.js source was lost. This branch was created from the latest known-good deployed snapshot: `strike-rework-footer-2`.

## Recovery method

1. Preserve the deployed HTML, CSS and assets as the immutable visual/content reference.
2. Reintroduce a real Next.js `src/` source tree.
3. First-pass routes render the last deployed page markup from the surviving HTML snapshots.
4. Rebuild client-side behaviour and shared components against that reference.
5. Compare every route before this branch is allowed anywhere near production.
6. Only after parity, replace snapshot-backed pages with structured components/data and connect Sanity.

## Important

The live site is not changed by work on this branch.

The surviving README documents the original architecture:
- `src/app` routes
- `src/components` shared components
- `src/lib/projects.ts` content model
- GSAP/ScrollTrigger homepage sequence
- shared Header/Footer and project components

The compiled snapshot remains in this branch only as a recovery reference and will be removed after parity is signed off.
