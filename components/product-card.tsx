"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { storeConfig } from "@/lib/store-config"

type Product = {
  id: string
  name: string
  price: string
  description: string
  image: string
}

type Props = {
  product: Product
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onProductClick }: Props) {
  return (
    <div
      onClick={() => onProductClick(product)}
      className="
        group cursor-pointer fade-up
        rounded-2xl overflow-hidden
        bg-[rgb(var(--surface-1))]
        border border-[rgb(var(--border))]
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-2xl
        hover:border-emerald-500/40
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-4/5 overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-110
          "
        />

        {/* overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/40 via-transparent to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3
          className="
            text-base font-semibold leading-snug line-clamp-1
            transition-colors duration-300
            group-hover:text-emerald-400
          "
        >
          {product.name}
        </h3>

        <p
          className="
            text-sm text-[rgb(var(--muted))] line-clamp-2
            transition-opacity duration-300
            group-hover:opacity-90
          "
        >
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4">
          <span
            className="
              text-lg font-bold text-emerald-400
              transition-transform duration-300
              group-hover:scale-105
            "
          >
            ₹ {product.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(
                `https://wa.me/${storeConfig.whatsappNumber}?text=I want to order ${encodeURIComponent(
                  product.name
                )}`,
                "_blank"
              )
            }}
            className="
              flex items-center gap-2
              px-3 py-2 rounded-lg
              bg-emerald-500 text-black text-sm font-semibold
              transition-all duration-300
              hover:bg-emerald-600 hover:scale-105
              active:scale-95
            "
          >
            <MessageCircle size={16} />
            Order
          </button>
        </div>
      </div>
    </div>
  )
}
