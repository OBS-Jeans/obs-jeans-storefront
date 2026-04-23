import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { extractFilterOptions, filterProducts } from "@lib/util/filter-products"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import ProductFilters from "@modules/store/components/product-filters"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  categoryIds,
  productsIds,
  countryCode,
  filters,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  categoryIds?: string[]
  productsIds?: string[]
  countryCode: string
  filters?: Record<string, string[]>
}) {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryIds && categoryIds.length > 1) {
    // Parent category: include all child category IDs
    queryParams["category_id"] = categoryIds
  } else if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at"
  }

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  let {
    response: { products: allProducts, count: totalCount },
  } = await listProductsWithSort({
    page: 1,
    queryParams: { ...queryParams, limit: 100 },
    sortBy,
    countryCode,
  })

  // Extract available filter options from ALL products (before filtering)
  const availableFilters = extractFilterOptions(allProducts)

  // Apply filters
  const hasActiveFilters = filters && Object.values(filters).some((v) => v.length > 0)
  const filteredProducts = hasActiveFilters
    ? filterProducts(allProducts, filters!)
    : allProducts

  // Paginate the filtered results
  const count = filteredProducts.length
  const offset = (page - 1) * PRODUCT_LIMIT
  const products = filteredProducts.slice(offset, offset + PRODUCT_LIMIT)
  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      {/* Filter bar */}
      {availableFilters.length > 0 && (
        <ProductFilters availableFilters={availableFilters} />
      )}

      {/* Results count when filtering */}
      {hasActiveFilters && (
        <p
          className="text-xs mb-4"
          style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
        >
          {count} producto{count !== 1 ? "s" : ""} encontrado{count !== 1 ? "s" : ""}
        </p>
      )}

      {products.length > 0 ? (
        <ul
          className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
          data-testid="products-list"
        >
          {products.map((p) => (
            <li key={p.id}>
              <ProductPreview product={p} region={region} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <p
            className="font-serif italic text-lg"
            style={{ color: "#805062" }}
          >
            No se encontraron productos con estos filtros
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
