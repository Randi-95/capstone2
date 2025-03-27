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
            backgroundColor: h.type === "pemasukan" ? "green" : "red",
            borderColor: h.type === "pemasukan" ? "green" : "red",
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
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        eventContent={(arg) => (
          <div className="flex flex-col">
            <div className="font-semibold">{arg.event.extendedProps.description}</div>
            <div className="text-sm">
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
        aspectRatio={1.35}
      />
    </div>
  );
}

export default Kalender;