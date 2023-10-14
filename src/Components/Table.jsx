import React from "react";
import tablePhoto from "../assets/Blue-Crystal.jpeg";

const Table = () => {
    return (
        <div className="inline-block w-full">
            <div className="overflow-hidden">
                <table className="w-full">
                    <thead className="border-b">
                        <tr>
                            <th
                                scope="col "
                                className="px-6 py-4 text-start font-poppins font-medium text-[16px] text-gray-400"
                            >
                                Product Name
                            </th>
                            <th
                                scope="col "
                                className="px-6 py-4 text-start font-poppins font-medium text-[16px] text-gray-400"
                            >
                                Stock
                            </th>
                            <th
                                scope="col "
                                className="px-6 py-4 text-start font-poppins font-medium text-[16px] text-gray-400"
                            >
                                Price
                            </th>
                            <th
                                scope="col "
                                className="pe-6 py-4 text-start font-poppins font-medium text-[16px] text-gray-400"
                            >
                                Total Sales
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-start font-poppins font-medium text-[16px] text-black">
                            <td className="px-6 py-2 flex justify-start md:flex-row flex-col gap-5">
                                <div className="flex justify-start items-start">
                                    <img src={tablePhoto} className="h-16 w-fit rounded-md outline-none" alt="tablePhoto" />
                                </div>
                                <div className="flex justify-start flex-col">
                                    <p className="font-poppins text-[18px] font-medium text-black">Abstract 3d</p>
                                    <p className="font-poppins text-[12px] font-medium text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-2 font-normal">32 in stocks</td>
                            <td className="px-6 py-2 font-medium">$45.99</td>
                            <td className="px-6 py-2 font-normal">20</td>
                        </tr>
                        <tr className="text-start font-poppins font-medium text-[16px] text-black">
                            <td className="px-6 py-2 flex justify-start md:flex-row flex-col gap-5">
                                <div className="flex justify-start items-start">
                                    <img src={tablePhoto} className="h-16 w-fit rounded-md outline-none" alt="tablePhoto" />
                                </div>
                                <div className="flex justify-start flex-col">
                                    <p className="font-poppins text-[18px] font-medium text-black">Abstract 3d</p>
                                    <p className="font-poppins text-[12px] font-medium text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-2 font-normal">32 in stocks</td>
                            <td className="px-6 py-2 font-medium">$45.99</td>
                            <td className="px-6 py-2 font-normal">20</td>
                        </tr>
                        <tr className="text-start font-poppins font-medium text-[16px] text-black">
                            <td className="px-6 py-2 flex justify-start md:flex-row flex-col gap-5">
                                <div className="flex justify-start items-start">
                                    <img src={tablePhoto} className="h-16 w-fit rounded-md outline-none" alt="tablePhoto" />
                                </div>
                                <div className="flex justify-start flex-col">
                                    <p className="font-poppins text-[18px] font-medium text-black">Abstract 3d</p>
                                    <p className="font-poppins text-[12px] font-medium text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-2 font-normal">32 in stocks</td>
                            <td className="px-6 py-2 font-medium">$45.99</td>
                            <td className="px-6 py-2 font-normal">20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
