import { Calendar, BarChart, Grid, MessageCircle, Menu, X } from "react-feather"
import DarkModeToggle from "../component/elements/darkMode"
import { useState } from "react"

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return(
        <div className="flex h-screen overflow-hidden">
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
       
            <div className="bg-gray-100 fixed top-0 right-0 bottom-0 left-0 lg:left-[20%]">
                <div className="p-4">
                    <button className="lg:hidden text-gray-500 mb-4" onClick={toggleSidebar}>
                        <Menu size={24} />
                    </button>
                    
                    {/* Your dashboard content here */}
                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <h2 className="text-lg font-semibold">Dashboard Content</h2>
                        <p>Your dashboard content goes here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard