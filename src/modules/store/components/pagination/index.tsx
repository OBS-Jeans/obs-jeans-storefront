"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Pagination({
  page,
  totalPages,
  "data-testid": dataTestid,
}: {
  page: number
  totalPages: number
  "data-testid"?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const arrayRange = (start: number, stop: number) =>
    Array.from({ length: stop - start + 1 }, (_, index) => start + index)

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const renderPageButton = (p: number, label: string | number, isCurrent: boolean) => (
    <button
      key={p}
      disabled={isCurrent}
      onClick={() => handlePageChange(p)}
      className="w-9 h-9 flex items-center justify-center rounded-full text-sm transition-all duration-200"
      style={{
        fontFamily: "Inter, sans-serif",
        background: isCurrent
          ? "linear-gradient(135deg, #b80049 0%, #e2165f 100%)"
          : "transparent",
        color: isCurrent ? "white" : "#805062",
        border: isCurrent ? "none" : "1px solid rgba(228,189,194,0.35)",
        fontWeight: isCurrent ? 600 : 400,
      }}
    >
      {label}
    </button>
  )

  const renderEllipsis = (key: string) => (
    <span
      key={key}
      className="w-9 h-9 flex items-center justify-center text-sm"
      style={{ color: "rgba(128,80,98,0.4)", fontFamily: "Inter, sans-serif" }}
    >
      …
    </span>
  )

  const renderPageButtons = () => {
    const buttons = []

    if (totalPages <= 7) {
      buttons.push(
        ...arrayRange(1, totalPages).map((p) => renderPageButton(p, p, p === page))
      )
    } else {
      if (page <= 4) {
        buttons.push(...arrayRange(1, 5).map((p) => renderPageButton(p, p, p === page)))
        buttons.push(renderEllipsis("e1"))
        buttons.push(renderPageButton(totalPages, totalPages, totalPages === page))
      } else if (page >= totalPages - 3) {
        buttons.push(renderPageButton(1, 1, 1 === page))
        buttons.push(renderEllipsis("e2"))
        buttons.push(
          ...arrayRange(totalPages - 4, totalPages).map((p) =>
            renderPageButton(p, p, p === page)
          )
        )
      } else {
        buttons.push(renderPageButton(1, 1, 1 === page))
        buttons.push(renderEllipsis("e3"))
        buttons.push(
          ...arrayRange(page - 1, page + 1).map((p) =>
            renderPageButton(p, p, p === page)
          )
        )
        buttons.push(renderEllipsis("e4"))
        buttons.push(renderPageButton(totalPages, totalPages, totalPages === page))
      }
    }

    return buttons
  }

  return (
    <div className="flex justify-center w-full mt-16 mb-4">
      <div className="flex gap-2 items-center" data-testid={dataTestid}>
        {renderPageButtons()}
      </div>
    </div>
  )
}
