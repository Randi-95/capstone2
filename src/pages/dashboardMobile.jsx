import {
  User,
  Headphones,
  BarChart,
  DollarSign,
  Clock,
  Plus,
  ArrowDown,
  ArrowUp,
} from "react-feather";
import NavMobile from "../component/fragments/navMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../services/auth";
import url from "../services/api_key";
import axios from "axios";

function DashboardMobile() {
  const navigate = useNavigate();
  const [profil, setProfil] = useState(null);
  const [summaryTransactions, setSummaryTransactions] = useState({
    saldo_sekarang: "Rp. 0"
  });
  const [historyTransactions, setHistoryTransactions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const userProfile = getProfil(token);
      setProfil(userProfile);
    } catch (error) {
      console.error("Error getting user profile:", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    let userData;
    try {
      userData = getProfil(token);
    } catch (error) {
      console.error("Error getting user profile:", error);
      return;
    }

    const handlerSummary = async () => {
      try {
        const res = await axios.get(`${url}/transactions/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (res.data.status === "Sukses") {
          setSummaryTransactions(res.data.data || { saldo_sekarang: "Rp. 0" });
        }
      } catch (err) {
        console.error("Error fetching summary:", err);
        setSummaryTransactions({ saldo_sekarang: "Rp. 0" });
      }
    };

    const handlerHistory = async () => {
      try {
        const res = await axios.get(
          `${url}/transactions/detail/${userData.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.status === "Sukses") {
          setHistoryTransactions(res.data.data || []);
        }
      } catch (err) {
        console.error("Error fetching history:", err);
        setHistoryTransactions([]);
      }
    };

    handlerSummary();
    handlerHistory();
  }, []);

  return (
    <div className="h-[9999px] lg:max-w-[70vw] lg:absolute lg:right-10 lg:mt-10 lg:shadow-2xl">
      <div className="dashboard-mobile w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center lg:shadow-xl lg:rounded-t-2xl">
        <div className="p-5 flex justify-between items-center">
          <div>
            <p className="text-white text-sm font-light">Selamat datang</p>
            <h2 className="text-white font-bold text-lg -mt-1">
              {profil?.username || "Pengguna"}
            </h2>
          </div>
          <div className="flex gap-2">
            <Headphones className="text-white" />
            <Link to="/Profile">
               <User className="text-white" />
            </Link>
          </div>
        </div>

        <div className="w-[90%] pb-3 bg-white border-[1.4px] shadow-xl border-[#d9d7d7] mx-auto mt-10 rounded-lg">
          <div className="grid grid-cols-[1fr_1.2fr]">
            <div className="pr-4 border-r-[1px] h-fit border-[#d9d7d7] mt-1 w-full">
              <div className="flex items-center gap-1 p-2">
                <img src="/img/logo-capstone.png" alt="" className="w-8" />
                <p className="text-[#272727] font-bold">BALANCE</p>
              </div>
              <div className="px-3">
                <p className="text-[#272727] font-bold text-md">
                  {summaryTransactions.saldo_sekarang}
                </p>
              </div>
            </div>
            <div className="h-20 w-full justify-center flex items-center gap-2">
              <div className="flex flex-col gap-2 items-center">
                <BarChart className="text-primary" />
                <p className="text-[#696666] text-xs font-bold">Grafik</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <DollarSign className="text-primary" />
                <p className="text-[#696666] text-xs font-bold">Keuangan</p>
              </div>
              <Link to="/Riwayat">
                <div className="flex flex-col gap-2 items-center">
                  <Clock className="text-primary" />
                  <p className="text-[#696666] text-xs font-bold">Riwayat</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-[#d9d7d7] grid grid-cols-[1fr_1.2fr]">
            <div className="flex gap-3 mt-2 ml-2">
              <Link to="/Keuangan">
                <div className="flex gap-1 ml-1 items-center">
                  <Plus className="bg-gradient-to-r from-[#7f5efd] to-[#4f9efd] p-1 size-6 rounded-full text-white" />
                  <p className="text-xs text-[#696666]">Tambah Transaksi</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center justify-center gap-1 border border-[#d9d7d7] p-1 px-2 rounded-xl bg-gradient-to-r from-[#7f5efd] to-[#4f9efd]">
                <img
                  src="/img/logo-capstonewhite.png"
                  alt=""
                  className="size-5"
                />
                <p className="text-[#ffffff] font-semibold text-xs">
                  FINANCIAL TRACKER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-60">
        <NavMobile />
      </div>

      <div className="p-4 mt-20 z-20">
        <div className="judul flex items-center justify-between">
          <h2 className="text-gray-800 font-bold text-2xl">Transaksi</h2>
          <Link to="/Riwayat">
            <p className="text-primary text-sm font-semibold">Lihat Semua</p>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          {historyTransactions.length === 0 ? (
            <div className="text-center py-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600 font-medium">
                Belum ada transaksi. Mulai catat keuanganmu sekarang!
              </p>
              <Link
                to="/Keuangan"
                className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Tambah Transaksi
              </Link>
            </div>
          ) : (
            historyTransactions.slice(0, 3).map((history, index) => (
              <div key={index} className="mt-2 flex justify-between">
                <div className="flex items-center">
                  {history.type === "pemasukan" ? (
                    <ArrowUp className="bg-green-400 p-1 size-10 rounded-full text-white" />
                  ) : (
                    <ArrowDown className="bg-red-500 p-1 size-10 rounded-full text-white" />
                  )}

                  <div className="flex flex-col ml-2">
                    <h2 className="text-xl font-medium">
                      {history.description}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {history.transaction_date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <h2
                    className={`text-${
                      history.type === "pemasukan" ? "green" : "red"
                    }-600 text-xl font-bold`}
                  >
                    {history.amount}
                  </h2>
                  <p className="text-sm text-gray-400 font-semibold">
                    {history.type}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="p-2 cursor-grab">
        <h2 className="text-gray-800 font-bold text-2xl mb-4">Fitur</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          className="w-full"
        >
          <SwiperSlide>
            <img src="/img/GRAFIK.png" alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/KALENDER-BANNER.png" alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/PREDIKSI.png" alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/CHATBOT.png" alt="" className="rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default DashboardMobile;