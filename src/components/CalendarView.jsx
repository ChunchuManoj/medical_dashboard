import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData, appointmentCards } from "../data/calendarData"
import "./CalendarView.css"

const CalendarView = () => {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-btn">
            <ChevronLeft size={16} />
          </button>
          <button className="nav-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days-header">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.dates.map((date, index) => (
            <div
              key={index}
              className={`calendar-date ${date.hasAppointments ? "has-appointments" : ""} ${date.isToday ? "today" : ""}`}
            >
              <span className="date-number">{date.day}</span>
              {date.appointments && (
                <div className="appointment-times">
                  {date.appointments.map((time, timeIndex) => (
                    <span key={timeIndex} className="appointment-time">
                      {time}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card, index) => (
          <div key={index} className={`appointment-card ${card.type}`}>
            <div className="card-icon">{card.type === "dentist" ? "🦷" : "🏥"}</div>
            <div className="card-content">
              <h4>{card.title}</h4>
              <p className="card-time">{card.time}</p>
              <p className="card-doctor">{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView
