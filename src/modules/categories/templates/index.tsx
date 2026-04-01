import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>

      {/* Editorial category header */}
      <div
        className="relative overflow-hidden py-16 small:py-20"
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
            <div className="flex items-center justify-center gap-2 mb-5">
              {parents.reverse().map((parent) => (
                <span
                  key={parent.id}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(128,80,98,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  <LocalizedClientLink
                    className="hover:text-obs-rose transition-colors duration-200"
                    href={`/categories/${parent.handle}`}
                    data-testid="sort-by-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span style={{ color: "rgba(228,189,194,0.8)" }}>/</span>
                </span>
              ))}
            </div>
          )}

          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Categoría
          </span>

          <h1
            className="obs-editorial font-serif font-bold text-4xl small:text-6xl"
            style={{ color: "#1a1c1c" }}
            data-testid="category-page-title"
          >
            {category.name}
          </h1>

          <div
            className="mx-auto mt-5 h-px w-14"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />

          {category.description && (
            <p
              className="obs-editorial font-serif italic font-light text-base mt-5 max-w-xl mx-auto"
              style={{ color: "#805062" }}
            >
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Products area */}
      <div
        className="flex flex-col small:flex-row small:items-start py-10 content-container gap-8"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} data-testid="sort-by-container" />

        <div className="w-full">
          {/* Subcategory chips */}
          {category.category_children && category.category_children.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="inline-flex items-center text-xs rounded-full px-4 py-2 transition-all duration-200 hover:opacity-80"
                  style={{
                    color: "#805062",
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: "white",
                    border: "1px solid rgba(228,189,194,0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {c.name}
                </LocalizedClientLink>
              ))}
            </div>
          )}

          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={category.products?.length ?? 8}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
