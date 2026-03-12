import ScrollReveal from "@modules/common/components/scroll-reveal"
import AnimatedCounter from "@modules/common/components/animated-counter"

const stats = [
  { number: "15+", label: "Anos de Experiencia" },
  { number: "156+", label: "Modelos Disponibles" },
  { number: "1-25", label: "Tallas Inclusivas" },
]

const FactoryStory = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left half — text content */}
      <div className="flex-1 bg-obs-charcoal flex items-center">
        <ScrollReveal direction="left">
        <div className="max-w-lg px-8 md:px-12 py-16 md:py-0">
          {/* Eyebrow */}
          <span className="text-obs-gold text-xs tracking-[0.3em] font-display uppercase">
            NUESTRA HISTORIA
          </span>

          {/* Heading */}
          <h2 className="text-obs-cream font-display text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Del Coraz&oacute;n de Jalisco a Tu Guardarropa
          </h2>

          {/* Body */}
          <p className="text-obs-stone font-serif text-base leading-relaxed mt-6">
            Desde nuestra f&aacute;brica en Guadalajara, creamos jeans que
            combinan la tradici&oacute;n artesanal mexicana con
            tecnolog&iacute;a moderna. Cada par es confeccionado con
            dedicaci&oacute;n, ofreciendo comodidad sin igual a un precio justo
            &mdash; porque creemos que la calidad no deber&iacute;a ser un lujo.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <AnimatedCounter target={stat.number} className="font-display text-3xl font-bold text-obs-gold" />
                <span className="text-xs text-obs-stone uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* Right half — denim texture pattern */}
      <ScrollReveal direction="right" delay={0.3}>
      <div
        className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-0 flex items-center justify-center"
        style={{
          backgroundColor: "#1E3A5F",
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.03) 8px,
              rgba(255,255,255,0.03) 9px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.02) 8px,
              rgba(255,255,255,0.02) 9px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.01) 3px,
              rgba(255,255,255,0.01) 4px
            )
          `,
        }}
      >
        {/* Large OBS watermark */}
        <span className="font-display text-[12rem] font-bold text-white/5 select-none leading-none">
          OBS
        </span>

        {/* Gold diagonal stripe — bottom-right corner */}
        <div
          className="absolute -bottom-12 -right-12 w-[200px] h-[60px] bg-obs-gold/10"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>
      </ScrollReveal>
    </section>
  )
}

export default FactoryStory
