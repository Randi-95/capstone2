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
  import Grafik from "../component/fragments/Grafik";
  import { Link } from "react-router-dom";

  function GrafikPage() {
    return (
      <div className="lg:w-[71vw] lg:absolute lg:right-10 lg:mt-10 dark:shadow-gray-900 lg:shadow-2xl">
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
  
        <div className="-mt-10 px-6 py-6 pb-40 md:pb-30 bg-white dark:bg-black rounded-t-4xl">
          <div className="overflow-x-auto w-full">
            <div className="w-full mx-auto">
              <Grafik />
            </div>
          </div>
        </div>
  
        <div className="z-60">
          <NavMobile />
        </div>
      </div>
    );
  }
  
  export default GrafikPage;