"use client";

import { RobotCard } from "@/components/robots/RobotCard";
import type { Robot } from "@/lib/types";

interface RobotGridProps {
  robots: Robot[];
}

export function RobotGrid({ robots }: RobotGridProps) {
  const sorted = [...robots].sort((a, b) => b.year - a.year);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((robot, index) => (
        <RobotCard key={robot.id} robot={robot} index={index} />
      ))}
    </div>
  );
}
