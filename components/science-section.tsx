"use client"

import { useState } from "react"

const facts = [
  { title: "Precision", description: "Engineered for consistent performance every time" },
  { title: "Efficiency", description: "Minimizes effort while maximizing results" },
  { title: "Sustainability", description: "Designed to last, reducing waste" },
  { title: "Beauty", description: "Form follows function in elegant harmony" },
]

export function ScienceSection() {
  const [activeFact, setActiveFact] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-6 text-balance">
          Inspired by Nature's Math
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 font-serif italic">
          Efficiency × Simplicity = Beauty
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              onClick={() => setActiveFact(activeFact === index ? null : index)}
              className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                activeFact === index ? "gold-glow scale-105" : "hover:scale-102"
              }`}
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">{fact.title}</h3>
              <p
                className={`text-sm leading-relaxed text-foreground/80 transition-all duration-300 ${
                  activeFact === index ? "opacity-100" : "opacity-70"
                }`}
              >
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
