import { User, CreditCard,AtSign, LogOut, Headphones ,Calendar, BarChart, Grid, MessageCircle,Menu, DollarSign, Clock, Activity } from "react-feather"
import NavMobile from "../component/fragments/navMobile";


function DashboardMobile(){
    return(
    <div className="">
        <div className="dashboard-mobile w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center">
            <div className="p-5 flex justify-between items-center">
                <div className="">
                    <p className="text-white text-sm font-light">Selamat datang</p>
                    <h2 className="text-white font-bold text-lg -mt-1">Randi</h2>
                </div>
                <div className="flex gap-2">
                    <Headphones className="text-white"/>
                    <User className="text-white"/>
                </div>
            </div> 

            <div className="w-[90%] grid grid-cols-[1fr_1.2fr]  h-40 bg-white border-[1.4px] shadow-xl border-[#d9d7d7] mx-auto mt-10 rounded-lg">
                <div className=" pr-4 border-r-[1.4px] h-fit border-[#b0afaf] mt-1 w-full"> 
                    <div className="flex items-center gap-1 p-2">
                        <img src="/img/logo-capstone.png" alt="" className="w-8"/>
                        <p className="text-[#272727] font-bold">BALANCE</p>
                    </div>
                    <div className="px-3">
                        <p className="text-[#272727] font-semibold text-md">Rp 1.000.000</p>
                    </div>
                </div>
                <div className="h-20  w-full justify-center flex items-center gap-2 ">
                    <div className="flex flex-col items-center">
                        <Activity className="text-primary"/>
                        <p className="text-[#272727] text-xs font-semibold">Prediksi</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <DollarSign className="text-primary"/>
                        <p className="text-[#272727] text-xs font-semibold">Keuangan</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Clock className="text-primary"/>
                        <p className="text-[#272727] text-xs font-semibold">Riwayat</p>
                    </div>
                </div>
            </div>           
        </div>

        <div className="">
            <NavMobile/>
        </div>
    </div>
    )
}

export default DashboardMobile;