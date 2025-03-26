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

function NavMobile() {
  return (
    <div className="nav-mobile fixed bottom-0 right-0 left-0 z-50 bg-white">
      <div className=" shadow-[0_-8px_10px_-1px_rgba(0,0,0,0.1)] w-full py-4 flex justify-between p-2 px-4">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary text-xs flex flex-col items-center"
              : "text-xs flex flex-col items-center"
          }
        >
          <Home className={""} /> Beranda
        </NavLink>
        <NavLink
          to="/Kalender"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary text-xs flex flex-col items-center"
              : "text-xs flex flex-col items-center"
          }
        >
          <Calendar /> Kalender
        </NavLink>
        <NavLink
          to="/prediksi"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary text-xs flex flex-col items-center"
              : "text-xs flex flex-col items-center"
          }
        >
          <Activity /> Prediksi
        </NavLink>
        <NavLink
          to="/chatbot"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary text-xs flex flex-col items-center"
              : "text-xs flex flex-col items-center"
          }
        >
          <MessageCircle /> Chatbot
        </NavLink>
      </div>
    </div>
  );
}

export default NavMobile;
