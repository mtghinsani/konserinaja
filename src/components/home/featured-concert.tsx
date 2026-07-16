"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { CountdownTimer } from "@/components/concert/countdown-timer";
import { formatDate, formatPrice } from "@/lib/utils";
import concerts from "@/data/concerts.json";
import type { Concert } from "@/types";

export function FeaturedConcert() {
  const featured = (concerts as Concert[]).find((c) => c.featured);

  if (!featured) return null;

  return (
    <Section>
      <SectionHeader
        label="Featured Event"
        title="Don't Miss This"
        description="The most anticipated concert of the year is coming. Get your tickets now."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#09090b]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-transparent to-[#3b82f6]/10" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative grid lg:grid-cols-2 gap-0">
          <div className="relative h-72 lg:h-full min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl md:text-9xl font-bold text-white/[0.03] select-none">
                {featured.name.charAt(0)}
              </span>
            </div>

            <div className="absolute top-6 left-6 flex gap-2">
              <Badge variant="purple">{featured.genre}</Badge>
              <Badge variant="cyan">Featured</Badge>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-white/40 font-semibold tracking-[0.2em] uppercase mb-2">
                Countdown to event
              </p>
              <CountdownTimer targetDate={featured.date} size="lg" />
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <Badge variant="warning" className="mb-4 w-fit">
              <Clock className="w-3 h-3" />
              {featured.status === "upcoming" ? "Upcoming Event" : "Happening Now"}
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {featured.name}
            </h2>

            <p className="mt-4 text-[#a1a1aa] leading-relaxed">
              {featured.longDescription}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#71717a]">
                <MapPin className="w-4 h-4 text-[#a855f7]" />
                <span>
                  {featured.venue}, {featured.city}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#71717a]">
                <Calendar className="w-4 h-4 text-[#a855f7]" />
                <span>{formatDate(featured.date)}</span>
              </div>
              {featured.guestStars.length > 0 && (
                <div className="flex items-center gap-3 text-sm text-[#71717a]">
                  <Users className="w-4 h-4 text-[#a855f7]" />
                  <span>Starring: {featured.guestStars.join(", ")}</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#71717a]">Starting from</span>
                <p className="text-2xl font-bold text-white">
                  {formatPrice(Math.min(...featured.ticketCategories.filter(t => t.available).map(t => t.price)))}
                </p>
              </div>
              <Link href={`/concerts/${featured.slug}`}>
                <Button variant="primary" size="lg">
                  Get Tickets
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
