import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function CreditScore() {
  return (
    <DashboardLayout>
      <h1>Credit Score</h1>
      <p className="subtitle">
        Based on the latest credit bureau report.
      </p>

      <div className="score-card">
        <div className="score-value">742</div>
        <div className="score-label">Good</div>
        <p className="score-meta">
          Bureau: CIBIL · Report Date: 12 Jan 2026
        </p>
      </div>

      <div className="score-range">
        <h3>Score Range</h3>
        <ul>
          <li><strong>300 – 549</strong> : Poor</li>
          <li><strong>550 – 649</strong> : Fair</li>
          <li><strong>650 – 749</strong> : Good</li>
          <li><strong>750 – 900</strong> : Excellent</li>
        </ul>
      </div>

      <div className="score-factors">
        <h3>Key Factors Affecting Your Score</h3>
        <ul>
          <li>Payment history & DPDs</li>
          <li>Credit utilization</li>
          <li>Number of active loans</li>
          <li>Recent enquiries</li>
          <li>Credit mix</li>
        </ul>
      </div>

      <div className="advisory-box">
        This score is indicative and based on available bureau data.
        Lenders may apply additional criteria during loan evaluation.
      </div>
    </DashboardLayout>
  );
}

