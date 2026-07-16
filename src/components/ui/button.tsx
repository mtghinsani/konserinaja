"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" && [
            "bg-gradient-to-r from-[#a855f7] to-[#3b82f6] text-white",
            "hover:from-[#9333ea] hover:to-[#2563eb]",
            "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
            "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
          ],
          variant === "secondary" && [
            "bg-white/5 text-white border border-white/10",
            "hover:bg-white/10 hover:border-white/20",
          ],
          variant === "ghost" && [
            "text-white/70 hover:text-white hover:bg-white/5",
          ],
          variant === "outline" && [
            "border border-[#a855f7]/30 text-[#a855f7]",
            "hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50",
          ],
          size === "sm" && "h-9 px-4 text-sm rounded-lg",
          size === "md" && "h-11 px-6 text-sm rounded-xl",
          size === "lg" && "h-13 px-8 text-base rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
