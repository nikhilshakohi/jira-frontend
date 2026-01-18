import { NavLink } from "react-router-dom";
import "./sidebar.css";

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
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
