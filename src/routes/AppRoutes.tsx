import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../pages/Board";
import NotFound from "../pages/NotFound";
import AppLayout from "../app/AppLayout";
import Issue from "../pages/Issue";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Board />} />
          <Route path="/issue/:id" element={<Issue />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
