"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

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
    <div className="text-small-regular py-8 text-obs-warm">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Pa&iacute;s de Origen</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Tipo</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Peso</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Dimensiones</span>
            <p>
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
    <div className="text-small-regular py-8 text-obs-warm">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Env&iacute;o R&aacute;pido</span>
            <p className="max-w-sm">
              Tu pedido llegar&aacute; en 3-5 d&iacute;as h&aacute;biles a tu domicilio
              o punto de recolecci&oacute;n. Env&iacute;o gratis en compras mayores a $999.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Cambios Sencillos</span>
            <p className="max-w-sm">
              &iquest;No te qued&oacute; la talla? No te preocupes, cambiamos
              tu producto por uno nuevo sin complicaciones.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-display font-semibold text-obs-charcoal text-sm">Devoluciones F&aacute;ciles</span>
            <p className="max-w-sm">
              Solo env&iacute;a tu producto de vuelta y te reembolsamos.
              Sin preguntas, nos encargamos de que el proceso sea lo m&aacute;s sencillo posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
