"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import ProductForm from "@/components/admin/product-form"
import ProductList from "@/components/admin/product-list"
import { deleteProductFromDB } from "@/lib/db-products"
import { LogOut, Package } from "lucide-react"
import toast from "react-hot-toast"

type Product = {
  id: string
  name: string
  price: string
  image: string
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    supabase
      .from("products")
      .select("id, name, price, image")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          toast.error("Failed to load products")
        } else if (data) {
          setProducts(data)
        }
        setLoading(false)
      })
  }, [])

  /* ---------------- DELETE PRODUCT ---------------- */
  const deleteProduct = async (id: string) => {
    const t = toast.loading("Deleting product...")

    try {
      await deleteProductFromDB(id)
      setProducts((p) => p.filter((x) => x.id !== id))
      toast.success("Product deleted", { id: t })
    } catch {
      toast.error("Failed to delete product", { id: t })
    }
  }

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    toast.success("Logged out successfully")
    document.cookie = "admin=; path=/; max-age=0"
    setTimeout(() => {
      window.location.href = "/login"
    }, 800)
  }

  return (
    <main className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-12 space-y-12">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-zinc-400 mt-1">
              Manage products visible to customers
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111117] border border-white/10">
              <Package className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-xs text-zinc-400">Total Products</p>
                <p className="text-lg font-bold">
                  {loading ? "…" : products.length}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="
                inline-flex items-center gap-2
                px-4 py-3 rounded-xl
                bg-red-500/10 text-red-400
                hover:bg-red-500/20
                transition font-semibold
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </header>

        {/* ADD PRODUCT */}
        <section className="animate-in fade-in slide-in-from-bottom-4">
          <ProductForm />
        </section>

        {/* PRODUCT LIST */}
        <section className="animate-in fade-in slide-in-from-bottom-6">
          <ProductList
            products={products}
            onDelete={deleteProduct}
          />
        </section>

      </div>
    </main>
  )
}
