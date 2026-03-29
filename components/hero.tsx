"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import WebGLBackground from "@/components/webgl-background";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <WebGLBackground />

      {/*
        ── MOBILE (default, < md) ─────────────────────────────────────────────
        Content pinned to the bottom with a gradient fade so the animation
        fills the top ~60% of the screen, then text sits legibly below it.

        ── DESKTOP (md+) ─────────────────────────────────────────────────────
        Left block vertically centered, CTA in bottom-right corner.
        Each breakpoint uses a completely separate block (hidden/md:block)
        to avoid fighting absolute positioning across screen sizes.
      */}

      {/* ── MOBILE ONLY ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden absolute bottom-0 left-0 right-0 z-10 px-6 pb-10 pt-8
                   bg-gradient-to-t from-black/80 via-black/50 to-transparent"
      >
        <p className="text-primary font-mono text-[10px] tracking-widest uppercase mb-2">
          Hello, I&apos;m
        </p>
        <h1
          className="font-serif font-bold leading-[0.92] text-foreground mb-3"
          style={{ fontSize: "clamp(2.6rem, 11vw, 3.5rem)" }}
        >
          Shivain
          <br />
          Saxena
        </h1>
        <p className="text-foreground-muted text-sm mb-1">
          Software Engineer · Designer · Builder
        </p>
        <p className="text-foreground-muted/60 text-xs mb-5">
          Computer Engineering Student, University of Waterloo
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90
                       text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium
                       transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]"
          >
            View My Work
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ── DESKTOP ONLY — left: name, vertically centered ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
          Hello, I&apos;m
        </p>
        <h1
          className="font-serif font-bold leading-[0.9] text-foreground mb-5"
          style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
        >
          Shivain
          <br />
          Saxena
        </h1>
        <p className="text-foreground-muted text-base mb-1">
          Software Engineer · Designer · Builder
        </p>
        <p className="text-foreground-muted/60 text-sm mb-8">
          Computer Engineering Student, University of Waterloo
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ── DESKTOP ONLY — bottom-right: CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute bottom-10 right-12 z-10 text-right"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90
                     text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium
                     transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          View My Work
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>

      {/* ── DESKTOP ONLY — scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-foreground-muted/30"
        >
          <span className="text-[9px] font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
