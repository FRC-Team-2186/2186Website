"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { SponsorTier } from "@/lib/types";

interface SponsorTiersProps {
  tiers: SponsorTier[];
}

export function SponsorTiers({ tiers }: SponsorTiersProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="flex flex-col rounded-lg border border-steel-500/35 bg-steel-850 p-6"
        >
          <div
            className="mb-1 h-1 w-12 rounded-full"
            style={{ backgroundColor: tier.color }}
          />
          <h3 className="font-display mt-3 text-2xl font-bold text-steel-100 sm:text-3xl">
            {tier.name}
          </h3>
          <p className="mt-1 text-base font-semibold text-electric sm:text-lg">
            {tier.amount}
          </p>
          <ul className="mt-5 flex-1 space-y-3">
            {tier.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-2 text-base leading-snug text-steel-300"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
