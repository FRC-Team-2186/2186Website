"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TeamInfo } from "@/lib/types";

interface HeroProps {
  team: TeamInfo;
}

export function Hero({ team }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed hero visual plane */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, transparent 40%),
              linear-gradient(225deg, rgba(184, 134, 11, 0.1) 0%, transparent 35%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23121212'/%3E%3Cstop offset='1' stop-color='%23050505'/%3E%3C/linearGradient%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23d4af37' stroke-opacity='0.12' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Crect width='1200' height='800' fill='url(%23grid)'/%3E%3Ccircle cx='900' cy='280' r='180' fill='%23d4af37' fill-opacity='0.07'/%3E%3Ccircle cx='200' cy='500' r='220' fill='%23b8860b' fill-opacity='0.05'/%3E%3Cpath d='M100 650 L350 400 L500 520 L750 220 L950 380 L1100 180' fill='none' stroke='%23d4af37' stroke-opacity='0.28' stroke-width='3'/%3E%3C/svg%3E")
            `,
          }}
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <motion.div
          className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-electric/20 blur-[100px]"
          animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-neon-orange/15 blur-[110px]"
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex min-h-[100svh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6 md:px-8 lg:px-10 xl:pl-14 xl:pr-8">
        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-8">
          <div className="min-w-0 flex-1 md:max-w-[48%] lg:max-w-[44%] xl:max-w-[40%]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-electric"
            >
              {team.school} · {team.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display overflow-visible text-5xl font-bold leading-[1.05] tracking-tight text-steel-100 sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {/* Extra inline padding prevents gradient/clipping of edge glyphs (e.g. G) */}
              <span className="block overflow-visible py-1 pr-[0.12em] text-gradient-steel">
                Dogs of Steel
              </span>
              <span className="mt-2 block text-2xl font-semibold text-steel-400 sm:text-3xl md:text-3xl lg:text-4xl">
                FRC Team {team.number}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-steel-300 sm:text-lg"
            >
              High-performance robotics from Westfield High School — building
              competitive machines and STEM leaders since {team.rookieYear}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" variant="orange">
                <Link href="/sponsors">
                  Sponsor Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About the Team</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/robots">Our Robots</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex shrink-0 justify-center md:ml-auto md:mr-4 md:justify-end md:-translate-x-4 lg:mr-8 lg:-translate-x-8 xl:-translate-x-10"
          >
            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              width={640}
              height={640}
              priority
              className="h-60 w-60 object-contain drop-shadow-[0_0_52px_rgba(212,175,55,0.42)] sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] xl:h-[34rem] xl:w-[34rem]"
            />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-steel-500 transition hover:text-electric"
        aria-label="Scroll to stats"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
