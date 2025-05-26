import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import Human3DView from "./Human3DView";
import HealthStatusCards from "./HealthStatusCards";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-grid-rows">
        <div className="dashboard-row dashboard-row-top">
          <div className="dashboard-col-3d">
            <Human3DView />
          </div>
          <div className="dashboard-col-health">
            <HealthStatusCards />
          </div>
          <div className="dashboard-col-calendar">
            <CalendarView />
          </div>
        </div>
        <div className="dashboard-row dashboard-row-bottom">
          <div className="dashboard-col-activity">
            <ActivityFeed />
          </div>
          <div className="dashboard-col-schedule">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
