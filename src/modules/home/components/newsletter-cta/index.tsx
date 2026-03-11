"use client"

import { FormEvent, useState } from "react"

const NewsletterCta = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#1C1917",
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.015) 10px,
            rgba(255,255,255,0.015) 11px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.01) 10px,
            rgba(255,255,255,0.01) 11px
          )
        `,
      }}
    >
      <div className="content-container py-24 text-center">
        {/* Eyebrow */}
        <span className="text-obs-gold text-xs tracking-[0.3em] font-display uppercase">
          UNETE AL CLUB OBS
        </span>

        {/* Heading */}
        <h2 className="text-obs-cream font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
          Ofertas Exclusivas, Nuevos Modelos y M&aacute;s
        </h2>

        {/* Subtitle */}
        <p className="text-obs-stone font-serif italic text-base mt-6 max-w-xl mx-auto">
          S&eacute; el primero en enterarte de nuestros lanzamientos y
          promociones especiales.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md mx-auto mt-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 bg-white/10 border border-obs-warm/20 text-obs-cream placeholder-obs-stone/50 px-6 py-4 font-display text-sm focus:border-obs-gold focus:outline-none rounded-l-sm"
          />
          <button
            type="submit"
            className="bg-obs-gold text-obs-charcoal font-display font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-obs-cream transition-colors duration-300 rounded-r-sm"
          >
            Suscribirse
          </button>
        </form>

        {/* Spam disclaimer */}
        <p className="text-xs text-obs-stone/60 mt-4">
          Prometemos no hacer spam.
        </p>
      </div>
    </section>
  )
}

export default NewsletterCta
