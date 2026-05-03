"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "Do you offer free estimates?",
    content: (
      <p>
        Yes — always. We provide free written estimates for all projects, seven
        days a week. There&apos;s no obligation, and we don&apos;t pressure you
        into signing on the spot. Call{" "}
        <a href="tel:5166365300" className="ia-link">(516) 636-5300</a> for
        Nassau and Suffolk, or{" "}
        <a href="tel:7183169221" className="ia-link">(718) 316-9221</a> for
        NYC and Westchester.
      </p>
    ),
  },
  {
    title: "Who will I be dealing with on my project?",
    content: (
      <p>
        You deal directly with the owner throughout the entire process — from
        estimate to final walkthrough. We don&apos;t hand you off to a sales
        rep or a project manager you&apos;ve never met. That direct
        relationship is how we&apos;ve built our reputation on referrals for
        over 40 years.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>
          We serve the full New York metro area, including Queens, Brooklyn,
          the Bronx, Nassau County, Suffolk County, and Westchester County.
          We maintain active licenses in each region.
        </p>
        <p>
          <strong>Queens:</strong> Astoria, Bayside, Flushing, Forest Hills,
          Jamaica, Maspeth, Ridgewood, Whitestone, and all other neighborhoods.
        </p>
        <p>
          <strong>Nassau County:</strong> Franklin Square, Garden City, Great
          Neck, Hempstead, Levittown, Manhasset, Massapequa, Mineola, Rockville
          Centre, and more.
        </p>
        <p>
          <strong>Suffolk County:</strong> Amityville, Babylon, Bay Shore,
          Commack, Huntington, Smithtown, and throughout the Island.
        </p>
      </>
    ),
  },
  {
    title: "Are you licensed and insured?",
    content: (
      <p>
        Yes. We hold active licenses in NYC (DCA# 2076470), Westchester
        (WC-32201-H19), Suffolk (HI-61255), and Nassau (157681). We are fully
        insured and bonded, GAF Certified Installers, A+ rated with the Better
        Business Bureau, and operate to OSHA safety standards on every job site.
      </p>
    ),
  },
  {
    title: "Do you offer discounts?",
    content: (
      <p>
        Yes. We offer special discounts for senior citizens, veterans and active
        military, and teachers. Mention your discount when you call for your
        free estimate.
      </p>
    ),
  },
  {
    title: "How long does a kitchen or bathroom remodel take?",
    content: (
      <p>
        Most full kitchen remodels take 2–4 weeks depending on the scope of
        work, material lead times, and the size of the kitchen. Bathroom
        remodels typically run 1–2 weeks. We give you a realistic timeline
        during the estimate so you can plan accordingly — and we stick to it.
      </p>
    ),
  },
  {
    title: "Do you handle emergency repairs?",
    content: (
      <p>
        Yes. We handle emergency roof leaks and basement flooding across all
        of our service areas. Call us as soon as the problem develops — both
        issues get significantly worse the longer they&apos;re left unaddressed.
        We respond fast, assess the full scope, and address the immediate
        problem the same day when possible.
      </p>
    ),
  },
  {
    title: "Can you help with insurance claims for storm or water damage?",
    content: (
      <p>
        Yes. For roof damage, flooding, and storm-related repairs, we provide
        written documentation of the damage and the work completed that most
        insurance carriers accept. We can also communicate directly with your
        adjuster to help move the claim forward.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Call Us — We Pick Up Fast
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Nassau &amp; Suffolk: <strong>(516) 636-5300</strong> &mdash;
                  NYC &amp; Westchester: <strong>(718) 316-9221</strong>.
                  Our team answers questions, schedules estimates, and gives you
                  an honest assessment over the phone — seven days a week.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call Nassau: (516) 636-5300"
                    href="tel:5166365300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
