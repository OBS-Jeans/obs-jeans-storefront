"use client"

import { isOxxo, isStripeLike, paymentInfoMap } from "@lib/constants"
import { initializePaymentCollectionSession } from "@lib/data/payment"
import { Button, Container, Heading, Text } from "@medusajs/ui"
import { CreditCard } from "@medusajs/icons"
import { loadStripe, StripeCardElementOptions } from "@stripe/stripe-js"
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { useCallback, useEffect, useMemo, useState } from "react"

const stripeKey =
  process.env.NEXT_PUBLIC_STRIPE_KEY ||
  process.env.NEXT_PUBLIC_MEDUSA_PAYMENTS_PUBLISHABLE_KEY

const medusaAccountId = process.env.NEXT_PUBLIC_MEDUSA_PAYMENTS_ACCOUNT_ID
const stripePromise = stripeKey
  ? loadStripe(stripeKey, {
      locale: "es",
      ...(medusaAccountId ? { stripeAccount: medusaAccountId } : {}),
    })
  : null

type PaymentCollectionTemplateProps = {
  paymentCollection: any
}

export default function PaymentCollectionTemplate({
  paymentCollection,
}: PaymentCollectionTemplateProps) {
  const [paymentSession, setPaymentSession] = useState<any>(
    paymentCollection.payment_sessions?.find(
      (s: any) => s.status === "pending"
    ) || null
  )
  const [initializing, setInitializing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isPaid =
    paymentCollection.status === "completed" ||
    paymentCollection.status === "authorized"

  const amount = paymentCollection.amount || 0
  const currencyCode = paymentCollection.currency_code || "mxn"

  const formattedAmount = amount.toLocaleString("en-US", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  })

  const initSession = useCallback(async () => {
    if (paymentSession || isPaid) return

    setInitializing(true)
    setError(null)

    const session = await initializePaymentCollectionSession(
      paymentCollection.id,
      "pp_stripe_stripe"
    )

    if (session) {
      setPaymentSession(session)
    } else {
      setError("No se pudo inicializar la sesión de pago. Intenta de nuevo.")
    }
    setInitializing(false)
  }, [paymentCollection.id, paymentSession, isPaid])

  useEffect(() => {
    if (!paymentSession && !isPaid) {
      initSession()
    }
  }, [initSession, paymentSession, isPaid])

  if (isPaid) {
    return (
      <div className="content-container py-12">
        <div className="max-w-lg mx-auto text-center">
          <Heading level="h1" className="mb-4">
            Pago completado
          </Heading>
          <Container className="p-6 bg-ui-bg-subtle">
            <Text className="text-ui-fg-subtle">
              El pago de {formattedAmount} {currencyCode.toUpperCase()} ya fue
              procesado exitosamente. Gracias.
            </Text>
          </Container>
        </div>
      </div>
    )
  }

  if (initializing) {
    return (
      <div className="content-container py-12">
        <div className="max-w-lg mx-auto text-center">
          <Heading level="h1" className="mb-4">
            Preparando pago...
          </Heading>
          <Text className="text-ui-fg-subtle">
            Cargando formulario de pago
          </Text>
        </div>
      </div>
    )
  }

  if (error || !paymentSession?.data?.client_secret) {
    return (
      <div className="content-container py-12">
        <div className="max-w-lg mx-auto text-center">
          <Heading level="h1" className="mb-4">
            Error
          </Heading>
          <Text className="text-ui-fg-subtle mb-4">
            {error || "No se pudo cargar el formulario de pago."}
          </Text>
          <Button onClick={initSession}>Intentar de nuevo</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="content-container py-12">
      <div className="max-w-lg mx-auto">
        <Heading level="h1" className="mb-2 text-center">
          Pagar pedido
        </Heading>
        <Text className="text-ui-fg-subtle text-center mb-8">
          Total a pagar: {formattedAmount} {currencyCode.toUpperCase()}
        </Text>

        {stripePromise && paymentSession?.data?.client_secret ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: paymentSession.data.client_secret as string,
            }}
          >
            <PaymentForm
              clientSecret={paymentSession.data.client_secret as string}
              amount={formattedAmount}
              currencyCode={currencyCode}
            />
          </Elements>
        ) : (
          <Text className="text-center text-ui-fg-subtle">
            Error: Stripe no está configurado correctamente.
          </Text>
        )}
      </div>
    </div>
  )
}

function PaymentForm({
  clientSecret,
  amount,
  currencyCode,
}: {
  clientSecret: string
  amount: string
  currencyCode: string
}) {
  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("card")

  const [submitting, setSubmitting] = useState(false)
  const [cardComplete, setCardComplete] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const cardOptions: StripeCardElementOptions = useMemo(
    () => ({
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#424270",
          "::placeholder": {
            color: "rgb(107 114 128)",
          },
        },
      },
      classes: {
        base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
      },
    }),
    []
  )

  const handlePayment = async () => {
    if (!stripe || !card) return

    setSubmitting(true)
    setErrorMessage(null)

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
        },
      }
    )

    if (error) {
      const pi = error.payment_intent
      if (
        pi &&
        (pi.status === "requires_capture" || pi.status === "succeeded")
      ) {
        setSuccess(true)
        setSubmitting(false)
        return
      }
      setErrorMessage(error.message || "Error al procesar el pago")
      setSubmitting(false)
      return
    }

    if (
      paymentIntent &&
      (paymentIntent.status === "requires_capture" ||
        paymentIntent.status === "succeeded")
    ) {
      setSuccess(true)
    }

    setSubmitting(false)
  }

  if (success) {
    return (
      <Container className="p-6 bg-ui-bg-subtle text-center">
        <Heading level="h2" className="mb-2">
          ¡Pago exitoso!
        </Heading>
        <Text className="text-ui-fg-subtle">
          Tu pago de {amount} {currencyCode.toUpperCase()} fue procesado
          correctamente. Gracias.
        </Text>
      </Container>
    )
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Container className="p-6">
        <div className="flex items-center gap-x-2 mb-4">
          <CreditCard />
          <Text className="txt-medium-plus">Tarjeta de crédito o débito</Text>
        </div>
        <CardElement
          options={cardOptions}
          onChange={(e) => {
            setErrorMessage(e.error?.message || null)
            setCardComplete(e.complete)
          }}
        />
      </Container>

      {errorMessage && (
        <Text className="text-rose-500 text-sm">{errorMessage}</Text>
      )}

      <Button
        size="large"
        className="w-full"
        onClick={handlePayment}
        disabled={!stripe || !cardComplete || submitting}
        isLoading={submitting}
      >
        Pagar {amount} {currencyCode.toUpperCase()}
      </Button>
    </div>
  )
}
