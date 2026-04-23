import { HttpTypes } from "@medusajs/types"
import { FilterOption } from "@modules/store/components/product-filters"

/**
 * Extract available filter options from a list of products.
 * Groups variant options by option title (e.g., "Talla", "Color").
 */
export function extractFilterOptions(
  products: HttpTypes.StoreProduct[]
): FilterOption[] {
  const optionMap = new Map<string, { title: string; values: Set<string> }>()

  for (const product of products) {
    if (!product.options) continue
    for (const option of product.options) {
      if (!option.title || !option.values) continue

      const key = option.title.toLowerCase()
      if (!optionMap.has(key)) {
        optionMap.set(key, { title: option.title, values: new Set() })
      }
      const entry = optionMap.get(key)!
      for (const val of option.values) {
        if (val.value) entry.values.add(val.value)
      }
    }
  }

  return Array.from(optionMap.entries()).map(([key, { title, values }]) => {
    const valuesArray = Array.from(values)

    // Smart sort: if values look numeric, sort numerically
    const allNumeric = valuesArray.every((v) => !isNaN(Number(v)))
    if (allNumeric) {
      valuesArray.sort((a, b) => Number(a) - Number(b))
    } else {
      valuesArray.sort((a, b) => a.localeCompare(b, "es"))
    }

    return {
      title,
      paramKey: key,
      values: valuesArray,
    }
  })
}

/**
 * Filter products by selected option values.
 * A product matches if it has at least one variant with all selected options.
 */
export function filterProducts(
  products: HttpTypes.StoreProduct[],
  filters: Record<string, string[]>
): HttpTypes.StoreProduct[] {
  const activeFilters = Object.entries(filters).filter(
    ([, values]) => values.length > 0
  )

  if (activeFilters.length === 0) return products

  return products.filter((product) => {
    if (!product.variants || !product.options) return false

    // Build a map: option_id → option_title (lowercase)
    const optionIdToTitle = new Map<string, string>()
    for (const opt of product.options) {
      if (opt.id && opt.title) {
        optionIdToTitle.set(opt.id, opt.title.toLowerCase())
      }
    }

    // A product passes if at least one variant matches ALL active filters
    return product.variants.some((variant: any) => {
      if (!variant.options) return false

      return activeFilters.every(([filterKey, selectedValues]) => {
        return variant.options.some(
          (varOpt: any) =>
            optionIdToTitle.get(varOpt.option_id) === filterKey &&
            selectedValues.includes(varOpt.value)
        )
      })
    })
  })
}
