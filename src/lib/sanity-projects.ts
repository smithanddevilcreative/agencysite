import { renderGalleryRows, type GalleryRow } from "./gallery-rows";
import { videoEmbedUrl } from "./gallery-media";
import { sanityQuery } from "@/lib/sanity";
import { projects as fallbackCards, type ProjectCard } from "@/lib/projects";
import { projectPages, type ProjectPageData } from "@/lib/project-pages";

type SanityMetric = { value?: string | null; label?: string | null };

type SanityGalleryItem = {
  kind?: "image" | "vimeo" | "skiv" | null;
  format?: "standard" | "full" | "half" | "laptop" | "phone" | "instagram-grid" | null;
  imageUrl?: string | null;
  vimeoId?: string | null;
  skivId?: string | null;
  altText?: string | null;
  caption?: string | null;
};

type SanityProject = {
  title?: string | null;
  slug?: string | null;
  category?: string | null;
  displayOrder?: number | null;
  summary?: string | null;
  services?: string[] | null;
  results?: SanityMetric[] | null;
  caseText?: string | null;
  cardImageUrl?: string | null;
  hoverImageUrl?: string | null;
  leadImageUrl?: string | null;
  leadImageFit?: "cover" | "contain" | null;
  heroVideoProvider?: "vimeo" | "skiv" | null;
  heroVimeoId?: string | null;
  heroSkivId?: string | null;
  gallery?: SanityGalleryItem[] | null;
  galleryRows?: GalleryRow[] | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    noIndex?: boolean | null;
  } | null;
};

const CARD_QUERY = `*[_type == "project" && defined(slug.current)] | order(displayOrder asc, title asc){
  title,
  "slug": slug.current,
  category,
  displayOrder,
  "cardImageUrl": cardImage.asset->url,
  "hoverImageUrl": hoverImage.asset->url
}`;

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  category,
  displayOrder,
  summary,
  services,
  results[]{value,label},
  "caseText": pt::text(caseStudy),
  "cardImageUrl": cardImage.asset->url,
  "hoverImageUrl": hoverImage.asset->url,
  "leadImageUrl": leadImage.asset->url,
  leadImageFit,
  heroVideoProvider,
  heroVimeoId,
  heroSkivId,
  galleryRows[]{
    _key, internalName, layout, spaceAbove, spaceBelow, sideMargins,
    items[]{_key, internalName, kind, altText, caption, vimeoId, skivId, "imageUrl": image.asset->url}
  },
  gallery[]{
    kind,
    format,
    altText,
    caption,
    vimeoId,
    skivId,
    "imageUrl": image.asset->url
  },
  seo{title,description,noIndex}
}`;

const focalBySlug = new Map(fallbackCards.map((project) => [project.slug, project.focal]));

export async function getSanityProjectCards(): Promise<ProjectCard[]> {
  try {
    const items = await sanityQuery<SanityProject[]>(CARD_QUERY);
    const cards = items
      .filter((item): item is SanityProject & { slug: string; title: string } => Boolean(item.slug && item.title))
      .map((item) => {
        const fallback = fallbackCards.find((card) => card.slug === item.slug);
        return {
          slug: item.slug,
          title: item.title,
          category: item.category || fallback?.category || "",
          image: item.cardImageUrl || fallback?.image || "",
          rollover: item.hoverImageUrl || fallback?.rollover || item.cardImageUrl || fallback?.image || "",
          focal: focalBySlug.get(item.slug) || "50% 50%",
        };
      })
      .filter((item) => item.image);

    return cards.length ? cards : fallbackCards;
  } catch {
    return fallbackCards;
  }
}

function heroHtml(project: SanityProject, fallback?: ProjectPageData) {
  const provider = project.heroVideoProvider;
  const id = provider === "vimeo" ? project.heroVimeoId : provider === "skiv" ? project.heroSkivId : null;
  if (!provider || !id) return fallback?.heroHtml || "";

  const src = videoEmbedUrl(provider, id);
  if (!src) return fallback?.heroHtml || "";

  return `<div class="StudyVideoEmbed-module__8FDA2W__wrap"><iframe class="StudyVideoEmbed-module__8FDA2W__frame" src="${escapeHtml(src)}" title="${project.title || fallback?.title || "Project"} film" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function galleryHtml(project: SanityProject, fallback?: ProjectPageData) {
  const rows = renderGalleryRows(project.galleryRows, project.title || fallback?.title || "Project");
  if (rows) return rows;
  if (!project.gallery?.length) return fallback?.galleryHtml || "";

  const rendered = project.gallery.map((item, index) => {
    const half = item.format === "half" ? " study-module__vTcG6G__slotHalf" : "";
    const caption = item.caption
      ? `<figcaption class="study-module__vTcG6G__caption">${escapeHtml(item.caption)}</figcaption>`
      : "";
    const title = escapeHtml(item.altText || `${project.title || fallback?.title || "Project"} — ${String(index + 1).padStart(2, "0")}`);

    if (item.kind === "image" && item.imageUrl) {
      return `<figure class="study-module__vTcG6G__slot${half}"><div class="RevealMedia-module__8VxjUa__frame"><img alt="${title}" loading="lazy" width="1400" height="900" style="color:transparent" src="${item.imageUrl}"/></div>${caption}</figure>`;
    }

    const id = item.kind === "vimeo" ? item.vimeoId : item.kind === "skiv" ? item.skivId : null;
    if (!id) return "";

    const src = videoEmbedUrl(item.kind, id);
    if (!src) return "";

    return `<div class="study-module__vTcG6G__slot${half}"><div class="RevealMedia-module__8VxjUa__frame"><div class="StudyVideoEmbed-module__8FDA2W__wrap"><iframe class="StudyVideoEmbed-module__8FDA2W__frame" src="${escapeHtml(src)}" title="${title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>${caption}</div>`;
  }).join("");

  return rendered || fallback?.galleryHtml || "";
}

