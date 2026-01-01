import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BankAnalysis() {
  return (
    <B2BLayout>
      <h1>Bank Statement Analysis</h1>
      <p className="b2b-subtitle">
        Cash-flow and income analysis based on borrower bank statements.
      </p>

      {/* BORROWER CONTEXT */}
      <div className="b2b-header-card">
        <div>
          <h3>Rahul Sharma</h3>
          <p>PAN: ABCDE1234F · Account Type: Savings</p>
        </div>
        <div className="b2b-meta">
          <p>Period Analysed: 6 Months</p>
        </div>
      </div>

      {/* DATA SOURCE */}
      <div className="b2b-source-card">
        <h3>Data Source</h3>
        <div className="source-options">
          <button className="b2b-secondary-btn">
            Connect via Account Aggregator
          </button>
          <button className="b2b-secondary-btn">
            Upload Bank Statement (PDF)
          </button>
        </div>
        <p className="source-note">
          Supported formats: PDF · 6–12 months recommended
        </p>
      </div>

      {/* SUMMARY METRICS */}
      <div className="b2b-stats">
        <div className="b2b-card">
          <h3>Avg Monthly Credit</h3>
          <p>₹58,000</p>
        </div>
        <div className="b2b-card">
          <h3>Avg Monthly Debit</h3>
          <p>₹46,500</p>
        </div>
        <div className="b2b-card">
          <h3>Salary / Income Source</h3>
          <p>Consistent</p>
        </div>
        <div className="b2b-card">
          <h3>Net Surplus</h3>
          <p>₹11,500</p>
        </div>
      </div>

      {/* CASH FLOW TABLE */}
      <h3 className="section-title">Monthly Cash Flow</h3>
      <table className="b2b-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Credit</th>
            <th>Total Debit</th>
            <th>Balance Trend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan 2026</td>
            <td>₹60,000</td>
            <td>₹47,200</td>
            <td className="trend-positive">Positive</td>
          </tr>
          <tr>
            <td>Dec 2025</td>
            <td>₹56,500</td>
            <td>₹45,800</td>
            <td className="trend-positive">Positive</td>
          </tr>
          <tr className="row-warning">
            <td>Nov 2025</td>
            <td>₹48,000</td>
            <td>₹49,300</td>
            <td className="trend-negative">Negative</td>
          </tr>
        </tbody>
      </table>

      {/* RISK INDICATORS */}
      <div className="b2b-risk-flags">
        <span className="flag warning">Low Balance Instances</span>
        <span className="flag warning">High Debit Variance</span>
        <span className="flag ok">No Cheque Bounces</span>
      </div>

      {/* ADVISORY */}
      <div className="b2b-info">
        Bank statement analysis assists in assessing repayment capacity.
        Final underwriting decisions should consider credit report and policy rules.
      </div>
    </B2BLayout>
  );
}
