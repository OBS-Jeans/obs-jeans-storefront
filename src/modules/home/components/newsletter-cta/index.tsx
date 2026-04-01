"use client"

import { FormEvent, useState } from "react"

const NewsletterCta = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      {/* Floral dot pattern */}
      <div className="absolute inset-0 obs-floral-pattern pointer-events-none" />

      {/* Rose radial glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(184,0,73,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="content-container relative z-10 py-28 text-center">
        {/* Eyebrow */}
        <span
          className="obs-label-tag inline-block mb-6"
          style={{ color: "#b80049" }}
        >
          Únete al Club OBS
        </span>

        {/* Heading — editorial serif */}
        <h2
          className="obs-editorial font-serif font-bold text-[2.4rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight mx-auto max-w-3xl"
          style={{ color: "#1a1c1c" }}
        >
          Ofertas Exclusivas,{" "}
          <em
            className="italic font-light"
            style={{ color: "#b80049" }}
          >
            Nuevos Modelos
          </em>{" "}
          y Más
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm leading-relaxed mt-6 mx-auto max-w-sm"
          style={{
            color: "#805062",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Sé el primero en enterarte de nuestros lanzamientos
          y promociones especiales.
        </p>

        {/* Email form — editorial style */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row max-w-md mx-auto mt-12 gap-3 sm:gap-0"
        >
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full bg-transparent text-sm outline-none px-0 pb-3 pt-1 sm:pr-6"
              style={{
                color: "#1a1c1c",
                fontFamily: "Inter, sans-serif",
                borderBottom: "1px solid rgba(228,189,194,0.6)",
              }}
              onFocus={(e) => {
                e.currentTarget.parentElement!.querySelector(".focus-line")?.classList.add("w-full")
                e.currentTarget.parentElement!.querySelector(".focus-line")?.classList.remove("w-0")
              }}
              onBlur={(e) => {
                e.currentTarget.parentElement!.querySelector(".focus-line")?.classList.remove("w-full")
                e.currentTarget.parentElement!.querySelector(".focus-line")?.classList.add("w-0")
              }}
            />
            {/* Animated focus underline */}
            <div
              className="focus-line absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #b80049, #e2165f)",
              }}
            />
          </div>

          <button
            type="submit"
            className="sm:ml-4 rounded-full px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-85 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
              boxShadow: "0 12px 32px rgba(184,0,73,0.25)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {submitted ? "¡Gracias! ✦" : "Suscribirse"}
          </button>
        </form>

        {/* Disclaimer */}
        <p
          className="text-xs mt-5"
          style={{ color: "rgba(128,80,98,0.5)", fontFamily: "Inter, sans-serif" }}
        >
          Prometemos no hacer spam.
        </p>
      </div>
    </section>
  )
}

export default NewsletterCta
