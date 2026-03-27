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

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScroll(10);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out",
        scrolled ? "top-4" : "top-0",
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-center px-6 py-3 transition-all duration-300 ease-out",
          scrolled
            ? "rounded-full bg-background/80 backdrop-blur-lg border border-border shadow-lg px-8"
            : "w-full bg-transparent border-b border-transparent",
        )}
      >
        {/* Desktop Links — centered */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground-muted",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon
            open={isMobileMenuOpen}
            className="size-5"
            duration={300}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden bg-background/90 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 pt-6 pb-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-2 text-lg font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground-muted hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
