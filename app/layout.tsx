import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://www.phr-ny.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Professional Home Remodeling Inc. | Queens, Brooklyn, Nassau, Suffolk & Westchester",
    template: "%s | Professional Home Remodeling Inc.",
  },
  description:
    "Professional Home Remodeling Inc. — 40+ years of kitchen remodeling, bathroom renovations, roofing, siding, windows, masonry & emergency repairs across Queens, Brooklyn, Nassau County, Suffolk County, the Bronx & Westchester. Free estimates. GAF Certified. A+ BBB Rating.",
  keywords: [
    "home remodeling Queens NY",
    "home remodeling Brooklyn NY",
    "home remodeling Nassau County",
    "kitchen remodeling Queens",
    "bathroom remodeling Brooklyn",
    "roofing contractor Nassau County",
    "siding contractor New York",
    "window replacement Queens",
    "masonry contractor Long Island",
    "basement waterproofing Nassau County",
    "emergency home repairs NYC",
    "GAF certified roofer",
    "professional home remodeling",
  ],
  authors: [{ name: "Professional Home Remodeling Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Professional Home Remodeling Inc.",
    title: "Professional Home Remodeling Inc. | Queens, Brooklyn, Nassau, Suffolk & Westchester",
    description:
      "Family-run home remodeling company with 40+ years serving NYC and Long Island. Kitchens, bathrooms, roofing, siding, windows, masonry & more. Free estimates. GAF Certified. A+ BBB.",
    images: [
      {
        url: "/images/IMG_9688-1024x682.jpg",
        width: 1024,
        height: 682,
        alt: "Professional Home Remodeling Inc. — home remodeling in Queens, Brooklyn & Nassau County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Home Remodeling Inc. | NYC & Long Island",
    description:
      "40+ years of kitchens, bathrooms, roofing, siding, windows & masonry across Queens, Brooklyn, Nassau & Westchester. Free estimates. (516) 636-5300.",
    images: ["/images/IMG_9688-1024x682.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── LocalBusiness JSON-LD Schema ──────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Professional Home Remodeling Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-large.svg`,
  image: `${SITE_URL}/images/IMG_9688-1024x682.jpg`,
  description:
    "Family-run home remodeling company serving Queens, Brooklyn, the Bronx, Nassau County, Suffolk County, and Westchester with 40+ years of experience.",
  telephone: ["+1-516-636-5300", "+1-718-316-9221"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1184 Hempstead Turnpike",
    addressLocality: "Franklin Square",
    addressRegion: "NY",
    postalCode: "11010",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7051,
    longitude: -73.6751,
  },
  areaServed: [
    { "@type": "City", name: "Queens", containedIn: "New York" },
    { "@type": "City", name: "Brooklyn", containedIn: "New York" },
    { "@type": "City", name: "Bronx", containedIn: "New York" },
    { "@type": "AdministrativeArea", name: "Nassau County" },
    { "@type": "AdministrativeArea", name: "Suffolk County" },
    { "@type": "AdministrativeArea", name: "Westchester County" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Remodeling Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masonry & Concrete" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Repairs" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "47",
    bestRating: "5",
  },
  sameAs: ["https://www.facebook.com/phr.ny"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
