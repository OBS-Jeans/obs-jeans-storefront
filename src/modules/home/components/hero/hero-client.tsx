"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function HeroClient() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      {/* Floral dot pattern */}
      <div className="absolute inset-0 obs-floral-pattern pointer-events-none z-[1]" />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          opacity: 0.012,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ════════════════ MOBILE ════════════════ */}
      <div className="small:hidden flex flex-col min-h-[100svh]">
        {/* Mobile hero image — jeans spectrum */}
        <div className="relative h-[48vh] overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/images/obs-lineup-spectrum.png"
              alt="OBS Jeans - Gama completa de colores en mezclilla"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              priority
              sizes="100vw"
            />
          </motion.div>

          {/* Bottom gradient fade to surface */}
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{ background: "linear-gradient(to top, #f9f9f9, transparent)" }}
          />

          {/* Decorative corner lines — top left */}
          <motion.div
            className="absolute top-5 left-5 w-10 h-10 z-[3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.35)" }} />
            <div className="absolute top-0 left-0 h-full w-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.35)" }} />
          </motion.div>

          {/* Floating color count badge */}
          <motion.div
            className="obs-glass obs-ambient-shadow absolute bottom-12 right-5 z-[5] rounded-xl px-4 py-3"
            style={{ border: "1px solid rgba(228,189,194,0.3)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <span className="obs-label-tag block" style={{ color: "#b80049" }}>
              5 Tonos
            </span>
            <span
              className="obs-editorial font-serif font-bold text-lg block mt-0.5"
              style={{ color: "#1a1c1c" }}
            >
              Un Espectro
            </span>
          </motion.div>
        </div>

        {/* Mobile content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center px-7 pb-20 pt-4 -mt-4 relative z-10"
          style={{ opacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div
              className="obs-glass inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{ border: "1px solid rgba(228,189,194,0.35)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#b80049" }} />
              <span className="obs-label-tag" style={{ color: "#805062" }}>
                Fábrica de Jeans
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="obs-editorial font-serif font-bold text-[2.8rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#1a1c1c" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Cada Color
          </motion.h1>
          <motion.h1
            className="obs-editorial font-serif italic font-light text-[2.8rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#b80049" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Tu Estilo
          </motion.h1>

          {/* Rose accent line */}
          <motion.div
            className="my-4 h-px w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #b80049, transparent)",
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.h1
            className="obs-editorial font-serif font-bold text-[2.8rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#1a1c1c" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Al Mejor
          </motion.h1>
          <motion.h1
            className="obs-editorial font-serif font-bold text-[2.8rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#1a1c1c" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Precio
          </motion.h1>

          <motion.p
            className="text-sm leading-relaxed mt-5 max-w-xs"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Del negro profundo al blanco puro — encuentra tu tono perfecto.
            <br />
            Tallas inclusivas del 1 al 25.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white text-sm font-medium transition-opacity duration-300 hover:opacity-85"
              style={{
                background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Ver Colección
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </LocalizedClientLink>
          </motion.div>
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(184,0,73,0.4), transparent)" }} />
        </motion.div>
      </div>

      {/* ════════════════ DESKTOP ════════════════ */}
      <div className="hidden small:flex h-[95vh] relative">

        {/* Left: Editorial content */}
        <motion.div
          className="relative z-10 w-[44%] flex items-center pl-14 medium:pl-20 xl:pl-28"
          style={{ y: contentY, opacity }}
        >
          <div className="relative max-w-lg">
            {/* Glassmorphism badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-9"
            >
              <div
                className="obs-glass inline-flex items-center gap-2.5 rounded-full px-5 py-2"
                style={{ border: "1px solid rgba(228,189,194,0.3)" }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#b80049" }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="obs-label-tag" style={{ color: "#805062" }}>
                  Fábrica de Jeans &middot; Jalisco, México
                </span>
              </div>
            </motion.div>

            {/* Editorial heading */}
            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#1a1c1c", fontSize: "clamp(3.2rem, 5.8vw, 6rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Cada Color
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif italic font-light leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#b80049", fontSize: "clamp(3.2rem, 5.8vw, 6rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Tu Estilo
              </motion.h1>
            </div>

            {/* Rose accent line */}
            <motion.div
              className="my-6 h-px w-28"
              style={{
                background: "linear-gradient(90deg, #b80049, #e2165f, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#1a1c1c", fontSize: "clamp(3.2rem, 5.8vw, 6rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Al Mejor
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#1a1c1c", fontSize: "clamp(3.2rem, 5.8vw, 6rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              >
                Precio
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-sm leading-relaxed mt-7 max-w-sm"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              Del negro profundo al blanco puro — toda la gama del denim
              en un solo lugar. Hechos en Jalisco, tallas del 1 al 25.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center gap-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:opacity-85 hover:shadow-xl"
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
                  boxShadow: "0 16px 40px rgba(184,0,73,0.28)",
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
                className="text-sm transition-colors duration-200"
                style={{
                  color: "#805062",
                  fontFamily: "Inter, sans-serif",
                  padding: "14px 24px",
                  border: "1px solid rgba(228,189,194,0.5)",
                  borderRadius: "9999px",
                }}
              >
                Nuestra Historia
              </LocalizedClientLink>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-10 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(228,189,194,0.25)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {[
                { num: "15+", label: "Años" },
                { num: "156+", label: "Modelos" },
                { num: "1–25", label: "Tallas" },
              ].map((s) => (
                <div key={s.label}>
                  <span
                    className="obs-editorial font-serif font-bold text-3xl block"
                    style={{ color: "#b80049" }}
                  >
                    {s.num}
                  </span>
                  <span className="obs-label-tag block mt-0.5" style={{ color: "#805062" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Jeans spectrum image — editorial treatment */}
        <div
          className="relative w-[56%] overflow-hidden"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          {/* Parallax jeans spectrum image */}
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src="/images/obs-lineup-spectrum.png"
              alt="OBS Jeans - Espectro completo de colores: negro, azul oscuro, azul medio, azul claro y blanco"
              fill
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
              priority
              sizes="56vw"
            />
          </motion.div>

          {/* Left gradient blend into surface */}
          <div
            className="absolute inset-y-0 left-0 w-56 z-[2]"
            style={{ background: "linear-gradient(to right, #f9f9f9, transparent)" }}
          />

          {/* Subtle warm overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundColor: "rgba(249,249,249,0.03)" }}
          />

          {/* Rose radial glow — bottom right */}
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 z-[3] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(184,0,73,0.06) 0%, transparent 65%)",
            }}
          />

          {/* Floating glassmorphism badge — "Colección 2025" */}
          <motion.div
            className="obs-glass obs-ambient-shadow absolute top-16 right-12 z-[5] rounded-2xl p-5 max-w-[200px]"
            style={{ border: "1px solid rgba(228,189,194,0.25)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="obs-label-tag block" style={{ color: "#805062" }}>
              Colección 2025
            </span>
            <p
              className="obs-editorial font-serif font-bold text-xl mt-1.5 leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              Denim<br />Spectrum
            </p>
            <div
              className="w-7 h-0.5 mt-3"
              style={{ background: "linear-gradient(90deg, #b80049, #e2165f)" }}
            />
          </motion.div>

          {/* Floating badge — inclusive sizes */}
          <motion.div
            className="obs-glass obs-ambient-shadow absolute bottom-16 left-14 z-[5] rounded-2xl px-6 py-5"
            style={{ border: "1px solid rgba(228,189,194,0.3)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="obs-label-tag block" style={{ color: "#b80049" }}>
              Tallas Inclusivas
            </span>
            <span
              className="obs-editorial font-serif font-bold text-4xl block mt-1"
              style={{ color: "#1a1c1c" }}
            >
              1 — 25
            </span>
          </motion.div>

          {/* Decorative color spectrum indicator — bottom right */}
          <motion.div
            className="absolute bottom-16 right-12 z-[5] flex gap-1.5 items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {["#1a1a1a", "#2d3748", "#4a6fa5", "#87afd4", "#e8e8e8"].map((color, i) => (
              <motion.div
                key={color}
                className="rounded-full"
                style={{
                  backgroundColor: color,
                  width: "8px",
                  height: `${16 + i * 4}px`,
                  border: color === "#e8e8e8" ? "1px solid rgba(0,0,0,0.1)" : "none",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: 1.9 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-[22%] z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span className="obs-label-tag" style={{ color: "rgba(128,80,98,0.45)" }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(184,0,73,0.5), transparent)" }}
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
}
