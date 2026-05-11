import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Remodeling Tips & Guides — Queens, Brooklyn & Long Island",
  description:
    "Practical home remodeling advice for New York homeowners — kitchen costs, roofing signs, siding options, bathroom tile, basement waterproofing, and more. From Professional Home Remodeling Inc.",
  alternates: { canonical: "https://www.phr-ny.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
