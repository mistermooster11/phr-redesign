# Professional Home Remodeling Inc. — Content Brief
**QuickFlip Sites | Build Log**  
Date: May 3, 2026  
Prospect: https://www.phr-ny.com/  
Template: PipeMonkey-Redesign (PipeMonkey Template v1)  
Reference site: N/A — prospect site had sufficient structure; template map used for nav decisions

---

## Source Material Summary

- **Business name**: Professional Home Remodeling Inc. (PHR)
- **Address**: 1184 Hempstead Turnpike, Franklin Square, NY 11010
- **Phones**: (516) 636-5300 (Nassau/Suffolk) · (631) 489-5252 (Suffolk) · (718) 316-9221 (NYC & Westchester)
- **Primary phone used in build**: (516) 636-5300 (Nassau) — listed first on site, matches business location
- **Email**: mike@phr-ny.com
- **Facebook**: https://www.facebook.com/phr.ny
- **Years in business**: 40+
- **Hours**: Mon–Fri 8AM–6:30PM · Sat 8AM–3PM · Sun By Appointment
- **Certifications**: GAF Certified Installers · A+ BBB Rating · OSHA Safety Standards
- **Licenses**: NYC# 2076470-DCA · Westchester# WC-32201-H19 · Suffolk# HI-61255 · Nassau# 157681
- **Discounts**: Senior citizens, veterans/military, teachers

---

## Service Inventory

All services extracted directly from phr-ny.com homepage and meta title.

