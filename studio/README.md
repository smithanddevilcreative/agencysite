# Smith & Devil editor

Standalone Sanity Studio for project `6y2dn5q3`, dataset `production`, workspace `website`.
The CLI configuration targets the existing Studio application `gbcuwynmh0ayy4bvbioyl05c`.
It does not create a new project, copy content, or replace documents.

## Local preview

```sh
cd studio
npm ci
npm run dev
```

Sign in with the existing Sanity account. The preview edits the existing production
dataset: use a draft and do not publish test content.

## Validation and deployment

```sh
npm run check
npm run build
npm run deploy
```

Deploy the website change first, then deploy this Studio so all new fields have a
working renderer. Sanity CLI authentication is required for deployment. Never put
tokens in these files. The existing MCP-managed schema has the same workspace
name but is a separate schema source; use this directory and CLI for this Studio.

## Editing a project

- Existing gallery: click an item and fill in **Name in editor**. This is private
  editor metadata; **Caption on website** is a separate optional public field.
- Gallery rows: add a row and select **One item across** or **Two items side by side**.
  Add the required one or two images/videos. Drag rows for page order; drag items
  within a pair for left-to-right order. Pairs stack in the same order on mobile.
- Video: select Vimeo or Skiv and paste a sharing link or video ID. For an
  unlisted Vimeo video, paste its full sharing link including its privacy code.
- Each row has space above, space below and side margins. These apply within the
  existing gallery column, rather than overlapping the project text column.
  Spacing scales down automatically on smaller screens.
- When at least one renderable gallery row exists, rows replace the existing
  gallery on the page. Leave rows empty to continue using the existing gallery.
  Existing media and ordering are never automatically migrated or deleted.
- Publishing still uses the site's existing Sanity-to-Netlify rebuild workflow.

## Recovery provenance

`schemaTypes/recovered.json` preserves every type and field from the project's
`_.schemas.website` snapshot. Its document field inventory was checked against
the Studio-deployed `website` schema. The snapshot cannot serialise functions;
media previews and conditional validation are supplied in `schemaTypes/index.ts`.
Keep existing fields when extending the editor; never use a dataset import or
document replacement to deploy schema changes.
