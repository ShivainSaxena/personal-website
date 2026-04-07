"use client";

import { useRef, useState, type ReactNode, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface PreviewData {
  image: string;
  title: string;
  subtitle: string;
}

interface HoverLinkProps {
  children: ReactNode;
  previewKey: string;
  onHoverStart: (key: string, e: React.MouseEvent) => void;
  onHoverMove: (e: React.MouseEvent) => void;
  onHoverEnd: () => void;
  className?: string;
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
      // Touch support for mobile
      onTouchStart={(e) => {
        const touch = e.touches[0];
        onHoverStart(previewKey, {
          clientX: touch.clientX,
          clientY: touch.clientY,
        } as React.MouseEvent);
      }}
      onTouchEnd={onHoverEnd}
    >
      {children}
    </span>
  );
}

interface PreviewCardProps {
  data: PreviewData | null;
  position: { x: number; y: number };
  isVisible: boolean;
  cardRef: RefObject<HTMLDivElement | null>;
}

export function PreviewCard({
  data,
  position,
  isVisible,
  cardRef,
}: PreviewCardProps) {
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
            // No transform — position is already clamped by useHoverPreview
          }}
        >
          <div className="w-64 overflow-hidden rounded-xl border border-border bg-background-surface shadow-2xl">
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-surface/80 to-transparent" />
            </div>
            {/* <div className="p-3">
              <h4 className="font-serif text-sm font-semibold text-foreground">
                {data.title}
              </h4>
              <p className="text-xs text-foreground-muted mt-0.5">
                {data.subtitle}
              </p>
            </div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Card dimensions — keep in sync with the w-64 / h-36 values in PreviewCard
const CARD_WIDTH = 256; // w-64
const CARD_HEIGHT = 144; // h-36 (image only; add ~56 if the text block is uncommented)
const OFFSET_Y = 12; // gap between cursor and card top
const SCREEN_PADDING = 8; // minimum distance from viewport edges

function clampPosition(x: number, y: number) {
  const vw = typeof window !== "undefined" ? window.innerWidth : 375;
  const vh = typeof window !== "undefined" ? window.innerHeight : 667;

  // Try to center the card horizontally on the cursor
  let left = x - CARD_WIDTH / 2;
  // Try to place it just below the cursor
  let top = y + OFFSET_Y;

  // Clamp horizontal so card never clips left or right edge
  left = Math.max(
    SCREEN_PADDING,
    Math.min(left, vw - CARD_WIDTH - SCREEN_PADDING),
  );

  // If card would overflow the bottom, flip it above the cursor instead
  if (top + CARD_HEIGHT + SCREEN_PADDING > vh) {
    top = y - CARD_HEIGHT - OFFSET_Y;
  }

  // Final clamp vertical — in case the flip also overflows the top
  top = Math.max(SCREEN_PADDING, top);

  return { x: left, y: top };
}

export function useHoverPreview(previewData: Record<string, PreviewData>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleHoverStart = (key: string, e: React.MouseEvent) => {
    const data = previewData[key];
    if (data) {
      setActivePreview(data);
      setPreviewPosition(clampPosition(e.clientX, e.clientY));
      setIsPreviewVisible(true);
    }
  };

  const handleHoverMove = (e: React.MouseEvent) => {
    setPreviewPosition(clampPosition(e.clientX, e.clientY));
  };

  const handleHoverEnd = () => {
    setIsPreviewVisible(false);
    setActivePreview(null);
  };

  return {
    cardRef,
    activePreview,
    previewPosition,
    isPreviewVisible,
    handleHoverStart,
    handleHoverMove,
    handleHoverEnd,
  };
}
