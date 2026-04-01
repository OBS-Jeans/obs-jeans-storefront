"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const steps = [
  {
    number: "01",
    label: "Diseño",
    title: "Patrón",
    description: "Cada prenda comienza con un trazo. Patrones de precisión milimétrica diseñados en Jalisco.",
    video: "/videos/obs-pattern-design.mp4",
  },
  {
    number: "02",
    label: "Confección",
    title: "Costura",
    description: "Manos expertas en máquinas JUKI unen cada pieza con puntadas que duran años.",
    video: "/videos/obs-sewing.mp4",
  },
  {
    number: "03",
    label: "Artesanía",
    title: "Ensamble",
    description: "El detalle lo hace todo. Cada costado, bota y bolsillo ensamblado con dedicación.",
    video: "/videos/obs-crafting.mp4",
  },
  {
    number: "04",
    label: "Carácter",
    title: "Desgaste",
    description: "El look que distingue a un OBS Jeans: desgaste a mano con técnica de sandblasting.",
    video: "/videos/obs-distressing.mp4",
  },
  {
    number: "05",
    label: "Suavidad",
    title: "Lavado",
    description: "Ciclos de lavado industrial garantizan suavidad, color duradero y cero encogimiento.",
    video: "/videos/obs-wash-cycle.mp4",
  },
  {
    number: "06",
    label: "Acabado",
    title: "Prensado",
    description: "Vapor a alta presión fija la forma definitiva. Lista para llegar a tus manos.",
    video: "/videos/obs-finishing.mp4",
  },
]

function VideoCard({
  step,
  index,
  isDragging,
}: {
  step: (typeof steps)[0]
  index: number
  isDragging: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (!isDragging) {
      setHovered(true)
      videoRef.current?.play()
    }
  }
  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <motion.div
      className="relative flex-shrink-0 w-[240px] small:w-[280px]"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: "9/16" }}
      >
        <video
          ref={videoRef}
          src={step.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,28,28,0.92) 0%, rgba(26,28,28,0.3) 45%, transparent 70%)",
          }}
        />

        <div className="absolute top-5 left-5">
          <span
            className="obs-editorial font-serif font-bold"
            style={{
              fontSize: "48px",
              lineHeight: 1,
              color: "rgba(228,189,194,0.25)",
              letterSpacing: "-0.04em",
            }}
          >
            {step.number}
          </span>
        </div>

        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
          style={{
            background: hovered
              ? "linear-gradient(90deg, #b80049, #e2165f)"
              : "transparent",
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span
            className="obs-label-tag block mb-2"
            style={{ color: "rgba(228,189,194,0.7)" }}
          >
            {step.label}
          </span>
          <h3
            className="obs-editorial font-serif font-bold text-2xl mb-2 leading-none"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            {step.title}
          </h3>
          <p
            className="text-xs leading-relaxed transition-all duration-400"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(228,189,194,0.65)",
              maxHeight: hovered ? "80px" : "0px",
              overflow: "hidden",
              opacity: hovered ? 1 : 0,
            }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const CARD_WIDTH = 296 // 280px card + 16px gap (approx)

const CraftProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30])

  // Arrow navigation
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener("scroll", updateScrollState)
  }, [updateScrollState])

  const scrollBy = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? CARD_WIDTH * 2 : -CARD_WIDTH * 2,
      behavior: "smooth",
    })
  }

  // Drag-to-scroll
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    isDragging.current = true
    dragStartX.current = e.pageX - el.offsetLeft
    dragScrollLeft.current = el.scrollLeft
    setDragging(true)
  }

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = scrollRef.current
    if (!isDragging.current || !el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - dragStartX.current) * 1.5
    el.scrollLeft = dragScrollLeft.current - walk
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    setDragging(false)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 small:py-28"
      style={{ backgroundColor: "#1a1c1c" }}
    >
      {/* Rose radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(184,0,73,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(228,189,194,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="content-container relative z-10">
        {/* Section header */}
        <motion.div className="mb-14" style={{ y: titleY }}>
          <div className="flex flex-col small:flex-row small:items-end small:justify-between gap-6">
            <div>
              <span
                className="obs-label-tag block mb-4"
                style={{ color: "#b80049" }}
              >
                Hecho en Jalisco, México
              </span>
              <h2
                className="obs-editorial font-serif font-bold text-4xl small:text-5xl leading-none"
                style={{ color: "rgba(249,249,249,0.95)" }}
              >
                De Tela
                <br />
                <span style={{ color: "#b80049" }}>a Jeans</span>
              </h2>
            </div>

            <div className="flex flex-col items-start small:items-end gap-4">
              <p
                className="text-sm max-w-xs leading-relaxed small:text-right"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(228,189,194,0.5)",
                }}
              >
                Seis pasos que transforman mezclilla cruda en la prenda que usarás por años.
              </p>

              {/* Arrow buttons — desktop only */}
              <div className="hidden small:flex items-center gap-2">
                <button
                  onClick={() => scrollBy("left")}
                  disabled={!canScrollLeft}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(228,189,194,0.2)",
                    color: canScrollLeft ? "rgba(228,189,194,0.8)" : "rgba(228,189,194,0.2)",
                    backgroundColor: canScrollLeft ? "rgba(228,189,194,0.05)" : "transparent",
                    cursor: canScrollLeft ? "pointer" : "not-allowed",
                  }}
                  aria-label="Anterior"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy("right")}
                  disabled={!canScrollRight}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(228,189,194,0.2)",
                    color: canScrollRight ? "rgba(228,189,194,0.8)" : "rgba(228,189,194,0.2)",
                    backgroundColor: canScrollRight ? "rgba(228,189,194,0.05)" : "transparent",
                    cursor: canScrollRight ? "pointer" : "not-allowed",
                  }}
                  aria-label="Siguiente"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className="mt-8 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, #b80049, rgba(184,0,73,0.2), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll strip */}
      <div className="relative">
        {/* Edge fades — desktop */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden small:block"
          style={{ background: "linear-gradient(to right, #1a1c1c, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden small:block"
          style={{ background: "linear-gradient(to left, #1a1c1c, transparent)" }}
        />

        <div
          ref={scrollRef}
          className="flex gap-4 small:gap-5 overflow-x-auto pb-4 px-6 small:px-16 select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={onMouseDown}
        >
          {steps.map((step, i) => (
            <VideoCard key={step.number} step={step} index={i} isDragging={dragging} />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="content-container mt-8 flex items-center justify-center gap-2">
        {steps.map((step, i) => (
          <button
            key={step.number}
            onClick={() => {
              scrollRef.current?.scrollTo({
                left: i * CARD_WIDTH,
                behavior: "smooth",
              })
            }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "rgba(228,189,194,0.25)",
            }}
            aria-label={`Ir a ${step.title}`}
          />
        ))}
      </div>

      {/* Bottom label */}
      <div className="content-container mt-6 flex items-center gap-4">
        <div className="flex-1 h-[1px]" style={{ background: "rgba(228,189,194,0.08)" }} />
        <span className="obs-label-tag" style={{ color: "rgba(228,189,194,0.25)" }}>
          6 etapas · Jalisco · México
        </span>
        <div className="flex-1 h-[1px]" style={{ background: "rgba(228,189,194,0.08)" }} />
      </div>
    </section>
  )
}

export default CraftProcess
