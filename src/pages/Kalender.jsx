import {
    User,
    Book,
    CreditCard,
    AtSign,
    LogOut,
    Headphones,
    Calendar,
    BarChart,
    Grid,
    MessageCircle,
    Menu,
    DollarSign,
    Clock,
    Activity,
    Plus,
    ArrowDown,
    ArrowUp,
  } from "react-feather";
  import NavMobile from "../component/fragments/navMobile";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import Kalender from "../component/fragments/calender";
  import { Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  function KalenderPage() {
    return (
      <div className="lg:max-w-[70vw] lg:absolute lg:right-10 lg:mt-10 lg:shadow-2xl dark:lg:shadow-gray-800">
        <div className="dashboard-mobile lg:rounded-2xl w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center">
          <div className="p-5 flex justify-between items-center">
            <div className="">
              <h2 className="text-white font-bold text-lg -mt-1">
                Kalender Keuangan
              </h2>
              <p className="text-white text-sm font-light">
                Semua Pemasukan dan Jumlah Pemasukan Pengeluaran akan dicatat diKalander Keuangan
              </p>
            </div>
            <div className="flex gap-2">
              <Link to = '/Riwayat'>
                 <Clock className="text-white" />
              </Link>
            </div>
          </div>
        </div>
  
        <div className="-mt-10 p-6 bg-white dark:bg-black dark:text-gray-100 rounded-t-4xl flex-grow flex flex-col relative">
          <div className="overflow-x-auto w-full flex-grow">
            <div className="min-w-[600px] mx-auto">
              <Kalender />
            </div>
          </div>
        </div>
  
        <div className="z-60">
          <NavMobile />
        </div>
      </div>
    );
  }
  
  export default KalenderPage;