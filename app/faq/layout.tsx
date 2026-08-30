import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on our trades, screed surface-regularity tolerances (SR1–SR3), trade licence and VAT registration, manufacturer accreditations, crew mobilisation and the emirates we cover.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQs | Blume Technical Services",
    description:
      "Answers on our trades, screed surface-regularity tolerances (SR1–SR3), trade licence and VAT registration, manufacturer accreditations, crew mobilisation and the emirates we cover.",
    url: "/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
