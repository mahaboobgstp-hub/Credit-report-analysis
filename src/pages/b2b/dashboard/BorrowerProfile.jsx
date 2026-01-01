import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BorrowerProfile() {
  return (
    <B2BLayout>
      <h1>Borrower Profile</h1>
      <p className="b2b-subtitle">
        Consolidated borrower overview for underwriting.
      </p>

      <div className="b2b-profile-grid">
        <div className="b2b-card">
          <h3>Basic Details</h3>
          <p>Name: Rahul Sharma</p>
          <p>PAN: ABCDE1234F</p>
          <p>Mobile: 98XXXX321</p>
        </div>

        <div className="b2b-card">
          <h3>Credit Snapshot</h3>
          <p>Credit Score: 721</p>
          <p>Active Loans: 3</p>
          <p>Negative Accounts: 1</p>
        </div>

        <div className="b2b-card">
          <h3>Risk Indicators</h3>
          <p>Recent DPDs: Yes</p>
          <p>High Utilization: Yes</p>
          <p>Overall Risk: Medium</p>
        </div>
      </div>

      <div className="b2b-info">
        Detailed analysis modules are available in the sidebar.
      </div>
    </B2BLayout>
  );
}

