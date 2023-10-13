import React from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center sm:px-16 px-6">
            <div className="xl:max-w-[1380px] w-full">
                <div className="flex justify-between flex-row">
                    <div className="text-black text-[20px] font-poppins font-normal">Hello Shahrukh 👋🏻,</div>
                    <div className="px-3 py-3 flex justify-center gap-2 flex-row items-center bg-white">
                        <BiSearch color="gray" size={25} />
                        <input className="w-64 " placeholder="Search" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
