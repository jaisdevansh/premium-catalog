import { supabase } from "./supabase"

/* ✅ Centralised type for adding product */
export type AddProductInput = {
  name: string
  price: string
  description: string
  image: string

  // OPTIONAL FIELDS (Supabase-friendly)
  material?: string | null
  availability?: string | null
  delivery?: string | null
  crafted?: string | null
  rating?: number | null
  features?: string | null
}

/* -----------------------------
   ADD PRODUCT
------------------------------ */
export async function addProductToDB(product: AddProductInput) {
  console.log("📤 addProductToDB called")
  console.log("📦 Payload:", product)

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        ...product,
        material: product.material ?? null,
        availability: product.availability ?? null,
        delivery: product.delivery ?? null,
        crafted: product.crafted ?? null,
        rating: product.rating ?? null,
        features: product.features ?? null,
      },
    ])
    .select()

  if (error) {
    console.error("❌ INSERT ERROR:", error)
    throw error
  }

  console.log("✅ INSERT SUCCESS:", data)
  return data
}

/* -----------------------------
   FETCH PRODUCTS
------------------------------ */
export async function fetchProductsFromDB() {
  console.log("📥 fetchProductsFromDB called")

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("❌ FETCH ERROR:", error)
    throw error
  }

  console.log("✅ FETCH SUCCESS:", data)
  return data || []
}

/* -----------------------------
   DELETE PRODUCT  ✅ (NEW)
------------------------------ */
export async function deleteProductFromDB(productId: string) {
  console.log("🗑️ deleteProductFromDB called:", productId)

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId)

  if (error) {
    console.error("❌ DELETE ERROR:", error)
    throw error
  }

  console.log("✅ DELETE SUCCESS:", productId)
}
