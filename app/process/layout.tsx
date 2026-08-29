import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "A clear five-stage process — consultation, design and drawings, approval and planning, execution, and documented handover — keeping every project on time, on budget and to specification.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process | Blume Technical Services",
    description:
      "A clear five-stage process — consultation, design and drawings, approval and planning, execution, and documented handover — keeping every project on time, on budget and to specification.",
    url: "/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
