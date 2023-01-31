import { Route, Routes } from "react-router-dom";
import MainLayout from "layouts/main";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<>Index</>} />
        <Route path="portfolio" element={<>Portfolio</>} />
        <Route path="contact" element={<>Contact</>} />
      </Route>
    </Routes>
  );
}
