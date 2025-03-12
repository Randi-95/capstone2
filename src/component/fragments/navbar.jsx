import { useEffect, useState } from "react";
import Button from "../elements/Button";
import DarkModeToggle from "../elements/darkMode";
import {Menu, X} from 'react-feather'
import { NavLink } from "react-router-dom";


function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setOpen] = useState(false)

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

    const toggleMenu = () => {
        setOpen(!isOpen)
    }

    return (
        <div className={`z-40 dark:bg-dark navbar fixed top-0 right-0 left-0 transition-all duration-[0.1s] w-[85%] mx-auto border border-primary mt-4 rounded-[20px] md:rounded-[50px] px-[20px] py-[10px] ${scrolling ? "bg-white shadow-lg" : "bg-white"}`}>
            <div className="container-navbar flex justify-between items-center">
                <div className="nav-logo flex items-center gap-2">
                    <img src="/img/logo-capstone.png" alt="" className="w-[50px]"/>
                    <p className="font-[600] text-[13px] md:text-[18px] hidden md:block dark:text-white"> Financial Tracker</p>
                </div>
                <div className="navbar-nav md:block z-10 ">
                    <ul className={`transition-all duration-300 dark:bg-primary dark:text-white z-40 flex gap-6 lg:gap-10 absolute flex-col right-0  ${isOpen ? "top-[80px] right-0 opacity-100 " : "top-[69px] right-[-900px] opacity-0" } shadow-lg px-10 py-5 bg-white rounded-b-2xl w-[250px] md:static md:flex-row md:w-auto md:top-0 md:py-0 md:px-0 md:bg-transparent md:dark:bg-transparent text-black md:opacity-100 md:shadow-none`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "lg:dark:text-primary text-primary dark:text-white font-[500]" : "text-[16px] font-[500] hover:text-primary"}>Beranda</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/tentangkami" className={({ isActive}) => isActive ? "lg:dark:text-primary  text-primary dark:text-white font-[500]" : "text-[16px] font-[500] hover:text-primary"}>Tentang Kami</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fitur" className={({ isActive }) => isActive ? "lg:dark:text-primary  text-primary dark:text-white font-[500]" : "text-[16px] font-[500] hover:text-primary"}>Fitur</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/blogs" className={({ isActive}) => isActive ? "lg:dark:text-primary text-primary dark:text-white font-[500]" : "text-[16px] font-[500] hover:text-primary"}>Blog</NavLink>
                    </li>
                        <div className="button md:hidden flex flex-col gap-3">
                            <Button to ='/login' bgColor='bg-primary dark:bg-violet-950' border='border-primary' hover='hover: dark:bg-violet-600' hoverText = 'group-hover:text-gray-300 ' classCustom = 'w-full' >Masuk</Button>
                            <Button bgColor='bg-white dark:bg-violet-950' text = 'text-black dark:text-white' border='border-primary' hover='hover: dark:bg-violet-600' hoverText = 'group-hover:text-gray-300 ' classCustom = 'w-full' >Daftar</Button>
                        </div>
                    </ul>
                </div>
                <div className="navbar-button flex items-center gap-[15px]">
                    <div className="button hidden md:block">
                        <Button to='/login' bgColor='bg-primary dark:bg-violet-950' border='border-primary' hover='hover: dark:bg-violet-600' hoverText = 'group-hover:text-gray-300 ' >Masuk</Button>
                    </div>
                    <DarkModeToggle />
                    <div className="menu-button cursor-pointer block md:hidden" onClick={toggleMenu}>
                        {isOpen ?  <X className="dark:text-white" /> : <Menu className="dark:text-white" /> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
