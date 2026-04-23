import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  variants?: HttpTypes.StoreProductVariant[]
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
  variants,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  const isOptionValueInStock = (value: string): boolean => {
    if (!variants) return true
    return variants.some((variant) => {
      const hasOption = variant.options?.some(
        (o) => o.option_id === option.id && o.value === value
      )
      if (!hasOption) return false
      if (!variant.manage_inventory) return true
      if (variant.allow_backorder) return true
      return (variant.inventory_quantity || 0) > 0
    })
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Selecciona {title}</span>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          const inStock = isOptionValueInStock(v)
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                {
                  "border-ui-border-interactive": v === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v !== current,
                  "!text-gray-300 !bg-gray-50 line-through": !inStock,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
