"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import WebGLBackground from "@/components/webgl-background";

const RESUME_URL =
  "https://drive.google.com/file/d/1B0M5HflHY8CyuTRLjyzNrwNGIGOXgY6z/view?usp=sharing";

// Reusable resume button — glass style with animated gradient border on hover.
// The trick: a pseudo-element isn't easily animatable in Tailwind, so we layer
// a gradient div behind a slightly inset frosted div. On hover the gradient
// rotates via a CSS animation defined in globals (or inline keyframes below).
function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`resume-btn group relative inline-flex items-center gap-2 text-sm font-medium
                  text-white/80 hover:text-white transition-colors duration-300 ${className}`}
    >
      {/* Animated gradient border layer */}
      <span className="resume-btn__border" aria-hidden="true" />
      {/* Frosted glass fill */}
      <span className="resume-btn__fill" aria-hidden="true" />
      {/* Content sits above both layers */}
      <FileText className="relative z-10 w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10">View My Resume</span>

      <style>{`
        .resume-btn {
          padding: 0;
        }

        /* Gradient border: slightly larger than the fill */
        .resume-btn__border {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.25) 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(180,100,255,0.3) 70%,
            rgba(100,180,255,0.25) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 200% 200%;
          background-position: 0% 0%;
          transition: background-position 0.6s ease, opacity 0.3s ease;
          opacity: 0.7;
        }

        .resume-btn:hover .resume-btn__border {
          background-position: 100% 100%;
          opacity: 1;
        }

        /* Frosted fill */
        .resume-btn__fill {
          position: absolute;
          inset: 1px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          transition: background 0.3s ease;
        }

        .resume-btn:hover .resume-btn__fill {
          background: rgba(255, 255, 255, 0.09);
        }

        /* Actual padding lives on the inner content wrapper */
        .resume-btn > .z-10:last-child,
        .resume-btn > svg {
          padding: 0;
        }

        .resume-btn {
          padding: 10px 18px;
        }
      `}</style>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <WebGLBackground />

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
          <ResumeButton />
          <a
            href="https://github.com/ShivainSaxena"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="http://www.linkedin.com/in/shivain-saxena"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ── DESKTOP — left: name, vertically centered ── */}
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
            href="https://github.com/ShivainSaxena"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="http://www.linkedin.com/in/shivain-saxena"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-foreground-muted hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ── DESKTOP — bottom-right: CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute bottom-10 right-12 z-10"
      >
        <ResumeButton />
      </motion.div>
    </section>
  );
}
