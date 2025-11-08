import Link from "next/link"
import { Wine } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wine className="w-6 h-6" />
              <span className="font-serif text-xl font-bold">VinoEase</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Technology meets taste in perfect harmony.
            </p>
          </div>

          

          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p className="mb-2">© 2025 VinoEase.com — All Rights Reserved</p>
          <p className="text-primary-foreground/70">
            Amazon Affiliate Partner | As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
