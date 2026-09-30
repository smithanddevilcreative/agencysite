import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { projectPages } from "@/lib/project-pages";

export function generateStaticParams() {
  return Object.keys(projectPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectPages[slug];
  if (!project) return {};
  return {
    title: `${project.title} — Smith & Devil`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectPages[slug];
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
