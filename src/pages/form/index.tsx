import { FormTabs } from "@/components/my/form-tabs";
import { Navbar } from "@/components/my/navbar";
import { QuestionCard } from "@/components/my/question-card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { data } from "@/lib/dataExample";
import { ChevronDown, ChevronLeft, ChevronUp, Eye } from "lucide-react";
import { useState } from "react";

export default function Form() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      {/* <FormTabs/> */}
      <section className="flex flex-1 flex-col relative max-w-xl mx-auto pb-10">
        <header className="flex flex-col items-start justify-center">
          <h1 className="font-medium text-2xl leading-relaxed mt-3 mb-1">Question list</h1>
          <p className="max-w-xl text-base text-start text-muted-foreground">Este formulário visa entender e aprimorar a experiência geral do usuário, abrangendo aspectos cruciais do relacionamento entre os clientes e os serviços oferecidos.</p>
          <Button className="self-center text-primary gap-2 font-semibold mt-2 mb-10" variant="link">
            <Eye/>
            Visualizar questões
          </Button>
        </header>
        <Collapsible 
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <CollapsibleTrigger asChild className="mb-6 gap-2 flex">
            <Button variant="secondary">Questões {isOpen? <ChevronUp size={16}/>: <ChevronDown size={16}/>}</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-1 items-center flex-col gap-5 bg-background">
            {data.questionsList.map((question, index ) => (
              <QuestionCard editing={index == 3} index={index} key={question.id} data={question}/>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  )
}
