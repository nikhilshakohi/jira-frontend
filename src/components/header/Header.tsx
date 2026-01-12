import "./Header.css";

export default function Header() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <span className="logo">Jira</span>
        <span className="project">My Project</span>
      </div>

      <div className="header-center">
        <input className="search" placeholder="Search…" />
      </div>

      <div className="header-right">
        <button className="btn">Create</button>
        <button className="icon">🔔</button>
        <button className="icon">👤</button>
        <button className="icon" onClick={toggleTheme}>🌓</button>
      </div>
    </header>
  );
}
