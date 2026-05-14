"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CraftCatalogHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="hero-org fadeIn wow" ref={ref}>
      <div className="hero-org__top ia-bg-dark">
        <div className="inner inner--slim-1172 cleared">
          <div className="hero-org-in">

            {/* Text block */}
            <div className="hero-org__text">
              <div className={`breadcrumbs ia-sky fadeInUpS wow${vis}`}>
                <a href="/">Home</a>
                <em>&gt;</em>
                <span className="post post-page current-item">Our Services</span>
              </div>
              <h1 className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                Our Services
              </h1>
              <div
                className={`content-entry fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  From kitchen remodels and bathroom renovations to roofing, siding, and masonry, Professional Home Remodeling
                  handles every drain problem in Brooklyn, Queens, and Nassau County. We use
                  pro-grade equipment, give you upfront pricing, and don&apos;t leave until
                  the job is done right.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
