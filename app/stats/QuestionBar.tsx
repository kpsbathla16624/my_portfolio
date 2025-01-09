"use client";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import getUserProfile from './getprofile';
import axios from 'axios';

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const QuestionCountGraph: React.FC = () => {
  const [profiles, setProfiles] = useState<any>(null);
  const [gfgdata,setgfgdata] = useState<number>(0);

   

async function getGfgData() {
  try {
    const host = process.env.NEXT_PUBLIC_HOST  || ''; 
    const url = `${host}/api/gfgdata`;
    const response = await axios.get(url);

    if (response.status === 200) {
      const data = response.data;
      console.log(data); // Check the response structure
      setgfgdata(data?.data?.total_problems_solved);
    } else {
      console.error("Error fetching data:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await getUserProfile("kps_bathla", "kpsbathla", "kamalpreet6198");
      setProfiles(data);
    };
    
    fetchProfiles();
    getGfgData();
  }, []);

  if (!profiles) {
    // Shimmer loader
    return (
      <div className=" w-full h-full shimmer-effect flex flex-col items-center justify-center gap-2 p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-opacity-75 bg-transparent bg-blur-xl">
        <div className="animate-pulse flex flex-col items-center gap-4">
          {/* Title shimmer */}
          <div className="h-6 w-32 bg-gray-600 rounded-md"></div>
          {/* Bar shimmer */}
          <div className="h-4 w-full bg-gray-600 rounded-md"></div>
          <div className="h-4 w-full bg-gray-600 rounded-md"></div>
          <div className="h-4 w-full bg-gray-600 rounded-md"></div>
        </div>
      </div>
    );
  }

  const data = {
    labels: ['CodeChef', 'Codeforces', 'LeetCode', 'GeeksForGeeks'],
    datasets: [
      {
        label: 'Rating',
        data: [
          profiles.codeChef ? profiles.codeChef.total : 0,
          profiles.codeForces ? profiles.codeForces.total : 0,
          profiles.leetCode ? profiles.leetCode.totalSolved : 0,
          gfgdata ||0
        ],
        backgroundColor: ['#BB86FC', 'white', 'grey','green'],
        borderColor: ['#BB86FC', 'white', 'grey','green'],
        borderWidth: 1,
        barThickness: 70,
        maxBarThickness: 100,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'No of Questions',
        color: '#ffffff',
      },
      datalabels: {
        color: '#ffffff',
        anchor: 'end',
        align: 'end',
        formatter: (value: number) => value.toString(),
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: '#444444',
        },
      },
      x: {
        ticks: {
          color: '#ffffff',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full  h-full justify-evenly flex flex-col my-2 p-4 border rounded-xl shadow-lg backdrop-blur-lg bg-opacity-75 bg-transparent bg-blur-xl">
      <h1 className="text-white">
        Total Questions:{" "}
        {Number(profiles.codeForces.total) +
          Number(profiles.codeChef.total) +
          Number(profiles.leetCode.totalSolved) + Number(gfgdata)}
      </h1>
      <Bar data={data} options={options} className="pb-3 bg-transparent" />
    </div>
  );
};

export default QuestionCountGraph;
