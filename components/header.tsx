"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { storeConfig } from "@/lib/store-config"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500
        backdrop-blur-xl
        ${isScrolled || isMobileMenuOpen
          ? "bg-background/95 border-b border-border shadow-lg"
          : "bg-gradient-to-b from-background/80 to-background/60"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer z-50 relative"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="
              w-10 h-10 rounded-xl
              bg-gradient-to-br from-sky-400 to-cyan-500
              text-white font-bold flex items-center justify-center
              shadow-md
              transition-all duration-300
              group-hover:scale-110 group-hover:rotate-3
            "
          >
            B
          </div>

          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-base sm:text-lg">
              Bath Club
            </p>
            {storeConfig?.shopTagline && (
              <p className="text-xs text-muted-foreground hidden sm:block">
                {storeConfig.shopTagline}
              </p>
            )}
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {[
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative cursor-pointer
                text-foreground/80
                transition-all duration-300
                hover:text-sky-500
                after:absolute after:-bottom-1 after:left-1/2
                after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-cyan-500
                after:transition-all after:duration-300
                hover:after:w-full hover:after:left-0
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ACTIONS (Desktop Admin + Mobile Toggle) */}
        <div className="flex items-center gap-4">

          {/* DESKTOP ADMIN BTN */}
          <Link
            href="/login"
            className="
              hidden md:block
              cursor-pointer
              rounded-xl px-5 py-2 text-sm font-semibold
              bg-gradient-to-r from-sky-500 to-cyan-500
              text-white
              shadow-md
              transition-all duration-300
              hover:scale-105 hover:shadow-xl
              active:scale-95
            "
          >
            Admin
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-foreground/80 hover:text-sky-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          absolute top-16 right-4 z-40 w-64
          rounded-2xl border border-slate-800 shadow-2xl
          bg-slate-950
          flex flex-col items-start justify-start p-6 gap-6
          transition-all duration-300 ease-in-out origin-top-right
          md:hidden
          ${isMobileMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col items-start gap-4 w-full">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                w-full text-left text-base font-medium
                text-slate-300 hover:text-white
                transition-colors
                border-b border-slate-800/50 pb-2 last:border-0 last:pb-0
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE ADMIN BTN */}
        <Link
          href="/login"
          onClick={() => setIsMobileMenuOpen(false)}
          className="
            w-full text-center py-2.5 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-sky-500 to-cyan-500
            text-white
            shadow-lg
            transition-all duration-300
            hover:scale-105 active:scale-95
          "
        >
          Admin Login
        </Link>
      </div>
    </header>
  )
}
