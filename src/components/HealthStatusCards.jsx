import React from "react";
import "./HealthStatusCards.css";

const healthItems = [
  {
    icon: "🫁",
    title: "Lungs",
    date: "26 Oct 2021",
    progress: 80,
    color: "#FF6B6B",
  },
  {
    icon: "🦷",
    title: "Teeth",
    date: "26 Oct 2021",
    progress: 60,
    color: "#4DD0E1",
  },
  {
    icon: "🦴",
    title: "Bone",
    date: "26 Oct 2021",
    progress: 30,
    color: "#FFA726",
  },
];

export default function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthItems.map((item) => (
        <div className="health-card" key={item.title}>
          <div className="health-card-header">
            <span
              className="health-icon"
              style={{ background: item.color + "22" }}
            >
              {item.icon}
            </span>
            <div>
              <div className="health-title">{item.title}</div>
              <div className="health-date">Date: {item.date}</div>
            </div>
          </div>
          <div className="health-progress-bar">
            <div
              className="health-progress"
              style={{ width: `${item.progress}%`, background: item.color }}
            ></div>
          </div>
          <div className="health-details">Details &gt;</div>
        </div>
      ))}
    </div>
  );
}
