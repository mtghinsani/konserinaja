"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Music } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import cities from "@/data/cities.json";
import concerts from "@/data/concerts.json";
import type { City, Concert } from "@/types";

export default function CitiesPage() {
  const concertList = concerts as Concert[];

  return (
    <>
      <Section className="pt-28 md:pt-32 lg:pt-36">
        <SectionHeader
          label="Locations"
          title="All Cities"
          description="Discover concerts in cities across Indonesia."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(cities as City[]).map((city, i) => {
            const cityConcerts = concertList.filter(
              (c) => c.city.toLowerCase() === city.name.toLowerCase()
            );

            return (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/concerts?city=${city.slug}`}
                  className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-[#09090b] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#a855f7]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 border border-white/5 flex items-center justify-center mb-4">
                      <MapPin className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#a855f7] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-[#71717a] mt-1">{city.province}</p>

                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#a1a1aa]">Total Concerts</span>
                        <span className="text-white font-medium">{city.concertCount}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#a1a1aa]">Upcoming</span>
                        <span className="text-white font-medium">{cityConcerts.length}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                      <span className="text-sm text-[#a855f7] group-hover:gap-2 transition-all inline-flex items-center gap-1">
                        Browse concerts
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <Music className="w-4 h-4 text-[#52525b]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
