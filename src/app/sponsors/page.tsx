import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { SponsorTiers } from "@/components/sponsors/SponsorTiers";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { Button } from "@/components/ui/button";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsorship tiers, partner logos, and ways to support FRC Team 2186 Dogs of Steel.",
};

export default function SponsorsPage() {
  return (
    <div className="section-pad pb-20 pt-28">
      <div className="container-max">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
          Partners
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold text-steel-100 sm:text-5xl">
          Sponsor Dogs of Steel
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel-400">
          Your support funds materials, competition travel, outreach, and student
          development. Join aerospace and tech partners investing in the next
          generation of STEM leaders.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="orange">
            <a href={data.sponsorPacketUrl} download>
              <Download className="h-4 w-4" />
              Download Sponsor Packet (PDF)
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Donate / Contact Finance
            </Link>
          </Button>
        </div>

        <section className="mt-16">
          <h2 className="font-display mb-8 text-2xl font-bold text-steel-100">
            Sponsorship Levels
          </h2>
          <SponsorTiers tiers={data.sponsorTiers} />
        </section>

        <section className="mt-20">
          <SponsorGrid sponsors={data.sponsors} />
        </section>
      </div>
    </div>
  );
}
