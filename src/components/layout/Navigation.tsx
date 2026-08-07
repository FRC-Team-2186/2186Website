"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robots", label: "Robots" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-steel-500/30 bg-steel-900/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="section-pad container-max flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-electric/40 bg-steel-800 font-display text-sm font-bold text-electric transition group-hover:glow-electric">
            2186
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-wide text-steel-100">
              Dogs of Steel
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-steel-500">
              FRC Team 2186
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-electric"
                      : "text-steel-300 hover:text-steel-100"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-electric"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="orange">
            <Link href="/sponsors">Sponsor Us</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-500/40 text-steel-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-steel-500/30 bg-steel-900/98 backdrop-blur-md lg:hidden"
          >
            <ul className="section-pad container-max flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-medium",
                        active
                          ? "bg-electric/10 text-electric"
                          : "text-steel-200 hover:bg-steel-800"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button asChild className="w-full" variant="orange">
                  <Link href="/sponsors">Sponsor Us</Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
