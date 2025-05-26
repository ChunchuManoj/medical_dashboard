import "./SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ appointment }) => {
  const getIconEmoji = (icon) => {
    switch (icon) {
      case "checkup":
        return "🩺"
      case "eye":
        return "👁️"
      case "heart":
        return "❤️"
      case "brain":
        return "🧠"
      default:
        return "🏥"
    }
  }

  return (
    <div className={`appointment-card-simple ${appointment.type}`}>
      <div className="appointment-icon">{getIconEmoji(appointment.icon)}</div>
      <div className="appointment-details">
        <h5>{appointment.title}</h5>
        <p className="appointment-time">{appointment.time}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
