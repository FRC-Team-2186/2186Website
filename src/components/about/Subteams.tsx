"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Code2, Briefcase } from "lucide-react";
import type { Subteam } from "@/lib/types";

const ICONS = {
  wrench: Wrench,
  zap: Zap,
  code: Code2,
  briefcase: Briefcase,
} as const;

interface SubteamsProps {
  subteams: Subteam[];
}

export function Subteams({ subteams }: SubteamsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {subteams.map((subteam, index) => {
        const Icon = ICONS[subteam.icon];
        return (
          <motion.div
            key={subteam.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="border-l-2 border-electric/50 pl-5"
          >
            <div className="mb-2 inline-flex items-center gap-2 text-electric">
              <Icon className="h-5 w-5" />
              <h3 className="font-display text-lg font-semibold text-steel-100">
                {subteam.name}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-steel-400">
              {subteam.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
