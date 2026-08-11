import type { Metadata } from "next";
import { Gallery } from "@/components/media/Gallery";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photo and video highlights from competitions, build season, and outreach.",
};

export default function MediaPage() {
  return (
    <div className="section-pad pb-20 pt-28">
      <div className="container-max">
        <p className="text-sm font-bold uppercase tracking-[0.3em] sm:text-base text-electric">
          Gallery
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold text-steel-100 sm:text-5xl">
          Media & Highlights
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel-400">
          Filter by competitions, build season, or outreach. Replace placeholder
          images in <code className="text-electric">public/images/gallery</code>{" "}
          as new media comes in.
        </p>
        <div className="mt-12">
          <Gallery items={data.gallery} />
        </div>
      </div>
    </div>
  );
}
