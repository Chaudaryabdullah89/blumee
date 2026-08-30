import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Specifications",
  description:
    "Documented tolerances and material guides — screed build-ups and SR1–SR3 surface regularity, block work and Q4 plaster standards, gypsum ceilings, MEP systems, quality and HSE compliance.",
  alternates: { canonical: "/specs" },
  openGraph: {
    title: "Technical Specifications | Blume Technical Services",
    description:
      "Documented tolerances and material guides — screed build-ups and SR1–SR3 surface regularity, block work and Q4 plaster standards, gypsum ceilings, MEP systems, quality and HSE compliance.",
    url: "/specs",
  },
};

export default function SpecsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
