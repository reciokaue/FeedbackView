/* eslint-disable @next/next/no-img-element */
import { FormTabs } from "@/components/my/form-tabs";
import { Navbar } from "@/components/my/navbar";
import { QuestionCard } from "@/components/my/question-card";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/dataExample";
import { ChevronLeft, Eye } from "lucide-react";

export default function Form() {
  return (
    <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      {/* <FormTabs/> */}
      <section className="flex flex-1 flex-col relative max-w-xl mx-auto">
        <header className="flex flex-col items-start justify-center">
          <h1 className="font-medium text-2xl leading-relaxed mt-3 mb-1">Question list</h1>
          <p className="max-w-xl text-base text-start text-muted-foreground">ste formulário visa entender e aprimorar a experiência geral do usuário, abrangendo aspectos cruciais do relacionamento entre os clientes e os serviços oferecidos.</p>
          <Button className="self-center text-primary gap-2 font-semibold mt-2 mb-10" variant="link">
            <Eye/>
            Preview questions
          </Button>
        </header>
        <main className="flex flex-1 items-center flex-col gap-5 bg-background ">
          {data.questionsList.map((question, index ) => (
            <QuestionCard editing={index == 3} index={index} key={question.id} data={question}/>
          ))}
        </main>
      </section>
    </div>
  )
}
