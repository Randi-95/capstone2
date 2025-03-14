import { Calendar, BarChart, Grid, MessageCircle, Menu, X } from "react-feather"
import DarkModeToggle from "../component/elements/darkMode"
import { useState } from "react"
import SalesChart from "../component/fragments/SalesChart"
import Kalender from "../component/fragments/calender"

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return(
        <div className="flex h-screen bg-gray-100">
            <div className={`lg:hidden bg-gray-transparent  fixed top-0 left-0 bottom-0 z-20 px-4 py-5 transition-all duration-200
                ${sidebarOpen ? "w-64" : "w-0 -translate-x-full overflow-hidden"}`}>
                <div className="bg-white p-4 h-full shadow-xl border-solid border-[1.5px] border-gray-200 rounded-xl relative">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <img src="img/logo-capstone.png" alt="" width="30"/>
                            <h1>Financial Tracker</h1>
                        </div>
                        <button className="text-gray-500" onClick={toggleSidebar}>
                            <X size={20} />
                        </button>
                    </div>
                    
                    <ul className="flex flex-col gap-4">
                        <li className="text-sm bg-primary rounded-xl text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <Grid size={20}/>
                            <span>Dashboard</span>
                        </li>                    
                        <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <BarChart size={20}/>
                            <span>Grafik</span>
                        </li>                        
                        <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <Calendar size={20}/>
                            <span>Kalender</span>
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
                        <li className="text-sm bg-primary rounded-xl text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <Grid size={20}/>
                            <span>Dashboard</span>
                        </li>                    
                        <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <BarChart size={20}/>
                            <span>Grafik</span>
                        </li>                        
                        <li className="text-sm hover:bg-primary rounded-xl text-gray-500 hover:text-white px-3 py-2 font-medium flex gap-2 items-center">
                            <Calendar size={20}/>
                            <span>Kalender</span>
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
       
            <div className="bg-gray-100 lg:ml-[300px] w-full">
                <div className="p-4">    
                        <div className="bg-white w-full fixed left-0 right-0 top-0 md:relative gap-2 items-center rounded-t-xl md:rounded-xl shadow-lg p-4 py-6 flex">
                            <button className="lg:hidden text-gray-500" onClick={toggleSidebar}>
                                <Menu size={24} />
                            </button>
                            <h2 className="text-lg font-bold">Dashboard <span className="text-primary"> FinancialTracker</span></h2>
                        </div>
                    <div className="grid md:grid-cols-3 gap-4  mt-20 md:mt-2">
                        <div class="bg-white max-w-[1000px] w-auto shadow-md rounded-xl p-6 flex flex-col gap-2">
                            <div className="h-10 w-10 bg-purple-100 flex items-center justify-center rounded-[50%]">
                                <span className="text-xl">💰</span>
                            </div>
                                <p className="font-semibold text-lg">Total Pemasukan</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">Rp. 10.000.000</p>
                            </div>
                            <div className="bg-green-300  text-green-600 text-sm w-fit font-normal px-2 py-1 rounded-2xl">▲ 8.12%</div>
                                <p className="text-gray-600 text-sm">total pemasukkan bulan ini</p>
                        </div>
                        <div class="bg-white max-w-[1000px] w-auto shadow-md rounded-xl p-6 flex flex-col gap-2">
                            <div className="h-10 w-10 bg-purple-100 flex items-center justify-center rounded-[50%]">
                                <span className="text-xl">💰</span>
                            </div>
                                <p className="font-semibold text-lg">Total Pemasukan</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">Rp. 10.000.000</p>
                            </div>
                            <div className="bg-green-300  text-green-600 text-sm w-fit font-normal px-2 py-1 rounded-2xl">▲ 8.12%</div>
                                <p className="text-gray-600 text-sm">total pemasukkan bulan ini</p>
                        </div>
                        <div class="bg-white max-w-[1000px] w-auto shadow-md rounded-xl p-6 flex flex-col gap-2">
                            <div className="h-10 w-10 bg-purple-100 flex items-center justify-center rounded-[50%]">
                                <span className="text-xl">💰</span>
                            </div>
                                <p className="font-semibold text-lg">Total Pemasukan</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">Rp. 10.000.000</p>
                            </div>
                            <div className="bg-green-300  text-green-600 text-sm w-fit font-normal px-2 py-1 rounded-2xl">▲ 8.12%</div>
                                <p className="text-gray-600 text-sm">total pemasukkan bulan ini</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-[1.5fr_1fr] mt-9 gap-2">
                        <div className="">
                             <SalesChart />
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-3">
                            <Kalender></Kalender>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>

        
    )
}

export default Dashboard