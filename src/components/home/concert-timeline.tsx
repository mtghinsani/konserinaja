"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatPrice, cn } from "@/lib/utils";
import concerts from "@/data/concerts.json";
import type { Concert } from "@/types";

const months = [
  { label: "Jul", month: 7, active: true },
  { label: "Aug", month: 8, active: true },
  { label: "Sep", month: 9, active: true },
  { label: "Oct", month: 10, active: true },
  { label: "Nov", month: 11, active: true },
  { label: "Dec", month: 12, active: true },
];

export function ConcertTimeline() {
  const list = (concerts as Concert[])
    .filter((c) => c.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Section className="bg-[#09090b]">
      <SectionHeader
        label="Timeline"
        title="Concert Calendar"
        description="Plan your concert experience with our timeline view."
      />

      <div className="hidden md:flex items-center gap-1 mb-10 p-1 rounded-2xl bg-white/5 border border-white/5 w-fit mx-auto">
        {months.map((m) => (
          <button
            key={m.label}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-xl transition-all",
              m.active
                ? "text-white bg-white/10"
                : "text-white/30 cursor-not-allowed"
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7]/40 via-[#3b82f6]/20 to-transparent" />

        <div className="space-y-8">
          {list.slice(0, 6).map((concert, i) => {
            const date = new Date(concert.date);
            return (
              <motion.div
                key={concert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full border-2 border-[#a855f7] bg-[#09090b] flex items-center justify-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#a855f7]" />
                </div>

                <div className="p-5 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/10 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CalendarDays className="w-4 h-4 text-[#a855f7]" />
                        <span className="text-sm text-[#a1a1aa]">
                          {formatDate(concert.date)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {concert.name}
                      </h3>
                      <p className="text-sm text-[#71717a]">
                        {concert.venue}, {concert.city}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Badge variant="purple">
                        {concert.genre}
                      </Badge>
                      <span className="text-sm font-semibold text-white">
                        {formatPrice(Math.min(...concert.ticketCategories.filter(t => t.available).map(t => t.price)))}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
