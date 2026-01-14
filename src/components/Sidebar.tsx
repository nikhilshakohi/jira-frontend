import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-item active">Dashboard</div>
        <div className="sidebar-item">Projects</div>
        <div className="sidebar-item">Issues</div>
        <div className="sidebar-item">Settings</div>
      </nav>
    </aside>
  );
}
