import { useState } from "react";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metrics = [
    {
      id: 1,
      label: "Total Patients",
      value: "2,847",
      change: "+12%",
      trend: "up",
    },
    {
      id: 2,
      label: "Active Cases",
      value: "1,234",
      change: "+5%",
      trend: "up",
    },
    { id: 3, label: "Recovery Rate", value: "94%", change: "+2%", trend: "up" },
    {
      id: 4,
      label: "Avg. Wait Time",
      value: "15m",
      change: "-8%",
      trend: "down",
    },
  ];

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h2>Dashboard</h2>
        <span className="week-indicator">This Week</span>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`metric-card ${
              hoveredMetric === metric.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredMetric(metric.id)}
            onMouseLeave={() => setHoveredMetric(null)}
          >
            <div className="metric-content">
              <h3>{metric.label}</h3>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.trend}`}>
                {metric.change}
                <span className="trend-icon">
                  {metric.trend === "up" ? "↑" : "↓"}
                </span>
              </div>
            </div>
            <div className="metric-chart">
              {/* Placeholder for mini chart */}
              <div className="chart-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
