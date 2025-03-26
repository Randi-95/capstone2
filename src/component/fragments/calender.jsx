import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



function Kalender() {
    const [events, setEvents] = useState([
        { 
            title: "Meeting", 
            start: new Date() 
        },
        {
            title: "Meeting Project",
            start: "2025-03-20",
            end: "2025-03-20",
          },
        {
            title: "Coding Camp",
            start: "2025-03-25",
            end: "2025-03-27",
        },
      ]);
    
      return (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          headerToolbar={{
            left: "title",
          }}
        />
      );
}

export default Kalender