// Admin-controlled store branding data
// (Later this can also come from Supabase if needed)
export const storeConfig = {
  shopName: "BATH CLUB",
  shopTagline: "Premium Sanitary & Bathroom Solutions",
  shopDescription:
    "Discover our exclusive collection of premium sanitary ware and bathroom fixtures designed for modern comfort and elegance. Quality, durability, and style in every product.",
  whatsappNumber: "919876543210", // country code + number (no +, no spaces)
}

/**
 * Product TYPE ONLY
 * ❌ No mock data
 * ✅ Real data comes from Supabase
 */
export type Product = {
  id: string
  name: string
  price: string
  description: string
  image: string
  material: string
  availability: string
  delivery: string
  crafted: string
  rating: number
  features: string
  created_at?: string
}
