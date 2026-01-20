"use client"

import Image from "next/image"
import { storeConfig } from "@/lib/store-config"
import type { Product } from "./product-grid"
import { X, MessageCircle, Star, Package, Truck } from "lucide-react"

export type ProductModalProps = {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl mx-4
          rounded-2xl
          bg-slate-950 border border-slate-800
          shadow-2xl
          overflow-hidden
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">

          {/* IMAGE */}
          <div className="relative aspect-square bg-black">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 flex flex-col">

            <h2 className="text-2xl font-semibold mb-1">
              {product.name}
            </h2>

            <p className="text-emerald-400 text-xl font-bold mb-4">
              ₹ {product.price || "Contact for price"}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {product.description || "No description available."}
            </p>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <Info label="Material" value={product.material} icon={<Package />} />
              <Info label="Availability" value={product.availability} />
              <Info label="Delivery" value={product.delivery} icon={<Truck />} />
              <Info label="Crafted" value={product.crafted} />
            </div>

            {/* FEATURES */}
            {product.features && (
              <div className="mb-6">
                <p className="text-sm font-semibold mb-2">Key Features</p>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                  {product.features.split(",").map((f) => (
                    <li key={f}>{f.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* RATING */}
            {product.rating && (
              <div className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                <Star size={16} className="text-amber-400" />
                {product.rating} / 5 Customer Rating
              </div>
            )}

            {/* ACTIONS */}
            <div className="mt-auto flex gap-3">
              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}?text=I want to order ${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                className="
                  flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-3 rounded-xl
                  bg-emerald-500 text-black font-semibold
                  hover:bg-emerald-600 transition
                "
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

              <button
                onClick={onClose}
                className="px-4 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

/* SMALL HELPER */
function Info({
  label,
  value,
  icon,
}: {
  label: string
  value?: string | null
  icon?: React.ReactNode
}) {
  return (
    <div className="bg-slate-900 rounded-lg p-3">
      <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
        {icon}
        {label}
      </p>
      <p className="font-medium">
        {value || "Not specified"}
      </p>
    </div>
  )
}
