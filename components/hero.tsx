"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import SplineBackground from "@/components/spline-background";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <SplineBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-mono text-sm tracking-wider mb-4"
        >
          HELLO, I&apos;M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Shivain Saxena
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-foreground-muted mb-4"
        >
          Software Engineer · Designer · Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-foreground-muted/80 max-w-xl mx-auto mb-8"
        >
          I build elegant, performant, and accessible web experiences that make
          a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-muted hover:text-primary hover:bg-background-surface rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-muted hover:text-primary hover:bg-background-surface rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground-muted/60"
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
