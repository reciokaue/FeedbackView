import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ClipboardType, Mails } from "lucide-react";
import { FormData } from "@/types/form";

export function FormCard({data}: {data: FormData}) {
  return (
    <Link href={`/form/${data.id}`} className="group">
      <Card className="flex flex-col justify-between group-hover:border-primary max-h-52 h-full">
        <CardHeader className="p flex-1">
          <CardTitle className="flex items-center gap-2 mb-2">
            {data.name}
          </CardTitle>
          <CardDescription className="line-clamp-4">{data.about}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
          <div className="flex items-center gap-2">
            <ClipboardType className="h-3 w-3 text-violet-400" />
            {data._count.questions}
          </div>
          <div className="flex items-center gap-2">
            <Mails className="h-3 w-3 text-sky-400" />
            {data._count.Answer}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};