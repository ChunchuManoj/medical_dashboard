export const calendarData = {
  month: "October 2021",
  dates: [
    { day: 25, hasAppointments: false, isToday: false },
    { day: 26, hasAppointments: true, isToday: false, appointments: ["08:00"] },
    { day: 27, hasAppointments: false, isToday: false },
    { day: 28, hasAppointments: true, isToday: true, appointments: ["11:00"] },
    { day: 29, hasAppointments: true, isToday: false, appointments: ["14:00"] },
    { day: 30, hasAppointments: true, isToday: false, appointments: ["15:00", "09:00"] },
    { day: 31, hasAppointments: false, isToday: false },
  ],
}

export const appointmentCards = [
  {
    type: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr Cameron Williamson",
  },
  {
    type: "physiotherapy",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr Kevin Djores",
  },
]
