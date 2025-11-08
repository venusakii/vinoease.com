export function VideoSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-6 text-balance">
          The Flow of Comfort
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 italic">
          Each movement, each pour — designed for modern harmony.
        </p>

        <div className="relative aspect-video rounded-2xl overflow-hidden glass-card shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80"
            alt="Wine pouring elegantly"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
