import { Navbar } from "@/components/my/navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LineElement, PointElement, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BarChartBig, Download, LineChart } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { chartOptions, generateChart } from "@/lib/generateChart";
import { data } from "@/lib/dataExample";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);
ChartJS.register(ArcElement, Tooltip, );

export default function Home() {
  const [ typeChart, setTypeChart ] = useState(false)
  const params = useParams()
  const questionId = +params?.questionId

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      <main className="flex flex-1 min-h-screen flex-col gap-5 bg-background pb-10">
        {/* <Link h> */}
        {/* </Link> */}
        <header className="flex justify-between items-center px-10 mt-10 ">
          <Label className="text-xl">
            {data?.questionsList[questionId]?.text}
          </Label>
          <div className="flex gap-2">
            <Button variant={typeChart? "outline": "default"} onClick={() => setTypeChart(!typeChart)}>
              {typeChart?
                <LineChart/>:
                <BarChartBig/>
              }
            </Button>
            <Button variant="outline">
              <Download/>
            </Button>
          </div>
        </header>
        <section className="px-10 mt-2">
          <Chart id={questionId} type={typeChart}/>
        </section>
      </main>
    </div>
  )
}

function Chart({id, type}: {id:any, type: boolean}){
  if(id/1 == id){
    const data = generateChart(id)
    return (
      type?
      <Bar options={chartOptions} data={data}/>:
      <Line options={chartOptions} data={data}/>
    )
  }else{
    return <h1>loading... {JSON.stringify(id)}</h1>
  }
}
