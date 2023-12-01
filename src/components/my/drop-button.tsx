import { Collapsible } from "@radix-ui/react-collapsible"
import { ReactNode, useState } from "react"
import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Button } from "../ui/button"

interface DropButtonProps{
  children: ReactNode
  styles?: string
  title: string
  icon: ReactNode
}

export function DropButton({styles, title, icon, children }: DropButtonProps){
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible 
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <CollapsibleTrigger asChild className="mb-6 gap-2 flex">
        <Button variant="sidebar" className={styles}>
          {icon} {title}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-1 pl-4 items-left flex-col space-y-5">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}