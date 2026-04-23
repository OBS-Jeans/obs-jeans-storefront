import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import CollectionSortBar from "@modules/collections/components/collection-sort-bar"
import { HttpTypes } from "@medusajs/types"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
  filters,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
  filters?: Record<string, string[]>
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>

      {/* Editorial collection header */}
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
          <span
            className="obs-label-tag inline-block mb-3"
            style={{ color: "#b80049" }}
          >
            Colección
          </span>

          <h1
            className="obs-editorial font-serif font-bold text-4xl small:text-5xl"
            style={{ color: "#1a1c1c" }}
          >
            {collection.title}
          </h1>

          <div
            className="mx-auto mt-4 h-px w-14"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />

          {collection.metadata?.description && (
            <p
              className="obs-editorial font-serif italic font-light text-base mt-4 max-w-xl mx-auto"
              style={{ color: "#805062" }}
            >
              {String(collection.metadata.description)}
            </p>
          )}
        </div>
      </div>

      {/* Sort bar + Products — full width */}
      <div className="content-container py-8">

        {/* Horizontal sort bar */}
        <CollectionSortBar sortBy={sort} />

        {/* Product grid — full width */}
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length ?? 12}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
            filters={filters}
          />
        </Suspense>
      </div>
    </div>
  )
}
