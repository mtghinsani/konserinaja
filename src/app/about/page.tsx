import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ticket, Sparkles, Heart, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Music",
    description: "We love Indonesian music and want to help everyone discover the joy of live concerts.",
  },
  {
    icon: Sparkles,
    title: "Curated Discovery",
    description: "Every concert on our platform is verified and curated to ensure quality experiences.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description: "From Sabang to Merauke, we're connecting concert-goers across the archipelago.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32 lg:pt-36">
        <SectionHeader
          label="About"
          title="We Make Concert Discovery Effortless"
          description="KonserinAJA was built with one mission: to help Indonesian music fans discover and never miss their favorite concerts."
        />

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed mb-8">
            Indonesia has a vibrant and diverse music scene, but finding accurate and up-to-date
            concert information can be challenging. KonserinAJA brings all the information you need
            into one beautifully designed platform — from concert dates and venues to ticket prices
            and artist lineups.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 text-sm text-[#a855f7]">
            <Ticket className="w-4 h-4" />
            Made with love for Indonesian music
          </div>
        </div>
      </Section>

      <Section className="bg-[#09090b]">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-white/5 bg-[#050505] text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 border border-white/5 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#a855f7]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your next concert?
          </h2>
          <p className="text-[#a1a1aa] mb-8">
            Browse hundreds of upcoming concerts across Indonesia and never miss a show.
          </p>
          <Link href="/concerts">
            <Button variant="primary" size="lg">
              Explore Concerts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
