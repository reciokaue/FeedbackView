import { Check, CircleDot, GripVertical, Pencil, PlusCircle, SmilePlus, Trash2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import { Input } from "../ui/input";
import { LabelDiv } from "./label-div";
import { Combobox } from "../ui/combobox";
import { data as defaultData } from '../../lib/dataExample'

interface QuestionCardProps {
  id: string
  questionType: string
  topic: string
  text: string
  formId: string
  options: Array<OptionProps>
  _count: {
    options: Array<number>
    answer: number,
  },
}

interface OptionProps {
  id: string
  text: string
  value: number
  questionId: string
}
interface CardData {
  data: QuestionCardProps
  index: number
  editing?: boolean
}

export function QuestionCard({ data, index, editing = false }: CardData){

  return (
    <Card className={cn(
      "group flex flex-col relative px-6 py-8 max-w-xl w-full",
      editing && "border-primary border-2"
    )}>
      <header className="flex justify-between items-center mb-4">
        <label className="flex gap-2 self-end text-muted-foreground text-sm items-center">
          <SmilePlus size={20}/> {data.topic}
        </label>
        <label className="flex gap-2 self-end text-muted-foreground text-sm items-center">
          {data.questionType} <CircleDot size={20}/>
        </label>
      </header>
      <div className="flex flex-1 gap-4">
        <span className="rounded-full flex justify-center items-center shrink-0 h-7 w-7 bg-primary text-primary-foreground">{index+1}</span>            
        <p className="text-lg font-medium w-full text-neutral-700 leading-relaxed">{data.text}</p>
      </div>

      {editing &&
        <form className="flex flex-col mt-8 gap-4">  
          <LabelDiv
            title="Questão"
            child={<Input value={data.text}  id="question"/>}
            labelFor="question"
          />
          <div className="flex gap-4 items-center justify-between">
            <LabelDiv
              title="Tópico"
              tooltip="O Tópico é relacionado a pergunta e é utilizado para mostrar e filtrar melhor o resultado das perguntas do formulário"
              child={<Combobox defaultValue="3" title="Selecione um tópico..." frameworks={defaultData.topics}/>}
            />
            <LabelDiv
              title="Tipo de questão"
              tooltip="O tipo da pergunta é muito importante para se ter o resultado desejado da melhor maneira possível"
              child={<Combobox defaultValue="multiple_choice" title="Selecione um tipo..." frameworks={defaultData.questionTypes}/>}
            />
          </div>
          <LabelDiv
            title="Preview"
            tooltip="Este é o formato das questões que o usuário vai responder"
            styles="bg-gray-50 rounded-lg p-6 flex gap-3 justify-center items-center flex-wrap"
          >
            {["Sim", "Não", "Talvez"].map((option) => (
              <Button key={option} variant="outline" className="bg- flex-wrap">
                {option}
              </Button>
            ))}
          </LabelDiv>
          <LabelDiv title="Escolhas" styles="space-y-3 pr-8">
            {["Sim", "Não", "Talvez"].map((option) => (
              <li key={option} className="flex items-center gap-2 text-muted-foreground">
                <Button variant="link" className="hover:text-red-500">
                  <Trash2/>
                </Button>
                <Input value={option} placeholder="Option text" styles="flex-1"/>
                <GripVertical size={18}/>
              </li>
            ))}
          </LabelDiv>
          {/* <LabelDiv
            title="Additional options"
          >
            required questions: booleans
            allow comments: booleans
          </LabelDiv> */}
          <div className="flex justify-end gap-2 mt-3">
            <Button variant="secondary">Cancelar</Button>
            <Button className="bg-primary gap-2">
              Salvar questão <Check size={20}/>
            </Button>
          </div>
        </form>
      }
      
      <Button className="absolute h-full cursor-pointer -left-12 top-0 transition-colors" variant="link">
        <GripVertical/>
      </Button>
      <div className="flex flex-col items-center justify-center  absolute group-hover:-right-12 group-hover:opacity-100 opacity-0 h-full right-0 top-0 transition-all">
        {[PlusCircle, Pencil, Trash2].map((Icon, iconIndex) => (
          <Button key={index + "cardIcon" + iconIndex} className="" variant="link">
            <Icon/>
          </Button>
        ))}
      </div>
    </Card>
  )
}