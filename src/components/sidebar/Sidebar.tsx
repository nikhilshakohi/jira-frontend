import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-item">
          Dashboard
        </NavLink>

        <NavLink to="/projects" className="sidebar-item">
          Projects
        </NavLink>

        <NavLink to="/issues" className="sidebar-item">
          Issues
        </NavLink>

        <NavLink to="/settings" className="sidebar-item">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
