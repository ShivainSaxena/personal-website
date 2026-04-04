"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./experience-card";
import { BGPattern } from "@/components/ui/bg-pattern";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50%" });

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden"
      ref={ref}
    >
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={40}
        fill="rgba(59, 130, 246, 0.18)"
      />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-base tracking-wider block mb-1 font-handwriting">
            where I&apos;ve been
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        {/*
          gap-y-16 (was gap-8) gives each card's pt-10 pin/wire space to breathe
          without overlapping the card above it.
          overflow-visible is important — clipping would hide the swinging cards.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-10 overflow-visible">
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
