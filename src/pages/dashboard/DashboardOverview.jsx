import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import "../../styles/dashboard.css";

export default function DashboardOverview() {
  return (
    <DashboardLayout>
      <h1>Credit Overview</h1>
      <p className="subtitle">
        Summary of your credit health based on latest bureau data.
      </p>

      <div className="stats-grid">
        <StatCard title="Credit Score" value="742" />
        <StatCard title="Active Loans" value="3" />
        <StatCard title="Negative Accounts" value="1" />
        <StatCard title="Recent DPDs" value="2" />
      </div>

      <div className="locked-banner">
        🔒 Unlock detailed credit insights with a subscription.
      </div>
    </DashboardLayout>
  );
}

