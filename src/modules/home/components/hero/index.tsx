import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div
      className="h-[90vh] w-full relative overflow-hidden"
      style={{
        backgroundColor: "#1C1917",
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.025) 10px,
            rgba(255,255,255,0.025) 11px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.018) 10px,
            rgba(255,255,255,0.018) 11px
          )
        `,
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner - top left */}
      <div className="absolute top-8 left-8 w-20 h-20 z-[2] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-obs-gold/30" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-obs-gold/30" />
      </div>

      {/* Decorative corner - bottom right */}
      <div className="absolute bottom-8 right-8 w-20 h-20 z-[2] pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-obs-gold/30" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-obs-gold/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 small:px-32">
        {/* Logo */}
        <div className="opacity-0 animate-hero-fade-in mb-8 small:mb-10">
          <Image
            src="/images/obs-logo-white.png"
            alt="OBS Jeans"
            width={320}
            height={72}
            className="h-14 small:h-20 w-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Badge */}
        <div className="opacity-0 animate-hero-fade-in mb-6 small:mb-8">
          <span className="border border-obs-gold/40 rounded-full px-4 py-1 text-xs text-obs-gold/80 tracking-[0.2em] font-display uppercase">
            F&aacute;brica de Jeans
          </span>
        </div>

        {/* Main heading */}
        <div className="flex flex-col items-center gap-0">
          <h1
            className="font-display font-bold text-6xl small:text-8xl text-obs-cream tracking-tight leading-none opacity-0 animate-hero-fade-in"
          >
            Los M&aacute;s C&oacute;modos
          </h1>

          {/* Gold accent line */}
          <div className="w-full max-w-[200px] small:max-w-[300px] my-4 small:my-6 flex justify-center">
            <div
              className="h-[2px] bg-obs-gold opacity-0 animate-hero-line-grow"
            />
          </div>

          <h1
            className="font-display font-bold text-6xl small:text-8xl text-obs-cream tracking-tight leading-none opacity-0 animate-hero-fade-in-delay"
          >
            Al Mejor Precio
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="font-serif italic text-obs-stone text-base small:text-lg mt-8 small:mt-10 max-w-xl opacity-0 animate-hero-fade-in-delay-2"
        >
          F&aacute;brica de Jeans en Jalisco, M&eacute;xico &middot; Desde tallas 1 a 25
        </p>

        {/* CTA Button */}
        <div className="mt-10 small:mt-12 opacity-0 animate-hero-fade-in-delay-3">
          <LocalizedClientLink
            href="/store"
            className="inline-block bg-obs-gold text-obs-charcoal font-display font-semibold text-sm small:text-base tracking-widest uppercase px-10 py-4 hover:bg-obs-cream transition-colors duration-300"
          >
            Ver Colecci&oacute;n
          </LocalizedClientLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0 animate-hero-fade-in-delay-4">
        <span className="font-display text-obs-stone/60 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-obs-gold/70 animate-bounce-down"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero
