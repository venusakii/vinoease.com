import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CategoryHighlight } from "@/components/category-highlight"
import { ProductShowcase } from "@/components/product-showcase"
import { VideoSection } from "@/components/video-section"
import { HowItWorks } from "@/components/how-it-works"
import { ReviewsSection } from "@/components/reviews-section"
import { ScienceSection } from "@/components/science-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CategoryHighlight />
        <ProductShowcase />
        <VideoSection />
        <HowItWorks />
        <ReviewsSection />
        <ScienceSection />
        <CTASection />
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}
