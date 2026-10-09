# Sanity workflow for the 2026 visual rebuild

## Sources of truth

- The recovered live website source is the copy/content source of truth during the redesign.
- Figma is the visual-system and layout source of truth.
- Sanity becomes the ongoing editable content source for projects and journal/news content.
- `source-recovered-clean` remains the untouched recovery baseline.
- `visual-rebuild-2026` is the working redesign branch.

## Current Sanity state

Project: Smith & Devil Creative Studio
Project ID: `6y2dn5q3`
Dataset: `production`
Workspace: `website`

The existing schema already contains:
- project
- service
- homePage
- servicesPage
- studioPage
- contactPage
- siteSettings

There are 13 project drafts and 147 image assets already in Sanity.

Most legacy case-study imagery has therefore already been uploaded. Do not manually upload it again.

The current gaps are:
- Draughts has no card/hover/lead/gallery media assigned.
- Allstars Sports Bars has no card/hover/lead/gallery media assigned.
- Allstars Sports Bowl has no card/hover/lead/gallery media assigned.
- Homepage featuredProjects/clientLogos are not yet populated.
- There is no journal/blog document type yet.
- Existing content is draft-only; publishing must happen only after content parity is checked.

## Rebuild rule

Do not switch rendered website content to Sanity merely because a field exists.

For each route:
1. preserve the recovered site's current wording;
2. apply the Figma visual system;
3. migrate/verify the corresponding content in Sanity;
4. compare Sanity output to the recovered source;
5. only then point the route at Sanity.

This avoids accidental copy regression from incomplete CMS drafts.

## Project editing model

A project should be addable in Sanity without code changes.

The existing project schema already supports:
- title / slug / category / order
- card, hover and lead imagery with hotspots
- summary
- Portable Text case study
- services
- results
- mixed-media gallery
- Vimeo / Skiv hero video
- SEO

Gallery items support image, Vimeo and Skiv media, plus display formats such as full, half, laptop, phone and Instagram grid.

The new website templates should interpret those fields through reusable layout components rather than storing page-specific HTML in Sanity.

## Images

Use Sanity image assets and hotspot/crop metadata for future content.

For existing projects, reuse the 147 assets already present. Where a recovered local image is missing from Sanity, migrate it once by script/API and store the resulting asset reference.

Do not make the editor create separate desktop/mobile copies unless the design genuinely requires distinct artwork.

## Journal / news

The current deployed schema has no blog/journal type.

Before launch add a lightweight journal schema with:
- title
- slug
- publish date
- standfirst
- hero image
- Portable Text body
- optional related projects
- SEO

Do not alter the currently deployed Studio schema until its ownership/deployment path is confirmed. The project currently exposes both an MCP-managed schema and a Studio-deployed schema under the same workspace name.

## Deployment safety

No production Netlify branch should be changed until:
- redesigned routes pass visual QA,
- current copy has parity,
- Sanity content parity is checked,
- forms/navigation work,
- a separate preview is approved.
