import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="w-full" style={{ backgroundColor: "#f9f9f9" }}>

      {/* Top ghost border */}
      <div style={{ height: "1px", backgroundColor: "rgba(228,189,194,0.3)" }} />

      {/* Hero band — logo + tagline */}
      <div
        className="w-full py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {/* Floral dot pattern */}
        <div className="absolute inset-0 obs-floral-pattern opacity-50 pointer-events-none" />

        {/* Rose radial glow */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(184,0,73,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10">
          <LocalizedClientLink href="/" className="inline-block">
            <Image
              src="/images/obs-logo-white.png"
              alt="OBS Jeans"
              width={280}
              height={63}
              className="h-14 md:h-18 w-auto object-contain mx-auto"
              style={{ filter: "brightness(0) opacity(0.85)" }}
            />
          </LocalizedClientLink>

          <p
            className="obs-editorial font-serif italic font-light text-xl md:text-2xl mt-5 tracking-wide"
            style={{ color: "#b80049" }}
          >
            Los Más Cómodos Al Mejor Precio
          </p>

          {/* Thin rose accent */}
          <div
            className="mx-auto mt-5 h-px w-12"
            style={{
              background: "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
        </div>
      </div>

      {/* Newsletter Mini-Form */}
      <div
        className="content-container py-10"
        style={{ borderBottom: "1px solid rgba(228,189,194,0.2)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            className="obs-editorial font-serif italic text-lg"
            style={{ color: "#1a1c1c" }}
          >
            Recibe{" "}
            <span style={{ color: "#b80049" }}>ofertas exclusivas</span>
          </p>

          <form className="flex items-end gap-3 w-full sm:w-auto max-w-sm" action="#">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-transparent text-sm outline-none pb-2 pt-1"
                style={{
                  color: "#1a1c1c",
                  fontFamily: "Inter, sans-serif",
                  borderBottom: "1px solid rgba(228,189,194,0.6)",
                }}
              />
            </div>
            <button
              type="submit"
              className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-white transition-opacity duration-200 hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
              }}
              aria-label="Suscribirse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div className="content-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-x-16">

          {/* Categorías */}
          <div className="flex flex-col gap-y-5">
            <span className="obs-label-tag" style={{ color: "#b80049" }}>
              Categorías
            </span>
            {productCategories && productCategories.length > 0 && (
              <ul className="grid grid-cols-1 gap-2.5" data-testid="footer-categories">
                {productCategories.slice(0, 6).map((c) => {
                  if (c.parent_category) return null
                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li className="flex flex-col gap-2 text-sm" key={c.id}>
                      <LocalizedClientLink
                        className={clx(
                          "transition-colors duration-200 hover:text-obs-rose",
                          children && "font-medium"
                        )}
                        style={{
                          color: "#805062",
                          fontFamily: "Inter, sans-serif",
                        }}
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                className="transition-colors duration-200 hover:text-obs-rose text-xs"
                                style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
                                href={`/categories/${child.handle}`}
                                data-testid="category-link"
                              >
                                {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Nosotros */}
          <div className="flex flex-col gap-y-5">
            <span className="obs-label-tag" style={{ color: "#b80049" }}>
              Nosotros
            </span>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {[
                { href: "/about", label: "Nuestra Historia" },
                { href: "/tallas-inclusivas", label: "Tallas Inclusivas" },
                { href: "/mayoreo", label: "Mayoreo" },
              ].map((link) => (
                <li key={link.href}>
                  <LocalizedClientLink
                    href={link.href}
                    className="transition-colors duration-200 hover:text-obs-rose"
                    style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-y-5">
            <span className="obs-label-tag" style={{ color: "#b80049" }}>
              Contacto
            </span>
            <ul
              className="grid grid-cols-1 gap-3 text-sm"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            >
              <li className="leading-relaxed">
                Av. San Rafael 721
                <br />
                Guadalajara, Jalisco
              </li>
              <li>
                <a
                  href="tel:+523336394298"
                  className="transition-colors duration-200 hover:text-obs-rose"
                  style={{ color: "#805062" }}
                >
                  Tel: 33 3639 4298
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/523336394298"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity duration-200 hover:opacity-70 inline-flex items-center gap-1.5"
                  style={{ color: "#b80049" }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="leading-relaxed">
                Lun – Vie: 10:00 – 18:00
                <br />
                Sáb: 9:30 – 15:00
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div className="flex flex-col gap-y-5">
            <span className="obs-label-tag" style={{ color: "#b80049" }}>
              Síguenos
            </span>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              {[
                { href: "https://instagram.com/obsjeans", label: "Instagram" },
                { href: "https://facebook.com/obsjeans", label: "Facebook" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-obs-rose"
                    style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="content-container">
        <div style={{ height: "1px", backgroundColor: "rgba(228,189,194,0.25)" }} />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Text
            className="text-xs"
            style={{ color: "rgba(128,80,98,0.55)", fontFamily: "Inter, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} OBS Jeans SA de CV &middot; Hecho en
            Jalisco, México
          </Text>
          <div className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#b80049" }}
            />
            <span
              className="text-xs"
              style={{ color: "rgba(128,80,98,0.45)", fontFamily: "Inter, sans-serif" }}
            >
              Diseñado con amor ✦
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
