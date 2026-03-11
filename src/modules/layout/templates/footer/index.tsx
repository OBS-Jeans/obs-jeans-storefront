import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full" style={{ backgroundColor: "#1C1917" }}>
      {/* Top Section: Logo + Tagline */}
      <div className="w-full py-16 text-center">
        <LocalizedClientLink href="/" className="inline-block">
          <Image
            src="/images/obs-logo-white.png"
            alt="OBS Jeans"
            width={280}
            height={63}
            className="h-16 md:h-20 w-auto object-contain mx-auto"
          />
        </LocalizedClientLink>
        <p
          className="font-serif italic text-lg md:text-xl mt-4 tracking-wide"
          style={{ color: "#FAF8F5" }}
        >
          Los Más Cómodos Al Mejor Precio
        </p>
      </div>

      {/* Newsletter Mini-Form */}
      <div className="content-container mb-12">
        <div className="text-center">
          <p className="font-display text-sm text-obs-cream/80 mb-3">
            Recibe ofertas exclusivas
          </p>
          <form className="inline-flex items-end" action="#">
            <input
              type="email"
              placeholder="tu@email.com"
              className="bg-transparent border-b border-obs-warm/30 text-obs-cream text-sm pb-2 w-48 outline-none focus:border-obs-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="text-obs-gold ml-2 text-lg hover:opacity-80 transition-opacity duration-200"
            >
              &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Middle Section: 4-Column Grid */}
      <div className="content-container pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-x-16">
          {/* Column 1: Categorías */}
          <div className="flex flex-col gap-y-4">
            <span
              className="font-display text-sm font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#D4A853" }}
            >
              Categorías
            </span>
            {productCategories && productCategories?.length > 0 && (
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                {productCategories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li
                      className="flex flex-col gap-2 text-sm"
                      key={c.id}
                    >
                      <LocalizedClientLink
                        className={clx(
                          "transition-colors duration-200 hover:[color:#D4A853]",
                          children && "font-medium"
                        )}
                        style={{ color: "#78716C" }}
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="transition-colors duration-200 hover:[color:#D4A853]"
                                  style={{ color: "#78716C" }}
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

          {/* Column 2: Nosotros */}
          <div className="flex flex-col gap-y-4">
            <span
              className="font-display text-sm font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#D4A853" }}
            >
              Nosotros
            </span>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <LocalizedClientLink
                  href="/about"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Nuestra Historia
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/tallas-inclusivas"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Tallas Inclusivas
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/mayoreo"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Mayoreo
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div className="flex flex-col gap-y-4">
            <span
              className="font-display text-sm font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#D4A853" }}
            >
              Contacto
            </span>
            <ul className="grid grid-cols-1 gap-3 text-sm" style={{ color: "#78716C" }}>
              <li className="leading-relaxed">
                Av. San Rafael 721
                <br />
                Guadalajara, Jalisco
              </li>
              <li>
                <a
                  href="tel:+523336394298"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Tel: 33 3639 4298
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/523336394298"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "#D4A853" }}
                >
                  Escríbenos por WhatsApp
                </a>
              </li>
              <li className="leading-relaxed">
                Lun - Vie: 10:00 - 18:00
                <br />
                Sáb: 9:30 - 15:00
              </li>
            </ul>
          </div>

          {/* Column 4: Síguenos */}
          <div className="flex flex-col gap-y-4">
            <span
              className="font-display text-sm font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#D4A853" }}
            >
              Síguenos
            </span>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/obsjeans"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/obsjeans"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:[color:#D4A853]"
                  style={{ color: "#78716C" }}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="content-container">
        <div className="obs-stitch-divider" />
        <div className="py-6 text-center">
          <Text
            className="text-xs tracking-wide"
            style={{ color: "#78716C" }}
          >
            &copy; {new Date().getFullYear()} OBS Jeans SA de CV &middot; Hecho
            en Jalisco, México
          </Text>
        </div>
      </div>
    </footer>
  )
}
