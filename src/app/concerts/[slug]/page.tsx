"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Music,
  Globe,
  Camera,
  ChevronLeft,
  ExternalLink,
  Ticket,
  Shield,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/concert/countdown-timer";
import { formatDate, formatPrice } from "@/lib/utils";
import concerts from "@/data/concerts.json";
import type { Concert } from "@/types";

export default function ConcertDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const concert = (concerts as Concert[]).find((c) => c.slug === slug);

  if (!concert) {
    notFound();
  }

  const cheapestAvailable = Math.min(
    ...concert.ticketCategories.filter((t) => t.available).map((t) => t.price)
  );

  return (
    <>
      <div className="relative pt-20 md:pt-24">
        <div className="relative h-56 md:h-72 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[200px] md:text-[300px] font-bold text-white/[0.03] select-none">
              {concert.name.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
            <Container>
              <Link
                href="/concerts"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-4"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Concerts
              </Link>
            </Container>
          </div>
        </div>
      </div>

      <Container className="relative z-10 -mt-20 md:-mt-28 pb-16 md:pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="purple">{concert.genre}</Badge>
                <Badge
                  variant={
                    concert.status === "upcoming"
                      ? "success"
                      : concert.status === "ongoing"
                        ? "warning"
                        : "default"
                  }
                >
                  {concert.status === "upcoming"
                    ? "Upcoming"
                    : concert.status === "ongoing"
                      ? "Ongoing"
                      : "Finished"}
                </Badge>
                {concert.featured && <Badge variant="cyan">Featured</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {concert.name}
              </h1>

              <p className="mt-4 text-base md:text-lg text-[#a1a1aa] leading-relaxed">
                {concert.longDescription}
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-[#a855f7] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">Venue</span>
                  </div>
                  <p className="text-sm text-white font-medium">{concert.venue}</p>
                  <p className="text-xs text-[#71717a]">{concert.city}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-[#a855f7] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">Date</span>
                  </div>
                  <p className="text-sm text-white font-medium">{formatDate(concert.date)}</p>
                  {concert.endDate && (
                    <p className="text-xs text-[#71717a]">to {formatDate(concert.endDate)}</p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-[#a855f7] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">Time</span>
                  </div>
                  <p className="text-sm text-white font-medium">{concert.time}</p>
                </div>

                {concert.guestStars.length > 0 && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 text-[#a855f7] mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">Guest Stars</span>
                    </div>
                    <p className="text-sm text-white font-medium">
                      {concert.guestStars.join(", ")}
                    </p>
                  </div>
                )}
              </div>

              {concert.gallery.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-white mb-4">Gallery</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {concert.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-xl bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] border border-white/5 flex items-center justify-center overflow-hidden"
                      >
                        <span className="text-white/10 text-sm">Photo {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {concert.notes && (
                <div className="mt-8 p-5 rounded-2xl border border-[#f59e0b]/20 bg-[#f59e0b]/5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#f59e0b] mb-1">Important Notes</h3>
                      <p className="text-sm text-[#a1a1aa]">{concert.notes}</p>
                    </div>
                  </div>
                </div>
              )}

              {concert.faq && concert.faq.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-white mb-4">FAQ</h2>
                  <div className="space-y-3">
                    {concert.faq.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/5 border border-white/5"
                      >
                        <p className="text-sm font-medium text-white mb-1">{item.question}</p>
                        <p className="text-sm text-[#a1a1aa]">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {concert.status === "upcoming" && (
                  <div className="p-6 rounded-2xl border border-white/5 bg-[#09090b]">
                    <p className="text-xs text-white/40 font-semibold tracking-[0.2em] uppercase mb-3">
                      Countdown to Event
                    </p>
                    <CountdownTimer targetDate={concert.date} size="md" />
                  </div>
                )}

                <div className="p-6 rounded-2xl border border-white/5 bg-[#09090b]">
                  <h3 className="text-sm font-semibold text-white mb-4">Ticket Categories</h3>
                  <div className="space-y-3">
                    {concert.ticketCategories.map((cat) => (
                      <div
                        key={cat.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5"
                      >
                        <div>
                          <p className="text-sm font-medium text-white">{cat.name}</p>
                          <p className="text-xs text-[#71717a]">{cat.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-white">
                            {formatPrice(cat.price)}
                          </p>
                          {cat.available ? (
                            <Badge variant="success" className="text-[10px] px-1.5 py-0">
                              Available
                            </Badge>
                          ) : (
                            <Badge variant="default" className="text-[10px] px-1.5 py-0">
                              Sold Out
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button variant="primary" size="lg" className="w-full">
                    <Ticket className="w-4 h-4" />
                    Get Tickets
                  </Button>

                  {concert.officialWebsite && (
                    <a href={concert.officialWebsite} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="w-full">
                        <Globe className="w-4 h-4" />
                        Official Website
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  )}

                  {concert.instagram && (
                    <a
                      href={`https://instagram.com/${concert.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="lg" className="w-full">
                        <Camera className="w-4 h-4" />
                        {concert.instagram}
                      </Button>
                    </a>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs text-[#71717a]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Promoted by {concert.promoter}</span>
                  </div>
                  {concert.mapsUrl && (
                    <a
                      href={concert.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#a855f7] hover:text-[#9333ea] transition-colors mt-2"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      View on Google Maps
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
