"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  User,
} from "lucide-react"
import { storeConfig } from "@/lib/store-config"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Header />

      {/* SAME GLOBAL BACKGROUND AS SERVICES */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-40%] right-[-30%] w-[800px] h-[800px] bg-cyan-500/10 blur-[160px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* HERO */}
        <section className="max-w-3xl space-y-6">
          <p className="text-xs tracking-widest uppercase text-emerald-400 font-semibold">
            Get in Touch
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            Need help choosing the right bathroom sanitary or waterproof product?
            Reach out for expert guidance, quick response, and easy ordering.
          </p>
        </section>

        {/* PRIMARY CONTACT */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* WhatsApp */}
          <div className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/15 text-emerald-400">
                <MessageCircle />
              </div>

              <h3 className="text-xl font-bold">
                WhatsApp Support
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Fastest way to enquire, get prices, and place orders for bathtub
                sealing tapes and bathroom accessories.
              </p>

              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}?text=Hello, I want to enquire about bathroom sanitary and waterproof products.`}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-600 transition"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-sky-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-500/15 text-sky-400">
                <Phone />
              </div>

              <h3 className="text-xl font-bold">
                Call Directly
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Speak directly with the owner for urgent requirements, bulk
                orders, or product guidance.
              </p>

              <p className="text-lg font-bold tracking-wide">
                +91 93353 65885
              </p>
            </div>
          </div>

          {/* Owner */}
          <div className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-amber-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/15 text-amber-400">
                <User />
              </div>

              <h3 className="text-xl font-bold">
                Owner Contact
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Direct owner involvement ensures transparency, trust, and genuine
                service.
              </p>

              <p className="font-semibold">
                Rajkumar Jaiswal
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION + TRUST */}
        <section className="grid sm:grid-cols-2 gap-8">

          <div className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-indigo-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/15 text-indigo-400">
                <MapPin />
              </div>

              <h3 className="text-xl font-bold">
                Service Locations
              </h3>

              <p className="text-sm text-slate-400">
                Serving customers across multiple cities with fast delivery and
                dependable support.
              </p>

              <p className="font-semibold text-sm">
                Delhi • Varanasi • PAN India Delivery
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/15 text-emerald-400">
                <ShieldCheck />
              </div>

              <h3 className="text-xl font-bold">
                Why Customers Trust Us
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Genuine quality products, honest pricing, quick response, and
                years of experience in bathroom sanitary & waterproof solutions.
              </p>
            </div>
          </div>
        </section>

        {/* BUSINESS HOURS */}
        <section className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl max-w-2xl">
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-cyan-500/10 blur-2xl" />

          <div className="relative flex gap-4">
            <Clock className="text-cyan-400 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-1">
                Business Hours
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Monday – Saturday: 9:00 AM – 8:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
