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
      <header className="flex flex-1 flex-col">
        <Button variant="link" className="self-start gap-2 text-base text-muted-foreground pl-0 pt-0">
          <ChevronLeft size={20}/>
          Back to Dashboard
        </Button>
        <article className="flex flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1570483358100-6d222cdea6ff?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="header image"
            className="w-full max-w-xl h-56 rounded-xl object-cover object-bottom"
          />
          <h1 className="font-medium text-2xl leading-relaxed mt-3 mb-1">Question list</h1>
          <p className="max-w-xl text-base text-center text-muted-foreground">These are the questions corresponding to the template you have selected, tou can modify, add or delete them.</p>
          <Button className="text-blue-500 gap-2 font-semibold mt-2 mb-6" variant="link">
            <Eye/>
            Preview questions
          </Button>
        </article>
      </header>
      <div className='relative max-w-7xl mx-auto'>
        <FormTabs/>
        <main className="flex flex-1 min-h-screen items-center flex-col gap-5 bg-background ">
          {data.questionsList.map((question, index ) => (
            <QuestionCard editing={index == 3} index={index} key={question.id} data={question}/>
          ))}
        </main>
      </div>
    </div>
  )
}
