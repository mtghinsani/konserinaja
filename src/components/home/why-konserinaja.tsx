"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, Ticket, Heart, Globe, Shield } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const features = [
  {
    icon: Search,
    title: "Easy Discovery",
    description: "Find all concerts across Indonesia in one place with powerful search and filters.",
  },
  {
    icon: Ticket,
    title: "Real-time Info",
    description: "Get up-to-date information on ticket prices, availability, and seat categories.",
  },
  {
    icon: Heart,
    title: "Personalized Picks",
    description: "Discover concerts tailored to your music taste and favorite artists.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "From Jakarta to Makassar, we cover concerts in every major Indonesian city.",
  },
  {
    icon: Sparkles,
    title: "Curated Events",
    description: "Hand-picked selection of the best and most anticipated concerts.",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Verified event info from official promoters and venues across Indonesia.",
  },
];

export function WhyKonserinAJA() {
  return (
    <Section>
      <SectionHeader
        label="Why Us"
        title="Why KonserinAJA?"
        description="We make discovering concerts simple, fun, and accessible for everyone."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group p-6 rounded-2xl border border-white/5 bg-[#09090b] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <feature.icon className="w-5 h-5 text-[#a855f7]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
