import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styles?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, styles, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = (e: any) => {
      e.preventDefault()
      setIsVisible(!isVisible)
    }

    const typeState = type == 'password'? 
      isVisible? 'text': 'password'
    : type

    return (<div className={cn("relative", styles)}>
      <input
        type={typeState}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {type == "password" &&
        <Button
          onClick={(e) => toggleVisibility(e)}
          className="absolute top-0 right-0"
          variant="link"
        >
          {isVisible? <Eye/>: <EyeOff/>}
        </Button>
      }
    </div>)
  }
)
Input.displayName = "Input"

export { Input }
