import {sanityQuery} from "./sanity";
import {servicePages, type ServicePageData} from "./service-pages";

type CMSService = Partial<ServicePageData> & {
  heroMedia?: ServicePageData["heroMedia"];
  _id?: string;
};

const QUERY = `*[_type == "servicePage" && slug.current == $slug][0]{
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

export async function getServicePage(slug: string): Promise<ServicePageData | null> {
  const fallback = servicePages[slug];
  if (!fallback) return null;

  try {
    const cms = await sanityQuery<CMSService | null>(QUERY, {slug});
    // A complete published CMS record takes precedence. Keep GitHub as a
    // non-destructive fallback until all eight pages have been imported.
    if (!cms?.heroTitle || !cms?.standfirst || !cms?.capabilities?.items?.length || !cms?.faq?.items?.length) return fallback;
    const media = cms.heroMedia;
    const heroMedia = media ? {...media, images: media.images?.map((item) => ({...item, src: item.imageUrl || item.src}))} : fallback.heroMedia;
    return {...fallback, ...cms, slug, heroMedia};
  } catch {
    return fallback;
  }
}
