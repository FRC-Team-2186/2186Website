import type { Metadata } from "next";
import { Subteams } from "@/components/about/Subteams";
import { Leadership } from "@/components/about/Leadership";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, history, subteams, and leadership of FRC Team 2186 Dogs of Steel.",
};

export default function AboutPage() {
  const { team, subteams, leadership } = data;

  return (
    <div className="section-pad pb-20 pt-28">
      <div className="container-max">
        <p className="text-sm font-bold uppercase tracking-[0.3em] sm:text-base text-electric">
          About Us
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold text-steel-100 sm:text-5xl">
          Building robots. Building leaders.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300">
          {team.mission}
        </p>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-steel-100">
            Our History
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel-400">
            {team.history}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display mb-8 text-2xl font-bold text-steel-100">
            Subteams
          </h2>
          <Subteams subteams={subteams} />
        </section>

        <section className="mt-16">
          <h2 className="font-display mb-8 text-2xl font-bold text-steel-100">
            Mentors
          </h2>
          <Leadership leaders={leadership} />
        </section>
      </div>
    </div>
  );
}
