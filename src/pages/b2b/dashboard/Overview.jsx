import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function Overview() {
  return (
    <B2BLayout>
      <h1>Lender Dashboard</h1>
      <p className="b2b-subtitle">
        Centralized borrower analysis and underwriting insights.
      </p>

      <div className="b2b-stats">
        <div className="b2b-card">
          <h3>Borrowers Analysed</h3>
          <p>1,248</p>
        </div>

        <div className="b2b-card">
          <h3>High Risk Profiles</h3>
          <p>312</p>
        </div>

        <div className="b2b-card">
          <h3>Avg Approval Rate</h3>
          <p>42%</p>
        </div>

        <div className="b2b-card">
          <h3>Data Sources Used</h3>
          <p>Credit · Bank · Tax</p>
        </div>
      </div>

      <div className="b2b-info">
        This dashboard provides analytical insights to assist credit decisions.
        Final approval remains at the lender’s discretion.
      </div>
    </B2BLayout>
  );
}
