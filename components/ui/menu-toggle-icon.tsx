"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const menuToggleIconVariants = cva(
  "relative flex items-center justify-center",
  {
    variants: {
      size: {
        default: "size-6",
        sm: "size-4",
        lg: "size-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface MenuToggleIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuToggleIconVariants> {
  open?: boolean
  asChild?: boolean
  duration?: number
}

const MenuToggleIcon = React.forwardRef<HTMLDivElement, MenuToggleIconProps>(
  ({ className, size, open = false, asChild = false, duration = 200, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    const transitionStyle = { transitionDuration: `${duration}ms` }

    return (
      <Comp
        ref={ref}
        className={cn(menuToggleIconVariants({ size, className }))}
        {...props}
      >
        <span
          className={cn(
            "absolute h-[2px] w-full bg-current transition-all ease-in-out",
            open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[25%]"
          )}
          style={transitionStyle}
        />
        <span
          className={cn(
            "absolute h-[2px] w-full bg-current transition-all ease-in-out",
            open ? "opacity-0" : "top-1/2 -translate-y-1/2 opacity-100"
          )}
          style={transitionStyle}
        />
        <span
          className={cn(
            "absolute h-[2px] w-full bg-current transition-all ease-in-out",
            open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[75%]"
          )}
          style={transitionStyle}
        />
      </Comp>
    )
  }
)
MenuToggleIcon.displayName = "MenuToggleIcon"

export { MenuToggleIcon, menuToggleIconVariants }
