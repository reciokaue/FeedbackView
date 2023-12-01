"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Frame, PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { data as fakeData } from "@/lib/dataExample"
const data = fakeData.questionTypes

export function NewQuestion() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="w-full gap-2"
        >
          <PlusCircle/>
          Nova questão
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 mx-0 bg-red-200" align="start" sideOffset={10} >
        <Command className="w-full">
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {data.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => {
                  setValue(framework.value === value ? "" : framework.value)
                  setOpen(false)
                }}
              >
             
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
