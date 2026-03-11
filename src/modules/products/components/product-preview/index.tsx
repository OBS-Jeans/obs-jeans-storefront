import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  const hasDiscount = cheapestPrice?.price_type === "sale"

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="obs-product-card transition-all duration-300 ease-out group-hover:scale-[1.02]"
      >
        {/* Image Container */}
        <div
          className="relative overflow-hidden rounded-sm border-2 border-transparent transition-all duration-300 group-hover:border-[#D4A853]/40 group-hover:shadow-lg"
        >
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          {/* Sale Badge */}
          {hasDiscount && (
            <div
              className="absolute top-3 left-3 px-3 py-1 text-xs font-display font-semibold uppercase tracking-wider text-white rounded-sm"
              style={{ backgroundColor: "#E85A4F" }}
            >
              Oferta
            </div>
          )}
          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-obs-charcoal/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="border border-obs-cream/60 px-4 py-2 font-display text-sm text-obs-cream uppercase tracking-widest">
              Ver Detalle
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div
          className="mt-4 p-3 rounded-b-sm transition-colors duration-300 group-hover:bg-[#FAF8F5]"
        >
          {/* Title */}
          <h3
            className="font-display text-sm font-semibold leading-tight"
            style={{ color: "#1C1917" }}
            data-testid="product-title"
          >
            {product.title}
          </h3>

          {/* Model / Handle */}
          <p
            className="mt-1 text-xs uppercase tracking-[0.1em]"
            style={{ color: "#78716C" }}
          >
            {product.handle?.replace(/-/g, " ")}
          </p>

          {/* Variant count */}
          {product.variants && product.variants.length > 0 && (
            <p className="mt-1 text-xs text-obs-stone/70">
              {product.variants.length} tallas disponibles
            </p>
          )}

          {/* Price */}
          <div className="mt-3 flex items-center gap-x-2">
            {cheapestPrice && (
              <>
                {hasDiscount && (
                  <span
                    className="text-sm line-through"
                    style={{ color: "#78716C" }}
                    data-testid="original-price"
                  >
                    {cheapestPrice.original_price}
                  </span>
                )}
                <span
                  className="font-display text-base font-bold"
                  style={{ color: hasDiscount ? "#E85A4F" : "#D4A853" }}
                  data-testid="price"
                >
                  {cheapestPrice.calculated_price}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
