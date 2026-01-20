"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { storeConfig } from "@/lib/store-config"
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  Wrench,
  MessageCircle,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <Header />

      {/* GLOBAL BACKGROUND (same as Services & Contact) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-40%] right-[-30%] w-[800px] h-[800px] bg-cyan-500/10 blur-[160px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-24 space-y-28">

        {/* HERO */}
        <section className="max-w-3xl space-y-6">
          <p className="text-xs tracking-widest uppercase text-emerald-400 font-semibold">
            Who We Are
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About Bath Club
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            We specialize in modern bathroom sanitary and waterproof solutions
            designed to solve everyday problems like water leakage, mold buildup,
            and poor sealing — without expensive renovations or professionals.
          </p>
        </section>

        {/* TRUST BADGES */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Droplets, label: "100% Waterproof" },
            { icon: ShieldCheck, label: "Mold Resistant" },
            { icon: Wrench, label: "Easy DIY Install" },
            { icon: Sparkles, label: "Long Lasting" },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-2xl" />
                <div className="relative space-y-3">
                  <Icon className="mx-auto text-emerald-400" />
                  <p className="font-bold">{item.label}</p>
                </div>
              </div>
            )
          })}
        </section>

        {/* MISSION + WHY US */}
        <section className="grid sm:grid-cols-2 gap-10">
          <div className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-sky-500/10 blur-2xl" />
            <div className="relative space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver reliable, hygienic, and waterproof bathroom products
                that improve daily living while keeping bathrooms clean, modern,
                and stress-free.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-2xl" />
            <div className="relative space-y-4">
              <h3 className="text-2xl font-bold">Why Choose Us</h3>
              <p className="text-slate-400 leading-relaxed">
                Premium-grade materials, strong adhesive technology, transparent
                pricing, direct WhatsApp ordering, fast delivery, and honest
                owner-level support.
              </p>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">
            Real Bathroom Problems. Simple Solutions.
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-rose-500/10 blur-2xl" />
              <div className="relative">
                <h4 className="font-bold mb-2">Before</h4>
                <p className="text-slate-400">
                  Water leakage, fungus, dirty edges, mold buildup, and unhygienic
                  corners around bathtubs, sinks, and shower areas.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-emerald-500/10 blur-2xl" />
              <div className="relative">
                <h4 className="font-bold mb-2">After</h4>
                <p className="text-slate-400">
                  Clean sealing, waterproof protection, mold-free edges, and a
                  neat, premium bathroom finish that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

          {[
            {
              q: "Is the sealing tape really waterproof?",
              a: "Yes. Our tapes are designed for continuous water exposure and humid bathroom conditions.",
            },
            {
              q: "Can I install it myself?",
              a: "Absolutely. No tools or professionals needed — peel, stick, and press firmly.",
            },
            {
              q: "Where can these products be used?",
              a: "Bathtubs, washbasins, sinks, tiles, shower corners, kitchen edges, and other wet areas.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="group relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-cyan-500/10 blur-2xl" />
              <div className="relative">
                <p className="font-bold">{item.q}</p>
                <p className="text-slate-400 mt-2">{item.a}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="relative rounded-3xl p-12 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help or Want to Order?
          </h2>
          <p className="text-slate-300 mb-6">
            Contact us directly on WhatsApp for quick support and easy ordering.
          </p>

          <Link
            href={`https://wa.me/${storeConfig.whatsappNumber}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-600 transition"
          >
            <MessageCircle />
            Order on WhatsApp
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  )
}
