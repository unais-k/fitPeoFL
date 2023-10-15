import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { useStateContext } from "../constants/contexts";
import { links } from "../constants/data";
import { Link } from "react-router-dom";
import img from "../assets/people01.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 1061) {
            setActiveMenu(false);
        }
    };
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <div className="flex justify-between h-full flex-col">
                    <div className="flex flex-col">
                        <div className="flex mb-4 justify-between items-center">
                            <Link
                                onClick={handleCloseSideBar}
                                className="items-center gap-3 ml-3 mt-4 flex text-xl tracking-tight text-white"
                            >
                                <RiSettingsLine size={40} /> <span>Dashboard</span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setActiveMenu(!activeMenu)}
                                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                            >
                                <GiHamburgerMenu size={30} color="white" />
                            </button>
                        </div>
                        <div className="mt-10">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <div className="flex justify-between hover:bg-[#1450A3] rounded-md mx-3">
                                        <div onClick={handleCloseSideBar} className="flex justify-start items-center">
                                            <p className="text-white mx-3 w-8 h-8">{item.icon}</p>
                                            <p className="text-white m-3 mt-4">{item.title}</p>
                                        </div>
                                        <div className="flex justify-between items-center pe-2">
                                            <BiChevronRight color="white" size={25} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-items-end">
                        <div className="bottom-7 flex justify-between flex-row md:w-72 w-60 me-3 bg-[#1450A3] z-50 text-xl h-fit text-white rounded-xl ">
                            <div className="flex flex-row items-center w-fit">
                                <img src={img} alt="profile" className="w-[40px] ml-3 h-[40px] text-center rounded-full" />
                                <div className="flex flex-col ml-4 py-2">
                                    <h4 className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                                        Evano
                                    </h4>
                                    <p className="font-poppins font-normal text-[12px] leading-[16px] text-dimWhite">
                                        product Manager
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center pe-2">
                                <BiChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
