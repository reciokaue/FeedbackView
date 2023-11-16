import { HelpCircle, History, Wrench } from "lucide-react";
import { Button } from "../ui/button";

export function FormTabs(){
  return (
    <article className="flex flex-col absolute gap-1 h-screen justify-start ">
      <Button className="gap-2 justify-start  text-muted-foreground pl-3 pr-10 " variant="ghost">
        <Wrench size={20}/>
        1. Camping setup
      </Button>
      <Button className="gap-2 justify-start bg-blue-100 text-blue-600 pt-2 pl-3 pr-10 items-center"  variant="secondary">
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