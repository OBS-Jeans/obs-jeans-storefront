import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCategoryByHandle, listCategories } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import CategoryTemplate from "@modules/categories/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: Promise<{ category: string[]; countryCode: string }>
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
    [key: string]: string | undefined
  }>
}

export async function generateStaticParams() {
  const product_categories = await listCategories()

  if (!product_categories) {
    return []
  }

  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
  )

  const categoryHandles = product_categories.map(
    (category: any) => category.handle
  )

  const staticParams = countryCodes
    ?.map((countryCode: string | undefined) =>
      categoryHandles.map((handle: any) => ({
        countryCode,
        category: [handle],
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  try {
    const productCategory = await getCategoryByHandle(params.category)

    const title = productCategory.name + " | Medusa Store"

    const description = productCategory.description ?? `${title} category.`

    return {
      title: `${title} | Medusa Store`,
      description,
      alternates: {
        canonical: `${params.category.join("/")}`,
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function CategoryPage(props: Props) {
  const searchParams = await props.searchParams
  const params = await props.params
  const { sortBy, page, ...filterParams } = searchParams

  // Parse filter params (e.g., talla=28,30 → { talla: ["28", "30"] })
  const filters: Record<string, string[]> = {}
  for (const [key, value] of Object.entries(filterParams)) {
    if (value && key !== "sortBy" && key !== "page") {
      filters[key] = value.split(",")
    }
  }

  const productCategory = await getCategoryByHandle(params.category)

  if (!productCategory) {
    notFound()
  }

  // If this is a child category, fetch the parent with its children (siblings)
  // because Medusa doesn't support deep nested relation expansion
  let parentWithChildren = null
  if (productCategory.parent_category) {
    parentWithChildren = await getCategoryByHandle([
      productCategory.parent_category.handle,
    ])
  }

  return (
    <CategoryTemplate
      category={productCategory}
      parentWithChildren={parentWithChildren}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      filters={filters}
    />
  )
}
