"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    const ADMIN_PASSWORD = "Raj@BathClub#9274"

    if (password === ADMIN_PASSWORD) {
      document.cookie = "admin=true; path=/; max-age=86400"
      router.push("/admin")
    } else {
      setError("Access denied. Invalid credentials.")
    }
  }

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-[#020617] text-slate-200">

      {/* LEFT – BRAND / AURA */}
      <div className="relative hidden lg:flex flex-col justify-center px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#020617]" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px]" />

        <div className="relative space-y-6 max-w-md">
          <p className="text-xs tracking-widest text-sky-400 uppercase">
            Restricted Area
          </p>

          <h1 className="text-4xl font-semibold leading-tight">
            Administrative <br /> Control Panel
          </h1>

          <p className="text-slate-400 leading-relaxed">
            This section is reserved for authorized administrators only.
            All activities are monitored and logged for security purposes.
          </p>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Secure • Private • Owner Access
          </div>
        </div>
      </div>

      {/* RIGHT – LOGIN PANEL */}
      <div className="relative flex items-center justify-center px-6">

        {/* 🔙 BACK TO HOME */}
        <button
          onClick={() => router.push("/")}
          className="
            absolute top-6 left-6
            flex items-center gap-2
            text-sm text-slate-400
            hover:text-white
            transition
          "
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="w-full max-w-sm space-y-6">

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Admin Login</h2>
            <p className="text-sm text-slate-400">
              Enter your access key to continue
            </p>
          </div>

          <div className="space-y-3">
            <input
              type="password"
              placeholder="Access key"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError("")
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="
                w-full px-4 py-3 rounded-xl
                bg-slate-950 border border-slate-700
                placeholder:text-slate-500
                focus:outline-none focus:border-sky-500
                transition
              "
            />

            {error && (
              <p className="text-xs text-red-400">
                {error}
              </p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl font-semibold
              bg-gradient-to-r from-sky-500 to-cyan-500
              hover:scale-[1.03] active:scale-95
              transition-all
            "
          >
            Enter Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-xs text-slate-500">
            Unauthorized access is strictly prohibited.
          </p>
        </div>
      </div>
    </main>
  )
}
