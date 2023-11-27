import { faker } from "@faker-js/faker";
import { data } from "./dataExample";

const colors = [ '#ff6384', '#36a3eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40' ]
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const generateChart = (index: number) =>  ({
  labels,
  datasets: data.questionsList[index]?.options.map((option: any, index: number) => { return {
    label: option.text,
    data: labels.map(() => faker.datatype.number({ min:0, max: 60 })),
    borderColor: colors[index],
    backgroundColor: colors[index],
  }
  })
});

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};