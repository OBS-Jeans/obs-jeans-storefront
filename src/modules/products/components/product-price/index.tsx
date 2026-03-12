import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-obs-charcoal">
      <span
        className={clx("font-display text-2xl font-bold tracking-tight", {
          "text-obs-coral": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "Desde "}
        <span
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p className="text-sm mt-1">
            <span className="text-obs-stone">Antes: </span>
            <span
              className="line-through text-obs-stone"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
          <span className="inline-block mt-1 text-xs font-display font-semibold uppercase tracking-wider text-obs-cream bg-obs-coral px-2 py-0.5 w-fit">
            -{selectedPrice.percentage_diff}% OFF
          </span>
        </>
      )}
    </div>
  )
}
