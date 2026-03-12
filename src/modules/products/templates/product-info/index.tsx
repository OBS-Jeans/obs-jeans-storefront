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
            className="font-display text-xs uppercase tracking-[0.15em] text-obs-gold hover:text-obs-gold/70 transition-colors duration-200"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="font-display text-3xl leading-10 text-obs-charcoal tracking-tight"
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        <div className="w-10 h-[2px] bg-obs-gold/40" />

        <Text
          className="font-serif text-medium text-obs-warm whitespace-pre-line leading-relaxed"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
