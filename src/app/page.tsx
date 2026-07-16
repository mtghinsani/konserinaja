import { Hero } from "@/components/home/hero";
import { FeaturedConcert } from "@/components/home/featured-concert";
import { UpcomingConcerts } from "@/components/home/upcoming-concerts";
import { BrowseCities } from "@/components/home/browse-cities";
import { PopularArtists } from "@/components/home/popular-artists";
import { ConcertTimeline } from "@/components/home/concert-timeline";
import { WhyKonserinAJA } from "@/components/home/why-konserinaja";
import { FAQ } from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedConcert />
      <UpcomingConcerts />
      <BrowseCities />
      <PopularArtists />
      <ConcertTimeline />
      <WhyKonserinAJA />
      <FAQ />
    </>
  );
}
