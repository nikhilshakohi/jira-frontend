import "./Header.css";

export default function Header() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme") ?? "light";
    root.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <span className="logo">Jira</span>
        <span className="project">My Project</span>
      </div>

      <div className="header-center">
        <input className="search" placeholder="Search…" aria-label="Search" />
      </div>

      <div className="header-right">
        <button className="btn primary">Create</button>
        <button className="icon" aria-label="Notifications">
          🔔
        </button>
        <button className="icon" aria-label="Profile">
          👤
        </button>
        <button
          className="icon"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          🌓
        </button>
      </div>
    </header>
  );
}
