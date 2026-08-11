"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Stat } from "@/lib/types";

interface StatsCounterProps {
  stats: Stat[];
}

function AnimatedValue({
  value,
  suffix = "",
  inView,
}: {
  value: number;
  suffix?: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="section-pad relative border-y border-steel-500/25 bg-steel-850/80 py-16"
    >
      <div className="container-max grid gap-8 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-4xl font-bold text-electric md:text-5xl">
              <AnimatedValue
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
            </p>
            <p className="mt-2 font-display text-base font-bold uppercase tracking-[0.12em] text-steel-200 sm:text-lg">
              {stat.label}
            </p>
            {stat.description && (
              <p className="mt-1 text-base text-steel-500">{stat.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
