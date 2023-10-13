import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import AnalysisCard from "./Components/AnalysisCard.jsx";
import BarChart from "./Components/BarChart";
import DonutChart from "./Components/DonutChart";

const App = () => {
    const activeMenu = false;
    return (
        <div>
            <BrowserRouter>
                <div className="flex">
                    {activeMenu ? (
                        <div className="w-72 bg-[#191D88] fixed sidebar">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 bg-[#191D88]">
                            <Sidebar />
                        </div>
                    )}
                    <div className="w-full bg-gray-100">
                        <div className="my-5">
                            <Navbar />
                        </div>
                        <div className="flex justify-center items-center sm:px-16 px-6">
                            <AnalysisCard />
                        </div>
                        <div className="flex justify-center items-center sm:px-16 px-6">
                            <div className="xl:max-w-[1380px] w-full">
                                <div className="flex flex-1 flex-row">
                                    <BarChart />
                                    <DonutChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
