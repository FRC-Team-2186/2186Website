import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ExternalLink, Mail } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import teamData from "@/data/teamData.json";
import type { TeamData } from "@/lib/types";

const data = teamData as TeamData;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FRC Team 2186 Dogs of Steel — mentors, finance, and social links.",
};

export default function ContactPage() {
  const { team } = data;

  return (
    <div className="section-pad pb-20 pt-28">
      <div className="container-max">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
          Get in Touch
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold text-steel-100 sm:text-5xl">
          Contact & Socials
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel-400">
          Questions about sponsorship, visiting the team, or joining? Send a
          message or reach mentors and finance leads directly.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-display text-lg font-semibold text-steel-100">
                Head Mentors
              </h2>
              <ul className="mt-4 space-y-3">
                {team.contact.headMentors.map((person) => (
                  <li key={person.email + person.name}>
                    <p className="text-base font-semibold text-steel-200 sm:text-lg">
                      {person.name}
                    </p>
                    <p className="text-base text-steel-500">{person.role}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-1 inline-flex items-center gap-1.5 text-base text-electric hover:underline sm:text-lg"
                    >
                      <Mail className="h-4 w-4" />
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-steel-100">
                Finance Leaders
              </h2>
              <ul className="mt-4 space-y-3">
                {team.contact.finance.map((person) => (
                  <li key={person.email + person.name}>
                    <p className="text-base font-semibold text-steel-200 sm:text-lg">
                      {person.name}
                    </p>
                    <p className="text-base text-steel-500">{person.role}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-1 inline-flex items-center gap-1.5 text-base text-electric hover:underline sm:text-lg"
                    >
                      <Mail className="h-4 w-4" />
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-steel-100">
                Social Links
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {team.socials.instagram && (
                  <SocialChip href={team.socials.instagram} label="Instagram">
                    <InstagramIcon className="h-4 w-4" />
                  </SocialChip>
                )}
                {team.socials.youtube && (
                  <SocialChip href={team.socials.youtube} label="YouTube">
                    <YoutubeIcon className="h-4 w-4" />
                  </SocialChip>
                )}
                {team.socials.github && (
                  <SocialChip href={team.socials.github} label="GitHub">
                    <GithubIcon className="h-4 w-4" />
                  </SocialChip>
                )}
                {team.socials.tba && (
                  <SocialChip href={team.socials.tba} label="TBA">
                    <ExternalLink className="h-4 w-4" />
                  </SocialChip>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SocialChip({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-steel-500/40 px-3 py-2 text-sm text-steel-300 transition hover:border-electric/50 hover:text-electric"
    >
      {children}
      {label}
    </a>
  );
}
