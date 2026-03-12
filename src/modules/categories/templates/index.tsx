import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
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
    <div className="bg-obs-sand min-h-screen">
      {/* Category Header */}
      <div className="bg-obs-charcoal py-12 small:py-16">
        <div className="content-container text-center">
          {/* Breadcrumbs */}
          {parents.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {parents.reverse().map((parent) => (
                <span key={parent.id} className="text-obs-cream/50 text-sm">
                  <LocalizedClientLink
                    className="hover:text-obs-gold transition-colors duration-200 font-display"
                    href={`/categories/${parent.handle}`}
                    data-testid="sort-by-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span className="ml-2">/</span>
                </span>
              ))}
            </div>
          )}
          <span className="font-display text-xs uppercase tracking-[0.25em] text-obs-gold/70 mb-3 block">
            Categor&iacute;a
          </span>
          <h1
            className="font-display text-3xl small:text-5xl font-bold text-obs-cream tracking-tight"
            data-testid="category-page-title"
          >
            {category.name}
          </h1>
          <div className="w-16 h-[2px] bg-obs-gold/50 mx-auto mt-4" />
          {category.description && (
            <p className="font-serif italic text-obs-stone text-base mt-4 max-w-xl mx-auto">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-8 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} data-testid="sort-by-container" />
        <div className="w-full">
          {category.category_children && category.category_children.length > 0 && (
            <div className="mb-8">
              <ul className="flex flex-wrap gap-3">
                {category.category_children?.map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/categories/${c.handle}`}
                      className="inline-block font-display text-sm uppercase tracking-wider text-obs-charcoal border border-obs-charcoal/20 px-4 py-2 hover:bg-obs-charcoal hover:text-obs-cream transition-colors duration-200"
                    >
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
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
