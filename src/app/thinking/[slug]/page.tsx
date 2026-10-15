import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThinkingArticlePage } from "@/components/ThinkingArticlePage";
import { thinkingArticles, thinkingBySlug } from "@/lib/thinking";

export function generateStaticParams() {
  return thinkingArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = thinkingBySlug[slug];
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `/thinking/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/thinking/${article.slug}`,
      title: article.seoTitle,
      description: article.description,
      images: [{ url: article.heroImage.src, alt: article.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: [article.heroImage.src],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = thinkingBySlug[slug];
  if (!article) notFound();
  return <ThinkingArticlePage article={article} />;
}
