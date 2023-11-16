import { FormCard } from "@/components/my/form-card";
import { Navbar } from "@/components/my/navbar";
import { SearchBar } from "@/components/my/search-bar";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/dataExample";

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      <main className="flex flex-1 min-h-screen flex-col gap-5 bg-background">
        <SearchBar/>
        <Separator/>
        <div className="grid grid-cols-3 gap-3">
          {data.home?.map((form) => (
            <FormCard data={form} key={form.id}/>
          ))}
        </div>
      </main>
    </div>
  )
}
