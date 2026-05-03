import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── KITCHEN REMODELING ────────────────────────────────────────────────── */
  "kitchen-remodeling": {
    title: "Kitchen Remodeling",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"          },
      { href: "#when_you_need_it",  label: "What's Included"   },
      { href: "#our_process",       label: "Our Process"       },
      { href: "#related_services",  label: "Related Services"  },
    ],
    overviewContent: (
      <>
        <p>
          We start every kitchen remodel the same way: by asking what you
          want your kitchen to look like and what&rsquo;s missing from the one
          you have. From there, we design a plan around your goals —
          whether that&rsquo;s a full gut renovation or a targeted upgrade —
          and give you a clear price before any work begins.
        </p>
        <p>
          Our kitchens are built to full demolition standard — down to the
          studs — with new insulation, fresh sheetrock, custom cabinetry,
          granite or quartz countertops, custom sinks and faucets, tile
          backsplash, and finish paint. Debris removal is always included.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What&apos;s Included in a Kitchen Remodel",
        content: (
          <>
            <p>
              A full kitchen remodel from Professional Home Remodeling includes
              complete demolition of the existing kitchen down to the studs,
              re-insulation of exterior walls, installation and taping of new
              sheetrock, leveling and installation of new flooring, and custom
              cabinetry — both upper and lower — with crown molding.
            </p>
            <p>
              Finishing details include granite or quartz custom countertops,
              a new custom sink and faucet, backsplash tile installation between
              upper and lower cabinetry, and three coats of compound with finish
              paint. All contractors are responsible for removal of all debris,
              and we leave your kitchen in brand new condition.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Consultation &amp; Design.</strong> We ask what
              you want your new kitchen to look like and where you feel your
              current kitchen falls short. We walk the space and propose a scope
              that matches your vision and budget.
            </p>
            <p>
              <strong>Step 2 — Free Written Estimate.</strong> You get a detailed
              estimate before any commitment. No pressure — take the time you need.
            </p>
            <p>
              <strong>Step 3 — Full Demolition &amp; Build.</strong> We demo down
              to the studs, address any underlying issues, then rebuild the kitchen
              from the ground up — all trades managed by our crew.
            </p>
            <p>
              <strong>Step 4 — Final Walkthrough.</strong> We review every finish
              detail with you before we consider the job complete. Debris is hauled
              off and the space is left clean.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Bathroom Remodeling",    href: "/craft-catalog/bathroom-remodeling"    },
      { label: "Masonry & Concrete",     href: "/craft-catalog/masonry"                },
      { label: "Window Replacement",     href: "/craft-catalog/windows"                },
      { label: "Emergency Repairs",      href: "/craft-catalog/emergency-repairs"      },
    ],
  },

  /* ─── BATHROOM REMODELING ───────────────────────────────────────────────── */
  "bathroom-remodeling": {
    title: "Bathroom Remodeling",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "What's Included"  },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Our team creates custom bathroom designs tailored to each
          client&rsquo;s style and functional needs. We start with a complete
          demolition down to the studs — clean slate every time — and
          rebuild with quality materials chosen by you.
        </p>
        <p>
          Every bathroom remodel includes new insulation, wonder board in the
          tub area, green board sheetrock throughout, custom tile on walls and
          floors, and all-new fixtures: tubs, showers, toilets, vanities,
          medicine cabinets, and more. Debris removal always included.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What's Included in a Bathroom Remodel",
        content: (
          <>
            <p>
              Full bathroom remodels begin with complete demolition to the
              studs. We then install new insulation for bathroom walls, wonder
              board in the tub and shower area, and green board sheetrock
              throughout the remainder of the bathroom.
            </p>
            <p>
              All walls, ceilings, and floors are renovated to the
              client&rsquo;s specifications. You choose from a wide selection
              of custom tile, and our team handles all installation. New
              fixtures include tubs, showers, toilets, sinks, vanities, and
              medicine cabinets. All debris is removed and the bathroom is
              left in brand new condition.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Design Consultation.</strong> We discuss your
              vision, walk the space, and help you select tile, fixtures, and
              finishes that work within your budget.
            </p>
            <p>
              <strong>Step 2 — Free Written Estimate.</strong> Detailed scope
              and price provided before any work starts.
            </p>
            <p>
              <strong>Step 3 — Demolition &amp; Rebuild.</strong> We demo
              completely to the studs and rebuild with proper waterproofing,
              backer board, custom tile, and all-new fixtures.
            </p>
            <p>
              <strong>Step 4 — Final Inspection &amp; Cleanup.</strong> We
              walk the finished bathroom with you, confirm every detail is
              correct, and haul all debris off-site before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Kitchen Remodeling",       href: "/craft-catalog/kitchen-remodeling"       },
      { label: "Masonry & Concrete",       href: "/craft-catalog/masonry"                  },
      { label: "Basement Waterproofing",   href: "/craft-catalog/basement-waterproofing"   },
      { label: "Emergency Repairs",        href: "/craft-catalog/emergency-repairs"        },
    ],
  },

  /* ─── ROOFING ──────────────────────────────────────────────────────────── */
  "roofing": {
    title: "Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When You Need It" },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          As GAF Certified Installers, we bring manufacturer-backed expertise
          to every roofing project — from targeted repairs to complete
          replacements. We work on residential and multi-family properties
          throughout Queens, Brooklyn, Nassau County, Suffolk County, the
          Bronx, and Westchester.
        </p>
        <p>
          Free estimates are available seven days a week. If you&rsquo;re
          dealing with a roof leak or storm damage, call us at{" "}
          <a href="tel:5166365300">(516) 636-5300</a> for Nassau or{" "}
          <a href="tel:7183169221">(718) 316-9221</a> for NYC and Westchester.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Roofing Service?",
        content: (
          <>
            <p>
              A roof that&rsquo;s more than 10–20 years old is increasingly
              susceptible to leaks and weather damage. Common signs include
              missing or curling shingles, water stains on interior ceilings,
              granules collecting in gutters, and visible daylight through
              the attic. Storm damage — hail, high winds, fallen debris — can
              accelerate these issues significantly.
            </p>
            <p>
              If your roof is leaking, don&rsquo;t wait. Water intrusion causes
              structural damage that compounds over time. We handle emergency
              roof leak response and provide written documentation that most
              insurance carriers accept for claims.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection &amp; Estimate.</strong> We
              inspect the full roof, document any damage, and provide a
              written estimate before any work begins.
            </p>
            <p>
              <strong>Step 2 — Material Selection.</strong> As GAF Certified
              Installers, we offer manufacturer-backed shingles and roofing
              materials with warranty coverage.
            </p>
            <p>
              <strong>Step 3 — Professional Installation.</strong> Our
              experienced crew installs or replaces the roofing system to
              manufacturer specifications, ensuring full weather protection.
            </p>
            <p>
              <strong>Step 4 — Cleanup &amp; Final Inspection.</strong>
              All debris and old materials are hauled off-site. We do a
              final walkthrough to confirm everything is sealed, flashed,
              and finished correctly.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Siding",              href: "/craft-catalog/siding"            },
      { label: "Masonry & Concrete",  href: "/craft-catalog/masonry"           },
      { label: "Emergency Repairs",   href: "/craft-catalog/emergency-repairs" },
      { label: "Window Replacement",  href: "/craft-catalog/windows"           },
    ],
  },

  /* ─── SIDING ───────────────────────────────────────────────────────────── */
  "siding": {
    title: "Siding",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "What's Included"  },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          We redesign the exterior of your home with insulated vinyl siding
          in your choice of 20+ colors. Every installation begins with
          three-quarter inch styrofoam insulation on the exterior walls,
          followed by insulated vinyl siding — giving you a cleaner look
          and better energy performance at the same time.
        </p>
        <p>
          Clients receive a lifetime manufacturer&rsquo;s guarantee on their
          exterior insulated siding. Our crews handle all trim work,
          aluminum fascia, window and door recaps, caulking, and seamless
          gutter installation as part of a complete exterior package.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What's Included in a Siding Installation",
        content: (
          <>
            <p>
              Our full siding package covers everything on the exterior:
              three-quarter inch styrofoam insulation on all walls, installation
              of insulated vinyl siding, all trim work in a 1/3 vented soffit
              system, new aluminum fascia, aluminum window and door recaps,
              caulk and seal on all windows and doors, and a new custom
              seamless gutter and leader system.
            </p>
            <p>
              Color selection is part of the process — we bring 20+ samples
              directly to you so you can see them against your home before
              committing. All work comes with a lifetime manufacturer&rsquo;s
              guarantee on the siding itself.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Color &amp; Style Selection.</strong> We bring
              samples to your home and walk you through options that work with
              your home&rsquo;s exterior profile and your preferences.
            </p>
            <p>
              <strong>Step 2 — Free Written Estimate.</strong> Full scope and
              pricing before any commitment.
            </p>
            <p>
              <strong>Step 3 — Prep &amp; Installation.</strong> Exterior walls
              are prepped with insulation board, followed by siding installation,
              trim, fascia, window/door recaps, and gutters — all by our crew.
            </p>
            <p>
              <strong>Step 4 — Inspection &amp; Warranty Documentation.</strong>
              We walk the job with you, confirm all caulking and sealing, and
              provide your manufacturer warranty documentation.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing",            href: "/craft-catalog/roofing"           },
      { label: "Window Replacement", href: "/craft-catalog/windows"           },
      { label: "Masonry & Concrete", href: "/craft-catalog/masonry"           },
      { label: "Emergency Repairs",  href: "/craft-catalog/emergency-repairs" },
    ],
  },

  /* ─── WINDOWS ──────────────────────────────────────────────────────────── */
  "windows": {
    title: "Window Replacement",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "What's Included"  },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          We install Energy Star-rated replacement windows that match the
          exact dimensions of your existing openings — no structural changes
          required. Our windows include 7/8-inch insulated glass, U Factor
          .27 Energy Star ratings, Low E glass, argon gas between the sashes,
          and solid vinyl welded frames built to last.
        </p>
        <p>
          All installations include custom aluminum window capping and caulk
          and sealing of all frames. Our contractors remove and cart away all
          existing windows and debris. Free estimates available seven days a week.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What's Included in Window Replacement",
        content: (
          <>
            <p>
              Each window replacement includes measurement and direct
              sizing to match your existing opening, followed by removal
              of the old window. Installed replacements feature 7/8-inch
              insulated glass, U Factor .27 Energy Star certification, Low
              E glass, argon gas between the sashes for additional insulation,
              and screen replacement.
            </p>
            <p>
              Every window is finished with custom aluminum window capping
              and thorough caulk and sealing of all frames. Old windows and
              all associated debris are removed and carted away by our crew.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Measurement &amp; Estimate.</strong> We measure
              each opening precisely and provide a written estimate for the full
              installation — material and labor, no hidden fees.
            </p>
            <p>
              <strong>Step 2 — Product Selection.</strong> We walk you through
              available window styles and finishes that complement your home.
            </p>
            <p>
              <strong>Step 3 — Installation.</strong> Old windows are removed,
              new Energy Star windows are installed and sealed, and custom
              aluminum capping is applied on every opening.
            </p>
            <p>
              <strong>Step 4 — Cleanup &amp; Final Check.</strong> All debris
              is carted away and we confirm every window opens, closes, locks,
              and seals properly before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Siding",             href: "/craft-catalog/siding"            },
      { label: "Roofing",            href: "/craft-catalog/roofing"           },
      { label: "Masonry & Concrete", href: "/craft-catalog/masonry"           },
      { label: "Emergency Repairs",  href: "/craft-catalog/emergency-repairs" },
    ],
  },

  /* ─── MASONRY ──────────────────────────────────────────────────────────── */
  "masonry": {
    title: "Masonry & Concrete",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "What's Included"  },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Our masonry team handles driveways, sidewalks, patios, custom
          brickwork, Cambridge paving stones, stoops, brick walls, exterior
          brick pointing, and concrete basement waterproofing — all using
          4,000 PSI concrete, the highest grade available for residential use.
        </p>
        <p>
          We demo and prepare all existing surfaces before installation,
          provide on-site dumpsters for debris removal, and deliver a
          finished product built to last through New York winters and
          heavy foot traffic.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Masonry Services We Offer",
        content: (
          <>
            <p>
              Our masonry work covers a full range of residential projects:
              concrete cement driveways, walkways, and sidewalks; custom
              masonry brickwork; Cambridge paving stones with armor-tech
              finish for walkways, driveways, and patios; new brick and
              granite stoops; brick walls; exterior masonry brick pointing;
              and concrete basement waterproofing.
            </p>
            <p>
              All concrete work uses 4,000 PSI mix — the highest quality
              grade for residential applications — for maximum durability
              against freeze-thaw cycles and heavy use.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Site Assessment &amp; Estimate.</strong> We walk
              the area, evaluate the existing surface or foundation, and provide
              a detailed written estimate.
            </p>
            <p>
              <strong>Step 2 — Demo &amp; Prep.</strong> Existing driveways,
              sidewalks, or masonry are demolished and removed. On-site
              dumpsters handle all debris.
            </p>
            <p>
              <strong>Step 3 — Installation.</strong> New concrete, pavers,
              brickwork, or masonry is installed to grade and specification,
              using 4,000 PSI concrete for all structural pours.
            </p>
            <p>
              <strong>Step 4 — Finish &amp; Cure.</strong> We finish surfaces
              to the agreed specification and advise on curing and care to
              protect the investment long-term.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing",                  href: "/craft-catalog/roofing"                  },
      { label: "Siding",                   href: "/craft-catalog/siding"                   },
      { label: "Basement Waterproofing",   href: "/craft-catalog/basement-waterproofing"   },
      { label: "Emergency Repairs",        href: "/craft-catalog/emergency-repairs"        },
    ],
  },

  /* ─── BASEMENT WATERPROOFING ────────────────────────────────────────────── */
  "basement-waterproofing": {
    title: "Basement Waterproofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When You Need It" },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Basement flooding can happen at any time — during heavy rain,
          rapid snowmelt, or from a sump pump failure — and the damage
          compounds quickly. We address the root cause: failed drainage
          systems, compromised foundations, and sewer backup vulnerabilities
          that let water in.
        </p>
        <p>
          Our team provides concrete basement waterproofing and flooding
          remediation for homeowners across Queens, Brooklyn, Nassau County,
          Suffolk County, the Bronx, and Westchester. Free estimates available.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Common Causes of Basement Flooding",
        content: (
          <>
            <p>
              Basement flooding has many causes — and the right fix depends
              on identifying the actual source. The most common culprits
              include excessive rainfall, rapidly melting snow, seepage from
              groundwater, sump pump failure, a compromised foundation drainage
              system, weeping tile failure, sewer backup, and lack of
              foundation maintenance over time.
            </p>
            <p>
              If your basement has flooded before or if you notice damp walls,
              efflorescence, or musty odors after rain, the problem is already
              developing. Addressing it now prevents structural damage and mold
              issues down the line.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess the Source.</strong> We identify where
              and how water is entering — wall seepage, floor cracks, sump
              system failure, or drainage failure at the foundation perimeter.
            </p>
            <p>
              <strong>Step 2 — Written Estimate.</strong> Scope and pricing
              provided before any work begins.
            </p>
            <p>
              <strong>Step 3 — Waterproofing Installation.</strong> We apply
              concrete waterproofing solutions appropriate to the failure mode —
              interior drainage systems, exterior grading corrections, concrete
              coating, or sump pump installation and repair.
            </p>
            <p>
              <strong>Step 4 — Final Inspection.</strong> We confirm the
              solution and advise on maintenance steps to protect the basement
              going forward.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Masonry & Concrete",   href: "/craft-catalog/masonry"              },
      { label: "Emergency Repairs",    href: "/craft-catalog/emergency-repairs"    },
      { label: "Bathroom Remodeling",  href: "/craft-catalog/bathroom-remodeling"  },
      { label: "Kitchen Remodeling",   href: "/craft-catalog/kitchen-remodeling"   },
    ],
  },

  /* ─── EMERGENCY REPAIRS ─────────────────────────────────────────────────── */
  "emergency-repairs": {
    title: "Emergency Repairs",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When to Call"     },
      { href: "#our_process",       label: "Our Response"     },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          We specialize in residential emergency repairs across Queens,
          Brooklyn, Nassau County, Suffolk County, the Bronx, and
          Westchester. Our most common emergency calls are roof leaks
          and basement flooding — two problems that get significantly
          worse the longer they&rsquo;re ignored.
        </p>
        <p>
          If you&rsquo;re dealing with a roof leak or flooded basement,
          call us at{" "}
          <a href="tel:5166365300">(516) 636-5300</a> (Nassau/Suffolk) or{" "}
          <a href="tel:7183169221">(718) 316-9221</a> (NYC &amp; Westchester).
          We respond fast and give you an honest assessment of what needs
          to be done immediately versus what can wait.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call Nassau: (516) 636-5300",  href: "tel:5166365300" },
      { label: "Call NYC: (718) 316-9221",     href: "tel:7183169221" },
      { label: "Contact Us Online",            href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Call for Emergency Service",
        content: (
          <>
            <p>
              <strong>Roof Leaks:</strong> Once a leak is tracked down, we
              replace damaged shingles or shakes, patch tears in flat roll
              roofing, or seal joint gaps. If your roof is over 10–20 years
              old, it may be susceptible to widespread damage even if you
              only see one visible leak. We check for structural problems as
              well as the obvious entry point.
            </p>
            <p>
              <strong>Basement Flooding:</strong> Flooding can occur during
              wet or dry weather for a wide range of reasons — excessive rain,
              snowmelt, groundwater seepage, sump pump failure, or sewer
              backup. If your basement has water in it right now, call us.
              We assess the source and address it before the damage grows.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Respond",
        content: (
          <>
            <p>
              <strong>Step 1 — Rapid Response.</strong> Call us and we
              respond as fast as conditions allow. Roof leaks and active
              flooding are treated as urgent situations that warrant
              immediate attention.
            </p>
            <p>
              <strong>Step 2 — Honest Assessment.</strong> We evaluate the
              full scope — not just the visible damage — and tell you clearly
              what needs to be done today versus what can be addressed in a
              scheduled repair.
            </p>
            <p>
              <strong>Step 3 — Immediate Repair.</strong> We address the
              emergency — stopping the active leak, sealing the entry point,
              or stabilizing the situation — using quality materials that
              won&rsquo;t fail again quickly.
            </p>
            <p>
              <strong>Step 4 — Documentation.</strong> If insurance is
              involved, we provide written documentation of the damage and
              the repairs made. We work with homeowners throughout the
              claims process.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing",                  href: "/craft-catalog/roofing"                  },
      { label: "Basement Waterproofing",   href: "/craft-catalog/basement-waterproofing"   },
      { label: "Masonry & Concrete",       href: "/craft-catalog/masonry"                  },
      { label: "Siding",                   href: "/craft-catalog/siding"                   },
    ],
  },

};
