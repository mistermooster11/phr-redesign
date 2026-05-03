export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",          href: "/"              },
  { label: "Services",      href: "/craft-catalog" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQs",          href: "/general-faqs"  },
  { label: "Contact",       href: "/contact-us"    },
];
