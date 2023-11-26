import { ChevronLeft, HelpCircle, History, Wrench } from "lucide-react";
import { Button } from "../ui/button";

export function FormTabs(){
  return (
    <article className="flex w-fit flex-col sticky top-12 gap-1 justify-start ">
      <Button className="gap-2 justify-start  text-muted-foreground pl-3 pr-10 " variant="ghost">
        <ChevronLeft size={20}/>
        Back to Dashboard
      </Button>
      <Button className="gap-2 justify-start  text-muted-foreground pl-3 pr-10 " variant="ghost">
        <Wrench size={20}/>
        1. Camping setup
      </Button>
      <Button className="gap-2 justify-start pt-2 pl-3 pr-10 items-center"  variant="secondary">
        <HelpCircle size={20}/>
        2. Question list
      </Button>
      <Button className="gap-2 justify-start  text-muted-foreground pl-3 pr-10 " variant="ghost">
        <History size={20}/>
        3. Timeline
      </Button>
    </article>
  )
}