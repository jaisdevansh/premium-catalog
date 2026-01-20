import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bath Club - Premium Sanitary Products",
  description:
    "Discover premium sanitary and bathroom solutions. Order directly on WhatsApp.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0d0d0d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          font-sans antialiased
          bg-background text-foreground
        `}
      >
        {children}

        {/* 🌍 GLOBAL TOAST */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#0b0b0f",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            },
            success: {
              iconTheme: {
                primary: "#34d399", // emerald
                secondary: "#0b0b0f",
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171", // red
                secondary: "#0b0b0f",
              },
            },
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
