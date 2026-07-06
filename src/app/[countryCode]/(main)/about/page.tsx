import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nosotros | OBS Jeans",
  description:
    "Conoce la historia de OBS Jeans. Más de 15 años fabricando jeans de alta calidad en Guadalajara, Jalisco, México.",
}

export default function AboutPage() {
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
            Nuestra Historia
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Del Corazón de{" "}
            <span style={{ color: "#e2165f" }}>Jalisco</span>
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
            Más de 15 años creando los jeans más cómodos al mejor precio,
            directamente desde nuestra fábrica en Guadalajara.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="content-container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="obs-label-tag inline-block mb-4"
              style={{ color: "#b80049" }}
            >
              Quiénes Somos
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-6"
              style={{ color: "#1a1c1c" }}
            >
              Fabricantes de Jeans con Pasión
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
                OBS Jeans nació en el corazón de Guadalajara, Jalisco, con una
                misión clara: ofrecer jeans de alta calidad a precios accesibles,
                eliminando intermediarios y llevando nuestros productos
                directamente de fábrica a tu armario.
              </p>
              <p>
                Con más de 15 años de experiencia en la industria textil, hemos
                perfeccionado cada paso del proceso — desde la selección de la
                mejor mezclilla hasta el acabado final — para garantizar que cada
                par de jeans combine comodidad, durabilidad y estilo.
              </p>
              <p>
                Nuestra fábrica en Guadalajara nos permite mantener un control
                total sobre la calidad, mientras que nuestro modelo directo al
                consumidor asegura los mejores precios del mercado.
              </p>
            </div>
          </div>

          <div
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 40px 80px rgba(128, 80, 98, 0.08)",
            }}
          >
            <Image
              src="/images/obs-collection-flatlay.png"
              alt="Colección OBS Jeans"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros Valores
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-3xl md:text-4xl"
              style={{ color: "#1a1c1c" }}
            >
              Lo Que Nos Define
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Calidad",
                description:
                  "Mezclilla premium seleccionada cuidadosamente para garantizar durabilidad y comodidad en cada prenda.",
              },
              {
                title: "Precio Justo",
                description:
                  "Al ser fabricantes directos, eliminamos intermediarios y ofrecemos los mejores precios del mercado.",
              },
              {
                title: "Inclusividad",
                description:
                  "Tallas del 1 al 25 porque creemos que la moda debe ser para todos, sin excepción.",
              },
              {
                title: "Hecho en México",
                description:
                  "Orgullosamente fabricados en Guadalajara, Jalisco, apoyando la industria textil mexicana.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(228,189,194,0.15)",
                }}
              >
                <h3
                  className="obs-editorial font-serif font-bold text-xl mb-3"
                  style={{ color: "#1a1c1c" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#805062",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="content-container py-20 md:py-28">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { value: "15+", label: "Años de Experiencia" },
            { value: "156+", label: "Modelos Disponibles" },
            { value: "1–25", label: "Rango de Tallas" },
            { value: "2", label: "Líneas: Classic & Trendy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="obs-editorial font-serif font-bold text-4xl md:text-5xl block"
                style={{ color: "#b80049" }}
              >
                {stat.value}
              </span>
              <p
                className="obs-label-tag mt-3"
                style={{ color: "#805062" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
