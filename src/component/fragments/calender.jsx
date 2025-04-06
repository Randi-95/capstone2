import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { getProfil } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import url from "../../services/api_key";

function Kalender() {
  const token = localStorage.getItem("token");
  const userData = getProfil(token);
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [historyTransactions, setHistoryTransactions] = useState([]);

  useEffect(() => {
    const handlerHistory = async () => {
      try {
        const res = await axios.get(`${url}/transactions/detail/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.status === "Sukses") {
          setHistoryTransactions(res.data.data);
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
      }
    };

    if (token) {
      handlerHistory();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-black h-full flex flex-col">
      <div className="rounded-lg shadow-md overflow-hidden dark:shadow-gray-700 flex-grow">
        <style jsx>{`
          /* Dark mode styles for FullCalendar */
          .dark .fc {
            --fc-border-color: #4b5563; /* border color */
            --fc-page-bg-color: #1f2937; /* background color */
            --fc-neutral-bg-color: #374151; /* header background */
            --fc-list-event-hover-bg-color: #374151; /* event hover */
            --fc-today-bg-color: rgba(59, 130, 246, 0.15); /* today highlight */
            --fc-event-bg-color: #3b82f6; /* default event bg */
            --fc-event-border-color: #3b82f6; /* default event border */
            --fc-event-text-color: #f3f4f6; /* event text */
            --fc-neutral-text-color: #f3f4f6; /* general text */
            --fc-button-text-color: #f3f4f6; /* button text */
            --fc-button-bg-color:rgb(46, 52, 61); /* button bg */
            --fc-button-border-color:rgb(93, 99, 109); /* button border */
            --fc-button-hover-bg-color:rgb(36, 44, 61); /* button hover */
            --fc-button-hover-border-color: #6b7280; /* button hover border */
            --fc-button-active-bg-color: rgb(20, 25, 36); /* button active */
            --fc-button-active-border-color:rgb(43, 52, 68); /* button active border */
          }
          

          .dark .fc td, .dark .fc th {
            border-color: #4b5563;
          }
          
          .dark .fc-event {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          }

          .fc {
            height: 100% !important;
          }
        `}</style>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          eventContent={(arg) => (
            <div className="flex flex-col p-1">
              <div className="font-semibold">{arg.event.extendedProps.description}</div>
              <div className="text-xs truncate">
                {arg.event.title}
              </div>
            </div>
          )}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          height="100%"
          contentHeight="auto"
          aspectRatio={1.35}
          className="dark:fc-theme-standard"
        />
      </div>
    </div>
  );
}

export default Kalender;