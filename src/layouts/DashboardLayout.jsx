import Sidebar from "../components/dashboard/Sidebar";
import "../styles/dashboard.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">{children}</main>
    </div>
  );
}

