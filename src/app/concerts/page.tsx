"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X, SlidersHorizontal, MapPin, Calendar, Music } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ConcertCard } from "@/components/concert/concert-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import concerts from "@/data/concerts.json";
import type { Concert } from "@/types";

const allGenres = [...new Set((concerts as Concert[]).map((c) => c.genre))];
const allCities = [...new Set((concerts as Concert[]).map((c) => c.city))];
const allMonths = [
  { label: "All Months", value: "" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

export default function ConcertsPage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return (concerts as Concert[]).filter((concert) => {
      const matchesSearch =
        !search ||
        concert.name.toLowerCase().includes(search.toLowerCase()) ||
        concert.venue.toLowerCase().includes(search.toLowerCase()) ||
        concert.city.toLowerCase().includes(search.toLowerCase()) ||
        concert.guestStars.some((g) => g.toLowerCase().includes(search.toLowerCase()));

      const matchesGenre = !selectedGenre || concert.genre === selectedGenre;
      const matchesCity = !selectedCity || concert.city === selectedCity;
      const matchesMonth =
        !selectedMonth ||
        new Date(concert.date).getMonth() + 1 === parseInt(selectedMonth);

      return matchesSearch && matchesGenre && matchesCity && matchesMonth;
    });
  }, [search, selectedGenre, selectedCity, selectedMonth]);

  const clearFilters = () => {
    setSearch("");
    setSelectedGenre("");
    setSelectedCity("");
    setSelectedMonth("");
  };

  const hasFilters = search || selectedGenre || selectedCity || selectedMonth;

  return (
    <>
      <Section className="pt-28 md:pt-32 lg:pt-36">
        <SectionHeader
          label="Explore"
          title="All Concerts"
          description="Browse all upcoming concerts across Indonesia."
        />

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              placeholder="Search by concert name, venue, city, or artist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#a855f7]/50 focus:ring-1 focus:ring-[#a855f7]/20 transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border transition-all",
                showFilters
                  ? "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
          <span className="text-sm text-[#71717a]">
            {filtered.length} concert{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-5 rounded-2xl border border-white/5 bg-[#09090b]"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5" />
                  Genre
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedGenre("")}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                      !selectedGenre
                        ? "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]"
                        : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                    )}
                  >
                    All
                  </button>
                  {allGenres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre === selectedGenre ? "" : genre)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                        selectedGenre === genre
                          ? "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]"
                          : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                      )}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  City
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCity("")}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                      !selectedCity
                        ? "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]"
                        : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                    )}
                  >
                    All
                  </button>
                  {allCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city === selectedCity ? "" : city)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                        selectedCity === city
                          ? "bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]"
                          : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#a855f7]/50 appearance-none"
                >
                  {allMonths.map((m) => (
                    <option key={m.value} value={m.value} className="bg-[#09090b]">
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((concert, i) => (
              <ConcertCard key={concert.id} concert={concert} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white/30" />
            </div>
            <p className="text-lg text-[#a1a1aa]">No concerts found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-sm text-[#a855f7] hover:text-[#9333ea] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
