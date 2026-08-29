import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Blume Technical Services collects, uses and protects personal information submitted through this website and during project delivery.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Blume Technical Services",
    description:
      "How Blume Technical Services collects, uses and protects personal information submitted through this website and during project delivery.",
    url: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
