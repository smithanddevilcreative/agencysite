import { sanityQuery } from "@/lib/sanity";
import { projects as fallbackCards, type ProjectCard } from "@/lib/projects";
import { projectPages, type ProjectPageData } from "@/lib/project-pages";

type SanityMetric = { value?: string | null; label?: string | null };

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
  heroVideoProvider?: "vimeo" | "skiv" | null;
  heroVimeoId?: string | null;
  heroSkivId?: string | null;
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
  heroVideoProvider,
  heroVimeoId,
  heroSkivId,
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

function heroHtml(project: SanityProject, fallback: ProjectPageData) {
  const provider = project.heroVideoProvider;
  const id = provider === "vimeo" ? project.heroVimeoId : provider === "skiv" ? project.heroSkivId : null;
  if (!provider || !id) return fallback.heroHtml;

  const src =
    provider === "vimeo"
      ? `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`
      : `https://skiv.com/embed/${id}?search=0&links=0&logo=0&title=0&autoplay=1&loop=1&volume=0&style=no-controls`;

  return `<div class="StudyVideoEmbed-module__8FDA2W__wrap"><iframe class="StudyVideoEmbed-module__8FDA2W__frame" src="${src}" title="${project.title || fallback.title} film" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
}

export async function getSanityProject(slug: string): Promise<{
  project: ProjectPageData | null;
  seo: SanityProject["seo"];
}> {
  const fallback = projectPages[slug];
  if (!fallback) return { project: null, seo: null };

  try {
    const item = await sanityQuery<SanityProject | null>(PROJECT_QUERY, { slug });
    if (!item?.slug) return { project: fallback, seo: null };

    const paragraphs = item.caseText
      ? item.caseText.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean)
      : fallback.paragraphs;

    const results = (item.results || [])
      .filter((result): result is { value: string; label: string } => Boolean(result.value && result.label))
      .map(({ value, label }) => ({ value, label }));

    const leadHtml = item.leadImageUrl
      ? `<img alt="${item.title || fallback.title}" width="1600" height="1100" style="color:transparent" src="${item.leadImageUrl}"/>`
      : fallback.leadHtml;

    return {
      project: {
        ...fallback,
        title: item.title || fallback.title,
        description: item.summary || fallback.description,
        services: item.services?.length ? item.services.join(" | ") : fallback.services,
        results: item.results ? results : fallback.results,
        paragraphs,
        heroHtml: heroHtml(item, fallback),
        leadHtml,
      },
      seo: item.seo || null,
    };
  } catch {
    return { project: fallback, seo: null };
  }
}

export async function getSanityProjectSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityQuery<string[]>(`*[_type == "project" && defined(slug.current)] | order(displayOrder asc){"slug": slug.current}.slug`);
    return slugs.length ? slugs : Object.keys(projectPages);
  } catch {
    return Object.keys(projectPages);
  }
}
