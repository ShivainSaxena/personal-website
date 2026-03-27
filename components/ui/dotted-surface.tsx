"use client"

import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface DottedSurfaceProps extends HTMLAttributes<HTMLDivElement> {}

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      {...props}
    >
      {/* Primary dot layer — larger, blue-tinted */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 179, 237, 0.6) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
          animation: 'dotWave 4s ease-in-out infinite',
        }}
      />
      {/* Secondary offset layer — slightly smaller, creates depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.35) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '16px 16px',
          animation: 'dotWave 4s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      <style>{`
        @keyframes dotWave {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
