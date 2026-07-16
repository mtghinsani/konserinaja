"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I find concerts near me?",
    answer: "Use the 'Browse by City' section on the homepage or navigate to the Cities page. You can filter concerts by your city to see all upcoming events nearby.",
  },
  {
    question: "Can I buy tickets directly on KonserinAJA?",
    answer: "KonserinAJA is a concert discovery platform. We provide links to official ticketing partners where you can purchase tickets securely.",
  },
  {
    question: "How accurate is the concert information?",
    answer: "We work closely with promoters and venues to ensure all information is accurate and up-to-date. However, we recommend double-checking details on the official event page.",
  },
  {
    question: "Are all concerts listed on the platform?",
    answer: "We strive to list as many concerts as possible across Indonesia. If you know of an event that's not listed, please contact us and we'll add it.",
  },
  {
    question: "How do I know if a concert is still available?",
    answer: "Each concert page shows real-time ticket availability. Events marked as 'Sold Out' will have limited or no ticket options available.",
  },
  {
    question: "Can I get a refund if a concert is canceled?",
    answer: "Refund policies vary by promoter and event. Please check the specific concert's FAQ section or contact the promoter directly for refund information.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about using KonserinAJA."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-5 rounded-2xl border border-white/5 bg-[#09090b] hover:border-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-white/40 shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === i ? "mt-4 max-h-40" : "max-h-0"
                )}
              >
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.answer}</p>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
