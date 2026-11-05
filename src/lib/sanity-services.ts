import {sanityQuery} from "./sanity";
import {servicePages, type ServicePageData} from "./service-pages";

export type CMSService = Partial<ServicePageData> & {
  heroMedia?: { kind: "image" | "slideshow" | "skiv" | "vimeo"; videoId?: string; images?: { src: string; alt: string; imageUrl?: string; crop?: {left?: number; right?: number; top?: number; bottom?: number} }[] };
  _id?: string;
};

export const SERVICE_QUERY = `*[_type == "servicePage" && slug.current == $slug][0]{
  title, description, kicker, heroTitle, standfirst,
  heroImage, heroMedia{kind,videoId,images[]{src,alt,"imageUrl":image.asset->url, "crop":image.crop, "hotspot":image.hotspot}},
  actions[]{className,href,label}, proofLine,
  featuredProjects[]{title,href,description,image{src,alt}},
  argument{label,title,paragraphs},
  comparison{label,title,intro,closing,items[]{title,body}},
  capabilities{label,title,items[]{number,title,body}},
  process{label,title,items[]{number,title,body}},
  caseStudy{image{src,alt},label,title,paragraphs,link{href,label},related},
  fit{label,title,items},
  faq{label,title,items[]{question,answer}},
  enquiry{label,title,intro}
}`;

function croppedSanityImage(url: string, crop?: {left?: number; right?: number; top?: number; bottom?: number}): string {
  if (!crop || !url.startsWith("https://cdn.sanity.io/images/")) return url;
  const match = url.match(/-(\d+)x(\d+)\.(?:jpg|jpeg|png|webp)(?:\?|$)/i);
  if (!match) return url;
  const width = Number(match[1]), height = Number(match[2]);
  const left = Math.round(width * (crop.left || 0));
  const top = Math.round(height * (crop.top || 0));
  const right = Math.round(width * (crop.right || 0));
  const bottom = Math.round(height * (crop.bottom || 0));
  const w = width - left - right, h = height - top - bottom;
  if (w <= 0 || h <= 0) return url;
  return `${url.split("?")[0]}?rect=${left},${top},${w},${h}&auto=format`;
}

export async function getServicePage(slug: string): Promise<ServicePageData | null> {
  const fallback = servicePages[slug];
  if (!fallback) return null;

  try {
    const cms = await sanityQuery<CMSService | null>(SERVICE_QUERY, {slug});
    // A complete published CMS record takes precedence. Keep GitHub as a
    // non-destructive fallback until all eight pages have been imported.
    if (!cms?.heroTitle || !cms?.standfirst || !cms?.capabilities?.items?.length || !cms?.faq?.items?.length) return fallback;
    return mergeServiceContent(fallback, cms);

  } catch {
    return fallback;
  }
}

/** The same published-page transform is used by static generation and the browser refresh. */
export function mergeServiceContent(fallback: ServicePageData, cms: CMSService): ServicePageData {
  const media = cms.heroMedia;
  const heroMedia = media
    ? {...media, images: media.images?.map((item) => ({
        ...item, src: croppedSanityImage(item.imageUrl || item.src, item.crop)
      }))}
    : fallback.heroMedia;
  // A service slideshow also owns the lead still. Keep the fallback image
  // synchronised with the first selected slide instead of retaining an older
  // hard-coded photo in a separate field.
  const firstSlide = heroMedia?.kind === "slideshow" ? heroMedia.images?.find((item) => item.src) : undefined;
  const heroImage = firstSlide
    ? {src: firstSlide.src, alt: firstSlide.alt || cms.heroImage?.alt || fallback.heroImage.alt}
    : cms.heroImage || fallback.heroImage;
  return {...fallback, ...cms, slug: fallback.slug, heroMedia, heroImage};
}
