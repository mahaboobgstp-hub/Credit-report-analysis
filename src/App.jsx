import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import CreditScore from "./pages/dashboard/CreditScore";
import ActiveLoans from "./pages/dashboard/ActiveLoans";
import NegativeAccounts from "./pages/dashboard/NegativeAccounts";
import Subscription from "./pages/dashboard/Subscription";
import DPDHistory from "./pages/dashboard/DPDHistory";
import CreditUtilization from "./pages/dashboard/CreditUtilization";
import CreditMix from "./pages/dashboard/CreditMix";
import B2BOverview from "./pages/b2b/dashboard/Overview";

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
        <Route path="/dashboard/active-loans" element={<ActiveLoans />} />
        <Route path="/dashboard/negative-accounts" element={<NegativeAccounts />} />
        <Route path="/dashboard/subscription" element={<Subscription />} />
        <Route path="/dashboard/dpd-history" element={<DPDHistory />} />
        <Route path="/dashboard/credit-utilization" element={<CreditUtilization />} />
        <Route path="/dashboard/credit-mix" element={<CreditMix />} />
        <Route path="/b2b/dashboard" element={<B2BOverview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
