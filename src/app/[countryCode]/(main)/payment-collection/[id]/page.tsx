import { Metadata } from "next"
import { notFound } from "next/navigation"
import { retrievePaymentCollection } from "@lib/data/payment"
import PaymentCollectionTemplate from "@modules/payment-collection/templates"

export const metadata: Metadata = {
  title: "Pagar - OBS Jeans",
}

type Props = {
  params: Promise<{ id: string; countryCode: string }>
}

export default async function PaymentCollectionPage({ params }: Props) {
  const { id } = await params

  const paymentCollection = await retrievePaymentCollection(id)

  if (!paymentCollection) {
    return notFound()
  }

  return <PaymentCollectionTemplate paymentCollection={paymentCollection} />
}
