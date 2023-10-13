import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";

const App = () => {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                {activeMenu ? (
                    <div className="w-72 bg-[#191D88] fixed sidebar  ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 bg-[#191D88]">
                        <Sidebar />
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
};

export default App;
