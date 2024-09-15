import * as React from "react"

import { cn } from "@/lib/utils"
import GradientContainer from "../gradient-container"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <GradientContainer
        rounded="rounded-full"
      >
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-full border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-none file:bg-gradient-to-br file:from-orange-500 file:to-pink-500 file:rounded-md file:text-sm file:text-white file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </GradientContainer>
    )
  }
)
Input.displayName = "Input"

export { Input }
