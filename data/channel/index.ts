import type { ChannelPageData } from "@/components/custom/channel/types";
import phrny from "./phr-ny";

const channelDataMap: Record<string, ChannelPageData> = {
  "phr-ny": phrny,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
