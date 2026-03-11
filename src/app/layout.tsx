import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Syne, Libre_Baskerville } from "next/font/google"
import "styles/globals.css"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "OBS Jeans | Los Más Cómodos Al Mejor Precio",
  description:
    "OBS Jeans - Fábrica de jeans en Jalisco, México. Mezclilla de alta calidad, diseño editorial mexicano y los precios más accesibles directo de fábrica.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-mode="light"
      className={`${syne.variable} ${libreBaskerville.variable}`}
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
