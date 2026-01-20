"use client"

import { useState } from "react"
import { Upload, Image as ImageIcon, ChevronDown, Sparkles } from "lucide-react"
import toast from "react-hot-toast"
import { addProductToDB } from "@/lib/db-products"
import { uploadToCloudinary } from "@/lib/cloudinary"

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    material: "",
    availability: "",
    delivery: "",
    crafted: "",
    rating: "",
    features: "",
  })

  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showOptional, setShowOptional] = useState(false)

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageUpload = async (file: File) => {
    const t = toast.loading("Uploading image...")
    setUploading(true)

    try {
      const url = await uploadToCloudinary(file)
      setForm((p) => ({ ...p, image: url }))
      toast.success("Image uploaded", { id: t })
    } catch {
      toast.error("Image upload failed", { id: t })
    } finally {
      setUploading(false)
    }
  }

  /* ---------------- SUBMIT ---------------- */
  const submit = async () => {
    if (!form.name || !form.price || !form.image) {
      toast.error("Please fill all required fields")
      return
    }

    const t = toast.loading("Publishing product...")
    setSubmitting(true)

    try {
      await addProductToDB({
        ...form,
        rating: form.rating ? Number(form.rating) : null,
        material: form.material || null,
        availability: form.availability || null,
        delivery: form.delivery || null,
        crafted: form.crafted || null,
        features: form.features || null,
      })

      toast.success("Product published successfully", { id: t })

      setForm({
        name: "",
        price: "",
        description: "",
        image: "",
        material: "",
        availability: "",
        delivery: "",
        crafted: "",
        rating: "",
        features: "",
      })
    } catch {
      toast.error("Failed to add product", { id: t })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative rounded-2xl bg-[#111117] border border-white/10 overflow-hidden">
      {/* top glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="relative px-8 py-6 border-b border-white/10">
        <h2 className="text-2xl font-bold tracking-tight">
          Add New Product
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Fill product details carefully before publishing
        </p>
      </div>

      {/* FORM */}
      <div className="relative p-8 space-y-10">

        {/* BASIC INFO */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-widest text-zinc-300 uppercase">
            Basic Information
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="admin-input font-semibold"
              placeholder="Product name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="admin-input font-semibold"
              placeholder="Price *"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>
        </section>

        {/* IMAGE */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold tracking-widest text-zinc-300 uppercase">
            Product Image
          </h3>

          <div className="rounded-2xl border border-dashed border-white/20 p-6 text-center bg-[#0e0e13] hover:border-emerald-500/40 transition">
            {!form.image ? (
              <>
                <Upload className="mx-auto mb-3 text-emerald-400" />
                <p className="text-sm text-zinc-400 mb-4">
                  Upload a high quality product image
                </p>

                <label className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 font-semibold cursor-pointer hover:bg-emerald-500/20 transition">
                  <ImageIcon size={18} />
                  {uploading ? "Uploading…" : "Choose Image"}
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files && handleImageUpload(e.target.files[0])
                    }
                  />
                </label>
              </>
            ) : (
              <img
                src={form.image}
                className="w-full h-56 object-cover rounded-xl hover:scale-[1.02] transition"
              />
            )}
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold tracking-widest text-zinc-300 uppercase">
            Description
          </h3>

          <textarea
            className="admin-input resize-none"
            rows={4}
            placeholder="Describe the product, usage, quality, finish..."
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </section>

        {/* OPTIONAL */}
        <section className="border-t border-white/10 pt-6 space-y-4">
          <button
            onClick={() => setShowOptional(!showOptional)}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Advanced Product Details
            <ChevronDown
              className={`transition ${showOptional ? "rotate-180" : ""}`}
              size={16}
            />
          </button>

          {showOptional && (
            <div className="grid sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
              <input className="admin-input" placeholder="Material"
                value={form.material}
                onChange={(e) => setForm({ ...form, material: e.target.value })}
              />
              <input className="admin-input" placeholder="Availability"
                value={form.availability}
                onChange={(e) => setForm({ ...form, availability: e.target.value })}
              />
              <input className="admin-input" placeholder="Delivery time"
                value={form.delivery}
                onChange={(e) => setForm({ ...form, delivery: e.target.value })}
              />
              <input className="admin-input" placeholder="Crafted by / Origin"
                value={form.crafted}
                onChange={(e) => setForm({ ...form, crafted: e.target.value })}
              />
            </div>
          )}
        </section>

        {/* SUBMIT */}
        <button
          onClick={submit}
          disabled={submitting}
          className="w-full py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-lime-400 text-black font-extrabold tracking-wide hover:scale-[1.02] hover:shadow-xl transition active:scale-95"
        >
          {submitting ? "Publishing…" : "Publish Product"}
        </button>
      </div>
    </section>
  )
}
