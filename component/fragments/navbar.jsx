import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import DarkModeToggle from "../elements/darkMode";


function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`dark:bg-dark navbar fixed top-0 right-0 left-0 transition-all duration-[0.1s] w-[85%] mx-auto border border-primary mt-4 rounded-[20px] md:rounded-[50px] px-[20px] py-[10px] ${scrolling ? "bg-white shadow-lg" : "bg-white"}`}>
            <div className="container-navbar flex justify-between items-center">
                <div className="nav-logo flex items-center gap-2">
                    <img src="/img/logo-capstone.png" alt="" className="w-[50px]"/>
                    <p className="font-[600] text-[13px] md:text-[18px] hidden md:block">Financial Tracker</p>
                </div>
                <div className="navbar-nav hidden md:block">
                    <ul className="flex gap-6 lg:gap-10">
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-primary">Beranda</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-primary">Tentang Kami</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-primary">Fitur</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-primary">Blog</p></a></li>
                    </ul>
                </div>
                <div className="navbar-button flex gap-[5px]">
                    <Button bgColor='bg-primary' border='border-primary' hover='hover:bg-transparent' hoverText = 'group-hover:text-primary' >Masuk</Button>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
