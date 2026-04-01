import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden flex"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      {/* Floral dot pattern — ambient texture */}
      <div className="absolute inset-0 obs-floral-pattern pointer-events-none z-0" />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          opacity: 0.012,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ——— LEFT CONTENT COLUMN ——— */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-[52%] px-8 small:px-14 lg:px-20 xl:px-28 pt-28 pb-16 md:pt-0 md:pb-0">

        {/* Glassmorphism badge */}
        <div className="obs-hero-enter obs-hero-enter-1 self-start mb-8 md:mb-10">
          <div
            className="obs-glass obs-ghost-border inline-flex items-center gap-2.5 rounded-full px-4 py-2"
          >
            <span
              className="w-2 h-2 rounded-full obs-soft-pulse"
              style={{ backgroundColor: "#b80049" }}
            />
            <span
              className="obs-label-tag"
              style={{ color: "#805062" }}
            >
              Fábrica de Jeans &middot; Jalisco, México
            </span>
          </div>
        </div>

        {/* Main editorial heading — Noto Serif */}
        <div className="overflow-hidden">
          <h1
            className="obs-hero-enter obs-hero-enter-2 obs-editorial font-serif font-bold text-[clamp(3.2rem,8vw,7rem)] xl:text-[7.5rem]"
            style={{ color: "#1a1c1c" }}
          >
            Los Más
          </h1>
        </div>

        <div className="overflow-hidden -mt-2 md:-mt-3">
          <h1
            className="obs-hero-enter obs-hero-enter-3 obs-editorial font-serif italic font-light text-[clamp(3.2rem,8vw,7rem)] xl:text-[7.5rem]"
            style={{ color: "#b80049" }}
          >
            Cómodos
          </h1>
        </div>

        {/* Rose accent line */}
        <div className="my-5 md:my-7">
          <div
            className="obs-line-expand h-[2px] w-32"
            style={{
              background: "linear-gradient(90deg, #b80049, #e2165f, transparent)",
            }}
          />
        </div>

        <div className="overflow-hidden">
          <h1
            className="obs-hero-enter obs-hero-enter-3 obs-editorial font-serif font-bold text-[clamp(3.2rem,8vw,7rem)] xl:text-[7.5rem]"
            style={{ color: "#1a1c1c" }}
          >
            Al Mejor
          </h1>
        </div>

        <div className="overflow-hidden -mt-2 md:-mt-3">
          <h1
            className="obs-hero-enter obs-hero-enter-4 obs-editorial font-serif font-bold text-[clamp(3.2rem,8vw,7rem)] xl:text-[7.5rem]"
            style={{ color: "#1a1c1c" }}
          >
            Precio
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="obs-hero-enter obs-hero-enter-4 text-sm leading-relaxed mt-8 max-w-xs"
          style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
        >
          Desde nuestra fábrica en Guadalajara —<br />
          tallas inclusivas del 1 al 25.
        </p>

        {/* CTAs */}
        <div className="obs-hero-enter obs-hero-enter-5 flex flex-wrap items-center gap-4 mt-10">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
            style={{
              background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
              boxShadow: "0 20px 40px rgba(184,0,73,0.25)",
            }}
          >
            Ver Colección
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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

          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-colors duration-300"
            style={{
              color: "#1a1c1c",
              border: "1px solid rgba(228,189,194,0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Nuestra Historia
          </LocalizedClientLink>
        </div>

        {/* Stats row */}
        <div
          className="obs-hero-enter obs-hero-enter-5 flex gap-10 mt-14 pt-8"
          style={{ borderTop: "1px solid rgba(228,189,194,0.3)" }}
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
              <span
                className="obs-label-tag block mt-1"
                style={{ color: "#805062" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ——— RIGHT EDITORIAL COMPOSITION ——— */}
      <div
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[50%]"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {/* Rose gradient wash at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #f9f9f9 0%, #f3f3f3 30%, rgba(228,189,194,0.2) 60%, rgba(184,0,73,0.06) 100%)",
          }}
        />

        {/* Large editorial OBS watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="obs-editorial font-serif font-bold leading-none"
            style={{
              fontSize: "clamp(12rem, 22vw, 22rem)",
              color: "rgba(26,28,28,0.035)",
              letterSpacing: "-0.04em",
            }}
          >
            OBS
          </span>
        </div>

        {/* Decorative rose circle — top right */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(184,0,73,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Floating editorial card — product info */}
        <div
          className="obs-glass obs-ambient-shadow absolute top-[15%] left-[10%] rounded-2xl p-6 max-w-[240px]"
          style={{ border: "1px solid rgba(228,189,194,0.25)" }}
        >
          <span
            className="obs-label-tag block"
            style={{ color: "#805062" }}
          >
            Colección 2025
          </span>
          <p
            className="obs-editorial font-serif font-bold text-xl mt-2 leading-tight"
            style={{ color: "#1a1c1c" }}
          >
            Floral<br />Denim
          </p>
          <div
            className="w-8 h-0.5 mt-4"
            style={{
              background: "linear-gradient(90deg, #b80049, #e2165f)",
            }}
          />
          <p
            className="text-xs mt-3 leading-relaxed"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
          >
            Hecho a mano en Guadalajara con algodón 100% mexicano.
          </p>
        </div>

        {/* Floating size badge */}
        <div
          className="obs-glass obs-ambient-shadow absolute bottom-[18%] right-[12%] rounded-2xl px-6 py-5"
          style={{ border: "1px solid rgba(228,189,194,0.25)" }}
        >
          <span
            className="obs-label-tag block"
            style={{ color: "#b80049" }}
          >
            Tallas Inclusivas
          </span>
          <p
            className="obs-editorial font-serif font-bold text-4xl mt-1"
            style={{ color: "#1a1c1c" }}
          >
            1–25
          </p>
        </div>

        {/* Vertical editorial tag */}
        <div
          className="absolute bottom-[28%] left-[8%] flex items-center gap-3"
        >
          <div
            className="w-px h-16"
            style={{ background: "linear-gradient(to bottom, transparent, #b80049, transparent)" }}
          />
          <span
            className="obs-label-tag"
            style={{
              color: "#805062",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "9px",
              letterSpacing: "0.15em",
            }}
          >
            Directo de Fábrica &middot; Sin Intermediarios
          </span>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 obs-hero-enter obs-hero-enter-5"
        >
          <span
            className="obs-label-tag"
            style={{ color: "rgba(128,80,98,0.5)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, rgba(184,0,73,0.4), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
