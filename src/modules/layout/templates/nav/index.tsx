import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { listCategories } from "@lib/data/categories"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavScrollWrapper from "./nav-scroll-wrapper"

export default async function Nav() {
  const [regions, locales, currentLocale, categories] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
    listCategories().catch(() => []),
  ])

  // Filter to top-level categories only, exclude seed data
  const seedHandles = ["shirts", "sweatshirts", "merch", "pants"]
  const navCategories = (categories || [])
    .filter((c) => !c.parent_category_id && !seedHandles.includes(c.handle))
    .slice(0, 5)

  return (
    <NavScrollWrapper>
      {/* Promotional Top Bar — rose palette */}
      <div
        className="py-1.5 text-center"
        style={{ backgroundColor: "#b80049" }}
      >
        <p
          className="text-xs tracking-wide"
          style={{ color: "rgba(255,255,255,0.9)", fontFamily: "Inter, sans-serif" }}
        >
          Envío gratis en compras mayores a $999
        </p>
      </div>

      {/* Main nav — glassmorphism per Floral Denim spec */}
      <header
        style={{
          height: "64px",
          backgroundColor: "rgba(249,249,249,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(228,189,194,0.2)",
        }}
      >
        <nav className="content-container flex items-center justify-between w-full h-full">
          {/* Left: Hamburger / SideMenu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu
                regions={regions}
                locales={locales}
                currentLocale={currentLocale}
                categories={navCategories}
              />
            </div>
          </div>

          {/* Center: OBS JEANS logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="relative h-8 w-auto hover:opacity-70 transition-opacity duration-300"
              data-testid="nav-store-link"
            >
              <Image
                src="/images/obs-logo-white.png"
                alt="OBS Jeans"
                width={180}
                height={40}
                className="h-7 w-auto object-contain"
                style={{ filter: "invert(1) sepia(1) saturate(2) hue-rotate(290deg) brightness(0.6)" }}
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Center: Category Links (Desktop) */}
          {navCategories.length > 0 && (
            <div className="hidden small:flex items-center gap-x-7 ml-8">
              {navCategories.map((category) => (
                <LocalizedClientLink
                  key={category.id}
                  href={`/categories/${category.handle}`}
                  className="text-xs uppercase tracking-wider transition-colors duration-200"
                  style={{
                    color: "#805062",
                    letterSpacing: "0.08em",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {category.name}
                </LocalizedClientLink>
              ))}
              <LocalizedClientLink
                href="/store"
                className="text-xs uppercase tracking-wider transition-colors duration-200"
                style={{
                  color: "#805062",
                  letterSpacing: "0.08em",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Todo
              </LocalizedClientLink>
            </div>
          )}

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-x-5 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-5 h-full">
              {/* Search */}
              <LocalizedClientLink
                className="transition-colors duration-200"
                href="/store"
                aria-label="Buscar"
                style={{ color: "#805062" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </LocalizedClientLink>

              {/* Account */}
              <LocalizedClientLink
                className="transition-colors duration-200"
                href="/account"
                data-testid="nav-account-link"
                style={{ color: "#805062" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </LocalizedClientLink>
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 text-sm transition-colors duration-200"
                  href="/cart"
                  data-testid="nav-cart-link"
                  style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
                >
                  Carrito (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </NavScrollWrapper>
  )
}
