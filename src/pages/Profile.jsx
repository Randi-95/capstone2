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
} from "react-feather";
import DarkModeToggle from "../component/elements/darkMode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../services/auth";

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
    <div className="h-[9999px]">
      <div className="dashboard-mobile w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center "></div>
      <div className="border-[1.4px] shadow-xl border-[#d9d7d7] bg-white h-40 w-[90%] lg:w-[50%] mx-auto -mt-20 rounded-xl flex  p-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-primary h-16 w-16 flex justify-center items-center rounded-full">
            <h2 className="text-white font-semibold text-2xl">
              {profil.username?.slice(0, 2).toUpperCase() || ""}
            </h2>
          </div>
          <div className="ml-2 flex flex-col items-center">
            <h2 className="text-gray-800 font-bold lg:text-xl">
              {profil.username}
            </h2>
            <p className="text-xs lg:text-xl font-semibold text-gray-600">
              {profil.email} | {profil.id}
            </p>
          </div>
        </div>
      </div>

      <div className="m-6 cursor-pointer mt-10 hover:bg-gray-100">
        <div className="flex justify-between border-b-1 border-gray-400 py-4 px-2">
          <div className="flex gap-2 ">
            <Clock className="text-gray-700" />
            <h2 className="font-semibold text-gray-700">Riwayat Transaksi</h2>
          </div>

          <ChevronRight className="text-gray-700" />
        </div>
      </div>

      <div className="m-6 cursor-pointer hover:bg-gray-100">
        <div className="flex justify-between border-b-1 border-gray-400 py-4 px-2">
          <div className="flex gap-2 ">
            <HelpCircle className="text-gray-700" />
            <h2 className="font-semibold text-gray-700">
              Tetang Financial Tracker
            </h2>
          </div>

          <ChevronRight className="text-gray-700" />
        </div>
      </div>

      <div className="m-6 cursor-pointer hover:bg-gray-100">
        <div className="flex justify-between border-b-1 border-gray-400 py-4 px-2">
          <div className="flex gap-2 ">
            <Repeat className="text-gray-700" />
            <h2 className="font-semibold text-gray-700">Tema</h2>
          </div>

          <DarkModeToggle />
        </div>
      </div>

      <div
        className="m-6 cursor-pointer hover:bg-gray-100"
        onClick={handlerLogout}
      >
        <div className="flex justify-between border-b-1 border-gray-400 py-4 px-2">
          <div className="flex gap-2 ">
            <LogOut className="text-gray-700" />
            <h2 className="font-semibold text-gray-700">Keluar</h2>
          </div>

          <ChevronRight className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
