import Image from "next/image";
import { cn } from "@/lib/utils";
import teamData from "@/data/teamData.json";

interface TeamLogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export function TeamLogo({
  className,
  size = 36,
  priority = false,
}: TeamLogoProps) {
  const { team } = teamData;

  return (
    <Image
      src={team.logo}
      alt={`${team.name} logo`}
      width={size}
      height={size}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
