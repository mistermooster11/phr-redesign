# PHR Color Map
## Professional Home Remodeling Inc. — QuickFlip Sites Build
**Template:** PipeMonkey-Redesign  
**Last updated:** May 2026

---

## Brand Palette

| Swatch | Hex | Role |
|--------|-----|------|
| ⬛ Black | `#000000` | Top nav bar bg, dark section bg, body text on light |
| 🟡 Yellow | `#F8CB3E` | Masthead bg, footer bg, feature section bg, accent |
| 🔴 Red | `#D0011B` | Primary buttons, hover fills, key links, CTA accents |
| ⬜ White | `#FFFFFF` | Page/content area background, card backgrounds |

---

## CSS Variable Reference (`globals.css`)

```css
--c-orange: #D0011B;  /* red  — maps to "orange" in template */
--c-navy:   #F8CB3E;  /* yellow — maps to "navy" in template */
--c-sky:    #000000;  /* black — maps to "sky/light blue" in template */
```

> **Rule of thumb:** Anywhere the original template used navy (`#172535`) or sky-blue (`#a1c5d3`), we substituted PHR's yellow or black respectively.

---

## Section-by-Section Color Map

### Header

| Sub-section | Background | Text | Links / Icons |
|-------------|------------|------|---------------|
| **Top utility bar** | `#000000` black | `#F8CB3E` yellow | Yellow text; filled yellow+black buttons |
| **Main masthead** | `#F8CB3E` yellow | `#000000` black | Black; hover = `#D0011B` red underline |
| **Nav dropdowns** | `#FFFFFF` white | `#000000` black | Black on hover |

---

### Homepage Sections

| Section | Background | Body Text | Headings | Links / CTAs |
|---------|------------|-----------|----------|--------------|
| **Hero** | Dark image overlay | `#000000` black | `#000000` black | Primary button: red `#D0011B` |
| **How It Works** (Announcements) | `#FFFFFF` white | `#000000` black | `#000000` black | Red buttons |
| **Our Core Services** (Insights accordion) | `#F8CB3E` yellow | `#000000` black | `#000000` black | "Full Service Details" = `#D0011B` red; "Contact Now" = red button |
| **Insights – right panel** (How We Handle It) | `#FFFFFF` white | `#000000` black | `#000000` black | Red button |
| **What Our Customers Say** (Testimonials) | `#F8CB3E` yellow | `#000000` black | `#000000` black | Dots: active = `#D0011B`, inactive = `rgba(0,0,0,0.2)` |
| **CTA strip** (HomeCTA / Difference) | `#000000` black | `#FFFFFF` white | `#FFFFFF` white | Red button |

---

### Service Pages

| Section | Background | Body Text | Headings | Links / CTAs |
|---------|------------|-----------|----------|--------------|
| **Craft Catalog hero** | `#F8CB3E` yellow | `#000000` black | `#000000` black | Breadcrumbs: black |
| **Service listing cards** | `#FFFFFF` white | `#000000` black | `#000000` black | Red accent |
| **Single service hero** (CraftHero) | `#000000` black | `#FFFFFF` white | `#FFFFFF` white | White breadcrumbs |
| **Service detail content** | `#FFFFFF` white | `#000000` black | `#000000` black | Black |
| **CTA banner** (bottom of service page) | `#000000` black | `#FFFFFF` white | `#FFFFFF` white | Links = `#F8CB3E` yellow |

---

### Supporting Pages

| Page / Section | Background | Body Text | Headings | Links / CTAs |
|----------------|------------|-----------|----------|--------------|
| **About Us hero** (ChannelHero) | `#F8CB3E` yellow | `#000000` black | `#000000` black | Black breadcrumbs |
| **About – Get In Touch** | `#F8CB3E` yellow | `#000000` black | `#000000` black | Red button |
| **About – Testimonials** | `#F8CB3E` yellow | `#000000` black | `#000000` black | Black |
| **Contact page** | `#FFFFFF` white | `#000000` black | `#000000` black | Red CTA |
| **FAQ page** | `#FFFFFF` white | `#000000` black | `#000000` black | Active accordion title = black |
| **Service Areas page** | `#FFFFFF` white | `#000000` black | `#000000` black | Black |
| **Gallery page** | `#FFFFFF` white | `#000000` black | `#000000` black | Black |

