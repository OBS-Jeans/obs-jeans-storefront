"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState, useRef, useEffect } from "react"

export type FilterOption = {
  title: string
  paramKey: string
  values: string[]
}

export default function ProductFilters({
  availableFilters,
}: {
  availableFilters: FilterOption[]
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const getSelectedValues = (paramKey: string): string[] => {
    const val = searchParams.get(paramKey)
    return val ? val.split(",") : []
  }

  const toggleFilter = useCallback(
    (paramKey: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      const current = params.get(paramKey)
      const values = current ? current.split(",") : []

      const idx = values.indexOf(value)
      if (idx >= 0) {
        values.splice(idx, 1)
      } else {
        values.push(value)
      }

      if (values.length > 0) {
        params.set(paramKey, values.join(","))
      } else {
        params.delete(paramKey)
      }

      // Reset to page 1 when filtering
      params.delete("page")
      router.push(`${pathname}?${params.toString()}`)
    },
    [searchParams, pathname, router]
  )

  const clearFilter = useCallback(
    (paramKey: string) => {
      const params = new URLSearchParams(searchParams)
      params.delete(paramKey)
      params.delete("page")
      router.push(`${pathname}?${params.toString()}`)
    },
    [searchParams, pathname, router]
  )

  const clearAllFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    availableFilters.forEach((f) => params.delete(f.paramKey))
    params.delete("page")
    router.push(`${pathname}?${params.toString()}`)
  }, [searchParams, pathname, router, availableFilters])

  const hasAnyFilter = availableFilters.some(
    (f) => getSelectedValues(f.paramKey).length > 0
  )

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  if (availableFilters.length === 0) return null

  return (
    <div ref={containerRef} className="flex flex-wrap items-center gap-2 mb-6">
      <span
        className="text-xs font-medium mr-1"
        style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
      >
        Filtrar:
      </span>

      {availableFilters.map((filter) => {
        const selected = getSelectedValues(filter.paramKey)
        const isOpen = openDropdown === filter.paramKey
        const hasSelection = selected.length > 0

        return (
          <div key={filter.paramKey} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(isOpen ? null : filter.paramKey)
              }
              className="inline-flex items-center gap-1.5 text-xs rounded-full px-3.5 py-1.5 transition-all duration-200"
              style={{
                color: hasSelection ? "#b80049" : "#805062",
                fontFamily: "Inter, sans-serif",
                backgroundColor: hasSelection
                  ? "rgba(184,0,73,0.06)"
                  : "white",
                border: `1px solid ${
                  hasSelection
                    ? "rgba(184,0,73,0.25)"
                    : "rgba(228,189,194,0.35)"
                }`,
                fontWeight: hasSelection ? 600 : 400,
                letterSpacing: "0.03em",
              }}
            >
              {filter.title}
              {hasSelection && (
                <span
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] text-white font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #b80049, #e2165f)",
                  }}
                >
                  {selected.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 transition-transform duration-200"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute left-0 top-full mt-2 rounded-xl py-2 min-w-[180px] max-h-[280px] overflow-y-auto z-40"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(228,189,194,0.25)",
                  boxShadow: "0 12px 32px rgba(128,80,98,0.12)",
                }}
              >
                {hasSelection && (
                  <button
                    onClick={() => {
                      clearFilter(filter.paramKey)
                      setOpenDropdown(null)
                    }}
                    className="w-full text-left px-4 py-2 text-[11px] transition-colors duration-150 border-b"
                    style={{
                      color: "#b80049",
                      fontFamily: "Inter, sans-serif",
                      borderColor: "rgba(228,189,194,0.2)",
                    }}
                  >
                    Limpiar filtro
                  </button>
                )}
                {filter.values.map((value) => {
                  const isSelected = selected.includes(value)
                  return (
                    <button
                      key={value}
                      onClick={() => toggleFilter(filter.paramKey, value)}
                      className="w-full text-left px-4 py-2 text-xs transition-colors duration-150 flex items-center gap-2"
                      style={{
                        color: isSelected ? "#b80049" : "#805062",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: isSelected ? 600 : 400,
                        backgroundColor: isSelected
                          ? "rgba(184,0,73,0.04)"
                          : "transparent",
                      }}
                    >
                      <span
                        className="w-4 h-4 rounded border flex items-center justify-center flex-shrink-0"
                        style={{
                          borderColor: isSelected
                            ? "#b80049"
                            : "rgba(228,189,194,0.5)",
                          backgroundColor: isSelected
                            ? "#b80049"
                            : "transparent",
                        }}
                      >
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="white"
                            className="w-2.5 h-2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        )}
                      </span>
                      {value}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      {/* Clear all */}
      {hasAnyFilter && (
        <button
          onClick={clearAllFilters}
          className="text-[11px] underline transition-colors duration-200 ml-1"
          style={{ color: "#b80049", fontFamily: "Inter, sans-serif" }}
        >
          Limpiar todos
        </button>
      )}
    </div>
  )
}
