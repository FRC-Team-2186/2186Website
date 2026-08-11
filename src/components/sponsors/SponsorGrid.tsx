"use client";

import { motion } from "framer-motion";
import type { Sponsor } from "@/lib/types";

interface SponsorGridProps {
  sponsors: Sponsor[];
  title?: string;
}

const TIER_ORDER = ["gold", "silver", "bronze", "partner"] as const;

export function SponsorGrid({
  sponsors,
  title = "Our Sponsors",
}: SponsorGridProps) {
  const sorted = [...sponsors].sort(
    (a, b) => TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier)
  );

  return (
    <section>
      {title && (
        <h2 className="font-display mb-8 text-2xl font-bold text-steel-100 sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((sponsor, index) => (
          <motion.a
            key={sponsor.id}
            href={sponsor.website || "#"}
            target={sponsor.website ? "_blank" : undefined}
            rel={sponsor.website ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-lg border border-steel-500/35 bg-steel-850/80 px-4 py-6 text-center transition hover:border-electric/45 hover:bg-steel-800"
          >
            <span className="font-display text-lg font-semibold text-steel-100">
              {sponsor.name}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-500 sm:text-sm">
              {sponsor.tier}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
