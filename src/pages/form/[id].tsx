import { Navbar } from "@/components/my/navbar";
import { SearchBar } from "@/components/my/search-bar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/dataExample";
import { ClipboardEdit, ClipboardType, Mails, Trash2 } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { QrCodeButton } from "@/components/my/qr-download";

const form = data.home[0]
ChartJS.register(ArcElement, Tooltip, );
const colors = [ '#ff6384', '#36a3eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40' ]

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      <main className="flex flex-1 min-h-screen flex-col gap-5 bg-background pb-10">
        <SearchBar/>
        <div className="flex p-6">
          <aside className="w-1/3">
            <h1 className="font-semibold text-2xl pb-2">{form.name}</h1>
            <p>{form.about}</p>
            <div className="flex gap-3 mt-2">
              <div className="flex items-center gap-2">
                <ClipboardType className="h-3 w-3 text-violet-400" />
                {form._count.questions}
              </div>
              <div className="flex items-center gap-2">
                <Mails className="h-3 w-3 text-sky-400" />
                {form._count.Answer}
              </div>
            </div>
            <section className="flex items-center py-4 gap-4">
              <Dialog>
                <DialogTrigger >
                  <Button className="gap-2" variant="destructive">
                    <Trash2 size={20}/> Excluir
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Você tem certeza absoluta?</DialogTitle>
                    <DialogDescription>
                      Essa ação não pode ser desfeita. Isso irá excluir permanentemente seu formulário e remover seus dados de nossos servidores.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-2 justify-center mt-2">
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button href='/home' variant="delete">Excluir</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button href="/form" className="gap-2" variant="outline">
                <ClipboardEdit size={20}/> Editar
              </Button>
              <QrCodeButton/>
            </section>
          </aside>
          <Separator orientation="vertical"/>
        </div>
        <Separator/>
        <div className="flex gap-3 flex-col flex-1">
          {data.questionsList?.map((question, index) => {
            const pieData = {
              labels: question.options.map(option => option.text),
              datasets: [{
                label: '# Votos',
                data: question._count.options.map(votes => votes),
                backgroundColor: colors,
              }]
            }
            return (<>
            <h1 className="pt-3 font-medium">Pergunta #{index+1}</h1>
            <Link href={`/form/detail/${index}`}>
              <Card key={question.id} className="p-4 grid md:grid-cols-2 sm:grid-cols-1 gap-3 hover:border-primary cursor-pointer">
                <article className="flex flex-col justify-start">
                  <h1 className="pb-3 font-medium">{question.text}</h1>
                  <div className="grid grid-cols-2 gap-3">
                    {question.options.map((option, optionIndex) => (
                      <Button key={option.id} variant="ghost" className="flex justify-between rounded-md border px-3 py-2 font-mono text-sm shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-md" style={{backgroundColor: colors[optionIndex]}}/>
                          {option.text}
                        </div>  
                        <div className="flex items-center gap-2">
                          {data.questionsList[index]._count.options[optionIndex]}
                          <Mails className="h-3 w-3 text-sky-400" />
                        </div>
                      </Button>
                    ))}
                  </div>
                </article>
                <aside className="flex flex-1 relative justify-end items-center">
                  <div>
                    <Pie data={pieData} className="max-h-44"/>
                  </div>
                </aside>
              </Card>
            </Link>
          </>)})}
        </div>
      </main>
    </div>
  )
}
