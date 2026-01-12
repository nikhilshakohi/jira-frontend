import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <div className="app-layout">
      {/* Header */}
      <Header />

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
