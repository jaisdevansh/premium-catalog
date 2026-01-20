export async function uploadToCloudinary(file: File): Promise<string> {
  console.log("📤 uploadToCloudinary called")

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

  console.log("☁️ Cloud:", cloud)
  console.log("🎯 Preset:", preset)

  if (!cloud || !preset) {
    console.error("❌ Cloudinary env missing")
    throw new Error("Cloudinary env missing")
  }

  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", preset)

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
    { method: "POST", body: formData }
  )

  const data = await res.json()
  console.log("📥 Cloudinary response:", data)

  if (!res.ok) {
    console.error("❌ Upload failed")
    throw new Error("Upload failed")
  }

  console.log("✅ Upload success:", data.secure_url)
  return data.secure_url
}
