"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import cities from "@/data/cities.json";
import type { City } from "@/types";

export function BrowseCities() {
  return (
    <Section className="bg-[#09090b]">
      <SectionHeader
        label="Locations"
        title="Browse by City"
        description="Discover concerts happening in your city."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {(cities as City[]).slice(0, 8).map((city, i) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href={`/concerts?city=${city.slug}`}
              className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-[#050505] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#a855f7]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 border border-white/5 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#a855f7]" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#a855f7] transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-[#71717a] mt-1">{city.province}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <span className="text-sm text-[#a1a1aa]">
                    {city.concertCount} concerts
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#52525b] group-hover:text-[#a855f7] transition-colors" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <Link href="/cities">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#a855f7] hover:text-[#9333ea] transition-colors">
            View All Cities
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>
    </Section>
  );
}
