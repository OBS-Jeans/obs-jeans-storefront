"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

/**
 * OPTION A: "Full-Bleed Showcase"
 * The jeans lineup spans the ENTIRE viewport width at full resolution.
 * Dark cinematic gradient on the left for text contrast.
 * The complete black-to-white spectrum is visible — nothing cropped.
 */
export default function HeroOptionA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* ═══ FULL-BLEED PRODUCT IMAGE ═══ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <Image
          src="/images/obs-lineup-spectrum.png"
          alt="OBS Jeans - Espectro completo de colores"
          fill
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* ═══ CINEMATIC GRADIENT OVERLAY — left to right ═══ */}
      <motion.div
        className="absolute inset-0 z-[2]"
        style={{ opacity: overlayOpacity }}
      >
        {/* Primary dark gradient — left editorial zone */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              105deg,
              rgba(10,10,15,0.92) 0%,
              rgba(10,10,15,0.82) 25%,
              rgba(10,10,15,0.5) 45%,
              rgba(10,10,15,0.15) 60%,
              transparent 75%
            )`,
          }}
        />

        {/* Bottom vignette for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 40%)",
          }}
        />

        {/* Top vignette — subtle */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, transparent 20%)",
          }}
        />
      </motion.div>

      {/* ═══ EDITORIAL CONTENT — LEFT ═══ */}
      <motion.div
        className="absolute inset-0 z-[5] flex items-center"
        style={{ y: contentY }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-8 small:px-14 medium:px-20 xl:px-28">
          <div className="max-w-xl">
            {/* Glassmorphism badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-5 py-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#e2165f" }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span
                  className="obs-label-tag"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Fábrica de Jeans &middot; Jalisco, México
                </span>
              </div>
            </motion.div>

            {/* Main editorial heading */}
            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[0.95] tracking-[-0.03em]"
                style={{ color: "#ffffff", fontSize: "clamp(3.5rem, 7vw, 7.5rem)" }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Cada Color
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-1">
              <motion.h1
                className="obs-editorial font-serif italic font-light leading-[0.95] tracking-[-0.03em]"
                style={{ color: "#e2165f", fontSize: "clamp(3.5rem, 7vw, 7.5rem)" }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Tu Estilo
              </motion.h1>
            </div>

            {/* Rose line */}
            <motion.div
              className="my-7 h-[2px] w-24"
              style={{
                background: "linear-gradient(90deg, #e2165f, #b80049, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[0.95] tracking-[-0.03em]"
                style={{ color: "#ffffff", fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Al Mejor Precio
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-sm small:text-base leading-relaxed mt-7 max-w-sm"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
            >
              Del negro profundo al blanco puro — toda la gama del denim
              directo de nuestra fábrica en Jalisco. Tallas del 1 al 25.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center gap-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  padding: "15px 34px",
                  background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
                  boxShadow: "0 20px 50px rgba(184,0,73,0.35)",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                Ver Colección
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                className="text-sm transition-all duration-300 hover:border-white/30"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Inter, sans-serif",
                  padding: "15px 26px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "9999px",
                }}
              >
                Nuestra Historia
              </LocalizedClientLink>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ═══ FLOATING ACCENTS ═══ */}

      {/* Tallas badge — bottom right */}
      <motion.div
        className="absolute bottom-20 right-12 z-[6] hidden small:block rounded-2xl px-6 py-5"
        style={{
          backgroundColor: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="obs-label-tag block" style={{ color: "#e2165f" }}>
          Tallas Inclusivas
        </span>
        <span
          className="obs-editorial font-serif font-bold text-4xl block mt-1"
          style={{ color: "#ffffff" }}
        >
          1 — 25
        </span>
      </motion.div>

      {/* Color spectrum dots — bottom center */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[6] hidden small:flex items-center gap-3 rounded-full px-5 py-3"
        style={{
          backgroundColor: "rgba(8,8,16,0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {[
          { color: "#1a1a1a", label: "Negro" },
          { color: "#2d3748", label: "Oscuro" },
          { color: "#4a6fa5", label: "Medio" },
          { color: "#87afd4", label: "Claro" },
          { color: "#e8e8e8", label: "Blanco" },
        ].map((swatch, i) => (
          <motion.div
            key={swatch.label}
            className="flex flex-col items-center gap-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 + i * 0.08 }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: swatch.color,
                border: swatch.label === "Blanco" ? "1px solid rgba(255,255,255,0.3)" : "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            />
            <span
              className="text-[8px] uppercase tracking-widest font-medium"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif" }}
            >
              {swatch.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator — left side */}
      <motion.div
        className="absolute bottom-8 left-14 z-[6] hidden small:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="obs-label-tag" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(226,22,95,0.5), transparent)" }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
