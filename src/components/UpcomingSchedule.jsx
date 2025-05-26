import SimpleAppointmentCard from "./SimpleAppointmentCard"
import { upcomingScheduleData } from "../data/appointmentData"
import "./UpcomingSchedule.css"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      {upcomingScheduleData.map((dayGroup, index) => (
        <div key={index} className="schedule-day-group">
          <h4 className="day-title">{dayGroup.day}</h4>
          <div className="appointments-list">
            {dayGroup.appointments.map((appointment, appointmentIndex) => (
              <SimpleAppointmentCard key={appointmentIndex} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