1. Kitchen Remodeling
2. Bathroom Remodeling
3. Roofing (confirmed via GAF Certified Installer credential and meta title)
4. Siding (Insulated Vinyl Siding — 20+ colors, lifetime manufacturer guarantee)
5. Window Replacement (Energy Star rated, 7/8" insulated glass, U Factor .27, Low E, argon gas)
6. Masonry & Concrete (driveways, walkways, Cambridge pavers, brick pointing, stoops, concrete waterproofing)
7. Basement Waterproofing (flooding response — multiple causes addressed)
8. Emergency Repairs (roof leaks, basement flooding)

**Total: 8 services — all represented in crafts.ts and service-pages.tsx.**

---

## Services Consolidated

None. Every service listed on the prospect's site appears as its own entry.

Note: "Basement Waterproofing" and "Emergency Repairs" both address flooding, but they are genuinely distinct — Emergency Repairs covers rapid response to active roof/flooding events; Basement Waterproofing covers the structural/drainage fix. Kept separate.

---

## Pages Built & Content Decisions

### Homepage (app/page.tsx)
Template default section order preserved: Hero → HomeSectionWithLine (Announcements) → Insights → Testimonial → HomeCTA. All trade-appropriate, no sections removed.

### Hero (components/custom/Hero.tsx)
- H1: "NYC's Home Remodeling Experts — 40 Years, Done Right"
- Subhead: references full service list and all 6 regions
- CTA: "Call (516) 636-5300" — Nassau primary number
- Hero video: NCCER placeholder retained with TODO comment

### About Us (data/channel/phr-ny.tsx)
- Fully extracted from prospect site: 40+ years, family-run, owner-direct, referral-based reputation
- Certifications and license numbers extracted verbatim
- Senior/military/teacher discounts noted — extracted directly from site
- Emergency feature section: dual phone numbers for Nassau and NYC

### Services Catalog (data/craft-catalog/crafts.ts)
- 8 services replacing the 8 Pipe Monkeys drain services
- Slugs follow kebab-case naming

### Service Detail Pages (data/craft-catalog/service-pages.tsx)
- All 8 services fully written with Overview, What's Included/When You Need It, Our Process, and Related Services
- Kitchen and Bathroom remodel descriptions extracted from phr-ny.com
- Siding specifications (foam insulation board, aluminum fascia, seamless gutters, lifetime guarantee) extracted verbatim
- Window specs (7/8" glass, U Factor .27, Low E, argon gas) extracted verbatim
- Masonry materials (4,000 PSI concrete, Cambridge pavers with armor-tech) extracted verbatim
- Emergency Repairs section structure (roof leaks vs. flooding) extracted verbatim

### Programs / Service Overview (data/programs.tsx)
- All 8 services represented with 1-paragraph summaries
- Copy tightened from prospect's verbose original descriptions

### Announcements / How It Works
- 3-step process (Free Estimate → Approve & Schedule → Complete & Clean Up)
- Reflects PHR's actual documented process and owner-direct model

### Difference Section
- Stats: 40+ years · A+ BBB · FREE Estimates
- Sub-heading: "Why Professional Home Remodeling"
- H2: "Deal Directly with the Owner — Every Time"

### Accordion / Insights
- 4 services featured: Kitchen Remodeling · Bathroom Remodeling · Roofing · Siding & Windows
- Steps extracted from PHR's process; adapted to remodeling (not drain service)

### Testimonials
- 3 placeholder reviews written in voice appropriate to this trade
- All flagged with TODO: Replace with real verified reviews

### FAQs (app/general-faqs/page.tsx)
- 8 FAQs generated covering: free estimates, owner-direct model, service areas, licensing, discounts, project timelines, emergency repairs, insurance claims
- All answers reflect PHR's actual differentiators extracted from site

### Contact Page (app/contact-us/page.tsx)
- Service dropdown updated for all 8 PHR services
- All 6 service area regions represented with neighborhood lists
- Google Maps embed pointed to PHR's actual business address at 1184 Hempstead Turnpike, Franklin Square
- Both phone numbers displayed prominently

### Service Areas (app/service-areas/page.tsx)
- 6 full regional sections: Queens, Brooklyn, Bronx, Nassau County, Suffolk County, Westchester County
- Neighborhood lists extracted directly from phr-ny.com/phr-serviceareas.html
- License numbers cited per region where applicable

### Gallery (app/gallery/page.tsx)
- 4 placeholder cards: Kitchen, Bathroom, Siding & Windows, Masonry
- All flagged TODO: Replace with real PHR project photos

### Blog (app/blog/page.tsx)
- 6 article placeholders on topics relevant to PHR's services: kitchen costs, roofing signs, siding insulation, bathroom tile, basement flooding, Energy Star windows
- All flagged TODO: Replace with real content

### Privacy Policy (app/privacy-policy/page.tsx)
- Company name updated to Professional Home Remodeling Inc.
- Phone number updated to (516) 636-5300
- Address updated to 1184 Hempstead Turnpike, Franklin Square, NY 11010

---

## Navigation Changes

Template default was 4-item flat nav. Added "Service Areas" for this client given 6 distinct regional coverage areas:

**Final nav**: Home | Services | Service Areas | FAQs | Contact

---

## Copy Generation Log

The following sections were generated (not extracted) due to content gaps:

| Section | Content Generated | Reason |
|---------|------------------|--------|
| Hero H1 & subhead | Yes | Prospect site had no headline-style marketing copy |
| Announcements "How It Works" | Yes | Prospect site had a process implicit in copy; made explicit |
| Difference stats | Yes | No stat callouts on prospect site; derived from verified facts (40 yrs, A+ BBB, free estimates) |
| Accordion steps | Yes | Step-by-step format not on prospect site; reflects actual PHR process |
| FAQ answers | Yes | No FAQ section on prospect site; modeled on PHR's documented process and differentiators |
| Testimonials | Yes — PLACEHOLDERS | No reviews found on prospect site at time of crawl |
| Blog posts | Yes — PLACEHOLDERS | No blog on prospect site |
| Gallery cards | Structural only | No project photos extractable from crawl |
| About Us learnMore copy | Partially generated | Expanded from thin prospect site "About Us" paragraph using verified facts |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Hero video/image | `components/custom/Hero.tsx` | Replace NCCER placeholder video with PHR project footage or a kitchen/exterior photo |
| How It Works photo | `components/custom/Announcements.tsx` | Replace with PHR team or job site photo |
| Difference trust photo | `components/custom/Difference.tsx` | Replace with PHR project or team photo |
| Accordion service images (4) | `lib/constants/AccordionItems.tsx` | One photo per service: Kitchen, Bathroom, Roofing, Siding/Windows |
| About Us hero bg | `data/channel/phr-ny.tsx → hero.imageBg` | Replace `/images/IMG_9688...` with PHR project photo |
| About Us flex feature image | `data/channel/phr-ny.tsx → flexFeature.imageSrc` | Replace placeholder with PHR emergency/exterior photo |
| Contact hero | `app/contact-us/page.tsx → CraftHero bgImage` | Replace with PHR project photo |
| Gallery before/after photos (4) | `app/gallery/page.tsx → galleryItems[].before/.after` | Replace all 4 sets with real PHR project photos |
| Logo (mobile header) | `components/custom/header/MobileNav.tsx` + `Topnav.tsx` | Replace `/logos/logo-94.svg` |
| Logo (footer) | `components/custom/Footer.tsx` | Replace `/logos/logo-long.svg` |
| Testimonials (3) | `components/custom/Testimonial.tsx` | Replace all 3 placeholder reviews with real verified reviews |
| Blog posts (6) | `app/blog/page.tsx` | Replace placeholder articles with real content |
| Contact form | `app/contact-us/page.tsx` | Replace placeholder form with JotForm/HubSpot or preferred solution |
| Instagram | `components/custom/Footer.tsx → socials` | Add Instagram URL if PHR has an account |
| Suffolk phone | Multiple files | (631) 489-5252 is listed on site but not prominently featured in build — add if desired |
| Email address | Not currently in build | mike@phr-ny.com not added to footer/contact — add if client wants email exposed |
| Service detail hero images | `app/craft-catalog/[slug]/page.tsx → PLACEHOLDER_BG` | Replace shared placeholder with per-service job photos |
