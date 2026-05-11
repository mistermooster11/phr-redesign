import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery — Kitchen, Bathroom, Roofing & Siding Work",
  description:
    "Browse completed home remodeling projects by Professional Home Remodeling Inc. — kitchen renovations, bathroom remodels, roofing, siding, windows, and masonry work across Queens, Brooklyn, and Nassau County.",
  alternates: { canonical: "https://www.phr-ny.com/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
