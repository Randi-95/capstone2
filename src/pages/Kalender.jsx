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
import { LoaderKalender } from "../component/elements/loader";
import "../index.css";

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
        const res = await axios.get(`${url}/transactions/detail`, {
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
            <h2 className="text-white font-bold text-lg -mt-1">
              Kalender Keuangan
            </h2>
            <p className="text-white text-sm font-light">
              Semua Pemasukan dan Jumlah Pengeluaran akan dicatat di Kalender
              Keuangan
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/Riwayat">
              <Clock className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="-mt-10 px-6 pt-6 pb-40 md:pb-30 bg-white dark:bg-slate-800 dark:text-gray-100 rounded-t-4xl min-h-[70vh]">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <LoaderKalender />
            </div>
          ) : isError ? (
            <p className="text-center text-red-500 mt-10">Gagal memuat data</p>
          ) : (
            <div className="min-w-[600px]">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              events={events}
              eventDisplay="block"
              dayMaxEventRows={true}
              eventContent={(arg) => (
                <div className="flex flex-col p-1">
                  <div className="font-semibold text-sm leading-snug whitespace-normal break-words">
                    {arg.event.extendedProps.description}
                  </div>
                  <div className="text-xs whitespace-normal break-words">
                    {arg.event.title}
                  </div>
                </div>
              )}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,dayGridWeek,dayGridDay",
              }}
              height="auto"
              contentHeight="auto"
              aspectRatio={1.2}
            />
            </div>
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
