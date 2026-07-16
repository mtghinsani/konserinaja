import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Ticket, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 border border-white/5 flex items-center justify-center mx-auto mb-8">
          <Ticket className="w-8 h-8 text-[#a855f7]" />
        </div>
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-[#a1a1aa] mb-8">
          This stage is empty. The concert you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
