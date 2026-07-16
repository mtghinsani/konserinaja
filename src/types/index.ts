export interface Concert {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  genre: string;
  venue: string;
  city: string;
  date: string;
  endDate?: string;
  time: string;
  poster: string;
  banner: string;
  gallery: string[];
  guestStars: string[];
  promoter: string;
  officialWebsite?: string;
  instagram?: string;
  ticketCategories: TicketCategory[];
  featured: boolean;
  status: "upcoming" | "ongoing" | "finished";
  mapsUrl?: string;
  notes?: string;
  faq?: ConcertFAQ[];
}

export interface TicketCategory {
  name: string;
  price: number;
  description: string;
  available: boolean;
}

export interface ConcertFAQ {
  question: string;
  answer: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  province: string;
  image: string;
  concertCount: number;
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  image: string;
  genre: string;
  upcomingConcerts: number;
}
