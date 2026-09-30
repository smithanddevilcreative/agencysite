import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";

const slugs = [
  "allstars-sports-bars",
  "allstars-sports-bowl",
  "draughts",
  "fortune-favours",
  "humbug",
  "levels",
  "mama-bamboo",
  "mighty-adventures",
  "more-concierge",
  "pop-playrooms",
  "precision-microdrives",
  "strike",
  "t2-design-solutions",
] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getSnapshotMetadata(`work/${slug}.html`);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as (typeof slugs)[number])) return null;
  return <LegacyPage file={`work/${slug}.html`} />;
}
