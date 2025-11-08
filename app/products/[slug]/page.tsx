"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { Star, ShoppingCart, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const productData: Record<string, any> = {
  "secura-electric-wine-opener": {
    id: 1,
    slug: "secura-electric-wine-opener",
    name: "Secura Electric Wine Opener, Automatic Electric Wine Bottle Corkscrew Opener with Foil Cutter, Rechargeable (Black)",
    price: 24.99,
    rating: 4.0,
    reviews: 7802,
    category: "Wine Openers",
    brand: "Secura",
    amazonLink: "https://www.amazon.com/Secura-Electric-Automatic-Corkscrew-Rechargeable/dp/B08D398NXN",
    images: ["https://m.media-amazon.com/images/I/61P7ZORYplL._AC_SX679_.jpg"],
    description:
      "The Secura Electric Wine Opener is an automatic corkscrew designed to simplify the process of opening wine bottles. It features a rechargeable battery, a built-in foil cutter, and a compact design, making it ideal for home use, parties, or as a thoughtful gift for wine enthusiasts.",
    features: [
      "Easy to use: Simply place on top of the wine bottle, press a button, and the cork is removed effortlessly.",
      "Rechargeable: Can open up to 30 bottles on a single charge with a 100-240V wide input voltage range.",
      "Compact design: Small footprint, perfect for storage near wine fridges or racks.",
      "Foil cutter included: Removes foil caps with ease before uncorking.",
      "Elegant LED light: Blue light glows during operation, adding a stylish touch.",
    ],
    specs: {
      Power: "Rechargeable Battery",
      Material: "Stainless Steel",
      Weight: "1.76 pounds",
      Dimensions: '11"L x 4.92"W',
      Warranty: "1 Year",
    },
  },
  "oster-cordless-electric-wine-opener": {
    id: 2,
    slug: "oster-cordless-electric-wine-opener",
    name: "Oster Cordless Electric Wine Bottle Opener with Foil Cutter",
    price: 24.99,
    rating: 4.6,
    reviews: 18000,
    category: "Wine Openers",
    brand: "Oster",
    amazonLink: "https://www.amazon.com/Oster-Cordless-Electric-Bottle-Opener/dp/B003YFI0O6",
    images: ["https://m.media-amazon.com/images/I/71jh+rwcjPL._AC_SX679_.jpg"],
    description:
      "The Oster Cordless Electric Wine Bottle Opener makes it easy to open bottles of wine with the touch of a button. Designed to fit all traditional wine bottles, this opener offers portable convenience and effortless performance.",
    features: [
      "Cordless and rechargeable, opens up to 30 bottles on a single charge.",
      "Includes foil cutter.",
      "Ergonomic design with soft-grip handle.",
      "Sleek silver finish.",
    ],
    specs: {
      Power: "Rechargeable Battery",
      Material: "Stainless Steel",
      Weight: "1 pound",
      Dimensions: "7.25 x 2.03 x 5.75 inches",
      Warranty: "1 Year",
    },
  },
  "ivation-electric-wine-gift-set": {
    id: 3,
    slug: "ivation-electric-wine-gift-set",
    name: "Ivation Electric Wine Gift Set – Includes Bottle Opener, Aerator, Vacuum Preserver, Stoppers, Foil Cutter & Charging Base",
    price: 39.99,
    rating: 4.7,
    reviews: 2000,
    category: "Wine Openers",
    brand: "Ivation",
    amazonLink: "https://www.amazon.com/Ivation-Stainless-Electric-Preserver-Stoppers/dp/B0782QFDDJ",
    images: ["https://m.media-amazon.com/images/I/71SeB1U7tpL._AC_SX679_.jpg"],
    description:
      "The Ivation Wine Gift Set is a complete kit for wine lovers, including an electric corkscrew, vacuum preserver, aerator, stoppers, foil cutter, and charging base.",
    features: [
      "Electric corkscrew removes up to 30 corks on a full charge.",
      "Vacuum preserver with date-stamped stoppers.",
      "Aerating pourer.",
      "See-through window on opener.",
      "Stainless steel construction.",
    ],
    specs: {
      Power: "Rechargeable Battery",
      Material: "Stainless Steel",
      Weight: "1.69 lbs",
      Dimensions: 'Opener: 2" x 8.27", Preserver: 1.7" x 6.67", Base: 5.9" x 5" x 1.41"',
      Warranty: "1 Year",
    },
  },
  "vochill-stemmed-wine-glass-chiller": {
    id: 8,
    slug: "vochill-stemmed-wine-glass-chiller",
    name: "VoChill Stemmed Wine Glass Chiller – Refreezable Chill Cradle (Blush)",
    price: 49.95,
    rating: 4.5,
    reviews: 1063,
    category: "Wine Chillers",
    brand: "VoChill",
    amazonLink: "https://www.amazon.com/VoChill-Stemmed-Glass-Chiller-Radically/dp/B08FF7QSQG",
    images: ["https://m.media-amazon.com/images/I/615uisjYpbL._AC_SX679_.jpg"],
    description:
      "VoChill is a personal wine glass chiller that keeps whites, rosés and sparkling wines crisp and cool, and brings room temperature reds to cellar temp in minutes — all in the beauty of your own stemware.",
    features: [
      "Elevated wine chilling – Simply lift your glass from VoChill and enjoy. No objects inserted into wine and no metal or plastic taste or smell that compromise the drinking experience.",
      "Keep the chill without giving up your glass – Enjoy the pleasure of your own stemmed glassware. Fits a wide range of standard stemware glass shapes and sizes.",
      "Long-lasting temperature control - Actively chills one or several glasses of wine for well over an hour inside, and for up to 45 minutes in shaded outdoor heat.",
      "Perfect for all wines – All wines should be served with a varying degree of chill.",
      "Made in the USA - Designed in Austin, TX. Quality you can trust - Made of durable materials that are engineered to last.",
    ],
    specs: {
      Power: "None (Refreezable)",
      Material: "Glass",
      Weight: "1.01 pounds",
      Dimensions: "4.75 x 5.45 x 7.25 inches",
      Warranty: "Not Specified",
    },
  },
  "wine-enthusiast-electric-blue-automatic-wine-opener": {
    id: 5,
    slug: "wine-enthusiast-electric-blue-automatic-wine-opener",
    name: "Wine Enthusiast 2-in-1 Electric Blue Automatic Wine Bottle Opener and Preserver Set – Fully Electric Corkscrew with Charging Station – Seal Bottle with Vacuum Stopper (7 Piece Set)",
    price: 29.99,
    rating: 4.5,
    reviews: 500,
    category: "Wine Openers",
    brand: "Wine Enthusiast",
    amazonLink: "https://www.amazon.com/Wine-Enthusiast-Electric-Automatic-Preserver/dp/B06ZZX9S7N",
    images: ["https://m.media-amazon.com/images/I/81das2Q0jEL._AC_SX679_.jpg"],
    description:
      "The Wine Enthusiast Electric Blue Automatic Wine Opener and Preserver Set is a 2-in-1 device that opens and preserves wine bottles effortlessly.",
    features: [
      "Effortless wine opening: Removes cork automatically without a button.",
      "Preserve freshness: Seal opened bottles with vacuum stoppers.",
      "Includes foil cutter, aerator/pourer, and stand.",
      "Reusable stoppers with date setting.",
      "Sleek stainless steel design with lighted battery indicator.",
    ],
    specs: {
      Power: "Rechargeable Battery",
      Material: "Stainless Steel",
      Weight: "Not Specified",
      Dimensions: "Not Specified",
      Warranty: "Not Specified",
    },
  },
  "comfee-mini-countertop-dishwasher": {
    id: 4,
    slug: "comfee-mini-countertop-dishwasher",
    name: "COMFEE' Mini Portable Countertop Dishwasher, 6 Programs",
    price: 289.99,
    rating: 4.4,
    reviews: 3500,
    category: "Countertop Dishwashers",
    brand: "COMFEE'",
    amazonLink: "https://www.amazon.com/dp/B0BWQ8JH4Y",
    images: ["https://m.media-amazon.com/images/I/51WR05qfouL._AC_SX679_.jpg"],
    description:
      "The COMFEE' Mini Portable Countertop Dishwasher is a compact and efficient dishwasher designed for small kitchens, apartments, RVs, or as a supplement to a full-size dishwasher. With 6 washing programs, it delivers powerful cleaning performance while saving water and energy.",
    features: [
      "Compact design: Fits easily on countertops and in small spaces.",
      "6 washing programs: Normal, Speed, Baby-Care, ECO, Glass, and Rinse.",
      "Energy Star certified: Saves water and energy compared to handwashing.",
      "Easy installation: No hookup required, just add water or connect to a faucet.",
      "Large capacity: Holds up to 70 pieces of tableware.",
    ],
    specs: {
      Power: "Electric (120V)",
      Material: "Stainless Steel Interior",
      Weight: "44 pounds",
      Dimensions: '17.7"W x 19.7"D x 21.7"H',
      Warranty: "1 Year",
    },
  },
  "farberware-portable-dishwasher": {
    id: 5,
    slug: "farberware-portable-dishwasher",
    name: "Farberware Portable Countertop Dishwasher, 5-Liter Basin",
    price: 319.99,
    rating: 4.3,
    reviews: 2100,
    category: "Countertop Dishwashers",
    brand: "Farberware",
    amazonLink: "https://www.amazon.com/dp/B08FPXP1GF",
    images: ["https://m.media-amazon.com/images/I/71QYw-3ajnL._AC_SX679_.jpg"],
    description:
      "The Farberware Portable Countertop Dishwasher brings full-size dishwasher performance to your countertop. With a 5-liter water basin and multiple wash cycles, it's perfect for apartments, RVs, or office kitchens.",
    features: [
      "7 washing programs: Normal, Speed, Eco, Glass, Fruit, and Heavy cycles.",
      "Large capacity: Holds 6 place settings and up to 9-inch plates.",
      "Easy setup: Built-in 5-liter water tank or direct faucet connection.",
      "Air-dry function: Natural drying cycle for spotless dishes.",
      "Sleek design: Modern silver finish fits any kitchen décor.",
    ],
    specs: {
      Power: "Electric (120V)",
      Material: "Stainless Steel",
      Weight: "48 pounds",
      Dimensions: '16.85"W x 19.6"D x 17.2"H',
      Warranty: "1 Year Limited",
    },
  },
  "black-decker-dustbuster-cordless": {
    id: 6,
    slug: "black-decker-dustbuster-cordless",
    name: "BLACK+DECKER Dustbuster AdvancedClean Cordless Handheld Vacuum",
    price: 59.99,
    rating: 4.5,
    reviews: 48000,
    category: "Handheld Vacuums",
    brand: "BLACK+DECKER",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-dustbuster-AdvancedClean-Cordless/dp/B079P8N8LH",
    images: ["https://m.media-amazon.com/images/I/611QYSatPfL._AC_SX679_.jpg"],
    description:
      "The BLACK+DECKER dustbuster AdvancedClean Cordless Handheld Vacuum combines powerful suction with cordless convenience to tackle everyday messes around your home, car, or office.",
    features: [
      "Powerful suction: High-performance motor provides strong pickup.",
      "XL dustbin: Holds more dirt, requiring fewer trips to empty.",
      "Crevice tool and flip-up brush: Tackles hard-to-reach areas and upholstery.",
      "Lightweight and ergonomic: Easy to maneuver and comfortable to hold.",
      "Washable filter: Reusable filter saves money and reduces waste.",
    ],
    specs: {
      Power: "Rechargeable 16V Lithium-Ion Battery",
      Material: "Plastic",
      Weight: "2.6 pounds",
      Dimensions: '15.5"L x 5.5"W x 6"H',
      Warranty: "2 Years",
    },
  },
  "quality-chemical-chloro-guard": {
    id: 7,
    slug: "quality-chemical-chloro-guard",
    name: "Quality Chemical Chloro-Guard Chlorine Pool Shock, 50 lbs",
    price: 189.99,
    rating: 4.6,
    reviews: 890,
    category: "Pool Chemicals",
    brand: "Quality Chemical",
    amazonLink: "https://www.amazon.com/dp/B00J6OY8CS",
    images: ["https://m.media-amazon.com/images/I/71H8tPx8QQL._AC_SX679_.jpg"],
    description:
      "Quality Chemical Chloro-Guard is a powerful calcium hypochlorite pool shock treatment designed to quickly sanitize and restore clarity to swimming pool water. This 50-pound bucket provides long-lasting protection against bacteria, algae, and organic contaminants.",
    features: [
      "Fast-acting formula: Quickly raises chlorine levels for rapid sanitization.",
      "99% calcium hypochlorite: High-purity chlorine for maximum effectiveness.",
      "Kills bacteria and algae: Keeps pool water clean and safe for swimming.",
      "Large 50 lb. size: Sufficient for multiple treatments throughout the season.",
      "Easy to use: Simply broadcast over pool surface with pump running.",
    ],
    specs: {
      Power: "N/A",
      Material: "Calcium Hypochlorite Granules",
      Weight: "50 pounds",
      Dimensions: "Bucket: 12 x 12 x 14 inches",
      Warranty: "Not Specified",
    },
  },
  "wine-enthusiast-electric-blue-opener": {
    id: 9,
    slug: "wine-enthusiast-electric-blue-opener",
    name: "Wine Enthusiast Electric Blue 2-in-1 Opener & Preserver Set (7-Piece)",
    price: 29.99,
    rating: 4.5,
    reviews: 500,
    category: "Wine Openers",
    brand: "Wine Enthusiast",
    amazonLink: "https://www.amazon.com/Wine-Enthusiast-Electric-Automatic-Preserver/dp/B06ZZX9S7N",
    images: ["https://m.media-amazon.com/images/I/81das2Q0jEL._AC_SX679_.jpg"],
    description:
      "The Wine Enthusiast Electric Blue 2-in-1 Opener & Preserver Set is a comprehensive wine accessory kit that opens and preserves wine bottles effortlessly. This 7-piece set includes everything you need for a complete wine experience.",
    features: [
      "Effortless wine opening: Removes cork automatically with push-button operation.",
      "Preserve freshness: Electric vacuum pump with reusable stoppers extends wine life.",
      "Complete set: Includes opener, preserver, foil cutter, aerator/pourer, 2 stoppers, and charging stand.",
      "Date-setting stoppers: Remember when you opened each bottle.",
      "Elegant design: Sleek blue and stainless steel finish adds sophistication to any bar.",
    ],
    specs: {
      Power: "Rechargeable Battery",
      Material: "Stainless Steel & Plastic",
      Weight: "2.5 pounds",
      Dimensions: "Set includes 7 pieces with charging base",
      Warranty: "Not Specified",
    },
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = productData[slug]

  // If product not found, show 404
  if (!product) {
    return (
      <main className="relative min-h-screen">
        <FractalBackground />
        <Header />
        <div className="relative z-10 pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">Product Not Found</h1>
            <p className="text-foreground/80 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/reviews">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link href="/reviews" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="glass-card rounded-2xl overflow-hidden aspect-square">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="glass-card rounded-xl overflow-hidden aspect-square cursor-pointer hover:gold-glow transition-all"
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} view ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-secondary font-semibold mb-2">{product.category}</div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <p className="text-lg leading-relaxed text-foreground/80 mb-4">{product.description}</p>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gold-glow"
                  onClick={() => window.open(product.amazonLink, "_blank")}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </Button>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border/50 pb-2">
                      <dt className="font-semibold text-foreground/70">{key}</dt>
                      <dd className="text-foreground/80">{value as string}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
