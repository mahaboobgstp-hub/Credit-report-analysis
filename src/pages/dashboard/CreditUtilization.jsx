import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function CreditUtilization() {
  return (
    <DashboardLayout>
      <h1>Credit Utilization</h1>
      <p className="subtitle">
        Percentage of your available credit currently in use.
      </p>

      <div className="utilization-card">
        <h2>72%</h2>
        <p className="utilization-status risk">High Utilization</p>
        <p className="utilization-desc">
          High credit utilization may negatively impact your score and loan
          eligibility.
        </p>
      </div>

      <div className="info-box">
        <h3>How Lenders View Utilization</h3>
        <ul>
          <li>Below 30% → Healthy</li>
          <li>30% – 50% → Acceptable</li>
          <li>Above 50% → High Risk</li>
        </ul>
      </div>

      <div className="apply-guidance">
        <h3>Recommendation</h3>
        <p>
          Reducing utilization below <strong>30%</strong> can significantly
          improve your credit profile over time.
        </p>
      </div>
    </DashboardLayout>
  );
}

