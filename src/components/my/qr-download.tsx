import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Copy, Download, QrCode } from "lucide-react";
import Image from "next/image";
import { LabelDiv } from "./label-div";

export function QrCodeButton(){
  return (
    <Dialog>
      <DialogTrigger  asChild>
        <Button  variant="outline" className="gap-2 w-full">
          <QrCode/>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col rounded-lg">
        <header className="flex flex-col justify-center items-center">
          <span className="flex justify-center items-center h-10 w-10 bg-border mb-2 rounded-full">
            <QrCode/>
          </span>
          <Label className="text-3xl">Baixar QR-code</Label>
        </header>
        <section className="flex flex-col gap-4">
          <div className="flex self-center my-6 border-2 p-4 border-input rounded-lg ">
            <Image src="/qrcode.svg" width={250} height={250} alt="QR-CODE"/>
          </div>
          <LabelDiv title="Copiar link de acesso" styles="flex gap-3 items-center">
            <Input disabled styles="w-full" value="http://localhost:3000/form/answer/0"/>
            <Button size="icon">
              <Copy className="w-4 h-4"/>
            </Button>
          </LabelDiv>
          <footer className="flex gap-3 justify-center items-center">
            <DialogClose asChild>
              <Button className="w-full gap-2" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="w-full gap-2">
                Fazer Download <Download className="w-4 h-4"/>
              </Button>
            </DialogClose>
          </footer>
        </section>
      </DialogContent>
    </Dialog>
  )
}