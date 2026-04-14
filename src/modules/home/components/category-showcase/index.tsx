"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    name: "Moda",
    tagline: "Temporada Actual",
    description: "Lo más nuevo en tendencia",
    href: "/collections/moda",
    image: "/images/obs-cat-moda.jpeg",
    imagePosition: "center 20%",
    accentColor: "#e2165f",
    overlayGradient:
      "linear-gradient(160deg, rgba(10,10,15,0.45) 0%, rgba(10,10,15,0.15) 50%, rgba(10,10,15,0.1) 100%)",
    span: "md:col-span-2 md:row-span-2",
    headingSize: "text-[3.5rem] md:text-[5.5rem]",
  },
  {
    name: "Dama",
    tagline: "21 Estilos Exclusivos",
    description: "Skinny, Wide Leg, Acampanado, Mom y más",
    href: "/categories/dama",
    image: "/images/obs-cat-dama.png",
    imagePosition: "center 15%",
    accentColor: "#b80049",
    overlayGradient:
      "linear-gradient(160deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.2) 50%, rgba(10,10,15,0.15) 100%)",
    span: "md:col-span-1 md:row-span-1",
    headingSize: "text-[2.8rem] md:text-[3.5rem]",
  },
  {
    name: "Caballero",
    tagline: "Corte Moderno",
    description: "Slim Fit y Skinny",
    href: "/categories/caballero",
    image: "/images/obs-cat-caballero.png",
    imagePosition: "center 15%",
    accentColor: "#1a1c1c",
    overlayGradient:
      "linear-gradient(160deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.2) 50%, rgba(10,10,15,0.15) 100%)",
    span: "md:col-span-1 md:row-span-1",
    headingSize: "text-[2.8rem] md:text-[3.5rem]",
  },
]

const CategoryShowcase = () => {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="content-container">
        {/* Section header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span
              className="obs-label-tag block mb-3"
              style={{ color: "#b80049" }}
            >
              Nuestras Categorías
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-[2.8rem] md:text-5xl leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              Explora la{" "}
              <em
                className="italic font-light"
                style={{ color: "#b80049" }}
              >
                colección
              </em>
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors duration-300"
            style={{
              color: "#805062",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Ver todo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </LocalizedClientLink>
        </div>

        {/* Editorial bento grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:min-h-[640px]">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ cat }: { cat: (typeof categories)[number] }) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <LocalizedClientLink
      ref={cardRef}
      href={cat.href}
      className={`group relative overflow-hidden rounded-2xl min-h-[280px] ${cat.span}`}
    >
      {/* Background image with parallax scale */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <Image
          src={cat.image}
          alt={`OBS Jeans - ${cat.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: cat.imagePosition }}
          sizes={cat.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </motion.div>

      {/* Color overlay gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: cat.overlayGradient }}
      />

      {/* Bottom darkening for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7 z-[2]">
        <div className="transition-transform duration-500 group-hover:-translate-y-2">
          <span
            className="obs-label-tag block mb-2"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {cat.tagline}
          </span>
          <h3
            className={`obs-editorial font-serif font-bold ${cat.headingSize} leading-none text-white`}
            style={{ letterSpacing: "-0.02em" }}
          >
            {cat.name}
          </h3>
          <p
            className="text-xs mt-2 leading-relaxed max-w-[220px]"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            {cat.description}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div
              className="h-px flex-1 max-w-[32px] transition-all duration-500 group-hover:max-w-[56px]"
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            />
            <span
              className="text-xs transition-all duration-300 group-hover:opacity-100 opacity-0"
              style={{
                color: "rgba(255,255,255,0.8)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Ver colección →
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}

export default CategoryShowcase
