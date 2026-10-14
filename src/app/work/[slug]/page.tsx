import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { projectPages } from "@/lib/project-pages";

const hiddenProjects = new Set(["draughts", "allstars-sports-bars", "allstars-sports-bowl"]);

export function generateStaticParams() {
  return Object.keys(projectPages).filter((slug) => !hiddenProjects.has(slug)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (hiddenProjects.has(slug)) return {};
  const project = projectPages[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      url: `/work/${slug}`,
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (hiddenProjects.has(slug)) notFound();
  const project = projectPages[slug];
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
