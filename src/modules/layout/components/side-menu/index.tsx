"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { HttpTypes } from "@medusajs/types"
import { Locale } from "@lib/data/locales"

const SideMenuFixedItems = {
  Inicio: "/",
  Tienda: "/store",
  "Mi Cuenta": "/account",
  Carrito: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
  categories?: { id: string; name: string; handle: string }[]
}

const SideMenu = ({ regions, locales, currentLocale, categories }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none text-obs-cream/70 hover:text-obs-gold"
                >
                  {/* Hamburger icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/40 pointer-events-auto backdrop-blur-sm"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[51] inset-x-0 text-sm m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-obs-charcoal/95 backdrop-blur-xl rounded-rounded justify-between p-8 border border-obs-warm/10"
                  >
                    {/* Top: Close button + Branding */}
                    <div>
                      <div className="flex items-center justify-between mb-12">
                        <img
                          src="/images/obs-logo-white.png"
                          alt="OBS Jeans"
                          className="h-7 w-auto object-contain"
                        />
                        <button
                          data-testid="close-menu-button"
                          onClick={close}
                          className="text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
                        >
                          <XMark />
                        </button>
                      </div>
                    </div>

                    {/* Menu links */}
                    <ul className="flex flex-col gap-2 items-start justify-start flex-1">
                      {Object.entries(SideMenuFixedItems).map(([name, href]) => (
                        <li key={name} className="w-full">
                          <LocalizedClientLink
                            href={href}
                            className="group flex items-center font-display text-2xl small:text-3xl leading-10 text-obs-cream/80 hover:text-obs-gold transition-all duration-200 py-2 border-l-2 border-transparent hover:border-obs-gold pl-4"
                            onClick={close}
                            data-testid={`${name.toLowerCase().replace(/\s+/g, "-")}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}

                      {/* Dynamic categories */}
                      {categories && categories.length > 0 && (
                        <>
                          <li className="w-full mt-4 mb-2 pl-4">
                            <span className="font-display text-xs uppercase tracking-[0.2em] text-obs-gold/60">
                              Categorías
                            </span>
                          </li>
                          {categories.map((cat) => (
                            <li key={cat.id} className="w-full">
                              <LocalizedClientLink
                                href={`/categories/${cat.handle}`}
                                className="group flex items-center font-display text-lg leading-8 text-obs-cream/60 hover:text-obs-gold transition-all duration-200 py-1 border-l-2 border-transparent hover:border-obs-gold/50 pl-4"
                                onClick={close}
                              >
                                {cat.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>

                    {/* Bottom: Selectors + Footer */}
                    <div className="flex flex-col gap-y-6 pt-6 border-t border-obs-warm/10">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      )}
                      <div
                        className="flex justify-between text-obs-cream/60 hover:text-obs-gold transition-colors duration-200"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Text className="text-obs-stone text-xs font-serif italic">
                          Hecho en Jalisco, M&eacute;xico
                        </Text>
                        <Text className="text-obs-warm/50 text-xs">
                          &copy; {new Date().getFullYear()} OBS Jeans. Todos los derechos reservados.
                        </Text>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
