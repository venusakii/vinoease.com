import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using VinoEase.com, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">2. Affiliate Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                VinoEase.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As an Amazon Associate, we earn from qualifying purchases. This means if you click on a product link and
                make a purchase, we may receive a commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">3. Product Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that
                product descriptions or other content is accurate, complete, reliable, current, or error-free. All
                purchases are made directly through Amazon, and their terms and conditions apply to all transactions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                The content on this website, including but not limited to text, graphics, logos, and images, is the
                property of VinoEase or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                VinoEase shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">6. Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the site following any changes indicates your acceptance
                of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">7. Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at
                <a href="mailto:hello@vinoease.com" className="text-primary hover:text-primary/80 font-semibold ml-1">
                  hello@vinoease.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
