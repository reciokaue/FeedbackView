import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Form() {
  return (
    <div className='relative max-w-md mx-auto'>
      <main className="flex flex-1 min-h-screen items-center flex-col gap-5 bg-background ">
        <header className="flex w-full flex-col p-4">
          <Progress value={33} />
          <h1 className="mt-4 font-medium text-2xl text-primary">Como você classificaria nosso atendimento ao cliente?</h1>
        </header>
        <section className="flex flex-1">

        </section>
        <footer className="flex flex-col p-4 w-full gap-3 bg-border">
          <h3 className="text-xl text-muted-foreground">Excelente</h3>
          <Button>
            CONTINUAR
          </Button>
        </footer>
      </main>
    </div>
  )
}
