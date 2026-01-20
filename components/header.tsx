"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { storeConfig } from "@/lib/store-config"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500
        backdrop-blur-xl
        ${isScrolled
          ? "bg-background/95 border-b border-border shadow-lg"
          : "bg-linear-to-b from-background/80 to-background/60"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div
            className="
              w-10 h-10 rounded-xl
              bg-linear-to-br from-sky-400 to-cyan-500
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
              <p className="text-xs text-muted-foreground">
                {storeConfig.shopTagline}
              </p>
            )}
          </div>
        </Link>

        {/* NAV */}
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
                after:h-[2px] after:w-0 after:bg-linear-to-r after:from-sky-400 after:to-cyan-500
                after:transition-all after:duration-300
                hover:after:w-full hover:after:left-0
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ADMIN CTA */}
        <Link
          href="/login"
          className="
            cursor-pointer
            rounded-xl px-5 py-2 text-sm font-semibold
            bg-linear-to-r from-sky-500 to-cyan-500
            text-white
            shadow-md
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
            active:scale-95
          "
        >
          Admin
        </Link>
      </div>
    </header>
  )
}
