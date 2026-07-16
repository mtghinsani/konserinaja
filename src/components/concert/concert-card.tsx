"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatDate, formatPrice } from "@/lib/utils";
import type { Concert } from "@/types";

interface ConcertCardProps {
  concert: Concert;
  featured?: boolean;
  index?: number;
}

export function ConcertCard({ concert, featured, index = 0 }: ConcertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/concerts/${concert.slug}`} className="group block">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-white/5 bg-[#09090b] transition-all duration-500",
            "hover:border-white/10 hover:bg-white/[0.02]",
            featured ? "lg:grid lg:grid-cols-2 lg:gap-0" : ""
          )}
        >
          <div className={cn("relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] to-[#0f172a]", featured ? "h-64 lg:h-full" : "h-48")}>
            <img
              src={concert.poster}
              alt={concert.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />

            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant="purple">{concert.genre}</Badge>
              {concert.featured && <Badge variant="cyan">Featured</Badge>}
            </div>

            {!featured && (
              <div className="absolute top-3 right-3">
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
              </div>
            )}
          </div>

          <div className={cn("p-5", featured && "lg:p-8 flex flex-col justify-center")}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3
                  className={cn(
                    "font-bold text-white group-hover:text-[#a855f7] transition-colors line-clamp-2",
                    featured ? "text-2xl lg:text-3xl" : "text-base"
                  )}
                >
                  {concert.name}
                </h3>
                {featured && (
                  <p className="mt-2 text-sm text-[#a1a1aa] line-clamp-2 leading-relaxed">
                    {concert.description}
                  </p>
                )}
              </div>
            </div>

            <div className={cn("flex flex-wrap gap-3", featured ? "mt-4" : "mt-3")}>
              <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
                <MapPin className="w-3.5 h-3.5" />
                <span>
                  {concert.venue}, {concert.city}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(concert.date)}</span>
              </div>
            </div>

            {concert.guestStars.length > 0 && (
              <div className={cn("flex items-center gap-1.5 text-xs text-[#71717a]", featured ? "mt-3" : "mt-2")}>
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{concert.guestStars.slice(0, 3).join(", ")}</span>
                {concert.guestStars.length > 3 && (
                  <span className="text-[#a855f7]">+{concert.guestStars.length - 3}</span>
                )}
              </div>
            )}

            <div
              className={cn(
                "flex items-center justify-between",
                featured ? "mt-6 pt-4 border-t border-white/5" : "mt-3"
              )}
            >
              <div>
                <span className="text-xs text-[#71717a]">Starting from</span>
                <p className="text-sm font-bold text-white">
                  {formatPrice(Math.min(...concert.ticketCategories.filter(t => t.available).map(t => t.price)))}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-[#a855f7] group-hover:gap-2 transition-all">
                <span>Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
