import type { ChannelPageData } from "@/components/custom/channel/types";

const phrny: ChannelPageData = {
  slug: "phr-ny",

  navItems: [
    { href: "#channel",           label: "About Us"           },
    { href: "#helpful_resources", label: "Quick Links"        },
    { href: "#crafts",            label: "Our Services"       },
    { href: "#testimonials",      label: "Testimonials"       },
    { href: "#flex_feature",      label: "Emergency Repairs"  },
    { href: "#get_in_touch",      label: "Get in Touch"       },
  ],

  hero: {
    title:           "Home Remodeling Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(/images/IMG_9688-1024x682.jpg) no-repeat center center / cover",
    // [TODO: Replace hero background with a PHR project photo — kitchen, siding, or exterior shot]
    description: (
      <p>
        Professional Home Remodeling Inc. is a family-run home improvement
        company serving Queens, Brooklyn, the Bronx, Nassau County, Suffolk
        County, and Westchester. With over 40 years of experience, we deliver
        expert craftsmanship, competitive pricing, and the kind of service you
        only get when you deal directly with the owner.
      </p>
    ),
  },

  learnMore: {
    title: "40 Years of Craftsmanship You Can Count On",
    content: (
      <>
        <p>
          Since our founding, Professional Home Remodeling Inc. has built a
          reputation that runs entirely on referrals and word of mouth. We
          don&rsquo;t rely on gimmicks or aggressive advertising — we rely on
          the work. Every client we&rsquo;ve ever served knows exactly what they
          were getting before the first nail went in.
        </p>

        <h5>Deal Directly with the Owner</h5>
        <p>
          When you call us, you&rsquo;re talking to the person who built this
          company. No call centers, no layers of management, no
          miscommunication. You get a straight answer about what the job
          entails, what it costs, and when it&rsquo;s getting done.
        </p>

        <h5>Licensed, Insured &amp; Certified</h5>
        <p>
          We hold active licenses in NYC, Westchester, Nassau, and Suffolk
          County. We&rsquo;re GAF Certified Installers, carry an A+ rating with
          the Better Business Bureau, and operate to OSHA safety standards on
          every job site. Homeowners in our area know that documentation matters
          — and we always come prepared.
        </p>

        <h5>Senior, Military &amp; Teacher Discounts</h5>
        <p>
          We offer special discounts for senior citizens, veterans, active
          military, and teachers. It&rsquo;s our way of giving back to the
          communities we&rsquo;ve served for over four decades.
        </p>

        <h5>100% Satisfaction — Every Job</h5>
        <p>
          We don&rsquo;t consider a job finished until you&rsquo;re satisfied.
          Our crews remove all debris, leave the work area clean, and stand
          behind every project we complete. That standard hasn&rsquo;t changed
          in 40 years — and it won&rsquo;t.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Nassau: (516) 636-5300",         href: "tel:5166365300",   icon: "icon-message" },
      { title: "Call NYC & Westchester: (718) 316-9221", href: "tel:7183169221", icon: "icon-message" },
      { title: "Contact Us Online",                   href: "/contact-us",      icon: "icon-mail"    },
      { title: "Our Services",                        href: "/craft-catalog",   icon: "icon-link"    },
      { title: "Service Areas",                       href: "/service-areas",   icon: "icon-info"    },
      { title: "Frequently Asked Questions",          href: "/general-faqs",    icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle the full range of home remodeling and improvement work across
        the New York metro area — from kitchens and bathrooms to roofing, siding,
        windows, masonry, and emergency repairs. Every project is managed by the
        owner and staffed by our own experienced crews.
      </p>
    ),
    craftLinks: [
      { label: "Kitchen Remodeling",       href: "/craft-catalog/kitchen-remodeling"       },
      { label: "Bathroom Remodeling",      href: "/craft-catalog/bathroom-remodeling"      },
      { label: "Roofing",                  href: "/craft-catalog/roofing"                  },
      { label: "Siding",                   href: "/craft-catalog/siding"                   },
      { label: "Windows",                  href: "/craft-catalog/windows"                  },
      { label: "Masonry & Concrete",       href: "/craft-catalog/masonry"                  },
      { label: "Basement Waterproofing",   href: "/craft-catalog/basement-waterproofing"   },
      { label: "Emergency Repairs",        href: "/craft-catalog/emergency-repairs"        },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Professional Home Remodeling did a complete kitchen and bathroom renovation for us. The work was exceptional — everything from the tile to the cabinetry was done exactly as discussed. They cleaned up every day and finished on schedule. We've already referred them to two neighbors.",
      name:     "Homeowner, Franklin Square",
      position: "Nassau County",
    },
    // [TODO: Replace placeholder quote with a real verified review from Google, Yelp, or Facebook]
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    // [TODO: Replace with a PHR emergency repair or storm damage photo]
    title:       "Emergency Repairs — We Respond Fast",
    body: (
      <p>
        Roof leaks, basement flooding, and storm damage don&rsquo;t wait for a
        convenient time. Our crews handle residential emergency repairs across
        Queens, Brooklyn, Nassau County, and the surrounding areas. Call{" "}
        <strong>(516) 636-5300</strong> for Nassau or{" "}
        <strong>(718) 316-9221</strong> for NYC and Westchester.
      </p>
    ),
    buttonLabel: "Call Nassau: (516) 636-5300",
    buttonHref:  "tel:5166365300",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule a free estimate or have a question about your project?
        Call us at <strong>(516) 636-5300</strong> (Nassau) or{" "}
        <strong>(718) 316-9221</strong> (NYC &amp; Westchester), or use our
        online contact form and we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default phrny;
