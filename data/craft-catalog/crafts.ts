export type CraftItem = {
  slug:  string;
  title: string;
};

// CraftFilterBar expects these exports — kept as empty arrays since PHR
// doesn't use category/discipline filtering (8-service flat catalog).
export const CATEGORIES: readonly string[] = [];
export const DISCIPLINES: readonly string[] = [];

export const crafts: CraftItem[] = [
  { slug: "kitchen-remodeling",     title: "Kitchen Remodeling"     },
  { slug: "bathroom-remodeling",    title: "Bathroom Remodeling"    },
  { slug: "roofing",                title: "Roofing"                },
  { slug: "siding",                 title: "Siding"                 },
  { slug: "windows",                title: "Window Replacement"     },
  { slug: "masonry",                title: "Masonry & Concrete"     },
  { slug: "basement-waterproofing", title: "Basement Waterproofing" },
  { slug: "emergency-repairs",      title: "Emergency Repairs"      },
];
