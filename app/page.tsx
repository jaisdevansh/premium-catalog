"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import { supabase } from "@/lib/supabase"

/* Product type */
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
  created_at?: string
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        setProducts(data as Product[])
      }

      setLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden text-foreground bg-gradient-to-b from-slate-950 via-slate-900 to-[#020617]">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* PRODUCTS (NO EXTRA GAP) */}
      <section
        id="products"
        className="
          relative
          pt-16 pb-24
          bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        "
      >
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-slate-400">
              Loading products…
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              No products available
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
