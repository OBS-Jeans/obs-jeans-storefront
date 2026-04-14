import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

import ProductPreview from "@modules/products/components/product-preview"
import ScrollReveal from "@modules/common/components/scroll-reveal"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StaggerContainer, StaggerItem } from "@modules/common/components/stagger-children"

export default async function ProductRail({
  collection,
  region,
  limit = 12,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
  limit?: number
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
      limit,
    },
  })

  if (!pricedProducts || pricedProducts.length === 0) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-20">
      {/* Section Header */}
      <ScrollReveal direction="left">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span
              className="obs-label-tag block mb-2"
              style={{ color: "#b80049" }}
            >
              Colección
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-2xl md:text-3xl leading-tight"
              style={{ color: "#1a1c1c" }}
            >
              {collection.title}
            </h2>
            <div
              className="mt-3 h-[2px] w-16"
              style={{
                background: "linear-gradient(90deg, #b80049, #e2165f, transparent)",
              }}
            />
          </div>
          <LocalizedClientLink
            href={`/collections/${collection.handle}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group"
            style={{
              color: "#b80049",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Ver Todo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </LocalizedClientLink>
        </div>
      </ScrollReveal>

      {/* Product Grid */}
      <StaggerContainer
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16"
        staggerDelay={0.08}
      >
        {pricedProducts.map((product) => (
          <StaggerItem key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
