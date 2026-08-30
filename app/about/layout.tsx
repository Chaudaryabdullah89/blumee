import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Blume Technical Services L.L.C. is a specialist trade contractor in Dubai — floor screeding, block work, plastering, gypsum, fit-out and MEP, backed by a 75-strong workforce and manufacturer accreditations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Blume Technical Services",
    description:
      "Blume Technical Services L.L.C. is a specialist trade contractor in Dubai — floor screeding, block work, plastering, gypsum, fit-out and MEP, backed by a 75-strong workforce and manufacturer accreditations.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
