import React, { useContext } from 'react';
import { cn } from '@/lib/utils';


// Chart item type for payload
interface ChartItem {
  name?: string;
  value?: string | number;
  color?: string;
}

// Simple chart configuration type
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

// Chart context
type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

// Chart container component
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

// Simple tooltip component
const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: ChartItem[]
    label?: string
  }
>(({ className, active, payload, label, ...props }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-background px-3 py-2 text-sm shadow-md",
        className
      )}
      {...props}
    >
      {label && <div className="font-medium">{label}</div>}
      <div className="grid gap-1">
        {payload.map((item: ChartItem, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground">{item.name}:</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

// Simple legend component
const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: ChartItem[]
  }
>(({ className, payload, ...props }, ref) => {
  if (!payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4 pt-4",
        className
      )}
      {...props}
    >
      {payload.map((item: ChartItem, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-sm text-muted-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  )
})
ChartLegend.displayName = "ChartLegend"

export {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  useChart,
}
