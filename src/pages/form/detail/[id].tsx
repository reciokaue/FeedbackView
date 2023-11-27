import { Navbar } from "@/components/my/navbar";
import { data } from "@/lib/dataExample";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LineElement, PointElement, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BarChartBig, Download, LineChart } from "lucide-react";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

ChartJS.register(ArcElement, Tooltip, );
const colors = [ '#ff6384', '#36a3eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40' ]
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function Home({}) {
  const [ typeChart, setTypeChart ] = useState(false)
  const router = useRouter()
  const dataIndex = Number(router.query.id )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };
  const chartData = data.questionsList[dataIndex] && {
    labels,
    datasets: data.questionsList[dataIndex].options.map((option: any, index: number) => { return {
      label: option.text,
      data: labels.map(() => faker.datatype.number({ min:0, max: 60 })),
      borderColor: colors[index],
      backgroundColor: colors[index],
    }
    })
  };

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      <main className="flex flex-1 min-h-screen flex-col gap-5 bg-background pb-10">
        <header className="flex justify-between items-center px-10 mt-10 ">
          <Label className="text-xl">
            {data.questionsList[dataIndex]?.text}
          </Label>
          <div className="flex gap-2">
            <Button variant={typeChart? "outline": "default"} onClick={() => setTypeChart(!typeChart)}>
              {typeChart?
                <BarChartBig/>:
                <LineChart/>
              }
            </Button>
            <Button variant="outline">
              <Download/>
            </Button>
          </div>
        </header>
        <section className="px-10 mt-2">
          {options && chartData && typeChart?
            <Bar options={options} data={chartData}/>:
            <Line options={options} data={chartData}/>
          }
        </section>
      </main>
    </div>
  )
}
