import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    slug: "secura-electric-wine-opener",
    name: "Secura Electric Wine Opener, Automatic Corkscrew with Foil Cutter, Rechargeable (Black)",
    image: "https://m.media-amazon.com/images/I/61P7ZORYplL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/61P7ZORYplL._AC_SX679_.jpg"],
    price: 24.99,
    rating: 4.0,
    reviews: 7802,
    category: "Wine Openers",
    brand: "Secura",
    color: "Black",
    power: "Rechargeable",
  },
  {
    id: 2,
    slug: "oster-cordless-electric-wine-opener",
    name: "Oster Cordless Electric Wine Bottle Opener with Foil Cutter",
    image: "https://m.media-amazon.com/images/I/71jh+rwcjPL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/71jh+rwcjPL._AC_SX679_.jpg"],
    price: 24.99,
    rating: 4.6,
    reviews: 18000,
    category: "Wine Openers",
    brand: "Oster",
    color: "Silver",
    power: "Rechargeable",
  },
  {
    id: 3,
    slug: "ivation-electric-wine-gift-set",
    name: "Ivation Electric Wine Gift Set – Opener, Aerator, Preserver & Stoppers",
    image: "https://m.media-amazon.com/images/I/71SeB1U7tpL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/71SeB1U7tpL._AC_SX679_.jpg"],
    price: 39.99,
    rating: 4.7,
    reviews: 2000,
    category: "Wine Gift Sets",
    brand: "Ivation",
    color: "Stainless Steel",
    power: "Rechargeable",
  },
  {
    id: 4,
    slug: "comfee-mini-countertop-dishwasher",
    name: "COMFEE' Mini Portable Countertop Dishwasher, 6 Programs",
    image: "https://m.media-amazon.com/images/I/51WR05qfouL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/51WR05qfouL._AC_SX679_.jpg"],
    price: 289.99,
    rating: 4.4,
    reviews: 3500,
    category: "Countertop Dishwashers",
    brand: "COMFEE'",
    color: "White",
    power: "Electric (120V)",
  },
  {
    id: 5,
    slug: "farberware-portable-dishwasher",
    name: "Farberware Portable Countertop Dishwasher, 5-Liter Basin",
    image: "https://m.media-amazon.com/images/I/71QYw-3ajnL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/71QYw-3ajnL._AC_SX679_.jpg"],
    price: 319.99,
    rating: 4.3,
    reviews: 2100,
    category: "Countertop Dishwashers",
    brand: "Farberware",
    color: "Silver",
    power: "Electric (120V)",
  },
  {
    id: 6,
    slug: "black-decker-dustbuster-cordless",
    name: "BLACK+DECKER Dustbuster AdvancedClean Cordless Handheld Vacuum",
    image: "https://m.media-amazon.com/images/I/611QYSatPfL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/611QYSatPfL._AC_SX679_.jpg"],
    price: 59.99,
    rating: 4.5,
    reviews: 48000,
    category: "Handheld Vacuums",
    brand: "BLACK+DECKER",
    color: "Gray",
    power: "Rechargeable (16V)",
  },
  {
    id: 7,
    slug: "quality-chemical-chloro-guard",
    name: "Quality Chemical Chloro-Guard Chlorine Pool Shock, 50 lbs",
    image: "https://m.media-amazon.com/images/I/71H8tPx8QQL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/71H8tPx8QQL._AC_SX679_.jpg"],
    price: 189.99,
    rating: 4.6,
    reviews: 890,
    category: "Pool Chemicals",
    brand: "Quality Chemical",
    color: "White Granules",
    power: "N/A",
  },
  {
    id: 8,
    slug: "vochill-stemmed-wine-glass-chiller",
    name: "VoChill Stemmed Wine Glass Chiller – Refreezable Chill Cradle (Blush)",
    image: "https://m.media-amazon.com/images/I/615uisjYpbL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/615uisjYpbL._AC_SX679_.jpg"],
    price: 49.95,
    rating: 4.5,
    reviews: 1063,
    category: "Wine Chillers",
    brand: "VoChill",
    color: "Blush",
    power: "Refreezable (No Power)",
  },
  {
    id: 9,
    slug: "wine-enthusiast-electric-blue-opener",
    name: "Wine Enthusiast Electric Blue 2-in-1 Opener & Preserver Set (7-Piece)",
    image: "https://m.media-amazon.com/images/I/81das2Q0jEL._AC_SX679_.jpg",
    images: ["https://m.media-amazon.com/images/I/81das2Q0jEL._AC_SX679_.jpg"],
    price: 29.99,
    rating: 4.5,
    reviews: 500,
    category: "Wine Openers",
    brand: "Wine Enthusiast",
    color: "Blue / Stainless Steel",
    power: "Rechargeable",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-12 text-balance">
          Curated for Connoisseurs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
