import React from "react";
import { cardData } from "./../assets/index";

const AnalysisCard = () => {
    return (
        <div className="xl:max-w-[1380px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cardData.map((data) => {
                    return (
                        <div key={data.id} className="bg-white px-4 py-6 rounded-xl">
                            <div className="flex items-center justify-center gap-2 flex-row">
                                <div
                                    className={`w-[100px] h-[100px] rounded-full flex justify-center items-center ${data.bg}`}
                                >
                                    {data.icon}
                                </div>
                                <div className="flex justify-start items-start flex-col">
                                    <h2 className="text-gray-400 font-poppins font-medium text-[12px]">{data.title}</h2>
                                    <div className="text-2xl font-poppins font-bold text-black">{data.price}</div>
                                    {data.color === "green" ? (
                                        <div className="flex flex-row justify-start gap-0.5 text-sm">
                                            <p className="text-green-500 pt-0.5">{data.arrow}</p>
                                            <p className="text-green-500 font-bold me-0.5">{data.percentage}</p>
                                            <p className="text-black font-normal">{data.time}</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-row justify-start gap-0.5 text-sm">
                                            <p className="text-red-500 pt-0.5">{data.arrow}</p>
                                            <p className="text-red-500 font-bold me-0.5">{data.percentage}</p>
                                            <p className="text-black font-normal">{data.time}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnalysisCard;
