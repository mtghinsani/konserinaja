"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CountdownTimer({ targetDate, className, size = "md" }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-20 h-20 text-lg",
  };

  const labelClasses = {
    sm: "text-[10px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const items = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <div className={cn("flex items-center gap-2 md:gap-3", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div
            className={cn(
              sizeClasses[size],
              "rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-white"
            )}
          >
            {String(item.value).padStart(2, "0")}
          </div>
          <span className={cn("text-white/40 mt-1 font-medium", labelClasses[size])}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
