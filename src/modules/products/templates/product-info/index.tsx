import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="obs-label-tag transition-colors duration-200"
            style={{ color: "#b80049" }}
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="obs-editorial font-serif font-bold text-3xl leading-tight tracking-tight"
          style={{ color: "#1a1c1c" }}
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        <div
          className="w-10 h-[2px]"
          style={{ background: "linear-gradient(90deg, #b80049, transparent)" }}
        />

        {product.description && (
          <Text
            className="obs-editorial font-serif italic font-light text-base leading-relaxed"
            style={{ color: "#805062" }}
            data-testid="product-description"
          >
            {product.description}
          </Text>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
