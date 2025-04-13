import {
  User,
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
  Mail,
  ChevronRight,
  HelpCircle,
  Repeat,
  ArrowLeft,
} from "react-feather";
import DarkModeToggle from "../component/elements/darkMode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../services/auth";
import { Link } from "react-router-dom";

function Profile() {
  const [profil, setProfil] = useState("");
  const navigate = useNavigate();

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
    if (token) {
      setProfil(getProfil(token));
    } else {
      navigate("/login");
    }
  }, []);

  const handlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="dark:bg-slate-900">
      <div className="dashboard-mobile w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center ">
        
      </div>
      <div className="border-[1.4px] dark:border-gray-700 shadow-xl dark:shadow-gray-900 border-[#d9d7d7] bg-white dark:bg-gray-900 h-40 w-[90%] lg:w-[50%] mx-auto -mt-20 rounded-xl flex  p-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-primary h-16 w-16 flex justify-center items-center rounded-full">
            <h2 className="text-white font-semibold text-2xl">
              {profil.username?.slice(0, 2).toUpperCase() || ""}
            </h2>
          </div>
          <div className="ml-2 flex flex-col items-center">
            <h2 className="text-gray-800 dark:text-white font-bold lg:text-xl">
              {profil.username}
            </h2>
            <p className="text-xs lg:text-xl font-semibold text-gray-600 dark:text-gray-300">
              {profil.email} | {profil.id}
            </p>
          </div>
        </div>
      </div>

      <Link to="/Riwayat">
      <div className="m-6 cursor-pointer mt-10 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex justify-between border-b-1 border-gray-400 dark:border-gray-600 py-4 px-2">
          <div className="flex gap-2 ">
            <Clock className="text-gray-700 dark:text-gray-300" />
            <h2 className="font-semibold dark:text-gray-300 text-gray-700">Riwayat Transaksi</h2>
          </div>

          <ChevronRight className="text-gray-700 dark:text-gray-300" />
        </div>
      </div>
      </Link>

      <Link to="/TentangFinancialTracker">
      <div className="m-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex justify-between border-b-1 border-gray-400 dark:border-gray-700 py-4 px-2">
          <div className="flex gap-2 ">
            <HelpCircle className="text-gray-700 dark:text-gray-300" />
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">
              Tentang Financial Tracker
            </h2>
          </div>

          <ChevronRight className="text-gray-700 dark:text-gray-300" />
        </div>
      </div>
      </Link>

      <div className="m-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex justify-between border-b-1 border-gray-400 dark:border-gray-700 py-4 px-2">
          <div className="flex gap-2 ">
            <Repeat className="text-gray-700 dark:text-gray-300" />
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">Tema</h2>
          </div>

          <DarkModeToggle />
        </div>
      </div>

      <div
        className="m-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={handlerLogout}
      >
        <div className="flex justify-between border-b-1 border-gray-400 dark:bordr-gray-700 py-4 px-2">
          <div className="flex gap-2 ">
            <LogOut className="text-gray-700 dark:text-gray-300" />
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">Keluar</h2>
          </div>

          <ChevronRight className="text-gray-700 dark:text-gray-300" />
        </div>
      </div>

      <div className="m-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
        <Link to="/Dashboard">
        <div className="flex justify-between border-b-1 border-gray-400 dark:border-gray-700 py-4 px-2">
          <div className="flex gap-2 ">
          <ArrowLeft className="text-gray-700 dark:text-gray-300" />
          <h2 className="font-semibold text-gray-700 dark:text-gray-300">
            Kembali ke Dashboard
            </h2>
          </div>

          
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
