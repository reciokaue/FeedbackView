import { CheckCheck, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";
import { DatePickerDemo } from "../ui/datepicker";
import { LabelDiv } from "./label-div";
import { data } from '../../lib/dataExample'
import { Combobox } from "../ui/combobox";
import { NewQuestion } from "./new-question";
import { Switch } from "../ui/switch";
import { useState } from "react";
import ImageUpload from "./image-upload";
import { QuestionBank } from "./question-bank";

export function FormTabs(){
  const [checked, setChecked] = useState(true)

  return (
    <aside className="flex flex-col mt-10 pl-4 gap-2 w-72">
      <LabelDiv title="Logotipo">
       <ImageUpload/>
      </LabelDiv>
      <QuestionBank/>
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