import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import ScrollReveal from "@modules/common/components/scroll-reveal"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  // Show the "Destacados" collection curated from Medusa Admin.
  // Fallback to "Moda" (seasonal), then first collection if neither exists.
  const featuredCollection =
    collections.find((c) => c.handle === "destacados") ||
    collections.find((c) => c.handle === "moda") ||
    collections[0]

  if (!featuredCollection) {
    return null
  }

  return (
    <>
      {/* Featured Products Section */}
      <section className="w-full" style={{ backgroundColor: "#f9f9f9" }}>
        {/* Section Title */}
        <ScrollReveal className="content-container pt-20 pb-6 text-center">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Lo Más Nuevo
          </span>
          <h2
            className="obs-editorial font-serif font-bold text-[2.4rem] md:text-5xl leading-tight"
            style={{ color: "#1a1c1c" }}
          >
            Tendencia de{" "}
            <em
              className="italic font-light"
              style={{ color: "#b80049" }}
            >
              Temporada
            </em>
          </h2>
          <p
            className="mt-4 text-sm max-w-md mx-auto"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
          >
            Los modelos más nuevos directo de nuestra fábrica en Jalisco
          </p>
          <div
            className="mx-auto mt-5 h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
        </ScrollReveal>

        {/* Single featured collection rail — limited to 8 products */}
        <ProductRail collection={featuredCollection} region={region} limit={8} />
      </section>

      {/* Brand Story Band */}
      <section
        className="w-full py-24 relative overflow-hidden"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {/* Floral pattern */}
        <div className="absolute inset-0 obs-floral-pattern opacity-40 pointer-events-none" />

        <ScrollReveal className="content-container text-center relative z-10">
          <p
            className="obs-editorial font-serif italic font-light text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] leading-tight"
            style={{ color: "#1a1c1c" }}
          >
            Desde{" "}
            <span style={{ color: "#b80049" }}>Jalisco</span>{" "}
            para todo México
          </p>
          <p
            className="mt-5 text-sm tracking-wide"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
          >
            Jeans de fábrica con tallas inclusivas del 1 al 25
          </p>
          <div
            className="mx-auto mt-8 h-0.5 w-10 rounded-full"
            style={{
              background: "linear-gradient(90deg, #b80049, #e2165f)",
            }}
          />
        </ScrollReveal>
      </section>
    </>
  )
}
