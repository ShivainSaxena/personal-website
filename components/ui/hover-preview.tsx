"use client"

import { useRef, useState, type ReactNode, type RefObject } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export interface PreviewData {
  image: string
  title: string
  subtitle: string
}

interface HoverLinkProps {
  children: ReactNode
  previewKey: string
  onHoverStart: (key: string, e: React.MouseEvent) => void
  onHoverMove: (e: React.MouseEvent) => void
  onHoverEnd: () => void
  className?: string
}

export function HoverLink({
  children,
  previewKey,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
  className,
}: HoverLinkProps) {
  return (
    <span
      className={className}
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </span>
  )
}

interface PreviewCardProps {
  data: PreviewData | null
  position: { x: number; y: number }
  isVisible: boolean
  cardRef: RefObject<HTMLDivElement | null>
}

export function PreviewCard({ data, position, isVisible, cardRef }: PreviewCardProps) {
  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed z-[100] pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="w-64 overflow-hidden rounded-xl border border-border bg-background-surface shadow-2xl">
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-surface/80 to-transparent" />
            </div>
            <div className="p-3">
              <h4 className="font-serif text-sm font-semibold text-foreground">
                {data.title}
              </h4>
              <p className="text-xs text-foreground-muted mt-0.5">
                {data.subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function useHoverPreview(previewData: Record<string, PreviewData>) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  const handleHoverStart = (key: string, e: React.MouseEvent) => {
    const data = previewData[key]
    if (data) {
      setActivePreview(data)
      setPreviewPosition({ x: e.clientX, y: e.clientY - 20 })
      setIsPreviewVisible(true)
    }
  }

  const handleHoverMove = (e: React.MouseEvent) => {
    setPreviewPosition({ x: e.clientX, y: e.clientY - 20 })
  }

  const handleHoverEnd = () => {
    setIsPreviewVisible(false)
    setActivePreview(null)
  }

  return {
    cardRef,
    activePreview,
    previewPosition,
    isPreviewVisible,
    handleHoverStart,
    handleHoverMove,
    handleHoverEnd,
  }
}
