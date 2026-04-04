"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isInView: boolean;
}

// Resting tilt per card — same vibe as your original
const rotations = [-1.5, 1.2, -0.8, 1.8, -1.2, 0.9];

// Starting swing direction alternates so adjacent cards swing opposite ways
const swingStart = [22, -22, 18, -18, 20, -20];

const accentColors = [
  "bg-blue-500",
  "bg-blue-400",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-blue-600",
  "bg-cyan-500",
];

const pinColors = [
  "#3b82f6",
  "#60a5fa",
  "#0ea5e9",
  "#6366f1",
  "#2563eb",
  "#06b6d4",
];

export function ExperienceCard({
  experience,
  index,
  isInView,
}: ExperienceCardProps) {
  const restingRotation = rotations[index % rotations.length];
  const accent = accentColors[index % accentColors.length];
  const pinColor = pinColors[index % pinColors.length];
  const [hasAnimated, setHasAnimated] = useState(false);

  // Spring that drives the pendulum — low stiffness = slow, satisfying swing
  const tiltSpring = useSpring(restingRotation, {
    stiffness: 45,
    damping: 7,
    mass: 1.4,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      // Instantly place at the big starting angle (no animation for this jump)
      tiltSpring.jump(swingStart[index % swingStart.length]);

      // Then spring toward the resting rotation — pendulum decay plays out
      setTimeout(() => tiltSpring.set(restingRotation), 30);
    }
  }, [isInView, hasAnimated, index, tiltSpring, restingRotation]);

  return (
    // Outer wrapper: drop-in from above (y + opacity + scale)
    // pt-10 gives headroom for the pin + wire that sit above the card edge
    <motion.div
      className="relative pt-10"
      initial={{ opacity: 0, y: -70, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.13,
        duration: 0.55,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {/* ── Fixed pin — stays centered, does NOT swing ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Pin head */}
        <div
          className="w-4 h-4 rounded-full border-2 border-white/20"
          style={{
            background: `radial-gradient(circle at 35% 35%, white 0%, ${pinColor} 55%)`,
            boxShadow: `0 2px 8px ${pinColor}99, 0 0 0 1px ${pinColor}44`,
          }}
        />
        {/* String */}
        <div
          className="w-[2px] h-8 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${pinColor}cc, ${pinColor}22)`,
          }}
        />
      </div>

      {/* ── Pendulum wrapper — card + string rotate from pin point ── */}
      <motion.div
        style={{
          rotate: tiltSpring,
          transformOrigin: "top center",
        }}
        whileHover={{
          rotate: 0,
          scale: 1.02,
          y: -4,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        className="relative cursor-default"
      >
        {/* Card body — same markup/classes as your original */}
        <div
          className="bg-background-surface/95 rounded-lg overflow-hidden"
          style={{
            boxShadow:
              "4px 6px 24px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          {/* Colored top strip */}
          <div className={`h-2 w-full ${accent}`} />

          <div className="p-6">
            {/* Date badge */}
            <div className="float-right ml-4 mb-2">
              <span
                className="inline-block px-3 py-1 text-xs text-primary bg-primary/10 border border-primary/20 rounded-sm font-handwriting"
                style={{
                  fontSize: "0.85rem",
                  transform: "rotate(2deg)",
                  display: "block",
                }}
              >
                {experience.startDate} → {experience.endDate}
              </span>
            </div>

            {/* Company */}
            <h3 className="text-foreground text-2xl font-bold leading-tight mb-1 font-handwriting">
              {experience.company}
            </h3>

            {/* Role */}
            <p className="text-primary text-lg mb-4 font-handwriting">
              {experience.role}
            </p>

            {/* Pencil-line divider */}
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-4" />

            {/* Bullets */}
            <ul className="space-y-1.5 mb-4 clear-both">
              {experience.description.map((item, i) => (
                <li
                  key={i}
                  className="text-foreground-muted text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-primary mt-1.5 flex-shrink-0 text-xs">
                    &#9670;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
