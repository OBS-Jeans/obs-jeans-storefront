"use client"

import { isManual, isOxxo, isStripeLike } from "@lib/constants"
import { placeOrder } from "@lib/data/cart"
import { sendOxxoVoucherEmail } from "@lib/data/payment"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import ErrorMessage from "../error-message"

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  "data-testid": string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    (cart.shipping_methods?.length ?? 0) < 1

  const paymentSession = cart.payment_collection?.payment_sessions?.[0]

  switch (true) {
    case isStripeLike(paymentSession?.provider_id):
      return (
        <StripePaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case isOxxo(paymentSession?.provider_id):
      return (
        <OxxoPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case isManual(paymentSession?.provider_id):
      return (
        <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
      )
    default:
      return <Button disabled>Selecciona un método de pago</Button>
  }
}

const StripePaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("card")

  const session = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === "pending"
  )

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session?.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address?.first_name +
              " " +
              cart.billing_address?.last_name,
            address: {
              city: cart.billing_address?.city ?? undefined,
              country: cart.billing_address?.country_code ?? undefined,
              line1: cart.billing_address?.address_1 ?? undefined,
              line2: cart.billing_address?.address_2 ?? undefined,
              postal_code: cart.billing_address?.postal_code ?? undefined,
              state: cart.billing_address?.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address?.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message || null)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Realizar pedido
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="stripe-payment-error-message"
      />
    </>
  )
}

const OxxoPaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [voucherGenerated, setVoucherGenerated] = useState(false)

  const stripe = useStripe()

  const session = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === "pending"
  )

  const disabled = !stripe

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !cart) {
      setSubmitting(false)
      return
    }

    const billingName =
      (cart.billing_address?.first_name ?? "") +
      " " +
      (cart.billing_address?.last_name ?? "")

    await stripe
      .confirmOxxoPayment(session?.data.client_secret as string, {
        payment_method: {
          billing_details: {
            name: billingName.trim(),
            email: cart.email,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          setErrorMessage(error.message || null)
          setSubmitting(false)
          return
        }

        if (paymentIntent?.status === "requires_action") {
          // OXXO voucher was generated. The order will be created
          // automatically when the customer pays at OXXO and the
          // webhook payment_intent.succeeded fires.
          setVoucherGenerated(true)
          setSubmitting(false)

          // Send voucher details by email (fire and forget)
          const oxxoDetails = paymentIntent.next_action?.oxxo_display_details
          if (oxxoDetails && cart.email) {
            const cartTotal = cart.total || 0
            sendOxxoVoucherEmail({
              email: cart.email,
              voucher_number: oxxoDetails.number || "",
              voucher_url: oxxoDetails.hosted_voucher_url || "",
              expires_at: oxxoDetails.expires_after
                ? new Date(oxxoDetails.expires_after * 1000).toISOString()
                : "",
              order_total: cartTotal,
              currency_code: cart.currency_code || "mxn",
            })
          }
          return
        }

        if (
          paymentIntent &&
          (paymentIntent.status === "requires_capture" ||
            paymentIntent.status === "succeeded")
        ) {
          placeOrder()
            .catch((err) => {
              setErrorMessage(err.message)
            })
            .finally(() => {
              setSubmitting(false)
            })
          return
        }

        setSubmitting(false)
      })
  }

  if (voucherGenerated) {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="p-4 bg-ui-bg-subtle rounded-md border border-ui-border-base">
          <p className="txt-medium-plus text-ui-fg-base mb-1">
            Voucher OXXO generado
          </p>
          <p className="txt-small text-ui-fg-subtle">
            Tu voucher fue generado exitosamente. Tienes 3 dias para pagar en
            cualquier tienda OXXO. Tu pedido se confirmara automaticamente una
            vez que realices el pago.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Generar voucher OXXO
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="oxxo-payment-error-message"
      />
    </>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size="large"
        data-testid="submit-order-button"
      >
        Realizar pedido
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="manual-payment-error-message"
      />
    </>
  )
}

export default PaymentButton
