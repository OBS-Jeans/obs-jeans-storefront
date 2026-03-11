import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavScrollWrapper from "./nav-scroll-wrapper"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <NavScrollWrapper>
      {/* Promotional Top Bar */}
      <div className="py-1.5 bg-obs-denim text-center">
        <p className="text-xs text-obs-cream/80 font-display tracking-wide">
          Envío gratis en compras mayores a $999
        </p>
      </div>

      <header className="relative h-16 mx-auto bg-obs-charcoal">
        <nav className="content-container flex items-center justify-between w-full h-full">
          {/* Left: Hamburger / SideMenu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          {/* Center: OBS JEANS logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="relative h-8 w-auto hover:opacity-80 transition-opacity duration-300"
              data-testid="nav-store-link"
            >
              <Image
                src="/images/obs-logo-white.png"
                alt="OBS Jeans"
                width={180}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Center: Category Links (Desktop) */}
          <div className="hidden small:flex items-center gap-x-6 ml-8">
            <LocalizedClientLink
              href="/store"
              className="font-display text-xs uppercase tracking-wider text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
            >
              Hombre
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store"
              className="font-display text-xs uppercase tracking-wider text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
            >
              Mujer
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store"
              className="font-display text-xs uppercase tracking-wider text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
            >
              Niños
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store"
              className="font-display text-xs uppercase tracking-wider text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
            >
              Ofertas
            </LocalizedClientLink>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {/* Search icon */}
              <LocalizedClientLink
                className="text-obs-cream/70 hover:text-obs-gold transition-colors duration-200"
                href="/store"
                aria-label="Buscar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </LocalizedClientLink>
              {/* Account link */}
              <LocalizedClientLink
                className="text-obs-cream/70 hover:text-obs-gold transition-colors duration-200 font-display text-sm tracking-wide"
                href="/account"
                data-testid="nav-account-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
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
                  className="text-obs-cream/70 hover:text-obs-gold flex gap-2 font-display text-sm tracking-wide transition-colors duration-200"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
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
