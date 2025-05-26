import "./ActivityFeed.css"

const ActivityFeed = () => {
  const activityData = [
    { day: "Mon", value: 20 },
    { day: "Tues", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thurs", value: 60 },
    { day: "Fri", value: 35 },
    { day: "Sat", value: 25 },
    { day: "Sun", value: 40 },
  ]

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p className="activity-summary">3 appointments on this week</p>
      </div>

      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-bar-container">
            <div className="chart-bar" style={{ height: `${item.value}%` }} />
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
