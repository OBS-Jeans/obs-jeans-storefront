"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const BrandVideo = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0.4, 0.15])

  return (
    <section
      ref={sectionRef}
      className="relative bg-obs-charcoal overflow-hidden"
    >
      {/* Desktop: asymmetric split — Mobile: stacked */}
      <div className="flex flex-col small:flex-row small:items-stretch min-h-[70vh] small:min-h-[85vh]">
        {/* Left: Video */}
        <motion.div
          className="relative w-full small:w-[45%] h-[60vh] small:h-auto overflow-hidden"
          style={{ scale: videoScale }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/obs-wash-cycle.mp4" type="video/mp4" />
          </video>

          {/* Video overlay gradient — fades into the dark right side */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-obs-charcoal/90 hidden small:block"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obs-charcoal via-transparent to-transparent small:hidden" />

          {/* Corner accent on video */}
          <div className="absolute top-6 left-6 w-14 h-14 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-obs-gold/50" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-obs-gold/50" />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="relative flex-1 flex items-center justify-center small:justify-start px-8 small:px-16 py-16 small:py-0">
          {/* Decorative vertical line */}
          <div className="absolute left-0 top-[15%] bottom-[15%] w-[1px] bg-obs-gold/20 hidden small:block" />

          <motion.div
            className="max-w-md"
            style={{ y: textY }}
          >
            {/* Eyebrow */}
            <motion.span
              className="inline-block font-display text-[10px] uppercase tracking-[0.35em] text-obs-gold/70 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Calidad Comprobada
            </motion.span>

            {/* Main headline */}
            <motion.h2
              className="font-display text-4xl small:text-5xl medium:text-6xl font-bold text-obs-cream leading-[0.95] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hechos Para
              <br />
              <span className="text-obs-gold">Resistir</span>
            </motion.h2>

            {/* Gold rule */}
            <motion.div
              className="w-16 h-[2px] bg-obs-gold mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />

            {/* Body copy */}
            <motion.p
              className="font-serif italic text-obs-stone text-base small:text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Nuestra mezclilla pasa por rigurosas pruebas de lavado
              y resistencia. Cada prenda est&aacute; dise&ntilde;ada para
              mantener su forma, color y comodidad lavada tras lavada.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="font-display text-3xl font-bold text-obs-gold">
                  50+
                </span>
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-obs-cream/50 mt-1">
                  Ciclos de lavado
                </p>
              </div>
              <div className="w-[1px] bg-obs-warm/30" />
              <div>
                <span className="font-display text-3xl font-bold text-obs-gold">
                  100%
                </span>
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-obs-cream/50 mt-1">
                  Color intacto
                </p>
              </div>
              <div className="w-[1px] bg-obs-warm/30" />
              <div>
                <span className="font-display text-3xl font-bold text-obs-gold">
                  0%
                </span>
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-obs-cream/50 mt-1">
                  Encogimiento
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <LocalizedClientLink
                href="/store"
                className="inline-block border border-obs-gold text-obs-gold font-display text-xs uppercase tracking-[0.2em] px-8 py-3 hover:bg-obs-gold hover:text-obs-charcoal transition-all duration-300"
              >
                Comprar Ahora
              </LocalizedClientLink>
            </motion.div>
          </motion.div>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-6 right-6 w-14 h-14 pointer-events-none hidden small:block">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-obs-gold/30" />
            <div className="absolute bottom-0 right-0 h-full w-[1px] bg-obs-gold/30" />
          </div>
        </div>
      </div>

      {/* Bottom stitch divider */}
      <div className="obs-stitch-divider" />
    </section>
  )
}

export default BrandVideo
