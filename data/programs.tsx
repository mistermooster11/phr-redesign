import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with a PHR project photo]
    title: "Our Services",
    description: (
      <p>
        Professional Home Remodeling handles the full range of home improvement
        work across Queens, Brooklyn, the Bronx, Nassau County, Suffolk County,
        and Westchester — from kitchens and bathrooms to roofing, siding,
        windows, masonry, and emergency repairs.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every project starts the same way: we provide a free estimate, give
          you a straight answer on scope and cost, and don&apos;t start until
          you&apos;re comfortable with the plan. Our owner is involved in every
          job — you&apos;re not being handed off to a subcontractor you&apos;ve
          never met.
        </p>
        <p>
          We&apos;re licensed in NYC, Nassau, Suffolk, and Westchester, GAF
          Certified, A+ rated with the BBB, and OSHA compliant on every site.
          Call{" "}
          <a href="tel:5166365300">(516) 636-5300</a> (Nassau/Suffolk) or{" "}
          <a href="tel:7183169221">(718) 316-9221</a> (NYC &amp; Westchester)
          to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Kitchen Remodeling",
      content: (
        <p>
          We remodel kitchens from the studs up — demo, insulation, sheetrock,
          flooring, custom cabinetry with crown molding, granite or quartz
          countertops, custom sinks and faucets, backsplash tile, and finish
          paint. Every project is designed around what you actually want your
          kitchen to look like.
        </p>
      ),
      learnMoreHref: "/craft-catalog/kitchen-remodeling",
    },
    {
      title: "Bathroom Remodeling",
      content: (
        <p>
          Full bathroom renovations built to your specifications. We demo to
          the studs, install proper waterproofing and backer board, then
          rebuild with custom tile, new fixtures — tubs, showers, toilets,
          vanities, and medicine cabinets — and all-new finishes. Debris
          removal always included.
        </p>
      ),
      learnMoreHref: "/craft-catalog/bathroom-remodeling",
    },
    {
      title: "Roofing",
      content: (
        <p>
          GAF Certified roof installations and repairs serving the New York
          metro area. We handle targeted leak repairs, full replacements, and
          emergency storm damage response. Free inspections available. We
          provide written documentation for insurance claims when needed.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roofing",
    },
    {
      title: "Siding",
      content: (
        <p>
          Insulated vinyl siding in 20+ colors, complete with styrofoam
          insulation board, aluminum fascia, window and door recaps, caulking,
          and a custom seamless gutter and leader system. Lifetime
          manufacturer&apos;s guarantee on all siding installed by our crew.
        </p>
      ),
      learnMoreHref: "/craft-catalog/siding",
    },
    {
      title: "Window Replacement",
      content: (
        <p>
          Energy Star-rated replacement windows with 7/8-inch insulated glass,
          Low E coating, argon gas fills, and solid vinyl welded frames. We
          measure for direct replacement, handle all installation and
          aluminum capping, and cart away all debris.
        </p>
      ),
      learnMoreHref: "/craft-catalog/windows",
    },
    {
      title: "Masonry & Concrete",
      content: (
        <p>
          4,000 PSI concrete driveways, walkways, sidewalks, stoops, and
          patios. Custom brickwork and Cambridge paving stones for exterior
          hardscaping. Exterior brick pointing and concrete basement
          waterproofing. On-site dumpsters for all debris removal.
        </p>
      ),
      learnMoreHref: "/craft-catalog/masonry",
    },
    {
      title: "Basement Waterproofing",
      content: (
        <p>
          We address the root cause of basement flooding — whether it&apos;s
          groundwater seepage, drainage failure, sump pump issues, or
          foundation compromise. Concrete basement waterproofing solutions
          tailored to your specific problem, with written estimates before
          any work begins.
        </p>
      ),
      learnMoreHref: "/craft-catalog/basement-waterproofing",
    },
    {
      title: "Emergency Repairs",
      content: (
        <p>
          Fast response to roof leaks and basement flooding across the New York
          metro area. We assess the full scope of the damage, address the
          immediate problem, and provide documentation for insurance claims.
          Call us any time — we respond to emergencies seven days a week.
        </p>
      ),
      learnMoreHref: "/craft-catalog/emergency-repairs",
    },
  ],

  partners: [],
};
