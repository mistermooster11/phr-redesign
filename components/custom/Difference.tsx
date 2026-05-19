import Image from "next/image";
import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

/* Trust / award badge images — sourced from phr-ny.com */
const trustBadges = [
  { src: "https://www.phr-ny.com/images/forty_years_logo_1.jpg",     alt: "40+ Years in Business",          w: 140, h: 140 },
  { src: "https://www.phr-ny.com/images/satisfaction_logo.jpg",      alt: "100% Satisfaction Guarantee",    w: 140, h: 140 },
  { src: "https://www.phr-ny.com/images/Military-Discount-Logo.png", alt: "Military Discount Available",    w: 140, h: 140 },
  { src: "https://www.phr-ny.com/images/senior_discount_logo.png",   alt: "Senior Discount Available",      w: 140, h: 140 },
];

const stats = [
  {
    stat: "40+",
    label: "Years Serving the New York Metro Area",
    linkText: "About Us",
    href: "/explore/phr-ny",
  },
  {
    stat: "A+",
    label: "BBB Rating — Licensed in NYC, Nassau, Suffolk & Westchester",
    linkText: "Our Credentials",
    href: "/contact-us",
  },
  {
    stat: "FREE",
    label: "Estimates — No Obligation, 7 Days a Week",
    linkText: "Get a Quote",
    href: "/contact-us",
  },
];

export default function Difference() {
  return (
    <div className="front-difference py-20 md:py-48 border-none">
      <div className="inner inner--slim-1172 flex flex-col gap-0 md:gap-10">

        {/* Columns 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">

          {/* Left: heading + first stat */}
          <div className="flex-1">
            <div className="sub-heading">Why Professional Home Remodeling</div>
            <h2 className="h1 mb-[3rem]">
              Deal Directly with the Owner — Every Time
            </h2>
            <div className="hidden md:flex flex-wrap gap-[3rem] py-[2rem]">
              <NumberStatsItem item={stats[0]} />
            </div>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[54%] shrink-0 relative z-20">
            <div className="front-difference__image">
              <VapeImage src="https://www.phr-ny.com/images/bathroom_carousel_1.jpg" />
            </div>
          </div>

        </div>

        {/* Columns 2: remaining stats */}
        <div className={[
          "flex flex-col justify-center gap-6",
          "md:flex-row md:items-center"
        ].join(" ")}>
          <div className="block md:hidden">
            <NumberStatsItem item={stats[0]} />
          </div>
          {stats.slice(1).map((item) => (
            <NumberStatsItem key={item.stat} item={item} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-10 md:pt-16 border-t border-dashed border-black/15">
          {trustBadges.map((badge) => (
            <Image
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              width={badge.w}
              height={badge.h}
              className="object-contain"
              style={{ maxHeight: "90px", width: "auto" }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
