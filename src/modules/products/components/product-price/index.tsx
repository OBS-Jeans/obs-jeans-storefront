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

  const isOnSale = selectedPrice.price_type === "sale"

  return (
    <div className="flex flex-col">
      <span
        className="obs-editorial font-serif font-bold text-2xl tracking-tight"
        style={{ color: isOnSale ? "#e2165f" : "#b80049" }}
      >
        {!variant && (
          <span
            className="obs-label-tag mr-1"
            style={{ color: "rgba(128,80,98,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Desde{" "}
          </span>
        )}
        <span
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </span>
      {isOnSale && (
        <>
          <p className="text-sm mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
            <span style={{ color: "rgba(128,80,98,0.6)" }}>Antes: </span>
            <span
              className="line-through"
              style={{ color: "rgba(128,80,98,0.5)" }}
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
          <span
            className="inline-block mt-1 text-xs uppercase tracking-wider text-white px-3 py-0.5 w-fit rounded-full"
            style={{
              background: "linear-gradient(135deg, #b80049 0%, #e2165f 100%)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "10px",
            }}
          >
            -{selectedPrice.percentage_diff}% OFF
          </span>
        </>
      )}
    </div>
  )
}
