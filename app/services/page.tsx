"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  MessageCircle,
  Truck,
  Shield,
  Wrench,
  Droplets,
  Headphones,
} from "lucide-react"

const services = [
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Ordering",
    desc:
      "Quick product enquiry, instant pricing, and hassle-free ordering directly on WhatsApp without any middlemen.",
    color: "emerald",
  },
  {
    icon: Truck,
    title: "Fast & Secure Delivery",
    desc:
      "Safe packaging and reliable delivery across Delhi, Varanasi, and PAN India with timely dispatch.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Premium Quality Products",
    desc:
      "All products undergo strict quality checks to ensure durability, waterproof performance, and long-lasting results.",
    color: "indigo",
  },
  {
    icon: Wrench,
    title: "DIY Installation Guidance",
    desc:
      "Step-by-step guidance for installing bathtub sealing tapes and bathroom accessories — no professionals needed.",
    color: "amber",
  },
  {
    icon: Droplets,
    title: "Waterproofing Solutions",
    desc:
      "Effective solutions to prevent leakage, mold, and moisture issues in bathrooms and wet areas.",
    color: "teal",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc:
      "Friendly and responsive support to assist with product selection, usage, and post-purchase queries.",
    color: "rose",
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Header />

      {/* GLOBAL BACKGROUND – NO BOX */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-[-40%] right-[-30%] w-[800px] h-[800px] bg-emerald-500/10 blur-[160px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        {/* HEADING */}
        <section className="max-w-3xl space-y-6">
          <p className="text-xs tracking-widest text-emerald-400 uppercase">
            What we offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Our Services
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Complete support for bathroom sanitary and waterproof products —
            from choosing the right solution to delivery and after-sales care.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="
                  group relative rounded-3xl p-7
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2 hover:border-white/20
                "
              >
                {/* glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                    bg-${s.color}-500/10 blur-2xl`}
                />

                <div className="relative space-y-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center
                      bg-${s.color}-500/15 text-${s.color}-400`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </main>

      <Footer />
    </div>
  )
}
