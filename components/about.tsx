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
    image: "/images/netflix.avif",
    title: "Movies & TV",
    subtitle: "Love watching movies, TV shows, and anime.",
  },
  craft: {
    image: "/images/curry.jpg",
    title: "Basketball",
    subtitle: "Prioritize playing basketball rather than studying for exams.",
  },
  building: {
    image: "/images/curry.jpg",
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
              text="Hi, I'm Shivain! As an engineering student, I’ve always been fascinated by how hardware and software work together to solve complex problems. Whether I'm diving into robotics or web development, I’m constantly looking for new things to learn and interesting people to meet."
              className="text-xl leading-relaxed"
            />

            {/* Second paragraph with hover previews */}
            <p className="text-foreground-muted text-xl leading-relaxed flex flex-wrap items-baseline gap-x-1">
              <span>{"My hobbies include "}</span>
              <HoverLink
                previewKey="engineer"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  watching movies
                </span>
              </HoverLink>
              <span>{", "}</span>
              <HoverLink
                previewKey="craft"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  playing basketball
                </span>
              </HoverLink>
              <span>{", and "}</span>
              <HoverLink
                previewKey="building"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
                className="cursor-pointer"
              >
                <span className="text-primary font-medium border-b border-primary/30 hover:border-primary transition-colors">
                  going to the gym.
                </span>
              </HoverLink>
              <span>
                {" Thanks for stopping by to check out my portfolio!"}
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
