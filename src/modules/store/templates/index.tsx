import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="bg-obs-sand min-h-screen">
      {/* Page Header */}
      <div className="bg-obs-charcoal py-12 small:py-16">
        <div className="content-container text-center">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-obs-gold/70 mb-3 block">
            OBS Jeans
          </span>
          <h1
            className="font-display text-3xl small:text-5xl font-bold text-obs-cream tracking-tight"
            data-testid="store-page-title"
          >
            Nuestra Tienda
          </h1>
          <div className="w-16 h-[2px] bg-obs-gold/50 mx-auto mt-4" />
        </div>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-8 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
