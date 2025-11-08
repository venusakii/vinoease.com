"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary animate-float text-balance">
            Uncork the Future of Elegance
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
            Electric Sophistication, Simplified.
          </p>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover modern tools for effortless wine enjoyment. Where technology meets taste in perfect harmony.
          </p>

          <div className="pt-6">
            <Link href="/reviews">
              <Button className="bg-primary text-white hover:bg-primary/80">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="pt-12 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
              <img
                src="/elegant-wine-glass-with-rich-red-wine-swirling.jpg"
                alt="Elegant wine glass"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
