import type { Metadata } from "next";
import { findProject, projects } from "@/lib/projects";

/** Pre-render metadata for every project at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: true },
    };
  }

  // A plain-string title in the parent /projects layout breaks the root
  // title template, so the brand suffix is applied explicitly here.
  const title = `${project.title} — ${project.location} | Blume Technical Services`;

  return {
    title,
    description: project.desc,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title,
      description: project.desc,
      url: `/projects/${project.id}`,
      images: [{ url: project.img, alt: project.title }],
    },
    twitter: {
      title,
      description: project.desc,
      images: [project.img],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
