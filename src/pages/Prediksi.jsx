import { Clock } from "react-feather";
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
              menganalisis data pemasukan dan pengeluaran untuk memprediksi
              kondisi keuangan di masa depan dalam bentuk visual.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/Riwayat">
              <Clock className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="-mt-10 p-6 bg-white dark:bg-slate-800 rounded-t-4xl">
        <div className="overflow-x-auto w-full">
          <div className="mt-10 mb-20">
            <GrafikPrediksi />
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
