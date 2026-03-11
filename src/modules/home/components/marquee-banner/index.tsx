"use client"

const marqueeItems = [
  "HECHO EN JALISCO",
  "TALLAS 1-25",
  "DIRECTO DE FABRICA",
  "ENVIO A TODO MEXICO",
  "CALIDAD PREMIUM",
]

const MarqueeContent = () => (
  <>
    {marqueeItems.map((item, i) => (
      <span key={i} className="flex items-center gap-6 shrink-0">
        <span>{item}</span>
        <span className="text-obs-gold">&#9670;</span>
      </span>
    ))}
  </>
)

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-obs-denim border-y border-obs-gold/40 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `,
        }}
      />

      {/* Row 1 — scrolls left */}
      <div className="py-3 overflow-hidden">
        <div
          className="flex items-center gap-6 text-sm text-obs-cream/80 uppercase tracking-[0.3em] font-display whitespace-nowrap"
          style={{
            animation: "marquee-left 30s linear infinite",
            width: "max-content",
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* Thin gold separator */}
      <div className="h-[1px] bg-obs-gold/20" />

      {/* Row 2 — scrolls right */}
      <div className="py-3 overflow-hidden">
        <div
          className="flex items-center gap-6 text-sm text-obs-cream/80 uppercase tracking-[0.3em] font-display whitespace-nowrap"
          style={{
            animation: "marquee-right 30s linear infinite",
            width: "max-content",
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}

export default MarqueeBanner
