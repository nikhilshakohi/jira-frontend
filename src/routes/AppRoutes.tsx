import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../app/AppLayout";

import Board from "../pages/Board";
import Projects from "../pages/Projects";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import Issues from "../pages/Issues";
import Issue from "../pages/Issue";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Board />} />
          <Route path="projects" element={<Projects />} />
          <Route path="issues" element={<Issues />} />
          <Route path="issues/:id" element={<Issue />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
