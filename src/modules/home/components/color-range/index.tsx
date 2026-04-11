"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const colorFamilies = [
  { name: "Claros", colors: ["Blanco", "Crema", "Arena", "Café"], accent: "#c4a882" },
  { name: "Denim", colors: ["Cielo", "Medio", "Oscuro", "Negro"], accent: "#4a6fa5" },
]

const ColorRange = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const textY = useTransform(scrollYProgress, [0, 1], [40, -20])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#111118" }}
    >
      {/* Subtle ambient texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Rose glow — right side */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(184,0,73,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="content-container py-20 small:py-28">
        {/* Section header */}
        <motion.div
          className="mb-14 small:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="obs-label-tag block mb-4" style={{ color: "#e2165f" }}>
            Gama de Colores
          </span>
          <h2
            className="obs-editorial font-serif font-bold text-[2.5rem] small:text-5xl medium:text-6xl leading-[0.95] tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Dos Mundos,{" "}
            <em className="italic font-light" style={{ color: "#e2165f" }}>
              Un Estilo
            </em>
          </h2>
          <p
            className="text-sm leading-relaxed mt-5 max-w-md"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            Tonos cálidos y denim clásico — organizados con precisión
            para que encuentres tu color ideal.
          </p>
        </motion.div>

        <div className="flex flex-col small:flex-row gap-10 small:gap-16 items-center">
          {/* Left: Image — stacked jeans */}
          <motion.div
            className="relative w-full small:w-[55%] aspect-[4/3] small:aspect-auto small:h-[520px] rounded-2xl overflow-hidden"
            style={{ y: imageY }}
          >
            <Image
              src="/images/obs-stacked-range.png"
              alt="OBS Jeans - Dos pilas organizadas: tonos claros y tonos denim"
              fill
              className="object-cover rounded-2xl"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            {/* Subtle vignette */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(17,17,24,0.3) 100%)",
              }}
            />

            {/* Corner accent */}
            <motion.div
              className="absolute top-5 left-5 w-12 h-12 pointer-events-none z-[3]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.4)" }} />
              <div className="absolute top-0 left-0 h-full w-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.4)" }} />
            </motion.div>

            {/* Bottom-right corner */}
            <motion.div
              className="absolute bottom-5 right-5 w-12 h-12 pointer-events-none z-[3]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 right-0 w-full h-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.4)" }} />
              <div className="absolute bottom-0 right-0 h-full w-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.4)" }} />
            </motion.div>

            {/* Floating label — centered bottom */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[4] rounded-xl px-5 py-3"
              style={{
                backgroundColor: "rgba(17,17,24,0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(184,0,73,0.15)",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="text-xs tracking-wider uppercase font-medium"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                8+ Tonos Disponibles
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Color families breakdown */}
          <motion.div
            className="flex-1 w-full small:w-auto"
            style={{ y: textY }}
          >
            <div className="flex flex-col gap-12">
              {colorFamilies.map((family, fi) => (
                <motion.div
                  key={family.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + fi * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Family header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: family.accent }}
                    />
                    <span
                      className="obs-editorial font-serif font-bold text-2xl"
                      style={{ color: "#ffffff" }}
                    >
                      {family.name}
                    </span>
                    <div
                      className="flex-1 h-[1px] ml-2"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    />
                  </div>

                  {/* Color chips */}
                  <div className="grid grid-cols-2 gap-3">
                    {family.colors.map((color, ci) => (
                      <motion.div
                        key={color}
                        className="flex items-center gap-3 rounded-lg px-4 py-3"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + fi * 0.15 + ci * 0.06 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: family.name === "Claros"
                              ? ["#f0ece4", "#e8ddd0", "#c4a882", "#6b4e37"][ci]
                              : ["#87afd4", "#4a6fa5", "#2d3748", "#1a1a1a"][ci],
                            border: ci === 0 && family.name === "Claros"
                              ? "1px solid rgba(255,255,255,0.15)"
                              : "none",
                          }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
                        >
                          {color}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Separator */}
            <motion.div
              className="w-12 h-[2px] my-10"
              style={{ background: "linear-gradient(90deg, #b80049, transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center gap-3 text-sm font-medium transition-all duration-300 group"
                style={{
                  color: "#e2165f",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explorar Todos los Colores
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </LocalizedClientLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ColorRange
