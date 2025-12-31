import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./public-pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/creditsummary" element={<CreditSummary />} />
      </Route>
    </Routes>
  );
}
