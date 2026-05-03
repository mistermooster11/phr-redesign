"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`front-donation ia-bg-sky flex-module wow fadeInUpS${vis}`}
    >
      <div className="inner inner--slim-1172">
        <div className={`sub-heading wow fadeInUpS${vis}`} style={{ animationDelay: "0.1s" }}>
          Free Estimates — 7 Days a Week
        </div>
        <h2 className={`h2 wow fadeInUpS${vis}`} style={{ animationDelay: "0.15s" }}>
          Ready to Get Started? Call Now
        </h2>
        <div className={`front-donation__in wow fadeInUpS${vis}`} style={{ animationDelay: "0.2s" }}>
          <div className="content-entry">
            <p>
              We serve Queens, Brooklyn, the Bronx, Nassau County, Suffolk County, and
              Westchester. Call Nassau at <strong>(516) 636-5300</strong> or NYC &amp;
              Westchester at <strong>(718) 316-9221</strong> — our team picks up fast
              and we can schedule your free estimate today.
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
  );
}
