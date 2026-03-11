import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2
            className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[0.1em]"
            style={{ color: "#1C1917" }}
          >
            {collection.title}
          </h2>
          <div
            className="mt-3 h-[2px] w-16"
            style={{ backgroundColor: "#D4A853" }}
          />
        </div>
        <a
          href={`/collections/${collection.handle}`}
          className="font-display text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:underline underline-offset-4"
          style={{ color: "#D4A853" }}
        >
          Ver Todo &rarr;
        </a>
      </div>

      {/* Product Grid with staggered animation */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
        {pricedProducts &&
          pricedProducts.map((product, index) => (
            <li
              key={product.id}
              className="animate-[fadeInUp_0.5s_ease-out_both]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
