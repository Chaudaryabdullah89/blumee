import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a site survey or quotation from Blume Technical Services in Deira, Dubai. Call +971 58 525 2114, email blumetec0@gmail.com, or send your drawings and specifications.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Blume Technical Services",
    description:
      "Request a site survey or quotation from Blume Technical Services in Deira, Dubai. Call +971 58 525 2114, email blumetec0@gmail.com, or send your drawings and specifications.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
