import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import HeroOptionA from "@modules/home/components/hero/hero-option-a"
import MarqueeBanner from "@modules/home/components/marquee-banner"
import CategoryShowcase from "@modules/home/components/category-showcase"
import TrustStrip from "@modules/home/components/trust-strip"
import FactoryStory from "@modules/home/components/factory-story"
import NewsletterCta from "@modules/home/components/newsletter-cta"
import BrandVideo from "@modules/home/components/brand-video"
import CraftProcess from "@modules/home/components/craft-process"
import ColorRange from "@modules/home/components/color-range"
import ScrollProgress from "@modules/common/components/scroll-progress"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "OBS Jeans | Los Más Cómodos Al Mejor Precio",
  description:
    "OBS Jeans - Fábrica de jeans en Jalisco, México. Mezclilla de alta calidad y los precios más accesibles directo de fábrica.",
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
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <ScrollProgress />
      <HeroOptionA />
      <MarqueeBanner />
      <CategoryShowcase />
      <FeaturedProducts collections={collections} region={region} />
      <TrustStrip />
      <ColorRange />
      <BrandVideo />
      <CraftProcess />
      <FactoryStory />
      <NewsletterCta />
    </div>
  )
}
