import Link from "next/link";
import type { ProjectCard as ProjectCardData } from "@/lib/projects";

const c = {
  card: "WorkCard-module__bi6E2q__card",
  rolloverCard: "WorkCard-module__bi6E2q__hasRollover",
  media: "WorkCard-module__bi6E2q__media",
  still: "WorkCard-module__bi6E2q__still",
  rollover: "WorkCard-module__bi6E2q__rollover",
  scrim: "WorkCard-module__bi6E2q__scrim",
  content: "WorkCard-module__bi6E2q__content",
  category: "WorkCard-module__bi6E2q__category",
  title: "WorkCard-module__bi6E2q__title",
};

export function WorkCard({ project }: { project: ProjectCardData }) {
  return (
    <Link className={`${c.card} ${c.rolloverCard}`} href={`/work/${project.slug}`}>
      <span className={c.media}>
        <img
          alt={project.title}
          className={c.still}
          src={project.image}
          style={{ position: "absolute", height: "100%", width: "100%", inset: 0, objectPosition: project.focal }}
        />
        <img
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={c.rollover}
          src={project.rollover}
          style={{ position: "absolute", height: "100%", width: "100%", inset: 0, objectPosition: project.focal }}
        />
      </span>
      <span className={c.scrim} aria-hidden="true" />
      <span className={c.content}>
        <span className={c.category}>{project.category}</span>
        <span className={c.title}>{project.title}</span>
      </span>
    </Link>
  );
}
