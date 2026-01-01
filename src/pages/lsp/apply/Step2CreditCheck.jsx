import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step2CreditCheck() {
  return (
    <LSPLayout step={1}>
      <h1>Checking Your Credit</h1>
      <p className="lsp-subtitle">
        We are analysing your credit profile securely.
      </p>

      {/* ANALYSIS STATE */}
      <div className="lsp-card center">
        <div className="loader"></div>
        <p className="analysis-text">
          Fetching credit report and assessing eligibility…
        </p>
      </div>

      {/* RESULT (SAMPLE: ELIGIBLE) */}
      <div className="lsp-result success">
        <h3>You're Eligible to Proceed</h3>
        <p>
          Your credit profile meets the minimum criteria to continue
          with the loan application.
        </p>

        <ul className="result-points">
          <li>✔ Credit score within acceptable range</li>
          <li>✔ No severe recent delinquencies</li>
          <li>✔ Credit behaviour appears stable</li>
        </ul>

        <button className="lsp-primary-btn">
          Continue to Employment Details
        </button>
      </div>

      {/* DISCLAIMER */}
      <p className="lsp-disclaimer">
        This eligibility check is indicative. Final approval is subject
        to further verification and lender policies.
      </p>
    </LSPLayout>
  );
}

