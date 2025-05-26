import { Search, Bell, Plus } from "lucide-react"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </h1>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
        </button>
        <div className="user-profile">
          <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="User Avatar" className="user-avatar" />
        </div>
        <button className="add-btn">
          <Plus size={20} />
        </button>
      </div>
    </header>
  )
}

export default Header
