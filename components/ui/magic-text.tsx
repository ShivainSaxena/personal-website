"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface MagicTextProps {
  text: string
  className?: string
}

export function MagicText({ text, className }: MagicTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = text.split(" ")

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

interface WordProps {
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="inline-block mr-[0.25em] last:mr-0">
      <motion.span
        style={{ opacity }}
        className="inline-block text-foreground-muted"
      >
        {children}
      </motion.span>
    </span>
  )
}
