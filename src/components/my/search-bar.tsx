import { Search, List, LayoutGrid } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NewFormButton } from "./create-button";

export function SearchBar(){
  return (
    <div className="flex w-full items-center space-x-3">
      <Button variant="outline" size="icon" className="shrink-0">
        <Search className="h-4 w-6" />
      </Button>
      <div className="w-full">
        <Input type="email" placeholder="Search..." className='w-full'/>
      </div>
      <Button variant="outline" size="icon" className="shrink-0">
        <List className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="shrink-0">
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <NewFormButton/>
    </div>
  )
}