"use client"

import { Wine, Sparkles } from "lucide-react"

export function CategoryHighlight() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-12 text-balance">
          Innovate Your Kitchen Ritual
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-300 cursor-pointer group">
            <Wine className="w-16 h-16 text-primary mb-6 group-hover:animate-float" />
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">Electric Wine Openers</h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              Effortless uncorking with precision engineering. Never struggle with a stubborn cork again.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-16 h-16 text-secondary mb-6 group-hover:animate-float" />
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">Compact Dishwashers</h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              Elegant cleaning solutions for modern spaces. Compact power that doesn't compromise on performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
