"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(168,85,247,0.08), transparent 40%)`,
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            Discover Live Music Across Indonesia
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-[0.95]"
        >
          Discover{" "}
          <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent">
            Indonesia&apos;s
          </span>
          <br />
          Biggest Concerts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-base md:text-lg lg:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed"
        >
          Find upcoming concerts, festivals, and live events across Indonesia in one place.
          Never miss a show again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/concerts">
            <Button variant="primary" size="lg">
              Explore Concerts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            <Play className="w-4 h-4" />
            Featured Event
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
