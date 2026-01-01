import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function CreditDecision() {
  return (
    <B2BLayout>
      <h1>Credit Decision</h1>
      <p className="b2b-subtitle">
        Final lending decision based on underwriting assessment.
      </p>

      {/* BORROWER CONTEXT */}
      <div className="b2b-header-card">
        <div>
          <h3>Rahul Sharma</h3>
          <p>PAN: ABCDE1234F · Application ID: MC-PL-10234</p>
        </div>
        <div className="b2b-meta">
          <p>Decision Date: 12 Jan 2026</p>
        </div>
      </div>

      {/* SYSTEM RECOMMENDATION */}
      <div className="recommendation warning">
        <h3>System Recommendation</h3>
        <p>
          Conditional approval suggested due to recent DPDs and high unsecured
          exposure. Consider reduced ticket size or higher interest rate.
        </p>
      </div>

      {/* LENDER ACTION */}
      <div className="decision-actions">
        <button className="decision-btn approve">Approve</button>
        <button className="decision-btn conditional">Conditional</button>
        <button className="decision-btn reject">Reject</button>
      </div>

      {/* DECISION NOTES */}
      <div className="decision-notes">
        <h3>Decision Notes / Conditions</h3>
        <textarea
          placeholder="Enter decision rationale, conditions, or policy references..."
          rows={4}
        />
      </div>

      {/* AUDIT TRAIL */}
      <h3 className="section-title">Audit Trail</h3>
      <table className="b2b-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Action</th>
            <th>User / System</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 Jan 2026 · 10:42</td>
            <td>Risk Engine Generated</td>
            <td>System</td>
            <td>Medium risk profile</td>
          </tr>
          <tr>
            <td>12 Jan 2026 · 11:05</td>
            <td>Bank Statement Analysed</td>
            <td>System</td>
            <td>Stable income detected</td>
          </tr>
          <tr>
            <td>12 Jan 2026 · 11:20</td>
            <td>Decision Pending</td>
            <td>Credit Officer</td>
            <td>Review in progress</td>
          </tr>
        </tbody>
      </table>

      {/* DISCLAIMER */}
      <div className="b2b-info">
        All credit decisions must comply with internal credit policy and
        applicable regulatory requirements. System recommendations are
        advisory in nature.
      </div>
    </B2BLayout>
  );
}
