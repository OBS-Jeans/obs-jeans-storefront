import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CategoryFilterBar from "@modules/categories/components/category-filter-bar"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  parentWithChildren,
  sortBy,
  page,
  countryCode,
  filters,
}: {
  category: HttpTypes.StoreProductCategory
  parentWithChildren?: HttpTypes.StoreProductCategory | null
  sortBy?: SortOptions
  page?: string
  countryCode: string
  filters?: Record<string, string[]>
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  // Collect all category IDs (parent + children) so parent pages show all products
  const allCategoryIds = [category.id]
  if (category.category_children?.length) {
    category.category_children.forEach((child) => {
      allCategoryIds.push(child.id)
    })
  }

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  // For subcategories: use the separately-fetched parent (with full children) for sibling chips
  const isChild = !!category.parent_category
  const resolvedParent = parentWithChildren || category.parent_category
  const parentForChips = isChild && resolvedParent ? resolvedParent : category
  const siblingChips = isChild && resolvedParent
    ? resolvedParent.category_children || []
    : category.category_children || []

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>

      {/* Editorial category header */}
      <div
        className="relative overflow-hidden py-14 small:py-18"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {/* Floral dot pattern */}
        <div className="absolute inset-0 obs-floral-pattern opacity-50 pointer-events-none" />

        {/* Rose radial glow */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(184,0,73,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="content-container text-center relative z-10">
          {/* Breadcrumbs */}
          {parents.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {parents.reverse().map((parent) => (
                <span
                  key={parent.id}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(128,80,98,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  <LocalizedClientLink
                    className="hover:text-obs-rose transition-colors duration-200"
                    href={`/categories/${parent.handle}`}
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span style={{ color: "rgba(228,189,194,0.8)" }}>/</span>
                </span>
              ))}
            </div>
          )}

          <span
            className="obs-label-tag inline-block mb-3"
            style={{ color: "#b80049" }}
          >
            Categoría
          </span>

          <h1
            className="obs-editorial font-serif font-bold text-4xl small:text-5xl"
            style={{ color: "#1a1c1c" }}
            data-testid="category-page-title"
          >
            {category.name}
          </h1>

          <div
            className="mx-auto mt-4 h-px w-14"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />

          {category.description && (
            <p
              className="obs-editorial font-serif italic font-light text-base mt-4 max-w-xl mx-auto"
              style={{ color: "#805062" }}
            >
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Filter bar + Products — full width */}
      <div className="content-container py-8" data-testid="category-container">

        {/* Horizontal filter bar: subcategories + sort */}
        <CategoryFilterBar
          category={category}
          parentCategory={parentForChips}
          chips={siblingChips}
          activeChildId={isChild ? category.id : undefined}
          sortBy={sort}
        />

        {/* Product grid — full width, no sidebar */}
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={category.products?.length ?? 12}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            categoryIds={allCategoryIds}
            countryCode={countryCode}
            filters={filters}
          />
        </Suspense>
      </div>
    </div>
  )
}
