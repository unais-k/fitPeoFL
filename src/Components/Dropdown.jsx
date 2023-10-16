import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export const Dropdown = () => {
    const [select, setSelect] = useState("Last 30 days");
    const [open1, setOpen1] = useState(false);
    const filterData = ["Last 30 days", "Last 15 days", "Today", "Last week"];
    return (
        <div className="w-full md:w-fit font-medium max-h-fit relative">
            <div
                onClick={() => setOpen1(!open1)}
                className="bg-slate-100 md:w-40 w-full text-start  py-3 px-2 font-medium font-poppins flex items-center justify-evenly rounded text-gray-500"
            >
                {select}
                <BiChevronDown size={25} className={`${open1 && "rotate-180"}`} />
            </div>
            <ul
                className={`bg-slate-100 absolute w-full mt-2 overflow-y-auto
                                     ${open1 ? "max-h-60 rounded-md" : "max-h-0"}`}
            >
                {filterData.map((item) => {
                    return (
                        <li
                            key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
                            className="h-full py-1 ps-2 "
                            onClick={() => {
                                setSelect(item);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export const MonthlyDrop = () => {
    const [select, setSelect] = useState("Quarterly");
    const [open1, setOpen1] = useState(false);
    const filterData = ["Half yearly", "Last year"];
    return (
        <div className="w-full md:w-fit font-medium max-h-fit relative">
            <div
                onClick={() => setOpen1(!open1)}
                className="bg-slate-100 md:w-40 w-full text-start  py-2 px-2 font-medium font-poppins flex items-center justify-evenly rounded text-gray-500"
            >
                {select}
                <BiChevronDown size={25} className={`${open1 && "rotate-180"}`} />
            </div>
            <ul
                className={`bg-slate-100 absolute w-full mt-2 overflow-y-auto
                                     ${open1 ? "max-h-60 rounded-md" : "max-h-0"}`}
            >
                {filterData.map((item) => {
                    return (
                        <li
                            key={Math.floor(Math.random()) * Math.floor(Math.random()) + (2 * 124) / 3.5}
                            className="h-full py-1 ps-2 "
                            onClick={() => {
                                setSelect(item);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
