import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Blume Technical Services website and the basis on which we provide quotations and contracting services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Blume Technical Services",
    description:
      "The terms governing use of the Blume Technical Services website and the basis on which we provide quotations and contracting services.",
    url: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
