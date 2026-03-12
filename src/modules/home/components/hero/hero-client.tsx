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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-obs-charcoal"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[15]"
        style={{
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* MOBILE: stacked layout */}
      <div className="small:hidden flex flex-col min-h-[100svh]">
        {/* Mobile image — top half */}
        <div className="relative h-[55vh] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <Image
              src="/images/obs-model-hero.jpeg"
              alt="OBS Jeans - Modelo"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </motion.div>
          {/* Gradient fade into content below */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obs-charcoal to-transparent" />

          {/* Corner accent */}
          <div className="absolute top-5 left-5 w-12 h-12 pointer-events-none z-[2]">
            <motion.div
              className="absolute top-0 left-0 w-full h-[1px] bg-obs-gold/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ originX: 0 }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full w-[1px] bg-obs-gold/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              style={{ originY: 0 }}
            />
          </div>
        </div>

        {/* Mobile content — bottom */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center px-6 pb-20 pt-4 -mt-8 relative z-10"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-5"
          >
            <Image
              src="/images/obs-logo-white.png"
              alt="OBS Jeans"
              width={220}
              height={50}
              className="h-10 w-auto object-contain mx-auto"
              priority
            />
          </motion.div>

          <motion.span
            className="border border-obs-gold/40 rounded-full px-4 py-1 text-[10px] text-obs-gold/80 tracking-[0.2em] font-display uppercase mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            F&aacute;brica de Jeans
          </motion.span>

          <motion.h1
            className="font-display font-bold text-4xl text-obs-cream tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Los M&aacute;s C&oacute;modos
          </motion.h1>
          <motion.div
            className="w-24 h-[2px] bg-obs-gold my-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.h1
            className="font-display font-bold text-4xl text-obs-cream tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Al Mejor Precio
          </motion.h1>

          <motion.p
            className="font-serif italic text-obs-stone text-sm mt-6 max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Hecho en Jalisco, M&eacute;xico &middot; Tallas 1 a 25
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <LocalizedClientLink
              href="/store"
              className="inline-block bg-obs-gold text-obs-charcoal font-display font-semibold text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-obs-cream transition-colors duration-300"
            >
              Ver Colecci&oacute;n
            </LocalizedClientLink>
          </motion.div>
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-obs-gold/60"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </motion.svg>
        </motion.div>
      </div>

      {/* DESKTOP: split-screen layout */}
      <div className="hidden small:flex h-[92vh] relative">
        {/* Left: Content */}
        <motion.div
          className="relative z-10 w-[48%] flex items-center justify-end pr-16 medium:pr-24"
          style={{ y: contentY, opacity }}
        >
          {/* Subtle denim pattern on left side */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 11px),
                repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)
              `,
            }}
          />

          <div className="relative max-w-lg">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <Image
                src="/images/obs-logo-white.png"
                alt="OBS Jeans"
                width={300}
                height={68}
                className="h-16 medium:h-20 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <span className="border border-obs-gold/40 rounded-full px-5 py-1.5 text-xs text-obs-gold/80 tracking-[0.2em] font-display uppercase">
                F&aacute;brica de Jeans
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-display font-bold text-6xl medium:text-7xl text-obs-cream tracking-tight leading-[0.92]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Los M&aacute;s
              <br />
              C&oacute;modos
            </motion.h1>

            <motion.div
              className="w-24 h-[2px] bg-obs-gold my-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ originX: 0 }}
            />

            <motion.h1
              className="font-display font-bold text-6xl medium:text-7xl text-obs-cream tracking-tight leading-[0.92]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Al Mejor
              <br />
              <span className="text-obs-gold">Precio</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-serif italic text-obs-stone text-base medium:text-lg mt-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Hecho en Jalisco, M&eacute;xico &middot; Desde tallas 1 a 25
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <LocalizedClientLink
                href="/store"
                className="group relative inline-block overflow-hidden"
              >
                <motion.span
                  className="inline-block bg-obs-gold text-obs-charcoal font-display font-semibold text-sm tracking-widest uppercase px-10 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Ver Colecci&oacute;n
                </motion.span>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/categories"
                className="font-display text-sm text-obs-cream/60 hover:text-obs-gold transition-colors duration-200 tracking-wider uppercase flex items-center gap-2"
              >
                Categor&iacute;as
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </LocalizedClientLink>
            </motion.div>
          </div>

          {/* Corner accent - top left */}
          <div className="absolute top-10 left-10 w-16 h-16 pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-[1px] bg-obs-gold/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              style={{ originX: 0 }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full w-[1px] bg-obs-gold/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              style={{ originY: 0 }}
            />
          </div>
        </motion.div>

        {/* Right: Model Image */}
        <div className="relative w-[52%] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <Image
              src="/images/obs-model-hero.jpeg"
              alt="OBS Jeans - Mezclilla de alta calidad"
              fill
              className="object-cover object-top"
              priority
              sizes="52vw"
            />
          </motion.div>

          {/* Gradient overlay — left edge blends into charcoal */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-obs-charcoal to-transparent z-[2]" />
          {/* Slight dark overlay for text contrast */}
          <div className="absolute inset-0 bg-obs-charcoal/10 z-[1]" />

          {/* Gold diagonal accent line */}
          <motion.div
            className="absolute bottom-0 left-0 w-[1px] h-48 bg-gradient-to-t from-obs-gold/50 to-transparent z-[3]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            style={{ originY: 1 }}
          />

          {/* Corner accent - bottom right */}
          <div className="absolute bottom-10 right-10 w-16 h-16 pointer-events-none z-[3]">
            <motion.div
              className="absolute bottom-0 right-0 w-full h-[1px] bg-obs-gold/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              style={{ originX: 1 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-full w-[1px] bg-obs-gold/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              style={{ originY: 1 }}
            />
          </div>

          {/* Floating size badge on image */}
          <motion.div
            className="absolute bottom-20 right-16 z-[4] bg-obs-charcoal/80 backdrop-blur-sm border border-obs-gold/30 px-5 py-3 text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-obs-gold/70 block">
              Tallas
            </span>
            <span className="font-display text-2xl font-bold text-obs-cream">
              1 — 25
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator - centered at bottom */}
        <motion.div
          className="absolute bottom-8 left-[24%] z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-display text-obs-stone/50 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-obs-gold/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  )
}
