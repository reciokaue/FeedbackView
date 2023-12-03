import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { data as fakeData } from "@/lib/dataExample";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const params = useParams()
  const questionId = +params?.id
  const data = fakeData.questionsList[questionId]
  const formSize = fakeData.questionsList.length -1
  const progress = ((100/(formSize))*questionId) + (questionId == 0? +5 : questionId ? formSize && -7: 0) 
  return (
    <div className='relative h-screen max-w-md mx-auto'>
      <main className="flex h-full min-h-screen flex-col gap-5 bg-background ">
        <header className="flex w-full flex-col p-4">
          <Progress value={progress} max={100}/>
          <h1 className="mt-4 font-medium text-2xl text-primary">
            {data?.text}
          </h1>
        </header>
        <section className="flex flex-1 items-end justify-center pb-12">
          <div className={gridVariant["default"]}>
            {[data?.options.map((option) => (
              <ToggleButton key={option.id} text={option.text}/> 
            ))]}
          </div>
        </section>
        <footer className="flex flex-col p-4 w-full gap-3 bg-border">
          <h3 className="text-xl text-muted-foreground">Excelente</h3>
          <Button className="w-full" href={questionId >= formSize? "/form": `/form/answer/${questionId+1}`}>
            CONTINUAR
          </Button>
        </footer>
      </main>
    </div>
  )
}

const gridVariant = {
  default: "flex h-fit flex-wrap gap-2 justify-center",
  card: "grid grid-rows-2 grid-cols-2 gap-3"
}

function ToggleButton({text}: {text:string}){
  const [selected, setSelected] = useState(false)

  return (
    <Button
      variant={selected? "default": "secondary"}
      size="lg"
      onClick={() => setSelected(!selected)}
    >
      {text}
    </Button>
  )
}
