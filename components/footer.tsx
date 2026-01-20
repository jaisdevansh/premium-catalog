import { storeConfig } from "@/lib/store-config"
import { MessageCircle, Clock, Shield, Sparkles } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="
        relative overflow-hidden text-slate-200
        bg-linear-to-br from-slate-950 via-slate-900 to-[#020617]
      "
    >
      {/* hero → footer blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-slate-950 pointer-events-none" />

      {/* ambient glow (same palette as hero) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-b border-slate-800 fade-up">
          {[
            { icon: MessageCircle, title: "WhatsApp Ordering", desc: "Fast & direct" },
            { icon: Clock, title: "Quick Dispatch", desc: "Timely delivery" },
            { icon: Shield, title: "Trusted Quality", desc: "Reliable products" },
            { icon: Sparkles, title: "Premium Finish", desc: "Built to last" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="
                  fade-up
                  group p-4 rounded-xl
                  border border-slate-800 bg-slate-900/40
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-slate-900 hover:border-slate-700
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      p-3 rounded-lg
                      bg-sky-500/10 text-sky-400
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-white transition">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">

          {/* BRAND */}
          <div className="fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold mb-3 hover:tracking-wide transition-all">
              {storeConfig.shopName}
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {storeConfig.shopTagline}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {storeConfig.shopDescription}
            </p>
          </div>

          {/* LINKS */}
          <div className="fade-up" style={{ animationDelay: "200ms" }}>
            <p className="text-sm font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="fade-up" style={{ animationDelay: "300ms" }}>
            <p className="text-sm font-semibold mb-4">Connect</p>
            <p className="text-sm text-slate-400 mb-4">
              Orders & enquiries on WhatsApp.
            </p>

            <a
              href="https://wa.me/919335365885"
              target="_blank"
              className="
                inline-flex items-center gap-3 px-5 py-3 rounded-xl
                bg-[#25D366]/10 text-[#25D366]
                transition-all duration-300
                hover:bg-[#25D366]/20 hover:scale-[1.03]
              "
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="fade-down border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {storeConfig.shopName}
          </p>
          <p className="italic tracking-wide text-slate-600">
            Built with care, not templates.
          </p>
        </div>
      </div>
    </footer>
  )
}
