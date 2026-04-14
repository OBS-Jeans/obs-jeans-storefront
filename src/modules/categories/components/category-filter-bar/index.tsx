"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState, useRef, useEffect } from "react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const sortOptions: { value: SortOptions; label: string }[] = [
  { value: "created_at", label: "Más Recientes" },
  { value: "price_asc", label: "Precio: Menor a Mayor" },
  { value: "price_desc", label: "Precio: Mayor a Menor" },
]

export default function CategoryFilterBar({
  category,
  parentCategory,
  chips,
  activeChildId,
  sortBy,
}: {
  category: HttpTypes.StoreProductCategory
  parentCategory: HttpTypes.StoreProductCategory
  chips: HttpTypes.StoreProductCategory[]
  activeChildId?: string
  sortBy: SortOptions
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeChipRef = useRef<HTMLAnchorElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const hasChips = chips.length > 0

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleSort = (value: SortOptions) => {
    const query = createQueryString("sortBy", value)
    router.push(`${pathname}?${query}`)
    setSortOpen(false)
  }

  const currentSortLabel = sortOptions.find((o) => o.value === sortBy)?.label || "Ordenar"

  // Check scroll overflow state
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" })
  }

  // Initialize scroll state + scroll active chip into view
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // Scroll active chip into view on mount
    if (activeChipRef.current) {
      const chip = activeChipRef.current
      const container = el
      const chipLeft = chip.offsetLeft - container.offsetLeft
      const chipRight = chipLeft + chip.offsetWidth
      const containerRight = container.scrollLeft + container.clientWidth

      if (chipLeft < container.scrollLeft || chipRight > containerRight) {
        container.scrollTo({
          left: chipLeft - 40,
          behavior: "smooth",
        })
      }
    }

    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  // Close sort dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      className="sticky top-[88px] z-30 -mx-6 px-6 mb-8"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div
        className="py-4"
        style={{ borderBottom: "1px solid rgba(228,189,194,0.25)" }}
      >
        <div className="flex items-center justify-between gap-4">

          {/* Left: Subcategory/sibling chips with scroll arrows */}
          <div className="flex-1 min-w-0 relative">
            {hasChips ? (
              <>
                {/* Left fade + arrow */}
                {canScrollLeft && (
                  <div
                    className="absolute left-0 top-0 bottom-0 z-10 flex items-center"
                    style={{ pointerEvents: "none" }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-12"
                      style={{
                        background: "linear-gradient(to right, #f9f9f9 30%, transparent)",
                      }}
                    />
                    <button
                      onClick={() => scroll("left")}
                      className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        pointerEvents: "auto",
                        backgroundColor: "white",
                        border: "1px solid rgba(228,189,194,0.4)",
                        boxShadow: "0 2px 8px rgba(128,80,98,0.1)",
                      }}
                      aria-label="Desplazar categorías a la izquierda"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#b80049" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Scrollable chips */}
                <div
                  ref={scrollRef}
                  className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
                >
                  {/* "Todos" chip — links to parent category */}
                  <LocalizedClientLink
                    href={`/categories/${parentCategory.handle}`}
                    className="flex-shrink-0 inline-flex items-center text-xs rounded-full px-4 py-2 transition-all duration-200"
                    style={
                      !activeChildId
                        ? {
                            color: "#ffffff",
                            fontFamily: "Inter, sans-serif",
                            background: "linear-gradient(135deg, #b80049, #e2165f)",
                            letterSpacing: "0.03em",
                            fontWeight: 500,
                          }
                        : {
                            color: "#805062",
                            fontFamily: "Inter, sans-serif",
                            backgroundColor: "white",
                            border: "1px solid rgba(228,189,194,0.35)",
                            letterSpacing: "0.03em",
                          }
                    }
                  >
                    Todos
                  </LocalizedClientLink>

                  {chips.map((child) => {
                    const isActive = child.id === activeChildId
                    return (
                      <LocalizedClientLink
                        key={child.id}
                        ref={isActive ? activeChipRef : undefined}
                        href={`/categories/${child.handle}`}
                        className="flex-shrink-0 inline-flex items-center text-xs rounded-full px-4 py-2 transition-all duration-200"
                        style={
                          isActive
                            ? {
                                color: "#ffffff",
                                fontFamily: "Inter, sans-serif",
                                background: "linear-gradient(135deg, #b80049, #e2165f)",
                                letterSpacing: "0.03em",
                                fontWeight: 500,
                              }
                            : {
                                color: "#805062",
                                fontFamily: "Inter, sans-serif",
                                backgroundColor: "white",
                                border: "1px solid rgba(228,189,194,0.35)",
                                letterSpacing: "0.03em",
                              }
                        }
                      >
                        {child.name}
                      </LocalizedClientLink>
                    )
                  })}
                </div>

                {/* Right fade + arrow */}
                {canScrollRight && (
                  <div
                    className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end"
                    style={{ pointerEvents: "none" }}
                  >
                    <div
                      className="absolute inset-y-0 right-0 w-12"
                      style={{
                        background: "linear-gradient(to left, #f9f9f9 30%, transparent)",
                      }}
                    />
                    <button
                      onClick={() => scroll("right")}
                      className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        pointerEvents: "auto",
                        backgroundColor: "white",
                        border: "1px solid rgba(228,189,194,0.4)",
                        boxShadow: "0 2px 8px rgba(128,80,98,0.1)",
                      }}
                      aria-label="Desplazar categorías a la derecha"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#b80049" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <span
                className="text-xs font-medium"
                style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
              >
                {category.name}
              </span>
            )}
          </div>

          {/* Right: Sort dropdown */}
          <div ref={sortRef} className="relative flex-shrink-0">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="inline-flex items-center gap-2 text-xs rounded-full px-4 py-2 transition-all duration-200"
              style={{
                color: "#805062",
                fontFamily: "Inter, sans-serif",
                backgroundColor: "white",
                border: `1px solid ${sortOpen ? "rgba(184,0,73,0.3)" : "rgba(228,189,194,0.35)"}`,
                letterSpacing: "0.03em",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3.5 h-3.5"
                style={{ color: "#b80049" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
              <span className="hidden small:inline">{currentSortLabel}</span>
              <span className="small:hidden">Ordenar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 transition-transform duration-200"
                style={{ transform: sortOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {sortOpen && (
              <div
                className="absolute right-0 top-full mt-2 rounded-xl py-2 min-w-[200px] z-40"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(228,189,194,0.25)",
                  boxShadow: "0 12px 32px rgba(128,80,98,0.12)",
                }}
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSort(option.value)}
                    className="w-full text-left px-4 py-2.5 text-xs transition-colors duration-150 flex items-center justify-between"
                    style={{
                      color: sortBy === option.value ? "#b80049" : "#805062",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: sortBy === option.value ? 600 : 400,
                      backgroundColor: sortBy === option.value ? "rgba(184,0,73,0.04)" : "transparent",
                    }}
                  >
                    {option.label}
                    {sortBy === option.value && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
