import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Tallas Inclusivas | OBS Jeans",
  description:
    "En OBS Jeans creemos que la moda es para todos. Tallas del 1 al 25 con el mismo estilo, calidad y precio justo.",
}

export default function TallasInclusivasPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0c0c14" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184,0,73,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="content-container relative z-10 py-24 md:py-36 text-center">
          <span
            className="obs-label-tag inline-block mb-6"
            style={{ color: "#e2165f" }}
          >
            Inclusividad
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Moda Para{" "}
            <span style={{ color: "#e2165f" }}>Todos</span>
          </h1>
          <div
            className="mx-auto w-16 h-[2px] mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
          <p
            className="obs-editorial font-serif italic font-light text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Tallas del 1 al 25, porque creemos que cada cuerpo merece vestir con
            estilo y comodidad.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="content-container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Nuestro Compromiso
          </span>
          <h2
            className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-6"
            style={{ color: "#1a1c1c" }}
          >
            Jeans que se Adaptan a Ti
          </h2>
          <div
            className="w-12 h-[2px] mb-8"
            style={{
              background: "linear-gradient(90deg, #b80049, transparent)",
            }}
          />
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
          >
            <p>
              En OBS Jeans, la inclusividad no es una tendencia — es un principio
              fundamental. Desde nuestros inicios, nos comprometimos a diseñar
              jeans para todos los cuerpos, sin importar la talla.
            </p>
            <p>
              Nuestro rango de tallas va del{" "}
              <strong style={{ color: "#1a1c1c" }}>1 al 25</strong>, abarcando
              desde las tallas más pequeñas hasta las más amplias. Cada talla
              recibe el mismo nivel de atención en diseño, calidad de mezclilla y
              acabados.
            </p>
            <p>
              No creemos en líneas separadas ni en cobrar más por tallas
              grandes. El mismo estilo, la misma calidad y el mismo precio justo
              para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Size Range */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="content-container">
          <div className="text-center mb-16">
            <span
              className="obs-label-tag inline-block mb-4"
              style={{ color: "#b80049" }}
            >
              Rango de Tallas
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-3xl md:text-4xl"
              style={{ color: "#1a1c1c" }}
            >
              Del 1 al 25
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                range: "1 – 9",
                label: "Tallas Pequeñas",
                description:
                  "Diseñadas con proporciones exactas para un ajuste perfecto en tallas petite.",
              },
              {
                range: "10 – 17",
                label: "Tallas Medianas",
                description:
                  "Nuestro rango estándar con múltiples cortes y estilos disponibles.",
              },
              {
                range: "18 – 25",
                label: "Tallas Grandes",
                description:
                  "La misma calidad y variedad de estilos, con patrones adaptados para mayor comodidad.",
              },
            ].map((item) => (
              <div
                key={item.range}
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(228,189,194,0.15)",
                }}
              >
                <span
                  className="obs-editorial font-serif font-bold text-3xl block mb-2"
                  style={{ color: "#b80049" }}
                >
                  {item.range}
                </span>
                <h3
                  className="font-serif font-bold text-lg mb-3"
                  style={{ color: "#1a1c1c" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#805062",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="content-container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Lo Que Nos Hace Diferentes
          </span>
          <h2
            className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-10"
            style={{ color: "#1a1c1c" }}
          >
            Inclusividad Real
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Mismo Precio",
                description:
                  "No cobramos más por tallas grandes. Creemos en precio justo sin importar la talla.",
              },
              {
                title: "Mismos Estilos",
                description:
                  "Todos nuestros modelos — skinny, wide leg, mom, cargo — están disponibles en todas las tallas.",
              },
              {
                title: "Misma Calidad",
                description:
                  "Cada prenda pasa por el mismo proceso de calidad, sin importar si es talla 1 o 25.",
              },
              {
                title: "Directo de Fábrica",
                description:
                  "Al ser fabricantes, controlamos todo el proceso para garantizar el mejor ajuste en cada talla.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                <div
                  className="w-1 flex-shrink-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #b80049, transparent)",
                  }}
                />
                <div>
                  <h3
                    className="font-serif font-bold text-lg mb-2"
                    style={{ color: "#1a1c1c" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#805062",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="content-container">
          <p
            className="obs-editorial font-serif italic font-light text-xl mb-8"
            style={{ color: "#1a1c1c" }}
          >
            Encuentra tu talla perfecta
          </p>
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              boxShadow: "0 12px 32px rgba(184,0,73,0.3)",
            }}
          >
            Ver Catálogo Completo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </LocalizedClientLink>
        </div>
      </section>
    </div>
  )
}
