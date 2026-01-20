"use client"

import { useEffect, useState } from "react"
import { storeConfig } from "@/lib/store-config"

export default function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Accent glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div
          className={`relative transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* signature accent */}
          <span className="absolute -left-6 top-2 h-16 w-1 bg-gradient-to-b from-sky-400 to-cyan-400 rounded-full" />

          <p className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-4">
            Premium Bathroom Solutions
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white">
            {storeConfig.shopName}
          </h1>

          <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
            {storeConfig.shopDescription ||
              "High-quality sanitary ware, bathtub sealing tapes, shower fittings and waterproof solutions designed for modern bathrooms."}
          </p>

          {/* quick trust row */}
          <div className="flex gap-6 text-sm text-slate-400 mb-8">
            <span>✔ Waterproof</span>
            <span>✔ Easy Install</span>
            <span>✔ Trusted Quality</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            {/* SCROLL TO PRODUCTS */}
            <a
              href="#products"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-sky-500 to-cyan-500
                text-white font-semibold
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95
              "
            >
              Explore Products
            </a>

            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}`}
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                border border-slate-700
                text-slate-200 font-semibold
                transition-all duration-300
                hover:bg-slate-800 hover:border-slate-600
              "
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`relative transition-all duration-700 delay-200 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="relative rounded-3xl p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Bathtub Tape",
                "Shower Fittings",
                "Sanitary Ware",
                "Waterproof Tools",
              ].map((item, i) => (
                <div
                  key={item}
                  style={{ transform: `translateY(${i * 4}px)` }}
                  className="
                    h-32 rounded-xl
                    bg-slate-800 border border-slate-700
                    flex items-center justify-center
                    text-sm font-medium text-slate-200
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-sky-400/40
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
