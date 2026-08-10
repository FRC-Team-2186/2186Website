import type { Metadata } from "next";
import { RobotGrid } from "@/components/robots/RobotGrid";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export const metadata: Metadata = {
  title: "Robots",
  description:
    "Season robots, specs, and The Blue Alliance history for FRC Team 2186.",
};

export default function RobotsPage() {
  return (
    <div className="section-pad pb-20 pt-28">
      <div className="container-max">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
          Season History
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold text-steel-100 sm:text-5xl">
          Our Robots
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel-400">
          Explore past competition robots by year. Click a robot for specs, awards,
          and Blue Alliance match history.
        </p>
        <div className="mt-12">
          <RobotGrid robots={data.robots} />
        </div>
      </div>
    </div>
  );
}
