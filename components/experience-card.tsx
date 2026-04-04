"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isInView: boolean;
}

// Slight rotation alternates per card for a natural "pinned" look
const rotations = [-1.5, 1.2, -0.8, 1.8, -1.2, 0.9];

// Top strip accent colors — blue tones that match the palette
const accentColors = [
  "bg-blue-500",
  "bg-blue-400",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-blue-600",
  "bg-cyan-500",
];

export function ExperienceCard({
  experience,
  index,
  isInView,
}: ExperienceCardProps) {
  const rotation = rotations[index % rotations.length];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: rotation * 2, scale: 0.9 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotate: rotation,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.34, 1.56, 0.64, 1], // spring overshoot
      }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="relative cursor-default"
    >
      {/* Pin dot at top center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background-surface border-2 border-primary/40 shadow-md z-10" />

      {/* Card body */}
      <div
        className="bg-background-surface/95 rounded-lg overflow-hidden"
        style={{
          boxShadow: "4px 6px 24px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        {/* Colored top strip */}
        <div className={`h-2 w-full ${accent}`} />

        <div className="p-6">
          {/* Date badge — handwritten style, floated right */}
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

          {/* Company name — handwriting font */}
          <h3 className="text-foreground text-2xl font-bold leading-tight mb-1 font-handwriting">
            {experience.company}
          </h3>

          {/* Role — smaller, accent color, still handwritten */}
          <p className="text-primary text-lg mb-4 font-handwriting">
            {experience.role}
          </p>

          {/* Divider — looks like a pencil underline */}
          <div className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-4" />

          {/* Description bullets */}
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

          {/* Tech tags */}
          {/* {experience.technologies && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/15 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
