"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const FactoryStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [60, -40])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0c0c14" }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Rose radial glow — top left */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(184,0,73,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="flex flex-col small:flex-row small:items-stretch min-h-[75vh]">

        {/* Left: Product flatlay image */}
        <div className="relative w-full small:w-[55%] h-[55vh] small:h-auto overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/images/obs-collection-flatlay.png"
              alt="OBS Jeans - Colección completa con etiquetas OBSESSION Classic y Trendy"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </motion.div>

          {/* Right fade into dark bg — desktop only */}
          <div
            className="absolute inset-0 hidden small:block"
            style={{
              background: "linear-gradient(to right, transparent 50%, rgba(12,12,20,0.85) 100%)",
            }}
          />

          {/* Bottom fade — mobile */}
          <div
            className="absolute inset-0 small:hidden"
            style={{
              background: "linear-gradient(to bottom, transparent 60%, rgba(12,12,20,0.95) 100%)",
            }}
          />

          {/* Corner accent — top left */}
          <motion.div
            className="absolute top-6 left-6 w-14 h-14 pointer-events-none z-[3]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.5)" }} />
            <div className="absolute top-0 left-0 h-full w-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.5)" }} />
          </motion.div>

          {/* Floating tag count badge */}
          <motion.div
            className="absolute bottom-8 left-8 small:bottom-auto small:top-8 small:right-auto z-[4] rounded-xl px-4 py-3"
            style={{
              backgroundColor: "rgba(12,12,20,0.7)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(184,0,73,0.2)",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="obs-label-tag block" style={{ color: "#e2165f" }}>
              2 Líneas
            </span>
            <span
              className="text-white text-xs mt-1 block"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Classic &middot; Trendy
            </span>
          </motion.div>
        </div>

        {/* Right: Text content */}
        <div className="relative flex-1 flex items-center justify-center small:justify-start px-8 small:px-14 py-16 small:py-0 z-[2]">
          {/* Decorative vertical line — desktop */}
          <div
            className="absolute left-0 top-[15%] bottom-[15%] w-[1px] hidden small:block"
            style={{ backgroundColor: "rgba(184,0,73,0.15)" }}
          />

          <motion.div className="max-w-md relative z-10" style={{ y: textY }}>
            {/* Eyebrow */}
            <motion.span
              className="obs-label-tag inline-block mb-6"
              style={{ color: "#e2165f" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Nuestra Historia
            </motion.span>

            {/* Main headline */}
            <motion.h2
              className="obs-editorial font-serif font-bold text-4xl small:text-5xl medium:text-[3.5rem] leading-[0.95] tracking-tight mb-6"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Del Corazón de
              <br />
              <span style={{ color: "#e2165f" }}>Jalisco</span>
            </motion.h2>

            {/* Rose rule */}
            <motion.div
              className="w-16 h-[2px] mb-8"
              style={{
                background: "linear-gradient(90deg, #b80049, #e2165f, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />

            {/* Body */}
            <motion.p
              className="obs-editorial font-serif italic font-light text-base small:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Desde nuestra fábrica en Guadalajara, creamos jeans que
              combinan la tradición artesanal mexicana con tecnología
              moderna. Dos líneas — Classic y Trendy — para vestir
              cada momento de tu vida.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { value: "15+", label: "Años" },
                { value: "156+", label: "Modelos" },
                { value: "1–25", label: "Tallas" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-start gap-8">
                  <div>
                    <span
                      className="obs-editorial font-serif font-bold text-3xl block"
                      style={{ color: "#e2165f" }}
                    >
                      {stat.value}
                    </span>
                    <p
                      className="obs-label-tag mt-1"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                  {i < 2 && (
                    <div
                      className="w-[1px] self-stretch ml-0"
                      style={{ backgroundColor: "rgba(184,0,73,0.2)" }}
                    />
                  )}
                </div>
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
                className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  boxShadow: "0 12px 32px rgba(184,0,73,0.3)",
                }}
              >
                Conoce Nuestra Historia
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </LocalizedClientLink>
            </motion.div>
          </motion.div>

          {/* Bottom corner accent — desktop */}
          <div className="absolute bottom-6 right-6 w-12 h-12 pointer-events-none hidden small:block">
            <div className="absolute bottom-0 right-0 w-full h-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.2)" }} />
            <div className="absolute bottom-0 right-0 h-full w-[1px]" style={{ backgroundColor: "rgba(184,0,73,0.2)" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactoryStory
