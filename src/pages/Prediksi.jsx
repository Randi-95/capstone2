import {
    Clock,
  } from "react-feather";
  import NavMobile from "../component/fragments/navMobile";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import Kalender from "../component/fragments/calender";
  import { Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
import FormPrediksi from "../component/fragments/formPrediksi";
  
  function Prediksi() {
    return (
        <div className="lg:w-[71vw] lg:absolute lg:right-10 lg:mt-10 lg:shadow-2xl">
          <div className="dashboard-mobile lg:rounded-2xl w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center">
            <div className="p-5 flex justify-between items-center">
              <div className="">
                <h2 className="text-white font-bold text-lg -mt-1">
                  Grafik Keuangan
                </h2>
                <p className="text-white text-sm font-light">
                  menampilkan data pemasukan, pengeluaran, dan saldo keuangan dalam bentuk visual.
                </p>
              </div>
              <div className="flex gap-2">
                <Link to = '/Riwayat'>
                   <Clock className="text-white" />
                </Link>
              </div>
            </div>
          </div>
    
          <div className="-mt-10 p-6 bg-white  rounded-t-4xl">
            <div class="overflow-x-auto w-full">
              <div class="w-full mx-auto">
                    <FormPrediksi />
              </div>
            </div>
          </div>
    
          <div className="z-60">
            <NavMobile />
          </div>
        </div>
      );
  }
  
  export default Prediksi;