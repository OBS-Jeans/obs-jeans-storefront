"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

export default function SearchInput({ query }: { query?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [value, setValue] = useState(query || "")
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Focus input when arriving with ?search=true or when query is empty (clicked search icon)
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (params.get("search") === "true") {
      inputRef.current?.focus()
      // Clean up the search=true param from URL
      params.delete("search")
      const qs = params.toString()
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const updateQuery = useCallback(
    (newValue: string) => {
      const params = new URLSearchParams(searchParams)
      if (newValue.trim()) {
        params.set("q", newValue.trim())
      } else {
        params.delete("q")
      }
      // Reset to page 1 on new search
      params.delete("page")
      const qs = params.toString()
      router.push(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false })
    },
    [searchParams, router, pathname]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      updateQuery(newValue)
    }, 400)
  }

  const handleClear = () => {
    setValue("")
    updateQuery("")
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      updateQuery(value)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: "#b80049" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar productos..."
        className="w-full pl-9 pr-9 py-2.5 text-sm rounded-full outline-none transition-all duration-200"
        style={{
          color: "#1a1c1c",
          fontFamily: "Inter, sans-serif",
          backgroundColor: "white",
          border: "1px solid rgba(228,189,194,0.35)",
          letterSpacing: "0.01em",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(184,0,73,0.3)"
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,0,73,0.06)"
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(228,189,194,0.35)"
          e.currentTarget.style.boxShadow = "none"
        }}
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-150"
          style={{ color: "#805062" }}
          aria-label="Limpiar búsqueda"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
