import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Queens, Brooklyn, Bronx, Nassau, Suffolk & Westchester",
  description:
    "Professional Home Remodeling Inc. serves Queens, Brooklyn, the Bronx, Nassau County, Suffolk County, and Westchester County. View all neighborhoods we cover and call for a free estimate.",
  alternates: { canonical: "https://www.phr-ny.com/service-areas" },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
