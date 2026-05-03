export type DropdownLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type DropdownQuickLink = DropdownLink & { icon: string };

export type NavDropdown = {
  title: string;
  titleHref: string;
  description: string;
  links: DropdownLink[];
  items?: DropdownLink[];
  quickLinks?: DropdownQuickLink[];
};

export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",          href: "/"              },
  { label: "Services",      href: "/craft-catalog" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQs",          href: "/general-faqs"  },
  { label: "Contact",       href: "/contact-us"    },
];
