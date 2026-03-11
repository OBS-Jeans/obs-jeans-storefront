import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import MarqueeBanner from "@modules/home/components/marquee-banner"
import CategoryShowcase from "@modules/home/components/category-showcase"
import TrustStrip from "@modules/home/components/trust-strip"
import FactoryStory from "@modules/home/components/factory-story"
import NewsletterCta from "@modules/home/components/newsletter-cta"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "OBS Jeans — Los Más Cómodos Al Mejor Precio",
  description:
    "Jeans de fábrica en Jalisco, México. Tallas inclusivas, calidad premium y los precios más accesibles. Compra en línea con envío a todo México.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="obs-grain">
      <Hero />
      <MarqueeBanner />
      <CategoryShowcase />
      <FeaturedProducts collections={collections} region={region} />
      <TrustStrip />
      <FactoryStory />
      <NewsletterCta />
    </div>
  )
}
