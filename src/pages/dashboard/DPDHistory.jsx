import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function DPDHistory() {
  return (
    <DashboardLayout>
      <h1>DPD History</h1>
      <p className="subtitle">
        Days Past Due (DPD) reflect payment delays reported by lenders.
      </p>

      {/* SUMMARY */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Recent DPDs (Last 6 Months)</h3>
          <p>2</p>
        </div>
        <div className="stat-card">
          <h3>Maximum DPD</h3>
          <p>60</p>
        </div>
        <div className="stat-card">
          <h3>Current Status</h3>
          <p>Improving</p>
        </div>
      </div>

      {/* DPD TABLE */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>DPD</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan 2026</td>
            <td>0</td>
            <td className="status-ok">On Time</td>
          </tr>
          <tr className="row-warning">
            <td>Dec 2025</td>
            <td>30</td>
            <td className="status-warning">Delayed</td>
          </tr>
          <tr className="row-danger">
            <td>Nov 2025</td>
            <td>60</td>
            <td className="status-danger">High Risk</td>
          </tr>
        </tbody>
      </table>

      {/* INTERPRETATION */}
      <div className="info-box">
        <h3>How Lenders View DPD</h3>
        <ul>
          <li>DPD &gt; 0 in last 3 months → High rejection risk</li>
          <li>DPD 30+ → Considered delinquency</li>
          <li>DPD 60+ → Severe negative impact</li>
        </ul>
      </div>

      {/* WHEN TO APPLY */}
      <div className="apply-guidance">
        <h3>When Should You Apply for a Loan?</h3>
        <p>
          Based on your recent DPDs, it is advisable to maintain
          <strong> at least 6 months of zero DPD</strong> before applying
          for new credit.
        </p>
        <p className="note">
          This guidance is indicative and actual approval depends on lender
          policies and other risk factors.
        </p>
      </div>
    </DashboardLayout>
  );
}
