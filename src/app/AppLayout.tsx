import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="app-layout">
      {/* Header */}
      <header>Jira Header</header>

      <div className="app-body">
        {/* Sidebar */}
        <aside>Sidebar</aside>

        {/* Main content */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
