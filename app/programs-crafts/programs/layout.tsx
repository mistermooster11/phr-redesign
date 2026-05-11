import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services Overview — Home Remodeling in NYC & Long Island",
  description:
    "Full overview of home remodeling services from Professional Home Remodeling Inc. — kitchens, bathrooms, roofing, siding, windows, masonry, basement waterproofing, and emergency repairs across Queens, Brooklyn, and Nassau County.",
  alternates: { canonical: "https://www.phr-ny.com/programs-crafts/programs" },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
