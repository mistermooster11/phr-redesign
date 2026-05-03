import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

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
              {/* [TODO: Replace with a Professional Home Remodeling team or project photo] */}
              <VapeImage src="/images/IMG_9750-1024x683.jpg" />
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

      </div>
    </div>
  );
}
