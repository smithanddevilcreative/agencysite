import { LegacyPage, getSnapshotMetadata } from "@/lib/legacy-page";

const slugs = [
  "brand-strategy-design",
  "campaigns-content",
  "digital-web",
  "interiors-environments",
  "themed-experiences",
] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getSnapshotMetadata(`services/${slug}.html`);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as (typeof slugs)[number])) return null;
  return <LegacyPage file={`services/${slug}.html`} />;
}
