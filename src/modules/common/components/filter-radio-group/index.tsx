import { RadioGroup } from "@medusajs/ui"
import { clx } from "@medusajs/ui"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <span
        className="obs-label-tag"
        style={{ color: "#b80049" }}
      >
        {title}
      </span>

      <RadioGroup data-testid={dataTestId} onValueChange={handleChange}>
        <div className="flex flex-col gap-y-2">
          {items?.map((i) => {
            const isActive = i.value === value
            return (
              <div key={i.value} className="flex items-center gap-2.5">
                <RadioGroup.Item
                  checked={isActive}
                  className="hidden peer"
                  id={i.value}
                  value={i.value}
                />

                {/* Custom radio dot */}
                <button
                  type="button"
                  onClick={() => handleChange(i.value)}
                  className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: isActive
                      ? "none"
                      : "1.5px solid rgba(228,189,194,0.6)",
                    background: isActive
                      ? "linear-gradient(135deg, #b80049, #e2165f)"
                      : "transparent",
                  }}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white block"
                    />
                  )}
                </button>

                <label
                  htmlFor={i.value}
                  onClick={() => handleChange(i.value)}
                  className={clx(
                    "text-sm cursor-pointer transition-colors duration-200",
                    isActive ? "font-medium" : ""
                  )}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: isActive ? "#1a1c1c" : "#805062",
                  }}
                  data-testid="radio-label"
                  data-active={isActive}
                >
                  {i.label}
                </label>
              </div>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
