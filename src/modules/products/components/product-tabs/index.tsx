"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const labelStyle = { color: "#1a1c1c", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" as const }
const bodyStyle = { color: "#805062", fontFamily: "Inter, sans-serif" }

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Información del Producto",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Envío y Devoluciones",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="py-8 text-sm" style={bodyStyle}>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span style={labelStyle}>Material</span>
            <p className="mt-1">{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span style={labelStyle}>País de Origen</span>
            <p className="mt-1">{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span style={labelStyle}>Tipo</span>
            <p className="mt-1">{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span style={labelStyle}>Peso</span>
            <p className="mt-1">{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span style={labelStyle}>Dimensiones</span>
            <p className="mt-1">
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}A x ${product.height}Al`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="py-8 text-sm" style={bodyStyle}>
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-3">
          <FastDelivery />
          <div>
            <span style={labelStyle}>Envío Rápido</span>
            <p className="max-w-sm mt-1">
              Tu pedido llegará en 3-5 días hábiles a tu domicilio
              o punto de recolección. Envío gratis en todas tus compras.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Refresh />
          <div>
            <span style={labelStyle}>Cambios Sencillos</span>
            <p className="max-w-sm mt-1">
              ¿No te quedó la talla? No te preocupes, cambiamos
              tu producto por uno nuevo sin complicaciones.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Back />
          <div>
            <span style={labelStyle}>Devoluciones Fáciles</span>
            <p className="max-w-sm mt-1">
              Solo envía tu producto de vuelta y te reembolsamos.
              Sin preguntas, nos encargamos de que el proceso sea lo más sencillo posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
