import { Star } from "lucide-react"

const reviews = [
  {
    text: "Never broke a cork again — pure magic!",
    author: "Elena M.",
    location: "Paris",
    rating: 5,
  },
  {
    text: "Tiny dishwasher, massive relief!",
    author: "Daniel R.",
    location: "Boston",
    rating: 5,
  },
  {
    text: "A perfect blend of design and utility.",
    author: "Chiara N.",
    location: "Rome",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16 text-balance">
          What Our Customers Toast To
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-300 animate-breathe"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-foreground mb-4 italic">"{review.text}"</p>
              <p className="text-sm text-muted-foreground">
                — {review.author} <span className="text-xs">({review.location})</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
