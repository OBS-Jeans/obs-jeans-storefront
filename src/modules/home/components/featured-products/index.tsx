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
  return (
    <>
      {/* Featured Products Section */}
      <section className="w-full">
        {/* Section Title */}
        <ScrollReveal className="content-container pt-16 pb-4 text-center">
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.15em]"
            style={{ color: "#1C1917" }}
          >
            Nuestra Colección
          </h2>
          <div
            className="mx-auto mt-4 h-[2px] w-20"
            style={{ backgroundColor: "#D4A853" }}
          />
        </ScrollReveal>

        {/* Product Rails */}
        {collections.map((collection) => (
          <li key={collection.id} className="list-none">
            <ProductRail collection={collection} region={region} />
          </li>
        ))}
      </section>

      {/* Brand Story Band */}
      <section
        className="w-full py-20"
        style={{ backgroundColor: "#F5F0EB" }}
      >
        <ScrollReveal className="content-container text-center">
          <p
            className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-relaxed"
            style={{ color: "#1C1917" }}
          >
            Desde Jalisco para todo México
          </p>
          <p
            className="mt-6 font-serif text-base md:text-lg tracking-wide"
            style={{ color: "#78716C" }}
          >
            Jeans de fábrica con tallas inclusivas del 1 al 25
          </p>
          <div
            className="mx-auto mt-8 h-[2px] w-12"
            style={{ backgroundColor: "#D4A853" }}
          />
        </ScrollReveal>
      </section>
    </>
  )
}
