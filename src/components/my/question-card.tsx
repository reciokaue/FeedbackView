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
      editing && "border-blue-500 border-2"
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
        <span className="rounded-full flex justify-center items-center shrink-0 h-7 w-7 pt-0.5 bg-blue-500 text-white">{index+1}</span>            
        <p className="text-lg font-medium w-full text-neutral-700 leading-relaxed">{data.text}</p>
      </div>

      {editing &&
        <form className="flex flex-col mt-8 gap-4">  
          <LabelDiv
            title="Question"
            child={<Input value={data.text}  id="question"/>}
            labelFor="question"
          />
          <div className="flex gap-4 items-center justify-between">
            <LabelDiv
              title="Topic"
              tooltip="O Tópico é relacionado a pergunta e é utilizado para mostrar e filtrar melhor o resultado das perguntas do formulário"
              child={<Combobox defaultValue="3" title="Selecione um tópico..." frameworks={defaultData.topics}/>}
            />
            <LabelDiv
              title="Question type"
              tooltip="O tipo da pergunta é muito importante para se ter o resultado desejado da melhor maneira possível"
              child={<Combobox defaultValue="multiple_choice" title="Selecione um tipo..." frameworks={defaultData.questionTypes}/>}
            />
          </div>
          <LabelDiv
            title="Format preview"
            tooltip="Este é o formato das questões que o usuário vai responder"
            styles="bg-gray-50 rounded-lg p-6 flex gap-3 justify-center items-center flex-wrap"
          >
            {["Yes", "No", "Maybe"].map((option) => (
              <Button key={option} variant="outline" className="bg- flex-wrap">
                {option}
              </Button>
            ))}
          </LabelDiv>
          <LabelDiv title="Choices" styles="space-y-3 pr-8">
            {["Yes", "No", "Maybe"].map((option) => (
              <li key={option} className="flex items-center gap-2 text-muted-foreground">
                <GripVertical size={18}/>
                <Input value={option} placeholder="Option text" styles="flex-1"/>
                <Button variant="link" className="hover:text-red-500">
                  <Trash2/>
                </Button>
              </li>
            ))}
          </LabelDiv>
          {/* <LabelDiv
            title="Additional options"
          >
            required questions: booleans
            allow comments: booleans
          </LabelDiv> */}
          <div className="flex gap-2 mt-3">
            <Button className="bg-blue-500 gap-2">
              Save question <Check size={20}/>
            </Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </form>
      }
      
      <Button className="absolute h-full -left-12 top-0 transition-colors" variant="link">
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