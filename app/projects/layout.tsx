import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "21+ completed and ongoing projects for leading UAE developers and main contractors — including Ellington Properties, Damac, Al Barari, Emaar and Pinnacle Interior, across Dubai, Abu Dhabi and Fujairah.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Blume Technical Services",
    description:
      "21+ completed and ongoing projects for leading UAE developers and main contractors — including Ellington Properties, Damac, Al Barari, Emaar and Pinnacle Interior, across Dubai, Abu Dhabi and Fujairah.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
