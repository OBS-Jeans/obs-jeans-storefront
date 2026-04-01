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
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>

      {/* Editorial page header */}
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
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            OBS Jeans
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-4xl small:text-6xl"
            style={{ color: "#1a1c1c" }}
            data-testid="store-page-title"
          >
            Nuestra{" "}
            <em className="italic font-light" style={{ color: "#b80049" }}>
              Tienda
            </em>
          </h1>
          <div
            className="mx-auto mt-5 h-px w-14"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
        </div>
      </div>

      {/* Products area */}
      <div
        className="flex flex-col small:flex-row small:items-start py-10 content-container gap-8"
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
