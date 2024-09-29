import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context } from "../../Context/UserContext";

ChartJs.register(BarElement, CategoryScale, Tooltip, Legend, LinearScale);

export const Chartbar = () => {
  const { list } = useContext(Context); 

  const userAges = list.map((user) => user.age); 
  const userNames = list.map((user) => `${user.firstName} ${user.lastName}`); 

  const data = {
    labels: userNames,
    datasets: [
      {
        label: "سن کاربران",
        data: userAges,
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Bar
        className="w-full h-[400px] border rounded p-2 bg-white shadow-lg"
        data={data}
        options={options}
      ></Bar>
    </>
  );
};
