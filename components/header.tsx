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

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed top-16 left-0 right-0 bottom-0 z-40
          bg-slate-950
          flex flex-col items-center justify-start pt-10 gap-8
          transition-all duration-500 ease-in-out
          md:hidden
          ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`
                relative px-4 py-2
                text-foreground/80 hover:text-sky-400
                transition-all duration-300
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE ADMIN BTN */}
        <Link
          href="/login"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`
            px-8 py-3 rounded-xl text-lg font-semibold
            bg-gradient-to-r from-sky-500 to-cyan-500
            text-white
            shadow-lg
            transition-all duration-500 delay-300
            hover:scale-105
            ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          Admin Login
        </Link>
      </div>
    </header>
  )
}
