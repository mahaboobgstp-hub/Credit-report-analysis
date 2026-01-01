import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function RiskEngine() {
  return (
    <B2BLayout>
      <h1>Risk Engine Output</h1>
      <p className="b2b-subtitle">
        Consolidated risk assessment based on credit, income, and behaviour.
      </p>

      {/* BORROWER CONTEXT */}
      <div className="b2b-header-card">
        <div>
          <h3>Rahul Sharma</h3>
          <p>PAN: ABCDE1234F · Profile Type: Salaried</p>
        </div>
        <div className="b2b-meta">
          <p>Assessment Date: 12 Jan 2026</p>
        </div>
      </div>

      {/* RISK SCORE */}
      <div className="risk-score-card">
        <div>
          <h2>Risk Score: 62 / 100</h2>
          <p className="risk-grade medium">Medium Risk</p>
        </div>
        <div className="risk-summary">
          <p>Credit Behaviour: Moderate</p>
          <p>Income Stability: Good</p>
          <p>Repayment Capacity: Adequate</p>
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div className="recommendation warning">
        <h3>Credit Recommendation</h3>
        <p>
          Proceed with caution. Consider lower ticket size or stricter terms
          based on recent DPDs and utilization levels.
        </p>
      </div>

      {/* RISK FACTORS */}
      <div className="risk-factors-grid">
        <div className="b2b-card">
          <h3>Positive Indicators</h3>
          <ul>
            <li>Stable income credits</li>
            <li>No cheque bounces</li>
            <li>Improving DPD trend</li>
          </ul>
        </div>

        <div className="b2b-card">
          <h3>Negative Indicators</h3>
          <ul>
            <li>Recent 30+ DPD</li>
            <li>High unsecured exposure</li>
            <li>Utilization above 60%</li>
          </ul>
        </div>
      </div>

      {/* REPAYMENT CAPACITY */}
      <div className="b2b-stats">
        <div className="b2b-card">
          <h3>Estimated Monthly Income</h3>
          <p>₹58,000</p>
        </div>
        <div className="b2b-card">
          <h3>Existing EMI Obligations</h3>
          <p>₹22,500</p>
        </div>
        <div className="b2b-card">
          <h3>Available Surplus</h3>
          <p>₹11,500</p>
        </div>
        <div className="b2b-card">
          <h3>Indicative FOIR</h3>
          <p>39%</p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="b2b-info">
        This recommendation is system-generated for analytical support.
        Final lending decisions must comply with internal credit policy
        and regulatory requirements.
      </div>
    </B2BLayout>
  );
}

