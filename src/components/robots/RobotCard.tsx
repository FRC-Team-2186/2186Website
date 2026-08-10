"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Cog } from "lucide-react";
import type { Robot } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RobotCardProps {
  robot: Robot;
  index?: number;
}

export function RobotCard({ robot, index = 0 }: RobotCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ y: -4 }}
        onClick={() => setOpen(true)}
        className="group w-full text-left"
      >
        <div className="overflow-hidden rounded-lg border border-steel-500/35 bg-steel-850 transition group-hover:border-electric/45 group-hover:glow-electric">
          <div className="relative aspect-[4/3] overflow-hidden bg-steel-800">
            {robot.image ? (
              <Image
                src={robot.image}
                alt={`${robot.name} — ${robot.year}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-steel-500">
                <Cog className="h-12 w-12" />
              </div>
            )}
            <div className="absolute left-3 top-3">
              <Badge variant="orange">{robot.year}</Badge>
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-electric">
              {robot.game}
            </p>
            <h3 className="font-display mt-1 text-xl font-semibold text-steel-100">
              {robot.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-steel-400">
              {robot.description}
            </p>
          </div>
        </div>
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>
              {robot.name}{" "}
              <span className="text-steel-500">· {robot.year}</span>
            </DialogTitle>
            <DialogDescription>
              {robot.game} — {robot.description}
            </DialogDescription>
          </DialogHeader>

          <div className="relative aspect-video overflow-hidden rounded-md border border-steel-500/30 bg-steel-800">
            {robot.image && (
              <Image
                src={robot.image}
                alt={robot.name}
                fill
                className="object-cover"
                sizes="512px"
              />
            )}
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            <Spec label="Drivebase" value={robot.specs.drivebase} />
            <Spec label="Intake" value={robot.specs.intake} />
            <Spec label="End Effector" value={robot.specs.endEffector} />
            {robot.specs.weight && (
              <Spec label="Weight" value={robot.specs.weight} />
            )}
          </dl>

          {robot.awards && robot.awards.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {robot.awards.map((award) => (
                <Badge key={award} variant="default">
                  {award}
                </Badge>
              ))}
            </div>
          )}

          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href={robot.tbaUrl} target="_blank" rel="noopener noreferrer">
              View on The Blue Alliance
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-steel-500/25 bg-steel-900/50 p-3">
      <dt className="text-[10px] uppercase tracking-[0.18em] text-steel-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-steel-200">{value}</dd>
    </div>
  );
}
