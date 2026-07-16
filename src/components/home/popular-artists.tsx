"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import artists from "@/data/artists.json";
import type { Artist } from "@/types";

export function PopularArtists() {
  return (
    <Section>
      <SectionHeader
        label="Artists"
        title="Popular Artists"
        description="See which artists are making waves across the Indonesian music scene."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {(artists as Artist[]).map((artist, i) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href={`/concerts?artist=${artist.slug}`}
              className="group block text-center"
            >
              <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-[#a855f7]/30 transition-all duration-300 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/20 select-none">
                    {artist.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-sm font-semibold text-white group-hover:text-[#a855f7] transition-colors">
                {artist.name}
              </h3>

              <div className="mt-1 flex items-center justify-center gap-2">
                <Badge variant="default" className="text-[10px] px-2 py-0.5">
                  {artist.genre}
                </Badge>
              </div>

              <p className="text-xs text-[#71717a] mt-1">
                {artist.upcomingConcerts} upcoming concerts
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