---

### Footer

| Sub-section | Background | Text | Headings | Links |
|-------------|------------|------|----------|-------|
| **Footer body** | `#F8CB3E` yellow | `#000000` black | `#000000` black | `#000000` black |
| **Bottom bar** | `#F8CB3E` yellow (slightly darker border) | `#000000` black | — | `#000000` black |
| **Social icons** | — | `#000000` black | — | — |

---

## Global Color Rules

1. **Yellow bg (`#F8CB3E`) → always black text.** No exceptions.
2. **White bg (`#FFFFFF`) → always black text.**
3. **Black bg (`#000000`) → white text for body copy; yellow (`#F8CB3E`) for accent links.**
4. **`ia-bg-dark` class = yellow background** (overridden in craft-catalog.css). All descendants get black text via cascade rule.
5. **`ia-bg-sky` class = black background**, white text.
6. **Primary CTA color = `#D0011B` red** (replaces all original orange `#F28322`).
7. **No navy (`#172535` / `#101d2b`) anywhere on the site.** Fully replaced by yellow or black.
8. **No sky-blue (`#a1c5d3`) anywhere.** Replaced by black (on light bg) or white (on dark bg).

---

## Button Styles

| Button Type | Resting State | Hover State |
|-------------|--------------|-------------|
| **Primary** (`.ia-btn`) | Outlined, black border, black text | Red `#D0011B` fill, black text |
| **Primary dark** (`.ia-btn--dark`) | Red `#D0011B` fill, white text | Red fill, black text |
| **Secondary** | Yellow `#F8CB3E` fill, black text | Red fill, black text |
| **Arrow link** (`.ia-link--arrow`) | Black text + arrow icon | Red `#D0011B` |

---

## Retheme Quick-Reference (Future Templates)

To apply the PHR brand to a new template:

### 1. `globals.css` — set variables
```css
--c-orange: #D0011B;   /* all CTA buttons */
--c-navy:   #F8CB3E;   /* all "feature" section backgrounds */
--c-sky:    #000000;   /* replaces light-blue utility color */
```

### 2. `craft-catalog.css` — force ia-bg-dark to yellow
```css
.ia-bg-dark { background: #F8CB3E; }
.ia-bg-dark, .ia-bg-dark h1, .ia-bg-dark h2, .ia-bg-dark h3,
.ia-bg-dark h4, .ia-bg-dark h5, .ia-bg-dark p, .ia-bg-dark li { color: #000000; }
.ia-bg-dark .ia-white, .ia-bg-dark.ia-white { color: #000000; }
```

### 3. `homepage.css` — key overrides
```css
.ia-btn:hover { color: #000000; }         /* button hover text = black */
.sub-heading__white { color: #ffffff; }    /* keep white on truly dark sections */
/* Footer: all text #000000 */
.footer, .footer__heading, .footer a, .footer__bottom { color: #000000; }
```

### 4. Components to check manually
- `Hero.tsx` — h1 / paragraph text color classes (`text-black` not `text-white`)
- `SocialLinks.tsx` (topnav strip) — `bg-[#000000]` topbar, `text-[#F8CB3E]` links
- `Navbar.tsx` — masthead `bg-[#F8CB3E]`, text `text-black`
- `Footer.tsx` — remove `ia-link--white` from footer arrow links
- `service-pages.tsx` — `bgColor: "#000000"` for all service hero banners
- `InsightAccordionTabItem.tsx` — "Full Service Details" link color `#D0011B`
- `banner-craft` links in CSS → `color: #F8CB3E` (yellow on black)
