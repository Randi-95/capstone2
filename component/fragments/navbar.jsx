import React, { useEffect, useState } from "react";
import Button from "../elements/Button";


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
        <div className={`navbar fixed top-0 right-0 left-0 transition-all duration-[0.1s] ${scrolling ? "bg-white shadow-lg px-[12px] py-[20px]" : "bg-white px-[25px] py-[30px]"}`}>
            <div className="container-navbar flex justify-between items-center">
                <div className="nav-logo">
                    <h2 className="text-[20px] text-[#7f5efd] font-[700]">FinYouth</h2>
                </div>
                <div className="navbar-nav hidden md:block">
                    <ul className="flex gap-4">
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-[#7f5efd]">Beranda</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-[#7f5efd]">Tentang Kami</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-[#7f5efd]">Fitur</p></a></li>
                        <li><a href=""><p className="text-[#828282] text-[16px] font-[500] hover:text-[#7f5efd]">Kontak</p></a></li>
                    </ul>
                </div>
                <div className="navbar-button flex gap-[5px]">
                    <Button bgColor='bg-[#7f5efd]' border='border-[#7f5efd]' hover='hover:bg-transparent' hoverText = 'group-hover:text-[#4CB92D] ' >Masuk</Button>
                    <Button bgColor='bg-transparent' border='border-[#7f5efd]' text='text-[#7f5efd]' hover="hover:bg-[#4CB92D]" hoverText="group-hover:text-white">Daftar</Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
