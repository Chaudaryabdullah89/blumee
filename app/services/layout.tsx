import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six specialist disciplines under one contract: floor screeding, block work and masonry, plastering and painting, gypsum and false ceilings, interior fit-out and renovation, and MEP services across the UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Blume Technical Services",
    description:
      "Six specialist disciplines under one contract: floor screeding, block work and masonry, plastering and painting, gypsum and false ceilings, interior fit-out and renovation, and MEP services across the UAE.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
