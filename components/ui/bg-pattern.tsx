"use client"

import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type PatternVariant = "grid" | "dots" | "lines"
type MaskVariant = "none" | "fade-edges" | "fade-top" | "fade-bottom"

interface BGPatternProps extends HTMLAttributes<HTMLDivElement> {
  variant?: PatternVariant
  mask?: MaskVariant
  size?: number
  fill?: string
}

const maskStyles: Record<MaskVariant, string> = {
  none: "",
  "fade-edges": "radial-gradient(ellipse at center, black 30%, transparent 70%)",
  "fade-top": "linear-gradient(to bottom, transparent, black 30%)",
  "fade-bottom": "linear-gradient(to top, transparent, black 30%)",
}

export function BGPattern({
  variant = "grid",
  mask = "none",
  size = 32,
  fill = "rgba(59, 130, 246, 0.08)",
  className,
  ...props
}: BGPatternProps) {
  const getPattern = () => {
    switch (variant) {
      case "grid":
        return `
          linear-gradient(${fill} 1px, transparent 1px),
          linear-gradient(90deg, ${fill} 1px, transparent 1px)
        `
      case "dots":
        return `radial-gradient(circle, ${fill} 1px, transparent 1px)`
      case "lines":
        return `linear-gradient(${fill} 1px, transparent 1px)`
      default:
        return ""
    }
  }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: getPattern(),
        backgroundSize: variant === "dots" ? `${size}px ${size}px` : `${size}px ${size}px`,
        ...(mask !== "none" && {
          maskImage: maskStyles[mask],
          WebkitMaskImage: maskStyles[mask],
        }),
      }}
      {...props}
    />
  )
}
