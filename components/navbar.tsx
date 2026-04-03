"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const scrollSpring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 30,
  mass: 0.8,
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScroll(10);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 z-50 flex flex-col items-center"
      style={{ top: 0 }}
    >
      {/* ── DESKTOP ─────────────────────────────────────────────────────────── */}
      <motion.div
        className="hidden md:flex w-full items-start justify-center relative"
        animate={{ paddingTop: scrolled ? 16 : 0 }}
        transition={scrollSpring}
      >
        {/* Gradient scrim — original color */}
        <motion.div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
          }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={scrollSpring}
        />

        <motion.nav
          // Using cn to handle the background color class properly
          className={cn(
            "relative flex items-center overflow-hidden transition-colors duration-300",
            scrolled
              ? "bg-background/80 border border-border"
              : "bg-transparent border-transparent",
          )}
          animate={{
            paddingLeft: scrolled ? 28 : 40,
            paddingRight: scrolled ? 28 : 40,
            paddingTop: scrolled ? 10 : 20,
            paddingBottom: scrolled ? 10 : 20,
            borderRadius: scrolled ? 9999 : 0,
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05)"
              : "none",
            width: scrolled ? "270px" : "100%",
          }}
          transition={scrollSpring}
        >
          <motion.div
            animate={{
              opacity: scrolled ? 0 : 1,
              width: scrolled ? 0 : "auto",
              marginRight: scrolled ? 0 : "auto",
            }}
            transition={scrollSpring}
            className="overflow-hidden whitespace-nowrap flex-shrink-0"
          >
            <Link
              href="/"
              className="font-serif font-bold text-lg text-foreground hover:text-primary transition-colors duration-200 block"
            >
              SS
            </Link>
          </motion.div>

          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>

      {/* ── MOBILE ──────────────────────────────────────────────────────────── */}
      <motion.div
        className="md:hidden w-full flex flex-col"
        animate={{
          paddingTop: scrolled ? 12 : 0,
          paddingLeft: scrolled ? 16 : 0,
          paddingRight: scrolled ? 16 : 0,
        }}
        transition={scrollSpring}
      >
        <motion.nav
          className={cn(
            "flex items-center justify-between transition-colors duration-300",
            scrolled ? "bg-background/85 border border-border" : "bg-black/30",
          )}
          animate={{
            paddingLeft: 20,
            paddingRight: 16,
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
            borderRadius: scrolled ? 20 : 0,
            backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
          }}
          transition={scrollSpring}
        >
          <Link
            href="/"
            className="font-serif font-bold text-base text-foreground"
          >
            SS
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground/80"
          >
            <MenuToggleIcon
              open={isMobileMenuOpen}
              className="size-5"
              duration={300}
            />
          </button>
        </motion.nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-2xl bg-background/95 backdrop-blur-lg border border-border shadow-xl overflow-hidden"
            >
              <ul className="flex flex-col px-2 py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium",
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:bg-accent",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
