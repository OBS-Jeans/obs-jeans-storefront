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
                  className="relative h-full flex items-center transition-colors duration-200 focus:outline-none"
                  style={{ color: "#805062" }}
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
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                </Popover.Button>
              </div>

              {/* Backdrop */}
              {open && (
                <div
                  className="fixed inset-0 z-[50] pointer-events-auto"
                  style={{ backgroundColor: "rgba(26,28,28,0.2)", backdropFilter: "blur(4px)" }}
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
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[51] inset-x-0 m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full rounded-2xl justify-between p-8"
                    style={{
                      backgroundColor: "rgba(249,249,249,0.97)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(228,189,194,0.25)",
                      boxShadow: "0 40px 80px rgba(128,80,98,0.12)",
                    }}
                  >
                    {/* Top: Close + Logo */}
                    <div>
                      <div className="flex items-center justify-between mb-14">
                        <img
                          src="/images/obs-logo-white.png"
                          alt="OBS Jeans"
                          className="h-6 w-auto object-contain"
                          style={{ filter: "brightness(0) opacity(0.8)" }}
                        />
                        <button
                          data-testid="close-menu-button"
                          onClick={close}
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                          style={{
                            color: "#805062",
                            border: "1px solid rgba(228,189,194,0.4)",
                          }}
                        >
                          <XMark />
                        </button>
                      </div>
                    </div>

                    {/* Nav links */}
                    <ul className="flex flex-col gap-1 items-start justify-start flex-1">
                      {Object.entries(SideMenuFixedItems).map(([name, href]) => (
                        <li key={name} className="w-full">
                          <LocalizedClientLink
                            href={href}
                            className="group flex items-center py-3 transition-all duration-200"
                            style={{
                              borderBottom: "1px solid rgba(228,189,194,0.15)",
                            }}
                            onClick={close}
                            data-testid={`${name.toLowerCase().replace(/\s+/g, "-")}-link`}
                          >
                            <span
                              className="obs-editorial font-serif font-bold text-3xl small:text-4xl leading-none tracking-tight group-hover:translate-x-1 transition-transform duration-200"
                              style={{ color: "#1a1c1c" }}
                            >
                              {name}
                            </span>
                          </LocalizedClientLink>
                        </li>
                      ))}

                      {/* Dynamic categories */}
                      {categories && categories.length > 0 && (
                        <>
                          <li className="w-full mt-6 mb-3">
                            <span className="obs-label-tag" style={{ color: "#b80049" }}>
                              Categorías
                            </span>
                          </li>
                          {categories.map((cat) => (
                            <li key={cat.id} className="w-full">
                              <LocalizedClientLink
                                href={`/categories/${cat.handle}`}
                                className="flex items-center gap-2 py-1.5 text-sm transition-colors duration-200 hover:text-obs-rose"
                                style={{
                                  color: "#805062",
                                  fontFamily: "Inter, sans-serif",
                                }}
                                onClick={close}
                              >
                                <span
                                  className="w-1 h-1 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: "rgba(184,0,73,0.4)" }}
                                />
                                {cat.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>

                    {/* Bottom: Selectors + Footer */}
                    <div
                      className="flex flex-col gap-y-5 pt-6"
                      style={{ borderTop: "1px solid rgba(228,189,194,0.25)" }}
                    >
                      {!!locales?.length && (
                        <div
                          className="flex justify-between transition-colors duration-200"
                          style={{ color: "#805062" }}
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
                        className="flex justify-between transition-colors duration-200"
                        style={{ color: "#805062" }}
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
                        <Text
                          className="obs-editorial font-serif italic text-sm"
                          style={{ color: "#b80049" }}
                        >
                          Hecho en Jalisco, México
                        </Text>
                        <Text
                          className="text-xs"
                          style={{ color: "rgba(128,80,98,0.45)", fontFamily: "Inter, sans-serif" }}
                        >
                          &copy; {new Date().getFullYear()} OBS Jeans
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
