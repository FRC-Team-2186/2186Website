"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import type { CountdownEvent } from "@/lib/types";

interface CountdownWidgetProps {
  countdown: CountdownEvent;
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[5.5rem] flex-col items-center rounded-md border border-steel-500/35 bg-steel-900/70 px-3 py-4 sm:min-w-[6.5rem] sm:px-4">
      <span
        className="font-display text-4xl font-bold tabular-nums text-electric sm:text-5xl"
        suppressHydrationWarning
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel-500 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export function CountdownWidget({ countdown }: CountdownWidgetProps) {
  const time = useCountdown(countdown.targetDate);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="section-pad py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="container-max overflow-hidden rounded-xl border border-steel-500/35 bg-gradient-to-br from-steel-800 to-steel-850 p-6 sm:p-10"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <div className="mb-3 inline-flex items-center gap-2 text-neon-orange">
              <Timer className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                {countdown.label}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold text-steel-100 sm:text-3xl">
              {countdown.description}
            </h2>
            <p className="mt-2 text-sm text-steel-400">
              Mark your calendars — build season starts when Kickoff drops.
            </p>
          </div>

          {!mounted ? (
            <div className="flex flex-wrap gap-3" aria-hidden>
              <Unit value={0} label="Days" />
              <Unit value={0} label="Hours" />
              <Unit value={0} label="Mins" />
              <Unit value={0} label="Secs" />
            </div>
          ) : time.expired ? (
            <p className="font-display text-xl font-semibold text-electric">
              Season is live — go build!
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              <Unit value={time.days} label="Days" />
              <Unit value={time.hours} label="Hours" />
              <Unit value={time.minutes} label="Mins" />
              <Unit value={time.seconds} label="Secs" />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
