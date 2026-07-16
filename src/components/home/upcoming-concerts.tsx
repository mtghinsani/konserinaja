"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ConcertCard } from "@/components/concert/concert-card";
import { Button } from "@/components/ui/button";
import concerts from "@/data/concerts.json";
import type { Concert } from "@/types";

export function UpcomingConcerts() {
  const upcoming = (concerts as Concert[])
    .filter((c) => c.status === "upcoming")
    .slice(0, 6);

  return (
    <Section>
      <SectionHeader
        label="Upcoming Shows"
        title="Concerts Near You"
        description="Check out the hottest concerts happening across Indonesia."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {upcoming.map((concert, i) => (
          <ConcertCard key={concert.id} concert={concert} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Link href="/concerts">
          <Button variant="secondary" size="lg">
            View All Concerts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
