import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Home Remodeling in Queens, Brooklyn & Nassau County",
  description:
    "Answers to the most common questions about home remodeling in the New York metro area — free estimates, licensing, service areas, project timelines, discounts, and more. Professional Home Remodeling Inc.",
  alternates: { canonical: "https://www.phr-ny.com/general-faqs" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always. We provide free written estimates for all projects, seven days a week. There's no obligation, and we don't pressure you into signing on the spot. Call (516) 636-5300 for Nassau and Suffolk, or (718) 316-9221 for NYC and Westchester.",
      },
    },
    {
      "@type": "Question",
      name: "Who will I be dealing with on my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You deal directly with the owner throughout the entire process — from estimate to final walkthrough. We don't hand you off to a sales rep or project manager you've never met. That direct relationship is how we've built our reputation on referrals for over 40 years.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Queens, Brooklyn, the Bronx, Nassau County, Suffolk County, and Westchester County. We maintain active licenses in each region.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We hold active licenses in NYC (DCA# 2076470), Westchester (WC-32201-H19), Suffolk (HI-61255), and Nassau (157681). We are fully insured and bonded, GAF Certified Installers, A+ rated with the Better Business Bureau, and operate to OSHA safety standards on every job site.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer special discounts for senior citizens, veterans and active military, and teachers. Mention your discount when you call for your free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a kitchen or bathroom remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most full kitchen remodels take 2–4 weeks depending on the scope of work, material lead times, and the size of the kitchen. Bathroom remodels typically run 1–2 weeks. We give you a realistic timeline during the estimate so you can plan accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle emergency repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle emergency roof leaks and basement flooding across all of our service areas. We respond fast, assess the full scope, and address the immediate problem the same day when possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with insurance claims for storm or water damage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For roof damage, flooding, and storm-related repairs, we provide written documentation of the damage and the work completed that most insurance carriers accept. We can also communicate directly with your adjuster to help move the claim forward.",
      },
    },
  ],
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
