"use server"

import { sdk } from "@lib/config"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"

export const setOxxoLocale = async (paymentIntentId: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ success: boolean }>(`/store/oxxo-set-locale`, {
      method: "POST",
      body: { payment_intent_id: paymentIntentId },
      headers,
    })
    .catch((err) => {
      console.error("Failed to set OXXO locale:", err)
      return null
    })
}

export const sendOxxoVoucherEmail = async (data: {
  email: string
  voucher_number: string
  voucher_url: string
  expires_at: string
  order_total: number
  currency_code: string
}) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ success: boolean }>(`/store/oxxo-voucher-email`, {
      method: "POST",
      body: data,
      headers,
    })
    .catch((err) => {
      console.error("Failed to send OXXO voucher email:", err)
      return null
    })
}

export const retrievePaymentCollection = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ payment_collection: any }>(
      `/store/payment-collections/${id}`,
      {
        method: "GET",
        headers,
        query: {
          fields:
            "+payment_sessions.data,+payment_sessions.status,+payment_sessions.provider_id",
        },
      }
    )
    .then(({ payment_collection }) => payment_collection)
    .catch((err) => {
      console.error("Failed to retrieve payment collection:", err)
      return null
    })
}

export const initializePaymentCollectionSession = async (
  paymentCollectionId: string,
  providerId: string
) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ payment_session: any }>(
      `/store/payment-collections/${paymentCollectionId}/payment-sessions`,
      {
        method: "POST",
        body: { provider_id: providerId },
        headers,
      }
    )
    .then(({ payment_session }) => payment_session)
    .catch((err) => {
      console.error("Failed to initialize payment session:", err)
      return null
    })
}

export const listCartPaymentMethods = async (regionId: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("payment_providers")),
  }

  return sdk.client
    .fetch<HttpTypes.StorePaymentProviderListResponse>(
      `/store/payment-providers`,
      {
        method: "GET",
        query: { region_id: regionId },
        headers,
        next,
        cache: "force-cache",
      }
    )
    .then(({ payment_providers }) =>
      payment_providers.sort((a, b) => {
        return a.id > b.id ? 1 : -1
      })
    )
    .catch(() => {
      return null
    })
}
