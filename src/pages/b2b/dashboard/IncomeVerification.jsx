import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function IncomeVerification() {
  return (
    <B2BLayout>
      <h1>Income Verification</h1>
      <p className="b2b-subtitle">
        Income validation using statutory and financial documents.
      </p>

      {/* BORROWER CONTEXT */}
      <div className="b2b-header-card">
        <div>
          <h3>Rahul Sharma</h3>
          <p>PAN: ABCDE1234F · Profile: Salaried</p>
        </div>
        <div className="b2b-meta">
          <p>Assessment Year: 2025–26</p>
        </div>
      </div>

      {/* SOURCE CARDS */}
      <div className="income-sources-grid">
        <div className="income-card">
          <h3>Form 26AS</h3>
          <p>Status: Connected</p>
          <p>Reported Income: ₹6,80,000</p>
          <button className="b2b-secondary-btn">Refresh</button>
        </div>

        <div className="income-card">
          <h3>Provident Fund</h3>
          <p>Status: Connected</p>
          <p>Monthly Contribution: ₹3,600</p>
          <button className="b2b-secondary-btn">View Details</button>
        </div>

        <div className="income-card">
          <h3>IT Returns</h3>
          <p>Status: Uploaded</p>
          <p>Declared Income: ₹7,20,000</p>
          <button className="b2b-secondary-btn">View ITR</button>
        </div>

        <div className="income-card">
          <h3>GST Returns</h3>
          <p>Status: Not Applicable</p>
          <p>Business Profile: No</p>
          <button className="b2b-secondary-btn" disabled>
            Not Required
          </button>
        </div>
      </div>

      {/* VERIFICATION SUMMARY */}
      <div className="b2b-stats">
        <div className="b2b-card">
          <h3>Declared Income</h3>
          <p>₹7,20,000</p>
        </div>
        <div className="b2b-card">
          <h3>Verified Income</h3>
          <p>₹6,80,000</p>
        </div>
        <div className="b2b-card">
          <h3>Variance</h3>
          <p>₹40,000</p>
        </div>
        <div className="b2b-card">
          <h3>Consistency</h3>
          <p>High</p>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="b2b-info">
        Income figures across Form 26AS, PF, and ITR are largely consistent.
        Minor variance observed within acceptable tolerance.
      </div>

      {/* DISCLAIMER */}
      <div className="b2b-info">
        Income verification is based on documents available at the time of analysis.
        Lenders should independently validate as per internal policy.
      </div>
    </B2BLayout>
  );
}
