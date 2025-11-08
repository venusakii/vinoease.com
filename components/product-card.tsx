"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number
    slug: string
    name: string
    image: string
    images?: string[]
    price: number
    rating: number
    category: string
    amazonLink?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:gold-glow transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <img
          src={product.images?.[0] || product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Link href={`/products/${product.slug}`}>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
