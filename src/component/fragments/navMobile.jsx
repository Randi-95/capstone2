import {
  Calendar,
  BarChart,
  Grid,
  MessageCircle,
  Menu,
  DollarSign,
  Clock,
  Activity,
  Home,
} from "react-feather";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function NavMobile() {
  
  return (
    <div className="nav-mobile fixed bottom-0 lg:bottom-auto lg:top-0 right-0 left-0 z-50 bg-white dark:bg-gray-800 shadow-2xl dark:shadow-gray-900 lg:h-[90vh] rounded-xl lg:w-[20vw] lg:p-10 lg:m-10">
      <div className="shadow-[0_-8px_10px_-1px_rgba(0,0,0,0.1)] lg:shadow-none w-full py-4 flex lg:flex-col justify-evenly h-full p-2 px-4">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-bold lg:text-xl text-primary lg:flex-row lg:gap-2 text-xs flex flex-col items-center"
              : "text-xs lg:text-xl flex flex-col lg:flex-row lg:gap-2 items-center text-gray-500 dark:text-gray-300"
          }
        >
          <Home className="" /> Beranda
        </NavLink>
        <NavLink
          to="/Kalender"
          className={({ isActive }) =>
            isActive
              ? "font-bold lg:text-xl text-primary lg:flex-row lg:gap-2 text-xs flex flex-col items-center"
              : "text-xs lg:text-xl flex flex-col lg:flex-row lg:gap-2 items-center text-gray-500 dark:text-gray-300"
          }
        >
          <Calendar /> Kalender
        </NavLink>
        <NavLink
          to="/Prediksi"
          className={({ isActive }) =>
            isActive
              ? "font-bold lg:text-xl text-primary lg:flex-row lg:gap-2 text-xs flex flex-col items-center"
              : "text-xs lg:text-xl flex flex-col lg:flex-row lg:gap-2 items-center text-gray-500 dark:text-gray-300"
          }
        >
          <Activity /> Prediksi
        </NavLink>
        <NavLink
          to="/Grafik"
          className={({ isActive }) =>
            isActive
              ? "font-bold lg:text-xl text-primary lg:flex-row lg:gap-2 text-xs flex flex-col items-center"
              : "text-xs lg:text-xl flex flex-col lg:flex-row lg:gap-2 items-center text-gray-500 dark:text-gray-300"
          }
        >
          <BarChart /> Grafik
        </NavLink>
        <NavLink
          to="/Chatbot"
          className={({ isActive }) =>
            isActive
              ? "font-bold lg:text-xl text-primary lg:flex-row lg:gap-2 text-xs flex flex-col items-center"
              : "text-xs lg:text-xl flex flex-col lg:flex-row lg:gap-2 items-center text-gray-500 dark:text-gray-300"
          }
        >
          <MessageCircle /> Chatbot
        </NavLink>
      </div>
    </div>
  );
}

export default NavMobile;