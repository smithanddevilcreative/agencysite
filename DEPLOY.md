# Deploying smithanddevil.com

The site is a Next.js **static export** — every page is prerendered to plain
HTML, so there is no server to run and nothing to configure at request time.

## Fastest route: drag and drop (no tools, no account setup)

1. Go to <https://app.netlify.com/drop>
2. Drag `smithanddevil-preview.zip` onto the page.
3. You get a live URL in a few seconds — share that for feedback and sign-off.

The URL is a random Netlify subdomain. That is the point at this stage: it is
shareable, it is not indexed by Google, and it costs nothing.

## When you want it to keep updating itself

1. Put the contents of `smithanddevil-source` into a Git repository
   (GitHub, GitLab or Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. `netlify.toml` in the repo already sets the build command and publish
   directory, so accept the defaults.

Every push to the main branch then rebuilds and redeploys automatically, and
every pull request gets its own preview URL.

## Building locally

```
npm install
npm run build     # writes ./out
```

To preview the built site: `npx serve out`.

## Adding the real domain

Netlify → **Domain management → Add a domain** → `smithanddevil.com`, then
follow its DNS instructions. Do this only once the content is signed off, so
the Webflow site stays live until you are ready to switch.

## Things deliberately left for later

- Video snags and typographic passes on the case studies.
- `/services` and `/contact`, and the MENU overlay.
- The client strip: Pop Golf may or may not be the same client as Pop
  Playrooms, and Levels and Pop Playrooms are not in the strip yet.
- The About page copy is the four headlines you supplied; the body copy under
  each is a first draft and expects your edit.

## What is where

```
src/app          the routes: /, /work, /work/[slug], /studio
src/components   Header, Footer, WorkCard, Reveal, RevealMedia, AboutHeadline …
src/lib          projects.ts (all nine case studies), about.ts (About copy)
public           imagery, video posters, brand assets
scripts          the standing checks — verify-work.mjs, verify-about.mjs
```

Copy lives in `src/lib`, not in the markup, so text edits do not mean touching
components.
