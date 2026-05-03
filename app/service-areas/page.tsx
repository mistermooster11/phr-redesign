"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "queens",
    region: "Queens",
    headline: "Home Remodeling in Queens",
    description:
      "Queens has one of the widest mixes of housing types in the city — from single-family homes in Whitestone and Bayside to dense multi-family buildings in Astoria and Flushing. We've been remodeling kitchens, bathrooms, exteriors, and more in Queens homes for over 40 years. Our crews understand how these properties are built and what it takes to deliver quality work in every configuration.",
    callouts: [
      "Full kitchen and bathroom renovations in all home types",
      "Roofing, siding, windows, and exterior work throughout the borough",
      "Licensed under NYC DCA# 2076470 — fully compliant with all city requirements",
    ],
    neighborhoods:
      "Arverne • Astoria • Bayside • Bellerose • College Point • Corona • East Elmhurst • Elmhurst • Far Rockaway • Floral Park • Flushing • Forest Hills • Fresh Meadows • Glen Oaks • Hollis • Howard Beach • Jackson Heights • Jamaica • Kew Gardens • Little Neck • Long Island City • Maspeth • Middle Village • Ozone Park • Queens Village • Rego Park • Richmond Hill • Ridgewood • Rockaway Park • Rosedale • Saint Albans • Sunnyside • Whitestone • Woodhaven • Woodside & More",
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Home Remodeling in Brooklyn",
    description:
      "Brooklyn's housing stock spans everything from brownstones and pre-war walk-ups to newer attached homes and multi-family buildings. Each presents its own remodeling challenges, and our crews have worked in all of them. Whether you're renovating a Park Slope kitchen, updating a Bay Ridge bathroom, or replacing siding and windows on a two-family in Bensonhurst, we bring the right expertise and materials to the job.",
    callouts: [
      "Kitchen and bathroom renovations in brownstones, attached homes, and multi-families",
      "Exterior work including roofing, siding, and Energy Star window replacement",
      "Masonry, concrete, and brick pointing services throughout the borough",
    ],
    neighborhoods:
      "Bay Ridge • Bed-Stuy • Bensonhurst • Borough Park • Brighton Beach • Bushwick • Canarsie • Carroll Gardens • Clinton Hill • Cobble Hill • Coney Island • Crown Heights • Ditmas Park • Dyker Heights • East Flatbush • East New York • Flatbush • Flatlands • Fort Greene • Gravesend • Greenpoint • Kensington • Marine Park • Midwood • Park Slope • Prospect Heights • Sheepshead Bay • Sunset Park • Williamsburg • Windsor Terrace & More",
  },
  {
    slug: "bronx",
    region: "Bronx",
    headline: "Home Remodeling in the Bronx",
    description:
      "From single-family homes in Riverdale to multi-family buildings in Parkchester, we handle the full range of home improvement work throughout the Bronx. Licensed under NYC DCA# 2076470, our crews meet all city requirements and work efficiently in the varied housing types across the borough.",
    callouts: [
      "Kitchen and bathroom remodels in all building types",
      "Roofing, siding, and window replacement for Bronx homeowners",
      "Masonry, concrete driveways, sidewalks, and brick pointing",
    ],
    neighborhoods:
      "Allerton • Baychester • Bedford Park • Belmont • Castle Hill • City Island • Co-op City • Eastchester • Fordham • Highbridge • Hunts Point • Kingsbridge • Longwood • Marble Hill • Morris Park • Norwood • Parkchester • Pelham Bay • Riverdale • Soundview • Throgs Neck • Tremont & More",
  },
  {
    slug: "nassau-county",
    region: "Nassau County",
    headline: "Home Remodeling in Nassau County",
    description:
      "Based in Franklin Square, Nassau County is where Professional Home Remodeling was built. Our crews have worked in homes from Hewlett to Port Washington, from Garden City to Massapequa. We hold Nassau License #157681 and are deeply familiar with the housing stock across the county — post-war ranches, colonials, split-levels, and larger newer construction. No job requires a long drive; this is our backyard.",
    callouts: [
      "Based in Franklin Square — local crews serving all of Nassau",
      "Nassau License #157681 — fully licensed for all trade work",
      "Kitchen, bathroom, roofing, siding, windows, masonry, and emergency repairs",
    ],
    neighborhoods:
      "Albertson • Atlantic Beach • Baldwin • Bayville • Bellmore • Bethpage • Carle Place • Cedarhurst • East Meadow • East Rockaway • Elmont • Farmingdale • Floral Park • Franklin Square • Freeport • Garden City • Glen Cove • Great Neck • Hempstead • Hewlett • Hicksville • Jericho • Lawrence • Levittown • Long Beach • Lynbrook • Malverne • Manhasset • Massapequa • Merrick • Mineola • New Hyde Park • Oceanside • Old Westbury • Oyster Bay • Plainview • Port Washington • Rockville Centre • Roslyn • Seaford • Syosset • Uniondale • Valley Stream • Wantagh • West Hempstead • Westbury • Woodbury & More",
  },
  {
    slug: "suffolk-county",
    region: "Suffolk County",
    headline: "Home Remodeling in Suffolk County",
    description:
      "We serve Suffolk County homeowners for roofing, siding, windows, kitchen and bathroom renovations, masonry, and emergency repairs. Suffolk License #HI-61255 keeps us fully compliant across the county. From Amityville to the East End, our crews travel throughout Suffolk for the full range of home improvement work.",
    callouts: [
      "Suffolk License #HI-61255 — fully licensed for all residential trade work",
      "Roofing, siding, windows, kitchens, bathrooms, and masonry throughout the county",
      "Emergency roof leak and flooding response available",
    ],
    neighborhoods:
      "Amityville • Babylon • Bay Shore • Brentwood • Commack • Copiague • Deer Park • Dix Hills • East Hampton • Hauppauge • Huntington • Islip • Kings Park • Lake Ronkonkoma • Lindenhurst • Melville • Northport • Patchogue • Riverhead • Ronkonkoma • Sayville • Smithtown • Southampton • Stony Brook • West Babylon • West Islip & More",
  },
  {
    slug: "westchester",
    region: "Westchester County",
    headline: "Home Remodeling in Westchester County",
    description:
      "Licensed in Westchester (WC-32201-H19), we provide the full range of home improvement services to Westchester homeowners — kitchen and bathroom renovations, roofing, siding, windows, masonry, and emergency repairs. Our crews serve communities from Yonkers to Scarsdale and throughout the county.",
    callouts: [
      "Westchester License #WC-32201-H19 — fully licensed for all residential work",
      "Kitchen and bathroom renovations, roofing, siding, and exterior work",
      "Same crews, same standards as our NYC and Nassau jobs",
    ],
    neighborhoods:
      "Ardsley • Bronxville • Eastchester • Larchmont • Mamaroneck • Mount Vernon • New Rochelle • Pelham • Scarsdale • Tuckahoe • Yonkers & Surrounding Areas",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your address?{" "}
              <a href="tel:5166365300" className="ia-link">Call (516) 636-5300</a> (Nassau/Suffolk) or{" "}
              <a href="tel:7183169221" className="ia-link">(718) 316-9221</a> (NYC &amp; Westchester) —
              we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Come to You — Across the New York Metro Area
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Professional Home Remodeling serves Queens, Brooklyn, the Bronx, Nassau County,
                  Suffolk County, and Westchester County. We hold active licenses in all jurisdictions
                  and have been working in homes across the region for over 40 years. Free estimates
                  available seven days a week.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.6s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5166365300">
                    <i className="icon-link" />
                    <span>Call (516) 636-5300 — Nassau</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Nassau &amp; Suffolk: <strong>(516) 636-5300</strong> &mdash;
                NYC &amp; Westchester: <strong>(718) 316-9221</strong>. We confirm
                coverage in 30 seconds and can schedule your free estimate the same day.
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
