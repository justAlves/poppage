import * as React from "react"

import { cn } from "@/lib/utils"
import GradientContainer from "../gradient-container"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <GradientContainer
        rounded="rounded-md"
      >
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md  bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </GradientContainer>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
