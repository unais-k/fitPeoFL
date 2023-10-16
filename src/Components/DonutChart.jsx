import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [4, 11, 12],
            backgroundColor: ["#FF3FA4", "#793FDF", "#ebf2ff"],
            borderWidth: [0, 0, 0],
            hoverBackgroundColor: ["#FF3FA4", "#793FDF", "#ebf2ff"],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: false,
        },
    },
    cutout: 120,
};

export function DonutChart() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="text-black font-poppins font-medium text-[22px]">Overview</div>
                <div className="text-sm text-gray-400">Monthly Earning</div>
            </div>
            <div className="w-fit h-[300px] mx-auto">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
}
