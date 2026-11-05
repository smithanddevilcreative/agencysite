import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiveServicePage } from "@/components/LiveServicePage";
import { servicePages } from "@/lib/service-pages";
import { getServicePage } from "@/lib/sanity-services";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getServicePage(slug);
  if (!data) return {};
  const title = data.title.replace(/\s*\|\s*Smith & Devil\s*$/, "");
  return {
    title,
    description: data.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "website",
      url: `/services/${slug}`,
      title,
      description: data.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getServicePage(slug);
  if (!data) notFound();
  return <LiveServicePage initialData={data} />;
}
