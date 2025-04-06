import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock } from "react-feather";
import NavMobile from "../component/fragments/navMobile";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { getProfil } from "../services/auth";
import url from "../services/api_key";

const LoaderKalender = () => {
  return (
    <div className="grid grid-cols-7 gap-3 mt-6 animate-pulse min-h-[500px]">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl"
        />
      ))}
    </div>
  );
};

function KalenderPage() {
  const token = localStorage.getItem("token");
  const userData = getProfil(token);
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handlerHistory = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${url}/transactions/detail/${userData.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.status === "Sukses") {
          const formattedData = res.data.data.map((h) => ({
            id: h.id,
            title: h.amount.toLocaleString("id-ID"),
            description: h.description,
            start: h.transaction_date,
            backgroundColor: h.type === "pemasukan" ? "#10b981" : "#ef4444",
            borderColor: h.type === "pemasukan" ? "#10b981" : "#ef4444",
            textColor: "#fff",
          }));
          setEvents(formattedData);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      handlerHistory();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="lg:max-w-[70vw] lg:absolute lg:right-10 lg:mt-10 lg:shadow-2xl dark:lg:shadow-gray-800">
      <div className="dashboard-mobile lg:rounded-2xl w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center">
        <div className="p-5 flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold text-lg -mt-1">Kalender Keuangan</h2>
            <p className="text-white text-sm font-light">
              Semua Pemasukan dan Jumlah Pengeluaran akan dicatat di Kalender Keuangan
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/Riwayat">
              <Clock className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* WRAPPER untuk loader dan calendar */}
      <div className="-mt-10 p-6 bg-white dark:bg-black dark:text-gray-100 rounded-t-4xl min-h-[70vh]">
        <div className="w-full">
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <LoaderKalender />
            </div>
          ) : isError ? (
            <p className="text-center text-red-500 mt-10">Gagal memuat data</p>
          ) : (
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              events={events}
              eventContent={(arg) => (
                <div className="flex flex-col p-1">
                  <div className="font-semibold">
                    {arg.event.extendedProps.description}
                  </div>
                  <div className="text-xs truncate">{arg.event.title}</div>
                </div>
              )}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,dayGridWeek,dayGridDay",
              }}
              height="auto"
              contentHeight="auto"
              aspectRatio={1.35}
              className="dark:fc-theme-standard"
            />
          )}
        </div>
      </div>

      <div className="z-60">
        <NavMobile />
      </div>
    </div>
  );
}

export default KalenderPage;
