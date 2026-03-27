"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./experience-card";
import { BGPattern } from "@/components/ui/bg-pattern";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Grid paper background */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={40}
        fill="rgba(59, 130, 246, 0.18)"
      />

      {/* Subtle top/bottom gradient fade to merge with surrounding sections */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* Handwritten-style label above heading */}
          <span className="text-primary text-base tracking-wider block mb-1 font-handwriting">
            where I&apos;ve been
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        {/* Cards — arranged in a loose staggered grid rather than a strict timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
