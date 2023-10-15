import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useStateContext } from "../constants/contexts";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();
    const [isClick, setIsClick] = useState(true);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 1061) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);
    return (
        <div className="flex justify-center items-center sm:px-16 px-6">
            <div className="xl:max-w-[1380px] w-full">
                <div className="flex justify-between flex-row">
                    <div className="md:hidden block pt-2" onClick={handleActiveMenu}>
                        <GiHamburgerMenu size={30} />
                    </div>
                    <div className="text-black text-[20px] pt-2 font-poppins font-medium">Hello Shahrukh 👋🏻,</div>

                    <div className="px-3 py-3 hidden md:flex justify-center rounded-sm gap-2 flex-row items-center bg-white">
                        <BiSearch color="gray" size={25} />
                        <input className="w-64 focus:outline-none" placeholder="Search" type="text" />
                    </div>

                    <div
                        onClick={() => setIsClick((prev) => !prev)}
                        className="px-3 py-3 text-center md:hidden block rounded-md items-center bg-white"
                    >
                        <BiSearch color="gray" size={25} />
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden block w-full  my-4">
                        <div className="px-3 py-3 flex w-full rounded-sm gap-2 flex-row items-center bg-white">
                            <BiSearch color="gray" size={25} />
                            <input className="w-full  focus:outline-none" placeholder="Search" type="text" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
