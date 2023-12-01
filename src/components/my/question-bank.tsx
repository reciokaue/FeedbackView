'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Combobox } from "../ui/combobox";
import { data } from "@/lib/dataExample";
import { Input } from "../ui/input";
import { CircleDot, MinusCircle, PlusCircle, PlusIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function QuestionBank(){
  return (
    <Dialog>
      <DialogTrigger  asChild>
        <Button  variant="outline" className="gap-2 w-full">
          Banco de questões
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col max-w-4xl w-full rounded-lg">
        <header className="flex flex-col w-full max-w">
          <Label className="text-2xl mb-2">Banco de questões</Label>
          <div className="flex gap-2">
            <Combobox
              title="Tópico"
              defaultValue="all"
              frameworks={[{label: "Todos", value: "all"}, ...data?.topics]}
              styles="max-w-[16rem]"
            />
            <Input placeholder="Pesquisar..." styles="w-full" search/>
          </div>
        </header>
        <section className="grid grid-cols-2 gap-3 overflow-scroll max-h-[370px]">
          {data?.questionsList.map((question, index) => (
            <QuestionCard key={question.id} data={question}/>
          ))}
        </section>
        <footer className="flex w-full pt-6">
          <DialogClose asChild>
            <Button className="w-full gap-2">
              Adicionar Perguntas
            </Button>
          </DialogClose>
        </footer>
      </DialogContent>
    </Dialog>
  )
}

function QuestionCard({data}: {data: any}){
  const [selected, setSelected] = useState(false)

  return (
    <Card className={cn("flex justify-between flex-col w-full p-4 hover:border-primary  cursor-pointer transition-all",
      selected && "border-2 border-primary"
    )}>
      <header className="flex flex-col justify-start">
        <label className="flex gap-2 text-muted-foreground text-sm">
          <CircleDot size={20}/> {data.questionType}
        </label>
        <label className="flex mt-2 mb-4 gap-2 text-muted-foreground text-sm">
          {data.text}
        </label>
      </header>
      <footer className="flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {data.options.map((option: any) => (
            <Badge key={option.id} className="overflow-ellipsis ">{option.text}</Badge>
          ))}
        </div>
        <Button variant="ghost" onClick={() => setSelected(!selected)}>
          {selected? <MinusCircle/> : <PlusCircle/>}
        </Button>
      </footer>
    </Card>
  )
}