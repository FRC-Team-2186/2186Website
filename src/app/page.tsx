import { Hero } from "@/components/home/Hero";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CountdownWidget } from "@/components/home/CountdownWidget";
import { QuickLinks } from "@/components/home/QuickLinks";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export default function HomePage() {
  return (
    <>
      <Hero team={data.team} />
      <StatsCounter stats={data.stats} />
      <CountdownWidget countdown={data.countdown} />
      <QuickLinks links={data.quickLinks} />
      <section className="section-pad border-t border-steel-500/25 py-16">
        <div className="container-max">
          <SponsorGrid sponsors={data.sponsors} title="Proudly Supported By" />
        </div>
      </section>
    </>
  );
}
