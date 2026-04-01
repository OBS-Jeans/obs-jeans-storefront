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
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      {/* Floral dot pattern */}
      <div className="absolute inset-0 obs-floral-pattern opacity-40 pointer-events-none" />

      {/* Rose radial glow from right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(184,0,73,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="flex flex-col small:flex-row small:items-stretch min-h-[70vh] small:min-h-[85vh]">
        {/* Left: Video */}
        <motion.div
          className="relative w-full small:w-[52%] h-[60vh] small:h-auto overflow-hidden"
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

          {/* Soft fade edge into light bg */}
          <div
            className="absolute inset-0 hidden small:block"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, rgba(243,243,243,0.9) 100%)",
            }}
          />
          <div
            className="absolute inset-0 small:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 70%, rgba(243,243,243,0.95) 100%)",
            }}
          />

          {/* Rose corner accent */}
          <div className="absolute top-6 left-6 w-12 h-12 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-[1px]"
              style={{ backgroundColor: "rgba(184,0,73,0.4)" }}
            />
            <div
              className="absolute top-0 left-0 h-full w-[1px]"
              style={{ backgroundColor: "rgba(184,0,73,0.4)" }}
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="relative flex-1 flex items-center justify-center small:justify-start px-8 small:px-14 py-16 small:py-0">
          {/* Decorative vertical line */}
          <div
            className="absolute left-0 top-[15%] bottom-[15%] w-[1px] hidden small:block"
            style={{ backgroundColor: "rgba(228,189,194,0.35)" }}
          />

          <motion.div className="max-w-md relative z-10" style={{ y: textY }}>
            {/* Eyebrow label */}
            <motion.span
              className="obs-label-tag inline-block mb-6"
              style={{ color: "#b80049" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Calidad Comprobada
            </motion.span>

            {/* Main headline */}
            <motion.h2
              className="obs-editorial font-serif font-bold text-4xl small:text-5xl medium:text-6xl leading-[0.95] tracking-tight mb-6"
              style={{ color: "#1a1c1c" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hechos Para
              <br />
              <span style={{ color: "#b80049" }}>Resistir</span>
            </motion.h2>

            {/* Rose rule */}
            <motion.div
              className="w-16 h-[2px] mb-8"
              style={{
                background: "linear-gradient(90deg, #b80049, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />

            {/* Body copy */}
            <motion.p
              className="obs-editorial font-serif italic font-light text-base small:text-lg leading-relaxed mb-10"
              style={{ color: "#805062" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Nuestra mezclilla pasa por rigurosas pruebas de lavado
              y resistencia. Cada prenda está diseñada para
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
              {[
                { value: "50+", label: "Ciclos de lavado" },
                { value: "100%", label: "Color intacto" },
                { value: "0%", label: "Encogimiento" },
              ].map((stat, i) => (
                <>
                  {i > 0 && (
                    <div
                      key={`div-${i}`}
                      className="w-[1px] self-stretch"
                      style={{ backgroundColor: "rgba(228,189,194,0.4)" }}
                    />
                  )}
                  <div key={stat.label}>
                    <span
                      className="obs-editorial font-serif font-bold text-3xl block"
                      style={{ color: "#b80049" }}
                    >
                      {stat.value}
                    </span>
                    <p
                      className="obs-label-tag mt-1"
                      style={{ color: "rgba(128,80,98,0.6)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </>
              ))}
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
                className="inline-block text-white text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}
              >
                Comprar Ahora
              </LocalizedClientLink>
            </motion.div>
          </motion.div>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-6 right-6 w-12 h-12 pointer-events-none hidden small:block">
            <div
              className="absolute bottom-0 right-0 w-full h-[1px]"
              style={{ backgroundColor: "rgba(184,0,73,0.25)" }}
            />
            <div
              className="absolute bottom-0 right-0 h-full w-[1px]"
              style={{ backgroundColor: "rgba(184,0,73,0.25)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandVideo
