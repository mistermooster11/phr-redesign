import { notFound } from "next/navigation";
import { getChannelData, channelDataMap } from "@/data/channel";
import ChannelHero         from "@/components/custom/channel/ChannelHero";
import ChannelSidebar      from "@/components/custom/channel/ChannelSidebar";
import ChannelLearnMore    from "@/components/custom/channel/ChannelLearnMore";
import ChannelResources    from "@/components/custom/channel/ChannelResources";
import ChannelCrafts       from "@/components/custom/channel/ChannelCrafts";
import ChannelTestimonials from "@/components/custom/channel/ChannelTestimonials";
import ChannelFlexFeature  from "@/components/custom/channel/ChannelFlexFeature";
import ChannelGetInTouch   from "@/components/custom/channel/ChannelGetInTouch";

/* Pre-render all known slugs at build time */
export function generateStaticParams() {
  return Object.keys(channelDataMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getChannelData(slug);
  if (!data) return {};
  // phr-ny is the only registered slug — tailor the metadata directly.
  return {
    title: "About Us — Professional Home Remodeling Inc. | 40+ Years Serving NYC & Long Island",
    description:
      "Family-owned and operated for over 40 years. Professional Home Remodeling Inc. serves Queens, Brooklyn, the Bronx, Nassau, Suffolk, and Westchester. GAF Certified. A+ BBB. Deal directly with the owner.",
    alternates: { canonical: `https://www.phr-ny.com/explore/${slug}` },
  };
}

export default async function ChannelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getChannelData(slug);
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <ChannelHero data={data.hero} />
      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />
          <div className="channel-container">
            <ChannelLearnMore    data={data.learnMore}    />
            <ChannelResources    data={data.resources}    />
            <ChannelCrafts       data={data.crafts}       />
            <ChannelTestimonials data={data.testimonials} />
            {data.flexFeature && <ChannelFlexFeature data={data.flexFeature} />}
            <ChannelGetInTouch   data={data.getInTouch}   />
          </div>
        </div>
      </div>
    </main>
  );
}
