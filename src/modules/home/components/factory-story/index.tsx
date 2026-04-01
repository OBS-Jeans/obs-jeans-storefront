import ScrollReveal from "@modules/common/components/scroll-reveal"
import AnimatedCounter from "@modules/common/components/animated-counter"

const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "156+", label: "Modelos Disponibles" },
  { number: "1-25", label: "Tallas Inclusivas" },
]

const FactoryStory = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left — editorial text on light surface */}
      <div
        className="flex-1 flex items-center"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <ScrollReveal direction="left">
          <div className="max-w-lg px-8 md:px-16 lg:px-20 py-20 md:py-0">
            {/* Eyebrow */}
            <span
              className="obs-label-tag block mb-5"
              style={{ color: "#b80049" }}
            >
              Nuestra Historia
            </span>

            {/* Heading — Noto Serif editorial */}
            <h2
              className="obs-editorial font-serif font-bold text-[2.6rem] lg:text-[3.5rem] leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              Del Corazón de{" "}
              <em
                className="italic font-light"
                style={{ color: "#b80049" }}
              >
                Jalisco
              </em>{" "}
              a Tu Guardarropa
            </h2>

            {/* Body */}
            <p
              className="text-sm leading-[1.85] mt-7 max-w-sm"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            >
              Desde nuestra fábrica en Guadalajara, creamos jeans que
              combinan la tradición artesanal mexicana con tecnología
              moderna. Cada par es confeccionado con dedicación, ofreciendo
              comodidad sin igual a un precio justo — porque creemos que
              la calidad no debería ser un lujo.
            </p>

            {/* Stats */}
            <div
              className="flex gap-10 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(228,189,194,0.3)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <AnimatedCounter
                    target={stat.number}
                    className="obs-editorial font-serif font-bold text-3xl text-obs-rose"
                  />
                  <span
                    className="obs-label-tag mt-1"
                    style={{ color: "#805062" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right — floral denim editorial composition */}
      <ScrollReveal direction="right" delay={0.3}>
        <div
          className="flex-1 relative overflow-hidden min-h-[360px] md:min-h-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(160deg, #f3f3f3 0%, rgba(228,189,194,0.3) 50%, rgba(184,0,73,0.12) 100%)",
          }}
        >
          {/* Floral dot pattern */}
          <div className="absolute inset-0 obs-floral-pattern opacity-60" />

          {/* Large serif OBS watermark */}
          <span
            className="obs-editorial font-serif font-bold select-none leading-none"
            style={{
              fontSize: "clamp(10rem, 18vw, 18rem)",
              color: "rgba(184,0,73,0.06)",
              letterSpacing: "-0.04em",
            }}
          >
            OBS
          </span>

          {/* Floating editorial card */}
          <div
            className="obs-glass obs-ambient-shadow absolute bottom-10 left-8 rounded-2xl p-6 max-w-[220px]"
            style={{ border: "1px solid rgba(228,189,194,0.3)" }}
          >
            <span
              className="obs-label-tag block"
              style={{ color: "#b80049" }}
            >
              Hecho en México
            </span>
            <p
              className="obs-editorial font-serif font-bold text-2xl mt-2 leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              Guadalajara,<br />Jalisco
            </p>
            <div
              className="w-6 h-0.5 mt-4"
              style={{
                background: "linear-gradient(90deg, #b80049, #e2165f)",
              }}
            />
          </div>

          {/* Rose circle accent */}
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(184,0,73,0.12) 0%, transparent 70%)",
            }}
          />
        </div>
      </ScrollReveal>
    </section>
  )
}

export default FactoryStory
