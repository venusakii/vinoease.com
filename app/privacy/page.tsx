import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Contact information (name, email address)</li>
                <li>Communication preferences</li>
                <li>Messages you send through our contact form</li>
                <li>Device and usage information when you visit our site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about products and promotions (with your consent)</li>
                <li>Improve and personalize your experience on our website</li>
                <li>Analyze site usage and trends to enhance our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">3. Cookies and Tracking</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. Cookies help us improve your browsing experience and analyze site traffic. You can instruct
                your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">4. Third-Party Services</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We use Amazon Associates and other third-party services. When you click on affiliate links and make
                purchases, these third parties may collect information about you. Please review their privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>
                  <a
                    href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496"
                    className="text-primary hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon Privacy Notice
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">5. Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">7. Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information
                from children.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">8. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">9. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at
                <a href="mailto:privacy@vinoease.com" className="text-primary hover:text-primary/80 font-semibold ml-1">
                  privacy@vinoease.com
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
