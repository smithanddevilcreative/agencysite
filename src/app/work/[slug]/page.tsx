import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getSanityProject, getSanityProjectSlugs } from "@/lib/sanity-projects";

const hiddenProjects = new Set(["draughts", "allstars-sports-bars", "allstars-sports-bowl"]);

export async function generateStaticParams() {
  const slugs = await getSanityProjectSlugs();
  return slugs.filter((slug) => !hiddenProjects.has(slug)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (hiddenProjects.has(slug)) return {};

  const { project, seo } = await getSanityProject(slug);
  if (!project) return {};

  return {
    title: seo?.title?.replace(/\s*[—|-]\s*Smith & Devil\s*$/, "") || project.title,
    description: seo?.description || project.description,
    alternates: { canonical: `/work/${slug}` },
    robots: seo?.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      url: `/work/${slug}`,
      title: seo?.title || project.title,
      description: seo?.description || project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (hiddenProjects.has(slug)) notFound();

  const { project } = await getSanityProject(slug);
  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
