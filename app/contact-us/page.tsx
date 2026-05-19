"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Service Area Data ───────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Queens",
    description:
      "We serve all of Queens — from single-family homes in Whitestone and Bayside to apartment buildings in Astoria and Flushing. Kitchen remodels, bathroom renovations, roofing, siding, windows, and masonry throughout.",
    neighborhoods:
      "Arverne • Astoria • Bayside • Bellerose • College Point • Corona • East Elmhurst • Elmhurst • Far Rockaway • Floral Park • Flushing • Forest Hills • Fresh Meadows • Glen Oaks • Hollis • Howard Beach • Jackson Heights • Jamaica • Kew Gardens • Little Neck • Long Island City • Maspeth • Middle Village • Ozone Park • Queens Village • Rego Park • Richmond Hill • Ridgewood • Rockaway Park • Rosedale • Saint Albans • South Ozone Park • Springfield Gardens • Sunnyside • Whitestone • Woodhaven • Woodside • and more",
  },
  {
    region: "Brooklyn",
    description:
      "Full-service home remodeling across all of Brooklyn — brownstones in Park Slope, two-families in Bay Ridge, pre-war buildings in Williamsburg and Greenpoint. All trades, all neighborhoods.",
    neighborhoods:
      "Bay Ridge • Bed-Stuy • Bensonhurst • Borough Park • Brighton Beach • Bushwick • Canarsie • Carroll Gardens • Clinton Hill • Cobble Hill • Coney Island • Crown Heights • Ditmas Park • Dyker Heights • East Flatbush • East New York • Flatbush • Flatlands • Fort Greene • Gravesend • Greenpoint • Kensington • Marine Park • Midwood • Park Slope • Prospect Heights • Red Hook • Sheepshead Bay • Sunset Park • Williamsburg • Windsor Terrace • and more",
  },
  {
    region: "Bronx",
    description:
      "We handle kitchen remodels, bathroom renovations, roofing, siding, and masonry work throughout the Bronx — from single-family homes in Riverdale to multi-family buildings in Parkchester.",
    neighborhoods:
      "Allerton • Baychester • Bedford Park • Belmont • Castle Hill • City Island • Co-op City • Eastchester • Fordham • Highbridge • Hunts Point • Kingsbridge • Longwood • Marble Hill • Morris Park • Norwood • Parkchester • Pelham Bay • Riverdale • Soundview • Throgs Neck • Tremont • and more",
  },
  {
    region: "Nassau County",
    description:
      "Based in Franklin Square, we're deeply rooted in Nassau County. We handle everything from kitchen and bathroom remodels to roofing, siding, windows, and masonry across all Nassau communities.",
    neighborhoods:
      "Albertson • Atlantic Beach • Baldwin • Bayville • Bellmore • Bethpage • Carle Place • Cedarhurst • East Meadow • East Rockaway • Elmont • Farmingdale • Floral Park • Franklin Square • Freeport • Garden City • Glen Cove • Great Neck • Hempstead • Hewlett • Hicksville • Jericho • Lawrence • Levittown • Long Beach • Lynbrook • Malverne • Manhasset • Massapequa • Merrick • Mineola • New Hyde Park • Oceanside • Old Westbury • Oyster Bay • Plainview • Port Washington • Rockville Centre • Roslyn • Seaford • Syosset • Uniondale • Valley Stream • Wantagh • West Hempstead • Westbury • Woodbury • and more",
  },
  {
    region: "Suffolk County",
    description:
      "We serve homeowners throughout Suffolk County for roofing, siding, windows, kitchen and bathroom remodels, masonry, and emergency repairs — from Amityville to the East End.",
    neighborhoods:
      "Amityville • Babylon • Bay Shore • Brentwood • Commack • Copiague • Deer Park • Dix Hills • East Hampton • Hauppauge • Huntington • Islip • Kings Park • Lake Ronkonkoma • Lindenhurst • Melville • Northport • Patchogue • Riverhead • Ronkonkoma • Sayville • Smithtown • Southampton • Stony Brook • West Babylon • West Islip • and more",
  },
  {
    region: "Westchester County",
    description:
      "Licensed in Westchester (WC-32201-H19), we handle home remodeling, roofing, siding, and masonry work for homeowners throughout the county.",
    neighborhoods:
      "Ardsley • Bronxville • Eastchester • Larchmont • Mamaroneck • Mount Vernon • New Rochelle • Pelham • Scarsdale • Tuckahoe • Yonkers • and surrounding areas",
  },
];

/* ── Stacked area section ────────────────────────────────────── */

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "2.5rem",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <h3 className="h4 ia-margin-1">{area.region}</h3>
      <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
        {area.description}
      </p>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef  = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const mapRef   = useRef<HTMLDivElement>(null);

  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const mapInView   = useInView(mapRef,   { once: true, margin: "0px 0px -60px 0px" });

  const formVis  = formInView  ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";
  const mapVis   = mapInView   ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://www.phr-ny.com/images/hempstead-office.png"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <div ref={formRef} className={`content-block-flex flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Request a Free Estimate
            </h2>
            <p
              className={`p2 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.15s" }}
            >
              Fill out the form below or call us directly. Nassau &amp; Suffolk:{" "}
              <strong>(516) 636-5300</strong> &mdash; NYC &amp; Westchester:{" "}
              <strong>(718) 316-9221</strong>. We follow up fast — usually within
              the hour on weekdays.
            </p>
          </div>

          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              {/*
                TODO: Replace this form with PHR's preferred form solution
                (JotForm, HubSpot, Gravity Forms, etc.).
              */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  maxWidth: "680px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    placeholder="(555) 000-0000"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service" name="service"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Remodeling</option>
                    <option>Roofing</option>
                    <option>Siding</option>
                    <option>Window Replacement</option>
                    <option>Masonry &amp; Concrete</option>
                    <option>Basement Waterproofing</option>
                    <option>Emergency Repair</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "1 / -1" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Describe the project — what you're looking to do and your approximate timeline."
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ─────────────────────────────────────────── */}
      <div ref={areasRef} className={`content-block-flex flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We serve the full New York metro area — Queens, Brooklyn, Bronx,
              Nassau County, Suffolk County, and Westchester. If you&apos;re not
              sure whether we cover your neighborhood, call us — we almost
              certainly do.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {serviceAreas.map((area, i) => (
              <AreaSection key={area.region} area={area} index={i} vis={areasVis} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <div ref={mapRef} className={`flex-module fadeIn wow${mapVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-margin-2 fadeInUpS wow${mapVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Find Us
          </h2>

          {/* Office photo */}
          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.15s", marginBottom: "2rem" }}>
            <img
              src="https://www.phr-ny.com/images/hempstead-office.png"
              alt="Professional Home Remodeling office — 1184 Hempstead Turnpike, Franklin Square, NY"
              width={1326}
              height={714}
              style={{ width: "100%", height: "auto", borderRadius: "4px", display: "block", objectFit: "cover", maxHeight: "400px" }}
            />
          </div>

          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.2s" }}>
            {/* Google Maps embed centered on 1184 Hempstead Turnpike, Franklin Square, NY 11010 */}
            <iframe
              title="Professional Home Remodeling — 1184 Hempstead Turnpike, Franklin Square, NY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3!2d-73.6840178!3d40.7085746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26319ae12ce25%3A0xbfd218bab61c6deb!2sProfessional%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0, display: "block", borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
