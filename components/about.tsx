"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagicText } from "@/components/ui/magic-text";
import {
  HoverLink,
  PreviewCard,
  useHoverPreview,
  type PreviewData,
} from "@/components/ui/hover-preview";

const aboutPreviewData: Record<string, PreviewData> = {
  engineer: {
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=560&h=320&fit=crop",
    title: "Software Engineering",
    subtitle: "Building things that matter",
  },
  craft: {
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=560&h=320&fit=crop",
    title: "Attention to Detail",
    subtitle: "From architecture to the last pixel",
  },
  building: {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&h=320&fit=crop",
    title: "Current Projects",
    subtitle: "Always shipping something new",
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    cardRef,
    activePreview,
    previewPosition,
    isPreviewVisible,
    handleHoverStart,
    handleHoverMove,
    handleHoverEnd,
  } = useHoverPreview(aboutPreviewData);

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            ABOUT
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Image - smaller */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-background-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute -inset-1 bg-primary/20 blur-2xl opacity-50" />
              <Image
                src="/images/profile.jpeg"
                alt="Profile photo"
                width={280}
                height={350}
                className="relative w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* First paragraph with MagicText */}
            <MagicText
              text="I'm a software engineer who loves turning complex problems into clean, elegant solutions. I care deeply about the craft — from system architecture down to the last pixel."
              className="text-lg leading-relaxed"
            />

            {/* Second paragraph with hover previews */}
            <p className="text-foreground-muted leading-relaxed flex flex-wrap items-baseline gap-x-1">
              <span>{"I'm a "}</span>
              <HoverLink
                previewKey="engineer"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  software engineer
                </span>
              </HoverLink>
              <span>{" who cares deeply about the "}</span>
              <HoverLink
                previewKey="craft"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  craft
                </span>
              </HoverLink>
              <span>{". Currently "}</span>
              <HoverLink
                previewKey="building"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  building
                </span>
              </HoverLink>
              <span>
                {
                  " interesting things, and always open to new conversations and collaborations."
                }
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hover Preview Card */}
      <PreviewCard
        data={activePreview}
        position={previewPosition}
        isVisible={isPreviewVisible}
        cardRef={cardRef}
      />
    </section>
  );
}
