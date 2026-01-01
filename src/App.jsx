import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import CreditScore from "./pages/dashboard/CreditScore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/dashboard/credit-score" element={<CreditScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
