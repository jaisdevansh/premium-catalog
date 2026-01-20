"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast"

type Product = {
  id: string
  name: string
  price: string
  image: string
}

export default function ProductList({
  products,
  onDelete,
}: {
  products: Product[]
  onDelete: (id: string) => Promise<void> | void
}) {
  const [confirmId, setConfirmId] = useState<string | null>(null)

  const handleDelete = async (id: string, name: string) => {
    const t = toast.loading("Deleting product...")

    try {
      await onDelete(id)
      toast.success(`"${name}" removed`, { id: t })
    } catch {
      toast.error("Failed to delete product", { id: t })
    } finally {
      setConfirmId(null)
    }
  }

  return (
    <section className="relative rounded-2xl bg-[#111117] border border-white/10 p-6 overflow-hidden">
      {/* subtle top glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <h2 className="text-xl font-bold tracking-tight mb-1">
          Existing Products
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Manage, review or remove listed products
        </p>

        {products.length === 0 ? (
          <p className="text-zinc-400">No products yet</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="
                  group relative
                  rounded-2xl overflow-hidden
                  bg-[#0e0e13] border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-white/20 hover:shadow-xl
                "
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* price badge */}
                  <div className="
                    absolute top-3 left-3
                    px-3 py-1 rounded-full text-xs font-semibold
                    bg-linear-to-r from-emerald-500 to-lime-400
                    text-black shadow
                  ">
                    ₹ {p.price}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-2">
                  <p className="font-semibold leading-snug line-clamp-1">
                    {p.name}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex justify-end pt-2">
                    {confirmId === p.id ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDelete(p.id, p.name)}
                          className="
                            px-3 py-1.5 rounded-lg text-xs font-semibold
                            bg-red-500 text-white
                            hover:bg-red-600 transition
                          "
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => setConfirmId(null)}
                          className="
                            px-3 py-1.5 rounded-lg text-xs
                            bg-white/5 text-zinc-400
                            hover:bg-white/10 transition
                          "
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmId(p.id)}
                        className="
                          flex items-center gap-2
                          px-3 py-2 rounded-lg
                          text-red-400
                          bg-red-500/10
                          hover:bg-red-500/20
                          transition
                        "
                      >
                        <Trash2 size={16} />
                        <span className="text-xs font-medium">Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
