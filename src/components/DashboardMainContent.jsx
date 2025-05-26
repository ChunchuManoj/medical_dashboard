import DashboardOverview from "./DashboardOverview"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import Human3DView from "./Human3DView"
import HealthStatusCards from "./HealthStatusCards"
import "./DashboardMainContent.css"

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-content">
        <DashboardOverview />
        <div className="dashboard-grid">
          <div className="grid-item-model">
            <Human3DView />
          </div>
          <div className="grid-item-health">
            <HealthStatusCards />
          </div>
          <div className="grid-item-calendar">
            <CalendarView />
          </div>
          <div className="grid-item-activity">
            <ActivityFeed />
          </div>
          <div className="grid-item-schedule">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
