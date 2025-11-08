"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    slug: "secura-electric-wine-opener",
    name: "Secura Electric Wine Opener",
    price: 29.99,
    rating: 4.5,
    reviews: 342,
    category: "Openers",
    brand: "Secura",
    image: "https://m.media-amazon.com/images/I/61VrNKWdHTL._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/61VrNKWdHTL._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Secura-Electric-Wine-Bottle-Opener/dp/B003BQ1H9I",
  },
  {
    id: 2,
    slug: "coravin-model-two",
    name: "Coravin Model Two Elite",
    price: 299.99,
    rating: 4.8,
    reviews: 189,
    category: "Preservation",
    brand: "Coravin",
    image: "https://m.media-amazon.com/images/I/61Y3qH-YIKL._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/61Y3qH-YIKL._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Coravin-Model-Two-Elite-System/dp/B07PMLW7QR",
  },
  {
    id: 3,
    slug: "vinturi-essential-red-wine-aerator",
    name: "Vinturi Essential Red Wine Aerator",
    price: 24.99,
    rating: 4.6,
    reviews: 521,
    category: "Aerators",
    brand: "Vinturi",
    image: "https://m.media-amazon.com/images/I/61cqMGOXk3L._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/61cqMGOXk3L._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Vinturi-V1010-Essential-Red-Aerator/dp/B000UPOJ5W",
  },
  {
    id: 4,
    slug: "huski-wine-chiller",
    name: "Huski Wine Chiller",
    price: 49.99,
    rating: 4.7,
    reviews: 234,
    category: "Chillers",
    brand: "Huski",
    image: "https://m.media-amazon.com/images/I/71XzNJYJ4ML._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/71XzNJYJ4ML._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Huski-Wine-Chiller-Champagne/dp/B07D7PS3LV",
  },
  {
    id: 5,
    slug: "rabbit-vertical-lever-corkscrew",
    name: "Rabbit Vertical Lever Corkscrew",
    price: 59.99,
    rating: 4.9,
    reviews: 412,
    category: "Openers",
    brand: "Rabbit",
    image: "https://m.media-amazon.com/images/I/71PEm+yGjNL._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/71PEm+yGjNL._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Rabbit-Vertical-Lever-Corkscrew-Black/dp/B0009VBZY2",
  },
  {
    id: 6,
    slug: "riedel-ultra-decanter",
    name: "Riedel Ultra Decanter",
    price: 89.99,
    rating: 4.8,
    reviews: 156,
    category: "Decanters",
    brand: "Riedel",
    image: "https://m.media-amazon.com/images/I/51GkkHvXPAL._AC_SL1200_.jpg",
    images: ["https://m.media-amazon.com/images/I/51GkkHvXPAL._AC_SL1200_.jpg"],
    amazonLink: "https://www.amazon.com/Riedel-Ultra-Decanter/dp/B00E8B9US0",
  },
  {
    id: 7,
    slug: "vacu-vin-wine-saver-pump",
    name: "Vacu Vin Wine Saver Pump",
    price: 14.99,
    rating: 4.4,
    reviews: 892,
    category: "Preservation",
    brand: "Vacu Vin",
    image: "https://m.media-amazon.com/images/I/61kFQhfJ9BL._AC_SL1200_.jpg",
    images: ["https://m.media-amazon.com/images/I/61kFQhfJ9BL._AC_SL1200_.jpg"],
    amazonLink: "https://www.amazon.com/Vacu-Vin-Wine-Saver-Pump/dp/B000GA3KCE",
  },
  {
    id: 8,
    slug: "le-creuset-screwpull-tm200",
    name: "Le Creuset Screwpull TM200",
    price: 34.99,
    rating: 4.7,
    reviews: 287,
    category: "Openers",
    brand: "Le Creuset",
    image: "https://m.media-amazon.com/images/I/51HKNG-s3fL._AC_SL1000_.jpg",
    images: ["https://m.media-amazon.com/images/I/51HKNG-s3fL._AC_SL1000_.jpg"],
    amazonLink: "https://www.amazon.com/Creuset-Screwpull-Lever-Corkscrew-Black/dp/B00BQMNPF4",
  },
  {
    id: 9,
    slug: "menu-wine-breather-carafe",
    name: "Menu Wine Breather Carafe",
    price: 69.99,
    rating: 4.6,
    reviews: 198,
    category: "Aerators",
    brand: "Menu",
    image: "https://m.media-amazon.com/images/I/61qhx5VHESL._AC_SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/61qhx5VHESL._AC_SL1500_.jpg"],
    amazonLink: "https://www.amazon.com/Menu-Wine-Breather-Carafe/dp/B008L6NFBQ",
  },
]

const categories = ["All", "Openers", "Preservation", "Decanters", "Aerators", "Chillers"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the finest wine accessories for every occasion
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground gold-glow"
                    : "glass-card hover:gold-glow"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
