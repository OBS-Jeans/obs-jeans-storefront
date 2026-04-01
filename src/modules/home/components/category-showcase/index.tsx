import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ScrollReveal from "@modules/common/components/scroll-reveal"

const categories = [
  {
    name: "Damas",
    tagline: "Cortes Exclusivos",
    href: "/store",
    bg: "linear-gradient(160deg, #f9f9f9 0%, #f3f3f3 40%, rgba(228,189,194,0.35) 100%)",
    accentColor: "#b80049",
    span: "md:col-span-2 md:row-span-2",
    headingSize: "text-[3.5rem] md:text-[5rem]",
  },
  {
    name: "Hombre",
    tagline: "Estilo Urbano",
    href: "/store",
    bg: "linear-gradient(160deg, #f3f3f3 0%, rgba(26,28,28,0.05) 100%)",
    accentColor: "#1a1c1c",
    span: "md:col-span-1 md:row-span-1",
    headingSize: "text-[2.8rem] md:text-[3.5rem]",
  },
  {
    name: "Niñas",
    tagline: "Colores Vivos",
    href: "/store",
    bg: "linear-gradient(160deg, #f3f3f3 0%, rgba(184,0,73,0.08) 100%)",
    accentColor: "#e2165f",
    span: "md:col-span-1 md:row-span-1",
    headingSize: "text-[2.8rem] md:text-[3.5rem]",
  },
]

const CategoryShowcase = () => {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="content-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <span
                className="obs-label-tag block mb-3"
                style={{ color: "#b80049" }}
              >
                Nuestras Categorías
              </span>
              <h2
                className="obs-editorial font-serif font-bold text-[2.8rem] md:text-5xl leading-tight"
                style={{ color: "#1a1c1c" }}
              >
                Explora la{" "}
                <em
                  className="italic font-light"
                  style={{ color: "#b80049" }}
                >
                  colección
                </em>
              </h2>
            </div>
            <LocalizedClientLink
              href="/store"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-colors duration-300"
              style={{
                color: "#805062",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Ver todo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </LocalizedClientLink>
          </div>
        </ScrollReveal>

        {/* Editorial bento grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:min-h-[640px]">
            {categories.map((cat) => (
              <LocalizedClientLink
                key={cat.name}
                href={cat.href}
                className={`group relative overflow-hidden rounded-2xl min-h-[280px] ${cat.span}`}
                style={{ background: cat.bg }}
              >
                {/* Ambient shadow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at bottom right, ${cat.accentColor}15 0%, transparent 65%)`,
                  }}
                />

                {/* Signature Editorial Look overlay — backdrop-blur headline */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">

                  {/* Floating editorial text block — the signature component */}
                  <div
                    className="inline-block self-start obs-glass rounded-xl px-5 py-4 transition-transform duration-500 group-hover:-translate-y-2"
                    style={{
                      border: "1px solid rgba(228,189,194,0.2)",
                      boxShadow: "0 20px 40px rgba(128,80,98,0.07)",
                    }}
                  >
                    <span
                      className="obs-label-tag block mb-1"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.tagline}
                    </span>
                    <h3
                      className={`obs-editorial font-serif font-bold ${cat.headingSize} leading-none`}
                      style={{ color: "#1a1c1c", letterSpacing: "-0.02em" }}
                    >
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className="h-px flex-1 max-w-[32px] transition-all duration-500 group-hover:max-w-[48px]"
                        style={{
                          background: `linear-gradient(90deg, ${cat.accentColor}, transparent)`,
                        }}
                      />
                      <span
                        className="text-xs transition-all duration-300 group-hover:opacity-100 opacity-0"
                        style={{
                          color: cat.accentColor,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Ver colección →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-5 right-5 w-8 h-8 rounded-full opacity-20"
                  style={{ backgroundColor: cat.accentColor }}
                />
              </LocalizedClientLink>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CategoryShowcase
