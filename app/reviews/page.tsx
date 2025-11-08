"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

const allProducts = [
  {
    id: 1,
    slug: "secura-electric-wine-opener",
    name: "Secura Electric Wine Opener, Automatic Corkscrew with Foil Cutter, Rechargeable (Black)",
    image: "https://m.media-amazon.com/images/I/61P7ZORYplL._AC_SX679_.jpg",
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
    price: 29.99,
    rating: 4.5,
    reviews: 500,
    category: "Wine Openers",
    brand: "Wine Enthusiast",
    color: "Blue / Stainless Steel",
    power: "Rechargeable",
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedBrand, setSelectedBrand] = useState<string>("All")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["All", ...Array.from(new Set(allProducts.map((p) => p.category)))]
  const brands = ["All", ...Array.from(new Set(allProducts.map((p) => p.brand)))]

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false
    if (selectedBrand !== "All" && product.brand !== selectedBrand) return false
    return true
  })

  return (
    <main className="relative min-h-screen">
      <FractalBackground />
      <Header />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
              Product Collection
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our curated selection of wine accessories and kitchen essentials
            </p>
          </div>

          <div className="mb-8">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="mb-4">
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>

            {showFilters && (
              <div className="glass-card rounded-xl p-6 mb-6 animate-grow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg mb-3">Brand</h3>
                    <div className="flex flex-wrap gap-2">
                      {brands.map((brand) => (
                        <Button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          variant={selectedBrand === brand ? "default" : "outline"}
                          size="sm"
                          className={selectedBrand === brand ? "bg-primary text-primary-foreground" : ""}
                        >
                          {brand}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {allProducts.length} products
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
