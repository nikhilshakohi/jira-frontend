import "./Header.css";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export default function Header({ onToggleSidebar }: HeaderProps) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") ?? "light";
    root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <button
          className="icon"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <span className="logo">Jira</span>

        <nav className="nav">
          <button className="nav-item">Projects</button>
          <button className="nav-item">Issues</button>
          <button className="nav-item">Teams</button>
        </nav>

        <button className="btn primary">Create</button>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <input className="search" placeholder="Search…" aria-label="Search" />

        <button className="icon" aria-label="Notifications">
          🔔
        </button>
        <button
          className="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          🌓
        </button>
        <button className="icon" aria-label="Profile">
          👤
        </button>
      </div>
    </header>
  );
}
