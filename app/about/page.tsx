import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { Wine, Sparkles, Heart, Leaf } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Wine,
      title: "Sophistication",
      description: "We believe in elevating everyday moments with products that embody elegance and refinement.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Blending cutting-edge technology with timeless traditions to create tools that simplify your rituals.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for wine culture and culinary excellence drives us to curate only the finest products.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to products built to last, reducing waste and environmental impact.",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where technology meets taste in perfect harmony
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 animate-breathe">
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                VinoEase was born from a simple observation: the rituals we cherish—opening a bottle of wine, sharing a
                meal, maintaining our spaces—deserve tools as thoughtful as the moments themselves.
              </p>
              <p>
                We spent years in wine country, fascinated by how centuries-old traditions could coexist with modern
                convenience. We saw sommeliers struggle with stubborn corks, home chefs limited by cramped kitchens, and
                wine enthusiasts seeking elegant solutions that matched their aesthetic.
              </p>
              <p>
                That's when we realized: technology shouldn't complicate these rituals—it should elevate them. Every
                product we curate is selected for its ability to blend seamlessly into your life while adding a touch of
                sophistication.
              </p>
              <p className="font-serif text-xl text-primary italic pt-4">
                "At VinoEase, we don't just sell products. We cultivate experiences."
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">Our Values</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-300 group">
                  <value.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-6">Design Lab</h2>
            <p className="text-lg leading-relaxed text-foreground/80 text-center max-w-3xl mx-auto mb-8">
              Every product passes through our rigorous evaluation process. We test for functionality, durability,
              aesthetic appeal, and the intangible quality we call "ritual-worthiness"— the ability to transform a
              mundane task into a moment of joy.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Products Tested</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
