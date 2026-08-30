import type { Metadata } from "next";
import { findService, serviceSlugs } from "@/lib/services";

/** Pre-render metadata for every known service at build time. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: true },
    };
  }

  // A plain-string title in the parent /services layout breaks the root
  // title template, so the brand suffix is applied explicitly here.
  const title = `${service.title} — Dubai & UAE | Blume Technical Services`;

  return {
    title,
    description: service.desc,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: service.desc,
      url: `/services/${slug}`,
      images: [{ url: service.heroImg, alt: service.title }],
    },
    twitter: {
      title,
      description: service.desc,
      images: [service.heroImg],
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
