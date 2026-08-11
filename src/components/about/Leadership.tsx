"use client";

import { motion } from "framer-motion";
import type { Leader } from "@/lib/types";

interface LeadershipProps {
  leaders: Leader[];
}

export function Leadership({ leaders }: LeadershipProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader, index) => (
        <motion.div
          key={leader.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="rounded-lg border border-steel-500/35 bg-steel-850 p-5"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-steel-500/40 bg-steel-800 font-display text-lg font-bold text-electric">
            {leader.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <h3 className="font-display text-lg font-semibold text-steel-100">
            {leader.name}
          </h3>
          <p className="text-sm text-electric sm:text-base">{leader.role}</p>
        </motion.div>
      ))}
    </div>
  );
}
