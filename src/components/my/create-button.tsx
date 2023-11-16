import { BookCopy, Hand, Plus, ScanSearch } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Combobox } from "../ui/combobox";
import Link from "next/link";
import { data } from "@/lib/dataExample";

const options = [
  {title: "Começar do zero", Icon: Hand},
  {title: "Importar perguntas", Icon: ScanSearch},
  {title: "Começar com modelo", Icon: BookCopy },
]

export function NewFormButton(){
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button type="submit" className='gap-2'>
          New
          <Plus className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-row gap-2 items-center mb-2">
            <Plus className="h-4 w-4"/>
            Novo formulário
          </AlertDialogTitle>
          <form className="flex flex-col space-y-2 gap-2">
            <Label html-for="name">Nome</Label>
            <Input type="text" id="name" placeholder="Nome" />
            <Label>Tópico</Label>
            <Combobox defaultTitle="Selecione um tópico" frameworks={data.topics}/>
            <article className="flex justify-center items-center gap-4">
              {options.map(({title, Icon}, index) => (
                <Button key={index} variant="outline" className="flex flex-col gap-2 w-full h-32">
                  <Icon className="w-6 h-6" color="#222"/>
                  <h1>{title}</h1>
                </Button>
              ))}
            </article>
            <Label html-for="about">Sobre</Label>
            <Textarea className="h-20 resize-none" id="about" placeholder="Fale sobre o foco do formulário..." />
            <AlertDialogDescription className="pb-10">
              Este texto não sera visível para quem responder o formulário.
            </AlertDialogDescription>
          </form>

        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href="/form">
            <AlertDialogAction>Continue</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}