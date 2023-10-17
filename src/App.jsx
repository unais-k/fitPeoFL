import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import AnalysisCard from "./Components/AnalysisCard.jsx";
import { DonutChart } from "./Components/DonutChart";
import { BiSearch } from "react-icons/bi";
import { Dropdown } from "./Components/Dropdown.jsx";
import Table from "./Components/Table.jsx";
import { useStateContext } from "./constants/contexts.jsx";
import BarGraph from "./Components/BarGraph.jsx";

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative">
                    {activeMenu ? (
                        <div className="max-w-72 md:w-72 overflow-hidden fixed bg-[#191D88] sidebar">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 overflow-hidden bg-[#191D88]">
                            <Sidebar />
                        </div>
                    )}
                    <div className="w-full md:ml-72 pb-20 bg-gray-100">
                        <div className="mt-8 mb-10">
                            <Navbar />
                        </div>
                        <div className="flex justify-center items-center sm:px-16 px-3">
                            <AnalysisCard />
                        </div>
                        <div className="flex justify-center items-center sm:px-16 px-6">
                            <div className="xl:max-w-[1380px] w-full">
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                    <div className="col-span-2 my-10 py-4 px-5 bg-white rounded-md">
                                        <BarGraph />
                                    </div>
                                    <div className="my-10 py-4 px-5 bg-white rounded-md">
                                        <DonutChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center sm:px-16 px-6">
                            <div className="xl:max-w-[1380px] w-full bg-white rounded-md">
                                <div className="px-5 py-4">
                                    <div className="flex justify-between flex-col sm:flex-row">
                                        <div className="text-[24px] font-medium text-black sm:my-0 my-3 font-poppins flex justify-center items-center">
                                            Product Sell
                                        </div>
                                        <div className="flex justify-between flex-col md:flex-row gap-3">
                                            <div className="px-3 py-3 flex justify-center rounded-md gap-2 flex-row items-center bg-slate-100">
                                                <BiSearch color="gray" size={25} />
                                                <input
                                                    className="w-56 bg-slate-100 border border-slate-100 focus:border-slate-100 focus:outline-none"
                                                    placeholder="Search"
                                                    type="text"
                                                />
                                            </div>
                                            <div>
                                                <Dropdown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <Table />
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
