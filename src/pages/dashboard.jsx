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
       
            <div className="bg-gray-100 lg:ml-[300px] w-full ">
                <div className="p-4 bg-gray-100">    
                        <div className="bg-white w-full fixed left-0 right-0 top-0 md:relative gap-2 items-center rounded-t-xl md:rounded-xl shadow-lg p-4 py-6 flex">
                            <button className="lg:hidden text-gray-500" onClick={toggleSidebar}>
                                <Menu size={24} />
                            </button>
                            <h2 className="text-lg font-bold">Dashboard <span className="text-primary"> FinancialTracker</span></h2>
                        </div>
                    <div className="grid md:grid-cols-3 gap-4  mt-20 md:mt-2 ">
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
                                <p className="font-semibold text-lg">Total Pengeluaran</p>
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
                                <p className="font-semibold text-lg">Saldo Saat ini</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">Rp. 10.000.000</p>
                            </div>
                            <div className="bg-green-300  text-green-600 text-sm w-fit font-normal px-2 py-1 rounded-2xl">▲ 8.12%</div>
                                <p className="text-gray-600 text-sm">total pemasukkan bulan ini</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-[1.5fr_1fr] mt-2 gap-2">
                        <div className="">
                             <SalesChart />
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-3">
                            <Kalender></Kalender>
                        </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-2 mt-2 ">
                        <div className="bg-white shadow-lg rounded-xl p-5 mt-6 border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg">Transaksi Terbaru</h3>
                                <button className="text-blue-600 text-sm hover:underline">Lihat Semua</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-600">Tanggal</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-600">Deskripsi</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-600">Kategori</th>
                                            <th className="text-right py-3 px-4 font-semibold text-gray-600">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">20 Mar 2025</td>
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">Gaji Bulanan</td>
                                            <td className="py-3 px-4"><span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">Pemasukan</span></td>
                                            <td className="py-3 px-4 text-right font-medium text-green-600 text-sm ">+Rp 8.000.000</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">18 Mar 2025</td>
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">Belanja Bulanan</td>
                                            <td className="py-3 px-4"><span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Pengeluaran</span></td>
                                            <td className="py-3 px-4 text-right font-medium text-red-600 text-sm">-Rp 1.500.000</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">15 Mar 2025</td>
                                            <td className="py-3 px-4 text-gray-800 text-sm font-semibold">Pembayaran Listrik</td>
                                            <td className="py-3 px-4"><span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Pengeluaran</span></td>
                                            <td className="py-3 px-4 text-right font-medium text-red-600 text-sm">-Rp 750.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto mt-6 max-h-full bg-white shadow-lg">
                            <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>
                                </div>
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                                <p className="text-gray-700 text-sm">Halo! Saya asisten keuangan Anda. Ada yang bisa saya bantu tentang keuangan Anda hari ini?</p>
                                </div>
                            </div>


                            <div className="flex items-start justify-end">
                                <div className="bg-blue-600 p-3 rounded-lg rounded-tr-none shadow-sm">
                                <p className="text-white text-sm">Berapa saldo saya saat ini?</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>
                                </div>
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                                    <p className="text-gray-700 text-sm">Saldo Anda saat ini adalah <span className="font-bold">Rp 2.500.000</span>. Apakah Anda ingin melihat rincian transaksi terbaru?</p>
                                </div>
                                <div className="flex justify-between w-full mt-2">
                                <input 
                                    type="text" 
                                    placeholder="Ketik pesan..." 
                                    className="bg-transparent border-none focus:outline-none text-sm flex-1 py-2"
                                />
                                <button className="bg-primary text-white font-semibold px-5 rounded-xl">Kirim</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        
    )
}

export default Dashboard