"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

/**
 * OPTION C: "Cinematic Pan"
 * Full-viewport hero where the image is wider than the screen and
 * continuously drifts left-to-right (Ken Burns effect), revealing
 * each pair of jeans over time. Text centered with glassmorphic overlay.
 */
export default function HeroOptionC() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] overflow-hidden"
      style={{ backgroundColor: "#080810" }}
    >
      {/* ═══ PANNING PRODUCT IMAGE — wider than viewport ═══ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-y-0 obs-cinematic-pan"
          style={{
            width: "180%",
            left: "0%",
          }}
        >
          <Image
            src="/images/obs-lineup-spectrum.png"
            alt="OBS Jeans - Espectro completo de colores en movimiento"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
            sizes="180vw"
            quality={90}
          />
        </div>
      </div>

      {/* ═══ ATMOSPHERIC OVERLAYS ═══ */}
      {/* Radial vignette — focus attention to center */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `radial-gradient(
            ellipse 80% 70% at 50% 50%,
            transparent 20%,
            rgba(8,8,16,0.4) 60%,
            rgba(8,8,16,0.75) 100%
          )`,
        }}
      />

      {/* Bottom gradient for depth */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: "linear-gradient(to top, rgba(8,8,16,0.85) 0%, rgba(8,8,16,0.2) 35%, transparent 55%)",
        }}
      />

      {/* Top subtle vignette */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,16,0.5) 0%, transparent 25%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══ CENTERED CONTENT ═══ */}
      <motion.div
        className="absolute inset-0 z-[5] flex flex-col items-center justify-center text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Glassmorphic content card */}
        <motion.div
          className="relative max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mx-auto"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#e2165f" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span
                className="obs-label-tag"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Fábrica de Jeans &middot; Jalisco, México
              </span>
            </div>
          </motion.div>

          {/* Main heading — centered, dramatic */}
          <div className="overflow-hidden">
            <motion.h1
              className="obs-editorial font-serif font-bold leading-[0.92] tracking-[-0.03em]"
              style={{ color: "#ffffff", fontSize: "clamp(3.2rem, 8vw, 8.5rem)" }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Cada Color
            </motion.h1>
          </div>

          <div className="overflow-hidden -mt-1 small:-mt-2">
            <motion.h1
              className="obs-editorial font-serif italic font-light leading-[0.92] tracking-[-0.03em]"
              style={{ color: "#e2165f", fontSize: "clamp(3.2rem, 8vw, 8.5rem)" }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >
              Tu Estilo
            </motion.h1>
          </div>

          {/* Rose line — centered */}
          <motion.div
            className="mx-auto my-7 h-[2px] w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #e2165f, transparent)",
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-sm small:text-base leading-relaxed mx-auto max-w-md"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Del negro profundo al blanco puro — toda la gama del denim
            directo de nuestra fábrica en Jalisco. Tallas del 1 al 25.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex justify-center items-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
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
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "9999px",
              }}
            >
              Nuestra Historia
            </LocalizedClientLink>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ═══ BOTTOM BAR — Stats + Color swatches ═══ */}
      <motion.div
        className="absolute bottom-0 inset-x-0 z-[6]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div
          className="max-w-[1440px] mx-auto px-8 small:px-14 py-6 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Stats */}
          <div className="flex gap-8 small:gap-10">
            {[
              { num: "15+", label: "Años" },
              { num: "156+", label: "Modelos" },
              { num: "1–25", label: "Tallas" },
            ].map((s) => (
              <div key={s.label}>
                <span
                  className="obs-editorial font-serif font-bold text-xl small:text-2xl block"
                  style={{ color: "#e2165f" }}
                >
                  {s.num}
                </span>
                <span
                  className="obs-label-tag block mt-0.5"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Color spectrum indicator — desktop */}
          <div className="hidden small:flex items-center gap-4">
            <span
              className="obs-label-tag mr-2"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Espectro
            </span>
            <div className="flex gap-1.5">
              {["#1a1a1a", "#2d3748", "#4a6fa5", "#87afd4", "#e8e8e8"].map((color) => (
                <div
                  key={color}
                  className="w-6 h-2 rounded-full"
                  style={{
                    backgroundColor: color,
                    border: color === "#e8e8e8" ? "1px solid rgba(255,255,255,0.2)" : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="hidden small:flex flex-col items-center gap-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="obs-label-tag" style={{ color: "rgba(255,255,255,0.2)" }}>
              Scroll
            </span>
            <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, rgba(226,22,95,0.4), transparent)" }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
