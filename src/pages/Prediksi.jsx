import {
    Clock,
  } from "react-feather";
  import NavMobile from "../component/fragments/navMobile";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Link } from "react-router-dom";
  import { Calendar } from "react-feather";
import GrafikPrediksi from "../component/fragments/grafikPrediksi";
  
  function Prediksi() {
    return (
        <div className="lg:w-[71vw] lg:absolute lg:right-10 dark:shadow-gray-900 lg:mt-10 lg:shadow-2xl">
          <div className="dashboard-mobile lg:rounded-2xl w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center">
            <div className="p-5 flex justify-between items-center">
              <div className="">
                <h2 className="text-white font-bold text-lg -mt-1">
                  Prediksi Keuangan
                </h2>
                <p className="text-white text-sm font-light">
                menganalisis data pemasukan dan pengeluaran untuk memprediksi kondisi keuangan di masa depan dalam bentuk visual.
                </p>
              </div>
              <div className="flex gap-2">
                <Link to = '/Riwayat'>
                   <Clock className="text-white" />
                </Link>
              </div>
            </div>
          </div>
    
          <div className="-mt-10 p-6 bg-white dark:bg-slate-800 rounded-t-4xl">
            <div className="overflow-x-auto w-full">
                 <div>
                            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                              Tanggal Prediksi
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="text-gray-400 size-5" />
                              </div>
                              <input
                                required
                                type="date"
                                className="w-full pl-10 pr-3 py-2 border border-primary dark:border-gray-600 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                placeholder="Pilih Tanggal"
                              />
                            </div>
                          </div>

                          <div className="mt-10">
                           <GrafikPrediksi/>
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