export async function getSanityProject(slug: string): Promise<{
  project: ProjectPageData | null;
  seo: SanityProject["seo"];
}> {
  const fallback = projectPages[slug];

  try {
    const item = await sanityQuery<SanityProject | null>(PROJECT_QUERY, { slug });
    if (!item?.slug) return { project: fallback || null, seo: null };

    const title = item.title || fallback?.title || slug.replace(/-/g, " ");
    const paragraphs = item.caseText
      ? item.caseText.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean)
      : fallback?.paragraphs || [];

    const results = (item.results || [])
      .filter((result): result is { value: string; label: string } => Boolean(result.value && result.label))
      .map(({ value, label }) => ({ value, label }));

    const leadHtml = item.leadImageUrl
      ? `<img class="sd-lead-image--${item.leadImageFit === "contain" ? "contain" : "cover"}" alt="${escapeHtml(title)}" width="1600" height="1100" style="color:transparent" src="${escapeHtml(item.leadImageUrl)}"/>`
      : fallback?.leadHtml || "";

    const project: ProjectPageData = {
      slug: item.slug,
      title,
      description: item.summary || fallback?.description || "",
      services: item.services?.length ? item.services.join(" | ") : fallback?.services || "",
      results: item.results ? results : fallback?.results || [],
      paragraphs,
      quote: fallback?.quote || null,
      bodyHtml: fallback?.bodyHtml,
      heroHtml: heroHtml(item, fallback),
      leadHtml,
      galleryHtml: galleryHtml(item, fallback),
    };

    return { project, seo: item.seo || null };
  } catch {
    return { project: fallback || null, seo: null };
  }
}

export async function getSanityProjectSlugs(): Promise<string[]> {
  try {
    const items = await sanityQuery<{ slug?: string | null }[]>(
      `*[_type == "project" && defined(slug.current)] | order(displayOrder asc){"slug": slug.current}`,
    );
    const slugs = items.map((item) => item.slug).filter((slug): slug is string => Boolean(slug));
    return slugs.length ? slugs : Object.keys(projectPages);
  } catch {
    return Object.keys(projectPages);
  }
}
