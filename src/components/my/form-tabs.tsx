import { CheckCheck, ChevronLeft, HelpCircle, History, Search, Wrench } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DatePickerDemo } from "../ui/datepicker";
import { LabelDiv } from "./label-div";
import { data } from '../../lib/dataExample'
import { Combobox } from "../ui/combobox";
import { NewQuestion } from "./new-question";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Toggle } from "../ui/toggle";
import ImageUpload from "./image-upload";

export function FormTabs(){
  const [checked, setChecked] = useState(true)

  return (
    <aside className="flex flex-col mt-10 pl-4 gap-2 w-72">
      <LabelDiv title="Logotipo">
       <ImageUpload/>
      </LabelDiv>
      <Button  variant="outline" className="gap-2">
        <HelpCircle size={20}/>
        Banco de questões
      </Button>
      <NewQuestion/>
      <LabelDiv title="Ativo">
        <Switch
          checked={checked}
          onCheckedChange={() => setChecked(!checked)} 
        />
      </LabelDiv>
      <LabelDiv title="Tópico do formulário">
        <Combobox
          title="Selecione um tipo..."
          frameworks={data.topics}
        />
      </LabelDiv>
      <LabelDiv title="Data">
        <DatePickerDemo/>
      </LabelDiv>
      <Button href="/form/form1" className="gap-3 w-full">
        <CheckCheck size={16}/> Salvar 
      </Button>
    </aside>
  )
}