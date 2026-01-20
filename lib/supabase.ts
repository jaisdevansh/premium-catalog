import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log("🔗 Supabase URL:", supabaseUrl)
console.log("🔑 Supabase Anon Key present:", !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Supabase ENV missing")
  throw new Error("Supabase env missing")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log("✅ Supabase client created")
