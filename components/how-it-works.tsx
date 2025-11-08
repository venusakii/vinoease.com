export function HowItWorks() {
  const steps = [
    { number: 1, title: "Press", description: "One touch activation" },
    { number: 2, title: "Pour", description: "Effortless extraction" },
    { number: 3, title: "Relax", description: "Enjoy the moment" },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16 text-balance">
          Ease in Motion
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary border-2 border-primary mb-6 font-serif text-3xl font-bold group-hover:gold-glow group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
