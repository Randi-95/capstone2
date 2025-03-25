import { NavLink } from "react-router-dom"
import { Calendar, BarChart, Grid, MessageCircle,Menu, DollarSign, Clock, Activity } from "react-feather"
import DarkModeToggle from "../elements/darkMode";
import { useState } from "react";

function Sidebar () {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
        const toggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
        }

    return(
    <div className="">
        <button className="lg:hidden left-2 text-gray-500 fixed top-6 z-50" onClick={toggleSidebar}>
            <Menu size={24} />
        </button>
        <div className={`lg:hidden bg-gray-transparent  fixed top-14 left-0 bottom-0 z-20 px-4 py-5 transition-all duration-200
            ${sidebarOpen ? "w-64" : "w-0 -translate-x-full overflow-hidden"}`}>
            <div className="bg-white p-4 h-full shadow-xl border-solid border-[1.5px] border-gray-200 rounded-xl relative">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <img src="img/logo-capstone.png" alt="" width="30"/>
                        <h1>Financial Tracker</h1>
                    </div>
                    
                </div>
                
                <ul className="flex flex-col gap-4">
                <NavLink
                to="/Dashboard"
                className={({ isActive }) =>
                    `text-sm rounded-xl px-3 py-2 font-medium flex gap-2 items-center ${
                    isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary hover:text-white"
                    }`
                }
                >
                <Grid size={20} />
                <span>Dashboard</span>
                </NavLink>

                <NavLink
                to="/keuangan"
                className={({ isActive }) =>
                    `text-sm rounded-xl px-3 py-2 font-medium flex gap-2 items-center ${
                    isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary hover:text-white"
                    }`
                }
                >
                <DollarSign size={20} />
                <span>Keuangan</span>
                </NavLink>
         
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <BarChart size={20}/>
                        <span>Grafik</span>
                    </li>                        
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Calendar size={20}/>
                        <span>Kalender</span>
                    </li> 
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Clock size={20}/>
                        <span>Transaksi</span>
                    </li> 
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Activity size={20}/>
                        <span>Prediksi</span>
                    </li>                             
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <MessageCircle size={20}/>
                        <span>ChatBot</span>
                    </li>                        
                </ul>
                
                <div className="absolute bottom-4 flex gap-2">
                    <DarkModeToggle colorDark="gray"/>
                    <p className="font-semibold text-gray-500">Ganti Mode</p>
                </div>
            </div>
        </div>
    
        <div className="hidden lg:block bg-gray-100 fixed top-0 left-0 bottom-0 w-[20%] px-4 py-5">
            <div className="bg-white p-4 h-full shadow-xl border-solid border-[1.5px] border-gray-200 rounded-xl relative">
                <div className="flex items-center gap-2 mb-8">
                    <img src="img/logo-capstone.png" alt="" width="30"/>
                    <h1>Financial Tracker</h1>
                </div>
                
                <ul className="flex flex-col gap-4">
                <NavLink
                to="/Dashboard"
                className={({ isActive }) =>
                    `text-sm rounded-xl px-3 py-2 font-medium flex gap-2 items-center ${
                    isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary hover:text-white"
                    }`
                }
                >
                <Grid size={20} />
                <span>Dashboard</span>
                </NavLink>

                <NavLink
                to="/keuangan"
                className={({ isActive }) =>
                    `text-sm rounded-xl px-3 py-2 font-medium flex gap-2 items-center ${
                    isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary hover:text-white"
                    }`
                }
                >
                <DollarSign size={20} />
                <span>Keuangan</span>
                </NavLink>
           
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <BarChart size={20}/>
                        <span>Grafik</span>
                    </li>                        
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Calendar size={20}/>
                        <span>Kalender</span>
                    </li> 
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Clock size={20}/>
                        <span>Transaksi</span>
                    </li> 
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <Activity size={20}/>
                        <span>Prediksi</span>
                    </li>                             
                    <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                        <MessageCircle size={20}/>
                        <span>ChatBot</span>
                    </li>                        
                </ul>
                
                <div className="absolute bottom-4 flex gap-2">
                    <DarkModeToggle colorDark="gray"/>
                    <p className="font-semibold text-gray-500">Ganti Mode</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;