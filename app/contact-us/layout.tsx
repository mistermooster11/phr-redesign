import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimates for Home Remodeling in NYC & Long Island",
  description:
    "Get a free estimate from Professional Home Remodeling Inc. Call (516) 636-5300 for Nassau County or (718) 316-9221 for NYC and Westchester. Serving Queens, Brooklyn, Bronx, Nassau, Suffolk, and Westchester.",
  alternates: { canonical: "https://www.phr-ny.com/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
