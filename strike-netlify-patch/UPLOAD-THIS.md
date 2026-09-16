# Smith & Devil launch patch

Upload the CONTENTS of this folder to the root of the `recovered-deploy` branch in `smithanddevilcreative/agencysite`, preserving the folder structure.

This patch does four things:

1. Presents Strike properly without rebuilding the recovered Next.js export:
   - existing Vimeo film remains first
   - menu-on-table image follows it
   - real Strike venue / food / people / play photography follows
2. Gives the Work card a Strike logo still and menu-design hover.
3. Makes the footer black with white text and a white Smith & Devil logo.
4. Keeps Draughts and both Allstars projects in the repository but hides their Work-grid and footer links for now.

It also changes Netlify from `npm run build` / `out` to publishing the recovered static export directly from the repository root. This matters because the recovered branch does not contain the editable Next.js source required to rebuild `out`.

## Netlify

After the files are in GitHub:

- Add a new Netlify site from Git.
- Choose `smithanddevilcreative/agencysite`.
- Set production branch to `recovered-deploy`.
- Netlify should read `netlify.toml`; there should be no build command and the publish directory should be `.`.
- Deploy and check `/`, `/work`, and `/work/strike` before attaching the live domain.

The original static files are untouched. The launch-specific presentation is applied by `netlify/edge-functions/site-overrides.js`, so it can be removed cleanly once the maintainable source version replaces the recovered export.
