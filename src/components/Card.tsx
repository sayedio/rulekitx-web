"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  glowColor?: "cyan" | "purple" | "none";
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glowColor = "none", children, ...props }, ref) => {
    const glows = {
      cyan: "shadow-[0_0_15px_rgba(6,182,212,0.05)] border-cyan-500/10 hover:border-cyan-500/20",
      purple: "shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-500/10 hover:border-purple-500/20",
      none: "border-slate-800/60",
    };

    return (
      <motion.div
        ref={ref}
        initial={hoverEffect ? { y: 0 } : undefined}
        whileHover={hoverEffect ? { y: -4, borderColor: "rgba(6,182,212,0.2)" } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          "glass rounded-xl p-6 overflow-hidden relative border",
          glowColor !== "none" ? glows[glowColor] : "border-slate-800/60",
          hoverEffect && "glass-hover",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
