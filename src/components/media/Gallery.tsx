"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "competitions", label: "Competitions" },
  { id: "build-season", label: "Build Season" },
  { id: "outreach", label: "Outreach" },
  { id: "team", label: "Team" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) =>
      item.tags.includes(filter as GalleryItem["tags"][number])
    );
  }, [filter, items]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm font-medium transition",
              filter === f.id
                ? "border-electric/50 bg-electric/15 text-electric"
                : "border-steel-500/35 text-steel-400 hover:border-steel-400 hover:text-steel-200"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.figure
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-lg border border-steel-500/35 bg-steel-850"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-display text-base font-semibold text-steel-100">
                  {item.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-steel-500">
                  {item.year} · {item.tags.join(" · ")}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
