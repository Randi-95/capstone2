import { User, CreditCard,AtSign, LogOut, Headphones ,Calendar, BarChart, Grid, MessageCircle,Menu, DollarSign, Clock, Activity, Plus, ArrowDown, ArrowUp } from "react-feather"
import NavMobile from "../component/fragments/navMobile";
import SalesChart from "../component/fragments/SalesChart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function DashboardMobile(){
    return(
    <div className="h-[9999px]">
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

            <div className="w-[90%] pb-3 bg-white border-[1.4px] shadow-xl border-[#d9d7d7] mx-auto mt-10 rounded-lg">
                <div className="grid grid-cols-[1fr_1.2fr]">
                <div className=" pr-4 border-r-[1px] h-fit border-[#d9d7d7] mt-1 w-full"> 
                    <div className="flex items-center gap-1 p-2">
                        <img src="/img/logo-capstone.png" alt="" className="w-8"/>
                        <p className="text-[#272727] font-bold">BALANCE</p>
                    </div>
                    <div className="px-3">
                        <p className="text-[#272727] font-bold text-md">Rp 1.000.000</p>
                    </div>
                </div>
                <div className="h-20  w-full justify-center flex items-center gap-2 ">
                    <div className="flex flex-col gap-2 items-center">
                        <BarChart className="text-primary"/>
                        <p className="text-[#696666] text-xs font-bold">Grafik</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <DollarSign className="text-primary"/>
                        <p className="text-[#696666] text-xs font-bold">Keuangan</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Clock className="text-primary"/>
                        <p className="text-[#696666] text-xs font-bold">Riwayat</p>
                    </div>
                </div>
                </div>
                <div className="w-full border-t-[1px] border-[#d9d7d7] grid grid-cols-[1fr_1.2fr]">
                    <div className="flex gap-3 mt-2 ml-2">
                        <div className="flex flex-col items-center">
                            <Plus className="bg-gradient-to-r from-[#7f5efd] to-[#4f9efd] p-1 size-6 rounded-full text-white"/>
                            <p className="text-xs text-[#696666]">Pemasukan</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ArrowDown className="bg-gradient-to-r from-[#7f5efd] to-[#4f9efd] p-1 size-6 rounded-full text-white"/>
                            <p className="text-xs text-[#696666]">Pengeluaran</p>
                        </div> 
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-1 border border-[#d9d7d7] p-1 px-2 rounded-xl bg-gradient-to-r from-[#7f5efd] to-[#4f9efd]">  
                            <img src="/img/logo-capstonewhite.png" alt="" className="size-5"/>
                            <p className="text-[#ffffff] font-semibold text-xs">FINANCIAL TRACKER</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>

        <div className="z-60">
            <NavMobile/>
        </div>

        <div className="p-4 mt-20 z-20">
            <div className="judul flex items-center justify-between">
                <h2 className="text-primary font-bold text-2xl">Transaksi</h2>
                <p className="text-primary text-sm font-semibold">Lihat Semua</p>
            </div>

            <div className="flex flex-col gap-4 mt-5">
            <div className="mt-2 flex justify-between">
                <div className="flex items-center">
                    <ArrowUp className="bg-green-400 p-1 size-10 rounded-full text-white"/>
                    <div className="flex flex-col ml-2">
                        <h2 className="text-xl font-medium">Gaji Bulanan</h2>
                        <p className="text-sm text-gray-400">20 Maret 2025</p>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <h2 className="text-green-500 text-xl font-bold">8.000.000</h2>
                    <p className="text-sm text-gray-400 font-semibold">Pemasukan</p>
                </div>
            </div>

            <div className="mt-2 flex justify-between">
                <div className="flex items-center">
                    <ArrowDown className="bg-red-500 p-1 size-10 rounded-full text-white"/>
                    <div className="flex flex-col ml-2">
                        <h2 className="text-xl font-medium">Pembayaran Listrik</h2>
                        <p className="text-sm text-gray-400">20 Maret 2025</p>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <h2 className="text-red-500 text-xl font-bold">200.000</h2>
                    <p className="text-sm text-gray-400 font-semibold">Pengeluaran</p>
                </div>
            </div>

            <div className="mt-2 flex justify-between">
                <div className="flex items-center">
                    <ArrowDown className="bg-red-500 p-1 size-10 rounded-full text-white"/>
                    <div className="flex flex-col ml-2">
                        <h2 className="text-xl font-medium ">Belanja Bulanan</h2>
                        <p className="text-sm text-gray-400">20 Maret 2025</p>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <h2 className="text-red-500 text-xl font-bold">3.000.000</h2>
                    <p className="text-sm text-gray-400 font-semibold">Pemasukan</p>
                </div>
            </div>
            </div>
        </div>

        <div className="max-w-2xl mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-64"
      >
        <SwiperSlide className="px-2 mt-10">
            <img src="/img/GRAFIK.png" alt="" className="rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="px-2 mt-10">
            <img src="/img/GRAFIK.png" alt="" className="rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="px-2 mt-10">
            <img src="/img/GRAFIK.png" alt="" className="rounded-lg"/>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    )
}

export default DashboardMobile;