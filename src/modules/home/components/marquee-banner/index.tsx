"use client"

const marqueeItems = [
  "Hecho en Jalisco",
  "Tallas 1–25",
  "Directo de Fábrica",
  "Envío a Todo México",
  "Calidad Premium",
]

const MarqueeContent = () => (
  <>
    {marqueeItems.map((item, i) => (
      <span key={i} className="flex items-center gap-8 shrink-0">
        <span
          className="font-serif italic text-sm"
          style={{ color: "#1a1c1c" }}
        >
          {item}
        </span>
        <span
          className="text-base select-none"
          style={{ color: "#b80049" }}
        >
          ✦
        </span>
      </span>
    ))}
  </>
)

const MarqueeBanner = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#f3f3f3" }}
    >
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
      <div className="py-4 overflow-hidden">
        <div
          className="flex items-center gap-8 whitespace-nowrap"
          style={{
            animation: "marquee-left 35s linear infinite",
            width: "max-content",
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* Tonal separator */}
      <div style={{ height: "1px", backgroundColor: "rgba(228,189,194,0.3)" }} />

      {/* Row 2 — scrolls right */}
      <div className="py-4 overflow-hidden">
        <div
          className="flex items-center gap-8 whitespace-nowrap"
          style={{
            animation: "marquee-right 35s linear infinite",
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
