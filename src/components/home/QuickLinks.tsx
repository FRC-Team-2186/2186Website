"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HandCoins, Info, Bot } from "lucide-react";
import type { QuickLink } from "@/lib/types";

const ICONS = {
  sponsor: HandCoins,
  about: Info,
  robots: Bot,
} as const;

interface QuickLinksProps {
  links: QuickLink[];
}

export function QuickLinks({ links }: QuickLinksProps) {
  return (
    <section className="section-pad pb-20 pt-4">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-8 text-2xl font-bold text-steel-100 sm:text-3xl"
        >
          Quick Links
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon =
              ICONS[link.id as keyof typeof ICONS] ?? ArrowUpRight;
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group flex h-full flex-col border-b border-steel-500/30 pb-5 transition hover:border-electric/50"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-500/40 text-electric transition group-hover:border-electric/50 group-hover:bg-electric/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-steel-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-steel-100 transition group-hover:text-electric">
                    {link.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
