import React from "react";
import { MonthlyDrop } from "./Dropdown";
import { BarGraphData } from "../constants/data";

const BarGraph = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                {/* heading  */}
                <div className="flex flex-col">
                    <div className="text-black font-poppins font-medium text-[22px]">Overview</div>
                    <div className="text-sm text-gray-400">Monthly Earning</div>
                </div>
                <div>
                    {/* dropdown */}
                    <MonthlyDrop />
                </div>
            </div>
            <div>
                {/* bar */}
                <div className="flex flex-col items-center w-full bg-white">
                    <div className="flex items-end flex-grow w-full mt-2 space-x-5">
                        {BarGraphData.map((data) => (
                            <div key={data.id} className="relative flex flex-col items-center flex-grow pb-5 group">
                                <div
                                    style={{ height: `${data.h}px` }}
                                    className={`relative flex justify-center w-full bg-indigo-400 mb-3 rounded-md`}
                                ></div>
                                <span className="font-poppins absolute bottom-0 text-xs text-gray-400 font-bold">
                                    {data.month}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarGraph;
