"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const quickLinks = [
  { label: "Our Services",               href: "/craft-catalog",   external: false },
  { label: "Frequently Asked Questions", href: "/general-faqs",    external: false },
  { label: "Service Areas",              href: "/service-areas",   external: false },
  { label: "Before & After Gallery",     href: "/gallery",         external: false },
  { label: "Contact Us",                 href: "/contact-us",      external: false },
];

const socials = [
  { icon: "icon-facebook", href: "https://www.facebook.com/phr.ny", label: "Facebook" },
  // [TODO: Add Instagram URL if Professional Home Remodeling has an Instagram account]
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  return (
    <footer ref={ref} className={`footer wow${vis}`}>

      {/* ── Top area: logo + widgets ── */}
      <div className="inner inner--slim-1162">

        {/* Logo */}
        <div className={`footer__logo fadeInUpS wow${vis}`}>
          <a href="/">
            <span className="sr-only">Professional Home Remodeling Inc.</span>
            {/* [TODO: Replace with Professional Home Remodeling logo] */}
            <img
              src="/logos/logo-long.svg"
              alt="Professional Home Remodeling Inc."
              width="220"
              height="48"
            />
          </a>
        </div>

        {/* Widgets */}
        <div className="footer__widgets">

          {/* Quick Links */}
          <div className={`footer__widget footer__widget-quick-links fadeInUpS wow${vis}`}>
            <h3 className="footer__heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.external ? "_blank" : "_self"}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`footer__widget footer__widget-donation fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Contact Us</h3>
            <div className="content-entry">
              <p>
                <strong>(516) 636-5300</strong> Nassau &bull; Suffolk<br />
                <strong>(718) 316-9221</strong> NYC &amp; Westchester<br />
                1184 Hempstead Turnpike, Franklin Square, NY 11010<br />
                Mon–Fri: 8am–6:30pm &bull; Sat: 8am–3pm &bull; Sun: By Appt.
              </p>
            </div>
            <a
              href="tel:5166365300"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>Call Nassau: (516) 636-5300</span>
            </a>
          </div>

          {/* Service Areas */}
          <div
            className={`footer__widget footer__widget-subscribe fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Service Areas</h3>
            <div className="content-entry">
              <p>
                Queens &bull; Brooklyn &bull; Bronx<br />
                Nassau County &bull; Suffolk County<br />
                Westchester County
              </p>
            </div>
            <a
              href="/service-areas"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>View All Areas</span>
            </a>
          </div>

        </div>{/* /.footer__widgets */}
      </div>{/* /.inner.inner--slim-1162 */}

      {/* ── Bottom bar ── */}
      <div className="inner">
        <div className={`footer__bottom cleared fadeInUpS wow${vis}`}>

          <div className="footer__bottom__left">
            &copy;2026 Professional Home Remodeling Inc. All rights reserved.
          </div>

          <div className="footer__bottom__center">
            <div className="footer__bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          <div className="footer__bottom__right" id="footer__bottom__right">
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a rel="noopener noreferrer" href={s.href} target="_blank">
                    <i className={s.icon} aria-hidden="true" />
                    <span className="sr-only">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}
