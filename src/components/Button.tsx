"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold shadow-[0_4px_14px_0_rgba(6,182,212,0.3)]",
      secondary: "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_14px_0_rgba(168,85,247,0.3)]",
      outline: "border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-slate-200",
      ghost: "hover:bg-slate-900 text-slate-400 hover:text-slate-100",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-2.5 text-lg",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glow && "shadow-[0_0_20px_0_rgba(6,182,212,0.4)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
