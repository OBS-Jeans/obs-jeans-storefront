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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      {/* Floral dot pattern */}
      <div className="absolute inset-0 obs-floral-pattern pointer-events-none z-[1]" />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          opacity: 0.01,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ════════════════ MOBILE ════════════════ */}
      <div className="small:hidden flex flex-col min-h-[100svh]">
        {/* Mobile image */}
        <div className="relative h-[55vh] overflow-hidden" style={{ backgroundColor: "#f3f3f3" }}>
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/images/obs-model-hero.jpeg"
              alt="OBS Jeans - Modelo"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </motion.div>

          {/* Gradient fade from image to light bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(to top, #f9f9f9, transparent)" }}
          />

          {/* Rose top-right accent */}
          <motion.div
            className="absolute top-6 right-6 w-12 h-12 rounded-full z-[3]"
            style={{ backgroundColor: "rgba(184,0,73,0.15)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* Mobile content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center px-7 pb-20 pt-2 -mt-6 relative z-10"
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
              <span
                className="obs-label-tag"
                style={{ color: "#805062" }}
              >
                Fábrica de Jeans
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="obs-editorial font-serif font-bold text-[3rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#1a1c1c" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Los Más
          </motion.h1>
          <motion.h1
            className="obs-editorial font-serif italic font-light text-[3rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#b80049" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Cómodos
          </motion.h1>

          {/* Rose accent line */}
          <motion.div
            className="my-4 h-px w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #b80049, transparent)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.h1
            className="obs-editorial font-serif font-bold text-[3rem] leading-[1.0] tracking-[-0.02em]"
            style={{ color: "#1a1c1c" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Al Mejor
          </motion.h1>
          <motion.h1
            className="obs-editorial font-serif font-bold text-[3rem] leading-[1.0] tracking-[-0.02em]"
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
            Hecho en Jalisco, México &middot; Tallas 1 a 25
          </motion.p>

          <motion.div
            className="mt-8"
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
          className="relative z-10 w-[48%] flex items-center pl-14 medium:pl-20 xl:pl-28"
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

            {/* Editorial serif heading */}
            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif font-bold leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#1a1c1c", fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Los Más
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                className="obs-editorial font-serif italic font-light leading-[1.0] tracking-[-0.02em]"
                style={{ color: "#b80049", fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Cómodos
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
                style={{ color: "#1a1c1c", fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)" }}
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
                style={{ color: "#1a1c1c", fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              >
                Precio
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-sm leading-relaxed mt-7 max-w-xs"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              Hecho en Jalisco, México &middot; Desde tallas 1 a 25
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
                className="inline-flex items-center gap-3 rounded-full text-white text-sm font-medium transition-opacity duration-300 hover:opacity-85"
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
                Categorías
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

        {/* Right: Model image — editorial treatment */}
        <div
          className="relative w-[52%] overflow-hidden"
          style={{ backgroundColor: "#f3f3f3" }}
        >
          {/* Parallax model image */}
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/images/obs-model-hero.jpeg"
              alt="OBS Jeans - Mezclilla de alta calidad"
              fill
              className="object-cover object-top"
              priority
              sizes="52vw"
            />
          </motion.div>

          {/* Left gradient blend — surface to transparent */}
          <div
            className="absolute inset-y-0 left-0 w-48 z-[2]"
            style={{ background: "linear-gradient(to right, #f9f9f9, transparent)" }}
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-white/5 z-[1]" />

          {/* Floating glassmorphism badge — bottom left of image */}
          <motion.div
            className="obs-glass obs-ambient-shadow absolute bottom-16 left-10 z-[5] rounded-2xl px-6 py-5"
            style={{ border: "1px solid rgba(228,189,194,0.3)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Floating collection tag — top right */}
          <motion.div
            className="obs-glass obs-ambient-shadow absolute top-16 right-10 z-[5] rounded-2xl p-5 max-w-[200px]"
            style={{ border: "1px solid rgba(228,189,194,0.25)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="obs-label-tag block" style={{ color: "#805062" }}>
              Colección 2025
            </span>
            <p
              className="obs-editorial font-serif font-bold text-xl mt-1.5 leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              Floral<br />Denim
            </p>
            <div
              className="w-7 h-0.5 mt-3"
              style={{ background: "linear-gradient(90deg, #b80049, #e2165f)" }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-[24%] z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span
            className="obs-label-tag"
            style={{ color: "rgba(128,80,98,0.45)" }}
          >
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
