export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">The Art of Ease</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              At VinoEase, we design tools that merge timeless wine rituals with modern technology. From effortless
              uncorking to elegant dish cleaning — every moment feels refined.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our curated collection brings sophistication to your kitchen, transforming routine tasks into moments of
              joy.
            </p>
          </div>

          <div className="relative group">
            <div className="glass-card rounded-2xl overflow-hidden group-hover:gold-glow transition-all duration-300 animate-breathe">
              <img src="/electric-wine-opener-with-golden-accents-on-marble.jpg" alt="Electric wine opener" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
