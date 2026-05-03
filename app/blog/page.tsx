"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

const posts = [
  {
    id: "kitchen-remodel-cost-nassau",
    title: "What Does a Kitchen Remodel Actually Cost in Nassau County? (2026 Guide)",
    excerpt:
      "Cabinets, countertops, flooring, labor — we break down what drives kitchen renovation costs for Long Island homeowners and what to watch out for when getting estimates.",
    category: "Homeowner Guide",
    date: "April 2026",
    href: "/blog/kitchen-remodel-cost-nassau",
  },
  {
    id: "signs-roof-needs-replacement",
    title: "5 Signs Your Roof Needs to Be Replaced — Not Just Repaired",
    excerpt:
      "Curling shingles, granules in the gutters, interior water stains, age past 20 years. Our team shares the honest indicators that a repair won't hold long-term.",
    category: "Roofing",
    date: "March 2026",
    href: "/blog/signs-roof-needs-replacement",
  },
  {
    id: "siding-insulation-energy-savings",
    title: "Insulated Siding: Does It Actually Lower Your Energy Bills?",
    excerpt:
      "Foam-backed vinyl siding can reduce heat loss through walls by up to 20%. We explain how insulated siding works, what to expect, and why the manufacturer guarantee matters.",
    category: "Siding",
    date: "February 2026",
    href: "/blog/siding-insulation-energy-savings",
  },
  {
    id: "bathroom-tile-guide-ny",
    title: "Choosing Bathroom Tile for New York Homes: A Practical Guide",
    excerpt:
      "Porcelain vs. ceramic, large-format vs. mosaic, wall vs. floor — our remodeling team shares what holds up best in NYC and Long Island homes over the long term.",
    category: "Bathrooms",
    date: "January 2026",
    href: "/blog/bathroom-tile-guide-ny",
  },
  {
    id: "basement-flooding-causes",
    title: "Why Does My Basement Flood? The 6 Most Common Causes in NY Homes",
    excerpt:
      "Sump pump failure, weeping tile failure, drainage issues, foundation compromise — most basement flooding has a fixable root cause. Here's how to identify yours.",
    category: "Basement & Waterproofing",
    date: "December 2025",
    href: "/blog/basement-flooding-causes",
  },
  {
    id: "energy-star-windows-worth-it",
    title: "Are Energy Star Windows Worth the Investment? An Honest Answer",
    excerpt:
      "The U Factor .27 rating, Low E glass, and argon gas fills in modern replacement windows make a measurable difference in drafty New York homes. Here's what the numbers actually show.",
    category: "Windows",
    date: "November 2025",
    href: "/blog/energy-star-windows-worth-it",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #a1c5d3)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable links when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Home Improvement Guides & Tips
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the PHR Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from remodeling professionals who have been working in
                  Queens, Brooklyn, Nassau County, and the New York metro area for over
                  40 years. No fluff — just the honest information homeowners actually need
                  before starting a project.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5166365300">
                    <i className="icon-link" />
                    <span>Call (516) 636-5300</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from client or CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Ready to Talk About Your Project?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Free Estimates — 7 Days a Week
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(516) 636-5300</strong> (Nassau/Suffolk) or{" "}
                <strong>(718) 316-9221</strong> (NYC &amp; Westchester) —
                we&apos;ll give you a straight answer on scope and cost with no pressure.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:5166365300">
                  Call Nassau: (516) 636-5300
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
