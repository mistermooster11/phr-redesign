
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Kitchen Remodeling",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with a PHR kitchen project photo]
    description:
      "Complete kitchen renovations from the studs up — custom cabinetry, granite or quartz countertops, tile backsplash, new flooring, sinks, faucets, and finish paint. We design around what you want your kitchen to look like.",
    learnHref: "/craft-catalog/kitchen-remodeling",
    steps: [
      { label: "Free Estimate", body: "We walk the kitchen, discuss your goals, and provide a detailed written estimate at no charge." },
      { label: "Design & Approve", body: "You select cabinets, countertops, tile, and finishes. We finalize the plan and lock in your start date." },
      { label: "Full Demolition & Build", body: "We demo down to the studs and rebuild — insulation, sheetrock, flooring, cabinetry, countertops, backsplash, and finish paint." },
      { label: "Final Walkthrough", body: "We review every detail with you before closing out. All debris is hauled off-site." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Bathroom Remodeling",
    image: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with a PHR bathroom project photo]
    description:
      "Custom bathroom renovations built to your specifications. Full demolition to the studs, then rebuild with proper waterproofing, custom tile, and all-new fixtures — tubs, showers, toilets, vanities, and medicine cabinets.",
    learnHref: "/craft-catalog/bathroom-remodeling",
    steps: [
      { label: "Design Consultation", body: "We discuss your vision, walk the space, and help you choose tile, fixtures, and finishes." },
      { label: "Written Estimate", body: "Detailed scope and price before any work starts — no pressure." },
      { label: "Demo & Rebuild", body: "Full demolition to the studs, proper waterproofing, new backer board, custom tile, and all-new fixtures installed clean." },
      { label: "Final Inspection", body: "We walk the finished bathroom with you, confirm every detail, and remove all debris." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Roofing",
    image: "/images/iStock-530983109-1.jpg",
    // [TODO: Replace with a PHR roofing project photo]
    description:
      "GAF Certified roof installations and repairs serving Queens, Brooklyn, Nassau, Suffolk, the Bronx, and Westchester. Free inspections. Emergency leak response available.",
    learnHref: "/craft-catalog/roofing",
    steps: [
      { label: "Free Inspection", body: "We inspect the full roof and document all damage — written estimate at no charge." },
      { label: "Material Selection", body: "As GAF Certified Installers, we offer manufacturer-backed shingles with full warranty coverage." },
      { label: "Professional Installation", body: "Experienced crew installs or replaces the roofing system to manufacturer specification." },
      { label: "Cleanup & Sign-Off", body: "All debris hauled off-site. Final walkthrough confirms everything is sealed and finished." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Siding & Windows",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with a PHR siding or window project photo]
    description:
      "Insulated vinyl siding in 20+ colors with lifetime manufacturer guarantee, plus Energy Star-rated window replacement. Complete exterior packages including fascia, gutters, and aluminum window capping.",
    learnHref: "/craft-catalog/siding",
    steps: [
      { label: "Color & Style Selection", body: "We bring samples to your home so you can see your options against the real exterior before deciding." },
      { label: "Written Estimate", body: "Full scope and price — material and labor — before any commitment." },
      { label: "Installation", body: "Siding includes insulation board, aluminum fascia, window/door recaps, and seamless gutters. Windows include Energy Star glass, argon fill, and aluminum capping." },
      { label: "Warranty Documentation", body: "Lifetime manufacturer guarantee on siding. All window and exterior work fully documented." },
    ] as AccordionStep[],
  },
];
