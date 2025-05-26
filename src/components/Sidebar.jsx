import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"
import { navigationLinks } from "../data/navigationData"
import "./Sidebar.css"

const Sidebar = () => {
  const iconMap = {
    LayoutDashboard,
    History,
    Calendar,
    Clock,
    BarChart3,
    TestTube,
    MessageCircle,
    HelpCircle,
    Settings,
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">General</h3>
        <nav className="sidebar-nav">
          {navigationLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon]
            return (
              <a key={index} href="#" className={`nav-link ${link.active ? "active" : ""}`}>
                <IconComponent size={20} />
                <span>{link.label}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
