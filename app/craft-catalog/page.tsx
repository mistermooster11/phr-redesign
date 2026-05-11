import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Services — Professional Home Remodeling Inc.",
  description:
    "Professional Home Remodeling Inc. provides kitchen remodeling, bathroom renovations, roofing, siding, windows, masonry, and more across Queens, Brooklyn, Nassau County, Suffolk County, the Bronx, and Westchester.",
  alternates: { canonical: "https://www.phr-ny.com/craft-catalog" },
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
