import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "purple" | "cyan" | "pink" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full",
        variant === "default" && "bg-white/5 text-white/70 border border-white/10",
        variant === "purple" && "bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20",
        variant === "cyan" && "bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20",
        variant === "pink" && "bg-[#ec4899]/10 text-[#ec4899] border border-[#ec4899]/20",
        variant === "success" && "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20",
        variant === "warning" && "bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20",
        className
      )}
    >
      {children}
    </span>
  );
}
