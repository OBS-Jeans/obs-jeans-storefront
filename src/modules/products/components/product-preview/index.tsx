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
          className="relative overflow-hidden rounded-sm border-2 border-transparent transition-all duration-300 group-hover:border-obs-rose/30 group-hover:shadow-lg"
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
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(249,249,249,0.75)", backdropFilter: "blur(4px)" }}
          >
            <span
              className="px-5 py-2 text-sm uppercase tracking-widest rounded-full"
              style={{
                border: "1px solid rgba(184,0,73,0.5)",
                color: "#b80049",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
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
            className="obs-editorial font-serif font-semibold text-sm leading-tight"
            style={{ color: "#1a1c1c" }}
            data-testid="product-title"
          >
            {product.title}
          </h3>

          {/* Model / Handle */}
          <p
            className="obs-label-tag mt-1"
            style={{ color: "rgba(128,80,98,0.55)" }}
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
                  style={{ color: hasDiscount ? "#e2165f" : "#b80049" }}
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
