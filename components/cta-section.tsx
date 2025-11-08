import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/10 animate-breathe" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
          Elevate Your Everyday Ritual
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 leading-relaxed">Your kitchen deserves beauty.</p>
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">Your rituals deserve ease.</p>

        <Link href="/reviews">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 gold-glow group"
          >
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
