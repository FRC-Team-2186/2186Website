import type { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import teamData from "@/data/teamData.json";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/robots", label: "Robots" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const { team } = teamData;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-steel-500/30 bg-steel-850">
      <div className="section-pad container-max grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-electric/40 bg-steel-800 font-display text-sm font-bold text-electric">
              2186
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-steel-100">
                Dogs of Steel
              </p>
              <p className="text-xs text-steel-500">
                {team.school} · {team.location}
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-steel-400">
            FIRST Robotics Competition team building competitive robots and STEM
            leaders since {team.rookieYear}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-steel-300">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-steel-400 transition hover:text-electric"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-steel-300">
            Connect
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {team.socials.instagram && (
              <SocialLink href={team.socials.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
            )}
            {team.socials.youtube && (
              <SocialLink href={team.socials.youtube} label="YouTube">
                <YoutubeIcon className="h-4 w-4" />
              </SocialLink>
            )}
            {team.socials.github && (
              <SocialLink href={team.socials.github} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </SocialLink>
            )}
            {team.socials.tba && (
              <SocialLink href={team.socials.tba} label="The Blue Alliance">
                <ExternalLink className="h-4 w-4" />
              </SocialLink>
            )}
            {team.socials.email && (
              <SocialLink href={team.socials.email} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            )}
          </div>
          <p className="mt-6 text-sm text-steel-500">
            Part of the {team.district} district.
          </p>
        </div>
      </div>

      <div className="border-t border-steel-500/20">
        <div className="section-pad container-max flex flex-col gap-2 py-5 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} FRC Team {team.number} — {team.name}. All rights reserved.
          </p>
          <p>Built for STEM · Inspired by FIRST</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-500/40 text-steel-300 transition hover:border-electric/50 hover:text-electric"
    >
      {children}
    </a>
  );
}
