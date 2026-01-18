import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-layout">
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <div className="app-body">
        <Sidebar sidebarOpen={sidebarOpen}/>

        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
