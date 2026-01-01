import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step5Result() {
  return (
    <LSPLayout step={4}>
      <h1>Loan Eligibility Result</h1>
      <p className="lsp-subtitle">
        Based on the information provided, here is the outcome of your assessment.
      </p>

      {/* RESULT CARD */}
      <div className="lsp-result-card warning">
        <h2>Conditionally Approved</h2>
        <p className="result-desc">
          Your application meets the basic eligibility criteria.  
          Final approval will depend on lender review and completion of next steps.
        </p>

        <ul className="result-points">
          <li>✔ Credit profile within acceptable range</li>
          <li>✔ Income consistency verified</li>
          <li>⚠ Recent credit activity requires additional review</li>
        </ul>
      </div>

      {/* OFFER SNAPSHOT */}
      <div className="lsp-offer-card">
        <h3>Indicative Loan Details</h3>
        <div className="offer-grid">
          <div>
            <span>Loan Amount</span>
            <strong>₹2,00,000</strong>
          </div>
          <div>
            <span>Tenure</span>
            <strong>24 Months</strong>
          </div>
          <div>
            <span>Estimated EMI</span>
            <strong>₹10,200</strong>
          </div>
          <div>
            <span>Interest Rate</span>
            <strong>As per lender policy</strong>
          </div>
        </div>
      </div>

      {/* NEXT STEP CTA */}
      <button className="lsp-primary-btn">
        Proceed to Lender Review
      </button>

      {/* DISCLAIMER */}
      <p className="lsp-disclaimer">
        This result is indicative and not a guarantee of loan sanction.
        Final terms are subject to lender approval and documentation.
      </p>
    </LSPLayout>
  );
}

