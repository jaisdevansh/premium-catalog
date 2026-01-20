"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import ProductModal from "./product-modal"

export type Product = {
  id: string
  name: string
  price: string
  description: string
  image: string
  material?: string | null
  availability?: string | null
  delivery?: string | null
  crafted?: string | null
  rating?: number | null
  features?: string | null
}

type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null)

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-100 px-4">
        <p className="text-muted-foreground text-lg">
          No products available
        </p>
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-24">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-xs tracking-widest text-emerald-400 mb-2">
          COLLECTION
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light">
          Featured Products
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="stagger-item"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <ProductCard
              product={product}
              onProductClick={setSelectedProduct}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
